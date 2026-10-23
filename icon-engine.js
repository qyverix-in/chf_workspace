const lucide = require('./vendor/lucide/lucide.min.js');

// Complete Emoji to Icon Mapping
const EMOJI_MAP = {
  // Navigation & Core (Lucide)
  '\u{1F3E0}': { set: 'lucide', name: 'house' },
  '\u{1F50A}': { set: 'lucide', name: 'volume-2' },
  '\u{1F3A4}': { set: 'lucide', name: 'mic' },
  '\u{1F4CD}': { set: 'lucide', name: 'map-pin' },
  '\u{1F4B0}': { set: 'lucide', name: 'indian-rupee' },
  '\u{1F4CA}': { set: 'lucide', name: 'bar-chart-3' },
  '\u{1F9FE}': { set: 'lucide', name: 'receipt' },
  '\u{1F4B3}': { set: 'lucide', name: 'credit-card' },
  '\u{1F3E6}': { set: 'lucide', name: 'landmark' },
  '\u{1F4B5}': { set: 'lucide', name: 'wallet' },
  '\u{1F91D}': { set: 'lucide', name: 'hand-coins' },
  '\u{1F465}': { set: 'lucide', name: 'users' },
  '\u{1F464}': { set: 'lucide', name: 'user' },
  '\u{1F4D6}': { set: 'lucide', name: 'book-open' },
  '\u{1F4DA}': { set: 'lucide', name: 'file-text' },
  '\u{1F4C4}': { set: 'lucide', name: 'file-text' },
  '\u{2795}': { set: 'lucide', name: 'user-plus' },
  '\u{1F6E1}\u{FE0F}': { set: 'lucide', name: 'shield-check' },
  '\u{1F6E1}': { set: 'lucide', name: 'shield-check' },
  '\u{1F510}': { set: 'lucide', name: 'key-round' },
  '\u{1F3D6}\u{FE0F}': { set: 'lucide', name: 'palmtree' },
  '\u{1F3D6}': { set: 'lucide', name: 'palmtree' },
  '\u{1F4E5}': { set: 'lucide', name: 'download' },
  '\u{1F4C5}': { set: 'lucide', name: 'calendar-days' },
  '\u{1F5D3}\u{FE0F}': { set: 'lucide', name: 'calendar-days' },
  '\u{1F5D3}': { set: 'lucide', name: 'calendar-days' },
  '\u{1F4CB}': { set: 'lucide', name: 'clipboard-list' },
  '\u{270D}\u{FE0F}': { set: 'lucide', name: 'file-plus-2' },
  '\u{270D}': { set: 'lucide', name: 'file-plus-2' },
  '\u{1F4D1}': { set: 'lucide', name: 'table-2' },
  '\u{1F5C2}\u{FE0F}': { set: 'lucide', name: 'layers' },
  '\u{1F5C2}': { set: 'lucide', name: 'layers' },
  '\u{1F3AF}': { set: 'lucide', name: 'target' },
  '\u{1F331}': { set: 'lucide', name: 'sprout' },
  '\u{1F4CC}': { set: 'lucide', name: 'pin' },
  '\u{1F516}': { set: 'lucide', name: 'bookmark' },
  '\u{1F4BB}': { set: 'lucide', name: 'laptop' },
  '\u{1F4E6}': { set: 'lucide', name: 'shopping-cart' },
  '\u{1F467}': { set: 'lucide', name: 'baby' },
  '\u{1F469}': { set: 'lucide', name: 'graduation-cap' },
  '\u{1F3E2}': { set: 'lucide', name: 'building' },
  '\u{2705}': { set: 'lucide', name: 'circle-check' },
  '\u{1F4C1}': { set: 'lucide', name: 'folder' },
  '\u{1F4C2}': { set: 'lucide', name: 'folder' },
  '\u{1F4C8}': { set: 'lucide', name: 'bar-chart-3' },
  '\u{1F4C9}': { set: 'lucide', name: 'trending-down' },
  '\u{1F4E2}': { set: 'lucide', name: 'megaphone' },
  '\u{1F514}': { set: 'lucide', name: 'bell' },
  '\u{1F4F9}': { set: 'lucide', name: 'video' },
  '\u{1F4DC}': { set: 'lucide', name: 'history' },
  '\u{1F504}': { set: 'lucide', name: 'refresh-cw' },
  '\u{2699}\u{FE0F}': { set: 'lucide', name: 'settings' },
  '\u{2699}': { set: 'lucide', name: 'settings' },
  '\u{1F50D}': { set: 'lucide', name: 'search' },
  '\u{1F319}': { set: 'lucide', name: 'moon' },
  '\u{2600}\u{FE0F}': { set: 'lucide', name: 'sun' },
  '\u{2600}': { set: 'lucide', name: 'sun' },
  '\u{2794}': { set: 'lucide', name: 'arrow-right' },
  '\u{1F3EB}': { set: 'lucide', name: 'school' },
  '\u{270F}\u{FE0F}': { set: 'lucide', name: 'user-pen' },
  '\u{270F}': { set: 'lucide', name: 'user-pen' },
  '\u{1F4CE}': { set: 'lucide', name: 'paperclip' },
  '\u{1F6AB}': { set: 'lucide', name: 'user-x' },
  '\u{1F4DD}': { set: 'lucide', name: 'clipboard' },
  '\u{1F3DB}\u{FE0F}': { set: 'lucide', name: 'landmark' },
  '\u{1F3DB}': { set: 'lucide', name: 'landmark' },
  '\u{1F500}': { set: 'lucide', name: 'git-branch' },
  '\u{1F517}': { set: 'lucide', name: 'share-2' },
  '\u{26A1}': { set: 'lucide', name: 'zap' },
  '\u{1F511}': { set: 'lucide', name: 'key-round' },
  '\u{26A0}\u{FE0F}': { set: 'lucide', name: 'circle-alert' },
  '\u{26A0}': { set: 'lucide', name: 'circle-alert' },
  '\u{274C}': { set: 'lucide', name: 'x' },
  '\u{1F7E2}': { set: 'lucide', name: 'circle', color: '#16a34a' },
  '\u{1F534}': { set: 'lucide', name: 'circle', color: '#dc2626' },
  '\u{1F7E1}': { set: 'lucide', name: 'circle', color: '#d97706' },
  '\u{1F7E3}': { set: 'lucide', name: 'circle', color: '#7c3aed' },
  '\u{1F535}': { set: 'lucide', name: 'circle', color: '#2563eb' },
  '\u{1F33E}': { set: 'lucide', name: 'sprout' },
  '\u{1F4E1}': { set: 'lucide', name: 'radio' },
  '\u{1F4BE}': { set: 'lucide', name: 'save' },
  '\u{1F4F7}': { set: 'lucide', name: 'camera' },
  '\u{1F334}': { set: 'lucide', name: 'palmtree' },
  '\u{1F912}': { set: 'lucide', name: 'circle-alert' },
  '\u{2708}\u{FE0F}': { set: 'lucide', name: 'plane' },
  '\u{2708}': { set: 'lucide', name: 'plane' },
  '\u{1F4DE}': { set: 'lucide', name: 'phone' },
  '\u{1F5A8}\u{FE0F}': { set: 'lucide', name: 'printer' },
  '\u{1F5A8}': { set: 'lucide', name: 'printer' },
  '\u{1F4E7}': { set: 'lucide', name: 'mail' },
  '\u{2753}': { set: 'lucide', name: 'help-circle' },
  '▾': { set: 'lucide', name: 'chevron-down' },
  '↑': { set: 'lucide', name: 'arrow-up' },
  '↓': { set: 'lucide', name: 'arrow-down' },

  // Specialized Real-World Everyday Objects (Font Awesome Free 6)
  '\u{1F477}': { set: 'fa', class: 'fa-solid fa-helmet-safety', label: 'Field Worker' },
  '\u{1F468}\u{200D}\u{1F4BC}': { set: 'fa', class: 'fa-solid fa-user-tie', label: 'Administrator' },
  '\u{1F468}': { set: 'fa', class: 'fa-solid fa-user-tie', label: 'Administrator' },
  '\u{1F4BC}': { set: 'fa', class: 'fa-solid fa-briefcase', label: 'Governance' },
  '\u{1F5FA}\u{FE0F}': { set: 'fa', class: 'fa-solid fa-sitemap', label: 'Sitemap' },
  '\u{1F5FA}': { set: 'fa', class: 'fa-solid fa-sitemap', label: 'Sitemap' },
  '\u{1F697}': { set: 'fa', class: 'fa-solid fa-motorcycle', label: 'Two-Wheeler / Bike' },
  '\u{1F68C}': { set: 'fa', class: 'fa-solid fa-bus', label: 'Bus' },
  '\u{1F371}': { set: 'fa', class: 'fa-solid fa-bowl-rice', label: 'Field Meals' },
  '\u{1F372}': { set: 'fa', class: 'fa-solid fa-bowl-rice', label: 'Field Meals' },
  '\u{1F48A}': { set: 'fa', class: 'fa-solid fa-pills', label: 'Medicine' },
  '\u{1F3E8}': { set: 'fa', class: 'fa-solid fa-hotel', label: 'Field Stay' }
};

