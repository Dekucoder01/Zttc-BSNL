
import React from "react";
import { Link } from "react-router-dom";

const AboutCentre = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-8">
      <div className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Image Collage */}
          <div className="grid h-80 grid-cols-2 grid-rows-2 gap-3 sm:h-95 lg:h-105">

            {/* Main Image */}
            <div className="group relative row-span-2 overflow-hidden rounded-xl bg-slate-200">
              <img
                src="/img.jpg"
                alt="Telecom trainees attending practical training"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0b1b3d]/30 via-transparent to-transparent" />
            </div>

            {/* Secondary Image */}
            <div className="group overflow-hidden rounded-xl bg-slate-200">
              <img
                src="/img.jpg"
                alt="Telecom laboratory practical work"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Experience Card */}
            <div className="flex flex-col justify-center rounded-xl bg-navy-900 p-4 text-white sm:p-5 lg:p-6">
              <span className="mb-3 h-0.75 w-9 rounded-full bg-orange-500" />

              <h3 className="text-lg font-bold sm:text-xl">
                Since [Year]
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                Supporting telecom skill development in the region.
              </p>

              <span className="mt-3 text-[10px] font-medium uppercase tracking-wider text-orange-300">
                Training & Technology
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="min-w-0">

            {/* Section Label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-0.5 w-5 bg-orange-600" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-xs">
                About the Centre
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl lg:text-4xl">
              A dedicated telecom training institute for the North-East
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              ZTTC Guwahati provides a platform for technical learning and
              practical skill development. Discover the centre's objectives,
              training approach and learning facilities.
            </p>

            {/* Feature Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition duration-200 hover:border-blue-200 hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <i className="ri-focus-3-line text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-navy-900">
                    Objective-driven
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Focused learning objectives
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition duration-200 hover:border-blue-200 hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <i className="ri-flask-line text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-navy-900">
                    Practical-focused
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Practical learning approach
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Learn More About Us
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>

              <Link
                to="/notices"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Download Brochure
                <i className="ri-download-2-line" aria-hidden="true" />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCentre;
