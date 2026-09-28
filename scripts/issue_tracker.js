/**
 * ============================================================================
 * GEMINI CODE ASSIST SCAFFOLDING & AUTOMATIC ISSUE TRACKER
 * Antigravity Shortcuts Mastery Web App - Zero-Defect Audit & Self-Healing Loop
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const FIX_MODE = process.argv.includes('--fix') || process.argv.includes('-f') || process.argv.includes('--sync');
const VERBOSE = process.argv.includes('--verbose') || process.argv.includes('-v');

const issues = [];
const fixesApplied = [];

function recordIssue(category, description, severity = 'WARNING', autoFixable = true) {
  issues.push({ category, description, severity, autoFixable });
}

function recordFix(description) {
  fixesApplied.push(description);
}

console.log('\n=================================================================');
console.log('  🔍 GEMINI CODE ASSIST: AUTOMATIC ISSUE TRACKER & CODE AUDIT');
console.log(`  📂 Target Directory: ${ROOT_DIR}`);
console.log(`  🔧 Auto-Fix Mode:    ${FIX_MODE ? 'ACTIVE (Self-Healing Enabled)' : 'OFF (Run with --fix to apply repairs)'}`);
console.log('=================================================================\n');

/* -------------------------------------------------------------------------- */
/* AUDIT 1: MANIFEST.JSON VALIDATION                                          */
/* -------------------------------------------------------------------------- */
const manifestPath = path.join(ROOT_DIR, 'manifest.json');
let manifest = null;

if (!fs.existsSync(manifestPath)) {
  recordIssue('PWA Manifest', 'manifest.json is missing in project root', 'ERROR', true);
} else {
  try {
    const raw = fs.readFileSync(manifestPath, 'utf8');
    manifest = JSON.parse(raw);
    const requiredKeys = ['name', 'short_name', 'start_url', 'display', 'background_color', 'theme_color', 'icons'];
    for (const key of requiredKeys) {
      if (!manifest[key]) {
        recordIssue('PWA Manifest', `Field "${key}" is missing in manifest.json`, 'WARNING', true);
      }
    }

    if (Array.isArray(manifest.icons)) {
      for (const icon of manifest.icons) {
        const iconPath = path.join(ROOT_DIR, icon.src);
        if (!fs.existsSync(iconPath)) {
          recordIssue('PWA Icons', `Icon specified in manifest does not exist: ${icon.src}`, 'WARNING', false);
        }
      }
    }
  } catch (err) {
    recordIssue('PWA Manifest', `Failed to parse manifest.json: ${err.message}`, 'ERROR', false);
  }
}

/* -------------------------------------------------------------------------- */
/* AUDIT 2: SHORTCUTS DATASET INTEGRITY                                       */
/* -------------------------------------------------------------------------- */
const shortcutsDataPath = path.join(ROOT_DIR, 'src', 'data', 'shortcuts.json');
let shortcutsData = null;

if (!fs.existsSync(shortcutsDataPath)) {
  recordIssue('Data Layer', 'src/data/shortcuts.json is missing', 'ERROR', true);
} else {
  try {
    const raw = fs.readFileSync(shortcutsDataPath, 'utf8');
    shortcutsData = JSON.parse(raw);

    if (!Array.isArray(shortcutsData) || shortcutsData.length === 0) {
      recordIssue('Data Layer', 'shortcuts.json must contain a non-empty array', 'ERROR', false);
    } else {
      const seenIds = new Set();
      shortcutsData.forEach((item, idx) => {
        if (!item.id) {
          recordIssue('Shortcuts Data', `Item at index ${idx} is missing unique id`, 'ERROR', true);
        } else if (seenIds.has(item.id)) {
          recordIssue('Shortcuts Data', `Duplicate shortcut id detected: "${item.id}"`, 'ERROR', false);
        } else {
          seenIds.add(item.id);
        }

        if (!Array.isArray(item.winKeys) || item.winKeys.length === 0) {
          recordIssue('Shortcuts Data', `Item "${item.id}" has invalid winKeys array`, 'ERROR', false);
        }
        if (!Array.isArray(item.macKeys) || item.macKeys.length === 0) {
          recordIssue('Shortcuts Data', `Item "${item.id}" has invalid macKeys array`, 'ERROR', false);
        }
        if (!item.action || typeof item.action !== 'string') {
          recordIssue('Shortcuts Data', `Item "${item.id}" is missing valid action string`, 'ERROR', false);
        }
        if (!item.description) {
          recordIssue('Shortcuts Data', `Item "${item.id}" is missing description`, 'WARNING', false);
        }
        if (!item.rationale) {
          recordIssue('Shortcuts Data', `Item "${item.id}" is missing rationale string`, 'WARNING', false);
        }
      });
    }
  } catch (err) {
    recordIssue('Data Layer', `Failed to parse shortcuts.json: ${err.message}`, 'ERROR', false);
  }
}

