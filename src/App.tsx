import React from 'react';
import { Github, Box, Notebook as Robot, Code2, Cpu, Boxes, Workflow, Zap } from 'lucide-react';

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
                href="https://github.com"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                Get Started
              </a>
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

      {/* Latest Release */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Release: v0.2.1</h2>
            <p className="text-gray-400">Packed with new features and improvements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <Box className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Bug Fixes</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Improved visualization and rendering</li>
                <li>• Platform compatibility enhancements</li>
                <li>• Better collision detection</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-6">
              <Zap className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">New Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Smoke simulator with Stable Fluid</li>
                <li>• External forces and torques API</li>
                <li>• Domain randomization support</li>
              </ul>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-6">
              <Workflow className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Improvements</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 20-30% faster kernel cache loading</li>
                <li>• Enhanced documentation</li>
                <li>• Multi-language support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400">Everything you need for advanced robot simulation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Robot />}
              title="Advanced Robotics"
              description="Comprehensive robot simulation with precise physics and realistic interactions"
            />
            <FeatureCard
              icon={<Code2 />}
              title="Flexible API"
              description="Intuitive APIs for forces, torques, and custom IK chains"
            />
            <FeatureCard
              icon={<Cpu />}
              title="High Performance"
              description="Optimized kernel cache and efficient batch processing"
            />
            <FeatureCard
              icon={<Boxes />}
              title="Rich Features"
              description="From smoke simulation to domain randomization"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Crostil Robot Simulation Platform. All rights reserved.
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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700/30 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
      <div className="text-blue-400 mb-4">
        {React.cloneElement(icon, { className: "h-8 w-8" })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;