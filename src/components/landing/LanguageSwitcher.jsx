import React from "react";
import { getLang } from "@/lib/landingCopy";

const BRAZIL_FLAG_URL =
  "https://itb.adcreatives.com.br/assets/landing/Flag_of_Brazil.svg.png";
const USA_FLAG_URL =
  "https://itb.adcreatives.com.br/assets/landing/Flag_of_the_United_States.jpg";

const getHref = (targetLang) => {
  if (typeof window === "undefined") {
    return targetLang === "pt" ? "/pt-br/" : "/";
  }

  const suffix = `${window.location.search}${window.location.hash}`;
  return targetLang === "pt" ? `/pt-br/${suffix}` : `/${suffix}`;
};

export default function LanguageSwitcher() {
  const activeLanguage = getLang();
  const label = activeLanguage === "en" ? "Language" : "Idioma";

  const options = [
    { code: "pt", text: "PT-BR", flag: BRAZIL_FLAG_URL, href: getHref("pt") },
    { code: "en", text: "EN-US", flag: USA_FLAG_URL, href: getHref("en") },
  ];

  return (
    <div className="absolute top-4 right-4 z-30">
      <div className="rounded-2xl border border-white/20 bg-black/35 p-2 backdrop-blur-md">
        <span className="mb-2 block px-2 text-xs font-medium uppercase tracking-wide text-white/70">
          {label}
        </span>
        <div className="flex items-center gap-2">
          {options.map((option) => {
            const isActive = option.code === activeLanguage;

            return (
              <a
                key={option.code}
                href={option.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-lg border px-2 py-1 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-yellow-300/80 bg-yellow-400/20 text-yellow-100"
                    : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <img
                  src={option.flag}
                  alt={option.text}
                  className="h-4 w-6 rounded-sm object-cover"
                />
                <span>{option.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
