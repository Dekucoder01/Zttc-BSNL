
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "OFC Splicing Training",
    image: "/ofc-splicing.jpg",
    alt: "Optical fibre splicing training",
  },
  {
    id: 2,
    title: "Telecom Tower Maintenance",
    image: "/telecom-tower.jpg",
    alt: "Telecom tower maintenance",
  },
  {
    id: 3,
    title: "Training Laboratory",
    image: "/training-classroom.jpg",
    alt: "Technical training laboratory",
  },
  {
    id: 4,
    title: "ZTTC Campus",
    image: "/campus.jpg",
    alt: "Training centre campus",
  },
  {
    id: 5,
    title: "Networking Laboratory",
    image: "/training-classroom.jpg",
    alt: "Networking laboratory",
  },
  {
    id: 6,
    title: "Classroom Session",
    image: "/training-classroom.jpg",
    alt: "Classroom training session",
  },
  {
    id: 7,
    title: "Telecom Equipment",
    image: "/training-classroom.jpg",
    alt: "Telecommunications equipment",
  },
  {
    id: 8,
    title: "Practical Training",
    image: "/training-classroom.jpg",
    alt: "Technical practical training",
  },
];

const Gallery = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section
      id="gallery"
      className="w-full bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-300">

        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-7 bg-orange-600" />

              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Photo Gallery
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
              Inside ZTTC Guwahati
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore photographs of training, laboratories and campus activities.
            </p>
          </div>

          {/* Open Gallery Button */}
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="inline-flex w-fit rounded-2xl shrink-0 items-center justify-center gap-2 border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-800 transition hover:border-blue-700 hover:bg-blue-50"
          >
            Open Gallery
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Homepage: Show ONLY 4 Images */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.slice(0, 4).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setGalleryOpen(true)}
              aria-label={`Open gallery: ${item.title}`}
              className="group relative h-55 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left sm:h-50 lg:h-51.25"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0b1b3d]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute bottom-3 left-3 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* All Images Modal */}
        {galleryOpen && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#061329]/80 p-4 backdrop-blur-sm"
            onClick={() => setGalleryOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-modal-title"
              className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-5 sm:p-7"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    Photo Gallery
                  </p>

                  <h3
                    id="gallery-modal-title"
                    className="mt-1 text-xl font-bold text-navy-900 sm:text-2xl"
                  >
                    Inside ZTTC Guwahati
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {galleryImages.length} photographs
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setGalleryOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-xl text-slate-700 transition hover:bg-slate-100"
                  aria-label="Close gallery"
                >
                  <i className="ri-close-line" />
                </button>
              </div>

              {/* Modal: Show ALL Images */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((item) => (
                  <figure
                    key={item.id}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <figcaption className="px-3 py-3 text-sm font-medium text-navy-900">
                      {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
