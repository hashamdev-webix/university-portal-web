import { useState } from "react";
import { Search, UserPlus, Mail, Phone } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const students = [
  { id: "STU-001", name: "Ali Hassan", email: "ali@email.com", phone: "+92 300 1111111", course: "BS Computer Science", year: "1st Year", status: "success" as const, statusLabel: "Active" },
  { id: "STU-002", name: "Sara Ahmed", email: "sara@email.com", phone: "+92 300 2222222", course: "MBA", year: "2nd Year", status: "success" as const, statusLabel: "Active" },
  { id: "STU-003", name: "Usman Khan", email: "usman@email.com", phone: "+92 300 3333333", course: "BS Engineering", year: "3rd Year", status: "warning" as const, statusLabel: "On Leave" },
  { id: "STU-004", name: "Fatima Ali", email: "fatima@email.com", phone: "+92 300 4444444", course: "BBA", year: "1st Year", status: "success" as const, statusLabel: "Active" },
  { id: "STU-005", name: "Ahmed Raza", email: "ahmed@email.com", phone: "+92 300 5555555", course: "MS Data Science", year: "1st Year", status: "info" as const, statusLabel: "New" },
  { id: "STU-006", name: "Hira Nawaz", email: "hira@email.com", phone: "+92 300 6666666", course: "BS Psychology", year: "2nd Year", status: "success" as const, statusLabel: "Active" },
];

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Students</h2>
          <p className="text-sm text-muted-foreground mt-1">{students.length} enrolled students</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
          <UserPlus size={14} /> Add Student
        </button>
      </div>

      <div className="bg-background border border-border rounded-card shadow-soft p-4 mb-6">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <div key={s.id} className="bg-background border border-border rounded-card shadow-soft p-5 hover:shadow-lift transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{s.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{s.id}</p>
                </div>
              </div>
              <StatusBadge variant={s.status}>{s.statusLabel}</StatusBadge>
            </div>
            <p className="text-sm text-foreground font-medium mb-1">{s.course}</p>
            <p className="text-xs text-muted-foreground mb-3">{s.year}</p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Mail size={12} />{s.email}</div>
              <div className="flex items-center gap-2"><Phone size={12} />{s.phone}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-xs border border-border rounded-input py-1.5 hover:bg-surface transition-colors">View Profile</button>
              <button className="flex-1 text-xs bg-accent/10 text-accent rounded-input py-1.5 hover:bg-accent/20 transition-colors">Message</button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-3 text-center py-12 text-muted-foreground text-sm">No students found</div>
        )}
      </div>
    </div>
  );
}
