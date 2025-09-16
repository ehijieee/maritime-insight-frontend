import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Maritime News', slug: 'maritime' },
    { name: 'Business Updates', slug: 'business' },
    { name: 'Industry Analysis', slug: 'analysis' },
    { name: 'Port Operations', slug: 'ports' },
    { name: 'Trade & Commerce', slug: 'trade' }
  ];

  return (
    <header className="bg-card shadow-card border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Nigerian Business & Maritime Digest" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">Nigerian Business</h1>
              <p className="text-sm text-muted-foreground">& Maritime Digest</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border shadow-card">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.slug}>
                    <Link 
                      to={`/categories/${category.slug}`} 
                      className="w-full text-foreground hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <div className="border-l-2 border-primary pl-4">
                <p className="font-medium text-primary mb-2">Categories</p>
                {categories.map((category) => (
                  <Link 
                    key={category.slug}
                    to={`/categories/${category.slug}`} 
                    className="block text-sm text-muted-foreground hover:text-primary mb-1"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;