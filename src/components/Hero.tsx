import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Nigerian maritime and business landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 lg:px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to 
            <span className="block text-accent-gold">Nigerian Maritime</span> 
            & Business Intelligence
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in Nigeria's maritime industry, 
            business trends, and economic insights that matter to your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90 shadow-hero"
              asChild
            >
              <Link to="/blog" className="flex items-center space-x-2">
                <span className="font-semibold">Explore Latest Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/about" className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold">Learn More</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Featured Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-gold mb-2">500+</div>
            <p className="text-primary-foreground/80">Industry Reports</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-gold mb-2">10K+</div>
            <p className="text-primary-foreground/80">Daily Readers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-gold mb-2">24/7</div>
            <p className="text-primary-foreground/80">News Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;