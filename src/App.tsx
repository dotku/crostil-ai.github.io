import React from "react";
import { Link } from "react-router-dom";
import {
  Notebook as Robot,
  Code2,
  Cpu,
  Boxes,
  Workflow,
  Zap,
  Layers,
  Monitor,
  Binary,
  Building2,
  Laptop,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <Analytics />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.svg"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/images/grid-pattern.svg")',
              opacity: 0.1,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-8">
              <Zap className="w-4 h-4 mr-2" />
              <span>43M FPS with RTX 4090</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
              Crostil Robot Simulation Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A powerful, flexible, and efficient robot simulation platform
              achieving over 43 million FPS with a single RTX 4090
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#features"
                className="group inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/register"
                className="group inline-flex items-center px-6 py-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-semibold transition-colors"
              >
                Register
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img src="/images/wave-pattern.svg" alt="" className="w-full" />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-4">
              <Boxes className="w-4 h-4 mr-2" />
              <span>Key Features</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              State-of-the-art Simulation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience unparalleled performance and flexibility in robot
              simulation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 blur-2xl" />
              <img
                src="/images/simulation.svg"
                alt="Simulation Environment"
                className="relative w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Zap />}
                title="Unmatched Speed"
                description="Over 43 million FPS when simulating a Franka robotic arm with RTX 4090 - 430,000 times faster than real-time"
              />
              <FeatureCard
                icon={<Monitor />}
                title="Cross-platform"
                description="Runs on Linux, macOS, Windows with multiple compute backends (CPU, Nvidia/AMD GPUs, Apple Metal)"
              />
              <FeatureCard
                icon={<Layers />}
                title="Physics Solvers"
                description="Integrates diverse solvers: Rigid body, MPM, SPH, FEM, PBD, and Stable Fluid for comprehensive simulation"
              />
              <FeatureCard
                icon={<Boxes />}
                title="Material Models"
                description="Simulate and couple rigid bodies, liquids, gases, deformable objects, thin-shell objects, and granular materials"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Robot />}
              title="Robot Compatibility"
              description="Support for robotic arms, legged robots, drones, soft robots with MJCF, URDF, obj, glb, ply, stl formats"
            />
            <FeatureCard
              icon={<Code2 />}
              title="Ray-traced Rendering"
              description="Native ray-tracing-based rendering for photo-realistic simulation environments"
            />
            <FeatureCard
              icon={<Binary />}
              title="Differentiability"
              description="Fully differentiable design with MPM and Tool Solver support, expanding to rigid & articulated body solvers"
            />
            <FeatureCard
              icon={<Cpu />}
              title="Tactile Simulation"
              description="Advanced physics-based tactile sensor simulation with differentiability support"
            />
            <FeatureCard
              icon={<Workflow />}
              title="User-Friendly"
              description="Designed for simplicity with intuitive installation process and easy-to-use APIs"
            />
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="py-20 bg-gray-800/50 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/grid-pattern.svg")',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-4">
              <Laptop className="w-4 h-4 mr-2" />
              <span>Requirements</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              System Requirements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recommended specifications for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RequirementCard
              icon={<Laptop />}
              title="Minimum Requirements"
              items={[
                "Operating System: Linux, macOS, or Windows",
                "CPU: 4+ cores",
                "RAM: 8GB",
                "Storage: 2GB available space",
                "Graphics: NVIDIA GPU (Optional)",
              ]}
            />
            <RequirementCard
              icon={<Cpu />}
              title="Recommended Specifications"
              items={[
                "Operating System: Ubuntu 20.04+ or Windows 10/11",
                "CPU: 8+ cores",
                "RAM: 16GB+",
                "Storage: 5GB+ available space",
                "Graphics: NVIDIA RTX 3000 series or better",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built by experienced engineers from leading tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CompanyCard
              icon={<Building2 />}
              name="Google"
              expertise="Machine Learning & Robotics"
            />
            <CompanyCard
              icon={<Building2 />}
              name="Meta"
              expertise="AI & Computer Vision"
            />
            <CompanyCard
              icon={<Building2 />}
              name="Walmart"
              expertise="Large-scale Systems"
            />
            <CompanyCard
              icon={<Building2 />}
              name="Intuit"
              expertise="Cloud Infrastructure"
            />
            <CompanyCard
              icon={<Building2 />}
              name="Huawei Technology"
              expertise="Hardware Optimization"
            />
            <CompanyCard
              icon={<Building2 />}
              name="Li Auto"
              expertise="Autonomous Systems"
            />
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-gray-800/30 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/grid-pattern.svg")',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Education</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Academic Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Research and expertise from top universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <UniversityCard
              icon={<GraduationCap />}
              name="Stanford University"
              department="Computer Science"
            />
            <UniversityCard
              icon={<GraduationCap />}
              name="UC Berkeley"
              department="Electrical Engineering & Computer Science"
            />
            <UniversityCard
              icon={<GraduationCap />}
              name="UC Irvine"
              department="Robotics & AI"
            />
            <UniversityCard
              icon={<GraduationCap />}
              name="San Jose State University"
              department="Software Engineering"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 py-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/grid-pattern.svg")',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              2024 Crostil Robot Simulation Platform. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-gray-800/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all hover:scale-105">
      <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function RequirementCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="group bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900/70 transition-all hover:scale-105">
      <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyCard({
  icon,
  name,
  expertise,
}: {
  icon: React.ReactNode;
  name: string;
  expertise: string;
}) {
  return (
    <div className="group bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/50 transition-all hover:scale-105">
      <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400">{expertise}</p>
    </div>
  );
}

function UniversityCard({
  icon,
  name,
  department,
}: {
  icon: React.ReactNode;
  name: string;
  department: string;
}) {
  return (
    <div className="group bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all hover:scale-105 text-center">
      <div className="text-yellow-400 mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400">{department}</p>
    </div>
  );
}

export default App;