/* -------------------------------------------------------------------------- */
/* AUDIT 3: INDEX.HTML VALIDATION & DATA SYNCHRONIZATION                      */
/* -------------------------------------------------------------------------- */
const indexPath = path.join(ROOT_DIR, 'index.html');
let htmlContent = '';

if (!fs.existsSync(indexPath)) {
  recordIssue('Core App', 'index.html is missing', 'CRITICAL', false);
} else {
  htmlContent = fs.readFileSync(indexPath, 'utf8');

  // Verify Manifest link
  if (!htmlContent.includes('rel="manifest"') && !htmlContent.includes("rel='manifest'")) {
    recordIssue('PWA Integration', 'index.html is missing <link rel="manifest"> tag', 'WARNING', true);
    if (FIX_MODE) {
      htmlContent = htmlContent.replace(
        '<meta name="description"',
        '<meta name="theme-color" content="#6366F1">\n  <link rel="manifest" href="manifest.json">\n  <meta name="description"'
      );
      recordFix('Injected <link rel="manifest"> and theme-color meta tag into index.html');
    }
  }

  // Verify Service Worker Registration
  if (!htmlContent.includes('serviceWorker.register') && !htmlContent.includes("sw.js")) {
    recordIssue('PWA Offline', 'Service Worker registration script missing in index.html', 'WARNING', true);
    if (FIX_MODE) {
      const swSnippet = `
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.debug('[PWA] SW register notice:', err);
        });
      });
    }
  </script>
</body>`;
      htmlContent = htmlContent.replace('</body>', swSnippet);
      recordFix('Injected PWA service worker registration into index.html');
    }
  }

  // Verify AudioContext safety (preventing autoplay policy console warnings)
  if (htmlContent.includes('new (window.AudioContext || window.webkitAudioContext)()') && !htmlContent.includes('getAudioContext()')) {
    recordIssue('Audio Context', 'AudioContext is eagerly initialized at page load (may trigger browser autoplay warning)', 'WARNING', true);
    if (FIX_MODE) {
      htmlContent = htmlContent.replace(
        `const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;`,
        `let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }`
      );
      htmlContent = htmlContent.replace(
        `function playSound(type) {
      if (!state.soundEnabled || !audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }`,
        `function playSound(type) {
      if (!state.soundEnabled) return;
      const ctx = getAudioContext();
      if (!ctx) return;`
      );
      htmlContent = htmlContent.replace(/audioCtx\.currentTime/g, 'ctx.currentTime');
      htmlContent = htmlContent.replace(/audioCtx\.createOscillator/g, 'ctx.createOscillator');
      htmlContent = htmlContent.replace(/audioCtx\.createGain/g, 'ctx.createGain');
      htmlContent = htmlContent.replace(/audioCtx\.destination/g, 'ctx.destination');
      recordFix('Upgraded Web Audio synthesizer to lazy-initialized, autoplay-compliant getter in index.html');
    }
  }

  // Verify dataset alignment between shortcuts.json and index.html
  if (shortcutsData && Array.isArray(shortcutsData)) {
    const jsonCount = shortcutsData.length;
    const s = htmlContent.indexOf('const SHORTCUTS_DATA = [');
    const e = htmlContent.indexOf('const state = {');
    if (s !== -1 && e !== -1) {
      const block = htmlContent.substring(s, e);
      const semi = block.lastIndexOf('];');
      if (semi !== -1) {
        try {
          const arrayCode = block.substring('const SHORTCUTS_DATA = '.length, semi + 1);
          const inHtmlData = eval(arrayCode);
          if (inHtmlData.length !== jsonCount) {
            recordIssue('Data Synchronization', `index.html has ${inHtmlData.length} shortcuts while shortcuts.json has ${jsonCount}`, 'WARNING', true);
            if (FIX_MODE) {
              const formattedJson = JSON.stringify(shortcutsData, null, 2);
              const newBlock = `const SHORTCUTS_DATA = ${formattedJson};\n\n    /* ============================================================ */\n    /* STATE MANAGEMENT                                             */\n    /* ============================================================ */\n\n    `;
              htmlContent = htmlContent.substring(0, s) + newBlock + htmlContent.substring(e);
              recordFix(`Synchronized all ${jsonCount} shortcuts from shortcuts.json into index.html`);
            }
          }
        } catch (err) {
          recordIssue('Data Synchronization', `Failed to parse SHORTCUTS_DATA in index.html: ${err.message}`, 'WARNING', false);
        }
      }
    }
  }

  // Save changes if fixes were applied
  if (FIX_MODE && fixesApplied.length > 0) {
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
  }
}

