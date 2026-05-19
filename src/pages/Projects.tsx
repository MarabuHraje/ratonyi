import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin, Calendar, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("Vše");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["Vše", "Stavby vodního hospodářství", "Zemní práce a demolice", "Komplexní řešení inženýrských prací", "Stavební práce"];

  const projects = [
    {
      id: 1,
      title: "Hospodaření se srážkovými vodami",
      location: "Domov u Anežky, Benátky nad Jizerou",
      category: "Stavby vodního hospodářství",
      desc: "Komplexní zpevnění koryta, vyčištění od nánosů a úprava břehů pro vyšší průtokovou kapacitu.",
      img: "https://marabie.eu/images_perat/domov_u_anezky_benatky.jpg",
      gallery: [
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.03%20%281%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.03%20%282%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.03.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.05%20%281%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.05.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%281%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%282%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%283%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%285%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%286%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06%20%287%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.06.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.07%20%281%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.07%20%282%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.07%20%283%29.jpeg",
        "https://marabie.eu/images_perat/domov_u_anezky_benatky/WhatsApp%20Image%202026-05-18%20at%2014.27.07.jpeg"
      ]
    },
    {
      id: 3,
      title: "Hospodaření se srážkovými vodami",
      location: "Benátky nad Jizerou, zimní stadion",
      category: "Stavby vodního hospodářství",
      desc: "Komplexní řešení hospodaření se srážkovými vodami pro areál zimního stadionu.",
      img: "https://marabie.eu/images_perat/zimni_stadion.JPG",
      gallery: [
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.16.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19%20%281%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19%20%282%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19%20%283%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19%20%284%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19%20%285%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.19.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%281%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%283%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%284%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%285%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%286%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%287%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20%20%288%29.jpeg",
        "https://marabie.eu/images_perat/zimni_stadion/WhatsApp%20Image%202026-05-19%20at%2012.52.20.jpeg"
      ]
    },
    {
      id: 4,
      title: "Demolice v areálu MŠ Kladno",
      location: "MŠ Kladno",
      category: "Zemní práce a demolice",
      desc: "Kompletní asanace objektu s důrazem na maximální vytřídění stavebního odpadu před recyklací a ekologickou likvidací.",
      img: "https://img.youtube.com/vi/zqdQZmA5BIo/maxresdefault.jpg",
      videoId: "zqdQZmA5BIo"
    },
    {
      id: 7,
      title: "Demolice průmyslové budovy",
      category: "Zemní práce a demolice",
      desc: "Rozsáhlá demolice průmyslového objektu s využitím těžké techniky. Efektivní a rychlé odstranění suti.",
      img: "https://img.youtube.com/vi/tH5tRs8Qvsc/hqdefault.jpg",
      videoId: "tH5tRs8Qvsc"
    },
    {
      id: 5,
      title: "Rybník a retenční nádrž",
      location: "Cheb",
      category: "Stavby vodního hospodářství",
      desc: "Výstavba rybníka, navazující retenční i vsakovací nádrže včetně vybudování kvalitního přítoku.",
      img: "",
      gallery: []
    },
    {
      id: 6,
      title: "Zarovnávání terénu a výkopy",
      location: "Karlovy Vary",
      category: "Zemní práce a demolice",
      desc: "Rozsáhlé zarovnávání svahu včetně hutnění na požadované parametry pro stavbu haly.",
      img: "",
      gallery: []
    },
    {
      id: 8,
      title: "Projekt v přípravě",
      category: "Komplexní řešení inženýrských prací",
      desc: "Fotodokumentace se připravuje.",
      img: "",
      gallery: []
    },
    {
      id: 9,
      title: "Projekt v přípravě",
      category: "Komplexní řešení inženýrských prací",
      desc: "Fotodokumentace se připravuje.",
      img: "",
      gallery: []
    },
    {
      id: 10,
      title: "Projekt v přípravě",
      category: "Komplexní řešení inženýrských prací",
      desc: "Fotodokumentace se připravuje.",
      img: "",
      gallery: []
    },
    {
      id: 11,
      title: "Výstavba garáže a monolitového stropu",
      category: "Stavební práce",
      desc: "Kompletní realizace výstavby garáže včetně betonáže monolitového stropu.",
      img: "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.06.jpeg",
      gallery: [
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.06.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%281%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%282%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%283%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%284%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%285%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%286%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%287%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%288%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%289%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2810%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2811%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2812%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2813%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2814%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2815%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07%20%2816%29.jpeg",
        "https://marabie.eu/images_perat/garaz/WhatsApp%20Image%202026-05-19%20at%2016.02.07.jpeg"
      ]
    },
    {
      id: 12,
      title: "Projekt v přípravě",
      category: "Stavební práce",
      desc: "Fotodokumentace se připravuje.",
      img: "",
      gallery: []
    },
    {
      id: 13,
      title: "Projekt v přípravě",
      category: "Stavební práce",
      desc: "Fotodokumentace se připravuje.",
      img: "",
      gallery: []
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
    if (selectedProject && selectedProject.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.gallery) {
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
                <div className="absolute inset-0 z-0 bg-concrete">
                  {project.img && (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      loading="lazy"
                    />
                  )}
                  {!project.img && (
                    <div className="w-full h-full opacity-30 bg-primary/20 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "radial-gradient(#ff6b00 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                  )}
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
                    {project.year && (
                      <span className="text-xs font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-sm">
                        {project.year}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {(project.location || project.year) && (
                    <div className="flex items-center gap-2 text-gray-300 mb-4 font-medium">
                      {project.location && <><MapPin className="w-4 h-4 text-primary" /> {project.location}</>}
                      {project.location && project.year && <span className="opacity-50">|</span>}
                      {project.year && <span>{project.year}</span>}
                    </div>
                  )}
                  
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
                {selectedProject.videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    {(selectedProject.gallery && selectedProject.gallery.length > 0) ? (
                      <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={selectedProject.gallery[currentImageIndex]}
                        alt={`${selectedProject.title} - foto ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    ) : selectedProject.img ? (
                      <motion.img
                        key="main-img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={selectedProject.img}
                        alt={`${selectedProject.title} - hlavní foto`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-dark/50">
                        <p className="text-gray-400 font-medium tracking-widest uppercase">Fotodokumentace se připravuje</p>
                      </div>
                    )}

                    {selectedProject.gallery && selectedProject.gallery.length > 1 && (
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
                  </>
                )}
              </div>

              <div className="p-8 bg-anthracite">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-heading text-white mb-2">{selectedProject.title}</h3>
                    {(selectedProject.location || selectedProject.year) && (
                      <div className="flex items-center gap-4 text-gray-400">
                        {selectedProject.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> {selectedProject.location}</span>}
                        {selectedProject.year && <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary" /> {selectedProject.year}</span>}
                      </div>
                    )}
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
