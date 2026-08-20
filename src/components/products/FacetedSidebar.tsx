"use client";

import React, { useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import FilterAccordion from '@/components/products/FilterAccordion';
import Link from 'next/link';
import { BRAKE_CHAMBERS } from '../../lib/data';

interface FacetedSidebarProps {
  baseCategory?: 'spring-brakes' | 'service-chambers' | 'chamber-parts-kits' | 'air-disc-brake-actuator' | 'all';
}

const BRANDS = [
  "Automann", "Bendix", "Dexter", "Euclid", "FleetSpec",
  "HD Plus", "Haldex", "Hendrickson", "MGM Brakes", "Meritor",
  "Reyco Granning", "Ridewell", "SAF-Holland", "TSE Brakes", "WABCO"
];

const STROKE_INCHES = Array.from(new Set(BRAKE_CHAMBERS.map(c => c.strokeInch))).filter((a): a is string => Boolean(a)).sort();
const PUSH_ROD_LENGTHS = Array.from(new Set(BRAKE_CHAMBERS.map(c => c.pushRodLengthInch))).filter((a): a is string => Boolean(a)).sort();
const APPLICATIONS = Array.from(new Set(BRAKE_CHAMBERS.map(c => c.application))).filter((a): a is string => Boolean(a)).sort();

const SPRING_MODELS = Array.from(new Set(BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake').map(c => c.type))).sort();
const SERVICE_MODELS = Array.from(new Set(BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake').map(c => c.type))).sort();
const ADB_MODELS = Array.from(new Set(BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Actuator').map(c => c.type))).sort();

export default function FacetedSidebar({ baseCategory }: FacetedSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  // Determine if we are on a specific sub-category page (e.g., /spring-brakes/type-30-30)
  // If we are, we should hide the generic 'Model' filter to prevent conflicting filters.
  const isNestedRoute = pathname.split('/').length > 2;

  // Create a new URLSearchParams object based on current params
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      const currentValues = params.getAll(name);
      if (currentValues.includes(value)) {
        params.delete(name);
        currentValues.forEach(v => {
          if (v !== value) params.append(name, v);
        });
      } else {
        params.append(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const isChecked = (name: string, value: string) => {
    return searchParams.getAll(name).includes(value);
  };

  const handleToggle = (name: string, value: string) => {
    const queryString = createQueryString(name, value);
    router.push(pathname + '?' + queryString, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Context-Aware Category Links (Silo Structure) */}
      {(!baseCategory || baseCategory === 'all') && (
        <FilterAccordion 
        title="Categories" 
        isOpen={openSection === "Categories"} 
        onToggle={() => setOpenSection(openSection === "Categories" ? null : "Categories")}
      >
          <ul className="py-2">
            <li><Link href={`/spring-brakes`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Spring Brakes</Link></li>
            <li><Link href={`/service-chambers`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Service Chambers</Link></li>
            <li><Link href={`/air-disc-brake-actuator`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Air Disc Actuators</Link></li>
            <li><Link href={`/chamber-parts-kits`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Parts & Kits</Link></li>
          </ul>
        </FilterAccordion>
      )}

      {baseCategory === 'spring-brakes' && (
        <FilterAccordion 
        title="Spring Brake Types" 
        isOpen={openSection === "Spring Brake Types"} 
        onToggle={() => setOpenSection(openSection === "Spring Brake Types" ? null : "Spring Brake Types")}
      >
          <ul className="py-2">
            <li><Link href={`/spring-brakes/30-30-air-brake-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('30-30') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 30/30 Spring Brake</Link></li>
            <li><Link href={`/spring-brakes/36-36-spring-brakes`} className={`block px-4 py-2 text-sm ${pathname.includes('36-36') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 36/36 Spring Brake</Link></li>
            <li><Link href={`/spring-brakes/24-30-24-24-spring-brakes`} className={`block px-4 py-2 text-sm ${pathname.includes('24-30-24-24') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 24/30 & 24/24 Chambers</Link></li>
            <li><Link href={`/spring-brakes/30-28-spring-brakes`} className={`block px-4 py-2 text-sm ${pathname.includes('30-28') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 30/28 Spring Brake</Link></li>
            <li><Link href={`/spring-brakes/20-24-spring-brake-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('20-24') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 20/24 Spring Brake</Link></li>
            <li><Link href={`/spring-brakes/type-30-30-piggyback-kits`} className={`block px-4 py-2 text-sm ${pathname.includes('piggyback') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 30/30 Piggyback Kits</Link></li>
            <li><Link href={`/spring-brakes`} className={`block px-4 py-2 text-sm font-semibold text-amber-600 hover:bg-navy-50 mt-2 border-t border-slate-100 pt-2`}>&larr; All Spring Brakes</Link></li>
          </ul>
        </FilterAccordion>
      )}

      {baseCategory === 'service-chambers' && (
        <FilterAccordion 
        title="Service Chamber Types" 
        isOpen={openSection === "Service Chamber Types"} 
        onToggle={() => setOpenSection(openSection === "Service Chamber Types" ? null : "Service Chamber Types")}
      >
          <ul className="py-2">
            <li><Link href={`/service-chambers/type-20-steer-axle-brake-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('20-steer') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 20 Steer Axle Brake Chambers</Link></li>
            <li><Link href={`/service-chambers/type-30-service-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('type-30') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 30 Service Chambers</Link></li>
            <li><Link href={`/service-chambers/type-36-service-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('type-36') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 36 Service Chambers</Link></li>
            <li><Link href={`/service-chambers/type-12-16-24-service-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('12-16-24') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 12, 16 & 24 Service Chambers</Link></li>
            <li><Link href={`/service-chambers/welded-clevis-brake-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('welded-clevis') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Welded Clevis Brake Chambers</Link></li>
            <li><Link href={`/service-chambers`} className={`block px-4 py-2 text-sm font-semibold text-amber-600 hover:bg-navy-50 mt-2 border-t border-slate-100 pt-2`}>&larr; All Service Chambers</Link></li>
          </ul>
        </FilterAccordion>
      )}

      {baseCategory === 'air-disc-brake-actuator' && (
        <FilterAccordion 
        title="Air Disc Actuators" 
        isOpen={openSection === "Air Disc Actuators"} 
        onToggle={() => setOpenSection(openSection === "Air Disc Actuators" ? null : "Air Disc Actuators")}
      >
          <ul className="py-2">
            <li><Link href={`/air-disc-brake-actuator/type-16-18-adb-actuators`} className={`block px-4 py-2 text-sm ${pathname.includes('16-18') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 16 & 18 ADB</Link></li>
            <li><Link href={`/air-disc-brake-actuator/type-20-24-air-disc-brake-actuator`} className={`block px-4 py-2 text-sm ${pathname.includes('20-24') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 20/24 ADB</Link></li>
            <li><Link href={`/air-disc-brake-actuator/type-24-24-adb-chambers`} className={`block px-4 py-2 text-sm ${pathname.includes('24-24') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 24/24 ADB</Link></li>
            <li><Link href={`/air-disc-brake-actuator/type-24-30-air-disc-brake-actuators`} className={`block px-4 py-2 text-sm ${pathname.includes('24-30') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Type 24/30 ADB</Link></li>
            <li><Link href={`/air-disc-brake-actuator`} className={`block px-4 py-2 text-sm font-semibold text-amber-600 hover:bg-navy-50 mt-2 border-t border-slate-100 pt-2`}>&larr; All Air Disc Actuators</Link></li>
          </ul>
        </FilterAccordion>
      )}

      {baseCategory === 'chamber-parts-kits' && (
        <FilterAccordion 
        title="Parts & Kits Types" 
        isOpen={openSection === "Parts & Kits Types"} 
        onToggle={() => setOpenSection(openSection === "Parts & Kits Types" ? null : "Parts & Kits Types")}
      >
          <ul className="py-2">
            <li><Link href={`/chamber-parts-kits/air-brake-chamber-rebuild-kits`} className={`block px-4 py-2 text-sm ${pathname.includes('rebuild-kits') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Air Brake Chamber Rebuild Kits</Link></li>
            <li><Link href={`/chamber-parts-kits/brake-chamber-diaphragms`} className={`block px-4 py-2 text-sm ${pathname.includes('diaphragm') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Brake Chamber Diaphragms</Link></li>
            <li><Link href={`/chamber-parts-kits/clevis-pins-slack-adjuster-hardware`} className={`block px-4 py-2 text-sm ${pathname.includes('clevis') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Clevis Pins & Hardware</Link></li>
            <li><Link href={`/chamber-parts-kits/brake-chamber-caging-bolts-tools`} className={`block px-4 py-2 text-sm ${pathname.includes('caging') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Caging Bolts & Tools</Link></li>
            <li><Link href={`/chamber-parts-kits/brake-chamber-clamp-bands`} className={`block px-4 py-2 text-sm ${pathname.includes('clamp') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Clamp Bands</Link></li>
            <li><Link href={`/chamber-parts-kits/automatic-manual-slack-adjusters`} className={`block px-4 py-2 text-sm ${pathname.includes('slack-adjuster') ? 'text-slate-600 font-bold bg-navy-50' : 'text-navy-600 hover:bg-navy-50'}`}>Slack Adjusters</Link></li>
            <li><Link href={`/chamber-parts-kits`} className={`block px-4 py-2 text-sm font-semibold text-amber-600 hover:bg-navy-50 mt-2 border-t border-slate-100 pt-2`}>&larr; All Parts & Kits</Link></li>
          </ul>
        </FilterAccordion>
      )}

      {/* Brands Filter (For all categories) */}
      <FilterAccordion 
        title="Brands (Cross-Reference)" 
        isOpen={openSection === "Brands (Cross-Reference)"} 
        onToggle={() => setOpenSection(openSection === "Brands (Cross-Reference)" ? null : "Brands (Cross-Reference)")}
      >
        <div className="p-4 flex flex-col gap-2 max-h-60 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-navy-200 [&::-webkit-scrollbar-track]:bg-navy-50">
          {BRANDS.map(brand => (
            <label key={brand} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-slate-50 p-1 -mx-1 rounded transition-colors">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                checked={isChecked('brand', brand)}
                onChange={() => handleToggle('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </FilterAccordion>

      {/* Accessories Specific Filters */}
      {baseCategory === 'chamber-parts-kits' && !isNestedRoute && (
        <FilterAccordion 
        title="Accessory Type" 
        isOpen={openSection === "Accessory Type"} 
        onToggle={() => setOpenSection(openSection === "Accessory Type" ? null : "Accessory Type")}
      >
          <div className="p-4 flex flex-col gap-2">
            {['Diaphragm', 'Slack Adjuster', 'Clamp Band', 'Caging Bolt', 'Hardware Kit'].map(type => (
              <label key={type} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  checked={isChecked('filter', type)}
                  onChange={() => handleToggle('filter', type)}
                />
                {type}
              </label>
            ))}
          </div>
        </FilterAccordion>
      )}

      {/* Air Disc Actuators Specific Filters */}
      {baseCategory === 'air-disc-brake-actuator' && (
        <>
          {!isNestedRoute && (
            <FilterAccordion 
        title="ADB Model" 
        isOpen={openSection === "ADB Model"} 
        onToggle={() => setOpenSection(openSection === "ADB Model" ? null : "ADB Model")}
      >
              <div className="p-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-navy-200">
                {ADB_MODELS.map(model => (
                  <label key={model} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                      checked={isChecked('model', model)}
                      onChange={() => handleToggle('model', model)}
                    />
                    {model}
                  </label>
                ))}
              </div>
            </FilterAccordion>
          )}

          <FilterAccordion 
        title="Application" 
        isOpen={openSection === "Application"} 
        onToggle={() => setOpenSection(openSection === "Application" ? null : "Application")}
      >
            <div className="p-4 flex flex-col gap-2">
              {APPLICATIONS.filter(a => a.includes('Disc')).map(app => (
                <label key={app} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('application', app)}
                    onChange={() => handleToggle('application', app)}
                  />
                  {app}
                </label>
              ))}
            </div>
          </FilterAccordion>
        </>
      )}

      {/* Spring Brakes Specific Filters */}
      {baseCategory === 'spring-brakes' && (
        <>
          {!isNestedRoute && (
            <FilterAccordion 
        title="Spring Brake Model" 
        isOpen={openSection === "Spring Brake Model"} 
        onToggle={() => setOpenSection(openSection === "Spring Brake Model" ? null : "Spring Brake Model")}
      >
              <div className="p-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-navy-200">
                {SPRING_MODELS.map(model => (
                  <label key={model} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                      checked={isChecked('model', model)}
                      onChange={() => handleToggle('model', model)}
                    />
                    {model}
                  </label>
                ))}
              </div>
            </FilterAccordion>
          )}

          <FilterAccordion 
        title="Stroke Inch" 
        isOpen={openSection === "Stroke Inch"} 
        onToggle={() => setOpenSection(openSection === "Stroke Inch" ? null : "Stroke Inch")}
      >
            <div className="p-4 flex flex-col gap-2">
              {STROKE_INCHES.map(stroke => (
                <label key={stroke} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('strokeInch', stroke)}
                    onChange={() => handleToggle('strokeInch', stroke)}
                  />
                  {stroke}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Push Rod Length" 
        isOpen={openSection === "Push Rod Length"} 
        onToggle={() => setOpenSection(openSection === "Push Rod Length" ? null : "Push Rod Length")}
      >
            <div className="p-4 flex flex-col gap-2">
              {PUSH_ROD_LENGTHS.map(length => (
                <label key={length} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('pushRodLength', length)}
                    onChange={() => handleToggle('pushRodLength', length)}
                  />
                  {length}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Application" 
        isOpen={openSection === "Application"} 
        onToggle={() => setOpenSection(openSection === "Application" ? null : "Application")}
      >
            <div className="p-4 flex flex-col gap-2">
              {APPLICATIONS.map(app => (
                <label key={app} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('application', app)}
                    onChange={() => handleToggle('application', app)}
                  />
                  {app}
                </label>
              ))}
            </div>
          </FilterAccordion>
        </>
      )}

      {/* Service Brakes Specific Filters */}
      {baseCategory === 'service-chambers' && (
        <>
          {!isNestedRoute && (
            <FilterAccordion 
        title="Service Chamber Model" 
        isOpen={openSection === "Service Chamber Model"} 
        onToggle={() => setOpenSection(openSection === "Service Chamber Model" ? null : "Service Chamber Model")}
      >
              <div className="p-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-navy-200">
                {SERVICE_MODELS.map(model => (
                  <label key={model} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                      checked={isChecked('model', model)}
                      onChange={() => handleToggle('model', model)}
                    />
                    {model}
                  </label>
                ))}
              </div>
            </FilterAccordion>
          )}

          <FilterAccordion 
        title="Stroke Inch" 
        isOpen={openSection === "Stroke Inch"} 
        onToggle={() => setOpenSection(openSection === "Stroke Inch" ? null : "Stroke Inch")}
      >
            <div className="p-4 flex flex-col gap-2">
              {STROKE_INCHES.map(stroke => (
                <label key={stroke} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('strokeInch', stroke)}
                    onChange={() => handleToggle('strokeInch', stroke)}
                  />
                  {stroke}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Application" 
        isOpen={openSection === "Application"} 
        onToggle={() => setOpenSection(openSection === "Application" ? null : "Application")}
      >
            <div className="p-4 flex flex-col gap-2">
              {APPLICATIONS.map(app => (
                <label key={app} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('application', app)}
                    onChange={() => handleToggle('application', app)}
                  />
                  {app}
                </label>
              ))}
            </div>
          </FilterAccordion>
        </>
      )}

      {/* All Products Specific Filters */}
      {baseCategory === 'all' && (
        <>
          <FilterAccordion 
        title="Product Category" 
        isOpen={openSection === "Product Category"} 
        onToggle={() => setOpenSection(openSection === "Product Category" ? null : "Product Category")}
      >
            <div className="p-4 flex flex-col gap-2">
              {['Spring Brake', 'Service Brake', 'Air Disc Actuator', 'Accessory'].map(type => (
                <label key={type} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('categoryFilter', type)}
                    onChange={() => handleToggle('categoryFilter', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Accessory Type" 
        isOpen={openSection === "Accessory Type"} 
        onToggle={() => setOpenSection(openSection === "Accessory Type" ? null : "Accessory Type")}
      >
            <div className="p-4 flex flex-col gap-2">
              {['Diaphragm', 'Slack Adjuster', 'Clamp Band', 'Caging Bolt', 'Hardware Kit', 'Piggyback Kit'].map(type => (
                <label key={type} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('filter', type)}
                    onChange={() => handleToggle('filter', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Chamber Model" 
        isOpen={openSection === "Chamber Model"} 
        onToggle={() => setOpenSection(openSection === "Chamber Model" ? null : "Chamber Model")}
      >
            <div className="p-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-navy-200">
              {[...SPRING_MODELS, ...SERVICE_MODELS, ...ADB_MODELS].map(model => (
                <label key={model} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('model', model)}
                    onChange={() => handleToggle('model', model)}
                  />
                  {model}
                </label>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion 
        title="Stroke Inch" 
        isOpen={openSection === "Stroke Inch"} 
        onToggle={() => setOpenSection(openSection === "Stroke Inch" ? null : "Stroke Inch")}
      >
            <div className="p-4 flex flex-col gap-2">
              {STROKE_INCHES.map(stroke => (
                <label key={stroke} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    checked={isChecked('strokeInch', stroke)}
                    onChange={() => handleToggle('strokeInch', stroke)}
                  />
                  {stroke}
                </label>
              ))}
            </div>
          </FilterAccordion>
        </>
      )}

      {/* Global 'Browse All Categories' - Visible everywhere for easy cross-shopping */}
      {baseCategory !== 'all' && (
        <FilterAccordion 
        title="Browse All Categories" 
        isOpen={openSection === "Browse All Categories"} 
        onToggle={() => setOpenSection(openSection === "Browse All Categories" ? null : "Browse All Categories")}
      >
          <ul className="py-2">
            <li><Link href={`/products`} className="block px-4 py-2 text-sm font-bold text-amber-600 hover:bg-navy-50 mb-2 border-b border-slate-100 pb-2">View Full Catalog</Link></li>
            <li><Link href={`/spring-brakes`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Spring Brakes</Link></li>
            <li><Link href={`/service-chambers`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Service Chambers</Link></li>
            <li><Link href={`/air-disc-brake-actuator`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Air Disc Actuators</Link></li>
            <li><Link href={`/chamber-parts-kits`} className="block px-4 py-2 text-sm text-navy-600 hover:bg-navy-50">Parts & Kits</Link></li>
          </ul>
        </FilterAccordion>
      )}
    </div>
  );
}
