import React from 'react';
import { Notebook as Robot, Code2, Cpu, Boxes, Workflow, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Crostil Robot Simulation Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A powerful, flexible, and efficient robot simulation platform for research, development, and education
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400">Everything you need for robot simulation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Robot />}
              title="Robot Models"
              description="Extensive library of pre-built robot models and easy-to-use tools for creating custom ones"
            />
            <FeatureCard
              icon={<Code2 />}
              title="API Integration"
              description="Simple and powerful APIs for controlling robots and accessing simulation data"
            />
            <FeatureCard
              icon={<Cpu />}
              title="Real-time Physics"
              description="Advanced physics engine for accurate and efficient simulation"
            />
            <FeatureCard
              icon={<Boxes />}
              title="Environment Builder"
              description="Create and customize simulation environments with intuitive tools"
            />
            <FeatureCard
              icon={<Workflow />}
              title="Workflow Integration"
              description="Seamless integration with popular development tools and frameworks"
            />
            <FeatureCard
              icon={<Zap />}
              title="High Performance"
              description="Optimized for speed and efficiency, supporting complex simulations"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              2024 Crostil Robot Simulation Platform. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Community
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
      <div className="text-blue-400 mb-4">{React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;