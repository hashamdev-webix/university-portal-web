import { StatusBadge } from "@/components/StatusBadge";
import { FileText, CheckCircle, XCircle, Eye, Clock } from "lucide-react";

const documents = [
  { id: 1, student: "Ali Hassan", type: "CNIC Copy", uploaded: "Dec 1, 2025", size: "1.2 MB", status: "warning" as const, statusLabel: "Pending" },
  { id: 2, student: "Ali Hassan", type: "Matric Certificate", uploaded: "Dec 1, 2025", size: "2.4 MB", status: "success" as const, statusLabel: "Verified" },
  { id: 3, student: "Sara Ahmed", type: "CNIC Copy", uploaded: "Nov 28, 2025", size: "0.9 MB", status: "success" as const, statusLabel: "Verified" },
  { id: 4, student: "Sara Ahmed", type: "Intermediate Certificate", uploaded: "Nov 28, 2025", size: "3.1 MB", status: "success" as const, statusLabel: "Verified" },
  { id: 5, student: "Usman Khan", type: "CNIC Copy", uploaded: "Nov 25, 2025", size: "1.1 MB", status: "danger" as const, statusLabel: "Rejected" },
  { id: 6, student: "Fatima Ali", type: "Matric Certificate", uploaded: "Dec 2, 2025", size: "2.8 MB", status: "warning" as const, statusLabel: "Pending" },
  { id: 7, student: "Ahmed Raza", type: "CNIC Copy", uploaded: "Dec 3, 2025", size: "1.0 MB", status: "info" as const, statusLabel: "Under Review" },
  { id: 8, student: "Hira Nawaz", type: "Intermediate Certificate", uploaded: "Dec 4, 2025", size: "2.2 MB", status: "warning" as const, statusLabel: "Pending" },
];

const summary = [
  { label: "Total Documents", value: "48", icon: FileText, color: "border-l-accent" },
  { label: "Verified", value: "32", icon: CheckCircle, color: "border-l-success" },
  { label: "Pending", value: "12", icon: Clock, color: "border-l-warning" },
  { label: "Rejected", value: "4", icon: XCircle, color: "border-l-destructive" },
];

export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Documents</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage and verify student documents</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {summary.map((s) => (
          <div key={s.label} className={`bg-background border border-border rounded-card shadow-soft p-4 border-l-4 ${s.color}`}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <s.icon size={14} className="text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Document Queue</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Student</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Document Type</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden md:table-cell">Uploaded</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden lg:table-cell">Size</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((d) => (
                <tr key={d.id} className="border-b border-border hover:bg-surface transition-colors">
                  <td className="px-6 py-3 font-medium text-foreground">{d.student}</td>
                  <td className="px-6 py-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FileText size={14} className="text-accent" />
                      {d.type}
                    </div>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{d.uploaded}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden lg:table-cell">{d.size}</td>
                  <td className="px-6 py-3"><StatusBadge variant={d.status}>{d.statusLabel}</StatusBadge></td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-surface rounded-input text-muted-foreground hover:text-foreground transition-colors" title="View">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 hover:bg-success/10 rounded-input text-muted-foreground hover:text-success transition-colors" title="Verify">
                        <CheckCircle size={14} />
                      </button>
                      <button className="p-1.5 hover:bg-destructive/10 rounded-input text-muted-foreground hover:text-destructive transition-colors" title="Reject">
                        <XCircle size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
