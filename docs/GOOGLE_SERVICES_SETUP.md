# Connecting Google Services to Genuine Hospi Enterprises

All Google tracking, SEO indexing, and lead management hooks are already wired into the website. Add your IDs to `.env.local` (for local dev) and **Vercel > Project Settings > Environment Variables** (for production), then redeploy.

## 1. Google Search Console (Rankings, Search Queries, Backlinks, Indexing)
- Verification is already active via both `public/googled92703a42ec0210f.html` and the `google-site-verification` meta tag in `src/app/layout.tsx`.
- Submit your sitemap in Google Search Console: `https://genuinehospi.vercel.app/sitemap.xml`.
- Monitor **Search Results** (queries, impressions, clicks, average rank) and **Links** (external backlinks and internal links).

## 2. Google Analytics 4 (Visitors, Traffic Sources, Lead Conversions)
- Create a GA4 Web Stream for `https://genuinehospi.vercel.app` and copy the Measurement ID (`G-XXXXXXXXXX`).
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
- Automatic events tracked: `page_view`, `generate_lead` (Contact & Quote forms), `contact_whatsapp`, `contact_phone`.

## 3. Google Tag Manager & Google Ads (Optional)
- Set `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` to manage additional tags without code changes.
- Set `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` to track paid search lead conversions.

## 4. Google Sheets + Gmail Lead Tracker (Zero-Cost CRM)
1. Create a Google Sheet named **Genuine Hospi Website Leads**.
2. Open **Extensions > Apps Script** and paste `docs/google-apps-script-leads.js`.
3. Click **Deploy > New deployment > Web app** (Execute as: **Me**, Access: **Anyone**).
4. Copy the Web App URL into `GOOGLE_SHEETS_WEBHOOK_URL`.
5. Every form submission will automatically append a row to your Google Sheet and email `rohitsingh8885882@gmail.com`.

## 5. Google Business Profile (Local & Map Pack Rankings)
- Link `https://genuinehospi.vercel.app` on your Google Business Profile for **Jalandhar (Punjab)** and **Siwan (Bihar)** with categories *Medical Equipment Manufacturer* and *Hospital Equipment & Supplies*.
