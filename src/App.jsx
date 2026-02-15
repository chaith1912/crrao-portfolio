import React, { useEffect, useRef, useState } from "react";
// We import the specific icons we need for the UI (Navbar, Contact, etc.)
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  User,
  Terminal,
  Layers,
  ArrowRight
} from "lucide-react";

// Import your separate project data
import { projects } from "./ProjectData";

/* ---------------- CONSTANTS ---------------- */

const SOCIAL_LINKS = {
  github: "https://github.com/chaith1912", // Replace with your actual username
  linkedin: "https://www.linkedin.com/in/chaithanya-r-rao-0663a2279/",
  email: "mailto:raochaithanya56@gmail.com",
};

/* ---------------- UTILS & ANIMATIONS ---------------- */

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [ref, rootMargin]);
  return isIntersecting;
};

const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "-50px");
  
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        onScreen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

/* ---------------- BACKGROUND ---------------- */

const Background = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-slate-950"></div>
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    ></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]"></div>
  </div>
);

/* ---------------- NAVBAR ---------------- */

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800/50 supports-[backdrop-filter]:bg-slate-950/60">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
        <Terminal className="w-5 h-5 text-cyan-400" />
        Chaithanya<span className="text-cyan-400">.dev</span>
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

/* ---------------- HERO ---------------- */

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 relative z-10">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to work.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">vibing</span>,<br />
            and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">coding</span>.
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
            Building smooth apps with clean code and good energy. 
    I focus on making things that look great and work perfectly.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_-5px_rgba(8,145,178,0.5)] flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              View Case Studies
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all bg-slate-900/50"
            >
              Contact Me
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
);

/* ---------------- ABOUT ---------------- */

const About = () => (
  <section id="about" className="py-32 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <RevealOnScroll>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <User className="text-cyan-400 w-8 h-8" /> 
              Engineering Philosophy
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
              I build with purpose. My process is simple: build, break, refactor, repeat. 
              I value <span className="text-cyan-200 font-medium">clean logic
                </span> over complex tricks
              </p>
              <p>
                My projects span mobile apps, frontend systems, backend APIs. 
                I don't just write code; I solve business problems with technical precision.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Tech Stack
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-3 font-medium uppercase tracking-wider">Frontend & Mobile</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Vite", "Flutter", "Dart","Python"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-800 text-cyan-300 text-sm font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 mb-3 font-medium uppercase tracking-wider">Backend & Data</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "Firebase", "Firestore"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-800 text-indigo-300 text-sm font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-3 font-medium uppercase tracking-wider">DevOps & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Linux", "Postman", "CI/CD"].map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

/* ---------------- PROJECTS ---------------- */

const Projects = () => {
  // Helper to dynamically style the cards based on the 'color' property in your data
  const getTheme = (color) => {
    const themes = {
      purple: {
        icon: "text-purple-400",
        gradient: "from-purple-500/10 to-blue-500/10",
      },
      orange: {
        icon: "text-orange-400",
        gradient: "from-orange-500/10 to-red-500/10",
      },
      emerald: {
        icon: "text-emerald-400",
        gradient: "from-emerald-500/10 to-cyan-500/10",
      },
      blue: {
        icon: "text-blue-400",
        gradient: "from-blue-500/10 to-indigo-500/10",
      }
    };
    return themes[color] || themes.blue;
  };

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Code2 className="text-cyan-400 w-8 h-8" /> Selected Case Studies
              </h2>
              <p className="text-slate-400 max-w-2xl">
                Deep dives into problems I've solved. Focus on logic, data flow, and architecture.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-800 ml-12 mb-2"></div>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const theme = getTheme(p.color);
            const Icon = p.icon; // Get the icon component from the data

            return (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="group relative h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
                  
                  {/* Dynamic Gradient Blob */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${theme.gradient} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                        <p className="text-slate-400 text-sm font-medium">{p.subtitle}</p>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-lg border border-slate-700/50 text-slate-300">
                         {/* Render the icon component passed from data */}
                        <Icon className={`w-6 h-6 ${theme.icon}`} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stack.map(tech => (
                        <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4 mb-8">
                       <div className="bg-slate-950/50 rounded p-3 border-l-2 border-red-500/50">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          <strong className="text-slate-200 block mb-1 text-xs uppercase tracking-wider">The Problem</strong>
                          {p.problem}
                        </p>
                       </div>
                       
                       <div className="bg-slate-950/50 rounded p-3 border-l-2 border-green-500/50">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          <strong className="text-slate-200 block mb-1 text-xs uppercase tracking-wider">The Solution</strong>
                          <ul className="list-disc ml-4 space-y-1 mt-1">
                            {p.built.map((b) => <li key={b}>{b}</li>)}
                          </ul>
                        </p>
                       </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800/50 flex flex-col gap-3">
                       <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Key Decisions</p>
                          <ul className="text-slate-400 text-sm space-y-1">
                             {p.decisions.map(d => <li key={d} className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>{d}</li>)}
                          </ul>
                       </div>
                       <div className="mt-2 text-xs text-cyan-200/60 italic border-l-2 border-slate-700 pl-3">
                          "{p.proof}"
                       </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CONTACT ---------------- */

const Contact = () => (
  <section id="contact" className="py-32 border-t border-slate-900 bg-slate-950 relative z-10">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <RevealOnScroll>
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Build?</h2>
        <p className="text-slate-400 mb-12 text-lg">
          Currently looking for internships, junior roles, or challenging projects.<br/>
          If you value clean code and robust architecture, let's talk.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-900 border border-slate-800
                      text-slate-400 hover:text-white hover:border-cyan-500
                      hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-900 border border-slate-800
                      text-slate-400 hover:text-white hover:border-blue-500
                      hover:bg-blue-500/10 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="p-4 rounded-full bg-slate-900 border border-slate-800
                      text-slate-400 hover:text-white hover:border-indigo-500
                      hover:bg-indigo-500/10 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="mt-6 text-slate-500 text-sm">
          Reach me directly at{" "}
          <a
            href={SOCIAL_LINKS.email}
            className="text-cyan-400 hover:underline"
          >
            raochaithanya56@gmail.com
          </a>
        </p>
        
        <p className="mt-16 text-slate-600 text-sm">
          © {new Date().getFullYear()} Chaithanya.dev. Built with React & Tailwind.
        </p>
      </RevealOnScroll>
    </div>
  </section>
);

/* ---------------- APP ---------------- */

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}