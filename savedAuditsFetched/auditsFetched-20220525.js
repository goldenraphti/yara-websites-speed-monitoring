export const audit27 = {
  date: "2022-05-25T21:59:30.935Z",
  dateParsedLocale: "25/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "25/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6719607843137251 },
                { start: 200, end: 500, density: 0.2407843137254901 },
                { start: 500, density: 0.08725490196078485 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5142698295033353 },
                { start: 800, end: 1800, density: 0.3641586360266862 },
                { start: 1800, density: 0.12157153446997847 },
              ],
              percentiles: { p75: 1300 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6748102905793067 },
                { start: 1800, end: 3000, density: 0.1978530446048489 },
                { start: 3000, density: 0.12733666481584427 },
              ],
              percentiles: { p75: 2140 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629332799038269 },
                { start: 100, end: 300, density: 0.02885193348026448 },
                { start: 300, density: 0.008214786615908605 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7361596468640792 },
                { start: 2500, end: 4000, density: 0.1623137759794003 },
                { start: 4000, density: 0.10152657715652062 },
              ],
              percentiles: { p75: 2585 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9248188405797102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04963768115942028,
                },
                { start: "0.25", density: 0.02554347826086956 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2140,
        lcp: 2585,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653515907840,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8288126919140226 },
                { start: 800, end: 1800, density: 0.1427840327533265 },
                { start: 1800, density: 0.02840327533265086 },
              ],
              percentiles: { p75: 705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9118953916465661 },
                { start: 1800, end: 3000, density: 0.06322203884727691 },
                { start: 3000, density: 0.024882569506157044 },
              ],
              percentiles: { p75: 1218 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.939929788063971 },
                { start: 100, end: 300, density: 0.031205304901833313 },
                { start: 300, density: 0.028864907034195787 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9095933926302414 },
                { start: 2500, end: 4000, density: 0.07223634053367219 },
                { start: 4000, density: 0.018170266836086493 },
              ],
              percentiles: { p75: 1756 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8945707070707071,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07272727272727274,
                },
                { start: "0.25", density: 0.032702020202020204 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4374447670748643 },
                { start: 200, end: 500, density: 0.39729832091907585 },
                { start: 500, density: 0.16525691200605983 },
              ],
              percentiles: { p75: 370 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1218,
        lcp: 1756,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515908416,
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
                  density: 0.9295528898582334,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047110141766630316,
                },
                { start: "0.25", density: 0.023336968375136314 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5134965473948522 },
                { start: 200, end: 500, density: 0.3274743670223896 },
                { start: 500, density: 0.15902908558275833 },
              ],
              percentiles: { p75: 346 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6653456627036549 },
                { start: 800, end: 1800, density: 0.29612505504183184 },
                { start: 1800, density: 0.03852928225451343 },
              ],
              percentiles: { p75: 908 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.879883902656843 },
                { start: 1800, end: 3000, density: 0.0857334226389819 },
                { start: 3000, density: 0.03438267470417499 },
              ],
              percentiles: { p75: 1442 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485970819304153 },
                { start: 100, end: 300, density: 0.031874298540965205 },
                { start: 300, density: 0.01952861952861955 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.903125 },
                { start: 2500, end: 4000, density: 0.07321428571428573 },
                { start: 4000, density: 0.023660714285714344 },
              ],
              percentiles: { p75: 1789 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1442,
        lcp: 1789,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515908982,
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
                  density: 0.9764432647644327,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012607830126078301,
                },
                { start: "0.25", density: 0.010948905109489046 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5522190328990951 },
                { start: 200, end: 500, density: 0.345771693530581 },
                { start: 500, density: 0.1020092735703238 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.440189281390998 },
                { start: 800, end: 1800, density: 0.3706393749312203 },
                { start: 1800, density: 0.18917134367778174 },
              ],
              percentiles: { p75: 1677 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5552855407047382 },
                { start: 1800, end: 3000, density: 0.33624212968076855 },
                { start: 3000, density: 0.10847232961449316 },
              ],
              percentiles: { p75: 2325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9264902135231315 },
                { start: 100, end: 300, density: 0.05404804270462633 },
                { start: 300, density: 0.019461743772242135 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285983170947739 },
                { start: 2500, end: 4000, density: 0.2740810451727189 },
                { start: 4000, density: 0.09732063773250718 },
              ],
              percentiles: { p75: 3007 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2325,
        lcp: 3007,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515909577,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6180835828668144 },
                { start: 2500, end: 4000, density: 0.28414268975393814 },
                { start: 4000, density: 0.09777372737924739 },
              ],
              percentiles: { p75: 3084 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.926795229637148,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030449124587668103,
                },
                { start: "0.25", density: 0.04275564577518397 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4989730423620019 },
                { start: 200, end: 500, density: 0.3159178433889598 },
                { start: 500, density: 0.18510911424903825 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2815995885302815 },
                { start: 800, end: 1800, density: 0.4267712485534267 },
                { start: 1800, density: 0.2916291629162919 },
              ],
              percentiles: { p75: 1942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46702017589239564 },
                { start: 1800, end: 3000, density: 0.35475944128298004 },
                { start: 3000, density: 0.17822038282462443 },
              ],
              percentiles: { p75: 2651 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9179025423728816 },
                { start: 100, end: 300, density: 0.029793432203389834 },
                { start: 300, density: 0.05230402542372863 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2651,
        lcp: 3084,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515910076,
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
                  density: 0.9385942971485743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04977488744372187,
                },
                { start: "0.25", density: 0.01163081540770385 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5696887686062249 },
                { start: 200, end: 500, density: 0.34629105671054256 },
                { start: 500, density: 0.08402017468323252 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6052863436123348 },
                { start: 800, end: 1800, density: 0.3486469477658905 },
                { start: 1800, density: 0.046066708621774664 },
              ],
              percentiles: { p75: 1014 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8393014197763538 },
                { start: 1800, end: 3000, density: 0.12501570549063953 },
                { start: 3000, density: 0.03568287473300673 },
              ],
              percentiles: { p75: 1530 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678631592587792 },
                { start: 100, end: 300, density: 0.022288454062459502 },
                { start: 300, density: 0.009848386678761176 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8762873649836725 },
                { start: 2500, end: 4000, density: 0.0964581763376036 },
                { start: 4000, density: 0.027254458678723933 },
              ],
              percentiles: { p75: 1951 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1530,
        lcp: 1951,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515910543,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6873373316736451 },
                { start: 800, end: 1800, density: 0.28222247369016634 },
                { start: 1800, density: 0.030440194636188703 },
              ],
              percentiles: { p75: 869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.900749692290478 },
                { start: 1800, end: 3000, density: 0.08000447577486852 },
                { start: 3000, density: 0.019245831934653523 },
              ],
              percentiles: { p75: 1344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9791619734174364 },
                { start: 100, end: 300, density: 0.014530299617030862 },
                { start: 300, density: 0.006307726965532791 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9186605545617174 },
                { start: 2500, end: 4000, density: 0.06557468694096603 },
                { start: 4000, density: 0.015764758497316626 },
              ],
              percentiles: { p75: 1685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9073949955317246,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07953529937444147,
                },
                { start: "0.25", density: 0.01306970509383377 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.646241103202847 },
                { start: 200, end: 500, density: 0.29359430604982206 },
                { start: 500, density: 0.060164590747330965 },
              ],
              percentiles: { p75: 245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1344,
        lcp: 1685,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515911009,
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
                  density: 0.9138412017167382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07467811158798283,
                },
                { start: "0.25", density: 0.011480686695278977 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5226301369863012 },
                { start: 200, end: 500, density: 0.3614246575342466 },
                { start: 500, density: 0.11594520547945214 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6714331448084516 },
                { start: 800, end: 1800, density: 0.28577526411268805 },
                { start: 1800, density: 0.04279159107886022 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8124127563620742 },
                { start: 1800, end: 3000, density: 0.13497261891978948 },
                { start: 3000, density: 0.052614624718136264 },
              ],
              percentiles: { p75: 1608 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9414028144239228 },
                { start: 100, end: 300, density: 0.03935795954265611 },
                { start: 300, density: 0.019239226033421153 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.866342973001814 },
                { start: 2500, end: 4000, density: 0.09310639206061253 },
                { start: 4000, density: 0.04055063493757355 },
              ],
              percentiles: { p75: 1951 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1608,
        lcp: 1951,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515911630,
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
                  density: 0.9497813056860521,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030455208164587712,
                },
                { start: "0.25", density: 0.01976348614936013 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6106800547695108 },
                { start: 200, end: 500, density: 0.2705005324813627 },
                { start: 500, density: 0.11881941274912633 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8448247490538093 },
                { start: 800, end: 1800, density: 0.14102353134770446 },
                { start: 1800, density: 0.014151719598486188 },
              ],
              percentiles: { p75: 702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9354090758529314 },
                { start: 1800, end: 3000, density: 0.045213646902947977 },
                { start: 3000, density: 0.01937727724412063 },
              ],
              percentiles: { p75: 1210 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9425343018563356 },
                { start: 100, end: 300, density: 0.028894269572235676 },
                { start: 300, density: 0.028571428571428713 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.937089356110381 },
                { start: 2500, end: 4000, density: 0.048784494086727984 },
                { start: 4000, density: 0.01412614980289092 },
              ],
              percentiles: { p75: 1578 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1210,
        lcp: 1578,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515912145,
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
                { start: 0, end: 800, density: 0.7036839295248264 },
                { start: 800, end: 1800, density: 0.23491724506139877 },
                { start: 1800, density: 0.06139882541377489 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.855848654409805 },
                { start: 1800, end: 3000, density: 0.10231814548361305 },
                { start: 3000, density: 0.04183320010658202 },
              ],
              percentiles: { p75: 1404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9449601255066021 },
                { start: 100, end: 300, density: 0.03595241208001046 },
                { start: 300, density: 0.01908746241338748 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8752658160552896 },
                { start: 2500, end: 4000, density: 0.09097554492291335 },
                { start: 4000, density: 0.03375863902179696 },
              ],
              percentiles: { p75: 1866 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9647245342845819,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021931562954155104,
                },
                { start: "0.25", density: 0.013343902761263056 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47238709677419416 },
                { start: 200, end: 500, density: 0.391870967741936 },
                { start: 500, density: 0.13574193548386976 },
              ],
              percentiles: { p75: 343 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1404,
        lcp: 1866,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1653515912726,
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
                { start: 0, end: 800, density: 0.6921631272317235 },
                { start: 800, end: 1800, density: 0.26855854162751364 },
                { start: 1800, density: 0.039278331140763095 },
              ],
              percentiles: { p75: 914 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.869451208091403 },
                { start: 1800, end: 3000, density: 0.10020603109196483 },
                { start: 3000, density: 0.030342760816632258 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.938195991091314 },
                { start: 100, end: 300, density: 0.030809205642167773 },
                { start: 300, density: 0.030994803266518167 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8815740045078886 },
                { start: 2500, end: 4000, density: 0.08987603305785122 },
                { start: 4000, density: 0.028549962434260074 },
              ],
              percentiles: { p75: 1940 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9582720588235293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025735294117647054,
                },
                { start: "0.25", density: 0.015992647058823535 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5204118497109825 },
                { start: 200, end: 500, density: 0.3320086705202312 },
                { start: 500, density: 0.14757947976878633 },
              ],
              percentiles: { p75: 325 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1439,
        lcp: 1940,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515913395,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.862635520286129 },
                { start: 1800, end: 3000, density: 0.09858052978652058 },
                { start: 3000, density: 0.038783949927350465 },
              ],
              percentiles: { p75: 1478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534438056588886 },
                { start: 100, end: 300, density: 0.025476270995378206 },
                { start: 300, density: 0.021079923345733175 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8751814223512338 },
                { start: 2500, end: 4000, density: 0.09154850954560681 },
                { start: 4000, density: 0.03327006810315942 },
              ],
              percentiles: { p75: 1919 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9333555852247442,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05829995549621718,
                },
                { start: "0.25", density: 0.008344459279038718 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6124263643436698 },
                { start: 200, end: 500, density: 0.3063243303323329 },
                { start: 500, density: 0.08124930532399736 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5837245696400625 },
                { start: 800, end: 1800, density: 0.36697965571205005 },
                { start: 1800, density: 0.04929577464788753 },
              ],
              percentiles: { p75: 1001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1478,
        lcp: 1919,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515913840,
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
                  density: 0.9800221975582686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.00900234307559502,
                },
                { start: "0.25", density: 0.010975459366136399 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5607704498354262 },
                { start: 200, end: 500, density: 0.3546263562111424 },
                { start: 500, density: 0.08460319395343131 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6949278045168458 },
                { start: 800, end: 1800, density: 0.24892015302974219 },
                { start: 1800, density: 0.05615204245341208 },
              ],
              percentiles: { p75: 895 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8215974122916151 },
                { start: 1800, end: 3000, density: 0.11134610599651658 },
                { start: 3000, density: 0.0670564817118685 },
              ],
              percentiles: { p75: 1524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603578973530509 },
                { start: 100, end: 300, density: 0.022989934136945448 },
                { start: 300, density: 0.016652168510003704 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8505276225946619 },
                { start: 2500, end: 4000, density: 0.1032898820608318 },
                { start: 4000, density: 0.04618249534450637 },
              ],
              percentiles: { p75: 1952 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1524,
        lcp: 1952,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515914271,
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
                  density: 0.8836071303739952,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08924618431783761,
                },
                { start: "0.25", density: 0.0271466853081673 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5678884278469344 },
                { start: 200, end: 500, density: 0.31996311664361476 },
                { start: 500, density: 0.11214845550945081 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5944373327126733 },
                { start: 800, end: 1800, density: 0.3636681019434423 },
                { start: 1800, density: 0.041894565343884464 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7841491841491837 },
                { start: 1800, end: 3000, density: 0.16282051282051282 },
                { start: 3000, density: 0.05303030303030347 },
              ],
              percentiles: { p75: 1708 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536971415072052 },
                { start: 100, end: 300, density: 0.02669501535553981 },
                { start: 300, density: 0.019607843137254957 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8253124634972547 },
                { start: 2500, end: 4000, density: 0.12808083167854226 },
                { start: 4000, density: 0.046606704824202976 },
              ],
              percentiles: { p75: 2171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1708,
        lcp: 2171,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515914710,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6934131736526948 },
                { start: 800, end: 1800, density: 0.2784431137724552 },
                { start: 1800, density: 0.02814371257485013 },
              ],
              percentiles: { p75: 896 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9008288928359978 },
                { start: 1800, end: 3000, density: 0.07756068679692125 },
                { start: 3000, density: 0.02161042036708106 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9549916930977193 },
                { start: 100, end: 300, density: 0.020691738408095444 },
                { start: 300, density: 0.02431656849418533 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9193832599118945 },
                { start: 2500, end: 4000, density: 0.060205580029368634 },
                { start: 4000, density: 0.02041116005873696 },
              ],
              percentiles: { p75: 1716 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9523393091386095,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033814312782393226,
                },
                { start: "0.25", density: 0.013846378078997225 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6354452301919462 },
                { start: 200, end: 500, density: 0.27045749747438275 },
                { start: 500, density: 0.09409727233367106 },
              ],
              percentiles: { p75: 252 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1341,
        lcp: 1716,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515915211,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.41142352792838216 },
                { start: 200, end: 500, density: 0.45189761694616054 },
                { start: 500, density: 0.13667885512545727 },
              ],
              percentiles: { p75: 361 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6477156057494866 },
                { start: 800, end: 1800, density: 0.32636036960985626 },
                { start: 1800, density: 0.025924024640657073 },
              ],
              percentiles: { p75: 926 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8920724656302198 },
                { start: 1800, end: 3000, density: 0.08775536425542849 },
                { start: 3000, density: 0.02017217011435174 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527198779867818 },
                { start: 100, end: 300, density: 0.030249110320284694 },
                { start: 300, density: 0.01703101169293341 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8991424548828874 },
                { start: 2500, end: 4000, density: 0.08268270830666836 },
                { start: 4000, density: 0.018174836810444205 },
              ],
              percentiles: { p75: 1820 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9419404125286478,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0409982174688057,
                },
                { start: "0.25", density: 0.017061370002546473 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1382,
        lcp: 1820,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653515915649,
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
                { start: 0, end: 2500, density: 0.8527811702009545 },
                { start: 2500, end: 4000, density: 0.10025535694459856 },
                { start: 4000, density: 0.04696347285444699 },
              ],
              percentiles: { p75: 1945 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9603499833868646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02735629637833647,
                },
                { start: "0.25", density: 0.012293720234798976 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5840079849173785 },
                { start: 200, end: 500, density: 0.3197294000221805 },
                { start: 500, density: 0.09626261506044087 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.682217038764856 },
                { start: 800, end: 1800, density: 0.2504720648672664 },
                { start: 1800, density: 0.06731089636787758 },
              ],
              percentiles: { p75: 895 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8200199977780248 },
                { start: 1800, end: 3000, density: 0.11920897678035776 },
                { start: 3000, density: 0.060771025441617325 },
              ],
              percentiles: { p75: 1558 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9456840207347307 },
                { start: 100, end: 300, density: 0.020960108181203516 },
                { start: 300, density: 0.03335587108406571 },
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
        fcp: 1558,
        lcp: 1945,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515916147,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5537634408602153 },
                { start: 200, end: 500, density: 0.3592971413585106 },
                { start: 500, density: 0.08693941778127405 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2865637651821862 },
                { start: 800, end: 1800, density: 0.5364372469635628 },
                { start: 1800, density: 0.17699898785425117 },
              ],
              percentiles: { p75: 1561 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5012790995139411 },
                { start: 1800, end: 3000, density: 0.3094141724226139 },
                { start: 3000, density: 0.1893067280634451 },
              ],
              percentiles: { p75: 2698 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9599139090664515 },
                { start: 100, end: 300, density: 0.028786655905299965 },
                { start: 300, density: 0.011299435028248588 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6346818589169111 },
                { start: 2500, end: 4000, density: 0.24318269107668633 },
                { start: 4000, density: 0.12213545000640263 },
              ],
              percentiles: { p75: 2984 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9301414855987873,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019075290550783223,
                },
                { start: "0.25", density: 0.05078322385042946 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2698,
        lcp: 2984,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515916693,
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
                { start: 0, end: 800, density: 0.7878603576207273 },
                { start: 800, end: 1800, density: 0.17224181972995983 },
                { start: 1800, density: 0.03989782264931298 },
              ],
              percentiles: { p75: 748 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8618269812462191 },
                { start: 1800, end: 3000, density: 0.09231699939503936 },
                { start: 3000, density: 0.04585601935874146 },
              ],
              percentiles: { p75: 1403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351489985344404 },
                { start: 100, end: 300, density: 0.03578407425500732 },
                { start: 300, density: 0.0290669272105522 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8836248785228372 },
                { start: 2500, end: 4000, density: 0.0798104956268221 },
                { start: 4000, density: 0.03656462585034063 },
              ],
              percentiles: { p75: 1772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9380733944954129,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03380009657170449,
                },
                { start: "0.25", density: 0.02812650893288264 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.485710883543701 },
                { start: 200, end: 500, density: 0.3849726125267922 },
                { start: 500, density: 0.12931650392950678 },
              ],
              percentiles: { p75: 324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1403,
        lcp: 1772,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515917293,
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
                { start: 0, end: 1800, density: 0.4400997040037392 },
                { start: 1800, end: 3000, density: 0.3184296619411125 },
                { start: 3000, density: 0.24147063405514835 },
              ],
              percentiles: { p75: 2973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9162842221870549 },
                { start: 100, end: 300, density: 0.04589333755341035 },
                { start: 300, density: 0.037822440259534816 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5635402084305479 },
                { start: 2500, end: 4000, density: 0.2782703375330527 },
                { start: 4000, density: 0.15818945403639945 },
              ],
              percentiles: { p75: 3327 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9435569755058574,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031188194127491256,
                },
                { start: "0.25", density: 0.0252548303666514 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47739320236981553 },
                { start: 200, end: 500, density: 0.34190832553788547 },
                { start: 500, density: 0.1806984720922989 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2564181874420046 },
                { start: 800, end: 1800, density: 0.3860191772347668 },
                { start: 1800, density: 0.3575626353232285 },
              ],
              percentiles: { p75: 2137 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2973,
        lcp: 3327,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1653515917851,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5879261884394476 },
                { start: 800, end: 1800, density: 0.3666137113528045 },
                { start: 1800, density: 0.04546010020774783 },
              ],
              percentiles: { p75: 977 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8657594703935269 },
                { start: 1800, end: 3000, density: 0.09966899595439495 },
                { start: 3000, density: 0.03457153365207811 },
              ],
              percentiles: { p75: 1467 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627861427347287 },
                { start: 100, end: 300, density: 0.02166727873668748 },
                { start: 300, density: 0.015546578528583722 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8996437784056012 },
                { start: 2500, end: 4000, density: 0.07406952462842402 },
                { start: 4000, density: 0.026286696965974788 },
              ],
              percentiles: { p75: 1795 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9788586093119883,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010998411340584139,
                },
                { start: "0.25", density: 0.010142979347427594 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.630646910010842 },
                { start: 200, end: 500, density: 0.29586796771473306 },
                { start: 500, density: 0.0734851222744249 },
              ],
              percentiles: { p75: 252 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1467,
        lcp: 1795,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515918391,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.530577187356848 },
                { start: 2500, end: 4000, density: 0.2525194686211633 },
                { start: 4000, density: 0.21690334402198883 },
              ],
              percentiles: { p75: 3758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8607609312890404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09687677455990913,
                },
                { start: "0.25", density: 0.04236229415105049 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43406337371854575 },
                { start: 200, end: 500, density: 0.3309645852749297 },
                { start: 500, density: 0.23497204100652455 },
              ],
              percentiles: { p75: 472 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3871405931627796 },
                { start: 800, end: 1800, density: 0.4075164138555576 },
                { start: 1800, density: 0.20534299298166264 },
              ],
              percentiles: { p75: 1646 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47974900171135115 },
                { start: 1800, end: 3000, density: 0.25282373074728987 },
                { start: 3000, density: 0.267427267541359 },
              ],
              percentiles: { p75: 3140 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9012814428096823 },
                { start: 100, end: 300, density: 0.06359753203607024 },
                { start: 300, density: 0.03512102515424763 },
              ],
              percentiles: { p75: 18 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3140,
        lcp: 3758,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1653515918916,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.389969736273238 },
                { start: 800, end: 1800, density: 0.49870298313878053 },
                { start: 1800, density: 0.11132728058798143 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6211729193617933 },
                { start: 1800, end: 3000, density: 0.2628288055196203 },
                { start: 3000, density: 0.11599827511858629 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351007423117709 },
                { start: 100, end: 300, density: 0.038388123011664894 },
                { start: 300, density: 0.026511134676564272 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7350117345850224 },
                { start: 2500, end: 4000, density: 0.20610198421164933 },
                { start: 4000, density: 0.058886281203328214 },
              ],
              percentiles: { p75: 2667 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9633891213389122,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020502092050209204,
                },
                { start: "0.25", density: 0.016108786610878667 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6430093776641099 },
                { start: 200, end: 500, density: 0.24914748508098933 },
                { start: 500, density: 0.10784313725490077 },
              ],
              percentiles: { p75: 266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2667,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515919439,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36975575552179546 },
                { start: 1800, end: 3000, density: 0.3238284445483234 },
                { start: 3000, density: 0.3064157999298812 },
              ],
              percentiles: { p75: 3402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654845214090856 },
                { start: 100, end: 300, density: 0.02526390700984462 },
                { start: 300, density: 0.009251571581069866 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4925791749444906 },
                { start: 2500, end: 4000, density: 0.31015542830431275 },
                { start: 4000, density: 0.19726539675119664 },
              ],
              percentiles: { p75: 3704 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9624505928853755,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015810276679841896,
                },
                { start: "0.25", density: 0.02173913043478259 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.497164680013887 },
                { start: 200, end: 500, density: 0.37958569609998843 },
                { start: 500, density: 0.12324962388612465 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2308228730822875 },
                { start: 800, end: 1800, density: 0.5119711761971181 },
                { start: 1800, density: 0.2572059507205943 },
              ],
              percentiles: { p75: 1868 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3402,
        lcp: 3704,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653515920091,
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
                  density: 0.9633891213389122,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020502092050209204,
                },
                { start: "0.25", density: 0.016108786610878667 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6430093776641099 },
                { start: 200, end: 500, density: 0.24914748508098933 },
                { start: 500, density: 0.10784313725490077 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.389969736273238 },
                { start: 800, end: 1800, density: 0.49870298313878053 },
                { start: 1800, density: 0.11132728058798143 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6211729193617933 },
                { start: 1800, end: 3000, density: 0.2628288055196203 },
                { start: 3000, density: 0.11599827511858629 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351007423117709 },
                { start: 100, end: 300, density: 0.038388123011664894 },
                { start: 300, density: 0.026511134676564272 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7350117345850224 },
                { start: 2500, end: 4000, density: 0.20610198421164933 },
                { start: 4000, density: 0.058886281203328214 },
              ],
              percentiles: { p75: 2667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2667,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515920713,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9376858128195982,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02200023784040909,
                },
                { start: "0.25", density: 0.04031394933999285 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5751539297356036 },
                { start: 200, end: 500, density: 0.3280212483399738 },
                { start: 500, density: 0.0968248219244225 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43678298279158656 },
                { start: 800, end: 1800, density: 0.4233986615678772 },
                { start: 1800, density: 0.1398183556405363 },
              ],
              percentiles: { p75: 1371 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.610279142206779 },
                { start: 1800, end: 3000, density: 0.22343356894692631 },
                { start: 3000, density: 0.16628728884629468 },
              ],
              percentiles: { p75: 2407 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.948989530070611 },
                { start: 100, end: 300, density: 0.03165327489651814 },
                { start: 300, density: 0.019357195032870762 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7063625450180072 },
                { start: 2500, end: 4000, density: 0.16458583433373347 },
                { start: 4000, density: 0.1290516206482594 },
              ],
              percentiles: { p75: 2795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2407,
        lcp: 2795,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515921219,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5910691966821953 },
                { start: 200, end: 500, density: 0.2883763208726281 },
                { start: 500, density: 0.12055448244517658 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44384180790960515 },
                { start: 800, end: 1800, density: 0.3753672316384187 },
                { start: 1800, density: 0.1807909604519763 },
              ],
              percentiles: { p75: 1529 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6236170693158724 },
                { start: 1800, end: 3000, density: 0.23583201625649125 },
                { start: 3000, density: 0.14055091442763645 },
              ],
              percentiles: { p75: 2342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9372186959030583 },
                { start: 100, end: 300, density: 0.04108482400461628 },
                { start: 300, density: 0.02169648009232548 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7296321372150754 },
                { start: 2500, end: 4000, density: 0.18821936357481378 },
                { start: 4000, density: 0.08214849921011082 },
              ],
              percentiles: { p75: 2616 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9615557553956835,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01888489208633094,
                },
                { start: "0.25", density: 0.01955935251798559 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2342,
        lcp: 2616,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515921714,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5990935815776572 },
                { start: 1800, end: 3000, density: 0.27082312591866686 },
                { start: 3000, density: 0.13008329250367592 },
              ],
              percentiles: { p75: 2315 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.969108561341571 },
                { start: 100, end: 300, density: 0.025217500945656283 },
                { start: 300, density: 0.005673937712772661 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7344594594594591 },
                { start: 2500, end: 4000, density: 0.15976658476658465 },
                { start: 4000, density: 0.10577395577395629 },
              ],
              percentiles: { p75: 2642 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9709245742092457,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014720194647201949,
                },
                { start: "0.25", density: 0.01435523114355231 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6832722832722832 },
                { start: 200, end: 500, density: 0.2650793650793651 },
                { start: 500, density: 0.05164835164835171 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39693542502736223 },
                { start: 800, end: 1800, density: 0.4748875106408852 },
                { start: 1800, density: 0.12817706433175255 },
              ],
              percentiles: { p75: 1355 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2315,
        lcp: 2642,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515922220,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.573845566721791 },
                { start: 200, end: 500, density: 0.3486833736165883 },
                { start: 500, density: 0.07747105966162075 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4559899117276165 },
                { start: 800, end: 1800, density: 0.4277427490542242 },
                { start: 1800, density: 0.11626733921815928 },
              ],
              percentiles: { p75: 1293 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6078629032258057 },
                { start: 1800, end: 3000, density: 0.2494959677419351 },
                { start: 3000, density: 0.14264112903225903 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692638502403238 },
                { start: 100, end: 300, density: 0.02061725271945358 },
                { start: 300, density: 0.010118897040222632 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7134902556314848 },
                { start: 2500, end: 4000, density: 0.190078461149076 },
                { start: 4000, density: 0.09643128321943917 },
              ],
              percentiles: { p75: 2714 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.957125 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018875000000000003,
                },
                { start: "0.25", density: 0.024000000000000018 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2714,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515922877,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5138767890479149 },
                { start: 800, end: 1800, density: 0.37535780958307363 },
                { start: 1800, density: 0.11076540136901146 },
              ],
              percentiles: { p75: 1194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6964084595169552 },
                { start: 1800, end: 3000, density: 0.19046427230634425 },
                { start: 3000, density: 0.11312726817670055 },
              ],
              percentiles: { p75: 2013 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9567948717948719 },
                { start: 100, end: 300, density: 0.03538461538461539 },
                { start: 300, density: 0.007820512820512816 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7697994987468662 },
                { start: 2500, end: 4000, density: 0.1398496240601502 },
                { start: 4000, density: 0.09035087719298375 },
              ],
              percentiles: { p75: 2419 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.959692422175369,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014510728016867168,
                },
                { start: "0.25", density: 0.025796849807763866 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5469948058372489 },
                { start: 200, end: 500, density: 0.3149888696512488 },
                { start: 500, density: 0.13801632451150223 },
              ],
              percentiles: { p75: 320 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2013,
        lcp: 2419,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515923565,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6162393162393162 },
                { start: 200, end: 500, density: 0.3324786324786323 },
                { start: 500, density: 0.0512820512820515 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4196962151394421 },
                { start: 800, end: 1800, density: 0.496887450199203 },
                { start: 1800, density: 0.0834163346613549 },
              ],
              percentiles: { p75: 1147 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6599054255848679 },
                { start: 1800, end: 3000, density: 0.2445246391239422 },
                { start: 3000, density: 0.09556993529119005 },
              ],
              percentiles: { p75: 2036 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9823752711496746 },
                { start: 100, end: 300, density: 0.01274403470715835 },
                { start: 300, density: 0.004880694143167028 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7891693608555087 },
                { start: 2500, end: 4000, density: 0.14517532952001985 },
                { start: 4000, density: 0.06565530962447148 },
              ],
              percentiles: { p75: 2342 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.966460396039604,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015594059405940598,
                },
                { start: "0.25", density: 0.017945544554455458 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2036,
        lcp: 2342,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515924176,
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
                { start: 0, end: 200, density: 0.5472435638226179 },
                { start: 200, end: 500, density: 0.37700498719503994 },
                { start: 500, density: 0.07575144898234229 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3022550441777662 },
                { start: 800, end: 1800, density: 0.46960305947514214 },
                { start: 1800, density: 0.22814189634709156 },
              ],
              percentiles: { p75: 1765 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4962854868665425 },
                { start: 1800, end: 3000, density: 0.2983550013266116 },
                { start: 3000, density: 0.20535951180684595 },
              ],
              percentiles: { p75: 2758 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644905763452609 },
                { start: 100, end: 300, density: 0.02772466539196941 },
                { start: 300, density: 0.007784758262769743 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6302990033222591 },
                { start: 2500, end: 4000, density: 0.22192691029900335 },
                { start: 4000, density: 0.14777408637873757 },
              ],
              percentiles: { p75: 3118 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9416557161629436,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027069645203679372,
                },
                { start: "0.25", density: 0.031274638633377094 },
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
        fcp: 2758,
        lcp: 3118,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515924730,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3731196400955995 },
                { start: 800, end: 1800, density: 0.44214817938984957 },
                { start: 1800, density: 0.18473218051455098 },
              ],
              percentiles: { p75: 1543 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5826322543847133 },
                { start: 1800, end: 3000, density: 0.24454584343362296 },
                { start: 3000, density: 0.1728219021816636 },
              ],
              percentiles: { p75: 2483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8804185351270557 },
                { start: 100, end: 300, density: 0.05351270553064278 },
                { start: 300, density: 0.06606875934230165 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6635666619338342 },
                { start: 2500, end: 4000, density: 0.17769416441857133 },
                { start: 4000, density: 0.15873917364759454 },
              ],
              percentiles: { p75: 3044 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8895291637385805,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02853127196064652,
                },
                { start: "0.25", density: 0.08193956430077308 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5007259001161432 },
                { start: 200, end: 500, density: 0.3099593495934955 },
                { start: 500, density: 0.18931475029036152 },
              ],
              percentiles: { p75: 381 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2483,
        lcp: 3044,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1653515925353,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6174120285994672 },
                { start: 200, end: 500, density: 0.3385672227674191 },
                { start: 500, density: 0.04402074863311378 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2735654327783129 },
                { start: 800, end: 1800, density: 0.5578643181505434 },
                { start: 1800, density: 0.16857024907114368 },
              ],
              percentiles: { p75: 1570 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48976248976248943 },
                { start: 1800, end: 3000, density: 0.33019383019383003 },
                { start: 3000, density: 0.18004368004368052 },
              ],
              percentiles: { p75: 2605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9760160850208244 },
                { start: 100, end: 300, density: 0.017952032170041654 },
                { start: 300, density: 0.006031882809133993 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6516494002181025 },
                { start: 2500, end: 4000, density: 0.24366139585605234 },
                { start: 4000, density: 0.10468920392584512 },
              ],
              percentiles: { p75: 2925 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9436161561398754,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024939007861209006,
                },
                { start: "0.25", density: 0.03144483599891569 },
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
        fcp: 2605,
        lcp: 2925,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515925942,
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
                  density: 0.8449084412684235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10205448861098708,
                },
                { start: "0.25", density: 0.0530370701205895 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6527916527916533 },
                { start: 200, end: 500, density: 0.25996225996226013 },
                { start: 500, density: 0.0872460872460866 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4645952943825282 },
                { start: 800, end: 1800, density: 0.4170888213441404 },
                { start: 1800, density: 0.11831588427333149 },
              ],
              percentiles: { p75: 1302 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7046319087044075 },
                { start: 1800, end: 3000, density: 0.18583575744014302 },
                { start: 3000, density: 0.10953233385544946 },
              ],
              percentiles: { p75: 2022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9537016074258545 },
                { start: 100, end: 300, density: 0.035884084220058864 },
                { start: 300, density: 0.010414308354086578 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7699462124607798 },
                { start: 2500, end: 4000, density: 0.1397355445988346 },
                { start: 4000, density: 0.09031824294038561 },
              ],
              percentiles: { p75: 2412 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2022,
        lcp: 2412,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653515926559,
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
                { start: "0.00", end: "0.10", density: 0.8438 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08599999999999998,
                },
                { start: "0.25", density: 0.0702 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8194361127774448 },
                { start: 200, end: 500, density: 0.10947810437912422 },
                { start: 500, density: 0.07108578284343112 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24860000000000004 },
                { start: 800, end: 1800, density: 0.4809 },
                { start: 1800, density: 0.2705 },
              ],
              percentiles: { p75: 1940 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.0659000000000003 },
                { start: 1800, end: 3000, density: 0.35140000000000154 },
                { start: 3000, density: 0.5826999999999982 },
              ],
              percentiles: { p75: 5401 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.19030000000000008 },
                { start: 2500, end: 4000, density: 0.35450000000000015 },
                { start: 4000, density: 0.45519999999999977 },
              ],
              percentiles: { p75: 6001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5401, lcp: 6001, cls: "0.05" },
      timestamp: 1653515927171,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5171290711700842 },
                { start: 800, end: 1800, density: 0.376477683956574 },
                { start: 1800, density: 0.10639324487334177 },
              ],
              percentiles: { p75: 1198 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.764324324324324 },
                { start: 1800, end: 3000, density: 0.13969969969969964 },
                { start: 3000, density: 0.0959759759759764 },
              ],
              percentiles: { p75: 1749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623940027036991 },
                { start: 100, end: 300, density: 0.027651468600221215 },
                { start: 300, density: 0.009954528696079618 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8128668982868091 },
                { start: 2500, end: 4000, density: 0.1154905954235054 },
                { start: 4000, density: 0.0716425062896855 },
              ],
              percentiles: { p75: 2140 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8496186844613918,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09973784556720687,
                },
                { start: "0.25", density: 0.050643469971401324 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7397590361445785 },
                { start: 200, end: 500, density: 0.2056626506024096 },
                { start: 500, density: 0.05457831325301186 },
              ],
              percentiles: { p75: 203 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1749,
        lcp: 2140,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653515927789,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9832358674463938,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.004288499025341131,
                },
                { start: "0.25", density: 0.012475633528265109 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6582884500299222 },
                { start: 200, end: 500, density: 0.284460402952324 },
                { start: 500, density: 0.057251147017753835 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3467132053519488 },
                { start: 800, end: 1800, density: 0.4525887143688191 },
                { start: 1800, density: 0.20069808027923222 },
              ],
              percentiles: { p75: 1641 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5843277645186955 },
                { start: 1800, end: 3000, density: 0.2736674622116151 },
                { start: 3000, density: 0.14200477326968947 },
              ],
              percentiles: { p75: 2418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635124298315958 },
                { start: 100, end: 300, density: 0.011627906976744184 },
                { start: 300, density: 0.02485966319166 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.715139052095574 },
                { start: 2500, end: 4000, density: 0.19731688209949083 },
                { start: 4000, density: 0.08754406580493518 },
              ],
              percentiles: { p75: 2785 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2418,
        lcp: 2785,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515928448,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6288910505836569 },
                { start: 1800, end: 3000, density: 0.22726167315175075 },
                { start: 3000, density: 0.14384727626459226 },
              ],
              percentiles: { p75: 2271 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9545226760210472 },
                { start: 100, end: 300, density: 0.030694061638687046 },
                { start: 300, density: 0.014783262340265665 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7233527131782937 },
                { start: 2500, end: 4000, density: 0.16061046511627883 },
                { start: 4000, density: 0.11603682170542733 },
              ],
              percentiles: { p75: 2663 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9320236229962637,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02591298059539592,
                },
                { start: "0.25", density: 0.042063396408340364 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48892171344165447 },
                { start: 200, end: 500, density: 0.35339734121122607 },
                { start: 500, density: 0.1576809453471194 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45814657783161694 },
                { start: 800, end: 1800, density: 0.42749848576620203 },
                { start: 1800, density: 0.1143549364021811 },
              ],
              percentiles: { p75: 1250 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2271,
        lcp: 2663,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515929026,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3551667414386122 },
                { start: 800, end: 1800, density: 0.4088529983550172 },
                { start: 1800, density: 0.23598026020637064 },
              ],
              percentiles: { p75: 1738 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5988328594942384 },
                { start: 1800, end: 3000, density: 0.20754152326799316 },
                { start: 3000, density: 0.1936256172377684 },
              ],
              percentiles: { p75: 2643 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.944693572496263 },
                { start: 100, end: 300, density: 0.03064275037369208 },
                { start: 300, density: 0.024663677130044855 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6599256505576209 },
                { start: 2500, end: 4000, density: 0.20639405204460975 },
                { start: 4000, density: 0.13368029739776932 },
              ],
              percentiles: { p75: 3010 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9605050653354867,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025987373366612835,
                },
                { start: "0.25", density: 0.013507561297900466 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6582430806257519 },
                { start: 200, end: 500, density: 0.26368832731648617 },
                { start: 500, density: 0.078068592057762 },
              ],
              percentiles: { p75: 239 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2643,
        lcp: 3010,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653515929638,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8815 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08289999999999999,
                },
                { start: "0.25", density: 0.03560000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8040391921615677 },
                { start: 200, end: 500, density: 0.16796640671865623 },
                { start: 500, density: 0.027994401119776004 },
              ],
              percentiles: { p75: 174 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6412000000000001 },
                { start: 800, end: 1800, density: 0.32320000000000004 },
                { start: 1800, density: 0.0355999999999999 },
              ],
              percentiles: { p75: 976 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8532293541291742 },
                { start: 1800, end: 3000, density: 0.11117776444711058 },
                { start: 3000, density: 0.03559288142371511 },
              ],
              percentiles: { p75: 1366 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8950209958008398 },
                { start: 2500, end: 4000, density: 0.08148370325934817 },
                { start: 4000, density: 0.023495300939812003 },
              ],
              percentiles: { p75: 1711 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1366, lcp: 1711, cls: "0.02" },
      timestamp: 1653515930208,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5165244035894068 },
                { start: 800, end: 1800, density: 0.3887065003282992 },
                { start: 1800, density: 0.09476909608229407 },
              ],
              percentiles: { p75: 1233 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6999783221331017 },
                { start: 1800, end: 3000, density: 0.22133102102753063 },
                { start: 3000, density: 0.07869065683936757 },
              ],
              percentiles: { p75: 1976 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654717975751187 },
                { start: 100, end: 300, density: 0.023985239852398525 },
                { start: 300, density: 0.010542962572482873 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7740813220265275 },
                { start: 2500, end: 4000, density: 0.17721243748641002 },
                { start: 4000, density: 0.04870624048706254 },
              ],
              percentiles: { p75: 2398 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9392265193370166,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047811304717382076,
                },
                { start: "0.25", density: 0.012962175945601373 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8492204899777281 },
                { start: 200, end: 500, density: 0.12360801781737193 },
                { start: 500, density: 0.027171492204899835 },
              ],
              percentiles: { p75: 145 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1976,
        lcp: 2398,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515931460,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5034490557503094 },
                { start: 1800, end: 3000, density: 0.23453579102114586 },
                { start: 3000, density: 0.26201515322854485 },
              ],
              percentiles: { p75: 3269 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5694744011806095 },
                { start: 2500, end: 4000, density: 0.21233965262799365 },
                { start: 4000, density: 0.21818594619139675 },
              ],
              percentiles: { p75: 3850 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8871 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07780000000000001,
                },
                { start: "0.25", density: 0.03510000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5752354697909489 },
                { start: 200, end: 500, density: 0.3061107282334023 },
                { start: 500, density: 0.11865380197564884 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4523457912075435 },
                { start: 800, end: 1800, density: 0.336021810746337 },
                { start: 1800, density: 0.21163239804611952 },
              ],
              percentiles: { p75: 1747 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3269, lcp: 3850, cls: "0.00" },
      timestamp: 1653515932184,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.79304788213628 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17391804788213627,
                },
                { start: "0.25", density: 0.03303406998158381 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5858161000116834 },
                { start: 200, end: 500, density: 0.27456478560579495 },
                { start: 500, density: 0.1396191143825217 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4577182744021055 },
                { start: 800, end: 1800, density: 0.41549376358851137 },
                { start: 1800, density: 0.1267879620093832 },
              ],
              percentiles: { p75: 1320 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6607390300230938 },
                { start: 1800, end: 3000, density: 0.22147806004618908 },
                { start: 3000, density: 0.11778290993071723 },
              ],
              percentiles: { p75: 2135 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9250877405300738 },
                { start: 100, end: 300, density: 0.040663197385937315 },
                { start: 300, density: 0.03424906208398887 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7111407992565062 },
                { start: 2500, end: 4000, density: 0.1752439591078068 },
                { start: 4000, density: 0.11361524163568698 },
              ],
              percentiles: { p75: 2691 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2135,
        lcp: 2691,
        cls: "0.06",
        fid: 15,
      },
      timestamp: 1653515933174,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.935636216435029,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019700445284037246,
                },
                { start: "0.25", density: 0.044663338280933725 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6455264593562469 },
                { start: 200, end: 500, density: 0.30400981996726695 },
                { start: 500, density: 0.050463720676486266 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4666393778141631 },
                { start: 800, end: 1800, density: 0.40264701869286407 },
                { start: 1800, density: 0.13071360349297284 },
              ],
              percentiles: { p75: 1341 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6785860515900092 },
                { start: 1800, end: 3000, density: 0.19871707383649495 },
                { start: 3000, density: 0.12269687457349575 },
              ],
              percentiles: { p75: 2098 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9719626168224299 },
                { start: 100, end: 300, density: 0.01992853216052776 },
                { start: 300, density: 0.008108851017042331 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7252620117054573 },
                { start: 2500, end: 4000, density: 0.15523342861031694 },
                { start: 4000, density: 0.11950455968422574 },
              ],
              percentiles: { p75: 2685 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2098,
        lcp: 2685,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515933912,
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
                { start: "0.00", end: "0.10", density: 0.9124 },
                { start: "0.10", end: "0.25", density: 0.0638 },
                { start: "0.25", density: 0.023799999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6505000000000001 },
                { start: 200, end: 500, density: 0.2613 },
                { start: 500, density: 0.08819999999999997 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5232999999999993 },
                { start: 800, end: 1800, density: 0.2809999999999997 },
                { start: 1800, density: 0.19570000000000093 },
              ],
              percentiles: { p75: 1549 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6466706658668269 },
                { start: 1800, end: 3000, density: 0.14137172565486905 },
                { start: 3000, density: 0.21195760847830417 },
              ],
              percentiles: { p75: 2749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447944794479448 },
                { start: 100, end: 300, density: 0.0368036803680368 },
                { start: 300, density: 0.018401840184018418 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6623662366236621 },
                { start: 2500, end: 4000, density: 0.1863186318631864 },
                { start: 4000, density: 0.1513151315131514 },
              ],
              percentiles: { p75: 3171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2749,
        lcp: 3171,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515934594,
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
                { start: "0.00", end: "0.10", density: 0.7998 },
                { start: "0.10", end: "0.25", density: 0.1393 },
                { start: "0.25", density: 0.06090000000000001 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6606678664267152 },
                { start: 200, end: 500, density: 0.24485102979404139 },
                { start: 500, density: 0.09448110377924351 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7792779277927794 },
                { start: 800, end: 1800, density: 0.19781978197819783 },
                { start: 1800, density: 0.02290229022902284 },
              ],
              percentiles: { p75: 797 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9099819963992797 },
                { start: 1800, end: 3000, density: 0.06791358271654327 },
                { start: 3000, density: 0.022104420884176957 },
              ],
              percentiles: { p75: 1263 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9459054094590541 },
                { start: 100, end: 300, density: 0.0237976202379762 },
                { start: 300, density: 0.03029697030296966 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.911626512046386 },
                { start: 2500, end: 4000, density: 0.06737978606418076 },
                { start: 4000, density: 0.020993701889433176 },
              ],
              percentiles: { p75: 1788 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1263,
        lcp: 1788,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653515935291,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9768023197680231 },
                { start: 100, end: 300, density: 0.017798220177982202 },
                { start: 300, density: 0.0053994600539945805 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7886999999999993 },
                { start: 2500, end: 4000, density: 0.12929999999999986 },
                { start: 4000, density: 0.08200000000000081 },
              ],
              percentiles: { p75: 2280 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8321000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13899999999999998,
                },
                { start: "0.25", density: 0.028899999999999988 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8066193380661933 },
                { start: 200, end: 500, density: 0.13878612138786123 },
                { start: 500, density: 0.0545945405459455 },
              ],
              percentiles: { p75: 169 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6245122561280639 },
                { start: 800, end: 1800, density: 0.28874437218609295 },
                { start: 1800, density: 0.08674337168584316 },
              ],
              percentiles: { p75: 1084 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7655827913956976 },
                { start: 1800, end: 3000, density: 0.1457728864432216 },
                { start: 3000, density: 0.08864432216108084 },
              ],
              percentiles: { p75: 1739 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1739,
        lcp: 2280,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653515935715,
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
                { start: 0, end: 2500, density: 0.5767500000000004 },
                { start: 2500, end: 4000, density: 0.20795000000000016 },
                { start: 4000, density: 0.2152999999999994 },
              ],
              percentiles: { p75: 3600 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7373737373737373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1301130113011301,
                },
                { start: "0.25", density: 0.13251325132513253 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5957999999999998 },
                { start: 200, end: 500, density: 0.3328999999999999 },
                { start: 500, density: 0.07130000000000024 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43461307738452376 },
                { start: 800, end: 1800, density: 0.32943411317736504 },
                { start: 1800, density: 0.23595280943811123 },
              ],
              percentiles: { p75: 1752 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5176482351764817 },
                { start: 1800, end: 3000, density: 0.20787921207879193 },
                { start: 3000, density: 0.2744725527447263 },
              ],
              percentiles: { p75: 3303 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527952795279528 },
                { start: 100, end: 300, density: 0.039403940394039404 },
                { start: 300, density: 0.007800780078007801 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3303,
        lcp: 3600,
        cls: "0.12",
        fid: 12,
      },
      timestamp: 1653515936114,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.ke" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5838634081017747 },
                { start: 200, end: 500, density: 0.30509987724584325 },
                { start: 500, density: 0.11103671465238196 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2563616071428565 },
                { start: 800, end: 1800, density: 0.47354910714285614 },
                { start: 1800, density: 0.27008928571428736 },
              ],
              percentiles: { p75: 1901 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48627450980392073 },
                { start: 1800, end: 3000, density: 0.27495798319327686 },
                { start: 3000, density: 0.23876750700280233 },
              ],
              percentiles: { p75: 2973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9497430039977156 },
                { start: 100, end: 300, density: 0.0351798972015991 },
                { start: 300, density: 0.015077098800685376 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.552121822864181 },
                { start: 2500, end: 4000, density: 0.2541708655245773 },
                { start: 4000, density: 0.19370731161124172 },
              ],
              percentiles: { p75: 3579 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8184049079754601,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11823759063022868,
                },
                { start: "0.25", density: 0.06335750139431118 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2973,
        lcp: 3579,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653515936720,
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
                  density: 0.7373737373737373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1301130113011301,
                },
                { start: "0.25", density: 0.13251325132513253 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5957999999999998 },
                { start: 200, end: 500, density: 0.3328999999999999 },
                { start: 500, density: 0.07130000000000024 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43461307738452376 },
                { start: 800, end: 1800, density: 0.32943411317736504 },
                { start: 1800, density: 0.23595280943811123 },
              ],
              percentiles: { p75: 1752 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5176482351764817 },
                { start: 1800, end: 3000, density: 0.20787921207879193 },
                { start: 3000, density: 0.2744725527447263 },
              ],
              percentiles: { p75: 3303 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527952795279528 },
                { start: 100, end: 300, density: 0.039403940394039404 },
                { start: 300, density: 0.007800780078007801 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5767500000000004 },
                { start: 2500, end: 4000, density: 0.20795000000000016 },
                { start: 4000, density: 0.2152999999999994 },
              ],
              percentiles: { p75: 3600 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3303,
        lcp: 3600,
        cls: "0.12",
        fid: 12,
      },
      timestamp: 1653515937355,
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
                { start: 0, end: 100, density: 0.9459054094590541 },
                { start: 100, end: 300, density: 0.0237976202379762 },
                { start: 300, density: 0.03029697030296966 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.911626512046386 },
                { start: 2500, end: 4000, density: 0.06737978606418076 },
                { start: 4000, density: 0.020993701889433176 },
              ],
              percentiles: { p75: 1788 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7998 },
                { start: "0.10", end: "0.25", density: 0.1393 },
                { start: "0.25", density: 0.06090000000000001 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6606678664267152 },
                { start: 200, end: 500, density: 0.24485102979404139 },
                { start: 500, density: 0.09448110377924351 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7792779277927794 },
                { start: 800, end: 1800, density: 0.19781978197819783 },
                { start: 1800, density: 0.02290229022902284 },
              ],
              percentiles: { p75: 797 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9099819963992797 },
                { start: 1800, end: 3000, density: 0.06791358271654327 },
                { start: 3000, density: 0.022104420884176957 },
              ],
              percentiles: { p75: 1263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1263,
        lcp: 1788,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653515938983,
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
                { start: 0, end: 1800, density: 0.9245000000000001 },
                { start: 1800, end: 3000, density: 0.05400000000000002 },
                { start: 3000, density: 0.021499999999999887 },
              ],
              percentiles: { p75: 1166 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9523952395239526 },
                { start: 100, end: 300, density: 0.025402540254025406 },
                { start: 300, density: 0.02220222022202218 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9179828068772492 },
                { start: 2500, end: 4000, density: 0.06542383046781287 },
                { start: 4000, density: 0.016593362654937945 },
              ],
              percentiles: { p75: 1722 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8669 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09980000000000001,
                },
                { start: "0.25", density: 0.0333 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5399300349825088 },
                { start: 200, end: 500, density: 0.3238380809595203 },
                { start: 500, density: 0.1362318840579709 },
              ],
              percentiles: { p75: 325 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8521704340868174 },
                { start: 800, end: 1800, density: 0.1230246049209842 },
                { start: 1800, density: 0.024804960992198366 },
              ],
              percentiles: { p75: 670 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1166,
        lcp: 1722,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1653515939590,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7912 },
                { start: 2500, end: 4000, density: 0.1358 },
                { start: 4000, density: 0.073 },
              ],
              percentiles: { p75: 2296 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8816236752649469,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07168566286742652,
                },
                { start: "0.25", density: 0.04669066186762648 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4706470647064705 },
                { start: 200, end: 500, density: 0.3774377437743774 },
                { start: 500, density: 0.15191519151915195 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5534553455345536 },
                { start: 800, end: 1800, density: 0.36163616361636175 },
                { start: 1800, density: 0.08490849084908471 },
              ],
              percentiles: { p75: 1120 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7443511297740447 },
                { start: 1800, end: 3000, density: 0.1682663467306538 },
                { start: 3000, density: 0.08738252349530154 },
              ],
              percentiles: { p75: 1831 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9251925192519251 },
                { start: 100, end: 300, density: 0.04540454045404539 },
                { start: 300, density: 0.029402940294029394 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1831,
        lcp: 2296,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1653515940007,
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
                  density: 0.8396160383961604,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11918808119188083,
                },
                { start: "0.25", density: 0.04119588041195883 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5186481351864811 },
                { start: 200, end: 500, density: 0.3341665833416656 },
                { start: 500, density: 0.14718528147185322 },
              ],
              percentiles: { p75: 339 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6379637963796377 },
                { start: 800, end: 1800, density: 0.282128212821282 },
                { start: 1800, density: 0.07990799079908023 },
              ],
              percentiles: { p75: 1003 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7579726082175334 },
                { start: 1800, end: 3000, density: 0.1507547735679293 },
                { start: 3000, density: 0.09127261821453721 },
              ],
              percentiles: { p75: 1800 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9515854756426929 },
                { start: 100, end: 300, density: 0.030709212763829152 },
                { start: 300, density: 0.017705311593477893 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7964796479647958 },
                { start: 2500, end: 4000, density: 0.12961296129612954 },
                { start: 4000, density: 0.07390739073907468 },
              ],
              percentiles: { p75: 2278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1800,
        lcp: 2278,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653515940449,
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
                { start: 0, end: 200, density: 0.5559332200339897 },
                { start: 200, end: 500, density: 0.3359992002399279 },
                { start: 500, density: 0.10806757972608243 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6787393696848425 },
                { start: 800, end: 1800, density: 0.27983991995998003 },
                { start: 1800, density: 0.0414207103551775 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8181454436330896 },
                { start: 1800, end: 3000, density: 0.1311393418025407 },
                { start: 3000, density: 0.050715214564369615 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9462161351594524 },
                { start: 100, end: 300, density: 0.0361891432570229 },
                { start: 300, density: 0.017594721583524823 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8675999999999998 },
                { start: 2500, end: 4000, density: 0.09299999999999997 },
                { start: 4000, density: 0.039400000000000206 },
              ],
              percentiles: { p75: 1946 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8893889388938893,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0932093209320932,
                },
                { start: "0.25", density: 0.017401740174017417 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 1946,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515940871,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6346038415366146 },
                { start: 2500, end: 4000, density: 0.2661564625850341 },
                { start: 4000, density: 0.09923969587835124 },
              ],
              percentiles: { p75: 3003 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9692969296929693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020202020202020207,
                },
                { start: "0.25", density: 0.010501050105010503 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5678000000000002 },
                { start: 200, end: 500, density: 0.33050000000000007 },
                { start: 500, density: 0.10169999999999972 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4468659402179343 },
                { start: 800, end: 1800, density: 0.3656902929121261 },
                { start: 1800, density: 0.1874437668699397 },
              ],
              percentiles: { p75: 1673 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5643950765535873 },
                { start: 1800, end: 3000, density: 0.3272290603422394 },
                { start: 3000, density: 0.10837586310417334 },
              ],
              percentiles: { p75: 2318 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9295929592959293 },
                { start: 100, end: 300, density: 0.0515051505150515 },
                { start: 300, density: 0.01890189018901909 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2318,
        lcp: 3003,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515941272,
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
                  density: 0.8327665533106622,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1243248649729946,
                },
                { start: "0.25", density: 0.04290858171634322 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7369052379048374 },
                { start: 200, end: 500, density: 0.1828268692522989 },
                { start: 500, density: 0.0802678928428636 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8627862786278627 },
                { start: 800, end: 1800, density: 0.12331233123312334 },
                { start: 1800, density: 0.013901390139013958 },
              ],
              percentiles: { p75: 661 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9455 },
                { start: 1800, end: 3000, density: 0.039699999999999985 },
                { start: 3000, density: 0.014800000000000056 },
              ],
              percentiles: { p75: 1106 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637927585517103 },
                { start: 100, end: 300, density: 0.01850370074014803 },
                { start: 300, density: 0.017703540708141716 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9453890778155631 },
                { start: 2500, end: 4000, density: 0.04240848169633925 },
                { start: 4000, density: 0.01220244048809765 },
              ],
              percentiles: { p75: 1524 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1106,
        lcp: 1524,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653515941747,
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
                  density: 0.8923107689231077,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09359064093590642,
                },
                { start: "0.25", density: 0.014098590140985892 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6751675167516751 },
                { start: 200, end: 500, density: 0.2684268426842684 },
                { start: 500, density: 0.056405640564056385 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6998699869987 },
                { start: 800, end: 1800, density: 0.2708270827082708 },
                { start: 1800, density: 0.029302930293029248 },
              ],
              percentiles: { p75: 862 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9018509254627315 },
                { start: 1800, end: 3000, density: 0.07753876938469235 },
                { start: 3000, density: 0.020610305152576107 },
              ],
              percentiles: { p75: 1343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9808980898089809 },
                { start: 100, end: 300, density: 0.013201320132013201 },
                { start: 300, density: 0.005900590059005901 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9117323464692941 },
                { start: 2500, end: 4000, density: 0.06986397279455894 },
                { start: 4000, density: 0.01840368073614695 },
              ],
              percentiles: { p75: 1730 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1343,
        lcp: 1730,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515942143,
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
                { start: 0, end: 800, density: 0.7345265473452655 },
                { start: 800, end: 1800, density: 0.22817718228177186 },
                { start: 1800, density: 0.037296270372962854 },
              ],
              percentiles: { p75: 840 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8903999999999995 },
                { start: 1800, end: 3000, density: 0.07459999999999997 },
                { start: 3000, density: 0.03500000000000042 },
              ],
              percentiles: { p75: 1305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637000000000001 },
                { start: 100, end: 300, density: 0.0188 },
                { start: 300, density: 0.017499999999999977 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8742374237423743 },
                { start: 2500, end: 4000, density: 0.08825882588258828 },
                { start: 4000, density: 0.03750375037503748 },
              ],
              percentiles: { p75: 1865 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7936 },
                { start: "0.10", end: "0.25", density: 0.1666 },
                { start: "0.25", density: 0.03979999999999999 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.689 },
                { start: 200, end: 500, density: 0.21219999999999997 },
                { start: 500, density: 0.09880000000000018 },
              ],
              percentiles: { p75: 239 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1305,
        lcp: 1865,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1653515942562,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6449644964496448 },
                { start: 200, end: 500, density: 0.28512851285128504 },
                { start: 500, density: 0.06990699069907003 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6267373262673734 },
                { start: 800, end: 1800, density: 0.3318668133186684 },
                { start: 1800, density: 0.04139586041395829 },
              ],
              percentiles: { p75: 993 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8539853985398537 },
                { start: 1800, end: 3000, density: 0.11451145114511443 },
                { start: 3000, density: 0.03150315031503179 },
              ],
              percentiles: { p75: 1487 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9752024797520248 },
                { start: 100, end: 300, density: 0.017198280171982803 },
                { start: 300, density: 0.007599240075992402 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8738752249550091 },
                { start: 2500, end: 4000, density: 0.09793041391721659 },
                { start: 4000, density: 0.02819436112777441 },
              ],
              percentiles: { p75: 1968 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9410941094109411,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.045904590459045914,
                },
                { start: "0.25", density: 0.013001300130013004 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1487,
        lcp: 1968,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515943024,
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
                  density: 0.8677000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0858 },
                { start: "0.25", density: 0.046499999999999986 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5665433456654343 },
                { start: 200, end: 500, density: 0.3226677332266778 },
                { start: 500, density: 0.110788921107888 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7258177453235968 },
                { start: 800, end: 1800, density: 0.22076622986896066 },
                { start: 1800, density: 0.05341602480744261 },
              ],
              percentiles: { p75: 850 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8714257148570285 },
                { start: 1800, end: 3000, density: 0.09228154369126172 },
                { start: 3000, density: 0.03629274145170974 },
              ],
              percentiles: { p75: 1350 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561999999999999 },
                { start: 100, end: 300, density: 0.028299999999999995 },
                { start: 300, density: 0.015500000000000073 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8816144843453037 },
                { start: 2500, end: 4000, density: 0.08687606281884565 },
                { start: 4000, density: 0.03150945283585069 },
              ],
              percentiles: { p75: 1821 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1350,
        lcp: 1821,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653515943490,
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
                { start: "0.00", end: "0.10", density: 0.9393 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032799999999999996,
                },
                { start: "0.25", density: 0.02789999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5523552355235523 },
                { start: 200, end: 500, density: 0.335033503350335 },
                { start: 500, density: 0.11261126112611276 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8002999999999999 },
                { start: 800, end: 1800, density: 0.16319999999999993 },
                { start: 1800, density: 0.036500000000000137 },
              ],
              percentiles: { p75: 727 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8701999999999999 },
                { start: 1800, end: 3000, density: 0.08580000000000002 },
                { start: 3000, density: 0.044000000000000074 },
              ],
              percentiles: { p75: 1365 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453781512605041 },
                { start: 100, end: 300, density: 0.029911964785914364 },
                { start: 300, density: 0.02470988395358154 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.885527105421084 },
                { start: 2500, end: 4000, density: 0.07746549309861973 },
                { start: 4000, density: 0.03700740148029613 },
              ],
              percentiles: { p75: 1763 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1365,
        lcp: 1763,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515943902,
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
                { start: 0, end: 200, density: 0.6748674867486748 },
                { start: 200, end: 500, density: 0.2586258625862585 },
                { start: 500, density: 0.06650665066506663 },
              ],
              percentiles: { p75: 233 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6122612261226122 },
                { start: 800, end: 1800, density: 0.34663466346634664 },
                { start: 1800, density: 0.04110411041104118 },
              ],
              percentiles: { p75: 952 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8748874887488746 },
                { start: 1800, end: 3000, density: 0.09270927092709268 },
                { start: 3000, density: 0.03240324032403278 },
              ],
              percentiles: { p75: 1425 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672934586917383 },
                { start: 100, end: 300, density: 0.01880376075215043 },
                { start: 300, density: 0.013902780556111261 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8916608339166082 },
                { start: 2500, end: 4000, density: 0.07934206579342067 },
                { start: 4000, density: 0.028997100289971114 },
              ],
              percentiles: { p75: 1831 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9581000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029300000000000007,
                },
                { start: "0.25", density: 0.012599999999999995 },
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
        fcp: 1425,
        lcp: 1831,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653515944396,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9481948194819483,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032303230323032305,
                },
                { start: "0.25", density: 0.019501950195019487 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6348365163483652 },
                { start: 200, end: 500, density: 0.2569743025697431 },
                { start: 500, density: 0.10818918108189167 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4657000000000005 },
                { start: 800, end: 1800, density: 0.36170000000000035 },
                { start: 1800, density: 0.17259999999999912 },
              ],
              percentiles: { p75: 1495 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6416716656668657 },
                { start: 1800, end: 3000, density: 0.22575484903019366 },
                { start: 3000, density: 0.1325734853029407 },
              ],
              percentiles: { p75: 2298 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9446055394460554 },
                { start: 100, end: 300, density: 0.035996400359964015 },
                { start: 300, density: 0.019398060193980615 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7384238423842385 },
                { start: 2500, end: 4000, density: 0.18136813681368152 },
                { start: 4000, density: 0.08020802080207999 },
              ],
              percentiles: { p75: 2570 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2298,
        lcp: 2570,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515944911,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6310737852429518 },
                { start: 200, end: 500, density: 0.2383523295340933 },
                { start: 500, density: 0.13057388522295485 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2927000000000008 },
                { start: 800, end: 1800, density: 0.3938000000000011 },
                { start: 1800, density: 0.3134999999999981 },
              ],
              percentiles: { p75: 2000 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5141457562731173 },
                { start: 1800, end: 3000, density: 0.28421473557932575 },
                { start: 3000, density: 0.2016395081475569 },
              ],
              percentiles: { p75: 2721 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9389122175564886 },
                { start: 100, end: 300, density: 0.03309338132373524 },
                { start: 300, density: 0.027994401119776142 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6037103710371027 },
                { start: 2500, end: 4000, density: 0.24747474747474701 },
                { start: 4000, density: 0.14881488148815028 },
              ],
              percentiles: { p75: 3183 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7891999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12819999999999998,
                },
                { start: "0.25", density: 0.08260000000000005 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2721,
        lcp: 3183,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1653515945381,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6324000000000002 },
                { start: 200, end: 500, density: 0.29350000000000004 },
                { start: 500, density: 0.07409999999999996 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7173151945583677 },
                { start: 800, end: 1800, density: 0.2317695308592579 },
                { start: 1800, density: 0.050915274582374465 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8387838783878389 },
                { start: 1800, end: 3000, density: 0.09900990099009903 },
                { start: 3000, density: 0.06220622062206206 },
              ],
              percentiles: { p75: 1452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9680968096809681 },
                { start: 100, end: 300, density: 0.0185018501850185 },
                { start: 300, density: 0.01340134013401338 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8519555866760025 },
                { start: 2500, end: 4000, density: 0.10003000900270079 },
                { start: 4000, density: 0.04801440432129676 },
              ],
              percentiles: { p75: 1948 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9608 },
                { start: "0.10", end: "0.25", density: 0.0277 },
                { start: "0.25", density: 0.01150000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1452,
        lcp: 1948,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653515945798,
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
                  density: 0.9077092290770922,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0803919608039196,
                },
                { start: "0.25", density: 0.011898810118988114 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6483351664833513 },
                { start: 200, end: 500, density: 0.27697230276972284 },
                { start: 500, density: 0.07469253074692585 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5958212536239126 },
                { start: 800, end: 1800, density: 0.35729281215635306 },
                { start: 1800, density: 0.04688593421973424 },
              ],
              percentiles: { p75: 988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8676264747050585 },
                { start: 1800, end: 3000, density: 0.09508098380323929 },
                { start: 3000, density: 0.03729254149170216 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586917383476696 },
                { start: 100, end: 300, density: 0.02260452090418084 },
                { start: 300, density: 0.018703740748149532 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8750750150029999 },
                { start: 2500, end: 4000, density: 0.09041808361672327 },
                { start: 4000, density: 0.03450690138027676 },
              ],
              percentiles: { p75: 1923 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1463,
        lcp: 1923,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653515946195,
    },
    {
      url: "https://www.yaracanada.ca/",
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
                  density: 0.7734773477347735,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17131713171317134,
                },
                { start: "0.25", density: 0.05520552055205518 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7980000000000004 },
                { start: 200, end: 500, density: 0.13540000000000005 },
                { start: 500, density: 0.06659999999999953 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5300530053005299 },
                { start: 800, end: 1800, density: 0.38663866386638657 },
                { start: 1800, density: 0.0833083308330836 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7288999999999995 },
                { start: 1800, end: 3000, density: 0.1828999999999999 },
                { start: 3000, density: 0.08820000000000046 },
              ],
              percentiles: { p75: 1992 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967 },
                { start: 100, end: 300, density: 0.020499999999999997 },
                { start: 300, density: 0.012500000000000053 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7511748825117492 },
                { start: 2500, end: 4000, density: 0.16753324667533254 },
                { start: 4000, density: 0.08129187081291825 },
              ],
              percentiles: { p75: 2615 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1992, lcp: 2615, cls: "0.08", fid: 9 },
      timestamp: 1653515946610,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7511748825117492 },
                { start: 2500, end: 4000, density: 0.16753324667533254 },
                { start: 4000, density: 0.08129187081291825 },
              ],
              percentiles: { p75: 2615 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7734773477347735,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17131713171317134,
                },
                { start: "0.25", density: 0.05520552055205518 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7980000000000004 },
                { start: 200, end: 500, density: 0.13540000000000005 },
                { start: 500, density: 0.06659999999999953 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5300530053005299 },
                { start: 800, end: 1800, density: 0.38663866386638657 },
                { start: 1800, density: 0.0833083308330836 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7288999999999995 },
                { start: 1800, end: 3000, density: 0.1828999999999999 },
                { start: 3000, density: 0.08820000000000046 },
              ],
              percentiles: { p75: 1992 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967 },
                { start: 100, end: 300, density: 0.020499999999999997 },
                { start: 300, density: 0.012500000000000053 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1992, lcp: 2615, cls: "0.08", fid: 9 },
      timestamp: 1653515947016,
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
                { start: "0.00", end: "0.10", density: 0.9031 },
                { start: "0.10", end: "0.25", density: 0.0454 },
                { start: "0.25", density: 0.05149999999999999 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6365636563656368 },
                { start: 200, end: 500, density: 0.28972897289729 },
                { start: 500, density: 0.07370737073707317 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3168316831683168 },
                { start: 800, end: 1800, density: 0.5303530353035304 },
                { start: 1800, density: 0.1528152815281529 },
              ],
              percentiles: { p75: 1488 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5468999999999995 },
                { start: 1800, end: 3000, density: 0.2858999999999998 },
                { start: 3000, density: 0.1672000000000007 },
              ],
              percentiles: { p75: 2540 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687031296870313 },
                { start: 100, end: 300, density: 0.022597740225977405 },
                { start: 300, density: 0.008699130086991299 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.658218356328733 },
                { start: 2500, end: 4000, density: 0.22090581883623242 },
                { start: 4000, density: 0.12087582483503441 },
              ],
              percentiles: { p75: 2941 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2540,
        lcp: 2941,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653515947566,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9720944188837768 },
                { start: 100, end: 300, density: 0.021904380876175238 },
                { start: 300, density: 0.006001200240048015 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6355999999999992 },
                { start: 2500, end: 4000, density: 0.21069999999999975 },
                { start: 4000, density: 0.1537000000000011 },
              ],
              percentiles: { p75: 3122 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9028097190280973,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.066993300669933,
                },
                { start: "0.25", density: 0.03019698030196978 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6394918475542661 },
                { start: 200, end: 500, density: 0.2946884065219566 },
                { start: 500, density: 0.06581974592377725 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31740000000000007 },
                { start: 800, end: 1800, density: 0.4742 },
                { start: 1800, density: 0.20839999999999995 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5349534953495346 },
                { start: 1800, end: 3000, density: 0.28652865286528645 },
                { start: 3000, density: 0.17851785178517887 },
              ],
              percentiles: { p75: 2616 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2616,
        lcp: 3122,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1653515947980,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7651234876512332 },
                { start: 2500, end: 4000, density: 0.1404859514048592 },
                { start: 4000, density: 0.09439056094390745 },
              ],
              percentiles: { p75: 2432 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9271072892710729,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04159584041595841,
                },
                { start: "0.25", density: 0.03129687031296872 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6132999999999997 },
                { start: 200, end: 500, density: 0.2653999999999999 },
                { start: 500, density: 0.12130000000000027 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5325934813037385 },
                { start: 800, end: 1800, density: 0.36602679464107135 },
                { start: 1800, density: 0.10137972405519013 },
              ],
              percentiles: { p75: 1155 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7192280771922793 },
                { start: 1800, end: 3000, density: 0.17668233176682305 },
                { start: 3000, density: 0.10408959104089759 },
              ],
              percentiles: { p75: 1936 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646070785842831 },
                { start: 100, end: 300, density: 0.028194361127774445 },
                { start: 300, density: 0.007198560287942407 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1936,
        lcp: 2432,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515948374,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8086808680868087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12861286128612862,
                },
                { start: "0.25", density: 0.06270627062706269 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7553244675532446 },
                { start: 200, end: 500, density: 0.18828117188281168 },
                { start: 500, density: 0.05639436056394383 },
              ],
              percentiles: { p75: 198 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.353235323532353 },
                { start: 800, end: 1800, density: 0.43344334433443316 },
                { start: 1800, density: 0.2133213321332139 },
              ],
              percentiles: { p75: 1679 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6216135159452154 },
                { start: 1800, end: 3000, density: 0.2126362091372584 },
                { start: 3000, density: 0.1657502749175263 },
              ],
              percentiles: { p75: 2483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604 },
                { start: 100, end: 300, density: 0.022099999999999998 },
                { start: 300, density: 0.017500000000000022 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6718156368726242 },
                { start: 2500, end: 4000, density: 0.19391121775644837 },
                { start: 4000, density: 0.13427314537092735 },
              ],
              percentiles: { p75: 2981 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2483,
        lcp: 2981,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653515948780,
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
                  density: 0.9276341431726648,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05534623879433545,
                },
                { start: "0.25", density: 0.017019618032999867 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43288201160541584 },
                { start: 200, end: 500, density: 0.39664732430689875 },
                { start: 500, density: 0.17047066408768533 },
              ],
              percentiles: { p75: 376 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6103574223845547 },
                { start: 800, end: 1800, density: 0.2970258283328983 },
                { start: 1800, density: 0.09261674928254686 },
              ],
              percentiles: { p75: 1053 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7330625081902753 },
                { start: 1800, end: 3000, density: 0.16367448565063525 },
                { start: 3000, density: 0.10326300615908936 },
              ],
              percentiles: { p75: 1901 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447071184659837 },
                { start: 100, end: 300, density: 0.03624901497241922 },
                { start: 300, density: 0.01904386656159716 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7920313520574787 },
                { start: 2500, end: 4000, density: 0.13063357282821683 },
                { start: 4000, density: 0.0773350751143046 },
              ],
              percentiles: { p75: 2296 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1901,
        lcp: 2296,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515949189,
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
                  density: 0.8492698539707941,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08631726345269056,
                },
                { start: "0.25", density: 0.06441288257651535 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7054527263631815 },
                { start: 200, end: 500, density: 0.2503251625812906 },
                { start: 500, density: 0.0442221110555279 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29900000000000004 },
                { start: 800, end: 1800, density: 0.5536 },
                { start: 1800, density: 0.14739999999999986 },
              ],
              percentiles: { p75: 1507 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5371537153715368 },
                { start: 1800, end: 3000, density: 0.3094309430943092 },
                { start: 3000, density: 0.1534153415341541 },
              ],
              percentiles: { p75: 2469 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9824947484245273 },
                { start: 100, end: 300, density: 0.012503751125337602 },
                { start: 300, density: 0.00500150045013505 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6639336066393361 },
                { start: 2500, end: 4000, density: 0.22207779222077795 },
                { start: 4000, density: 0.1139886011398859 },
              ],
              percentiles: { p75: 2925 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2469,
        lcp: 2925,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653515949864,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6505000000000001 },
                { start: 200, end: 500, density: 0.2613 },
                { start: 500, density: 0.08819999999999997 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5232999999999993 },
                { start: 800, end: 1800, density: 0.2809999999999997 },
                { start: 1800, density: 0.19570000000000093 },
              ],
              percentiles: { p75: 1560 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6466706658668269 },
                { start: 1800, end: 3000, density: 0.14137172565486905 },
                { start: 3000, density: 0.21195760847830417 },
              ],
              percentiles: { p75: 2640 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447944794479448 },
                { start: 100, end: 300, density: 0.0368036803680368 },
                { start: 300, density: 0.018401840184018418 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6623662366236621 },
                { start: 2500, end: 4000, density: 0.1863186318631864 },
                { start: 4000, density: 0.1513151315131514 },
              ],
              percentiles: { p75: 3172 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9124 },
                { start: "0.10", end: "0.25", density: 0.0638 },
                { start: "0.25", density: 0.023799999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2640,
        lcp: 3172,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515950328,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42901450725362666 },
                { start: 800, end: 1800, density: 0.460330165082541 },
                { start: 1800, density: 0.11065532766383229 },
              ],
              percentiles: { p75: 1299 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6399720055988798 },
                { start: 1800, end: 3000, density: 0.24675064987002587 },
                { start: 3000, density: 0.11327734453109435 },
              ],
              percentiles: { p75: 2184 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.975002499750025 },
                { start: 100, end: 300, density: 0.020497950204979503 },
                { start: 300, density: 0.004499550044995498 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.74425 },
                { start: 2500, end: 4000, density: 0.15204999999999996 },
                { start: 4000, density: 0.10370000000000014 },
              ],
              percentiles: { p75: 2589 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9421942194219423,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0433043304330433,
                },
                { start: "0.25", density: 0.014501450145014498 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7340202060618185 },
                { start: 200, end: 500, density: 0.22176652995898766 },
                { start: 500, density: 0.04421326397919377 },
              ],
              percentiles: { p75: 208 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2184,
        lcp: 2589,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653515950837,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8505999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10729999999999998,
                },
                { start: "0.25", density: 0.04209999999999997 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4925985197039406 },
                { start: 200, end: 500, density: 0.29555911182236444 },
                { start: 500, density: 0.2118423684736949 },
              ],
              percentiles: { p75: 429 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41348269653930747 },
                { start: 800, end: 1800, density: 0.39807961592318425 },
                { start: 1800, density: 0.18843768753750825 },
              ],
              percentiles: { p75: 1577 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5138569284642316 },
                { start: 1800, end: 3000, density: 0.24072036018008974 },
                { start: 3000, density: 0.24542271135567867 },
              ],
              percentiles: { p75: 3011 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9135740722216665 },
                { start: 100, end: 300, density: 0.05581674502350704 },
                { start: 300, density: 0.030609182754826433 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5553610722144421 },
                { start: 2500, end: 4000, density: 0.23959791958391646 },
                { start: 4000, density: 0.20504100820164142 },
              ],
              percentiles: { p75: 3653 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3011,
        lcp: 3653,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1653515951267,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8040391921615677 },
                { start: 200, end: 500, density: 0.16796640671865623 },
                { start: 500, density: 0.027994401119776004 },
              ],
              percentiles: { p75: 164 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6412000000000001 },
                { start: 800, end: 1800, density: 0.32320000000000004 },
                { start: 1800, density: 0.0355999999999999 },
              ],
              percentiles: { p75: 962 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8532293541291742 },
                { start: 1800, end: 3000, density: 0.11117776444711058 },
                { start: 3000, density: 0.03559288142371511 },
              ],
              percentiles: { p75: 1362 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8950209958008398 },
                { start: 2500, end: 4000, density: 0.08148370325934817 },
                { start: 4000, density: 0.023495300939812003 },
              ],
              percentiles: { p75: 1707 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8815 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08289999999999999,
                },
                { start: "0.25", density: 0.03560000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1362, lcp: 1707, cls: "0.05" },
      timestamp: 1653515951682,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6184618461846184 },
                { start: 200, end: 500, density: 0.2754275427542755 },
                { start: 500, density: 0.10611061106110602 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4665399619885972 },
                { start: 800, end: 1800, density: 0.33259977993398065 },
                { start: 1800, density: 0.20086025807742208 },
              ],
              percentiles: { p75: 1701 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5272527252725271 },
                { start: 1800, end: 3000, density: 0.22622262226222611 },
                { start: 3000, density: 0.24652465246524688 },
              ],
              percentiles: { p75: 3237 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5920092009200912 },
                { start: 2500, end: 4000, density: 0.19456945694569436 },
                { start: 4000, density: 0.2134213421342144 },
              ],
              percentiles: { p75: 3814 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8871 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07780000000000001,
                },
                { start: "0.25", density: 0.03510000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3237, lcp: 3814, cls: "0.01" },
      timestamp: 1653515952094,
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
                  density: 0.8210999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11729999999999999,
                },
                { start: "0.25", density: 0.0616 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7155000000000001 },
                { start: 200, end: 500, density: 0.23160000000000008 },
                { start: 500, density: 0.05289999999999984 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49660000000000015 },
                { start: 800, end: 1800, density: 0.39080000000000026 },
                { start: 1800, density: 0.1125999999999996 },
              ],
              percentiles: { p75: 1305 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7096580683863226 },
                { start: 1800, end: 3000, density: 0.17806438712257552 },
                { start: 3000, density: 0.11227754449110193 },
              ],
              percentiles: { p75: 1999 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9795979597959795 },
                { start: 100, end: 300, density: 0.0145014501450145 },
                { start: 300, density: 0.005900590059005901 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7293729372937295 },
                { start: 2500, end: 4000, density: 0.14491449144914495 },
                { start: 4000, density: 0.12571257125712557 },
              ],
              percentiles: { p75: 2715 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 1999,
        lcp: 2715,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1653515952488,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5454 },
                { start: 200, end: 500, density: 0.34280000000000005 },
                { start: 500, density: 0.11180000000000004 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23585282943411312 },
                { start: 800, end: 1800, density: 0.5212957408518295 },
                { start: 1800, density: 0.24285142971405732 },
              ],
              percentiles: { p75: 1823 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3834766953390681 },
                { start: 1800, end: 3000, density: 0.3215643128625728 },
                { start: 3000, density: 0.2949589917983592 },
              ],
              percentiles: { p75: 3326 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701089673098071 },
                { start: 100, end: 300, density: 0.022093371988403478 },
                { start: 300, density: 0.007797660701789467 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49654930986197227 },
                { start: 2500, end: 4000, density: 0.2976095219043807 },
                { start: 4000, density: 0.20584116823364712 },
              ],
              percentiles: { p75: 3758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9297070292970704,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04799520047995201,
                },
                { start: "0.25", density: 0.02229777022297768 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3326,
        lcp: 3758,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653515952898,
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
                { start: "0.00", end: "0.10", density: 0.8438 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08599999999999998,
                },
                { start: "0.25", density: 0.0702 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8194361127774448 },
                { start: 200, end: 500, density: 0.10947810437912422 },
                { start: 500, density: 0.07108578284343112 },
              ],
              percentiles: { p75: 148 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24860000000000004 },
                { start: 800, end: 1800, density: 0.4809 },
                { start: 1800, density: 0.2705 },
              ],
              percentiles: { p75: 1883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.0659000000000003 },
                { start: 1800, end: 3000, density: 0.35140000000000154 },
                { start: 3000, density: 0.5826999999999982 },
              ],
              percentiles: { p75: 5286 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.19030000000000008 },
                { start: 2500, end: 4000, density: 0.35450000000000015 },
                { start: 4000, density: 0.45519999999999977 },
              ],
              percentiles: { p75: 5896 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5286, lcp: 5896, cls: "0.05" },
      timestamp: 1653515953290,
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
                { start: 0, end: 800, density: 0.4525547445255472 },
                { start: 800, end: 1800, density: 0.4395560443955602 },
                { start: 1800, density: 0.10788921107889257 },
              ],
              percentiles: { p75: 1286 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6216378362163782 },
                { start: 1800, end: 3000, density: 0.24457554244575536 },
                { start: 3000, density: 0.13378662133786626 },
              ],
              percentiles: { p75: 2306 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746924077223167 },
                { start: 100, end: 300, density: 0.01700510153045914 },
                { start: 300, density: 0.008302490747224193 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7086499999999992 },
                { start: 2500, end: 4000, density: 0.18874999999999975 },
                { start: 4000, density: 0.10260000000000113 },
              ],
              percentiles: { p75: 2764 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9189 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05250000000000001,
                },
                { start: "0.25", density: 0.028600000000000014 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6452645264526456 },
                { start: 200, end: 500, density: 0.28652865286528667 },
                { start: 500, density: 0.0682068206820677 },
              ],
              percentiles: { p75: 257 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2306,
        lcp: 2764,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653515953718,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8099999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1277 },
                { start: "0.25", density: 0.06230000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6202860858257478 },
                { start: 200, end: 500, density: 0.27628288486545965 },
                { start: 500, density: 0.10343102930879242 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2755000000000019 },
                { start: 800, end: 1800, density: 0.46820000000000334 },
                { start: 1800, density: 0.2562999999999947 },
              ],
              percentiles: { p75: 1855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129461161651506 },
                { start: 1800, end: 3000, density: 0.26352094371688495 },
                { start: 3000, density: 0.2235329401179644 },
              ],
              percentiles: { p75: 2890 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9549864959487846 },
                { start: 100, end: 300, density: 0.031309392817845345 },
                { start: 300, density: 0.013704111233370035 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.571021306391917 },
                { start: 2500, end: 4000, density: 0.24032209662898832 },
                { start: 4000, density: 0.1886565969790946 },
              ],
              percentiles: { p75: 3548 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2890,
        lcp: 3548,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1653515954133,
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
                  density: 0.9435056494350565,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03879612038796121,
                },
                { start: "0.25", density: 0.01769823017698231 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.667933206679332 },
                { start: 200, end: 500, density: 0.28407159284071587 },
                { start: 500, density: 0.04799520047995217 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4321864372874575 },
                { start: 800, end: 1800, density: 0.48589717943588695 },
                { start: 1800, density: 0.08191638327665564 },
              ],
              percentiles: { p75: 1147 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6779355871174234 },
                { start: 1800, end: 3000, density: 0.2281456291258251 },
                { start: 3000, density: 0.09391878375675142 },
              ],
              percentiles: { p75: 2040 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9851000000000001 },
                { start: 100, end: 300, density: 0.0094 },
                { start: 300, density: 0.0055000000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7557988402319533 },
                { start: 2500, end: 4000, density: 0.14792041591681648 },
                { start: 4000, density: 0.09628074385123014 },
              ],
              percentiles: { p75: 2533 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2040,
        lcp: 2533,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653515954518,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.72985 },
                { start: 2500, end: 4000, density: 0.17305000000000006 },
                { start: 4000, density: 0.09709999999999995 },
              ],
              percentiles: { p75: 2677 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7956204379562043,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1420857914208579,
                },
                { start: "0.25", density: 0.06229377062293775 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8184818481848184 },
                { start: 200, end: 500, density: 0.15001500150015007 },
                { start: 500, density: 0.03150315031503149 },
              ],
              percentiles: { p75: 172 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.331733653269346 },
                { start: 800, end: 1800, density: 0.513997200559888 },
                { start: 1800, density: 0.1542691461707659 },
              ],
              percentiles: { p75: 1568 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6548000000000002 },
                { start: 1800, end: 3000, density: 0.22980000000000003 },
                { start: 3000, density: 0.11539999999999978 },
              ],
              percentiles: { p75: 2224 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9788 },
                { start: 100, end: 300, density: 0.008799999999999999 },
                { start: 300, density: 0.01240000000000001 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2224, lcp: 2677, cls: "0.06", fid: 9 },
      timestamp: 1653515954907,
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
                { start: 0, end: 100, density: 0.916791679167917 },
                { start: 100, end: 300, density: 0.037003700370037015 },
                { start: 300, density: 0.046204620462045945 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6880688068806877 },
                { start: 2500, end: 4000, density: 0.16991699169916985 },
                { start: 4000, density: 0.1420142014201424 },
              ],
              percentiles: { p75: 2887 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8181818181818182,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0986098609860986,
                },
                { start: "0.25", density: 0.08320832083208315 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6304369563043687 },
                { start: 200, end: 500, density: 0.23007699230076964 },
                { start: 500, density: 0.13948605139486164 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4269853970794159 },
                { start: 800, end: 1800, density: 0.4141828365673136 },
                { start: 1800, density: 0.1588317663532705 },
              ],
              percentiles: { p75: 1440 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6396919075722711 },
                { start: 1800, end: 3000, density: 0.2154646393918174 },
                { start: 3000, density: 0.14484345303591137 },
              ],
              percentiles: { p75: 2288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2288,
        lcp: 2887,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1653515955277,
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
                  density: 0.8118811881188118,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15491549154915493,
                },
                { start: "0.25", density: 0.03320332033203323 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6371637163716374 },
                { start: 200, end: 500, density: 0.23882388238823893 },
                { start: 500, density: 0.12401240124012368 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48654865486548654 },
                { start: 800, end: 1800, density: 0.39903990399039907 },
                { start: 1800, density: 0.11441144114411445 },
              ],
              percentiles: { p75: 1270 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6901999999999998 },
                { start: 1800, end: 3000, density: 0.20419999999999996 },
                { start: 3000, density: 0.10560000000000033 },
              ],
              percentiles: { p75: 2037 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9362999999999999 },
                { start: 100, end: 300, density: 0.03439999999999999 },
                { start: 300, density: 0.02930000000000008 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7312000000000007 },
                { start: 2500, end: 4000, density: 0.16390000000000013 },
                { start: 4000, density: 0.10489999999999926 },
              ],
              percentiles: { p75: 2608 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2037,
        lcp: 2608,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1653515955656,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5957999999999998 },
                { start: 200, end: 500, density: 0.3328999999999999 },
                { start: 500, density: 0.07130000000000024 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43461307738452376 },
                { start: 800, end: 1800, density: 0.32943411317736504 },
                { start: 1800, density: 0.23595280943811123 },
              ],
              percentiles: { p75: 1742 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5176482351764817 },
                { start: 1800, end: 3000, density: 0.20787921207879193 },
                { start: 3000, density: 0.2744725527447263 },
              ],
              percentiles: { p75: 3153 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527952795279528 },
                { start: 100, end: 300, density: 0.039403940394039404 },
                { start: 300, density: 0.007800780078007801 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5767500000000004 },
                { start: 2500, end: 4000, density: 0.20795000000000016 },
                { start: 4000, density: 0.2152999999999994 },
              ],
              percentiles: { p75: 3629 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7373737373737373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1301130113011301,
                },
                { start: "0.25", density: 0.13251325132513253 },
              ],
              percentiles: { p75: "0.14" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3153,
        lcp: 3629,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1653515956048,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512146356093174 },
                { start: 100, end: 300, density: 0.018994301709487158 },
                { start: 300, density: 0.029791062681195548 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8525647435256473 },
                { start: 2500, end: 4000, density: 0.09994000599940005 },
                { start: 4000, density: 0.04749525047495278 },
              ],
              percentiles: { p75: 1960 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9228077192280773,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0633936606339366,
                },
                { start: "0.25", density: 0.013798620137986196 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6181381861813818 },
                { start: 200, end: 500, density: 0.29217078292170773 },
                { start: 500, density: 0.08969103089691029 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6964303569643036 },
                { start: 800, end: 1800, density: 0.24037596240375964 },
                { start: 1800, density: 0.06319368063193669 },
              ],
              percentiles: { p75: 878 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8268826882688269 },
                { start: 1800, end: 3000, density: 0.11431143114311436 },
                { start: 3000, density: 0.058805880588058614 },
              ],
              percentiles: { p75: 1539 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1539,
        lcp: 1960,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515956737,
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
                { start: "0.00", end: "0.10", density: 0.8357 },
                { start: "0.10", end: "0.25", density: 0.0777 },
                { start: "0.25", density: 0.08660000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5908181636327259 },
                { start: 200, end: 500, density: 0.2585517103420682 },
                { start: 500, density: 0.15063012602520587 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2820717928207177 },
                { start: 800, end: 1800, density: 0.4456554344565539 },
                { start: 1800, density: 0.27227277272272843 },
              ],
              percentiles: { p75: 1894 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5066013202640526 },
                { start: 1800, end: 3000, density: 0.32896579315863167 },
                { start: 3000, density: 0.16443288657731586 },
              ],
              percentiles: { p75: 2590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9303069693030699 },
                { start: 100, end: 300, density: 0.025797420257974206 },
                { start: 300, density: 0.043895610438955915 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6366636663666368 },
                { start: 2500, end: 4000, density: 0.2631263126312632 },
                { start: 4000, density: 0.10021002100210001 },
              ],
              percentiles: { p75: 3063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2590,
        lcp: 3063,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1653515957439,
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
                  density: 0.8714871487148714,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07640764076407641,
                },
                { start: "0.25", density: 0.05210521052105213 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5570342205323198 },
                { start: 200, end: 500, density: 0.3027816690014011 },
                { start: 500, density: 0.1401841104662791 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4639855942376952 },
                { start: 800, end: 1800, density: 0.42406962785114055 },
                { start: 1800, density: 0.11194477791116432 },
              ],
              percentiles: { p75: 1238 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6374274854970994 },
                { start: 1800, end: 3000, density: 0.2200440088017603 },
                { start: 3000, density: 0.14252850570114042 },
              ],
              percentiles: { p75: 2248 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587917583516703 },
                { start: 100, end: 300, density: 0.027205441088217645 },
                { start: 300, density: 0.014002800560112074 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7139713971397136 },
                { start: 2500, end: 4000, density: 0.16021602160216014 },
                { start: 4000, density: 0.1258125812581262 },
              ],
              percentiles: { p75: 2729 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2248,
        lcp: 2729,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515957866,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7381688079362498 },
                { start: 800, end: 1800, density: 0.23288339567409336 },
                { start: 1800, density: 0.02894779638965676 },
              ],
              percentiles: { p75: 840 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837059675084445 },
                { start: 1800, end: 3000, density: 0.0870194627633907 },
                { start: 3000, density: 0.029274569728164772 },
              ],
              percentiles: { p75: 1363 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9132317562149158 },
                { start: 100, end: 300, density: 0.03817161186848436 },
                { start: 300, density: 0.048596631916599776 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8998866029483233 },
                { start: 2500, end: 4000, density: 0.07953993196176896 },
                { start: 4000, density: 0.020573465089907678 },
              ],
              percentiles: { p75: 1868 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9537434430138293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02765855984740105,
                },
                { start: "0.25", density: 0.01859799713876967 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5024509803921574 },
                { start: 200, end: 500, density: 0.3572303921568631 },
                { start: 500, density: 0.1403186274509794 },
              ],
              percentiles: { p75: 315 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1363,
        lcp: 1868,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653515958249,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9861 },
                { start: 100, end: 300, density: 0.0091 },
                { start: 300, density: 0.004800000000000002 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8205500000000001 },
                { start: 2500, end: 4000, density: 0.12225 },
                { start: 4000, density: 0.05719999999999997 },
              ],
              percentiles: { p75: 2161 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9479000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037700000000000004,
                },
                { start: "0.25", density: 0.014400000000000019 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.922907709229077 },
                { start: 200, end: 500, density: 0.0612938706129387 },
                { start: 500, density: 0.01579842015798424 },
              ],
              percentiles: { p75: 96 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5962807438512296 },
                { start: 800, end: 1800, density: 0.3397320535892822 },
                { start: 1800, density: 0.06398720255948821 },
              ],
              percentiles: { p75: 1063 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7980201979802019 },
                { start: 1800, end: 3000, density: 0.15518448155184478 },
                { start: 3000, density: 0.046795320467953434 },
              ],
              percentiles: { p75: 1666 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1666, lcp: 2161, cls: "0.02", fid: 8 },
      timestamp: 1653515958827,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4537907581516304 },
                { start: 800, end: 1800, density: 0.41898379675935193 },
                { start: 1800, density: 0.12722544508901762 },
              ],
              percentiles: { p75: 1324 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6346173086543271 },
                { start: 1800, end: 3000, density: 0.2149074537268634 },
                { start: 3000, density: 0.15047523761880965 },
              ],
              percentiles: { p75: 2306 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565043495650434 },
                { start: 100, end: 300, density: 0.026897310268973105 },
                { start: 300, density: 0.016598340165983477 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7133853541416566 },
                { start: 2500, end: 4000, density: 0.16066426570628248 },
                { start: 4000, density: 0.12595038015206095 },
              ],
              percentiles: { p75: 2773 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8825 },
                { start: "0.10", end: "0.25", density: 0.0673 },
                { start: "0.25", density: 0.050199999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6351000000000007 },
                { start: 200, end: 500, density: 0.27990000000000037 },
                { start: 500, density: 0.08499999999999902 },
              ],
              percentiles: { p75: 257 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2306,
        lcp: 2773,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515959214,
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
                { start: 0, end: 100, density: 0.9577915583116622 },
                { start: 100, end: 300, density: 0.032506501300260046 },
                { start: 300, density: 0.009701940388077675 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7749675097470753 },
                { start: 2500, end: 4000, density: 0.1349595121463561 },
                { start: 4000, density: 0.09007297810656856 },
              ],
              percentiles: { p75: 2383 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8111999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12109999999999999,
                },
                { start: "0.25", density: 0.0677000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6787000000000002 },
                { start: 200, end: 500, density: 0.2392000000000001 },
                { start: 500, density: 0.08209999999999965 },
              ],
              percentiles: { p75: 233 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4790562831150652 },
                { start: 800, end: 1800, density: 0.4066779966010195 },
                { start: 1800, density: 0.11426572028391532 },
              ],
              percentiles: { p75: 1278 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7189999999999998 },
                { start: 1800, end: 3000, density: 0.17459999999999995 },
                { start: 3000, density: 0.10640000000000037 },
              ],
              percentiles: { p75: 1960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 1960,
        lcp: 2383,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1653515959657,
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
                  density: 0.9807752422632072,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009065332916536415,
                },
                { start: "0.25", density: 0.010159424820256332 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5431260607930878 },
                { start: 200, end: 500, density: 0.34547137787378507 },
                { start: 500, density: 0.11140256133312712 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7141480648787539 },
                { start: 800, end: 1800, density: 0.2651356993736952 },
                { start: 1800, density: 0.020716235747551007 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9064573555591519 },
                { start: 1800, end: 3000, density: 0.07978637319954686 },
                { start: 3000, density: 0.013756271241301177 },
              ],
              percentiles: { p75: 1375 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9580487804878048 },
                { start: 100, end: 300, density: 0.028943089430894305 },
                { start: 300, density: 0.013008130081300811 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9311506981222918 },
                { start: 2500, end: 4000, density: 0.0577756379393356 },
                { start: 4000, density: 0.011073663938372648 },
              ],
              percentiles: { p75: 1751 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1375,
        lcp: 1751,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653515960045,
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
                  density: 0.7373737373737373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1301130113011301,
                },
                { start: "0.25", density: 0.13251325132513253 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5957999999999998 },
                { start: 200, end: 500, density: 0.3328999999999999 },
                { start: 500, density: 0.07130000000000024 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43461307738452376 },
                { start: 800, end: 1800, density: 0.32943411317736504 },
                { start: 1800, density: 0.23595280943811123 },
              ],
              percentiles: { p75: 1742 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5176482351764817 },
                { start: 1800, end: 3000, density: 0.20787921207879193 },
                { start: 3000, density: 0.2744725527447263 },
              ],
              percentiles: { p75: 3153 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527952795279528 },
                { start: 100, end: 300, density: 0.039403940394039404 },
                { start: 300, density: 0.007800780078007801 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5767500000000004 },
                { start: 2500, end: 4000, density: 0.20795000000000016 },
                { start: 4000, density: 0.2152999999999994 },
              ],
              percentiles: { p75: 3629 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3153,
        lcp: 3629,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1653515960618,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5024509803921574 },
                { start: 200, end: 500, density: 0.3572303921568631 },
                { start: 500, density: 0.1403186274509794 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7381688079362498 },
                { start: 800, end: 1800, density: 0.23288339567409336 },
                { start: 1800, density: 0.02894779638965676 },
              ],
              percentiles: { p75: 840 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837059675084445 },
                { start: 1800, end: 3000, density: 0.0870194627633907 },
                { start: 3000, density: 0.029274569728164772 },
              ],
              percentiles: { p75: 1363 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9132317562149158 },
                { start: 100, end: 300, density: 0.03817161186848436 },
                { start: 300, density: 0.048596631916599776 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8998866029483233 },
                { start: 2500, end: 4000, density: 0.07953993196176896 },
                { start: 4000, density: 0.020573465089907678 },
              ],
              percentiles: { p75: 1868 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9537434430138293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02765855984740105,
                },
                { start: "0.25", density: 0.01859799713876967 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1363,
        lcp: 1868,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653515961004,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9123087691230877 },
                { start: 1800, end: 3000, density: 0.0681931806819318 },
                { start: 3000, density: 0.019498050194980573 },
              ],
              percentiles: { p75: 1251 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656103169049284 },
                { start: 100, end: 300, density: 0.015695291412576223 },
                { start: 300, density: 0.018694391682495388 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9181836367273456 },
                { start: 2500, end: 4000, density: 0.06161232246449291 },
                { start: 4000, density: 0.020204040808161666 },
              ],
              percentiles: { p75: 1702 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8589141085891411,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10968903109689031,
                },
                { start: "0.25", density: 0.0313968603139686 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7139713971397141 },
                { start: 200, end: 500, density: 0.2103210321032104 },
                { start: 500, density: 0.0757075707570754 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7224 },
                { start: 800, end: 1800, density: 0.2524 },
                { start: 1800, density: 0.0252 },
              ],
              percentiles: { p75: 846 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1251,
        lcp: 1702,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653515961581,
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
                  density: 0.8036196380361963,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1300869913008699,
                },
                { start: "0.25", density: 0.06629337066293375 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7777222277772224 },
                { start: 200, end: 500, density: 0.1745825417458254 },
                { start: 500, density: 0.0476952304769522 },
              ],
              percentiles: { p75: 185 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5275944811037793 },
                { start: 800, end: 1800, density: 0.3708258348330332 },
                { start: 1800, density: 0.10157968406318736 },
              ],
              percentiles: { p75: 1183 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7752999999999995 },
                { start: 1800, end: 3000, density: 0.13219999999999996 },
                { start: 3000, density: 0.09250000000000053 },
              ],
              percentiles: { p75: 1718 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968993798759752 },
                { start: 100, end: 300, density: 0.022904580916183245 },
                { start: 300, density: 0.008101620324064798 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8154499999999997 },
                { start: 2500, end: 4000, density: 0.11014999999999986 },
                { start: 4000, density: 0.07440000000000042 },
              ],
              percentiles: { p75: 2106 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1718,
        lcp: 2106,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1653515962022,
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
                { start: 0, end: 2500, density: 0.9106231869560866 },
                { start: 2500, end: 4000, density: 0.06717015104531358 },
                { start: 4000, density: 0.02220666199859975 },
              ],
              percentiles: { p75: 1717 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.819081908190819,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1607160716071607,
                },
                { start: "0.25", density: 0.02020202020202022 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7530987604958014 },
                { start: 200, end: 500, density: 0.1670331867253098 },
                { start: 500, density: 0.07986805277888878 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7273000000000001 },
                { start: 800, end: 1800, density: 0.23400000000000004 },
                { start: 1800, density: 0.03869999999999983 },
              ],
              percentiles: { p75: 834 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9027999999999999 },
                { start: 1800, end: 3000, density: 0.07149999999999998 },
                { start: 3000, density: 0.0257000000000001 },
              ],
              percentiles: { p75: 1283 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9763047390521896 },
                { start: 100, end: 300, density: 0.014997000599880024 },
                { start: 300, density: 0.008698260347930425 },
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
      extractedResults: { fcp: 1283, lcp: 1717, cls: "0.08", fid: 9 },
      timestamp: 1653515962447,
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
                  density: 0.9699030096990301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019798020197980198,
                },
                { start: "0.25", density: 0.010298970102989696 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6784678467846788 },
                { start: 200, end: 500, density: 0.2407240724072409 },
                { start: 500, density: 0.08080808080808041 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7627999999999999 },
                { start: 800, end: 1800, density: 0.2227 },
                { start: 1800, density: 0.014500000000000011 },
              ],
              percentiles: { p75: 789 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9226154769046191 },
                { start: 1800, end: 3000, density: 0.06488702259548093 },
                { start: 3000, density: 0.012497500499900024 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665033496650335 },
                { start: 100, end: 300, density: 0.021397860213978603 },
                { start: 300, density: 0.0120987901209879 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9336566343365663 },
                { start: 2500, end: 4000, density: 0.05474452554744525 },
                { start: 4000, density: 0.011598840115988399 },
              ],
              percentiles: { p75: 1743 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1296,
        lcp: 1743,
        cls: "0.02",
        fid: 10,
      },
      timestamp: 1653515962869,
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
                  density: 0.939799331103679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02651696129956999,
                },
                { start: "0.25", density: 0.03368370759675108 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.39723889555822345 },
                { start: 200, end: 500, density: 0.4321728691476592 },
                { start: 500, density: 0.17058823529411743 },
              ],
              percentiles: { p75: 395 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5318717979268435 },
                { start: 800, end: 1800, density: 0.3778148457047539 },
                { start: 1800, density: 0.09031335636840268 },
              ],
              percentiles: { p75: 1149 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7270870870870867 },
                { start: 1800, end: 3000, density: 0.18102102102102088 },
                { start: 3000, density: 0.09189189189189233 },
              ],
              percentiles: { p75: 1889 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9138645224171539 },
                { start: 100, end: 300, density: 0.052144249512670555 },
                { start: 300, density: 0.03399122807017554 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7894073896353166 },
                { start: 2500, end: 4000, density: 0.13957533589251442 },
                { start: 4000, density: 0.07101727447216898 },
              ],
              percentiles: { p75: 2307 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1889,
        lcp: 2307,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1653515963342,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589164334266294 },
                { start: 100, end: 300, density: 0.026389444222311077 },
                { start: 300, density: 0.014694122351059657 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8899610038996104 },
                { start: 2500, end: 4000, density: 0.089041095890411 },
                { start: 4000, density: 0.020997900209978673 },
              ],
              percentiles: { p75: 1844 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8775877587758776,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09290929092909293,
                },
                { start: "0.25", density: 0.02950295029502951 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4775432629788937 },
                { start: 200, end: 500, density: 0.39911973592077626 },
                { start: 500, density: 0.12333700110032998 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6568686262747451 },
                { start: 800, end: 1800, density: 0.3150369926014797 },
                { start: 1800, density: 0.02809438112377524 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8957208558288343 },
                { start: 1800, end: 3000, density: 0.08378324335132971 },
                { start: 3000, density: 0.020495900819836044 },
              ],
              percentiles: { p75: 1362 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1362,
        lcp: 1844,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653515964114,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8158868226354726 },
                { start: 2500, end: 4000, density: 0.13382323535292937 },
                { start: 4000, density: 0.05028994201159792 },
              ],
              percentiles: { p75: 2206 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8937893789378937,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08070807080708071,
                },
                { start: "0.25", density: 0.02550255025502549 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5952809438112375 },
                { start: 200, end: 500, density: 0.2969406118776244 },
                { start: 500, density: 0.10777844431113807 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6014202840568114 },
                { start: 800, end: 1800, density: 0.3586717343468693 },
                { start: 1800, density: 0.03990798159631938 },
              ],
              percentiles: { p75: 979 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7917791779177913 },
                { start: 1800, end: 3000, density: 0.15711571157115706 },
                { start: 3000, density: 0.05110511051105157 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565869760928278 },
                { start: 100, end: 300, density: 0.025007502250675204 },
                { start: 300, density: 0.018405521656497007 },
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
        fcp: 1690,
        lcp: 2206,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653515964621,
    },

    {
      url: "https://www.yara.com/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.907563025210084,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08403361344537816,
                },
                { start: "0.25", density: 0.008403361344537816 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5966386554621849 },
                { start: 200, end: 500, density: 0.29411764705882343 },
                { start: 500, density: 0.10924369747899168 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7168141592920354 },
                { start: 800, end: 1800, density: 0.23008849557522124 },
                { start: 1800, density: 0.053097345132743404 },
              ],
              percentiles: { p75: 1141 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7966101694915254 },
                { start: 1800, end: 3000, density: 0.14406779661016947 },
                { start: 3000, density: 0.0593220338983051 },
              ],
              percentiles: { p75: 2062 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9430894308943089 },
                { start: 100, end: 300, density: 0.04878048780487805 },
                { start: 300, density: 0.008130081300813009 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7500000000000001 },
                { start: 2500, end: 4000, density: 0.1973684210526315 },
                { start: 4000, density: 0.052631578947368446 },
              ],
              percentiles: { p75: 2954 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2062,
        lcp: 2954,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1653516051504,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8884615384615384,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0923076923076923,
                },
                { start: "0.25", density: 0.019230769230769235 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.35714285714285754 },
                { start: 200, end: 500, density: 0.40225563909774475 },
                { start: 500, density: 0.24060150375939784 },
              ],
              percentiles: { p75: 475 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5217391304347827 },
                { start: 800, end: 1800, density: 0.3833992094861662 },
                { start: 1800, density: 0.09486166007905115 },
              ],
              percentiles: { p75: 1101 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7647058823529409 },
                { start: 1800, end: 3000, density: 0.13970588235294115 },
                { start: 3000, density: 0.0955882352941179 },
              ],
              percentiles: { p75: 1827 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8847583643122677 },
                { start: 100, end: 300, density: 0.07434944237918216 },
                { start: 300, density: 0.040892193308550054 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6412213740458012 },
                { start: 2500, end: 4000, density: 0.2137404580152669 },
                { start: 4000, density: 0.14503816793893198 },
              ],
              percentiles: { p75: 2987 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1827,
        lcp: 2987,
        cls: "0.04",
        fid: 19,
      },
      timestamp: 1653516052239,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.de" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6329113924050634 },
                { start: 800, end: 1800, density: 0.32911392405063294 },
                { start: 1800, density: 0.03797468354430361 },
              ],
              percentiles: { p75: 988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8447893569844789 },
                { start: 1800, end: 3000, density: 0.13082039911308202 },
                { start: 3000, density: 0.024390243902439032 },
              ],
              percentiles: { p75: 1537 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663461538461539 },
                { start: 100, end: 300, density: 0.01201923076923077 },
                { start: 300, density: 0.021634615384615398 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7821670428893905 },
                { start: 2500, end: 4000, density: 0.19074492099322807 },
                { start: 4000, density: 0.027088036117381507 },
              ],
              percentiles: { p75: 2303 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9088888888888889,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07111111111111111,
                },
                { start: "0.25", density: 0.02 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5083932853717031 },
                { start: 200, end: 500, density: 0.37649880095923294 },
                { start: 500, density: 0.11510791366906396 },
              ],
              percentiles: { p75: 316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1537,
        lcp: 2303,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1653516052754,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.33699633699633735 },
                { start: 200, end: 500, density: 0.4652014652014659 },
                { start: 500, density: 0.19780219780219668 },
              ],
              percentiles: { p75: 399 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6526717557251909 },
                { start: 800, end: 1800, density: 0.31679389312977096 },
                { start: 1800, density: 0.030534351145038188 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7836879432624112 },
                { start: 1800, end: 3000, density: 0.1666666666666666 },
                { start: 3000, density: 0.049645390070922085 },
              ],
              percentiles: { p75: 1853 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320754716981131 },
                { start: 100, end: 300, density: 0.041509433962264156 },
                { start: 300, density: 0.02641509433962265 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7407407407407408 },
                { start: 2500, end: 4000, density: 0.17777777777777784 },
                { start: 4000, density: 0.08148148148148121 },
              ],
              percentiles: { p75: 2598 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9283154121863798,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050179211469534045,
                },
                { start: "0.25", density: 0.021505376344086027 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1853,
        lcp: 2598,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1653516053193,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.854251012145749,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12955465587044532,
                },
                { start: "0.25", density: 0.016194331983805668 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3333333333333333 },
                { start: 800, end: 1800, density: 0.4053030303030303 },
                { start: 1800, density: 0.2613636363636365 },
              ],
              percentiles: { p75: 1945 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47791164658634505 },
                { start: 1800, end: 3000, density: 0.33333333333333315 },
                { start: 3000, density: 0.18875502008032174 },
              ],
              percentiles: { p75: 2919 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5367965367965365 },
                { start: 2500, end: 4000, density: 0.24242424242424226 },
                { start: 4000, density: 0.22077922077922119 },
              ],
              percentiles: { p75: 3930 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 2919, lcp: 3930, cls: "0.08" },
      timestamp: 1653516060831,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5383993532740501,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32848288870924275,
                },
                { start: "0.25", density: 0.13311775801670717 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9568841621155505 },
                { start: 200, end: 500, density: 0.03449267030755965 },
                { start: 500, density: 0.008623167576889919 },
              ],
              percentiles: { p75: 72 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8447559709241952 },
                { start: 800, end: 1800, density: 0.14200415368639668 },
                { start: 1800, density: 0.013239875389408098 },
              ],
              percentiles: { p75: 720 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9536791953414504 },
                { start: 1800, end: 3000, density: 0.036262572789835884 },
                { start: 3000, density: 0.010058231868713598 },
              ],
              percentiles: { p75: 1080 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9305483028720627 },
                { start: 2500, end: 4000, density: 0.04751958224543079 },
                { start: 4000, density: 0.021932114882506532 },
              ],
              percentiles: { p75: 1669 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1080, lcp: 1669, cls: "0.16", fid: 2 },
      timestamp: 1653516061204,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.366398243045388 },
                { start: 800, end: 1800, density: 0.5424597364568082 },
                { start: 1800, density: 0.09114202049780387 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6662929745889383 },
                { start: 1800, end: 3000, density: 0.25224215246636766 },
                { start: 3000, density: 0.08146487294469404 },
              ],
              percentiles: { p75: 2104 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.997692054071876 },
                { start: 100, end: 300 },
                { start: 300, density: 0.00230794592812397 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6969242310577645 },
                { start: 2500, end: 4000, density: 0.16279069767441867 },
                { start: 4000, density: 0.14028507126781675 },
              ],
              percentiles: { p75: 2953 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.583301563095692,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2588638963019443,
                },
                { start: "0.25", density: 0.15783454060236363 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9236667828511677 },
                { start: 200, end: 500, density: 0.03136981526664343 },
                { start: 500, density: 0.044963401882188954 },
              ],
              percentiles: { p75: 81 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2104, lcp: 2953, cls: "0.17", fid: 2 },
      timestamp: 1653516061588,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yarabrasil.com.br",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7768456375838926,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18456375838926176,
                },
                { start: "0.25", density: 0.038590604026845624 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8453389830508468 },
                { start: 200, end: 500, density: 0.08050847457627111 },
                { start: 500, density: 0.074152542372882 },
              ],
              percentiles: { p75: 123 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6121575342465753 },
                { start: 800, end: 1800, density: 0.3253424657534246 },
                { start: 1800, density: 0.06250000000000015 },
              ],
              percentiles: { p75: 1055 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7528271405492734 },
                { start: 1800, end: 3000, density: 0.1534733441033926 },
                { start: 3000, density: 0.09369951534733394 },
              ],
              percentiles: { p75: 1847 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9789942711648632 },
                { start: 100, end: 300, density: 0.01336728198599618 },
                { start: 300, density: 0.007638446849140653 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7287866772402859 },
                { start: 2500, end: 4000, density: 0.14908802537668517 },
                { start: 4000, density: 0.12212529738302903 },
              ],
              percentiles: { p75: 2670 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: { fcp: 1847, lcp: 2670, cls: "0.09", fid: 3 },
      timestamp: 1653516062006,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.dk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9985577789796286 },
                { start: 100, end: 300, density: 0.0014422210203713717 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9167270750271838 },
                { start: 2500, end: 4000, density: 0.062250815512866986 },
                { start: 4000, density: 0.021022109459949197 },
              ],
              percentiles: { p75: 1617 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7254757066321817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2569739515980048,
                },
                { start: "0.25", density: 0.017550341769813405 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9720574162679426 },
                { start: 200, end: 500, density: 0.019904306220095692 },
                { start: 500, density: 0.008038277511961725 },
              ],
              percentiles: { p75: 69 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7791422287390027 },
                { start: 800, end: 1800, density: 0.1825513196480938 },
                { start: 1800, density: 0.03830645161290352 },
              ],
              percentiles: { p75: 764 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9212241941325606 },
                { start: 1800, end: 3000, density: 0.05994204998189062 },
                { start: 3000, density: 0.01883375588554867 },
              ],
              percentiles: { p75: 1099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1099, lcp: 1617, cls: "0.10", fid: 2 },
      timestamp: 1653516062320,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5799086757990868 },
                { start: 2500, end: 4000, density: 0.2557077625570778 },
                { start: 4000, density: 0.1643835616438356 },
              ],
              percentiles: { p75: 3444 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9884526558891454,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.006928406466512702,
                },
                { start: "0.25", density: 0.004618937644341801 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4894117647058828 },
                { start: 200, end: 500, density: 0.35058823529411803 },
                { start: 500, density: 0.15999999999999912 },
              ],
              percentiles: { p75: 387 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4112359550561797 },
                { start: 800, end: 1800, density: 0.3325842696629214 },
                { start: 1800, density: 0.256179775280899 },
              ],
              percentiles: { p75: 1813 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5186915887850465 },
                { start: 1800, end: 3000, density: 0.3341121495327101 },
                { start: 3000, density: 0.14719626168224334 },
              ],
              percentiles: { p75: 2584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8972431077694238 },
                { start: 100, end: 300, density: 0.06766917293233084 },
                { start: 300, density: 0.03508771929824534 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2584,
        lcp: 3444,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653516062617,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5383993532740501,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32848288870924275,
                },
                { start: "0.25", density: 0.13311775801670717 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9568841621155505 },
                { start: 200, end: 500, density: 0.03449267030755965 },
                { start: 500, density: 0.008623167576889919 },
              ],
              percentiles: { p75: 72 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8447559709241952 },
                { start: 800, end: 1800, density: 0.14200415368639668 },
                { start: 1800, density: 0.013239875389408098 },
              ],
              percentiles: { p75: 720 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9536791953414504 },
                { start: 1800, end: 3000, density: 0.036262572789835884 },
                { start: 3000, density: 0.010058231868713598 },
              ],
              percentiles: { p75: 1080 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9305483028720627 },
                { start: 2500, end: 4000, density: 0.04751958224543079 },
                { start: 4000, density: 0.021932114882506532 },
              ],
              percentiles: { p75: 1669 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1080, lcp: 1669, cls: "0.16", fid: 2 },
      timestamp: 1653516062945,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4966949952785647,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.25401322001888577,
                },
                { start: "0.25", density: 0.24929178470254953 },
              ],
              percentiles: { p75: "0.23" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9144796380090497 },
                { start: 200, end: 500, density: 0.056561085972850665 },
                { start: 500, density: 0.028959276018099576 },
              ],
              percentiles: { p75: 92 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28442844284428437 },
                { start: 800, end: 1800, density: 0.5112511251125113 },
                { start: 1800, density: 0.20432043204320424 },
              ],
              percentiles: { p75: 1689 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6420680512593901 },
                { start: 1800, end: 3000, density: 0.24083075563411402 },
                { start: 3000, density: 0.11710119310649592 },
              ],
              percentiles: { p75: 2169 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9685585953450387 },
                { start: 100, end: 300, density: 0.013474887709269088 },
                { start: 300, density: 0.017966516945692117 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6985325852395341 },
                { start: 2500, end: 4000, density: 0.193137678031938 },
                { start: 4000, density: 0.10832973672852789 },
              ],
              percentiles: { p75: 2795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 2169, lcp: 2795, cls: "0.23", fid: 2 },
      timestamp: 1653516063221,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.co",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7562158884172224 },
                { start: 1800, end: 3000, density: 0.173438447543966 },
                { start: 3000, density: 0.07034566403881155 },
              ],
              percentiles: { p75: 1863 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9893854748603352 },
                { start: 100, end: 300, density: 0.006145251396648043 },
                { start: 300, density: 0.004469273743016764 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7489489489489495 },
                { start: 2500, end: 4000, density: 0.1405405405405407 },
                { start: 4000, density: 0.11051051051050981 },
              ],
              percentiles: { p75: 2624 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5911949685534591,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3062893081761006,
                },
                { start: "0.25", density: 0.10251572327044027 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9220930232558141 },
                { start: 200, end: 500, density: 0.04825581395348838 },
                { start: 500, density: 0.02965116279069743 },
              ],
              percentiles: { p75: 88 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5404411764705881 },
                { start: 800, end: 1800, density: 0.39644607843137253 },
                { start: 1800, density: 0.06311274509803938 },
              ],
              percentiles: { p75: 1122 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 1863, lcp: 2624, cls: "0.15", fid: 3 },
      timestamp: 1653516063518,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ee" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9275156338828879 },
                { start: 200, end: 500, density: 0.04775440591245025 },
                { start: 500, density: 0.02472996020466173 },
              ],
              percentiles: { p75: 84 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8430956798303737 },
                { start: 800, end: 1800, density: 0.15239862178637692 },
                { start: 1800, density: 0.004505698383249404 },
              ],
              percentiles: { p75: 684 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9487313628040807 },
                { start: 1800, end: 3000, density: 0.04080565001307873 },
                { start: 3000, density: 0.0104629871828407 },
              ],
              percentiles: { p75: 1107 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802546115874253 },
                { start: 100, end: 300, density: 0.009353078721745909 },
                { start: 300, density: 0.010392309690828787 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9380143350146005 },
                { start: 2500, end: 4000, density: 0.04950889301831697 },
                { start: 4000, density: 0.012476771967082561 },
              ],
              percentiles: { p75: 1614 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9508606329816769,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03886729594669628,
                },
                { start: "0.25", density: 0.010272071071626875 },
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
      extractedResults: { fcp: 1107, lcp: 1614, cls: "0.05", fid: 3 },
      timestamp: 1653516063861,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.bo" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5200692041522493 },
                { start: 2500, end: 4000, density: 0.22387543252595166 },
                { start: 4000, density: 0.25605536332179907 },
              ],
              percentiles: { p75: 4208 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.728898426323319,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.24606580829756794,
                },
                { start: "0.25", density: 0.025035765379113024 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8512518409425626 },
                { start: 200, end: 500, density: 0.10898379970544918 },
                { start: 500, density: 0.0397643593519883 },
              ],
              percentiles: { p75: 117 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26556907659269857 },
                { start: 800, end: 1800, density: 0.5783822476735861 },
                { start: 1800, density: 0.15604867573371517 },
              ],
              percentiles: { p75: 1581 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46500346500346545 },
                { start: 1800, end: 3000, density: 0.30977130977131 },
                { start: 3000, density: 0.22522522522522448 },
              ],
              percentiles: { p75: 2994 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.994910941475827 },
                { start: 100, end: 300, density: 0.005089058524173029 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 2994, lcp: 4208, cls: "0.10", fid: 2 },
      timestamp: 1653516064155,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9607843137254901,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029411764705882356,
                },
                { start: "0.25", density: 0.00980392156862745 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4722222222222226 },
                { start: 200, end: 500, density: 0.37962962962962987 },
                { start: 500, density: 0.1481481481481476 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7100000000000001 },
                { start: 800, end: 1800, density: 0.25999999999999995 },
                { start: 1800, density: 0.03 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8076923076923077 },
                { start: 1800, end: 3000, density: 0.15384615384615383 },
                { start: 3000, density: 0.038461538461538464 },
              ],
              percentiles: { p75: 1733 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1733, cls: "0.03" },
      timestamp: 1653516064420,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7928388746803068 },
                { start: 1800, end: 3000, density: 0.1534526854219949 },
                { start: 3000, density: 0.05370843989769833 },
              ],
              percentiles: { p75: 1727 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9147286821705427 },
                { start: 100, end: 300, density: 0.03875968992248063 },
                { start: 300, density: 0.04651162790697659 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7569620253164558 },
                { start: 2500, end: 4000, density: 0.1696202531645569 },
                { start: 4000, density: 0.07341772151898729 },
              ],
              percentiles: { p75: 2537 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8927680798004988,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07231920199501247,
                },
                { start: "0.25", density: 0.0349127182044888 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42970822281167115 },
                { start: 200, end: 500, density: 0.3527851458885943 },
                { start: 500, density: 0.21750663129973463 },
              ],
              percentiles: { p75: 391 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5710455764075066 },
                { start: 800, end: 1800, density: 0.3967828418230563 },
                { start: 1800, density: 0.03217158176943707 },
              ],
              percentiles: { p75: 979 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1727,
        lcp: 2537,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653516064691,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9979338842975206 },
                { start: 100, end: 300, density: 0.002066115702479339 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9278680452978827 },
                { start: 2500, end: 4000, density: 0.04849827671097979 },
                { start: 4000, density: 0.0236336779911375 },
              ],
              percentiles: { p75: 1541 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4881373043917214,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3331650681474003,
                },
                { start: "0.25", density: 0.17869762746087825 },
              ],
              percentiles: { p75: "0.18" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9744565217391303 },
                { start: 200, end: 500, density: 0.01902173913043478 },
                { start: 500, density: 0.0065217391304347875 },
              ],
              percentiles: { p75: 73 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8307008884501479 },
                { start: 800, end: 1800, density: 0.1431391905231984 },
                { start: 1800, density: 0.02615992102665365 },
              ],
              percentiles: { p75: 697 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9357843137254901 },
                { start: 1800, end: 3000, density: 0.047058823529411764 },
                { start: 3000, density: 0.017156862745098055 },
              ],
              percentiles: { p75: 1030 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1030, lcp: 1541, cls: "0.18", fid: 2 },
      timestamp: 1653516064944,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4933267424616906,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3717251606524963,
                },
                { start: "0.25", density: 0.13494809688581322 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8796155791603436 },
                { start: 200, end: 500, density: 0.06929691451694485 },
                { start: 500, density: 0.05108750632271147 },
              ],
              percentiles: { p75: 102 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7359307359307359 },
                { start: 800, end: 1800, density: 0.2227032227032227 },
                { start: 1800, density: 0.04136604136604136 },
              ],
              percentiles: { p75: 836 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.846190704360326 },
                { start: 1800, end: 3000, density: 0.10206037374221372 },
                { start: 3000, density: 0.051748921897460255 },
              ],
              percentiles: { p75: 1449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9801418439716313 },
                { start: 100, end: 300, density: 0.008983451536643029 },
                { start: 300, density: 0.010874704491725742 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8194511314395767 },
                { start: 2500, end: 4000, density: 0.11988444872412139 },
                { start: 4000, density: 0.060664419836301955 },
              ],
              percentiles: { p75: 2130 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 1449, lcp: 2130, cls: "0.17", fid: 2 },
      timestamp: 1653516065201,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.ar",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9937670432411375 },
                { start: 100, end: 300, density: 0.004674717569146863 },
                { start: 300, density: 0.0015582391897156211 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7412300683371299 },
                { start: 2500, end: 4000, density: 0.1412300683371298 },
                { start: 4000, density: 0.11753986332574035 },
              ],
              percentiles: { p75: 2655 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.800383877159309,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14491362763915547,
                },
                { start: "0.25", density: 0.05470249520153554 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9015979814970565 },
                { start: 200, end: 500, density: 0.06686291000841044 },
                { start: 500, density: 0.03153910849453316 },
              ],
              percentiles: { p75: 103 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4304099142040039 },
                { start: 800, end: 1800, density: 0.5066730219256436 },
                { start: 1800, density: 0.06291706387035265 },
              ],
              percentiles: { p75: 1235 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7105504587155963 },
                { start: 1800, end: 3000, density: 0.2022935779816514 },
                { start: 3000, density: 0.0871559633027522 },
              ],
              percentiles: { p75: 1947 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 1947, lcp: 2655, cls: "0.08", fid: 3 },
      timestamp: 1653516065563,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lv" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.710462287104623 },
                { start: 800, end: 1800, density: 0.26618004866180056 },
                { start: 1800, density: 0.023357664233576478 },
              ],
              percentiles: { p75: 880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9109153206069506 },
                { start: 1800, end: 3000, density: 0.07440039158100835 },
                { start: 3000, density: 0.0146842878120411 },
              ],
              percentiles: { p75: 1270 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.865375183913683 },
                { start: 2500, end: 4000, density: 0.1032368808239333 },
                { start: 4000, density: 0.03138793526238371 },
              ],
              percentiles: { p75: 1982 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9501495513459621,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03140578265204387,
                },
                { start: "0.25", density: 0.018444666001994025 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9722073757349011 },
                { start: 200, end: 500, density: 0.01924104756814538 },
                { start: 500, density: 0.008551576696953514 },
              ],
              percentiles: { p75: 62 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1270, lcp: 1982, cls: "0.04", fid: 2 },
      timestamp: 1653516065860,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8576210092687948 },
                { start: 2500, end: 4000, density: 0.08779608650875378 },
                { start: 4000, density: 0.05458290422245137 },
              ],
              percentiles: { p75: 1939 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8783712321523004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10787942887361184,
                },
                { start: "0.25", density: 0.013749338974087784 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9599332220367278 },
                { start: 200, end: 500, density: 0.013912075681691706 },
                { start: 500, density: 0.026154702281580407 },
              ],
              percentiles: { p75: 65 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8138551031200422 },
                { start: 800, end: 1800, density: 0.15970386039132733 },
                { start: 1800, density: 0.026441036488630366 },
              ],
              percentiles: { p75: 724 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9083036169128883 },
                { start: 1800, end: 3000, density: 0.048904737646459494 },
                { start: 3000, density: 0.04279164544065223 },
              ],
              percentiles: { p75: 1135 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1135, lcp: 1939, cls: "0.05", fid: 2 },
      timestamp: 1653516066158,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.mx",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9742574257425743 },
                { start: 100, end: 300, density: 0.013366336633663368 },
                { start: 300, density: 0.012376237623762288 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6697247706422015 },
                { start: 2500, end: 4000, density: 0.1582568807339449 },
                { start: 4000, density: 0.17201834862385368 },
              ],
              percentiles: { p75: 3193 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5757931844888367,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3225616921269095,
                },
                { start: "0.25", density: 0.10164512338425372 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8525641025641022 },
                { start: 200, end: 500, density: 0.08333333333333329 },
                { start: 500, density: 0.06410256410256455 },
              ],
              percentiles: { p75: 123 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49167145318782346 },
                { start: 800, end: 1800, density: 0.4078116025272836 },
                { start: 1800, density: 0.10051694428489302 },
              ],
              percentiles: { p75: 1181 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6768018018018016 },
                { start: 1800, end: 3000, density: 0.18693693693693686 },
                { start: 3000, density: 0.1362612612612616 },
              ],
              percentiles: { p75: 2127 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 2127, lcp: 3193, cls: "0.16", fid: 3 },
      timestamp: 1653516066430,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fi" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9962240402769037 },
                { start: 100, end: 300, density: 0.0025173064820641915 },
                { start: 300, density: 0.0012586532410320957 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8771446078431372 },
                { start: 2500, end: 4000, density: 0.09773284313725494 },
                { start: 4000, density: 0.025122549019607837 },
              ],
              percentiles: { p75: 1803 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5385105028644176,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3628262253341821,
                },
                { start: "0.25", density: 0.09866327180140032 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.926001357773252 },
                { start: 200, end: 500, density: 0.05906313645621181 },
                { start: 500, density: 0.014935505770536272 },
              ],
              percentiles: { p75: 91 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7191697191697193 },
                { start: 800, end: 1800, density: 0.246031746031746 },
                { start: 1800, density: 0.03479853479853483 },
              ],
              percentiles: { p75: 849 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9273167777104786 },
                { start: 1800, end: 3000, density: 0.05330102967898243 },
                { start: 3000, density: 0.019382192610539084 },
              ],
              percentiles: { p75: 1187 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1187, lcp: 1803, cls: "0.16", fid: 2 },
      timestamp: 1653516066754,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ua" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8897795591182366 },
                { start: 1800, end: 3000, density: 0.0691382765531062 },
                { start: 3000, density: 0.04108216432865734 },
              ],
              percentiles: { p75: 1319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.995571302037201 },
                { start: 100, end: 300, density: 0.003542958370239149 },
                { start: 300, density: 0.0008857395925597873 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8506036217303821 },
                { start: 2500, end: 4000, density: 0.09808853118712271 },
                { start: 4000, density: 0.0513078470824952 },
              ],
              percentiles: { p75: 2014 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5746652935118435,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3985581874356333,
                },
                { start: "0.25", density: 0.02677651905252319 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9300202839756594 },
                { start: 200, end: 500, density: 0.04056795131845844 },
                { start: 500, density: 0.029411764705882207 },
              ],
              percentiles: { p75: 80 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8221778221778221 },
                { start: 800, end: 1800, density: 0.14985014985014986 },
                { start: 1800, density: 0.027972027972027996 },
              ],
              percentiles: { p75: 714 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1319, lcp: 2014, cls: "0.14", fid: 2 },
      timestamp: 1653516067053,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7125171939477305,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.25378266850068776,
                },
                { start: "0.25", density: 0.03370013755158181 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9534543936547692 },
                { start: 200, end: 500, density: 0.02629931120851596 },
                { start: 500, density: 0.020246295136714845 },
              ],
              percentiles: { p75: 63 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7549019607843138 },
                { start: 800, end: 1800, density: 0.19942067736185384 },
                { start: 1800, density: 0.04567736185383231 },
              ],
              percentiles: { p75: 792 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.874776386404293 },
                { start: 1800, end: 3000, density: 0.08296064400715561 },
                { start: 3000, density: 0.04226296958855148 },
              ],
              percentiles: { p75: 1209 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9912047453466967 },
                { start: 100, end: 300, density: 0.005931683370832482 },
                { start: 300, density: 0.002863571282470846 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8544104410441048 },
                { start: 2500, end: 4000, density: 0.08708370837083708 },
                { start: 4000, density: 0.05850585058505813 },
              ],
              percentiles: { p75: 1828 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: { fcp: 1209, lcp: 1828, cls: "0.10", fid: 3 },
      timestamp: 1653516067363,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7411167512690355 },
                { start: 800, end: 1800, density: 0.24111675126903556 },
                { start: 1800, density: 0.017766497461928942 },
              ],
              percentiles: { p75: 806 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9286608260325406 },
                { start: 1800, end: 3000, density: 0.05319148936170215 },
                { start: 3000, density: 0.018147684605757212 },
              ],
              percentiles: { p75: 1159 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9987421383647799 },
                { start: 100, end: 300, density: 0.0012578616352201257 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.872129112352576 },
                { start: 2500, end: 4000, density: 0.09062693978895091 },
                { start: 4000, density: 0.037243947858473174 },
              ],
              percentiles: { p75: 1941 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8560558021559924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11984781230183893,
                },
                { start: "0.25", density: 0.024096385542168676 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9572118702553485 },
                { start: 200, end: 500, density: 0.02553485162180814 },
                { start: 500, density: 0.0172532781228433 },
              ],
              percentiles: { p75: 74 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1159, lcp: 1941, cls: "0.07", fid: 2 },
      timestamp: 1653516067748,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.au",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6970669110907427 },
                { start: 2500, end: 4000, density: 0.16788878704552396 },
                { start: 4000, density: 0.13504430186373328 },
              ],
              percentiles: { p75: 2851 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.48386085866499534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.34816671889689754,
                },
                { start: "0.25", density: 0.1679724224381071 },
              ],
              percentiles: { p75: "0.20" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9494919306634788 },
                { start: 200, end: 500, density: 0.03825463239689181 },
                { start: 500, density: 0.012253436939629384 },
              ],
              percentiles: { p75: 73 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3494266747133377 },
                { start: 800, end: 1800, density: 0.4831019915509961 },
                { start: 1800, density: 0.16747133373566614 },
              ],
              percentiles: { p75: 1568 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6677710843373497 },
                { start: 1800, end: 3000, density: 0.22289156626506038 },
                { start: 3000, density: 0.10933734939758998 },
              ],
              percentiles: { p75: 2165 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9921426412813538 },
                { start: 100, end: 300, density: 0.004835297673012996 },
                { start: 300, density: 0.003022061045633119 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2165, lcp: 2851, cls: "0.20", fid: 3 },
      timestamp: 1653516068015,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6185037121644775,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.296116504854369,
                },
                { start: "0.25", density: 0.08537978298115363 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9787234042553191 },
                { start: 200, end: 500, density: 0.01486447099970854 },
                { start: 500, density: 0.006412124744972306 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8941828254847645 },
                { start: 800, end: 1800, density: 0.0925207756232687 },
                { start: 1800, density: 0.013296398891966764 },
              ],
              percentiles: { p75: 573 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9637362637362638 },
                { start: 1800, end: 3000, density: 0.030219780219780227 },
                { start: 3000, density: 0.006043956043956064 },
              ],
              percentiles: { p75: 871 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9984222981856429 },
                { start: 100, end: 300, density: 0.0015777018143570863 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9671675013912077 },
                { start: 2500, end: 4000, density: 0.026154702281580417 },
                { start: 4000, density: 0.0066777963272120515 },
              ],
              percentiles: { p75: 1374 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 871, lcp: 1374, cls: "0.12", fid: 2 },
      timestamp: 1653516068277,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8450704225352111 },
                { start: 1800, end: 3000, density: 0.10704225352112678 },
                { start: 3000, density: 0.04788732394366196 },
              ],
              percentiles: { p75: 1485 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9439252336448599 },
                { start: 100, end: 300, density: 0.04361370716510904 },
                { start: 300, density: 0.012461059190031154 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7535816618911174 },
                { start: 2500, end: 4000, density: 0.1977077363896848 },
                { start: 4000, density: 0.04871060171919768 },
              ],
              percentiles: { p75: 2454 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9694444444444444,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030555555555555558,
                },
                { start: "0.25" },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4532577903682721 },
                { start: 200, end: 500, density: 0.41643059490085 },
                { start: 500, density: 0.13031161473087796 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6005830903790087 },
                { start: 800, end: 1800, density: 0.32944606413994176 },
                { start: 1800, density: 0.06997084548104955 },
              ],
              percentiles: { p75: 946 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1485,
        lcp: 2454,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1653516068545,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.pa",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6189382337927515 },
                { start: 2500, end: 4000, density: 0.15952016334864735 },
                { start: 4000, density: 0.22154160285860106 },
              ],
              percentiles: { p75: 3898 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8477580813347237,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13607924921793535,
                },
                { start: "0.25", density: 0.01616266944734098 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.902155887230514 },
                { start: 200, end: 500, density: 0.06467661691542287 },
                { start: 500, density: 0.03316749585406299 },
              ],
              percentiles: { p75: 105 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4841997961264016 },
                { start: 800, end: 1800, density: 0.4413863404689093 },
                { start: 1800, density: 0.07441386340468911 },
              ],
              percentiles: { p75: 1159 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7498729028978136 },
                { start: 1800, end: 3000, density: 0.16115912557193693 },
                { start: 3000, density: 0.08896797153024948 },
              ],
              percentiles: { p75: 2025 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9927591463414634 },
                { start: 100, end: 300 },
                { start: 300, density: 0.007240853658536586 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2025, lcp: 3898, cls: "0.06", fid: 3 },
      timestamp: 1653516068800,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6505956813104988 },
                { start: 800, end: 1800, density: 0.29058078927773645 },
                { start: 1800, density: 0.0588235294117647 },
              ],
              percentiles: { p75: 991 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220813129429317 },
                { start: 1800, end: 3000, density: 0.11376352107422602 },
                { start: 3000, density: 0.0641551659828422 },
              ],
              percentiles: { p75: 1552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9954579863739592 },
                { start: 100, end: 300, density: 0.004542013626040879 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7657250470809789 },
                { start: 2500, end: 4000, density: 0.13333333333333325 },
                { start: 4000, density: 0.1009416195856879 },
              ],
              percentiles: { p75: 2489 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5994252873563218,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30938697318007663,
                },
                { start: "0.25", density: 0.09118773946360152 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9353683813830788 },
                { start: 200, end: 500, density: 0.03448275862068965 },
                { start: 500, density: 0.0301488599962315 },
              ],
              percentiles: { p75: 90 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1552, lcp: 2489, cls: "0.13", fid: 3 },
      timestamp: 1653516069059,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.uk",
          },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.362934362934363 },
                { start: 800, end: 1800, density: 0.4092664092664093 },
                { start: 1800, density: 0.22779922779922773 },
              ],
              percentiles: { p75: 1714 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.657486082625256 },
                { start: 1800, end: 3000, density: 0.2138880750073248 },
                { start: 3000, density: 0.12862584236741914 },
              ],
              percentiles: { p75: 2152 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9899971420405829 },
                { start: 100, end: 300, density: 0.0054301228922549296 },
                { start: 300, density: 0.00457273506716205 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6844660194174756 },
                { start: 2500, end: 4000, density: 0.185201529861724 },
                { start: 4000, density: 0.13033245072080035 },
              ],
              percentiles: { p75: 2813 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4713278135541245,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32750689972401104,
                },
                { start: "0.25", density: 0.20116528672186446 },
              ],
              percentiles: { p75: "0.21" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9370977179637218 },
                { start: 200, end: 500, density: 0.0377413692217671 },
                { start: 500, density: 0.02516091281451128 },
              ],
              percentiles: { p75: 83 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 2152, lcp: 2813, cls: "0.21", fid: 3 },
      timestamp: 1653516069349,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9353683813830788 },
                { start: 200, end: 500, density: 0.03448275862068965 },
                { start: 500, density: 0.0301488599962315 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6505956813104988 },
                { start: 800, end: 1800, density: 0.29058078927773645 },
                { start: 1800, density: 0.0588235294117647 },
              ],
              percentiles: { p75: 991 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220813129429317 },
                { start: 1800, end: 3000, density: 0.11376352107422602 },
                { start: 3000, density: 0.0641551659828422 },
              ],
              percentiles: { p75: 1552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9954579863739592 },
                { start: 100, end: 300, density: 0.004542013626040879 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7657250470809789 },
                { start: 2500, end: 4000, density: 0.13333333333333325 },
                { start: 4000, density: 0.1009416195856879 },
              ],
              percentiles: { p75: 2489 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5994252873563218,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30938697318007663,
                },
                { start: "0.25", density: 0.09118773946360152 },
              ],
              percentiles: { p75: "0.13" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1552, lcp: 2489, cls: "0.13", fid: 3 },
      timestamp: 1653516069673,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9333333333333333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04523809523809524,
                },
                { start: "0.25", density: 0.02142857142857143 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40259740259740256 },
                { start: 200, end: 500, density: 0.40692640692640686 },
                { start: 500, density: 0.19047619047619047 },
              ],
              percentiles: { p75: 382 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.693586698337292 },
                { start: 800, end: 1800, density: 0.2874109263657957 },
                { start: 1800, density: 0.01900237529691217 },
              ],
              percentiles: { p75: 897 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8792270531400966 },
                { start: 1800, end: 3000, density: 0.09903381642512078 },
                { start: 3000, density: 0.021739130434782646 },
              ],
              percentiles: { p75: 1412 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9086757990867583 },
                { start: 100, end: 300, density: 0.03196347031963472 },
                { start: 300, density: 0.059360730593606845 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8187347931873479 },
                { start: 2500, end: 4000, density: 0.13746958637469595 },
                { start: 4000, density: 0.043795620437956255 },
              ],
              percentiles: { p75: 2255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1412,
        lcp: 2255,
        cls: "0.03",
        fid: 15,
      },
      timestamp: 1653516069929,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6962264150943395 },
                { start: 800, end: 1800, density: 0.27547169811320754 },
                { start: 1800, density: 0.028301886792452834 },
              ],
              percentiles: { p75: 878 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9100378787878787 },
                { start: 1800, end: 3000, density: 0.0662878787878788 },
                { start: 3000, density: 0.023674242424242417 },
              ],
              percentiles: { p75: 1228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8735632183908044 },
                { start: 2500, end: 4000, density: 0.0814176245210728 },
                { start: 4000, density: 0.04501915708812263 },
              ],
              percentiles: { p75: 1950 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6811451135241857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2754195459032576,
                },
                { start: "0.25", density: 0.043435340572556734 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9740259740259739 },
                { start: 200, end: 500, density: 0.011988011988011988 },
                { start: 500, density: 0.013986013986013991 },
              ],
              percentiles: { p75: 76 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1228, lcp: 1950, cls: "0.14", fid: 2 },
      timestamp: 1653516070194,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9250871080139373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06097560975609757,
                },
                { start: "0.25", density: 0.013937282229965152 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.2529711375212219 },
                { start: 200, end: 500, density: 0.536502546689303 },
                { start: 500, density: 0.21052631578947514 },
              ],
              percentiles: { p75: 454 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.607017543859649 },
                { start: 800, end: 1800, density: 0.3561403508771929 },
                { start: 1800, density: 0.0368421052631579 },
              ],
              percentiles: { p75: 956 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8513986013986015 },
                { start: 1800, end: 3000, density: 0.11713286713286711 },
                { start: 3000, density: 0.03146853146853149 },
              ],
              percentiles: { p75: 1525 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9430147058823529 },
                { start: 100, end: 300, density: 0.03860294117647058 },
                { start: 300, density: 0.01838235294117647 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7932263814616757 },
                { start: 2500, end: 4000, density: 0.1532976827094474 },
                { start: 4000, density: 0.053475935828877025 },
              ],
              percentiles: { p75: 2330 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1525,
        lcp: 2330,
        cls: "0.03",
        fid: 16,
      },
      timestamp: 1653516070447,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7801047120418844 },
                { start: 1800, end: 3000, density: 0.1483420593368237 },
                { start: 3000, density: 0.07155322862129193 },
              ],
              percentiles: { p75: 1733 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9910313901345291 },
                { start: 100, end: 300, density: 0.004484304932735426 },
                { start: 300, density: 0.004484304932735427 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.805701754385965 },
                { start: 2500, end: 4000, density: 0.12850877192982454 },
                { start: 4000, density: 0.06578947368421043 },
              ],
              percentiles: { p75: 2174 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8396739130434783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14130434782608697,
                },
                { start: "0.25", density: 0.019021739130434784 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9550748752079867 },
                { start: 200, end: 500, density: 0.026622296173044933 },
                { start: 500, density: 0.018302828618968398 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6347826086956522 },
                { start: 800, end: 1800, density: 0.25652173913043486 },
                { start: 1800, density: 0.10869565217391298 },
              ],
              percentiles: { p75: 1166 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 1733, lcp: 2174, cls: "0.08", fid: 1 },
      timestamp: 1653516070700,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.gt",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7466600692726382 },
                { start: 2500, end: 4000, density: 0.14299851558634355 },
                { start: 4000, density: 0.11034141514101833 },
              ],
              percentiles: { p75: 2574 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7915376676986584,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1542827657378741,
                },
                { start: "0.25", density: 0.05417956656346743 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8958115183246076 },
                { start: 200, end: 500, density: 0.0549738219895288 },
                { start: 500, density: 0.0492146596858636 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6084306754697816 },
                { start: 800, end: 1800, density: 0.32808532249873024 },
                { start: 1800, density: 0.06348400203148824 },
              ],
              percentiles: { p75: 1007 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.808743169398907 },
                { start: 1800, end: 3000, density: 0.1217088922006955 },
                { start: 3000, density: 0.06954793840039754 },
              ],
              percentiles: { p75: 1621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9918330308529946 },
                { start: 100, end: 300, density: 0.0027223230490018148 },
                { start: 300, density: 0.0054446460980036296 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: { fcp: 1621, lcp: 2574, cls: "0.08", fid: 2 },
      timestamp: 1653516070952,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaraagri.cz",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9479850046860357 },
                { start: 2500, end: 4000, density: 0.04076850984067478 },
                { start: 4000, density: 0.011246485473289596 },
              ],
              percentiles: { p75: 1479 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7614237614237614,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20298220298220299,
                },
                { start: "0.25", density: 0.03559403559403559 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.928948631781085 },
                { start: 200, end: 500, density: 0.04464714354296688 },
                { start: 500, density: 0.026404224675948117 },
              ],
              percentiles: { p75: 85 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.9366681964203762 },
                { start: 800, end: 1800, density: 0.0523175768701239 },
                { start: 1800, density: 0.011014226709499773 },
              ],
              percentiles: { p75: 519 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9703529411764706 },
                { start: 1800, end: 3000, density: 0.01976470588235294 },
                { start: 3000, density: 0.009882352941176467 },
              ],
              percentiles: { p75: 898 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.99479618386817 },
                { start: 100, end: 300, density: 0.005203816131830009 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 898, lcp: 1479, cls: "0.09", fid: 2 },
      timestamp: 1653516071248,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9303455723542117 },
                { start: 2500, end: 4000, density: 0.053815694744420405 },
                { start: 4000, density: 0.015838732901367933 },
              ],
              percentiles: { p75: 1553 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6118469462840324,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31125827814569534,
                },
                { start: "0.25", density: 0.07689477557027227 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.978144171779141 },
                { start: 200, end: 500, density: 0.015337423312883436 },
                { start: 500, density: 0.006518404907975465 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7950224680262702 },
                { start: 800, end: 1800, density: 0.1873487729001037 },
                { start: 1800, density: 0.017628759073626044 },
              ],
              percentiles: { p75: 732 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9445033580770591 },
                { start: 1800, end: 3000, density: 0.041710851891127616 },
                { start: 3000, density: 0.013785790031813338 },
              ],
              percentiles: { p75: 1023 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9979612640163099 },
                { start: 100, end: 300, density: 0.002038735983690112 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 1023, lcp: 1553, cls: "0.13", fid: 2 },
      timestamp: 1653516071557,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9108061749571184 },
                { start: 1800, end: 3000, density: 0.0634648370497427 },
                { start: 3000, density: 0.025728987993138965 },
              ],
              percentiles: { p75: 1205 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9944873208379273 },
                { start: 100, end: 300, density: 0.004410143329658214 },
                { start: 300, density: 0.0011025358324145537 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8875598086124401 },
                { start: 2500, end: 4000, density: 0.0885167464114833 },
                { start: 4000, density: 0.02392344497607656 },
              ],
              percentiles: { p75: 1756 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4818024263431542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.40381282495667237,
                },
                { start: "0.25", density: 0.11438474870017332 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9586028460543338 },
                { start: 200, end: 500, density: 0.027166882276843468 },
                { start: 500, density: 0.014230271668822765 },
              ],
              percentiles: { p75: 70 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8015267175572519 },
                { start: 800, end: 1800, density: 0.17938931297709929 },
                { start: 1800, density: 0.01908396946564887 },
              ],
              percentiles: { p75: 754 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1205, lcp: 1756, cls: "0.15", fid: 2 },
      timestamp: 1653516071808,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7657480314960632 },
                { start: 1800, end: 3000, density: 0.1633858267716536 },
                { start: 3000, density: 0.07086614173228324 },
              ],
              percentiles: { p75: 1795 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9902120717781403 },
                { start: 100, end: 300, density: 0.004893964110929854 },
                { start: 300, density: 0.004893964110929855 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7917466410748558 },
                { start: 2500, end: 4000, density: 0.1429942418426104 },
                { start: 4000, density: 0.0652591170825338 },
              ],
              percentiles: { p75: 2307 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8317399617590823,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16061185468451245,
                },
                { start: "0.25", density: 0.007648183556405355 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9036608863198462 },
                { start: 200, end: 500, density: 0.0481695568400771 },
                { start: 500, density: 0.048169556840076705 },
              ],
              percentiles: { p75: 99 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5979166666666664 },
                { start: 800, end: 1800, density: 0.2958333333333333 },
                { start: 1800, density: 0.10625000000000033 },
              ],
              percentiles: { p75: 1421 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1795, lcp: 2307, cls: "0.06", fid: 2 },
      timestamp: 1653516072066,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.993859649122807 },
                { start: 100, end: 300, density: 0.006140350877192984 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7598086124401913 },
                { start: 2500, end: 4000, density: 0.1684210526315789 },
                { start: 4000, density: 0.07177033492822979 },
              ],
              percentiles: { p75: 2463 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9783677482792527,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012782694198623403,
                },
                { start: "0.25", density: 0.008849557522123897 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9112988384371701 },
                { start: 200, end: 500, density: 0.062302006335797244 },
                { start: 500, density: 0.02639915522703262 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6676300578034682 },
                { start: 800, end: 1800, density: 0.30443159922928703 },
                { start: 1800, density: 0.02793834296724484 },
              ],
              percentiles: { p75: 910 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8522837706511175 },
                { start: 1800, end: 3000, density: 0.1098153547133139 },
                { start: 3000, density: 0.037900874635568585 },
              ],
              percentiles: { p75: 1470 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1470, lcp: 2463, cls: "0.03", fid: 2 },
      timestamp: 1653516072312,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9286733238231097 },
                { start: 200, end: 500, density: 0.04778887303851641 },
                { start: 500, density: 0.02353780313837371 },
              ],
              percentiles: { p75: 86 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6917404129793508 },
                { start: 800, end: 1800, density: 0.2566371681415929 },
                { start: 1800, density: 0.051622418879056185 },
              ],
              percentiles: { p75: 901 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8411347517730502 },
                { start: 1800, end: 3000, density: 0.099290780141844 },
                { start: 3000, density: 0.05957446808510579 },
              ],
              percentiles: { p75: 1404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9973579920739761 },
                { start: 100, end: 300, density: 0.002642007926023778 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8281360737065915 },
                { start: 2500, end: 4000, density: 0.09815733522324598 },
                { start: 4000, density: 0.07370659107016252 },
              ],
              percentiles: { p75: 2073 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5251641137855582,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3435448577680526,
                },
                { start: "0.25", density: 0.13129102844638937 },
              ],
              percentiles: { p75: "0.17" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1404, lcp: 2073, cls: "0.17", fid: 2 },
      timestamp: 1653516072573,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7959465684016581 },
                { start: 800, end: 1800, density: 0.17088899124827267 },
                { start: 1800, density: 0.03316444035006918 },
              ],
              percentiles: { p75: 716 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9199164345403902 },
                { start: 1800, end: 3000, density: 0.03992571959145776 },
                { start: 3000, density: 0.04015784586815204 },
              ],
              percentiles: { p75: 1065 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9972021450221497 },
                { start: 100, end: 300, density: 0.00186523665190021 },
                { start: 300, density: 0.000932618325950105 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8747107820453492 },
                { start: 2500, end: 4000, density: 0.07785747339194818 },
                { start: 4000, density: 0.04743174456270243 },
              ],
              percentiles: { p75: 1701 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5648655082123304,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3608664603665794,
                },
                { start: "0.25", density: 0.07426803142109017 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.933770014556041 },
                { start: 200, end: 500, density: 0.033236293061620584 },
                { start: 500, density: 0.032993692382338416 },
              ],
              percentiles: { p75: 78 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1065, lcp: 1701, cls: "0.14", fid: 2 },
      timestamp: 1653516072819,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hu" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.756048387096774 },
                { start: 2500, end: 4000, density: 0.17540322580645165 },
                { start: 4000, density: 0.06854838709677434 },
              ],
              percentiles: { p75: 2477 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9324894514767933,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050632911392405056,
                },
                { start: "0.25", density: 0.01687763713080169 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5142857142857147 },
                { start: 200, end: 500, density: 0.3877551020408167 },
                { start: 500, density: 0.09795918367346854 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5907172995780592 },
                { start: 800, end: 1800, density: 0.3628691983122362 },
                { start: 1800, density: 0.04641350210970465 },
              ],
              percentiles: { p75: 948 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8333333333333334 },
                { start: 1800, end: 3000, density: 0.125 },
                { start: 3000, density: 0.04166666666666679 },
              ],
              percentiles: { p75: 1459 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9090909090909091 },
                { start: 100, end: 300, density: 0.0371900826446281 },
                { start: 300, density: 0.05371900826446291 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1459,
        lcp: 2477,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653516073132,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9629629629629629,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029629629629629624,
                },
                { start: "0.25", density: 0.007407407407407407 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37956204379562064 },
                { start: 200, end: 500, density: 0.489051094890511 },
                { start: 500, density: 0.13138686131386842 },
              ],
              percentiles: { p75: 352 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.819548872180451 },
                { start: 800, end: 1800, density: 0.16541353383458643 },
                { start: 1800, density: 0.015037593984962405 },
              ],
              percentiles: { p75: 709 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8787878787878789 },
                { start: 1800, end: 3000, density: 0.09848484848484847 },
                { start: 3000, density: 0.022727272727272728 },
              ],
              percentiles: { p75: 1437 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411764705882353 },
                { start: 100, end: 300, density: 0.03676470588235295 },
                { start: 300, density: 0.022058823529411783 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8007246376811592 },
                { start: 2500, end: 4000, density: 0.17028985507246383 },
                { start: 4000, density: 0.028985507246376812 },
              ],
              percentiles: { p75: 2320 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1437,
        lcp: 2320,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653516073428,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7957081545064378 },
                { start: 800, end: 1800, density: 0.184549356223176 },
                { start: 1800, density: 0.019742489270386274 },
              ],
              percentiles: { p75: 758 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9132893496701224 },
                { start: 1800, end: 3000, density: 0.05655042412818095 },
                { start: 3000, density: 0.03016022620169653 },
              ],
              percentiles: { p75: 1264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9946476360392507 },
                { start: 100, end: 300, density: 0.0026761819803746653 },
                { start: 300, density: 0.002676181980374664 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8529411764705881 },
                { start: 2500, end: 4000, density: 0.10721062618595821 },
                { start: 4000, density: 0.03984819734345354 },
              ],
              percentiles: { p75: 2022 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7633587786259541,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2137404580152672,
                },
                { start: "0.25", density: 0.02290076335877864 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9306930693069307 },
                { start: 200, end: 500, density: 0.044554455445544566 },
                { start: 500, density: 0.024752475247524806 },
              ],
              percentiles: { p75: 83 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1264, lcp: 2022, cls: "0.09", fid: 2 },
      timestamp: 1653516073674,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.ec",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7665 },
                { start: "0.10", end: "0.25", density: 0.1865 },
                { start: "0.25", density: 0.046999999999999945 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9074333800841518 },
                { start: 200, end: 500, density: 0.05797101449275364 },
                { start: 500, density: 0.034595605423094575 },
              ],
              percentiles: { p75: 84 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4401937046004841 },
                { start: 800, end: 1800, density: 0.48619854721549616 },
                { start: 1800, density: 0.07360774818401972 },
              ],
              percentiles: { p75: 1260 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6750727449078565 },
                { start: 1800, end: 3000, density: 0.22647914645974776 },
                { start: 3000, density: 0.09844810863239568 },
              ],
              percentiles: { p75: 2109 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9956917185256103 },
                { start: 100, end: 300, density: 0.0028721876495931063 },
                { start: 300, density: 0.0014360938247965532 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6908177905308474 },
                { start: 2500, end: 4000, density: 0.1838833094213298 },
                { start: 4000, density: 0.12529890004782301 },
              ],
              percentiles: { p75: 2958 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2109, lcp: 2958, cls: "0.08", fid: 2 },
      timestamp: 1653516073937,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5637834474175482,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.28873677660236463,
                },
                { start: "0.25", density: 0.14747977598008719 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9635508524397414 },
                { start: 200, end: 500, density: 0.022927689594356256 },
                { start: 500, density: 0.013521457965902366 },
              ],
              percentiles: { p75: 61 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5781796966161026 },
                { start: 800, end: 1800, density: 0.3436406067677946 },
                { start: 1800, density: 0.07817969661610287 },
              ],
              percentiles: { p75: 1096 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8294573643410846 },
                { start: 1800, end: 3000, density: 0.09481216457960641 },
                { start: 3000, density: 0.07573047107930896 },
              ],
              percentiles: { p75: 1476 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9978483055406132 },
                { start: 100, end: 300, density: 0.002151694459386767 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8267835550181376 },
                { start: 2500, end: 4000, density: 0.08373639661426842 },
                { start: 4000, density: 0.08948004836759406 },
              ],
              percentiles: { p75: 1950 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1476, lcp: 1950, cls: "0.16", fid: 2 },
      timestamp: 1653516074192,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4450867052023123 },
                { start: 1800, end: 3000, density: 0.3988439306358384 },
                { start: 3000, density: 0.15606936416184938 },
              ],
              percentiles: { p75: 2749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.7758620689655175 },
                { start: 100, end: 300, density: 0.11494252873563222 },
                { start: 300, density: 0.10919540229885033 },
              ],
              percentiles: { p75: 62 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49704142011834296 },
                { start: 2500, end: 4000, density: 0.3254437869822484 },
                { start: 4000, density: 0.1775147928994087 },
              ],
              percentiles: { p75: 3593 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9216867469879518,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05421686746987952,
                },
                { start: "0.25", density: 0.02409638554216869 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.2882352941176475 },
                { start: 200, end: 500, density: 0.3588235294117651 },
                { start: 500, density: 0.35294117647058754 },
              ],
              percentiles: { p75: 917 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2874251497005987 },
                { start: 800, end: 1800, density: 0.37125748502994005 },
                { start: 1800, density: 0.34131736526946116 },
              ],
              percentiles: { p75: 1970 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2749,
        lcp: 3593,
        cls: "0.05",
        fid: 62,
      },
      timestamp: 1653516074445,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9127725856697815 },
                { start: 1800, end: 3000, density: 0.051090342679127716 },
                { start: 3000, density: 0.036137071651090875 },
              ],
              percentiles: { p75: 1083 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9958083832335329 },
                { start: 100, end: 300, density: 0.0005988023952095809 },
                { start: 300, density: 0.0035928143712574876 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9002455494168197 },
                { start: 2500, end: 4000, density: 0.058624923265807205 },
                { start: 4000, density: 0.04112952731737304 },
              ],
              percentiles: { p75: 1640 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9443037974683544,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027215189873417717,
                },
                { start: "0.25", density: 0.028481012658227854 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9475476839237058 },
                { start: 200, end: 500, density: 0.03337874659400546 },
                { start: 500, density: 0.01907356948228869 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8593939393939394 },
                { start: 800, end: 1800, density: 0.11818181818181818 },
                { start: 1800, density: 0.022424242424242465 },
              ],
              percentiles: { p75: 628 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1083, lcp: 1640, cls: "0.04", fid: 2 },
      timestamp: 1653516074711,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.in" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5951526032315982 },
                { start: 800, end: 1800, density: 0.32495511669658905 },
                { start: 1800, density: 0.07989228007181275 },
              ],
              percentiles: { p75: 1038 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8400752587017878 },
                { start: 1800, end: 3000, density: 0.0790216368767639 },
                { start: 3000, density: 0.08090310442144841 },
              ],
              percentiles: { p75: 1392 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9896729776247849 },
                { start: 100, end: 300, density: 0.006884681583476765 },
                { start: 300, density: 0.0034423407917383844 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.816326530612245 },
                { start: 2500, end: 4000, density: 0.0955473098330241 },
                { start: 4000, density: 0.0881261595547309 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5219885277246654,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.28489483747609945,
                },
                { start: "0.25", density: 0.1931166347992352 },
              ],
              percentiles: { p75: "0.20" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9161616161616164 },
                { start: 200, end: 500, density: 0.04848484848484849 },
                { start: 500, density: 0.035353535353535 },
              ],
              percentiles: { p75: 74 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 1392, lcp: 1952, cls: "0.20", fid: 2 },
      timestamp: 1653516075067,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9903352461491997 },
                { start: 100, end: 300, density: 0.0036242826940501363 },
                { start: 300, density: 0.00604047115675023 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7650735294117648 },
                { start: 2500, end: 4000, density: 0.14338235294117654 },
                { start: 4000, density: 0.09154411764705872 },
              ],
              percentiles: { p75: 2466 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6218264494126564,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2845774914740432,
                },
                { start: "0.25", density: 0.09359605911330048 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9177377892030848 },
                { start: 200, end: 500, density: 0.05302056555269923 },
                { start: 500, density: 0.029241645244215936 },
              ],
              percentiles: { p75: 93 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5810502283105021 },
                { start: 800, end: 1800, density: 0.33866057838660574 },
                { start: 1800, density: 0.08028919330289211 },
              ],
              percentiles: { p75: 1083 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.801392451447417 },
                { start: 1800, end: 3000, density: 0.1297178453646024 },
                { start: 3000, density: 0.0688897031879806 },
              ],
              percentiles: { p75: 1626 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 1626, lcp: 2466, cls: "0.14", fid: 3 },
      timestamp: 1653516075363,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5767494356659143 },
                { start: 800, end: 1800, density: 0.39390519187358913 },
                { start: 1800, density: 0.02934537246049661 },
              ],
              percentiles: { p75: 994 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8211956521739131 },
                { start: 1800, end: 3000, density: 0.13967391304347823 },
                { start: 3000, density: 0.03913043478260866 },
              ],
              percentiles: { p75: 1599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9975845410628019 },
                { start: 100, end: 300, density: 0.002415458937198068 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7872111767866735 },
                { start: 2500, end: 4000, density: 0.11875335840945724 },
                { start: 4000, density: 0.09403546480386925 },
              ],
              percentiles: { p75: 2286 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8094435075885329,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17537942664418213,
                },
                { start: "0.25", density: 0.015177065767284984 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9624931053502482 },
                { start: 200, end: 500, density: 0.026475455046883617 },
                { start: 500, density: 0.011031439602868186 },
              ],
              percentiles: { p75: 67 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 1599, lcp: 2286, cls: "0.08", fid: 2 },
      timestamp: 1653516075642,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.pe",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7794979079497908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.19372384937238496,
                },
                { start: "0.25", density: 0.026778242677824256 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9053529868114819 },
                { start: 200, end: 500, density: 0.058184639255236634 },
                { start: 500, density: 0.03646237393328155 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36480331262939986 },
                { start: 800, end: 1800, density: 0.4886128364389237 },
                { start: 1800, density: 0.14658385093167645 },
              ],
              percentiles: { p75: 1496 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.654065040650406 },
                { start: 1800, end: 3000, density: 0.24999999999999986 },
                { start: 3000, density: 0.09593495934959408 },
              ],
              percentiles: { p75: 2163 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9932710280373832 },
                { start: 100, end: 300, density: 0.005607476635514018 },
                { start: 300, density: 0.0011214953271028037 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6531768514771351 },
                { start: 2500, end: 4000, density: 0.17644678267907743 },
                { start: 4000, density: 0.1703763658437875 },
              ],
              percentiles: { p75: 3117 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2163, lcp: 3117, cls: "0.08", fid: 2 },
      timestamp: 1653516075920,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8471337579617835 },
                { start: 800, end: 1800, density: 0.13375796178343946 },
                { start: 1800, density: 0.01910828025477707 },
              ],
              percentiles: { p75: 702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.93125 },
                { start: 1800, end: 3000, density: 0.04375 },
                { start: 3000, density: 0.02499999999999996 },
              ],
              percentiles: { p75: 1222 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8639240506329114 },
                { start: 2500, end: 4000, density: 0.10443037974683546 },
                { start: 4000, density: 0.031645569620253125 },
              ],
              percentiles: { p75: 2080 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.916923076923077,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05846153846153847,
                },
                { start: "0.25", density: 0.024615384615384633 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 1222, lcp: 2080, cls: "0.03" },
      timestamp: 1653516076206,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.nz",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7260108630054315 },
                { start: 1800, end: 3000, density: 0.18527459263729634 },
                { start: 3000, density: 0.08871454435727218 },
              ],
              percentiles: { p75: 1964 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9940143655227454 },
                { start: 100, end: 300, density: 0.005985634477254589 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7448416751787539 },
                { start: 2500, end: 4000, density: 0.14770173646578147 },
                { start: 4000, density: 0.10745658835546473 },
              ],
              percentiles: { p75: 2528 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5979466119096509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2872689938398357,
                },
                { start: "0.25", density: 0.1147843942505134 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9795427196149218 },
                { start: 200, end: 500, density: 0.015042117930204569 },
                { start: 500, density: 0.005415162454873646 },
              ],
              percentiles: { p75: 61 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3156482246077622 },
                { start: 800, end: 1800, density: 0.5796862097440133 },
                { start: 1800, density: 0.1046655656482246 },
              ],
              percentiles: { p75: 1464 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 1964, lcp: 2528, cls: "0.16", fid: 2 },
      timestamp: 1653516076483,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.th",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9367378048780488,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02820121951219512,
                },
                { start: "0.25", density: 0.035060975609756115 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9437500000000001 },
                { start: 200, end: 500, density: 0.025694444444444447 },
                { start: 500, density: 0.0305555555555554 },
              ],
              percentiles: { p75: 54 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6886942675159237 },
                { start: 800, end: 1800, density: 0.28582802547770697 },
                { start: 1800, density: 0.02547770700636932 },
              ],
              percentiles: { p75: 904 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8824850299401197 },
                { start: 1800, end: 3000, density: 0.09131736526946105 },
                { start: 3000, density: 0.026197604790419243 },
              ],
              percentiles: { p75: 1271 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.987363584147042 },
                { start: 100, end: 300, density: 0.004595060310166571 },
                { start: 300, density: 0.008041355542791508 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8551401869158878 },
                { start: 2500, end: 4000, density: 0.09381739755571532 },
                { start: 4000, density: 0.05104241552839698 },
              ],
              percentiles: { p75: 1774 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1271, lcp: 1774, cls: "0.02", fid: 2 },
      timestamp: 1653516076767,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ci" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9095826893353942 },
                { start: 200, end: 500, density: 0.0687789799072643 },
                { start: 500, density: 0.02163833075734157 },
              ],
              percentiles: { p75: 104 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5689223057644106 },
                { start: 800, end: 1800, density: 0.30827067669172914 },
                { start: 1800, density: 0.12280701754386025 },
              ],
              percentiles: { p75: 1592 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7102076124567472 },
                { start: 1800, end: 3000, density: 0.16089965397923867 },
                { start: 3000, density: 0.12889273356401415 },
              ],
              percentiles: { p75: 2687 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7588235294117648 },
                { start: 2500, end: 4000, density: 0.06302521008403364 },
                { start: 4000, density: 0.17815126050420158 },
              ],
              percentiles: { p75: 3580 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2687, lcp: 3580 },
      timestamp: 1653516077090,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.998710924911376 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0012890750886239122 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8609670248240086 },
                { start: 2500, end: 4000, density: 0.07530566876620969 },
                { start: 4000, density: 0.06372730640978169 },
              ],
              percentiles: { p75: 1873 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9557906669185717,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028528244851690913,
                },
                { start: "0.25", density: 0.015681088229737412 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9824116047144152 },
                { start: 200, end: 500, density: 0.010879419764279237 },
                { start: 500, density: 0.00670897552130552 },
              ],
              percentiles: { p75: 54 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6634756995581739 },
                { start: 800, end: 1800, density: 0.29841678939617083 },
                { start: 1800, density: 0.03810751104565536 },
              ],
              percentiles: { p75: 929 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8826587448941702 },
                { start: 1800, end: 3000, density: 0.09803193464537692 },
                { start: 3000, density: 0.01930932046045302 },
              ],
              percentiles: { p75: 1376 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1376, lcp: 1873, cls: "0.03", fid: 1 },
      timestamp: 1653516077368,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.ke",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7379110251450678,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20986460348162475,
                },
                { start: "0.25", density: 0.052224371373307515 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9335899903753608 },
                { start: 200, end: 500, density: 0.027911453320500483 },
                { start: 500, density: 0.038498556304138634 },
              ],
              percentiles: { p75: 87 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44219653179190765 },
                { start: 800, end: 1800, density: 0.42196531791907527 },
                { start: 1800, density: 0.1358381502890172 },
              ],
              percentiles: { p75: 1496 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7342007434944231 },
                { start: 1800, end: 3000, density: 0.16728624535315958 },
                { start: 3000, density: 0.09851301115241737 },
              ],
              percentiles: { p75: 2100 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9919549477071601 },
                { start: 100, end: 300, density: 0.004022526146419952 },
                { start: 300, density: 0.004022526146419953 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7314901593252102 },
                { start: 2500, end: 4000, density: 0.12511715089034672 },
                { start: 4000, density: 0.14339268978444297 },
              ],
              percentiles: { p75: 3031 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: { fcp: 2100, lcp: 3031, cls: "0.10", fid: 3 },
      timestamp: 1653516077626,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.za",
          },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5787504676393562 },
                { start: 800, end: 1800, density: 0.3583988028432471 },
                { start: 1800, density: 0.06285072951739672 },
              ],
              percentiles: { p75: 1148 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7938760268857357 },
                { start: 1800, end: 3000, density: 0.12061239731142642 },
                { start: 3000, density: 0.08551157580283798 },
              ],
              percentiles: { p75: 1718 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7398266767143945 },
                { start: 2500, end: 4000, density: 0.11586284853052009 },
                { start: 4000, density: 0.14431047475508538 },
              ],
              percentiles: { p75: 2784 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.49324063344920827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3962920046349942,
                },
                { start: "0.25", density: 0.11046736191579759 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.907150879820292 },
                { start: 200, end: 500, density: 0.03257207038562336 },
                { start: 500, density: 0.06027704979408466 },
              ],
              percentiles: { p75: 78 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 1718, lcp: 2784, cls: "0.16", fid: 3 },
      timestamp: 1653516077902,
    },
  ],
};
