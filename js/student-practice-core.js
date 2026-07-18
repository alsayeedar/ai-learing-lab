    const studentPracticeModules = {
      "prompt-like-a-learner": {
        title: "Prompt Practice",
        intro: "Instead of choosing an answer, improve a prompt so it supports learning without replacing your thinking.",
        fields: [
          ["Original prompt", "Paste or describe a weak prompt.", "Example: Write my whole paragraph for me."],
          ["Improved prompt", "Write a stronger prompt that asks for support, not a finished answer.", "Ask me planning questions before I write my paragraph."],
          ["Why it is better", "Explain what makes your version more responsible.", "It keeps the writing and final choices with me."]
        ]
      },
      "can-you-trust-it": {
        title: "Claim-Checking Practice",
        intro: "Practice slowing down before trusting AI output.",
        fields: [
          ["Claim to check", "Write one claim an AI answer might make.", "Example: AI says a specific animal lives in one region."],
          ["How you would check it", "Name a source, search step, or verification habit.", "I would check an encyclopedia or official source."],
          ["What you still would not know", "Identify what could still be uncertain.", "I would need to check if the source is current."]
        ]
      },
      "media-literacy": {
        title: "Media Evidence Practice",
        intro: "Practice looking for evidence before trusting or sharing media.",
        fields: [
          ["Media clue", "Describe one clue you would look for in an image, video, headline, or post.", "Look for the original source."],
          ["Reliability check", "Explain how you would check whether it is reliable.", "Compare it with another trusted source."],
          ["Next step", "Write what you would do before sharing or using it.", "I would wait until I confirmed the source."]
        ]
      },
      "when-is-ai-allowed": {
        title: "AI-Use Level Practice",
        intro: "Decide what level of AI help is appropriate before starting the task.",
        fields: [
          ["Task", "Describe the assignment or task.", "Write a paragraph, study for a quiz, revise a draft."],
          ["Allowed level", "Choose or describe the AI-use level that seems appropriate.", "Level 1 for brainstorming only."],
          ["Reason", "Explain why that level does or does not fit the teacher directions.", "It supports planning but does not write the final answer."]
        ]
      },
      "ai-disclosure-statements": {
        title: "Disclosure Practice",
        intro: "Practice explaining AI use clearly and specifically.",
        fields: [
          ["Tool and purpose", "Name the tool and what you used it for.", "I used ChatGPT to brainstorm three topic ideas."],
          ["Prompt or output note", "Summarize the prompt or the kind of output you received.", "I asked for planning questions, not a final paragraph."],
          ["Your role", "Explain what you did yourself.", "I chose the topic, wrote the paragraph, and checked the facts."]
        ]
      },
      "required-student-follow-up-routine": {
        title: "Follow-Up Routine Practice",
        intro: "Use Keep / Change / Check / Stop to write a follow-up prompt.",
        fields: [
          ["Keep", "What should AI keep from the first answer?", "Keep my main idea and examples."],
          ["Change", "What should AI help improve?", "Ask me questions about what is confusing."],
          ["Check or Stop", "What needs checking, or when should you stop using AI?", "Check facts and stop if it starts writing the final answer."]
        ]
      }
    };

    const teacherPracticeModules = {
      "teacher-ai-use-levels": {
        title: "AI-Use Decision Practice",
        intro: "Use this module to draft a classroom decision, not just answer a scenario.",
        fields: [
          ["Learning goal", "What should students learn or practice?", "Students should revise their own explanation."],
          ["AI-use boundary", "What level of AI use is appropriate?", "AI may ask questions but not write the final answer."],
          ["Teacher direction", "Write a short instruction you could give students.", "You may use AI for planning questions only."]
        ]
      },
      "teacher-assignment-design": {
        title: "Assignment Redesign Practice",
        intro: "Draft one adjustment that makes an assignment more AI-aware.",
        fields: [
          ["Original task", "Describe the assignment briefly.", "Write a response about a reading."],
          ["AI-aware adjustment", "Add process, evidence, conference, or reflection.", "Students submit notes and explain revisions."],
          ["Why this helps", "Explain how this supports learning instead of policing.", "It shows thinking and makes feedback possible."]
        ]
      },
      "teacher-disclosure-citation": {
        title: "Disclosure Language Practice",
        intro: "Create language students could actually use.",
        fields: [
          ["Allowed AI use", "What kind of AI support is allowed?", "Brainstorming and feedback are allowed."],
          ["Student disclosure sentence", "Draft a simple disclosure sentence.", "I used AI to brainstorm, then wrote and revised the work myself."],
          ["Teacher follow-up", "What would you ask if the disclosure is unclear?", "What prompt did you use, and what did you change?"]
        ]
      },
      "teacher-verification-feedback": {
        title: "Verification Feedback Practice",
        intro: "Draft feedback that teaches verification instead of relying on detectors.",
        fields: [
          ["Student issue", "What needs checking?", "A statistic appears without a source."],
          ["Feedback sentence", "Write feedback that directs verification.", "Please find a reliable source for this statistic."],
          ["Next evidence step", "What should the student do next?", "Compare the claim with an official or expert source."]
        ]
      },
      "teacher-implementation-plan": {
        title: "Implementation Practice",
        intro: "Turn the module into a concrete classroom move.",
        fields: [
          ["Routine", "What AI routine will you introduce?", "Assess, build, disclose."],
          ["When students use it", "Where does it fit in instruction?", "Before drafting or during revision."],
          ["How you will monitor", "What evidence will students produce?", "A prompt, disclosure, and reflection."]
        ]
      },
      "teacher-prompting-for-learning": {
        title: "Teacher Prompt Practice",
        intro: "Write a prompt that supports learning without replacing student thinking.",
        fields: [
          ["Teacher task", "What do you want help planning or explaining?", "Create revision questions for a draft."],
          ["Context", "What should the AI know?", "Grade 6, short constructed response."],
          ["Boundary", "What should the AI avoid?", "Do not write the student's answer."]
        ]
      },
      "teacher-student-conferencing": {
        title: "Conference Practice",
        intro: "Plan a short, non-punitive conversation about AI use.",
        fields: [
          ["Opening question", "How will you start the conversation?", "Walk me through how you used AI."],
          ["Evidence to review", "What will you ask to see?", "Prompt, notes, draft history, or disclosure."],
          ["Next step", "What happens after the conversation?", "Student revises and adds a clearer disclosure."]
        ]
      },
      "teacher-privacy-pii-context": {
        title: "Privacy Context Practice",
        intro: "Practice separating useful context from private or identifying information.",
        fields: [
          ["Useful context", "What can safely be shared?", "Grade level, task goal, rubric skill."],
          ["Information to protect", "What should not be shared?", "Names, IEP details, grades, health, behavior."],
          ["Safer prompt wording", "Rewrite the request without PII.", "Give feedback for a Grade 5 paragraph using this anonymous excerpt."]
        ]
      },
      "teacher-equity-access": {
        title: "Equity and Access Practice",
        intro: "Plan an AI use that accounts for development, access, and support.",
        fields: [
          ["Learner need", "What access or developmental need matters?", "Students need sentence starters and oral directions."],
          ["Support", "How could AI or another tool support access?", "Generate multiple reading levels for directions."],
          ["Boundary", "What human support remains necessary?", "Teacher checks fit and student understanding."]
        ]
      }
    };

    function practiceFieldHtml(prefix, field, index) {
      return `
        <div class="practice-completion-field ${index === 2 ? "full" : ""}">
          <strong>${escapeHtml(field[0])}</strong>
          <p class="small-note">${escapeHtml(field[1])}</p>
          <textarea id="${prefix}PracticeField${index}" oninput="updatePracticeCompletionState('${prefix}')" placeholder="${escapeHtml(field[2])}"></textarea>
        </div>
      `;
    }




    const aiUseLevelPracticeScenarios = [
      {
        subject: "English",
        task: "Write a literary paragraph about how a character changes.",
        directions: "You may use AI to ask planning questions or explain vocabulary. AI may not write sentences for your paragraph.",
        level: 1,
        levelName: "Level 1 — Brainstorm / Explain",
        focus: "character change paragraph",
        supports: [
          "ask me planning questions",
          "explain difficult words",
          "help me find evidence in my notes",
          "check whether my topic sentence matches the assignment",
          "suggest what I should reread"
        ],
        noAiStem: "I know AI cannot write this for me. Could you help me choose evidence or understand the directions?"
      },
      {
        subject: "Math",
        task: "Complete a multi-step equation problem and show your work.",
        directions: "Do not use AI to solve the problem or give the answer. You may ask your teacher or use class notes.",
        level: 0,
        levelName: "Level 0 — Independent",
        focus: "multi-step equation problem",
        supports: [],
        noAiStem: "I am stuck on this problem. Can you help me understand the next step without giving me the answer?"
      },
      {
        subject: "Social Studies",
        task: "Prepare notes for a short discussion about causes of the American Revolution.",
        directions: "AI may help you organize your notes or make a study checklist. You must use class materials for facts and examples.",
        level: 2,
        levelName: "Level 2 — Organize / Revise",
        focus: "American Revolution discussion notes",
        supports: [
          "organize my notes",
          "make a study checklist",
          "ask me what evidence I have",
          "help me group causes and effects",
          "remind me to use class materials"
        ],
        noAiStem: "Can you help me organize my class notes without adding new facts?"
      },
      {
        subject: "Science",
        task: "Revise a lab conclusion using your own data.",
        directions: "AI may help you check clarity and ask questions about your conclusion. AI may not invent data, write the conclusion, or add results.",
        level: 2,
        levelName: "Level 2 — Organize / Revise",
        focus: "lab conclusion using my own data",
        supports: [
          "check if my explanation is clear",
          "ask me questions about my data",
          "help me connect evidence to the claim",
          "point out missing reasoning",
          "remind me not to add invented data"
        ],
        noAiStem: "Can you help me explain my data more clearly without changing my results?"
      },
      {
        subject: "Research",
        task: "Start a general research assignment on renewable energy.",
        directions: "AI may help you brainstorm search terms and possible questions. AI may not be used as a cited source, and AI Overviews do not count as a source.",
        level: 1,
        levelName: "Level 1 — Brainstorm / Explain",
        focus: "renewable energy research",
        supports: [
          "brainstorm search terms",
          "suggest research questions",
          "help me narrow the topic",
          "remind me to open real sources",
          "help me make a source-check checklist"
        ],
        noAiStem: "Can you help me choose search terms and find real sources without using AI as my source?"
      },
      {
        subject: "English",
        task: "Create a model paragraph to study before writing your own.",
        directions: "AI may generate a short model paragraph so the class can analyze structure. You may not turn in the AI paragraph as your work.",
        level: 4,
        levelName: "Level 4 — Generated Work",
        focus: "model paragraph for structure analysis",
        supports: [
          "generate a short model paragraph",
          "label it as a model, not my work",
          "point out topic sentence and evidence structure",
          "ask me what I notice about the structure",
          "remind me not to submit the model"
        ],
        noAiStem: "Can you show me what paragraph structure looks like without writing my assignment?"
      },
      {
        subject: "Science",
        task: "Create practice questions for a unit review.",
        directions: "AI may generate practice review questions from the study guide. You must answer them yourself and check with class materials.",
        level: 4,
        levelName: "Level 4 — Generated Work",
        focus: "science unit review questions",
        supports: [
          "generate practice questions from my study guide",
          "include an answer key after the questions",
          "keep questions aligned to class vocabulary",
          "ask me to try before checking answers",
          "remind me to verify with class materials"
        ],
        noAiStem: "Can you help me study with questions without replacing my own answers?"
      },
      {
        subject: "Social Studies",
        task: "Draft a neutral summary of two sides of a historical debate for comparison.",
        directions: "AI may draft a short neutral comparison only after you provide class notes. You must check accuracy, revise the wording, and cite class sources.",
        level: 3,
        levelName: "Level 3 — Supported Drafting",
        focus: "neutral comparison from class notes",
        supports: [
          "use only the notes I provide",
          "draft a short neutral comparison",
          "separate the two viewpoints",
          "flag claims I should check in class sources",
          "leave the final revision to me"
        ],
        noAiStem: "Can you help me compare viewpoints using only my class notes?"
      },
      {
        subject: "Math",
        task: "Create a worked example after you finish your own problem.",
        directions: "AI may create a similar worked example for studying after your own work is complete. It may not solve the assigned problem for you.",
        level: 3,
        levelName: "Level 3 — Supported Drafting",
        focus: "similar worked example for studying",
        supports: [
          "make a similar example, not my exact problem",
          "show each step",
          "explain the strategy",
          "include a common mistake to watch for",
          "remind me not to copy it into my assignment"
        ],
        noAiStem: "Can you show a similar example after I try mine first?"
      },
      {
        subject: "English",
        task: "Revise the introduction of an essay draft you already wrote.",
        directions: "AI may suggest two revised versions of your introduction after you paste your own draft. You must choose, edit, and keep your own voice.",
        level: 3,
        levelName: "Level 3 — Supported Drafting",
        focus: "essay introduction revision",
        supports: [
          "suggest two revised versions of my introduction",
          "keep my main idea",
          "keep my voice",
          "explain what changed",
          "ask me which version still sounds like me"
        ],
        noAiStem: "Can you help me revise my own introduction without changing my meaning?"
      }
    ];

    const aiUseLevelLabels = [
      ["0", "Independent", "No AI for the task."],
      ["1", "Brainstorm / Explain", "AI can help before you create the work."],
      ["2", "Organize / Revise", "AI can help with work you already made."],
      ["3", "Supported Drafting", "AI may draft limited parts only if allowed."],
      ["4", "Generated Work", "AI creates most/all work only if specifically allowed."]
    ];

    const aiUseLevelPracticeState = {
      scenarioIndex: null,
      selectedLevel: null,
      supports: [],
      visitedScenarios: new Set(),
      completedScenarios: new Set(),
      currentUnlockedIndex: 0
    };

    function renderAiUseLevelPractice() {
      const area = document.getElementById("activityArea");
      aiUseLevelPracticeState.scenarioIndex = null;
      aiUseLevelPracticeState.selectedLevel = null;
      aiUseLevelPracticeState.supports = [];
      aiUseLevelPracticeState.visitedScenarios = new Set();
      aiUseLevelPracticeState.completedScenarios = new Set();
      aiUseLevelPracticeState.currentUnlockedIndex = 0;

      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="ai-level-practice">
          <h3>AI-Use Level Practice</h3>
          <p>Read the teacher directions first. Then choose the AI-use level that matches the assignment.</p>
          <p class="small-note">Integrity means following the directions even when AI could do more.</p>

          <div class="ai-level-scenario-grid">
            ${aiUseLevelPracticeScenarios.map((scenario, index) => `
              <button type="button"
                class="ai-level-scenario-card ${index === 0 ? "current" : "locked"}"
                data-scenario-index="${index}"
                onclick="selectAiUseScenario(${index}, this)"
                ${index === 0 ? "" : "disabled"}>
                <strong>${escapeHtml(scenario.subject)}</strong>
                <p class="small-note">${escapeHtml(scenario.task)}</p>
              </button>
            `).join("")}
          </div>

          <div id="aiUseVisitStatus" class="ai-level-visit-status">Completed 0 of ${aiUseLevelPracticeScenarios.length} scenarios.</div>

          <div id="aiUseScenarioDetails" class="ai-level-directions-card">
            <h4>Choose a scenario.</h4>
            <p class="small-note">The assignment and teacher directions will appear here.</p>
          </div>

          <div class="ai-level-support-card">
            <strong>Choose the AI-use level</strong>
            <p class="small-note">Base your choice on the teacher directions, not on what AI is capable of doing.</p>
            <div class="ai-level-button-grid">
              ${aiUseLevelLabels.map(([level, title, description]) => `
                <button type="button" class="ai-level-choice-btn" data-level="${level}" onclick="selectAiUseLevel(${level}, this)">
                  <strong>Level ${level}</strong>
                  <span>${escapeHtml(title)}</span>
                  <span>${escapeHtml(description)}</span>
                </button>
              `).join("")}
            </div>
          </div>

          <div id="aiUseSupportArea" class="ai-level-support-card">
            <strong>Support options</strong>
            <p class="small-note">Choose a scenario and level first.</p>
          </div>

          <div id="aiUseIntegrityArea" class="ai-level-integrity-card">
            <strong>Integrity reminder</strong>
            <p class="small-note">Use only the support allowed by the assignment. When the level is 0, do not generate an AI prompt; ask a teacher for help.</p>
          </div>

          <div id="aiUseLevelOutputCard" class="ai-level-output-card">
            <strong id="aiUseLevelOutputTitle">Generated support prompt</strong>
            <p id="aiUseLevelOutputNote" class="small-note">A prompt is generated only when the assignment allows AI.</p>
            <textarea id="aiUseLevelOutput" readonly placeholder="Your allowed support prompt will appear here."></textarea>
          </div>

          <div class="button-row">
            <button type="button" id="aiUseGenerateButton" onclick="generateAiUseLevelSupport()">Generate Support</button>
            <button type="button" id="aiUseLevelCompleteButton" onclick="completeAiUseLevelPractice()" disabled>Complete Practice Module</button>
            <button type="button" class="secondary-btn" onclick="renderAiUseLevelPractice()">Reset</button>
          </div>

          <div id="aiUseLevelStatus" class="ai-level-status bad">Choose a scenario and the matching AI-use level.</div>
          <div id="quizFeedback" class="feedback hidden"></div>
        </div>
      `;
      setTimeout(updateAiUseVisitedStatus, 0);
    }


    function updateAiUseVisitedStatus() {
      const status = document.getElementById("aiUseVisitStatus");
      const text = document.getElementById("aiUseVisitStatusText");
      const fill = document.getElementById("aiUseProgressFill");
      if (!status || !text) return;

      const completed = aiUseLevelPracticeState.completedScenarios?.size || 0;
      const total = aiUseLevelPracticeScenarios.length;
      const nextNumber = Math.min(aiUseLevelPracticeState.currentUnlockedIndex + 1, total);

      text.textContent = completed >= total
        ? `Completed ${completed} of ${total} scenarios. You may complete this practice.`
        : `Completed ${completed} of ${total} scenarios. Scenario ${nextNumber} is the current task.`;

      if (fill) fill.style.width = `${Math.round((completed / total) * 100)}%`;
      status.classList.toggle("good", completed >= total);

      document.querySelectorAll(".ai-level-scenario-card").forEach((card, index) => {
        const complete = aiUseLevelPracticeState.completedScenarios.has(index);
        const unlocked = index <= aiUseLevelPracticeState.currentUnlockedIndex;
        const current = unlocked && !complete && index === aiUseLevelPracticeState.currentUnlockedIndex;

        card.disabled = !unlocked;
        card.classList.toggle("visited", complete);
        card.classList.toggle("locked", !unlocked);
        card.classList.toggle("current", current);
      });
    }


    function selectAiUseScenario(index, button) {
      if (index > aiUseLevelPracticeState.currentUnlockedIndex) return;

      aiUseLevelPracticeState.scenarioIndex = index;
      aiUseLevelPracticeState.selectedLevel = null;
      aiUseLevelPracticeState.supports = [];

      document.querySelectorAll(".ai-level-scenario-card").forEach(card => card.classList.remove("selected"));
      button.classList.add("selected");
      updateAiUseVisitedStatus();

      document.querySelectorAll(".ai-level-choice-btn").forEach(button => {
        button.classList.remove("selected", "correct-level", "incorrect-level");
      });

      const scenario = aiUseLevelPracticeScenarios[index];
      const details = document.getElementById("aiUseScenarioDetails");
      const output = document.getElementById("aiUseLevelOutput");
      if (output) output.value = "";

      if (details) {
        details.innerHTML = `
          <h4>${escapeHtml(scenario.subject)} scenario</h4>
          <p><strong>Assignment:</strong> ${escapeHtml(scenario.task)}</p>
          <div class="teacher-direction-strip">
            <strong>Teacher directions</strong>
            <p class="small-note">${escapeHtml(scenario.directions)}</p>
          </div>
        `;
      }

      renderAiUseSupportOptions();
      updateAiUseLevelOutputMode();
      updateAiUseLevelPracticeState();
    }

    function selectAiUseLevel(level, button) {
      aiUseLevelPracticeState.selectedLevel = level;
      aiUseLevelPracticeState.supports = [];

      document.querySelectorAll(".ai-level-choice-btn").forEach(btn => {
        btn.classList.remove("selected", "correct-level", "incorrect-level");
      });

      button.classList.add("selected");

      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      if (scenario) {
        if (level === scenario.level) {
          button.classList.add("correct-level");
        } else {
          button.classList.add("incorrect-level");
        }
      }

      const output = document.getElementById("aiUseLevelOutput");
      if (output) output.value = "";

      renderAiUseSupportOptions();
      updateAiUseLevelOutputMode();
      updateAiUseLevelPracticeState();
    }

    function renderAiUseSupportOptions() {
      const area = document.getElementById("aiUseSupportArea");
      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      if (!area) return;

      if (!scenario) {
        area.innerHTML = `
          <strong>Support options</strong>
          <p class="small-note">Choose a scenario and level first.</p>
        `;
        return;
      }

      if (aiUseLevelPracticeState.selectedLevel === null) {
        area.innerHTML = `
          <strong>Support options</strong>
          <p class="small-note">Choose the level that matches the teacher directions.</p>
        `;
        return;
      }

      if (aiUseLevelPracticeState.selectedLevel !== scenario.level) {
        area.innerHTML = `
          <strong>Reread the teacher directions</strong>
          <p class="small-note">This level does not match the assignment directions. Try again before choosing support options.</p>
        `;
        return;
      }

      if (scenario.level === 0) {
        area.innerHTML = `
          <strong>Level 0 means no AI prompt.</strong>
          <p class="small-note">The assignment directions say AI should not be used for this task. Choose one allowed support you could use.</p>
          <div class="ai-level-chip-grid">
            ${[
              "I am stuck on the next step.",
              "Can you explain the directions another way?",
              "Can you point me to the class notes?",
              "Can you ask me a question to help me think?",
              "Can you check if I am on the right track?"
            ].map(stem => `<button type="button" class="ai-level-chip" onclick='toggleAiUseSupport(${JSON.stringify(stem)}, this)'>${escapeHtml(stem)}</button>`).join("")}
          </div>
        `;
        return;
      }

      area.innerHTML = `
        <strong>What kind of AI support fits this assignment?</strong>
        <p class="small-note">Select at least two options that stay within the teacher directions.</p>
        <div class="ai-level-chip-grid">
          ${scenario.supports.map(support => `<button type="button" class="ai-level-chip" onclick='toggleAiUseSupport(${JSON.stringify(support)}, this)'>${escapeHtml(support)}</button>`).join("")}
        </div>
      `;
    }

    function toggleAiUseSupport(value, button) {
      if (!button) return;

      const now = Date.now();
      const lastClick = Number(button.dataset.lastAiUseClick || 0);
      if (now - lastClick < 350) return;
      button.dataset.lastAiUseClick = String(now);
      button.classList.add("click-locked");
      setTimeout(() => button.classList.remove("click-locked"), 260);

      const supports = aiUseLevelPracticeState.supports;
      const index = supports.indexOf(value);
      if (index >= 0) {
        supports.splice(index, 1);
        button.classList.remove("selected");
      } else {
        supports.push(value);
        button.classList.add("selected");
      }

      const output = document.getElementById("aiUseLevelOutput");
      if (output) output.value = "";

      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      if (scenario && scenario.level === 0 && aiUseLevelPracticeState.selectedLevel === scenario.level && aiUseLevelPracticeState.supports.length >= 1) {
        markCurrentAiUseScenarioComplete();
      }

      updateAiUseLevelPracticeState();
    }


    function updateAiUseLevelOutputMode() {
      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      const card = document.getElementById("aiUseLevelOutputCard");
      const title = document.getElementById("aiUseLevelOutputTitle");
      const note = document.getElementById("aiUseLevelOutputNote");
      const output = document.getElementById("aiUseLevelOutput");
      const generateButton = document.getElementById("aiUseGenerateButton");
      const integrityCard = document.getElementById("aiUseIntegrityArea");
      if (!card || !title || !note || !output) return;

      const isLevelZero = scenario && aiUseLevelPracticeState.selectedLevel === scenario.level && scenario.level === 0;
      card.classList.toggle("level-zero-mode", Boolean(isLevelZero));
      card.classList.toggle("level-zero-disabled", Boolean(isLevelZero));
      integrityCard?.classList.toggle("level-zero-selected", Boolean(isLevelZero));

      if (isLevelZero) {
        title.textContent = "AI prompt unavailable";
        note.textContent = "Level 0 means AI is not allowed for this task. Use a teacher, class notes, or allowed classroom supports.";
        output.value = "";
        output.placeholder = "No AI prompt for Level 0.";
        output.disabled = true;
        if (generateButton) generateButton.disabled = true;
      } else {
        title.textContent = "Generated support prompt";
        note.textContent = "A prompt is generated only when the assignment allows AI.";
        output.placeholder = "Your allowed support prompt will appear here.";
        output.disabled = false;
        if (generateButton) generateButton.disabled = false;
      }
    }


    function generateAiUseLevelSupport() {
      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      const output = document.getElementById("aiUseLevelOutput");
      if (!scenario || !output) return;

      if (aiUseLevelPracticeState.selectedLevel !== scenario.level) {
        output.value = "Reread the teacher directions and choose the level that matches the assignment before generating support.";
        updateAiUseLevelPracticeState();
        return;
      }

      if (scenario.level === 0) {
        output.value = "";
        updateAiUseLevelOutputMode();
        updateAiUseLevelPracticeState();
        return;
      }

      if (aiUseLevelPracticeState.supports.length < 2) {
        output.value = "Choose at least two support options before generating a prompt.";
        updateAiUseLevelPracticeState();
        return;
      }

      output.value = `I am working on ${scenario.focus}. My teacher directions are: ${scenario.directions}\n\nPlease help me by doing only these allowed things: ${aiUseLevelPracticeState.supports.join("; ")}.\n\nDo not write the final answer for me. Do not add facts I have not checked. Ask questions or give guidance so I can do the thinking myself.`;
      markCurrentAiUseScenarioComplete();
      updateAiUseLevelPracticeState();
    }


    function markCurrentAiUseScenarioComplete() {
      const index = aiUseLevelPracticeState.scenarioIndex;
      if (index === null || index === undefined) return;

      aiUseLevelPracticeState.completedScenarios.add(index);
      aiUseLevelPracticeState.visitedScenarios.add(index);

      const nextIndex = index + 1;
      if (nextIndex < aiUseLevelPracticeScenarios.length) {
        aiUseLevelPracticeState.currentUnlockedIndex = Math.max(aiUseLevelPracticeState.currentUnlockedIndex, nextIndex);
      } else {
        aiUseLevelPracticeState.currentUnlockedIndex = aiUseLevelPracticeScenarios.length - 1;
      }

      document.querySelectorAll(".ai-level-scenario-card").forEach((card, cardIndex) => {
        const isComplete = aiUseLevelPracticeState.completedScenarios.has(cardIndex);
        const isUnlocked = cardIndex <= aiUseLevelPracticeState.currentUnlockedIndex;

        card.disabled = !isUnlocked;
        card.classList.toggle("locked", !isUnlocked);
        card.classList.toggle("visited", isComplete);
        card.classList.toggle("current", isUnlocked && !isComplete && cardIndex === aiUseLevelPracticeState.currentUnlockedIndex);
      });

      updateAiUseVisitedStatus();
    }


    function updateAiUseLevelPracticeState() {
      const scenario = aiUseLevelPracticeScenarios[aiUseLevelPracticeState.scenarioIndex];
      const status = document.getElementById("aiUseLevelStatus");
      const button = document.getElementById("aiUseLevelCompleteButton");
      const output = document.getElementById("aiUseLevelOutput");
      if (!status || !button) return;

      const hasScenario = Boolean(scenario);
      const correctLevel = hasScenario && aiUseLevelPracticeState.selectedLevel === scenario.level;
      const isLevelZero = correctLevel && scenario.level === 0;
      const enoughSupports = correctLevel && (isLevelZero ? aiUseLevelPracticeState.supports.length >= 1 : aiUseLevelPracticeState.supports.length >= 2);
      const hasOutput = isLevelZero ? true : ((output?.value.trim().length || 0) >= 80);
      const scenarioTaskComplete = hasScenario && correctLevel && enoughSupports && hasOutput;
      if (scenarioTaskComplete && !aiUseLevelPracticeState.completedScenarios.has(aiUseLevelPracticeState.scenarioIndex)) {
        markCurrentAiUseScenarioComplete();
      }

      const allScenariosViewed = (aiUseLevelPracticeState.completedScenarios?.size || 0) >= aiUseLevelPracticeScenarios.length;
      const currentScenarioComplete = aiUseLevelPracticeState.completedScenarios?.has(aiUseLevelPracticeState.scenarioIndex);
      const ready = hasScenario && correctLevel && enoughSupports && hasOutput && allScenariosViewed && currentScenarioComplete;

      button.disabled = !ready;
      status.className = `ai-level-status ${ready ? "good" : "bad"}`;

      if (!hasScenario) {
        status.textContent = "Choose a scenario and the matching AI-use level.";
      } else if (!correctLevel) {
        status.textContent = "Reread the teacher directions and choose the matching AI-use level.";
      } else if (!enoughSupports) {
        status.textContent = scenario.level === 0
          ? "Choose one allowed non-AI support option."
          : "Choose at least two allowed support options.";
      } else if (!hasOutput) {
        status.textContent = "Generate the allowed support prompt before completing the module.";
      } else if (!allScenariosViewed) {
        status.textContent = `Complete each scenario in order. Completed ${aiUseLevelPracticeState.completedScenarios.size} of ${aiUseLevelPracticeScenarios.length}.`;
      } else {
        status.textContent = scenario.level === 0
          ? "Ready to complete. You viewed every scenario and chose a non-AI support for a Level 0 task."
          : "Ready to complete. You viewed every scenario and your generated prompt stays within the teacher directions.";
      }
    }

    function completeAiUseLevelPractice() {
      updateAiUseLevelPracticeState();
      const button = document.getElementById("aiUseLevelCompleteButton");
      if (button?.disabled) return;

      const feedback = document.getElementById("quizFeedback");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Practice module complete. You matched the AI-use level to the teacher directions and made an integrity-based choice.";
      }

      completeModule("when-is-ai-allowed", 100);
    }


    const promptPracticeExamples = [
      {
        title: "Plan",
        weak: "Do this assignment for me.",
        task: "help me plan my work",
        audience: "a student",
        topic: "my topic",
        format: "planning questions",
        details: "what I need to decide, organize, or prepare before I start",
        limits: "do not write the final answer for me"
      },
      {
        title: "Explain",
        weak: "Tell me the answer.",
        task: "explain an idea I am learning",
        audience: "a student",
        topic: "the idea I am learning",
        format: "a short explanation with examples",
        details: "the key idea, important vocabulary, and where students often get confused",
        limits: "do not complete the assignment for me"
      },
      {
        title: "Ask questions",
        weak: "Help me.",
        task: "ask me questions that help me think",
        audience: "a student",
        topic: "my assignment topic",
        format: "guiding questions",
        details: "questions that help me figure out what I already know and what I still need",
        limits: "do not give me the final response"
      },
      {
        title: "Organize",
        weak: "Organize this.",
        task: "help me organize my ideas",
        audience: "a student",
        topic: "my notes or ideas",
        format: "a simple outline or checklist",
        details: "main ideas, supporting details, and a logical order",
        limits: "do not add new information for me"
      },
      {
        title: "Revise",
        weak: "Fix this.",
        task: "help me revise work I already wrote",
        audience: "a student",
        topic: "my draft",
        format: "specific suggestions and questions",
        details: "clarity, organization, missing details, and whether my work matches the directions",
        limits: "do not rewrite it for me"
      },
      {
        title: "Check",
        weak: "Is this right?",
        task: "help me check my work",
        audience: "a student",
        topic: "my work",
        format: "a checklist",
        details: "directions, accuracy, missing parts, and what I should review",
        limits: "do not change my answers for me"
      },
      {
        title: "Study",
        weak: "Make me study.",
        task: "help me study",
        audience: "a student",
        topic: "what I need to study",
        format: "practice questions or a study plan",
        details: "important terms, concepts, examples, and quick self-checks",
        limits: "do not give answers before I try"
      },
      {
        title: "Research",
        weak: "Give me sources.",
        task: "help me start research",
        audience: "a student",
        topic: "my research topic",
        format: "search terms and research questions",
        details: "keywords, possible questions, and what kind of source would help",
        limits: "do not act as the source or make up facts"
      }
    ];

    const promptPracticeBanks = {
      task: [
        "help me plan",
        "explain the idea",
        "ask me questions",
        "give feedback",
        "help me revise",
        "help me check my work"
      ],
      audience: [
        "clear and student-friendly",
        "step-by-step",
        "with simple examples",
        "using school-appropriate vocabulary",
        "as questions that help me think",
        "short and easy to scan"
      ],
      format: [
        "as bullet points",
        "as planning questions",
        "as a checklist",
        "as strengths and suggestions",
        "as one step at a time",
        "in a table"
      ],
      limits: [
        "do not write the final answer",
        "do not add new facts",
        "keep my voice",
        "do not change my main idea",
        "ask me questions instead of taking over",
        "do not use private information"
      ]
    };

    const promptPracticeGradeOptions = [
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12"
    ];

    const promptPracticeSubjectOptions = [
      "English",
      "Math",
      "Social Studies",
      "Science",
      "Health",
      "PE",
      "Music",
      "Technology",
      "Library / Media",
      "Art",
      "STEM",
      "Guidance",
      "World Language",
      "Other"
    ];

    const promptPracticeState = {
      exampleIndex: null,
      gradeLevel: "",
      subject: "",
      customSubject: "",
      topic: "",
      selected: {
        task: [],
        audience: [],
        format: [],
        limits: []
      }
    };


    function setStudentBuildMode(mode) {
      const standardPanel = document.getElementById("studentStandardBuildPanel");
      const supportPanel = document.getElementById("studentBuildWithSupportPanel");
      const standardButton = document.getElementById("standardBuildModeButton");
      const supportButton = document.getElementById("supportBuildModeButton");

      if (!standardPanel || !supportPanel) return;

      const useSupport = mode === "support";
      standardPanel.classList.toggle("hidden", useSupport);
      supportPanel.classList.toggle("hidden", !useSupport);
      standardButton?.classList.toggle("active", !useSupport);
      supportButton?.classList.toggle("active", useSupport);

      if (useSupport && !document.getElementById("studentBuildWithSupportMount")?.innerHTML.trim()) {
        renderPromptPracticeBuilder("studentBuildWithSupportMount", { optionalSupport: true });
      }
    }


    function renderPromptPracticeBuilder(targetId = "activityArea", options = {}) {
      const area = document.getElementById(targetId);
      if (!area) return;
      promptPracticeState.exampleIndex = null;
      promptPracticeState.gradeLevel = "";
      promptPracticeState.subject = "";
      promptPracticeState.customSubject = "";
      promptPracticeState.topic = "";
      promptPracticeState.selected = { task: [], audience: [], format: [], limits: [] };

      const isOptionalSupport = Boolean(options.optionalSupport);
      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="prompt-practice-builder" data-optional-support="${isOptionalSupport ? "true" : "false"}">
          <h3>${isOptionalSupport ? "Build with Support" : "Prompt Practice"}</h3>
          <p>Choose a starter situation, then click prompt parts to build a stronger prompt.</p>
          <p class="small-note">A stronger prompt asks for support, gives context, and sets limits. It should not ask AI to do the whole assignment.</p>

          <div class="prompt-builder-section">
            <strong>1. Choose one assignment type</strong>
            <p class="small-note">Choose the kind of help you need. Add the specific topic in the next section.</p>
            <div class="prompt-example-grid">
              ${promptPracticeExamples.map((example, index) => `
                <button type="button" class="prompt-example-card" onclick="selectPromptPracticeExample(${index}, this)">
                  <strong>${escapeHtml(example.title)}</strong>
                  <p class="small-note"><strong>Too-vague prompt:</strong></p>
                  <p>${escapeHtml(example.weak)}</p>
                </button>
              `).join("")}
            </div>
          </div>

          <div class="prompt-builder-section">
            <strong>2. Choose the grade level</strong>
            <p class="small-note">This helps the prompt ask for support at the right explanation level.</p>
            <select id="promptPracticeGrade" class="prompt-grade-select" onchange="setPromptPracticeGradeLevel()">
              <option value="">Choose a grade level</option>
              ${promptPracticeGradeOptions.map(grade => `<option value="${escapeHtml(grade)}">${escapeHtml(grade)}</option>`).join("")}
            </select>
          </div>

          <div class="prompt-builder-section">
            <strong>3. Choose the subject or class</strong>
            <p class="small-note">Choose the closest subject. Use Other for a specific high school course.</p>
            <div class="prompt-subject-grid">
              ${promptPracticeSubjectOptions.map(subject => `<button type="button" class="prompt-subject-btn" onclick='selectPromptPracticeSubject(${JSON.stringify(subject)}, this)'>${escapeHtml(subject)}</button>`).join("")}
              <div id="promptOtherSubjectWrap" class="prompt-other-subject-wrap">
                <input id="promptOtherSubjectInput" class="prompt-other-subject-input" oninput="setPromptPracticeCustomSubject()" placeholder="Type subject name" aria-label="Type subject name">
              </div>
            </div>
          </div>

          <div class="prompt-builder-section">
            <strong>4. Add the topic</strong>
            <p class="small-note">Type the specific topic, book, problem type, project, or skill.</p>
            <input id="promptPracticeTopic" class="prompt-topic-field" oninput="setPromptPracticeTopic()" placeholder="Example: renewable energy, ecosystems, character change, fractions, my draft, my notes">
            <div id="promptTopicHelper" class="prompt-topic-helper"></div>
          </div>

          ${renderPromptPracticeBankSection("task", "5. What kind of help do you want?")}
          ${renderPromptPracticeBankSection("audience", "6. What style of support would help?")}
          ${renderPromptPracticeBankSection("format", "7. What format would help?")}
          ${renderPromptPracticeBankSection("limits", "8. What should AI avoid or remember?")}

          <div class="prompt-output-panel">
            <strong>Built prompt</strong>
            <p class="small-note">Use the button to build from your choices. You can still edit it after it appears.</p>
            <textarea id="promptPracticeOutput" oninput="updatePromptPracticeState()" placeholder="Your stronger prompt will appear here."></textarea>
            <div class="prompt-parts-checklist">
              <span id="promptPartExample" class="prompt-part-pill">starter</span>
              <span id="promptPartGrade" class="prompt-part-pill">grade level</span>
              <span id="promptPartSubject" class="prompt-part-pill">subject</span>
              <span id="promptPartTopic" class="prompt-part-pill">topic</span>
              <span id="promptPartTask" class="prompt-part-pill">task</span>
              <span id="promptPartAudience" class="prompt-part-pill">style</span>
              <span id="promptPartFormat" class="prompt-part-pill">format</span>
              <span id="promptPartLimit" class="prompt-part-pill">limit</span>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="mixPromptPracticeStarter()">Mix Starter</button>
            <button type="button" onclick="buildPromptPracticeOutput()">Build Prompt</button>
            <button type="button" id="promptPracticeCompleteButton" onclick="completePromptPracticeModule()" disabled>${isOptionalSupport ? "Use Supported Prompt" : "Complete Practice Module"}</button>
            <button type="button" class="secondary-btn" onclick="renderPromptPracticeBuilder()">Reset</button>
          </div>

          <div id="promptPracticeStatus" class="prompt-practice-status bad">Choose an assignment type, grade level, topic, and at least one choice from each section.</div>
          <div id="quizFeedback" class="feedback hidden"></div>
        </div>
      `;
    }

    function renderPromptPracticeBankSection(group, title) {
      return `
        <div class="prompt-builder-section">
          <strong>${escapeHtml(title)}</strong>
          <div class="prompt-bank-grid">
            ${promptPracticeBanks[group].map(value => `
              <button type="button" class="prompt-bank-chip" onclick='togglePromptPracticeChip("${group}", ${JSON.stringify(value)}, this)'>${escapeHtml(value)}</button>
            `).join("")}
          </div>
        </div>
      `;
    }



    function guardPromptButtonClick(button) {
      if (!button) return false;
      const now = Date.now();
      const lastClick = Number(button.dataset.lastPromptClick || 0);
      if (now - lastClick < 450) return false;
      button.dataset.lastPromptClick = String(now);
      button.classList.add("click-locked");
      setTimeout(() => button.classList.remove("click-locked"), 320);
      return true;
    }

    function selectPromptPracticeSubject(subject, button) {
      if (!guardPromptButtonClick(button)) return;
      promptPracticeState.subject = subject;
      if (subject !== "Other") {
        promptPracticeState.customSubject = "";
      }
      document.querySelectorAll(".prompt-subject-btn").forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");

      const otherInput = document.getElementById("promptOtherSubjectInput");
      if (otherInput && subject !== "Other") otherInput.value = "";

      updatePromptPracticeState();
    }

    function setPromptPracticeCustomSubject() {
      const input = document.getElementById("promptOtherSubjectInput");
      promptPracticeState.customSubject = input?.value.trim() || "";
      updatePromptPracticeState();
    }

    function getPromptPracticeSubjectForOutput() {
      if (promptPracticeState.subject === "Other") {
        return promptPracticeState.customSubject || "the selected course";
      }
      return promptPracticeState.subject || "the class";
    }


    function setPromptPracticeGradeLevel() {
      const select = document.getElementById("promptPracticeGrade");
      promptPracticeState.gradeLevel = select?.value || "";
      updatePromptPracticeState();
    }



    function setPromptPracticeTopic() {
      const input = document.getElementById("promptPracticeTopic");
      promptPracticeState.topic = input?.value.trim() || "";
      updatePromptPracticeState();
    }

    function setPromptTopicFromExampleTopic(topic) {
      const input = document.getElementById("promptPracticeTopic");
      if (input) input.value = topic || "";
      promptPracticeState.topic = topic || "";
      updatePromptPracticeState();
    }

    function renderPromptTopicHelper() {
      const helper = document.getElementById("promptTopicHelper");
      const example = promptPracticeExamples[promptPracticeState.exampleIndex];
      if (!helper) return;
      if (!example) {
        helper.innerHTML = "";
        return;
      }
      const options = [example.topic, "my notes", "my draft", "the assignment directions"].filter(Boolean);
      helper.innerHTML = options.map(option => `<button type="button" onclick='setPromptTopicFromExampleTopic(${JSON.stringify(option)})'>${escapeHtml(option)}</button>`).join("");
    }


    function selectPromptPracticeExample(index, button) {
      if (!guardPromptButtonClick(button)) return;
      promptPracticeState.exampleIndex = index;
      document.querySelectorAll(".prompt-example-card").forEach(card => card.classList.remove("selected"));
      button.classList.add("selected");
      renderPromptTopicHelper();

      const example = promptPracticeExamples[index];
      if (example?.topic && !promptPracticeState.topic) {
        setPromptTopicFromExampleTopic(example.topic);
      }

      updatePromptPracticeState();
    }

    function togglePromptPracticeChip(group, value, button) {
      if (!promptPracticeState.selected[group] || !button) return;
      if (!guardPromptButtonClick(button)) return;

      const values = promptPracticeState.selected[group];
      const index = values.indexOf(value);
      if (index >= 0) {
        values.splice(index, 1);
        button.classList.remove("selected");
      } else {
        values.push(value);
        button.classList.add("selected");
      }

      updatePromptPracticeState();
    }

    function mixPromptPracticeStarter() {
      const exampleIndex = Math.floor(Math.random() * promptPracticeExamples.length);
      const exampleButtons = Array.from(document.querySelectorAll(".prompt-example-card"));
      if (exampleButtons[exampleIndex]) {
        selectPromptPracticeExample(exampleIndex, exampleButtons[exampleIndex]);
      }

      const grade = promptPracticeGradeOptions[Math.floor(Math.random() * promptPracticeGradeOptions.length)];
      promptPracticeState.gradeLevel = grade;
      const gradeSelect = document.getElementById("promptPracticeGrade");
      if (gradeSelect) gradeSelect.value = grade;

      const mixableSubjects = promptPracticeSubjectOptions.filter(subject => subject !== "Other");
      const subject = mixableSubjects[Math.floor(Math.random() * mixableSubjects.length)];
      promptPracticeState.subject = subject;
      promptPracticeState.customSubject = "";
      document.querySelectorAll(".prompt-subject-btn").forEach(btn => {
        btn.classList.toggle("selected", btn.textContent.trim() === subject);
      });
      const otherInput = document.getElementById("promptOtherSubjectInput");
      if (otherInput) otherInput.value = "";

      const example = promptPracticeExamples[exampleIndex];
      promptPracticeState.topic = example?.topic || "";
      const topicInput = document.getElementById("promptPracticeTopic");
      if (topicInput) topicInput.value = promptPracticeState.topic;
      renderPromptTopicHelper();

      Object.keys(promptPracticeBanks).forEach(group => {
        promptPracticeState.selected[group] = [];
        const sectionButtons = Array.from(document.querySelectorAll(`.prompt-bank-chip[onclick*='"${group}"']`));
        sectionButtons.forEach(button => button.classList.remove("selected"));
        const bank = promptPracticeBanks[group];
        const choice = bank[Math.floor(Math.random() * bank.length)];
        const matchingButton = sectionButtons.find(button => button.textContent.trim() === choice);
        if (matchingButton) {
          promptPracticeState.selected[group].push(choice);
          matchingButton.classList.add("selected");
        }
      });

      buildPromptPracticeOutput();
    }

    function buildPromptPracticeOutput() {
      const example = promptPracticeExamples[promptPracticeState.exampleIndex];
      const output = document.getElementById("promptPracticeOutput");
      if (!output) return;

      const task = promptPracticeState.selected.task.join(", ") || (example ? example.task : "");
      const gradeLevel = promptPracticeState.gradeLevel || "the student's grade level";
      const subject = getPromptPracticeSubjectForOutput();
      const topic = promptPracticeState.topic || (example ? example.topic : "the assignment topic");
      const audience = promptPracticeState.selected.audience.join(", ") || (example ? example.audience : "");
      const format = promptPracticeState.selected.format.join(", ") || (example ? example.format : "");
      const limits = promptPracticeState.selected.limits.join(", ") || (example ? example.limits : "");
      const details = example ? example.details : "use the assignment directions";

      output.value = `Please ${task} for a ${gradeLevel} student in ${subject} working on ${topic}. Use a support style that is ${audience}. Use ${format}. Focus on ${details}. Remember: ${limits}.`;
      updatePromptPracticeState();
    }

    function updatePromptPracticeState() {
      const output = document.getElementById("promptPracticeOutput");
      const button = document.getElementById("promptPracticeCompleteButton");
      const status = document.getElementById("promptPracticeStatus");
      if (!button || !status) return;

      const hasExample = promptPracticeState.exampleIndex !== null;
      const hasGrade = Boolean(promptPracticeState.gradeLevel);
      const hasSubject = promptPracticeState.subject === "Other" ? Boolean(promptPracticeState.customSubject) : Boolean(promptPracticeState.subject);
      const hasTopic = Boolean(promptPracticeState.topic);
      const hasTask = promptPracticeState.selected.task.length > 0;
      const hasAudience = promptPracticeState.selected.audience.length > 0;
      const hasFormat = promptPracticeState.selected.format.length > 0;
      const hasLimit = promptPracticeState.selected.limits.length > 0;
      const hasOutput = (output?.value.trim().length || 0) >= 55;

      const checks = [
        ["promptPartExample", hasExample],
        ["promptPartGrade", hasGrade],
        ["promptPartSubject", hasSubject],
        ["promptPartTopic", hasTopic],
        ["promptPartTask", hasTask],
        ["promptPartAudience", hasAudience],
        ["promptPartFormat", hasFormat],
        ["promptPartLimit", hasLimit]
      ];

      checks.forEach(([id, ready]) => {
        const pill = document.getElementById(id);
        if (pill) pill.classList.toggle("ready", ready);
      });

      const ready = hasExample && hasGrade && hasSubject && hasTopic && hasTask && hasAudience && hasFormat && hasLimit && hasOutput;
      button.disabled = !ready;
      status.className = `prompt-practice-status ${ready ? "good" : "bad"}`;
      status.textContent = ready
        ? "Ready to complete. Your prompt has a task, audience, format, and limit."
        : "Choose an assignment type, grade level, subject or custom subject, topic, and at least one choice from each section, then build the prompt.";
    }

    function completePromptPracticeModule() {
      updatePromptPracticeState();
      const button = document.getElementById("promptPracticeCompleteButton");
      if (button?.disabled) return;

      const optionalPanel = document.querySelector('.prompt-practice-builder[data-optional-support="true"]');
      const supportedOutput = document.getElementById("promptPracticeOutput")?.value.trim() || "";

      if (optionalPanel) {
        const buildOutput = document.getElementById("studentPromptOutput");
        if (buildOutput && supportedOutput) {
          buildOutput.value = supportedOutput;
          studentPromptPracticeBuilt = true;
          updateStudentToolCheckpointState();
        }

        const status = document.getElementById("studentPromptPracticeStatus");
        if (status) {
          status.textContent = "Supported prompt copied into the standard Build output.";
          status.className = "student-prompt-status good";
        }

        button.textContent = "Supported Prompt Added";
        return;
      }

      const feedback = document.getElementById("quizFeedback");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Practice module complete. You built a stronger prompt with support and limits.";
      }

      completeModule("prompt-like-a-learner", 100);
    }


    const visualPracticeState = {
      claim: { scenario: "", signals: [], checks: [], decision: "" },
      media: { example: "", clues: [], checks: [], action: "" }
    };

    const claimPracticeOptions = {
      scenarios: [
        "AI says a historical event happened on a specific date.",
        "AI gives a statistic about teen technology use.",
        "AI names the best source for a science fact.",
        "AI summarizes what a school rule means."
      ],
      signals: [
        "specific date",
        "number or percent",
        "quote",
        "name of a person or group",
        "claim about a rule",
        "sounds very confident"
      ],
      checks: [
        "check an official source",
        "compare with a second source",
        "choose strong search terms",
        "skip the AI Overview",
        "open the source link",
        "look for the original source",
        "ask the teacher",
        "check the date",
        "do not use it yet"
      ],
      decisions: [
        "Use after checking",
        "Revise the claim",
        "Ask for help",
        "Leave it out"
      ]
    };

    const mediaPracticeOptions = {
      examples: [
        {
          title: "Storm video still",
          text: "A dramatic short-video frame shows downtown flooding during severe weather.",
          tag: "video still",
          image: "img/1.webp",
          searchTerms: ["downtown", "flooding", "weather", "storm", "city", "date", "official"]
        },
        {
          title: "School delay update",
          text: "A local-style community post shares a winter weather school update.",
          tag: "social post",
          image: "img/2.webp",
          searchTerms: ["Riverside", "school", "delay", "closure", "January", "official"]
        },
        {
          title: "Science Night flyer",
          text: "A school event poster announces a family science night.",
          tag: "flyer",
          image: "img/3.webp",
          searchTerms: ["Riverdale", "Middle", "School", "Science", "Night", "date", "official"]
        },
        {
          title: "Laptop giveaway",
          text: "A promotional-looking post claims free laptops are available for students.",
          tag: "promotion",
          image: "img/4.webp",
          searchTerms: ["Community", "Tech", "Access", "Program", "free", "laptops", "students"]
        },
        {
          title: "Weather forecast graphic",
          text: "A polished forecast-style graphic predicts strong spring storms.",
          tag: "graphic",
          image: "img/5.webp",
          searchTerms: ["severe", "weather", "outlook", "spring", "forecast", "meteorologist", "date"]
        },
        {
          title: "Trail sighting post",
          text: "A social-style post reports a possible mountain lion sighting near local trails.",
          tag: "community post",
          image: "img/6.webp",
          searchTerms: ["Riverside", "mountain", "lion", "sighting", "trails", "Parks", "Wildlife"]
        }
      ],
      clues: [
        "official school or organization is named",
        "account is not official",
        "contact or website is shown",
        "no clear way to verify the account",
        "date and time are clear",
        "date or time is missing",
        "location is specific",
        "location is vague",
        "post could be old or from somewhere else",
        "image shows only one moment",
        "photo is blurry or hard to inspect",
        "image does not prove the full claim",
        "graphic looks very polished",
        "video/photo could be from another place",
        "asks people to share quickly",
        "offer sounds too good to be true",
        "uses pressure like limited time",
        "says possible or not confirmed",
        "claim should be checked with an official source"
      ],
      checks: [
        "search for original source",
        "reverse image search",
        "compare trusted sources",
        "choose strong search terms",
        "skip the AI Overview",
        "open the source link",
        "check who posted it",
        "look for date/context",
        "look for an AI label",
        "check the linked evidence",
        "read beyond the caption",
        "ask who benefits from sharing it",
        "wait before sharing"
      ],
      actions: [
        "Use only if a real source confirms it",
        "Do not share or use it yet",
        "Replace it with a stronger source",
        "Ask a teacher or adult to help verify it"
      ]
    };

    function toggleVisualPracticeChip(kind, group, value, button) {
      const state = visualPracticeState[kind];
      if (!state || !button) return;

      const now = Date.now();
      const lastClick = Number(button.dataset.lastVisualClick || 0);
      if (now - lastClick < 350) return;
      button.dataset.lastVisualClick = String(now);
      button.classList.add("click-locked");
      setTimeout(() => button.classList.remove("click-locked"), 260);

      if (Array.isArray(state[group])) {
        const current = state[group];
        const index = current.indexOf(value);
        if (index >= 0) {
          current.splice(index, 1);
          button.classList.remove("selected");
        } else {
          current.push(value);
          button.classList.add("selected");
        }
      } else {
        state[group] = value;
        const section = button.closest(".visual-choice-section");
        if (section) {
          section.querySelectorAll(".visual-chip, .media-example-card").forEach(chip => chip.classList.remove("selected"));
        }
        button.classList.add("selected");

        if (kind === "media" && group === "example") {
          state.query = "";
          state.sourceChoice = "";
          state.sourceChoices = [];
          setTimeout(() => {
            const input = document.getElementById("mediaSearchQueryInput");
            if (input) input.value = "";
            const helper = document.getElementById("mediaQueryHelper");
            if (helper) helper.innerHTML = renderMediaQueryHelperButtons();
            document.querySelectorAll(".media-source-choice").forEach(btn => btn.classList.remove("selected"));
            updateMediaCrossCheckState();
          }, 0);
        }
      }

      updateVisualPracticeState(kind);
    }

    function visualChipButtons(kind, group, values) {
      return values.map(value => `
        <button type="button" class="visual-chip" onclick='toggleVisualPracticeChip("${kind}", "${group}", ${JSON.stringify(value)}, this)'>${escapeHtml(typeof value === "string" ? value : value.title)}</button>
      `).join("");
    }


    function renderSourceCheckGuidance(kind = "claim") {
      const searchExamples = kind === "media"
        ? ["original image source", "who posted this first", "topic + date + source", "image claim + reliable source"]
        : ["claim keywords + reliable source", "topic + official source", "statistic + source + date", "quote + person + source"];

      return `
        <div class="source-check-guidance">
          <strong>How to check another source</strong>
          <p class="small-note">Do not just search the whole sentence. Pull out the most important words: who, what, where, date, number, or topic.</p>

          <div class="source-check-guidance-grid">
            <div class="source-check-mini-card">
              <strong>1. Pick search terms</strong>
              <p class="small-note">Use 2–5 important words, not the entire AI answer or caption.</p>
            </div>
            <div class="source-check-mini-card">
              <strong>2. Open a real source</strong>
              <p class="small-note">Look for an article, official page, encyclopedia, library database, or trusted organization.</p>
            </div>
            <div class="source-check-mini-card">
              <strong>3. Compare details</strong>
              <p class="small-note">Check whether the date, number, quote, image, or claim matches.</p>
            </div>
          </div>

          <div class="search-query-examples">
            ${searchExamples.map(example => `<span class="search-query-chip">${escapeHtml(example)}</span>`).join("")}
          </div>

          <div class="source-check-warning">
            <strong>Important:</strong>
            <p class="small-note">AI Overviews can be useful for getting started, but they do not count as your second source. Click through to a real source and check the information there.</p>
          </div>
        </div>
      `;
    }


    function renderClaimCheckingPractice() {
      const area = document.getElementById("activityArea");
      visualPracticeState.claim = { scenario: "", signals: [], checks: [], decision: "" };

      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="visual-practice-card">
          <h3>Claim-Checking Practice</h3>
          <p>Choose a claim type, select clues that make it worth checking, and choose verification steps.</p>
          <p class="small-note">Use the choices below to build a plan for checking the claim before you trust it.</p>

          ${renderSourceCheckGuidance("claim")}

          <div class="visual-choice-section">
            <strong>1. Choose a claim to check</strong>
            <p class="small-note">Pick one example claim type.</p>
            <div class="visual-chip-grid">
              ${visualChipButtons("claim", "scenario", claimPracticeOptions.scenarios)}
            </div>
          </div>

          <div class="visual-choice-section">
            <strong>2. What makes this claim need checking?</strong>
            <p class="small-note">Select at least two clues.</p>
            <div class="visual-chip-grid">
              ${visualChipButtons("claim", "signals", claimPracticeOptions.signals)}
            </div>
          </div>

          <div class="visual-choice-section">
            <strong>3. What should you do before trusting it?</strong>
            <p class="small-note">Select at least two checking steps.</p>
            <div class="visual-chip-grid">
              ${visualChipButtons("claim", "checks", claimPracticeOptions.checks)}
            </div>
          </div>

          <div class="visual-choice-section">
            <strong>4. What is the safest next move?</strong>
            <p class="small-note">Choose one decision.</p>
            <div class="visual-chip-grid">
              ${visualChipButtons("claim", "decision", claimPracticeOptions.decisions)}
            </div>
          </div>

          <div id="claimPracticeSummary" class="visual-summary-box">
            <strong>Your checking plan</strong>
            <p class="small-note">Selections will appear here.</p>
          </div>

          <div class="button-row">
            <button type="button" id="claimPracticeCompleteButton" onclick="completeStudentVisualPracticeModule('can-you-trust-it', 'claim')" disabled>Complete Practice Module</button>
            <button type="button" class="secondary-btn" onclick="renderClaimCheckingPractice()">Reset</button>
          </div>

          <div id="claimPracticeStatus" class="visual-practice-status bad">Choose one claim, at least two clues, at least two checks, and one decision.</div>
          <div id="quizFeedback" class="feedback hidden"></div>
        </div>
      `;
    }


    function openMediaFullViewer(imageSrc, title, text) {
      let viewer = document.getElementById("mediaFullViewer");
      if (!viewer) {
        viewer = document.createElement("div");
        viewer.id = "mediaFullViewer";
        viewer.className = "media-full-viewer-backdrop hidden";
        viewer.innerHTML = `
          <div class="media-full-viewer-dialog" role="dialog" aria-modal="true" aria-labelledby="mediaFullViewerTitle">
            <div class="media-full-viewer-header">
              <div>
                <h3 id="mediaFullViewerTitle">Media example</h3>
                <p id="mediaFullViewerText" class="small-note"></p>
              </div>
              <button type="button" class="media-full-viewer-close" onclick="closeMediaFullViewer()" aria-label="Close full image view">×</button>
            </div>
            <img id="mediaFullViewerImage" class="media-full-viewer-image" src="" alt="">
            <div class="media-full-viewer-note">
              <strong>Look closely before choosing clues.</strong>
              <p class="small-note">Check text, source details, date/time, image quality, and whether there is enough context to trust or share it.</p>
            </div>
          </div>
        `;
        viewer.addEventListener("click", event => {
          if (event.target.id === "mediaFullViewer") closeMediaFullViewer();
        });
        document.body.appendChild(viewer);
      }

      document.getElementById("mediaFullViewerTitle").textContent = title || "Media example";
      document.getElementById("mediaFullViewerText").textContent = text || "";
      const image = document.getElementById("mediaFullViewerImage");
      image.src = imageSrc;
      image.alt = title || "Full-size media example";
      viewer.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      const closeButton = viewer.querySelector(".media-full-viewer-close");
      if (closeButton) closeButton.focus();
    }

    function closeMediaFullViewer() {
      const viewer = document.getElementById("mediaFullViewer");
      if (viewer) viewer.classList.add("hidden");
      document.body.style.overflow = "";
    }

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMediaFullViewer();
    });



    function renderMediaClueCategories() {
      const categories = [
        {
          title: "Who posted it?",
          note: "Look at the account, page, or organization.",
          clues: [
            "official school or organization is named",
            "account is not official",
            "contact or website is shown",
            "no clear way to verify the account"
          ]
        },
        {
          title: "When and where?",
          note: "Check dates, times, locations, and context.",
          clues: [
            "date and time are clear",
            "date or time is missing",
            "location is specific",
            "location is vague",
            "post could be old or from somewhere else"
          ]
        },
        {
          title: "Image or video",
          note: "Ask what the picture actually proves.",
          clues: [
            "image shows only one moment",
            "photo is blurry or hard to inspect",
            "image does not prove the full claim",
            "graphic looks very polished",
            "video/photo could be from another place"
          ]
        },
        {
          title: "Words and claim",
          note: "Notice the wording, pressure, and uncertainty.",
          clues: [
            "asks people to share quickly",
            "offer sounds too good to be true",
            "uses pressure like limited time",
            "says possible or not confirmed",
            "claim should be checked with an official source"
          ]
        }
      ];

      return `
        <div class="media-clue-category-grid">
          ${categories.map(category => `
            <div class="media-clue-category">
              <h4>${escapeHtml(category.title)}</h4>
              <p class="small-note">${escapeHtml(category.note)}</p>
              <div class="visual-chip-grid">
                ${visualChipButtons("media", "clues", category.clues)}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }



    const mediaSourceChoices = [
      "official school or organization page",
      "local news or public agency page",
      "library database or encyclopedia",
      "original post, image, or video",
      "weather, parks, or public safety agency",
      "trusted local organization page"
    ];

    function getSelectedMediaExample() {
      const selected = visualPracticeState.media.example;
      if (!selected) return null;
      return mediaPracticeOptions.examples.find(example => example.title === selected.title) || selected;
    }

    function getMediaQueryTerms() {
      const selected = getSelectedMediaExample();
      if (selected?.searchTerms?.length) return selected.searchTerms;
      return ["official", "date", "location", "source", "organization", "news"];
    }

    function addMediaQueryTerm(term) {
      const input = document.getElementById("mediaSearchQueryInput");
      if (!input) return;
      const current = input.value.trim();
      const parts = current ? current.split(/\s+/) : [];
      const alreadyUsed = parts.some(part => part.toLowerCase() === term.toLowerCase());
      if (!alreadyUsed) {
        input.value = current ? `${current} ${term}` : term;
      }
      updateMediaCrossCheckState();
    }

    function selectMediaSourceChoice(choice, button) {
      const state = visualPracticeState.media;
      if (!Array.isArray(state.sourceChoices)) state.sourceChoices = [];

      const index = state.sourceChoices.indexOf(choice);
      if (index >= 0) {
        state.sourceChoices.splice(index, 1);
        button.classList.remove("selected");
      } else {
        state.sourceChoices.push(choice);
        button.classList.add("selected");
      }

      state.sourceChoice = state.sourceChoices.join(", ");
      updateMediaCrossCheckState();
    }

    function updateMediaCrossCheckState() {
      const input = document.getElementById("mediaSearchQueryInput");
      const preview = document.getElementById("mediaQueryPreview");
      if (!input || !preview) return;

      visualPracticeState.media.query = input.value.trim();

      const query = visualPracticeState.media.query || "Type a specific search query.";
      const source = visualPracticeState.media.sourceChoice || "Choose one or more real sources to open after searching.";

      preview.innerHTML = `
        <strong>Your cross-check plan</strong>
        <code>${escapeHtml(query)}</code>
        <p class="small-note"><strong>Next clicks:</strong> ${escapeHtml(source)}</p>
      `;

      updateVisualPracticeState("media");
    }


    function renderMediaQueryHelperButtons() {
      return `
        <span class="media-query-helper-label">Helpful words from the selected example:</span>
        ${getMediaQueryTerms().map(term => `<button type="button" onclick='addMediaQueryTerm(${JSON.stringify(term)})'>${escapeHtml(term)}</button>`).join("")}
      `;
    }


    function renderMediaCrossCheckBuilder() {
      return `
        <div class="media-crosscheck-card">
          <h4>3. Build a real cross-check</h4>
          <p class="small-note">A search result summary is not enough. Write search terms you could use, then choose a real source to open.</p>

          <div class="media-ai-overview-warning">
            <strong>AI Overview does not count as checking.</strong>
            <p class="small-note">It can summarize the web, but it is not the original source. To check, open a real page and compare the details there.</p>
          </div>

          <div class="media-crosscheck-grid">
            <div class="media-crosscheck-field">
              <strong>Write a search query</strong>
              <p class="small-note">Use 2–6 important words from the selected example: topic, place, date, organization, or claim.</p>
              <input id="mediaSearchQueryInput" oninput="updateMediaCrossCheckState()" placeholder="Example: Riverside school delay January official">
              <div id="mediaQueryHelper" class="media-query-helper">
                ${renderMediaQueryHelperButtons()}
              </div>
            </div>

            <div class="media-crosscheck-field">
              <strong>Where would you click?</strong>
              <p class="small-note">Choose one or more real sources. The AI Overview is not a source.</p>
              <div class="media-source-choice-grid">
                ${mediaSourceChoices.map(choice => `<button type="button" class="media-source-choice" onclick='selectMediaSourceChoice(${JSON.stringify(choice)}, this)'>${escapeHtml(choice)}</button>`).join("")}
              </div>
            </div>

            <div class="media-crosscheck-field full">
              <div id="mediaQueryPreview" class="media-query-preview">
                <strong>Your cross-check plan</strong>
                <code>Type a specific search query.</code>
                <p class="small-note"><strong>Next clicks:</strong> Choose one or more real sources to open after searching.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }


    function renderMediaReliabilityPractice() {
      const area = document.getElementById("activityArea");
      visualPracticeState.media = { example: "", clues: [], checks: [], action: "", query: "", sourceChoice: "", sourceChoices: [] };

      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="visual-practice-card">
          <h3>Media Evidence Practice</h3>
          <p>Look closely at each concrete media example. Then choose clues, checking steps, and a safe next move.</p>

          ${renderSourceCheckGuidance("media")}

          <div class="visual-choice-section">
            <strong>1. Choose a media example</strong>
            <p class="small-note">Select one image or post to analyze.</p>
            <div class="media-example-grid">
              ${mediaPracticeOptions.examples.map(example => `
                <button type="button" class="media-example-card" onclick='toggleVisualPracticeChip("media", "example", ${JSON.stringify(example)}, this)'>
                  <span class="media-example-image-button" onclick='event.stopPropagation(); openMediaFullViewer(${JSON.stringify(example.image)}, ${JSON.stringify(example.title)}, ${JSON.stringify(example.text)})'>
                    <img class="media-example-thumb" src="${escapeHtml(example.image)}" alt="${escapeHtml(example.title)}">
                  </span>
                  <div class="media-example-label-row">
                    <strong>${escapeHtml(example.title)}</strong>
                    <span class="media-example-tag">${escapeHtml(example.tag || "media")}</span>
                  </div>
                  <p class="small-note">${escapeHtml(example.text)}</p>
                  <div class="media-full-view-row">
                    <span class="media-full-view-link">View full image</span>
                  </div>
                </button>
              `).join("")}
            </div>
          </div>

          <div class="visual-choice-section">
            <strong>2. What clues would make you slow down?</strong>
            <p class="small-note">Select at least three clues. Use the categories to look across source, context, image, and claim details.</p>
            ${renderMediaClueCategories()}
          </div>

          <div class="visual-choice-section">
            ${renderMediaCrossCheckBuilder()}
          </div>

          <div class="visual-choice-section">
            <strong>4. What is your decision after checking?</strong>
            <p class="small-note">Choose what you would do before using or sharing this media.</p>
            <div class="visual-chip-grid">
              ${visualChipButtons("media", "action", mediaPracticeOptions.actions)}
            </div>
          </div>

          <div id="mediaPracticeSummary" class="visual-summary-box">
            <strong>Your media-checking plan</strong>
            <p class="small-note">Selections will appear here.</p>
          </div>

          <div class="button-row">
            <button type="button" id="mediaPracticeCompleteButton" onclick="completeStudentVisualPracticeModule('media-literacy', 'media')" disabled>Complete Practice Module</button>
            <button type="button" class="secondary-btn" onclick="renderMediaReliabilityPractice()">Reset</button>
          </div>

          <div id="mediaPracticeStatus" class="visual-practice-status bad">Choose one example, at least two clues, at least two checks, and one next step.</div>
          <div id="quizFeedback" class="feedback hidden"></div>
        </div>
      `;
    }

    function updateVisualPracticeState(kind) {
      const state = visualPracticeState[kind];
      const summary = document.getElementById(`${kind}PracticeSummary`);
      const status = document.getElementById(`${kind}PracticeStatus`);
      const button = document.getElementById(`${kind}PracticeCompleteButton`);
      if (!state || !summary || !status || !button) return;

      const scenario = kind === "claim" ? state.scenario : (state.example?.title || "");
      const signals = kind === "claim" ? state.signals : state.clues;
      const checks = state.checks;
      const decision = kind === "claim" ? state.decision : state.action;
      const mediaQuery = state.query || "";
      const mediaSourceChoice = state.sourceChoice || "";
      const mediaSourceChoicesSelected = Array.isArray(state.sourceChoices) ? state.sourceChoices : (mediaSourceChoice ? [mediaSourceChoice] : []);

      summary.innerHTML = kind === "media"
        ? `
          <strong>Your media-checking plan</strong>
          <ul>
            <li><strong>Example:</strong> ${escapeHtml(scenario || "Choose one.")}</li>
            <li><strong>Slow-down clues:</strong> ${escapeHtml(signals.length ? signals.join(", ") : "Choose at least three.")}</li>
            <li><strong>Search query:</strong> ${escapeHtml(mediaQuery || "Write a specific search query.")}</li>
            <li><strong>Next clicks:</strong> ${escapeHtml(mediaSourceChoice || "Choose one or more real sources to open.")}</li>
            <li><strong>Decision:</strong> ${escapeHtml(decision || "Choose what you would do before using or sharing it.")}</li>
          </ul>
        `
        : `
          <strong>Your checking plan</strong>
          <ul>
            <li><strong>Example:</strong> ${escapeHtml(scenario || "Choose one.")}</li>
            <li><strong>Slow-down clues:</strong> ${escapeHtml(signals.length ? signals.join(", ") : "Choose at least two.")}</li>
            <li><strong>Checks:</strong> ${escapeHtml(checks.length ? checks.join(", ") : "Choose at least two.")}</li>
            <li><strong>Decision:</strong> ${escapeHtml(decision || "Choose what you would do before using or sharing it.")}</li>
          </ul>
        `;

      const requiredSignals = kind === "media" ? 3 : 2;
      const hasRealSource = kind !== "media" || mediaSourceChoicesSelected.length >= 1;
      const queryTerms = mediaQuery.split(/\s+/).filter(Boolean);
      const hasSpecificQuery = kind !== "media" || (queryTerms.length >= 2 && queryTerms.length <= 10);
      const ready = kind === "media"
        ? Boolean(scenario) && signals.length >= requiredSignals && hasSpecificQuery && hasRealSource && Boolean(decision)
        : Boolean(scenario) && signals.length >= requiredSignals && checks.length >= 2 && Boolean(decision);
      button.disabled = !ready;
      status.className = `visual-practice-status ${ready ? "good" : "bad"}`;
      status.textContent = ready
        ? "Ready to complete. The selections show a checking plan."
        : (kind === "claim"
          ? "Choose one claim, at least two clues, at least two checks, and one decision."
          : "Choose one example, at least three clues, write a specific search query, choose at least one real source, and choose one decision.");
    }

    function completeStudentVisualPracticeModule(moduleId, kind) {
      updateVisualPracticeState(kind);
      const button = document.getElementById(`${kind}PracticeCompleteButton`);
      if (button?.disabled) return;

      const feedback = document.getElementById("quizFeedback");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Practice module complete. You made a checking plan without needing a quiz.";
      }

      completeModule(moduleId, 100);
    }


    function renderPracticeCompletionModule(moduleId, isTeacher = false) {
      const area = document.getElementById(isTeacher ? "teacherActivityArea" : "activityArea");
      const config = isTeacher ? teacherPracticeModules[moduleId] : studentPracticeModules[moduleId];
      if (!area || !config) return false;

      const prefix = isTeacher ? "teacher" : "student";
      const buttonFunction = isTeacher ? `completeTeacherPracticeModule("${moduleId}")` : `completeStudentPracticeModule("${moduleId}")`;

      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="practice-completion-card">
          <h3>${escapeHtml(config.title)}</h3>
          <p>${escapeHtml(config.intro)}</p>
          <p class="small-note">Complete each box with a short, specific response. This replaces the quick quiz for this module.</p>

          <div class="practice-completion-grid">
            ${config.fields.map((field, index) => practiceFieldHtml(prefix, field, index)).join("")}
          </div>

          <div class="practice-mini-output">
            <strong>Completion requirement</strong>
            <p class="small-note">Use short, specific phrases. One-word answers will not unlock completion.</p>
          </div>

          <div class="button-row">
            <button type="button" id="${prefix}PracticeCompleteButton" onclick='${buttonFunction}' disabled>Complete Practice Module</button>
            <button type="button" class="secondary-btn" onclick="clearPracticeCompletion('${prefix}')">Clear</button>
          </div>

          <div id="${prefix}PracticeStatus" class="practice-evidence-status">Complete all three boxes to unlock the module.</div>
          <div id="${isTeacher ? "teacherQuizFeedback" : "quizFeedback"}" class="feedback hidden"></div>
        </div>
      `;

      updatePracticeCompletionState(prefix);
      return true;
    }

    function getPracticeFieldValues(prefix) {
      return [0, 1, 2].map(index => document.getElementById(`${prefix}PracticeField${index}`)?.value.trim() || "");
    }

    function updatePracticeCompletionState(prefix) {
      const values = getPracticeFieldValues(prefix);
      const status = document.getElementById(`${prefix}PracticeStatus`);
      const button = document.getElementById(`${prefix}PracticeCompleteButton`);
      const enoughDetail = values.every(value => value.length >= 18);
      const totalDetail = values.join(" ").length >= 75;
      const ready = enoughDetail && totalDetail;

      if (button) button.disabled = !ready;

      if (status) {
        if (ready) {
          status.className = "practice-evidence-status good";
          status.textContent = "Ready to complete. You added enough detail to show your thinking.";
        } else {
          status.className = "practice-evidence-status bad";
          status.textContent = "Add a little more detail in each box. Short phrases are fine, but one-word answers will not unlock completion.";
        }
      }
    }

    function clearPracticeCompletion(prefix) {
      [0, 1, 2].forEach(index => {
        const field = document.getElementById(`${prefix}PracticeField${index}`);
        if (field) field.value = "";
      });
      updatePracticeCompletionState(prefix);
    }

    function completeStudentPracticeModule(moduleId) {
      updatePracticeCompletionState("student");
      const button = document.getElementById("studentPracticeCompleteButton");
      if (button?.disabled) return;

      const feedback = document.getElementById("quizFeedback");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Practice module complete. You produced evidence of your thinking.";
      }

      completeModule(moduleId, 100);
    }

    function completeTeacherPracticeModule(moduleId) {
      updatePracticeCompletionState("teacher");
      const button = document.getElementById("teacherPracticeCompleteButton");
      if (button?.disabled) return;

      const feedback = document.getElementById("teacherQuizFeedback");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.className = "feedback correct";
        feedback.innerHTML = "Teacher practice module complete. You produced usable classroom planning evidence.";
      }

      completeTeacherModule(moduleId, 100);
    }



