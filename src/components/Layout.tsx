import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Briefcase, Coffee, Music, Info } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Feed', path: '/', icon: Home },
    { name: 'Business', path: '/category/business', icon: Briefcase },
    { name: 'Lifestyle', path: '/category/lifestyle', icon: Coffee },
    { name: 'Play', path: '/category/entertainment', icon: Music },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans text-ink-light items-center justify-center">
      <div className="w-full max-w-md bg-paper min-h-screen sm:min-h-0 sm:border-x sm:border-ink/10 flex flex-col relative sm:shadow-2xl">
        <header className="sticky top-0 z-10 pt-8 px-6 pb-4 border-b border-divider bg-paper flex flex-col relative">
          <div className="flex justify-between items-end mb-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-ink">
              TAPAU NEWS
            </Link>
            <span className="text-[10px] font-bold text-kopi uppercase tracking-widest leading-none pb-1">
              Kopi-O Edition
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-light text-gray-500 italic">Baca cepat. Faham terus.</p>
            <Link to="/about" className="text-[12px] font-bold text-ink uppercase tracking-tighter hover:underline flex items-center gap-1">
              About
            </Link>
          </div>
        </header>

        <main className="flex-1 w-full bg-paper px-4 pt-4 pb-24 relative overflow-hidden space-y-4">
          <Outlet />
        </main>

        <nav className="fixed bottom-0 left-0 right-0 sm:absolute bg-paper border-t border-divider px-8">
          <div className="max-w-md mx-auto flex items-center justify-around h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center justify-center transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="text-ink" />
                  <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter text-ink">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
