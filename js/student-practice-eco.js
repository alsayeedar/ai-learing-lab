    const ecoClozeAnswers = ["data centers", "query", "electricity", "cooling", "estimates", "Location"];

    const ecoClozeOptions = ["cooling", "Location", "electricity", "data centers", "estimates", "greenwashing", "hardware", "query"];

    const ecoContextAnswers = ["millions", "infrastructure", "ChatGPT", "Gemini", "estimates"];

    const ecoContextOptions = ["AI Overview", "infrastructure", "unlimited", "millions", "exact", "Gemini", "estimates", "ChatGPT"];

    const ecoWordDefinitions = {
      "cooling": "Keeping servers from getting too hot.",
      "Location": "The place where a data center is built. Local water and energy sources matter.",
      "electricity": "Power used to run servers, networks, and cooling systems.",
      "data centers": "Large buildings full of computers that store and process digital information.",
      "estimates": "Careful guesses based on available information. Estimates can change when the data changes.",
      "greenwashing": "Making something sound more environmentally friendly than it really is.",
      "hardware": "The physical parts of technology, such as chips, servers, and cables.",
      "query": "A request sent to an AI system, such as a question, prompt, or task.",
      "millions": "A very large number. Here, it helps describe the scale of water use at large data centers.",
      "infrastructure": "The behind-the-scenes systems: data centers, servers, chips, power, cooling, and networks.",
      "ChatGPT": "An AI chatbot from OpenAI. This calculator uses a classroom estimate for a text query.",
      "Gemini": "An AI tool from Google. This calculator uses a classroom estimate for a text query.",
      "exact": "A number that is precise. Many AI water and energy numbers are not exact.",
      "AI Overview": "A search-engine summary. It can help you start, but it is not the original source.",
      "unlimited": "Having no limit. AI use still depends on physical systems, so it is not unlimited.",
      "headline": "The title of an article or post. A headline alone is not enough to verify a claim."
    };

        const ecoTermDefinitions = {
      "power range": "How much electricity a facility may need while it is running.",
      "megawatts": "A large unit of electrical power. One megawatt equals 1,000 kilowatts.",
      "kilowatts": "A smaller unit of electrical power. One megawatt equals 1,000 kilowatts.",
      "hyperscale": "A very large data center built for huge cloud or AI workloads.",
      "colocation": "A shared data center where different companies rent space for their own equipment.",
      "carrier hotel": "A data center that helps internet and telecom networks connect to each other.",
      "edge": "A smaller data center placed closer to users or devices to reduce delay.",
      "cooling": "The process of removing heat from a space, machine, or system so it can keep working safely.",
      "facility": "A building or site used for a specific purpose."
    };

    function ecoTermTip(term, label = term) {
      const definition = ecoTermDefinitions[term] || "A key term in this section.";
      return `<span class="eco-term-tip" tabindex="0" title="${escapeHtml(definition)}" aria-label="${escapeHtml(label)}: ${escapeHtml(definition)}">${escapeHtml(label)}</span>`;
    }

