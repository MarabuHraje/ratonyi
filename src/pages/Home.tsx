import { motion } from "motion/react";
import { Phone, ArrowRight, HardHat, Home as HomeIcon, Hammer, Wrench, ShieldCheck, Clock, CheckCircle2, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-dark">
      {/* Massive Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
            alt="Stavební práce - PERAT s.r.o." 
            className="w-full h-full object-cover object-center opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Prémiové Stavební Služby</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 text-white text-balance">
              Stavíme na <span className="text-primary">důvěře</span>,<br />kvalitě a rychlosti.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light text-balance">
              Jsme PERAT s.r.o. Zajišťujeme kompletní stavební práce, rekonstrukce a fasády pro rezidenční i komerční projekty v Karlových Varech a okolí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+420777849773" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                <Phone className="w-5 h-5" /> Zavolat Nyní
              </a>
              <Link to="/kontakt" className="bg-transparent border border-white hover:bg-white hover:text-dark text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center transition-colors">
                Nezávazná poptávka
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center gap-8 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Certifikované postupy
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Dodržení termínů
              </div>
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-primary" /> Nadstandardní záruka
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-anthracite relative z-20 border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4"/> Naše Specializace
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white text-balance">Kompletní stavební činnost</h3>
            </div>
            <Link to="/sluzby" className="text-white hover:text-primary font-bold flex items-center gap-2 transition-colors shrink-0">
              Všechny služby <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Kompletní rekonstrukce", desc: "Byty, domy a komerční prostory na klíč. Změníme váš prostor k nepoznání od podlah po stropy.", icon: HomeIcon },
              { title: "Střechy a tesařství", desc: "Nové střešní krytiny, komplexní opravy, montáž krovů, pergoly a moderní dřevostavby.", icon: Hammer },
              { title: "Fasády a zateplení", desc: "Snížení energetické náročnosti, moderní vzhled, kontaktní zateplovací systémy a omítky.", icon: HardHat },
              { title: "Zednické práce", desc: "Zdění, hrubé stavby, podlahy, stěrkování, sádrokartony a další stavební úpravy.", icon: Wrench },
              { title: "Havarijní opravy", desc: "Rychlý zásah při haváriích a urgentních problémech s vodou, statikou či střechou.", icon: ShieldCheck },
              { title: "Demoliční práce", desc: "Řízené a bezpečné demolice s odvozem a ekologickou likvidací stavební suti.", icon: Clock },
            ].map((srv, idx) => (
              <motion.div 
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-concrete p-8 border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer flex flex-col h-full"
              >
                <div className="bg-dark w-16 h-16 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors">
                  <srv.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors">{srv.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed flex-1">{srv.desc}</p>
                <Link to="/kontakt" className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto pt-4 border-t border-white/10">
                  Poptat službu <ArrowRight className="w-5 h-5 text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark relative border-t border-concrete overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4"/> Naše Hodnoty
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Proč si vybrat výhradně PERAT s.r.o.
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Stavíme na pevných základech - a to nielen doslova. Naše firma si zakládá na osobním přístupu, absolutní preciznosti a dodržování dohodnutých termínů i rozpočtů.
              </p>
              
              <ul className="space-y-6">
                {[
                  { t: "Férové jednání bez skrytých poplatků", d: "Cenu znáte předem. Žádné nepříjemné finanční překvapení na konci projektu." },
                  { t: "Dodržování přesných termínů", d: "Čas jsou peníze. Harmonogram je pro nás svatý a děláme vše pro jeho dodržení." },
                  { t: "Odbornost a špičková kvalita", d: "Zaměstnáváme jen prověřené řemeslníky s letitou praxí v oboru." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.t}</h4>
                      <p className="text-gray-400">{item.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-concrete relative z-10 p-2 overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
                  alt="Stavba a architektura" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 z-20 shadow-xl max-w-[250px] outline outline-8 outline-dark">
                <div className="text-white font-heading font-bold text-5xl mb-2">10+</div>
                <div className="text-white/90 font-medium">Let zkušeností v oboru stavebnictví</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-anthracite border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center gap-2">
             Jak spolupracujeme
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-16">Od nápadu po předání klíčů</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", t: "Prvotní kontakt", d: "Zavoláte nám nebo napíšete e-mail s vaší vizí či akutním problémem." },
              { step: "02", t: "Osobní prohlídka", d: "Přijedeme na místo, situaci zhodnotíme a navrhneme optimální řešení." },
              { step: "03", t: "Cenová nabídka", d: "Zdarma pro vás vypracujeme transparentní a detailní rozpočet projektu." },
              { step: "04", t: "Realizace", d: "Pustíme se do práce. Pravidelně vás informujeme o průběhu." }
            ].map((s, i) => (
              <div key={i} className="relative group p-6">
                <div className="text-8xl font-heading font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2 select-none transition-colors duration-500 group-hover:text-primary/10">{s.step}</div>
                <div className="relative z-10 pt-8">
                  <h4 className="text-xl font-bold text-white mb-4 font-heading">{s.t}</h4>
                  <p className="text-gray-400 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-dark relative z-20 border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
                Naše Práce
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">Vybrané realizace</h3>
            </div>
            <Link to="/realizace" className="text-white hover:text-primary font-bold flex items-center gap-2 transition-colors">
              Zobrazit celou galerii <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gallery items limit 3 */}
            <div className="group overflow-hidden rounded-sm relative aspect-[4/3] bg-concrete">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="Kompletní rekonstrukce rodinného domu" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Rekonstrukce</p>
                 <h4 className="text-white text-xl font-bold font-heading">Rodinný dům na klíč</h4>
               </div>
            </div>
            <div className="group overflow-hidden rounded-sm relative aspect-[4/3] bg-concrete">
               <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="Střecha a tesařské práce" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Střechy</p>
                 <h4 className="text-white text-xl font-bold font-heading">Nová střecha bytového domu</h4>
               </div>
            </div>
            <div className="group overflow-hidden rounded-sm relative aspect-[4/3] bg-concrete">
               <img src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="Renovace interiéru" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
                 <p className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Interiéry</p>
                 <h4 className="text-white text-xl font-bold font-heading">Komerční prostory prodejny</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-anthracite border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center gap-2">
             Hodnocení zákazníků
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-16">Co o nás říkají</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { name: "Petr Novák", text: "S firmou PERAT byla vynikající spolupráce. Dodrželi termín, rozpočet a kvalita odvedené práce u rekonstrukce naší střechy je špičková. Mohu jen doporučit." },
                { name: "Jana Dvořáková", text: "Rychlý přístup při řešení havarijní situace u nás v domě. Přijeli hned druhý den, opravili závadu a ještě poradili s dalším postupem. Skvělí profíci z Karlovarského kraje." },
                { name: "Martin Kovář", text: "Dělali nám kompletní zateplení a novou fasádu. Nechali po sobě pořádek, komunikovali naprosto transparentně. Výsledek stojí za to." }
              ].map((r, i) => (
                <div key={i} className="bg-dark p-8 border border-white/5 relative">
                  <Quote className="text-white/10 w-16 h-16 absolute top-4 right-4" />
                  <div className="flex gap-1 text-primary mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-6 italic relative z-10 leading-relaxed">"{r.text}"</p>
                  <p className="text-white font-bold font-heading">{r.name}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Připraveni začít váš další projekt?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
            Neztrácejte čas. Zavolejte nám ihned a získejte profesionální konzultaci zdarma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:+420777849773" className="w-full sm:w-auto bg-dark hover:bg-black text-white px-10 py-5 rounded-sm font-bold text-2xl flex items-center justify-center gap-4 transition-transform hover:scale-105 shadow-2xl">
              <Phone className="w-8 h-8 text-primary" /> +420 777 849 773
            </a>
            <span className="text-white font-bold opacity-50 hidden sm:block">NEBO</span>
            <Link to="/kontakt" className="w-full sm:w-auto bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white px-8 py-5 rounded-sm font-bold text-xl flex items-center justify-center gap-2 transition-colors">
              Napsat e-mail <ArrowRight className="w-6 h-6"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
