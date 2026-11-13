declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === 'undefined') return;

  const cleanParams = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, v]) => v !== undefined)
  );

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, cleanParams);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...cleanParams,
    });
  }
}

export function trackLeadConversion(params: {
  source: string;
  productName?: string;
  city?: string;
}) {
  trackEvent('generate_lead', {
    lead_source: params.source,
    item_name: params.productName,
    city: params.city,
    currency: 'INR',
    value: 1,
  });

  if (
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function' &&
    ADS_ID &&
    ADS_LEAD_LABEL
  ) {
    window.gtag('event', 'conversion', {
      send_to: `${ADS_ID}/${ADS_LEAD_LABEL}`,
      value: 1.0,
      currency: 'INR',
    });
  }
}

export function trackWhatsAppClick(context: string) {
  trackEvent('contact_whatsapp', {
    event_category: 'lead',
    event_label: context,
  });
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('contact_phone', {
    event_category: 'lead',
    event_label: phoneNumber,
  });
}

export function trackBrochureDownload(source: string) {
  trackEvent('file_download', {
    file_name: 'Genuine_Hospi_Brochure.pdf',
    link_text: source,
  });
}

export function hasGoogleAnalytics(): boolean {
  return Boolean(GA_ID);
}
