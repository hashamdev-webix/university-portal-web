import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GraduationCap, Target, Eye, Users, Award, BookOpen, MapPin, Mail, Phone } from "lucide-react";

const stats = [
  { value: "12,000+", label: "Students Enrolled" },
  { value: "200+", label: "Courses Offered" },
  { value: "50+", label: "Partner Colleges" },
  { value: "15+", label: "Years of Excellence" },
];

const team = [
  { name: "Dr. Ahmed Raza", role: "Vice Chancellor", initial: "A" },
  { name: "Prof. Sara Khan", role: "Dean of Admissions", initial: "S" },
  { name: "Dr. Usman Ali", role: "Head of Academics", initial: "U" },
  { name: "Ms. Fatima Malik", role: "Student Affairs", initial: "F" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide accessible, quality education by simplifying the admission process for every student across Pakistan." },
  { icon: Eye, title: "Our Vision", desc: "To become the leading digital gateway connecting students with top educational institutions nationwide." },
  { icon: Award, title: "Our Values", desc: "Integrity, transparency, and student-first approach guide every decision we make at CCOG." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <GraduationCap size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">About CCOG</h1>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            CCOG is Pakistan's premier online college admission portal, connecting thousands of students with their dream institutions since 2010.
          </p>
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

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What Drives Us</h2>
            <p className="mt-3 text-muted-foreground">The principles behind everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background border border-border rounded-card shadow-soft p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2010, CCOG started with a simple idea — make college admissions less stressful. What began as a small portal for a handful of colleges in Islamabad has grown into a nationwide platform serving over 50 partner institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We saw students struggling with paperwork, long queues, and confusing processes. So we built a system that puts everything online — from application to offer letter — in one seamless experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, CCOG processes thousands of applications every year, helping students from all corners of Pakistan access quality education without the hassle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "Programs Available", value: "200+" },
                { icon: Users, label: "Active Students", value: "12K+" },
                { icon: Award, label: "Partner Colleges", value: "50+" },
                { icon: GraduationCap, label: "Graduates", value: "8K+" },
              ].map((item) => (
                <div key={item.label} className="bg-background border border-border rounded-card p-5 text-center shadow-soft">
                  <item.icon size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet the Team</h2>
            <p className="mt-3 text-muted-foreground">The people dedicated to your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-card shadow-soft p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">{member.initial}</span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">Have questions? We're here to help.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Mail, label: "Email", value: "info@ccog.edu" },
              { icon: Phone, label: "Phone", value: "+92 300 1234567" },
              { icon: MapPin, label: "Address", value: "Islamabad, Pakistan" },
            ].map((c) => (
              <div key={c.label} className="bg-background border border-border rounded-card p-5 shadow-soft">
                <c.icon size={20} className="text-accent mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground mt-1">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
