import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Editorial Policy', path: '/editorial-policy' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Advertise', path: '/advertise' }
  ];

  const categories = [
    { name: 'Maritime News', path: '/categories/maritime' },
    { name: 'Business Updates', path: '/categories/business' },
    { name: 'Port Operations', path: '/categories/ports' },
    { name: 'Trade & Commerce', path: '/categories/trade' },
    { name: 'Industry Analysis', path: '/categories/analysis' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Nigerian Business & Maritime Digest" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold">Nigerian Business</h3>
                <p className="text-sm text-primary-foreground/80">& Maritime Digest</p>
              </div>
            </Link>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted source for comprehensive coverage of Nigeria's maritime industry 
              and business developments.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.path}
                    className="text-primary-foreground/80 hover:text-accent-gold transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            
            <div className="mb-6">
              <p className="text-sm text-primary-foreground/80 mb-3">
                Subscribe to our newsletter for weekly updates
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-gold" />
                <span>+234 (0) 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-gold" />
                <span>info@nigerianbmd.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent-gold mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © {new Date().getFullYear()} Nigerian Business & Maritime Digest. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <Link to="/privacy" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent-gold transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;