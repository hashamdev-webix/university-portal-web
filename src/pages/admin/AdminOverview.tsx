import { TrendingUp, Clock, CheckCircle, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const kpis = [
  { label: "Total Applications", value: "248", trend: "+12%", color: "border-l-accent", icon: TrendingUp },
  { label: "Pending Review", value: "24", trend: null, color: "border-l-warning", icon: Clock },
  { label: "Approved Today", value: "8", trend: null, color: "border-l-success", icon: CheckCircle },
  { label: "Total Revenue", value: "PKR 1.2M", trend: "+8%", color: "border-l-purple-500", icon: TrendingUp },
];

const applications = [
  { name: "Ali Hassan", course: "BS CS", date: "Dec 1, 2025", status: "warning" as const, statusLabel: "Pending" },
  { name: "Sara Ahmed", course: "MBA", date: "Nov 28, 2025", status: "success" as const, statusLabel: "Approved" },
  { name: "Usman Khan", course: "BS Eng", date: "Nov 25, 2025", status: "danger" as const, statusLabel: "Rejected" },
  { name: "Fatima Ali", course: "BBA", date: "Dec 2, 2025", status: "info" as const, statusLabel: "Under Review" },
  { name: "Ahmed Raza", course: "MS DS", date: "Dec 3, 2025", status: "warning" as const, statusLabel: "Pending" },
];

const pendingDocs = ["Ayesha Malik", "Bilal Shah", "Hira Nawaz", "Zain Abbas", "Maira Tariq"];

export default function AdminOverview() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className={`bg-background border border-border rounded-card shadow-soft p-5 border-l-4 ${k.color}`}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k.label}</p>
              <k.icon size={16} className="text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground tabular-nums">{k.value}</p>
            {k.trend && (
              <p className="text-xs text-success mt-1 flex items-center gap-1">
                <ArrowUpRight size={12} /> {k.trend}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3 bg-background border border-border rounded-card shadow-soft overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Applications Overview</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Student</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Course</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.name} className="border-b border-border hover:bg-surface transition-colors">
                    <td className="px-6 py-3 font-medium text-foreground">{a.name}</td>
                    <td className="px-6 py-3 text-muted-foreground">{a.course}</td>
                    <td className="px-6 py-3 text-muted-foreground hidden sm:table-cell">{a.date}</td>
                    <td className="px-6 py-3"><StatusBadge variant={a.status}>{a.statusLabel}</StatusBadge></td>
                    <td className="px-6 py-3">
                      <button className="text-xs border border-accent text-accent px-3 py-1 rounded-input hover:bg-accent/5 transition-colors">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-2 bg-background border border-border rounded-card shadow-soft p-6">
          <h2 className="font-semibold text-foreground mb-4">Application Breakdown</h2>
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full border-8 border-success relative flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">248</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { color: "bg-success", label: "Approved", pct: "45%" },
              { color: "bg-warning", label: "Pending", pct: "30%" },
              { color: "bg-destructive", label: "Rejected", pct: "15%" },
              { color: "bg-accent", label: "Under Review", pct: "10%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
                <span className="font-medium text-foreground">{item.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background border border-border rounded-card shadow-soft p-6">
        <h2 className="font-semibold text-foreground mb-4">Pending Documents</h2>
        <div className="space-y-3">
          {pendingDocs.map((name) => (
            <div key={name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-sm font-medium">{name[0]}</span>
                </div>
                <span className="text-sm text-foreground">{name}</span>
              </div>
              <button className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-input hover:opacity-90 transition-all">Verify</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
