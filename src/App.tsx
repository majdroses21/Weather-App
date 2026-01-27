import "./assets/css/App.css";
import MainLayout from "./layout/Main";
import Test from "./components/Test";
import { CustomThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <MainLayout>
          <h1>Vite + React</h1>
          <br />
          <h1>Vite + React</h1>
          <Test />
        </MainLayout>
      </CustomThemeProvider>
    </>
  );
}

export default App;
