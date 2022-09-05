export const audit36 = {
  date: "2022-07-06T22:29:02.080Z",
  dateParsedLocale: "06/07/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "06/07/2022-legacy-audit",
  audits: [
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8498 },
                { start: "0.10", end: "0.25", density: 0.0869 },
                { start: "0.25", density: 0.06330000000000004 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7685768576857681 },
                { start: 200, end: 500, density: 0.13481348134813467 },
                { start: 500, density: 0.09660966096609717 },
              ],
              percentiles: { p75: 183 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3994798959791953 },
                { start: 800, end: 1800, density: 0.4257851570314056 },
                { start: 1800, density: 0.174734946989399 },
              ],
              percentiles: { p75: 1431 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.12209999999999942 },
                { start: 1800, end: 3000, density: 0.4348999999999979 },
                { start: 3000, density: 0.4430000000000028 },
              ],
              percentiles: { p75: 4424 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3109067279816057 },
                { start: 2500, end: 4000, density: 0.34169749075277434 },
                { start: 4000, density: 0.3473957812656201 },
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
      extractedResults: { fcp: 4424, lcp: 5108, cls: "0.04" },
      timestamp: 1657146436344,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.964990138067061,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01405325443786982,
                },
                { start: "0.25", density: 0.02095660749506904 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6582278481012659 },
                { start: 200, end: 500, density: 0.2837448301792205 },
                { start: 500, density: 0.05802732171951364 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3781156530408772 },
                { start: 800, end: 1800, density: 0.46136590229312047 },
                { start: 1800, density: 0.16051844466600232 },
              ],
              percentiles: { p75: 1456 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5660283511564286 },
                { start: 1800, end: 3000, density: 0.26436209898035307 },
                { start: 3000, density: 0.16960954986321827 },
              ],
              percentiles: { p75: 2518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9454804454804455 },
                { start: 100, end: 300, density: 0.04571354571354571 },
                { start: 300, density: 0.008806008806008788 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959695532817557 },
                { start: 2500, end: 4000, density: 0.1917269777888692 },
                { start: 4000, density: 0.1123034689293751 },
              ],
              percentiles: { p75: 2772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2518,
        lcp: 2772,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657146437201,
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
                  density: 0.9066906690669068,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04720472047204721,
                },
                { start: "0.25", density: 0.04610461046104613 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6329265853170635 },
                { start: 200, end: 500, density: 0.2958591718343669 },
                { start: 500, density: 0.07121424284856957 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3279016295111461 },
                { start: 800, end: 1800, density: 0.4946516045186437 },
                { start: 1800, density: 0.17744676597021028 },
              ],
              percentiles: { p75: 1595 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5476999999999999 },
                { start: 1800, end: 3000, density: 0.28699999999999987 },
                { start: 3000, density: 0.16530000000000028 },
              ],
              percentiles: { p75: 2614 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9722027797220277 },
                { start: 100, end: 300, density: 0.023497650234976502 },
                { start: 300, density: 0.0042995700429957 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6538153815381528 },
                { start: 2500, end: 4000, density: 0.22327232723272292 },
                { start: 4000, density: 0.1229122912291242 },
              ],
              percentiles: { p75: 2951 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2614,
        lcp: 2951,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1657146437806,
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
                  density: 0.8930893089308931,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07940794079407942,
                },
                { start: "0.25", density: 0.02750275027502749 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5814094775212636 },
                { start: 200, end: 500, density: 0.31603888213851744 },
                { start: 500, density: 0.10255164034021906 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4101982326247911 },
                { start: 800, end: 1800, density: 0.4000477668975402 },
                { start: 1800, density: 0.18975400047766874 },
              ],
              percentiles: { p75: 1502 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5316471015369724 },
                { start: 1800, end: 3000, density: 0.24373714147404107 },
                { start: 3000, density: 0.22461575698898653 },
              ],
              percentiles: { p75: 2875 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6286162005785934 },
                { start: 2500, end: 4000, density: 0.18093056894889145 },
                { start: 4000, density: 0.19045323047251528 },
              ],
              percentiles: { p75: 3383 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2875, lcp: 3383, cls: "0.00" },
      timestamp: 1657146438264,
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
                { start: 0, end: 200, density: 0.5181036207241442 },
                { start: 200, end: 500, density: 0.3343668733746745 },
                { start: 500, density: 0.14752950590118125 },
              ],
              percentiles: { p75: 353 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22218887555021993 },
                { start: 800, end: 1800, density: 0.5065026010404158 },
                { start: 1800, density: 0.27130852340936434 },
              ],
              percentiles: { p75: 1880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37502499500099945 },
                { start: 1800, end: 3000, density: 0.32283543291341704 },
                { start: 3000, density: 0.3021395720855836 },
              ],
              percentiles: { p75: 3309 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964096409640964 },
                { start: 100, end: 300, density: 0.028102810281028102 },
                { start: 300, density: 0.007800780078007803 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4836467293458688 },
                { start: 2500, end: 4000, density: 0.2961092218443686 },
                { start: 4000, density: 0.22024404880976273 },
              ],
              percentiles: { p75: 3824 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8983 },
                { start: "0.10", end: "0.25", density: 0.0628 },
                { start: "0.25", density: 0.038900000000000025 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3309,
        lcp: 3824,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1657146438822,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3897545118260282 },
                { start: 800, end: 1800, density: 0.38661585024100414 },
                { start: 1800, density: 0.22362963793296756 },
              ],
              percentiles: { p75: 1713 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47418738049713494 },
                { start: 1800, end: 3000, density: 0.24406703407940772 },
                { start: 3000, density: 0.28174558542345735 },
              ],
              percentiles: { p75: 3259 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8945353289244691 },
                { start: 100, end: 300, density: 0.06845341686970646 },
                { start: 300, density: 0.037011254205824455 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5262357842585286 },
                { start: 2500, end: 4000, density: 0.2589235446458727 },
                { start: 4000, density: 0.21484067109559876 },
              ],
              percentiles: { p75: 3761 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.857558790593505,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0992161254199328,
                },
                { start: "0.25", density: 0.04322508398656214 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.41419104204753215 },
                { start: 200, end: 500, density: 0.32106946983546625 },
                { start: 500, density: 0.2647394881170016 },
              ],
              percentiles: { p75: 526 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3259,
        lcp: 3761,
        cls: "0.04",
        fid: 20,
      },
      timestamp: 1657146439184,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5515706282512998 },
                { start: 2500, end: 4000, density: 0.2453481392557018 },
                { start: 4000, density: 0.2030812324929985 },
              ],
              percentiles: { p75: 3663 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8467999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10899999999999997,
                },
                { start: "0.25", density: 0.044199999999999996 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46894689468946954 },
                { start: 200, end: 500, density: 0.2906290629062911 },
                { start: 500, density: 0.24042404240423942 },
              ],
              percentiles: { p75: 481 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4166249874962487 },
                { start: 800, end: 1800, density: 0.37701310393117926 },
                { start: 1800, density: 0.20636190857257206 },
              ],
              percentiles: { p75: 1640 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5050000000000046 },
                { start: 1800, end: 3000, density: 0.23450000000000218 },
                { start: 3000, density: 0.2604999999999931 },
              ],
              percentiles: { p75: 3119 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9064157741967771 },
                { start: 100, end: 300, density: 0.0606545891302172 },
                { start: 300, density: 0.03292963667300577 },
              ],
              percentiles: { p75: 17 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3119,
        lcp: 3663,
        cls: "0.06",
        fid: 17,
      },
      timestamp: 1657146439852,
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
                { start: 0, end: 1800, density: 0.781543691261748 },
                { start: 1800, end: 3000, density: 0.11027794441111786 },
                { start: 3000, density: 0.10817836432713404 },
              ],
              percentiles: { p75: 1699 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8234470341102339 },
                { start: 2500, end: 4000, density: 0.09292787836350912 },
                { start: 4000, density: 0.08362508752625707 },
              ],
              percentiles: { p75: 2109 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9198080191980801,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0535946405359464,
                },
                { start: "0.25", density: 0.026597340265973397 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6565000000000002 },
                { start: 800, end: 1800, density: 0.2596000000000001 },
                { start: 1800, density: 0.0838999999999998 },
              ],
              percentiles: { p75: 1014 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1699, lcp: 2109, cls: "0.00" },
      timestamp: 1657146440199,
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
                { start: 0, end: 2500, density: 0.7210221022102217 },
                { start: 2500, end: 4000, density: 0.17666766676667683 },
                { start: 4000, density: 0.10231023102310147 },
              ],
              percentiles: { p75: 2672 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8164632926585318,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13522704540908181,
                },
                { start: "0.25", density: 0.04830966193238648 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7170565886822636 },
                { start: 200, end: 500, density: 0.18796240751849635 },
                { start: 500, density: 0.09498100379923996 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48630000000000023 },
                { start: 800, end: 1800, density: 0.3889000000000002 },
                { start: 1800, density: 0.12479999999999959 },
              ],
              percentiles: { p75: 1373 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6572971891567462 },
                { start: 1800, end: 3000, density: 0.22406722016604946 },
                { start: 3000, density: 0.11863559067720425 },
              ],
              percentiles: { p75: 2224 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583125062481255 },
                { start: 100, end: 300, density: 0.020793761871438565 },
                { start: 300, density: 0.020893731880436025 },
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
        fcp: 2224,
        lcp: 2672,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1657146440685,
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
                { start: "0.00", end: "0.10", density: 0.9413 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04460000000000001,
                },
                { start: "0.25", density: 0.0141 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9140257922623212 },
                { start: 200, end: 500, density: 0.06717984604618614 },
                { start: 500, density: 0.018794361691492588 },
              ],
              percentiles: { p75: 95 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6528305661132227 },
                { start: 800, end: 1800, density: 0.27205441088217636 },
                { start: 1800, density: 0.07511502300460092 },
              ],
              percentiles: { p75: 966 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7951204879512048 },
                { start: 1800, end: 3000, density: 0.14288571142885714 },
                { start: 3000, density: 0.061993800619938144 },
              ],
              percentiles: { p75: 1629 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9918 },
                { start: 100, end: 300, density: 0.0074 },
                { start: 300, density: 0.0008 },
              ],
              percentiles: { p75: 7 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8258500000000003 },
                { start: 2500, end: 4000, density: 0.10685 },
                { start: 4000, density: 0.06729999999999978 },
              ],
              percentiles: { p75: 2119 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1629, lcp: 2119, cls: "0.03", fid: 7 },
      timestamp: 1657146441011,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565043495650435 },
                { start: 100, end: 300, density: 0.028197180281971802 },
                { start: 300, density: 0.015298470152984677 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9072814562912584 },
                { start: 2500, end: 4000, density: 0.062212442488497714 },
                { start: 4000, density: 0.03050610122024392 },
              ],
              percentiles: { p75: 1826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7995799579957996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15031503150315031,
                },
                { start: "0.25", density: 0.05010501050105007 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6462 },
                { start: 200, end: 500, density: 0.24979999999999994 },
                { start: 500, density: 0.10400000000000002 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7354793561931422 },
                { start: 800, end: 1800, density: 0.23842847145856247 },
                { start: 1800, density: 0.02609217234829548 },
              ],
              percentiles: { p75: 842 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.895479095819164 },
                { start: 1800, end: 3000, density: 0.07681536307261456 },
                { start: 3000, density: 0.027705541108221512 },
              ],
              percentiles: { p75: 1322 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1322,
        lcp: 1826,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1657146441432,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386413440467495 },
                { start: 100, end: 300, density: 0.040175310445580724 },
                { start: 300, density: 0.021183345507669718 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7320730117340287 },
                { start: 2500, end: 4000, density: 0.1792698826597132 },
                { start: 4000, density: 0.08865710560625807 },
              ],
              percentiles: { p75: 2608 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9679018173235779,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016285107387302333,
                },
                { start: "0.25", density: 0.015813075289119655 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5694943685597891 },
                { start: 200, end: 500, density: 0.3265037143541816 },
                { start: 500, density: 0.10400191708602939 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4566426120903825 },
                { start: 800, end: 1800, density: 0.3785638234946176 },
                { start: 1800, density: 0.16479356441499987 },
              ],
              percentiles: { p75: 1461 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6342735245318782 },
                { start: 1800, end: 3000, density: 0.211898554159753 },
                { start: 3000, density: 0.15382792130836873 },
              ],
              percentiles: { p75: 2324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2324,
        lcp: 2608,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146441793,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41148627327232595 },
                { start: 800, end: 1800, density: 0.43893972862101654 },
                { start: 1800, density: 0.14957399810665753 },
              ],
              percentiles: { p75: 1481 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.605514648284504 },
                { start: 1800, end: 3000, density: 0.24784584051386427 },
                { start: 3000, density: 0.14663951120163166 },
              ],
              percentiles: { p75: 2408 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374599101988453 },
                { start: 100, end: 300, density: 0.030468248877485567 },
                { start: 300, density: 0.03207184092366916 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.713588411273816 },
                { start: 2500, end: 4000, density: 0.17760982522437435 },
                { start: 4000, density: 0.10880176350180971 },
              ],
              percentiles: { p75: 2674 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939919479715082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03561474140600805,
                },
                { start: "0.25", density: 0.024465778878909883 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847539401736889 },
                { start: 200, end: 500, density: 0.28385332904470867 },
                { start: 500, density: 0.1313927307816024 },
              ],
              percentiles: { p75: 294 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2408,
        lcp: 2674,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1657146442373,
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
                { start: 0, end: 200, density: 0.5931593159315931 },
                { start: 200, end: 500, density: 0.344934493449345 },
                { start: 500, density: 0.0619061906190619 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4458000000000002 },
                { start: 800, end: 1800, density: 0.3127000000000001 },
                { start: 1800, density: 0.24149999999999971 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5291529152915275 },
                { start: 1800, end: 3000, density: 0.21302130213021242 },
                { start: 3000, density: 0.2578257825782599 },
              ],
              percentiles: { p75: 2969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407 },
                { start: 100, end: 300, density: 0.0467 },
                { start: 300, density: 0.01260000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5757272818154554 },
                { start: 2500, end: 4000, density: 0.21683494951514545 },
                { start: 4000, density: 0.20743776866939923 },
              ],
              percentiles: { p75: 3469 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7043 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11540000000000003,
                },
                { start: "0.25", density: 0.1802999999999999 },
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
        fcp: 2969,
        lcp: 3469,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1657146443006,
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
                  density: 0.9444924779526198,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.034065363997924966,
                },
                { start: "0.25", density: 0.021442158049455297 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5220468154599892 },
                { start: 200, end: 500, density: 0.39121756487025955 },
                { start: 500, density: 0.0867356196697512 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28400294876520454 },
                { start: 800, end: 1800, density: 0.5171396977515665 },
                { start: 1800, density: 0.19885735348322886 },
              ],
              percentiles: { p75: 1753 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6118502749689552 },
                { start: 1800, end: 3000, density: 0.24569806634734787 },
                { start: 3000, density: 0.1424516586836969 },
              ],
              percentiles: { p75: 2562 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9547056750088122 },
                { start: 100, end: 300, density: 0.040888262248854425 },
                { start: 300, density: 0.004406062742333451 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7270222222222223 },
                { start: 2500, end: 4000, density: 0.22071111111111105 },
                { start: 4000, density: 0.052266666666666635 },
              ],
              percentiles: { p75: 2713 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2562,
        lcp: 2713,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146443384,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5757272818154554 },
                { start: 2500, end: 4000, density: 0.21683494951514545 },
                { start: 4000, density: 0.20743776866939923 },
              ],
              percentiles: { p75: 3469 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7043 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11540000000000003,
                },
                { start: "0.25", density: 0.1802999999999999 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5931593159315931 },
                { start: 200, end: 500, density: 0.344934493449345 },
                { start: 500, density: 0.0619061906190619 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4458000000000002 },
                { start: 800, end: 1800, density: 0.3127000000000001 },
                { start: 1800, density: 0.24149999999999971 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5291529152915275 },
                { start: 1800, end: 3000, density: 0.21302130213021242 },
                { start: 3000, density: 0.2578257825782599 },
              ],
              percentiles: { p75: 2969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407 },
                { start: 100, end: 300, density: 0.0467 },
                { start: 300, density: 0.01260000000000001 },
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
        fcp: 2969,
        lcp: 3469,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1657146443948,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847539401736889 },
                { start: 200, end: 500, density: 0.28385332904470867 },
                { start: 500, density: 0.1313927307816024 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41148627327232595 },
                { start: 800, end: 1800, density: 0.43893972862101654 },
                { start: 1800, density: 0.14957399810665753 },
              ],
              percentiles: { p75: 1481 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.605514648284504 },
                { start: 1800, end: 3000, density: 0.24784584051386427 },
                { start: 3000, density: 0.14663951120163166 },
              ],
              percentiles: { p75: 2408 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374599101988453 },
                { start: 100, end: 300, density: 0.030468248877485567 },
                { start: 300, density: 0.03207184092366916 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.713588411273816 },
                { start: 2500, end: 4000, density: 0.17760982522437435 },
                { start: 4000, density: 0.10880176350180971 },
              ],
              percentiles: { p75: 2674 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939919479715082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03561474140600805,
                },
                { start: "0.25", density: 0.024465778878909883 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2408,
        lcp: 2674,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1657146444301,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5683863227354531 },
                { start: 1800, end: 3000, density: 0.22795440911817635 },
                { start: 3000, density: 0.20365926814637056 },
              ],
              percentiles: { p75: 2726 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6546845315468459 },
                { start: 2500, end: 4000, density: 0.16913308669133092 },
                { start: 4000, density: 0.1761823817618231 },
              ],
              percentiles: { p75: 3277 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8930893089308931,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07940794079407942,
                },
                { start: "0.25", density: 0.02750275027502749 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6434713057388521 },
                { start: 200, end: 500, density: 0.26464707058588277 },
                { start: 500, density: 0.09188162367526517 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44944494449444955 },
                { start: 800, end: 1800, density: 0.3810381038103811 },
                { start: 1800, density: 0.16951695169516937 },
              ],
              percentiles: { p75: 1432 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2726, lcp: 3277, cls: "0.03" },
      timestamp: 1657146444918,
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
                  density: 0.9854095144678764,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0060078469838155965,
                },
                { start: "0.25", density: 0.008582638548307995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5007898894154822 },
                { start: 200, end: 500, density: 0.3959168793292018 },
                { start: 500, density: 0.103293231255316 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6535819430814523 },
                { start: 800, end: 1800, density: 0.27392051030421977 },
                { start: 1800, density: 0.07249754661432799 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7999506660088794 },
                { start: 1800, end: 3000, density: 0.11618154908732105 },
                { start: 3000, density: 0.08386778490379959 },
              ],
              percentiles: { p75: 1601 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9562707284117429 },
                { start: 100, end: 300, density: 0.022478810956884906 },
                { start: 300, density: 0.021250460631372165 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8532353667572238 },
                { start: 2500, end: 4000, density: 0.09625833539145467 },
                { start: 4000, density: 0.05050629785132149 },
              ],
              percentiles: { p75: 1953 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1601,
        lcp: 1953,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146445268,
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
                { start: 0, end: 100, density: 0.9729027097290271 },
                { start: 100, end: 300, density: 0.017798220177982205 },
                { start: 300, density: 0.009299070092990702 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7028499999999983 },
                { start: 2500, end: 4000, density: 0.15264999999999965 },
                { start: 4000, density: 0.14450000000000193 },
              ],
              percentiles: { p75: 2854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9427000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039900000000000005,
                },
                { start: "0.25", density: 0.017400000000000006 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6764676467646763 },
                { start: 200, end: 500, density: 0.2517251725172516 },
                { start: 500, density: 0.07180718071807206 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5834166833366665 },
                { start: 800, end: 1800, density: 0.22254450890178004 },
                { start: 1800, density: 0.1940388077615534 },
              ],
              percentiles: { p75: 1482 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6853258696521367 },
                { start: 1800, end: 3000, density: 0.1214514194322267 },
                { start: 3000, density: 0.1932227109156366 },
              ],
              percentiles: { p75: 2463 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2463,
        lcp: 2854,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657146445786,
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
                { start: 0, end: 2500, density: 0.708158368326333 },
                { start: 2500, end: 4000, density: 0.16356728654269118 },
                { start: 4000, density: 0.12827434513097583 },
              ],
              percentiles: { p75: 2763 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8870887088708871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06020602060206021,
                },
                { start: "0.25", density: 0.05270527052705274 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6059000000000005 },
                { start: 200, end: 500, density: 0.3004000000000002 },
                { start: 500, density: 0.09369999999999915 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4472211115553768 },
                { start: 800, end: 1800, density: 0.4087365053978399 },
                { start: 1800, density: 0.14404238304678332 },
              ],
              percentiles: { p75: 1358 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6351446012208529 },
                { start: 1800, end: 3000, density: 0.20664465125587855 },
                { start: 3000, density: 0.1582107475232685 },
              ],
              percentiles: { p75: 2320 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9558 },
                { start: 100, end: 300, density: 0.029 },
                { start: 300, density: 0.0152 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2320,
        lcp: 2763,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146446194,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3142000000000008 },
                { start: 800, end: 1800, density: 0.4274000000000011 },
                { start: 1800, density: 0.2583999999999982 },
              ],
              percentiles: { p75: 1859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.509601920384077 },
                { start: 1800, end: 3000, density: 0.2528505701140229 },
                { start: 3000, density: 0.23754750950190012 },
              ],
              percentiles: { p75: 2981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582041795820417 },
                { start: 100, end: 300, density: 0.026897310268973105 },
                { start: 300, density: 0.014898510148985097 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5764152830566106 },
                { start: 2500, end: 4000, density: 0.23784756951390248 },
                { start: 4000, density: 0.1857371474294868 },
              ],
              percentiles: { p75: 3490 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8547 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10010000000000001,
                },
                { start: "0.25", density: 0.04520000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5804839032193551 },
                { start: 200, end: 500, density: 0.28914217156568633 },
                { start: 500, density: 0.13037392521495852 },
              ],
              percentiles: { p75: 319 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2981,
        lcp: 3490,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1657146446586,
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
                  density: 0.958797933097634,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02733206418275768,
                },
                { start: "0.25", density: 0.01387000271960837 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45323545405111515 },
                { start: 200, end: 500, density: 0.39641109298531835 },
                { start: 500, density: 0.1503534529635665 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7188832347682577 },
                { start: 800, end: 1800, density: 0.19969742813918315 },
                { start: 1800, density: 0.0814193370925591 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8589058000822704 },
                { start: 1800, end: 3000, density: 0.09790209790209788 },
                { start: 3000, density: 0.04319210201563182 },
              ],
              percentiles: { p75: 1359 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598202124761646 },
                { start: 100, end: 300, density: 0.021792427131571777 },
                { start: 300, density: 0.018387360392263616 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8798215511324643 },
                { start: 2500, end: 4000, density: 0.08943033630748115 },
                { start: 4000, density: 0.030748112560054656 },
              ],
              percentiles: { p75: 1766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1359,
        lcp: 1766,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146446907,
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
                { start: "0.00", end: "0.10", density: 0.93048128342246 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05472750028444648,
                },
                { start: "0.25", density: 0.014791216293093651 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6412784767086025 },
                { start: 200, end: 500, density: 0.2913974838490309 },
                { start: 500, density: 0.06732403944236667 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6678184750057592 },
                { start: 800, end: 1800, density: 0.2916378714581895 },
                { start: 1800, density: 0.040543653536051355 },
              ],
              percentiles: { p75: 899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8745437956204377 },
                { start: 1800, end: 3000, density: 0.08907390510948907 },
                { start: 3000, density: 0.03638229927007317 },
              ],
              percentiles: { p75: 1414 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737914967967384 },
                { start: 100, end: 300, density: 0.02050087361677344 },
                { start: 300, density: 0.005707629586488098 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9139680729760549 },
                { start: 2500, end: 4000, density: 0.05581527936145953 },
                { start: 4000, density: 0.03021664766248563 },
              ],
              percentiles: { p75: 1736 },
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
        lcp: 1736,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146447397,
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
                  density: 0.8675884696508085,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09971877197093974,
                },
                { start: "0.25", density: 0.03269275837825169 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5413577386468953 },
                { start: 200, end: 500, density: 0.3292400370713623 },
                { start: 500, density: 0.1294022242817424 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6028668781576783 },
                { start: 800, end: 1800, density: 0.3514275643285159 },
                { start: 1800, density: 0.04570555751380595 },
              ],
              percentiles: { p75: 1035 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7741935483870966 },
                { start: 1800, end: 3000, density: 0.1704398826979472 },
                { start: 3000, density: 0.05536656891495631 },
              ],
              percentiles: { p75: 1728 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578263437684583 },
                { start: 100, end: 300, density: 0.02835203780271707 },
                { start: 300, density: 0.013821618428824664 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8359301780693529 },
                { start: 2500, end: 4000, density: 0.11966963448922205 },
                { start: 4000, density: 0.044400187441425015 },
              ],
              percentiles: { p75: 2153 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1728,
        lcp: 2153,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146448000,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8342165783421656 },
                { start: 1800, end: 3000, density: 0.12718728127187282 },
                { start: 3000, density: 0.03859614038596157 },
              ],
              percentiles: { p75: 1416 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8655 },
                { start: 2500, end: 4000, density: 0.10950000000000001 },
                { start: 4000, density: 0.024999999999999915 },
              ],
              percentiles: { p75: 1803 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9128000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0659 },
                { start: "0.25", density: 0.021300000000000006 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.787978797879788 },
                { start: 200, end: 500, density: 0.17461746174617457 },
                { start: 500, density: 0.037403740374037465 },
              ],
              percentiles: { p75: 175 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1416, lcp: 1803, cls: "0.03" },
      timestamp: 1657146448523,
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
                  density: 0.9545516212182878,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01614434947768281,
                },
                { start: "0.25", density: 0.029304029304029314 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5540127742293809 },
                { start: 200, end: 500, density: 0.3630935851152459 },
                { start: 500, density: 0.08289364065537322 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40175150519978026 },
                { start: 800, end: 1800, density: 0.47400109469074886 },
                { start: 1800, density: 0.12424740010947093 },
              ],
              percentiles: { p75: 1375 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5826361267315873 },
                { start: 1800, end: 3000, density: 0.25977232204087247 },
                { start: 3000, density: 0.15759155122754018 },
              ],
              percentiles: { p75: 2461 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643356643356642 },
                { start: 100, end: 300, density: 0.032167832167832165 },
                { start: 300, density: 0.003496503496503499 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6966944406501838 },
                { start: 2500, end: 4000, density: 0.19362109001502503 },
                { start: 4000, density: 0.10968446933479109 },
              ],
              percentiles: { p75: 2786 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2461,
        lcp: 2786,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146448857,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9198080191980801,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0535946405359464,
                },
                { start: "0.25", density: 0.026597340265973397 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6565000000000002 },
                { start: 800, end: 1800, density: 0.2596000000000001 },
                { start: 1800, density: 0.0838999999999998 },
              ],
              percentiles: { p75: 945 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.781543691261748 },
                { start: 1800, end: 3000, density: 0.11027794441111786 },
                { start: 3000, density: 0.10817836432713404 },
              ],
              percentiles: { p75: 1641 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8234470341102339 },
                { start: 2500, end: 4000, density: 0.09292787836350912 },
                { start: 4000, density: 0.08362508752625707 },
              ],
              percentiles: { p75: 2127 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1641, lcp: 2127, cls: "0.00" },
      timestamp: 1657146449487,
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
                { start: 0, end: 1800, density: 0.6339000000000005 },
                { start: 1800, end: 3000, density: 0.20180000000000015 },
                { start: 3000, density: 0.16429999999999953 },
              ],
              percentiles: { p75: 2418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620886265879764 },
                { start: 100, end: 300, density: 0.03130939281784536 },
                { start: 300, density: 0.006601980594178254 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6716000000000006 },
                { start: 2500, end: 4000, density: 0.17540000000000014 },
                { start: 4000, density: 0.15299999999999936 },
              ],
              percentiles: { p75: 3087 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8765000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0862 },
                { start: "0.25", density: 0.03729999999999997 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6892067620286085 },
                { start: 200, end: 500, density: 0.26047814344303294 },
                { start: 500, density: 0.050315094528358535 },
              ],
              percentiles: { p75: 228 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3995000000000007 },
                { start: 800, end: 1800, density: 0.43490000000000073 },
                { start: 1800, density: 0.1655999999999986 },
              ],
              percentiles: { p75: 1552 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2418,
        lcp: 3087,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1657146449861,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.tz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.817081708170817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1174117411741174,
                },
                { start: "0.25", density: 0.0655065506550656 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6868313168683133 },
                { start: 200, end: 500, density: 0.22067793220677945 },
                { start: 500, density: 0.09249075092490723 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39223922392239224 },
                { start: 800, end: 1800, density: 0.361936193619362 },
                { start: 1800, density: 0.24582458245824568 },
              ],
              percentiles: { p75: 1793 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5978793638091406 },
                { start: 1800, end: 3000, density: 0.17785335600680147 },
                { start: 3000, density: 0.22426728018405792 },
              ],
              percentiles: { p75: 2828 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9368126374725054 },
                { start: 100, end: 300, density: 0.053689262147570485 },
                { start: 300, density: 0.009498100379924006 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.609660966096609 },
                { start: 2500, end: 4000, density: 0.19881988198819855 },
                { start: 4000, density: 0.19151915191519242 },
              ],
              percentiles: { p75: 3409 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: {
        fcp: 2828,
        lcp: 3409,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1657146450233,
    },
    {
      url: "https://www.yara.co.zm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.zm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9315 },
                { start: "0.10", end: "0.25", density: 0.0412 },
                { start: "0.25", density: 0.02729999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5492549254925494 },
                { start: 200, end: 500, density: 0.2681268126812682 },
                { start: 500, density: 0.18261826182618243 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39893989398939944 },
                { start: 800, end: 1800, density: 0.3102310231023106 },
                { start: 1800, density: 0.2908290829082899 },
              ],
              percentiles: { p75: 1981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4854000000000003 },
                { start: 1800, end: 3000, density: 0.20090000000000013 },
                { start: 3000, density: 0.31369999999999965 },
              ],
              percentiles: { p75: 3370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9426 },
                { start: 100, end: 300, density: 0.0187 },
                { start: 300, density: 0.03870000000000001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5452135640692205 },
                { start: 2500, end: 4000, density: 0.24672401720516152 },
                { start: 4000, density: 0.208062418725618 },
              ],
              percentiles: { p75: 3733 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: {
        fcp: 3370,
        lcp: 3733,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1657146450593,
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
                  density: 0.9497445809747342,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0215380367251139,
                },
                { start: "0.25", density: 0.02871738230015184 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.60600272851296 },
                { start: 200, end: 500, density: 0.2657571623465209 },
                { start: 500, density: 0.1282401091405189 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8466274839070809 },
                { start: 800, end: 1800, density: 0.13532045899804085 },
                { start: 1800, density: 0.01805205709487829 },
              ],
              percentiles: { p75: 695 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9417707310228708 },
                { start: 1800, end: 3000, density: 0.04560123474112531 },
                { start: 3000, density: 0.012628034236004044 },
              ],
              percentiles: { p75: 1194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.937391304347826 },
                { start: 100, end: 300, density: 0.025652173913043478 },
                { start: 300, density: 0.03695652173913056 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9498395423468677 },
                { start: 2500, end: 4000, density: 0.04053299846518767 },
                { start: 4000, density: 0.009627459187944743 },
              ],
              percentiles: { p75: 1541 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1194,
        lcp: 1541,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146451111,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3994798959791953 },
                { start: 800, end: 1800, density: 0.4257851570314056 },
                { start: 1800, density: 0.174734946989399 },
              ],
              percentiles: { p75: 1429 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.12209999999999942 },
                { start: 1800, end: 3000, density: 0.4348999999999979 },
                { start: 3000, density: 0.4430000000000028 },
              ],
              percentiles: { p75: 4400 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3109067279816057 },
                { start: 2500, end: 4000, density: 0.34169749075277434 },
                { start: 4000, density: 0.3473957812656201 },
              ],
              percentiles: { p75: 5072 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8498 },
                { start: "0.10", end: "0.25", density: 0.0869 },
                { start: "0.25", density: 0.06330000000000004 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7685768576857681 },
                { start: 200, end: 500, density: 0.13481348134813467 },
                { start: 500, density: 0.09660966096609717 },
              ],
              percentiles: { p75: 179 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4400, lcp: 5072, cls: "0.05" },
      timestamp: 1657146451728,
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
                { start: 0, end: 2500, density: 0.7703688893331997 },
                { start: 2500, end: 4000, density: 0.13845846246126156 },
                { start: 4000, density: 0.09117264820553865 },
              ],
              percentiles: { p75: 2411 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8264173582641734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11678832116788318,
                },
                { start: "0.25", density: 0.05679432056794333 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6450709858028393 },
                { start: 200, end: 500, density: 0.26734653069386105 },
                { start: 500, density: 0.08758248350329977 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.467106578684263 },
                { start: 800, end: 1800, density: 0.39872025594881016 },
                { start: 1800, density: 0.13417316536692672 },
              ],
              percentiles: { p75: 1366 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6976302369763022 },
                { start: 1800, end: 3000, density: 0.19298070192980696 },
                { start: 3000, density: 0.10938906109389086 },
              ],
              percentiles: { p75: 2025 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622113365990203 },
                { start: 100, end: 300, density: 0.022493252024392684 },
                { start: 300, density: 0.015295411376587109 },
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
        fcp: 2025,
        lcp: 2411,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1657146452128,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7775385016966847 },
                { start: 2500, end: 4000, density: 0.1337118245888801 },
                { start: 4000, density: 0.0887496737144352 },
              ],
              percentiles: { p75: 2393 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9358441558441559,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04831168831168832,
                },
                { start: "0.25", density: 0.015844155844155824 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40348595213319477 },
                { start: 200, end: 500, density: 0.40881893860561924 },
                { start: 500, density: 0.18769510926118602 },
              ],
              percentiles: { p75: 406 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5637548891786172 },
                { start: 800, end: 1800, density: 0.3151238591916553 },
                { start: 1800, density: 0.12112125162972744 },
              ],
              percentiles: { p75: 1189 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6905917858548737 },
                { start: 1800, end: 3000, density: 0.1755675108253508 },
                { start: 3000, density: 0.1338407033197756 },
              ],
              percentiles: { p75: 2083 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308622502628814 },
                { start: 100, end: 300, density: 0.04560988433228181 },
                { start: 300, density: 0.023527865404836902 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2083,
        lcp: 2393,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1657146452519,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7219219924812023 },
                { start: 1800, end: 3000, density: 0.18503289473684187 },
                { start: 3000, density: 0.09304511278195585 },
              ],
              percentiles: { p75: 1907 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9042260265772777 },
                { start: 100, end: 300, density: 0.06021788578953669 },
                { start: 300, density: 0.03555608763318566 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8101808360732727 },
                { start: 2500, end: 4000, density: 0.12664396430248928 },
                { start: 4000, density: 0.06317519962423784 },
              ],
              percentiles: { p75: 2221 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9313450292397661,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033918128654970764,
                },
                { start: "0.25", density: 0.03473684210526316 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37193315159416823 },
                { start: 200, end: 500, density: 0.43285528031290704 },
                { start: 500, density: 0.1952115680929247 },
              ],
              percentiles: { p75: 428 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5287517531556801 },
                { start: 800, end: 1800, density: 0.3787985039738195 },
                { start: 1800, density: 0.09244974287050038 },
              ],
              percentiles: { p75: 1152 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1907,
        lcp: 2221,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1657146453199,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.895479095819164 },
                { start: 1800, end: 3000, density: 0.07681536307261456 },
                { start: 3000, density: 0.027705541108221512 },
              ],
              percentiles: { p75: 1322 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565043495650435 },
                { start: 100, end: 300, density: 0.028197180281971802 },
                { start: 300, density: 0.015298470152984677 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9072814562912584 },
                { start: 2500, end: 4000, density: 0.062212442488497714 },
                { start: 4000, density: 0.03050610122024392 },
              ],
              percentiles: { p75: 1826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7995799579957996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15031503150315031,
                },
                { start: "0.25", density: 0.05010501050105007 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6462 },
                { start: 200, end: 500, density: 0.24979999999999994 },
                { start: 500, density: 0.10400000000000002 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7354793561931422 },
                { start: 800, end: 1800, density: 0.23842847145856247 },
                { start: 1800, density: 0.02609217234829548 },
              ],
              percentiles: { p75: 842 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1322,
        lcp: 1826,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1657146453808,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9084841293384753 },
                { start: 100, end: 300, density: 0.04553544942153664 },
                { start: 300, density: 0.0459804212399881 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5406272793581324 },
                { start: 2500, end: 4000, density: 0.27410649161196193 },
                { start: 4000, density: 0.18526622902990583 },
              ],
              percentiles: { p75: 3521 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9460819554277499,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030481667864845432,
                },
                { start: "0.25", density: 0.023436376707404782 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4532544378698223 },
                { start: 200, end: 500, density: 0.3560650887573963 },
                { start: 500, density: 0.1906804733727814 },
              ],
              percentiles: { p75: 395 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27145154217219875 },
                { start: 800, end: 1800, density: 0.3173512644350262 },
                { start: 1800, density: 0.411197193392775 },
              ],
              percentiles: { p75: 2343 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.427591240875912 },
                { start: 1800, end: 3000, density: 0.28335766423357633 },
                { start: 3000, density: 0.2890510948905116 },
              ],
              percentiles: { p75: 3254 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3254,
        lcp: 3521,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1657146454280,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7147987430794552 },
                { start: 800, end: 1800, density: 0.28011372138261265 },
                { start: 1800, density: 0.005087535537932066 },
              ],
              percentiles: { p75: 854 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9246636771300448 },
                { start: 1800, end: 3000, density: 0.06233183856502244 },
                { start: 3000, density: 0.013004484304932735 },
              ],
              percentiles: { p75: 1349 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9486316733961419 },
                { start: 2500, end: 4000, density: 0.039554359204426494 },
                { start: 4000, density: 0.011813967399431732 },
              ],
              percentiles: { p75: 1636 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1349, lcp: 1636 },
      timestamp: 1657146454964,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6491323210412144 },
                { start: 200, end: 500, density: 0.27494577006507576 },
                { start: 500, density: 0.0759219088937098 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4913614374568063 },
                { start: 800, end: 1800, density: 0.3771596406357976 },
                { start: 1800, density: 0.1314789219073961 },
              ],
              percentiles: { p75: 1347 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6761334473909313 },
                { start: 1800, end: 3000, density: 0.20171086398631272 },
                { start: 3000, density: 0.122155688622756 },
              ],
              percentiles: { p75: 2140 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.961901306240929 },
                { start: 100, end: 300, density: 0.03211175616835994 },
                { start: 300, density: 0.005986937590711148 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7447062841530053 },
                { start: 2500, end: 4000, density: 0.16478825136612013 },
                { start: 4000, density: 0.09050546448087453 },
              ],
              percentiles: { p75: 2550 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9239294710327456,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.051049538203190595,
                },
                { start: "0.25", density: 0.025020990764063812 },
              ],
              percentiles: { p75: "0.05" },
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
        lcp: 2550,
        cls: "0.05",
        fid: 15,
      },
      timestamp: 1657146455578,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320871205625108 },
                { start: 100, end: 300, density: 0.04167381238209571 },
                { start: 300, density: 0.026239067055393552 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9059405940594059 },
                { start: 2500, end: 4000, density: 0.06612446958981612 },
                { start: 4000, density: 0.027934936350777918 },
              ],
              percentiles: { p75: 1880 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9379926431949553,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0394114555964267,
                },
                { start: "0.25", density: 0.022595901208617975 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4396652719665273 },
                { start: 200, end: 500, density: 0.4006694560669458 },
                { start: 500, density: 0.159665271966527 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.67289061123833 },
                { start: 800, end: 1800, density: 0.29910163818918445 },
                { start: 1800, density: 0.028007750572485487 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8623804463336878 },
                { start: 1800, end: 3000, density: 0.10839532412327313 },
                { start: 3000, density: 0.02922422954303907 },
              ],
              percentiles: { p75: 1439 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1439,
        lcp: 1880,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1657146456349,
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
                { start: 0, end: 100, density: 0.9592651757188498 },
                { start: 100, end: 300, density: 0.03421192758253463 },
                { start: 300, density: 0.006522896698615538 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5896250976308245 },
                { start: 2500, end: 4000, density: 0.2593725592293669 },
                { start: 4000, density: 0.1510023431398086 },
              ],
              percentiles: { p75: 3220 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9362416107382551,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0334279814145586,
                },
                { start: "0.25", density: 0.030330407847186353 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4927984923946697 },
                { start: 200, end: 500, density: 0.4036882487548795 },
                { start: 500, density: 0.10351325885045078 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29653567735263675 },
                { start: 800, end: 1800, density: 0.44467425025853113 },
                { start: 1800, density: 0.25879007238883206 },
              ],
              percentiles: { p75: 1833 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4524957643685638 },
                { start: 1800, end: 3000, density: 0.32373256874755535 },
                { start: 3000, density: 0.22377166688388092 },
              ],
              percentiles: { p75: 2855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2855,
        lcp: 3220,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146457079,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5849999999999999 },
                { start: 200, end: 500, density: 0.2575999999999999 },
                { start: 500, density: 0.15740000000000037 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5042999999999997 },
                { start: 800, end: 1800, density: 0.41209999999999974 },
                { start: 1800, density: 0.08360000000000048 },
              ],
              percentiles: { p75: 1203 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6983301669833015 },
                { start: 1800, end: 3000, density: 0.21777822217778206 },
                { start: 3000, density: 0.08389161083891655 },
              ],
              percentiles: { p75: 1973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9231230630810755 },
                { start: 100, end: 300, density: 0.03938818354493651 },
                { start: 300, density: 0.037488753373988035 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7367263273672631 },
                { start: 2500, end: 4000, density: 0.17378262173782622 },
                { start: 4000, density: 0.08949105089491066 },
              ],
              percentiles: { p75: 2556 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8016000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15500000000000003,
                },
                { start: "0.25", density: 0.0434 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1973,
        lcp: 2556,
        cls: "0.06",
        fid: 16,
      },
      timestamp: 1657146457703,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469687981967019 },
                { start: 100, end: 300, density: 0.02894768062640883 },
                { start: 300, density: 0.024083521176889368 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8868949232585596 },
                { start: 2500, end: 4000, density: 0.08571428571428569 },
                { start: 4000, density: 0.027390791027154734 },
              ],
              percentiles: { p75: 1892 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9748146404613393,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0122396139814052,
                },
                { start: "0.25", density: 0.012945745557255509 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5793241023233988 },
                { start: 200, end: 500, density: 0.33313776108894655 },
                { start: 500, density: 0.08753813658765452 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5616568047337278 },
                { start: 800, end: 1800, density: 0.37976331360946747 },
                { start: 1800, density: 0.05857988165680474 },
              ],
              percentiles: { p75: 1024 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.832959508912761 },
                { start: 1800, end: 3000, density: 0.12867430055483406 },
                { start: 3000, density: 0.03836619053240499 },
              ],
              percentiles: { p75: 1557 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1557,
        lcp: 1892,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146458085,
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
                { start: 0, end: 1800, density: 0.6494701059788036 },
                { start: 1800, end: 3000, density: 0.20075984803039373 },
                { start: 3000, density: 0.14977004599080276 },
              ],
              percentiles: { p75: 2276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9128738621586475 },
                { start: 100, end: 300, density: 0.033910173051915564 },
                { start: 300, density: 0.053215964789436986 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.715943188637728 },
                { start: 2500, end: 4000, density: 0.16003200640128035 },
                { start: 4000, density: 0.1240248049609916 },
              ],
              percentiles: { p75: 2750 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8046195380461955,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11918808119188085,
                },
                { start: "0.25", density: 0.07619238076192364 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5942782834850449 },
                { start: 200, end: 500, density: 0.25247574272281653 },
                { start: 500, density: 0.15324597379213856 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4316294888466536 },
                { start: 800, end: 1800, density: 0.41352405721716473 },
                { start: 1800, density: 0.15484645393618165 },
              ],
              percentiles: { p75: 1420 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2276,
        lcp: 2750,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1657146458826,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7341170585292642 },
                { start: 2500, end: 4000, density: 0.15432716358179074 },
                { start: 4000, density: 0.1115557778889451 },
              ],
              percentiles: { p75: 2646 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8874112588741127,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0542945705429457,
                },
                { start: "0.25", density: 0.058294170582941646 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5216999999999999 },
                { start: 200, end: 500, density: 0.32609999999999995 },
                { start: 500, density: 0.15219999999999997 },
              ],
              percentiles: { p75: 347 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4844937975190077 },
                { start: 800, end: 1800, density: 0.40296118447378954 },
                { start: 1800, density: 0.11254501800720297 },
              ],
              percentiles: { p75: 1254 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6493298659731955 },
                { start: 1800, end: 3000, density: 0.21094218843768775 },
                { start: 3000, density: 0.13972794558911675 },
              ],
              percentiles: { p75: 2236 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9545227386306847 },
                { start: 100, end: 300, density: 0.03218390804597701 },
                { start: 300, density: 0.013293353323338431 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2236,
        lcp: 2646,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1657146459247,
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
                { start: 0, end: 1800, density: 0.582927168917979 },
                { start: 1800, end: 3000, density: 0.2267093719537673 },
                { start: 3000, density: 0.1903634591282537 },
              ],
              percentiles: { p75: 2597 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475032010243278 },
                { start: 100, end: 300, density: 0.04310712761416988 },
                { start: 300, density: 0.009389671361502348 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6469684269348983 },
                { start: 2500, end: 4000, density: 0.19516624755518308 },
                { start: 4000, density: 0.15786532550991855 },
              ],
              percentiles: { p75: 3127 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9561923129907701,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01722000275520044,
                },
                { start: "0.25", density: 0.02658768425402948 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5872346407985379 },
                { start: 200, end: 500, density: 0.34837621256853646 },
                { start: 500, density: 0.06438914663292568 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3400781468043548 },
                { start: 800, end: 1800, density: 0.46315936366173716 },
                { start: 1800, density: 0.19676248953390815 },
              ],
              percentiles: { p75: 1647 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2597,
        lcp: 3127,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146459632,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2734239802224971 },
                { start: 800, end: 1800, density: 0.4702101359703341 },
                { start: 1800, density: 0.25636588380716885 },
              ],
              percentiles: { p75: 1886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4790322580645159 },
                { start: 1800, end: 3000, density: 0.3669975186104216 },
                { start: 3000, density: 0.15397022332506255 },
              ],
              percentiles: { p75: 2574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8883507203179335 },
                { start: 100, end: 300, density: 0.053775459513164425 },
                { start: 300, density: 0.057873820168902204 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6443260654112981 },
                { start: 2500, end: 4000, density: 0.27836967294350834 },
                { start: 4000, density: 0.07730426164519348 },
              ],
              percentiles: { p75: 2942 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9353887728780247,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029357572779756782,
                },
                { start: "0.25", density: 0.0352536543422184 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4240039350713226 },
                { start: 200, end: 500, density: 0.3582144613871122 },
                { start: 500, density: 0.21778160354156512 },
              ],
              percentiles: { p75: 416 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2574,
        lcp: 2942,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1657146460336,
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
                { start: "0.00", end: "0.10", density: 0.787 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15410000000000001,
                },
                { start: "0.25", density: 0.05889999999999998 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7295 },
                { start: 200, end: 500, density: 0.22060000000000002 },
                { start: 500, density: 0.04989999999999986 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2611738826117388 },
                { start: 800, end: 1800, density: 0.5248475152484752 },
                { start: 1800, density: 0.213978602139786 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.606721344268854 },
                { start: 1800, end: 3000, density: 0.23854770954190846 },
                { start: 3000, density: 0.1547309461892375 },
              ],
              percentiles: { p75: 2511 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9743 },
                { start: 100, end: 300, density: 0.0232 },
                { start: 300, density: 0.0025 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6942888577715541 },
                { start: 2500, end: 4000, density: 0.21579315863172624 },
                { start: 4000, density: 0.0899179835967196 },
              ],
              percentiles: { p75: 2820 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2511,
        lcp: 2820,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1657146461029,
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
                { start: 0, end: 1800, density: 0.6127249206162515 },
                { start: 1800, end: 3000, density: 0.215218158297071 },
                { start: 3000, density: 0.17205692108667747 },
              ],
              percentiles: { p75: 2418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9491525423728814 },
                { start: 100, end: 300, density: 0.03318715183121963 },
                { start: 300, density: 0.017660305795899025 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000235460324928 },
                { start: 2500, end: 4000, density: 0.16917824346597576 },
                { start: 4000, density: 0.13079821050153148 },
              ],
              percentiles: { p75: 2796 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9370409233997902,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020519995336364703,
                },
                { start: "0.25", density: 0.04243908126384517 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5534472598703601 },
                { start: 200, end: 500, density: 0.3429581614614029 },
                { start: 500, density: 0.10359457866823699 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4306739866837975 },
                { start: 800, end: 1800, density: 0.4131526690807138 },
                { start: 1800, density: 0.15617334423548868 },
              ],
              percentiles: { p75: 1406 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2418,
        lcp: 2796,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146461442,
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
                { start: 0, end: 200, density: 0.7398739873987401 },
                { start: 200, end: 500, density: 0.1882188218821883 },
                { start: 500, density: 0.07190719071907162 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4041404140414046 },
                { start: 800, end: 1800, density: 0.38303830383038345 },
                { start: 1800, density: 0.21282128212821194 },
              ],
              percentiles: { p75: 1694 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6501999999999992 },
                { start: 1800, end: 3000, density: 0.20519999999999983 },
                { start: 3000, density: 0.144600000000001 },
              ],
              percentiles: { p75: 2319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598040195980401 },
                { start: 100, end: 300, density: 0.019998000199979996 },
                { start: 300, density: 0.020197980201979836 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7241499999999995 },
                { start: 2500, end: 4000, density: 0.15554999999999988 },
                { start: 4000, density: 0.12030000000000056 },
              ],
              percentiles: { p75: 2703 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.799359871974395,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14152830566113223,
                },
                { start: "0.25", density: 0.05911182236447286 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2319,
        lcp: 2703,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1657146462127,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9128000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0659 },
                { start: "0.25", density: 0.021300000000000006 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.787978797879788 },
                { start: 200, end: 500, density: 0.17461746174617457 },
                { start: 500, density: 0.037403740374037465 },
              ],
              percentiles: { p75: 182 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8342165783421656 },
                { start: 1800, end: 3000, density: 0.12718728127187282 },
                { start: 3000, density: 0.03859614038596157 },
              ],
              percentiles: { p75: 1414 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8655 },
                { start: 2500, end: 4000, density: 0.10950000000000001 },
                { start: 4000, density: 0.024999999999999915 },
              ],
              percentiles: { p75: 1799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1414, lcp: 1799, cls: "0.00" },
      timestamp: 1657146462595,
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
                { start: 0, end: 2500, density: 0.778260352213231 },
                { start: 2500, end: 4000, density: 0.13606615897191793 },
                { start: 4000, density: 0.0856734888148512 },
              ],
              percentiles: { p75: 2342 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8643503093764873,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0937648738695859,
                },
                { start: "0.25", density: 0.041884816753926746 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7221342429041295 },
                { start: 200, end: 500, density: 0.2248751370447069 },
                { start: 500, density: 0.0529906200511635 },
              ],
              percentiles: { p75: 211 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4860911270983213 },
                { start: 800, end: 1800, density: 0.3835731414868104 },
                { start: 1800, density: 0.13033573141486832 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7175188600167638 },
                { start: 1800, end: 3000, density: 0.16345347862531417 },
                { start: 3000, density: 0.11902766135792192 },
              ],
              percentiles: { p75: 1964 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728380024360536 },
                { start: 100, end: 300, density: 0.016686967113276493 },
                { start: 300, density: 0.010475030450669895 },
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
        fcp: 1964,
        lcp: 2342,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146463217,
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
                { start: 0, end: 100, density: 0.9402250351617438 },
                { start: 100, end: 300, density: 0.030766526019690574 },
                { start: 300, density: 0.029008438818565498 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9152497343251859 },
                { start: 2500, end: 4000, density: 0.06314204746723341 },
                { start: 4000, density: 0.021608218207580663 },
              ],
              percentiles: { p75: 1820 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9580712788259957,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024807826694619145,
                },
                { start: "0.25", density: 0.017120894479385054 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4211270093623037 },
                { start: 200, end: 500, density: 0.41494435612082675 },
                { start: 500, density: 0.16392863451686965 },
              ],
              percentiles: { p75: 380 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6322042915410535 },
                { start: 800, end: 1800, density: 0.32984571732576695 },
                { start: 1800, density: 0.03794999113317961 },
              ],
              percentiles: { p75: 959 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.868495575221239 },
                { start: 1800, end: 3000, density: 0.10442477876106196 },
                { start: 3000, density: 0.027079646017699074 },
              ],
              percentiles: { p75: 1482 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1482,
        lcp: 1820,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146463862,
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
                { start: 0, end: 100, density: 0.9654930986197238 },
                { start: 100, end: 300, density: 0.027905581116223245 },
                { start: 300, density: 0.006601320264052808 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7675197440767776 },
                { start: 2500, end: 4000, density: 0.14280715785264425 },
                { start: 4000, density: 0.08967309807057812 },
              ],
              percentiles: { p75: 2443 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9352064793520648,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03499650034996501,
                },
                { start: "0.25", density: 0.029797020297970184 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6129838951685503 },
                { start: 200, end: 500, density: 0.27408222466740007 },
                { start: 500, density: 0.1129338801640495 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5068479456163152 },
                { start: 800, end: 1800, density: 0.37818654403678886 },
                { start: 1800, density: 0.11496551034689598 },
              ],
              percentiles: { p75: 1220 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6900239904038393 },
                { start: 1800, end: 3000, density: 0.19342263094762122 },
                { start: 3000, density: 0.11655337864853954 },
              ],
              percentiles: { p75: 2057 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2057,
        lcp: 2443,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146464619,
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
                  density: 0.9397167271450311,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020016387685824654,
                },
                { start: "0.25", density: 0.04026688516914434 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45869487697610817 },
                { start: 200, end: 500, density: 0.37739213122548404 },
                { start: 500, density: 0.1639129917984079 },
              ],
              percentiles: { p75: 387 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22552138564863877 },
                { start: 800, end: 1800, density: 0.48933663249675907 },
                { start: 1800, density: 0.28514198185460204 },
              ],
              percentiles: { p75: 1915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3651998576681282 },
                { start: 1800, end: 3000, density: 0.32273751630885905 },
                { start: 3000, density: 0.31206262602301277 },
              ],
              percentiles: { p75: 3353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561607033825865 },
                { start: 100, end: 300, density: 0.03431432409329588 },
                { start: 300, density: 0.009524972524117721 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49526739233317485 },
                { start: 2500, end: 4000, density: 0.3099858021769991 },
                { start: 4000, density: 0.194746805489826 },
              ],
              percentiles: { p75: 3667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3353,
        lcp: 3667,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146465007,
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
                { start: 0, end: 1800, density: 0.5132973405318929 },
                { start: 1800, end: 3000, density: 0.3117376524695057 },
                { start: 3000, density: 0.17496500699860143 },
              ],
              percentiles: { p75: 2640 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9799020097990202 },
                { start: 100, end: 300, density: 0.015898410158984102 },
                { start: 300, density: 0.0041995800419958 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.620098039215686 },
                { start: 2500, end: 4000, density: 0.23794517807122834 },
                { start: 4000, density: 0.1419567827130857 },
              ],
              percentiles: { p75: 3058 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8775999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05759999999999999,
                },
                { start: "0.25", density: 0.06480000000000007 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6375 },
                { start: 200, end: 500, density: 0.2997 },
                { start: 500, density: 0.06279999999999994 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2870712928707133 },
                { start: 800, end: 1800, density: 0.5136486351364871 },
                { start: 1800, density: 0.1992800719927996 },
              ],
              percentiles: { p75: 1697 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2640,
        lcp: 3058,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1657146465603,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.597680463907218 },
                { start: 2500, end: 4000, density: 0.24545090981803627 },
                { start: 4000, density: 0.15686862627474574 },
              ],
              percentiles: { p75: 3259 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9045 },
                { start: "0.10", end: "0.25", density: 0.0632 },
                { start: "0.25", density: 0.03230000000000005 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6022999999999996 },
                { start: 200, end: 500, density: 0.31069999999999987 },
                { start: 500, density: 0.08700000000000042 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30866913308669136 },
                { start: 800, end: 1800, density: 0.4528547145285471 },
                { start: 1800, density: 0.2384761523847615 },
              ],
              percentiles: { p75: 1791 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48839999999999906 },
                { start: 1800, end: 3000, density: 0.30959999999999943 },
                { start: 3000, density: 0.2020000000000015 },
              ],
              percentiles: { p75: 2754 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967996799679968 },
                { start: 100, end: 300, density: 0.026302630263026303 },
                { start: 300, density: 0.005700570057005675 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2754,
        lcp: 3259,
        cls: "0.02",
        fid: 10,
      },
      timestamp: 1657146466129,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5918534718425358 },
                { start: 1800, end: 3000, density: 0.23045379989065023 },
                { start: 3000, density: 0.17769272826681407 },
              ],
              percentiles: { p75: 2491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8833992094861657 },
                { start: 100, end: 300, density: 0.04517221908526254 },
                { start: 300, density: 0.07142857142857181 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6938845468257235 },
                { start: 2500, end: 4000, density: 0.16680378445084335 },
                { start: 4000, density: 0.13931166872343315 },
              ],
              percentiles: { p75: 2853 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8966401295371742,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038051545000674654,
                },
                { start: "0.25", density: 0.06530832546215098 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46013053348467564 },
                { start: 200, end: 500, density: 0.3372587968217929 },
                { start: 500, density: 0.20261066969353148 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3802740469407132 },
                { start: 800, end: 1800, density: 0.43928910595577236 },
                { start: 1800, density: 0.1804368471035144 },
              ],
              percentiles: { p75: 1527 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2491,
        lcp: 2853,
        cls: "0.05",
        fid: 21,
      },
      timestamp: 1657146466514,
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
                { start: 0, end: 1800, density: 0.5291529152915275 },
                { start: 1800, end: 3000, density: 0.21302130213021242 },
                { start: 3000, density: 0.2578257825782599 },
              ],
              percentiles: { p75: 3054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407 },
                { start: 100, end: 300, density: 0.0467 },
                { start: 300, density: 0.01260000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5757272818154554 },
                { start: 2500, end: 4000, density: 0.21683494951514545 },
                { start: 4000, density: 0.20743776866939923 },
              ],
              percentiles: { p75: 3678 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7043 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11540000000000003,
                },
                { start: "0.25", density: 0.1802999999999999 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5931593159315931 },
                { start: 200, end: 500, density: 0.344934493449345 },
                { start: 500, density: 0.0619061906190619 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4458000000000002 },
                { start: 800, end: 1800, density: 0.3127000000000001 },
                { start: 1800, density: 0.24149999999999971 },
              ],
              percentiles: { p75: 1777 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3054,
        lcp: 3678,
        cls: "0.16",
        fid: 12,
      },
      timestamp: 1657146467236,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9513785947227987,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026386006522383636,
                },
                { start: "0.25", density: 0.022235398754817667 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.629090909090909 },
                { start: 200, end: 500, density: 0.2728787878787879 },
                { start: 500, density: 0.09803030303030302 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36234081261370515 },
                { start: 800, end: 1800, density: 0.3958459672528805 },
                { start: 1800, density: 0.24181322013341433 },
              ],
              percentiles: { p75: 1774 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6067924528301872 },
                { start: 1800, end: 3000, density: 0.21554716981132016 },
                { start: 3000, density: 0.17766037735849272 },
              ],
              percentiles: { p75: 2492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411324146195326 },
                { start: 100, end: 300, density: 0.029958058717795083 },
                { start: 300, density: 0.028909526662672314 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7038178265444149 },
                { start: 2500, end: 4000, density: 0.17713813317300436 },
                { start: 4000, density: 0.11904404028258075 },
              ],
              percentiles: { p75: 2732 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2492,
        lcp: 2732,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146467999,
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
                  density: 0.9541458136074665,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02989314216150413,
                },
                { start: "0.25", density: 0.015961044231029356 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5755151843817787 },
                { start: 200, end: 500, density: 0.3092462039045554 },
                { start: 500, density: 0.11523861171366594 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6791931472782536 },
                { start: 800, end: 1800, density: 0.28405636916275206 },
                { start: 1800, density: 0.036750483558994254 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8771619229197875 },
                { start: 1800, end: 3000, density: 0.09927822415906304 },
                { start: 3000, density: 0.023559852921149576 },
              ],
              percentiles: { p75: 1368 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9267435320584924 },
                { start: 100, end: 300, density: 0.036136107986501666 },
                { start: 300, density: 0.03712035995500584 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9216168237061312 },
                { start: 2500, end: 4000, density: 0.058992216304793094 },
                { start: 4000, density: 0.01939095998907569 },
              ],
              percentiles: { p75: 1727 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1368,
        lcp: 1727,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146468673,
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
                  density: 0.9448328460658446,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018558535655268844,
                },
                { start: "0.25", density: 0.03660861827888649 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5418502202643172 },
                { start: 200, end: 500, density: 0.38646375650780945 },
                { start: 500, density: 0.07168602322787346 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2904841402337234 },
                { start: 800, end: 1800, density: 0.4937716707332743 },
                { start: 1800, density: 0.2157441890330022 },
              ],
              percentiles: { p75: 1727 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4911493073370948 },
                { start: 1800, end: 3000, density: 0.3156747049769105 },
                { start: 3000, density: 0.19317598768599473 },
              ],
              percentiles: { p75: 2715 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746528245921531 },
                { start: 100, end: 300, density: 0.019684508561412968 },
                { start: 300, density: 0.005662666846433867 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.624069797279958 },
                { start: 2500, end: 4000, density: 0.2465999486784703 },
                { start: 4000, density: 0.12933025404157156 },
              ],
              percentiles: { p75: 2984 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2715,
        lcp: 2984,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146469331,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5002500250025002 },
                { start: 800, end: 1800, density: 0.37993799379937987 },
                { start: 1800, density: 0.11981198119811999 },
              ],
              percentiles: { p75: 1296 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7374999999999993 },
                { start: 1800, end: 3000, density: 0.15309999999999988 },
                { start: 3000, density: 0.10940000000000077 },
              ],
              percentiles: { p75: 1850 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9772977297729772 },
                { start: 100, end: 300, density: 0.0137013701370137 },
                { start: 300, density: 0.009000900090008984 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.787113865840247 },
                { start: 2500, end: 4000, density: 0.12921123662901113 },
                { start: 4000, density: 0.08367489753074198 },
              ],
              percentiles: { p75: 2285 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8025802580258027,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13411341134113414,
                },
                { start: "0.25", density: 0.06330633063306323 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.766846630673865 },
                { start: 200, end: 500, density: 0.18696260747850427 },
                { start: 500, density: 0.0461907618476306 },
              ],
              percentiles: { p75: 191 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1850,
        lcp: 2285,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1657146470098,
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
                  density: 0.9156915691569159,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049504950495049514,
                },
                { start: "0.25", density: 0.03480348034803478 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6460353964603535 },
                { start: 200, end: 500, density: 0.28407159284071576 },
                { start: 500, density: 0.06989301069893063 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4166833366673329 },
                { start: 800, end: 1800, density: 0.4720944188837762 },
                { start: 1800, density: 0.11122224444889105 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6035810743222955 },
                { start: 1800, end: 3000, density: 0.250275082524757 },
                { start: 3000, density: 0.14614384315294754 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9699000000000001 },
                { start: 100, end: 300, density: 0.0267 },
                { start: 300, density: 0.003400000000000001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6896189618961903 },
                { start: 2500, end: 4000, density: 0.18646864686468662 },
                { start: 4000, density: 0.12391239123912312 },
              ],
              percentiles: { p75: 2859 },
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
        lcp: 2859,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1657146470507,
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
                  density: 0.9379926431949553,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0394114555964267,
                },
                { start: "0.25", density: 0.022595901208617975 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4396652719665273 },
                { start: 200, end: 500, density: 0.4006694560669458 },
                { start: 500, density: 0.159665271966527 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.67289061123833 },
                { start: 800, end: 1800, density: 0.29910163818918445 },
                { start: 1800, density: 0.028007750572485487 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8623804463336878 },
                { start: 1800, end: 3000, density: 0.10839532412327313 },
                { start: 3000, density: 0.02922422954303907 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320871205625108 },
                { start: 100, end: 300, density: 0.04167381238209571 },
                { start: 300, density: 0.026239067055393552 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9059405940594059 },
                { start: 2500, end: 4000, density: 0.06612446958981612 },
                { start: 4000, density: 0.027934936350777918 },
              ],
              percentiles: { p75: 1880 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1439,
        lcp: 1880,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1657146470957,
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
                { start: "0.00", end: "0.10", density: 0.8581 },
                { start: "0.10", end: "0.25", density: 0.1117 },
                { start: "0.25", density: 0.030199999999999994 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7861 },
                { start: 200, end: 500, density: 0.16319999999999998 },
                { start: 500, density: 0.05069999999999991 },
              ],
              percentiles: { p75: 180 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.603481044313294 },
                { start: 800, end: 1800, density: 0.30049014704411325 },
                { start: 1800, density: 0.09602880864259289 },
              ],
              percentiles: { p75: 1137 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7625812906453222 },
                { start: 1800, end: 3000, density: 0.14917458729364677 },
                { start: 3000, density: 0.08824412206103109 },
              ],
              percentiles: { p75: 1759 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9761047790441912 },
                { start: 100, end: 300, density: 0.019096180763847233 },
                { start: 300, density: 0.004799040191961599 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7862931465732872 },
                { start: 2500, end: 4000, density: 0.13686843421710873 },
                { start: 4000, density: 0.07683841920960416 },
              ],
              percentiles: { p75: 2301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1759,
        lcp: 2301,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1657146471637,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5420803249097476 },
                { start: 200, end: 500, density: 0.285649819494585 },
                { start: 500, density: 0.17226985559566735 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4843295276471902 },
                { start: 800, end: 1800, density: 0.42735616745019006 },
                { start: 1800, density: 0.0883143049026198 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6812192943278248 },
                { start: 1800, end: 3000, density: 0.22956677087985708 },
                { start: 3000, density: 0.08921393479231812 },
              ],
              percentiles: { p75: 2024 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9144231870775572 },
                { start: 100, end: 300, density: 0.0442204147095887 },
                { start: 300, density: 0.04135639821285407 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7251256281407029 },
                { start: 2500, end: 4000, density: 0.18263539921831362 },
                { start: 4000, density: 0.0922389726409835 },
              ],
              percentiles: { p75: 2616 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7860320284697508,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16859430604982206,
                },
                { start: "0.25", density: 0.045373665480427025 },
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
        fcp: 2024,
        lcp: 2616,
        cls: "0.07",
        fid: 18,
      },
      timestamp: 1657146472156,
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
                  density: 0.8898114901256733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09515260323159785,
                },
                { start: "0.25", density: 0.015035906642728896 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4910011248593925 },
                { start: 200, end: 500, density: 0.38042744656917876 },
                { start: 500, density: 0.12857142857142873 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6007812499999998 },
                { start: 800, end: 1800, density: 0.3345982142857142 },
                { start: 1800, density: 0.06462053571428593 },
              ],
              percentiles: { p75: 1073 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7759280089988742 },
                { start: 1800, end: 3000, density: 0.15050618672665897 },
                { start: 3000, density: 0.07356580427446678 },
              ],
              percentiles: { p75: 1725 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9359018070235254 },
                { start: 100, end: 300, density: 0.038640754631208085 },
                { start: 300, density: 0.025457438345266457 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8384026134955503 },
                { start: 2500, end: 4000, density: 0.10662385941196355 },
                { start: 4000, density: 0.054973527092486055 },
              ],
              percentiles: { p75: 2083 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1725,
        lcp: 2083,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146472786,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7533753375337533 },
                { start: 800, end: 1800, density: 0.20792079207920786 },
                { start: 1800, density: 0.038703870387038736 },
              ],
              percentiles: { p75: 800 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8585282943411318 },
                { start: 1800, end: 3000, density: 0.10187962407518494 },
                { start: 3000, density: 0.03959208158368323 },
              ],
              percentiles: { p75: 1440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9676967696769678 },
                { start: 100, end: 300, density: 0.021702170217021702 },
                { start: 300, density: 0.010601060106010576 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8844231153769244 },
                { start: 2500, end: 4000, density: 0.08538292341531692 },
                { start: 4000, density: 0.030193961207758524 },
              ],
              percentiles: { p75: 1842 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9665033496650336,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024397560243975602,
                },
                { start: "0.25", density: 0.0090990900909909 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6048395160483954 },
                { start: 200, end: 500, density: 0.3344665533446657 },
                { start: 500, density: 0.06069393060693886 },
              ],
              percentiles: { p75: 276 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1440,
        lcp: 1842,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657146473469,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6877375475095019 },
                { start: 800, end: 1800, density: 0.24854970994198838 },
                { start: 1800, density: 0.06371274254850987 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.818781878187818 },
                { start: 1800, end: 3000, density: 0.10551055105510539 },
                { start: 3000, density: 0.07570757075707661 },
              ],
              percentiles: { p75: 1514 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616153538584564 },
                { start: 100, end: 300, density: 0.019192323070771688 },
                { start: 300, density: 0.019192323070771806 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8514202840568112 },
                { start: 2500, end: 4000, density: 0.09746949389877975 },
                { start: 4000, density: 0.05111022204440902 },
              ],
              percentiles: { p75: 1950 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9569000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03180000000000001,
                },
                { start: "0.25", density: 0.011299999999999994 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5746850629874026 },
                { start: 200, end: 500, density: 0.333133373325335 },
                { start: 500, density: 0.09218156368726231 },
              ],
              percentiles: { p75: 287 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1514,
        lcp: 1950,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1657146474028,
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
                  density: 0.9332066793320667,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03859614038596141,
                },
                { start: "0.25", density: 0.028197180281971827 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7156146844053217 },
                { start: 200, end: 500, density: 0.23367010103030914 },
                { start: 500, density: 0.050715214564369296 },
              ],
              percentiles: { p75: 220 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4136758972308305 },
                { start: 800, end: 1800, density: 0.44746576027191826 },
                { start: 1800, density: 0.13885834249725132 },
              ],
              percentiles: { p75: 1384 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6050605060506052 },
                { start: 1800, end: 3000, density: 0.24632463246324637 },
                { start: 3000, density: 0.14861486148614833 },
              ],
              percentiles: { p75: 2369 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9545954595459545 },
                { start: 100, end: 300, density: 0.03660366036603659 },
                { start: 300, density: 0.008800880088008795 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7053089382123565 },
                { start: 2500, end: 4000, density: 0.18151369726054767 },
                { start: 4000, density: 0.11317736452709581 },
              ],
              percentiles: { p75: 2772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2369,
        lcp: 2772,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146474496,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8362738179251942 },
                { start: 1800, end: 3000, density: 0.11279698894377796 },
                { start: 3000, density: 0.0509291931310279 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297162531164668 },
                { start: 100, end: 300, density: 0.037991214531639554 },
                { start: 300, density: 0.03229253235189361 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8836840249206533 },
                { start: 2500, end: 4000, density: 0.0783472434465734 },
                { start: 4000, density: 0.03796873163277332 },
              ],
              percentiles: { p75: 1854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.937917301159658,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036663933466088795,
                },
                { start: "0.25", density: 0.02541876537425324 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44060273332554606 },
                { start: 200, end: 500, density: 0.4105828758322624 },
                { start: 500, density: 0.1488143908421916 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.725540921919097 },
                { start: 800, end: 1800, density: 0.22706961429915334 },
                { start: 1800, density: 0.04738946378174969 },
              ],
              percentiles: { p75: 833 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1518,
        lcp: 1854,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146474943,
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
                { start: 0, end: 2500, density: 0.911776467059882 },
                { start: 2500, end: 4000, density: 0.05903229031290612 },
                { start: 4000, density: 0.029191242627211848 },
              ],
              percentiles: { p75: 1755 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8976204759048191,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08428314337132572,
                },
                { start: "0.25", density: 0.01809638072385524 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6806638672265546 },
                { start: 200, end: 500, density: 0.25914817036592686 },
                { start: 500, density: 0.06018796240751861 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6883311668833119 },
                { start: 800, end: 1800, density: 0.27467253274672543 },
                { start: 1800, density: 0.03699630036996281 },
              ],
              percentiles: { p75: 875 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8817999999999999 },
                { start: 1800, end: 3000, density: 0.08419999999999998 },
                { start: 3000, density: 0.03400000000000018 },
              ],
              percentiles: { p75: 1387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.976504699060188 },
                { start: 100, end: 300, density: 0.01859628074385123 },
                { start: 300, density: 0.00489902019596084 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1387,
        lcp: 1755,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1657146475629,
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
                { start: 0, end: 2500, density: 0.8099119823964787 },
                { start: 2500, end: 4000, density: 0.12537507501500295 },
                { start: 4000, density: 0.06471294258851842 },
              ],
              percentiles: { p75: 2214 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8839 },
                { start: "0.10", end: "0.25", density: 0.07 },
                { start: "0.25", density: 0.046100000000000016 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44282141070535364 },
                { start: 200, end: 500, density: 0.38149074537268707 },
                { start: 500, density: 0.1756878439219593 },
              ],
              percentiles: { p75: 401 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5494901019796039 },
                { start: 800, end: 1800, density: 0.36332733453309346 },
                { start: 1800, density: 0.0871825634873026 },
              ],
              percentiles: { p75: 1125 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7385999999999996 },
                { start: 1800, end: 3000, density: 0.1740999999999999 },
                { start: 3000, density: 0.08730000000000053 },
              ],
              percentiles: { p75: 1856 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.914717056588682 },
                { start: 100, end: 300, density: 0.05168966206758647 },
                { start: 300, density: 0.033593281343731504 },
              ],
              percentiles: { p75: 17 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1856,
        lcp: 2214,
        cls: "0.02",
        fid: 17,
      },
      timestamp: 1657146476154,
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
                { start: 0, end: 200, density: 0.5797136325351944 },
                { start: 200, end: 500, density: 0.36325351943207806 },
                { start: 500, density: 0.05703284803272761 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41044323011536116 },
                { start: 800, end: 1800, density: 0.4774741955069824 },
                { start: 1800, density: 0.11208257437765648 },
              ],
              percentiles: { p75: 1280 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6180904522613067 },
                { start: 1800, end: 3000, density: 0.2610614045838951 },
                { start: 3000, density: 0.12084814315479826 },
              ],
              percentiles: { p75: 2168 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9763373190685966 },
                { start: 100, end: 300, density: 0.021397105097545624 },
                { start: 300, density: 0.002265575833857772 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7470933790233755 },
                { start: 2500, end: 4000, density: 0.1684616326031086 },
                { start: 4000, density: 0.08444498837351593 },
              ],
              percentiles: { p75: 2514 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9578960214791311,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024896265560165977,
                },
                { start: "0.25", density: 0.017207712960702948 },
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
        fcp: 2168,
        lcp: 2514,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146476607,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5181481851814814 },
                { start: 200, end: 500, density: 0.29777022297770195 },
                { start: 500, density: 0.18408159184081668 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2975297529752977 },
                { start: 800, end: 1800, density: 0.4615461546154619 },
                { start: 1800, density: 0.24092409240924043 },
              ],
              percentiles: { p75: 1839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5260473952604737 },
                { start: 1800, end: 3000, density: 0.33446655334466535 },
                { start: 3000, density: 0.13948605139486095 },
              ],
              percentiles: { p75: 2481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9086817363472695 },
                { start: 100, end: 300, density: 0.043308661732346466 },
                { start: 300, density: 0.04800960192038413 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6711328867113292 },
                { start: 2500, end: 4000, density: 0.24687531246875333 },
                { start: 4000, density: 0.08199180081991746 },
              ],
              percentiles: { p75: 2891 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8457845784578458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07650765076507653,
                },
                { start: "0.25", density: 0.07770777077707769 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2481,
        lcp: 2891,
        cls: "0.05",
        fid: 15,
      },
      timestamp: 1657146477238,
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
                { start: 0, end: 1800, density: 0.842117456272443 },
                { start: 1800, end: 3000, density: 0.12185798679485696 },
                { start: 3000, density: 0.036024556932700035 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9567490494296579 },
                { start: 100, end: 300, density: 0.02946768060836502 },
                { start: 300, density: 0.013783269961977167 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8820218198700093 },
                { start: 2500, end: 4000, density: 0.08919452181987006 },
                { start: 4000, density: 0.02878365831012068 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9645464025026068,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02467848453249913,
                },
                { start: "0.25", density: 0.010775112964893982 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5247776365946636 },
                { start: 200, end: 500, density: 0.3579762042277927 },
                { start: 500, density: 0.11724615917754375 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6167933655839666 },
                { start: 800, end: 1800, density: 0.3389771941948859 },
                { start: 1800, density: 0.04422944022114743 },
              ],
              percentiles: { p75: 1011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1518,
        lcp: 1952,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146477803,
    },
    {
      url: "https://www.yara.ph/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ph" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6075177446765964 },
                { start: 1800, end: 3000, density: 0.23153054083774838 },
                { start: 3000, density: 0.16095171448565532 },
              ],
              percentiles: { p75: 2425 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6956195619561961 },
                { start: 2500, end: 4000, density: 0.1704670467046706 },
                { start: 4000, density: 0.13391339133913324 },
              ],
              percentiles: { p75: 2801 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8683000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07350000000000002,
                },
                { start: "0.25", density: 0.0582 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6012797440511898 },
                { start: 200, end: 500, density: 0.32453509298140365 },
                { start: 500, density: 0.07418516296740668 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3358328334333132 },
                { start: 800, end: 1800, density: 0.4662067586482702 },
                { start: 1800, density: 0.19796040791841668 },
              ],
              percentiles: { p75: 1625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2425, lcp: 2801, cls: "0.02" },
      timestamp: 1657146478533,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.ke" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8563283922462942,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09555302166476624,
                },
                { start: "0.25", density: 0.04811858608893962 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5155410142556671 },
                { start: 200, end: 500, density: 0.33430708109371354 },
                { start: 500, density: 0.15015190465061928 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28144401011726816 },
                { start: 800, end: 1800, density: 0.44182570705909374 },
                { start: 1800, density: 0.2767302828236381 },
              ],
              percentiles: { p75: 1919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47347965249199836 },
                { start: 1800, end: 3000, density: 0.27069044352994986 },
                { start: 3000, density: 0.2558299039780518 },
              ],
              percentiles: { p75: 3105 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9515428839610466 },
                { start: 100, end: 300, density: 0.03156165669365247 },
                { start: 300, density: 0.01689545934530093 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5540308747855905 },
                { start: 2500, end: 4000, density: 0.25397369925671764 },
                { start: 4000, density: 0.19199542595769187 },
              ],
              percentiles: { p75: 3528 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3105,
        lcp: 3528,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146479170,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5931593159315931 },
                { start: 200, end: 500, density: 0.344934493449345 },
                { start: 500, density: 0.0619061906190619 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4458000000000002 },
                { start: 800, end: 1800, density: 0.3127000000000001 },
                { start: 1800, density: 0.24149999999999971 },
              ],
              percentiles: { p75: 1777 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5291529152915275 },
                { start: 1800, end: 3000, density: 0.21302130213021242 },
                { start: 3000, density: 0.2578257825782599 },
              ],
              percentiles: { p75: 3054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407 },
                { start: 100, end: 300, density: 0.0467 },
                { start: 300, density: 0.01260000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5757272818154554 },
                { start: 2500, end: 4000, density: 0.21683494951514545 },
                { start: 4000, density: 0.20743776866939923 },
              ],
              percentiles: { p75: 3678 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7043 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11540000000000003,
                },
                { start: "0.25", density: 0.1802999999999999 },
              ],
              percentiles: { p75: "0.16" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3054,
        lcp: 3678,
        cls: "0.16",
        fid: 12,
      },
      timestamp: 1657146479969,
    },
    {
      url: "https://www.yara.ph/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ph" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8683000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07350000000000002,
                },
                { start: "0.25", density: 0.0582 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6012797440511898 },
                { start: 200, end: 500, density: 0.32453509298140365 },
                { start: 500, density: 0.07418516296740668 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3358328334333132 },
                { start: 800, end: 1800, density: 0.4662067586482702 },
                { start: 1800, density: 0.19796040791841668 },
              ],
              percentiles: { p75: 1570 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6075177446765964 },
                { start: 1800, end: 3000, density: 0.23153054083774838 },
                { start: 3000, density: 0.16095171448565532 },
              ],
              percentiles: { p75: 2334 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6956195619561961 },
                { start: 2500, end: 4000, density: 0.1704670467046706 },
                { start: 4000, density: 0.13391339133913324 },
              ],
              percentiles: { p75: 2720 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2334, lcp: 2720, cls: "0.05" },
      timestamp: 1657146480599,
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
                { start: 0, end: 100, density: 0.9464388779868406 },
                { start: 100, end: 300, density: 0.024241025049059214 },
                { start: 300, density: 0.029320096964100328 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8734184495054061 },
                { start: 2500, end: 4000, density: 0.09276512537382103 },
                { start: 4000, density: 0.033816425120772826 },
              ],
              percentiles: { p75: 1957 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9267453857617791,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06408345752608047,
                },
                { start: "0.25", density: 0.009171156712140324 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5497614178595773 },
                { start: 200, end: 500, density: 0.3503749147920927 },
                { start: 500, density: 0.0998636673483299 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5645861911294008 },
                { start: 800, end: 1800, density: 0.3894604481024233 },
                { start: 1800, density: 0.04595336076817594 },
              ],
              percentiles: { p75: 1028 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8413356361542891 },
                { start: 1800, end: 3000, density: 0.12055267702936098 },
                { start: 3000, density: 0.038111686816349986 },
              ],
              percentiles: { p75: 1535 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1535,
        lcp: 1957,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146481011,
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
                  density: 0.9357092941998602,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040531097134870714,
                },
                { start: "0.25", density: 0.023759608665269046 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8070685064149117 },
                { start: 200, end: 500, density: 0.15419995158557248 },
                { start: 500, density: 0.038731541999515874 },
              ],
              percentiles: { p75: 167 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5462727902146318 },
                { start: 800, end: 1800, density: 0.3371797830602355 },
                { start: 1800, density: 0.11654742672513269 },
              ],
              percentiles: { p75: 1255 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6596648572102901 },
                { start: 1800, end: 3000, density: 0.21878687750767045 },
                { start: 3000, density: 0.12154826528203945 },
              ],
              percentiles: { p75: 2195 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9767952336155534 },
                { start: 100, end: 300, density: 0.020696142991533394 },
                { start: 300, density: 0.0025086233929131384 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7542312276519662 },
                { start: 2500, end: 4000, density: 0.16591179976162088 },
                { start: 4000, density: 0.07985697258641282 },
              ],
              percentiles: { p75: 2495 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2195,
        lcp: 2495,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657146481744,
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
                { start: 0, end: 200, density: 0.6240248049609924 },
                { start: 200, end: 500, density: 0.2961592318463694 },
                { start: 500, density: 0.07981596319263821 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5802999999999999 },
                { start: 800, end: 1800, density: 0.3664999999999999 },
                { start: 1800, density: 0.05320000000000019 },
              ],
              percentiles: { p75: 1007 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8424999999999996 },
                { start: 1800, end: 3000, density: 0.12109999999999994 },
                { start: 3000, density: 0.03640000000000045 },
              ],
              percentiles: { p75: 1521 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540183926429427 },
                { start: 100, end: 300, density: 0.02528988404638145 },
                { start: 300, density: 0.020691723310675775 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8821617838216177 },
                { start: 2500, end: 4000, density: 0.08954104589541048 },
                { start: 4000, density: 0.02829717028297182 },
              ],
              percentiles: { p75: 1911 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9571042895710428,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026397360263973598,
                },
                { start: "0.25", density: 0.0164983501649835 },
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
        fcp: 1521,
        lcp: 1911,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146482427,
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
                  density: 0.9696620140731341,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014995962625446993,
                },
                { start: "0.25", density: 0.01534202330141884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5564261489884226 },
                { start: 200, end: 500, density: 0.3373874400654895 },
                { start: 500, density: 0.10618641094608793 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6613799490622826 },
                { start: 800, end: 1800, density: 0.26094003241491076 },
                { start: 1800, density: 0.07768001852280668 },
              ],
              percentiles: { p75: 928 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8164967562557924 },
                { start: 1800, end: 3000, density: 0.12303058387395745 },
                { start: 3000, density: 0.060472659870250085 },
              ],
              percentiles: { p75: 1547 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9309895833333334 },
                { start: 100, end: 300, density: 0.03480113636363637 },
                { start: 300, density: 0.03420928030303029 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.852532963219986 },
                { start: 2500, end: 4000, density: 0.10085588711542912 },
                { start: 4000, density: 0.04661114966458476 },
              ],
              percentiles: { p75: 1958 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1547,
        lcp: 1958,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146482921,
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
                { start: 0, end: 1800, density: 0.84998499849985 },
                { start: 1800, end: 3000, density: 0.11511151115111505 },
                { start: 3000, density: 0.034903490349035 },
              ],
              percentiles: { p75: 1495 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9526905381076214 },
                { start: 100, end: 300, density: 0.02130426085217043 },
                { start: 300, density: 0.02600520104020811 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8715999999999998 },
                { start: 2500, end: 4000, density: 0.09589999999999997 },
                { start: 4000, density: 0.03250000000000024 },
              ],
              percentiles: { p75: 1957 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.902990299029903,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08270827082708271,
                },
                { start: "0.25", density: 0.014301430143014309 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5984196839367871 },
                { start: 200, end: 500, density: 0.31226245249049817 },
                { start: 500, density: 0.08931786357271472 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5806419358064192 },
                { start: 800, end: 1800, density: 0.3745625437456253 },
                { start: 1800, density: 0.04479552044795549 },
              ],
              percentiles: { p75: 1011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1495,
        lcp: 1957,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657146483646,
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
                { start: 0, end: 2500, density: 0.7663551401869161 },
                { start: 2500, end: 4000, density: 0.1425502202169944 },
                { start: 4000, density: 0.09109463959608956 },
              ],
              percentiles: { p75: 2432 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8465245796294312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1030309521259505,
                },
                { start: "0.25", density: 0.05044446824461833 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6241341991341991 },
                { start: 200, end: 500, density: 0.28441558441558445 },
                { start: 500, density: 0.0914502164502165 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4616627180702126 },
                { start: 800, end: 1800, density: 0.40060305836743426 },
                { start: 1800, density: 0.13773422356235313 },
              ],
              percentiles: { p75: 1382 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.689017837954008 },
                { start: 1800, end: 3000, density: 0.19868901783795392 },
                { start: 3000, density: 0.11229314420803822 },
              ],
              percentiles: { p75: 2054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9601663383672575 },
                { start: 100, end: 300, density: 0.02385642372510396 },
                { start: 300, density: 0.015977237907638536 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2054,
        lcp: 2432,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1657146484248,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9429171248625413 },
                { start: 100, end: 300, density: 0.029791062681195638 },
                { start: 300, density: 0.027291812456263154 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9243924392439241 },
                { start: 2500, end: 4000, density: 0.05520552055205519 },
                { start: 4000, density: 0.020402040204020658 },
              ],
              percentiles: { p75: 1651 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8977 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07590000000000001,
                },
                { start: "0.25", density: 0.026400000000000017 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5167516751675163 },
                { start: 200, end: 500, density: 0.34793479347934764 },
                { start: 500, density: 0.13531353135313604 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8735 },
                { start: 800, end: 1800, density: 0.1134 },
                { start: 1800, density: 0.013100000000000061 },
              ],
              percentiles: { p75: 648 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.928864432216108 },
                { start: 1800, end: 3000, density: 0.053526763381690844 },
                { start: 3000, density: 0.017608804402201157 },
              ],
              percentiles: { p75: 1161 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1161,
        lcp: 1651,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1657146484981,
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
                { start: 0, end: 200, density: 0.4971502849715029 },
                { start: 200, end: 500, density: 0.3679632036796321 },
                { start: 500, density: 0.13488651134886506 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7443022790883647 },
                { start: 800, end: 1800, density: 0.21261495401839267 },
                { start: 1800, density: 0.04308276689324271 },
              ],
              percentiles: { p75: 808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8465846584658467 },
                { start: 1800, end: 3000, density: 0.10591059105910593 },
                { start: 3000, density: 0.047504750475047396 },
              ],
              percentiles: { p75: 1464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9381061893810619 },
                { start: 100, end: 300, density: 0.03369663033696631 },
                { start: 300, density: 0.028197180281971723 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8815381538153814 },
                { start: 2500, end: 4000, density: 0.0811581158115811 },
                { start: 4000, density: 0.037303730373037476 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9412 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03490000000000001,
                },
                { start: "0.25", density: 0.02390000000000001 },
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
        fcp: 1464,
        lcp: 1847,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146485462,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6841315868413159 },
                { start: 800, end: 1800, density: 0.27927207279272065 },
                { start: 1800, density: 0.03659634036596335 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8985999999999997 },
                { start: 1800, end: 3000, density: 0.07459999999999996 },
                { start: 3000, density: 0.026800000000000244 },
              ],
              percentiles: { p75: 1299 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568 },
                { start: 100, end: 300, density: 0.026199999999999998 },
                { start: 300, density: 0.01700000000000005 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9124262721183642 },
                { start: 2500, end: 4000, density: 0.06498050584824548 },
                { start: 4000, density: 0.022593222033390162 },
              ],
              percentiles: { p75: 1700 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8987101289871012,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07449255074492553,
                },
                { start: "0.25", density: 0.026797320267973216 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4715943188637726 },
                { start: 200, end: 500, density: 0.39087817563512695 },
                { start: 500, density: 0.13752750550110054 },
              ],
              percentiles: { p75: 355 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1299,
        lcp: 1700,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1657146485938,
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
                { start: 0, end: 100, density: 0.929296728093268 },
                { start: 100, end: 300, density: 0.036479879654005246 },
                { start: 300, density: 0.03422339225272662 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9199676133532634 },
                { start: 2500, end: 4000, density: 0.05810911808669656 },
                { start: 4000, density: 0.0219232685600401 },
              ],
              percentiles: { p75: 1687 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9036487322201608,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07012987012987015,
                },
                { start: "0.25", density: 0.026221397649969093 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.41587575496117385 },
                { start: 200, end: 500, density: 0.42314803401947526 },
                { start: 500, density: 0.16097621101935072 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8568553459119496 },
                { start: 800, end: 1800, density: 0.12779874213836476 },
                { start: 1800, density: 0.015345911949685617 },
              ],
              percentiles: { p75: 675 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9198898485417449 },
                { start: 1800, end: 3000, density: 0.06170985104518713 },
                { start: 3000, density: 0.018400300413067974 },
              ],
              percentiles: { p75: 1209 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1209,
        lcp: 1687,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657146486443,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8817473010795681 },
                { start: 2500, end: 4000, density: 0.0895641743302679 },
                { start: 4000, density: 0.028688524590163918 },
              ],
              percentiles: { p75: 1945 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9634999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026699999999999998,
                },
                { start: "0.25", density: 0.009799999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.582216443288658 },
                { start: 200, end: 500, density: 0.31496299259851984 },
                { start: 500, density: 0.10282056411282217 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6280884265279583 },
                { start: 800, end: 1800, density: 0.3298989696909072 },
                { start: 1800, density: 0.04201260378113457 },
              ],
              percentiles: { p75: 989 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8521704340868169 },
                { start: 1800, end: 3000, density: 0.11392278455691136 },
                { start: 3000, density: 0.03390678135627168 },
              ],
              percentiles: { p75: 1489 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636000000000001 },
                { start: 100, end: 300, density: 0.024800000000000006 },
                { start: 300, density: 0.011599999999999985 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1489,
        lcp: 1945,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657146487294,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583125062481255 },
                { start: 100, end: 300, density: 0.020793761871438565 },
                { start: 300, density: 0.020893731880436025 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7210221022102217 },
                { start: 2500, end: 4000, density: 0.17666766676667683 },
                { start: 4000, density: 0.10231023102310147 },
              ],
              percentiles: { p75: 2672 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8164632926585318,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13522704540908181,
                },
                { start: "0.25", density: 0.04830966193238648 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7170565886822636 },
                { start: 200, end: 500, density: 0.18796240751849635 },
                { start: 500, density: 0.09498100379923996 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48630000000000023 },
                { start: 800, end: 1800, density: 0.3889000000000002 },
                { start: 1800, density: 0.12479999999999959 },
              ],
              percentiles: { p75: 1373 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6572971891567462 },
                { start: 1800, end: 3000, density: 0.22406722016604946 },
                { start: 3000, density: 0.11863559067720425 },
              ],
              percentiles: { p75: 2224 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2224,
        lcp: 2672,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1657146487781,
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
                  density: 0.9377777777777778,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020067340067340067,
                },
                { start: "0.25", density: 0.04215488215488215 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5284139100932996 },
                { start: 200, end: 500, density: 0.38281029120723786 },
                { start: 500, density: 0.08877579869946256 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2825595317280824 },
                { start: 800, end: 1800, density: 0.5144339497139806 },
                { start: 1800, density: 0.20300651855793703 },
              ],
              percentiles: { p75: 1681 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48732890635587456 },
                { start: 1800, end: 3000, density: 0.3176582192709038 },
                { start: 3000, density: 0.19501287437322154 },
              ],
              percentiles: { p75: 2747 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649525998276356 },
                { start: 100, end: 300, density: 0.03002010916403333 },
                { start: 300, density: 0.005027291008330936 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6196494088870754 },
                { start: 2500, end: 4000, density: 0.2595461339855952 },
                { start: 4000, density: 0.12080445712732933 },
              ],
              percentiles: { p75: 3021 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2747,
        lcp: 3021,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146488266,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7587482503499301 },
                { start: 800, end: 1800, density: 0.23605278944211153 },
                { start: 1800, density: 0.005198960207958408 },
              ],
              percentiles: { p75: 803 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9330066993300671 },
                { start: 1800, end: 3000, density: 0.055194480551944806 },
                { start: 3000, density: 0.0117988201179882 },
              ],
              percentiles: { p75: 1249 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.948044804480448 },
                { start: 2500, end: 4000, density: 0.03835383538353836 },
                { start: 4000, density: 0.013601360136013605 },
              ],
              percentiles: { p75: 1617 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1249, lcp: 1617 },
      timestamp: 1657146489062,
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
                { start: "0.00", end: "0.10", density: 0.8774 },
                { start: "0.10", end: "0.25", density: 0.0908 },
                { start: "0.25", density: 0.03180000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5728572857285729 },
                { start: 200, end: 500, density: 0.30673067306730667 },
                { start: 500, density: 0.12041204120412041 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6171382861713827 },
                { start: 800, end: 1800, density: 0.3395660433956604 },
                { start: 1800, density: 0.043295670432956936 },
              ],
              percentiles: { p75: 1012 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7851644506648007 },
                { start: 1800, end: 3000, density: 0.1623512946116165 },
                { start: 3000, density: 0.05248425472358287 },
              ],
              percentiles: { p75: 1705 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.960976585951571 },
                { start: 100, end: 300, density: 0.02581548929357615 },
                { start: 300, density: 0.013207924754852968 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8306500000000003 },
                { start: 2500, end: 4000, density: 0.12265000000000001 },
                { start: 4000, density: 0.046699999999999735 },
              ],
              percentiles: { p75: 2167 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1705,
        lcp: 2167,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146489575,
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
                  density: 0.8321000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12329999999999999,
                },
                { start: "0.25", density: 0.044600000000000035 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49294929492949313 },
                { start: 200, end: 500, density: 0.34163416341634184 },
                { start: 500, density: 0.16541654165416514 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6022999999999994 },
                { start: 800, end: 1800, density: 0.2939999999999997 },
                { start: 1800, density: 0.10370000000000096 },
              ],
              percentiles: { p75: 1113 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7224722472247215 },
                { start: 1800, end: 3000, density: 0.1628162816281626 },
                { start: 3000, density: 0.11471147114711597 },
              ],
              percentiles: { p75: 1958 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382061793820617 },
                { start: 100, end: 300, density: 0.0397960203979602 },
                { start: 300, density: 0.021997800219977923 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7821999999999992 },
                { start: 2500, end: 4000, density: 0.1347999999999999 },
                { start: 4000, density: 0.08300000000000098 },
              ],
              percentiles: { p75: 2378 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1958,
        lcp: 2378,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1657146490058,
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
                { start: 0, end: 200, density: 0.5433 },
                { start: 200, end: 500, density: 0.34109999999999996 },
                { start: 500, density: 0.11560000000000017 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6216378362163782 },
                { start: 800, end: 1800, density: 0.31856814318568144 },
                { start: 1800, density: 0.059794020597940395 },
              ],
              percentiles: { p75: 1043 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7914417116576679 },
                { start: 1800, end: 3000, density: 0.1407718456308737 },
                { start: 3000, density: 0.06778644271145853 },
              ],
              percentiles: { p75: 1672 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9427114577084584 },
                { start: 100, end: 300, density: 0.03469306138772245 },
                { start: 300, density: 0.02259548090381919 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8462846284628464 },
                { start: 2500, end: 4000, density: 0.10271027102710271 },
                { start: 4000, density: 0.05100510051005097 },
              ],
              percentiles: { p75: 2049 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8461000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1285 },
                { start: "0.25", density: 0.025400000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1672,
        lcp: 2049,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1657146490551,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9432113577284543 },
                { start: 1800, end: 3000, density: 0.04289142171565687 },
                { start: 3000, density: 0.013897220555888818 },
              ],
              percentiles: { p75: 1141 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551044895510448 },
                { start: 100, end: 300, density: 0.018098190180981896 },
                { start: 300, density: 0.02679732026797329 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9486154153753874 },
                { start: 2500, end: 4000, density: 0.0373887833649905 },
                { start: 4000, density: 0.013995801259622128 },
              ],
              percentiles: { p75: 1537 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8741125887411259,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08759124087591243,
                },
                { start: "0.25", density: 0.038296170382961736 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7024404880976194 },
                { start: 200, end: 500, density: 0.2010402080416083 },
                { start: 500, density: 0.09651930386077234 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8494150584941508 },
                { start: 800, end: 1800, density: 0.13228677132286776 },
                { start: 1800, density: 0.018298170182981632 },
              ],
              percentiles: { p75: 677 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1141,
        lcp: 1537,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1657146491102,
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
                  density: 0.9500000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0346 },
                { start: "0.25", density: 0.015399999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6331633163316329 },
                { start: 200, end: 500, density: 0.27702770277027683 },
                { start: 500, density: 0.08980898089809024 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4927985597119428 },
                { start: 800, end: 1800, density: 0.35847169433886805 },
                { start: 1800, density: 0.1487297459491892 },
              ],
              percentiles: { p75: 1385 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.667533246675331 },
                { start: 1800, end: 3000, density: 0.19328067193280632 },
                { start: 3000, density: 0.13918608139186275 },
              ],
              percentiles: { p75: 2216 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9496000000000001 },
                { start: 100, end: 300, density: 0.03300000000000001 },
                { start: 300, density: 0.017399999999999905 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7527752775277529 },
                { start: 2500, end: 4000, density: 0.1637163716371638 },
                { start: 4000, density: 0.08350835083508341 },
              ],
              percentiles: { p75: 2514 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2216,
        lcp: 2514,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146491621,
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
                  density: 0.9477292202227935,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03586730321948831,
                },
                { start: "0.25", density: 0.016403476557718212 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.41933165648580684 },
                { start: 200, end: 500, density: 0.43382441010899525 },
                { start: 500, density: 0.14684393340519797 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6656475480004891 },
                { start: 800, end: 1800, density: 0.29534058945823655 },
                { start: 1800, density: 0.03901186254127431 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.893384161337924 },
                { start: 1800, end: 3000, density: 0.07820954254795866 },
                { start: 3000, density: 0.028406296114117397 },
              ],
              percentiles: { p75: 1330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521082135023153 },
                { start: 100, end: 300, density: 0.02875944430904217 },
                { start: 300, density: 0.019132342188642522 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9136469721164475 },
                { start: 2500, end: 4000, density: 0.06350571182901363 },
                { start: 4000, density: 0.022847316054538904 },
              ],
              percentiles: { p75: 1711 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1330,
        lcp: 1711,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657146492114,
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
                  density: 0.8404159584041596,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13988601139886012,
                },
                { start: "0.25", density: 0.019698030196980295 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7411258874112593 },
                { start: 200, end: 500, density: 0.18768123187681238 },
                { start: 500, density: 0.07119288071192839 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7366736673667368 },
                { start: 800, end: 1800, density: 0.22142214221422138 },
                { start: 1800, density: 0.041904190419041906 },
              ],
              percentiles: { p75: 842 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9023 },
                { start: 1800, end: 3000, density: 0.07130000000000003 },
                { start: 3000, density: 0.026400000000000035 },
              ],
              percentiles: { p75: 1243 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9814981498149815 },
                { start: 100, end: 300, density: 0.0087008700870087 },
                { start: 300, density: 0.00980098009800979 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9146755973208037 },
                { start: 2500, end: 4000, density: 0.06433070078976308 },
                { start: 4000, density: 0.020993701889433194 },
              ],
              percentiles: { p75: 1660 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1243, lcp: 1660, cls: "0.07", fid: 9 },
      timestamp: 1657146492867,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8735025380710659 },
                { start: 1800, end: 3000, density: 0.09522842639593908 },
                { start: 3000, density: 0.03126903553299491 },
              ],
              percentiles: { p75: 1355 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649579495394474 },
                { start: 100, end: 300, density: 0.015418502202643172 },
                { start: 300, density: 0.019623548257909466 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9026690748545053 },
                { start: 2500, end: 4000, density: 0.07104154124021675 },
                { start: 4000, density: 0.026289383905277956 },
              ],
              percentiles: { p75: 1701 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9396756329113923,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043908227848101264,
                },
                { start: "0.25", density: 0.01641613924050633 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.527635327635328 },
                { start: 200, end: 500, density: 0.33903133903133925 },
                { start: 500, density: 0.13333333333333267 },
              ],
              percentiles: { p75: 316 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6876423100807286 },
                { start: 800, end: 1800, density: 0.2541916787414614 },
                { start: 1800, density: 0.058166011177809986 },
              ],
              percentiles: { p75: 910 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1355,
        lcp: 1701,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146493470,
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
                { start: "0.00", end: "0.10", density: 0.8808 },
                { start: "0.10", end: "0.25", density: 0.0886 },
                { start: "0.25", density: 0.030599999999999992 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6409359064093594 },
                { start: 200, end: 500, density: 0.25707429257074305 },
                { start: 500, density: 0.10198980101989748 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7144857943177273 },
                { start: 800, end: 1800, density: 0.2535014005602241 },
                { start: 1800, density: 0.03201280512204859 },
              ],
              percentiles: { p75: 866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8928107189281071 },
                { start: 1800, end: 3000, density: 0.08529147085291469 },
                { start: 3000, density: 0.02189781021897816 },
              ],
              percentiles: { p75: 1289 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411294352823587 },
                { start: 100, end: 300, density: 0.028885557221389305 },
                { start: 300, density: 0.029985007496252044 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9205920592059206 },
                { start: 2500, end: 4000, density: 0.05900590059005901 },
                { start: 4000, density: 0.020402040204020477 },
              ],
              percentiles: { p75: 1692 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1289,
        lcp: 1692,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1657146494160,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8256348730253946 },
                { start: 1800, end: 3000, density: 0.11687662467506492 },
                { start: 3000, density: 0.05748850229954039 },
              ],
              percentiles: { p75: 1501 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412 },
                { start: 100, end: 300, density: 0.0298 },
                { start: 300, density: 0.02899999999999999 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8567499999999998 },
                { start: 2500, end: 4000, density: 0.09814999999999996 },
                { start: 4000, density: 0.045100000000000244 },
              ],
              percentiles: { p75: 1938 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9229922992299231,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060706070607060715,
                },
                { start: "0.25", density: 0.016301630163016306 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.613 },
                { start: 200, end: 500, density: 0.2936999999999999 },
                { start: 500, density: 0.09330000000000006 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6852629474105174 },
                { start: 800, end: 1800, density: 0.2431513697260547 },
                { start: 1800, density: 0.07158568286342788 },
              ],
              percentiles: { p75: 895 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1501,
        lcp: 1938,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146494655,
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
                  density: 0.8476152384761524,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10048995100489952,
                },
                { start: "0.25", density: 0.05189481051894812 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5560000000000003 },
                { start: 200, end: 500, density: 0.32240000000000013 },
                { start: 500, density: 0.12159999999999946 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7464507098580282 },
                { start: 800, end: 1800, density: 0.1845630873825234 },
                { start: 1800, density: 0.06898620275944849 },
              ],
              percentiles: { p75: 810 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8771122887711226 },
                { start: 1800, end: 3000, density: 0.08529147085291466 },
                { start: 3000, density: 0.03759624037596274 },
              ],
              percentiles: { p75: 1270 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657863145258102 },
                { start: 100, end: 300, density: 0.01680672268907563 },
                { start: 300, density: 0.01740696278511421 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8888333499950019 },
                { start: 2500, end: 4000, density: 0.08177546735979209 },
                { start: 4000, density: 0.029391182645206144 },
              ],
              percentiles: { p75: 1706 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1270,
        lcp: 1706,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1657146495097,
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
                  density: 0.9252207821997934,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024085330886569552,
                },
                { start: "0.25", density: 0.05069388691363689 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4652487215248721 },
                { start: 200, end: 500, density: 0.3671548117154811 },
                { start: 500, density: 0.16759646675964662 },
              ],
              percentiles: { p75: 378 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47389048991354443 },
                { start: 800, end: 1800, density: 0.4071469740634003 },
                { start: 1800, density: 0.11896253602305536 },
              ],
              percentiles: { p75: 1272 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.633625663512578 },
                { start: 1800, end: 3000, density: 0.2176321255481192 },
                { start: 3000, density: 0.14874221093930276 },
              ],
              percentiles: { p75: 2277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9492677211482132 },
                { start: 100, end: 300, density: 0.03608670181605156 },
                { start: 300, density: 0.014645577035735265 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7352364475201841 },
                { start: 2500, end: 4000, density: 0.15519031141868506 },
                { start: 4000, density: 0.10957324106113082 },
              ],
              percentiles: { p75: 2614 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2277,
        lcp: 2614,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657146495647,
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
                { start: 0, end: 800, density: 0.48167664670658716 },
                { start: 800, end: 1800, density: 0.39664670658682655 },
                { start: 1800, density: 0.12167664670658625 },
              ],
              percentiles: { p75: 1249 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6667867867867865 },
                { start: 1800, end: 3000, density: 0.211171171171171 },
                { start: 3000, density: 0.12204204204204244 },
              ],
              percentiles: { p75: 2114 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596527692871989 },
                { start: 100, end: 300, density: 0.03337816358968088 },
                { start: 300, density: 0.006969067123120182 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7699519230769222 },
                { start: 2500, end: 4000, density: 0.14723557692307673 },
                { start: 4000, density: 0.08281250000000108 },
              ],
              percentiles: { p75: 2427 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9551687134851555,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01752712531298438,
                },
                { start: "0.25", density: 0.02730416120186003 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5510523150932047 },
                { start: 200, end: 500, density: 0.3190619362597713 },
                { start: 500, density: 0.1298857486470241 },
              ],
              percentiles: { p75: 324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2114,
        lcp: 2427,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657146496340,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9028597140285971 },
                { start: 2500, end: 4000, density: 0.06754324567543246 },
                { start: 4000, density: 0.029597040295970337 },
              ],
              percentiles: { p75: 1806 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8242175782421758,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13868613138686134,
                },
                { start: "0.25", density: 0.03709629037096288 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6210378962103792 },
                { start: 200, end: 500, density: 0.27227277272272776 },
                { start: 500, density: 0.1066893310668931 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7073999999999999 },
                { start: 800, end: 1800, density: 0.2558 },
                { start: 1800, density: 0.03679999999999997 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8940105989401059 },
                { start: 1800, end: 3000, density: 0.07809219078092187 },
                { start: 3000, density: 0.027897210278972115 },
              ],
              percentiles: { p75: 1348 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9601999999999998 },
                { start: 100, end: 300, density: 0.0212 },
                { start: 300, density: 0.018600000000000082 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1348,
        lcp: 1806,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1657146497119,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6337267453490697 },
                { start: 200, end: 500, density: 0.31206241248249655 },
                { start: 500, density: 0.05421084216843366 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4239847969593918 },
                { start: 800, end: 1800, density: 0.4712942588517704 },
                { start: 1800, density: 0.10472094418883784 },
              ],
              percentiles: { p75: 1261 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6474294858971794 },
                { start: 1800, end: 3000, density: 0.2439487897579516 },
                { start: 3000, density: 0.10862172434486915 },
              ],
              percentiles: { p75: 2109 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9777022297770223 },
                { start: 100, end: 300, density: 0.0187981201879812 },
                { start: 300, density: 0.0034996500349965005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.73874774954991 },
                { start: 2500, end: 4000, density: 0.16653330666133226 },
                { start: 4000, density: 0.09471894378875782 },
              ],
              percentiles: { p75: 2595 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9279000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0519 },
                { start: "0.25", density: 0.020200000000000013 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2109,
        lcp: 2595,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657146497676,
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
                { start: 0, end: 2500, density: 0.5827917208279171 },
                { start: 2500, end: 4000, density: 0.2503249675032495 },
                { start: 4000, density: 0.16688331166883344 },
              ],
              percentiles: { p75: 3349 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7997799779977997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1162116211621162,
                },
                { start: "0.25", density: 0.08400840084008414 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5945 },
                { start: 200, end: 500, density: 0.2607 },
                { start: 500, density: 0.1448000000000001 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3031303130313053 },
                { start: 800, end: 1800, density: 0.34073407340734313 },
                { start: 1800, density: 0.35613561356135154 },
              ],
              percentiles: { p75: 2176 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49034903490348974 },
                { start: 1800, end: 3000, density: 0.2676267626762673 },
                { start: 3000, density: 0.24202420242024292 },
              ],
              percentiles: { p75: 2968 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.932093209320932 },
                { start: 100, end: 300, density: 0.033603360336033596 },
                { start: 300, density: 0.03430343034303451 },
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
        fcp: 2968,
        lcp: 3349,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1657146498249,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9660493827160495 },
                { start: 100, end: 300, density: 0.02266922094508302 },
                { start: 300, density: 0.011281396338867577 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8833351001802183 },
                { start: 2500, end: 4000, density: 0.08496766670200362 },
                { start: 4000, density: 0.031697233117778126 },
              ],
              percentiles: { p75: 1850 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9691312188395036,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0229129097273788,
                },
                { start: "0.25", density: 0.007955871433117647 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5883777239709448 },
                { start: 200, end: 500, density: 0.35014212022318153 },
                { start: 500, density: 0.0614801558058738 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.748043983928949 },
                { start: 800, end: 1800, density: 0.2123070416578558 },
                { start: 1800, density: 0.039648974413195225 },
              ],
              percentiles: { p75: 806 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8547840812870449 },
                { start: 1800, end: 3000, density: 0.10510160880609654 },
                { start: 3000, density: 0.040114309906858554 },
              ],
              percentiles: { p75: 1443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1443,
        lcp: 1850,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657146498763,
    },
  ],
};
