const fs = require('fs');
let content = fs.readFileSync('src/features/technical-resources/components/TechnicalResourcesClient.tsx', 'utf-8');

const categories_str = `  const categories = [
    {
      id: 'installation',
      title: 'Installation & Maintenance',
      icon: <Wrench className="w-7 h-7 text-amber-500" />,
      accent: 'amber',
      desc: 'Each guide contains detailed specifications, step-by-step procedures, and reference tables for technicians, engineers, and fleet managers.',
      items: [
        {
          title: 'Installation Guides',
          subtitle: 'Step-by-step mounting, push-rod cutting, and air line connection procedures.',
          slug: 'installation',
          icon: <Wrench className="w-5 h-5" />,
        },
        {
          title: 'Safe Caging Procedures',
          subtitle: 'Critical safety procedures for manually caging spring brakes during maintenance.',
          slug: 'caging',
          icon: <Shield className="w-5 h-5" />,
        },
        {
          title: 'Torque Specifications',
          subtitle: 'Push-rod clamp torque values and mounting stud torque ranges.',
          slug: 'torque-specs',
          icon: <Settings className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 'specifications',
      title: 'Specifications & Sizing',
      icon: <FileArchive className="w-7 h-7 text-navy-500" />,
      accent: 'navy',
      desc: 'Detailed size charts, stroke length guides, and thread specifications for precise component matching.',
      items: [
        {
          title: 'Size & Dimension Charts',
          subtitle: 'OD, mounting stud centers, push-rod lengths, and thread weights for Type 12 through Type 36.',
          slug: 'size-charts',
          icon: <Ruler className="w-5 h-5" />,
        },
        {
          title: 'Stroke Length Guide',
          subtitle: 'Standard vs. long-stroke limits and CVSA out-of-service readjustment criteria.',
          slug: 'stroke-length',
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: 'Chamber Selection Guides',
          subtitle: 'Choose the correct chamber by vocation: linehaul, severe-duty, transit, or heavy haul.',
          slug: 'selection-guides',
          icon: <BookOpen className="w-5 h-5" />,
        },
        {
          title: 'Visual Identification Guide',
          subtitle: 'How to identify chamber sizes and stroke types without part numbers.',
          slug: 'identification',
          icon: <Eye className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & Diagnostics',
      icon: <AlertTriangle className="w-7 h-7 text-slate-500" />,
      accent: 'slate',
      desc: 'Identify failures, prevent air system contamination, and decode manufacturer cross-references.',
      items: [
        {
          title: 'Brake Chamber Failure Symptoms',
          subtitle: 'Diagnose air leaks, slow release, and push-rod travel issues.',
          slug: 'failure-symptoms',
          icon: <AlertOctagon className="w-5 h-5" />,
        },
        {
          title: 'Caging Bolt Operation',
          subtitle: 'Manual and automatic caging bolt operation and troubleshooting.',
          slug: 'caging-bolt',
          icon: <Wrench className="w-5 h-5" />,
        },
        {
          title: 'Cross-Reference Lookup',
          subtitle: 'Find the BRC equivalent for any Bendix, Haldex, or Meritor part number.',
          slug: '/oem-cross-reference',
          icon: <FileText className="w-5 h-5" />,
        },
      ],
    },
  ];`;

