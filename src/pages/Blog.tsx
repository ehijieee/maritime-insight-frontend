import { useEffect, useState } from "react";
import WixNavbar from '@/components/WixNavbar';
import WixFooter from '@/components/WixFooter';
import Sidebar from '@/components/Sidebar';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ExternalLink, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { getHashnodePosts } from "@/lib/hashnode.ts"; // step 2 fetcher

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getHashnodePosts();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching Hashnode posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading articles...</p>
      </div>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <WixNavbar />

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
                          src={featuredPost.coverImage?.url || "/api/placeholder/400/250"}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <Badge variant="outline" className="mb-3">
                          {featuredPost.category || "News"}
                        </Badge>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.brief}
                        </p>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{featuredPost.author?.name}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(featuredPost.publishedAt)}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="bg-primary hover:bg-primary-light text-primary-foreground">
                          <a
                            href={`https://${import.meta.env.VITE_HASHNODE_HOST}/${featuredPost.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read Full Story
                          </a>
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
                      src={post.coverImage?.url || "/api/placeholder/400/250"}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {post.category || "News"}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.brief}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author?.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a
                          href={`https://${import.meta.env.VITE_HASHNODE_HOST}/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read More
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <WixFooter />
    </div>
  );
};

export default Blog;

