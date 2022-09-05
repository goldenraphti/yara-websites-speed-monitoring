export const audit20 = {
  date: "2022-05-05T11:56:53.134Z",
  dateParsedLocale: "05/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "05/05/2022-legacy-audit",
  audits: [
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
                  density: 0.930795847750865,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043499752842313395,
                },
                { start: "0.25", density: 0.025704399406821548 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5921743279783686 },
                { start: 200, end: 500, density: 0.2729441705105775 },
                { start: 500, density: 0.134881501511054 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8199497066219615 },
                { start: 800, end: 1800, density: 0.16328583403185248 },
                { start: 1800, density: 0.01676445934618598 },
              ],
              percentiles: { p75: 723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.923947946594558 },
                { start: 1800, end: 3000, density: 0.055940510393780646 },
                { start: 3000, density: 0.020111543011661244 },
              ],
              percentiles: { p75: 1280 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9369031377899045 },
                { start: 100, end: 300, density: 0.031889495225102316 },
                { start: 300, density: 0.031207366984993157 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9197748655913979 },
                { start: 2500, end: 4000, density: 0.06560819892473115 },
                { start: 4000, density: 0.014616935483870898 },
              ],
              percentiles: { p75: 1699 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1280,
        lcp: 1699,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751753282,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6660219213410703 },
                { start: 800, end: 1800, density: 0.2950784440146143 },
                { start: 1800, density: 0.038899634644315305 },
              ],
              percentiles: { p75: 928 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8492527615334634 },
                { start: 1800, end: 3000, density: 0.11760883690708254 },
                { start: 3000, density: 0.03313840155945411 },
              ],
              percentiles: { p75: 1492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9321195329507225 },
                { start: 100, end: 300, density: 0.03225806451612904 },
                { start: 300, density: 0.03562240253314848 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8423110338835795 },
                { start: 2500, end: 4000, density: 0.11967854039965255 },
                { start: 4000, density: 0.038010425716767805 },
              ],
              percentiles: { p75: 2114 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9597372324645052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023733841915660095,
                },
                { start: "0.25", density: 0.016528925619834697 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5199067780151483 },
                { start: 200, end: 500, density: 0.32103321033210314 },
                { start: 500, density: 0.15906001165274858 },
              ],
              percentiles: { p75: 324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1492,
        lcp: 2114,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651751753509,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5345069013802762 },
                { start: 200, end: 500, density: 0.3374674934986998 },
                { start: 500, density: 0.12802560512102393 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.662033796620338 },
                { start: 800, end: 1800, density: 0.30916908309169094 },
                { start: 1800, density: 0.028797120287971188 },
              ],
              percentiles: { p75: 903 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8872887288728873 },
                { start: 1800, end: 3000, density: 0.0891089108910891 },
                { start: 3000, density: 0.02360236023602354 },
              ],
              percentiles: { p75: 1377 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966 },
                { start: 100, end: 300, density: 0.0156 },
                { start: 300, density: 0.018400000000000066 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.853629274145171 },
                { start: 2500, end: 4000, density: 0.11507698460307941 },
                { start: 4000, density: 0.0312937412517495 },
              ],
              percentiles: { p75: 1986 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8219999999999998,
                },
                { start: "0.10", end: "0.25", density: 0.1334 },
                { start: "0.25", density: 0.04460000000000004 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1377,
        lcp: 1986,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1651751753678,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8335459997448006 },
                { start: 2500, end: 4000, density: 0.10979966824039812 },
                { start: 4000, density: 0.05665433201480123 },
              ],
              percentiles: { p75: 2060 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9782471228025801,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0061970405969394215,
                },
                { start: "0.25", density: 0.01555583660048058 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5914058618976659 },
                { start: 200, end: 500, density: 0.31408345752608086 },
                { start: 500, density: 0.09451068057625334 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6802523659305991 },
                { start: 800, end: 1800, density: 0.2610725552050472 },
                { start: 1800, density: 0.05867507886435379 },
              ],
              percentiles: { p75: 919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8055237367952146 },
                { start: 1800, end: 3000, density: 0.12638411607483774 },
                { start: 3000, density: 0.06809214712994772 },
              ],
              percentiles: { p75: 1598 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9508700102354146 },
                { start: 100, end: 300, density: 0.03390481064483112 },
                { start: 300, density: 0.0152251791197543 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1598,
        lcp: 2060,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751753773,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602960296029602 },
                { start: 100, end: 300, density: 0.021002100210020996 },
                { start: 300, density: 0.018701870187018688 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9326865373074615 },
                { start: 2500, end: 4000, density: 0.05371074214842969 },
                { start: 4000, density: 0.013602720544108757 },
              ],
              percentiles: { p75: 1616 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8113 },
                { start: "0.10", end: "0.25", density: 0.1416 },
                { start: "0.25", density: 0.047100000000000024 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7325732573257328 },
                { start: 200, end: 500, density: 0.17791779177917796 },
                { start: 500, density: 0.08950895089508927 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8464614154338265 },
                { start: 800, end: 1800, density: 0.13964414234306277 },
                { start: 1800, density: 0.013894442223110691 },
              ],
              percentiles: { p75: 680 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9409177246825954 },
                { start: 1800, end: 3000, density: 0.04478656403079077 },
                { start: 3000, density: 0.014295711286614 },
              ],
              percentiles: { p75: 1143 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1143,
        lcp: 1616,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651751753920,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5288106110023918 },
                { start: 1800, end: 3000, density: 0.3202870189171559 },
                { start: 3000, density: 0.15090237008045218 },
              ],
              percentiles: { p75: 2704 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967860422405877 },
                { start: 100, end: 300, density: 0.02617079889807163 },
                { start: 300, density: 0.005968778696051424 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6350624192854067 },
                { start: 2500, end: 4000, density: 0.2756134309083082 },
                { start: 4000, density: 0.08932414980628502 },
              ],
              percentiles: { p75: 2946 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9581296493092455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02911795961742827,
                },
                { start: "0.25", density: 0.01275239107332625 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6330008312551954 },
                { start: 200, end: 500, density: 0.32730673316708225 },
                { start: 500, density: 0.03969243557772233 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.324644030668127 },
                { start: 800, end: 1800, density: 0.43636363636363645 },
                { start: 1800, density: 0.23899233296823646 },
              ],
              percentiles: { p75: 1881 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2704,
        lcp: 2946,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751754030,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.96441458255568 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012940151797934552,
                },
                { start: "0.25", density: 0.022645265646385464 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6136165983351968 },
                { start: 200, end: 500, density: 0.3119642191576594 },
                { start: 500, density: 0.07441918250714376 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41870684243565554 },
                { start: 800, end: 1800, density: 0.4463276836158187 },
                { start: 1800, density: 0.13496547394852568 },
              ],
              percentiles: { p75: 1360 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.576065162907268 },
                { start: 1800, end: 3000, density: 0.25588972431077694 },
                { start: 3000, density: 0.16804511278195505 },
              ],
              percentiles: { p75: 2536 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634301732925585 },
                { start: 100, end: 300, density: 0.027905198776758407 },
                { start: 300, density: 0.008664627930682978 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.677079412871658 },
                { start: 2500, end: 4000, density: 0.20612219294944115 },
                { start: 4000, density: 0.11679839417890102 },
              ],
              percentiles: { p75: 2860 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2536,
        lcp: 2860,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751754158,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8148629725945189,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15003000600120023,
                },
                { start: "0.25", density: 0.035107021404280875 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8027 },
                { start: 200, end: 500, density: 0.13509999999999994 },
                { start: 500, density: 0.062200000000000144 },
              ],
              percentiles: { p75: 171 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.613183955186556 },
                { start: 800, end: 1800, density: 0.29388816644993493 },
                { start: 1800, density: 0.09292787836350912 },
              ],
              percentiles: { p75: 1122 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7547037630104082 },
                { start: 1800, end: 3000, density: 0.1529223378702962 },
                { start: 3000, density: 0.09237389911929568 },
              ],
              percentiles: { p75: 1815 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757927378213463 },
                { start: 100, end: 300, density: 0.016905071521456438 },
                { start: 300, density: 0.007302190657197166 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7721360680340168 },
                { start: 2500, end: 4000, density: 0.14102051025512755 },
                { start: 4000, density: 0.08684342171085561 },
              ],
              percentiles: { p75: 2389 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1815,
        lcp: 2389,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1651751754286,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37589755864049756 },
                { start: 800, end: 1800, density: 0.47582575394925775 },
                { start: 1800, density: 0.1482766874102447 },
              ],
              percentiles: { p75: 1395 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5620648259303707 },
                { start: 1800, end: 3000, density: 0.27767106842737005 },
                { start: 3000, density: 0.1602641056422592 },
              ],
              percentiles: { p75: 2465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529909215271732 },
                { start: 100, end: 300, density: 0.0345728143265763 },
                { start: 300, density: 0.012436264146250478 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959744485958778 },
                { start: 2500, end: 4000, density: 0.1755453778474147 },
                { start: 4000, density: 0.1284801735567074 },
              ],
              percentiles: { p75: 2794 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9683884051055708,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015865441965883336,
                },
                { start: "0.25", density: 0.015746152928545882 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.699454200284765 },
                { start: 200, end: 500, density: 0.24632178452776454 },
                { start: 500, density: 0.05422401518747043 },
              ],
              percentiles: { p75: 225 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2465,
        lcp: 2794,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751754374,
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
                  density: 0.9349000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.053799999999999994,
                },
                { start: "0.25", density: 0.011300000000000004 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6161767646470706 },
                { start: 200, end: 500, density: 0.28814237152569494 },
                { start: 500, density: 0.09568086382723436 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6152538984406236 },
                { start: 800, end: 1800, density: 0.3456617353058775 },
                { start: 1800, density: 0.0390843662534988 },
              ],
              percentiles: { p75: 991 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8364999999999999 },
                { start: 1800, end: 3000, density: 0.13130000000000003 },
                { start: 3000, density: 0.03220000000000013 },
              ],
              percentiles: { p75: 1552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746050789842031 },
                { start: 100, end: 300, density: 0.015696860627874423 },
                { start: 300, density: 0.009698060387922407 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8412523757127143 },
                { start: 2500, end: 4000, density: 0.12483745123537061 },
                { start: 4000, density: 0.033910173051914974 },
              ],
              percentiles: { p75: 2106 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1552,
        lcp: 2106,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651751754500,
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
                  density: 0.9224137931034482,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05473135525260625,
                },
                { start: "0.25", density: 0.022854851643945497 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7599114509961763 },
                { start: 200, end: 500, density: 0.190581605956933 },
                { start: 500, density: 0.0495069430468907 },
              ],
              percentiles: { p75: 192 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5015700230270044 },
                { start: 800, end: 1800, density: 0.41720745237596807 },
                { start: 1800, density: 0.08122252459702754 },
              ],
              percentiles: { p75: 1233 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6971544715447157 },
                { start: 1800, end: 3000, density: 0.23597560975609758 },
                { start: 3000, density: 0.06686991869918683 },
              ],
              percentiles: { p75: 1978 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532666821669379 },
                { start: 100, end: 300, density: 0.03301557777261102 },
                { start: 300, density: 0.01371774006045104 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7705870362821036 },
                { start: 2500, end: 4000, density: 0.17600896860986548 },
                { start: 4000, density: 0.053403995108031004 },
              ],
              percentiles: { p75: 2404 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1978,
        lcp: 2404,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751754582,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627736269497968 },
                { start: 100, end: 300, density: 0.026740070782540308 },
                { start: 300, density: 0.010486302267662874 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7561240112273541 },
                { start: 2500, end: 4000, density: 0.15278132176575654 },
                { start: 4000, density: 0.09109466700688927 },
              ],
              percentiles: { p75: 2481 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9625458686574718,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014931038846007844,
                },
                { start: "0.25", density: 0.022523092496520323 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.583584715937657 },
                { start: 200, end: 500, density: 0.277526395173454 },
                { start: 500, density: 0.13888888888888898 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49905267146646476 },
                { start: 800, end: 1800, density: 0.4015409877478845 },
                { start: 1800, density: 0.09940634078565062 },
              ],
              percentiles: { p75: 1202 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6675613496932506 },
                { start: 1800, end: 3000, density: 0.21868609406952932 },
                { start: 3000, density: 0.11375255623722014 },
              ],
              percentiles: { p75: 2093 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2093,
        lcp: 2481,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751754710,
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
                  density: 0.9785658175288969,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010997643362136685,
                },
                { start: "0.25", density: 0.010436539108966438 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5735722284434487 },
                { start: 200, end: 500, density: 0.3257558790593504 },
                { start: 500, density: 0.10067189249720088 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3942620195001681 },
                { start: 800, end: 1800, density: 0.3882102431917516 },
                { start: 1800, density: 0.21752773730808017 },
              ],
              percentiles: { p75: 1737 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5111285971223016 },
                { start: 1800, end: 3000, density: 0.35982464028776934 },
                { start: 3000, density: 0.1290467625899291 },
              ],
              percentiles: { p75: 2456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9190535491905355 },
                { start: 100, end: 300, density: 0.05298313143892223 },
                { start: 300, density: 0.027963319370542333 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.593468468468468 },
                { start: 2500, end: 4000, density: 0.29999999999999977 },
                { start: 4000, density: 0.10653153153153229 },
              ],
              percentiles: { p75: 3120 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2456,
        lcp: 3120,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751754838,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.760677183532128 },
                { start: 800, end: 1800, density: 0.1968705912530461 },
                { start: 1800, density: 0.04245222521482599 },
              ],
              percentiles: { p75: 784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8519749456730153 },
                { start: 1800, end: 3000, density: 0.10008947973923046 },
                { start: 3000, density: 0.04793557458775414 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386463446137948 },
                { start: 100, end: 300, density: 0.031128907259106168 },
                { start: 300, density: 0.030224748127099046 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.874215045495322 },
                { start: 2500, end: 4000, density: 0.08721004741765986 },
                { start: 4000, density: 0.038574907087017996 },
              ],
              percentiles: { p75: 1843 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9274255156608098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04074357015533487,
                },
                { start: "0.25", density: 0.03183091418385533 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5139741822283498 },
                { start: 200, end: 500, density: 0.349166562225843 },
                { start: 500, density: 0.13685925554580727 },
              ],
              percentiles: { p75: 307 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1843,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751754970,
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
                { start: "0.00", end: "0.10", density: 0.8379 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07579999999999999,
                },
                { start: "0.25", density: 0.08630000000000007 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5680863827234561 },
                { start: 200, end: 500, density: 0.2673465306938616 },
                { start: 500, density: 0.16456708658268218 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3091690830916907 },
                { start: 800, end: 1800, density: 0.41995800419957985 },
                { start: 1800, density: 0.27087291270872943 },
              ],
              percentiles: { p75: 1863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5219521952195219 },
                { start: 1800, end: 3000, density: 0.34623462346234607 },
                { start: 3000, density: 0.13181318131813202 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9433999999999998 },
                { start: 100, end: 300, density: 0.015699999999999995 },
                { start: 300, density: 0.040900000000000145 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6269499999999999 },
                { start: 2500, end: 4000, density: 0.28205 },
                { start: 4000, density: 0.09099999999999993 },
              ],
              percentiles: { p75: 2981 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2524,
        lcp: 2981,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651751755128,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2707187843646904 },
                { start: 800, end: 1800, density: 0.39488153553933786 },
                { start: 1800, density: 0.3343996800959717 },
              ],
              percentiles: { p75: 2046 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48569713942788534 },
                { start: 1800, end: 3000, density: 0.2965593118623723 },
                { start: 3000, density: 0.21774354870974233 },
              ],
              percentiles: { p75: 2826 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9349065093490649 },
                { start: 100, end: 300, density: 0.03229677032296769 },
                { start: 300, density: 0.032796720327967356 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5716143228645721 },
                { start: 2500, end: 4000, density: 0.2609521904380873 },
                { start: 4000, density: 0.16743348669734054 },
              ],
              percentiles: { p75: 3349 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7867213278672132,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12418758124187579,
                },
                { start: "0.25", density: 0.08909109089091106 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.613177364527095 },
                { start: 200, end: 500, density: 0.24135172965406934 },
                { start: 500, density: 0.14547090581883562 },
              ],
              percentiles: { p75: 291 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2826,
        lcp: 3349,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651751755227,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6178617861786179 },
                { start: 200, end: 500, density: 0.2806280628062806 },
                { start: 500, density: 0.10151015101510148 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6691007302190655 },
                { start: 800, end: 1800, density: 0.28118435530659186 },
                { start: 1800, density: 0.049714914474342696 },
              ],
              percentiles: { p75: 947 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8171365726854627 },
                { start: 1800, end: 3000, density: 0.13337332533493296 },
                { start: 3000, density: 0.049490101979604455 },
              ],
              percentiles: { p75: 1597 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516999999999999 },
                { start: 100, end: 300, density: 0.03 },
                { start: 300, density: 0.018300000000000025 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.842581483703259 },
                { start: 2500, end: 4000, density: 0.11152769446110776 },
                { start: 4000, density: 0.045890821835633255 },
              ],
              percentiles: { p75: 2046 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.815 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15749999999999997,
                },
                { start: "0.25", density: 0.02749999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1597,
        lcp: 2046,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1651751755307,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8181355068772285 },
                { start: 1800, end: 3000, density: 0.1465868568517575 },
                { start: 3000, density: 0.03527763627101398 },
              ],
              percentiles: { p75: 1613 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9685245901639343 },
                { start: 100, end: 300, density: 0.02059016393442623 },
                { start: 300, density: 0.010885245901639336 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8445618950585837 },
                { start: 2500, end: 4000, density: 0.12245287824758024 },
                { start: 4000, density: 0.03298522669383606 },
              ],
              percentiles: { p75: 2089 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9423393739703458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04802940058294259,
                },
                { start: "0.25", density: 0.00963122544671145 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5349968808484097 },
                { start: 200, end: 500, density: 0.35271366188396774 },
                { start: 500, density: 0.11228945726762259 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.594325153374233 },
                { start: 800, end: 1800, density: 0.36221881390593036 },
                { start: 1800, density: 0.04345603271983661 },
              ],
              percentiles: { p75: 1014 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1613,
        lcp: 2089,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751755387,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8283828382838283 },
                { start: 2500, end: 4000, density: 0.11721172117211724 },
                { start: 4000, density: 0.05440544054405439 },
              ],
              percentiles: { p75: 2102 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9105910591059105,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0728072807280728,
                },
                { start: "0.25", density: 0.0166016601660166 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6359999999999997 },
                { start: 200, end: 500, density: 0.2735999999999998 },
                { start: 500, density: 0.0904000000000004 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6567686462707458 },
                { start: 800, end: 1800, density: 0.2798440311937613 },
                { start: 1800, density: 0.06338732253549287 },
              ],
              percentiles: { p75: 945 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7974797479747969 },
                { start: 1800, end: 3000, density: 0.1363136313631362 },
                { start: 3000, density: 0.06620662066206681 },
              ],
              percentiles: { p75: 1658 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9476104779044192 },
                { start: 100, end: 300, density: 0.023195360927814435 },
                { start: 300, density: 0.029194161167766398 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1658,
        lcp: 2102,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751755506,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9697939587917584,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01990398079615923,
                },
                { start: "0.25", density: 0.010302060412082413 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5877824435112982 },
                { start: 200, end: 500, density: 0.3118376324735055 },
                { start: 500, density: 0.10037992401519628 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40798558991293904 },
                { start: 800, end: 1800, density: 0.3797658360852596 },
                { start: 1800, density: 0.21224857400180125 },
              ],
              percentiles: { p75: 1728 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5264052810562106 },
                { start: 1800, end: 3000, density: 0.3467693538707738 },
                { start: 3000, density: 0.12682536507301562 },
              ],
              percentiles: { p75: 2440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9223155368926215 },
                { start: 100, end: 300, density: 0.05118976204759049 },
                { start: 300, density: 0.026494701059788024 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.600990396158463 },
                { start: 2500, end: 4000, density: 0.2906662665066024 },
                { start: 4000, density: 0.1083433373349347 },
              ],
              percentiles: { p75: 3114 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2440,
        lcp: 3114,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751755583,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5832750174947507 },
                { start: 2500, end: 4000, density: 0.25527341797460723 },
                { start: 4000, density: 0.1614515645306419 },
              ],
              percentiles: { p75: 3343 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8946105389461054,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05299470052994701,
                },
                { start: "0.25", density: 0.052394760523947606 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6145000000000003 },
                { start: 200, end: 500, density: 0.2921000000000002 },
                { start: 500, density: 0.09339999999999953 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29458216713314667 },
                { start: 800, end: 1800, density: 0.5097960815673729 },
                { start: 1800, density: 0.19562175129948037 },
              ],
              percentiles: { p75: 1632 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4829482948294822 },
                { start: 1800, end: 3000, density: 0.2856285628562852 },
                { start: 3000, density: 0.2314231423142325 },
              ],
              percentiles: { p75: 2918 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964996499649965 },
                { start: 100, end: 300, density: 0.025302530253025306 },
                { start: 300, density: 0.009700970097009688 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2918,
        lcp: 3343,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651751755659,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6694000000000002 },
                { start: 200, end: 500, density: 0.2575000000000001 },
                { start: 500, density: 0.07309999999999975 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5502698380971414 },
                { start: 800, end: 1800, density: 0.4055566660003996 },
                { start: 1800, density: 0.044173495902459003 },
              ],
              percentiles: { p75: 1068 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8336332733453311 },
                { start: 1800, end: 3000, density: 0.126374725054989 },
                { start: 3000, density: 0.03999200159968 },
              ],
              percentiles: { p75: 1590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9544 },
                { start: 100, end: 300, density: 0.0233 },
                { start: 300, density: 0.022299999999999983 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.842365763423657 },
                { start: 2500, end: 4000, density: 0.11523847615238468 },
                { start: 4000, density: 0.042395760423958304 },
              ],
              percentiles: { p75: 2091 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8957999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09239999999999998,
                },
                { start: "0.25", density: 0.011799999999999991 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1590,
        lcp: 2091,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1651751755735,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42825296257186396 },
                { start: 800, end: 1800, density: 0.42062653995072125 },
                { start: 1800, density: 0.15112049747741493 },
              ],
              percentiles: { p75: 1419 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5986362567599329 },
                { start: 1800, end: 3000, density: 0.22854455678344654 },
                { start: 3000, density: 0.17281918645662045 },
              ],
              percentiles: { p75: 2502 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942983504661726 },
                { start: 100, end: 300, density: 0.03562036815682524 },
                { start: 300, density: 0.02139612718144867 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6846090631603661 },
                { start: 2500, end: 4000, density: 0.17474759333176795 },
                { start: 4000, density: 0.14064334350786598 },
              ],
              percentiles: { p75: 2919 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9354725787631273,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020886814469078183,
                },
                { start: "0.25", density: 0.04364060676779462 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5875573327061041 },
                { start: 200, end: 500, density: 0.31600611548865126 },
                { start: 500, density: 0.09643655180524459 },
              ],
              percentiles: { p75: 278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2502,
        lcp: 2919,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751755816,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8832883288328832,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.067006700670067,
                },
                { start: "0.25", density: 0.04970497049704973 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5378462153784627 },
                { start: 200, end: 500, density: 0.31086891310868936 },
                { start: 500, density: 0.15128487151284786 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4301150575287641 },
                { start: 800, end: 1800, density: 0.44532266133066506 },
                { start: 1800, density: 0.12456228114057075 },
              ],
              percentiles: { p75: 1313 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5996398559423755 },
                { start: 1800, end: 3000, density: 0.24139655862344875 },
                { start: 3000, density: 0.15896358543417582 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956204379562044 },
                { start: 100, end: 300, density: 0.029497050294970507 },
                { start: 300, density: 0.014298570142985682 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6865246098439364 },
                { start: 2500, end: 4000, density: 0.18322328931572598 },
                { start: 4000, density: 0.1302521008403377 },
              ],
              percentiles: { p75: 2885 },
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
        lcp: 2885,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651751755933,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31480000000000014 },
                { start: 800, end: 1800, density: 0.5040000000000002 },
                { start: 1800, density: 0.18119999999999964 },
              ],
              percentiles: { p75: 1598 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5342465753424651 },
                { start: 1800, end: 3000, density: 0.2978702129787017 },
                { start: 3000, density: 0.16788321167883333 },
              ],
              percentiles: { p75: 2572 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9744 },
                { start: 100, end: 300, density: 0.0208 },
                { start: 300, density: 0.004800000000000005 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646064606460646 },
                { start: 2500, end: 4000, density: 0.22322232223222316 },
                { start: 4000, density: 0.13071307130713092 },
              ],
              percentiles: { p75: 3044 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9096090390960904,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06269373062693731,
                },
                { start: "0.25", density: 0.027697230276972327 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6232753449310141 },
                { start: 200, end: 500, density: 0.3048390321935614 },
                { start: 500, density: 0.07188562287542447 },
              ],
              percentiles: { p75: 261 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2572,
        lcp: 3044,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1651751756016,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6705000000000003 },
                { start: 200, end: 500, density: 0.2317000000000001 },
                { start: 500, density: 0.09779999999999958 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4495449544954496 },
                { start: 800, end: 1800, density: 0.3700370037003702 },
                { start: 1800, density: 0.1804180418041802 },
              ],
              percentiles: { p75: 1521 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6208758248350331 },
                { start: 1800, end: 3000, density: 0.2311537692461508 },
                { start: 3000, density: 0.14797040591881613 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467840352105631 },
                { start: 100, end: 300, density: 0.03521056316895068 },
                { start: 300, density: 0.018005401620486257 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7064912982596517 },
                { start: 2500, end: 4000, density: 0.19518903780756153 },
                { start: 4000, density: 0.09831966393278678 },
              ],
              percentiles: { p75: 2766 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9443999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039299999999999995,
                },
                { start: "0.25", density: 0.016300000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2386,
        lcp: 2766,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751756097,
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
                { start: "0.00", end: "0.10", density: 0.7527 },
                { start: "0.10", end: "0.25", density: 0.1123 },
                { start: "0.25", density: 0.13499999999999998 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5388461153884615 },
                { start: 800, end: 1800, density: 0.25957404259574063 },
                { start: 1800, density: 0.20157984201579776 },
              ],
              percentiles: { p75: 1478 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6200860258077423 },
                { start: 1800, end: 3000, density: 0.1487446233870161 },
                { start: 3000, density: 0.23116935080524162 },
              ],
              percentiles: { p75: 2686 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646620675864827 },
                { start: 2500, end: 4000, density: 0.16931613677264554 },
                { start: 4000, density: 0.18406318736252764 },
              ],
              percentiles: { p75: 3165 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2686, lcp: 3165, cls: "0.11" },
      timestamp: 1651751756190,
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
                  density: 0.9440577468419695,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026939932972415575,
                },
                { start: "0.25", density: 0.029002320185614834 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48510265398097224 },
                { start: 200, end: 500, density: 0.3186029043565353 },
                { start: 500, density: 0.19629444166249246 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2957344742642295 },
                { start: 800, end: 1800, density: 0.4073641903280179 },
                { start: 1800, density: 0.2969013354077526 },
              ],
              percentiles: { p75: 1915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4860020931449513 },
                { start: 1800, end: 3000, density: 0.3613291470434335 },
                { start: 3000, density: 0.15266875981161543 },
              ],
              percentiles: { p75: 2604 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308749839393549 },
                { start: 100, end: 300, density: 0.020172170114351785 },
                { start: 300, density: 0.04895284594629337 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6026779795837203 },
                { start: 2500, end: 4000, density: 0.2966989261567015 },
                { start: 4000, density: 0.10062309425957816 },
              ],
              percentiles: { p75: 3011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2604,
        lcp: 3011,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751756285,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5896410358964105 },
                { start: 200, end: 500, density: 0.2944705529447058 },
                { start: 500, density: 0.11588841115888368 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7829651104668601 },
                { start: 800, end: 1800, density: 0.1797460761771469 },
                { start: 1800, density: 0.03728881335599291 },
              ],
              percentiles: { p75: 756 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8654538184726106 },
                { start: 1800, end: 3000, density: 0.0898640543782487 },
                { start: 3000, density: 0.04468212714914069 },
              ],
              percentiles: { p75: 1404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9504950495049503 },
                { start: 100, end: 300, density: 0.025402540254025406 },
                { start: 300, density: 0.024102410241024254 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.876649340263894 },
                { start: 2500, end: 4000, density: 0.08486605357856855 },
                { start: 4000, density: 0.03848460615753754 },
              ],
              percentiles: { p75: 1824 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9336066393360664,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03759624037596241,
                },
                { start: "0.25", density: 0.028797120287971215 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1404,
        lcp: 1824,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751756420,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6617889153100419 },
                { start: 1800, end: 3000, density: 0.20468264130235955 },
                { start: 3000, density: 0.13352844338759848 },
              ],
              percentiles: { p75: 2237 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598196785574284 },
                { start: 100, end: 300, density: 0.027636221089768712 },
                { start: 300, density: 0.012544100352802819 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7192377495462794 },
                { start: 2500, end: 4000, density: 0.1754990925589837 },
                { start: 4000, density: 0.10526315789473702 },
              ],
              percentiles: { p75: 2691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9193057792091609,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049024870280908926,
                },
                { start: "0.25", density: 0.031669350509930215 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6793519216277313 },
                { start: 200, end: 500, density: 0.22305953278070817 },
                { start: 500, density: 0.09758854559156055 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5043827611395173 },
                { start: 800, end: 1800, density: 0.37089116143170153 },
                { start: 1800, density: 0.1247260774287811 },
              ],
              percentiles: { p75: 1323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2237,
        lcp: 2691,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751756497,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9541800643086817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016995865870463943,
                },
                { start: "0.25", density: 0.02882406982085438 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4660833996136803 },
                { start: 200, end: 500, density: 0.3980229519372798 },
                { start: 500, density: 0.13589364844903995 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.1968349312694929 },
                { start: 800, end: 1800, density: 0.5318239574910477 },
                { start: 1800, density: 0.2713411112394593 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.32003710575139094 },
                { start: 1800, end: 3000, density: 0.34960575139146505 },
                { start: 3000, density: 0.33035714285714407 },
              ],
              percentiles: { p75: 3524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621704693226149 },
                { start: 100, end: 300, density: 0.03061827639200851 },
                { start: 300, density: 0.00721125428537652 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.43577396147598024 },
                { start: 2500, end: 4000, density: 0.34526572290554625 },
                { start: 4000, density: 0.21896031561847346 },
              ],
              percentiles: { p75: 3876 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3524,
        lcp: 3876,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751756611,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9733973397339735 },
                { start: 100, end: 300, density: 0.018301830183018303 },
                { start: 300, density: 0.0083008300830083 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7297229722972303 },
                { start: 2500, end: 4000, density: 0.15376537653765388 },
                { start: 4000, density: 0.11651165116511575 },
              ],
              percentiles: { p75: 2650 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9340934093409341,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049004900490049005,
                },
                { start: "0.25", density: 0.0169016901690169 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6797 },
                { start: 200, end: 500, density: 0.2759999999999999 },
                { start: 500, density: 0.04430000000000002 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4467446744674465 },
                { start: 800, end: 1800, density: 0.4587458745874584 },
                { start: 1800, density: 0.09450945094509504 },
              ],
              percentiles: { p75: 1192 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6615338466153386 },
                { start: 1800, end: 3000, density: 0.2298770122987702 },
                { start: 3000, density: 0.10858914108589127 },
              ],
              percentiles: { p75: 2142 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2142,
        lcp: 2650,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651751756731,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9412550066755674,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04138851802403204,
                },
                { start: "0.25", density: 0.017356475300400527 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6478581979320531 },
                { start: 200, end: 500, density: 0.23840472673559815 },
                { start: 500, density: 0.11373707533234872 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6955862278173821 },
                { start: 800, end: 1800, density: 0.28105566509934776 },
                { start: 1800, density: 0.023358107083270137 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9011881485937736 },
                { start: 1800, end: 3000, density: 0.08091442322153711 },
                { start: 3000, density: 0.017897428184689396 },
              ],
              percentiles: { p75: 1358 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.95305456241256 },
                { start: 100, end: 300, density: 0.02254002798072438 },
                { start: 300, density: 0.024405409606715542 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9116275571600482 },
                { start: 2500, end: 4000, density: 0.07017148014440432 },
                { start: 4000, density: 0.01820096269554764 },
              ],
              percentiles: { p75: 1758 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1358,
        lcp: 1758,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751756812,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.33960000000000007 },
                { start: 1800, end: 3000, density: 0.3439000000000001 },
                { start: 3000, density: 0.31649999999999984 },
              ],
              percentiles: { p75: 3435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653034696530347 },
                { start: 100, end: 300, density: 0.026797320267973206 },
                { start: 300, density: 0.0078992100789921 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4473499999999995 },
                { start: 2500, end: 4000, density: 0.32494999999999974 },
                { start: 4000, density: 0.22770000000000076 },
              ],
              percentiles: { p75: 3931 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9277072292770724,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041995800419958006,
                },
                { start: "0.25", density: 0.03029697030296971 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5146543963188958 },
                { start: 200, end: 500, density: 0.3596078823647094 },
                { start: 500, density: 0.12573772131639485 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2028405681136228 },
                { start: 800, end: 1800, density: 0.5376075215043012 },
                { start: 1800, density: 0.25955191038207587 },
              ],
              percentiles: { p75: 1853 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3435,
        lcp: 3931,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651751756930,
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
                  density: 0.8611776572941622,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0943134535367545,
                },
                { start: "0.25", density: 0.04450888916908337 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7532369578881206 },
                { start: 200, end: 500, density: 0.2045254556882464 },
                { start: 500, density: 0.042237586423633 },
              ],
              percentiles: { p75: 198 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5210820421640842 },
                { start: 800, end: 1800, density: 0.36385572771145536 },
                { start: 1800, density: 0.11506223012446054 },
              ],
              percentiles: { p75: 1254 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7546477804477039 },
                { start: 1800, end: 3000, density: 0.1450613380548879 },
                { start: 3000, density: 0.10029088149740822 },
              ],
              percentiles: { p75: 1791 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597625329815304 },
                { start: 100, end: 300, density: 0.03324538258575198 },
                { start: 300, density: 0.006992084432717681 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8026482513938158 },
                { start: 2500, end: 4000, density: 0.11460973137354273 },
                { start: 4000, density: 0.08274201723264155 },
              ],
              percentiles: { p75: 2177 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1791,
        lcp: 2177,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651751757007,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7506249375062496 },
                { start: 200, end: 500, density: 0.18158184181581852 },
                { start: 500, density: 0.06779322067793175 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4172582741725821 },
                { start: 800, end: 1800, density: 0.38236176382361703 },
                { start: 1800, density: 0.20037996200380082 },
              ],
              percentiles: { p75: 1638 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6291999999999985 },
                { start: 1800, end: 3000, density: 0.20699999999999957 },
                { start: 3000, density: 0.16380000000000183 },
              ],
              percentiles: { p75: 2453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663865546218486 },
                { start: 100, end: 300, density: 0.024309723889555823 },
                { start: 300, density: 0.00930372148859544 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6909427171848445 },
                { start: 2500, end: 4000, density: 0.18759372188343498 },
                { start: 4000, density: 0.12146356093172056 },
              ],
              percentiles: { p75: 2914 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8266000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11800000000000001,
                },
                { start: "0.25", density: 0.055399999999999984 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2453,
        lcp: 2914,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651751757128,
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
                  density: 0.9514951495149514,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0311031103110311,
                },
                { start: "0.25", density: 0.01740174017401741 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6649664966496657 },
                { start: 200, end: 500, density: 0.2567256725672569 },
                { start: 500, density: 0.07830783078307747 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7016298370162982 },
                { start: 800, end: 1800, density: 0.2447755224477551 },
                { start: 1800, density: 0.05359464053594673 },
              ],
              percentiles: { p75: 892 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8282656531306261 },
                { start: 1800, end: 3000, density: 0.11172234446889373 },
                { start: 3000, density: 0.06001200240048025 },
              ],
              percentiles: { p75: 1491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612038796120388 },
                { start: 100, end: 300, density: 0.026897310268973098 },
                { start: 300, density: 0.011898810118988058 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8429842984298433 },
                { start: 2500, end: 4000, density: 0.1031103110311032 },
                { start: 4000, density: 0.05390539053905349 },
              ],
              percentiles: { p75: 2021 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1491,
        lcp: 2021,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651751757209,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42361527694461065 },
                { start: 800, end: 1800, density: 0.45140971805638824 },
                { start: 1800, density: 0.12497500499900117 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5978402159784014 },
                { start: 1800, end: 3000, density: 0.24677532246775294 },
                { start: 3000, density: 0.15538446155384578 },
              ],
              percentiles: { p75: 2454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684999999999999 },
                { start: 100, end: 300, density: 0.023899999999999994 },
                { start: 300, density: 0.007599999999999999 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6806638672265535 },
                { start: 2500, end: 4000, density: 0.19646070785842804 },
                { start: 4000, density: 0.12287542491501839 },
              ],
              percentiles: { p75: 2881 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9305000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04140000000000001,
                },
                { start: "0.25", density: 0.028099999999999993 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6705329467053297 },
                { start: 200, end: 500, density: 0.26227377262273793 },
                { start: 500, density: 0.06719328067193246 },
              ],
              percentiles: { p75: 241 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2454,
        lcp: 2881,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651751757315,
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
                  density: 0.9658797857567943,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0144812537195001,
                },
                { start: "0.25", density: 0.019638960523705614 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5917721518987339 },
                { start: 200, end: 500, density: 0.2952927215189872 },
                { start: 500, density: 0.11293512658227879 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3969061673112153 },
                { start: 800, end: 1800, density: 0.48829635660492593 },
                { start: 1800, density: 0.11479747608385871 },
              ],
              percentiles: { p75: 1450 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6263490124210954 },
                { start: 1800, end: 3000, density: 0.2594176338831195 },
                { start: 3000, density: 0.11423335369578512 },
              ],
              percentiles: { p75: 2376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9415692821368948 },
                { start: 100, end: 300, density: 0.028589315525876468 },
                { start: 300, density: 0.02984140233722871 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7092198581560283 },
                { start: 2500, end: 4000, density: 0.1957446808510639 },
                { start: 4000, density: 0.09503546099290788 },
              ],
              percentiles: { p75: 2802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2376,
        lcp: 2802,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751757403,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41595238095238063 },
                { start: 800, end: 1800, density: 0.4532142857142853 },
                { start: 1800, density: 0.13083333333333413 },
              ],
              percentiles: { p75: 1341 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5830544933078384 },
                { start: 1800, end: 3000, density: 0.25167304015296327 },
                { start: 3000, density: 0.16527246653919844 },
              ],
              percentiles: { p75: 2440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9518309166871467 },
                { start: 100, end: 300, density: 0.033054804620299826 },
                { start: 300, density: 0.015114278692553506 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6888278825495341 },
                { start: 2500, end: 4000, density: 0.18787300071616125 },
                { start: 4000, density: 0.1232991167343047 },
              ],
              percentiles: { p75: 2859 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9398318133364918,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02345137984128864,
                },
                { start: "0.25", density: 0.03671680682221958 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48016203979506733 },
                { start: 200, end: 500, density: 0.35410461098534485 },
                { start: 500, density: 0.16573334921958785 },
              ],
              percentiles: { p75: 363 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2440,
        lcp: 2859,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751757540,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5449530814100944 },
                { start: 2500, end: 4000, density: 0.28284301293431424 },
                { start: 4000, density: 0.17220390565559138 },
              ],
              percentiles: { p75: 3475 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9175658720200751,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02797992471769134,
                },
                { start: "0.25", density: 0.05445420326223339 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5392256749872646 },
                { start: 200, end: 500, density: 0.35736118186449334 },
                { start: 500, density: 0.10341314314824213 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26151710210778745 },
                { start: 800, end: 1800, density: 0.511043796541714 },
                { start: 1800, density: 0.22743910135049858 },
              ],
              percentiles: { p75: 1737 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4282257037320081 },
                { start: 1800, end: 3000, density: 0.3067125206979998 },
                { start: 3000, density: 0.2650617755699921 },
              ],
              percentiles: { p75: 3099 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9557087919374089 },
                { start: 100, end: 300, density: 0.03354992706537595 },
                { start: 300, density: 0.010741280997215228 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3099,
        lcp: 3475,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751757690,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5293417922283902 },
                { start: 200, end: 500, density: 0.3873909595559081 },
                { start: 500, density: 0.08326724821570172 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2875825627476885 },
                { start: 800, end: 1800, density: 0.510832232496698 },
                { start: 1800, density: 0.20158520475561365 },
              ],
              percentiles: { p75: 1665 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47771717440468225 },
                { start: 1800, end: 3000, density: 0.3234002926699478 },
                { start: 3000, density: 0.1988825329253699 },
              ],
              percentiles: { p75: 2759 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663105998356614 },
                { start: 100, end: 300, density: 0.027115858668857847 },
                { start: 300, density: 0.006573541495480696 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6242038216560502 },
                { start: 2500, end: 4000, density: 0.242569002123142 },
                { start: 4000, density: 0.13322717622080793 },
              ],
              percentiles: { p75: 3091 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9488733693503756,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023191461325602847,
                },
                { start: "0.25", density: 0.027935169324021628 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2759,
        lcp: 3091,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751757836,
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
                  density: 0.9283071692830717,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0427957204279572,
                },
                { start: "0.25", density: 0.02889711028897111 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6474352564743528 },
                { start: 200, end: 500, density: 0.23227677232276783 },
                { start: 500, density: 0.12028797120287935 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.527441767469759 },
                { start: 800, end: 1800, density: 0.38228531440567826 },
                { start: 1800, density: 0.09027291812456266 },
              ],
              percentiles: { p75: 1162 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7001999999999988 },
                { start: 1800, end: 3000, density: 0.1968999999999997 },
                { start: 3000, density: 0.10290000000000152 },
              ],
              percentiles: { p75: 2004 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9666033396660335 },
                { start: 100, end: 300, density: 0.022497750224977506 },
                { start: 300, density: 0.010898910108989062 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.757475747574757 },
                { start: 2500, end: 4000, density: 0.14471447144714467 },
                { start: 4000, density: 0.09780978097809834 },
              ],
              percentiles: { p75: 2491 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2004,
        lcp: 2491,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651751757968,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5946784035210552 },
                { start: 1800, end: 3000, density: 0.25857757327198105 },
                { start: 3000, density: 0.14674402320696378 },
              ],
              percentiles: { p75: 2362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588917783556712 },
                { start: 100, end: 300, density: 0.028305661132226448 },
                { start: 300, density: 0.012802560512102431 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6933466733366664 },
                { start: 2500, end: 4000, density: 0.1746873436718355 },
                { start: 4000, density: 0.131965982991498 },
              ],
              percentiles: { p75: 2811 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9392939293929392,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043704370437043706,
                },
                { start: "0.25", density: 0.017001700170017005 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7283 },
                { start: 200, end: 500, density: 0.21789999999999998 },
                { start: 500, density: 0.05380000000000003 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4085591440855913 },
                { start: 800, end: 1800, density: 0.4575542445755423 },
                { start: 1800, density: 0.13388661133886634 },
              ],
              percentiles: { p75: 1342 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2362,
        lcp: 2811,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751758057,
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
                { start: "0.00", end: "0.10", density: 0.7527 },
                { start: "0.10", end: "0.25", density: 0.1123 },
                { start: "0.25", density: 0.13499999999999998 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5388461153884615 },
                { start: 800, end: 1800, density: 0.25957404259574063 },
                { start: 1800, density: 0.20157984201579776 },
              ],
              percentiles: { p75: 1478 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6200860258077423 },
                { start: 1800, end: 3000, density: 0.1487446233870161 },
                { start: 3000, density: 0.23116935080524162 },
              ],
              percentiles: { p75: 2686 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646620675864827 },
                { start: 2500, end: 4000, density: 0.16931613677264554 },
                { start: 4000, density: 0.18406318736252764 },
              ],
              percentiles: { p75: 3165 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2686, lcp: 3165, cls: "0.11" },
      timestamp: 1651751758143,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9658797857567943,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0144812537195001,
                },
                { start: "0.25", density: 0.019638960523705614 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5917721518987339 },
                { start: 200, end: 500, density: 0.2952927215189872 },
                { start: 500, density: 0.11293512658227879 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3969061673112153 },
                { start: 800, end: 1800, density: 0.48829635660492593 },
                { start: 1800, density: 0.11479747608385871 },
              ],
              percentiles: { p75: 1450 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6263490124210954 },
                { start: 1800, end: 3000, density: 0.2594176338831195 },
                { start: 3000, density: 0.11423335369578512 },
              ],
              percentiles: { p75: 2376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9415692821368948 },
                { start: 100, end: 300, density: 0.028589315525876468 },
                { start: 300, density: 0.02984140233722871 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7092198581560283 },
                { start: 2500, end: 4000, density: 0.1957446808510639 },
                { start: 4000, density: 0.09503546099290788 },
              ],
              percentiles: { p75: 2802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2376,
        lcp: 2802,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751758228,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7632392972036621 },
                { start: 2500, end: 4000, density: 0.16215045780747334 },
                { start: 4000, density: 0.0746102449888645 },
              ],
              percentiles: { p75: 2455 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.930622304374615,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029698089956869993,
                },
                { start: "0.25", density: 0.03967960566851509 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3989303512823629 },
                { start: 200, end: 500, density: 0.4165552449252461 },
                { start: 500, density: 0.18451440379239092 },
              ],
              percentiles: { p75: 399 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5156384153072485 },
                { start: 800, end: 1800, density: 0.38758739114436386 },
                { start: 1800, density: 0.09677419354838762 },
              ],
              percentiles: { p75: 1166 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7082972672189943 },
                { start: 1800, end: 3000, density: 0.19376777544206772 },
                { start: 3000, density: 0.09793495733893791 },
              ],
              percentiles: { p75: 1956 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9219275308180801 },
                { start: 100, end: 300, density: 0.04233594820072221 },
                { start: 300, density: 0.035736520981197804 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1956,
        lcp: 2455,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651751758358,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520617252719455 },
                { start: 100, end: 300, density: 0.02339994940551481 },
                { start: 300, density: 0.02453832532253959 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8966616654163541 },
                { start: 2500, end: 4000, density: 0.08233308327081772 },
                { start: 4000, density: 0.021005251312828183 },
              ],
              percentiles: { p75: 1845 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8916904732331387,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07763010806111041,
                },
                { start: "0.25", density: 0.030679418705750854 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46983390327308233 },
                { start: 200, end: 500, density: 0.36126038104543223 },
                { start: 500, density: 0.16890571568148535 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8125475285171101 },
                { start: 800, end: 1800, density: 0.16235741444866925 },
                { start: 1800, density: 0.025095057034220516 },
              ],
              percentiles: { p75: 732 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9011249999999998 },
                { start: 1800, end: 3000, density: 0.07587500000000001 },
                { start: 3000, density: 0.02300000000000012 },
              ],
              percentiles: { p75: 1273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1273,
        lcp: 1845,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651751758490,
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
                  density: 0.9425612052730696,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033145009416195866,
                },
                { start: "0.25", density: 0.024293785310734464 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5761183261183265 },
                { start: 200, end: 500, density: 0.2757936507936509 },
                { start: 500, density: 0.14808802308802263 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7095831710167511 },
                { start: 800, end: 1800, density: 0.2656797818465135 },
                { start: 1800, density: 0.024737047136735444 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8713193116634799 },
                { start: 1800, end: 3000, density: 0.09158699808795415 },
                { start: 3000, density: 0.03709369024856608 },
              ],
              percentiles: { p75: 1474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9425465838509316 },
                { start: 100, end: 300, density: 0.013781055900621118 },
                { start: 300, density: 0.043672360248447284 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8694905552375501 },
                { start: 2500, end: 4000, density: 0.0873879030719328 },
                { start: 4000, density: 0.04312154169051703 },
              ],
              percentiles: { p75: 2011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1474,
        lcp: 2011,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751758638,
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
                { start: "0.00", end: "0.10", density: 0.8647 },
                { start: "0.10", end: "0.25", density: 0.0767 },
                { start: "0.25", density: 0.05860000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8150554833549934 },
                { start: 200, end: 500, density: 0.1284614615615315 },
                { start: 500, density: 0.056483055083475155 },
              ],
              percentiles: { p75: 156 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41464146414641473 },
                { start: 800, end: 1800, density: 0.4165416541654166 },
                { start: 1800, density: 0.1688168816881688 },
              ],
              percentiles: { p75: 1352 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.1582000000000002 },
                { start: 1800, end: 3000, density: 0.4250000000000005 },
                { start: 3000, density: 0.41679999999999934 },
              ],
              percentiles: { p75: 4538 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3207820782078215 },
                { start: 2500, end: 4000, density: 0.3375837583758384 },
                { start: 4000, density: 0.34163416341634 },
              ],
              percentiles: { p75: 5108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4538, lcp: 5108, cls: "0.04" },
      timestamp: 1651751758800,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8692202044864947 },
                { start: 100, end: 300, density: 0.05722569815351748 },
                { start: 300, density: 0.07355409735998779 },
              ],
              percentiles: { p75: 24 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6433908045977006 },
                { start: 2500, end: 4000, density: 0.18103448275862055 },
                { start: 4000, density: 0.17557471264367885 },
              ],
              percentiles: { p75: 3248 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9038135593220339,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028954802259887006,
                },
                { start: "0.25", density: 0.06723163841807908 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4849897988924516 },
                { start: 200, end: 500, density: 0.30282716409210164 },
                { start: 500, density: 0.2121830370154468 },
              ],
              percentiles: { p75: 414 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3772945495622701 },
                { start: 800, end: 1800, density: 0.4401299068059864 },
                { start: 1800, density: 0.18257554363174344 },
              ],
              percentiles: { p75: 1537 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5742389431361276 },
                { start: 1800, end: 3000, density: 0.24037909247558836 },
                { start: 3000, density: 0.18538196438828394 },
              ],
              percentiles: { p75: 2549 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2549,
        lcp: 3248,
        cls: "0.01",
        fid: 24,
      },
      timestamp: 1651751758902,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9369532428355958,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02699849170437406,
                },
                { start: "0.25", density: 0.03604826546003019 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6150715900527509 },
                { start: 200, end: 500, density: 0.3195177091183121 },
                { start: 500, density: 0.06541070082893706 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.21119708693673156 },
                { start: 800, end: 1800, density: 0.5947504172356234 },
                { start: 1800, density: 0.1940524958276451 },
              ],
              percentiles: { p75: 1634 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39622641509433915 },
                { start: 1800, end: 3000, density: 0.38763614051234807 },
                { start: 3000, density: 0.2161374443933127 },
              ],
              percentiles: { p75: 2852 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701255363101859 },
                { start: 100, end: 300, density: 0.02478944859367551 },
                { start: 300, density: 0.00508501509613857 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5683387022549472 },
                { start: 2500, end: 4000, density: 0.29114894922534146 },
                { start: 4000, density: 0.14051234851971142 },
              ],
              percentiles: { p75: 3215 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2852,
        lcp: 3215,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751759031,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5320532053205322 },
                { start: 800, end: 1800, density: 0.39843984398439863 },
                { start: 1800, density: 0.06950695069506908 },
              ],
              percentiles: { p75: 1157 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7237723772377231 },
                { start: 1800, end: 3000, density: 0.2055205520552054 },
                { start: 3000, density: 0.07070707070707151 },
              ],
              percentiles: { p75: 1887 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647964796479649 },
                { start: 100, end: 300, density: 0.021002100210021003 },
                { start: 300, density: 0.014201420142014145 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7531493701259747 },
                { start: 2500, end: 4000, density: 0.1637672465506899 },
                { start: 4000, density: 0.08308338332333538 },
              ],
              percentiles: { p75: 2495 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8082 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15470000000000003,
                },
                { start: "0.25", density: 0.03709999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6740977706687994 },
                { start: 200, end: 500, density: 0.22283315005498344 },
                { start: 500, density: 0.10306907927621717 },
              ],
              percentiles: { p75: 248 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1887,
        lcp: 2495,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651751759162,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6316236752649453 },
                { start: 2500, end: 4000, density: 0.18081383723255307 },
                { start: 4000, density: 0.1875624875025017 },
              ],
              percentiles: { p75: 3382 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9131 },
                { start: "0.10", end: "0.25", density: 0.0578 },
                { start: "0.25", density: 0.0291 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6428285657131427 },
                { start: 200, end: 500, density: 0.2877575515103021 },
                { start: 500, density: 0.06941388277655515 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49745076477056915 },
                { start: 800, end: 1800, density: 0.26971908427471775 },
                { start: 1800, density: 0.23283015095471313 },
              ],
              percentiles: { p75: 1705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6108945527236367 },
                { start: 1800, end: 3000, density: 0.1469265367316338 },
                { start: 3000, density: 0.24217891054472956 },
              ],
              percentiles: { p75: 2937 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612961296129613 },
                { start: 100, end: 300, density: 0.0222022202220222 },
                { start: 300, density: 0.016501650165016504 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2937,
        lcp: 3382,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751759246,
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
                { start: "0.00", end: "0.10", density: 0.7957 },
                { start: "0.10", end: "0.25", density: 0.1369 },
                { start: "0.25", density: 0.0674 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7966796679667966 },
                { start: 200, end: 500, density: 0.16571657165716563 },
                { start: 500, density: 0.037603760376037756 },
              ],
              percentiles: { p75: 177 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5439999999999998 },
                { start: 800, end: 1800, density: 0.35519999999999985 },
                { start: 1800, density: 0.10080000000000038 },
              ],
              percentiles: { p75: 1183 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7834000000000002 },
                { start: 1800, end: 3000, density: 0.12930000000000003 },
                { start: 3000, density: 0.08729999999999968 },
              ],
              percentiles: { p75: 1668 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695 },
                { start: 100, end: 300, density: 0.0252 },
                { start: 300, density: 0.005300000000000002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8254325432543254 },
                { start: 2500, end: 4000, density: 0.10096009600960092 },
                { start: 4000, density: 0.07360736073607385 },
              ],
              percentiles: { p75: 2071 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1668,
        lcp: 2071,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651751759378,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6375362463753624 },
                { start: 800, end: 1800, density: 0.3207679232076792 },
                { start: 1800, density: 0.04169583041695849 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8380000000000001 },
                { start: 1800, end: 3000, density: 0.11209999999999998 },
                { start: 3000, density: 0.04990000000000005 },
              ],
              percentiles: { p75: 1403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9738947789557911 },
                { start: 100, end: 300, density: 0.013402680536107221 },
                { start: 300, density: 0.012702540508101632 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8700759848030394 },
                { start: 2500, end: 4000, density: 0.09323135372925415 },
                { start: 4000, density: 0.036692661467706424 },
              ],
              percentiles: { p75: 1757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8663133686631337,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10318968103189681,
                },
                { start: "0.25", density: 0.030496950304969506 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8077615523104623 },
                { start: 200, end: 500, density: 0.14012802560512103 },
                { start: 500, density: 0.052110422084416644 },
              ],
              percentiles: { p75: 168 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1403,
        lcp: 1757,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1651751759462,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7269059376129102 },
                { start: 2500, end: 4000, density: 0.18348789594122583 },
                { start: 4000, density: 0.08960616644586392 },
              ],
              percentiles: { p75: 2608 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7803294457135986,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18191655645064322,
                },
                { start: "0.25", density: 0.03775399783575804 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6223601002267033 },
                { start: 200, end: 500, density: 0.261424650996301 },
                { start: 500, density: 0.11621524877699575 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4953371592539454 },
                { start: 800, end: 1800, density: 0.4267097082735532 },
                { start: 1800, density: 0.07795313247250142 },
              ],
              percentiles: { p75: 1201 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.687085493789943 },
                { start: 1800, end: 3000, density: 0.23272639575545626 },
                { start: 3000, density: 0.08018811045460082 },
              ],
              percentiles: { p75: 2018 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9581047381546135 },
                { start: 100, end: 300, density: 0.02593516209476309 },
                { start: 300, density: 0.01596009975062341 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2018,
        lcp: 2608,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1651751759546,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9534953495349534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0325032503250325,
                },
                { start: "0.25", density: 0.014001400140014 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7357 },
                { start: 200, end: 500, density: 0.1824 },
                { start: 500, density: 0.08189999999999988 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7740999999999999 },
                { start: 800, end: 1800, density: 0.20370000000000002 },
                { start: 1800, density: 0.022199999999999973 },
              ],
              percentiles: { p75: 790 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9152 },
                { start: 1800, end: 3000, density: 0.06960000000000001 },
                { start: 3000, density: 0.015200000000000035 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9749025097490251 },
                { start: 100, end: 300, density: 0.016698330166983303 },
                { start: 300, density: 0.008399160083991601 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9243 },
                { start: 2500, end: 4000, density: 0.0564 },
                { start: 4000, density: 0.019300000000000032 },
              ],
              percentiles: { p75: 1779 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1256,
        lcp: 1779,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1651751759675,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5658789625360229 },
                { start: 200, end: 500, density: 0.3189625360230547 },
                { start: 500, density: 0.11515850144092252 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6519530368028899 },
                { start: 800, end: 1800, density: 0.29442312034319246 },
                { start: 1800, density: 0.05362384285391778 },
              ],
              percentiles: { p75: 973 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8026060121156698 },
                { start: 1800, end: 3000, density: 0.14413075780089146 },
                { start: 3000, density: 0.0532632300834386 },
              ],
              percentiles: { p75: 1643 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9437537004144464 },
                { start: 100, end: 300, density: 0.035287152161042036 },
                { start: 300, density: 0.020959147424511583 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8344237832874194 },
                { start: 2500, end: 4000, density: 0.11702249770431583 },
                { start: 4000, density: 0.04855371900826476 },
              ],
              percentiles: { p75: 2086 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8602052451539339,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1272519954389966,
                },
                { start: "0.25", density: 0.012542759407069563 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1643,
        lcp: 2086,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651751759767,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6912617476504699 },
                { start: 800, end: 1800, density: 0.2626474705058989 },
                { start: 1800, density: 0.046090781843631336 },
              ],
              percentiles: { p75: 942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8061806180618059 },
                { start: 1800, end: 3000, density: 0.13831383138313824 },
                { start: 3000, density: 0.05550555055505591 },
              ],
              percentiles: { p75: 1703 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8340168033606721 },
                { start: 2500, end: 4000, density: 0.1085717143428685 },
                { start: 4000, density: 0.057411482296459426 },
              ],
              percentiles: { p75: 2126 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9363872774554911,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050410082016403276,
                },
                { start: "0.25", density: 0.013202640528105615 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1703, lcp: 2126, cls: "0.01" },
      timestamp: 1651751759905,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8531853185318532,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11481148114811479,
                },
                { start: "0.25", density: 0.03200320032003192 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7216278372162789 },
                { start: 200, end: 500, density: 0.18728127187281285 },
                { start: 500, density: 0.09109089091090826 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7311000000000001 },
                { start: 800, end: 1800, density: 0.24789999999999998 },
                { start: 1800, density: 0.020999999999999894 },
              ],
              percentiles: { p75: 832 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.914917016596681 },
                { start: 1800, end: 3000, density: 0.06718656268746248 },
                { start: 3000, density: 0.01789642071585662 },
              ],
              percentiles: { p75: 1272 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655999999999999 },
                { start: 100, end: 300, density: 0.016099999999999996 },
                { start: 300, density: 0.018300000000000087 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9055094490550945 },
                { start: 2500, end: 4000, density: 0.0730926907309269 },
                { start: 4000, density: 0.0213978602139785 },
              ],
              percentiles: { p75: 1761 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1272,
        lcp: 1761,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651751760008,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.909881976395279 },
                { start: 100, end: 300, density: 0.040208041608321664 },
                { start: 300, density: 0.04990998199639929 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6787499999999996 },
                { start: 2500, end: 4000, density: 0.16834999999999983 },
                { start: 4000, density: 0.15290000000000054 },
              ],
              percentiles: { p75: 3007 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.826182618261826,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1018101810181018,
                },
                { start: "0.25", density: 0.07200720072007215 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6214378562143793 },
                { start: 200, end: 500, density: 0.22307769223077714 },
                { start: 500, density: 0.1554844515548437 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339132173565282 },
                { start: 800, end: 1800, density: 0.4171165766846625 },
                { start: 1800, density: 0.14897020595880933 },
              ],
              percentiles: { p75: 1415 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6436999999999997 },
                { start: 1800, end: 3000, density: 0.20479999999999984 },
                { start: 3000, density: 0.1515000000000005 },
              ],
              percentiles: { p75: 2301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2301,
        lcp: 3007,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1651751760114,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9288718929254303,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05430210325047801,
                },
                { start: "0.25", density: 0.016826003824091773 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6796664528543938 },
                { start: 800, end: 1800, density: 0.2779987171263631 },
                { start: 1800, density: 0.0423348300192431 },
              ],
              percentiles: { p75: 970 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7913594619066097 },
                { start: 1800, end: 3000, density: 0.1535377053421291 },
                { start: 3000, density: 0.055102832751261224 },
              ],
              percentiles: { p75: 1773 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8392076151273475 },
                { start: 2500, end: 4000, density: 0.10625160792384876 },
                { start: 4000, density: 0.05454077694880375 },
              ],
              percentiles: { p75: 2124 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1773, lcp: 2124, cls: "0.00" },
      timestamp: 1651751760217,
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
                { start: "0.00", end: "0.10", density: 0.8469 },
                { start: "0.10", end: "0.25", density: 0.1098 },
                { start: "0.25", density: 0.04330000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7221 },
                { start: 200, end: 500, density: 0.22169999999999998 },
                { start: 500, density: 0.05620000000000016 },
              ],
              percentiles: { p75: 210 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.410323096929079 },
                { start: 800, end: 1800, density: 0.4484345303591081 },
                { start: 1800, density: 0.14124237271181295 },
              ],
              percentiles: { p75: 1453 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6255999999999996 },
                { start: 1800, end: 3000, density: 0.2085999999999998 },
                { start: 3000, density: 0.16580000000000053 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.96989698969897 },
                { start: 100, end: 300, density: 0.024402440244024406 },
                { start: 300, density: 0.0057005700570056965 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6748150369926013 },
                { start: 2500, end: 4000, density: 0.16281743651269737 },
                { start: 4000, density: 0.16236752649470143 },
              ],
              percentiles: { p75: 3129 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2389,
        lcp: 3129,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651751760353,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6678332166783323 },
                { start: 200, end: 500, density: 0.25917408259174085 },
                { start: 500, density: 0.07299270072992693 },
              ],
              percentiles: { p75: 231 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5717856428714259 },
                { start: 800, end: 1800, density: 0.3866226754649072 },
                { start: 1800, density: 0.04159168166366706 },
              ],
              percentiles: { p75: 995 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8475152484751524 },
                { start: 1800, end: 3000, density: 0.11888811118888107 },
                { start: 3000, density: 0.033596640335966675 },
              ],
              percentiles: { p75: 1527 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968 },
                { start: 100, end: 300, density: 0.019799999999999998 },
                { start: 300, density: 0.012199999999999985 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.864213578642136 },
                { start: 2500, end: 4000, density: 0.10458954104589548 },
                { start: 4000, density: 0.031196880311968607 },
              ],
              percentiles: { p75: 1978 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9546 },
                { start: "0.10", end: "0.25", density: 0.0342 },
                { start: "0.25", density: 0.011199999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1527,
        lcp: 1978,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651751760439,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8881000000000002 },
                { start: 1800, end: 3000, density: 0.08330000000000004 },
                { start: 3000, density: 0.028599999999999893 },
              ],
              percentiles: { p75: 1325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686937387477496 },
                { start: 100, end: 300, density: 0.02130426085217043 },
                { start: 300, density: 0.010002000400079999 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8944000000000003 },
                { start: 2500, end: 4000, density: 0.08129999999999996 },
                { start: 4000, density: 0.02429999999999988 },
              ],
              percentiles: { p75: 1820 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8511 },
                { start: "0.10", end: "0.25", density: 0.1254 },
                { start: "0.25", density: 0.02350000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7171999999999996 },
                { start: 200, end: 500, density: 0.1881999999999999 },
                { start: 500, density: 0.09460000000000036 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6861313868613139 },
                { start: 800, end: 1800, density: 0.2711728827117289 },
                { start: 1800, density: 0.04269573042695719 },
              ],
              percentiles: { p75: 885 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1325,
        lcp: 1820,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1651751760528,
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
                { start: 0, end: 1800, density: 0.8694699956197984 },
                { start: 1800, end: 3000, density: 0.10381077529566358 },
                { start: 3000, density: 0.026719229084537895 },
              ],
              percentiles: { p75: 1430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568043917942789 },
                { start: 100, end: 300, density: 0.01892516613695463 },
                { start: 300, density: 0.024270442068766405 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8467812408971748 },
                { start: 2500, end: 4000, density: 0.12088552286629772 },
                { start: 4000, density: 0.03233323623652754 },
              ],
              percentiles: { p75: 2026 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9044001719936935,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06578758778844776,
                },
                { start: "0.25", density: 0.029812240217858683 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43586515596586944 },
                { start: 200, end: 500, density: 0.4090082529025039 },
                { start: 500, density: 0.1551265911316266 },
              ],
              percentiles: { p75: 367 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6347322720694646 },
                { start: 800, end: 1800, density: 0.3311143270622286 },
                { start: 1800, density: 0.03415340086830681 },
              ],
              percentiles: { p75: 920 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1430,
        lcp: 2026,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651751760616,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6161363066900525 },
                { start: 800, end: 1800, density: 0.342645953395139 },
                { start: 1800, density: 0.041217739914808524 },
              ],
              percentiles: { p75: 1027 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8237820591483617 },
                { start: 1800, end: 3000, density: 0.12602773346422874 },
                { start: 3000, density: 0.05019020738740954 },
              ],
              percentiles: { p75: 1470 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9666411042944785 },
                { start: 100, end: 300, density: 0.01712678936605317 },
                { start: 300, density: 0.016232106339468318 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8693055897562176 },
                { start: 2500, end: 4000, density: 0.09671263235656243 },
                { start: 4000, density: 0.03398177788721997 },
              ],
              percentiles: { p75: 1803 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9049895795022681,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06889787912222631,
                },
                { start: "0.25", density: 0.02611254137550571 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7812649164677805 },
                { start: 200, end: 500, density: 0.1600238663484487 },
                { start: 500, density: 0.05871121718377074 },
              ],
              percentiles: { p75: 187 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1470,
        lcp: 1803,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651751760749,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4794999999999995 },
                { start: 200, end: 500, density: 0.2906999999999997 },
                { start: 500, density: 0.22980000000000084 },
              ],
              percentiles: { p75: 459 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3699479791916764 },
                { start: 800, end: 1800, density: 0.39165666266506566 },
                { start: 1800, density: 0.238395358143258 },
              ],
              percentiles: { p75: 1794 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4506450645064524 },
                { start: 1800, end: 3000, density: 0.24512451245124614 },
                { start: 3000, density: 0.30423042304230136 },
              ],
              percentiles: { p75: 3429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9033420052031217 },
                { start: 100, end: 300, density: 0.06143686211727034 },
                { start: 300, density: 0.03522113267960797 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49334933493349814 },
                { start: 2500, end: 4000, density: 0.24002400240024244 },
                { start: 4000, density: 0.2666266626662594 },
              ],
              percentiles: { p75: 4212 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8674000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09519999999999999,
                },
                { start: "0.25", density: 0.03739999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3429,
        lcp: 4212,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1651751760884,
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
                { start: 0, end: 1800, density: 0.49369873974794903 },
                { start: 1800, end: 3000, density: 0.3244648929785953 },
                { start: 3000, density: 0.18183636727345565 },
              ],
              percentiles: { p75: 2671 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812000000000001 },
                { start: 100, end: 300, density: 0.015600000000000001 },
                { start: 300, density: 0.0032000000000000028 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6090890910908906 },
                { start: 2500, end: 4000, density: 0.24022597740225965 },
                { start: 4000, density: 0.15068493150684978 },
              ],
              percentiles: { p75: 3215 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8073 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11240000000000001,
                },
                { start: "0.25", density: 0.08030000000000002 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7219278072192781 },
                { start: 200, end: 500, density: 0.22637736226377367 },
                { start: 500, density: 0.051694830516948176 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2641735826417353 },
                { start: 800, end: 1800, density: 0.5756424357564233 },
                { start: 1800, density: 0.1601839816018414 },
              ],
              percentiles: { p75: 1563 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2671,
        lcp: 3215,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651751760971,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9379198046000408 },
                { start: 100, end: 300, density: 0.04172603297374314 },
                { start: 300, density: 0.02035416242621613 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8905592303066746 },
                { start: 2500, end: 4000, density: 0.08017638805371818 },
                { start: 4000, density: 0.029264381639607182 },
              ],
              percentiles: { p75: 1965 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9364207221350079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04552590266875981,
                },
                { start: "0.25", density: 0.018053375196232346 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49925843529847935 },
                { start: 200, end: 500, density: 0.3266592510196512 },
                { start: 500, density: 0.1740823136818694 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.609519967728923 },
                { start: 800, end: 1800, density: 0.35094796288826136 },
                { start: 1800, density: 0.03953206938281559 },
              ],
              percentiles: { p75: 968 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8553877139979857 },
                { start: 1800, end: 3000, density: 0.10614300100704933 },
                { start: 3000, density: 0.03846928499496495 },
              ],
              percentiles: { p75: 1496 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1496,
        lcp: 1965,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651751761058,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8922499999999998 },
                { start: 2500, end: 4000, density: 0.07505 },
                { start: 4000, density: 0.03270000000000012 },
              ],
              percentiles: { p75: 1787 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7568756875687569,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17341734173417342,
                },
                { start: "0.25", density: 0.0697069706970697 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7468000000000002 },
                { start: 200, end: 500, density: 0.16309999999999997 },
                { start: 500, density: 0.0900999999999998 },
              ],
              percentiles: { p75: 208 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7670465906818635 },
                { start: 800, end: 1800, density: 0.21045790841831635 },
                { start: 1800, density: 0.02249550089982001 },
              ],
              percentiles: { p75: 797 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9055999999999998 },
                { start: 1800, end: 3000, density: 0.06819999999999998 },
                { start: 3000, density: 0.026200000000000077 },
              ],
              percentiles: { p75: 1254 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9683968396839683 },
                { start: 100, end: 300, density: 0.008000800080008 },
                { start: 300, density: 0.023602360236023644 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1254,
        lcp: 1787,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1651751761197,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9683968396839683 },
                { start: 100, end: 300, density: 0.008000800080008 },
                { start: 300, density: 0.023602360236023644 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8922499999999998 },
                { start: 2500, end: 4000, density: 0.07505 },
                { start: 4000, density: 0.03270000000000012 },
              ],
              percentiles: { p75: 1787 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7568756875687569,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17341734173417342,
                },
                { start: "0.25", density: 0.0697069706970697 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7468000000000002 },
                { start: 200, end: 500, density: 0.16309999999999997 },
                { start: 500, density: 0.0900999999999998 },
              ],
              percentiles: { p75: 208 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7670465906818635 },
                { start: 800, end: 1800, density: 0.21045790841831635 },
                { start: 1800, density: 0.02249550089982001 },
              ],
              percentiles: { p75: 797 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9055999999999998 },
                { start: 1800, end: 3000, density: 0.06819999999999998 },
                { start: 3000, density: 0.026200000000000077 },
              ],
              percentiles: { p75: 1254 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1254,
        lcp: 1787,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1651751761293,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5788110171802555 },
                { start: 800, end: 1800, density: 0.3157894736842101 },
                { start: 1800, density: 0.10539950913553438 },
              ],
              percentiles: { p75: 1127 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7048349541158738 },
                { start: 1800, end: 3000, density: 0.18038624845911497 },
                { start: 3000, density: 0.11477879742501129 },
              ],
              percentiles: { p75: 2017 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9341614906832297 },
                { start: 100, end: 300, density: 0.04182194616977226 },
                { start: 300, density: 0.02401656314699808 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7644628099173547 },
                { start: 2500, end: 4000, density: 0.1457119631486247 },
                { start: 4000, density: 0.0898252269340206 },
              ],
              percentiles: { p75: 2457 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9226214506795855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05503969856008613,
                },
                { start: "0.25", density: 0.022338850760328374 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46169220519653553 },
                { start: 200, end: 500, density: 0.36282478347768143 },
                { start: 500, density: 0.17548301132578295 },
              ],
              percentiles: { p75: 378 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2017,
        lcp: 2457,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751761402,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7469515605772447 },
                { start: 2500, end: 4000, density: 0.15740015661707105 },
                { start: 4000, density: 0.0956482828056842 },
              ],
              percentiles: { p75: 2526 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8486095661846494,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09866518353726363,
                },
                { start: "0.25", density: 0.05272525027808685 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6581320271624178 },
                { start: 200, end: 500, density: 0.2532561505065123 },
                { start: 500, density: 0.08861182233106993 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4355595264686171 },
                { start: 800, end: 1800, density: 0.4323207505025684 },
                { start: 1800, density: 0.13211972302881445 },
              ],
              percentiles: { p75: 1394 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6779926232256616 },
                { start: 1800, end: 3000, density: 0.20163183189896042 },
                { start: 3000, density: 0.1203755448753781 },
              ],
              percentiles: { p75: 2150 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536188731103984 },
                { start: 100, end: 300, density: 0.031149793861658264 },
                { start: 300, density: 0.015231333027943324 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2150,
        lcp: 2526,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651751761565,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6921692169216923 },
                { start: 800, end: 1800, density: 0.279027902790279 },
                { start: 1800, density: 0.028802880288028763 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8776755351070215 },
                { start: 1800, end: 3000, density: 0.10112022404480893 },
                { start: 3000, density: 0.02120424084816961 },
              ],
              percentiles: { p75: 1416 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.979504099180164 },
                { start: 100, end: 300, density: 0.013197360527894421 },
                { start: 300, density: 0.007298540291941596 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.895408163265306 },
                { start: 2500, end: 4000, density: 0.08528411364545817 },
                { start: 4000, density: 0.01930772308923572 },
              ],
              percentiles: { p75: 1811 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8833116688331167,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09929007099290073,
                },
                { start: "0.25", density: 0.017398260173982612 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6997399479895979 },
                { start: 200, end: 500, density: 0.24524904980996207 },
                { start: 500, density: 0.055011002200439994 },
              ],
              percentiles: { p75: 225 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1416,
        lcp: 1811,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651751761703,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8877775555111023,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.061512302460492094,
                },
                { start: "0.25", density: 0.05071014202840566 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6336465413834472 },
                { start: 200, end: 500, density: 0.2771891243502601 },
                { start: 500, density: 0.08916433426629262 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44673402020606123 },
                { start: 800, end: 1800, density: 0.414324297289186 },
                { start: 1800, density: 0.13894168250475292 },
              ],
              percentiles: { p75: 1366 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6241999999999992 },
                { start: 1800, end: 3000, density: 0.21789999999999973 },
                { start: 3000, density: 0.15790000000000093 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9504099180163968 },
                { start: 100, end: 300, density: 0.030893821235752853 },
                { start: 300, density: 0.018696260747850357 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6949779911964781 },
                { start: 2500, end: 4000, density: 0.16756702681072427 },
                { start: 4000, density: 0.1374549819927976 },
              ],
              percentiles: { p75: 2881 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2389,
        lcp: 2881,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751761791,
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
                  density: 0.9545717927917489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030015065476880293,
                },
                { start: "0.25", density: 0.015413141731370962 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5866264920616524 },
                { start: 200, end: 500, density: 0.3118553714219491 },
                { start: 500, density: 0.10151813651639853 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6293584379358436 },
                { start: 800, end: 1800, density: 0.30218503021850285 },
                { start: 1800, density: 0.06845653184565356 },
              ],
              percentiles: { p75: 980 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7809912536443155 },
                { start: 1800, end: 3000, density: 0.1467055393586007 },
                { start: 3000, density: 0.07230320699708383 },
              ],
              percentiles: { p75: 1719 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9380200168817076 },
                { start: 100, end: 300, density: 0.027251899192089712 },
                { start: 300, density: 0.034728083926202774 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8239395700174319 },
                { start: 2500, end: 4000, density: 0.1195816385822197 },
                { start: 4000, density: 0.05647879140034841 },
              ],
              percentiles: { p75: 2110 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1719,
        lcp: 2110,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751761885,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8259000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1236 },
                { start: "0.25", density: 0.050499999999999975 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5515999999999991 },
                { start: 200, end: 500, density: 0.29629999999999956 },
                { start: 500, density: 0.1521000000000013 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6156384361563838 },
                { start: 800, end: 1800, density: 0.29407059294070576 },
                { start: 1800, density: 0.09029097090291033 },
              ],
              percentiles: { p75: 1052 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7365736573657365 },
                { start: 1800, end: 3000, density: 0.16161616161616155 },
                { start: 3000, density: 0.10181018101810199 },
              ],
              percentiles: { p75: 1884 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443888777755551 },
                { start: 100, end: 300, density: 0.03410682136427286 },
                { start: 300, density: 0.02150430086017202 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7788999999999999 },
                { start: 2500, end: 4000, density: 0.13929999999999998 },
                { start: 4000, density: 0.08180000000000018 },
              ],
              percentiles: { p75: 2389 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1884,
        lcp: 2389,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1651751762021,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41668658857279484 },
                { start: 800, end: 1800, density: 0.3853693521396128 },
                { start: 1800, density: 0.19794405928759232 },
              ],
              percentiles: { p75: 1603 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5847813061713598 },
                { start: 1800, end: 3000, density: 0.2500898741761533 },
                { start: 3000, density: 0.16512881965248688 },
              ],
              percentiles: { p75: 2535 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9358355010528923 },
                { start: 100, end: 300, density: 0.04223956397869441 },
                { start: 300, density: 0.021924934968413363 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6827176781002637 },
                { start: 2500, end: 4000, density: 0.21342048452866394 },
                { start: 4000, density: 0.10386183737107221 },
              ],
              percentiles: { p75: 2848 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9701581262632266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014861490904767564,
                },
                { start: "0.25", density: 0.014980382832005697 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6168213181061153 },
                { start: 200, end: 500, density: 0.27159172019985744 },
                { start: 500, density: 0.1115869616940272 },
              ],
              percentiles: { p75: 268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2535,
        lcp: 2848,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751762111,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502958579881656 },
                { start: 100, end: 300, density: 0.03594674556213018 },
                { start: 300, density: 0.013757396449704147 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6630847953216374 },
                { start: 2500, end: 4000, density: 0.2092836257309942 },
                { start: 4000, density: 0.12763157894736826 },
              ],
              percentiles: { p75: 2983 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9522439585730725,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02661104718066743,
                },
                { start: "0.25", density: 0.02114499424626007 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6686703878631746 },
                { start: 200, end: 500, density: 0.24345212537569777 },
                { start: 500, density: 0.08787748676112768 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4009958992384295 },
                { start: 800, end: 1800, density: 0.376684241359109 },
                { start: 1800, density: 0.2223198594024615 },
              ],
              percentiles: { p75: 1708 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5889830508474568 },
                { start: 1800, end: 3000, density: 0.21683226183518384 },
                { start: 3000, density: 0.1941846873173593 },
              ],
              percentiles: { p75: 2660 },
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
        lcp: 2983,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751762249,
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
                { start: "0.00", end: "0.10", density: 0.77992200779922 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16208379162083794,
                },
                { start: "0.25", density: 0.057994200579942014 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7683999999999999 },
                { start: 200, end: 500, density: 0.16679999999999995 },
                { start: 500, density: 0.06480000000000008 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4985999999999997 },
                { start: 800, end: 1800, density: 0.4151999999999998 },
                { start: 1800, density: 0.08620000000000044 },
              ],
              percentiles: { p75: 1291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7135145941623365 },
                { start: 1800, end: 3000, density: 0.19822071171531427 },
                { start: 3000, density: 0.08826469412234907 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701119552179128 },
                { start: 100, end: 300, density: 0.014594162335065978 },
                { start: 300, density: 0.015293882447021182 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.728677132286773 },
                { start: 2500, end: 4000, density: 0.17653234676532384 },
                { start: 4000, density: 0.09479052094790326 },
              ],
              percentiles: { p75: 2754 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2108,
        lcp: 2754,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1651751762387,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8150554833549934 },
                { start: 200, end: 500, density: 0.1284614615615315 },
                { start: 500, density: 0.056483055083475155 },
              ],
              percentiles: { p75: 159 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41464146414641473 },
                { start: 800, end: 1800, density: 0.4165416541654166 },
                { start: 1800, density: 0.1688168816881688 },
              ],
              percentiles: { p75: 1352 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.1582000000000002 },
                { start: 1800, end: 3000, density: 0.4250000000000005 },
                { start: 3000, density: 0.41679999999999934 },
              ],
              percentiles: { p75: 4538 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3207820782078215 },
                { start: 2500, end: 4000, density: 0.3375837583758384 },
                { start: 4000, density: 0.34163416341634 },
              ],
              percentiles: { p75: 5089 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8647 },
                { start: "0.10", end: "0.25", density: 0.0767 },
                { start: "0.25", density: 0.05860000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4538, lcp: 5089, cls: "0.04" },
      timestamp: 1651751762477,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7683999999999999 },
                { start: 200, end: 500, density: 0.16679999999999995 },
                { start: 500, density: 0.06480000000000008 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4985999999999997 },
                { start: 800, end: 1800, density: 0.4151999999999998 },
                { start: 1800, density: 0.08620000000000044 },
              ],
              percentiles: { p75: 1291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7135145941623365 },
                { start: 1800, end: 3000, density: 0.19822071171531427 },
                { start: 3000, density: 0.08826469412234907 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701119552179128 },
                { start: 100, end: 300, density: 0.014594162335065978 },
                { start: 300, density: 0.015293882447021182 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.728677132286773 },
                { start: 2500, end: 4000, density: 0.17653234676532384 },
                { start: 4000, density: 0.09479052094790326 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.77992200779922 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16208379162083794,
                },
                { start: "0.25", density: 0.057994200579942014 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2108,
        lcp: 2754,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1651751762621,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7385 },
                { start: 800, end: 1800, density: 0.22280000000000005 },
                { start: 1800, density: 0.03869999999999981 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8873999999999999 },
                { start: 1800, end: 3000, density: 0.0763 },
                { start: 3000, density: 0.0363000000000001 },
              ],
              percentiles: { p75: 1283 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643928785757152 },
                { start: 100, end: 300, density: 0.017203440688137627 },
                { start: 300, density: 0.018403680736147152 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8611583475042509 },
                { start: 2500, end: 4000, density: 0.09602880864259271 },
                { start: 4000, density: 0.04281284385315642 },
              ],
              percentiles: { p75: 1929 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7809999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17420000000000002,
                },
                { start: "0.25", density: 0.04480000000000004 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7221722172217219 },
                { start: 200, end: 500, density: 0.1798179817981797 },
                { start: 500, density: 0.09800980098009839 },
              ],
              percentiles: { p75: 220 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1283,
        lcp: 1929,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651751762720,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9765104592731096 },
                { start: 100, end: 300, density: 0.014958513497721164 },
                { start: 300, density: 0.008531027229169083 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.898084025854109 },
                { start: 2500, end: 4000, density: 0.08333333333333336 },
                { start: 4000, density: 0.018582640812557727 },
              ],
              percentiles: { p75: 1784 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9048659841251582,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08006441964799264,
                },
                { start: "0.25", density: 0.015069596226849197 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.665649027589326 },
                { start: 200, end: 500, density: 0.273066485753053 },
                { start: 500, density: 0.06128448665762098 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6705498602050326 },
                { start: 800, end: 1800, density: 0.29799627213420327 },
                { start: 1800, density: 0.03145386766076416 },
              ],
              percentiles: { p75: 902 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8711429562001619 },
                { start: 1800, end: 3000, density: 0.10713047497977579 },
                { start: 3000, density: 0.021726568820062367 },
              ],
              percentiles: { p75: 1448 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1448,
        lcp: 1784,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751762832,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9347368421052632,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05801169590643276,
                },
                { start: "0.25", density: 0.007251461988304093 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6244637681159424 },
                { start: 200, end: 500, density: 0.2939130434782609 },
                { start: 500, density: 0.08162318840579667 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5274142200212236 },
                { start: 800, end: 1800, density: 0.4257752623511376 },
                { start: 1800, density: 0.04681051762763881 },
              ],
              percentiles: { p75: 1090 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8219145940872834 },
                { start: 1800, end: 3000, density: 0.13714218676677623 },
                { start: 3000, density: 0.04094321914594038 },
              ],
              percentiles: { p75: 1631 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463560334528078 },
                { start: 100, end: 300, density: 0.027837514934289133 },
                { start: 300, density: 0.025806451612903195 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8414705882352939 },
                { start: 2500, end: 4000, density: 0.1177058823529411 },
                { start: 4000, density: 0.040823529411765 },
              ],
              percentiles: { p75: 2107 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1631,
        lcp: 2107,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751763001,
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
                  density: 0.8696424342884206,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10170494908832582,
                },
                { start: "0.25", density: 0.028652616623253586 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6024909789314402 },
                { start: 200, end: 500, density: 0.2941450355022699 },
                { start: 500, density: 0.10336398556628988 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6112162801703735 },
                { start: 800, end: 1800, density: 0.33991954566966376 },
                { start: 1800, density: 0.04886417415996275 },
              ],
              percentiles: { p75: 988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.785020146954254 },
                { start: 1800, end: 3000, density: 0.15607963972505318 },
                { start: 3000, density: 0.058900213320692764 },
              ],
              percentiles: { p75: 1695 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586995785671282 },
                { start: 100, end: 300, density: 0.023841059602649005 },
                { start: 300, density: 0.017459361830222817 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8189787939817557 },
                { start: 2500, end: 4000, density: 0.129013150100699 },
                { start: 4000, density: 0.05200805591754534 },
              ],
              percentiles: { p75: 2170 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1695,
        lcp: 2170,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751763150,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41014734923287105 },
                { start: 1800, end: 3000, density: 0.329485037217073 },
                { start: 3000, density: 0.26036761355005594 },
              ],
              percentiles: { p75: 3094 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9127351218008019 },
                { start: 100, end: 300, density: 0.04455750847980265 },
                { start: 300, density: 0.042707369719395503 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5257957459647006 },
                { start: 2500, end: 4000, density: 0.2925780660733141 },
                { start: 4000, density: 0.18162618796198537 },
              ],
              percentiles: { p75: 3512 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9368577810871184,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0344005956813105,
                },
                { start: "0.25", density: 0.028741623231571166 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48475383013535583 },
                { start: 200, end: 500, density: 0.3230700580098168 },
                { start: 500, density: 0.19217611185482739 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24015094339622567 },
                { start: 800, end: 1800, density: 0.37781132075471596 },
                { start: 1800, density: 0.3820377358490585 },
              ],
              percentiles: { p75: 2160 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3094,
        lcp: 3512,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651751763295,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5114534360308088 },
                { start: 1800, end: 3000, density: 0.24097229168750608 },
                { start: 3000, density: 0.24757427228168497 },
              ],
              percentiles: { p75: 3067 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566043395660433 },
                { start: 100, end: 300, density: 0.0313968603139686 },
                { start: 300, density: 0.011998800119988011 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5573442655734419 },
                { start: 2500, end: 4000, density: 0.24097590240975866 },
                { start: 4000, density: 0.20167983201679945 },
              ],
              percentiles: { p75: 3660 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8338000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10860000000000002,
                },
                { start: "0.25", density: 0.05759999999999998 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6203379662033798 },
                { start: 200, end: 500, density: 0.27727227277272276 },
                { start: 500, density: 0.10238976102389753 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.276972302769722 },
                { start: 800, end: 1800, density: 0.43315668433156523 },
                { start: 1800, density: 0.2898710128987129 },
              ],
              percentiles: { p75: 1963 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3067,
        lcp: 3660,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1651751763433,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7534253425342529 },
                { start: 2500, end: 4000, density: 0.15156515651565142 },
                { start: 4000, density: 0.09500950095009568 },
              ],
              percentiles: { p75: 2494 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8156815681568155,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1201120112011201,
                },
                { start: "0.25", density: 0.0642064206420644 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6862313768623141 },
                { start: 200, end: 500, density: 0.23107689231076903 },
                { start: 500, density: 0.08269173082691703 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4499100179964003 },
                { start: 800, end: 1800, density: 0.42111577684463064 },
                { start: 1800, density: 0.12897420515896904 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6915691569156904 },
                { start: 1800, end: 3000, density: 0.1918191819181915 },
                { start: 3000, density: 0.116611661166118 },
              ],
              percentiles: { p75: 2091 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591836734693877 },
                { start: 100, end: 300, density: 0.0274109643857543 },
                { start: 300, density: 0.01340536214485806 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2091,
        lcp: 2494,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651751763527,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9122912291229122 },
                { start: 1800, end: 3000, density: 0.06610661066106609 },
                { start: 3000, density: 0.02160216021602169 },
              ],
              percentiles: { p75: 1228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611116665000502 },
                { start: 100, end: 300, density: 0.01899430170948716 },
                { start: 300, density: 0.019894031790462636 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9055905590559056 },
                { start: 2500, end: 4000, density: 0.07550755075507554 },
                { start: 4000, density: 0.01890189018901891 },
              ],
              percentiles: { p75: 1782 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8727 },
                { start: "0.10", end: "0.25", density: 0.0924 },
                { start: "0.25", density: 0.03489999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5552334299710083 },
                { start: 200, end: 500, density: 0.3017094871538537 },
                { start: 500, density: 0.14305708287513777 },
              ],
              percentiles: { p75: 339 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8364345738295318 },
                { start: 800, end: 1800, density: 0.14065626250500196 },
                { start: 1800, density: 0.02290916366546615 },
              ],
              percentiles: { p75: 697 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1228,
        lcp: 1782,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1651751763621,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6108945527236367 },
                { start: 1800, end: 3000, density: 0.1469265367316338 },
                { start: 3000, density: 0.24217891054472956 },
              ],
              percentiles: { p75: 2845 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612961296129613 },
                { start: 100, end: 300, density: 0.0222022202220222 },
                { start: 300, density: 0.016501650165016504 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6316236752649453 },
                { start: 2500, end: 4000, density: 0.18081383723255307 },
                { start: 4000, density: 0.1875624875025017 },
              ],
              percentiles: { p75: 3264 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9131 },
                { start: "0.10", end: "0.25", density: 0.0578 },
                { start: "0.25", density: 0.0291 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6428285657131427 },
                { start: 200, end: 500, density: 0.2877575515103021 },
                { start: 500, density: 0.06941388277655515 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49745076477056915 },
                { start: 800, end: 1800, density: 0.26971908427471775 },
                { start: 1800, density: 0.23283015095471313 },
              ],
              percentiles: { p75: 1676 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2845,
        lcp: 3264,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751763720,
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
                { start: "0.00", end: "0.10", density: 0.7527 },
                { start: "0.10", end: "0.25", density: 0.1123 },
                { start: "0.25", density: 0.13499999999999998 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5388461153884615 },
                { start: 800, end: 1800, density: 0.25957404259574063 },
                { start: 1800, density: 0.20157984201579776 },
              ],
              percentiles: { p75: 1520 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6200860258077423 },
                { start: 1800, end: 3000, density: 0.1487446233870161 },
                { start: 3000, density: 0.23116935080524162 },
              ],
              percentiles: { p75: 2836 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646620675864827 },
                { start: 2500, end: 4000, density: 0.16931613677264554 },
                { start: 4000, density: 0.18406318736252764 },
              ],
              percentiles: { p75: 3210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2836, lcp: 3210, cls: "0.10" },
      timestamp: 1651751763816,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646620675864827 },
                { start: 2500, end: 4000, density: 0.16931613677264554 },
                { start: 4000, density: 0.18406318736252764 },
              ],
              percentiles: { p75: 3210 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7527 },
                { start: "0.10", end: "0.25", density: 0.1123 },
                { start: "0.25", density: 0.13499999999999998 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5388461153884615 },
                { start: 800, end: 1800, density: 0.25957404259574063 },
                { start: 1800, density: 0.20157984201579776 },
              ],
              percentiles: { p75: 1520 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6200860258077423 },
                { start: 1800, end: 3000, density: 0.1487446233870161 },
                { start: 3000, density: 0.23116935080524162 },
              ],
              percentiles: { p75: 2836 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2836, lcp: 3210, cls: "0.10" },
      timestamp: 1651751763963,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.ke" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5314781021897803 },
                { start: 2500, end: 4000, density: 0.25319343065693406 },
                { start: 4000, density: 0.21532846715328555 },
              ],
              percentiles: { p75: 3762 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8527342863626051,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09223961878829137,
                },
                { start: "0.25", density: 0.055026094849103646 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5780821917808219 },
                { start: 200, end: 500, density: 0.3105022831050227 },
                { start: 500, density: 0.11141552511415549 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2496573777980804 },
                { start: 800, end: 1800, density: 0.43821379625399554 },
                { start: 1800, density: 0.31212882594792407 },
              ],
              percentiles: { p75: 2011 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4759242355088998 },
                { start: 1800, end: 3000, density: 0.2531948881789136 },
                { start: 3000, density: 0.27088087631218666 },
              ],
              percentiles: { p75: 3180 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485599146616097 },
                { start: 100, end: 300, density: 0.03721702026786773 },
                { start: 300, density: 0.014223065070522713 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3180,
        lcp: 3762,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651751764112,
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
                { start: "0.00", end: "0.10", density: 0.9375 },
                { start: "0.10", end: "0.25", density: 0.0401 },
                { start: "0.25", density: 0.02240000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8681000000000001 },
                { start: 200, end: 500, density: 0.10340000000000002 },
                { start: 500, density: 0.028499999999999918 },
              ],
              percentiles: { p75: 124 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5774 },
                { start: 800, end: 1800, density: 0.3649 },
                { start: 1800, density: 0.05770000000000002 },
              ],
              percentiles: { p75: 1092 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7713085234093637 },
                { start: 1800, end: 3000, density: 0.18167266906762705 },
                { start: 3000, density: 0.04701880752300914 },
              ],
              percentiles: { p75: 1750 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9781043791241751 },
                { start: 100, end: 300, density: 0.015096980603879222 },
                { start: 300, density: 0.006798640271945606 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8124812481248124 },
                { start: 2500, end: 4000, density: 0.1262126212621263 },
                { start: 4000, density: 0.06130613061306141 },
              ],
              percentiles: { p75: 2214 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1750, lcp: 2214, cls: "0.01", fid: 8 },
      timestamp: 1651751764277,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646746347941567 },
                { start: 100, end: 300, density: 0.024302788844621514 },
                { start: 300, density: 0.011022576361221779 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7413493736822528 },
                { start: 2500, end: 4000, density: 0.1568274835669107 },
                { start: 4000, density: 0.10182314275083636 },
              ],
              percentiles: { p75: 2562 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9696819700532111,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013240935527781213,
                },
                { start: "0.25", density: 0.01707709441900756 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.625934861278649 },
                { start: 200, end: 500, density: 0.3265379975874549 },
                { start: 500, density: 0.04752714113389608 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4216926667485565 },
                { start: 800, end: 1800, density: 0.4716865249969288 },
                { start: 1800, density: 0.10662080825451473 },
              ],
              percentiles: { p75: 1215 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6328202581926513 },
                { start: 1800, end: 3000, density: 0.2444141012909632 },
                { start: 3000, density: 0.12276564051638551 },
              ],
              percentiles: { p75: 2181 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2181,
        lcp: 2562,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751764402,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.670060539350578 },
                { start: 800, end: 1800, density: 0.2506879471656578 },
                { start: 1800, density: 0.07925151348376429 },
              ],
              percentiles: { p75: 950 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220198675496684 },
                { start: 1800, end: 3000, density: 0.11892935982339956 },
                { start: 3000, density: 0.05905077262693195 },
              ],
              percentiles: { p75: 1521 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9406343182434265 },
                { start: 100, end: 300, density: 0.03293575494714015 },
                { start: 300, density: 0.02642992680943338 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8412413793103447 },
                { start: 2500, end: 4000, density: 0.10744827586206898 },
                { start: 4000, density: 0.05131034482758631 },
              ],
              percentiles: { p75: 2034 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9546140134375428,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028657616892911016,
                },
                { start: "0.25", density: 0.01672836966954614 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4655356665776118 },
                { start: 200, end: 500, density: 0.38004274646005903 },
                { start: 500, density: 0.1544215869623292 },
              ],
              percentiles: { p75: 355 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1521,
        lcp: 2034,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651751764555,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43149909420289834 },
                { start: 200, end: 500, density: 0.31884057971014473 },
                { start: 500, density: 0.24966032608695687 },
              ],
              percentiles: { p75: 498 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3454100911313621 },
                { start: 800, end: 1800, density: 0.3971993776394749 },
                { start: 1800, density: 0.25739053122916294 },
              ],
              percentiles: { p75: 1869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4163868368032257 },
                { start: 1800, end: 3000, density: 0.2561002910230593 },
                { start: 3000, density: 0.3275128721737151 },
              ],
              percentiles: { p75: 3568 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8912411306269626 },
                { start: 100, end: 300, density: 0.06909386995463532 },
                { start: 300, density: 0.03966499941840199 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46628455832771454 },
                { start: 2500, end: 4000, density: 0.25140481006967885 },
                { start: 4000, density: 0.28231063160260667 },
              ],
              percentiles: { p75: 4334 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8767550702028082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08580343213728549,
                },
                { start: "0.25", density: 0.03744149765990639 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3568,
        lcp: 4334,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1651751764707,
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
                { start: "0.00", end: "0.10", density: 0.8658 },
                { start: "0.10", end: "0.25", density: 0.0781 },
                { start: "0.25", density: 0.056100000000000046 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48070385922815473 },
                { start: 200, end: 500, density: 0.35942811437712485 },
                { start: 500, density: 0.1598680263947204 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5479452054794518 },
                { start: 800, end: 1800, density: 0.36426357364263545 },
                { start: 1800, density: 0.08779122087791277 },
              ],
              percentiles: { p75: 1120 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7340063974410236 },
                { start: 1800, end: 3000, density: 0.17612954818072768 },
                { start: 3000, density: 0.08986405437824874 },
              ],
              percentiles: { p75: 1872 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9348934893489349 },
                { start: 100, end: 300, density: 0.03500350035003501 },
                { start: 300, density: 0.03010301030103005 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7747225277472246 },
                { start: 2500, end: 4000, density: 0.1504849515048494 },
                { start: 4000, density: 0.07479252074792593 },
              ],
              percentiles: { p75: 2398 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1872,
        lcp: 2398,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1651751764857,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3641364136413642 },
                { start: 800, end: 1800, density: 0.45294529452945304 },
                { start: 1800, density: 0.18291829182918284 },
              ],
              percentiles: { p75: 1592 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6504300860172035 },
                { start: 1800, end: 3000, density: 0.23424684936987394 },
                { start: 3000, density: 0.11532306461292256 },
              ],
              percentiles: { p75: 2392 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.986 },
                { start: 100, end: 300, density: 0.0114 },
                { start: 300, density: 0.0026 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7174717471747176 },
                { start: 2500, end: 4000, density: 0.200920092009201 },
                { start: 4000, density: 0.0816081608160815 },
              ],
              percentiles: { p75: 2758 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7719 },
                { start: "0.10", end: "0.25", density: 0.1729 },
                { start: "0.25", density: 0.055199999999999964 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8027000000000001 },
                { start: 200, end: 500, density: 0.16679999999999998 },
                { start: 500, density: 0.030499999999999982 },
              ],
              percentiles: { p75: 167 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2392, lcp: 2758, cls: "0.08", fid: 8 },
      timestamp: 1651751764957,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8396000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1002 },
                { start: "0.25", density: 0.060199999999999955 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5593237294917967 },
                { start: 200, end: 500, density: 0.315126050420168 },
                { start: 500, density: 0.12555022008803537 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7019596080783838 },
                { start: 800, end: 1800, density: 0.227854429114177 },
                { start: 1800, density: 0.07018596280743922 },
              ],
              percentiles: { p75: 891 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8448534560368108 },
                { start: 1800, end: 3000, density: 0.10433129938981694 },
                { start: 3000, density: 0.050815244573372234 },
              ],
              percentiles: { p75: 1414 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517807122849139 },
                { start: 100, end: 300, density: 0.026510604241696677 },
                { start: 300, density: 0.02170868347338936 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.851 },
                { start: 2500, end: 4000, density: 0.10139999999999998 },
                { start: 4000, density: 0.04760000000000003 },
              ],
              percentiles: { p75: 1982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1414,
        lcp: 1982,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651751765055,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516750096264921 },
                { start: 100, end: 300, density: 0.03215248363496342 },
                { start: 300, density: 0.016172506738544475 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8987202925045704 },
                { start: 2500, end: 4000, density: 0.06910420475319927 },
                { start: 4000, density: 0.03217550274223041 },
              ],
              percentiles: { p75: 1963 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9619771863117871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026072786529060293,
                },
                { start: "0.25", density: 0.01195002715915264 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5681537647681186 },
                { start: 200, end: 500, density: 0.29518603420913425 },
                { start: 500, density: 0.1366602010227471 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7087218869994514 },
                { start: 800, end: 1800, density: 0.25452550740537583 },
                { start: 1800, density: 0.036752605595172766 },
              ],
              percentiles: { p75: 877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8802141011443336 },
                { start: 1800, end: 3000, density: 0.09173126614987077 },
                { start: 3000, density: 0.028054632705795553 },
              ],
              percentiles: { p75: 1449 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1449,
        lcp: 1963,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651751765153,
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
                  density: 0.9425612052730696,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033145009416195866,
                },
                { start: "0.25", density: 0.024293785310734464 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5761183261183265 },
                { start: 200, end: 500, density: 0.2757936507936509 },
                { start: 500, density: 0.14808802308802263 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7095831710167511 },
                { start: 800, end: 1800, density: 0.2656797818465135 },
                { start: 1800, density: 0.024737047136735444 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8713193116634799 },
                { start: 1800, end: 3000, density: 0.09158699808795415 },
                { start: 3000, density: 0.03709369024856608 },
              ],
              percentiles: { p75: 1474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9425465838509316 },
                { start: 100, end: 300, density: 0.013781055900621118 },
                { start: 300, density: 0.043672360248447284 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8694905552375501 },
                { start: 2500, end: 4000, density: 0.0873879030719328 },
                { start: 4000, density: 0.04312154169051703 },
              ],
              percentiles: { p75: 2011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1474,
        lcp: 2011,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651751765305,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9624546866908338 },
                { start: 100, end: 300, density: 0.03158984981874677 },
                { start: 300, density: 0.005955463490419472 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6663021101389617 },
                { start: 2500, end: 4000, density: 0.17865414307771527 },
                { start: 4000, density: 0.15504374678332306 },
              ],
              percentiles: { p75: 3010 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9401426388181354,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03183902190524707,
                },
                { start: "0.25", density: 0.02801833927661744 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6854383544462558 },
                { start: 200, end: 500, density: 0.267527906685062 },
                { start: 500, density: 0.04703373886868218 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38018343883219224 },
                { start: 800, end: 1800, density: 0.4675106575377859 },
                { start: 1800, density: 0.15230590363002183 },
              ],
              percentiles: { p75: 1477 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5951062459755305 },
                { start: 1800, end: 3000, density: 0.22807469414037312 },
                { start: 3000, density: 0.17681905988409624 },
              ],
              percentiles: { p75: 2436 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2436,
        lcp: 3010,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751765458,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6257646635480385 },
                { start: 200, end: 500, density: 0.2948302746791411 },
                { start: 500, density: 0.07940506177282035 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5492906066536204 },
                { start: 800, end: 1800, density: 0.4066780821917809 },
                { start: 1800, density: 0.04403131115459865 },
              ],
              percentiles: { p75: 1020 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8387451171875002 },
                { start: 1800, end: 3000, density: 0.12634277343750003 },
                { start: 3000, density: 0.034912109374999806 },
              ],
              percentiles: { p75: 1569 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9633218842001963 },
                { start: 100, end: 300, density: 0.02269381746810599 },
                { start: 300, density: 0.013984298331697766 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8734470158343485 },
                { start: 2500, end: 4000, density: 0.09829476248477466 },
                { start: 4000, density: 0.028258221680876935 },
              ],
              percentiles: { p75: 1931 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9764420157862781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015421979356405584,
                },
                { start: "0.25", density: 0.008136004857316336 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1569,
        lcp: 1931,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651751765620,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8798 },
                { start: "0.10", end: "0.25", density: 0.0928 },
                { start: "0.25", density: 0.027399999999999976 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6307369263073694 },
                { start: 200, end: 500, density: 0.27247275272472754 },
                { start: 500, density: 0.09679032096790292 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6255748850229954 },
                { start: 800, end: 1800, density: 0.32863427314537086 },
                { start: 1800, density: 0.0457908418316337 },
              ],
              percentiles: { p75: 970 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7960407918416313 },
                { start: 1800, end: 3000, density: 0.14907018596280736 },
                { start: 3000, density: 0.054889022195561236 },
              ],
              percentiles: { p75: 1664 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637891367410222 },
                { start: 100, end: 300, density: 0.02140642192657797 },
                { start: 300, density: 0.014804441332399769 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.813662732546509 },
                { start: 2500, end: 4000, density: 0.13212642528505697 },
                { start: 4000, density: 0.05421084216843399 },
              ],
              percentiles: { p75: 2190 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1664,
        lcp: 2190,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651751765801,
    },
  ],
};
