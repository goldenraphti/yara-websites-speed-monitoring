export const audit15 = {
  date: "2022-04-24",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "24/04/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6608349602042345 },
                { start: 2500, end: 4000, density: 0.20461030184712406 },
                { start: 4000, density: 0.13455473794864137 },
              ],
              percentiles: { p75: 3005 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9473996147577418,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02681878796858794,
                },
                { start: "0.25", density: 0.025781597273670177 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5750866094291299 },
                { start: 1800, end: 3000, density: 0.22970326856454254 },
                { start: 3000, density: 0.1952101220063274 },
              ],
              percentiles: { p75: 2660 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481725584182145 },
                { start: 100, end: 300, density: 0.03579988016776512 },
                { start: 300, density: 0.01602756141402037 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2660,
        lcp: 3005,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823955728,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.690611877624475 },
                { start: 2500, end: 4000, density: 0.2028094381123775 },
                { start: 4000, density: 0.1065786842631476 },
              ],
              percentiles: { p75: 2799 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9418941894189418,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042304230423042294,
                },
                { start: "0.25", density: 0.0158015801580158 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6045395460453958 },
                { start: 1800, end: 3000, density: 0.2382761723827618 },
                { start: 3000, density: 0.15718428157184225 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9563956395639565 },
                { start: 100, end: 300, density: 0.021102110211021104 },
                { start: 300, density: 0.022502250225022436 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 2799,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650823956174,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9416370106761568 },
                { start: 100, end: 300, density: 0.024911032028469757 },
                { start: 300, density: 0.033451957295373494 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8142322535375976 },
                { start: 2500, end: 4000, density: 0.13992515495263705 },
                { start: 4000, density: 0.0458425915097652 },
              ],
              percentiles: { p75: 2197 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9334110787172011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06040816326530611,
                },
                { start: "0.25", density: 0.006180758017492706 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7973067915690865 },
                { start: 1800, end: 3000, density: 0.15995316159250575 },
                { start: 3000, density: 0.04274004683840761 },
              ],
              percentiles: { p75: 1688 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1688,
        lcp: 2197,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823956300,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9379518864204023,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02458262126988301,
                },
                { start: "0.25", density: 0.0374654923097147 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48294243070362364 },
                { start: 1800, end: 3000, density: 0.3324893390191889 },
                { start: 3000, density: 0.18456823027718747 },
              ],
              percentiles: { p75: 2667 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608516483516483 },
                { start: 100, end: 300, density: 0.03145604395604396 },
                { start: 300, density: 0.007692307692307707 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.642147117296222 },
                { start: 2500, end: 4000, density: 0.23379721669980094 },
                { start: 4000, density: 0.12405566600397702 },
              ],
              percentiles: { p75: 3015 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2667,
        lcp: 3015,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650823956511,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9815890275546769,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005683924379093043,
                },
                { start: "0.25", density: 0.01272704806623008 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8021377081779764 },
                { start: 1800, end: 3000, density: 0.12428535918468801 },
                { start: 3000, density: 0.07357693263733571 },
              ],
              percentiles: { p75: 1622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9614811133200796 },
                { start: 100, end: 300, density: 0.023111332007952293 },
                { start: 300, density: 0.015407554671968148 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8264658284576122 },
                { start: 2500, end: 4000, density: 0.11440308726503176 },
                { start: 4000, density: 0.05913108427735614 },
              ],
              percentiles: { p75: 2080 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1622,
        lcp: 2080,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823956679,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8063380281690141,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17593491986401166,
                },
                { start: "0.25", density: 0.01772705196697427 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7727660611971228 },
                { start: 1800, end: 3000, density: 0.16481774960380344 },
                { start: 3000, density: 0.062416189199073706 },
              ],
              percentiles: { p75: 1729 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9420271940667492 },
                { start: 100, end: 300, density: 0.03189122373300372 },
                { start: 300, density: 0.026081582200247196 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8025256222547587 },
                { start: 2500, end: 4000, density: 0.1401293313811616 },
                { start: 4000, density: 0.057345046364079735 },
              ],
              percentiles: { p75: 2243 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1729,
        lcp: 2243,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650823956851,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.925305410122164,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04467713787085515,
                },
                { start: "0.25", density: 0.030017452006980798 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.926223651304037 },
                { start: 1800, end: 3000, density: 0.05823508395855662 },
                { start: 3000, density: 0.015541264737406173 },
              ],
              percentiles: { p75: 1259 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9414625360230549 },
                { start: 100, end: 300, density: 0.027377521613832854 },
                { start: 300, density: 0.031159942363112383 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9225651942522618 },
                { start: 2500, end: 4000, density: 0.06430725563242856 },
                { start: 4000, density: 0.013127550115309632 },
              ],
              percentiles: { p75: 1634 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1259,
        lcp: 1634,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823957021,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9469 },
                { start: "0.10", end: "0.25", density: 0.035 },
                { start: "0.25", density: 0.01810000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5842415758424158 },
                { start: 1800, end: 3000, density: 0.2583741625837415 },
                { start: 3000, density: 0.15738426157384255 },
              ],
              percentiles: { p75: 2376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.949610077984403 },
                { start: 100, end: 300, density: 0.03739252149570085 },
                { start: 300, density: 0.012997400519896053 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.690538107621523 },
                { start: 2500, end: 4000, density: 0.16993398679735908 },
                { start: 4000, density: 0.13952790558111786 },
              ],
              percentiles: { p75: 2840 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2376,
        lcp: 2840,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823957196,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.976239795296698,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013890581211161206,
                },
                { start: "0.25", density: 0.00986962349214085 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8289071105127894 },
                { start: 1800, end: 3000, density: 0.1296046995471791 },
                { start: 3000, density: 0.041488189940031533 },
              ],
              percentiles: { p75: 1598 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9674243345083262 },
                { start: 100, end: 300, density: 0.02029901543697581 },
                { start: 300, density: 0.01227665005469793 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8605463008329252 },
                { start: 2500, end: 4000, density: 0.1087089661930426 },
                { start: 4000, density: 0.03074473297403229 },
              ],
              percentiles: { p75: 1968 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1598,
        lcp: 1968,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823957310,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9513951395139513 },
                { start: 100, end: 300, density: 0.028202820282028203 },
                { start: 300, density: 0.020402040204020564 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8348169633926782 },
                { start: 2500, end: 4000, density: 0.11167233446689338 },
                { start: 4000, density: 0.053510702140428495 },
              ],
              percentiles: { p75: 2045 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8275 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10690000000000001,
                },
                { start: "0.25", density: 0.06560000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8254174582541743 },
                { start: 1800, end: 3000, density: 0.11378862113788614 },
                { start: 3000, density: 0.06079392060793932 },
              ],
              percentiles: { p75: 1479 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1479,
        lcp: 2045,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1650823957484,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9301069893010698,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042795720427957214,
                },
                { start: "0.25", density: 0.027097290270972907 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5752999999999993 },
                { start: 1800, end: 3000, density: 0.25129999999999975 },
                { start: 3000, density: 0.17340000000000105 },
              ],
              percentiles: { p75: 2537 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9558911782356471 },
                { start: 100, end: 300, density: 0.02970594118823765 },
                { start: 300, density: 0.014402880576115202 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6669166916691659 },
                { start: 2500, end: 4000, density: 0.19786978697869761 },
                { start: 4000, density: 0.1352135213521365 },
              ],
              percentiles: { p75: 2997 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2537,
        lcp: 2997,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650823957608,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9341065893410659,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039396060393960604,
                },
                { start: "0.25", density: 0.0264973502649735 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6868686868686864 },
                { start: 1800, end: 3000, density: 0.2001200120012 },
                { start: 3000, density: 0.11301130113011358 },
              ],
              percentiles: { p75: 2034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625000000000001 },
                { start: 100, end: 300, density: 0.023099999999999996 },
                { start: 300, density: 0.014399999999999961 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7553000000000001 },
                { start: 2500, end: 4000, density: 0.14070000000000005 },
                { start: 4000, density: 0.10399999999999993 },
              ],
              percentiles: { p75: 2534 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2034,
        lcp: 2534,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650823957733,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8361000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1255 },
                { start: "0.25", density: 0.038399999999999976 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6433999999999995 },
                { start: 1800, end: 3000, density: 0.21189999999999978 },
                { start: 3000, density: 0.1447000000000007 },
              ],
              percentiles: { p75: 2335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.971505698860228 },
                { start: 100, end: 300, density: 0.025994801039792046 },
                { start: 300, density: 0.0024995000999800043 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6704659068186355 },
                { start: 2500, end: 4000, density: 0.17676464707058578 },
                { start: 4000, density: 0.15276944611077872 },
              ],
              percentiles: { p75: 3099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2335,
        lcp: 3099,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1650823957862,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7851999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12859999999999996,
                },
                { start: "0.25", density: 0.08620000000000017 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4901529541137648 },
                { start: 1800, end: 3000, density: 0.293012096371088 },
                { start: 3000, density: 0.21683494951514723 },
              ],
              percentiles: { p75: 2818 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9321 },
                { start: 100, end: 300, density: 0.030400000000000003 },
                { start: 300, density: 0.037499999999999964 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5675499999999991 },
                { start: 2500, end: 4000, density: 0.2610499999999995 },
                { start: 4000, density: 0.17140000000000138 },
              ],
              percentiles: { p75: 3385 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2818,
        lcp: 3385,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1650823957999,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9242424242424243,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04286454286454287,
                },
                { start: "0.25", density: 0.03289303289303286 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.841366766272573 },
                { start: 1800, end: 3000, density: 0.11134208133038835 },
                { start: 3000, density: 0.04729115239703872 },
              ],
              percentiles: { p75: 1480 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9421995553811952 },
                { start: 100, end: 300, density: 0.024715574735190274 },
                { start: 300, density: 0.03308486988361458 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8670095039708369 },
                { start: 2500, end: 4000, density: 0.09484442129930996 },
                { start: 4000, density: 0.038146074729853215 },
              ],
              percentiles: { p75: 1869 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1480,
        lcp: 1869,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650823958131,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9377923884182577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0259198381590593,
                },
                { start: "0.25", density: 0.03628777342268304 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6978161503301166 },
                { start: 1800, end: 3000, density: 0.20391061452513964 },
                { start: 3000, density: 0.0982732351447438 },
              ],
              percentiles: { p75: 1988 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374280230326296 },
                { start: 100, end: 300, density: 0.03582853486884197 },
                { start: 300, density: 0.026743442098528348 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7618805590851334 },
                { start: 2500, end: 4000, density: 0.16251588310038115 },
                { start: 4000, density: 0.07560355781448544 },
              ],
              percentiles: { p75: 2457 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1988,
        lcp: 2457,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1650823958292,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9486681954489327,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035455988710530954,
                },
                { start: "0.25", density: 0.01587581584053625 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9107719928186714 },
                { start: 1800, end: 3000, density: 0.07019748653500896 },
                { start: 3000, density: 0.019030520646319608 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9741900054914882 },
                { start: 100, end: 300, density: 0.025809994508511812 },
                { start: 300 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.916101997146933 },
                { start: 2500, end: 4000, density: 0.06410485021398005 },
                { start: 4000, density: 0.019793152639086993 },
              ],
              percentiles: { p75: 1936 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1420,
        lcp: 1936,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823958458,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9333000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038900000000000004,
                },
                { start: "0.25", density: 0.027800000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7812 },
                { start: 1800, end: 3000, density: 0.17489999999999994 },
                { start: 3000, density: 0.04390000000000003 },
              ],
              percentiles: { p75: 1707 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812000000000001 },
                { start: 100, end: 300, density: 0.014400000000000001 },
                { start: 300, density: 0.0043999999999999985 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8243473041912573 },
                { start: 2500, end: 4000, density: 0.11123337001100327 },
                { start: 4000, density: 0.06441932579773947 },
              ],
              percentiles: { p75: 2139 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1707, lcp: 2139, cls: "0.01", fid: 9 },
      timestamp: 1650823958624,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7838783878387839,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1471147114711471,
                },
                { start: "0.25", density: 0.0690069006900689 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7987402519496104 },
                { start: 1800, end: 3000, density: 0.12247550489902022 },
                { start: 3000, density: 0.07878424315136945 },
              ],
              percentiles: { p75: 1587 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702851425712855 },
                { start: 100, end: 300, density: 0.023611805902951477 },
                { start: 300, density: 0.0061030515257628785 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.83238352329534 },
                { start: 2500, end: 4000, density: 0.09853029394121167 },
                { start: 4000, density: 0.06908618276344815 },
              ],
              percentiles: { p75: 2003 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1587,
        lcp: 2003,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650823958737,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5087526257877367 },
                { start: 1800, end: 3000, density: 0.31439431829548886 },
                { start: 3000, density: 0.17685305591677442 },
              ],
              percentiles: { p75: 2624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981101889811019 },
                { start: 100, end: 300, density: 0.0156984301569843 },
                { start: 300, density: 0.0031996800319968027 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6312368763123687 },
                { start: 2500, end: 4000, density: 0.22227777222277773 },
                { start: 4000, density: 0.1464853514648537 },
              ],
              percentiles: { p75: 3144 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8181818181818182,
                },
                { start: "0.10", end: "0.25", density: 0.11001100110011 },
                { start: "0.25", density: 0.07180718071807181 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2624,
        lcp: 3144,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1650823958849,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: {
            formFactor: "PHONE",
            origin: "https://www.yarabrasil.com.br",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8719211822660097,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09023734885803851,
                },
                { start: "0.25", density: 0.037841468875951696 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4028340080971693 },
                { start: 1800, end: 3000, density: 0.25787224471435205 },
                { start: 3000, density: 0.3392937471884786 },
              ],
              percentiles: { p75: 3638 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8887068461088353 },
                { start: 100, end: 300, density: 0.07033352837916908 },
                { start: 300, density: 0.04095962551199557 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4496720199050009 },
                { start: 2500, end: 4000, density: 0.25446731508708553 },
                { start: 4000, density: 0.29586066500791347 },
              ],
              percentiles: { p75: 4465 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3638,
        lcp: 4465,
        cls: "0.02",
        fid: 20,
      },
      timestamp: 1650823958964,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9337327523602033,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03340595497458243,
                },
                { start: "0.25", density: 0.03286129266521423 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8501838235294115 },
                { start: 1800, end: 3000, density: 0.10808823529411764 },
                { start: 3000, density: 0.04172794117647074 },
              ],
              percentiles: { p75: 1519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587928032501452 },
                { start: 100, end: 300, density: 0.01992648481331012 },
                { start: 300, density: 0.021280711936544766 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.855359765051395 },
                { start: 2500, end: 4000, density: 0.09875183553597647 },
                { start: 4000, density: 0.04588839941262848 },
              ],
              percentiles: { p75: 2099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1519,
        lcp: 2099,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823959140,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.914977020816437,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06055690727223574,
                },
                { start: "0.25", density: 0.02446607191132736 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.688800110208018 },
                { start: 1800, end: 3000, density: 0.1890067502410801 },
                { start: 3000, density: 0.12219313955090182 },
              ],
              percentiles: { p75: 2066 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9282143848930854 },
                { start: 100, end: 300, density: 0.042765898361566246 },
                { start: 300, density: 0.02901971674534839 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7567034163604188 },
                { start: 2500, end: 4000, density: 0.15169456921192315 },
                { start: 4000, density: 0.09160201442765799 },
              ],
              percentiles: { p75: 2492 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2066,
        lcp: 2492,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823959341,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9214613483939287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047123190963642786,
                },
                { start: "0.25", density: 0.03141546064242853 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6499004885109455 },
                { start: 1800, end: 3000, density: 0.20915505699294348 },
                { start: 3000, density: 0.14094445449611093 },
              ],
              percentiles: { p75: 2291 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588131953933243 },
                { start: 100, end: 300, density: 0.029865313292992385 },
                { start: 300, density: 0.011321491313683379 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7073038773669967 },
                { start: 2500, end: 4000, density: 0.18124436429215487 },
                { start: 4000, density: 0.1114517583408484 },
              ],
              percentiles: { p75: 2787 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2291,
        lcp: 2787,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823959562,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7817654703588921 },
                { start: 1800, end: 3000, density: 0.14635609317204834 },
                { start: 3000, density: 0.07187843646905949 },
              ],
              percentiles: { p75: 1746 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1746 },
      timestamp: 1650823959830,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9301930193019302,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035903590359035904,
                },
                { start: "0.25", density: 0.033903390339033904 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.34326567343265746 },
                { start: 1800, end: 3000, density: 0.3352664733526654 },
                { start: 3000, density: 0.3214678532146772 },
              ],
              percentiles: { p75: 3389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9689000000000001 },
                { start: 100, end: 300, density: 0.026600000000000002 },
                { start: 300, density: 0.0045000000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45969999999999983 },
                { start: 2500, end: 4000, density: 0.3148999999999998 },
                { start: 4000, density: 0.22540000000000043 },
              ],
              percentiles: { p75: 3870 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3389,
        lcp: 3870,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650823959975,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7630552220888349 },
                { start: 2500, end: 4000, density: 0.14510804321728685 },
                { start: 4000, density: 0.09183673469387818 },
              ],
              percentiles: { p75: 2453 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8217643528705741,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14222844568913784,
                },
                { start: "0.25", density: 0.0360072014402881 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7421484296859365 },
                { start: 1800, end: 3000, density: 0.15973194638927773 },
                { start: 3000, density: 0.09811962392478579 },
              ],
              percentiles: { p75: 1867 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748000000000001 },
                { start: 100, end: 300, density: 0.017800000000000003 },
                { start: 300, density: 0.0073999999999999864 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1867,
        lcp: 2453,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650823960107,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.803019698030197,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15658434156584344,
                },
                { start: "0.25", density: 0.040395960403959576 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7364527094581083 },
                { start: 1800, end: 3000, density: 0.19486102779444112 },
                { start: 3000, density: 0.06868626274745053 },
              ],
              percentiles: { p75: 1845 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696939387877576 },
                { start: 100, end: 300, density: 0.01820364072814563 },
                { start: 300, density: 0.012102420484096798 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7583016603320659 },
                { start: 2500, end: 4000, density: 0.16248249649929972 },
                { start: 4000, density: 0.07921584316863443 },
              ],
              percentiles: { p75: 2448 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1845,
        lcp: 2448,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1650823960234,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8397945456768985,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10651828298887121,
                },
                { start: "0.25", density: 0.05368717133423023 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7764792717431414 },
                { start: 1800, end: 3000, density: 0.13494894821011183 },
                { start: 3000, density: 0.0885717800467468 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623717217787913 },
                { start: 100, end: 300, density: 0.029899911313822372 },
                { start: 300, density: 0.007728366907386286 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.817668018184052 },
                { start: 2500, end: 4000, density: 0.10848998648482616 },
                { start: 4000, density: 0.07384199533112187 },
              ],
              percentiles: { p75: 2094 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1690,
        lcp: 2094,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1650823960369,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8782878287828783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0676067606760676,
                },
                { start: "0.25", density: 0.05410541054105404 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.1691999999999995 },
                { start: 1800, end: 3000, density: 0.43699999999999867 },
                { start: 3000, density: 0.39380000000000187 },
              ],
              percentiles: { p75: 3983 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3372837283728365 },
                { start: 2500, end: 4000, density: 0.3496849684968488 },
                { start: 4000, density: 0.3130313031303148 },
              ],
              percentiles: { p75: 4572 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 3983, lcp: 4572, cls: "0.04" },
      timestamp: 1650823960561,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8604000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07260000000000001,
                },
                { start: "0.25", density: 0.06699999999999984 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204438668399475 },
                { start: 1800, end: 3000, density: 0.34379686094171713 },
                { start: 3000, density: 0.13575927221833545 },
              ],
              percentiles: { p75: 2505 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9370937093709371 },
                { start: 100, end: 300, density: 0.026202620262026202 },
                { start: 300, density: 0.03670367036703677 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6123112311231131 },
                { start: 2500, end: 4000, density: 0.27747774777477785 },
                { start: 4000, density: 0.110211021102109 },
              ],
              percentiles: { p75: 2956 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2505,
        lcp: 2956,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650823960696,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9334000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05930000000000001,
                },
                { start: "0.25", density: 0.007300000000000004 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8471541462438732 },
                { start: 1800, end: 3000, density: 0.12283685105531661 },
                { start: 3000, density: 0.03000900270081019 },
              ],
              percentiles: { p75: 1516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675129948020791 },
                { start: 100, end: 300, density: 0.021691323470611756 },
                { start: 300, density: 0.010795681727309058 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8464807038592281 },
                { start: 2500, end: 4000, density: 0.12442511497700456 },
                { start: 4000, density: 0.029094181163767215 },
              ],
              percentiles: { p75: 2083 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1516,
        lcp: 2083,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1650823960821,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7914791479147915,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1526152615261526,
                },
                { start: "0.25", density: 0.055905590559055945 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8832 },
                { start: 1800, end: 3000, density: 0.09090000000000001 },
                { start: 3000, density: 0.025899999999999885 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9538999999999999 },
                { start: 100, end: 300, density: 0.025299999999999993 },
                { start: 300, density: 0.020800000000000124 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8409181836367273 },
                { start: 2500, end: 4000, density: 0.1266753350670134 },
                { start: 4000, density: 0.032406481296259365 },
              ],
              percentiles: { p75: 2062 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 2062,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650823960948,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6971030436376964 },
                { start: 1800, end: 3000, density: 0.22393350446155696 },
                { start: 3000, density: 0.07896345190074669 },
              ],
              percentiles: { p75: 1985 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644069928310905 },
                { start: 100, end: 300, density: 0.022387121116840655 },
                { start: 300, density: 0.013205886052068903 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7292277614858256 },
                { start: 2500, end: 4000, density: 0.18316226783968714 },
                { start: 4000, density: 0.08760997067448728 },
              ],
              percentiles: { p75: 2595 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7741070340119469,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18590759478239666,
                },
                { start: "0.25", density: 0.03998537120565644 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1985,
        lcp: 2595,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650823961074,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8629 },
                { start: "0.10", end: "0.25", density: 0.0994 },
                { start: "0.25", density: 0.03770000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4408440844084461 },
                { start: 1800, end: 3000, density: 0.24662466246624956 },
                { start: 3000, density: 0.31253125312530433 },
              ],
              percentiles: { p75: 3488 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.901850925462731 },
                { start: 100, end: 300, density: 0.061930965482741365 },
                { start: 300, density: 0.03621810905452757 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48019405821746836 },
                { start: 2500, end: 4000, density: 0.24252275682704966 },
                { start: 4000, density: 0.27728318495548204 },
              ],
              percentiles: { p75: 4307 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3488,
        lcp: 4307,
        cls: "0.04",
        fid: 17,
      },
      timestamp: 1650823961285,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7545245475452453,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16118388161183878,
                },
                { start: "0.25", density: 0.08429157084291573 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8835349395181443 },
                { start: 1800, end: 3000, density: 0.0852744176746976 },
                { start: 3000, density: 0.031190642807157967 },
              ],
              percentiles: { p75: 1316 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9750049990002 },
                { start: 100, end: 300, density: 0.011197760447910418 },
                { start: 300, density: 0.013797240551889583 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8748999999999999 },
                { start: 2500, end: 4000, density: 0.08769999999999996 },
                { start: 4000, density: 0.03740000000000015 },
              ],
              percentiles: { p75: 1916 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1316,
        lcp: 1916,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1650823961422,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8413016828262564,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10397860247408892,
                },
                { start: "0.25", density: 0.05471971469965462 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6490992503077089 },
                { start: 1800, end: 3000, density: 0.2159561374062883 },
                { start: 3000, density: 0.13494461228600269 },
              ],
              percentiles: { p75: 2261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556206352782157 },
                { start: 100, end: 300, density: 0.03029961703086281 },
                { start: 300, density: 0.01407974769092147 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7248403435366655 },
                { start: 2500, end: 4000, density: 0.16923585113411133 },
                { start: 4000, density: 0.10592380532922319 },
              ],
              percentiles: { p75: 2641 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2261,
        lcp: 2641,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1650823961557,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9510951095109511,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.034403440344034406,
                },
                { start: "0.25", density: 0.014501450145014513 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8223355328934204 },
                { start: 1800, end: 3000, density: 0.1122775444911017 },
                { start: 3000, density: 0.06538692261547777 },
              ],
              percentiles: { p75: 1541 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.969 },
                { start: 100, end: 300, density: 0.018600000000000002 },
                { start: 300, density: 0.012399999999999963 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8364663533646632 },
                { start: 2500, end: 4000, density: 0.10803919608039192 },
                { start: 4000, density: 0.055494450554944855 },
              ],
              percentiles: { p75: 2034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1541,
        lcp: 2034,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650823961774,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.87526271542665 },
                { start: 2500, end: 4000, density: 0.09594367381252623 },
                { start: 4000, density: 0.028793610760823853 },
              ],
              percentiles: { p75: 2023 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9326307088241372,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04856375284149618,
                },
                { start: "0.25", density: 0.018805538334366625 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8354056902002108 },
                { start: 1800, end: 3000, density: 0.12265542676501583 },
                { start: 3000, density: 0.041938883034773326 },
              ],
              percentiles: { p75: 1548 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9363016616957819 },
                { start: 100, end: 300, density: 0.027694929697486156 },
                { start: 300, density: 0.03600340860673194 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1548,
        lcp: 2023,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1650823961925,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9224 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04939999999999999,
                },
                { start: "0.25", density: 0.028199999999999992 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5693000000000017 },
                { start: 1800, end: 3000, density: 0.1699000000000005 },
                { start: 3000, density: 0.26079999999999776 },
              ],
              percentiles: { p75: 3185 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6197760447910398 },
                { start: 2500, end: 4000, density: 0.1774645070985798 },
                { start: 4000, density: 0.20275944811038032 },
              ],
              percentiles: { p75: 3554 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 3185, lcp: 3554, cls: "0.00" },
      timestamp: 1650823962144,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9165551839464882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052173913043478244,
                },
                { start: "0.25", density: 0.03127090301003345 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7386747802569305 },
                { start: 1800, end: 3000, density: 0.20858688302907366 },
                { start: 3000, density: 0.052738336713995984 },
              ],
              percentiles: { p75: 1817 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9674409748667174 },
                { start: 100, end: 300, density: 0.02418126428027418 },
                { start: 300, density: 0.008377760853008374 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8215379380741749 },
                { start: 2500, end: 4000, density: 0.12946580469547464 },
                { start: 4000, density: 0.04899625723035057 },
              ],
              percentiles: { p75: 2198 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1817,
        lcp: 2198,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823962376,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9462958215842092 },
                { start: 100, end: 300, density: 0.03576006152268649 },
                { start: 300, density: 0.017944116893104305 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6548124999999985 },
                { start: 2500, end: 4000, density: 0.21331249999999957 },
                { start: 4000, density: 0.1318750000000019 },
              ],
              percentiles: { p75: 3018 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9648272433507333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012925677355207558,
                },
                { start: "0.25", density: 0.02224707929405917 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.539173967459324 },
                { start: 1800, end: 3000, density: 0.2689612015018772 },
                { start: 3000, density: 0.19186483103879873 },
              ],
              percentiles: { p75: 2672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2672,
        lcp: 3018,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823962598,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8066806680668067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1417141714171417,
                },
                { start: "0.25", density: 0.05160516051605165 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6948305169483046 },
                { start: 1800, end: 3000, density: 0.20397960203979576 },
                { start: 3000, density: 0.10118988101189964 },
              ],
              percentiles: { p75: 2097 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690061987602478 },
                { start: 100, end: 300, density: 0.013597280543891222 },
                { start: 300, density: 0.017396520695860875 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7120712071207113 },
                { start: 2500, end: 4000, density: 0.18351835183518317 },
                { start: 4000, density: 0.10441044104410563 },
              ],
              percentiles: { p75: 2769 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2097,
        lcp: 2769,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650823962814,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.746 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11809999999999997,
                },
                { start: "0.25", density: 0.13590000000000005 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6355999999999997 },
                { start: 1800, end: 3000, density: 0.14639999999999997 },
                { start: 3000, density: 0.21800000000000025 },
              ],
              percentiles: { p75: 2652 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2652, cls: "0.10" },
      timestamp: 1650823962963,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9246999999999997 },
                { start: 100, end: 300, density: 0.04959999999999998 },
                { start: 300, density: 0.02570000000000024 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5906318736252747 },
                { start: 2500, end: 4000, density: 0.2946910617876422 },
                { start: 4000, density: 0.11467706458708307 },
              ],
              percentiles: { p75: 3159 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9710971097109711,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020202020202020204,
                },
                { start: "0.25", density: 0.008700870087008693 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5206041208241645 },
                { start: 1800, end: 3000, density: 0.3478695739147827 },
                { start: 3000, density: 0.13152630526105286 },
              ],
              percentiles: { p75: 2460 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2460,
        lcp: 3159,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823963105,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8996 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06570000000000001,
                },
                { start: "0.25", density: 0.03470000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5439999999999995 },
                { start: 1800, end: 3000, density: 0.2983999999999997 },
                { start: 3000, density: 0.15760000000000096 },
              ],
              percentiles: { p75: 2492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704970497049705 },
                { start: 100, end: 300, density: 0.0236023602360236 },
                { start: 300, density: 0.005900590059005915 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629488846653993 },
                { start: 2500, end: 4000, density: 0.2134140242072621 },
                { start: 4000, density: 0.12363709112733866 },
              ],
              percentiles: { p75: 2988 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2492,
        lcp: 2988,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650823963252,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8729999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08270000000000001,
                },
                { start: "0.25", density: 0.04430000000000002 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9139086091390861 },
                { start: 1800, end: 3000, density: 0.061093890610938915 },
                { start: 3000, density: 0.024997500249975053 },
              ],
              percentiles: { p75: 1232 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639927985597119 },
                { start: 100, end: 300, density: 0.02280456091218244 },
                { start: 300, density: 0.013202640528105663 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9037596240375962 },
                { start: 2500, end: 4000, density: 0.07464253574642536 },
                { start: 4000, density: 0.021597840215978357 },
              ],
              percentiles: { p75: 1743 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1232,
        lcp: 1743,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650823963395,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9138500000000002 },
                { start: 2500, end: 4000, density: 0.06745000000000002 },
                { start: 4000, density: 0.018699999999999918 },
              ],
              percentiles: { p75: 1717 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8270000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13110000000000002,
                },
                { start: "0.25", density: 0.04189999999999988 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9191000000000001 },
                { start: 1800, end: 3000, density: 0.0646 },
                { start: 3000, density: 0.016299999999999797 },
              ],
              percentiles: { p75: 1235 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652791675005001 },
                { start: 100, end: 300, density: 0.016509905943566137 },
                { start: 300, density: 0.018210926555933753 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1235,
        lcp: 1717,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650823963544,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9200999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0636 },
                { start: "0.25", density: 0.01629999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6586658665866586 },
                { start: 1800, end: 3000, density: 0.22902290229022906 },
                { start: 3000, density: 0.11231123112311235 },
              ],
              percentiles: { p75: 2099 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9820982098209821 },
                { start: 100, end: 300, density: 0.0118011801180118 },
                { start: 300, density: 0.006100610061006101 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7391978395679146 },
                { start: 2500, end: 4000, density: 0.14917983596719364 },
                { start: 4000, density: 0.11162232446489176 },
              ],
              percentiles: { p75: 2550 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2099,
        lcp: 2550,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1650823963685,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525742115027829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03026437847866419,
                },
                { start: "0.25", density: 0.017161410018552873 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7490662931839391 },
                { start: 1800, end: 3000, density: 0.1671335200746963 },
                { start: 3000, density: 0.08380018674136455 },
              ],
              percentiles: { p75: 1827 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511841469308844 },
                { start: 100, end: 300, density: 0.03286611889801836 },
                { start: 300, density: 0.015949734171097126 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8065812463599299 },
                { start: 2500, end: 4000, density: 0.1274898078043098 },
                { start: 4000, density: 0.06592894583576028 },
              ],
              percentiles: { p75: 2228 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1827,
        lcp: 2228,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823963826,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9000099990000998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08319168083191678,
                },
                { start: "0.25", density: 0.016798320167983213 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8095047523761882 },
                { start: 1800, end: 3000, density: 0.1479739869934967 },
                { start: 3000, density: 0.04252126063031514 },
              ],
              percentiles: { p75: 1643 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9500099980004001 },
                { start: 100, end: 300, density: 0.02099580083983204 },
                { start: 300, density: 0.028994201159767908 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8149999999999997 },
                { start: 2500, end: 4000, density: 0.13789999999999988 },
                { start: 4000, density: 0.04710000000000035 },
              ],
              percentiles: { p75: 2193 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1643,
        lcp: 2193,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1650823964063,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9710057747834455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013955726660250238,
                },
                { start: "0.25", density: 0.015038498556304148 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5656223539373412 },
                { start: 1800, end: 3000, density: 0.2589814926817467 },
                { start: 3000, density: 0.17539615338091213 },
              ],
              percentiles: { p75: 2611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472242967388599 },
                { start: 100, end: 300, density: 0.024769728653223803 },
                { start: 300, density: 0.028005974607916276 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6641827214346299 },
                { start: 2500, end: 4000, density: 0.2236156549133649 },
                { start: 4000, density: 0.11220162365200528 },
              ],
              percentiles: { p75: 2918 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2611,
        lcp: 2918,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823964214,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9676830857440709,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009121709669012249,
                },
                { start: "0.25", density: 0.023195204586916866 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6427442717935204 },
                { start: 1800, end: 3000, density: 0.23070845404266493 },
                { start: 3000, density: 0.12654727416381473 },
              ],
              percentiles: { p75: 2166 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574497383640871 },
                { start: 100, end: 300, density: 0.028779950426879638 },
                { start: 300, density: 0.013770311209033263 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7478621234048154 },
                { start: 2500, end: 4000, density: 0.15149322457571374 },
                { start: 4000, density: 0.10064465201947098 },
              ],
              percentiles: { p75: 2545 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2166,
        lcp: 2545,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823964449,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6404011461318053 },
                { start: 2500, end: 4000, density: 0.20272206303724932 },
                { start: 4000, density: 0.1568767908309454 },
              ],
              percentiles: { p75: 3080 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525764439411097,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026189127972819932,
                },
                { start: "0.25", density: 0.021234428086070237 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5747093440505241 },
                { start: 1800, end: 3000, density: 0.24874407923065892 },
                { start: 3000, density: 0.17654657671881693 },
              ],
              percentiles: { p75: 2522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610576232217273 },
                { start: 100, end: 300, density: 0.03736168989797385 },
                { start: 300, density: 0.0015806868802988937 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2522,
        lcp: 3080,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823964692,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: {
            formFactor: "PHONE",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6143178410794592 },
                { start: 1800, end: 3000, density: 0.24999999999999956 },
                { start: 3000, density: 0.13568215892054122 },
              ],
              percentiles: { p75: 2346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412241588974463 },
                { start: 100, end: 300, density: 0.025537089582488855 },
                { start: 300, density: 0.0332387515200649 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6851713859910584 },
                { start: 2500, end: 4000, density: 0.19746646795827136 },
                { start: 4000, density: 0.1173621460506702 },
              ],
              percentiles: { p75: 2823 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9545454545454546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019715224534501644,
                },
                { start: "0.25", density: 0.025739320920043808 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2346,
        lcp: 2823,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823964954,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6983451253147858 },
                { start: 2500, end: 4000, density: 0.1703441659671423 },
                { start: 4000, density: 0.13131070871807182 },
              ],
              percentiles: { p75: 2773 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.970895699691138,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01104775481111903,
                },
                { start: "0.25", density: 0.018056545497742948 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5539456352532617 },
                { start: 1800, end: 3000, density: 0.27685307148844385 },
                { start: 3000, density: 0.16920129325829442 },
              ],
              percentiles: { p75: 2453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9440830622967225 },
                { start: 100, end: 300, density: 0.04528396297222916 },
                { start: 300, density: 0.0106329747310483 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2453,
        lcp: 2773,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823965213,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8675999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0772 },
                { start: "0.25", density: 0.055200000000000006 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7325732573257323 },
                { start: 1800, end: 3000, density: 0.18071807180718058 },
                { start: 3000, density: 0.0867086708670872 },
              ],
              percentiles: { p75: 1880 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488000000000001 },
                { start: 100, end: 300, density: 0.029100000000000004 },
                { start: 300, density: 0.02209999999999994 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7787163850844745 },
                { start: 2500, end: 4000, density: 0.1494051784464661 },
                { start: 4000, density: 0.07187843646905928 },
              ],
              percentiles: { p75: 2381 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1880,
        lcp: 2381,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650823965465,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5842803030303028 },
                { start: 1800, end: 3000, density: 0.23461174242424235 },
                { start: 3000, density: 0.18110795454545495 },
              ],
              percentiles: { p75: 2565 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.941972920696325 },
                { start: 100, end: 300, density: 0.03626692456479691 },
                { start: 300, density: 0.021760154738878 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6740056818181817 },
                { start: 2500, end: 4000, density: 0.18193655303030293 },
                { start: 4000, density: 0.14405776515151542 },
              ],
              percentiles: { p75: 2988 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9416607856974829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019995295224653025,
                },
                { start: "0.25", density: 0.038343919077864046 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2565,
        lcp: 2988,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823965658,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8313831383138314,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09920992099209922,
                },
                { start: "0.25", density: 0.06940694069406947 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.621662166216621 },
                { start: 1800, end: 3000, density: 0.2157215721572155 },
                { start: 3000, density: 0.1626162616261635 },
              ],
              percentiles: { p75: 2370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9031 },
                { start: 100, end: 300, density: 0.041800000000000004 },
                { start: 300, density: 0.0551 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.654349999999999 },
                { start: 2500, end: 4000, density: 0.18584999999999977 },
                { start: 4000, density: 0.1598000000000012 },
              ],
              percentiles: { p75: 3124 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2370,
        lcp: 3124,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1650823965903,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6144228845769147 },
                { start: 1800, end: 3000, density: 0.22084416883376645 },
                { start: 3000, density: 0.16473294658931883 },
              ],
              percentiles: { p75: 2441 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505 },
                { start: 100, end: 300, density: 0.031 },
                { start: 300, density: 0.018499999999999982 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6887311268873102 },
                { start: 2500, end: 4000, density: 0.17298270172982666 },
                { start: 4000, density: 0.13828617138286303 },
              ],
              percentiles: { p75: 2922 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8890110988901109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06269373062693731,
                },
                { start: "0.25", density: 0.04829517048295176 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2441,
        lcp: 2922,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650823966080,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9260814249363867,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030407124681933836,
                },
                { start: "0.25", density: 0.043511450381679403 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4216758913631092 },
                { start: 1800, end: 3000, density: 0.3041575492341352 },
                { start: 3000, density: 0.27416655940275575 },
              ],
              percentiles: { p75: 3125 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460586494484801 },
                { start: 100, end: 300, density: 0.04156577885391445 },
                { start: 300, density: 0.012375571697605578 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5333505021890277 },
                { start: 2500, end: 4000, density: 0.2810970898789588 },
                { start: 4000, density: 0.18555240793201358 },
              ],
              percentiles: { p75: 3541 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3125,
        lcp: 3541,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823966275,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9212311557788946,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04371859296482412,
                },
                { start: "0.25", density: 0.03505025125628141 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5215790809850205 },
                { start: 1800, end: 3000, density: 0.212490479817212 },
                { start: 3000, density: 0.2659304391977675 },
              ],
              percentiles: { p75: 3290 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618890858445176 },
                { start: 100, end: 300, density: 0.030514054190934413 },
                { start: 300, density: 0.007596859964547987 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5873459535001918 },
                { start: 2500, end: 4000, density: 0.2158556727226532 },
                { start: 4000, density: 0.19679837377715484 },
              ],
              percentiles: { p75: 3606 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3290,
        lcp: 3606,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823966561,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7545245475452453,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16118388161183878,
                },
                { start: "0.25", density: 0.08429157084291573 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8835349395181443 },
                { start: 1800, end: 3000, density: 0.0852744176746976 },
                { start: 3000, density: 0.031190642807157967 },
              ],
              percentiles: { p75: 1316 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9750049990002 },
                { start: 100, end: 300, density: 0.011197760447910418 },
                { start: 300, density: 0.013797240551889583 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8748999999999999 },
                { start: 2500, end: 4000, density: 0.08769999999999996 },
                { start: 4000, density: 0.03740000000000015 },
              ],
              percentiles: { p75: 1916 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1316,
        lcp: 1916,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1650823966841,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.746 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11809999999999997,
                },
                { start: "0.25", density: 0.13590000000000005 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6355999999999997 },
                { start: 1800, end: 3000, density: 0.14639999999999997 },
                { start: 3000, density: 0.21800000000000025 },
              ],
              percentiles: { p75: 2652 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2652, cls: "0.10" },
      timestamp: 1650823967051,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9078907890789079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0731073107310731,
                },
                { start: "0.25", density: 0.01900190019001902 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.766893242702919 },
                { start: 1800, end: 3000, density: 0.1545381847261096 },
                { start: 3000, density: 0.07856857257097133 },
              ],
              percentiles: { p75: 1769 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585000000000001 },
                { start: 100, end: 300, density: 0.027900000000000005 },
                { start: 300, density: 0.013599999999999982 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8100189981001901 },
                { start: 2500, end: 4000, density: 0.12638736126387365 },
                { start: 4000, density: 0.06359364063593635 },
              ],
              percentiles: { p75: 2217 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1769,
        lcp: 2217,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650823967242,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8741464563221097,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10007063809748058,
                },
                { start: "0.25", density: 0.02578290558040969 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7826702868610547 },
                { start: 1800, end: 3000, density: 0.15806870499350714 },
                { start: 3000, density: 0.05926100814543828 },
              ],
              percentiles: { p75: 1701 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554810914313068 },
                { start: 100, end: 300, density: 0.029918621349928197 },
                { start: 300, density: 0.014600287218765136 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8158236057068736 },
                { start: 2500, end: 4000, density: 0.13418228982431313 },
                { start: 4000, density: 0.0499941044688134 },
              ],
              percentiles: { p75: 2164 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1701,
        lcp: 2164,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823967442,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6504000000000001 },
                { start: 1800, end: 3000, density: 0.24889999999999995 },
                { start: 3000, density: 0.1007 },
              ],
              percentiles: { p75: 2319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9898 },
                { start: 100, end: 300, density: 0.010200000000000002 },
                { start: 300 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7398260173982603 },
                { start: 2500, end: 4000, density: 0.18548145185481463 },
                { start: 4000, density: 0.07469253074692514 },
              ],
              percentiles: { p75: 2600 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7902999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1455 },
                { start: "0.25", density: 0.0642 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2319, lcp: 2600, cls: "0.08", fid: 9 },
      timestamp: 1650823967759,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9224 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04939999999999999,
                },
                { start: "0.25", density: 0.028199999999999992 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5693000000000017 },
                { start: 1800, end: 3000, density: 0.1699000000000005 },
                { start: 3000, density: 0.26079999999999776 },
              ],
              percentiles: { p75: 3004 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6197760447910398 },
                { start: 2500, end: 4000, density: 0.1774645070985798 },
                { start: 4000, density: 0.20275944811038032 },
              ],
              percentiles: { p75: 3382 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 3004, lcp: 3382, cls: "0.00" },
      timestamp: 1650823967954,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.95999599959996 },
                { start: 100, end: 300, density: 0.027302730273027303 },
                { start: 300, density: 0.012701270127012781 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7320767923207676 },
                { start: 2500, end: 4000, density: 0.16283371662833707 },
                { start: 4000, density: 0.10508949105089539 },
              ],
              percentiles: { p75: 2615 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8104 },
                { start: "0.10", end: "0.25", density: 0.1273 },
                { start: "0.25", density: 0.06230000000000008 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6619338066193369 },
                { start: 1800, end: 3000, density: 0.205679432056794 },
                { start: 3000, density: 0.1323867613238692 },
              ],
              percentiles: { p75: 2210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2210,
        lcp: 2615,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1650823968141,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653131289215106 },
                { start: 100, end: 300, density: 0.03149046998934533 },
                { start: 300, density: 0.0031964010891440743 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.44414372912587863 },
                { start: 2500, end: 4000, density: 0.3351952090291377 },
                { start: 4000, density: 0.22066106184498366 },
              ],
              percentiles: { p75: 3855 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9517328148232872,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01715658240878417,
                },
                { start: "0.25", density: 0.03111060276792862 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.31552221581073336 },
                { start: 1800, end: 3000, density: 0.343219849971149 },
                { start: 3000, density: 0.3412579342181177 },
              ],
              percentiles: { p75: 3497 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3497,
        lcp: 3855,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823968328,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8938713512085591 },
                { start: 2500, end: 4000, density: 0.08407079646017697 },
                { start: 4000, density: 0.02205785233126399 },
              ],
              percentiles: { p75: 1813 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8959968602825745,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06462585034013607,
                },
                { start: "0.25", density: 0.03937728937728937 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9047619047619048 },
                { start: 1800, end: 3000, density: 0.06912016884316054 },
                { start: 3000, density: 0.026117926394934755 },
              ],
              percentiles: { p75: 1282 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534664148907471 },
                { start: 100, end: 300, density: 0.03007823037496628 },
                { start: 300, density: 0.016455354734286526 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1282,
        lcp: 1813,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1650823968613,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6104591462520149 },
                { start: 2500, end: 4000, density: 0.20324189526184464 },
                { start: 4000, density: 0.18629895848614045 },
              ],
              percentiles: { p75: 3377 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9073753961394412,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027081532699510233,
                },
                { start: "0.25", density: 0.06554307116104868 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5401577102803723 },
                { start: 1800, end: 3000, density: 0.25408878504672827 },
                { start: 3000, density: 0.2057535046728995 },
              ],
              percentiles: { p75: 2686 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8588611449451887 },
                { start: 100, end: 300, density: 0.06044457978075518 },
                { start: 300, density: 0.08069427527405613 },
              ],
              percentiles: { p75: 25 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2686,
        lcp: 3377,
        cls: "0.00",
        fid: 25,
      },
      timestamp: 1650823968909,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8537353735373535 },
                { start: 2500, end: 4000, density: 0.11426142614261421 },
                { start: 4000, density: 0.03200320032003222 },
              ],
              percentiles: { p75: 1989 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9505049495050495,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037696230376962306,
                },
                { start: "0.25", density: 0.011798820117988194 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8403478956313106 },
                { start: 1800, end: 3000, density: 0.11996401079676099 },
                { start: 3000, density: 0.03968809357192834 },
              ],
              percentiles: { p75: 1554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728783026421137 },
                { start: 100, end: 300, density: 0.017013610888710975 },
                { start: 300, density: 0.01010808646917533 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1554,
        lcp: 1989,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650823969213,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8166 },
                { start: "0.10", end: "0.25", density: 0.1305 },
                { start: "0.25", density: 0.052900000000000065 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7280456091218239 },
                { start: 1800, end: 3000, density: 0.1670334066813362 },
                { start: 3000, density: 0.10492098419683984 },
              ],
              percentiles: { p75: 1910 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9396999999999998 },
                { start: 100, end: 300, density: 0.034699999999999995 },
                { start: 300, density: 0.02560000000000024 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7730319095728716 },
                { start: 2500, end: 4000, density: 0.14264279283785128 },
                { start: 4000, density: 0.08432529758927708 },
              ],
              percentiles: { p75: 2412 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1910,
        lcp: 2412,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1650823969420,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9035790161791143 },
                { start: 1800, end: 3000, density: 0.07697336166040204 },
                { start: 3000, density: 0.01944762216048386 },
              ],
              percentiles: { p75: 1325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485417365068721 },
                { start: 100, end: 300, density: 0.02430439155212872 },
                { start: 300, density: 0.02715387194099919 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9170775805391189 },
                { start: 2500, end: 4000, density: 0.06549967126890203 },
                { start: 4000, density: 0.017422748191979028 },
              ],
              percentiles: { p75: 1733 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9377828054298643,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04007756948933419,
                },
                { start: "0.25", density: 0.022139625080801546 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1325,
        lcp: 1733,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823969662,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9254149170165967,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03849230153969206,
                },
                { start: "0.25", density: 0.036092781443711267 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5800259922023373 },
                { start: 1800, end: 3000, density: 0.1911426572028386 },
                { start: 3000, density: 0.22883135059482404 },
              ],
              percentiles: { p75: 2970 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9682031796820318 },
                { start: 100, end: 300, density: 0.0240975902409759 },
                { start: 300, density: 0.007699230076992301 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.621524304860974 },
                { start: 2500, end: 4000, density: 0.19483896779355922 },
                { start: 4000, density: 0.18363672734546688 },
              ],
              percentiles: { p75: 3564 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2970,
        lcp: 3564,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650823970043,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7957000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15630000000000002,
                },
                { start: "0.25", density: 0.047999999999999945 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8937106289371064 },
                { start: 1800, end: 3000, density: 0.07959204079592043 },
                { start: 3000, density: 0.026697330266973098 },
              ],
              percentiles: { p75: 1311 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656137544982007 },
                { start: 100, end: 300, density: 0.01749300279888045 },
                { start: 300, density: 0.01689324270291876 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8739499999999994 },
                { start: 2500, end: 4000, density: 0.09204999999999994 },
                { start: 4000, density: 0.03400000000000061 },
              ],
              percentiles: { p75: 1916 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1311,
        lcp: 1916,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1650823970266,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9667919799498748,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01616541353383459,
                },
                { start: "0.25", density: 0.017042606516290717 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6176953174302664 },
                { start: 1800, end: 3000, density: 0.25432285750347094 },
                { start: 3000, density: 0.12798182506626263 },
              ],
              percentiles: { p75: 2185 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9758206132648926 },
                { start: 100, end: 300, density: 0.01593948399297582 },
                { start: 300, density: 0.008239902742131568 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7434002778830378 },
                { start: 2500, end: 4000, density: 0.1535303776683089 },
                { start: 4000, density: 0.10306934444865344 },
              ],
              percentiles: { p75: 2536 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2185,
        lcp: 2536,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823970458,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6355999999999997 },
                { start: 1800, end: 3000, density: 0.14639999999999997 },
                { start: 3000, density: 0.21800000000000025 },
              ],
              percentiles: { p75: 2732 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.746 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11809999999999997,
                },
                { start: "0.25", density: 0.13590000000000005 },
              ],
              percentiles: { p75: "0.11" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2732, cls: "0.11" },
      timestamp: 1650823970755,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.746 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11809999999999997,
                },
                { start: "0.25", density: 0.13590000000000005 },
              ],
              percentiles: { p75: "0.11" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6355999999999997 },
                { start: 1800, end: 3000, density: 0.14639999999999997 },
                { start: 3000, density: 0.21800000000000025 },
              ],
              percentiles: { p75: 2732 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2732, cls: "0.11" },
      timestamp: 1650823971094,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690061987602478 },
                { start: 100, end: 300, density: 0.013597280543891222 },
                { start: 300, density: 0.017396520695860875 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7120712071207113 },
                { start: 2500, end: 4000, density: 0.18351835183518317 },
                { start: 4000, density: 0.10441044104410563 },
              ],
              percentiles: { p75: 2769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8066806680668067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1417141714171417,
                },
                { start: "0.25", density: 0.05160516051605165 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6948305169483046 },
                { start: 1800, end: 3000, density: 0.20397960203979576 },
                { start: 3000, density: 0.10118988101189964 },
              ],
              percentiles: { p75: 2097 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2097,
        lcp: 2769,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650823971455,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602801400700349 },
                { start: 100, end: 300, density: 0.02661330665332666 },
                { start: 300, density: 0.013106553276638469 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8093381323735248 },
                { start: 2500, end: 4000, density: 0.13657268546290732 },
                { start: 4000, density: 0.054089182163567895 },
              ],
              percentiles: { p75: 2196 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.884 },
                { start: "0.10", end: "0.25", density: 0.0903 },
                { start: "0.25", density: 0.025699999999999976 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7915416916616672 },
                { start: 1800, end: 3000, density: 0.15196960607878418 },
                { start: 3000, density: 0.05648870225954872 },
              ],
              percentiles: { p75: 1671 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1671,
        lcp: 2196,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650823971694,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8937000000000002 },
                { start: 2500, end: 4000, density: 0.08420000000000001 },
                { start: 4000, density: 0.022099999999999873 },
              ],
              percentiles: { p75: 1841 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8372837283728373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13681368136813682,
                },
                { start: "0.25", density: 0.025902590259025898 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8786757351470295 },
                { start: 1800, end: 3000, density: 0.09241848369673931 },
                { start: 3000, density: 0.02890578115623118 },
              ],
              percentiles: { p75: 1353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665033496650335 },
                { start: 100, end: 300, density: 0.016598340165983404 },
                { start: 300, density: 0.01689831016898307 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1353,
        lcp: 1841,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650823972008,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9335066493350666,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037996200379962,
                },
                { start: "0.25", density: 0.028497150284971486 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8566430070978702 },
                { start: 1800, end: 3000, density: 0.09917024892532236 },
                { start: 3000, density: 0.04418674397680729 },
              ],
              percentiles: { p75: 1421 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543908781756351 },
                { start: 100, end: 300, density: 0.019803960792158428 },
                { start: 300, density: 0.02580516103220654 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8714628537146286 },
                { start: 2500, end: 4000, density: 0.09104089591040902 },
                { start: 4000, density: 0.037496250374962445 },
              ],
              percentiles: { p75: 1855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1421,
        lcp: 1855,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650823972265,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8655486907914095 },
                { start: 1800, end: 3000, density: 0.10400117681671082 },
                { start: 3000, density: 0.030450132391879707 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386945016171712 },
                { start: 100, end: 300, density: 0.03337253748897383 },
                { start: 300, density: 0.027932960893854965 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8340678713089466 },
                { start: 2500, end: 4000, density: 0.13258410459820769 },
                { start: 4000, density: 0.0333480240928456 },
              ],
              percentiles: { p75: 2099 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.878423416896102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08679901463556006,
                },
                { start: "0.25", density: 0.034777568468337884 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 2099,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650823972714,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7736630383341222 },
                { start: 1800, end: 3000, density: 0.15617605300520582 },
                { start: 3000, density: 0.07016090866067201 },
              ],
              percentiles: { p75: 1792 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1792 },
      timestamp: 1650823973140,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9618133935289691,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02050413844996238,
                },
                { start: "0.25", density: 0.017682468021068477 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8521018125723102 },
                { start: 1800, end: 3000, density: 0.11839568067875055 },
                { start: 3000, density: 0.029502506748939332 },
              ],
              percentiles: { p75: 1499 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9397861564434441 },
                { start: 100, end: 300, density: 0.029262802476083292 },
                { start: 300, density: 0.030951041080472676 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8460725945842136 },
                { start: 2500, end: 4000, density: 0.12051085077779912 },
                { start: 4000, density: 0.03341655463798727 },
              ],
              percentiles: { p75: 2105 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1499,
        lcp: 2105,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650823973470,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9006526468455404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08532753202803964,
                },
                { start: "0.25", density: 0.014019821126420114 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8734639250517094 },
                { start: 1800, end: 3000, density: 0.10658230928336783 },
                { start: 3000, density: 0.01995376566492268 },
              ],
              percentiles: { p75: 1469 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.974245224892175 },
                { start: 100, end: 300, density: 0.015773259396179917 },
                { start: 300, density: 0.009981515711645121 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9009244617443132 },
                { start: 2500, end: 4000, density: 0.08022138425982243 },
                { start: 4000, density: 0.018854153995864303 },
              ],
              percentiles: { p75: 1825 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1469,
        lcp: 1825,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823973797,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8186 },
                { start: "0.10", end: "0.25", density: 0.1232 },
                { start: "0.25", density: 0.05819999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6155999999999996 },
                { start: 1800, end: 3000, density: 0.22549999999999987 },
                { start: 3000, density: 0.1589000000000004 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649035096490352 },
                { start: 100, end: 300, density: 0.0238976102389761 },
                { start: 300, density: 0.011198880111988815 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.69045 },
                { start: 2500, end: 4000, density: 0.18675 },
                { start: 4000, density: 0.12280000000000003 },
              ],
              percentiles: { p75: 2927 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2927,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650823974137,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7983201679832017,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15588441155884408,
                },
                { start: "0.25", density: 0.04579542045795424 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9418058194180582 },
                { start: 1800, end: 3000, density: 0.04699530046995302 },
                { start: 3000, density: 0.011198880111988753 },
              ],
              percentiles: { p75: 1128 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962411276617015 },
                { start: 100, end: 300, density: 0.018694391682495252 },
                { start: 300, density: 0.018894331700489847 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9299210236928921 },
                { start: 2500, end: 4000, density: 0.05648305508347497 },
                { start: 4000, density: 0.013595921223632899 },
              ],
              percentiles: { p75: 1590 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1128,
        lcp: 1590,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650823974368,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.1691999999999995 },
                { start: 1800, end: 3000, density: 0.43699999999999867 },
                { start: 3000, density: 0.39380000000000187 },
              ],
              percentiles: { p75: 4031 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3372837283728365 },
                { start: 2500, end: 4000, density: 0.3496849684968488 },
                { start: 4000, density: 0.3130313031303148 },
              ],
              percentiles: { p75: 4635 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8782878287828783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0676067606760676,
                },
                { start: "0.25", density: 0.05410541054105404 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4031, lcp: 4635, cls: "0.03" },
      timestamp: 1650823974585,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9246575342465755 },
                { start: 2500, end: 4000, density: 0.057644235576442354 },
                { start: 4000, density: 0.017698230176982268 },
              ],
              percentiles: { p75: 1763 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.931193119311931,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0535053505350535,
                },
                { start: "0.25", density: 0.015301530153015304 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9217921792179217 },
                { start: 1800, end: 3000, density: 0.06760676067606762 },
                { start: 3000, density: 0.010601060106010625 },
              ],
              percentiles: { p75: 1277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9858985898589859 },
                { start: 100, end: 300, density: 0.014101410141014101 },
                { start: 300 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1277,
        lcp: 1763,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1650823974920,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8010804820612268 },
                { start: 1800, end: 3000, density: 0.1299348940296439 },
                { start: 3000, density: 0.06898462390912924 },
              ],
              percentiles: { p75: 1588 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9401131502690767 },
                { start: 100, end: 300, density: 0.033669104457016694 },
                { start: 300, density: 0.026217745273906575 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8279867256637166 },
                { start: 2500, end: 4000, density: 0.11628871681415924 },
                { start: 4000, density: 0.055724557522124206 },
              ],
              percentiles: { p75: 2093 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9528003302600797,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02683363148479427,
                },
                { start: "0.25", density: 0.020366038255125927 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1588,
        lcp: 2093,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1650823975181,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: {
            formFactor: "PHONE",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9545454545454546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019715224534501644,
                },
                { start: "0.25", density: 0.025739320920043808 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6143178410794592 },
                { start: 1800, end: 3000, density: 0.24999999999999956 },
                { start: 3000, density: 0.13568215892054122 },
              ],
              percentiles: { p75: 2346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412241588974463 },
                { start: 100, end: 300, density: 0.025537089582488855 },
                { start: 300, density: 0.0332387515200649 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6851713859910584 },
                { start: 2500, end: 4000, density: 0.19746646795827136 },
                { start: 4000, density: 0.1173621460506702 },
              ],
              percentiles: { p75: 2823 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2346,
        lcp: 2823,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823975562,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6717431570281951 },
                { start: 2500, end: 4000, density: 0.24675859230294306 },
                { start: 4000, density: 0.08149825066886193 },
              ],
              percentiles: { p75: 2775 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9619817997977755,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023255813953488372,
                },
                { start: "0.25", density: 0.0147623862487361 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5650635019779304 },
                { start: 1800, end: 3000, density: 0.3158442640016656 },
                { start: 3000, density: 0.11909223402040386 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9828812805691418 },
                { start: 100, end: 300, density: 0.017118719430858163 },
                { start: 300 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2524,
        lcp: 2775,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823975927,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8973 },
                { start: "0.10", end: "0.25", density: 0.0611 },
                { start: "0.25", density: 0.04159999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4829965993198637 },
                { start: 1800, end: 3000, density: 0.27915583116623305 },
                { start: 3000, density: 0.2378475695139032 },
              ],
              percentiles: { p75: 2953 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572829131652661 },
                { start: 100, end: 300, density: 0.03191276510604243 },
                { start: 300, density: 0.010804321728691432 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5755575557555755 },
                { start: 2500, end: 4000, density: 0.24872487248724862 },
                { start: 4000, density: 0.1757175717571758 },
              ],
              percentiles: { p75: 3402 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2953,
        lcp: 3402,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650823976317,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5880018317814069 },
                { start: 2500, end: 4000, density: 0.2756831018165163 },
                { start: 4000, density: 0.13631506640207688 },
              ],
              percentiles: { p75: 3148 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9431578947368421,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023007518796992477,
                },
                { start: "0.25", density: 0.033834586466165426 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39480559397571907 },
                { start: 1800, end: 3000, density: 0.390809897033964 },
                { start: 3000, density: 0.21438450899031686 },
              ],
              percentiles: { p75: 2830 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715766331658291 },
                { start: 100, end: 300, density: 0.023398241206030148 },
                { start: 300, density: 0.005025125628140707 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2830,
        lcp: 3148,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650823976637,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6054237966576587 },
                { start: 1800, end: 3000, density: 0.24026818773141131 },
                { start: 3000, density: 0.15430801561092994 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568956895689569 },
                { start: 100, end: 300, density: 0.030003000300030003 },
                { start: 300, density: 0.013101310131013174 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6869934967483724 },
                { start: 2500, end: 4000, density: 0.17973986993496713 },
                { start: 4000, density: 0.1332666333166605 },
              ],
              percentiles: { p75: 2881 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8797120287971203,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07089291070892911,
                },
                { start: "0.25", density: 0.049395060493950614 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2386,
        lcp: 2881,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650823977078,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9405756731662024,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03265242958836274,
                },
                { start: "0.25", density: 0.026771897245434887 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3943883984867572 },
                { start: 1800, end: 3000, density: 0.3307061790668332 },
                { start: 3000, density: 0.27490542244640953 },
              ],
              percentiles: { p75: 3190 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9053114132153015 },
                { start: 100, end: 300, density: 0.04315523237432816 },
                { start: 300, density: 0.051533354410370304 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.510152683771447 },
                { start: 2500, end: 4000, density: 0.2956083739965372 },
                { start: 4000, density: 0.1942389422320158 },
              ],
              percentiles: { p75: 3620 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3190,
        lcp: 3620,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650823977366,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9337349397590361,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057965194109772425,
                },
                { start: "0.25", density: 0.008299866131191429 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8287449392712553 },
                { start: 1800, end: 3000, density: 0.1414304993252362 },
                { start: 3000, density: 0.029824561403508695 },
              ],
              percentiles: { p75: 1596 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587999446979124 },
                { start: 100, end: 300, density: 0.02875708557998065 },
                { start: 300, density: 0.012442969722107011 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8548148148148148 },
                { start: 2500, end: 4000, density: 0.12026936026936022 },
                { start: 4000, density: 0.02491582491582503 },
              ],
              percentiles: { p75: 2063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1596,
        lcp: 2063,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823977891,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9422704378148005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022601059021051275,
                },
                { start: "0.25", density: 0.03512850316414829 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4705268648930628 },
                { start: 1800, end: 3000, density: 0.37154407929055866 },
                { start: 3000, density: 0.1579290558163785 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9206008583690986 },
                { start: 100, end: 300, density: 0.03307245645039132 },
                { start: 300, density: 0.04632668518051006 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5865234375000006 },
                { start: 2500, end: 4000, density: 0.2961588541666671 },
                { start: 4000, density: 0.11731770833333238 },
              ],
              percentiles: { p75: 3040 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2622,
        lcp: 3040,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650823978563,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9337327523602033,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03340595497458243,
                },
                { start: "0.25", density: 0.03286129266521423 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8501838235294115 },
                { start: 1800, end: 3000, density: 0.10808823529411764 },
                { start: 3000, density: 0.04172794117647074 },
              ],
              percentiles: { p75: 1519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587928032501452 },
                { start: 100, end: 300, density: 0.01992648481331012 },
                { start: 300, density: 0.021280711936544766 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.855359765051395 },
                { start: 2500, end: 4000, density: 0.09875183553597647 },
                { start: 4000, density: 0.04588839941262848 },
              ],
              percentiles: { p75: 2099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1519,
        lcp: 2099,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823979035,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9816824966078697,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010176390773405698,
                },
                { start: "0.25", density: 0.008141112618724558 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5021454381210471 },
                { start: 1800, end: 3000, density: 0.3625790424570907 },
                { start: 3000, density: 0.13527551942186208 },
              ],
              percentiles: { p75: 2483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9215663888571752 },
                { start: 100, end: 300, density: 0.05114739125470943 },
                { start: 300, density: 0.027286219888115297 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.579630469281341 },
                { start: 2500, end: 4000, density: 0.3056563137610513 },
                { start: 4000, density: 0.11471321695760776 },
              ],
              percentiles: { p75: 3178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2483,
        lcp: 3178,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823979487,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7492 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21409999999999998,
                },
                { start: "0.25", density: 0.03670000000000002 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.799780087964814 },
                { start: 1800, end: 3000, density: 0.1447421031587366 },
                { start: 3000, density: 0.05547780887644939 },
              ],
              percentiles: { p75: 1641 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.952280912364946 },
                { start: 100, end: 300, density: 0.02621048419367747 },
                { start: 300, density: 0.021508603441376523 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8189500000000002 },
                { start: 2500, end: 4000, density: 0.12865000000000001 },
                { start: 4000, density: 0.05239999999999978 },
              ],
              percentiles: { p75: 2161 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1641,
        lcp: 2161,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1650823980134,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8998299659931988 },
                { start: 2500, end: 4000, density: 0.08186637327465492 },
                { start: 4000, density: 0.018303660732146298 },
              ],
              percentiles: { p75: 1837 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.875 },
                { start: "0.10", end: "0.25", density: 0.1094 },
                { start: "0.25", density: 0.015600000000000015 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8839767953590718 },
                { start: 1800, end: 3000, density: 0.09791958391678338 },
                { start: 3000, density: 0.01810362072414477 },
              ],
              percentiles: { p75: 1414 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9786021397860213 },
                { start: 100, end: 300, density: 0.0132986701329867 },
                { start: 300, density: 0.008099190080991914 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1414,
        lcp: 1837,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650823980407,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9421179302045728,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021299638989169676,
                },
                { start: "0.25", density: 0.03658243080625752 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5834042036204569 },
                { start: 1800, end: 3000, density: 0.25367513060381375 },
                { start: 3000, density: 0.1629206657757295 },
              ],
              percentiles: { p75: 2460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517095083603693 },
                { start: 100, end: 300, density: 0.03468929373596207 },
                { start: 300, density: 0.013601197903668552 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6875907111756154 },
                { start: 2500, end: 4000, density: 0.18565553942912402 },
                { start: 4000, density: 0.12675374939526055 },
              ],
              percentiles: { p75: 2857 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2460,
        lcp: 2857,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650823980759,
    },
  ],
};
