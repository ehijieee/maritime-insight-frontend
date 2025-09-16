import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide accurate, timely, and comprehensive coverage of Nigeria's maritime and business sectors."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Experienced journalists and industry experts dedicated to bringing you the stories that matter."
    },
    {
      icon: Award,
      title: "Our Standards",
      description: "Committed to the highest standards of journalism, integrity, and professional excellence."
    },
    {
      icon: Clock,
      title: "Our Commitment",
      description: "24/7 coverage ensuring you never miss critical developments in the maritime industry."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Nigerian Business & Maritime Digest
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Your trusted source for comprehensive maritime and business intelligence in Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Leading Maritime Journalism in Nigeria
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since our establishment, Nigerian Business & Maritime Digest has been at the forefront 
                of reporting on Nigeria's dynamic maritime industry. We serve as the bridge between 
                industry developments and the professionals who need to stay informed.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our coverage spans port operations, shipping developments, regulatory changes, 
                trade agreements, and business opportunities across Nigeria's extensive coastline 
                and inland waterways.
              </p>
              <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                Contact Our Team
              </Button>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Monthly Readers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Stories Published</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Industry Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;