import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  Home, FileText, Upload, CreditCard, Award, Video, Settings, LogOut, Menu, Bell
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

export default function StudentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[240px] bg-background border-r border-border flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-input bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg text-foreground">CCOG</span>
          </Link>
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
            const active = item.to === "/dashboard"
              ? location.pathname === "/dashboard"
              : location.pathname.startsWith(item.to);
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

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-background flex items-center px-4 sm:px-8 justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-surface rounded-input" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <h1 className="font-semibold text-foreground">
              {sidebarItems.find((i) =>
                i.to === "/dashboard" ? location.pathname === "/dashboard" : location.pathname.startsWith(i.to)
              )?.label ?? "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
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
          <Outlet />
        </main>
      </div>
    </div>
  );
}
