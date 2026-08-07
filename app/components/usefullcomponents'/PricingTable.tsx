import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
export default function PricingTable() {
    const pricing =
    [
  {
    plan: "Website Design & Development Packages",
    features: [
      {
        name: "Starter Plan",
        price: "NPR 30,000",
        description: "Renews at NPR 12,000/yr",
        perks: [
          "Up to 7 Pages",
          "Responsive Design",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Map Integration",
          "WhatsApp/Call-to-Action Button",
          "Hosting Included",
          "2 Business Emails (1GB each)",
          "Content Writing"
        ]
      },
      {
        name: "Professional Plan",
        price: "NPR 50,000",
        description: "Renews at NPR 20,000/yr",
        perks: [
          "Up to 15 Pages",
          "Responsive Design",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Map Integration",
          "WhatsApp/Call-to-Action Button",
          "Hosting Included",
          "5 Business Emails (1GB each)",
          "Content Writing",
          "Basic SEO",
          "Google My Business Support",
          "Blog Section"
        ]
      },
      {
        name: "Premium Plan",
        price: "NPR 100,000",
        description: "Renews at NPR 40,000/yr",
        perks: [
          "Unlimited Pages",
          "Responsive Design",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Map Integration",
          "WhatsApp/Call-to-Action Button",
          "Hosting Included",
          "5 Business Emails (2GB each)",
          "Content Writing",
          "Premium SEO (6 Months)",
          "Google My Business Support",
          "Blog Section",
          "Live Chat"
        ]
      },
      {
        name: "Customized Plan",
        price: "TBD",
        description: "Custom Pricing",
        perks: [
          "Unlimited Pages",
          "Premium UI/UX",
          "Everything in Premium Plan",
          "Premium Hosting",
          "Unlimited Business Emails (5GB each)",
          "Premium SEO (1 Year)",
          "Google My Business Support",
          "Social Media Management (6 Months)",
          "24/7 Premium Support",
          "Specialized / Custom Features"
        ]
      }
    ]
  },
  {
    plan: "E-Commerce Packages",
    features: [
      {
        name: "Starter Plan",
        price: "NPR 50,000",
        description: "Renews at NPR 20,000/yr",
        perks: [
          "Up to 20 Products",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Map Integration",
          "WhatsApp/Call-to-Action Button",
          "Hosting Included",
          "2 Business Emails (1GB each)",
          "Blog Section",
          "Live Chat"
        ]
      },
      {
        name: "Standard Plan",
        price: "NPR 100,000",
        description: "Renews at NPR 40,000/yr",
        perks: [
          "Up to 50 Products",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Map Integration",
          "WhatsApp/Call-to-Action Button",
          "Hosting Included",
          "5 Business Emails (1GB each)",
          "Blog Section",
          "Live Chat",
          "Product Image Optimization",
          "Product Photography",
          "Premium SEO (6 Months)",
          "Social Media Management (3 Months)",
          "24/7 Premium Support",
          "Payment Gateway Support"
        ]
      },
      {
        name: "Premium Plan",
        price: "NPR 200,000",
        description: "Renews at NPR 80,000/yr",
        perks: [
          "Unlimited Products",
          "Contact/Enquiry Form",
          "Social Media Integration",
          "Google Business Management",
          "WhatsApp/Call-to-Action Button",
          "Premium Hosting",
          "5 Business Emails (1GB each)",
          "Blog Section",
          "Live Chat",
          "Product Photography / Videography",
          "Premium SEO",
          "Social Media Management (6 Months)",
          "24/7 Premium Support",
          "Payment Gateway Integration",
          "Google Merchant Support"
        ]
      },
      {
        name: "Custom Plan",
        price: "TBD",
        description: "Custom Pricing",
        perks: [
          "Everything in Premium Plan",
          "Premium UI/UX",
          "Premium Hosting with CDN",
          "Unlimited Business Emails (5GB each)",
          "Specialized / Custom Features"
        ]
      }
    ]
  }
]

    return (
        <TabGroup className="flex flex-col gap-4 w-full pt-20 pb-20">
            <TabList className="flex flex-wrap gap-2 md:gap-10 w-full  ">
                {
                    pricing.map((plan, index) => (
                        <Tab key={index} className="px-4 py-2 text-sm text-black outline outline-gray-300 font-bold rounded-xl hover:text-black hover:cursor-pointer  focus:bg-amber-500 focus:text-white focus:outline-none  hover:outline-amber-500">{plan.plan}</Tab>
                    ))}
            </TabList>

            <TabPanels className="pt-8">

                {pricing.map((plan, index) => (

                    <TabPanel key={index}>

                         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full pt-5 pb-2">
                            {plan.features.map((feature, i) => (
                                <div key={i} className={`border rounded-2xl  hover:shadow-lg transform hover:border-amber-400 hover:-translate-y-2.5 p-10 flex flex-col gap-2 transition-all duration-400 ${i === 1 ? " border-2 border-amber-400  transform -translate-y-2.5 hover:-translate-y-3.5" : "border-gray-200"}`}>
                                    {i === 1 && <p className="text-sm! bg-amber-400 self-center p-1 text-white! rounded-2xl -mt-13 mb-5 font-medium">Most Popular</p>}
                                    <p className="text-lg! text-gray-500!">{feature.name}</p>
                                    <p className="text-3xl! font-medium">{feature.price}</p>
                                    <p className="text-gray-500! text-sm!">{feature.description}</p>
                                    <div className="mt-6 space-y-3">

                                        {feature.perks.map((perk, j) => (
                                            <div
                                                key={j}
                                                className="border-b text-sm! border-gray-200 pb-2"
                                            >
                                                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                                                {perk}
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </TabPanel>

                ))}

            </TabPanels>
        </TabGroup>

    );
}