import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import res1 from '@/assets/images/residence-1.jpg';
import res2 from '@/assets/images/residence-2.jpg';
import res3 from '@/assets/images/residence-3.jpg';
import res4 from '@/assets/images/residence-4.jpg';
import res5 from '@/assets/images/residence-5.jpg';
import res6 from '@/assets/images/residence-6.jpg';
import res7 from '@/assets/images/residence-7.jpg';
import res8 from '@/assets/images/residence-8.jpg';
export default function Residences() {
  useScrollAnimation();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

 const residences = [
  {
    id: 1,
    title: "The Skyline Penthouse",
    img: res1,
    desc: "- City Center -\nExperience urban sophistication with breathtaking city views from this meticulously designed sanctuary.",
  },
  {
    id: 2,
    title: "The Azure Retreat",
    img: res2,
    desc: "- Adriatic Coastline -\nUnwind in ultimate tranquility with panoramic sea views and direct access to pristine beaches.",
  },
  {
    id: 3,
    title: "The Alpine Chalet",
    img: res3,
    desc: "- Mountain Peaks -\nEmbrace mountain majesty with bespoke comforts and breathtaking vistas for an unforgettable escape.",
  },
  {
    id: 4,
    title: "Riverside Grande",
    img: res4,
    desc: "- Riverside -\nA stunning riverside apartment with contemporary design and exclusive amenities.",
  },
  {
    id: 5,
    title: "The Urban Oasis",
    img: res5,
    desc: "- Historic Downtown -\nA tranquil escape amidst the city's pulse, blending historic charm with modern luxury.",
  },
  {
    id: 6,
    title: "The Lakeside Haven",
    img: res6,
    desc: "- Tranquil Lakefront -\nSecluded luxury by the water, offering peaceful views and bespoke amenities.",
  },
  {
    id: 7,
    title: "The Grand Penthouse",
    img: res7,
    desc: "- Financial District -\nPanoramic city vistas and expansive living redefine executive luxury at its peak.",
  },
  {
    id: 8,
    title: "The Secluded Haven",
    img: res8,
    desc: "- Forest Edge -\nAn idyllic escape nested at the forest's edge, offering tranquility and bespoke wilderness experiences.",
  }
];

  return (
    <div className="w-full bg-background min-h-screen pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-28 scroll-fade-up">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent -z-10" />
        <p className="font-sans-elegant text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.4em] text-primary/80 uppercase mb-4 sm:mb-6">
          — Collection —
        </p>
        <h1 className="font-serif-display text-3xl sm:text-5xl md:text-7xl font-bold text-gold-gradient mb-6 sm:mb-8">
          Our Exclusive Residences
        </h1>
        <div className="w-20 h-[2px] bg-primary/40 mx-auto mb-8" />
        <p className="font-serif-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Explore our curated selection of ultra-luxury apartments, each
          designed to offer an unparalleled living experience with bespoke
          finishes and state-of-the-art amenities.
        </p>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-16 sm:mb-20 md:mb-28 px-4 sm:px-6 opacity-60">
        <div className="w-[30%] h-px bg-gradient-to-r from-transparent to-primary/40" />
        <div className="w-2 h-2 border border-primary/30 rotate-45 mx-4" />
        <div className="w-[40%] h-px bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* Grid */}
      <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 space-y-16 sm:space-y-20 md:space-y-0 md:gap-y-16">
{residences.map((res, idx) => {
  const isOddRow = Math.floor(idx / 2) % 2 !== 0;
  const isRightCol = idx % 2 !== 0;
  const shouldOffset = (isOddRow && !isRightCol) || (!isOddRow && isRightCol);

  return (
    <div
      key={res.id}
      className={cn(
        "group scroll-fade-up",
        shouldOffset && "md:mt-20",
      )}
    >
      <div
        className="relative aspect-[16/10] min-h-[220px] overflow-hidden mb-6 sm:mb-8 cursor-pointer touch-manipulation"
        onClick={() => setLightboxImg(res.img)}
      >
        <img
          src={res.img}
          alt={res.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        {/* Overlay koji se pojavljuje na hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-between p-6">
          <span className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-white bg-background/70 backdrop-blur-sm px-3 py-1">
            View ↗
          </span>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/20 group-hover:w-12 group-hover:h-12 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/20 group-hover:w-12 group-hover:h-12 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
      </div>

      <div className="border-l border-primary/15 pl-4 sm:pl-6 group-hover:border-primary/40 transition-colors duration-500">
        <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-gold-gradient mb-3 sm:mb-4">
          {res.title}
        </h3>
        <p className="font-serif-body text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 whitespace-pre-line">
          {res.desc}
        </p>
        <button
          className="flex items-center gap-2 font-sans-elegant text-sm tracking-widest uppercase text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300"
          onClick={() => setLightboxImg(res.img)}
        >
          View Details
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
})}
        </div>
      </section>

      {/* Bottom Decorative Element */}
      <div className="flex flex-col items-center justify-center mt-20 sm:mt-28 md:mt-32 px-4 sm:px-6 opacity-60">
        <div className="relative flex items-center justify-center w-16 h-16 mb-4">
          <div className="absolute w-8 h-8 border border-primary/30 rotate-45" />
          <div className="absolute w-3 h-3 border border-primary/50 rotate-45" />
        </div>
        <div className="flex items-center justify-center w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-4 h-px bg-transparent" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>

   {/* Lightbox */}
{lightboxImg && (
  <div 
    className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 pt-16 sm:pt-12"
    onClick={() => setLightboxImg(null)} // Zatvara klikom bilo gde sa strane
  >
    <button
      className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] text-primary/70 hover:text-primary transition-colors bg-background/50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full touch-manipulation"
      onClick={() => setLightboxImg(null)}
    >
      <X size={32} />
    </button>
    
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onClick={(e) => e.stopPropagation()} // Sprečava zatvaranje klikom na samu sliku
    >
      <img
        src={lightboxImg}
        alt="Enlarged view"
        className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-300"
      />
      
      {/* Dekorativni uglovi koji prate sliku */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 pointer-events-none hidden md:block" />
    </div>
  </div>
)}
    </div>
  );
}
