import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, ClipboardList, Users, BookOpen, DollarSign, FolderOpen, Award, Settings,
  LogOut, Menu, Bell, Search, TrendingUp, Clock, CheckCircle, ArrowUpRight
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin", badge: null },
  { label: "Applications", icon: ClipboardList, to: "/admin/applications", badge: "24" },
  { label: "Students", icon: Users, to: "/admin/students", badge: null },
  { label: "Courses", icon: BookOpen, to: "/admin/courses", badge: null },
  { label: "Payments", icon: DollarSign, to: "/admin/payments", badge: null },
  { label: "Documents", icon: FolderOpen, to: "/admin/documents", badge: null },
  { label: "Offer Letters", icon: Award, to: "/admin/offers", badge: null },
  { label: "Settings", icon: Settings, to: "/admin/settings", badge: null },
];

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

const pendingDocs = [
  "Ayesha Malik", "Bilal Shah", "Hira Nawaz", "Zain Abbas", "Maira Tariq"
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface">
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Dark Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] bg-admin-sidebar flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-admin-sidebar-foreground/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-input bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-admin-sidebar-active">CCOG Admin</span>
          </div>
        </div>

        <div className="p-4 border-b border-admin-sidebar-foreground/10">
          <p className="text-sm font-medium text-admin-sidebar-active">Admin Panel</p>
          <StatusBadge variant="info" className="mt-1">Super Admin</StatusBadge>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-input text-sm transition-colors ${
                  active ? "bg-accent/20 text-admin-sidebar-active font-medium" : "text-admin-sidebar-foreground hover:text-admin-sidebar-active hover:bg-admin-sidebar-foreground/5"
                }`}
              >
                <span className="flex items-center gap-3">
                  <item.icon size={18} />
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded-sm font-medium">{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-admin-sidebar-foreground/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-admin-sidebar-foreground/20 flex items-center justify-center">
            <span className="text-admin-sidebar-active text-sm font-medium">D</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-admin-sidebar-active">Dr. Ahmed</p>
          </div>
          <Link to="/" className="text-admin-sidebar-foreground hover:text-destructive transition-colors">
            <LogOut size={16} />
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-background flex items-center px-4 sm:px-8 gap-4 shrink-0">
          <button className="lg:hidden p-2 hover:bg-surface rounded-input" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <h1 className="font-semibold text-foreground hidden sm:block">Dashboard Overview</h1>
          <div className="flex-1 max-w-md ml-auto">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search..." className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-input bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
          </div>
          <button className="relative p-2 hover:bg-surface rounded-input">
            <Bell size={18} className="text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {/* KPIs */}
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

          {/* Table + Stats */}
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
                <LegendItem color="bg-success" label="Approved" pct="45%" />
                <LegendItem color="bg-warning" label="Pending" pct="30%" />
                <LegendItem color="bg-destructive" label="Rejected" pct="15%" />
                <LegendItem color="bg-accent" label="Under Review" pct="10%" />
              </div>
            </div>
          </div>

          {/* Pending Docs */}
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
        </main>
      </div>
    </div>
  );
}

function LegendItem({ color, label, pct }: { color: string; label: string; pct: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-sm ${color}`} />
        <span className="text-muted-foreground">{label}</span>
      </div>
      <span className="font-medium text-foreground">{pct}</span>
    </div>
  );
}
