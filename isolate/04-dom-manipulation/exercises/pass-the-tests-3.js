"use strict";

const divEl = document.createElement("ul");
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + " (before)", divEl.cloneNode(true));

// --- write some code ---
const innerHTMLs = ["a", "b", "c", "d"];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = document.createElement("td"); // Creates a td on each iteration
    tdEl.innerHTML = innerHTMLs.shift(); // add each element from the beggining
    trEl.appendChild(tdEl); // add the node
  }
}

// --- --- --- --- --- ---

console.log(divEl.nodeName + " (after)", divEl.cloneNode(true));

const expectedInnerHTMLs = ["a", "b", "c", "d"];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
