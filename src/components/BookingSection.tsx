import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const locations = [
  "Stanza Kothrud", "Stanza Hinjewadi", "Stanza Wakad", "Stanza Viman Nagar",
  "Stanza Baner", "Stanza Hadapsar", "Stanza Shivajinagar", "Stanza Aundh",
  "Stanza Karve Nagar", "Stanza Pimpri", "Stanza Kalyani Nagar", "Stanza Kondhwa",
];

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            Book Your Space
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 font-display text-3xl font-bold md:text-5xl"
          >
            Start Your <span className="text-gradient-amber">Stanza Journey</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="rounded-2xl bg-card p-8 shadow-cinematic md:p-12"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-amber">
                <Send size={24} className="text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold">Thank You!</h3>
              <p className="font-body text-muted-foreground">
                We'll get back to you within 24 hours. Welcome to the Stanza family!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Move-in Date</label>
                  <input
                    type="date"
                    required
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Preferred Location</label>
                  <select
                    required
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select location</option>
                    {locations.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-display text-sm font-medium">Room Type</label>
                  <select
                    required
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select room type</option>
                    <option value="single">Single Private Room</option>
                    <option value="twin">Twin Sharing Room</option>
                    <option value="triple">Triple Sharing Room</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-amber py-4 font-display text-base font-semibold text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-amber"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
