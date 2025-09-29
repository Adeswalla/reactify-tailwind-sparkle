import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ankaraImage from "@/assets/ankara-dress.jpg";
import childrenImage from "@/assets/children-fashion.jpg";
import asoOkeImage from "@/assets/aso-oke-male.jpg";
import { useState } from "react";

const QuickCategories = () => {
  const [wishlistStates, setWishlistStates] = useState<boolean[]>([false, false, false]);
  const categories = [
    {
      image: ankaraImage,
      title: "Women's Fashion",
      description: "Elegant traditional wear for the modern woman"
    },
    {
      image: childrenImage, 
      title: "Children's Fashion",
      description: "Cultural heritage for the next generation"
    },
    {
      image: asoOkeImage,
      title: "Men's Fashion", 
      description: "Distinguished traditional menswear"
    }
  ];

  const toggleWishlist = (index: number) => {
    setWishlistStates(prev => 
      prev.map((state, i) => i === index ? !state : state)
    );
  };

  const handleCategoryClick = (categoryTitle: string) => {
    const collections = document.getElementById('featured-collections');
    collections?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quick-categories" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Quick Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.title)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground rounded-full shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(index);
                  }}
                >
                  <Heart className={`h-4 w-4 transition-colors ${wishlistStates[index] ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3"
            onClick={() => {
              const collections = document.getElementById('featured-collections');
              collections?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;