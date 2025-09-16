import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

const WixNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Maritime', slug: 'maritime' },
    { name: 'Business Updates', slug: 'business' },
    { name: 'Port Operations', slug: 'ports' },
    { name: 'Trade Analysis', slug: 'analysis' },
    { name: 'All Articles', slug: 'all' }
  ];

  return (
    <>
      {/* Top Navigation Bar - Coral/Orange */}
      <nav className="bg-primary h-12 flex items-center justify-center relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                to={category.slug === 'all' ? '/blog' : `/categories/${category.slug}`}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Social Icons - Desktop only */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-1">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-1">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-1">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/20 md:hidden z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {categories.map((category) => (
                  <Link 
                    key={category.slug}
                    to={category.slug === 'all' ? '/blog' : `/categories/${category.slug}`}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Header - White Background */}
      <header className="bg-background py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent">
              <Search className="h-5 w-5" />
            </Button>

            {/* Main Branding - Centered */}
            <div className="text-center">
              <Link to="/">
                <h1 className="text-3xl lg:text-4xl font-serif font-normal text-foreground mb-1">
                  Nigerian Business & Maritime Digest
                </h1>
                <p className="text-lg text-muted-foreground font-light">
                  Maritime News
                </p>
              </Link>
            </div>

            {/* Social Icons - Mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent p-1">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent p-1">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>

            {/* Placeholder for desktop balance */}
            <div className="hidden md:block w-10"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default WixNavbar;