export const audit9 = {
  date: "2022-03-31",
  legacyAudit: true,
  legacyAuditType: 2,
  legacyAuditId: "2022-03-31-legacy-audit",
  audits: [
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
                  density: 0.8195180481951803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1423857614238576,
                },
                { start: "0.25", density: 0.03809619038096189 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9279144171165797 },
                { start: 1800, end: 3000, density: 0.058688262347530704 },
                { start: 3000, density: 0.013397320535892949 },
              ],
              percentiles: { p75: 1238 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9716028397160263 },
                { start: 100, end: 300, density: 0.01429857014298567 },
                { start: 300, density: 0.014098590140985903 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9196080391960836 },
                { start: 2500, end: 4000, density: 0.06579342065793442 },
                { start: 4000, density: 0.014598540145985496 },
              ],
              percentiles: { p75: 1690 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1238,
        lcp: 1690,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648741994698,
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604118764370659 },
                { start: 100, end: 300, density: 0.027991602519244135 },
                { start: 300, density: 0.011596521043686955 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7342265773422609 },
                { start: 2500, end: 4000, density: 0.16558344165583327 },
                { start: 4000, density: 0.1001899810019002 },
              ],
              percentiles: { p75: 2596 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8120812081208112,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12351235123512337,
                },
                { start: "0.25", density: 0.06440644064406437 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6640664066406617 },
                { start: 1800, end: 3000, density: 0.20912091209120842 },
                { start: 3000, density: 0.12681268126812778 },
              ],
              percentiles: { p75: 2188 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2188,
        lcp: 2596,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648741994910,
    },
    {
      url: "https://www.yara.com.au/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9796979697969801 },
                { start: 100, end: 300, density: 0.011901190119011903 },
                { start: 300, density: 0.008400840084008413 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6789178917891779 },
                { start: 2500, end: 4000, density: 0.20247024702470226 },
                { start: 4000, density: 0.11861186118611872 },
              ],
              percentiles: { p75: 2939 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7486748674867483,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17301730173017293,
                },
                { start: "0.25", density: 0.0783078307830783 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6121999999999977 },
                { start: 1800, end: 3000, density: 0.23879999999999907 },
                { start: 3000, density: 0.1489999999999986 },
              ],
              percentiles: { p75: 2443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2443, lcp: 2939, cls: "0.10", fid: 9 },
      timestamp: 1648741994954,
    },
    {
      url: "https://www.yara.pl/",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.750724927507249,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20787921207879204,
                },
                { start: "0.25", density: 0.04139586041395858 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7691230876912455 },
                { start: 1800, end: 3000, density: 0.17278272172783057 },
                { start: 3000, density: 0.05809419058094347 },
              ],
              percentiles: { p75: 1748 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.958691738347666 },
                { start: 100, end: 300, density: 0.02370474094818955 },
                { start: 300, density: 0.017603520704140674 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8071614322864564 },
                { start: 2500, end: 4000, density: 0.14272854570914179 },
                { start: 4000, density: 0.05011002200440162 },
              ],
              percentiles: { p75: 2252 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1748,
        lcp: 2252,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1648741995009,
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7523752375237529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16461646164616475,
                },
                { start: "0.25", density: 0.08300830083008315 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788515406162449 },
                { start: 1800, end: 3000, density: 0.08243297318927559 },
                { start: 3000, density: 0.03871548619447793 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704881952781107 },
                { start: 100, end: 300, density: 0.01110444177671068 },
                { start: 300, density: 0.018407362945178134 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8772122787721216 },
                { start: 2500, end: 4000, density: 0.09389061093890595 },
                { start: 4000, density: 0.028897110288971194 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1341,
        lcp: 1962,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648741995057,
    },
    {
      url: "https://www.yara.be/fr-be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7523752375237529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16461646164616475,
                },
                { start: "0.25", density: 0.08300830083008315 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788515406162449 },
                { start: 1800, end: 3000, density: 0.08243297318927559 },
                { start: 3000, density: 0.03871548619447793 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704881952781107 },
                { start: 100, end: 300, density: 0.01110444177671068 },
                { start: 300, density: 0.018407362945178134 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8772122787721216 },
                { start: 2500, end: 4000, density: 0.09389061093890595 },
                { start: 4000, density: 0.028897110288971194 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1341,
        lcp: 1962,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648741995103,
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.855300000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12410000000000014,
                },
                { start: "0.25", density: 0.02060000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8735126487351244 },
                { start: 1800, end: 3000, density: 0.09849015098490127 },
                { start: 3000, density: 0.027997200279971945 },
              ],
              percentiles: { p75: 1421 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802960592118428 },
                { start: 100, end: 300, density: 0.012902580516103228 },
                { start: 300, density: 0.006801360272054425 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.895031490552833 },
                { start: 2500, end: 4000, density: 0.07907627711686484 },
                { start: 4000, density: 0.025892232330300847 },
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
        fcp: 1421,
        lcp: 1829,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648741995152,
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7357207162148645 },
                { start: 2500, end: 4000, density: 0.1754526357907371 },
                { start: 4000, density: 0.08882664799439821 },
              ],
              percentiles: { p75: 2642 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7361263873612636,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.193880611938806,
                },
                { start: "0.25", density: 0.06999300069992993 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6343097070878738 },
                { start: 1800, end: 3000, density: 0.26612016395081484 },
                { start: 3000, density: 0.09957012896131166 },
              ],
              percentiles: { p75: 2294 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9894010598940107 },
                { start: 100, end: 300, density: 0.010598940105989404 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2294,
        lcp: 2642,
        cls: "0.10",
        fid: 11,
      },
      timestamp: 1648741995198,
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9188999999999998,
                },
                { start: "0.10", end: "0.25", density: 0.0715 },
                { start: "0.25", density: 0.009599999999999994 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9468000000000008 },
                { start: 1800, end: 3000, density: 0.04550000000000005 },
                { start: 3000, density: 0.007700000000000009 },
              ],
              percentiles: { p75: 1122 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618038196180381 },
                { start: 100, end: 300, density: 0.032996700329966995 },
                { start: 300, density: 0.005199480051994799 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9420499999999978 },
                { start: 2500, end: 4000, density: 0.04464999999999989 },
                { start: 4000, density: 0.01329999999999994 },
              ],
              percentiles: { p75: 1628 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1122,
        lcp: 1628,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1648741995239,
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
                  density: 0.8718999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07129999999999996,
                },
                { start: "0.25", density: 0.056800000000000024 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.05768846230753801 },
                { start: 1800, end: 3000, density: 0.44771045790841446 },
                { start: 3000, density: 0.49460107978404033 },
              ],
              percentiles: { p75: 4861 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.20423872838148252 },
                { start: 2500, end: 4000, density: 0.4012796161151594 },
                { start: 4000, density: 0.39448165550334147 },
              ],
              percentiles: { p75: 5421 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4861, lcp: 5421, cls: "0.05" },
      timestamp: 1648741995284,
    },
    {
      url: "https://www.yara.fr/",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8218356328734251,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1322735452909418,
                },
                { start: "0.25", density: 0.04589082183563279 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7078876337099037 },
                { start: 1800, end: 3000, density: 0.17334799560132375 },
                { start: 3000, density: 0.11876437068879742 },
              ],
              percentiles: { p75: 2016 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9396241503398586 },
                { start: 100, end: 300, density: 0.036485405837664714 },
                { start: 300, density: 0.02389044382247096 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7603739626037549 },
                { start: 2500, end: 4000, density: 0.1507349265073523 },
                { start: 4000, density: 0.08889111088891452 },
              ],
              percentiles: { p75: 2485 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2016,
        lcp: 2485,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648741995338,
    },
    {
      url: "https://www.yara.hu/",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9222000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058700000000000016,
                },
                { start: "0.25", density: 0.019100000000000006 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8224467340202135 },
                { start: 1800, end: 3000, density: 0.13444033209963108 },
                { start: 3000, density: 0.043112933880163996 },
              ],
              percentiles: { p75: 1596 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9714942988597697 },
                { start: 100, end: 300, density: 0.01940388077615519 },
                { start: 300, density: 0.009101820364072838 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.856300000000004 },
                { start: 2500, end: 4000, density: 0.11220000000000052 },
                { start: 4000, density: 0.03150000000000026 },
              ],
              percentiles: { p75: 2058 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1596,
        lcp: 2058,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648741995383,
    },
    {
      url: "https://www.yara.fi/",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9421884376875341 },
                { start: 100, end: 300, density: 0.030006001200239933 },
                { start: 300, density: 0.02780556111222233 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633000000000001 },
                { start: 2500, end: 4000, density: 0.11000000000000007 },
                { start: 4000, density: 0.026700000000000012 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7826000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1647 },
                { start: "0.25", density: 0.052700000000000004 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8992000000000018 },
                { start: 1800, end: 3000, density: 0.07620000000000014 },
                { start: 3000, density: 0.024600000000000014 },
              ],
              percentiles: { p75: 1301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1301,
        lcp: 1980,
        cls: "0.08",
        fid: 14,
      },
      timestamp: 1648741995431,
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8663732746549316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10102020404080825,
                },
                { start: "0.25", density: 0.03260652130426088 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7298729872987325 },
                { start: 1800, end: 3000, density: 0.16681668166816746 },
                { start: 3000, density: 0.10331033103310404 },
              ],
              percentiles: { p75: 1914 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9782804524071683 },
                { start: 100, end: 300, density: 0.016815133620258264 },
                { start: 300, density: 0.00490441397257531 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7572529011604613 },
                { start: 2500, end: 4000, density: 0.14960984393757443 },
                { start: 4000, density: 0.09313725490196119 },
              ],
              percentiles: { p75: 2469 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1914,
        lcp: 2469,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1648741995487,
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9326202139358233 },
                { start: 1800, end: 3000, density: 0.050184944516645236 },
                { start: 3000, density: 0.017194841547535835 },
              ],
              percentiles: { p75: 1091 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9808038392321535 },
                { start: 100, end: 300, density: 0.01219756048790242 },
                { start: 300, density: 0.006998600279944002 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9296140771845668 },
                { start: 2500, end: 4000, density: 0.0534893021395723 },
                { start: 4000, density: 0.016896620675864834 },
              ],
              percentiles: { p75: 1541 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7635236476352362,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18728127187281263,
                },
                { start: "0.25", density: 0.0491950804919508 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1091,
        lcp: 1541,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648741995555,
    },
    {
      url: "https://www.yara.co.th/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.813118688131187,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15268473152684736,
                },
                { start: "0.25", density: 0.03419658034196581 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7407259274072628 },
                { start: 1800, end: 3000, density: 0.19158084191580935 },
                { start: 3000, density: 0.06769323067693327 },
              ],
              percentiles: { p75: 1826 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706970697069728 },
                { start: 100, end: 300, density: 0.020502050205020547 },
                { start: 300, density: 0.008800880088008807 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7694230576942362 },
                { start: 2500, end: 4000, density: 0.15348465153484767 },
                { start: 4000, density: 0.07709229077092423 },
              ],
              percentiles: { p75: 2407 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1826,
        lcp: 2407,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648741995638,
    },
    {
      url: "https://www.yara.ru/",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5695000000000018 },
                { start: 1800, end: 3000, density: 0.26060000000000083 },
                { start: 3000, density: 0.16990000000000074 },
              ],
              percentiles: { p75: 2611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543999999999968 },
                { start: 100, end: 300, density: 0.0318999999999999 },
                { start: 300, density: 0.01369999999999996 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6635845661735322 },
                { start: 2500, end: 4000, density: 0.22965813674530244 },
                { start: 4000, density: 0.10675729708116795 },
              ],
              percentiles: { p75: 2943 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9061906190619063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07170717071707171,
                },
                { start: "0.25", density: 0.02210221022102209 },
              ],
              percentiles: { p75: "0.03" },
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
        lcp: 2943,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648741995726,
    },
    {
      url: "https://www.yara.ro/",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9118999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07559999999999997,
                },
                { start: "0.25", density: 0.012499999999999987 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8140256102441028 },
                { start: 1800, end: 3000, density: 0.14635854341736784 },
                { start: 3000, density: 0.03961584633853608 },
              ],
              percentiles: { p75: 1625 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9628814407203599 },
                { start: 100, end: 300, density: 0.016608304152076037 },
                { start: 300, density: 0.020510255127563735 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8291329132913292 },
                { start: 2500, end: 4000, density: 0.1324632463246325 },
                { start: 4000, density: 0.038403840384038844 },
              ],
              percentiles: { p75: 2141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1625,
        lcp: 2141,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648741995792,
    },
    {
      url: "https://www.yara.dk/",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8107999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16409999999999988,
                },
                { start: "0.25", density: 0.025099999999999966 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8711742348469691 },
                { start: 1800, end: 3000, density: 0.10032006401280251 },
                { start: 3000, density: 0.02850570114022801 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668966896689702 },
                { start: 100, end: 300, density: 0.016501650165016563 },
                { start: 300, density: 0.016601660166016677 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8919891989198896 },
                { start: 2500, end: 4000, density: 0.08570857085708544 },
                { start: 4000, density: 0.02230223022302226 },
              ],
              percentiles: { p75: 1844 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1382,
        lcp: 1844,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648741995851,
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7905 },
                { start: "0.10", end: "0.25", density: 0.1617 },
                { start: "0.25", density: 0.04779999999999999 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8628137186281422 },
                { start: 1800, end: 3000, density: 0.09579042095790473 },
                { start: 3000, density: 0.04139586041395874 },
              ],
              percentiles: { p75: 1403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619885965789765 },
                { start: 100, end: 300, density: 0.02180654196258884 },
                { start: 300, density: 0.01620486145843756 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593937575030077 },
                { start: 2500, end: 4000, density: 0.09508803521408639 },
                { start: 4000, density: 0.04551820728291344 },
              ],
              percentiles: { p75: 2058 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1403,
        lcp: 2058,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1648741995917,
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
                  density: 0.8494849484948493,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08950895089508949,
                },
                { start: "0.25", density: 0.06100610061006096 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44155584441555784 },
                { start: 1800, end: 3000, density: 0.3565643435656429 },
                { start: 3000, density: 0.2018798120187992 },
              ],
              percentiles: { p75: 2802 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9661 },
                { start: 100, end: 300, density: 0.0275 },
                { start: 300, density: 0.006400000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5821164232846503 },
                { start: 2500, end: 4000, density: 0.2596519303860743 },
                { start: 4000, density: 0.15823164632926373 },
              ],
              percentiles: { p75: 3294 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2802,
        lcp: 3294,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1648741995980,
    },
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
                  density: 0.8168183181681827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11158884111588835,
                },
                { start: "0.25", density: 0.07159284071592839 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7511995201919359 },
                { start: 1800, end: 3000, density: 0.16423430627749175 },
                { start: 3000, density: 0.08456617353058954 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539953995399469 },
                { start: 100, end: 300, density: 0.028502850285028296 },
                { start: 300, density: 0.0175017501750175 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7971797179718008 },
                { start: 2500, end: 4000, density: 0.1364136413641371 },
                { start: 4000, density: 0.0664066406640675 },
              ],
              percentiles: { p75: 2278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1825,
        lcp: 2278,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648741996036,
    },
    {
      url: "https://www.yara.com.ar/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5047504750475114 },
                { start: 1800, end: 3000, density: 0.28802880288029176 },
                { start: 3000, density: 0.20722072207221068 },
              ],
              percentiles: { p75: 2792 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962507498500299 },
                { start: 100, end: 300, density: 0.025994801039792015 },
                { start: 300, density: 0.01149770045990799 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6031206241248265 },
                { start: 2500, end: 4000, density: 0.2414482896579321 },
                { start: 4000, density: 0.15543108621724527 },
              ],
              percentiles: { p75: 3218 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8911891189118913,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08010801080108013,
                },
                { start: "0.25", density: 0.028702870287028726 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2792,
        lcp: 3218,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648741996098,
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
                  density: 0.7335000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17020000000000005,
                },
                { start: "0.25", density: 0.09630000000000005 },
              ],
              percentiles: { p75: "0.11" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46735326467353433 },
                { start: 1800, end: 3000, density: 0.29297070292970806 },
                { start: 3000, density: 0.23967603239676324 },
              ],
              percentiles: { p75: 2960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308484061157244 },
                { start: 100, end: 300, density: 0.03327670630558628 },
                { start: 300, density: 0.03587488757869517 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5484451554844543 },
                { start: 2500, end: 4000, density: 0.27197280271972935 },
                { start: 4000, density: 0.17958204179582268 },
              ],
              percentiles: { p75: 3477 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2960,
        lcp: 3477,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1648741996162,
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
                  density: 0.9222000000000009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052100000000000056,
                },
                { start: "0.25", density: 0.025700000000000032 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6044395560444012 },
                { start: 1800, end: 3000, density: 0.18108189181082052 },
                { start: 3000, density: 0.2144785521447906 },
              ],
              percentiles: { p75: 2703 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6324132413241367 },
                { start: 2500, end: 4000, density: 0.20637063706370784 },
                { start: 4000, density: 0.16121612161216212 },
              ],
              percentiles: { p75: 3166 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2703, lcp: 3166, cls: "0.00" },
      timestamp: 1648741996219,
    },
    {
      url: "https://www.yara.it/",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8727127287271266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07689231076892304,
                },
                { start: "0.25", density: 0.050394960503949565 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8459462161351601 },
                { start: 1800, end: 3000, density: 0.1030690792762172 },
                { start: 3000, density: 0.05098470458862378 },
              ],
              percentiles: { p75: 1446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594081183763268 },
                { start: 100, end: 300, density: 0.022695460907818484 },
                { start: 300, density: 0.01789642071585688 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8642271545690923 },
                { start: 2500, end: 4000, density: 0.09318136372725515 },
                { start: 4000, density: 0.04259148170365969 },
              ],
              percentiles: { p75: 1874 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1446,
        lcp: 1874,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648741996286,
    },
    {
      url: "https://www.yara.ua/",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9631000000000003 },
                { start: 100, end: 300, density: 0.020500000000000008 },
                { start: 300, density: 0.01640000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7894000000000022 },
                { start: 2500, end: 4000, density: 0.1407000000000004 },
                { start: 4000, density: 0.06989999999999974 },
              ],
              percentiles: { p75: 2310 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8756751350270046,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09941988397679526,
                },
                { start: "0.25", density: 0.024904980996199217 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.733166583291647 },
                { start: 1800, end: 3000, density: 0.17778889444722387 },
                { start: 3000, density: 0.08904452226112983 },
              ],
              percentiles: { p75: 1877 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1877,
        lcp: 2310,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648741996356,
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9650034996500363 },
                { start: 100, end: 300, density: 0.027097290270972938 },
                { start: 300, density: 0.00789921007899211 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6390639063906434 },
                { start: 2500, end: 4000, density: 0.22612261226122754 },
                { start: 4000, density: 0.13481348134813662 },
              ],
              percentiles: { p75: 3085 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052905290529056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06670667066706673,
                },
                { start: "0.25", density: 0.028002800280028016 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5399539953995444 },
                { start: 1800, end: 3000, density: 0.28022802280228254 },
                { start: 3000, density: 0.17981798179818348 },
              ],
              percentiles: { p75: 2625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2625,
        lcp: 3085,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648741996415,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 2962 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3382 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
              ],
              percentiles: { p75: "0.18" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2962, lcp: 3382, cls: "0.18" },
      timestamp: 1648741996542,
    },
    {
      url: "https://www.yara.com.co/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8303830383038312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10721072107210732,
                },
                { start: "0.25", density: 0.06240624062406247 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6014804441332421 },
                { start: 1800, end: 3000, density: 0.22406722016605066 },
                { start: 3000, density: 0.1744523357007121 },
              ],
              percentiles: { p75: 2465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522047795220484 },
                { start: 100, end: 300, density: 0.029997000299970027 },
                { start: 300, density: 0.017798220177982146 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6806361272254405 },
                { start: 2500, end: 4000, density: 0.17693538707741424 },
                { start: 4000, density: 0.14242848569713976 },
              ],
              percentiles: { p75: 2972 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2465,
        lcp: 2972,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648741996627,
    },
    {
      url: "https://www.yara.lv/",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8514351435143537 },
                { start: 2500, end: 4000, density: 0.1148614861486152 },
                { start: 4000, density: 0.03370337033703378 },
              ],
              percentiles: { p75: 2108 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9220844168833761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06341268253650725,
                },
                { start: "0.25", density: 0.014502900580116017 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8312831283128305 },
                { start: 1800, end: 3000, density: 0.1253125312531252 },
                { start: 3000, density: 0.043404340434043454 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718028197180283 },
                { start: 100, end: 300, density: 0.024197580241975804 },
                { start: 300, density: 0.003999600039996005 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 2108,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648741996708,
    },
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8657 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09270000000000002,
                },
                { start: "0.25", density: 0.04159999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9160916091609173 },
                { start: 1800, end: 3000, density: 0.06240624062406247 },
                { start: 3000, density: 0.02150215021502163 },
              ],
              percentiles: { p75: 1192 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9361 },
                { start: 100, end: 300, density: 0.031400000000000004 },
                { start: 300, density: 0.03249999999999994 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9051905190519061 },
                { start: 2500, end: 4000, density: 0.06880688068806887 },
                { start: 4000, density: 0.026002600260026213 },
              ],
              percentiles: { p75: 1674 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1192,
        lcp: 1674,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1648741996773,
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
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 2962 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3382 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2962, lcp: 3382, cls: "0.18" },
      timestamp: 1648741996842,
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
                  density: 0.841068213642728,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1138227645529105,
                },
                { start: "0.25", density: 0.04510902180436085 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5482548254825471 },
                { start: 1800, end: 3000, density: 0.28032803280327967 },
                { start: 3000, density: 0.1714171417141713 },
              ],
              percentiles: { p75: 2581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9740974097409723 },
                { start: 100, end: 300, density: 0.021402140214021363 },
                { start: 300, density: 0.00450045004500448 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6534846515348476 },
                { start: 2500, end: 4000, density: 0.20672932706729374 },
                { start: 4000, density: 0.13978602139786173 },
              ],
              percentiles: { p75: 3042 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2581,
        lcp: 3042,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1648741996913,
    },
    {
      url: "https://www.yara.my/",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8190138027605597 },
                { start: 2500, end: 4000, density: 0.10857171434286955 },
                { start: 4000, density: 0.07241448289658073 },
              ],
              percentiles: { p75: 2154 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7953999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13169999999999996,
                },
                { start: "0.25", density: 0.07290000000000003 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7645470905818912 },
                { start: 1800, end: 3000, density: 0.14657068586282895 },
                { start: 3000, density: 0.0888822235552902 },
              ],
              percentiles: { p75: 1764 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977904419116176 },
                { start: 100, end: 300, density: 0.01839632073585281 },
                { start: 300, density: 0.0036992601479703996 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1764,
        lcp: 2154,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648741996985,
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
                  density: 0.9063906390639058,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06360636063606356,
                },
                { start: "0.25", density: 0.03000300030002997 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6692669266926813 },
                { start: 1800, end: 3000, density: 0.21702170217022096 },
                { start: 3000, density: 0.11371137113711628 },
              ],
              percentiles: { p75: 2104 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672999999999985 },
                { start: 100, end: 300, density: 0.023499999999999962 },
                { start: 300, density: 0.009200000000000007 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7269819054283639 },
                { start: 2500, end: 4000, density: 0.1631510546835932 },
                { start: 4000, density: 0.1098670398880315 },
              ],
              percentiles: { p75: 2672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2104,
        lcp: 2672,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648741997065,
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
                  density: 0.8204000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11730000000000006,
                },
                { start: "0.25", density: 0.062300000000000015 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6680663867226584 },
                { start: 1800, end: 3000, density: 0.19446110777844525 },
                { start: 3000, density: 0.13747250549890142 },
              ],
              percentiles: { p75: 2257 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9817018298170184 },
                { start: 100, end: 300, density: 0.015398460153984602 },
                { start: 300, density: 0.0028997100289971 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6923076923076898 },
                { start: 2500, end: 4000, density: 0.16574972491747472 },
                { start: 4000, density: 0.14194258277483165 },
              ],
              percentiles: { p75: 2895 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2257,
        lcp: 2895,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648741997145,
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
                  density: 0.7600760076007607,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17291729172917306,
                },
                { start: "0.25", density: 0.06700670067006696 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.707241448289658 },
                { start: 1800, end: 3000, density: 0.1794358871774355 },
                { start: 3000, density: 0.11332266453290696 },
              ],
              percentiles: { p75: 2072 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691938387677514 },
                { start: 100, end: 300, density: 0.01600320064012799 },
                { start: 300, density: 0.014802960592118391 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170434086817374 },
                { start: 2500, end: 4000, density: 0.16723344668933804 },
                { start: 4000, density: 0.1157231446289254 },
              ],
              percentiles: { p75: 2790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2072,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648741997224,
    },
    {
      url: "https://www.yara.ci/",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9235923592359233,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0423042304230423,
                },
                { start: "0.25", density: 0.034103410341034125 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5273527352735243 },
                { start: 1800, end: 3000, density: 0.21912191219121785 },
                { start: 3000, density: 0.2535253525352528 },
              ],
              percentiles: { p75: 3177 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527047295270445 },
                { start: 100, end: 300, density: 0.035496450354964404 },
                { start: 300, density: 0.01179882011798818 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5848669733946938 },
                { start: 2500, end: 4000, density: 0.19848969793959306 },
                { start: 4000, density: 0.21664332866574368 },
              ],
              percentiles: { p75: 3795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3177,
        lcp: 3795,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648741997297,
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
                  density: 0.9126999999999992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06859999999999994,
                },
                { start: "0.25", density: 0.01869999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6647005898230529 },
                { start: 1800, end: 3000, density: 0.24632610216934922 },
                { start: 3000, density: 0.08897330800759788 },
              ],
              percentiles: { p75: 2115 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7407500000000012 },
                { start: 2500, end: 4000, density: 0.14635000000000026 },
                { start: 4000, density: 0.11290000000000011 },
              ],
              percentiles: { p75: 2689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2115, lcp: 2689, cls: "0.01" },
      timestamp: 1648741997370,
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8935999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09169999999999999,
                },
                { start: "0.25", density: 0.014699999999999993 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7732185748598855 },
                { start: 1800, end: 3000, density: 0.16393114491593228 },
                { start: 3000, density: 0.0628502802241793 },
              ],
              percentiles: { p75: 1729 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620924184836903 },
                { start: 100, end: 300, density: 0.024104820964192676 },
                { start: 300, density: 0.01380276055211041 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.793855698989293 },
                { start: 2500, end: 4000, density: 0.14620234163914747 },
                { start: 4000, density: 0.05994195937156004 },
              ],
              percentiles: { p75: 2285 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1729,
        lcp: 2285,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1648741997442,
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.921592159215918 },
                { start: 100, end: 300, density: 0.03480348034803467 },
                { start: 300, density: 0.04360436043604317 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.663499999999996 },
                { start: 2500, end: 4000, density: 0.19139999999999882 },
                { start: 4000, density: 0.14509999999999948 },
              ],
              percentiles: { p75: 3094 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8324999999999992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1113999999999999,
                },
                { start: "0.25", density: 0.05609999999999994 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.611083324997496 },
                { start: 1800, end: 3000, density: 0.22356707012103505 },
                { start: 3000, density: 0.16534960488146366 },
              ],
              percentiles: { p75: 2434 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2434,
        lcp: 3094,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648741997516,
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7965000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12980000000000003,
                },
                { start: "0.25", density: 0.07369999999999997 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8393678735747226 },
                { start: 1800, end: 3000, density: 0.12212442488497811 },
                { start: 3000, density: 0.03850770154030852 },
              ],
              percentiles: { p75: 1465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591040895910333 },
                { start: 100, end: 300, density: 0.026397360263973393 },
                { start: 300, density: 0.014498550144985314 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8572285542891476 },
                { start: 2500, end: 4000, density: 0.10657868426314802 },
                { start: 4000, density: 0.03619276144771086 },
              ],
              percentiles: { p75: 1967 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1465,
        lcp: 1967,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648741997591,
    },
    {
      url: "https://www.yara.kr/",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7900209979002114 },
                { start: 1800, end: 3000, density: 0.16118388161183914 },
                { start: 3000, density: 0.048795120487951066 },
              ],
              percentiles: { p75: 1669 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9871000000000001 },
                { start: 100, end: 300, density: 0.011200000000000002 },
                { start: 300, density: 0.0017000000000000003 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.827800000000006 },
                { start: 2500, end: 4000, density: 0.11280000000000084 },
                { start: 4000, density: 0.05940000000000016 },
              ],
              percentiles: { p75: 2121 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9121087891210882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06229377062293773,
                },
                { start: "0.25", density: 0.025597440255974418 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1669, lcp: 2121, cls: "0.02", fid: 8 },
      timestamp: 1648741997667,
    },
    {
      url: "https://www.yara.bo/",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9384061593840618,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03569643035696431,
                },
                { start: "0.25", density: 0.0258974102589741 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3639636036396398 },
                { start: 1800, end: 3000, density: 0.33136686331367204 },
                { start: 3000, density: 0.30466953304669875 },
              ],
              percentiles: { p75: 3280 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712028797120289 },
                { start: 100, end: 300, density: 0.0257974202579742 },
                { start: 300, density: 0.0029997000299970002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46984095228568534 },
                { start: 2500, end: 4000, density: 0.326197859357807 },
                { start: 4000, density: 0.20396118835650942 },
              ],
              percentiles: { p75: 3753 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3280,
        lcp: 3753,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648741997745,
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9347000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050300000000000025,
                },
                { start: "0.25", density: 0.015000000000000006 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8253650730146114 },
                { start: 1800, end: 3000, density: 0.11542308461692455 },
                { start: 3000, density: 0.05921184236847471 },
              ],
              percentiles: { p75: 1503 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620227863281995 },
                { start: 100, end: 300, density: 0.02248650809514283 },
                { start: 300, density: 0.015490705576653906 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8493102758896507 },
                { start: 2500, end: 4000, density: 0.10050979608156817 },
                { start: 4000, density: 0.05017992802878927 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1503,
        lcp: 1962,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648741997822,
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
                  density: 0.8529999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09829999999999996,
                },
                { start: "0.25", density: 0.04869999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6075999999999976 },
                { start: 1800, end: 3000, density: 0.231999999999999 },
                { start: 3000, density: 0.16040000000000146 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602159136345544 },
                { start: 100, end: 300, density: 0.02718912435026013 },
                { start: 300, density: 0.012594962015194036 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.691545772886443 },
                { start: 2500, end: 4000, density: 0.1724862431215607 },
                { start: 4000, density: 0.13596798399199733 },
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
        fcp: 2389,
        lcp: 2885,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1648741997904,
    },
    {
      url: "https://www.yara.ie/",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5246950609878017 },
                { start: 1800, end: 3000, density: 0.3272345530893817 },
                { start: 3000, density: 0.14807038592281752 },
              ],
              percentiles: { p75: 2517 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390121975604901 },
                { start: 100, end: 300, density: 0.027694461107778515 },
                { start: 300, density: 0.03329334133173377 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5985697139427836 },
                { start: 2500, end: 4000, density: 0.2850070014002776 },
                { start: 4000, density: 0.11642328465693029 },
              ],
              percentiles: { p75: 3129 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8199000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12000000000000006,
                },
                { start: "0.25", density: 0.06009999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2517,
        lcp: 3129,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648741997985,
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9200159968006478 },
                { start: 100, end: 300, density: 0.05738852229554137 },
                { start: 300, density: 0.02259548090381943 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5092518503700777 },
                { start: 2500, end: 4000, density: 0.34721944388878 },
                { start: 4000, density: 0.14352870574114904 },
              ],
              percentiles: { p75: 3399 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9716000000000011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021200000000000024,
                },
                { start: "0.25", density: 0.007199999999999996 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42857142857142877 },
                { start: 1800, end: 3000, density: 0.4182673069227693 },
                { start: 3000, density: 0.1531612645058029 },
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
        lcp: 3399,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648741998067,
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170434086817374 },
                { start: 2500, end: 4000, density: 0.16723344668933804 },
                { start: 4000, density: 0.1157231446289254 },
              ],
              percentiles: { p75: 2790 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7600760076007607,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17291729172917306,
                },
                { start: "0.25", density: 0.06700670067006696 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.707241448289658 },
                { start: 1800, end: 3000, density: 0.1794358871774355 },
                { start: 3000, density: 0.11332266453290696 },
              ],
              percentiles: { p75: 2072 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691938387677514 },
                { start: 100, end: 300, density: 0.01600320064012799 },
                { start: 300, density: 0.014802960592118391 },
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
        fcp: 2072,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648741998152,
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9114911491149109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06340634063406336,
                },
                { start: "0.25", density: 0.025102510251025084 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6102169349195206 },
                { start: 1800, end: 3000, density: 0.2485254423672883 },
                { start: 3000, density: 0.14125762271318792 },
              ],
              percentiles: { p75: 2312 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9500000000000028 },
                { start: 100, end: 300, density: 0.03900000000000011 },
                { start: 300, density: 0.011000000000000012 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6939306069393107 },
                { start: 2500, end: 4000, density: 0.17678232176782446 },
                { start: 4000, density: 0.12928707129287317 },
              ],
              percentiles: { p75: 2898 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2312,
        lcp: 2898,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648741998238,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49164415090562935 },
                { start: 1800, end: 3000, density: 0.24727309116381235 },
                { start: 3000, density: 0.26108275793053615 },
              ],
              percentiles: { p75: 3166 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.915157578789392 },
                { start: 100, end: 300, density: 0.0537268634317157 },
                { start: 300, density: 0.03111555777888937 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5081499999999972 },
                { start: 2500, end: 4000, density: 0.24264999999999864 },
                { start: 4000, density: 0.2492000000000003 },
              ],
              percentiles: { p75: 4078 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8277827782778281,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12761276127612767,
                },
                { start: "0.25", density: 0.04460446044604462 },
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
        fcp: 3166,
        lcp: 4078,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1648741998325,
    },
  ],
};
