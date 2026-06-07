"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";

type NotificationPreference = {
  id: string;
  label: string;
  enabled: boolean;
};

export default function SettingsTab() {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [notificationPreferences, setNotificationPreferences] = useState<NotificationPreference[]>([
    { id: "critical_warnings", label: "Email me critical cash flow warnings", enabled: true },
    { id: "weekly_digest", label: "Weekly Radar intelligence digest", enabled: true },
    { id: "tender_alerts", label: "New tender alerts matching my profile", enabled: false },
  ]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleToggle = (id: string) => {
    setNotificationPreferences((current) =>
      current.map((pref) =>
        pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
      )
    );
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-[560px] w-full flex flex-col gap-3 text-ink font-body">
      <div className="rounded-card border border-border bg-card p-5 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Bank connection</h3>
        <button className="w-full rounded-btn bg-accent px-4 py-3 text-sm font-semibold text-white shadow-card hover:bg-accent2">
          Connect Bank Account via Basiq
        </button>
        <p className="mt-3 text-sm text-ink3">
          Not yet connected. Bank data enables live cash flow tracking and automatic forecast updates.
        </p>
      </div>

      <div className="rounded-card border border-border bg-card p-5 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Accounting integration</h3>
        <button className="w-full rounded-btn border border-border bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-surface">
          Connect Xero (optional)
        </button>
        <p className="mt-3 text-sm text-ink3">
          Automatically sync your P&L and balance sheet.
        </p>
      </div>

      <div className="rounded-card border border-border bg-card p-5 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Manual upload</h3>
        <div
          role="button"
          tabIndex={0}
          onClick={handleBrowse}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          className="rounded-card border-2 border-dashed border-border bg-surface p-8 text-center text-sm text-ink3 cursor-pointer"
        >
          <p>Drop your CSV or PDF financial statements here</p>
          <p className="mt-2 text-xs">or click to browse</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        {uploadedFileName ? (
          <p className="mt-3 text-sm text-ink">Uploaded: {uploadedFileName}</p>
        ) : null}
      </div>

      <div className="rounded-card border border-border bg-card p-5 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Notification preferences</h3>
        <div className="space-y-2">
          {notificationPreferences.map((pref, index) => (
            <div
              key={pref.id}
              className={`flex justify-between items-center py-2 border-b border-border ${
                index === notificationPreferences.length - 1 ? "last:border-0" : ""
              }`}
            >
              <span className="text-sm text-ink">{pref.label}</span>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={pref.enabled}
                  onChange={() => handleToggle(pref.id)}
                  className="accent-accent"
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
