import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "JAVASCRIPT & REACT", level: 95, color: "bg-neon-blue" },
  { name: "SMART TV (TIZEN/WEBOS)", level: 90, color: "bg-neon-green" },
  { name: "TYPESCRIPT & ANGULAR", level: 88, color: "bg-neon-purple" },
  { name: "PROJECT MANAGEMENT (PMP)", level: 92, color: "bg-neon-pink" },
  { name: "PYTHON & MACHINE LEARNING", level: 85, color: "bg-neon-yellow" },
  { name: "MYSQL & BACKEND", level: 80, color: "bg-neon-cyan" },
  { name: "PIXEL ART (HOBBY)", level: 75, color: "bg-neon-orange" }
];

const tools = [
  "REACT", "TYPESCRIPT", "TIZEN SDK", "WEBOS", "PYTHON", "MYSQL", "TAILWIND", "REDUX", "ANGULAR"
];

const PixelAbout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.addEventListener('mousemove', handleMouseMove);
      return () => aboutSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#ffafcc' }}>
      {/* Cursor following glow effect */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-8">
              <div className="max-w-32 md:max-w-40">
                <img 
                  src="/projects/137be058-ffcb-44ab-83ee-ed5c06559a9e.png" 
                  alt="Frontend Developer & Project Manager Pixel Avatar" 
                  className="w-full h-auto object-contain image-rendering-pixelated"
                />
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-pixel font-bold text-gray-800 mb-4">
                  ABOUT ME
                </h2>
                <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div>
              <Card className="bg-white/90 border-2 border-white h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-pixel font-bold text-gray-800 mb-4">
                    FRONTEND DEV & PROJECT MANAGER
                  </h3>
                  <div className="space-y-4 font-pixel text-gray-700 leading-relaxed">
                    <p>
                      Hello! I'm a seasoned frontend developer and certified project manager (PMP) 
                      with expertise in React, TypeScript, and modern web technologies.
                    </p>
                    <p>
                      I specialize in Smart TV development (Tizen & WebOS platforms) and lead 
                      development teams while managing complex projects.
                    </p>
                    <p className="text-gray-800 font-medium">
                      Available for frontend development and project management opportunities!
                    </p>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/70 border border-white p-3 text-center">
                      <div className="text-2xl font-pixel font-bold text-gray-800">4+</div>
                      <div className="text-xs font-pixel text-gray-600">YEARS EXP</div>
                    </div>
                    <div className="bg-white/70 border border-white p-3 text-center">
                      <div className="text-2xl font-pixel font-bold text-gray-800">15+</div>
                      <div className="text-xs font-pixel text-gray-600">PROJECTS</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Skills & Tools */}
            <div className="space-y-6">
              {/* Skills */}
              <Card className="bg-white/90 border-2 border-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-pixel font-bold text-gray-800 mb-4">
                    EXPERTISE
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 4).map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1 bg-gray-800 text-white font-pixel text-xs border border-gray-800 hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools */}
              <Card className="bg-white/90 border-2 border-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-pixel font-bold text-gray-800 mb-4">
                    TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.slice(0, 6).map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-800 text-white font-pixel text-xs border border-gray-800 hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;