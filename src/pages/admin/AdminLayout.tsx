import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard, ClipboardList, Users, BookOpen, DollarSign,
  FolderOpen, Award, Settings, LogOut, Menu, Bell, Search
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin" },
  { label: "Applications", icon: ClipboardList, to: "/admin/applications", badge: "24" },
  { label: "Students", icon: Users, to: "/admin/students" },
  { label: "Courses", icon: BookOpen, to: "/admin/courses" },
  { label: "Payments", icon: DollarSign, to: "/admin/payments" },
  { label: "Documents", icon: FolderOpen, to: "/admin/documents" },
  { label: "Offer Letters", icon: Award, to: "/admin/offers" },
  { label: "Settings", icon: Settings, to: "/admin/settings" },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentPage = sidebarItems.find((i) => i.to === location.pathname)?.label ?? "Dashboard";

  return (
    <div className="flex h-screen bg-surface">
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

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

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-background flex items-center px-4 sm:px-8 gap-4 shrink-0">
          <button className="lg:hidden p-2 hover:bg-surface rounded-input" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <h1 className="font-semibold text-foreground hidden sm:block">{currentPage}</h1>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
}
