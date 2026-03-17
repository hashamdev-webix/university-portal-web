import { useState } from "react";
import { CreditCard, CheckCircle, Clock, Shield, Lock } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const history = [
  { id: "PAY-001", desc: "Admission Fee - Fall 2025", amount: "PKR 5,000", date: "Nov 20, 2025", status: "success" as const, label: "Paid" },
  { id: "PAY-002", desc: "Semester Fee - BS CS", amount: "PKR 45,000", date: "Dec 1, 2025", status: "success" as const, label: "Paid" },
];

export default function PaymentsStudentPage() {
  const [method, setMethod] = useState<"card" | "bank">("card");
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => { setPaying(false); setPaid(true); }, 2000);
  };

  return (
    <div className="max-w-3xl">
      {/* Fee Summary */}
      <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-4">Fee Summary</h2>
        <div className="space-y-2 text-sm">
          {[
            { label: "Semester Fee", amount: "PKR 45,000" },
            { label: "Registration Fee", amount: "PKR 2,000" },
            { label: "Library Fee", amount: "PKR 1,000" },
            { label: "Lab Fee", amount: "PKR 2,000" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between py-2 border-b border-border last:border-0">
              <span className="text-muted-foreground">{r.label}</span>
              <span className="text-foreground font-medium">{r.amount}</span>
            </div>
          ))}
          <div className="flex justify-between pt-2 font-bold text-foreground">
            <span>Total Due</span>
            <span className="text-primary">PKR 50,000</span>
          </div>
        </div>
      </div>

      {paid ? (
        <div className="bg-success/10 border border-success/30 rounded-card p-8 text-center mb-6">
          <CheckCircle size={48} className="text-success mx-auto mb-3" />
          <h3 className="font-bold text-foreground text-lg">Payment Successful!</h3>
          <p className="text-muted-foreground text-sm mt-1">Your payment of PKR 50,000 has been received.</p>
          <p className="text-xs text-muted-foreground mt-2">Transaction ID: TXN-2025-12345</p>
        </div>
      ) : (
        <div className="bg-background border border-border rounded-card shadow-soft p-6 mb-6">
          <h2 className="font-semibold text-foreground mb-4">Make Payment</h2>

          {/* Method Toggle */}
          <div className="flex gap-3 mb-5">
            <button
              onClick={() => setMethod("card")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-input border text-sm font-medium transition-colors ${method === "card" ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-surface"}`}
            >
              <CreditCard size={16} /> Card Payment
            </button>
            <button
              onClick={() => setMethod("bank")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-input border text-sm font-medium transition-colors ${method === "bank" ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-surface"}`}
            >
              <Shield size={16} /> Bank Transfer
            </button>
          </div>

          {method === "card" ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Card Number</label>
                <input placeholder="1234 5678 9012 3456" className="w-full mt-1 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiry</label>
                  <input placeholder="MM / YY" className="w-full mt-1 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CVV</label>
                  <input placeholder="•••" className="w-full mt-1 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cardholder Name</label>
                <input placeholder="Ali Hassan" className="w-full mt-1 px-3 py-2.5 border border-border rounded-input text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
          ) : (
            <div className="bg-surface rounded-card p-4 space-y-2 text-sm">
              <p className="font-medium text-foreground">Bank Transfer Details</p>
              {[
                { label: "Bank", value: "HBL Bank" },
                { label: "Account Title", value: "CCOG University" },
                { label: "Account No.", value: "0123-4567890-001" },
                { label: "IBAN", value: "PK36HABB0000000123456702" },
                { label: "Amount", value: "PKR 50,000" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="text-foreground font-medium">{r.value}</span>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handlePay}
            disabled={paying}
            className="w-full mt-5 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-input font-medium hover:opacity-90 transition-all disabled:opacity-60"
          >
            <Lock size={16} />
            {paying ? "Processing..." : `Pay PKR 50,000`}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
            <Shield size={12} /> Secured by SSL encryption
          </p>
        </div>
      )}

      {/* History */}
      <div className="bg-background border border-border rounded-card shadow-soft overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Payment History</h3>
        </div>
        <div className="divide-y divide-border">
          {history.map((p) => (
            <div key={p.id} className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{p.desc}</p>
                <p className="text-xs text-muted-foreground">{p.id} · {p.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{p.amount}</p>
                <StatusBadge variant={p.status}>{p.label}</StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
