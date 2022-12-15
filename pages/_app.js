import "../styles/globals.css";
import "animate.css";
import EfectParticles from "../components/Particles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <EfectParticles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
