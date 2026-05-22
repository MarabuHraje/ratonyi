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
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Quick contact methods (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-anthracite p-8 border border-concrete h-full flex flex-col gap-8">
               
               <div>
                 <h3 className="text-2xl font-bold mb-4 font-heading text-white">Adresa a Sídlo</h3>
                 <p className="text-xl font-bold text-white mb-1">Perat s.r.o.</p>
                 <p className="text-gray-400">Karlovarská 8</p>
                 <p className="text-gray-400">273 51 Pavlov (okres Kladno)</p>
                 <a href="https://www.peratsro.cz" className="text-primary hover:text-primary-dark transition-colors mt-2 inline-block">www.peratsro.cz</a>
               </div>

               <div className="border-t border-concrete pt-8">
                 <h3 className="text-xl font-bold mb-4 font-heading text-white">Kontakty</h3>
                 
                 <div className="mb-6">
                   <p className="text-gray-300 font-bold mb-1">Petr Rátonyi (jednatel)</p>
                   <p className="text-gray-400 flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/> <a href="tel:+420777849773" className="hover:text-primary transition-colors">+420 777 849 773</a></p>
                   <p className="text-gray-400 flex items-center gap-2 mt-1"><Phone className="w-4 h-4 text-primary"/> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></p>
                   <p className="text-gray-400 flex items-center gap-2 mt-1"><Mail className="w-4 h-4 text-primary"/> <a href="mailto:perat.sro@seznam.cz" className="hover:text-primary transition-colors">perat.sro@seznam.cz</a></p>
                 </div>

                 <div className="mb-6">
                   <p className="text-gray-300 font-bold mb-1">Kancelář účetní - Hanka Karlovská</p>
                   <p className="text-gray-400 flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/> <a href="tel:+420607826122" className="hover:text-primary transition-colors">+420 607 826 122</a></p>
                   <p className="text-gray-400 flex items-center gap-2 mt-1"><Phone className="w-4 h-4 text-primary"/> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></p>
                   <p className="text-gray-400 flex items-center gap-2 mt-1"><Mail className="w-4 h-4 text-primary"/> <a href="mailto:hkkarlovska@seznam.cz" className="hover:text-primary transition-colors break-all">hkkarlovska@seznam.cz</a></p>
                 </div>

                 <div>
                   <p className="text-gray-300 font-bold mb-1">Kancelář rozpočtářka - Radka Tatíčková</p>
                   <p className="text-gray-400 flex items-center gap-2"><Phone className="w-4 h-4 text-primary"/> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></p>
                   <p className="text-gray-400 flex items-center gap-2 mt-1"><Mail className="w-4 h-4 text-primary"/> <a href="mailto:perat.rozpocty@seznam.cz" className="hover:text-primary transition-colors break-all">perat.rozpocty@seznam.cz</a></p>
                 </div>
               </div>

               <div className="border-t border-concrete pt-8">
                 <h3 className="text-xl font-bold mb-4 font-heading text-white">Ostatní údaje</h3>
                 <div className="grid grid-cols-2 gap-4 mb-4">
                   <div>
                     <p className="text-gray-500 text-sm">IČO</p>
                     <p className="text-gray-300">27955460</p>
                   </div>
                   <div>
                     <p className="text-gray-500 text-sm">DIČ</p>
                     <p className="text-gray-300">CZ27955460</p>
                   </div>
                 </div>
                 <div className="mb-4">
                     <p className="text-gray-500 text-sm">Bankovní spojení</p>
                     <p className="text-gray-300">0413612339/0800</p>
                 </div>
                 <div>
                     <p className="text-gray-500 text-sm">Spisová značka</p>
                     <p className="text-gray-300 text-sm">C 129186 vedená u rejstříkového soudu v Praze</p>
                 </div>
               </div>

            </div>
          </div>

          {/* Form and Map (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-anthracite p-8 lg:p-12 border border-concrete rounded-sm">
              <h3 className="text-3xl font-bold mb-2 font-heading text-white">Nezávazná poptávka</h3>
              <p className="text-gray-400 mb-8">Poptáváte rekonstrukci, opravu nebo jen ceník? Vyplňte formulář níže.</p>
              
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
                const originalText = submitButton?.innerHTML || '';
                if (submitButton) {
                  submitButton.disabled = true;
                  submitButton.innerHTML = 'Odesílám...';
                }

                try {
                  const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });
                  const result = await response.json();
                  
                  if (result.status === 'success') {
                    alert('Zpráva byla úspěšně odeslána.');
                    form.reset();
                  } else {
                    alert(result.message || 'Chyba při odesílání.');
                  }
                } catch (error) {
                  alert('Odeslání se nepodařilo. Zkuste to prosím znovu.');
                } finally {
                  if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                  }
                }
              }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-2">Jméno a příjmení *</label>
                     <input type="text" name="name" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Jan Novák" required />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-2">Telefon *</label>
                     <input type="tel" name="phone" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+420" required />
                   </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                      <input type="email" name="email" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@domena.cz" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Typ služby</label>
                      <select name="service_type" className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors appearance-none">
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
                   <textarea name="message" rows={5} className="w-full bg-dark border border-concrete rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Kde se stavba nachází, jaký je přibližný rozsah prací?" required></textarea>
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
               <div className="absolute inset-0 z-0">
                 <iframe 
                   src="https://maps.google.com/maps?q=Karlovarsk%C3%A1%208,%20273%2051%20Pavlov&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
