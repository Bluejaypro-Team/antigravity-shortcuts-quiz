/* ============================================================ */
    /* ANTIGRAVITY MASTER SHORTCUTS DATASET                          */
    /* ============================================================ */

    const SHORTCUTS_DATA = [
      // 1. Editor & Code Lenses
      {
        id: "inline-edit",
        category: "editor",
        categoryLabel: "Editor Modality",
        winKeys: ["Ctrl", "I"],
        macKeys: ["⌘", "I"],
        action: "Trigger Inline AI Command / Refactor",
        description: "Opens the instructive inline editing modal directly over highlighted code or generates net-new code at cursor.",
        rationale: "Ctrl+I (Cmd+I) is the primary inline instruction shortcut in Antigravity for localized, in-place edits and refactoring."
      },
      {
        id: "tab-complete",
        category: "editor",
        categoryLabel: "Editor Modality",
        winKeys: ["Tab"],
        macKeys: ["Tab"],
        action: "Accept Autocomplete / Supercomplete Diff",
        description: "Accepts full inline AI code suggestion, navigates to the predicted jump point, or auto-inserts missing imports.",
        rationale: "Tab routes next-intent prediction: autocomplete suggestions, larger Supercomplete diffs, and Tab-to-Jump navigation."
      },
      {
        id: "tab-word-accept",
        category: "editor",
        categoryLabel: "Editor Modality",
        winKeys: ["Ctrl", "→"],
        macKeys: ["⌘", "→"],
        action: "Accept Autocomplete Suggestion Word-by-Word",
        description: "Partially accepts an inline suggestion token by token instead of committing the entire multi-line block.",
        rationale: "Use Ctrl+Right Arrow (Cmd+Right Arrow) when you only want the beginning of an AI completion."
      },
      {
        id: "dismiss-prompt",
        category: "editor",
        categoryLabel: "Editor Modality",
        winKeys: ["Esc"],
        macKeys: ["Esc"],
        action: "Dismiss Autocomplete / Close Inline Modal",
        description: "Cancels current active AI autocomplete suggestion or closes the active inline command dialog.",
        rationale: "Escape universally dismisses transient AI overlays, floating supercomplete widgets, and inline edit inputs."
      },
      {
        id: "code-lenses",
        category: "editor",
        categoryLabel: "Editor Canvas",
        winKeys: ["Code", "Lens"],
        macKeys: ["Code", "Lens"],
        action: "Trigger Target Actions via Inline Code Lenses",
        description: "Clickable action buttons appearing above functions and classes for instant 'Explain', 'Refactor', or 'Write Tests'.",
        rationale: "Code Lenses are contextual in-editor triggers placed directly above code symbols for one-click agent operations."
      },
      {
        id: "diff-overlay",
        category: "editor",
        categoryLabel: "Editor Canvas",
        winKeys: ["Alt", "F5"],
        macKeys: ["⌥", "F5"],
        action: "Navigate to Next Diff Chunk in Agent Review",
        description: "Jumps between proposed additions/deletions in the inline red/green visual diff review overlay.",
        rationale: "Visual Diff Overlays inside the editor canvas let you inspect, jump between chunks, and selectively accept changes."
      },

      // 2. Agent Chat & Canvas
      {
        id: "open-chat",
        category: "chat",
        categoryLabel: "Agent Chat & Canvas",
        winKeys: ["Ctrl", "L"],
        macKeys: ["⌘", "L"],
        action: "Open / Focus Sidebar Agent Chat",
        description: "Toggles or focuses the primary Antigravity pair programmer chat panel without losing editor context.",
        rationale: "Ctrl+L (Cmd+L) immediately shifts focus to the collaborative Agent Chat panel for prompts, planning, and questions."
      },
      {
        id: "new-chat",
        category: "chat",
        categoryLabel: "Agent Chat & Canvas",
        winKeys: ["Ctrl", "N"],
        macKeys: ["⌘", "N"],
        action: "Start a New Chat Session / Conversation",
        description: "Clears active session context and starts a fresh conversation thread with the agent.",
        rationale: "Ctrl+N (Cmd+N) in the chat panel initializes a new conversation thread with clean context."
      },
      {
        id: "toggle-aux",
        category: "chat",
        categoryLabel: "Auxiliary Pane",
        winKeys: ["Ctrl", "Shift", "L"],
        macKeys: ["⌘", "Shift", "L"],
        action: "Toggle Agent Auxiliary Pane (Artifacts & Tasks)",
        description: "Opens/closes the auxiliary drawer showing Background Tasks, Subagents, Artifacts, and Terminals.",
        rationale: "Ctrl+Shift+L (Cmd+Shift+L) controls the auxiliary panel that hosts artifacts, task monitors, and subagents."
      },

      // 3. Slash Commands
      {
        id: "slash-plan",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/plan"],
        macKeys: ["/plan"],
        action: "Activate Planning Mode (Mandatory Design Review)",
        description: "Commands the agent to analyze, draft a detailed implementation plan artifact, and await approval before modifying code.",
        rationale: "/plan forces the agent into strict planning mode: no modifying commands or code changes until you click Proceed."
      },
      {
        id: "slash-goal",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/goal"],
        macKeys: ["/goal"],
        action: "Launch Autonomous Goal Mode",
        description: "Sets a high-persistence overnight/long-running agent loop that iterates autonomously until task is 100% complete.",
        rationale: "/goal instructs the agent to persist through errors, self-test, and run until the overarching goal is fully realized."
      },
      {
        id: "slash-schedule",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/schedule"],
        macKeys: ["/schedule"],
        action: "Set Recurring Cron Job or Delayed Timer",
        description: "Configures recurring background cron jobs (e.g., */5 * * * *) or one-shot delayed reminders without blocking.",
        rationale: "/schedule manages background cron timers and notifications within the agent architecture."
      },
      {
        id: "slash-grill-me",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/grill-me"],
        macKeys: ["/grill-me"],
        action: "Interactive Design & Architecture Interview",
        description: "Prompts the agent to actively question the developer to resolve edge cases and clarify ambiguities before coding.",
        rationale: "/grill-me turns the agent into an interviewer, asking probing technical questions to align design decisions."
      },
      {
        id: "slash-learn",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/learn"],
        macKeys: ["/learn"],
        action: "Capture & Persist Solution to Custom Rules",
        description: "Instructs the agent to summarize a complex setup or correction and persist it into project or global agent memory.",
        rationale: "/learn is used after debugging or fixing a difficult pattern so the agent remembers the rule forever."
      },
      {
        id: "slash-clear",
        category: "slash",
        categoryLabel: "Slash Commands",
        winKeys: ["/clear"],
        macKeys: ["/clear"],
        action: "Reset / Clear Chat Viewport",
        description: "Visually clears the current chat canvas view while keeping relevant background memories active.",
        rationale: "/clear cleans up a cluttered chat interface for a fresh visual workspace."
      },

      // 4. Context & @ Mentions
      {
        id: "mention-menu",
        category: "context",
        categoryLabel: "Context & Mentions",
        winKeys: ["@"],
        macKeys: ["@"],
        action: "Open Context Mention Menu",
        description: "Opens the autocomplete menu to attach files, directories, previous conversations, terminal logs, or MCP tools.",
        rationale: "Typing @ directly in the chat box invokes the multi-category context picker."
      },
      {
        id: "mention-file",
        category: "context",
        categoryLabel: "Context & Mentions",
        winKeys: ["@", "File"],
        macKeys: ["@", "File"],
        action: "Attach Specific File Context to Prompt",
        description: "Injects the exact content and path of a workspace file into the agent's immediate attention window.",
        rationale: "@filename allows zero-friction pinning of specific code files to the conversation turn."
      },
      {
        id: "mention-mcp",
        category: "context",
        categoryLabel: "Context & Mentions",
        winKeys: ["@", "Tool"],
        macKeys: ["@", "Tool"],
        action: "Reference Model Context Protocol (MCP) Tool",
        description: "Directly instructs the agent to invoke or inspect a specific registered external MCP server or schema.",
        rationale: "Using @server/tool lets you explicitly direct the agent's tool execution toward a specific MCP resource."
      },

      // 5. Antigravity CLI (agy)
      {
        id: "cli-launch",
        category: "cli",
        categoryLabel: "Antigravity CLI",
        winKeys: ["agy"],
        macKeys: ["agy"],
        action: "Launch Antigravity CLI Terminal Interface",
        description: "Command entered in Bash, PowerShell, or Zsh to start the lightweight terminal agent TUI.",
        rationale: "'agy' is the official terminal binary for Google Antigravity CLI sessions."
      },
      {
        id: "cli-exit-key",
        category: "cli",
        categoryLabel: "Antigravity CLI",
        winKeys: ["Ctrl", "D", "Ctrl", "D"],
        macKeys: ["Ctrl", "D", "Ctrl", "D"],
        action: "Fast Double-Keystroke Exit from CLI",
        description: "Pressing Ctrl+D twice quickly exits the active Antigravity CLI terminal session.",
        rationale: "Double Ctrl+D is the rapid terminal escape sequence built into the agy TUI."
      },
      {
        id: "cli-exit-cmd",
        category: "cli",
        categoryLabel: "Antigravity CLI",
        winKeys: ["/exit"],
        macKeys: ["/exit"],
        action: "Text Command to Terminate CLI Session",
        description: "Typing /exit or /quit cleanly closes the agy session and saves conversation state.",
        rationale: "/exit or /quit gracefully disconnects the CLI session."
      },
      {
        id: "cli-help",
        category: "cli",
        categoryLabel: "Antigravity CLI",
        winKeys: ["agy", "--help"],
        macKeys: ["agy", "--help"],
        action: "Display All CLI Subcommands and Flags",
        description: "Prints command line flags, authentication options, model settings, and subcommands in the terminal.",
        rationale: "'agy --help' outputs the full command-line specification for the Antigravity CLI."
      },

      // 6. Additional Advanced IDE Shortcuts
      {
        id: "toggle-terminal",
        category: "editor",
        categoryLabel: "Editor Canvas",
        winKeys: ["Ctrl", "`"],
        macKeys: ["Ctrl", "`"],
        action: "Toggle Integrated Terminal",
        description: "Opens or hides the built-in terminal pane where agent commands and builds execute.",
        rationale: "Ctrl+` (backtick) toggles the bottom terminal pane in the IDE."
      },
      {
        id: "quick-open",
        category: "editor",
        categoryLabel: "Editor Canvas",
        winKeys: ["Ctrl", "P"],
        macKeys: ["⌘", "P"],
        action: "Quick Open File Search",
        description: "Opens fuzzy file picker across all directories in the active workspace.",
        rationale: "Ctrl+P (Cmd+P) provides instant file jumping across complex project trees."
      },
      {
        id: "cmd-palette",
        category: "editor",
        categoryLabel: "Editor Canvas",
        winKeys: ["Ctrl", "Shift", "P"],
        macKeys: ["⌘", "Shift", "P"],
        action: "Open Full Command Palette",
        description: "Accesses every IDE command, agent setting, extension action, and configuration option.",
        rationale: "Ctrl+Shift+P (Cmd+Shift+P) launches the universal Command Palette."
      }
    ];

    /* ============================================================ */
    /* STATE MANAGEMENT                                             */
    /* ============================================================ */

    const state = {
      platform: localStorage.getItem('ag_platform') || 'win',
      soundEnabled: localStorage.getItem('ag_sound') !== 'false',
      activeCategory: 'all',
      filteredPool: [],
      currentIndex: 0,
      roundNumber: 1,
      streak: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      masteredIds: new Set(JSON.parse(localStorage.getItem('ag_mastered') || '[]')),
      currentQuestion: null,
      hasAnswered: false,
      autoAdvanceTimer: null
    };

    /* Web Audio Sound Synthesizer */
    const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

    function playSound(type) {
      if (!state.soundEnabled || !audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        // High harmonic sparkle chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.12); // A5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        // Low subdued feedback click
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    }

    /* Helper: Format Keys for Platform */
    function formatKeyHtml(key) {
      return `<kbd class="tactile-key">${key}</kbd>`;
    }

    function getPlatformKeys(item) {
      return state.platform === 'mac' ? item.macKeys : item.winKeys;
    }

    function renderKeysGroupHtml(keysArray) {
      return keysArray.map(k => formatKeyHtml(k)).join('<span class="keys-plus">+</span>');
    }

    /* ============================================================ */
    /* QUESTION GENERATION ENGINE (Bidirectional Variations)        */
    /* ============================================================ */

    function generateQuestions() {
      let pool = [];

      // Filter by category if not 'all'
      const baseItems = (state.activeCategory === 'all') 
        ? SHORTCUTS_DATA 
        : SHORTCUTS_DATA.filter(item => item.category === state.activeCategory);

      baseItems.forEach(item => {
        const keysFormatted = getPlatformKeys(item);

        // Variation A: "What does [Keys] do in Antigravity?"
        pool.push({
          type: 'key-to-action',
          item: item,
          promptText: `What does the following shortcut execute in Antigravity?`,
          keysShowcase: keysFormatted,
          correctAnswer: item.action,
          distractorGetter: (other) => other.action
        });

        // Variation B: "Which shortcut executes [Action]?"
        pool.push({
          type: 'action-to-key',
          item: item,
          promptText: `Which Antigravity shortcut executes: <span style="color:#A5B4FC;">"${item.action}"</span>?`,
          keysShowcase: null,
          correctAnswer: keysFormatted.join(' + '),
          distractorGetter: (other) => getPlatformKeys(other).join(' + ')
        });
      });

      // Fisher-Yates Shuffle
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      state.filteredPool = pool;
      state.currentIndex = 0;
    }

    /* Build 4 MCQ Options */
    function buildOptions(q) {
      const correct = q.correctAnswer;
      const choices = [correct];

      // Pool of possible distractors from entire dataset
      const otherItems = SHORTCUTS_DATA.filter(it => it.id !== q.item.id);
      
      // Shuffle other items to pick 3 random distractors
      const shuffledOthers = [...otherItems].sort(() => 0.5 - Math.random());

      for (let other of shuffledOthers) {
        const distractor = q.distractorGetter(other);
        if (distractor && !choices.includes(distractor)) {
          choices.push(distractor);
        }
        if (choices.length === 4) break;
      }

      // Shuffle choices so correct answer position is randomized
      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }

      return choices;
    }

    /* ============================================================ */
    /* UI RENDERING                                                 */
    /* ============================================================ */

    const elPromptContainer = document.getElementById('promptContainer');
    const elOptionsGrid = document.getElementById('optionsGrid');
    const elCategoryBadge = document.getElementById('categoryBadge');
    const elQuestionCounter = document.getElementById('questionCounter');
    const elProgressFill = document.getElementById('progressFill');
    const elExplanationCard = document.getElementById('explanationCard');
    const elExplanationTitle = document.getElementById('explanationTitle');
    const elExplanationText = document.getElementById('explanationText');
    const elNextBtn = document.getElementById('nextBtn');
    const elStreakCount = document.getElementById('streakCount');
    const elAccuracyVal = document.getElementById('accuracyVal');
    const elMasteredCount = document.getElementById('masteredCount');
    const elLoopCycle = document.getElementById('loopCycle');

    function renderCurrentQuestion() {
      clearTimeout(state.autoAdvanceTimer);
      state.hasAnswered = false;

      // Handle loop cycling
      if (state.currentIndex >= state.filteredPool.length) {
        state.roundNumber++;
        generateQuestions();
      }

      const q = state.filteredPool[state.currentIndex];
      state.currentQuestion = q;
      const item = q.item;

      // Update Meta
      elCategoryBadge.textContent = item.categoryLabel.toUpperCase();
      elQuestionCounter.textContent = `QUESTION ${state.currentIndex + 1} / ${state.filteredPool.length}`;
      
      const pct = Math.round(((state.currentIndex) / state.filteredPool.length) * 100);
      elProgressFill.style.width = `${pct}%`;

      elLoopCycle.textContent = `Round ${state.roundNumber}`;

      // Reset Explanations & Next Button
      elExplanationCard.className = 'explanation-card';
      elNextBtn.style.display = 'none';

      // Render Prompt
      let promptHtml = `<div class="question-prompt">${q.promptText}</div>`;
      if (q.keysShowcase) {
        promptHtml += `<div class="keys-showcase">${renderKeysGroupHtml(q.keysShowcase)}</div>`;
      }
      elPromptContainer.innerHTML = promptHtml;

      // Build & Render Options
      const choices = buildOptions(q);
      const letters = ['A', 'B', 'C', 'D'];

      elOptionsGrid.innerHTML = choices.map((choice, idx) => {
        // If choice is formatted as keys (e.g. "Ctrl + I"), render as tactile keys
        let choiceDisplay = choice;
        if (q.type === 'action-to-key') {
          const keys = choice.split(' + ');
          choiceDisplay = renderKeysGroupHtml(keys);
        }

        return `
          <button class="option-btn" data-value="${escapeHtml(choice)}" data-index="${idx}" id="opt-${idx}">
            <div class="option-content">
              <span class="option-letter">${letters[idx]}</span>
              <span class="option-text">${choiceDisplay}</span>
            </div>
            <div class="option-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path class="icon-path" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </button>
        `;
      }).join('');

      // Attach click events
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleChoiceSelection(btn));
      });
    }

    function escapeHtml(string) {
      return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    /* ============================================================ */
    /* NOTEBOOKLM-STYLE INSTANT REINFORCEMENT LOGIC                 */
    /* ============================================================ */

    function handleChoiceSelection(selectedBtn) {
      if (state.hasAnswered) return;
      state.hasAnswered = true;

      const selectedValue = selectedBtn.getAttribute('data-value');
      const correctValue = state.currentQuestion.correctAnswer;
      const isCorrect = (selectedValue === correctValue);

      state.totalAnswered++;
      if (isCorrect) {
        state.totalCorrect++;
        state.streak++;
        state.masteredIds.add(state.currentQuestion.item.id);
        localStorage.setItem('ag_mastered', JSON.stringify([...state.masteredIds]));
      } else {
        state.streak = 0;
      }

      updateStatsHUD();

      // Disable all option buttons
      const allButtons = document.querySelectorAll('.option-btn');
      allButtons.forEach(btn => {
        btn.disabled = true;
      });

      if (isCorrect) {
        // CORRECT: Green celebration
        playSound('correct');
        selectedBtn.classList.add('state-correct');
        allButtons.forEach(b => {
          if (b !== selectedBtn) b.classList.add('dimmed');
        });

        elExplanationCard.className = 'explanation-card correct-expl show';
        elExplanationTitle.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
          EXACT MATCH &bull; SHORTCUT MEMORIZED
        `;
        elExplanationText.textContent = state.currentQuestion.item.rationale;

      } else {
        // WRONG: INSTANT NOTEBOOKLM FEEDBACK
        // 1. Play feedback sound
        playSound('wrong');

        // 2. Mark the selected button as wrong (flashes red/shakes)
        selectedBtn.classList.add('state-wrong');
        selectedBtn.querySelector('.icon-path').setAttribute('d', 'M6 18L18 6M6 6l12 12');

        // 3. INSTANTLY REVEAL THE CORRECT ANSWER in Glowing Emerald Green!
        allButtons.forEach(btn => {
          if (btn.getAttribute('data-value') === correctValue) {
            btn.classList.add('state-reveal-correct');
            btn.querySelector('.icon-path').setAttribute('d', 'M5 13l4 4L19 7');
          } else if (btn !== selectedBtn) {
            btn.classList.add('dimmed');
          }
        });

        // 4. Show explanation card with clear green accent
        elExplanationCard.className = 'explanation-card wrong-expl show';
        elExplanationTitle.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="3"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          KEY REINFORCEMENT: NOTICE THE CORRECT SHORTCUT
        `;
        elExplanationText.innerHTML = `
          <strong>Correct Answer:</strong> ${escapeHtml(correctValue)}<br>
          <span style="color: #CBD5E1; margin-top: 4px; display: inline-block;">${state.currentQuestion.item.rationale}</span>
        `;
      }

      // Show Next Button
      elNextBtn.style.display = 'flex';
      elNextBtn.focus();
    }

    function advanceToNextQuestion() {
      state.currentIndex++;
      renderCurrentQuestion();
    }

    function updateStatsHUD() {
      elStreakCount.textContent = state.streak;
      const acc = state.totalAnswered > 0 
        ? Math.round((state.totalCorrect / state.totalAnswered) * 100) 
        : 100;
      elAccuracyVal.textContent = `${acc}%`;
      elMasteredCount.textContent = state.masteredIds.size;
    }

    /* ============================================================ */
    /* CHEAT SHEET GLOSSARY                                         */
    /* ============================================================ */

    const elSheetModal = document.getElementById('sheetModal');
    const elOpenSheetBtn = document.getElementById('openSheetBtn');
    const elCloseSheetBtn = document.getElementById('closeSheetBtn');
    const elSheetSearchInput = document.getElementById('sheetSearchInput');
    const elSheetListContainer = document.getElementById('sheetListContainer');

    function renderCheatSheet(filterQuery = '') {
      const q = filterQuery.toLowerCase().trim();
      const filtered = SHORTCUTS_DATA.filter(it => {
        const keysText = (state.platform === 'mac' ? it.macKeys : it.winKeys).join(' ').toLowerCase();
        return it.action.toLowerCase().includes(q) ||
               it.description.toLowerCase().includes(q) ||
               it.categoryLabel.toLowerCase().includes(q) ||
               keysText.includes(q);
      });

      if (filtered.length === 0) {
        elSheetListContainer.innerHTML = `<div style="text-align:center; padding: 24px; color: var(--text-dim);">No shortcuts match "${escapeHtml(filterQuery)}"</div>`;
        return;
      }

      elSheetListContainer.innerHTML = filtered.map(it => {
        const keys = state.platform === 'mac' ? it.macKeys : it.winKeys;
        return `
          <div class="sheet-row">
            <div>
              <div class="sheet-cat">${it.categoryLabel}</div>
              <div class="sheet-desc"><strong>${it.action}</strong>: ${it.description}</div>
            </div>
            <div>
              ${renderKeysGroupHtml(keys)}
            </div>
          </div>
        `;
      }).join('');
    }

    elOpenSheetBtn.addEventListener('click', () => {
      renderCheatSheet(elSheetSearchInput.value);
      elSheetModal.classList.add('open');
      elSheetSearchInput.focus();
    });

    elCloseSheetBtn.addEventListener('click', () => {
      elSheetModal.classList.remove('open');
    });

    elSheetModal.addEventListener('click', (e) => {
      if (e.target === elSheetModal) {
        elSheetModal.classList.remove('open');
      }
    });

    elSheetSearchInput.addEventListener('input', (e) => {
      renderCheatSheet(e.target.value);
    });

    /* ============================================================ */
    /* CONTROLS & EVENT LISTENERS                                   */
    /* ============================================================ */

    // Platform switcher
    document.querySelectorAll('.toggle-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.platform = btn.getAttribute('data-platform');
        localStorage.setItem('ag_platform', state.platform);
        generateQuestions();
        renderCurrentQuestion();
        if (elSheetModal.classList.contains('open')) {
          renderCheatSheet(elSheetSearchInput.value);
        }
      });
    });

    // Category filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeCategory = chip.getAttribute('data-cat');
        state.roundNumber = 1;
        generateQuestions();
        renderCurrentQuestion();
      });
    });

    // Sound toggle
    const elSoundToggleBtn = document.getElementById('soundToggleBtn');
    const elSoundIcon = document.getElementById('soundIcon');
    elSoundToggleBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      localStorage.setItem('ag_sound', state.soundEnabled);
      elSoundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    });

    // Next question button
    elNextBtn.addEventListener('click', advanceToNextQuestion);

    // Keyboard Shortcuts (1-4 for answers, Space / Enter for next)
    window.addEventListener('keydown', (e) => {
      if (elSheetModal.classList.contains('open')) {
        if (e.key === 'Escape') elSheetModal.classList.remove('open');
        return;
      }

      if (!state.hasAnswered) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          const targetBtn = document.getElementById(`opt-${idx}`);
          if (targetBtn) targetBtn.click();
        }
      } else {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          advanceToNextQuestion();
        }
      }
    });

    /* ============================================================ */
    /* INITIALIZATION                                               */
    /* ============================================================ */

    // Restore platform button active state
    document.querySelectorAll('.toggle-option').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-platform') === state.platform);
    });
    elSoundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';

    generateQuestions();
    updateStatsHUD();
    renderCurrentQuestion();