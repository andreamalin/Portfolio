import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const PixelContact = () => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const fullText = "GET IN TOUCH";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 150);

      return () => clearInterval(timer);
    }
  }, [isVisible]);
  return (
    <section ref={sectionRef} id="contact" className="py-20" style={{ backgroundColor: '#cdb4db' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-pixel font-bold text-gray-800 mb-4">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl font-pixel text-gray-700">
              Ready to create something awesome together?
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-white/90 border-2 border-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-pixel font-bold text-gray-800 mb-6">
                    CONTACT INFO
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white font-pixel text-xs">
                        @
                      </div>
                      <div>
                        <div className="font-pixel text-sm text-gray-600">EMAIL</div>
                        <a 
                          href="mailto:andreaa.malin@gmail.com" 
                          className="font-pixel text-gray-800 hover:text-gray-600 transition-colors"
                        >
                          andreaa.malin@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white font-pixel text-xs">
                        in
                      </div>
                      <div>
                        <div className="font-pixel text-sm text-gray-600">LINKEDIN</div>
                        <a 
                          href="https://www.linkedin.com/in/aamayamalin/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-pixel text-gray-800 hover:text-gray-600 transition-colors"
                        >
                          linkedin.com/in/aamayamalin
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white font-pixel text-xs">
                        GH
                      </div>
                      <div>
                        <div className="font-pixel text-sm text-gray-600">GITHUB</div>
                        <a 
                          href="https://github.com/andreamalin/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-pixel text-gray-800 hover:text-gray-600 transition-colors"
                        >
                          github.com/andreamalin
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <div className="font-pixel text-gray-600 text-sm mb-2">
                  RESPONSE TIME
                </div>
                <div className="font-pixel text-2xl text-gray-800 animate-pixel-pulse">
                  &lt; 24 HOURS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelContact;