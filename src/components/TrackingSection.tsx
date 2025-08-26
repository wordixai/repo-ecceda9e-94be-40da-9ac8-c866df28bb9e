const TrackingSection = () => {
  const trackingSteps = [
    {
      number: "1",
      title: "Automatic Detection",
      description: "Our system automatically detects and tracks AI interactions without requiring code modifications"
    },
    {
      number: "2", 
      title: "Client Separation",
      description: "Each client's data is completely isolated with secure boundaries and access controls"
    },
    {
      number: "3",
      title: "Real-time Monitoring", 
      description: "Watch interactions happen in real-time with live dashboards and instant alerts"
    }
  ];

  const stats = [
    { label: "Active Clients", value: "24" },
    { label: "Today's Interactions", value: "1,247" },
    { label: "Response Time", value: "0.3s" },
    { label: "Success Rate", value: "99.8%" }
  ];

  return (
    <section id="tracking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Interaction</span> Tracking
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Monitor every AI interaction across your client base with comprehensive analytics and insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white border-zinc-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="tokyo-card p-8">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-zinc-300">{stat.label}</span>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;