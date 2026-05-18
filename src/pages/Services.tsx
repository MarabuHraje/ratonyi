import { motion } from "motion/react";
import { Home, Hammer, HardHat, Wrench, ShieldCheck, Clock, Brush, Truck, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "zemni-prace-a-demolice",
      icon: HardHat,
      title: "Zemní práce a demolice",
      desc: "Veškeré terénní úpravy, výkopy a bezpečné i řízené demolice s likvidací suti.",
      points: ["Výkopy základů, jímek a bazénů", "Modelace a zarovnávání terénu", "Strojní i ruční demolice", "Odvoz suti a zemin"]
    },
    {
      id: "vodni-prace",
      icon: Droplets,
      title: "Stavby vodního hospodářství",
      desc: "Specializujeme se na výstavbu, údržbu a rekonstrukce vodohospodářských děl a infrastruktury.",
      points: ["Kanalizace a vodovody", "Realizace retenčních nádrží", "Vodní nádrže, čistírny odpadních vod", "Protierozní opatření"]
    },
    {
      id: "komplexni-reseni-inzenyrskych-praci",
      icon: ShieldCheck,
      title: "Komplexní řešení inženýrských prací",
      desc: "Zabezpečujeme inženýrskou činnost od prvotní studie až po předání hotového díla.",
      points: ["Projektová dokumentace a povolení", "Stavební dozor", "Koordinace subdodavatelů", "Rozpočtování a řízení staveb"]
    },
    {
      id: "stavebni-prace",
      icon: Home,
      title: "Stavební práce",
      desc: "Provádíme široké spektrum pozemních staveb od hrubých staveb až po finální dokončovací práce.",
      points: ["Základové desky a betonáže", "Výstavba plotů a zámkové dlažby", "Rekonstrukce a modernizace", "Dokončovací práce"]
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
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="flex items-center gap-6 mb-8 w-full border-b pb-8 border-primary/30">
                  <div className="p-4 rounded-sm bg-primary text-white">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary">{service.title}</h3>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 font-light">
                  {service.desc}
                </p>
                
                <ul className="space-y-4 mb-10 mt-auto w-full">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-gray-400 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/kontakt?sluzba=${service.id}`} className="w-full bg-concrete hover:bg-white hover:text-dark text-white text-center py-4 text-lg font-bold rounded-sm transition-colors border border-transparent mt-auto shadow-sm">
                  Poptat tuto službu
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsure Box */}
      <section className="py-24 bg-dark border-t border-concrete">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
