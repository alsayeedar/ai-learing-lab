    // ---------------------------------------------------------------------------
    // Path controls: keyword search (both views) + student view modes.
    //
    // Search filters the module grid to cards whose indexed text contains the
    // keyword (non-matches hidden), with a live match count. An active search
    // takes precedence over the view mode.
    //
    // Student view modes (persisted in sessionStorage):
    //   all   - every module and resource (default, current behavior)
    //   focus - only the current module and the next one
    //   three - the current module and the next two
    //   next  - all completed modules plus the next one (future modules hidden)
    //
    // Visibility is applied by toggling a `.path-hidden` class, so it composes
    // with the existing locked/completed styling and re-applies on every render.
    // ---------------------------------------------------------------------------

    const STUDENT_VIEW_KEY = "aiLearningLabStudentViewMode";
    const STUDENT_VIEW_MODES = ["all", "focus", "three", "next"];

    let studentViewMode = loadStudentViewMode();
    let studentSearchQuery = "";
    let teacherSearchQuery = "";

    function loadStudentViewMode() {
      const saved = sessionStorage.getItem(STUDENT_VIEW_KEY);
      return STUDENT_VIEW_MODES.includes(saved) ? saved : "all";
    }

    function normalizeSearch(value) {
      return String(value || "").trim().toLowerCase();
    }

    // Index of the first unlocked, not-yet-completed student module (-1 if none).
    function firstIncompleteStudentIndex() {
      for (let i = 0; i < modules.length; i++) {
        if (isModuleUnlocked(i) && !isModuleCompleted(modules[i].id)) return i;
      }
      return -1;
    }

    // Set of module indices a given view mode should reveal.
    function studentVisibleModuleSet(mode) {
      const total = modules.length;
      const show = new Set();
      const firstIncomplete = firstIncompleteStudentIndex();

      // No active module (all done or none unlocked) -> nothing to focus; show all.
      if (mode === "all" || firstIncomplete === -1) {
        for (let i = 0; i < total; i++) show.add(i);
        return show;
      }

      if (mode === "focus") {
        show.add(firstIncomplete);
        if (firstIncomplete + 1 < total) show.add(firstIncomplete + 1);
      } else if (mode === "three") {
        for (let k = 0; k < 3; k++) {
          if (firstIncomplete + k < total) show.add(firstIncomplete + k);
        }
      } else if (mode === "next") {
        for (let i = 0; i < total; i++) {
          if (isModuleCompleted(modules[i].id)) show.add(i);
        }
        show.add(firstIncomplete);
      } else {
        for (let i = 0; i < total; i++) show.add(i);
      }
      return show;
    }

    function setStudentView(mode) {
      if (!STUDENT_VIEW_MODES.includes(mode)) mode = "all";
      studentViewMode = mode;
      sessionStorage.setItem(STUDENT_VIEW_KEY, mode);
      applyStudentModuleVisibility();
    }

    function handleStudentSearch(value) {
      studentSearchQuery = normalizeSearch(value);
      const clearBtn = document.getElementById("studentSearchClear");
      if (clearBtn) clearBtn.classList.toggle("hidden", studentSearchQuery === "");
      applyStudentModuleVisibility();
    }

    function clearStudentSearch() {
      studentSearchQuery = "";
      const input = document.getElementById("studentModuleSearch");
      if (input) input.value = "";
      const clearBtn = document.getElementById("studentSearchClear");
      if (clearBtn) clearBtn.classList.add("hidden");
      applyStudentModuleVisibility();
      if (input) input.focus();
    }

    function applyStudentModuleVisibility() {
      const container = document.getElementById("moduleCards");
      if (!container) return;

      // Reflect the active view button.
      const viewButtons = document.querySelectorAll("#studentViewButtons .path-view-btn");
      viewButtons.forEach(btn => {
        const isActive = btn.getAttribute("data-view") === studentViewMode;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      const cards = container.querySelectorAll(".module-card");
      const searching = studentSearchQuery !== "";
      const visibleSet = studentVisibleModuleSet(studentViewMode);
      let matchCount = 0;

      cards.forEach(card => {
        let visible;
        if (searching) {
          const hay = (card.getAttribute("data-search") || "").toLowerCase();
          visible = hay.indexOf(studentSearchQuery) !== -1;
          if (visible) matchCount++;
        } else {
          const idxAttr = card.getAttribute("data-module-index");
          if (idxAttr === null) {
            // Resource cards: shown only in the full "Show All" view.
            visible = studentViewMode === "all";
          } else {
            visible = visibleSet.has(Number(idxAttr));
          }
        }
        setCardHidden(card, !visible);
      });

      updateStudentViewNote(searching);
      updateSearchStatus("studentSearchStatus", searching, matchCount, studentSearchQuery);
    }

    // Hide via class AND inline !important style. Several stylesheet rules force
    // card display with high-specificity !important (e.g. fixed-height card rules),
    // so the inline important declaration guarantees hiding wins everywhere.
    function setCardHidden(card, hidden) {
      card.classList.toggle("path-hidden", hidden);
      if (card.style && card.style.setProperty) {
        if (hidden) {
          card.style.setProperty("display", "none", "important");
        } else {
          card.style.removeProperty("display");
        }
      }
    }

    // Tell the user when a search is temporarily overriding the chosen view.
    function updateStudentViewNote(searching) {
      const wrap = document.getElementById("studentViewButtons");
      if (wrap) wrap.classList.toggle("path-views-muted", searching);
    }

    // --- Teacher search (view modes are student-only) --------------------------

    function handleTeacherSearch(value) {
      teacherSearchQuery = normalizeSearch(value);
      const clearBtn = document.getElementById("teacherSearchClear");
      if (clearBtn) clearBtn.classList.toggle("hidden", teacherSearchQuery === "");
      applyTeacherModuleVisibility();
    }

    function clearTeacherSearch() {
      teacherSearchQuery = "";
      const input = document.getElementById("teacherModuleSearch");
      if (input) input.value = "";
      const clearBtn = document.getElementById("teacherSearchClear");
      if (clearBtn) clearBtn.classList.add("hidden");
      applyTeacherModuleVisibility();
      if (input) input.focus();
    }

    function applyTeacherModuleVisibility() {
      const container = document.getElementById("teacherModuleCards");
      if (!container) return;

      const cards = container.querySelectorAll(".module-card");
      const searching = teacherSearchQuery !== "";
      let matchCount = 0;

      cards.forEach(card => {
        let visible = true;
        if (searching) {
          const hay = (card.getAttribute("data-search") || "").toLowerCase();
          visible = hay.indexOf(teacherSearchQuery) !== -1;
          if (visible) matchCount++;
        }
        setCardHidden(card, !visible);
      });

      updateSearchStatus("teacherSearchStatus", searching, matchCount, teacherSearchQuery);
    }

    // --- Shared status line ----------------------------------------------------

    function updateSearchStatus(elementId, searching, matchCount, query) {
      const status = document.getElementById(elementId);
      if (!status) return;
      if (!searching) {
        status.textContent = "";
        return;
      }
      if (matchCount === 0) {
        status.textContent = `No modules match "${query}".`;
      } else {
        status.textContent = `${matchCount} module${matchCount === 1 ? "" : "s"} match "${query}".`;
      }
    }

    // Build the searchable text blob for a module (title, description, lesson,
    // and practiced strand names). Kept plain-text and lowercased at match time.
    function studentModuleSearchText(module) {
      const strandNames = getModuleStrands(module.id)
        .map(id => (aiReadyStrands[id] ? aiReadyStrands[id].full : ""))
        .join(" ");
      // Include the id as words (media-literacy -> "media literacy") so topic
      // keywords in the slug are searchable even when the title is phrased
      // differently (e.g. title "Is This Media Reliable?").
      const idWords = String(module.id || "").replace(/-/g, " ");
      return [module.title, idWords, module.shortDescription, stripTags(module.lesson), strandNames, keywordTermsForId(module.id)]
        .filter(Boolean).join(" ");
    }

    function teacherModuleSearchText(module) {
      const strandNames = getTeacherModuleStrands(module.id)
        .map(id => (aiReadyStrands[id] ? aiReadyStrands[id].full : ""))
        .join(" ");
      const idWords = String(module.id || "").replace(/-/g, " ");
      return [module.title, idWords, module.shortDescription, stripTags(module.lesson), strandNames, keywordTermsForId(module.id)]
        .filter(Boolean).join(" ");
    }

    function stripTags(value) {
      return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
    }

    // Topic keyword map: extra search terms attached to any module whose id
    // contains one of these fragments. This makes conceptual searches land on
    // the right modules even when the exact word is not in the title/text
    // (e.g. "ethics" -> a module titled "AI Disclosure Statements", or
    // "media literacy" -> a module titled "Is This Media Reliable?").
    // Fragment is matched against the module id; add rows here to extend.
    const SEARCH_KEYWORD_MAP = [
      { idIncludes: "media", terms: "media literacy reliable source credibility misinformation fake" },
      { idIncludes: "trust", terms: "media literacy trust verify credibility misinformation" },
      { idIncludes: "integrity", terms: "ethics ethical academic integrity honesty cheating plagiarism" },
      { idIncludes: "statement", terms: "ethics ethical policy integrity guidelines" },
      { idIncludes: "disclosure", terms: "ethics ethical transparency citation credit honesty" },
      { idIncludes: "responsible", terms: "ethics ethical responsible safe appropriate use" },
      { idIncludes: "guideline", terms: "ethics ethical rules responsible use expectations" },
      { idIncludes: "allowed", terms: "ethics ethical permission appropriate rules" },
      { idIncludes: "eco", terms: "ethics environment energy water sustainability climate impact" },
      { idIncludes: "data", terms: "privacy data personal information tracking big data" },
      { idIncludes: "vocab", terms: "vocabulary terms definitions glossary keywords" },
      { idIncludes: "prompt", terms: "prompt prompting writing questions" },
      // Teacher-side topics
      { idIncludes: "verification", terms: "media literacy verify verification accuracy fact check credibility" },
      { idIncludes: "stance", terms: "ethics ethical policy statement position integrity" },
      { idIncludes: "citation", terms: "ethics ethical disclosure citation credit transparency" },
      { idIncludes: "privacy", terms: "privacy pii data personal information confidential ferpa" },
      { idIncludes: "pii", terms: "privacy pii data personal information confidential" },
      { idIncludes: "equity", terms: "ethics equity access fairness inclusion bias" },
      { idIncludes: "conferenc", terms: "conferencing feedback discussion student support" },
      { idIncludes: "guidelines", terms: "ethics ethical rules responsible use expectations policy" }
    ];

    function keywordTermsForId(id) {
      const lowerId = String(id || "").toLowerCase();
      return SEARCH_KEYWORD_MAP
        .filter(row => lowerId.indexOf(row.idIncludes) !== -1)
        .map(row => row.terms)
        .join(" ");
    }
