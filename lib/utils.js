import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatTime = (time) => {
  const date = new Date(time);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const units = [
    { name: "año", seconds: 31536000 },
    { name: "mes", seconds: 2592000 },
    { name: "día", seconds: 86400 },
    { name: "hora", seconds: 3600 },
    { name: "minuto", seconds: 60 },
    { name: "segundo", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `Hace ${interval} ${unit.name}${interval > 1 ? "s" : ""}`;
    }
  }

  return "Hace un momento";
};
