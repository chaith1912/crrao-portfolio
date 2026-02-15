import React from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Database,
  Layers,
  Smartphone
} from "lucide-react";
import { projects } from "./ProjectData";

/* ---------------- CONFIG ---------------- */

const CONFIG = {
  name: "Chaithanya R Rao",
  role: "Full Stack Engineer",
  location: "Mangaluru, India",
  availability: "Open to work",
  social: {
    github: "https://github.com/chaith1912",
    linkedin: "https://www.linkedin.com/in/chaithanya-r-rao-0663a2279/",
    email: "mailto:raochaithanya56@gmail.com",
  }
};

/* ---------------- COMPONENTS ---------------- */

const Card = ({ children, className = "", noHover = false }) => (
  <div 
    className={`
      relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-zinc-800/60
      backdrop-blur-md p-6 flex flex-col transition-all duration-500
      ${!noHover && "hover:bg-zinc-800/60 hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1"}
      ${className}
    `}
  >
    {children}
  </div>
);

const TechBadge = ({ icon, label }) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-medium hover:bg-zinc-700 transition-colors">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  );
};

/* ---------------- SECTIONS ---------------- */

const Hero = () => (
  <Card className="md:col-span-2 md:row-span-2 justify-between min-h-[300px] bg-gradient-to-br from-zinc-900/50 to-zinc-900/80">
    <div className="flex justify-between items-start">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {CONFIG.availability}
      </div>
      
      <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
         <MapPin className="w-3.5 h-3.5" />
         {CONFIG.location}
      </div>
    </div>

    <div className="mt-8">
      {/* --- UPDATED NAME & ROLE SECTION --- */}
      <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
        {CONFIG.name}
      </h1>
      <p className="text-sm text-zinc-400 mb-6 font-medium camelcase tracking-wide">
        Full Stack Dev
      </p>

      {/* --- SLOGAN --- */}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
        Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">vibing</span>,<br />
        and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">coding</span>.
      </h2>
      
      <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
        Building smooth apps with clean code and good energy. I focus on making things that look great and work perfectly.
      </p>
    </div>
  </Card>
);

const About = () => (
  <Card className="md:col-span-1 justify-center bg-zinc-900/80">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center border border-cyan-500/30">
        <Terminal className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold text-white">Philosophy</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        My process is simple: build, break, refactor, repeat. I value <span className="text-cyan-300 font-medium">clean logic</span> over complex tricks.
      </p>
    </div>
  </Card>
);

const Socials = () => (
  <Card className="md:col-span-1 flex-row items-center justify-between gap-4 md:flex-col md:justify-center md:items-start">
    <div className="flex gap-4">
      <a 
        href={CONFIG.social.github}
        target="_blank" rel="noreferrer"
        className="p-3 rounded-full bg-zinc-800 text-white hover:bg-white hover:text-black transition-all"
      >
        <Github className="w-5 h-5" />
      </a>
      <a 
        href={CONFIG.social.linkedin}
        target="_blank" rel="noreferrer"
        className="p-3 rounded-full bg-zinc-800 text-white hover:bg-[#0077b5] hover:text-white transition-all"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a 
        href={CONFIG.social.email}
        className="p-3 rounded-full bg-zinc-800 text-white hover:bg-rose-500 hover:text-white transition-all"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
    <div>
        <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Connect</h3>
        <p className="text-white font-medium">Let's build something.</p>
    </div>
  </Card>
);

const TechStack = () => (
  <Card className="md:col-span-2 lg:col-span-1 md:row-span-1">
     <h3 className="text-zinc-200 font-semibold mb-4 flex items-center gap-2">
        <Layers className="w-4 h-4 text-cyan-400" />
        Stack
     </h3>
     <div className="flex flex-wrap gap-2">
        <TechBadge icon={Code2} label="React" />
        <TechBadge icon={Smartphone} label="Flutter" />
        <TechBadge icon={Globe} label="Python" />
        <TechBadge icon={Database} label="MongoDB" />
        <TechBadge icon={Cpu} label="Node.js" />
        <TechBadge icon={Layers} label="Tailwind" />
        <TechBadge icon={Database} label="Firebase" />
     </div>
  </Card>
);

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  
  const getTheme = (color) => {
    const themes = {
      purple: "from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-400 group-hover:border-purple-500/50",
      orange: "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400 group-hover:border-orange-500/50",
      emerald: "from-emerald-500/20 to-cyan-500/20 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/50",
      blue: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400 group-hover:border-blue-500/50",
    };
    return themes[color] || themes.blue;
  };

  const theme = getTheme(project.color);

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full cursor-pointer"
    >
      <Card className="group h-full justify-between hover:scale-[1.02] active:scale-95 transition-all duration-300">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br border ${theme}`}>
               <Icon className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4">{project.subtitle}</p>
          
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-semibold px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </a>
  );
};

/* ---------------- MAIN LAYOUT ---------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 p-4 md:p-8 selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* BACKGROUND NOISE & GRADIENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      {/* CONTENT GRID */}
      <main className="relative z-10 max-w-6xl mx-auto space-y-4">
        
        {/* ROW 1: HEADER & INTRO */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Hero />
          <div className="grid grid-cols-1 gap-4 md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-full">
               <About />
               <Socials />
            </div>
            <TechStack />
          </div>
        </div>

        {/* ROW 2: PROJECTS HEADER */}
        <div className="py-8 flex items-end justify-between">
           <div>
             <h2 className="text-3xl font-bold text-white">Selected Work</h2>
             <p className="text-zinc-500 mt-1">Deep dives into architecture and logic.</p>
           </div>
           <div className="hidden md:block h-px flex-1 bg-zinc-800 ml-8 mb-2"></div>
        </div>

        {/* ROW 3: PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* FOOTER */}
        <footer className="py-12 text-center text-zinc-600 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Chaithanya.dev. Built with React & Tailwind.</p>
          <a 
            href={CONFIG.social.email}
            className="hover:text-zinc-400 transition-colors duration-300"
          >
            raochaithanya56@gmail.com
          </a>
        </footer>

      </main>
    </div>
  );
}