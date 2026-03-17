import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { FaSearch, FaClock, FaUsers, FaDesktop, FaMapMarkerAlt } from "react-icons/fa";

const filters = ["All", "Online", "Offline", "Engineering", "Business", "Computer Science", "Arts"];

const allCourses = [
  { name: "BS Computer Science", category: "Computer Science", duration: "4 Years", mode: "Online", seats: 45, fee: "PKR 45,000", color: "from-primary to-accent" },
  { name: "MBA Executive", category: "Business", duration: "2 Years", mode: "Offline", seats: 30, fee: "PKR 80,000", color: "from-amber-500 to-orange-500" },
  { name: "BS Software Engineering", category: "Engineering", duration: "4 Years", mode: "Online", seats: 50, fee: "PKR 50,000", color: "from-emerald-500 to-teal-500" },
  { name: "BBA Marketing", category: "Business", duration: "3 Years", mode: "Offline", seats: 25, fee: "PKR 35,000", color: "from-rose-500 to-pink-500" },
  { name: "MS Data Science", category: "Computer Science", duration: "2 Years", mode: "Online", seats: 20, fee: "PKR 60,000", color: "from-violet-500 to-purple-500" },
  { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", mode: "Offline", seats: 40, fee: "PKR 55,000", color: "from-cyan-500 to-blue-500" },
  { name: "Diploma Web Development", category: "Computer Science", duration: "1 Year", mode: "Online", seats: 60, fee: "PKR 25,000", color: "from-indigo-500 to-blue-600" },
  { name: "BS Accounting & Finance", category: "Business", duration: "3 Years", mode: "Offline", seats: 35, fee: "PKR 40,000", color: "from-teal-500 to-green-500" },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allCourses.filter((c) => {
    const matchFilter = activeFilter === "All" || c.category === activeFilter || c.mode === activeFilter;
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Explore Our Courses</h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">200+ programs across multiple disciplines</p>
          <div className="relative mt-4 sm:mt-6 max-w-2xl">
            <FaSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course name..."
              className="w-full pl-11 pr-4 py-2.5 sm:py-3 border border-border rounded-card text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        {/* Filters - scrollable on mobile */}
        <div className="flex gap-2 mb-5 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 sm:px-4 py-1.5 rounded-input text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          Showing {filtered.length} of {allCourses.length} courses
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((c) => (
            <div key={c.name} className="bg-background border border-border rounded-card shadow-soft overflow-hidden hover:shadow-lift transition-all">
              <div className={`h-20 sm:h-24 bg-gradient-to-br ${c.color} flex items-end p-3 sm:p-4`}>
                <span className="text-xs font-semibold bg-background/20 backdrop-blur-sm text-white px-2 py-1 rounded-sm">
                  {c.category}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-foreground text-sm sm:text-base">{c.name}</h3>
                <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
                  <FaMapMarkerAlt size={11} /> CCOG Campus
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><FaClock size={11} /> {c.duration}</span>
                  <span className="flex items-center gap-1"><FaDesktop size={11} /> {c.mode}</span>
                  <span className="flex items-center gap-1"><FaUsers size={11} /> {c.seats} seats</span>
                </div>
                <p className="mt-2 sm:mt-3 font-bold text-foreground text-sm">{c.fee}<span className="text-xs font-normal text-muted-foreground"> / semester</span></p>
                <div className="mt-3 sm:mt-4 flex gap-2">
                  <button className="flex-1 text-center py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground border border-border rounded-input transition-colors">
                    Details
                  </button>
                  <Link to="/register" className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded-input text-xs sm:text-sm font-semibold hover:opacity-90 transition-all">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">No courses found</div>
        )}
      </div>

      <Footer />
    </div>
  );
}
