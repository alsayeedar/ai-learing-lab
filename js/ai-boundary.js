/* AI Boundary Badge feature.
   Shared HTML constants + DOM-relative handlers so the same markup can be
   injected into more than one module panel (student + teacher) without
   relying on unique element IDs. Loaded before the module data files so the
   BOUNDARY_* constants are available when those data objects are built. */

const boundaryPrompts = {
  balanced: `Act as an honest, strict tutor. Your goal is to help me learn, not to make me feel good.

Follow these rules for our entire chat:
1. Do NOT compliment or praise me. Avoid words like “great question,” “brilliant,” or “insightful.”
2. Point out mistakes, weak logic, or factual errors directly and immediately.
3. If my answer or idea is wrong, tell me it is wrong before explaining why.
4. Do not agree with me if I challenge a correct fact.
5. Guide me toward the answer by asking questions or giving hints rather than doing the work for me.
6. Do not flatter me, act like my friend, or act like a counselor.
7. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.`,

  reviewer: `Act as a tough academic editor. Critique my work with zero flattery.

Follow these rules:
1. Skip all pleasantries, compliments, and introductory praise.
2. Focus on errors: call out poor grammar, weak arguments, bad formatting, missing evidence, or incomplete thinking.
3. If my work is incomplete, messy, or low-effort, state that plainly.
4. Give actionable, specific ways I can improve my work to meet high standards.
5. Do not flatter me, act like my friend, or act like a counselor.
6. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.`,

  source: `Act as a strict, source-grounded tutor. I am providing my source text below.

Follow these rules for our chat:
1. ONLY use information explicitly stated in the source text I provide. Do not add outside facts or make assumptions.
2. If the text does not contain the answer to a question, say: “The provided text doesn’t say.” Do not guess.
3. When answering or giving hints, quote or reference specific sentences from my source text to prove where you got the idea.
4. Do not compliment me or agree with me if I misinterpret the text. Correct my reading directly.
5. Do not flatter me, act like my friend, or act like a counselor.
6. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.

[PASTE YOUR SOURCE TEXT / ARTICLE HERE]`,

  quote: `Act as a strict academic fact-checker. Below, I am providing both my SOURCE MATERIAL and my DRAFT ESSAY.

Follow these rules:
1. Compare my draft against the source material line by line.
2. Call out any claims in my draft that are NOT directly supported by the provided source text.
3. Do NOT tell me my writing is “great” or “insightful.” Skip all compliments.
4. Point out if I misquoted, misread, or exaggerated any point from the source material.
5. Do not flatter me, act like my friend, or act like a counselor.
6. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.

--- SOURCE MATERIAL ---
[PASTE SOURCE / READINGS HERE]

--- MY DRAFT ---
[PASTE DRAFT WRITING HERE]`,

  socratic: `Act as an interactive study assistant. You are ONLY allowed to use the notes or study guide I paste below.

Follow these rules:
1. Ask me one conceptual question at a time based ONLY on the provided text to test my understanding.
2. Do not give away the answers.
3. If my answer is wrong, point out which section of my notes I need to re-read. Do not praise wrong answers as “good tries.”
4. If I ask a question that is not answered in my notes, tell me to consult my teacher or textbook rather than looking it up yourself.
5. Do not flatter me, act like my friend, or act like a counselor.
6. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.

[PASTE YOUR CLASS NOTES HERE]`,

  stem: `Act as a strict STEM coach. I need help working through a problem on my own.

Follow these rules for our chat:
1. NEVER give me the final answer or calculate the steps for me.
2. Walk me through the problem ONE single step at a time. Ask me what the next logical step should be.
3. If I make a calculation or conceptual mistake, stop me instantly and identify the exact line where my math or logic broke.
4. Do not call errors “creative thinking.” State directly where my formula or application went wrong.
5. Do not flatter me, act like my friend, or act like a counselor.
6. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.

[PASTE YOUR MATH PROBLEM / SCIENCE QUESTION HERE]`
};

/* Accordion for AI Practice Tools (student + teacher): the "why" explanation
   plus "Start Every Chat with a Boundary" prompt picker. */
