
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, Circle, ShoppingBag } from 'lucide-react';
import { carouselData } from "../data"
import AutoScrollCarousel from '@/components/AutoScrollCarousel';

const About = () => {
  const { t } = useTranslation();
  console.log(carouselData)

  const values = [
    {
      icon: <Settings className="h-8 w-8 text-brand-secondary-orange" />,
      title: "Manufacturing Know-How",
      description: "From forging and CNC machining to assembly and finishing, we understand the details that go into a high-quality industrial component."
    },
    {
      icon: <Circle className="h-8 w-8 text-brand-secondary-orange" />,
      title: "Trusted Supplier Network",
      description: "We collaborate with verified production facilities that maintain strict process and material control."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-brand-secondary-orange" />,
      title: "Flexible & Responsive",
      description: "Being a lean, founder-driven company, we respond quickly to inquiries, custom requirements, and evolving customer needs."
    },
    {
      icon: <Settings className="h-8 w-8 text-brand-secondary-orange" />,
      title: "Commitment to Quality",
      description: "All products go through rigorous checks to meet domestic and export-level specifications."
    }
  ];

  const manufacturingProcesses = [
    {
      title: "Filter Bags",
      description: "The fabric used in our industrial filter bags is sourced from a specialized fabric plant in Ahmedabad, owned by our close network partner. Final stitching, sealing, and finishing are managed under our supervision to ensure consistent quality.",
      icon: <ShoppingBag className="h-12 w-12 text-brand-secondary-orange" />
    },
    {
      title: "Roll Bearings",
      description: "Our forging and CNC machining plant in Rajkot (family-owned) handles the production of bearing cups and cones. We carry out the key manufacturing processes like forging, turning, and machining in-house before final assembly and quality control.",
      icon: <Circle className="h-12 w-12 text-brand-secondary-orange" />
    },
    {
      title: "Clutch Brake Pads",
      description: "Clutch sleeves and brake pads are manufactured using castings from a dedicated factory in Rajkot, operated by our extended family. We oversee the final product development process, ensuring all components meet strict specifications and performance standards.",
      icon: <Settings className="h-12 w-12 text-brand-secondary-orange" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="bg-gradient-to-r from-brand-primary-dark to-brand-primary-light mt-16 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              Driven by Precision. Built on Trust.
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A new-age industrial manufacturer with deep-rooted experience in mechanical and materials engineering
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <AutoScrollCarousel items={carouselData.bearings} reverse={false} />
          </div>
          <div>
            <AutoScrollCarousel items={carouselData.filterBags} reverse={true} />
          </div>
          <div>
            <AutoScrollCarousel items={carouselData.breakdisk} reverse={false} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-brand-dark-text mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Aditya Horizon International LLP, we are proud to be a new-age industrial manufacturer with deep
                  rooted experience in mechanical and materials engineering. Although we're a startup in structure, our
                  foundations are built on decades of family-run manufacturing expertise across Gujarat, India.
                </p>
                <p>
                  We specialize in the production and supply of filter bags, roll bearings, and tractor clutch brake
                  pads, serving a wide range of industrial sectors with durable, efficient, and reliable components. What
                  sets us apart is not just what we manufacture—but how we manage the process from raw material to
                  finished product.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-brand-accent-gray rounded-lg p-6 text-center">
                <Settings className="h-16 w-16 text-brand-secondary-orange mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold text-brand-dark-text">50+</h3>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6 text-center">
                <Circle className="h-16 w-16 text-brand-secondary-orange mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }} />
                <h3 className="text-2xl font-bold text-brand-dark-text">100+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6 text-center">
                <ShoppingBag className="h-16 w-16 text-brand-secondary-orange mx-auto mb-4 animate-float" style={{ animationDelay: '2s' }} />
                <h3 className="text-2xl font-bold text-brand-dark-text">24/7</h3>
                <p className="text-gray-600">Technical Support</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6 text-center">
                <Settings className="h-16 w-16 text-brand-secondary-orange mx-auto mb-4 animate-float" style={{ animationDelay: '3s' }} />
                <h3 className="text-2xl font-bold text-brand-dark-text">ISO</h3>
                <p className="text-gray-600">Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Model */}
      <section className="py-20 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-text mb-6">Our Manufacturing Model</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We operate through a combination of in-house production and strategic partnerships with trusted,
              long-standing industrial facilities. This blended approach gives us the flexibility of a modern startup with
              the production power of an established manufacturer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manufacturingProcesses.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent-gray rounded-full mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark-text mb-4">{process.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To deliver reliable, industrial-grade products that meet international standards, while offering
                personalized service and adaptable manufacturing solutions to our customers.
              </p>
            </div>

            <div className="text-white animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To become a recognized leader in the industrial components sector by combining technical knowledge,
                ethical business practices, and scalable manufacturing capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-text mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the industrial components industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-brand-accent-gray transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent-gray rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark-text mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-brand-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-secondary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Leadership & Background</h2>
            <div className="max-w-4xl mx-auto text-lg text-white/90 leading-relaxed space-y-6">
              <p>
                Aditya Horizon International LLP is the result of a multi-generational commitment to mechanical
                innovation and industrial craftsmanship. With family-owned facilities in Rajkot and Ahmedabad, our
                roots are grounded in the precision engineering sector.
              </p>
              <p>
                Today, we bring that legacy into a modern, agile business that serves clients across India and abroad,
                combining traditional manufacturing excellence with contemporary business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
