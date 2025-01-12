import Layout from "./layout";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";

function App() {
  return (
    <Layout>
      <div>
        <h1>Welcome to the App</h1>
        <AppSidebar />
      </div>
    </Layout>
  );
}

export default App;
