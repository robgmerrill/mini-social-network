import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

// Wrapper or layout that surrounds - header or footer components for example or authentication
function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: "Jeff" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
