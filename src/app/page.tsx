'use client';

import dynamic from 'next/dynamic';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const CoreOrb = dynamic(() => import('@/components/CoreOrb'), { ssr: false });

const projects = [
  { name: 'NeuralChat OS', desc: 'Multi-tenant AI chat workspace with streaming agents, vector memory, and realtime collaboration.', stack: 'Next.js, Node, Postgres, Redis, OpenAI, WebSockets' },
  { name: 'SignalStack', desc: 'Realtime product analytics SaaS with ingestion pipelines, anomaly alerts, and executive dashboards.', stack: 'TypeScript, Kafka, ClickHouse, GraphQL, Docker' },
  { name: 'FlowPilot AI', desc: 'AI-assisted workflow builder for founders to ship internal tools with autonomous automations.', stack: 'React, FastAPI, Temporal, Prisma, AWS' }
];

const skills = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST'],
  AI: ['LLM integrations', 'RAG', 'Prompt systems', 'AI evals'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse'],
  Cloud: ['Vercel', 'AWS basics', 'Supabase', 'Cloudflare'],
  Realtime: ['WebSockets', 'SSE', 'Pub/Sub', 'Event-driven design'],
  Tooling: ['GitHub Actions', 'Turborepo', 'Docker', 'Postman']
};

function SectionShell({ children }: { children: React.ReactNode }) {
  return <section className="section relative">{children}</section>;
}

export default function Home() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { y: 56, opacity: 0, filter: 'blur(8px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.25, ease: 'power3.out' });
  }, []);

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none fixed inset-0 noise opacity-30" />
      <div className="pointer-events-none fixed inset-0 grid-overlay opacity-20" />

      <SectionShell>
        <motion.div
          onMouseMove={(e) => {
            const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            x.set((e.clientX - r.left) / r.width - 0.5);
            y.set((e.clientY - r.top) / r.height - 0.5);
          }}
          style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
          className="workspace-panel min-h-[86vh] p-6 md:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">AI-native product engineering</p>
              <h1 ref={heroRef} className="hero-title mt-5">Suyash builds intelligent full stack systems for the next internet era.</h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">Student developer with a startup mindset—focused on shipping scalable AI-powered products, realtime systems, and premium user experiences.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="magnetic-btn">View Systems</button>
                <button className="magnetic-btn !bg-white/5">Contact</button>
              </div>
            </div>
            <div className="orb-shell h-[440px]">
              <CoreOrb />
              <div className="hud hud-top">AI Core / Online</div>
              <div className="hud hud-bottom">Latency 34ms · Sync Stable</div>
            </div>
          </div>
        </motion.div>
      </SectionShell>

      <SectionShell>
        <div className="workspace-panel p-8 md:p-10">
          <h2 className="section-title">Identity / About</h2>
          <p className="section-copy mt-5 max-w-3xl">I treat every project as a product system: user journey, architecture, scalability, and speed. I care about building interfaces that feel effortless and backends that stay resilient under growth. My direction is clear—ship AI-first SaaS products that solve real workflows, not demos.</p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="workspace-panel p-8 md:p-10">
          <h2 className="section-title">Featured Products</h2>
          <div className="mt-8 space-y-4">
            {projects.map((p, idx) => (
              <motion.article key={p.name} whileHover={{ scale: 1.01 }} className="product-row">
                <div className="product-index">0{idx + 1}</div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-slate-300">{p.desc}</p>
                  <p className="mt-3 text-sm text-cyan-100/80">{p.stack}</p>
                </div>
                <div className="flex gap-2 self-start md:self-center"><span className="tag">Live Demo</span><span className="tag">GitHub</span></div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="workspace-panel p-8">
            <h2 className="section-title">AI Engineering Workflow</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>01 — Architecture-first prompting to define constraints, data contracts, and service boundaries.</li>
              <li>02 — AI pair-programming for rapid prototyping, refactor loops, and test generation.</li>
              <li>03 — Debug orchestration with trace-driven prompts, logs, and observability context.</li>
              <li>04 — Automation and eval pipelines for quality gates before release.</li>
            </ul>
          </div>
          <div className="workspace-panel p-8 gradient-core">
            <h3 className="text-xl font-medium">Human × AI Collaboration Matrix</h3>
            <p className="section-copy mt-4">Decision intelligence stays human. Speed, synthesis, and repetitive implementation are delegated to AI copilots with strict validation loops.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="workspace-panel p-8 md:p-10">
          <h2 className="section-title">Systems & Architecture</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {['Edge UI', 'API Gateway', 'Realtime Engine', 'AI Inference Layer', 'Data Lake', 'Observability', 'Auth + Billing', 'Automation Bus'].map((n) => (
              <div key={n} className="node">{n}</div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="workspace-panel p-8 md:p-10">
          <h2 className="section-title">Engineering Skills</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="skill-panel">
                <h3 className="font-medium text-cyan-100">{k}</h3>
                <div className="mt-3 flex flex-wrap gap-2">{v.map((item) => <span key={item} className="tag">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="workspace-panel p-8">
            <h2 className="section-title">Product Building Philosophy</h2>
            <p className="section-copy mt-4">Build useful first, elegant second, scalable always. The best products reduce decision fatigue, support collaborative workflows, and create compounding user value through intelligent automation.</p>
          </div>
          <div className="workspace-panel p-8">
            <h2 className="section-title">Interactive Timeline</h2>
            <ol className="mt-4 space-y-3 border-l border-white/20 pl-5 text-slate-300">
              <li>2023 — Entered full stack development with product-centric learning.</li>
              <li>2024 — Built realtime applications and first AI-integrated prototypes.</li>
              <li>2025 — Shifted into SaaS architecture and multi-service systems design.</li>
              <li>2026+ — Building AI-native products for high-leverage teams.</li>
            </ol>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="workspace-panel p-8 font-mono text-sm">
            <p className="text-green-300">$ github --activity suyash</p>
            <p className="mt-2 text-slate-300">Active repos in AI systems, realtime infra, and full stack SaaS tooling.</p>
          </div>
          <form className="workspace-panel p-8">
            <h2 className="section-title">Contact</h2>
            <div className="mt-4 space-y-3">
              <input placeholder="Your Name" className="input" />
              <input placeholder="Email" className="input" />
              <textarea placeholder="What are we building?" className="input h-28" />
              <button className="magnetic-btn">Send</button>
            </div>
          </form>
        </div>
      </SectionShell>

      <footer className="section py-12 text-sm text-slate-400">© {new Date().getFullYear()} Suyash — Engineering intelligent digital products.</footer>
    </main>
  );
}
