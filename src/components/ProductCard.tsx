import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
  category: string;
}

const ProductCard = ({ image, title, price, rating, category }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground rounded-full shadow-md"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="font-semibold text-card-foreground line-clamp-2">{title}</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xl font-bold text-price-accent">₦{price}</p>
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < rating ? 'text-rating-star fill-current' : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{rating}.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;