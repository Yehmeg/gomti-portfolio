"use client";

import { useState, useCallback } from "react";
import { hackathons, type Hackathon } from "@/data/hackathons";

export default function Hackathons() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cardsToShow = 4;
  const showNavigation = hackathons.length > cardsToShow;

  const scrollLeft = useCallback(() => {
    const container = document.querySelector(".hackathon-carousel");
    if (container) {
      const cardWidth = container.querySelector(".hackathon-card")?.clientWidth || 0;
      const gap = 32;
      container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    const container = document.querySelector(".hackathon-carousel");
    if (container) {
      const cardWidth = container.querySelector(".hackathon-card")?.clientWidth || 0;
      const gap = 32;
      container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = showNavigation && scrollPosition < (hackathons.length - cardsToShow) * 300;

  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Hackathons
        </h2>

        <div
          className="hackathon-carousel flex gap-8 overflow-x-auto scroll-snap-x snap-mandatory pb-4 scrollbar-hide relative"
          onScroll={handleScroll}
        >
          {hackathons.map((item: Hackathon, index: number) => (
            <div
              key={index}
              className="hackathon-card flex-shrink-0 snap-start p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 w-[calc((100%-96px)/4)] min-w-[280px] md:min-w-[calc((100%-32px)/2)] lg:min-w-[calc((100%-96px)/4)]"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {item.project}
              </p>

              <p className="mt-4 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {showNavigation && (
          <>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}