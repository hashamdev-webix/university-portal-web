import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, XCircle } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const allApplications = [
  { id: "APP-001", name: "Ali Hassan", course: "BS Computer Science", date: "Dec 1, 2025", status: "warning" as const, statusLabel: "Pending", email: "ali@email.com" },
  { id: "APP-002", name: "Sara Ahmed", course: "MBA", date: "Nov 28, 2025", status: "success" as const, statusLabel: "Approved", email: "sara@email.com" },
  { id: "APP-003", name: "Usman Khan", course: "BS Engineering", date: "Nov 25, 2025", status: "danger" as const, statusLabel: "Rejected", email: "usman@email.com" },
  { id: "APP-004", name: "Fatima Ali", course: "BBA", date: "Dec 2, 2025", status: "info" as const, statusLabel: "Under Review", email: "fatima@email.com" },
  { id: "APP-005", name: "Ahmed Raza", course: "MS Data Science", date: "Dec 3, 2025", status: "warning" as const, statusLabel: "Pending", email: "ahmed@email.com" },
  { id: "APP-006", name: "Hira Nawaz", course: "BS Psychology", date: "Dec 4, 2025", status: "info" as const, statusLabel: "Under Review", email: "hira@email.com" },
  { id: "APP-007", name: "Bilal Shah", course: "BS Physics", date: "Dec 5, 2025", status: "warning" as const, statusLabel: "Pending", email: "bilal@email.com" },
  { id: "APP-008", name: "Ayesha Malik", course: "MBA", date: "Dec 6, 2025", status: "success" as const, statusLabel: "Approved", email: "ayesha@email.com" },
];

const filters = ["All", "Pending", "Approved", "Rejected", "Under Review"];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = allApplications.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.course.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === "All" || a.statusLabel === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Applications</h2>
          <p className="text-sm text-muted-foreground mt-1">{allApplications.length} total applications</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
          <Filter size={14} /> Export
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-background border border-border rounded-card shadow-soft p-4 mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or course..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 text-xs rounded-input font-medium transition-colors ${
                activeFilter === f ? "bg-accent text-accent-foreground" : "border border-border text-muted-foreground hover:bg-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">ID</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Student</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden md:table-cell">Course</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden lg:table-cell">Date</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-b border-border hover:bg-surface transition-colors">
                  <td className="px-6 py-3 text-muted-foreground font-mono text-xs">{a.id}</td>
                  <td className="px-6 py-3">
                    <p className="font-medium text-foreground">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.email}</p>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{a.course}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden lg:table-cell">{a.date}</td>
                  <td className="px-6 py-3"><StatusBadge variant={a.status}>{a.statusLabel}</StatusBadge></td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-surface rounded-input text-muted-foreground hover:text-foreground transition-colors" title="View">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 hover:bg-success/10 rounded-input text-muted-foreground hover:text-success transition-colors" title="Approve">
                        <CheckCircle size={14} />
                      </button>
                      <button className="p-1.5 hover:bg-destructive/10 rounded-input text-muted-foreground hover:text-destructive transition-colors" title="Reject">
                        <XCircle size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground text-sm">No applications found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
