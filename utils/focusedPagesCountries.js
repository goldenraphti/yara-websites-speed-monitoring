const focusedPagesCountries = [
  {
    country: `YARA BRASIL`,
    pagesToAudit: [
      `https://www.yarabrasil.com.br/`,
      `https://www.yarabrasil.com.br/nutricao-de-plantas/produtos/`,
      `https://www.yarabrasil.com.br/sobre-yara/carreiras/`,
      `https://www.yarabrasil.com.br/nutricao-de-plantas/`,
      `https://www.yarabrasil.com.br/pagina-de-busca/`,
    ],
  },
  {
    countryName: `YARA MEXICO`,
    pagesToAudit: [
      `https://www.yara.com.mx/nutricion-vegetal/productos/`,
      `https://www.yara.com.mx/`,
      `https://www.yara.com.mx/nutricion-vegetal/productos/yaramila/`,
      `https://www.yara.com.mx/nutricion-vegetal/productos/yaramila/yaramila-star/`,
      `https://www.yara.com.mx/nutricion-vegetal/productos/yaramila/yaramila-complex/`,
    ],
  },
  {
    countryName: `YARA UK`,
    pagesToAudit: [
      `https://www.yara.co.uk/`,
      `https://www.yara.co.uk/crop-nutrition/fertiliser/`,
      `https://www.yara.co.uk/crop-nutrition/farmers-toolbox/conversion-calculator/`,
      `https://www.yara.co.uk/crop-nutrition/fertiliser/compound/`,
      `https://www.yara.co.uk/crop-nutrition/fertiliser/liquid/`,
    ],
  },
  {
    countryName: `YARA US`,
    pagesToAudit: [
      `https://www.yara.us/chemical-and-environmental-solutions/diesel-exhaust-fluid/def-for-commercial-vehicles/def-filling-stations/`,
      `https://www.yara.us/crop-nutrition/yaravera-amidas-n-s-in-one/`,
      `https://www.yara.us/crop-nutrition/yaravita-procote/has-you-covered/`,
      `https://www.yara.us/`,
      `https://www.yara.us/crop-nutrition/fertilizer-products/`,
    ],
  },
  {
    countryName: `YARA FRANCE`,
    pagesToAudit: [
      `https://www.yara.fr/`,
      `https://www.yara.fr/fertilisation/solutions-pour-cultures/ble/production-mondiale-ble/`,
      `https://www.yara.fr/fertilisation/produits-et-solutions-pour-la-fertilisation/yaramila/`,
      `https://www.yara.fr/fertilisation/produits-et-solutions-pour-la-fertilisation/yaravita/`,
      `https://www.yara.fr/fiches-de-donnees-securite/`,
    ],
  },
  {
    countryName: `YARA GERMANY`,
    pagesToAudit: [
      `https://www.yara.de/`,
      `https://www.yara.de/pflanzenernaehrung/duengemittel/`,
      `https://www.yara.de/pflanzenernaehrung/duengemittel/yarabela/yarabela-sulfan/`,
      `https://www.yara.de/pflanzenernaehrung/duengemittel/yaramila/`,
      `https://www.yara.de/pflanzenernaehrung/duengemittel/yarabela/`,
    ],
  },
  {
    countryName: `YARA SPAIN`,
    pagesToAudit: [
      `https://www.yara.es/`,
      `https://www.yara.es/nutricion-vegetal/aguacate/plagas-enfermedades/`,
      `https://www.yara.es/nutricion-vegetal/productos/`,
      `https://www.yara.es/nutricion-vegetal/productos/yaramila/`,
      `https://www.yara.es/nutricion-vegetal/productos/yaramila/yaramila-olivo/`,
    ],
  },
  {
    countryName: `YARA FINLAND`,
    pagesToAudit: [
      `https://www.yara.fi/`,
      `https://www.yara.fi/lannoitus/lannoitteet/yaramila/`,
      `https://www.yara.fi/tietoa-yarasta/yara-suomi/toimipaikat/siilinjarvi/`,
      `https://www.yara.fi/lannoitus/lannoitteet/`,
      `https://www.yara.fi/yhteystiedot/`,
    ],
  },
  {
    countryName: `YARA COLOMBIA`,
    pagesToAudit: [
      `https://www.yara.com.co/`,
      `https://www.yara.com.co/nutricion-vegetal/productos/`,
      `https://www.yara.com.co/nutricion-vegetal/productos/otros-productos/`,
      `https://www.yara.com.co/nutricion-vegetal/productos/yaramila/`,
      `https://www.yara.com.co/buscar/`,
    ],
  },
  {
    countryName: `YARA INDIA`,
    pagesToAudit: [
      `https://www.yara.in//crop-nutrition/fertiliser-choices/`,
      `https://www.yara.in//crop-nutrition/fertiliser-choices/yaramila/yaramila-complex/`,
      `https://www.yara.in/`,
      `https://www.yara.in//crop-nutrition/fertiliser-choices/yaravita/`,
      `https://www.yara.in//crop-nutrition/`,
    ],
  },
  {
    countryName: `YARA ITALY`,
    pagesToAudit: [
      `https://www.yara.it/nutrizionedellecolture/prodotti/`,
      `https://www.yara.it/nutrizionedellecolture/prodotti/yaramila/`,
      `https://www.yara.it/`,
      `https://www.yara.it/nutrizionedellecolture/`,
      `https://www.yara.it/cerca-risultati/`,
    ],
  },
  {
    countryName: `YARA.COM`,
    pagesToAudit: [
      `https://www.yara.com/`,
      `https://www.yara.com/careers/`,
      `https://www.yara.com/investor-relations/`,
      `https://www.yara.com/this-is-yara/yara-at-a-glance/`,
      `https://www.yara.com/news-and-media/news/`,
    ],
  },
];

