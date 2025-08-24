import PixelHeader from "@/components/PixelHeader";
import PixelHero from "@/components/PixelHero";
import PixelPortfolio from "@/components/PixelPortfolio";
import PixelAbout from "@/components/PixelAbout";
import PixelContact from "@/components/PixelContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PixelHeader />
      
      <main>
        <PixelHero />
        <PixelPortfolio />
        <PixelAbout />
        <PixelContact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t-2 border-white/20" style={{ backgroundColor: '#131316' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-pixel text-2xl font-bold animate-color-cycle mb-2 drop-shadow-md">
              ANDREA AMAYA
            </div>
            <div className="font-pixel text-sm text-secondary mb-4">
              Frontend Developer & Project Manager
            </div>
            <div className="flex justify-center space-x-8 text-xs font-pixel">
              <div className="text-accent">© {new Date().getFullYear()} ANDREA AMAYA</div>
              <div className="text-neon-pink font-bold">MADE WITH ♥ IN CODE</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;