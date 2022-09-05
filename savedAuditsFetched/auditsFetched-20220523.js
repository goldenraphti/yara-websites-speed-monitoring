export const audit26 = {
  date: "2022-05-23T10:32:08.473Z",
  dateParsedLocale: "23/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "23/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8253825382538255 },
                { start: 200, end: 500, density: 0.14481448144814482 },
                { start: 500, density: 0.029802980298029785 },
              ],
              percentiles: { p75: 168 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3479 },
                { start: 800, end: 1800, density: 0.5035 },
                { start: 1800, density: 0.14859999999999995 },
              ],
              percentiles: { p75: 1549 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6670998700389882 },
                { start: 1800, end: 3000, density: 0.22003398980305913 },
                { start: 3000, density: 0.11286614015795261 },
              ],
              percentiles: { p75: 2200 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803980398039803 },
                { start: 100, end: 300, density: 0.008200820082008202 },
                { start: 300, density: 0.011401140114011412 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7325 },
                { start: 2500, end: 4000, density: 0.17549999999999996 },
                { start: 4000, density: 0.09200000000000008 },
              ],
              percentiles: { p75: 2677 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7536 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17790000000000003,
                },
                { start: "0.25", density: 0.06849999999999995 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2200, lcp: 2677, cls: "0.09", fid: 9 },
      timestamp: 1653301851370,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9404135096956466,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04314883780660074,
                },
                { start: "0.25", density: 0.016437652497752656 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.41839574898785425 },
                { start: 200, end: 500, density: 0.4467358299595142 },
                { start: 500, density: 0.13486842105263147 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6521121302157346 },
                { start: 800, end: 1800, density: 0.32269732592688294 },
                { start: 1800, density: 0.025190543857382643 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8906047235920063 },
                { start: 1800, end: 3000, density: 0.08915131066701272 },
                { start: 3000, density: 0.020243965740980974 },
              ],
              percentiles: { p75: 1379 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533093894304772 },
                { start: 100, end: 300, density: 0.029502308876346847 },
                { start: 300, density: 0.01718830169317594 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8972815533980583 },
                { start: 2500, end: 4000, density: 0.08420711974110028 },
                { start: 4000, density: 0.01851132686084143 },
              ],
              percentiles: { p75: 1816 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1379,
        lcp: 1816,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653301851941,
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
                  density: 0.8886777355471095,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09491898379675935,
                },
                { start: "0.25", density: 0.016403280656131225 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5597440255974401 },
                { start: 200, end: 500, density: 0.33336666333366644 },
                { start: 500, density: 0.10688931106889339 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6783356671334267 },
                { start: 800, end: 1800, density: 0.2810562112422485 },
                { start: 1800, density: 0.040608121624324776 },
              ],
              percentiles: { p75: 899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8180636127225445 },
                { start: 1800, end: 3000, density: 0.13172634526905383 },
                { start: 3000, density: 0.05021004200840177 },
              ],
              percentiles: { p75: 1594 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9471000000000002 },
                { start: 100, end: 300, density: 0.036199999999999996 },
                { start: 300, density: 0.016699999999999934 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.868560568170451 },
                { start: 2500, end: 4000, density: 0.09322796839051714 },
                { start: 4000, density: 0.038211463439031805 },
              ],
              percentiles: { p75: 1953 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1594,
        lcp: 1953,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301852754,
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
                  density: 0.9278072192780722,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0410958904109589,
                },
                { start: "0.25", density: 0.031096890310968916 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.612361236123612 },
                { start: 200, end: 500, density: 0.2654265426542653 },
                { start: 500, density: 0.12221222122212265 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5357999999999994 },
                { start: 800, end: 1800, density: 0.36939999999999945 },
                { start: 1800, density: 0.09480000000000109 },
              ],
              percentiles: { p75: 1148 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.720227977202279 },
                { start: 1800, end: 3000, density: 0.17848215178482132 },
                { start: 3000, density: 0.10128987101289966 },
              ],
              percentiles: { p75: 1932 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652104368689393 },
                { start: 100, end: 300, density: 0.027291812456263123 },
                { start: 300, density: 0.007497750674797556 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7679499999999984 },
                { start: 2500, end: 4000, density: 0.14034999999999972 },
                { start: 4000, density: 0.09170000000000195 },
              ],
              percentiles: { p75: 2433 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1932,
        lcp: 2433,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301853166,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6226877646534432 },
                { start: 200, end: 500, density: 0.30387786940049033 },
                { start: 500, density: 0.07343436594606649 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5737078651685396 },
                { start: 800, end: 1800, density: 0.37561797752808995 },
                { start: 1800, density: 0.05067415730337058 },
              ],
              percentiles: { p75: 1009 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8557024423033833 },
                { start: 1800, end: 3000, density: 0.10374187766076629 },
                { start: 3000, density: 0.040555680035850354 },
              ],
              percentiles: { p75: 1491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561870259255064 },
                { start: 100, end: 300, density: 0.02445375297181025 },
                { start: 300, density: 0.019359221102683215 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8696017947279862 },
                { start: 2500, end: 4000, density: 0.09528883903533371 },
                { start: 4000, density: 0.03510936623668006 },
              ],
              percentiles: { p75: 1930 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9339886071707808,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05808109013738413,
                },
                { start: "0.25", density: 0.007930302691835136 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1491,
        lcp: 1930,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301853489,
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
                { start: 0, end: 2500, density: 0.6386214594670014 },
                { start: 2500, end: 4000, density: 0.2535230919492116 },
                { start: 4000, density: 0.1078554485837871 },
              ],
              percentiles: { p75: 2956 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9422731666896837,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023753625189890902,
                },
                { start: "0.25", density: 0.03397320812042536 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.620051635111876 },
                { start: 200, end: 500, density: 0.33405048766494544 },
                { start: 500, density: 0.045897877223178514 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26875526833380153 },
                { start: 800, end: 1800, density: 0.5591458274796287 },
                { start: 1800, density: 0.1720989041865697 },
              ],
              percentiles: { p75: 1595 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4750973845297721 },
                { start: 1800, end: 3000, density: 0.33820255982192565 },
                { start: 3000, density: 0.18670005564830225 },
              ],
              percentiles: { p75: 2665 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723203769140164 },
                { start: 100, end: 300, density: 0.021790341578327443 },
                { start: 300, density: 0.00588928150765607 },
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
        fcp: 2665,
        lcp: 2956,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301854278,
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
                  density: 0.9640378548895899,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020189274447949532,
                },
                { start: "0.25", density: 0.01577287066246058 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6465700894759276 },
                { start: 200, end: 500, density: 0.25223689816787426 },
                { start: 500, density: 0.10119301235619826 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3751360766383625 },
                { start: 800, end: 1800, density: 0.5179621162638794 },
                { start: 1800, density: 0.1069018070977581 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.611087144089732 },
                { start: 1800, end: 3000, density: 0.26962899050905925 },
                { start: 3000, density: 0.1192838654012088 },
              ],
              percentiles: { p75: 2413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9361747243426632 },
                { start: 100, end: 300, density: 0.03604749787955895 },
                { start: 300, density: 0.027777777777777842 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7304152397260273 },
                { start: 2500, end: 4000, density: 0.20494434931506844 },
                { start: 4000, density: 0.06464041095890424 },
              ],
              percentiles: { p75: 2689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2413,
        lcp: 2689,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301855008,
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
                  density: 0.9778674492540964,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009904622157006602,
                },
                { start: "0.25", density: 0.012227928588897027 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5543293718166381 },
                { start: 200, end: 500, density: 0.3598108173659954 },
                { start: 500, density: 0.08585981081736642 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6886977886977889 },
                { start: 800, end: 1800, density: 0.25798525798525807 },
                { start: 1800, density: 0.05331695331695305 },
              ],
              percentiles: { p75: 899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8172294799112642 },
                { start: 1800, end: 3000, density: 0.11646536849889078 },
                { start: 3000, density: 0.06630515158984507 },
              ],
              percentiles: { p75: 1544 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.946925646418409 },
                { start: 100, end: 300, density: 0.03723864901645429 },
                { start: 300, density: 0.015835704565136652 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.848921749845964 },
                { start: 2500, end: 4000, density: 0.10597658656808384 },
                { start: 4000, density: 0.04510166358595217 },
              ],
              percentiles: { p75: 1960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1544,
        lcp: 1960,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301855546,
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
                  density: 0.914055030277276,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07553383618400084,
                },
                { start: "0.25", density: 0.010411133538723043 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5259789565028745 },
                { start: 200, end: 500, density: 0.3589326391148713 },
                { start: 500, density: 0.11508840438225416 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6717807639403238 },
                { start: 800, end: 1800, density: 0.28663633477938844 },
                { start: 1800, density: 0.0415829012802877 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8121341138903672 },
                { start: 1800, end: 3000, density: 0.13602980308674822 },
                { start: 3000, density: 0.05183608302288457 },
              ],
              percentiles: { p75: 1611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9422716756637656 },
                { start: 100, end: 300, density: 0.03944034372590063 },
                { start: 300, density: 0.018287980610333727 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.866826923076923 },
                { start: 2500, end: 4000, density: 0.09396367521367521 },
                { start: 4000, density: 0.039209401709401806 },
              ],
              percentiles: { p75: 1956 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 1956,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301856053,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6153729990939302 },
                { start: 200, end: 500, density: 0.2648746602234978 },
                { start: 500, density: 0.11975234068257204 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8422425032594524 },
                { start: 800, end: 1800, density: 0.1448826597131682 },
                { start: 1800, density: 0.012874837027379387 },
              ],
              percentiles: { p75: 705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9356955380577426 },
                { start: 1800, end: 3000, density: 0.046259842519685054 },
                { start: 3000, density: 0.018044619422572197 },
              ],
              percentiles: { p75: 1214 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942073170731707 },
                { start: 100, end: 300, density: 0.02968549422336328 },
                { start: 300, density: 0.028241335044929518 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9371033360455655 },
                { start: 2500, end: 4000, density: 0.0502034174125305 },
                { start: 4000, density: 0.012693246541903989 },
              ],
              percentiles: { p75: 1593 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9493102341995509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029515559833172923,
                },
                { start: "0.25", density: 0.02117420596727624 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1214,
        lcp: 1593,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301856549,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9344040247678019 },
                { start: 100, end: 300, density: 0.033281733746130034 },
                { start: 300, density: 0.03231424148606799 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8710023400936037 },
                { start: 2500, end: 4000, density: 0.09740639625585021 },
                { start: 4000, density: 0.03159126365054601 },
              ],
              percentiles: { p75: 1971 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9619138755980862,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023540669856459324,
                },
                { start: "0.25", density: 0.01454545454545454 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.517585104382171 },
                { start: 200, end: 500, density: 0.3332706413391013 },
                { start: 500, density: 0.14914425427872782 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6759439470611132 },
                { start: 800, end: 1800, density: 0.2820163487738419 },
                { start: 1800, density: 0.04203970416504494 },
              ],
              percentiles: { p75: 942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8623174294060373 },
                { start: 1800, end: 3000, density: 0.104381694255112 },
                { start: 3000, density: 0.03330087633885077 },
              ],
              percentiles: { p75: 1462 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1462,
        lcp: 1971,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301857051,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9172 },
                { start: 1800, end: 3000, density: 0.07060000000000001 },
                { start: 3000, density: 0.012199999999999999 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643 },
                { start: 100, end: 300, density: 0.0235 },
                { start: 300, density: 0.0122 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9262926292629262 },
                { start: 2500, end: 4000, density: 0.06050605060506051 },
                { start: 4000, density: 0.013201320132013196 },
              ],
              percentiles: { p75: 1755 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.964996499649965,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0241024102410241,
                },
                { start: "0.25", density: 0.0109010901090109 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6841315868413164 },
                { start: 200, end: 500, density: 0.23217678232176808 },
                { start: 500, density: 0.08369163083691557 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7569756975697569 },
                { start: 800, end: 1800, density: 0.22582258225822577 },
                { start: 1800, density: 0.01720172017201721 },
              ],
              percentiles: { p75: 795 },
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
        lcp: 1755,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653301857582,
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
                  density: 0.9777832633917551,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012219205134534682,
                },
                { start: "0.25", density: 0.009997531473710188 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299270072992701 },
                { start: 200, end: 500, density: 0.29866180048661795 },
                { start: 500, density: 0.07141119221411191 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5841865054890835 },
                { start: 800, end: 1800, density: 0.3696805230048106 },
                { start: 1800, density: 0.046132971506105944 },
              ],
              percentiles: { p75: 984 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8635238802276665 },
                { start: 1800, end: 3000, density: 0.10294481563969314 },
                { start: 3000, density: 0.033531304132640445 },
              ],
              percentiles: { p75: 1478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962981304939953 },
                { start: 100, end: 300, density: 0.021047418596013372 },
                { start: 300, density: 0.01597127646403368 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8944732937685458 },
                { start: 2500, end: 4000, density: 0.07721315529179025 },
                { start: 4000, density: 0.028313550939663888 },
              ],
              percentiles: { p75: 1811 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1478,
        lcp: 1811,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301857896,
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
                  density: 0.9586868314275175,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014631747202754211,
                },
                { start: "0.25", density: 0.026681421369728273 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5494250061169565 },
                { start: 200, end: 500, density: 0.3125764619525326 },
                { start: 500, density: 0.13799853193051093 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5194403169886076 },
                { start: 800, end: 1800, density: 0.3781575037147098 },
                { start: 1800, density: 0.10240217929668255 },
              ],
              percentiles: { p75: 1184 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6984756475399663 },
                { start: 1800, end: 3000, density: 0.19246498946585658 },
                { start: 3000, density: 0.10905936299417719 },
              ],
              percentiles: { p75: 2008 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585439838220425 },
                { start: 100, end: 300, density: 0.0333670374115268 },
                { start: 300, density: 0.00808897876643073 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7713221601489745 },
                { start: 2500, end: 4000, density: 0.14003724394785833 },
                { start: 4000, density: 0.08864059590316734 },
              ],
              percentiles: { p75: 2419 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2008,
        lcp: 2419,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301858383,
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
                  density: 0.7838216178382162,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17578242175782424,
                },
                { start: "0.25", density: 0.0403959604039596 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.699369936993699 },
                { start: 200, end: 500, density: 0.2034203420342034 },
                { start: 500, density: 0.09720972097209758 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7298270172982703 },
                { start: 800, end: 1800, density: 0.23177682231776828 },
                { start: 1800, density: 0.038396160383961445 },
              ],
              percentiles: { p75: 844 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8897110288971102 },
                { start: 1800, end: 3000, density: 0.0750924907509249 },
                { start: 3000, density: 0.03519648035196474 },
              ],
              percentiles: { p75: 1304 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9641071785642872 },
                { start: 100, end: 300, density: 0.018796240751849633 },
                { start: 300, density: 0.017096580683863164 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.869626074785043 },
                { start: 2500, end: 4000, density: 0.09288142371525697 },
                { start: 4000, density: 0.037492501499700064 },
              ],
              percentiles: { p75: 1881 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1304,
        lcp: 1881,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1653301858852,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8733239943966379 },
                { start: 1800, end: 3000, density: 0.09565739443666202 },
                { start: 3000, density: 0.03101861116670013 },
              ],
              percentiles: { p75: 1433 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677 },
                { start: 100, end: 300, density: 0.0181 },
                { start: 300, density: 0.014199999999999992 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8880111988801119 },
                { start: 2500, end: 4000, density: 0.08129187081291872 },
                { start: 4000, density: 0.030696930306969315 },
              ],
              percentiles: { p75: 1845 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9565956595659565,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0308030803080308,
                },
                { start: "0.25", density: 0.012601260126012601 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6772354470894179 },
                { start: 200, end: 500, density: 0.25815163032606514 },
                { start: 500, density: 0.06461292258451687 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6088217643528706 },
                { start: 800, end: 1800, density: 0.3494698939787957 },
                { start: 1800, density: 0.04170834166833376 },
              ],
              percentiles: { p75: 959 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1433,
        lcp: 1845,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653301859173,
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
                  density: 0.9019098090190981,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0458954104589541,
                },
                { start: "0.25", density: 0.05219478052194782 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6421284256851373 },
                { start: 200, end: 500, density: 0.2850570114022806 },
                { start: 500, density: 0.07281456291258208 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31870438868339485 },
                { start: 800, end: 1800, density: 0.525842247325802 },
                { start: 1800, density: 0.1554533639908033 },
              ],
              percentiles: { p75: 1494 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5433999999999993 },
                { start: 1800, end: 3000, density: 0.2850999999999997 },
                { start: 3000, density: 0.17150000000000104 },
              ],
              percentiles: { p75: 2552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678032196780323 },
                { start: 100, end: 300, density: 0.023597640235976405 },
                { start: 300, density: 0.008599140085991401 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.655603319004298 },
                { start: 2500, end: 4000, density: 0.22203338998300476 },
                { start: 4000, density: 0.12236329101269718 },
              ],
              percentiles: { p75: 2954 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2552,
        lcp: 2954,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653301859530,
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
                { start: 0, end: 100, density: 0.9593959395939594 },
                { start: 100, end: 300, density: 0.0259025902590259 },
                { start: 300, density: 0.014701470147014733 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8871838448465462 },
                { start: 2500, end: 4000, density: 0.09152254323702891 },
                { start: 4000, density: 0.021293611916424947 },
              ],
              percentiles: { p75: 1844 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8763 },
                { start: "0.10", end: "0.25", density: 0.0945 },
                { start: "0.25", density: 0.02920000000000001 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4829068372650938 },
                { start: 200, end: 500, density: 0.3945421831267493 },
                { start: 500, density: 0.12255097960815685 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.662766276627663 },
                { start: 800, end: 1800, density: 0.31033103310331034 },
                { start: 1800, density: 0.026902690269026794 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8949210157968406 },
                { start: 1800, end: 3000, density: 0.08498300339932015 },
                { start: 3000, density: 0.02009598080383933 },
              ],
              percentiles: { p75: 1356 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1356,
        lcp: 1844,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653301859862,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.647012490154158 },
                { start: 200, end: 500, density: 0.29526274333295827 },
                { start: 500, density: 0.05772476651288384 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6922103325279023 },
                { start: 800, end: 1800, density: 0.27821884708318956 },
                { start: 1800, density: 0.029570820388908025 },
              ],
              percentiles: { p75: 865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8974707950550076 },
                { start: 1800, end: 3000, density: 0.08166042871725078 },
                { start: 3000, density: 0.020868776227741668 },
              ],
              percentiles: { p75: 1343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9780621572212066 },
                { start: 100, end: 300, density: 0.015539305301645335 },
                { start: 300, density: 0.006398537477148095 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9167233945995008 },
                { start: 2500, end: 4000, density: 0.06864079872929434 },
                { start: 4000, density: 0.014635806671204924 },
              ],
              percentiles: { p75: 1687 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9091217745586238,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07831598008148485,
                },
                { start: "0.25", density: 0.01256224535989135 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 1687,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301860173,
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
                  density: 0.9407184124591811,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04772670183371012,
                },
                { start: "0.25", density: 0.011554885707108758 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5514479359211335 },
                { start: 200, end: 500, density: 0.3531731361675908 },
                { start: 500, density: 0.0953789279112758 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5919656392117231 },
                { start: 800, end: 1800, density: 0.3631884790298131 },
                { start: 1800, density: 0.04484588175846384 },
              ],
              percentiles: { p75: 1036 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8320292781423523 },
                { start: 1800, end: 3000, density: 0.129984856133266 },
                { start: 3000, density: 0.03798586572438169 },
              ],
              percentiles: { p75: 1563 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655217278168098 },
                { start: 100, end: 300, density: 0.02459016393442623 },
                { start: 300, density: 0.009888108248763993 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8656659939455097 },
                { start: 2500, end: 4000, density: 0.1055751765893037 },
                { start: 4000, density: 0.02875882946518659 },
              ],
              percentiles: { p75: 2004 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1563,
        lcp: 2004,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301860630,
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
                { start: 0, end: 800, density: 0.7880408361691783 },
                { start: 800, end: 1800, density: 0.17197374817695676 },
                { start: 1800, density: 0.0399854156538648 },
              ],
              percentiles: { p75: 749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8651562878604311 },
                { start: 1800, end: 3000, density: 0.0902592682335837 },
                { start: 3000, density: 0.0445844439059852 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9326418547895056 },
                { start: 100, end: 300, density: 0.03624161073825502 },
                { start: 300, density: 0.031116534472239367 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8851622311337949 },
                { start: 2500, end: 4000, density: 0.07886742009964756 },
                { start: 4000, density: 0.035970348766557594 },
              ],
              percentiles: { p75: 1765 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9348483017043394,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03589991538740482,
                },
                { start: "0.25", density: 0.02925178290825577 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4911883781852825 },
                { start: 200, end: 500, density: 0.3766372945939511 },
                { start: 500, density: 0.1321743272207665 },
              ],
              percentiles: { p75: 321 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1391,
        lcp: 1765,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301861080,
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
                  density: 0.9307479224376731,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03403244954491492,
                },
                { start: "0.25", density: 0.03521962801741196 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49785463528799895 },
                { start: 200, end: 500, density: 0.31088285008451433 },
                { start: 500, density: 0.1912625146274866 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28340026773761723 },
                { start: 800, end: 1800, density: 0.4416331994645249 },
                { start: 1800, density: 0.2749665327978579 },
              ],
              percentiles: { p75: 1942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47482498653742594 },
                { start: 1800, end: 3000, density: 0.37681744749596113 },
                { start: 3000, density: 0.1483575659666129 },
              ],
              percentiles: { p75: 2661 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.919082939986514 },
                { start: 100, end: 300, density: 0.032231962238705336 },
                { start: 300, density: 0.04868509777478064 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6056834819645948 },
                { start: 2500, end: 4000, density: 0.29235990949021695 },
                { start: 4000, density: 0.10195660854518829 },
              ],
              percentiles: { p75: 3105 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2661,
        lcp: 3105,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301861520,
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
                  density: 0.8529147085291471,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1044895510448955,
                },
                { start: "0.25", density: 0.04259574042595737 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4913000000000001 },
                { start: 200, end: 500, density: 0.2992000000000001 },
                { start: 500, density: 0.20949999999999977 },
              ],
              percentiles: { p75: 429 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41002300690207044 },
                { start: 800, end: 1800, density: 0.3991197359207761 },
                { start: 1800, density: 0.19085725717715357 },
              ],
              percentiles: { p75: 1586 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5085542771385687 },
                { start: 1800, end: 3000, density: 0.24262131065532744 },
                { start: 3000, density: 0.24882441220610385 },
              ],
              percentiles: { p75: 3037 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9130826165233048 },
                { start: 100, end: 300, density: 0.0559111822364473 },
                { start: 300, density: 0.03100620124024797 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5504600920184032 },
                { start: 2500, end: 4000, density: 0.23719743948789732 },
                { start: 4000, density: 0.21234246849369948 },
              ],
              percentiles: { p75: 3702 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3037,
        lcp: 3702,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1653301862041,
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
                  density: 0.8583141685831417,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10978902109789021,
                },
                { start: "0.25", density: 0.03189681031896809 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7161 },
                { start: 200, end: 500, density: 0.20919999999999994 },
                { start: 500, density: 0.07470000000000013 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7191000000000001 },
                { start: 800, end: 1800, density: 0.2558 },
                { start: 1800, density: 0.025099999999999997 },
              ],
              percentiles: { p75: 849 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9115999999999999 },
                { start: 1800, end: 3000, density: 0.06859999999999997 },
                { start: 3000, density: 0.019800000000000016 },
              ],
              percentiles: { p75: 1259 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688031196880312 },
                { start: 100, end: 300, density: 0.015298470152984698 },
                { start: 300, density: 0.015898410158984147 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9166916691669167 },
                { start: 2500, end: 4000, density: 0.06330633063306332 },
                { start: 4000, density: 0.020002000200020013 },
              ],
              percentiles: { p75: 1716 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1259,
        lcp: 1716,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653301862336,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7314268573142687 },
                { start: 200, end: 500, density: 0.22347765223477656 },
                { start: 500, density: 0.045095490450954914 },
              ],
              percentiles: { p75: 210 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42637208837348767 },
                { start: 800, end: 1800, density: 0.46416075177446736 },
                { start: 1800, density: 0.10946715985204492 },
              ],
              percentiles: { p75: 1296 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6356635663566353 },
                { start: 1800, end: 3000, density: 0.24752475247524738 },
                { start: 3000, density: 0.11681168116811715 },
              ],
              percentiles: { p75: 2186 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9732026797320269 },
                { start: 100, end: 300, density: 0.021797820217978204 },
                { start: 300, density: 0.004999500049994996 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7423727118135435 },
                { start: 2500, end: 4000, density: 0.15139541862558759 },
                { start: 4000, density: 0.10623186956086886 },
              ],
              percentiles: { p75: 2597 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9402 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044300000000000006,
                },
                { start: "0.25", density: 0.01550000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2186,
        lcp: 2597,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301862630,
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
                { start: 0, end: 200, density: 0.5828787710119117 },
                { start: 200, end: 500, density: 0.3041300233774908 },
                { start: 500, density: 0.11299120561059758 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25165192070780523 },
                { start: 800, end: 1800, density: 0.4726173143689087 },
                { start: 1800, density: 0.27573076492328613 },
              ],
              percentiles: { p75: 1915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4887192726456386 },
                { start: 1800, end: 3000, density: 0.2734313615445052 },
                { start: 3000, density: 0.23784936580985627 },
              ],
              percentiles: { p75: 2962 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525276731712884 },
                { start: 100, end: 300, density: 0.03103959831108068 },
                { start: 300, density: 0.016432728517631 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5572390572390571 },
                { start: 2500, end: 4000, density: 0.25162738496071835 },
                { start: 4000, density: 0.19113355780022465 },
              ],
              percentiles: { p75: 3561 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8256501841723407,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11496818841388548,
                },
                { start: "0.25", density: 0.05938162741377388 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2962,
        lcp: 3561,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653301862930,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6177220805145831 },
                { start: 2500, end: 4000, density: 0.28324276366862566 },
                { start: 4000, density: 0.09903515581679118 },
              ],
              percentiles: { p75: 3047 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9755801104972375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012928176795580108,
                },
                { start: "0.25", density: 0.01149171270718232 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5543046357615897 },
                { start: 200, end: 500, density: 0.3423841059602652 },
                { start: 500, density: 0.10331125827814505 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4286658587639088 },
                { start: 800, end: 1800, density: 0.37556461385920464 },
                { start: 1800, density: 0.1957695273768867 },
              ],
              percentiles: { p75: 1692 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.542595453542264 },
                { start: 1800, end: 3000, density: 0.34418450673140555 },
                { start: 3000, density: 0.11322003972633045 },
              ],
              percentiles: { p75: 2359 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9243604004449388 },
                { start: 100, end: 300, density: 0.05461624026696329 },
                { start: 300, density: 0.021023359288097895 },
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
        fcp: 2359,
        lcp: 3047,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301863409,
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
                  density: 0.9283379102916177,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05374656728128677,
                },
                { start: "0.25", density: 0.017915522427095577 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4324254215304802 },
                { start: 200, end: 500, density: 0.39844357976653716 },
                { start: 500, density: 0.16913099870298268 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6056910569105685 },
                { start: 800, end: 1800, density: 0.2985837922895356 },
                { start: 1800, density: 0.09572515079989594 },
              ],
              percentiles: { p75: 1067 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7292599420595197 },
                { start: 1800, end: 3000, density: 0.16605214643139296 },
                { start: 3000, density: 0.10468791150908727 },
              ],
              percentiles: { p75: 1916 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9433887569279492 },
                { start: 100, end: 300, density: 0.03642121931908155 },
                { start: 300, density: 0.020190023752969244 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7876117832719618 },
                { start: 2500, end: 4000, density: 0.13295633876906882 },
                { start: 4000, density: 0.07943187795896936 },
              ],
              percentiles: { p75: 2315 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1916,
        lcp: 2315,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301863954,
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
                  density: 0.9389615061758004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028060918575368746,
                },
                { start: "0.25", density: 0.032977575248830805 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3997834456207897 },
                { start: 200, end: 500, density: 0.43058229066410064 },
                { start: 500, density: 0.1696342637151097 },
              ],
              percentiles: { p75: 392 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5349198756278402 },
                { start: 800, end: 1800, density: 0.3751494857689547 },
                { start: 1800, density: 0.08993063860320522 },
              ],
              percentiles: { p75: 1143 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7305280925970584 },
                { start: 1800, end: 3000, density: 0.1788039546660237 },
                { start: 3000, density: 0.09066795273691795 },
              ],
              percentiles: { p75: 1878 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9141253964381557 },
                { start: 100, end: 300, density: 0.05220785557453037 },
                { start: 300, density: 0.03366674798731397 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.789965064450066 },
                { start: 2500, end: 4000, density: 0.14004336826888322 },
                { start: 4000, density: 0.0699915672810508 },
              ],
              percentiles: { p75: 2311 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1878,
        lcp: 2311,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1653301864550,
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
                  density: 0.9755600814663952,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013786620711264297,
                },
                { start: "0.25", density: 0.010653297822340587 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5529230769230777 },
                { start: 200, end: 500, density: 0.33046153846153886 },
                { start: 500, density: 0.11661538461538348 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7051158301158301 },
                { start: 800, end: 1800, density: 0.2693050193050193 },
                { start: 1800, density: 0.025579150579150584 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.89783985707325 },
                { start: 1800, end: 3000, density: 0.08900438525255808 },
                { start: 3000, density: 0.013155757674191972 },
              ],
              percentiles: { p75: 1373 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548774549586106 },
                { start: 100, end: 300, density: 0.03148839474111346 },
                { start: 300, density: 0.013634150300275929 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9223777348777349 },
                { start: 2500, end: 4000, density: 0.0637870012870013 },
                { start: 4000, density: 0.013835263835263824 },
              ],
              percentiles: { p75: 1783 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1373,
        lcp: 1783,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301865070,
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
                  density: 0.9656908199761558,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022254603258709767,
                },
                { start: "0.25", density: 0.012054576765134465 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4741960580912864 },
                { start: 200, end: 500, density: 0.387448132780083 },
                { start: 500, density: 0.13835580912863057 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6996111036609896 },
                { start: 800, end: 1800, density: 0.23950650395601447 },
                { start: 1800, density: 0.060882392382996024 },
              ],
              percentiles: { p75: 893 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8540136236142643 },
                { start: 1800, end: 3000, density: 0.104314144517163 },
                { start: 3000, density: 0.04167223186857273 },
              ],
              percentiles: { p75: 1426 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9430147058823527 },
                { start: 100, end: 300, density: 0.035320378151260504 },
                { start: 300, density: 0.021664915966386717 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8729491796718686 },
                { start: 2500, end: 4000, density: 0.09036948112578366 },
                { start: 4000, density: 0.03668133920234781 },
              ],
              percentiles: { p75: 1883 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1426,
        lcp: 1883,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653301865563,
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
                { start: "0.00", end: "0.10", density: 0.9136 },
                { start: "0.10", end: "0.25", density: 0.0624 },
                { start: "0.25", density: 0.023999999999999994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.648864886488649 },
                { start: 200, end: 500, density: 0.26342634263426346 },
                { start: 500, density: 0.08770877087708745 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5299529952995304 },
                { start: 800, end: 1800, density: 0.27382738273827406 },
                { start: 1800, density: 0.19621962196219553 },
              ],
              percentiles: { p75: 1516 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6631336866313363 },
                { start: 1800, end: 3000, density: 0.1347865213478651 },
                { start: 3000, density: 0.20207979202079857 },
              ],
              percentiles: { p75: 2639 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522047795220477 },
                { start: 100, end: 300, density: 0.031496850314968496 },
                { start: 300, density: 0.016298370162983696 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6693508052415724 },
                { start: 2500, end: 4000, density: 0.18340502150645194 },
                { start: 4000, density: 0.1472441732519756 },
              ],
              percentiles: { p75: 3040 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2639,
        lcp: 3040,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301866108,
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
                  density: 0.7912208779122089,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.06609339066093382 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.676332366763324 },
                { start: 200, end: 500, density: 0.23607639236076405 },
                { start: 500, density: 0.08759124087591198 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7797339201760529 },
                { start: 800, end: 1800, density: 0.1995598679603881 },
                { start: 1800, density: 0.020706211863559004 },
              ],
              percentiles: { p75: 798 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9113088691130888 },
                { start: 1800, end: 3000, density: 0.06879312068793124 },
                { start: 3000, density: 0.019898010198979948 },
              ],
              percentiles: { p75: 1275 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464946494649465 },
                { start: 100, end: 300, density: 0.023602360236023603 },
                { start: 300, density: 0.02990299029903 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9071685662867427 },
                { start: 2500, end: 4000, density: 0.07183563287342533 },
                { start: 4000, density: 0.020995800839831862 },
              ],
              percentiles: { p75: 1793 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1275,
        lcp: 1793,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653301866684,
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
                  density: 0.9640378548895899,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020189274447949532,
                },
                { start: "0.25", density: 0.01577287066246058 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6465700894759276 },
                { start: 200, end: 500, density: 0.25223689816787426 },
                { start: 500, density: 0.10119301235619826 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3751360766383625 },
                { start: 800, end: 1800, density: 0.5179621162638794 },
                { start: 1800, density: 0.1069018070977581 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.611087144089732 },
                { start: 1800, end: 3000, density: 0.26962899050905925 },
                { start: 3000, density: 0.1192838654012088 },
              ],
              percentiles: { p75: 2413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9361747243426632 },
                { start: 100, end: 300, density: 0.03604749787955895 },
                { start: 300, density: 0.027777777777777842 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7304152397260273 },
                { start: 2500, end: 4000, density: 0.20494434931506844 },
                { start: 4000, density: 0.06464041095890424 },
              ],
              percentiles: { p75: 2689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2413,
        lcp: 2689,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301867103,
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
                { start: 0, end: 800, density: 0.36829305365557086 },
                { start: 800, end: 1800, density: 0.40082079343365273 },
                { start: 1800, density: 0.2308861529107763 },
              ],
              percentiles: { p75: 1717 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6042079585302631 },
                { start: 1800, end: 3000, density: 0.2046043604207956 },
                { start: 3000, density: 0.19118768104894132 },
              ],
              percentiles: { p75: 2630 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9452075702075702 },
                { start: 100, end: 300, density: 0.030067155067155068 },
                { start: 300, density: 0.024725274725274728 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622541603630859 },
                { start: 2500, end: 4000, density: 0.20552193645990907 },
                { start: 4000, density: 0.13222390317700516 },
              ],
              percentiles: { p75: 3006 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9611185883056678,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024674742036787795,
                },
                { start: "0.25", density: 0.014206669657544503 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6636391159551919 },
                { start: 200, end: 500, density: 0.2579473206176202 },
                { start: 500, density: 0.07841356342718786 },
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
        fcp: 2630,
        lcp: 3006,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301867637,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6003801140342094 },
                { start: 2500, end: 4000, density: 0.24967490247074084 },
                { start: 4000, density: 0.1499449834950497 },
              ],
              percentiles: { p75: 3205 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7903999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1285 },
                { start: "0.25", density: 0.08110000000000012 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6288371162883707 },
                { start: 200, end: 500, density: 0.238876112388761 },
                { start: 500, density: 0.13228677132286837 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28898669600880367 },
                { start: 800, end: 1800, density: 0.39461838551565603 },
                { start: 1800, density: 0.31639491847554035 },
              ],
              percentiles: { p75: 2019 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5116999999999995 },
                { start: 1800, end: 3000, density: 0.28619999999999973 },
                { start: 3000, density: 0.20210000000000075 },
              ],
              percentiles: { p75: 2748 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9377751100440176 },
                { start: 100, end: 300, density: 0.03381352541016406 },
                { start: 300, density: 0.028411364545818288 },
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
        fcp: 2748,
        lcp: 3205,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1653301868147,
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
                  density: 0.8619861986198619,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.104010401040104,
                },
                { start: "0.25", density: 0.034003400340034 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5559555955595555 },
                { start: 200, end: 500, density: 0.31493149314931473 },
                { start: 500, density: 0.12911291129112973 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8448689737947591 },
                { start: 800, end: 1800, density: 0.12962592518503704 },
                { start: 1800, density: 0.02550510102020393 },
              ],
              percentiles: { p75: 680 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9209237228831351 },
                { start: 1800, end: 3000, density: 0.05718284514645605 },
                { start: 3000, density: 0.021893431970408776 },
              ],
              percentiles: { p75: 1177 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954409118176365 },
                { start: 100, end: 300, density: 0.02379524095180964 },
                { start: 300, density: 0.021795640871825547 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9145256423073077 },
                { start: 2500, end: 4000, density: 0.0680795761271619 },
                { start: 4000, density: 0.017394781565530246 },
              ],
              percentiles: { p75: 1735 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1177,
        lcp: 1735,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1653301868517,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5165866889213431 },
                { start: 200, end: 500, density: 0.324431462549551 },
                { start: 500, density: 0.15898184852910596 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6581610206775188 },
                { start: 800, end: 1800, density: 0.30246370435547726 },
                { start: 1800, density: 0.039375274967003965 },
              ],
              percentiles: { p75: 915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.87119021134594 },
                { start: 1800, end: 3000, density: 0.08876529477196886 },
                { start: 3000, density: 0.04004449388209114 },
              ],
              percentiles: { p75: 1460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9418449197860962 },
                { start: 100, end: 300, density: 0.03787878787878788 },
                { start: 300, density: 0.020276292335115912 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8900646023613278 },
                { start: 2500, end: 4000, density: 0.0832033860548006 },
                { start: 4000, density: 0.026732011583871607 },
              ],
              percentiles: { p75: 1857 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9278887923544743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04539530842745438,
                },
                { start: "0.25", density: 0.02671589921807123 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1460,
        lcp: 1857,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301868914,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8936548223350254,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07296954314720813,
                },
                { start: "0.25", density: 0.0333756345177665 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4525203665987779 },
                { start: 200, end: 500, density: 0.3909114052953157 },
                { start: 500, density: 0.15656822810590645 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8200643086816722 },
                { start: 800, end: 1800, density: 0.1509967845659164 },
                { start: 1800, density: 0.028938906752411446 },
              ],
              percentiles: { p75: 715 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.907619775739042 },
                { start: 1800, end: 3000, density: 0.06715086646279307 },
                { start: 3000, density: 0.02522935779816501 },
              ],
              percentiles: { p75: 1233 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942008116245582 },
                { start: 100, end: 300, density: 0.02945411703102501 },
                { start: 300, density: 0.028537766723392997 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9064014282070899 },
                { start: 2500, end: 4000, density: 0.07421576128538636 },
                { start: 4000, density: 0.019382810507523683 },
              ],
              percentiles: { p75: 1794 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1233,
        lcp: 1794,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301869504,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8930843255586365 },
                { start: 2500, end: 4000, density: 0.08734301092807045 },
                { start: 4000, density: 0.019572663513293103 },
              ],
              percentiles: { p75: 1911 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9479852303740568,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031626264247872855,
                },
                { start: "0.25", density: 0.020388505378070316 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5262751159196293 },
                { start: 200, end: 500, density: 0.34435857805255043 },
                { start: 500, density: 0.12936630602782023 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.72998352553542 },
                { start: 800, end: 1800, density: 0.24382207578253706 },
                { start: 1800, density: 0.02619439868204284 },
              ],
              percentiles: { p75: 852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8853710017860043 },
                { start: 1800, end: 3000, density: 0.09043675921415815 },
                { start: 3000, density: 0.02419223899983766 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9133883762344178 },
                { start: 100, end: 300, density: 0.03820624898818196 },
                { start: 300, density: 0.04840537477740017 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 1911,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301870286,
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
                  density: 0.9479852303740568,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031626264247872855,
                },
                { start: "0.25", density: 0.020388505378070316 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5262751159196293 },
                { start: 200, end: 500, density: 0.34435857805255043 },
                { start: 500, density: 0.12936630602782023 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.72998352553542 },
                { start: 800, end: 1800, density: 0.24382207578253706 },
                { start: 1800, density: 0.02619439868204284 },
              ],
              percentiles: { p75: 852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8853710017860043 },
                { start: 1800, end: 3000, density: 0.09043675921415815 },
                { start: 3000, density: 0.02419223899983766 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9133883762344178 },
                { start: 100, end: 300, density: 0.03820624898818196 },
                { start: 300, density: 0.04840537477740017 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8930843255586365 },
                { start: 2500, end: 4000, density: 0.08734301092807045 },
                { start: 4000, density: 0.019572663513293103 },
              ],
              percentiles: { p75: 1911 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 1911,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301870880,
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
                { start: 0, end: 1800, density: 0.6749953729409578 },
                { start: 1800, end: 3000, density: 0.20007403294466014 },
                { start: 3000, density: 0.12493059411438205 },
              ],
              percentiles: { p75: 2147 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616153538584568 },
                { start: 100, end: 300, density: 0.029588164734106363 },
                { start: 300, density: 0.008796481407436994 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7407099278979474 },
                { start: 2500, end: 4000, density: 0.1603808467369199 },
                { start: 4000, density: 0.09890922536513276 },
              ],
              percentiles: { p75: 2582 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9242616416017394,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049646675122304765,
                },
                { start: "0.25", density: 0.026091683275955783 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.673302107728337 },
                { start: 200, end: 500, density: 0.23516783762685395 },
                { start: 500, density: 0.09153005464480905 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5115805076894566 },
                { start: 800, end: 1800, density: 0.3650176023716877 },
                { start: 1800, density: 0.12340188993885563 },
              ],
              percentiles: { p75: 1294 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2147,
        lcp: 2582,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653301871403,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4741051789642069 },
                { start: 200, end: 500, density: 0.3754249150169964 },
                { start: 500, density: 0.15046990601879662 },
              ],
              percentiles: { p75: 361 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5565443455654432 },
                { start: 800, end: 1800, density: 0.3593640635936405 },
                { start: 1800, density: 0.08409159084091619 },
              ],
              percentiles: { p75: 1113 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7473747374737476 },
                { start: 1800, end: 3000, density: 0.16741674167416748 },
                { start: 3000, density: 0.08520852085208502 },
              ],
              percentiles: { p75: 1819 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9257999999999998 },
                { start: 100, end: 300, density: 0.04509999999999999 },
                { start: 300, density: 0.029100000000000147 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7926914617076591 },
                { start: 2500, end: 4000, density: 0.13572285542891432 },
                { start: 4000, density: 0.07158568286342659 },
              ],
              percentiles: { p75: 2294 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8769123087691231,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07489251074892511,
                },
                { start: "0.25", density: 0.04819518048195182 },
              ],
              percentiles: { p75: "0.02" },
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
        lcp: 2294,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1653301871940,
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
                { start: "0.00", end: "0.10", density: 0.9369 },
                { start: "0.10", end: "0.25", density: 0.0344 },
                { start: "0.25", density: 0.028700000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5556555655565556 },
                { start: 200, end: 500, density: 0.3287328732873286 },
                { start: 500, density: 0.11561156115611584 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7996400719856028 },
                { start: 800, end: 1800, density: 0.1636672665466907 },
                { start: 1800, density: 0.03669266146770651 },
              ],
              percentiles: { p75: 729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8726872687268729 },
                { start: 1800, end: 3000, density: 0.08470847084708473 },
                { start: 3000, density: 0.04260426042604244 },
              ],
              percentiles: { p75: 1356 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9423942394239423 },
                { start: 100, end: 300, density: 0.031003100310030996 },
                { start: 300, density: 0.02660266026602672 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8851844446665997 },
                { start: 2500, end: 4000, density: 0.07822653204038786 },
                { start: 4000, density: 0.03658902329301234 },
              ],
              percentiles: { p75: 1755 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1356,
        lcp: 1755,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301872323,
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
                { start: 0, end: 2500, density: 0.7500000000000009 },
                { start: 2500, end: 4000, density: 0.1664000000000001 },
                { start: 4000, density: 0.08359999999999893 },
              ],
              percentiles: { p75: 2630 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7712228777122287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1721827817218278,
                },
                { start: "0.25", density: 0.056594340565943375 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8023592922123366 },
                { start: 200, end: 500, density: 0.13495951214635615 },
                { start: 500, density: 0.06268119564130725 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.517051705170517 },
                { start: 800, end: 1800, density: 0.4008400840084007 },
                { start: 1800, density: 0.08210821082108237 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7228831350594825 },
                { start: 1800, end: 3000, density: 0.18684394681595537 },
                { start: 3000, density: 0.0902729181245621 },
              ],
              percentiles: { p75: 2003 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9671934386877376 },
                { start: 100, end: 300, density: 0.019703940788157633 },
                { start: 300, density: 0.013102620524104854 },
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
      extractedResults: { fcp: 2003, lcp: 2630, cls: "0.08", fid: 9 },
      timestamp: 1653301872754,
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
                  density: 0.9616333580064149,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016901060942511717,
                },
                { start: "0.25", density: 0.021465581051073292 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5929547448915633 },
                { start: 200, end: 500, density: 0.3283189168860473 },
                { start: 500, density: 0.0787263382223894 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44633901705115314 },
                { start: 800, end: 1800, density: 0.4351805416248742 },
                { start: 1800, density: 0.11848044132397255 },
              ],
              percentiles: { p75: 1305 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6105655686761956 },
                { start: 1800, end: 3000, density: 0.24623990055935327 },
                { start: 3000, density: 0.1431945307644512 },
              ],
              percentiles: { p75: 2374 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664286609044218 },
                { start: 100, end: 300, density: 0.022297381936615308 },
                { start: 300, density: 0.011273957158962834 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7098303393213564 },
                { start: 2500, end: 4000, density: 0.1924900199600797 },
                { start: 4000, density: 0.09767964071856403 },
              ],
              percentiles: { p75: 2716 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2374,
        lcp: 2716,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301873107,
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
                { start: 0, end: 2500, density: 0.5754424557544254 },
                { start: 2500, end: 4000, density: 0.20397960203979631 },
                { start: 4000, density: 0.22057794220577837 },
              ],
              percentiles: { p75: 3629 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7476999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12379999999999998,
                },
                { start: "0.25", density: 0.12850000000000003 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5896179235847171 },
                { start: 200, end: 500, density: 0.34266853370674133 },
                { start: 500, density: 0.06771354270854166 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4245999999999999 },
                { start: 800, end: 1800, density: 0.33490000000000003 },
                { start: 1800, density: 0.24050000000000005 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204 },
                { start: 1800, end: 3000, density: 0.20640000000000006 },
                { start: 3000, density: 0.27319999999999994 },
              ],
              percentiles: { p75: 3303 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574 },
                { start: 100, end: 300, density: 0.0393 },
                { start: 300, density: 0.0033 },
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
        lcp: 3629,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1653301873614,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9624624624624625 },
                { start: 100, end: 300, density: 0.029074529074529076 },
                { start: 300, density: 0.008463008463008471 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6287273695420655 },
                { start: 2500, end: 4000, density: 0.2251064962726301 },
                { start: 4000, density: 0.14616613418530425 },
              ],
              percentiles: { p75: 3111 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9414781693845345,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026038926880589165,
                },
                { start: "0.25", density: 0.032482903734876355 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5428648212846012 },
                { start: 200, end: 500, density: 0.3786616500940611 },
                { start: 500, density: 0.07847352862133765 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30406118143459887 },
                { start: 800, end: 1800, density: 0.4663765822784806 },
                { start: 1800, density: 0.22956223628692055 },
              ],
              percentiles: { p75: 1775 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4960180514998668 },
                { start: 1800, end: 3000, density: 0.3009025749933631 },
                { start: 3000, density: 0.20307937350677013 },
              ],
              percentiles: { p75: 2764 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2764,
        lcp: 3111,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653301874145,
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
                { start: 0, end: 800, density: 0.7056 },
                { start: 800, end: 1800, density: 0.26620000000000005 },
                { start: 1800, density: 0.028199999999999975 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8994597839135656 },
                { start: 1800, end: 3000, density: 0.07853141256502601 },
                { start: 3000, density: 0.022008803521408347 },
              ],
              percentiles: { p75: 1335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802000000000001 },
                { start: 100, end: 300, density: 0.013900000000000001 },
                { start: 300, density: 0.0059 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9098500000000003 },
                { start: 2500, end: 4000, density: 0.07244999999999999 },
                { start: 4000, density: 0.01769999999999976 },
              ],
              percentiles: { p75: 1728 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.891010898910109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09479052094790523,
                },
                { start: "0.25", density: 0.01419858014198581 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6796320367963204 },
                { start: 200, end: 500, density: 0.2666733326667333 },
                { start: 500, density: 0.053694630536946175 },
              ],
              percentiles: { p75: 234 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1335,
        lcp: 1728,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301874685,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.18471847184718534 },
                { start: 2500, end: 4000, density: 0.36573657365736695 },
                { start: 4000, density: 0.4495449544954476 },
              ],
              percentiles: { p75: 5942 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8368163183681632,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09109089091090891,
                },
                { start: "0.25", density: 0.07209279072092793 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.812118788121188 },
                { start: 200, end: 500, density: 0.1151884811518848 },
                { start: 500, density: 0.07269273072692724 },
              ],
              percentiles: { p75: 160 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24144828965793155 },
                { start: 800, end: 1800, density: 0.49419883976795353 },
                { start: 1800, density: 0.2643528705741149 },
              ],
              percentiles: { p75: 1883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.06598680263947167 },
                { start: 1800, end: 3000, density: 0.356328734253147 },
                { start: 3000, density: 0.5776844631073813 },
              ],
              percentiles: { p75: 5388 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5388, lcp: 5942, cls: "0.05" },
      timestamp: 1653301875101,
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
                { start: 0, end: 1800, density: 0.6235893702220598 },
                { start: 1800, end: 3000, density: 0.2298264773692511 },
                { start: 3000, density: 0.14658415240868908 },
              ],
              percentiles: { p75: 2290 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540975427217163 },
                { start: 100, end: 300, density: 0.030809529749282773 },
                { start: 300, density: 0.015092927529000941 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7208217185795663 },
                { start: 2500, end: 4000, density: 0.16440431462852986 },
                { start: 4000, density: 0.1147739667919038 },
              ],
              percentiles: { p75: 2691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9341281310211946,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0246868978805395,
                },
                { start: "0.25", density: 0.04118497109826593 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4853392221813285 },
                { start: 200, end: 500, density: 0.3544350386455657 },
                { start: 500, density: 0.16022573917310567 },
              ],
              percentiles: { p75: 367 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45086425722228896 },
                { start: 800, end: 1800, density: 0.43188686087271816 },
                { start: 1800, density: 0.11724888190499295 },
              ],
              percentiles: { p75: 1259 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2290,
        lcp: 2691,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301875659,
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
                { start: "0.00", end: "0.10", density: 0.9493 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03320000000000001,
                },
                { start: "0.25", density: 0.017500000000000005 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6342902870861258 },
                { start: 200, end: 500, density: 0.25947784335300583 },
                { start: 500, density: 0.10623186956086836 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46030000000000015 },
                { start: 800, end: 1800, density: 0.36330000000000007 },
                { start: 1800, density: 0.17639999999999995 },
              ],
              percentiles: { p75: 1501 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6388638863886381 },
                { start: 1800, end: 3000, density: 0.2262226222622259 },
                { start: 3000, density: 0.13491349134913594 },
              ],
              percentiles: { p75: 2322 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9421 },
                { start: 100, end: 300, density: 0.0382 },
                { start: 300, density: 0.01969999999999999 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7337000000000002 },
                { start: 2500, end: 4000, density: 0.18369999999999997 },
                { start: 4000, density: 0.08259999999999985 },
              ],
              percentiles: { p75: 2614 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2322,
        lcp: 2614,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301876202,
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
                { start: 0, end: 2500, density: 0.8478454515087401 },
                { start: 2500, end: 4000, density: 0.10472107783097642 },
                { start: 4000, density: 0.047433470660283535 },
              ],
              percentiles: { p75: 1979 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9597293099622809,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02729088085200799,
                },
                { start: "0.25", density: 0.012979809185711124 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5826762909494726 },
                { start: 200, end: 500, density: 0.31715713492504155 },
                { start: 500, density: 0.10016657412548588 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6744730679156908 },
                { start: 800, end: 1800, density: 0.258391881342701 },
                { start: 1800, density: 0.0671350507416081 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8152028533214447 },
                { start: 1800, end: 3000, density: 0.1226036558181008 },
                { start: 3000, density: 0.06219349086045459 },
              ],
              percentiles: { p75: 1576 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.940716390841079 },
                { start: 100, end: 300, density: 0.022557243255497617 },
                { start: 300, density: 0.036726365903423354 },
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
        fcp: 1576,
        lcp: 1979,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301876556,
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
                { start: 0, end: 2500, density: 0.6227359151405985 },
                { start: 2500, end: 4000, density: 0.27579305513859703 },
                { start: 4000, density: 0.10147102972080456 },
              ],
              percentiles: { p75: 3043 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9690969096909691,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0199019901990199,
                },
                { start: "0.25", density: 0.011001100110010995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.569243075692431 },
                { start: 200, end: 500, density: 0.32826717328267185 },
                { start: 500, density: 0.10248975102489712 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4341736694677869 },
                { start: 800, end: 1800, density: 0.37144857943177256 },
                { start: 1800, density: 0.19437775110044053 },
              ],
              percentiles: { p75: 1689 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5518655596679003 },
                { start: 1800, end: 3000, density: 0.33450035010503126 },
                { start: 3000, density: 0.11363409022706847 },
              ],
              percentiles: { p75: 2351 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276072392760722 },
                { start: 100, end: 300, density: 0.052094790520947905 },
                { start: 300, density: 0.020297970202979892 },
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
        fcp: 2351,
        lcp: 3043,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301877101,
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
                { start: 0, end: 2500, density: 0.664812437598059 },
                { start: 2500, end: 4000, density: 0.17657966053344712 },
                { start: 4000, density: 0.1586079018684939 },
              ],
              percentiles: { p75: 3054 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.889451476793249,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02911392405063291,
                },
                { start: "0.25", density: 0.08143459915611813 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49724637681159467 },
                { start: 200, end: 500, density: 0.3076811594202902 },
                { start: 500, density: 0.1950724637681151 },
              ],
              percentiles: { p75: 385 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3721193270182381 },
                { start: 800, end: 1800, density: 0.4462038738866107 },
                { start: 1800, density: 0.1816767990951512 },
              ],
              percentiles: { p75: 1536 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.58140531276778 },
                { start: 1800, end: 3000, density: 0.24278777492145068 },
                { start: 3000, density: 0.17580691231076936 },
              ],
              percentiles: { p75: 2468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8803906836964688 },
                { start: 100, end: 300, density: 0.05319308790383171 },
                { start: 300, density: 0.06641622839969955 },
              ],
              percentiles: { p75: 20 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2468,
        lcp: 3054,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1653301877496,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204 },
                { start: 1800, end: 3000, density: 0.20640000000000006 },
                { start: 3000, density: 0.27319999999999994 },
              ],
              percentiles: { p75: 3303 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574 },
                { start: 100, end: 300, density: 0.0393 },
                { start: 300, density: 0.0033 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5754424557544254 },
                { start: 2500, end: 4000, density: 0.20397960203979631 },
                { start: 4000, density: 0.22057794220577837 },
              ],
              percentiles: { p75: 3629 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7476999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12379999999999998,
                },
                { start: "0.25", density: 0.12850000000000003 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5896179235847171 },
                { start: 200, end: 500, density: 0.34266853370674133 },
                { start: 500, density: 0.06771354270854166 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4245999999999999 },
                { start: 800, end: 1800, density: 0.33490000000000003 },
                { start: 1800, density: 0.24050000000000005 },
              ],
              percentiles: { p75: 1757 },
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
        lcp: 3629,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1653301878092,
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
                { start: 0, end: 200, density: 0.8023592922123366 },
                { start: 200, end: 500, density: 0.13495951214635615 },
                { start: 500, density: 0.06268119564130725 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.517051705170517 },
                { start: 800, end: 1800, density: 0.4008400840084007 },
                { start: 1800, density: 0.08210821082108237 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7228831350594825 },
                { start: 1800, end: 3000, density: 0.18684394681595537 },
                { start: 3000, density: 0.0902729181245621 },
              ],
              percentiles: { p75: 2003 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9671934386877376 },
                { start: 100, end: 300, density: 0.019703940788157633 },
                { start: 300, density: 0.013102620524104854 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7500000000000009 },
                { start: 2500, end: 4000, density: 0.1664000000000001 },
                { start: 4000, density: 0.08359999999999893 },
              ],
              percentiles: { p75: 2630 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7712228777122287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1721827817218278,
                },
                { start: "0.25", density: 0.056594340565943375 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2003, lcp: 2630, cls: "0.08", fid: 9 },
      timestamp: 1653301878641,
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
                { start: 0, end: 100, density: 0.9810342475098922 },
                { start: 100, end: 300, density: 0.013917314776913629 },
                { start: 300, density: 0.005048437713194159 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7668910496135626 },
                { start: 2500, end: 4000, density: 0.15744203440538515 },
                { start: 4000, density: 0.07566691598105219 },
              ],
              percentiles: { p75: 2407 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9658415841584159,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015717821782178218,
                },
                { start: "0.25", density: 0.018440594059405936 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299483648881238 },
                { start: 200, end: 500, density: 0.32247356774034913 },
                { start: 500, density: 0.04757806737152721 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40276566587766294 },
                { start: 800, end: 1800, density: 0.5090320169428181 },
                { start: 1800, density: 0.08820231717951893 },
              ],
              percentiles: { p75: 1160 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6470807917340963 },
                { start: 1800, end: 3000, density: 0.24984439188348043 },
                { start: 3000, density: 0.10307481638242327 },
              ],
              percentiles: { p75: 2073 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2073,
        lcp: 2407,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301879007,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7676502732240443 },
                { start: 2500, end: 4000, density: 0.1785792349726776 },
                { start: 4000, density: 0.053770491803278204 },
              ],
              percentiles: { p75: 2398 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9423489069867124,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046292327475353626,
                },
                { start: "0.25", density: 0.01135876553793399 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8461538461538461 },
                { start: 200, end: 500, density: 0.12384389803744644 },
                { start: 500, density: 0.03000225580870749 },
              ],
              percentiles: { p75: 150 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5224111282843894 },
                { start: 800, end: 1800, density: 0.3835283727092072 },
                { start: 1800, density: 0.0940604990064034 },
              ],
              percentiles: { p75: 1223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6986211424819431 },
                { start: 1800, end: 3000, density: 0.222586999343401 },
                { start: 3000, density: 0.07879185817465585 },
              ],
              percentiles: { p75: 1973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.969513797634691 },
                { start: 100, end: 300, density: 0.017345597897503284 },
                { start: 300, density: 0.013140604467805522 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1973,
        lcp: 2398,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301879550,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.919331289239305 },
                { start: 2500, end: 4000, density: 0.06139582420791359 },
                { start: 4000, density: 0.01927288655278132 },
              ],
              percentiles: { p75: 1726 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9502098711825157,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035895209147488776,
                },
                { start: "0.25", density: 0.013894919669995653 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6416342972234211 },
                { start: 200, end: 500, density: 0.2670119407279528 },
                { start: 500, density: 0.091353762048626 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6905822935234701 },
                { start: 800, end: 1800, density: 0.2819370172311349 },
                { start: 1800, density: 0.027480689245394953 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8998678608133903 },
                { start: 1800, end: 3000, density: 0.07840258405520484 },
                { start: 3000, density: 0.02172955513140497 },
              ],
              percentiles: { p75: 1347 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9590723055934516 },
                { start: 100, end: 300, density: 0.020463847203274214 },
                { start: 300, density: 0.020463847203274186 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1347,
        lcp: 1726,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301880185,
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
                { start: "0.00", end: "0.10", density: 0.8821 },
                { start: "0.10", end: "0.25", density: 0.0662 },
                { start: "0.25", density: 0.051699999999999954 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6355000000000007 },
                { start: 200, end: 500, density: 0.2804000000000003 },
                { start: 500, density: 0.0840999999999989 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4548999999999996 },
                { start: 800, end: 1800, density: 0.41949999999999976 },
                { start: 1800, density: 0.12560000000000054 },
              ],
              percentiles: { p75: 1320 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6402719456108766 },
                { start: 1800, end: 3000, density: 0.21205758848230313 },
                { start: 3000, density: 0.14767046590682026 },
              ],
              percentiles: { p75: 2299 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9559 },
                { start: 100, end: 300, density: 0.026500000000000006 },
                { start: 300, density: 0.01759999999999999 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.712863859157746 },
                { start: 2500, end: 4000, density: 0.15929778933680067 },
                { start: 4000, density: 0.12783835150545333 },
              ],
              percentiles: { p75: 2773 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2299,
        lcp: 2773,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301881040,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6340731853629268 },
                { start: 800, end: 1800, density: 0.28374325134972983 },
                { start: 1800, density: 0.0821835632873432 },
              ],
              percentiles: { p75: 1013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7548735379386174 },
                { start: 1800, end: 3000, density: 0.1532540237928619 },
                { start: 3000, density: 0.09187243826852072 },
              ],
              percentiles: { p75: 1812 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505950595059508 },
                { start: 100, end: 300, density: 0.031003100310031007 },
                { start: 300, density: 0.018401840184018234 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7931206879312058 },
                { start: 2500, end: 4000, density: 0.13138686131386842 },
                { start: 4000, density: 0.07549245075492579 },
              ],
              percentiles: { p75: 2296 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8404 },
                { start: "0.10", end: "0.25", density: 0.118 },
                { start: "0.25", density: 0.04159999999999994 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5181999999999995 },
                { start: 200, end: 500, density: 0.33549999999999974 },
                { start: 500, density: 0.1463000000000007 },
              ],
              percentiles: { p75: 337 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1812,
        lcp: 2296,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653301881496,
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
                { start: 0, end: 2500, density: 0.5255603842634947 },
                { start: 2500, end: 4000, density: 0.24994281793229634 },
                { start: 4000, density: 0.22449679780420892 },
              ],
              percentiles: { p75: 3818 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8632342934905876,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0944658652755727,
                },
                { start: "0.25", density: 0.04229984123383982 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43448996170360943 },
                { start: 200, end: 500, density: 0.33387489845653967 },
                { start: 500, density: 0.23163513983985085 },
              ],
              percentiles: { p75: 470 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3842152872003617 },
                { start: 800, end: 1800, density: 0.4075079149706014 },
                { start: 1800, density: 0.20827679782903702 },
              ],
              percentiles: { p75: 1659 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4746265252594356 },
                { start: 1800, end: 3000, density: 0.25441897593796264 },
                { start: 3000, density: 0.27095449880260153 },
              ],
              percentiles: { p75: 3164 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.900769686204855 },
                { start: 100, end: 300, density: 0.06382474837181765 },
                { start: 300, density: 0.03540556542332733 },
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
        fcp: 3164,
        lcp: 3818,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1653301881910,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6018805641692508 },
                { start: 800, end: 1800, density: 0.3576072821846554 },
                { start: 1800, density: 0.04051215364609383 },
              ],
              percentiles: { p75: 982 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7899579915983193 },
                { start: 1800, end: 3000, density: 0.157631526305261 },
                { start: 3000, density: 0.05241048209641975 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956995699569957 },
                { start: 100, end: 300, density: 0.024402440244024395 },
                { start: 300, density: 0.018601860186018556 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8148499999999999 },
                { start: 2500, end: 4000, density: 0.13254999999999997 },
                { start: 4000, density: 0.052600000000000265 },
              ],
              percentiles: { p75: 2207 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8885111488851115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08439156084391564,
                },
                { start: "0.25", density: 0.02709729027097288 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5995999999999998 },
                { start: 200, end: 500, density: 0.2951999999999999 },
                { start: 500, density: 0.10520000000000039 },
              ],
              percentiles: { p75: 280 },
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
        lcp: 2207,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301882763,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49875024995001005 },
                { start: 2500, end: 4000, density: 0.2924915016996601 },
                { start: 4000, density: 0.2087582483503299 },
              ],
              percentiles: { p75: 3797 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9318068193180682,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0471952804719528,
                },
                { start: "0.25", density: 0.020997900209979003 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5439999999999999 },
                { start: 200, end: 500, density: 0.34439999999999993 },
                { start: 500, density: 0.11160000000000014 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23652365236523676 },
                { start: 800, end: 1800, density: 0.5220522052205226 },
                { start: 1800, density: 0.2414241424142407 },
              ],
              percentiles: { p75: 1813 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3888000000000008 },
                { start: 1800, end: 3000, density: 0.31640000000000057 },
                { start: 3000, density: 0.2947999999999987 },
              ],
              percentiles: { p75: 3352 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691061787642471 },
                { start: 100, end: 300, density: 0.021895620875824834 },
                { start: 300, density: 0.008998200359928018 },
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
        fcp: 3352,
        lcp: 3797,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653301883395,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6799945784765521 },
                { start: 1800, end: 3000, density: 0.1920574681485498 },
                { start: 3000, density: 0.12794795337489814 },
              ],
              percentiles: { p75: 2135 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715452688904016 },
                { start: 100, end: 300, density: 0.021783526208304968 },
                { start: 300, density: 0.006671204901293398 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7270332342610105 },
                { start: 2500, end: 4000, density: 0.15543096460416111 },
                { start: 4000, density: 0.11753580113482841 },
              ],
              percentiles: { p75: 2685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.935950690071017,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021573093930054937,
                },
                { start: "0.25", density: 0.042476215998928035 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6488384656942194 },
                { start: 200, end: 500, density: 0.2997028633171259 },
                { start: 500, density: 0.05145867098865464 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46700094863802705 },
                { start: 800, end: 1800, density: 0.40303564168586553 },
                { start: 1800, density: 0.12996340967610745 },
              ],
              percentiles: { p75: 1347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2135,
        lcp: 2685,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301884107,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8609139086091391 },
                { start: 1800, end: 3000, density: 0.10068993100689932 },
                { start: 3000, density: 0.03839616038396161 },
              ],
              percentiles: { p75: 1474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9613154738104757 },
                { start: 100, end: 300, density: 0.02159136345461815 },
                { start: 300, density: 0.017093162734906124 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8689500000000002 },
                { start: 2500, end: 4000, density: 0.09495000000000006 },
                { start: 4000, density: 0.03609999999999972 },
              ],
              percentiles: { p75: 1937 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9065093490650935,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08289171082891711,
                },
                { start: "0.25", density: 0.010598940105989406 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6586341365863414 },
                { start: 200, end: 500, density: 0.27397260273972596 },
                { start: 500, density: 0.06739326067393267 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5880235929221235 },
                { start: 800, end: 1800, density: 0.36349095271418574 },
                { start: 1800, density: 0.04848545436369075 },
              ],
              percentiles: { p75: 1000 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1474,
        lcp: 1937,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653301885143,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5580183543319335 },
                { start: 2500, end: 4000, density: 0.28270337533053336 },
                { start: 4000, density: 0.15927827033753314 },
              ],
              percentiles: { p75: 3354 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426528749619715,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031183449954365686,
                },
                { start: "0.25", density: 0.026163675083662893 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4767080745341618 },
                { start: 200, end: 500, density: 0.34037267080745376 },
                { start: 500, density: 0.18291925465838443 },
              ],
              percentiles: { p75: 367 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25123609394313984 },
                { start: 800, end: 1800, density: 0.38627935723114976 },
                { start: 1800, density: 0.36248454882571046 },
              ],
              percentiles: { p75: 2156 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43382696804364695 },
                { start: 1800, end: 3000, density: 0.3220576773187836 },
                { start: 3000, density: 0.2441153546375695 },
              ],
              percentiles: { p75: 3002 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9141637685741383 },
                { start: 100, end: 300, density: 0.04679102118242175 },
                { start: 300, density: 0.03904521024343987 },
              ],
              percentiles: { p75: 18 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3002,
        lcp: 3354,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1653301885591,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7121575684863034 },
                { start: 1800, end: 3000, density: 0.17246550689862042 },
                { start: 3000, density: 0.1153769246150763 },
              ],
              percentiles: { p75: 2010 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9790958191638328 },
                { start: 100, end: 300, density: 0.01600320064012803 },
                { start: 300, density: 0.004900980196039209 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7344000000000004 },
                { start: 2500, end: 4000, density: 0.14380000000000007 },
                { start: 4000, density: 0.1217999999999996 },
              ],
              percentiles: { p75: 2705 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8254174582541747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11368863113688635,
                },
                { start: "0.25", density: 0.06089391060893911 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.715771577157716 },
                { start: 200, end: 500, density: 0.2304230423042305 },
                { start: 500, density: 0.053805380538053595 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49784978497849813 },
                { start: 800, end: 1800, density: 0.39063906390639086 },
                { start: 1800, density: 0.11151115111511099 },
              ],
              percentiles: { p75: 1309 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2010,
        lcp: 2705,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653301886238,
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
                { start: 0, end: 800, density: 0.4360632183908045 },
                { start: 800, end: 1800, density: 0.42552681992337155 },
                { start: 1800, density: 0.1384099616858239 },
              ],
              percentiles: { p75: 1369 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6160220994475128 },
                { start: 1800, end: 3000, density: 0.22075426375210153 },
                { start: 3000, density: 0.16322363680038565 },
              ],
              percentiles: { p75: 2404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482023156611822 },
                { start: 100, end: 300, density: 0.030834856794637416 },
                { start: 300, density: 0.02096282754418039 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.704343652507799 },
                { start: 2500, end: 4000, density: 0.16402687784977188 },
                { start: 4000, density: 0.1316294696424292 },
              ],
              percentiles: { p75: 2801 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9363603861279943,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02216660707901323,
                },
                { start: "0.25", density: 0.04147300679299249 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5763754826254832 },
                { start: 200, end: 500, density: 0.32806467181467214 },
                { start: 500, density: 0.09555984555984462 },
              ],
              percentiles: { p75: 280 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2404,
        lcp: 2801,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301886803,
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
                { start: 0, end: 100, density: 0.9471894378875775 },
                { start: 100, end: 300, density: 0.02030406081216243 },
                { start: 300, density: 0.032506501300260136 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8481848184818478 },
                { start: 2500, end: 4000, density: 0.10451045104510448 },
                { start: 4000, density: 0.047304730473047805 },
              ],
              percentiles: { p75: 1992 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9221 },
                { start: "0.10", end: "0.25", density: 0.0634 },
                { start: "0.25", density: 0.01449999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6178000000000002 },
                { start: 200, end: 500, density: 0.2896 },
                { start: 500, density: 0.09259999999999975 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.68973102689731 },
                { start: 800, end: 1800, density: 0.24737526247375255 },
                { start: 1800, density: 0.06289371062893741 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8225000000000001 },
                { start: 1800, end: 3000, density: 0.11789999999999999 },
                { start: 3000, density: 0.059599999999999896 },
              ],
              percentiles: { p75: 1553 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1553,
        lcp: 1992,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301887602,
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
                { start: 0, end: 100, density: 0.976495299059812 },
                { start: 100, end: 300, density: 0.01810362072414483 },
                { start: 300, density: 0.005401080216043194 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7916458229114547 },
                { start: 2500, end: 4000, density: 0.12771385692846407 },
                { start: 4000, density: 0.08064032016008124 },
              ],
              percentiles: { p75: 2283 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8296829682968297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14131413141314134,
                },
                { start: "0.25", density: 0.029002900290029002 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8061612322464493 },
                { start: 200, end: 500, density: 0.13742748549709943 },
                { start: 500, density: 0.056411282256451166 },
              ],
              percentiles: { p75: 169 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.625050020008003 },
                { start: 800, end: 1800, density: 0.2863145258103241 },
                { start: 1800, density: 0.08863545418167279 },
              ],
              percentiles: { p75: 1081 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7678607164298575 },
                { start: 1800, end: 3000, density: 0.1455873524114468 },
                { start: 3000, density: 0.08655193115869557 },
              ],
              percentiles: { p75: 1734 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1734,
        lcp: 2283,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653301888266,
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
                  density: 0.9259074092590741,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048695130486951295,
                },
                { start: "0.25", density: 0.0253974602539746 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6561000000000001 },
                { start: 200, end: 500, density: 0.2735000000000001 },
                { start: 500, density: 0.0703999999999998 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44333299989996994 },
                { start: 800, end: 1800, density: 0.4470341102330699 },
                { start: 1800, density: 0.10963288986696001 },
              ],
              percentiles: { p75: 1296 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6207620762076203 },
                { start: 1800, end: 3000, density: 0.24462446244624453 },
                { start: 3000, density: 0.1346134613461353 },
              ],
              percentiles: { p75: 2312 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9722972297229723 },
                { start: 100, end: 300, density: 0.0184018401840184 },
                { start: 300, density: 0.009300930093009332 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7035703570357033 },
                { start: 2500, end: 4000, density: 0.19321932193219313 },
                { start: 4000, density: 0.10321032103210367 },
              ],
              percentiles: { p75: 2774 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2312,
        lcp: 2774,
        cls: "0.01",
        fid: 10,
      },
      timestamp: 1653301889070,
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
                { start: 0, end: 100, density: 0.9616923384676935 },
                { start: 100, end: 300, density: 0.021104220844168835 },
                { start: 300, density: 0.01720344068813767 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.681299999999999 },
                { start: 2500, end: 4000, density: 0.18859999999999974 },
                { start: 4000, density: 0.13010000000000124 },
              ],
              percentiles: { p75: 2935 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8071 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13119999999999998,
                },
                { start: "0.25", density: 0.06169999999999995 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7614284285285584 },
                { start: 200, end: 500, density: 0.18255476642992888 },
                { start: 500, density: 0.056016805041512685 },
              ],
              percentiles: { p75: 195 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3686737347469492 },
                { start: 800, end: 1800, density: 0.42418483696739334 },
                { start: 1800, density: 0.20714142828565757 },
              ],
              percentiles: { p75: 1651 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.634809557132859 },
                { start: 1800, end: 3000, density: 0.20333899830050953 },
                { start: 3000, density: 0.16185144456663159 },
              ],
              percentiles: { p75: 2454 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2454,
        lcp: 2935,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653301889801,
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
                  density: 0.8737747549509902,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07441488297659532,
                },
                { start: "0.25", density: 0.0518103620724145 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5523866706694691 },
                { start: 200, end: 500, density: 0.3050135094566199 },
                { start: 500, density: 0.142599819873911 },
              ],
              percentiles: { p75: 333 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4577204042829982 },
                { start: 800, end: 1800, density: 0.4286000200140098 },
                { start: 1800, density: 0.11367957570299202 },
              ],
              percentiles: { p75: 1246 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6325530212084838 },
                { start: 1800, end: 3000, density: 0.22288915566226505 },
                { start: 3000, density: 0.14455782312925125 },
              ],
              percentiles: { p75: 2259 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.0274 },
                { start: 300, density: 0.014300000000000052 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7129925985197036 },
                { start: 2500, end: 4000, density: 0.16258251650330052 },
                { start: 4000, density: 0.12442488497699584 },
              ],
              percentiles: { p75: 2752 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2259,
        lcp: 2752,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301891065,
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
                { start: "0.00", end: "0.10", density: 0.8027 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13369999999999999,
                },
                { start: "0.25", density: 0.06359999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7824782478247826 },
                { start: 200, end: 500, density: 0.17531753175317538 },
                { start: 500, density: 0.042204220422042096 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5151999999999998 },
                { start: 800, end: 1800, density: 0.3825999999999999 },
                { start: 1800, density: 0.10220000000000025 },
              ],
              percentiles: { p75: 1201 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7696230376962299 },
                { start: 1800, end: 3000, density: 0.13748625137486242 },
                { start: 3000, density: 0.09289071092890776 },
              ],
              percentiles: { p75: 1730 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.975504899020196 },
                { start: 100, end: 300, density: 0.018796240751849626 },
                { start: 300, density: 0.005698860227954406 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8147055883235024 },
                { start: 2500, end: 4000, density: 0.1120163950814755 },
                { start: 4000, density: 0.07327801659502195 },
              ],
              percentiles: { p75: 2132 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1730,
        lcp: 2132,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1653301891778,
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
                { start: 0, end: 800, density: 0.49824982498249804 },
                { start: 800, end: 1800, density: 0.3946394639463946 },
                { start: 1800, density: 0.10711071107110734 },
              ],
              percentiles: { p75: 1244 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6973394678935783 },
                { start: 1800, end: 3000, density: 0.20504100820164023 },
                { start: 3000, density: 0.09761952390478143 },
              ],
              percentiles: { p75: 2005 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9384184744576627 },
                { start: 100, end: 300, density: 0.033290012996101175 },
                { start: 300, density: 0.028291512546236186 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7370737073707369 },
                { start: 2500, end: 4000, density: 0.1624162416241623 },
                { start: 4000, density: 0.10051005100510083 },
              ],
              percentiles: { p75: 2570 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8128 },
                { start: "0.10", end: "0.25", density: 0.1524 },
                { start: "0.25", density: 0.03480000000000004 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6393 },
                { start: 200, end: 500, density: 0.2358 },
                { start: 500, density: 0.12489999999999991 },
              ],
              percentiles: { p75: 278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2005,
        lcp: 2570,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1653301892658,
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
                  density: 0.8145814581458145,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11971197119711968,
                },
                { start: "0.25", density: 0.06570657065706585 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6776677667766783 },
                { start: 200, end: 500, density: 0.23942394239423961 },
                { start: 500, density: 0.08290829082908213 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48080383923215325 },
                { start: 800, end: 1800, density: 0.40561887622475473 },
                { start: 1800, density: 0.11357728454309189 },
              ],
              percentiles: { p75: 1278 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7188281171882809 },
                { start: 1800, end: 3000, density: 0.1762823717628237 },
                { start: 3000, density: 0.10488951104889545 },
              ],
              percentiles: { p75: 1960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9581 },
                { start: 100, end: 300, density: 0.0316 },
                { start: 300, density: 0.010300000000000035 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7792441511697655 },
                { start: 2500, end: 4000, density: 0.13367326534693055 },
                { start: 4000, density: 0.08708258348330382 },
              ],
              percentiles: { p75: 2377 },
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
        lcp: 2377,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1653301893265,
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
                { start: "0.00", end: "0.10", density: 0.906 },
                { start: "0.10", end: "0.25", density: 0.0635 },
                { start: "0.25", density: 0.030499999999999975 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6361636163616358 },
                { start: 200, end: 500, density: 0.29642964296429625 },
                { start: 500, density: 0.06740674067406803 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32003200320032016 },
                { start: 800, end: 1800, density: 0.4709470947094711 },
                { start: 1800, density: 0.2090209020902086 },
              ],
              percentiles: { p75: 1707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5371537153715364 },
                { start: 1800, end: 3000, density: 0.28672867286728626 },
                { start: 3000, density: 0.17611761176117738 },
              ],
              percentiles: { p75: 2613 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706029397060294 },
                { start: 100, end: 300, density: 0.022897710228977103 },
                { start: 300, density: 0.006499350064993506 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6384723055388922 },
                { start: 2500, end: 4000, density: 0.2114577084583083 },
                { start: 4000, density: 0.15006998600279942 },
              ],
              percentiles: { p75: 3099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2613,
        lcp: 3099,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1653301893878,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522047795220477 },
                { start: 100, end: 300, density: 0.031496850314968496 },
                { start: 300, density: 0.016298370162983696 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6693508052415724 },
                { start: 2500, end: 4000, density: 0.18340502150645194 },
                { start: 4000, density: 0.1472441732519756 },
              ],
              percentiles: { p75: 3032 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9136 },
                { start: "0.10", end: "0.25", density: 0.0624 },
                { start: "0.25", density: 0.023999999999999994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.648864886488649 },
                { start: 200, end: 500, density: 0.26342634263426346 },
                { start: 500, density: 0.08770877087708745 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5299529952995304 },
                { start: 800, end: 1800, density: 0.27382738273827406 },
                { start: 1800, density: 0.19621962196219553 },
              ],
              percentiles: { p75: 1532 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6631336866313363 },
                { start: 1800, end: 3000, density: 0.1347865213478651 },
                { start: 3000, density: 0.20207979202079857 },
              ],
              percentiles: { p75: 2550 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2550,
        lcp: 3032,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301894541,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4245999999999999 },
                { start: 800, end: 1800, density: 0.33490000000000003 },
                { start: 1800, density: 0.24050000000000005 },
              ],
              percentiles: { p75: 1746 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204 },
                { start: 1800, end: 3000, density: 0.20640000000000006 },
                { start: 3000, density: 0.27319999999999994 },
              ],
              percentiles: { p75: 3138 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574 },
                { start: 100, end: 300, density: 0.0393 },
                { start: 300, density: 0.0033 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5754424557544254 },
                { start: 2500, end: 4000, density: 0.20397960203979631 },
                { start: 4000, density: 0.22057794220577837 },
              ],
              percentiles: { p75: 3600 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7476999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12379999999999998,
                },
                { start: "0.25", density: 0.12850000000000003 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5896179235847171 },
                { start: 200, end: 500, density: 0.34266853370674133 },
                { start: 500, density: 0.06771354270854166 },
              ],
              percentiles: { p75: 263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3138,
        lcp: 3600,
        cls: "0.13",
        fid: 12,
      },
      timestamp: 1653301895157,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.980503899220156 },
                { start: 100, end: 300, density: 0.014797040591881624 },
                { start: 300, density: 0.004699060187962409 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6554310862172428 },
                { start: 2500, end: 4000, density: 0.22814562912582492 },
                { start: 4000, density: 0.11642328465693225 },
              ],
              percentiles: { p75: 2956 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8390000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09380000000000001,
                },
                { start: "0.25", density: 0.0672 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7121575684863026 },
                { start: 200, end: 500, density: 0.24385122975404913 },
                { start: 500, density: 0.04399120175964831 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29498849654896486 },
                { start: 800, end: 1800, density: 0.5568670601180358 },
                { start: 1800, density: 0.1481444433329994 },
              ],
              percentiles: { p75: 1526 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5302 },
                { start: 1800, end: 3000, density: 0.31260000000000004 },
                { start: 3000, density: 0.15719999999999998 },
              ],
              percentiles: { p75: 2486 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2486,
        lcp: 2956,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1653301895659,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8242878912202553 },
                { start: 2500, end: 4000, density: 0.1273004337123432 },
                { start: 4000, density: 0.048411675067401516 },
              ],
              percentiles: { p75: 2176 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8785747773089546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09224097515236757,
                },
                { start: "0.25", density: 0.02918424753867792 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5704838148277062 },
                { start: 200, end: 500, density: 0.319642649959392 },
                { start: 500, density: 0.10987353521290186 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5938047925189948 },
                { start: 800, end: 1800, density: 0.36376388077147875 },
                { start: 1800, density: 0.042431326709526554 },
              ],
              percentiles: { p75: 994 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7830564006552769 },
                { start: 1800, end: 3000, density: 0.1631172478352445 },
                { start: 3000, density: 0.05382635150947848 },
              ],
              percentiles: { p75: 1711 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9541948498872671 },
                { start: 100, end: 300, density: 0.0259878960484158 },
                { start: 300, density: 0.0198172540643171 },
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
        fcp: 1711,
        lcp: 2176,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301896255,
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
                  density: 0.9422942294229423,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0453045304530453,
                },
                { start: "0.25", density: 0.012401240124012398 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6307999999999995 },
                { start: 200, end: 500, density: 0.29019999999999974 },
                { start: 500, density: 0.07900000000000072 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.615138486151385 },
                { start: 800, end: 1800, density: 0.345065493450655 },
                { start: 1800, density: 0.039796020397959896 },
              ],
              percentiles: { p75: 1009 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8485999999999997 },
                { start: 1800, end: 3000, density: 0.11859999999999998 },
                { start: 3000, density: 0.032800000000000225 },
              ],
              percentiles: { p75: 1516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973494698939788 },
                { start: 100, end: 300, density: 0.01890378075615123 },
                { start: 300, density: 0.007601520304060818 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.866263373662634 },
                { start: 2500, end: 4000, density: 0.10513948605139488 },
                { start: 4000, density: 0.02859714028597122 },
              ],
              percentiles: { p75: 2013 },
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
        lcp: 2013,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301897324,
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
                  density: 0.8489472439082092,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10255500354861605,
                },
                { start: "0.25", density: 0.04849775254317481 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7460545193687232 },
                { start: 200, end: 500, density: 0.20588235294117643 },
                { start: 500, density: 0.04806312769010025 },
              ],
              percentiles: { p75: 201 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5046346454797157 },
                { start: 800, end: 1800, density: 0.38750451426507737 },
                { start: 1800, density: 0.10786084025520708 },
              ],
              percentiles: { p75: 1223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7583620997500292 },
                { start: 1800, end: 3000, density: 0.1455779073919771 },
                { start: 3000, density: 0.09605999285799353 },
              ],
              percentiles: { p75: 1773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705882352941176 },
                { start: 100, end: 300, density: 0.022455455211130095 },
                { start: 300, density: 0.006956309494752254 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8118682364133663 },
                { start: 2500, end: 4000, density: 0.11654180045189676 },
                { start: 4000, density: 0.07158996313473683 },
              ],
              percentiles: { p75: 2151 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1773,
        lcp: 2151,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653301898150,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4673934786957389 },
                { start: 800, end: 1800, density: 0.3461692338467691 },
                { start: 1800, density: 0.186437287457492 },
              ],
              percentiles: { p75: 1597 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5344534453445353 },
                { start: 1800, end: 3000, density: 0.22712271227122752 },
                { start: 3000, density: 0.23842384238423725 },
              ],
              percentiles: { p75: 3125 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6005600560056004 },
                { start: 2500, end: 4000, density: 0.18931893189318932 },
                { start: 4000, density: 0.21012101210121029 },
              ],
              percentiles: { p75: 3672 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8984898489848985,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0676067606760676,
                },
                { start: "0.25", density: 0.03390339033903391 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6158000000000001 },
                { start: 200, end: 500, density: 0.2685000000000002 },
                { start: 500, density: 0.11569999999999968 },
              ],
              percentiles: { p75: 288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3125, lcp: 3672, cls: "0.01" },
      timestamp: 1653301899333,
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
                { start: "0.00", end: "0.10", density: 0.8186 },
                { start: "0.10", end: "0.25", density: 0.1225 },
                { start: "0.25", density: 0.05890000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6184618461846183 },
                { start: 200, end: 500, density: 0.2761276127612761 },
                { start: 500, density: 0.10541054105410547 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27370000000000094 },
                { start: 800, end: 1800, density: 0.4658000000000017 },
                { start: 1800, density: 0.26049999999999734 },
              ],
              percentiles: { p75: 1866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.516696660667866 },
                { start: 1800, end: 3000, density: 0.2618476304739051 },
                { start: 3000, density: 0.22145570885822888 },
              ],
              percentiles: { p75: 2867 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9573999999999999 },
                { start: 100, end: 300, density: 0.0277 },
                { start: 300, density: 0.01490000000000006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5762728818645593 },
                { start: 2500, end: 4000, density: 0.23937181154346304 },
                { start: 4000, density: 0.1843553065919776 },
              ],
              percentiles: { p75: 3513 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2867,
        lcp: 3513,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1653301900199,
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
                  density: 0.9294311415178006,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020017737235525145,
                },
                { start: "0.25", density: 0.05055112124667428 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.564331712445788 },
                { start: 200, end: 500, density: 0.35195163622026554 },
                { start: 500, density: 0.08371665133394662 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2858593551662856 },
                { start: 800, end: 1800, density: 0.5319878141660316 },
                { start: 1800, density: 0.18215283066768295 },
              ],
              percentiles: { p75: 1571 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4948533196088511 },
                { start: 1800, end: 3000, density: 0.30867215645908314 },
                { start: 3000, density: 0.19647452393206588 },
              ],
              percentiles: { p75: 2721 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587211655200325 },
                { start: 100, end: 300, density: 0.03021718602455146 },
                { start: 300, density: 0.011061648455416162 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6295939347211504 },
                { start: 2500, end: 4000, density: 0.24588794654330476 },
                { start: 4000, density: 0.12451811873554482 },
              ],
              percentiles: { p75: 3018 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2721,
        lcp: 3018,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653301900680,
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
                { start: 0, end: 100, density: 0.9550089982003599 },
                { start: 100, end: 300, density: 0.027694461107778442 },
                { start: 300, density: 0.01729654069186169 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8794517807122845 },
                { start: 2500, end: 4000, density: 0.08693477390956379 },
                { start: 4000, density: 0.0336134453781518 },
              ],
              percentiles: { p75: 1843 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8651 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08679999999999999,
                },
                { start: "0.25", density: 0.048100000000000045 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5692000000000002 },
                { start: 200, end: 500, density: 0.31770000000000004 },
                { start: 500, density: 0.1130999999999999 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7192877150860342 },
                { start: 800, end: 1800, density: 0.2289915966386554 },
                { start: 1800, density: 0.05172068827531055 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8712871287128712 },
                { start: 1800, end: 3000, density: 0.09260926092609259 },
                { start: 3000, density: 0.03610361036103635 },
              ],
              percentiles: { p75: 1356 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1356,
        lcp: 1843,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653301901319,
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
                { start: 0, end: 2500, density: 0.7161180742649639 },
                { start: 2500, end: 4000, density: 0.17482722267775558 },
                { start: 4000, density: 0.10905470305728046 },
              ],
              percentiles: { p75: 2665 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7927467162617692,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17296291991165869,
                },
                { start: "0.25", density: 0.034290363826572134 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5854232897680443 },
                { start: 200, end: 500, density: 0.27316613681855645 },
                { start: 500, density: 0.14141057341339927 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46607431340872363 },
                { start: 800, end: 1800, density: 0.4142626355873528 },
                { start: 1800, density: 0.11966305100392352 },
              ],
              percentiles: { p75: 1295 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.666278120993122 },
                { start: 1800, end: 3000, density: 0.22380230796130055 },
                { start: 3000, density: 0.1099195710455774 },
              ],
              percentiles: { p75: 2112 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9271660760112427 },
                { start: 100, end: 300, density: 0.03983868996700475 },
                { start: 300, density: 0.032995234021752515 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2112,
        lcp: 2665,
        cls: "0.06",
        fid: 15,
      },
      timestamp: 1653301901751,
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
                  density: 0.822017798220178,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0910908909109089,
                },
                { start: "0.25", density: 0.08689131086891315 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5953809238152367 },
                { start: 200, end: 500, density: 0.25104979004199146 },
                { start: 500, density: 0.15356928614277185 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2832150354893535 },
                { start: 800, end: 1800, density: 0.4616615015495356 },
                { start: 1800, density: 0.255123462961111 },
              ],
              percentiles: { p75: 1886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5170517051705171 },
                { start: 1800, end: 3000, density: 0.3438343834383438 },
                { start: 3000, density: 0.13911391139113888 },
              ],
              percentiles: { p75: 2583 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.932820153953814 },
                { start: 100, end: 300, density: 0.026592022393282025 },
                { start: 300, density: 0.04058782365290401 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.62645 },
                { start: 2500, end: 4000, density: 0.27114999999999995 },
                { start: 4000, density: 0.10240000000000006 },
              ],
              percentiles: { p75: 3077 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2583,
        lcp: 3077,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653301902368,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34567396195541006 },
                { start: 800, end: 1800, density: 0.4458989568418899 },
                { start: 1800, density: 0.2084270812027 },
              ],
              percentiles: { p75: 1672 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5792110206637445 },
                { start: 1800, end: 3000, density: 0.26925485284909206 },
                { start: 3000, density: 0.15153412648716336 },
              ],
              percentiles: { p75: 2523 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639601441594232 },
                { start: 100, end: 300, density: 0.01187195251218995 },
                { start: 300, density: 0.024167903328386708 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6937616195001032 },
                { start: 2500, end: 4000, density: 0.21824003305102257 },
                { start: 4000, density: 0.08799834744887423 },
              ],
              percentiles: { p75: 2841 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9798891853067925,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0038990355017443053,
                },
                { start: "0.25", density: 0.016211779191463164 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6561586638830899 },
                { start: 200, end: 500, density: 0.28705636743215035 },
                { start: 500, density: 0.05678496868475988 },
              ],
              percentiles: { p75: 245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2523,
        lcp: 2841,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301902839,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7236200838716992 },
                { start: 2500, end: 4000, density: 0.19205485662473093 },
                { start: 4000, density: 0.08432505950357007 },
              ],
              percentiles: { p75: 2651 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9630925507900677,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018961625282167043,
                },
                { start: "0.25", density: 0.017945823927765232 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.589635535307517 },
                { start: 200, end: 500, density: 0.2919134396355352 },
                { start: 500, density: 0.1184510250569478 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43762061527982754 },
                { start: 800, end: 1800, density: 0.3772278351685776 },
                { start: 1800, density: 0.18515154955159482 },
              ],
              percentiles: { p75: 1545 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6196590909090902 },
                { start: 1800, end: 3000, density: 0.23715909090909065 },
                { start: 3000, density: 0.14318181818181908 },
              ],
              percentiles: { p75: 2374 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9342227378190255 },
                { start: 100, end: 300, density: 0.043619489559164726 },
                { start: 300, density: 0.022157772621809742 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2374,
        lcp: 2651,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653301903491,
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
                { start: 0, end: 100, density: 0.9464946494649465 },
                { start: 100, end: 300, density: 0.023602360236023603 },
                { start: 300, density: 0.02990299029903 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9071685662867427 },
                { start: 2500, end: 4000, density: 0.07183563287342533 },
                { start: 4000, density: 0.020995800839831862 },
              ],
              percentiles: { p75: 1793 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7912208779122089,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.06609339066093382 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.676332366763324 },
                { start: 200, end: 500, density: 0.23607639236076405 },
                { start: 500, density: 0.08759124087591198 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7797339201760529 },
                { start: 800, end: 1800, density: 0.1995598679603881 },
                { start: 1800, density: 0.020706211863559004 },
              ],
              percentiles: { p75: 798 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9113088691130888 },
                { start: 1800, end: 3000, density: 0.06879312068793124 },
                { start: 3000, density: 0.019898010198979948 },
              ],
              percentiles: { p75: 1275 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1275,
        lcp: 1793,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653301904112,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9798812265179978 },
                { start: 100, end: 300, density: 0.01296812507574839 },
                { start: 300, density: 0.007150648406253794 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8950481271019365 },
                { start: 2500, end: 4000, density: 0.0810622753102169 },
                { start: 4000, density: 0.023889597587846537 },
              ],
              percentiles: { p75: 1695 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8827338961489534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0802590493812883,
                },
                { start: "0.25", density: 0.037007054469758306 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8038343033207805 },
                { start: 200, end: 500, density: 0.16695195709231997 },
                { start: 500, density: 0.02921373958689956 },
              ],
              percentiles: { p75: 173 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6460866485656945 },
                { start: 800, end: 1800, density: 0.3189706055955613 },
                { start: 1800, density: 0.0349427458387441 },
              ],
              percentiles: { p75: 980 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8529752257467006 },
                { start: 1800, end: 3000, density: 0.11194721000231535 },
                { start: 3000, density: 0.03507756425098411 },
              ],
              percentiles: { p75: 1366 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1366,
        lcp: 1695,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653301904521,
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
                { start: "0.00", end: "0.10", density: 0.9614 },
                { start: "0.10", end: "0.25", density: 0.0253 },
                { start: "0.25", density: 0.01330000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.625062506250625 },
                { start: 200, end: 500, density: 0.2990299029902989 },
                { start: 500, density: 0.07590759075907605 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7121712171217124 },
                { start: 800, end: 1800, density: 0.23992399239924003 },
                { start: 1800, density: 0.04790479047904767 },
              ],
              percentiles: { p75: 869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8358999999999996 },
                { start: 1800, end: 3000, density: 0.10309999999999997 },
                { start: 3000, density: 0.061000000000000304 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566956695669568 },
                { start: 100, end: 300, density: 0.030503050305030508 },
                { start: 300, density: 0.012801280128012757 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8512499999999997 },
                { start: 2500, end: 4000, density: 0.10174999999999994 },
                { start: 4000, density: 0.04700000000000029 },
              ],
              percentiles: { p75: 1954 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1463,
        lcp: 1954,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653301905135,
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
                  density: 0.895561063542136,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07345651194231638,
                },
                { start: "0.25", density: 0.03098242451554756 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5729822552947914 },
                { start: 200, end: 500, density: 0.29753863766456795 },
                { start: 500, density: 0.12947910704064064 },
              ],
              percentiles: { p75: 322 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44884939621781716 },
                { start: 800, end: 1800, density: 0.3501936659831396 },
                { start: 1800, density: 0.20095693779904328 },
              ],
              percentiles: { p75: 1604 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.509455327822445 },
                { start: 1800, end: 3000, density: 0.2347412524062966 },
                { start: 3000, density: 0.25580341977125837 },
              ],
              percentiles: { p75: 3218 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5792343519254796 },
                { start: 2500, end: 4000, density: 0.20504373509031004 },
                { start: 4000, density: 0.21572191298421048 },
              ],
              percentiles: { p75: 3710 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3218, lcp: 3710, cls: "0.00" },
      timestamp: 1653301905587,
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
                  density: 0.8215178482151785,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15688431156884314,
                },
                { start: "0.25", density: 0.02159784021597839 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7549999999999993 },
                { start: 200, end: 500, density: 0.1648999999999998 },
                { start: 500, density: 0.08010000000000084 },
              ],
              percentiles: { p75: 203 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7260726072607262 },
                { start: 800, end: 1800, density: 0.23542354235423546 },
                { start: 1800, density: 0.03850385038503834 },
              ],
              percentiles: { p75: 836 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9014 },
                { start: 1800, end: 3000, density: 0.07080000000000003 },
                { start: 3000, density: 0.027800000000000106 },
              ],
              percentiles: { p75: 1283 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9731080675797261 },
                { start: 100, end: 300, density: 0.017794661601519542 },
                { start: 300, density: 0.009097270818754395 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9058217465239571 },
                { start: 2500, end: 4000, density: 0.07087126137841349 },
                { start: 4000, density: 0.023306992097629476 },
              ],
              percentiles: { p75: 1735 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1283, lcp: 1735, cls: "0.08", fid: 9 },
      timestamp: 1653301906253,
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
                  density: 0.9636342376052386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01508419083255379,
                },
                { start: "0.25", density: 0.021281571562207672 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4977968460111318 },
                { start: 200, end: 500, density: 0.3796382189239332 },
                { start: 500, density: 0.12256493506493503 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23190442726633886 },
                { start: 800, end: 1800, density: 0.5132349496369176 },
                { start: 1800, density: 0.25486062309674357 },
              ],
              percentiles: { p75: 1865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3743680188124644 },
                { start: 1800, end: 3000, density: 0.32110523221634424 },
                { start: 3000, density: 0.30452674897119136 },
              ],
              percentiles: { p75: 3429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965152235965747 },
                { start: 100, end: 300, density: 0.02414367269267365 },
                { start: 300, density: 0.010704091341579451 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49512338425381885 },
                { start: 2500, end: 4000, density: 0.30475910693301994 },
                { start: 4000, density: 0.2001175088131612 },
              ],
              percentiles: { p75: 3737 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3429,
        lcp: 3737,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653301906678,
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
                  density: 0.8448123620309052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1012141280353201,
                },
                { start: "0.25", density: 0.053973509933774776 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6513924331521143 },
                { start: 200, end: 500, density: 0.2605125929213361 },
                { start: 500, density: 0.08809497392654976 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46480773555205745 },
                { start: 800, end: 1800, density: 0.41702271194063395 },
                { start: 1800, density: 0.11816955250730851 },
              ],
              percentiles: { p75: 1303 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7048482812674949 },
                { start: 1800, end: 3000, density: 0.18698913895420435 },
                { start: 3000, density: 0.10816257977830074 },
              ],
              percentiles: { p75: 2027 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9542572463768116 },
                { start: 100, end: 300, density: 0.034646739130434784 },
                { start: 300, density: 0.011096014492753666 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7728229559051623 },
                { start: 2500, end: 4000, density: 0.13876578772435177 },
                { start: 4000, density: 0.08841125637048601 },
              ],
              percentiles: { p75: 2408 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2027,
        lcp: 2408,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653301907299,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6886499999999995 },
                { start: 2500, end: 4000, density: 0.16924999999999985 },
                { start: 4000, density: 0.14210000000000064 },
              ],
              percentiles: { p75: 2890 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8184 },
                { start: "0.10", end: "0.25", density: 0.0992 },
                { start: "0.25", density: 0.0823999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299740051989605 },
                { start: 200, end: 500, density: 0.2276544691061789 },
                { start: 500, density: 0.14237152569486047 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42712813844153247 },
                { start: 800, end: 1800, density: 0.4161248374512353 },
                { start: 1800, density: 0.15674702410723218 },
              ],
              percentiles: { p75: 1433 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6407640764076402 },
                { start: 1800, end: 3000, density: 0.21272127212721256 },
                { start: 3000, density: 0.14651465146514725 },
              ],
              percentiles: { p75: 2268 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9166916691669168 },
                { start: 100, end: 300, density: 0.0368036803680368 },
                { start: 300, density: 0.046504650465046496 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2268,
        lcp: 2890,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1653301907927,
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
                  density: 0.8368163183681632,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09109089091090891,
                },
                { start: "0.25", density: 0.07209279072092793 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.812118788121188 },
                { start: 200, end: 500, density: 0.1151884811518848 },
                { start: 500, density: 0.07269273072692724 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24144828965793155 },
                { start: 800, end: 1800, density: 0.49419883976795353 },
                { start: 1800, density: 0.2643528705741149 },
              ],
              percentiles: { p75: 1855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.06598680263947167 },
                { start: 1800, end: 3000, density: 0.356328734253147 },
                { start: 3000, density: 0.5776844631073813 },
              ],
              percentiles: { p75: 5269 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.18471847184718534 },
                { start: 2500, end: 4000, density: 0.36573657365736695 },
                { start: 4000, density: 0.4495449544954476 },
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
      extractedResults: { fcp: 5269, lcp: 5896, cls: "0.06" },
      timestamp: 1653301908367,
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
                { start: 0, end: 200, density: 0.8212821282128213 },
                { start: 200, end: 500, density: 0.1509150915091509 },
                { start: 500, density: 0.027802780278027843 },
              ],
              percentiles: { p75: 163 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6641007697690695 },
                { start: 800, end: 1800, density: 0.30170948715385393 },
                { start: 1800, density: 0.0341897430770767 },
              ],
              percentiles: { p75: 956 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8584424672598223 },
                { start: 1800, end: 3000, density: 0.10496850944716589 },
                { start: 3000, density: 0.03658902329301188 },
              ],
              percentiles: { p75: 1343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9834033193361328 },
                { start: 100, end: 300, density: 0.010697860427914416 },
                { start: 300, density: 0.005898820235952816 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8969206158768246 },
                { start: 2500, end: 4000, density: 0.07718456308738253 },
                { start: 4000, density: 0.025894821035792843 },
              ],
              percentiles: { p75: 1664 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.855128974205159,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10417916416716658,
                },
                { start: "0.25", density: 0.040691861627674464 },
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
      extractedResults: {
        fcp: 1343,
        lcp: 1664,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653301908814,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9429828948684604 },
                { start: 2500, end: 4000, density: 0.045813744123236994 },
                { start: 4000, density: 0.011203361008302559 },
              ],
              percentiles: { p75: 1544 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8349669933986799,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1219243848769754,
                },
                { start: "0.25", density: 0.04310862172434485 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7382214664399326 },
                { start: 200, end: 500, density: 0.18035410623186976 },
                { start: 500, density: 0.08142442732819773 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8580574172251675 },
                { start: 800, end: 1800, density: 0.12863859157747323 },
                { start: 1800, density: 0.013303991197359255 },
              ],
              percentiles: { p75: 668 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9458945894589459 },
                { start: 1800, end: 3000, density: 0.04030403040304032 },
                { start: 3000, density: 0.013801380138013814 },
              ],
              percentiles: { p75: 1121 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632853141256501 },
                { start: 100, end: 300, density: 0.019107643057222883 },
                { start: 300, density: 0.017607042817126925 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1121,
        lcp: 1544,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653301909312,
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
                  density: 0.7476999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12379999999999998,
                },
                { start: "0.25", density: 0.12850000000000003 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5896179235847171 },
                { start: 200, end: 500, density: 0.34266853370674133 },
                { start: 500, density: 0.06771354270854166 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4245999999999999 },
                { start: 800, end: 1800, density: 0.33490000000000003 },
                { start: 1800, density: 0.24050000000000005 },
              ],
              percentiles: { p75: 1746 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204 },
                { start: 1800, end: 3000, density: 0.20640000000000006 },
                { start: 3000, density: 0.27319999999999994 },
              ],
              percentiles: { p75: 3138 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574 },
                { start: 100, end: 300, density: 0.0393 },
                { start: 300, density: 0.0033 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5754424557544254 },
                { start: 2500, end: 4000, density: 0.20397960203979631 },
                { start: 4000, density: 0.22057794220577837 },
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
        fcp: 3138,
        lcp: 3600,
        cls: "0.13",
        fid: 12,
      },
      timestamp: 1653301909739,
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
                { start: 0, end: 100, density: 0.9875987598759877 },
                { start: 100, end: 300, density: 0.006600660066006601 },
                { start: 300, density: 0.005800580058005803 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8194861027794443 },
                { start: 2500, end: 4000, density: 0.12352529494101179 },
                { start: 4000, density: 0.056988602279543804 },
              ],
              percentiles: { p75: 2164 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9505950595059506,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03540354035403541,
                },
                { start: "0.25", density: 0.014001400140014027 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9219390304847576 },
                { start: 200, end: 500, density: 0.06216891554222888 },
                { start: 500, density: 0.015892053973013492 },
              ],
              percentiles: { p75: 96 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5986401359864016 },
                { start: 800, end: 1800, density: 0.33596640335966416 },
                { start: 1800, density: 0.06539346065393428 },
              ],
              percentiles: { p75: 1055 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7901999999999999 },
                { start: 1800, end: 3000, density: 0.16370000000000004 },
                { start: 3000, density: 0.04610000000000018 },
              ],
              percentiles: { p75: 1673 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1673, lcp: 2164, cls: "0.02", fid: 8 },
      timestamp: 1653301910161,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6676000000000001 },
                { start: 1800, end: 3000, density: 0.2333 },
                { start: 3000, density: 0.09909999999999995 },
              ],
              percentiles: { p75: 2066 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9861013898610139 },
                { start: 100, end: 300, density: 0.010198980101989802 },
                { start: 300, density: 0.0036996300369963007 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7415241524152412 },
                { start: 2500, end: 4000, density: 0.15646564656465645 },
                { start: 4000, density: 0.10201020102010236 },
              ],
              percentiles: { p75: 2608 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9405059494050595,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0407959204079592,
                },
                { start: "0.25", density: 0.0186981301869813 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6815681568156814 },
                { start: 200, end: 500, density: 0.27452745274527457 },
                { start: 500, density: 0.043904390439044046 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4219 },
                { start: 800, end: 1800, density: 0.4945 },
                { start: 1800, density: 0.08359999999999988 },
              ],
              percentiles: { p75: 1153 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2066,
        lcp: 2608,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653301910609,
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
                { start: 0, end: 2500, density: 0.7331945634872047 },
                { start: 2500, end: 4000, density: 0.15844251255050812 },
                { start: 4000, density: 0.10836292396228725 },
              ],
              percentiles: { p75: 2645 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9690308477046393,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015545299975710471,
                },
                { start: "0.25", density: 0.01542385231965024 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6820506575742815 },
                { start: 200, end: 500, density: 0.2654651729176815 },
                { start: 500, density: 0.05248416950803705 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39300411522633705 },
                { start: 800, end: 1800, density: 0.4806342290002416 },
                { start: 1800, density: 0.12636165577342137 },
              ],
              percentiles: { p75: 1349 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.594686814525956 },
                { start: 1800, end: 3000, density: 0.2717523763100168 },
                { start: 3000, density: 0.1335608091640272 },
              ],
              percentiles: { p75: 2311 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675512514149165 },
                { start: 100, end: 300, density: 0.026160231417431776 },
                { start: 300, density: 0.006288517167651862 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2311,
        lcp: 2645,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653301911070,
    },
  ],
};
