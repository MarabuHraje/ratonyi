import { motion } from "motion/react";
import { Home, Hammer, HardHat, Wrench, ShieldCheck, Clock, Brush, Truck, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "rekonstrukce",
      icon: Home,
      title: "Rekonstrukce domů a bytů",
      desc: "Kompletní proměny interiérů i exteriérů bytů a rodinných domů na klíč.",
      points: ["Bourací práce a vyklízení", "Nové rozvody vody a elektra", "Zdění příček a sádrokartony", "Pokládka podlah a obkladů"]
    },
    {
      id: "zednicke-prace",
      icon: Wrench,
      title: "Zednické práce",
      desc: "Veškeré zednické činnosti od hrubé stavby po finální štuky.",
      points: ["Vyzdívání nosných i nenosných stěn", "Betonování podlah a základů", "Vnitřní a vnější omítky", "Sádrokartonářské práce"]
    },
    {
      id: "fasady",
      icon: Brush,
      title: "Fasády a zateplení",
      desc: "Realizace moderních fasád a zateplovacích systémů pro snížení tepelných ztrát.",
      points: ["Kontaktní zateplovací systémy (EPS, vata)", "Aplikace strukturálních omítek", "Renovace starých a poškozených fasád", "Nátěry fasád"]
    },
    {
      id: "strechy",
      icon: Hammer,
      title: "Střechy a tesařské práce",
      desc: "Dodávka a montáž střešních krytin, oprava krovů a kompletní tesařina.",
      points: ["Montáž vazníků a klasických krovů", "Pokládka střešní krytiny", "Drobné i celkové opravy střech", "Klempířské práce"]
    },
    {
      id: "interiery",
      icon: HardHat,
      title: "Interiérové úpravy",
      desc: "Proměny vnitřních prostor na míru vašim požadavkům.",
      points: ["Rekonstrukce bytových jader", "Výstavba koupelen", "Designové betonové stěrky", "Svěšování stropů sádrokartonem"]
    },
    {
      id: "demolice",
      icon: Truck,
      title: "Demoliční práce",
      desc: "Bezpečné a řízené demolice s následným odvozem a likvidací sutě.",
      points: ["Strojní i ruční demolice", "Vyklízení nemovitostí", "Odvoz suti na skládku", "Úpravy terénu po demolici"]
    },
    {
      id: "havarijni",
      icon: ShieldCheck,
      title: "Havarijní opravy",
      desc: "Okamžitý zásah při haváriích pro minimalizaci škod na majetku.",
      points: ["Opravy prasklého potrubí (ve spolupráci)", "Zajištění narušené statiky po nehodách", "Nouzové opravy stržených střech", "Výjezdy 24/7"]
    },
    {
      id: "voda-odpady",
      icon: Droplets,
      title: "Individuální stavební řešení",
      desc: "Specifické a netradiční požadavky řešíme po osobní domluvě.",
      points: ["Stavba opěrných zdí", "Bazénové přípravy a terasy", "Stavba plotů", "Zámkové dlažby a zpevněné plochy"]
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-concrete overflow-hidden">
         <div className="absolute inset-0 z-0 bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Stavební Služby" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 text-white">
              Přehled <span className="text-primary">služeb</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Realizujeme dílčí řemeslné práce i kompletní stavby na klíč. Zajišťujeme plynulý průběh s důrazem na kvalitu, detail a rychlost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-anthracite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="bg-dark border border-concrete p-8 md:p-10 flex flex-col items-start group hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-6 mb-8 w-full border-b border-concrete pb-8">
                  <div className="bg-primary/10 p-4 rounded-sm">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">{service.title}</h3>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 font-light">
                  {service.desc}
                </p>
                
                <ul className="space-y-4 mb-10 mt-auto w-full">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/kontakt?sluzba=${service.id}`} className="w-full bg-concrete hover:bg-white hover:text-dark text-white text-center py-4 font-bold rounded-sm transition-colors border border-transparent mt-auto shadow-sm">
                  Poptat tuto službu
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsure Box */}
      <section className="py-24 bg-dark border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-sm p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.1)]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Nenašli jste přesně to, co potřebujete?
              </h2>
              <p className="text-xl text-white/90">
                Ať už máte specifický projekt, nebo jen uvažujete o možnostech, ozvěte se nám. Najdeme společné stavební řešení.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full lg:w-auto shrink-0">
               <a href="tel:+420777849773" className="w-full lg:w-auto bg-dark hover:bg-black text-white px-8 py-5 rounded-sm font-bold text-xl flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-2xl">
                Volat +420 777 849 773
               </a>
               <Link to="/kontakt" className="w-full lg:w-auto bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-colors">
                Napsat zprávu <ArrowRight className="w-5 h-5"/>
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
