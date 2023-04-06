import "../styles/global.css";
import { Anybody } from "next/font/google";

const anybody = Anybody({
  weight: "400",
  subsets: ["latin"],
});
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={anybody.className}>
      <Component {...pageProps} />
    </main>
  );
}
