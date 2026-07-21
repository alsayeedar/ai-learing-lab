    // ---------------------------------------------------------------------------
    // AI Use Guide: in-app version of the district AI framework (toolbar button).
    // Two modals — the guide itself, and a nested viewer that shows the full
    // SAU 48 AI Usage Framework PDF in an iframe. Both use the app's .hidden +
    // body.modal-open convention so they behave like the other lab modals.
    // ---------------------------------------------------------------------------

    const AI_FRAMEWORK_PDF = "pdf/SAU_48_AI_Usage_Framework.pdf";
    let aiUseGuideLastFocus = null;

    function openAiUseGuide() {
      aiUseGuideLastFocus = document.activeElement;
      const modal = document.getElementById("aiUseGuideModal");
      if (!modal) return;
      modal.classList.remove("hidden");
      document.body.classList.add("modal-open");
      const closeBtn = modal.querySelector(".aug-close");
      if (closeBtn) closeBtn.focus();
    }

    function closeAiUseGuide() {
      const modal = document.getElementById("aiUseGuideModal");
      if (!modal) return;
      modal.classList.add("hidden");
      // Only release the scroll lock if no other modal is still open.
      if (!isAnyAugModalOpen()) document.body.classList.remove("modal-open");
      if (aiUseGuideLastFocus && aiUseGuideLastFocus.focus) aiUseGuideLastFocus.focus();
    }

    function closeAiUseGuideOnBackdrop(event) {
      if (event.target && event.target.id === "aiUseGuideModal") closeAiUseGuide();
    }

    // --- Full framework PDF viewer -------------------------------------------

    function openAiFramework() {
      const modal = document.getElementById("aiFrameworkModal");
      const frame = document.getElementById("aiFrameworkFrame");
      if (!modal || !frame) return;
      // Load lazily so the 8 MB PDF is only fetched when a user asks for it.
      if (frame.getAttribute("src") !== AI_FRAMEWORK_PDF) {
        frame.setAttribute("src", AI_FRAMEWORK_PDF);
      }
      modal.classList.remove("hidden");
      document.body.classList.add("modal-open");
      const closeBtn = modal.querySelector(".aug-close");
      if (closeBtn) closeBtn.focus();
    }

    function closeAiFramework() {
      const modal = document.getElementById("aiFrameworkModal");
      if (!modal) return;
      modal.classList.add("hidden");
      if (!isAnyAugModalOpen()) document.body.classList.remove("modal-open");
      // Return focus to the guide's "Open Full Framework" trigger if present.
      const guide = document.getElementById("aiUseGuideModal");
      if (guide && !guide.classList.contains("hidden")) {
        const trigger = guide.querySelector('.aug-action-btn[onclick="openAiFramework()"]');
        if (trigger) trigger.focus();
      }
    }

    function closeAiFrameworkOnBackdrop(event) {
      if (event.target && event.target.id === "aiFrameworkModal") closeAiFramework();
    }

    function isAnyAugModalOpen() {
      const guide = document.getElementById("aiUseGuideModal");
      const framework = document.getElementById("aiFrameworkModal");
      const guideOpen = guide && !guide.classList.contains("hidden");
      const frameworkOpen = framework && !framework.classList.contains("hidden");
      return Boolean(guideOpen || frameworkOpen);
    }

    // --- Printing -------------------------------------------------------------

    function openAllAugSections() {
      document.querySelectorAll("#aiUseGuideModal details.aug-section")
        .forEach(section => { section.open = true; });
    }

    function printAiUseGuide() {
      openAllAugSections();
      document.body.classList.add("aug-printing", "aug-print-all");
      window.print();
    }

    function printAiUseGuideChecklist() {
      const sections = Array.from(document.querySelectorAll("#aiUseGuideModal details.aug-section"));
      sections.forEach(section => {
        const summary = section.querySelector("summary");
        const isChecklist = summary && summary.textContent.indexOf("Printable Teacher AI Skills Checklist") !== -1;
        section.open = isChecklist;
      });
      document.body.classList.add("aug-printing", "aug-print-checklist");
      window.print();
    }

    // Clean up the print-only body classes after the print dialog resolves.
    window.addEventListener("afterprint", function () {
      document.body.classList.remove("aug-printing", "aug-print-all", "aug-print-checklist");
    });

    // --- Keyboard: Escape closes the topmost open modal -----------------------

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      const framework = document.getElementById("aiFrameworkModal");
      if (framework && !framework.classList.contains("hidden")) {
        closeAiFramework();
        return;
      }
      const guide = document.getElementById("aiUseGuideModal");
      if (guide && !guide.classList.contains("hidden")) {
        closeAiUseGuide();
      }
    });
