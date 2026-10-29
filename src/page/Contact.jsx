import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only: no enquiry is sent to BSNL.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-300 overflow-hidden rounded-3xl border border-slate-200 bg-white">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Contact Information */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

            {/* Section Label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.75 w-7 rounded-full bg-orange-600" />

              <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                Contact Us
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Reach the training centre
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Contact information shown below is placeholder content.
              Replace it with verified BSNL contact details before launch.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">

              {/* Address */}
              <div
                id="contact-address"
                className="flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <i className="ri-map-pin-line text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-semibold text-navy-900">
                    Address [Placeholder]
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    ZTTC, BSNL, Guwahati, Assam — full postal address to be added
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <i className="ri-phone-line text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-semibold text-navy-900">
                    +91-XXX-XXXX [Placeholder]
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Mon – Fri, 9:00 AM – 5:30 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <i className="ri-mail-line text-xl" aria-hidden="true" />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="wrap-break-word text-sm font-semibold text-navy-900">
                    [Official Email Placeholder]
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    For training enquiries only
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Open Enquiry Form
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>

              <button
                type="button"
                disabled
                title="Add a verified map link before publishing"
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-500"
              >
                <i className="ri-map-2-line" aria-hidden="true" />
                Get Directions
              </button>

            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div
            id="enquiry-form"
            className="scroll-mt-24 border-t border-slate-200 bg-[#f0f5fa] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
          >
            <h3 className="mb-4 text-sm font-semibold text-navy-900">
              Send an enquiry [Demo form — not functional]
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Name and Phone */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  aria-label="Full name"
                  required
                  className="min-w-0 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone number"
                  aria-label="Phone number"
                  required
                  className="min-w-0 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {/* Course Selection */}
              <select
                name="course"
                defaultValue=""
                aria-label="Select course of interest"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  I am interested in... [Select course]
                </option>
                <option value="ofc">Optical Fibre Communication</option>
                <option value="networking">IP Networking & Broadband</option>
                <option value="mobile">Mobile Communication</option>
                <option value="transmission">Telecom Switching & Transmission</option>
                <option value="other">Other enquiry</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message..."
                aria-label="Your message"
                required
                rows={3}
                className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Enquiry
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-md border border-orange-200 bg-orange-50 p-3 text-xs leading-5 text-orange-800"
                >
                  This is a demo form. Your enquiry has not been sent.
                  Connect an approved backend or form service before launch.
                </p>
              )}

              <p className="flex items-start gap-2 text-[11px] leading-5 text-slate-500">
                <i className="ri-shield-check-line mt-0.5 shrink-0" aria-hidden="true" />
                Form validation is enabled. Connect a verified submission
                service before accepting real enquiries.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
