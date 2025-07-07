import Link from 'next/link';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import { getPersonalInfo, getSocialLinks } from '@/lib/site-data';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const personalInfo = getPersonalInfo();
  const socialLinks = getSocialLinks();
  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <footer className={`sticky bottom-0 left-0 w-full bg-muted border-t ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              Passionate developer creating digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.platform}
                    href={link.url}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.platform}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Available for freelance work and collaborations.
              </p>
              <Link
                href="/contact"
                className="text-sm text-foreground hover:underline hover:underline-offset-4 transition-all"
              >
                Let's work together →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" weight="fill" /> using Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
