import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./public.css";

const LandingHeader = () => {
  const [menuVisbile, setMenuVisible] = useState(false);

  return (
    <nav className="flex justify-between items-center min-h-56 p-3 mb-8">
      <div className="landingFont font-bold text-2xl">
        <Link to="/" className="hover:text-current">
          HackKit
        </Link>
      </div>
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
  );
};

export default LandingHeader;
