import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bed, Wifi, Wind, Lamp, Lock, MonitorSmartphone } from "lucide-react";
import roomSingle from "@/assets/room-single.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomTriple from "@/assets/room-triple.jpg";

const rooms = [
  {
    name: "Single Private Room",
    image: roomSingle,
    price: "₹12,500",
    desc: "Your private sanctuary. Perfect for focused individuals who value personal space and solitude.",
    features: ["Private Room", "High-Speed WiFi", "AC", "Study Desk", "Smart Lock", "Attached Wardrobe"],
  },
  {
    name: "Twin Sharing Room",
    image: roomTwin,
    price: "₹8,500",
    desc: "The perfect balance of community and comfort. Share with a like-minded roommate.",
    features: ["2 Beds", "High-Speed WiFi", "AC", "Study Area", "Smart Lock", "Personal Storage"],
  },
  {
    name: "Triple Sharing Room",
    image: roomTriple,
    price: "₹6,500",
    desc: "Maximum value, maximum connections. Ideal for social individuals on a budget.",
    features: ["3 Beds", "High-Speed WiFi", "AC", "Shared Desk", "Smart Lock", "Locker Storage"],
  },
];

const featureIcons: Record<string, typeof Bed> = {
  "Private Room": Bed, "2 Beds": Bed, "3 Beds": Bed,
  "High-Speed WiFi": Wifi, "AC": Wind,
  "Study Desk": Lamp, "Study Area": Lamp, "Shared Desk": Lamp,
  "Smart Lock": Lock,
  "Attached Wardrobe": MonitorSmartphone, "Personal Storage": MonitorSmartphone, "Locker Storage": MonitorSmartphone,
};

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rooms" className="section-padding bg-gradient-cinematic" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary"
          >
            Room Types
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 font-display text-3xl font-bold md:text-5xl"
          >
            Find Your <span className="text-gradient-amber">Perfect Space</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-cinematic"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-gradient-amber px-4 py-1.5 font-display text-sm font-bold text-primary-foreground">
                    {room.price}/mo
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-bold">{room.name}</h3>
                <p className="mb-5 font-body text-sm text-muted-foreground">{room.desc}</p>
                <div className="mb-5 grid grid-cols-2 gap-2">
                  {room.features.map((f) => {
                    const Icon = featureIcons[f] || Bed;
                    return (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon size={14} className="text-primary" />
                        <span className="font-body">{f}</span>
                      </div>
                    );
                  })}
                </div>
                <a
                  href="#booking"
                  className="block w-full rounded-lg bg-gradient-amber py-3 text-center font-display text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
