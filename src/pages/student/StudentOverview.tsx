import { CheckCircle, Clock, Circle, ExternalLink } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Link } from "react-router-dom";

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

export default function StudentOverview() {
  return (
    <>
      <p className="text-muted-foreground mb-6">Good Morning, Ali 👋 — here's your overview</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-background border border-border rounded-card shadow-soft p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Application Status</p>
          <StatusBadge variant="warning">Under Review</StatusBadge>
        </div>
        <div className="bg-background border border-border rounded-card shadow-soft p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Documents Uploaded</p>
          <p className="text-lg font-bold text-foreground">3 / 5</p>
          <div className="mt-1 h-1.5 bg-border rounded-full">
            <div className="h-full bg-accent rounded-full" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="bg-background border border-border rounded-card shadow-soft p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Fee Status</p>
          <StatusBadge variant="success">Paid</StatusBadge>
        </div>
        <div className="bg-background border border-border rounded-card shadow-soft p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Offer Letter</p>
          <StatusBadge variant="info">Pending</StatusBadge>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-6">Application Progress</h2>
        <div className="space-y-4">
          {timelineSteps.map((s, i) => (
            <div key={s.label} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                {s.status === "done" ? <CheckCircle size={20} className="text-success" /> :
                 s.status === "current" ? <Clock size={20} className="text-warning" /> :
                 <Circle size={20} className="text-border" />}
                {i < timelineSteps.length - 1 && (
                  <div className={`w-px h-6 mt-1 ${s.status === "done" ? "bg-success" : "bg-border"}`} />
                )}
              </div>
              <p className={`text-sm pt-0.5 ${s.status === "done" ? "text-foreground" : s.status === "current" ? "text-warning font-medium" : "text-muted-foreground"}`}>
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
            {[
              { label: "Course", value: "BS Computer Science" },
              { label: "College", value: "CCOG Main Campus" },
              { label: "Duration", value: "4 Years" },
              { label: "Semester", value: "Fall 2025" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between">
                <span className="text-muted-foreground">{r.label}</span>
                <span className="text-foreground font-medium">{r.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <StatusBadge variant="success">Active</StatusBadge>
            </div>
          </div>
          <Link to="/dashboard/application" className="mt-4 block text-center py-2 border border-accent text-accent rounded-input text-sm hover:bg-accent/5 transition-colors">
            View Application
          </Link>
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
                <Link to="/dashboard/classes" className="text-xs border border-accent text-accent px-3 py-1.5 rounded-input hover:bg-accent/5 transition-colors flex items-center gap-1">
                  Join <ExternalLink size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6">
        <h2 className="font-semibold text-foreground mb-4">Recent Notifications</h2>
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
    </>
  );
}
