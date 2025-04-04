
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Users, BookOpen, Award, Clock } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-time-blue to-time-lightblue text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Success for Over 32 Years
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              TIME Institute Vizag - Your path to excellence in competitive exams
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-time-yellow hover:bg-white text-time-blue font-bold text-lg py-6 px-8 rounded-md transition-colors"
              >
                <Link to="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg py-6 px-8 rounded-md transition-colors"
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white/10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Users className="h-12 w-12 text-time-yellow" />}
              number="50,000+"
              text="Students Coached"
            />
            <StatCard
              icon={<BookOpen className="h-12 w-12 text-time-yellow" />}
              number="15+"
              text="Competitive Exams"
            />
            <StatCard
              icon={<Award className="h-12 w-12 text-time-yellow" />}
              number="1000+"
              text="Top Rankers"
            />
            <StatCard
              icon={<Clock className="h-12 w-12 text-time-yellow" />}
              number="32"
              text="Years of Excellence"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-time-lightgray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/e6a587da-110c-42fb-b7ed-6cdd2533589d.png"
                alt="About TIME Institute"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-time-blue mb-4">
                About TIME Institute
              </h2>
              <p className="text-gray-700 mb-6">
                T.I.M.E. (Triumphant Institute of Management Education Pvt. Ltd.) is a trusted name in competitive exam coaching with a strong presence in Visakhapatnam. Our branches at Dwarakanagar, NAD Junction, and Gajuwaka serve students across the city.
              </p>
              <p className="text-gray-700 mb-6">
                With over 32 years of experience, we've helped countless students achieve their dreams through our expert faculty, comprehensive study materials, and proven methodologies.
              </p>
              <Button
                asChild
                className="bg-time-blue hover:bg-time-yellow hover:text-time-blue text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-time-blue mb-4">
              Our Popular Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized coaching for a wide range of competitive exams to help you achieve your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="MBA Entrance Exams"
              description="CAT, MAT, CMAT, XAT and other MBA entrance exam preparation"
              link="/courses"
            />
            <CourseCard
              title="Bank Exams"
              description="IBPS, SBI, RRB and other banking exam preparation"
              link="/courses"
            />
            <CourseCard
              title="SSC & Railways"
              description="SSC-CGL, SSC-CHSL, Railway exams and other government job tests"
              link="/courses"
            />
            <CourseCard
              title="Global Tests"
              description="GRE, GMAT, IELTS, TOEFL for higher education abroad"
              link="/courses"
            />
            <CourseCard
              title="Engineering Entrance"
              description="JEE Main & Advanced, BITSAT and other engineering entrance exams"
              link="/courses"
            />
            <CourseCard
              title="Foundation Courses"
              description="For school students (Classes 6 to 10) building strong basics"
              link="/courses"
            />
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-time-yellow hover:bg-time-blue text-time-blue hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-time-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-time-blue mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have achieved remarkable success in their competitive exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              exam="CAT 99.8 percentile"
              text="The faculty at TIME Vizag is exceptional. Their guidance and mock tests were crucial in my CAT preparation. I couldn't have achieved this score without them!"
            />
            <TestimonialCard
              name="Ravi Kumar"
              exam="SBI PO Selected"
              text="TIME's bank exam coaching is comprehensive and up-to-date. The current affairs sessions and test series gave me an edge in the SBI PO exam."
            />
            <TestimonialCard
              name="Ananya Reddy"
              exam="GMAT 740"
              text="The personalized attention and strategy sessions at TIME helped me tackle GMAT effectively. Their study material is simply the best in the industry."
            />
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-time-blue hover:bg-time-yellow hover:text-time-blue text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              <Link to="/success">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

// Helper Components
const StatCard = ({ icon, number, text }: { icon: React.ReactNode; number: string; text: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-3xl font-bold text-time-blue mb-2">{number}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const CourseCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
    <div className="bg-time-blue p-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-time-blue hover:text-time-lightblue font-medium inline-flex items-center"
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  </div>
);

const TestimonialCard = ({ name, exam, text }: { name: string; exam: string; text: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className="bg-time-yellow h-10 w-10 rounded-full flex items-center justify-center text-time-blue font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div className="ml-3">
        <h4 className="font-bold text-time-blue">{name}</h4>
        <p className="text-sm text-gray-600">{exam}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{text}"</p>
  </div>
);

export default Home;
