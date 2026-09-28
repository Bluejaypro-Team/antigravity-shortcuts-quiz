# ⚡ Antigravity Shortcuts Mastery | Interactive MCQ Quiz

[![Status](https://img.shields.io/badge/status-production--ready-emerald?style=for-the-badge&logo=firebase)](https://antigravity-shortcuts.web.app/)
[![Zero Defects](https://img.shields.io/badge/audit-zero%20defects-10B981?style=for-the-badge&logo=shield)](file:///C:/Users/arham/.gemini/antigravity-ide/scratch/antigravity-shortcuts-quiz/code_health_summary.md)
[![PWA Ready](https://img.shields.io/badge/PWA-offline--enabled-6366F1?style=for-the-badge&logo=pwa)](file:///C:/Users/arham/.gemini/antigravity-ide/scratch/antigravity-shortcuts-quiz/manifest.json)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

An ultra-responsive, standalone Progressive Web Application (PWA) designed to subconsciously train and cement full muscle memory for all **Google Antigravity** keyboard shortcuts, slash commands, editor lenses, context mentions, and CLI operations through **NotebookLM-style instant positive reinforcement**.

---

## 🌐 Live Production Deployment

* **Primary Production Endpoint**: [https://antigravity-shortcuts.web.app/](https://antigravity-shortcuts.web.app/)
* **Alternative Domain**: [https://antigravity-shortcuts.firebaseapp.com/](https://antigravity-shortcuts.firebaseapp.com/)
* **Firebase Project**: `likeazad57`
* **Hosting Site**: `antigravity-shortcuts`

---

## 🧠 NotebookLM-Inspired Learning Mechanics

1. **Instant Emerald Illumination (Zero Penalty Anxiety)**:
   - Selecting an incorrect option immediately shakes the choice card with a subtle crimson alert while **instantly illuminating the correct choice in glowing emerald green typography, borders, and rationale**, etching the correct pattern into subconscious memory.
2. **Dynamic Continuous Spaced Repetition**:
   - Questions cycle continuously across dynamic rounds, intelligently shuffling choices and prioritizing unmastered shortcuts.
3. **Dual-Direction Variation Matrix**:
   - *Shortcut $\rightarrow$ Action*: *"What does `Ctrl + I` (`⌘ + I`) invoke in Antigravity?"*
   - *Action $\rightarrow$ Shortcut*: *"Which shortcut initiates an inline AI refactor directly over highlighted code?"*
4. **Tactile 3D Keycaps & Real-Time OS Toggle**:
   - Real-time platform switcher between **Windows/Linux** (`Ctrl`, `Alt`, `Shift`) and **macOS** (`⌘`, `⌥`, `Shift`).
5. **Real-Time Performance HUD**:
   - Real-time streak counter 🔥, accuracy percentage, loop phase counter, and a `30 / 30` mastery tracker saved to `localStorage`.
6. **Searchable Antigravity Cheat Sheet**:
   - Built-in modal glossary displaying all 30 shortcuts categorized with live fuzzy filtering.
7. **PWA Standalone & Offline Support**:
   - Fully installable on desktop and mobile via `manifest.json` and cached offline with `sw.js`.

---

## 📂 Codebase Architecture

```text
antigravity-shortcuts-quiz/
├── index.html                   # Core single-page application & PWA entrypoint
├── manifest.json                # Web App Manifest (PWA metadata & shortcuts)
├── sw.js                        # Service Worker (Cache-first offline strategy)
├── server.js                    # Production-ready local HTTP static server & health check
├── package.json                 # Project scripts, audit commands, and dependencies
├── .gitignore                   # Git exclusion rules
├── .firebaserc                  # Firebase project binding
├── firebase.json                # Firebase hosting headers & SPA rewrite rules
├── audit_report.json            # Machine-readable automated issue audit report
├── code_health_summary.md       # Markdown summary of codebase health
├── icons/                       # High-resolution PWA and branding icons
│   ├── icon.svg                 # Scalable vector logo
│   ├── icon-192.png             # 192x192 PWA launcher icon
│   └── icon-512.png             # 512x512 PWA splash icon
├── src/
│   ├── css/
│   │   └── style.css            # Modular standalone stylesheet (dark mode & tactile keys)
│   ├── js/
│   │   └── app.js               # Modular standalone application controller
│   └── data/
│       └── shortcuts.json       # Master 30-item Antigravity shortcuts dataset
└── scripts/
    └── issue_tracker.js         # Automated issue tracker & self-healing scaffolding engine
```

---

## ⌨️ Complete 30-Shortcut Master Reference Table

| ID | Category | Windows / Linux | macOS | Action / Intent |
| :--- | :--- | :--- | :--- | :--- |
| `inline-edit` | Editor Modality | `Ctrl + I` | `⌘ + I` | Trigger Inline AI Command / Refactor |
| `tab-complete` | Editor Modality | `Tab` | `Tab` | Accept Autocomplete / Supercomplete Diff |
| `tab-word-accept` | Editor Modality | `Ctrl + →` | `⌘ + →` | Accept Autocomplete Suggestion Word-by-Word |
| `dismiss-prompt` | Editor Modality | `Esc` | `Esc` | Dismiss Autocomplete / Close Inline Modal |
| `code-lenses` | Editor Canvas | `Code Lens` | `Code Lens` | Trigger Target Actions via Inline Code Lenses |
| `diff-overlay` | Editor Canvas | `Alt + F5` | `⌥ + F5` | Navigate to Next Diff Chunk in Agent Review |
| `toggle-terminal` | Editor Canvas | `Ctrl + \`` | `⌘ + \`` | Toggle Integrated Terminal |
| `quick-open` | Editor Canvas | `Ctrl + P` | `⌘ + P` | Quick Open File Search |
| `cmd-palette` | Editor Canvas | `Ctrl + Shift + P` | `⌘ + Shift + P` | Open Full Command Palette |
| `split-editor` | Editor Canvas | `Ctrl + \` | `⌘ + \` | Split Editor Pane Side-by-Side |
| `toggle-sidebar` | Editor Canvas | `Ctrl + B` | `⌘ + B` | Toggle Primary Sidebar |
| `global-search` | Editor Canvas | `Ctrl + Shift + F` | `⌘ + Shift + F` | Global Workspace Search |
| `jump-definition` | Editor Canvas | `F12` | `F12` | Go to Symbol Definition |
| `open-chat` | Agent Chat | `Ctrl + L` | `⌘ + L` | Open / Focus Sidebar Agent Chat |
| `new-chat` | Agent Chat | `Ctrl + N` | `⌘ + N` | Start a New Chat Session / Conversation |
| `toggle-aux` | Auxiliary Pane | `Ctrl + Shift + L` | `⌘ + Shift + L` | Toggle Agent Auxiliary Pane (Artifacts & Tasks) |
| `slash-plan` | Slash Commands | `/plan` | `/plan` | Activate Planning Mode (Mandatory Design Review) |
| `slash-goal` | Slash Commands | `/goal` | `/goal` | Launch Autonomous Goal Mode |
| `slash-schedule` | Slash Commands | `/schedule` | `/schedule` | Set Recurring Cron Job or Delayed Timer |
| `slash-grill-me` | Slash Commands | `/grill-me` | `/grill-me` | Interactive Design & Architecture Interview |
| `slash-learn` | Slash Commands | `/learn` | `/learn` | Capture & Persist Solution to Custom Rules |
| `slash-clear` | Slash Commands | `/clear` | `/clear` | Reset / Clear Chat Viewport |
| `mention-menu` | Context & Mentions | `@` | `@` | Open Context Mention Menu |
| `mention-file` | Context & Mentions | `@file` | `@file` | Attach Specific File Context to Prompt |
| `mention-mcp` | Context & Mentions | `@tool` | `@tool` | Reference Model Context Protocol (MCP) Tool |
| `mention-terminal`| Context & Mentions | `@terminal` | `@terminal` | Attach Active Terminal Output to Context |
| `cli-launch` | Antigravity CLI | `agy` | `agy` | Launch Antigravity CLI Terminal Interface |
| `cli-exit-key` | Antigravity CLI | `Ctrl+D Ctrl+D` | `Ctrl+D Ctrl+D` | Fast Double-Keystroke Exit from CLI |
| `cli-exit-cmd` | Antigravity CLI | `/exit` | `/exit` | Text Command to Terminate CLI Session |
| `cli-help` | Antigravity CLI | `agy --help` | `agy --help` | Display All CLI Subcommands and Flags |

---

## 🔍 Automated Issue Tracker & Self-Healing Scaffolding

This project includes a built-in automated issue tracker and static analysis engine (`scripts/issue_tracker.js`):

### 1. Verification Audit
Run the automated diagnostic suite to audit the manifest, shortcuts data, HTML DOM integrity, and AudioContext safety:
```bash
npm test
# or
node scripts/issue_tracker.js
```

### 2. Self-Healing Auto-Fix Loop
If any schema inconsistency, missing PWA reference, or out-of-sync shortcut dataset is detected, run the auto-fixer:
```bash
npm run autofix
# or
node scripts/issue_tracker.js --fix
```
The script will automatically heal the codebase and update [`code_health_summary.md`](./code_health_summary.md) and [`audit_report.json`](./audit_report.json).

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (zero external npm packages required for runtime)

### Running the Local Dev Server
```bash
npm start
```
The server will boot on **`http://localhost:3344/`** with MIME types and health checks.

---

## 📦 How to Push to Private GitHub Repository

To push this codebase to your private GitHub repository, run the following commands in PowerShell or Bash:

```powershell
# 1. Ensure you are inside the project folder
cd "C:\Users\arham\.gemini\antigravity-ide\scratch\antigravity-shortcuts-quiz"

# 2. Add your GitHub remote repository
git remote add origin https://github.com/Bluejaypro-Team/antigravity-shortcuts-quiz.git

# 3. Push to main branch
git push -u origin main
```

*(Note: Authenticate securely via GitHub CLI or standard personal access token prompts without hardcoding credentials).*

---

## 📄 License
MIT © 2026 Antigravity Engineering Pair
