import HeroSection from '@/components/en/HeroSection';
import ProductsSection from '@/components/en/ProductsSection';
import BrandsSection from '@/components/en/BrandsSection';
import ServicesSection from '@/components/en/ServicesSection';
import AboutPreview from '@/components/en/AboutPreview';
import ContactCTA from '@/components/en/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <BrandsSection />
      <ServicesSection />
      <AboutPreview />
      <ContactCTA />
    </div>
  );
} 