// @ts-nocheck

import {
  fetchedAndSavedAudit,
  metricsNames,
  fetchedCruxApiMetricDetailsInterface,
} from "../interfaces/cruxApi";
import { metricsConsts } from "./cruxConsts";

export const stripUrl = (url: string) => {
  const splitUrl = url
    .replace(/^(https?:\/\/)?(www\.)?/, "")
    .split("/")
    .filter((chunk) => chunk !== "");
  return splitUrl.length > 1 ? splitUrl.join("/") : splitUrl[0];
};

export const isMetricFailing = (
  audit: fetchedAndSavedAudit,
  metric: metricsNames
) => {
  const metricData: fetchedCruxApiMetricDetailsInterface =
    audit.results.record.metrics[metric];
  return metricData.percentiles.p75 > metricData.histogram[0].end;
};

export const labelMetric = (
  audit: fetchedAndSavedAudit,
  metric: metricsNames
) => {
  const metricData: fetchedCruxApiMetricDetailsInterface =
    audit.results.record.metrics[metric];
  if (metricData.percentiles.p75 <= metricData.histogram[0].end) {
    return "good";
  } else if (
    metricData.percentiles.p75 > metricData.histogram[0].end &&
    metricData.percentiles.p75 <= metricData.histogram[1].end
  ) {
    return "medium";
  } else {
    return "poor";
  }
};

export const getMetricStatusColorScheme = (
  audit: fetchedAndSavedAudit,
  metric: metricsNames
) => {
  const metricStatus = labelMetric(audit, metric);
  if (metricStatus === "good") {
    return "green";
  } else if (metricStatus === "medium") {
    return "yellow";
  } else {
    return "red";
  }
};

export const isUrlFailing = (audit: fetchedAndSavedAudit) => {
  let isFailing = undefined;
  for (const metric in audit?.results?.record?.metrics) {
    if (
      isMetricFailing(audit, metric) &&
      metricsConsts.find((metricConst) => metricConst.apiLabel === metric)
        ?.countForPassingAudit
    ) {
      isFailing = true;
      break;
    }
  }
  return isFailing;
};
