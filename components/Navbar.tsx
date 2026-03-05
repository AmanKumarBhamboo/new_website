"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <Link href="/" className="nav-logo" onClick={(e) => handleLinkClick(e, "/")}>
        Value Talent Advisory
      </Link>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions desktop-only">
        <Link href="/contact" className="btn-nav" onClick={(e) => handleLinkClick(e, "/contact")}>
          Get in Touch
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-nav mobile-cta" onClick={(e) => handleLinkClick(e, "/contact")}>
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
