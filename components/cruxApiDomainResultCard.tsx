// @ts-nocheck

import { fetchedAndSavedAudit, metricsNames } from "../interfaces/cruxApi";
import { Tag } from "@chakra-ui/react";
import {
  stripUrl,
  isUrlFailing,
  getMetricStatusColorScheme,
} from "../utils/cruxUtils";
import { metricsConsts } from "../utils/cruxConsts";
import { countryNamesURLAndCountryCode } from "../utils/countryNames";

export interface cruxCWVCardInterface {
  audit: fetchedAndSavedAudit;
  index: number;
  lowOpacityFcp: boolean;
}

export function CruxCWVCard({
  audit,
  index,
  lowOpacityFcp = true,
}: cruxCWVCardInterface) {
  const nameToDisplay =
    countryNamesURLAndCountryCode?.find((country) =>
      country.url.includes(audit.url)
    )?.nameToDisplay ?? stripUrl(audit.url);

  return (
    <div
      className={`px-2 md:px-6 py-4 rounded rounded-xl border flex flex-col items-center flex-1 basis-2/5 md:flex-initial ${
        isUrlFailing(audit)
          ? `bg-red-100 border-red-200`
          : `bg-green-100 border-green-200`
      }`}
      key={audit.url}
    >
      <h2 className={`font-bold text-lg md:text-xl mb-3`}>{nameToDisplay}</h2>
      <div className='flex flex-wrap'>
        {Object.entries(audit.results.record.metrics)
          .filter(
            (metric) =>
              metricsConsts.find(
                (metricConst) => metricConst.apiLabel === metric[0]
              )?.displayInOverviewCards
          )
          .sort(function compareFn(a, b) {
            return (
              metricsConsts.find((metricConst) => metricConst.apiLabel === a[0])
                ?.orderInTags -
              metricsConsts.find((metricConst) => metricConst.apiLabel === b[0])
                ?.orderInTags
            );
          })
          .map((metric: metricsNames, i: number) => {
            return (
              <Tag
                size={"sm"}
                key={metric[0]}
                variant='solid'
                colorScheme={getMetricStatusColorScheme(audit, metric[0])}
                className={`m-1 ${
                  !metricsConsts.find(
                    (metricConst) => metricConst.apiLabel === metric[0]
                  )?.fullOpacityInOverviewCards
                    ? "opacity-30 hidden md:block"
                    : ""
                }`}
              >
                {metric[0]
                  .split("_")
                  .map((word) => word[0])
                  .join("")}
              </Tag>
            );
          })}
      </div>
    </div>
  );
}
