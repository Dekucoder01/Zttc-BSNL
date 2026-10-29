
const Footer = () => {
    const quickLinks = [
        { name: "Home", href: "/#home" },
        { name: "About Us", href: "/#about" },
        { name: "Training Programs", href: "/#training" },
        { name: "Facilities", href: "/#facilities" },
        { name: "Gallery", href: "/#gallery" },
    ];

    const downloads = [
        "Training application form [Placeholder]",
        "Course eligibility guide [Placeholder]",
        "Lab safety guidelines [Placeholder]",
        "Notices archive",
    ];

    return (
        <footer
            id="footer"
            className="w-full border-t border-white/10 bg-[#06152b] text-slate-300"
        >
            {/* Main Footer */}
            <div className="mx-auto w-full max-w-350 px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* Column 1: Branding */}
                    <div>
                        <a
                            href="/#home"
                            className="mb-4 inline-flex items-center gap-3"
                        >
                            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 text-center leading-tight">
                                <span className="text-xs font-extrabold text-white">
                                    BSNL
                                </span>
                                <span className="text-[8px] tracking-wider text-slate-300">
                                    ZTTC
                                </span>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    ZTTC Guwahati
                                </h3>
                                <p className="mt-1 text-xs text-slate-400">
                                    BSNL • Govt. of India
                                </p>
                            </div>
                        </a>

                        <p className="max-w-xs text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                            [Placeholder] Official profile of the Zonal Telecom Training
                            Centre, Guwahati. Content to be verified and approved by
                            BSNL authorities.
                        </p>

                        {/* Social / Quick Contact Icons */}
                        <div className="mt-4 flex items-center gap-2">
                            <a
                                href="/#home"
                                aria-label="Website home"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-base text-white transition hover:bg-orange-600"
                            >
                                <i className="ri-global-line" />
                            </a>

                            <a
                                href="mailto:[official-email]"
                                aria-label="Email contact"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-base text-white transition hover:bg-orange-600"
                            >
                                <i className="ri-mail-line" />
                            </a>

                            <a
                                href="tel:[official-phone]"
                                aria-label="Phone contact"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-base text-white transition hover:bg-orange-600"
                            >
                                <i className="ri-phone-line" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xs transition-colors hover:text-orange-400 sm:text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Downloads */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
                            Important Downloads
                        </h3>

                        <ul className="space-y-2.5">
                            {downloads.map((item) => (
                                <li key={item}>
                                    <a
                                        href="/#notices"
                                        className="text-xs leading-5 transition-colors hover:text-orange-400 sm:text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-white">
                            Contact [Placeholder]
                        </h3>

                        <div className="space-y-3 text-xs leading-5 sm:text-sm">

                            <div className="flex items-start gap-2">
                                <i className="ri-map-pin-line mt-0.5 shrink-0 text-base text-slate-400" />
                                <p>
                                    Address line to be provided by BSNL,
                                    Guwahati, Assam
                                </p>
                            </div>

                            <a
                                href="tel:[official-phone]"
                                className="flex items-center gap-2 transition-colors hover:text-orange-400"
                            >
                                <i className="ri-phone-line shrink-0 text-base text-slate-400" />
                                <span>+91-XXX-XXXXX</span>
                            </a>

                            <a
                                href="mailto:[official-email]"
                                className="flex items-center gap-2 break-all transition-colors hover:text-orange-400"
                            >
                                <i className="ri-mail-line shrink-0 text-base text-slate-400" />
                                <span>[Official email address]</span>
                            </a>

                            <div className="flex items-center gap-2">
                                <i className="ri-time-line shrink-0 text-base text-slate-400" />
                                <span>Mon – Fri, 9:00 AM – 5:30 PM</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-350 flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

                    {/* Copyright */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] leading-5 text-slate-400 sm:text-xs">
                            © {new Date().getFullYear()} Zonal Telecom Training Centre,
                            Guwahati, BSNL. All rights reserved.
                        </p>

                        {/* Developer Credit */}
                        <p className="text-[11px] gap-2 text-slate-400 sm:text-xs">
                            Website designed & developed by{" "}
                            <a href="#" className="text-white text-sm">Ensan</a>
                           <span> click to go my profail </span>
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <a
                            href="#accessibility"
                            className="text-[11px] text-slate-400 transition hover:text-white sm:text-xs"
                        >
                            Accessibility
                        </a>

                        <a
                            href="#privacy-policy"
                            className="text-[11px] text-slate-400 transition hover:text-white sm:text-xs"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#terms"
                            className="text-[11px] text-slate-400 transition hover:text-white sm:text-xs"
                        >
                            Terms of Use
                        </a>

                        <a
                            href="/#home"
                            className="text-[11px] text-slate-400 transition hover:text-white sm:text-xs"
                        >
                            Sitemap
                        </a>
                    </div>

                </div>
            </div>


        </footer>
    );
};

export default Footer;
