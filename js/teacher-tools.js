    const teacherToolResourceHtml = `
      <div class="directions-generator">
        <div class="teacher-note">
          <strong>AI Directions Generator</strong>
          <p class="small-note">Use this to create short, paste-ready AI directions. Click common options, add details only where needed, then generate student-facing and teacher-facing directions.</p><p class="small-note">Successful use of AI disclosure statements depends on a classroom culture that values transparency, reflection, and responsible AI use. Teachers should clearly communicate when and how AI may be used for a specific assignment or activity.</p>
        </div>

        <div class="disclosure-formula-box">
          <strong>Suggested disclosure formula:</strong>
          <span class="formula-line">Tool/link + Specific Use + Prompt(s) + How the Output Was Used</span>
        </div>

        <div class="disclosure-example-box">
          <strong>Recommended format</strong>
          <code>I acknowledge the use of [AI system(s) and link] to [specific use of generative artificial intelligence]. The prompts used include [list of prompts]. The output from these prompts was used to [explain use].</code>
        </div>

        <div class="citation-guidance-box">
          <strong>MLA / APA note:</strong> AI disclosure statements are not the same as formal citations. Teachers may also require students to cite AI-generated content using an approved citation format. If citation is required, give students the exact MLA or APA format you expect.
        </div>

        <div class="level-mini-guide">
          <h4>1. Choose the AI-use level</h4>
          <div class="directions-level-buttons" role="group" aria-label="Choose AI use level">
            <button type="button" class="level-select-card selected" data-level="0" onclick="selectAiDirectionLevel('0')">
              <strong>Level 0</strong><span>No AI Use</span>
            </button>
            <button type="button" class="level-select-card" data-level="1" onclick="selectAiDirectionLevel('1')">
              <strong>Level 1</strong><span>Planning</span>
            </button>
            <button type="button" class="level-select-card" data-level="2" onclick="selectAiDirectionLevel('2')">
              <strong>Level 2</strong><span>Editing</span>
            </button>
            <button type="button" class="level-select-card" data-level="3" onclick="selectAiDirectionLevel('3')">
              <strong>Level 3</strong><span>Defined Task</span>
            </button>
            <button type="button" class="level-select-card" data-level="4" onclick="selectAiDirectionLevel('4')">
              <strong>Level 4</strong><span>Supported Co-Use</span>
            </button>
          </div>
          <input id="dirLevel" type="hidden" value="0">
        </div>

        <div class="directions-grid">
          <div class="directions-field">
            <strong>Assignment name</strong>
            <input id="dirAssignmentName" type="text" placeholder="Example: Renewable Energy Opinion Paragraph">
          </div>

          <div class="directions-field">
            <strong>Required documentation</strong>
            <select id="dirDocumentation">
              <option value="none">No AI documentation required</option>
              <option value="disclosure">AI disclosure statement required</option>
              <option value="citation">AI disclosure and citation required</option>
              <option value="prompt-history">Disclosure plus prompt/chat history required</option>
              <option value="reflection">Disclosure plus short reflection required</option>
            </select>
          </div>

          <div class="directions-field full">
            <strong>Click what AI may help with</strong>
            <div class="directions-chip-group" data-target="dirAllowed">
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Brainstorming ideas')">Brainstorming ideas</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Creating an outline')">Creating an outline</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Organizing notes')">Organizing notes</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Generating study questions')">Study questions</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Giving feedback on clarity')">Feedback on clarity</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Editing grammar or mechanics')">Grammar/mechanics</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Creating examples for review')">Examples for review</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Checking for missing perspectives')">Missing perspectives</button>
            </div>
            <textarea id="dirAllowed" placeholder="Selected options will appear here. You can also type your own."></textarea>
          </div>

          <div class="directions-field full">
            <strong>Click what AI may not do</strong>
            <div class="directions-chip-group" data-target="dirNotAllowed">
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Write the final answer')">Write final answer</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Replace your own thinking')">Replace thinking</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Create fake or unchecked sources')">Fake/unchecked sources</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Complete the assignment for you')">Complete assignment</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Add new ideas that are not your own')">Add new ideas</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Use private or personal information')">Use private info</button>
            </div>
            <textarea id="dirNotAllowed" placeholder="Selected options will appear here. You can also type your own."></textarea>
          </div>

          <div class="directions-field full">
            <strong>Click how students will show understanding</strong>
            <div class="directions-chip-group" data-target="dirUnderstanding">
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'explain their thinking in a short reflection')">Short reflection</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'show source checks')">Source checks</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'compare a draft to the final version')">Draft comparison</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'answer conference questions')">Conference questions</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'identify what they changed after AI feedback')">Revision notes</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'explain which claims they verified')">Verified claims</button>
            </div>
            <input id="dirUnderstanding" type="text" placeholder="Selected options will appear here. You can also type your own.">
          </div>
        </div>

        <div class="button-row">
          <button type="button" onclick="generateAiDirections()">Generate Directions</button>
          <button type="button" class="secondary-btn" onclick="copyStudentDirections()">Copy Student Directions</button>
          <button type="button" class="secondary-btn" onclick="copyTeacherDirections()">Copy Teacher Note</button>
          <button type="button" class="secondary-btn" onclick="clearAiDirections()">Clear</button>
        </div>

        <div class="directions-output-grid">
          <div>
            <label for="studentDirectionsOutput"><strong>Student-Facing Directions</strong></label>
            <textarea id="studentDirectionsOutput" class="directions-output" readonly placeholder="Generated student directions will appear here."></textarea>
          </div>

          <div>
            <label for="teacherDirectionsOutput"><strong>Teacher-Facing Note</strong></label>
            <textarea id="teacherDirectionsOutput" class="directions-output" readonly placeholder="Generated teacher note will appear here."></textarea>
          </div>
        </div>

        <div id="directionsCopyStatus" class="copy-status hidden">Copied.</div>
      </div>
    `;







    function selectAiDirectionLevel(level) {
      const levelInput = document.getElementById("dirLevel");
      if (levelInput) levelInput.value = level;

      document.querySelectorAll(".level-select-card").forEach(button => {
        button.classList.toggle("selected", button.dataset.level === level);
      });

      const documentation = document.getElementById("dirDocumentation");
      if (documentation) {
        if (level === "0") documentation.value = "none";
        if (level === "1" || level === "2") documentation.value = "disclosure";
        if (level === "3") documentation.value = "prompt-history";
        if (level === "4") documentation.value = "citation";
      }
    }

    function toggleDirectionsChip(button, value) {
      const group = button.closest(".directions-chip-group");
      if (!group) return;

      const targetId = group.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;

      button.classList.toggle("selected");

      const selectedValues = Array.from(group.querySelectorAll(".option-chip.selected"))
        .map(chip => {
          const match = chip.getAttribute("onclick").match(/toggleDirectionsChip\\(this, '([^']+)'\\)/);
          return match ? match[1] : chip.textContent.trim();
        });

      target.value = selectedValues.join("; ");
    }


    function getAiLevelInfo(level) {
      const levels = {
        "0": {
          title: "Level 0 — No AI Use",
          student: "AI may not be used for this assignment.",
          teacher: "This assignment is set as Level 0 because it requires independent evidence of student understanding."
        },
        "1": {
          title: "Level 1 — AI for Planning",
          student: "AI may be used for brainstorming, planning, or organizing ideas only. AI-generated content should not appear in the final submission.",
          teacher: "This assignment allows AI for early process support only. Final content should remain student-created."
        },
        "2": {
          title: "Level 2 — AI for Editing",
          student: "AI may be used to give feedback or improve clarity after you have created your own work. AI may not add new ideas or write the assignment for you.",
          teacher: "This assignment allows AI editing support after students produce original work."
        },
        "3": {
          title: "Level 3 — AI for Defined Task Support",
          student: "AI may be used only for the specific task your teacher names. You are responsible for checking, revising, and explaining the final work.",
          teacher: "This assignment allows AI for a defined part of the task. Students need human oversight, verification, and documentation."
        },
        "4": {
          title: "Level 4 — AI as Supported Co-Use",
          student: "AI may be used throughout the process as a support tool. You remain responsible for the final work, accuracy, sources, and explanation of your choices.",
          teacher: "This assignment allows broad AI support with human oversight, documentation, and verification."
        }
      };

      return levels[level] || levels["0"];
    }

    function getDocumentationText(value) {
      const docs = {
        none: {
          student: "No AI documentation is required because AI is not being used or documented for this task.",
          teacher: "Documentation: none required."
        },
        disclosure: {
          student: "You must include an AI disclosure statement explaining what tool you used, what prompt(s) you used, and how the output supported your work.",
          teacher: "Documentation: AI disclosure statement required."
        },
        citation: {
          student: "You must include an AI disclosure statement. Your teacher may also require you to cite AI-generated content using an approved format, such as MLA or APA.",
          teacher: "Documentation: disclosure and citation required. Provide students with the exact approved citation format you expect, such as MLA or APA."
        },
        "prompt-history": {
          student: "You must include an AI disclosure statement and be prepared to share portions of an AI chat transcript or prompt history if requested. Your teacher may also require formal citation.",
          teacher: "Documentation: disclosure plus prompt/chat history required. State whether formal citation is also expected."
        },
        reflection: {
          student: "You must include an AI disclosure statement and a short reflection explaining how you used the output. Your teacher may also require formal citation.",
          teacher: "Documentation: disclosure plus student reflection required. State whether formal citation is also expected."
        }
      };

      return docs[value] || docs.none;
    }

    function generateAiDirections() {
      const assignment = document.getElementById("dirAssignmentName").value.trim() || "this assignment";
      const level = document.getElementById("dirLevel").value;
      const allowed = document.getElementById("dirAllowed").value.trim();
      const notAllowed = document.getElementById("dirNotAllowed").value.trim();
      const documentation = document.getElementById("dirDocumentation").value;
      const understanding = document.getElementById("dirUnderstanding").value.trim();

      const levelInfo = getAiLevelInfo(level);
      const docInfo = getDocumentationText(documentation);

      const studentLines = [
        `${assignment}`,
        `${levelInfo.title}`,
        "",
        levelInfo.student,
        allowed ? `AI may help with: ${allowed}` : "",
        notAllowed ? `AI may not: ${notAllowed}` : "",
        docInfo.student,
        understanding ? `Be prepared to show your understanding by: ${understanding}.` : "Be prepared to explain your thinking and final work.",
        "",
        "Disclosure format when required: I acknowledge the use of [AI system(s) and link] to [specific use]. The prompts used include [list of prompts]. The output from these prompts was used to [explain use].",
        "Remember: AI can support your learning, but it does not replace your thinking."
      ].filter(Boolean);

      const teacherLines = [
        `Teacher note for: ${assignment}`,
        `${levelInfo.title}`,
        "",
        levelInfo.teacher,
        allowed ? `Allowed AI uses: ${allowed}` : "Allowed AI uses: not specified.",
        notAllowed ? `Not allowed: ${notAllowed}` : "Not allowed: not specified.",
        docInfo.teacher,
        understanding ? `Evidence of understanding: ${understanding}.` : "Evidence of understanding: teacher should specify how students will explain or demonstrate their work.",
        "",
        "Recommended disclosure format: I acknowledge the use of [AI system(s) and link] to [specific use]. The prompts used include [list of prompts]. The output from these prompts was used to [explain use].",
        "Citation guidance: AI disclosure statements are not the same as formal citations. If citation is required, tell students the approved format, such as MLA or APA.",
        "Check before assigning: Does this protect the learning target, original thinking, privacy, and academic integrity?"
      ];

      document.getElementById("studentDirectionsOutput").value = studentLines.join("\n");
      document.getElementById("teacherDirectionsOutput").value = teacherLines.join("\n");
      document.getElementById("directionsCopyStatus").classList.add("hidden");
    }

    function copyStudentDirections() {
      const output = document.getElementById("studentDirectionsOutput");
      if (!output.value.trim()) generateAiDirections();
      copyTextFromElement("studentDirectionsOutput", "Student directions copied.");
    }

    function copyTeacherDirections() {
      const output = document.getElementById("teacherDirectionsOutput");
      if (!output.value.trim()) generateAiDirections();
      copyTextFromElement("teacherDirectionsOutput", "Teacher note copied.");
    }

    function copyTextFromElement(id, message) {
      const output = document.getElementById(id);
      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("directionsCopyStatus");
        status.textContent = message;
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("directionsCopyStatus");
        status.textContent = message;
        status.classList.remove("hidden");
      });
    }

    function clearAiDirections() {
      ["dirAssignmentName", "dirAllowed", "dirNotAllowed", "dirUnderstanding", "studentDirectionsOutput", "teacherDirectionsOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      const level = document.getElementById("dirLevel");
      if (level) level.value = "0";

      document.querySelectorAll(".level-select-card").forEach(button => {
        button.classList.toggle("selected", button.dataset.level === "0");
      });

      document.querySelectorAll(".option-chip").forEach(button => {
        button.classList.remove("selected");
      });

      const documentation = document.getElementById("dirDocumentation");
      if (documentation) documentation.value = "none";

      const status = document.getElementById("directionsCopyStatus");
      if (status) status.classList.add("hidden");
    }


    
    const teacherDiscussionResourceHtml = `
      <div class="critical-tool">
        <div class="teacher-note">
          <strong>Critical Thinking Process Builder</strong>
          <p class="small-note">Use this to turn AI use into a thinking routine. The goal is to interrupt “prompt, receive, accept, move on” and require students to question, verify, revise, and reflect.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Choose a Critical Thinking Routine</h4>
          <div class="critical-routine-grid">
            <div class="critical-routine-card">
              <h4>Push-Back Protocol</h4>
              <p>Students challenge AI output by asking for evidence, assumptions, and alternative perspectives.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">Arguments</span>
                <span class="critical-skill-pill">Assumptions</span>
                <span class="critical-skill-pill">Clarifying Questions</span>
              </div>
            </div>

            <div class="critical-routine-card">
              <h4>Hallucination Detective</h4>
              <p>Students find questionable claims, fake citations, wrong dates, or unsupported statistics.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">Source Credibility</span>
                <span class="critical-skill-pill">Fallacies</span>
              </div>
            </div>

            <div class="critical-routine-card">
              <h4>AI Output Audit</h4>
              <p>Students score AI output using a simple rubric for evidence, assumptions, accuracy, and missing context.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">All Six CT Skills</span>
              </div>
            </div>

            <div class="critical-routine-card">
              <h4>Socratic Questioning</h4>
              <p>Students keep asking follow-up questions instead of accepting the first polished answer.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">Clarifying Questions</span>
                <span class="critical-skill-pill">Arguments</span>
                <span class="critical-skill-pill">Assumptions</span>
              </div>
            </div>

            <div class="critical-routine-card">
              <h4>Funhouse Mirror</h4>
              <p>Students compare AI’s explanation of a familiar topic to expert/class knowledge and identify distortions.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">Ambiguity</span>
                <span class="critical-skill-pill">Assumptions</span>
                <span class="critical-skill-pill">Fallacies</span>
              </div>
            </div>

            <div class="critical-routine-card">
              <h4>Assignment Redesign</h4>
              <p>Teachers revise a task so students must show process, judgment, verification, and original thinking.</p>
              <div class="critical-skills">
                <span class="critical-skill-pill">Pedagogy</span>
                <span class="critical-skill-pill">All Six CT Skills</span>
              </div>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Generate a Classroom Critical Thinking Routine</h4>

          <div class="critical-builder-grid">
            <div class="critical-builder-field">
              <strong>Routine</strong>
              <select id="criticalRoutine">
                <option value="pushback">Push-Back Protocol</option>
                <option value="detective">Hallucination Detective</option>
                <option value="audit">AI Output Audit</option>
                <option value="socratic">Socratic Questioning</option>
                <option value="mirror">Funhouse Mirror</option>
                <option value="redesign">Assignment Redesign</option>
              </select>
            </div>

            <div class="critical-builder-field">
              <strong>Time</strong>
              <select id="criticalTime">
                <option value="10 minutes">10 minutes</option>
                <option value="15 minutes">15 minutes</option>
                <option value="20 minutes">20 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="full class">Full class period</option>
              </select>
            </div>

            <div class="critical-builder-field">
              <strong>Topic / Assignment</strong>
              <input id="criticalTopic" type="text" placeholder="Example: renewable energy claims, historical causes, essay draft, science explanation">
            </div>

            <div class="critical-builder-field">
              <strong>Student Level</strong>
              <input id="criticalLevel" type="text" placeholder="Example: Grade 6, Grade 8, high school, staff PD">
            </div>

            <div class="critical-builder-field full">
              <strong>What students should produce</strong>
              <textarea id="criticalProduct" placeholder="Example: annotated AI response, claim-check table, revised prompt, source comparison, short reflection"></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateCriticalThinkingRoutine()">Generate Routine</button>
            <button type="button" class="secondary-btn" onclick="copyCriticalRoutine()">Copy Routine</button>
            <button type="button" class="secondary-btn" onclick="clearCriticalRoutine()">Clear</button>
          </div>

          <label for="criticalRoutineOutput"><strong>Copy/Paste Critical Thinking Routine</strong></label>
          <textarea id="criticalRoutineOutput" class="critical-output" readonly placeholder="Generated critical thinking routine will appear here."></textarea>
          <div id="criticalCopyStatus" class="copy-status hidden">Copied.</div>
        </div>

        <div class="teacher-planner-card">
          <h4>Quick Critical Thinking Check</h4>
          <p class="small-note">Use these six checks with almost any AI-supported activity.</p>
          <div class="critical-mini-rubric">
            <div class="critical-rubric-item"><strong>Analyze Arguments</strong><p>What claims are being made?</p></div>
            <div class="critical-rubric-item"><strong>Judge Sources</strong><p>What evidence or sources support the claims?</p></div>
            <div class="critical-rubric-item"><strong>Handle Ambiguity</strong><p>What is unclear, incomplete, or uncertain?</p></div>
            <div class="critical-rubric-item"><strong>Evaluate Assumptions</strong><p>What is the AI taking for granted?</p></div>
            <div class="critical-rubric-item"><strong>Recognize Fallacies</strong><p>Where is the reasoning weak or misleading?</p></div>
            <div class="critical-rubric-item"><strong>Ask Clarifying Questions</strong><p>What follow-up question should come next?</p></div>
          </div>
        </div>
      </div>
    `;



    function getCriticalRoutineInfo(value) {
      const routines = {
        pushback: {
          title: "Push-Back Protocol",
          steps: [
            "Prompt AI with a question connected to the topic.",
            "Identify the main claims in the AI response.",
            "Ask: What evidence supports each claim?",
            "Ask: What assumptions are being made?",
            "Ask: What alternative perspectives or exceptions are missing?"
          ],
          reflection: "What changed after you pushed back against the first answer?"
        },
        detective: {
          title: "Hallucination Detective",
          steps: [
            "Give students an AI-generated response or let them generate one.",
            "Highlight claims, citations, dates, statistics, or names that need checking.",
            "Verify suspicious claims with reliable sources.",
            "Label each issue: accurate, unsupported, misleading, or false.",
            "Discuss which errors sounded convincing and why."
          ],
          reflection: "Which verification habit would have caught the most serious problem?"
        },
        audit: {
          title: "AI Output Audit",
          steps: [
            "Give students an AI-generated response connected to the assignment.",
            "Score it for claims, evidence, source credibility, assumptions, fallacies, and missing context.",
            "Compare scores with a partner or group.",
            "Identify the strongest and weakest parts of the AI output.",
            "Revise the output or write a note explaining what should not be trusted."
          ],
          reflection: "What did the AI do well, and where did human judgment matter most?"
        },
        socratic: {
          title: "Socratic Questioning with AI",
          steps: [
            "Ask AI a substantive question about the topic.",
            "Do not accept the first answer.",
            "Ask: What evidence supports this?",
            "Ask: What assumptions underlie this answer?",
            "Ask: What counterarguments or perspectives are missing?",
            "Track how the answer changes after each question."
          ],
          reflection: "Which follow-up question improved the answer the most?"
        },
        mirror: {
          title: "Funhouse Mirror",
          steps: [
            "Choose a topic the class already knows something about.",
            "Ask AI to explain or summarize the topic.",
            "Compare the AI output to class notes, sources, or expert knowledge.",
            "Identify what is accurate, distorted, oversimplified, or missing.",
            "Explain why the distortions matter."
          ],
          reflection: "How could AI mislead someone who is new to this topic?"
        },
        redesign: {
          title: "Assignment Redesign",
          steps: [
            "Choose one existing assignment.",
            "Break it into steps or components.",
            "Decide where AI could support learning and where it should be restricted.",
            "Add process evidence: notes, source checks, reflection, draft history, or conference questions.",
            "Write transparent AI directions for the assignment."
          ],
          reflection: "What did you change to protect authentic learning?"
        }
      };

      return routines[value] || routines.pushback;
    }

    function generateCriticalThinkingRoutine() {
      const routineValue = document.getElementById("criticalRoutine").value;
      const time = document.getElementById("criticalTime").value;
      const topic = document.getElementById("criticalTopic").value.trim() || "the assigned topic";
      const level = document.getElementById("criticalLevel").value.trim() || "students";
      const product = document.getElementById("criticalProduct").value.trim() || "a short written reflection or evidence of thinking";

      const routine = getCriticalRoutineInfo(routineValue);

      const output = [
        `${routine.title}`,
        `Time: ${time}`,
        `Audience: ${level}`,
        `Topic/assignment: ${topic}`,
        "",
        "Purpose:",
        "Use AI as a starting point for questioning, verification, and original thinking—not as an answer machine.",
        "",
        "Steps:",
        ...routine.steps.map((step, index) => `${index + 1}. ${step}`),
        "",
        `Student product: ${product}`,
        "",
        "Reflection prompt:",
        routine.reflection,
        "",
        "Teacher reminder:",
        "The critical thinking happens in the pushback, comparison, verification, and reflection. Do not skip the debrief."
      ].join("\n");

      document.getElementById("criticalRoutineOutput").value = output;
      document.getElementById("criticalCopyStatus").classList.add("hidden");
    }

    function copyCriticalRoutine() {
      const output = document.getElementById("criticalRoutineOutput");
      if (!output.value.trim()) generateCriticalThinkingRoutine();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("criticalCopyStatus");
        status.textContent = "Critical thinking routine copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("criticalCopyStatus");
        status.textContent = "Critical thinking routine copied.";
        status.classList.remove("hidden");
      });
    }

    function clearCriticalRoutine() {
      ["criticalTopic", "criticalLevel", "criticalProduct", "criticalRoutineOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      const routine = document.getElementById("criticalRoutine");
      if (routine) routine.value = "pushback";

      const time = document.getElementById("criticalTime");
      if (time) time.value = "10 minutes";

      const status = document.getElementById("criticalCopyStatus");
      if (status) status.classList.add("hidden");
    }



    const teacherPromptBuilderResourceHtml = `
      <div class="teacher-prompt-builder">
        <div class="teacher-note">
          <strong>Teacher Prompt Builder</strong>
          <p class="small-note">Use this to create prompts for planning, differentiation, feedback, assessment design, or critical thinking activities. These prompts are for teacher planning and professional use, not for replacing teacher judgment.</p>
        </div>

        <div class="level-mini-guide">
          <h4>1. Choose the purpose</h4>
          <div class="prompt-purpose-buttons" role="group" aria-label="Choose teacher prompt purpose">
            <button type="button" class="prompt-purpose-btn selected" data-purpose="lesson" onclick="selectTeacherPromptPurpose('lesson')">
              <strong>Lesson Planning</strong><span>Plan or revise instruction.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="differentiation" onclick="selectTeacherPromptPurpose('differentiation')">
              <strong>Differentiation</strong><span>Adapt support or challenge.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="feedback" onclick="selectTeacherPromptPurpose('feedback')">
              <strong>Feedback</strong><span>Improve feedback language.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="assessment" onclick="selectTeacherPromptPurpose('assessment')">
              <strong>Assessment</strong><span>Create checks for understanding.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="critical" onclick="selectTeacherPromptPurpose('critical')">
              <strong>Critical Thinking</strong><span>Push students to question AI.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="communication" onclick="selectTeacherPromptPurpose('communication')">
              <strong>Communication</strong><span>Draft family/student language.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="rubric" onclick="selectTeacherPromptPurpose('rubric')">
              <strong>Rubric Support</strong><span>Clarify criteria or levels.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="discussion" onclick="selectTeacherPromptPurpose('discussion')">
              <strong>Discussion Questions</strong><span>Generate prompts for thinking.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="accessibility" onclick="selectTeacherPromptPurpose('accessibility')">
              <strong>Accessibility</strong><span>Make directions easier to access.</span>
            </button>
            <button type="button" class="prompt-purpose-btn" data-purpose="extension" onclick="selectTeacherPromptPurpose('extension')">
              <strong>Extension</strong><span>Add challenge or enrichment.</span>
            </button>
          </div>
          <input id="teacherPromptPurpose" type="hidden" value="lesson">
        </div>

        <div class="teacher-prompt-grid">
          <div class="teacher-prompt-field">
            <strong>Grade / class</strong>
            <input id="teacherPromptGrade" type="text" placeholder="Example: Grade 7 Social Studies">
          </div>

          <div class="teacher-prompt-field">
            <strong>Topic / assignment</strong>
            <input id="teacherPromptTopic" type="text" placeholder="Example: evaluating claims about renewable energy">
          </div>

          <div class="teacher-prompt-field">
            <strong>Learning goal</strong>
            <textarea id="teacherPromptGoal" placeholder="What should students understand, practice, or be able to do?"></textarea>
          </div>

          <div class="teacher-prompt-field">
            <strong>Constraints / guardrails</strong>
            <textarea id="teacherPromptGuardrails" placeholder="Example: keep Lexile accessible, no student data, no final answers, include verification step"></textarea>
          </div>

          <div class="teacher-prompt-field full">
            <strong>Click helpful guardrails</strong>
            <div class="directions-chip-group" data-target="teacherPromptGuardrails">
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not include student names or private information')">No private info</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not write final student answers')">No final answers</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Include a verification or source-checking step')">Verification step</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Use student-friendly language')">Student-friendly</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Offer options at multiple support levels')">Multiple support levels</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Ask clarifying questions before giving a final answer')">Ask clarifying questions</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Use age-appropriate language')">Age-appropriate language</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Keep the teacher voice and style')">Keep teacher voice</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Include accessibility options')">Accessibility options</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Avoid sensitive student data')">Avoid sensitive data</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Explain the reasoning or decision path')">Explain reasoning</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'State assumptions clearly')">State assumptions</button>
              <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Keep responses concise and classroom-ready')">Keep it concise</button>
            </div>
          </div>
        </div>

        <div class="button-row">
          <button type="button" onclick="generateTeacherPrompt()">Generate Teacher Prompt</button>
          <button type="button" class="secondary-btn" onclick="copyTeacherPrompt()">Copy Prompt</button>
          <button type="button" class="secondary-btn" onclick="clearTeacherPromptBuilder()">Clear</button>
        </div>

        <label for="teacherPromptOutput"><strong>Copy/Paste Teacher Prompt</strong></label>
        <textarea id="teacherPromptOutput" class="teacher-prompt-output" readonly placeholder="Generated teacher prompt will appear here."></textarea>
        <div id="teacherPromptCopyStatus" class="copy-status hidden">Copied.</div>
      </div>
    `;



    const teacherFollowUpRoutineResourceHtml = `
      <div class="followup-builder">
        <div class="teacher-note">
          <strong>AI Follow-Up Routine</strong>
          <p class="small-note">Use this when AI gives a response that is close, but not quite right. Instead of asking AI to redo everything, tell it what to keep and request one or two focused changes at a time.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>The Keep / Change / Check Routine</h4>
          <div class="followup-routine-steps">
            <div class="followup-step-card">
              <span class="followup-step-number">1</span>
              <strong>Keep</strong>
              <p>Name what is working. This prevents AI from throwing away useful parts.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">2</span>
              <strong>Change</strong>
              <p>Ask for only one or two specific changes. Avoid broad “make it better” prompts.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">3</span>
              <strong>Check</strong>
              <p>Review the new output for accuracy, tone, age fit, and alignment with your goal.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">4</span>
              <strong>Repeat</strong>
              <p>Use another focused follow-up instead of accepting the first revision.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Build a Follow-Up Prompt</h4>

          <div class="followup-grid">
            <div class="followup-field">
              <strong>What are you working on?</strong>
              <input id="followupContext" type="text" placeholder="Example: a Grade 6 writing mini-lesson">
            </div>

            <div class="followup-field">
              <strong>Audience / tone</strong>
              <input id="followupAudience" type="text" placeholder="Example: student-friendly, concise, middle school">
            </div>

            <div class="followup-field full">
              <strong>What should AI keep?</strong>
              <div class="directions-chip-group" data-target="followupKeep">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the structure')">Structure</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the examples')">Examples</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the student-friendly tone')">Student-friendly tone</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the main idea')">Main idea</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the sequence of steps')">Sequence of steps</button>
              </div>
              <textarea id="followupKeep" placeholder="Example: Keep the overall structure and the student-friendly tone."></textarea>
            </div>

            <div class="followup-field full">
              <strong>What should AI change? Pick one or two.</strong>
              <div class="directions-chip-group" data-target="followupChange">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'make it shorter')">Make shorter</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'make the language easier')">Easier language</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'add a check for understanding')">Add check</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'add a verification step')">Add verification</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'remove anything that sounds like AI is doing the student thinking')">Protect thinking</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'make it more specific to the learning goal')">More specific</button>
              </div>
              <textarea id="followupChange" placeholder="Example: Make it shorter and add one check for understanding."></textarea>
            </div>

            <div class="followup-field full">
              <strong>What should AI avoid?</strong>
              <div class="directions-chip-group" data-target="followupAvoid">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not rewrite everything')">Do not rewrite everything</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not add new sections')">No new sections</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not make it longer')">Do not make longer</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not include private student information')">No private info</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not write final student answers')">No final answers</button>
              </div>
              <textarea id="followupAvoid" placeholder="Example: Do not rewrite everything. Do not make it longer."></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateFollowUpPrompt()">Generate Follow-Up Prompt</button>
            <button type="button" class="secondary-btn" onclick="copyFollowUpPrompt()">Copy Prompt</button>
            <button type="button" class="secondary-btn" onclick="clearFollowUpPrompt()">Clear</button>
          </div>

          <label for="followupOutput"><strong>Copy/Paste Follow-Up Prompt</strong></label>
          <textarea id="followupOutput" class="followup-output" readonly placeholder="Generated follow-up prompt will appear here."></textarea>
          <div id="followupCopyStatus" class="copy-status hidden">Copied.</div>
        </div>

        <div class="teacher-planner-card">
          <h4>Reusable follow-up stems</h4>
          <div class="critical-mini-rubric">
            <div class="critical-rubric-item"><strong>Keep + Change</strong><p>Keep ____. Change only ____.</p></div>
            <div class="critical-rubric-item"><strong>One change</strong><p>Revise only the ____ section. Do not change the rest.</p></div>
            <div class="critical-rubric-item"><strong>Age fit</strong><p>Keep the idea, but make the language appropriate for ____.</p></div>
            <div class="critical-rubric-item"><strong>Learning ownership</strong><p>Revise this so students still have to do the thinking.</p></div>
            <div class="critical-rubric-item"><strong>Check accuracy</strong><p>Identify claims I should verify before using this.</p></div>
            <div class="critical-rubric-item"><strong>Stop expanding</strong><p>Do not add new content. Only tighten and clarify.</p></div>
          </div>
        </div>
      </div>
    `;








    const teacherGoogleToolsResourceHtml = `
      <div class="google-tool-map">
        <div class="teacher-note">
          <strong>Gemini, NotebookLM, and Gems</strong>
          <p class="small-note">For a Google school, start with the tools most likely to fit the district ecosystem. This is a tool map, not an approved-tools list. Always follow district settings and student privacy rules.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Start with the Google ecosystem</h4>
          <div class="google-tool-grid">
            <div class="google-tool-card">
              <strong>Gemini</strong>
              <p>General AI assistant for planning, brainstorming, revising teacher-created text, simplifying directions, drafting examples, and generating questions.</p>
              <p class="small-note"><strong>Use when:</strong> the task is general and you can verify the output.</p>
            </div>

            <div class="google-tool-card featured">
              <strong>NotebookLM</strong>
              <p>Source-grounded thinking partner for working with specific materials: policies, readings, lesson documents, research packets, staff guidance, or class resources.</p>
              <p class="small-note"><strong>Use when:</strong> the answer should stay grounded in selected sources.</p>
            </div>

            <div class="google-tool-card">
              <strong>Gems</strong>
              <p>Reusable custom Gemini helpers with instructions for repeated tasks, such as a directions simplifier, rubric question generator, or source-checking coach.</p>
              <p class="small-note"><strong>Use when:</strong> you repeat the same type of task often.</p>
            </div>

            <div class="google-tool-card caution">
              <strong>Google AI Overview</strong>
              <p>Search feature that can orient users to a topic. Treat it as a starting point, not as a final source.</p>
              <p class="small-note"><strong>Use when:</strong> you need leads, then click and check the original sources.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Which Google AI tool fits the task?</h4>
          <p class="small-note">Choose the closest task. The recommendation will appear below.</p>

          <div class="tool-choice-row">
            <button type="button" class="tool-choice-btn selected" data-google-tool="planning" onclick="selectGoogleToolUse('planning')">
              Lesson planning or directions
            </button>
            <button type="button" class="tool-choice-btn" data-google-tool="sources" onclick="selectGoogleToolUse('sources')">
              Work from specific sources
            </button>
            <button type="button" class="tool-choice-btn" data-google-tool="repeat" onclick="selectGoogleToolUse('repeat')">
              Repeated classroom task
            </button>
            <button type="button" class="tool-choice-btn" data-google-tool="search" onclick="selectGoogleToolUse('search')">
              Quick search orientation
            </button>
          </div>

          <div class="citation-guidance-box" id="googleToolRecommendation">
            <strong>Suggested tool:</strong> Gemini. Use it for general planning or drafting, then review, revise, and verify before using anything with students.
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Gem starter builder</h4>
          <p class="small-note">Use this to draft reusable instructions for a Gem. Keep the Gem focused and avoid student PII.</p>

          <div class="student-tool-grid">
            <div class="student-tool-field">
              <strong>Gem purpose</strong>
              <input id="gemPurpose" type="text" placeholder="Example: simplify assignment directions">
            </div>

            <div class="student-tool-field">
              <strong>Audience</strong>
              <input id="gemAudience" type="text" placeholder="Example: Grade 6 students">
            </div>

            <div class="student-tool-field">
              <strong>Output format</strong>
              <input id="gemFormat" type="text" placeholder="Example: short numbered steps with one example">
            </div>

            <div class="student-tool-field">
              <strong>Guardrail</strong>
              <input id="gemGuardrail" type="text" placeholder="Example: do not add new requirements or private student information">
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateGemStarter()">Generate Gem Instructions</button>
            <button type="button" class="secondary-btn" onclick="copyGemStarter()">Copy Gem Instructions</button>
            <button type="button" class="secondary-btn" onclick="clearGemStarter()">Clear</button>
          </div>

          <label for="gemStarterOutput"><strong>Copy/Paste Gem Instructions</strong></label>
          <textarea id="gemStarterOutput" class="gem-output" readonly></textarea>
        </div>

        <div class="teacher-planner-card">
          <h4>Other tools teachers may hear about</h4>
          <p class="small-note">Teachers may hear about ChatGPT, Claude, Copilot, Canva, Adobe Express, MagicSchool, SchoolAI, Brisk, or Diffit. These should be treated as outside-tool categories unless your district has approved them.</p>
          <div class="privacy-split-grid">
            <div class="privacy-card ok">
              <strong>Good question</strong>
              <ul>
                <li>Is this tool approved for school use?</li>
                <li>What student data does it collect?</li>
                <li>Can I complete the task with a district-approved Google tool instead?</li>
              </ul>
            </div>
            <div class="privacy-card no">
              <strong>Do not assume</strong>
              <ul>
                <li>Do not enter student PII into unapproved tools.</li>
                <li>Do not treat any AI output as automatically accurate.</li>
                <li>Do not skip disclosure when it is required.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="citation-guidance-box">
          <strong>Source note:</strong> Based on current Google Education guidance for Gemini, NotebookLM, Gems, and Classroom integrations. Availability depends on district license, admin settings, and age/access rules.
        </div>
      </div>
    `;


    
    const teacherAiDisclosureResourceHtml = `
      <div class="teacher-use-log-tool">
        <div class="teacher-note">
          <strong>Teacher AI Disclosure / Transparency Note</strong>
          <p class="small-note">Use this when AI helped you create or revise an assignment, handout, slide deck, example, rubric, or other classroom material. Paste the brief note somewhere visible on the assignment or resource, such as the bottom of a Google Doc, the first or last slide, the assignment directions, or a Google Classroom post.</p>
        </div>

        <div class="human-center-note">
          <strong>Keep it brief</strong>
          <p>The note should not over-explain. It should simply tell students that AI supported part of the preparation and that the teacher reviewed the final material.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Build a brief teacher transparency note</h4>

          <div class="use-log-grid">
            <div class="student-tool-field">
              <strong>AI helped with</strong>
              <select id="teacherDisclosureUse">
                <option value="planning this assignment">planning this assignment</option>
                <option value="drafting these directions">drafting these directions</option>
                <option value="organizing this material">organizing this material</option>
                <option value="revising this handout">revising this handout</option>
                <option value="creating example questions">creating example questions</option>
                <option value="clarifying language">clarifying language</option>
              </select>
            </div>

            <div class="student-tool-field">
              <strong>Final review</strong>
              <select id="teacherDisclosureReview">
                <option value="reviewed and revised">reviewed and revised</option>
                <option value="checked and edited">checked and edited</option>
                <option value="adapted for this class">adapted for this class</option>
              </select>
            </div>
          </div>

          <div class="checkline"><input type="checkbox" id="teacherDisclosureCheck1"><label for="teacherDisclosureCheck1">No student PII or sensitive student information was used.</label></div>
          <div class="checkline"><input type="checkbox" id="teacherDisclosureCheck2"><label for="teacherDisclosureCheck2">I reviewed the final material before sharing it with students.</label></div>

          <div class="button-row">
            <button type="button" onclick="generateTeacherAiDisclosure()">Generate Note</button>
            <button type="button" class="secondary-btn" onclick="copyTeacherAiDisclosure()">Copy Note</button>
            <button type="button" class="secondary-btn" onclick="clearTeacherAiDisclosure()">Clear</button>
          </div>

          <label for="teacherAiDisclosureOutput"><strong>Copy/Paste Transparency Note</strong></label>
          <textarea id="teacherAiDisclosureOutput" class="teacher-log-output" readonly></textarea>

          <div class="citation-guidance-box">
            <strong>Suggested placement:</strong> Paste this note directly on the assignment or classroom material where AI helped shape the final product.
          </div>
        </div>
      </div>
    `;

    const teacherLaunchKitResourceHtml = `
      <div class="launch-kit-tool">
        <div class="teacher-note">
          <strong>Classroom Launch Kit</strong>
          <p class="small-note">Use this when introducing AI expectations to students. The goal is transparency, consistency, and keeping the human at the center.</p>
        </div>

        <div class="human-center-note">
          <strong>Human at the center</strong>
          <p>AI can support teaching and learning, but human judgment stays central. Teachers make instructional decisions. Students do the learning. AI feedback should never replace the teacher-student relationship.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Teacher readiness selector</h4>
          <p class="small-note">Start by naming your current readiness level. This is not a grade. It helps teachers choose a reasonable first step.</p>

          <div class="readiness-grid" role="group" aria-label="Teacher AI readiness level">
            <button type="button" class="readiness-card selected" data-readiness="exploring" onclick="selectTeacherReadiness('exploring')">
              <strong>Exploring</strong>
              <span>I am learning what AI can and cannot do. I need clear guardrails and examples.</span>
            </button>
            <button type="button" class="readiness-card" data-readiness="cautious" onclick="selectTeacherReadiness('cautious')">
              <strong>Cautious implementer</strong>
              <span>I may use AI for planning or drafts, but I want privacy, accuracy, and transparency checks.</span>
            </button>
            <button type="button" class="readiness-card" data-readiness="guided" onclick="selectTeacherReadiness('guided')">
              <strong>Guided classroom use</strong>
              <span>I am ready to let students use AI in limited, teacher-defined ways with documentation.</span>
            </button>
            <button type="button" class="readiness-card" data-readiness="confident" onclick="selectTeacherReadiness('confident')">
              <strong>Confident designer</strong>
              <span>I can design AI-aware assignments, teach verification, and adjust support based on student needs.</span>
            </button>
          </div>

          <input id="teacherReadinessLevel" type="hidden" value="exploring">

          <div class="citation-guidance-box" id="teacherReadinessGuidance">
            <strong>Suggested starting point:</strong> Use AI for your own planning only. Do not require students to use AI yet. Practice verification, privacy checks, and disclosure language first.
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Required privacy checkpoint: context, not PII</h4>
          <p class="small-note">Before using AI for planning, examples, directions, feedback, or student support, separate useful context from identifiable or sensitive information.</p>
          <div class="privacy-split-grid">
            <div class="privacy-card ok">
              <strong>Context AI can use</strong>
              <ul>
                <li>Grade band, subject, lesson goal</li>
                <li>General reading level or support need</li>
                <li>Rubric criteria or skill target</li>
                <li>Anonymous sample text</li>
                <li>Desired tone, format, or length</li>
              </ul>
            </div>
            <div class="privacy-card no">
              <strong>Do not enter PII or records</strong>
              <ul>
                <li>Names, initials, student ID, email, address, phone</li>
                <li>Faces, voices, photos, exact location, birthdate</li>
                <li>Grades, IEP/504, health, behavior, discipline, family details</li>
                <li>Any details that make a student identifiable</li>
              </ul>
            </div>
          </div>
                  <div class="citation-guidance-box">
            <strong>Why this matters:</strong> Data privacy is about control over personal information. Student data can include identifiers, online behavior, photos, voice, location, records, and other details that can identify or profile a student.
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>10-minute student launch script</h4>
          <div class="checklist-grid">
            <div class="checklist-card"><strong>1. Name the purpose</strong><p>“We are learning how to use AI responsibly, not how to let AI do our work.”</p></div>
            <div class="checklist-card"><strong>2. Explain the class rule</strong><p>Tell students whether AI is not allowed, allowed for planning, allowed for revision, or allowed for a defined support task.</p></div>
            <div class="checklist-card"><strong>3. Model verification</strong><p>Show that Google AI Overview and AI chatbot answers are starting points. Students must check linked or original sources.</p></div>
            <div class="checklist-card"><strong>4. Require disclosure</strong><p>Tell students when and how they should disclose AI use, prompts, and how AI output shaped the final work.</p></div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Teacher transparency statement</h4>
          <p class="small-note">Use or adapt this statement when AI helped you prepare materials, examples, directions, or feedback.</p>
          <div class="citation-guidance-box">
            <strong>Sample:</strong> I may use AI to help plan, organize, or clarify instructional materials. I review and revise anything AI helps create. I do not use AI as a replacement for professional judgment, student privacy, or the human feedback students deserve.
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Should I use AI for student feedback?</h4>
          <div class="checklist-grid">
            <div class="checklist-card"><strong>Reasonable uses</strong><p>Drafting rubric-aligned comment stems, checking tone, generating conference questions, or identifying patterns in anonymous sample work.</p></div>
            <div class="checklist-card"><strong>Use caution</strong><p>Feedback on individual student work should be reviewed, personalized, and owned by the teacher before students see it.</p></div>
            <div class="checklist-card"><strong>Avoid</strong><p>Uploading private student information, IEP/504 details, behavior records, grades, sensitive situations, or identifiable student work into unapproved tools.</p></div>
            <div class="checklist-card"><strong>Center the student</strong><p>Feedback should help the student know what to do next. It should sound like the teacher, fit the assignment, and protect dignity.</p></div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Launch checklist</h4>
          <div class="checkline"><input type="checkbox" id="launchCheck1"><label for="launchCheck1">I have named my current AI readiness level.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck2"><label for="launchCheck2">I have named the AI-use level for the assignment.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck3"><label for="launchCheck3">I have told students what AI may and may not do.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck4"><label for="launchCheck4">I have removed PII and sensitive student data from prompts.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck5"><label for="launchCheck5">I have explained how students should verify claims, including Google AI Overview claims.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck6"><label for="launchCheck6">I have explained disclosure expectations.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck7"><label for="launchCheck7">I have considered whether AI feedback is appropriate, private, transparent, and teacher-reviewed.</label></div>
          <div class="checkline"><input type="checkbox" id="launchCheck8"><label for="launchCheck8">I have planned a human check-in: conference, discussion, reflection, or process question.</label></div>

          <div class="student-tool-grid">
            <div class="student-tool-field">
              <strong>Class / assignment</strong>
              <input id="launchClass" type="text" placeholder="Example: Grade 7 media literacy paragraph">
            </div>
            <div class="student-tool-field">
              <strong>AI-use level for students</strong>
              <input id="launchLevel" type="text" placeholder="Example: AI allowed for planning and revision only">
            </div>
            <div class="student-tool-field full">
              <strong>Teacher note</strong>
              <textarea id="launchNote" placeholder="Example: Students must cite original sources and include a brief disclosure statement."></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateLaunchKit()">Generate Launch Note</button>
            <button type="button" class="secondary-btn" onclick="copyLaunchKit()">Copy Launch Note</button>
            <button type="button" class="secondary-btn" onclick="clearLaunchKit()">Clear</button>
          </div>

          <label for="launchKitOutput"><strong>Copy/Paste Launch Note</strong></label>
          <textarea id="launchKitOutput" class="launch-output readiness-output" readonly></textarea>
        </div>
      </div>
    `;


    const teacherEcoBadgeResourceHtml = `
      <div class="eco-tool">
        <div class="teacher-note">
          <strong>AI Eco-Awareness Badge: Teacher Resource</strong>
          <p class="small-note">Use this to help staff connect AI literacy with environmental literacy, student privacy, critical thinking, local data-center decisions, and greenwashing awareness.</p>
        </div>

        <div class="eco-badge-box" id="teacherEcoBadgeStatus">
          <div class="eco-badge-title"><span class="eco-leaf">🌿</span> Teacher Eco-Badge progress</div>
          <p>Answer the four awareness questions below. Score at least 3 out of 4 to earn the badge.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Core teaching points</h4>
          <div class="eco-grid">
            <div class="eco-card">
              <strong>AI impact is real, but complicated</strong>
              <p>Avoid simple myths. Teach students to ask what is being counted: electricity, cooling water, model training, inference, hardware, or local impacts.</p>
            </div>
            <div class="eco-card">
              <strong>Local context matters</strong>
              <p>For New Hampshire, treat local data-center information as a late-2025 snapshot. The durable lesson is how communities evaluate tradeoffs.</p>
            </div>
            <div class="eco-card">
              <strong>Chromebook-friendly lower-impact use</strong>
              <p>Teach focused prompts, fewer unnecessary generations, text before image/video, and source-first research habits.</p>
            </div>
            <div class="eco-card warning">
              <strong>Greenwashing belongs in the lesson</strong>
              <p>Students should question claims like “green AI,” “water positive,” “net zero,” or “carbon neutral.” Ask what is measured, verified, offset, or omitted.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Eco-friendly AI alternatives for Chromebooks</h4>
          <div class="eco-grid">
            <div class="eco-card good">
              <strong>Use non-generative tools first</strong>
              <p>Search, databases, class notes, citation tools, and teacher-provided resources often solve the task with less compute.</p>
            </div>
            <div class="eco-card good">
              <strong>Use smaller/simpler AI when appropriate</strong>
              <p>For quick search support or summaries, prefer tools that disclose use of smaller or more efficient models when school policy allows.</p>
            </div>
            <div class="eco-card good">
              <strong>Use Ecosia cautiously as an example</strong>
              <p>Ecosia says it generates more renewable energy than its searches and AI queries use. Treat this as a claim to evaluate, not a free pass.</p>
            </div>
            <div class="eco-card caution">
              <strong>Best habit: less waste</strong>
              <p>Do not generate ten versions when two will do. Avoid video generation unless it clearly serves the learning goal.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Eco-Badge check</h4>

          <div class="eco-question">
            <h4>1. Which is the best classroom message?</h4>
            <div class="eco-option-row">
              <button class="eco-option" data-eco-path="teacher" data-eco-question="1" data-eco-value="ban" onclick="selectEcoAnswer('teacher','1','ban','balanced','Not quite. The goal is balanced judgment, not panic or blanket claims.')">AI is always environmentally bad, so ban it.</button>
              <button class="eco-option" data-eco-path="teacher" data-eco-question="1" data-eco-value="balanced" onclick="selectEcoAnswer('teacher','1','balanced','balanced','Correct. AI has impacts, and students should learn to evaluate tradeoffs and reduce waste.')">AI has impacts; evaluate tradeoffs and reduce waste.</button>
            </div>
            <div id="teacherEcoFeedback1"></div>
          </div>

          <div class="eco-question">
            <h4>2. What should students ask about green AI claims?</h4>
            <div class="eco-option-row">
              <button class="eco-option" data-eco-path="teacher" data-eco-question="2" data-eco-value="evidence" onclick="selectEcoAnswer('teacher','2','evidence','evidence','Correct. Ask for measurement, scope, verification, and what is excluded.')">What evidence, scope, and verification support the claim?</button>
              <button class="eco-option" data-eco-path="teacher" data-eco-question="2" data-eco-value="logo" onclick="selectEcoAnswer('teacher','2','logo','evidence','Not quite. A green logo or wording is not evidence.')">Does it use green colors and eco-friendly words?</button>
            </div>
            <div id="teacherEcoFeedback2"></div>
          </div>

          <div class="eco-question">
            <h4>3. What is a Chromebook-friendly lower-impact practice?</h4>
            <div class="eco-option-row">
              <button class="eco-option" data-eco-path="teacher" data-eco-question="3" data-eco-value="focused" onclick="selectEcoAnswer('teacher','3','focused','focused','Correct. Focused text tasks are generally lighter than unnecessary media generation.')">Focused text prompts before image/video generation</button>
              <button class="eco-option" data-eco-path="teacher" data-eco-question="3" data-eco-value="video" onclick="selectEcoAnswer('teacher','3','video','focused','Not quite. Video generation should be reserved for clear learning purposes.')">Use AI video for quick decoration</button>
            </div>
            <div id="teacherEcoFeedback3"></div>
          </div>

          <div class="eco-question">
            <h4>4. How should NH data-center information be framed?</h4>
            <div class="eco-option-row">
              <button class="eco-option" data-eco-path="teacher" data-eco-question="4" data-eco-value="snapshot" onclick="selectEcoAnswer('teacher','4','snapshot','snapshot','Correct. Use it as a dated local snapshot and focus on questions communities should ask.')">As a dated snapshot for local inquiry</button>
              <button class="eco-option" data-eco-path="teacher" data-eco-question="4" data-eco-value="fixed" onclick="selectEcoAnswer('teacher','4','fixed','snapshot','Not quite. Local data-center information can change quickly.')">As permanent information that will not change</button>
            </div>
            <div id="teacherEcoFeedback4"></div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Eco-Awareness Reflection</h4>
          <div class="student-tool-grid">
            <div class="student-tool-field">
              <strong>One lower-impact AI habit to teach</strong>
              <input id="teacherEcoAction" type="text" placeholder="Example: Use focused prompts and avoid unnecessary media generation.">
            </div>
            <div class="student-tool-field">
              <strong>One concern to discuss</strong>
              <input id="teacherEcoConcern" type="text" placeholder="Example: Local data centers can affect water, energy, noise, and community planning.">
            </div>
            <div class="student-tool-field full">
              <strong>One greenwashing question</strong>
              <input id="teacherEcoGreenwash" type="text" placeholder="Example: What did the company measure, and what did it leave out?">
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateEcoReflection('teacher')">Generate Reflection</button>
            <button type="button" class="secondary-btn" onclick="copyEcoReflection('teacher')">Copy Reflection</button>
            <button type="button" class="secondary-btn" onclick="clearEcoReflection('teacher')">Clear</button>
          </div>

          <label for="teacherEcoOutput"><strong>Copy/Paste Eco-Awareness Reflection</strong></label>
          <textarea id="teacherEcoOutput" class="eco-reflection-output" readonly></textarea>
        </div>

        <div class="eco-source-note">
          <strong>Source note:</strong> Adapted from the AI & Water app resources, Google’s AI environmental impact methodology, current reporting on AI/data-center water and energy issues, Ecosia environmental claims, and local data-center inquiry framing.
        </div>
      </div>
    `;

    const teacherBigDataResourceHtml = studentBigDataResourceHtml;

    const teacherUnescoResourceHtml = `
      <div class="unesco-tool">
        <div class="teacher-note">
          <strong>UNESCO-Informed K–12 AI Learner Competencies</strong>
          <p class="small-note">Use this as a quick planning reference when aligning AI lessons, assignments, or discussions across grade bands. It is adapted from UNESCO’s K–12 AI curricula mapping of government-endorsed AI curricula.</p>
        </div>

        <div class="unesco-domain-grid">
          <div class="unesco-domain-card"><strong>AI Basics</strong><p>What is AI?</p></div>
          <div class="unesco-domain-card"><strong>Verification</strong><p>Can I trust AI?</p></div>
          <div class="unesco-domain-card"><strong>Ethics & Rights</strong><p>Is AI ethical?</p></div>
          <div class="unesco-domain-card"><strong>Society & Impact</strong><p>Is AI impactful?</p></div>
          <div class="unesco-domain-card"><strong>Responsible Use</strong><p>When is AI useful?</p></div>
          <div class="unesco-domain-card"><strong>Design & Build</strong><p>How is AI built?</p></div>
        </div>

        <div class="unesco-note">
          <strong>Planning use:</strong> Pick a grade band, then look across the row. A strong lesson usually connects at least two domains, such as AI Basics + Verification, or Responsible Use + Ethics & Rights.
        </div>

        <div class="unesco-filter-row" role="group" aria-label="Filter UNESCO competencies by grade band">
          <button type="button" class="unesco-filter-btn selected" onclick="filterUnescoRows('all', this)">All</button>
          <button type="button" class="unesco-filter-btn" onclick="filterUnescoRows('k2', this)">K–2</button>
          <button type="button" class="unesco-filter-btn" onclick="filterUnescoRows('35', this)">3–5</button>
          <button type="button" class="unesco-filter-btn" onclick="filterUnescoRows('68', this)">6–8</button>
          <button type="button" class="unesco-filter-btn" onclick="filterUnescoRows('912', this)">9–12</button>
        </div>

        <div class="unesco-table-wrap">
          <table class="unesco-table" aria-label="UNESCO-informed K-12 AI learner competencies">
            <thead>
              <tr>
                <th>Grade Band</th>
                <th>AI Basics<br><span class="small-note">What is AI?</span></th>
                <th>Verification<br><span class="small-note">Can I trust AI?</span></th>
                <th>Ethics & Rights<br><span class="small-note">Is AI ethical?</span></th>
                <th>Society & Impact<br><span class="small-note">Is AI impactful?</span></th>
                <th>Responsible Use<br><span class="small-note">When is AI useful?</span></th>
                <th>Design & Build<br><span class="small-note">How is AI built?</span></th>
              </tr>
            </thead>
            <tbody>
              <tr data-grade="k2">
                <td class="grade-band">K–2</td>
                <td>Notice that digital tools can respond, predict, or recommend, and people make them.</td>
                <td>Ask questions when digital content seems strange, confusing, misleading, or possibly untrue.</td>
                <td>Learn that technology should be used safely, kindly, fairly, and responsibly always.</td>
                <td>Notice that technology affects daily life at home, school, and in communities.</td>
                <td>Begin asking for help and not trusting every digital output automatically.</td>
                <td>Notice that people create, test, and improve digital systems over time.</td>
              </tr>
              <tr data-grade="35">
                <td class="grade-band">3–5</td>
                <td>Explain what AI is and is not, and that it uses patterns in data.</td>
                <td>Compare sources and recognize that digital content can be changed or misleading.</td>
                <td>Protect private information and recognize that people remain responsible for technology.</td>
                <td>Describe how AI can help people while also creating problems or unfairness.</td>
                <td>Practice careful, honest, and age-appropriate use of digital tools and information.</td>
                <td>Explore simple rule-based systems, categories, and decision paths in digital tools.</td>
              </tr>
              <tr data-grade="68">
                <td class="grade-band">6–8</td>
                <td>Explain how AI systems use data, rules, and models to make predictions.</td>
                <td>Evaluate credibility, authenticity, and transparency, including manipulated media and misinformation.</td>
                <td>Explain how bias, privacy, access, and fairness affect systems and people.</td>
                <td>Analyze AI’s effects on work, opportunity, environment, and decision-making in society.</td>
                <td>Build judgment about when AI-related outputs should be questioned, limited, or rejected.</td>
                <td>Model how AI systems classify, predict, or respond using simplified activities.</td>
              </tr>
              <tr data-grade="912">
                <td class="grade-band">9–12</td>
                <td>Analyze how training data, design choices, and human decisions shape AI outputs and limits.</td>
                <td>Judge AI-assisted content using evidence, source quality, transparency, and developmental focus of synthetic media.</td>
                <td>Analyze human agency, accountability, intellectual property, and ethical tradeoffs in AI use.</td>
                <td>Evaluate how AI can reshape labor, power, participation, and inequality in society.</td>
                <td>Use AI tools, when permitted, with documentation, verification, disclosure, and reflection.</td>
                <td>Design, test, or critique AI-related systems, prototypes, or responsible workflows.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="citation-guidance-box">
          <strong>Source note:</strong> Adapted from UNESCO’s <em>K–12 AI curricula: A mapping of government-endorsed AI curricula</em>, published 2022.
        </div>
      </div>
    `;



    function generateTeacherBigDataLesson() {
      const grade = document.getElementById("teacherBigDataGrade").value.trim() || "students";
      const focus = document.getElementById("teacherBigDataFocus").value;
      const activityType = document.getElementById("teacherBigDataActivityType").value;
      const time = document.getElementById("teacherBigDataTime").value;

      const output = [
        "Big Data Lesson Starter",
        "",
        `Audience: ${grade}`,
        `Focus: ${focus}`,
        `Time: ${time}`,
        `Activity type: ${activityType}`,
        "",
        "Learning goal:",
        "Students will recognize that everyday digital activities can create data tracks and that collected data can be used to make predictions, recommendations, decisions, or profiles.",
        "",
        "Opening question:",
        "What data might you create during one normal day without noticing?",
        "",
        "Activity:",
        `Use a ${activityType} to have students identify examples of data collection connected to ${focus.toLowerCase()}. Students should name what data might be collected, who might use it, how it could help, and what risk or concern it creates.`,
        "",
        "Discussion prompts:",
        "1. Who is collecting the data?",
        "2. What type of data is being collected?",
        "3. What can be learned from the data?",
        "4. How could the data help?",
        "5. What privacy or fairness concern might exist?",
        "6. What choice could a student make to protect privacy?",
        "",
        "Connection to AI:",
        "AI systems often rely on data and patterns. Understanding big data helps students understand why AI outputs, recommendations, and predictions need to be questioned."
      ].join("\n");

      document.getElementById("teacherBigDataOutput").value = output;
      document.getElementById("teacherBigDataCopyStatus").classList.add("hidden");
    }

    function copyTeacherBigDataLesson() {
      const output = document.getElementById("teacherBigDataOutput");
      if (!output.value.trim()) generateTeacherBigDataLesson();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("teacherBigDataCopyStatus");
        status.textContent = "Big data lesson starter copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("teacherBigDataCopyStatus");
        status.textContent = "Big data lesson starter copied.";
        status.classList.remove("hidden");
      });
    }

    function clearTeacherBigDataLesson() {
      const grade = document.getElementById("teacherBigDataGrade");
      const output = document.getElementById("teacherBigDataOutput");
      if (grade) grade.value = "";
      if (output) output.value = "";

      const focus = document.getElementById("teacherBigDataFocus");
      if (focus) focus.value = "Everyday data tracks";

      const activity = document.getElementById("teacherBigDataActivityType");
      if (activity) activity.value = "discussion";

      const time = document.getElementById("teacherBigDataTime");
      if (time) time.value = "10 minutes";

      const status = document.getElementById("teacherBigDataCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function filterUnescoRows(grade, button) {
      document.querySelectorAll(".unesco-filter-btn").forEach(btn => {
        btn.classList.remove("selected");
      });

      if (button) button.classList.add("selected");

      document.querySelectorAll(".unesco-table tbody tr").forEach(row => {
        row.style.display = (grade === "all" || row.dataset.grade === grade) ? "" : "none";
      });
    }


    function generateFollowUpPrompt() {
      const context = document.getElementById("followupContext").value.trim() || "this teacher resource";
      const audience = document.getElementById("followupAudience").value.trim() || "the intended students or audience";
      const keep = document.getElementById("followupKeep").value.trim() || "the strongest parts of the current response";
      const change = document.getElementById("followupChange").value.trim() || "one or two specific issues";
      const avoid = document.getElementById("followupAvoid").value.trim() || "rewriting everything or adding unnecessary content";

      const prompt = [
        "I want to revise your previous response using a focused Keep / Change / Check routine.",
        "",
        `Context: ${context}`,
        `Audience/tone: ${audience}`,
        "",
        `Keep: ${keep}.`,
        `Change: ${change}.`,
        `Avoid: ${avoid}.`,
        "",
        "Make only the requested changes. Do not rewrite the entire response unless necessary.",
        "After revising, briefly explain what changed and list any claims, examples, or assumptions I should verify before using it."
      ].join("\n");

      document.getElementById("followupOutput").value = prompt;
      document.getElementById("followupCopyStatus").classList.add("hidden");
    }

    function copyFollowUpPrompt() {
      const output = document.getElementById("followupOutput");
      if (!output.value.trim()) generateFollowUpPrompt();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("followupCopyStatus");
        status.textContent = "Follow-up prompt copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("followupCopyStatus");
        status.textContent = "Follow-up prompt copied.";
        status.classList.remove("hidden");
      });
    }

    function clearFollowUpPrompt() {
      ["followupContext", "followupAudience", "followupKeep", "followupChange", "followupAvoid", "followupOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      document.querySelectorAll(".followup-builder .option-chip").forEach(button => {
        button.classList.remove("selected");
      });

      const status = document.getElementById("followupCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function selectTeacherPromptPurpose(purpose) {
      const input = document.getElementById("teacherPromptPurpose");
      if (input) input.value = purpose;

      document.querySelectorAll(".prompt-purpose-btn").forEach(button => {
        button.classList.toggle("selected", button.dataset.purpose === purpose);
      });
    }

    function getTeacherPromptPurposeInfo(purpose) {
      const info = {
        lesson: {
          title: "lesson planning",
          request: "Create a lesson plan or activity sequence that supports the learning goal.",
          output: "Return a short plan with objective, warm-up, activity steps, student task, and exit ticket."
        },
        differentiation: {
          title: "differentiation",
          request: "Suggest ways to adapt this task for students who need support and students who need extension.",
          output: "Return options for scaffolds, challenge extensions, vocabulary support, and checks for understanding."
        },
        feedback: {
          title: "feedback",
          request: "Help me write clear, specific, student-friendly feedback without rewriting the student's work.",
          output: "Return feedback stems, conference questions, and one next-step suggestion."
        },
        assessment: {
          title: "assessment design",
          request: "Create checks for understanding that reveal student thinking and cannot be answered by copying AI output alone.",
          output: "Return quick checks, reflection prompts, and evidence-of-learning options."
        },
        critical: {
          title: "critical thinking with AI",
          request: "Design a short activity where students question, verify, revise, or critique AI output.",
          output: "Return a routine with steps, critical thinking questions, and a reflection prompt."
        },
        communication: {
          title: "communication",
          request: "Draft concise communication for students or families about expectations for this assignment.",
          output: "Return clear language that explains what is allowed, what is not allowed, and how students show understanding."
        }
      };

      return info[purpose] || info.lesson;
    }

    function generateTeacherPrompt() {
      const purpose = document.getElementById("teacherPromptPurpose").value || "lesson";
      const grade = document.getElementById("teacherPromptGrade").value.trim() || "my students";
      const topic = document.getElementById("teacherPromptTopic").value.trim() || "this assignment";
      const goal = document.getElementById("teacherPromptGoal").value.trim() || "the stated learning goal";
      const guardrails = document.getElementById("teacherPromptGuardrails").value.trim() || "protect student privacy, preserve student thinking, and include a verification or reflection step";

      const info = getTeacherPromptPurposeInfo(purpose);

      const prompt = [
        `You are helping me with ${info.title} for ${grade}.`,
        "",
        `Topic or assignment: ${topic}`,
        `Learning goal: ${goal}`,
        "",
        `Task: ${info.request}`,
        "",
        `Guardrails: ${guardrails}.`,
        "Do not include student names, private information, or assumptions about individual students.",
        "Do not replace teacher judgment. Give options I can review and adapt.",
        "Make sure the final suggestion supports authentic learning and student ownership of thinking.",
        "",
        `Output format: ${info.output}`,
        "",
        "End with: 3 questions I should ask myself before using this with students."
      ].join("\n");

      document.getElementById("teacherPromptOutput").value = prompt;
      document.getElementById("teacherPromptCopyStatus").classList.add("hidden");
    }

    function copyTeacherPrompt() {
      const output = document.getElementById("teacherPromptOutput");
      if (!output.value.trim()) generateTeacherPrompt();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("teacherPromptCopyStatus");
        status.textContent = "Teacher prompt copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("teacherPromptCopyStatus");
        status.textContent = "Teacher prompt copied.";
        status.classList.remove("hidden");
      });
    }

    function clearTeacherPromptBuilder() {
      ["teacherPromptGrade", "teacherPromptTopic", "teacherPromptGoal", "teacherPromptGuardrails", "teacherPromptOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      const purpose = document.getElementById("teacherPromptPurpose");
      if (purpose) purpose.value = "lesson";

      document.querySelectorAll(".prompt-purpose-btn").forEach(button => {
        button.classList.toggle("selected", button.dataset.purpose === "lesson");
      });

      document.querySelectorAll(".teacher-prompt-builder .option-chip").forEach(button => {
        button.classList.remove("selected");
      });

      const status = document.getElementById("teacherPromptCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function toggleTeacherResourceCard(resourceId) {
      expandedTeacherResource = expandedTeacherResource === resourceId ? null : resourceId;
      const teacherLegendMount = document.getElementById("teacherAiReadyLegendMount");
      if (teacherLegendMount) teacherLegendMount.innerHTML = renderTeacherAiReadyLegend();

      renderTeacherModuleCards();
    }


