    const labModalContent = {
      about: {
        title: "About This Lab",
        body: `
          <div class="lab-modal-card about-lab-intro">
            <p><strong>The SAU 48 AI Learning Lab</strong> helps students and staff practice responsible AI use. The central idea is: <strong>AI can help. Your thinking leads.</strong></p>
          </div>

          <div class="lab-modal-grid about-modal-grid">
            <div class="lab-modal-card">
              <h3>What is included</h3>
              <p>Prerequisite modules, student and teacher learning paths, practice tools, checkpoint certificates, and privacy guidance.</p>
            </div>

            <div class="lab-modal-card">
              <h3>Prototype note</h3>
              <p>Progress is stored in the current browser session on this device. Checkpoint codes can restore completion progress, but they are not a secure login system and do not save detailed responses.</p>
            </div>
          </div>

          <div class="lab-modal-card">
            <h3>Student privacy</h3>
            <p>Students should use first name and last initial only on certificates. Users should not enter private student information into this lab or into external AI tools.</p>
          </div>

          <div class="lab-modal-card">
            <h3>Responsible use</h3>
            <p>Users should verify AI output, protect privacy, follow assignment expectations, and disclose or cite AI use when required.</p>
          </div>

          <div class="lab-modal-card about-source-card">
            <h3>Sources and credit</h3>
            <p>Built from SAU 48 AI guidance, AI-Ready Graduate / ISTE skill areas, UNESCO-informed K–12 AI competencies, citation and media-literacy guidance, Stanford AI literacy resources, Encyclopaedia Britannica explanations, and critical thinking routines. Environmental and data-center activities also draw on source notes about AI infrastructure, water and energy estimates, data centers, and greenwashing claims.</p>
            <p>Created by <strong>Geneva M. Sambor, M.Ed.</strong>, K–8 Digital Learning Specialist.</p>
          </div>
        `
      },
      glossary: {
        title: "AI Glossary",
        body: `
          <div class="lab-info-card full-span glossary-intro">
            <p>Use this glossary when you see a dotted vocabulary word, AI category, or unfamiliar term in a module. Adapted from Stanford Human-Centered Artificial Intelligence. Definitions are shortened for classroom use.</p>
          </div>

                    <details class="glossary-section" open>
            <summary>
              <div class="glossary-section-title">
                <h3>Core Lab Terms</h3>
                <p class="glossary-section-note">Terms students and staff are most likely to need during the modules.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>Artificial Intelligence (AI)<span class="core-term-badge">Core</span></strong><p>Computer systems designed to do tasks that usually require human intelligence.</p></div>
            <div class="glossary-entry"><strong>Algorithm<span class="core-term-badge">Core</span></strong><p>A step-by-step set of instructions for solving a problem or completing a task.</p></div>
            <div class="glossary-entry"><strong>Automation<span class="core-term-badge">Core</span></strong><p>When technology performs a task by following human-set instructions or rules.</p></div>
            <div class="glossary-entry"><strong>Bias in AI<span class="core-term-badge">Core</span></strong><p>When an AI system produces unfair or one-sided results because of data, design, or use.</p></div>
            <div class="glossary-entry"><strong>Chatbot<span class="core-term-badge">Core</span></strong><p>A computer program that simulates conversation with people through text or voice.</p></div>
            <div class="glossary-entry"><strong>Context Window<span class="core-term-badge">Core</span></strong><p>The amount of input an AI system can consider at one time.</p></div>
            <div class="glossary-entry"><strong>Generative AI<span class="core-term-badge">Core</span></strong><p>AI that creates new content, such as text, images, music, code, or video.</p></div>
            <div class="glossary-entry"><strong>Hallucination<span class="core-term-badge">Core</span></strong><p>When AI gives incorrect, misleading, or made-up information as if it were factual.</p></div>
            <div class="glossary-entry"><strong>Human-in-the-loop<span class="core-term-badge">Core</span></strong><p>An AI process where people review, guide, or intervene in the system’s work.</p></div>
            <div class="glossary-entry"><strong>Large Language Model (LLM)<span class="core-term-badge">Core</span></strong><p>An AI system trained on large amounts of text to understand and generate language.</p></div>
            <div class="glossary-entry"><strong>Machine Learning<span class="core-term-badge">Core</span></strong><p>A branch of AI where computers learn patterns from data instead of only following fixed rules.</p></div>
            <div class="glossary-entry"><strong>Model<span class="core-term-badge">Core</span></strong><p>A computational system that uses patterns to make predictions or generate outputs.</p></div>
            <div class="glossary-entry"><strong>Multimodal AI<span class="core-term-badge">Core</span></strong><p>AI that can work with more than one kind of information, such as text, images, audio, or video.</p></div>
            <div class="glossary-entry"><strong>Prompt Engineering<span class="core-term-badge">Core</span></strong><p>Writing clear instructions or prompts to guide an AI system toward a useful output.</p></div>
            <div class="glossary-entry"><strong>Responsible AI<span class="core-term-badge">Core</span></strong><p>Practices that guide AI to be safer, fairer, more transparent, and more accountable.</p></div>
            <div class="glossary-entry"><strong>Tokenization<span class="core-term-badge">Core</span></strong><p>Breaking text into smaller pieces called tokens so an AI language model can process it.</p></div>
            <div class="glossary-entry"><strong>Training Data<span class="core-term-badge">Core</span></strong><p>Examples such as text, images, or audio used to teach an AI model how to perform a task.</p></div>
              </div>
            </div>
          </details>
          <details class="glossary-section">
            <summary>
              <div class="glossary-section-title">
                <h3>How AI Learns and Works</h3>
                <p class="glossary-section-note">Background terms for understanding training, models, and prediction.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>AI Benchmark</strong><p>A standardized test used to compare how well AI systems perform on specific tasks.</p></div>
            <div class="glossary-entry"><strong>Attention Mechanism</strong><p>A method that helps an AI model focus on the most relevant parts of input.</p></div>
            <div class="glossary-entry"><strong>Backpropagation</strong><p>A learning process where a neural network works backward from mistakes to adjust itself.</p></div>
            <div class="glossary-entry"><strong>Deep Learning</strong><p>Machine learning that uses large, layered neural networks to learn complex patterns.</p></div>
            <div class="glossary-entry"><strong>Embeddings</strong><p>Number-based representations that help AI compare the meaning or features of text, images, or other data.</p></div>
            <div class="glossary-entry"><strong>Fine-Tuning</strong><p>Further training a pre-trained model on a specific task or type of information.</p></div>
            <div class="glossary-entry"><strong>Foundation Model</strong><p>A large AI model trained on broad data that can be adapted for many tasks.</p></div>
            <div class="glossary-entry"><strong>GPU</strong><p>A computer chip that performs many calculations at once and is often used for AI work.</p></div>
            <div class="glossary-entry"><strong>Inference</strong><p>When a trained AI model uses new input to make a prediction, decision, or response.</p></div>
            <div class="glossary-entry"><strong>Latent Space</strong><p>A compressed mathematical space where AI represents important patterns in data.</p></div>
            <div class="glossary-entry"><strong>Loss Function</strong><p>A measure of how wrong a model’s prediction is compared with the correct answer.</p></div>
            <div class="glossary-entry"><strong>Neural Network</strong><p>A computer model inspired by connected neurons that learns patterns through layers of calculations.</p></div>
            <div class="glossary-entry"><strong>Parameter</strong><p>An internal value a model learns during training.</p></div>
            <div class="glossary-entry"><strong>Tensor</strong><p>A container for numbers arranged in one or more dimensions.</p></div>
            <div class="glossary-entry"><strong>Transformer</strong><p>A neural network design that uses attention to understand relationships across input data.</p></div>
            <div class="glossary-entry"><strong>Weights</strong><p>Learned numbers inside a neural network that shape how it processes information.</p></div>
              </div>
            </div>
          </details>
          <details class="glossary-section">
            <summary>
              <div class="glossary-section-title">
                <h3>Types of AI and AI Tasks</h3>
                <p class="glossary-section-note">Terms for naming what different AI systems can do.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>Agentic AI</strong><p>AI designed to plan steps, use tools, make decisions, and act with some autonomy toward a goal.</p></div>
            <div class="glossary-entry"><strong>Computer Vision</strong><p>AI that works with images or video to identify and understand visual information.</p></div>
            <div class="glossary-entry"><strong>Decision Tree</strong><p>A model that makes predictions by asking a sequence of yes/no-style questions.</p></div>
            <div class="glossary-entry"><strong>Diffusion Model</strong><p>A generative model often used to create images by adding and then removing noise.</p></div>
            <div class="glossary-entry"><strong>Expert System</strong><p>An AI system that uses facts and rules to imitate expert decision-making in a specific area.</p></div>
            <div class="glossary-entry"><strong>GAN</strong><p>A type of generative AI where two networks compete to create more realistic synthetic data.</p></div>
            <div class="glossary-entry"><strong>GPT</strong><p>A type of large language model based on transformer architecture that generates text from prompts.</p></div>
            <div class="glossary-entry"><strong>Knowledge Graph</strong><p>A structured map of connected information and relationships.</p></div>
            <div class="glossary-entry"><strong>Natural Language Processing (NLP)</strong><p>AI focused on helping computers understand, interpret, and generate human language.</p></div>
            <div class="glossary-entry"><strong>Predictive Analytics</strong><p>Using data and models to forecast future outcomes or trends.</p></div>
            <div class="glossary-entry"><strong>Reasoning Model</strong><p>An AI system designed to work through complex problems using structured reasoning.</p></div>
            <div class="glossary-entry"><strong>Traditional AI</strong><p>Earlier AI approaches that relied heavily on human-written rules and logic.</p></div>
            <div class="glossary-entry"><strong>Vision Transformer</strong><p>A transformer model adapted to process and analyze images.</p></div>
              </div>
            </div>
          </details>
          <details class="glossary-section">
            <summary>
              <div class="glossary-section-title">
                <h3>Data, Privacy, and Systems</h3>
                <p class="glossary-section-note">Terms connected to data use, storage, software access, and reliability over time.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>Bayesian Network</strong><p>A model that shows relationships between variables using probabilities.</p></div>
            <div class="glossary-entry"><strong>Big Data</strong><p>Very large collections of information that can be analyzed to find patterns and trends.</p></div>
            <div class="glossary-entry"><strong>Closed Source</strong><p>Software whose code is restricted and not available for the public to inspect or modify.</p></div>
            <div class="glossary-entry"><strong>Data Augmentation</strong><p>Creating modified examples to expand a training dataset without collecting new data.</p></div>
            <div class="glossary-entry"><strong>Data Mining</strong><p>Finding patterns and trends in large datasets.</p></div>
            <div class="glossary-entry"><strong>Federated Learning</strong><p>Training AI across separate devices or systems without moving the original data to one central place.</p></div>
            <div class="glossary-entry"><strong>MLOps</strong><p>Practices for deploying, monitoring, and maintaining machine-learning systems.</p></div>
            <div class="glossary-entry"><strong>Model Drift</strong><p>When a model becomes less accurate because real-world data changes over time.</p></div>
            <div class="glossary-entry"><strong>Open Source</strong><p>Software whose code or design is made available for others to inspect, use, or modify.</p></div>
            <div class="glossary-entry"><strong>Open-Weight Model</strong><p>An AI model with core learned components released publicly for others to download or use.</p></div>
            <div class="glossary-entry"><strong>Synthetic Data</strong><p>Artificially generated data created by algorithms or simulations.</p></div>
            <div class="glossary-entry"><strong>Vector Database</strong><p>A database built to store and search numerical representations of data, such as embeddings.</p></div>
              </div>
            </div>
          </details>
          <details class="glossary-section">
            <summary>
              <div class="glossary-section-title">
                <h3>Responsible Use, Safety, and Understanding</h3>
                <p class="glossary-section-note">Terms that connect to verification, ethics, classroom expectations, and human decision-making.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>AGI</strong><p>Artificial general intelligence: a proposed AI with broad, human-level or beyond ability across many tasks.</p></div>
            <div class="glossary-entry"><strong>AI Alignment</strong><p>Making sure an AI system’s behavior matches human values, rules, and intentions.</p></div>
            <div class="glossary-entry"><strong>AI Fluency</strong><p>The ability to use AI productively and responsibly while understanding its limits and effects.</p></div>
            <div class="glossary-entry"><strong>AI Safety</strong><p>Work focused on making AI systems reliable and reducing possible harm.</p></div>
            <div class="glossary-entry"><strong>Ethical AI</strong><p>Designing and using AI in ways that support fairness, transparency, human values, and well-being.</p></div>
            <div class="glossary-entry"><strong>Explainable AI</strong><p>AI designed so people can better understand why it made a decision or prediction.</p></div>
            <div class="glossary-entry"><strong>Human-Centered AI</strong><p>An approach to AI that prioritizes human needs, values, safety, and well-being.</p></div>
            <div class="glossary-entry"><strong>Human-Computer Interaction</strong><p>The study of how people use and interact with computer systems.</p></div>
            <div class="glossary-entry"><strong>Interpretability</strong><p>How well people can understand how an AI system reached an output.</p></div>
            <div class="glossary-entry"><strong>Prompt Injection</strong><p>A security attack that tries to trick an AI system into ignoring rules or behaving incorrectly.</p></div>
            <div class="glossary-entry"><strong>RAG</strong><p>Retrieval-augmented generation: a method that lets AI look up outside information before responding.</p></div>
              </div>
            </div>
          </details>
          <details class="glossary-section">
            <summary>
              <div class="glossary-section-title">
                <h3>Learning Approaches</h3>
                <p class="glossary-section-note">Terms that describe different ways models can learn or adapt.</p>
              </div>
            </summary>
            <div class="glossary-section-body">
              <div class="glossary-grid">
            <div class="glossary-entry"><strong>Few-Shot Learning</strong><p>When a model learns or performs a task from only a small number of examples.</p></div>
            <div class="glossary-entry"><strong>Overfitting</strong><p>When a model memorizes training examples too closely and performs poorly on new data.</p></div>
            <div class="glossary-entry"><strong>Reinforcement Learning</strong><p>Learning through trial and error by receiving rewards or penalties for actions.</p></div>
            <div class="glossary-entry"><strong>Self-Supervised Learning</strong><p>Training where a model creates learning tasks from raw data and learns from them.</p></div>
            <div class="glossary-entry"><strong>Semantic Analysis</strong><p>Analyzing language to understand meaning and relationships between words or ideas.</p></div>
            <div class="glossary-entry"><strong>Supervised Learning</strong><p>Training a model with examples that include correct answers.</p></div>
            <div class="glossary-entry"><strong>Transfer Learning</strong><p>Reusing a model trained on one task as a starting point for a related task.</p></div>
            <div class="glossary-entry"><strong>Unsupervised Learning</strong><p>Training with data that does not include labeled answers.</p></div>
            <div class="glossary-entry"><strong>Zero-Shot Learning</strong><p>When an AI model attempts a task it was not specifically trained on.</p></div>
              </div>
            </div>
          </details>
        `
      }

,
      resources: {
        title: "Resources",
        body: `
          <div class="lab-info-card full-span">
            <p>Use these links for source material, professional learning, curriculum planning, and AI-literacy extension work.</p>
          </div>

          <div class="resource-link-grid">
            <details class="resource-link-card">
              <summary>
                <strong>Stanford HAI AI Glossary</strong>
                <span class="resource-desc">Reference glossary for AI terms and definitions.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://hai.stanford.edu/ai-definitions" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Helpful when students or staff need a shared definition instead of guessing what a term means.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Google AI Educator Series</strong>
                <span class="resource-desc">Professional learning for educators using AI tools.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://educertifications.google/google-ai-educator-series" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Good for teachers who want a structured starting point before using AI in class.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Common Sense AI Literacy Lessons</strong>
                <span class="resource-desc">AI-literacy lessons for grades 6–12.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Offers classroom-ready lessons, so this is useful even if you are cautious about AI tools themselves.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>ISTE + ASCD AI-Ready Graduate</strong>
                <span class="resource-desc">Profile and skill areas for AI-ready learners.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://iste-ascd.org/ai-ready-graduate" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Keeps the focus on student skills and judgment, not just on the technology.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Day of AI Curriculum Resources</strong>
                <span class="resource-desc">AI curriculum resources for classroom use.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://dayofai.org/curriculum-resources" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Useful when you want teaching materials about AI without needing students to jump straight into AI tools.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>MIT: AI Detectors Don’t Work</strong>
                <span class="resource-desc">Guidance on why AI detectors are unreliable for assessment decisions.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://mitsloanedtech.mit.edu/ai/teach/ai-detectors-dont-work/" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Especially relevant for skeptics because it addresses limits, false confidence, and classroom misuse.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Eduaide</strong>
                <span class="resource-desc">Teacher-facing AI planning and lesson-support platform.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://www.eduaide.ai/" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Shows one example of how AI can support teacher planning while still requiring human review.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>NotebookLM</strong>
                <span class="resource-desc">Source-grounded notebook tool from Google.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://notebooklm.google.com/" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> A strong choice for skeptics because it keeps work tied to uploaded sources instead of open-ended guessing.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>PEW Research: How Teens Use and View AI</strong>
                <span class="resource-desc">Research on how teens are actually experiencing AI.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Adds current data, which helps conversations move beyond hype or fear.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Khan Academy: AI for Education</strong>
                <span class="resource-desc">Introductory learning resource about AI in education.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://www.khanacademy.org/college-careers-more/ai-for-education/x68ea37461197a514:ai-for-education-unit-1/x68ea37461197a514:ai-welcome-to-the-future-of-education/a/ai-101-what-is-this-course?referrer=share_link" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Useful for building background knowledge before making classroom decisions about AI.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Rethinking Assessment for Generative AI</strong>
                <span class="resource-desc">Guidance for rethinking classroom assessment in the age of generative AI.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://citizendigitalfoundation.org/wp-content/uploads/2024/08/Rethinking_Assessment_for_Generative_AI_1723797596-1.pdf" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Especially useful for cautious educators who want practical assessment ideas instead of relying on AI detection or avoidance alone.</p>
              </div>
            </details>
            <details class="resource-link-card">
              <summary>
                <strong>Say What You See</strong>
                <span class="resource-desc">An interactive Google Arts & Culture activity for describing and interpreting images.</span>
              </summary>
              <div class="resource-expanded">
                <div class="resource-expanded-top"><a class="resource-open-link" href="https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw?hl=en" target="_blank" rel="noopener">Open</a></div>
                <p><strong>Why it matters:</strong> Connects well to observation, evidence, and media literacy skills, even for people who are skeptical of generative AI.</p>
              </div>
            </details>
          </div>
        `
      }
    };

    function openLabModal(type) {
      const modal = document.getElementById("labModalBackdrop");
      const title = document.getElementById("labModalTitle");
      const content = document.getElementById("labModalContent");

      const selected = labModalContent[type] || labModalContent.about;

      title.textContent = selected.title;
      content.innerHTML = selected.body;
      modal.classList.remove("hidden");
      document.body.classList.add("modal-open");

      const closeButton = modal.querySelector(".lab-modal-close");
      if (closeButton) closeButton.focus();
    }

    function closeLabModal() {
      const modal = document.getElementById("labModalBackdrop");
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        const modal = document.getElementById("labModalBackdrop");
        if (modal && !modal.classList.contains("hidden")) {
          closeLabModal();
        }
      }
    });

    document.addEventListener("click", event => {
      const modal = document.getElementById("labModalBackdrop");
      if (modal && event.target === modal) {
        closeLabModal();
      }
    });


    function showAppView(view) {
      const studentView = document.getElementById("studentView");
      const teacherView = document.getElementById("teacherView");
      const studentBtn = document.getElementById("studentViewBtn");
      const teacherBtn = document.getElementById("teacherViewBtn");

      const isTeacher = view === "teacher";

      if (studentView) studentView.classList.toggle("hidden", isTeacher);
      if (teacherView) teacherView.classList.toggle("hidden", !isTeacher);

      if (studentBtn) studentBtn.classList.toggle("active", !isTeacher);
      if (teacherBtn) teacherBtn.classList.toggle("active", isTeacher);

      if (isTeacher) {
        renderTeacherDashboard();
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }


    
    function slugifyFilePart(value, fallback = "certificate") {
      const slug = String(value || "")
        .trim()
        .replace(/[^a-z0-9]+/gi, "_")
        .replace(/^_+|_+$/g, "")
        .toLowerCase();

      return slug || fallback;
    }

    function getCertificateStudentOrTeacherName(certificate) {
      if (!certificate) return "student";

      if (certificate.classList.contains("teacher-certificate")) {
        return teacherProgress?.teacherName || "teacher";
      }

      return progress.studentName || "student";
    }

    function getCertificateCheckpointLabel(certificate) {
      if (!certificate) return "certificate";

      const heading = certificate.querySelector("h2")?.textContent || "Certificate";
      return heading
        .replace(/Certificate of Completion/i, "Final Certificate")
        .replace(/\s+/g, " ")
        .trim();
    }

    function getCertificateFilename(certificate, extension = "html") {
      const name = slugifyFilePart(getCertificateStudentOrTeacherName(certificate), "student");
      const label = slugifyFilePart(getCertificateCheckpointLabel(certificate), "certificate");
      return `ai_learning_lab_${name}_${label}.${extension}`;
    }


    function getVisibleCertificateElement() {
      return document.querySelector(".certificate, .checkpoint-certificate, .teacher-certificate");
    }

    function printCertificate() {
      const certificate = getVisibleCertificateElement();
      if (!certificate) {
        alert("Generate a certificate or checkpoint certificate first.");
        return;
      }

      const originalTitle = document.title;
      document.title = getCertificateFilename(certificate, "pdf").replace(/\.pdf$/i, "");

      window.print();

      setTimeout(() => {
        document.title = originalTitle;
      }, 1000);
    }

    function downloadCertificate() {
      const certificate = getVisibleCertificateElement();
      if (!certificate) {
        alert("Generate a certificate or checkpoint certificate first.");
        return;
      }

      const certificateHtml = certificate.outerHTML;
      const styles = Array.from(document.querySelectorAll("style"))
        .map(style => style.textContent)
        .join("\n");

      const isCheckpoint = certificate.classList.contains("checkpoint-certificate");
      const isTeacher = certificate.classList.contains("teacher-certificate");
      const title = isCheckpoint
        ? "AI Learning Lab Checkpoint Certificate"
        : isTeacher
          ? "Teacher AI Learning Lab Certificate"
          : "SAU 48 AI Learning Lab Certificate";

      const fullHtml = [
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "<head>",
        "<meta charset=\"UTF-8\">",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        `<title>${title}</title>`,
        "<style>",
        styles,
        "body { background: #ffffff; padding: 2rem; }",
        ".certificate, .checkpoint-certificate, .teacher-certificate { display: block !important; }",
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
      link.href = url;
      link.download = getCertificateFilename(certificate, "html");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }


    function resetProgress() {
      if (!confirm("Clear progress for this browser session?")) return;

      sessionStorage.removeItem(STORAGE_KEY);
      progress = loadProgress();

      closeModule();

      document.getElementById("certificatePanel").classList.add("hidden");
      document.getElementById("certificatePanel").innerHTML = "";

      renderDashboard();
    }

    renderDashboard();
