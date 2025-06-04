import Image from 'next/image'

const offerings = [
  {
    title: 'Property Search',
    description: 'Expert assistance in finding your perfect property match.',
  },
  {
    title: 'Market Analysis',
    description: 'In-depth market research and property valuation.',
  },
  {
    title: 'Negotiation',
    description: 'Professional negotiation to secure the best deal.',
  },
  {
    title: 'Transaction Support',
    description: 'End-to-end support throughout the buying process.',
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white text-primary">
      <h1>About</h1>
      <div className="section-inner">
        <div className="flex gap-16 mb-24">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/andrew-profile-picture.jpeg"
              alt="Andrew profile"
              width={600}
              height={600}
              className="aspect-square object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Andrew Blake</h2>
            <p className="text-lg">
              We are dedicated to helping you find your perfect property. With years of experience
              and deep market knowledge, we make your property hunting journey seamless and successful.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">The Offering</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 border border-primary/10 rounded-lg"
              >
                <h4 className="text-xl font-bold mb-2">{offering.title}</h4>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
