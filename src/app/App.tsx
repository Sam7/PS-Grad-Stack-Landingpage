import { useState } from "react";
import { PricingCard } from "./components/PricingCard";
import { ProfileCard } from "./components/ProfileCard";
import { FunnelInfographic } from "./components/FunnelInfographic";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import rejectionPhoneImage from "../assets/RejectionPhoneImageZoom.webp";
import RecruiterImage from "../assets/RecruiterZoomed.webp";
import academicSuccessImage from "../assets/AcademicSuccess.webp";
import jeremiahImage from "../assets/Jeremiah.webp";
import samImage from "../assets/Sam.webp";
import andrewImage from "../assets/Andrew.webp";
import { 
  CheckCircle2, 
  X, 
  Shield, 
  Clock, 
  Target,
  TrendingUp,
  Award,
  Users,
  Brain,
  Video,
  FileText,
  Zap
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";

export default function App() {
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null);

  const handlePricingSelect = (tier: string) => {
    setSelectedPricing(tier);
    // In production, this would redirect to Stripe checkout
    alert(`Selected ${tier} tier. This would redirect to payment gateway.`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar */}
      <header className="bg-[#01253A] text-white py-3 px-4 sticky top-0 z-50 border-b-2 border-[#00D1C2]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="tracking-wide">
              <strong className="text-[#00D1C2]">Grad Stack -</strong> Helping Student Succeed getting into Graduate Programs: The 2027 Intake Strategy
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-condensed tracking-wide">
              Applications Open: Feb/March 2026
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Headline & CTA */}
            <div className="order-1">
              <div className="inline-block bg-[#F93A20]/10 border border-[#F93A20]/30 rounded-full px-4 py-2 mb-6">
                <span className="text-[#01253A] font-condensed tracking-wider">
                  94% ELIMINATED BEFORE REACHING A HUMAN
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#01253A] mb-6 leading-tight">
                They didn't even read your resume.
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                You spent <strong className="text-[#01253A]">3 years</strong> getting the grades. 
                You spent <strong className="text-[#01253A]">weeks</strong> on the application. 
                But you were rejected by an algorithm in <strong className="text-[#01253A]">0.4 seconds</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#00D1C2] hover:bg-[#00D1C2]/90 text-[#01253A] px-10 py-7 text-lg"
                >
                  Beat the 2027 Funnel
                </Button>
                <Button
                  onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-[#01253A] text-[#01253A] hover:bg-gray-50 px-10 py-7 text-lg"
                >
                  See The Data
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-600 font-condensed">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00D1C2]" />
                  <span>14-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1C2]" />
                  <span>Built by Real Hiring Managers</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2">
              <div className="relative w-full">
                <img
                  src={RecruiterImage}
                  alt="Student receiving rejection email"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Proof Section */}
      <section id="proof" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] mb-6">
              The Mathematics of Rejection.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Data doesn't lie. Here is what the funnel actually looks like for the 10,000 students competing against you.
            </p>
          </div>

          <FunnelInfographic />

          <div className="max-w-4xl mx-auto mt-16">
            {/* Eye-catching header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-[#F93A20] to-[#F93A20]/80 text-white px-6 py-3 rounded-full shadow-lg mb-4">
                <span className="text-lg font-bold tracking-wide">⚠️ THE BRUTAL TRUTH</span>
              </div>
              <h3 className="text-3xl sm:text-4xl text-[#01253A] font-bold mb-3">
                See that drop at Stage 2 & 3?
              </h3>
              <p className="text-xl text-gray-600">
                That's not a "bad grade" filter. That's the algorithm deleting your future.
              </p>
            </div>

            {/* Visual stat cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="relative bg-gradient-to-br from-[#F93A20]/10 via-white to-white border-2 border-[#F93A20]/30 rounded-2xl p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F93A20]/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-5xl sm:text-6xl font-bold text-[#F93A20] mb-2">30-60%</div>
                  <div className="text-lg text-gray-700 font-semibold mb-2">eliminated by</div>
                  <div className="text-xl text-[#01253A] font-bold">Psychometric Testing</div>
                  <p className="text-sm text-gray-600 mt-3">Before a human even sees your name</p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#F93A20]/10 via-white to-white border-2 border-[#F93A20]/30 rounded-2xl p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F93A20]/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="text-5xl sm:text-6xl font-bold text-[#F93A20] mb-2">20-40%</div>
                  <div className="text-lg text-gray-700 font-semibold mb-2">fail the</div>
                  <div className="text-xl text-[#01253A] font-bold">One-Way Video Interview</div>
                  <p className="text-sm text-gray-600 mt-3">Because they never practiced talking to a camera</p>
                </div>
              </div>
            </div>

            {/* The hard truth box */}
            <div className="bg-[#01253A] text-white rounded-xl p-6 sm:p-7 shadow-xl mb-6">
              <div className="text-center">
                <p className="text-xl sm:text-2xl leading-relaxed mb-3">
                  Most students think the <span className=" font-bold">"Final Interview"</span> is the hard part.
                </p>
                <p className="text-2xl sm:text-3xl font-bold mb-2">
                  They are wrong.
                </p>
                <p className="text-xl sm:text-2xl leading-relaxed">
                  The hard part is <span className="text-[#FCDC3F] font-bold">getting a human to look at you.</span>
                </p>
              </div>
            </div>

            {/* CTA box */}
            <div className="bg-gradient-to-r from-[#00D1C2] to-[#00D1C2]/80 rounded-2xl p-8 shadow-2xl text-center">
              <p className="text-3xl sm:text-4xl text-[#01253A] font-bold mb-2">
                Grad Stack equips you to get into that top 2%.
              </p>
              <p className="text-lg text-[#01253A]/80 mt-2">
                We teach you to beat the robots. Then we teach you to impress the humans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wake Up Call Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#01253A] to-[#01253A]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Image - First on mobile, right on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="relative aspect-[9/16] w-full max-w-md mx-auto">
                <img
                  src={academicSuccessImage}
                  alt="Academic success"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Text Content - Second on mobile, left on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl mb-8">
                "I have a Distinction average. Why did I get rejected?"
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                It's the most common question we hear. And the answer is harsh.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                In 2026, <strong className="text-[#F93A20]">30–60% of applicants</strong> are eliminated by Psychometric Testing before a human ever sees their name. Another <strong className="text-[#F93A20]">20–40%</strong> fail the One-Way Video Interview because they don't know how to talk to a camera.
              </p>
              <p className="text-xl text-[#00D1C2] leading-relaxed mb-6">
                You are not competing with humans yet. You are competing with <strong>fully automated filters.</strong>
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Most students walk into the 2027 intake blind. They treat it like a university assignment—if they work hard, they'll pass. <strong className="text-[#F93A20]">They are wrong.</strong>
              </p>
              <p className="text-2xl text-white leading-relaxed mt-10">
                The Graduate Funnel is designed to fail you. <span className="text-[#00D1C2]"><strong>We are designed to get you through.</strong></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] text-center mb-4">
              Built by the Gatekeepers.
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              We aren't career influencers. We are the people who designed the teams you want to join.
            </p>

            {/* Main Leaders */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <ProfileCard
                name="Jeremiah Burns"
                title="Co-Founder, People Squad | Hiring Manager, NAB"
                quote="I've reviewed thousands of grad applications. I know exactly why I put one in the 'Yes' pile and ten in the 'No' pile. In this course, I tell you the difference."
                imageUrl={jeremiahImage}
              />
              <ProfileCard
                name="Sam Sperling"
                title="Co-Founder, People Squad | Hiring Manager, Woolworths | 25-Year IT Veteran"
                quote="Technical skills get you the degree. Commercial skills get you the job. I break down what IT managers actually look for beyond your coding ability."
                imageUrl={samImage}
              />
              <ProfileCard
                name="Executive Coach Panel"
                title="Featuring a 25-Year Finance Career Veteran"
                quote="We have guided careers from Graduate to C-Suite. We know the long-game traits that firms look for in future leaders."
                imageUrl={andrewImage}
              />
            </div>

            {/* Support Crew */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProfileCard
                name="Sarah Mitchell"
                title="Graduate Program Manager"
                quote="Current insights on how the 2026 intake is structured"
                imageUrl="https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjcyMzU4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <ProfileCard
                name="Dr. Michael Chen"
                title="Psychometric Assessment Specialist"
                quote="The strategy to beat the pattern-recognition games"
                imageUrl="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzIzNTg5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <ProfileCard
                name="James Rodriguez"
                title="ATS Technology Lead"
                quote="The insider guide to beating the resume robots"
                imageUrl="https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjcyMzU4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <ProfileCard
                name="Emma Taylor"
                title="Recent Graduate Success Story"
                quote="A successful recent grad who beat the odds"
                imageUrl="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzIzNTg5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Failure Section */}
      <section className="py-16 sm:py-24 bg-[#F93A20]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] mb-8">
              The $20,000 Mistake.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Why does this matter? Because the gap between a "Graduate Program" and an "Entry Level Job" isn't just a title. It's your financial future.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-xl p-8 border-2 border-[#00D1C2] shadow-lg">
                <TrendingUp className="w-12 h-12 text-[#00D1C2] mx-auto mb-4" />
                <h3 className="text-[#01253A] mb-3">Average 2026 Grad Program Salary</h3>
                <p className="text-4xl text-[#00D1C2] mb-2">$75,000 – $90,000</p>
                <p className="text-gray-600 font-condensed">plus accelerated raises</p>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-gray-300">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-[#01253A] mb-3">Average Entry-Level Admin Salary</h3>
                <p className="text-4xl text-gray-600 mb-2">$55,000 – $65,000</p>
                <p className="text-gray-500 font-condensed">slow progression</p>
              </div>
            </div>

            <div className="bg-[#F93A20] text-white rounded-xl p-8 mb-8">
              <p className="text-3xl mb-2">The Gap?</p>
              <p className="text-5xl mb-4">Over $20,000</p>
              <p className="text-xl">in your first year alone.</p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              And that gap widens every year. A Grad Program is the fast track to six figures. Missing out means starting at the bottom.
            </p>
            <p className="text-2xl text-[#01253A] leading-relaxed">
              You have invested <strong>$40,000+</strong> in your degree.<br />
              Don't let a <strong className="text-[#00D1C2]">$345</strong> knowledge gap cost you a <strong className="text-[#F93A20]">$90,000</strong> career.
            </p>
          </div>
        </div>
      </section>

      {/* Future Pacing Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] text-center mb-16">
              Two Ways to Enter the 2027 Intake.
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Standard Student */}
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-300">
                <div className="flex items-center gap-3 mb-6">
                  <X className="w-8 h-8 text-[#F93A20]" />
                  <h3 className="text-2xl text-[#01253A]">The "Standard" Student</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      stage: "Stage 1: The Resume",
                      result: 'Submits a generic CV. Jeremiah rejects it in 6 seconds because it focuses on "tasks" not "outcomes."',
                    },
                    {
                      stage: "Stage 2: The Test",
                      result: 'Goes in blind. Panics when they see the "Gamified Assessment." Scores in the 40th percentile. ELIMINATED.',
                    },
                    {
                      stage: "Stage 3: The Video",
                      result: 'Stares awkwardly at the camera. Rambles. Low energy. AI flags "Low Engagement." ELIMINATED.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-[#F93A20] pl-4">
                      <h4 className="text-[#01253A] mb-2">{item.stage}</h4>
                      <p className="text-gray-700">{item.result}</p>
                    </div>
                  ))}
                  
                  <div className="bg-[#F93A20] text-white rounded-lg p-4 mt-6">
                    <p className="text-center italic">"Unfortunately, at this time..."</p>
                  </div>
                </div>
              </div>

              {/* Grad Stack Student */}
              <div className="bg-gradient-to-br from-[#00D1C2]/10 to-[#00D1C2]/5 rounded-xl p-8 border-2 border-[#00D1C2]">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#00D1C2]" />
                  <h3 className="text-2xl text-[#01253A]">The Grad Stack Student</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      stage: "Stage 1: The Resume",
                      result: 'Uses the Grad Stack ATS Framework. Passes the robot filters. Jeremiah reads it and flags it for review.',
                    },
                    {
                      stage: "Stage 2: The Test",
                      result: 'Used our Psychometric Lab to practice the exact game types 2 weeks prior. Scores in the top 20%. ADVANCED.',
                    },
                    {
                      stage: "Stage 3: The Video",
                      result: "Uses Sam Sperling's STAR structure. Hits the key commercial keywords. Looks confident. SHORTLISTED.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-[#00D1C2] pl-4">
                      <h4 className="text-[#01253A] mb-2">{item.stage}</h4>
                      <p className="text-gray-700">{item.result}</p>
                    </div>
                  ))}
                  
                  <div className="bg-[#00D1C2] text-[#01253A] rounded-lg p-4 mt-6">
                    <p className="text-center">"We would like to invite you to an interview."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#01253A] to-[#01253A]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-center mb-6">
              What You Actually Get Inside.
            </h2>
            <p className="text-xl text-center text-gray-300 mb-16">
              5 modules. 27 videos. The exact playbook hiring managers use to evaluate you.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Module 1: Understanding The Game",
                  desc: "See the grad program process from the hiring manager's desk. Learn what gets you shortlisted vs rejected in the 6-second scan. Master LinkedIn and networking before applications open.",
                  isModule: true,
                },
                {
                  icon: FileText,
                  title: "Module 2: Beating The AI Filters",
                  desc: "The ATS expert interview reveals how algorithms screen you out. Learn to write resumes and cover letters that pass the bots and impress the humans. Includes psychometric test strategy.",
                  isModule: true,
                },
                {
                  icon: Video,
                  title: "Module 3: Talking To A Camera",
                  desc: "Most students bomb the one-way video interview because they've never practiced. Master phone screenings and automated video responses that show confidence, not panic.",
                  isModule: true,
                },
                {
                  icon: Users,
                  title: "Module 4: The Live Interview",
                  desc: "9 videos on behavioral questions, technical scenarios, the STAR method, body language, and asking smart questions. This is what gets you from 'maybe' to 'offer'.",
                  isModule: true,
                },
                {
                  icon: Shield,
                  title: "Module 5: Final Stage & Resilience",
                  desc: "Navigate assessment centre group tasks, handle reference checks, and build the mental resilience to survive rejections. Learn what to do when you get the offer (or don't).",
                  isModule: true,
                },
                {
                  icon: Award,
                  title: "4 Expert Masterclass Interviews",
                  desc: "Exclusive conversations with a Grad Program Manager, ATS Technology Expert, Psychometric Specialist, and a recent grad who went from 10,000 applicants to hired.",
                  isModule: false,
                },
              ].map((module, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl p-6 border transition-all ${
                    module.isModule 
                      ? 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15' 
                      : 'bg-[#00D1C2]/20 border-[#00D1C2] hover:bg-[#00D1C2]/30'
                  }`}
                >
                  <module.icon className={`w-10 h-10 mb-4 ${module.isModule ? 'text-[#00D1C2]' : 'text-[#FCDC3F]'}`} />
                  <h3 className="text-xl text-white mb-3">{module.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{module.desc}</p>
                </div>
              ))}
            </div>

            {/* Grad Stack Premium Features */}
            <div className="mt-12 bg-gradient-to-br from-[#00D1C2]/30 to-[#00D1C2]/20 border-2 border-[#00D1C2] rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl text-white mb-2">Upgrade to "The Grad Stack" Package</h3>
                <p className="text-gray-200">Everything above, plus hands-on practice tools that simulate the actual assessment process.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <Brain className="w-12 h-12 text-[#FCDC3F] mb-4 mx-auto" />
                  <h4 className="text-lg text-white mb-2 text-center font-bold">Full Psychometric Test Simulation</h4>
                  <p className="text-gray-300 text-sm text-center">Practice the exact game-based assessments used by top firms. Pattern recognition, logic tests, and situational judgment. Know your score before it counts.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <FileText className="w-12 h-12 text-[#FCDC3F] mb-4 mx-auto" />
                  <h4 className="text-lg text-white mb-2 text-center font-bold">ATS Resume Scan & Score</h4>
                  <p className="text-gray-300 text-sm text-center">Upload your resume and get a real-time ATS compatibility score. See exactly what the algorithm sees—and fix it before you apply.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                  <Video className="w-12 h-12 text-[#FCDC3F] mb-4 mx-auto" />
                  <h4 className="text-lg text-white mb-2 text-center font-bold">One-Way Video Interview Practice</h4>
                  <p className="text-gray-300 text-sm text-center">Record practice responses to real grad program prompts. Review your pacing, body language, and keyword usage. Don't practice on game day.</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-white text-lg mb-4">This is where theory becomes muscle memory.</p>
                <Button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#FCDC3F] hover:bg-[#FCDC3F]/90 text-[#01253A] px-10 py-6 text-lg font-bold"
                >
                  Get The Full Stack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Student Section */}
      {/* <section className="py-16 sm:py-24 bg-[#FCDC3F]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] mb-8">
              A Note for International Students.
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>We know the pressure you are under.</p>
              <p>Limited visa windows. Sponsorship hurdles. Intense competition.</p>
              <p className="text-xl text-[#01253A]">
                You cannot change your citizenship. But you <strong className="text-[#00D1C2]">can</strong> change your performance.
              </p>
              <p>
                Because you have fewer opportunities than domestic students, <strong>you cannot afford to waste a single application.</strong>
              </p>
              <p>
                When an employer <em>does</em> accept international applications, you need to be the undeniable choice.
              </p>
              <p className="text-xl text-[#01253A] pt-4">
                <strong>Grad Stack ensures that when the door opens, you walk through it.</strong>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] text-center mb-16">
              Choose Your Advantage.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <PricingCard
                title='The "Essentials"'
                subtitle="For the self-starter."
                price="197"
                features={[
                  "Premium Video Course (27 videos, 5 modules):",
                  "• How Grad Programs Work",
                  "• Resumes, Cover Letters & ATS",
                  "• Phone & Video Screenings",
                  "• Assessment Centres & Mindset",
                  "• Live Interview Skills",
                  "Expert Interview Series (4 masterclasses):",
                  "• Graduate Program Manager",
                  "• ATS Expert",
                  "• Psychometric Testing Expert",
                  "• Recent Successful Grad",
                ]}
                ctaText="Get Started"
                onSelect={() => handlePricingSelect("Essentials")}
              />
              
              <PricingCard
                title='The "Grad Stack"'
                subtitle="For the serious contender."
                price="345"
                features={[
                  "Everything in Essentials, PLUS:",
                  "⚡ Full Psychometric Test Simulation",
                  "⚡ ATS Resume Scan & Score",
                  "⚡ One-Way Video Interview Practice",
                ]}
                ctaText="Get The Stack"
                isPopular={true}
                onSelect={() => handlePricingSelect("Grad Stack")}
              />
              
              <PricingCard
                title='The "Executive"'
                subtitle="For the student who wants a personal coaching."
                price="890"
                features={[
                  "Everything in Stack, PLUS:",
                  "🔥 1:1 Strategy Session with a 25-Year Career Veteran",
                  "🔥 Personal Resume Audit: Get your CV reviewed by a pro before you send it",
                  "🔥 Mock Interview: Real feedback from a real human",
                ]}
                ctaText="Apply Now"
                onSelect={() => handlePricingSelect("Executive")}
              />
            </div>

            <p className="text-center text-gray-600 italic">
              Note: A single month of a Graduate Salary covers the Executive cost 5x over
            </p>
          </div>
        </div>
      </section>

      {/* Cost of Waiting Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#01253A] to-[#01253A]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-center mb-6">
              The 2027 Intake has officially begun.
            </h2>
            <p className="text-xl text-center text-gray-300 mb-8">
              You might think you have all year to apply. You don't.
            </p>
            <p className="text-lg text-center text-gray-200 mb-12">
              In the Australian graduate market, <strong className="text-white">70% of top-tier employers</strong> recruit in a single, high-intensity 8-week block.
            </p>

            {/* The Golden Quarter Box */}
            <div className="bg-gradient-to-br from-[#00D1C2]/20 to-[#00D1C2]/10 border-2 border-[#00D1C2] rounded-2xl p-8 mb-10">
              <p className="text-center text-gray-300 text-sm uppercase tracking-wider mb-2">
                We call this
              </p>
              <h3 className="text-5xl text-[#00D1C2] text-center mb-6">
                "The Golden Quarter"
              </h3>
              <div className="text-center mb-4">
                <p className="text-3xl text-white mb-2">FEB 1 — APRIL 30</p>
                <div className="inline-block">
                  <span className="text-[#F93A20] text-2xl font-bold">Status: OPEN NOW</span>
                </div>
              </div>
              <p className="text-center text-gray-200 text-lg mt-6">
                This is the "Championship Window." The organizations with the best training, the highest starting salaries, and the most structured career paths are hiring <strong className="text-white">right now</strong>.
              </p>
            </div>

            {/* Key Info */}
            <div className="mb-10">
              <p className="text-xl text-white mb-6">
                If you want a role in <strong className="text-[#00D1C2]">Banking, Big 4 Consulting, Federal Government (APS), or Mining</strong>, this is likely your only opportunity for the year.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h4 className="text-2xl text-white mb-4">The Timeline:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[#00D1C2] mt-1 flex-shrink-0" />
                    <span className="text-gray-200"><strong className="text-white">February 3:</strong> The "Big 4" Banks & Professional Services typically open applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[#00D1C2] mt-1 flex-shrink-0" />
                    <span className="text-gray-200"><strong className="text-white">March 2:</strong> The Australian Public Service (APS) and Federal Departments launch bulk recruitment.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xl">
                    <Zap className="w-6 h-6 text-[#F93A20] mt-1 flex-shrink-0" />
                    <span className="text-gray-200"><strong className="text-[#F93A20]">Mid-April: DOORS CLOSE.</strong> Most premium intake portals shut down for the year.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-20 h-20 text-[#00D1C2] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl text-[#01253A] mb-8">
              The "Satisfaction" Guarantee.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We are so confident in this strategy that we offer a simple promise:
            </p>
            <div className="bg-[#00D1C2]/10 border-2 border-[#00D1C2] rounded-xl p-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                If you complete the Grad Stack curriculum, use the Practice Lab tools, and don't feel more confident and prepared for your applications within 14 days, <strong className="text-[#01253A]">we will refund 100% of your investment.</strong>
              </p>
              <p className="text-[#01253A] mt-4">No questions asked. You keep the templates.</p>
            </div>

            <div className="mt-12 space-y-6">
              <p className="text-2xl text-[#01253A] leading-relaxed">
                This is a <strong className="text-[#00D1C2]">zero-risk investment</strong> in your future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The skills you learn here—how to communicate impact, how to perform under pressure, how to read what employers <em>actually</em> want—aren't just for graduate programs. They're for <strong>your entire professional journey</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you land your dream role in 2027 or pivot to something else in 2030, you'll use these principles for the rest of your career.
              </p>
              
              <div className="pt-6 flex justify-center">
                <Button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#00D1C2] hover:bg-[#00D1C2]/90 text-[#01253A] px-12 py-7 text-xl"
                >
                  Start Your Journey Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-[#01253A] text-center mb-12">
              Common Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-[#01253A] text-left hover:text-[#00D1C2]">
                  "I have good grades. Do I need this?"
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Grades get you past the first filter. They do nothing for the Psychometric test, the Video Interview, or the Assessment Centre group task. 60% of high-distinction students fail the psychometric stage. Don't be one of them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-[#01253A] text-left hover:text-[#00D1C2]">
                  "When should I start?"
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Now. The 2027 intake opens in <strong>February & March 2026</strong>. If you are reading this in January, you are already behind.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01253A] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl mb-2">Grad Stack | By People Squad</h3>
          <p className="text-gray-400 font-condensed mb-4">
            Designed by the people who hire you.
          </p>
          <p className="text-gray-500 text-sm">Copyright 2026</p>
        </div>
      </footer>
    </div>
  );
}