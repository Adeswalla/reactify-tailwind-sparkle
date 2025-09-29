import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const collections = document.getElementById('featured-collections');
      collections?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border">
      {/* Top bar with search */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-foreground">NaijaFashion</h1>
            
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2 bg-muted rounded-lg px-4 py-2 min-w-[300px]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search Fabrics, Styles, Designers..."
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center space-x-8 text-sm">
          <Button variant="ghost" className="font-medium" onClick={() => scrollToSection('featured-collections')}>All</Button>
          <Button variant="ghost" className="font-medium text-primary" onClick={() => scrollToSection('featured-collections')}>Adire</Button>
          <Button variant="ghost" className="font-medium text-primary" onClick={() => scrollToSection('featured-collections')}>Ankara</Button>
          <Button variant="ghost" className="font-medium text-primary" onClick={() => scrollToSection('featured-collections')}>Aso-Oke</Button>
          <Button variant="ghost" className="font-medium" onClick={() => scrollToSection('quick-categories')}>Quick Categories</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;