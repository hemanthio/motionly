'use client';

import React from 'react';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials = [],
  className = '',
}) => {
  const Testimonials: Testimonial[] = [
    {
      id: '1',
      content:
        "One of the best web design inspiration tools out there. It's called Landbook. Thousands of website designs available. The best part is that they add the website link too, so you can see the fully functional website.",
      author: 'Alvis Oh',
      role: 'Founder',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '2',
      content:
        'The platform has completely transformed how we approach design projects. The curated collection saves us hours of research time and the quality of examples is consistently high.',
      author: 'Sarah Chen',
      role: 'Design Director',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '3',
      content:
        "I've been using this tool for over a year now and it never fails to inspire. The variety of designs and the ability to see them in action makes it invaluable for our team.",
      author: 'Michael Rodriguez',
      role: 'Creative Lead',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '4',
      content:
        "What sets this apart from other inspiration galleries is the attention to detail and the fact that every example is a real, working website. It's like having a curated library of excellence.",
      author: 'Emma Thompson',
      role: 'UX Designer',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: '5',
      content:
        "The search and filtering capabilities make it easy to find exactly what you're looking for. Whether it's a specific industry or design style, everything is well organized.",
      author: 'David Kim',
      role: 'Product Manager',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    },
    
  ];

  const testimonialsToRender =
    testimonials.length > 0 ? testimonials : Testimonials;

  return (
    <div className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className='mx-auto max-w-7xl'>
        {/* Testimonials Scroll Container */}
        <div className='relative'>
          {/* Scrollable container */}
          <div className='custom-scrollbar overflow-x-auto'>
            <div className='flex gap-4 pb-4' style={{ width: 'max-content' }}>
              {testimonialsToRender.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className='w-full max-w-[92vw]  md:w-[380px] lg:w-[400px] flex-shrink-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow sm:p-7'
                >
                  <div className='flex h-full min-h-[400px] sm:min-h-[340px] md:min-h-[400px]  flex-col'>
                    {/* Testimonial Content */}
                    <p className='text-base leading-tight tracking-tight text-gray-900 sm:text-lg lg:text-xl'>
                      “{testimonial.content}”
                    </p>

                    <div className='mt-auto' />

                    {/* Divider */}
                    <div className='my-4 border-t border-dashed border-gray-300' />

                    {/* Author Info */}
                    <div className='flex items-center gap-3'>
                      <img
                        className='h-11 w-11 rounded-full bg-gray-200 object-cover'
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width=\"44\" height=\"44\" xmlns=\"http://www.w3.org/2000/svg\">\n                              <rect width=\"100%\" height=\"100%\" fill=\"#e5e7eb\"/>\n                              <text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"16\" fill=\"#9ca3af\" text-anchor=\"middle\" dy=\".3em\">\n                                ${testimonial.author.charAt(0)}\n                              </text>\n                            </svg>
                          `)}`;
                        }}
                      />
                      <div>
                        <h4 className='text-base font-semibold text-gray-900'>
                          {testimonial.author}
                        </h4>
                        <p className='text-gray-500 text-sm'>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
