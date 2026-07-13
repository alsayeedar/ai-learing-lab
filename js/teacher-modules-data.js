    const teacherModules = [
      {
        id: "teacher-faculty-ai-guidelines",
        title: "Faculty AI Guidelines",
        shortDescription: "Apply the faculty guidance: AI supports learning, but does not replace thinking.",
        lesson: "Faculty help embed the philosophy that AI supports learning, but does not replace thinking. Teachers model and teach responsible AI use, set clear expectations, protect student data, reinforce academic integrity, and decide when AI use fits the instructional goal, developmental level, assignment type, and individual student needs.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher tells students: AI may help you organize your ideas, but the thinking, choices, and final explanation must still be yours.",
            options: ["Needs Revision", "Aligned", "Not Aligned"],
            answer: "Aligned",
            feedback: "Correct. This reflects the faculty guideline that AI supports learning, but does not replace thinking."
          },
          {
            text: "A teacher designs an assignment where students use AI to get unstuck, then explain what they changed, verified, and decided themselves.",
            options: ["Curious/Self-Directed", "No AI Use", "Not Aligned"],
            answer: "Curious/Self-Directed",
            feedback: "Correct. This supports curiosity, persistence, independence, and productive struggle."
          },
          {
            text: "A teacher reminds students not to enter private information into AI tools and reinforces that AI is not a friend or trusted adult.",
            options: ["Responsible Digital Citizen", "Creative Problem Solver", "Not Aligned"],
            answer: "Responsible Digital Citizen",
            feedback: "Correct. This models safe, ethical, and responsible AI use."
          },
          {
            text: "A teacher requires students to check AI-generated claims with reliable sources before using them in a project.",
            options: ["Critical Thinker", "No Documentation", "Not Aligned"],
            answer: "Critical Thinker",
            feedback: "Correct. Students should question AI results, analyze sources, and verify accuracy."
          },
          {
            text: "A teacher asks students to use AI to explore several possible solutions to a real-world problem, then choose and justify their own design.",
            options: ["Creative Problem Solver", "Academic Dishonesty", "Not Aligned"],
            answer: "Creative Problem Solver",
            feedback: "Correct. AI can help students generate ideas, explore possibilities, and refine solutions while keeping ownership of decisions."
          },
          {
            text: "A teacher allows AI on every assignment without considering grade level, learning goals, assessment type, or individual student needs.",
            options: ["Strategic Use", "Needs Revision", "Aligned"],
            answer: "Needs Revision",
            feedback: "Correct. Teacher discretion means AI expectations should be based on instructional goals, developmental appropriateness, assignment type, and student needs."
          },
          {
            text: "A teacher clearly states when AI is allowed, what documentation is required, and how students will demonstrate understanding.",
            options: ["Strategic and Independent AI Use", "Unclear Practice", "Not Aligned"],
            answer: "Strategic and Independent AI Use",
            feedback: "Correct. This helps students understand when AI enhances learning and when it may interfere with learning."
          }
        ],
        quiz: [
          {
            question: "Which statement best summarizes the faculty AI guideline?",
            options: [
              "AI should replace difficult student thinking.",
              "AI supports learning, but does not replace thinking.",
              "AI should be allowed the same way on every assignment.",
              "AI output does not need to be checked if it sounds correct."
            ],
            answer: 1
          },
          {
            question: "What does teacher discretion mean in AI use?",
            options: [
              "Teachers may decide when, how, or if AI fits the instructional goal and assignment.",
              "Students decide all AI rules independently.",
              "AI should be banned from every task.",
              "AI should be required for every task."
            ],
            answer: 0
          },
          {
            question: "Which teacher practice best supports academic integrity?",
            options: [
              "Let students hide AI use.",
              "Tell students AI-generated facts are always accurate.",
              "Require students to acknowledge AI use when required and verify information.",
              "Grade only whether the final product sounds polished."
            ],
            answer: 2
          }
        ]
      },
      {
        id: "teacher-sau48-ai-stance",
        title: "SAU 48 AI Stance",
        shortDescription: "Understand the district framing for AI, learning, integrity, and student data.",
        lesson: "SAU 48 frames AI as a complement to human intelligence, not a substitute for it. Teacher implementation should protect authentic learning, student data, academic integrity, critical thinking, and transparent use.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher introduces AI as a tool that can support brainstorming and feedback, but emphasizes that students remain responsible for their own thinking.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Aligned",
            feedback: "Correct. This matches the idea that AI should complement, not replace, human intelligence."
          },
          {
            text: "A teacher tells students that AI answers can be used directly if they sound polished.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Not Aligned",
            feedback: "Correct. Students need verification, ownership, and appropriate citation or disclosure when AI is used."
          },
          {
            text: "A teacher allows students to paste private information into an AI tool so the tool can produce more personalized feedback.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Not Aligned",
            feedback: "Correct. Protecting student data and privacy must remain central."
          }
        ],
        quiz: [
          {
            question: "Which statement best matches the SAU 48 AI stance?",
            options: [
              "AI replaces the need for student thinking.",
              "AI should complement human intelligence and enrich authentic learning.",
              "AI outputs do not need to be checked.",
              "AI use should be hidden when it improves the final product."
            ],
            answer: 1
          },
          {
            question: "Which teacher priority best supports responsible implementation?",
            options: [
              "Speed over understanding",
              "Transparency, verification, and academic integrity",
              "Letting each student decide all AI rules",
              "Avoiding discussion of AI completely"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-ai-use-levels",
        title: "Teacher Decision-Making Levels",
        shortDescription: "Practice choosing the right AI-use level for assignments.",
        lesson: "Teachers should clearly identify whether AI is not allowed, allowed for planning, allowed for editing, allowed for a defined task, or allowed as supported co-use. Clear levels reduce confusion and make expectations easier to enforce.",
        activityType: "teacherScenario",
        items: [
          {
            text: "Students must complete an in-class written assessment independently without AI support.",
            options: ["Level 0: No AI", "Level 1: Planning", "Level 2: Editing", "Level 4: Co-Use"],
            answer: "Level 0: No AI",
            feedback: "Correct. Assessments of independent understanding usually require no AI use."
          },
          {
            text: "Students may use AI to brainstorm project topics, but no AI-generated wording may appear in the final product.",
            options: ["Level 0: No AI", "Level 1: Planning", "Level 2: Editing", "Level 3: Defined Task"],
            answer: "Level 1: Planning",
            feedback: "Correct. AI supports idea generation only; final content remains student-created."
          },
          {
            text: "Students write their own draft, then use AI to get feedback on clarity and organization without adding new content.",
            options: ["Level 1: Planning", "Level 2: Editing", "Level 3: Defined Task", "Level 4: Co-Use"],
            answer: "Level 2: Editing",
            feedback: "Correct. AI is used to improve student-created work without generating new content."
          },
          {
            text: "Students are told to use AI to generate two possible counterarguments, then evaluate which is stronger and why.",
            options: ["Level 0: No AI", "Level 1: Planning", "Level 3: Defined Task", "Level 4: Co-Use"],
            answer: "Level 3: Defined Task",
            feedback: "Correct. AI is allowed for a specific teacher-defined part of the task."
          }
        ],
        quiz: [
          {
            question: "Why should teachers name the AI-use level for an assignment?",
            options: [
              "To make expectations clear and reduce confusion",
              "To let students avoid citations",
              "To make all assignments AI-required",
              "To remove teacher judgment"
            ],
            answer: 0
          },
          {
            question: "Which level allows AI for brainstorming but not final submitted AI-generated content?",
            options: [
              "Level 0",
              "Level 1",
              "Level 3",
              "Level 4"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-assignment-design",
        title: "Designing AI-Aware Assignments",
        shortDescription: "Revise assignments so they protect authentic learning.",
        lesson: "AI-aware assignment design makes the learning process visible. Strong tasks ask students to show notes, decisions, drafts, evidence, reasoning, source checks, or reflection instead of relying only on a finished product.",
        activityType: "teacherScenario",
        items: [
          {
            text: "Original task: Write a report on renewable energy. Better revision: Submit notes, source checks, an outline, a draft, and a reflection explaining your choices.",
            options: ["Stronger Design", "Weaker Design"],
            answer: "Stronger Design",
            feedback: "Correct. This makes the learning process visible and harder to replace with AI output."
          },
          {
            text: "Original task: Create a slide deck. Better revision: Create a slide deck and be ready to explain each source, image choice, and claim.",
            options: ["Stronger Design", "Weaker Design"],
            answer: "Stronger Design",
            feedback: "Correct. Explanation and source accountability support authentic understanding."
          },
          {
            text: "Original task: Answer these questions. Better revision: Paste a perfect answer from any source as long as it sounds academic.",
            options: ["Stronger Design", "Weaker Design"],
            answer: "Weaker Design",
            feedback: "Correct. This does not protect thinking, verification, or student ownership."
          }
        ],
        quiz: [
          {
            question: "Which assignment feature best protects authentic learning?",
            options: [
              "Only grading the final polished answer",
              "Asking students to show process, reasoning, and evidence",
              "Avoiding all student explanation",
              "Accepting AI output without discussion"
            ],
            answer: 1
          },
          {
            question: "What should teachers ask students to demonstrate when AI may have supported work?",
            options: [
              "Only that the answer is long",
              "Understanding, decisions, verification, and ownership",
              "That AI produced a polished response",
              "That they used the fastest tool"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-disclosure-citation",
        title: "Disclosure and Citation",
        shortDescription: "Decide when students should disclose, cite, or document AI use.",
        lesson: "Disclosure explains how AI was used. Citation gives formal credit when required. Teachers should tell students what documentation is expected for the assignment, such as prompts, chat links, reflection, citation, or an AI-use rubric.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A student uses AI to brainstorm topic ideas. The teacher asks for a short explanation of how AI helped.",
            options: ["Disclosure", "Formal Citation Only", "No Documentation"],
            answer: "Disclosure",
            feedback: "Correct. A disclosure is appropriate when students explain how AI supported the process."
          },
          {
            text: "A student includes AI-generated text or an AI-generated image in a final product where the teacher allowed it.",
            options: ["Disclosure/Citation Needed", "No Documentation", "Hide the AI Use"],
            answer: "Disclosure/Citation Needed",
            feedback: "Correct. Teachers may require disclosure and formal citation depending on the assignment."
          },
          {
            text: "A student says, 'I used AI,' but cannot name the tool, task, prompt, or how the output was used.",
            options: ["Strong Disclosure", "Incomplete Disclosure"],
            answer: "Incomplete Disclosure",
            feedback: "Correct. Strong disclosures include tool, purpose, prompt, and how output was used."
          }
        ],
        quiz: [
          {
            question: "What should a strong AI disclosure usually include?",
            options: [
              "Tool, purpose, prompts, and how output was used",
              "Only the phrase 'I used AI'",
              "A private password",
              "A fake source"
            ],
            answer: 0
          },
          {
            question: "Are disclosure statements always the same as formal citations?",
            options: [
              "Yes, they are always identical.",
              "No. Disclosure explains use; citation may also be required.",
              "No, citations are never needed.",
              "Yes, if the student says AI helped."
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-verification-feedback",
        title: "Verification and Feedback",
        shortDescription: "Help students check AI outputs and explain their understanding.",
        lesson: "Teachers can respond to AI-supported work by asking students to verify claims, identify sources, explain decisions, compare outputs, correct errors, or demonstrate understanding through conference questions.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A student submits a polished AI-supported answer. The teacher asks the student to explain the main claim and verify two facts.",
            options: ["Good Response", "Weak Response"],
            answer: "Good Response",
            feedback: "Correct. This checks understanding and reinforces verification."
          },
          {
            text: "A teacher assumes that polished writing means the student understands the topic.",
            options: ["Good Response", "Weak Response"],
            answer: "Weak Response",
            feedback: "Correct. Polished writing is not enough evidence of understanding."
          },
          {
            text: "A teacher asks students to list claims from an AI output, check them with reliable sources, and revise inaccurate information.",
            options: ["Good Response", "Weak Response"],
            answer: "Good Response",
            feedback: "Correct. This builds verification habits and critical thinking."
          }
        ],
        quiz: [
          {
            question: "What is a useful teacher response to AI-supported work?",
            options: [
              "Ask students to explain, verify, and reflect",
              "Assume the AI is correct",
              "Grade only sentence length",
              "Avoid asking follow-up questions"
            ],
            answer: 0
          },
          {
            question: "Which evidence best shows student understanding?",
            options: [
              "A polished answer only",
              "The student can explain choices, sources, and reasoning",
              "A response with no citations",
              "A hidden AI prompt"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-implementation-plan",
        title: "Classroom Implementation",
        shortDescription: "Plan how to introduce AI expectations clearly and consistently.",
        lesson: "Responsible AI implementation works best when expectations are predictable. Teachers can post an AI-use level, model disclosure, teach verification, protect privacy, and use short reflection routines.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher adds an AI-use level and disclosure expectation to the assignment directions.",
            options: ["Clear Practice", "Unclear Practice"],
            answer: "Clear Practice",
            feedback: "Correct. Students need expectations before they begin the assignment."
          },
          {
            text: "A teacher changes AI expectations after students submit the assignment without warning.",
            options: ["Clear Practice", "Unclear Practice"],
            answer: "Unclear Practice",
            feedback: "Correct. AI expectations should be communicated clearly in advance."
          },
          {
            text: "A teacher uses the same language across assignments: allowed use, documentation, privacy reminder, and verification reminder.",
            options: ["Clear Practice", "Unclear Practice"],
            answer: "Clear Practice",
            feedback: "Correct. Consistent routines make responsible use easier for students."
          }
        ],
        quiz: [
          {
            question: "What should teachers communicate before students begin an assignment?",
            options: [
              "Whether AI is allowed and what documentation is expected",
              "Only the final due date",
              "That AI rules do not matter",
              "That students should decide all expectations"
            ],
            answer: 0
          },
          {
            question: "Which routine best supports responsible AI use?",
            options: [
              "AI-use level + privacy reminder + verification + disclosure when required",
              "No directions",
              "Only checking for AI after submission",
              "Letting students hide AI use"
            ],
            answer: 0
          }
        ]
      },
      {
        id: "teacher-prompting-for-learning",
        title: "Prompting for Learning",
        shortDescription: "Use prompt structures that support student thinking instead of replacing it.",
        lesson: "Teacher prompting should help students ask better questions, organize ideas, seek feedback, and verify claims. Strong prompts create support without removing student ownership of the learning task.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher models this prompt: Give me questions to help me improve my argument, but do not rewrite it for me.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Aligned",
            feedback: "Correct. The prompt asks for support while keeping the student's thinking and writing intact."
          },
          {
            text: "A teacher models this prompt: Write the final essay for me in a way my teacher will not notice.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Not Aligned",
            feedback: "Correct. This replaces thinking and creates an academic integrity problem."
          },
          {
            text: "A teacher asks students to include a verification step in prompts that involve facts, claims, or sources.",
            options: ["Aligned", "Needs Revision", "Not Aligned"],
            answer: "Aligned",
            feedback: "Correct. Prompting should support critical thinking and verification."
          }
        ],
        quiz: [
          {
            question: "Which prompt best protects student ownership?",
            options: [
              "Write my final answer.",
              "Give feedback on my outline, but do not write the final response for me.",
              "Make this sound like an adult wrote it.",
              "Complete the assignment without asking questions."
            ],
            answer: 1
          },
          {
            question: "What should teachers emphasize when modeling prompts?",
            options: [
              "AI should do the task for students.",
              "Prompts should support learning, process, and verification.",
              "The shortest prompt is always best.",
              "Prompting removes the need for teacher directions."
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-student-conferencing",
        title: "Conferencing About AI Use",
        shortDescription: "Use short conversations to check understanding and ownership.",
        lesson: "When AI may have supported work, teachers can ask students to explain their process, verify claims, identify changes, and describe what they understand. Conferencing should focus on evidence of learning, not guessing whether AI was used.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher asks: What part of this work shows your own thinking, and what support did you use?",
            options: ["Useful Conference Question", "Not Useful"],
            answer: "Useful Conference Question",
            feedback: "Correct. This focuses on ownership, process, and transparency."
          },
          {
            text: "A teacher says: This sounds too good, so you must have cheated.",
            options: ["Useful Conference Question", "Not Useful"],
            answer: "Not Useful",
            feedback: "Correct. The better approach is to ask for evidence of understanding and process."
          },
          {
            text: "A teacher asks a student to explain two claims, show sources, and describe revisions made after AI feedback.",
            options: ["Useful Conference Question", "Not Useful"],
            answer: "Useful Conference Question",
            feedback: "Correct. This checks understanding, source use, and student decision-making."
          }
        ],
        quiz: [
          {
            question: "What is the best focus of an AI-related student conference?",
            options: [
              "Accusing the student immediately",
              "Evidence of understanding, process, verification, and ownership",
              "Only whether the writing sounds polished",
              "Avoiding discussion of AI use"
            ],
            answer: 1
          },
          {
            question: "Which question is most useful?",
            options: [
              "Did AI write this, yes or no?",
              "Can you explain what you changed and why?",
              "Why is your writing different than usual?",
              "Can I prove you used AI?"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "teacher-privacy-pii-context",
        title: "Privacy, PII, and Context",
        shortDescription: "Learn how to give AI useful context without exposing identifiable student information.",
        aiReadyStrands: ["citizen", "strategic"],
        graduateCodes: ["citizen", "strategic"],
        badges: ["citizen", "strategic"],
        strands: ["citizen", "strategic"],
        lesson: "AI prompts should include enough context to be useful, but not personally identifiable information or sensitive student records. The common risk is not always that AI asks for private data; it is that users may overshare while trying to get better help. Privacy means controlling access to personal life and information. Personal data can include direct identifiers, online behavior, device identifiers, images, voice, location, grades, health information, and other details that can identify or profile a student.",
        activityType: "privacyContext",
        items: [
          {
            text: "Which prompt gives useful context without PII?",
            options: ["Rewrite this for Liam, who has an IEP for reading and scored 42 on the assessment.", "Make this Grade 6 direction clearer for students reading below grade level. Keep the vocabulary simple.", "Write feedback for Maya about her behavior record.", "Summarize this student's medical needs."],
            answer: "Make this Grade 6 direction clearer for students reading below grade level. Keep the vocabulary simple.",
            feedback: "Correct. It gives instructional context without naming or identifying a student."
          },
          {
            text: "Which information should not be entered into an unapproved AI tool?",
            options: ["The assignment goal", "The rubric skill", "A general grade level", "A student’s name, grades, disability, behavior record, or private situation"],
            answer: "A student’s name, grades, disability, behavior record, or private situation",
            feedback: "Correct. That information can identify or profile a student and should be protected."
          },
          {
            text: "Why does data privacy matter?",
            options: ["Because data has value and can affect safety, choice, profiling, and control", "Because all data is harmless", "Because privacy only matters for adults", "Because anonymized data has no risk"],
            answer: "Because data has value and can affect safety, choice, profiling, and control",
            feedback: "Correct. Privacy is about control, safety, choice, and limiting unnecessary access."
          },
          {
            text: "Which is the best habit before prompting AI?",
            options: ["Add as many student details as possible", "Use names so the AI can personalize everything", "Remove identifiers and use general instructional context", "Upload student records for accuracy"],
            answer: "Remove identifiers and use general instructional context",
            feedback: "Correct. Give enough context to support the task, but remove identifying or sensitive data."
          }
        ],
        quiz: [
          {
            question: "What is the safest way to prompt AI about student support?",
            options: ["Use the student's full name and records", "Use general, non-identifying instructional context", "Paste the student's IEP", "Upload grades and behavior notes"],
            answer: 1
          },
          {
            question: "Which is PII or sensitive student data?",
            options: ["Grade 5 class", "A general assignment goal", "Student ID, face, voice, exact location, health, grades, or disability information", "A rubric category"],
            answer: 2
          },
          {
            question: "What should teachers do before using AI with student-related work?",
            options: ["Check privacy, remove identifiers, and use approved tools only", "Assume AI tools are private", "Paste the full record for better output", "Let AI decide what is sensitive"],
            answer: 0
          }
        ]
      },

      {
        id: "teacher-equity-access",
        title: "Equity, Access, and Developmental Fit",
        shortDescription: "Consider grade level, access, student needs, and fairness before assigning AI-supported work.",
        lesson: "AI expectations should account for developmental appropriateness, access to tools, privacy, content area needs, and individual student supports. A responsible implementation plan avoids assuming all students have the same access, background knowledge, or readiness.",
        activityType: "teacherScenario",
        items: [
          {
            text: "A teacher requires an AI tool that some students cannot access from school accounts or devices.",
            options: ["Needs Revision", "Aligned"],
            answer: "Needs Revision",
            feedback: "Correct. Access and school-approved tool availability matter."
          },
          {
            text: "A teacher gives younger students a tightly guided, teacher-led AI demonstration instead of independent tool use.",
            options: ["Developmentally Appropriate", "Not Appropriate"],
            answer: "Developmentally Appropriate",
            feedback: "Correct. Younger students may need adult-guided discussion before independent AI use."
          },
          {
            text: "A teacher considers student needs and provides non-AI alternatives for the same learning target.",
            options: ["Aligned", "Not Aligned"],
            answer: "Aligned",
            feedback: "Correct. Responsible implementation considers fairness, access, and individual student needs."
          }
        ],
        quiz: [
          {
            question: "What should teachers consider before requiring AI use?",
            options: [
              "Access, privacy, developmental fit, and learning objective",
              "Only whether the tool is popular",
              "Whether AI can finish the work fastest",
              "Whether students can avoid explaining their work"
            ],
            answer: 0
          },
          {
            question: "Why might AI expectations vary by assignment?",
            options: [
              "Because learning goals, student needs, grade level, and task type vary",
              "Because consistency is never useful",
              "Because students should decide all rules",
              "Because AI is always equally appropriate"
            ],
            answer: 0
          }
        ]
      },
      {
        id: "teacher-eco-awareness-badge",
        title: "AI Eco-Awareness Badge",
        shortDescription: "Consider AI impact, lower-impact habits, data-center questions, and greenwashing before normalizing AI use.",
        lesson: "Responsible AI use includes environmental awareness. Teachers do not need to become data-center experts, but they should understand that AI depends on energy, water, hardware, networks, and physical infrastructure. Eco-awareness does not mean avoiding every AI tool. It means using AI when it adds instructional value, avoiding unnecessary generation, asking better questions about environmental claims, and helping students notice that digital tools have real-world impacts.",
        activityType: "ecoTeacher",
        items: [
          {
            text: "What does AI environmental impact include?",
            options: ["Only electricity", "Energy, water, hardware, networks, buildings, and repeated generation", "Only student Chromebooks", "Only image generation"],
            answer: "Energy, water, hardware, networks, buildings, and repeated generation",
            feedback: "Correct. AI impact includes more than the moment a prompt is typed."
          },
          {
            text: "Which lower-impact habit should teachers model?",
            options: ["Generate many versions before reading the first one", "Use focused prompts and stop when the output is useful", "Use AI for every small task", "Always ask for images even when text would work"],
            answer: "Use focused prompts and stop when the output is useful",
            feedback: "Correct. Focused, purposeful prompting reduces unnecessary generation."
          },
          {
            text: "Which data-center question is appropriate for a school community?",
            options: ["Can we ignore infrastructure because AI is online?", "What energy, water, land, and community impacts are involved?", "Can students solve this alone?", "Does the company have a nice logo?"],
            answer: "What energy, water, land, and community impacts are involved?",
            feedback: "Correct. Local impact questions should include infrastructure, utilities, community needs, and transparency."
          },
          {
            text: "Which question helps check a green AI claim?",
            options: ["Does the claim sound positive?", "What was measured, what was left out, and who verified it?", "Is the website green?", "Did the company use the word sustainable?"],
            answer: "What was measured, what was left out, and who verified it?",
            feedback: "Correct. Green claims need evidence, scope, and verification."
          }
        ],
        extraHtmlDisabledToMatchStudentBadge: `
          <div class="teacher-planner-card">
            <h4>Core teaching points</h4>
            <div class="eco-grid">
              <div class="eco-card">
                <strong>AI uses infrastructure</strong>
                <p>AI is not just “in the cloud.” It relies on servers, data centers, electricity, water, cooling, chips, and networks.</p>
              </div>
              <div class="eco-card">
                <strong>Not all AI use is equal</strong>
                <p>A short text prompt, repeated regeneration, image generation, video generation, and large source processing do not have the same impact.</p>
              </div>
              <div class="eco-card">
                <strong>Local questions matter</strong>
                <p>When data centers are proposed or expanded, communities can ask about energy, water, land use, tax agreements, jobs, noise, heat, and transparency.</p>
              </div>
              <div class="eco-card">
                <strong>Greenwashing needs scrutiny</strong>
                <p>Greenwashing is when a tool or company is made to seem more environmentally responsible than the evidence actually shows.</p>
              </div>
            </div>
          </div>

          <div class="teacher-planner-card">
            <h4>Lower-impact AI habits for classrooms</h4>
            <div class="privacy-split-grid">
              <div class="privacy-card ok">
                <strong>Model these habits</strong>
                <ul>
                  <li>Use AI when it adds instructional value.</li>
                  <li>Write focused prompts instead of repeatedly regenerating.</li>
                  <li>Use source-grounded tools when working from documents.</li>
                  <li>Reuse strong prompts, directions, rubrics, and examples.</li>
                  <li>Choose text when images or video are not needed.</li>
                </ul>
              </div>
              <div class="privacy-card no">
                <strong>Avoid normalizing this</strong>
                <ul>
                  <li>Using AI for every small task.</li>
                  <li>Generating decorative images without a purpose.</li>
                  <li>Regenerating many times without reading or revising.</li>
                  <li>Treating “green AI” claims as automatically true.</li>
                  <li>Ignoring privacy, data, and infrastructure questions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="teacher-planner-card">
            <h4>Teacher reflection</h4>
            <p class="small-note">Before completing this badge, write one sentence about how you would model lower-impact AI use for students.</p>
            <label for="teacherEcoReflection"><strong>My lower-impact AI habit</strong></label>
            <textarea id="teacherEcoReflection" placeholder="Example: I will use focused prompts, avoid unnecessary image generation, and ask students to question unsupported green claims."></textarea>
          </div>
        `,
        quiz: [
          {
            question: "Which is a lower-impact AI habit?",
            options: ["Use focused prompts and stop when the output is useful", "Generate extra images for decoration only", "Regenerate repeatedly without reading", "Use AI for every task"],
            answer: 0
          },
          {
            question: "What is greenwashing?",
            options: ["A verified environmental report", "A claim that makes something seem more environmentally responsible than the evidence shows", "A type of classroom recycling", "A Chromebook setting"],
            answer: 1
          },
          {
            question: "Which question should teachers ask about eco-friendly AI claims?",
            options: ["What was measured, what was left out, and who verified the claim?", "Is the claim short?", "Does the company mention nature?", "Is the tool popular?"],
            answer: 0
          },
          {
            question: "What should teachers model for students?",
            options: ["Purposeful AI use, source checking, privacy protection, and awareness of impact", "Using AI constantly", "Ignoring environmental claims", "Trusting every company claim"],
            answer: 0
          }
        ]
      }
    ];



    const teacherPrerequisiteModules = modules
      .filter(module => module.prerequisite)
      .map(module => ({
        ...module,
        id: `teacher-${module.id}`,
        title: `Prerequisite: ${module.title}`,
        shortDescription: module.shortDescription,
        activityType: module.activityType,
        selfCheckDiagram: module.selfCheckDiagram,
        items: module.items,
        quiz: (module.quiz || []).map(question => ({
          ...question,
          answer: typeof question.answer === "number"
            ? question.answer
            : question.options.findIndex(option => normalizeAnswerText(option) === normalizeAnswerText(question.answer))
        }))
      }));

    teacherModules.unshift(...teacherPrerequisiteModules);

    const teacherModuleStrands = {
      "teacher-faculty-ai-guidelines": ["learner", "citizen", "thinker", "creator", "strategic"],
      "teacher-sau48-ai-stance": ["citizen", "thinker", "strategic"],
      "teacher-ai-use-levels": ["citizen", "strategic"],
      "teacher-assignment-design": ["learner", "creator", "strategic"],
      "teacher-disclosure-citation": ["citizen", "thinker", "strategic"],
      "teacher-verification-feedback": ["thinker", "citizen"],
      "teacher-implementation-plan": ["citizen", "strategic"],
      "teacher-prompting-for-learning": ["learner", "thinker", "creator", "strategic"],
      "teacher-student-conferencing": ["thinker", "citizen"],
      "teacher-privacy-pii-context": ["citizen", "strategic"],
      "teacher-equity-access": ["citizen", "strategic"],
      "teacher-eco-awareness-badge": ["citizen", "thinker", "strategic"]
    };

    function getTeacherModuleStrands(moduleId) {
      const teacherStrandMap = {
        "teacher-what-wifi-actually-does": ["learner", "thinker", "strategic"],
        "teacher-how-data-travels-online": ["learner", "citizen", "thinker", "strategic"],
        "teacher-how-ai-generates-responses": ["learner", "thinker", "creator", "strategic"],

        "what-wifi-actually-does": ["learner", "thinker", "strategic"],
        "how-data-travels-online": ["learner", "citizen", "thinker", "strategic"],
        "how-ai-generates-responses": ["learner", "thinker", "creator", "strategic"],

        "teacher-faculty-ai-guidelines": ["learner", "citizen", "thinker", "strategic"],
        "teacher-sau48-ai-stance": ["learner", "citizen", "thinker", "strategic"],
        "teacher-ai-use-levels": ["learner", "thinker", "creator", "strategic"],
        "teacher-assignment-design": ["thinker", "creator", "strategic"],
        "teacher-disclosure-citation": ["citizen", "thinker", "strategic"],
        "teacher-verification-feedback": ["citizen", "thinker", "strategic"],
        "teacher-implementation-plan": ["learner", "creator", "strategic"],
        "teacher-prompting-for-learning": ["learner", "thinker", "creator", "strategic"],
        "teacher-student-conferencing": ["citizen", "thinker", "strategic"],
        "teacher-privacy-pii-context": ["citizen", "strategic"],
        "teacher-equity-access": ["citizen", "creator", "strategic"],
        "teacher-eco-awareness-badge": ["learner", "citizen", "thinker", "strategic"]
      };

      if (teacherStrandMap[moduleId]) return teacherStrandMap[moduleId];
      if (teacherModules && teacherModules.some((module, index) => module.id === moduleId && index === 0)) return ["learner", "thinker", "strategic"];
      if (teacherModules && teacherModules.some((module, index) => module.id === moduleId && index === 1)) return ["learner", "citizen", "thinker", "strategic"];
      if (teacherModules && teacherModules.some((module, index) => module.id === moduleId && index === 2)) return ["learner", "thinker", "creator", "strategic"];

      return teacherModuleStrands[moduleId] || [];
    }

    function getTeacherPracticedStrands() {
      const practiced = new Set();

      teacherProgress.completedModules.forEach(moduleId => {
        getTeacherModuleStrands(moduleId).forEach(strandId => practiced.add(strandId));
      });

      return practiced;
    }

    function renderTeacherAiReadyLegend() {
      const practiced = getTeacherPracticedStrands();

      return `
        <div class="ai-ready-legend">
          <div class="ai-ready-legend-header">
            <h3>AI-Ready Graduate Codes</h3>
            <div class="ai-ready-practiced-inline">
              <strong>Skills Practiced</strong>
              <div class="ai-ready-list">
                ${Object.keys(aiReadyStrands).map(id => {
                  const strand = aiReadyStrands[id];
                  const isPracticed = practiced.has(id);
                  return `<span class="strand-badge ${isPracticed ? "practiced" : ""}">${strand.code}</span>`;
                }).join("")}
                ${renderEcoPracticeIndicators()}
              </div>
            </div>
          </div>

          <div class="ai-ready-legend-grid">
            ${Object.keys(aiReadyStrands).map(id => {
              const strand = aiReadyStrands[id];
              return `
                <div class="ai-ready-legend-item">
                  <span class="ai-ready-code">${strand.code}</span>
                  <strong>${strand.full}</strong>
                </div>
              `;
            }).join("")}

            <div class="ai-ready-legend-item ai-ready-tools-tile">
              <div>
                <strong>AI Practice Tools</strong>
                <p class="ai-tools-sequence">Assess → Build → Disclose</p>
                <button type="button" onclick="openAlwaysAvailableStudentTools()">Open Tools</button>
              </div>
            </div>

            ${renderCreativeEthicsTile('teacher')}
          </div>
        </div>
      `;
    }


    function renderTeacherPracticeBox(moduleId) {
      const strands = getTeacherModuleStrands(moduleId);
      if (!strands.length) return "";

      return `
        <div class="module-practice-box">
          <strong>You are practicing:</strong>
          <div class="strand-badges">${renderStrandBadges(strands)}</div>
          <p><strong>${strands.map(id => aiReadyStrands[id].full).join(" · ")}</strong></p>
          <p class="small-note">${strands.map(id => aiReadyStrands[id].description).join(" ")}</p>
        </div>
      `;
    }

    let teacherPreviewMode = false;
    let expandedTeacherResource = null;

    function toggleTeacherPreviewMode() {
      const toggle = document.getElementById("teacherPreviewToggle");
      const banner = document.getElementById("teacherPreviewBanner");

      teacherPreviewMode = toggle ? toggle.checked : false;

      if (banner) {
        banner.classList.toggle("hidden", !teacherPreviewMode);
      }

      renderTeacherDashboard();
    }

    
    
    
    
