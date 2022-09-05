// @ts-nocheck

import { fetchedCruxApiDataInterface } from '../interfaces/cruxApi';
import { exportData } from '../utils/utils';
const cruxApiKey = process.env.NEXT_PUBLIC_GOOGLE_CRUX_API_KEY;

const CrUXApiUtil = {
  query: async function (requestBody, apiKey: string) {
    const endpointUrl =
      'https://chromeuxreport.googleapis.com/v1/records:queryRecord';
    const resp = await fetch(`${endpointUrl}?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    const json = await resp.json();
    if (!resp.ok) {
      console.log('❌', json.error.message, requestBody?.origin, requestBody);
      // throw new Error(json.error.message, requestBody?.origin);
    }
    return json;
  },
};

// Gather the data for example.com and display it
async function cruxApiFetcher(
  urlToAudit: URL,
  deviceTargeted: deviceTargets,
  methodToSaveResultsInArray,
  methodToSaveResultsInArrayForPhones,
  methodToSaveResultsInArrayForAll,
  methodToAssignResultsToDisplayByDevice,
  deviceSelected: deviceTargets
) {
  const json: fetchedCruxApiDataInterface = !deviceTargeted
    ? await CrUXApiUtil.query({ origin: urlToAudit }, cruxApiKey)
    : await CrUXApiUtil.query(
        { origin: urlToAudit, formFactor: deviceTargeted },
        cruxApiKey
      );
  if (json && json?.record) {
    const record = {
      url: urlToAudit,
      deviceTargeted: deviceTargeted ?? 'ALL',
      results: json,
      extractedResults: {
        fcp: json.record.metrics?.first_contentful_paint?.percentiles.p75,
        lcp: json.record.metrics?.largest_contentful_paint?.percentiles.p75,
        cls: json.record.metrics?.cumulative_layout_shift?.percentiles.p75,
        fid: json.record.metrics?.first_input_delay?.percentiles.p75,
        er: json.record.metrics?.experimental_responsiveness?.percentiles.p75,
      },
      timestamp: new Date().getTime(),
    };
    methodToSaveResultsInArray(resultsArray => [
      ...resultsArray,
      { ...record },
    ]);
    if (deviceTargeted === 'PHONE') {
      methodToSaveResultsInArrayForPhones(resultsArray => [
        ...resultsArray,
        { ...record },
      ]);
      if (deviceSelected === 'PHONE') {
        methodToAssignResultsToDisplayByDevice(resultsArray => [
          ...resultsArray,
          { ...record },
        ]);
      }
    } else {
      methodToSaveResultsInArrayForAll(resultsArray => [
        ...resultsArray,
        { ...record },
      ]);
      if (deviceSelected === 'ALL') {
        methodToAssignResultsToDisplayByDevice(resultsArray => [
          ...resultsArray,
          { ...record },
        ]);
      }
    }
  }
}

export const fetchCruxApiAudits = (
  urls: URL[],
  methodToSaveResultsInArray,
  methodToSaveResultsInArrayForPhones,
  methodToSaveResultsInArrayForAll,
  methodToAssignResultsToDisplayByDevice,
  deviceSelectedForFiltering: deviceTargets
) => {
  const devices: deviceTargets = ['PHONE', null];
  let promises = devices.map(device => {
    urls.map(url => {
      return cruxApiFetcher(
        url,
        device,
        methodToSaveResultsInArray,
        methodToSaveResultsInArrayForPhones,
        methodToSaveResultsInArrayForAll,
        methodToAssignResultsToDisplayByDevice,
        deviceSelectedForFiltering
      );
    });
  });
  return Promise.all(promises)
    .then(results => {
      return results;
    })
    .catch(err => {
      console.log('err', err);
      return err;
    });
};

export const exportFullAuditsAllDevices = results => {
  const resultsToExport = {
    date: new Date().toISOString(),
    dateParsedLocale: new Date().toLocaleDateString(),
    legacyAudit: true,
    legacyAuditType: 4,
    legacyAuditId: `${new Date().toLocaleDateString()}-legacy-audit`,
    audits: results,
  };
  exportData(resultsToExport);
};
