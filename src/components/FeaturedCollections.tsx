import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import ankaraImage from "@/assets/ankara-dress.jpg";
import asoOkeImage from "@/assets/aso-oke-male.jpg";

const FeaturedCollections = () => {
  const products = [
    {
      image: asoOkeImage,
      title: "Stylish Agbada",
      price: "45,000",
      rating: 4,
      category: "Aso"
    },
    {
      image: ankaraImage,
      title: "Elegant Aso-Oke Dress",
      price: "75,000", 
      rating: 5,
      category: "Aso"
    },
    {
      image: ankaraImage,
      title: "Stylish Iro & Buba",
      price: "85,000",
      rating: 5,
      category: "Aso"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Featured Collections
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          <Button variant="ghost" className="text-foreground font-medium">
            New Arrivals
          </Button>
          <Button variant="ghost" className="text-primary font-medium border-b-2 border-primary">
            Trending Now
          </Button>
          <Button variant="ghost" className="text-foreground font-medium">
            Occasional Wear
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="relative">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;