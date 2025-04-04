
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries and admissions"
        backgroundImage="/lovable-uploads/a46570f2-1815-4b5f-b948-44c098b11946.png"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-time-blue mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer any questions you may have about our courses, admission process, or facilities. Feel free to reach out to us using the contact form or visit one of our centers in Visakhapatnam.
              </p>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="h-5 w-5 text-time-yellow" />}
                  title="Our Locations"
                >
                  <div className="space-y-2">
                    <p>Dwarakanagar: 1st Floor, Above KFC, Main Road, Visakhapatnam - 530016</p>
                    <p>NAD Junction: Near GVMC Office, NAD Junction, Visakhapatnam - 530009</p>
                    <p>Gajuwaka: Opposite Gajuwaka Bus Station, Visakhapatnam - 530026</p>
                  </div>
                </ContactItem>
                
                <ContactItem 
                  icon={<Phone className="h-5 w-5 text-time-yellow" />}
                  title="Phone Numbers"
                >
                  <div className="space-y-1">
                    <p>Main Office: +91 891 274 5678</p>
                    <p>Admissions: +91 891 274 8901</p>
                    <p>Student Support: +91 891 274 5432</p>
                  </div>
                </ContactItem>
                
                <ContactItem 
                  icon={<Mail className="h-5 w-5 text-time-yellow" />}
                  title="Email Addresses"
                >
                  <div className="space-y-1">
                    <p>General Inquiries: info@timevizag.com</p>
                    <p>Admissions: admissions@timevizag.com</p>
                    <p>Student Support: support@timevizag.com</p>
                  </div>
                </ContactItem>
                
                <ContactItem 
                  icon={<Clock className="h-5 w-5 text-time-yellow" />}
                  title="Office Hours"
                >
                  <div className="space-y-1">
                    <p>Monday to Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM (Admissions Only)</p>
                  </div>
                </ContactItem>
              </div>
            </div>
            
            <div>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdKXMSL_Jv8e1xXpzjHqx7K_TW082y1Bjy_yL2J0YD38dthlQ/viewform?embedded=true" 
                width="100%" 
                height="800" 
                style={{ border: 0 }}
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-time-blue mb-4">Find Us on Map</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our centers in Visakhapatnam
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121464.34386205398!2d83.20495961640625!3d17.70934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1649321812055!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TIME Institute Vizag Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ContactItem = ({ 
  icon, 
  title, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center mb-2">
      <div className="mr-3">{icon}</div>
      <h3 className="font-bold text-time-blue">{title}</h3>
    </div>
    <div className="ml-8 text-gray-700">
      {children}
    </div>
  </div>
);

export default Contact;