// example of how to use the lighthouse CLI audit function in terminal, for a given URL
const lihthouseCliTerminalCommandBeforeConfigFile =
  "lighthouse https://www.yara.co.uk/crop-nutrition/fertiliser/";

// this one IS working with the cookies, BUT when saved the \ disapear, so you need to add them again
// https://www.npmjs.com/package/lighthouse
const workingLighthouseCommand =
  'lighthouse https://int.yara.es --extra-headers "{"Cookie":"CookieAcceptance=true"}"';

const lighthouseCLITerminalCommand2 =
  'lighthouse https://www.yara.co.uk/crop-nutrition/fertiliser/ --extra-headers "{"Cookie":CookieInformationConsent=%7B%22website_uuid%22%3A%220a2ac837-83b6-4216-91a3-3bd10d5bdab4%22%2C%22timestamp%22%3A%222022-02-28T15%3A45%3A34.108Z%22%2C%22consent_url%22%3A%22https%3A%2F%2Fwww.yara.it%2F%22%2C%22consent_website%22%3A%22Local%20Sites%22%2C%22consent_domain%22%3A%22www.yara.it%22%2C%22user_uid%22%3A%22d4b300fa-4dab-44e4-8b97-dde3447a6d3b%22%2C%22consents_approved%22%3A%5B%22cookie_cat_necessary%22%2C%22cookie_cat_functional%22%2C%22cookie_cat_statistic%22%2C%22cookie_cat_marketing%22%2C%22cookie_cat_unclassified%22%5D%2C%22consents_denied%22%3A%5B%5D%2C%22user_agent%22%3A%22Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010.15%3B%20rv%3A97.0%29%20Gecko%2F20100101%20Firefox%2F97.0%22%7D;"}"';

