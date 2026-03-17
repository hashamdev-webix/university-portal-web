import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Calendar, MapPin, CreditCard, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "",
    dob: "", gender: "", city: "", cnic: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const strengthLevel = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3;
  const strengthColors = ["bg-border", "bg-destructive", "bg-warning", "bg-success"];
  const strengthLabels = ["", "Weak", "Medium", "Strong"];

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-accent relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-input bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold">C</span>
            </div>
            <span className="font-bold text-2xl text-primary-foreground">CCOG</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground leading-tight">Join CCOG Today</h2>
          <p className="mt-4 text-primary-foreground/60 max-w-sm mx-auto">
            Create your account and start your admission journey.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-input bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-xl text-foreground">CCOG</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-accent" : "bg-border"}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-accent" : "bg-border"}`} />
          </div>

          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
              <p className="text-muted-foreground text-sm mt-1">Step 1 of 2 — Account details</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <InputField icon={User} label="Full Name" value={form.name} onChange={(v) => update("name", v)} placeholder="Ali Hassan" />
                <InputField icon={Mail} label="Email Address" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
                <InputField icon={Phone} label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+92 300 1234567" />
                <div>
                  <InputField icon={Lock} label="Password" type="password" value={form.password} onChange={(v) => update("password", v)} placeholder="••••••••" />
                  {form.password && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 flex gap-1">
                        {[1, 2, 3].map((l) => (
                          <div key={l} className={`h-1 flex-1 rounded-full ${l <= strengthLevel ? strengthColors[strengthLevel] : "bg-border"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{strengthLabels[strengthLevel]}</span>
                    </div>
                  )}
                </div>
                <InputField icon={Lock} label="Confirm Password" type="password" value={form.confirmPassword} onChange={(v) => update("confirmPassword", v)} placeholder="••••••••" />
                <button type="submit" className="w-full py-2.5 bg-primary text-primary-foreground rounded-input font-medium hover:opacity-90 transition-all active:scale-[0.98] mt-2">
                  Next Step
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-foreground">Personal Details</h1>
              <p className="text-muted-foreground text-sm mt-1">Step 2 of 2 — Personal information</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <InputField icon={Calendar} label="Date of Birth" type="date" value={form.dob} onChange={(v) => update("dob", v)} />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Gender</label>
                  <select
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                    className="w-full mt-1 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <InputField icon={MapPin} label="City" value={form.city} onChange={(v) => update("city", v)} placeholder="Islamabad" />
                <InputField icon={CreditCard} label="CNIC / ID Number" value={form.cnic} onChange={(v) => update("cnic", v)} placeholder="12345-1234567-1" />
                <div className="flex gap-3 mt-2">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-2.5 border border-border rounded-input font-medium text-foreground hover:bg-surface transition-colors flex items-center justify-center gap-2">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-input font-medium hover:opacity-90 transition-all active:scale-[0.98]">
                    Create Account
                  </button>
                </div>
              </form>
            </>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon: Icon, label, type = "text", value, onChange, placeholder }: {
  icon: React.ElementType; label: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative mt-1">
        <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </div>
    </div>
  );
}
