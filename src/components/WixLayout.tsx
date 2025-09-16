import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from 'lucide-react';

const WixLayout = () => {
  // Sample data matching the Wix template structure
  const topStories = [
    {
      id: 1,
      title: "Nigeria Ports Authority Launches Digital Port Community System",
      excerpt: "Revolutionary platform streamlines cargo operations across major seaports.",
      image: "/api/placeholder/200/150",
      category: "Port Tech"
    },
    {
      id: 2,
      title: "Lagos Free Zone Reports Record Export Growth",
      excerpt: "$4.2B in exports as manufacturing output surges.",
      image: "/api/placeholder/200/150", 
      category: "Trade"
    }
  ];

  const featuredArticle = {
    title: "Maritime Security Framework Reduces Piracy by 60%",
    excerpt: "New comprehensive security measures show dramatic results in protecting Nigerian waters and international shipping routes.",
    image: "/api/placeholder/600/400",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    category: "Security"
  };

  const opinionPieces = [
    {
      id: 1,
      title: "The Future of African Maritime Trade",
      excerpt: "Economic integration creates new opportunities for regional shipping partnerships.",
      author: "Dr. Amina Kano",
      date: "Mar 14, 2024",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      title: "Sustainable Port Operations: A Nigerian Perspective", 
      excerpt: "Environmental considerations in modern port development and operations.",
      author: "Prof. Emeka Okafor",
      date: "Mar 13, 2024",
      avatar: "/api/placeholder/40/40"
    }
  ];

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
                <article key={story.id} className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-sm">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge variant="outline" className="text-xs mb-2 border-muted-foreground">
                    {story.category}
                  </Badge>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:underline">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Center Column - Featured Article */}
          <div className="lg:col-span-6">
            <article className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-sm">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif font-medium text-foreground mb-4 group-hover:underline leading-tight">
                {featuredArticle.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </article>
          </div>

          {/* Right Column - Opinion */}
          <div className="lg:col-span-3">
            <div className="border-b-2 border-foreground pb-2 mb-6">
              <h2 className="text-2xl font-serif font-medium text-foreground">Opinion</h2>
            </div>
            
            <div className="space-y-8">
              {opinionPieces.map((piece) => (
                <article key={piece.id} className="group cursor-pointer">
                  <div className="flex items-start space-x-3 mb-3">
                    <img 
                      src={piece.avatar} 
                      alt={piece.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{piece.author}</p>
                      <p className="text-xs text-muted-foreground">{piece.date}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:underline">
                    {piece.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {piece.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - More Articles */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="group cursor-pointer">
                <div className="mb-4 overflow-hidden rounded-sm">
                  <img 
                    src={`/api/placeholder/300/200`} 
                    alt={`Article ${i}`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge variant="outline" className="text-xs mb-2 border-muted-foreground">
                  Business
                </Badge>
                <h3 className="text-base font-serif font-medium text-foreground mb-2 group-hover:underline">
                  Maritime Industry Trends in West Africa
                </h3>
                <p className="text-sm text-muted-foreground">
                  Analysis of emerging patterns in regional shipping and port development.
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WixLayout;