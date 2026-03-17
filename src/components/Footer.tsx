import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-input bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">CCOG</span>
            </div>
            <p className="text-sm opacity-60 max-w-xs">
              Your gateway to quality education. Apply, track, and manage your college admission journey seamlessly.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Courses</Link></li>
              <li><Link to="/register" className="hover:opacity-100 transition-opacity">Apply Now</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>info@ccog.edu</li>
              <li>+92 300 1234567</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm opacity-40">
          © 2025 CCOG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
