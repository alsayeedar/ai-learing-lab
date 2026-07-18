    const modules = [
      {
        id: "what-wifi-actually-does",
        prerequisite: true,
        prerequisiteNumber: "P1",
        title: "What Wi-Fi Actually Does",
        shortDescription: "See how a device connects to a nearby network before it reaches the wider internet.",
        lesson: `Wi-Fi is the short-range ${termDef("wireless connection", "A connection that sends data through the air instead of through a cable.")} between your device and a local network. It uses ${termDef("radio waves", "Invisible wireless signals used by Wi-Fi and other technologies.")} to move digital information between your device and an access point or router. The router then connects that local traffic to the wider internet. This foundation helps you tell the difference between a ${termDef("device problem", "Something on the Chromebook, phone, or tablet is causing the issue.")}, a ${termDef("Wi-Fi problem", "The nearby wireless signal is weak, blocked, crowded, or not working.")}, and an ${termDef("internet problem", "The wider connection to websites, apps, or online services is not working.")}.`,
        extraHtml: `
          <div class="prereq-panel">
            <div class="prereq-click-prompt">
              ${netIcon("wifi")}
              <span>Click one card at a time to see what Wi-Fi does before data reaches the wider internet. <span class="term-note">Each card turns green after you click it. Dotted words show quick definitions.</span></span>
            </div>

            <div class="packet-animation-band" aria-hidden="true">
              <div class="packet-animation-line"></div>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
            </div>

            <div class="animated-diagram packet-journey-shell">
              <div class="animated-track">
                <button class="diagram-node" data-foundation-diagram="wifi" data-foundation-key="device" onclick="showFoundationInfo('wifi','device')">${netIcon("device")}<strong>Device</strong><small>Chromebook, phone, tablet</small></button>
                <button class="diagram-node" data-foundation-diagram="wifi" data-foundation-key="signal" onclick="showFoundationInfo('wifi','signal')">${netIcon("wifi")}<strong>Wi-Fi Signal</strong><small>wireless connection nearby</small></button>
                <button class="diagram-node" data-foundation-diagram="wifi" data-foundation-key="access" onclick="showFoundationInfo('wifi','access')">${netIcon("access")}<strong>Access Point</strong><small>joins the local network</small></button>
                <button class="diagram-node" data-foundation-diagram="wifi" data-foundation-key="local" onclick="showFoundationInfo('wifi','local')">${netIcon("school")}<strong>Local Network</strong><small>school or home network</small></button>
                <button class="diagram-node" data-foundation-diagram="wifi" data-foundation-key="internet" onclick="showFoundationInfo('wifi','internet')">${netIcon("globe")}<strong>Internet</strong><small>wider online connection</small></button>
              </div>
            </div>

            <div id="wifiFoundationInfo" class="diagram-info"><strong>Try it:</strong> Click each Wi-Fi card to trace the local connection.</div>

            <div id="wifiClickScore" class="diagram-selfcheck"><strong>Self-check:</strong> 0 of 5 Wi-Fi cards visited.<span class="small-note">Each card turns green after you click it. Pause briefly before the next card.</span></div>

            <div class="wifi-deep-dive">
              <h4>How Wi-Fi moves information</h4>
              <p class="small-note">Wi-Fi is the wireless part of the trip. It moves data between your device and the router or access point.</p>

              <div class="wifi-detail-grid wifi-detail-grid--three-up">
                <div class="wifi-detail-card">
                  <strong>Radio waves carry data</strong>
                  <p>Your device converts digital information into wireless radio signals. Those signals travel to an access point or router.</p>
                </div>
                <div class="wifi-detail-card">
                  <strong>2.4 GHz and 5 GHz</strong>
                  <p>Wi-Fi commonly uses 2.4 GHz and 5 GHz ${termDef("frequencies", "How often a wave repeats. One hertz means one wave per second.")}. Frequency affects speed, range, and how well signals move through walls.</p>
                </div>
                <div class="wifi-detail-card">
                  <strong>Channels reduce interference</strong>
                  <p>Wi-Fi frequencies are split into ${termDef("channels", "Smaller paths within a wireless frequency that help reduce traffic and interference.")}. Channels help nearby devices share the wireless space.</p>
                </div>
                <div class="wifi-detail-card">
                  <strong>The router sends it onward</strong>
                  <p>The router receives the wireless signal, translates it back into digital data, and sends it through a wired internet connection.</p>
                </div>
                <div class="wifi-detail-card">
                  <strong>Gigahertz</strong>
                  <p>A ${termDef("gigahertz", "One billion wave cycles per second.")} measures frequency. In Wi-Fi, it describes how quickly the radio wave cycles.</p>
                </div>
                <div class="wifi-detail-card">
                  <strong>Mbps</strong>
                  <p>${termDef("Mbps", "Megabits per second. A way to measure how much data can move each second.")} measures data speed. More Mbps means more data can move each second.</p>
                </div>
              </div>
            </div>

            <div class="wifi-mini-lab">
              <strong>Wi-Fi vs. internet</strong>
              <div class="mini-lab-grid">
                <div class="mini-lab-card">
                  <strong>Wi-Fi</strong>
                  <p>The local wireless link between a device and an access point or router.</p>
                </div>
                <div class="mini-lab-card">
                  <strong>Internet</strong>
                  <p>The wider system of connected networks, cables, routers, servers, and data centers.</p>
                </div>
                <div class="mini-lab-card">
                  <strong>Why this matters</strong>
                  <p>Strong Wi-Fi bars do not always mean the wider internet connection is working.</p>
                </div>
              </div>
            </div>
          </div>
        `,
        activityType: "wifiConnection",
        selfCheckDiagram: "wifi",
        items: [
          {
            text: "A Chromebook is in airplane mode and cannot join the school Wi-Fi.",
            options: ["Wi-Fi signal problem", "Website problem", "Device problem", "Internet outage"],
            answer: "Device problem",
            feedback: "Correct. The device setting is blocking the connection before Wi-Fi can do its job."
          },
          {
            text: "The Wi-Fi bars are full, but no websites load for anyone in the building.",
            options: ["Keyboard problem", "Citation problem", "Internet connection problem", "Screen brightness problem"],
            answer: "Internet connection problem",
            feedback: "Correct. The nearby wireless signal may be fine, but the wider internet connection may be down."
          },
          {
            text: "A student is far from the access point, and pages load slowly or drop.",
            options: ["Data center problem", "AI problem", "Citation problem", "Wi-Fi signal problem"],
            answer: "Wi-Fi signal problem",
            feedback: "Correct. Distance, walls, and interference can weaken Wi-Fi."
          },
          {
            text: "Wi-Fi frequencies are split into channels to help reduce crowding and interference.",
            options: ["False", "Only for AI", "True", "Only for printed files"],
            answer: "True",
            feedback: "Correct. Channels help nearby wireless traffic share the space more efficiently."
          }
        
        
        ],
        quiz: [
          {
            question: "What is Wi-Fi?",
            options: ["A nearby wireless connection to a network", "The entire internet", "A data center", "A search engine"],
            answer: "A nearby wireless connection to a network"
          },
          {
            question: "What can be true even when Wi-Fi bars are full?",
            options: ["The internet connection can still be down", "All websites are guaranteed to work", "The Chromebook is fully charged", "AI answers are always correct"],
            answer: "The internet connection can still be down"
          },
          {
            question: "Which factor can weaken Wi-Fi?",
            options: ["Distance and walls", "A bibliography", "A stronger topic sentence", "A citation style"],
            answer: "Distance and walls"
          }
        ]
      },
      {
        id: "how-data-travels-online",
        prerequisite: true,
        prerequisiteNumber: "P2",
        title: "How Data Travels Online",
        shortDescription: "Follow packets through routers, cables, servers, and data centers.",
        lesson: `The internet is not just “in the air.” When you send a message, watch a video, open a cloud file, or use social media, ${termDef("data", "Information a computer can store, send, or use. Text, images, video, clicks, and prompts can all become data.")} moves through real equipment: ${termDef("networks", "Connected devices and systems that pass data from one place to another.")}, cables, ${termDef("servers", "Powerful computers that store, process, or send information for websites and apps.")}, and ${termDef("data centers", "Buildings full of servers, power, cooling, and network connections.")}. That data is split into smaller pieces called ${termDef("packets", "Small pieces of data that travel across networks and get put back together later.")}.`,
        extraHtml: `
          <div class="prereq-panel">

            <div class="packet-click-prompt">
              ${netIcon("packets")}
              <span>Click one card at a time to trace what happens as data moves from your device, through networks, and back as something you can read, watch, or use. <span class="term-note">Dotted words show quick definitions when you hover or tab to them.</span></span>
            </div>

            <div class="internet-map-link">
              ${netIcon("globe")}
              <span>Optional visual reference: <a href="https://map.kmcd.dev/?year=2026" target="_blank" rel="noopener noreferrer">open the interactive internet map</a>.</span>
            </div>

            <div class="packet-animation-band" aria-hidden="true">
              <div class="packet-animation-line"></div>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
            </div>

            <div class="animated-diagram packet-journey-shell">
              <div class="packet-journey">
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="send" onclick="showFoundationInfo('internet','send')">${netIcon("send")}<strong>Send or Request</strong><small>message, search, file, or app</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="binary" onclick="showFoundationInfo('internet','binary')">${netIcon("binary")}<strong>Binary Data</strong><small>information becomes 1s and 0s</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="packets" onclick="showFoundationInfo('internet','packets')">${netIcon("packets")}<strong>Packets</strong><small>data split into pieces</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="radio" onclick="showFoundationInfo('internet','radio')">${netIcon("radio")}<strong>Radio Waves</strong><small>Wi-Fi moves data nearby</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="router" onclick="showFoundationInfo('internet','router')">${netIcon("router")}<strong>Your Router</strong><small>sends data onward</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="fiber" onclick="showFoundationInfo('internet','fiber')">${netIcon("fiber")}<strong>Fiber Cables</strong><small>light pulses through cables</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="otherrouter" onclick="showFoundationInfo('internet','otherrouter')">${netIcon("router")}<strong>Other Routers</strong><small>traffic is directed</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="datacenter" onclick="showFoundationInfo('internet','datacenter')">${netIcon("datacenter")}<strong>Server</strong><small>service responds</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="assemble" onclick="showFoundationInfo('internet','assemble')">${netIcon("assemble")}<strong>Reassemble</strong><small>packets join again</small></button>
                <button class="packet-step" data-foundation-diagram="internet" data-foundation-key="read" onclick="showFoundationInfo('internet','read')">${netIcon("read")}<strong>Readable Result</strong><small>email, page, file, or response</small></button>
              </div>
            </div>

            <div id="internetFoundationInfo" class="diagram-info"><strong>Try it:</strong> Click each step to follow the packet journey.</div>

            <div id="internetClickScore" class="diagram-selfcheck"><strong>Self-check:</strong> 0 of 10 packet cards visited.<span class="small-note">Each card turns green after you click it. Pause briefly before the next card.</span></div>

            <div class="traffic-lab">
              <h4>Everyday internet traffic</h4>
              <p class="small-note">Different online actions create different kinds of packet movement. Pick an example to see what is being sent.</p>
              <div class="traffic-choice-grid">
                <button class="traffic-choice selected" data-traffic-example="text" onclick="selectTrafficExample('text')">${netIcon("send")}<strong>Text or Email</strong></button>
                <button class="traffic-choice" data-traffic-example="image" onclick="selectTrafficExample('image')">${netIcon("image")}<strong>Image</strong></button>
                <button class="traffic-choice" data-traffic-example="social" onclick="selectTrafficExample('social')">${netIcon("social")}<strong>Social Post</strong></button>
                <button class="traffic-choice" data-traffic-example="video" onclick="selectTrafficExample('video')">${netIcon("video")}<strong>Video</strong></button>
                <button class="traffic-choice" data-traffic-example="cloud" onclick="selectTrafficExample('cloud')">${netIcon("cloud")}<strong>Cloud File</strong></button>
                <button class="traffic-choice" data-traffic-example="ai" onclick="selectTrafficExample('ai')">${netIcon("ai")}<strong>AI Prompt</strong></button>
              </div>
              <div id="trafficExampleOutput" class="traffic-detail">
                <h5>Text message or email</h5>
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
                    <p>Message + sender + time.</p>
                  </div>
                  <div class="traffic-detail-card">
                    <strong>Packet pattern</strong>
                    <p>Small, but still split and sent.</p>
                  </div>
                  <div class="traffic-detail-card">
                    <strong>Common path</strong>
                    <p>Device → router → server → person.</p>
                  </div>
                  <div class="traffic-detail-card">
                    <strong>Why it matters</strong>
                    <p>Even short messages leave details.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="packet-mini-flow">
              <strong>One simple example: sending an email</strong>
              <ol>
                <li>You press send.</li>
                <li>The message becomes digital data.</li>
                <li>The data is split into packets.</li>
                <li>Packets move by Wi-Fi/radio waves to a router.</li>
                <li>Packets may travel through routers, fiber cables, light pulses, and undersea cables.</li>
                <li>A server or data center receives and forwards the data.</li>
                <li>The packets are reassembled so the recipient can read the email.</li>
              </ol>
            </div>

            <div class="packet-warning">
              <strong>Key idea:</strong> The internet feels instant, but it is not weightless. Streaming, social media, cloud files, games, search, email, and AI all depend on real infrastructure: devices, routers, cables, servers, data centers, electricity, cooling, and networks.
            </div>
          </div>
        `,
        activityType: "internetInfrastructure",
        selfCheckDiagram: "internet",
        items: [
          {
            text: "Before an email, image, video, or website request moves online, the device turns it into digital data.",
            options: ["A password hint", "A citation", "Binary data", "A printed letter"],
            answer: "Binary data",
            feedback: "Correct. Computers represent information digitally, often described as 1s and 0s."
          },
          {
            text: "A message is split into smaller pieces so it can travel across networks and be put back together later.",
            options: ["Passwords", "Bookmarks", "Packets", "Screenshots"],
            answer: "Packets",
            feedback: "Correct. Packets are smaller pieces of data that move through networks."
          },
          {
            text: "A student scrolls social media while a cloud document syncs and music streams in another tab.",
            options: ["Only one packet can exist at a time", "Nothing is moving unless a file downloads", "Wi-Fi stops all background data", "Many packet exchanges can happen at once"],
            answer: "Many packet exchanges can happen at once",
            feedback: "Correct. Modern internet use often involves many services sending and receiving data at the same time."
          }
        
        
        ],
        quiz: [
          {
            question: "What are packets?",
            options: ["Small pieces of data that move across networks", "Only passwords", "Only social media posts", "A type of Chromebook charger"],
            answer: "Small pieces of data that move across networks"
          },
          {
            question: "Which part of Wi-Fi carries data wirelessly nearby?",
            options: ["Radio waves", "Paper mail", "A printed worksheet", "A citation"],
            answer: "Radio waves"
          },
          {
            question: "What can carry data across long distances, including across ocean floors?",
            options: ["Fiber optic cables", "Only classroom routers", "Only Bluetooth", "Only a Chromebook screen"],
            answer: "Fiber optic cables"
          },
          {
            question: "Which statement is most accurate?",
            options: ["The internet uses physical infrastructure", "The internet is only invisible air", "Data centers are only used for AI", "Packets do not need to be reassembled"],
            answer: "The internet uses physical infrastructure"
          },
          {
            question: "What uses servers and data centers?",
            options: ["Social media, streaming, cloud files, search, games, email, and AI", "Only AI chatbots", "Only school websites", "Only email from adults"],
            answer: "Social media, streaming, cloud files, search, games, email, and AI"
          }
        ]
      },
      {
        id: "how-ai-generates-responses",
        prerequisite: true,
        prerequisiteNumber: "P3",
        title: "How AI Generates Responses",
        shortDescription: "See how prompts travel to an AI model that predicts likely tokens and returns a response.",
        lesson: `AI tools send your prompt across the internet to remote servers. A ${termDef("language model", "An AI system that generates text by using patterns from training data.")} predicts likely ${termDef("tokens", "Small pieces of text, such as words or parts of words, that an AI model uses to build a response.")} one step at a time and builds a response. It can be useful, but it does not automatically check every fact, so a person still needs to review the result.`,
        extraHtml: `
          <div class="prereq-panel">
            <div class="prereq-click-prompt">
              ${netIcon("ai")}
              <span>Click the cards to follow an AI prompt from question to answer. <span class="term-note">Each card turns green after you visit it. Dotted words show quick definitions.</span></span>
            </div>

            <div class="packet-animation-band" aria-hidden="true">
              <div class="packet-animation-line"></div>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
              <span class="packet-moving-unit"></span>
            </div>

            <div class="animated-diagram packet-journey-shell">
              <div class="animated-track six">
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="prompt" onclick="showFoundationInfo('llm','prompt')">${netIcon("send")}<strong>Prompt</strong><small>you ask for help</small></button>
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="travel" onclick="showFoundationInfo('llm','travel')">${netIcon("wifi")}<strong>Internet Path</strong><small>request travels online</small></button>
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="server" onclick="showFoundationInfo('llm','server')">${netIcon("datacenter")}<strong>AI Server</strong><small>computer work happens</small></button>
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="model" onclick="showFoundationInfo('llm','model')">${netIcon("ai")}<strong>Language Model</strong><small>uses patterns</small></button>
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="tokens" onclick="showFoundationInfo('llm','tokens')">${netIcon("assemble")}<strong>Tokens</strong><small>response builds piece by piece</small></button>
                <button class="diagram-node" data-foundation-diagram="llm" data-foundation-key="check" onclick="showFoundationInfo('llm','check')">${netIcon("read")}<strong>Human Check</strong><small>verify before using</small></button>
              </div>
            </div>

            <div id="llmFoundationInfo" class="diagram-info"><strong>Try it:</strong> Click each AI response card to follow the path from prompt to human check.</div>

            <div id="llmClickScore" class="diagram-selfcheck"><strong>Self-check:</strong> 0 of 6 AI response cards visited.<span class="small-note">Each card turns green after you click it. Pause briefly before the next card.</span></div>

            
            <div class="ai-category-tool">
              <h4>What kind of AI is it?</h4>
              <p class="small-note">AI can overlap. Choose the strongest match for each example.</p>

              <div class="tool-callout">
                <div class="tool-callout-icon" aria-hidden="true">✦</div>
                <div>
                  <strong>Artificial Intelligence is the big category.</strong>
                  <p class="small-note">Different AI tools do different jobs. Some work with words, some create new content, some recognize images or speech, and some make predictions or recommendations.</p>
                </div>
              </div>

              <div id="aiCategoryKey" class="ai-category-key" aria-label="AI category key"></div>

              <div id="aiCategoryExamples" class="ai-category-examples"></div>
              <div id="aiCategoryStatus" class="ai-category-status">Choose a category for each example.</div>
            </div>

            <div class="ai-facts-lab ai-visual-overview">
              <h4>What matters most about AI</h4>
              <p class="small-note">Short version: AI builds a response by predicting likely tokens, but people still need to check accuracy, context, and sources.</p>

              <div class="ai-quick-strip">
                <div class="ai-quick-card">
                  ${netIcon("send")}
                  <strong>You ask</strong>
                  <p>You enter a question, task, or example.</p>
                </div>
                <div class="ai-quick-card">
                  ${netIcon("ai")}
                  <strong>AI predicts</strong>
                  <p>An LLM predicts likely next tokens from patterns.</p>
                </div>
                <div class="ai-quick-card">
                  ${netIcon("assemble")}
                  <strong>It builds</strong>
                  <p>The response is generated one token at a time.</p>
                </div>
                <div class="ai-quick-card">
                  ${netIcon("read")}
                  <strong>You check</strong>
                  <p>You review accuracy, usefulness, safety, and fit.</p>
                </div>
              </div>

              <div class="ai-watch-grid">
                <div class="ai-watch-card">
                  ${netIcon("read")}
                  <strong>Can be wrong</strong>
                  <p>AI may give a wrong or misleading answer.</p>
                </div>
                <div class="ai-watch-card">
                  ${netIcon("assemble")}
                  <strong>Can miss context</strong>
                  <p>It may leave out an important fact, detail, or part of the situation.</p>
                </div>
                <div class="ai-watch-card">
                  ${netIcon("send")}
                  <strong>Can invent details</strong>
                  <p>It may invent quotes, sources, links, or other details.</p>
                </div>
                <div class="ai-watch-card">
                  ${netIcon("ai")}
                  <strong>Prompts matter</strong>
                  <p>The wording of a prompt can shape what kind of answer the model gives.</p>
                </div>
              </div>

              <div class="ai-compare-grid">
                <div class="ai-compare-card">
                  ${netIcon("globe")}
                  <strong>Helpful for</strong>
                  <p>Brainstorming, getting unstuck, or asking for a simpler explanation.</p>
                </div>
                <div class="ai-compare-card">
                  ${netIcon("school")}
                  <strong>Not enough by itself</strong>
                  <p>Fact-checking, dependable citations, or replacing your own judgment.</p>
                </div>
              </div>

              <div class="ai-action-banner">Best habit: use AI as a starting point, not as the final answer.</div>

              <div class="source-note">
                Sources adapted for this section: Bipartisan Policy Center, <em>AI: Facts and Myths</em> (Apr. 6, 2026), and University of Maryland Libraries, <em>What does AI get wrong?</em> (updated Jun. 9, 2026), https://lib.guides.umd.edu/AI.
              </div>
            </div>

            <div class="ai-mini-lab">
              <strong>Fast reminder</strong>
              <div class="mini-lab-grid">
                <div class="mini-lab-card">
                  <strong>AI can help</strong>
                  <p>brainstorm, explain, suggest</p>
                </div>
                <div class="mini-lab-card">
                  <strong>AI can fail</strong>
                  <p>wrong facts, missing context, fake sources</p>
                </div>
                <div class="mini-lab-card">
                  <strong>You stay in charge</strong>
                  <p>check, revise, decide</p>
                </div>
              </div>
            </div>
          </div>
        `,
        activityType: "llmProcess",
        selfCheckDiagram: "llm",
        items: [
          {
            text: "What is an AI chatbot mainly doing?",
            options: ["Checking every fact first", "Reading your mind", "Predicting likely next words", "Watching your screen live"],
            answer: "Predicting likely next words",
            feedback: "Correct. A language model predicts likely words or tokens from patterns."
          },
          {
            text: "Which problem can happen in an AI answer?",
            options: ["It is always perfect", "It never leaves things out", "It can make up a source", "It always knows the author"],
            answer: "It can make up a source",
            feedback: "Correct. AI can invent sources, quotes, links, or other details."
          },
          {
            text: "Why does prompt wording matter?",
            options: ["It turns Wi-Fi off", "It changes your grade", "It removes tokens", "It can steer the answer"],
            answer: "It can steer the answer",
            feedback: "Correct. The way you ask can shape the kind of answer you get."
          },
          {
            text: "Best final step?",
            options: ["Trust it because it sounds confident", "Use it without reading", "Check the answer with real sources", "Skip your own judgment"],
            answer: "Check the answer with real sources",
            feedback: "Correct. AI is a starting point, not the final word."
          }
        ],
        quiz: [
          {
            question: "What is most accurate about an LLM?",
            options: ["It predicts likely words from patterns", "It guarantees truth", "It is a person", "It does not use servers"],
            answer: "It predicts likely words from patterns"
          },
          {
            question: "Which warning is important?",
            options: ["AI can mix truth and fiction", "AI always cites real sources", "AI never misses context", "AI ignores prompts"],
            answer: "AI can mix truth and fiction"
          },
          {
            question: "What should you do with an AI answer?",
            options: ["Check it with reliable human-created sources", "Trust it because it sounds clear", "Paste it as your final answer", "Assume the citations are real"],
            answer: "Check it with reliable human-created sources"
          }
        ]
      },
      
      {
        id: "student-ai-guidelines",
        title: "Student AI Guidelines",
        shortDescription: "Practice the core expectations for responsible student AI use.",
        lesson: "AI can support learning, but it should not replace student thinking. Work through these short situations and choose the guideline that fits best.",
        activityType: "guidelinePractice",
        items: [
          {
            text: "Core idea: AI supports my learning, but does not replace my _____.",
            options: ["typing", "answers", "thinking", "grade"],
            answer: "thinking",
            feedback: "Correct. This is the anchor idea for the whole lab: AI can support learning, but the thinking still belongs to the student."
          },
          {
            text: "A student is stuck starting a paragraph. They ask AI for three possible topic sentence ideas, then write their own paragraph.",
            options: ["Replaces thinking", "Privacy problem", "Supports learning", "Trusted adult needed"],
            answer: "Supports learning",
            feedback: "Correct. AI is being used for starting support, not to replace the student's work."
          },
          {
            text: "A student asks AI to write the final answer and submits it without changes or explanation.",
            options: ["Supports learning", "Replaces thinking", "Verify first", "Creative problem solving"],
            answer: "Replaces thinking",
            feedback: "Correct. This crosses the line because the AI is doing the learning task for the student."
          },
          {
            text: "AI gives a very specific fact, date, or quote, but does not show where it came from.",
            options: ["Trust it", "Submit it", "Verify first", "Make it sound better"],
            answer: "Verify first",
            feedback: "Correct. AI can sound confident and still be inaccurate, biased, incomplete, or misleading."
          },
          {
            text: "A student wants better help from AI, so they start typing extra context that includes a home address, phone number, password, or personal problem.",
            options: ["Share it for better context", "Ask AI to keep it secret", "Protect privacy", "Use more personal details"],
            answer: "Protect privacy",
            feedback: "Correct. AI may work better with context, but students should give general context without sharing private or identifying information."
          },
          {
            text: "A student starts treating an AI chatbot like a close friend, counselor, or trusted adult.",
            options: ["Trusted adult needed", "Better prompt needed", "Disclosure needed", "No issue"],
            answer: "Trusted adult needed",
            feedback: "Correct. AI is not a friend, counselor, family member, teacher, or trusted adult."
          },
          {
            text: "An assignment says, 'Do not use AI for this response.' A student uses AI anyway because it is faster.",
            options: ["Follow teacher directions", "Supports learning", "Verify first", "No issue"],
            answer: "Follow teacher directions",
            feedback: "Correct. Students must follow teacher expectations for each assignment, assessment, and classroom activity."
          },
          {
            text: "A teacher allows AI for brainstorming and asks students to explain how they used it.",
            options: ["Disclose or cite", "Hide it", "Use AI for everything", "No reflection needed"],
            answer: "Disclose or cite",
            feedback: "Correct. When required, students should acknowledge, disclose, or cite how AI supported their work."
          },
          {
            text: "A student includes a fake source that AI invented and says, 'It is not my fault because AI made it.'",
            options: ["Acceptable defense", "Student is responsible", "Ask AI to apologize", "No problem"],
            answer: "Student is responsible",
            feedback: "Correct. Students are responsible for final work, including accuracy, sources, honesty, and integrity."
          }
        ],
        quiz: [
          {
            question: "Which statement best summarizes the student AI guideline?",
            options: [
              "AI can replace my thinking if it gives a better answer.",
              "AI supports my learning, but does not replace my thinking.",
              "AI is always reliable if it sounds confident.",
              "AI can be used the same way on every assignment."
            ],
            answer: 1
          },
          {
            question: "What should students do before trusting important AI-generated information?",
            options: [
              "Copy it if it sounds detailed",
              "Ask AI to repeat the answer",
              "Verify it with reliable sources",
              "Use the first result"
            ],
            answer: 2
          },
          {
            question: "Which choice is safest and most responsible?",
            options: [
              "Share private information with AI to get a better answer",
              "Use AI secretly when the assignment says not to",
              "Treat AI like a trusted adult",
              "Follow teacher expectations and disclose AI use when required"
            ],
            answer: 3
          }
        ]
      },
      {
        id: "sau48-ai-statement-integrity",
        title: "SAU 48 AI Statement & Academic Integrity",
        shortDescription: "Learn how SAU 48 frames AI, original thinking, honesty, and responsible use.",
        lesson: "SAU 48 sees AI as a complement to human intelligence, not a substitute for it. AI may enhance learning, creativity, and critical thinking when used ethically, transparently, and with teacher permission. Students remain responsible for academic honesty, original thinking, accurate work, verified sources, and protecting student data.",
        activityType: "sau48Policy",
        items: [
          {
            text: "SAU 48 describes AI as a complement, not a substitute, for human intelligence. What does that mean for student work?",
            options: ["AI can replace student thinking", "AI should support human thinking", "AI should always write the final answer", "AI makes verification unnecessary"],
            answer: "AI should support human thinking",
            feedback: "Correct. The statement frames AI as a tool to enrich learning, not replace authentic understanding or original thinking."
          },
          {
            text: "A student uses AI to generate material for an assignment, but the teacher did not authorize AI use.",
            options: ["Allowed if it sounds correct", "Allowed if the student is busy", "Not allowed", "Allowed without disclosure"],
            answer: "Not allowed",
            feedback: "Correct. The policy states that AI should only be used to generate material when authorized by the teacher."
          },
          {
            text: "A student includes AI-generated information in a project. What is the student responsible for?",
            options: ["Assuming AI is correct", "Verifying accuracy and citing appropriately", "Blaming the AI if it is wrong", "Leaving out sources"],
            answer: "Verifying accuracy and citing appropriately",
            feedback: "Correct. Students are responsible for ensuring AI-supported material accurately reflects facts and is identified through independently verified citation when used."
          },
          {
            text: "A student copies AI-generated writing into an assignment and presents it as their own thinking.",
            options: ["Original thinking", "Academic dishonesty risk", "Transparent use", "Teacher-approved collaboration"],
            answer: "Academic dishonesty risk",
            feedback: "Correct. Academic dishonesty includes cheating, forgery, or plagiarism. Students must distinguish their own thoughts from someone else's or AI's work and give credit when required."
          },
          {
            text: "A class activity allows students to use AI for brainstorming, but the teacher says the final paragraph must be written independently.",
            options: ["Follow the teacher's limit", "Use AI for the final paragraph anyway", "Hide the AI use", "Ignore the assignment directions"],
            answer: "Follow the teacher's limit",
            feedback: "Correct. Students must follow the teacher's expectations for independent, cooperative, and AI-supported work."
          },
          {
            text: "SAU 48 emphasizes ethical, responsible, and transparent AI use. Which action best matches that expectation?",
            options: ["Disclose AI use when required", "Use AI secretly", "Trust AI without checking", "Submit AI output as original work"],
            answer: "Disclose AI use when required",
            feedback: "Correct. Transparency means being clear about when and how AI supported the work."
          }
        ],
        quiz: [
          {
            question: "How does SAU 48 describe the role of AI in learning?",
            options: [
              "A substitute for human intelligence",
              "A complement to human intelligence",
              "A tool that removes the need for original thinking",
              "A replacement for teachers"
            ],
            answer: 1
          },
          {
            question: "When should AI be used to generate material for academic work?",
            options: [
              "Whenever it saves time",
              "Only when authorized by the teacher",
              "Only when the student does not understand",
              "Anytime, as long as the final answer is long"
            ],
            answer: 1
          },
          {
            question: "If a student incorporates generative AI material into academic work, what responsibility remains with the student?",
            options: [
              "The student must verify accuracy and identify/cite AI-supported material as required.",
              "The student can blame the AI for inaccurate facts.",
              "The student does not need to understand the work.",
              "The student does not need to follow teacher directions."
            ],
            answer: 0
          }
        ]
      },
      {
        id: "what-counts-as-ai",
        title: "What Counts as AI?",
        shortDescription: "Tell the difference between AI, regular technology, and tools that are hard to classify.",
        lesson: "AI is not just anything on a computer. AI tools usually use patterns in data to predict, recommend, classify, or generate something. Some tools are clearly AI, some are clearly not AI, and some are hard to classify because newer versions may include AI features.",
        activityType: "sort",
        items: [
          {
            text: "A calculator solves 12 × 9 after you type it in.",
            answer: "Not AI",
            feedback: "Correct. A basic calculator follows fixed math rules. It is useful technology, but it is not making a prediction or generating a new response."
          },
          {
            text: "A chatbot writes a paragraph after a student types a prompt.",
            answer: "AI",
            feedback: "Correct. A chatbot generates text based on patterns from large amounts of data."
          },
          {
            text: "A video app recommends what to watch next based on what someone watched before.",
            answer: "AI",
            feedback: "Correct. Recommendation systems often use AI or machine learning to predict what a person might choose next."
          },
          {
            text: "A Google Slide moves to the next slide when someone clicks the mouse.",
            answer: "Not AI",
            feedback: "Correct. This is a preset action. It follows a command, but it is not predicting, recommending, classifying, or generating."
          },
          {
            text: "A writing tool suggests the next word or sentence while someone types.",
            answer: "AI",
            feedback: "Correct. Predicting words or sentences is usually an AI feature because the tool is using patterns in language."
          },
          {
            text: "A spellcheck tool underlines a misspelled word.",
            answer: "Unsure",
            feedback: "Correct. Some spellcheck tools use simple rules. Newer writing tools may use AI. The best answer depends on how the tool works."
          },
          {
            text: "A photo filter changes someone’s face or background automatically.",
            answer: "Unsure",
            feedback: "Correct. Some filters are simple effects, but others use AI to detect faces, separate backgrounds, or generate changes."
          },
          {
            text: "A person manually crops, colors, and edits a picture in a photo editor.",
            answer: "Not AI",
            feedback: "Correct. The person is making the creative decisions. The software is a tool, but the example does not describe AI doing the work."
          }
        ],
        quiz: [
          {
            question: "Which description best explains AI?",
            options: [
              "Any tool that uses electricity",
              "Any website that students use for school",
              "A tool that can use patterns in data to predict, recommend, classify, or generate",
              "A computer program that is always correct"
            ],
            answer: 2
          },
          {
            question: "Which example is clearly not AI?",
            options: [
              "A calculator adding two numbers",
              "A chatbot answering a prompt",
              "A video app recommending videos",
              "A writing tool predicting the next sentence"
            ],
            answer: 0
          },
          {
            question: "Why is 'Unsure' sometimes the best answer?",
            options: [
              "Because all technology is secretly AI",
              "Because some tools have simple versions and newer AI-powered versions",
              "Because AI is impossible to explain",
              "Because students should never make a decision"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "ai-vocabulary-in-context",
        title: "AI Vocabulary in Context",
        shortDescription: "Use key AI terms in real situations instead of only memorizing definitions.",
        lesson: "Vocabulary matters because AI words can sound familiar while meaning something specific. In this module, match key terms to classroom situations and decide how the word changes what you should do next.",
        activityType: "vocabularyContext",
        items: [
          {
            text: "A chatbot gives an answer that sounds confident, but the source it names does not exist.",
            options: ["Hallucination", "Prompt", "Algorithm", "Dataset"],
            answer: "Hallucination",
            feedback: "Correct. A hallucination is AI output that is false or made up but may sound convincing."
          },
          {
            text: "A student types: 'Give me three questions to help me revise my paragraph.' What is that instruction called?",
            options: ["Prompt", "Model", "Bias", "Training"],
            answer: "Prompt",
            feedback: "Correct. A prompt is the instruction or question a person gives an AI system."
          },
          {
            text: "An AI image tool was mostly trained on one kind of face and performs worse with other faces.",
            options: ["Bias", "Citation", "Disclosure", "Inference"],
            answer: "Bias",
            feedback: "Correct. Bias can happen when data, design, or use creates unfair or inaccurate results."
          },
          {
            text: "A company collected many examples to help an AI system learn patterns.",
            options: ["Dataset", "Chatbot", "Citation", "Greenwashing"],
            answer: "Dataset",
            feedback: "Correct. A dataset is a collection of data used for analysis, training, or decision-making."
          },
          {
            text: "An AI system uses what it learned to respond to a new question.",
            options: ["Inference", "Plagiarism", "Database", "Password"],
            answer: "Inference",
            feedback: "Correct. Inference is when an AI model applies patterns to produce an output."
          },
          {
            text: "A student explains that they used AI to brainstorm ideas and then wrote the final paragraph themselves.",
            options: ["Disclosure", "Hallucination", "Algorithm", "Surveillance"],
            answer: "Disclosure",
            feedback: "Correct. Disclosure explains how AI was used and what role it played."
          }
        ],
        quiz: [
          {
            question: "Which term means a false or made-up AI answer that may sound confident?",
            options: ["Prompt", "Hallucination", "Dataset", "Disclosure"],
            answer: 1
          },
          {
            question: "Which term means the instruction or question given to an AI tool?",
            options: ["Prompt", "Bias", "Inference", "Citation"],
            answer: 0
          },
          {
            question: "Why does AI vocabulary matter?",
            options: ["It helps students sound technical without understanding", "It helps students explain, question, and use AI more responsibly", "It means AI is always accurate", "It replaces source checking"],
            answer: 1
          }
        ]
      },
      {
        id: "patterns-not-magic",
        title: "Patterns, Not Magic",
        shortDescription: "Notice how AI uses examples and patterns.",
        lesson: "AI tools do not think like people. They look for patterns in data and use those patterns to predict, recommend, classify, or generate something new.",
        activityType: "pattern",
        items: [
          {
            text: "A music app notices you often listen to calm piano music after school and recommends a similar playlist.",
            answer: "Pattern",
            feedback: "Correct. The app is using a pattern from past listening behavior."
          },
          {
            text: "A teacher chooses a book because she knows the class is interested in mysteries.",
            answer: "Human Judgment",
            feedback: "Correct. A person is making the decision using context and judgment."
          },
          {
            text: "An image tool creates a picture of a dragon after learning from many labeled images.",
            answer: "Pattern",
            feedback: "Correct. The tool generates from patterns in training examples."
          },
          {
            text: "A student decides a source is unreliable because the author is anonymous and the claim is unsupported.",
            answer: "Human Judgment",
            feedback: "Correct. The student is evaluating evidence and context."
          }
        ],
        quiz: [
          {
            question: "What does AI usually rely on to make predictions or generate outputs?",
            options: [
              "Feelings",
              "Magic",
              "Patterns in data",
              "Personal experience like a human"
            ],
            answer: 2
          },
          {
            question: "Why does this matter for students?",
            options: [
              "AI can be useful, but it may miss context or make mistakes.",
              "AI is always smarter than people.",
              "AI should replace checking work.",
              "AI tools never need examples."
            ],
            answer: 0
          }
        ]
      },
      {
        id: "can-you-trust-it",
        title: "Can You Trust It?",
        shortDescription: "Practice checking AI claims before believing them.",
        lesson: "AI can sound confident and still be wrong. Strong AI use means checking important claims with reliable sources.",
        activityType: "claimCheck",
        items: [
          {
            text: "AI says your school was founded in 1842, but it gives no source.",
            answer: "Check It",
            feedback: "Correct. A specific historical claim should be checked."
          },
          {
            text: "AI suggests three possible titles for your story.",
            answer: "Probably OK",
            feedback: "Correct. Creative suggestions are lower-risk, though you still choose what fits."
          },
          {
            text: "AI gives medical advice about a serious symptom.",
            answer: "Check It",
            feedback: "Correct. Health information should be checked with trusted adults or medical sources."
          },
          {
            text: "AI helps brainstorm questions to ask during a research project.",
            answer: "Probably OK",
            feedback: "Correct. Brainstorming can be useful, but research answers still need checking."
          }
        ],
        quiz: [
          {
            question: "What is the safest habit when AI gives an important fact?",
            options: [
              "Copy it if it sounds confident.",
              "Ask AI the same question again and stop there.",
              "Check it with a reliable source.",
              "Ignore all AI answers."
            ],
            answer: 2
          },
          {
            question: "What is an AI hallucination?",
            options: [
              "A fake or incorrect answer that sounds real",
              "An image with bright colors",
              "A robot that moves too fast",
              "A password-saving feature"
            ],
            answer: 0
          }
        ]
      },
      {
        id: "media-literacy",
        title: "Is This Media Reliable?",
        shortDescription: "Decide what needs more checking before sharing or believing.",
        lesson: "Images, videos, captions, screenshots, and posts can be real, edited, AI-generated, or misleading. The safest first step is to slow down and check context.",
        activityType: "media",
        items: [
          {
            text: "A shocking image appears online with no source, date, location, or author.",
            answer: "Needs Checking",
            feedback: "Correct. Missing context is a warning sign."
          },
          {
            text: "A school website posts a dated announcement with contact information and matching details from the district calendar.",
            answer: "More Reliable",
            feedback: "Correct. Official source, date, and matching context make it more reliable."
          },
          {
            text: "A screenshot claims a celebrity said something, but there is no link to the original post.",
            answer: "Needs Checking",
            feedback: "Correct. Screenshots are easy to crop, edit, fake, or remove from context."
          },
          {
            text: "A news article includes the author, date, source links, and quotes from named experts.",
            answer: "More Reliable",
            feedback: "Correct. Those details do not guarantee truth, but they make checking easier."
          }
        ],
        quiz: [
          {
            question: "What should you do before sharing surprising media online?",
            options: [
              "Share quickly before others see it",
              "Check the source, date, and context",
              "Assume it is real if it looks realistic",
              "Ask one friend if they like it"
            ],
            answer: 1
          },
          {
            question: "Why can screenshots be risky evidence?",
            options: [
              "They are always AI-generated",
              "They can be edited, cropped, or missing context",
              "They are never useful",
              "They only work on phones"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "prompt-like-a-learner",
        title: "Prompt Like a Learner",
        shortDescription: "Choose stronger prompts that support learning.",
        lesson: "A strong school prompt gives a clear task, audience, format, and limits. It should help you think, not replace your thinking.",
        activityType: "promptChoice",
        items: [
          {
            text: "Which prompt is better for learning?\n\nPrompt A: Write an outline and introduction for my ecosystems essay.\n\nPrompt B: Ask me five planning questions to help me outline my own ecosystems essay.",
            answer: "Prompt B",
            feedback: "Correct. Both prompts are about planning, but Prompt B keeps the student responsible for the essay."
          },
          {
            text: "Which prompt is better for checking understanding?\n\nPrompt A: Explain photosynthesis in three sentences for a 6th grader, then give me two practice questions I can answer myself.\n\nPrompt B: Explain photosynthesis in three sentences, then give me two sample answers I could use.",
            answer: "Prompt A",
            feedback: "Correct. Both prompts ask for explanation, but Prompt A keeps the student responsible for answering."
          },
          {
            text: "Which prompt is better for revision?\n\nPrompt A: Rewrite my paragraph so it is clearer and add details where it needs more support.\n\nPrompt B: Give feedback on whether my paragraph has a clear topic sentence and one strong example. Do not rewrite it for me.",
            answer: "Prompt B",
            feedback: "Correct. Both prompts are about revision, but Prompt B asks for feedback without handing over authorship."
          },
          {
            text: "Which prompt is safer for research?\n\nPrompt A: Give me three possible search terms for learning about renewable energy.\n\nPrompt B: Give me three facts about renewable energy that sound good for a school report.",
            answer: "Prompt A",
            feedback: "Correct. Prompt A helps the student begin research. Prompt B creates facts that still need source checking and should not be copied."
          }
        ],
        quiz: [
          {
            question: "Which detail often makes a prompt stronger?",
            options: [
              "A clear task and audience",
              "Asking AI to do everything",
              "Leaving out the assignment goal",
              "Using the shortest possible command every time"
            ],
            answer: 0
          },
          {
            question: "Which prompt best protects student authorship?",
            options: [
              "Write this whole paragraph for me.",
              "Give me feedback, but do not rewrite my paragraph.",
              "Make my answer sound like an adult wrote it.",
              "Finish the assignment without explaining."
            ],
            answer: 1
          }
        ]
      },
      {
        id: "responsible-school-use",
        title: "Responsible School Use",
        shortDescription: "Decide what is helpful, not OK, or not okay.",
        lesson: "Responsible AI use depends on the task, the teacher's directions, and whether the student is still doing the thinking.",
        activityType: "scenario",
        items: [
          {
            text: "You ask AI to give you three study questions before a quiz.",
            answer: "Helpful",
            feedback: "Correct. This can support learning if you still practice and think."
          },
          {
            text: "You ask AI to write your entire final paragraph and turn it in as your own.",
            answer: "Not OK",
            feedback: "Correct. That hides authorship and avoids the learning task."
          },
          {
            text: "You use AI to explain a confusing vocabulary word, then write your own sentence.",
            answer: "Helpful",
            feedback: "Correct. This supports understanding while keeping your work your own."
          },
          {
            text: "You paste a classmate's private writing into an AI tool without permission.",
            answer: "Not OK",
            feedback: "Correct. That creates a privacy and consent problem."
          }
        ],
        quiz: [
          {
            question: "Which choice best describes responsible AI use in school?",
            options: [
              "Using AI so you do not have to think",
              "Using AI only when it helps you learn and follows directions",
              "Using AI secretly whenever possible",
              "Using AI instead of checking sources"
            ],
            answer: 1
          },
          {
            question: "What should you do if you are unsure whether AI is allowed?",
            options: [
              "Use it and hope nobody notices",
              "Ask the teacher or check the assignment directions",
              "Use a different AI tool",
              "Have a friend do it"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "when-is-ai-allowed",
        title: "When Is AI Allowed?",
        shortDescription: "Match classroom situations to the correct level of AI use.",
        lesson: "AI use depends on the assignment. A teacher may allow no AI, planning support, editing support, defined task support, or broader supported co-use. Students are responsible for following the level set by the teacher.",
        activityType: "aiUseLevel",
        items: [
          {
            text: "The teacher says: Complete this assessment entirely on your own. Do not use AI at any point.",
            options: ["Level 0: No AI Use", "Level 1: Planning", "Level 2: Editing", "Level 3: Defined Support"],
            answer: "Level 0: No AI Use",
            feedback: "Correct. Level 0 means the assignment is completed entirely without AI assistance."
          },
          {
            text: "A student uses AI to brainstorm possible project topics, but no AI-generated content appears in the final submission.",
            options: ["Level 0: No AI Use", "Level 1: Planning", "Level 2: Editing", "Level 4: Supported Co-Use"],
            answer: "Level 1: Planning",
            feedback: "Correct. Level 1 allows AI for brainstorming, structures, or ideas, but not final submitted content."
          },
          {
            text: "A student writes their own paragraph first, then asks AI for feedback on clarity and organization without adding new ideas.",
            options: ["Level 1: Planning", "Level 2: Editing", "Level 3: Defined Support", "Level 4: Supported Co-Use"],
            answer: "Level 2: Editing",
            feedback: "Correct. Level 2 allows AI to improve clarity or quality of student-created work, but not create new content."
          },
          {
            text: "The teacher says students may use AI to create one practice example, but students must evaluate whether the example is accurate.",
            options: ["Level 0: No AI Use", "Level 1: Planning", "Level 3: Defined Support", "Level 4: Supported Co-Use"],
            answer: "Level 3: Defined Support",
            feedback: "Correct. Level 3 allows AI for specific parts of the task defined by the teacher, with human oversight and evaluation."
          },
          {
            text: "The teacher designs an assignment where students may use AI throughout the process as a co-pilot, but must document, evaluate, and cite AI use.",
            options: ["Level 1: Planning", "Level 2: Editing", "Level 3: Defined Support", "Level 4: Supported Co-Use"],
            answer: "Level 4: Supported Co-Use",
            feedback: "Correct. Level 4 allows broader AI-supported work when the teacher permits it, but students still need oversight, citation, and documentation."
          },
          {
            text: "A student uses AI for an assignment even though the teacher set the task as Level 0.",
            options: ["Allowed", "Not allowed", "Only allowed if cited", "Only allowed if the answer is correct"],
            answer: "Not allowed",
            feedback: "Correct. The student must follow the teacher's assigned AI-use level."
          }
        ],
        quiz: [
          {
            question: "At which level is AI not allowed at any point during the assignment?",
            options: ["Level 0: No AI Use", "Level 1: Planning", "Level 2: Editing", "Level 4: Supported Co-Use"],
            answer: 0
          },
          {
            question: "Which level allows AI for brainstorming or planning, but not final AI-generated content?",
            options: ["Level 0: No AI Use", "Level 1: Planning", "Level 3: Defined Support", "Level 4: Supported Co-Use"],
            answer: 1
          },
          {
            question: "What remains true at every AI-use level where AI is allowed?",
            options: ["The student is no longer responsible for the work.", "The student must follow teacher expectations.", "The AI tool decides what is acceptable.", "The student does not need to understand the work."],
            answer: 1
          }
        ]
      },
      {
        id: "ai-disclosure-statements",
        title: "AI Disclosure Statements",
        shortDescription: "Practice explaining how AI was used on an assignment.",
        lesson: "When AI use is allowed or required to be documented, students may need to name the AI tool and link, describe the specific use, list the prompts, and explain how the output was used in the final submission. AI disclosure statements are not the same as formal citations.",
        activityType: "disclosurePractice",
        items: [
          {
            text: "A complete AI disclosure should name the tool used and include a link when possible.",
            options: ["Include", "Do Not Include", "Only If Asked", "Never Include"],
            answer: "Include",
            feedback: "Correct. The tool name and access link help make the AI use transparent."
          },
          {
            text: "A complete AI disclosure should describe what task the tool helped with.",
            options: ["Include", "Do Not Include", "Only If It Was Wrong", "Never Include"],
            answer: "Include",
            feedback: "Correct. Students should explain the type of support, such as brainstorming, outlining, image generation, or editing feedback."
          },
          {
            text: "A complete AI disclosure should list the specific prompts used.",
            options: ["Include", "Do Not Include", "Hide Them", "Only Include the Best Prompt"],
            answer: "Include",
            feedback: "Correct. Prompts help show what the student asked the AI tool to do."
          },
          {
            text: "A complete AI disclosure should explain how the AI output was used in the final submission.",
            options: ["Include", "Do Not Include", "Only If the Teacher Catches It", "Never Include"],
            answer: "Include",
            feedback: "Correct. This shows whether AI was used for planning, feedback, wording, images, or another purpose."
          },
          {
            text: "A student used AI to improve the organization of an essay draft but made the final edits themselves. Which disclosure is stronger?",
            options: ["I used AI.", "AI helped me.", "I used Claude to get feedback on organization. I used some suggestions to revise my own draft.", "No disclosure is needed because I changed some words."],
            answer: "I used Claude to get feedback on organization. I used some suggestions to revise my own draft.",
            feedback: "Correct. A strong disclosure names the tool, task, and how the output was used."
          },
          {
            text: "A student generated an image for a presentation. What should the disclosure explain?",
            options: ["Only that the image looks good", "The tool, prompt, and how the image was used", "That no one will notice", "Only the student's name"],
            answer: "The tool, prompt, and how the image was used",
            feedback: "Correct. Generated images should be acknowledged when required by the teacher."
          }
        ],
        quiz: [
          {
            question: "Which item belongs in an AI disclosure statement?",
            options: ["The name of the AI tool used", "A private password", "A fake source", "A claim that AI is always correct"],
            answer: 0
          },
          {
            question: "Which disclosure is strongest?",
            options: ["I used AI.", "ChatGPT did part of this.", "I used ChatGPT to brainstorm three topic ideas. I chose one idea and wrote the paragraph myself.", "AI helped but I do not remember how."],
            answer: 2
          },
          {
            question: "What is important to remember about AI disclosure statements?",
            options: ["They replace all citations every time.", "They are never needed.", "They explain AI use, but teachers may also require formal citations.", "They should hide the prompts used."],
            answer: 2
          }
        ]
      }
 ,
      {
        id: "eco-aware-ai-use",
        title: "AI Eco-Awareness Badge",
        shortDescription: "Explore AI, water, electricity, data centers, source checking, and lower-impact AI habits.",
        lesson: "AI can feel invisible, but it depends on physical infrastructure: data centers, chips, electricity, cooling systems, water, hardware, networks, and supply chains. In this badge, you will complete short fill-in activities, use a water-use calculator, review common data center types, and examine where data centers are located in the United States.",
        activityType: "ecoAwareness",
        items: [
          {
            text: "Which AI task usually has the lower environmental impact?",
            options: ["A focused text prompt", "Generating an AI video", "Creating many extra images just in case", "Running several unnecessary versions"],
            answer: "A focused text prompt",
            feedback: "Correct. A short, focused text task is usually lighter than video generation or many unnecessary generations."
          },
          {
            text: "Why does data-center location matter?",
            options: ["The impact is always identical everywhere", "Water supply, climate, energy mix, and community needs can differ", "Only the internet speed changes", "Location matters only for company branding"],
            answer: "Water supply, climate, energy mix, and community needs can differ",
            feedback: "Correct. Local water, climate, electricity sources, and community priorities can change the impact."
          },
          {
            text: "Which question is best for checking a greenwashing claim?",
            definition: "Greenwashing is when a company, product, or tool is made to seem more environmentally responsible than the evidence actually shows.",
            options: ["Does the company use green colors?", "What was measured, what was left out, and who verified the claim?", "Does the ad sound optimistic?", "Is the tool popular online?"],
            answer: "What was measured, what was left out, and who verified the claim?",
            feedback: "Correct. Good environmental questions focus on evidence, scope, limits, and verification."
          },
          {
            text: "What is a lower-impact classroom AI habit?",
            options: ["Use focused prompts and avoid unnecessary generations", "Generate many versions just in case", "Use video generation first for every task", "Ask AI for every small decision"],
            answer: "Use focused prompts and avoid unnecessary generations",
            feedback: "Correct. Focused prompts and fewer extra generations reduce waste."
          }
        ],
        quiz: [
          {
            question: "Why is the statement 'AI uses water' incomplete by itself?",
            options: ["Because AI never uses water", "Because impact depends on location, cooling systems, task type, and other context", "Because only phones use water", "Because water matters only in winter"],
            answer: 1
          },
          {
            question: "Which classroom choice is the most environmentally aware?",
            options: ["Use AI for every small task so nothing is missed", "Start with your own thinking and use a short text prompt only when it adds value", "Generate extra images in case one is useful", "Pick video generation even when a sentence answer would work"],
            answer: 1
          },
          {
            question: "What should you do when a company says its AI is green or eco-friendly?",
            options: ["Trust the claim automatically", "Ignore the claim", "Ask what evidence supports the claim and what may be missing", "Assume the tool has no environmental impact"],
            answer: 2
          }
        ]
      }
 ,
      {
        id: "required-ai-vocabulary-review",
        title: "AI Vocabulary Review",
        shortDescription: "Review key AI terms before using the practice tools.",
        lesson: "Vocabulary helps you explain your AI use clearly. Review the terms, then choose the best match in each situation.",
        extraHtml: `
          <div class="teacher-note">
            <strong>Required vocabulary checkpoint</strong>
            <p class="small-note">Focus on terms you may need when explaining, checking, or disclosing AI use.</p>
          </div>
          <div class="mini-lab-grid">
            <div class="mini-lab-card"><strong>Prompt</strong><p>The instruction or question you give an AI tool.</p></div>
            <div class="mini-lab-card"><strong>Output</strong><p>What the AI tool gives back.</p></div>
            <div class="mini-lab-card"><strong>Disclosure</strong><p>A note explaining how AI was used.</p></div>
          </div>
        `,
        activityType: "guidelinePractice",
        items: [
          {
            text: "A student writes the question they gave to an AI tool. What is that called?",
            options: ["Citation", "Password", "Prompt", "Bookmark"],
            answer: "Prompt",
            feedback: "Correct. A prompt is the question, direction, or context given to an AI tool."
          },
          {
            text: "A student explains that they used AI to brainstorm ideas but wrote the final paragraph themselves. What is that explanation called?",
            options: ["Download", "Hallucination", "Shortcut", "Disclosure"],
            answer: "Disclosure",
            feedback: "Correct. A disclosure explains when and how AI was used."
          },
          {
            text: "An AI tool gives a confident answer with a source that does not exist. What is the concern?",
            options: ["Accessibility", "Hallucination", "Wi-Fi signal", "Keyboard shortcut"],
            answer: "Hallucination",
            feedback: "Correct. AI can generate false or invented information, including fake sources."
          }
        ],
        quiz: [
          {
            question: "What is a prompt?",
            options: ["The final grade", "A private password", "The instruction or question given to AI", "A printed worksheet"],
            answer: 2
          },
          {
            question: "What does disclosure explain?",
            options: ["Why Wi-Fi exists", "How to hide help", "How AI was used", "Why citations are optional"],
            answer: 2
          },
          {
            question: "What is a hallucination in AI use?",
            options: ["A faster keyboard", "A stronger internet cable", "A school login", "A confident false or invented response"],
            answer: 3
          }
        ]
      },
      {
        id: "required-ai-practice-tools",
        title: "AI Practice Tools",
        shortDescription: "Practice building a stronger prompt and explaining AI use.",
        lesson: "AI tools work better when students give clear directions and stay responsible for the final work. Practice the basic parts of a strong prompt and a clear AI-use explanation.",
        extraHtml: `
          <div class="teacher-note">
            <strong>Required tool checkpoint</strong>
            <p class="small-note">Use these tools before, during, and after AI use: assess the level, build a prompt, use a follow-up routine, and explain your AI use.</p>
          </div>

          <div class="student-ai-tools-panel">
            <details class="student-tool-accordion" open>
              <summary>
                <div class="student-tool-accordion-summary">
                  <strong>Assess</strong>
                  <span>Choose the AI-use level before you begin.</span>
                </div>
              </summary>
              <section class="student-tool-section" id="studentAssessTool">
                <div class="student-level-buttons" role="group" aria-label="Choose AI use level">
                  <button type="button" class="student-level-btn" data-level="0" onclick="selectStudentAiLevel(0)"><strong>Level 0</strong><span>Independent</span></button>
                  <button type="button" class="student-level-btn" data-level="1" onclick="selectStudentAiLevel(1)"><strong>Level 1</strong><span>Brainstorm / Explain</span></button>
                  <button type="button" class="student-level-btn" data-level="2" onclick="selectStudentAiLevel(2)"><strong>Level 2</strong><span>Organize / Revise</span></button>
                  <button type="button" class="student-level-btn" data-level="3" onclick="selectStudentAiLevel(3)"><strong>Level 3</strong><span>Supported Drafting</span></button>
                  <button type="button" class="student-level-btn" data-level="4" onclick="selectStudentAiLevel(4)"><strong>Level 4</strong><span>Generated Work</span></button>
                </div>

                <p class="small-note">Click a level to see what it means.</p>
                <div id="studentAssessOutput" class="student-assess-output">
                  <strong>Choose a level.</strong>
                  <p class="small-note">Start by deciding how much AI support is allowed for this task.</p>
                </div>

                <div class="student-assess-questions">
                  <div class="student-assess-card">
                    <strong>1. What level are you considering?</strong>
                    <select id="studentAssessLevelSelect" onchange="setStudentAssessLevelFromSelect()">
                      <option value="">Choose a level</option>
                      <option value="0">Level 0 — Independent</option>
                      <option value="1">Level 1 — Brainstorm / Explain</option>
                      <option value="2">Level 2 — Organize / Revise</option>
                      <option value="3">Level 3 — Supported Drafting</option>
                      <option value="4">Level 4 — Generated Work</option>
                    </select>
                  </div>

                  <div class="student-assess-card">
                    <strong>2. Did your teacher allow this level?</strong>
                    <select id="studentAssessAllowedSelect" onchange="updateStudentAssessFromDropdowns()">
                      <option value="">Not sure</option>
                      <option value="yes">Yes</option>
                      <option value="no">No / not yet</option>
                    </select>
                  </div>

                  <div class="student-assess-card">
                    <strong>3. Will you check the output and make final choices?</strong>
                    <select id="studentAssessResponsibilitySelect" onchange="updateStudentAssessFromDropdowns()">
                      <option value="">Choose an answer</option>
                      <option value="yes">Yes</option>
                      <option value="notyet">Not yet</option>
                    </select>
                  </div>
                </div>

                <div class="student-assess-actions">
                  <button type="button" class="build-primary" onclick="getStudentAssessGuidance()">Get Guidance</button>
                  <button type="button" class="secondary-btn" onclick="clearStudentAssess()">Clear Assess</button>
                </div>

                <div id="studentAssessStatus" class="student-prompt-status">Assess your AI-use level before building a prompt.</div>
              </section>
            </details>

            <details class="student-tool-accordion">
              <summary>
                <div class="student-tool-accordion-summary">
                  <strong>Build</strong>
                  <span>Create a clearer prompt before you use AI.</span>
                </div>
              </summary>
              <section class="student-tool-section student-prompt-practice">
                <p class="small-note">Do not paste a full essay, article, or assignment. Personal info should not be shared with AI.</p>

                <div class="student-build-mode-row" role="group" aria-label="Choose build mode">
                  <button type="button" id="standardBuildModeButton" class="secondary-btn active" onclick="setStudentBuildMode('standard')">Standard Build</button>
                  <button type="button" id="supportBuildModeButton" class="secondary-btn" onclick="setStudentBuildMode('support')">Build with Support</button>
                </div>

                <div id="studentStandardBuildPanel">
                  <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>1. What do you want AI to help with?</strong>
                    <span class="student-build-count" id="studentBuildTaskCount">0 / 120</span>
                  </div>
                  <input id="studentBuildTask" maxlength="120" oninput="updateStudentBuildCounts()" placeholder="Example: explain renewable energy">
                </div>

                <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>2. Who is the answer for?</strong>
                    <span class="student-build-count" id="studentBuildAudienceCount">0 / 80</span>
                  </div>
                  <input id="studentBuildAudience" maxlength="80" oninput="updateStudentBuildCounts()" placeholder="Example: a 5th grade student">
                </div>

                <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>3. What format do you need?</strong>
                    <span class="student-build-count" id="studentBuildFormatCount">0 / 80</span>
                  </div>
                  <input id="studentBuildFormat" maxlength="80" oninput="updateStudentBuildCounts()" placeholder="Example: 5 bullet points">
                </div>

                <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>4. What details should AI include?</strong>
                    <span class="student-build-count" id="studentBuildDetailsCount">0 / 250</span>
                  </div>
                  <textarea id="studentBuildDetails" maxlength="250" oninput="updateStudentBuildCounts()" placeholder="Example: include solar, wind, and hydropower"></textarea>
                </div>

                <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>5. What should AI avoid or remember?</strong>
                    <span class="student-build-count" id="studentBuildLimitsCount">0 / 200</span>
                  </div>
                  <textarea id="studentBuildLimits" maxlength="200" oninput="updateStudentBuildCounts()" placeholder="Example: do not write the final answer for me"></textarea>
                </div>

                <div class="button-row">
                  <button type="button" class="build-primary" onclick="buildStudentPracticePrompt()">Build Prompt</button>
                  <button type="button" class="secondary-btn" onclick="clearStudentPracticePrompt()">Clear Build</button>
                </div>

                <div class="student-build-field">
                  <div class="student-build-label-row">
                    <strong>Built prompt</strong>
                  </div>
                  <textarea id="studentPromptOutput" class="student-prompt-output" readonly placeholder="Your built prompt will appear here."></textarea>
                </div>

                <div class="button-row">
                  <button type="button" class="secondary-btn" onclick="copyStudentPracticePrompt()">Copy Prompt</button>
                </div>

                  <div id="studentPromptPracticeStatus" class="student-prompt-status">Build a prompt before completing the tool checkpoint.</div>
                </div>

                <div id="studentBuildWithSupportPanel" class="build-with-support-panel hidden">
                  <div class="build-with-support-note">
                    <strong>Optional support mode</strong>
                    <p class="small-note">Use this when you need more structure. It does not add another requirement to this checkpoint.</p>
                  </div>
                  <div id="studentBuildWithSupportMount"></div>
                </div>
              </section>
            </details>

            <details class="student-tool-accordion">
              <summary>
                <div class="student-tool-accordion-summary">
                  <strong>Follow Up</strong>
                  <span>Use Keep / Change / Check / Stop to refine AI output.</span>
                </div>
              </summary>
              <section class="student-tool-section">
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
              </section>
            </details>

            <details class="student-tool-accordion">
              <summary>
                <div class="student-tool-accordion-summary">
                  <strong>Disclose</strong>
                  <span>Explain how AI supported your work.</span>
                </div>
              </summary>
              <section class="student-tool-section" id="studentDisclosureTool">
                <p class="small-note">Disclosure is not the same as a formal citation.</p>

                <div class="student-disclosure-example">
                  <strong>Recommended format</strong>
                  <p class="small-note">Tool/link + Specific use + Prompt(s) + How the output was used</p>
                </div>

                <div class="student-disclosure-grid">
                  <div class="student-disclosure-field">
                    <strong>AI tool used</strong>
                    <input id="studentDisclosureToolUsed" placeholder="Example: ChatGPT, Gemini, Canva, etc.">
                  </div>

                  <div class="student-disclosure-field">
                    <strong>Tool link</strong>
                    <input id="studentDisclosureToolLink" placeholder="Example: https://chatgpt.com/">
                  </div>

                  <div class="student-disclosure-field">
                    <strong>What did you use AI to help with?</strong>
                    <input id="studentDisclosureUse" placeholder="Example: brainstorm ideas, organize notes, get feedback">
                  </div>

                  <div class="student-disclosure-field">
                    <strong>How did you use the output?</strong>
                    <input id="studentDisclosureOutputUse" placeholder="Example: I reviewed the ideas and wrote my own paragraph.">
                  </div>

                  <div class="student-disclosure-field full">
                    <strong>Prompt(s) used</strong>
                    <textarea id="studentDisclosurePrompts" placeholder="Paste or summarize the prompt you used."></textarea>
                  </div>

                  <div class="student-disclosure-field full">
                    <strong>Copy/Paste disclosure statement</strong>
                    <textarea id="studentDisclosureOutput" class="student-disclosure-output" readonly placeholder="Your disclosure statement will appear here."></textarea>
                  </div>
                </div>

                <div class="button-row">
                  <button type="button" onclick="generateStudentDisclosure()">Generate Disclosure</button>
                  <button type="button" class="secondary-btn" onclick="copyStudentDisclosure()">Copy Disclosure</button>
                  <button type="button" class="secondary-btn" onclick="clearStudentDisclosure()">Clear</button>
                  <button type="button" id="studentPromptCompleteButton" onclick="completeStudentPromptPractice()" disabled>Complete Tool Checkpoint</button>
                </div>

                <div id="studentDisclosureStatus" class="student-disclosure-status">Generate a disclosure and build a prompt to complete the tool checkpoint.</div>
                <div id="quizFeedback" class="feedback hidden"></div>
              </section>
            </details>
          </div>
        `,
        activityType: "promptChoice",
        items: [
          {
            text: "Which prompt keeps the student responsible?\n\nPrompt A: Write my whole paragraph about ecosystems.\n\nPrompt B: Ask me three planning questions about my ecosystem paragraph. Do not write it for me.",
            options: ["Prompt A", "Prompt B"],
            answer: "Prompt B",
            feedback: "Correct. Prompt B asks for support without handing over the work."
          },
          {
            text: "Which AI-use note is clearer?\n\nA: AI helped.\n\nB: I used AI to brainstorm three possible topic ideas. I chose one and wrote the paragraph myself.",
            options: ["A", "B"],
            answer: "B",
            feedback: "Correct. The stronger note explains the specific use and what the student did."
          },
          {
            text: "Which prompt is safer?\n\nPrompt A: Here is my full name, address, and problem. Tell me what to do.\n\nPrompt B: Give general advice for solving a school planning problem without using personal details.",
            options: ["Prompt A", "Prompt B"],
            answer: "Prompt B",
            feedback: "Correct. Prompt B avoids sharing private identifying information."
          }
        ],
        quiz: [
          {
            question: "What should a strong student prompt usually include?",
            options: ["Private passwords", "Task, useful context, and limits", "A request to do all the work", "No directions"],
            answer: 1
          },
          {
            question: "Which AI-use note is strongest?",
            options: ["AI did it.", "I used a website.", "I used AI to brainstorm ideas, then wrote and checked the final work myself.", "No tools were involved."],
            answer: 2
          },
          {
            question: "What should students avoid putting into prompts?",
            options: ["The assignment topic", "The type of feedback needed", "The reading level requested", "Private or identifying information"],
            answer: 3
          }
        ]
      },
      {
        id: "required-student-follow-up-routine",
        title: "Student Follow-Up Prompt Routine",
        shortDescription: "Use Keep, Change, Check, and Stop to improve AI output without replacing your thinking.",
        lesson: "A first AI answer is not the end. Students should decide what to keep, what to change, what to check, and when to stop using AI.",
        extraHtml: `
          <div class="teacher-note">
            <strong>Required follow-up routine</strong>
            <p class="small-note">Use this routine after an AI response: Keep, Change, Check, Stop.</p>
          </div>
          <div class="mini-lab-grid">
            <div class="mini-lab-card"><strong>Keep</strong><p>What is useful?</p></div>
            <div class="mini-lab-card"><strong>Change</strong><p>What needs revision?</p></div>
            <div class="mini-lab-card"><strong>Check</strong><p>What needs a source?</p></div>
            <div class="mini-lab-card"><strong>Stop</strong><p>When should you do the thinking yourself?</p></div>
          </div>
        `,
        activityType: "guidelinePractice",
        items: [
          {
            text: "AI gives a helpful outline, but one fact seems too specific. What should the student do?",
            options: ["Trust it because it sounds clear", "Delete the assignment", "Check it with a reliable source", "Hide the source"],
            answer: "Check it with a reliable source",
            feedback: "Correct. Specific facts, dates, statistics, and quotes need verification."
          },
          {
            text: "AI rewrites a paragraph in a way that no longer sounds like the student. Which routine step fits best?",
            options: ["Keep", "Ignore", "Change", "Submit"],
            answer: "Change",
            feedback: "Correct. Students should revise output so the final work stays accurate and in their own voice."
          },
          {
            text: "A student keeps asking AI for more answers instead of thinking through the task. Which routine step fits best?",
            options: ["Keep", "Copy", "Hide", "Stop"],
            answer: "Stop",
            feedback: "Correct. Students should stop when AI is replacing their thinking."
          }
        ],
        quiz: [
          {
            question: "Which routine helps students stay responsible after an AI response?",
            options: ["Copy, Paste, Submit, Forget", "Ask, Hide, Print, Close", "Keep, Change, Check, Stop", "Click, Skip, Guess, Turn In"],
            answer: 2
          },
          {
            question: "What should students check before trusting AI output?",
            options: ["Only the font size", "Whether it sounds confident", "Important claims, facts, quotes, and sources", "Whether it is long"],
            answer: 2
          },
          {
            question: "When should a student stop using AI?",
            options: ["Only when the Wi-Fi turns off", "Never", "Only after printing", "When it is replacing their thinking"],
            answer: 3
          }
        ]
      }
    ];


