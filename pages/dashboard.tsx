// @ts-nocheck

import { useState } from "react";
import React from "react";
import Head from "next/head";
import { urlsShortList, fullYaraWebsitesUrls } from "../utils/auditsToRun";
import { Progress, Input, Text, ButtonGroup } from "@chakra-ui/react";
import {
  fetchCruxApiAudits,
  exportFullAuditsAllDevices,
} from "../utils/cruxApiFunctions";
import {
  LightningBoltIcon,
  DownloadIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { CruxCWVCard } from "../components/cruxApiDomainResultCard";
import { isUrlFailing } from "../utils/cruxUtils";
import { isAuditFilteredByText } from "../utils/countryNames";
import { StackedAreaChartOverview } from "../components/stackedAreaChartOverview";

export default function DashboardNew() {
  const [resultsAllAudits, setResultsAllAudits] = useState([]);
  const [resultsAllAuditsOnPhoneDevices, setResultsAllAuditsOnPhoneDevices] =
    useState([]);
  const [resultsAllAuditsOnAllDevices, setResultsAllAuditsOnAllDevices] =
    useState([]);
  const [deviceSelected, setDeviceSelected] = useState("PHONE");
  const [countryFilterText, setCountryFilterText] = useState("");
  const handleChangeCountryFilterText = (event) => {
    const filterText = event.target.value;
    setCountryFilterText(filterText);
  };
  const [resultsToDisplay, setResultsToDisplay] = useState([]);

  const devicesPossibilities = ["PHONE", "ALL"];

  const handleDeviceChange = (device) => {
    setDeviceSelected(device);
    if (device === "PHONE") {
      setResultsToDisplay(resultsAllAuditsOnPhoneDevices);
    } else {
      setResultsToDisplay(resultsAllAuditsOnAllDevices);
    }
  };

  return (
    <div
      className={`flex flex-col justify-between items-center p-5 pb-0 md:p-10 md:pb-0 min-h-screen min-w-full min-h-screen `}
    >
      <Head>
        <title>PEMO - Yara monitoring dashboard</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='PEMO - Yara monitoring dashboard' />
        <meta
          property='og:description'
          content='web-app to let you monitor web-performance on a large number of domains and track your Web Core Vitals results over time'
        />
        <meta
          property='og:image'
          content='https://pemo.netlify.app/images/pemo-og.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className={`flex flex-col items-center w-full`}>
        <h1 className={`text-5xl md:text-6xl font-bold uppercase mb-12`}>
          Dashboard CRUX API
        </h1>
        <ButtonGroup className={`flex items-stretch`} spacing='0'>
          {devicesPossibilities.map((device, i) => {
            let styleRadius;
            if (i === 0) {
              styleRadius = "rounded-l-lg";
            } else if (i === devicesPossibilities.length - 1) {
              styleRadius = "rounded-r-lg";
            } else {
              styleRadius = "";
            }
            const colorBtn =
              device === deviceSelected
                ? "hover:bg-transparent bg-blue-900 hover:text-blue-900 text-white hover:border-blue-900 border-transparent "
                : "bg-transparent hover:bg-blue-900 text-blue-900 hover:text-white border-blue-900 hover:border-transparent";
            return (
              <button
                key={device}
                onClick={() => handleDeviceChange(device)}
                className={`${styleRadius} ${colorBtn} font-semibold py-2 px-4 border shadow flex items-center w-32 justify-center`}
              >
                {device === "PHONE" && (
                  <DeviceMobileIcon className='h-8 w-8 mr-2 opacity-70' />
                )}
                <span>{device}</span>
              </button>
            );
          })}
        </ButtonGroup>
        {!resultsAllAudits.length && (
          <div
            className={`flex items-start p-4 flex-col items-stretch md:flex-row`}
          >
            <button
              onClick={() =>
                fetchCruxApiAudits(
                  urlsShortList,
                  setResultsAllAudits,
                  setResultsAllAuditsOnPhoneDevices,
                  setResultsAllAuditsOnAllDevices,
                  setResultsToDisplay,
                  deviceSelected
                )
              }
              className={`bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded shadow my-6 md:m-6 flex items-center`}
            >
              <LightningBoltIcon className='h-8 w-8 mr-2' />
              <span>Get Crux Audits ShortList ({urlsShortList.length})</span>
            </button>
            <button
              onClick={() =>
                fetchCruxApiAudits(
                  fullYaraWebsitesUrls,
                  setResultsAllAudits,
                  setResultsAllAuditsOnPhoneDevices,
                  setResultsAllAuditsOnAllDevices,
                  setResultsToDisplay,
                  deviceSelected
                )
              }
              className={`bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded shadow my-6 md:m-6 flex items-center`}
            >
              <LightningBoltIcon className='h-8 w-8 mr-2' />
              <span>
                Get FULL Yara Crux Audits ({fullYaraWebsitesUrls.length})
              </span>
            </button>
          </div>
        )}
        {resultsAllAudits.length && (
          <div className={`w-full`}>
            <div className={`py-3 md:p-4`}>
              Passing domains ={" "}
              <span className={`font-bold text-green-600`}>
                {
                  resultsToDisplay.filter((audit) => !isUrlFailing(audit))
                    .length
                }
              </span>{" "}
              / {resultsToDisplay.length}
              <Progress
                colorScheme='green'
                size='lg'
                value={
                  (resultsToDisplay.filter((audit) => !isUrlFailing(audit))
                    .length *
                    100) /
                  resultsToDisplay.length
                }
              />
            </div>
            <div className='py-3 md:p-4'>
              <Text mb='8px'>Value: {countryFilterText}</Text>
              <Input
                value={countryFilterText}
                onChange={handleChangeCountryFilterText}
                placeholder='Filter by country'
                size='sm'
              />
            </div>
            <ul
              className={`flex flex-wrap justify-between gap-2 md:gap-4 py-3 md:p-4`}
            >
              {resultsToDisplay
                .filter((audit) =>
                  isAuditFilteredByText(countryFilterText, audit)
                )
                .map((audit, index) => (
                  <CruxCWVCard
                    key={audit.url}
                    audit={audit}
                    lowOpacityFcp='true'
                  />
                ))}
            </ul>
            <StackedAreaChartOverview
              resultsAllAudits={resultsToDisplay}
              deviceSelected={deviceSelected}
              key={"charts"}
            />
          </div>
        )}
        <div className={`absolute bottom-4 right-4 h-auto w-auto`}>
          <button
            onClick={() => exportFullAuditsAllDevices(resultsAllAudits)}
            className={`bg-white hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded shadow my-6 md:m-6 flex flex-col items-center opacity-50 hover:opacity-100`}
          >
            <DownloadIcon className='h-8 w-8 mr-2' key={"download-btn"} />
            <span>
              Export audit
              <br />
              <span className={`text-xs opacity-70`}>
                (today&apos;s, all devices, all URLs)
              </span>
            </span>
          </button>
        </div>
      </div>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://raphaelferrand.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made by{" "}
          <span
            className={`motion-safe:animate-spin spin-slow text-2xl ml-2`}
            style={{
              animationDuration: `2s`,
            }}
          >
            🥳
          </span>
        </a>
      </footer>
    </div>
  );
}
