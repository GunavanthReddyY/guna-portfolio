import React from "react";
import type { ProfileTileConfig } from "../config/profiles";

interface ProfileTileProps {
  config: ProfileTileConfig;
  isActive: boolean;
  onSelect: () => void;
}

const profileAccentIcon: Record<ProfileTileConfig["key"], string> = {
  cyber: "🛡️",
  ai: "⚙️",
  prompt: "🧠",
  community: "🎪",
};

export const ProfileTile: React.FC<ProfileTileProps> = ({
  config,
  isActive,
  onSelect,
}) => {
  const icon = profileAccentIcon[config.key];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "group flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left shadow-soft-xl transition",
        "bg-slate-900/80 border-slate-700/60 hover:border-emerald-400/80 hover:bg-slate-900",
        isActive ? "ring-1 ring-emerald-400/80" : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-lg">
          <span>{icon}</span>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90">
            {config.subtitle}
          </div>
          <div className="text-sm font-semibold text-slate-100">
            {config.title}
          </div>
        </div>
      </div>
      <p className="mt-1 text-xs text-slate-400">{config.description}</p>
    </button>
  );
};
