    let studentAiAssessState = {
      level: null,
      allowed: false,
      responsibility: false
    };

    function getStudentPromptFieldValue(id) {
      return document.getElementById(id)?.value.trim() || "";
    }

    function getStudentAiLevelInfo(level) {
      const levels = {
        0: ["Level 0 — Independent", "AI is not used for this task. You complete the work yourself."],
        1: ["Level 1 — Brainstorm / Explain", "AI helps you understand, brainstorm, or ask questions before you create the final work."],
        2: ["Level 2 — Organize / Revise", "AI helps organize, revise, or improve work you already created."],
        3: ["Level 3 — Supported Drafting", "AI may help draft limited parts, but you still make final choices and revisions."],
        4: ["Level 4 — Generated Work", "AI creates most or all of the final answer. Use this only if your teacher specifically allows it."]
      };

      return levels[level] || ["Choose a level.", "Start by deciding how much AI support is allowed for this task."];
    }

    function selectStudentAiLevel(level) {
      studentAiAssessState.level = level;

      document.querySelectorAll(".student-level-btn").forEach(button => {
        button.classList.toggle("selected", Number(button.dataset.level) === level);
      });

      const levelSelect = document.getElementById("studentAssessLevelSelect");
      if (levelSelect) levelSelect.value = String(level);

      const [title, description] = getStudentAiLevelInfo(level);
      const output = document.getElementById("studentAssessOutput");
      if (output) {
        output.innerHTML = `<strong>${title}</strong><p class="small-note">${description}</p>`;
      }

      updateStudentAssessFromDropdowns(false);
    }

    function setStudentAssessLevelFromSelect() {
      const select = document.getElementById("studentAssessLevelSelect");
      if (!select || select.value === "") {
        studentAiAssessState.level = null;
        document.querySelectorAll(".student-level-btn").forEach(button => button.classList.remove("selected"));
        const output = document.getElementById("studentAssessOutput");
        if (output) {
          output.innerHTML = `<strong>Choose a level.</strong><p class="small-note">Start by deciding how much AI support is allowed for this task.</p>`;
        }
        updateStudentAssessFromDropdowns(false);
        return;
      }

      selectStudentAiLevel(Number(select.value));
    }

    function updateStudentAssessFromDropdowns(showStatus = false) {
      const allowedValue = document.getElementById("studentAssessAllowedSelect")?.value || "";
      const responsibilityValue = document.getElementById("studentAssessResponsibilitySelect")?.value || "";

      studentAiAssessState.allowed = allowedValue === "yes";
      studentAiAssessState.responsibility = responsibilityValue === "yes";

      if (showStatus) updateStudentAssessStatus();
    }

    function getStudentAssessGuidance() {
      updateStudentAssessFromDropdowns(true);
    }

    function clearStudentAssess() {
      studentAiAssessState = { level: null, allowed: false, responsibility: false };

      ["studentAssessLevelSelect", "studentAssessAllowedSelect", "studentAssessResponsibilitySelect"].forEach(id => {
        const select = document.getElementById(id);
        if (select) select.value = "";
      });

      document.querySelectorAll(".student-level-btn").forEach(button => button.classList.remove("selected"));

      const output = document.getElementById("studentAssessOutput");
      if (output) {
        output.innerHTML = `<strong>Choose a level.</strong><p class="small-note">Start by deciding how much AI support is allowed for this task.</p>`;
      }

      const status = document.getElementById("studentAssessStatus");
      if (status) {
        status.className = "student-prompt-status";
        status.textContent = "Assess your AI-use level before building a prompt.";
      }
    }

    function markStudentAssessAllowed() {
      const select = document.getElementById("studentAssessAllowedSelect");
      if (select) select.value = "yes";
      updateStudentAssessFromDropdowns(true);
    }

    function markStudentAssessResponsibility() {
      const select = document.getElementById("studentAssessResponsibilitySelect");
      if (select) select.value = "yes";
      updateStudentAssessFromDropdowns(true);
    }

    function updateStudentAssessStatus() {
      const status = document.getElementById("studentAssessStatus");
      if (!status) return;

      updateStudentAssessFromDropdowns(false);

      if (studentAiAssessState.level === null) {
        status.className = "student-prompt-status bad";
        status.textContent = "Choose the AI-use level you are considering.";
        return;
      }

      if (!studentAiAssessState.allowed) {
        status.className = "student-prompt-status bad";
        status.textContent = "Pause and ask first. Make sure this AI-use level is allowed before you begin.";
        return;
      }

      if (!studentAiAssessState.responsibility) {
        status.className = "student-prompt-status bad";
        status.textContent = "Confirm that you will check the output and make final choices.";
        return;
      }

      status.className = "student-prompt-status good";
      status.textContent = "Assessment complete. Continue to Build and Disclose.";
    }

    function updateStudentBuildCounts() {
      const fields = [
        ["studentBuildTask", "studentBuildTaskCount", 120],
        ["studentBuildAudience", "studentBuildAudienceCount", 80],
        ["studentBuildFormat", "studentBuildFormatCount", 80],
        ["studentBuildDetails", "studentBuildDetailsCount", 250],
        ["studentBuildLimits", "studentBuildLimitsCount", 200]
      ];

      fields.forEach(([fieldId, countId, max]) => {
        const field = document.getElementById(fieldId);
        const count = document.getElementById(countId);
        if (!field || !count) return;

        const length = field.value.length;
        count.textContent = length >= max ? `${length} / ${max} — limit reached` : `${length} / ${max}`;
        count.classList.toggle("limit-reached", length >= max);
      });
    }

    function buildStudentPracticePrompt() {
      const task = getStudentPromptFieldValue("studentBuildTask");
      const audience = getStudentPromptFieldValue("studentBuildAudience");
      const format = getStudentPromptFieldValue("studentBuildFormat");
      const details = getStudentPromptFieldValue("studentBuildDetails");
      const limits = getStudentPromptFieldValue("studentBuildLimits");
      const output = document.getElementById("studentPromptOutput");
      const status = document.getElementById("studentPromptPracticeStatus");

      const missing = [];
      if (!task) missing.push("what you want help with");
      if (!audience) missing.push("who the answer is for");
      if (!format) missing.push("the format");
      if (!details) missing.push("details to include");
      if (!limits) missing.push("what AI should avoid or remember");

      if (missing.length) {
        if (status) {
          status.className = "student-prompt-status bad";
          status.textContent = `Add: ${missing.join(", ")}.`;
        }
        updateStudentToolCheckpointState();
        return;
      }

      const prompt = [
        `Help me with this task: ${task}`,
        `Write it for: ${audience}`,
        `Use this format: ${format}`,
        `Include these details: ${details}`,
        `Avoid or remember this: ${limits}`,
        "",
        "Do not complete the final assignment for me. Help me understand, plan, revise, or check my own work."
      ].join("\n");

      if (output) output.value = prompt;
      if (status) {
        status.className = "student-prompt-status good";
        status.textContent = "Prompt built. Review it and revise anything unclear.";
      }

      updateStudentToolCheckpointState();
    }

    function copyStudentPracticePrompt() {
      const output = document.getElementById("studentPromptOutput");
      const status = document.getElementById("studentPromptPracticeStatus");
      if (!output || !output.value.trim()) {
        buildStudentPracticePrompt();
      }

      const refreshedOutput = document.getElementById("studentPromptOutput");
      if (!refreshedOutput || !refreshedOutput.value.trim()) return;

      refreshedOutput.select();
      refreshedOutput.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(refreshedOutput.value).then(() => {
        if (status) {
          status.className = "student-prompt-status good";
          status.textContent = "Prompt copied.";
        }
      }).catch(() => {
        document.execCommand("copy");
        if (status) {
          status.className = "student-prompt-status good";
          status.textContent = "Prompt copied.";
        }
      });
    }

    function clearStudentPracticePrompt() {
      ["studentBuildTask", "studentBuildAudience", "studentBuildFormat", "studentBuildDetails", "studentBuildLimits", "studentPromptOutput"].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = "";
      });

      updateStudentBuildCounts();

      const status = document.getElementById("studentPromptPracticeStatus");
      if (status) {
        status.className = "student-prompt-status";
        status.textContent = "Build a prompt before completing the tool checkpoint.";
      }

      updateStudentToolCheckpointState();
    }

    function generateStudentDisclosure() {
      const tool = getStudentPromptFieldValue("studentDisclosureToolUsed");
      const link = getStudentPromptFieldValue("studentDisclosureToolLink");
      const use = getStudentPromptFieldValue("studentDisclosureUse");
      const prompts = getStudentPromptFieldValue("studentDisclosurePrompts");
      const outputUse = getStudentPromptFieldValue("studentDisclosureOutputUse");
      const output = document.getElementById("studentDisclosureOutput");
      const status = document.getElementById("studentDisclosureStatus");

      const missing = [];
      if (!tool) missing.push("AI tool used");
      if (!use) missing.push("what you used AI to help with");
      if (!prompts) missing.push("prompt(s) used");
      if (!outputUse) missing.push("how you used the output");

      if (missing.length) {
        if (status) {
          status.className = "student-disclosure-status bad";
          status.textContent = `Add: ${missing.join(", ")}.`;
        }
        updateStudentToolCheckpointState();
        return;
      }

      const linkText = link ? ` (${link})` : "";
      const statement = [
        `AI disclosure: I used ${tool}${linkText} to ${use}.`,
        `Prompt(s) used: ${prompts}`,
        `How I used the output: ${outputUse}`,
        "I reviewed the AI output and made the final choices myself."
      ].join("\n");

      if (output) output.value = statement;
      if (status) {
        status.className = "student-disclosure-status good";
        status.textContent = "Disclosure generated. Review it and edit if needed.";
      }

      updateStudentToolCheckpointState();
    }

    function copyStudentDisclosure() {
      const output = document.getElementById("studentDisclosureOutput");
      const status = document.getElementById("studentDisclosureStatus");
      if (!output || !output.value.trim()) {
        generateStudentDisclosure();
      }

      const refreshedOutput = document.getElementById("studentDisclosureOutput");
      if (!refreshedOutput || !refreshedOutput.value.trim()) return;

      refreshedOutput.select();
      refreshedOutput.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(refreshedOutput.value).then(() => {
        if (status) {
          status.className = "student-disclosure-status good";
          status.textContent = "Disclosure copied.";
        }
      }).catch(() => {
        document.execCommand("copy");
        if (status) {
          status.className = "student-disclosure-status good";
          status.textContent = "Disclosure copied.";
        }
      });
    }

    function clearStudentDisclosure() {
      ["studentDisclosureToolUsed", "studentDisclosureToolLink", "studentDisclosureUse", "studentDisclosurePrompts", "studentDisclosureOutputUse", "studentDisclosureOutput"].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = "";
      });

      const status = document.getElementById("studentDisclosureStatus");
      if (status) {
        status.className = "student-disclosure-status";
        status.textContent = "Generate a disclosure and build a prompt to complete the checkpoint.";
      }

      updateStudentToolCheckpointState();
    }

    function updateStudentToolCheckpointState() {
      const completeButton = document.getElementById("studentPromptCompleteButton");
      if (!completeButton) return;

      const promptBuilt = Boolean(document.getElementById("studentPromptOutput")?.value.trim());
      const disclosureBuilt = Boolean(document.getElementById("studentDisclosureOutput")?.value.trim());
      completeButton.disabled = !(promptBuilt && disclosureBuilt);
    }

    function completeStudentPromptPractice() {
      const promptBuilt = Boolean(document.getElementById("studentPromptOutput")?.value.trim());
      const disclosureBuilt = Boolean(document.getElementById("studentDisclosureOutput")?.value.trim());
      const feedback = document.getElementById("quizFeedback");

      if (!promptBuilt) {
        buildStudentPracticePrompt();
        return;
      }

      if (!disclosureBuilt) {
        generateStudentDisclosure();
        return;
      }

      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Tool checkpoint complete. You assessed AI use, built a prompt, and generated a disclosure.";
      }

      // On teacher view the tool is a standalone reference (no numbered module),
      // so do not touch student progress or student module navigation.
      const teacherView = document.getElementById("teacherView");
      const teacherActive = teacherView && !teacherView.classList.contains("hidden");
      if (teacherActive) return;

      completeModule("required-ai-practice-tools", 100);
    }

    function getActivityLabels(type) {
      if (type === "guidelineCloze") return ["thinking", "independence", "verify", "privacy", "trusted adult", "teacher", "cite", "defense"];
      if (type === "guidelinePractice") return ["Supports learning", "Replaces thinking", "Verify first", "Protect privacy"];
      if (type === "sau48Policy") return ["AI should support human thinking", "Not allowed", "Verify accuracy and citing appropriately", "Academic dishonesty risk"];
      if (type === "sort") return ["AI", "Not AI", "Unsure"];
      if (type === "pattern") return ["Pattern", "Human Judgment"];
      if (type === "claimCheck") return ["Check It", "Probably OK"];
      if (type === "media") return ["Needs Checking", "More Reliable"];
      if (type === "promptChoice") return ["Prompt A", "Prompt B"];
      if (type === "scenario") return ["Helpful", "Questionable", "Not OK"];
      if (type === "aiUseLevel") return ["Level 0: No AI Use", "Level 1: Planning", "Level 2: Editing", "Level 3: Defined Support", "Level 4: Supported Co-Use"];
      if (type === "disclosurePractice") return ["Include", "Do Not Include", "Only If Asked", "Never Include"];
      return [];
    }


    function normalizeAnswerText(value) {
      return String(value || "")
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
    }



    function getActivityMode(type) {
      const fixTypes = ["promptChoice"];
      const spotTypes = ["llmProcess", "claimCheck", "media", "pattern", "disclosurePractice", "privacyContext", "ecoAwareness", "ecoTeacher"];
      const chooseTypes = ["wifiConnection", "internetInfrastructure", "guidelinePractice", "sau48Policy", "sort", "vocabularyContext", "scenario", "aiUseLevel", "teacherScenario"];

      if (fixTypes.includes(type)) {
        return {
          title: "Fix the Prompt",
          label: "Fix",
          cardLabel: "Prompt",
          className: "activity-fix",
          direction: "Choose the option that gives clearer, safer, or more useful AI support."
        };
      }

      if (spotTypes.includes(type)) {
        return {
          title: "Spot the Problem",
          label: "Spot",
          cardLabel: "Case",
          className: "activity-spot",
          direction: "Look closely. Choose the issue, risk, or strongest next step."
        };
      }

      return {
        title: "Choose Your Response",
        label: "Choose",
        cardLabel: "Scenario",
        className: "activity-choose",
        direction: "Read the situation. Choose the best answer."
      };
    }

    function aiCategoryIcon(name) {
      const icons = {
        language: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h14v9H10l-4 3v-3H5z"></path><path d="M9 10h6"></path><path d="M9 13h4"></path></svg>`,
        generative: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v5"></path><path d="M12 15v5"></path><path d="M4 12h5"></path><path d="M15 12h5"></path><path d="M7 7l2 2"></path><path d="M15 15l2 2"></path><path d="M17 7l-2 2"></path><path d="M9 15l-2 2"></path><circle cx="12" cy="12" r="2.5"></circle></svg>`,
        recommendation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h8"></path><path d="M5 12h5"></path><path d="M5 17h8"></path><path d="M13 12h6"></path><path d="M16 9l3 3-3 3"></path></svg>`,
        vision: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M9 6l1.2-2h3.6L15 6"></path></svg>`,
        audio: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v8"></path><rect x="9" y="3.5" width="6" height="10" rx="3"></rect><path d="M7 10.5a5 5 0 0 0 10 0"></path><path d="M12 15.5V20"></path><path d="M9.5 20h5"></path></svg>`,
        data: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2"></circle><circle cx="18" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><circle cx="8" cy="17" r="2"></circle><path d="M8 7h8"></path><path d="M7 8.5l1 6.5"></path><path d="M16.5 7.5l1 8"></path><path d="M10 17h6"></path></svg>`,
        embedded: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="1.5"></rect><path d="M10 10h4v4h-4z"></path><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><path d="M5.5 5.5l2 2"></path><path d="M16.5 16.5l2 2"></path><path d="M18.5 5.5l-2 2"></path><path d="M7.5 16.5l-2 2"></path></svg>`,
        prediction: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18V6"></path><path d="M5 18h14"></path><path d="M8 15l3-3 3 1 4-5"></path><path d="M15 8h3v3"></path></svg>`
      };
      return icons[name] || icons.language;
    }

    const aiCategoryMeta = {
      LAN: { short: "Language", title: "LAN · Language", desc: "Works with words, prompts, explanations, or drafts.", icon: "language" },
      GEN: { short: "Generative", title: "GEN · Generative", desc: "Creates new text, images, audio, video, code, or music.", icon: "generative" },
      REC: { short: "Recommendation", title: "REC · Recommendation", desc: "Suggests what you may watch, read, buy, or click next.", icon: "recommendation" },
      VIS: { short: "Vision", title: "VIS · Computer Vision", desc: "Works with images, video, objects, or visual information.", icon: "vision" },
      AUD: { short: "Speech/Audio", title: "AUD · Speech/Audio", desc: "Works with voices, sound, captions, or speech-to-text.", icon: "audio" },
      DAT: { short: "Data", title: "DAT · Data/Algorithm", desc: "Uses patterns from clicks, searches, views, or activity.", icon: "data" },
      EMB: { short: "Embedded", title: "EMB · Embedded AI", desc: "AI features built into another app, website, device, or platform.", icon: "embedded" },
      PRD: { short: "Prediction", title: "PRD · Prediction", desc: "Predicts, scores, or forecasts what may happen next.", icon: "prediction" }
    };

    const aiCategoryExamples = [
      {
        text: "A chatbot explains photosynthesis.",
        answer: "LAN",
        related: ["GEN"],
        feedback: "Strongest match: Language. Also related: Generative."
      },
      {
        text: "A tool creates an image from a prompt.",
        answer: "GEN",
        related: ["VIS"],
        feedback: "Strongest match: Generative. Also related: Computer Vision."
      },
      {
        text: "A video app suggests what to watch next.",
        answer: "REC",
        related: ["DAT", "PRD"],
        feedback: "Strongest match: Recommendation. Also related: Data/Algorithm and Prediction."
      },
      {
        text: "Speech-to-text turns your voice into words.",
        answer: "AUD",
        related: ["LAN"],
        feedback: "Strongest match: Speech/Audio. Also related: Language."
      },
      {
        text: "A writing tool suggests a clearer sentence.",
        answer: "LAN",
        related: ["GEN"],
        feedback: "Strongest match: Language. Also related: Generative."
      },
      {
        text: "A camera tool identifies a plant.",
        answer: "VIS",
        related: ["PRD"],
        feedback: "Strongest match: Computer Vision. Also related: Prediction."
      }
    ];

    let aiCategorySelections = {};

    function renderAiCategoryKey() {
      const key = document.getElementById("aiCategoryKey");
      if (!key) return;
      key.innerHTML = Object.entries(aiCategoryMeta).map(([code, meta]) => `
        <div class="ai-category-key-card">
          <div class="ai-category-key-top">
            <div class="ai-category-key-icon" aria-hidden="true">${aiCategoryIcon(meta.icon)}</div>
            <div class="ai-category-key-text">
              <strong>${meta.title}</strong>
            </div>
          </div>
          <p>${meta.desc}</p>
        </div>
      `).join("");
    }

    function renderAiCategoryTool() {
      const mount = document.getElementById("aiCategoryExamples");
      const status = document.getElementById("aiCategoryStatus");
      if (!mount || !status) return;

      aiCategorySelections = {};
      renderAiCategoryKey();

      mount.innerHTML = aiCategoryExamples.map((example, index) => `
        <div class="ai-category-example" id="aiCategoryExample${index}">
          <strong>${escapeHtml(example.text)}</strong>
          <div class="ai-category-options">
            ${Object.keys(aiCategoryMeta).map(code => `
              <button type="button" class="ai-category-option" id="aiCategory${index}${code}" onclick="answerAiCategory(${index}, '${code}')" aria-label="${code}: ${aiCategoryMeta[code].short}">
                <span class="ai-category-choice-icon" aria-hidden="true">${aiCategoryIcon(aiCategoryMeta[code].icon)}</span>
                <b>${code}</b>
              </button>
            `).join("")}
          </div>
          <div id="aiCategoryFeedback${index}" class="ai-category-feedback hidden"></div>
        </div>
      `).join("");

      status.classList.remove("complete");
      status.textContent = "Choose a category for each example.";
    }

    function answerAiCategory(index, code) {
      const example = aiCategoryExamples[index];
      if (!example || aiCategorySelections[index]) return;

      const related = Array.isArray(example.related) ? example.related : [];
      const correct = code === example.answer;
      aiCategorySelections[index] = { code, correct };

      const card = document.getElementById(`aiCategoryExample${index}`);
      const feedback = document.getElementById(`aiCategoryFeedback${index}`);

      Object.keys(aiCategoryMeta).forEach(optionCode => {
        const button = document.getElementById(`aiCategory${index}${optionCode}`);
        if (!button) return;
        button.disabled = true;
        if (optionCode === example.answer) {
          button.classList.add("correct-choice");
        } else if (related.includes(optionCode)) {
          button.classList.add("related-choice");
        }
        if (optionCode === code && !correct && optionCode !== example.answer && !related.includes(optionCode)) {
          button.classList.add("wrong-choice");
        }
      });

      if (card) card.classList.add(correct ? "answered-correct" : "answered-incorrect");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = `ai-category-feedback ${correct ? "correct" : "incorrect"}`;
        feedback.textContent = example.feedback;
      }

      updateAiCategoryStatus();
    }

    function updateAiCategoryStatus() {
      const status = document.getElementById("aiCategoryStatus");
      if (!status) return;

      const answered = Object.keys(aiCategorySelections).length;
      const correct = Object.values(aiCategorySelections).filter(item => item.correct).length;

      if (answered === aiCategoryExamples.length) {
        status.classList.add("complete");
        status.textContent = `Tool complete: ${correct} of ${aiCategoryExamples.length} strongest matches selected.`;
      } else {
        status.classList.remove("complete");
        status.textContent = `${answered} of ${aiCategoryExamples.length} examples answered.`;
      }
    }



    function hashStringForOrder(value) {
      const text = String(value || "");
      let hash = 0;

      for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash + text.charCodeAt(i)) >>> 0;
      }

      return hash;
    }

    function getAnswerText(answer, options) {
      if (typeof answer === "number") {
        return options[answer];
      }

      return answer;
    }

    function getBalancedOptionOrder(options, answer, seedKey, sequenceIndex = 0) {
      const list = [...(options || [])];
      if (list.length < 2) return list;

      const answerText = getAnswerText(answer, list);
      const currentIndex = list.findIndex(option => normalizeAnswerText(option) === normalizeAnswerText(answerText));

      if (currentIndex < 0) return list;

      const targetIndex = (hashStringForOrder(seedKey) + sequenceIndex) % list.length;
      const [correctOption] = list.splice(currentIndex, 1);
      list.splice(targetIndex, 0, correctOption);

      return list;
    }

    function getBalancedQuizOptions(question, seedKey, questionIndex = 0) {
      const ordered = getBalancedOptionOrder(question.options, question.answer, seedKey, questionIndex);

      return ordered.map(option => ({
        text: option,
        originalIndex: question.options.findIndex(original => normalizeAnswerText(original) === normalizeAnswerText(option))
      }));
    }

    function renderPrerequisiteScenarioGrid(page = prerequisiteScenarioPage) {
      const module = modules[activeModuleIndex];
      const area = document.getElementById("activityArea");
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);
      prerequisiteScenarioPage = Math.min(Math.max(page, 0), totalPages - 1);
      const startIndex = prerequisiteScenarioPage * pageSize;
      const visibleItems = module.items.slice(startIndex, startIndex + pageSize);

      if (prerequisiteScenarioPage === 0 && !Object.keys(prerequisiteGridSelections).length) {
        activityCorrect = 0;
      }

      area.classList.remove("hidden");
      area.innerHTML = `
        <h3>Choose Your Response</h3>
        <div class="activity-card activity-choose">
          <div class="prereq-pager-top">
            <span class="prereq-page-chip">Scenario ${prerequisiteScenarioPage + 1} of ${totalPages}</span>
            <p class="prereq-pager-note">Choose one answer. The next scenario unlocks after a short pause.</p>
          </div>

          <div class="prereq-scenario-grid">
            ${visibleItems.map((item, localIndex) => {
              const index = startIndex + localIndex;
              const saved = prerequisiteGridSelections[index];
              const cardState = saved ? (saved.correct ? "answered-correct" : "answered-incorrect") : "";
              return `
                <div class="prereq-scenario-card ${cardState}" id="prereqScenario${index}">
