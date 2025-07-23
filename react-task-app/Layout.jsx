import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "./src/layout/Layout";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow p-4"> {children} </main>
      <Footer />
    </div>
  );
}
