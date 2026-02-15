// src/projectData.js
import { Terminal, Database, Cpu, Briefcase, User } from "lucide-react";

export const projects = [
{
    title: "J.A.R.V.I.S.",
    subtitle: "Personal Voice Assistant",
    stack: ["Python", "SpeechRecognition", "NLP"],
    icon: Terminal, // or use Bot/Mic if you import them
    color: "purple",
    problem: "Keyboards are slow. I wanted a fluid, hands-free way to interact with my machine.",
    built: [
      "Real-time Speech-to-Text pipeline",
      "Conversational logic engine",
      "Low-latency audio feedback loop",
    ],
    decisions: [
      "Optimized for response speed over complexity",
      "Modular command structure for easy expansion",
    ],
    proof: "It doesn't just run commands; it holds a conversation.",
    link: "https://github.com/chaith1912/J.A.R.V.I.S",
  },
  {
    title: "FlavorVerse",
    subtitle: "Interactive Food Hub",
    stack: ["React", "Tailwind", "Vite"],
    icon: Database,
    color: "orange",
    problem: "Static menus are stuck in the past. Users need real-time availability, not just PDFs.",
    built: [
      "Modular component architecture",
      "Dynamic data-to-UI mapping",
      "Smooth, gesture-driven mobile layout",
    ],
    decisions: [
      "Prioritized atomic design",
      "Kept state local for instant feedback",
    ],
    proof: "Turned complex vendor data into a clean, vibe-worthy interface.",
    link:"https://github.com/chaith1912/flavor-verse",
  },
  {
    title: "Campus Care",
    subtitle: "University Health System",
    stack: ["Node.js", "Express", "SQL"],
    icon: Cpu,
    color: "emerald",
    problem: "Paper records in university clinics create bottlenecks and put sensitive student data at risk.",
    built: [
      "Secure patient history digitization",
      "Role-based access (Doctor vs. Student)",
      "Efficient appointment scheduling flow",
    ],
    decisions: [
      "Strict data privacy protocols",
      "Normalized SQL schema for integrity",
    ],
    proof: "Architected a backend that treats sensitive health data with the security it requires.",
    link:"https://github.com/yakshiigowda/Campus_Care",
},
  {
    title: "Skill Swap",
    subtitle: "P2P Knowledge Exchange",
    stack: ["React", "Vite", "Tailwind"],
    icon: User, // Ensure 'User' is imported in projectData.js
    color: "blue",
    problem: "Learning alone is hard, and courses are expensive. I wanted a way to trade knowledge, not money.",
    built: [
      "Instant client-side routing via Vite",
      "Dynamic filtering for skill matching",
      "Responsive profile grids",
    ],
    decisions: [
      "Zero-bloat architecture for speed",
      "Focused on connection over complexity",
    ],
    proof: "A community-focused tool that solves the 'tutorial hell' problem by connecting humans.",
    link:"https://github.com/chaith1912/Skill-Swap",
  },
];