
const facilities = [
  {
    id: 1,
    title: "Transmission Lab",
    description: "SDH / DWDM demo racks",
    image: "/transmission-lab.jpg",
    alt: "Telecommunications transmission equipment",
  },
  {
    id: 2,
    title: "OFC Splicing Lab",
    description: "Fusion splicers & OTDR",
    image: "/ofc-splicing.jpg",
    alt: "Optical fibre cable practical training",
  },
  {
    id: 3,
    title: "IP & Networking Lab",
    description: "Routers, switches, FTTH",
    image: "/networking-lab.jpg",
    alt: "Students working on networking equipment",
  },
  {
    id: 4,
    title: "Classrooms",
    description: "Theory & assessment halls",
    image: "/classroom.jpg",
    alt: "Technical training classroom",
  },
];

const Facilities = () => {
  return (
    <section
      id="facilities"
      className="w-full bg-white py-12 sm:py-14"
    >
      <div className="mx-auto w-full max-w-300 px-5 sm:px-8 lg:px-1">

        {/* Section Heading */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-0.5 w-5 bg-orange-600" />

            <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-600">
              Training Facilities
            </p>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
            Built for hands-on learning
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
            Facilities listed are indicative. Display only verified
            infrastructure or approved photographs.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <article
              key={facility.id}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-100 sm:h-36 lg:h-40">
                <img
                  src={facility.image}
                  alt={facility.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-3">
                <h3 className="text-lg font-semibold text-navy-900">
                  {facility.title}
                </h3>

                <p className="mt-1 text-[15px] leading-4 text-slate-500">
                  {facility.description}
                </p>

                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-1 text-[16px] font-medium text-blue-700 transition-colors hover:text-orange-600"
                >
                  Explore
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
