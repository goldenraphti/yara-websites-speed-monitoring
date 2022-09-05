export const audit6 = {
  date: "2022-03-22",
  legacyAudit: true,
  legacyAuditType: 2,
  legacyAuditId: "2022-03-22-legacy-audit",
  audits: [
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8869 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08529999999999999,
                },
                { start: "0.25", density: 0.027800000000000016 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5277527752775265 },
                { start: 100, end: 300, density: 0.2377237723772371 },
                { start: 300, density: 0.23452345234523314 },
              ],
              percentiles: { p75: 271 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.908209179082095 },
                { start: 1800, end: 3000, density: 0.07469253074692556 },
                { start: 3000, density: 0.017098290170982966 },
              ],
              percentiles: { p75: 1213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9035096490350972 },
                { start: 100, end: 300, density: 0.03949605039496054 },
                { start: 300, density: 0.05699430056994317 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.899530140957716 },
                { start: 2500, end: 4000, density: 0.0770768769369192 },
                { start: 4000, density: 0.023392982105368606 },
              ],
              percentiles: { p75: 1724 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1213,
        lcp: 1724,
        cls: "0.03",
        fid: 15,
        er: 271,
      },
      timestamp: 1647963806066,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6954000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16330000000000003,
                },
                { start: "0.25", density: 0.14130000000000004 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6111388861113872 },
                { start: 1800, end: 3000, density: 0.14128587141285837 },
                { start: 3000, density: 0.2475752424757521 },
              ],
              percentiles: { p75: 2897 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6336000000000036 },
                { start: 2500, end: 4000, density: 0.165900000000001 },
                { start: 4000, density: 0.2005000000000009 },
              ],
              percentiles: { p75: 3408 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2897, lcp: 3408, cls: "0.18" },
      timestamp: 1647963806242,
    },
    {
      url: "https://www.yara.cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6111388861113872 },
                { start: 1800, end: 3000, density: 0.14128587141285837 },
                { start: 3000, density: 0.2475752424757521 },
              ],
              percentiles: { p75: 2897 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6336000000000036 },
                { start: 2500, end: 4000, density: 0.165900000000001 },
                { start: 4000, density: 0.2005000000000009 },
              ],
              percentiles: { p75: 3408 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6954000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16330000000000003,
                },
                { start: "0.25", density: 0.14130000000000004 },
              ],
              percentiles: { p75: "0.18" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2897, lcp: 3408, cls: "0.18" },
      timestamp: 1647963806271,
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8351824087956068 },
                { start: 1800, end: 3000, density: 0.12273863068465835 },
                { start: 3000, density: 0.04207896051974018 },
              ],
              percentiles: { p75: 1481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644999999999961 },
                { start: 100, end: 300, density: 0.023799999999999908 },
                { start: 300, density: 0.011699999999999895 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8576284743051462 },
                { start: 2500, end: 4000, density: 0.10497900419916104 },
                { start: 4000, density: 0.03739252149570154 },
              ],
              percentiles: { p75: 1974 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7545000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15840000000000007,
                },
                { start: "0.25", density: 0.08710000000000016 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6036811043313 },
                { start: 100, end: 300, density: 0.2617785335600683 },
                { start: 300, density: 0.13454036210863282 },
              ],
              percentiles: { p75: 185 },
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
        lcp: 1974,
        cls: "0.09",
        fid: 13,
        er: 185,
      },
      timestamp: 1647963806305,
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7841000000000009 },
                { start: 100, end: 300, density: 0.15030000000000018 },
                { start: 300, density: 0.06559999999999994 },
              ],
              percentiles: { p75: 88 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9529952995299532 },
                { start: 1800, end: 3000, density: 0.04220422042204221 },
                { start: 3000, density: 0.004800480048004803 },
              ],
              percentiles: { p75: 1083 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9771000000000001 },
                { start: 100, end: 300, density: 0.0205 },
                { start: 300, density: 0.0024 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9493949394939506 },
                { start: 2500, end: 4000, density: 0.04300430043004309 },
                { start: 4000, density: 0.007600760076007594 },
              ],
              percentiles: { p75: 1565 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9066906690669065,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0809080908090809,
                },
                { start: "0.25", density: 0.012401240124012404 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1083,
        lcp: 1565,
        cls: "0.04",
        fid: 10,
        er: 88,
      },
      timestamp: 1647963806335,
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
                  density: 0.7422000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17480000000000007,
                },
                { start: "0.25", density: 0.08299999999999993 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7421226367910359 },
                { start: 100, end: 300, density: 0.1616484945483642 },
                { start: 300, density: 0.0962288686605978 },
              ],
              percentiles: { p75: 112 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8887999999999965 },
                { start: 1800, end: 3000, density: 0.08049999999999968 },
                { start: 3000, density: 0.03069999999999984 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687062587482499 },
                { start: 100, end: 300, density: 0.011097780443911213 },
                { start: 300, density: 0.020195960807838486 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8864386438643892 },
                { start: 2500, end: 4000, density: 0.09175917591759206 },
                { start: 4000, density: 0.02180218021802183 },
              ],
              percentiles: { p75: 1884 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1884,
        cls: "0.10",
        fid: 9,
        er: 112,
      },
      timestamp: 1647963806380,
    },
    {
      url: "https://www.yara.hu/",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8783635090527174 },
                { start: 2500, end: 4000, density: 0.09442832849854972 },
                { start: 4000, density: 0.02720816244873459 },
              ],
              percentiles: { p75: 1984 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8831999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09549999999999996,
                },
                { start: "0.25", density: 0.021299999999999982 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7067173130747646 },
                { start: 100, end: 300, density: 0.2222111155537767 },
                { start: 300, density: 0.07107157137145019 },
              ],
              percentiles: { p75: 125 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8475390156062451 },
                { start: 1800, end: 3000, density: 0.12224889955982426 },
                { start: 3000, density: 0.030212084833933575 },
              ],
              percentiles: { p75: 1564 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9738104758096767 },
                { start: 100, end: 300, density: 0.018592562974810087 },
                { start: 300, density: 0.007596961215513817 },
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
        fcp: 1564,
        lcp: 1984,
        cls: "0.03",
        fid: 11,
        er: 125,
      },
      timestamp: 1647963806412,
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.902540254025405 },
                { start: 2500, end: 4000, density: 0.07795779577957815 },
                { start: 4000, density: 0.019501950195019567 },
              ],
              percentiles: { p75: 1816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8436000000000008,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1306000000000001,
                },
                { start: "0.25", density: 0.025800000000000014 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7343734373437348 },
                { start: 100, end: 300, density: 0.20222022202220236 },
                { start: 300, density: 0.06340634063406356 },
              ],
              percentiles: { p75: 109 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8933213357328542 },
                { start: 1800, end: 3000, density: 0.08668266346730662 },
                { start: 3000, density: 0.01999600079984012 },
              ],
              percentiles: { p75: 1386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9809961992398478 },
                { start: 100, end: 300, density: 0.016203240648129624 },
                { start: 300, density: 0.002800560112022411 },
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
        fcp: 1386,
        lcp: 1816,
        cls: "0.05",
        fid: 12,
        er: 109,
      },
      timestamp: 1647963806460,
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7563769130739151 },
                { start: 2500, end: 4000, density: 0.14999499849954842 },
                { start: 4000, density: 0.09362808842652832 },
              ],
              percentiles: { p75: 2487 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8691000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09900000000000003,
                },
                { start: "0.25", density: 0.03190000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.822275592915037 },
                { start: 100, end: 300, density: 0.11948363854698239 },
                { start: 300, density: 0.05824076853797655 },
              ],
              percentiles: { p75: 64 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7233446689337907 },
                { start: 1800, end: 3000, density: 0.16883376675335154 },
                { start: 3000, density: 0.10782156431286367 },
              ],
              percentiles: { p75: 1942 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978574289146978 },
                { start: 100, end: 300, density: 0.016820184221065307 },
                { start: 300, density: 0.0046055266319583454 },
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
        fcp: 1942,
        lcp: 2487,
        cls: "0.05",
        fid: 11,
        er: 64,
      },
      timestamp: 1647963806500,
    },
    {
      url: "https://www.yara.es/",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561780890445176 },
                { start: 100, end: 300, density: 0.026613306653326535 },
                { start: 300, density: 0.017208604302150914 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8017792882847059 },
                { start: 2500, end: 4000, density: 0.13254698120752026 },
                { start: 4000, density: 0.06567373050779904 },
              ],
              percentiles: { p75: 2258 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7656000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1479000000000001,
                },
                { start: "0.25", density: 0.08650000000000008 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5058494150584925 },
                { start: 100, end: 300, density: 0.31016898310168894 },
                { start: 300, density: 0.18398160183981604 },
              ],
              percentiles: { p75: 229 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.74992500749925 },
                { start: 1800, end: 3000, density: 0.16588341165883405 },
                { start: 3000, density: 0.08419158084191686 },
              ],
              percentiles: { p75: 1820 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1820,
        lcp: 2258,
        cls: "0.08",
        fid: 13,
        er: 229,
      },
      timestamp: 1647963806536,
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8112566230130959 },
                { start: 100, end: 300, density: 0.1258622413276017 },
                { start: 300, density: 0.0628811356593021 },
              ],
              percentiles: { p75: 70 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9421057894210602 },
                { start: 1800, end: 3000, density: 0.040895910408959193 },
                { start: 3000, density: 0.01699830016998292 },
              ],
              percentiles: { p75: 1046 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812075169931994 },
                { start: 100, end: 300, density: 0.01159536185525786 },
                { start: 300, density: 0.0071971211515393495 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9368000000000035 },
                { start: 2500, end: 4000, density: 0.048100000000000205 },
                { start: 4000, density: 0.015099999999999987 },
              ],
              percentiles: { p75: 1503 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7765776577657767,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17591759175917596,
                },
                { start: "0.25", density: 0.04750475047504752 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1046,
        lcp: 1503,
        cls: "0.08",
        fid: 10,
        er: 70,
      },
      timestamp: 1647963806582,
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
                  density: 0.7676767676767677,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17421742174217425,
                },
                { start: "0.25", density: 0.05810581058105813 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5288528852885298 },
                { start: 100, end: 300, density: 0.2917291729172923 },
                { start: 300, density: 0.1794179417941779 },
              ],
              percentiles: { p75: 230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.895220955808844 },
                { start: 1800, end: 3000, density: 0.08008398320335983 },
                { start: 3000, density: 0.02469506098780274 },
              ],
              percentiles: { p75: 1308 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469893978795735 },
                { start: 100, end: 300, density: 0.02890578115623117 },
                { start: 300, density: 0.024104820964192704 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8701000000000008 },
                { start: 2500, end: 4000, density: 0.10390000000000016 },
                { start: 4000, density: 0.026000000000000183 },
              ],
              percentiles: { p75: 1944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1308,
        lcp: 1944,
        cls: "0.08",
        fid: 14,
        er: 230,
      },
      timestamp: 1647963806624,
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6695999999999966 },
                { start: 2500, end: 4000, density: 0.19789999999999894 },
                { start: 4000, density: 0.13249999999999967 },
              ],
              percentiles: { p75: 3022 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7635999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17289999999999997,
                },
                { start: "0.25", density: 0.06349999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7605521104220845 },
                { start: 100, end: 300, density: 0.1459291858371675 },
                { start: 300, density: 0.09351870374074878 },
              ],
              percentiles: { p75: 102 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6608000000000086 },
                { start: 1800, end: 3000, density: 0.21810000000000282 },
                { start: 3000, density: 0.12110000000000098 },
              ],
              percentiles: { p75: 2227 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638927785557106 },
                { start: 100, end: 300, density: 0.025105021004200825 },
                { start: 300, density: 0.011002200440088011 },
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
        fcp: 2227,
        lcp: 3022,
        cls: "0.08",
        fid: 10,
        er: 102,
      },
      timestamp: 1647963806666,
    },
    {
      url: "https://www.yara.se/",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9770931279383781 },
                { start: 100, end: 300, density: 0.014004201260378065 },
                { start: 300, density: 0.00890267080124038 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9204181672669121 },
                { start: 2500, end: 4000, density: 0.0636754701880756 },
                { start: 4000, density: 0.015906362545018028 },
              ],
              percentiles: { p75: 1721 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.794620537946205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15678432156784314,
                },
                { start: "0.25", density: 0.04859514048595141 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7675232476752298 },
                { start: 100, end: 300, density: 0.15928407159284017 },
                { start: 300, density: 0.07319268073192593 },
              ],
              percentiles: { p75: 103 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9186756026808052 },
                { start: 1800, end: 3000, density: 0.066219865959788 },
                { start: 3000, density: 0.015104531359407897 },
              ],
              percentiles: { p75: 1264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1264,
        lcp: 1721,
        cls: "0.06",
        fid: 10,
        er: 103,
      },
      timestamp: 1647963806721,
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
                  density: 0.8002000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12580000000000005,
                },
                { start: "0.25", density: 0.07400000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8033000000000016 },
                { start: 100, end: 300, density: 0.14540000000000028 },
                { start: 300, density: 0.05130000000000013 },
              ],
              percentiles: { p75: 76 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.754250850170041 },
                { start: 1800, end: 3000, density: 0.15503100620124166 },
                { start: 3000, density: 0.09071814362872807 },
              ],
              percentiles: { p75: 1821 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978906328101568 },
                { start: 100, end: 300, density: 0.018094571628511417 },
                { start: 300, density: 0.0029991002699190157 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.810806757972615 },
                { start: 2500, end: 4000, density: 0.11401579526142254 },
                { start: 4000, density: 0.07517744676597167 },
              ],
              percentiles: { p75: 2196 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1821,
        lcp: 2196,
        cls: "0.06",
        fid: 13,
        er: 76,
      },
      timestamp: 1647963806775,
    },
    {
      url: "https://www.yara.com.pe/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6582658265826553 },
                { start: 100, end: 300, density: 0.24902490249024792 },
                { start: 300, density: 0.0927092709270921 },
              ],
              percentiles: { p75: 151 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5533660098029424 },
                { start: 1800, end: 3000, density: 0.27128138441532534 },
                { start: 3000, density: 0.175352605781735 },
              ],
              percentiles: { p75: 2574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687937587517492 },
                { start: 100, end: 300, density: 0.02580516103220641 },
                { start: 300, density: 0.005401080216043201 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6551810362072399 },
                { start: 2500, end: 4000, density: 0.1979895979195835 },
                { start: 4000, density: 0.14682936587317635 },
              ],
              percentiles: { p75: 3043 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7952204779522052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15408459154084597,
                },
                { start: "0.25", density: 0.05069493050694929 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2574,
        lcp: 3043,
        cls: "0.06",
        fid: 11,
        er: 151,
      },
      timestamp: 1647963806823,
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8188999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11979999999999996,
                },
                { start: "0.25", density: 0.06129999999999992 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6845369073814747 },
                { start: 100, end: 300, density: 0.21804360872174383 },
                { start: 300, density: 0.09741948389677874 },
              ],
              percentiles: { p75: 129 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.659300000000001 },
                { start: 1800, end: 3000, density: 0.21400000000000038 },
                { start: 3000, density: 0.1267000000000026 },
              ],
              percentiles: { p75: 2206 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9614115765270385 },
                { start: 100, end: 300, density: 0.02829151254623603 },
                { start: 300, density: 0.010296910926721943 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7302769723027605 },
                { start: 2500, end: 4000, density: 0.17123287671232665 },
                { start: 4000, density: 0.09849015098490108 },
              ],
              percentiles: { p75: 2621 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2206,
        lcp: 2621,
        cls: "0.05",
        fid: 14,
        er: 129,
      },
      timestamp: 1647963806883,
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
                  density: 0.8680131986801308,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07549245075492442,
                },
                { start: "0.25", density: 0.05649435056494342 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.06361272254450914 },
                { start: 1800, end: 3000, density: 0.42238447689538083 },
                { start: 3000, density: 0.5140028005601128 },
              ],
              percentiles: { p75: 4495 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2258774122587744 },
                { start: 2500, end: 4000, density: 0.3909609039096095 },
                { start: 4000, density: 0.3831616838316218 },
              ],
              percentiles: { p75: 5032 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4495, lcp: 5032, cls: "0.05" },
      timestamp: 1647963806934,
    },
    {
      url: "https://www.yara.bo/",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.47220277972203095 },
                { start: 2500, end: 4000, density: 0.328317168283174 },
                { start: 4000, density: 0.19948005199480598 },
              ],
              percentiles: { p75: 3755 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9276 },
                { start: "0.10", end: "0.25", density: 0.0485 },
                { start: "0.25", density: 0.02390000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5592559255925613 },
                { start: 100, end: 300, density: 0.3031303130313043 },
                { start: 300, density: 0.13761376137613832 },
              ],
              percentiles: { p75: 192 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36981094328298403 },
                { start: 1800, end: 3000, density: 0.3331999599879957 },
                { start: 3000, density: 0.29698909672901513 },
              ],
              percentiles: { p75: 3263 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723999999999999 },
                { start: 100, end: 300, density: 0.0244 },
                { start: 300, density: 0.0032000000000000006 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3263,
        lcp: 3755,
        cls: "0.00",
        fid: 11,
        er: 192,
      },
      timestamp: 1647963806973,
    },
    {
      url: "https://www.yara.com.pa/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9693969396939695 },
                { start: 100, end: 300, density: 0.025802580258025804 },
                { start: 300, density: 0.0048004800480048 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7615261526152608 },
                { start: 2500, end: 4000, density: 0.15056505650565039 },
                { start: 4000, density: 0.08790879087908753 },
              ],
              percentiles: { p75: 2648 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9114911491149118,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07490749074907492,
                },
                { start: "0.25", density: 0.013601360136013617 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7068706870687042 },
                { start: 100, end: 300, density: 0.22582258225822496 },
                { start: 300, density: 0.06730673067306688 },
              ],
              percentiles: { p75: 129 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6685337067413483 },
                { start: 1800, end: 3000, density: 0.24024804960992188 },
                { start: 3000, density: 0.09121824364872955 },
              ],
              percentiles: { p75: 2148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2148,
        lcp: 2648,
        cls: "0.02",
        fid: 11,
        er: 129,
      },
      timestamp: 1647963807016,
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
                  density: 0.8633863386338635,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10121012101210121,
                },
                { start: "0.25", density: 0.03540354035403542 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.646206138158552 },
                { start: 100, end: 300, density: 0.203438968309507 },
                { start: 300, density: 0.15035489353193907 },
              ],
              percentiles: { p75: 175 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6762000000000142 },
                { start: 1800, end: 3000, density: 0.21160000000000445 },
                { start: 3000, density: 0.11220000000000357 },
              ],
              percentiles: { p75: 2088 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653930786157265 },
                { start: 100, end: 300, density: 0.024704940988197723 },
                { start: 300, density: 0.009901980396079217 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7287457491498421 },
                { start: 2500, end: 4000, density: 0.1620324064812989 },
                { start: 4000, density: 0.10922184436887623 },
              ],
              percentiles: { p75: 2659 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2088,
        lcp: 2659,
        cls: "0.03",
        fid: 11,
        er: 175,
      },
      timestamp: 1647963807063,
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
                  density: 0.8182818281828187,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11391139113911396,
                },
                { start: "0.25", density: 0.0678067806780678 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6639999999999968 },
                { start: 100, end: 300, density: 0.23169999999999896 },
                { start: 300, density: 0.10429999999999938 },
              ],
              percentiles: { p75: 138 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8385000000000021 },
                { start: 1800, end: 3000, density: 0.10750000000000019 },
                { start: 3000, density: 0.05400000000000082 },
              ],
              percentiles: { p75: 1479 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9633999999999956 },
                { start: 100, end: 300, density: 0.022599999999999898 },
                { start: 300, density: 0.013999999999999995 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8626087826347906 },
                { start: 2500, end: 4000, density: 0.09327798339501851 },
                { start: 4000, density: 0.04411323397019135 },
              ],
              percentiles: { p75: 1884 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1479,
        lcp: 1884,
        cls: "0.04",
        fid: 12,
        er: 138,
      },
      timestamp: 1647963807104,
    },
    {
      url: "https://www.yara.co.uk/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5264420673797949 },
                { start: 2500, end: 4000, density: 0.2770168949315251 },
                { start: 4000, density: 0.19654103768869807 },
              ],
              percentiles: { p75: 3609 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6859000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20479999999999998,
                },
                { start: "0.25", density: 0.10929999999999992 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6089173248025636 },
                { start: 100, end: 300, density: 0.18734379686094305 },
                { start: 300, density: 0.20373887833650128 },
              ],
              percentiles: { p75: 223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4372437243724366 },
                { start: 1800, end: 3000, density: 0.29932993299329885 },
                { start: 3000, density: 0.2634263426342588 },
              ],
              percentiles: { p75: 3100 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.921799999999998 },
                { start: 100, end: 300, density: 0.038699999999999915 },
                { start: 300, density: 0.039499999999999875 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3100,
        lcp: 3609,
        cls: "0.14",
        fid: 13,
        er: 223,
      },
      timestamp: 1647963807142,
    },
    {
      url: "https://www.yara.co.za/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7808780878087824 },
                { start: 100, end: 300, density: 0.17491749174917529 },
                { start: 300, density: 0.044204420442044555 },
              ],
              percentiles: { p75: 81 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.659636145541783 },
                { start: 1800, end: 3000, density: 0.19682127149140344 },
                { start: 3000, density: 0.1435425829668164 },
              ],
              percentiles: { p75: 2230 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9870012998700132 },
                { start: 100, end: 300, density: 0.010998900109989003 },
                { start: 300, density: 0.0019998000199980006 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6916500000000011 },
                { start: 2500, end: 4000, density: 0.16255000000000022 },
                { start: 4000, density: 0.14579999999999987 },
              ],
              percentiles: { p75: 2851 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7877212278772125,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15438456154384567,
                },
                { start: "0.25", density: 0.057894210578942076 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2230,
        lcp: 2851,
        cls: "0.07",
        fid: 10,
        er: 81,
      },
      timestamp: 1647963807198,
    },
    {
      url: "https://www.yara.pl/",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8050610122024393 },
                { start: 2500, end: 4000, density: 0.1451290258051608 },
                { start: 4000, density: 0.049809961992398996 },
              ],
              percentiles: { p75: 2261 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7551999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20569999999999986,
                },
                { start: "0.25", density: 0.03910000000000001 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6009999999999974 },
                { start: 100, end: 300, density: 0.2763999999999988 },
                { start: 300, density: 0.12260000000000008 },
              ],
              percentiles: { p75: 165 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7574000000000064 },
                { start: 1800, end: 3000, density: 0.1831000000000016 },
                { start: 3000, density: 0.059500000000000886 },
              ],
              percentiles: { p75: 1784 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610077984403081 },
                { start: 100, end: 300, density: 0.023295340931813544 },
                { start: 300, density: 0.01569686062787438 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1784,
        lcp: 2261,
        cls: "0.09",
        fid: 12,
        er: 165,
      },
      timestamp: 1647963807256,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638927785557106 },
                { start: 100, end: 300, density: 0.025105021004200825 },
                { start: 300, density: 0.011002200440088011 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6695999999999966 },
                { start: 2500, end: 4000, density: 0.19789999999999894 },
                { start: 4000, density: 0.13249999999999967 },
              ],
              percentiles: { p75: 3022 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7635999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17289999999999997,
                },
                { start: "0.25", density: 0.06349999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7605521104220845 },
                { start: 100, end: 300, density: 0.1459291858371675 },
                { start: 300, density: 0.09351870374074878 },
              ],
              percentiles: { p75: 102 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6608000000000086 },
                { start: 1800, end: 3000, density: 0.21810000000000282 },
                { start: 3000, density: 0.12110000000000098 },
              ],
              percentiles: { p75: 2227 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2227,
        lcp: 3022,
        cls: "0.08",
        fid: 10,
        er: 102,
      },
      timestamp: 1647963807312,
    },
    {
      url: "https://www.yara.com.ar/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47500499900020127 },
                { start: 1800, end: 3000, density: 0.2989402119576092 },
                { start: 3000, density: 0.2260547890421944 },
              ],
              percentiles: { p75: 2901 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965003499650035 },
                { start: 100, end: 300, density: 0.026397360263973605 },
                { start: 300, density: 0.008599140085991374 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5855828834233151 },
                { start: 2500, end: 4000, density: 0.2522495500899818 },
                { start: 4000, density: 0.16216756648670508 },
              ],
              percentiles: { p75: 3338 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8766123387661234,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09939006099390062,
                },
                { start: "0.25", density: 0.02399760023997598 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6395639563956366 },
                { start: 100, end: 300, density: 0.25022502250224904 },
                { start: 300, density: 0.11021102110210887 },
              ],
              percentiles: { p75: 152 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2901,
        lcp: 3338,
        cls: "0.04",
        fid: 11,
        er: 152,
      },
      timestamp: 1647963807363,
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
                  density: 0.8074807480748071,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16141614161416132,
                },
                { start: "0.25", density: 0.031103110311031072 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7726454709058177 },
                { start: 100, end: 300, density: 0.1425714857028592 },
                { start: 300, density: 0.0847830433913218 },
              ],
              percentiles: { p75: 101 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788121187881228 },
                { start: 1800, end: 3000, density: 0.09269073092690751 },
                { start: 3000, density: 0.028497150284971608 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756024397560236 },
                { start: 100, end: 300, density: 0.016298370162983685 },
                { start: 300, density: 0.008099190080991884 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8984000000000006 },
                { start: 2500, end: 4000, density: 0.07970000000000006 },
                { start: 4000, density: 0.02190000000000009 },
              ],
              percentiles: { p75: 1820 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1364,
        lcp: 1820,
        cls: "0.09",
        fid: 10,
        er: 101,
      },
      timestamp: 1647963807421,
    },
    {
      url: "https://www.yara.ro/",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8488848884888529 },
                { start: 2500, end: 4000, density: 0.11741174117411797 },
                { start: 4000, density: 0.03370337033703403 },
              ],
              percentiles: { p75: 2075 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9027999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08289999999999995,
                },
                { start: "0.25", density: 0.0143 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.674102230669208 },
                { start: 100, end: 300, density: 0.22406722016605224 },
                { start: 300, density: 0.1018305491647506 },
              ],
              percentiles: { p75: 134 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8088000000000065 },
                { start: 1800, end: 3000, density: 0.1508000000000012 },
                { start: 3000, density: 0.04040000000000071 },
              ],
              percentiles: { p75: 1644 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9650930186037207 },
                { start: 100, end: 300, density: 0.01570314062812562 },
                { start: 300, density: 0.019203840768153603 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1644,
        lcp: 2075,
        cls: "0.01",
        fid: 11,
        er: 134,
      },
      timestamp: 1647963807477,
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5395999999999983 },
                { start: 100, end: 300, density: 0.31849999999999895 },
                { start: 300, density: 0.14190000000000094 },
              ],
              percentiles: { p75: 206 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42592777833350204 },
                { start: 1800, end: 3000, density: 0.4218265479643915 },
                { start: 3000, density: 0.1522456737021115 },
              ],
              percentiles: { p75: 2617 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9205999999999969 },
                { start: 100, end: 300, density: 0.056199999999999806 },
                { start: 300, density: 0.023199999999999804 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5075037518759387 },
                { start: 2500, end: 4000, density: 0.350125062531266 },
                { start: 4000, density: 0.1423711855927963 },
              ],
              percentiles: { p75: 3428 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9604881464439327,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030709212763829128,
                },
                { start: "0.25", density: 0.008802640792237665 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2617,
        lcp: 3428,
        cls: "0.00",
        fid: 13,
        er: 206,
      },
      timestamp: 1647963807536,
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8887999999999965 },
                { start: 1800, end: 3000, density: 0.08049999999999968 },
                { start: 3000, density: 0.03069999999999984 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687062587482499 },
                { start: 100, end: 300, density: 0.011097780443911213 },
                { start: 300, density: 0.020195960807838486 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8864386438643892 },
                { start: 2500, end: 4000, density: 0.09175917591759206 },
                { start: 4000, density: 0.02180218021802183 },
              ],
              percentiles: { p75: 1884 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7422000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17480000000000007,
                },
                { start: "0.25", density: 0.08299999999999993 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7421226367910359 },
                { start: 100, end: 300, density: 0.1616484945483642 },
                { start: 300, density: 0.0962288686605978 },
              ],
              percentiles: { p75: 112 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1884,
        cls: "0.10",
        fid: 9,
        er: 112,
      },
      timestamp: 1647963807595,
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8082575227431769 },
                { start: 1800, end: 3000, density: 0.12166350094971506 },
                { start: 3000, density: 0.07007897630710856 },
              ],
              percentiles: { p75: 1556 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9600960096009626 },
                { start: 100, end: 300, density: 0.022502250225022558 },
                { start: 300, density: 0.017401740174017365 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8484348434843516 },
                { start: 2500, end: 4000, density: 0.10026002600260069 },
                { start: 4000, density: 0.0513051305130516 },
              ],
              percentiles: { p75: 1996 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9089000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07110000000000004,
                },
                { start: "0.25", density: 0.02000000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6478352164783499 },
                { start: 100, end: 300, density: 0.2442755724427548 },
                { start: 300, density: 0.1078892110788907 },
              ],
              percentiles: { p75: 149 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1556,
        lcp: 1996,
        cls: "0.01",
        fid: 11,
        er: 149,
      },
      timestamp: 1647963807650,
    },
    {
      url: "https://www.yara.ua/",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739000000000023 },
                { start: 100, end: 300, density: 0.016100000000000038 },
                { start: 300, density: 0.010000000000000007 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8080575827251905 },
                { start: 2500, end: 4000, density: 0.1263620913725895 },
                { start: 4000, density: 0.06558032590222983 },
              ],
              percentiles: { p75: 2181 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8629137086291371,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11778822117788222,
                },
                { start: "0.25", density: 0.019298070192980694 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6581316263252689 },
                { start: 100, end: 300, density: 0.23074614922984735 },
                { start: 300, density: 0.11112222444488856 },
              ],
              percentiles: { p75: 149 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.754624537546246 },
                { start: 1800, end: 3000, density: 0.1689831016898311 },
                { start: 3000, density: 0.07639236076392353 },
              ],
              percentiles: { p75: 1790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1790,
        lcp: 2181,
        cls: "0.04",
        fid: 11,
        er: 149,
      },
      timestamp: 1647963807704,
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8754124587541282 },
                { start: 1800, end: 3000, density: 0.09239076092390801 },
                { start: 3000, density: 0.03219678032196798 },
              ],
              percentiles: { p75: 1367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610077984403133 },
                { start: 100, end: 300, density: 0.02349530093981207 },
                { start: 300, density: 0.015496900619876105 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8681868186818705 },
                { start: 2500, end: 4000, density: 0.09290929092909318 },
                { start: 4000, density: 0.03890389038903916 },
              ],
              percentiles: { p75: 1993 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7813781378137806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16661666166616645,
                },
                { start: "0.25", density: 0.0520052005200519 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7166999999999998 },
                { start: 100, end: 300, density: 0.1857999999999999 },
                { start: 300, density: 0.09749999999999964 },
              ],
              percentiles: { p75: 131 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1367,
        lcp: 1993,
        cls: "0.08",
        fid: 10,
        er: 131,
      },
      timestamp: 1647963807759,
    },
    {
      url: "https://www.yara.ru/",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8664000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11400000000000002,
                },
                { start: "0.25", density: 0.019600000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6880311968803127 },
                { start: 100, end: 300, density: 0.20687931206879331 },
                { start: 300, density: 0.1050894910508947 },
              ],
              percentiles: { p75: 136 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5924000000000025 },
                { start: 1800, end: 3000, density: 0.24480000000000104 },
                { start: 3000, density: 0.16280000000000008 },
              ],
              percentiles: { p75: 2513 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951114665600319 },
                { start: 100, end: 300, density: 0.034489653104068756 },
                { start: 300, density: 0.014395681295611307 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6765500000000007 },
                { start: 2500, end: 4000, density: 0.21865000000000026 },
                { start: 4000, density: 0.10479999999999963 },
              ],
              percentiles: { p75: 2874 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2513,
        lcp: 2874,
        cls: "0.04",
        fid: 11,
        er: 136,
      },
      timestamp: 1647963807822,
    },
    {
      url: "https://www.yara.ie/",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7913791379137917,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13511351135113517,
                },
                { start: "0.25", density: 0.07350735073507358 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5638436156384351 },
                { start: 100, end: 300, density: 0.26727327267273226 },
                { start: 300, density: 0.16888311168883174 },
              ],
              percentiles: { p75: 198 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5218043608721769 },
                { start: 1800, end: 3000, density: 0.32996599319864117 },
                { start: 3000, density: 0.14822964592918753 },
              ],
              percentiles: { p75: 2531 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9433943394339438 },
                { start: 100, end: 300, density: 0.026502650265026517 },
                { start: 300, density: 0.030103010301030225 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5997699539907996 },
                { start: 2500, end: 4000, density: 0.29130826165233115 },
                { start: 4000, density: 0.10892178435687135 },
              ],
              percentiles: { p75: 3169 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2531,
        lcp: 3169,
        cls: "0.06",
        fid: 13,
        er: 198,
      },
      timestamp: 1647963807884,
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.654399999999997 },
                { start: 1800, end: 3000, density: 0.23879999999999896 },
                { start: 3000, density: 0.10679999999999962 },
              ],
              percentiles: { p75: 2298 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9846 },
                { start: 100, end: 300, density: 0.0154 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.745524552455245 },
                { start: 2500, end: 4000, density: 0.17186718671867166 },
                { start: 4000, density: 0.08260826082608276 },
              ],
              percentiles: { p75: 2659 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7889000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14700000000000005,
                },
                { start: "0.25", density: 0.0641 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8503149685031491 },
                { start: 100, end: 300, density: 0.12148785121487844 },
                { start: 300, density: 0.028197180281971823 },
              ],
              percentiles: { p75: 49 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2298,
        lcp: 2659,
        cls: "0.06",
        fid: 11,
        er: 49,
      },
      timestamp: 1647963807942,
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
                  density: 0.7741000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14580000000000004,
                },
                { start: "0.25", density: 0.08009999999999994 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6339366063393651 },
                { start: 100, end: 300, density: 0.2553744625537443 },
                { start: 300, density: 0.1106889311068889 },
              ],
              percentiles: { p75: 162 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5970597059706052 },
                { start: 1800, end: 3000, density: 0.22952295229523256 },
                { start: 3000, density: 0.17341734173417525 },
              ],
              percentiles: { p75: 2463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586999999999992 },
                { start: 100, end: 300, density: 0.028899999999999974 },
                { start: 300, density: 0.012400000000000078 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6806445156124813 },
                { start: 2500, end: 4000, density: 0.17864291433146282 },
                { start: 4000, density: 0.14071257005604443 },
              ],
              percentiles: { p75: 2975 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2463,
        lcp: 2975,
        cls: "0.08",
        fid: 13,
        er: 162,
      },
      timestamp: 1647963808004,
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6289628962896306 },
                { start: 2500, end: 4000, density: 0.23412341234123482 },
                { start: 4000, density: 0.13691369136913928 },
              ],
              percentiles: { p75: 3091 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8606999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10729999999999996,
                },
                { start: "0.25", density: 0.03200000000000001 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6364636463646376 },
                { start: 100, end: 300, density: 0.26652665266526704 },
                { start: 300, density: 0.09700970097009708 },
              ],
              percentiles: { p75: 163 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5285000000000054 },
                { start: 1800, end: 3000, density: 0.29240000000000305 },
                { start: 3000, density: 0.17910000000000503 },
              ],
              percentiles: { p75: 2635 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690123950419787 },
                { start: 100, end: 300, density: 0.023290683726509286 },
                { start: 300, density: 0.007696921231507349 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2635,
        lcp: 3091,
        cls: "0.02",
        fid: 11,
        er: 163,
      },
      timestamp: 1647963808065,
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
                  density: 0.8147185281471855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15438456154384567,
                },
                { start: "0.25", density: 0.030896910308969128 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7204440888177642 },
                { start: 100, end: 300, density: 0.20574114822964615 },
                { start: 300, density: 0.07381476295259048 },
              ],
              percentiles: { p75: 113 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7296729672967311 },
                { start: 1800, end: 3000, density: 0.1982198219821987 },
                { start: 3000, density: 0.0721072107210722 },
              ],
              percentiles: { p75: 1875 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715943188637707 },
                { start: 100, end: 300, density: 0.02110422084416879 },
                { start: 300, density: 0.007301460292058357 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7685500000000041 },
                { start: 2500, end: 4000, density: 0.15185000000000085 },
                { start: 4000, density: 0.07960000000000107 },
              ],
              percentiles: { p75: 2415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1875,
        lcp: 2415,
        cls: "0.04",
        fid: 12,
        er: 113,
      },
      timestamp: 1647963808129,
    },
    {
      url: "https://www.yara.kr/",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8543999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05649999999999998,
                },
                { start: "0.25", density: 0.08910000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.9241151769646059 },
                { start: 100, end: 300, density: 0.0548890221955608 },
                { start: 300, density: 0.020995800839831973 },
              ],
              percentiles: { p75: 0 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8232646529305836 },
                { start: 1800, end: 3000, density: 0.13382676535307025 },
                { start: 3000, density: 0.04290858171634335 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9844968993798762 },
                { start: 100, end: 300, density: 0.013302660532106424 },
                { start: 300, density: 0.0022004400880176037 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8497499999999985 },
                { start: 2500, end: 4000, density: 0.1069499999999998 },
                { start: 4000, density: 0.04330000000000002 },
              ],
              percentiles: { p75: 2035 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1574,
        lcp: 2035,
        cls: "0.03",
        fid: 8,
        er: 0,
      },
      timestamp: 1647963808195,
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9507000000000007 },
                { start: 100, end: 300, density: 0.03820000000000003 },
                { start: 300, density: 0.011100000000000025 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6770145970805843 },
                { start: 2500, end: 4000, density: 0.1854129174165168 },
                { start: 4000, density: 0.13757248550289938 },
              ],
              percentiles: { p75: 3006 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8917891789178908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07660766076607652,
                },
                { start: "0.25", density: 0.03160316031603157 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.7150715071507153 },
                { start: 100, end: 300, density: 0.19481948194819493 },
                { start: 300, density: 0.0901090109010896 },
              ],
              percentiles: { p75: 120 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6117388261173909 },
                { start: 1800, end: 3000, density: 0.24227577242275875 },
                { start: 3000, density: 0.14598540145985445 },
              ],
              percentiles: { p75: 2345 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2345,
        lcp: 3006,
        cls: "0.02",
        fid: 13,
        er: 120,
      },
      timestamp: 1647963808264,
    },
    {
      url: "https://www.yara.cl/",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.692769276927694 },
                { start: 100, end: 300, density: 0.22872287228722915 },
                { start: 300, density: 0.07850785078507877 },
              ],
              percentiles: { p75: 130 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4626074785042974 },
                { start: 1800, end: 3000, density: 0.34703059388122254 },
                { start: 3000, density: 0.1903619276144759 },
              ],
              percentiles: { p75: 2754 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665033496650336 },
                { start: 100, end: 300, density: 0.02759724027597241 },
                { start: 300, density: 0.005899410058994107 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5975609756097534 },
                { start: 2500, end: 4000, density: 0.26249500199919923 },
                { start: 4000, density: 0.13994402239104503 },
              ],
              percentiles: { p75: 3194 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8314999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10489999999999997,
                },
                { start: "0.25", density: 0.06359999999999998 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2754,
        lcp: 3194,
        cls: "0.07",
        fid: 11,
        er: 130,
      },
      timestamp: 1647963808332,
    },
    {
      url: "https://www.yara.com.mx/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8121 },
                { start: "0.10", end: "0.25", density: 0.1346 },
                { start: "0.25", density: 0.053300000000000014 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5581674502350717 },
                { start: 100, end: 300, density: 0.26718015404621454 },
                { start: 300, density: 0.17465239571871716 },
              ],
              percentiles: { p75: 214 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6093437374949998 },
                { start: 1800, end: 3000, density: 0.2337935174069635 },
                { start: 3000, density: 0.1568627450980415 },
              ],
              percentiles: { p75: 2388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623623623623632 },
                { start: 100, end: 300, density: 0.02622622622622624 },
                { start: 300, density: 0.011411411411411429 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6922076622986907 },
                { start: 2500, end: 4000, density: 0.1747524257277185 },
                { start: 4000, density: 0.1330399119735946 },
              ],
              percentiles: { p75: 2868 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2388,
        lcp: 2868,
        cls: "0.05",
        fid: 13,
        er: 214,
      },
      timestamp: 1647963808400,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8308 },
                { start: "0.10", end: "0.25", density: 0.1281 },
                { start: "0.25", density: 0.041099999999999956 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5021008403361344 },
                { start: 100, end: 300, density: 0.2461984793917568 },
                { start: 300, density: 0.25170068027210907 },
              ],
              percentiles: { p75: 307 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4872999999999988 },
                { start: 1800, end: 3000, density: 0.2504999999999993 },
                { start: 3000, density: 0.2621999999999892 },
              ],
              percentiles: { p75: 3162 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9215686274509779 },
                { start: 100, end: 300, density: 0.04891956782713072 },
                { start: 300, density: 0.029511804721888635 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5098499999999972 },
                { start: 2500, end: 4000, density: 0.24564999999999856 },
                { start: 4000, density: 0.24450000000000027 },
              ],
              percentiles: { p75: 4039 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3162,
        lcp: 4039,
        cls: "0.05",
        fid: 15,
        er: 307,
      },
      timestamp: 1647963808470,
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8075807580758078,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14201420142014204,
                },
                { start: "0.25", density: 0.05040504050405041 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6653996198859627 },
                { start: 100, end: 300, density: 0.19605881764529273 },
                { start: 300, density: 0.13854156246874041 },
              ],
              percentiles: { p75: 158 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.615276944611082 },
                { start: 1800, end: 3000, density: 0.21715656868626426 },
                { start: 3000, density: 0.16756648670266136 },
              ],
              percentiles: { p75: 2446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297070292970667 },
                { start: 100, end: 300, density: 0.03409659034096578 },
                { start: 300, density: 0.03619638036196372 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6623662366236628 },
                { start: 2500, end: 4000, density: 0.18671867186718683 },
                { start: 4000, density: 0.15091509150915344 },
              ],
              percentiles: { p75: 3101 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2446,
        lcp: 3101,
        cls: "0.06",
        fid: 13,
        er: 158,
      },
      timestamp: 1647963808544,
    },
    {
      url: "https://www.yara.ma/",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7468259522143341 },
                { start: 2500, end: 4000, density: 0.1617014895531337 },
                { start: 4000, density: 0.09147255823252957 },
              ],
              percentiles: { p75: 2614 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.916791679167916,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06300630063006296,
                },
                { start: "0.25", density: 0.020202020202020197 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6483 },
                { start: 100, end: 300, density: 0.27680000000000005 },
                { start: 300, density: 0.07490000000000023 },
              ],
              percentiles: { p75: 128 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.704729527047295 },
                { start: 1800, end: 3000, density: 0.18688131186881307 },
                { start: 3000, density: 0.10838916108389166 },
              ],
              percentiles: { p75: 2087 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: {
        fcp: 2087,
        lcp: 2614,
        cls: "0.00",
        er: 128,
      },
      timestamp: 1647963808617,
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
                  density: 0.9188081191880813,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052394760523947606,
                },
                { start: "0.25", density: 0.02879712028797118 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5953999999999989 },
                { start: 1800, end: 3000, density: 0.17039999999999975 },
                { start: 3000, density: 0.23419999999999916 },
              ],
              percentiles: { p75: 2817 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6128500000000009 },
                { start: 2500, end: 4000, density: 0.20525000000000024 },
                { start: 4000, density: 0.18190000000000076 },
              ],
              percentiles: { p75: 3267 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2817, lcp: 3267, cls: "0.00" },
      timestamp: 1647963808693,
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7706082432973234 },
                { start: 1800, end: 3000, density: 0.1693677470988405 },
                { start: 3000, density: 0.060024009603842104 },
              ],
              percentiles: { p75: 1745 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634890467140109 },
                { start: 100, end: 300, density: 0.024507352205661612 },
                { start: 300, density: 0.012003601080324179 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7981096219243873 },
                { start: 2500, end: 4000, density: 0.14567913582716588 },
                { start: 4000, density: 0.05621124224844987 },
              ],
              percentiles: { p75: 2283 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8867113288671129,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09949005099490049,
                },
                { start: "0.25", density: 0.013798620137986188 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6742325767423222 },
                { start: 100, end: 300, density: 0.23997600239975875 },
                { start: 300, density: 0.08579142085791382 },
              ],
              percentiles: { p75: 133 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1745,
        lcp: 2283,
        cls: "0.01",
        fid: 12,
        er: 133,
      },
      timestamp: 1647963808768,
    },
    {
      url: "https://www.yara.lv/",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.6573314662932592 },
                { start: 100, end: 300, density: 0.247849569913983 },
                { start: 300, density: 0.0948189637927584 },
              ],
              percentiles: { p75: 146 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8415158484151561 },
                { start: 1800, end: 3000, density: 0.11358864113588611 },
                { start: 3000, density: 0.04489551044895487 },
              ],
              percentiles: { p75: 1506 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9707029297070283 },
                { start: 100, end: 300, density: 0.02569743025697428 },
                { start: 300, density: 0.0035996400359963954 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8504649535046479 },
                { start: 2500, end: 4000, density: 0.11523847615238458 },
                { start: 4000, density: 0.03429657034296552 },
              ],
              percentiles: { p75: 2089 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9054189162167571,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07678464307138577,
                },
                { start: "0.25", density: 0.017796440711857646 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1506,
        lcp: 2089,
        cls: "0.03",
        fid: 12,
        er: 146,
      },
      timestamp: 1647963808845,
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
                  density: 0.7531246875312474,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16938306169383072,
                },
                { start: "0.25", density: 0.07749225077492251 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.8071192880711954 },
                { start: 100, end: 300, density: 0.12808719128087234 },
                { start: 300, density: 0.06479352064793505 },
              ],
              percentiles: { p75: 73 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6151000000000001 },
                { start: 1800, end: 3000, density: 0.22490000000000002 },
                { start: 3000, density: 0.16000000000000114 },
              ],
              percentiles: { p75: 2457 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9789915966386527 },
                { start: 100, end: 300, density: 0.015006002400960339 },
                { start: 300, density: 0.006002400960384128 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6787321267873223 },
                { start: 2500, end: 4000, density: 0.1985801419858016 },
                { start: 4000, density: 0.12268773122687845 },
              ],
              percentiles: { p75: 2945 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2457,
        lcp: 2945,
        cls: "0.10",
        fid: 10,
        er: 73,
      },
      timestamp: 1647963808922,
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
                  density: 0.8253174682531738,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12858714128587126,
                },
                { start: "0.25", density: 0.04609539046095381 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_responsiveness: {
              histogram: [
                { start: 0, end: 100, density: 0.5390156062424993 },
                { start: 100, end: 300, density: 0.275310124049621 },
                { start: 300, density: 0.18567426970788348 },
              ],
              percentiles: { p75: 225 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7128425685137083 },
                { start: 1800, end: 3000, density: 0.17073414682936722 },
                { start: 3000, density: 0.11642328465693268 },
              ],
              percentiles: { p75: 2004 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9466213514594234 },
                { start: 100, end: 300, density: 0.03458616553378674 },
                { start: 300, density: 0.01879248300679734 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.765023497650228 },
                { start: 2500, end: 4000, density: 0.14748525147485123 },
                { start: 4000, density: 0.08749125087491284 },
              ],
              percentiles: { p75: 2456 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2004,
        lcp: 2456,
        cls: "0.05",
        fid: 12,
        er: 225,
      },
      timestamp: 1647963808994,
    },
  ],
};
