import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/lib/ui/tag";
import {useState, useEffect, useRef} from "react";
const projects = [
    {
        id: 1,
        slug: "perfume-brand-campaign",
        title: "Next Dior Fragrance",
        description:
            "A campaign for the next Dior fragrance, featuring a dark chocolate mood",
        src: "assets/dior.jpg",
        videoSrc: "assets/videos/dior.mp4",
        imgKey: "dark mode social media app on phone",
    },
    {
        id: 2,
        slug: "fintech-dashboard",
        title: "Boxing Training Club",
        description:
            "A fintech application dashboard with payment details, displayed on a smartphone next to a keyboard.",
        src: "assets/boxing.jpg",
        videoSrc: "assets/videos/boxing.mp4",
        imgKey: "fintech app on phone next to keyboard",
    },
    {
        id: 3,
        slug: "digital-marketing-agency-site",
        title: "Kids Handmade Toys",
        description:
            "A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design.",
        src: "assets/kids.jpg",
        videoSrc: "assets/videos/kids.mp4",
        imgKey: "digital marketing agency website on phone",
    },
];

const Portfolio = () => {
  // State management on hover
  const [hoveredId, setHoveredId] = useState(null);
  const [stateByProject, setStateByProject] = useState({});
  const cardRefs = useRef({});
  const videoRefs = useRef({});

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.dataset.id);
          if (!Number.isNaN(id) && entry.isIntersecting) {
            setStateByProject((prev) => {
              if (prev[id]) return prev;
              return {
                ...prev,
                [id]: "static",
              };
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    projects.forEach((project) => {
      const el = cardRefs.current[project.id];
      if (el) observer.observe(el);
    });


    return () => {
      observer.disconnect();
    };
  }, []);


  // "static", "loading", "playing", "downloaded"
  const setState = (id, status) => {
    setStateByProject((prev) => ({ ...prev, [id]: status }));
  };
 
    const handleMouseEnter = (project) => {
    const currentState = stateByProject[project.id] || "static";
    if (currentState !== "downloaded") {
      setState(project.id, "loading");
    }
    setHoveredId(project.id);

    const video = videoRefs.current[project.id];
    if (video && video.readyState >= 3) {
      video
        .play()
        .then(() => setState(project.id, "playing"))
        .catch(() => {
          /* Autoplay maybe blocked; we keep 'loading' until user interaction */
        });
    }
  };


  const handleCanPlay = (project) => {
    if (hoveredId === project.id) {
      const video = videoRefs.current[project.id];
      if (video) {
        video
          .play()
          .then(() => setState(project.id, "playing"))
          .catch(() => setState(project.id, "downloaded"));
      }
    } else {
      setState(project.id, "downloaded");
    }
  };

    const handleWaiting = (project) => {
    setState(project.id, "loading");

  };

  const handleMouseLeave = (project) => {
    const video = videoRefs.current[project.id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setHoveredId(null);

    setStateByProject((prev) => {
      // console.log("Mouse leave ", project.id, " with ", prev); 
      const status = prev[project.id];
      if (status === "playing" || status === "loading") {
        return { ...prev, [project.id]: "downloaded" };
      }
      return prev;
    });
  };



    return (
        <section id="portfolio" className="py-12 md:py-24 bg-[#0C0D0D] ">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-stretch items-end gap-8 mb-16">
                    <div className="w-full">
                        <Tag value="Portafolio"></Tag>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ">
                            Marcas que pasaron al{" "}
                            <i>
                                <b>siguiente</b>
                            </i>{" "}
                            nivel
                        </h2>
                    </div>
                    <div className="w-full">
                        <p className="text-lg text-white">
                            Mira lo que hemos hecho y lo que podemos hacer
                            contigo. Proyectos de marca, web y campañas pensados
                            para que se vea bien… y funcione mejor.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[357px] lg:grid-cols-[repeat(3,1fr)] container mx-auto md:px-0 px-4 md:grid-cols-2 md:gap-4 gap-8 justify-center items-stretch">
                {projects.map((project) => {
                  
                  // console.log(project);
                  
                  return (
                    <div
                        key={project.title}
                        data-id={project.id}
                        ref={(el) => (cardRefs.current[project.id] = el)}
                        onMouseEnter={() => handleMouseEnter(project)}
                        onMouseLeave={() => handleMouseLeave(project)}
                        className="group w-full aspect-6/8 relative h-107 md:h-160 mx-auto max-w-sm lg:max-w-full rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={project.imgKey}
              src={project.src}
            /> */}
                        <video
                            ref={(el) => (videoRefs.current[project.id] = el)}
                            className="absolute inset-0 w-full h-full object-cover"
                            playsInline
                            muted
                            loop
                            preload="metadata"
                            onCanPlay={() => handleCanPlay(project)}
                            onWaiting={() => handleWaiting(project)}
                        >
                            <source src={project.videoSrc} type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
})
              }

            </div>
        </section>
    );
};
export default Portfolio;
