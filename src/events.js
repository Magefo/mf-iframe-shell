const mfAngular = document.getElementById("mf-angular");
const mfReact = document.getElementById("mf-react");

const angularOrigin = "http://localhost:4002";
const reactOrigin = "http://localhost:4003";

export function initEvents() {
  window.addEventListener("message", ({ origin, data }) => {
    if (![angularOrigin, reactOrigin].includes(origin)) {
      return;
    }

    mfAngular.contentWindow.postMessage(
      { app: "MF_SHELL", event: data.event },
      angularOrigin
    );
    mfReact.contentWindow.postMessage(
      { app: "MF_SHELL", event: data.event },
      reactOrigin
    );
  });
}
