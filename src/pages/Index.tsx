import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogGrid from '@/components/BlogGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BlogGrid />
      <Footer />
    </div>
  );
};

export default Index;
