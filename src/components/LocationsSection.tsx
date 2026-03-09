import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Wifi, UtensilsCrossed, Wind, BookOpen, Shield, Dumbbell } from "lucide-react";
import puneCity from "@/assets/pune-city.jpg";

const locations = [
  { name: "Stanza Kothrud", area: "Kothrud", near: "Near MIT & Symbiosis" },
  { name: "Stanza Hinjewadi", area: "Hinjewadi", near: "Near IT Park Phase 1" },
  { name: "Stanza Wakad", area: "Wakad", near: "Near D.Y. Patil College" },
  { name: "Stanza Viman Nagar", area: "Viman Nagar", near: "Near EON IT Park" },
  { name: "Stanza Baner", area: "Baner", near: "Near Persistent Systems" },
  { name: "Stanza Hadapsar", area: "Hadapsar", near: "Near Magarpatta City" },
  { name: "Stanza Shivajinagar", area: "Shivajinagar", near: "Near COEP & FC Road" },
  { name: "Stanza Aundh", area: "Aundh", near: "Near IUCAA & University" },
  { name: "Stanza Karve Nagar", area: "Karve Nagar", near: "Near Bharati Vidyapeeth" },
  { name: "Stanza Pimpri", area: "Pimpri", near: "Near PCMC IT Hub" },
  { name: "Stanza Kalyani Nagar", area: "Kalyani Nagar", near: "Near Koregaon Park" },
  { name: "Stanza Kondhwa", area: "Kondhwa", near: "Near NIBM Road" },
];

const features = [Wifi, UtensilsCrossed, Wind, BookOpen, Shield, Dumbbell];

const LocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            Our Locations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 font-display text-3xl font-bold md:text-5xl"
          >
            20 Premium Properties Across <span className="text-gradient-amber">Pune</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-xl font-body text-muted-foreground"
          >
            Strategically located near top universities, IT parks, and transit hubs.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              className="group cursor-pointer overflow-hidden rounded-xl bg-card transition-all hover:glow-amber"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={puneCity}
                  alt={loc.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-primary">
                  <MapPin size={14} />
                  <span className="font-body text-xs">{loc.area}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-display text-base font-semibold">{loc.name}</h3>
                <p className="mb-3 font-body text-xs text-muted-foreground">{loc.near}</p>
                <div className="mb-3 flex gap-2">
                  {features.map((Icon, idx) => (
                    <div key={idx} className="flex h-7 w-7 items-center justify-center rounded bg-secondary">
                      <Icon size={13} className="text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <button className="w-full rounded-md border border-border py-2 font-display text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
