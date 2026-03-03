import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Diamond, Globe, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import aboutHero from '@/assets/images/about-hero.jpg';
import aboutStory from '@/assets/images/about-story.jpg';
import aboutPhilosophy from '@/assets/images/about-philosophy.jpg';

export default function AboutUs() {
  useScrollAnimation();

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
         <img
  src={aboutHero} // Promenjeno sa picsum linka
  alt="About Us Hero"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl scroll-fade-left">
            <h1 className="font-serif-display text-4xl md:text-6xl font-bold text-gold-gradient mb-6">
              A Legacy of Excellence
            </h1>
            <p className="font-serif-body text-lg text-muted-foreground leading-relaxed">
              For over a decade, Swift Luxury Apartments has redefined urban
              living, creating spaces that inspire and elevate the human
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary/30 border-y border-border py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center scroll-fade-up">
          {[
            { num: "150+", label: "Exclusive Residences" },
            { num: "12", label: "Awards Won" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "2014", label: "Year Established" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="font-serif-display text-3xl md:text-4xl font-bold text-gold-gradient mb-2">
                {stat.num}
              </div>
              <div className="font-sans-elegant text-xs tracking-widest uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade-left">
            <h2 className="font-serif-display text-4xl font-bold text-gold-gradient mb-8">
              Our Story
            </h2>
            <div className="font-serif-body text-base md:text-lg text-muted-foreground space-y-5 leading-relaxed">
              <p>
                Founded on the principle that true luxury is found in the
                details, Swift began as a boutique firm dedicated to crafting
                exceptional living spaces for the world's most discerning
                individuals.
              </p>
              <p>
                Our approach combines timeless architectural elegance with
                cutting-edge technology, ensuring that every residence is not
                just a home, but a sanctuary of comfort and sophistication.
              </p>
              <p>
                Today, we continue to push the boundaries of design and service,
                setting new standards for luxury real estate and creating
                communities that thrive.
              </p>
            </div>
          </div>
          <div className="relative scroll-fade-right md:mt-16">
            <div className="aspect-[4/5] overflow-hidden">
             <img
  src={aboutStory} // Promenjeno sa picsum linka
  alt="Our Story"
  className="w-full h-full object-cover"
/>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-primary/30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary/20 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-fade-up">
            <h2 className="font-serif-display text-4xl font-bold text-gold-gradient mb-6">
              Core Values
            </h2>
            <p className="font-serif-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our every decision and shape the
              experiences we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Diamond,
                title: "Excellence",
                desc: "Uncompromising quality in every detail.",
              },
              {
                icon: Globe,
                title: "Sustainability",
                desc: "Building for a better, greener future.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Fostering connections that enrich lives.",
              },
              {
                icon: Award,
                title: "Integrity",
                desc: "Honesty and transparency in all we do.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-gradient-card border border-primary/30 p-8 text-center hover:shadow-gold transition-all duration-500 scroll-fade-up",
                  idx % 2 !== 0 && "md:mt-12",
                )}
              >
                <div className="w-16 h-16 mx-auto rounded-full border border-primary/60 flex items-center justify-center mb-6 hover:bg-primary/10 transition-colors duration-300 group">
                  <val.icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-white mb-4">
                  {val.title}
                </h3>
                <p className="font-serif-body text-base text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative scroll-fade-left order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden">
             <img
  src={aboutPhilosophy} // Promenjeno sa picsum linka
  alt="Our Philosophy"
  className="w-full h-full object-cover"
/>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-primary/30 pointer-events-none" />
          </div>
          <div className="scroll-fade-right order-1 md:order-2">
            <h2 className="font-serif-display text-4xl font-bold text-gold-gradient mb-8">
              Our Philosophy
            </h2>
            <div className="font-serif-body text-base md:text-lg text-muted-foreground space-y-5 leading-relaxed">
              <p>
                We believe that a home should be a reflection of its
                inhabitants—a space that nurtures the soul and inspires the
                mind.
              </p>
              <p>
                Our design philosophy centers on harmony, balance, and the
                seamless integration of natural elements with modern
                conveniences. We source only the finest materials and
                collaborate with visionary architects to bring our concepts to
                life.
              </p>
              <p>
                Every Swift residence is a testament to our unwavering
                commitment to creating environments where luxury and serenity
                coexist in perfect equilibrium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/20 border-t border-border py-28">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-scale">
          <h2 className="font-serif-display text-4xl font-bold text-gold-gradient mb-8">
            Experience the Extraordinary
          </h2>
          <p className="font-serif-body text-lg text-muted-foreground mb-10">
            Discover a new standard of luxury living. Your sanctuary awaits.
          </p>
          <Link
            to="/residences"
            className="inline-block border border-primary/60 text-primary px-10 py-3 font-sans-elegant text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors duration-300"
          >
            Explore Residences
          </Link>
        </div>
      </section>
    </div>
  );
}
