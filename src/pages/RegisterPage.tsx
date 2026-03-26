import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendar, FaMapMarkerAlt, FaIdCard, FaArrowLeft, FaGraduationCap } from "react-icons/fa";

function InputField({ icon: Icon, label, type = "text", value, onChange, placeholder }: {
  icon: React.ElementType; label: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative mt-1.5">
        <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-9 pr-4 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "",
    dob: "", gender: "", city: "", cnic: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const strengthLevel = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3;
  const strengthColors = ["bg-border", "bg-destructive", "bg-warning", "bg-success"];
  const strengthLabels = ["", "Weak", "Medium", "Strong"];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Brand */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[45%] bg-gradient-to-br from-primary to-accent relative overflow-hidden items-center justify-center p-8 xl:p-12">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-input bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FaGraduationCap size={22} className="text-white" />
            </div>
            <span className="font-black text-2xl xl:text-3xl text-white">CCOG</span>
          </div>
          <h2 className="text-2xl xl:text-3xl font-extrabold text-white leading-tight">Join CCOG Today</h2>
          <p className="mt-4 text-white/60 text-sm xl:text-base max-w-sm mx-auto">
            Create your account and start your admission journey.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 min-h-screen lg:min-h-0">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-input bg-primary flex items-center justify-center">
              <FaGraduationCap size={16} className="text-white" />
            </div>
            <span className="font-black text-xl text-foreground">CCOG</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-5">
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 1 ? "bg-accent" : "bg-border"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 2 ? "bg-accent" : "bg-border"}`} />
          </div>

          {step === 1 ? (
            <>
              <h1 className="text-xl sm:text-2xl font-extrabold text-foreground">Create Account</h1>
              <p className="text-muted-foreground text-sm mt-1">Step 1 of 2 — Account details</p>
              <form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <InputField icon={FaUser} label="Full Name" value={form.name} onChange={(v) => update("name", v)} placeholder="Ali Hassan" />
                <InputField icon={FaEnvelope} label="Email Address" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
                <InputField icon={FaPhone} label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+92 300 1234567" />
                <div>
                  <InputField icon={FaLock} label="Password" type="password" value={form.password} onChange={(v) => update("password", v)} placeholder="••••••••" />
                  {form.password && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 flex gap-1">
                        {[1, 2, 3].map((l) => (
                          <div key={l} className={`h-1 flex-1 rounded-full ${l <= strengthLevel ? strengthColors[strengthLevel] : "bg-border"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground font-semibold">{strengthLabels[strengthLevel]}</span>
                    </div>
                  )}
                </div>
                <InputField icon={FaLock} label="Confirm Password" type="password" value={form.confirmPassword} onChange={(v) => update("confirmPassword", v)} placeholder="••••••••" />
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-input font-bold hover:opacity-90 transition-all active:scale-[0.98] text-sm mt-2">
                  Next Step →
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-xl sm:text-2xl font-extrabold text-foreground">Personal Details</h1>
              <p className="text-muted-foreground text-sm mt-1">Step 2 of 2 — Personal information</p>
              <form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
                <InputField icon={FaCalendar} label="Date of Birth" type="date" value={form.dob} onChange={(v) => update("dob", v)} />
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gender</label>
                  <select
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                    className="w-full mt-1.5 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <InputField icon={FaMapMarkerAlt} label="City" value={form.city} onChange={(v) => update("city", v)} placeholder="Islamabad" />
                <InputField icon={FaIdCard} label="CNIC / ID Number" value={form.cnic} onChange={(v) => update("cnic", v)} placeholder="12345-1234567-1" />
                <div className="flex gap-3 mt-2">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border border-border rounded-input font-bold text-foreground hover:bg-surface transition-colors flex items-center justify-center gap-2 text-sm">
                    <FaArrowLeft size={13} /> Back
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-primary text-primary-foreground rounded-input font-bold hover:opacity-90 transition-all active:scale-[0.98] text-sm">
                    Create Account
                  </button>
                </div>
              </form>
            </>
          )}

          <p className="text-center text-sm text-muted-foreground mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-bold hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
