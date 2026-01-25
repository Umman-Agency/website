import React from "react";
import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { toast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialClick = () => {
    // toast({
    //     title: "Feature Not Implemented 🚧",
    //     description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    // });
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" || path === "") {
      // Handles both '/#section' and '#section'
      navigate("/");
      setTimeout(() => {
        if (id) {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      handleSocialClick(); // For unimplemented links like 'Careers'
    }
  };

  const footerSections = [
    {
      title: "Conversa con nosotros",
      items: [
        { name: "hola@umman.es", href: "/#" },
        { name: "(+34) 641 01 39 59", href: "/#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "Soluciones@umman.es", href: "/#" },
        { name: "(+34) 641 01 39 59", href: "/#services" },
      ],
    },
    {
      title: "Ubícanos",
      items: [
        { name: "Madrid,España", href: "/#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={35} />, name: "Facebook" },
    { icon: <Instagram size={35} />, name: "Instagram" },
  ];

  return (
    <footer className="bg-[#0C0D0D] border-t border-transparent pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="w-1/2">
            <img
              src="https://horizons-cdn.hostinger.com/258a96df-c479-4700-b7e2-08531e163395/130c0ec97cd22462d55901dd18cc0030.png"
              alt="Umman Logo"
              className="h-5 w-auto mt-4 mb-4"
            />{" "}
            {/* Changed h-10 to h-5 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={handleSocialClick}
                  className="text-white-400 margin hover:text-accent-clearBlue transition-colors duration-300"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="lg:col-span-1">
            <p className="text-2xl font-bold text-white tracking-wider glow-effect">
              AGENCY
            </p>
            <p className="text-gray-400">
              Creative solutions that drive results.
            </p>
          </div> */}

          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/contact") {
                          e.preventDefault();
                          navigate("/contact");
                        } else if (link.href.includes("#")) {
                          handleNavClick(e);
                        } else {
                          e.preventDefault();
                          handleSocialClick();
                        }
                      }}
                      className="text-white-400 hover:text-accent-clearBlue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white-500">
          <p>&copy; {new Date().getFullYear()} Umman Agencia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
