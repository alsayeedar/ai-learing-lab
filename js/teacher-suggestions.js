    // ---------------------------------------------------------------------------
    // Teacher Suggestions: compact Use / Ask / Try ideas for teacher-facing items.
    //
    // Data-driven: any item (module, resource, tool, bonus) that resolves a
    // suggestion shows an "Ideas" button when the Teacher Suggestions toggle is on.
    // Resolution order for an item id:
    //   1. an inline `item.teacherSuggestion` object (future items can set this), or
    //   2. TEACHER_SUGGESTIONS[id] in the map below.
    // Items with no suggestion simply get no button.
    //
    // One shared popover is reused for every button (moved + refilled on open),
    // which keeps focus management and outside-click handling simple.
    // ---------------------------------------------------------------------------

    // Suggestions are shown automatically whenever the app is in Teacher View
    // (body.app-teacher-view, set by showAppView). No separate toggle.

    const TEACHER_SUGGESTIONS = {
      // --- Student modules ---
      "what-wifi-actually-does": {
        use: "Use before online tools, cloud documents, or AI prompts.",
        ask: "What is the difference between Wi-Fi and the internet?",
        try: "Have users sketch what happens between a device, Wi-Fi, and an online service."
      },
      "how-data-travels-online": {
        use: "Use before privacy, passwords, accounts, or AI prompts.",
        ask: "Why does it matter that online information moves through systems we do not see?",
        try: "Have users trace the path of a search, message, or AI prompt."
      },
      "how-ai-generates-responses": {
        use: "Use before users work with a chatbot or generative AI tool.",
        ask: "Why should we check AI even when it sounds confident?",
        try: "Have users compare two AI responses and identify what still needs human checking."
      },
      "student-ai-guidelines": {
        use: "Use before AI is allowed on a class task.",
        ask: "Which rule protects learning the most?",
        try: "Have users sort examples into responsible, questionable, and not appropriate use."
      },
      "sau48-ai-statement-integrity": {
        use: "Use before projects where AI could replace original thinking.",
        ask: "What is the difference between support and substitution?",
        try: "Have users label examples as support, shortcut, or academic honesty concern."
      },
      "what-counts-as-ai": {
        use: "Use as a quick sort before introducing AI tools.",
        ask: "Why is it sometimes hard to tell whether a tool uses AI?",
        try: "Have users identify AI features in tools they already use."
      },
      "ai-vocabulary-in-context": {
        use: "Use as vocabulary support before AI discussion or reflection.",
        ask: "Which term helps explain an AI risk or limitation?",
        try: "Have users use three AI vocabulary words to explain one scenario."
      },
      "patterns-not-magic": {
        use: "Use before users over-trust AI output.",
        ask: "How can something be impressive without truly understanding?",
        try: "Have users find one example where pattern prediction helps and one where it could mislead."
      },
      "can-you-trust-it": {
        use: "Use before users rely on AI for facts.",
        ask: "What makes an answer sound trustworthy versus actually trustworthy?",
        try: "Have users check one AI claim against another reliable source."
      },
      "media-literacy": {
        use: "Use before users rely on media as evidence.",
        ask: "How can media persuade even when it is incomplete?",
        try: "Have users compare two media examples and explain which is more reliable."
      },
      "prompt-like-a-learner": {
        use: "Use before users ask AI for assignment help.",
        ask: "What makes a prompt support thinking instead of skipping it?",
        try: "Have users rewrite a weak prompt so it asks for coaching, feedback, or questions."
      },
      "responsible-school-use": {
        use: "Use when setting norms for AI use in school.",
        ask: "How does the setting change what responsible use looks like?",
        try: "Have users create one example and one non-example of responsible school AI use."
      },
      "when-is-ai-allowed": {
        use: "Use before an assignment with AI expectations.",
        ask: "Why should the allowed level be clear before using AI?",
        try: "Have users match sample tasks to the correct AI-use level."
      },
      "ai-disclosure-statements": {
        use: "Use before users submit work involving AI support.",
        ask: "Why is 'I used AI' usually not specific enough?",
        try: "Have users write a process note before they submit."
      },
      "eco-aware-ai-use": {
        use: "Use to discuss the hidden infrastructure behind AI.",
        ask: "Why do digital tools have real-world environmental impacts?",
        try: "Have users identify one lower-impact AI habit they can use."
      },
      "required-ai-vocabulary-review": {
        use: "Use before a final check, discussion, or certificate.",
        ask: "Which term changed how you think about AI?",
        try: "Have users write a short AI explainer using at least three vocabulary terms."
      },
      "required-ai-practice-tools": {
        use: "Use during projects where users may use AI responsibly.",
        ask: "Which tool helps keep the person in charge?",
        try: "Have users choose one practice tool and apply it to a real or sample task."
      },
      "required-student-follow-up-routine": {
        use: "Use after users receive an AI answer.",
        ask: "Why is the first AI answer usually not the end of thinking?",
        try: "Have users write a better follow-up prompt that asks AI to explain, check, or clarify."
      },

      // --- Student resources ---
      "studentClaimChecker": {
        use: "Use when users need to check a claim from AI or an AI search result.",
        ask: "What would make this claim reliable enough to use?",
        try: "Have users verify one AI-generated claim with a source outside the AI tool."
      },
      "studentBigData": {
        use: "Use when discussing privacy, data trails, or how digital activity creates information.",
        ask: "What data might be created by ordinary online activity?",
        try: "Have users list three data tracks that could come from everyday digital tools."
      },
      "studentSubmitChecklist": {
        use: "Use right before users turn in AI-supported work.",
        ask: "What should be checked before submitting AI-supported work?",
        try: "Have users check rules, sources, privacy, disclosure, and ownership before submitting."
      },

      // --- Teacher modules ---
      "teacher-faculty-ai-guidelines": {
        use: "Use as a staff meeting opener or independent review.",
        ask: "Which guideline needs to be most visible to students?",
        try: "Have teachers write one classroom example of a guideline in action."
      },
      "teacher-sau48-ai-stance": {
        use: "Use to ground staff discussion in district expectations.",
        ask: "What should stay consistent across classrooms?",
        try: "Have teachers draft one sentence they could use in assignment directions."
      },
      "teacher-ai-use-levels": {
        use: "Use before deciding whether AI is allowed on an assignment.",
        ask: "What makes an assignment clear or unclear about AI use?",
        try: "Have teachers assign an AI-use level to one existing task."
      },
      "teacher-assignment-design": {
        use: "Use before assigning work that AI could easily complete.",
        ask: "What part of this task should remain meaningfully human?",
        try: "Have teachers add one process checkpoint or reflection requirement to an assignment."
      },
      "teacher-disclosure-citation": {
        use: "Use before requiring students to explain AI use.",
        ask: "What should a disclosure statement tell the reader?",
        try: "Have teachers create one disclosure sentence stem for their class."
      },
      "teacher-verification-feedback": {
        use: "Use before allowing AI-supported research or feedback.",
        ask: "How much checking is reasonable for this task?",
        try: "Have teachers name one claim, source, or output students should verify."
      },
      "teacher-implementation-plan": {
        use: "Use when setting classroom AI expectations.",
        ask: "What needs to be stated clearly before students use AI?",
        try: "Have teachers draft a short classroom AI use note or norm."
      },
      "teacher-prompting-for-learning": {
        use: "Use before modeling or allowing AI prompting.",
        ask: "What is the difference between support and replacement?",
        try: "Have teachers rewrite one prompt so it coaches instead of completes the task."
      },
      "teacher-student-conferencing": {
        use: "Use before discussing questionable AI use.",
        ask: "How can we ask about AI use without starting with accusation?",
        try: "Have teachers practice one neutral question about process, evidence, or next steps."
      },
      "teacher-privacy-pii-context": {
        use: "Use before entering information into AI tools.",
        ask: "What information feels harmless but may still be private?",
        try: "Have teachers rewrite a risky prompt without names, identifiers, or sensitive details."
      },
      "teacher-equity-access": {
        use: "Use before choosing an AI tool or support.",
        ask: "Who benefits, and who might be left out or over-supported?",
        try: "Have teachers identify one access support and one possible risk for a planned AI use."
      },
      "teacher-eco-awareness-badge": {
        use: "Use to discuss the hidden environmental costs of AI.",
        ask: "When does AI add enough value to justify its use?",
        try: "Have teachers list one lower-impact habit for AI use in their setting."
      },

      // --- Teacher resources ---
      "teacherTool": {
        use: "Use when writing student-facing AI directions for an assignment.",
        ask: "What do students need to know before they use AI on this task?",
        try: "Have teachers generate a short AI-use direction and revise it for clarity."
      },
      "teacherConferences": {
        use: "Use when AI use needs to include questioning, checking, revising, or reflecting.",
        ask: "What step keeps users from accepting the first AI answer too quickly?",
        try: "Have teachers build a short routine that requires verification or reflection."
      },
      "teacherPromptBuilder": {
        use: "Use when teachers want planning, feedback, differentiation, or assessment support.",
        ask: "What should the AI help with, and what judgment should stay human?",
        try: "Have teachers create one planning prompt with clear limits and context."
      },
      "teacherFollowUpRoutine": {
        use: "Use when an AI response is close but not quite right.",
        ask: "What should be kept, changed, or checked?",
        try: "Have teachers practice asking for one or two focused changes instead of a full redo."
      },
      "teacherUnescoCompetencies": {
        use: "Use as a reference for grade-band planning or curriculum alignment.",
        ask: "Which competency fits the lesson or discussion you are planning?",
        try: "Have teachers choose one competency and connect it to an existing lesson."
      },
      "teacherBigData": {
        use: "Use when planning lessons about data, privacy, digital activity, or AI systems.",
        ask: "What data trails are created before AI ever gives an answer?",
        try: "Have teachers identify one data or privacy connection for their subject or grade level."
      },
      "teacherLaunchKit": {
        use: "Use when introducing AI expectations to a class.",
        ask: "What needs to be clear before students begin using AI?",
        try: "Have teachers draft a short launch message with rules, disclosure, and support boundaries."
      },
      "teacherGoogleTools": {
        use: "Use when comparing Google-based AI tools for different purposes.",
        ask: "Which tool fits the task, source needs, and privacy expectations?",
        try: "Have teachers match a use case to Gemini, NotebookLM, or a reusable Gem."
      },
      "teacherAiDisclosure": {
        use: "Use when AI helped create or revise teacher-facing materials.",
        ask: "What should be transparent about how AI supported this material?",
        try: "Have teachers generate a brief disclosure note for an assignment, handout, or slide deck."
      },

      // --- Optional bonus ---
      "creativeEthics": {
        use: "Use before creative work involving AI-generated text, images, music, video, or design.",
        ask: "If AI generates an output, what part of creation still belongs to the person?",
        try: "Have users name one choice, one change, and one responsibility in their creative process."
      }
    };

    // Resolve a suggestion for an item id. Order:
    //   1. inline item.teacherSuggestion object (future items), else
    //   2. TEACHER_SUGGESTIONS[id], else
    //   3. TEACHER_SUGGESTIONS[id without a leading "teacher-"].
    // The prefix fallback covers the teacher path's prerequisite modules, whose
    // ids are cloned as "teacher-<base id>" (e.g. teacher-what-wifi-actually-does).
    function getTeacherSuggestion(itemOrId) {
      if (itemOrId && typeof itemOrId === "object") {
        if (itemOrId.teacherSuggestion) return itemOrId.teacherSuggestion;
        return lookupSuggestionById(itemOrId.id);
      }
      return lookupSuggestionById(itemOrId);
    }

    function lookupSuggestionById(id) {
      if (!id) return null;
      if (TEACHER_SUGGESTIONS[id]) return TEACHER_SUGGESTIONS[id];
      if (id.indexOf("teacher-") === 0) {
        const base = id.slice("teacher-".length);
        if (TEACHER_SUGGESTIONS[base]) return TEACHER_SUGGESTIONS[base];
      }
      return null;
    }

    // Button markup injected into a card. Returns "" when the item has no
    // suggestion, so callers can drop it in unconditionally.
    function renderIdeasButton(itemOrId) {
      const suggestion = getTeacherSuggestion(itemOrId);
      if (!suggestion) return "";
      const key = (itemOrId && typeof itemOrId === "object") ? itemOrId.id : itemOrId;
      return `
        <button type="button" class="ideas-btn" data-suggestion-key="${escapeHtml(String(key))}"
                aria-haspopup="dialog" aria-expanded="false" aria-controls="teacherSuggestionPopover"
                onclick="openTeacherSuggestion(event, this)">
          <span class="ideas-btn-icon" aria-hidden="true">💡</span> Ideas
        </button>`;
    }

    // --- Shared popover -------------------------------------------------------

    let activeSuggestionButton = null;

    function ensureSuggestionPopover() {
      let pop = document.getElementById("teacherSuggestionPopover");
      if (pop) return pop;
      pop = document.createElement("div");
      pop.id = "teacherSuggestionPopover";
      pop.className = "teacher-suggestion-popover hidden";
      pop.setAttribute("role", "dialog");
      pop.setAttribute("aria-modal", "false");
      pop.setAttribute("aria-label", "Teacher suggestion");
      document.body.appendChild(pop);
      return pop;
    }

    function openTeacherSuggestion(event, button) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const key = button.getAttribute("data-suggestion-key");
      const suggestion = getTeacherSuggestion(key);
      if (!suggestion) return;

      // Toggle closed if the same button is clicked again.
      if (activeSuggestionButton === button && !document.getElementById("teacherSuggestionPopover").classList.contains("hidden")) {
        closeTeacherSuggestion();
        return;
      }

      const pop = ensureSuggestionPopover();
      pop.innerHTML = `
        <div class="tsp-head">
          <strong>Teacher Suggestion</strong>
          <button type="button" class="tsp-close" onclick="closeTeacherSuggestion()" aria-label="Close suggestion">×</button>
        </div>
        <dl class="tsp-body">
          <dt>Use</dt><dd>${escapeHtml(suggestion.use)}</dd>
          <dt>Ask</dt><dd>${escapeHtml(suggestion.ask)}</dd>
          <dt>Try</dt><dd>${escapeHtml(suggestion.try)}</dd>
        </dl>`;
      pop.classList.remove("hidden");

      positionSuggestionPopover(pop, button);

      activeSuggestionButton = button;
      button.setAttribute("aria-expanded", "true");

      const closeBtn = pop.querySelector(".tsp-close");
      if (closeBtn) closeBtn.focus();
    }

    function positionSuggestionPopover(pop, button) {
      if (!button.getBoundingClientRect) return;
      const rect = button.getBoundingClientRect();
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const popWidth = pop.offsetWidth || 280;
      const viewportWidth = document.documentElement.clientWidth || 1024;

      let left = rect.left + scrollX;
      // Keep it on screen.
      if (left + popWidth > scrollX + viewportWidth - 12) {
        left = Math.max(scrollX + 12, rect.right + scrollX - popWidth);
      }
      pop.style.top = `${rect.bottom + scrollY + 8}px`;
      pop.style.left = `${left}px`;
    }

    function closeTeacherSuggestion() {
      const pop = document.getElementById("teacherSuggestionPopover");
      if (pop) pop.classList.add("hidden");
      if (activeSuggestionButton) {
        activeSuggestionButton.setAttribute("aria-expanded", "false");
        activeSuggestionButton = null;
      }
    }

    // Close on outside click / tap and on Escape.
    document.addEventListener("click", function (e) {
      const pop = document.getElementById("teacherSuggestionPopover");
      if (!pop || pop.classList.contains("hidden")) return;
      if (pop.contains(e.target)) return;
      if (e.target.closest && e.target.closest(".ideas-btn")) return;
      closeTeacherSuggestion();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeTeacherSuggestion();
    });
