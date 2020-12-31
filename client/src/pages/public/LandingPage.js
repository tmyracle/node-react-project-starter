import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
//import { useAuth } from "../lib/authHandler";

const LandingPage = () => {
  return (
    <div className="landing-container" style={styles.landingContainer}>
      <nav className="landing-nav">
        <div className="landing-link-container">
          <div className="landing-nav-link">Features</div>
          <div className="landing-nav-link">Pricing</div>
          <div className="landing-nav-link">About</div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
      <div className="landing-body-container">
        <div className="landing-hero-container mb-4">
          <div
            className="text-center mx-auto mb-4"
            style={styles.landingHeroText}
          >
            Happy hacking starter kit
          </div>
          <div className="landing-hero-cta mx-auto text-center mb-2">
            <Button type="primary" size="large" shape="round">
              Get started
            </Button>
          </div>
          <div className="landing-hero-subtext mx-auto text-center text-xl">
            Try it free for 14 days! No credit card required.
          </div>
        </div>
        <div className="landing-product-shot mx-auto text-center mb-4">
          Replace this with a screenshot or GIF of the product.
        </div>
        <div className="landing-value-prop mx-auto text-center mb-4 text-lg font-medium">
          Everything you need to start building a real app!
        </div>
        <div className="landing-feature-matrix mx-auto max-w-xl mb-4 grid grid-cols-2 gap-4 text-center">
          <div className="landing-feature-highlight p-4">Authentication</div>
          <div className="landing-feature-highlight p-4">User Model</div>
          <div className="landing-feature-highlight p-4">Database Included</div>
          <div className="landing-feature-highlight p-4">Payments</div>
          <div className="landing-feature-highlight p-4">
            Easy Configuration
          </div>
          <div className="landing-feature-highlight p-4">Containerized</div>
        </div>
        <div className="landing-cta-break mx-auto text-center">
          <Button type="primary" size="large">
            Here's CTA for Features page
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  landingContainer: {
    padding: "4rem",
    backgroundColor: "white",
  },
  landingHeroText: {
    fontFamily: "Noto Sans JP",
    fontSize: "4rem",
    fontWeight: "bold",
  },
};

export default LandingPage;
