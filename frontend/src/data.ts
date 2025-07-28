import { Settings, Circle, ShoppingBag } from 'lucide-react';
type Product = {
    id?: number;
    image?: string;
    image2?: string;
    name?: string;
    description?: string;
    description2?: string;
    description3?: string;
    keyBenefits?: string[];
    technicalSpecifications?: {
        [key: string]: string;
    };
    standardSizes?: {
        size?: string;
        diameter?: string;
        length?: string;
        Common_Sizes?: string;
        height?: string;
        description?: string;
        bagDepth?: string;
    }[];
    typicalApplications?: string[];
    customOptions?: string;
    bearingTable?: {
        itemNo: string;
        d: string;
        D: string;
        T: string;
        dynamicLoad: string;
        staticLoad: string;
    }[];
};

type SubCategory = {
    name: string;
    products: Product[];
};

type ProductCategory = {
    name: string;
    subCategories: SubCategory[];
};

export const glossaryData = {
    'filter-bags': {
        title: 'Filter Bag Glossary',
        terms: [
            { letter: 'A', term: 'Air-to-Cloth Ratio', definition: 'The ratio of airflow to the surface area of the filter media, affecting filtration efficiency and system capacity.' },
            { letter: 'B', term: 'Baghouse', definition: 'A large filtration unit that uses filter bags to remove particles from industrial air streams.' },
            { letter: 'B', term: 'BAG Filter', definition: 'A type of filtration device that uses cloth or fabric to trap dust particles and contaminants from air or gases.' },
            { letter: 'C', term: 'Cleaning Cycle', definition: 'The process of cleaning the filter bags through techniques like pulse-jet cleaning or mechanical shaking to prevent clogging and maintain performance.' },
            { letter: 'C', term: 'Cloth Media', definition: 'The fabric material used for the filter bags, available in synthetic, natural, or hybrid materials.' },
            { letter: 'D', term: 'Dust Collection', definition: 'The process of capturing dust and particulate matter from air or gas streams using various filtration systems, such as filter bags.' },
            { letter: 'E', term: 'Efficiency', definition: 'The measure of how well a filter bag removes contaminants from the air or liquid it filters.' },
            { letter: 'E', term: 'End Caps', definition: 'The parts that seal the ends of the filter bag and ensure it fits securely into the filter housing.' },
            { letter: 'F', term: 'Filtration', definition: 'The process of removing solid particles from liquids or gases using a filter media like filter bags.' },
            { letter: 'F', term: 'Fabric', definition: 'The material used for the construction of filter bags, including types like polyester, Nomex, and PTFE.' },
            { letter: 'G', term: 'Gasket', definition: 'A sealing component that is used between the filter bag and housing to prevent leakage.' },
            { letter: 'G', term: 'Granular Filtration', definition: 'Filtration using granular materials like activated carbon or silica for capturing fine particles.' },
            { letter: 'H', term: 'High-Efficiency Filter Bags', definition: 'Filter bags designed to provide superior filtration performance, often used in industries with stringent air quality requirements.' },
            { letter: 'I', term: 'Inlet Velocity', definition: 'The speed at which air or gas enters the filter system, impacting the filter\'s performance and lifespan.' },
            { letter: 'I', term: 'Industrial Filter Bags', definition: 'Filter bags specifically designed for use in industrial applications, typically in sectors like cement, power generation, and chemicals.' },
            { letter: 'J', term: 'Jet Pulse Cleaning', definition: 'A method used to clean filter bags by sending high-pressure pulses of air through them.' },
            { letter: 'K', term: 'Knitted Fabric', definition: 'A type of fabric used for filter bags, known for its flexibility and durability.' },
            { letter: 'L', term: 'Load Capacity', definition: 'The maximum amount of dust or particulate matter a filter bag can hold before it needs to be cleaned or replaced.' },
            { letter: 'M', term: 'Micron Rating', definition: 'The size of the particles that a filter bag is designed to capture, often measured in microns (µm).' },
            { letter: 'M', term: 'Media', definition: 'The material (such as fabric or synthetic material) used in filter bags to capture particulate matter.' },
            { letter: 'N', term: 'Nomex', definition: 'A high-temperature-resistant fabric commonly used in filter bags for applications that require heat resistance.' },
            { letter: 'O', term: 'Offline Cleaning', definition: 'A cleaning method that removes dust from filter bags outside of the normal operation, often by mechanical means.' },
            { letter: 'P', term: 'Pulse-Jet System', definition: 'A cleaning method in which air pulses are used to blow debris off the filter bags to maintain efficiency.' },
            { letter: 'P', term: 'Polyester', definition: 'A common synthetic fabric used in filter bags due to its durability and resistance to a range of chemicals.' },
            { letter: 'Q', term: 'Quality Control', definition: 'The process of testing and monitoring filter bags for their ability to meet industry standards and perform under expected conditions.' },
            { letter: 'R', term: 'Resistance', definition: 'The ability of the filter bag material to resist wear, chemicals, heat, or other harsh conditions in industrial environments.' },
            { letter: 'S', term: 'Surface Area', definition: 'The total area of the fabric or media that is used for filtration, affecting the efficiency and capacity of the filter bag.' },
            { letter: 'S', term: 'Seam Strength', definition: 'The strength of the stitching in the filter bag, critical to its performance and longevity.' },
            { letter: 'T', term: 'Tensile Strength', definition: 'The maximum amount of stress that a filter bag\'s fabric can withstand before breaking.' },
            { letter: 'U', term: 'Ultraviolet (UV) Resistance', definition: 'The ability of the filter bag material to resist degradation caused by exposure to UV radiation, especially important in outdoor or exposed applications.' },
            { letter: 'V', term: 'Vacuum Filtration', definition: 'A filtration process where a vacuum is used to draw air or liquids through the filter bag to remove impurities.' },
            { letter: 'W', term: 'Washable Filter Bags', definition: 'Filter bags that can be cleaned and reused, reducing replacement costs and promoting sustainability.' },
            { letter: 'X', term: 'Xylene Resistance', definition: 'The ability of a filter bag to resist chemical degradation when exposed to xylene or similar solvents.' },
            { letter: 'Y', term: 'Yield', definition: 'The amount of dust or particulate matter a filter bag can capture over time before performance degradation occurs.' },
            { letter: 'Z', term: 'Zero-Emission Filtration', definition: 'A type of filtration that captures nearly 100% of particulate matter, preventing pollutants from entering the air.' }
        ]
    },
    'bearings': {
        title: 'Roll Bearings Glossary',
        terms: [
            { letter: 'A', term: 'Axial Load', definition: 'A force that is applied along the axis of the bearing, typically handled by thrust bearings or tapered roller bearings.' },
            { letter: 'B', term: 'Ball Bearing', definition: 'A type of bearing that uses spherical balls to support the load, commonly used in rotating machinery.' },
            { letter: 'B', term: 'Bearing Clearance', definition: 'The small gap between the bearing and the shaft, necessary for proper operation and preventing overheating.' },
            { letter: 'C', term: 'Cup', definition: 'The outer ring of a tapered roller bearing, which houses the rolling elements.' },
            { letter: 'C', term: 'Cage', definition: 'A component in bearings that separates and guides the rolling elements, ensuring smooth operation and preventing wear.' },
            { letter: 'D', term: 'Dynamic Load Rating', definition: 'The maximum load a bearing can handle while in motion, measured over a defined period.' },
            { letter: 'E', term: 'Elasticity', definition: 'The ability of a bearing material to return to its original shape after being subjected to a load.' },
            { letter: 'F', term: 'Friction', definition: 'The resistance to motion that occurs when one surface moves over another, which in bearings, affects energy efficiency and temperature.' },
            { letter: 'G', term: 'Grease', definition: 'A lubricant used in bearings to reduce friction and wear, typically composed of oil and thickener.' },
            { letter: 'H', term: 'Heat Treatment', definition: 'The process of heating and cooling bearings to change their microstructure and improve hardness and durability.' },
            { letter: 'I', term: 'Inner Ring', definition: 'The ring that fits around the shaft in a bearing, often the part subjected to the highest pressure.' },
            { letter: 'J', term: 'Junction Temperature', definition: 'The temperature at which the rolling elements of the bearing meet the bearing rings, influencing the bearing\'s overall lifespan.' },
            { letter: 'K', term: 'K-factor', definition: 'A coefficient used to determine the frictional losses in bearings due to different operational conditions.' },
            { letter: 'L', term: 'Lubrication', definition: 'The use of oils or grease to reduce friction and wear between bearing parts.' },
            { letter: 'M', term: 'Magnetic Bearings', definition: 'Bearings that support a load using magnetic fields rather than physical contact, reducing friction to nearly zero.' },
            { letter: 'N', term: 'Needle Bearings', definition: 'A type of bearing that uses cylindrical rolling elements that are longer than their diameter, commonly used in compact spaces.' },
            { letter: 'O', term: 'Outer Ring', definition: 'The outermost ring in a bearing, surrounding the rolling elements and holding the cage in place.' },
            { letter: 'P', term: 'Precision Bearings', definition: 'Bearings manufactured to tight tolerances for high-accuracy applications such as aerospace or medical devices.' },
            { letter: 'Q', term: 'Quality Control', definition: 'The process of inspecting and testing bearings to ensure they meet industry standards and customer specifications.' },
            { letter: 'R', term: 'Radial Load', definition: 'A force that is applied perpendicular to the axis of the bearing, typically handled by ball bearings or cylindrical roller bearings.' },
            { letter: 'S', term: 'Seals', definition: 'Components used to prevent contaminants from entering the bearing and to retain lubricants.' },
            { letter: 'T', term: 'Tapered Roller Bearing', definition: 'A bearing that uses conical rolling elements, commonly used in automotive applications for handling both radial and axial loads.' },
            { letter: 'U', term: 'Universal Joint Bearings', definition: 'Bearings used in driveshafts, commonly found in automotive and industrial applications, allowing rotation in multiple directions.' },
            { letter: 'V', term: 'Vibration', definition: 'The oscillation of bearing components due to load imbalances or misalignment, which can lead to premature failure.' },
            { letter: 'W', term: 'Wear', definition: 'The gradual degradation of bearing surfaces due to continuous friction and load, leading to reduced performance.' },
            { letter: 'X', term: 'X-axis Load', definition: 'The load acting along the horizontal axis of the bearing during operation.' },
            { letter: 'Y', term: 'Yield Strength', definition: 'The amount of stress a bearing material can withstand before it permanently deforms.' },
            { letter: 'Z', term: 'Zero-Backlash Bearings', definition: 'Bearings designed to operate with no gap between the rolling elements and the raceways, offering enhanced precision in machinery.' }
        ]
    },
    'clutch-brake-pads': {
        title: 'Clutch Brake Pads & Sleeves Glossary',
        terms: [
            { letter: 'A', term: 'Axial Load', definition: 'A force acting along the axis of the clutch brake pads, which is handled by certain types of clutch designs.' },
            { letter: 'B', term: 'Brake Pads', definition: 'The friction material in braking systems used to create friction with a rotor to slow or stop machinery, such as tractors or industrial vehicles.' },
            { letter: 'C', term: 'Clutch Plate', definition: 'The component in a clutch that engages and disengages with the flywheel to transmit power from the engine to the gearbox.' },
            { letter: 'C', term: 'Cast Iron', definition: 'A common material for clutch brake components due to its high wear resistance and ability to withstand high temperatures.' },
            { letter: 'D', term: 'Durability', definition: 'The ability of clutch brake pads to withstand repeated wear and tear while maintaining their performance.' },
            { letter: 'E', term: 'Engagement', definition: 'The process by which the clutch brake pads press against the disc to transmit torque and control the rotation of the vehicle.' },
            { letter: 'F', term: 'Friction Material', definition: 'The specific substance (e.g., organic, semi-metallic, ceramic) used in the construction of clutch and brake pads for effective stopping and power transfer.' },
            { letter: 'G', term: 'Gasket', definition: 'A sealing component used in brake systems to prevent fluid leaks and ensure smooth operation.' },
            { letter: 'H', term: 'Hardness', definition: 'The resistance of brake pads and sleeves to wear and deformation under heavy usage.' },
            { letter: 'I', term: 'Installation', definition: 'The procedure of properly placing and securing brake pads and clutch components in machinery or vehicles.' },
            { letter: 'J', term: 'Joint Mechanism', definition: 'The mechanism by which the clutch and brake pads engage, transferring force to operate machinery or stop motion.' },
            { letter: 'K', term: 'Kevlar', definition: 'A material sometimes used in high-performance clutch or brake pads due to its heat resistance and durability.' },
            { letter: 'L', term: 'Load Distribution', definition: 'The evenness of pressure across brake pads and clutch sleeves to prevent uneven wear and premature failure.' },
            { letter: 'M', term: 'Material Composition', definition: 'The mixture of substances (like steel, rubber, and friction compounds) used to manufacture clutch brake components.' },
            { letter: 'N', term: 'Noise Dampening', definition: 'Technologies or coatings applied to brake pads to reduce noise during operation.' },
            { letter: 'O', term: 'Overheating', definition: 'The excessive heat generated by clutch brake pads under heavy use, which can lead to failure or reduced efficiency.' },
            { letter: 'P', term: 'Pressure Plate', definition: 'The component that applies pressure to the clutch disc to engage or disengage the engine from the transmission.' },
            { letter: 'Q', term: 'Quality Assurance', definition: 'The processes used to inspect and test brake pads and clutch sleeves to ensure they meet specific standards and specifications.' },
            { letter: 'R', term: 'Rotational Speed', definition: 'The speed at which the flywheel or clutch plate rotates, affecting the friction performance of clutch brake pads.' },
            { letter: 'S', term: 'Sleeves', definition: 'Components that protect clutch and brake pads and ensure smooth engagement with other parts.' },
            { letter: 'T', term: 'Thermal Conductivity', definition: 'The ability of brake pads to transfer heat away from the friction surface, preventing overheating and ensuring consistent performance.' }
        ]
    }
};

