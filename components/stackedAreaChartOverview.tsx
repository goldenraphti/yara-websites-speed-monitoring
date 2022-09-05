// @ts-nocheck
import { useState, useEffect, useCallback } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { isUrlFailing, stripUrl } from "../utils/cruxUtils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  RadioGroup,
} from "@chakra-ui/react";
import { metricsBarems } from "../utils/cruxConsts";
import { getMedian } from "../utils/utils";
import { statusColors } from "../utils/consts";
import {
  auditsJsonInterface,
  CoreWebVitalsAcronyms,
  fetchedAndSavedAudit,
  metricsNames,
} from "../interfaces/cruxApi";

import { savedAudits } from "../savedAuditsFetched/index";

const processAuditsForOverviewAreaChart = (allAudits) => {
  const dataForChart = [];
  return dataForChart;
};

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: `var(--primary-text-color-full)`,
          color: "white",
          borderColor: `var(--primary-text-color-full)`,
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function StackedAreaChartOverview({
  resultsAllAudits: [],
  deviceSelected: deviceSelected,
}) {
  const graphOptions = ["# domains", "LCP", "FID", "CLS"];

  const [chartMode, setChartMode] = useState("# domains");

  const allAudits = [...savedAudits];

  const processChartData = (chartModeToProcess = chartMode) => {
    if (chartModeToProcess === "# domains") {
      setData([]);
      allAudits.map((audit) => processOldAuditsForOverviewAreaChart(audit));
    } else {
      setData([]);
      allAudits.map((audit) =>
        processOldAuditsForCWV(audit, chartModeToProcess)
      );
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "chart display",
    defaultValue: "# domains",
    onChange: (e) => {
      setChartMode(e);
      processChartData(e);
    },
  });

  const group = getRootProps();

  const [data, setData] = useState([]);
  const [barem, setBarem] = useState({});

  const processOldAuditsForOverviewAreaChart = (oldAuditJson) => {
    const pointForChartData = {};
    console.log("test");
    const passedAudits = oldAuditJson?.audits
      ?.filter((audit) => filterAuditJsonAuditsByDevice(audit, oldAuditJson))
      .filter((audit) => !isUrlFailing(audit)).length;
    pointForChartData.date = new Date(oldAuditJson?.date);
    pointForChartData.amountAuditsPassed = passedAudits;
    pointForChartData.failingAudits =
      oldAuditJson?.audits?.filter((audit) =>
        filterAuditJsonAuditsByDevice(audit, oldAuditJson)
      ).length - passedAudits;
    setData((data) => [...data, pointForChartData]);
  };

  const getFullWordModeForChartMode = (
    chartModeToCheck: CoreWebVitalsAcronyms = chartMode
  ): metricsNames => {
    let mode: metricsNames;
    if (chartModeToCheck === "LCP") {
      mode = "largest_contentful_paint";
    } else if (chartModeToCheck === "FID") {
      mode = "first_input_delay";
    } else if (chartModeToCheck === "CLS") {
      mode = "cumulative_layout_shift";
    }
    return mode;
  };

  const shouldAuditsJsonBeDeviceFiltered = (
    auditJson: auditsJsonInterface
  ): boolean => {
    return (
      auditJson?.legacyAuditType > 1 &&
      auditJson.audits.some((audit) => audit?.deviceTargeted)
    );
  };

  const filterAuditJsonAuditsByDevice = (
    audit: fetchedAndSavedAudit,
    oldAuditJson: auditsJsonInterface
  ): fetchedAndSavedAudit =>
    audit.deviceTargeted === deviceSelected ||
    !shouldAuditsJsonBeDeviceFiltered(oldAuditJson);

  const processOldAuditsForCWV = (
    oldAuditJson: auditsJsonInterface,
    CWV: CoreWebVitalsAcronyms
  ) => {
    const pointForChartData = {};
    let mode = getFullWordModeForChartMode(CWV);

    pointForChartData.date = new Date(oldAuditJson?.date);
    let unorderedStoredValues = [];
    oldAuditJson?.audits
      ?.filter((audit) => filterAuditJsonAuditsByDevice(audit, oldAuditJson))
      .map((audit, i) => {
        let newValue = audit?.results?.record?.metrics[mode]?.percentiles?.p75;
        // if newValue is a string, connvert it to number
        if (typeof newValue === "string") {
          newValue = parseFloat(newValue);
        }
        if (newValue !== null && newValue !== undefined) {
          unorderedStoredValues.push(newValue);
        }
        const auditUrl = stripUrl(
          audit?.url ?? audit.results.record.key.origin
        );
        pointForChartData[stripUrl(auditUrl)] = newValue;
      });

    const averageValue =
      unorderedStoredValues.reduce((a, b) => a + b, 0) /
      unorderedStoredValues.length;
    pointForChartData.averageValue = averageValue;
    const medianValue = getMedian(unorderedStoredValues);
    pointForChartData.medianValue = medianValue;
    setData((data) => [...data, pointForChartData]);
    setBarem((barem) => metricsBarems.metricsBarems1[mode]);
  };

  const colorLine = (
    value: number,
    isFullOpacity: boolean = true
  ): statusColor => {
    const mode: metricsNames = getFullWordModeForChartMode(chartMode);
    const barem = metricsBarems.metricsBarems1[mode];
    if (value < barem.good.end) {
      return isFullOpacity ? statusColors.good : statusColors.goodLowOpacity;
    } else if (value < barem.medium.end) {
      return isFullOpacity
        ? statusColors.medium
        : statusColors.mediumLowOpacity;
    } else if (value && value > barem.poor.start) {
      return isFullOpacity ? statusColors.fail : statusColors.failLowOpacity;
    } else {
      return "grey";
    }
  };

  const getHighestBaremForChartModeChart = (chartsData) => {
    const mode: metricsNames = getFullWordModeForChartMode(chartMode);
    const barems = metricsBarems.metricsBarems1[mode];
    const groupedValues = [];
    chartsData.map((auditSavedValues) => {
      for (const value in auditSavedValues) {
        if (auditSavedValues[value] && value !== "date") {
          groupedValues.push(auditSavedValues[value]);
        }
      }
    });
    const highestValue = Math.max(...groupedValues);
    let baremOfHighestValue;
    for (const barem in barems) {
      if (
        barems[barem].start <= highestValue &&
        highestValue <= barems[barem]?.end
      ) {
        baremOfHighestValue = barems[barem];
      }
    }
    return baremOfHighestValue;
  };

  const formatXAxis = (tickItem) => new Date(tickItem).toLocaleDateString();

  useEffect(() => {
    processChartData(chartMode);
    resetFullOpacityLegend();
  }, []);

  const [opacity, setOpacity] = useState({});

  const handleMouseEnterChartsLegend = useCallback(
    (o) => {
      const { dataKey } = o;
      const newLowOpacity = {};
      getAllChartKeys().map((key) => {
        newLowOpacity[key] = 0.2;
      });
      setOpacity({ ...newLowOpacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeaveChartsLegend = useCallback(
    (o) => {
      resetFullOpacityLegend();
    },
    [opacity, setOpacity]
  );

  const resetFullOpacityLegend = () => {
    const newFullOpacity = {};
    getAllChartKeys().map((key) => {
      newFullOpacity[key] = 1;
    });
    setOpacity({ ...newFullOpacity });
  };

  const getAllChartKeys = (): string[] => {
    const store = [];
    data.map((audit) => {
      for (const key in audit) {
        if (key !== "date" && store.includes(key) === false) {
          store.push(key);
        }
      }
    });
    return store;
  };

  return (
    <div className={`flex flex-col`}>
      <div className={`place-self-center pt-6 pb-4`}>
        <HStack {...group} key='buttons'>
          {graphOptions.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </div>
      {chartMode === "# domains" ? (
        <div style={{ width: "100%", height: 300 }} key='chart'>
          <ResponsiveContainer key={"responsive-stacked-area-chart"}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' tickFormatter={formatXAxis} scale='time' />
              <YAxis />
              <Tooltip
                contentStyle={{ opacity: "0.9" }}
                labelFormatter={(value) =>
                  new Date(value)?.toLocaleDateString()
                }
              />
              <>
                <Area
                  type='monotone'
                  dataKey='amountAuditsPassed'
                  stackId='1'
                  stroke='green'
                  fill='lightgreen'
                />
                <Area
                  type='monotone'
                  dataKey='failingAudits'
                  stackId='1'
                  stroke='red'
                  fill='pink'
                />
              </>
              {/* timeline references */}
              <ReferenceLine
                x={new Date("11/03/2022")}
                stroke='green'
                label='deploy 1'
                ifOverflow='extendDomain'
              />
              <ReferenceLine
                x={new Date("30/03/2022")}
                stroke='green'
                label='deploy 2'
                ifOverflow='extendDomain'
              />
              <ReferenceLine
                x={new Date("01/04/2022")}
                stroke='green'
                label='start measuring phone only'
                ifOverflow='extendDomain'
              />
              {/* end timeline references */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div style={{ width: "100%", height: 700 }}>
          <ResponsiveContainer key={"responsive-line-chart"}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' tickFormatter={formatXAxis} scale='time' />
              <YAxis unit={"ms"} />
              <Tooltip
                contentStyle={{ opacity: "0.9" }}
                labelFormatter={(value) =>
                  new Date(value)?.toLocaleDateString()
                }
              />
              <Legend
                onMouseEnter={handleMouseEnterChartsLegend}
                onMouseLeave={handleMouseLeaveChartsLegend}
              />
              {Object.keys(data[0])
                .filter((key) => key !== "date")
                .map((key) => {
                  let strokeColor;
                  if (key === "averageValue") {
                    strokeColor = "blue";
                  } else if (key === "medianValue") {
                    strokeColor = "cornflowerblue";
                  } else {
                    strokeColor = colorLine(
                      data.at(-1)[key] ?? data.at(-2)[key],
                      false
                    );
                  }
                  const strokeWidth =
                    key === "averageValue" || key === "medianValue"
                      ? "3"
                      : "1.5";

                  return (
                    <Line
                      connectNulls
                      type='monotone'
                      dataKey={key}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      activeDot={{ r: 8 }}
                      key={key}
                      strokeOpacity={opacity[key]}
                    />
                  );
                })}
              {Object.keys(barem).map((key, i) => {
                let color;
                const highestBaremInUse = parseFloat(
                  getHighestBaremForChartModeChart(data)?.end
                );
                console.log("zwing", highestBaremInUse);
                if (key === "good") {
                  color = "green";
                } else if (key === "medium") {
                  color = "orange";
                } else if (key === "poor") {
                  color = "#C40082";
                }
                return (
                  <>
                    {highestBaremInUse && (
                      <ReferenceLine y={highestBaremInUse} alwaysShow />
                    )}
                    <ReferenceArea
                      y1={barem[key].start}
                      y2={barem[key].end}
                      stroke={color}
                      strokeOpacity={0.2}
                      label={key}
                      fill={color}
                      opacity={0.4}
                      isFront={true}
                      key={key}
                    />
                  </>
                );
              })}
              {/* timeline references */}
              <ReferenceLine
                x={new Date("2022-04-01")}
                stroke='green'
                label='deploy 1'
                key={1}
                ifOverflow='extendDomain'
              />
              <ReferenceLine
                x={new Date("2022/03/30")}
                stroke='green'
                label='deploy 2'
                key={2}
                ifOverflow='extendDomain'
              />
              <ReferenceLine
                x={new Date("2022/04/01")}
                stroke='green'
                label='start measuring phone only'
                key={3}
                ifOverflow='extendDomain'
              />
              {/* end timeline references */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
