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

const teamMembers = [
  { name: 'Andrew', image: '/our-team/1.jpg' },
  { name: 'Anita Wood', image: '/our-team/2.jpg' },
  { name: 'Kiwi Dog', image: '/our-team/3.png' }
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
                src="/andrew-profile-picture.jpg"
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
                <li><span className="mr-2">•</span>Stock & Station Agency</li>
              </ul>
            </div>
          </div>
          {/* Hero text container */}
          <div className="flex-3 xl:flex-2 flex flex-col justify-center items-center gap-12 p-12 border-b border-t border-r border-black/10 -mx-6 md:-mx-12 lg:ml-0 hover:bg-gray-50 transition-all duration-300">
            <p className={`${alegreya.className} text-5xl xl:text-6xl/15 font-medium tracking-tight`}>
              Powerhouse Property Hunter delivers expert buyer representation, helping professionals and investors secure <span className='low-highlight'>strategic estates, agricultural, medical, and lifestyle properties</span> that drive 
              growth and fulfill both business and lifestyle aspirations.
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
                      At Powerhouse Property Hunter, we specialise in the property sectors we know intimately—those we actively invest in and are genuinely passionate about. Our expertise spans country estates, regenerative and large-scale agricultural holdings, tourism destinations, wellness and fitness facilities, and medical properties. We guide our clients to achieve their business and lifestyle ambitions with clarity, confidence, and efficiency.
                    </span>
                    <span className='block mb-3'>
                      Whether you are downsizing, expanding your footprint, acquiring your first practice, or building a strategic property portfolio, we deliver expert guidance and measurable results. We believe property should act as a catalyst for growth, not a constraint, and our bespoke solutions are tailored to protect your time, accelerate your success, and align seamlessly with your financial and professional ambitions.
                    </span>
                    <span className='block mb-3'>
                      We collaborate closely with professionals, practitioners, and their trusted advisers—including accountants, brokers, and financial consultants—to provide intelligent, strategic property outcomes that reflect your unique objectives. From site identification and acquisition through to negotiation and execution, we simplify complexity and transform challenges into value-driven opportunities.
                    </span>
                    <span className='block mb-3'>
                      Powerhouse Property Hunter is led by Andrew Blake, a highly regarded buyers’ agent with a trans-Tasman perspective, splitting his time between Australia and New Zealand. Born to a New Zealand–Australian family, Andrew combines a disciplined mindset honed as a former elite athlete with deep property market expertise. His own portfolio—spanning farming, medical, fitness, and lifestyle investments—reflects his focus on high-potential niche sectors. Recognised for his strategic insight, industry connections, and unwavering commitment to client success, Andrew ensures every acquisition is both purposeful and profitable.
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

        <TextReveal>Our expertise spans country estates, regenerative, major agricultural properties, tourism destinations, wellness facilities, and medical sites.</TextReveal>

        {/* <section className="h-[600px] relative -mx-6 md:-mx-12">
          <h3 className="text-xl mx-6 md:mx-12 inline-block text-black/50 font-medium mb-4 uppercase hover:text-black/70 transition-all duration-300">Meet the Team</h3>
          <FlowingMenu items={demoItems} />          
        </section> */}
        <section>
          <h3 className="text-xl inline-block text-black/50 font-medium mb-4 uppercase hover:text-black/70 transition-all duration-300">Meet the Team</h3>
          <div
            className="flex flex-col lg:flex-row w-full"
          >
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className="flex flex-col gap-4 p-8 border border-black/10 hover:bg-gray-50 transition-all duration-300 items-center justify-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative z-10 w-40 h-40 lg:w-56 lg:h-56 object-cover"
                  style={{ borderRadius: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)' }}
                />
                <span className="font-semibold uppercase">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutSection;
