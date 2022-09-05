export interface cruxReportMetricsAcronymsInterface {
  jsonName: string
  displayedAcronym: string
  unit: string
}

export interface lighthouseReportMetricsDetailsInterface {
  jsonName: string
  displayedAcronym: string
  unit: string
  grading: [
    {
      slowLimit: number
      fastLimit: number
    },
  ]
}

export type metricsDetailsInterface =
  | cruxReportMetricsAcronymsInterface
  | lighthouseReportMetricsDetailsInterface

export interface colorCodeInterface {
  [key: string]: {
    bg: string
    border: string
    text: string
  }
}
