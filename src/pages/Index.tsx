import WixNavbar from '@/components/WixNavbar';
import WixLayout from '@/components/WixLayout';
import WixFooter from '@/components/WixFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WixNavbar />
      <WixLayout />
      <WixFooter />
    </div>
  );
};

export default Index;
