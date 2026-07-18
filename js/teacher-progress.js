    const TEACHER_STORAGE_KEY = "aiLearningLabTeacherProgress_v5_6checkpoints";

    let teacherProgress = loadTeacherProgress();
    let activeTeacherModuleIndex = null;
    let currentTeacherActivityIndex = 0;
    let teacherActivityCorrect = 0;
    let teacherQuizSelections = {};

    function loadTeacherProgress() {
      const saved = sessionStorage.getItem(TEACHER_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
      return {
        completedModules: [],
        scores: {},
        teacherName: ""
      };
    }

    function saveTeacherProgress() {
      sessionStorage.setItem(TEACHER_STORAGE_KEY, JSON.stringify(teacherProgress));
    }

    function isTeacherModuleCompleted(moduleId) {
      return teacherProgress.completedModules.includes(moduleId);
    }

    function isTeacherModuleUnlocked(index) {
      if (teacherPreviewMode) return true;
      return index === 0 || isTeacherModuleCompleted(teacherModules[index - 1].id);
    }


    const teacherCheckpointDefinitions = [
      { id: "T1", title: "Checkpoint 1", moduleCount: 3, codePart: "A4K8", label: "Prerequisites" },
      { id: "T2", title: "Checkpoint 2", moduleCount: 6, codePart: "C9M2", label: "Teacher Modules 1–3" },
      { id: "T3", title: "Checkpoint 3", moduleCount: 9, codePart: "H5R7", label: "Teacher Modules 4–6" },
      { id: "T4", title: "Checkpoint 4", moduleCount: 12, codePart: "P6D3", label: "Teacher Modules 7–9" },
      { id: "T5", title: "Checkpoint 5", moduleCount: 15, codePart: "L2V6", label: "Teacher Modules 10–12" },
      { id: "T6", title: "Checkpoint 6", moduleCount: 18, codePart: "B7L2", label: "Teacher Modules 13–15" }
    ];

    function getTeacherCheckpointModuleCount(checkpoint) {
      return Math.min(checkpoint.moduleCount, teacherModules.length);
    }

    function normalizeTeacherCertificateName(name) {
      return String(name || "")
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();
    }

    function makeTeacherNameCheckpointToken(name, checkpoint) {
      const normalizedName = normalizeTeacherCertificateName(name);
      const seed = `${normalizedName}|${checkpoint.id}|${checkpoint.codePart}`;
      let hash = 0;

      for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash + seed.charCodeAt(i)) >>> 0;
      }

      return hash.toString(36).toUpperCase().padStart(4, "0").slice(-4);
    }

    function makeTeacherCheckpointCode(checkpoint, name = teacherProgress.teacherName) {
      const token = makeTeacherNameCheckpointToken(name, checkpoint);
      return `AI-LAB-${checkpoint.id}-${checkpoint.codePart}-${token}`;
    }

    function getTeacherCheckpointByCode(rawCode, name) {
      const normalized = String(rawCode || "").trim().toUpperCase().replace(/\s+/g, "");
      const normalizedName = normalizeTeacherCertificateName(name);

      if (!normalizedName) return null;

      return teacherCheckpointDefinitions.find(checkpoint => normalized === makeTeacherCheckpointCode(checkpoint, normalizedName));
    }

    function renderTeacherCheckpointTools() {
      const mount = document.getElementById("teacherCheckpointButtons");
      if (!mount) return;

      const completed = teacherProgress.completedModules.length;
      const visibleCheckpoints = teacherCheckpointDefinitions;

      mount.innerHTML = visibleCheckpoints.map(checkpoint => {
        const needed = getTeacherCheckpointModuleCount(checkpoint);
        const earned = completed >= needed;

        return `
          <div class="checkpoint-action ${earned ? "" : "locked"}">
            <strong>${checkpoint.title}</strong>
            <p>${checkpoint.label}</p>
            <button type="button" ${earned ? "" : "disabled"} onclick="renderTeacherCheckpointCertificate('${checkpoint.id}')">
              ${earned ? "Print Checkpoint" : `Locked: ${completed}/${needed}`}
            </button>
          </div>
        `;
      }).join("");
    }

    function restoreTeacherFromCheckpointCode() {
      const nameInput = document.getElementById("teacherRestoreNameInput");
      const codeInput = document.getElementById("teacherRestoreCodeInput");
      const feedback = document.getElementById("teacherRestoreFeedback");
      if (!nameInput || !codeInput || !feedback) return;

      const restoreName = normalizeTeacherCertificateName(nameInput.value);
      const checkpoint = getTeacherCheckpointByCode(codeInput.value, restoreName);

      if (!restoreName) {
        feedback.className = "restore-feedback bad";
        feedback.textContent = "Enter the teacher name exactly as printed on the checkpoint certificate.";
        return;
      }

      if (!checkpoint) {
        const enteredCode = String(codeInput.value || "").trim().toUpperCase();
        feedback.className = "restore-feedback bad";
        if (/^AI-LAB-P/.test(enteredCode)) {
          feedback.textContent = "This is a student checkpoint code. Use the Student Learning Path restore box instead.";
        } else {
          feedback.textContent = "Name and teacher checkpoint code do not match. Check both entries and try again.";
        }
        return;
      }

      const restoreCount = getTeacherCheckpointModuleCount(checkpoint);
      const modulesToRestore = teacherModules.slice(0, restoreCount);

      modulesToRestore.forEach(module => {
        if (!teacherProgress.completedModules.includes(module.id)) {
          teacherProgress.completedModules.push(module.id);
        }
        if (teacherProgress.scores[module.id] === undefined) {
          teacherProgress.scores[module.id] = "RESTORED";
        }
      });

      teacherProgress.teacherName = nameInput.value.trim();
      saveTeacherProgress();
      renderTeacherDashboard();

      feedback.className = "restore-feedback good";
      feedback.textContent = `Teacher progress restored through ${checkpoint.title} for ${teacherProgress.teacherName}.`;
    }

    function renderTeacherCheckpointCertificate(checkpointId) {
      const checkpoint = teacherCheckpointDefinitions.find(item => item.id === checkpointId);
      if (!checkpoint) return;

      const needed = getTeacherCheckpointModuleCount(checkpoint);
      if (teacherProgress.completedModules.length < needed && !teacherPreviewMode) return;

      const teacherNameInput = document.getElementById("teacherNameInput");
      if (teacherNameInput && teacherNameInput.value.trim()) {
        teacherProgress.teacherName = teacherNameInput.value.trim();
        saveTeacherProgress();
      }

      const existingName = teacherProgress.teacherName || "";
      const enteredName = window.prompt("Type the teacher name for this checkpoint certificate:", existingName);

      if (enteredName === null) return;

      const cleanName = enteredName.trim();
      if (!cleanName) {
        alert("A teacher name is required for a name-bound recovery code.");
        return;
      }

      teacherProgress.teacherName = cleanName;
      saveTeacherProgress();

      closeTeacherModule();

      const panel = document.getElementById("teacherCertificatePanel");
      const date = new Date().toLocaleString();
      const code = makeTeacherCheckpointCode(checkpoint, cleanName);
      const completedModules = teacherModules.slice(0, needed);

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <div class="checkpoint-certificate teacher-certificate">
          <div class="completion-badge shield-badge" aria-label="Teacher checkpoint completion badge">
            <svg class="shield-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 5 L52 13 V29 C52 43 43 54 32 59 C21 54 12 43 12 29 V13 Z"></path>
              <path d="M23 32 L29 38 L42 24"></path>
            </svg>
          </div>

          <h2>${checkpoint.title}</h2>
          <p><strong>AI Learning Lab</strong></p>
          <p>This checkpoint confirms completion of: <strong>${checkpoint.label}</strong>.</p>
          <p><strong>Status:</strong> Passed</p>
          <p>Teacher: <strong>${escapeHtml(cleanName)}</strong></p>
          <p><strong>Date/Time:</strong> ${date}</p>

          <div class="checkpoint-code">${code}</div>
          <p><strong>Recovery note:</strong> Use this code only with the printed teacher name to restore your own progress if the browser closes.</p>

          <div class="checkpoint-modules">
            ${completedModules.map((module, index) => `
              <div class="checkpoint-module-pill">${index + 1}. ${module.title}</div>
            `).join("")}
          </div>

          <div class="certificate-actions no-print">
            <button onclick="printCertificate()">Print Checkpoint</button>
            <button class="secondary-btn" onclick="downloadCertificate()">Download as Text</button>
            <button class="secondary-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">Back to Top</button>
          </div>
        </div>
      `;

      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }


    function renderTeacherDashboard() {
      const completed = teacherProgress.completedModules.length;
      const total = teacherModules.length;
      const percent = Math.round((completed / total) * 100);

      const text = document.getElementById("teacherProgressText");
      const pct = document.getElementById("teacherProgressPercent");
      const fill = document.getElementById("teacherProgressFill");

      if (text) text.textContent = `${completed} of ${total} modules complete`;
      if (pct) pct.textContent = `${percent}%`;
      if (fill) fill.style.width = `${percent}%`;

      renderTeacherCheckpointTools();

      const teacherNameInput = document.getElementById("teacherNameInput");
      if (teacherNameInput && teacherProgress.teacherName) {
        teacherNameInput.value = teacherProgress.teacherName;
      }

      const teacherLegendMount = document.getElementById("teacherAiReadyLegendMount");
      if (teacherLegendMount) teacherLegendMount.innerHTML = renderTeacherAiReadyLegend();

      renderTeacherModuleCards();
      renderTeacherCertificateIfReady();
    }

    function renderTeacherModuleCards() {
      const container = document.getElementById("teacherModuleCards");
      if (!container) return;

      container.innerHTML = "";

      teacherModules.forEach((module, index) => {
        const normallyUnlocked = index === 0 || isTeacherModuleCompleted(teacherModules[index - 1].id);
        const unlocked = isTeacherModuleUnlocked(index);
        const completed = isTeacherModuleCompleted(module.id);
        const previewOpen = teacherPreviewMode && !normallyUnlocked && !completed;
        const card = document.createElement("article");
        const teacherPrereqTimeEstimates = ["6–8 min", "6–8 min", "6–8 min"];
        const teacherCardTimeEstimate = teacherModuleTimeEstimates[module.id] || teacherPrereqTimeEstimates[index] || "";
        const teacherDisplayTitle = index < 3 ? module.title.replace(/^Prerequisite:\s*/i, "") : module.title;
        const teacherPrereqLabelHtml = index < 3 ? '<span class="teacher-prerequisite-label">PREREQUISITE</span>' : "";
        const teacherTimeHtml = teacherCardTimeEstimate ? '<span class="module-time-estimate" aria-label="Estimated time: ' + teacherCardTimeEstimate + '">' + teacherCardTimeEstimate + '</span>' : "";
        const teacherCardStrands = getTeacherModuleStrands(module.id);
        const teacherCardStrandHtml = teacherCardStrands.length ? `<div class="strand-badges">${renderStrandBadges(teacherCardStrands)}</div>` : "";

        card.className = "module-card";
        card.id = "teacherModuleCard-" + index;
        card.setAttribute("data-search", teacherModuleSearchText(module) + " " + teacherDisplayTitle);
        if (index < 3) card.classList.add("teacher-prerequisite-card");
        if (teacherCardTimeEstimate) card.classList.add("has-time-estimate");
        if (!unlocked) card.classList.add("locked");
        if (completed) card.classList.add("completed");
        if (previewOpen) card.classList.add("preview-card");

        const badgeClass = completed ? "done-badge" : previewOpen ? "" : unlocked ? "" : "locked-badge";
        const badgeText = completed ? "Complete" : previewOpen ? "Preview" : unlocked ? "Unlocked" : "Locked";
        const buttonText = completed ? "Review Module" : previewOpen ? "Preview Module" : unlocked ? "Begin Module" : "Locked";

        card.innerHTML = `
          ${teacherPrereqLabelHtml}
          ${teacherTimeHtml}
          <div>
            <span class="badge ${badgeClass}">${badgeText}</span>
            <h3>${index + 1}. ${teacherDisplayTitle}</h3>
            ${teacherCardStrandHtml}
            <p>${module.shortDescription}</p>
            ${completed ? `<p class="module-score">${teacherProgress.scores[module.id] === "RESTORED" ? "Restored by checkpoint" : `Score: ${teacherProgress.scores[module.id]}%`}</p>` : ""}
          </div>
          ${renderIdeasButton(module)}
          <button ${unlocked ? "" : "disabled"} onclick="openTeacherModule(${index})">${buttonText}</button>
        `;

        container.appendChild(card);
      });

      const teacherResources = [
        {
          id: "teacherTool",
          number: teacherModules.length + 1,
          title: "AI Directions Generator",
          description: "Generate brief student-facing and teacher-facing AI directions for an assignment.",
          content: teacherToolResourceHtml
        },
        {
          id: "teacherConferences",
          number: teacherModules.length + 2,
          title: "Critical Thinking Process Builder",
          description: "Generate routines that make students question, verify, revise, and reflect on AI output.",
          content: teacherDiscussionResourceHtml
        },
        {
          id: "teacherPromptBuilder",
          number: teacherModules.length + 3,
          title: "Teacher Prompt Builder",
          description: "Create teacher-facing prompts for planning, feedback, differentiation, assessment, and critical thinking.",
          content: teacherPromptBuilderResourceHtml
        },
        {
          id: "teacherFollowUpRoutine",
          number: teacherModules.length + 4,
          title: "AI Follow-Up Routine",
          description: "Guide teachers to refine AI output by naming what to keep and requesting one or two focused changes.",
          content: teacherFollowUpRoutineResourceHtml
        },
        {
          id: "teacherUnescoCompetencies",
          number: teacherModules.length + 5,
          title: "UNESCO-Informed K–12 Competencies",
          description: "Use a grade-band reference for AI basics, verification, ethics, impact, responsible use, and design.",
          content: teacherUnescoResourceHtml
        },
        {
          id: "teacherBigData",
          number: teacherModules.length + 6,
          title: "Big Data & Data Tracks",
          description: "Explore how everyday digital activities create data and privacy questions.",
          content: teacherBigDataResourceHtml
        },
  
        {
          id: "teacherLaunchKit",
          number: teacherModules.length + 7,
          title: "Classroom Launch Kit",
          description: "Launch AI expectations transparently, including readiness, verification, disclosure, feedback decisions, and human-centered use.",
          content: teacherLaunchKitResourceHtml
        },
        {
          id: "teacherGoogleTools",
          number: teacherModules.length + 8,
          title: "Gemini, NotebookLM, and Gems",
          description: "Start with Google tools: Gemini for general support, NotebookLM for source-grounded work, and Gems for reusable helpers.",
          content: teacherGoogleToolsResourceHtml
        },
        {
          id: "teacherAiDisclosure",
          number: teacherModules.length + 9,
          title: "Teacher AI Disclosure Note",
          description: "Generate a brief transparency sentence to paste on assignments or materials shaped with AI support.",
          content: teacherAiDisclosureResourceHtml
        }
      ];

      teacherResources.forEach(resource => {
        const isExpanded = expandedTeacherResource === resource.id;
        const card = document.createElement("article");
        card.className = `module-card resource-card ${isExpanded ? "expanded" : ""}`;
        // Index full content (tags stripped) so deep terms inside the resource
        // are searchable, not just the title/description.
        card.setAttribute("data-search", `${resource.title} ${resource.description} ${stripTags(resource.content)}`);

        card.innerHTML = `
          <div class="resource-card-header" onclick="toggleTeacherResourceCard('${resource.id}')">
            <div>
              <span class="badge">Resource</span>
              <h3>${resource.number}. ${resource.title}</h3>
              <p>${resource.description}</p>
            </div>
            <span class="resource-expand-indicator" aria-hidden="true">${isExpanded ? "–" : "+"}</span>
          </div>
          ${renderIdeasButton(resource.id)}
          ${isExpanded ? `<div class="resource-content">${resource.content}</div>` : ""}
        `;

        container.appendChild(card);
      });

      if (typeof applyTeacherModuleVisibility === "function") {
        applyTeacherModuleVisibility();
      }
    }

    function openTeacherModule(index) {
      if (!isTeacherModuleUnlocked(index)) return;

      activeTeacherModuleIndex = index;
      currentTeacherActivityIndex = 0;
      teacherActivityCorrect = 0;
      teacherQuizSelections = {};
      teacherPrerequisiteGridSelections = {};
      teacherPrerequisiteScenarioPage = 0;

      renderActiveTeacherModule();
    }

    function renderActiveTeacherModule() {
      const module = teacherModules[activeTeacherModuleIndex];
      const panel = document.getElementById("teacherModulePanel");

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <button class="secondary-btn" onclick="closeTeacherModule()">Back to Teacher Learning Path</button>
        <h2>${module.title}</h2>
        <p>${renderLessonText(module.lesson)}</p>
        ${module.extraHtml || ""}
        ${renderTeacherPracticeBox(module.id)}
        <div id="teacherActivityArea"></div>
        <div id="teacherQuizArea" class="hidden"></div>
      `;

      if (teacherPracticeModules[module.id]) {
        document.getElementById("teacherQuizArea").classList.add("hidden");
        renderPracticeCompletionModule(module.id, true);
      } else if (module.id === "teacher-eco-awareness-badge") {
        document.getElementById("teacherQuizArea").classList.add("hidden");
        renderEcoAwarenessTool(true);
      } else {
        renderTeacherActivity();
      }
      if (module.id === "teacher-how-ai-generates-responses" || module.id === "how-ai-generates-responses") {
        renderAiCategoryTool();
      }
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function renderTeacherPrerequisiteScenarioGrid(page = teacherPrerequisiteScenarioPage) {
      const module = teacherModules[activeTeacherModuleIndex];
      const area = document.getElementById("teacherActivityArea");
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);
      teacherPrerequisiteScenarioPage = Math.min(Math.max(page, 0), totalPages - 1);
      const startIndex = teacherPrerequisiteScenarioPage * pageSize;
      const visibleItems = module.items.slice(startIndex, startIndex + pageSize);

      if (teacherPrerequisiteScenarioPage === 0 && !Object.keys(teacherPrerequisiteGridSelections).length) {
        teacherActivityCorrect = 0;
      }

      area.classList.remove("hidden");
      area.innerHTML = `
        <h3>Choose Your Response</h3>
        <div class="activity-card activity-choose">
          <div class="prereq-pager-top">
            <span class="prereq-page-chip">Scenario ${teacherPrerequisiteScenarioPage + 1} of ${totalPages}</span>
            <p class="prereq-pager-note">Choose one answer. The next scenario unlocks after a short pause.</p>
          </div>

          <div class="prereq-scenario-grid">
            ${visibleItems.map((item, localIndex) => {
              const index = startIndex + localIndex;
              const saved = teacherPrerequisiteGridSelections[index];
              const cardState = saved ? (saved.correct ? "answered-correct" : "answered-incorrect") : "";
              return `
                <div class="prereq-scenario-card ${cardState}" id="teacherPrereqScenario${index}">
<p class="prereq-scenario-text">${escapeHtml(item.text)}</p>
                  <div class="prereq-choice-grid">
                    ${getBalancedOptionOrder((item.options || getActivityLabels(module.activityType)), item.answer, module.id, index).map((label, optionIndex) => {
                      const isCorrect = saved && normalizeAnswerText(label) === normalizeAnswerText(item.answer);
                      const isWrong = saved && normalizeAnswerText(label) === normalizeAnswerText(saved.choice) && !saved.correct;
                      return `
                        <button id="teacherPrereqScenario${index}Option${optionIndex}"
                          onclick='answerTeacherPrerequisiteScenario(${index}, ${JSON.stringify(label)})'
                          ${saved ? "disabled" : ""}
                          class="${isCorrect ? "correct-choice" : ""} ${isWrong ? "wrong-choice" : ""}">
                          ${label}
                        </button>
                      `;
                    }).join("")}
                  </div>
                  <div id="teacherPrereqScenario${index}Feedback" class="prereq-grid-feedback ${saved ? (saved.correct ? "correct" : "incorrect") : "hidden"}">${saved ? (saved.correct ? item.feedback : `Best answer: ${item.answer}. ${item.feedback}`) : ""}</div>
                </div>
              `;
            }).join("")}
          </div>

          <div id="teacherPrereqGridStatus" class="prereq-grid-status">Choose an answer to continue.</div>
          <div class="button-row">
            <button id="teacherPrereqGridNextButton" onclick="advanceTeacherPrerequisiteScenarioPage()" disabled>Next Scenario</button>
          </div>
        </div>
      `;

      updateTeacherPrerequisiteGridStatus();
    }

    function answerTeacherPrerequisiteScenario(index, choice) {
      const module = teacherModules[activeTeacherModuleIndex];
      const item = module.items[index];
      const card = document.getElementById(`teacherPrereqScenario${index}`);
      const feedback = document.getElementById(`teacherPrereqScenario${index}Feedback`);
      const options = item.options || getActivityLabels(module.activityType);

      if (teacherPrerequisiteGridSelections[index]) return;

      teacherPrerequisiteGridSelections[index] = {
        choice,
        correct: normalizeAnswerText(choice) === normalizeAnswerText(item.answer)
      };

      options.forEach((label, optionIndex) => {
        const button = document.getElementById(`teacherPrereqScenario${index}Option${optionIndex}`);
        if (!button) return;
        button.disabled = true;

        if (normalizeAnswerText(label) === normalizeAnswerText(item.answer)) {
          button.classList.add("correct-choice");
        } else if (normalizeAnswerText(label) === normalizeAnswerText(choice)) {
          button.classList.add("wrong-choice");
        }
      });

      feedback.classList.remove("hidden");

      if (teacherPrerequisiteGridSelections[index].correct) {
        card.classList.add("answered-correct");
        feedback.className = "prereq-grid-feedback correct";
        feedback.textContent = item.feedback;
      } else {
        card.classList.add("answered-incorrect");
        feedback.className = "prereq-grid-feedback incorrect";
        feedback.textContent = `Best answer: ${item.answer}. ${item.feedback}`;
      }

      updateTeacherPrerequisiteGridStatus();
    }

    function updateTeacherPrerequisiteGridStatus() {
      const module = teacherModules[activeTeacherModuleIndex];
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);
      const startIndex = teacherPrerequisiteScenarioPage * pageSize;
      const endIndex = Math.min(startIndex + pageSize, module.items.length);
      const visibleCount = endIndex - startIndex;
      const answeredOnPage = Array.from({ length: visibleCount }, (_, localIndex) => startIndex + localIndex)
        .filter(index => teacherPrerequisiteGridSelections[index]).length;
      const totalAnswered = Object.keys(teacherPrerequisiteGridSelections).length;
      const correct = Object.values(teacherPrerequisiteGridSelections).filter(result => result.correct).length;
      const status = document.getElementById("teacherPrereqGridStatus");
      const nextButton = document.getElementById("teacherPrereqGridNextButton");

      teacherActivityCorrect = correct;

      if (!status || !nextButton) return;

      if (answeredOnPage === visibleCount) {
        const isLastPage = teacherPrerequisiteScenarioPage === totalPages - 1;
        status.classList.add("ready");
        status.textContent = isLastPage
          ? `All scenarios are complete. Continue to the visual self-check.`
          : `Scenario complete. The next one unlocks in 2 seconds.`;

        nextButton.disabled = true;
        nextButton.textContent = isLastPage ? "Continue to Self-Check" : "Next Scenario";
        setTimeout(() => {
          const liveButton = document.getElementById("teacherPrereqGridNextButton");
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

    function advanceTeacherPrerequisiteScenarioPage() {
      const module = teacherModules[activeTeacherModuleIndex];
      const pageSize = 1;
      const totalPages = Math.ceil(module.items.length / pageSize);

      if (teacherPrerequisiteScenarioPage < totalPages - 1) {
        teacherPrerequisiteScenarioPage++;
        renderTeacherPrerequisiteScenarioGrid(teacherPrerequisiteScenarioPage);
      } else {
        renderTeacherQuiz();
      }
    }

    function renderTeacherActivity() {
      const module = teacherModules[activeTeacherModuleIndex];
      if (module.selfCheckDiagram) {
        renderTeacherPrerequisiteScenarioGrid();
        return;
      }
      const item = module.items[currentTeacherActivityIndex];
      const labels = item.options;
      const area = document.getElementById("teacherActivityArea");
      const mode = getActivityMode(module.activityType);
      const balancedLabels = module.activityType === "promptChoice"
        ? labels
        : getBalancedOptionOrder(labels, item.answer, module.id, currentTeacherActivityIndex);
      const buttonHtml = balancedLabels.map(label => `<button onclick='answerTeacherActivity(${JSON.stringify(label)})'>${label}</button>`).join("");

      area.classList.remove("hidden");

      let cardInner = `
        <div class="activity-mode-label">${mode.label}</div>
        <p class="activity-direction">${mode.direction}</p>
        <p><strong>${escapeHtml(item.text)}</strong></p>
        <div class="choice-row">
          ${buttonHtml}
        </div>
        <div id="teacherActivityFeedback" class="feedback hidden"></div>
      `;

      if (mode.className === "activity-choose") {
        const teacherChoiceGridClass = labels.length === 4 ? "choice-row compact-choice-grid teacher-choice-grid four-choice-grid" : "choice-row compact-choice-grid teacher-choice-grid";
        cardInner = `
          <div class="teacher-choice-shell">
            <div class="teacher-choice-header">
              <div>
                <div class="activity-mode-label">${mode.label}</div>
                <p class="activity-direction">${mode.direction}</p>
              </div>
              <div class="activity-step-chip"><strong>${mode.cardLabel}</strong><span>${currentTeacherActivityIndex + 1} of ${module.items.length}</span></div>
            </div>

            <div class="teacher-situation-answer-card">
              <p class="activity-question-text"><strong>${escapeHtml(item.text)}</strong></p>

              <div class="teacher-answer-divider"></div>

              <div class="${teacherChoiceGridClass}">
                ${buttonHtml}
              </div>
            </div>
          </div>
          <div id="teacherActivityFeedback" class="feedback hidden"></div>
        `;
      }

      area.innerHTML = `
        <h3>${mode.title}</h3>
        <div class="activity-card ${mode.className}">
          ${cardInner}
        </div>
      `;
    }

    function answerTeacherActivity(choice) {
      const module = teacherModules[activeTeacherModuleIndex];
      const item = module.items[currentTeacherActivityIndex];
      const feedback = document.getElementById("teacherActivityFeedback");

      document.querySelectorAll("#teacherActivityArea button").forEach(button => {
        button.disabled = true;
      });

      feedback.classList.remove("hidden");

      if (normalizeAnswerText(choice) === normalizeAnswerText(item.answer)) {
        teacherActivityCorrect++;
        feedback.className = "feedback correct";
        feedback.textContent = item.feedback;
      } else {
        feedback.className = "feedback incorrect";
        feedback.textContent = `Not quite. Best answer: ${item.answer}. ${item.feedback}`;
      }

      const nextButton = document.createElement("button");
      nextButton.style.marginTop = "1rem";

      const nextLabel = currentTeacherActivityIndex < module.items.length - 1 ? `Next ${getActivityMode(module.activityType).cardLabel}` : "Go to Quiz";
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

        if (currentTeacherActivityIndex < module.items.length - 1) {
          currentTeacherActivityIndex++;
          renderTeacherActivity();
        } else {
          renderTeacherQuiz();
        }
      };

      feedback.appendChild(document.createElement("br"));
      feedback.appendChild(nextButton);
    }

    function renderTeacherQuiz() {
      document.getElementById("teacherActivityArea").classList.add("hidden");

      const module = teacherModules[activeTeacherModuleIndex];
      const quizArea = document.getElementById("teacherQuizArea");

      teacherQuizSelections = {};
      quizArea.classList.remove("hidden");

      if (module.selfCheckDiagram) {
        const diagram = module.selfCheckDiagram;
        quizArea.innerHTML = `
          <h3>Self-Check</h3>
          <p>Instead of a separate quiz, use the prerequisite diagram cards above. Each card turns green after you click it once.</p>
          <div id="${diagram}SelfCheckStatus" class="diagram-selfcheck"></div>
          <div class="button-row">
            <button id="${diagram}SelfCheckButton" onclick="completeTeacherFoundationSelfCheck()" disabled>Complete Teacher Module</button>
            <button class="secondary-btn" onclick="retryTeacherModuleActivity()">Review Activity Again</button>
          </div>
          <div id="teacherQuizFeedback" class="feedback hidden"></div>
        `;
        updateFoundationSelfCheck(diagram);
        return;
      }

      quizArea.innerHTML = `
        <h3>Quick Check</h3>
        <p>Answer every question correctly and earn at least 85% overall to unlock the next teacher module.</p>
        ${module.quiz.map((q, qIndex) => `
          <div class="quiz-question">
            <p><strong>${qIndex + 1}. ${q.question}</strong></p>
            ${getBalancedQuizOptions(q, module.id, qIndex).map(option => `
              <button class="quiz-option" id="tq${qIndex}o${option.originalIndex}" onclick="selectTeacherQuizOption(${qIndex}, ${option.originalIndex})">${option.text}</button>
            `).join("")}
          </div>
        `).join("")}
        <div class="button-row">
          <button onclick="submitTeacherQuiz()">Submit Quick Check</button>
          <button class="secondary-btn" onclick="retryTeacherModuleActivity()">Review Activity Again</button>
        </div>
        <div id="teacherQuizFeedback" class="feedback hidden"></div>
      `;
    }


    function completeTeacherFoundationSelfCheck() {
      const module = teacherModules[activeTeacherModuleIndex];
      const diagram = module.selfCheckDiagram;
      const feedback = document.getElementById("teacherQuizFeedback");
      const required = foundationRequiredKeys[diagram] || [];
      const visited = (foundationVisitProgress[diagram] || []).filter(key => required.includes(key));

      feedback.classList.remove("hidden");

      if (visited.length < required.length) {
        feedback.className = "feedback incorrect";
        feedback.textContent = `You still need to visit ${required.length - visited.length} more prerequisite card${required.length - visited.length === 1 ? "" : "s"}.`;
        return;
      }

      const activityPercent = module.items.length ? (teacherActivityCorrect / module.items.length) : 1;
      const totalPercent = Math.round(((activityPercent + 1) / 2) * 100);

      if (totalPercent >= PASSING_SCORE) {
        completeTeacherModule(module.id, totalPercent);
        feedback.className = "feedback correct";
        feedback.innerHTML = `Teacher module complete. Score: ${totalPercent}%.`;
      } else {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `Your score is ${totalPercent}%. You need at least ${PASSING_SCORE}% overall to unlock the next module. Review the activity and try again.`;
      }
    }

    function selectTeacherQuizOption(questionIndex, optionIndex) {
      teacherQuizSelections[questionIndex] = optionIndex;

      const optionButtons = document.querySelectorAll(`[id^="tq${questionIndex}o"]`);

      optionButtons.forEach(button => {
        button.classList.remove("selected");
        button.style.backgroundColor = "#eef2ff";
        button.style.color = "#111827";
        button.style.borderColor = "#c7d2fe";
        button.style.outline = "none";
        button.style.outlineOffset = "0";
      });

      const selectedButton = document.getElementById(`tq${questionIndex}o${optionIndex}`);
      if (!selectedButton) return;
      selectedButton.classList.add("selected");
      selectedButton.style.backgroundColor = "#1e1b4b";
      selectedButton.style.color = "#ffffff";
      selectedButton.style.borderColor = "#facc15";
      selectedButton.style.outline = "4px solid #facc15";
      selectedButton.style.outlineOffset = "2px";
    }

    function submitTeacherQuiz() {
      const module = teacherModules[activeTeacherModuleIndex];
      const feedback = document.getElementById("teacherQuizFeedback");

      feedback.classList.remove("hidden");

      if (Object.keys(teacherQuizSelections).length < module.quiz.length) {
        feedback.className = "feedback incorrect";
        feedback.textContent = "Answer every question before submitting.";
        return;
      }

      let correctQuiz = 0;

      module.quiz.forEach((q, qIndex) => {
        const selected = teacherQuizSelections[qIndex];
        const selectedButton = document.getElementById(`tq${qIndex}o${selected}`);
        const correctIndex = typeof q.answer === "number"
          ? q.answer
          : q.options.findIndex(option => normalizeAnswerText(option) === normalizeAnswerText(q.answer));
        const correctButton = document.getElementById(`tq${qIndex}o${correctIndex}`);

        if (selected === correctIndex) {
          correctQuiz++;
          selectedButton.classList.add("correct-answer");
        } else {
          if (selectedButton) selectedButton.classList.add("wrong-answer");
          if (correctButton) correctButton.classList.add("correct-answer");
        }
      });

      const activityPercent = teacherActivityCorrect / module.items.length;
      const quizPercent = correctQuiz / module.quiz.length;
      const totalPercent = Math.round(((activityPercent + quizPercent) / 2) * 100);

      if (correctQuiz === module.quiz.length && totalPercent >= PASSING_SCORE) {
        completeTeacherModule(module.id, totalPercent);
        feedback.className = "feedback correct";
        feedback.innerHTML = `Teacher module complete. Score: ${totalPercent}%.`;
      } else if (correctQuiz === module.quiz.length && totalPercent < PASSING_SCORE) {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `Your score is ${totalPercent}%. You need at least ${PASSING_SCORE}% to unlock the next teacher module. Review the activity and try again.`;

        const retryButton = document.createElement("button");
        retryButton.textContent = "Retry Module";
        retryButton.style.marginTop = "1rem";
        retryButton.onclick = retryTeacherModuleActivity;
        feedback.appendChild(document.createElement("br"));
        feedback.appendChild(retryButton);
      } else {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `You got ${correctQuiz} of ${module.quiz.length} correct. You need all quiz questions correct and at least ${PASSING_SCORE}% overall to unlock the next teacher module.`;

        const retryButton = document.createElement("button");
        retryButton.textContent = "Retry Quick Check";
        retryButton.style.marginTop = "1rem";
        retryButton.onclick = renderTeacherQuiz;
        feedback.appendChild(document.createElement("br"));
        feedback.appendChild(retryButton);
      }
    }

    function completeTeacherModule(moduleId, score) {
      if (teacherPreviewMode) {
        const feedback = document.getElementById("teacherQuizFeedback");
        feedback.className = "feedback correct";
        feedback.innerHTML = `Teacher preview complete. Score: ${score}%. Progress was not saved because Preview Mode is on.`;

        const buttonRow = document.createElement("div");
        buttonRow.className = "button-row";

        const pathButton = document.createElement("button");
        pathButton.className = "secondary-btn";
        pathButton.textContent = "Return to Teacher Learning Path";
        pathButton.onclick = closeTeacherModule;
        buttonRow.appendChild(pathButton);

        feedback.appendChild(buttonRow);
        renderTeacherDashboard();
        return;
      }

      if (!teacherProgress.completedModules.includes(moduleId)) {
        teacherProgress.completedModules.push(moduleId);
      }

      teacherProgress.scores[moduleId] = score;
      saveTeacherProgress();
      renderTeacherDashboard();

      const nextIndex = activeTeacherModuleIndex + 1;
      const feedback = document.getElementById("teacherQuizFeedback");
      const buttonRow = document.createElement("div");

      buttonRow.className = "button-row";

      if (nextIndex < teacherModules.length) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "Continue to Next Teacher Module";
        nextButton.onclick = () => openTeacherModule(nextIndex);
        buttonRow.appendChild(nextButton);
      } else {
        const doneButton = document.createElement("button");
        doneButton.textContent = "View Teacher Certificate";
        doneButton.onclick = () => {
          closeTeacherModule();
          renderTeacherDashboard();
          renderTeacherCertificateIfReady();
        };
        buttonRow.appendChild(doneButton);
      }

      feedback.appendChild(buttonRow);
    }

    function retryTeacherModuleActivity() {
      currentTeacherActivityIndex = 0;
      teacherActivityCorrect = 0;
      teacherQuizSelections = {};

      document.getElementById("teacherQuizArea").classList.add("hidden");
      renderTeacherActivity();
      if (teacherModules[activeTeacherModuleIndex] && teacherModules[activeTeacherModuleIndex].selfCheckDiagram) {
        updateFoundationSelfCheck(teacherModules[activeTeacherModuleIndex].selfCheckDiagram);
      }
    }

    function closeTeacherModule() {
      const panel = document.getElementById("teacherModulePanel");
      panel.classList.add("hidden");
      panel.innerHTML = "";
      activeTeacherModuleIndex = null;
      focusNextTeacherModule();
    }

    // Same as focusNextStudentModule, for the teacher learning path: return the
    // next unlocked, not-yet-completed module card into view so no scroll-up.
    function focusNextTeacherModule() {
      let targetIndex = -1;
      for (let i = 0; i < teacherModules.length; i++) {
        if (isTeacherModuleUnlocked(i) && !isTeacherModuleCompleted(teacherModules[i].id)) {
          targetIndex = i;
          break;
        }
      }

      let target = targetIndex >= 0
        ? document.getElementById("teacherModuleCard-" + targetIndex)
        : null;
      if (!target) target = document.getElementById("teacherModuleCards");
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "center" });

      if (targetIndex >= 0 && target.classList) {
        target.classList.add("module-card-highlight");
        setTimeout(() => target.classList.remove("module-card-highlight"), 2200);
      }
    }


    function saveTeacherName() {
      const input = document.getElementById("teacherNameInput");
      if (!input) return;

      teacherProgress.teacherName = input.value.trim();
      saveTeacherProgress();
    }

    function generateTeacherCompletionCode() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "SAU48-TEACHER-";

      for (let i = 0; i < 8; i++) {
        if (i === 4) code += "-";
        code += chars[Math.floor(Math.random() * chars.length)];
      }

      return code;
    }

    function renderTeacherCertificateIfReady() {
      const panel = document.getElementById("teacherCertificatePanel");
      if (!panel) return;

      const completed = teacherProgress.completedModules.length;
      const total = teacherModules.length;

      if (completed < total) {
        panel.classList.add("hidden");
        panel.innerHTML = "";
        return;
      }

      const teacherNameInput = document.getElementById("teacherNameInput");
      if (teacherNameInput) {
        teacherProgress.teacherName = teacherNameInput.value.trim();
        saveTeacherProgress();
      }

      const teacherName = escapeHtml(teacherProgress.teacherName || "Teacher");
      const completionCode = teacherProgress.teacherCompletionCode || generateTeacherCompletionCode();
      teacherProgress.teacherCompletionCode = completionCode;
      saveTeacherProgress();

      const moduleScores = teacherModules.map(module => ({
        title: module.title,
        score: teacherProgress.scores[module.id]
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

      const dateString = new Date().toLocaleString();

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <div class="certificate-actions no-print">
          <button type="button" onclick="printTeacherCertificate()">Print Teacher Certificate</button>
          <button type="button" class="secondary-btn" onclick="downloadTeacherCertificate()">Download Teacher Certificate</button>
        </div>

        <div class="certificate teacher-certificate">
          <div class="completion-badge shield-badge" aria-label="SAU 48 AI Learning Lab teacher completion badge">
            <svg class="shield-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 5 L52 13 V29 C52 43 43 54 32 59 C21 54 12 43 12 29 V13 Z"></path>
              <path d="M23 32 L29 38 L42 24"></path>
            </svg>
          </div>

          <h2>Teacher Certificate of Completion</h2>
          <p>This certifies that</p>
          <h3>${teacherName}</h3>
          <p>completed the <strong>SAU 48 AI Learning Lab: Teacher Path</strong>.</p>

          <p class="small-note">Date/Time: ${dateString}</p>
          <p class="certificate-code">${completionCode}</p>

          <div class="certificate-section">
            <div class="certificate-section-title">AI-Ready Graduate Skills Practiced</div>
            <ul class="certificate-skills">
              ${Object.keys(aiReadyStrands).map(id => `<li>✓ ${aiReadyStrands[id].full}</li>`).join("")}
            </ul>
          </div>

          <div class="certificate-section">
            <div class="certificate-section-title">Teacher Modules Completed</div>
            <div>${scoreLines}</div>
          </div>
        </div>
      `;

      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function printTeacherCertificate() {
      const certificate = document.querySelector(".teacher-certificate");
      if (!certificate) {
        alert("Generate the teacher certificate first.");
        return;
      }

      window.print();
    }

    function downloadTeacherCertificate() {
      const certificate = document.querySelector(".teacher-certificate");
      if (!certificate) {
        alert("Generate the teacher certificate first.");
        return;
      }

      const certificateHtml = certificate.outerHTML;
      const styles = Array.from(document.querySelectorAll("style"))
        .map(style => style.textContent)
        .join("\n");

      const fullHtml = [
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "<head>",
        "<meta charset=\"UTF-8\">",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<title>SAU 48 AI Learning Lab Teacher Certificate</title>",
        "<style>",
        styles,
        "body { background: #ffffff; padding: 2rem; }",
        ".certificate { display: block !important; }",
        "</style>",
        "</head>",
        "<body>",
        certificateHtml,
        "</body>",
        "</html>"
      ].join("\n");

      const blob = new Blob([fullHtml], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const safeName = (teacherProgress.teacherName || "teacher")
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase();

      link.href = url;
      link.download = "sau48_ai_learning_lab_teacher_certificate_" + safeName + ".html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }


    function resetTeacherProgress() {
      if (!confirm("Clear teacher progress for this browser session?")) return;

      sessionStorage.removeItem(TEACHER_STORAGE_KEY);
      teacherProgress = loadTeacherProgress();
      const certPanel = document.getElementById("teacherCertificatePanel");
      if (certPanel) {
        certPanel.classList.add("hidden");
        certPanel.innerHTML = "";
      }
      teacherPreviewMode = false;
      const toggle = document.getElementById("teacherPreviewToggle");
      if (toggle) toggle.checked = false;
      const banner = document.getElementById("teacherPreviewBanner");
      if (banner) banner.classList.add("hidden");

      closeTeacherModule();
      renderTeacherDashboard();
    }


