'use client'
import { useState, useEffect, useRef } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────
const DATA = {
  name: 'Yamini Savalia',
  handle: 'yami@cybermini',
  roles: [
    'SOC Analyst',
    'Malware Analyst',
    'Incident Responder',
    'Threat Hunter',
    'Cybersecurity Instructor',
  ],
  tagline: '4+ years securing enterprises | CompTIA Security+ | CKA | Gold Medalist',
  email: 'yamicyberspace66@gmail.com',
  phone: '(+1) 408-886-0985',
  linkedin: 'https://www.linkedin.com/in/yamini-savalia-387ab6100/',
  blog: 'https://cyberminiarticles.blogspot.com',
  blogLabel: 'cyberminiarticles.blogspot.com',
  summary:
    'Results-driven Cybersecurity Professional with 4+ years of SOC and information security experience in alert triage, malware triage (static & dynamic analysis), script de-obfuscation, and leading high-severity incident investigations. Hands-on with EDR/NDR tools, SIEM platforms (Splunk, IBM QRadar, Cortex XDR/SOAR), and AI productivity tools to accelerate investigation reporting and script development. Proficient in Python, PowerShell, and Bash; skilled at communicating technical findings clearly to stakeholders.',
  skills: [
    {
      cat: 'SOC & Incident Response',
      icon: '🛡',
      items: ['Splunk', 'IBM QRadar', 'Cortex XDR/SOAR', 'Wireshark', 'Nmap', 'Trellix HX/NX', 'Alert Triage', 'IOC Analysis', 'Threat Hunting'],
    },
    {
      cat: 'Malware Analysis & Forensics',
      icon: '🔬',
      items: ['Static Analysis', 'Dynamic Analysis', 'Script De-obfuscation', 'MobSF', 'Apktool', 'Jadx-GUI', 'ADB', 'Sandbox Analysis', 'Reverse Engineering'],
    },
    {
      cat: 'Scripting & Automation',
      icon: '⚡',
      items: ['Python', 'PowerShell', 'Bash', 'SQL', 'Security Automation', 'Tool Development', 'IR Playbooks'],
    },
    {
      cat: 'Data & AI',
      icon: '🤖',
      items: ['PandasAI', 'LangChain', 'Vertex AI', 'Prompt Engineering', 'Gemini', 'Claude', 'GPT-4'],
    },
    {
      cat: 'Defense Frameworks',
      icon: '📋',
      items: ['NIST CSF', 'ISO 27001', 'CIS Benchmarks', 'OWASP LLM Top 10', 'Google SAIF', 'Adversarial Red Teaming'],
    },
    {
      cat: 'Cloud & Endpoint Security',
      icon: '☁',
      items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Server Hardening', 'CIS Baseline', 'Endpoint Monitoring'],
    },
    {
      cat: 'Web Security & OSINT',
      icon: '🌐',
      items: ['Vulnerability Assessment', 'Penetration Testing', 'Android VAPT', 'OSINT', 'Threat Intelligence', 'Root-Cause Analysis'],
    },
  ],
  experience: [
    {
      role: 'Cybersecurity Instructor',
      company: 'Superprof & Preply',
      period: 'Mar 2025 – Present',
      location: 'Remote',
      current: true,
      links: [
        { label: 'Preply Profile', href: 'https://preply.in/YAMINI7EN2567995810?ts=17800080' },
        { label: 'Superprof Profile', href: 'https://www.superprof.com/cybersecurity-analyst-comptia-security-certified-certified-kubernetes-administrator-cka-devops-ethical-hacking-network.html' },
      ],
      points: [
        'Design and deliver training on SOC analysis, malware analysis, incident response, threat hunting, OSINT, and script de-obfuscation; mentor students in ethical hacking.',
        'Leverage AI productivity tools (Gemini, Claude, GPT-4) to accelerate curriculum development, investigation reporting templates, and code/script development.',
      ],
    },
    {
      role: 'Engineer, Information Security',
      company: 'FIS Solutions Pvt Ltd',
      period: 'Nov 2023 – Nov 2024',
      location: 'Pune, India',
      current: false,
      points: [
        'Operated in a SOC environment monitoring, triaging, and leading high-severity security event investigations (phishing, ransomware) using Cortex XDR/SOAR and SIEM platforms.',
        'Performed malware triage including static & dynamic analysis and script de-obfuscation to identify attack techniques and accelerate containment.',
        'Used Python and SQL-based SIEM queries for log analysis; tuned detection rules to reduce false positive rates.',
        'Documented root-cause analysis and authored IR playbooks for L1/L2 SOC workflows.',
      ],
    },
    {
      role: 'Cybersecurity Consultant',
      company: 'Freelance',
      period: 'Jul 2022 – Nov 2023',
      location: 'Remote',
      current: false,
      points: [
        'Led end-to-end security assessments including vulnerability research and penetration testing (web/Android/network); defined project scope and deliverables per engagement.',
        'Performed Android application VAPT using MobSF, Apktool, Jadx-GUI, ADB; delivered risk-ranked remediation reports.',
        'Conducted OSINT-based threat intelligence research; supported ISO 27001-aligned security policy control mapping.',
      ],
    },
    {
      role: 'Security Analyst',
      company: 'HackIT Technology & Advisory Services',
      period: 'Mar 2021 – Jul 2022',
      location: 'New Delhi, India',
      current: false,
      points: [
        'Performed continuous log monitoring and security telemetry analysis using Python scripts to identify indicators of compromise.',
        'Rolled out CIS Benchmark and ISO 27001-aligned security policies across cloud and endpoint environments.',
        'Led internal security awareness training on phishing, malware detection, incident response, and security hygiene.',
      ],
    },
  ],
  education: [
    {
      degree: 'ME — Computer Engineering (Cyber Security)',
      school: 'Gujarat Technological University',
      period: '2018 – 2020',
      location: 'Ahmedabad, India',
      note: '🥇 Gold Medalist · GPA 9.29 / 10',
    },
    {
      degree: 'BTech — Computer Engineering',
      school: 'Charusat University',
      period: '2013 – 2017',
      location: 'Anand, India',
      note: 'GPA 9.62 / 10',
    },
  ],
  certs: [
    { badge: 'SEC+', name: 'CompTIA Security+', issuer: 'CompTIA', color: '#e63946', credly: 'https://www.credly.com/badges/6c5c391c-d35c-490d-b344-9dcde903c7a0/public_url' },
    { badge: 'CKA', name: 'Certified Kubernetes Administrator', issuer: 'CNCF', color: '#326ce5', credly: 'https://www.credly.com/badges/9bd69e5b-e02d-4d40-91af-93379290d798/linked_in_profile' },
    { badge: 'PMAT', name: 'Practical Malware Analysis & Triage', issuer: 'TCM Security', color: '#f4a261' },
    { badge: 'THM', name: 'TryHackMe Paths', issuer: 'App Security · Phishing · IR · PenTesting', color: '#39d353' },
    { badge: 'TAU', name: 'Cybersecurity Internship', issuer: 'Tel Aviv University (2019) — Cryptography & Network Security', color: '#38bdf8' },
  ],
  projects: [
    {
      id: 'detection-engineering-lab',
      title: 'Detection Engineering Lab',
      subtitle: '5 MITRE ATT&CK Techniques · Sigma Rules · Splunk SPL',
      description: 'End-to-end detection engineering project simulating a ransomware kill chain across 5 MITRE ATT&CK techniques. Each technique is executed in an isolated lab, logged with real Windows Event IDs and Sysmon, written as a Sigma YAML rule, and deployed as tuned Splunk SPL — with full false positive analysis and lab observations documented.',
      tags: ['Splunk', 'Sigma', 'MITRE ATT&CK', 'Sysmon', 'Detection Engineering', 'Windows Events', 'Threat Hunting'],
      stats: ['5 MITRE Techniques', '5 Sigma Rules', 'Full Kill Chain'],
      stack: 'Splunk · Sigma · Sysmon',
      github: 'https://github.com/Cybermini/Splunk-Security-Monitoring',
    },
    {
      id: 'threat-hunting-foothold',
      title: 'SOC Investigation: Full Kill Chain Threat Hunt',
      subtitle: 'Multi-Stage Attack · Elastic SIEM · 4 Hosts',
      description: 'Multi-stage attack investigation across a corporate environment — SSH brute force, PHP web shell, process injection, defense evasion, persistence, and three simultaneous C2 channels (DNS tunnel + Discord + CDN). Detected and correlated entirely through raw KQL queries with no pre-generated alerts.',
      tags: ['Elastic SIEM', 'KQL', 'Threat Hunting', 'Sysmon', 'Process Injection', 'C2', 'Incident Response'],
      stats: ['14 Detections', '30 Screenshots', '4 Hosts'],
      stack: 'Elastic SIEM · KQL · Sysmon',
      github: 'https://github.com/Cybermini/threat-hunting-foothold',
    },
  ],
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
function TypeWriter({ strings, speed = 90, pause = 1800 }) {
  const [display, setDisplay] = useState('')
  const state = useRef({ idx: 0, char: 0, deleting: false, timer: null })

  useEffect(() => {
    function tick() {
      const s = state.current
      const word = strings[s.idx]
      if (!s.deleting) {
        const next = word.slice(0, s.char + 1)
        setDisplay(next)
        if (next === word) {
          s.deleting = true
          s.timer = setTimeout(tick, pause)
        } else {
          s.char++
          s.timer = setTimeout(tick, speed)
        }
      } else {
        const next = word.slice(0, s.char - 1)
        setDisplay(next)
        if (next === '') {
          s.deleting = false
          s.idx = (s.idx + 1) % strings.length
          s.char = 0
          s.timer = setTimeout(tick, 400)
        } else {
          s.char--
          s.timer = setTimeout(tick, speed / 2)
        }
      }
    }
    state.current.timer = setTimeout(tick, 600)
    return () => clearTimeout(state.current.timer)
  }, [strings, speed, pause])

  return (
    <span className="text-accent font-mono">
      {display}
      <span className="cursor" />
    </span>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Education', 'Certifications', 'Projects', 'Contact']

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-mono text-accent font-semibold tracking-tight">
          <span className="text-muted">~/</span>cybermini
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link text-sm font-medium">
              {l}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${DATA.email}`}
          className="hidden md:inline-flex items-center gap-2 text-sm font-mono px-4 py-1.5 rounded border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200"
        >
          Hire Me
        </a>
        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-muted hover:text-accent p-1">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 pb-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted hover:text-accent"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div>
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/50 shadow-[0_0_20px_#39d35325] mb-6">
            <img src="/profile.jpg" alt="Yamini Savalia" className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 text-xs font-mono text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Open to opportunities · Actively interviewing
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            <span className="gradient-text">{DATA.name}</span>
          </h1>

          <p className="font-mono text-muted text-sm mb-4">{DATA.handle} ~$</p>

          <div className="text-2xl md:text-3xl font-semibold text-primary mb-6 min-h-[2.5rem]">
            <TypeWriter strings={DATA.roles} />
          </div>

          <p className="text-muted text-sm font-mono mb-8 leading-relaxed">
            {DATA.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-2.5 rounded bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-all duration-200 shadow-[0_0_20px_#39d35340]">
              Get In Touch
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded border border-cyan text-cyan font-semibold text-sm hover:bg-cyan/10 transition-all duration-200">
              LinkedIn
            </a>
            <a href={DATA.blog} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded border border-border text-muted font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200">
              Blog ↗
            </a>
          </div>
        </div>

        {/* Right — terminal card */}
        <div className="hidden md:block">
          <div className="glow-card rounded-xl bg-card overflow-hidden font-mono text-sm shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-muted text-xs">soc-analyst@cybermini ~ bash</span>
            </div>
            <div className="p-5 space-y-2 text-xs leading-relaxed">
              <p><span className="text-cyan">$</span> <span className="text-accent">whoami</span></p>
              <p className="text-primary pl-2">SOC Analyst & Malware Analyst</p>
              <p className="mt-2"><span className="text-cyan">$</span> <span className="text-accent">certifications</span></p>
              <p className="pl-2">
                <span className="text-[#e63946]">[SEC+]</span>{' '}
                <span className="text-[#326ce5]">[CKA]</span>{' '}
                <span className="text-[#f4a261]">[PMAT]</span>
              </p>
              <p className="mt-2"><span className="text-cyan">$</span> <span className="text-accent">top_tools</span></p>
              <p className="pl-2 text-muted">Splunk · Cortex XDR/SOAR · IBM QRadar</p>
              <p className="pl-2 text-muted">Wireshark · MobSF · Python · PowerShell</p>
              <p className="mt-2"><span className="text-cyan">$</span> <span className="text-accent">status</span></p>
              <p className="pl-2"><span className="text-accent">●</span> <span className="text-primary">Available — 4+ yrs experience</span></p>
              <p className="mt-2"><span className="text-cyan">$</span> <span className="text-accent">education</span></p>
              <p className="pl-2 text-muted">ME Cyber Security — Gold Medalist</p>
              <p className="mt-2"><span className="text-cyan">$</span> <span className="animate-pulse text-accent">_</span></p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs font-mono animate-bounce">
        <span>scroll</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">About Me</h2>
        <p className="text-muted text-sm font-mono mb-10">// professional summary</p>
        <div className="glow-card bg-card rounded-xl p-8">
          <p className="text-primary leading-8 text-[1.05rem]">{DATA.summary}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '4+' },
              { label: 'Certifications', value: '3' },
              { label: 'Education GPA', value: '9.29' },
              { label: 'Roles Covered', value: 'SOC · IR · Malware' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-muted font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" className="py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">Skills</h2>
        <p className="text-muted text-sm font-mono mb-10">// technical expertise</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.skills.map(s => (
            <div key={s.cat} className="glow-card bg-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{s.icon}</span>
                <h3 className="font-semibold text-primary text-sm">{s.cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">Experience</h2>
        <p className="text-muted text-sm font-mono mb-10">// work history</p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 timeline-line hidden md:block" />
          <div className="space-y-8">
            {DATA.experience.map((job, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 hidden md:flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  job.current
                    ? 'border-accent bg-accent/20 text-accent shadow-[0_0_12px_#39d35350]'
                    : 'border-border bg-card text-muted'
                }`}>
                  {String(DATA.experience.length - i).padStart(2, '0')}
                </div>
                <div className="glow-card bg-card rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{job.role}</h3>
                      <p className="text-accent font-mono text-sm">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted font-mono">{job.period}</p>
                      <p className="text-xs text-muted">{job.location}</p>
                      {job.current && (
                        <span className="inline-block mt-1 text-xs font-mono px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 shrink-0">›</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {job.links && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.links.map((l, j) => (
                        <a
                          key={j}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono px-3 py-1.5 rounded border border-cyan/40 text-cyan hover:bg-cyan/10 transition-all"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Education ────────────────────────────────────────────────────────────────
function Education() {
  return (
    <section id="education" className="py-24 grid-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">Education</h2>
        <p className="text-muted text-sm font-mono mb-10">// academic background</p>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.education.map((ed, i) => (
            <div key={i} className="glow-card bg-card rounded-xl p-6">
              <p className="text-xs font-mono text-muted mb-3">{ed.period} · {ed.location}</p>
              <h3 className="font-semibold text-primary text-base mb-1">{ed.degree}</h3>
              <p className="text-accent font-mono text-sm mb-3">{ed.school}</p>
              <p className="text-sm font-mono text-cyan">{ed.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Certifications ───────────────────────────────────────────────────────────
function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">Certifications</h2>
        <p className="text-muted text-sm font-mono mb-10">// credentials & training</p>
        <div className="space-y-4">
          {DATA.certs.map((c, i) => (
            <div key={i} className="glow-card bg-card rounded-xl p-5 flex items-center gap-5">
              <div
                className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
                style={{ background: c.color + '18', color: c.color, border: `1px solid ${c.color}40` }}
              >
                {c.badge}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-sm">{c.name}</h3>
                <p className="text-xs text-muted font-mono mt-0.5">{c.issuer}</p>
              </div>
              {c.credly && (
                <a
                  href={c.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-mono px-3 py-1.5 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-all"
                >
                  Verify ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-24 grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 section-title">Projects</h2>
        <p className="text-muted text-sm font-mono mb-10">// technical writeups & research</p>
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.projects.map(project => (
            <div key={project.id} className="glow-card bg-card rounded-xl p-6 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30">
                      ★ Featured
                    </span>
                    <span className="text-xs font-mono text-muted">Technical Blog</span>
                  </div>
                  <h3 className="font-semibold text-primary leading-snug text-lg">{project.title}</h3>
                  <p className="text-xs font-mono text-accent mt-1">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="skill-badge">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6 mb-5 px-1">
                {project.stats.map(stat => (
                  <span key={stat} className="text-xs font-mono text-cyan">{stat}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <span className="text-xs font-mono text-muted">{project.stack}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono px-4 py-2 rounded border border-cyan/40 text-cyan hover:bg-cyan/10 transition-all"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 grid-bg">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Let's Connect</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-accent to-cyan mx-auto mb-4 rounded" />
        <p className="text-muted font-mono text-sm mb-12">
          // open to SOC · IR · Threat Hunting · Malware Analysis roles
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: '✉',
              label: 'Email',
              value: DATA.email,
              href: `mailto:${DATA.email}`,
            },
            {
              icon: '🔗',
              label: 'LinkedIn',
              value: 'yamini-savalia',
              href: DATA.linkedin,
            },
            {
              icon: '📝',
              label: 'Blog',
              value: DATA.blogLabel,
              href: DATA.blog,
            },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glow-card bg-card rounded-xl p-5 flex items-center gap-4 text-left hover:border-accent/50 transition-all group"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="text-xs text-muted font-mono">{c.label}</p>
                <p className="text-sm text-primary group-hover:text-accent transition-colors font-mono">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${DATA.email}`}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-bg font-bold text-sm hover:bg-accent/90 transition-all shadow-[0_0_30px_#39d35340] hover:shadow-[0_0_40px_#39d35360]"
        >
          Say Hello →
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8 text-center">
      <p className="font-mono text-xs text-muted">
        <span className="text-accent">©</span> {new Date().getFullYear()} Yamini Savalia ·{' '}
        <span className="text-accent">cybermini.com</span> · Built with Next.js & Tailwind
      </p>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
