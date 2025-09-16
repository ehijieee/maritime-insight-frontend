import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Search, TrendingUp, Calendar } from 'lucide-react';

const Sidebar = () => {
  const popularCategories = [
    { name: 'Maritime News', count: 142 },
    { name: 'Port Operations', count: 98 },
    { name: 'Business Updates', count: 76 },
    { name: 'Trade & Commerce', count: 54 },
    { name: 'Industry Analysis', count: 43 }
  ];

  const recentPosts = [
    {
      title: 'New Maritime Safety Regulations Take Effect',
      date: '2 days ago',
      category: 'Regulations'
    },
    {
      title: 'Lagos Port Complex Expansion Update',
      date: '4 days ago',
      category: 'Infrastructure'
    },
    {
      title: 'Nigeria-Ghana Trade Agreement Impact',
      date: '1 week ago',
      category: 'Trade'
    }
  ];

  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <Card className="p-6 shadow-card bg-gradient-card">
        <div className="text-center mb-4">
          <Mail className="h-12 w-12 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-bold text-foreground">Stay Informed</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest maritime and business updates delivered to your inbox
          </p>
        </div>
        
        <div className="space-y-3">
          <Input 
            type="email" 
            placeholder="Your email address"
            className="border-input"
          />
          <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground">
            Subscribe Now
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          Join 10,000+ professionals who trust our insights
        </p>
      </Card>

      {/* Search */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
          <Search className="h-5 w-5 mr-2 text-primary" />
          Quick Search
        </h3>
        <div className="relative">
          <Input 
            type="search" 
            placeholder="Search articles..."
            className="border-input"
          />
          <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </Card>

      {/* Popular Categories */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
          Popular Categories
        </h3>
        <div className="space-y-3">
          {popularCategories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <a 
                href={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}
                className="text-foreground hover:text-primary transition-colors text-sm"
              >
                {category.name}
              </a>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Posts */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
              <h4 className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer mb-1">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.date}</span>
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Advertisement Space */}
      <Card className="p-6 shadow-card bg-muted/30">
        <div className="text-center">
          <div className="bg-primary/10 rounded-lg p-8 border-2 border-dashed border-primary/30">
            <p className="text-sm font-medium text-muted-foreground mb-2">Advertisement</p>
            <p className="text-xs text-muted-foreground">
              Partner with us to reach maritime professionals
            </p>
            <Button variant="outline" size="sm" className="mt-3">
              Learn More
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;