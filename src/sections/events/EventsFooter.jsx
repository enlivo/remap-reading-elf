import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import branchLantern from "../../../assets/images/footer-branch-lantern.png";
import leafSprig from "../../../assets/images/books-page/deco-leaf-sprig.png";

import redBurst from "../../../design-assets/Website/Events/Elements of Events/6.png";
import brownBurst from "../../../design-assets/Website/Events/Elements of Events/4.png";

import facebookIcon from "../../../design-assets/Website/Common Through Out/Socials/Facebook.png";
import instagramIcon from "../../../design-assets/Website/Common Through Out/Socials/Instagram.png";
import whatsappIcon from "../../../design-assets/Website/Common Through Out/Socials/Whatsapp.png";
import phoneIcon from "../../../design-assets/Website/Common Through Out/Phone No.png";

const socialLinks = [
  [
    "Instagram",
    "https://www.instagram.com/thereadingelf_hub/",
    instagramIcon,
  ],
  [
    "Facebook",
    "https://www.facebook.com/people/The-Reading-Elf-Hub/61583765232952/",
    facebookIcon,
  ],
  [
    "WhatsApp",
    "https://wa.me/919500056482",
    whatsappIcon,
  ],
];

const quickLinks = [
  ["Discover Books", "/books"],
  ["Our Story", "/our-story"],
  ["Experiences", "/experience"],
  ["Our Gallery", "/#gallery"],
  ["Events", "/events"],
];

export default function EventsFooter() {
  return (
    <section
      className="events-footer"
      aria-labelledby="events-footer-title"
    >
      <div className="events-footer__visit">
        <h2>
          <span>Come</span> <strong>See Us!</strong>
        </h2>

        <p>
          <span>Thoraipakkam,</span> <strong>Chennai</strong>
        </p>
      </div>

      <div className="events-footer__peach" aria-hidden="true" />

      <img
        className="events-footer__burst events-footer__burst--left"
        src={redBurst}
        alt=""
        aria-hidden="true"
      />

      <img
        className="events-footer__burst events-footer__burst--right"
        src={brownBurst}
        alt=""
        aria-hidden="true"
      />

      <img
        className="events-footer__branch"
        src={branchLantern}
        alt=""
        aria-hidden="true"
      />

      <img
        className="events-footer__leaf events-footer__leaf--left"
        src={leafSprig}
        alt=""
        aria-hidden="true"
      />

      <img
        className="events-footer__leaf events-footer__leaf--right"
        src={leafSprig}
        alt=""
        aria-hidden="true"
      />

      <img
        className="events-footer__badge"
        src={logoBadge}
        alt="The Reading Elf"
      />

      <section className="events-footer__about">
        <h2 id="events-footer-title">The Reading Elf</h2>

        <p>
          A magical space where kids discover
          <br />
          the joy of books, stories, and imagination.
        </p>

        <h3>Reach Us</h3>

        <div className="events-footer__socials">
          {socialLinks.map(([label, href, icon]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <img src={icon} alt="" />
            </a>
          ))}
        </div>

        <a
          className="events-footer__phone"
          href="tel:+919500056482"
        >
          <img src={phoneIcon} alt="" />
          +91 9500056482
        </a>
      </section>

      <nav
        className="events-footer__links"
        aria-label="Events footer navigation"
      >
        <h3>Quick Links</h3>

        {quickLinks.map(([label, href]) => (
          <a key={label} href={href}>
            • {label}
          </a>
        ))}
      </nav>

      <div className="events-footer__legal">
        <p>
          © 2026 The Reading Elf. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a>{" "}
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
    </section>
  );
}
