
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactForm = () => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="bg-time-lightgray py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-time-blue mb-2">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or want to enroll? Fill out the form below and our team will get back to you shortly.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <img 
              src="/lovable-uploads/09ee2a5b-5f32-45bd-b1ec-a265d999aa2c.png" 
              alt="Contact Us" 
              className="w-full md:w-1/3 max-w-md rounded-lg shadow-md"
            />
            <div className="flex flex-col items-center">
              <Button 
                className="mt-4 bg-time-yellow hover:bg-time-blue text-time-blue hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
                onClick={() => setShowIframe(true)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {showIframe && (
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKXMSL_Jv8e1xXpzjHqx7K_TW082y1Bjy_yL2J0YD38dthlQ/viewform?embedded=true" 
              width="100%" 
              height="720" 
              style={{ border: 0 }}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
