import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-dark min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-concrete overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop" 
            alt="Kontakt" 
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
              Rádi prokonzultujeme <span className="text-primary">váš projekt</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Jsme připraveni nabídnout vám spolehlivé a transparentní stavební služby. Zavolejte nám, nebo využijte poptávkový formulář – reagujeme do 24 hodin.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Quick contact methods (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-anthracite p-8 border border-concrete h-full">
               <h3 className="text-2xl font-bold mb-8 font-heading text-white">Přímý kontakt</h3>
               
               <a href="tel:+420777849773" className="flex items-start gap-6 group mb-8 border-b border-concrete pb-8">
                 <div className="bg-primary/10 p-4 rounded-sm group-hover:bg-primary transition-colors">
                   <Phone className="w-8 h-8 text-primary group-hover:text-white" />
                 </div>
                 <div>
                   <p className="text-gray-400 font-medium mb-1">Zavolejte nám (Po-Pá 8-18)</p>
                   <p className="text-3xl font-bold text-white group-hover:text-primary transition-colors">+420 777 849 773</p>
                 </div>
               </a>

               <a href="mailto:perat.sro@seznam.cz" className="flex items-start gap-6 group mb-8 border-b border-concrete pb-8">
                 <div className="bg-concrete p-4 rounded-sm group-hover:bg-primary transition-colors">
                   <Mail className="w-8 h-8 text-white" />
                 </div>
                 <div>
                   <p className="text-gray-400 font-medium mb-1">Napište e-mail</p>
                   <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors break-all">perat.sro@seznam.cz</p>
                 </div>
               </a>

               <div className="flex items-start gap-6 group">
                 <div className="bg-concrete p-4 rounded-sm">
                   <MapPin className="w-8 h-8 text-white" />
                 </div>
                 <div>
                   <p className="text-gray-400 font-medium mb-1">Fakturační a kontaktní adresa</p>
                   <p className="text-xl font-bold text-white">PERAT s.r.o.</p>
                   <p className="text-gray-300 mb-1">Karlovarská 8, Česká republika</p>
                   <p className="text-gray-300">IČO: 27955460</p>
                 </div>
               </div>
            </div>

            <div className="bg-primary p-8 rounded-sm text-dark shadow-[0_10px_30px_rgba(249,115,22,0.2)]">
               <h3 className="text-xl font-bold mb-3 flex items-center gap-3"><ShieldCheck className="w-6 h-6"/> Havarijní služba 24/7</h3>
               <p className="text-dark/80 font-medium mb-4">Máte akutní stavební havárii, problém s vodou či porušenou statiku? Naše havarijní linka je dostupná. Neváhejte rovnou volat.</p>
               <a href="tel:+420777849773" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 font-bold rounded-sm hover:bg-black transition-colors w-full justify-center">
                 Volat ihned
               </a>
            </div>
          </div>

          {/* Form and Map (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-anthracite p-8 lg:p-12 border border-concrete rounded-sm">
              <h3 className="text-3xl font-bold mb-2 font-heading text-white">Nezávazná poptávka</h3>
              <p className="text-gray-400 mb-8">Poptáváte rekonstrukci, opravu nebo jen ceník? Vyplňte formulář níže.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-2">Jméno a příjmení *</label>
                     <input type="text" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Jan Novák" required />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-2">Telefon *</label>
                     <input type="tel" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+420" required />
                   </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                      <input type="email" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@domena.cz" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Typ služby</label>
                      <select className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option>Zvolte, o co máte zájem</option>
                        <option>Kompletní rekonstrukce</option>
                        <option>Střechy a tesařství</option>
                        <option>Fasády a zateplení</option>
                        <option>Zednické práce</option>
                        <option>Jiné / Nevím</option>
                      </select>
                    </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-2">Popis projektu / zpráva *</label>
                   <textarea rows={5} className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Kde se stavba nachází, jaký je přibližný rozsah prací?" required></textarea>
                 </div>
                 <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-sm text-lg transition-colors flex justify-center items-center gap-2">
                   Odeslat poptávku <ArrowRight className="w-5 h-5"/>
                 </button>
                 <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3"/>
                    Vaše data jsou u nás v bezpečí. Odesláním souhlasíte se zpracováním osobních údajů.
                 </p>
              </form>
            </div>

            {/* Area Map */}
            <div className="bg-anthracite border border-concrete p-2 rounded-sm relative overflow-hidden flex flex-col h-[400px]">
               <div className="absolute inset-0 z-0 opacity-80 mix-blend-luminosity pointer-events-none">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163273.8043657755!2d12.721473215849896!3d50.23072210408544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0a7eb51336c13%3A0x400af0f661556a0!2sKarlovy%20Vary!5e0!3m2!1sen!2scz!4v1700000000000!5m2!1sen!2scz" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
