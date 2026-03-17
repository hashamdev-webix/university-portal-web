import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaGraduationCap, FaBullseye, FaEye, FaUsers, FaAward, FaBookOpen, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
  { icon: FaBullseye, title: "Our Mission", desc: "To provide accessible, quality education by simplifying the admission process for every student across Pakistan." },
  { icon: FaEye, title: "Our Vision", desc: "To become the leading digital gateway connecting students with top educational institutions nationwide." },
  { icon: FaAward, title: "Our Values", desc: "Integrity, transparency, and student-first approach guide every decision we make at CCOG." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5">
            <FaGraduationCap size={28} className="text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">About CCOG</h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            CCOG is Pakistan's premier online college admission portal, connecting thousands of students with their dream institutions since 2010.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">{s.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">The principles behind everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background border border-border rounded-card shadow-soft p-5 sm:p-6 text-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Founded in 2010, CCOG started with a simple idea — make college admissions less stressful. What began as a small portal for a handful of colleges in Islamabad has grown into a nationwide platform serving over 50 partner institutions.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                We saw students struggling with paperwork, long queues, and confusing processes. So we built a system that puts everything online — from application to offer letter — in one seamless experience.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Today, CCOG processes thousands of applications every year, helping students from all corners of Pakistan access quality education without the hassle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: FaBookOpen, label: "Programs Available", value: "200+" },
                { icon: FaUsers, label: "Active Students", value: "12K+" },
                { icon: FaAward, label: "Partner Colleges", value: "50+" },
                { icon: FaGraduationCap, label: "Graduates", value: "8K+" },
              ].map((item) => (
                <div key={item.label} className="bg-background border border-border rounded-card p-4 sm:p-5 text-center shadow-soft">
                  <item.icon size={22} className="text-accent mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">The people dedicated to your success</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-card shadow-soft p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-primary text-xl sm:text-2xl font-bold">{member.initial}</span>
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">{member.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Get in Touch</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">Have questions? We're here to help.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: FaEnvelope, label: "Email", value: "info@ccog.edu" },
              { icon: FaPhone, label: "Phone", value: "+1 (647) 382-9104" },
              { icon: FaMapMarkerAlt, label: "Address", value: "Toronto, Canada" },
            ].map((c) => (
              <div key={c.label} className="bg-background border border-border rounded-card p-4 sm:p-5 shadow-soft">
                <c.icon size={18} className="text-accent mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
