import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Calendar, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("Vše");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["Vše", "Vodní hospodářství", "Zemní práce", "Inženýrské práce", "Demoliční práce"];

  const projects = [
    {
      id: 1,
      title: "Rekonstrukce vodního toku",
      location: "Karlovy Vary",
      category: "Vodní hospodářství",
      year: "2023",
      desc: "Komplexní zpevnění koryta, vyčištění od nánosů a úprava břehů pro vyšší průtokovou kapacitu.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Výkopové práce pro bytový dům",
      location: "Sokolov",
      category: "Zemní práce",
      year: "2023",
      desc: "Hloubení základové spáry, přesun zemin a finální modelace terénu pro novostavbu bytového domu.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Inženýring komerční budovy",
      location: "Ostrov",
      category: "Inženýrské práce",
      year: "2022",
      desc: "Kompletní technický dozor investora, inženýrská činnost u výstavby obchodního centra a kolaudace.",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Demolice průmyslového areálu",
      location: "Karlovy Vary",
      category: "Demoliční práce",
      year: "2024",
      desc: "Strojní demolice hal včetně odvozu a ekologické likvidace veškeré sutě a srovnání a přípravy pozemku.",
      img: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Rybník a retenční nádrž",
      location: "Cheb",
      category: "Vodní hospodářství",
      year: "2023",
      desc: "Výstavba rybníka, navazující retenční i vsakovací nádrže včetně vybudování kvalitního přítoku.",
      img: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Zarovnávání terénu a výkopy",
      location: "Karlovy Vary",
      category: "Zemní práce",
      year: "2022",
      desc: "Rozsáhlé zarovnávání svahu včetně hutnění na požadované parametry pro stavbu haly.",
      img: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2070&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
      ]
    }
  ];

  const filteredProjects = filter === "Vše" ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-concrete overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Realizace" 
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
              Naše <span className="text-primary">realizace</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Prohlédněte si výběr z naší práce. Jsme hrdí na každý dokončený projekt a spokojení klienti jsou pro nás tou nejlepší vizitkou.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-anthracite">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors border ${
                  filter === cat 
                    ? "bg-primary border-primary text-white" 
                    : "bg-dark border-concrete text-gray-400 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => openProject(project)}
                className="group relative overflow-hidden bg-dark border border-concrete rounded-sm aspect-[4/5] flex flex-col cursor-pointer"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-90"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full p-8 justify-end">
                  
                  {/* Top right icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-primary flex items-center justify-center rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Plus className="w-6 h-6 text-white" />
                  </div>

                  <div className="mb-4 flex flex-wrap gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-dark bg-primary px-3 py-1 rounded-sm">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-sm">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 mb-4 font-medium">
                    <MapPin className="w-4 h-4 text-primary" /> {project.location}
                  </div>
                  
                  {/* Expanded description on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                     <p className="text-gray-300 text-sm mb-6 leading-relaxed border-t border-white/10 pt-4 mt-2">
                       {project.desc}
                     </p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={closeProject}
          >
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-full flex flex-col bg-dark border border-white/10 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group w-full h-[50vh] md:h-[70vh] bg-black">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - foto ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary text-white flex items-center justify-center rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary text-white flex items-center justify-center rounded-full transition-colors"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_: any, i: number) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-primary' : 'bg-white/30'}`}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-8 bg-anthracite">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-heading text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> {selectedProject.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary" /> {selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-sm text-primary font-bold tracking-widest uppercase text-sm">
                    {selectedProject.category}
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-dark border-t border-concrete">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Chcete podobnou realizaci?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Už máte představu o svém projektu, ale chybí vám spolehlivý dodavatel? Ozvěte se, vytvoříme vám transparentní nabídku.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="tel:+420777849773" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] w-full sm:w-auto">
                Zavolat nám
              </a>
              <Link to="/kontakt" className="bg-transparent border border-white hover:bg-white hover:text-dark text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                Poptat projekt <ArrowRight className="w-5 h-5"/>
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
