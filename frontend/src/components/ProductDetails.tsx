
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'filter-bags' | 'roll-bearings' | 'clutch-brake-pads' | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ isOpen, onClose, productType }) => {
  const getProductContent = () => {
    switch (productType) {
      case 'filter-bags':
        return {
          title: 'Industrial Filter Bags – Application Details',
          sections: [
            {
              title: 'Cement Plants',
              content: 'Filter bags are used in kiln exhaust systems, clinker coolers, and raw mill hoppers to capture fine dust particles and control emissions. They ensure environmental compliance and reduce the risk of material loss due to dust escape.'
            },
            {
              title: 'Steel & Metal Industries',
              content: 'In steel furnaces and sintering plants, filter bags trap metallic dust, fumes, and particulate matter from high-temperature gases. This helps in creating a safe working environment and reduces air contamination.'
            },
            {
              title: 'Power Plants',
              content: 'Bag filters are used in coal-fired and biomass power plants to handle fly ash and fine particulate matter from boiler exhaust systems. High-temperature filter media like PPS or PTFE are often used for thermal resistance.'
            },
            {
              title: 'Chemical Processing',
              content: 'Used in filtration of chemical vapors, process air, and powders. Filter bags help in maintaining process purity, preventing product contamination, and ensuring worker safety.'
            },
            {
              title: 'Pharmaceuticals',
              content: 'Critical for sterile powder handling and airborne particle control in cleanroom environments. Ensures product purity and regulatory compliance (GMP).'
            },
            {
              title: 'Food & Beverage',
              content: 'Used in dust control systems for sugar, flour, grain, and spice production lines. Prevents product loss, maintains air quality, and reduces fire hazards from combustible dust.'
            },
            {
              title: 'Paint Shops & Coating Lines',
              content: 'Filter bags capture fine overspray particles and maintain clean air environments in surface coating and powder coating processes.'
            },
            {
              title: 'Mining & Minerals',
              content: 'In crushing, grinding, and material transfer points, filter bags trap mineral dust, improving air quality and reducing maintenance on nearby equipment.'
            },
            {
              title: 'Textile Industry',
              content: 'Used to collect fiber lint and airborne particles from weaving and spinning operations, helping prevent machinery fouling and fire risks.'
            },
            {
              title: 'Woodworking & Furniture',
              content: 'Collects sawdust, wood chips, and fine particles generated during cutting, sanding, and polishing, ensuring clean air and safe workshops.'
            }
          ]
        };

      case 'roll-bearings':
        return {
          title: 'Roll Bearings – Application Details',
          sections: [
            {
              title: 'Automotive',
              content: 'Used in wheel hubs, axles, and gearboxes to manage both radial and axial loads. They provide smooth rotation, reduce noise, and increase vehicle efficiency and reliability.'
            },
            {
              title: 'Agricultural Machinery',
              content: 'Tapered roller bearings support heavy loads in tractors, tillers, and harvesters. They handle vibration, uneven terrain, and prolonged operation in tough environments.'
            },
            {
              title: 'Construction Equipment',
              content: 'In earthmovers, compactors, and loaders, bearings provide high load-bearing capacity and shock resistance, ensuring smooth operation on rough construction sites.'
            },
            {
              title: 'Industrial Gearboxes',
              content: 'Support internal rotating shafts and gears, maintaining alignment and smooth torque transmission. Reduces wear and energy loss in mechanical drives.'
            },
            {
              title: 'Electric Motors & Pumps',
              content: 'Bearings reduce friction and support the rotor inside electric motors or pump systems. Precision bearings help maintain motor efficiency and long service life.'
            },
            {
              title: 'Textile Machinery',
              content: 'Used in high-speed spindles and rollers. Bearings ensure minimal vibration, smooth rotation, and high accuracy in spinning and weaving equipment.'
            },
            {
              title: 'Conveyors & Rollers',
              content: 'Bearings support belt rollers and pulleys, reducing resistance and improving load handling in logistics, packaging, and material handling lines.'
            },
            {
              title: 'Mining & Quarry Equipment',
              content: 'Heavy-duty bearings are used in crushers, screeners, and conveyor drives. They handle abrasive conditions, high load, and continuous operation.'
            },
            {
              title: 'Steel Plants',
              content: 'Bearings in rolling mills and continuous casting machines endure extreme heat and high loads, ensuring consistent metal forming and rolling.'
            },
            {
              title: 'Railway Components',
              content: 'Used in axle assemblies and suspension systems. Bearings reduce friction and shock during rail travel, improving efficiency and safety.'
            }
          ]
        };

      // case 'clutch-brake-pads':
      //   return {
      //     title: 'Tactor Break Disk & Sleeves – Application Details',
      //     sections: [
      //       {
      //         title: 'Tractors & Farm Vehicles',
      //         content: 'Clutch pads transfer engine power to the transmission, enabling smooth gear shifts and preventing slippage under heavy loads. Brake pads ensure safe stopping even in muddy or rugged farm environments.'
      //       },
      //       {
      //         title: 'Harvesting Equipment',
      //         content: 'Clutch systems in harvesters rely on robust friction pads to operate under load variations and frequent start/stop cycles during field operations.'
      //       },
      //       {
      //         title: 'Tillage & Seeding Machinery',
      //         content: 'Require smooth torque transfer and precise control. Clutch sleeves and pads play a key role in effective soil preparation and seed sowing.'
      //       },
      //       {
      //         title: 'Construction Machinery',
      //         content: 'Used in small-to-medium off-road vehicles like backhoe loaders and mini excavators, where high braking force and clutch reliability are essential under load.'
      //       },
      //       {
      //         title: 'Utility Vehicles & Loaders',
      //         content: 'Brake and clutch systems depend on these components for consistent control, especially in stop-start operations across industrial or rural job sites.'
      //       },
      //       {
      //         title: 'Trailer Brake Assemblies',
      //         content: 'Brake pads and sleeves are critical in mechanical and hydraulic braking systems for agricultural or industrial trailers.'
      //       },
      //       {
      //         title: 'OEM Spare Parts Market',
      //         content: 'Your products serve as replacements or upgrades for original equipment used by major tractor and machinery manufacturers, meeting OEM fit and performance standards.'
      //       },
      //       {
      //         title: 'Rural Transport Vehicles (RTVs)',
      //         content: 'Clutch and brake components in these multipurpose utility vehicles ensure safe, reliable transport of goods and people in rural infrastructure zones.'
      //       }
      //     ]
      //   };

      default:
        return null;
    }
  };

  const content = getProductContent();

  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark-text mb-4">
            {content.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              <h3 className="text-lg font-semibold text-brand-dark-text mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
