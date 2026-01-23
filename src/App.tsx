import "./assets/css/App.css";
import MainLayout from "./layout/Main";
import Test from "./components/Test";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <MainLayout>
        <h1>Vite + React</h1>
        <br/>
        <h1>Vite + React</h1>
        <Test/>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Click me</Button>
        </div>
 
 
      </MainLayout>
    </>
  );
}

export default App;
