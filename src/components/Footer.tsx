import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">
              <span className="text-gradient-amber">Stanza</span> Hostels
            </h3>
            <p className="mb-6 font-body text-sm text-muted-foreground leading-relaxed">
              Premium student and young professional living in Pune. 
              Comfort, community, and convenience — all under one roof.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Locations", "Rooms", "Amenities", "Community", "Pricing"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                Pune, Maharashtra, India
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <Phone size={16} className="shrink-0 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-primary" />
                hello@stanzahostels.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              Stay updated with the latest from Stanza Hostels.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-border bg-secondary px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="rounded-lg bg-gradient-amber px-4 py-2 font-display text-xs font-semibold text-primary-foreground">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Guru Ai Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
