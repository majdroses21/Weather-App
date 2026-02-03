import "./assets/css/App.css";
import MainLayout from "./layout/Main";
import Test from "./components/Test";
import Home from "./components/Home";
import { CustomThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <MainLayout>
          <Home />
          {/* <Test /> */}
        </MainLayout>
      </CustomThemeProvider>
    </>
  );
}

export default App;
