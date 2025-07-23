import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Posts from "./pages/Posts";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
