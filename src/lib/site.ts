// Single place for contact details and site-wide constants.
export const SITE_NAME = "8AM";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.the8am.in");

export const WHATSAPP_NUMBER = "918374054499";
export const WHATSAPP_DISPLAY = "+91 83740 54499";
export const PHONE_NUMBER = "+918143528142";
export const PHONE_DISPLAY = "+91 81435 28142";
export const EMAIL = "fivextechnologiesofficial@gmail.com";

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const DEMO_WHATSAPP = whatsappLink(
  "Hi 8AM team, I'd like to book a demo for our school."
);
