
import React, { useEffect, useState } from "react";

const Nave = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Training Programs", id: "training" },
    { name: "Facilities", id: "facilities" },
    { name: "Notices & Downloads", id: "notices" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Automatically update the active link while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Top and main navbar share the same navigation behavior
  const handleNavClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  // Active link styling
  const getLinkClass = (id) =>
    `whitespace-nowrap border-b-2 py-2 text-sm font-semibold transition-colors duration-200 ${
      activeSection === id
        ? "border-orange-500 text-orange-600"
        : "border-transparent text-gray-700 hover:text-orange-600"
    }`;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-navy-900 px-4 py-2 text-xs text-white sm:px-6 sm:text-sm lg:px-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="tel:+916900130026"
            className="flex items-center gap-2 transition hover:text-orange-300"
          >
            <i className="ri-phone-line" />
            <span>+91-6900130026</span>
          </a>

          <a
            href="mailto:Zttc123@gmail.com"
            className="hidden items-center gap-2 transition hover:text-orange-300 sm:flex"
          >
            <i className="ri-mail-line" />
            <span>Zttc123@gmail.com</span>
          </a>

          <div className="hidden items-center gap-2 text-white/70 lg:flex">
            <i className="ri-time-line" />
            <span>Mon - Fri: 9:00 AM - 5:30 PM</span>
          </div>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded border border-white/40 px-2 py-1 transition hover:bg-white/10"
          aria-label="Select language"
        >
          <i className="ri-translate-2" />
          <span>English</span>
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-gray-900 shadow-sm">
        <div className="mx-auto flex w-full items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-10">

          {/* Logo and Branding */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <img
              src="/Zttc.png"
              alt="ZTTC logo"
              className="h-11 w-11 shrink-0 rounded-full object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />

            <div className="min-w-0">
              <h1 className="text-sm font-bold leading-tight tracking-wide sm:text-base lg:text-lg">
                Zonal Telecom Training Center
              </h1>

              <p className="mt-1 hidden text-xs text-gray-600 sm:block sm:text-sm">
                Guwahati - Bharat Sanchar Nigam Ltd. Govt. of India
              </p>

              <p className="mt-1 text-[10px] text-gray-600 sm:hidden">
                BSNL • Guwahati
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
                className={getLinkClass(link.id)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#training"
              onClick={() => handleNavClick("training")}
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Training
              <i className="ri-arrow-right-line" />
            </a>
          </div>

          {/* Mobile and Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 text-xl text-navy-900 transition hover:bg-gray-100 xl:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <i
              className={
                menuOpen ? "ri-close-line" : "ri-menu-line"
              }
            />
          </button>
        </div>

        {/* Mobile and Tablet Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto border-t border-white/10 bg-navy-900 px-4 py-3 sm:px-6 xl:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
                className={`rounded-md border-l-2 px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "border-orange-500 bg-white/10 text-orange-400"
                    : "border-transparent text-white/90 hover:bg-white/10 hover:text-orange-400"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#training"
              onClick={() => handleNavClick("training")}
              className="mt-2 rounded-md bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Training
              <i className="ri-arrow-right-line ml-2" />
            </a>
          </div>
        )}
      </nav>

      {/* Announcement Bar */}
      <div className="flex w-full items-start gap-2 bg-gray-100 px-4 py-3 text-navy-800 sm:items-center sm:px-6 lg:px-10">
        <i className="ri-bank-fill mt-0.5 shrink-0 text-lg" />

        <p className="text-xs leading-relaxed sm:text-sm">
          <span className="font-semibold">
            A BSNL Training Institute Serving North-East Telecom Circles
          </span>

          <span className="text-black/70">
            {" "}— Practical, lab-oriented skill development for telecom professionals.
          </span>
        </p>
      </div>
    </>
  );
};

export default Nave;
