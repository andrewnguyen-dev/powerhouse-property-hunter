/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { LuArrowRight } from "react-icons/lu";
import { Lato } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Alegreya } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const lato = Lato({ subsets: ["latin"], variable: "--font-lato", weight: ["100", "300", "400", "700", "900"] });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans"});
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });

const offerings = [
  {
    title: 'Property Sourcing',
    description: 'We identify, and secure properties tailored to your exact needs, from strategic acquisitions to rare off-market gems.',
  },
  {
    title: 'Development Feasibility',
    description: 'Comprehensive due diligence and financial modeling to ensure your project delivers high returns with confidence.',
  },
  {
    title: 'Geographic and Market Analysis',
    description: 'Data backed property intelligence to guide investment decisions in high growth, high potential locations.',
  },
  {
    title: 'Funding, Design & Construction',
    description: 'Backed by a trusted tribe of experts, we manage the full journey - from finance to finished product.',
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white text-primary">
      <h1>About</h1>
      <div className="section-inner">
        <div className="flex mb-24">
          {/* Andrew photo container */}
          <div className='flex-1 flex flex-col gap-4 p-12 border border-black/10 -ml-12 hover:bg-gray-50 transition-all duration-300'>
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/andrew-profile-picture-2.jpg"
                alt="Andrew profile"
                width={500}
                height={500}
                className="aspect-square object-cover rounded-sm filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='uppercase font-bold text-black/70 text-center'>Andrew Blake</p>
              <ul className='text-black/50 text-sm'>
                <li><span className="mr-2">•</span>Diploma of Design & Architecture at UTS</li>
                <li><span className="mr-2">•</span>Master of Property Development API</li>
                <li><span className="mr-2">•</span>Real Estate Agent Class 1</li>
              </ul>
            </div>
          </div>
          {/* Hero text container */}
          <div className="flex-2 flex flex-col justify-center items-center gap-12 p-12 border-b border-t border-r border-black/10 -mr-12 hover:bg-gray-50 transition-all duration-300">
            <p className={`${alegreya.className} text-6xl/15 font-medium tracking-tight`}>
              At Powerhouse Property Hunter our mission is to curate the right mix of Medical, Healthcare & Wellness properties and deliver
              expert buyer agency services tailored to your goals.
            </p>
            <Dialog>
              <DialogTrigger className='self-start'>
                <p className="uppercase text-xl flex items-center group cursor-pointer relative">
                  Read more
                  <span className="ml-2 transition-transform duration-300 group-hover:-rotate-45">
                    <LuArrowRight />
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black/70 transition-all duration-400 group-hover:w-full"></span>
                </p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription className='text-md text-black/90 p-4'>
                    <span className='block mb-3'>
                      At Powerhouse Property Hunter, we specialise in assisting medical professionals to achieve their business and lifestyle objectives with clarity, confidence, and efficiency. Whether you are expanding your practice, acquiring your first premises, or building a strategic property portfolio, we provide expert guidance and tangible results.
                    </span>
                    <span className='block mb-3'>
                      We believe that property should serve as a catalyst—not a constraint—for success. Our bespoke property solutions are designed to accelerate growth, protect your time, and align with your broader financial and professional goals.
                    </span>
                    <span className='block mb-3'>
                      Collaborating closely with medical practitioners and their trusted advisers—including accountants, brokers, and financial consultants—we deliver intelligent, strategic property outcomes tailored to your unique circumstances.
                    </span>
                    <span className='block mb-3'>
                      With decades of experience navigating the intricacies of the property market, we transform complex challenges into value-driven opportunities. From site identification and acquisition through to negotiation and execution, we support you at every stage of the process.
                    </span>
                    <span className='block mb-3'>
                      Powerhouse Property Hunter is led by Andrew Blake, a highly regarded buyers’ agent with a comprehensive understanding of the healthcare property sector. With a disciplined background as a former elite athlete, Andrew brings a results-focused mindset, a commitment to excellence, and strong industry connections. He is widely recognised for his professionalism, strategic insight, and unwavering dedication to his clients’ success.
                    </span>
                    <span className='block font-bold'>
                      Trusted by medical professionals. Backed by experience. Proven by results.
                    </span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
          </div>
          <div className='hidden'>
            
          </div>
        </div>
        <div>
          <h3 className="text-xl inline-block text-black/50 font-medium mb-4 uppercase hover:text-black/70 transition-all duration-300">The Offering</h3>
          <div className="flex flex-col gap-4">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="group pb-3 relative"
              >
                <h4 className="text-6xl uppercase font-extrabold mb-2 font-geologica">{offering.title}</h4>
                <p className="text-gray-600">{offering.description}</p>
                {/* Animated border */}
                <span
                  className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-black/20 overflow-hidden"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full w-0 bg-black transition-all duration-800 ease-out group-hover:w-full"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