// running lighthouse programatically (https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/readme.md#using-programmatically)
const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance"],
    port: chrome.port,
    extraHeaders: JSON.stringify({
      Cookie: "CookieAcceptance=true",
      // "CookieInformationConsent=%7B%22website_uuid%22%3A%220a2ac837-83b6-4216-91a3-3bd10d5bdab4%22%2C%22timestamp%22%3A%222022-02-28T15%3A45%3A34.108Z%22%2C%22consent_url%22%3A%22https%3A%2F%2Fwww.yara.it%2F%22%2C%22consent_website%22%3A%22Local%20Sites%22%2C%22consent_domain%22%3A%22www.yara.it%22%2C%22user_uid%22%3A%22d4b300fa-4dab-44e4-8b97-dde3447a6d3b%22%2C%22consents_approved%22%3A%5B%22cookie_cat_necessary%22%2C%22cookie_cat_functional%22%2C%22cookie_cat_statistic%22%2C%22cookie_cat_marketing%22%2C%22cookie_cat_unclassified%22%5D%2C%22consents_denied%22%3A%5B%5D%2C%22user_agent%22%3A%22Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010.15%3B%20rv%3A97.0%29%20Gecko%2F20100101%20Firefox%2F97.0%22%7D;",
    }),
  };
  const runnerResult = await lighthouse(
    // "https://www.yara.co.uk/crop-nutrition/fertiliser/",
    "https://int.yara.co.uk/crop-nutrition/fertiliser/compound/",
    options
  );

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync("lhreport.html", reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log("Report is done for", runnerResult.lhr.finalUrl);
  console.log(
    "Performance score was",
    runnerResult.lhr.categories.performance.score * 100
  );

  await chrome.kill();
})();

// lighthouse config for performance audit (https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/perf-config.js)

/** @type {LH.Config.Json} */
const perfConfig = {
  extends: "lighthouse:default",
  settings: {
    throttlingMethod: "devtools",
    onlyCategories: ["performance"],
    // extraHeaders: JSON.stringify({
    //   Cookie:
    //     "CookieInformationConsent=%7B%22website_uuid%22%3A%220a2ac837-83b6-4216-91a3-3bd10d5bdab4%22%2C%22timestamp%22%3A%222022-02-28T15%3A45%3A34.108Z%22%2C%22consent_url%22%3A%22https%3A%2F%2Fwww.yara.it%2F%22%2C%22consent_website%22%3A%22Local%20Sites%22%2C%22consent_domain%22%3A%22www.yara.it%22%2C%22user_uid%22%3A%22d4b300fa-4dab-44e4-8b97-dde3447a6d3b%22%2C%22consents_approved%22%3A%5B%22cookie_cat_necessary%22%2C%22cookie_cat_functional%22%2C%22cookie_cat_statistic%22%2C%22cookie_cat_marketing%22%2C%22cookie_cat_unclassified%22%5D%2C%22consents_denied%22%3A%5B%5D%2C%22user_agent%22%3A%22Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010.15%3B%20rv%3A97.0%29%20Gecko%2F20100101%20Firefox%2F97.0%22%7D;",
    // }),
    extraHeaders:
      '{"Cookie": "CookieInformationConsent=%7B%22website_uuid%22%3A%220a2ac837-83b6-4216-91a3-3bd10d5bdab4%22%2C%22timestamp%22%3A%222022-02-28T15%3A45%3A34.108Z%22%2C%22consent_url%22%3A%22https%3A%2F%2Fwww.yara.it%2F%22%2C%22consent_website%22%3A%22Local%20Sites%22%2C%22consent_domain%22%3A%22www.yara.it%22%2C%22user_uid%22%3A%22d4b300fa-4dab-44e4-8b97-dde3447a6d3b%22%2C%22consents_approved%22%3A%5B%22cookie_cat_necessary%22%2C%22cookie_cat_functional%22%2C%22cookie_cat_statistic%22%2C%22cookie_cat_marketing%22%2C%22cookie_cat_unclassified%22%5D%2C%22consents_denied%22%3A%5B%5D%2C%22user_agent%22%3A%22Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010.15%3B%20rv%3A97.0%29%20Gecko%2F20100101%20Firefox%2F97.0%22%7D;"}',
  },
};
