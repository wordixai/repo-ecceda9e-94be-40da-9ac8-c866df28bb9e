import { ExternalLink } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-zinc-800 bg-tokyo-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              alt="Tokyo AI Toolkit"
              width="80"
              height="20"
              className="h-6 w-auto"
              src="https://www.usetokyo.com/logo2.svg"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="tokyo-nav-link">
              Features
            </a>
            <a href="#tracking" className="tokyo-nav-link">
              AI Tracking
            </a>
            <a href="#clients" className="tokyo-nav-link">
              Client Management
            </a>
            <a
              href="https://www.npmjs.com/package/tokyo-ai"
              target="_blank"
              className="tokyo-nav-link hover:opacity-80 flex items-center gap-2"
            >
              <img
                src="https://www.usetokyo.com/npm.png"
                alt="Npm package"
                className="h-10 w-10 invert"
              />
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="tokyo-button-secondary">
              Login
            </button>
            <button className="tokyo-button-primary">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;