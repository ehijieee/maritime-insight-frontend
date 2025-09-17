import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { fetchPostBySlug, Post } from '@/lib/hashnode';
import WixNavbar from '@/components/WixNavbar';
import WixFooter from '@/components/WixFooter';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Failed to load post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <WixNavbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded mb-4"></div>
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded mb-8"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
        <WixFooter />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <WixNavbar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {error || 'Post not found'}
            </h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <WixFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <WixNavbar />
      
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Button>
          </Link>

          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            {post.brief && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {post.brief}
              </p>
            )}
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-8">
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Post Content */}
          {post.contentMarkdown && (
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary-muted prose-code:text-foreground prose-pre:bg-muted prose-blockquote:border-primary prose-blockquote:text-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
              >
                {post.contentMarkdown}
              </ReactMarkdown>
            </div>
          )}

          {/* Back to Top */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <WixFooter />
    </div>
  );
};

export default PostDetail;