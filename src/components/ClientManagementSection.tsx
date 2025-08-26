import { Users, Shield, BarChart3 } from "lucide-react";

const ClientManagementSection = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-tenant Architecture",
      description: "Each client operates in their own isolated environment"
    },
    {
      icon: Shield,
      title: "Role-based Access", 
      description: "Granular permissions and access control for team members"
    },
    {
      icon: BarChart3,
      title: "Individual Analytics",
      description: "Client-specific dashboards and reporting"
    }
  ];

  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Client</span> Management
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Manage multiple clients with ease while maintaining complete data isolation
          </p>
        </div>
        
        <div className="tokyo-card p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientManagementSection;