import { StatusBadge } from "@/components/StatusBadge";
import { Download, TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react";

const payments = [
  { id: "PAY-001", student: "Ali Hassan", course: "BS CS", amount: "PKR 45,000", date: "Dec 1, 2025", method: "Bank Transfer", status: "success" as const, statusLabel: "Paid" },
  { id: "PAY-002", student: "Sara Ahmed", course: "MBA", amount: "PKR 80,000", date: "Nov 28, 2025", method: "Online", status: "success" as const, statusLabel: "Paid" },
  { id: "PAY-003", student: "Usman Khan", course: "BS Eng", amount: "PKR 55,000", date: "Nov 25, 2025", method: "Cash", status: "warning" as const, statusLabel: "Pending" },
  { id: "PAY-004", student: "Fatima Ali", course: "BBA", amount: "PKR 35,000", date: "Dec 2, 2025", method: "Online", status: "success" as const, statusLabel: "Paid" },
  { id: "PAY-005", student: "Ahmed Raza", course: "MS DS", amount: "PKR 60,000", date: "Dec 3, 2025", method: "Bank Transfer", status: "danger" as const, statusLabel: "Failed" },
  { id: "PAY-006", student: "Hira Nawaz", course: "BS Psych", amount: "PKR 30,000", date: "Dec 4, 2025", method: "Online", status: "warning" as const, statusLabel: "Pending" },
];

const kpis = [
  { label: "Total Revenue", value: "PKR 1.2M", icon: DollarSign, color: "border-l-accent" },
  { label: "This Month", value: "PKR 305K", icon: TrendingUp, color: "border-l-success" },
  { label: "Pending", value: "PKR 85K", icon: Clock, color: "border-l-warning" },
  { label: "Collected", value: "4 Payments", icon: CheckCircle, color: "border-l-primary" },
];

export default function PaymentsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Payments</h2>
          <p className="text-sm text-muted-foreground mt-1">Fee collection overview</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
          <Download size={14} /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <div key={k.label} className={`bg-background border border-border rounded-card shadow-soft p-4 border-l-4 ${k.color}`}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k.label}</p>
              <k.icon size={14} className="text-muted-foreground" />
            </div>
            <p className="text-lg font-bold text-foreground tabular-nums">{k.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">ID</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Student</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden md:table-cell">Course</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden lg:table-cell">Method</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden lg:table-cell">Date</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-surface transition-colors">
                  <td className="px-6 py-3 text-muted-foreground font-mono text-xs">{p.id}</td>
                  <td className="px-6 py-3 font-medium text-foreground">{p.student}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{p.course}</td>
                  <td className="px-6 py-3 font-semibold text-foreground">{p.amount}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden lg:table-cell">{p.method}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden lg:table-cell">{p.date}</td>
                  <td className="px-6 py-3"><StatusBadge variant={p.status}>{p.statusLabel}</StatusBadge></td>
                  <td className="px-6 py-3">
                    <button className="p-1.5 hover:bg-surface rounded-input text-muted-foreground hover:text-foreground transition-colors">
                      <Download size={14} />
                    </button>
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