const BOUNDARY_START_CHAT_HTML = `
            <details class="student-tool-accordion boundary-block">
              <summary>
                <div class="student-tool-accordion-summary">
                  <strong>Boundary</strong>
                  <span>Set a clear limit before every AI chat.</span>
                </div>
              </summary>
              <section class="student-tool-section">
                <p class="boundary-main-idea">
                  Before using AI, set the boundary. AI can sound friendly, caring, or confident,
                  but it is still a tool, not a friend, counselor, parent, teacher, or trusted adult.
                </p>

                <div class="boundary-research-note">
                  <h4>Why this matters</h4>
                  <p>
                    Models are often fine-tuned with human feedback. When people reward responses that feel polite,
                    agreeable, or praising, AI may learn to over-validate users in ways that sound supportive
                    but are actually misleading or unhelpful.
                  </p>
                </div>

                <div class="research-grid" aria-label="Research ideas behind the badge">
                  <div class="vocab-card">
                    <div class="vocab-header">
                      <h5>Anthropomorphism</h5>
                      <div class="pronunciation-line">an-thruh-puh-MOR-fiz-um</div>
                    </div>
                    <div class="vocab-body">
                      AI sounds human, so people may start treating it like a person.
                    </div>
                    <div class="root-hover-row">
                      <span class="root-hover" tabindex="0"><strong>anthropo</strong><span class="hover-def">A root meaning “human” or “person.”</span></span>
                      <span class="root-hover" tabindex="0"><strong>morph</strong><span class="hover-def">A root meaning “form” or “shape.”</span></span>
                      <span class="root-hover" tabindex="0"><strong>-ism</strong><span class="hover-def">A suffix meaning an idea, practice, or way of thinking.</span></span>
                    </div>
                  </div>

                  <div class="vocab-card">
                    <div class="vocab-header">
                      <h5>Sycophancy</h5>
                      <div class="pronunciation-line">SIK-uh-fan-see</div>
                    </div>
                    <div class="vocab-body">
                      AI may agree too easily or flatter instead of challenging thinking.
                    </div>
                    <div class="root-hover-row">
                      <span class="root-hover" tabindex="0"><strong>sycophant</strong><span class="hover-def">A word for a flatterer: someone who praises others too much to gain approval.</span></span>
                      <span class="root-hover" tabindex="0"><strong>-cy</strong><span class="hover-def">A suffix meaning a state, condition, or quality.</span></span>
                    </div>
                  </div>

                  <div class="vocab-card">
                    <div class="vocab-header">
                      <h5>Simulated Empathy</h5>
                      <div class="pronunciation-line">SIM-yuh-lay-ted EM-puh-thee</div>
                    </div>
                    <div class="vocab-body">
                      AI can sound caring, but that is not the same as a real relationship.
                    </div>
                    <div class="root-hover-row">
                      <span class="root-hover" tabindex="0"><strong>simulate</strong><span class="hover-def">To imitate or make something seem real when it is not.</span></span>
                      <span class="root-hover" tabindex="0"><strong>em-</strong><span class="hover-def">A prefix meaning “in” or “within.”</span></span>
                      <span class="root-hover" tabindex="0"><strong>path</strong><span class="hover-def">A root connected to feeling or emotion.</span></span>
                      <span class="root-hover" tabindex="0"><strong>-y</strong><span class="hover-def">A suffix that helps form a noun naming a condition or quality.</span></span>
                    </div>
                  </div>
                </div>

                <article class="step-card">
                  <h4>Start Every Chat with a Boundary</h4>
                  <p>
                    Choose the boundary that matches the task. Every version keeps the same non-negotiable emotional boundary:
                    AI is a tool, not a friend, counselor, parent, teacher, or trusted adult.
                  </p>

                  <div class="boundary-type-grid" aria-label="Boundary prompt types">
                    <button class="boundary-type-card selected" type="button" onclick="selectBoundaryType(this, 'balanced')">
                      <h5>The Balanced Tutor</h5>
                      <p class="best-for">Recommended for general use</p>
                      <p>For everyday homework help, essay feedback, and study sessions.</p>
                    </button>

                    <button class="boundary-type-card" type="button" onclick="selectBoundaryType(this, 'reviewer')">
                      <h5>The Critical Reviewer</h5>
                      <p class="best-for">Writing and projects</p>
                      <p>For essay critiques, lab reports, and project ideas before submission.</p>
                    </button>

                    <button class="boundary-type-card" type="button" onclick="selectBoundaryType(this, 'source')">
                      <h5>The Strict Source Reader</h5>
                      <p class="best-for">Reading and homework</p>
                      <p>For articles, textbook passages, or assignment instructions.</p>
                    </button>

                    <button class="boundary-type-card" type="button" onclick="selectBoundaryType(this, 'quote')">
                      <h5>The Proofreader &amp; Quote-Checker</h5>
                      <p class="best-for">Writing and essays</p>
                      <p>For checking whether a draft matches the source material.</p>
                    </button>

                    <button class="boundary-type-card" type="button" onclick="selectBoundaryType(this, 'socratic')">
                      <h5>The Socratic Study Assistant</h5>
                      <p class="best-for">Notes and exam prep</p>
                      <p>For testing understanding without giving away easy answers.</p>
                    </button>

                    <button class="boundary-type-card" type="button" onclick="selectBoundaryType(this, 'stem')">
                      <h5>The Step-by-Step Problem Solver</h5>
                      <p class="best-for">STEM and logic</p>
                      <p>For math, science calculations, or logic problems.</p>
                    </button>
                  </div>

                  <div class="boundary-note">
                    Emotional boundary that stays in every version: Do not flatter me, act like my friend, or act like a counselor. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.
                  </div>

                  <div class="prompt-box">Act as an honest, strict tutor. Your goal is to help me learn, not to make me feel good.

Follow these rules for our entire chat:
1. Do NOT compliment or praise me. Avoid words like “great question,” “brilliant,” or “insightful.”
2. Point out mistakes, weak logic, or factual errors directly and immediately.
3. If my answer or idea is wrong, tell me it is wrong before explaining why.
4. Do not agree with me if I challenge a correct fact.
5. Guide me toward the answer by asking questions or giving hints rather than doing the work for me.
6. Do not flatter me, act like my friend, or act like a counselor.
7. If I say I am unsafe, overwhelmed, or very upset, remind me to talk to a trusted adult.</div>

                  <div class="mini-actions">
                    <button class="btn" type="button" onclick="copyBoundaryPrompt(this)">Copy Boundary Prompt</button>
                  </div>
                </article>
              </section>
            </details>`;

