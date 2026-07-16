import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, HardHat, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// --- Components ---

function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 sm:px-6 lg:px-8 text-sm font-medium">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="mailto:perat.sro@seznam.cz" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" /> perat.sro@seznam.cz
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 cursor-pointer" /> Pavlov (okres Kladno)
          </div>
        </div>
        <div className="flex items-center gap-2 text-base font-bold animate-pulse">
          <Phone className="w-4 h-4" />
          <a href="tel:+420777849773">+420 777 849 773</a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: "Domů", path: "/" },
    { name: "O nás", path: "/o-nas" },
    { name: "Služby", path: "/sluzby" },
    { name: "Realizace", path: "/realizace" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-anthracite/95 backdrop-blur-md border-b border-concrete">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://marabie.eu/images_perat/logo.svg" alt="PERAT s.r.o. Logo" className="h-24 lg:h-32 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-sm font-bold flex items-center gap-2 transition-colors ml-4 shadow-lg shadow-primary/20"
            >
              Nezávazná poptávka
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-anthracite fixed left-0 right-0 top-[80px] bottom-0 flex flex-col pt-8 px-6"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-bold py-4 border-b border-concrete text-white hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <a href="tel:+420777849773" className="w-full text-center bg-transparent border-2 border-primary text-primary py-4 rounded-sm font-bold text-xl flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" /> Volat Nyní
              </a>
              <Link to="/kontakt" className="w-full text-center bg-primary text-white py-4 rounded-sm font-bold text-xl">
                Nezávazná poptávka
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-anthracite border-t border-concrete pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="https://marabie.eu/images_perat/logo.svg" alt="PERAT s.r.o. Logo" className="h-24 lg:h-32 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Prémiové stavební služby od myšlenky po realizaci. Středočeský kraj a okolí.
            </p>
            <div className="text-gray-400 text-sm">
              <p>IČO: 27955460</p>
              <p>DIČ: CZ27955460</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-bold mb-6 font-heading tracking-wide">KANCELÁŘ A KONTAKTY</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                 <div className="bg-concrete p-2 rounded-full mt-1"><MapPin className="w-4 h-4 text-primary" /></div>
                 <span>Perat s.r.o.<br/>Karlovarská 8<br/>273 51 Pavlov (okres Kladno)</span>
              </li>
              <li className="flex flex-col gap-2 text-gray-300 mt-4 border-t border-concrete pt-4">
                <span className="text-white font-bold">Petr Rátonyi (jednatel)</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+420777849773" className="hover:text-primary transition-colors">+420 777 849 773</a></span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:perat.sro@seznam.cz" className="hover:text-primary transition-colors">perat.sro@seznam.cz</a></span>
              </li>
              <li className="flex flex-col gap-2 text-gray-300 mt-4 border-t border-concrete pt-4">
                <span className="text-white font-bold">Kancelář účetní - Hanka Karlovská</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+420607826122" className="hover:text-primary transition-colors">+420 607 826 122</a></span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:hkkarlovska@seznam.cz" className="hover:text-primary transition-colors">hkkarlovska@seznam.cz</a></span>
              </li>
              <li className="flex flex-col gap-2 text-gray-300 mt-4 border-t border-concrete pt-4">
                <span className="text-white font-bold">Kancelář rozpočtářka - Radka Tatíčková</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+420312527992" className="hover:text-primary transition-colors">+420 312 527 992</a></span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:perat.rozpocty@seznam.cz" className="hover:text-primary transition-colors">perat.rozpocty@seznam.cz</a></span>
              </li>
            </ul>
          </div>

          {/* Odkazy */}
          <div>
            <h3 className="text-white font-bold mb-6 font-heading tracking-wide">NAVIGACE</h3>
            <ul className="space-y-3">
              {['Domů', 'O nás', 'Služby', 'Realizace', 'Kontakt'].map(link => (
                <li key={link}>
                  <Link to={link === 'Domů' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ostatni udaje instead of opening hours */}
          <div>
            <h3 className="text-white font-bold mb-6 font-heading tracking-wide">OSTATNÍ ÚDAJE</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex flex-col border-b border-concrete pb-2">
                 <span className="text-sm">IČO</span>
                 <span className="text-white font-medium">27955460</span>
              </li>
              <li className="flex flex-col border-b border-concrete pb-2 mt-2">
                 <span className="text-sm">DIČ</span>
                 <span className="text-white font-medium">CZ27955460</span>
              </li>
              <li className="flex flex-col border-b border-concrete pb-2 mt-2">
                 <span className="text-sm">Bankovní spojení ČSAS (CZK)</span>
                 <span className="text-white font-medium">0413612339/0800</span>
              </li>
              <li className="flex flex-col border-b border-concrete pb-2 mt-2">
                 <span className="text-sm">Bankovní spojení Fio (CZK)</span>
                 <span className="text-white font-medium">2503550054/2010</span>
              </li>
              <li className="flex flex-col border-b border-concrete pb-2 mt-2">
                 <span className="text-sm">Bankovní spojení Fio (EUR)</span>
                 <span className="text-white font-medium">2003550058/2010</span>
              </li>
              <li className="flex flex-col border-concrete pb-2 mt-2">
                 <span className="text-sm">Spisová značka</span>
                 <span className="text-white text-sm mt-1">C 129186 vedená u rejstříkového soudu v Praze</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-concrete pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PERAT s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link to="/ochrana-dat" className="hover:text-white transition-colors">Ochrana osobních údajů</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <motion.a
      href="tel:+420777849773"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all group flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
      <Phone className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite] group-hover:animate-none" />
    </motion.a>
  );
}

// --- Layout & App ---

function CatchAll() {
  return (
    <div className="bg-dark min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <HardHat className="w-24 h-24 text-primary mb-6 animate-bounce" />
      <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">Stránka nenalezena</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-lg">Omlouváme se, ale požadovaná stránka neexistuje.</p>
      <Link to="/" className="bg-transparent border border-white text-white px-8 py-3 rounded-sm font-bold hover:bg-white hover:text-dark transition-colors">
        Zpět na hlavní stranu
      </Link>
    </div>
  )
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/realizace" element={<Projects />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<CatchAll />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
