import {
  useEffect,
  useRef,
} from "react";

import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import branchLantern from "../../../assets/images/footer-branch-lantern.png";
import leafSprig from "../../../assets/images/books-page/deco-leaf-sprig.png";
import phoneIcon from "../../../design-assets/Website/Common Through Out/Phone No.png";
import facebookIcon from "../../../design-assets/Website/Common Through Out/Socials/Facebook.png";
import instagramIcon from "../../../design-assets/Website/Common Through Out/Socials/Instagram.png";
import whatsappIcon from "../../../design-assets/Website/Common Through Out/Socials/Whatsapp.png";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thereadingelf_hub/",
    icon: instagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/The-Reading-Elf-Hub/61583765232952/",
    icon: facebookIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919500056482",
    icon: whatsappIcon,
  },
];

const quickLinks = [
  {
    label: "Discover Books",
    href: "/books",
  },
  {
    label: "Our Story",
    href: "/our-story",
  },
  {
    label: "Experiences",
    href: "/experience",
  },
  {
    label: "Our Gallery",
    href: "/#gallery",
  },
  {
    label: "Events",
    href: "/events",
  },
];

export default function StoryBoxFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const page = footer?.closest(
      ".story-box-page",
    );

    if (!footer || !page) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        page.classList.toggle(
          "story-box-page--footer-entering",
          entry.isIntersecting,
        );
      },
      {
        threshold: 0,
      },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
      page.classList.remove(
        "story-box-page--footer-entering",
      );
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="story-box-footer"
      aria-labelledby="story-box-footer-title"
    >
      <div
        className="story-box-footer__green-field"
        aria-hidden="true"
      />

      <img
        className="story-box-footer__branch"
        src={branchLantern}
        alt=""
        aria-hidden="true"
      />

      <img
        className="story-box-footer__leaf story-box-footer__leaf--left"
        src={leafSprig}
        alt=""
        aria-hidden="true"
      />

      <img
        className="story-box-footer__leaf story-box-footer__leaf--right"
        src={leafSprig}
        alt=""
        aria-hidden="true"
      />

      <img
        className="story-box-footer__badge"
        src={logoBadge}
        alt="The Reading Elf"
      />

      <section className="story-box-footer__intro">
        <h2 id="story-box-footer-title">
          The Reading Elf
        </h2>

        <p>
          A magical space where kids discover
          <br />
          the joy of books, stories, and imagination.
        </p>
      </section>

      <div className="story-box-footer__columns">
        <section className="story-box-footer__reach-us">
          <h3>Reach Us</h3>

          <div className="story-box-footer__socials">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <img
                  src={item.icon}
                  alt=""
                />
              </a>
            ))}
          </div>

          <a
            className="story-box-footer__phone"
            href="tel:+919500056482"
          >
            <img
              src={phoneIcon}
              alt=""
            />

            +91 9500056482
          </a>
        </section>

        <nav
          className="story-box-footer__links"
          aria-label="Story Box footer navigation"
        >
          <h3>Quick Links</h3>

          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
            >
              <span aria-hidden="true">•</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="story-box-footer__legal">
        <p>
          © 2026 The Reading Elf. All rights reserved. |{" "}
          <a href="/privacy-policy">
            Privacy Policy
          </a>{" "}
          •{" "}
          <a href="/terms-conditions">
            Terms &amp; Conditions
          </a>
        </p>

        <p>
          Built by{" "}
          <a
            href="https://www.easttheory.com/"
            target="_blank"
            rel="noreferrer"
          >
            EastTheory.com
          </a>
        </p>
      </div>
    </footer>
  );
}
