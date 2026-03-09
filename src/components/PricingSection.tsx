import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Triple Sharing",
    price: "₹6,500",
    popular: false,
    features: [
      "Triple sharing room with AC",
      "3 meals per day",
      "High-speed WiFi",
      "Daily housekeeping",
      "Access to common areas",
      "24/7 security",
    ],
  },
  {
    name: "Twin Sharing",
    price: "₹8,500",
    popular: true,
    features: [
      "Twin sharing room with AC",
      "3 meals per day",
      "High-speed WiFi",
      "Daily housekeeping",
      "Co-working space access",
      "Gym access",
      "24/7 security",
      "Community events",
    ],
  },
  {
    name: "Single Private",
    price: "₹12,500",
    popular: false,
    features: [
      "Private room with AC",
      "3 premium meals per day",
      "High-speed WiFi",
      "Daily housekeeping",
      "Co-working space access",
      "Gym access",
      "24/7 security",
      "Priority maintenance",
      "Community events",
      "Laundry service",
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding bg-gradient-cinematic" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 font-display text-3xl font-bold md:text-5xl"
          >
            Simple, <span className="text-gradient-amber">Transparent Pricing</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-card ring-2 ring-primary shadow-amber"
                  : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-amber px-4 py-1 font-display text-xs font-bold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 font-display text-lg font-semibold">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`block w-full rounded-lg py-3 text-center font-display text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-gradient-amber text-primary-foreground"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
