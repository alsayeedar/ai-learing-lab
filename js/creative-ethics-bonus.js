    // ---------------------------------------------------------------------------
    // Creative Ethics Bonus (Easter-egg path)
    // Optional bonus unlocked after the Eco-Awareness Badge is completed.
    // "The process is the art. AI can generate an output, but people create through
    //  attention, choice, revision, meaning, and responsibility."
    //
    // Role-neutral: no "student"/"teacher" language in the user-facing quiz.
    // Completion is tracked separately per view: student -> progress.creativeEthics,
    // teacher -> teacherProgress.creativeEthics. Each view unlocks on its own eco badge.
    //
    // Only top-level code here is pure data literals, so load order is flexible; all
    // functions are called at render/click time (loaded before lab-modal-bootstrap.js).
    // ---------------------------------------------------------------------------

    // Fixed priority order — used for deterministic tie-breaks (stable sort keeps it).
    const creatorTypeOrder = [
      "observer", "director", "shaper", "remixer", "storyteller",
      "experimenter", "curator", "collaborator", "critic", "steward"
    ];

    const creatorTypes = {
      observer: {
        name: "The Observer",
        label: "Observer",
        icon: "eyeSparkle",
        createsThrough: "noticing, comparing, reflecting",
        strength: "You see details, patterns, and possibilities.",
        caution: "Watching is not the same as activating the process. Observation becomes creative when you make a choice because of what you noticed.",
        tryThis: "Before accepting an output, name one thing you would keep, change, or question.",
        resultText: "You create by noticing what others might miss. You pay attention to what works, what feels off, and what possibilities are hiding in the result."
      },
      director: {
        name: "The Director",
        label: "Director",
        icon: "compass",
        createsThrough: "purpose, limits, instructions, feedback",
        strength: "You can guide a tool toward a clear vision.",
        caution: "A strong prompt is not the whole creative process. The work should reflect your intention, not just the tool's ability to follow instructions.",
        tryThis: "Add one choice the AI could not make without you.",
        resultText: "You create by guiding the process. You bring direction, audience, tone, limits, and feedback."
      },
      shaper: {
        name: "The Shaper",
        label: "Shaper",
        icon: "sculpt",
        createsThrough: "revising, cutting, arranging, editing, refining",
        strength: "You understand that process changes meaning.",
        caution: "When AI is part of the process, keep track of what came from the tool and what came from your own decisions.",
        tryThis: "Write a process note: AI offered ___. I changed ___.",
        resultText: "You create through revision. You do not treat the first result as the final work. You cut, adjust, arrange, and refine until the piece better matches your intention."
      },
      remixer: {
        name: "The Remixer",
        label: "Remixer",
        icon: "overlap",
        createsThrough: "combining influences, media, sounds, images, and ideas",
        strength: "You see connections and make new combinations.",
        caution: "A remix still has roots. Credit, consent, and context matter.",
        tryThis: "List the ingredients behind the work: tools, sources, influences, sounds, images, or references.",
        resultText: "You create by combining pieces into something new. You notice how ideas can connect across formats, styles, and media."
      },
      storyteller: {
        name: "The Storyteller",
        label: "Storyteller",
        icon: "storySpark",
        createsThrough: "meaning, message, emotion, point of view",
        strength: "You care about what the work communicates.",
        caution: "Polished language is not the same as meaning. AI can make something sound finished before it actually says something.",
        tryThis: "Ask: What do I want someone to feel, notice, or understand?",
        resultText: "You create by giving the work a point. You care about the message, emotion, audience, and meaning behind the final piece."
      },
      experimenter: {
        name: "The Experimenter",
        label: "Experimenter",
        icon: "beakerSpark",
        createsThrough: "testing, play, surprise, discovery",
        strength: "You are open to possibility, surprise, and discovery.",
        caution: "Experimenting can become careless if it ignores privacy, consent, harm, or imitation.",
        tryThis: "Set one boundary before experimenting.",
        resultText: "You create by trying things and seeing what happens. You are willing to test unusual ideas and learn from unexpected results."
      },
      curator: {
        name: "The Curator",
        label: "Curator",
        icon: "galleryGrid",
        createsThrough: "selecting, arranging, organizing, explaining",
        strength: "You know that choosing is part of creating.",
        caution: "Picking the best output is not always enough. The choice needs a reason.",
        tryThis: "Explain: I chose this because ___.",
        resultText: "You create by choosing what belongs. You select, arrange, compare, and explain why one option fits better than another."
      },
      collaborator: {
        name: "The Collaborator",
        label: "Collaborator",
        icon: "linkedBubbles",
        createsThrough: "feedback, alternatives, back-and-forth thinking",
        strength: "You use support without giving up your role.",
        caution: "Collaboration should be honest. Do not hide the tool's role when it matters.",
        tryThis: "Say what AI helped with and what choices remained yours.",
        resultText: "You create through back-and-forth thinking. You use AI as a support, but your choices still guide the work."
      },
      critic: {
        name: "The Critic",
        label: "Critic",
        icon: "questionMagnifier",
        createsThrough: "questioning, evaluating, challenging",
        strength: "You notice weak ideas, bias, imitation, or missing context.",
        caution: "Critique can become avoidance. Creation still requires making something.",
        tryThis: "After naming a concern, name one responsible way forward.",
        resultText: "You create by questioning the work. You look for problems, gaps, risks, and assumptions before deciding what should happen next."
      },
      steward: {
        name: "The Steward",
        label: "Steward",
        icon: "shieldHand",
        createsThrough: "consent, credit, fairness, care, impact, responsibility",
        strength: "You remember that creative work affects real people.",
        caution: "Responsibility should guide creativity, not shut it down.",
        tryThis: "Ask: Who could be affected by this work?",
        resultText: "You create by thinking about impact. You consider consent, credit, fairness, and the people connected to the work."
      }
    };

    // Simple, consistent line icons (viewBox 0 0 24 24, currentColor, no flashing).
    const creatorIcons = {
      eyeSparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12c2.5-4 6-6 9-6s6.5 2 9 6c-2.5 4-6 6-9 6s-6.5-2-9-6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="11" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M20 3l.7 1.8L22.5 5.5 20.7 6.2 20 8l-.7-1.8L17.5 5.5l1.8-.7Z" fill="currentColor"/></svg>',
      compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11Z" fill="currentColor"/></svg>',
      sculpt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l3-1 9-9-2-2-9 9Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 8l3-3 2 2-3 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M4 20l3-1" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
      overlap: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="5.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="15" cy="12" r="5.5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
      storySpark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v10H9l-4 4V5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 7l.9 2.1 2.1.9-2.1.9L12 13l-.9-2.1L9 10l2.1-.9Z" fill="currentColor"/></svg>',
      beakerSpark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.5 16h9" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
      galleryGrid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
      linkedBubbles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8l-3 3v-3a3 3 0 0 1-2-2.8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 11h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3v2l-3-3h-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
      questionMagnifier: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M15.5 15.5 21 21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M8.7 8.6a1.9 1.9 0 0 1 3.6.8c0 1.3-1.8 1.6-1.8 2.9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="10.5" cy="14.4" r="0.7" fill="currentColor"/></svg>',
      shieldHand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 2.5v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10v-5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12.5c1-1.3 2-1.3 3 0 1-1.3 2-1.3 3 0-.4 2-1.6 3.2-3 3.9-1.4-.7-2.6-1.9-3-3.9Z" fill="currentColor" opacity="0.85"/></svg>'
    };

    // Each choice maps to one or two creator types (+1 each), verbatim from the spec.
    const creatorQuizQuestions = [
      {
        prompt: "AI creates something interesting on the first try. What do you do next?",
        choices: [
          { text: "Look closely at what works and what feels off.", scores: { observer: 1, critic: 1 } },
          { text: "Give clearer directions for the next version.", scores: { director: 1 } },
          { text: "Edit and rearrange it myself.", scores: { shaper: 1 } },
          { text: "Combine it with other ideas or influences.", scores: { remixer: 1 } },
          { text: "Ask who or what could be affected by using it.", scores: { steward: 1 } }
        ]
      },
      {
        prompt: "What part of the creative process feels most important to you?",
        choices: [
          { text: "Noticing possibilities.", scores: { observer: 1 } },
          { text: "Guiding the direction.", scores: { director: 1 } },
          { text: "Revising the result.", scores: { shaper: 1 } },
          { text: "Making meaning.", scores: { storyteller: 1 } },
          { text: "Testing unexpected ideas.", scores: { experimenter: 1 } }
        ]
      },
      {
        prompt: "A result looks polished, but something feels missing. What do you focus on?",
        choices: [
          { text: "What the work is trying to say.", scores: { storyteller: 1 } },
          { text: "What needs to be changed.", scores: { shaper: 1 } },
          { text: "Whether it borrows too closely from someone else.", scores: { steward: 1, critic: 1 } },
          { text: "Whether the strongest parts should be selected and arranged.", scores: { curator: 1 } },
          { text: "Whether another round of feedback would help.", scores: { collaborator: 1 } }
        ]
      },
      {
        prompt: "You are using AI to explore a creative idea. What feels most natural?",
        choices: [
          { text: "Compare several outputs and notice patterns.", scores: { observer: 1, curator: 1 } },
          { text: "Write a more specific prompt with clearer constraints.", scores: { director: 1 } },
          { text: "Pull pieces from different versions into one new version.", scores: { remixer: 1 } },
          { text: "Keep trying strange or surprising directions.", scores: { experimenter: 1 } },
          { text: "Ask whether the result is fair, respectful, or misleading.", scores: { steward: 1 } }
        ]
      },
      {
        prompt: "What makes a creative work feel like yours?",
        choices: [
          { text: "I noticed something important and made a choice because of it.", scores: { observer: 1 } },
          { text: "I gave it a clear purpose and direction.", scores: { director: 1 } },
          { text: "I revised it until it matched my intention.", scores: { shaper: 1 } },
          { text: "I gave it meaning, emotion, or point of view.", scores: { storyteller: 1 } },
          { text: "I can explain what I used, changed, and credited.", scores: { steward: 1, collaborator: 1 } }
        ]
      },
      {
        prompt: "AI creates a song, image, poem, or design that reminds you of a real artist. What do you do?",
        choices: [
          { text: "Study what makes it feel similar.", scores: { observer: 1, critic: 1 } },
          { text: "Change the direction so it moves away from imitation.", scores: { director: 1, steward: 1 } },
          { text: "Edit it until the final version reflects my own choices.", scores: { shaper: 1 } },
          { text: "Mix in other influences or original elements.", scores: { remixer: 1 } },
          { text: "Ask whether consent, credit, or audience confusion could be an issue.", scores: { steward: 1 } }
        ]
      },
      {
        prompt: "You have four AI-generated options. How do you choose?",
        choices: [
          { text: "I look for the details that work best.", scores: { observer: 1 } },
          { text: "I choose the one that fits the original goal.", scores: { director: 1 } },
          { text: "I choose one as a starting point and revise it.", scores: { shaper: 1 } },
          { text: "I combine the strongest parts from several options.", scores: { remixer: 1 } },
          { text: "I choose based on clear criteria and explain why.", scores: { curator: 1 } }
        ]
      },
      {
        prompt: "What is your first move when you feel stuck?",
        choices: [
          { text: "Step back and observe what is already there.", scores: { observer: 1 } },
          { text: "Give the tool a clearer role or task.", scores: { director: 1 } },
          { text: "Make a small change and see what improves.", scores: { shaper: 1 } },
          { text: "Try a completely different direction.", scores: { experimenter: 1 } },
          { text: "Ask for feedback or alternatives.", scores: { collaborator: 1 } }
        ]
      },
      {
        prompt: "What concern do you pay attention to most when using AI creatively?",
        choices: [
          { text: "Whether the result actually says something meaningful.", scores: { storyteller: 1 } },
          { text: "Whether the process includes my own choices.", scores: { shaper: 1 } },
          { text: "Whether sources, influences, or people deserve credit.", scores: { steward: 1 } },
          { text: "Whether the strongest option was selected for a reason.", scores: { curator: 1 } },
          { text: "Whether the result has bias, weak logic, or missing context.", scores: { critic: 1 } }
        ]
      },
      {
        prompt: "The process is the art. What part of the process matters most to you?",
        choices: [
          { text: "Paying attention.", scores: { observer: 1 } },
          { text: "Giving direction.", scores: { director: 1 } },
          { text: "Revising and shaping.", scores: { shaper: 1 } },
          { text: "Combining influences.", scores: { remixer: 1 } },
          { text: "Taking responsibility.", scores: { steward: 1 } }
        ]
      }
    ];

    // Transient state for the active quiz session (null when the modal is closed).
    let creativeQuizState = null;

    // --- Per-view gating + persistence -----------------------------------------

    // Which eco module unlocks the bonus, per view.
    const CREATIVE_ECO_TRIGGER = {
      student: "eco-aware-ai-use",
      teacher: "teacher-eco-awareness-badge"
    };

    function isCreativeEthicsUnlocked(context) {
      if (context === "teacher") {
        if (typeof teacherPreviewMode !== "undefined" && teacherPreviewMode) return true;
        return teacherProgress.completedModules.includes(CREATIVE_ECO_TRIGGER.teacher);
      }
      if (typeof previewMode !== "undefined" && previewMode) return true;
      return progress.completedModules.includes(CREATIVE_ECO_TRIGGER.student);
    }

    function getCreativeEthicsState(context) {
      const store = context === "teacher" ? teacherProgress : progress;
      return store.creativeEthics || null;
    }

    function setCreativeEthicsState(context, data) {
      if (context === "teacher") {
        teacherProgress.creativeEthics = data;
        saveTeacherProgress();
      } else {
        progress.creativeEthics = data;
        saveProgress();
      }
    }

    function refreshCreativeDashboard(context) {
      if (context === "teacher") {
        if (typeof renderTeacherDashboard === "function") renderTeacherDashboard();
      } else {
        if (typeof renderDashboard === "function") renderDashboard();
      }
    }

    // --- Badge in the "Skills Practiced" row -----------------------------------

    function renderCreativeEthicsBadge(context) {
      const unlocked = isCreativeEthicsUnlocked(context);
      const state = getCreativeEthicsState(context);

      // Earned wins: once earned it stays earned, even if the view later re-locks
      // (e.g. earned in preview mode, then preview turned off).
      if (state && state.earned) {
        const type = creatorTypes[state.primary] || creatorTypes.observer;
        return `
          <button type="button" class="creative-ethics-badge earned"
                  onclick="openCreativeEthicsModal('${context}')"
                  aria-label="Creative Ethics Badge earned. Your AI Creator Type: ${escapeHtml(type.name)}. Open to review.">
            <span class="ceb-icon" aria-hidden="true">${creatorIcons[type.icon] || ""}</span>
            <span class="ceb-text">Creative Ethics</span>
            <span class="ceb-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </button>`;
      }

      if (!unlocked) {
        return `
          <span class="creative-ethics-badge locked" aria-disabled="true"
                title="Bonus — unlocks after the Eco-Awareness Badge"
                aria-label="Locked bonus badge. Unlocks after the Eco-Awareness Badge.">
            <span class="ceb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
            </span>
            <span class="ceb-text">Locked</span>
          </span>`;
      }

      return `
        <button type="button" class="creative-ethics-badge unlocked"
                onclick="openCreativeEthicsModal('${context}')"
                aria-label="Bonus unlocked: Creative Ethics. Start the AI Creator Type quiz.">
          <span class="ceb-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.2 5.2L20 9.2l-4 3.9 1 5.9L12 16.2 7 19l1-5.9-4-3.9 5.8-1Z" fill="currentColor" opacity="0.18"/><path d="M12 3l2.2 5.2L20 9.2l-4 3.9 1 5.9L12 16.2 7 19l1-5.9-4-3.9 5.8-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          </span>
          <span class="ceb-text">Start Creator Quiz</span>
          <span class="ceb-new" aria-hidden="true">Bonus</span>
        </button>`;
    }

    // Tile shown in the AI-Ready legend grid (next to the "AI Practice Tools"
    // tile). Roomy home for the bonus so it never crowds the single-line
    // "Skills Practiced" row. Reuses renderCreativeEthicsBadge as the CTA.
    function renderCreativeEthicsTile(context) {
      const unlocked = isCreativeEthicsUnlocked(context);
      const state = getCreativeEthicsState(context);

      let eyebrow;
      let desc;
      let stateClass;

      if (state && state.earned) {
        const type = creatorTypes[state.primary] || creatorTypes.observer;
        eyebrow = "Bonus earned";
        desc = `Your AI Creator Type: ${escapeHtml(type.name)}.`;
        stateClass = "earned";
      } else if (unlocked) {
        eyebrow = "Bonus unlocked";
        desc = "Explore what it means to create with AI, not just watch AI create.";
        stateClass = "unlocked";
      } else {
        eyebrow = "Bonus";
        desc = "Unlocks after the Eco-Awareness Badge.";
        stateClass = "locked";
      }

      return `
        <div class="ai-ready-legend-item ai-ready-bonus-tile ${stateClass}">
          <div class="bonus-tile-inner">
            <div class="bonus-tile-text">
              <span class="bonus-tile-eyebrow">${eyebrow}</span>
              <strong>Creative Ethics — AI Creator Type</strong>
              <p>${desc}</p>
            </div>
            <div class="bonus-tile-cta">${renderCreativeEthicsBadge(context)}</div>
          </div>
        </div>`;
    }

    // --- Modal flow ------------------------------------------------------------

    function openCreativeEthicsModal(context) {
      const earnedState = getCreativeEthicsState(context);
      // Allow opening if unlocked, or if already earned (so an earned result can
      // always be reviewed, even if the view has since re-locked).
      if (!isCreativeEthicsUnlocked(context) && !(earnedState && earnedState.earned)) return;

      creativeQuizState = {
        context,
        current: 0,
        answers: [],
        scores: {},
        primary: null,
        secondary: null,
        earned: false,
        step: "intro"
      };

      if (earnedState && earnedState.earned) {
        creativeQuizState.primary = earnedState.primary;
        creativeQuizState.secondary = earnedState.secondary;
        creativeQuizState.earned = true;
        creativeQuizState.step = "result";
      }

      let modal = document.getElementById("creativeEthicsModal");
      if (modal) modal.remove();

      modal = document.createElement("div");
      modal.id = "creativeEthicsModal";
      modal.className = "lab-modal-backdrop";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-labelledby", "creativeEthicsTitle");
      modal.tabIndex = -1;
      modal.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeCreativeEthicsModal();
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeCreativeEthicsModal();
      });

      document.body.appendChild(modal);
      renderCreativeEthicsStep();
      modal.focus();
    }

    function closeCreativeEthicsModal() {
      const modal = document.getElementById("creativeEthicsModal");
      if (modal) modal.remove();
      creativeQuizState = null;
    }

    function renderCreativeEthicsStep() {
      const modal = document.getElementById("creativeEthicsModal");
      if (!modal || !creativeQuizState) return;

      let body = "";
      if (creativeQuizState.step === "intro") body = creativeStepIntro();
      else if (creativeQuizState.step === "quiz") body = creativeStepQuiz();
      else if (creativeQuizState.step === "result") body = creativeStepResult();
      else if (creativeQuizState.step === "reflection") body = creativeStepReflection();
      else if (creativeQuizState.step === "done") body = creativeStepDone();

      modal.innerHTML = `
        <div class="lab-modal creator-quiz-modal">
          <div class="lab-modal-header">
            <h2 id="creativeEthicsTitle">AI, Creativity, and Ethics</h2>
            <button type="button" class="lab-modal-close" onclick="closeCreativeEthicsModal()" aria-label="Close bonus section">×</button>
          </div>
          <div class="lab-modal-content creator-quiz-content">
            ${body}
          </div>
        </div>`;

      const focusTarget = modal.querySelector("[data-autofocus]");
      if (focusTarget) focusTarget.focus();
    }

    function creativeStepIntro() {
      return `
        <p class="creator-quiz-subtitle">The process is the art. AI can generate an output, but people create through attention, choice, revision, meaning, and responsibility.</p>
        <div class="lab-modal-card">
          <h3>What Kind of AI Creator Are You?</h3>
          <p>This quiz looks at how you tend to participate in a creative process. There are no bad results. Each creator type has a strength, a caution, and a next move.</p>
          <p class="small-note">Ten quick questions. Your result is not a rule — it is a way to think about how you take part in creating with AI.</p>
        </div>
        <div class="creator-quiz-actions">
          <button type="button" class="primary-btn" data-autofocus onclick="startCreatorQuiz()">Start Creator Quiz</button>
        </div>`;
    }

    function startCreatorQuiz() {
      creativeQuizState.current = 0;
      creativeQuizState.answers = [];
      creativeQuizState.scores = {};
      creativeQuizState.earned = getCreativeEthicsState(creativeQuizState.context) ? creativeQuizState.earned : false;
      creativeQuizState.step = "quiz";
      renderCreativeEthicsStep();
    }

    function creativeStepQuiz() {
      const i = creativeQuizState.current;
      const q = creatorQuizQuestions[i];
      const total = creatorQuizQuestions.length;
      const letters = ["A", "B", "C", "D", "E"];

      const options = q.choices.map((choice, idx) => `
        <button type="button" class="creator-quiz-option"${idx === 0 ? " data-autofocus" : ""}
                onclick="selectCreativeAnswer(${idx})">
          <span class="cqo-letter" aria-hidden="true">${letters[idx]}</span>
          <span class="cqo-text">${escapeHtml(choice.text)}</span>
        </button>`).join("");

      const back = i > 0
        ? `<button type="button" class="secondary-btn" onclick="creativeQuizBack()">Back</button>`
        : "";

      return `
        <div class="creator-quiz-progress" aria-label="Question ${i + 1} of ${total}">
          <div class="cqp-bar"><span class="cqp-fill" style="width:${Math.round((i / total) * 100)}%"></span></div>
          <span class="cqp-label">Question ${i + 1} of ${total}</span>
        </div>
        <p class="creator-quiz-prompt">${escapeHtml(q.prompt)}</p>
        <div class="creator-quiz-options">${options}</div>
        <div class="creator-quiz-actions">${back}</div>`;
    }

    function selectCreativeAnswer(choiceIndex) {
      const i = creativeQuizState.current;
      const q = creatorQuizQuestions[i];
      const choice = q.choices[choiceIndex];
      if (!choice) return;

      creativeQuizState.answers[i] = choiceIndex;

      // Recompute scores from all recorded answers so Back/change stays consistent.
      creativeQuizState.scores = {};
      creativeQuizState.answers.forEach((ansIdx, qIdx) => {
        if (ansIdx == null) return;
        const picked = creatorQuizQuestions[qIdx].choices[ansIdx];
        Object.keys(picked.scores).forEach((typeId) => {
          creativeQuizState.scores[typeId] = (creativeQuizState.scores[typeId] || 0) + picked.scores[typeId];
        });
      });

      if (i + 1 < creatorQuizQuestions.length) {
        creativeQuizState.current = i + 1;
        renderCreativeEthicsStep();
      } else {
        computeCreativeResult();
        creativeQuizState.step = "result";
        renderCreativeEthicsStep();
      }
    }

    function creativeQuizBack() {
      if (creativeQuizState.current > 0) {
        creativeQuizState.current -= 1;
        renderCreativeEthicsStep();
      }
    }

    function computeCreativeResult() {
      const scores = creativeQuizState.scores;
      // Map in fixed priority order, then stable-sort by score desc so ties keep order.
      const ranked = creatorTypeOrder
        .map((id) => ({ id, score: scores[id] || 0 }))
        .sort((a, b) => b.score - a.score);

      creativeQuizState.primary = ranked[0].id;
      creativeQuizState.secondary = ranked[1] ? ranked[1].id : ranked[0].id;
    }

    function creativeStepResult() {
      const primary = creatorTypes[creativeQuizState.primary];
      const secondary = creatorTypes[creativeQuizState.secondary];
      const alreadyEarned = creativeQuizState.earned;

      const nextAction = alreadyEarned
        ? `
          <div class="creator-quiz-earned-note" role="status">
            <span class="ceb-check" aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            You have earned the Creative Ethics Badge.
          </div>
          <div class="creator-quiz-actions">
            <button type="button" class="secondary-btn" data-autofocus onclick="retakeCreatorQuiz()">Retake Quiz</button>
            <button type="button" class="primary-btn" onclick="closeCreativeEthicsModal()">Close</button>
          </div>`
        : `
          <div class="creator-quiz-actions">
            <button type="button" class="primary-btn" data-autofocus onclick="goToCreativeReflection()">Continue to Reflection</button>
            <button type="button" class="secondary-btn" onclick="retakeCreatorQuiz()">Retake Quiz</button>
          </div>`;

      return `
        <div class="creator-result-head">
          <div class="creator-result-badge" aria-hidden="true">${creatorIcons[primary.icon] || ""}</div>
          <div>
            <p class="creator-result-eyebrow">Your AI Creator Type</p>
            <h3 class="creator-result-title">${escapeHtml(primary.name)}</h3>
          </div>
        </div>
        <p class="creator-result-lead">${escapeHtml(primary.resultText)}</p>
        <div class="lab-modal-grid">
          <div class="lab-modal-card"><h3>Strength</h3><p>${escapeHtml(primary.strength)}</p></div>
          <div class="lab-modal-card"><h3>Word of caution</h3><p>${escapeHtml(primary.caution)}</p></div>
        </div>
        <div class="lab-modal-card"><h3>Try this</h3><p>${escapeHtml(primary.tryThis)}</p></div>
        <div class="creator-secondary">
          <span class="creator-secondary-badge" aria-hidden="true">${creatorIcons[secondary.icon] || ""}</span>
          <p><strong>Secondary trait: ${escapeHtml(secondary.name)}</strong> — ${escapeHtml(secondary.resultText)}</p>
        </div>
        ${nextAction}`;
    }

    function retakeCreatorQuiz() {
      creativeQuizState.current = 0;
      creativeQuizState.answers = [];
      creativeQuizState.scores = {};
      creativeQuizState.step = "quiz";
      renderCreativeEthicsStep();
    }

    function goToCreativeReflection() {
      creativeQuizState.step = "reflection";
      renderCreativeEthicsStep();
    }

    function creativeStepReflection() {
      return `
        <p class="creator-quiz-subtitle">The process is the art. What part of the process belonged to you?</p>
        <p>To earn the Creative Ethics Badge, name one choice you made, one thing you changed or questioned, and one responsibility you had.</p>
        <div class="creator-reflection">
          <label class="creator-reflection-field">
            <span>One choice I made</span>
            <input type="text" id="ceReflChoice" data-autofocus oninput="validateCreativeReflection()" autocomplete="off" />
          </label>
          <label class="creator-reflection-field">
            <span>One thing I changed or questioned</span>
            <input type="text" id="ceReflChanged" oninput="validateCreativeReflection()" autocomplete="off" />
          </label>
          <label class="creator-reflection-field">
            <span>One responsibility I had</span>
            <input type="text" id="ceReflResp" oninput="validateCreativeReflection()" autocomplete="off" />
          </label>
        </div>
        <div class="creator-quiz-actions">
          <button type="button" class="secondary-btn" onclick="backToCreativeResult()">Back to Result</button>
          <button type="button" class="primary-btn" id="ceReflSubmit" disabled onclick="submitCreativeReflection()">Earn Creative Ethics Badge</button>
        </div>`;
    }

    function backToCreativeResult() {
      creativeQuizState.step = "result";
      renderCreativeEthicsStep();
    }

    function creativeReflectionValue(id) {
      const el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }

    function validateCreativeReflection() {
      const btn = document.getElementById("ceReflSubmit");
      if (!btn) return;
      const filled = creativeReflectionValue("ceReflChoice")
        && creativeReflectionValue("ceReflChanged")
        && creativeReflectionValue("ceReflResp");
      btn.disabled = !filled;
    }

    function submitCreativeReflection() {
      const choice = creativeReflectionValue("ceReflChoice");
      const changed = creativeReflectionValue("ceReflChanged");
      const responsibility = creativeReflectionValue("ceReflResp");
      if (!(choice && changed && responsibility)) return;

      setCreativeEthicsState(creativeQuizState.context, {
        earned: true,
        primary: creativeQuizState.primary,
        secondary: creativeQuizState.secondary,
        reflection: { choice, changed, responsibility }
      });

      creativeQuizState.earned = true;
      creativeQuizState.step = "done";
      renderCreativeEthicsStep();
      refreshCreativeDashboard(creativeQuizState.context);
    }

    function creativeStepDone() {
      const primary = creatorTypes[creativeQuizState.primary];
      return `
        <div class="creator-done">
          <div class="creator-result-badge earned-badge" aria-hidden="true">${creatorIcons[primary.icon] || ""}</div>
          <h3>You earned the Creative Ethics Badge</h3>
          <p>AI can generate, but people create through attention, choice, revision, meaning, and responsibility.</p>
          <p class="small-note">The process is the art. Your result is not a rule. It is a way to think about how you participate.</p>
        </div>
        <div class="creator-quiz-actions">
          <button type="button" class="secondary-btn" onclick="backToCreativeResult()">View My Result</button>
          <button type="button" class="primary-btn" data-autofocus onclick="closeCreativeEthicsModal()">Done</button>
        </div>`;
    }
