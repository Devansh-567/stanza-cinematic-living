import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Residents Served" },
  { value: "20", label: "Properties in Pune" },
  { value: "98%", label: "Satisfaction Rating" },
  { value: "24/7", label: "Support Available" },
];

const pillars = [
  { icon: Building2, title: "Premium Spaces", desc: "Thoughtfully designed rooms and common areas for modern urban living." },
  { icon: Users, title: "Vibrant Community", desc: "A network of driven students and professionals who inspire each other." },
  { icon: ShieldCheck, title: "Safety First", desc: "Multi-layer security, CCTV surveillance, and smart access controls." },
  { icon: Sparkles, title: "Tech-Enabled", desc: "High-speed WiFi, smart locks, and app-based services at your fingertips." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-cinematic" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 font-body text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About content */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            About Stanza
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-6 max-w-3xl font-display text-3xl font-bold md:text-5xl"
          >
            Redefining Hostel Living for a <span className="text-gradient-amber">New Generation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto max-w-2xl font-body text-muted-foreground"
          >
            Stanza Hostels isn't just a place to stay — it's a curated living experience. 
            We combine premium infrastructure, thoughtful design, and a thriving community 
            to create spaces where students and young professionals truly thrive in Pune.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
              className="group rounded-xl bg-card p-6 transition-all hover:glow-amber"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
