import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, UtensilsCrossed, Sparkles, Calendar, Dumbbell, Laptop, ShieldCheck, Smartphone } from "lucide-react";
import gymImg from "@/assets/amenities-gym.jpg";
import coworkImg from "@/assets/coworking.jpg";

const amenities = [
  { icon: Wifi, title: "High-Speed Internet", desc: "Blazing fast WiFi across all spaces for seamless work and play." },
  { icon: UtensilsCrossed, title: "Nutritious Meals", desc: "Chef-prepared breakfast, lunch & dinner with diverse menu options." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Professional cleaning and laundry services to keep your space fresh." },
  { icon: Calendar, title: "Community Events", desc: "Workshops, movie nights, festivals, and networking sessions." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Fully equipped gym with modern machines and free weights." },
  { icon: Laptop, title: "Co-Working Spaces", desc: "Dedicated work zones with ergonomic furniture and power outlets." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV, biometric access, security personnel round the clock." },
  { icon: Smartphone, title: "Smart Access", desc: "App-based services for maintenance requests, payments, and more." },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="amenities" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            Amenities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 font-display text-3xl font-bold md:text-5xl"
          >
            Everything You Need, <span className="text-gradient-amber">Nothing You Don't</span>
          </motion.h2>
        </div>

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 grid gap-4 md:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
            <img src={gymImg} alt="Fitness center" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-display text-xl font-bold">Fitness Center</h3>
              <p className="font-body text-sm text-muted-foreground">State-of-the-art equipment</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
            <img src={coworkImg} alt="Co-working space" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-display text-xl font-bold">Co-Working Hub</h3>
              <p className="font-body text-sm text-muted-foreground">Built for productivity</p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="rounded-xl bg-card p-5 transition-all hover:glow-amber"
            >
              <a.icon className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 font-display text-sm font-semibold">{a.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
