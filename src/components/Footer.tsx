import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-newsletter-bg text-footer-text">
      {/* Newsletter Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            The List Everyone Wants To Be On. Sign Up To Get Early Access, VIP Perks, And Exclusive Offers Straight To Your Inbox.
          </h3>
          
          <div className="max-w-md mx-auto flex gap-3 mt-8">
            <Input 
              placeholder="Enter Your Email"
              className="bg-white text-foreground border-none rounded-lg"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="border-t border-footer-text/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-footer-text/80">
                <li><a href="#" className="hover:text-footer-text">New Arrivals</a></li>
                <li><a href="#" className="hover:text-footer-text">Women</a></li>
                <li><a href="#" className="hover:text-footer-text">Men</a></li>
                <li><a href="#" className="hover:text-footer-text">Children</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-footer-text/80">
                <li><a href="#" className="hover:text-footer-text">Contact Us</a></li>
                <li><a href="#" className="hover:text-footer-text">FAQ</a></li>
                <li><a href="#" className="hover:text-footer-text">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-footer-text">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-footer-text hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-footer-text hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-footer-text hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-footer-text/20 py-6">
        <div className="container mx-auto px-4 text-center text-footer-text/60">
          <p>2024 Naija All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;