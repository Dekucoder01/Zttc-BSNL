
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-fit w-full bg-navy-900 text-white">
            <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16 lg:py-14">

                {/* Institute Badge */}
                <div className="flex w-fit max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/30 bg-white/5 py-1 pl-1 pr-3">
                    <span className="shrink-0 rounded-xl bg-orange-500 px-3 py-1.5 text-[10px] font-semibold sm:text-xs">
                        GOVT. INSTITUTE
                    </span>

                    <p className="text-xs leading-relaxed sm:text-sm">
                        Zonal Telecom Training Centre, Guwahati
                    </p>
                </div>

                {/* Hero Content */}
                <div className="mt-8 flex flex-col gap-10 md:mt-6 md:flex-row md:items-center md:gap-8 lg:gap-12">

                    {/* Left Content */}
                    <div className="w-full min-w-0 md:w-1/2">

                        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Advancing Telecom
                            <br />
                            <span className="text-orange-500">
                                Skills Through
                            </span>
                            <br />
                            Practical Training
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
                            ZTTC Guwahati builds job-ready telecom competence
                            through lab-oriented instruction in switching,
                            transmission, optical fibre, IP networking and mobile
                            systems — serving BSNL circles across the North-East.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                            <Link
                                to="/training"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3.5 text-sm font-semibold transition duration-300 hover:bg-orange-600 sm:w-fit"
                            >
                                Explore Training Programs
                                <i className="ri-arrow-right-line text-lg" />
                            </Link>

                            <Link
                                to="/notices"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3.5 text-sm font-semibold transition duration-300 hover:border-orange-400 hover:bg-white/5 sm:w-fit"
                            >
                                <i className="ri-notification-3-line text-lg" />
                                View Latest Notices
                            </Link>

                        </div>

                        {/* Divider */}
                        <hr className="mt-9 border-white/20 sm:mt-10" />

                        {/* Statistics */}
                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">

                            <div className="sm:border-r sm:border-white/20 sm:pr-3">
                                <h2 className="text-2xl font-semibold sm:text-xl lg:text-2xl">
                                    Lab-first
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">
                                    Practical pedagogy
                                </p>
                            </div>

                            <div className="sm:border-r sm:border-white/20 sm:pr-3">
                                <h2 className="text-2xl font-semibold sm:text-xl lg:text-2xl">
                                    NE Circles
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">
                                    Zonal coverage
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold sm:text-xl lg:text-2xl">
                                    Govt. Certified
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">
                                    BSNL curriculum
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full min-w-0 md:w-1/2">

                        {/* Image Wrapper */}
                        <div className="relative mx-auto w-full max-w-xl">

                            <img
                                src="/img.jpg"
                                alt="Telecom training laboratory"
                                className="block aspect-4/3 w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
                            />

                            {/* Live OFC Splicing Card */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-gray-900 shadow-xl transition duration-300 hover:-translate-y-1 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:gap-4 sm:p-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white sm:h-14 sm:w-14">
                                    <i className="ri-line-chart-line text-2xl sm:text-3xl" />
                                </div>

                                <div className="min-w-0">
                                    <h2 className="text-sm font-bold leading-snug sm:text-base">
                                        Live OFC Splicing Bench
                                    </h2>

                                    <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                                        OTDR
                                        <span className="px-1 text-orange-500">•</span>
                                        Power Meter
                                        <span className="px-1 text-orange-500">•</span>
                                        OTDR Trace Lab
                                    </p>
                                </div>
                            </div>

                            {/* Practical Sessions Status */}
                            <div className="absolute right-2 top-2 flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-xl border border-gray-200 bg-white/95 px-2.5 py-2 text-gray-800 shadow-lg sm:right-4 sm:top-4 sm:px-4">

                                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />

                                <p className="text-[10px] font-medium sm:text-sm">
                                    Practical sessions in progress
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
