import "./style.css";
import rings from "/rings.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Aron & Janneke</h1>
    <img src="${rings}" class='icon' /><h3>2025-11-01</h3>
  </div>
`;
