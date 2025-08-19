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
        itemNo?: string;
        d?: string;
        D?: string;
        T?: string;
        dynamicLoad?: string;
        staticLoad?: string;
    }[];
    technicalAdvantages?: {
        [key: string]: string;
    };
    performanceHighlights?: string[];
    applicationFields?: string[];
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
    // 'clutch-brake-pads': {
    //     title: 'Tactor Break Disk & Sleeves Glossary',
    //     terms: [
    //         { letter: 'A', term: 'Axial Load', definition: 'A force acting along the axis of the clutch brake pads, which is handled by certain types of clutch designs.' },
    //         { letter: 'B', term: 'Brake Pads', definition: 'The friction material in braking systems used to create friction with a rotor to slow or stop machinery, such as tractors or industrial vehicles.' },
    //         { letter: 'C', term: 'Clutch Plate', definition: 'The component in a clutch that engages and disengages with the flywheel to transmit power from the engine to the gearbox.' },
    //         { letter: 'C', term: 'Cast Iron', definition: 'A common material for clutch brake components due to its high wear resistance and ability to withstand high temperatures.' },
    //         { letter: 'D', term: 'Durability', definition: 'The ability of clutch brake pads to withstand repeated wear and tear while maintaining their performance.' },
    //         { letter: 'E', term: 'Engagement', definition: 'The process by which the clutch brake pads press against the disc to transmit torque and control the rotation of the vehicle.' },
    //         { letter: 'F', term: 'Friction Material', definition: 'The specific substance (e.g., organic, semi-metallic, ceramic) used in the construction of clutch and brake pads for effective stopping and power transfer.' },
    //         { letter: 'G', term: 'Gasket', definition: 'A sealing component used in brake systems to prevent fluid leaks and ensure smooth operation.' },
    //         { letter: 'H', term: 'Hardness', definition: 'The resistance of brake pads and sleeves to wear and deformation under heavy usage.' },
    //         { letter: 'I', term: 'Installation', definition: 'The procedure of properly placing and securing brake pads and clutch components in machinery or vehicles.' },
    //         { letter: 'J', term: 'Joint Mechanism', definition: 'The mechanism by which the clutch and brake pads engage, transferring force to operate machinery or stop motion.' },
    //         { letter: 'K', term: 'Kevlar', definition: 'A material sometimes used in high-performance clutch or brake pads due to its heat resistance and durability.' },
    //         { letter: 'L', term: 'Load Distribution', definition: 'The evenness of pressure across brake pads and clutch sleeves to prevent uneven wear and premature failure.' },
    //         { letter: 'M', term: 'Material Composition', definition: 'The mixture of substances (like steel, rubber, and friction compounds) used to manufacture clutch brake components.' },
    //         { letter: 'N', term: 'Noise Dampening', definition: 'Technologies or coatings applied to brake pads to reduce noise during operation.' },
    //         { letter: 'O', term: 'Overheating', definition: 'The excessive heat generated by clutch brake pads under heavy use, which can lead to failure or reduced efficiency.' },
    //         { letter: 'P', term: 'Pressure Plate', definition: 'The component that applies pressure to the clutch disc to engage or disengage the engine from the transmission.' },
    //         { letter: 'Q', term: 'Quality Assurance', definition: 'The processes used to inspect and test brake pads and clutch sleeves to ensure they meet specific standards and specifications.' },
    //         { letter: 'R', term: 'Rotational Speed', definition: 'The speed at which the flywheel or clutch plate rotates, affecting the friction performance of clutch brake pads.' },
    //         { letter: 'S', term: 'Sleeves', definition: 'Components that protect clutch and brake pads and ensure smooth engagement with other parts.' },
    //         { letter: 'T', term: 'Thermal Conductivity', definition: 'The ability of brake pads to transfer heat away from the friction surface, preventing overheating and ensuring consistent performance.' }
    //     ]
    // }
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
    // 'clutch-brake-pads': [
    //     {
    //         title: "How Tactor Break Disk Work in Tractors and Farm Machinery",
    //         excerpt: "This blog educates users about the core function of clutch brake pads—how they control power transmission between engine and gearbox, and why they're vital in tractors for smooth operation and safe braking. Diagrams can illustrate how pads interact with pressure plates and flywheels. It's ideal for OEMs, mechanics, and technical buyers who want to understand what's behind the performance.",
    //         target: "Tractor operators, agri-tech engineers, repair workshops"
    //     },
    //     {
    //         title: "Why High-Quality Brake Sleeves Matter in Agricultural Vehicles",
    //         excerpt: "Brake sleeves are small but critical castings in heavy-duty braking systems. This post highlights how quality casting, correct hardness, and precise machining impact performance, durability, and heat dissipation. It helps educate buyers on avoiding cheap, brittle parts that fail under stress.",
    //         target: "Casting buyers, OEM part distributors, quality control teams"
    //     },
    //     {
    //         title: "5 Symptoms of Worn Clutch Pads You Shouldn't Ignore",
    //         excerpt: "This blog lists common signs like slippage, difficulty in shifting gears, increased engine noise, burning smells, and vibration—explaining what each symptom indicates and when replacement is necessary. This makes it easier for end-users and service centers to identify and act before a full clutch failure occurs.",
    //         target: "Mechanics, farm equipment owners, tractor dealers"
    //     },
    //     {
    //         title: "OEM-Grade Brake Components vs Local Market Alternatives",
    //         excerpt: "This post compares OEM-standard clutch and brake components with unbranded, lower-quality alternatives found in local markets. It covers design tolerances, friction material composition, surface finish, and durability—emphasizing why using substandard parts can damage expensive machinery.",
    //         target: "Spare parts buyers, fleet managers, agri workshop owners"
    //     },
    //     {
    //         title: "Casting Quality in Brake Components – What Makes or Breaks a Part",
    //         excerpt: "Cast brake sleeves and clutch components require high metallurgical integrity to handle friction and heat. This blog dives into foundry quality factors: controlled alloy mix, no porosity, dimensional precision, and post-casting inspection. Use this to show the advantage of your family-owned Rajkot casting facility.",
    //         target: "Foundry professionals, OEM suppliers, quality assurance teams"
    //     },
    //     {
    //         title: "Choosing Brake Pads for Tough Terrain and Heavy Loads",
    //         excerpt: "Farms and construction zones involve dusty, uneven, and high-load environments. This blog helps users select the right brake pads for tractors and loaders that operate under tough terrain. You'll explain pad hardness, slotting patterns, and fade resistance for frequent stop/start activity.",
    //         target: "Rural mechanics, farm machinery dealers, fleet owners"
    //     },
    //     {
    //         title: "How Clutch Sleeves Impact Gear Engagement and Safety",
    //         excerpt: "The clutch sleeve plays a key role in engaging and disengaging gears smoothly. This technical blog explains how material quality, surface smoothness, and tight tolerances affect driver control and equipment safety. Position your precision-cast sleeves as a safe and efficient choice.",
    //         target: "Agricultural engineers, tractor manufacturers, quality auditors"
    //     },
    //     {
    //         title: "Best Practices for Installing Tractor Clutch Pads",
    //         excerpt: "Improper installation can cause premature wear or unsafe operation. This blog offers a step-by-step checklist for correct installation: alignment, torque specs, bedding-in period, and inspection. Great for training and onboarding new mechanics or service center teams.",
    //         target: "Tractor repair technicians, service center heads"
    //     },
    //     {
    //         title: "Why Your Tractor Brake System Deserves More Attention",
    //         excerpt: "Many tractor owners focus only on engines and tires—neglecting the braking system. This awareness blog outlines how worn or mismatched components (pads, sleeves, linings) lead to accidents, higher fuel consumption, and longer stopping distances. Emphasize safety and efficiency.",
    //         target: "Tractor owners, safety managers, agri-fleet operators"
    //     },
    //     {
    //         title: "Custom Manufacturing for Brake Pads: Meeting Non-Standard Requirements",
    //         excerpt: "Some equipment models require non-standard sizes, shapes, or materials. This blog showcases your ability to deliver made-to-order brake pads and sleeves that meet special technical needs, from low-volume spares to new tractor models.",
    //         target: "OEM buyers, regional dealers, spare parts designers"
    //     },
    //     {
    //         title: "Heat, Friction & Load: The Engineering Science Behind Brake Pads",
    //         excerpt: "This advanced blog explores the science of brake pad materials—coefficient of friction, wear rate, temperature threshold, and load-bearing capacity. It's perfect for a more technical audience who want to understand what makes a high-performance brake pad.",
    //         target: "R&D engineers, industrial machinery designers, OEM evaluators"
    //     }
    // ]
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
    // 'breakdisk': [
    //     {
    //         id: 1,
    //         image: "/images/carouselImages/breakdisk1.jpeg"
    //     },
    //     {
    //         id: 2,
    //         image: "/images/carouselImages/breakdisk2.jpeg"
    //     },
    //     {
    //         id: 3,
    //         image: "/images/carouselImages/breakdisk3.jpeg"
    //     },
    //     {
    //         id: 4,
    //         image: "/images/carouselImages/breakdisk4.jpeg"
    //     },
    //     {
    //         id: 5,
    //         image: "/images/carouselImages/breakdisk5.jpeg"
    //     },
    //     {
    //         id: 6,
    //         image: "/images/carouselImages/breakdisk6.jpeg"
    //     },
    //     {
    //         id: 7,
    //         image: "/images/carouselImages/breakdisk7.jpeg"
    //     },
    //     {
    //         id: 8,
    //         image: "/images/carouselImages/breakdisk8.jpeg"
    //     },
    //     {
    //         id: 9,
    //         image: "/images/carouselImages/breakdisk9.jpeg"
    //     },
    //     {
    //         id: 10,
    //         image: "/images/carouselImages/breakdisk10.jpeg"
    //     },
    //     {
    //         id: 11,
    //         image: "/images/carouselImages/breakdisk11.jpeg"
    //     },
    // ]
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
                        image: "/images/products/bearings/be_30200.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "30200 Series",
                        description: "Single-Row Tapered Roller Bearings – 30200 Series",
                        description2: "The 30200 Series of single row tapered roller bearings is specially engineered to support <b>combined radial and axial loads</b> within a wide range of industrial and automotive applications.These bearings are designed with <b>tapered inner and outer ring raceways</b>, allowing the rolling elements to align perfectly and maintain a true rolling motion.This optimized geometry helps to minimize friction, enhance load capacity, and ensure reliable performance even under heavy- duty conditions.",
                        technicalAdvantages: {
                            "True Load Balance": "The angled raceways are designed so the projected lines of contact converge at a single point along the bearing axis. This design promotes uniform load distribution and smooth motion.",
                            "High Axial Load Support": "The ability to carry axial loads increases with the steepness of the contact angle. Bearings in this series are available with varying contact angles to suit different load and speed requirements.",
                            "Low Friction Operation": "The design reduces slippage and internal stress, resulting in reduced heat generation and lower energy loss during rotation.",
                            "Separable Components": "Inner ring with roller and cage assembly (cone) and outer ring (cup) can be mounted separately, allowing for simplified installation and maintenance."
                        },
                        performanceHighlights: [
                            "Supports <b>combined radial and thrust loads</b>",
                            "Designed for <b>high rotational speeds</b> and <b>heavy-duty use</b>",
                            "<b>Precision raceway angles</b> tailored for optimized contact pressure",
                            "Available in a wide range of <b>bore sizes (15 mm to 320 mm)</b>",
                            "Manufactured with <b>hardened bearing-grade steel</b> for durability",
                            "Heat-treated components for enhanced fatigue resistance"
                        ],
                        applicationFields: [
                            "Automotive wheel hubs, axles, and transmissions",
                            "Heavy industrial gearboxes and drive systems",
                            "Agricultural and construction machinery",
                            "Mining equipment and conveyor rollers",
                            "Mechanical power transmission assemblies"
                        ],
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
                            { itemNo: "30236", d: "180", D: "320", T: "57", dynamicLoad: "650", staticLoad: "694" },
                            { itemNo: "30238", d: "190", D: "340", T: "60", dynamicLoad: "715", staticLoad: "792" },
                            { itemNo: "30240", d: "200", D: "360", T: "64", dynamicLoad: "795", staticLoad: "890" },
                            { itemNo: "30244", d: "220", D: "400", T: "72", dynamicLoad: "810", staticLoad: "1153" },
                            { itemNo: "30248", d: "240", D: "440", T: "79", dynamicLoad: "992", staticLoad: "1402" },
                            { itemNo: "30252", d: "260", D: "480", T: "89", dynamicLoad: "1193", staticLoad: "1700" },
                            { itemNo: "30256", d: "280", D: "500", T: "89", dynamicLoad: "1242", staticLoad: "1900" },
                            { itemNo: "30260", d: "300", D: "540", T: "96", dynamicLoad: "1442", staticLoad: "2100" },
                            { itemNo: "30264", d: "320", D: "580", T: "104", dynamicLoad: "1642", staticLoad: "2421" },
                        ]
                    },
                    {
                        id: 33,
                        image: "/images/products/bearings/be_30300.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "30300 Series",
                        description: "30300 Series – Medium Contact Angle Tapered Roller Bearings",
                        description2: "The 30300 Series features medium contact angle tapered roller bearings engineered to support a balanced combination of radial and axial loads. These bearings are particularly suitable for applications where higher thrust load capacity is required, thanks to their larger contact angles compared to standard series. The raceways and rolling elements are precision machined to maintain consistent alignment under load, resulting in improved performance and reduced wear.",
                        bearingTable: [
                            { itemNo: "30302", d: "15", D: "42", T: "14.25", dynamicLoad: "23.2", staticLoad: "21.6" },
                            { itemNo: "30303", d: "17", D: "47", T: "15.25", dynamicLoad: "28.9", staticLoad: "27.2" },
                            { itemNo: "30304", d: "20", D: "52", T: "16.25", dynamicLoad: "35.5", staticLoad: "34" },
                            { itemNo: "30305", d: "25", D: "62", T: "18.25", dynamicLoad: "48.5", staticLoad: "48.1" },
                            { itemNo: "30306", d: "30", D: "72", T: "20.75", dynamicLoad: "60", staticLoad: "63.1" },
                            { itemNo: "30307", d: "35", D: "80", T: "22.75", dynamicLoad: "75.3", staticLoad: "82.6" },
                            { itemNo: "30308", d: "40", D: "90", T: "25.25", dynamicLoad: "91.5", staticLoad: "107.6" },
                            { itemNo: "30309", d: "45", D: "100", T: "27.25", dynamicLoad: "111", staticLoad: "129.8" },
                            { itemNo: "30310", d: "50", D: "110", T: "29.25", dynamicLoad: "133", staticLoad: "152" },
                            { itemNo: "30311", d: "55", D: "120", T: "31.5", dynamicLoad: "155", staticLoad: "179" },
                            { itemNo: "30312", d: "60", D: "130", T: "33.5", dynamicLoad: "183", staticLoad: "214" },
                            { itemNo: "30313", d: "65", D: "140", T: "36", dynamicLoad: "203", staticLoad: "238" },
                            { itemNo: "30314", d: "70", D: "150", T: "38", dynamicLoad: "230", staticLoad: "272" },
                            { itemNo: "30315", d: "75", D: "160", T: "40", dynamicLoad: "255", staticLoad: "305" },
                            { itemNo: "30316", d: "80", D: "170", T: "42.5", dynamicLoad: "297", staticLoad: "350" },
                            { itemNo: "30317", d: "85", D: "180", T: "44.5", dynamicLoad: "305", staticLoad: "365" },
                            { itemNo: "30318", d: "90", D: "190", T: "46.5", dynamicLoad: "270", staticLoad: "320" },
                            { itemNo: "30319", d: "95", D: "200", T: "49.5", dynamicLoad: "296", staticLoad: "355" },
                            { itemNo: "30320", d: "100", D: "215", T: "51.5", dynamicLoad: "365", staticLoad: "445" },
                            { itemNo: "30321", d: "105", D: "225", T: "53.5", dynamicLoad: "455", staticLoad: "565" },
                            { itemNo: "320/28", d: "28", D: "52", T: "16", dynamicLoad: "31.9 - 39", staticLoad: "38 - 44" },
                            { itemNo: "320/32", d: "32", D: "58", T: "17", dynamicLoad: "36 - 45.1", staticLoad: "45 - 48.5" }
                        ]
                    },
                    {
                        id: 34,
                        image: "/images/products/bearings/be_31300.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "31300 Series",
                        description: "31300 Series – Modified Metric Tapered Roller Bearings",
                        description2: "The <b>31300 Series</b> features <b>modified metric single-row tapered roller bearings</b> designed to manage high radial loads and significant axial loads in one direction. These bearings are characterized by a more robust internal geometry and a slightly adjusted contact angle compared to standard series, allowing them to perform effectively under demanding load conditions and extended service life requirements",
                        description3: "This series is ideal for applications requiring increased rigidity, better load alignment, and longer operational cycles under varying speed and load conditions.",
                        bearingTable: [
                            { itemNo: "31305", d: "25", D: "62", T: "18.25", dynamicLoad: "46.6", staticLoad: "40" },
                            { itemNo: "31309", d: "45", D: "100", T: "27.25", dynamicLoad: "113", staticLoad: "102" },
                            { itemNo: "31310", d: "50", D: "110", T: "29.25", dynamicLoad: "131", staticLoad: "120" },
                            { itemNo: "31311", d: "55", D: "120", T: "31.5", dynamicLoad: "172", staticLoad: "157" },
                            { itemNo: "31312", d: "60", D: "130", T: "33.5", dynamicLoad: "182", staticLoad: "169" },
                            { itemNo: "31313", d: "65", D: "140", T: "36", dynamicLoad: "203", staticLoad: "193" },
                            { itemNo: "31314", d: "70", D: "150", T: "38", dynamicLoad: "229", staticLoad: "220" },
                            { itemNo: "31315", d: "75", D: "160", T: "40", dynamicLoad: "236", staticLoad: "195" },
                            { itemNo: "31316", d: "80", D: "170", T: "42.5", dynamicLoad: "270", staticLoad: "265" },
                            { itemNo: "31594/20", d: "34.925", D: "76.2", T: "29.37", dynamicLoad: "101", staticLoad: "97.4" },
                            { itemNo: "3188/20", d: "28.575", D: "72.626", T: "30.162", dynamicLoad: "98.6", staticLoad: "89.3" },
                            { itemNo: "3198/20", d: "28.575", D: "72.626", T: "30.162", dynamicLoad: "98.6", staticLoad: "89.3" }
                        ]
                    },
                    {
                        id: 35,
                        image: "/images/products/bearings/be_32000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "32000 Series",
                        description: "32000 Series – High Load, Medium Contact Angle Tapered Roller Bearings",
                        description2: "The <b>32000 Series</b> Built for heavy-duty performance. The 32000 Series handles high radial and axial loads with ease, thanks to its medium contact angle and optimized design. Ideal for automotive, industrial, and agricultural applications where strength, speed, and durability matter most.",
                        bearingTable: [
                            { itemNo: "32004", d: "20", D: "42", T: "15", dynamicLoad: "24.2", staticLoad: "27" },
                            { itemNo: "32005", d: "25", D: "47", T: "15", dynamicLoad: "27", staticLoad: "32.5" },
                            { itemNo: "32006", d: "30", D: "55", T: "17", dynamicLoad: "35.8", staticLoad: "44" },
                            { itemNo: "32007", d: "35", D: "62", T: "18", dynamicLoad: "42.9", staticLoad: "54" },
                            { itemNo: "32008", d: "40", D: "68", T: "19", dynamicLoad: "52.8", staticLoad: "71" },
                            { itemNo: "32009", d: "45", D: "75", T: "20", dynamicLoad: "58.3", staticLoad: "80" },
                            { itemNo: "32010", d: "50", D: "80", T: "20", dynamicLoad: "60.5", staticLoad: "88" },
                            { itemNo: "32011", d: "55", D: "90", T: "23", dynamicLoad: "80.9", staticLoad: "116" },
                            { itemNo: "32012", d: "60", D: "95", T: "23", dynamicLoad: "82.5", staticLoad: "122" },
                            { itemNo: "32013", d: "65", D: "100", T: "23", dynamicLoad: "84.2", staticLoad: "127" },
                            { itemNo: "32014", d: "70", D: "110", T: "25", dynamicLoad: "101", staticLoad: "153" },
                            { itemNo: "32015", d: "75", D: "115", T: "25", dynamicLoad: "106", staticLoad: "163" },
                            { itemNo: "32016", d: "80", D: "125", T: "29", dynamicLoad: "138", staticLoad: "216" },
                            { itemNo: "32017", d: "85", D: "130", T: "29", dynamicLoad: "140", staticLoad: "224" },
                            { itemNo: "32018", d: "90", D: "140", T: "32", dynamicLoad: "168", staticLoad: "270" },
                            { itemNo: "32019", d: "95", D: "145", T: "32", dynamicLoad: "170", staticLoad: "275" },
                            { itemNo: "32020", d: "100", D: "150", T: "32", dynamicLoad: "172", staticLoad: "280" },
                            { itemNo: "32021", d: "105", D: "160", T: "35", dynamicLoad: "201", staticLoad: "335" },
                            { itemNo: "32022", d: "110", D: "170", T: "38", dynamicLoad: "233", staticLoad: "390" },
                            { itemNo: "32024", d: "120", D: "180", T: "38", dynamicLoad: "242", staticLoad: "415" },
                            { itemNo: "32026", d: "130", D: "200", T: "45", dynamicLoad: "314", staticLoad: "540" },
                            { itemNo: "32028", d: "140", D: "210", T: "45", dynamicLoad: "330", staticLoad: "585" },
                            { itemNo: "32030", d: "150", D: "225", T: "48", dynamicLoad: "369", staticLoad: "655" },
                            { itemNo: "32032", d: "160", D: "240", T: "51", dynamicLoad: "429", staticLoad: "780" },
                            { itemNo: "32034", d: "170", D: "260", T: "57", dynamicLoad: "512", staticLoad: "915" },
                            { itemNo: "32036", d: "180", D: "280", T: "64", dynamicLoad: "644", staticLoad: "1160" },
                            { itemNo: "32038", d: "190", D: "290", T: "64", dynamicLoad: "660", staticLoad: "1200" },
                            { itemNo: "32040", d: "200", D: "310", T: "70", dynamicLoad: "748", staticLoad: "1370" },
                            { itemNo: "32044", d: "220", D: "340", T: "76", dynamicLoad: "897", staticLoad: "1660" },
                            { itemNo: "32048", d: "240", D: "360", T: "76", dynamicLoad: "935", staticLoad: "1800" },
                            { itemNo: "32052", d: "260", D: "400", T: "87", dynamicLoad: "1120", staticLoad: "2170" },
                            { itemNo: "32056", d: "280", D: "420", T: "87", dynamicLoad: "1190", staticLoad: "2290" },
                            { itemNo: "32060", d: "300", D: "460", T: "100", dynamicLoad: "1520", staticLoad: "2940" },
                            { itemNo: "32064", d: "320", D: "480", T: "100", dynamicLoad: "1540", staticLoad: "3000" },
                            { itemNo: "32020 x", d: "100", D: "150", T: "32", dynamicLoad: "172", staticLoad: "280" }
                        ]
                    },
                    {
                        id: 36,
                        image: "/images/products/bearings/be_32200.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "32200 Series",
                        description: "32200 Series – Heavy Load Metric Tapered Roller Bearings",
                        description2: "Our <b>32200 Series Tapered Roller Bearings</b> are designed for demanding applications where high radial and axial loads must be handled simultaneously and reliably. Built to exacting standards, this series offers a robust structure with precise contact angles, making it ideal for usage in <b>heavy-duty axles, agricultural equipment, gearboxes, and industrial machinery.</b>",
                        bearingTable: [
                            { itemNo: "32203", d: "17", D: "40", T: "17.25", dynamicLoad: "27.3", staticLoad: "28.3" },
                            { itemNo: "32204", d: "20", D: "47", T: "19.25", dynamicLoad: "36.5", staticLoad: "39.5" },
                            { itemNo: "32205", d: "25", D: "52", T: "19.25", dynamicLoad: "42", staticLoad: "47" },
                            { itemNo: "32206", d: "30", D: "62", T: "21.25", dynamicLoad: "54.5", staticLoad: "64" },
                            { itemNo: "32207", d: "35", D: "72", T: "24.25", dynamicLoad: "72.5", staticLoad: "87" },
                            { itemNo: "32208", d: "40", D: "80", T: "24.75", dynamicLoad: "79.5", staticLoad: "93.5" },
                            { itemNo: "32209", d: "45", D: "85", T: "24.75", dynamicLoad: "82", staticLoad: "100" },
                            { itemNo: "32210", d: "50", D: "90", T: "24.75", dynamicLoad: "87.5", staticLoad: "109" },
                            { itemNo: "32211", d: "55", D: "100", T: "26.75", dynamicLoad: "108", staticLoad: "134" },
                            { itemNo: "32212", d: "60", D: "110", T: "28.75", dynamicLoad: "121", staticLoad: "154" },
                            { itemNo: "32213", d: "65", D: "120", T: "31", dynamicLoad: "140", staticLoad: "178" },
                            { itemNo: "32214", d: "70", D: "125", T: "31", dynamicLoad: "153", staticLoad: "195" },
                            { itemNo: "32215", d: "75", D: "130", T: "33.25", dynamicLoad: "168", staticLoad: "215" },
                            { itemNo: "32216", d: "80", D: "140", T: "35.25", dynamicLoad: "190", staticLoad: "247" },
                            { itemNo: "32217", d: "85", D: "150", T: "38.5", dynamicLoad: "210", staticLoad: "277" },
                            { itemNo: "32218", d: "90", D: "160", T: "42.5", dynamicLoad: "235", staticLoad: "315" },
                            { itemNo: "32219", d: "95", D: "170", T: "43", dynamicLoad: "260", staticLoad: "350" },
                            { itemNo: "32220", d: "100", D: "180", T: "46", dynamicLoad: "280", staticLoad: "375" },
                            { itemNo: "32221", d: "105", D: "190", T: "50", dynamicLoad: "315", staticLoad: "420" },
                            { itemNo: "32222", d: "110", D: "200", T: "53", dynamicLoad: "335", staticLoad: "449" },
                            { itemNo: "32224", d: "120", D: "215", T: "58", dynamicLoad: "390", staticLoad: "516" },
                            { itemNo: "32226", d: "130", D: "230", T: "64", dynamicLoad: "530", staticLoad: "815" },
                            { itemNo: "32228", d: "140", D: "250", T: "68", dynamicLoad: "610", staticLoad: "920" },
                            { itemNo: "32230", d: "150", D: "270", T: "73", dynamicLoad: "700", staticLoad: "1070" },
                            { itemNo: "32232", d: "160", D: "290", T: "80", dynamicLoad: "890", staticLoad: "1420" },
                            { itemNo: "32234", d: "170", D: "310", T: "86", dynamicLoad: "1000", staticLoad: "1600" },
                            { itemNo: "32236", d: "180", D: "320", T: "86", dynamicLoad: "1030", staticLoad: "1690" },
                            { itemNo: "32238", d: "190", D: "340", T: "92", dynamicLoad: "1150", staticLoad: "1850" },
                            { itemNo: "32240", d: "200", D: "360", T: "98", dynamicLoad: "1320", staticLoad: "2130" },
                            { itemNo: "32244", d: "220", D: "400", T: "108", dynamicLoad: "1600", staticLoad: "2600" },
                            { itemNo: "32248", d: "240", D: "440", T: "120", dynamicLoad: "1850", staticLoad: "3000" },
                            { itemNo: "32252", d: "260", D: "480", T: "130", dynamicLoad: "2100", staticLoad: "3400" },
                            { itemNo: "322", d: "15-110", D: "35-200", T: "11.75-53", dynamicLoad: "19-335", staticLoad: "19-449" },
                            { itemNo: "32206 QS", d: "30", D: "62", T: "21.25", dynamicLoad: "64.1", staticLoad: "71.9" },
                            { itemNo: "32633", d: "22", D: "41", T: "15", dynamicLoad: "14.1", staticLoad: "15.7" },
                        ]
                    },
                    {
                        id: 37,
                        image: "/images/products/bearings/be_32300.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "32300 Series",
                        description: "32300 Series – Reinforced Tapered Roller Bearings",
                        description2: "The <b>32300 Series</b> Tapered Roller Bearings are designed with enhanced durability and strength to meet the requirements of <b>high-load and high-impact applications</b>. With larger dimensions and reinforced design, this series supports <b>increased radial and axial load capacities</b> compared to standard tapered roller bearings.",
                        bearingTable: [
                            { itemNo: "32303", d: "17", D: "47", T: "19", dynamicLoad: "0.17", staticLoad: "22.5" },
                            { itemNo: "32304", d: "20", D: "52", T: "21", dynamicLoad: "0.23", staticLoad: "27.5" },
                            { itemNo: "32305", d: "25", D: "62", T: "24", dynamicLoad: "0.36", staticLoad: "36.5" },
                            { itemNo: "32306", d: "30", D: "72", T: "27", dynamicLoad: "0.55", staticLoad: "45.5" },
                            { itemNo: "32307", d: "35", D: "80", T: "31", dynamicLoad: "0.73", staticLoad: "58" },
                            { itemNo: "32308", d: "40", D: "90", T: "33", dynamicLoad: "-", staticLoad: "72" },
                            { itemNo: "32309", d: "45", D: "100", T: "36", dynamicLoad: "1.35", staticLoad: "90" },
                            { itemNo: "32310", d: "50", D: "110", T: "40", dynamicLoad: "1.8", staticLoad: "110" },
                            { itemNo: "32311", d: "55", D: "120", T: "43", dynamicLoad: "2.5", staticLoad: "130" },
                            { itemNo: "32312", d: "60", D: "130", T: "46", dynamicLoad: "2.8", staticLoad: "150" },
                            { itemNo: "32313", d: "65", D: "140", T: "48", dynamicLoad: "4.3", staticLoad: "170" },
                            { itemNo: "32314", d: "70", D: "150", T: "51", dynamicLoad: "4.25", staticLoad: "190" },
                            { itemNo: "32315", d: "75", D: "160", T: "55", dynamicLoad: "5.55", staticLoad: "215" },
                            { itemNo: "32316", d: "80", D: "170", T: "58", dynamicLoad: "6.2", staticLoad: "240" },
                            { itemNo: "32317", d: "85", D: "180", T: "60", dynamicLoad: "7.5", staticLoad: "265" },
                            { itemNo: "32318", d: "90", D: "190", T: "64", dynamicLoad: "8.4", staticLoad: "290" },
                            { itemNo: "32319", d: "95", D: "200", T: "67", dynamicLoad: "11", staticLoad: "320" },
                            { itemNo: "32320", d: "100", D: "215", T: "73", dynamicLoad: "12.5", staticLoad: "350" },
                            { itemNo: "32321", d: "105", D: "225", T: "77", dynamicLoad: "14.5", staticLoad: "390" },
                            { itemNo: "32322", d: "110", D: "240", T: "80", dynamicLoad: "17", staticLoad: "430" },
                            { itemNo: "32324", d: "120", D: "260", T: "86", dynamicLoad: "21.5", staticLoad: "490" },
                            { itemNo: "32326", d: "130", D: "280", T: "93", dynamicLoad: "30.5", staticLoad: "560" },
                            { itemNo: "32328", d: "140", D: "300", T: "102", dynamicLoad: "37.8", staticLoad: "630" },
                            { itemNo: "32330", d: "150", D: "320", T: "108", dynamicLoad: "46", staticLoad: "700" },
                            { itemNo: "32332", d: "160", D: "340", T: "114", dynamicLoad: "50", staticLoad: "770" },
                            { itemNo: "32307 B", d: "35", D: "80", T: "32.75", dynamicLoad: "1.15", staticLoad: "114" },
                            { itemNo: "32309 OS", d: "45", D: "100", T: "38.25", dynamicLoad: "1.73", staticLoad: "170" },
                            { itemNo: "32309 B", d: "45", D: "100", T: "38.25", dynamicLoad: "1.66", staticLoad: "176" },
                            { itemNo: "32313 B", d: "65", D: "140", T: "51", dynamicLoad: "3.05", staticLoad: "345" },
                            { itemNo: "32314 B", d: "70", D: "150", T: "54", dynamicLoad: "3.46", staticLoad: "400" },
                        ]
                    },
                    {
                        id: 38,
                        image: "/images/products/bearings/be_33000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "33000 Series",
                        description: "33000 Series – Compact High Thrust Tapered Roller Bearings",
                        description2: "The <b>33000 Series</b> is specially engineered for applications requiring <b>high axial load support in compact radial spaces</b>. These tapered roller bearings provide an ideal balance between <b>load capacity, rigidity, and space-saving design</b>, making them suitable for demanding mechanical systems.",
                        bearingTable: [
                            { itemNo: "33010", d: "50", D: "80", T: "24", dynamicLoad: "65-70", staticLoad: "70-75" },
                            { itemNo: "33011", d: "55", D: "90", T: "27", dynamicLoad: "80-85", staticLoad: "85-95" },
                            { itemNo: "33012", d: "60", D: "95", T: "27", dynamicLoad: "85-90", staticLoad: "90-100" },
                            { itemNo: "33013", d: "65", D: "100", T: "27", dynamicLoad: "90-95", staticLoad: "100-110" },
                            { itemNo: "33014", d: "70", D: "110", T: "31", dynamicLoad: "115-120", staticLoad: "125-130" },
                            { itemNo: "33015", d: "75", D: "115", T: "31", dynamicLoad: "120-125", staticLoad: "130-135" },
                            { itemNo: "33016", d: "80", D: "125", T: "36", dynamicLoad: "145-150", staticLoad: "160-170" },
                            { itemNo: "33017", d: "85", D: "130", T: "36", dynamicLoad: "150-155", staticLoad: "170-180" },
                            { itemNo: "33018", d: "90", D: "140", T: "39", dynamicLoad: "170-175", staticLoad: "190-200" },
                            { itemNo: "33019", d: "95", D: "145", T: "39", dynamicLoad: "175-180", staticLoad: "200-210" },
                            { itemNo: "33020", d: "100", D: "150", T: "39", dynamicLoad: "180-185", staticLoad: "210-220" },
                            { itemNo: "33021", d: "105", D: "160", T: "43", dynamicLoad: "200-210", staticLoad: "230-240" },
                            { itemNo: "33022", d: "110", D: "170", T: "47", dynamicLoad: "225-235", staticLoad: "250-260" },
                            { itemNo: "33024", d: "120", D: "180", T: "48", dynamicLoad: "240-250", staticLoad: "270-280" },
                            { itemNo: "33030", d: "150", D: "225", T: "59", dynamicLoad: "350-360", staticLoad: "400-410" },
                            { itemNo: "332X", d: "60", D: "130", T: "46", dynamicLoad: "150", staticLoad: "170" },
                            { itemNo: "33107", d: "35", D: "80", T: "26", dynamicLoad: "84", staticLoad: "95" },
                            { itemNo: "33108", d: "40", D: "90", T: "28", dynamicLoad: "97.5", staticLoad: "104" },
                            { itemNo: "33109", d: "45", D: "100", T: "30", dynamicLoad: "104", staticLoad: "114" },
                            { itemNo: "33111", d: "55", D: "95", T: "30", dynamicLoad: "136", staticLoad: "156" },
                            { itemNo: "33112", d: "60", D: "100", T: "30", dynamicLoad: "144", staticLoad: "170" },
                            { itemNo: "33113", d: "65", D: "110", T: "34", dynamicLoad: "142", staticLoad: "208" },
                            { itemNo: "33114", d: "70", D: "120", T: "38.52", dynamicLoad: "211", staticLoad: "250" },
                            { itemNo: "33115", d: "75", D: "125", T: "37", dynamicLoad: "176", staticLoad: "265" },
                            { itemNo: "33116", d: "80", D: "130", T: "37", dynamicLoad: "179", staticLoad: "-" },
                            { itemNo: "33117", d: "85", D: "140", T: "41", dynamicLoad: "268", staticLoad: "-" },
                            { itemNo: "33118", d: "90", D: "150", T: "45", dynamicLoad: "251", staticLoad: "-" },
                            { itemNo: "33885/21", d: "44.45", D: "95.25", T: "27.78", dynamicLoad: "135", staticLoad: "-" },
                            { itemNo: "33889/21", d: "50.8", D: "95.25", T: "27.78", dynamicLoad: "130", staticLoad: "-" },
                            { itemNo: "33895/21", d: "53.98", D: "95.25", T: "27.78", dynamicLoad: "130", staticLoad: "-" },
                            { itemNo: "331257", d: "127", D: "203.2", T: "57.15", dynamicLoad: "370", staticLoad: "420" },
                            { itemNo: "33205", d: "25", D: "52", T: "22", dynamicLoad: "41", staticLoad: "45" },
                            { itemNo: "33206", d: "30", D: "62", T: "25", dynamicLoad: "54", staticLoad: "60" },
                            { itemNo: "33207", d: "35", D: "72", T: "28", dynamicLoad: "68", staticLoad: "77" },
                            { itemNo: "33208", d: "40", D: "80", T: "32", dynamicLoad: "82", staticLoad: "92" },
                            { itemNo: "33209", d: "45", D: "85", T: "32", dynamicLoad: "89", staticLoad: "101" },
                            { itemNo: "33210", d: "50", D: "90", T: "33", dynamicLoad: "97", staticLoad: "110" },
                            { itemNo: "33211", d: "55", D: "100", T: "35", dynamicLoad: "110", staticLoad: "125" },
                            { itemNo: "33212", d: "60", D: "110", T: "38", dynamicLoad: "124", staticLoad: "142" },
                            { itemNo: "33213", d: "65", D: "120", T: "41", dynamicLoad: "139", staticLoad: "160" },
                            { itemNo: "33214", d: "70", D: "125", T: "41", dynamicLoad: "145", staticLoad: "170" },
                            { itemNo: "33215", d: "70", D: "130", T: "41", dynamicLoad: "150", staticLoad: "175" },
                            { itemNo: "33216", d: "80", D: "140", T: "46", dynamicLoad: "170", staticLoad: "200" },
                            { itemNo: "33219", d: "95", D: "170", T: "58", dynamicLoad: "374", staticLoad: "582" },
                            { itemNo: "33220", d: "100", D: "180", T: "63", dynamicLoad: "429", staticLoad: "655" },
                            { itemNo: "331126", d: "105", D: "170", T: "40.2", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "332330", d: "70.01", D: "130", T: "57.75", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "33885/21", d: "44.5", D: "95.25", T: "27.783", dynamicLoad: "135", staticLoad: "141" },
                            { itemNo: "33889/21", d: "50.8", D: "95.25", T: "27.78", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "33895/21", d: "53.975", D: "95.25", T: "27.783", dynamicLoad: "130", staticLoad: "161" },
                        ]
                    },
                    {
                        id: 39,
                        image: "/images/products/bearings/be_inch.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "Inch Series",
                        description: "Inch Series – Tapered Roller Bearings",
                        description2: "The <b>Inch Series</b> of tapered roller bearings is designed to meet the specific dimensional and performance needs of machinery and vehicles originally built to imperial (inch-based) standards. These bearings deliver <b>high radial and axial load capacity, long service life</b>, and <b>dimensional interchangeability</b> with leading global standards.",
                        bearingTable: [
                            { itemNo: "395/394A", d: "2.5", D: "4.33", T: "0.8661", dynamicLoad: "102", staticLoad: "120" },
                            { itemNo: "580/572", d: "3.25", D: "5.4331", T: "1.4213", dynamicLoad: "218", staticLoad: "263" },
                            { itemNo: "665/653", d: "2.75", D: "5.75", T: "1.625", dynamicLoad: "222", staticLoad: "272" },
                            { itemNo: "LM48548/LM48510", d: "1.375", D: "2.5625", T: "0.7716", dynamicLoad: "51", staticLoad: "53" },
                            { itemNo: "LM67048/LM67010", d: "1.25", D: "2.328", T: "0.625", dynamicLoad: "43", staticLoad: "41" },
                            { itemNo: "2474/2420", d: "31.75", D: "61.892", T: "19.05", dynamicLoad: "50", staticLoad: "52" },
                            { itemNo: "25580/25520", d: "44.45", D: "82.931", T: "23.812", dynamicLoad: "86", staticLoad: "98" },
                            { itemNo: "387/382", d: "5715", D: "98.425", T: "21.946", dynamicLoad: "89", staticLoad: "102" },
                            { itemNo: "395/394A", d: "63.5", D: "110", T: "21.946", dynamicLoad: "102", staticLoad: "120" },
                            { itemNo: "655/653", d: "69.85", D: "146.05", T: "41.275", dynamicLoad: "222", staticLoad: "272" },
                            { itemNo: "LM48548/LM48510", d: "34.925", D: "65.088", T: "19.05", dynamicLoad: "51", staticLoad: "53" },
                            { itemNo: "903249/903210", d: "82.55", D: "146.05", T: "39.69", dynamicLoad: "210", staticLoad: "245" },
                            { itemNo: "02474/20", d: "37", D: "72", T: "17", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "02476/20", d: "37", D: "76", T: "17", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "02872/20", d: "40", D: "80", T: "18", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "02478/20", d: "40", D: "88", T: "18", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "2780/20", d: "40", D: "80", T: "18", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "2788/20", d: "44", D: "88", T: "35", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "2789/20", d: "44", D: "89", T: "18", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "2877/20", d: "45", D: "77", T: "20", dynamicLoad: "-", staticLoad: "-" },

                        ]
                    },
                    {
                        id: 40,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "34300-34900 Series",
                        description: "34300–34900 Series – Inch Tapered Roller Bearings",
                        description2: "The <b>34300 to 34900 Series</b> tapered roller bearings are precision-engineered in <b>inch-based dimensions</b> to support combined axial and radial loads. This series provides a compact yet durable design for demanding mechanical systems, offering excellent load performance and compatibility with legacy equipment.",
                        bearingTable: [
                            { itemNo: "34306", d: "30", D: "72", T: "22", dynamicLoad: "45", staticLoad: "38" },
                            { itemNo: "34307", d: "35", D: "80", T: "23", dynamicLoad: "52", staticLoad: "44" },
                            { itemNo: "34309", d: "45", D: "100", T: "25", dynamicLoad: "75", staticLoad: "65" },
                            { itemNo: "34310", d: "50", D: "110", T: "27", dynamicLoad: "85", staticLoad: "74" },
                            { itemNo: "34478", d: "50.8", D: "95.25", T: "25.4", dynamicLoad: "80", staticLoad: "70" },
                            { itemNo: "34500", d: "55", D: "100", T: "28", dynamicLoad: "90", staticLoad: "85" },
                            { itemNo: "34630", d: "57.15", D: "114.3", T: "30.16", dynamicLoad: "100", staticLoad: "95" },
                            { itemNo: "34710", d: "60.33", D: "122", T: "32", dynamicLoad: "110", staticLoad: "105" },
                            { itemNo: "34820", d: "66.67", D: "136.53", T: "38.1", dynamicLoad: "130", staticLoad: "125" },
                            { itemNo: "34990", d: "71.44", D: "146.05", T: "39.69", dynamicLoad: "140", staticLoad: "132" },
                            { itemNo: "34820/34823D", d: "66.67", D: "136.53", T: "42.86", dynamicLoad: "160", staticLoad: "155" },
                            { itemNo: "34306/34306D", d: "30", D: "72", T: "26.5", dynamicLoad: "55", staticLoad: "48" },

                        ]
                    },
                    {
                        id: 41,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "35400-37900 Series",
                        description: "35400–37900 Series – Inch Tapered Roller Bearings",
                        description2: "The <b>35400 to 37900 Series</b> of <b>inch-size tapered roller bearings</b> are engineered to provide high load bearing capabilities in applications requiring precise axial and radial alignment. These bearings are particularly suited for heavy-duty and industrial-grade operations.",
                        bearingTable: [
                            { itemNo: "354/59", d: "40", D: "90", T: "23", dynamicLoad: "70.4", staticLoad: "81.5" },
                            { itemNo: "354/070902", d: "35", D: "80", T: "23", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "355/52", d: "35", D: "52", T: "20", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "3579/25", d: "42.8", D: "87.3", T: "30.16", dynamicLoad: "113", staticLoad: "134" },
                            { itemNo: "3585/25", d: "41.2", D: "87.3", T: "30.16", dynamicLoad: "113", staticLoad: "134" },
                            { itemNo: "365049 BA", d: "30.1", D: "64.2", T: "21.43", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "3665/92", d: "44.4", D: "85.7", T: "23.81", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "368/62", d: "50.8", D: "90", T: "25", dynamicLoad: "94", staticLoad: "91.5" },
                            { itemNo: "369/92", d: "47.6", D: "85.7", T: "22.2", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "37425/625", d: "107.9", D: "158.7", T: "23.02", dynamicLoad: "130", staticLoad: "169" },
                            { itemNo: "37431/625", d: "109.5", D: "158.7", T: "22.02", dynamicLoad: "130", staticLoad: "169" },
                            { itemNo: "3779/20", d: "47.6", D: "93.26", T: "30.16", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "3780/20", d: "50.8", D: "93.26", T: "30.16", dynamicLoad: "129", staticLoad: "137" },
                            { itemNo: "3782/20", d: "44.4", D: "93.26", T: "30.16", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "386A/382 A", d: "44.45", D: "85.72", T: "22.22", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "387/82", d: "50.8", D: "90", T: "25", dynamicLoad: "94", staticLoad: "91.5" },
                            { itemNo: "389/82", d: "63.5", D: "100", T: "25", dynamicLoad: "-", staticLoad: "-" },
                        ]
                    },
                    {
                        id: 42,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "39500-39900 Series",
                        description: "39500–39900 Series – Extra Large Inch Tapered Roller Bearings",
                        description2: "The <b>39500 to 39900 Series</b> represents our <b>extra-large inch-size tapered roller bearings</b>, designed for heavy-duty applications that demand superior load capacity, durability, and precision. These bearings are ideally suited for extreme working conditions where both axial and radial loads must be supported with minimal friction and maximum reliability.",
                        bearingTable: [
                            { itemNo: "39581/39520", d: "57.15", D: "112.71", T: "30.16", dynamicLoad: "120", staticLoad: "140" },
                            { itemNo: "39684/39620", d: "73.03", D: "133.35", T: "30.16", dynamicLoad: "140", staticLoad: "160" },
                            { itemNo: "3978/3920", d: "77.79", D: "112.71", T: "30.16", dynamicLoad: "130", staticLoad: "150" },
                            { itemNo: "3984/3920", d: "66.68", D: "112.71", T: "30.16", dynamicLoad: "125", staticLoad: "145" },
                            { itemNo: "3994/3920", d: "66.68", D: "112.71", T: "30.16", dynamicLoad: "128", staticLoad: "148" },
                            { itemNo: "390/94", d: "47.625", D: "90", T: "25", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "39585/20", d: "50.8", D: "95.25", T: "29.37", dynamicLoad: "120", staticLoad: "132" },
                            { itemNo: "395A/394A", d: "47.625", D: "90", T: "25", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "3975/20", d: "47.625", D: "101.6", T: "29.37", dynamicLoad: "140", staticLoad: "155" },
                            { itemNo: "3981/20", d: "50.8", D: "101.6", T: "29.37", dynamicLoad: "140", staticLoad: "155" },
                            { itemNo: "3982/20", d: "44.45", D: "101.6", T: "29.37", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "3984/20", d: "47.625", D: "101.6", T: "29.37", dynamicLoad: "-", staticLoad: "-" },
                            { itemNo: "399/94", d: "55.575", D: "90", T: "25", dynamicLoad: "-", staticLoad: "-" }
                        ]
                    },
                    {
                        id: 43,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "407000-49800 Series",
                        description: "407000–49800 Series – Extra Large Inch Tapered Roller Bearings",
                        description2: "The <b>407000 to 49800 Series</b> comprises high-performance <b>extra-large inch-size tapered roller bearings</b>, designed for heavy-duty applications requiring precise axial and radial load handling over extended operational periods. This series is engineered to accommodate high-impact loads in extreme environments.",
                        bearingTable: [
                            { itemNo: "407232", d: "160", D: "215", T: "43" },
                            { itemNo: "408215", d: "75", D: "125", T: "31" },
                            { itemNo: "411919", d: "95", D: "130", T: "31" },
                            { itemNo: "414/18", d: "90", D: "160", T: "34" },
                            { itemNo: "42375", d: "187", D: "225", T: "46" },
                            { itemNo: "42381", d: "190", D: "240", T: "50" },
                            { itemNo: "42687/20", d: "130", D: "180", T: "34" },
                            { itemNo: "42690/20", d: "135", D: "185", T: "36" },
                            { itemNo: "43449/10", d: "105", D: "150", T: "40" },
                            { itemNo: "438/29", d: "75", D: "125", T: "28" },
                            { itemNo: "438/32", d: "75", D: "130", T: "28" },
                            { itemNo: "44143", d: "110", D: "160", T: "35" },
                            { itemNo: "44643/10", d: "130", D: "180", T: "42" },
                            { itemNo: "44649/10", d: "135", D: "190", T: "44" },
                            { itemNo: "45280/20", d: "100", D: "150", T: "33" },
                            { itemNo: "45282/20", d: "105", D: "155", T: "33" },
                            { itemNo: "45284/20", d: "110", D: "160", T: "33" },
                            { itemNo: "45449", d: "115", D: "170", T: "35" },
                            { itemNo: "462/53", d: "65", D: "120", T: "25" },
                            { itemNo: "469/53", d: "70", D: "125", T: "28" },
                            { itemNo: "47490/20", d: "160", D: "210", T: "40" },
                            { itemNo: "47679/20", d: "140", D: "190", T: "40" },
                            { itemNo: "47681/20", d: "145", D: "195", T: "40" },
                            { itemNo: "482/72", d: "80", D: "140", T: "28" },
                            { itemNo: "48548/10", d: "120", D: "170", T: "40" },
                            { itemNo: "495/93", d: "60", D: "110", T: "22" },
                            { itemNo: "496/93", d: "65", D: "115", T: "24" },
                            { itemNo: "497/93", d: "70", D: "120", T: "24" },
                            { itemNo: "498/93", d: "75", D: "125", T: "28" },
                            { itemNo: "1748120", d: "60", D: "110", T: "22" },
                            { itemNo: "407000", d: "66.68", D: "127", T: "30" },
                            { itemNo: "42800", d: "76.2", D: "133.35", T: "31.75" },
                            { itemNo: "44800", d: "88.9", D: "146.05", T: "34.13" },
                            { itemNo: "46900", d: "95.25", D: "158.75", T: "36.51" },
                            { itemNo: "49800", d: "101.6", D: "165.1", T: "38.1" },
                        ]
                    },
                    {
                        id: 44,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "501000-59800 Series",
                        description: "501000–59800 Series – Extra Large Inch Tapered Roller Bearings",
                        description2: "The <b>501000 to 59800 Series</b> represents a specialized range of <b>extra-large inch-size tapered roller bearings</b>, crafted to handle high radial and axial loads under severe operating conditions. This series supports equipment where <b>extreme strength, load endurance, and dimensional stability</b> are critical.",
                        bearingTable: [
                            { itemNo: "50 KW", d: "50", D: "90", T: "23" },
                            { itemNo: "501349/10", d: "95", D: "140", T: "30" },
                            { itemNo: "50933", d: "65", D: "120", T: "24" },
                            { itemNo: "511946/10", d: "110", D: "170", T: "35" },
                            { itemNo: "51333", d: "65", D: "130", T: "28" },
                            { itemNo: "518445", d: "90", D: "160", T: "38" },
                            { itemNo: "518712", d: "95", D: "165", T: "40" },
                            { itemNo: "518713", d: "95", D: "165", T: "40" },
                            { itemNo: "522380", d: "100", D: "170", T: "42" },
                            { itemNo: "522549/10", d: "110", D: "180", T: "42" },
                            { itemNo: "52375/618 UI", d: "190", D: "240", T: "55" },
                            { itemNo: "524850", d: "100", D: "160", T: "40" },
                            { itemNo: "527/22", d: "110", D: "190", T: "44" },
                            { itemNo: "53150/375", d: "130", D: "210", T: "50" },
                            { itemNo: "535/32", d: "75", D: "140", T: "28" },
                            { itemNo: "560/52 A", d: "40", D: "90", T: "22" },
                            { itemNo: "566/63", d: "30", D: "80", T: "18" },
                            { itemNo: "575/72", d: "35", D: "90", T: "20" },
                            { itemNo: "582/72", d: "40", D: "95", T: "22" },
                            { itemNo: "594/92", d: "45", D: "105", T: "22" },
                            { itemNo: "598/92", d: "50", D: "110", T: "25" },
                            { itemNo: "501349", d: "95", D: "140", T: "30" },
                            { itemNo: "53162/375", d: "130", D: "215", T: "50" },
                            { itemNo: "53176/375", d: "135", D: "220", T: "50" },
                            { itemNo: "543565", d: "140", D: "225", T: "55" },
                            { itemNo: "543805", d: "150", D: "240", T: "58" },
                            { itemNo: "55176/375", d: "160", D: "260", T: "58" },
                            { itemNo: "55200/437", d: "170", D: "280", T: "62" },
                            { itemNo: "56425/650", d: "190", D: "310", T: "70" },
                            { itemNo: "568968/20", d: "200", D: "320", T: "75" },
                            { itemNo: "57410/29710", d: "210", D: "330", T: "78" },
                            { itemNo: "575725 (542245)", d: "220", D: "340", T: "80" },
                            { itemNo: "581079 (Volvo)", d: "230", D: "350", T: "85" }
                        ]
                    },
                    {
                        id: 45,
                        image: "/images/products/bearings/be_34300_613000.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "62100-613000 Series",
                        description: "62100–613000 Series – Multi-Range Tapered Roller Bearings",
                        description2: "The <b>62100 to 613000 Series</b> of <b>Multi-Range Tapered Roller Bearings</b> offers a comprehensive range of sizes tailored for light to medium-duty applications. These bearings are designed to support both <b>radial and axial loads</b>, providing smooth rotation, durability, and long service life across a wide array of industrial and automotive applications.",
                        bearingTable: [
                            { itemNo: "621/12", d: "12", D: "32", T: "10" },
                            { itemNo: "623/12", d: "12", D: "37", T: "12" },
                            { itemNo: "6379/20", d: "39", D: "72", T: "17" },
                            { itemNo: "6386/20", d: "43", D: "80", T: "18" },
                            { itemNo: "639116", d: "45", D: "85", T: "19" },
                            { itemNo: "639174", d: "50", D: "90", T: "20" },
                            { itemNo: "655/52", d: "25", D: "52", T: "15" },
                            { itemNo: "6576/35", d: "30", D: "62", T: "16" },
                            { itemNo: "658/52", d: "25", D: "52", T: "15" },
                            { itemNo: "6581/35", d: "30", D: "62", T: "16" },
                            { itemNo: "659/52", d: "25", D: "52", T: "15" },
                            { itemNo: "663/52", d: "30", D: "58", T: "16" },
                            { itemNo: "665/52", d: "35", D: "62", T: "16" },
                            { itemNo: "669/53", d: "40", D: "68", T: "18" },
                            { itemNo: "67048/10", d: "40", D: "80", T: "20" },
                            { itemNo: "67390/22", d: "45", D: "90", T: "22" },
                            { itemNo: "68149/11", d: "45", D: "85", T: "20" },
                            { itemNo: "683/72", d: "50", D: "90", T: "20" },
                            { itemNo: "685/72", d: "55", D: "95", T: "22" },
                            { itemNo: "69345/10", d: "55", D: "100", T: "25" },
                            { itemNo: "603049/11", d: "60", D: "110", T: "28" },
                            { itemNo: "613449/10", d: "65", D: "120", T: "30" }
                        ]
                    },
                    {
                        id: 46,
                        image: "/images/products/bearings/be_710000_78500.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "710000-78500 Series",
                        description: "710000–78500 Series – High-Capacity Tapered Roller Bearings",
                        description2: "The <b>710000 to 78500 Series</b> represents a specialized line of <b>high-capacity tapered roller bearings</b>, designed to handle demanding applications where higher radial and axial load capacities are essential. With precision-engineered components and robust construction, these bearings are ideal for medium to heavy-duty operations.",
                        bearingTable: [
                            { itemNo: "710949/10", d: "45", D: "95", T: "24" },
                            { itemNo: "715343/11", d: "50", D: "110", T: "28" },
                            { itemNo: "715345/11", d: "55", D: "115", T: "28" },
                            { itemNo: "715345/13", d: "55", D: "115", T: "32" },
                            { itemNo: "72212/42887", d: "60", D: "130", T: "31" },
                            { itemNo: "77213", d: "65", D: "140", T: "33" },
                            { itemNo: "78551/250", d: "75", D: "160", T: "35" },

                        ]
                    },
                    {
                        id: 47,
                        image: "/images/products/bearings/be_806000-89400.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "806000-89400 Series",
                        description: "806000–89400 Series – Large Inch Tapered Roller Bearings",
                        description2: "The <b>806000 to 89400 Series</b> features a range of <b>large-inch tapered roller bearings</b> designed for superior load-bearing capabilities in both radial and axial directions. Built to meet the requirements of heavy-duty industrial applications, these bearings offer exceptional strength, precision, and reliability.",
                        bearingTable: [
                            { itemNo: "08072 (TVP)", d: "10", D: "30", T: "9" },
                            { itemNo: "806649/10", d: "65", D: "120", T: "28" },
                            { itemNo: "807049/10", d: "70", D: "130", T: "31" },
                            { itemNo: "819349/10", d: "75", D: "140", T: "35" },
                            { itemNo: "822049/10", d: "80", D: "150", T: "35" },
                            { itemNo: "84249/10", d: "85", D: "160", T: "38" },
                            { itemNo: "84548/10", d: "85", D: "160", T: "38" },
                            { itemNo: "86649/10", d: "90", D: "170", T: "40" },
                        ]
                    },
                ],
            },
            {
                name: "Thrust Bearings",
                products: [
                    {
                        id: 48,
                        image: "/images/products/bearings/be_thrust.png",
                        image2: "/images/products/bearings/bearing_2d.png",
                        name: "Thrust Taper Roller Bearing Series",
                        description2: "The <b>Thrust Tapered Roller Bearing Series</b> is engineered to handle high axial (thrust) loads efficiently in one direction. Designed with tapered raceways and rolling elements, these bearings provide optimal load distribution, precision alignment, and increased service life, making them essential for applications requiring axial load support in compact spaces.",
                        bearingTable: [
                            { itemNo: "T63", d: "16.129", D: "41.275", T: "12.7" },
                            { itemNo: "T77", d: "19.304", D: "41.275", T: "12.7" },
                            { itemNo: "T76", d: "19.304", D: "41.275", T: "13.487" },
                            { itemNo: "T86", d: "20.256", D: "39.688", T: "14.288" },
                            { itemNo: "T82", d: "20.879", D: "41.275", T: "13.487" },
                            { itemNo: "T88", d: "22.479", D: "48.021", T: "15.088" },
                            { itemNo: "T93", d: "24.054", D: "44.958", T: "13.487" },
                            { itemNo: "T94", d: "24.054", D: "48.021", T: "15.088" },
                            { itemNo: "T95", d: "24.103", D: "50.8", T: "15.875" },
                            { itemNo: "T101", d: "25.654", D: "50.8", T: "15.875" },
                            { itemNo: "T104", d: "26.289", D: "50.8", T: "15.875" },
                            { itemNo: "T107", d: "27.229", D: "50.8", T: "15.875" },
                            { itemNo: "T110", d: "28.829", D: "53.188", T: "15.875" },
                            { itemNo: "T113", d: "28.829", D: "55.562", T: "15.875" },
                            { itemNo: "T120", d: "30.416", D: "54.745", T: "11.43" },
                            { itemNo: "T119", d: "30.416", D: "55.562", T: "15.875" },
                            { itemNo: "T126", d: "32.004", D: "55.562", T: "15.875" },
                            { itemNo: "T139", d: "35.179", D: "58.739", T: "15.875" },
                            { itemNo: "T142", d: "35.179", D: "62.708", T: "19.431" },
                            { itemNo: "T149", d: "38.302", D: "55.883", T: "19.431" },
                            { itemNo: "T158", d: "40.234", D: "65.883", T: "19.431" },
                            { itemNo: "T1760", d: "44.623", D: "76.2", T: "10.922" },
                            { itemNo: "T199", d: "51.054", D: "74.612", T: "15.875" },
                            { itemNo: "T302", d: "76.454", D: "133.35", T: "34.925" },
                            { itemNo: "T309", d: "78.583", D: "102.395", T: "15.875" },
                            { itemNo: "T387", d: "98.425", D: "127", T: "17.462" },
                            { itemNo: "T484", d: "123.012", D: "152.4", T: "17.462" },
                            { itemNo: "T581", d: "147.638", D: "177", T: "17.462" },
                            { itemNo: "T130", d: "27.102", D: "66.675", T: "19.446" },
                            { itemNo: "T1260", d: "32.004", D: "55.562", T: "15.875" },
                            { itemNo: "T128", d: "32.004", D: "66.675", T: "18.654" },
                            { itemNo: "T127", d: "32.004", D: "66.675", T: "19.446" },
                            { itemNo: "T1380", d: "35.179", D: "59.4", T: "15.875" },
                            { itemNo: "T136", d: "35.179", D: "66.675", T: "18.654" },
                            { itemNo: "T138", d: "35.179", D: "66.675", T: "19.446" },
                            { itemNo: "T144", d: "36.754", D: "66.675", T: "19.446" },
                            { itemNo: "T152", d: "38.354", D: "72.619", T: "20.368" },
                            { itemNo: "T151", d: "38.354", D: "72.619", T: "21.433" },
                            { itemNo: "T157", d: "39.954", D: "72.619", T: "21.433" },
                            { itemNo: "T178", d: "40.386", D: "73", T: "19" },
                            { itemNo: "T163", d: "41.529", D: "72.619", T: "21.433" },
                            { itemNo: "T169", d: "43.104", D: "82.956", T: "23.812" },
                            { itemNo: "T176", d: "44.704", D: "82.956", T: "23.812" },
                            { itemNo: "T177", d: "45", D: "73", T: "20" },
                            { itemNo: "T1775", d: "45", D: "74.5", T: "20.221" },
                            { itemNo: "T177A", d: "45.484", D: "73", T: "20" },
                            { itemNo: "T1921", d: "46.279", D: "80.01", T: "15.977" },
                            { itemNo: "T182", d: "46.279", D: "82.956", T: "23.812" },
                            { itemNo: "T1920", d: "46.279", D: "85.471", T: "15.383" },
                            { itemNo: "T189", d: "47.879", D: "82.956", T: "23.02" },
                            { itemNo: "T188", d: "47.879", D: "82.956", T: "23.812" },
                            { itemNo: "T1880", d: "47.879", D: "83.21", T: "23.546" },
                            { itemNo: "T194", d: "49.454", D: "93.269", T: "26.975" },
                            { itemNo: "T201", d: "51.054", D: "93.269", T: "26.187" },
                            { itemNo: "T202", d: "51.054", D: "93.269", T: "26.975" },
                            { itemNo: "T209", d: "52.629", D: "93.269", T: "26.87" },
                            { itemNo: "T208", d: "52.629", D: "93.269", T: "26.975" },
                            { itemNo: "T252", d: "63.754", D: "111.125", T: "25.796" },
                            { itemNo: "T251", d: "63.754", D: "111.125", T: "26.988" }
                        ]
                    },
                ],
            },
        ],
    },
    // "clutch-brake-pads": {
    //     name: "Tactor Break Disk",
    //     subCategories: [
    //         {
    //             name: "Mahindra Inter ",
    //             products: [
    //                 {
    //                     image: "",
    //                     name: "Product coming soon",
    //                     // description: "Optimized for heavy-duty agricultural equipment requiring consistent performance.",
    //                     // keyBenefits: [
    //                     //     "Heat resistant",
    //                     //     "Smooth engagement",
    //                     //     "Long-lasting friction material",
    //                     // ],
    //                     // technicalSpecifications: {
    //                     //     "Material": "Asbestos-free composite",
    //                     //     "Thickness": "5-8 mm",
    //                     //     "Diameter": "120 – 250 mm",
    //                     // },
    //                     // standardSizes: [
    //                     //     { size: "Standard", diameter: "200 mm", length: "-" },
    //                     // ],
    //                 },
    //             ],
    //         },
    //         {
    //             name: "Brake Linings",
    //             products: [
    //                 {
    //                     image: "",
    //                     name: "Product coming soon",
    //                     // description: "Flexible and durable lining used in heavy trucks and cranes.",
    //                     // keyBenefits: [
    //                     //     "High thermal stability",
    //                     //     "No noise",
    //                     //     "Long wear life",
    //                     // ],
    //                     // technicalSpecifications: {
    //                     //     "Material": "Woven non-asbestos",
    //                     //     "Width": "Up to 200 mm",
    //                     //     "Roll Length": "10 m",
    //                     // },
    //                     // standardSizes: [
    //                     //     { size: "Custom Roll", diameter: "-", length: "10 m" },
    //                     // ],
    //                 },
    //             ],
    //         },
    //     ],
    // },
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
    // {
    //     icon: Settings,
    //     title: 'Tactor Break Disk',
    //     description: 'Reliable tractor clutch and brake components designed for agricultural vehicles and heavy-duty applications.',
    //     features: ['High-performance materials', 'Long-lasting durability', 'Agricultural vehicle focus', 'Tested quality standards'],
    //     type: 'clutch-brake-pads',
    //     background: '/images/carouselImages/breakdisk4.jpeg'
    // }
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
