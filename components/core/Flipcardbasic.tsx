"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  Plus,
} from "lucide-react";

export default function FlipProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const socialLinks = [
    { icon: <Linkedin />, url: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: <Twitter />, url: "https://twitter.com/johndoe", label: "Twitter" },
    { icon: <Github />, url: "https://github.com/johndoe", label: "GitHub" },
    { icon: <Instagram />, url: "https://instagram.com/johndoe", label: "Instagram" },
    { icon: <Mail />, url: "mailto:john@example.com", label: "Email" },
    { icon: <Globe />, url: "https://johndoe.com", label: "Website" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="w-96 h-[500px] cursor-pointer group"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ${
            isFlipped ? "[transform:rotateY(-180deg)]" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side (Profile Card) */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Header */}
            <div className="h-40 bg-gradient-to-b from-blue-400 to-white relative"></div>

            {/* Profile Content */}
            <div className="px-6 pb-6 -mt-16 relative">
              {/* Profile Image & Buttons */}
              <div className="flex items-start justify-between mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="David Bowie"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="flex items-center gap-2 mt-8">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Name & Availability */}
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold text-gray-900">Aryawebly</h1>
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Available
                  </span>
                </div>
                <p className="text-gray-500 text-sm">@aryawebly</p>
              </div>

              {/* Job Title */}
              <div className="mb-4">
                <p className="text-gray-900 font-medium">
                 Design Engineer - Framer Developer
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Digital Designer for Startup Founders at{" "}
                  <span className="text-blue-600">leveldesign.co</span> | More
                  than 5 years of experience | 
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-gray-900 font-medium mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Design Engineer", "Notion", "Motion Design", "Framer", "Content Writing"].map(
                    (skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Back Side (Social Links) */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl bg-white shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-8"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Connect With Me</h3>
              <p className="text-gray-600 text-sm">
                Let's build something amazing together
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200 transition-colors"
                  title={social.label}
                >
                  <span className="text-black text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-xs font-medium">
                Available for freelance projects
              </p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-600 text-xs">Currently online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
