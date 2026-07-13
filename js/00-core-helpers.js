// Core helpers loaded FIRST so data literals (modules, teacherModules,
// resource HTML) can call them during top-level initialization. Moved here
// from strands-foundations.js (termDef, netIcon) and lab-modal-bootstrap.js
// (escapeHtml) because classic <script> files only hoist functions within
// their own file. Keep this first in the <script> load order.

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function termDef(label, definition) {
      return `<span class="term-def" tabindex="0" data-definition="${escapeHtml(definition)}">${escapeHtml(label)}</span>`;
    }

    function netIcon(type) {
      const common = `fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"`;
      const filled = `fill="currentColor" stroke="currentColor" stroke-width="1.6"`;
      const icons = {
        device: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="11" width="30" height="21" rx="2.5" ${common}/><path d="M6 37h36" ${common}/><path d="M18 32h12l2 5H16l2-5Z" ${common}/></svg>`,
        wifi: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 20c8.5-7.5 21.5-7.5 30 0" ${common}/><path d="M15 26c5-4.5 13-4.5 18 0" ${common}/><path d="M21 32c2-1.8 4-1.8 6 0" ${common}/><circle cx="24" cy="38" r="2.4" ${filled}/></svg>`,
        access: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="11" y="29" width="26" height="9" rx="2" ${common}/><path d="M16 29V18m16 11V18" ${common}/><path d="M14 16c6-5 14-5 20 0" ${common}/><path d="M18 21c3.6-3 8.4-3 12 0" ${common}/><circle cx="17" cy="33.5" r="1.2" ${filled}/><circle cx="22" cy="33.5" r="1.2" ${filled}/></svg>`,
        school: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 20l17-9 17 9" ${common}/><path d="M11 20v18h26V20" ${common}/><path d="M19 38V27h10v11" ${common}/><path d="M15 24h5m8 0h5" ${common}/></svg>`,
        globe: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17" ${common}/><path d="M7 24h34M24 7c5 5.5 7.5 11 7.5 17S29 35.5 24 41M24 7c-5 5.5-7.5 11-7.5 17S19 35.5 24 41" ${common}/></svg>`,
        send: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="13" width="32" height="22" rx="3" ${common}/><path d="M10 16l14 11 14-11" ${common}/><path d="M33 34l7 7m0 0h-7m7 0v-7" ${common}/></svg>`,
        binary: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 12h8v12h-8zM30 12h8v12h-8z" ${common}/><path d="M14 12v12M34 12v12" ${common}/><path d="M9 34h8m-4-6v12M28 34h11m-5.5-6v12" ${common}/></svg>`,
        packets: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6l13 7v14l-13 7-13-7V13L24 6Z" ${common}/><path d="M11 13l13 7 13-7M24 20v14" ${common}/><path d="M8 31l8 4m24-4l-8 4" ${common}/></svg>`,
        radio: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34h28" ${common}/><path d="M14 34l7-18m13 18l-7-18" ${common}/><path d="M17 15c4-3 10-3 14 0M13 10c7-5 15-5 22 0" ${common}/><circle cx="24" cy="19" r="2.2" ${filled}/></svg>`,
        fiber: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 29c8-12 16 12 24 0s8 5 12 0" ${common}/><path d="M7 21c8-12 16 12 24 0s8 5 12 0" ${common}/><circle cx="9" cy="29" r="2.5" ${filled}/><circle cx="30" cy="21" r="2.5" ${filled}/><circle cx="40" cy="29" r="2.5" ${filled}/></svg>`,
        router: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="29" width="30" height="10" rx="2" ${common}/><path d="M15 29v-9m18 9v-9" ${common}/><path d="M17 16c4-3 10-3 14 0" ${common}/><circle cx="16" cy="34" r="1.3" ${filled}/><circle cx="21" cy="34" r="1.3" ${filled}/></svg>`,
        datacenter: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="7" width="28" height="34" rx="2" ${common}/><path d="M16 14h16M16 21h16M16 28h16M16 35h16" ${common}/><circle cx="18" cy="14" r="1.2" ${filled}/><circle cx="18" cy="21" r="1.2" ${filled}/><circle cx="18" cy="28" r="1.2" ${filled}/></svg>`,
        assemble: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 12h11v10H10zM27 12h11v10H27zM10 28h11v10H10zM27 28h11v10H27z" ${common}/><path d="M21 17h6M21 33h6M15.5 22v6M32.5 22v6" ${common}/></svg>`,
        read: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="11" width="30" height="24" rx="3" ${common}/><path d="M14 17h20M14 23h20M14 29h12" ${common}/><path d="M17 39h14" ${common}/></svg>`,
        image: `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2.5" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.7"/><path d="M8 8h8M8 12h8M8 16h8" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="8" r="1" fill="#14b8a6"/><circle cx="9" cy="12" r="1" fill="#14b8a6"/><circle cx="9" cy="16" r="1" fill="#14b8a6"/></svg>`,
        social: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="9" width="28" height="30" rx="5" ${common}/><circle cx="18" cy="18" r="3" ${common}/><path d="M25 17h8M15 27h18M15 33h12" ${common}/></svg>`,
        video: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="12" width="32" height="24" rx="3" ${common}/><path d="M21 19l10 5-10 5V19Z" ${common}/><path d="M12 40h24" ${common}/></svg>`,
        cloud: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 34h18a8 8 0 0 0 0-16 12 12 0 0 0-23 4A6.5 6.5 0 0 0 17 34Z" ${common}/><path d="M24 27v11m0 0l-5-5m5 5l5-5" ${common}/></svg>`,
        ai: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="13" width="24" height="22" rx="5" ${common}/><path d="M18 13V8m12 5V8M18 40v-5m12 5v-5M8 20h4m-4 8h4m24-8h4m-4 8h4" ${common}/><circle cx="20" cy="24" r="2" ${filled}/><circle cx="28" cy="24" r="2" ${filled}/><path d="M19 30c3 2 7 2 10 0" ${common}/></svg>`
      };
      return `<span class="net-icon">${icons[type] || icons.globe}</span>`;
    }
