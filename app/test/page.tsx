"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
} from "lucide-react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const socialLinks = [
    {
      icon: <Linkedin  />,
      url: "https://linkedin.com/in/johndoe",
      label: "LinkedIn",
    },
    {
      icon: <Twitter  />,
      url: "https://twitter.com/johndoe",
      label: "Twitter",
    },
    {
      icon: <Github />,
      url: "https://github.com/johndoe",
      label: "GitHub",
    },
    {
      icon: <Instagram  />,
      url: "https://instagram.com/johndoe",
      label: "Instagram",
    },
    {
      icon: <Mail  />,
      url: "mailto:john@example.com",
      label: "Email",
    },
    {
      icon: <Globe  />,
      url: "https://johndoe.com",
      label: "Website",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="w-80 h-96 cursor-pointer group"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(-180deg)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-white shadow-2xl border border-gray-200"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 space-y-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="John Doe"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
               
              </div>

              {/* Name and Title */}
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold text-black tracking-tight">
                  John Doe
                </h2>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-800">
                    Senior Frontend Developer
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Tech Solutions Inc.
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
             
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute border border-gray-200 inset-0 w-full h-full rounded-2xl bg-white shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Connect With Me
                </h3>
                <p className="text-gray-600 text-sm">
                  Let's build something amazing together
                </p>
              </div>

              {/* Social Media Grid */}
              <div className="grid grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl border border-gray-200"
                    title={social.label}
                  >
                   <span className=" text-black"> {social.icon} </span>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-xs font-medium">
                  Available for freelance projects
                </p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-600 text-xs">
                    Currently online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
