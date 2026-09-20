import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  collection,
  getDocs,
  deleteDoc,
  Firestore,
  Unsubscribe
} from 'firebase/firestore';
import defaultFirebaseConfig from '../data/firebaseConfig.json';
import { SiteConfig, saveSiteConfig } from '../data/siteConfig';
import { CatalogDesign, saveCatalogDesigns } from '../data/catalog';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const STORAGE_KEY_FIREBASE = 'srt_firebase_config';

// Retrieve active Firebase config (localStorage > firebaseConfig.json > env)
export function getFirebaseConfig(): FirebaseConfig {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FIREBASE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.projectId) return parsed;
      }
    } catch (e) {
      console.warn('Error reading stored Firebase config', e);
    }
  }

  // Check Vite env
  const envConfig: FirebaseConfig = {
    apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || defaultFirebaseConfig.apiKey,
    authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || defaultFirebaseConfig.authDomain,
    projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || defaultFirebaseConfig.projectId,
    storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || defaultFirebaseConfig.storageBucket,
    messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultFirebaseConfig.messagingSenderId,
    appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || defaultFirebaseConfig.appId,
  };

  return envConfig;
}

export function saveFirebaseConfig(config: FirebaseConfig) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_FIREBASE, JSON.stringify(config));
    // Trigger re-initialization
    reinitFirebase();
  }
}

let appInstance: FirebaseApp | null = null;
let dbInstance: Firestore | null = null;
let activeUnsubConfig: Unsubscribe | null = null;
let activeUnsubCatalog: Unsubscribe | null = null;

export function isFirebaseConfigured(): boolean {
  const cfg = getFirebaseConfig();
  return Boolean(cfg.apiKey && cfg.projectId);
}

export function getFirebaseDb(): Firestore | null {
  if (dbInstance) return dbInstance;
  const cfg = getFirebaseConfig();
  if (!cfg.apiKey || !cfg.projectId) return null;

  try {
    if (!getApps().length) {
      appInstance = initializeApp(cfg);
    } else {
      appInstance = getApp();
    }
    dbInstance = getFirestore(appInstance);
    return dbInstance;
  } catch (err) {
    console.error('Failed to initialize Firebase', err);
    return null;
  }
}

export function reinitFirebase() {
  dbInstance = null;
  appInstance = null;
  if (activeUnsubConfig) {
    activeUnsubConfig();
    activeUnsubConfig = null;
  }
  if (activeUnsubCatalog) {
    activeUnsubCatalog();
    activeUnsubCatalog = null;
  }
  initRealtimeSync();
}

/**
 * Start real-time Firestore listeners for SiteConfig and Catalog.
 * Runs on app startup. If Firebase is configured, any changes made on any
 * laptop or mobile device immediately update all open browsers in real time.
 */
export function initRealtimeSync() {
  const db = getFirebaseDb();
  if (!db) {
    return;
  }

  try {
    // 1. Listen for site settings (WhatsApp, phone, address, headlines)
    const configDocRef = doc(db, 'settings', 'siteConfig');
    activeUnsubConfig = onSnapshot(
      configDocRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as Partial<SiteConfig>;
          saveSiteConfig(data);
        }
      },
      (err) => {
        console.warn('Firebase siteConfig snapshot listener notice:', err.message);
      }
    );

    // 2. Listen for catalog designs
    const catalogColRef = collection(db, 'catalog');
    activeUnsubCatalog = onSnapshot(
      catalogColRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const cloudDesigns: CatalogDesign[] = [];
          snapshot.forEach((docSnap) => {
            cloudDesigns.push(docSnap.data() as CatalogDesign);
          });
          if (cloudDesigns.length > 0) {
            saveCatalogDesigns(cloudDesigns);
          }
        }
      },
      (err) => {
        console.warn('Firebase catalog snapshot listener notice:', err.message);
      }
    );
  } catch (err) {
    console.warn('Real-time sync startup notice:', err);
  }
}

/**
 * Write site settings to Firestore.
 * Broadcasts instantly to all connected mobile & desktop devices.
 */
export async function pushSiteConfigToCloud(config: SiteConfig): Promise<boolean> {
  const db = getFirebaseDb();
  if (!db) return false;

  try {
    const configDocRef = doc(db, 'settings', 'siteConfig');
    const safeConfig = { ...config };
    delete (safeConfig as any).githubToken; // don't push token to public doc
    await setDoc(configDocRef, safeConfig, { merge: true });
    return true;
  } catch (err) {
    console.error('Error writing siteConfig to Firestore:', err);
    throw err;
  }
}

/**
 * Write a design to Firestore.
 */
export async function pushDesignToCloud(design: CatalogDesign): Promise<boolean> {
  const db = getFirebaseDb();
  if (!db) return false;

  try {
    const designDocRef = doc(db, 'catalog', design.id);
    await setDoc(designDocRef, design, { merge: true });
    return true;
  } catch (err) {
    console.error('Error writing design to Firestore:', err);
    throw err;
  }
}

/**
 * Delete a design from Firestore.
 */
export async function deleteDesignFromCloud(designId: string): Promise<boolean> {
  const db = getFirebaseDb();
  if (!db) return false;

  try {
    const designDocRef = doc(db, 'catalog', designId);
    await deleteDoc(designDocRef);
    return true;
  } catch (err) {
    console.error('Error deleting design from Firestore:', err);
    throw err;
  }
}

/**
 * Bulk upload current local designs to Firestore.
 */
export async function syncAllDesignsToCloud(designs: CatalogDesign[]): Promise<number> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not configured yet.');

  let synced = 0;
  for (const d of designs) {
    const designDocRef = doc(db, 'catalog', d.id);
    await setDoc(designDocRef, d, { merge: true });
    synced++;
  }
  return synced;
}
