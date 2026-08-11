import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Trade Shows & Events | BRC Engineering',
  description: 'Meet the BRC Engineering team in person at these upcoming global commercial transportation and heavy-duty aftermarket trade shows.',
};

const UPCOMING_EVENTS = [
  {
    name: 'Heavy Duty Aftermarket Week (HDAW)',
    date: 'January 25 - 28, 2027',
    location: 'Gaylord Texan Resort | Grapevine, TX',
    booth: 'Booth #1405',
    desc: 'Join us at the largest North American gathering of the independent heavy-duty aftermarket industry. We will be showcasing our new line of severe-duty ADB actuators.'
  },
  {
    name: 'TMC Annual Meeting & Transportation Technology Exhibition',
    date: 'March 01 - 04, 2027',
    location: 'Orange County Convention Center | Orlando, FL',
    booth: 'Booth #822',
    desc: 'The Technology & Maintenance Council (TMC) annual meeting is the premier technical conference for fleet professionals. Meet our lead engineers to discuss CVSA compliance.'
  },
  {
    name: 'IAA Transportation',
    date: 'September 15 - 20, 2027',
    location: 'Deutsche Messe | Hannover, Germany',
    booth: 'Hall 12, Stand D45',
    desc: 'BRC expands its European footprint. Visit our massive exhibition space to see our metric-threaded and CE-certified brake components designed for the EU market.'
  }
];

export default function EventsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge={<><CalendarDays className="w-4 h-4 inline-block -mt-0.5" /> Upcoming Events</>}
        title="Meet Us on the Road"
        description="We believe in the power of a handshake. Connect with BRC executives and engineers at the world's leading commercial transportation expos."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/company" className="hover:text-white transition-colors">Company</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Events</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl -mt-20 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {UPCOMING_EVENTS.map((event, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col md:flex-row gap-6">
                
                {/* Date Cube */}
                <div className="shrink-0 flex flex-col items-center justify-center bg-navy-50 rounded-2xl w-full md:w-32 py-6 border border-navy-100 group-hover:bg-navy-900 group-hover:border-navy-800 transition-colors">
                  <span className="text-navy-900 font-extrabold text-3xl group-hover:text-amber-500 transition-colors">
                    {event.date.split(' ')[1]}
                  </span>
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-sm group-hover:text-navy-200 transition-colors">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="text-slate-400 text-xs mt-1 group-hover:text-navy-400">
                    {event.date.split(', ')[1]}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{event.name}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{event.booth}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {event.desc}
                  </p>
                  
                  <button className="self-start text-navy-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600 transition-colors">
                    Schedule a Meeting <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 shadow-xl border border-navy-800 text-white">
              <h3 className="text-2xl font-extrabold mb-4">Host a Factory Tour</h3>
              <p className="text-navy-200 mb-6 text-sm leading-relaxed">
                Can't make it to a trade show? We regularly host private tours of our automated manufacturing facility for large fleet managers and OEM purchasing directors.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>See CNC machining in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Meet the engineering team</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Review QA cycle-testing</span>
                </li>
              </ul>
              <Link href="/contact" className="block text-center bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold px-6 py-3 rounded-xl transition-colors w-full shadow-lg">
                Request a Tour
              </Link>
            </div>
          </div>

        </div>

      </div>
      <BreadcrumbSchema items={[{ name: 'Company', item: '/company' }, { name: 'Events' }]} />
    </div>
  );
}
