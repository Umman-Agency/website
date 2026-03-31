import { ArrowUpRight } from "lucide-react";
import { Tag } from "./ui/tag";
const projects = [
  {
    id: 1,
    slug: "social-media-app",
    title: "Next-Gen Banking UI",
    description:
      "A dark-themed social media application interface shown on a smartphone.",
    src: "assets/dior.jpg",
    imgKey: "dark mode social media app on phone",
  },
  {
    id: 2,
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    description:
      "A fintech application dashboard with payment details, displayed on a smartphone next to a keyboard.",
    src: "assets/boxing.jpg",
    imgKey: "fintech app on phone next to keyboard",
  },
  {
    id: 3,
    slug: "digital-marketing-agency-site",
    title: "Digital Marketing Agency Site",
    description:
      "A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design.",
    src: "assets/kids.jpg",
    imgKey: "digital marketing agency website on phone",
  },
];

const Portfolio = () => {
  const handleProjectClick = (slug) => {
    // navigate(`/project/${slug}`);
    return `/project/${slug}`;
  };
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-[#0C0D0D] ">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
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
              Mira lo que hemos hecho y lo que podemos hacer contigo. Proyectos
              de marca, web y campañas pensados para que se vea bien… y funcione
              mejor.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[357px] lg:grid-cols-[repeat(3,1fr)] container mx-auto md:px-0 px-4 md:grid-cols-2 md:gap-4 gap-8 justify-start justify-between">
        {projects.map((project) => (
          <div
            className="group w-full aspect-6/8 relative h-107 md:h-122 mx-auto max-w-sm rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => handleProjectClick(project.slug)}
            key={project.title}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={project.imgKey}
              src={project.src}
            />
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
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
