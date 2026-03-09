import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityImg from "@/assets/community-life.jpg";
import { Users, Music, BookOpen, Gamepad2 } from "lucide-react";

const activities = [
  { icon: Users, label: "Networking Sessions" },
  { icon: Music, label: "Festival Celebrations" },
  { icon: BookOpen, label: "Study Groups" },
  { icon: Gamepad2, label: "Game Nights" },
];

const CommunitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="community" className="section-padding bg-gradient-cinematic" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src={communityImg}
              alt="Community life at Stanza Hostels"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary">
              Community Life
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              More Than a Hostel.{" "}
              <span className="text-gradient-amber">A Living Community.</span>
            </h2>
            <p className="mb-8 font-body text-muted-foreground leading-relaxed">
              At Stanza, every day brings something new. From spontaneous study groups 
              and weekend game nights to curated networking events and festival celebrations — 
              you're not just finding accommodation, you're finding your tribe.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {activities.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-card p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <a.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-display text-sm font-medium">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
