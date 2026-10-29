
import { Link } from "react-router-dom";
import courses from "../data/courses.js";

const Training = () => {
  return (
    <section
      id="training"
      className="w-full bg-[#edf2f8] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-5 bg-orange-600" />

              <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-600">
                Training Programs
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Professional, lab-oriented courses
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
              Sample titles below are editable placeholders only.
              Do not treat these as confirmed BSNL offerings
              until verified.
            </p>
          </div>

          <Link
            to="/training"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-md border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-navy-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 sm:self-auto"
          >
            All Programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.id}
              className="flex min-h-75 flex-col rounded-lg border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Badge and Learning Mode */}
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="rounded-sm border border-orange-200 bg-orange-200/25 px-2.5 py-1.5 text-[9px] font-bold tracking-wide text-orange-600">
                  {course.tag}
                </span>

                <span className="flex shrink-0 items-center gap-1 pt-1 text-[10px] text-slate-500">
                  <span aria-hidden="true">◷</span>
                  Lab-oriented
                </span>
              </div>

              {/* Course Title */}
              <h3 className="mb-3 text-base font-bold leading-6 text-navy-900">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-xs leading-6 text-slate-500">
                {course.description}
              </p>

              {/* Course Details */}
              <div className="mt-auto border-t border-slate-200 pt-4">
                <p className="mb-3 flex items-start gap-2 text-xs leading-5 text-slate-600">
                  <span className="text-navy-900" aria-hidden="true">
                    <i className="ri-calendar-2-line"></i>
                  </span>

                  <span>
                    <span className="font-medium text-navy-900">
                      Duration:
                    </span>{" "}
                    {course.duration}
                  </span>
                </p>

                <p className="mb-4 flex items-start gap-2 text-xs leading-5 text-slate-600">
                  <span className="text-navy-900" aria-hidden="true">
                    <i className="ri-user-follow-line"></i>
                  </span>

                  <span>
                    <span className="font-medium text-navy-900">
                      Eligibility:
                    </span>{" "}
                    {course.eligibility}
                  </span>
                </p>

                <Link
                  to="/training"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 transition hover:text-orange-600"
                >
                  View Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-5 flex items-start gap-3 rounded-md border border-orange-200 bg-[#fff7ed] px-4 py-3">
          <span
            className="mt-0.5 text-sm text-orange-600"
            aria-hidden="true"
          >
            ⓘ
          </span>

          <p className="text-xs leading-5 text-slate-600">
            <span className="font-semibold text-navy-900">
              Disclaimer:
            </span>{" "}
            Course titles, duration and eligibility are placeholders.
            The final catalogue must be verified against official BSNL
            information.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Training;
