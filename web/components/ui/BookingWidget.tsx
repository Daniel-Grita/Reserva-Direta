// Decorative product mockup — not interactive. Dates are intentionally static.
export default function BookingWidget() {
  return (
    <div className="bg-booking-blue rounded-card-lg p-6 lg:p-8 shadow-card-hover">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <DateField label="Check In" value="26 Sex 2026" />
        <DateField label="Check Out" value="30 Ter 2026" />
        <button
          type="button"
          className="bg-orange text-white text-button font-body font-bold px-10 py-3.5 rounded-input hover:opacity-90 transition-all duration-base"
        >
          Procurar
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4 text-white/90 text-body-sm font-body">
        <GiftIcon />
        <span className="underline">Tem um código promocional?</span>
      </div>
    </div>
  );
}

function DateField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-body-sm font-body text-white mb-2">{label}</div>
      <div className="bg-white rounded-input px-4 py-3 flex items-center gap-3 text-n-900 text-body-sm font-body">
        <CalendarIcon />
        <span className="flex-1 whitespace-normal sm:whitespace-nowrap">{value}</span>
        <ChevronDown />
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-text flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-n-400 flex-shrink-0">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
