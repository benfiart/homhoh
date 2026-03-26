import Container from "@/components/ui/Container";
import { siteConfig, navItems, contactInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 block">
              <img src="/logo.svg" alt="" className="h-10 w-[58px] object-contain" aria-hidden="true" />
              <span className="font-serif text-2xl font-bold text-cream-50">
                Siam Coffees
              </span>
            </a>
            <p className="text-cream-200/70 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-cream-200/50 text-xs tracking-wider uppercase">
              Mae Hong Son &middot; Milwaukee
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-cream-200/50 mb-4 block font-medium">
              Quick Links
            </span>
            <ul className="space-y-2.5">
              {[...navItems, { label: "Contact", href: "#contact" }].map(
                (item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-cream-200/70 text-sm hover:text-cream-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-cream-200/50 mb-4 block font-medium">
              Get in Touch
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cream-200/70 text-sm hover:text-cream-50 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-cream-200/70 text-sm">
                {contactInfo.location}
              </li>
              <li>
                <a
                  href={contactInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200/70 text-sm hover:text-cream-50 transition-colors"
                >
                  Follow the farm on Facebook &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-200/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/50 text-xs">
            &copy; {new Date().getFullYear()} Siam Coffees Coffee. All rights reserved.
          </p>
          <p className="text-cream-200/50 text-xs">
            A social enterprise &middot; 100% of profits returned to farmers
          </p>
        </div>
      </Container>
    </footer>
  );
}
