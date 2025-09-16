import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ExternalLink, Archive } from 'lucide-react';

const Categories = () => {
  const { category } = useParams();

  const categories = {
    maritime: {
      name: 'Maritime News',
      description: 'Latest developments in Nigeria\'s maritime industry',
      icon: '⚓'
    },
    business: {
      name: 'Business Updates',
      description: 'Nigerian business news and market analysis',
      icon: '💼'
    },
    ports: {
      name: 'Port Operations',
      description: 'Port activities and operational updates',
      icon: '🚢'
    },
    trade: {
      name: 'Trade & Commerce',
      description: 'International trade and commerce developments',
      icon: '📈'
    },
    analysis: {
      name: 'Industry Analysis',
      description: 'Deep insights and market analysis',
      icon: '📊'
    }
  };

  const currentCategory = category ? categories[category as keyof typeof categories] : null;

  // Sample posts for the category
  const categoryPosts = [
    {
      id: '1',
      title: 'Lagos Port Complex Begins Phase 2 Expansion Project',
      excerpt: 'The Lagos Port Complex has officially commenced the second phase of its massive expansion project, which will increase container handling capacity by 60% upon completion.',
      author: 'Port Reporter',
      date: '2024-03-15',
      image: '/api/placeholder/400/250'
    },
    {
      id: '2',
      title: 'Maritime Academy Launches New Training Programs',
      excerpt: 'The Nigerian Maritime University has introduced specialized training programs for maritime professionals, focusing on modern shipping technologies and safety protocols.',
      author: 'Education Correspondent',
      date: '2024-03-14',
      image: '/api/placeholder/400/250'
    },
    {
      id: '3',
      title: 'Shipping Companies Report Increased Cargo Volume',
      excerpt: 'Major shipping lines operating in Nigerian waters have reported a 25% increase in cargo volume compared to the same period last year.',
      author: 'Maritime Analyst',
      date: '2024-03-13',
      image: '/api/placeholder/400/250'
    }
  ];

  const allCategories = Object.entries(categories);

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
      
      {/* Category Header */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {currentCategory ? (
              <>
                <div className="text-6xl mb-6">{currentCategory.icon}</div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  {currentCategory.name}
                </h1>
                <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                  {currentCategory.description}
                </p>
              </>
            ) : (
              <>
                <Archive className="h-16 w-16 mx-auto mb-6 text-accent-gold" />
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  All Categories
                </h1>
                <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                  Browse all our content categories
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {!currentCategory ? (
            /* All Categories View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCategories.map(([slug, cat]) => (
                <Card key={slug} className="p-8 shadow-card hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{cat.name}</h3>
                  <p className="text-muted-foreground mb-6">{cat.description}</p>
                  <Button 
                    className="bg-primary hover:bg-primary-light text-primary-foreground"
                    asChild
                  >
                    <a href={`/categories/${slug}`}>
                      Browse Articles
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            /* Specific Category View */
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">
                      Latest in {currentCategory.name}
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      {categoryPosts.length} articles found
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="/categories">View All Categories</a>
                  </Button>
                </div>

                <div className="space-y-8">
                  {categoryPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden shadow-card hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <Badge variant="outline" className="mb-3">
                            {currentCategory.name}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;