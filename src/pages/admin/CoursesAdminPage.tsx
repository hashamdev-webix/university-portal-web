import { useState } from "react";
import { Plus, Edit2, Trash2, Clock, Users } from "lucide-react";

const courses = [
  { id: 1, name: "BS Computer Science", category: "Technology", duration: "4 Years", seats: 60, enrolled: 54, fee: "PKR 45,000", color: "from-primary to-accent" },
  { id: 2, name: "MBA Business Administration", category: "Business", duration: "2 Years", seats: 40, enrolled: 38, fee: "PKR 80,000", color: "from-amber-500 to-orange-500" },
  { id: 3, name: "BS Engineering", category: "Engineering", duration: "4 Years", seats: 50, enrolled: 45, fee: "PKR 55,000", color: "from-emerald-500 to-teal-500" },
  { id: 4, name: "BBA", category: "Business", duration: "4 Years", seats: 45, enrolled: 30, fee: "PKR 35,000", color: "from-purple-500 to-pink-500" },
  { id: 5, name: "MS Data Science", category: "Technology", duration: "2 Years", seats: 30, enrolled: 22, fee: "PKR 60,000", color: "from-cyan-500 to-blue-500" },
  { id: 6, name: "BS Psychology", category: "Social Sciences", duration: "4 Years", seats: 35, enrolled: 28, fee: "PKR 30,000", color: "from-rose-500 to-red-500" },
];

export default function CoursesAdminPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Courses</h2>
          <p className="text-sm text-muted-foreground mt-1">{courses.length} programs available</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex border border-border rounded-input overflow-hidden">
            <button onClick={() => setView("grid")} className={`px-3 py-1.5 text-xs transition-colors ${view === "grid" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-surface"}`}>Grid</button>
            <button onClick={() => setView("list")} className={`px-3 py-1.5 text-xs transition-colors ${view === "list" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-surface"}`}>List</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-input text-sm font-medium hover:opacity-90 transition-all">
            <Plus size={14} /> Add Course
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => {
            const pct = Math.round((c.enrolled / c.seats) * 100);
            return (
              <div key={c.id} className="bg-background border border-border rounded-card shadow-soft overflow-hidden hover:shadow-lift transition-shadow">
                <div className={`h-24 bg-gradient-to-br ${c.color} flex items-end p-4`}>
                  <span className="text-xs font-medium bg-background/20 backdrop-blur-sm text-white px-2 py-1 rounded-sm">{c.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-3">{c.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} />{c.duration}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{c.enrolled}/{c.seats}</span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Enrollment</span>
                      <span className="font-medium text-foreground">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-4">{c.fee}<span className="text-xs font-normal text-muted-foreground"> / sem</span></p>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 text-xs border border-border rounded-input py-1.5 hover:bg-surface transition-colors">
                      <Edit2 size={12} /> Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 text-xs border border-destructive/30 text-destructive rounded-input py-1.5 hover:bg-destructive/5 transition-colors">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Course</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden md:table-cell">Category</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden lg:table-cell">Duration</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Enrollment</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground hidden md:table-cell">Fee</th>
                <th className="text-left px-6 py-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border-b border-border hover:bg-surface transition-colors">
                  <td className="px-6 py-3 font-medium text-foreground">{c.name}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{c.category}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden lg:table-cell">{c.duration}</td>
                  <td className="px-6 py-3 text-muted-foreground">{c.enrolled}/{c.seats}</td>
                  <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{c.fee}</td>
                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-surface rounded-input text-muted-foreground hover:text-foreground"><Edit2 size={14} /></button>
                      <button className="p-1.5 hover:bg-destructive/10 rounded-input text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
