
const notices = [
  {
    id: 1,
    category: "Schedule",
    title: "[Sample] Training calendar for upcoming batch — awaiting official confirmation",
    date: "DD MMM YYYY",
  },
  {
    id: 2,
    category: "General",
    title: "[Sample] Notice regarding classroom & lab usage guidelines — draft for approval",
    date: "DD MMM YYYY",
  },
  {
    id: 3,
    category: "Admission",
    title: "[Sample] List of documents required for enrolment verification — placeholder",
    date: "DD MMM YYYY",
  },
  {
    id: 4,
    category: "Download",
    title: "[Sample] Download: Trainee feedback & declaration forms — placeholder PDFs",
    date: "DD MMM YYYY",
  },
];

const downloads = [
  { id: 1, title: "Application form [PDF*]", file: "/documents/application-form.pdf" },
  { id: 2, title: "Eligibility note [PDF*]", file: "/documents/eligibility-note.pdf" },
  { id: 3, title: "Fee & refund rules [PDF*]", file: "/documents/fee-refund-rules.pdf" },
];

const Notices = () => {
  return (
    <section
      id="notices"
      className="w-full border-y border-slate-200 bg-[#f1f6fc] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-360">

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.95fr)] lg:gap-6">

          {/* Left: Notice Board */}
          <div className="min-w-0">

            {/* Section Heading */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-0.5 w-6 bg-orange-600" />

                <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-600">
                  Notices & Announcements
                </p>
              </div>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
                Official notice board
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                Notices and downloadable documents in one place.
                Search and filter on the full Notices page.
              </p>
            </div>

            {/* Notice Board Container */}
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">

              {/* Board Header */}
              <div className="flex flex-col gap-2 border-b border-slate-200 bg-[#edf3fa] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                  <i className="ri-pushpin-2-line text-sm" />
                  Notice Board
                </h3>

                <p className="text-[10px] leading-4 text-slate-500">
                  All entries are placeholders — to be replaced with official notices
                </p>
              </div>

              {/* Notice List */}
              <div>
                {notices.map((notice) => (
                  <article
                    key={notice.id}
                    className="flex flex-col gap-3 border-b border-slate-200 px-3 py-3 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-3 sm:px-4"
                  >
                    {/* Date */}
                    <div className="flex h-10 w-9 shrink-0 flex-col items-center justify-center rounded-md border border-slate-200 bg-white text-center">
                      <span className="text-[10px] font-semibold text-orange-600">
                        DD
                      </span>
                      <span className="text-[9px] text-slate-500">
                        MMM
                      </span>
                    </div>

                    {/* Notice Information */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-medium leading-5 text-navy-900 sm:text-[13px]">
                        {notice.title}
                      </h4>

                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-500">
                        <span className="rounded-sm bg-blue-50 px-1.5 py-0.5 text-blue-800">
                          {notice.category}
                        </span>

                        <span className="flex items-center gap-1">
                          <i className="ri-calendar-line" />
                          {notice.date}
                        </span>

                        <span className="flex items-center gap-1">
                          <i className="ri-file-pdf-2-line" />
                          PDF
                        </span>
                      </div>
                    </div>

                    {/* View Button */}
                    <button
                      type="button"
                      disabled
                      title="Awaiting official notice PDF"
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-md border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium text-slate-500 sm:self-center"
                    >
                      <i className="ri-download-2-line" />
                      View
                    </button>
                  </article>
                ))}
              </div>

              {/* Board Footer */}
              <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] text-slate-500">
                  Showing 4 sample entries
                </p>

                <a
                  href="#notices"
                  className="inline-flex items-center gap-1 self-start text-[11px] font-semibold text-blue-700 transition hover:text-orange-600 sm:self-auto"
                >
                  View All Notices
                  <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Helpdesk and Downloads */}
          <aside className="flex min-w-0 flex-col gap-3 lg:pt-0">

            {/* Admission Helpdesk */}
            <div className="rounded-xl bg-navy-900 p-5 text-white shadow-sm sm:p-6">
              <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold text-blue-200">
                <i className="ri-calendar-check-line text-sm" />
                Admission Helpdesk [Placeholder]
              </p>

              <h3 className="text-lg font-bold leading-snug">
                Planning to join a batch?
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-200">
                Contact the training office for batch dates, seats and
                document requirements. Details to be confirmed officially.
              </p>

              <a
                href="#contact"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-navy-900 transition hover:bg-slate-100"
              >
                <i className="ri-phone-line" />
                Contact Training Office
              </a>

              <a
                href="#contact"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Enquiry Form
              </a>
            </div>

            {/* Quick Downloads */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-bold text-navy-900">
                <i className="ri-file-download-line text-sm" />
                Quick Downloads
              </h3>

              <div className="flex flex-col gap-2">
                {downloads.map((item) => (
                  <a
                    key={item.id}
                    href={item.file}
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                    title="Replace with the official PDF file before publishing"
                    className="flex items-center justify-between gap-3 rounded-md border border-slate-200 px-3 py-2.5 text-xs text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span>{item.title}</span>
                    <i className="ri-download-2-line shrink-0 text-sm text-navy-900" />
                  </a>
                ))}
              </div>

              <p className="mt-3 text-[10px] leading-4 text-slate-500">
                *Placeholder links. Upload official PDFs before publishing.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Notices;
