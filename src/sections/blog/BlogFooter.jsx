import footerArtwork from "../../../design-assets/Website/blog/blog-footer.png";
import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import branchLantern from "../../../assets/images/footer-branch-lantern.png";
import facebookIcon from "../../../design-assets/Website/Common Through Out/Socials/Facebook.png";
import instagramIcon from "../../../design-assets/Website/Common Through Out/Socials/Instagram.png";
import whatsappIcon from "../../../design-assets/Website/Common Through Out/Socials/Whatsapp.png";
import phoneIcon from "../../../design-assets/Website/Common Through Out/Phone No.png";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/thereadingelf_hub/", instagramIcon],
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

export default function BlogFooter() {
  return (
    <div className="blog-footer" aria-label="The Reading Elf footer">
      <div className="blog-state__canvas blog-footer__canvas blog-footer__desktop">
        <img
          className="blog-state__artwork"
          src={footerArtwork}
          alt="Come See Us at Thoraipakkam, Chennai. The Reading Elf contact details and quick links."
        />

        <nav className="blog-footer__quick-links" aria-label="Footer quick links">
          <a href="/books" aria-label="Discover Books" />
          <a href="/our-story" aria-label="Our Story" />
          <a href="/experience" aria-label="Experiences" />
          <a href="/#gallery" aria-label="Our Gallery" />
          <a href="/events" aria-label="Events" />
        </nav>

        <a
          className="blog-footer__phone"
          href="tel:+919500056482"
          aria-label="Call The Reading Elf at plus 91 95000 56482"
        />
      </div>

      <footer className="blog-footer__mobile" aria-labelledby="blog-footer-title">
        <div className="blog-footer__visit">
          <h2>Come <strong>See Us!</strong></h2>
          <p>Thoraipakkam, <strong>Chennai</strong></p>
        </div>
        <img className="blog-footer__branch" src={branchLantern} alt="" />
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
