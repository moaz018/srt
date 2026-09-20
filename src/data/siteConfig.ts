export interface SiteConfig {
  companyName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  heroHeadline: string;
  heroSubheadline: string;
  adminPin: string;
  githubToken?: string;
  githubRepo: string;
  githubBranch: string;
}

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  companyName: 'Sabiha Ramzan Textile Pvt Ltd. (SRT)',
  tagline: 'Export-Grade Sublimation & Apparel Manufacturing',
  whatsappNumber: '923236602316',
  whatsappDisplay: '03236602316',
  phone: '+92 323 6602316',
  email: 'info@srtprinting.com',
  address: 'Industrial Estate Area, Sialkot 51310, Punjab, Pakistan',
  businessHours: 'Mon - Sat: 8:30 AM - 7:30 PM (PKT)',
  heroHeadline: 'Export-Grade Sublimation Printing & Apparel Manufacturing',
  heroSubheadline: 'Precision molecular dye sublimation on polyester performance fabrics. Powered by dedicated prepress designers, industrial plotters, and rotary heat calender engineers in Sialkot, Pakistan.',
  adminPin: 'srt2026',
  githubRepo: 'moaz018/srt',
  githubBranch: 'main',
};

const STORAGE_KEY = 'srt_site_config';

export function getSiteConfig(): SiteConfig {
  if (typeof window === 'undefined') return DEFAULT_SITE_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_SITE_CONFIG, ...JSON.parse(saved) };
    }
  } catch (err) {
    console.error('Error reading site config from localStorage', err);
  }
  return DEFAULT_SITE_CONFIG;
}

export function saveSiteConfig(config: Partial<SiteConfig>): SiteConfig {
  const current = getSiteConfig();
  const updated = { ...current, ...config };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('srt_config_updated'));
  } catch (err) {
    console.error('Error saving site config to localStorage', err);
  }
  return updated;
}

export function resetSiteConfig(): SiteConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('srt_config_updated'));
  } catch (err) {
    console.error('Error resetting site config', err);
  }
  return DEFAULT_SITE_CONFIG;
}
