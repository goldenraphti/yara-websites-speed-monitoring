import { cruxMetricsConstsInterface } from "../interfaces/cruxApi";

export const metricsConsts: cruxMetricsConstsInterface[] = [
  {
    acronym: "fcp",
    name: "First Contentful Paint",
    apiLabel: "first_contentful_paint",
    displayLabel: "FCP",
    unit: "ms",
    countForPassingAudit: false,
    displayInOverviewCards: true,
    fullOpacityInOverviewCards: false,
    orderInTags: 4,
  },
  {
    acronym: "lcp",
    name: "Largest Contentful Paint",
    apiLabel: "largest_contentful_paint",
    displayLabel: "LCP",
    unit: "ms",
    countForPassingAudit: true,
    displayInOverviewCards: true,
    fullOpacityInOverviewCards: true,
    orderInTags: 1,
  },
  {
    acronym: "fid",
    name: "First Input Delay",
    apiLabel: "first_input_delay",
    displayLabel: "FID",
    unit: "ms",
    countForPassingAudit: true,
    displayInOverviewCards: true,
    fullOpacityInOverviewCards: true,
    orderInTags: 2,
  },
  {
    acronym: "cls",
    name: "Cumulative Layout Shift",
    apiLabel: "cumulative_layout_shift",
    displayLabel: "CLS",
    unit: "ms",
    countForPassingAudit: true,
    displayInOverviewCards: true,
    fullOpacityInOverviewCards: true,
    orderInTags: 3,
  },
  {
    acronym: "er",
    name: "Experimental Responsiveness",
    apiLabel: "experimental_responsiveness",
    displayLabel: "ER",
    unit: "ms",
    countForPassingAudit: false,
    displayInOverviewCards: false,
    fullOpacityInOverviewCards: false,
    orderInTags: 5,
  },
];

export const metricsBarems = {
  metricsBarems1: {
    dateStart: "2022-01-01",
    cumulative_layout_shift: {
      good: {
        label: "good",
        start: "0.00",
        end: "0.10",
      },
      medium: {
        label: "needs improvement",
        start: "0.10",
        end: "0.25",
      },
      poor: {
        label: "poor",
        start: "0.25",
      },
    },
    experimental_responsiveness: {
      good: {
        label: "good",
        start: 0,
        end: 100,
      },
      medium: {
        label: "needs improvement",
        start: 100,
        end: 300,
      },
      poor: {
        label: "poor",
        start: 300,
      },
    },
    first_contentful_paint: {
      good: {
        label: "good",
        start: 0,
        end: 1800,
      },
      medium: {
        label: "needs improvement",
        start: 1800,
        end: 3000,
      },
      poor: {
        label: "poor",
        start: 3000,
      },
    },
    first_input_delay: {
      good: {
        label: "good",
        start: 0,
        end: 100,
      },
      medium: {
        label: "needs improvement",
        start: 100,
        end: 300,
      },
      poor: {
        label: "poor",
        start: 300,
      },
    },
    largest_contentful_paint: {
      good: {
        label: "good",
        start: 0,
        end: 2500,
      },
      medium: {
        label: "needs improvement",
        start: 2500,
        end: 4000,
      },
      poor: {
        label: "poor",
        start: 4000,
      },
    },
  },
};
