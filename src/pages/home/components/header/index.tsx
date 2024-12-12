import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "../../../../assets/images/logo.png";

interface MenuItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<MenuItem[]>([]);
  const [hiddenItems, setHiddenItems] = useState<MenuItem[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = useMemo(
    () => [
      { name: "Services", path: "/" },
      { name: "Quotes", path: "/about" },
      { name: "Our Sponsored", path: "/services" },
      { name: "A step to better tomorrow", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "About Us", path: "/products" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const updateVisibleItems = (): void => {
      if (headerRef.current) {
        const headerWidth = headerRef.current.offsetWidth;
        const logoWidth = 100; // Adjust this value based on your logo's width
        const toggleWidth = 50; // Adjust this value based on your toggle button's width
        const itemWidth = 100; // Approximate width of each nav item

        const availableWidth = headerWidth - logoWidth - toggleWidth;
        const visibleCount = Math.floor(availableWidth / itemWidth);

        // console.log("====================================");
        // console.log(
        //   "headerWidth",
        //   menuItems.slice(0, visibleCount).length,
        //   menuItems.slice(visibleCount).length,
        //   visibleCount
        // );
        // console.log("====================================");
        setVisibleItems(menuItems.slice(0, visibleCount));
        setHiddenItems(menuItems.slice(visibleCount));
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, [menuItems]);

  useEffect(() => {
    // console.log("====================================");
    // console.log("visibleItems", visibleItems);
    // console.log("====================================");
    if (visibleItems.length === menuItems.length) {
      // setHiddenItems(menuItems);
      setIsMenuOpen(false);
    }
  }, [visibleItems, hiddenItems, menuItems.length]);

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="nav-menu">
          {visibleItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
        </div>
        <div className={`nav-side ${isMenuOpen ? "active" : ""}`}>
          {hiddenItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export { Header };
