import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </h4>
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">
              Start Your Project
            </h2>
            <p className="text-gray-600 mb-10">
              Ready to transform your space? Fill out the form below for a quote or consultation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="John Doe" required />
                <Input label="Email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Phone" type="tel" placeholder="+91 90540 07762" />
                <Input label="Subject" placeholder="Project Inquiry" />
              </div>

              <Textarea
                label="Message"
                placeholder="Tell us about your project..."
                required
              />

              <Button type="submit" size="lg" fullWidth isLoading={isSubmitting}>
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">
                Visit Our Showroom
              </h3>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#C9A961] shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2C2C]">Address</h5>
                    <p className="text-gray-600">
                      123 Design District Blvd,
                      <br />
                      Metropolis, NY 10012
                    </p>
                  </div>
                </div>

                {/* Phone (CLICK TO CALL) */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#C9A961] shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2C2C]">Phone</h5>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-[#C9A961]"
                    >
                      +91 9054007762
                    </a>
                  </div>
                </div>

                {/* Email (CLICK TO MAIL) */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#C9A961] shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2C2C]">Email</h5>
                    <a
                      href=""
                      className="text-gray-600 hover:text-[#C9A961]"
                    >
                      23031701035@darshan.ac.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp (CLICK TO CHAT) */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#C9A961] shadow-sm">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2C2C]">WhatsApp</h5>
                    <a
                      href="https://wa.me/+919913770853"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#25D366]"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#C9A961] shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#2C2C2C]">Hours</h5>
                    <p className="text-gray-600">
                      Mon–Fri: 9am – 6pm
                      <br />
                      Sat: 10am – 4pm
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map */}
            <div className="flex-grow min-h-[300px] relative bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932847"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
