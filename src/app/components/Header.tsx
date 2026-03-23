import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f5f0d4] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[#ffa500]">RAM FURNITURE</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-sm"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="px-4 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-sm"
            >
              CATEGORIES
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-4 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-sm"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-sm"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="px-6 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-left"
            >
              CATEGORIES
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-6 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-left"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors text-left"
            >
              CONTACT
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
