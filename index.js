import confetti from 'canvas-confetti';

confetti.create(null, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

console?.log('ready.');

const linkTpl = ({ local, stage, prod }) =>
  `<ul>
     <li><a href="${local}" target="_blank">${local}</a></li>
     <li><a href="${stage}" target="_blank">${stage}</a></li>
     <li><a href="${prod}" target="_blank">${prod}</a></li>
  </ul>`;

const sites = {
  'channel5.com': {
    local: 'http://local.channel5.com:3000/',
    stage: 'https://stage-www-channel5-com.webplex.vmn.io/',
    prod: 'https://prod-www-channel5-com.webplex.vmn.io/',
  },
  'bet.plus': {
    local: 'http://local.bet.plus:3000/',
    stage: 'https://stage-www-bet-plus.webplex.vmn.io/',
    prod: 'https://bet.plus/',
  },
  'smithsonianchannel.com': {
    local: 'http://local.smithsonianchannel.com:3000/',
    stage: 'https://stage-www-smithsonianchannel-com.webplex.vmn.io/',
    prod: 'https://www.smithsonianchannel.com/',
  },
};

const rawSites = [
  'bet.plus',
  'bet.com',
  'comedycentral.co.uk',
  'comedycentral.com.br',
  'comedycentral.com.ro',
  'comedycentral.es',
  'comedycentral.fr',
  'comedycentral.hu',
  'comedycentral.it',
  'comedycentral.la',
  'comedycentral.pl',
  'comedycentral.tv',
  'comedycentralafrica.com',
  'comedycentralarabia.com',
  'comedycentralasia.com',
  'kca.mundonick.com.br',
  'kca.mundonick.com',
  'kca.nick.com.pl',
  'kca.nick.de',
  'kca.nickelodeon.be',
  'kca.nickelodeon.dk',
  'kca.nickelodeon.es',
  'kca.nickelodeon.fr',
  'kca.nickelodeon.hu',
  'kca.nickelodeon.nl',
  'kca.nickelodeon.no',
  'kca.nickelodeon.pt',
  'kca.nickelodeon.ro',
  'kca.nickelodeon.ru',
  'kca.nickelodeon.se',
  'kca.nicktv.it',
  'kcamexico.com',
  'kidschoiceawardsmexico.mundonick.com',
  'la.nickjr.tv',
  'meuspremiosnick.com.br',
  'mtv-v1.com',
  'mtv.co.il',
  'mtv.co.za',
  'mtv.com.au',
  'mtv.com.br',
  'mtv.com',
  'mtv.de',
  'mtv.es',
  'mtv.it',
  'mtv.nl',
  'mtv.pl',
  'mtvasia.com',
  'mtvbase.com',
  'mtvema.com',
  'mtvjapan.com',
  'mtvla.com',
  'nick-video.com',
  'nick.com.pl',
  'www.nick.de',
  'nickatnite.com',
  'nickelodeon.com.br',
  'www.nickelodeon.es',
  'nickelodeon.fr',
  'nickelodeon.hu',
  'nickelodeon.la',
  'nickelodeon.nl',
  'nickelodeon.pt',
  'nickelodeonafrica.com',
  'nickelodeonjunior.fr',
  'nickjr.co.uk',
  'nickjr.com.au',
  'nickjr.com.br',
  'nickjr.com.pl',
  'nickjr.de',
  'nickjr.dk',
  'nickjr.es',
  'nickjr.it',
  'nickjr.nl',
  'nickjr.tv',
  'paramountchannel.com.br',
  'paramountnetwork.com',
  'paramountnetwork.es',
  'paramountnetwork.it',
  'slimefest.it',
  'www.smithsonianchannel.co.uk',
  'www.smithsonianchannel.com',
  'www.smithsonianchannellatam.com',
  'southpark.cc.com',
  'southpark.de',
  'southpark.lat',
  'southparkstudios.co.uk',
  'southparkstudios.com.br',
  'southparkstudios.com',
  'southparkstudios.nu',
  'supertv.it',
  'tvland.com',
  'vh1.com',
  'vidcon.com',
];

const otherSites = rawSites.map((rawSite) => ({
  [rawSite]: {
    local: `http://local.${rawSite}:3000/`,
    stage: `https://stage-www-${rawSite}.webplex.vmn.io/`,
    prod: `https://${rawSite}/`,
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
  .join('');

const list = document.querySelector('#websites-list');
const result = document.querySelector('#result');
list.innerHTML = options;
list.onchange = () => updateResult();
updateResult();
