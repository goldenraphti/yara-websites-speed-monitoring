export interface requestBodyInterface {
  origin?: string;
  url?: string;
  formFactor?: string;
  metrics?: Array<string>;
}

export interface fetchedCruxApiMetricHistogramInterface {
  end: number;
  start: number;
  density: number;
}
[];

export interface fetchedCruxApiMetricDetailsInterface {
  histogram: fetchedCruxApiMetricHistogramInterface[];
  percentiles: {
    p75: number;
  };
}

export type metricsNames =
  | "first_contentful_paint"
  | "largest_contentful_paint"
  | "first_input_delay"
  | "cumulative_layout_shift"
  | "experimental_responsiveness";

export interface fetchedCruxApiDataMetricsInterface {
  first_contentful_paint: fetchedCruxApiMetricDetailsInterface;
  largest_contentful_paint: fetchedCruxApiMetricDetailsInterface;
  first_input_delay: fetchedCruxApiMetricDetailsInterface;
  cumulative_layout_shift: fetchedCruxApiMetricDetailsInterface;
  experimental_responsiveness: fetchedCruxApiMetricDetailsInterface;
}

export interface fetchedCruxApiDataInterface {
  record: {
    key: {
      origin: string;
    };
    metrics: fetchedCruxApiDataMetricsInterface;
  };
}

export interface fetchedAndSavedAudit {
  url: string;
  results: fetchedCruxApiDataInterface;
  extractedResults: {
    fcp: number;
    lcp: number;
    cls: number;
    fid: number;
    er: number;
  };
  timestamp: number;
  deviceTargeted: deviceTargets;
}

export interface processedFetchedMetricData {
  acronym: string;
  name: string;
  labelsBins: Array<{
    label: "good" | "needs improvement" | "poor";
    percentage: number;
    start: number;
    end?: number;
    density: number;
  }>;
}

export interface cruxMetricsConstsInterface {
  acronym: "fcp" | "lcp" | "cls" | "fid" | "er";
  name:
    | "First Contentful Paint"
    | "Largest Contentful Paint"
    | "First Input Delay"
    | "Cumulative Layout Shift"
    | "Experimental Responsiveness";
  apiLabel:
    | "first_contentful_paint"
    | "largest_contentful_paint"
    | "first_input_delay"
    | "cumulative_layout_shift"
    | "experimental_responsiveness";
  displayLabel: CoreWebVitalsAcronyms;
  unit: "ms";
  countForPassingAudit: boolean;
  displayInOverviewCards: boolean;
  fullOpacityInOverviewCards: boolean;
  orderInTags: number;
}

export type deviceTargetsInApi = "PHONE" | "TABLET" | "DESKTOP" | null;
export type deviceTargets = "PHONE" | "TABLET" | "DESKTOP" | "ALL";

export type CoreWebVitalsAcronyms = "FCP" | "LCP" | "FID" | "CLS" | "ER";

export interface auditsJsonInterface {
  date: string;
  legacyAudit: boolean;
  legacyAuditType: number;
  legacyAuditId: string;
  audits: fetchedAndSavedAudit[];
}
