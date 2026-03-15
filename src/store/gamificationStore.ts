import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GamificationState {
  readArticles: string[];
  bookmarkedArticles: string[];
  unlockedBadges: string[];
  isSubscribed: boolean;
  assessmentScore: number | null;
  markAsRead: (id: string) => void;
  toggleBookmark: (id: string) => void;
  unlockBadge: (badge: string) => void;
  subscribe: () => void;
  setAssessmentScore: (score: number) => void;
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      readArticles: [],
      bookmarkedArticles: [],
      unlockedBadges: [],
      isSubscribed: false,
      assessmentScore: null,
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
    }),
    {
      name: 'nils-gamification-storage', // Key in localStorage
    }
  )
);