<p class="prereq-scenario-text">${escapeHtml(item.text)}</p>
                  ${item.definition ? `<p class="small-note"><strong>Definition:</strong> ${escapeHtml(item.definition)}</p>` : ""}
                  <div class="prereq-choice-grid">
                    ${getBalancedOptionOrder((item.options || getActivityLabels(module.activityType)), item.answer, module.id, index).map((label, optionIndex) => {
                      const isCorrect = saved && normalizeAnswerText(label) === normalizeAnswerText(item.answer);
                      const isWrong = saved && normalizeAnswerText(label) === normalizeAnswerText(saved.choice) && !saved.correct;
                      return `
                        <button id="prereqScenario${index}Option${optionIndex}"
                          onclick='answerPrerequisiteScenario(${index}, ${JSON.stringify(label)})'
                          ${saved ? "disabled" : ""}
                          class="${isCorrect ? "correct-choice" : ""} ${isWrong ? "wrong-choice" : ""}">
                          ${label}
                        </button>
                      `;
                    }).join("")}
                  </div>
                  <div id="prereqScenario${index}Feedback" class="prereq-grid-feedback ${saved ? (saved.correct ? "correct" : "incorrect") : "hidden"}">${saved ? (saved.correct ? item.feedback : `Best answer: ${item.answer}. ${item.feedback}`) : ""}</div>
                </div>
              `;
            }).join("")}
          </div>

          <div id="prereqGridStatus" class="prereq-grid-status">Choose an answer to continue.</div>
          <div class="button-row">
            <button id="prereqGridNextButton" onclick="advancePrerequisiteScenarioPage()" disabled>Next Scenario</button>
          </div>
        </div>
      `;

      updatePrerequisiteGridStatus();
    }

    function answerPrerequisiteScenario(index, choice) {
      const module = modules[activeModuleIndex];
      const item = module.items[index];
      const card = document.getElementById(`prereqScenario${index}`);
      const feedback = document.getElementById(`prereqScenario${index}Feedback`);
      const options = item.options || getActivityLabels(module.activityType);

      if (prerequisiteGridSelections[index]) return;

      prerequisiteGridSelections[index] = {
        choice,
        correct: normalizeAnswerText(choice) === normalizeAnswerText(item.answer)
      };

      options.forEach((label, optionIndex) => {
        const button = document.getElementById(`prereqScenario${index}Option${optionIndex}`);
        if (!button) return;
        button.disabled = true;

        if (normalizeAnswerText(label) === normalizeAnswerText(item.answer)) {
          button.classList.add("correct-choice");
        } else if (normalizeAnswerText(label) === normalizeAnswerText(choice)) {
          button.classList.add("wrong-choice");
        }
      });

      feedback.classList.remove("hidden");

      if (prerequisiteGridSelections[index].correct) {
        card.classList.add("answered-correct");
        feedback.className = "prereq-grid-feedback correct";
        feedback.textContent = item.feedback;
      } else {
        card.classList.add("answered-incorrect");
        feedback.className = "prereq-grid-feedback incorrect";
        feedback.textContent = `Best answer: ${item.answer}. ${item.feedback}`;
      }

      updatePrerequisiteGridStatus();
    }

    function updatePrerequisiteGridStatus() {
      const module = modules[activeModuleIndex];
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);
      const startIndex = prerequisiteScenarioPage * pageSize;
      const endIndex = Math.min(startIndex + pageSize, module.items.length);
      const visibleCount = endIndex - startIndex;
      const answeredOnPage = Array.from({ length: visibleCount }, (_, localIndex) => startIndex + localIndex)
        .filter(index => prerequisiteGridSelections[index]).length;
      const totalAnswered = Object.keys(prerequisiteGridSelections).length;
      const correct = Object.values(prerequisiteGridSelections).filter(result => result.correct).length;
      const status = document.getElementById("prereqGridStatus");
      const nextButton = document.getElementById("prereqGridNextButton");

      activityCorrect = correct;

      if (!status || !nextButton) return;

      if (answeredOnPage === visibleCount) {
        const isLastPage = prerequisiteScenarioPage === totalPages - 1;
        status.classList.add("ready");
        status.textContent = isLastPage
          ? `All scenarios are complete. Continue to the visual self-check.`
          : `Scenario complete. The next one unlocks in 2 seconds.`;

        nextButton.disabled = true;
        nextButton.textContent = isLastPage ? "Continue to Self-Check" : "Next Scenario";
        setTimeout(() => {
          const liveButton = document.getElementById("prereqGridNextButton");
          if (!liveButton) return;
          liveButton.disabled = false;
          liveButton.textContent = isLastPage ? "Continue to Self-Check" : "Next Scenario";
        }, 2000);
      } else {
        status.classList.remove("ready");
        status.textContent = "Choose an answer to continue.";
        nextButton.disabled = true;
        nextButton.textContent = "Next Scenario";
      }
    }

    function advancePrerequisiteScenarioPage() {
      const module = modules[activeModuleIndex];
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);

      if (prerequisiteScenarioPage < totalPages - 1) {
        prerequisiteScenarioPage++;
        renderPrerequisiteScenarioGrid(prerequisiteScenarioPage);
      } else {
        renderQuiz();
      }
    }

    function renderActivity() {
      const module = modules[activeModuleIndex];
      if (module.selfCheckDiagram) {
        renderPrerequisiteScenarioGrid();
        return;
      }
      const item = module.items[currentActivityIndex];
      const labels = item.options || getActivityLabels(module.activityType);
      const area = document.getElementById("activityArea");
      const mode = getActivityMode(module.activityType);
      const definitionHtml = item.definition ? `<p class="small-note"><strong>Definition:</strong> ${escapeHtml(item.definition)}</p>` : "";
      const balancedLabels = module.activityType === "promptChoice"
        ? labels
        : getBalancedOptionOrder(labels, item.answer, module.id, currentActivityIndex);
      const buttonHtml = balancedLabels.map(label => `<button onclick='answerActivity(${JSON.stringify(label)})'>${label}</button>`).join("");

      area.classList.remove("hidden");

      let cardInner = `
        <div class="activity-mode-label">${mode.label}</div>
        <p class="activity-direction">${mode.direction}</p>
        <p><strong>${escapeHtml(item.text)}</strong></p>
        ${definitionHtml}
        <div class="choice-row">
          ${buttonHtml}
        </div>
        <div id="activityFeedback" class="feedback hidden"></div>
      `;

      if (mode.className === "activity-choose") {
        const choiceGridClass = labels.length === 4 ? "choice-row student-choice-grid four-choice-grid" : "choice-row student-choice-grid";
        cardInner = `
          <div class="student-choice-header">
            <span class="badge">Choose</span>
            <span class="badge">${mode.cardLabel} ${currentActivityIndex + 1} of ${module.items.length}</span>
          </div>

          <div class="student-situation-answer-card">
            <p class="student-situation-text">${escapeHtml(item.text)}</p>
            ${definitionHtml}

            <hr class="student-answer-divider" />

            <div class="${choiceGridClass}">
              ${buttonHtml}
            </div>
            <div id="activityFeedback" class="feedback hidden"></div>
          </div>
        `;
      }

      area.innerHTML = `
        <h3>${mode.title}</h3>
        <div class="activity-card ${mode.className} ${mode.className === "activity-choose" ? "student-choice-shell" : ""}">
          ${cardInner}
        </div>
      `;
    }

    function answerActivity(choice) {
      const module = modules[activeModuleIndex];
      const item = module.items[currentActivityIndex];
      const feedback = document.getElementById("activityFeedback");

      document.querySelectorAll("#activityArea button").forEach(button => {
        button.disabled = true;
      });

      feedback.classList.remove("hidden");

      if (normalizeAnswerText(choice) === normalizeAnswerText(item.answer)) {
        activityCorrect++;
        feedback.className = "feedback correct";
        feedback.textContent = item.feedback;
      } else {
        feedback.className = "feedback incorrect";
        feedback.textContent = `Not quite. Best answer: ${item.answer}. ${item.feedback}`;
      }

      const nextButton = document.createElement("button");
      nextButton.style.marginTop = "1rem";

      const nextLabel = currentActivityIndex < module.items.length - 1 ? `Next ${getActivityMode(module.activityType).cardLabel}` : "Go to Quiz";
      let secondsLeft = NEXT_CARD_DELAY_SECONDS;

      nextButton.disabled = true;
      nextButton.textContent = `Next unlocks in ${secondsLeft} seconds`;

      const countdown = setInterval(() => {
        secondsLeft--;

        if (secondsLeft > 1) {
          nextButton.textContent = `Next unlocks in ${secondsLeft} seconds`;
        } else if (secondsLeft === 1) {
          nextButton.textContent = "Next unlocks in 1 second";
        } else {
          clearInterval(countdown);
          nextButton.disabled = false;
          nextButton.textContent = nextLabel;
        }
      }, 1000);

      nextButton.onclick = () => {
        if (nextButton.disabled) return;

        if (currentActivityIndex < module.items.length - 1) {
          currentActivityIndex++;
          renderActivity();
        } else {
          renderQuiz();
        }
      };

      feedback.appendChild(document.createElement("br"));
      feedback.appendChild(nextButton);
    }

    function renderQuiz() {
      document.getElementById("activityArea").classList.add("hidden");

      const module = modules[activeModuleIndex];
      const quizArea = document.getElementById("quizArea");

      quizSelections = {};
      quizArea.classList.remove("hidden");

      if (module.selfCheckDiagram) {
        const diagram = module.selfCheckDiagram;
        const required = foundationRequiredKeys[diagram] || [];
        quizArea.innerHTML = `
          <h3>Self-Check</h3>
          <p>Instead of a quiz, use the diagram cards above. Each card turns green after you click it once.</p>
          <div id="${diagram}SelfCheckStatus" class="diagram-selfcheck"></div>
          <div class="button-row">
            <button id="${diagram}SelfCheckButton" onclick="completeFoundationSelfCheck()" disabled>Complete Module</button>
            <button class="secondary-btn" onclick="retryModuleActivity()">Review Activity Again</button>
          </div>
          <div id="quizFeedback" class="feedback hidden"></div>
        `;
        updateFoundationSelfCheck(diagram);
        return;
      }

      quizArea.innerHTML = `
        <h3>Quick Check</h3>
        <p>Answer every question correctly and earn at least 85% overall to unlock the next module.</p>
        ${module.quiz.map((q, qIndex) => `
          <div class="quiz-question">
            <p><strong>${qIndex + 1}. ${q.question}</strong></p>
            ${getBalancedQuizOptions(q, module.id, qIndex).map(option => `
              <button class="quiz-option" id="q${qIndex}o${option.originalIndex}" onclick="selectQuizOption(${qIndex}, ${option.originalIndex})">${option.text}</button>
            `).join("")}
          </div>
        `).join("")}
        <div class="button-row">
          <button onclick="submitQuiz()">Submit Quick Check</button>
          <button class="secondary-btn" onclick="retryModuleActivity()">Review Activity Again</button>
        </div>
        <div id="quizFeedback" class="feedback hidden"></div>
      `;
    }

    function completeFoundationSelfCheck() {
      const module = modules[activeModuleIndex];
      const diagram = module.selfCheckDiagram;
      const feedback = document.getElementById("quizFeedback");
      const required = foundationRequiredKeys[diagram] || [];
      const visited = (foundationVisitProgress[diagram] || []).filter(key => required.includes(key));

      feedback.classList.remove("hidden");

      if (visited.length < required.length) {
        feedback.className = "feedback incorrect";
        feedback.textContent = `You still need to visit ${required.length - visited.length} more diagram card${required.length - visited.length === 1 ? '' : 's'}.`;
        return;
      }

      const activityPercent = module.items.length ? (activityCorrect / module.items.length) : 1;
      const totalPercent = Math.round(((activityPercent + 1) / 2) * 100);

      if (totalPercent >= PASSING_SCORE) {
        completeModule(module.id, totalPercent);
        feedback.className = "feedback correct";
        feedback.innerHTML = `Module complete. Score: ${totalPercent}%.`;
      } else {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `Your score is ${totalPercent}%. You need at least ${PASSING_SCORE}% overall to unlock the next module. Review the activity and try again.`;

        const retryButton = document.createElement("button");
        retryButton.textContent = "Retry Module";
        retryButton.style.marginTop = "1rem";
        retryButton.onclick = retryModuleActivity;

        feedback.appendChild(document.createElement("br"));
        feedback.appendChild(retryButton);
      }
    }

    function completeInternetSelfCheck() {
      completeFoundationSelfCheck();
    }

    function selectQuizOption(questionIndex, optionIndex) {
      quizSelections[questionIndex] = optionIndex;

      const optionButtons = document.querySelectorAll(`[id^="q${questionIndex}o"]`);

      optionButtons.forEach(button => {
        button.classList.remove("selected");
        button.style.backgroundColor = "#eef2ff";
        button.style.color = "#111827";
        button.style.borderColor = "#c7d2fe";
        button.style.outline = "none";
        button.style.outlineOffset = "0";
      });

      const selectedButton = document.getElementById(`q${questionIndex}o${optionIndex}`);
      if (!selectedButton) return;
      selectedButton.classList.add("selected");
      selectedButton.style.backgroundColor = "#1e1b4b";
      selectedButton.style.color = "#ffffff";
      selectedButton.style.borderColor = "#facc15";
      selectedButton.style.outline = "4px solid #facc15";
      selectedButton.style.outlineOffset = "2px";
    }

    function submitQuiz() {
      const module = modules[activeModuleIndex];
      const feedback = document.getElementById("quizFeedback");

      feedback.classList.remove("hidden");

      if (Object.keys(quizSelections).length < module.quiz.length) {
        feedback.className = "feedback incorrect";
        feedback.textContent = "Answer every question before submitting.";
        return;
      }

      let correctQuiz = 0;

      module.quiz.forEach((q, qIndex) => {
        const selected = quizSelections[qIndex];
        const selectedButton = document.getElementById(`q${qIndex}o${selected}`);
        const correctIndex = typeof q.answer === "number"
          ? q.answer
          : q.options.findIndex(option => normalizeAnswerText(option) === normalizeAnswerText(q.answer));
        const correctButton = document.getElementById(`q${qIndex}o${correctIndex}`);

        if (selected === correctIndex) {
          correctQuiz++;
          selectedButton.classList.add("correct-answer");
        } else {
          if (selectedButton) selectedButton.classList.add("wrong-answer");
          if (correctButton) correctButton.classList.add("correct-answer");
        }
      });

      const activityPercent = activityCorrect / module.items.length;
      const quizPercent = correctQuiz / module.quiz.length;
      const totalPercent = Math.round(((activityPercent + quizPercent) / 2) * 100);

      if (correctQuiz === module.quiz.length && totalPercent >= PASSING_SCORE) {
        completeModule(module.id, totalPercent);
        feedback.className = "feedback correct";
        feedback.innerHTML = `Module complete. Score: ${totalPercent}%.`;
      } else if (correctQuiz === module.quiz.length && totalPercent < PASSING_SCORE) {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `Your score is ${totalPercent}%. You need at least ${PASSING_SCORE}% to unlock the next module. Review the activity and try again.`;

        const retryButton = document.createElement("button");
        retryButton.textContent = "Retry Module";
        retryButton.style.marginTop = "1rem";
        retryButton.onclick = retryModuleActivity;

        feedback.appendChild(document.createElement("br"));
        feedback.appendChild(retryButton);
      } else {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `You got ${correctQuiz} of ${module.quiz.length} correct. You need all quiz questions correct and at least ${PASSING_SCORE}% overall to unlock the next module. Review and try again.`;

        const retryButton = document.createElement("button");
        retryButton.textContent = "Retry Quick Check";
        retryButton.style.marginTop = "1rem";
        retryButton.onclick = renderQuiz;

        feedback.appendChild(document.createElement("br"));
        feedback.appendChild(retryButton);
      }
    }

    function completeModule(moduleId, score) {
      if (previewMode) {
        const feedback = document.getElementById("quizFeedback");
        feedback.className = "feedback correct";
        feedback.innerHTML = `Preview complete. Score: ${score}%. Progress was not saved because Preview Mode is on.`;

        const buttonRow = document.createElement("div");
        buttonRow.className = "button-row";

        const pathButton = document.createElement("button");
        pathButton.className = "secondary-btn";
        pathButton.textContent = "Return to Learning Path";
        pathButton.onclick = closeModule;
        buttonRow.appendChild(pathButton);

        feedback.appendChild(buttonRow);
        renderDashboard();
        return;
      }

      if (!progress.completedModules.includes(moduleId)) {
        progress.completedModules.push(moduleId);
      }

      progress.scores[moduleId] = score;
      saveProgress();
      renderDashboard();

      const nextIndex = activeModuleIndex + 1;
      const feedback = document.getElementById("quizFeedback");
      const buttonRow = document.createElement("div");

      buttonRow.className = "button-row";

      if (nextIndex < modules.length) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "Continue to Next Module";
        nextButton.onclick = () => openModule(nextIndex);
        buttonRow.appendChild(nextButton);
      } else {
        const finalButton = document.createElement("button");
        finalButton.textContent = "Go to Final Reflection";
        finalButton.onclick = renderFinalReflection;
        buttonRow.appendChild(finalButton);
      }

      const pathButton = document.createElement("button");
      pathButton.className = "secondary-btn";
      pathButton.textContent = "Return to Learning Path";
      pathButton.onclick = closeModule;
      buttonRow.appendChild(pathButton);

      feedback.appendChild(buttonRow);
    }

    function retryModuleActivity() {
      currentActivityIndex = 0;
      activityCorrect = 0;
      quizSelections = {};

      document.getElementById("quizArea").classList.add("hidden");
      renderActivity();
      if (modules[activeModuleIndex] && modules[activeModuleIndex].selfCheckDiagram) {
        updateFoundationSelfCheck(modules[activeModuleIndex].selfCheckDiagram);
      }
    }

    function closeModule() {
      document.getElementById("modulePanel").classList.add("hidden");
      document.getElementById("modulePanel").innerHTML = "";
      activeModuleIndex = null;
      focusNextStudentModule();
    }

    // Bring the learning path back into view when a module panel closes, so the
    // user does not have to scroll up. Targets the next unlocked, not-yet-completed
    // module (the natural next step) and briefly highlights it.
    function focusNextStudentModule() {
      let targetIndex = -1;
      for (let i = 0; i < modules.length; i++) {
        if (isModuleUnlocked(i) && !isModuleCompleted(modules[i].id)) {
          targetIndex = i;
          break;
        }
      }

      let target = targetIndex >= 0
        ? document.getElementById("studentModuleCard-" + targetIndex)
        : null;
      if (!target) target = document.getElementById("moduleCards");
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "center" });

      if (targetIndex >= 0 && target.classList) {
        target.classList.add("module-card-highlight");
        setTimeout(() => target.classList.remove("module-card-highlight"), 2200);
      }
    }

    function renderFinalReflection() {
      if (progress.completedModules.length < modules.length) return;

      closeModule();

      const panel = document.getElementById("certificatePanel");

      const dashboardNameInput = document.getElementById("studentNameDashboardInput");
      if (dashboardNameInput && dashboardNameInput.value.trim() && !progress.studentName) {
        progress.studentName = dashboardNameInput.value.trim();
        saveProgress();
      }

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <h2>Final Reflection</h2>
        <p>Answer in your own words. Minimum: ${MIN_REFLECTION_WORDS} words.</p>

        <label for="studentName"><strong>Name for Certificate</strong></label>
        <input id="studentName" type="text" value="${escapeHtml(progress.studentName || "")}" placeholder="Type your name" oninput="saveName()" />

        <label for="reflection"><strong>Reflection</strong></label>
        <p class="small-note">What is one helpful use of AI, one risk, and one habit you should use before trusting AI?</p>
        <textarea id="reflection" oninput="updateReflection()" placeholder="Type your reflection here...">${escapeHtml(progress.reflection || "")}</textarea>

        <div id="wordCount" class="word-count">0 words</div>

        <label for="ecoReflection"><strong>Eco-awareness reflection</strong></label>
        <p class="small-note">Write 1–3 sentences about one lower-impact AI habit and one question you should ask about green or eco-friendly AI claims.</p>
        <textarea id="ecoReflection" oninput="updateEcoFinalReflection()" placeholder="Example: I can use focused text prompts instead of generating extra images or videos. If a company says its AI is green, I should ask what was measured, what was left out, and who verified the claim.">${escapeHtml(progress.ecoReflection || "")}</textarea>

        <div id="ecoWordCount" class="word-count">0 words / 10 required</div>

        <div class="button-row no-print">
          <button type="button" onclick="generateCertificateIfReady()">Generate Certificate</button>
          <button type="button" class="secondary-btn" onclick="printCertificate()">Print Certificate</button>
          <button type="button" class="secondary-btn" onclick="downloadCertificate()">Download Certificate</button>
        </div>

        <div id="certificateArea"></div>
      `;

      updateReflection();
      updateEcoFinalReflection();

      if (progress.certificateCode) {
        renderCertificate();
      }

      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function saveName() {
      progress.studentName = document.getElementById("studentName").value.trim();
      saveProgress();
    }

    function updateReflection() {
      const reflection = document.getElementById("reflection").value;

      progress.reflection = reflection;
      saveProgress();

      const count = countWords(reflection);
      const wordCount = document.getElementById("wordCount");

      wordCount.textContent = `${count} word${count === 1 ? "" : "s"} / ${MIN_REFLECTION_WORDS} required`;
      wordCount.style.color = count >= MIN_REFLECTION_WORDS ? "var(--success)" : "var(--muted)";
    }

    function updateEcoFinalReflection() {
      const ecoReflectionBox = document.getElementById("ecoReflection");
      if (!ecoReflectionBox) return;

      progress.ecoReflection = ecoReflectionBox.value;
      saveProgress();

      const count = countWords(progress.ecoReflection);
      const wordCount = document.getElementById("ecoWordCount");

      if (wordCount) {
        wordCount.textContent = `${count} word${count === 1 ? "" : "s"} / 10 required`;
        wordCount.style.color = count >= 10 ? "var(--success)" : "var(--muted)";
      }
    }

    function countWords(text) {
      return text.trim().split(/\s+/).filter(Boolean).length;
    }

    function generateCertificateIfReady() {
      saveName();
      updateReflection();
      updateEcoFinalReflection();

      if (!progress.studentName) {
        alert("Type your name before generating the certificate.");
        return;
      }

      if (countWords(progress.reflection) < MIN_REFLECTION_WORDS) {
        alert(`Reflection needs at least ${MIN_REFLECTION_WORDS} words.`);
        return;
      }

      if (countWords(progress.ecoReflection || "") < 10) {
        alert("Eco-awareness reflection needs at least 10 words.");
        return;
      }

      if (!progress.certificateCode) {
        progress.certificateCode = generateCertificateCode();
        saveProgress();
      }

      renderCertificate();
    }

    function generateCertificateCode() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "AILAB-";

      for (let i = 0; i < 8; i++) {
        if (i === 4) code += "-";
        code += chars[Math.floor(Math.random() * chars.length)];
      }

      return code;
    }


    function getFullSentenceExcerpt(text, maxWords = 45) {
      const clean = text.trim().replace(/\s+/g, " ");
      if (!clean) return "";

      const sentences = clean.match(/[^.!?]+[.!?]+/g);

      if (!sentences || sentences.length === 0) {
        return clean;
      }

      let excerpt = "";

      for (const sentence of sentences) {
        const candidate = (excerpt + " " + sentence.trim()).trim();
        const wordCount = candidate.split(/\s+/).filter(Boolean).length;

        if (wordCount <= maxWords || excerpt.length === 0) {
          excerpt = candidate;
        } else {
          break;
        }
      }

      return excerpt;
    }


    function renderCertificate() {
      const date = new Date().toLocaleString();
      const moduleScores = modules.map(module => ({
        title: module.title,
        score: progress.scores[module.id]
      }));

      const validScores = moduleScores
        .map(item => Number(item.score))
        .filter(score => !Number.isNaN(score));

      const averageScore = validScores.length
        ? Math.round(validScores.reduce((sum, score) => sum + score, 0) / validScores.length)
        : 0;

      const restoredCount = moduleScores.filter(item => item.score === "RESTORED").length;
      const scoreLines = `
        <div class="certificate-average">Status: Passed all required modules${restoredCount ? " · some modules restored by checkpoint" : ""}</div>
        <div class="certificate-module-grid">
          ${moduleScores.map(item => `
            <div class="certificate-module-row">
              <span class="certificate-module-title">${item.title}</span>
              <span class="certificate-module-score">Passed</span>
            </div>
          `).join("")}
        </div>
      `;
      const reflectionExcerpt = escapeHtml(getFullSentenceExcerpt(progress.reflection));
      const finalRecoveryCode = makeCheckpointCode(checkpointDefinitions.find(item => item.id === "FINAL"), progress.studentName);

      document.getElementById("certificateArea").innerHTML = `
        <div class="certificate">
          <div class="completion-badge shield-badge" aria-label="SAU 48 AI Learning Lab completion badge">
            <svg class="shield-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 5 L52 13 V29 C52 43 43 54 32 59 C21 54 12 43 12 29 V13 Z"></path>
              <path d="M23 32 L29 38 L42 24"></path>
            </svg>
          </div>
          <h2>Certificate of Completion</h2>
          <p>This certifies that</p>
          <h3>${escapeHtml(progress.studentName)}</h3>
          <p>completed the SAU 48 AI Learning Lab.</p>
          <p><strong>Date/Time:</strong> ${date}</p>
          <div class="certificate-code">${progress.certificateCode}</div>
          <p><strong>Recovery code:</strong> <span class="checkpoint-code">${finalRecoveryCode}</span></p>
          <p class="small-note">Use this code only with the printed student name to restore your own progress if the browser closes.</p>

          <div class="certificate-section">
            <div class="certificate-section-title">AI-Ready Graduate Skills Practiced</div>
            <ul class="certificate-skills">
              ${Object.keys(aiReadyStrands).map(id => `<li>✓ ${aiReadyStrands[id].full}</li>`).join("")}
            </ul>
          </div>

          <div class="certificate-section">
            <div class="certificate-section-title">Modules Completed</div>
            <div>${scoreLines}</div>
          </div>

          <div class="certificate-section">
            <div class="certificate-section-title">Reflection Excerpt</div>
            <p class="small-note">${reflectionExcerpt}</p>
          </div>

          <div class="certificate-section">
            <div class="certificate-section-title">Eco-Awareness Reflection</div>
            <p class="small-note">${escapeHtml(progress.ecoReflection || "")}</p>
          </div>

          
        </div>
      `;
    }


    function scorePrompt() {
      const prompt = document.getElementById("promptInput").value.trim();
      const output = document.getElementById("promptScoreOutput");

      if (!prompt) {
        output.classList.remove("hidden");
        output.innerHTML = '<div class="score-number">Prompt Quality: 0 / 6</div><p>Type a prompt first.</p>';
        return;
      }

      const lower = prompt.toLowerCase();
      let score = 0;
      const strengths = [];
      const suggestions = [];

      const hasTask = /(help|explain|create|give|organize|compare|revise|feedback|summarize|outline|question|check|suggest)/.test(lower);
      const hasAudience = /(grade|student|teacher|class|audience|middle school|elementary|high school|for a)/.test(lower);
      const hasFormat = /(list|table|outline|questions|steps|paragraph|bullet|rubric|checklist|chart)/.test(lower);
      const hasOwnership = /(do not write|don't write|using my ideas|my own|do not do|don't do|feedback|questions|not the final|without writing)/.test(lower);
      const hasContext = prompt.split(/\s+/).length >= 12;
      const hasVerification = /(source|verify|check|accurate|claim|evidence|reliable|questions to check|what should i check)/.test(lower);

      if (hasTask) {
        score++;
        strengths.push("Clear task: the prompt says what kind of help is needed.");
      } else {
        suggestions.push("Add a clear task, such as explain, organize, compare, revise, or give feedback.");
      }

      if (hasAudience) {
        score++;
        strengths.push("Audience/context: the prompt gives a grade level, class, or audience.");
      } else {
        suggestions.push("Add an audience or context, such as grade level, class, or purpose.");
      }

      if (hasFormat) {
        score++;
        strengths.push("Format: the prompt asks for a specific output format.");
      } else {
        suggestions.push("Ask for a format, such as a list, outline, questions, checklist, or table.");
      }

      if (hasOwnership) {
        score++;
        strengths.push("Learning ownership: the prompt keeps the student responsible for the thinking.");
      } else {
        suggestions.push("Add a boundary like “do not write the final answer for me” or “use my ideas only.”");
      }

      if (hasContext) {
        score++;
        strengths.push("Enough detail: the prompt gives more than a one-word command.");
      } else {
        suggestions.push("Add more detail about the assignment, topic, or what you already have.");
      }

      if (hasVerification) {
        score++;
        strengths.push("Checking habit: the prompt includes accuracy, evidence, or verification.");
      } else {
        suggestions.push("Add a checking step, such as “what evidence should I verify?” or “what claims should I check?”");
      }

      const rating = score >= 5 ? "Strong prompt" : score >= 3 ? "Developing prompt" : "Needs more detail";

      output.classList.remove("hidden");
      output.innerHTML = `
        <div class="score-number">Prompt Quality: ${score} / 6 — ${rating}</div>
        <p><strong>Strengths</strong></p>
        <ul class="checklist">
          ${strengths.length ? strengths.map(item => `<li>${item}</li>`).join("") : "<li>No major strengths detected yet.</li>"}
        </ul>
        <p><strong>Try adding</strong></p>
        <ul class="checklist">
          ${suggestions.length ? suggestions.map(item => `<li>${item}</li>`).join("") : "<li>This prompt is in strong shape. Review it for assignment directions before using.</li>"}
        </ul>
      `;
    }

    function clearPromptTool() {
      document.getElementById("promptInput").value = "";
      document.getElementById("promptScoreOutput").classList.add("hidden");
      document.getElementById("promptScoreOutput").innerHTML = "";
    }

    function generateDisclosure() {
      const tool = document.getElementById("aiToolName").value.trim() || "[AI tool name]";
      const link = document.getElementById("aiToolLink").value.trim() || "[tool link]";
      const purpose = document.getElementById("aiPurpose").value.trim() || "[specific use]";
      const prompts = document.getElementById("aiPrompts").value.trim() || "[prompt(s) used]";
      const outputUse = document.getElementById("aiOutputUse").value.trim() || "[how the output was used]";

      const statement = `AI Disclosure Statement:
I acknowledge the use of ${tool} (${link}) to ${purpose}. The prompts used include: "${prompts}" The output from these prompts was used to ${outputUse}.

Citation Reminder:
AI disclosure statements are not the same as formal citations. If my teacher requires MLA or APA citation, I should cite AI-generated content using the approved format my teacher provides.`;

      document.getElementById("disclosureOutput").value = statement;
      document.getElementById("copyStatus").classList.add("hidden");
    }

    function copyDisclosure() {
      const output = document.getElementById("disclosureOutput");

      if (!output.value.trim()) {
        generateDisclosure();
      }

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("copyStatus");
        status.textContent = "Copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("copyStatus");
        status.textContent = "Copied.";
        status.classList.remove("hidden");
      });
    }

    function clearDisclosureTool() {
      ["aiToolName", "aiToolLink", "aiPurpose", "aiPrompts", "aiOutputUse", "disclosureOutput"].forEach(id => {
        document.getElementById(id).value = "";
      });
      document.getElementById("copyStatus").classList.add("hidden");
    }



    function toggleFlashcard(card) {
      card.classList.toggle("flipped");
    }



