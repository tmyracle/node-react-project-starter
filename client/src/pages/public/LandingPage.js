import React from "react";
import { Button } from "antd";
import "./public.css";
import LandingHeader from "./LandingHeader";

const LandingPage = () => {
  return (
    <div className="bg-white w-screen h-screen sm:px-16 sm:py-4 px-4 py-2">
      <LandingHeader />
      <div className="landingBody">
        <div className="landingHero mb-4">
          <div className="heroText landingFont text-center mx-auto mb-4">
            Happy hacking starter kit
          </div>
          <div className="landing-hero-cta mx-auto text-center mb-2">
            <Button
              className="bg-green-500 text-white hover:bg-green-600 hover:text-white border-0"
              size="large"
              shape="round"
            >
              Get started
            </Button>
          </div>
          <div className="landing-hero-subtext mx-auto text-center text-xl mt-4">
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
          <Button
            className="bg-green-500 hover:bg-green-600 text-white hover:text-white border-0"
            size="large"
          >
            Here's CTA for Features page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
