const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                alt="Tokyo AI"
                width="100"
                height="30"
                className="h-6 w-auto"
                src="https://www.usetokyo.com/icon2.svg"
              />
            </div>
            <p className="text-zinc-300 mb-4 max-w-md">
              Advanced AI toolkit for tracking and analyzing user interactions across multiple clients. 
              Streamline your AI operations with our comprehensive monitoring solution.
            </p>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
          <p>© 2025 Tokyo AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;