import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, FileText, Upload, CreditCard, Award, Video, Settings, LogOut, Menu, X,
  Bell, CheckCircle, Clock, Circle, ExternalLink
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Application", icon: FileText, to: "/dashboard/application" },
  { label: "Documents", icon: Upload, to: "/dashboard/documents" },
  { label: "Payments", icon: CreditCard, to: "/dashboard/payments" },
  { label: "Offer Letter", icon: Award, to: "/dashboard/offer" },
  { label: "Online Classes", icon: Video, to: "/dashboard/classes" },
  { label: "Settings", icon: Settings, to: "/dashboard/settings" },
];

const timelineSteps = [
  { label: "Registered", status: "done" },
  { label: "Application Submitted", status: "done" },
  { label: "Documents Verified", status: "current" },
  { label: "Payment Confirmed", status: "pending" },
  { label: "Offer Letter Issued", status: "pending" },
];

const classes = [
  { time: "10:00 AM", subject: "Data Structures", instructor: "Dr. Malik" },
  { time: "12:00 PM", subject: "Calculus II", instructor: "Prof. Nida" },
  { time: "02:00 PM", subject: "English Writing", instructor: "Ms. Sara" },
];

const notifications = [
  { msg: "Your document has been received for review", time: "2 hours ago" },
  { msg: "Fee payment deadline extended to Dec 15", time: "5 hours ago" },
  { msg: "New class schedule uploaded for Fall 2025", time: "1 day ago" },
];

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface">
      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[240px] bg-background border-r border-border flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-input bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-foreground">CCOG</span>
          </div>
        </div>

        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-semibold">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Ali Hassan</p>
              <StatusBadge variant="info">Student</StatusBadge>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const active = location.pathname === item.to || (item.to === "/dashboard" && location.pathname === "/dashboard");
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-input text-sm font-medium transition-colors relative ${
                  active ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r" />}
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-input text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-background flex items-center px-4 sm:px-8 justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-surface rounded-input" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <h1 className="font-semibold text-foreground text-lg">Good Morning, Ali 👋</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-surface rounded-input">
              <Bell size={18} className="text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-semibold text-sm">A</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Application Status" value={<StatusBadge variant="warning">Under Review</StatusBadge>} />
            <StatCard label="Documents Uploaded" value={
              <div>
                <p className="text-lg font-bold text-foreground">3 / 5</p>
                <div className="mt-1 h-1.5 bg-border rounded-full"><div className="h-full bg-accent rounded-full" style={{ width: "60%" }} /></div>
              </div>
            } />
            <StatCard label="Fee Status" value={<StatusBadge variant="success">Paid</StatusBadge>} />
            <StatCard label="Offer Letter" value={<StatusBadge variant="gray">Pending</StatusBadge>} />
          </div>

          {/* Timeline */}
          <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-6">Application Progress</h2>
            <div className="space-y-4">
              {timelineSteps.map((s, i) => (
                <div key={s.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    {s.status === "done" ? <CheckCircle size={20} className="text-success" /> :
                     s.status === "current" ? <Clock size={20} className="text-warning animate-pulse-soft" /> :
                     <Circle size={20} className="text-border" />}
                    {i < timelineSteps.length - 1 && <div className={`w-px h-6 mt-1 ${s.status === "done" ? "bg-success" : "bg-border"}`} />}
                  </div>
                  <p className={`text-sm ${s.status === "done" ? "text-foreground" : s.status === "current" ? "text-warning font-medium" : "text-muted-foreground"}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Course + Classes */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-background border border-border rounded-card shadow-soft p-6">
              <h2 className="font-semibold text-foreground mb-4">Selected Course</h2>
              <div className="space-y-3 text-sm">
                <Row label="Course" value="BS Computer Science" />
                <Row label="College" value="CCOG Main Campus" />
                <Row label="Duration" value="4 Years" />
                <Row label="Semester" value="Fall 2025" />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <StatusBadge variant="success">Active</StatusBadge>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-card shadow-soft p-6">
              <h2 className="font-semibold text-foreground mb-4">Upcoming Classes</h2>
              <div className="space-y-3">
                {classes.map((c) => (
                  <div key={c.subject} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.subject}</p>
                      <p className="text-xs text-muted-foreground">{c.time} · {c.instructor}</p>
                    </div>
                    <button className="text-xs border border-accent text-accent px-3 py-1.5 rounded-input hover:bg-accent/5 transition-colors flex items-center gap-1">
                      Join <ExternalLink size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-background border border-border rounded-card shadow-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground">Recent Notifications</h2>
              <button className="text-sm text-accent hover:underline">View all</button>
            </div>
            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.msg} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                  <div className="w-2 h-2 mt-1.5 bg-accent rounded-full shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">{n.msg}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-background border border-border rounded-card shadow-soft p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</p>
      {value}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
    </div>
  );
}
