import type { Language } from "@/lib/translations";

const calendars = {
  consulting: {
    en: "https://www.netassets.llc/booking-calendar/business-consulting",
    es: "https://www.netassets.llc/booking-calendar/asesoria-empresarial-1",
  },
  smallBusiness: {
    en: "https://www.netassets.llc/booking-calendar/taxes-for-small-businesses",
    es: "https://www.netassets.llc/booking-calendar/impuestos-para-pequeñas-empresas-3",
  },
  personal: {
    en: "https://www.netassets.llc/booking-calendar/personal-taxes",
    es: "https://www.netassets.llc/booking-calendar/impuestos-personales-1",
  },
  itin: {
    en: "https://www.netassets.llc/service-page/itin",
    es: "https://www.netassets.llc/service-page/itin",
  },
} as const;

export type BookingService = keyof typeof calendars;

export const serviceOrder: BookingService[] = ["consulting", "smallBusiness", "personal"];

export function bookingUrl(service: BookingService, language: Language) {
  return calendars[service][language];
}
