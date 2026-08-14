import fs from 'fs';

const filePath = 'c:/Users/HP/Desktop/brake chambers/src/components/page-clients/HomeClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// we want to replace from index 174 to 180 (inclusive)
// Line 174 is index 173 (which is `            viewport={{ once: true, margin: "-100px" }}`)
// Wait, the terminal output said:
// 174:             className="grid grid-cols-1 md:grid-cols-3 gap-8"
// 180:             ))}

lines.splice(174, 180 - 174 + 1,
  '            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"',
  '          >',
  '            {[',
  '              { icon: Settings, color: "amber", title: "Actuator Design & R&D", desc: "Pioneering structural innovations and proprietary housing designs for reduced weight and maximum durability." },',
  '              { icon: Zap, color: "amber", title: "Variable Clocking", desc: "Our VCT technology allows infinite port angle alignment, streamlining installation and reducing inventory SKU requirements." },',
  '              { icon: ShieldCheck, color: "emerald", title: "Advanced E-Coating", desc: "Multi-stage electro-deposition coating ensures superior corrosion resistance even in the harshest winter road conditions." },',
  '              { icon: CheckCircle, color: "emerald", title: "1M Cycle Tested", desc: "Every chamber design is rigorously subjected to 1 million cycle lab tests to guarantee extreme lifecycle performance." }',
  '            ].map((pillar, i) => (',
  '              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">',
  '                <div className={`w-14 h-14 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl flex items-center justify-center text-${pillar.color}-500 mb-5 group-hover:from-${pillar.color}-50 group-hover:to-${pillar.color}-100 transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2`}>',
  '                  <pillar.icon className="w-7 h-7" />',
  '                </div>',
  '                <h3 className={`text-xl font-extrabold text-navy-900 mb-3 group-hover:text-${pillar.color}-600 transition-colors`}>{pillar.title}</h3>',
  '                <p className="text-slate-600 leading-relaxed text-base">{pillar.desc}</p>',
  '              </motion.div>'
);

fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
console.log('Restored the 4 pillars section and fixed syntax error!');
