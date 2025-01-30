class LoaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["symbol"];
  }

  attributeChangedCallback(name) {
    if (name === "symbol") {
      this.render();
    }
  }

  render() {
    const symbol = this.getAttribute("symbol") || "⬤";


    this.shadowRoot.innerHTML = `
<style>   
:root {
  color-scheme: light dark;
}
i {
  font-family: system-ui, sans-serif;
  text-align: center;
  display: inline-block;
  font-size: 100%;
  margin:0;
  padding:0;
  font-style: inherit;
  color: var(--loader-color, light-dark(black, white));
  animation: loading 1.4s infinite ease-in-out;
}

@keyframes loading {
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

i:nth-child(1) {
  animation-delay: -0.32s;
}
i:nth-child(2) {
  animation-delay: -0.16s;
}
</style>
<i>${symbol}</i><i>${symbol}</i><i>${symbol}</i>
`;
  }
}

customElements.define("illo-loader", LoaderComponent);
