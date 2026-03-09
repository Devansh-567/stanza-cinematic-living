import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MBA Student, Symbiosis",
    text: "Stanza completely changed my Pune experience. The rooms are spotless, the food is amazing, and I've made lifelong friends here. Wouldn't trade it for anything.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Software Engineer, Infosys",
    text: "As a young professional, finding quality housing in Pune was tough. Stanza's Hinjewadi property is perfect — close to work, great amenities, and an incredible community.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Engineering Student, COEP",
    text: "The co-working spaces are a game changer. I study better here than in any library. Plus the events keep life exciting!",
    rating: 5,
  },
  {
    name: "Rahul Deshmukh",
    role: "Data Analyst, TCS",
    text: "24/7 security, fantastic meals, and a gym in the building — Stanza isn't a hostel, it's a lifestyle upgrade. Highly recommend for anyone in Pune.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16 font-display text-3xl font-bold md:text-5xl"
        >
          What Our <span className="text-gradient-amber">Residents Say</span>
        </motion.h2>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-card p-8 md:p-12"
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary opacity-40" />
          <p className="mb-6 font-body text-lg leading-relaxed text-foreground md:text-xl">
            "{t.text}"
          </p>
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <h4 className="font-display text-base font-semibold">{t.name}</h4>
          <p className="font-body text-sm text-muted-foreground">{t.role}</p>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