content = content.replace(/  const categories = \[\s*\{[\s\S]*?\];\s*return/g, categories_str + '\n\n  return');

content = content.replace("title=\"Brake Chamber Technical Resources: Guides, Specs & Data Sheets\"", "title=\"Brake Chamber Technical Resources - Guides, Specs & Data Sheets\"");
content = content.replace("description=\"Access BRC's technical library: installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.\"", "description=\"Access BRC's technical library - installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.\"");

content = content.replace('badge="Video Training"', 'badge="Video Training Library"');
content = content.replace('title={<>BRC <span className="text-amber-500">Video</span> Series</>}', 'title={<>Brake Chamber Installation & <span className="text-amber-500">Maintenance Videos</span></>}');
content = content.replace('description="For visual learners and technicians on the shop floor. Watch our lead engineers walk through safe caging procedures, pushrod cutting, and complete installation step-by-step."', 'description="Step-by-step video walkthroughs from our lead engineers. Covers safe caging procedures, push-rod cutting, torque specs, and complete installation - filmed on the shop floor."');

const video_list = `                    <ul className="space-y-3 mb-8 text-slate-300 font-light text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Safe Caging Procedures for Spring Brake Chambers</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Push-Rod Cutting & Thread Measurement</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Complete Brake Chamber Installation Walkthrough</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Diagnosing Common Brake Chamber Failures</li>
                    </ul>
                    <Link href="/contact?subject=Video+Training+Access" className="inline-flex items-center gap-3 bg-amber-500 px-6 py-3 rounded-lg text-navy-950 font-extrabold hover:bg-amber-400 transition-colors uppercase tracking-widest text-xs md:text-sm group/btn mt-4 md:mt-0 self-start shadow-lg shadow-amber-500/20 transform hover:-translate-y-1">
                      View All Videos <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>`;

content = content.replace(/<Link href="\/contact\?subject=Video\+Training\+Access"[\s\S]*?<\/Link>/g, video_list);

content = content.replace('title="Browse by Topic"', 'title="Browse Brake Chamber Resources by Topic"');

content = content.replace('title="Need Custom Engineering Support?"', 'title="Can\'t Find the Brake Chamber Technical Data You Need?"');
content = content.replace('description="If you require specific pushrod calculations, unique bracket alignments, or modified stroke limits, our engineering team is ready to assist."', 'description="If you need custom push-rod calculations, unique bracket alignments, or modified stroke limits, our engineering team can help. Send us your technical requirements - we respond within 24 hours."');

const cta = `                  <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
                    <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                      Contact Engineering <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </Link>
                    <Link href="/manufacturing" className="inline-block w-full bg-transparent border-2 border-navy-700 hover:bg-navy-800 text-white font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap">
                      Explore Custom OEM Manufacturing
                    </Link>
                  </div>`;

content = content.replace(/<div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">[\s\S]*?<\/div>\s+<\/div>/g, cta + '\n                </div>');

const popular = `                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
                    {[
                      { title: "Brake Chamber Size & Dimension Charts", desc: "OD, mounting stud centers, push-rod lengths, and thread weights for Type 12 through Type 36.", icon: <Ruler className="w-5 h-5 text-amber-500" />, slug: "size-charts", linkText: "View Size Charts" },
                      { title: "Brake Chamber Installation Guide", desc: "Step-by-step mounting, push-rod cutting, and air line connection procedures.", icon: <Wrench className="w-5 h-5 text-amber-500" />, slug: "installation", linkText: "View Installation Guide" },
                      { title: "Brake Chamber Selection Guide", desc: "Choose the correct chamber by vocation: linehaul, severe-duty, transit, or heavy haul.", icon: <BookOpen className="w-5 h-5 text-navy-500" />, slug: "selection-guides", linkText: "View Selection Guide" }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={\`/technical-resources/\${item.slug}\`}
                        className="flex flex-col justify-between p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-navy-200 hover:shadow-md transition-all group cursor-pointer h-full"
                      >
                        <div>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mb-4">
                            {item.icon}
                          </div>
                          <span className="font-bold text-navy-900 text-sm md:text-base block mb-2">{item.title}</span>
                          <span className="text-slate-500 text-xs md:text-sm leading-relaxed block">{item.desc}</span>
                        </div>
                        <div className="mt-6 flex items-center text-amber-600 font-bold text-xs uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                          {item.linkText} <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>`;

content = content.replace(/<div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-4">[\s\S]*?<\/div>\s+<\/motion\.div>/g, popular + '\n                </motion.div>');

fs.writeFileSync('src/features/technical-resources/components/TechnicalResourcesClient.tsx', content);
