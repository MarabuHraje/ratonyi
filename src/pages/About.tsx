import { motion } from "motion/react";
import { HardHat, Users, ShieldCheck, Target, Award, ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-concrete overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
            alt="PERAT s.r.o. Tým" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">O naší firmě</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 text-white">
              Stavitelé, na které se můžete <span className="text-primary">spolehnout</span>.
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Jsme silným a stabilním partnerem pro vaše stavební vize. S důrazem na kvalitu, férové jednání a profesionální výsledek měníme plány v realitu pro klienty z celé České republiky.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-anthracite">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">PERAT s.r.o. - Vaše lokální stavební firma</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Náš příběh začal touhou dělat řemeslo poctivě a jinak. Jsme moderní stavební firma se sídlem v Pavlově u Kladna. Za naší prací si pevně stojíme. Spojujeme tradiční stavební postupy s moderními technologiemi a materiály, abychom pro vás vytvořili dílo, které přetrvá generace.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Zaměřujeme se na stavby vodního hospodářství, zemní práce, demoliční práce a komplexní řešení inženýrských prací. Vždy na čas, v domluveném rozpočtu a s maximálním ohledem na vaše požadavky.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-dark p-6 border border-concrete rounded-sm flex items-center gap-4">
                  <Factory className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-white font-bold font-heading">Vlastní technika</h4>
                    <p className="text-sm text-gray-500">Jsme nezávislí na dodavatelích.</p>
                  </div>
                </div>
                <div className="bg-dark p-6 border border-concrete rounded-sm flex items-center gap-4">
                  <Users className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="text-white font-bold font-heading">Zkušený tým</h4>
                    <p className="text-sm text-gray-500">Odborníci s letitou praxí.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] relative rounded-sm overflow-hidden z-10 border-8 border-primary shadow-2xl">
                <img src="https://marabie.eu/images_perat/IMG_3717.jpeg" alt="Stavební proces" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { val: "20+", label: "Let na trhu" },
               { val: "300+", label: "Úspěšných projektů" },
               { val: "100%", label: "Dodržení termínů" },
               { val: "24/7", label: "Odborná podpora" }
             ].map((s, i) => (
               <div key={i} className="text-center p-6 bg-dark/10 backdrop-blur-sm rounded-sm">
                 <div className="text-4xl md:text-6xl font-black font-heading text-white mb-2">{s.val}</div>
                 <div className="text-white/80 font-bold uppercase tracking-wider text-sm">{s.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center gap-2">
               Na čem si zakládáme
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">Naše firemní hodnoty</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Nekompromisní kvalita", d: "Používáme ověřené stavební materiály a dodržujeme předepsané technologické postupy bez zkratek.", i: Award },
              { t: "Férová komunikace", d: "S námi přesně víte, za co platíte. Komunikujeme transparentně, rychle a přímo.", i: Target },
              { t: "Osobní spolehlivost", d: "Ctíme dohodnuté termíny. Spolehněte se na nás, ušetříte si čas i nervy.", i: ShieldCheck }
            ].map((v, i) => (
              <div key={i} className="bg-anthracite p-8 border border-concrete group hover:border-primary/50 transition-colors">
                <v.i className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-primary transition-colors">{v.t}</h4>
                <p className="text-gray-400 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 bg-anthracite border-t border-concrete">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HardHat className="w-20 h-20 text-primary/20 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Máte zájem o spolupráci?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Přesvědčte se osobně o naší profesionalitě. Spojte se s námi hned a domluvme si nezávaznou prohlídku vašeho projektu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="tel:+420777849773" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-xl w-full sm:w-auto">
                Zavolat prokonzultovat
              </a>
              <Link to="/kontakt" className="bg-dark border border-concrete hover:border-white text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                Vyplnit poptávku <ArrowRight className="w-5 h-5"/>
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
