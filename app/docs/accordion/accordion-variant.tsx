"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is Postel and how can it help me grow my brand?",
      answer:
        "Postel is a comprehensive social media management tool designed to help creators, entrepreneurs, and marketers grow their brand on X (Twitter). It provides advanced analytics, content scheduling, audience insights, and engagement optimization features to maximize your social media presence and drive meaningful business results.",
    },
    {
      question: "How is Postel better than ChatGPT or other tools for this?",
      answer:
        "Unlike general AI tools like ChatGPT, Postel is specifically built for X (Twitter) success. It combines AI-powered content creation with platform-specific insights, real-time trending analysis, optimal posting schedules, and detailed performance metrics. Our tool understands Twitter's algorithm and user behavior patterns to help you create content that actually performs well on the platform.",
    },
    {
      question: "What can I try during Postel's free trial?",
      answer:
        "During your free trial, you'll have access to our core features including content generation, basic analytics, scheduling up to 50 posts, audience analysis, and trending topic suggestions. You can test our AI content assistant, explore template libraries, and see how our optimization suggestions can improve your engagement rates before committing to a paid plan.",
    },
    {
      question: "Can I use Postel on my phone?",
      answer:
        "Yes! Postel is fully responsive and works seamlessly on mobile devices through your web browser. We also offer dedicated mobile apps for iOS and Android, allowing you to create, schedule, and manage your content on the go. The mobile experience includes all core features with an optimized interface for smaller screens.",
    },
    {
      question: "Who is this for?",
      answer:
        "Postel is designed for creators, entrepreneurs, and marketers who want to create high-performing value content for X to grow their audience and business. Whether you're building an audience, promoting a product, or driving engagement for a business, Postel provides the tools to make value content creation simple, effective, and scalable on X (Twitter).",
    },
    {
      question: "I have another question",
      answer:
        "We're here to help! Feel free to reach out to our support team through the contact form on our website, send us an email at support@postel.app, or join our community Discord where you can get help from both our team and other Postel users. We typically respond within 24 hours and are always happy to assist with any questions about features, billing, or getting the most out of Postel.",
    },
  ];

  return (
    <div className="max-w-4xl p-6">
      <div className="space-y-3">
        {faqItems.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200"
          >
            {/* Button */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-150"
            >
              <span className="text-gray-800 font-medium  pr-8">
                {item.question}
              </span>
              <span
                className={`transform transition-transform duration-300 ease-in-out ${
                  openItems.has(index) ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </span>
            </button>

            {/* Smooth Transition for Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 border-t border-gray-200 pt-3">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
