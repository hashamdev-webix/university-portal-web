import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  UserPlus, BookOpen, Upload, FileCheck, Clock, Star,
  GraduationCap, Monitor, Users, LayoutDashboard, ShieldCheck, ArrowRight
} from "lucide-react";

const stats = [
  { value: "12,000+", label: "Students" },
  { value: "200+", label: "Courses" },
  { value: "50+", label: "Colleges" },
  { value: "98%", label: "Satisfaction" },
];

const steps = [
  { icon: UserPlus, title: "Register Account", desc: "Create your free student account in minutes" },
  { icon: BookOpen, title: "Choose Course", desc: "Browse and select your desired program" },
  { icon: Upload, title: "Upload Documents", desc: "Submit required documents securely online" },
  { icon: FileCheck, title: "Get Offer Letter", desc: "Receive your admission offer digitally" },
];

const courses = [
  { name: "BS Computer Science", category: "Computer Science", duration: "4 Years", fee: "PKR 45,000", color: "from-primary to-accent" },
  { name: "MBA Business", category: "Business", duration: "2 Years", fee: "PKR 80,000", color: "from-amber-500 to-orange-500" },
  { name: "BS Engineering", category: "Engineering", duration: "4 Years", fee: "PKR 55,000", color: "from-emerald-500 to-teal-500" },
];

const testimonials = [
  { quote: "CCOG made my admission process so easy. I applied online and got my offer letter within a week!", name: "Sarah Ahmed", course: "BS Computer Science" },
  { quote: "The platform is intuitive and the support team is incredibly helpful. Highly recommended!", name: "Usman Ali", course: "MBA Business" },
  { quote: "I tracked my entire application journey through CCOG. Best experience ever!", name: "Fatima Khan", course: "BS Engineering" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                Your Future<br />
                <span className="text-primary">Starts Here</span>
              </h1>
              <p className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed font-medium">
                Apply for courses online, track your admission, and receive your offer letter — all in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/register" className="px-6 py-3 bg-primary text-primary-foreground rounded-input font-medium hover:opacity-90 transition-all active:scale-[0.98] shadow-soft">
                  Apply Now
                </Link>
                <Link to="/courses" className="px-6 py-3 border border-border text-foreground rounded-input font-medium hover:bg-surface transition-colors">
                  Browse Courses
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-input font-medium hover:bg-accent/5 transition-colors">
                  <LayoutDashboard size={16} /> View Dashboard
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <div className="bg-surface border border-border rounded-card shadow-soft p-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Student Dashboard</p>
                    <p className="text-xs text-muted-foreground">Welcome back, Ali</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Applications", value: "3", icon: FileCheck },
                    { label: "Courses", value: "12", icon: BookOpen },
                    { label: "Online Classes", value: "5", icon: Monitor },
                    { label: "Classmates", value: "248", icon: Users },
                  ].map((s) => (
                    <div key={s.label} className="bg-background rounded-input p-3 border border-border">
                      <s.icon size={16} className="text-accent mb-1" />
                      <p className="text-xl font-bold text-foreground tabular-nums">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Access Banner */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Live Demo — No Login Required</p>
              <h3 className="text-lg font-bold text-foreground">Explore Both Portals</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Student portal for applicants &nbsp;·&nbsp; Admin panel for staff
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/dashboard"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-input font-semibold hover:opacity-90 transition-all text-sm"
              >
                <LayoutDashboard size={16} />
                Student Dashboard
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/admin"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-input font-semibold hover:opacity-80 transition-all text-sm"
              >
                <ShieldCheck size={16} />
                Admin Panel
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary tabular-nums">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Admission in 4 Simple Steps</h2>
            <p className="mt-3 text-muted-foreground font-medium">From registration to your offer letter — it's that easy</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-border" />
            {steps.map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                  <step.icon size={24} className="text-accent" />
                </div>
                <p className="text-xs font-semibold text-accent mb-1">Step {i + 1}</p>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Popular Courses</h2>
            <p className="mt-3 text-muted-foreground font-medium">Explore our most sought-after programs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.name} className="bg-background border border-border rounded-card shadow-soft overflow-hidden hover:shadow-lift transition-shadow group">
                <div className={`h-32 bg-gradient-to-br ${c.color} flex items-end p-4`}>
                  <span className="text-xs font-medium bg-background/20 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded-sm">
                    {c.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-lg">{c.name}</h3>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={14} /> {c.duration}</span>
                    <span className="flex items-center gap-1"><Star size={14} /> 4.8</span>
                  </div>
                  <p className="mt-3 font-bold text-foreground">{c.fee}<span className="text-xs font-normal text-muted-foreground"> / semester</span></p>
                  <Link to="/register" className="mt-4 block text-center py-2 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background border border-border rounded-card shadow-soft p-6">
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
