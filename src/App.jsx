import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "./Footer";
import AuthForm from "./AuthForm";
export default function BuilderIOClone() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [dropdownStates, setDropdownStates] = useState({
    platform: false,
    solutions: false,
    developers: false,
    resources: false,
  });

  const toggleDropdown = (key) => (isOpen) => {
    setDropdownStates((prev) => ({ ...prev, [key]: isOpen }));
  };

  const dropdowns = [
    {
      key: "platform",
      label: "Platform",
      columns: [
        {
          title: "Visual Development",
          links: [{ text: "Platform Overview", href: "/overview" }],
        },
        {
          title: "Develop",
          links: [
            { text: "Convert designs to clean code", href: "/designs" },
            { text: "Leverage your components", href: "/components" },
            { text: "Use your framework", href: "/framework" },
          ],
        },
        {
          title: "Publish",
          links: [
            { text: "Visually edit", href: "/visually" },
            { text: "Manage headless content", href: "/manage" },
            { text: "Optimize experiences", href: "/experiences" },
            { text: "Integrate with your stack", href: "/stack" },
          ],
        },
      ],
    },
    {
      key: "solutions",
      label: "Solutions",
      columns: [
        {
          title: "Use Cases",
          links: [
            { text: "Headless Commerce", href: "/headless" },
            { text: "Design to Code", href: "/design" },
            { text: "Marketing Sites", href: "/marketing" },
            { text: "Landing Pages", href: "/landing" },
            { text: "Mobile Apps", href: "/mobile" },
            { text: "Multi-Brand", href: "/multi" },
          ],
        },
        {
          title: "Integrations",
          links: [
            { text: "Vercel", href: "/vercel" },
            { text: "Netlify", href: "/netlify" },
            { text: "Shopify", href: "/shopify" },
            { text: "Cloudinary", href: "/cloudinary" },
            { text: "Salesforce", href: "/salesforce" },
            { text: "Figma", href: "/figma" },
            { text: "Algolia", href: "/algolia" },
            { text: "Phrase", href: "/phrase" },
          ],
        },
      ],
    },
    {
      key: "developers",
      label: "Developers",
      columns: [
        {
          title: "Overview",
          links: [
            { text: "Documentation", href: "/documentation" },
            { text: "Devtools", href: "/devtools" },
            { text: "Builder Blueprints", href: "/blueprints" },
          ],
        },
        {
          title: "Frameworks",
          links: [
            { text: "React", href: "/react" },
            { text: "Next.js", href: "/next" },
            { text: "Qwik", href: "/qwik" },
            { text: "Gatsby", href: "/gatsby" },
            { text: "Angular", href: "/angular" },
            { text: "Vue", href: "/vue" },
            { text: "Svelte", href: "/svelte" },
          ],
        },
        {
          title: "Open Source",
          links: [
            { text: "Builder", href: "/builder" },
            { text: "Mitosis", href: "/mitosis" },
            { text: "AI Shell", href: "/aishell" },
            { text: "Micro Agent", href: "/microagent" },
            { text: "GPT Crawler", href: "/gptcrawler" },
            { text: "Qwik", href: "/qwikopensource" },
            { text: "Partytown", href: "/partytown" },
          ],
        },
        {
          title: "Explore",
          links: [
            { text: "Best of Web", href: "/bestoftheweb" },
            { text: "Performance Insights", href: "/performance" },
          ],
        },
      ],
    },
    {
      key: "resources",
      label: "Resources",
      columns: [
        {
          title: "Explore",
          links: [
            { text: "Blog", href: "/blog" },
            { text: "Product Updates", href: "/updates" },
            { text: "Glossary", href: "/glossary" },
            { text: "Community Forum", href: "/forum" },
            { text: "Developer Docs", href: "/docs" },
            { text: "Knowledge Base", href: "/knowledge" },
            { text: "Partners", href: "/partners" },
          ],
        },
        {
          title: "Customers",
          links: [
            { text: "Success Stories", href: "/success" },
            { text: "Showcase", href: "/showcase" },
          ],
        },
        {
          title: "Resource Center",
          links: [
            { text: "Product Demos", href: "/demos" },
            { text: "Guides", href: "/guides" },
            { text: "Webinars", href: "/webinars" },
            { text: "Explainers", href: "/explainers" },
            { text: "See All", href: "/seeall" },
          ],
        },
      ],
    },
  ];


  return (
    <div style={{ backgroundColor: "black" }}>
      <nav className="navbar">
        <img
          style={{ width: "50px", height: "50px" }}
          src="src/assets/image.jpg"
          alt="Logo"
        />
        <h1 style={{ color: "white" }}>Builder.io</h1>
        <ul>
          {dropdowns.map((dropdown) => (
            <li
              key={dropdown.key}
              className="dropdown-wrapper"
              onMouseEnter={() => toggleDropdown(dropdown.key)(true)}
              onMouseLeave={() => toggleDropdown(dropdown.key)(false)}
            >
              <Link to={`#${dropdown.key}`} className="dropdown-toggle">
                {dropdown.label}{" "}
                <span
                  className={`arrow ${
                    dropdownStates[dropdown.key] ? "rotate" : ""
                  }`}
                >
                  &#9662;
                </span>
              </Link>
              {dropdownStates[dropdown.key] && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={() => toggleDropdown(dropdown.key)(true)}
                  onMouseLeave={() => toggleDropdown(dropdown.key)(false)}
                >
                  {dropdown.columns.map((column, index) => (
                    <div key={index} className="dropdown-column">
                      <h4>{column.title}</h4>
                      {column.links.map((link, idx) => (
                        <Link key={idx} to={link.href}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="app-container">
      <div className="btn-group">
        <button 
          className="btn btn-sales" 
          onClick={() => { setShowForm(true); setIsLogin(true); }}
        >
          Log In
        </button>
        <button 
          className="btn btn-sales" 
          onClick={() => { setShowForm(true); setIsLogin(false); }}
        >
          Sign Up
        </button>
        <button 
          className="btn btn-app" 
          onClick={() => setShowForm(false)}
        >
          Go to App
        </button>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="modal">
            <AuthForm 
              isLogin={isLogin} 
              setIsLogin={setIsLogin} 
              closeForm={() => setShowForm(false)} 
            />
          </div>
        </div>
      )}
    </div>
    
      </nav>

      <section className="hero">
        <h2>Build & Optimize Fast</h2>
        <p>A headless CMS with a powerful visual editor.</p>
        <h3>
          Accelerate your digital teams with AI-powered design-to-code, visual
          editing, and enterprise CMS, all in our Visual Development Platform.
        </h3>
        <div className="btn-group">
          <button className="btn btn-primary">Get started free</button>
          <button style={{ color: "white" }} className="btn btn-secondary">
            Contact sales
          </button>
        </div>
      </section>
      <section className="video-section">
        <video
          className="promo-video"
          src="src/assets/platform.mp4"
          autoPlay
          loop
          muted
          controls
        ></video>
        <div className="scrolling-brands">
          <div className="brands">
            {[
              { src: "src/assets/jcrew.jpeg", alt: "JCREW", label: "JCREW" },
              { src: "src/assets/harrys.png", alt: "Harry's", label: "Harry's" },
              { src: "src/assets/experian.png", alt: "Experian", label: "Experian" },
              { src: "src/assets/faire.png", alt: "Faire", label: "Faire" },
              { src: "src/assets/vistaprint.png", alt: "Vistaprint", label: "Vistaprint" },
              { src: "src/assets/aloyoga.png", alt: "Aloyoga", label: "Aloyoga" },
              { src: "src/assets/afterpay.png", alt: "Afterpay", label: "Afterpay" },
              { src: "src/assets/fabletics.png", alt: "Fabletics", label: "Fabletics" },
              { src: "src/assets/vimeo.png", alt: "Vimeo", label: "Vimeo" },
              { src: "src/assets/nuts.png", alt: "Nuts.com", label: "Nuts.com" },
            ].map((brand, index) => (
              <div key={index} className="brand">
                <img src={brand.src} alt={brand.alt} />
                <span>{brand.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="visual-dev-section">
  <h2>Visual Development Platform</h2>
  <p>Code, create, iterate, and optimize faster than you thought possible</p>
  
  <div className="video-container">
    <video
      className="feature-video"
      src="src/assets/guide.mp4"
      autoPlay
      loop
      muted
      controls
    ></video>
  </div>
</section>

      <section className="cards-section">
  <h2>Why Choose Builder.io?</h2>
  <div className="cards-container">
    <div className="card">
      <img src="src/assets/webinar.webp" alt="Visual Editing" />
      <h3>Visual Editing</h3>
      <p>Drag and drop to create stunning web pages without coding.</p>
    </div>
    <div className="card">
      <img src="src/assets/web.webp" alt="Performance Optimization" />
      <h3>Performance Optimization</h3>
      <p>Boost site speed with AI-powered optimizations.</p>
    </div>
    <div className="card">
      <img src="src/assets/customer.webp" alt="Seamless Integrations" />
      <h3>Seamless Integrations</h3>
      <p>Works with your favorite frameworks and tools.</p>
    </div>
    <div className="card">
      <img src="src/assets/explainer.webp" alt="AI-Powered Insights" />
      <h3>AI-Powered Insights</h3>
      <p>Leverage AI for smarter content personalization.</p>
    </div>
  </div>
</section>
<div className="video-container">
    <video
      className="feature-video"
      src="src/assets/redeem.mp4"
      autoPlay
      loop
      muted
      controls
    ></video>
  </div>
      
      <section className="newsletter-section">
        <div className="newsletter-container">
        <h2>Get the latest from Builder.io</h2>
        <p>Dev Drop Newsletter</p>
        <p>News, tips, and tricks from Builder, for frontend developers.</p>
        <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
        </form>
        <p className="privacy-policy">
        By submitting, you agree to our <a href="/privacy">Privacy Policy</a>
        </p>
        </div>
        </section>
      <Footer />
    </div>
  );
}

function ContentPage({ title }) {
  return (
    <section className="matched-content">
      <h2>{title}</h2>
      <p>This is the content for {title}.</p>
    </section>
  );
}