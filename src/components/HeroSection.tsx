import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nigerian-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Timeless
            <span className="block italic">NIGERIAN</span>
            <span className="block">FASHION</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            EMBRACE THE ELEGANCE OF ADIRE, ANKARA AND ASO-OKE. 
            <span className="block">CURATED FOR YOU.</span>
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;