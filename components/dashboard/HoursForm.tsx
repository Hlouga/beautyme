"use client";

import { useState } from "react";
import { updateOpeningHours } from "@/actions/provider";

const DAYS = [
  { key: "mon", label: "Monday" },
  { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" },
  { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" },
  { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
];

type DaySchedule = {
  isOpen: boolean;
  open: string;
  close: string;
};

export function HoursForm({ initialHours }: { initialHours: Record<string, DaySchedule> | null }) {
  // Default schedule if none exists
  const defaultSchedule = DAYS.reduce((acc, day) => ({
    ...acc,
    [day.key]: { isOpen: false, open: "09:00", close: "17:00" }
  }), {});

  const [schedule, setSchedule] = useState<Record<string, DaySchedule>>(
    initialHours && Object.keys(initialHours).length > 0 ? initialHours : defaultSchedule
  );
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleToggle = (day: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], isOpen: !prev[day].isOpen }
    }));
    setSaved(false);
  };

  const handleTimeChange = (day: string, field: 'open' | 'close', value: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateOpeningHours(schedule);
      setSaved(true);
    } catch (error) {
      alert("Failed to save hours.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      {saved && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 border border-green-200">
          Hours updated successfully!
        </div>
      )}

      <div className="flex flex-col gap-4">
        {DAYS.map((day) => {
          const dayData = schedule[day.key];
          return (
            <div key={day.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
              
              <div className="flex items-center gap-3 w-40">
                <input
                  type="checkbox"
                  checked={dayData.isOpen}
                  onChange={() => handleToggle(day.key)}
                  className="w-5 h-5 accent-[#8600B3] rounded"
                />
                <span className={`font-medium ${dayData.isOpen ? 'text-[#1A1A2E]' : 'text-gray-400'}`}>
                  {day.label}
                </span>
              </div>

              {dayData.isOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    value={dayData.open}
                    onChange={(e) => handleTimeChange(day.key, 'open', e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] text-sm"
                  />
                  <span className="text-gray-500 text-sm">to</span>
                  <input
                    type="time"
                    value={dayData.close}
                    onChange={(e) => handleTimeChange(day.key, 'close', e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8600B3] text-sm"
                  />
                </div>
              ) : (
                <span className="text-gray-400 text-sm italic sm:mr-8">Closed</span>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleSave}
        disabled={isSaving}
        className="mt-8 w-full bg-[#8600B3] hover:bg-[#6e0093] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {isSaving ? "Saving..." : "Save Business Hours"}
      </button>
    </div>
  );
}