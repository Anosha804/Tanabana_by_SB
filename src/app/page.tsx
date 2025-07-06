import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
         <section className="hero-section">
          <img
            src="/hero.png"
            alt="Tanabana by SB - handcrafted embroidery"
            className="hero-image"
          />
      </section>




       {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Tanabana</h2>
          <p className="section-text">
            Tanabana by SB is a Karachi-based slow fashion label rooted in soft minimalism, hand embroidery,
            and breathable natural fabrics. Each piece is made with care, cultural depth, and comfort in mind.
          </p>
          <ul className="brand-values">
            <li>✿ Minimalism</li>
            <li>✿ Handmade Process</li>
            <li>✿ Affordable Fashion</li>
            <li>✿ Cultural Elegance</li>
            <li>✿ Comfort & Breathability</li>
          </ul>
        </div>
      </section>

      <section id="collection" className="collection-section">
  <div className="container">
    <h2 className="section-title">First Bloom Collection 🌸</h2>
    <div className="collection-grid">
      <div className="collection-card">
        <img src="/roshan_gul.webp" alt="Roshan Gul" />
        <h3>Roshan Gul</h3>
        <p>Blush pink kurta with hand floral stitch</p>
      </div>

      <div className="collection-card">
        <img src="/zard_bahar.jpg" alt="Zard Bahar" />
        <h3>Zard Bahar</h3>
        <p>Mustard short kurti with mirror work</p>
      </div>

      <div className="collection-card">
        <img src="/khaawb.webp" alt="Khwaab" />
        <h3>Khwaab</h3>
        <p>White co-ord set with tassel accents</p>
      </div>

      <div className="collection-card">
        <img src="/raat_rani.jpg" alt="Raat Rani" />
        <h3>Raat Rani</h3>
        <p>Midnight blue kaftan with star embroidery</p>
      </div>

      <div className="collection-card">
        <img src="/sitaroon_ki_roshni.webp" alt="Sitaron Ki Roshni" />
        <h3>Sitaron Ki Roshni</h3>
        <p>Organza/khaddar dupatta with sequins</p>
      </div>
    </div>
  </div>
</section>

<section id="order" className="order-section">
  <div className="container">
    <h2 className="section-title">How to Order</h2>
    <p className="section-text">
      Customers can place an order by messaging us directly on WhatsApp with:
    </p>
    <ul className="order-steps">
      <li>✔️ Design Name</li>
      <li>✔️ Size</li>
      <li>✔️ Payment Option (Pre-payment or COD in Karachi)</li>
    </ul>

    <a
      href="https://wa.me/92XXXXXXXXXX?text=Hi%20Tanabana%20Team%2C%20I%20want%20to%20order%20a%20design%20from%20your%20First%20Bloom%20collection."
      target="_blank"
      className="order-btn"
    >
      Order via WhatsApp
    </a>
  </div>
</section>

<footer className="footer">
  <div className="container">
    <p className="footer-brand">Tanabana by SB ✿</p>
    <p className="footer-contact">
      Based in Karachi | DM on Instagram or WhatsApp to order
    </p>
    <div className="footer-socials">
      <a href="https://instagram.com/tanabanabysb" target="_blank">Instagram</a>
      <span>|</span>
      <a href="mailto:hello@tanabanabysb.com">Email</a>
    </div>
    <p className="footer-copy">© {new Date().getFullYear()} Tanabana by SB. All rights reserved.</p>
  </div>
</footer>


    </main>
  );
}