export const blogPosts = {
    'filter-bags': [
        {
            title: "Choosing the Right Filter Bag for Your Application: A Complete Guide",
            excerpt: "Selecting the wrong filter bag can lead to poor air quality, frequent maintenance, or even equipment damage. This blog provides a comprehensive guide to choosing filter bags based on key criteria—such as dust type, operating temperature, chemical compatibility, flow rate, and filter housing design. It will also explain how bag dimensions, stitching patterns, and media selection (e.g., polyester, Nomex, PTFE) influence performance.",
            target: "Plant managers, maintenance engineers, procurement heads"
        },
        {
            title: "Fabric Types for Filter Bags: What Works Best in High-Temperature Conditions?",
            excerpt: "When dealing with incinerators, boilers, or furnaces, standard filter fabrics won't hold up. This post explores the best filter bag materials designed for high-heat environments, such as PPS (Ryton), PTFE, Nomex (Aramid), and Fiberglass. It will explain each material's thermal threshold, chemical resistance, and durability, helping readers make an informed choice for high-performance filtration under extreme operating conditions.",
            target: "Chemical engineers, project heads, OEMs"
        },
        {
            title: "How Filter Bags Improve Efficiency in Cement Plants",
            excerpt: "Cement production generates an immense amount of dust, especially from kilns, coolers, and raw mills. This blog will dive into the operational benefits of using optimized filter bags in cement plants. Topics include improved air quality, better dust recovery, extended filter life, and compliance with emission standards. You'll also highlight how Aditya Horizon's custom-fit filter bags enhance system uptime and environmental performance.",
            target: "Cement plant engineers, environmental officers"
        },
        {
            title: "Liquid vs. Dust Filter Bags: What's the Difference and When to Use Each?",
            excerpt: "Though they may look similar, liquid and dust filter bags serve very different purposes. This blog compares the construction, application, and filtration mechanism of each. Dust bags are used for dry filtration in baghouses, while liquid filter bags are used in processing chemicals, oils, and other fluids. This helps industries with hybrid needs (like food, pharma, and chemicals) choose the right filtration solution.",
            target: "Procurement teams, process engineers"
        },
        {
            title: "5 Signs Your Filter Bags Need Replacing – Before System Failure Occurs",
            excerpt: "Many industries suffer from unexpected filter failures due to worn-out or damaged filter bags. This practical guide lists key warning signs, such as increased pressure drop, visible dust emissions, bag material tearing, and decreased airflow. It also offers preventative maintenance tips and explains how your team can support timely replacements to avoid shutdowns.",
            target: "Maintenance supervisors, operations managers"
        },
        {
            title: "Custom Filter Bags: How Tailor-Made Solutions Increase Plant Performance",
            excerpt: "Off-the-shelf filter bags may not fit your application's size, flow rate, or filtration challenge. This article promotes the benefits of custom filter bag manufacturing—like precision sizing, specialized coatings, reinforced stitching, and high-efficiency media. It positions Aditya Horizon as a flexible partner capable of designing, sourcing, and delivering bags that meet even non-standard filter housings.",
            target: "OEMs, design engineers, technical buyers"
        },
        {
            title: "Understanding Micron Ratings in Industrial Filter Bags",
            excerpt: "Micron ratings determine how fine the particles are that your filter bag can capture—but many users misunderstand what the ratings mean in real-world performance. This educational blog explains absolute vs. nominal ratings, particle retention, and how to match micron levels with your industry's needs (e.g., food safety, pharma purity, chemical filtration).",
            target: "Quality control teams, product designers"
        },
        {
            title: "Common Filtration System Problems and How Filter Bags Solve Them",
            excerpt: "This blog explores real-world issues in industrial filtration—like poor airflow, emission violations, high pressure drops, and product loss. It then explains how proper selection and maintenance of filter bags can address each challenge. You can also include a troubleshooting checklist and promote the advantages of using premium-quality filter media.",
            target: "System integrators, plant operators, quality auditors"
        },
        {
            title: "Filter Bag Maintenance Tips to Extend Product Life",
            excerpt: "Industrial filtration is a recurring cost—so maximizing the lifespan of filter bags is critical. This blog will list best practices such as routine inspections, proper bag cleaning methods, optimal pulse-jet system settings, and correct installation techniques. You'll position Aditya Horizon as not just a supplier, but a partner in long-term efficiency.",
            target: "Equipment maintenance staff, plant technicians"
        },
        {
            title: "Environmental Benefits of Industrial Filter Bags in Air Pollution Control",
            excerpt: "Filter bags are not just about plant performance—they also play a key role in environmental protection. This article discusses how efficient filtration reduces PM2.5 and PM10 emissions, helps meet national and international pollution standards (CPCB, EPA, EU norms), and supports sustainability initiatives in cement, power, and chemical sectors. It's perfect for ESG-driven clients.",
            target: "Sustainability officers, compliance managers, corporate buyers"
        }
    ],
    'bearings': [
        {
            title: "Tapered Roller Bearings: Design, Application, and Performance Benefits",
            excerpt: "This blog explains the engineering behind tapered roller bearings—highlighting how their geometry handles both radial and axial loads efficiently. It will explore why these bearings are ideal for high-load and high-speed applications in gearboxes, vehicles, and heavy machinery. Case examples from automotive and industrial settings will add depth and relevance.",
            target: "Mechanical engineers, OEM buyers, plant designers"
        },
        {
            title: "Inside the Bearing: Manufacturing Process from Forging to Finish",
            excerpt: "Walk readers through Aditya Horizon's step-by-step production process—from forging blanks in Rajkot to CNC machining and final bearing assembly. Emphasize precision, material quality, and in-house capabilities. This builds trust and shows your technical expertise and control over quality assurance.",
            target: "B2B clients, sourcing agents, quality auditors"
        },
        {
            title: "Bearing Lubrication: Why It's Critical for Longevity and Efficiency",
            excerpt: "Lubrication errors are a major cause of bearing failure. This blog covers lubrication types (grease vs. oil), maintenance intervals, sealing options, and consequences of over- or under-lubrication. It's a practical guide for maintenance teams seeking to extend equipment lifespan.",
            target: "Maintenance engineers, service teams, fleet operators"
        },
        {
            title: "Understanding Cup & Cone Bearings – And How to Identify a Quality Set",
            excerpt: "Many buyers don't fully understand the importance of matching cup and cone tolerances for optimal performance. This article educates readers on selecting properly machined bearing sets, ensuring fitment accuracy, and avoiding mix-match issues that cause noise or early failure.",
            target: "Spare parts dealers, tractor/mechanical workshops, OEM suppliers"
        },
        {
            title: "5 Common Causes of Bearing Failure and How to Prevent Them",
            excerpt: "A troubleshooting guide focused on misalignment, improper installation, contamination, overload, and fatigue. You'll explain how to diagnose these issues and recommend preventative steps—along with how Aditya Horizon bearings are built to mitigate these risks.",
            target: "Workshop technicians, machinery operators, plant engineers"
        },
        {
            title: "Why CNC Precision Matters in Bearing Manufacturing",
            excerpt: "Precision is everything in bearing manufacturing. This blog highlights how CNC turning and grinding ensure tolerance accuracy, surface finish, and overall performance. Include photos or videos from your production unit to show your investment in advanced technology.",
            target: "Procurement managers, industrial automation teams, quality control professionals"
        },
        {
            title: "Bearing Applications in Agricultural Machinery – Key Considerations",
            excerpt: "Agricultural equipment like tractors and harvesters work in harsh, dusty, and vibration-heavy conditions. This blog discusses how durable bearings ensure smoother gear shifts, reduce downtime, and improve machine reliability in the field. Great for your rural and farming industry clients.",
            target: "Agri OEMs, tractor parts dealers, rural distributors"
        },
        {
            title: "OEM vs. Aftermarket Bearings: Which One Should You Trust?",
            excerpt: "Not all bearings are created equal. This blog helps buyers understand the difference between high-quality OEM-grade bearings and cheap aftermarket variants with inconsistent metallurgy or poor finishing. Reinforce Aditya Horizon's position as a reliable OEM-compliant supplier.",
            target: "Vehicle service stations, spare parts retailers, OEMs"
        },
        {
            title: "How to Choose the Right Bearing for Your Gearbox or Transmission",
            excerpt: "Not all bearings suit all loads, speeds, or lubrication conditions. This blog offers a selection guide based on load type, speed, fitment location, shaft size, and temperature. Include charts or quick-reference tools for added value.",
            target: "Machinery designers, gearbox manufacturers, automotive OEMs"
        },
        {
            title: "Industrial Bearing Inspection: Tips for Identifying Wear and Tear",
            excerpt: "This hands-on guide covers how to inspect a bearing without lab equipment—visual cracks, spalling, color changes, and play. Educates your readers on when to repair vs. replace, helping reduce failure risks.",
            target: "Maintenance technicians, repair shop owners"
        },
        {
            title: "Export-Ready Bearings: How We Meet International Tolerances and Standards",
            excerpt: "This blog focuses on your export readiness—explaining how you meet ISO/DIN/ANSI tolerances, traceability, material testing, and packaging for international shipments. Builds credibility for global clients.",
            target: "Export agents, overseas buyers, international partners"
        },
        {
            title: "Choosing Bearing Material: Chrome Steel vs Stainless Steel vs Others",
            excerpt: "Different environments require different bearing materials. This post compares chromium steel, stainless steel, and ceramics—looking at corrosion resistance, load capacity, and thermal expansion. A technical guide for design engineers and OEM decision-makers.",
            target: "Mechanical designers, R&D teams, high-spec OEMs"
        }
    ],
    'clutch-brake-pads': [
        {
            title: "How Clutch Brake Pads Work in Tractors and Farm Machinery",
            excerpt: "This blog educates users about the core function of clutch brake pads—how they control power transmission between engine and gearbox, and why they're vital in tractors for smooth operation and safe braking. Diagrams can illustrate how pads interact with pressure plates and flywheels. It's ideal for OEMs, mechanics, and technical buyers who want to understand what's behind the performance.",
            target: "Tractor operators, agri-tech engineers, repair workshops"
        },
        {
            title: "Why High-Quality Brake Sleeves Matter in Agricultural Vehicles",
            excerpt: "Brake sleeves are small but critical castings in heavy-duty braking systems. This post highlights how quality casting, correct hardness, and precise machining impact performance, durability, and heat dissipation. It helps educate buyers on avoiding cheap, brittle parts that fail under stress.",
            target: "Casting buyers, OEM part distributors, quality control teams"
        },
        {
            title: "5 Symptoms of Worn Clutch Pads You Shouldn't Ignore",
            excerpt: "This blog lists common signs like slippage, difficulty in shifting gears, increased engine noise, burning smells, and vibration—explaining what each symptom indicates and when replacement is necessary. This makes it easier for end-users and service centers to identify and act before a full clutch failure occurs.",
            target: "Mechanics, farm equipment owners, tractor dealers"
        },
        {
            title: "OEM-Grade Brake Components vs Local Market Alternatives",
            excerpt: "This post compares OEM-standard clutch and brake components with unbranded, lower-quality alternatives found in local markets. It covers design tolerances, friction material composition, surface finish, and durability—emphasizing why using substandard parts can damage expensive machinery.",
            target: "Spare parts buyers, fleet managers, agri workshop owners"
        },
        {
            title: "Casting Quality in Brake Components – What Makes or Breaks a Part",
            excerpt: "Cast brake sleeves and clutch components require high metallurgical integrity to handle friction and heat. This blog dives into foundry quality factors: controlled alloy mix, no porosity, dimensional precision, and post-casting inspection. Use this to show the advantage of your family-owned Rajkot casting facility.",
            target: "Foundry professionals, OEM suppliers, quality assurance teams"
        },
        {
            title: "Choosing Brake Pads for Tough Terrain and Heavy Loads",
            excerpt: "Farms and construction zones involve dusty, uneven, and high-load environments. This blog helps users select the right brake pads for tractors and loaders that operate under tough terrain. You'll explain pad hardness, slotting patterns, and fade resistance for frequent stop/start activity.",
            target: "Rural mechanics, farm machinery dealers, fleet owners"
        },
        {
            title: "How Clutch Sleeves Impact Gear Engagement and Safety",
            excerpt: "The clutch sleeve plays a key role in engaging and disengaging gears smoothly. This technical blog explains how material quality, surface smoothness, and tight tolerances affect driver control and equipment safety. Position your precision-cast sleeves as a safe and efficient choice.",
            target: "Agricultural engineers, tractor manufacturers, quality auditors"
        },
        {
            title: "Best Practices for Installing Tractor Clutch Pads",
            excerpt: "Improper installation can cause premature wear or unsafe operation. This blog offers a step-by-step checklist for correct installation: alignment, torque specs, bedding-in period, and inspection. Great for training and onboarding new mechanics or service center teams.",
            target: "Tractor repair technicians, service center heads"
        },
        {
            title: "Why Your Tractor Brake System Deserves More Attention",
            excerpt: "Many tractor owners focus only on engines and tires—neglecting the braking system. This awareness blog outlines how worn or mismatched components (pads, sleeves, linings) lead to accidents, higher fuel consumption, and longer stopping distances. Emphasize safety and efficiency.",
            target: "Tractor owners, safety managers, agri-fleet operators"
        },
        {
            title: "Custom Manufacturing for Brake Pads: Meeting Non-Standard Requirements",
            excerpt: "Some equipment models require non-standard sizes, shapes, or materials. This blog showcases your ability to deliver made-to-order brake pads and sleeves that meet special technical needs, from low-volume spares to new tractor models.",
            target: "OEM buyers, regional dealers, spare parts designers"
        },
        {
            title: "Heat, Friction & Load: The Engineering Science Behind Brake Pads",
            excerpt: "This advanced blog explores the science of brake pad materials—coefficient of friction, wear rate, temperature threshold, and load-bearing capacity. It's perfect for a more technical audience who want to understand what makes a high-performance brake pad.",
            target: "R&D engineers, industrial machinery designers, OEM evaluators"
        }
    ]
};
export const carouselData = {
    'bearings': [
        {
            id: 1,
            image: "/images/carouselImages/bearing1.jpeg"
        },
        {
            id: 2,
            image: "/images/carouselImages/bearing2.jpeg"
        },
        {
            id: 3,
            image: "/images/carouselImages/bearing3.jpeg"
        },
        {
            id: 4,
            image: "/images/carouselImages/bearing4.jpeg"
        },
        {
            id: 5,
            image: "/images/carouselImages/bearing5.jpeg"
        }
    ],
    'filterBags': [
        {
            id: 1,
            image: "/images/carouselImages/filterbag1.jpeg"
        },
        {
            id: 2,
            image: "/images/carouselImages/filterbag2.jpeg"
        },
        {
            id: 3,
            image: "/images/carouselImages/filterbag3.jpeg"
        },
        {
            id: 4,
            image: "/images/carouselImages/filterbag4.jpeg"
        },
        {
            id: 5,
            image: "/images/carouselImages/filterbag5.jpeg"
        },
        {
            id: 6,
            image: "/images/carouselImages/filterbag6.jpeg"
        },
        {
            id: 7,
            image: "/images/carouselImages/filterbag7.jpeg"
        },
        {
            id: 8,
            image: "/images/carouselImages/filterbag8.jpeg"
        },
        {
            id: 9,
            image: "/images/carouselImages/filterbag9.jpeg"
        },
        {
            id: 10,
            image: "/images/carouselImages/filterbag10.jpeg"
        },
        {
            id: 11,
            image: "/images/carouselImages/filterbag11.jpeg"
        }
    ],
    'breakdisk': [
        {
            id: 1,
            image: "/images/carouselImages/breakdisk1.jpeg"
        },
        {
            id: 2,
            image: "/images/carouselImages/breakdisk2.jpeg"
        },
        {
            id: 3,
            image: "/images/carouselImages/breakdisk3.jpeg"
        },
        {
            id: 4,
            image: "/images/carouselImages/breakdisk4.jpeg"
        },
        {
            id: 5,
            image: "/images/carouselImages/breakdisk5.jpeg"
        },
        {
            id: 6,
            image: "/images/carouselImages/breakdisk6.jpeg"
        },
        {
            id: 7,
            image: "/images/carouselImages/breakdisk7.jpeg"
        },
        {
            id: 8,
            image: "/images/carouselImages/breakdisk8.jpeg"
        },
        {
            id: 9,
            image: "/images/carouselImages/breakdisk9.jpeg"
        },
        {
            id: 10,
            image: "/images/carouselImages/breakdisk10.jpeg"
        },
        {
            id: 11,
            image: "/images/carouselImages/breakdisk11.jpeg"
        },
    ]
}

