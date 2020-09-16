const mfAngular = document.getElementById("mf-angular");
const mfReact = document.getElementById("mf-react");

export function initEvents() {
  window.addEventListener("message", ({origin, data}) => {
    if (
      !["http://localhost:4200", "http://localhost:3002"].includes(origin)
    ) {
      return;
    }

    mfAngular.contentWindow.postMessage(
      { app: "MF_SHELL", event: data.event },
      "http://localhost:4200"
    );
    mfReact.contentWindow.postMessage(
      { app: "MF_SHELL", event: data.event },
      "http://localhost:3002"
    );
  });
}
