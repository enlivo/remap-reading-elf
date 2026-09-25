import logo from "../../assets/images/logo.webp";
import treeLantern from "../../assets/images/footer-branch-lantern.png";
import booksLogoBadge from "../../assets/images/books-page/logo-badge.png";
import booksLeaf from "../../assets/images/books-page/deco-leaf-sprig.png";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import whatsapp from "../../assets/images/whatsapp.png";
import phone from "../../assets/images/phone-icon.png";

export default function SiteFooter({
  variant = "default",
}) {
  const isBooks =
    variant === "books";

  const footerLogo =
    isBooks
      ? booksLogoBadge
      : logo;

  const footerLeaf = booksLeaf;

  return (
    <footer
      className={
        isBooks
          ? "site-footer site-footer--books"
          : "site-footer"
      }
    >
      <img
        className="site-footer__tree"
        src={treeLantern}
        alt=""
        aria-hidden="true"
      />

      <img
        className="site-footer__leaf site-footer__leaf--one"
        src={footerLeaf}
        alt=""
        aria-hidden="true"
      />

      <img
        className="site-footer__leaf site-footer__leaf--two"
        src={footerLeaf}
        alt=""
        aria-hidden="true"
      />

      <div className="site-footer__content">
        <section className="site-footer__about">
          <p className="site-footer__visit">
            Come <strong>See Us!</strong>
            <br />
            Thoraipakkam, <strong>Chennai</strong>
          </p>

          <h2>The Reading Elf</h2>

          <p>
            A magical space where kids discover
            <br />
            the joy of books, stories, and
            imagination.
          </p>

          <h3>Reach Us</h3>

          <div className="site-footer__socials">
            <a
              href="https://www.instagram.com/thereadingelf_hub/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instagram}
                alt=""
              />
            </a>

            <a
              href="https://www.facebook.com/people/The-Reading-Elf-Hub/61583765232952/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebook}
                alt=""
              />
            </a>

            <a
              href="https://wa.me/919500056482"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src={whatsapp}
                alt=""
              />
            </a>
          </div>

          <a
            className="site-footer__phone"
            href="tel:+919500056482"
          >
            <img
              src={phone}
              alt=""
            />

            +91 9500056482
          </a>
        </section>

        <img
          className="site-footer__logo"
          src={footerLogo}
          alt="The Reading Elf"
        />

        <nav
          className="site-footer__links"
          aria-label="Footer navigation"
        >
          <h3>Quick Links</h3>

          <a href="/books">
            • Discover Books
          </a>

          <a href="/our-story">
            • Our Story
          </a>

          <a href="/experience">
            • Experiences
          </a>

          <a href="/#gallery">
            • Our Gallery
          </a>

          <a href="/events">
            • Events
          </a>
        </nav>
      </div>

      <div className="site-footer__legal">
        © 2026 The Reading Elf. All rights
        reserved. |{" "}
        <a href="/privacy-policy">
          Privacy Policy
        </a>{" "}
        •{" "}
        <a href="/terms-conditions">
          Terms &amp; Conditions
        </a>

        <br />

        Built by{" "}
        <a
          href="https://www.easttheory.com/"
          target="_blank"
          rel="noreferrer"
        >
          EastTheory.com
        </a>
      </div>
    </footer>
  );
}
