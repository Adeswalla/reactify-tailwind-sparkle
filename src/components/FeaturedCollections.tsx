import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import ankaraImage from "@/assets/ankara-dress.jpg";
import asoOkeImage from "@/assets/aso-oke-male.jpg";
import { useState } from "react";

const FeaturedCollections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('trending');
  const allProducts = {
    trending: [
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
    ],
    newArrivals: [
      {
        image: ankaraImage,
        title: "Modern Ankara Blend",
        price: "35,000",
        rating: 4,
        category: "Ankara"
      },
      {
        image: asoOkeImage,
        title: "Traditional Wrapper",
        price: "55,000",
        rating: 5,
        category: "Aso"
      },
      {
        image: ankaraImage,
        title: "Designer Gown",
        price: "95,000",
        rating: 5,
        category: "Ankara"
      }
    ],
    occasionalWear: [
      {
        image: asoOkeImage,
        title: "Wedding Special",
        price: "120,000",
        rating: 5,
        category: "Aso"
      },
      {
        image: ankaraImage,
        title: "Party Dress Elite",
        price: "80,000",
        rating: 4,
        category: "Ankara"
      },
      {
        image: ankaraImage,
        title: "Ceremony Outfit",
        price: "65,000",
        rating: 5,
        category: "Aso"
      }
    ]
  };

  const products = allProducts[activeTab as keyof typeof allProducts];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="featured-collections" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Featured Collections
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          <Button 
            variant="ghost" 
            className={`font-medium ${activeTab === 'newArrivals' ? 'text-primary border-b-2 border-primary' : 'text-foreground'}`}
            onClick={() => setActiveTab('newArrivals')}
          >
            New Arrivals
          </Button>
          <Button 
            variant="ghost" 
            className={`font-medium ${activeTab === 'trending' ? 'text-primary border-b-2 border-primary' : 'text-foreground'}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending Now
          </Button>
          <Button 
            variant="ghost" 
            className={`font-medium ${activeTab === 'occasionalWear' ? 'text-primary border-b-2 border-primary' : 'text-foreground'}`}
            onClick={() => setActiveTab('occasionalWear')}
          >
            Occasional Wear
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="relative">
          <Button 
            variant="outline" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
            onClick={handleNext}
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