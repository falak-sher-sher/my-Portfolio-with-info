import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "fa03014521927@nu.edu.pk",
      link: "mailto:fa03014521927@nu.edu.pk"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+92 301 4521927",
      link: "tel:+923014521927"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      link: "https://github.com/falak-sher-sher",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/falak-sher",
      color: "hover:text-accent"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      title: "Twitter",
      link: "https://twitter.com/falak",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="bg-gradient-card border-white/10 hover:border-primary/30 transition-smooth">
                    <CardContent className="p-4">
                      <a
                        href={info.link}
                        className="flex items-center gap-3 hover:text-primary transition-smooth"
                      >
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-card border border-white/10 rounded-lg flex items-center justify-center transition-smooth hover:scale-110 hover:border-primary/30 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Let's Build Something Amazing</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-primary font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Start</span>
                    <span className="text-accent font-medium">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Communication</span>
                    <span className="text-secondary font-medium">Regular updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="bg-background/50 border-white/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="bg-background/50 border-white/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 border-white/20 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a mobile app, web application, or full-stack solution, 
                I'm here to help bring your vision to life with modern technologies and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Project
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;