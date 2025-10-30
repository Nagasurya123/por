'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, X } from 'lucide-react';

const certifications = () => {
  const scrollContainerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const certs = [
    {
      id: 1,
      title: ' Zscaler Zero Trust Associate (ZTCA) Certification',
      issuer: 'Zscaler',
      date: '2025',
      icon: '📜',
      verificationCode: 'ZTCA',
      description: 'Successfully completed certification requirements for Zscaler Zero Trust Associate (ZTCA)',
      issued: '22 May 2025',
      // Public image placeholder - place the actual certificate image at public/certifications/zscaler.png
      // Use a web-root path so links open correctly
      // Optional JSON verification URL (place at public/certifications/zscaler.json)
      json: 'https://drive.google.com/file/d/1U0e66fZGAZzZp4WYC3Sev9SERtXeo1vA/view?usp=sharing'
    },
    {
      id: 2,
      title: ' Salesforce Developer Virtual Internship',
      issuer: 'Salesforce',
      date: '2023',
      icon: '📜',
      verificationCode: 'SISFVIPAD2023',
      description: 'Salesforce Developer Virtual Internship with expertise in Salesforce platform',
      issued: 'December 12, 2023',
      json:'https://drive.google.com/file/d/16PCZuyxbfLsMyPfFrS9MraabdeJLQDfq/view?usp=sharing'
    },
    {
      id: 3,
      title: 'AWS Certified AI Practitioner',
      issuer: 'AWS',
      date: '2025',
      icon: '📜',
      verificationCode: 'b644f1bdbec34f10b671fc13403cefa8',
      description: 'Successfully completed AWS Certified AI Practitioner exam',
      issued: 'July 15, 2025',
      json: 'https://drive.google.com/file/d/1ufptIa9Cgjg3CrIsrl5zOfv0QQU76-NA/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Servicenow virtual internship',
      issuer: 'Smartbridge',
      date: '2025',
      icon: '📜',
      verificationCode: 'csds-1',
      description: 'Successfully completed ServiceNow virtual internship program with Smartbridge, gaining hands-on experience in ServiceNow development',
      issued: 'September 1, 2025',
      json:'https://drive.google.com/file/d/1KrXMxOniDrNunbOxc0JgBUaTyoHMbuOl/view?usp=sharing'
    },
     {
      id: 5,
      title: 'Web Development Basics',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      icon: '📜',
      verificationCode: 'MDL-261',
      description: 'Successfully completed Web Development Basics course with IBM SkillsBuild, gaining foundational knowledge in web development',
      issued: 'September 1, 2025',
      json:'https://drive.google.com/file/d/1JpMZYF7ruLVvbE2kF8LvgVx-KeeAdrN7/view?usp=sharing'
    },
    {
      id: 6,
      title: 'Java Programming Fundamentals',
      issuer: 'Edx',
      date:'2024',
      icon: '📜',
      verificationCode: 'Progra001',
      description: 'Successfully completed Java Programming Fundamentals course with Edx, gaining foundational knowledge in Java programming',
      issued: 'June 1, 2024',
      json:'https://drive.google.com/file/d/1h2GsGR_Ja-SZb_f7v8HNeGktoMnLAVtd/view?usp=sharing'
    },
    {
      id: 7,
      title:'Data Analytics Job Simulation',
      issuer:'deloitte',
      date:'2025',
      icon:'📜',
      verificationCode: 'DataAna001',
      description: 'Successfully completed Data Analytics Job Simulation with Deloitte, gaining practical experience in data analytics tools and methodologies',
      issued: 'July 1, 2025',
 json:'https://drive.google.com/file/d/1OwjCboOzMsNZWelBcAhQU3q-gfRn9X2i/view?usp=sharing' 
          }
    
  ];

  // Removed auto-scrolling to prevent shaking/jitter on certificates
  // If needed later, implement a user-controlled scroll instead of interval-based auto-scroll.

  // Smooth hover handlers to prevent flickering
  const handleCardHover = (cert) => {
    clearTimeout(leaveTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setSelectedCert(cert);
    }, 200); // Small delay before opening
  };

  const handleCardLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setSelectedCert(null);
    }, 100); // Small delay before closing
  };

  const handleModalHover = () => {
    clearTimeout(leaveTimeoutRef.current);
  };

  const handleModalLeave = () => {
    handleCardLeave();
  };

  return (
    <section id="certifications" className="px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 md:mb-4">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Certifications
            </h2>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Professional certifications and credentials demonstrating expertise
          </p>
        </div>

        {/* Certifications Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-2 sm:pb-3 md:pb-4 lg:pb-6 -mx-3 sm:-mx-4 md:-mx-6 lg:mx-0 px-3 sm:px-4 md:px-6 lg:px-0 scroll-smooth snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 min-w-min">
            {/* Display certifications twice for infinite scroll effect */}
            {[...certs, ...certs].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                onMouseEnter={() => handleCardHover(cert)}
                onMouseLeave={handleCardLeave}
                onClick={() => setSelectedCert(cert)}
                className="group relative p-2.5 sm:p-3 md:p-4 lg:p-5 bg-white border border-gray-200 rounded-lg sm:rounded-lg md:rounded-xl hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 cursor-pointer snap-start hover:scale-105 touch-manipulation min-h-[280px] sm:min-h-[300px]"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="flex gap-2 sm:gap-3 h-full flex-col">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-md sm:rounded-lg bg-purple-100 flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl group-hover:bg-purple-200 transition">
                      {cert.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition leading-tight line-clamp-2 sm:line-clamp-3">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5 sm:mt-1 line-clamp-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block text-[10px] sm:text-xs md:text-sm lg:text-base text-purple-600 font-medium mt-1 sm:mt-1.5 md:mt-2 px-2 py-0.5 sm:py-1 bg-purple-50 rounded group-hover:bg-purple-100 transition whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>

                  {/* Card-level View button */}
                  <div className="mt-auto pt-2 sm:pt-3">
                    <a
                      href={cert.json}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-purple-600 text-white rounded text-xs sm:text-sm md:text-base hover:bg-purple-700 active:bg-purple-800 transition min-h-[44px]"
                      aria-label={`View certificate ${cert.title}`}
                    >
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">
            Want to see more? Check out my <a href="#" className="text-purple-600 font-semibold hover:underline active:text-purple-700 transition">full profile</a>
          </p>
        </div>

        {/* Modal Popup */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/50 backdrop-blur-sm touch-none"
            onMouseEnter={handleModalHover}
            onMouseLeave={handleModalLeave}
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl max-w-2xl w-full animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="sticky top-0 flex items-start justify-between p-3 sm:p-4 md:p-6 border-b border-gray-200 bg-white rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="ml-2 sm:ml-4 p-1 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {/* View Certificate action */}
                <div className="w-full bg-gray-100 rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center p-4 sm:p-6">
                  <a
                    href={selectedCert.json}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white rounded-lg md:rounded-xl shadow hover:bg-purple-700 active:bg-purple-800 transition text-sm sm:text-base font-medium min-h-[44px]"
                  >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>View Certificate</span>
                  </a>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* Issuer */}
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Issuer</p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-1">{selectedCert.issuer}</p>
                  </div>

                  {/* Issued Date */}
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Issued</p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-1">{selectedCert.issued}</p>
                  </div>

                  {/* Verification Code */}
                  <div className="sm:col-span-2">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Verification Code</p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-900 font-mono bg-gray-50 p-2 sm:p-3 rounded mt-1 break-all">{selectedCert.verificationCode}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mb-2">Description</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gray-50 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl border-t border-gray-200 flex gap-2 sm:gap-3 sticky bottom-0">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white font-medium rounded-lg md:rounded-xl hover:bg-purple-700 active:bg-purple-800 transition text-sm sm:text-base min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default certifications;