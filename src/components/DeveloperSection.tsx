import { useState } from "react";
import { Copy } from "lucide-react";

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState("OpenAI");
  
  const tabs = [
    { id: "OpenAI", label: "OpenAI", active: true },
    { id: "Gemini", label: "Google Gemini", active: false },
    { id: "Claude", label: "Anthropic Claude", active: false }
  ];

  const codeExample = `import { Tokyo } from 'tokyo-ai';

const client = new Tokyo({
  'openai',
  accessToken: 'your-sdk-key-here',
  { externalCustomerId: 'your-customer-id-here' }
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ],
  max_tokens: 100,
  temperature: 0.7
});

console.log(response.choices[0].message.content);`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-tokyo-card">
      <div className="max-w-7xl mx-auto flex sm:flex-row flex-col items-center justify-between">
        <div className="text-left mb-16 md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Developer</span> Quickstart
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Make your first API request in minutes. 
            <br />
            Learn the basics of the Tokyo AI platform.
          </p>
        </div>
        
        <div className="md:w-1/2 w-full mx-auto">
          <div className="mb-8">
            <div className="flex space-x-4 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-black border-white"
                      : "text-zinc-300 border-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="text-zinc-400 text-sm">
              Use OpenAI models like GPT-4o, GPT-3.5-turbo with messages format
            </p>
          </div>
          
          <div className="tokyo-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2"></div>
              <button className="text-zinc-400 hover:text-white transition-colors">
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                <code className="text-zinc-300">{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;