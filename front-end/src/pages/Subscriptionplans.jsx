import React from "react";
import { CheckCircle2, Pencil, Info } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Premium Monthly",
    description: "Access to all music with monthly billing",
    price: "$8.20",
    period: "Monthly",
    status: "Active",
    featured: false,
    features: [
      "Unlimited access to all music",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "Cancel anytime",
    ],
    trialPeriod: "7 days",
    activeSubscribers: 7,
    billingPeriod: "Month",
    stripePriceId: "price_1I4z8FQpu33zQptF80s3Ev2t",
    stripeProductId: "prod_T5Pvia8SQtB9z8c",
    priceConfigured: true,
    productConfigured: true,
  },
  {
    id: 2,
    name: "Premium Yearly",
    description: "Access to all music with yearly billing (Save 17%)",
    price: "$99.99",
    period: "Yearly",
    status: "Active",
    featured: true,
    features: [
      "Unlimited access to all music",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "Save $20 per year",
      "Cancel anytime",
    ],
    trialPeriod: "7 days",
    activeSubscribers: 3,
    billingPeriod: "Year",
    stripePriceId: null,
    stripeProductId: null,
    priceConfigured: false,
    productConfigured: false,
  },
  {
    id: 3,
    name: "Premium Lifetime",
    description: "One-time payment for lifetime access",
    price: "$199.99",
    period: "One-time",
    status: "Active",
    featured: false,
    features: [
      "Lifetime unlimited access",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "All future features included",
      "Best value for long-term users",
    ],
    trialPeriod: "0 days",
    activeSubscribers: 0,
    billingPeriod: "Lifetime",
    stripePriceId: null,
    stripeProductId: null,
    priceConfigured: false,
    productConfigured: false,
  },
];

const SubscriptionPlans = () => {
  return (
    <div className="text-white">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Subscription Plans</h1>
          <p className="text-sm text-[#8a8a93] mt-1">Manage your subscription tiers and pricing</p>
        </div>
        <button className="bg-[#1c1c24] hover:bg-[#26262f] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors border border-[#2a2a35]">
          View Subscriptions
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#2d1065] border border-[#3b1a7a] rounded-xl p-5">
          <p className="text-xs text-[#c4b5fd] mb-2">Total Plans</p>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="bg-[#14532d] border border-[#166534] rounded-xl p-5">
          <p className="text-xs text-[#86efac] mb-2">Active Plans</p>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="bg-[#1e3a5f] border border-[#1d4ed8] rounded-xl p-5">
          <p className="text-xs text-[#93c5fd] mb-2">Total Subscribers</p>
          <p className="text-4xl font-bold">10</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-[#0f0f16] rounded-xl border overflow-hidden ${plan.featured ? "border-[#1d4ed8]" : "border-[#1c1c24]"}`}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#166534] text-[#4ade80] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                  {plan.status}
                </span>
                {plan.featured && (
                  <span className="bg-[#854d0e] text-[#fde047] text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold mb-1">{plan.name}</h2>
              <p className="text-xs text-[#8a8a93] mb-4">{plan.description}</p>

              <div className="flex items-end gap-1.5 mb-5">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-xs text-[#8a8a93] mb-1">/ {plan.period}</span>
              </div>

              <ul className="flex flex-col gap-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#d1d1d8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-1.5 text-xs mb-5">
                <div className="flex justify-between">
                  <span className="text-[#8a8a93]">Trial Period</span>
                  <span className="font-medium">{plan.trialPeriod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8a8a93]">Active Subscribers</span>
                  <span className="font-medium">{plan.activeSubscribers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8a8a93]">Billing Period</span>
                  <span className="font-medium">{plan.billingPeriod}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-5">
                <div>
                  <p className="text-[10px] text-[#8a8a93] mb-1">Stripe Price ID</p>
                  {plan.priceConfigured ? (
                    <div className="bg-[#1c1c24] border border-[#2a2a35] rounded px-3 py-1.5 text-[11px] text-[#8a8a93] font-mono truncate">
                      {plan.stripePriceId}
                    </div>
                  ) : (
                    <p className="text-[11px] text-[#f59e0b]">Not configured</p>
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-[#8a8a93] mb-1">Stripe Product ID</p>
                  {plan.productConfigured ? (
                    <div className="bg-[#1c1c24] border border-[#2a2a35] rounded px-3 py-1.5 text-[11px] text-[#8a8a93] font-mono truncate">
                      {plan.stripeProductId}
                    </div>
                  ) : (
                    <p className="text-[11px] text-[#f59e0b]">Not configured</p>
                  )}
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-sm font-medium py-2.5 rounded-lg transition-colors mb-2">
                <Pencil className="w-3.5 h-3.5" />
                Edit Plan
              </button>
              <button className="w-full bg-[#1c1c24] hover:bg-[#26262f] text-[#8a8a93] hover:text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0f1929] border border-[#1d4ed8] rounded-xl p-4 flex items-start gap-3">
        <Info className="w-4 h-4 text-[#60a5fa] mt-0.5 shrink-0" />
        <p className="text-sm text-[#60a5fa] font-medium">Stripe Configuration Required</p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
