import QuotationForm from "@/components/form/quotation";
import Navbar from "@/components/navbar";
import { Select } from "@/components/ui/input/select";
import { Input } from "@/components/ui/input/text";
import Image from "next/image";

const assurances = [
  {
    title: "On-Time Delivery",
    description: "Your shipment, our commitment, always on schedule.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-alarm-clock-check"
      >
        <circle cx="12" cy="13" r="8" />
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "We're here around the clock to ensure your logistics success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-headset"
      >
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
      </svg>
    ),
  },
  {
    title: "Live Tracking",
    description: "Stay informed with real-time updates on every move.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cable"
      >
        <path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z" />
        <path d="M3 5V3" />
        <path d="M7 5V3" />
        <path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9" />
        <path d="M17 21v-2" />
        <path d="M21 21v-2" />
        <path d="M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z" />
      </svg>
    ),
  },
];

export default function Home() {
 


  return (
    <>
      <div className="hidden lg:flex relative container mx-auto my-6  ">
        <div className="p-4 rounded-md bg-white border border-gray-200 shadow-md flex w-[472px]  flex-col">
          <h1 className="text-3xl font-medium mb-2">
            Start your project today!
          </h1>
          <QuotationForm />
        </div>

        <div className="min-h-[570px] absolute -z-10 right-0 -top-3 w-[calc(-544px+100vw)] h-[calc(-210px+100vh)] rounded-md ">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero.png"
              alt="hero"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              className=" object-cover object-center rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden">
        <div className="relative h-[300px] object-cover object-center">
          <Image src={"/assets/excavator.png"} alt="excavator"         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 fill />
        </div>

        <div className="-mt-[360px] relative">
          <div className="w-full flex items-end h-[300px] justify-center transform translate-y-4 "></div>
          <div className="m-3 ">
            <div className="p-4 rounded-md bg-white shadow-md flex  flex-col gap-1">
              <label>
                I need
                <Select placeholder="---Choose Truckload---" />
              </label>

              <label>
                Destination
                <Input type="text" placeholder="Delivery point" />
              </label>

              <label>
                Email
                <Input type="email" placeholder="Email address" />
              </label>

              <input
                type="submit"
                className=" h-12 bg-[#FF6B19] w-full rounded-md font-medium"
                value="Request estimate"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 space-y-6 pb-6 md:px-0">
        <section id="about" className="md:flex h-full gap-8 items-stretch bg-black rounded-xl md:px-10 mt-10 py-10 p-4">
          <div className="text-white flex-1">
            <h2 className="font-bold text-xl tracking-tight leading-tight mb-3 max-w-[20ch] md:text-3xl">
              UNMATCHED EXCELLENCE. REASONS TO CHOOSE US
            </h2>
            <p className="leading-relaxed max-w-[50ch]">
              At Mudi, we&apos;re not just a logistics provider, we&apos;re your
              strategic partner on the path to success. Here&apos;s why our
              clients trust us
            </p>
            <div className="flex flex-col gap-3 mt-8">
              {assurances.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/15 rounded-lg flex gap-3 items-center p-3"
                >
                  <div className="bg-white/10 p-3 rounded">{item.icon}</div>

                  <div className="flex flex-row md:flex-col flex-wrap">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm md:text-base font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full h-full  min-h-full">
              <Image
                src="/assets/tipper.png"
                alt="excavator"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                className="h-full  rounded-xl "
              />
            </div>
          </div>
        </section>

        <section id="solution" className="md:flex h-full gap-8 items-stretch pt-10 ">
          
          <div className=" flex-1 order-2">
            <h2 className="font-bold text-xl uppercase tracking-tight leading-tight md:text-3xl">
              Unveiling our journey{" "}
            </h2>
            <h2 className="font-bold text-xl uppercase tracking-tight leading-tight mb-3 md:text-3xl">
              THE MUDI STORY{" "}
            </h2>
            <p className="leading-tight">
              At Mudi Solutions, we don&apos;t just streamline logistics - we
              empower excellence in every step of your journey, setting a new
              standard in seamless transportation
            </p>
            <div className="md:grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col space-y-1.5 mb-4">
                <span className="uppercase text-sm">step 1</span>
                <h3 className="font-semibold text-xl uppercase tracking-tight leading-tight">
                  Let&apos;s get together.
                </h3>
                <p className="leading-tight">
                  Show us how you work so we can build and execute an effective
                  strategic plan.
                </p>
              </div>
              <div className="p-8 hidden md:block">
                <div className="relative h-full w-full min-h-full">
                  <Image
                    src="/assets/path20.svg"
                    alt="arrow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    className="top"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 mb-4">
                <span className="uppercase text-sm">step 2</span>
                <h3 className="font-semibold text-xl uppercase tracking-tight leading-tight">
                  Let&apos;s make a plan.
                </h3>
                <p className="leading-tight">
                  Break out of the day-to-day to gain perspective, define goals,
                  and design a way forward.
                </p>
              </div>
              <div className="p-12 hidden md:block">
                <div className="relative h-full w-full  min-h-full">
                  <Image src="/assets/path84.svg" alt="arrow"         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 fill />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 mb-4">
                <span className="uppercase text-sm">step 3</span>
                <h3 className="font-semibold text-xl uppercase tracking-tight leading-tight">
                  Let&apos;s go!
                </h3>
                <p className="leading-tight">
                  With an approved plan in hand, we work together to execute
                  goals and put a brighter future in sight.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1">
            <div className="relative w-full h-full  min-h-full">
              <Image
                src="/assets/trailer.png"
                alt="trailer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                className="h-full  rounded-lg "
              />
            </div>
          </div>
        </section>

        <section id="services" className="h-full">
          <div className="w-full text-center text-lg md:text-4xl font-bold pt-10 leading-5 mb-4 tracking-tight">
            <p>CONNECTING YOUR WORLD WITH</p>
            <p>OUR DIVERSE TRUCKLOAD SOLUTIONS</p>
          </div>

          <div className="md:flex space-y-3 md:space-y-0 mb-10">
            <div className=" md:flex-1">
              <div className="h-full flex flex-col">
                <div className="relative w-full h-full min-h-[180px]  md:min-h-[362px]">
                  <Image
                    src="/assets/excavator-2.png"
                    alt="trailer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg leading-loose">
                    Excavator
                  </h1>
                  <span className="font-semibold text-lg  me-6 text-gray-400 ">
                    01
                  </span>
                </div>
                <p className="text-sm max-w-[40ch]">
                  Used for digging trenches, foundations, holes, demolition,
                  material handling, and landscaping tasks
                </p>
              </div>
            </div>

            <div className=" md:flex-1">
              <div className="h-full flex flex-col">
                <div className="relative w-full h-full min-h-[180px]  md:min-h-[362px]">
                  <Image
                    src="/assets/trailer-2.png"
                    alt="trailer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg leading-loose">
                    Low Bed Trailer
                  </h1>
                  <span className="font-semibold text-lg me-6 text-gray-400 ">
                    02
                  </span>
                </div>
                <p className="text-sm max-w-[40ch]">
                  Ideal for transporting oversized and heavy cargo like
                  construction machinery over long distances while complying
                  with height restrictions.
                </p>
              </div>
            </div>

            <div className=" md:flex-1">
              <div className="h-full flex flex-col">
                <div className="relative w-full h-full  min-h-[180px]  md:min-h-[362px]">
                  <Image
                    src="/assets/tipper.png"
                    alt="trailer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    className="object-cover object-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg leading-loose ">
                    Dump Trucks - Tippers
                  </h1>
                  <span className="font-semibold text-lg me-6 text-gray-400 ">
                    03
                  </span>
                </div>
                <p className="text-sm max-w-[40ch]">
                  Designed for transporting and unloading loose materials, such
                  as sand, gravel, or demolition waste, featuring a hydraulic
                  lift mechanism
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:flex h-full gap-3 items-stretch space-y-5 md:space-y-0 bg-black rounded-xl  md:px-10  py-6 p-4">
          <div className="text-white flex-1 flex-col flex justify-between gap-5 ">
            <div className="space-y-6">
              <h2 className="font-bold text-xl tracking-tight leading-tight mb-3 max-w-[20ch] md:text-3xl">
                READY TO EXPERIENCE LOGISTICS EXCELLENCE?
              </h2>
              <p className="leading-relaxed max-w-[50ch] -mt-6">
                Experience logistics excellence with Mudi - where efficiency
                meets reliability. ready to elevate your shipment? Get in touch
                today to see how we can streamline your journey.
              </p>
            </div>
            <div>
              {" "}
              <a
                href="/contact"
                className="bg-[#FF6B19] text-black py-2 px-8 rounded-lg font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full h-full  min-h-[334px]">
              <Image
                src="/assets/trailer-dark.png"
                alt="excavator"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                className="h-full  rounded-xl "
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
