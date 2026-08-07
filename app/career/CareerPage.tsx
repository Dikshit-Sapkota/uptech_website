import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Heart,
  MapPin,
  CalendarSearch,
  TimerIcon,
} from "lucide-react";

type Job = {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  time: string;
  working_days: string;
};

export default async function CareerPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/career?_fields=acf.career`,
    {
      next: {
        revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
      },
    }
  );

  const resjobs = await res.json();

  const career = resjobs[0]?.acf?.career;

  // Always make sure jobs is an array
  const jobs: Job[] = career?.jobs ?? [];

  return (
    <main className="bg-white text-slate-900">

      {/* ================================
          OPEN POSITIONS
      ================================= */}

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                {career?.short_heading}
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
                {career?.heading}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {career?.description}
              </p>

            </div>

            <span className="text-sm font-medium text-slate-500">
              {jobs.length === 0
                ? "No positions available"
                : `${jobs.length} ${
                    jobs.length === 1 ? "position" : "positions"
                  } available`}
            </span>

          </div>


          {/* ================================
              JOBS
          ================================= */}

          {jobs.length === 0 ? (

            <div className="mt-12 flex  items-center justify-center gap-4 rounded-2xl border border-gray-200 shadow    bg-gray-100 p-6 text-center  sm:p-8">

              <Heart
                size={48}
                className="text-amber-500"
              />

              <h3 className="text-md! text-slate-950 sm:text-2xl">
               Job will be openning soon stay tune....
              </h3>

              {/* 
              <p className="mt-3 text-lg leading-7 text-slate-600">
                We currently have no open positions. Please check back later
                or send us your CV.
              </p>

              <a
                href="mailto:info@uptechsolution.com.np"
                className="mt-4 inline-block rounded-md bg-amber-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-amber-600"
              >
                Send us your CV
              </a> */}

            </div>

          ) : (

            <div className="mt-12 space-y-5">

              {jobs.map((job, index) => (

                <article
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-amber-300 hover:shadow-lg sm:p-8"
                >

                  <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                    {/* Job information */}
                    <div className="max-w-3xl">

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                          {job.title}
                        </h3>

                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                          {job.type}
                        </span>

                      </div>


                      <p className="mt-3 text-lg leading-7 text-slate-600">
                        {job.description}
                      </p>


                      {/* Job Meta */}
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">

                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-2">
                          <Clock3 size={16} />
                          {job.experience}
                        </span>

                        <span className="flex items-center gap-2">
                          <BriefcaseBusiness size={16} />
                          {job.type}
                        </span>

                        <span className="flex items-center gap-2">
                          <CalendarSearch size={16} />
                          {job.working_days}
                        </span>

                        <span className="flex items-center gap-2">
                          <TimerIcon size={16} />
                          {job.time}
                        </span>

                      </div>

                    </div>


                    {/* Apply Button */}
                    <a
                      href="mailto:info@uptechsolution.com.np"
                      className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-amber-500 hover:text-slate-950 sm:w-fit"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </a>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>
      </section>


      {/* ================================
          GENERAL APPLICATION
      ================================= */}

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center sm:px-12 lg:px-20">

            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />


            <div className="relative">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Don't See Your Role?
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white! sm:text-4xl lg:text-5xl">
                We'd still love to hear from you.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300! sm:text-lg">
                If you believe you can bring something valuable to our team,
                send us your CV. We're always interested in meeting talented
                people.
              </p>

              <a
                href="mailto:info@uptechsolution.com.np"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 font-semibold text-slate-950 transition-colors duration-300 hover:bg-amber-400"
              >
                Send Your CV
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}