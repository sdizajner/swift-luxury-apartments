import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Clock, Send, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  useScrollAnimation();

  return (
    <div className="w-full bg-background min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 text-center max-w-7xl mx-auto px-4 sm:px-6 scroll-fade-up">
        <h1 className="font-serif-display text-3xl sm:text-4xl md:text-6xl font-bold text-gold-gradient mb-4 sm:mb-6">
          Get in Touch
        </h1>
        <p className="font-serif-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We invite you to experience the Swift lifestyle. Contact our dedicated
          team to schedule a private viewing or inquire about our exclusive
          residences.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-8">
          {/* Info Side */}
          <div className="lg:col-span-2 scroll-fade-left">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-gold-gradient mb-6 sm:mb-8">
              Contact Information
            </h2>
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "+1 (800) 123-4567" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "inquiries@swiftluxury.com",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon - Fri, 9:00 AM - 6:00 PM",
                },
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <info.icon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-sans-elegant text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-serif-body text-base text-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-16 h-[2px] bg-primary/30 mt-12" />
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 scroll-fade-right lg:mt-12">
            <div className="bg-gradient-card border border-primary/30 p-6 sm:p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-background/50 border border-primary/30 px-4 py-3 font-serif-body text-base text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full bg-background/50 border border-primary/30 px-4 py-3 font-serif-body text-base text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your Phone"
                      className="w-full bg-background/50 border border-primary/30 px-4 py-3 font-serif-body text-base text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <select
                      id="subject"
                      defaultValue=""
                      className="w-full bg-background/50 border border-primary/30 px-4 py-3 font-serif-body text-base text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      <option value="viewing">Schedule a Viewing</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-background/50 border border-primary/30 px-4 py-3 font-serif-body text-base text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto border border-primary/60 text-primary px-10 py-3 font-sans-elegant text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors duration-300"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" className="bg-secondary/20 border-t border-border py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 scroll-fade-up">
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
              Our Offices
            </h2>
            <p className="font-serif-body text-base sm:text-lg text-muted-foreground">
              Visit us at our global locations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                city: "New York",
                address: "123 Avenue, NY",
                phone: "+1 (111) 123-4567",
              },
              {
                city: "London",
                address: "123 Park Lane",
                phone: "+44 11 1234 5678",
                offset: "md:mt-10",
              },
              {
                city: "Moscow",
                address: "Lenjinova",
                phone: "+987 1 234 5678",
              },
            ].map((office, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-gradient-card border border-primary/30 p-8 text-center hover:shadow-gold transition-all duration-500 scroll-fade-up",
                  office.offset,
                )}
              >
                <div className="w-12 h-12 mx-auto rounded-full border border-primary/60 flex items-center justify-center mb-6 hover:bg-primary/10 transition-colors duration-300 group">
                  <MapPin className="text-primary w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-white mb-2">
                  {office.city}
                </h3>
                <p className="font-serif-body text-base text-muted-foreground mb-1">
                  {office.address}
                </p>
                <p className="font-serif-body text-base text-primary/80">
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
