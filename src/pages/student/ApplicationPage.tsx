import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { CheckCircle, Clock, Circle, FileText, Send } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { label: "Personal Info", status: "done" },
  { label: "Course Selected", status: "done" },
  { label: "Documents Uploaded", status: "current" },
  { label: "Fee Paid", status: "pending" },
  { label: "Under Review", status: "pending" },
];

const courses = [
  { name: "BS Computer Science", duration: "4 Years", fee: "PKR 45,000", mode: "Online" },
  { name: "MBA Business", duration: "2 Years", fee: "PKR 80,000", mode: "Offline" },
  { name: "BS Engineering", duration: "4 Years", fee: "PKR 55,000", mode: "Offline" },
  { name: "MS Data Science", duration: "2 Years", fee: "PKR 60,000", mode: "Online" },
];

export default function ApplicationPage() {
  const [selected, setSelected] = useState("BS Computer Science");
  const [submitted, setSubmitted] = useState(true);

  return (
    <div className="max-w-3xl">
      {/* Status Banner */}
      <div className="bg-warning/10 border border-warning/30 rounded-card p-4 mb-6 flex items-center gap-3">
        <Clock size={18} className="text-warning shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">Application Under Review</p>
          <p className="text-xs text-muted-foreground">Submitted on Dec 1, 2025 · Application ID: APP-2025-001</p>
        </div>
        <StatusBadge variant="warning" className="ml-auto">Pending</StatusBadge>
      </div>

      {/* Progress Steps */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-5">Application Progress</h2>
        <div className="flex items-center justify-between relative">
          <div className="absolute top-4 left-0 right-0 h-px bg-border z-0" />
          {steps.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 z-10 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                s.status === "done" ? "bg-success text-white" :
                s.status === "current" ? "bg-warning text-white" :
                "bg-background border-2 border-border"
              }`}>
                {s.status === "done" ? <CheckCircle size={16} /> :
                 s.status === "current" ? <Clock size={16} /> :
                 <Circle size={14} className="text-border" />}
              </div>
              <p className={`text-xs text-center hidden sm:block ${
                s.status === "done" ? "text-foreground font-medium" :
                s.status === "current" ? "text-warning font-medium" :
                "text-muted-foreground"
              }`}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Selection */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-4">
          {submitted ? "Selected Course" : "Choose Your Course"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {courses.map((c) => (
            <div
              key={c.name}
              onClick={() => !submitted && setSelected(c.name)}
              className={`border rounded-card p-4 transition-all ${
                selected === c.name
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50 cursor-pointer"
              } ${submitted ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.duration} · {c.mode}</p>
                  <p className="text-sm font-bold text-foreground mt-2">{c.fee}<span className="text-xs font-normal text-muted-foreground">/sem</span></p>
                </div>
                {selected === c.name && <CheckCircle size={18} className="text-accent shrink-0" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Details */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-4">Application Details</h2>
        <div className="space-y-3 text-sm">
          {[
            { label: "Full Name", value: "Ali Hassan" },
            { label: "Email", value: "ali@email.com" },
            { label: "Phone", value: "+92 300 1234567" },
            { label: "CNIC", value: "12345-1234567-1" },
            { label: "City", value: "Islamabad" },
            { label: "Applied Course", value: selected },
            { label: "Application Date", value: "Dec 1, 2025" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between py-2 border-b border-border last:border-0">
              <span className="text-muted-foreground">{r.label}</span>
              <span className="text-foreground font-medium">{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-input font-medium hover:opacity-90 transition-all"
        >
          <Send size={16} /> Submit Application
        </button>
      )}

      {submitted && (
        <div className="flex gap-3">
          <Link to="/dashboard/documents" className="flex-1 text-center py-2.5 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
            Upload Documents
          </Link>
          <Link to="/dashboard/payments" className="flex-1 text-center py-2.5 border border-border text-foreground rounded-input text-sm font-medium hover:bg-surface transition-colors">
            Pay Fees
          </Link>
        </div>
      )}
    </div>
  );
}
