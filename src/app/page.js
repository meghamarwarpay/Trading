import AboutPage from "@/app/about/page";
import HomePage from "./home/page";
import FAQ from "./faq/page";


export default function Home() {
  return (<div>
    <HomePage/>
    <AboutPage/>
    <FAQ/>
  </div>
  );
}
