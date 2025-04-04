
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Target, Book, Users, Award, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about TIME Institute's 32-year journey of academic excellence"
        backgroundImage="/lovable-uploads/e6a587da-110c-42fb-b7ed-6cdd2533589d.png"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-time-blue mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                T.I.M.E. (Triumphant Institute of Management Education Pvt. Ltd.), a trusted name in competitive exam coaching, has firmly established its presence in Visakhapatnam (Vizag) with branches at Dwarakanagar, NAD Junction, and Gajuwaka. Renowned for its result-oriented approach and experienced faculty, T.I.M.E. has been guiding students across India for over three decades in cracking exams like CAT, GATE, SSC, Bank, CLAT, and various government job tests.
              </p>
              <p className="text-gray-700 mb-6">
                In Vizag, T.I.M.E. stands out not just for its national-level curriculum but also for its localized mentoring, doubt-clearing sessions, and personal attention to every student. The Dwarakanagar branch, located in the heart of the city, serves as a hub for MBA aspirants, while the NAD Junction and Gajuwaka centers cater to a diverse student base from both north and south Vizag.
              </p>
              <p className="text-gray-700">
                Each center is equipped with modern classrooms, extensive study materials, and regular mock tests designed to simulate real exam environments. T.I.M.E.'s commitment to quality education, combined with consistent success stories from Vizag students, makes it a top choice for serious aspirants aiming to excel in competitive exams.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/e6a587da-110c-42fb-b7ed-6cdd2533589d.png" 
                alt="TIME Institute Classroom" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-time-lightgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-time-yellow mr-4" />
                <h2 className="text-2xl font-bold text-time-blue">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To provide accessible, high-quality coaching for competitive exams that transforms students' lives through academic excellence and career growth. We aim to be the catalyst that helps students realize their potential and achieve their professional goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Book className="h-10 w-10 text-time-yellow mr-4" />
                <h2 className="text-2xl font-bold text-time-blue">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To be the most respected and trusted educational institution in India, known for creating successful professionals through innovative teaching methodologies, comprehensive study materials, and personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-time-blue mb-4">Our Journey Through The Years</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 32 years of excellence in competitive exam coaching
            </p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-time-blue before:to-transparent">
            <TimelineItem 
              year="1992" 
              title="Foundation of TIME"
              description="T.I.M.E. was established with a vision to provide quality coaching for competitive exams."
              isLeft={true}
            />
            <TimelineItem 
              year="1998" 
              title="Expansion Across India"
              description="Began expanding to major cities across India with our proven teaching methodology."
              isLeft={false}
            />
            <TimelineItem 
              year="2005" 
              title="Vizag Center Established"
              description="Opened our first center in Visakhapatnam to serve students in the region."
              isLeft={true}
            />
            <TimelineItem 
              year="2010" 
              title="Study Material Revolution"
              description="Revamped our study materials with more practice tests and comprehensive content."
              isLeft={false}
            />
            <TimelineItem 
              year="2015" 
              title="Digital Transformation"
              description="Introduced online learning platforms and digital resources for our students."
              isLeft={true}
            />
            <TimelineItem 
              year="2023" 
              title="Continued Excellence"
              description="Celebrating over three decades of academic excellence and student success."
              isLeft={false}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-time-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-time-blue mb-4">Why Choose TIME Institute?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what makes us the preferred choice for competitive exam preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-time-yellow" />}
              title="Expert Faculty" 
              description="Learn from experienced teachers who are specialists in their subjects and competitive exams." 
            />
            <FeatureCard 
              icon={<Book className="h-10 w-10 text-time-yellow" />}
              title="Comprehensive Study Material" 
              description="Access top-quality, regularly updated study resources designed by exam experts." 
            />
            <FeatureCard 
              icon={<Award className="h-10 w-10 text-time-yellow" />}
              title="Proven Track Record" 
              description="Join an institute with thousands of successful students and top rankers over 32 years." 
            />
            <FeatureCard 
              icon={<CheckCircle className="h-10 w-10 text-time-yellow" />}
              title="Regular Mock Tests" 
              description="Practice with exam-like mock tests that prepare you for the real challenge." 
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-time-yellow" />}
              title="Personalized Attention" 
              description="Benefit from doubt-clearing sessions and one-on-one guidance from faculty." 
            />
            <FeatureCard 
              icon={<Book className="h-10 w-10 text-time-yellow" />}
              title="Modern Infrastructure" 
              description="Study in well-equipped classrooms with technology-enabled learning facilities." 
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

// Helper Components
const TimelineItem = ({ 
  year, 
  title, 
  description, 
  isLeft = true 
}: { 
  year: string; 
  title: string; 
  description: string; 
  isLeft?: boolean;
}) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-time-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      <span className="text-white font-bold">{year.slice(2)}</span>
    </div>
    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 md:p-6 rounded shadow-md ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
      <div className="font-bold text-time-yellow mb-1">{year}</div>
      <div className="font-bold text-time-blue mb-2">{title}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  </div>
);

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-time-blue text-center mb-3">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

export default About;
