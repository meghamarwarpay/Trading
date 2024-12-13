import AboutPage from "@/app/about/page";
import HomePage from "./home/page";
import FAQ from "./faq/page";
import HomeComponent from "@/components/Home/home";


export default function Home() {
  return (<div>
    <HomeComponent />
    <div>
    <HomePage/>
    <AboutPage/>
    <FAQ/>
    </div>
  </div>
  );
}
