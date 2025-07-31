import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BrandsSection from '@/components/BrandsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutPreview from '@/components/AboutPreview';
import ContactCTA from '@/components/ContactCTA';

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
