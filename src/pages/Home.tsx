import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Gem, Heart, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import slikaHero from '@/assets/images/moja-hero-slika.jpg';
import slikaApt1 from '@/assets/images/apartman-1.jpg';
import slikaApt2 from '@/assets/images/apartman-2.jpg';
import slikaApt3 from '@/assets/images/apartman-3.jpg';
import slikaAmenities from '@/assets/images/amenities.jpg';
import luxuryVideo from '@/assets/videos/luxury-video.mp4';

export default function Home() {
  useScrollAnimation();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-background">
        <div className="absolute inset-0 z-0">
          <img
  src={slikaHero} // <--- Koristi uvezenu varijablu
  alt="Luxury interior"
  className="w-full h-full object-cover"
        />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl border-l-2 border-primary/30 pl-8 py-4 scroll-fade-left">
            <p className="font-sans-elegant text-sm tracking-[0.4em] text-primary/80 uppercase mb-6">
              Exclusive Collection
            </p>
            <h1 className="font-serif-display text-5xl md:text-7xl font-bold leading-[1.1] text-foreground mb-8">
              Where Luxury Meets{" "}
              <span className="italic text-gold-gradient">Serenity</span>
            </h1>
            <p className="font-serif-body text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-10">
              Discover an unparalleled living experience. Our exclusive
              residences offer the perfect blend of modern elegance and timeless
              comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/residences"
                className="bg-primary text-primary-foreground px-8 py-3 font-sans-elegant text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Explore
              </Link>
              <Link
                to="/about"
                className="bg-transparent border border-primary/60 text-primary px-8 py-3 font-sans-elegant text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-luxury py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-fade-up">
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-gold-gradient mb-6">
              The Art of Living
            </h2>
            <p className="font-serif-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail is meticulously crafted to provide an environment of
              absolute comfort and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "Situated in the heart of the city, offering breathtaking views and unparalleled access.",
                delay: "delay-100",
                link: "/contact#offices"
              },
              {
                icon: Gem,
                title: "Exquisite Design",
                desc: "Award-winning architecture and interior design that redefines modern luxury living.",
                delay: "delay-200",
                offset: "md:-translate-y-6",
                link: "/residences#collection"
              },
              {
                icon: Heart,
                title: "Unmatched Comfort",
                desc: "State-of-the-art amenities designed to cater to your every need and desire.",
                delay: "delay-300",
                link: "/residences#collection"
              },
            ].map((feature, idx) => (
              <Link
                to={feature.link}
                key={idx}
                className={cn(
                  "block bg-gradient-card border border-primary/30 p-8 md:p-10 text-center hover:shadow-gold-lg transition-all duration-500 scroll-fade-up",
                  feature.delay,
                  feature.offset,
                )}
              >
                <div className="w-16 h-16 mx-auto rounded-full border border-primary/60 flex items-center justify-center mb-8 hover:bg-primary/10 transition-colors duration-300 group">
                  <feature.icon className="text-primary w-7 h-7 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-serif-body text-base text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="bg-background py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "apartment-1",
                title: "The Penthouse",
                loc: "Downtown",
                delay: "delay-100",
              },
              {
                img: "apartment-2",
                title: "Skyline Suite",
                loc: "West End",
                delay: "delay-200",
                offset: "md:mt-12",
              },
              {
                img: "apartment-3",
                title: "Garden Villa",
                loc: "North Hills",
                delay: "delay-300",
                offset: "md:mt-6",
              },
            ].map((apt, idx) => (
              <div
                key={idx}
                className={cn("scroll-fade-up", apt.delay, apt.offset)}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 group">
                 <img
  // Postavi odgovarajuću sliku za svaki apartman
  src={idx === 0 ? slikaApt1 : idx === 1 ? slikaApt2 : slikaApt3}
  alt={apt.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                  <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none" />
                </div>
                <div className="text-center">
                  <p className="font-sans-elegant text-xs tracking-widest uppercase text-primary/70 mb-3">
                    — {apt.loc} —
                  </p>
                  <h3 className="font-serif-display text-xl font-semibold text-gold-gradient mb-4">
                    {apt.title}
                  </h3>
                  <p className="font-serif-body text-base text-muted-foreground mb-6">
                    A sanctuary of peace featuring bespoke finishes and
                    panoramic views.
                  </p>
                  <Link
                    to="/residences"
                    className="inline-block border border-primary/60 px-6 py-2 text-primary font-sans-elegant text-sm hover:bg-primary/10 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative scroll-fade-left">
            <div className="aspect-[4/5] overflow-hidden group">
             <img
  src={slikaAmenities} // <--- Koristiš uvezenu varijablu umesto eksternog linka
  alt="Luxury Amenities"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
/>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 pointer-events-none" />
          </div>
          <div className="scroll-fade-right lg:pl-12">
            <p className="font-sans-elegant text-sm tracking-[0.4em] text-primary/80 uppercase mb-6">
              — Five-Star Services
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-gold-gradient mb-8">
              Curated For Your Absolute Comfort
            </h2>
            <p className="font-serif-body text-lg text-muted-foreground mb-10 leading-relaxed">
              Life at Swift extends far beyond your private residence. Enjoy exclusive access to world-class amenities and personalized services designed to anticipate your every need.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "24/7 Dedicated Concierge & Valet",
                "Private Wellness & Spa Sanctuary",
                "Michelin-Star In-Residence Dining",
                "Chauffeur-Driven House Car"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45" />
                  <span className="font-serif-body text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans-elegant text-sm tracking-widest uppercase text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 group"
            >
              Discover Our Philosophy
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="bg-secondary/20 border-y border-border py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center scroll-fade-up">
          <div className="w-8 h-8 mx-auto border border-primary/30 rotate-45 mb-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary/50" />
          </div>
          <h2 className="font-serif-display text-3xl md:text-5xl leading-tight text-foreground italic mb-10">
            "True luxury is not just about what you see, but the profound sense of peace you feel the moment you step inside."
          </h2>
          <p className="font-sans-elegant text-sm tracking-[0.3em] uppercase text-primary/80">
            — The Swift Vision
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-primary/30 to-transparent" />
      </section>

      {/* Cinematic Teaser */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="relative aspect-[16/9] min-h-[400px] overflow-hidden group scroll-scale">
         <video
  src={luxuryVideo}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
/>
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-700" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/5 mb-6 group-hover:border-primary/60 group-hover:bg-primary/20 transition-all duration-500 cursor-pointer">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1 group-hover:border-l-primary transition-colors duration-500" />
            </div>
            <h3 className="font-serif-display text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Extraordinary
            </h3>
            <p className="font-sans-elegant text-sm tracking-widest uppercase text-white/80">
              Watch the Film
            </p>
          </div>
          <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-white/20 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-white/20 pointer-events-none" />
        </div>
        <p className="font-sans-elegant text-xs text-muted-foreground text-center mt-6 tracking-wide scroll-fade-up">
          AI-generated web design video created with Grok.com – showcasing responsive UI/UX concepts and digital design expertise.
        </p>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-luxury py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 scroll-scale">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-gold-gradient mb-8">
            Join Our Private List
          </h2>
          <p className="font-serif-body text-lg text-muted-foreground mb-10">
            Be the first to know about new exclusive listings and private
            events.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-secondary border border-primary/30 px-6 py-3 font-sans-elegant text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 font-sans-elegant text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
