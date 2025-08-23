import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/amineelgardoum-rgb",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/amine-el-gardoum-491a82333",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/AMINE44467019",
    },
    { name: "Email", icon: <MdMail />, link: "amineotako64@gmail.com" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-transparent z-20 py-12 text-green-300"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to my ${social.name} profile`}
                className="text-green-400 text-3xl cursor-none
                          transition-all duration-300 ease-in-out
                          hover:text-green-300 hover:scale-110
                          hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </footer>
  );
};
