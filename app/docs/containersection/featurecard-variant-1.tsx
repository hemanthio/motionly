"use client"

import React from "react";

interface Feature {
  id: string;
  image: string;
  imageAlt?: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHref?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
}

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = "" }) => {
  const features: Feature[] = [
    {
      id: "analytics",
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Experience Innovation Like Never Before",
      subheading:
        "Discover how our cutting-edge features empower you to achieve more with seamless performance, intuitive design, and personalized solutions tailored to your needs",
      buttonText: "Learn more",
      buttonHref: "/dashboard",
      showButton: true,
    },
    {
      id: "collaboration",
      image:
        "https://images.unsplash.com/photo-1691480162735-9b91238080f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Designed for Future, Built for You",
      subheading:
        "Work together efficiently with our powerful collaboration tools. Share files, communicate in real-time, and keep everyone on the same page with integrated project management features.",
      buttonText: "Start Collaborating",
      buttonHref: "/collaboration",
      showButton: true,
    },
    {
      id: "security",
      image:
        "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXRlbXxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Unlock Your Productivity Potential",
      subheading:
        "Protect your data with bank-level security measures. Advanced encryption, multi-factor authentication, and compliance with industry standards ensure your information stays safe.",
      buttonText: "Learn More",
      onButtonClick: () => alert("Security info clicked!"),
      showButton: true,
    },
    {
      id: "mobile",
      image:
        "https://images.unsplash.com/photo-1543221423-7c9b7c16778c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0ZW18ZW58MHx8MHx8fDA%3D",
      heading: "Transform Your Ideas Into Reality",
      subheading:
        "Access your work from anywhere with our native mobile apps. Full feature parity across all devices means you never miss a beat, whether you're in the office or on the go.",
      buttonText: "Download App",
      buttonHref: "https://app.example.com/download",
      showButton: true,
    },
  ];

  const renderButton = (feature: Feature) => {
    if (feature.showButton === false) return null;

    const buttonClasses =
      "inline-flex items-center px-6 py-3 bg-gray-200 text-gray-600 tracking-tight font-medium rounded-full hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

    const handleButtonClick = (e?: React.MouseEvent) => {
      if (feature.onButtonClick) {
        e?.preventDefault();
        feature.onButtonClick();
      }
    };

    if (feature.buttonHref) {
      return (
        <a
          href={feature.buttonHref}
          className={buttonClasses}
          onClick={handleButtonClick}
        >
          {feature.buttonText}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      );
    }

    return (
      <button onClick={() => handleButtonClick()} className={buttonClasses}>
        {feature.buttonText}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className={`py-12 px-8 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="lg:grid lg:grid-cols-2 lg:gap-12"
            >
              {/* Image Section - Always on the left */}
              <div className="relative">
                <div className="relative w-full h-full max-w-full">
                  <div className="w-full aspect-square lg:aspect-auto lg:w-full lg:h-[420px]">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt || feature.heading}
                      className="w-full h-full object-cover rounded-2xl "
                    />
                  </div>
                </div>
              </div>

              {/* Content Section - Always on the right */}
              <div className="mt-8 lg:mt-0">
                <div className="flex flex-col py-2 h-full justify-between">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
                      {feature.heading}
                    </h3>
                    <p className="text-base text-gray-600 tracking-tight leading-relaxed">
                      {feature.subheading}
                    </p>
                  </div>
                  <div className="pt-3">{renderButton(feature)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;