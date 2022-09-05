export const audit17 = {
  date: "2022-04-28T14:53:50.058Z",
  dateParsedLocale: "28/04/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "28/04/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8890743356014893 },
                { start: 2500, end: 4000, density: 0.0865322891256901 },
                { start: 4000, density: 0.024393375272820594 },
              ],
              percentiles: { p75: 1834 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9005602240896359,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06480774127832951,
                },
                { start: "0.25", density: 0.03463203463203464 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8992685743616066 },
                { start: 1800, end: 3000, density: 0.07429744642628001 },
                { start: 3000, density: 0.026433979212113354 },
              ],
              percentiles: { p75: 1288 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586305278174035 },
                { start: 100, end: 300, density: 0.026585397484113604 },
                { start: 300, density: 0.014784074698482749 },
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
        fcp: 1288,
        lcp: 1834,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651157581649,
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
                { start: 0, end: 2500, density: 0.8524999999999998 },
                { start: 2500, end: 4000, density: 0.11409999999999995 },
                { start: 4000, density: 0.03340000000000027 },
              ],
              percentiles: { p75: 2003 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.951995199519952,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0369036903690369,
                },
                { start: "0.25", density: 0.011101110111011088 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8369836983698373 },
                { start: 1800, end: 3000, density: 0.12281228122812286 },
                { start: 3000, density: 0.04020402040203992 },
              ],
              percentiles: { p75: 1568 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718887555022007 },
                { start: 100, end: 300, density: 0.01800720288115246 },
                { start: 300, density: 0.010104041616646674 },
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
        fcp: 1568,
        lcp: 2003,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157582022,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7739452109578084 },
                { start: 1800, end: 3000, density: 0.17876424715056985 },
                { start: 3000, density: 0.047290541891621726 },
              ],
              percentiles: { p75: 1740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9807980798079808 },
                { start: 100, end: 300, density: 0.014001400140014003 },
                { start: 300, density: 0.005200520052005212 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8194180581941813 },
                { start: 2500, end: 4000, density: 0.11198880111988814 },
                { start: 4000, density: 0.06859314068593064 },
              ],
              percentiles: { p75: 2171 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9351 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03760000000000001,
                },
                { start: "0.25", density: 0.027299999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1740, lcp: 2171, cls: "0.01", fid: 9 },
      timestamp: 1651157582203,
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
                  density: 0.9290070992900711,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04449555044495551,
                },
                { start: "0.25", density: 0.0264973502649735 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5830749224767418 },
                { start: 1800, end: 3000, density: 0.24847454236270825 },
                { start: 3000, density: 0.1684505351605499 },
              ],
              percentiles: { p75: 2519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9570914182836566 },
                { start: 100, end: 300, density: 0.02850570114022804 },
                { start: 300, density: 0.014402880576115211 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6693161367726448 },
                { start: 2500, end: 4000, density: 0.19781043791241743 },
                { start: 4000, density: 0.1328734253149379 },
              ],
              percentiles: { p75: 2974 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2519,
        lcp: 2974,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157582371,
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
                  density: 0.932958932958933,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06095706095706095,
                },
                { start: "0.25", density: 0.006084006084006083 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7939415287072908 },
                { start: 1800, end: 3000, density: 0.16144182223787718 },
                { start: 3000, density: 0.04461664905483196 },
              ],
              percentiles: { p75: 1693 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9432657926102505 },
                { start: 100, end: 300, density: 0.025387365911799763 },
                { start: 300, density: 0.03134684147794983 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8166353824495538 },
                { start: 2500, end: 4000, density: 0.13632097606757385 },
                { start: 4000, density: 0.0470436414828724 },
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
        fcp: 1693,
        lcp: 2193,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157582549,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9584958495849585 },
                { start: 100, end: 300, density: 0.029902990299029906 },
                { start: 300, density: 0.01160116011601158 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8397320535892823 },
                { start: 2500, end: 4000, density: 0.10627874425114978 },
                { start: 4000, density: 0.05398920215956802 },
              ],
              percentiles: { p75: 2023 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.948 },
                { start: "0.10", end: "0.25", density: 0.0355 },
                { start: "0.25", density: 0.016500000000000008 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.821971211515394 },
                { start: 1800, end: 3000, density: 0.11345461815273888 },
                { start: 3000, density: 0.06457417033186717 },
              ],
              percentiles: { p75: 1537 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1537,
        lcp: 2023,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157582771,
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
                  density: 0.8049000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1539 },
                { start: "0.25", density: 0.04120000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7312075169932032 },
                { start: 1800, end: 3000, density: 0.19842063174730107 },
                { start: 3000, density: 0.07037185125949572 },
              ],
              percentiles: { p75: 1862 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.96989698969897 },
                { start: 100, end: 300, density: 0.017801780178017805 },
                { start: 300, density: 0.012301230123012253 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.757051410282056 },
                { start: 2500, end: 4000, density: 0.16213242648529694 },
                { start: 4000, density: 0.08081616323264715 },
              ],
              percentiles: { p75: 2465 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1862,
        lcp: 2465,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651157582930,
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
                  density: 0.9773934527486102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.007164916615194564,
                },
                { start: "0.25", density: 0.015441630636195181 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8012422360248446 },
                { start: 1800, end: 3000, density: 0.12621118012422355 },
                { start: 3000, density: 0.07254658385093195 },
              ],
              percentiles: { p75: 1614 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9489250652417051 },
                { start: 100, end: 300, density: 0.036659624704858944 },
                { start: 300, density: 0.014415310053436032 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8318380062305298 },
                { start: 2500, end: 4000, density: 0.11121495327102807 },
                { start: 4000, density: 0.05694704049844207 },
              ],
              percentiles: { p75: 2058 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1614,
        lcp: 2058,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157583077,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9528860724617716,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0272764843642375,
                },
                { start: "0.25", density: 0.019837443173990915 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8019076582803426 },
                { start: 1800, end: 3000, density: 0.1285595797622339 },
                { start: 3000, density: 0.06953276195742364 },
              ],
              percentiles: { p75: 1587 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374138406396471 },
                { start: 100, end: 300, density: 0.0347394540942928 },
                { start: 300, density: 0.02784670526606019 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8284706858407078 },
                { start: 2500, end: 4000, density: 0.11386891592920356 },
                { start: 4000, density: 0.05766039823008853 },
              ],
              percentiles: { p75: 2077 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1587,
        lcp: 2077,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651157583288,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9353411962931759,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04591406908171862,
                },
                { start: "0.25", density: 0.018744734625105296 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8286146531229739 },
                { start: 1800, end: 3000, density: 0.12729630430084288 },
                { start: 3000, density: 0.04408904257618311 },
              ],
              percentiles: { p75: 1567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336668116572423 },
                { start: 100, end: 300, density: 0.03740756850804696 },
                { start: 300, density: 0.02892561983471081 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8712446351931331 },
                { start: 2500, end: 4000, density: 0.09763948497854077 },
                { start: 4000, density: 0.031115879828326136 },
              ],
              percentiles: { p75: 2032 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1567,
        lcp: 2032,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651157583502,
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
                  density: 0.8037196280371962,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1526847315268473,
                },
                { start: "0.25", density: 0.043595640435956415 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9405999999999999 },
                { start: 1800, end: 3000, density: 0.047899999999999984 },
                { start: 3000, density: 0.011500000000000014 },
              ],
              percentiles: { p75: 1132 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9617038296170383 },
                { start: 100, end: 300, density: 0.019198080191980802 },
                { start: 300, density: 0.01909809019098089 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9286142771445712 },
                { start: 2500, end: 4000, density: 0.05758848230353929 },
                { start: 4000, density: 0.013797240551889555 },
              ],
              percentiles: { p75: 1582 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1132,
        lcp: 1582,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651157583710,
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
                { start: "0.00", end: "0.10", density: 0.905 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06280000000000001,
                },
                { start: "0.25", density: 0.0322 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5339932013597276 },
                { start: 1800, end: 3000, density: 0.3028394321135771 },
                { start: 3000, density: 0.1631673665266951 },
              ],
              percentiles: { p75: 2532 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9708941788357671 },
                { start: 100, end: 300, density: 0.022504500900180035 },
                { start: 300, density: 0.0066013202640528255 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6531846815318465 },
                { start: 2500, end: 4000, density: 0.21942805719428038 },
                { start: 4000, density: 0.1273872612738733 },
              ],
              percentiles: { p75: 3030 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2532,
        lcp: 3030,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651157583857,
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
                  density: 0.7820999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1314 },
                { start: "0.25", density: 0.0865000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4941999999999999 },
                { start: 1800, end: 3000, density: 0.28969999999999996 },
                { start: 3000, density: 0.21610000000000018 },
              ],
              percentiles: { p75: 2814 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.933 },
                { start: 100, end: 300, density: 0.0312 },
                { start: 300, density: 0.035799999999999936 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5730573057305721 },
                { start: 2500, end: 4000, density: 0.25882588258825834 },
                { start: 4000, density: 0.16811681168116954 },
              ],
              percentiles: { p75: 3378 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2814,
        lcp: 3378,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1651157584008,
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
                  density: 0.9375485474599969,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03402205996582259,
                },
                { start: "0.25", density: 0.028429392574180534 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39885859226378995 },
                { start: 1800, end: 3000, density: 0.3279961953075442 },
                { start: 3000, density: 0.27314521242866585 },
              ],
              percentiles: { p75: 3183 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9068510570656495 },
                { start: 100, end: 300, density: 0.044190112859640765 },
                { start: 300, density: 0.048958830074709817 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5135668086448961 },
                { start: 2500, end: 4000, density: 0.29397381290424335 },
                { start: 4000, density: 0.19245937845086047 },
              ],
              percentiles: { p75: 3624 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3183,
        lcp: 3624,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651157584171,
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
                  density: 0.9139126886984904,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06106351149190807,
                },
                { start: "0.25", density: 0.0250237998096015 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6904729266620977 },
                { start: 1800, end: 3000, density: 0.1893077450308431 },
                { start: 3000, density: 0.12021932830705918 },
              ],
              percentiles: { p75: 2063 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.928305014504766 },
                { start: 100, end: 300, density: 0.04392871943638625 },
                { start: 300, density: 0.02776626605884776 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.757963089542036 },
                { start: 2500, end: 4000, density: 0.15071770334928214 },
                { start: 4000, density: 0.091319207108682 },
              ],
              percentiles: { p75: 2487 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2063,
        lcp: 2487,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157584402,
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
                  density: 0.8799240151969606,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08228354329134173,
                },
                { start: "0.25", density: 0.037792441511697666 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9083 },
                { start: 1800, end: 3000, density: 0.06649999999999999 },
                { start: 3000, density: 0.025199999999999924 },
              ],
              percentiles: { p75: 1244 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664899469840952 },
                { start: 100, end: 300, density: 0.021106331899569876 },
                { start: 300, density: 0.012403721116334938 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8978 },
                { start: 2500, end: 4000, density: 0.07940000000000003 },
                { start: 4000, density: 0.022800000000000015 },
              ],
              percentiles: { p75: 1786 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1244,
        lcp: 1786,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1651157584607,
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
                  density: 0.9240362811791382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029982363315696647,
                },
                { start: "0.25", density: 0.04598135550516503 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4235368956743003 },
                { start: 1800, end: 3000, density: 0.3035623409669211 },
                { start: 3000, density: 0.27290076335877866 },
              ],
              percentiles: { p75: 3134 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9480484880777941 },
                { start: 100, end: 300, density: 0.04196083655255095 },
                { start: 300, density: 0.009990675369654995 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5358281269922216 },
                { start: 2500, end: 4000, density: 0.2791661354073692 },
                { start: 4000, density: 0.1850057376004092 },
              ],
              percentiles: { p75: 3540 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3134,
        lcp: 3540,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157584745,
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
                  density: 0.943773535904428,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022204908453447605,
                },
                { start: "0.25", density: 0.034021555642124425 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4775923248784344 },
                { start: 1800, end: 3000, density: 0.369562360362729 },
                { start: 3000, density: 0.15284531475883667 },
              ],
              percentiles: { p75: 2606 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9153036642576391 },
                { start: 100, end: 300, density: 0.03638899454799036 },
                { start: 300, density: 0.048307341194370475 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5917580982236159 },
                { start: 2500, end: 4000, density: 0.29695663531870453 },
                { start: 4000, density: 0.11128526645767958 },
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
        fcp: 2606,
        lcp: 3011,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157584958,
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
                  density: 0.9768631271310277,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014369215781782756,
                },
                { start: "0.25", density: 0.008767657087189485 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8264058679706603 },
                { start: 1800, end: 3000, density: 0.13092909535452327 },
                { start: 3000, density: 0.042665036674816505 },
              ],
              percentiles: { p75: 1601 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9666182873730045 },
                { start: 100, end: 300, density: 0.021165940977261734 },
                { start: 300, density: 0.012215771649733935 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8596726917440157 },
                { start: 2500, end: 4000, density: 0.10857352222765025 },
                { start: 4000, density: 0.03175378602833403 },
              ],
              percentiles: { p75: 1983 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1601,
        lcp: 1983,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157585174,
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
                { start: "0.00", end: "0.10", density: 0.9375 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026115618661257608,
                },
                { start: "0.25", density: 0.03638438133874241 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7000764136525723 },
                { start: 1800, end: 3000, density: 0.20529801324503302 },
                { start: 3000, density: 0.09462557310239461 },
              ],
              percentiles: { p75: 1977 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9379168804515138 },
                { start: 100, end: 300, density: 0.03591585428424834 },
                { start: 300, density: 0.02616726526423784 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7648369842078452 },
                { start: 2500, end: 4000, density: 0.1620606214977076 },
                { start: 4000, density: 0.07310239429444718 },
              ],
              percentiles: { p75: 2437 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1977,
        lcp: 2437,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651157585390,
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
                { start: 0, end: 2500, density: 0.6932144566778358 },
                { start: 2500, end: 4000, density: 0.17430588798468152 },
                { start: 4000, density: 0.1324796553374826 },
              ],
              percentiles: { p75: 2798 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9717440341920931,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010803751632434999,
                },
                { start: "0.25", density: 0.017452214175471912 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.549592716818398 },
                { start: 1800, end: 3000, density: 0.27563488260661156 },
                { start: 3000, density: 0.1747724005749903 },
              ],
              percentiles: { p75: 2475 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451677516274413 },
                { start: 100, end: 300, density: 0.04293940911367051 },
                { start: 300, density: 0.011892839258888342 },
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
        fcp: 2475,
        lcp: 2798,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157585614,
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
                  density: 0.8744258989582168,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08871961465217879,
                },
                { start: "0.25", density: 0.03685448638960463 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4015083295812743 },
                { start: 1800, end: 3000, density: 0.2570914002701515 },
                { start: 3000, density: 0.3414002701485744 },
              ],
              percentiles: { p75: 3642 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.889317889317889 },
                { start: 100, end: 300, density: 0.06996606996606994 },
                { start: 300, density: 0.04071604071604109 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4509881422924941 },
                { start: 2500, end: 4000, density: 0.2536984754376082 },
                { start: 4000, density: 0.29531338226989773 },
              ],
              percentiles: { p75: 4463 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3642,
        lcp: 4463,
        cls: "0.02",
        fid: 20,
      },
      timestamp: 1651157585834,
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
                  density: 0.9419942473633749,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022051773729626075,
                },
                { start: "0.25", density: 0.035953978906999036 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5806841532696713 },
                { start: 1800, end: 3000, density: 0.2534751601595546 },
                { start: 3000, density: 0.16584068657077405 },
              ],
              percentiles: { p75: 2468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529309488325882 },
                { start: 100, end: 300, density: 0.03328365623447591 },
                { start: 300, density: 0.01378539493293588 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6872060774146868 },
                { start: 2500, end: 4000, density: 0.1873869528518027 },
                { start: 4000, density: 0.1254069697335105 },
              ],
              percentiles: { p75: 2867 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2468,
        lcp: 2867,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157586056,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.921107889211079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04969503049695031,
                },
                { start: "0.25", density: 0.02919708029197082 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5757272818154541 },
                { start: 1800, end: 3000, density: 0.16305108467459725 },
                { start: 3000, density: 0.2612216335099486 },
              ],
              percentiles: { p75: 2942 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622962296229624 },
                { start: 100, end: 300, density: 0.026302630263026303 },
                { start: 300, density: 0.011401140114011398 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6196859057717311 },
                { start: 2500, end: 4000, density: 0.1784535360608181 },
                { start: 4000, density: 0.2018605581674508 },
              ],
              percentiles: { p75: 3327 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2942,
        lcp: 3327,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157586290,
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
                  density: 0.9510626897660297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03429183782818361,
                },
                { start: "0.25", density: 0.014645472405786748 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.900344890179706 },
                { start: 1800, end: 3000, density: 0.07605736068251952 },
                { start: 3000, density: 0.023597749137774477 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757153614457831 },
                { start: 100, end: 300, density: 0.024284638554216864 },
                { start: 300 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9104693140794224 },
                { start: 2500, end: 4000, density: 0.06173285198555955 },
                { start: 4000, density: 0.02779783393501808 },
              ],
              percentiles: { p75: 1861 },
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
        lcp: 1861,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157586463,
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
                { start: "0.00", end: "0.10", density: 0.8644 },
                { start: "0.10", end: "0.25", density: 0.0786 },
                { start: "0.25", density: 0.057000000000000065 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.735547109421884 },
                { start: 1800, end: 3000, density: 0.18113622724544895 },
                { start: 3000, density: 0.0833166633326671 },
              ],
              percentiles: { p75: 1865 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9489051094890513 },
                { start: 100, end: 300, density: 0.029297070292970708 },
                { start: 300, density: 0.021797820217978055 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7822500000000001 },
                { start: 2500, end: 4000, density: 0.14765 },
                { start: 4000, density: 0.07009999999999983 },
              ],
              percentiles: { p75: 2371 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1865,
        lcp: 2371,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1651157586740,
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
                  density: 0.8806999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06999999999999999,
                },
                { start: "0.25", density: 0.04930000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6033620172103242 },
                { start: 1800, end: 3000, density: 0.23974384630778386 },
                { start: 3000, density: 0.15689413648189188 },
              ],
              percentiles: { p75: 2396 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9580916183236646 },
                { start: 100, end: 300, density: 0.028905781156231245 },
                { start: 300, density: 0.013002600520104062 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6880376075215029 },
                { start: 2500, end: 4000, density: 0.1800360072014399 },
                { start: 4000, density: 0.13192638527705738 },
              ],
              percentiles: { p75: 2884 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2396,
        lcp: 2884,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651157586909,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702 },
                { start: 100, end: 300, density: 0.0231 },
                { start: 300, density: 0.0067000000000000115 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8288842231553678 },
                { start: 2500, end: 4000, density: 0.09843031393721238 },
                { start: 4000, density: 0.0726854629074197 },
              ],
              percentiles: { p75: 2033 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7886 },
                { start: "0.10", end: "0.25", density: 0.1448 },
                { start: "0.25", density: 0.06659999999999994 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.79 },
                { start: 1800, end: 3000, density: 0.1253 },
                { start: 3000, density: 0.08469999999999993 },
              ],
              percentiles: { p75: 1609 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1609,
        lcp: 2033,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651157587068,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7321500000000007 },
                { start: 2500, end: 4000, density: 0.17795000000000025 },
                { start: 4000, density: 0.0898999999999989 },
              ],
              percentiles: { p75: 2727 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7968203179682032,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1475852414758524,
                },
                { start: "0.25", density: 0.05559444055594441 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.717756448710259 },
                { start: 1800, end: 3000, density: 0.19636072785442937 },
                { start: 3000, density: 0.0858828234353116 },
              ],
              percentiles: { p75: 2058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718084574627611 },
                { start: 100, end: 300, density: 0.012296311106668 },
                { start: 300, density: 0.01589523143057083 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2058,
        lcp: 2727,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651157587217,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9628037196280372 },
                { start: 100, end: 300, density: 0.0232976702329767 },
                { start: 300, density: 0.013898610138986108 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7533753375337543 },
                { start: 2500, end: 4000, density: 0.14221422142214232 },
                { start: 4000, density: 0.10441044104410324 },
              ],
              percentiles: { p75: 2539 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.930993099309931,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041404140414041404,
                },
                { start: "0.25", density: 0.02760276027602759 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6878999999999997 },
                { start: 1800, end: 3000, density: 0.19969999999999996 },
                { start: 3000, density: 0.11240000000000033 },
              ],
              percentiles: { p75: 2035 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2035,
        lcp: 2539,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157587375,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9060829359919087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027452680248519,
                },
                { start: "0.25", density: 0.0664643837595723 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5460014673514297 },
                { start: 1800, end: 3000, density: 0.2513573000733671 },
                { start: 3000, density: 0.20264123257520322 },
              ],
              percentiles: { p75: 2651 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8562910869897569 },
                { start: 100, end: 300, density: 0.06008255618406972 },
                { start: 300, density: 0.0836263568261734 },
              ],
              percentiles: { p75: 25 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6152826855123671 },
                { start: 2500, end: 4000, density: 0.20067726737338032 },
                { start: 4000, density: 0.1840400471142526 },
              ],
              percentiles: { p75: 3369 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2651,
        lcp: 3369,
        cls: "0.00",
        fid: 25,
      },
      timestamp: 1651157587525,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8149000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12480000000000001,
                },
                { start: "0.25", density: 0.06030000000000002 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6724689875950383 },
                { start: 1800, end: 3000, density: 0.20178071228491395 },
                { start: 3000, density: 0.12575030012004787 },
              ],
              percentiles: { p75: 2167 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620848339335734 },
                { start: 100, end: 300, density: 0.02541016406562625 },
                { start: 300, density: 0.012505002000800429 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7398760123987603 },
                { start: 2500, end: 4000, density: 0.15833416658334165 },
                { start: 4000, density: 0.10178982101789806 },
              ],
              percentiles: { p75: 2570 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2167,
        lcp: 2570,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651157587751,
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
                  density: 0.9808061420345489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009596928982725527,
                },
                { start: "0.25", density: 0.00959692898272552 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5080298574983029 },
                { start: 1800, end: 3000, density: 0.35885546256503004 },
                { start: 3000, density: 0.1331146799366671 },
              ],
              percentiles: { p75: 2476 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9212867898699519 },
                { start: 100, end: 300, density: 0.05065023956194387 },
                { start: 300, density: 0.02806297056810415 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5842588395285577 },
                { start: 2500, end: 4000, density: 0.3032071622846778 },
                { start: 4000, density: 0.1125339981867645 },
              ],
              percentiles: { p75: 3169 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2476,
        lcp: 3169,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157587908,
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
                  density: 0.7908581716343268,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15503100620124027,
                },
                { start: "0.25", density: 0.054110822164432915 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8832000000000001 },
                { start: 1800, end: 3000, density: 0.09109999999999999 },
                { start: 3000, density: 0.02569999999999997 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591918383676735 },
                { start: 100, end: 300, density: 0.022004400880176033 },
                { start: 300, density: 0.01880376075215057 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8420684136827367 },
                { start: 2500, end: 4000, density: 0.12602520504100823 },
                { start: 4000, density: 0.031906381276255225 },
              ],
              percentiles: { p75: 2072 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1391,
        lcp: 2072,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1651157588150,
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
                { start: "0.00", end: "0.10", density: 0.8995 },
                { start: "0.10", end: "0.25", density: 0.0835 },
                { start: "0.25", density: 0.017000000000000015 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8070385922815432 },
                { start: 1800, end: 3000, density: 0.14897020595880814 },
                { start: 3000, density: 0.04399120175964867 },
              ],
              percentiles: { p75: 1651 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516096780643871 },
                { start: 100, end: 300, density: 0.02129574085182963 },
                { start: 300, density: 0.027094581083783157 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8172499999999996 },
                { start: 2500, end: 4000, density: 0.13454999999999986 },
                { start: 4000, density: 0.04820000000000048 },
              ],
              percentiles: { p75: 2186 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1651,
        lcp: 2186,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1651157588304,
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
                  density: 0.9570446735395189,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016800305460099276,
                },
                { start: "0.25", density: 0.026155021000381834 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6460696128275322 },
                { start: 1800, end: 3000, density: 0.24364489636292527 },
                { start: 3000, density: 0.11028549080954272 },
              ],
              percentiles: { p75: 2346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460512820512822 },
                { start: 100, end: 300, density: 0.02338461538461539 },
                { start: 300, density: 0.030564102564102563 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7089653831194089 },
                { start: 2500, end: 4000, density: 0.19729677168416954 },
                { start: 4000, density: 0.0937378451964216 },
              ],
              percentiles: { p75: 2805 },
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
        lcp: 2805,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157588461,
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
                { start: 0, end: 100, density: 0.9457667972280807 },
                { start: 100, end: 300, density: 0.03931907200964146 },
                { start: 300, density: 0.014914130762277798 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6588827151223908 },
                { start: 2500, end: 4000, density: 0.20941582820243276 },
                { start: 4000, density: 0.1317014566751764 },
              ],
              percentiles: { p75: 2994 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9437184437184438,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026581526581526585,
                },
                { start: "0.25", density: 0.029700029700029686 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5812443370582899 },
                { start: 1800, end: 3000, density: 0.22636665659921446 },
                { start: 3000, density: 0.19238900634249562 },
              ],
              percentiles: { p75: 2654 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2654,
        lcp: 2994,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157588696,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7460746074607459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1211121112111211,
                },
                { start: "0.25", density: 0.13281328132813291 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6273627362736283 },
                { start: 1800, end: 3000, density: 0.1424142414241426 },
                { start: 3000, density: 0.2302230223022292 },
              ],
              percentiles: { p75: 2673 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629825965193038 },
                { start: 2500, end: 4000, density: 0.15068013602720545 },
                { start: 4000, density: 0.18633726745349066 },
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
      extractedResults: { fcp: 2673, lcp: 3165, cls: "0.10" },
      timestamp: 1651157588954,
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
                  density: 0.9667085427135679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017336683417085424,
                },
                { start: "0.25", density: 0.01595477386934673 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6195542046605876 },
                { start: 1800, end: 3000, density: 0.2520263424518744 },
                { start: 3000, density: 0.12841945288753812 },
              ],
              percentiles: { p75: 2187 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9689701897018971 },
                { start: 100, end: 300, density: 0.020867208672086718 },
                { start: 300, density: 0.010162601626016258 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.73913869537682 },
                { start: 2500, end: 4000, density: 0.15408486383787195 },
                { start: 4000, density: 0.10677644078530821 },
              ],
              percentiles: { p75: 2551 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2187,
        lcp: 2551,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157589118,
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
                  density: 0.8788999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0686 },
                { start: "0.25", density: 0.052499999999999984 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.162251324602619 },
                { start: 1800, end: 3000, density: 0.44086773967809606 },
                { start: 3000, density: 0.39688093571928496 },
              ],
              percentiles: { p75: 3959 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.33585075522656793 },
                { start: 2500, end: 4000, density: 0.35615684705411615 },
                { start: 4000, density: 0.3079923977193158 },
              ],
              percentiles: { p75: 4602 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 3959, lcp: 4602, cls: "0.04" },
      timestamp: 1651157589373,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7519248075192481,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2132786721327867,
                },
                { start: "0.25", density: 0.03479652034796524 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8002399520095984 },
                { start: 1800, end: 3000, density: 0.14397120575884828 },
                { start: 3000, density: 0.0557888422315533 },
              ],
              percentiles: { p75: 1637 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554866459937983 },
                { start: 100, end: 300, density: 0.023807142142642786 },
                { start: 300, density: 0.02070621186355897 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8232499999999998 },
                { start: 2500, end: 4000, density: 0.12634999999999996 },
                { start: 4000, density: 0.05040000000000021 },
              ],
              percentiles: { p75: 2154 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1637,
        lcp: 2154,
        cls: "0.09",
        fid: 11,
      },
      timestamp: 1651157589549,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9628216176289548,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014403545488120152,
                },
                { start: "0.25", density: 0.02277483688292501 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5527196134308009 },
                { start: 1800, end: 3000, density: 0.2637839177301446 },
                { start: 3000, density: 0.18349646883905457 },
              ],
              percentiles: { p75: 2618 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481622306717364 },
                { start: 100, end: 300, density: 0.034093789607097594 },
                { start: 300, density: 0.017743979721166026 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6603223806571592 },
                { start: 2500, end: 4000, density: 0.21221326720396733 },
                { start: 4000, density: 0.12746435213887358 },
              ],
              percentiles: { p75: 2975 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2618,
        lcp: 2975,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157589713,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8788999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0686 },
                { start: "0.25", density: 0.052499999999999984 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.162251324602619 },
                { start: 1800, end: 3000, density: 0.44086773967809606 },
                { start: 3000, density: 0.39688093571928496 },
              ],
              percentiles: { p75: 3984 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.33585075522656793 },
                { start: 2500, end: 4000, density: 0.35615684705411615 },
                { start: 4000, density: 0.3079923977193158 },
              ],
              percentiles: { p75: 4635 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 3984, lcp: 4635, cls: "0.03" },
      timestamp: 1651157589949,
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
                  density: 0.8216821682168216,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.144014401440144,
                },
                { start: "0.25", density: 0.03430343034303433 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7434230269080719 },
                { start: 1800, end: 3000, density: 0.1587476242872861 },
                { start: 3000, density: 0.09782934880464196 },
              ],
              percentiles: { p75: 1859 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9749000000000001 },
                { start: 100, end: 300, density: 0.017600000000000005 },
                { start: 300, density: 0.007499999999999992 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7630789236771021 },
                { start: 2500, end: 4000, density: 0.1452935880764227 },
                { start: 4000, density: 0.09162748824647515 },
              ],
              percentiles: { p75: 2448 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1859,
        lcp: 2448,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651157590198,
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
                  density: 0.8582000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07300000000000002,
                },
                { start: "0.25", density: 0.06879999999999989 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5246901239504189 },
                { start: 1800, end: 3000, density: 0.3441623350659732 },
                { start: 3000, density: 0.13114754098360779 },
              ],
              percentiles: { p75: 2505 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9332066793320667 },
                { start: 100, end: 300, density: 0.0286971302869713 },
                { start: 300, density: 0.0380961903809619 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6165383461653839 },
                { start: 2500, end: 4000, density: 0.2790720927907211 },
                { start: 4000, density: 0.10438956104389502 },
              ],
              percentiles: { p75: 2943 },
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
        lcp: 2943,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1651157590368,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7339233923392339 },
                { start: 2500, end: 4000, density: 0.14986498649864982 },
                { start: 4000, density: 0.11621162116211632 },
              ],
              percentiles: { p75: 2648 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9214078592140786,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0627937206279372,
                },
                { start: "0.25", density: 0.015798420157984196 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6608999999999997 },
                { start: 1800, end: 3000, density: 0.22539999999999996 },
                { start: 3000, density: 0.11370000000000047 },
              ],
              percentiles: { p75: 2111 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9770977097709771 },
                { start: 100, end: 300, density: 0.0154015401540154 },
                { start: 300, density: 0.0075007500750075 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2111,
        lcp: 2648,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651157590539,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7460746074607459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1211121112111211,
                },
                { start: "0.25", density: 0.13281328132813291 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6273627362736283 },
                { start: 1800, end: 3000, density: 0.1424142414241426 },
                { start: 3000, density: 0.2302230223022292 },
              ],
              percentiles: { p75: 2673 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629825965193038 },
                { start: 2500, end: 4000, density: 0.15068013602720545 },
                { start: 4000, density: 0.18633726745349066 },
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
      extractedResults: { fcp: 2673, lcp: 3165, cls: "0.10" },
      timestamp: 1651157590707,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636615113793537 },
                { start: 100, end: 300, density: 0.03168615616748398 },
                { start: 300, density: 0.00465233245316233 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5965530255378052 },
                { start: 2500, end: 4000, density: 0.20946030947289027 },
                { start: 4000, density: 0.19398666498930456 },
              ],
              percentiles: { p75: 3525 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9149782473586079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.051211932877563704,
                },
                { start: "0.25", density: 0.03380981976382845 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.534764056224898 },
                { start: 1800, end: 3000, density: 0.21234939759036078 },
                { start: 3000, density: 0.25288654618474127 },
              ],
              percentiles: { p75: 3149 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3149,
        lcp: 3525,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157590867,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7460746074607459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1211121112111211,
                },
                { start: "0.25", density: 0.13281328132813291 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6273627362736283 },
                { start: 1800, end: 3000, density: 0.1424142414241426 },
                { start: 3000, density: 0.2302230223022292 },
              ],
              percentiles: { p75: 2798 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629825965193038 },
                { start: 2500, end: 4000, density: 0.15068013602720545 },
                { start: 4000, density: 0.18633726745349066 },
              ],
              percentiles: { p75: 3246 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2798, lcp: 3246, cls: "0.10" },
      timestamp: 1651157591116,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8035238205633474 },
                { start: 2500, end: 4000, density: 0.13052045902399437 },
                { start: 4000, density: 0.0659557204126581 },
              ],
              percentiles: { p75: 2233 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9532170497863001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02957144507335104,
                },
                { start: "0.25", density: 0.017211505140348856 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7522711390635909 },
                { start: 1800, end: 3000, density: 0.16515257395760527 },
                { start: 3000, density: 0.08257628697880381 },
              ],
              percentiles: { p75: 1820 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.946169524037885 },
                { start: 100, end: 300, density: 0.0340486752187987 },
                { start: 300, density: 0.019781800743316244 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1820,
        lcp: 2233,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157591371,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6921192119211913 },
                { start: 2500, end: 4000, density: 0.17126712671267108 },
                { start: 4000, density: 0.13661366136613765 },
              ],
              percentiles: { p75: 2909 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8882 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06290000000000001,
                },
                { start: "0.25", density: 0.04890000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.617146858743496 },
                { start: 1800, end: 3000, density: 0.21928771508603392 },
                { start: 3000, density: 0.16356542617047007 },
              ],
              percentiles: { p75: 2435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9487 },
                { start: 100, end: 300, density: 0.0319 },
                { start: 300, density: 0.0194000000000001 },
              ],
              percentiles: { p75: 13 },
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
        lcp: 2909,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651157591635,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8361163883611639,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13778622137786217,
                },
                { start: "0.25", density: 0.026097390260973883 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.875912408759124 },
                { start: 1800, end: 3000, density: 0.09409059094090588 },
                { start: 3000, density: 0.02999700029996999 },
              ],
              percentiles: { p75: 1361 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9660966096609661 },
                { start: 100, end: 300, density: 0.0206020602060206 },
                { start: 300, density: 0.013301330133013335 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.89145 },
                { start: 2500, end: 4000, density: 0.08535000000000001 },
                { start: 4000, density: 0.023200000000000047 },
              ],
              percentiles: { p75: 1865 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1361,
        lcp: 1865,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1651157591820,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.921107889211079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04969503049695031,
                },
                { start: "0.25", density: 0.02919708029197082 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5757272818154541 },
                { start: 1800, end: 3000, density: 0.16305108467459725 },
                { start: 3000, density: 0.2612216335099486 },
              ],
              percentiles: { p75: 3153 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622962296229624 },
                { start: 100, end: 300, density: 0.026302630263026303 },
                { start: 300, density: 0.011401140114011398 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6196859057717311 },
                { start: 2500, end: 4000, density: 0.1784535360608181 },
                { start: 4000, density: 0.2018605581674508 },
              ],
              percentiles: { p75: 3535 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3153,
        lcp: 3535,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157592012,
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
                  density: 0.7429999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17399999999999996,
                },
                { start: "0.25", density: 0.08300000000000012 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8909327201839448 },
                { start: 1800, end: 3000, density: 0.08027591722483256 },
                { start: 3000, density: 0.02879136259122272 },
              ],
              percentiles: { p75: 1277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9743897559023609 },
                { start: 100, end: 300, density: 0.011204481792717087 },
                { start: 300, density: 0.01440576230492201 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8785757151430288 },
                { start: 2500, end: 4000, density: 0.08571714342868578 },
                { start: 4000, density: 0.03570714142828554 },
              ],
              percentiles: { p75: 1864 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1277,
        lcp: 1864,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1651157592311,
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
                { start: 0, end: 1800, density: 0.6273627362736283 },
                { start: 1800, end: 3000, density: 0.1424142414241426 },
                { start: 3000, density: 0.2302230223022292 },
              ],
              percentiles: { p75: 2798 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629825965193038 },
                { start: 2500, end: 4000, density: 0.15068013602720545 },
                { start: 4000, density: 0.18633726745349066 },
              ],
              percentiles: { p75: 3246 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7460746074607459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1211121112111211,
                },
                { start: "0.25", density: 0.13281328132813291 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2798, lcp: 3246, cls: "0.10" },
      timestamp: 1651157592504,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8971102889711029,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059194080591940805,
                },
                { start: "0.25", density: 0.04369563043695632 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47899999999999965 },
                { start: 1800, end: 3000, density: 0.2807999999999998 },
                { start: 3000, density: 0.24020000000000064 },
              ],
              percentiles: { p75: 2963 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583875162548765 },
                { start: 100, end: 300, density: 0.03230969290787237 },
                { start: 300, density: 0.009302790837251143 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5743351329734051 },
                { start: 2500, end: 4000, density: 0.25009998000399913 },
                { start: 4000, density: 0.17556488702259562 },
              ],
              percentiles: { p75: 3420 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2963,
        lcp: 3420,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651157592775,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6771536911956392 },
                { start: 2500, end: 4000, density: 0.18088636094323965 },
                { start: 4000, density: 0.14195994786112115 },
              ],
              percentiles: { p75: 2972 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9407407407407407,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02092886537330982,
                },
                { start: "0.25", density: 0.038330393885949464 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5866556252218138 },
                { start: 1800, end: 3000, density: 0.23281675144918917 },
                { start: 3000, density: 0.1805276233289971 },
              ],
              percentiles: { p75: 2558 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9398478077062445 },
                { start: 100, end: 300, density: 0.037444135765189034 },
                { start: 300, density: 0.022708056528566358 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2558,
        lcp: 2972,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157592959,
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
                  density: 0.9707941588317663,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01920384076815363,
                },
                { start: "0.25", density: 0.010002000400080011 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5239191353082462 },
                { start: 1800, end: 3000, density: 0.3462770216172937 },
                { start: 3000, density: 0.12980384307446008 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9248075192480751 },
                { start: 100, end: 300, density: 0.048995100489950996 },
                { start: 300, density: 0.026197380261973945 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5947473736868435 },
                { start: 2500, end: 4000, density: 0.29189594797398705 },
                { start: 4000, density: 0.11335667833916942 },
              ],
              percentiles: { p75: 3151 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 3151,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157593240,
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
                  density: 0.8277827782778279,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10531053105310531,
                },
                { start: "0.25", density: 0.06690669066906688 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8261999999999999 },
                { start: 1800, end: 3000, density: 0.1132 },
                { start: 3000, density: 0.06059999999999998 },
              ],
              percentiles: { p75: 1481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9490101979604076 },
                { start: 100, end: 300, density: 0.027894421115776846 },
                { start: 300, density: 0.02309538092381554 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8370337033703366 },
                { start: 2500, end: 4000, density: 0.10856085608560848 },
                { start: 4000, density: 0.05440544054405488 },
              ],
              percentiles: { p75: 2043 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1481,
        lcp: 2043,
        cls: "0.05",
        fid: 14,
      },
      timestamp: 1651157593425,
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
                { start: 0, end: 2500, density: 0.6426959954878746 },
                { start: 2500, end: 4000, density: 0.1964184997179923 },
                { start: 4000, density: 0.16088550479413302 },
              ],
              percentiles: { p75: 3102 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.94768331710032 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028106303047168497,
                },
                { start: "0.25", density: 0.024210379852511486 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5673959068454469 },
                { start: 1800, end: 3000, density: 0.24742413549752956 },
                { start: 3000, density: 0.18517995765702341 },
              ],
              percentiles: { p75: 2531 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565770862800566 },
                { start: 100, end: 300, density: 0.03946251768033946 },
                { start: 300, density: 0.00396039603960396 },
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
        fcp: 2531,
        lcp: 3102,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157593607,
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
                  density: 0.9289999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03679999999999999,
                },
                { start: "0.25", density: 0.03420000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3443655634436567 },
                { start: 1800, end: 3000, density: 0.33296670332966805 },
                { start: 3000, density: 0.32266773322667536 },
              ],
              percentiles: { p75: 3437 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9645 },
                { start: 100, end: 300, density: 0.029199999999999997 },
                { start: 300, density: 0.006299999999999998 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45434999999999937 },
                { start: 2500, end: 4000, density: 0.3134499999999996 },
                { start: 4000, density: 0.23220000000000116 },
              ],
              percentiles: { p75: 3893 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3437,
        lcp: 3893,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651157593882,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.773699562469616 },
                { start: 1800, end: 3000, density: 0.1628585318424891 },
                { start: 3000, density: 0.0634419056878948 },
              ],
              percentiles: { p75: 1723 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463535228677381 },
                { start: 100, end: 300, density: 0.028800988875154514 },
                { start: 300, density: 0.024845488257107425 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8069373323579617 },
                { start: 2500, end: 4000, density: 0.1379541575225554 },
                { start: 4000, density: 0.055108510119483006 },
              ],
              percentiles: { p75: 2231 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8086165048543689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1754854368932039,
                },
                { start: "0.25", density: 0.01589805825242718 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1723,
        lcp: 2231,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1651157594069,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648035196480352 },
                { start: 100, end: 300, density: 0.0236976302369763 },
                { start: 300, density: 0.011498850114988508 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8476195239047807 },
                { start: 2500, end: 4000, density: 0.12227445489097821 },
                { start: 4000, density: 0.030106021204241083 },
              ],
              percentiles: { p75: 2076 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9366000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055900000000000005,
                },
                { start: "0.25", density: 0.007499999999999998 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8476609356257497 },
                { start: 1800, end: 3000, density: 0.12495001999200318 },
                { start: 3000, density: 0.027389044382246982 },
              ],
              percentiles: { p75: 1519 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1519,
        lcp: 2076,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651157594347,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9558011049723756 },
                { start: 100, end: 300, density: 0.029666106173432617 },
                { start: 300, density: 0.014532788854191826 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8160735468564642 },
                { start: 2500, end: 4000, density: 0.13386714116251475 },
                { start: 4000, density: 0.050059311981021044 },
              ],
              percentiles: { p75: 2173 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8709639266706093,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10136014192785335,
                },
                { start: "0.25", density: 0.02767593140153754 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7807017543859642 },
                { start: 1800, end: 3000, density: 0.15990990990990983 },
                { start: 3000, density: 0.05938833570412598 },
              ],
              percentiles: { p75: 1710 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1710,
        lcp: 2173,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157594534,
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
                  density: 0.7429999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17399999999999996,
                },
                { start: "0.25", density: 0.08300000000000012 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8909327201839448 },
                { start: 1800, end: 3000, density: 0.08027591722483256 },
                { start: 3000, density: 0.02879136259122272 },
              ],
              percentiles: { p75: 1277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9743897559023609 },
                { start: 100, end: 300, density: 0.011204481792717087 },
                { start: 300, density: 0.01440576230492201 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8785757151430288 },
                { start: 2500, end: 4000, density: 0.08571714342868578 },
                { start: 4000, density: 0.03570714142828554 },
              ],
              percentiles: { p75: 1864 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1277,
        lcp: 1864,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1651157594820,
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
                  density: 0.9510647938377889,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01812415043044857,
                },
                { start: "0.25", density: 0.030811055731762575 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.32137552839026606 },
                { start: 1800, end: 3000, density: 0.3407974408774133 },
                { start: 3000, density: 0.3378270307323205 },
              ],
              percentiles: { p75: 3504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9615519868714101 },
                { start: 100, end: 300, density: 0.033173133278630876 },
                { start: 300, density: 0.005274879849958972 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.44280337591240826 },
                { start: 2500, end: 4000, density: 0.33183166058394126 },
                { start: 4000, density: 0.22536496350365046 },
              ],
              percentiles: { p75: 3873 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3504,
        lcp: 3873,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157595029,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8742125787421258,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11028897110288971,
                },
                { start: "0.25", density: 0.015498450154984508 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8784486205517793 },
                { start: 1800, end: 3000, density: 0.09906037584966015 },
                { start: 3000, density: 0.02249100359856061 },
              ],
              percentiles: { p75: 1405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797979797979798 },
                { start: 100, end: 300, density: 0.013201320132013201 },
                { start: 300, density: 0.007000700070006979 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8990000000000001 },
                { start: 2500, end: 4000, density: 0.08310000000000003 },
                { start: 4000, density: 0.01789999999999991 },
              ],
              percentiles: { p75: 1837 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1405,
        lcp: 1837,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651157595333,
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
                { start: 0, end: 1800, density: 0.6872519841269833 },
                { start: 1800, end: 3000, density: 0.23102678571428542 },
                { start: 3000, density: 0.0817212301587314 },
              ],
              percentiles: { p75: 2014 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638600538254518 },
                { start: 100, end: 300, density: 0.022299115724721263 },
                { start: 300, density: 0.01384083044982697 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7244860044587557 },
                { start: 2500, end: 4000, density: 0.18522417636859026 },
                { start: 4000, density: 0.090289819172654 },
              ],
              percentiles: { p75: 2612 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7720924483994562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1853911753800519,
                },
                { start: "0.25", density: 0.04251637622049192 },
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
        fcp: 2014,
        lcp: 2612,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1651157595539,
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
                  density: 0.9318136372725455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03889222155568887,
                },
                { start: "0.25", density: 0.029294141171765643 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8590140985901402 },
                { start: 1800, end: 3000, density: 0.09749025097490242 },
                { start: 3000, density: 0.04349565043495729 },
              ],
              percentiles: { p75: 1411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9531046895310468 },
                { start: 100, end: 300, density: 0.021297870212978697 },
                { start: 300, density: 0.02559744025597454 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.873625274945011 },
                { start: 2500, end: 4000, density: 0.09028194361127778 },
                { start: 4000, density: 0.03609278144371126 },
              ],
              percentiles: { p75: 1848 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1411,
        lcp: 1848,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157595840,
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
                { start: "0.00", end: "0.10", density: 0.9109 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06989999999999999,
                },
                { start: "0.25", density: 0.019199999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7697460507898423 },
                { start: 1800, end: 3000, density: 0.15326934613077386 },
                { start: 3000, density: 0.07698460307938403 },
              ],
              percentiles: { p75: 1763 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954095409540954 },
                { start: 100, end: 300, density: 0.029002900290029 },
                { start: 300, density: 0.01690169016901699 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8077807780778067 },
                { start: 2500, end: 4000, density: 0.12871287128712858 },
                { start: 4000, density: 0.06350635063506464 },
              ],
              percentiles: { p75: 2220 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1763,
        lcp: 2220,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651157596046,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589041095890412 },
                { start: 100, end: 300, density: 0.0207979202079792 },
                { start: 300, density: 0.02029797020297958 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6927999999999997 },
                { start: 2500, end: 4000, density: 0.20219999999999988 },
                { start: 4000, density: 0.10500000000000043 },
              ],
              percentiles: { p75: 2786 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9423942394239423,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0422042204220422,
                },
                { start: "0.25", density: 0.015401540154015405 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6120612061206117 },
                { start: 1800, end: 3000, density: 0.23342334233423329 },
                { start: 3000, density: 0.15451545154515503 },
              ],
              percentiles: { p75: 2430 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2430,
        lcp: 2786,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157596235,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7464164712014602 },
                { start: 2500, end: 4000, density: 0.15207193119624723 },
                { start: 4000, density: 0.1015115976022927 },
              ],
              percentiles: { p75: 2549 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9651117715467115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010724899857862773,
                },
                { start: "0.25", density: 0.024163328595425762 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6443427076520594 },
                { start: 1800, end: 3000, density: 0.22838456507521224 },
                { start: 3000, density: 0.12727272727272854 },
              ],
              percentiles: { p75: 2167 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587530628913694 },
                { start: 100, end: 300, density: 0.02817860059896542 },
                { start: 300, density: 0.01306833650966507 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2167,
        lcp: 2549,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157596428,
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
                { start: "0.00", end: "0.10", density: 0.8639 },
                { start: "0.10", end: "0.25", density: 0.099 },
                { start: "0.25", density: 0.03710000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43957583033213804 },
                { start: 1800, end: 3000, density: 0.24619847939175965 },
                { start: 3000, density: 0.3142256902761023 },
              ],
              percentiles: { p75: 3491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9019607843137253 },
                { start: 100, end: 300, density: 0.06182472989195677 },
                { start: 300, density: 0.03621448579431799 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4806980698069862 },
                { start: 2500, end: 4000, density: 0.2415741574157444 },
                { start: 4000, density: 0.2777277727772695 },
              ],
              percentiles: { p75: 4310 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3491,
        lcp: 4310,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1651157596719,
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
                  density: 0.7968203179682032,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1475852414758524,
                },
                { start: "0.25", density: 0.05559444055594441 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.717756448710259 },
                { start: 1800, end: 3000, density: 0.19636072785442937 },
                { start: 3000, density: 0.0858828234353116 },
              ],
              percentiles: { p75: 2058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718084574627611 },
                { start: 100, end: 300, density: 0.012296311106668 },
                { start: 300, density: 0.01589523143057083 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7321500000000007 },
                { start: 2500, end: 4000, density: 0.17795000000000025 },
                { start: 4000, density: 0.0898999999999989 },
              ],
              percentiles: { p75: 2727 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2058,
        lcp: 2727,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651157596916,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8127944458219682 },
                { start: 2500, end: 4000, density: 0.10860401686089749 },
                { start: 4000, density: 0.07860153731713418 },
              ],
              percentiles: { p75: 2119 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8445155730641388,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10390249907669578,
                },
                { start: "0.25", density: 0.051581927859165384 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7652960118900168 },
                { start: 1800, end: 3000, density: 0.13834530592023772 },
                { start: 3000, density: 0.0963586821897455 },
              ],
              percentiles: { p75: 1744 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9617212588310854 },
                { start: 100, end: 300, density: 0.029672447013487473 },
                { start: 300, density: 0.008606294155427118 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1744,
        lcp: 2119,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651157597127,
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
                  density: 0.8178364327134572,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1275744851029794,
                },
                { start: "0.25", density: 0.05458908218356336 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7313537292541492 },
                { start: 1800, end: 3000, density: 0.1671665666866627 },
                { start: 3000, density: 0.10147970405918817 },
              ],
              percentiles: { p75: 1905 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386 },
                { start: 100, end: 300, density: 0.0358 },
                { start: 300, density: 0.02560000000000012 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.774827482748274 },
                { start: 2500, end: 4000, density: 0.142164216421642 },
                { start: 4000, density: 0.08300830083008393 },
              ],
              percentiles: { p75: 2405 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1905,
        lcp: 2405,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651157597434,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688062387522495 },
                { start: 100, end: 300, density: 0.015696860627874426 },
                { start: 300, density: 0.015496900619876039 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.877562243775622 },
                { start: 2500, end: 4000, density: 0.0903409659034096 },
                { start: 4000, density: 0.03209679032096846 },
              ],
              percentiles: { p75: 1876 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7874787478747874,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1637163716371637,
                },
                { start: "0.25", density: 0.04880488048804883 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8976102389761027 },
                { start: 1800, end: 3000, density: 0.07579242075792421 },
                { start: 3000, density: 0.02659734026597318 },
              ],
              percentiles: { p75: 1281 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1281,
        lcp: 1876,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1651157597637,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4027950310559011 },
                { start: 1800, end: 3000, density: 0.3889751552795036 },
                { start: 3000, density: 0.2082298136645952 },
              ],
              percentiles: { p75: 2809 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698660714285714 },
                { start: 100, end: 300, density: 0.026307397959183677 },
                { start: 300, density: 0.0038265306122449013 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5868857541466439 },
                { start: 2500, end: 4000, density: 0.276236242443032 },
                { start: 4000, density: 0.13687800341032402 },
              ],
              percentiles: { p75: 3152 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9445375590431204,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023312509523083957,
                },
                { start: "0.25", density: 0.032149931433795534 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2809,
        lcp: 3152,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157597845,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6245999999999998 },
                { start: 1800, end: 3000, density: 0.21389999999999995 },
                { start: 3000, density: 0.16150000000000025 },
              ],
              percentiles: { p75: 2354 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9018196360727854 },
                { start: 100, end: 300, density: 0.04139172165566886 },
                { start: 300, density: 0.05678864227154568 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6552810562112414 },
                { start: 2500, end: 4000, density: 0.18568713742748524 },
                { start: 4000, density: 0.15903180636127326 },
              ],
              percentiles: { p75: 3124 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8289828982898291,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10051005100510052,
                },
                { start: "0.25", density: 0.07050705070507056 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2354,
        lcp: 3124,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1651157598156,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9461946194619463,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0356035603560356,
                },
                { start: "0.25", density: 0.018201820182018193 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5806580658065804 },
                { start: 1800, end: 3000, density: 0.2573257325732572 },
                { start: 3000, density: 0.16201620162016242 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502 },
                { start: 100, end: 300, density: 0.03570000000000001 },
                { start: 300, density: 0.014100000000000038 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6865313468653124 },
                { start: 2500, end: 4000, density: 0.1731826817318265 },
                { start: 4000, density: 0.140285971402861 },
              ],
              percentiles: { p75: 2861 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2389,
        lcp: 2861,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157598355,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8146185381461855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11458854114588544,
                },
                { start: "0.25", density: 0.07079292070792916 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5139027805561107 },
                { start: 1800, end: 3000, density: 0.31426285257051395 },
                { start: 3000, density: 0.17183436687337528 },
              ],
              percentiles: { p75: 2591 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803000000000001 },
                { start: 100, end: 300, density: 0.0173 },
                { start: 300, density: 0.002400000000000002 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6315500000000002 },
                { start: 2500, end: 4000, density: 0.22125000000000009 },
                { start: 4000, density: 0.14719999999999978 },
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
        fcp: 2591,
        lcp: 3148,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651157598560,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7089653831194089 },
                { start: 2500, end: 4000, density: 0.19729677168416954 },
                { start: 4000, density: 0.0937378451964216 },
              ],
              percentiles: { p75: 2805 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9570446735395189,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016800305460099276,
                },
                { start: "0.25", density: 0.026155021000381834 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6460696128275322 },
                { start: 1800, end: 3000, density: 0.24364489636292527 },
                { start: 3000, density: 0.11028549080954272 },
              ],
              percentiles: { p75: 2346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460512820512822 },
                { start: 100, end: 300, density: 0.02338461538461539 },
                { start: 300, density: 0.030564102564102563 },
              ],
              percentiles: { p75: 14 },
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
        lcp: 2805,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157598776,
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
                  density: 0.921565247371143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04930184450956732,
                },
                { start: "0.25", density: 0.029132908119289765 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7326026443980515 },
                { start: 1800, end: 3000, density: 0.21294363256784968 },
                { start: 3000, density: 0.054453723034098865 },
              ],
              percentiles: { p75: 1832 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662373145979704 },
                { start: 100, end: 300, density: 0.023614363778298206 },
                { start: 300, density: 0.010148321623731483 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8152726635104331 },
                { start: 2500, end: 4000, density: 0.13089601963878655 },
                { start: 4000, density: 0.053831316850780325 },
              ],
              percentiles: { p75: 2221 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1832,
        lcp: 2221,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157599100,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8815881588158817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09140914091409143,
                },
                { start: "0.25", density: 0.027002700270026988 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7915583116623318 },
                { start: 1800, end: 3000, density: 0.15263052610522093 },
                { start: 3000, density: 0.055811162232447094 },
              ],
              percentiles: { p75: 1672 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089607 },
                { start: 100, end: 300, density: 0.026302630263026292 },
                { start: 300, density: 0.01280128012801291 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8119876024795032 },
                { start: 2500, end: 4000, density: 0.13542291541691656 },
                { start: 4000, density: 0.05258948210358011 },
              ],
              percentiles: { p75: 2196 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1672,
        lcp: 2196,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651157599442,
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
                  density: 0.8457429048414024,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10194769059543683,
                },
                { start: "0.25", density: 0.052309404563160904 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6608520630660852 },
                { start: 1800, end: 3000, density: 0.21100301912110023 },
                { start: 3000, density: 0.12814491781281456 },
              ],
              percentiles: { p75: 2215 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571150097465886 },
                { start: 100, end: 300, density: 0.028781103084508652 },
                { start: 300, density: 0.014103887168902774 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7359060402684564 },
                { start: 2500, end: 4000, density: 0.163758389261745 },
                { start: 4000, density: 0.10033557046979873 },
              ],
              percentiles: { p75: 2588 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2215,
        lcp: 2588,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651157599659,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7855 },
                { start: "0.10", end: "0.25", density: 0.1486 },
                { start: "0.25", density: 0.06590000000000004 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6386999999999998 },
                { start: 1800, end: 3000, density: 0.2569000000000001 },
                { start: 3000, density: 0.10440000000000015 },
              ],
              percentiles: { p75: 2330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9870000000000001 },
                { start: 100, end: 300, density: 0.0103 },
                { start: 300, density: 0.0027 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7341 },
                { start: 2500, end: 4000, density: 0.1912999999999999 },
                { start: 4000, density: 0.0746000000000001 },
              ],
              percentiles: { p75: 2619 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2330, lcp: 2619, cls: "0.08", fid: 9 },
      timestamp: 1651157599973,
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
                  density: 0.9713119673508582,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013923898691633657,
                },
                { start: "0.25", density: 0.014764133957508115 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5719467956469166 },
                { start: 1800, end: 3000, density: 0.2548972188633616 },
                { start: 3000, density: 0.17315598548972191 },
              ],
              percentiles: { p75: 2590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502425674835181 },
                { start: 100, end: 300, density: 0.02450553551436746 },
                { start: 300, density: 0.025251897002114543 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6653376827352901 },
                { start: 2500, end: 4000, density: 0.22339011719221918 },
                { start: 4000, density: 0.1112722000724906 },
              ],
              percentiles: { p75: 2912 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2590,
        lcp: 2912,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157600184,
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
                  density: 0.8277172282771723,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13178682131786823,
                },
                { start: "0.25", density: 0.0404959504049594 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9175082491750828 },
                { start: 1800, end: 3000, density: 0.0658934106589341 },
                { start: 3000, density: 0.01659834016598311 },
              ],
              percentiles: { p75: 1246 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655896769030707 },
                { start: 100, end: 300, density: 0.016404921476442933 },
                { start: 300, density: 0.018005401620486357 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9081459270364819 },
                { start: 2500, end: 4000, density: 0.0698650674662669 },
                { start: 4000, density: 0.021989005497251076 },
              ],
              percentiles: { p75: 1731 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1246,
        lcp: 1731,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651157600499,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453762802434317 },
                { start: 100, end: 300, density: 0.02879620008906041 },
                { start: 300, density: 0.025827519667508004 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8346421692102532 },
                { start: 2500, end: 4000, density: 0.13276040894947402 },
                { start: 4000, density: 0.032597421840272665 },
              ],
              percentiles: { p75: 2115 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8776315789473684,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08698830409356727,
                },
                { start: "0.25", density: 0.03538011695906431 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.865327380952381 },
                { start: 1800, end: 3000, density: 0.10431547619047624 },
                { start: 3000, density: 0.030357142857142725 },
              ],
              percentiles: { p75: 1446 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1446,
        lcp: 2115,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651157600709,
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
                { start: "0.00", end: "0.10", density: 0.9173 },
                { start: "0.10", end: "0.25", density: 0.0461 },
                { start: "0.25", density: 0.03659999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5854999999999986 },
                { start: 1800, end: 3000, density: 0.19289999999999954 },
                { start: 3000, density: 0.22160000000000196 },
              ],
              percentiles: { p75: 2936 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692938587717543 },
                { start: 100, end: 300, density: 0.025205041008201638 },
                { start: 300, density: 0.005501100220044009 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6273872612738718 },
                { start: 2500, end: 4000, density: 0.1893310668933104 },
                { start: 4000, density: 0.18328167183281777 },
              ],
              percentiles: { p75: 3508 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2936,
        lcp: 3508,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651157601024,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634926985397079 },
                { start: 100, end: 300, density: 0.02610522104420884 },
                { start: 300, density: 0.010402080416083235 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6912117576484704 },
                { start: 2500, end: 4000, density: 0.18771245750849827 },
                { start: 4000, density: 0.12107578484303133 },
              ],
              percentiles: { p75: 2922 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8207000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12000000000000001,
                },
                { start: "0.25", density: 0.05929999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6241999999999991 },
                { start: 1800, end: 3000, density: 0.2185999999999997 },
                { start: 3000, density: 0.15720000000000123 },
              ],
              percentiles: { p75: 2396 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2396,
        lcp: 2922,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651157601240,
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
                { start: 0, end: 1800, density: 0.5374551593163115 },
                { start: 1800, end: 3000, density: 0.33994513610466354 },
                { start: 3000, density: 0.12259970457902504 },
              ],
              percentiles: { p75: 2601 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9761634506242907 },
                { start: 100, end: 300, density: 0.017707150964812714 },
                { start: 300, density: 0.00612939841089671 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6547295886406349 },
                { start: 2500, end: 4000, density: 0.2642514094800585 },
                { start: 4000, density: 0.08101900187930668 },
              ],
              percentiles: { p75: 2845 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9607883391500718,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023814411825087242,
                },
                { start: "0.25", density: 0.015397249024840892 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2601,
        lcp: 2845,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651157601453,
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
                  density: 0.9402906900615425,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0254026450176771,
                },
                { start: "0.25", density: 0.03430666492078044 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47228499268908597 },
                { start: 1800, end: 3000, density: 0.336833709956134 },
                { start: 3000, density: 0.1908812973547802 },
              ],
              percentiles: { p75: 2694 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611331599835773 },
                { start: 100, end: 300, density: 0.030244970576159845 },
                { start: 300, density: 0.008621869440262773 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6322013742071877 },
                { start: 2500, end: 4000, density: 0.24174154334038045 },
                { start: 4000, density: 0.1260570824524319 },
              ],
              percentiles: { p75: 3063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2694,
        lcp: 3063,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651157601791,
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
                  density: 0.8382161783821619,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12328767123287672,
                },
                { start: "0.25", density: 0.03849615038496148 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.634499999999999 },
                { start: 1800, end: 3000, density: 0.21189999999999962 },
                { start: 3000, density: 0.15360000000000146 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968003199680032 },
                { start: 100, end: 300, density: 0.0278972102789721 },
                { start: 300, density: 0.0040995900409959 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6728345669133828 },
                { start: 2500, end: 4000, density: 0.17143428685737142 },
                { start: 4000, density: 0.15573114622924578 },
              ],
              percentiles: { p75: 3108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2386,
        lcp: 3108,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1651157602144,
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
                  density: 0.931893189318932,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05370537053705371,
                },
                { start: "0.25", density: 0.014401440144014397 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.913891389138914 },
                { start: 1800, end: 3000, density: 0.07310731073107311 },
                { start: 3000, density: 0.013001300130012963 },
              ],
              percentiles: { p75: 1276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9871012898710129 },
                { start: 100, end: 300, density: 0.012898710128987101 },
                { start: 300 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9210157968406317 },
                { start: 2500, end: 4000, density: 0.0595880823835233 },
                { start: 4000, density: 0.019396120775844843 },
              ],
              percentiles: { p75: 1715 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1276, lcp: 1715, cls: "0.04", fid: 9 },
      timestamp: 1651157602374,
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
                  density: 0.9234580779762682,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04263919676620159,
                },
                { start: "0.25", density: 0.03390272525753032 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8425114453891426 },
                { start: 1800, end: 3000, density: 0.11000654022236743 },
                { start: 3000, density: 0.04748201438848998 },
              ],
              percentiles: { p75: 1481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9399763064367511 },
                { start: 100, end: 300, density: 0.0269843359220745 },
                { start: 300, density: 0.03303935764117429 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8690913865546218 },
                { start: 2500, end: 4000, density: 0.09401260504201679 },
                { start: 4000, density: 0.03689600840336138 },
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
        fcp: 1481,
        lcp: 1869,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157602597,
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
                  density: 0.9295695919508106,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03707844233277436,
                },
                { start: "0.25", density: 0.03335196571641515 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.85493303150349 },
                { start: 1800, end: 3000, density: 0.10658366345972459 },
                { start: 3000, density: 0.038483305036785494 },
              ],
              percentiles: { p75: 1511 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594139774302117 },
                { start: 100, end: 300, density: 0.018016234409027918 },
                { start: 300, density: 0.022569788160760322 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8555827527772547 },
                { start: 2500, end: 4000, density: 0.10035774807004334 },
                { start: 4000, density: 0.04405949915270196 },
              ],
              percentiles: { p75: 2089 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1511,
        lcp: 2089,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157602945,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9493141518902642 },
                { start: 100, end: 300, density: 0.023753763800602203 },
                { start: 300, density: 0.026932084309133648 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9096072703667638 },
                { start: 2500, end: 4000, density: 0.06751054852320673 },
                { start: 4000, density: 0.0228821811100294 },
              ],
              percentiles: { p75: 1754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9359056122448981,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0428890306122449,
                },
                { start: "0.25", density: 0.02120535714285714 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8996258337400358 },
                { start: 1800, end: 3000, density: 0.07955100048804292 },
                { start: 3000, density: 0.02082316577192135 },
              ],
              percentiles: { p75: 1337 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1337,
        lcp: 1754,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157603350,
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
                  density: 0.8995659512900892,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0869303110682421,
                },
                { start: "0.25", density: 0.013503737641668673 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8659556417403951 },
                { start: 1800, end: 3000, density: 0.10919888498363836 },
                { start: 3000, density: 0.024845473275966572 },
              ],
              percentiles: { p75: 1468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9755464987032234 },
                { start: 100, end: 300, density: 0.015808324070643448 },
                { start: 300, density: 0.008645177226133107 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8987610834446739 },
                { start: 2500, end: 4000, density: 0.08289809304020403 },
                { start: 4000, density: 0.01834082351512215 },
              ],
              percentiles: { p75: 1829 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1468,
        lcp: 1829,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651157603719,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8555827527772547 },
                { start: 2500, end: 4000, density: 0.10035774807004334 },
                { start: 4000, density: 0.04405949915270196 },
              ],
              percentiles: { p75: 2089 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9295695919508106,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03707844233277436,
                },
                { start: "0.25", density: 0.03335196571641515 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.85493303150349 },
                { start: 1800, end: 3000, density: 0.10658366345972459 },
                { start: 3000, density: 0.038483305036785494 },
              ],
              percentiles: { p75: 1511 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594139774302117 },
                { start: 100, end: 300, density: 0.018016234409027918 },
                { start: 300, density: 0.022569788160760322 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1511,
        lcp: 2089,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157604069,
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
                  density: 0.962454035223534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020708341397329206,
                },
                { start: "0.25", density: 0.016837623379136833 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8569730586370842 },
                { start: 1800, end: 3000, density: 0.11390649762282093 },
                { start: 3000, density: 0.029120443740094978 },
              ],
              percentiles: { p75: 1484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9433672489921289 },
                { start: 100, end: 300, density: 0.02764446150892685 },
                { start: 300, density: 0.028988289498944154 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8504848604789234 },
                { start: 2500, end: 4000, density: 0.11923609736790024 },
                { start: 4000, density: 0.03027904215317628 },
              ],
              percentiles: { p75: 2076 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1484,
        lcp: 2076,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651157604418,
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
                  density: 0.9381082133125731,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05345789541974829,
                },
                { start: "0.25", density: 0.008433891267678736 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8344189682126109 },
                { start: 1800, end: 3000, density: 0.1416102136529442 },
                { start: 3000, density: 0.023970818134444905 },
              ],
              percentiles: { p75: 1582 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561555941719021 },
                { start: 100, end: 300, density: 0.03061088089827563 },
                { start: 300, density: 0.013233524929822228 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8577856025039122 },
                { start: 2500, end: 4000, density: 0.11756651017214395 },
                { start: 4000, density: 0.024647887323943758 },
              ],
              percentiles: { p75: 2055 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1582,
        lcp: 2055,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157604770,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594174757281555 },
                { start: 100, end: 300, density: 0.029320388349514566 },
                { start: 300, density: 0.011262135922330099 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7092648900017882 },
                { start: 2500, end: 4000, density: 0.1787694509032373 },
                { start: 4000, density: 0.1119656590949745 },
              ],
              percentiles: { p75: 2772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.923822958913772,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04690530770587198,
                },
                { start: "0.25", density: 0.02927173338035619 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6529877609791205 },
                { start: 1800, end: 3000, density: 0.20734341252699753 },
                { start: 3000, density: 0.13966882649388204 },
              ],
              percentiles: { p75: 2275 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2275,
        lcp: 2772,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157605123,
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
                  density: 0.9313082499137039,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0402140144977563,
                },
                { start: "0.25", density: 0.028477735588539877 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9238498149127446 },
                { start: 1800, end: 3000, density: 0.05993301604089545 },
                { start: 3000, density: 0.01621716904635987 },
              ],
              percentiles: { p75: 1261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9409267775026531 },
                { start: 100, end: 300, density: 0.027944817828086308 },
                { start: 300, density: 0.031128404669260656 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9209742421587525 },
                { start: 2500, end: 4000, density: 0.06570877869283337 },
                { start: 4000, density: 0.013316979148414298 },
              ],
              percentiles: { p75: 1629 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1261,
        lcp: 1629,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651157605484,
    },
  ],
};
