import { Facebook, Send, Linkedin } from "lucide-react";
// Other
import { useTranslation } from 'react-i18next';

const socials = [
  { href: "https://facebook.com/majdDev21", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/in/majdroses21", label: "LinkedIn", Icon: Linkedin },
  { href: "https://t.me/majdroses21", label: "Telegram", Icon: Send },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-primary p-4 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <ul className="flex justify-center gap-3 p-0 m-0 list-none mb-3">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-1 text-white no-underline transition-transform duration-300 hover:opacity-70 hover:-translate-y-0.5"
            >
              <Icon />
              <span className="sr-only md:inline">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="font-medium text-[0.9rem] text-white">{t('copyright')} {new Date().getFullYear()}</p>
    </div>
  </footer>
  );
};

export default Footer;
