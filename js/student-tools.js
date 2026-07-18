    const studentSubmitChecklistResourceHtml = `
      <div class="submit-checklist-tool">
        <div class="teacher-note">
          <strong>Before You Submit Checklist</strong>
          <p class="small-note">Use this before turning in work. Keep your thinking at the center.</p>
        </div>

        <div class="human-center-note">
          <strong>Human at the center</strong>
          <p>AI can support planning, feedback, revision, and checking. It should not replace your thinking, your voice, your evidence, or your responsibility for the final work.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Submission checks</h4>

          <div class="checkline"><input type="checkbox" id="submitCheck1"><label for="submitCheck1">I followed the AI-use rule.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck2"><label for="submitCheck2">I can explain what AI helped with.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck3"><label for="submitCheck3">I checked important claims.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck4"><label for="submitCheck4">I checked AI Overview sources.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck5"><label for="submitCheck5">I disclosed AI use if required.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck6"><label for="submitCheck6">I removed weak or inaccurate parts.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck7"><label for="submitCheck7">I protected private information.</label></div>
          <div class="checkline"><input type="checkbox" id="submitCheck8"><label for="submitCheck8">I can explain my process.</label></div>

          <div class="student-tool-grid">
            <div class="student-tool-field full">
              <strong>Short process note</strong>
              <textarea id="submitProcessNote" placeholder="Example: I used AI to help organize my ideas, then I checked two facts and rewrote the final paragraph myself."></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateSubmitChecklist()">Generate Submission Note</button>
            <button type="button" class="secondary-btn" onclick="copySubmitChecklist()">Copy Submission Note</button>
            <button type="button" class="secondary-btn" onclick="clearSubmitChecklist()">Clear</button>
          </div>

          <label for="submitChecklistOutput"><strong>Copy/Paste Submission Note</strong></label>
          <textarea id="submitChecklistOutput" class="submit-output" readonly></textarea>
        </div>
      </div>
    `;

    
    function bigDataIcon(type) {
      const icons = {
        entertainment: `
          <svg viewBox="0 0 48 48" role="img" aria-label="Entertainment and apps icon">
            <rect x="8" y="12" width="24" height="18" rx="3" fill="#eef2ff" stroke="#1e1b4b" stroke-width="2.4"/>
            <path d="M18 17.5v7l6-3.5-6-3.5z" fill="#93c5fd" stroke="#1e1b4b" stroke-width="1.8" stroke-linejoin="round"/>
            <rect x="28" y="19" width="12" height="18" rx="3" fill="#ffffff" stroke="#1e1b4b" stroke-width="2.4"/>
            <rect x="31" y="23" width="2.8" height="2.8" rx="0.7" fill="#93c5fd"/>
            <rect x="35" y="23" width="2.8" height="2.8" rx="0.7" fill="#93c5fd"/>
            <rect x="31" y="27" width="2.8" height="2.8" rx="0.7" fill="#93c5fd"/>
            <rect x="35" y="27" width="2.8" height="2.8" rx="0.7" fill="#93c5fd"/>
            <path d="M11 35h12" stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        `,
        weather: `
          <svg viewBox="0 0 48 48" role="img" aria-label="Weather and science icon">
            <path d="M31 16a7 7 0 0 0-13.2-2.8A8 8 0 1 0 16 29h17a6.5 6.5 0 0 0-2-12.7z" fill="#ffffff" stroke="#1e1b4b" stroke-width="2.4" stroke-linejoin="round"/>
            <path d="M32 9v3M39 16h3M36.8 11.2l2-2" stroke="#1e1b4b" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M17 34l-2 4M24 34l-2 4M31 34l-2 4" stroke="#60a5fa" stroke-width="2.8" stroke-linecap="round"/>
            <rect x="34" y="22" width="5" height="16" rx="2.5" fill="#eef2ff" stroke="#1e1b4b" stroke-width="2.2"/>
            <circle cx="36.5" cy="37" r="4" fill="#93c5fd" stroke="#1e1b4b" stroke-width="2.2"/>
          </svg>
        `,
        ads: `
          <svg viewBox="0 0 48 48" role="img" aria-label="Personalized ads icon">
            <rect x="8" y="17" width="25" height="20" rx="3" fill="#ffffff" stroke="#1e1b4b" stroke-width="2.4"/>
            <path d="M8 23h25" stroke="#1e1b4b" stroke-width="2.2"/>
            <circle cx="13" cy="20" r="1.2" fill="#60a5fa"/>
            <circle cx="17" cy="20" r="1.2" fill="#60a5fa"/>
            <path d="M12 32h8M12 28h14" stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M30 27l10-5v15l-10-5z" fill="#eef2ff" stroke="#1e1b4b" stroke-width="2.4" stroke-linejoin="round"/>
            <path d="M26 28h4v5h-4z" fill="#93c5fd" stroke="#1e1b4b" stroke-width="2.2"/>
            <circle cx="24" cy="11" r="5" fill="#eef2ff" stroke="#1e1b4b" stroke-width="2.2"/>
            <path d="M21 14c1.2-1.4 4.8-1.4 6 0" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `,
        civic: `
          <svg viewBox="0 0 48 48" role="img" aria-label="Government and public safety icon">
            <path d="M11 20h24L23 12 11 20z" fill="#eef2ff" stroke="#1e1b4b" stroke-width="2.4" stroke-linejoin="round"/>
            <path d="M14 20v13M20 20v13M26 20v13M32 20v13" stroke="#1e1b4b" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M10 35h24M8 39h28" stroke="#1e1b4b" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M34 25l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6l8-3z" fill="#dbeafe" stroke="#1e1b4b" stroke-width="2.4" stroke-linejoin="round"/>
            <path d="M30.5 34.5l2.4 2.4 5-6" stroke="#1e1b4b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `
      };

      return icons[type] || "";
    }

