import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./public.css";

const LandingPage = () => {
  const [menuVisbile, setMenuVisible] = useState(false);

  return (
    <div className="bg-white w-screen h-screen sm:px-16 sm:py-4 px-4 py-2">
      <nav className="flex justify-between items-center min-h-56 p-3 mb-8">
        <div className="landingFont font-bold text-2xl">HackKit</div>
        <nav>
          <ul className="sm:flex hidden items-center m-0 p-0 list-none landingFont">
            <li className="navItem">
              <Link to="/features" className="hover:text-indigo-500">
                Features
              </Link>
            </li>
            <li className="navItem">
              <Link to="/features" className="hover:text-indigo-500">
                Use cases
              </Link>
            </li>
            <li className="navItem">
              <Link to="/pricing" className="hover:text-indigo-500">
                Pricing
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="hover:text-indigo-500">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <div className="sm:block hidden ctaButton bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white border-indigo-600">
            <Link className="hover:text-white" to="/login">
              Login
            </Link>
          </div>
          <div className="sm:hidden block relative">
            <Button
              className="bg-indigo-500 focus:bg-indigo-600 hover:bg-indigo-600 ctaButton border-none text-white focus:text-white hover:text-white"
              to="/login"
              onClick={() => setMenuVisible(menuVisbile ? false : true)}
            >
              Menu
            </Button>
            {menuVisbile ? (
              <div className="navMenu flex-col absolute top-3 mt-1 right-0 bg-white border border-gray-300 rounded-lg shadow w-40">
                <ul className="items-center text-center m-0 p-0 list-none landingFont">
                  <li className="navItem">
                    <Link to="/features" className="hover:text-indigo-500">
                      Features
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/features" className="hover:text-indigo-500">
                      Use cases
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/pricing" className="hover:text-indigo-500">
                      Pricing
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/about" className="hover:text-indigo-500">
                      About
                    </Link>
                  </li>
                  <hr />
                  <li className="navItem">
                    <Link to="/login" className="hover:text-indigo-500">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </nav>
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
