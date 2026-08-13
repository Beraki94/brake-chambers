import React from 'react';
import { BrakeChamber, BrakeAccessory } from '../../types';

interface ProductSeoBlockProps {
  product: BrakeChamber | BrakeAccessory;
}

export default function ProductSeoBlock({ product }: ProductSeoBlockProps) {
  const isChamber = 'type' in product;
  const isSpringBrake = product.category === 'Spring Brake';
  const isServiceChamber = product.category === 'Service Brake';
  const isADB = product.category === 'Air Disc Actuator';
  
  const functionText = isSpringBrake 
    ? 'parking and emergency braking' 
    : isServiceChamber 
      ? 'primary braking systems' 
      : isADB 
        ? 'high-performance disc braking' 
        : 'maintaining optimal brake performance';

  const componentText = isChamber ? product.type : 'component';
  
  // Extract specific details to make text 100% unique per product
  const material = isChamber ? product.material : 'heavy-duty materials';
  const strokeDesc = isChamber && product.strokeInch ? `with a precise ${product.strokeInch} stroke` : '';
  const pushRodDesc = isChamber && product.pushRodLengthInch ? ` and an easily configurable ${product.pushRodLengthInch} pushrod` : '';
  const weight = isChamber && product.specifications?.weight ? `Weighing strictly ${product.specifications.weight}, ` : '';
  const maxTemp = isChamber && product.specifications?.operatingTemperature ? product.specifications.operatingTemperature : 'up to 80°C';

  // Dynamic OEM cross-reference text
  const crossRefBrands = isChamber && product.crossReferenceBrands && product.crossReferenceBrands.length > 0
    ? product.crossReferenceBrands.join(', ')
    : 'Bendix, Meritor, Haldex, and Wabco';
    
  const oemParts = isChamber && product.oemPartNumbers && product.oemPartNumbers.length > 0
    ? ` Specifically replacing part numbers like ${product.oemPartNumbers.map(p => p.partNumber).slice(0, 3).join(', ')},`
    : '';

  return (
    <section className="mt-12 bg-white rounded-2xl shadow-sm border border-navy-50 p-8 md:p-12 mb-8 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6 relative z-10">
        Why Choose the BRC {product.name}?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-sm md:text-base relative z-10">
        <div>
          <p className="mb-4">
            Commercial fleets require absolute reliability when it comes to {functionText}. Our highly engineered <strong>{product.name}</strong> is manufactured to exceed OEM standards, providing maximum performance and safety for Class 8 trucks, trailers, and heavy-duty vehicles {strokeDesc}{pushRodDesc}.
          </p>
          <p>
            {weight}this {componentText} utilizes premium {material.toLowerCase()} construction. Manufactured in our ISO 9001:2015 certified facility, the housing and internal mechanisms are designed to prevent premature wear and resist severe corrosion from road salts, magnesium chloride, and extreme temperatures {maxTemp}.
          </p>
        </div>
        <div>
          <p className="mb-4">
            <strong>Direct Aftermarket Replacement:</strong> The {product.name} is designed as an exact drop-in replacement for major OEM systems including {crossRefBrands}.{oemParts} ensuring seamless installation without modifying your existing brackets or air lines.
          </p>
          <ul className="space-y-2 mt-4 list-disc pl-5 text-slate-600">
            {isChamber && product.strokeSize && <li>Engineered to strict {product.strokeSize} specifications for predictable braking force.</li>}
            {isADB && <li>Fully sealed breather tube design to prevent caliper moisture ingress.</li>}
            {isSpringBrake && <li>High-strength power spring specifically coiled for maximum parking hold on steep grades.</li>}
            {isChamber && <li>Includes all necessary {product.includedItems?.join(', ') || 'mounting hardware'} for rapid mechanic turnarounds.</li>}
          </ul>
        </div>
      </div>
    </section>
  );
}
