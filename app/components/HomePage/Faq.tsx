"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ArrowDown, ArrowDown01Icon, ArrowDownCircle, ArrowRightCircle } from "lucide-react";
import { useState } from "react";

export default function Faq() {
    const faqs = [
       {
    question: "How long does a new website take?",
    answer:
      "The timeline depends on the size and complexity of the project. A standard business website typically takes 1–3 weeks, while larger eCommerce or custom websites may take 4–8 weeks. We'll provide a clear project timeline before work begins."
  },
  {
    question: "Do you offer hosting and domain registration?",
    answer:
      "Yes. We can register your domain, set up secure web hosting, configure SSL certificates, and manage renewals. If you already have a domain or hosting provider, we can work with your existing setup as well."
  },
  {
    question: "Can you work with businesses outside Nepal?",
    answer:
      "Absolutely. We work with clients worldwide, including the UK, Australia, the United States, Canada, and other countries. Our entire process—from consultation and design to development and support—can be handled remotely."
  },
  {
    question: "What's included in the monthly SEO report?",
    answer:
      "Our monthly SEO reports include keyword rankings, website traffic, search visibility, technical SEO improvements, backlink updates, page performance, and recommendations for the next month's optimization strategy."
  },
  {
    question: "Do I own my website after it's built?",
    answer:
      "Yes. Once the project is completed and the final payment has been made, you have full ownership of your website, including its files, content, and database. You'll also receive administrator access so you have complete control over your site."
  }
    ];
    return (
        <main className="flex items center pt-20! pb-20! justify-between gap-5 flex-wrap ">
            <div className="md:w-[30%] flex flex-col items-start gap-2">
                <p className="small_heading"> Faqs</p>
                <h2>Frequently Asked Questions</h2>
                <p className="text-sm!">Know more about what the clients are asked us frequently. </p>

            </div>
            <div className="space-y-4 md:w-[60%]">
                {faqs.map((faq, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <>
                                <DisclosureButton className="w-full flex justify-between items-center p-4 bg-[#f59f0b17] rounded-xl">
                                    <span className="text-start">{faq.question}</span>
                                    {open ? <ArrowDownCircle /> : <ArrowRightCircle />}
                                </DisclosureButton>
                                <DisclosurePanel className="p-4">
                                     {faq.answer}
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </main>
    );
}