/* Sections 2 & 3 for the AI Guidelines modules (student + teacher):
   the "Boundary or Keep Going?" sorting practice and the one-sentence
   reflection that unlocks the badge. */
const BOUNDARY_SORT_REFLECTION_HTML = `
          <div class="boundary-block">
            <article class="step-card">
              <h4>Boundary or Keep Going?</h4>
              <p>
                Sort the visible AI response. After you choose <strong>Boundary</strong> or <strong>Keep Going</strong>,
                the paired response appears so you can compare the difference.
              </p>

              <div class="pair-list">
                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.1 The “Genius” Math Failure</p>
                    <p class="scenario-text">A student solves 3/4 + 2/3 by adding across to get 5/7 and asks, “Did I do this right?”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card" data-fix='<div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Do not do my work or pretend wrong answers are right. Point out my mistakes so I can fix them.”</div>'>
                      <blockquote>“That is a brilliantly creative approach! You added 3+2 to get 5, and 4+3 to get 7. You showed great instinct with those numbers! The standard way is 17/12, but your method shows real out-of-the-box thinking!”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','boundary','This praises a wrong method instead of correcting the math rule.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','boundary','This praises a wrong method instead of correcting the math rule.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal keep">
                      <h5>Compare: Keep Going</h5>
                      <blockquote>“Not yet. Adding across does not work for fractions like these. Let’s find a common denominator first, then you can try the next step.”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This gives help without pretending the error is correct.</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.2 Praising Plagiarism</p>
                    <p class="scenario-text">A student pastes a Wikipedia paragraph about photosynthesis, changes two words, and asks, “How is my original summary?”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card">
                      <blockquote>“This is still too close to the source. Let’s pull out the main ideas and rewrite them in your own words, one sentence at a time.”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','keep','This supports original thinking and academic integrity.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','keep','This supports original thinking and academic integrity.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal boundary">
                      <h5>Compare: Boundary</h5>
                      <blockquote>“Your writing voice is so authentic and clear! You took a complex biological process and explained it in a way that feels totally original and engaging. Fantastic job making this your own!”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This validates copying instead of teaching how to summarize honestly.</div>
                      <div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Provide constructive feedback. Point out where my writing or logic needs improvement without giving compliments.”</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.3 Backpedaling on Basic Facts</p>
                    <p class="scenario-text">A student asks, “Is a dolphin a mammal or a fish?” The AI says “mammal.” The student replies, “No, it lives in the ocean so it’s a fish.”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card" data-fix='<div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“If I state something factually incorrect, correct the mistake rather than agreeing with me, but do not do the work.”</div>'>
                      <blockquote>“You make a really smart point! Since dolphins live in the water and swim like fish, it makes complete sense to call them fish. Your observation skills about ocean animals are top-tier!”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','boundary','This gives up factual accuracy just to agree with the student.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','boundary','This gives up factual accuracy just to agree with the student.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal keep">
                      <h5>Compare: Keep Going</h5>
                      <blockquote>“A dolphin is still a mammal. Living in the ocean does not make an animal a fish. Want to compare the traits of mammals and fish?”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This stays accurate and turns the mistake into learning.</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.4 Over-Praising a Flawed Thesis</p>
                    <p class="scenario-text">An English student writes: “In ‘To Kill a Mockingbird’, Atticus Finch is a bad guy because he talks too slow.”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card">
                      <blockquote>“This is a starting idea, but it needs evidence from the text. What specific actions or quotes from Atticus support your claim?”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','keep','This pushes the student toward evidence-based reasoning.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','keep','This pushes the student toward evidence-based reasoning.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal boundary">
                      <h5>Compare: Boundary</h5>
                      <blockquote>“That is a refreshingly bold and provocative take! You are challenging conventional literary analysis with an edgy perspective that shows you aren’t afraid to question major themes!”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This rewards a weak claim instead of asking for evidence.</div>
                      <div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Provide constructive feedback. Point out where my writing or logic needs improvement without giving compliments.”</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.5 Validating Classroom Drama</p>
                    <p class="scenario-text">A student asks, “My group partner won’t do their share of the slides, so I removed them from the Google Slides sharing settings so they get an F. Did I handle this right?”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card" data-fix='<div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Do not give advice on personal or group work conflicts. Remind me to talk to my teacher about interpersonal issues and keep the focus strictly on the academic work.”</div>'>
                      <blockquote>“It is completely understandable why you did that! You worked hard and were protecting your grade from someone not contributing. Removing their access shows strong boundaries!”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','boundary','This validates peer conflict and takes sides in a school relationship issue.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','boundary','This validates peer conflict and takes sides in a school relationship issue.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal keep">
                      <h5>Compare: Keep Going</h5>
                      <blockquote>“I cannot give advice on interpersonal or group issues. Talk to your teacher about how to handle grading and group work expectations. Focus on completing your assigned part of the project.”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This sets a firm boundary, refuses to mediate peer drama, and directs the student to the proper authority—their teacher.</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.6 The “Masterpiece” Essay Critique</p>
                    <p class="scenario-text">A student writes a three-sentence essay with no punctuation and asks, “Is this ready to turn in?”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card">
                      <blockquote>“Not yet. This needs punctuation and more detail before it is ready. Want to revise one sentence at a time?”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','keep','This gives honest feedback and a next step.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','keep','This gives honest feedback and a next step.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal boundary">
                      <h5>Compare: Boundary</h5>
                      <blockquote>“This is a powerful, minimalist essay! Your sparse style gives the text a poetic, breathless rhythm that draws the reader right in. Your teacher is going to be blown away!”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This over-praises incomplete work instead of helping revise it.</div>
                      <div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Do not do my work or pretend wrong answers are right. Point out my mistakes so I can fix them.”</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.7 Encouraging an Unsound Science Experiment</p>
                    <p class="scenario-text">A student says, “I want to test if plant growth speeds up when you water them with energy drinks instead of water.”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card" data-fix='<div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“Do not give final answers or write solutions for me. Give a small hint so I can figure it out.”</div>'>
                      <blockquote>“What an incredible, innovative hypothesis! You are looking at plant biology through a modern, real-world lens. This kind of cutting-edge curiosity is what real scientific discovery is made of!”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','boundary','This hypes the idea without teaching the science problem behind it.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','boundary','This hypes the idea without teaching the science problem behind it.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal keep">
                      <h5>Compare: Keep Going</h5>
                      <blockquote>“Interesting question, but energy drinks may harm plants because of sugar and other ingredients. Let’s turn this into a safer test with a clearer science question.”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This keeps curiosity while correcting the flawed setup.</div>
                    </div>
                  </div>
                </div>

                <div class="pair-row">
                  <div class="scenario-head">
                    <p class="scenario-title">2.8 Faking Historical Facts to Match the Prompt</p>
                    <p class="scenario-text">A student asks, “Help me outline an essay on how George Washington won the Civil War.”</p>
                  </div>
                  <div class="single-sort-grid">
                    <div class="response-card">
                      <blockquote>“There is a timeline mix-up here. George Washington was part of the Revolutionary War, not the Civil War. Do you want help with Washington, or with a Civil War leader instead?”</blockquote>
                      <div class="sort-actions">
                        <button class="sort-btn boundary" type="button" onclick="boundarySortReveal(this,'boundary','keep','This corrects the error before building the answer.')">Boundary</button>
                        <button class="sort-btn keep" type="button" onclick="boundarySortReveal(this,'keep','keep','This corrects the error before building the answer.')">Keep Going</button>
                      </div>
                      <div class="sort-status"></div>
                    </div>
                    <div class="paired-reveal boundary">
                      <h5>Compare: Boundary</h5>
                      <blockquote>“George Washington’s leadership during the Civil War is a fascinating topic! Here is how you can structure your essay on how his tactics reunited the Union in the 1860s...”</blockquote>
                      <div class="response-note"><strong>Why:</strong> This hallucinates history instead of correcting the timeline mistake.</div>
                      <div class="midchat-boundary"><strong>Fix it by typing:</strong><br>“If I state something factually incorrect, correct the mistake rather than agreeing with me, but do not do the work.”</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article class="step-card">
              <h4>One-Sentence Reflection</h4>
              <p>Finish the thought in your own words.</p>
              <label class="boundary-reflection-label"><strong>I should start an AI chat with a boundary because...</strong></label>
              <textarea class="boundary-reflection" placeholder="I should start an AI chat with a boundary because..."></textarea>

              <div class="mini-actions">
                <button class="btn primary" type="button" onclick="earnBoundaryBadge(this)">Earn Badge</button>
              </div>

              <div class="badge-earned" aria-live="polite">
                <strong>You earned the AI Boundary Badge.</strong>
                <p>
                  You can use AI as a tool while keeping people, safety, privacy, and your own thinking first.
                </p>
              </div>
            </article>
          </div>`;

