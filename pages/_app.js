import "../styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
