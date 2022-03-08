import confetti from "canvas-confetti";
import { sites, rawSites } from "./sites";

confetti.create(null, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

const linkTpl = ({ local, stage, prod }) =>
  `<ul>
     <li><a href="${local}" target="_blank">${local}</a></li>
     <li><a href="${stage}" target="_blank">${stage}</a></li>
     <li><a href="${prod}" target="_blank">${prod}</a></li>
  </ul>`;

const otherSites = rawSites.map((rawSite) => ({
  [rawSite]: {
    local: `http://local.${rawSite}:3000`,
    stage: `https://stage-www-${rawSite.replaceAll(".", "-")}.webplex.vmn.io`,
    prod: `https://${rawSite}`,
  },
}));

const sitesEnhanced = otherSites.reduce(
  (acc, curr) => ({ ...curr, ...acc }),
  sites
);

const updateResult = () => {
  result.innerHTML = linkTpl(sitesEnhanced[list.value]);
};

const options = Object.keys(sitesEnhanced)
  .reverse()
  .map((name) => `<option value="${name}">${name}</option>`)
  .join("");
const list = document.querySelector("#websites-list");
const result = document.querySelector("#result");
list.innerHTML = options;
list.onchange = () => updateResult();
updateResult();

document
  .querySelector(".websites-form")
  .addEventListener("submit", () =>
    Object.values(sitesEnhanced[list.value]).forEach((url) =>
      window.open(url, "_blank")
    )
  );