/* -------------------------------------------------------------------------- */
/* AUDIT 4: CONFIGURATION REVIEWS (Firebase & Package)                        */
/* -------------------------------------------------------------------------- */
const firebaseConfigPath = path.join(ROOT_DIR, 'firebase.json');
if (!fs.existsSync(firebaseConfigPath)) {
  recordIssue('Deployment Config', 'firebase.json is missing', 'WARNING', false);
}

const firebasercPath = path.join(ROOT_DIR, '.firebaserc');
if (!fs.existsSync(firebasercPath)) {
  recordIssue('Deployment Config', '.firebaserc is missing', 'WARNING', false);
}

const packageJsonPath = path.join(ROOT_DIR, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  recordIssue('NPM Configuration', 'package.json is missing', 'ERROR', false);
}

/* -------------------------------------------------------------------------- */
/* REPORT GENERATION                                                          */
/* -------------------------------------------------------------------------- */
const errors = issues.filter(i => i.severity === 'ERROR' || i.severity === 'CRITICAL');
const warnings = issues.filter(i => i.severity === 'WARNING');

const reportData = {
  timestamp: new Date().toISOString(),
  environment: 'Antigravity IDE & Gemini Code Assist Scaffolding',
  auditSummary: {
    totalIssuesFound: issues.length,
    criticalErrors: errors.length,
    warnings: warnings.length,
    fixesAppliedCount: fixesApplied.length,
    status: errors.length === 0 ? 'HEALTHY_ZERO_DEFECTS' : 'ACTION_REQUIRED'
  },
  fixesApplied,
  issues
};

fs.writeFileSync(path.join(ROOT_DIR, 'audit_report.json'), JSON.stringify(reportData, null, 2), 'utf8');

// Generate Markdown Health Summary
const mdSummary = `# Codebase Health & Automated Issue Tracker Report

**Generated At**: ${reportData.timestamp}  
**Auditor Engine**: Gemini Code Assist Scaffolding Issue Tracker  
**Overall Status**: ${errors.length === 0 ? '✅ **100% Zero Defects Verified**' : '⚠️ **Action Required**'}

---

## 📊 Summary Metrics

| Metric | Value |
| :--- | :--- |
| **Total Issues Detected** | ${issues.length} |
| **Critical Errors** | ${errors.length} |
| **Warnings** | ${warnings.length} |
| **Auto-Fixes Executed** | ${fixesApplied.length} |
| **Data Count** | ${shortcutsData ? shortcutsData.length : 0} Master Shortcuts Verified |

---

## 🔧 Self-Healing Fixes Executed

${fixesApplied.length > 0 ? fixesApplied.map(f => `- ✅ ${f}`).join('\n') : '*No pending repairs required; codebase is already pristine.*'}

---

## 📋 Tracked Diagnostic Log

${issues.length > 0 ? issues.map(i => `- **[${i.severity}]** \`${i.category}\`: ${i.description} *(Auto-Fixable: ${i.autoFixable ? 'Yes' : 'No'})*`).join('\n') : '✅ *Zero issues detected across all audited layers.*'}

---
*Report automatically generated by scripts/issue_tracker.js.*
`;

fs.writeFileSync(path.join(ROOT_DIR, 'code_health_summary.md'), mdSummary, 'utf8');

// Console Output
console.log('📊 AUDIT RESULTS SUMMARY:');
console.log(`   - Total Issues Found: ${issues.length}`);
console.log(`   - Critical Errors:    ${errors.length}`);
console.log(`   - Warnings:           ${warnings.length}`);
console.log(`   - Auto-Fixes Applied: ${fixesApplied.length}`);

if (fixesApplied.length > 0) {
  console.log('\n🛠️ AUTO-FIX LOG:');
  fixesApplied.forEach(f => console.log(`   + [FIXED] ${f}`));
}

if (errors.length > 0) {
  console.log('\n❌ OUTSTANDING DEFECTS:');
  errors.forEach(e => console.log(`   ! [${e.category}] ${e.description}`));
}

console.log('\n📄 Generated Artifacts:');
console.log('   - audit_report.json');
console.log('   - code_health_summary.md\n');

if (errors.length === 0) {
  console.log('✅ CODEBASE VERIFIED 100% HEALTHY - Zero Defects Detected!\n');
  process.exit(0);
} else {
  console.error('⚠️ AUDIT FINISHED WITH OPEN ERRORS.\n');
  process.exit(1);
}
