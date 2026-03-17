import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GamificationState {
  readArticles: string[];
  bookmarkedArticles: string[];
  unlockedBadges: string[];
  isSubscribed: boolean;
  assessmentScore: number | null;
  bestCombo: number;
  markAsRead: (id: string) => void;
  toggleBookmark: (id: string) => void;
  unlockBadge: (badge: string) => void;
  subscribe: () => void;
  setAssessmentScore: (score: number) => void;
  setBestCombo: (combo: number) => void;
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      readArticles: [],
      bookmarkedArticles: [],
      unlockedBadges: [],
      isSubscribed: false,
      assessmentScore: null,
      bestCombo: 0,
      markAsRead: (id) =>
        set((state) => ({
          readArticles: state.readArticles.includes(id)
            ? state.readArticles
            : [...state.readArticles, id],
        })),
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarkedArticles: state.bookmarkedArticles.includes(id)
            ? state.bookmarkedArticles.filter((articleId) => articleId !== id)
            : [...state.bookmarkedArticles, id],
        })),
      unlockBadge: (badge) =>
        set((state) => ({
          unlockedBadges: state.unlockedBadges.includes(badge)
            ? state.unlockedBadges
            : [...state.unlockedBadges, badge],
        })),
      subscribe: () => set({ isSubscribed: true }),
      setAssessmentScore: (score) => set({ assessmentScore: score }),
      setBestCombo: (combo) => set((state) => ({ bestCombo: Math.max(state.bestCombo, combo) })),
    }),
    {
      name: 'nils-gamification-storage', // Key in localStorage
    }
  )
);

// Add a global listener to sync state with Vercel Postgres when changed
useGamificationStore.subscribe(
  (state) => {
    // Only attempt sync if we have something meaningful to save
    if (
      state.readArticles.length > 0 ||
      state.bookmarkedArticles.length > 0 ||
      state.unlockedBadges.length > 0 ||
      state.isSubscribed
    ) {
      // Fire-and-forget sync to the cloud
      // The API will reject with 401 if the user isn't logged in via Google OAuth, which is expected
      fetch('/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: state })
      }).catch(() => { /* Silent fail if offline or ad-blocked */ });
    }
  }
);
