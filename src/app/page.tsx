'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
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

export default function Home() {
  const heroRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" });
  }, []);
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 grid-overlay opacity-30" />
      <section className="section min-h-screen pt-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-200/80">AI-native product engineering</p>
            <h1 ref={heroRef} className="text-5xl font-semibold leading-tight md:text-7xl">Suyash builds intelligent full stack systems for the next internet era.</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">Student developer with a startup mindset—focused on shipping scalable AI-powered products, realtime systems, and premium user experiences.</p>
          </div>
          <div className="h-[420px] rounded-3xl border border-white/10 bg-panel/50 shadow-glow backdrop-blur-xl">
            <CoreOrb />
          </div>
        </motion.div>
      </section>

      <section className="section">
        <h2 className="text-3xl font-semibold">Identity / About</h2>
        <p className="mt-5 max-w-3xl text-slate-300">I treat every project as a product system: user journey, architecture, scalability, and speed. I care about building interfaces that feel effortless and backends that stay resilient under growth. My direction is clear—ship AI-first SaaS products that solve real workflows, not demos.</p>
      </section>

      <section className="section">
        <h2 className="text-3xl font-semibold">Featured Products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.article whileHover={{ y: -6 }} key={p.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <h3 className="text-xl font-medium">{p.name}</h3>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <p className="mt-4 text-sm text-cyan-200/80">{p.stack}</p>
              <div className="mt-5 flex gap-3 text-sm"><span className="rounded bg-white/10 px-3 py-1">Live Demo</span><span className="rounded bg-white/10 px-3 py-1">GitHub</span></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">AI Engineering Workflow</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>01 — Architecture-first prompting to define constraints, data contracts, and service boundaries.</li>
            <li>02 — AI pair-programming for rapid prototyping, refactor loops, and test generation.</li>
            <li>03 — Debug orchestration with trace-driven prompts, logs, and observability context.</li>
            <li>04 — Automation and eval pipelines for quality gates before release.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6">
          <h3 className="text-lg">Human × AI Collaboration Matrix</h3>
          <p className="mt-4 text-slate-300">Decision intelligence stays human. Speed, synthesis, and repetitive implementation are delegated to AI copilots with strict validation loops.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl font-semibold">Systems & Architecture</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {['Edge UI', 'API Gateway', 'Realtime Engine', 'AI Inference Layer', 'Data Lake', 'Observability', 'Auth + Billing', 'Automation Bus'].map((n) => (
            <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">{n}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl font-semibold">Engineering Skills</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 p-5">
              <h3 className="font-medium text-cyan-200">{k}</h3>
              <div className="mt-3 flex flex-wrap gap-2">{v.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm">{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Product Building Philosophy</h2>
          <p className="mt-4 text-slate-300">Build useful first, elegant second, scalable always. The best products reduce decision fatigue, support collaborative workflows, and create compounding user value through intelligent automation.</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Interactive Timeline</h2>
          <ol className="mt-4 space-y-3 border-l border-white/20 pl-5 text-slate-300">
            <li>2023 — Entered full stack development with product-centric learning.</li>
            <li>2024 — Built realtime applications and first AI-integrated prototypes.</li>
            <li>2025 — Shifted into SaaS architecture and multi-service systems design.</li>
            <li>2026+ — Building AI-native products for high-leverage teams.</li>
          </ol>
        </div>
      </section>

      <section className="section grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-sm">
          <p className="text-green-300">$ github --activity suyash</p>
          <p className="mt-2 text-slate-300">Active repos in AI systems, realtime infra, and full stack SaaS tooling.</p>
        </div>
        <form className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 space-y-3">
            <input placeholder="Your Name" className="w-full rounded-lg border bg-transparent p-3" />
            <input placeholder="Email" className="w-full rounded-lg border bg-transparent p-3" />
            <textarea placeholder="What are we building?" className="h-28 w-full rounded-lg border bg-transparent p-3" />
            <button className="rounded-lg bg-cyan-400 px-5 py-2 text-black">Send</button>
          </div>
        </form>
      </section>

      <footer className="section py-12 text-sm text-slate-400">© {new Date().getFullYear()} Suyash — Engineering intelligent digital products.</footer>
    </main>
  );
}
