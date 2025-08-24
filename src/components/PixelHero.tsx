import { Button } from "@/components/ui/button";
import avatarVideo from "/andrea.mp4";

const PixelHero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-scan animate-scan-line opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Pixel Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <video src={avatarVideo} autoPlay loop muted className="w-48 h-48 md:w-64 md:h-64 object-cover" />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-6xl md:text-8xl font-pixel font-bold mb-6 text-primary">
            ANDREA
            <span className="block text-secondary animate-glitch">AMAYA</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-pixel mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#bde0fe' }}>
            Building modern web apps with React & TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="neon" 
              size="lg" 
              onClick={scrollToPortfolio}
              className="font-pixel text-lg"
            >
              VIEW PROJECTS
            </Button>
            <Button 
              asChild
              variant="pixelOutline" 
              size="lg"
              className="font-pixel text-lg"
            >
              <a href={`${import.meta.env.BASE_URL}Andrea_Amaya_cv_en.pdf`} download>
                DOWNLOAD RESUME
              </a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-pixel font-bold text-neon-blue">PMP</div>
              <div className="text-sm font-pixel text-white">CERTIFIED</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-pixel font-bold text-neon-pink">4+</div>
              <div className="text-sm font-pixel text-white">YEARS EXP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-pixel font-bold" style={{ color: '#cdb4db' }}>15+</div>
              <div className="text-sm font-pixel text-white">PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelHero;