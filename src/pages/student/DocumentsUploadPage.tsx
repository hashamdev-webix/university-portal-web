import { useState } from "react";
import { Upload, CheckCircle, Clock, XCircle, FileText, Trash2 } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

type DocStatus = "verified" | "pending" | "rejected" | "not_uploaded";

interface Doc {
  name: string;
  required: boolean;
  status: DocStatus;
  file?: string;
  size?: string;
}

const initialDocs: Doc[] = [
  { name: "CNIC / ID Card Copy", required: true, status: "verified", file: "cnic_copy.pdf", size: "1.2 MB" },
  { name: "Matric Certificate", required: true, status: "verified", file: "matric_cert.pdf", size: "2.4 MB" },
  { name: "Intermediate Certificate", required: true, status: "pending", file: "inter_cert.pdf", size: "3.1 MB" },
  { name: "Passport Size Photo", required: true, status: "not_uploaded" },
  { name: "Domicile Certificate", required: true, status: "not_uploaded" },
  { name: "Character Certificate", required: false, status: "rejected", file: "char_cert.pdf", size: "0.8 MB" },
];

const statusConfig: Record<DocStatus, { label: string; variant: "success" | "warning" | "danger" | "info"; icon: React.ElementType }> = {
  verified: { label: "Verified", variant: "success", icon: CheckCircle },
  pending: { label: "Under Review", variant: "warning", icon: Clock },
  rejected: { label: "Rejected", variant: "danger", icon: XCircle },
  not_uploaded: { label: "Not Uploaded", variant: "info", icon: Upload },
};

export default function DocumentsUploadPage() {
  const [docs, setDocs] = useState<Doc[]>(initialDocs);
  const [dragging, setDragging] = useState<string | null>(null);

  const handleUpload = (docName: string) => {
    setDocs((prev) =>
      prev.map((d) =>
        d.name === docName
          ? { ...d, status: "pending", file: `${docName.toLowerCase().replace(/ /g, "_")}.pdf`, size: "1.5 MB" }
          : d
      )
    );
  };

  const handleRemove = (docName: string) => {
    setDocs((prev) =>
      prev.map((d) => (d.name === docName ? { ...d, status: "not_uploaded", file: undefined, size: undefined } : d))
    );
  };

  const uploaded = docs.filter((d) => d.status !== "not_uploaded").length;

  return (
    <div className="max-w-3xl">
      {/* Progress */}
      <div className="bg-background border border-border rounded-card shadow-soft p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-foreground">Upload Progress</p>
          <p className="text-sm font-bold text-foreground">{uploaded} / {docs.length}</p>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${(uploaded / docs.length) * 100}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mt-2">{docs.filter((d) => d.required && d.status === "not_uploaded").length} required documents remaining</p>
      </div>

      {/* Document List */}
      <div className="space-y-3">
        {docs.map((doc) => {
          const cfg = statusConfig[doc.status];
          const Icon = cfg.icon;
          return (
            <div
              key={doc.name}
              className={`bg-background border rounded-card p-4 transition-all ${
                dragging === doc.name ? "border-accent bg-accent/5" : "border-border"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragging(doc.name); }}
              onDragLeave={() => setDragging(null)}
              onDrop={(e) => { e.preventDefault(); setDragging(null); handleUpload(doc.name); }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-9 h-9 rounded-input flex items-center justify-center shrink-0 ${
                    doc.status === "verified" ? "bg-success/10" :
                    doc.status === "pending" ? "bg-warning/10" :
                    doc.status === "rejected" ? "bg-destructive/10" :
                    "bg-surface"
                  }`}>
                    {doc.file ? <FileText size={16} className="text-accent" /> : <Upload size={16} className="text-muted-foreground" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {doc.name}
                      {doc.required && <span className="text-destructive ml-1">*</span>}
                    </p>
                    {doc.file ? (
                      <p className="text-xs text-muted-foreground">{doc.file} · {doc.size}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">PDF, JPG, PNG · Max 5MB</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <StatusBadge variant={cfg.variant}>
                    <Icon size={10} className="mr-1" />
                    {cfg.label}
                  </StatusBadge>
                  {doc.status === "not_uploaded" || doc.status === "rejected" ? (
                    <label className="cursor-pointer px-3 py-1.5 bg-primary text-primary-foreground rounded-input text-xs font-medium hover:opacity-90 transition-all">
                      Upload
                      <input type="file" className="hidden" onChange={() => handleUpload(doc.name)} accept=".pdf,.jpg,.png" />
                    </label>
                  ) : doc.status === "pending" ? (
                    <button onClick={() => handleRemove(doc.name)} className="p-1.5 hover:bg-destructive/10 rounded-input text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 size={14} />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        You can also drag & drop files onto each document slot
      </p>
    </div>
  );
}
