import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ExternalLink, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Sample blog posts data - replace with actual Hashnode data
  const posts = [
    {
      id: '1',
      title: 'Nigeria Ports Authority Implements New Digital Port Community System',
      excerpt: 'The Nigerian Ports Authority has successfully launched its new digital port community system, aimed at streamlining cargo operations and reducing vessel turnaround time across all major seaports.',
      author: 'Maritime Correspondent',
      date: '2024-03-15',
      category: 'Port Operations',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: '2',
      title: 'Lagos Free Trade Zone Records $3.2B in Export Value',
      excerpt: 'The Lekki Free Trade Zone has achieved a milestone with export values reaching $3.2 billion in the first quarter, driven by increased manufacturing output and improved infrastructure.',
      author: 'Business Editor',
      date: '2024-03-14',
      category: 'Trade & Commerce',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '3',
      title: 'New Maritime Security Framework Reduces Piracy by 40%',
      excerpt: 'Implementation of the comprehensive maritime security framework has led to a significant reduction in piracy incidents within Nigerian waters, boosting confidence among international shipping companies.',
      author: 'Security Analyst',
      date: '2024-03-13',
      category: 'Maritime Security',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '4',
      title: 'Dangote Refinery to Transform Nigeria Petroleum Logistics',
      excerpt: 'The upcoming Dangote Refinery is set to revolutionize petroleum product distribution in Nigeria, with new marine terminals and pipeline infrastructure.',
      author: 'Industry Reporter',
      date: '2024-03-12',
      category: 'Infrastructure',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest News & Analysis
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Stay informed with our comprehensive coverage of Nigeria's maritime and business sectors
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                type="search"
                placeholder="Search articles..."
                className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70 pr-12"
              />
              <Search className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-foreground/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-accent-gold text-accent-gold-foreground">Featured</Badge>
                  </div>
                  <Card className="overflow-hidden shadow-card hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img 
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <Badge variant="outline" className="mb-3">
                          {featuredPost.category}
                        </Badge>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(featuredPost.date)}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="shadow-card hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;