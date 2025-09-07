"use client"

import React from "react";
import { Home, Hammer, Layout, ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
}

interface ServiceCardsProps {
  cards?: ServiceCard[];
  className?: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
  cards = [],
  className = "",
}) => {
  const defaultCards: ServiceCard[] = [
    {
      id: "functional",
      icon: <Home className="w-8 h-8" strokeWidth={1.4} />,
      title: "Functional designed",
      description:
        "Functional design organizes the project to meet its use objectives.",
      buttonText: "Learn more",
      href: "/services/functional-design",
      showButton: true,
    },
    {
      id: "renovation",
      icon: <Hammer className="w-8 h-8" strokeWidth={1.4} />,
      title: "Renovation of spaces",
      description:
        "Updating existing areas to improve their functionality, aesthetics and comfort.",
      buttonText: "Learn more",
      href: "/services/renovation",
      showButton: true,
    },
    {
      id: "interior",
      icon: <Layout className="w-8 h-8" strokeWidth={1.4} />,
      title: "Interior design",
      description:
        "The interior design combines aesthetics and functionality to improve user comfort.",
      buttonText: "Get started",
      href: "/services/interior-design",
      showButton: true,
    },
  ];

  const cardsToRender = cards.length > 0 ? cards : defaultCards;

  const renderButton = (card: ServiceCard) => {
    const baseClasses =
      "inline-flex items-center text-sm font-medium text-gray-700 group-hover:text-white transition-all duration-300 underline decoration-0 underline-offset-4";
  
    if (card.href) {
      return (
        <a href={card.href} className={baseClasses}>
          {card.buttonText}
          <ArrowRight className="ml-1 w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </a>
      );
    }
  
    return (
      <button onClick={card.onButtonClick} className={baseClasses}>
        {card.buttonText}
        <ArrowRight className="ml-1 w-4 h-4 -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 transition-transform duration-300" />

      </button>
    );
  };
  
  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsToRender.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[350px]"
            >
              {/* Icon + Heading */}
              <div className="flex flex-col gap-3 text-gray-700 group-hover:text-white transition-colors duration-300">
                {card.icon}
                <h3 className="text-lg font-base tracking-tight">{card.title}</h3>
              </div>

              {/* Description + Link */}
              <div className="space-y-4 mt-6">
                <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                  {card.description}
                </p>
                {card.showButton && renderButton(card)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
