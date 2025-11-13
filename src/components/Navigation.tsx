import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  const scrollToContact = () => {
    closeMenu();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
  ];

  return (
    <>
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full px-3 pointer-events-none">
        <div className="w-full max-w-[1180px] backdrop-blur-xl bg-white/92 rounded-[32px] border border-primary/10 shadow-[0_24px_70px_rgba(9,20,38,0.2)] flex items-center gap-7 px-8 py-5 pointer-events-auto">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3" onClick={closeMenu}>
            <span className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="/assets/images/an1.png" alt="Aim Bright emblem" className="w-10 h-auto" />
            </span>
            <span className="inline-flex items-center h-8">
              <img 
                src="/assets/images/aim_title.png" 
                alt="Aim Bright" 
                className="h-full w-auto"
                style={{ filter: 'brightness(0) saturate(100%) opacity(0.9)' }}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex-1 hidden md:flex justify-end">
            <ul className="flex items-center gap-4 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative inline-flex items-center justify-center px-7 py-3.5 rounded-[22px] font-semibold text-[1.05rem] tracking-wide transition-colors ${
                        isActive ? 'text-foreground' : 'text-foreground/65 hover:text-foreground'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {({ isActive }) => (
                      <span className="inline-flex items-center gap-2.5">
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-6 h-6 bg-[url('/assets/images/bulb.png')] bg-center bg-contain inline-block drop-shadow-[0_3px_6px_rgba(255,198,73,0.48)]" />
                        )}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:inline-flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="font-semibold rounded-full px-6 py-3 border-2 border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(5,15,35,0.18)]"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="font-semibold rounded-full px-6 py-3 border-2 border-[#ffc649] bg-[#ffc649] text-[#08203c] shadow-[0_14px_30px_rgba(255,198,73,0.35)] hover:bg-[#f4b832] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(255,198,73,0.55)]"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden w-12 h-12 rounded-full border border-foreground/20 bg-white/92 flex flex-col items-center justify-center gap-1.5"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span
              className={`w-4 h-0.5 bg-foreground rounded transition-transform ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-foreground rounded transition-opacity ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-foreground rounded transition-transform ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-foreground/90 backdrop-blur-md flex flex-col pt-28 px-8 pb-8 gap-4 z-40">
          <ul className="list-none m-0 p-0 grid gap-3.5">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={`mobile-${link.to}`}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={`block px-5 py-3.5 text-[1.05rem] rounded-2xl border transition-all ${
                      isActive
                        ? 'bg-[#ffc649]/30 text-white border-[#ffc649]/60'
                        : 'text-white/85 border-white/10 hover:bg-white/10 hover:border-white/30'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
            <li className="mt-3">
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full px-4 py-3 rounded-full bg-[#ffc649] text-[#08203c] font-semibold border-none shadow-[0_14px_28px_rgba(255,198,73,0.4)] hover:bg-[#f4b832]"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
