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

export const formatUrl = (url) => {
  url = url.replace(/%20/g, " ");
  url = url.replace(/%2C/g, ",");

  // agregar las tilde a la url
  url = url.replace(/%C3%B1/g, "ñ");
  url = url.replace(/%C3%A1/g, "á");
  url = url.replace(/%C3%A9/g, "é");
  url = url.replace(/%C3%AD/g, "í");
  url = url.replace(/%C3%B3/g, "ó");
  url = url.replace(/%C3%BA/g, "ú");
  url = url.replace(/%C3%81/g, "Á");
  url = url.replace(/%C3%89/g, "É");
  url = url.replace(/%C3%8D/g, "Í");
  url = url.replace(/%C3%93/g, "Ó");
  url = url.replace(/%C3%9A/g, "Ú");
  url = url.replace(/%C3%91/g, "Ñ");

  return url;
};
