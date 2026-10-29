import { Link } from "react-router-dom";
import AboutCentre from "./AboutCentre";

const services = [
    {
        icon: "ri-graduation-cap-line",
        title: "Training Programs",
        description: "Courses & eligibility",
        path: "/training",
    },
    {
        icon: "ri-megaphone-line",
        title: "Latest Notices",
        description: "Announcements",
        path: "/notices",
    },
    {
        icon: "ri-file-download-line",
        title: "Downloads",
        description: "Forms & PDFs",
        path: "/notices",
    },
    {
        icon: "ri-building-2-line",
        title: "Training Facilities",
        description: "Labs & infra",
        path: "/facilities",
    },
    {
        icon: "ri-image-line",
        title: "Photo Gallery",
        description: "Campus & labs",
        path: "/gallery",
    },
    {
        icon: "ri-customer-service-2-line",
        title: "Contact Information",
        description: "Reach the centre",
        path: "/contact",
    },
];

const Servis = () => {
    return (
        <div className="min-h-screen lg:pt-5">
            <div className="mx-auto  border-x-2 border-sky-500 bg-white px-4 py-6 sm:px-7 md:px-10 lg:px-12">
                {/* Quick Access Heading */}
                <div className="mb-4 flex items-end justify-between gap-3">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-orange-600">
                            <span className="h-px w-5 bg-orange-500" />
                            QUICK ACCESS
                        </div>

                        <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                            Find what you need, quickly
                        </h2>
                    </div>

                    <p className="hidden text-[10px] text-slate-500 sm:block">
                        Six most-used services for trainees & visitors
                    </p>
                </div>

                {/* Quick Access Cards */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            to={service.path}
                            className="group flex min-w-0 flex-col border border-gray-300 rounded-2xl bg-white p-3 transition duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md sm:p-3.5"
                        >
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                                <i className={`${service.icon} text-base`} />
                            </div>

                            <h3 className="text-xs font-bold leading-snug text-slate-900 sm:text-[13px]">
                                {service.title}
                            </h3>

                            <p className="mt-1 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
                                {service.description}
                            </p>

                            <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-blue-700">
                                Open
                                <i className="ri-arrow-right-line transition group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <AboutCentre/>
        </div>
    )
}

export default Servis