const studentBigDataResourceHtml = `
      <div class="bigdata-tool">
        <div class="teacher-note">
          <strong>Big Data &amp; Data Tracks</strong>
          <p class="small-note">Big data means large amounts of data that are gathered, stored, processed, and analyzed. Many data streams are invisible: clicks, searches, app activity, sensors, smart devices, cameras, and online services can all create data tracks.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Where does big data show up?</h4>
          <div class="bigdata-grid">
            <div class="bigdata-card">
              <div class="bigdata-card-icon bigdata-svg-icon">${bigDataIcon("entertainment")}</div>
              <div class="bigdata-card-topic">Everyday digital life</div>
              <strong>Entertainment and apps</strong>
              <p>Streaming videos, music, games, social media posts, chats, shopping, and searches can all create data.</p>
            </div>
            <div class="bigdata-card">
              <div class="bigdata-card-icon bigdata-svg-icon">${bigDataIcon("weather")}</div>
              <div class="bigdata-card-topic">Science and forecasting</div>
              <strong>Weather and science</strong>
              <p>Weather forecasts use large amounts of measured data, such as temperature, pressure, wind, and precipitation.</p>
            </div>
            <div class="bigdata-card">
              <div class="bigdata-card-icon bigdata-svg-icon">${bigDataIcon("ads")}</div>
              <div class="bigdata-card-topic">Online platforms</div>
              <strong>Personalized ads</strong>
              <p>Online ads can be selected based on data about a person and data about people with similar characteristics.</p>
            </div>
            <div class="bigdata-card">
              <div class="bigdata-card-icon bigdata-svg-icon">${bigDataIcon("civic")}</div>
              <div class="bigdata-card-topic">Civic systems</div>
              <strong>Government and public safety</strong>
              <p>Data from different sources may be analyzed to solve or prevent crimes, which also raises privacy questions.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Ask before you trust the data system</h4>
          <div class="bigdata-question-card-grid">
            <div class="bigdata-question-card">Who is collecting the data?</div>
            <div class="bigdata-question-card">What type of data is being collected?</div>
            <div class="bigdata-question-card">What can be learned from the data?</div>
            <div class="bigdata-question-card">How could the data help people?</div>
            <div class="bigdata-question-card">What risks or harms could happen?</div>
            <div class="bigdata-question-card">How can people protect their privacy?</div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Context, not PII</h4>
          <p class="small-note">AI tools work better with context, but context should not include private or identifying details.</p>
          <div class="privacy-split-grid">
            <div class="privacy-card ok">
              <strong>Useful context to share</strong>
              <ul>
                <li>Grade level or reading level</li>
                <li>Assignment goal or rubric skill</li>
                <li>General topic</li>
                <li>What kind of help you want</li>
                <li>Anonymous example text</li>
              </ul>
            </div>
            <div class="privacy-card no">
              <strong>PII or private data to protect</strong>
              <ul>
                <li>Full name, address, phone, email, or student ID</li>
                <li>Birthdate, exact location, face, voice, or photo</li>
                <li>Grades, IEP/504, health, behavior, or family details</li>
                <li>Private stories about yourself or someone else</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Build a Data Track Reflection</h4>

          <div class="student-tool-grid">
            <div class="student-tool-field bigdata-wide-field">
              <strong>Choose an everyday activity</strong>
              <div class="bigdata-choice-grid" role="group" aria-label="Choose a data activity">
                <button type="button" class="bigdata-choice selected" data-activity="Streaming videos or music" onclick="selectBigDataActivity('Streaming videos or music')">
                  <strong>Streaming</strong><span>Videos or music</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using social media" onclick="selectBigDataActivity('Using social media')">
                  <strong>Social media</strong><span>Posts, likes, shares</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Online shopping" onclick="selectBigDataActivity('Online shopping')">
                  <strong>Shopping</strong><span>Searches and purchases</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using a map or location app" onclick="selectBigDataActivity('Using a map or location app')">
                  <strong>Location app</strong><span>Maps or directions</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using a smartwatch or fitness tracker" onclick="selectBigDataActivity('Using a smartwatch or fitness tracker')">
                  <strong>Wearable</strong><span>Steps or health data</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using a school Chromebook" onclick="selectBigDataActivity('Using a school Chromebook')">
                  <strong>School device</strong><span>Logins and activity</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using an AI chatbot" onclick="selectBigDataActivity('Using an AI chatbot')">
                  <strong>AI chatbot</strong><span>Prompts and responses</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using Google Search or AI Overview" onclick="selectBigDataActivity('Using Google Search or AI Overview')">
                  <strong>Search</strong><span>Queries and clicks</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Playing an online game" onclick="selectBigDataActivity('Playing an online game')">
                  <strong>Online game</strong><span>Progress and purchases</span>
                </button>
                <button type="button" class="bigdata-choice" data-activity="Using a smart speaker or voice assistant" onclick="selectBigDataActivity('Using a smart speaker or voice assistant')">
                  <strong>Voice assistant</strong><span>Voice requests</span>
                </button>
              </div>
              <input id="bigDataActivity" type="hidden" value="Streaming videos or music">
            </div>

            <div class="student-tool-field full">
              <strong>Choose a reflection focus</strong>
              <p class="small-note">Focus options change based on the activity you choose.</p>
              <div id="bigDataFocusGrid" class="bigdata-focus-grid" role="group" aria-label="Choose a reflection focus"></div>
              <input id="bigDataFocus" type="hidden" value="">
            </div>

            <div class="student-tool-field">
              <strong>What data might be collected?</strong>
              <textarea id="bigDataCollected" placeholder="Example: watch history, clicks, location, time spent, searches, device data"></textarea>
            </div>

            <div class="student-tool-field">
              <strong>How could this data help?</strong>
              <textarea id="bigDataHelp" placeholder="Example: recommendations, better service, safety, research, weather prediction"></textarea>
            </div>

            <div class="student-tool-field bigdata-wide-field">
              <strong>What risk or concern is there?</strong>
              <textarea id="bigDataRisk" placeholder="Example: privacy, profiling, unfair assumptions, targeted ads, surveillance"></textarea>
            </div>

            <div class="student-tool-field full">
              <strong>One privacy choice I can make</strong>
              <input id="bigDataPrivacyChoice" type="text" placeholder="Example: check privacy settings, limit location sharing, think before posting">
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateBigDataReflection()">Generate Reflection</button>
            <button type="button" class="secondary-btn" onclick="copyBigDataReflection()">Copy Reflection</button>
            <button type="button" class="secondary-btn" onclick="clearBigDataReflection()">Clear</button>
          </div>

          <label for="bigDataOutput"><strong>Copy/Paste Big Data Reflection</strong></label>
          <textarea id="bigDataOutput" class="bigdata-output" readonly placeholder="Generated reflection will appear here."></textarea>
          <div id="bigDataCopyStatus" class="copy-status hidden">Copied.</div>
        </div>

        <div class="citation-guidance-box">
          <strong>Source note:</strong> Adapted from Siemens Stiftung’s <em>Big data – Introduction</em> information sheet and the guideline for the “Big data” media package. Content licensed under CC BY-SA 4.0.
        </div>
      </div>
    `;

    const studentClaimCheckerResourceHtml = `
      <div class="claim-reflection-tool">
        <div class="teacher-note">
          <strong>AI Claim Checker</strong>
          <p class="small-note">Use this before you trust or reuse information from AI. AI can sound confident and still be wrong, incomplete, biased, or made up.</p>
        </div>

        <div class="ai-overview-required">
          <h4>Required: Google AI Overview Check</h4>
          <p><span class="mini-label">Start here</span> Google AI Overviews can be useful starting points, but they are not final sources. They summarize information and link to pages for deeper checking.</p>
          <div class="checklist-grid">
            <div class="checklist-card">
              <strong>1. Do not stop at the overview</strong>
              <p>Click at least one linked source. Read the source itself before using the claim.</p>
            </div>
            <div class="checklist-card">
              <strong>2. Check source quality</strong>
              <p>Ask who wrote it, when it was published, and whether it is expert, current, and relevant.</p>
            </div>
            <div class="checklist-card">
              <strong>3. Look for missing context</strong>
              <p>AI summaries can leave out limits, uncertainty, dates, exceptions, or disagreement.</p>
            </div>
            <div class="checklist-card">
              <strong>4. Verify elsewhere</strong>
              <p>For important claims, compare the source with another reliable source before using it.</p>
            </div>
          </div>
          <p class="small-note"><strong>Rule:</strong> You may use a Google AI Overview to find leads, but you should cite or rely on the original source, not the overview by itself.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Check the Claim</h4>

          <div class="student-tool-grid">
            <div class="student-tool-field full">
              <strong>AI claim or sentence</strong>
              <textarea id="claimText" placeholder="Paste or type the claim AI gave you."></textarea>
            </div>

            <div class="student-tool-field">
              <strong>What kind of claim is it?</strong>
              <select id="claimType">
                <option value="fact">Fact — can be checked</option>
                <option value="opinion">Opinion — someone’s view</option>
                <option value="prediction">Prediction — about what might happen</option>
                <option value="advice">Advice — tells someone what to do</option>
                <option value="creative">Creative idea — not a factual claim</option>
              </select>
            </div>

            <div class="student-tool-field">
              <strong>What source did you check?</strong>
              <input id="claimSource" type="text" placeholder="Example: Britannica, class notes, teacher-approved website">
            </div>

            <div class="student-tool-field full">
              <strong>What did you find?</strong>
              <textarea id="claimFinding" placeholder="Example: The date was correct, but the explanation left out an important cause."></textarea>
            </div>

            <div class="student-tool-field full">
              <strong>Decision</strong>
              <div class="student-decision-grid" role="group" aria-label="Claim decision">
                <button type="button" class="decision-card selected" data-decision="Use" onclick="selectClaimDecision('Use')">
                  <strong>Use</strong><span>The claim checks out.</span>
                </button>
                <button type="button" class="decision-card" data-decision="Revise" onclick="selectClaimDecision('Revise')">
                  <strong>Revise</strong><span>Some parts need fixing.</span>
                </button>
                <button type="button" class="decision-card" data-decision="Reject" onclick="selectClaimDecision('Reject')">
                  <strong>Reject</strong><span>It is false, unsupported, or unsafe.</span>
                </button>
                <button type="button" class="decision-card" data-decision="Ask Teacher" onclick="selectClaimDecision('Ask Teacher')">
                  <strong>Ask Teacher</strong><span>I am not sure.</span>
                </button>
              </div>
              <input id="claimDecision" type="hidden" value="Use">
            </div>

            <div class="student-tool-field full">
              <strong>Reason for decision</strong>
              <textarea id="claimReason" placeholder="Explain why you will use, revise, reject, or ask about this claim."></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateClaimCheck()">Generate Claim Check</button>
            <button type="button" class="secondary-btn" onclick="copyClaimCheck()">Copy Claim Check</button>
            <button type="button" class="secondary-btn" onclick="clearClaimCheck()">Clear</button>
          </div>

          <label for="claimOutput"><strong>Copy/Paste Claim Check</strong></label>
          <textarea id="claimOutput" class="student-tool-output" readonly placeholder="Generated claim check will appear here."></textarea>
          <div id="claimCopyStatus" class="copy-status hidden">Copied.</div>
        </div>
      </div>
    `;


    const studentAiReflectionResourceHtml = `
      <div class="claim-reflection-tool">
        <div class="teacher-note">
          <strong>AI Use Reflection</strong>
          <p class="small-note">Use this after an assignment when your teacher asks you to explain how AI supported your learning. This is different from a disclosure statement: a disclosure explains what AI did; a reflection explains what you did and learned.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Reflect on Your AI Use</h4>

          <div class="student-tool-grid">
            <div class="student-tool-field">
              <strong>I used AI to help with...</strong>
              <input id="reflectionHelpedWith" type="text" placeholder="Example: brainstorming, organizing notes, editing, checking claims">
            </div>

            <div class="student-tool-field">
              <strong>I kept ownership by...</strong>
              <input id="reflectionOwnership" type="text" placeholder="Example: writing my own final answer, choosing ideas myself">
            </div>

            <div class="student-tool-field">
              <strong>I checked or verified...</strong>
              <input id="reflectionChecked" type="text" placeholder="Example: dates, sources, facts, claims, image accuracy">
            </div>

            <div class="student-tool-field">
              <strong>I changed...</strong>
              <input id="reflectionChanged" type="text" placeholder="Example: wording, organization, one claim, my outline">
            </div>

            <div class="student-tool-field">
              <strong>I still need help with...</strong>
              <input id="reflectionHelpNeeded" type="text" placeholder="Example: citing, understanding sources, knowing when to stop">
            </div>

            <div class="student-tool-field">
              <strong>Next time, I will...</strong>
              <input id="reflectionNextTime" type="text" placeholder="Example: ask better questions, verify earlier, use fewer prompts">
            </div>

            <div class="student-tool-field full">
              <strong>Optional: teacher rule or AI-use level</strong>
              <input id="reflectionRule" type="text" placeholder="Example: Level 2 — AI for editing only">
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateAiUseReflection()">Generate Reflection</button>
            <button type="button" class="secondary-btn" onclick="copyAiUseReflection()">Copy Reflection</button>
            <button type="button" class="secondary-btn" onclick="clearAiUseReflection()">Clear</button>
          </div>

          <label for="reflectionOutput"><strong>Copy/Paste AI Use Reflection</strong></label>
          <textarea id="reflectionOutput" class="student-tool-output" readonly placeholder="Generated reflection will appear here."></textarea>
          <div id="reflectionCopyStatus" class="copy-status hidden">Copied.</div>
        </div>
      </div>
    `;

    const studentFollowUpRoutineResourceHtml = `
      <div class="student-followup-builder">
        <div class="teacher-note">
          <strong>Student Follow-Up Prompt Routine</strong>
          <p class="small-note">Use this when AI gives you something that is close, but not quite right. Do not ask AI to redo the whole assignment. Name what to keep, ask for one or two changes, then check whether the new answer still supports your own thinking.</p>
        </div>

        <div class="teacher-planner-card">
          <h4>Keep / Change / Check / Stop</h4>
          <div class="followup-routine-steps">
            <div class="followup-step-card">
              <span class="followup-step-number">1</span>
              <strong>Keep</strong>
              <p>Name what is useful, such as the structure, examples, or questions.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">2</span>
              <strong>Change</strong>
              <p>Ask for one or two focused changes. Do not ask AI to rewrite everything.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">3</span>
              <strong>Check</strong>
              <p>Check accuracy, teacher directions, sources, and whether it still sounds like your work.</p>
            </div>
            <div class="followup-step-card">
              <span class="followup-step-number">4</span>
              <strong>Stop</strong>
              <p>Stop when AI starts replacing your thinking, adding confusion, or moving beyond the assignment rules.</p>
            </div>
          </div>
        </div>

        <div class="teacher-planner-card">
          <h4>Build a Student Follow-Up Prompt</h4>

          <div class="followup-grid">
            <div class="followup-field">
              <strong>What are you working on?</strong>
              <input id="studentFollowupContext" type="text" placeholder="Example: my paragraph about renewable energy">
            </div>

            <div class="followup-field">
              <strong>Teacher rule / AI level</strong>
              <input id="studentFollowupRule" type="text" placeholder="Example: AI can help with editing, but cannot write for me">
            </div>

            <div class="followup-field full">
              <strong>What should AI keep?</strong>
              <div class="directions-chip-group" data-target="studentFollowupKeep">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the structure')">Structure</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'my original ideas')">My ideas</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the examples I already wrote')">My examples</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'the order of my points')">Order of points</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'my voice')">My voice</button>
              </div>
              <textarea id="studentFollowupKeep" placeholder="Example: Keep my ideas and the order of my points."></textarea>
            </div>

            <div class="followup-field full">
              <strong>What should AI change? Pick one or two.</strong>
              <div class="directions-chip-group" data-target="studentFollowupChange">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'make one sentence clearer')">One clearer sentence</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'ask me questions instead of giving answers')">Ask me questions</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'point out what is confusing')">Find confusing parts</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'suggest a better transition')">Transition</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'help me check whether I answered the prompt')">Check prompt match</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'identify claims I should verify')">Claims to verify</button>
              </div>
              <textarea id="studentFollowupChange" placeholder="Example: Ask me questions and point out what is confusing."></textarea>
            </div>

            <div class="followup-field full">
              <strong>What should AI avoid?</strong>
              <div class="directions-chip-group" data-target="studentFollowupAvoid">
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not write the final answer for me')">No final answer</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not add new facts unless you tell me what to verify')">No unchecked facts</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not change my main idea')">Keep main idea</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not make it sound like an adult wrote it')">Keep my voice</button>
                <button type="button" class="option-chip" onclick="toggleDirectionsChip(this, 'Do not use private information')">No private info</button>
              </div>
              <textarea id="studentFollowupAvoid" placeholder="Example: Do not write the final answer for me. Do not add unchecked facts."></textarea>
            </div>
          </div>

          <div class="button-row">
            <button type="button" onclick="generateStudentFollowUpPrompt()">Generate Follow-Up Prompt</button>
            <button type="button" class="secondary-btn" onclick="copyStudentFollowUpPrompt()">Copy Prompt</button>
            <button type="button" class="secondary-btn" onclick="clearStudentFollowUpPrompt()">Clear</button>
          </div>

          <label for="studentFollowupOutput"><strong>Copy/Paste Student Follow-Up Prompt</strong></label>
          <textarea id="studentFollowupOutput" class="student-followup-output" readonly placeholder="Generated follow-up prompt will appear here."></textarea>
          <div id="studentFollowupCopyStatus" class="copy-status hidden">Copied.</div>
        </div>

        <div class="teacher-planner-card">
          <h4>When should I stop?</h4>
          <div class="student-stop-grid">
            <div class="student-stop-card continue">
              <strong>Continue carefully when...</strong>
              <p>AI is helping you ask questions, organize your own thinking, revise your own work, or find what to check.</p>
            </div>
            <div class="student-stop-card ask">
              <strong>Ask a teacher when...</strong>
              <p>You are unsure whether AI is allowed, the output seems confusing, or you do not know how much help is too much.</p>
            </div>
            <div class="student-stop-card stop">
              <strong>Stop using AI when...</strong>
              <p>AI is writing the work for you, changing your meaning, adding facts you cannot verify, asking for private information, or helping you break the assignment rules.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const vocabularyResourceHtml = `
        <details class="vocab-level">
          <summary>Foundational Terms</summary>
          <div class="vocab-body">
            <p class="small-note">Best for early introduction, review, or students who need simpler language.</p>
            <div class="flashcard-grid">
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Artificial Intelligence (AI)">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Artificial Intelligence (AI)</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Artificial Intelligence (AI)</strong>
                    <p>Technology that can use patterns to make predictions, recommendations, or new content.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Prompt">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Prompt</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Prompt</strong>
                    <p>The directions or question a person gives to an AI tool.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Data">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Data</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Data</strong>
                    <p>Information or examples a computer system can use.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Pattern">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Pattern</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Pattern</strong>
                    <p>Something that repeats or shows up often enough to help make a guess.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Private Information">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Private Information</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Private Information</strong>
                    <p>Information that should not be shared, such as passwords, addresses, personal problems, or other sensitive details.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Trusted Adult">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Trusted Adult</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Trusted Adult</strong>
                    <p>A real person students can go to for help, safety, or serious concerns. AI is not a trusted adult.</p>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </details>

        <details class="vocab-level">
          <summary>Responsible Use Terms</summary>
          <div class="vocab-body">
            <p class="small-note">Best for understanding school expectations and assignment rules.</p>
            <div class="flashcard-grid">
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Academic Integrity">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Academic Integrity</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Academic Integrity</strong>
                    <p>Being honest about your work, your sources, and the help you used.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Disclosure">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Disclosure</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Disclosure</strong>
                    <p>An explanation of how AI was used to support an assignment.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Citation">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Citation</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Citation</strong>
                    <p>A formal way to give credit to a source or tool when required.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Original Thinking">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Original Thinking</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Original Thinking</strong>
                    <p>The student’s own reasoning, choices, explanations, and understanding.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: AI-Assisted Work">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>AI-Assisted Work</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>AI-Assisted Work</strong>
                    <p>Work where AI supported part of the process, such as brainstorming, organizing, feedback, or editing.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Teacher Expectations">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Teacher Expectations</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Teacher Expectations</strong>
                    <p>The specific rules a teacher gives for whether and how AI may be used on an assignment.</p>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </details>

        <details class="vocab-level">
          <summary>Verification and Media Terms</summary>
          <div class="vocab-body">
            <p class="small-note">Best for checking information, media, sources, and AI-generated claims.</p>
            <div class="flashcard-grid">
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Verify">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Verify</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Verify</strong>
                    <p>Check whether information is accurate using reliable sources.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Reliable Source">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Reliable Source</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Reliable Source</strong>
                    <p>A source that is trustworthy, accurate, current, and appropriate for the question being asked.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Claim">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Claim</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Claim</strong>
                    <p>A statement that may need evidence before it is accepted as true.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Hallucination">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Hallucination</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Hallucination</strong>
                    <p>An AI-generated answer that sounds real but is false, unsupported, or made up.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Bias">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Bias</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Bias</strong>
                    <p>An unfair pattern, missing perspective, or one-sided result that can affect people or information.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Synthetic Media">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Synthetic Media</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Synthetic Media</strong>
                    <p>Images, audio, video, or text made or changed using digital or AI tools.</p>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </details>

        <details class="vocab-level">
          <summary>Advanced Terms</summary>
          <div class="vocab-body">
            <p class="small-note">Best for older students, teacher discussion, or taskforce review.</p>
            <div class="flashcard-grid">
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Model">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Model</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Model</strong>
                    <p>A system trained to recognize patterns and produce predictions, classifications, or generated output.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Training Data">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Training Data</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Training Data</strong>
                    <p>The examples or information used to help an AI system learn patterns.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Human Oversight">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Human Oversight</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Human Oversight</strong>
                    <p>A person reviewing, questioning, and taking responsibility for AI-supported work.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Transparency">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Transparency</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Transparency</strong>
                    <p>Being clear about how something was made, what tools were used, and what limits may exist.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Accountability">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Accountability</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Accountability</strong>
                    <p>Being responsible for choices, results, and consequences, even when technology is involved.</p>
                  </span>
                </span>
              </button>
              <button class="flashcard" type="button" onclick="toggleFlashcard(this)" aria-label="Flip vocabulary card: Environmental Impact">
                <span class="flashcard-inner">
                  <span class="flashcard-front">
                    <strong>Environmental Impact</strong>
                    <span>Click to flip</span>
                  </span>
                  <span class="flashcard-back">
                    <strong>Environmental Impact</strong>
                    <p>The real-world energy, water, and resource costs connected to technology use.</p>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </details>
      `;
    const practiceToolsResourceHtml = `
        <details class="tool-card">
          <summary><span>Prompt Builder</span></summary>
          <div class="tool-card-body">
            <p class="small-note">Type a school-appropriate prompt. The tool scores the prompt for clarity, learning ownership, and responsible use.</p>

            <label for="promptInput"><strong>Student Prompt</strong></label>
            <textarea id="promptInput" placeholder="Example: Help me organize my notes about renewable energy into an outline, using my ideas only. Do not write the final paragraph for me."></textarea>

            <div class="button-row">
              <button onclick="scorePrompt()">Score My Prompt</button>
              <button class="secondary-btn" onclick="clearPromptTool()">Clear</button>
            </div>

            <div id="promptScoreOutput" class="score-box hidden"></div>
          </div>
        </details>

        <details class="tool-card">
          <summary><span>Disclosure Builder</span></summary>
          <div class="tool-card-body">
            <p class="small-note">Fill this out when your teacher asks you to explain how AI supported your work.</p>
            <div class="disclosure-formula-box">
              <strong>Disclosure Statement Formula</strong>
              <span class="formula-line">Tool/link + Specific Use + Prompt(s) + How the Output Was Used</span>
            </div>

            <div class="disclosure-example-box">
              <strong>Recommended format</strong>
              <code>I acknowledge the use of [AI system(s) and link] to [specific use of generative artificial intelligence]. The prompts used include [list of prompts]. The output from these prompts was used to [explain use].</code>
            </div>

            <div class="citation-guidance-box">
              <strong>Citation reminder:</strong> AI disclosure statements are not the same as formal citations. A disclosure explains how AI was used. Your teacher may also require you to cite AI-generated content using an approved citation format, such as MLA or APA.
            </div>

            <div class="disclosure-formula-box">
              <strong>Disclosure Statement Formula</strong>
              <span class="formula-line">Tool/link + Specific Use + Prompt(s) + How the Output Was Used</span>
            </div>

            <div class="citation-guidance-box">
              <strong>Citation reminder:</strong> AI disclosure statements are not the same as formal citations. A disclosure explains how AI was used. For MLA or APA, follow your teacher’s directions and include the AI tool, prompt or description, date used, and link when available.
            </div>

            <label for="aiToolName"><strong>AI tool used</strong></label>
            <input id="aiToolName" type="text" placeholder="Example: ChatGPT, Claude, Gemini, Canva, etc." />

            <label for="aiToolLink"><strong>Tool link</strong></label>
            <input id="aiToolLink" type="text" placeholder="Example: https://chat.openai.com/" />

            <label for="aiPurpose"><strong>What did you use AI to help with?</strong></label>
            <input id="aiPurpose" type="text" placeholder="Example: brainstorm topic ideas, organize notes, get feedback, generate an image" />

            <label for="aiPrompts"><strong>Prompt(s) used</strong></label>
            <textarea id="aiPrompts" placeholder="Paste or type the prompt(s) you used."></textarea>

            <label for="aiOutputUse"><strong>How did you use the output?</strong></label>
            <textarea id="aiOutputUse" placeholder="Example: I used the suggestions to revise my own outline. I did not copy the final answer."></textarea>

            <div class="button-row">
              <button onclick="generateDisclosure()">Generate Disclosure</button>
              <button class="secondary-btn" onclick="copyDisclosure()">Copy Disclosure</button>
              <button class="secondary-btn" onclick="clearDisclosureTool()">Clear</button>
            </div>

            <label for="disclosureOutput"><strong>Copy/Paste Disclosure Statement</strong></label>
            <textarea id="disclosureOutput" class="copy-output" readonly placeholder="Your disclosure statement will appear here."></textarea>
            <div id="copyStatus" class="copy-status hidden">Copied.</div>
          </div>
        </details>
      `;

    let expandedResource = null;





    const ecoQuizAnswers = {
      student: {},
      teacher: {}
    };

    function selectEcoAnswer(path, questionId, selected, correct, feedback) {
      ecoQuizAnswers[path][questionId] = selected === correct;

      document.querySelectorAll(`[data-eco-path="${path}"][data-eco-question="${questionId}"]`).forEach(button => {
        button.classList.toggle("selected", button.dataset.ecoValue === selected);
      });

      const feedbackBox = document.getElementById(`${path}EcoFeedback${questionId}`);
      if (feedbackBox) {
        feedbackBox.className = "eco-feedback " + (selected === correct ? "correct" : "incorrect");
        feedbackBox.textContent = feedback;
      }

      updateEcoBadge(path);
    }

    function updateEcoBadge(path) {
      const answers = ecoQuizAnswers[path];
      const total = 4;
      const correct = Object.values(answers).filter(Boolean).length;
      const badge = document.getElementById(`${path}EcoBadgeStatus`);

      if (!badge) return;

      if (Object.keys(answers).length < total) {
        badge.innerHTML = `<strong>Eco-Badge progress:</strong> ${Object.keys(answers).length} of ${total} questions answered.`;
        return;
      }

      if (correct >= 3) {
        badge.innerHTML = `<strong>Eco-Badge earned:</strong> ${correct} of ${total} correct. You demonstrated AI environmental awareness.`;
        badge.classList.add("earned");
      } else {
        badge.innerHTML = `<strong>Eco-Badge not yet earned:</strong> ${correct} of ${total} correct. Review the cards and try again.`;
        badge.classList.remove("earned");
      }
    }

    function generateEcoReflection(path) {
      const prefix = path === "teacher" ? "teacher" : "student";
      const actionElement = document.getElementById(`${prefix}EcoAction`);
      const concernElement = document.getElementById(`${prefix}EcoConcern`);
      const greenwashElement = document.getElementById(`${prefix}EcoGreenwash`);

      const action = actionElement && actionElement.value.trim() ? actionElement.value.trim() : "use AI only when it adds value and avoid unnecessary generations";
      const concern = concernElement && concernElement.value.trim() ? concernElement.value.trim() : "AI runs in data centers that use electricity and may use water for cooling.";
      const greenwash = greenwashElement && greenwashElement.value.trim() ? greenwashElement.value.trim() : "What exactly was measured, what was left out, and who verified the claim?";

      let output;

      if (path === "teacher") {
        output = [
          "AI Eco-Awareness Reflection",
          "",
          `A key teaching point: ${concern}`,
          `A lower-impact classroom habit to model: ${action}`,
          `A greenwashing question students should ask: ${greenwash}`,
          "",
          `Teacher reflection: I want students to understand that AI can be useful, but environmental claims need context, evidence, and human judgment. In class, I can model ${action} and teach students to ask: ${greenwash}`
        ].join("\n");
      } else {
        output = [
          "AI Eco-Awareness Reflection",
          "",
          `What I learned: ${concern}`,
          `One lower-impact habit I can use: ${action}`,
          `One question I should ask about green AI claims: ${greenwash}`,
          "",
          `My reflection: I learned that ${concern.charAt(0).toLowerCase() + concern.slice(1)} One lower-impact habit I can use is to ${action}. If a company says its AI is green or eco-friendly, I should ask: ${greenwash}`
        ].join("\n");
      }

      document.getElementById(`${prefix}EcoOutput`).value = output;
    }

    function copyEcoReflection(path) {
      const prefix = path === "teacher" ? "teacher" : "student";
      const output = document.getElementById(`${prefix}EcoOutput`);
      if (!output.value.trim()) generateEcoReflection(path);

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).catch(() => document.execCommand("copy"));
    }

    function clearEcoReflection(path) {
      const prefix = path === "teacher" ? "teacher" : "student";
      [`${prefix}EcoAction`, `${prefix}EcoConcern`, `${prefix}EcoGreenwash`, `${prefix}EcoOutput`].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });
    }


    function generateSubmitChecklist() {
      const checks = [];
      for (let i = 1; i <= 8; i++) {
        const box = document.getElementById("submitCheck" + i);
        if (box && box.checked) checks.push(i);
      }

      const noteElement = document.getElementById("submitProcessNote");
      const note = noteElement && noteElement.value.trim() ? noteElement.value.trim() : "[briefly explain how AI supported your process]";

      const output = [
        "Before You Submit Note",
        "",
        "Checklist completed: " + checks.length + " of 8 items checked.",
        "Process note: " + note,
        "",
        "I understand that AI may support my work, but I am responsible for the final submission. My thinking, source checking, and teacher expectations come first."
      ].join("\n");

      const outputElement = document.getElementById("submitChecklistOutput");
      if (outputElement) outputElement.value = output;
    }

    function copySubmitChecklist() {
      const output = document.getElementById("submitChecklistOutput");
      if (!output) return;
      if (!output.value.trim()) generateSubmitChecklist();
      output.select();
      output.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(output.value).catch(() => document.execCommand("copy"));
    }

    function clearSubmitChecklist() {
      for (let i = 1; i <= 8; i++) {
        const box = document.getElementById("submitCheck" + i);
        if (box) box.checked = false;
      }
      ["submitProcessNote", "submitChecklistOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });
    }



    function selectGoogleToolUse(tool) {
      document.querySelectorAll(".tool-choice-btn").forEach(button => {
        button.classList.toggle("selected", button.dataset.googleTool === tool);
      });

      const recommendations = {
        planning: "<strong>Suggested tool:</strong> Gemini. Use it for general planning or drafting, then review, revise, and verify before using anything with students.",
        sources: "<strong>Suggested tool:</strong> NotebookLM. Use it when the output should stay grounded in specific documents, readings, policies, or class materials.",
        repeat: "<strong>Suggested tool:</strong> Gems. Create a focused reusable helper for a repeated task, such as simplifying directions or generating source-check questions.",
        search: "<strong>Suggested tool:</strong> Google Search with AI Overview as a starting point. Click and check original sources before trusting or citing claims."
      };

      const box = document.getElementById("googleToolRecommendation");
      if (box) box.innerHTML = recommendations[tool] || recommendations.planning;
    }

    function generateGemStarter() {
      const purpose = document.getElementById("gemPurpose").value.trim() || "[specific repeated task]";
      const audience = document.getElementById("gemAudience").value.trim() || "[audience]";
      const format = document.getElementById("gemFormat").value.trim() || "[preferred output format]";
      const guardrail = document.getElementById("gemGuardrail").value.trim() || "Do not include student PII or make unsupported claims.";

      const output = [
        "Gem Instructions Draft",
        "",
        "Purpose:",
        "You are a focused helper for " + purpose + ".",
        "",
        "Audience:",
        "The audience is " + audience + ".",
        "",
        "Task:",
        "Help me complete this repeated task clearly and efficiently. Ask clarifying questions if the request is missing important context.",
        "",
        "Output format:",
        format,
        "",
        "Guardrails:",
        guardrail,
        "Keep the human teacher in control. Do not invent facts. Flag anything that should be verified."
      ].join("\n");

      document.getElementById("gemStarterOutput").value = output;
    }

    function copyGemStarter() {
      const output = document.getElementById("gemStarterOutput");
      if (!output) return;
      if (!output.value.trim()) generateGemStarter();
      output.select();
      output.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(output.value).catch(() => document.execCommand("copy"));
    }

    function clearGemStarter() {
      ["gemPurpose", "gemAudience", "gemFormat", "gemGuardrail", "gemStarterOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });
    }

    
    function generateTeacherAiDisclosure() {
      const use = document.getElementById("teacherDisclosureUse").value || "creating this material";
      const review = document.getElementById("teacherDisclosureReview").value || "reviewed and revised";
      const noPii = document.getElementById("teacherDisclosureCheck1");
      const reviewed = document.getElementById("teacherDisclosureCheck2");

      let note = "Teacher transparency note: AI helped with " + use + "; I " + review + " the final material.";

      if (noPii && noPii.checked && reviewed && reviewed.checked) {
        note = "Teacher transparency note: AI helped with " + use + "; no student information was used, and I " + review + " the final material.";
      } else if (noPii && noPii.checked) {
        note = "Teacher transparency note: AI helped with " + use + "; no student information was used.";
      }

      const output = document.getElementById("teacherAiDisclosureOutput");
      if (output) output.value = note;
    }

    function copyTeacherAiDisclosure() {
      const output = document.getElementById("teacherAiDisclosureOutput");
      if (!output) return;
      if (!output.value.trim()) generateTeacherAiDisclosure();
      output.select();
      output.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(output.value).catch(() => document.execCommand("copy"));
    }

    function clearTeacherAiDisclosure() {
      const output = document.getElementById("teacherAiDisclosureOutput");
      if (output) output.value = "";
      const use = document.getElementById("teacherDisclosureUse");
      if (use) use.value = "planning this assignment";
      const review = document.getElementById("teacherDisclosureReview");
      if (review) review.value = "reviewed and revised";
      ["teacherDisclosureCheck1", "teacherDisclosureCheck2"].forEach(id => {
        const box = document.getElementById(id);
        if (box) box.checked = false;
      });
    }


    function selectTeacherReadiness(level) {
      const input = document.getElementById("teacherReadinessLevel");
      if (input) input.value = level;

      document.querySelectorAll(".readiness-card").forEach(button => {
        button.classList.toggle("selected", button.dataset.readiness === level);
      });

      const guidance = {
        exploring: "<strong>Suggested starting point:</strong> Use AI for your own planning only. Do not require students to use AI yet. Practice verification, privacy checks, and disclosure language first.",
        cautious: "<strong>Suggested starting point:</strong> Use AI for teacher planning, examples, or comment stems. Allow students to use AI only for low-stakes planning with a simple disclosure.",
        guided: "<strong>Suggested starting point:</strong> Use a defined AI-use level for students. Require verification, disclosure, and a human check-in before submission.",
        confident: "<strong>Suggested starting point:</strong> Design AI-aware assignments that include source checking, process evidence, disclosure, and reflection. Keep human judgment central."
      };

      const guidanceBox = document.getElementById("teacherReadinessGuidance");
      if (guidanceBox) guidanceBox.innerHTML = guidance[level] || guidance.exploring;
    }

    function generateLaunchKit() {
      const checks = [];
      for (let i = 1; i <= 8; i++) {
        const box = document.getElementById("launchCheck" + i);
        if (box && box.checked) checks.push(i);
      }

      const readinessInput = document.getElementById("teacherReadinessLevel");
      const readiness = readinessInput ? readinessInput.value : "exploring";

      const classElement = document.getElementById("launchClass");
      const levelElement = document.getElementById("launchLevel");
      const noteElement = document.getElementById("launchNote");

      const className = classElement && classElement.value.trim() ? classElement.value.trim() : "[class or assignment]";
      const level = levelElement && levelElement.value.trim() ? levelElement.value.trim() : "[AI-use level]";
      const note = noteElement && noteElement.value.trim() ? noteElement.value.trim() : "[teacher note]";

      const readinessLabels = {
        exploring: "Exploring",
        cautious: "Cautious implementer",
        guided: "Guided classroom use",
        confident: "Confident designer"
      };

      const output = [
        "AI Classroom Launch Note",
        "",
        "Teacher readiness level: " + (readinessLabels[readiness] || "Exploring"),
        "Class / assignment: " + className,
        "AI-use level for students: " + level,
        "Launch checklist completed: " + checks.length + " of 8 items checked.",
        "",
        "Student-facing expectation:",
        "AI may support learning only within the assignment rules. Students must keep ownership of their thinking, verify important claims, disclose AI use when required, and be ready to explain their process.",
        "",
        "Teacher transparency note:",
        "I may use AI to help plan, organize, or clarify instructional materials. I review and revise anything AI helps create. I do not use AI as a replacement for professional judgment, student privacy, or the human feedback students deserve.",
        "",
        "Teacher note:",
        note,
        "",
        "Feedback reminder:",
        "AI may help draft or organize feedback, but the teacher reviews, revises, personalizes, and owns the final feedback. Human judgment stays at the center."
      ].join("\n");

      const outputElement = document.getElementById("launchKitOutput");
      if (outputElement) outputElement.value = output;
    }

    function copyLaunchKit() {
      const output = document.getElementById("launchKitOutput");
      if (!output) return;
      if (!output.value.trim()) generateLaunchKit();
      output.select();
      output.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(output.value).catch(() => document.execCommand("copy"));
    }

    function clearLaunchKit() {
      for (let i = 1; i <= 8; i++) {
        const box = document.getElementById("launchCheck" + i);
        if (box) box.checked = false;
      }

      ["launchClass", "launchLevel", "launchNote", "launchKitOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      selectTeacherReadiness("exploring");
    }



    
    const bigDataFocusOptions = {
      "Streaming videos or music": [
        ["Recommendations", "watch history and likes", "watch history, likes, skips, searches, time spent, and device data", "recommend videos or music that match my interests", "it could create a profile of my habits or keep me watching longer", "pause or clear watch history and check recommendation settings"],
        ["Time spent", "how long I watch", "time spent, autoplay choices, pauses, rewatches, and viewing patterns", "improve the app and suggest content", "the app may use the data to keep my attention for longer than I planned", "turn off autoplay or set a time limit"],
        ["Ads", "interests and targeting", "watch topics, clicks, searches, and ad interactions", "show ads or suggestions related to my interests", "my interests could be used for targeted ads or assumptions about me", "review ad settings and avoid clicking unnecessary tracking links"]
      ],
      "Using social media": [
        ["Posts and likes", "what I share or react to", "posts, likes, comments, shares, follows, and time spent", "show posts that match my interests", "it can reveal my opinions, relationships, mood, or habits", "think before posting and check who can see my account"],
        ["Friends and networks", "who I interact with", "followers, messages, tags, contacts, and interaction patterns", "recommend friends, groups, or content", "it can map my relationships and make private connections visible", "limit tagging, contact syncing, and public profile details"],
        ["Location and photos", "where and when", "photo metadata, location tags, timestamps, faces, and places", "organize memories or suggest local content", "it could reveal where I am, where I go, or who I am with", "avoid posting location in real time and review photo permissions"]
      ],
      "Online shopping": [
        ["Searches", "what I look for", "searches, clicks, product views, wish lists, and time spent", "recommend products and make shopping easier", "it can build a profile of my interests, money habits, or family needs", "clear shopping history and avoid saving unnecessary information"],
        ["Purchases", "what I buy", "purchase history, payment details, shipping address, and returns", "track orders and suggest related items", "purchase data can reveal personal routines or sensitive needs", "use trusted sites and save only necessary payment information"],
        ["Targeted ads", "why ads follow me", "views, abandoned carts, clicks, and browsing across sites", "show reminders or deals", "ads can follow me across apps and websites", "check cookie settings and limit ad personalization"]
      ],
      "Using a map or location app": [
        ["Location history", "places I go", "GPS location, routes, saved places, searches, and timestamps", "give directions and traffic estimates", "it can reveal home, school, routines, or places I visit", "use location only while using the app and review location history"],
        ["Routes", "how I travel", "starting points, destinations, speed, transportation type, and route choices", "suggest faster routes or transit options", "patterns could reveal my schedule or habits", "avoid saving sensitive locations and delete old trips"],
        ["Nearby suggestions", "places around me", "current location, searches, ratings, and nearby businesses", "find useful places nearby", "the app may infer what I like or where I spend time", "turn off precise location when it is not needed"]
      ],
      "Using a smartwatch or fitness tracker": [
        ["Health data", "body and activity", "steps, heart rate, sleep, workouts, and movement patterns", "track health goals and activity", "health-related data is sensitive and could reveal private information", "check health data sharing and connect only trusted apps"],
        ["Location", "routes and exercise", "exercise routes, pace, location, timestamps, and routines", "track distance and progress", "routes can reveal home, school, or daily patterns", "hide maps from public posts and limit route sharing"],
        ["Goals and habits", "patterns over time", "daily goals, streaks, reminders, and activity trends", "encourage healthy routines", "the app may pressure me or make assumptions from incomplete data", "adjust notifications and review what is shared"]
      ],
      "Using a school Chromebook": [
        ["Logins", "school account use", "login times, device ID, account activity, and app use", "keep accounts secure and support learning tools", "school activity data should be used carefully and only for appropriate purposes", "use my own account and sign out when needed"],
        ["Browsing", "websites and searches", "visited sites, searches, tabs, downloads, and timestamps", "support safety, troubleshooting, and school expectations", "browsing data can reveal interests, mistakes, or private questions", "keep school devices for school tasks and ask a trusted adult for sensitive topics"],
        ["Assignments", "work and edits", "document edits, comments, submissions, and revision history", "show progress and help teachers give support", "work data can show learning needs and should be protected", "share schoolwork only with the correct people"]
      ],
      "Using an AI chatbot": [
        ["Prompts", "what I ask", "prompts, uploaded text, responses, timing, and account data", "answer questions and improve responses", "prompts can include private information by accident", "remove names, personal details, and private situations before prompting"],
        ["Responses", "what AI gives back", "chat history, ratings, copied text, and feedback", "make future answers more useful", "AI output can be wrong, biased, or not in my voice", "verify important claims and rewrite in my own words"],
        ["Uploaded files", "documents and images", "file text, images, metadata, and instructions", "summarize or analyze materials", "files may contain names, grades, faces, or private information", "do not upload private or identifiable information"]
      ],
      "Using Google Search or AI Overview": [
        ["Queries", "what I search", "search terms, clicks, location, device data, and time", "find information and improve search results", "searches can reveal questions, interests, worries, or needs", "use careful search terms and check account/privacy settings"],
        ["Clicks", "which sources I open", "clicked links, time on pages, location, and browser data", "rank useful results", "click patterns may be used to profile interests", "use reliable sources and clear history when appropriate"],
        ["AI Overview", "summary and source checking", "query, generated summary interaction, clicked sources, and feedback", "give a quick starting summary", "the overview may miss context or make unsupported claims", "click and check original sources instead of trusting the overview alone"]
      ],
      "Playing an online game": [
        ["Progress", "levels and choices", "levels, scores, play time, achievements, and choices", "save progress and adjust difficulty", "game data can show habits, attention, or spending patterns", "use privacy settings and avoid connecting unnecessary accounts"],
        ["Chat", "messages and usernames", "chat messages, usernames, reports, friends, and voice data", "support communication and safety moderation", "chat can reveal personal information or connect me with strangers", "do not share personal details and use reporting/blocking tools"],
        ["Purchases", "items and money", "in-app purchases, clicks, ads watched, and rewards", "manage purchases and recommend items", "games may encourage spending or track what I want", "ask before purchases and turn off unnecessary tracking"]
      ],
      "Using a smart speaker or voice assistant": [
        ["Voice requests", "what I say", "voice recordings or transcripts, commands, time, and account data", "answer questions and complete tasks", "voice requests may include private conversations or background sounds", "mute the microphone when not needed and review voice history"],
        ["Home routines", "patterns at home", "alarms, reminders, smart home commands, and routines", "automate tasks and reminders", "it may reveal when people are home or what routines they follow", "limit connected devices and review shared accounts"],
        ["Personalization", "recognizing users", "voice match, preferences, contacts, and music choices", "give personalized answers", "personalization can connect voice, identity, and habits", "check voice match and personalization settings"]
      ]
    };

    function normalizeBigDataFocus(row) {
      return {
        title: row[0],
        detail: row[1],
        collected: row[2],
        help: row[3],
        risk: row[4],
        privacy: row[5]
      };
    }

    function renderBigDataFocusOptions(activity) {
      const grid = document.getElementById("bigDataFocusGrid");
      if (!grid) return;

      const rows = bigDataFocusOptions[activity] || bigDataFocusOptions["Streaming videos or music"];
      const options = rows.map(normalizeBigDataFocus);

      grid.innerHTML = options.map((option, index) => `
        <button type="button" class="bigdata-focus-choice ${index === 0 ? "selected" : ""}" data-focus="${option.title}" onclick="selectBigDataFocus(${JSON.stringify(activity)}, ${JSON.stringify(option.title)})">
          <strong>${option.title}</strong>
          <span>${option.detail}</span>
        </button>
      `).join("");

      selectBigDataFocus(activity, options[0].title, true);
    }

    function selectBigDataActivity(activity) {
      const input = document.getElementById("bigDataActivity");
      if (input) input.value = activity;

      document.querySelectorAll(".bigdata-choice").forEach(button => {
        button.classList.toggle("selected", button.dataset.activity === activity);
      });

      renderBigDataFocusOptions(activity);
    }

    function selectBigDataFocus(activity, focusTitle, silent) {
      const rows = bigDataFocusOptions[activity] || bigDataFocusOptions["Streaming videos or music"];
      const options = rows.map(normalizeBigDataFocus);
      const focus = options.find(item => item.title === focusTitle) || options[0];

      const input = document.getElementById("bigDataFocus");
      if (input) input.value = focus.title;

      document.querySelectorAll(".bigdata-focus-choice").forEach(button => {
        button.classList.toggle("selected", button.dataset.focus === focus.title);
      });

      const collected = document.getElementById("bigDataCollected");
      const help = document.getElementById("bigDataHelp");
      const risk = document.getElementById("bigDataRisk");
      const privacy = document.getElementById("bigDataPrivacyChoice");

      if (collected) {
        collected.value = "";
        collected.placeholder = `List 2–3 data clues related to ${focus.detail}.`;
      }
      if (help) {
        help.value = "";
        help.placeholder = `How could ${focus.title.toLowerCase()} make the tool more useful?`;
      }
      if (risk) {
        risk.value = "";
        risk.placeholder = `What concern might come from tracking ${focus.detail}?`;
      }
      if (privacy) {
        privacy.value = "";
        privacy.placeholder = "Name one setting, habit, or question that gives you more control.";
      }

      const output = document.getElementById("bigDataOutput");
      if (output && !silent) output.value = "";
      const status = document.getElementById("bigDataCopyStatus");
      if (status) status.classList.add("hidden");
    }


    document.addEventListener("click", event => {
      const focusButton = event.target.closest(".bigdata-focus-choice");
      if (!focusButton) return;

      const activityInput = document.getElementById("bigDataActivity");
      const activity = activityInput?.value || "Streaming videos or music";
      const focusTitle = focusButton.dataset.focus;

      if (focusTitle) {
        event.preventDefault();
        selectBigDataFocus(activity, focusTitle);
      }
    });

function generateBigDataReflection() {
      const activity = document.getElementById("bigDataActivity").value || "an everyday digital activity";
      if (!document.getElementById("bigDataFocus")?.value) {
        selectBigDataActivity(document.getElementById("bigDataActivity")?.value || "Streaming videos or music");
      }
      const focus = document.getElementById("bigDataFocus").value || "one data/privacy focus";
      const collected = document.getElementById("bigDataCollected").value.trim() || "[data that might be collected]";
      const help = document.getElementById("bigDataHelp").value.trim() || "[how the data could help]";
      const risk = document.getElementById("bigDataRisk").value.trim() || "[a risk or concern]";
      const privacy = document.getElementById("bigDataPrivacyChoice").value.trim() || "[one privacy choice I can make]";

      const output = [
        "Big Data Reflection",
        "",
        `Activity: ${activity}`,
        `Focus: ${focus}`,
        `Data that might be collected: ${collected}`,
        `How the data could help: ${help}`,
        `Risk or concern: ${risk}`,
        `One privacy choice I can make: ${privacy}`,
        "",
        "Big data can be useful, but I should ask who is collecting data, what they are collecting, how it is used, and how I can protect my privacy."
      ].join("\n");

      document.getElementById("bigDataOutput").value = output;
      document.getElementById("bigDataCopyStatus").classList.add("hidden");
    }

    function copyBigDataReflection() {
      const output = document.getElementById("bigDataOutput");
      if (!output.value.trim()) generateBigDataReflection();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("bigDataCopyStatus");
        status.textContent = "Big data reflection copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("bigDataCopyStatus");
        status.textContent = "Big data reflection copied.";
        status.classList.remove("hidden");
      });
    }

    function clearBigDataReflection() {
      ["bigDataFocus", "bigDataCollected", "bigDataHelp", "bigDataRisk", "bigDataPrivacyChoice", "bigDataOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      selectBigDataActivity("Streaming videos or music");

      const status = document.getElementById("bigDataCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function selectClaimDecision(decision) {
      const input = document.getElementById("claimDecision");
      if (input) input.value = decision;

      document.querySelectorAll(".decision-card").forEach(card => {
        card.classList.toggle("selected", card.dataset.decision === decision);
      });
    }

    function generateClaimCheck() {
      const claim = document.getElementById("claimText").value.trim() || "[claim from AI]";
      const type = document.getElementById("claimType").value;
      const source = document.getElementById("claimSource").value.trim() || "[source checked]";
      const finding = document.getElementById("claimFinding").value.trim() || "[what I found]";
      const decision = document.getElementById("claimDecision").value || "Use";
      const reason = document.getElementById("claimReason").value.trim() || "[reason for my decision]";

      const typeLabel = {
        fact: "Fact — can be checked",
        opinion: "Opinion — someone’s view",
        prediction: "Prediction — about what might happen",
        advice: "Advice — tells someone what to do",
        creative: "Creative idea — not a factual claim"
      }[type] || type;

      const output = [
        "AI Claim Check",
        "",
        `Claim: ${claim}`,
        `Type of claim: ${typeLabel}`,
        `Source I checked: ${source}`,
        `What I found: ${finding}`,
        `Decision: ${decision}`,
        `Reason: ${reason}`,
        "",
        "Reminder: If I am unsure, I should ask my teacher or check another reliable source before using this."
      ].join("\n");

      document.getElementById("claimOutput").value = output;
      document.getElementById("claimCopyStatus").classList.add("hidden");
    }

    function copyClaimCheck() {
      const output = document.getElementById("claimOutput");
      if (!output.value.trim()) generateClaimCheck();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("claimCopyStatus");
        status.textContent = "Claim check copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("claimCopyStatus");
        status.textContent = "Claim check copied.";
        status.classList.remove("hidden");
      });
    }

    function clearClaimCheck() {
      ["claimText", "claimSource", "claimFinding", "claimReason", "claimOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      const type = document.getElementById("claimType");
      if (type) type.value = "fact";

      selectClaimDecision("Use");

      const status = document.getElementById("claimCopyStatus");
      if (status) status.classList.add("hidden");
    }

    function generateAiUseReflection() {
      const helpedWith = document.getElementById("reflectionHelpedWith").value.trim() || "[what AI helped with]";
      const ownership = document.getElementById("reflectionOwnership").value.trim() || "[how I kept ownership]";
      const checked = document.getElementById("reflectionChecked").value.trim() || "[what I checked or verified]";
      const changed = document.getElementById("reflectionChanged").value.trim() || "[what I changed]";
      const helpNeeded = document.getElementById("reflectionHelpNeeded").value.trim() || "[what I still need help with]";
      const nextTime = document.getElementById("reflectionNextTime").value.trim() || "[what I will do next time]";
      const rule = document.getElementById("reflectionRule").value.trim();

      const output = [
        "AI Use Reflection",
        "",
        rule ? `Teacher rule / AI-use level: ${rule}` : "",
        `I used AI to help with ${helpedWith}.`,
        `I kept ownership of my work by ${ownership}.`,
        `I checked or verified ${checked}.`,
        `I changed ${changed} based on my own thinking and the assignment expectations.`,
        `I still need help with ${helpNeeded}.`,
        `Next time, I will ${nextTime}.`,
        "",
        "Reminder: AI can support my learning, but it does not replace my thinking."
      ].filter(Boolean).join("\n");

      document.getElementById("reflectionOutput").value = output;
      document.getElementById("reflectionCopyStatus").classList.add("hidden");
    }

    function copyAiUseReflection() {
      const output = document.getElementById("reflectionOutput");
      if (!output.value.trim()) generateAiUseReflection();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("reflectionCopyStatus");
        status.textContent = "AI use reflection copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("reflectionCopyStatus");
        status.textContent = "AI use reflection copied.";
        status.classList.remove("hidden");
      });
    }

    function clearAiUseReflection() {
      ["reflectionHelpedWith", "reflectionOwnership", "reflectionChecked", "reflectionChanged", "reflectionHelpNeeded", "reflectionNextTime", "reflectionRule", "reflectionOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      const status = document.getElementById("reflectionCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function generateStudentFollowUpPrompt() {
      const context = document.getElementById("studentFollowupContext").value.trim() || "my assignment";
      const rule = document.getElementById("studentFollowupRule").value.trim() || "AI should support my learning, but not replace my thinking";
      const keep = document.getElementById("studentFollowupKeep").value.trim() || "my original ideas and voice";
      const change = document.getElementById("studentFollowupChange").value.trim() || "one or two specific parts that need improvement";
      const avoid = document.getElementById("studentFollowupAvoid").value.trim() || "writing the final answer for me or adding unchecked facts";

      const prompt = [
        "I want to revise your previous response using a Keep / Change / Check routine.",
        "",
        `What I am working on: ${context}`,
        `Teacher rule or AI-use limit: ${rule}`,
        "",
        `Keep: ${keep}.`,
        `Change: ${change}.`,
        `Avoid: ${avoid}.`,
        "",
        "Do not rewrite the whole assignment for me.",
        "Help me improve my own thinking and work.",
        "After your response, list anything I should verify or ask my teacher about before using it."
      ].join("\n");

      document.getElementById("studentFollowupOutput").value = prompt;
      document.getElementById("studentFollowupCopyStatus").classList.add("hidden");
    }

    function copyStudentFollowUpPrompt() {
      const output = document.getElementById("studentFollowupOutput");
      if (!output.value.trim()) generateStudentFollowUpPrompt();

      output.select();
      output.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(output.value).then(() => {
        const status = document.getElementById("studentFollowupCopyStatus");
        status.textContent = "Student follow-up prompt copied.";
        status.classList.remove("hidden");
      }).catch(() => {
        document.execCommand("copy");
        const status = document.getElementById("studentFollowupCopyStatus");
        status.textContent = "Student follow-up prompt copied.";
        status.classList.remove("hidden");
      });
    }

    function clearStudentFollowUpPrompt() {
      ["studentFollowupContext", "studentFollowupRule", "studentFollowupKeep", "studentFollowupChange", "studentFollowupAvoid", "studentFollowupOutput"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
      });

      document.querySelectorAll(".student-followup-builder .option-chip").forEach(button => {
        button.classList.remove("selected");
      });

      const status = document.getElementById("studentFollowupCopyStatus");
      if (status) status.classList.add("hidden");
    }


    function toggleResourceCard(resourceId) {
      expandedResource = expandedResource === resourceId ? null : resourceId;
      renderModuleCards();
      if (expandedResource === "studentBigData") {
        setTimeout(() => selectBigDataActivity(document.getElementById("bigDataActivity")?.value || "Streaming videos or music"), 0);
      }
    }


    function getStudentModuleDisplayNumber(index) {
      const prereqCount = modules.filter(m => m.prerequisite).length;
      const module = modules[index];
      if (module && module.prerequisite) return "";
      return String(index + 1 - prereqCount);
    }


    function getFirstStudentResourceNumber() {
      return modules.filter(module => !module.prerequisite).length + 1;
    }

    function renderModuleCards() {
      const container = document.getElementById("moduleCards");
      container.innerHTML = "";

      modules.forEach((module, index) => {
        const normallyUnlocked = index === 0 || isModuleCompleted(modules[index - 1].id);
        const unlocked = isModuleUnlocked(index);
        const completed = isModuleCompleted(module.id);
        const previewOpen = previewMode && !normallyUnlocked && !completed;
        const card = document.createElement("article");
        const displayNumber = getStudentModuleDisplayNumber(index);

        card.className = "module-card";
        card.id = "studentModuleCard-" + index;
        card.setAttribute("data-module-index", index);
        card.setAttribute("data-search", studentModuleSearchText(module));
        if (module.prerequisite) card.classList.add("prerequisite-card");
        if (module.prerequisite) card.classList.add("prereq-card");
        if (!unlocked) card.classList.add("locked");
        if (completed) card.classList.add("completed");
        if (previewOpen) card.classList.add("preview-card");

        const badgeClass = completed ? "done-badge" : previewOpen ? "" : unlocked ? "" : "locked-badge";
        const badgeText = completed ? "Complete" : previewOpen ? "Preview" : unlocked ? "Unlocked" : "Locked";
        const buttonText = completed ? "Review Module" : previewOpen ? "Preview Module" : unlocked ? "Begin Module" : "Locked";

        card.innerHTML = `
          ${renderModuleTimeEstimate(module.id)}
          <div>
            <span class="badge ${badgeClass}">${badgeText}</span>
            <h3>${module.prerequisite ? module.title : `${displayNumber}. ${module.title}`}</h3>
            <div class="strand-badges">${renderStrandBadges(getModuleStrands(module.id))}</div>
            <p>${module.shortDescription}</p>
            ${completed ? `<p class="module-score">${progress.scores[module.id] === "RESTORED" ? "Restored by checkpoint" : `Score: ${progress.scores[module.id]}%`}</p>` : ""}
          </div>
          <button ${unlocked ? "" : "disabled"} onclick="openModule(${index})">${buttonText}</button>
        `;

        container.appendChild(card);
      });

      const firstResourceNumber = getFirstStudentResourceNumber();

      const resourceCards = [

        {
          id: "studentClaimChecker",
          number: firstResourceNumber,
          title: "AI Claim Checker",
          description: "Check AI-generated claims, including Google AI Overview claims, before you trust or use them.",
          content: studentClaimCheckerResourceHtml
        },
        {
          id: "studentBigData",
          number: firstResourceNumber + 1,
          title: "Big Data & Data Tracks",
          description: "Explore how everyday digital activities create data and privacy questions.",
          content: studentBigDataResourceHtml
        },
        {
          id: "studentSubmitChecklist",
          number: firstResourceNumber + 2,
          title: "Before You Submit Checklist",
          description: "Check rules, sources, privacy, disclosure, and ownership before submitting.",
          content: studentSubmitChecklistResourceHtml
        }
      ];

      resourceCards.forEach(resource => {
        const isExpanded = expandedResource === resource.id;
        const card = document.createElement("article");
        card.className = `module-card resource-card ${isExpanded ? "expanded" : ""}`;
        // Index full content (tags stripped) so deep terms inside the resource
        // are searchable, not just the title/description.
        card.setAttribute("data-search", `${resource.title} ${resource.description} ${stripTags(resource.content)}`);

        card.innerHTML = `
          <div class="resource-card-header" onclick="toggleResourceCard('${resource.id}')">
            <div>
              <span class="badge">Resource</span>
              <h3>${resource.number}. ${resource.title}</h3>
              <p>${resource.description}</p>
            </div>
            <span class="resource-expand-indicator" aria-hidden="true">${isExpanded ? "–" : "+"}</span>
          </div>
          ${isExpanded ? `<div class="resource-content">${resource.content}</div>` : ""}
        `;

        container.appendChild(card);
      });

      if (typeof applyStudentModuleVisibility === "function") {
        applyStudentModuleVisibility();
      }
    }


    function openAlwaysAvailableStudentTools() {
      const teacherView = document.getElementById("teacherView");
      const teacherActive = teacherView && !teacherView.classList.contains("hidden");
      if (teacherActive) {
        openAlwaysAvailableTeacherTools();
        return;
      }

      const toolIndex = modules.findIndex(module => module.id === "required-ai-practice-tools");
      if (toolIndex < 0) return;

      activeModuleIndex = toolIndex;
      currentActivityIndex = 0;
      activityCorrect = 0;
      quizSelections = {};
      prerequisiteGridSelections = {};
      prerequisiteScenarioPage = 0;

      document.getElementById("certificatePanel").classList.add("hidden");
      renderActiveModule();
    }

    function openAlwaysAvailableTeacherTools() {
      const toolModule = modules.find(module => module.id === "required-ai-practice-tools");
      const panel = document.getElementById("teacherModulePanel");
      if (!toolModule || !panel) return;

      // Opened as a standalone tool, not a numbered teacher module.
      activeTeacherModuleIndex = null;
      studentAiAssessState = { level: null, allowed: false, responsibility: false };

      // Clear the student module panel so its (hidden) copy of the tool cannot
      // win getElementById lookups against the teacher copy's shared IDs.
      const studentPanel = document.getElementById("modulePanel");
      if (studentPanel) {
        studentPanel.classList.add("hidden");
        studentPanel.innerHTML = "";
      }

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <button class="secondary-btn" onclick="closeTeacherModule()">Back to Teacher Learning Path</button>
        <h2>${toolModule.title}</h2>
        <p>${renderLessonText(toolModule.lesson)}</p>
        ${toolModule.extraHtml || ""}
      `;

      setTimeout(() => {
        updateStudentBuildCounts();
        updateStudentToolCheckpointState();
        setStudentBuildMode("standard");
      }, 0);

      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function openModule(index) {
      if (!isModuleUnlocked(index)) return;

      activeModuleIndex = index;
      currentActivityIndex = 0;
      activityCorrect = 0;
      quizSelections = {};
      prerequisiteGridSelections = {};
      prerequisiteScenarioPage = 0;

      document.getElementById("certificatePanel").classList.add("hidden");
      renderActiveModule();
    }


