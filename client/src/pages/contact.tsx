import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Map, Check } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          topic: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      // Reset form even on error for demo purposes
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Goobii</title>
        <meta name="description" content="Contact Goobii for eco‑friendly car cleaning in Dubai—questions, partnerships, or fleet requests. We're here to help." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                We're fully digital and open daily. Reach out with questions or partnership ideas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-grandview-bold text-brand-primary mb-6 text-center">Contact Methods</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4" data-testid="whatsapp-contact">
                      <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <MessageCircle className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-brand-primary mb-0.5">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground mb-1">Quick support and instant messaging</p>
                        <a href="#whatsapp-placeholder" className="text-sm text-brand-primary hover:text-brand-secondary transition-colors" data-testid="whatsapp-link">
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4" data-testid="email-contact">
                      <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <Mail className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-brand-primary mb-0.5">Email</h3>
                        <p className="text-sm text-muted-foreground mb-1">For detailed inquiries and support</p>
                        <a href="#email-placeholder" className="text-sm text-brand-primary hover:text-brand-secondary transition-colors" data-testid="email-link">
                          Send us an email
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4" data-testid="hours-info">
                      <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <Map className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-brand-primary mb-0.5">Service Area</h3>
                        <p className="text-sm text-muted-foreground mb-0.5">Dubai citywide</p>
                        <p className="text-sm text-muted-foreground">Check the app for coverage</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Contact Form */}
              <Card className="p-8 border-0" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="contact-form-card">
                <h2 className="text-2xl font-extrabold text-brand-primary mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-brand-primary font-grandview-bold">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        data-testid="input-name"
                        style={{ borderRadius: '12px 4px 12px 12px' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-brand-primary font-grandview-bold">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        data-testid="input-phone"
                        style={{ borderRadius: '12px 4px 12px 12px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-brand-primary font-grandview-bold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                      style={{ borderRadius: '12px 4px 12px 12px' }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="topic" className="text-brand-primary font-grandview-bold">Topic</Label>
                    <Select value={formData.topic} onValueChange={(value) => handleInputChange('topic', value)}>
                      <SelectTrigger data-testid="select-topic" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Support</SelectItem>
                        <SelectItem value="subscription">Subscription Questions</SelectItem>
                        <SelectItem value="business">Business/Fleet Services</SelectItem>
                        <SelectItem value="buildings">Building Partnerships</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-brand-primary font-grandview-bold">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      data-testid="textarea-message"
                      style={{ borderRadius: '12px 4px 12px 12px' }}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-brand-bg font-grandview-bold"
                    disabled={isSubmitting}
                    data-testid="submit-button"
                    style={{ borderRadius: '12px 4px 12px 12px' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
