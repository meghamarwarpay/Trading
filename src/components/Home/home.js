import AboutPage from "./about";

import FromDesk from "./fromdesk";
import { Hero } from "./hero";
import HomeProgram from "./program";
import Services from "./service";
import TradingDashboard from "./tredingdash";
import WhyUs from "./whyus";

export default function HomeComponent() {
return (
    <div>
<Hero />
<AboutPage/>
<FromDesk/>
<TradingDashboard/>
<WhyUs/>
<Services/>
<HomeProgram/>
</div>
  )
}