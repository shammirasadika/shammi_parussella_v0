import Link from "next/link";
import { Cpu, Zap, Database } from "lucide-react";

export default function AIMCPPage() {
  return (
    <section className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">AI & MCP Automation</h1>

      {/* Digital Twin Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-500" /> Digital Twin
        </h2>
        <p className="mb-2">Showcases a real-time digital representation of systems, enabling simulation, monitoring, and predictive analytics for automation and optimization.</p>
        <Link href="/demos" className="text-blue-600 hover:underline">View Live Demo</Link>
      </div>

      {/* MCP Integration Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-purple-500" /> Model Context Protocol (MCP)
        </h2>
        <p className="mb-2">Integrates advanced AI models and automation workflows using MCP, enabling seamless orchestration and context-aware decision making.</p>
        <Link href="/mcp-demo" className="text-blue-600 hover:underline">Explore MCP Demo</Link>
      </div>

      {/* Automation Features Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" /> Automation Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Automated data ingestion and processing</li>
          <li>Real-time system monitoring and alerts</li>
          <li>Predictive analytics and reporting</li>
          <li>Seamless integration with cloud and edge devices</li>
        </ul>
      </div>
    </section>
  );
}
