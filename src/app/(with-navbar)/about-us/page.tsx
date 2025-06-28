/* eslint-disable @next/next/no-img-element */
import { LuArrowRight } from "react-icons/lu";
import { Alegreya } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Marquee from "react-fast-marquee";
import FlowingMenu from "@/components/react-bits/flowing-menu";
import { TextReveal } from "@/components/magicui/text-reveal";

const demoItems = [
  { link: '#', text: 'Andrew | CEO', image: '/our-team/1.jpg' },
  { link: '#', text: 'Anita Wood', image: '/our-team/2.jpg' },
  { link: '#', text: 'PK Dunlop', image: '/our-team/3.jpg' },
  { link: '#', text: 'Kiwi Dog', image: '/our-team/4.png' }
];

const alegreya = Alegreya({ subsets: ["latin"], style: ["normal","italic"] });

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
    <main id="about" className="section">
      <h1>About</h1>
      <div className="section-inner flex flex-col gap-48">
        <section className="flex flex-col lg:flex-row">
          {/* Andrew photo container */}
          <div className='flex-1 flex order-last lg:order-first flex-col gap-4 p-12 border border-black/10 -mx-6 md:-mx-12 lg:mr-0 hover:bg-gray-50 transition-all duration-300'>
            <div className=" overflow-hidden rounded-xs flex justify-center items-center">
              <img
                src="/andrew-profile-picture-2.jpg"
                alt="Andrew profile"
                className="max-w-1/2 lg:max-w-full aspect-square object-cover rounded-xs filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
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
          <div className="flex-3 xl:flex-2 flex flex-col justify-center items-center gap-12 p-12 border-b border-t border-r border-black/10 -mx-6 md:-mx-12 lg:ml-0 hover:bg-gray-50 transition-all duration-300">
            <p className={`${alegreya.className} text-5xl xl:text-6xl/15 font-medium tracking-tight`}>
              At Powerhouse Property Hunter our mission is to curate the right mix of <span className='low-highlight'>Medical, Healthcare & Wellness</span> properties and deliver
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
              <DialogContent className="max-w-[calc(100%-2rem)]">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription className='text-md text-black/90 p-4 max-h-[60vh] overflow-auto dialog-scrollbar text-left'>
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
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <Marquee autoFill={true} className="border-t-1 border-b-1 py-4 -mx-6 md:-mx-12 !w-[calc(100%+3rem)] md:!w-[calc(100%+6rem)]">
          <a href="/contact-us" className={`${alegreya.className} text-6xl italic mr-3`}>Looking for your perfect property? Let&apos;s chat!</a>
        </Marquee>

        <section>
          <h3 className="text-xl inline-block text-black/50 font-medium mb-4 uppercase hover:text-black/70 transition-all duration-300">The Offering</h3>
          <div className="flex flex-col gap-4">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="group pb-3 relative"
              >
                <h4 className="text-4xl lg:text-6xl uppercase font-extrabold mb-2 font-geologica">{offering.title}</h4>
                <p className="text-gray-600">{offering.description}</p>
                {// Animated borders
                }
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
        </section>

        <TextReveal>Trusted by medical professionals. Backed by experience. Proven by results.</TextReveal>

        <section className="h-[600px] relative -mx-6 md:-mx-12">
          <h3 className="text-xl mx-6 md:mx-12 inline-block text-black/50 font-medium mb-4 uppercase hover:text-black/70 transition-all duration-300">Meet the Team</h3>
          <FlowingMenu items={demoItems} />          
        </section>
      </div>
    </main>
  );
};

export default AboutSection;
