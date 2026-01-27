const Links = [
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];
const Footer = () => {
  return (
    <>
      <footer className="footer bg-gray-400 shadow-2xl flex h-14 flexc">
        <h1>Footer</h1>
        {Links.map((ln, i) => (
          <a
            key={i}
            href={ln.link}
            className="text-sm font-medium hover:text-blue-600"
          >
            {ln.title}
          </a>
        ))}
      </footer>
    </>
  );
};

export default Footer;
