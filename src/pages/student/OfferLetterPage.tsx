import { Award, Download, Mail, CheckCircle, Clock } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const isPending = false; // change to true to show pending state

export default function OfferLetterPage() {
  if (isPending) {
    return (
      <div className="max-w-2xl">
        <div className="bg-background border border-border rounded-card shadow-soft p-12 text-center">
          <Clock size={48} className="text-warning mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground">Offer Letter Pending</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-sm mx-auto">
            Your application is still under review. Once approved, your offer letter will appear here and be sent to your email.
          </p>
          <StatusBadge variant="warning" className="mt-4">Under Review</StatusBadge>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {/* Success Banner */}
      <div className="bg-success/10 border border-success/30 rounded-card p-4 mb-6 flex items-center gap-3">
        <CheckCircle size={18} className="text-success shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">Congratulations! Your offer letter is ready.</p>
          <p className="text-xs text-muted-foreground">Issued on Dec 5, 2025 · Valid until Jan 5, 2026</p>
        </div>
      </div>

      {/* Offer Letter Preview */}
      <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden mb-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 text-center">
          <div className="w-14 h-14 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
            <Award size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">CCOG University</h1>
          <p className="text-white/70 text-sm mt-1">Islamabad, Pakistan</p>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Official Document</p>
            <h2 className="text-2xl font-bold text-foreground">Offer Letter</h2>
            <p className="text-sm text-muted-foreground mt-1">Ref: OL-2025-001</p>
          </div>

          <p className="text-sm text-muted-foreground mb-6">December 5, 2025</p>

          <p className="text-sm text-foreground mb-4">Dear <span className="font-semibold">Ali Hassan</span>,</p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            We are pleased to offer you admission to <span className="text-foreground font-medium">CCOG University</span> for the program of <span className="text-foreground font-medium">BS Computer Science</span> commencing <span className="text-foreground font-medium">Fall 2025</span>.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            This offer is conditional upon verification of your original documents and payment of the semester fee. Please confirm your acceptance by <span className="text-foreground font-medium">January 5, 2026</span>.
          </p>

          {/* Details Table */}
          <div className="bg-surface rounded-card p-4 mb-6 space-y-2 text-sm">
            {[
              { label: "Student Name", value: "Ali Hassan" },
              { label: "Program", value: "BS Computer Science" },
              { label: "Duration", value: "4 Years (8 Semesters)" },
              { label: "Campus", value: "CCOG Main Campus, Islamabad" },
              { label: "Semester Fee", value: "PKR 45,000" },
              { label: "Start Date", value: "January 15, 2026" },
              { label: "Offer Valid Until", value: "January 5, 2026" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between py-1.5 border-b border-border last:border-0">
                <span className="text-muted-foreground">{r.label}</span>
                <span className="text-foreground font-medium">{r.value}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            We look forward to welcoming you to our institution. If you have any questions, please contact our admissions office.
          </p>

          <div className="border-t border-border pt-6 flex justify-between items-end">
            <div>
              <div className="w-32 h-px bg-foreground mb-1" />
              <p className="text-sm font-semibold text-foreground">Prof. Sara Khan</p>
              <p className="text-xs text-muted-foreground">Dean of Admissions</p>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xs text-center leading-tight">CCOG<br/>SEAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
          <Download size={16} /> Download PDF
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border text-foreground rounded-input text-sm font-medium hover:bg-surface transition-colors">
          <Mail size={16} /> Send to Email
        </button>
      </div>
    </div>
  );
}
