import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="hero-simple">
        <h1>Tanabana by SB</h1>
        <p>Handmade ✿ Minimal ✿ Breathable</p>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Tanabana by SB is a Karachi-based slow fashion label offering
          aesthetic, breathable clothing stitched with cultural softness and
          handmade detail. We believe in stories stitched gently — for real
          women and everyday life.
        </p>
      </section>

      <section id="collection" className="collection-section">
        <div className="container">
          <h2 className="section-title">First Bloom Collection 🌸</h2>
          <div className="collection-grid">
            <div className="collection-card">
              <img src="/roshan_gul.webp" alt="Roshan Gul" />
              <h3>Roshan Gul</h3>
              <p>
                Soft pink kurta with floral hand stitch. Made with pure mulmul.
                Rs. 3,250
              </p>
              <a href="https://wa.me/+92xxxxxxx" className="order-button">
                Order on WhatsApp
              </a>
            </div>

            <div className="collection-card">
              <img src="/zard_bahar.jpg" alt="Zard Bahar" />
              <h3>Zard Bahar</h3>
              <p>
                Mustard short kurti with hand mirror work. Lawn or light
                khaddar. Rs. 2,950
              </p>
              <a href="https://wa.me/+92xxxxxxx" className="order-button">
                Order on WhatsApp
              </a>
            </div>

            <div className="collection-card">
              <img src="/khaawb.webp" alt="Khwaab" />
              <h3>Khwaab</h3>
              <p>
                White co-ord set with tassel accents. Made with breathable
                cotton. Rs. 3,750
              </p>
              <a href="https://wa.me/+92xxxxxxx" className="order-button">
                Order on WhatsApp
              </a>
            </div>

            <div className="collection-card">
              <img src="/raat_rani.jpg" alt="Raat Rani" />
              <h3>Raat Rani</h3>
              <p>
                Midnight blue kaftan with subtle star embroidery. Lawn fabric.
                Rs. 3,950
              </p>
              <a href="https://wa.me/+92xxxxxxx" className="order-button">
                Order on WhatsApp
              </a>
            </div>

            <div className="collection-card">
              <img src="/sitaroon_ki_roshni.webp" alt="Sitaron Ki Roshni" />
              <h3>Sitaron Ki Roshni</h3>
              <p>Organza/khaddar dupatta with light sequin work. Rs. 1,800</p>
              <a href="https://wa.me/+92xxxxxxx" className="order-button">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="order-section">
        <h2>How to Order</h2>
        <p>
          1. DM us or click the WhatsApp button on your favorite design. <br />
          2. Confirm your size & delivery details. <br />
          3. Pay via bank transfer or Cash on Delivery (Karachi only). <br />✿
          Shipping available across Pakistan.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:tanabanabysb@gmail.com">tanabanabysb@gmail.com</a>
          <br />
          Instagram:{" "}
          <a href="https://instagram.com/tanabanabysb" target="_blank">
            @tanabanabysb
          </a>
          <br />
          WhatsApp:{" "}
          <a href="https://wa.me/+92xxxxxxx" target="_blank">
            +92xxxxxxx
          </a>
        </p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Tanabana by SB | Handmade with love in
        Karachi
      </footer>
    </main>
  );
}