function ecoWordBankChip(word) {
      const definition = ecoWordDefinitions[word] || "Use this word where it best completes the sentence.";
      return `<span class="eco-word-chip" tabindex="0" title="${escapeHtml(definition)}" aria-label="${escapeHtml(word)}: ${escapeHtml(definition)}">${escapeHtml(word)}</span>`;
    }


    const ecoSourceStatements = [
      ["Data centers use about 4.4% of U.S. electricity.", "reported statistic"],
      ["One AI prompt uses about 2 mL of water.", "estimate"],
      ["AI is using too much water everywhere.", "broad claim"],
      ["Future AI energy use could grow quickly.", "projection"]
    ];

    const ecoSourceChecks = [
      ["Original source", "Find the report, article, or research—not just a summary."],
      ["What counted?", "Cooling water, electricity, training, running prompts, hardware, or all of these?"],
      ["Where and when?", "Which place, year, model, and energy grid?"],
      ["Same units?", "Gallons, liters, milliliters, electricity, or water for electricity?"],
      ["Who benefits?", "Company, news outlet, researcher, town, or advocacy group?"],
      ["What is missing?", "What assumptions or limits are not being said?"]
    ];

    const ecoTownQuestions = [
      ["Water source", "How much water would be used, and would it come from wells, city water, rivers, or lakes?"],
      ["Electricity source", "How much power would be needed, and where would it come from?"],
      ["Cooling system", "Would the facility use air cooling, water cooling, recycled water, or a mix?"],
      ["Drought plan", "Who gets priority if water is limited?"],
      ["Local benefits", "How many permanent local jobs and how much local tax revenue?"],
      ["Local costs", "Noise, traffic, heat, land use, carbon emissions, or water stress?"],
      ["Expansion rules", "Could the facility expand later without another community decision?"],
      ["Public control", "Who decides: residents, town council, state government, or the company?"]
    ];

    const ecoMyths = [
      {
        text: "Using an AI chatbot usually uses more water than taking a shower.",
        answer: false,
        feedback: "False. A shower is usually measured in gallons. A text prompt estimate may be measured in milliliters, but the exact number depends on model, task, location, and electricity."
      },
      {
        text: "Most of Earth's water is fresh water people can drink.",
        answer: false,
        feedback: "False. Most of Earth's water is salt water, and only a small share is available fresh water for human use."
      },
      {
        text: "A single number for 'water per AI prompt' can hide important assumptions.",
        answer: true,
        feedback: "True. You need to ask what was counted: data-center cooling, electricity generation, training, hardware, location, and task type."
      },
      {
        text: "Generating extra images or videos just in case is usually a lower-impact habit than using a focused text prompt.",
        answer: false,
        feedback: "False. Focused text prompts are usually the lighter habit. Image and video generation should have a clear learning purpose."
      },
      {
        text: "AI Overviews or summaries are not the same thing as checking the original source.",
        answer: true,
        feedback: "True. Open the real source and compare the details before trusting a number."
      }
    ];

    const ecoWorksCited = [
      {
        title: "Google: Measuring the Environmental Impact of Delivering AI at Google Scale",
        note: "Used for Gemini text-query energy and water estimates.",
        citation: "Google. “Measuring the Environmental Impact of Delivering AI at Google Scale.”",
        url: "https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf",
        action: "Read the research"
      },
      {
        title: "National Real Estate Advisors: Data Centers Explained, Part 1",
        note: "Used for the four common types of data centers and their power ranges.",
        citation: "National Real Estate Advisors. “Data Centers Explained: Part 1 – A Quick Guide to the Four Main Types of Data Centers.” July 28, 2025.",
        url: "https://natadvisors.com/news-insights/data-centers-explained-part-1-a-quick-guide-to-the-four-main-types-of-data-centers/",
        action: "Read the article"
      },
      {
        title: "Data Center Map: Data Centers by State",
        note: "Used for Data Centers by State reference/map.",
        citation: "Data Center Map. North America / United States data center market listings.",
        url: "https://www.datacentermap.com/usa/",
        action: "View the data"
      },
      {
        title: "TechTimes: Google AI electricity and supply-chain emissions",
        note: "Used for infrastructure context about electricity growth and supply-chain impacts.",
        citation: "Jones, Eloise. “Google AI Electricity Up 37%: Renewable Certificates Cannot Cover the Supply Chain Carbon.” TechTimes, July 4, 2026.",
        url: "https://www.techtimes.com/articles/319712/20260704/google-ai-electricity-37-renewable-certificates-cannot-cover-supply-chain-carbon.htm",
        action: "Read the article"
      }
    ];

    const ecoDataCentersByState = [
      { state: "Texas", count: 480 },
      { state: "North Dakota", count: 23 },
      { state: "Virginia", count: 637 },
      { state: "New York", count: 133 },
      { state: "Oregon", count: 125 },
      { state: "Illinois", count: 239 },
      { state: "Georgia", count: 227 },
      { state: "Washington", count: 107 },
      { state: "Kentucky", count: 48 },
      { state: "California", count: 291 },
      { state: "South Carolina", count: 46 },
      { state: "Missouri", count: 92 },
      { state: "Minnesota", count: 78 },
      { state: "Michigan", count: 77 },
      { state: "Arizona", count: 156 },
      { state: "Ohio", count: 226 },
      { state: "Massachusetts", count: 42 },
      { state: "Pennsylvania", count: 133 },
      { state: "Mississippi", count: 24 },
      { state: "New Jersey", count: 67 },
      { state: "Florida", count: 110 },
      { state: "Oklahoma", count: 47 },
      { state: "Nebraska", count: 36 },
      { state: "Arkansas", count: 12 },
      { state: "Kansas", count: 36 },
      { state: "Maryland", count: 53 },
      { state: "Connecticut", count: 52 },
      { state: "Tennessee", count: 63 },
      { state: "Louisiana", count: 23 },
      { state: "Colorado", count: 57 },
      { state: "Wyoming", count: 31 },
      { state: "District of Columbia", count: 6 },
      { state: "North Carolina", count: 93 },
      { state: "Maine", count: 11 },
      { state: "Iowa", count: 105 },
      { state: "Indiana", count: 123 },
      { state: "Wisconsin", count: 53 },
      { state: "Nevada", count: 74 },
      { state: "Idaho", count: 18 },
      { state: "Utah", count: 48 },
      { state: "Alabama", count: 25 },
      { state: "New Mexico", count: 22 },
      { state: "Montana", count: 30 },
      { state: "West Virginia", count: 10 },
      { state: "Hawaii", count: 9 },
      { state: "South Dakota", count: 10 },
      { state: "Alaska", count: 8 },
      { state: "Delaware", count: 18 },
      { state: "New Hampshire", count: 10 },
      { state: "Rhode Island", count: 7 },
      { state: "Vermont", count: 3 }
    ];

    let ecoDataCenterSort = { key: "count", direction: "desc" };

    let ecoRobustState = {
      cloze: {},
      contextCloze: {},
      sourceChecks: new Set(),
      townQuestions: new Set(),
      myths: {},
      calculatorRun: false,
      dataCenterTypesViewed: false,
      dataCenterTypesReviewed: [false, false, false, false]
    };

    function ecoSvgDrop() {
      return `<svg class="eco-droplet-svg" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 8 C40 8 20 35 20 50 C20 62 29 72 40 72 C51 72 60 62 60 50 C60 35 40 8 40 8 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="4"></path>
        <path d="M32 44 C28 51 31 59 39 62" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.9"></path>
      </svg>`;
    }

    function renderEcoDataCenterAnimation() {
      return `
        <div class="eco-data-center-animation">
          <div class="eco-animation-grid">
            <div class="eco-animation-card server-heat-card">
              <div class="eco-server-heat-image-wrap">
                <img src="https://i.ibb.co.com/C3MJzD8P/download.png" alt="Diagram of a data center with Computer Room Air Conditioner, cold aisles, and hot aisles." class="eco-server-heat-image">
              </div>
            </div>

            <div class="eco-explain-stack">
              <div class="eco-explain-mini"><strong>Servers work hard</strong><p class="small-note">Running apps, websites, searches, and AI models creates heat, much like a laptop getting warm.</p></div>
              <div class="eco-explain-mini"><strong>Cooling systems remove heat</strong><p class="small-note">Water is not poured on computers. It moves through cooling equipment, pipes, towers, or closed loops to carry heat away.</p></div>
              <div class="eco-explain-mini"><strong>Local impact varies</strong><p class="small-note">The impact depends on the cooling system, electricity source, climate, and local water supply.</p></div>
            </div>
          </div>

                    <div class="eco-data-center-types-card">
            <h4>Four common types of data centers</h4>
            <p class="small-note">Data centers are not all built the same way. Their size and job can change how much electricity, ${ecoTermTip("cooling")}, and space they need. The higher the ${ecoTermTip("power range")}, the more equipment and cooling a ${ecoTermTip("facility")} needs.</p>

            <div class="eco-dc-types-meaning small-note">
              <strong>Power note:</strong> <strong>MW</strong> means ${ecoTermTip("megawatts")}, a unit of electrical power. A bigger MW number usually means a larger facility with more equipment. <strong>kW</strong> means ${ecoTermTip("kilowatts")}, and <strong>1 MW = 1,000 kW</strong>.
            </div>

            <div class="eco-dc-type-grid">
              <div class="eco-dc-type-card hyperscale available" data-dc-type-index="0" onclick="reviewEcoDataCenterType(0)" role="button" tabindex="0" aria-label="Review Hyperscale Data Center"><span class="eco-dc-type-action" aria-hidden="true">Click</span><span class="eco-dc-type-check" aria-hidden="true">✓</span>
                <div class="eco-dc-type-figure" aria-hidden="true">
                  <svg viewBox="0 0 200 150">
                    <g fill="none" stroke="#334155" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 136h180"></path>
                      <rect x="18" y="86" width="70" height="50" fill="#eef2f7"></rect>
                      <rect x="27" y="104" width="52" height="12" fill="#94a3b8"></rect>
                      <rect x="55" y="118" width="12" height="18" fill="#94a3b8"></rect>
                      <path d="M135 46l20 26m-20-26l-20 26m20-26v90m-20-26h40m-34-16h28m-22-14h16"></path>
                      <path d="M117 136l18-18 18 18"></path>
                      <path d="M117 94l18-10 18 10"></path>
                    </g>
                  </svg>
                </div>
                <h5>Hyperscale<br>Data Center</h5>
                <div class="eco-dc-type-mw">50+ MW</div>
                <span class="eco-dc-type-scale">Large power use</span>
                <p class="small-note">This is the biggest kind. It powers huge cloud platforms and large AI systems.</p>
              </div>

              <div class="eco-dc-type-card colocation locked" data-dc-type-index="1" onclick="reviewEcoDataCenterType(1)" role="button" tabindex="0" aria-label="Review Colocation Data Center"><span class="eco-dc-type-action" aria-hidden="true">Click</span><span class="eco-dc-type-check" aria-hidden="true">✓</span>
                <div class="eco-dc-type-figure" aria-hidden="true">
                  <svg viewBox="0 0 200 150">
                    <g fill="none" stroke="#334155" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 136h176"></path>
                      <rect x="32" y="64" width="136" height="72" fill="#eef2f7"></rect>
                      <path d="M32 80h136"></path>
                      <rect x="48" y="92" width="28" height="22" fill="#cbd5e1"></rect>
                      <rect x="86" y="92" width="28" height="22" fill="#cbd5e1"></rect>
                      <rect x="124" y="92" width="28" height="22" fill="#cbd5e1"></rect>
                      <rect x="54" y="114" width="16" height="22" fill="#94a3b8"></rect>
                      <rect x="92" y="114" width="16" height="22" fill="#94a3b8"></rect>
                      <rect x="130" y="114" width="16" height="22" fill="#94a3b8"></rect>
                    </g>
                  </svg>
                </div>
                <h5>Colocation<br>Data Center</h5>
                <div class="eco-dc-type-mw">5–20 MW</div>
                <span class="eco-dc-type-scale">Shared power</span>
                <p class="small-note">Different companies rent space in the same facility instead of building their own.</p>
              </div>

              <div class="eco-dc-type-card carrier locked" data-dc-type-index="2" onclick="reviewEcoDataCenterType(2)" role="button" tabindex="0" aria-label="Review Carrier Hotel"><span class="eco-dc-type-action" aria-hidden="true">Click</span><span class="eco-dc-type-check" aria-hidden="true">✓</span>
                <div class="eco-dc-type-figure" aria-hidden="true">
                  <svg viewBox="0 0 200 150">
                    <g fill="none" stroke="#334155" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 136h180"></path>
                      <rect x="44" y="34" width="42" height="102" fill="#eef2f7"></rect>
                      <rect x="82" y="54" width="32" height="82" fill="#dbe3ea"></rect>
                      <rect x="108" y="42" width="50" height="94" fill="#eef2f7"></rect>
                      <rect x="60" y="50" width="8" height="14" fill="#cbd5e1"></rect>
                      <rect x="74" y="50" width="8" height="14" fill="#cbd5e1"></rect>
                      <rect x="60" y="72" width="8" height="14" fill="#cbd5e1"></rect>
                      <rect x="74" y="72" width="8" height="14" fill="#cbd5e1"></rect>
                      <rect x="120" y="58" width="10" height="16" fill="#cbd5e1"></rect>
                      <rect x="136" y="58" width="10" height="16" fill="#cbd5e1"></rect>
                      <rect x="120" y="82" width="10" height="16" fill="#cbd5e1"></rect>
                      <rect x="136" y="82" width="10" height="16" fill="#cbd5e1"></rect>
                      <rect x="116" y="108" width="16" height="28" fill="#94a3b8"></rect>
                    </g>
                  </svg>
                </div>
                <h5>Carrier Hotel</h5>
                <div class="eco-dc-type-mw">1–40 MW</div>
                <span class="eco-dc-type-scale">Connection-focused</span>
                <p class="small-note">This kind is built to connect many internet and telecom networks in one place.</p>
              </div>

              <div class="eco-dc-type-card edge locked" data-dc-type-index="3" onclick="reviewEcoDataCenterType(3)" role="button" tabindex="0" aria-label="Review Edge Data Center"><span class="eco-dc-type-action" aria-hidden="true">Click</span><span class="eco-dc-type-check" aria-hidden="true">✓</span>
                <div class="eco-dc-type-figure" aria-hidden="true">
                  <svg viewBox="0 0 200 150">
                    <g fill="none" stroke="#334155" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 136h176"></path>
                      <rect x="52" y="88" width="62" height="48" fill="#eef2f7"></rect>
                      <path d="M68 88v48"></path>
                      <path d="M76 98h28M76 108h28M76 118h28" stroke="#cbd5e1"></path>
                      <rect x="60" y="104" width="8" height="18" fill="#94a3b8"></rect>
                      <path d="M140 72v64"></path>
                      <circle cx="140" cy="84" r="6" fill="#cbd5e1"></circle>
                      <circle cx="140" cy="102" r="6" fill="#cbd5e1"></circle>
                      <circle cx="140" cy="120" r="6" fill="#cbd5e1"></circle>
                    </g>
                  </svg>
                </div>
                <h5>Edge<br>Data Center</h5>
                <div class="eco-dc-type-mw">100 kW–2 MW</div>
                <span class="eco-dc-type-scale">Smaller, closer by</span>
                <p class="small-note">A smaller site placed near users or devices so information can move faster.</p>
              </div>
            </div>
          </div>
            <div class="eco-dc-type-mini-status" aria-live="polite">
              <span id="ecoDcTypesStatus" class="small-note">0/4 complete</span>
            </div>
        </div>
      `;
    }

    function renderEcoDataCenterMap() {
      return `
        <figure class="eco-map-figure">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1262 1072" role="img" aria-labelledby="title desc">
<title id="title">Data Centers by State</title>
<desc id="desc">Tile map showing listed data centers by state. Darker tiles show more listed data centers.</desc>
<style>
  <![CDATA[
.title { font-family: 'Lexend', Arial, sans-serif; font-size: 40px; font-weight: 800; fill: #111827; letter-spacing: 0.5px; }
  .subtitle { font-family: 'Lexend', Arial, sans-serif; font-size: 18px; font-weight: 500; fill: #374151; }
  .state { font-family: 'Lexend', Arial, sans-serif; font-size: 23px; font-weight: 800; text-anchor: middle; }
  .count { font-family: 'Lexend', Arial, sans-serif; font-size: 17px; font-weight: 500; text-anchor: middle; }
  .legend-title { font-family: 'Lexend', Arial, sans-serif; font-size: 17px; font-weight: 700; fill: #111827; }
  .legend-label { font-family: 'Lexend', Arial, sans-serif; font-size: 16px; font-weight: 500; fill: #111827; }
  .footer { font-family: 'Lexend', Arial, sans-serif; font-size: 15px; font-weight: 500; fill: #374151; }
  ]]>
</style>
<rect x="0" y="0" width="1262" height="1072" rx="0" fill="#ffffff"/>
<text class="title" x="48" y="58">Data Centers in the United States</text>
<text class="subtitle" x="48" y="92">Map-style distribution visual based on Data Center Map state listings. Darker tiles indicate more listed data centers.</text>

<g>
  <rect x="48" y="148" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="92.0" y="182" fill="#111827">WA</text>
  <text class="count" x="92.0" y="209" fill="#111827">107</text>
</g>
<g>
  <rect x="244" y="148" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="288.0" y="182" fill="#111827">MT</text>
  <text class="count" x="288.0" y="209" fill="#111827">30</text>
</g>
<g>
  <rect x="342" y="148" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="386.0" y="182" fill="#1e3a8a">ND</text>
  <text class="count" x="386.0" y="209" fill="#1e3a8a">23</text>
</g>
<g>
  <rect x="440" y="148" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="484.0" y="182" fill="#111827">MN</text>
  <text class="count" x="484.0" y="209" fill="#111827">78</text>
</g>
<g>
  <rect x="538" y="148" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="582.0" y="182" fill="#111827">WI</text>
  <text class="count" x="582.0" y="209" fill="#111827">53</text>
</g>
<g>
  <rect x="636" y="148" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="680.0" y="182" fill="#111827">MI</text>
  <text class="count" x="680.0" y="209" fill="#111827">77</text>
</g>
<g>
  <rect x="930" y="148" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="974.0" y="182" fill="#1e3a8a">VT</text>
  <text class="count" x="974.0" y="209" fill="#1e3a8a">3</text>
</g>
<g>
  <rect x="1028" y="148" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1072.0" y="182" fill="#1e3a8a">NH</text>
  <text class="count" x="1072.0" y="209" fill="#1e3a8a">10</text>
</g>
<g>
  <rect x="1126" y="148" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1170.0" y="182" fill="#1e3a8a">ME</text>
  <text class="count" x="1170.0" y="209" fill="#1e3a8a">11</text>
</g>
<g>
  <rect x="48" y="246" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="92.0" y="280" fill="#111827">OR</text>
  <text class="count" x="92.0" y="307" fill="#111827">125</text>
</g>
<g>
  <rect x="146" y="246" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="190.0" y="280" fill="#1e3a8a">ID</text>
  <text class="count" x="190.0" y="307" fill="#1e3a8a">18</text>
</g>
<g>
  <rect x="244" y="246" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="288.0" y="280" fill="#111827">WY</text>
  <text class="count" x="288.0" y="307" fill="#111827">31</text>
</g>
<g>
  <rect x="342" y="246" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="386.0" y="280" fill="#1e3a8a">SD</text>
  <text class="count" x="386.0" y="307" fill="#1e3a8a">10</text>
</g>
<g>
  <rect x="440" y="246" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="484.0" y="280" fill="#111827">IA</text>
  <text class="count" x="484.0" y="307" fill="#111827">105</text>
</g>
<g>
  <rect x="538" y="246" width="88" height="86" rx="12" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="582.0" y="280" fill="#ffffff">IL</text>
  <text class="count" x="582.0" y="307" fill="#ffffff">239</text>
</g>
<g>
  <rect x="636" y="246" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="680.0" y="280" fill="#111827">IN</text>
  <text class="count" x="680.0" y="307" fill="#111827">123</text>
</g>
<g>
  <rect x="734" y="246" width="88" height="86" rx="12" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="778.0" y="280" fill="#ffffff">OH</text>
  <text class="count" x="778.0" y="307" fill="#ffffff">226</text>
</g>
<g>
  <rect x="832" y="246" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="876.0" y="280" fill="#111827">PA</text>
  <text class="count" x="876.0" y="307" fill="#111827">133</text>
</g>
<g>
  <rect x="930" y="246" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="974.0" y="280" fill="#111827">NY</text>
  <text class="count" x="974.0" y="307" fill="#111827">133</text>
</g>
<g>
  <rect x="1028" y="246" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1072.0" y="280" fill="#111827">MA</text>
  <text class="count" x="1072.0" y="307" fill="#111827">42</text>
</g>
<g>
  <rect x="1126" y="246" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1170.0" y="280" fill="#1e3a8a">RI</text>
  <text class="count" x="1170.0" y="307" fill="#1e3a8a">7</text>
</g>
<g>
  <rect x="48" y="344" width="88" height="86" rx="12" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="92.0" y="378" fill="#ffffff">CA</text>
  <text class="count" x="92.0" y="405" fill="#ffffff">291</text>
</g>
<g>
  <rect x="146" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="190.0" y="378" fill="#111827">NV</text>
  <text class="count" x="190.0" y="405" fill="#111827">74</text>
</g>
<g>
  <rect x="244" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="288.0" y="378" fill="#111827">UT</text>
  <text class="count" x="288.0" y="405" fill="#111827">48</text>
</g>
<g>
  <rect x="342" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="386.0" y="378" fill="#111827">CO</text>
  <text class="count" x="386.0" y="405" fill="#111827">57</text>
</g>
<g>
  <rect x="440" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="484.0" y="378" fill="#111827">NE</text>
  <text class="count" x="484.0" y="405" fill="#111827">36</text>
</g>
<g>
  <rect x="538" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="582.0" y="378" fill="#111827">MO</text>
  <text class="count" x="582.0" y="405" fill="#111827">92</text>
</g>
<g>
  <rect x="636" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="680.0" y="378" fill="#111827">KY</text>
  <text class="count" x="680.0" y="405" fill="#111827">48</text>
</g>
<g>
  <rect x="734" y="344" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="778.0" y="378" fill="#1e3a8a">WV</text>
  <text class="count" x="778.0" y="405" fill="#1e3a8a">10</text>
</g>
<g>
  <rect x="832" y="344" width="88" height="86" rx="12" fill="#1e3a8a" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="876.0" y="378" fill="#ffffff">VA</text>
  <text class="count" x="876.0" y="405" fill="#ffffff">637</text>
</g>
<g>
  <rect x="930" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="974.0" y="378" fill="#111827">NJ</text>
  <text class="count" x="974.0" y="405" fill="#111827">67</text>
</g>
<g>
  <rect x="1028" y="344" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1072.0" y="378" fill="#111827">CT</text>
  <text class="count" x="1072.0" y="405" fill="#111827">52</text>
</g>
<g>
  <rect x="146" y="442" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="190.0" y="476" fill="#111827">AZ</text>
  <text class="count" x="190.0" y="503" fill="#111827">156</text>
</g>
<g>
  <rect x="244" y="442" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="288.0" y="476" fill="#1e3a8a">NM</text>
  <text class="count" x="288.0" y="503" fill="#1e3a8a">22</text>
</g>
<g>
  <rect x="440" y="442" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="484.0" y="476" fill="#111827">KS</text>
  <text class="count" x="484.0" y="503" fill="#111827">36</text>
</g>
<g>
  <rect x="538" y="442" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="582.0" y="476" fill="#1e3a8a">AR</text>
  <text class="count" x="582.0" y="503" fill="#1e3a8a">12</text>
</g>
<g>
  <rect x="636" y="442" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="680.0" y="476" fill="#111827">TN</text>
  <text class="count" x="680.0" y="503" fill="#111827">63</text>
</g>
<g>
  <rect x="832" y="442" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="876.0" y="476" fill="#111827">NC</text>
  <text class="count" x="876.0" y="503" fill="#111827">93</text>
</g>
<g>
  <rect x="930" y="442" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="974.0" y="476" fill="#111827">MD</text>
  <text class="count" x="974.0" y="503" fill="#111827">53</text>
</g>
<g>
  <rect x="1028" y="442" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1072.0" y="476" fill="#1e3a8a">DE</text>
  <text class="count" x="1072.0" y="503" fill="#1e3a8a">18</text>
</g>
<g>
  <rect x="1126" y="442" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="1170.0" y="476" fill="#1e3a8a">DC</text>
  <text class="count" x="1170.0" y="503" fill="#1e3a8a">6</text>
</g>
<g>
  <rect x="440" y="540" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="484.0" y="574" fill="#111827">OK</text>
  <text class="count" x="484.0" y="601" fill="#111827">47</text>
</g>
<g>
  <rect x="538" y="540" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="582.0" y="574" fill="#1e3a8a">LA</text>
  <text class="count" x="582.0" y="601" fill="#1e3a8a">23</text>
</g>
<g>
  <rect x="636" y="540" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="680.0" y="574" fill="#1e3a8a">MS</text>
  <text class="count" x="680.0" y="601" fill="#1e3a8a">24</text>
</g>
<g>
  <rect x="734" y="540" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="778.0" y="574" fill="#111827">AL</text>
  <text class="count" x="778.0" y="601" fill="#111827">25</text>
</g>
<g>
  <rect x="832" y="540" width="88" height="86" rx="12" fill="#bfdbfe" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="876.0" y="574" fill="#111827">SC</text>
  <text class="count" x="876.0" y="601" fill="#111827">46</text>
</g>
<g>
  <rect x="440" y="638" width="88" height="86" rx="12" fill="#1e3a8a" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="484.0" y="672" fill="#ffffff">TX</text>
  <text class="count" x="484.0" y="699" fill="#ffffff">480</text>
</g>
<g>
  <rect x="734" y="638" width="88" height="86" rx="12" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
  <text class="state" x="778.0" y="672" fill="#ffffff">GA</text>
  <text class="count" x="778.0" y="699" fill="#ffffff">227</text>
</g>
<g>
  <rect x="832" y="736" width="88" height="86" rx="12" fill="#60a5fa" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="876.0" y="770" fill="#111827">FL</text>
  <text class="count" x="876.0" y="797" fill="#111827">110</text>
</g>
<g>
  <rect x="48" y="834" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="92.0" y="868" fill="#1e3a8a">AK</text>
  <text class="count" x="92.0" y="895" fill="#1e3a8a">8</text>
</g>
<g>
  <rect x="146" y="834" width="88" height="86" rx="12" fill="#eff6ff" stroke="#1f2937" stroke-width="1.5"/>
  <text class="state" x="190.0" y="868" fill="#1e3a8a">HI</text>
  <text class="count" x="190.0" y="895" fill="#1e3a8a">9</text>
</g>
<text class="legend-title" x="48" y="944">Listed data centers</text>
<rect x="48" y="964" width="48" height="28" rx="6" fill="#eff6ff" stroke="#1f2937" stroke-width="1"/>
<text class="legend-label" x="108" y="984">0–24</text>
<rect x="193" y="964" width="48" height="28" rx="6" fill="#bfdbfe" stroke="#1f2937" stroke-width="1"/>
<text class="legend-label" x="253" y="984">25–99</text>
<rect x="338" y="964" width="48" height="28" rx="6" fill="#60a5fa" stroke="#1f2937" stroke-width="1"/>
<text class="legend-label" x="398" y="984">100–199</text>
<rect x="483" y="964" width="48" height="28" rx="6" fill="#2563eb" stroke="#1f2937" stroke-width="1"/>
<text class="legend-label" x="543" y="984">200–399</text>
<rect x="628" y="964" width="48" height="28" rx="6" fill="#1e3a8a" stroke="#1f2937" stroke-width="1"/>
<text class="legend-label" x="688" y="984">400+</text>
<text class="footer" x="48" y="1014">Note: This is a classroom visual, not a geographic boundary map.</text>
</svg>
          <figcaption class="small-note">Data Center Map is used as the reference for the state distribution visual.</figcaption>
        </figure>
      `;
    }

    function updateEcoDataCenterTypeCards() {
      const reviewed = ecoRobustState.dataCenterTypesReviewed || [false, false, false, false];
      const nextIndex = reviewed.findIndex(value => !value);
      const unlockedIndex = nextIndex === -1 ? reviewed.length : nextIndex;
      document.querySelectorAll(".eco-dc-type-card[data-dc-type-index]").forEach(card => {
        const index = Number(card.dataset.dcTypeIndex || 0);
        const isReviewed = Boolean(reviewed[index]);
        const isAvailable = !isReviewed && index === unlockedIndex;
        const isLocked = !isReviewed && index !== unlockedIndex;
        card.classList.toggle("reviewed", isReviewed);
        card.classList.toggle("available", isAvailable);
        card.classList.toggle("locked", isLocked);
        card.setAttribute("aria-disabled", isLocked ? "true" : "false");
      });
      const status = document.getElementById("ecoDcTypesStatus");
      if (status) {
        const count = reviewed.filter(Boolean).length;
        if (count >= reviewed.length) status.textContent = "4/4 complete";
        else status.textContent = `${count}/${reviewed.length} complete`;
      }
    }

    function reviewEcoDataCenterType(index) {
      const reviewed = ecoRobustState.dataCenterTypesReviewed || [false, false, false, false];
      const nextIndex = reviewed.findIndex(value => !value);
      const unlockedIndex = nextIndex === -1 ? reviewed.length : nextIndex;
      if (index > unlockedIndex) return;
      reviewed[index] = true;
      ecoRobustState.dataCenterTypesReviewed = reviewed;
      ecoRobustState.dataCenterTypesViewed = reviewed.every(Boolean);
      updateEcoDataCenterTypeCards();
      updateEcoRobustProgress();
    }

    function ecoDataCenterKeyboardHandler(event) {
      const card = event.target.closest?.(".eco-dc-type-card[data-dc-type-index]");
      if (!card) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        reviewEcoDataCenterType(Number(card.dataset.dcTypeIndex || 0));
      }
    }
    document.addEventListener("keydown", ecoDataCenterKeyboardHandler);

    function sortEcoDataCenters(key) {
      if (ecoDataCenterSort.key === key) {
        ecoDataCenterSort.direction = ecoDataCenterSort.direction === "asc" ? "desc" : "asc";
      } else {
        ecoDataCenterSort = { key, direction: key === "count" ? "desc" : "asc" };
      }
      renderEcoDataCentersTable();
    }

    function renderEcoDataCentersTable() {
      const mount = document.getElementById("ecoDataCenterTable");
      if (!mount) return;

      const sorted = [...ecoDataCentersByState].sort((a, b) => {
        const direction = ecoDataCenterSort.direction === "asc" ? 1 : -1;
        if (ecoDataCenterSort.key === "state") {
          return a.state.localeCompare(b.state) * direction;
        }
        return (a.count - b.count) * direction;
      });

      const max = Math.max(...ecoDataCentersByState.map(item => item.count));
      mount.innerHTML = `
        <table class="eco-data-center-table">
          <thead>
            <tr>
              <th><button type="button" onclick="sortEcoDataCenters('state')">State ${ecoDataCenterSort.key === "state" ? (ecoDataCenterSort.direction === "asc" ? "▲" : "▼") : ""}</button></th>
              <th><button type="button" onclick="sortEcoDataCenters('count')">Data Centers ${ecoDataCenterSort.key === "count" ? (ecoDataCenterSort.direction === "asc" ? "▲" : "▼") : ""}</button></th>
            </tr>
          </thead>
          <tbody>
            ${sorted.map(item => `
              <tr>
                <td><strong>${escapeHtml(item.state)}</strong></td>
                <td>
                  <strong>${item.count.toLocaleString()}</strong>
                  <div class="eco-data-bar"><span style="width:${Math.max(2, (item.count / max) * 100).toFixed(1)}%"></span></div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }

    function renderEcoAwarenessTool(isTeacher = false) {
      const area = document.getElementById(isTeacher ? "teacherActivityArea" : "activityArea");
      const quizArea = document.getElementById(isTeacher ? "teacherQuizArea" : "quizArea");
      if (!area) return;
      if (quizArea) quizArea.classList.add("hidden");

      ecoRobustState = {
        cloze: {},
        contextCloze: {},
        sourceChecks: new Set(),
        townQuestions: new Set(),
        myths: {},
        calculatorRun: false,
        dataCenterTypesViewed: false,
        dataCenterTypesReviewed: [false, false, false, false]
      };

      const dataCenterTypes = [
        {
          name: "Hyperscale Data Center",
          power: "50+ MW",
          description: "A very large facility built for cloud platforms, major apps, or AI workloads."
        },
        {
          name: "Colocation Data Center",
          power: "5–20 MW",
          description: "A shared facility where different organizations rent space for their own servers and equipment."
        },
        {
          name: "Carrier Hotel",
          power: "1–40 MW",
          description: "A network-heavy facility where internet and telecom providers connect their systems."
        },
        {
          name: "Edge Data Center",
          power: "100 kW–2 MW",
          description: "A smaller facility placed closer to users or devices to reduce delay."
        }
      ];

      area.classList.remove("hidden");
      area.innerHTML = `
        <div class="eco-learning-lab">
          <div class="eco-hero-card">
            <div>${ecoSvgDrop()}</div>
            <div>
              <h3>Eco-Awareness Badge: AI, Water, and Data Centers</h3>
              <p>AI can feel invisible, but it depends on physical infrastructure: data centers, chips, electricity, cooling systems, water, hardware, networks, and supply chains.</p>
            </div>
          </div>

          <div class="eco-activity-section">
            <h3>The Big Picture</h3>
            <p class="small-note">Complete the paragraph with the word bank. Use each word once to review the main ideas.</p>
            <div class="eco-word-bank">${ecoClozeOptions.map(word => ecoWordBankChip(word)).join("")}</div>
            <div class="eco-cloze-card">
              AI feels invisible, but it depends on ${ecoClozeSelect(0)} full of servers. A ${ecoClozeSelect(1)} is a request you send to an AI system, such as a question, prompt, or task. Those systems use ${ecoClozeSelect(2)}, and some facilities use water for ${ecoClozeSelect(3)}. Water-per-prompt numbers are often ${ecoClozeSelect(4)} because companies do not publish the same details. ${ecoClozeSelect(5)} matters because local water supply, climate, and energy sources are different from place to place.
            </div>
            <div id="ecoClozeStatus" class="small-note">0 of 6 blanks correct.</div>
          </div>

          <div class="eco-activity-section">
            <h3>AI Water Usage Calculator</h3>
            <div class="eco-note"><strong>Use carefully:</strong> This is a classroom comparison model. Text-query estimates are shown for comparison, not as exact measurements for every model, company, data center, or task.</div>

            <div class="eco-ai-calc-shell">
              <div class="eco-quick-input-grid">
                <div class="eco-ai-use-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('chat')}</span><span>Chatbot questions</span></h4>
                  <label for="ecoPromptCount"><strong>Number of questions</strong></label>
                  <input id="ecoPromptCount" type="number" min="0" max="9999" maxlength="4" inputmode="numeric" pattern="[0-9]*" value="1" oninput="limitEcoNumberInput(this); updateEcoCalculator(true)">
                  <span class="eco-input-limit-note">Maximum: 9,999</span>
                  <div class="eco-ai-water-card">Water used today<strong id="ecoTextWater">0 mL</strong><span id="ecoTextJuice" class="small-note eco-ai-estimate-line"></span></div>
                </div>
                <div class="eco-ai-use-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('image')}</span><span>Images</span></h4>
                  <label for="ecoImageCount"><strong>Number of images</strong></label>
                  <input id="ecoImageCount" type="number" min="0" max="9999" maxlength="4" inputmode="numeric" pattern="[0-9]*" value="0" oninput="limitEcoNumberInput(this); updateEcoCalculator(true)">
                  <span class="eco-input-limit-note">Maximum: 9,999</span>
                  <div class="eco-ai-water-card">Comparison estimate<strong id="ecoImageWater">0 mL</strong><span id="ecoImageJuice" class="small-note eco-ai-estimate-line"></span></div>
                </div>
                <div class="eco-ai-use-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('video')}</span><span>Videos</span></h4>
                  <label for="ecoVideoCount"><strong>Number of videos</strong></label>
                  <input id="ecoVideoCount" type="number" min="0" max="9999" maxlength="4" inputmode="numeric" pattern="[0-9]*" value="0" oninput="limitEcoNumberInput(this); updateEcoCalculator(true)">
                  <span class="eco-input-limit-note">Maximum: 9,999</span>
                  <div class="eco-ai-water-card">Comparison estimate<strong id="ecoVideoWater">0 mL</strong><span id="ecoVideoJuice" class="small-note eco-ai-estimate-line"></span></div>
                </div>
              </div>

              <div class="eco-visible-settings-grid">
                <div class="eco-calc-panel speed-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('speed')}</span><span>Model + Image Generation Speed</span></h4>
                  <div class="eco-model-speed-grid">
                    <div class="eco-model-speed-subcard">
                      <strong>Text model estimate</strong>
                      <div class="eco-calc-radio-grid two">
                        <label class="eco-calc-radio-card"><input type="radio" name="ecoModel" value="chatgpt" checked onchange="updateEcoCalculator(true)">ChatGPT<br><span class="small-note">0.38 mL/query</span></label>
                        <label class="eco-calc-radio-card"><input type="radio" name="ecoModel" value="gemini" onchange="updateEcoCalculator(true)">Gemini<br><span class="small-note">0.26 mL/query</span></label>
                      </div>
                    </div>
                    <div class="eco-model-speed-subcard">
                      <strong>Image speed</strong>
                      <div class="eco-calc-radio-grid two">
                        <label class="eco-calc-radio-card"><input type="radio" name="ecoSpeed" value="1" checked onchange="updateEcoCalculator(true)">Normal speed<br><span class="small-note">1x</span></label>
                        <label class="eco-calc-radio-card"><input type="radio" name="ecoSpeed" value="4" onchange="updateEcoCalculator(true)">Fast speed<br><span class="small-note">4x</span></label>
                      </div>
                    </div>
                  </div>
                  <div id="ecoSpeedExplain" class="eco-calc-explain small-note">ChatGPT text estimate selected. Normal image speed uses the baseline comparison model.</div>
                </div>

                <div class="eco-calc-panel scale-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('scale')}</span><span>Scale of Usage</span></h4>
                  <div class="eco-calc-radio-grid four">
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoScale" value="1" checked onchange="updateEcoCalculator(true)">Just you<br><span class="small-note">1 person</span></label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoScale" value="1000" onchange="updateEcoCalculator(true)">Small town<br><span class="small-note">1,000 people</span></label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoScale" value="1000000" onchange="updateEcoCalculator(true)">Large city<br><span class="small-note">1 million</span></label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoScale" value="700000000" onchange="updateEcoCalculator(true)">Large platform<br><span class="small-note">700 million users</span></label>
                  </div>
                  <div id="ecoScaleExplain" class="eco-calc-explain small-note">Just you: looking at your individual water estimate.</div>
                </div>

                <div class="eco-calc-panel time-card">
                  <h4 class="eco-calc-heading"><span class="eco-heading-icon">${ecoHeaderIconSvg('time')}</span><span>Period of Time</span></h4>
                  <div class="eco-calc-radio-grid six">
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="1" checked onchange="updateEcoCalculator(true)">1 day</label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="7" onchange="updateEcoCalculator(true)">7 days</label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="30" onchange="updateEcoCalculator(true)">30 days</label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="90" onchange="updateEcoCalculator(true)">90 days</label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="180" onchange="updateEcoCalculator(true)">180 days</label>
                    <label class="eco-calc-radio-card"><input type="radio" name="ecoDays" value="365" onchange="updateEcoCalculator(true)">365 days</label>
                  </div>
                  <div id="ecoDaysExplain" class="eco-calc-explain small-note">1 day: showing the estimate for a single day.</div>
                </div>
              </div>

              <div class="eco-calculator-primary-actions">
                <button type="button" id="ecoRunCalculatorButton" class="eco-hidden-failsafe" onclick="updateEcoCalculator(true)">Run Calculator</button>
                <button type="button" class="eco-reset-calculator-btn" onclick="resetEcoCalculator()">Reset Calculator</button>
              </div>
              <div id="ecoCalculatorResult" class="eco-calc-result">Change a number or setting to see the total, closest liquid comparison, water-cycle breakdown, and community comparison.</div>
            </div>
          </div>

          <div class="eco-activity-section">
            <h3>How Data Centers Work</h3>
            <p class="small-note">Use this visual to connect AI tools to physical equipment, cooling, electricity, and water systems.</p>
            ${renderEcoDataCenterAnimation()}
          </div>

          <div class="eco-activity-section">
            <h3>Data Centers by State</h3>
            <p>This visual shows the distribution of data centers across the country. Why do some states have more?</p>
            ${renderEcoDataCenterMap()}
          </div>

          <div id="ecoRobustStatus" class="eco-status-panel">
            <div class="eco-progress-row">
              <strong>Eco-Badge progress</strong>
              <span id="ecoRobustStatusText">Complete the four required Eco activities.</span>
              <div class="eco-progress-track" aria-hidden="true"><div id="ecoRobustProgressFill" class="eco-progress-fill"></div></div>
              <div class="eco-progress-requirements" aria-label="Eco Badge requirements">
                <span id="ecoReqBigPicture">The Big Picture</span>
                <span id="ecoReqCalculator">Water Usage Calculator</span>
                <span id="ecoReqContext">Real-World Context</span>
                <span id="ecoReqDataCenters">Four data center types</span>
              </div>
            </div>
          </div>

          <div class="button-row">
            <button type="button" id="ecoRobustCompleteButton" onclick="completeEcoAwarenessModule(${isTeacher})">Complete Eco-Awareness Badge</button>
          </div>
          <div id="${isTeacher ? "teacherQuizFeedback" : "quizFeedback"}" class="feedback hidden"></div>

          <details class="eco-works-details">
            <summary>Works Cited</summary>
            <div class="eco-works-details-body">
              <p class="small-note">Live source links used in this Eco Badge.</p>
              <div class="eco-works-grid tight">
                ${ecoWorksCited.map(item => `<div class="eco-works-card tight"><strong>${escapeHtml(item.title)}</strong><p class="small-note">${escapeHtml(item.note)}</p><p class="small-note">${escapeHtml(item.citation)}</p><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.action)} →</a></div>`).join("")}
              </div>
            </div>
          </details>
        </div>
      `;

      updateEcoCalculator(false);
      attachEcoClozeSelfCheckListeners();
      initializeEcoContextSelfCheck();
      updateEcoRobustProgress();
    }

    function ecoClozeSelect(index) {
      return `<select id="ecoCloze${index}" class="eco-cloze-select eco-bigpicture-select" data-eco-bigpicture-index="${index}" onchange="answerEcoCloze(${index}, this.value)">
        <option value="">choose</option>
        ${ecoClozeOptions.map(word => `<option value="${escapeHtml(word)}">${escapeHtml(word)}</option>`).join("")}
      </select>`;
    }

    function setEcoSelectVisual(select, correct, hasValue) {
      if (!select) return;

      select.classList.toggle("correct", Boolean(hasValue && correct));
      select.classList.toggle("incorrect", Boolean(hasValue && !correct));

      if (!hasValue) {
        select.style.backgroundColor = "";
        select.style.borderColor = "";
        select.style.color = "";
        select.style.fontWeight = "";
        return;
      }

      if (correct) {
        select.style.backgroundColor = "#dcfce7";
        select.style.borderColor = "#15803d";
        select.style.color = "#14532d";
        select.style.fontWeight = "900";
      } else {
        select.style.backgroundColor = "#fee2e2";
        select.style.borderColor = "#dc2626";
        select.style.color = "#7f1d1d";
        select.style.fontWeight = "900";
      }
    }

    function runEcoClozeSelfCheck() {
      if (!ecoRobustState.cloze) ecoRobustState.cloze = {};
      if (!ecoRobustState.contextCloze) ecoRobustState.contextCloze = {};
      let bigPictureCorrect = 0;
      ecoClozeAnswers.forEach((answer, index) => {
        const select = document.getElementById(`ecoCloze${index}`);
        if (!select) return;
        const value = select.value || "";
        ecoRobustState.cloze[index] = value;
        const correct = value === answer;
        if (correct) bigPictureCorrect += 1;
        setEcoSelectVisual(select, correct, Boolean(value));
      });

      const bigPictureStatus = document.getElementById("ecoClozeStatus");
      if (bigPictureStatus) {
        bigPictureStatus.textContent = `${bigPictureCorrect} of ${ecoClozeAnswers.length} blanks correct.`;
        bigPictureStatus.classList.toggle("eco-cloze-complete", bigPictureCorrect === ecoClozeAnswers.length);
      }

      let contextCorrect = 0;
      ecoContextAnswers.forEach((answer, index) => {
        const select = document.getElementById(`ecoContextCloze${index}`);
        if (!select) return;
        const value = select.value || "";
        ecoRobustState.contextCloze[index] = value;
        const correct = String(value).trim().toLowerCase() === String(answer).trim().toLowerCase();
        if (correct) contextCorrect += 1;
        setEcoSelectVisual(select, correct, Boolean(value));
      });

      const contextStatus = document.getElementById("ecoContextClozeStatus");
      if (contextStatus) {
        contextStatus.textContent = `${contextCorrect} of ${ecoContextAnswers.length} blanks correct.`;
        contextStatus.classList.toggle("eco-cloze-complete", contextCorrect === ecoContextAnswers.length);
      }

      return { bigPictureCorrect, contextCorrect };
    }

    function syncEcoClozeSelectVisuals() {
      runEcoClozeSelfCheck();
    }

    function attachEcoClozeSelfCheckListeners() {
      document.querySelectorAll(".eco-bigpicture-select, .eco-context-select").forEach(select => {
        if (select.dataset.ecoSelfCheckAttached === "true") return;
        select.dataset.ecoSelfCheckAttached = "true";
        select.addEventListener("change", function() {
          runEcoClozeSelfCheck();
          updateEcoRobustProgress();
        });
      });
      runEcoClozeSelfCheck();
    }

    function answerEcoCloze(index, value) {
      if (!ecoRobustState.cloze) ecoRobustState.cloze = {};
      ecoRobustState.cloze[index] = value;
      const select = document.getElementById(`ecoCloze${index}`);
      if (select) {
        const correct = value === ecoClozeAnswers[index];
        setEcoSelectVisual(select, correct, Boolean(value));
      }
      updateEcoRobustProgress();
    }

    function ecoContextSelect(index) {
      return `<select id="ecoContextCloze${index}" class="eco-cloze-select eco-context-select" data-eco-context-index="${index}" onchange="answerEcoContextCloze(${index}, this.value)">
        <option value="">choose</option>
        ${ecoContextOptions.map(word => `<option value="${escapeHtml(word)}">${escapeHtml(word)}</option>`).join("")}
      </select>`;
    }

    function setEcoContextSelectVisual(select, correct, hasValue) {
      if (!select) return;
      select.classList.toggle("correct", Boolean(hasValue && correct));
      select.classList.toggle("incorrect", Boolean(hasValue && !correct));

      if (!hasValue) {
        select.style.backgroundColor = "";
        select.style.borderColor = "";
        select.style.color = "";
        select.style.fontWeight = "";
        return;
      }

      if (correct) {
        select.style.backgroundColor = "#dcfce7";
        select.style.borderColor = "#15803d";
        select.style.color = "#14532d";
        select.style.fontWeight = "900";
      } else {
        select.style.backgroundColor = "#fee2e2";
        select.style.borderColor = "#dc2626";
        select.style.color = "#7f1d1d";
        select.style.fontWeight = "900";
      }
    }

    function answerEcoContextCloze(index, value) {
      if (!ecoRobustState.contextCloze) ecoRobustState.contextCloze = {};
      ecoRobustState.contextCloze[index] = value;
      runEcoClozeSelfCheck();
      updateEcoRobustProgress();
    }

    function initializeEcoContextSelfCheck() {
      document.querySelectorAll(".eco-context-select").forEach(select => {
        if (select.dataset.ecoContextSelfCheckAttached === "true") return;
        select.dataset.ecoContextSelfCheckAttached = "true";
        select.addEventListener("change", () => {
          const index = Number(select.dataset.ecoContextIndex);
          if (!ecoRobustState.contextCloze) ecoRobustState.contextCloze = {};
          ecoRobustState.contextCloze[index] = select.value || "";
          runEcoClozeSelfCheck();
          updateEcoRobustProgress();
        });
      });
      runEcoClozeSelfCheck();
    }


    function selectEcoSourceStatement(index, button) {
      ecoRobustState.sourceStatement = index;
      document.querySelectorAll(".eco-source-statement-grid .eco-select-card").forEach(card => card.classList.remove("selected"));
      if (button) button.classList.add("selected");
      updateEcoRobustProgress();
    }

    function toggleEcoSourceCheck(index, button) {
      if (ecoRobustState.sourceChecks.has(index)) {
        ecoRobustState.sourceChecks.delete(index);
        button.classList.remove("selected");
      } else {
        ecoRobustState.sourceChecks.add(index);
        button.classList.add("selected");
      }
      updateEcoRobustProgress();
    }

    function toggleEcoTownQuestion(index, button) {
      if (ecoRobustState.townQuestions.has(index)) {
        ecoRobustState.townQuestions.delete(index);
        button.classList.remove("selected");
      } else {
        ecoRobustState.townQuestions.add(index);
        button.classList.add("selected");
      }
      updateEcoRobustProgress();
    }

    function ecoMiniDropSvg() {
      return `<svg width="34" height="42" viewBox="0 0 40 48" aria-hidden="true"><path d="M20 3 C20 3 7 22 7 32 C7 40 13 46 20 46 C27 46 33 40 33 32 C33 22 20 3 20 3Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2"></path></svg>`;
    }

    function ecoJuiceBoxSvg() {
      return `<svg width="34" height="42" viewBox="0 0 44 52" aria-hidden="true"><rect x="10" y="13" width="24" height="32" rx="4" fill="#bef264" stroke="#65a30d" stroke-width="2"></rect><path d="M15 13 L22 8 L34 13Z" fill="#d9f99d" stroke="#65a30d" stroke-width="2"></path><path d="M24 8 L28 3" stroke="#be123c" stroke-width="3" stroke-linecap="round"></path><circle cx="22" cy="29" r="6" fill="#f472b6" opacity="0.8"></circle></svg>`;
    }

    function ecoHeaderIconSvg(kind) {
      const simpleComparisonIcons = {
        water_drop: "💧",
        juice_box: "🧃",
        water_bottle: "🚰",
        bucket: "🪣",
        kitchen_sink: "🚰",
        washing_machine_load: "🧺",
        bathtub: "🛁",
        large_fish_tank: "🐠",
        hot_tub: "♨️",
        water_delivery_truck: "🚚",
        large_tanker_truck: "🚛",
        olympic_pool: "🏊",
        small_pond: "🪷",
        large_pond: "🐸",
        small_lake: "🏞️",
        large_lake: "🌊",
        reservoir: "🏔️",
        regional_reservoir: "🌄",
        great_lake_body: "🌊",
        small_inland_sea: "🌅",
        ocean_gulf: "🌎"
      };
      if (simpleComparisonIcons[kind]) {
        return `<span class="eco-simple-comparison-icon" aria-hidden="true">${simpleComparisonIcons[kind]}</span>`;
      }

      const icons = {
        total: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 C12 2 5 10.3 5 15 c0 3.9 3.1 7 7 7 s7-3.1 7-7 C19 10.3 12 2 12 2Z" fill="#93c5fd" stroke="#2563eb" stroke-width="1.8"/></svg>`,
        compare: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10v10H7Z" fill="#fffbeb" stroke="#b45309" stroke-width="1.6"/><path d="M7 11H4v6h3M17 11h3v6h-3" fill="#fef3c7" stroke="#b45309" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
        cycle: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 C12 3 6 10 6 14 a6 6 0 0 0 12 0 C18 10 12 3 12 3Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.6"/><path d="M8 15c1 1.5 2.3 2.2 4 2.2 1.7 0 3-.7 4-2.2" fill="none" stroke="#0f766e" stroke-width="1.4" stroke-linecap="round"/></svg>`,
        community: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="2.6" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/><circle cx="16" cy="9" r="2.6" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/><path d="M3.8 19c.4-3 2.1-4.8 4.2-4.8s3.8 1.8 4.2 4.8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><path d="M11.8 19c.4-3 2.1-4.8 4.2-4.8s3.8 1.8 4.2 4.8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><path d="M12 2s-2.5 3.1-2.5 5a2.5 2.5 0 0 0 5 0C14.5 5.1 12 2 12 2Z" fill="#93c5fd" stroke="#2563eb" stroke-width="1.2"/></svg>`,
        context: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2.5" fill="#eef2ff" stroke="#3730a3" stroke-width="1.7"/><path d="M9 9h6v6H9Z" fill="#c7d2fe" stroke="#3730a3" stroke-width="1.2"/><path d="M4 9h2M4 12h2M4 15h2M18 9h2M18 12h2M18 15h2M9 4v2M12 4v2M15 4v2M9 18v2M12 18v2M15 18v2" stroke="#3730a3" stroke-width="1.4" stroke-linecap="round"/></svg>`,
        bucket: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9h12l-1.3 9.1A2 2 0 0 1 14.7 20H9.3a2 2 0 0 1-2-1.9L6 9Z" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><path d="M8 9V7a4 4 0 1 1 8 0v2" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>`,
        sink: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="8" rx="2" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/><path d="M8 10V6h5" fill="none" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/><path d="M13 6h3" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        tub: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.5"/><path d="M7 12V8a2 2 0 0 1 4 0v1" fill="none" stroke="#6d28d9" stroke-width="1.5"/></svg>`,
        pool: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="10" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><path d="M5 19c1-.8 2-.8 3 0s2 .8 3 0 2-.8 3 0 2 .8 3 0 2-.8 3 0" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        lake: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15c2-3 4-4 8-4s6 1 8 4v3H4v-3Z" fill="#bfdbfe" stroke="#0f766e" stroke-width="1.5"/><path d="M4 18c2-.7 4-.7 6 0s4 .7 6 0 4-.7 4 0" fill="none" stroke="#0f766e" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        continent: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7l4-2 5 1 5 4-1 5-5 4-5-1-3-4Z" fill="#dcfce7" stroke="#15803d" stroke-width="1.5" stroke-linejoin="round"/></svg>`
      };
      return icons[kind] || icons.total;
    }

    function getEcoBestLiquidComparison(totalLiters) {
      const comparisons = [
        { key: "water_drop", label: "water drop", plural: "water drops", unit: 0.00005, note: "about 0.05 mL each" },
        { key: "juice_box", label: "juice box", plural: "juice boxes", unit: 0.2, note: "about 200 mL each" },
        { key: "water_bottle", label: "water bottle", plural: "water bottles", unit: 0.5, note: "about 500 mL each" },
        { key: "bucket", label: "bucket", plural: "buckets", unit: 10, note: "about 10 liters each" },
        { key: "kitchen_sink", label: "kitchen sink", plural: "kitchen sinks", unit: 15, note: "about 15 liters each" },
        { key: "washing_machine_load", label: "washing machine load", plural: "washing machine loads", unit: 80, note: "about 80 liters each" },
        { key: "bathtub", label: "bathtub", plural: "bathtubs", unit: 150, note: "about 150 liters each" },
        { key: "large_fish_tank", label: "large fish tank", plural: "large fish tanks", unit: 750, note: "about 750 liters each" },
        { key: "hot_tub", label: "hot tub", plural: "hot tubs", unit: 1500, note: "about 1,500 liters each" },
        { key: "water_delivery_truck", label: "water delivery truck", plural: "water delivery trucks", unit: 15000, note: "about 15,000 liters each" },
        { key: "large_tanker_truck", label: "large tanker truck", plural: "large tanker trucks", unit: 25000, note: "about 25,000 liters each" },
        { key: "olympic_pool", label: "Olympic pool", plural: "Olympic pools", unit: 2500000, note: "about 2.5 million liters each" },
        { key: "small_pond", label: "small pond", plural: "small ponds", unit: 10000000, note: "about 10 million liters each" },
        { key: "large_pond", label: "large pond", plural: "large ponds", unit: 100000000, note: "about 100 million liters each" },
        { key: "small_lake", label: "small lake", plural: "small lakes", unit: 1000000000, note: "about 1 billion liters each" },
        { key: "large_lake", label: "large lake", plural: "large lakes", unit: 10000000000, note: "about 10 billion liters each" },
        { key: "reservoir", label: "reservoir", plural: "reservoirs", unit: 100000000000, note: "about 100 billion liters each" },
        { key: "regional_reservoir", label: "regional reservoir", plural: "regional reservoirs", unit: 500000000000, note: "about 500 billion liters each" },
        { key: "great_lake_body", label: "Great Lake-sized body", plural: "Great Lake-sized bodies", unit: 10000000000000, note: "about 10 trillion liters each" },
        { key: "small_inland_sea", label: "small inland sea", plural: "small inland seas", unit: 100000000000000, note: "about 100 trillion liters each" },
        { key: "ocean_gulf", label: "ocean gulf", plural: "ocean gulfs", unit: 1000000000000000, note: "about 1 quadrillion liters each" }
      ];

      let selected = comparisons[0];
      for (const comparison of comparisons) {
        if (totalLiters >= comparison.unit) selected = comparison;
      }

      const amount = totalLiters / selected.unit;
      const displayAmount = amount >= 0.01 ? formatEcoNumber(amount, amount < 10 ? 2 : 1) : "less than 0.01";

      const comparisonName = amount === 1 ? selected.label : selected.plural;
      const readableAmount = "";

      return {
        ...selected,
        amount,
        displayAmount,
        title: "Picture it as",
        comparisonName,
        readableAmount
      };
    }

    function getEcoCheckedNumber(name, fallback = 1) {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      return Number(checked?.value || fallback);
    }

    function formatEcoVolume(ml) {
      if (ml < 1000) return `${ml.toLocaleString(undefined, { maximumFractionDigits: 1 })} mL`;
      const liters = ml / 1000;
      if (liters < 1000000) return `${liters.toLocaleString(undefined, { maximumFractionDigits: 1 })} L`;
      return `${(liters / 1000000).toLocaleString(undefined, { maximumFractionDigits: 2 })} million L`;
    }

    function formatEcoNumber(value, digits = 1) {
      return value.toLocaleString(undefined, { maximumFractionDigits: digits });
    }

    function getEcoModelEstimate() {
      const model = document.querySelector('input[name="ecoModel"]:checked')?.value || "chatgpt";
      const estimates = {
        chatgpt: { label: "ChatGPT", waterMl: 0.38, energyWh: 0.3 },
        gemini: { label: "Gemini", waterMl: 0.26, energyWh: 0.24 }
      };
      return estimates[model] || estimates.chatgpt;
    }

    function ecoNumberToWords(value) {
      if (!Number.isFinite(value)) return "";
      const rounded = Math.round(value * 10) / 10;
      const whole = Math.floor(Math.abs(rounded));
      const decimal = Math.round((Math.abs(rounded) - whole) * 10);

      const small = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
      const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

      function underThousand(n) {
        let parts = [];
        if (n >= 100) {
          parts.push(small[Math.floor(n / 100)] + " hundred");
          n = n % 100;
        }
        if (n >= 20) {
          const ten = Math.floor(n / 10);
          const rest = n % 10;
          parts.push(tens[ten] + (rest ? "-" + small[rest] : ""));
        } else if (n > 0 || parts.length === 0) {
          parts.push(small[n]);
        }
        return parts.join(" ");
      }

      function wholeToWords(n) {
        if (n === 0) return "zero";
        const scales = [
          [1_000_000_000_000, "trillion"],
          [1_000_000_000, "billion"],
          [1_000_000, "million"],
          [1_000, "thousand"]
        ];
        const parts = [];
        for (const [scale, label] of scales) {
          if (n >= scale) {
            const chunk = Math.floor(n / scale);
            parts.push(underThousand(chunk) + " " + label);
            n = n % scale;
          }
        }
        if (n > 0) parts.push(underThousand(n));
        return parts.join(", ");
      }

      let words = wholeToWords(whole);
      if (decimal > 0) words += ` point ${small[decimal]}`;
      return words;
    }

    function ecoFormattedVolumeWords(totalMl) {
      if (totalMl < 1000) {
        return `${ecoNumberToWords(totalMl)} milliliters`;
      }
      return `${ecoNumberToWords(totalMl / 1000)} liters`;
    }

    function limitEcoNumberInput(input) {
      if (!input) return;
      const max = Number(input.getAttribute("max") || 9999);
      const digits = String(input.value || "").replace(/\D/g, "").slice(0, 4);
      input.value = digits;
      const value = Number(input.value || 0);
      if (value > max) input.value = String(max);
    }

    function getLimitedEcoInputValue(id) {
      const input = document.getElementById(id);
      if (!input) return 0;
      limitEcoNumberInput(input);
      return Math.min(9999, Math.max(0, Number(input.value || 0)));
    }

    function updateEcoCalculator(markRun = true) {
      const textCount = getLimitedEcoInputValue("ecoPromptCount");
      const imageCount = getLimitedEcoInputValue("ecoImageCount");
      const videoCount = getLimitedEcoInputValue("ecoVideoCount");
      const speed = getEcoCheckedNumber("ecoSpeed", 1);
      const scale = getEcoCheckedNumber("ecoScale", 1);
      const days = getEcoCheckedNumber("ecoDays", 1);
      const modelEstimate = getEcoModelEstimate();
      const result = document.getElementById("ecoCalculatorResult");
      if (!result) return;

      if (markRun) ecoRobustState.calculatorRun = true;

      const textMlEach = modelEstimate.waterMl;
      const textWhEach = modelEstimate.energyWh;
      const imageMlEach = 1000 * speed;
      const videoMlEach = 5000 * speed;

      const textDailyMl = textCount * textMlEach;
      const textDailyWh = textCount * textWhEach;
      const imageDailyMl = imageCount * imageMlEach;
      const videoDailyMl = videoCount * videoMlEach;
      const dailyMl = textDailyMl + imageDailyMl + videoDailyMl;
      const totalMl = dailyMl * scale * days;
      const totalLiters = totalMl / 1000;
      const gallons = totalMl / 3785.41;
      const drops = totalMl * 20;
      const juiceBoxes = totalMl / 200;

      const manufacturingL = totalLiters * 0.15;
      const electricityL = totalLiters * 0.60;
      const dataCenterL = totalLiters * 0.25;
      const evaporatesL = totalLiters * 0.80;
      const wastewaterL = totalLiters * 0.20;
      const households = gallons / 113.5;

      const comparison = getEcoBestLiquidComparison(totalLiters);

      const speedExplain = document.getElementById("ecoSpeedExplain");
      const scaleExplain = document.getElementById("ecoScaleExplain");
      const daysExplain = document.getElementById("ecoDaysExplain");
      if (speedExplain) speedExplain.innerHTML = speed === 1
        ? `<strong>${modelEstimate.label} selected:</strong> ${modelEstimate.waterMl} mL water and ${modelEstimate.energyWh} Wh per text query. Normal image speed uses the baseline comparison model.`
        : `<strong>${modelEstimate.label} selected:</strong> ${modelEstimate.waterMl} mL water and ${modelEstimate.energyWh} Wh per text query. Fast image speed uses a 4x comparison multiplier.`;
      if (scaleExplain) {
        if (scale === 1) scaleExplain.innerHTML = "<strong>Just you:</strong> looking at your individual water estimate.";
        else if (scale === 1000) scaleExplain.innerHTML = "<strong>Small town:</strong> multiplying one person’s pattern by 1,000 people.";
        else if (scale === 1000000) scaleExplain.innerHTML = "<strong>Large city:</strong> multiplying one person’s pattern by 1 million people.";
        else scaleExplain.innerHTML = "<strong>Large platform:</strong> this shows the real-world scale of mass AI use.";
      }
      if (daysExplain) {
        if (days === 1) daysExplain.innerHTML = "<strong>1 day:</strong> showing the estimate for a single day.";
        else if (days === 365) daysExplain.innerHTML = "<strong>365 days:</strong> showing how daily AI habits can add up over a year.";
        else daysExplain.innerHTML = `<strong>${days} days:</strong> showing how the estimate adds up over time.`;
      }

      const textWater = document.getElementById("ecoTextWater");
      const imageWater = document.getElementById("ecoImageWater");
      const videoWater = document.getElementById("ecoVideoWater");
      const textJuice = document.getElementById("ecoTextJuice");
      const imageJuice = document.getElementById("ecoImageJuice");
      const videoJuice = document.getElementById("ecoVideoJuice");
      if (textWater) textWater.textContent = formatEcoVolume(textDailyMl);
      if (imageWater) imageWater.textContent = formatEcoVolume(imageDailyMl);
      if (videoWater) videoWater.textContent = formatEcoVolume(videoDailyMl);
      if (textJuice) textJuice.textContent = `${modelEstimate.label}: ${formatEcoNumber(textDailyWh, 3)} Wh electricity`;
      if (imageJuice) imageJuice.textContent = `${formatEcoVolume(imageDailyMl)} before scale and time`;
      if (videoJuice) videoJuice.textContent = `${formatEcoVolume(videoDailyMl)} before scale and time`;

      result.innerHTML = `
        <div class="eco-total-grid">
          <div class="eco-total-number">
            <div class="eco-result-heading"><span class="eco-result-icon">${ecoHeaderIconSvg('total')}</span><span>Total water used</span></div>
            <span class="small-note">Total amount</span>
            <strong>${formatEcoVolume(totalMl)}</strong>
            <p class="small-note"><em>${ecoFormattedVolumeWords(totalMl)}</em></p>
            <p class="small-note">${formatEcoNumber(gallons, 4)} gallons</p>
          </div>
          <div class="eco-total-comparison-card ${comparison.amount < 0.01 ? "active-small" : ""}">
            <div class="eco-comparison-icon-wrap">${ecoHeaderIconSvg(comparison.key)}</div>
            <div class="eco-comparison-title">${comparison.title}</div>
            <strong>${comparison.displayAmount}</strong>
            <div class="eco-comparison-units">${comparison.comparisonName}</div>
            <p class="eco-comparison-readable"><span class="eco-comparison-note">(${comparison.note})</span></p>
          </div>
        </div>

        <div class="eco-water-cycle-box">
          <div class="eco-water-cycle-grid">
            <div class="eco-water-cycle-card"><div class="eco-result-heading" style="justify-content:center; font-size:1rem;"><span class="eco-scale-icon">${ecoHeaderIconSvg('context')}</span><span>Manufacturing</span></div><span class="cycle-liters">${formatEcoNumber(manufacturingL, 1)} L</span><p class="small-note">Super-clean water to make computer chips.</p></div>
            <div class="eco-water-cycle-card"><div class="eco-result-heading" style="justify-content:center; font-size:1rem;"><span class="eco-scale-icon">${ecoHeaderIconSvg('speed')}</span><span>Power plants</span></div><span class="cycle-liters">${formatEcoNumber(electricityL, 1)} L</span><p class="small-note">Water can be used to generate electricity.</p></div>
            <div class="eco-water-cycle-card"><div class="eco-result-heading" style="justify-content:center; font-size:1rem;"><span class="eco-scale-icon">${ecoHeaderIconSvg('image')}</span><span>Data centers</span></div><span class="cycle-liters">${formatEcoNumber(dataCenterL, 1)} L</span><p class="small-note">Cooling servers while they work.</p></div>
          </div>
        </div>

        <div class="eco-community-card">
          <div class="eco-result-heading"><span class="eco-result-icon">${ecoHeaderIconSvg('community')}</span><span>Community water comparison</span></div>
          <span class="small-note">This calculated AI use equals the daily household water use for about</span>
          <strong>${formatEcoNumber(households, 1)} households</strong>
          <span class="small-note">This uses 113.5 gallons per household per day, based on an average household of about 2.5 people.</span>
        </div>
          <div class="eco-real-context">
          <h3>Real-World Context</h3>
          <p class="small-note">Complete the paragraph with the word bank. This summarizes the model note and scope note.</p>
          <div class="eco-context-reminder">
            <strong>Remember:</strong> The issue is not one query, but the systems behind it.
          </div>
          <div class="eco-word-bank">${ecoContextOptions.map(word => ecoWordBankChip(word)).join("")}</div>
          <div class="eco-cloze-card eco-context-cloze-card">
            Large data centers can use ${ecoContextSelect(0)} of liters of water per day. The bigger issue is AI ${ecoContextSelect(1)}: data centers, chips, electricity, and supply-chain emissions. A single ${ecoContextSelect(2)} text query is shown as about 0.38 mL of water and 0.3 Wh of electricity. A single ${ecoContextSelect(3)} text query is shown as about 0.26 mL of water and 0.24 Wh of electricity. These numbers are comparison ${ecoContextSelect(4)}, not exact measurements.
          </div>
          <div id="ecoContextClozeStatus" class="small-note">0 of 5 blanks correct.</div>
        </div>
      `;

      initializeEcoContextSelfCheck();
      attachEcoClozeSelfCheckListeners();
      updateEcoRobustProgress();
    }

    function resetEcoCalculator() {
      const prompts = document.getElementById("ecoPromptCount");
      const images = document.getElementById("ecoImageCount");
      const videos = document.getElementById("ecoVideoCount");
      if (prompts) prompts.value = 1;
      if (images) images.value = 0;
      if (videos) videos.value = 0;

      const model = document.querySelector('input[name="ecoModel"][value="chatgpt"]');
      const speed = document.querySelector('input[name="ecoSpeed"][value="1"]');
      const scale = document.querySelector('input[name="ecoScale"][value="1"]');
      const days = document.querySelector('input[name="ecoDays"][value="1"]');
      if (model) model.checked = true;
      if (speed) speed.checked = true;
      if (scale) scale.checked = true;
      if (days) days.checked = true;

      const result = document.getElementById("ecoCalculatorResult");
      if (result) result.textContent = "Change a number or setting to see totals, water comparisons, water-cycle estimates, and community comparison.";
      ecoRobustState.calculatorRun = false;
      updateEcoCalculator(false);
      updateEcoRobustProgress();
    }

    function answerEcoMyth(index, answer) {
      const myth = ecoMyths[index];
      ecoRobustState.myths[index] = answer === myth.answer;
      const feedback = document.getElementById(`ecoMythFeedback${index}`);
      const card = document.getElementById(`ecoMythCard${index}`);
      if (feedback) {
        feedback.innerHTML = `<strong>${answer === myth.answer ? "Correct." : "Not quite."}</strong> ${escapeHtml(myth.feedback)}`;
      }
      if (card) {
        card.style.borderColor = answer === myth.answer ? "#16a34a" : "#f59e0b";
        card.style.background = answer === myth.answer ? "#f0fdf4" : "#fffbeb";
      }
      updateEcoRobustProgress();
    }

    function getEcoRobustProgress() {
      const check = runEcoClozeSelfCheck();
      const bigPictureDone = check.bigPictureCorrect >= ecoClozeAnswers.length;
      const contextDone = check.contextCorrect >= ecoContextAnswers.length;
      const calcDone = Boolean(ecoRobustState.calculatorRun);
      const dataCenterTypesDone = Boolean(ecoRobustState.dataCenterTypesViewed);
      const steps = [bigPictureDone, calcDone, contextDone, dataCenterTypesDone];
      return {
        clozeCorrect: check.bigPictureCorrect,
        contextCorrect: check.contextCorrect,
        bigPictureDone,
        contextDone,
        calcDone,
        dataCenterTypesDone,
        completeSteps: steps.filter(Boolean).length,
        totalSteps: steps.length,
        allDone: steps.every(Boolean)
      };
    }

    function updateEcoRobustProgress() {
      setTimeout(updateEcoDataCenterTypeCards, 0);
      const progress = getEcoRobustProgress();
      syncEcoClozeSelectVisuals();
      const status = document.getElementById("ecoRobustStatus");
      const text = document.getElementById("ecoRobustStatusText");
      const fill = document.getElementById("ecoRobustProgressFill");
      const completeButton = document.getElementById("ecoRobustCompleteButton");
      const clozeStatus = document.getElementById("ecoClozeStatus");
      const contextStatus = document.getElementById("ecoContextClozeStatus");

      if (clozeStatus) {
        clozeStatus.textContent = `${progress.clozeCorrect} of ${ecoClozeAnswers.length} blanks correct.`;
        clozeStatus.classList.toggle("eco-cloze-complete", progress.clozeCorrect === ecoClozeAnswers.length);
      }

      if (contextStatus) {
        contextStatus.textContent = `${progress.contextCorrect} of ${ecoContextAnswers.length} blanks correct.`;
        contextStatus.classList.toggle("eco-cloze-complete", progress.contextCorrect === ecoContextAnswers.length);
      }

      if (fill) fill.style.width = `${Math.round((progress.completeSteps / progress.totalSteps) * 100)}%`;

      const reqBigPicture = document.getElementById("ecoReqBigPicture");
      const reqCalculator = document.getElementById("ecoReqCalculator");
      const reqContext = document.getElementById("ecoReqContext");
      const reqDataCenters = document.getElementById("ecoReqDataCenters");
      if (reqBigPicture) reqBigPicture.classList.toggle("done", progress.bigPictureDone);
      if (reqCalculator) reqCalculator.classList.toggle("done", progress.calcDone);
      if (reqContext) reqContext.classList.toggle("done", progress.contextDone);
      if (reqDataCenters) reqDataCenters.classList.toggle("done", progress.dataCenterTypesDone);

      if (text) {
        text.textContent = progress.allDone
          ? "All four required Eco activities are complete. You may finish the Eco-Awareness Badge."
          : `${progress.completeSteps} of ${progress.totalSteps} required Eco activities complete: The Big Picture, Water Usage Calculator, Real-World Context, and Four data center types.`;
      }
      if (status) status.classList.toggle("ready", progress.allDone);
      if (completeButton) {
        completeButton.disabled = false;
        completeButton.setAttribute("aria-disabled", progress.allDone ? "false" : "true");
      }
    }

    function completeEcoAwarenessModule(isTeacher = false) {
      updateEcoRobustProgress();
      const progress = getEcoRobustProgress();
      const feedback = document.getElementById(isTeacher ? "teacherQuizFeedback" : "quizFeedback");
      if (!feedback) return;
      feedback.classList.remove("hidden");

      if (!progress.allDone) {
        const missing = [];
        if (!progress.bigPictureDone) missing.push("The Big Picture");
        if (!progress.calcDone) missing.push("Water Usage Calculator");
        if (!progress.contextDone) missing.push("Real-World Context");
        if (!progress.dataCenterTypesDone) missing.push("Four data center types");
        feedback.className = "feedback incorrect";
        feedback.innerHTML = `<strong>Not ready yet.</strong> Complete: ${missing.map(escapeHtml).join(", ")}.`;
        return;
      }

      feedback.className = "feedback correct";
      feedback.innerHTML = "Eco-Awareness Badge complete. You completed The Big Picture, used the Water Usage Calculator, finished Real-World Context, and reviewed the four data center types.";
      if (isTeacher) {
        completeTeacherModule("teacher-eco-awareness-badge", 100);
      } else {
        completeModule("eco-aware-ai-use", 100);
      }
    }


    function renderActiveModule() {
      const module = modules[activeModuleIndex];
      const panel = document.getElementById("modulePanel");
      const panelDisplayNumber = getStudentModuleDisplayNumber(activeModuleIndex);

      panel.classList.remove("hidden");
      panel.innerHTML = `
        <div class="module-panel-topbar">
          <button class="secondary-btn" onclick="closeModule()">Back to Learning Path</button>
          ${module.prerequisite
            ? `<div class="prereq-title-tag module-corner-tag">Prerequisite Module</div>`
            : `<div class="badge module-corner-tag">Module ${panelDisplayNumber}</div>`}
        </div>
        <h2>${module.title}</h2>
        <p>${renderLessonText(module.lesson)}</p>
        ${module.extraHtml || ""}
        ${renderModulePracticeBox(module.id)}
        <div id="activityArea"></div>
        <div id="quizArea" class="hidden"></div>
      `;

      if (module.id === "required-ai-practice-tools") {
        document.getElementById("activityArea").classList.add("hidden");
        document.getElementById("quizArea").classList.add("hidden");
        studentAiAssessState = { level: null, allowed: false, responsibility: false };
        setTimeout(() => {
          updateStudentBuildCounts();
          updateStudentToolCheckpointState();
          setStudentBuildMode("standard");
        }, 0);
      } else if (module.id === "prompt-like-a-learner") {
        document.getElementById("quizArea").classList.add("hidden");
        renderPromptPracticeBuilder();
      } else if (module.id === "can-you-trust-it") {
        document.getElementById("quizArea").classList.add("hidden");
        renderClaimCheckingPractice();
      } else if (module.id === "media-literacy") {
        document.getElementById("quizArea").classList.add("hidden");
        renderMediaReliabilityPractice();
      } else if (module.id === "when-is-ai-allowed") {
        document.getElementById("quizArea").classList.add("hidden");
        renderAiUseLevelPractice();
      } else if (module.id === "eco-aware-ai-use") {
        document.getElementById("quizArea").classList.add("hidden");
        renderEcoAwarenessTool();
      } else if (studentPracticeModules[module.id]) {
        document.getElementById("quizArea").classList.add("hidden");
        renderPracticeCompletionModule(module.id, false);
      } else {
        renderActivity();
      }

      if (module.id === "how-ai-generates-responses") {
        renderAiCategoryTool();
      }
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }




