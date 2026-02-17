import Header from "./Pages/Header";
import BackgroundAnimation from "./components/BackgroundAnimation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Global fixed background animation across all pages */}
      <BackgroundAnimation />
      <Header />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
