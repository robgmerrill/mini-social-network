import "../styles/globals.css";

// Wrapper or layout that surrounds - header or footer components for example or authentication
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