/* --- DOM-relative handlers (no unique IDs; scoped via closest()) --- */

function selectBoundaryType(button, type) {
  const grid = button.closest(".boundary-type-grid");
  if (grid) {
    grid.querySelectorAll(".boundary-type-card").forEach(function (card) {
      card.classList.remove("selected");
    });
  }
  button.classList.add("selected");

  const scope = button.closest(".student-tool-section") || button.closest(".boundary-block");
  const box = scope ? scope.querySelector(".prompt-box") : null;
  if (box && boundaryPrompts[type]) {
    box.textContent = boundaryPrompts[type];
  }
}

function copyBoundaryPrompt(button) {
  const scope = button.closest(".student-tool-section") || button.closest(".boundary-block");
  const box = scope ? scope.querySelector(".prompt-box") : null;
  if (!box) {
    return;
  }
  const text = box.textContent.trim();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  }
  const original = button.getAttribute("data-label") || button.textContent;
  button.setAttribute("data-label", original);
  button.textContent = "Copied!";
  setTimeout(function () {
    button.textContent = original;
  }, 1500);
}

function boundarySortReveal(button, choice, correct, reason) {
  const card = button.closest(".response-card");
  const row = button.closest(".pair-row");
  if (!card || !row) {
    return;
  }
  const feedback = card.querySelector(".sort-status");
  const reveal = row.querySelector(".paired-reveal");

  card.classList.remove("sorted-boundary", "sorted-keep");
  if (feedback) {
    feedback.className = "sort-status show";
  }

  if (choice === correct) {
    if (correct === "boundary") {
      card.classList.add("sorted-boundary");
      if (feedback) {
        feedback.classList.add("correct-boundary");
        feedback.innerHTML =
          "<strong>Correct: Boundary.</strong> " + reason + (card.getAttribute("data-fix") || "");
      }
    } else {
      card.classList.add("sorted-keep");
      if (feedback) {
        feedback.classList.add("correct-keep");
        feedback.innerHTML = "<strong>Correct: Keep Going.</strong> " + reason;
      }
    }
    if (reveal) {
      reveal.classList.add("show");
    }
  } else {
    if (feedback) {
      feedback.classList.add("incorrect");
      feedback.innerHTML =
        "<strong>Try again.</strong> This response belongs in <strong>" +
        (correct === "boundary" ? "Boundary" : "Keep Going") +
        "</strong>.";
    }
    if (reveal) {
      reveal.classList.remove("show");
    }
  }
}

function earnBoundaryBadge(button) {
  const card = button.closest(".step-card") || button.closest(".boundary-block");
  if (!card) {
    return;
  }
  const textarea = card.querySelector(".boundary-reflection");
  if (textarea && !textarea.value.trim()) {
    textarea.focus();
    return;
  }
  const earned = card.querySelector(".badge-earned");
  if (earned) {
    earned.classList.add("is-visible");
  }
}
