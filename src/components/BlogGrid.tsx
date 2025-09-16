import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ExternalLink } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage?: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
  publishedAt: string;
}

const BlogGrid = () => {
  // Fallback content for demonstration - replace with actual Hashnode integration
  const fallbackPosts: Post[] = [
    {
      id: '1',
      title: 'Nigeria Ports Authority Announces New Digital Transformation Initiative',
      brief: 'The NPA unveils a comprehensive digital strategy to modernize port operations and enhance efficiency across Nigerian seaports.',
      slug: 'npa-digital-transformation',
      url: '#',
      coverImage: { url: '/api/placeholder/400/250' },
      author: { name: 'Maritime Desk', profilePicture: undefined },
      publishedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Lagos Free Trade Zone Attracts $2.5B in New Investments',
      brief: 'International businesses commit significant capital to expand operations within Lagos Free Trade Zone, boosting economic growth.',
      slug: 'lagos-ftz-investments',
      url: '#',
      coverImage: { url: '/api/placeholder/400/250' },
      author: { name: 'Business Editor', profilePicture: undefined },
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'Shipping Companies Report 40% Increase in Container Traffic',
      brief: 'Major shipping lines operating in Nigerian waters report substantial growth in container handling volumes.',
      slug: 'container-traffic-growth',
      url: '#',
      coverImage: { url: '/api/placeholder/400/250' },
      author: { name: 'Port Reporter', profilePicture: undefined },
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
    }
  ];

  const posts = fallbackPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (false) { // Placeholder for loading state
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse shadow-card">
                <div className="bg-muted h-48 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="bg-muted h-4 rounded mb-4"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-4 rounded w-2/3"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest Maritime & Business News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the most recent developments in Nigerian maritime industry and business sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <Card key={post.id} className="shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {post.coverImage && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.coverImage.url} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.brief}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground"
                  asChild
                >
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Read Full Story</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Ready for Hashnode integration. Update PUBLICATION_HOST in lib/apollo.ts with your blog URL.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;