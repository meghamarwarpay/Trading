import { Send, Diamond, Rocket } from 'lucide-react'
import { PricingCard } from "@/components/pricing-card"

const plans = [
  {
    title: "Equity",
    price: 3500,
    icon: <Send className="w-8 h-8 text-white" />,
    features: [
      { text: "Market Outlook", included: true },
      { text: "Short Term Stock Ideas", included: true },
      { text: "100Buy & Sell Alerts", included: true },
      { text: "Free Contacts", included: false },
    ],
    colorClass: "bg-emerald-400",
    buttonClass: "bg-emerald-400 text-white hover:bg-emerald-500",
  },
  {
    title: "Commodity",
    price: 7500,
    icon: <Diamond className="w-8 h-8 text-white" />,
    features: [
      { text: "Market Outlook", included: true },
      { text: "Short Term Stock Ideas", included: true },
      { text: "100Buy & Sell Alerts", included: true },
      { text: "Free Contacts", included: true },
    ],
    colorClass: "bg-blue-500",
    buttonClass: "bg-blue-500 text-white hover:bg-blue-600",
  },
  {
    title: "Combined",
    price: 10000,
    icon: <Rocket className="w-8 h-8 text-white" />,
    features: [
      { text: "Market Outlook", included: true },
      { text: "Short Term Stock Ideas", included: true },
      { text: "100Buy & Sell Alerts", included: true },
      { text: "Free Contacts", included: true },
    ],
    colorClass: "bg-amber-400",
    buttonClass: "bg-amber-400 text-white hover:bg-amber-500",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-navy-900 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue mb-12">
          Choose a Plan
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
            VIEW ALL PLANS
          </button>
        </div>
      </div>
    </div>
  )
}

