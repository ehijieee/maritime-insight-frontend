import WixNavbar from '@/components/WixNavbar';
import WixFooter from '@/components/WixFooter';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@nigerianbmd.com",
      description: "Send us your questions or story tips"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 (0) 1 234 5678",
      description: "Speak directly with our editorial team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      description: "Our main editorial office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      description: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <WixNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Have a story tip, feedback, or partnership inquiry? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-lg transition-shadow">
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you have news to share, feedback to give, or want to collaborate, we're here to listen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-card">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Editorial Guidelines
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We welcome news tips, press releases, and story suggestions. 
                    All submissions are reviewed by our editorial team for accuracy and relevance.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• News tips: Send us breaking news or developing stories</li>
                    <li>• Press releases: Share company announcements</li>
                    <li>• Opinion pieces: Submit thought leadership articles</li>
                    <li>• Events: Tell us about industry conferences and meetings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Partnership Opportunities
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Interested in partnering with Nigerian Business & Maritime Digest? 
                    We offer various collaboration opportunities for industry organizations.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn About Partnerships
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WixFooter />
    </div>
  );
};

export default Contact;