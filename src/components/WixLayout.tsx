import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from 'lucide-react';
import { useEffect, useState } from "react";
import { fetchPosts, Post } from "@/lib/hashnode";
import { Link } from "react-router-dom";

const WixLayout = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(12); // Fetch 12 posts for the layout
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getReadTime = (content?: string) => {
    if (!content) return "3 min read";
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Loading skeletons */}
            <div className="lg:col-span-3 space-y-8">
              <div className="h-6 bg-muted rounded animate-pulse"></div>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-32 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-16 bg-muted rounded animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-6">
              <div className="h-96 bg-muted rounded animate-pulse mb-6"></div>
              <div className="h-8 bg-muted rounded animate-pulse mb-4"></div>
              <div className="h-20 bg-muted rounded animate-pulse"></div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <div className="h-6 bg-muted rounded animate-pulse"></div>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-16 bg-muted rounded animate-pulse"></div>
                  <div className="h-12 bg-muted rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Organize posts for the three-column layout
  const topStories = posts.slice(0, 2);
  const featuredArticle = posts[0];
  const opinionPieces = posts.slice(2, 4);
  const moreArticles = posts.slice(4, 8);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Top Stories */}
          <div className="lg:col-span-3">
            <div className="border-b-2 border-foreground pb-2 mb-6">
              <h2 className="text-2xl font-serif font-medium text-foreground">Top Stories</h2>
            </div>
            
            <div className="space-y-8">
              {topStories.map((story) => (
                <Link key={story.id} to={`/posts/${story.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="mb-4 overflow-hidden rounded-sm">
                      {story.coverImage && (
                        <img 
                          src={story.coverImage.url} 
                          alt={story.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs mb-2 border-muted-foreground">
                      {story.author.name}
                    </Badge>
                    <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:underline">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.brief}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Center Column - Featured Article */}
          <div className="lg:col-span-6">
            {featuredArticle && (
              <Link to={`/posts/${featuredArticle.slug}`}>
                <article className="group cursor-pointer">
                  <div className="mb-6 overflow-hidden rounded-sm">
                    {featuredArticle.coverImage && (
                      <img 
                        src={featuredArticle.coverImage.url} 
                        alt={featuredArticle.title}
                        className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span>{formatDate(featuredArticle.publishedAt)}</span>
                    <span>•</span>
                    <span>{getReadTime(featuredArticle.contentMarkdown)}</span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-serif font-medium text-foreground mb-4 group-hover:underline leading-tight">
                    {featuredArticle.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredArticle.brief}
                  </p>
                </article>
              </Link>
            )}
          </div>

          {/* Right Column - Recent Articles */}
          <div className="lg:col-span-3">
            <div className="border-b-2 border-foreground pb-2 mb-6">
              <h2 className="text-2xl font-serif font-medium text-foreground">Recent Articles</h2>
            </div>
            
            <div className="space-y-8">
              {opinionPieces.map((piece) => (
                <Link key={piece.id} to={`/posts/${piece.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="flex items-start space-x-3 mb-3">
                      {piece.author.profilePicture ? (
                        <img 
                          src={piece.author.profilePicture} 
                          alt={piece.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {piece.author.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{piece.author.name}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(piece.publishedAt)}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:underline">
                      {piece.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {piece.brief}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - More Articles */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moreArticles.map((article) => (
              <Link key={article.id} to={`/posts/${article.slug}`}>
                <article className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-sm">
                    {article.coverImage && (
                      <img 
                        src={article.coverImage.url} 
                        alt={article.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs mb-2 border-muted-foreground">
                    {article.author.name}
                  </Badge>
                  <h3 className="text-base font-serif font-medium text-foreground mb-2 group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {article.brief}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WixLayout;