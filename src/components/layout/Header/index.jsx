import MainHeader from "./Main";
import MobailHeader from "./Mobail";
import logo from "../../../assets/imgs/logo.png";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-full shadow-xl z-50 bg-primary">
        <div className="container mx-auto px-4">
          {/* Desktop */}
          <MainHeader logo={logo} />

          {/* Mobail */}
          <MobailHeader logo={logo} />

          {/* Desktop & Mobail */}
       
        </div>
      </header>
    </>
  );
};

export default Header;
