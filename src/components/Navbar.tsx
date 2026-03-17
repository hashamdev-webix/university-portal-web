import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Dashboard", to: "/dashboard" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-input bg-primary flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-black text-sm">C</span>
            </div>
            <span className="font-black text-xl tracking-tight text-foreground">CCOG</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium border border-border rounded-input text-foreground hover:bg-surface transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-input hover:opacity-90 transition-all active:scale-[0.98]"
            >
              Apply Now
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-2 text-sm font-medium border border-border rounded-input">
              Login
            </Link>
            <Link to="/register" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-input">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
