import "../styles/globals.css";
import Navbar from "../components/Navbar";

// Wrapper or layout that surrounds - header or footer components for example or authentication
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
