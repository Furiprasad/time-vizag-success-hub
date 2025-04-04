
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Star, User, Award, TrendingUp } from "lucide-react";

const Success = () => {
  return (
    <div>
      <PageHeader 
        title="Success Stories" 
        subtitle="Celebrating our students' remarkable achievements"
        backgroundImage="/lovable-uploads/34874f34-3310-4d5d-bd1b-5a9f33c319ee.png"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-time-blue mb-6">Our Success Legacy</h2>
              <p className="text-gray-700 mb-6">
                TIME Institute Vizag has been a launchpad for countless success stories, transforming dreams into reality for aspirants across competitive exams like CAT, GRE, GMAT, Bank PO, SSC, and more. 
              </p>
              <p className="text-gray-700 mb-6">
                With expert faculty, structured programs, and consistent mentoring, students have secured top ranks and admissions into premier institutions like the IIMs, ISB, and global universities. Many alumni have also aced government exams and secured prestigious positions in public sector banks and administrative roles.
              </p>
              <p className="text-gray-700">
                Their journey reflects TIME Vizag's commitment to excellence and personalized guidance. From mock tests to one-on-one doubt sessions, every step is tailored for success. These stories continue to inspire new batches of students to aim higher and push boundaries.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/34874f34-3310-4d5d-bd1b-5a9f33c319ee.png" 
                alt="TIME Institute Success" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard
              icon={<Star className="h-10 w-10 text-time-yellow" />}
              number="500+"
              text="Students placed in IIMs"
            />
            <StatCard
              icon={<User className="h-10 w-10 text-time-yellow" />}
              number="1000+"
              text="Banking & SSC selections"
            />
            <StatCard
              icon={<Award className="h-10 w-10 text-time-yellow" />}
              number="300+"
              text="Students with 95%+ in GRE/GMAT"
            />
            <StatCard
              icon={<TrendingUp className="h-10 w-10 text-time-yellow" />}
              number="90%"
              text="Success rate in selected exams"
            />
          </div>

          {/* Featured Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-time-blue mb-8 text-center">Featured Success Stories</h2>
            
            <div className="space-y-8">
              <FeaturedStory 
                name="Ravi Kumar" 
                achievement="Secured 99.8 percentile in CAT, Joined IIM Ahmedabad"
                image="/successStories.jpg"
                story="After completing my engineering, I was determined to get into a top IIM. TIME Vizag's structured coaching and mock tests were instrumental in my preparation. The faculty identified my weaknesses early and helped me transform them into strengths. Their personalized attention and strategy sessions made all the difference. I'm grateful to the entire TIME team for making my dream come true."
              />
              
              <FeaturedStory 
                name="Priya Sharma" 
                achievement="Selected as SBI Probationary Officer with All India Rank 32"
                image="/successStories.jpg"
                story="Coming from a small town, banking was my passion but I lacked proper guidance. TIME Vizag not only provided excellent study material but also mentored me throughout my preparation journey. The current affairs sessions and banking awareness modules were extremely helpful. The mock interviews conducted by TIME were almost identical to my actual SBI interview. I recommend TIME to anyone serious about banking exams."
                isReverse={true}
              />
              
              <FeaturedStory 
                name="Aditya Reddy" 
                achievement="Scored 335 in GRE, Admitted to Stanford University with Scholarship"
                image="/successStories.jpg"
                story="Preparing for the GRE while managing college was challenging, but TIME's weekend batches were perfect for my schedule. Their vocabulary strategies and analytical writing tips helped me achieve a near-perfect score. The counseling sessions on university applications and scholarship opportunities were an added bonus. Thanks to TIME, I'm now pursuing my masters at my dream university with substantial financial aid."
              />
            </div>
          </div>

          {/* Testimonial Grid */}
          <div>
            <h2 className="text-3xl font-bold text-time-blue mb-8 text-center">What Our Students Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  name={testimonial.name}
                  exam={testimonial.exam}
                  text={testimonial.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

// Testimonial Data
const testimonials = [
  {
    name: "Anjali Mehta",
    exam: "CAT 99.5 percentile",
    text: "The faculty at TIME Vizag is exceptional. Their guidance and mock tests were crucial in my CAT preparation. I couldn't have achieved this score without them!"
  },
  {
    name: "Vikram Singh",
    exam: "IBPS PO Selected",
    text: "TIME's bank exam coaching is comprehensive and up-to-date. The current affairs sessions and test series gave me an edge in the IBPS exam."
  },
  {
    name: "Sneha Reddy",
    exam: "GMAT 720",
    text: "The personalized attention and strategy sessions at TIME helped me tackle GMAT effectively. Their study material is simply the best in the industry."
  },
  {
    name: "Karthik Nair",
    exam: "SSC CGL Rank 145",
    text: "I tried self-study initially but wasn't making progress. Joining TIME changed everything. Their structured approach and regular practice tests were game-changers."
  },
  {
    name: "Meera Patel",
    exam: "GRE 328",
    text: "TIME's vocabulary building techniques and analytical writing tips significantly improved my GRE score. Their counseling for university applications was invaluable too."
  },
  {
    name: "Rahul Sharma",
    exam: "RBI Grade B Selected",
    text: "The competition for RBI Grade B is intense, but TIME's specialized coaching made it achievable. Their expert faculty and updated study material were key to my success."
  }
];

// Helper Components
const StatCard = ({ icon, number, text }: { icon: React.ReactNode; number: string; text: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-3xl font-bold text-time-blue mb-2">{number}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const FeaturedStory = ({ 
  name,
  achievement,
  image,
  story,
  isReverse = false
}: { 
  name: string;
  achievement: string;
  image: string;
  story: string;
  isReverse?: boolean;
}) => (
  <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-lg shadow-md overflow-hidden`}>
    <div className="lg:w-1/3">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="lg:w-2/3 p-6 md:p-8">
      <h3 className="text-xl font-bold text-time-blue mb-1">{name}</h3>
      <p className="text-time-yellow font-semibold mb-4">{achievement}</p>
      <p className="text-gray-700 italic mb-4">"{story}"</p>
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
    <div className="flex mt-4">
      <Star className="h-4 w-4 text-time-yellow" />
      <Star className="h-4 w-4 text-time-yellow" />
      <Star className="h-4 w-4 text-time-yellow" />
      <Star className="h-4 w-4 text-time-yellow" />
      <Star className="h-4 w-4 text-time-yellow" />
    </div>
  </div>
);

export default Success;
