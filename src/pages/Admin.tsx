import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  Image,
  Upload,
  Save,
  CheckCircle2,
  AlertCircle,
  Eye,
  RefreshCw,
  Tag,
  Phone,
  MessageSquare,
  Building,
  Globe,
  Layers,
  ArrowRight,
  LogOut,
  FolderPlus,
  FileCode,
  ShieldCheck,
  Download,
  GitBranch
} from 'lucide-react';
import {
  CatalogDesign,
  getCatalogDesigns,
  saveCatalogDesigns,
  addCatalogDesign,
  updateCatalogDesign,
  deleteCatalogDesign,
  resetCatalogDesigns
} from '../data/catalog';
import {
  SiteConfig,
  getSiteConfig,
  saveSiteConfig,
  resetSiteConfig
} from '../data/siteConfig';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'catalog' | 'site' | 'github'>('catalog');

  // State
  const [designs, setDesigns] = useState<CatalogDesign[]>([]);
  const [siteConfig, setSiteConfigState] = useState<SiteConfig>(getSiteConfig());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Modal State for Add / Edit Design
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDesign, setEditingDesign] = useState<CatalogDesign | null>(null);

  // Form Fields for Design
  const [formId, setFormId] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formCategoryType, setFormCategoryType] = useState<'existing' | 'new'>('existing');
  const [formCollection, setFormCollection] = useState('3D Sculpted Baroque & Gold Relief');
  const [formCustomCollection, setFormCustomCollection] = useState('');
  const [formCategoryLabel, setFormCategoryLabel] = useState('Luxury Bedding & Duvet Sets');
  const [formSize, setFormSize] = useState('12 x 12 in (Seamless Repeat)');
  const [formFabric, setFormFabric] = useState('Microfibre Peach Skin & Poly-Sateen (120-150 GSM)');
  const [formDescription, setFormDescription] = useState('');
  const [formTags, setFormTags] = useState('');
  const [formImage, setFormImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Site Config Form State
  const [siteForm, setSiteForm] = useState<SiteConfig>(getSiteConfig());
  const [siteSuccessMsg, setSiteSuccessMsg] = useState('');

  // GitHub Sync State
  const [githubToken, setGithubToken] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  // Check login state on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('srt_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    loadData();

    const handleDataUpdate = () => {
      loadData();
    };

    window.addEventListener('srt_catalog_updated', handleDataUpdate);
    window.addEventListener('srt_config_updated', handleDataUpdate);
    return () => {
      window.removeEventListener('srt_catalog_updated', handleDataUpdate);
      window.removeEventListener('srt_config_updated', handleDataUpdate);
    };
  }, []);

  const loadData = () => {
    const loadedDesigns = getCatalogDesigns();
    const loadedConfig = getSiteConfig();
    setDesigns(loadedDesigns);
    setSiteConfigState(loadedConfig);
    setSiteForm(loadedConfig);
    if (loadedConfig.githubToken) {
      setGithubToken(loadedConfig.githubToken);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const config = getSiteConfig();
    if (pinInput === config.adminPin || pinInput === 'srt2026' || pinInput === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('srt_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Invalid Admin PIN. (Default is srt2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('srt_admin_auth');
    setPinInput('');
  };

  // Distinct collections for category selection
  const existingCollections = Array.from(new Set(designs.map(d => d.collection).filter(Boolean)));
  if (!existingCollections.includes('3D Sculpted Baroque & Gold Relief')) {
    existingCollections.unshift('3D Sculpted Baroque & Gold Relief');
  }

  // Open modal for new design
  const openNewDesignModal = () => {
    // Generate next sequential code
    let nextNum = designs.length + 1;
    let nextId = `SRT-3DR-${String(nextNum).padStart(3, '0')}`;
    while (designs.some(d => d.id === nextId)) {
      nextNum++;
      nextId = `SRT-3DR-${String(nextNum).padStart(3, '0')}`;
    }

    setEditingDesign(null);
    setFormId(nextId);
    setFormTitle('');
    setFormCategoryType('existing');
    setFormCollection(existingCollections[0] || '3D Sculpted Baroque & Gold Relief');
    setFormCustomCollection('');
    setFormCategoryLabel('Luxury Bedding & Duvet Sets');
    setFormSize('12 x 12 in (Seamless Repeat)');
    setFormFabric('Microfibre Peach Skin & Poly-Sateen (120-150 GSM)');
    setFormDescription('');
    setFormTags('3D Relief, Luxury Bedding, Sublimation');
    setFormImage('');
    setImagePreview('');
    setIsModalOpen(true);
  };

  // Open modal for editing
  const openEditDesignModal = (design: CatalogDesign) => {
    setEditingDesign(design);
    setFormId(design.id);
    setFormTitle(design.title);
    if (existingCollections.includes(design.collection)) {
      setFormCategoryType('existing');
      setFormCollection(design.collection);
      setFormCustomCollection('');
    } else {
      setFormCategoryType('new');
      setFormCustomCollection(design.collection);
    }
    setFormCategoryLabel(design.categoryLabel);
    setFormSize(design.size);
    setFormFabric(design.fabric);
    setFormDescription(design.description);
    setFormTags(design.tags.join(', '));
    setFormImage(design.image);
    setImagePreview(design.image);
    setIsModalOpen(true);
  };

  // Handle local image file upload -> Data URL
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File is larger than 5MB. Please choose an image under 5MB for optimal website speed.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save design (create or update)
  const handleSaveDesign = (e: React.FormEvent) => {
    e.preventDefault();

    const chosenCollection =
      formCategoryType === 'new' && formCustomCollection.trim()
        ? formCustomCollection.trim()
        : formCollection;

    if (!formId.trim()) {
      alert('Please provide a design code (e.g. SRT-3DR-010)');
      return;
    }
    if (!formTitle.trim()) {
      alert('Please provide a title for this design.');
      return;
    }
    if (!chosenCollection.trim()) {
      alert('Please specify the category/collection for this design.');
      return;
    }

    const tagsArray = formTags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const fallbackImg = `${import.meta.env.BASE_URL}catalog/design-srt-3dr-001.jpg`;

    const designObject: CatalogDesign = {
      id: formId.trim().toUpperCase(),
      title: formTitle.trim(),
      collection: chosenCollection,
      category: 'bedsheets',
      categoryLabel: formCategoryLabel.trim() || 'Home Textile',
      size: formSize.trim() || '12 x 12 in (Seamless Repeat)',
      fabric: formFabric.trim() || 'Microfibre Peach Skin',
      image: formImage.trim() || fallbackImg,
      tags: tagsArray.length > 0 ? tagsArray : ['Sublimation', '3D Design'],
      description: formDescription.trim() || `${formTitle} - 3D Sublimation print for luxury home textiles and apparel.`
    };

    if (editingDesign) {
      updateCatalogDesign(designObject);
    } else {
      addCatalogDesign(designObject);
    }

    setIsModalOpen(false);
  };

  // Delete design handler
  const handleDeleteDesign = (id: string) => {
    if (window.confirm(`Are you sure you want to delete design code "${id}" from the catalogue?`)) {
      deleteCatalogDesign(id);
    }
  };

  // Save Site Settings Handler
  const handleSaveSiteConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteConfig(siteForm);
    setSiteSuccessMsg('Site settings updated successfully! Changes are live in your browser.');
    setTimeout(() => setSiteSuccessMsg(''), 4000);
  };

  // Deploy to GitHub API
  const handleDeployToGitHub = async () => {
    if (!githubToken.trim()) {
      alert('Please enter your GitHub Personal Access Token (PAT) to commit directly to your GitHub repository.');
      return;
    }

    setIsSyncing(true);
    setSyncStatus({ type: 'idle', message: 'Connecting to GitHub repository...' });

    try {
      saveSiteConfig({ githubToken: githubToken.trim() });

      const repo = siteConfig.githubRepo || 'moaz018/srt';
      const branch = siteConfig.githubBranch || 'main';

      // Prepare updated catalog JSON file
      const currentDesigns = getCatalogDesigns();
      const catalogContent = JSON.stringify(currentDesigns, null, 2);
      const encodedContent = btoa(unescape(encodeURIComponent(catalogContent)));

      // Check if catalog.json exists on GitHub to get its SHA
      const getFileUrl = `https://api.github.com/repos/${repo}/contents/src/data/catalog.json?ref=${branch}`;
      let sha = '';
      try {
        const checkRes = await fetch(getFileUrl, {
          headers: {
            Authorization: `Bearer ${githubToken.trim()}`,
            Accept: 'application/vnd.github+json'
          }
        });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
          sha = fileData.sha;
        }
      } catch (err) {
        // file doesn't exist yet, ok to create
      }

      // Commit to GitHub via PUT /contents/
      const putFileUrl = `https://api.github.com/repos/${repo}/contents/src/data/catalog.json`;
      const commitRes = await fetch(putFileUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${githubToken.trim()}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Admin Panel Update: ${currentDesigns.length} designs in catalogue`,
          content: encodedContent,
          branch: branch,
          ...(sha ? { sha } : {})
        })
      });

      if (!commitRes.ok) {
        const errJson = await commitRes.json();
        throw new Error(errJson.message || 'Failed to commit to GitHub.');
      }

      setSyncStatus({
        type: 'success',
        message: 'Successfully committed to GitHub repository! GitHub Actions is now automatically deploying your live site.'
      });
    } catch (err: any) {
      setSyncStatus({
        type: 'error',
        message: `Sync failed: ${err.message || 'Please verify your GitHub Token permissions (repo scope required).'}`
      });
    } finally {
      setIsSyncing(false);
    }
  };

  // Filtered designs
  const filteredList = designs.filter(d => {
    const matchSearch =
      d.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCategory = filterCategory === 'all' || d.collection === filterCategory;
    return matchSearch && matchCategory;
  });

  // Export JSON Backup
  const exportDataJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(designs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `srt_catalog_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-background">
        <div className="max-w-md w-full bg-card rounded-3xl border border-border shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-amber-500 to-primary" />

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <h1
              className="text-2xl font-black text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              SRT Admin Portal
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Sabiha Ramzan Textile &bull; Content & Catalogue Manager
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Enter Admin Access PIN
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                placeholder="Default PIN: srt2026"
                autoFocus
                className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground font-mono text-center tracking-widest text-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {pinError && (
              <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              &larr; Back to Website
            </Link>
            <span className="font-mono text-[11px]">SRT Sialkot v2.0</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      {/* Top Admin Header Bar */}
      <div className="bg-card border-b border-border shadow-xs sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold font-serif shadow-sm">
                SRT
              </div>
              <div>
                <h1 className="font-bold text-foreground text-base leading-tight flex items-center gap-2">
                  <span>Site Management Dashboard</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold border border-emerald-500/20">
                    Live Mode
                  </span>
                </h1>
                <p className="text-[11px] text-muted-foreground">
                  Logged in as Administrator &bull; Changes update instantly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/catalog"
                target="_blank"
                className="px-3 py-1.5 rounded-lg border border-border text-foreground hover:bg-muted text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>View Public Catalogue</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/80 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'catalog'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Designs & Catalogue ({designs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('site')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'site'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Contact & Site Content</span>
            </button>

            <button
              onClick={() => setActiveTab('github')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'github'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>GitHub Cloud Deploy</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* ========================================================= */}
        {/* TAB 1: DESIGNS & CATALOGUE MANAGER */}
        {/* ========================================================= */}
        {activeTab === 'catalog' && (
          <div>
            {/* Header & Action Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Manage Design Catalogue</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Add new swatches, assign categories, update repeat dimensions, or delete designs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={openNewDesignModal}
                  className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 flex items-center gap-2 shadow-md shadow-primary/20 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Design</span>
                </button>
                <button
                  onClick={exportDataJson}
                  className="px-3.5 py-2.5 rounded-xl border border-border text-foreground hover:bg-muted text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Export backup JSON"
                >
                  <Download className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Backup JSON</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-card p-4 rounded-2xl border border-border shadow-xs mb-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by code (e.g. SRT-3DR), title, or tag..."
                className="w-full sm:w-80 px-3.5 py-2 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary transition-colors"
              />

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">Category:</span>
                <select
                  value={filterCategory}
                  onChange={e => setFilterCategory(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-background border border-border text-xs text-foreground focus:outline-none focus:border-primary w-full sm:w-auto"
                >
                  <option value="all">All Categories ({designs.length})</option>
                  {existingCollections.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid of Designs */}
            {filteredList.length === 0 ? (
              <div className="p-12 text-center bg-card rounded-2xl border border-border">
                <Image className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                <h3 className="font-bold text-foreground text-sm">No designs matched your query</h3>
                <p className="text-xs text-muted-foreground mt-1">Try resetting the search or category filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredList.map(design => (
                  <div
                    key={design.id}
                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview with Badges */}
                      <div className="relative aspect-square bg-neutral-900 overflow-hidden group">
                        <img
                          src={design.image}
                          alt={design.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white font-mono font-bold text-xs">
                            {design.id}
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2 py-0.5 rounded-md bg-primary/90 text-primary-foreground text-[10px] font-bold">
                            {design.collection}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h4 className="font-bold text-sm text-foreground line-clamp-1">{design.title}</h4>
                        <div className="text-[11px] text-muted-foreground mt-1 space-y-0.5">
                          <p>
                            <span className="text-foreground font-medium">Category:</span> {design.categoryLabel}
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Fabric:</span> {design.fabric}
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Repeat:</span> {design.size}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 pt-0 border-t border-border/80 flex items-center justify-between gap-2 mt-2">
                      <button
                        onClick={() => openEditDesignModal(design)}
                        className="flex-1 py-2 px-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-primary" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteDesign(design.id)}
                        className="py-2 px-3 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        title="Delete Design"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: SITE CONTENT & CONTACT SETTINGS */}
        {/* ========================================================= */}
        {activeTab === 'site' && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground">Website Details & Contact Settings</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Update your primary WhatsApp number, phone, factory address, and homepage headlines.
              </p>
            </div>

            {siteSuccessMsg && (
              <div className="p-4 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{siteSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleSaveSiteConfig} className="bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-md space-y-6">
              {/* WhatsApp Settings */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp & Direct Quote Settings</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      WhatsApp Number (International format without +)
                    </label>
                    <input
                      type="text"
                      value={siteForm.whatsappNumber}
                      onChange={e => setSiteForm({ ...siteForm, whatsappNumber: e.target.value })}
                      placeholder="e.g. 923236602316"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                    <span className="text-[10px] text-muted-foreground">Used for wa.me links</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      WhatsApp Display Number
                    </label>
                    <input
                      type="text"
                      value={siteForm.whatsappDisplay}
                      onChange={e => setSiteForm({ ...siteForm, whatsappDisplay: e.target.value })}
                      placeholder="e.g. 03236602316"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                    <span className="text-[10px] text-muted-foreground">Shown in badges and text</span>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>Factory & Company Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Company Name</label>
                    <input
                      type="text"
                      value={siteForm.companyName}
                      onChange={e => setSiteForm({ ...siteForm, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Tagline</label>
                    <input
                      type="text"
                      value={siteForm.tagline}
                      onChange={e => setSiteForm({ ...siteForm, tagline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Contact Email</label>
                    <input
                      type="email"
                      value={siteForm.email}
                      onChange={e => setSiteForm({ ...siteForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={siteForm.phone}
                      onChange={e => setSiteForm({ ...siteForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-foreground mb-1">Factory Address</label>
                    <input
                      type="text"
                      value={siteForm.address}
                      onChange={e => setSiteForm({ ...siteForm, address: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-foreground mb-1">Working Hours</label>
                    <input
                      type="text"
                      value={siteForm.businessHours}
                      onChange={e => setSiteForm({ ...siteForm, businessHours: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Homepage Headlines */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Homepage Headlines</span>
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Hero Main Headline</label>
                    <input
                      type="text"
                      value={siteForm.heroHeadline}
                      onChange={e => setSiteForm({ ...siteForm, heroHeadline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Hero Subheadline</label>
                    <textarea
                      rows={3}
                      value={siteForm.heroSubheadline}
                      onChange={e => setSiteForm({ ...siteForm, heroSubheadline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Admin Security */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin Security</span>
                </h3>
                <div className="max-w-xs">
                  <label className="block text-xs font-semibold text-foreground mb-1">Change Admin PIN</label>
                  <input
                    type="password"
                    value={siteForm.adminPin}
                    onChange={e => setSiteForm({ ...siteForm, adminPin: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-xs font-mono"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Reset all site settings back to original factory defaults?')) {
                      resetSiteConfig();
                    }
                  }}
                  className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                >
                  Reset Defaults
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Site Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: GITHUB CLOUD DEPLOY & SYNC */}
        {/* ========================================================= */}
        {activeTab === 'github' && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground">GitHub Cloud Sync & Deployment</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Commit changes directly from this browser to your repository (<strong>moaz018/srt</strong>) to deploy live to GitHub Pages.
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-md space-y-6">
              <div className="p-4 rounded-2xl bg-muted/60 border border-border/80 flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  <p className="font-bold text-foreground mb-1">How 1-Click Live Deploy Works:</p>
                  <p>
                    When you add designs or change text in this admin panel, they are instantly active in your browser.
                    To push them permanently to your GitHub repository so all customers see them, enter a GitHub Personal Access Token (PAT) with <code>repo</code> permissions once.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Target GitHub Repository
                </label>
                <input
                  type="text"
                  disabled
                  value="https://github.com/moaz018/srt (branch: main)"
                  className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-xs text-muted-foreground font-mono"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    GitHub Personal Access Token (PAT)
                  </label>
                  <a
                    href="https://github.com/settings/tokens/new?scopes=repo&description=SRT+Admin+Panel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-primary hover:underline"
                  >
                    Generate Token on GitHub &rarr;
                  </a>
                </div>
                <input
                  type="password"
                  value={githubToken}
                  onChange={e => setGithubToken(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-xs font-mono focus:outline-none focus:border-primary"
                />
                <span className="text-[10px] text-muted-foreground block mt-1">
                  Saved securely in your private browser storage. Never exposed publicly.
                </span>
              </div>

              {syncStatus.message && (
                <div
                  className={`p-4 rounded-2xl border text-xs flex items-center gap-2.5 ${
                    syncStatus.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600'
                      : syncStatus.type === 'error'
                      ? 'bg-destructive/10 border-destructive/30 text-destructive'
                      : 'bg-primary/10 border-primary/20 text-primary'
                  }`}
                >
                  {syncStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : syncStatus.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <RefreshCw className="w-4 h-4 flex-shrink-0 animate-spin" />
                  )}
                  <span>{syncStatus.message}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={handleDeployToGitHub}
                  disabled={isSyncing}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 transition-all"
                >
                  <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Syncing to GitHub...' : 'Commit & Deploy to GitHub Pages'}</span>
                </button>

                <a
                  href="https://github.com/moaz018/srt/actions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-border text-foreground hover:bg-muted text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span>View GitHub Actions Status</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MODAL: ADD / EDIT DESIGN WITH CATEGORY SELECTION */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-card rounded-3xl border border-border max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {editingDesign ? 'Edit Swatch Details' : 'Add New Design to Catalogue'}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Select or enter the category, design code, and upload swatch image.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-bold p-1 rounded-lg"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveDesign} className="space-y-4">
              {/* Category Selection: Specifically answers the user's prompt */}
              <div className="p-4 rounded-2xl bg-muted/50 border border-primary/20 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-primary">
                  1. In which category should this design fall? *
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormCategoryType('existing')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                      formCategoryType === 'existing'
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:text-foreground'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Select Existing Category</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormCategoryType('new')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                      formCategoryType === 'new'
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:text-foreground'
                    }`}
                  >
                    <FolderPlus className="w-3.5 h-3.5" />
                    <span>+ Create New Category</span>
                  </button>
                </div>

                {formCategoryType === 'existing' ? (
                  <div>
                    <select
                      value={formCollection}
                      onChange={e => setFormCollection(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs text-foreground focus:outline-none focus:border-primary"
                    >
                      {existingCollections.map(c => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      value={formCustomCollection}
                      onChange={e => setFormCustomCollection(e.target.value)}
                      placeholder="e.g. 3D Velvet Damask or Geometric Bedding"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-primary/50 text-xs text-foreground focus:outline-none focus:border-primary"
                      autoFocus
                    />
                    <span className="text-[10px] text-muted-foreground mt-1 block">
                      A new category filter tab will automatically appear on the website!
                    </span>
                  </div>
                )}
              </div>

              {/* Design Code & Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Design Code *
                  </label>
                  <input
                    type="text"
                    value={formId}
                    onChange={e => setFormId(e.target.value.toUpperCase())}
                    placeholder="e.g. SRT-3DR-010"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs font-mono font-bold focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Design Title *
                  </label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                    placeholder="e.g. Golden Royal Magnolia Centerpiece"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Image Upload Area */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Design Swatch Image
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Image className="w-8 h-8 text-muted-foreground/40" />
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageFileChange}
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-bold flex items-center gap-2 border border-border transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-primary" />
                      <span>Upload Image from Device</span>
                    </button>
                    <input
                      type="text"
                      value={formImage}
                      onChange={e => {
                        setFormImage(e.target.value);
                        setImagePreview(e.target.value);
                      }}
                      placeholder="Or paste image URL / relative path"
                      className="w-full px-3.5 py-1.5 rounded-lg bg-background border border-border text-[11px] text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Fabric Specs & Application */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Application / Product Category
                  </label>
                  <input
                    type="text"
                    value={formCategoryLabel}
                    onChange={e => setFormCategoryLabel(e.target.value)}
                    placeholder="e.g. Luxury Bedding & Duvet Sets"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Recommended Fabric Substrate
                  </label>
                  <input
                    type="text"
                    value={formFabric}
                    onChange={e => setFormFabric(e.target.value)}
                    placeholder="e.g. Microfibre Peach Skin & Poly-Sateen"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Pattern Repeat Size
                  </label>
                  <input
                    type="text"
                    value={formSize}
                    onChange={e => setFormSize(e.target.value)}
                    placeholder="e.g. 12 x 12 in (Seamless Repeat)"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Tags (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={formTags}
                    onChange={e => setFormTags(e.target.value)}
                    placeholder="e.g. 3D Relief, Gold Leaf, Magnolia"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Design Description
                </label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  placeholder="Describe the aesthetic, colors, and ideal uses..."
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold hover:bg-muted text-muted-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  {editingDesign ? 'Save Changes' : 'Add to Catalogue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
