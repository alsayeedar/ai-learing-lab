    const STORAGE_KEY = "aiLearningLabSessionProgress_v5_sau48_statement";
    const MIN_REFLECTION_WORDS = 40;
    const NEXT_CARD_DELAY_SECONDS = 3;
    const PASSING_SCORE = 85;

    let progress = loadProgress();
    let activeModuleIndex = null;
    let currentActivityIndex = 0;
    let activityCorrect = 0;
    let quizSelections = {};
    let prerequisiteGridSelections = {};
    let prerequisiteScenarioPage = 0;
    let teacherPrerequisiteGridSelections = {};
    let teacherPrerequisiteScenarioPage = 0;
    let foundationVisitProgress = { wifi: [], internet: [], llm: [] };
    const foundationRequiredKeys = {
      wifi: ["device", "signal", "access", "local", "internet"],
      internet: ["send", "binary", "packets", "radio", "router", "fiber", "otherrouter", "datacenter", "assemble", "read"],
      llm: ["prompt", "travel", "server", "model", "tokens", "check"]
    };
    let foundationCooldownUntil = {};
    let foundationCooldownTimer = {};
    const FOUNDATION_CLICK_DELAY_MS = 1400;
    let previewMode = false;

    function loadProgress() {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }

      return {
        completedModules: [],
        scores: {},
        certificateCode: null,
        reflection: "",
        ecoReflection: "",
        studentName: ""
      };
    }

    function saveProgress() {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    function isModuleCompleted(moduleId) {
      return progress.completedModules.includes(moduleId);
    }

    function isModuleUnlocked(index) {
      if (previewMode) return true;
      return index === 0 || isModuleCompleted(modules[index - 1].id);
    }

    function togglePreviewMode() {
      const toggle = document.getElementById("previewToggle");
      const banner = document.getElementById("previewBanner");

      previewMode = toggle ? toggle.checked : false;

      if (banner) {
        banner.classList.toggle("hidden", !previewMode);
      }

      renderDashboard();
    renderTeacherDashboard();
    }


    const checkpointDefinitions = [
      { id: "P1", title: "Checkpoint 1", moduleCount: 3, codePart: "7KQ4", label: "Prerequisites" },
      { id: "P2", title: "Checkpoint 2", moduleCount: 6, codePart: "M8D2", label: "Student Modules 1–3" },
      { id: "P3", title: "Checkpoint 3", moduleCount: 9, codePart: "R5X9", label: "Student Modules 4–6" },
      { id: "P4", title: "Checkpoint 4", moduleCount: 12, codePart: "T3N6", label: "Student Modules 7–9" },
      { id: "P5", title: "Checkpoint 5", moduleCount: 15, codePart: "V4C8", label: "Student Modules 10–12" },
      { id: "P6", title: "Checkpoint 6", moduleCount: 18, codePart: "B7L2", label: "Student Modules 13–15" },
      { id: "FINAL", title: "Final Checkpoint", moduleCount: null, codePart: "9ZXT", label: "Full Lab" }
    ];

    function getCheckpointModuleCount(checkpoint) {
      return checkpoint.id === "FINAL" ? modules.length : Math.min(checkpoint.moduleCount, modules.length);
    }

    function normalizeCertificateName(name) {
      return String(name || "")
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();
    }

    function makeNameCheckpointToken(name, checkpoint) {
      const normalizedName = normalizeCertificateName(name);
      const seed = `${normalizedName}|${checkpoint.id}|${checkpoint.codePart}`;
      let hash = 0;

      for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash + seed.charCodeAt(i)) >>> 0;
      }

      return hash.toString(36).toUpperCase().padStart(4, "0").slice(-4);
    }

    function makeCheckpointCode(checkpoint, name = progress.studentName) {
      const token = makeNameCheckpointToken(name, checkpoint);
      return `AI-LAB-${checkpoint.id}-${checkpoint.codePart}-${token}`;
    }

    function getEarnedCheckpointCount() {
      return progress.completedModules.length;
    }

    function getCheckpointByCode(rawCode, name) {
      const normalized = String(rawCode || "").trim().toUpperCase().replace(/\s+/g, "");
      const normalizedName = normalizeCertificateName(name);

      if (!normalizedName) return null;

      return checkpointDefinitions.find(checkpoint => normalized === makeCheckpointCode(checkpoint, normalizedName));
    }

    function renderCheckpointTools() {
      const mount = document.getElementById("checkpointButtons");
      if (!mount) return;

      const completed = getEarnedCheckpointCount();

      const visibleCheckpoints = checkpointDefinitions.filter(checkpoint => checkpoint.id !== "FINAL");

      mount.innerHTML = visibleCheckpoints.map((checkpoint, index) => {
        const needed = getCheckpointModuleCount(checkpoint);
        const earned = completed >= needed;
        const rangeText = checkpoint.label;

        return `
          <div class="checkpoint-action ${earned ? "" : "locked"}">
            <strong>${checkpoint.title}</strong>
            <p>${rangeText}</p>
            <button type="button" ${earned ? "" : "disabled"} onclick="renderCheckpointCertificate('${checkpoint.id}')">
              ${earned ? "Print Checkpoint" : `Locked: ${completed}/${needed}`}
            </button>
          </div>
        `;
      }).join("");
    }

    function restoreFromCheckpointCode() {
      const nameInput = document.getElementById("restoreNameInput");
      const codeInput = document.getElementById("restoreCodeInput");
      const feedback = document.getElementById("restoreFeedback");
      if (!nameInput || !codeInput || !feedback) return;

      const restoreName = normalizeCertificateName(nameInput.value);
      const checkpoint = getCheckpointByCode(codeInput.value, restoreName);

      if (!restoreName) {
        feedback.className = "restore-feedback bad";
        feedback.textContent = "Enter the student name exactly as printed on the checkpoint certificate.";
        return;
      }

      if (!checkpoint) {
        const enteredCode = String(codeInput.value || "").trim().toUpperCase();
        feedback.className = "restore-feedback bad";
        if (/^AI-LAB-T/.test(enteredCode)) {
          feedback.textContent = "This is a teacher checkpoint code. Use the Teacher Learning Path restore box instead.";
        } else {
          feedback.textContent = "Name and student checkpoint code do not match. Check both entries and try again.";
        }
        return;
      }

      const restoreCount = getCheckpointModuleCount(checkpoint);
      const modulesToRestore = modules.slice(0, restoreCount);

      modulesToRestore.forEach(module => {
        if (!progress.completedModules.includes(module.id)) {
          progress.completedModules.push(module.id);
        }
        if (progress.scores[module.id] === undefined) {
          progress.scores[module.id] = "RESTORED";
        }
      });

      progress.studentName = nameInput.value.trim();
      saveProgress();
      renderDashboard();

      feedback.className = "restore-feedback good";
      feedback.textContent = `Progress restored through ${checkpoint.title} for ${progress.studentName}.`;
    }

    function renderCheckpointCertificate(checkpointId) {
      const checkpoint = checkpointDefinitions.find(item => item.id === checkpointId);
      if (!checkpoint) return;

      const needed = getCheckpointModuleCount(checkpoint);
      if (progress.completedModules.length < needed && !previewMode) return;

      const dashboardNameInput = document.getElementById("studentNameDashboardInput");
      if (dashboardNameInput && dashboardNameInput.value.trim()) {
        progress.studentName = dashboardNameInput.value.trim();
        saveProgress();
      }

      const existingName = progress.studentName || "";
      const enteredName = window.prompt("Type first name and last initial for this checkpoint certificate. Example: Maya R.", existingName);

      if (enteredName === null) return;

      const cleanName = enteredName.trim().replace(/\s+/g, " ");
      if (!isValidStudentCertificateName(cleanName)) {
        alert("Use first name and last initial only, such as Maya R.");
        return;
      }
      if (!cleanName) {
        alert("First name and last initial are required for a name-bound recovery code.");
        return;
      }

      progress.studentName = cleanName;
      saveProgress();

      closeModule();

      const panel = document.getElementById("certificatePanel");
      const date = new Date().toLocaleString();
      const code = makeCheckpointCode(checkpoint, cleanName);
      const completedModules = modules.slice(0, needed);

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <div class="checkpoint-certificate">
          <div class="completion-badge shield-badge" aria-label="Checkpoint completion badge">
            <svg class="shield-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 5 L52 13 V29 C52 43 43 54 32 59 C21 54 12 43 12 29 V13 Z"></path>
              <path d="M23 32 L29 38 L42 24"></path>
            </svg>
          </div>

          <h2>${checkpoint.title} Certificate</h2>
          <p><strong>AI Learning Lab</strong></p>
          <p>This checkpoint confirms completion of: <strong>${checkpoint.label}</strong>.</p>
          <p><strong>Status:</strong> Passed</p>
          <p>Student: <strong>${escapeHtml(cleanName)}</strong></p>
          <p><strong>Date/Time:</strong> ${date}</p>

          <div class="checkpoint-code">${code}</div>
          <p><strong>Recovery note:</strong> Use this code only with the printed student name to restore your own progress if the browser closes.</p>

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



    function isValidStudentCertificateName(name) {
      return /^[A-Za-z][A-Za-z' -]{0,24}\s+[A-Za-z]\.?$/.test(String(name || "").trim());
    }

    function validateStudentDashboardName() {
      const input = document.getElementById("studentNameDashboardInput");
      const feedback = document.getElementById("studentNameDashboardFeedback");
      if (!input || !feedback) return true;

      const value = input.value.trim();
      if (!value) {
        feedback.textContent = "Use first name and last initial only.";
        feedback.style.color = "var(--muted)";
        return false;
      }

      if (!isValidStudentCertificateName(value)) {
        feedback.textContent = "Use first name and last initial only, such as Maya R.";
        feedback.style.color = "var(--danger)";
        return false;
      }

      feedback.textContent = "Name format looks correct.";
      feedback.style.color = "var(--success)";
      return true;
    }

    function saveStudentDashboardName() {
      const input = document.getElementById("studentNameDashboardInput");
      if (!input) return;

      const clean = input.value.trim().replace(/\s+/g, " ");
      input.value = clean;

      if (!validateStudentDashboardName()) {
        studentProgress.studentName = "";
        saveProgress();
        return;
      }

      studentProgress.studentName = clean;
      saveProgress();
    }

    function syncStudentDashboardName() {
      const input = document.getElementById("studentNameDashboardInput");
      if (input && document.activeElement !== input) {
        input.value = progress.studentName || "";
      }
    }


    
    const moduleTimeEstimates = {
      "what-wifi-actually-does": "6–8 min",
      "how-data-travels-online": "8–10 min",
      "how-ai-generates-responses": "10–12 min",
      "student-ai-guidelines": "8–10 min",
      "sau48-ai-statement-integrity": "10–12 min",
      "what-counts-as-ai": "8–10 min",
      "ai-vocabulary-in-context": "10–12 min",
      "patterns-not-magic": "10–12 min",
      "can-you-trust-it": "12–15 min",
      "media-literacy": "12–15 min",
      "prompt-like-a-learner": "12–15 min",
      "responsible-school-use": "10–12 min",
      "when-is-ai-allowed": "10–12 min",
      "ai-disclosure-statements": "10–12 min",
      "eco-aware-ai-use": "15–20 min",
      "required-ai-vocabulary-review": "10–12 min",
      "required-ai-practice-tools": "12–15 min",
      "required-student-follow-up-routine": "10–12 min"
};

    const teacherModuleTimeEstimates = {
      "teacher-faculty-ai-guidelines": "6–8 min",
      "teacher-sau48-ai-stance": "6–8 min",
      "teacher-ai-use-levels": "6–8 min",
      "teacher-assignment-design": "8–10 min",
      "teacher-disclosure-citation": "6–8 min",
      "teacher-verification-feedback": "8–10 min",
      "teacher-implementation-plan": "8–10 min",
      "teacher-prompting-for-learning": "8–10 min",
      "teacher-student-conferencing": "6–8 min",
      "teacher-privacy-pii-context": "8–10 min",
      "teacher-equity-access": "8–10 min",
      "teacher-eco-awareness-badge": "10–12 min"
};

    function renderModuleTimeEstimate(moduleId, isTeacher = false) {
      const source = isTeacher ? teacherModuleTimeEstimates : moduleTimeEstimates;
      const estimate = source[moduleId];
      return estimate ? `<span class="module-time-estimate" aria-label="Estimated time: ${estimate}">${estimate}</span>` : "";
    }


    function openPrivacyModal() {
      const existing = document.getElementById("privacyModal");
      if (existing) existing.remove();

      const modal = document.createElement("div");
      modal.id = "privacyModal";
      modal.className = "lab-modal-backdrop";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-labelledby", "privacyModalTitle");
      modal.innerHTML = `
        <div class="lab-modal">
          <div class="lab-modal-header">
            <h2 id="privacyModalTitle">Privacy and Progress</h2>
            <button type="button" class="lab-modal-close" onclick="closePrivacyModal()" aria-label="Close privacy information">×</button>
          </div>

          <div class="lab-modal-content">
            <div class="lab-modal-card">
              <h3>Progress storage</h3>
              <p>Progress is saved in this browser session on this device. It is not submitted to a server by this page.</p>
            </div>

            <div class="lab-modal-grid">
              <div class="lab-modal-card">
                <h3>What is saved</h3>
                <p>Module completion, scores, checkpoint status, and the certificate name entered for recovery codes.</p>
              </div>

              <div class="lab-modal-card">
                <h3>What is not saved</h3>
                <p>This page does not save student work, typed reflections, prompt drafts, emails, student IDs, or classroom roster data.</p>
              </div>
            </div>

            <div class="lab-modal-card">
              <h3>Checkpoint codes</h3>
              <p>Checkpoint codes restore completion through a checkpoint if the browser session is lost. The typed name must match the name used on the certificate. Codes do not recover detailed answers.</p>
            </div>

            <div class="lab-modal-grid">
              <div class="lab-modal-card">
                <h3>Student name rule</h3>
                <p>Use first name and last initial only.</p>
                <p class="small-note"><strong>Use:</strong> Maya R. &nbsp; <strong>Do not use:</strong> full legal name, student ID, email, birthdate, or other private information.</p>
              </div>

              <div class="lab-modal-card">
                <h3>Privacy limit</h3>
                <p>This note describes this prototype only. It does not control external AI tools, browser extensions, school device systems, networks, or websites opened outside this page.</p>
              </div>
            </div>

            <div class="lab-modal-card">
              <h3>Classroom guidance</h3>
              <p>Students should not paste private information into AI tools. Teachers should avoid names, IEP details, grades, health information, discipline information, or family information in AI prompts.</p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }


    function closePrivacyModal() {
      const modal = document.getElementById("privacyModal");
      if (modal) modal.remove();
    }

function renderDashboard() {
      const completed = progress.completedModules.length;
      const total = modules.length;
      const percent = Math.round((completed / total) * 100);

      document.getElementById("progressText").textContent = `${completed} of ${total} modules complete`;
      document.getElementById("progressPercent").textContent = `${percent}%`;
      document.getElementById("progressFill").style.width = `${percent}%`;

      syncStudentDashboardName();

      const legendMount = document.getElementById("aiReadyLegendMount");
      if (legendMount) legendMount.innerHTML = renderAiReadyLegend();

      renderCheckpointTools();
      renderModuleCards();

      if (completed === total) {
        renderFinalReflection();
      }

      if (expandedResource === "studentBigData") {
        setTimeout(() => selectBigDataActivity(document.getElementById("bigDataActivity")?.value || "Streaming videos or music"), 0);
      }
    }







