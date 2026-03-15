import React from 'react';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
// Auth-Astro provides pre-built React hooks and methods
import { signIn, signOut } from 'auth-astro/client';

export default function AuthPanel() {
  const [session, setSession] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        if (Object.keys(data).length > 0) {
          setSession(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn('google');
  };

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
  };

  if (session) {
    return (
      <div className="flex items-center gap-3 ml-2">
        <img 
          src={session.user?.image || "/nils-digital-studio/favicon.png"} 
          alt={session.user?.name || "User"} 
          className="w-8 h-8 rounded-full border border-primary/20"
        />
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="hidden md:flex items-center rounded-full border border-primary/20 bg-background/50 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
        >
          {loading ? <Loader2 className="h-3 w-3 animate-spin mr-1.5" /> : <LogOut className="h-3 w-3 mr-1.5" />}
          登出
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={loading}
      className="ml-2 flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_15px_rgba(200,160,80,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
    >
      {loading ? (
        <><Loader2 className="h-4 w-4 animate-spin" /> 處理中...</>
      ) : (
        <><LogIn className="h-4 w-4" /> 登入同步進度</>
      )}
    </button>
  );
}
