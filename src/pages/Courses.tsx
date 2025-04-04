import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <PageHeader 
        title="Courses Offered" 
        subtitle="Explore our comprehensive range of exam preparation courses"
        backgroundImage="/lovable-uploads/4eef0c8c-169a-4e1f-a9ff-ecc758e6aa1c.png"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-time-blue mb-6">Our Courses</h2>
              <p className="text-gray-700 mb-6">
                T.I.M.E. (Triumphant Institute of Management Education) in Vizag offers a wide range of courses designed to prepare students for various competitive exams and academic goals. Their popular programs include coaching for CAT, MAT, CMAT for MBA aspirants, as well as Bank Exams (IBPS, SBI, RRB) and SSC-CGL for government job seekers.
              </p>
              <p className="text-gray-700 mb-6">
                T.I.M.E. Vizag also provides specialized coaching for GRE, GMAT, IELTS, and TOEFL to help students aiming for higher education abroad. Additionally, the institute offers Foundation Courses for school students (Classes 6 to 10), and training for engineering entrance exams like JEE Main & Advanced.
              </p>
              <p className="text-gray-700">
                Known for its experienced faculty, detailed study material, and regular mock tests, T.I.M.E. ensures a structured and result-oriented learning environment. With personalized mentoring and updated content, the institute has earned a solid reputation for success in competitive exam training.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/4eef0c8c-169a-4e1f-a9ff-ecc758e6aa1c.png" 
                alt="TIME Institute Students" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <CourseCard
              title="MBA Entrance Preparation"
              exams={["CAT", "XAT", "SNAP", "NMAT", "MAT", "CMAT"]}
              duration="4-6 months"
              features={[
                "Comprehensive coverage of Quant, Verbal, and Logic",
                "Weekend and weekday batches available",
                "Regular mock tests with detailed analysis",
                "Personalized feedback and improvement strategies"
              ]}
            />
            <CourseCard
              title="Banking & Insurance Exams"
              exams={["IBPS PO/Clerk", "SBI PO/Clerk", "RBI Grade B", "Insurance Exams"]}
              duration="3-4 months"
              features={[
                "Complete coverage of all exam sections",
                "Current affairs and banking awareness sessions",
                "Interview preparation for selected candidates",
                "Regular practice tests and doubt solving sessions"
              ]}
            />
            <CourseCard
              title="SSC & Railway Exams"
              exams={["SSC CGL", "SSC CHSL", "SSC MTS", "Railway RRB"]}
              duration="3-4 months"
              features={[
                "Specialized focus on each paper and section",
                "Topic-wise tests and full-length mock exams",
                "Bilingual study material (English & Hindi)",
                "Special focus on reasoning and quantitative aptitude"
              ]}
            />
            <CourseCard
              title="Study Abroad Tests"
              exams={["GRE", "GMAT", "IELTS", "TOEFL"]}
              duration="2-3 months"
              features={[
                "Expert guidance from trainers with high scores",
                "Vocabulary building and language skills enhancement",
                "Extensive practice with previous year questions",
                "Essay writing and speaking practice sessions"
              ]}
            />
            <CourseCard
              title="Engineering Entrance"
              exams={["JEE Main", "JEE Advanced", "BITSAT"]}
              duration="6-12 months"
              features={[
                "Strong focus on Physics, Chemistry and Mathematics",
                "Concept building and problem-solving techniques",
                "Regular chapter tests and full mock tests",
                "Doubt clearing sessions with expert faculty"
              ]}
            />
            <CourseCard
              title="Foundation Courses"
              exams={["Classes 6-10", "Olympiads", "NTSE"]}
              duration="Academic year based"
              features={[
                "Building strong fundamentals in all subjects",
                "Special focus on competitive exam patterns",
                "Regular assessments and progress tracking",
                "Interactive learning sessions and activities"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-time-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-time-blue mb-4">What Makes Our Courses Special</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At TIME, we combine expert faculty, comprehensive study material, and proven methodologies to ensure your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-time-yellow" />}
              title="Expert Faculty" 
              description="Learn from instructors with decades of teaching experience and deep subject knowledge" 
            />
            <FeatureCard 
              icon={<BookOpen className="h-12 w-12 text-time-yellow" />}
              title="Comprehensive Material" 
              description="Access detailed study guides, practice questions, and mock tests for thorough preparation" 
            />
            <FeatureCard 
              icon={<Clock className="h-12 w-12 text-time-yellow" />}
              title="Flexible Schedules" 
              description="Choose from weekday, weekend, or crash course options that fit your availability" 
            />
            <FeatureCard 
              icon={<CheckCircle className="h-12 w-12 text-time-yellow" />}
              title="Proven Results" 
              description="Join thousands of successful students who have cracked competitive exams with TIME" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-time-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Preparation Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join TIME Institute Vizag and take the first step towards your dream career. Our expert faculty and proven methodologies await you.
          </p>
          <Button
            asChild
            className="bg-time-yellow hover:bg-white text-time-blue font-bold text-lg py-6 px-8 rounded-md transition-colors"
          >
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

// Helper Components
const CourseCard = ({ 
  title, 
  exams, 
  duration, 
  features 
}: { 
  title: string; 
  exams: string[]; 
  duration: string; 
  features: string[];
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-time-blue p-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Exams Covered:</h4>
        <div className="flex flex-wrap gap-1">
          {exams.map((exam, index) => (
            <span 
              key={index} 
              className="bg-time-yellow/20 text-time-blue text-sm py-1 px-2 rounded-full"
            >
              {exam}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Duration:</h4>
        <p className="text-gray-600">{duration}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-time-yellow mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        <Button
          asChild
          className="w-full bg-time-yellow hover:bg-time-blue text-time-blue hover:text-white font-medium py-2 rounded-md transition-colors"
        >
          <Link to="/contact">Enquire Now</Link>
        </Button>
      </div>
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
  <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-time-blue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Courses;
