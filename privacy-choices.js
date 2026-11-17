"use strict";
// Use Google's documented revocation API; retain the policy link as fallback.
document.querySelectorAll("[data-privacy-choices]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    var consent = window.googlefc;
    if (consent && consent.callbackQueue && typeof consent.showRevocationMessage === "function") {
      event.preventDefault();
      consent.callbackQueue.push(consent.showRevocationMessage);
    }
  });
});
