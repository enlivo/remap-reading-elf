import { useEffect, useRef } from "react";

import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import commonLeaf from "../../../design-assets/Website/Common Through Out/Leaf.png";
import leafSprig from "../../../assets/images/books-page/deco-leaf-sprig.png";
import branchLantern from "../../../assets/images/footer-branch-lantern.png";
import facebookIcon from "../../../design-assets/Website/Common Through Out/Socials/Facebook.png";
import instagramIcon from "../../../design-assets/Website/Common Through Out/Socials/Instagram.png";
import whatsappIcon from "../../../design-assets/Website/Common Through Out/Socials/Whatsapp.png";
import phoneIcon from "../../../design-assets/Website/Common Through Out/Phone No.png";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/the_reading_elf?stkn=MWc3b3V0aTdnNHg4eg==", instagramIcon],
  ["Facebook", "https://www.facebook.com/people/The-Reading-Elf-Hub/61583765232952/", facebookIcon],
  ["WhatsApp", "https://wa.me/919500056482", whatsappIcon],
];

const quickLinks = [
  ["Discover Books", "/books"],
  ["Our Story", "/our-story"],
  ["Experiences", "/experience"],
  ["Our Gallery", "/#gallery"],
  ["Events", "/events"],
];

export default function BlogFooter({ standalone = false }) {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const page = footer?.closest(".blog-post-page");

    if (!standalone || !footer || !page) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      page.classList.toggle("blog-post-page--footer-visible", entry.isIntersecting);
    });

    observer.observe(footer);

    return () => {
      observer.disconnect();
      page.classList.remove("blog-post-page--footer-visible");
    };
  }, [standalone]);

  return (
    <div
      ref={footerRef}
      className={standalone ? "blog-footer blog-footer--standalone" : "blog-footer"}
      aria-label="The Reading Elf footer"
    >
      <div className="blog-footer__desktop" aria-label="The Reading Elf footer">
        <div className="blog-footer__desktop-top" aria-hidden="true" />
        <img className="blog-footer__desktop-branch" src={branchLantern} alt="" aria-hidden="true" />
        <img className="blog-footer__desktop-leaf blog-footer__desktop-leaf--left" src={commonLeaf} alt="" aria-hidden="true" />
        <img className="blog-footer__desktop-leaf blog-footer__desktop-leaf--right" src={commonLeaf} alt="" aria-hidden="true" />
        <img className="blog-footer__desktop-badge" src={logoBadge} alt="The Reading Elf" />

        <section className="blog-footer__desktop-about">
          <h2>The Reading Elf</h2>
          <p>
            A magical space where kids discover{" "}
            <br />
            the joy of books, stories, and imagination.
          </p>
          <h3>Reach Us</h3>
          <div className="blog-footer__desktop-socials">
            {socialLinks.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
          <a className="blog-footer__desktop-phone" href="tel:+919500056482">
            <img src={phoneIcon} alt="" />
            +91 9500056482
          </a>
        </section>

        <nav className="blog-footer__desktop-links" aria-label="Footer quick links">
          <h3>Quick Links</h3>
          {quickLinks.map(([label, href]) => <a key={label} href={href}>• {label}</a>)}
        </nav>

        <div className="blog-footer__desktop-legal">
          <p>
            © 2026 The Reading Elf. All rights reserved. |{" "}
            <a href="/privacy-policy">Privacy Policy</a> •{" "}
            <a href="/terms-conditions">Terms &amp; Conditions</a>
          </p>
          <p>
            Built by{" "}
            <a href="https://www.easttheory.com/" target="_blank" rel="noreferrer">EastTheory.com</a>
          </p>
        </div>
      </div>

      <footer className="blog-footer__mobile" aria-labelledby="blog-footer-title">
        <img className="blog-footer__branch" src={branchLantern} alt="" />
        <img
          className="blog-footer__leaf blog-footer__leaf--left"
          src={leafSprig}
          alt=""
          aria-hidden="true"
        />
        <img
          className="blog-footer__leaf blog-footer__leaf--right"
          src={leafSprig}
          alt=""
          aria-hidden="true"
        />
        <img className="blog-footer__badge" src={logoBadge} alt="The Reading Elf" />

        <section className="blog-footer__about">
          <h2 id="blog-footer-title">The Reading Elf</h2>
          <p>A magical space where kids discover the joy of books, stories, and imagination.</p>
          <h3>Reach Us</h3>
          <div className="blog-footer__socials">
            {socialLinks.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
          <a className="blog-footer__mobile-phone" href="tel:+919500056482">
            <img src={phoneIcon} alt="" />
            +91 9500056482
          </a>
        </section>

        <nav className="blog-footer__mobile-links" aria-label="Blog footer navigation">
          <h3>Quick Links</h3>
          {quickLinks.map(([label, href]) => <a key={label} href={href}>• {label}</a>)}
        </nav>

        <div className="blog-footer__legal">
          <p>
            © 2026 The Reading Elf. All rights reserved. |{" "}
            <a href="/privacy-policy">Privacy Policy</a> •{" "}
            <a href="/terms-conditions">Terms &amp; Conditions</a>
          </p>
          <p>
            Built by{" "}
            <a href="https://www.easttheory.com/" target="_blank" rel="noreferrer">EastTheory.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
