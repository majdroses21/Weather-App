import { Header, Footer } from "../components/layout";
import "../assets/css/layout.css";
import TailwindIndicator from "../components/TailwindIndicator";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <TailwindIndicator/>
      </div>
    </>
  );
};
export default MainLayout