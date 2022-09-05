export const audit5 = {
  date: "2022-03-19",
  legacyAudit: true,
  legacyAuditType: 2,
  legacyAuditId: "2022-03-19-legacy-audit",
  audits: [
    {
      url: "https://www.yara.es/",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7524000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1594000000000001,
                },
                { start: "0.25", density: 0.08819999999999995 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5039511853556056 },
                { start: 100, end: 300, density: 0.3111933580074015 },
                { start: 300, density: 0.18485545663699127 },
              ],
              percentiles: { p75: 232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7504999999999936 },
                { start: 1800, end: 3000, density: 0.16619999999999863 },
                { start: 3000, density: 0.08330000000000007 },
              ],
              percentiles: { p75: 1819 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9563825530212051 },
                { start: 100, end: 300, density: 0.027811124449779814 },
                { start: 300, density: 0.01580632252901153 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8034393121375748 },
                { start: 2500, end: 4000, density: 0.13087382523495336 },
                { start: 4000, density: 0.06568686262747493 },
              ],
              percentiles: { p75: 2245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1819,
        lcp: 2245,
        cls: "0.09",
        fid: 13,
        er: 232,
      },
      timestamp: 1647719678296,
    },
    {
      url: "https://www.yara.lv/",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.895510448955105,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08589141085891418,
                },
                { start: "0.25", density: 0.018598140185981403 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6746674667466743 },
                { start: 100, end: 300, density: 0.2308230823082307 },
                { start: 300, density: 0.094509450945094 },
              ],
              percentiles: { p75: 141 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8464846484648438 },
                { start: 1800, end: 3000, density: 0.11391139113911353 },
                { start: 3000, density: 0.03960396039603956 },
              ],
              percentiles: { p75: 1502 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9680968096809689 },
                { start: 100, end: 300, density: 0.02800280028002802 },
                { start: 300, density: 0.0039003900390039018 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8543854385438543 },
                { start: 2500, end: 4000, density: 0.11441144114411442 },
                { start: 4000, density: 0.031203120312031186 },
              ],
              percentiles: { p75: 2119 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1502,
        lcp: 2119,
        cls: "0.03",
        fid: 12,
        er: 141,
      },
      timestamp: 1647719678487,
    },
    {
      url: "https://www.yara.ie/",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5148029605921192 },
                { start: 1800, end: 3000, density: 0.324564912982597 },
                { start: 3000, density: 0.1606321264252861 },
              ],
              percentiles: { p75: 2566 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9458054194580552 },
                { start: 100, end: 300, density: 0.02569743025697433 },
                { start: 300, density: 0.028497150284971573 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5914817036592671 },
                { start: 2500, end: 4000, density: 0.29254149170165933 },
                { start: 4000, density: 0.11597680463907155 },
              ],
              percentiles: { p75: 3204 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7700999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14849999999999997,
                },
                { start: "0.25", density: 0.08139999999999996 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5798420157984193 },
                { start: 100, end: 300, density: 0.24347565243475622 },
                { start: 300, density: 0.1766823317668221 },
              ],
              percentiles: { p75: 197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2566,
        lcp: 3204,
        cls: "0.08",
        fid: 12,
        er: 197,
      },
      timestamp: 1647719678556,
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9824035192961411 },
                { start: 100, end: 300, density: 0.015196960607878432 },
                { start: 300, density: 0.002399520095980807 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8977704459108147 },
                { start: 2500, end: 4000, density: 0.08343331333733224 },
                { start: 4000, density: 0.018796240751849668 },
              ],
              percentiles: { p75: 1826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8347999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13459999999999991,
                },
                { start: "0.25", density: 0.030599999999999978 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7247000000000008 },
                { start: 100, end: 300, density: 0.21450000000000025 },
                { start: 300, density: 0.060800000000000194 },
              ],
              percentiles: { p75: 111 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8927321803458929 },
                { start: 1800, end: 3000, density: 0.08847345796261089 },
                { start: 3000, density: 0.018794361691492584 },
              ],
              percentiles: { p75: 1386 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1386,
        lcp: 1826,
        cls: "0.06",
        fid: 12,
        er: 111,
      },
      timestamp: 1647719678588,
    },
    {
      url: "https://www.yara.com.au/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7765223477652229,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15558444155584433,
                },
                { start: "0.25", density: 0.06789321067893204 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7933206679332075 },
                { start: 100, end: 300, density: 0.14088591140885923 },
                { start: 300, density: 0.06579342065793363 },
              ],
              percentiles: { p75: 80 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6186381361863862 },
                { start: 1800, end: 3000, density: 0.22407759224077764 },
                { start: 3000, density: 0.15728427157284386 },
              ],
              percentiles: { p75: 2427 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9801940582174634 },
                { start: 100, end: 300, density: 0.013704111233369986 },
                { start: 300, density: 0.006101830549164744 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6798960311906443 },
                { start: 2500, end: 4000, density: 0.1944416674997506 },
                { start: 4000, density: 0.12566230130960887 },
              ],
              percentiles: { p75: 2917 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2427,
        lcp: 2917,
        cls: "0.07",
        fid: 11,
        er: 80,
      },
      timestamp: 1647719678624,
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9510048995100508 },
                { start: 100, end: 300, density: 0.03919608039196088 },
                { start: 300, density: 0.009799020097990245 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.681413717256551 },
                { start: 2500, end: 4000, density: 0.18371325734853097 },
                { start: 4000, density: 0.1348730253949215 },
              ],
              percentiles: { p75: 2989 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8899000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07890000000000003,
                },
                { start: "0.25", density: 0.031200000000000037 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7223110755697723 },
                { start: 100, end: 300, density: 0.18802479008396641 },
                { start: 300, density: 0.08966413434626071 },
              ],
              percentiles: { p75: 117 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6201620162016247 },
                { start: 1800, end: 3000, density: 0.23912391239124092 },
                { start: 3000, density: 0.1407140714071414 },
              ],
              percentiles: { p75: 2314 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2314,
        lcp: 2989,
        cls: "0.02",
        fid: 13,
        er: 117,
      },
      timestamp: 1647719678668,
    },
    {
      url: "https://www.yara.co.th/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7203118752498997 },
                { start: 100, end: 300, density: 0.20231907237105148 },
                { start: 300, density: 0.07736905237904819 },
              ],
              percentiles: { p75: 114 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7285728572857372 },
                { start: 1800, end: 3000, density: 0.19951995199520198 },
                { start: 3000, density: 0.07190719071907312 },
              ],
              percentiles: { p75: 1882 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9710942188437666 },
                { start: 100, end: 300, density: 0.022004400880175988 },
                { start: 300, density: 0.006901380276055156 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7679267926792714 },
                { start: 2500, end: 4000, density: 0.1504650465046512 },
                { start: 4000, density: 0.08160816081608255 },
              ],
              percentiles: { p75: 2417 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.813 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15589999999999998,
                },
                { start: "0.25", density: 0.03109999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1882,
        lcp: 2417,
        cls: "0.04",
        fid: 12,
        er: 114,
      },
      timestamp: 1647719678717,
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7728227177282274,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17148285171482855,
                },
                { start: "0.25", density: 0.05569443055694432 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7107867639708091 },
                { start: 100, end: 300, density: 0.18784364690592836 },
                { start: 300, density: 0.10136958912326208 },
              ],
              percentiles: { p75: 132 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8853770754150875 },
                { start: 1800, end: 3000, density: 0.08561712342468532 },
                { start: 3000, density: 0.029005801160232193 },
              ],
              percentiles: { p75: 1330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626000000000037 },
                { start: 100, end: 300, density: 0.02160000000000008 },
                { start: 300, density: 0.015800000000000064 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8746500000000016 },
                { start: 2500, end: 4000, density: 0.09095000000000024 },
                { start: 4000, density: 0.03440000000000003 },
              ],
              percentiles: { p75: 1963 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1330,
        lcp: 1963,
        cls: "0.08",
        fid: 10,
        er: 132,
      },
      timestamp: 1647719678768,
    },
    {
      url: "https://www.yara.my/",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8016000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12610000000000007,
                },
                { start: "0.25", density: 0.07230000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8047804780478043 },
                { start: 100, end: 300, density: 0.14511451145114504 },
                { start: 300, density: 0.05010501050104976 },
              ],
              percentiles: { p75: 77 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7536507301460373 },
                { start: 1800, end: 3000, density: 0.15573114622924752 },
                { start: 3000, density: 0.0906181236247271 },
              ],
              percentiles: { p75: 1818 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9785021497850214 },
                { start: 100, end: 300, density: 0.017598240175982403 },
                { start: 300, density: 0.0038996100389960963 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8163316331633284 },
                { start: 2500, end: 4000, density: 0.11366136613661536 },
                { start: 4000, density: 0.07000700070007107 },
              ],
              percentiles: { p75: 2181 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1818,
        lcp: 2181,
        cls: "0.06",
        fid: 13,
        er: 77,
      },
      timestamp: 1647719678819,
    },
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9018598140186016 },
                { start: 2500, end: 4000, density: 0.07614238576142414 },
                { start: 4000, density: 0.021997800219978127 },
              ],
              percentiles: { p75: 1746 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8799000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09260000000000002,
                },
                { start: "0.25", density: 0.02750000000000002 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5266526652665261 },
                { start: 100, end: 300, density: 0.24152415241524128 },
                { start: 300, density: 0.23182318231822965 },
              ],
              percentiles: { p75: 273 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9063093690630961 },
                { start: 1800, end: 3000, density: 0.0758924107589243 },
                { start: 3000, density: 0.01779822017798228 },
              ],
              percentiles: { p75: 1231 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9048095190480955 },
                { start: 100, end: 300, density: 0.03959604039596042 },
                { start: 300, density: 0.05559444055594447 },
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
        fcp: 1231,
        lcp: 1746,
        cls: "0.03",
        fid: 16,
        er: 273,
      },
      timestamp: 1647719678868,
    },
    {
      url: "https://www.yara.cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6842368473694734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1735347069413882,
                },
                { start: "0.25", density: 0.14222844568913767 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5935780734220187 },
                { start: 1800, end: 3000, density: 0.1606481944583354 },
                { start: 3000, density: 0.24577373211963066 },
              ],
              percentiles: { p75: 2897 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9729972997299731 },
                { start: 100, end: 300, density: 0.02700270027002701 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6168000000000001 },
                { start: 2500, end: 4000, density: 0.18350000000000005 },
                { start: 4000, density: 0.19970000000000013 },
              ],
              percentiles: { p75: 3392 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2897,
        lcp: 3392,
        cls: "0.18",
        fid: 11,
      },
      timestamp: 1647719678918,
    },
    {
      url: "https://www.yara.be/fr-be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972999999999998 },
                { start: 100, end: 300, density: 0.010099999999999979 },
                { start: 300, density: 0.016899999999999984 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8902890289028909 },
                { start: 2500, end: 4000, density: 0.09020902090209026 },
                { start: 4000, density: 0.019501950195019525 },
              ],
              percentiles: { p75: 1903 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7236000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18780000000000005,
                },
                { start: "0.25", density: 0.08860000000000005 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7477504499100162 },
                { start: 100, end: 300, density: 0.15926814637072548 },
                { start: 300, density: 0.09298140371925523 },
              ],
              percentiles: { p75: 110 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8928892889288966 },
                { start: 1800, end: 3000, density: 0.07850785078507881 },
                { start: 3000, density: 0.028602860286028754 },
              ],
              percentiles: { p75: 1309 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1309,
        lcp: 1903,
        cls: "0.10",
        fid: 9,
        er: 110,
      },
      timestamp: 1647719678965,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9729972997299731 },
                { start: 100, end: 300, density: 0.02700270027002701 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6168000000000001 },
                { start: 2500, end: 4000, density: 0.18350000000000005 },
                { start: 4000, density: 0.19970000000000013 },
              ],
              percentiles: { p75: 3392 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6842368473694734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1735347069413882,
                },
                { start: "0.25", density: 0.14222844568913767 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5935780734220187 },
                { start: 1800, end: 3000, density: 0.1606481944583354 },
                { start: 3000, density: 0.24577373211963066 },
              ],
              percentiles: { p75: 2897 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2897,
        lcp: 3392,
        cls: "0.18",
        fid: 11,
      },
      timestamp: 1647719679016,
    },
    {
      url: "https://www.yara.fi/",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7580241975802416,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17988201179882002,
                },
                { start: "0.25", density: 0.06209379062093781 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5467000000000001 },
                { start: 100, end: 300, density: 0.28240000000000004 },
                { start: 300, density: 0.17090000000000133 },
              ],
              percentiles: { p75: 225 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8873112688731255 },
                { start: 1800, end: 3000, density: 0.0877912208779135 },
                { start: 3000, density: 0.024897510248975494 },
              ],
              percentiles: { p75: 1327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9564869460838208 },
                { start: 100, end: 300, density: 0.02630789236771019 },
                { start: 300, density: 0.017205161548464343 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8731500000000034 },
                { start: 2500, end: 4000, density: 0.10255000000000036 },
                { start: 4000, density: 0.02430000000000016 },
              ],
              percentiles: { p75: 1919 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1327,
        lcp: 1919,
        cls: "0.09",
        fid: 13,
        er: 225,
      },
      timestamp: 1647719679071,
    },
    {
      url: "https://www.yara.co.uk/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6736999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2181999999999998,
                },
                { start: "0.25", density: 0.10809999999999982 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5987401259874047 },
                { start: 100, end: 300, density: 0.18958104189581154 },
                { start: 300, density: 0.21167883211679056 },
              ],
              percentiles: { p75: 236 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43769999999999964 },
                { start: 1800, end: 3000, density: 0.29779999999999984 },
                { start: 3000, density: 0.2644999999999977 },
              ],
              percentiles: { p75: 3110 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9193999999999934 },
                { start: 100, end: 300, density: 0.039099999999999725 },
                { start: 300, density: 0.04149999999999975 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5242927121863451 },
                { start: 2500, end: 4000, density: 0.27756672998100623 },
                { start: 4000, density: 0.19814055783265294 },
              ],
              percentiles: { p75: 3622 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3110,
        lcp: 3622,
        cls: "0.15",
        fid: 13,
        er: 236,
      },
      timestamp: 1647719679116,
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8030606121224252 },
                { start: 100, end: 300, density: 0.14462892578515718 },
                { start: 300, density: 0.052310462092418554 },
              ],
              percentiles: { p75: 72 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9568000000000001 },
                { start: 1800, end: 3000, density: 0.03830000000000001 },
                { start: 3000, density: 0.0049 },
              ],
              percentiles: { p75: 1071 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9773954790958194 },
                { start: 100, end: 300, density: 0.020204040808161634 },
                { start: 300, density: 0.0024004800960192043 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9513548645135477 },
                { start: 2500, end: 4000, density: 0.03994600539946001 },
                { start: 4000, density: 0.00869913008699127 },
              ],
              percentiles: { p75: 1523 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9062000000000006,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08160000000000003,
                },
                { start: "0.25", density: 0.012200000000000013 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1071,
        lcp: 1523,
        cls: "0.05",
        fid: 10,
        er: 72,
      },
      timestamp: 1647719679164,
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8928892889288966 },
                { start: 1800, end: 3000, density: 0.07850785078507881 },
                { start: 3000, density: 0.028602860286028754 },
              ],
              percentiles: { p75: 1309 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972999999999998 },
                { start: 100, end: 300, density: 0.010099999999999979 },
                { start: 300, density: 0.016899999999999984 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8902890289028909 },
                { start: 2500, end: 4000, density: 0.09020902090209026 },
                { start: 4000, density: 0.019501950195019525 },
              ],
              percentiles: { p75: 1903 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7236000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18780000000000005,
                },
                { start: "0.25", density: 0.08860000000000005 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7477504499100162 },
                { start: 100, end: 300, density: 0.15926814637072548 },
                { start: 300, density: 0.09298140371925523 },
              ],
              percentiles: { p75: 110 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1309,
        lcp: 1903,
        cls: "0.10",
        fid: 9,
        er: 110,
      },
      timestamp: 1647719679232,
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7549019607843066 },
                { start: 2500, end: 4000, density: 0.15086034413765356 },
                { start: 4000, density: 0.09423769507803112 },
              ],
              percentiles: { p75: 2500 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8687868786878689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10021002100210022,
                },
                { start: "0.25", density: 0.03100310031003099 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8209388449604628 },
                { start: 100, end: 300, density: 0.12000800720648563 },
                { start: 300, density: 0.059053147833049685 },
              ],
              percentiles: { p75: 64 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7225335201120702 },
                { start: 1800, end: 3000, density: 0.16930158094856987 },
                { start: 3000, density: 0.10816489893936532 },
              ],
              percentiles: { p75: 1955 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9789684526790183 },
                { start: 100, end: 300, density: 0.016825237856785174 },
                { start: 300, density: 0.00420630946419629 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1955,
        lcp: 2500,
        cls: "0.05",
        fid: 11,
        er: 64,
      },
      timestamp: 1647719679276,
    },
    {
      url: "https://www.yara.com.mx/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8017000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14340000000000003,
                },
                { start: "0.25", density: 0.05490000000000005 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5593915741018707 },
                { start: 100, end: 300, density: 0.2660862603822673 },
                { start: 300, density: 0.17452216551586022 },
              ],
              percentiles: { p75: 213 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6118835650695222 },
                { start: 1800, end: 3000, density: 0.23116935080524206 },
                { start: 3000, density: 0.15694708412524042 },
              ],
              percentiles: { p75: 2377 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630704563650894 },
                { start: 100, end: 300, density: 0.02662129703763003 },
                { start: 300, density: 0.01030824659727783 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6949779911964822 },
                { start: 2500, end: 4000, density: 0.1738695478191286 },
                { start: 4000, density: 0.13115246098439662 },
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
        fcp: 2377,
        lcp: 2857,
        cls: "0.05",
        fid: 13,
        er: 213,
      },
      timestamp: 1647719679317,
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8620000000000048 },
                { start: 2500, end: 4000, density: 0.10220000000000057 },
                { start: 4000, density: 0.03580000000000068 },
              ],
              percentiles: { p75: 1942 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7456999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16469999999999999,
                },
                { start: "0.25", density: 0.0896 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6125937031484254 },
                { start: 100, end: 300, density: 0.25877061469265356 },
                { start: 300, density: 0.12863568215892093 },
              ],
              percentiles: { p75: 179 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8393321335732854 },
                { start: 1800, end: 3000, density: 0.11907618476304739 },
                { start: 3000, density: 0.041591681663667106 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657931586317247 },
                { start: 100, end: 300, density: 0.02340468093618719 },
                { start: 300, density: 0.01080216043208637 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1942,
        cls: "0.10",
        fid: 13,
        er: 179,
      },
      timestamp: 1647719679364,
    },
    {
      url: "https://www.yara.it/",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8405681136227298 },
                { start: 1800, end: 3000, density: 0.10772154430886241 },
                { start: 3000, density: 0.05171034206841455 },
              ],
              percentiles: { p75: 1473 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9613154738104844 },
                { start: 100, end: 300, density: 0.025289884046381682 },
                { start: 300, density: 0.013394642143142958 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8647135286471309 },
                { start: 2500, end: 4000, density: 0.09119088091190834 },
                { start: 4000, density: 0.04409559044095619 },
              ],
              percentiles: { p75: 1875 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8048195180481952,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1241875812418758,
                },
                { start: "0.25", density: 0.07099290070992896 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6737347469493894 },
                { start: 100, end: 300, density: 0.2247449489897978 },
                { start: 300, density: 0.10152030406081199 },
              ],
              percentiles: { p75: 134 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1473,
        lcp: 1875,
        cls: "0.05",
        fid: 12,
        er: 134,
      },
      timestamp: 1647719679408,
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7940294029402952 },
                { start: 2500, end: 4000, density: 0.14846484648464872 },
                { start: 4000, density: 0.05750575057505751 },
              ],
              percentiles: { p75: 2295 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8819118088191181,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10218978102189781,
                },
                { start: "0.25", density: 0.015898410158984102 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6704999999999991 },
                { start: 100, end: 300, density: 0.24189999999999964 },
                { start: 300, density: 0.08759999999999986 },
              ],
              percentiles: { p75: 136 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7652765276527652 },
                { start: 1800, end: 3000, density: 0.17201720172017196 },
                { start: 3000, density: 0.0627062706270632 },
              ],
              percentiles: { p75: 1756 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963899999999999 },
                { start: 100, end: 300, density: 0.023999999999999973 },
                { start: 300, density: 0.01210000000000012 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1756,
        lcp: 2295,
        cls: "0.01",
        fid: 12,
        er: 136,
      },
      timestamp: 1647719679472,
    },
    {
      url: "https://www.yara.dk/",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8936925229908006 },
                { start: 2500, end: 4000, density: 0.08321671331467383 },
                { start: 4000, density: 0.02309076369452201 },
              ],
              percentiles: { p75: 1841 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8008800880088004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16631663166316624,
                },
                { start: "0.25", density: 0.03280328032803279 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7828085957021512 },
                { start: 100, end: 300, density: 0.1364317841079464 },
                { start: 300, density: 0.0807596201899055 },
              ],
              percentiles: { p75: 95 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8745000000000023 },
                { start: 1800, end: 3000, density: 0.09480000000000025 },
                { start: 3000, density: 0.030700000000000102 },
              ],
              percentiles: { p75: 1380 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9762071378586427 },
                { start: 100, end: 300, density: 0.015095471358592426 },
                { start: 300, density: 0.008697390782765175 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1380,
        lcp: 1841,
        cls: "0.09",
        fid: 9,
        er: 95,
      },
      timestamp: 1647719679522,
    },
    {
      url: "https://www.yara.com.pa/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9086091390860903,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07909209079092082,
                },
                { start: "0.25", density: 0.012298770122987699 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6982207117153161 },
                { start: 100, end: 300, density: 0.22840863654538257 },
                { start: 300, density: 0.07337065173930435 },
              ],
              percentiles: { p75: 135 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6687668766876665 },
                { start: 1800, end: 3000, density: 0.23802380238023724 },
                { start: 3000, density: 0.09320932093209304 },
              ],
              percentiles: { p75: 2157 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7663266326632616 },
                { start: 2500, end: 4000, density: 0.1490649064906481 },
                { start: 4000, density: 0.0846084608460844 },
              ],
              percentiles: { p75: 2645 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2157,
        lcp: 2645,
        cls: "0.01",
        er: 135,
      },
      timestamp: 1647719679574,
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7767999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17789999999999995,
                },
                { start: "0.25", density: 0.04530000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8051779288284695 },
                { start: 100, end: 300, density: 0.13354658136745318 },
                { start: 300, density: 0.061275489804078535 },
              ],
              percentiles: { p75: 72 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9429114177164587 },
                { start: 1800, end: 3000, density: 0.04029194161167775 },
                { start: 3000, density: 0.016796640671865544 },
              ],
              percentiles: { p75: 1064 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9809942982894877 },
                { start: 100, end: 300, density: 0.012203661098329509 },
                { start: 300, density: 0.00680204061218365 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9356692992102384 },
                { start: 2500, end: 4000, density: 0.04823552934119772 },
                { start: 4000, density: 0.016095171448565412 },
              ],
              percentiles: { p75: 1511 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1064,
        lcp: 1511,
        cls: "0.08",
        fid: 10,
        er: 72,
      },
      timestamp: 1647719679624,
    },
    {
      url: "https://www.yara.cl/",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8270172982701723,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11268873112688721,
                },
                { start: "0.25", density: 0.06029397060293967 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6902000000000013 },
                { start: 100, end: 300, density: 0.23000000000000034 },
                { start: 300, density: 0.07980000000000022 },
              ],
              percentiles: { p75: 133 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4697530246975323 },
                { start: 1800, end: 3000, density: 0.3438656134386577 },
                { start: 3000, density: 0.18638136186381676 },
              ],
              percentiles: { p75: 2720 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712942588517705 },
                { start: 100, end: 300, density: 0.023804760952190442 },
                { start: 300, density: 0.0049009801960392145 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6030499999999973 },
                { start: 2500, end: 4000, density: 0.2609499999999989 },
                { start: 4000, density: 0.1360000000000013 },
              ],
              percentiles: { p75: 3148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2720,
        lcp: 3148,
        cls: "0.08",
        fid: 11,
        er: 133,
      },
      timestamp: 1647719679688,
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6567343265673561 },
                { start: 1800, end: 3000, density: 0.21307869213079106 },
                { start: 3000, density: 0.13018698130187423 },
              ],
              percentiles: { p75: 2212 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612116365090407 },
                { start: 100, end: 300, density: 0.02909127261821434 },
                { start: 300, density: 0.00969709087273823 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7277044591081919 },
                { start: 2500, end: 4000, density: 0.17181563687262874 },
                { start: 4000, density: 0.1004799040191987 },
              ],
              percentiles: { p75: 2633 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8163999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11989999999999995,
                },
                { start: "0.25", density: 0.06370000000000003 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6823364672934604 },
                { start: 100, end: 300, density: 0.2189437887577521 },
                { start: 300, density: 0.09871974394879018 },
              ],
              percentiles: { p75: 131 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2212,
        lcp: 2633,
        cls: "0.05",
        fid: 14,
        er: 131,
      },
      timestamp: 1647719679748,
    },
    {
      url: "https://www.yara.hu/",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9771091563374681 },
                { start: 100, end: 300, density: 0.015393842463014841 },
                { start: 300, density: 0.007497001199520214 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8798259651930432 },
                { start: 2500, end: 4000, density: 0.09096819363872821 },
                { start: 4000, density: 0.02920584116823376 },
              ],
              percentiles: { p75: 1982 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8731000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10340000000000003,
                },
                { start: "0.25", density: 0.023500000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7007803121248471 },
                { start: 100, end: 300, density: 0.22829131652660978 },
                { start: 300, density: 0.07092837134853892 },
              ],
              percentiles: { p75: 127 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.845369073814766 },
                { start: 1800, end: 3000, density: 0.12562512502500545 },
                { start: 3000, density: 0.029005801160232044 },
              ],
              percentiles: { p75: 1561 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1561,
        lcp: 1982,
        cls: "0.03",
        fid: 11,
        er: 127,
      },
      timestamp: 1647719679803,
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8657865786578652 },
                { start: 100, end: 300, density: 0.10661066106610656 },
                { start: 300, density: 0.02760276027602762 },
              ],
              percentiles: { p75: 45 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6665666566656665 },
                { start: 1800, end: 3000, density: 0.2259225922592259 },
                { start: 3000, density: 0.10751075107510798 },
              ],
              percentiles: { p75: 2286 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9860986098609862 },
                { start: 100, end: 300, density: 0.013901390139013902 },
                { start: 300 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7457500000000004 },
                { start: 2500, end: 4000, density: 0.16915 },
                { start: 4000, density: 0.08510000000000036 },
              ],
              percentiles: { p75: 2667 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7695 },
                { start: "0.10", end: "0.25", density: 0.1637 },
                { start: "0.25", density: 0.0668 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2286,
        lcp: 2667,
        cls: "0.07",
        fid: 10,
        er: 45,
      },
      timestamp: 1647719679865,
    },
    {
      url: "https://www.yara.fr/",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7192719271927243 },
                { start: 1800, end: 3000, density: 0.16631663166316746 },
                { start: 3000, density: 0.11441144114411535 },
              ],
              percentiles: { p75: 1975 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9513146056183132 },
                { start: 100, end: 300, density: 0.03189043287013892 },
                { start: 300, density: 0.016794961511546563 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7693999999999914 },
                { start: 2500, end: 4000, density: 0.14619999999999847 },
                { start: 4000, density: 0.08440000000000072 },
              ],
              percentiles: { p75: 2432 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8146185381461853,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13418658134186578,
                },
                { start: "0.25", density: 0.051194880511948794 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5458816473410673 },
                { start: 100, end: 300, density: 0.27409036385446006 },
                { start: 300, density: 0.18002798880448007 },
              ],
              percentiles: { p75: 218 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1975,
        lcp: 2432,
        cls: "0.06",
        fid: 12,
        er: 218,
      },
      timestamp: 1647719679923,
    },
    {
      url: "https://www.yara.com.gt/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8563143685631431,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10908909109089084,
                },
                { start: "0.25", density: 0.0345965403459654 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6482999999999972 },
                { start: 100, end: 300, density: 0.20229999999999917 },
                { start: 300, density: 0.14939999999999853 },
              ],
              percentiles: { p75: 171 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6772354470894351 },
                { start: 1800, end: 3000, density: 0.21034206841368808 },
                { start: 3000, density: 0.11242248449690323 },
              ],
              percentiles: { p75: 2092 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652895868760665 },
                { start: 100, end: 300, density: 0.02420726217865369 },
                { start: 300, density: 0.010503150945283604 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7240724072407326 },
                { start: 2500, end: 4000, density: 0.16101610161016292 },
                { start: 4000, density: 0.11491149114911758 },
              ],
              percentiles: { p75: 2675 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2092,
        lcp: 2675,
        cls: "0.03",
        fid: 11,
        er: 171,
      },
      timestamp: 1647719679980,
    },
    {
      url: "https://www.yara.se/",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7794779477947794,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16591659165916592,
                },
                { start: "0.25", density: 0.05460546054605462 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7690307092127631 },
                { start: 100, end: 300, density: 0.15714714414324282 },
                { start: 300, density: 0.07382214664399273 },
              ],
              percentiles: { p75: 96 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.919832067173138 },
                { start: 1800, end: 3000, density: 0.06477409036385498 },
                { start: 3000, density: 0.01539384246301496 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.975809676129547 },
                { start: 100, end: 300, density: 0.015793682526989185 },
                { start: 300, density: 0.008396641343462574 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9210078992100844 },
                { start: 2500, end: 4000, density: 0.06299370062993737 },
                { start: 4000, density: 0.015998400159984074 },
              ],
              percentiles: { p75: 1707 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1256,
        lcp: 1707,
        cls: "0.07",
        fid: 10,
        er: 96,
      },
      timestamp: 1647719680038,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5029994001199735 },
                { start: 100, end: 300, density: 0.2468506298740239 },
                { start: 300, density: 0.2501499700059965 },
              ],
              percentiles: { p75: 305 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4877487748774847 },
                { start: 1800, end: 3000, density: 0.24942494249424782 },
                { start: 3000, density: 0.26282628262825125 },
              ],
              percentiles: { p75: 3173 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9249699879951965 },
                { start: 100, end: 300, density: 0.04731892757102832 },
                { start: 300, density: 0.02771108443377345 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5123524704940932 },
                { start: 2500, end: 4000, density: 0.2434986997399453 },
                { start: 4000, density: 0.24414882976595162 },
              ],
              percentiles: { p75: 4022 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8296 },
                { start: "0.10", end: "0.25", density: 0.1288 },
                { start: "0.25", density: 0.041600000000000005 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3173,
        lcp: 4022,
        cls: "0.05",
        fid: 15,
        er: 305,
      },
      timestamp: 1647719680114,
    },
    {
      url: "https://www.yara.com.co/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610999999999964 },
                { start: 100, end: 300, density: 0.027299999999999897 },
                { start: 300, density: 0.011600000000000072 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6866933466733328 },
                { start: 2500, end: 4000, density: 0.17593796898449127 },
                { start: 4000, density: 0.1373686843421702 },
              ],
              percentiles: { p75: 2932 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7590759075907592,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15611561156115614,
                },
                { start: "0.25", density: 0.08480848084808479 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.640564056405639 },
                { start: 100, end: 300, density: 0.2540254025402534 },
                { start: 300, density: 0.10541054105410493 },
              ],
              percentiles: { p75: 159 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6048209641928322 },
                { start: 1800, end: 3000, density: 0.22584516903380433 },
                { start: 3000, density: 0.16933386677335124 },
              ],
              percentiles: { p75: 2435 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2435,
        lcp: 2932,
        cls: "0.09",
        fid: 13,
        er: 159,
      },
      timestamp: 1647719680183,
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.923692369236921 },
                { start: 100, end: 300, density: 0.05490549054905474 },
                { start: 300, density: 0.021402140214021384 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5123537061118357 },
                { start: 2500, end: 4000, density: 0.3457037111133355 },
                { start: 4000, density: 0.14194258277483301 },
              ],
              percentiles: { p75: 3417 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9545863759127747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03581074322296693,
                },
                { start: "0.25", density: 0.009602880864259289 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5388077615523116 },
                { start: 100, end: 300, density: 0.31926385277055475 },
                { start: 300, density: 0.14192838567713603 },
              ],
              percentiles: { p75: 207 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4324324324324347 },
                { start: 1800, end: 3000, density: 0.41711711711711924 },
                { start: 3000, density: 0.15045045045045127 },
              ],
              percentiles: { p75: 2608 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2608,
        lcp: 3417,
        cls: "0.00",
        fid: 13,
        er: 207,
      },
      timestamp: 1647719680246,
    },
    {
      url: "https://www.yara.com.pe/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7817999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1691999999999999,
                },
                { start: "0.25", density: 0.04899999999999996 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6497649764976495 },
                { start: 100, end: 300, density: 0.25402540254025396 },
                { start: 300, density: 0.09620962096209572 },
              ],
              percentiles: { p75: 156 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5477999999999996 },
                { start: 1800, end: 3000, density: 0.2731999999999997 },
                { start: 3000, density: 0.17899999999999894 },
              ],
              percentiles: { p75: 2590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9694938987797548 },
                { start: 100, end: 300, density: 0.02540508101620321 },
                { start: 300, density: 0.005101020204040799 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6517151715171532 },
                { start: 2500, end: 4000, density: 0.19796979697969844 },
                { start: 4000, density: 0.1503150315031508 },
              ],
              percentiles: { p75: 3068 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2590,
        lcp: 3068,
        cls: "0.07",
        fid: 11,
        er: 156,
      },
      timestamp: 1647719680320,
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7688768876887693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1756175617561757,
                },
                { start: "0.25", density: 0.05550555055505552 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7600479904019195 },
                { start: 100, end: 300, density: 0.1426714657068586 },
                { start: 300, density: 0.09728054389122164 },
              ],
              percentiles: { p75: 102 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6534653465346542 },
                { start: 1800, end: 3000, density: 0.2233223322332236 },
                { start: 3000, density: 0.1232123212321226 },
              ],
              percentiles: { p75: 2229 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648824412206101 },
                { start: 100, end: 300, density: 0.023511755877938963 },
                { start: 300, density: 0.01160580290145072 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622162216221631 },
                { start: 2500, end: 4000, density: 0.20387038703870403 },
                { start: 4000, density: 0.1339133913391355 },
              ],
              percentiles: { p75: 3047 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2229,
        lcp: 3047,
        cls: "0.08",
        fid: 9,
        er: 102,
      },
      timestamp: 1647719680393,
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8026197380261986 },
                { start: 1800, end: 3000, density: 0.12498750124987523 },
                { start: 3000, density: 0.07239276072392886 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665133946421417 },
                { start: 100, end: 300, density: 0.020291883246701288 },
                { start: 300, density: 0.013194722111155473 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8420184036807429 },
                { start: 2500, end: 4000, density: 0.1025705141028214 },
                { start: 4000, density: 0.05541108221644383 },
              ],
              percentiles: { p75: 2036 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8996000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07820000000000002,
                },
                { start: "0.25", density: 0.022200000000000022 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6419358064193587 },
                { start: 100, end: 300, density: 0.25817418258174196 },
                { start: 300, density: 0.09989001099890035 },
              ],
              percentiles: { p75: 147 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2036,
        cls: "0.01",
        fid: 11,
        er: 147,
      },
      timestamp: 1647719680463,
    },
    {
      url: "https://www.yara.ru/",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6949000000000001 },
                { start: 100, end: 300, density: 0.20960000000000004 },
                { start: 300, density: 0.09550000000000022 },
              ],
              percentiles: { p75: 129 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6005600560056031 },
                { start: 1800, end: 3000, density: 0.23752375237523854 },
                { start: 3000, density: 0.16191619161916293 },
              ],
              percentiles: { p75: 2493 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525047495250475 },
                { start: 100, end: 300, density: 0.031996800319968 },
                { start: 300, density: 0.015498450154984503 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6786321367863233 },
                { start: 2500, end: 4000, density: 0.21747825217478317 },
                { start: 4000, density: 0.1038896110388958 },
              ],
              percentiles: { p75: 2868 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8538000000000007,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1270000000000001,
                },
                { start: "0.25", density: 0.019200000000000033 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2493,
        lcp: 2868,
        cls: "0.04",
        fid: 11,
        er: 129,
      },
      timestamp: 1647719680524,
    },
    {
      url: "https://www.yara.kr/",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9792020797920208 },
                { start: 100, end: 300, density: 0.013698630136986304 },
                { start: 300, density: 0.007099290070992899 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8606360636063594 },
                { start: 2500, end: 4000, density: 0.10066006600660059 },
                { start: 4000, density: 0.038703870387038895 },
              ],
              percentiles: { p75: 1979 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8588858885888587,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059205920592059195,
                },
                { start: "0.25", density: 0.0819081908190819 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.918708129187081 },
                { start: 100, end: 300, density: 0.05599440055994397 },
                { start: 300, density: 0.025297470252974782 },
              ],
              percentiles: { p75: 2 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8332166083041558 },
                { start: 1800, end: 3000, density: 0.12706353176588348 },
                { start: 3000, density: 0.03971985992996518 },
              ],
              percentiles: { p75: 1547 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1547,
        lcp: 1979,
        cls: "0.03",
        fid: 8,
        er: 2,
      },
      timestamp: 1647719680593,
    },
    {
      url: "https://www.yara.bo/",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718028197180283 },
                { start: 100, end: 300, density: 0.027197280271972806 },
                { start: 300, density: 0.000999900009999 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46083825147544555 },
                { start: 2500, end: 4000, density: 0.3318995698709633 },
                { start: 4000, density: 0.20726217865360164 },
              ],
              percentiles: { p75: 3793 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9289999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0481 },
                { start: "0.25", density: 0.022900000000000007 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5542999999999986 },
                { start: 100, end: 300, density: 0.30459999999999926 },
                { start: 300, density: 0.14109999999999842 },
              ],
              percentiles: { p75: 194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3534353435343496 },
                { start: 1800, end: 3000, density: 0.3340334033403305 },
                { start: 3000, density: 0.3125312531253066 },
              ],
              percentiles: { p75: 3338 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3338,
        lcp: 3793,
        cls: "0.00",
        fid: 11,
        er: 194,
      },
      timestamp: 1647719680662,
    },
    {
      url: "https://www.yara.com.gh/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9232923292329231,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0489048904890489,
                },
                { start: "0.25", density: 0.027802780278027805 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6058999999999999 },
                { start: 1800, end: 3000, density: 0.1669 },
                { start: 3000, density: 0.22720000000000054 },
              ],
              percentiles: { p75: 2786 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6252125212521249 },
                { start: 2500, end: 4000, density: 0.20037003700370015 },
                { start: 4000, density: 0.174417441744175 },
              ],
              percentiles: { p75: 3212 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2786, lcp: 3212, cls: "0.00" },
      timestamp: 1647719680732,
    },
    {
      url: "http://www.yara.com.mm/",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8704000000000015,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07020000000000012,
                },
                { start: "0.25", density: 0.05940000000000005 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7837216278372164 },
                { start: 100, end: 300, density: 0.10078992100789923 },
                { start: 300, density: 0.11548845115488472 },
              ],
              percentiles: { p75: 62 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.06560656065606561 },
                { start: 1800, end: 3000, density: 0.41494149414941495 },
                { start: 3000, density: 0.5194519451945209 },
              ],
              percentiles: { p75: 4528 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2234446889377893 },
                { start: 2500, end: 4000, density: 0.39337867573515023 },
                { start: 4000, density: 0.38317663532706714 },
              ],
              percentiles: { p75: 5042 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4528, lcp: 5042, cls: "0.05", er: 62 },
      timestamp: 1647719680799,
    },
    {
      url: "https://www.yara.co.za/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7922207779222071,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15428457154284558,
                },
                { start: "0.25", density: 0.05349465053494647 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7819218078192198 },
                { start: 100, end: 300, density: 0.17408259174082627 },
                { start: 300, density: 0.043995600439956394 },
              ],
              percentiles: { p75: 82 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6604000000000033 },
                { start: 1800, end: 3000, density: 0.1960000000000011 },
                { start: 3000, density: 0.14360000000000128 },
              ],
              percentiles: { p75: 2251 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9892000000000002 },
                { start: 100, end: 300, density: 0.0088 },
                { start: 300, density: 0.0020000000000000005 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6860000000000003 },
                { start: 2500, end: 4000, density: 0.1663000000000001 },
                { start: 4000, density: 0.14770000000000036 },
              ],
              percentiles: { p75: 2912 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2251,
        lcp: 2912,
        cls: "0.06",
        fid: 10,
        er: 82,
      },
      timestamp: 1647719680868,
    },
    {
      url: "https://www.yara.com.ar/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678935787157441 },
                { start: 100, end: 300, density: 0.024804960992198463 },
                { start: 300, density: 0.007301460292058433 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5899820035992808 },
                { start: 2500, end: 4000, density: 0.24565086982603493 },
                { start: 4000, density: 0.1643671265746867 },
              ],
              percentiles: { p75: 3344 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8713128687131284,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10348965103489648,
                },
                { start: "0.25", density: 0.025197480251974796 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6433356664333532 },
                { start: 100, end: 300, density: 0.2499750024997486 },
                { start: 300, density: 0.1066893310668922 },
              ],
              percentiles: { p75: 150 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.482344703411032 },
                { start: 1800, end: 3000, density: 0.29628888666600517 },
                { start: 3000, density: 0.2213664099229825 },
              ],
              percentiles: { p75: 2869 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2869,
        lcp: 3344,
        cls: "0.04",
        fid: 11,
        er: 150,
      },
      timestamp: 1647719680944,
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8404840484048404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12731273127312728,
                },
                { start: "0.25", density: 0.032203220322032225 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6305108467459729 },
                { start: 100, end: 300, density: 0.27091872438268383 },
                { start: 300, density: 0.09857042887133725 },
              ],
              percentiles: { p75: 164 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5312000000000063 },
                { start: 1800, end: 3000, density: 0.28870000000000356 },
                { start: 3000, density: 0.18010000000000254 },
              ],
              percentiles: { p75: 2627 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9738973897389753 },
                { start: 100, end: 300, density: 0.019201920192019228 },
                { start: 300, density: 0.006900690069006906 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6320500000000013 },
                { start: 2500, end: 4000, density: 0.23465000000000044 },
                { start: 4000, density: 0.1333000000000017 },
              ],
              percentiles: { p75: 3091 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2627,
        lcp: 3091,
        cls: "0.03",
        fid: 11,
        er: 164,
      },
      timestamp: 1647719681023,
    },
    {
      url: "https://www.yara.ua/",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6626999999999983 },
                { start: 100, end: 300, density: 0.23279999999999942 },
                { start: 300, density: 0.10450000000000055 },
              ],
              percentiles: { p75: 148 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7761552310462112 },
                { start: 1800, end: 3000, density: 0.15623124624925025 },
                { start: 3000, density: 0.06761352270454209 },
              ],
              percentiles: { p75: 1722 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9754852911747081 },
                { start: 100, end: 300, density: 0.014608765259155545 },
                { start: 300, density: 0.009905943566139762 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8233030090972738 },
                { start: 2500, end: 4000, density: 0.11861441567529785 },
                { start: 4000, density: 0.058082575227432064 },
              ],
              percentiles: { p75: 2133 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8158184181581841,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15538446155384464,
                },
                { start: "0.25", density: 0.0287971202879712 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1722,
        lcp: 2133,
        cls: "0.06",
        fid: 11,
        er: 148,
      },
      timestamp: 1647719681099,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7688768876887693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1756175617561757,
                },
                { start: "0.25", density: 0.05550555055505552 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7600479904019195 },
                { start: 100, end: 300, density: 0.1426714657068586 },
                { start: 300, density: 0.09728054389122164 },
              ],
              percentiles: { p75: 102 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6534653465346542 },
                { start: 1800, end: 3000, density: 0.2233223322332236 },
                { start: 3000, density: 0.1232123212321226 },
              ],
              percentiles: { p75: 2229 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648824412206101 },
                { start: 100, end: 300, density: 0.023511755877938963 },
                { start: 300, density: 0.01160580290145072 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622162216221631 },
                { start: 2500, end: 4000, density: 0.20387038703870403 },
                { start: 4000, density: 0.1339133913391355 },
              ],
              percentiles: { p75: 3047 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2229,
        lcp: 3047,
        cls: "0.08",
        fid: 9,
        er: 102,
      },
      timestamp: 1647719681174,
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9317795338601582 },
                { start: 100, end: 300, density: 0.035610683204961496 },
                { start: 300, density: 0.03260978293488059 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6729845969193808 },
                { start: 2500, end: 4000, density: 0.18088617723544625 },
                { start: 4000, density: 0.14612922584517035 },
              ],
              percentiles: { p75: 3034 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.80968096809681 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14531453145314535,
                },
                { start: "0.25", density: 0.045004500450045094 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6711328867113258 },
                { start: 100, end: 300, density: 0.1961803819618029 },
                { start: 300, density: 0.13268673132686673 },
              ],
              percentiles: { p75: 152 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6289628962896295 },
                { start: 1800, end: 3000, density: 0.2093209320932096 },
                { start: 3000, density: 0.16171617161716234 },
              ],
              percentiles: { p75: 2396 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2396,
        lcp: 3034,
        cls: "0.06",
        fid: 13,
        er: 152,
      },
      timestamp: 1647719681253,
    },
    {
      url: "https://www.yara.ro/",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6739347869573931 },
                { start: 100, end: 300, density: 0.23084616923384732 },
                { start: 300, density: 0.0952190438087612 },
              ],
              percentiles: { p75: 134 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8120436130839338 },
                { start: 1800, end: 3000, density: 0.14854456336901226 },
                { start: 3000, density: 0.039411823547064996 },
              ],
              percentiles: { p75: 1642 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966100000000001 },
                { start: 100, end: 300, density: 0.015900000000000015 },
                { start: 300, density: 0.018000000000000002 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.852450000000006 },
                { start: 2500, end: 4000, density: 0.11655000000000083 },
                { start: 4000, density: 0.031000000000000163 },
              ],
              percentiles: { p75: 2050 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8965 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08789999999999999,
                },
                { start: "0.25", density: 0.01560000000000001 },
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
        fcp: 1642,
        lcp: 2050,
        cls: "0.02",
        fid: 11,
        er: 134,
      },
      timestamp: 1647719681332,
    },
  ],
};
