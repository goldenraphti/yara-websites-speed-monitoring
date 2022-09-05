export const audit12 = {
  date: "2022-04-07",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "07/04/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7857648725212462 },
                { start: 2500, end: 4000, density: 0.14246931067044383 },
                { start: 4000, density: 0.07176581680830997 },
              ],
              percentiles: { p75: 2327 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9503754106053497,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030971374941342097,
                },
                { start: "0.25", density: 0.018653214453308302 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7202697905573308 },
                { start: 1800, end: 3000, density: 0.18625014791148986 },
                { start: 3000, density: 0.0934800615311794 },
              ],
              percentiles: { p75: 1948 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506715506715506 },
                { start: 100, end: 300, density: 0.03333333333333333 },
                { start: 300, density: 0.01599511599511605 },
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
        fcp: 1948,
        lcp: 2327,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353486874,
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
                { start: 0, end: 2500, density: 0.6123530171856829 },
                { start: 2500, end: 4000, density: 0.2634707326527974 },
                { start: 4000, density: 0.12417625016151959 },
              ],
              percentiles: { p75: 3143 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9567332309267793,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020481310803891446,
                },
                { start: "0.25", density: 0.022785458269329224 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5056832859726162 },
                { start: 1800, end: 3000, density: 0.287393438388013 },
                { start: 3000, density: 0.20692327563937082 },
              ],
              percentiles: { p75: 2826 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9377526273241715 },
                { start: 100, end: 300, density: 0.036782538399353276 },
                { start: 300, density: 0.025464834276475248 },
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
        fcp: 2826,
        lcp: 3143,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353487046,
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
                  density: 0.9275291828793775,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048313878080415054,
                },
                { start: "0.25", density: 0.024156939040207517 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9148338018852322 },
                { start: 1800, end: 3000, density: 0.0673061021994377 },
                { start: 3000, density: 0.017860095915329978 },
              ],
              percentiles: { p75: 1294 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591836734693877 },
                { start: 100, end: 300, density: 0.018066242890598862 },
                { start: 300, density: 0.022750083640013467 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9188810034659184 },
                { start: 2500, end: 4000, density: 0.06560488529460308 },
                { start: 4000, density: 0.01551411123947863 },
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
        fcp: 1294,
        lcp: 1716,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353487154,
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
                  density: 0.9295499021526419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043586550435865505,
                },
                { start: "0.25", density: 0.026863547411492595 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.655806334182744 },
                { start: 1800, end: 3000, density: 0.2076811066618127 },
                { start: 3000, density: 0.13651255915544322 },
              ],
              percentiles: { p75: 2261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621749408983451 },
                { start: 100, end: 300, density: 0.027974783293932225 },
                { start: 300, density: 0.009850275807722624 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.713223290404498 },
                { start: 2500, end: 4000, density: 0.1781244331579901 },
                { start: 4000, density: 0.10865227643751196 },
              ],
              percentiles: { p75: 2732 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2261,
        lcp: 2732,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353487239,
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
                  density: 0.7740225977402259,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1506849315068493,
                },
                { start: "0.25", density: 0.07529247075292475 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8699869986998702 },
                { start: 1800, end: 3000, density: 0.09170917091709174 },
                { start: 3000, density: 0.03830383038303819 },
              ],
              percentiles: { p75: 1366 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662865146058423 },
                { start: 100, end: 300, density: 0.013705482192877148 },
                { start: 300, density: 0.020008003201280645 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8615084525357608 },
                { start: 2500, end: 4000, density: 0.1037811343403021 },
                { start: 4000, density: 0.03471041312393712 },
              ],
              percentiles: { p75: 2023 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1366,
        lcp: 2023,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649353487345,
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
                  density: 0.9424784455025094,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026380131257238447,
                },
                { start: "0.25", density: 0.031141423240252177 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47947882736156244 },
                { start: 1800, end: 3000, density: 0.35530944625407096 },
                { start: 3000, density: 0.16521172638436654 },
              ],
              percentiles: { p75: 2618 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9115250291036089 },
                { start: 100, end: 300, density: 0.04126244987711811 },
                { start: 300, density: 0.04721252101927294 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5877238515442511 },
                { start: 2500, end: 4000, density: 0.2945756553335065 },
                { start: 4000, density: 0.11770049312224233 },
              ],
              percentiles: { p75: 3129 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2618,
        lcp: 3129,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353487386,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8615084525357608 },
                { start: 2500, end: 4000, density: 0.1037811343403021 },
                { start: 4000, density: 0.03471041312393712 },
              ],
              percentiles: { p75: 2023 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7740225977402259,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1506849315068493,
                },
                { start: "0.25", density: 0.07529247075292475 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8699869986998702 },
                { start: 1800, end: 3000, density: 0.09170917091709174 },
                { start: 3000, density: 0.03830383038303819 },
              ],
              percentiles: { p75: 1366 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662865146058423 },
                { start: 100, end: 300, density: 0.013705482192877148 },
                { start: 300, density: 0.020008003201280645 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1366,
        lcp: 2023,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649353487468,
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
                  density: 0.9697466280095802,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01676541031135762,
                },
                { start: "0.25", density: 0.013487961679062138 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8061946902654863 },
                { start: 1800, end: 3000, density: 0.14108723135271806 },
                { start: 3000, density: 0.05271807838179567 },
              ],
              percentiles: { p75: 1642 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635990771597026 },
                { start: 100, end: 300, density: 0.023455524224557805 },
                { start: 300, density: 0.012945398615739604 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8545569620253164 },
                { start: 2500, end: 4000, density: 0.10860759493670882 },
                { start: 4000, density: 0.0368354430379747 },
              ],
              percentiles: { p75: 2025 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1642,
        lcp: 2025,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649353487508,
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
                  density: 0.9242304656669297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04538279400157853,
                },
                { start: "0.25", density: 0.03038674033149169 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5258044930176078 },
                { start: 1800, end: 3000, density: 0.3272616879174257 },
                { start: 3000, density: 0.14693381906496658 },
              ],
              percentiles: { p75: 2606 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797887000459348 },
                { start: 100, end: 300, density: 0.02021129995406523 },
                { start: 300 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6689040272490482 },
                { start: 2500, end: 4000, density: 0.23993187737928273 },
                { start: 4000, density: 0.09116409537166904 },
              ],
              percentiles: { p75: 2862 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2606,
        lcp: 2862,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649353487579,
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
                { start: 0, end: 1800, density: 0.708359287405008 },
                { start: 1800, end: 3000, density: 0.21739130434782605 },
                { start: 3000, density: 0.0742494082471659 },
              ],
              percentiles: { p75: 1957 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9666408068269975 },
                { start: 100, end: 300, density: 0.023273855702094642 },
                { start: 300, density: 0.010085337470907667 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7400349868799193 },
                { start: 2500, end: 4000, density: 0.17637136073972237 },
                { start: 4000, density: 0.08359365238035822 },
              ],
              percentiles: { p75: 2531 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7790178571428571,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1830357142857143,
                },
                { start: "0.25", density: 0.037946428571428534 },
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
        fcp: 1957,
        lcp: 2531,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649353487634,
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
                { start: "0.00", end: "0.10", density: 0.93930799773114 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05558706749858196,
                },
                { start: "0.25", density: 0.005104934770277933 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8026480995320167 },
                { start: 1800, end: 3000, density: 0.15329300308183988 },
                { start: 3000, density: 0.044058897386143436 },
              ],
              percentiles: { p75: 1669 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554868978143952 },
                { start: 100, end: 300, density: 0.01705000572147843 },
                { start: 300, density: 0.027463096464126396 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8206015891032918 },
                { start: 2500, end: 4000, density: 0.13785471055618617 },
                { start: 4000, density: 0.04154370034052205 },
              ],
              percentiles: { p75: 2165 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1669,
        lcp: 2165,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649353487700,
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
                  density: 0.8209820982098209,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1269126912691269,
                },
                { start: "0.25", density: 0.052105210521052124 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6578657865786574 },
                { start: 1800, end: 3000, density: 0.19671967196719664 },
                { start: 3000, density: 0.14541454145414598 },
              ],
              percentiles: { p75: 2320 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9775 },
                { start: 100, end: 300, density: 0.0193 },
                { start: 300, density: 0.0031999999999999997 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6841684168416842 },
                { start: 2500, end: 4000, density: 0.17841784178417852 },
                { start: 4000, density: 0.13741374137413742 },
              ],
              percentiles: { p75: 2997 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 2320, lcp: 2997, cls: "0.06", fid: 9 },
      timestamp: 1649353487775,
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
                  density: 0.8484744990892532,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10644353369763206,
                },
                { start: "0.25", density: 0.04508196721311477 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4406992687385803 },
                { start: 1800, end: 3000, density: 0.25868372943327606 },
                { start: 3000, density: 0.3006170018281436 },
              ],
              percentiles: { p75: 3412 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.892941733775462 },
                { start: 100, end: 300, density: 0.06738512553292281 },
                { start: 300, density: 0.03967314069161522 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46704115556574577 },
                { start: 2500, end: 4000, density: 0.2536971225495816 },
                { start: 4000, density: 0.2792617218846726 },
              ],
              percentiles: { p75: 4348 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3412,
        lcp: 4348,
        cls: "0.04",
        fid: 19,
      },
      timestamp: 1649353487835,
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
                { start: 0, end: 2500, density: 0.6019999999999995 },
                { start: 2500, end: 4000, density: 0.23659999999999967 },
                { start: 4000, density: 0.16140000000000074 },
              ],
              percentiles: { p75: 3234 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9033 },
                { start: "0.10", end: "0.25", density: 0.0661 },
                { start: "0.25", density: 0.030600000000000006 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5079507950795076 },
                { start: 1800, end: 3000, density: 0.2759275927592757 },
                { start: 3000, density: 0.21612161216121664 },
              ],
              percentiles: { p75: 2815 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9576000000000001 },
                { start: 100, end: 300, density: 0.030300000000000007 },
                { start: 300, density: 0.012099999999999942 },
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
        fcp: 2815,
        lcp: 3234,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649353487904,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6881001580162871 },
                { start: 2500, end: 4000, density: 0.178193752279081 },
                { start: 4000, density: 0.13370608970463202 },
              ],
              percentiles: { p75: 2874 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9402587979199419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023219252630305963,
                },
                { start: "0.25", density: 0.036521949449752095 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5811205846528628 },
                { start: 1800, end: 3000, density: 0.251766138855055 },
                { start: 3000, density: 0.16711327649208219 },
              ],
              percentiles: { p75: 2476 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554696270425345 },
                { start: 100, end: 300, density: 0.03068479481102657 },
                { start: 300, density: 0.01384557814643893 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2476,
        lcp: 2874,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353487967,
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
                { start: 0, end: 1800, density: 0.9390121975604879 },
                { start: 1800, end: 3000, density: 0.046690661867626465 },
                { start: 3000, density: 0.01429714057188557 },
              ],
              percentiles: { p75: 1092 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9749974997499751 },
                { start: 100, end: 300, density: 0.014001400140014001 },
                { start: 300, density: 0.011001100110010957 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9353129374125175 },
                { start: 2500, end: 4000, density: 0.05118976204759046 },
                { start: 4000, density: 0.013497300539891961 },
              ],
              percentiles: { p75: 1527 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7727999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17689999999999997,
                },
                { start: "0.25", density: 0.05030000000000001 },
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
        fcp: 1092,
        lcp: 1527,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649353488033,
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
                { start: 0, end: 2500, density: 0.6912141393442626 },
                { start: 2500, end: 4000, density: 0.17315573770491807 },
                { start: 4000, density: 0.13563012295081942 },
              ],
              percentiles: { p75: 2901 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9610717896865522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017694641051567244,
                },
                { start: "0.25", density: 0.021233569261880678 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5531425651507391 },
                { start: 1800, end: 3000, density: 0.271972406745017 },
                { start: 3000, density: 0.174885028104244 },
              ],
              percentiles: { p75: 2470 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9473262032085561 },
                { start: 100, end: 300, density: 0.04545454545454545 },
                { start: 300, density: 0.007219251336898375 },
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
        fcp: 2470,
        lcp: 2901,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353488075,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9713028697130286 },
                { start: 100, end: 300, density: 0.018598140185981396 },
                { start: 300, density: 0.010098990100989937 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8585424372688197 },
                { start: 2500, end: 4000, density: 0.10816754973507946 },
                { start: 4000, density: 0.03329001299610072 },
              ],
              percentiles: { p75: 2015 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9424 },
                { start: "0.10", end: "0.25", density: 0.042 },
                { start: "0.25", density: 0.015599999999999994 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.834233153369326 },
                { start: 1800, end: 3000, density: 0.12177564487102577 },
                { start: 3000, density: 0.04399120175964836 },
              ],
              percentiles: { p75: 1565 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1565,
        lcp: 2015,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353488138,
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
                  density: 0.8850367160226316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09690622366678703,
                },
                { start: "0.25", density: 0.018057060310581432 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7624728850325376 },
                { start: 1800, end: 3000, density: 0.17437936852253544 },
                { start: 3000, density: 0.06314774644492695 },
              ],
              percentiles: { p75: 1757 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582621430314863 },
                { start: 100, end: 300, density: 0.026482792287039293 },
                { start: 300, density: 0.0152550646814744 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7974080771549122 },
                { start: 2500, end: 4000, density: 0.14689572031344178 },
                { start: 4000, density: 0.05569620253164585 },
              ],
              percentiles: { p75: 2272 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1757,
        lcp: 2272,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353488182,
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
                { start: 0, end: 1800, density: 0.8764 },
                { start: 1800, end: 3000, density: 0.09339999999999997 },
                { start: 3000, density: 0.030200000000000074 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9679903971191358 },
                { start: 100, end: 300, density: 0.014504351305391619 },
                { start: 300, density: 0.01750525157547265 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8891499999999999 },
                { start: 2500, end: 4000, density: 0.08554999999999995 },
                { start: 4000, density: 0.025300000000000135 },
              ],
              percentiles: { p75: 1843 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8135 },
                { start: "0.10", end: "0.25", density: 0.159 },
                { start: "0.25", density: 0.02750000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1341, lcp: 1843, cls: "0.08", fid: 9 },
      timestamp: 1649353488244,
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
                  density: 0.870861382057975,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09946421211704906,
                },
                { start: "0.25", density: 0.029674405824975953 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8894751457928354 },
                { start: 1800, end: 3000, density: 0.08372674257150793 },
                { start: 3000, density: 0.026798111635656614 },
              ],
              percentiles: { p75: 1351 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9256879452437489 },
                { start: 100, end: 300, density: 0.03939097639335101 },
                { start: 300, density: 0.03492107836290009 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8541349217343123 },
                { start: 2500, end: 4000, density: 0.11857598005263884 },
                { start: 4000, density: 0.02728909821304901 },
              ],
              percentiles: { p75: 2049 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1351,
        lcp: 2049,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1649353488288,
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
                  density: 0.9367970660146699,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02579462102689487,
                },
                { start: "0.25", density: 0.0374083129584352 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5596307692307683 },
                { start: 1800, end: 3000, density: 0.24319999999999958 },
                { start: 3000, density: 0.1971692307692321 },
              ],
              percentiles: { p75: 2627 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9398920818170408 },
                { start: 100, end: 300, density: 0.036641987702346585 },
                { start: 300, density: 0.02346593048061252 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6651466600936654 },
                { start: 2500, end: 4000, density: 0.1869608084791719 },
                { start: 4000, density: 0.1478925314271626 },
              ],
              percentiles: { p75: 3052 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2627,
        lcp: 3052,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649353488351,
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
                  density: 0.7487251274872512,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2132786721327867,
                },
                { start: "0.25", density: 0.03799620037996203 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7733546709341864 },
                { start: 1800, end: 3000, density: 0.16613322664532895 },
                { start: 3000, density: 0.06051210242048465 },
              ],
              percentiles: { p75: 1742 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527047295270473 },
                { start: 100, end: 300, density: 0.024497550244975505 },
                { start: 300, density: 0.022797720227977193 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8036214485794314 },
                { start: 2500, end: 4000, density: 0.1442577030812324 },
                { start: 4000, density: 0.05212084833933625 },
              ],
              percentiles: { p75: 2266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1742,
        lcp: 2266,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1649353488417,
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
                { start: 0, end: 100, density: 0.9528905781156232 },
                { start: 100, end: 300, density: 0.027805561112222446 },
                { start: 300, density: 0.01930386077215436 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6597499999999996 },
                { start: 2500, end: 4000, density: 0.23115 },
                { start: 4000, density: 0.10910000000000035 },
              ],
              percentiles: { p75: 2967 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9187837567513502,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06131226245249049,
                },
                { start: "0.25", density: 0.019903980796159227 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5699569956995697 },
                { start: 1800, end: 3000, density: 0.2578257825782578 },
                { start: 3000, density: 0.17221722172217252 },
              ],
              percentiles: { p75: 2624 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2624,
        lcp: 2967,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1649353488469,
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
                  density: 0.9046182104434531,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05431645237470481,
                },
                { start: "0.25", density: 0.04106533718184206 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8302583025830254 },
                { start: 1800, end: 3000, density: 0.11584080126515546 },
                { start: 3000, density: 0.053900896151819186 },
              ],
              percentiles: { p75: 1505 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.943261473350086 },
                { start: 100, end: 300, density: 0.02909668033328925 },
                { start: 300, density: 0.027641846316624665 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8554415054612448 },
                { start: 2500, end: 4000, density: 0.10139492038426107 },
                { start: 4000, density: 0.043163574154494254 },
              ],
              percentiles: { p75: 1904 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1505,
        lcp: 1904,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649353488516,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4722030386740329 },
                { start: 2500, end: 4000, density: 0.3295925414364638 },
                { start: 4000, density: 0.1982044198895032 },
              ],
              percentiles: { p75: 3737 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9524680073126143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01336837294332724,
                },
                { start: "0.25", density: 0.034163619744058495 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3481216870246621 },
                { start: 1800, end: 3000, density: 0.3280709840977204 },
                { start: 3000, density: 0.32380732887761743 },
              ],
              percentiles: { p75: 3390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695580629995297 },
                { start: 100, end: 300, density: 0.02856135401974611 },
                { start: 300, density: 0.0018805829807240241 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3390,
        lcp: 3737,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649353488583,
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
                { start: "0.00", end: "0.10", density: 0.7931 },
                { start: "0.10", end: "0.25", density: 0.1587 },
                { start: "0.25", density: 0.04819999999999997 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.898520295940812 },
                { start: 1800, end: 3000, density: 0.07728454309138172 },
                { start: 3000, density: 0.0241951609678063 },
              ],
              percentiles: { p75: 1308 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9394242303078767 },
                { start: 100, end: 300, density: 0.0312874850059976 },
                { start: 300, density: 0.02928828468612561 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8557144285571442 },
                { start: 2500, end: 4000, density: 0.11578842115788421 },
                { start: 4000, density: 0.028497150284971594 },
              ],
              percentiles: { p75: 2030 },
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
        lcp: 2030,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649353488670,
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
                  density: 0.9631277813095994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023363000635727906,
                },
                { start: "0.25", density: 0.013509218054672612 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5510368108021224 },
                { start: 1800, end: 3000, density: 0.248513100787655 },
                { start: 3000, density: 0.2004500884102226 },
              ],
              percentiles: { p75: 2773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649525057320668 },
                { start: 100, end: 300, density: 0.029806747461513263 },
                { start: 300, density: 0.005240746806419914 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6203074433656953 },
                { start: 2500, end: 4000, density: 0.22030744336569566 },
                { start: 4000, density: 0.15938511326860907 },
              ],
              percentiles: { p75: 3226 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2773,
        lcp: 3226,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353488723,
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
                { start: 0, end: 100, density: 0.9551815766164746 },
                { start: 100, end: 300, density: 0.027989371124889282 },
                { start: 300, density: 0.016829052258635957 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6196935000880748 },
                { start: 2500, end: 4000, density: 0.23868240267747062 },
                { start: 4000, density: 0.14162409723445457 },
              ],
              percentiles: { p75: 3135 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9551670417171542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02267612947896832,
                },
                { start: "0.25", density: 0.022156828803877447 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5248101712873039 },
                { start: 1800, end: 3000, density: 0.26946847960445014 },
                { start: 3000, density: 0.20572134910824583 },
              ],
              percentiles: { p75: 2763 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2763,
        lcp: 3135,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353488801,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5615876824635069 },
                { start: 1800, end: 3000, density: 0.18316336732653452 },
                { start: 3000, density: 0.2552489502099586 },
              ],
              percentiles: { p75: 3068 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6093718743748752 },
                { start: 2500, end: 4000, density: 0.18708741748349672 },
                { start: 4000, density: 0.20354070814162817 },
              ],
              percentiles: { p75: 3447 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6807361472294459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1568313662732546,
                },
                { start: "0.25", density: 0.16243248649729952 },
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
      extractedResults: { fcp: 3068, lcp: 3447, cls: "0.16" },
      timestamp: 1649353488881,
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
                { start: "0.00", end: "0.10", density: 0.7609 },
                { start: "0.10", end: "0.25", density: 0.1666 },
                { start: "0.25", density: 0.07249999999999997 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7187281271872815 },
                { start: 1800, end: 3000, density: 0.17368263173682635 },
                { start: 3000, density: 0.10758924107589213 },
              ],
              percentiles: { p75: 2022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9733053389322136 },
                { start: 100, end: 300, density: 0.015896820635872826 },
                { start: 300, density: 0.010797840431913612 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.71555 },
                { start: 2500, end: 4000, density: 0.17315 },
                { start: 4000, density: 0.11129999999999998 },
              ],
              percentiles: { p75: 2796 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2022,
        lcp: 2796,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649353488930,
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
                { start: "0.00", end: "0.10", density: 0.9141 },
                { start: "0.10", end: "0.25", density: 0.049 },
                { start: "0.25", density: 0.036899999999999995 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8499300139972 },
                { start: 1800, end: 3000, density: 0.10127974405118967 },
                { start: 3000, density: 0.04879024195161023 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9563043695630437 },
                { start: 100, end: 300, density: 0.022597740225977405 },
                { start: 300, density: 0.02109789021097881 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8628999999999994 },
                { start: 2500, end: 4000, density: 0.09629999999999998 },
                { start: 4000, density: 0.04080000000000049 },
              ],
              percentiles: { p75: 1866 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1420,
        lcp: 1866,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649353488983,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21330000000000032 },
                { start: 2500, end: 4000, density: 0.4298000000000009 },
                { start: 4000, density: 0.3568999999999987 },
              ],
              percentiles: { p75: 5079 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.866086608660866,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0643064306430643,
                },
                { start: "0.25", density: 0.06960696069606963 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07778444311137778 },
                { start: 1800, end: 3000, density: 0.460907818436313 },
                { start: 3000, density: 0.46130773845230916 },
              ],
              percentiles: { p75: 4458 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4458, lcp: 5079, cls: "0.05" },
      timestamp: 1649353489034,
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
                  density: 0.8235999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1377 },
                { start: "0.25", density: 0.038700000000000026 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.929328268692523 },
                { start: 1800, end: 3000, density: 0.05707716913234708 },
                { start: 3000, density: 0.013594562175130005 },
              ],
              percentiles: { p75: 1215 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696182290625625 },
                { start: 100, end: 300, density: 0.013891665000999401 },
                { start: 300, density: 0.016490105936438203 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9161499999999998 },
                { start: 2500, end: 4000, density: 0.06835 },
                { start: 4000, density: 0.01550000000000009 },
              ],
              percentiles: { p75: 1702 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1215,
        lcp: 1702,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1649353489081,
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
                { start: "0.00", end: "0.10", density: 0.7167 },
                { start: "0.10", end: "0.25", density: 0.2124 },
                { start: "0.25", density: 0.07089999999999999 },
              ],
              percentiles: { p75: "0.11" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6249 },
                { start: 1800, end: 3000, density: 0.27369999999999994 },
                { start: 3000, density: 0.10139999999999995 },
              ],
              percentiles: { p75: 2286 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9885011498850116 },
                { start: 100, end: 300, density: 0.011498850114988501 },
                { start: 300 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7387499999999999 },
                { start: 2500, end: 4000, density: 0.1767499999999999 },
                { start: 4000, density: 0.08450000000000027 },
              ],
              percentiles: { p75: 2587 },
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
        lcp: 2587,
        cls: "0.11",
        fid: 10,
      },
      timestamp: 1649353489140,
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
                  density: 0.9574702108157653,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030064161319890016,
                },
                { start: "0.25", density: 0.01246562786434463 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8232342007434947 },
                { start: 1800, end: 3000, density: 0.13382899628252795 },
                { start: 3000, density: 0.042936802973977485 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347110460863205 },
                { start: 100, end: 300, density: 0.03767373811265546 },
                { start: 300, density: 0.02761521580102422 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8243016759776537 },
                { start: 2500, end: 4000, density: 0.13063314711359403 },
                { start: 4000, density: 0.0450651769087523 },
              ],
              percentiles: { p75: 2238 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2238,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649353489203,
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
                  density: 0.8949000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08220000000000001,
                },
                { start: "0.25", density: 0.0229 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7391260873912607 },
                { start: 1800, end: 3000, density: 0.1721827817218278 },
                { start: 3000, density: 0.08869113088691151 },
              ],
              percentiles: { p75: 1872 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589835934373749 },
                { start: 100, end: 300, density: 0.02791116446578631 },
                { start: 300, density: 0.01310524209683878 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7887000000000002 },
                { start: 2500, end: 4000, density: 0.14090000000000008 },
                { start: 4000, density: 0.07039999999999971 },
              ],
              percentiles: { p75: 2315 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1872,
        lcp: 2315,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649353489299,
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
                { start: 0, end: 2500, density: 0.7923415316936608 },
                { start: 2500, end: 4000, density: 0.14737052589482091 },
                { start: 4000, density: 0.06028794241151836 },
              ],
              percentiles: { p75: 2292 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8951895189518951,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08700870087008701,
                },
                { start: "0.25", density: 0.01780178017801781 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7758999999999998 },
                { start: 1800, end: 3000, density: 0.1641 },
                { start: 3000, density: 0.06000000000000007 },
              ],
              percentiles: { p75: 1719 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630184907546226 },
                { start: 100, end: 300, density: 0.023688155922038975 },
                { start: 300, density: 0.013293353323338456 },
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
        fcp: 1719,
        lcp: 2292,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649353489366,
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
                  density: 0.9781222652831604,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.008876109513689211,
                },
                { start: "0.25", density: 0.013001625203150402 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8097989949748738 },
                { start: 1800, end: 3000, density: 0.12638190954773862 },
                { start: 3000, density: 0.06381909547738758 },
              ],
              percentiles: { p75: 1571 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9498298247825538 },
                { start: 100, end: 300, density: 0.030253371990419765 },
                { start: 300, density: 0.019916803227026336 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8410408266129027 },
                { start: 2500, end: 4000, density: 0.10716985887096762 },
                { start: 4000, density: 0.05178931451612963 },
              ],
              percentiles: { p75: 1997 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1571,
        lcp: 1997,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353489447,
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
                { start: "0.00", end: "0.10", density: 0.8239 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13070000000000004,
                },
                { start: "0.25", density: 0.04539999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7121575684863021 },
                { start: 1800, end: 3000, density: 0.17396520695860815 },
                { start: 3000, density: 0.1138772245550898 },
              ],
              percentiles: { p75: 2000 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9339801940582173 },
                { start: 100, end: 300, density: 0.0383114934480344 },
                { start: 300, density: 0.027708312493748284 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7626999999999993 },
                { start: 2500, end: 4000, density: 0.14889999999999992 },
                { start: 4000, density: 0.08840000000000087 },
              ],
              percentiles: { p75: 2481 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2000,
        lcp: 2481,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1649353489525,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7626679236389344 },
                { start: 1800, end: 3000, density: 0.14671223191138338 },
                { start: 3000, density: 0.09061984444968212 },
              ],
              percentiles: { p75: 1756 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9711515151515152 },
                { start: 100, end: 300, density: 0.023272727272727275 },
                { start: 300, density: 0.005575757575757575 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8180322087692486 },
                { start: 2500, end: 4000, density: 0.1094392852944633 },
                { start: 4000, density: 0.07252850593628797 },
              ],
              percentiles: { p75: 2135 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8344859922635095,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11124135505802368,
                },
                { start: "0.25", density: 0.054272652678466836 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1756,
        lcp: 2135,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1649353489580,
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
                  density: 0.9148629148629149,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026839826839826837,
                },
                { start: "0.25", density: 0.058297258297258306 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5391139055417449 },
                { start: 1800, end: 3000, density: 0.2700687234975868 },
                { start: 3000, density: 0.1908173709606683 },
              ],
              percentiles: { p75: 2661 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8798570790531494 },
                { start: 100, end: 300, density: 0.04704481167187737 },
                { start: 300, density: 0.07309810927497327 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6221895664952235 },
                { start: 2500, end: 4000, density: 0.21175606171932387 },
                { start: 4000, density: 0.16605437178545274 },
              ],
              percentiles: { p75: 3263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2661,
        lcp: 3263,
        cls: "0.00",
        fid: 19,
      },
      timestamp: 1649353489654,
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
                  density: 0.8460692138427686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11742348469693938,
                },
                { start: "0.25", density: 0.03650730146029205 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7563268980694202 },
                { start: 1800, end: 3000, density: 0.15124537361208348 },
                { start: 3000, density: 0.09242772831849623 },
              ],
              percentiles: { p75: 1805 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9781021897810219 },
                { start: 100, end: 300, density: 0.015698430156984303 },
                { start: 300, density: 0.00619938006199379 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.774314588753252 },
                { start: 2500, end: 4000, density: 0.13953372023213928 },
                { start: 4000, density: 0.08615169101460872 },
              ],
              percentiles: { p75: 2385 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1805,
        lcp: 2385,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1649353489728,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9131589701675521 },
                { start: 1800, end: 3000, density: 0.0670208418471598 },
                { start: 3000, density: 0.019820187985288045 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9531149646756584 },
                { start: 100, end: 300, density: 0.025476343395418544 },
                { start: 300, density: 0.021408691928923067 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9142711518858307 },
                { start: 2500, end: 4000, density: 0.07084607543323138 },
                { start: 4000, density: 0.014882772680937812 },
              ],
              percentiles: { p75: 1683 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9331070287539937,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04412939297124602,
                },
                { start: "0.25", density: 0.02276357827476041 },
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
        fcp: 1256,
        lcp: 1683,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353489779,
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
                  density: 0.9524013111016103,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031067407724098616,
                },
                { start: "0.25", density: 0.016531281174291007 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.801726618705036 },
                { start: 1800, end: 3000, density: 0.1433093525179856 },
                { start: 3000, density: 0.054964028776978334 },
              ],
              percentiles: { p75: 1598 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9428078746946401 },
                { start: 100, end: 300, density: 0.034344014944675955 },
                { start: 300, density: 0.02284811036068399 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8340752441125788 },
                { start: 2500, end: 4000, density: 0.12155370476737509 },
                { start: 4000, density: 0.04437105112004607 },
              ],
              percentiles: { p75: 2120 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1598,
        lcp: 2120,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1649353489857,
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
                  density: 0.9216670303294786,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.056076805585860784,
                },
                { start: "0.25", density: 0.02225616408466072 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8337413754729577 },
                { start: 1800, end: 3000, density: 0.1255286000445137 },
                { start: 3000, density: 0.04073002448252859 },
              ],
              percentiles: { p75: 1555 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9349687572321222 },
                { start: 100, end: 300, density: 0.02453135848183291 },
                { start: 300, density: 0.04049988428604492 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8650354295837026 },
                { start: 2500, end: 4000, density: 0.10396368467670505 },
                { start: 4000, density: 0.031000885739592397 },
              ],
              percentiles: { p75: 2018 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1555,
        lcp: 2018,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353489942,
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
                  density: 0.9218078192180782,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05779422057794221,
                },
                { start: "0.25", density: 0.020397960203979618 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6557999999999998 },
                { start: 1800, end: 3000, density: 0.2416 },
                { start: 3000, density: 0.1026000000000002 },
              ],
              percentiles: { p75: 2059 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783978397839784 },
                { start: 100, end: 300, density: 0.015701570157015704 },
                { start: 300, density: 0.0059005900590059016 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7303499999999995 },
                { start: 2500, end: 4000, density: 0.15685000000000002 },
                { start: 4000, density: 0.11280000000000034 },
              ],
              percentiles: { p75: 2621 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2059,
        lcp: 2621,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353490017,
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
                  density: 0.900084913671101,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05844891027455419,
                },
                { start: "0.25", density: 0.041466176054344744 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8973258973258972 },
                { start: 1800, end: 3000, density: 0.07507507507507506 },
                { start: 3000, density: 0.027599027599027662 },
              ],
              percentiles: { p75: 1299 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9523314523314524 },
                { start: 100, end: 300, density: 0.03653103653103654 },
                { start: 300, density: 0.011137511137511132 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8915498999142122 },
                { start: 2500, end: 4000, density: 0.07999714040606233 },
                { start: 4000, density: 0.028452959679725578 },
              ],
              percentiles: { p75: 1745 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1299,
        lcp: 1745,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353490074,
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
                { start: "0.00", end: "0.10", density: 0.8089 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15259999999999999,
                },
                { start: "0.25", density: 0.03849999999999998 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7487748774877485 },
                { start: 1800, end: 3000, density: 0.18711871187118712 },
                { start: 3000, density: 0.0641064106410644 },
              ],
              percentiles: { p75: 1805 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973494698939788 },
                { start: 100, end: 300, density: 0.018503700740148035 },
                { start: 300, density: 0.008001600320063999 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7646794038211453 },
                { start: 2500, end: 4000, density: 0.15769730919275757 },
                { start: 4000, density: 0.07762328698609708 },
              ],
              percentiles: { p75: 2417 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1805,
        lcp: 2417,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1649353490181,
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
                  density: 0.9503950395039504,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0352035203520352,
                },
                { start: "0.25", density: 0.014401440144014408 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8334999999999996 },
                { start: 1800, end: 3000, density: 0.11049999999999995 },
                { start: 3000, density: 0.056000000000000605 },
              ],
              percentiles: { p75: 1483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595040495950405 },
                { start: 100, end: 300, density: 0.024697530246975307 },
                { start: 300, density: 0.015798420157984192 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8507798440311933 },
                { start: 2500, end: 4000, density: 0.10092981403719248 },
                { start: 4000, density: 0.04829034193161418 },
              ],
              percentiles: { p75: 1961 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1483,
        lcp: 1961,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353490242,
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
                { start: 0, end: 2500, density: 0.7783715012722641 },
                { start: 2500, end: 4000, density: 0.1491094147582696 },
                { start: 4000, density: 0.07251908396946641 },
              ],
              percentiles: { p75: 2373 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9307984790874525,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028010139416983527,
                },
                { start: "0.25", density: 0.04119138149556402 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7100674557719228 },
                { start: 1800, end: 3000, density: 0.19078528700521818 },
                { start: 3000, density: 0.09914725722285905 },
              ],
              percentiles: { p75: 1952 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9404869251578 },
                { start: 100, end: 300, density: 0.032075228648718285 },
                { start: 300, density: 0.027437846193481736 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1952,
        lcp: 2373,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649353490297,
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
                  density: 0.7700229977002301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1603839616038396,
                },
                { start: "0.25", density: 0.06959304069593038 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6145229045809167 },
                { start: 1800, end: 3000, density: 0.23954790958191655 },
                { start: 3000, density: 0.1459291858371667 },
              ],
              percentiles: { p75: 2409 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9736079176247125 },
                { start: 100, end: 300, density: 0.016395081475557335 },
                { start: 300, density: 0.009997000899730093 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6809861972394479 },
                { start: 2500, end: 4000, density: 0.20349069813962803 },
                { start: 4000, density: 0.11552310462092415 },
              ],
              percentiles: { p75: 2922 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2409,
        lcp: 2922,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649353490389,
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
                { start: 0, end: 2500, density: 0.7469983991462102 },
                { start: 2500, end: 4000, density: 0.15641675560298804 },
                { start: 4000, density: 0.09658484525080162 },
              ],
              percentiles: { p75: 2544 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9110904995362396,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06731151450907646,
                },
                { start: "0.25", density: 0.021597985954684016 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.672737011247991 },
                { start: 1800, end: 3000, density: 0.19282271023031589 },
                { start: 3000, density: 0.13444027852169319 },
              ],
              percentiles: { p75: 2147 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9244224863132594 },
                { start: 100, end: 300, density: 0.04553344905861931 },
                { start: 300, density: 0.030044064628121335 },
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
        fcp: 2147,
        lcp: 2544,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353490479,
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
                { start: 0, end: 2500, density: 0.5475552578700598 },
                { start: 2500, end: 4000, density: 0.2746818486269253 },
                { start: 4000, density: 0.17776289350301486 },
              ],
              percentiles: { p75: 3427 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9345584346906397,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03463775780010576,
                },
                { start: "0.25", density: 0.030803807509254377 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4297564891624297 },
                { start: 1800, end: 3000, density: 0.3114797966283115 },
                { start: 3000, density: 0.2587637142092587 },
              ],
              percentiles: { p75: 3071 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9444599497627687 },
                { start: 100, end: 300, density: 0.03977114150153503 },
                { start: 300, density: 0.01576890873569628 },
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
        fcp: 3071,
        lcp: 3427,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353490601,
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
                  density: 0.9369000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041800000000000004,
                },
                { start: "0.25", density: 0.021299999999999986 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6112000000000006 },
                { start: 1800, end: 3000, density: 0.24210000000000031 },
                { start: 3000, density: 0.14669999999999903 },
              ],
              percentiles: { p75: 2295 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572000000000002 },
                { start: 100, end: 300, density: 0.035 },
                { start: 300, density: 0.007799999999999989 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7066499999999994 },
                { start: 2500, end: 4000, density: 0.16184999999999977 },
                { start: 4000, density: 0.13150000000000073 },
              ],
              percentiles: { p75: 2792 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2295,
        lcp: 2792,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649353490702,
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
                  density: 0.9288107202680067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03391959798994975,
                },
                { start: "0.25", density: 0.03726968174204356 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.598116841429489 },
                { start: 1800, end: 3000, density: 0.22747699550609904 },
                { start: 3000, density: 0.17440616306441206 },
              ],
              percentiles: { p75: 2463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475104243316164 },
                { start: 100, end: 300, density: 0.03041452048074565 },
                { start: 300, density: 0.02207505518763796 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6473605471254545 },
                { start: 2500, end: 4000, density: 0.20688181235306702 },
                { start: 4000, density: 0.1457576405214784 },
              ],
              percentiles: { p75: 3029 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2463,
        lcp: 3029,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353490778,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8808119188081192,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07589241075892411,
                },
                { start: "0.25", density: 0.04329567043295675 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5565886822635465 },
                { start: 1800, end: 3000, density: 0.2819436112777441 },
                { start: 3000, density: 0.16146770645870948 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.971994398879776 },
                { start: 100, end: 300, density: 0.022104420884176836 },
                { start: 300, density: 0.005901180236047225 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6599180163967204 },
                { start: 2500, end: 4000, density: 0.2060087982403519 },
                { start: 4000, density: 0.13407318536292773 },
              ],
              percentiles: { p75: 3001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2524,
        lcp: 3001,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649353490862,
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
                  density: 0.9524146470900408,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025296302848045286,
                },
                { start: "0.25", density: 0.022289050061914003 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8266237251744498 },
                { start: 1800, end: 3000, density: 0.12524601896582577 },
                { start: 3000, density: 0.04813025585972444 },
              ],
              percentiles: { p75: 1611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9459556836606015 },
                { start: 100, end: 300, density: 0.02143757881462799 },
                { start: 300, density: 0.03260673752477055 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8400791509264254 },
                { start: 2500, end: 4000, density: 0.12016549739161718 },
                { start: 4000, density: 0.03975535168195734 },
              ],
              percentiles: { p75: 2194 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 2194,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353490919,
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
                { start: 0, end: 100, density: 0.9459556836606015 },
                { start: 100, end: 300, density: 0.02143757881462799 },
                { start: 300, density: 0.03260673752477055 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8400791509264254 },
                { start: 2500, end: 4000, density: 0.12016549739161718 },
                { start: 4000, density: 0.03975535168195734 },
              ],
              percentiles: { p75: 2194 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9524146470900408,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025296302848045286,
                },
                { start: "0.25", density: 0.022289050061914003 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8266237251744498 },
                { start: 1800, end: 3000, density: 0.12524601896582577 },
                { start: 3000, density: 0.04813025585972444 },
              ],
              percentiles: { p75: 1611 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 2194,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353491013,
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
                  density: 0.9159585767392459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033191715347849184,
                },
                { start: "0.25", density: 0.050849707912905 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49548091191150684 },
                { start: 1800, end: 3000, density: 0.31390799946040737 },
                { start: 3000, density: 0.19061108862808585 },
              ],
              percentiles: { p75: 2703 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625727751594122 },
                { start: 100, end: 300, density: 0.029664541169947323 },
                { start: 300, density: 0.007762683670640434 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6412049488972563 },
                { start: 2500, end: 4000, density: 0.22283485745024198 },
                { start: 4000, density: 0.13596019365250184 },
              ],
              percentiles: { p75: 3051 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2703,
        lcp: 3051,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649353491132,
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
                { start: 0, end: 2500, density: 0.6648829765953189 },
                { start: 2500, end: 4000, density: 0.19158831766353265 },
                { start: 4000, density: 0.1435287057411485 },
              ],
              percentiles: { p75: 3066 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8370837083708371,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09860986098609861,
                },
                { start: "0.25", density: 0.06430643064306432 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6234623462346226 },
                { start: 1800, end: 3000, density: 0.22362236223622345 },
                { start: 3000, density: 0.15291529152915387 },
              ],
              percentiles: { p75: 2373 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9155000000000005 },
                { start: 100, end: 300, density: 0.03310000000000002 },
                { start: 300, density: 0.0513999999999995 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2373,
        lcp: 3066,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649353491231,
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
                { start: 0, end: 2500, density: 0.6924577373211954 },
                { start: 2500, end: 4000, density: 0.17100130039011688 },
                { start: 4000, density: 0.1365409622886877 },
              ],
              percentiles: { p75: 2867 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8806119388061194,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07479252074792521,
                },
                { start: "0.25", density: 0.04459554044595542 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6075215043008602 },
                { start: 1800, end: 3000, density: 0.2374474894978996 },
                { start: 3000, density: 0.15503100620124025 },
              ],
              percentiles: { p75: 2374 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608039196080391 },
                { start: 100, end: 300, density: 0.0262973702629737 },
                { start: 300, density: 0.01289871012898715 },
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
        fcp: 2374,
        lcp: 2867,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649353491299,
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
                { start: 0, end: 1800, density: 0.4477999999999993 },
                { start: 1800, end: 3000, density: 0.3570999999999994 },
                { start: 3000, density: 0.1951000000000014 },
              ],
              percentiles: { p75: 2761 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686968696869687 },
                { start: 100, end: 300, density: 0.0264026402640264 },
                { start: 300, density: 0.0049004900490049064 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6009899010098978 },
                { start: 2500, end: 4000, density: 0.24222577742225723 },
                { start: 4000, density: 0.15678432156784497 },
              ],
              percentiles: { p75: 3276 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8381000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09240000000000001,
                },
                { start: "0.25", density: 0.06950000000000002 },
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
        fcp: 2761,
        lcp: 3276,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1649353491367,
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
                { start: "0.00", end: "0.10", density: 0.8711 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11499999999999999,
                },
                { start: "0.25", density: 0.013900000000000008 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8841884188418841 },
                { start: 1800, end: 3000, density: 0.09100910091009101 },
                { start: 3000, density: 0.02480248024802471 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797081167532987 },
                { start: 100, end: 300, density: 0.011395441823270689 },
                { start: 300, density: 0.008896441423430606 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9060063961623024 },
                { start: 2500, end: 4000, density: 0.07290625624625227 },
                { start: 4000, density: 0.021087347591445257 },
              ],
              percentiles: { p75: 1805 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1402,
        lcp: 1805,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649353491432,
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
                { start: 0, end: 1800, density: 0.8100706713780916 },
                { start: 1800, end: 3000, density: 0.14414016489988216 },
                { start: 3000, density: 0.04578916372202611 },
              ],
              percentiles: { p75: 1644 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.949577339463147 },
                { start: 100, end: 300, density: 0.043749073112857785 },
                { start: 300, density: 0.006673587423995247 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8498604377846333 },
                { start: 2500, end: 4000, density: 0.122080211546937 },
                { start: 4000, density: 0.02805935066842967 },
              ],
              percentiles: { p75: 2108 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9270136667635941,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06353591160220995,
                },
                { start: "0.25", density: 0.00945042163419599 },
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
        fcp: 1644,
        lcp: 2108,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1649353491486,
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
                { start: 0, end: 2500, density: 0.5313061041292638 },
                { start: 2500, end: 4000, density: 0.33561490125673243 },
                { start: 4000, density: 0.13307899461400366 },
              ],
              percentiles: { p75: 3314 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9843505477308295,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009501453163424997,
                },
                { start: "0.25", density: 0.006147999105745583 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45001120824927127 },
                { start: 1800, end: 3000, density: 0.40428155122169895 },
                { start: 3000, density: 0.14570724052902975 },
              ],
              percentiles: { p75: 2570 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.91677973767526 },
                { start: 100, end: 300, density: 0.05913613749434644 },
                { start: 300, density: 0.024084124830393596 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2570,
        lcp: 3314,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353491574,
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
                  density: 0.866086608660866,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0643064306430643,
                },
                { start: "0.25", density: 0.06960696069606963 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07778444311137778 },
                { start: 1800, end: 3000, density: 0.460907818436313 },
                { start: 3000, density: 0.46130773845230916 },
              ],
              percentiles: { p75: 4458 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21330000000000032 },
                { start: 2500, end: 4000, density: 0.4298000000000009 },
                { start: 4000, density: 0.3568999999999987 },
              ],
              percentiles: { p75: 4897 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4458, lcp: 4897, cls: "0.05" },
      timestamp: 1649353491666,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9069886291043824 },
                { start: 2500, end: 4000, density: 0.07218602274179124 },
                { start: 4000, density: 0.020825348153826487 },
              ],
              percentiles: { p75: 1798 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8945046634736576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09062263675321401,
                },
                { start: "0.25", density: 0.01487269977312831 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8683775886164403 },
                { start: 1800, end: 3000, density: 0.1041799009020455 },
                { start: 3000, density: 0.0274425104815143 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737080689029919 },
                { start: 100, end: 300, density: 0.014764926822950396 },
                { start: 300, density: 0.01152700427405774 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1463,
        lcp: 1798,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353491768,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7904958677685948 },
                { start: 2500, end: 4000, density: 0.15318772136953945 },
                { start: 4000, density: 0.05631641086186568 },
              ],
              percentiles: { p75: 2321 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8025387870239775,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17759755524212506,
                },
                { start: "0.25", density: 0.019863657733897498 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7475819768813395 },
                { start: 1800, end: 3000, density: 0.1841236140599196 },
                { start: 3000, density: 0.06829440905874089 },
              ],
              percentiles: { p75: 1816 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443980431929364 },
                { start: 100, end: 300, density: 0.028636200930676526 },
                { start: 300, density: 0.026965755876387047 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1816,
        lcp: 2321,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649353491873,
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
                  density: 0.6807361472294459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1568313662732546,
                },
                { start: "0.25", density: 0.16243248649729952 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5615876824635069 },
                { start: 1800, end: 3000, density: 0.18316336732653452 },
                { start: 3000, density: 0.2552489502099586 },
              ],
              percentiles: { p75: 3068 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6093718743748752 },
                { start: 2500, end: 4000, density: 0.18708741748349672 },
                { start: 4000, density: 0.20354070814162817 },
              ],
              percentiles: { p75: 3447 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3068, lcp: 3447, cls: "0.16" },
      timestamp: 1649353491987,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7296947749612002 },
                { start: 2500, end: 4000, density: 0.1608898085876875 },
                { start: 4000, density: 0.10941541645111239 },
              ],
              percentiles: { p75: 2607 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9543140748282005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020870450496309496,
                },
                { start: "0.25", density: 0.024815474675489967 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.603896936290219 },
                { start: 1800, end: 3000, density: 0.28098961671580563 },
                { start: 3000, density: 0.11511344699397533 },
              ],
              percentiles: { p75: 2190 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9753363228699552 },
                { start: 100, end: 300, density: 0.01933856502242153 },
                { start: 300, density: 0.005325112107623319 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2190,
        lcp: 2607,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649353492057,
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
                  density: 0.9288107202680067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03391959798994975,
                },
                { start: "0.25", density: 0.03726968174204356 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.598116841429489 },
                { start: 1800, end: 3000, density: 0.22747699550609904 },
                { start: 3000, density: 0.17440616306441206 },
              ],
              percentiles: { p75: 2463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475104243316164 },
                { start: 100, end: 300, density: 0.03041452048074565 },
                { start: 300, density: 0.02207505518763796 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6473605471254545 },
                { start: 2500, end: 4000, density: 0.20688181235306702 },
                { start: 4000, density: 0.1457576405214784 },
              ],
              percentiles: { p75: 3029 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2463,
        lcp: 3029,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649353492143,
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
                  density: 0.8894508670520231,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07153179190751445,
                },
                { start: "0.25", density: 0.03901734104046243 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7304219642528097 },
                { start: 1800, end: 3000, density: 0.19753086419753074 },
                { start: 3000, density: 0.07204717154965959 },
              ],
              percentiles: { p75: 1869 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9789196310935442 },
                { start: 100, end: 300, density: 0.021080368906455864 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7935899831807138 },
                { start: 2500, end: 4000, density: 0.14735563446084843 },
                { start: 4000, density: 0.05905438235843779 },
              ],
              percentiles: { p75: 2269 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1869,
        lcp: 2269,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649353492230,
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
                  density: 0.9306313328137179,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042738373603533386,
                },
                { start: "0.25", density: 0.02663029358274874 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49803149606299 },
                { start: 1800, end: 3000, density: 0.22874015748031404 },
                { start: 3000, density: 0.27322834645669586 },
              ],
              percentiles: { p75: 3290 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9369345396487494 },
                { start: 100, end: 300, density: 0.04709952102182013 },
                { start: 300, density: 0.015965939329430558 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5822189858334434 },
                { start: 2500, end: 4000, density: 0.19733880577254065 },
                { start: 4000, density: 0.22044220839401585 },
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
        fcp: 3290,
        lcp: 3795,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649353492340,
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
                  density: 0.8652134786521347,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09199080091990802,
                },
                { start: "0.25", density: 0.04279572042795722 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9108178364327134 },
                { start: 1800, end: 3000, density: 0.06408718256348729 },
                { start: 3000, density: 0.025094981003799297 },
              ],
              percentiles: { p75: 1212 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672869147659063 },
                { start: 100, end: 300, density: 0.02460984393757503 },
                { start: 300, density: 0.008103241296518612 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9034903490349034 },
                { start: 2500, end: 4000, density: 0.06860686068606861 },
                { start: 4000, density: 0.02790279027902799 },
              ],
              percentiles: { p75: 1701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1212,
        lcp: 1701,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649353492449,
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
                { start: "0.00", end: "0.10", density: 0.9086 },
                { start: "0.10", end: "0.25", density: 0.0741 },
                { start: "0.25", density: 0.017300000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.812056383085074 },
                { start: 1800, end: 3000, density: 0.14595621313605908 },
                { start: 3000, density: 0.04198740377886687 },
              ],
              percentiles: { p75: 1624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9601999999999999 },
                { start: 100, end: 300, density: 0.0158 },
                { start: 300, density: 0.024000000000000053 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8181999999999997 },
                { start: 2500, end: 4000, density: 0.14019999999999996 },
                { start: 4000, density: 0.04160000000000043 },
              ],
              percentiles: { p75: 2180 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1624,
        lcp: 2180,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353492517,
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
                  density: 0.8387161283871614,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1170882911708829,
                },
                { start: "0.25", density: 0.044195580441955803 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4793958791758393 },
                { start: 1800, end: 3000, density: 0.2460492098419705 },
                { start: 3000, density: 0.27455491098219026 },
              ],
              percentiles: { p75: 3240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9060624249699881 },
                { start: 100, end: 300, density: 0.05872348939575831 },
                { start: 300, density: 0.03521408563425357 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4996499299860001 },
                { start: 2500, end: 4000, density: 0.24059811962392608 },
                { start: 4000, density: 0.25975195039007376 },
              ],
              percentiles: { p75: 4177 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3240,
        lcp: 4177,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1649353492586,
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
                { start: 0, end: 100, density: 0.9578829145023163 },
                { start: 100, end: 300, density: 0.03257054611820863 },
                { start: 300, density: 0.009546539379474956 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7354136619902967 },
                { start: 2500, end: 4000, density: 0.15681132817621585 },
                { start: 4000, density: 0.1077750098334874 },
              ],
              percentiles: { p75: 2604 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.956544366380432,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011449388498568828,
                },
                { start: "0.25", density: 0.03200624512099924 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6308866087871611 },
                { start: 1800, end: 3000, density: 0.23941068139963165 },
                { start: 3000, density: 0.12970270981320717 },
              ],
              percentiles: { p75: 2209 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2209,
        lcp: 2604,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353492670,
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
                  density: 0.9247924792479248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0473047304730473,
                },
                { start: "0.25", density: 0.027902790279027888 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5393999999999991 },
                { start: 1800, end: 3000, density: 0.21139999999999964 },
                { start: 3000, density: 0.24920000000000125 },
              ],
              percentiles: { p75: 3124 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9507 },
                { start: 100, end: 300, density: 0.0354 },
                { start: 300, density: 0.013900000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5933093309330922 },
                { start: 2500, end: 4000, density: 0.19176917691769146 },
                { start: 4000, density: 0.2149214921492162 },
              ],
              percentiles: { p75: 3775 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3124,
        lcp: 3775,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353492791,
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
                  density: 0.6807361472294459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1568313662732546,
                },
                { start: "0.25", density: 0.16243248649729952 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5615876824635069 },
                { start: 1800, end: 3000, density: 0.18316336732653452 },
                { start: 3000, density: 0.2552489502099586 },
              ],
              percentiles: { p75: 3132 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6093718743748752 },
                { start: 2500, end: 4000, density: 0.18708741748349672 },
                { start: 4000, density: 0.20354070814162817 },
              ],
              percentiles: { p75: 3467 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3132, lcp: 3467, cls: "0.15" },
      timestamp: 1649353492850,
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
                  density: 0.9282438629619639,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022659832748853526,
                },
                { start: "0.25", density: 0.0490963042891826 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3698686371100159 },
                { start: 1800, end: 3000, density: 0.4021620142309792 },
                { start: 3000, density: 0.22796934865900498 },
              ],
              percentiles: { p75: 2936 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606321433610838 },
                { start: 100, end: 300, density: 0.03344151262875688 },
                { start: 300, density: 0.00592634401015945 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5758892207439581 },
                { start: 2500, end: 4000, density: 0.27464023893565 },
                { start: 4000, density: 0.14947054032039198 },
              ],
              percentiles: { p75: 3273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2936,
        lcp: 3273,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649353492961,
    },
    {
      url: "https://www.yara.cm/",
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
                  density: 0.6807361472294459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1568313662732546,
                },
                { start: "0.25", density: 0.16243248649729952 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5615876824635069 },
                { start: 1800, end: 3000, density: 0.18316336732653452 },
                { start: 3000, density: 0.2552489502099586 },
              ],
              percentiles: { p75: 3132 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6093718743748752 },
                { start: 2500, end: 4000, density: 0.18708741748349672 },
                { start: 4000, density: 0.20354070814162817 },
              ],
              percentiles: { p75: 3467 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3132, lcp: 3467, cls: "0.15" },
      timestamp: 1649353493070,
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
                  density: 0.9520979869027408,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020009701673538688,
                },
                { start: "0.25", density: 0.027892311423720582 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5323881691517954 },
                { start: 1800, end: 3000, density: 0.27316059643118973 },
                { start: 3000, density: 0.19445123441701492 },
              ],
              percentiles: { p75: 2700 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566750629722921 },
                { start: 100, end: 300, density: 0.03136020151133501 },
                { start: 300, density: 0.011964735516372779 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6474210462138762 },
                { start: 2500, end: 4000, density: 0.22125350567004026 },
                { start: 4000, density: 0.1313254481160835 },
              ],
              percentiles: { p75: 3034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2700,
        lcp: 3034,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353493206,
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
                { start: "0.00", end: "0.10", density: 0.8556 },
                { start: "0.10", end: "0.25", density: 0.0904 },
                { start: "0.25", density: 0.05400000000000002 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5261052210442074 },
                { start: 1800, end: 3000, density: 0.3252650530106012 },
                { start: 3000, density: 0.1486297259451914 },
              ],
              percentiles: { p75: 2519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9287213835849247 },
                { start: 100, end: 300, density: 0.03478956313106069 },
                { start: 300, density: 0.03648905328401471 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5983901609839017 },
                { start: 2500, end: 4000, density: 0.2834216578342167 },
                { start: 4000, density: 0.11818818118188151 },
              ],
              percentiles: { p75: 3098 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2519,
        lcp: 3098,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649353493375,
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
                { start: "0.00", end: "0.10", density: 0.7609 },
                { start: "0.10", end: "0.25", density: 0.1666 },
                { start: "0.25", density: 0.07249999999999997 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7187281271872815 },
                { start: 1800, end: 3000, density: 0.17368263173682635 },
                { start: 3000, density: 0.10758924107589213 },
              ],
              percentiles: { p75: 2022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9733053389322136 },
                { start: 100, end: 300, density: 0.015896820635872826 },
                { start: 300, density: 0.010797840431913612 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.71555 },
                { start: 2500, end: 4000, density: 0.17315 },
                { start: 4000, density: 0.11129999999999998 },
              ],
              percentiles: { p75: 2796 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2022,
        lcp: 2796,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649353493482,
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
                  density: 0.7655000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1454 },
                { start: "0.25", density: 0.08909999999999997 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4834033193361321 },
                { start: 1800, end: 3000, density: 0.2941411717656465 },
                { start: 3000, density: 0.22245550889822144 },
              ],
              percentiles: { p75: 2864 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320271891243502 },
                { start: 100, end: 300, density: 0.031087564974010395 },
                { start: 300, density: 0.036885245901639385 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5611561156115596 },
                { start: 2500, end: 4000, density: 0.26852685268526794 },
                { start: 4000, density: 0.1703170317031724 },
              ],
              percentiles: { p75: 3392 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2864,
        lcp: 3392,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1649353493577,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582958295829582 },
                { start: 100, end: 300, density: 0.0368036803680368 },
                { start: 300, density: 0.0049004900490049 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9296640671865627 },
                { start: 2500, end: 4000, density: 0.05423915216956613 },
                { start: 4000, density: 0.016096780643871194 },
              ],
              percentiles: { p75: 1688 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9260926092609262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06350635063506352,
                },
                { start: "0.25", density: 0.010401040104010403 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9369873974794959 },
                { start: 1800, end: 3000, density: 0.0539107821564313 },
                { start: 3000, density: 0.009101820364072817 },
              ],
              percentiles: { p75: 1168 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1168,
        lcp: 1688,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1649353493655,
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
                  density: 0.9335647000495785,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033052388035035525,
                },
                { start: "0.25", density: 0.03338291191538593 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3839391377852903 },
                { start: 1800, end: 3000, density: 0.3225697379543523 },
                { start: 3000, density: 0.29349112426035734 },
              ],
              percentiles: { p75: 3271 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9018363939899827 },
                { start: 100, end: 300, density: 0.04490818030050082 },
                { start: 300, density: 0.05325542570951633 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4987377987209692 },
                { start: 2500, end: 4000, density: 0.29813194210703453 },
                { start: 4000, density: 0.20313025917199623 },
              ],
              percentiles: { p75: 3682 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3271,
        lcp: 3682,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1649353493732,
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
                { start: "0.00", end: "0.10", density: 0.8576 },
                { start: "0.10", end: "0.25", density: 0.0815 },
                { start: "0.25", density: 0.06090000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7451999999999995 },
                { start: 1800, end: 3000, density: 0.16869999999999982 },
                { start: 3000, density: 0.08610000000000063 },
              ],
              percentiles: { p75: 1844 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9518048195180482 },
                { start: 100, end: 300, density: 0.025897410258974105 },
                { start: 300, density: 0.022297770222977763 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7939118264520633 },
                { start: 2500, end: 4000, density: 0.139808057582725 },
                { start: 4000, density: 0.06628011596521179 },
              ],
              percentiles: { p75: 2298 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1844,
        lcp: 2298,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1649353493879,
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
                  density: 0.7948205179482053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15668433156684333,
                },
                { start: "0.25", density: 0.048495150484951524 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8667266546690661 },
                { start: 1800, end: 3000, density: 0.09328134373125374 },
                { start: 3000, density: 0.039992001599680145 },
              ],
              percentiles: { p75: 1389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612193903048475 },
                { start: 100, end: 300, density: 0.02278860569715142 },
                { start: 300, density: 0.01599200399800104 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8518203640728144 },
                { start: 2500, end: 4000, density: 0.1016703340668133 },
                { start: 4000, density: 0.04650930186037229 },
              ],
              percentiles: { p75: 2059 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1389,
        lcp: 2059,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1649353493955,
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
                  density: 0.9261926192619262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043604360436043606,
                },
                { start: "0.25", density: 0.0302030203020302 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6679332066793316 },
                { start: 1800, end: 3000, density: 0.21537846215378453 },
                { start: 3000, density: 0.11668833116688365 },
              ],
              percentiles: { p75: 2106 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9658931786357272 },
                { start: 100, end: 300, density: 0.023804760952190446 },
                { start: 300, density: 0.01030206041208238 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7329267073292675 },
                { start: 2500, end: 4000, density: 0.15578442155784422 },
                { start: 4000, density: 0.11128887111288821 },
              ],
              percentiles: { p75: 2650 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2106,
        lcp: 2650,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649353494029,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8490301939612075 },
                { start: 2500, end: 4000, density: 0.10917816436712645 },
                { start: 4000, density: 0.041791641671666054 },
              ],
              percentiles: { p75: 1995 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8158999999999998,
                },
                { start: "0.10", end: "0.25", density: 0.1151 },
                { start: "0.25", density: 0.06900000000000003 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8342331533693259 },
                { start: 1800, end: 3000, density: 0.1204759048190362 },
                { start: 3000, density: 0.045290941811637855 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529952995299528 },
                { start: 100, end: 300, density: 0.0288028802880288 },
                { start: 300, density: 0.0182018201820184 },
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
        fcp: 1463,
        lcp: 1995,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1649353494106,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9501800720288115 },
                { start: 100, end: 300, density: 0.030312124849939975 },
                { start: 300, density: 0.019507803121248557 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6814269988992295 },
                { start: 2500, end: 4000, density: 0.1759731812268588 },
                { start: 4000, density: 0.14259981987391174 },
              ],
              percentiles: { p75: 2963 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8721744348869775,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07791558311662335,
                },
                { start: "0.25", density: 0.049909981996399226 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5981196239247848 },
                { start: 1800, end: 3000, density: 0.2256451290258051 },
                { start: 3000, density: 0.17623524704941015 },
              ],
              percentiles: { p75: 2464 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2464,
        lcp: 2963,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649353494192,
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
                  density: 0.7885211478852114,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1395860413958604,
                },
                { start: "0.25", density: 0.07189281071892807 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.778777877787778 },
                { start: 1800, end: 3000, density: 0.13601360136013588 },
                { start: 3000, density: 0.08520852085208627 },
              ],
              percentiles: { p75: 1707 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9752 },
                { start: 100, end: 300, density: 0.019200000000000002 },
                { start: 300, density: 0.005600000000000003 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8245149029805964 },
                { start: 2500, end: 4000, density: 0.10307061412282459 },
                { start: 4000, density: 0.07241448289657908 },
              ],
              percentiles: { p75: 2098 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1707,
        lcp: 2098,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649353494275,
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
                { start: 0, end: 100, density: 0.9637999999999999 },
                { start: 100, end: 300, density: 0.0245 },
                { start: 300, density: 0.011700000000000089 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7378999999999996 },
                { start: 2500, end: 4000, density: 0.16039999999999985 },
                { start: 4000, density: 0.10170000000000054 },
              ],
              percentiles: { p75: 2594 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8059999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1282 },
                { start: "0.25", density: 0.06580000000000004 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6659002299310196 },
                { start: 1800, end: 3000, density: 0.20763770868739342 },
                { start: 3000, density: 0.12646206138158686 },
              ],
              percentiles: { p75: 2176 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2176,
        lcp: 2594,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649353494347,
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
                { start: 0, end: 100, density: 0.989 },
                { start: 100, end: 300, density: 0.011 },
                { start: 300 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8166500000000001 },
                { start: 2500, end: 4000, density: 0.11765000000000005 },
                { start: 4000, density: 0.06569999999999998 },
              ],
              percentiles: { p75: 2143 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9245924592459246,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05150515051505151,
                },
                { start: "0.25", density: 0.023902390239023904 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7860999999999997 },
                { start: 1800, end: 3000, density: 0.16369999999999996 },
                { start: 3000, density: 0.05020000000000027 },
              ],
              percentiles: { p75: 1689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1689, lcp: 2143, cls: "0.01", fid: 9 },
      timestamp: 1649353494416,
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
                  density: 0.831339844178646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10918468122462419,
                },
                { start: "0.25", density: 0.05947547459672987 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6530319735391402 },
                { start: 1800, end: 3000, density: 0.2171995589856671 },
                { start: 3000, density: 0.1297684674751927 },
              ],
              percentiles: { p75: 2223 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9615732368896925 },
                { start: 100, end: 300, density: 0.02599457504520795 },
                { start: 300, density: 0.012432188065099565 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7312603192074844 },
                { start: 2500, end: 4000, density: 0.16648321408915787 },
                { start: 4000, density: 0.10225646670335775 },
              ],
              percentiles: { p75: 2620 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2223,
        lcp: 2620,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1649353494496,
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
                { start: 0, end: 1800, density: 0.3748625137486279 },
                { start: 1800, end: 3000, density: 0.3181681831816842 },
                { start: 3000, density: 0.3069693030696878 },
              ],
              percentiles: { p75: 3308 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9732973297329733 },
                { start: 100, end: 300, density: 0.0251025102510251 },
                { start: 300, density: 0.0016001600160016002 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.485897179435886 },
                { start: 2500, end: 4000, density: 0.30906181236247177 },
                { start: 4000, density: 0.2050410082016423 },
              ],
              percentiles: { p75: 3745 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9372937293729373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030403040304030408,
                },
                { start: "0.25", density: 0.0323032303230323 },
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
        fcp: 3308,
        lcp: 3745,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649353494609,
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
                { start: 0, end: 2500, density: 0.5427299109376554 },
                { start: 2500, end: 4000, density: 0.32277594316021163 },
                { start: 4000, density: 0.13449414590213302 },
              ],
              percentiles: { p75: 3307 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9761976197619762,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017001700170017002,
                },
                { start: "0.25", density: 0.006800680068006798 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46572600820574345 },
                { start: 1800, end: 3000, density: 0.39017312118482883 },
                { start: 3000, density: 0.14410087060942753 },
              ],
              percentiles: { p75: 2554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9218078192180782 },
                { start: 100, end: 300, density: 0.05509449055094491 },
                { start: 300, density: 0.02309769023097689 },
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
        fcp: 2554,
        lcp: 3307,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649353494686,
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
                { start: 0, end: 100, density: 0.963992798559712 },
                { start: 100, end: 300, density: 0.031506301260252056 },
                { start: 300, density: 0.004500900180036002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8538561568470541 },
                { start: 2500, end: 4000, density: 0.11543463038911674 },
                { start: 4000, density: 0.030709212763829166 },
              ],
              percentiles: { p75: 2065 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9388938893889388,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054005400540054004,
                },
                { start: "0.25", density: 0.0071007100710071 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8423842384238422 },
                { start: 1800, end: 3000, density: 0.1201120112011201 },
                { start: 3000, density: 0.03750375037503755 },
              ],
              percentiles: { p75: 1508 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1508,
        lcp: 2065,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649353494763,
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
                { start: 0, end: 100, density: 0.9117189237269291 },
                { start: 100, end: 300, density: 0.07738492328218814 },
                { start: 300, density: 0.01089615299088281 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9093796315900909 },
                { start: 2500, end: 4000, density: 0.07770484861316963 },
                { start: 4000, density: 0.012915519796739355 },
              ],
              percentiles: { p75: 1910 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9461343472750318,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04795099281791298,
                },
                { start: "0.25", density: 0.005914659907055342 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9145226451201361 },
                { start: 1800, end: 3000, density: 0.07314480119072933 },
                { start: 3000, density: 0.012332553689134593 },
              ],
              percentiles: { p75: 1405 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1405,
        lcp: 1910,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1649353494843,
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
                  density: 0.9308000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.043 },
                { start: "0.25", density: 0.02619999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5597999999999991 },
                { start: 1800, end: 3000, density: 0.2635999999999996 },
                { start: 3000, density: 0.17660000000000123 },
              ],
              percentiles: { p75: 2590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656068786242752 },
                { start: 100, end: 300, density: 0.02489502099580084 },
                { start: 300, density: 0.009498100379924003 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6564156415641554 },
                { start: 2500, end: 4000, density: 0.2101710171017098 },
                { start: 4000, density: 0.13341334133413477 },
              ],
              percentiles: { p75: 3034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2590,
        lcp: 3034,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649353494967,
    },
  ],
};