// Render Lucide SVG helper
function renderLucide(iconName, { size = 20, strokeWidth = 2, className = '', color = 'currentColor', style = '' } = {}) {
  // Convert kebab-case to PascalCase (e.g. map-pin -> MapPin, volume-2 -> Volume2)
  const pascal = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const iconData = lucide[pascal] || lucide.icons[pascal];
  if (!iconData) {
    console.warn('Lucide icon not found:', iconName, '(Pascal:', pascal, ')');
    return `<svg class="lucide lucide-${iconName} ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" aria-hidden="true"></svg>`;
  }

  const inner = iconData.map(([tag, attrs]) => {
    const attrStr = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${attrStr}></${tag}>`;
  }).join('');

  const styleAttr = style ? `style="${style}"` : (color !== 'currentColor' ? `style="color: ${color};"` : '');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${iconName} ${className}" ${styleAttr} aria-hidden="true">${inner}</svg>`;
}

// Render Font Awesome Icon tag
function renderFA(faClass, { className = '', style = '' } = {}) {
  const styleAttr = style ? `style="${style}"` : '';
  return `<i class="${faClass} ${className}" ${styleAttr} aria-hidden="true"></i>`;
}

// Universal Emoji Replacer
function replaceEmoji(emoji, options = {}) {
  const mapping = EMOJI_MAP[emoji];
  if (!mapping) return emoji;
  if (mapping.set === 'lucide') {
    const opts = { ...options };
    if (mapping.color && !opts.color) opts.color = mapping.color;
    return renderLucide(mapping.name, opts);
  } else if (mapping.set === 'fa') {
    return renderFA(mapping.class, options);
  }
  return emoji;
}

module.exports = {
  EMOJI_MAP,
  renderLucide,
  renderFA,
  replaceEmoji
};
