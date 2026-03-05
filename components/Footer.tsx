"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking a link to the current page, scroll to top manually
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <span className="footer-logo">Value Talent Advisory</span>
      <div className="footer-links">
        <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
        <Link href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About</Link>
        <Link href="/services" onClick={(e) => handleLinkClick(e, "/services")}>Services</Link>
        <Link href="/why-us" onClick={(e) => handleLinkClick(e, "/why-us")}>Why Us</Link>
        <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</Link>
      </div>
      <span className="footer-copy">© 2025 Value Talent Advisory. All rights reserved.</span>
    </footer>
  );
}
