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

import rawConfigJson from './siteConfig.json';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  companyName: rawConfigJson.companyName || 'Sabiha Ramzan Textile Pvt Ltd. (SRT)',
  tagline: rawConfigJson.tagline || 'Export-Grade Sublimation & Apparel Manufacturing',
  whatsappNumber: rawConfigJson.whatsappNumber || '923236602316',
  whatsappDisplay: rawConfigJson.whatsappDisplay || '03236602316',
  phone: rawConfigJson.phone || '+92 323 6602316',
  email: rawConfigJson.email || 'info@srtprinting.com',
  address: rawConfigJson.address || 'Industrial Estate Area, Sialkot 51310, Punjab, Pakistan',
  businessHours: rawConfigJson.businessHours || 'Mon - Sat: 8:30 AM - 7:30 PM (PKT)',
  heroHeadline: rawConfigJson.heroHeadline || 'Export-Grade Sublimation Printing & Apparel Manufacturing',
  heroSubheadline: rawConfigJson.heroSubheadline || 'Precision molecular dye sublimation on polyester performance fabrics. Powered by dedicated prepress designers, industrial plotters, and rotary heat calender engineers in Sialkot, Pakistan.',
  adminPin: rawConfigJson.adminPin || 'srt2026',
  githubRepo: rawConfigJson.githubRepo || 'moaz018/srt',
  githubBranch: rawConfigJson.githubBranch || 'main',
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
