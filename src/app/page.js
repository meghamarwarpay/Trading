import AboutPage from "@/app/about/page";
import FAQ from "./faq/page";
import HomeComponent from "@/components/Home/home";
import Contact from "./contact/page";
import Plan from "./plan/page";


export default function Home() {
  return (<div>
    <HomeComponent />
    <div>
    {/* <AboutPage/> */}
    <Plan/>
    {/* <FAQ/> */}
    <Contact/>
    </div>
  </div>
  );
}
