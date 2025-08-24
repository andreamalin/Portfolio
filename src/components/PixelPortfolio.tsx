import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import pixelLandscape from "@/assets/pixel-landscape.png";
import pixelSpaceship from "@/assets/pixel-spaceship.png";
import pixelRobot from "@/assets/pixel-robot.png";

const portfolioItems = [
  {
    id: 1,
    title: "AHA",
    image: "/projects/51fba845-fb2a-481d-b3ab-6f7baf4c18fb.png",
    hoverImage: "/projects/af473942-ee0f-4309-bd10-2a3f7b7fd68a.png",
    tags: ["ANGULAR", "SMART TV", "FRONTEND"],
    description: "Smart TV streaming app for 1M+ subscribers with custom navigation library"
  },
  {
    id: 2,
    title: "NETFLIX CSS",
    image: "/projects/1f7fcd51-4d2f-4657-b0f9-644fa641b84f.png",
    hoverImage: "/projects/9b85c73d-88ed-467d-9ea4-86cdc54d8036.png",
    tags: ["REACT", "CSS", "FRONTEND"],
    description: "Netflix clone built with React and pure CSS to demonstrate CSS skills",
    link: "https://netflix-css-2021.web.app/"
  },
  {
    id: 3,
    title: "CUBOX",
    image: "/projects/d2b0612b-8f7e-43d9-81f1-851bbc8e2ecd.png",
    hoverImage: "/projects/27a611b9-7d8a-4776-bbfd-491545a7c1fb.png",
    tags: ["REACT", "PROJECT MANAGER", "AGILE"],
    description: "Project manager with a team of 5 developers using agile methodologies for insurance broker website",
    link: "https://app.cubox.cloud/"
  },
  {
    id: 4,
    title: "UNIVISION",
    image: "/projects/2c394076-2071-49aa-a7fc-b1847d317f80.png",
    hoverImage: "/projects/1c980c07-41c9-4c80-9140-9a8bcdac5c66.png",
    tags: ["ANGULAR", "SMART TV", "MVPD"],
    description: "Web and TV streaming platform with NewRelic analytics, Cleeng login and Adobe MVPD integration",
    link: "https://www.univisionnow.com/"
  },
  {
    id: 5,
    title: "CONTROLP",
    image: "/projects/de8ba482-52f1-4d48-aa31-5d8e7b67e54d.png",
    hoverImage: "/projects/ac47bf60-850f-4a3c-9771-c01a3d053d4f.png",
    tags: ["RPA", "PYTHON", "MYSQL"],
    description: "Tax automation system that reduced human effort by 75% with backend & bot integration"
  },
  {
    id: 6,
    title: "DEAFLENS",
    image: "/projects/c87bfd16-b3cf-490a-8662-8775bb17be9a.png",
    tags: ["MACHINE LEARNING", "COMPUTER VISION", "PYTHON"],
    description: "Sign language to text prediction platform - 79% accuracy in LENSEGUA and 84% in ASL",
    link: "https://youtube.com/watch?v=fV6-0QEOt00&feature=youtu.be"
  },
  {
    id: 7,
    title: "SINOVISION",
    image: "/projects/92a09b3b-e68a-47d9-a44d-1e516f3e112a.png",
    tags: ["PREACT", "SMART TV", "EPG"],
    description: "Smart TV live streaming app with Electronic Program Guide built in Preact"
  },
  {
    id: 8,
    title: "TV AZTECA",
    image: "/projects/5d876847-7622-4570-a62a-5685abe6e790.png",
    hoverImage: "/projects/892769d1-3c43-4ed8-bd62-39cb54fb6a80.png",
    tags: ["PREACT", "REACT", "SMART TV", "ANALYTICS"],
    description: "Smart TV live streaming app with web dashboard using Google Analytics built with Preact and React"
  },
  {
    id: 9,
    title: "ICN PLAY",
    image: "/projects/1e7557b2-a7a4-4aaa-89a8-a45e7ada7192.png",
    hoverImage: "/projects/ae491c8f-5f15-4505-9109-d1377e637a3c.png",
    tags: ["PREACT", "REACT", "SMART TV", "VOD"],
    description: "Newspaper VOD content website and Smart TV app created using Preact and React"
  },
];

const PixelPortfolio = () => {
  const handleCardClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: '#a2d2ff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-pixel font-bold text-gray-800 mb-4">
            MY WORK
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl font-pixel text-gray-700 max-w-2xl mx-auto">
            A collection of projects ranging from web applications to smart TV development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="bg-white/90 border-2 border-white hover:border-gray-800 transition-all duration-300 hover:shadow-lg group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(item.link)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full h-48 object-cover image-rendering-pixelated transition-all duration-500 ${item.hoverImage ? 'group-hover:opacity-0' : ''}`}
                  />
                  {item.hoverImage && (
                    <img 
                      src={item.hoverImage} 
                      alt={`${item.title} - hover view`}
                      className="absolute inset-0 w-full h-48 object-cover image-rendering-pixelated opacity-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/10 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-pixel font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    {item.link && (
                      <ExternalLink 
                        size={16} 
                        className="text-gray-600 group-hover:text-gray-800 transition-colors" 
                      />
                    )}
                  </div>
                  
                  <p className="text-sm font-pixel text-gray-700 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="pixel"
                        className="text-xs font-pixel bg-gray-800 text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-pixel text-gray-700">And more!</p>
        </div>
      </div>
    </section>
  );
};

export default PixelPortfolio;