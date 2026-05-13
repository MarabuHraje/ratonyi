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
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="mailto:perat.sro@seznam.cz" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" /> perat.sro@seznam.cz
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 cursor-pointer" /> Karlovarská 8, ČR
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-105 transition-transform">
              <HardHat className="w-8 h-8 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-wider text-white">PERAT</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-wider text-white">PERAT</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Prémiové stavební služby od myšlenky po realizaci. Karlovarský kraj a okolí.
            </p>
            <div className="text-gray-400 text-sm">
              <p>IČO: 27955460</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-bold mb-6 font-heading tracking-wide">RYCHLÝ KONTAKT</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-concrete p-2 rounded-full"><Phone className="w-4 h-4 text-primary" /></div>
                <a href="tel:+420777849773" className="hover:text-primary transition-colors hover:underline">+420 777 849 773</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-concrete p-2 rounded-full"><Mail className="w-4 h-4 text-primary" /></div>
                <a href="mailto:perat.sro@seznam.cz" className="hover:text-primary transition-colors hover:underline">perat.sro@seznam.cz</a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                 <div className="bg-concrete p-2 rounded-full mt-1"><MapPin className="w-4 h-4 text-primary" /></div>
                 <span>Karlovarská 8<br/>Česká republika</span>
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

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold mb-6 font-heading tracking-wide">PRACOVNÍ DOBA</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-concrete pb-2"><span>Pondělí - Pátek:</span> <span className="text-white">8:00 - 18:00</span></li>
              <li className="flex justify-between border-b border-concrete pb-2"><span>Sobota:</span> <span className="text-white">Dle domluvy</span></li>
              <li className="flex justify-between border-concrete pb-2"><span>Neděle:</span> <span className="text-gray-500">Zavřeno</span></li>
            </ul>
            <div className="mt-6 bg-concrete/50 border border-primary/20 p-4 rounded-sm">
               <p className="text-sm font-bold text-primary flex items-center gap-2 mb-1"><ShieldCheck className="w-4 h-4" /> Havarijní servis 24/7</p>
               <p className="text-xs text-gray-400">Pro stávající i nové zákazníky v nouzi volejte ihned.</p>
            </div>
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
