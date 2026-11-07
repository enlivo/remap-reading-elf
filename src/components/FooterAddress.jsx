/*
 * Real, crawlable business details for search engines - shared by every
 * footer so the address/phone/hours text (and the business-description
 * sentence) only lives in one place and stays in sync with Google's
 * listing for The Reading Elf.
 */
export default function FooterAddress() {
  return (
    <>
      <address className="footer-seo-address">
        Old No: 3/58, New No: 3, Marigold, 76, Kumaran Kudil Main Rd, Thoraipakkam,
        Chennai, Tamil Nadu 600097
        <br />
        <a href="tel:+919500056482">+91 95000 56482</a>
        <br />
        Tue&ndash;Sun, 10:30 AM&ndash;8:30 PM
      </address>

      <p className="footer-seo-sentence">
        The Reading Elf is a children&apos;s bookstore in Thoraipakkam, off OMR, Chennai.
      </p>
    </>
  );
}
