import { Check, X } from 'lucide-react'

export function PricingCard({ title, price, icon, features, colorClass, buttonClass }) {
  return (
    <div className={`relative w-[300px] rounded-2xl bg-white shadow-lg overflow-hidden`}>
      <div className={`${colorClass} h-32 flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className={`${colorClass} h-8 curve-bottom`}></div>
      
      <div className="px-6 py-6 -mt-4 bg-white rounded-t-3xl">
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-3xl font-bold text-center mb-6">
          {price}
          <span className="text-sm font-normal text-gray-500">/mo</span>
        </p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-sm text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-2 rounded-lg font-medium ${buttonClass}`}>
          BUY Plan
        </button>
      </div>
    </div>
  )
}