export const productCategories: Record<string, ProductCategory> = {
    "filter-bags": {
        name: "Filter Bags",
        subCategories: [
            {
                name: "Standard Needle Felt Filter Bag",
                products: [
                    {
                        id: 1,
                        image: "/images/products/standardNeedle/polypropyleneFelt.png",
                        name: "Polypropylene Needle Felt Filter Bags",
                        description:
                            "Engineered for reliable and efficient liquid filtration, our filter bags are manufactured using high-performance media tailored to meet process industry requirements. Available in needle-felt, monofilament, and multi-filament materials, they provide effective particulate removal across a wide range of applications.",
                        description2: "Ideal for processes involving high solids load or viscous fluids, these filter bags ensure consistent filtration performance and extended service life. ",
                        keyBenefits: [
                            "Suitable for high-contamination or high-viscosity filtration",
                            "Wide range of media options to match application needs",
                            "Reliable solid-liquid separation for various industries",
                            "Cost-effective solution for demanding filtration challenges",
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": " 1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "pH Range": "1 – 14",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request",
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' },
                        ],
                        customOptions: "Custom options available for diameters, lengths, collars, and fittings on request."
                    },
                    {
                        id: 2,
                        image: "/images/products/standardNeedle/polyesterFelt.png",
                        name: "Polyester Needle Felt Filter Bags",
                        description: '(PE Needle Felt Series) ',
                        description2:
                            "Designed for consistent and durable performance, our polyester felt filter bags are ideal for a wide range of industrial liquid filtration applications. Manufactured using thermally bonded polyester fibers, they offer excellent mechanical strength, high temperature resistance, and efficient particle retention",
                        description3: "Suitable for processes with elevated temperatures or varying pH conditions, these filter bags deliver reliable filtration and extended service life",
                        keyBenefits: [
                            "High mechanical strength and abrasion resistance",
                            "Effective depth filtration for fine particles",
                            "Stable performance in elevated temperature applications",
                            "Available with sewn or welded seams for leak-proof operation",
                            "Suitable for general industrial use and demanding environments"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": " 1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 135°C (275°F)",
                            "pH Range": "4 – 13",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request",
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' },
                        ],
                        customOptions: "Custom sizes and collar options available to suit specific system requirements."
                    },
                    {
                        id: 3,
                        image: "/images/products/standardNeedle/nomexFelt.png",
                        name: "Nomex® Felt Filter Bags",
                        description: "(Aramid Needle Felt Series)",
                        description2:
                            "Nomex® (Aramid) felt filter bags are engineered for high-temperature filtration and harsh chemical environments. Made from aramid fibers, these bags offer exceptional thermal stability, oxidation resistance, and long-term durability, making them ideal for demanding industrial processes.",
                        description3:
                            "Commonly used in high-temperature liquid filtration applications, Nomex® filter bags ensure consistent performance and extended operational life.",
                        keyBenefits: [
                            "Excellent temperature resistance up to 200°C (392°F)",
                            "Strong resistance to chemical degradation and oxidation",
                            "Ideal for hot liquid filtration and aggressive environments",
                            "Durable depth filtration with high particle retention",
                            "Available in sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 200°C (392°F)",
                            "pH Range": "4 – 9",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom configurations available upon request for specific system needs."
                    },
                    {
                        id: 4,
                        image: "/images/products/standardNeedle/acrylicNeedle.png",
                        name: "Acrylic Felt Filter Bags",
                        description: "(Acrylic Needle Felt Series)",
                        description2:
                            "Acrylic needle felt filter bags are designed for applications involving aggressive chemical environments and moderate temperatures. Known for their excellent hydrolysis and acid resistance, these bags are well-suited for filtration tasks in industries where pH fluctuations and moisture are common.",
                        description3:
                            "Their durable structure ensures reliable particle retention and stable performance under challenging conditions.",
                        keyBenefits: [
                            "Superior resistance to hydrolysis and acidic conditions",
                            "Reliable performance in moist and chemical-rich environments",
                            "Good temperature stability for medium-heat applications",
                            "Durable needle felt structure for high dirt-holding capacity",
                            "Available in both sewn and welded seam options"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 125°C (257°F)",
                            "pH Range": "3 – 10",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions:
                            "Custom sizes and configurations available to suit specific filtration systems."
                    }
                ],
            },

            {
                name: "High-Temperature Resistant Filter Bags",
                products: [
                    {
                        id: 5,
                        image: "/images/products/highTempRes/ppsRyton.png",
                        name: "PPS (Ryton°) Filter Bag",
                        description:
                            "(Polyphenylene Sulfide Needle Felt Series)",
                        description2: "PPS (Ryton®) filter bags are built for extreme chemical and thermal stability in the most demanding industrial environments. Known for their excellent resistance to acids, alkalis, and oxidants, PPS bags are ideal for applications involving aggressive gases, moisture, and high temperatures.",
                        description3: "These bags deliver reliable performance in pulse-jet dust collectors and high-temperature liquid filtration systems where standard materials may fail.",
                        keyBenefits: [
                            "Exceptional resistance to acids, alkalis, and solvents ",
                            "Performs reliably in high-temperature, moist, and chemical-rich conditions ",
                            "Suitable for applications with oxidative and thermal stress ",
                            "Stable filtration efficiency and long operational life",
                            "Sewn or welded seams for secure and leak-free operation"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 190°C (374°F)",
                            "pH Range": "1 – 14",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request",
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom sizes, collars, and configurations available on request to meet unique filtration system requirements."
                    },
                    {
                        id: 6,
                        image: "/images/products/highTempRes/nomexArmide.png",
                        name: "Nomex® (Aramid) High Temperature Filter Bags",
                        description: "(Aramid Needle Felt Series)",
                        description2:
                            "Nomex® high-temperature filter bags are specially designed for filtration in demanding thermal and chemical environments. Made from aramid fibers, they maintain structural integrity and filtration efficiency under continuous high-temperature conditions, making them ideal for industrial processes involving hot gases or liquids.",
                        description3:
                            "These bags are widely used where heat resistance, durability, and chemical stability are essential.",
                        keyBenefits: [
                            "Withstands continuous temperatures up to 200°C (392°F)",
                            "Excellent resistance to oxidation and chemical degradation",
                            "Ideal for hot liquid or gas filtration in harsh environments",
                            "Durable depth filtration structure for high solids retention",
                            "Welded or sewn seam construction for leak-proof performance"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 200°C (392°F)",
                            "pH Range": "4 – 9",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom-built options available for non-standard sizes or system-specific designs."
                    },
                    {
                        id: 7,
                        image: "/images/products/highTempRes/p84Filter.png",
                        name: "P84 Filter Bags",
                        description: "(Polyimide Needle Felt Series)",
                        description2:
                            "P84 polyimide filter bags are designed for high-temperature filtration applications with complex chemical exposure. Known for their unique multi-lobed fiber structure, P84 bags offer superior filtration efficiency and excellent resistance to thermal and chemical degradation.",
                        description3:
                            "Ideal for industries like cement, asphalt, and power generation, these bags maintain high performance even under extreme operating conditions.",
                        keyBenefits: [
                            "Withstands continuous temperatures up to 260°C (500°F)",
                            "Excellent resistance to acids, solvents, and thermal stress",
                            "High filtration efficiency due to fine fiber structure",
                            "Low emissions and extended service life in harsh conditions",
                            "Welded or sewn seams for leak-tight performance"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 260°C (500°F)",
                            "pH Range": "4 – 9",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request (limited use)"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom sizes and system-specific configurations available on request."
                    },
                    {
                        id: 8,
                        image: "/images/products/highTempRes/fiberGlass.png",
                        name: "Fiberglass Filter Bags",
                        description: "(With PTFE or Acid-Resistant Finish)",
                        description2:
                            "Fiberglass filter bags are engineered for high-temperature and chemically aggressive environments, offering exceptional filtration stability and mechanical strength. With optional PTFE membrane or acid-resistant finishes, these bags are highly effective in applications involving corrosive gases, dust, or particles at elevated temperatures.",
                        description3:
                            "They are widely used in cement kilns, steel plants, incinerators, and other heavy industrial processes requiring reliable filtration at continuous high temperatures.",
                        keyBenefits: [
                            "High-temperature resistance up to 260°C (500°F)",
                            "Optional PTFE coating for enhanced chemical resistance and surface filtration",
                            "Acid-resistant finish available for harsh chemical exposure",
                            "Excellent dimensional stability and minimal shrinkage",
                            "High air permeability with long service life",
                            "Available with sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 260°C (500°F)",
                            "pH Range": "4 – 9 (up to 1–14 with PTFE finish)",
                            "Seam Options": "Sewn / Welded",
                            "Finish Options": "PTFE Coated, Acid Resistant, Silicon Treated",
                            "Ring Types": "Stainless Steel, Galvanized, PP/PE (for select setups)"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom fabric treatments and sizes available to match system and process requirements."
                    },
                    {
                        id: 9,
                        image: "/images/products/highTempRes/ptfeFilter.png",
                        name: "PTFE Filter Bags",
                        description: "(Polytetrafluoroethylene Needle Felt Series)",
                        description2:
                            "PTFE (Polytetrafluoroethylene) filter bags are engineered for the most extreme filtration environments, offering unparalleled resistance to chemicals, heat, and moisture. With a near-universal chemical resistance profile and outstanding temperature stability, PTFE bags are the premium choice for filtration in aggressive and high-temperature applications where no other media can endure.",
                        description3:
                            "These filter bags are ideal for industries such as incineration, chemical processing, power generation, and high-purity manufacturing, where long service life and consistent performance are critical.",
                        keyBenefits: [
                            "Outstanding resistance to all chemicals, including strong acids, alkalis, solvents, and oxidants",
                            "Reliable operation at continuous temperatures up to 260°C (500°F)",
                            "Non-stick surface helps prevent dust cake buildup and reduces cleaning frequency",
                            "Exceptional resistance to hydrolysis and oxidative degradation",
                            "Stable filtration efficiency and extended operational life even in extreme conditions",
                            "Available with sewn or welded seams for leak-proof construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Continuous up to 260°C (500°F)",
                            "pH Range": "1 – 14 (full spectrum chemical compatibility)",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized",
                            "Food-Grade (FDA)": "Available on request"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom sizes, collars, and configurations available on request to meet specific filtration system requirements."
                    }
                ],
            },
            {
                name: 'Antistatic / Conductive Filter Bags (ATEX Compliant) ',
                products: [
                    {
                        id: 10,
                        image: "/images/products/atexCompliant/antistaticPolyester.png",
                        name: "Antistatic Polyester Filter Bags",
                        description: "(Conductive Needle Felt Series)",
                        description2:
                            "Antistatic polyester filter bags are specially developed for use in environments where dust buildup can lead to explosion risks or static discharge. These filter bags are embedded with conductive fibers that safely dissipate static electricity, making them ideal for industries handling combustible dust or volatile materials.",
                        description3:
                            "They combine the mechanical strength of polyester felt with electrostatic safety for critical filtration applications.",
                        keyBenefits: [
                            "Static-dissipative properties for explosion-prone environments",
                            "Strong mechanical durability and abrasion resistance",
                            "Effective depth filtration with high dirt-holding capacity",
                            "Compatible with both dry and moist filtration processes",
                            "Available in sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 135°C (275°F)",
                            "pH Range": "4 – 9",
                            "Conductivity Type": "Stainless steel or carbon fiber blend",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized solutions available for varying conductivity levels, dimensions, and collar designs."
                    },
                    {
                        id: 11,
                        image: "/images/products/atexCompliant/antistaticPtfe.png",
                        name: "Antistatic PTFE / Polypropylene Filter Bags",
                        description: "(Conductive Needle Felt Series)",
                        description2:
                            "Antistatic PTFE and Polypropylene filter bags are engineered for safe and efficient filtration in static-sensitive or explosion-prone environments. These bags incorporate conductive fibers that dissipate static electricity, reducing the risk of ignition in processes involving combustible dust or volatile substances.",
                        description3:
                            "They offer a combination of static protection, chemical resistance, and effective particulate retention, making them suitable for demanding industrial applications.",
                        keyBenefits: [
                            "Static-dissipative properties for hazardous or explosive environments",
                            "Excellent chemical resistance across a wide pH range",
                            "High dirt-holding capacity and consistent filtration performance",
                            "PTFE for high-temperature, aggressive media; PP for economical use",
                            "Available in sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "<b>PTFE</b>: Up to 260°C (500°F), <b>Polypropylene</b>: Up to 90°C (194°F)",
                            "pH Range": "PTFE: 1 – 14; Polypropylene: 1 – 14",
                            "Conductivity Type": "Stainless steel or carbon fiber blend",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized solutions available for varying conductivity levels, dimensions, and collar designs."
                    },
                    {
                        id: 12,
                        image: "/images/products/atexCompliant/antistaticNomex.png",
                        name: "Antistatic Nomex® / Aramid Filter Bags",
                        description: "(Conductive Needle Felt Series)",
                        description2:
                            "Antistatic Nomex® (Aramid) filter bags are specially developed for high-temperature filtration applications where static discharge poses a safety risk. Constructed from aramid fibers with conductive elements, these bags combine excellent thermal stability with static-dissipative protection—ideal for explosive dust environments.",
                        description3:
                            "They are widely used in industries such as cement, steel, and chemical processing, where both heat and electrostatic control are critical.",
                        keyBenefits: [
                            "Static-dissipative properties for explosion-prone, high-temperature environments",
                            "Excellent heat resistance and chemical stability",
                            "Strong mechanical strength and abrasion resistance",
                            "Suitable for dry, high-load filtration processes",
                            "Available in sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 200°C (392°F)",
                            "pH Range": "4 – 9",
                            "Conductivity Type": "Stainless steel or carbon fiber blend",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized solutions available for varying conductivity levels, high-temperature applications, and collar designs."
                    },
                    {
                        id: 13,
                        image: "/images/products/atexCompliant/antistaticAcralic.png",
                        name: "Antistatic Acrylic Filter Bags",
                        description: "(Conductive Needle Felt Series)",
                        description2:
                            "Antistatic acrylic filter bags are designed for filtration in moisture-rich and chemically aggressive environments where static discharge control is essential. With conductive fibers integrated into the acrylic needle felt, these bags provide static dissipation while maintaining excellent resistance to hydrolysis and acidic gases.",
                        description3:
                            "Ideal for medium-temperature applications involving explosive dust and variable pH conditions, they offer dependable performance and extended filter life.",
                        keyBenefits: [
                            "Static-dissipative properties for explosion-prone and moist environments",
                            "Superior resistance to hydrolysis and acidic conditions",
                            "Effective filtration in mid-range temperature operations",
                            "Strong mechanical durability with high particle retention",
                            "Available in sewn or welded seam construction"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 125°C (257°F)",
                            "pH Range": "3 – 10",
                            "Conductivity Type": "Stainless steel or carbon fiber blend",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized solutions available for specific conductivity needs, moisture conditions, and system configurations."
                    }
                ]
            },
            {
                name: 'Oil-Absorbent & Hydrocarbon Filter Bags ',
                products: [
                    {
                        id: 14,
                        image: "/images/products/oilAbsorbent/oilAbsorbent.png",
                        name: "Oil Absorbent Filter Bags",
                        description: "(PP Meltblown / Resin / Composite Media)",
                        description2:
                            "Oil absorbent filter bags are specifically designed to capture and retain oil-based contaminants from water and industrial liquids. Made from meltblown polypropylene, resin-treated fibers, or multi-layer composite materials, these bags selectively absorb hydrocarbons while repelling water—making them ideal for oil-water separation and process fluid purification.",
                        description3:
                            "They are commonly used in metalworking, wastewater treatment, automotive, and petrochemical applications where trace oil removal is critical.",
                        keyBenefits: [
                            "Selective absorption of hydrocarbons from water or fluids",
                            "High oil-holding capacity with low pressure drop",
                            "Multi-layer or resin-enhanced designs for increased efficiency",
                            "Hydrophobic construction repels water while capturing oil",
                            "Suitable for batch and continuous filtration systems"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "1, 5, 10, 25, 50 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "Media Types": "PP Meltblown, Oil-Resin Treated, Composite Multi-layer",
                            "Seam Options": "Sewn / Welded",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized configurations available for enhanced oil retention, viscosity ranges, and flow requirements."
                    }
                ]
            },
            {
                name: 'Mesh Filter Bags (Liquid Filtration, Pre-filtration)',
                products: [
                    {
                        id: 15,
                        image: "/images/products/meshFilter/nylonMonofilaments.png",
                        name: "Nylon Monofilament Filter Bags (NMO)",
                        description: "(Precision Surface Filtration – Woven Mesh Series)",
                        description2:
                            "Nylon Monofilament (NMO) filter bags are designed for surface filtration where precise particle retention and repeatable performance are required. Made from woven single-filament nylon mesh, these bags deliver consistent pore sizes and excellent strength, making them ideal for applications with low solids loading and high flow rates.",
                        description3:
                            "Commonly used in coatings, inks, chemicals, water treatment, and electronics manufacturing, they provide sharp particle cut-off and easy cleaning or reuse in selected processes.",
                        keyBenefits: [
                            "Precise surface filtration with defined pore size",
                            "Reusable in suitable low-viscosity applications",
                            "Smooth mesh surface allows easy cake release",
                            "Excellent strength and dimensional stability",
                            "Ideal for low solids loading and high flow systems"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "25, 50, 75, 100, 150, 200, 250, 400, 600, 800 µm",
                            "Operating Temperature": "Up to 120°C (248°F)",
                            "Media Type": "Woven Nylon Monofilament Mesh",
                            "pH Range": "4 – 10",
                            "Seam Options": "Sewn",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom micron ratings and sizes available to match process-specific needs."
                    },
                    {
                        id: 16,
                        image: "/images/products/meshFilter/petMonofilaments.png",
                        name: "Polyester Monofilament Filter Bags (PEMO)",
                        description: "(Precision Surface Filtration – Woven Mesh Series)",
                        description2:
                            "Polyester Monofilament (PEMO) filter bags are made from woven single-filament polyester mesh, designed for precise surface filtration applications. These bags offer excellent strength, dimensional stability, and consistent particle retention, making them ideal for filtration processes with low solids loading and where repeatable performance is essential.",
                        description3:
                            "They are suitable for use in paints, resins, water treatment, and other industrial applications requiring defined pore control and easy media handling.",
                        keyBenefits: [
                            "Sharp particle cut-off with consistent pore size control",
                            "Reusable in selected low-viscosity applications",
                            "Smooth monofilament surface for easy cleaning and cake release",
                            "Excellent tensile strength and durability",
                            "Suitable for high-flow, low-loading filtration operations"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "25, 50, 75, 100, 150, 200, 250, 400, 600 µm",
                            "Operating Temperature": "Up to 150°C (302°F)",
                            "Media Type": "Woven Polyester Monofilament Mesh",
                            "pH Range": "4 – 10",
                            "Seam Options": "Sewn",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom micron ratings and sizes available to suit specific system and application needs."
                    },
                    {
                        id: 17,
                        image: "/images/products/meshFilter/ppMonofilaments.png",
                        name: "Polypropylene Monofilament Filter Bags (PPMO)",
                        description: "(Precision Surface Filtration – Woven Mesh Series)",
                        description2:
                            "Polypropylene Monofilament (PPMO) filter bags are made from strong, single-filament woven polypropylene mesh for precision surface filtration. These bags are ideal for low-solids, high-flow applications where sharp particle retention and chemical compatibility are essential.",
                        description3:
                            "Offering excellent resistance to a wide pH range, they are well-suited for use in chemical processing, water treatment, and food-grade liquid filtration.",
                        keyBenefits: [
                            "Defined pore structure for accurate particle removal",
                            "Chemically resistant to acids, alkalis, and solvents",
                            "Smooth mesh surface allows easy cake release and rinsing",
                            "Durable construction for repeated use in select processes",
                            "Ideal for high-flow, low-viscosity filtration"
                        ],
                        technicalSpecifications: {
                            "Micron Ratings": "25, 50, 75, 100, 150, 200, 250, 400, 600 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "Media Type": "Woven Polypropylene Monofilament Mesh",
                            "pH Range": "1 – 14",
                            "Seam Options": "Sewn",
                            "Ring Types": "PP/PE, Stainless Steel, Galvanized"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom sizes and micron ratings available for application-specific needs."
                    }
                ]
            },
            {
                name: 'Anode Filter Bags',
                products: [
                    {
                        id: 18,
                        image: "/images/products/anodeFilter/ppAnodeFilter.png",
                        name: "Polypropylene Anode Filter Bags (PP Felt / Woven)",
                        description: "(Electroplating & Surface Treatment Filtration)",
                        description2:
                            "Polypropylene anode filter bags are designed to wrap around anodes in electroplating baths, preventing metal sludge and particulate contamination from entering the plating solution. Available in both needle-punched felt and woven mesh constructions, these bags ensure clean electrolyte flow, improved plating quality, and reduced maintenance downtime.",
                        description3:
                            "They are widely used in nickel, zinc, copper, and precious metal plating processes.",
                        keyBenefits: [
                            "Prevents sludge and particles from contaminating plating baths",
                            "Improves deposit quality and extends bath life",
                            "Available in felt (depth filtration) and woven (surface filtration) media",
                            "Excellent chemical resistance to acids and alkalis",
                            "Easy to install, remove, and replace on most anode baskets"
                        ],
                        technicalSpecifications: {
                            "Media Type": "PP Needle Felt or Woven Monofilament",
                            "Micron Ratings": "Felt: 1, 5, 10, 25, 50 µm; Woven: 100–300 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "pH Range": "1 – 14",
                            "Closure Options": "Tie cord, Velcro, or custom stitching",
                            "Shape": "Round, rectangular, or custom fit for anode baskets"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom sizes, stitching, and closures available to fit any anode configuration or plating setup."
                    },
                    {
                        id: 19,
                        image: "/images/products/anodeFilter/peAnodeFilter.png",
                        name: "Polyester Anode Filter Bags (PE Felt / Woven)",
                        description: "(Electroplating & Surface Treatment Filtration)",
                        description2:
                            "Polyester (PE) anode filter bags are used to encase anodes in electroplating tanks, acting as a barrier that prevents metal sludge, particulates, and impurities from contaminating the plating bath. Available in needle-punched felt and woven monofilament forms, these bags help maintain electrolyte clarity, enhance deposit quality, and extend bath life.",
                        description3:
                            "They are suitable for plating processes including zinc, copper, and decorative chrome, particularly where higher operating temperatures are required.",
                        keyBenefits: [
                            "Reliable particle retention for cleaner electroplating",
                            "Available in felt (depth filtration) and woven (surface filtration) media",
                            "Strong resistance to abrasion and chemical degradation",
                            "Withstands higher temperatures compared to PP bags",
                            "Easy to fit over round or flat anode baskets"
                        ],
                        technicalSpecifications: {
                            "Media Type": "PE Needle Felt or Woven Monofilament",
                            "Micron Ratings": "Felt: 1, 5, 10, 25, 50 µm; Woven: 100–300 µm",
                            "Operating Temperature": "Up to 150°C (302°F)",
                            "pH Range": "4 – 9",
                            "Closure Options": "Tie cord, Velcro, or stitched flap",
                            "Shape": "Round, rectangular, or custom"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Customized options available for size, media type, stitching pattern, and closure style based on specific plating applications."
                    },
                    {
                        id: 20,
                        image: "/images/products/anodeFilter/doublelayerPP.png",
                        name: "Double Layer Polypropylene Anode Filter Bags",
                        description: "(Dual-Layer Depth Filtration – For Enhanced Protection)",
                        description2:
                            "Double layer PP anode filter bags are specifically engineered for plating applications requiring extra filtration performance and contamination control. Constructed using two layers of high-quality polypropylene felt, these bags provide increased particulate retention, reduced sludge breakthrough, and extended bath cleanliness—making them ideal for precision electroplating.",
                        description3:
                            "They are commonly used in critical plating processes such as nickel, copper, and precious metals, where deposit quality and electrolyte clarity are essential.",
                        keyBenefits: [
                            "Dual-layer filtration for enhanced particle capture",
                            "Provides added protection against sludge and impurities",
                            "Excellent chemical resistance to acids and alkalis",
                            "Maintains bath purity and reduces tank maintenance frequency",
                            "Ideal for high-purity and fine-tolerance electroplating"
                        ],
                        technicalSpecifications: {
                            "Media Type": "Dual-layer PP Needle Felt",
                            "Micron Ratings": "1, 5, 10, 25, 50 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "pH Range": "1 – 14",
                            "Closure Options": "Tie cord, stitched flap, or Velcro",
                            "Shape": "Round, rectangular, or custom-made"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                            { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                            { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                            { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                        ],
                        customOptions: "Custom configurations available for media thickness, stitching style, closures, and sizes based on plating system requirements."
                    },
                    // {
                    //     id: 21,
                    //     image: "/images/products/",
                    //     name: "Nylon Monofilament Anode Filter Bags",
                    //     description: "(Woven Mesh Surface Filtration – For Electroplating Baskets)",
                    //     description2:
                    //         "Nylon monofilament anode filter bags are made from precision-woven single-filament mesh, offering surface-level filtration for electroplating applications. These bags act as a protective barrier around anode baskets, preventing solid contaminants and metallic sludge from entering the plating solution while allowing smooth electrolyte flow.",
                    //     description3:
                    //         "They are widely used in plating systems for zinc, copper, nickel, and chrome, especially in systems with low sludge load and a need for sharp particle cut-off.",
                    //     keyBenefits: [
                    //         "Consistent surface filtration with defined micron openings",
                    //         "Smooth surface allows easy rinsing and sludge removal",
                    //         "Durable and reusable under appropriate conditions",
                    //         "Low fiber migration and stable pore structure",
                    //         "Suitable for clean plating environments with minimal particulate"
                    //     ],
                    //     technicalSpecifications: {
                    //         "Media Type": "Nylon Monofilament Woven Mesh",
                    //         "Micron Ratings": "100, 150, 200, 250, 300 µm",
                    //         "Operating Temperature": "Up to 120°C (248°F)",
                    //         "pH Range": "4 – 10",
                    //         "Closure Options": "Tie cord, Velcro, or stitched flap",
                    //         "Shape": "Round, rectangular, or custom fit"
                    //     },
                    //     standardSizes: [
                    //         { size: "Size 1", diameter: '7" (180 mm)', length: '16" (410 mm)' },
                    //         { size: "Size 2", diameter: '7" (180 mm)', length: '32" (810 mm)' },
                    //         { size: "Size 3", diameter: '4" (100 mm)', length: '8" (200 mm)' },
                    //         { size: "Size 4", diameter: '4" (100 mm)', length: '14" (356 mm)' }
                    //     ],
                    //     customOptions: "Custom sizes and closures available based on your basket dimensions and plating process requirements."
                    // }
                ]
            },
            {
                name: 'Sparkler Filter Bags',
                products: [
                    {
                        id: 21,
                        image: "/images/products/sparklerFilter/polysterSparkler.png",
                        name: "Polyester Sparkler Filter Bags",
                        description: "(Depth Filtration – For Sparkler / Horizontal Plate Filters)",
                        description2:
                            "Polyester sparkler filter bags are designed for use in sparkler-type horizontal plate filters, offering reliable depth filtration for a variety of liquid processing applications. Made from durable polyester felt, these bags provide high dirt-holding capacity and excellent particle retention, making them ideal for pharmaceuticals, chemicals, edible oils, and cosmetic filtration.",
                        description3:
                            "They ensure clear filtrate, extended cycle times, and reduced downtime in both batch and continuous processes.",
                        keyBenefits: [
                            "Effective depth filtration with uniform media structure",
                            "High dirt-holding capacity for longer filtration cycles",
                            "Excellent mechanical strength and chemical resistance",
                            "Available in multiple diameters and micron ratings",
                            "Suitable for viscous liquids and fine particle filtration"
                        ],
                        technicalSpecifications: {
                            "Media Type": "Polyester Needle Felt",
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 135°C (275°F)",
                            "pH Range": "4 – 9",
                            "Construction": "Stitch-sealed or ultrasonic-welded edges",
                            "Fitting Style": "Center-stitched disc with or without reinforced rim"
                        },
                        standardSizes: [
                            { diameter: "Small", Common_Sizes: '8", 10", 12"' },
                            { diameter: "Medium", Common_Sizes: '14", 16", 18"' },
                            { diameter: "Large", Common_Sizes: '20", 22", 24"' },
                            { diameter: "Custom", Common_Sizes: "Available on request" }
                        ],
                        customOptions: "Custom micron ratings, diameters, and reinforcements can be tailored to fit your specific sparkler filter housing and application."
                    },
                    {
                        id: 22,
                        image: "/images/products/sparklerFilter/ppSparklerbag.png",
                        name: "Polypropylene Sparkler Filter Bags",
                        description: "(Depth Filtration – For Sparkler / Horizontal Plate Filters)",
                        description2:
                            "Polypropylene (PP) sparkler filter bags are designed for use in horizontal plate-type sparkler filters, offering efficient depth filtration for a wide range of industrial and pharmaceutical liquids. Constructed from thermally bonded polypropylene felt, these bags offer excellent chemical resistance and fiber integrity, even in aggressive media.",
                        description3:
                            "Ideal for applications involving acids, solvents, syrups, and specialty chemicals, they help maintain product purity while minimizing filter changeout frequency.",
                        keyBenefits: [
                            "High dirt-holding capacity with depth filtration structure",
                            "Excellent chemical resistance to acids and solvents",
                            "Thermally bonded fibers reduce media migration",
                            "Consistent micron retention across the filter surface",
                            "Suitable for use in food, pharma, and chemical processing"
                        ],
                        technicalSpecifications: {
                            "Media Type": "Polypropylene Needle Felt",
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "pH Range": "1 – 14",
                            "Construction": "Sewn or ultrasonically welded edges",
                            "Fitting Style": "Center-stitched disc with or without reinforced rim"
                        },
                        standardSizes: [
                            { diameter: "Small", Common_Sizes: '8", 10", 12"' },
                            { diameter: "Medium", Common_Sizes: '14", 16", 18"' },
                            { diameter: "Large", Common_Sizes: '20", 22", 24"' },
                            { diameter: "Custom", Common_Sizes: "Available on request" }
                        ],
                        customOptions: "Customized sizes, micron ratings, and collar reinforcements available to suit various sparkler filter models and industry requirements."
                    },
                    {
                        id: 23,
                        image: "/images/products/sparklerFilter/nomexSparkler.png",
                        name: "Nomex® Sparkler Filter Bags",
                        description: "(High-Temperature Depth Filtration – For Sparkler Plate Filters)",
                        description2:
                            "Nomex® (Aramid) sparkler filter bags are engineered for demanding filtration processes involving elevated temperatures and aggressive chemical conditions. Made from high-performance aramid felt, these bags provide excellent thermal stability, mechanical strength, and consistent depth filtration in horizontal plate (sparkler-type) filters.",
                        description3:
                            "They are ideally suited for applications in the pharmaceutical, chemical, and metalworking industries where heat and chemical compatibility are critical.",
                        keyBenefits: [
                            "Withstands high temperatures up to 200°C (392°F)",
                            "Strong mechanical and dimensional stability under load",
                            "High dirt-holding capacity with consistent depth filtration",
                            "Excellent resistance to abrasion and chemical degradation",
                            "Reduces filter replacement frequency in harsh operating environments"
                        ],
                        technicalSpecifications: {
                            "Media Type": "Nomex® (Aramid) Needle Felt",
                            "Micron Ratings": "1, 5, 10, 25, 50, 100 µm",
                            "Operating Temperature": "Up to 200°C (392°F)",
                            "pH Range": "4 – 9",
                            "Construction": "Sewn or ultrasonically welded",
                            "Fitting Style": "Center-stitched disc with or without reinforced rim"
                        },
                        standardSizes: [
                            { diameter: "Small", Common_Sizes: '8", 10", 12"' },
                            { diameter: "Medium", Common_Sizes: '14", 16", 18"' },
                            { diameter: "Large", Common_Sizes: '20", 22", 24"' },
                            { diameter: "Custom", Common_Sizes: "Available on request" }
                        ],
                        customOptions: "Custom sizes, stitching types, and micron ratings are available to meet specific process requirements and equipment configurations."
                    },
                    {
                        id: 24,
                        image: "/images/products/sparklerFilter/ptfeCotedSprakler.png",
                        name: "PTFE Coated Sparkler Filter Bags",
                        description: "(Chemically Resistant & Non-Stick – For Sparkler Plate Filters)",
                        description2:
                            "PTFE coated sparkler filter bags are engineered for highly aggressive chemical environments where product purity, media longevity, and non-stick filtration are critical. These bags feature a high-quality base media (typically polypropylene, polyester, or aramid) coated with a PTFE (polytetrafluoroethylene) membrane, offering exceptional chemical resistance, thermal stability, and easy cake release.",
                        description3:
                            "Ideal for corrosive or high-purity filtration in pharmaceuticals, specialty chemicals, acids, and solvents.",
                        keyBenefits: [
                            "Excellent resistance to corrosive acids, alkalis, and solvents",
                            "Non-stick PTFE surface for easy cake release and cleaning",
                            "High filtration efficiency with low pressure drop",
                            "Long service life in harsh chemical processes",
                            "Maintains structural integrity under high temperature and pressure"
                        ],
                        technicalSpecifications: {
                            "Media Type": "PTFE-Coated Needle Felt (PP / PE / Aramid base)",
                            "Micron Ratings": "1, 5, 10, 25, 50 µm",
                            "Operating Temperature": "<b>PP Base</b>: Up to 90°C (194°F), <b>PE Base</b>: Up to 135°C (275°F), <b>Aramid Base</b>: Up to 200°C (392°F)",
                            "pH Range": "1 – 14",
                            "Construction": "Ultrasonically welded or sewn",
                            "Fitting Style": "Center-stitched disc with or without reinforced rim"
                        },
                        standardSizes: [
                            { diameter: "Small", Common_Sizes: '8", 10", 12"' },
                            { diameter: "Medium", Common_Sizes: '14", 16", 18"' },
                            { diameter: "Large", Common_Sizes: '20", 22", 24"' },
                            { diameter: "Custom", Common_Sizes: "Available on request" }
                        ],
                        customOptions: "Custom configurations available based on chemical compatibility, base media, and sparkler filter size."
                    }
                ]
            },
            {
                name: 'Filter Bags for FBD (Fluidized Bed Dryer)',
                products: [
                    {
                        id: 25,
                        image: "/images/products/fbdbags/polysterFBD.png",
                        name: "Polyester FBD Bags",
                        description: "(Fluidized Bed Dryer – For Pharmaceutical & Bulk Solid Drying)",
                        description2:
                            "Polyester FBD (Fluidized Bed Dryer) bags are specifically designed for use in fluid bed drying equipment used across the pharmaceutical, chemical, and food industries. Manufactured from high-quality polyester fabric, these bags ensure efficient drying, dust containment, and optimal airflow for granules and powder materials.",
                        description3:
                            "Available in both antistatic and non-antistatic variants, these bags are durable, washable, and compliant with GMP standards, making them ideal for hygienic and high-performance drying operations.",
                        keyBenefits: [
                            "Excellent air permeability for efficient fluidization and drying",
                            "High particle retention to minimize product loss and contamination",
                            "Strong mechanical properties and washability for repeated use",
                            "Available in antistatic and food-grade variants",
                            "Designed to fit most standard FBD machines (Glatt, Tapasya, Gansons, etc.)"
                        ],
                        technicalSpecifications: {
                            "Material": "Polyester (Woven / Non-Woven), Plain or Antistatic",
                            "Micron Rating": "Typically 5–50 µm (based on fabric)",
                            "Operating Temperature": "Up to 150°C (302°F)",
                            "Construction": "Double/triple stitched with reinforced seams",
                            "Closure Type": "Tie cord, elastic band, or Velcro (customizable)",
                            "Finish Options": "Food-grade, flame-retardant, antistatic coating"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: "250 mm", height: "1500 mm" },
                            { size: "Size 2", diameter: "300 mm", height: "1500 mm" },
                            { size: "Size 3", diameter: "300 mm", height: "1800 mm" },
                            { size: "Size 4", diameter: "400 mm", height: "1800 mm" }
                        ],
                        customOptions: "Custom sizes, shapes, stitching styles, and accessories are available based on machine design and process requirements."
                    },
                    {
                        id: 26,
                        image: "/images/products/fbdbags/polypropyleneFBD.png",
                        name: "Polypropylene FBD Bags",
                        description: "(Fluidized Bed Dryer – Cost-Effective Drying for Pharma & Bulk Solids)",
                        description2:
                            "Polypropylene (PP) FBD bags are designed for efficient drying and dust containment in fluid bed dryer systems across the pharmaceutical, food, and chemical industries. Manufactured from high-quality PP non-woven or woven fabric, these bags offer excellent resistance to chemical attack, low moisture absorption, and are ideal for single-use or cost-sensitive applications.",
                        description3:
                            "With good airflow and particle retention, PP FBD bags provide reliable performance in non-critical drying processes.",
                        keyBenefits: [
                            "Economical and lightweight alternative to polyester bags",
                            "Chemically resistant to acids and bases",
                            "Low moisture absorption and quick drying",
                            "Available in food-grade and antistatic variants",
                            "Compatible with most standard FBD systems (Glatt, Tapasya, Gansons, etc.)"
                        ],
                        technicalSpecifications: {
                            "Material": "Polypropylene (Woven / Non-Woven), Plain or Antistatic",
                            "Micron Rating": "Typically 5–50 µm (based on fabric type)",
                            "Operating Temperature": "Up to 90°C (194°F)",
                            "Construction": "Double/triple stitched or ultrasonically sealed",
                            "Closure Type": "Elastic band, drawstring, or Velcro (custom options available)",
                            "Finish Options": "Food-grade, antistatic, or flame-retardant"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: "250 mm", height: "1500 mm" },
                            { size: "Size 2", diameter: "300 mm", height: "1500 mm" },
                            { size: "Size 3", diameter: "300 mm", height: "1800 mm" },
                            { size: "Size 4", diameter: "400 mm", height: "1800 mm" }
                        ],
                        customOptions: "Custom sizes, closures, stitching types, and fabric treatments can be tailored to your specific drying system and process needs."
                    },
                    {
                        id: 27,
                        image: "/images/products/fbdbags/nomexArmideFBD.png",
                        name: "Nomex® (Aramid) FBD Bags",
                        description: "(High-Temperature Fluidized Bed Dryer Bags – For Demanding Applications)",
                        description2:
                            "Nomex® (Aramid) FBD bags are engineered for high-temperature drying processes where thermal stability, mechanical strength, and filtration performance are critical. Constructed from aramid needle-felt fabric, these bags deliver superior performance in pharmaceutical, chemical, and specialty drying operations that involve elevated temperatures or challenging environments.",
                        description3:
                            "These bags are ideal for high-purity processing where product integrity, durability, and GMP compliance are essential.",
                        keyBenefits: [
                            "Withstands high drying temperatures up to 200°C",
                            "Excellent dimensional and mechanical stability under heat",
                            "High airflow and particle retention for efficient drying",
                            "Resistant to abrasion, tearing, and chemical degradation",
                            "Suitable for demanding GMP-compliant pharma processes"
                        ],
                        technicalSpecifications: {
                            "Material": "Nomex® (Aramid Needle Felt)",
                            "Micron Rating": "Typically 5–25 µm",
                            "Operating Temperature": "Up to 200°C (392°F)",
                            "Construction": "Double/triple stitched with heat-resistant thread",
                            "Closure Type": "Elastic band, drawstring, or Velcro",
                            "Finish Options": "Antistatic, flame-retardant, or food-grade (on request)"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: "250 mm", height: "1500 mm" },
                            { size: "Size 2", diameter: "300 mm", height: "1500 mm" },
                            { size: "Size 3", diameter: "300 mm", height: "1800 mm" },
                            { size: "Size 4", diameter: "400 mm", height: "1800 mm" }
                        ],
                        customOptions: "Custom designs are available for OEM dryer models and unique drying system configurations."
                    },
                    {
                        id: 28,
                        image: "/images/products/fbdbags/ptfeCodedFBD.png",
                        name: "PTFE Coated FBD Bags",
                        description: "(Non-Stick, Chemically Resistant Fluidized Bed Dryer Bags – For Critical Applications)",
                        description2:
                            "PTFE coated FBD (Fluidized Bed Dryer) bags are specially designed for applications requiring maximum chemical resistance, thermal stability, and non-stick performance. These bags feature a base fabric (such as polyester, polypropylene, or aramid) laminated or coated with a PTFE (polytetrafluoroethylene) membrane, making them ideal for pharmaceutical, chemical, and API drying operations involving sticky, corrosive, or reactive materials.",
                        description3:
                            "They ensure superior product recovery, minimal media shedding, and compliance with stringent GMP standards.",
                        keyBenefits: [
                            "Exceptional chemical resistance to acids, alkalis, and solvents",
                            "Non-stick surface reduces product buildup and cross-contamination",
                            "High-temperature stability and dimensional integrity",
                            "Easy to clean and reusable in compatible processes",
                            "Ideal for drying APIs, corrosive powders, and sensitive formulations"
                        ],
                        technicalSpecifications: {
                            "Material": "PTFE-coated fabric (PP / PE / Nomex® base)",
                            "Micron Rating": "Typically 1–25 µm",
                            "Operating Temperature": "<b>PP Base</b>: Up to 90°C (194°F), <b>PE Base</b>: Up to 135°C (275°F), <b>Nomex® Base</b>: Up to 200°C (392°F)",
                            "Finish Options": "FDA-compliant, antistatic, flame-retardant"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: "250 mm", height: "1500 mm" },
                            { size: "Size 2", diameter: "300 mm", height: "1500 mm" },
                            { size: "Size 3", diameter: "300 mm", height: "1800 mm" },
                            { size: "Size 4", diameter: "400 mm", height: "1800 mm" }
                        ],
                        customOptions: "Custom configurations available based on dryer type, material compatibility, and process requirements."
                    }
                ]
            },
            {
                name: 'Centrifugal Bags',
                products: [
                    {
                        id: 29,
                        image: "/images/products/centrifugalBag/centrifugalBag.png",
                        name: "Centrifugal Filter Bags",
                        description: "(For Vertical & Top Discharge Centrifuge Machines)",
                        description2:
                            "Centrifugal filter bags are designed for efficient solid-liquid separation in high-speed centrifuge machines. Made from chemically resistant and mechanically strong fabrics, these bags help retain solids while allowing liquid to pass through during the centrifugal process. They are ideal for applications in pharmaceuticals, chemicals, food processing, and intermediates.",
                        description3:
                            "Tailored for perfect fit and long operational life, these bags support optimal filtration, reduced downtime, and high product purity.",
                        keyBenefits: [
                            "High solid retention and filtration efficiency",
                            "Withstands strong centrifugal force without deformation",
                            "Compatible with acids, alkalis, and solvents",
                            "Available in food-grade and antistatic variants",
                            "Customizable construction based on basket dimensions and discharge type"
                        ],
                        technicalSpecifications: {
                            "Material Options": "Polypropylene (PP), Polyester (PE), Nylon (Polyamide), PTFE-coated, antistatic, or food-grade options",
                            "Micron Ratings": "1 – 100 µm",
                            "Operating Temperature": "<b>PP</b>: Up to 90°C (194°F), <b>PE</b>: Up to 135°C (275°F), <b>Nylon</b>: Up to 120°C (248°F)",
                            "Construction": "Double or triple stitched with reinforced stress zones",
                            "Closure Types": "Drawstring, zip-lock, elastic band, or Velcro"
                        },
                        standardSizes: [
                            { size: "Size 1", diameter: '18" (457 mm)', length: '12" to 18"' },
                            { size: "Size 2", diameter: '24" (610 mm)', length: '18" to 24"' },
                            { size: "Size 3", diameter: '36" (915 mm)', length: '24" to 36"' },
                            { size: "Size 4", diameter: '48" (1220 mm)', length: '24" to 36"' }
                        ],
                        customOptions: "Bags are custom-fabricated to match centrifuge models like Heinkel, Western, CEPA, Ferrum, and others. Custom sizes, bottom configurations (flat or conical), and materials available on request."
                    }
                ]
            },
            {
                name: 'Filter Press Cloth',
                products: [
                    {
                        id: 30,
                        image: "/images/products/filterPress/filterPressCloth.png",
                        name: "Filter Press Cloth",
                        description: "(For Solid-Liquid Separation in Industrial Filter Press Systems)",
                        description2:
                            "Filter press cloths are critical components used in plate and frame or recessed chamber filter presses for solid-liquid separation. Designed to trap solid particles while allowing clear filtrate to pass through, these cloths are engineered for durability, chemical resistance, and consistent filtration performance.",
                        description3:
                            "Manufactured from high-quality woven or non-woven synthetic fabrics, our filter press cloths are tailored to suit a wide range of industrial applications such as mining, pharmaceuticals, food & beverage, chemicals, effluent treatment, and more.",
                        keyBenefits: [
                            "Excellent particle retention and filtrate clarity",
                            "Durable construction for high-cycle operations",
                            "Chemical- and temperature-resistant materials",
                            "Available in stitched, welded, or necked-in configurations",
                            "Reduced blinding and easy cake release for faster cleaning",
                            "Compatible with all standard filter press brands and sizes"
                        ],
                        technicalSpecifications: {
                            "Material Options": "Polypropylene (PP), Polyester (PE), Nylon (Polyamide), Aramid / Nomex® (High temperature)",
                            "Micron Ratings": "1 – 100 µm (based on weave and permeability)",
                            "Weave Patterns": "Monofilament, Multifilament, or Composite; Plain weave, Twill weave, Satin weave",
                            "Operating Temperature": "<b>PP</b>: Up to 90°C (194°F), <b>PE</b>: Up to 135°C (275°F), <b>Nomex®</b>: Up to 200°C (392°F)",
                            "Edge Treatment": "Welded, stitched, or resin-treated",
                            "Mounting Types": "Grommets, tie cords, Velcro, neck/ring stitched"
                        },
                        standardSizes: [
                            { size: "470 x 470 mm", description: "Small batch & lab scale presses" },
                            { size: "630 x 630 mm", description: "Medium capacity industrial use" },
                            { size: "800 x 800 mm", description: "Effluent treatment and food industry" },
                            { size: "1000 x 1000 mm", description: "Chemical and mining applications" },
                            { size: "1200 x 1200 mm & above", description: "High-volume, heavy-duty processes" }
                        ],
                        typicalApplications: [
                            "Wastewater & Effluent Treatment Plants (ETPs)",
                            "Mining & Mineral Processing",
                            "Food & Beverage Filtration (e.g., sugar, edible oil)",
                            "Chemical & Pigment Filtration",
                            "Pharmaceutical Intermediates",
                            "Dye, Paint & Resin Manufacturing"
                        ],
                        customOptions: "Customization available for central feed, corner feed, barrel-neck, caulked & gasketed, or sewn types."
                    }
                ]
            },
            {
                name: 'Nutsche Filter Bag',
                products: [
                    {
                        id: 31,
                        image: "/images/products/nutcheFilter/nutcheFilterbag.png",
                        name: "Nutsche Filter Bags",
                        description: "(For Vacuum & Pressure Nutsche Filter Systems)",
                        description2:
                            "Nutsche filter bags are specially designed for use in vacuum and pressure Nutsche filter systems to achieve efficient solid-liquid separation in critical applications. These bags are placed over perforated filter plates or sintered discs and serve as the primary filtration medium, capturing solid particles while allowing filtrate to pass through.",
                        description3:
                            "Commonly used in the pharmaceutical, chemical, agrochemical, and API industries, these filter bags are constructed from high-purity, chemically resistant fabrics that ensure product purity, filtration efficiency, and compliance with GMP standards.",
                        keyBenefits: [
                            "Excellent filtration efficiency with high particle retention",
                            "Chemically inert and compatible with aggressive solvents and acids",
                            "Available in antistatic, food-grade, and high-temperature variants",
                            "Seamless or ultrasonically welded designs to prevent leakage",
                            "Custom-fitted to vessel diameter for leak-proof sealing"
                        ],
                        technicalSpecifications: {
                            "Material Options": "Polypropylene (PP), Polyester (PE), Nylon (PA), PTFE-coated or laminated (for highly corrosive media)",
                            "Micron Ratings": "1 – 100 µm (based on fabric type)",
                            "Operating Temperature": "<b>PP</b>: Up to 90°C (194°F), <b>PE</b>: Up to 135°C (275°F), <b>PTFE-coated</b>: Up to 200°C (392°F)",
                            "Construction": "Welded or stitched with solvent-resistant threads",
                            "Closure Options": "Elastic band, drawstring, snap-fit or flange ring (customized)"
                        },
                        standardSizes: [
                            { diameter: '24" (610 mm)', bagDepth: "Bag Depth: 500 – 700 mm" },
                            { diameter: '36" (915 mm)', bagDepth: "Bag Depth: 700 – 900 mm" },
                            { diameter: '48" (1220 mm)', bagDepth: "Bag Depth: 900 – 1000 mm" },
                            { diameter: "Custom Size", bagDepth: "As per equipment specs" }
                        ],
                        typicalApplications: [
                            "API & Pharmaceutical Intermediate Filtration",
                            "Fine Chemical and Catalyst Recovery",
                            "Agrochemical Product Separation",
                            "Specialty Chemical Filtration",
                            "Dye, Pigment & Resin Processing"
                        ],
                        customOptions: "Bags are compatible with Nutsche filters from manufacturers like Buchi, Pope Scientific, GMM Pfaudler, De Dietrich, and more."
                    }

                ]
            }
        ],
    },
    "bearings": {
        name: "Bearings",
        subCategories: [
            {
                name: "Roller Bearings",
                products: [
                    {
                        id: 32,
                        image: "/images/products",
                        image2: "/images/products",
                        name: "30200 Series",
                        description: "Standard metric tapered roller bearings designed to handle both radial and axial loads. Commonly used in automotive wheels, gearboxes, and industrial applications.",
                        bearingTable: [
                            { itemNo: "30202", d: "15", D: "35", T: "11.75", dynamicLoad: "20", staticLoad: "19" },
                            { itemNo: "30203", d: "17", D: "40", T: "13.25", dynamicLoad: "23", staticLoad: "23" },
                            { itemNo: "30204", d: "20", D: "47", T: "15.25", dynamicLoad: "28", staticLoad: "29" },
                            { itemNo: "30205", d: "25", D: "52", T: "16.25", dynamicLoad: "32", staticLoad: "35" },
                            { itemNo: "30206", d: "30", D: "62", T: "17.25", dynamicLoad: "43", staticLoad: "48" },
                            { itemNo: "30207", d: "35", D: "72", T: "18.25", dynamicLoad: "54", staticLoad: "60" },
                            { itemNo: "30208", d: "40", D: "80", T: "19.75", dynamicLoad: "64", staticLoad: "70" },
                            { itemNo: "30209", d: "45", D: "85", T: "20.75", dynamicLoad: "69", staticLoad: "80" },
                            { itemNo: "30210", d: "50", D: "90", T: "21.75", dynamicLoad: "76", staticLoad: "92" },
                            { itemNo: "30211", d: "55", D: "100", T: "22.75", dynamicLoad: "94", staticLoad: "113" },
                            { itemNo: "30212", d: "60", D: "110", T: "23.75", dynamicLoad: "104", staticLoad: "123" },
                            { itemNo: "30213", d: "65", D: "120", T: "24.75", dynamicLoad: "122", staticLoad: "151" },
                            { itemNo: "30214", d: "70", D: "125", T: "26.25", dynamicLoad: "132", staticLoad: "163" },
                            { itemNo: "30215", d: "75", D: "130", T: "27.25", dynamicLoad: "143", staticLoad: "182" },
                            { itemNo: "30216", d: "80", D: "140", T: "28.25", dynamicLoad: "157", staticLoad: "195" },
                            { itemNo: "30217", d: "85", D: "150", T: "30.5", dynamicLoad: "184", staticLoad: "233" },
                            { itemNo: "30218", d: "90", D: "160", T: "32.5", dynamicLoad: "201", staticLoad: "256" },
                            { itemNo: "30219", d: "95", D: "170", T: "34.5", dynamicLoad: "223", staticLoad: "286" },
                            { itemNo: "30220", d: "100", D: "180", T: "37", dynamicLoad: "255", staticLoad: "330" },
                            { itemNo: "30221", d: "105", D: "190", T: "39", dynamicLoad: "280", staticLoad: "365" },
                            { itemNo: "30222", d: "110", D: "200", T: "41", dynamicLoad: "315", staticLoad: "420" },
                            { itemNo: "30224", d: "120", D: "215", T: "43.5", dynamicLoad: "335", staticLoad: "449" },
                            { itemNo: "30226", d: "130", D: "230", T: "43.75", dynamicLoad: "375", staticLoad: "507" },
                            { itemNo: "30228", d: "140", D: "250", T: "45.75", dynamicLoad: "390", staticLoad: "516" },
                            { itemNo: "30230", d: "150", D: "270", T: "49", dynamicLoad: "485", staticLoad: "570" },
                            { itemNo: "30232", d: "160", D: "290", T: "52", dynamicLoad: "530", staticLoad: "610" },
                            { itemNo: "30234", d: "170", D: "310", T: "57", dynamicLoad: "630", staticLoad: "690" },
                        ]
                    },
                ],
            },
            {
                name: "Thrust Bearings",
                products: [
                    {
                        image: "",
                        name: "Thrust Ball Bearing",
                        description: "Specially designed to support axial loads, suitable for low-speed applications.",
                        keyBenefits: [
                            "Low maintenance",
                            "Easy installation",
                            "Excellent load-bearing capacity",
                        ],
                        technicalSpecifications: {
                            "Material": "Carbon Steel",
                            "Load Direction": "Axial",
                            "Sealing": "Open",
                        },
                        standardSizes: [
                            { size: "51206", diameter: "30 mm", length: "52 mm" },
                            { size: "51108", diameter: "40 mm", length: "60 mm" },
                        ],
                    },
                ],
            },
        ],
    },
    "clutch-brake-pads": {
        name: "Clutch Brake Pads",
        subCategories: [
            {
                name: "Tractor Clutch Pads",
                products: [
                    {
                        image: "",
                        name: "Friction Disc Pad",
                        description: "Optimized for heavy-duty agricultural equipment requiring consistent performance.",
                        keyBenefits: [
                            "Heat resistant",
                            "Smooth engagement",
                            "Long-lasting friction material",
                        ],
                        technicalSpecifications: {
                            "Material": "Asbestos-free composite",
                            "Thickness": "5-8 mm",
                            "Diameter": "120 – 250 mm",
                        },
                        standardSizes: [
                            { size: "Standard", diameter: "200 mm", length: "-" },
                        ],
                    },
                ],
            },
            {
                name: "Brake Linings",
                products: [
                    {
                        image: "",
                        name: "Woven Brake Lining",
                        description: "Flexible and durable lining used in heavy trucks and cranes.",
                        keyBenefits: [
                            "High thermal stability",
                            "No noise",
                            "Long wear life",
                        ],
                        technicalSpecifications: {
                            "Material": "Woven non-asbestos",
                            "Width": "Up to 200 mm",
                            "Roll Length": "10 m",
                        },
                        standardSizes: [
                            { size: "Custom Roll", diameter: "-", length: "10 m" },
                        ],
                    },
                ],
            },
        ],
    },
};


export const products = [
    {
        icon: ShoppingBag,
        title: 'Filter Bags',
        description: 'High-quality industrial filter bags engineered for dust collection, pollution control, and fluid separation in demanding environments.',
        features: ['Custom designs available', 'International quality standards', 'Multiple fabric options', 'Expert technical support'],
        type: 'filter-bags',
        background: '/images/carouselImages/filterbag11.jpeg'

    },
    {
        icon: Circle,
        title: 'Roll Bearings',
        description: 'Precision-engineered bearings for high-load industrial applications, manufactured with CNC machining and strict quality control.',
        features: ['Forged and CNC machined', 'High-load capacity', 'Durable construction', 'Complete bearing solutions'],
        type: 'roll-bearings',
        background: '/images/carouselImages/bearing1.jpeg'
    },
    {
        icon: Settings,
        title: 'Clutch Brake Pads',
        description: 'Reliable tractor clutch and brake components designed for agricultural vehicles and heavy-duty applications.',
        features: ['High-performance materials', 'Long-lasting durability', 'Agricultural vehicle focus', 'Tested quality standards'],
        type: 'clutch-brake-pads',
        background: '/images/carouselImages/breakdisk4.jpeg'
    }
];

export const industries = [
    {
        name: 'Cement & Construction',
        background: '/images/cement_ind.png',
    },
    {
        name: 'Power Generation',
        background: '/images/power_ind.png',
    },
    {
        name: 'Steel & Metallurgy',
        background: '/images/steel_metal_ind.png',
    },
    {
        name: 'Chemical Processing',
        background: '/images/chemical_proc_ind.png',
    },
    {
        name: 'Pharmaceutical Manufacturing',
        background: '/images/pharma_ind.png',
    },
    {
        name: 'Ceramic and Tiles Industries',
        background: '/images/ceramic_tile_ind.png',
    },
    {
        name: 'Mining & Mineral Handling',
        background: '/images/mining_ind.png',
    },
    {
        name: 'Water Filter Management',
        background: '/images/water_filter_ind.png',
    },
];
