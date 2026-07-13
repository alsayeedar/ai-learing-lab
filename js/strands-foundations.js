    const aiReadyStrands = {
      learner: {
        code: "CSL",
        short: "CSL",
        full: "Curious and Self-Directed Learner",
        description: "Use AI to deepen understanding while building independence and persistence."
      },
      citizen: {
        code: "RDC",
        short: "RDC",
        full: "Responsible Digital Citizen",
        description: "Use AI ethically, safely, transparently, and with integrity."
      },
      thinker: {
        code: "CTEC",
        short: "CTEC",
        full: "Critical Thinker and Effective Communicator",
        description: "Question AI results, verify information, and communicate clearly."
      },
      creator: {
        code: "CPSI",
        short: "CPSI",
        full: "Creative Problem Solver and Innovator",
        description: "Use AI to explore ideas, refine solutions, and support creative problem solving."
      },
      strategic: {
        code: "SIAU",
        short: "SIAU",
        full: "Strategic and Independent AI User",
        description: "Know when AI helps, when it gets in the way, and how to keep ownership of the work."
      }
    };

    const moduleStrands = {
      "what-wifi-actually-does": ["learner", "thinker", "strategic"],
      "how-data-travels-online": ["learner", "citizen", "thinker", "strategic"],
      "how-ai-generates-responses": ["learner", "thinker", "creator", "strategic"],
      "student-ai-guidelines": ["learner", "citizen", "thinker", "strategic"],
      "sau48-ai-statement-integrity": ["citizen", "thinker", "strategic"],
      "what-counts-as-ai": ["learner", "thinker"],
      "ai-vocabulary-in-context": ["learner", "thinker", "strategic"],
      "patterns-not-magic": ["learner", "thinker"],
      "can-you-trust-it": ["thinker", "citizen"],
      "media-literacy": ["thinker", "citizen"],
      "prompt-like-a-learner": ["learner", "creator", "strategic"],
      "responsible-school-use": ["citizen", "strategic"],
      "when-is-ai-allowed": ["citizen", "strategic"],
      "ai-disclosure-statements": ["citizen", "thinker", "strategic"],
      "eco-aware-ai-use": ["learner", "citizen", "thinker", "strategic"],
      "required-ai-vocabulary-review": ["learner", "thinker", "strategic"],
      "required-ai-practice-tools": ["learner", "creator", "strategic", "citizen"],
      "required-student-follow-up-routine": ["learner", "thinker", "strategic"]
    };

    function getModuleStrands(moduleId) {
      return moduleStrands[moduleId] || [];
    }

    function renderStrandBadges(strandIds, practicedOnly = false) {
      return strandIds.map(id => {
        const strand = aiReadyStrands[id];
        if (!strand) return "";
        const practicedClass = practicedOnly ? " practiced" : "";
        return `<span class="strand-badge${practicedClass}">${strand.short}</span>`;
      }).join("");
    }

    function getPracticedStrands() {
      const practiced = new Set();

      progress.completedModules.forEach(moduleId => {
        getModuleStrands(moduleId).forEach(strandId => practiced.add(strandId));
      });

      return practiced;
    }

    function renderEcoPracticeIndicators() {
      const ecoEarned = progress.completedModules.includes("eco-aware-ai-use");
      const ecoPill = (label, kind, svg) => `
        <span class="eco-skill-pill ${kind}${ecoEarned ? ' active' : ''}" title="${label}" aria-label="${label}">
          ${svg}
        </span>`;

      return `
        <div class="eco-skill-pill-row" aria-label="Eco skills practiced">
          ${ecoPill('Water awareness', 'water', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C12 2 5 10.3 5 15a7 7 0 0 0 14 0C19 10.3 12 2 12 2Z" fill="currentColor" opacity="0.2"/><path d="M12 2C12 2 5 10.3 5 15a7 7 0 0 0 14 0C19 10.3 12 2 12 2Z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>')}
          ${ecoPill('Electricity awareness', 'electricity', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 2 6 13h4.8L9.8 22 18 10.8h-4.7L13.2 2Z" fill="currentColor" opacity="0.2"/><path d="M13.2 2 6 13h4.8L9.8 22 18 10.8h-4.7L13.2 2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>')}
          ${ecoPill('Eco awareness', 'leaf', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.5 4.5c-5.2.2-9.4 2.3-11.8 6.1-1.4 2.2-1.6 4.7-.5 6.6 1.1 1.8 3.3 2.8 5.8 2.5 3.5-.4 6.2-3.1 7.1-7.1.5-2.4.3-5.1-.6-8.1Z" fill="currentColor" opacity="0.2"/><path d="M18.5 4.5c-5.2.2-9.4 2.3-11.8 6.1-1.4 2.2-1.6 4.7-.5 6.6 1.1 1.8 3.3 2.8 5.8 2.5 3.5-.4 6.2-3.1 7.1-7.1.5-2.4.3-5.1-.6-8.1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 16c3.3-2 5.7-4.3 7.4-7.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>')}
        </div>`;
    }


    function renderAiReadyLegend() {
      const practiced = getPracticedStrands();

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

            ${renderCreativeEthicsTile('student')}
          </div>
        </div>
      `;
    }


    function renderAiReadyTracker() {
      const practiced = getPracticedStrands();
      const allIds = Object.keys(aiReadyStrands);

      return `
        <div class="ai-ready-tracker">
          <h3>AI-Ready Skills Practiced</h3>
          <div class="ai-ready-list">
            ${allIds.map(id => {
              const strand = aiReadyStrands[id];
              const isPracticed = practiced.has(id);
              return `<span class="strand-badge ${isPracticed ? "practiced" : ""}">${strand.short}</span>`;
            }).join("")}
          </div>
        </div>
      `;
    }


    const foundationFacts = {
      wifi: {
        device: `<strong>Device:</strong> Your Chromebook, phone, or tablet turns requests into ${termDef("binary data", "Information represented in a form computers can process, often described as 1s and 0s.")}. It still needs a network to reach websites or cloud tools.`,
        signal: `<strong>Wi-Fi signal:</strong> Wi-Fi uses ${termDef("radio waves", "Invisible wireless signals used by Wi-Fi and other technologies.")}. Common Wi-Fi frequencies include 2.4 GHz and 5 GHz. Distance, walls, crowded rooms, and interference can weaken the signal.`,
        access: `<strong>Access point or router:</strong> This connects wireless devices to the ${termDef("local network", "The nearby network in a home, school, library, or building.")}. It receives radio signals and helps move the data onward.`,
        local: `<strong>Local network:</strong> This is the school or home network nearby. Wi-Fi frequencies are split into ${termDef("channels", "Smaller paths within a wireless frequency that help reduce traffic and interference.")} to reduce crowding.`,
        internet: `<strong>Internet connection:</strong> The router sends data beyond the local network through a wired internet connection to websites, apps, cloud files, servers, and online services.`
      },
      internet: {
        send: `<strong>Send or request:</strong> You send a message, open a file, stream video, search, or use an app. Your device turns that action into ${termDef("data", "Information a computer can store, send, or use.")}.`,
        binary: `<strong>Binary code:</strong> Computers use 1s and 0s to represent information. Text, images, video, and app requests can all become ${termDef("binary data", "Information represented in a form computers can process, often described as 1s and 0s.")}.`,
        packets: `<strong>Packets:</strong> Data is split into smaller ${termDef("packets", "Small pieces of data that travel across networks and get put back together later.")}. They can travel through different paths and reassemble later.`,
        radio: `<strong>Radio waves:</strong> On Wi-Fi, your device sends data wirelessly as ${termDef("radio waves", "Invisible wireless signals used by Wi-Fi, Bluetooth, and many other technologies.")} to an access point or router.`,
        router: `<strong>Your router or access point:</strong> A ${termDef("router", "A device that helps send data to the next place it needs to go.")} moves data from your nearby network toward the wider internet.`,
        fiber: `<strong>Fiber optic cable:</strong> Much of the internet uses ${termDef("fiber optic cables", "Thin glass or plastic cables that carry data as pulses of light.")}, including cables under the ocean.`,
        otherrouter: `<strong>Other routers:</strong> Routers across networks help direct packet traffic. Packets may pass through many routers.`,
        datacenter: `<strong>Servers and data centers:</strong> Websites, social media, streaming, games, cloud files, and many apps depend on ${termDef("data centers", "Buildings full of servers, power, cooling, and network connections.")}.`,
        assemble: `<strong>Reassembled packets:</strong> When packets arrive, the receiving system puts the pieces back together in the right order.`,
        read: `<strong>Readable result:</strong> The data becomes something a person can use: an email, page, video, file, search result, or AI response.`
      },
      llm: {
        prompt: `<strong>Prompt:</strong> You ask a question or give a direction.`,
        travel: `<strong>Internet path:</strong> Your prompt travels online to the AI system.`,
        server: `<strong>AI server:</strong> The work happens on powerful computers in ${termDef("data centers", "Buildings full of servers, power, cooling, and network connections.")}.`,
        model: `<strong>Language model:</strong> A ${termDef("language model", "An AI system that generates words by using patterns from training data.")} predicts likely words from patterns in text.`,
        tokens: `<strong>Tokens:</strong> The answer is built a little at a time in ${termDef("tokens", "Small pieces of text, such as words or parts of words, that an AI model uses to build a response.")}.`,
        check: `<strong>Human check:</strong> The answer may sound strong, but you still need to check it.`
      }
    };





    function addInlineDefinitions(text) {
      if (!text || String(text).includes("term-def")) return text || "";

      const definitions = [
        ["academic integrity", "Honest schoolwork: showing what you know, using help appropriately, and giving credit when required."],
        ["artificial intelligence", "Computer systems designed to make predictions or complete tasks that usually require human intelligence."],
        ["generative AI", "AI that creates new content, such as text, images, audio, or code, from learned patterns."],
        ["large language model", "A generative AI system trained on large amounts of text to predict and generate language."],
        ["language model", "An AI system that generates text by using patterns from training data."],
        ["machine learning", "A kind of AI that learns patterns from data instead of following only hand-written rules."],
        ["training data", "Examples used to teach or tune an AI system."],
        ["tokens", "Small pieces of text, such as words or parts of words, that an AI model uses to build a response."],
        ["prompt", "The directions, question, or context a person gives to an AI tool."],
        ["algorithm", "A set of steps a computer follows to solve a problem or make a decision."],
        ["bias", "A pattern that unfairly favors or disadvantages people, groups, or ideas."],
        ["hallucination", "A confident AI response that includes information that is false or invented."],
        ["ghost citation", "A citation that looks real but points to a source that does not actually exist or does not support the claim."],
        ["citation", "Information that shows where a fact, quote, image, or idea came from."],
        ["source", "The place information comes from, such as an article, book, webpage, dataset, or expert."],
        ["verification", "Checking whether information is accurate by comparing it with reliable sources."],
        ["lateral reading", "Checking a source by leaving it and comparing it with other reliable sources."],
        ["disclosure", "A note explaining when and how AI or another tool was used."],
        ["personally identifiable information", "Information that can identify a specific person, such as full name, address, phone number, student ID, or private account information."],
        ["PII", "Personally identifiable information: details that can identify a specific person."],
        ["data center", "A building full of servers, power, cooling, and network connections."],
        ["server", "A powerful computer that stores, processes, or sends information for websites, apps, and online tools."],
        ["accessibility", "Designing tools, materials, and environments so more people can use them."],
        ["equity", "Fair access to support, opportunity, and participation, based on what people actually need."],
        ["multimodal", "Able to work with more than one type of input or output, such as text, image, audio, or video."],
        ["agentic AI", "AI designed to carry out multi-step tasks with more independence."],
        ["model", "A computer system trained to recognize patterns or generate outputs."],
        ["data", "Information a computer can store, send, or use."]
      ];

      let output = String(text);
      const protectedSegments = [];
      output = output.replace(/<[^>]+>/g, match => {
        protectedSegments.push(match);
        return `@@HTMLSEG${protectedSegments.length - 1}@@`;
      });

      definitions.forEach(([term, definition]) => {
        const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`\\\\b(${escaped})\\\\b`, "i");
        if (regex.test(output)) {
          output = output.replace(regex, termDef(RegExp.$1, definition));
        }
      });

      output = output.replace(/@@HTMLSEG(\d+)@@/g, (_, index) => protectedSegments[Number(index)]);
      return output;
    }

    function renderLessonText(text) {
      return addInlineDefinitions(text);
    }

    const trafficExamples = {
      text: {
        title: "Text message or email",
        what: "Message + sender + time.",
        packetPattern: "Small, but still split and sent.",
        path: "Device → router → server → person.",
        reminder: "Even short messages leave details."
      },
      image: {
        title: "Image upload",
        what: "Picture data + file details.",
        packetPattern: "Usually more packets than text.",
        path: "Device → router → cloud/app server.",
        reminder: "Images can include hidden details."
      },
      social: {
        title: "Social media post",
        what: "Post + account + reactions.",
        packetPattern: "Many packets go back and forth.",
        path: "Device → social platform servers → feeds.",
        reminder: "One post can cause more activity."
      },
      video: {
        title: "Video stream",
        what: "Video chunks + watch progress.",
        packetPattern: "Packets keep moving while it plays.",
        path: "Streaming server → router → device.",
        reminder: "Streaming keeps using the network."
      },
      cloud: {
        title: "Cloud document or file",
        what: "File + edits + sharing.",
        packetPattern: "Packets move during updates.",
        path: "Device → cloud servers → collaborators.",
        reminder: "Cloud tools can update quietly."
      },
      ai: {
        title: "AI prompt",
        what: "Prompt + context + response.",
        packetPattern: "Prompt out, response packets back.",
        path: "Device → AI server → model → response.",
        reminder: "AI adds extra server work."
      }
    };

    function selectTrafficExample(exampleKey) {
      const example = trafficExamples[exampleKey] || trafficExamples.text;
      const output = document.getElementById("trafficExampleOutput");
      if (!output) return;

      document.querySelectorAll("[data-traffic-example]").forEach(button => {
        button.classList.toggle("selected", button.dataset.trafficExample === exampleKey);
      });

      output.innerHTML = `
        <h5>${example.title}</h5>
        <div class="traffic-packet-stream" aria-hidden="true">
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
          <span class="traffic-packet"></span>
        </div>
        <div class="traffic-detail-grid">
          <div class="traffic-detail-card">
            <strong>What is moving?</strong>
            <p>${example.what}</p>
          </div>
          <div class="traffic-detail-card">
            <strong>Packet pattern</strong>
            <p>${example.packetPattern}</p>
          </div>
          <div class="traffic-detail-card">
            <strong>Common path</strong>
            <p>${example.path}</p>
          </div>
          <div class="traffic-detail-card">
            <strong>Why it matters</strong>
            <p>${example.reminder}</p>
          </div>
        </div>
      `;
    }
    function showFoundationInfo(diagram, key) {
      const output = document.getElementById(`${diagram}FoundationInfo`);
      if (!output || !foundationFacts[diagram] || !foundationFacts[diagram][key]) return;

      const now = Date.now();
      const hasCooldown = foundationRequiredKeys[diagram] && (foundationCooldownUntil[diagram] || 0) > now;
      if (hasCooldown) {
        const compactStatus = document.getElementById(`${diagram}ClickScore`);
        if (compactStatus) {
          const seconds = Math.max(1, Math.ceil(((foundationCooldownUntil[diagram] || 0) - now) / 1000));
          compactStatus.innerHTML = `<strong>Pause for ${seconds} second${seconds === 1 ? "" : "s"}.</strong><span class="small-note">Read the card, then choose the next one.</span>`;
        }
        return;
      }

      const buttons = document.querySelectorAll(`[data-foundation-diagram="${diagram}"]`);
      buttons.forEach(button => {
        button.classList.toggle("selected", button.dataset.foundationKey === key);
      });

      output.innerHTML = foundationFacts[diagram][key];

      if (foundationRequiredKeys[diagram]) {
        if (!foundationVisitProgress[diagram]) {
          foundationVisitProgress[diagram] = [];
        }

        if (!foundationVisitProgress[diagram].includes(key)) {
          foundationVisitProgress[diagram].push(key);
        }

        buttons.forEach(button => {
          if (foundationVisitProgress[diagram].includes(button.dataset.foundationKey)) {
            button.classList.add("completed");
          }
        });

        startFoundationCooldown(diagram);
        updateFoundationSelfCheck(diagram);
      }
    }

    function startFoundationCooldown(diagram) {
      const buttons = document.querySelectorAll(`[data-foundation-diagram="${diagram}"]`);
      foundationCooldownUntil[diagram] = Date.now() + FOUNDATION_CLICK_DELAY_MS;

      buttons.forEach(button => button.classList.add("cooldown"));

      clearTimeout(foundationCooldownTimer[diagram]);
      foundationCooldownTimer[diagram] = setTimeout(() => {
        buttons.forEach(button => button.classList.remove("cooldown"));
        foundationCooldownUntil[diagram] = 0;
        updateFoundationSelfCheck(diagram);
      }, FOUNDATION_CLICK_DELAY_MS);
    }

    function updateFoundationSelfCheck(diagram) {
      const required = foundationRequiredKeys[diagram] || [];
      const visited = (foundationVisitProgress[diagram] || []).filter(key => required.includes(key));
      const count = visited.length;
      const complete = required.length > 0 && count === required.length;

      const compactStatus = document.getElementById(`${diagram}ClickScore`);
      if (compactStatus) {
        compactStatus.classList.toggle("complete", complete);
        compactStatus.innerHTML = complete
          ? `<strong>Self-check complete:</strong> ${count} of ${required.length} packet cards visited.<span class="small-note">Nice work — every packet card has been explored.</span>`
          : `<strong>Self-check:</strong> ${count} of ${required.length} packet cards visited.<span class="small-note">Each card turns green after you click it. Pause briefly before the next card.</span>`;
      }

      const detailedStatus = document.getElementById(`${diagram}SelfCheckStatus`);
      if (detailedStatus) {
        detailedStatus.classList.toggle("complete", complete);
        detailedStatus.innerHTML = complete
          ? `<strong>Ready to finish:</strong> You visited all ${required.length} packet cards. You can complete the module now.`
          : `<strong>Still to visit:</strong> ${required.length - count} more card${required.length - count === 1 ? '' : 's'}. Click the packet cards above until they all turn green.`;
      }

      const finishButton = document.getElementById(`${diagram}SelfCheckButton`);
      if (finishButton) {
        finishButton.disabled = !complete;
      }
    }


    function renderModulePracticeBox(moduleId) {
      const strands = getModuleStrands(moduleId);
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


