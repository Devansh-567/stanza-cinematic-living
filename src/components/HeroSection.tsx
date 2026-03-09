import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-hostel.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stanza Hostels Pune - Modern student living"
          className="h-full w-full object-cover"
        />
        <div className="cinematic-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-primary"
        >
          Premium Student Living in Pune
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          Live Smarter. Live Better.{" "}
          <span className="text-gradient-amber">Welcome to Stanza Hostels Pune.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-10 max-w-2xl font-body text-lg text-muted-foreground md:text-xl"
        >
          Where comfort meets community. Designed for students and young professionals
          who demand more from their living experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#locations"
            className="rounded-lg bg-gradient-amber px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-amber"
          >
            Explore Locations
          </a>
          <a
            href="#rooms"
            className="rounded-lg border border-border bg-glass-light px-8 py-3.5 font-display text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            View Rooms
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
