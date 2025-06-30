
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Blogs = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogCategories = {
    'filter-bags': 'Filter Bags',
    'bearings': 'Roll Bearings',
    'clutch-brake-pads': 'Clutch Brake Pads & Sleeves'
  };

  const blogPosts = {
    'filter-bags': [
      {
        title: "Choosing the Right Filter Bag for Your Application: A Complete Guide",
        excerpt: "Selecting the wrong filter bag can lead to poor air quality, frequent maintenance, or even equipment damage. This blog provides a comprehensive guide to choosing filter bags based on key criteria—such as dust type, operating temperature, chemical compatibility, flow rate, and filter housing design. It will also explain how bag dimensions, stitching patterns, and media selection (e.g., polyester, Nomex, PTFE) influence performance.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Plant managers, maintenance engineers, procurement heads"
      },
      {
        title: "Fabric Types for Filter Bags: What Works Best in High-Temperature Conditions?",
        excerpt: "When dealing with incinerators, boilers, or furnaces, standard filter fabrics won't hold up. This post explores the best filter bag materials designed for high-heat environments, such as PPS (Ryton), PTFE, Nomex (Aramid), and Fiberglass. It will explain each material's thermal threshold, chemical resistance, and durability, helping readers make an informed choice for high-performance filtration under extreme operating conditions.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Chemical engineers, project heads, OEMs"
      },
      {
        title: "How Filter Bags Improve Efficiency in Cement Plants",
        excerpt: "Cement production generates an immense amount of dust, especially from kilns, coolers, and raw mills. This blog will dive into the operational benefits of using optimized filter bags in cement plants. Topics include improved air quality, better dust recovery, extended filter life, and compliance with emission standards. You'll also highlight how Aditya Horizon's custom-fit filter bags enhance system uptime and environmental performance.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Cement plant engineers, environmental officers"
      },
      {
        title: "Liquid vs. Dust Filter Bags: What's the Difference and When to Use Each?",
        excerpt: "Though they may look similar, liquid and dust filter bags serve very different purposes. This blog compares the construction, application, and filtration mechanism of each. Dust bags are used for dry filtration in baghouses, while liquid filter bags are used in processing chemicals, oils, and other fluids. This helps industries with hybrid needs (like food, pharma, and chemicals) choose the right filtration solution.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Procurement teams, process engineers"
      },
      {
        title: "5 Signs Your Filter Bags Need Replacing – Before System Failure Occurs",
        excerpt: "Many industries suffer from unexpected filter failures due to worn-out or damaged filter bags. This practical guide lists key warning signs, such as increased pressure drop, visible dust emissions, bag material tearing, and decreased airflow. It also offers preventative maintenance tips and explains how your team can support timely replacements to avoid shutdowns.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Maintenance supervisors, operations managers"
      },
      {
        title: "Custom Filter Bags: How Tailor-Made Solutions Increase Plant Performance",
        excerpt: "Off-the-shelf filter bags may not fit your application's size, flow rate, or filtration challenge. This article promotes the benefits of custom filter bag manufacturing—like precision sizing, specialized coatings, reinforced stitching, and high-efficiency media. It positions Aditya Horizon as a flexible partner capable of designing, sourcing, and delivering bags that meet even non-standard filter housings.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "OEMs, design engineers, technical buyers"
      },
      {
        title: "Understanding Micron Ratings in Industrial Filter Bags",
        excerpt: "Micron ratings determine how fine the particles are that your filter bag can capture—but many users misunderstand what the ratings mean in real-world performance. This educational blog explains absolute vs. nominal ratings, particle retention, and how to match micron levels with your industry's needs (e.g., food safety, pharma purity, chemical filtration).",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Quality control teams, product designers"
      },
      {
        title: "Common Filtration System Problems and How Filter Bags Solve Them",
        excerpt: "This blog explores real-world issues in industrial filtration—like poor airflow, emission violations, high pressure drops, and product loss. It then explains how proper selection and maintenance of filter bags can address each challenge. You can also include a troubleshooting checklist and promote the advantages of using premium-quality filter media.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "System integrators, plant operators, quality auditors"
      },
      {
        title: "Filter Bag Maintenance Tips to Extend Product Life",
        excerpt: "Industrial filtration is a recurring cost—so maximizing the lifespan of filter bags is critical. This blog will list best practices such as routine inspections, proper bag cleaning methods, optimal pulse-jet system settings, and correct installation techniques. You'll position Aditya Horizon as not just a supplier, but a partner in long-term efficiency.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Equipment maintenance staff, plant technicians"
      },
      {
        title: "Environmental Benefits of Industrial Filter Bags in Air Pollution Control",
        excerpt: "Filter bags are not just about plant performance—they also play a key role in environmental protection. This article discusses how efficient filtration reduces PM2.5 and PM10 emissions, helps meet national and international pollution standards (CPCB, EPA, EU norms), and supports sustainability initiatives in cement, power, and chemical sectors. It's perfect for ESG-driven clients.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Sustainability officers, compliance managers, corporate buyers"
      }
    ],
    'bearings': [
      {
        title: "Tapered Roller Bearings: Design, Application, and Performance Benefits",
        excerpt: "This blog explains the engineering behind tapered roller bearings—highlighting how their geometry handles both radial and axial loads efficiently. It will explore why these bearings are ideal for high-load and high-speed applications in gearboxes, vehicles, and heavy machinery. Case examples from automotive and industrial settings will add depth and relevance.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Mechanical engineers, OEM buyers, plant designers"
      },
      {
        title: "Inside the Bearing: Manufacturing Process from Forging to Finish",
        excerpt: "Walk readers through Aditya Horizon's step-by-step production process—from forging blanks in Rajkot to CNC machining and final bearing assembly. Emphasize precision, material quality, and in-house capabilities. This builds trust and shows your technical expertise and control over quality assurance.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "B2B clients, sourcing agents, quality auditors"
      },
      {
        title: "Bearing Lubrication: Why It's Critical for Longevity and Efficiency",
        excerpt: "Lubrication errors are a major cause of bearing failure. This blog covers lubrication types (grease vs. oil), maintenance intervals, sealing options, and consequences of over- or under-lubrication. It's a practical guide for maintenance teams seeking to extend equipment lifespan.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Maintenance engineers, service teams, fleet operators"
      },
      {
        title: "Understanding Cup & Cone Bearings – And How to Identify a Quality Set",
        excerpt: "Many buyers don't fully understand the importance of matching cup and cone tolerances for optimal performance. This article educates readers on selecting properly machined bearing sets, ensuring fitment accuracy, and avoiding mix-match issues that cause noise or early failure.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Spare parts dealers, tractor/mechanical workshops, OEM suppliers"
      },
      {
        title: "5 Common Causes of Bearing Failure and How to Prevent Them",
        excerpt: "A troubleshooting guide focused on misalignment, improper installation, contamination, overload, and fatigue. You'll explain how to diagnose these issues and recommend preventative steps—along with how Aditya Horizon bearings are built to mitigate these risks.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Workshop technicians, machinery operators, plant engineers"
      },
      {
        title: "Why CNC Precision Matters in Bearing Manufacturing",
        excerpt: "Precision is everything in bearing manufacturing. This blog highlights how CNC turning and grinding ensure tolerance accuracy, surface finish, and overall performance. Include photos or videos from your production unit to show your investment in advanced technology.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Procurement managers, industrial automation teams, quality control professionals"
      },
      {
        title: "Bearing Applications in Agricultural Machinery – Key Considerations",
        excerpt: "Agricultural equipment like tractors and harvesters work in harsh, dusty, and vibration-heavy conditions. This blog discusses how durable bearings ensure smoother gear shifts, reduce downtime, and improve machine reliability in the field. Great for your rural and farming industry clients.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Agri OEMs, tractor parts dealers, rural distributors"
      },
      {
        title: "OEM vs. Aftermarket Bearings: Which One Should You Trust?",
        excerpt: "Not all bearings are created equal. This blog helps buyers understand the difference between high-quality OEM-grade bearings and cheap aftermarket variants with inconsistent metallurgy or poor finishing. Reinforce Aditya Horizon's position as a reliable OEM-compliant supplier.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Vehicle service stations, spare parts retailers, OEMs"
      },
      {
        title: "How to Choose the Right Bearing for Your Gearbox or Transmission",
        excerpt: "Not all bearings suit all loads, speeds, or lubrication conditions. This blog offers a selection guide based on load type, speed, fitment location, shaft size, and temperature. Include charts or quick-reference tools for added value.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Machinery designers, gearbox manufacturers, automotive OEMs"
      },
      {
        title: "Industrial Bearing Inspection: Tips for Identifying Wear and Tear",
        excerpt: "This hands-on guide covers how to inspect a bearing without lab equipment—visual cracks, spalling, color changes, and play. Educates your readers on when to repair vs. replace, helping reduce failure risks.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Maintenance technicians, repair shop owners"
      },
      {
        title: "Export-Ready Bearings: How We Meet International Tolerances and Standards",
        excerpt: "This blog focuses on your export readiness—explaining how you meet ISO/DIN/ANSI tolerances, traceability, material testing, and packaging for international shipments. Builds credibility for global clients.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Export agents, overseas buyers, international partners"
      },
      {
        title: "Choosing Bearing Material: Chrome Steel vs Stainless Steel vs Others",
        excerpt: "Different environments require different bearing materials. This post compares chromium steel, stainless steel, and ceramics—looking at corrosion resistance, load capacity, and thermal expansion. A technical guide for design engineers and OEM decision-makers.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Mechanical designers, R&D teams, high-spec OEMs"
      }
    ],
    'clutch-brake-pads': [
      {
        title: "How Clutch Brake Pads Work in Tractors and Farm Machinery",
        excerpt: "This blog educates users about the core function of clutch brake pads—how they control power transmission between engine and gearbox, and why they're vital in tractors for smooth operation and safe braking. Diagrams can illustrate how pads interact with pressure plates and flywheels. It's ideal for OEMs, mechanics, and technical buyers who want to understand what's behind the performance.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Tractor operators, agri-tech engineers, repair workshops"
      },
      {
        title: "Why High-Quality Brake Sleeves Matter in Agricultural Vehicles",
        excerpt: "Brake sleeves are small but critical castings in heavy-duty braking systems. This post highlights how quality casting, correct hardness, and precise machining impact performance, durability, and heat dissipation. It helps educate buyers on avoiding cheap, brittle parts that fail under stress.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Casting buyers, OEM part distributors, quality control teams"
      },
      {
        title: "5 Symptoms of Worn Clutch Pads You Shouldn't Ignore",
        excerpt: "This blog lists common signs like slippage, difficulty in shifting gears, increased engine noise, burning smells, and vibration—explaining what each symptom indicates and when replacement is necessary. This makes it easier for end-users and service centers to identify and act before a full clutch failure occurs.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Mechanics, farm equipment owners, tractor dealers"
      },
      {
        title: "OEM-Grade Brake Components vs Local Market Alternatives",
        excerpt: "This post compares OEM-standard clutch and brake components with unbranded, lower-quality alternatives found in local markets. It covers design tolerances, friction material composition, surface finish, and durability—emphasizing why using substandard parts can damage expensive machinery.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Spare parts buyers, fleet managers, agri workshop owners"
      },
      {
        title: "Casting Quality in Brake Components – What Makes or Breaks a Part",
        excerpt: "Cast brake sleeves and clutch components require high metallurgical integrity to handle friction and heat. This blog dives into foundry quality factors: controlled alloy mix, no porosity, dimensional precision, and post-casting inspection. Use this to show the advantage of your family-owned Rajkot casting facility.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Foundry professionals, OEM suppliers, quality assurance teams"
      },
      {
        title: "Choosing Brake Pads for Tough Terrain and Heavy Loads",
        excerpt: "Farms and construction zones involve dusty, uneven, and high-load environments. This blog helps users select the right brake pads for tractors and loaders that operate under tough terrain. You'll explain pad hardness, slotting patterns, and fade resistance for frequent stop/start activity.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Rural mechanics, farm machinery dealers, fleet owners"
      },
      {
        title: "How Clutch Sleeves Impact Gear Engagement and Safety",
        excerpt: "The clutch sleeve plays a key role in engaging and disengaging gears smoothly. This technical blog explains how material quality, surface smoothness, and tight tolerances affect driver control and equipment safety. Position your precision-cast sleeves as a safe and efficient choice.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "Agricultural engineers, tractor manufacturers, quality auditors"
      },
      {
        title: "Best Practices for Installing Tractor Clutch Pads",
        excerpt: "Improper installation can cause premature wear or unsafe operation. This blog offers a step-by-step checklist for correct installation: alignment, torque specs, bedding-in period, and inspection. Great for training and onboarding new mechanics or service center teams.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "Tractor repair technicians, service center heads"
      },
      {
        title: "Why Your Tractor Brake System Deserves More Attention",
        excerpt: "Many tractor owners focus only on engines and tires—neglecting the braking system. This awareness blog outlines how worn or mismatched components (pads, sleeves, linings) lead to accidents, higher fuel consumption, and longer stopping distances. Emphasize safety and efficiency.",
        image: "https://images.unsplash.com/photo-1562813730-a91e58c4c63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        target: "Tractor owners, safety managers, agri-fleet operators"
      },
      {
        title: "Custom Manufacturing for Brake Pads: Meeting Non-Standard Requirements",
        excerpt: "Some equipment models require non-standard sizes, shapes, or materials. This blog showcases your ability to deliver made-to-order brake pads and sleeves that meet special technical needs, from low-volume spares to new tractor models.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        target: "OEM buyers, regional dealers, spare parts designers"
      },
      {
        title: "Heat, Friction & Load: The Engineering Science Behind Brake Pads",
        excerpt: "This advanced blog explores the science of brake pad materials—coefficient of friction, wear rate, temperature threshold, and load-bearing capacity. It's perfect for a more technical audience who want to understand what makes a high-performance brake pad.",
        image: "https://images.unsplash.com/photo-1518791841217-675c3d1d14d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        target: "R&D engineers, industrial machinery designers, OEM evaluators"
      }
    ]
  };

  const getFilteredBlogs = () => {
    if (selectedCategory === 'all') {
      return Object.values(blogPosts).flat();
    }
    return blogPosts[selectedCategory as keyof typeof blogPosts] || [];
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary-dark to-brand-primary-light mt-16 py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
              Industry Insights
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Expert knowledge and industry updates
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">Category:</span>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Object.entries(blogCategories).map(([key, name]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredBlogs().map((post, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-t-2xl h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <p className="text-xs text-orange-600 font-medium mb-4">Target: {post.target}</p>
                    <a href="#" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
