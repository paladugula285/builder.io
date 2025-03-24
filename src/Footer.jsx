import React from "react";
import '../src/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4 className="heading">Product</h4>
          <ul>
            <li>Platform Overview</li>
            <li>Integrations</li>
            <li>What's New</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Capabilities</h4>
          <ul>
            <li>Design to Code</li>
            <li>Visual Editor</li>
            <li>Headless CMS</li>
            <li>A/B & Personalization</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Developers</h4>
          <ul>
            <li>Documentation</li>
            <li>Devtools</li>
            <li>Builder Blueprints</li>
            <li>Best of Web</li>
            <li>Performance Insights</li>
            <li>Open Source</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Builder</h4>
          <ul>
            <li>Mitosis</li>
            <li>AI Shell</li>
            <li>Micro Agent</li>
            <li>GPT Crawler</li>
            <li>Qwik</li>
            <li>Partytown</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Solutions</h4>
          <ul>
            <li>Headless Commerce</li>
            <li>Marketing Sites</li>
            <li>Landing Pages</li>
            <li>Mobile Apps</li>
            <li>Multi-brand</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Popular Guides</h4>
          <ul>
            <li>Figma to Code Guide</li>
            <li>Composable Commerce Guide</li>
            <li>Headless CMS Guide</li>
            <li>Headless Commerce Guide</li>
            <li>Composable DXP Guide</li>
            <li>Design to Code</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Knowledge Base</li>
            <li>Community Forum</li>
            <li>Partners</li>
            <li>Templates</li>
            <li>Success Stories</li>
            <li>Showcase</li>
            <li>Resource Center</li>
            <li>Glossary</li>
            <li>Page Builder</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="heading">Frameworks</h4>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Qwik</li>
            <li>Gatsby</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>Svelte</li>
            <li>Remix</li>
            <li>Nuxt</li>
            <li>Astro</li>
            <li>See All</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Builder.io, Inc.</p>
        <ul className="footer-links">
          <li>Security</li>
          <li>Privacy Policy</li>
          <li>SaaS Terms</li>
          <li>Security & Compliance</li>
          <li>Cookie Preferences</li>
        </ul>
        <div className="social-icons">
          <i className="youtube-icon">🎥</i>
          <i className="github-icon">🐙</i>
          <i className="blsky-icon">🌐</i>
          <i className="twitter-icon">X</i>
          <i className="linkedin-icon">🔗</i>
          <i className="feed-icon">📢</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
