import ankaraImage from "@/assets/ankara-dress.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We are a Nigerian fashion brand dedicated to celebrating our rich cultural 
                heritage through <span className="text-primary font-semibold">Ankara</span>, <span className="text-primary font-semibold">Adire</span>, and 
                <span className="text-primary font-semibold"> Aso-Oke</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Creating timeless pieces that blend traditional craftsmanship with 
                modern style while empowering local artisans and inspiring cultural pride.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={ankaraImage} 
                alt="Traditional Nigerian Ankara fashion"
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
              <img 
                src={ankaraImage} 
                alt="Nigerian cultural heritage fashion"
                className="rounded-lg shadow-lg object-cover h-64 w-full mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;