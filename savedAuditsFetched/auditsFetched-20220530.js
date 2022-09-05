export const audit28 = {
  date: "2022-05-30T09:35:21.223Z",
  dateParsedLocale: "30/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "30/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5404058383766459 },
                { start: 800, end: 1800, density: 0.3739171709979823 },
                { start: 1800, density: 0.08567699062537174 },
              ],
              percentiles: { p75: 1140 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7323437874072292 },
                { start: 1800, end: 3000, density: 0.17859707924347598 },
                { start: 3000, density: 0.08905913334929488 },
              ],
              percentiles: { p75: 1875 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9097358121330723 },
                { start: 100, end: 300, density: 0.05454990215264187 },
                { start: 300, density: 0.03571428571428573 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8001912045889097 },
                { start: 2500, end: 4000, density: 0.13240917782026762 },
                { start: 4000, density: 0.06739961759082273 },
              ],
              percentiles: { p75: 2270 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9398692810457516,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026143790849673203,
                },
                { start: "0.25", density: 0.03398692810457516 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3934683056158105 },
                { start: 200, end: 500, density: 0.43239334779464866 },
                { start: 500, density: 0.1741383465895409 },
              ],
              percentiles: { p75: 398 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1875,
        lcp: 2270,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1653903265129,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6217409587888987 },
                { start: 200, end: 500, density: 0.27270815811606414 },
                { start: 500, density: 0.10555088309503712 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40531010163866404 },
                { start: 800, end: 1800, density: 0.48226509023024244 },
                { start: 1800, density: 0.11242480813109357 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6213932399010713 },
                { start: 1800, end: 3000, density: 0.2605111294311622 },
                { start: 3000, density: 0.11809563066776645 },
              ],
              percentiles: { p75: 2413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9335541295797971 },
                { start: 100, end: 300, density: 0.04036431380666528 },
                { start: 300, density: 0.026081556613537654 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7323108384458075 },
                { start: 2500, end: 4000, density: 0.19631901840490784 },
                { start: 4000, density: 0.07137014314928468 },
              ],
              percentiles: { p75: 2668 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9562688064192576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022266800401203605,
                },
                { start: "0.25", density: 0.021464393179538625 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 2668,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903266009,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5536660998299489 },
                { start: 200, end: 500, density: 0.30509152745823737 },
                { start: 500, density: 0.14124237271181378 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47814344303290973 },
                { start: 800, end: 1800, density: 0.41232369710913264 },
                { start: 1800, density: 0.10953285985795749 },
              ],
              percentiles: { p75: 1213 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6454227113556757 },
                { start: 1800, end: 3000, density: 0.21380690345172515 },
                { start: 3000, density: 0.14077038519259896 },
              ],
              percentiles: { p75: 2219 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612077584483103 },
                { start: 100, end: 300, density: 0.02539492101579684 },
                { start: 300, density: 0.013397320535892874 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.722816845053516 },
                { start: 2500, end: 4000, density: 0.1547464239271782 },
                { start: 4000, density: 0.12243673101930595 },
              ],
              percentiles: { p75: 2685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8727745549109822,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07451490298059613,
                },
                { start: "0.25", density: 0.052710542108421674 },
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
        fcp: 2219,
        lcp: 2685,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903266849,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42939999999999995 },
                { start: 800, end: 1800, density: 0.4926 },
                { start: 1800, density: 0.078 },
              ],
              percentiles: { p75: 1135 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6842000000000006 },
                { start: 1800, end: 3000, density: 0.22470000000000018 },
                { start: 3000, density: 0.09109999999999922 },
              ],
              percentiles: { p75: 1985 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9814018598140186 },
                { start: 100, end: 300, density: 0.008399160083991603 },
                { start: 300, density: 0.010198980101989804 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.769707883153261 },
                { start: 2500, end: 4000, density: 0.13945578231292516 },
                { start: 4000, density: 0.09083633453381389 },
              ],
              percentiles: { p75: 2453 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9381876375275056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039107821564312854,
                },
                { start: "0.25", density: 0.022704540908181643 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6538653865386537 },
                { start: 200, end: 500, density: 0.29202920292029205 },
                { start: 500, density: 0.054105410541054236 },
              ],
              percentiles: { p75: 253 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 1985,
        lcp: 2453,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653903267360,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6178612059158126 },
                { start: 1800, end: 3000, density: 0.23822525597269592 },
                { start: 3000, density: 0.1439135381114913 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9322662955230804 },
                { start: 100, end: 300, density: 0.04430526559962886 },
                { start: 300, density: 0.023428438877290795 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.727479268431217 },
                { start: 2500, end: 4000, density: 0.19470635010791787 },
                { start: 4000, density: 0.07781438146086508 },
              ],
              percentiles: { p75: 2630 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9610859728506788,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01742081447963801,
                },
                { start: "0.25", density: 0.02149321266968326 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5781107044830739 },
                { start: 200, end: 500, density: 0.30409423604757535 },
                { start: 500, density: 0.11779505946935064 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4368169398907105 },
                { start: 800, end: 1800, density: 0.37545537340619317 },
                { start: 1800, density: 0.1877276867030964 },
              ],
              percentiles: { p75: 1554 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2630,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903267827,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604135491769829 },
                { start: 100, end: 300, density: 0.029519793225411508 },
                { start: 300, density: 0.010066657597605774 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6345979541628889 },
                { start: 2500, end: 4000, density: 0.2470542535284212 },
                { start: 4000, density: 0.11834779230868976 },
              ],
              percentiles: { p75: 2975 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9313963906309997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020606681172404967,
                },
                { start: "0.25", density: 0.047996928196595415 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5329874966746484 },
                { start: 200, end: 500, density: 0.37802607076350164 },
                { start: 500, density: 0.08898643256185 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2752492968550236 },
                { start: 800, end: 1800, density: 0.5508821273331613 },
                { start: 1800, density: 0.173868575811815 },
              ],
              percentiles: { p75: 1561 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4893589410848677 },
                { start: 1800, end: 3000, density: 0.3242927588891764 },
                { start: 3000, density: 0.18634830002595582 },
              ],
              percentiles: { p75: 2682 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2682,
        lcp: 2975,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903268492,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6336267253450688 },
                { start: 200, end: 500, density: 0.29765953190638117 },
                { start: 500, density: 0.06871374274855001 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32303848075962044 },
                { start: 800, end: 1800, density: 0.47406296851574253 },
                { start: 1800, density: 0.202898550724637 },
              ],
              percentiles: { p75: 1698 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5335999999999997 },
                { start: 1800, end: 3000, density: 0.29059999999999975 },
                { start: 3000, density: 0.17580000000000054 },
              ],
              percentiles: { p75: 2600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756 },
                { start: 100, end: 300, density: 0.0179 },
                { start: 300, density: 0.006500000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6383638363836385 },
                { start: 2500, end: 4000, density: 0.20982098209820993 },
                { start: 4000, density: 0.1518151815181516 },
              ],
              percentiles: { p75: 3120 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9004099590040996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0657934206579342,
                },
                { start: "0.25", density: 0.03379662033796623 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2600,
        lcp: 3120,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1653903269066,
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
                { start: 0, end: 2500, density: 0.6859871974394873 },
                { start: 2500, end: 4000, density: 0.17188437687537494 },
                { start: 4000, density: 0.14212842568513767 },
              ],
              percentiles: { p75: 2924 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8150184981501851,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09879012098790121,
                },
                { start: "0.25", density: 0.0861913808619137 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6260869565217386 },
                { start: 200, end: 500, density: 0.23438280859570199 },
                { start: 500, density: 0.13953023488255933 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41709999999999936 },
                { start: 800, end: 1800, density: 0.42069999999999946 },
                { start: 1800, density: 0.1622000000000011 },
              ],
              percentiles: { p75: 1454 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6322367763223673 },
                { start: 1800, end: 3000, density: 0.21697830216978287 },
                { start: 3000, density: 0.1507849215078498 },
              ],
              percentiles: { p75: 2325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9110088991100892 },
                { start: 100, end: 300, density: 0.03859614038596142 },
                { start: 300, density: 0.050394960503949336 },
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
        fcp: 2325,
        lcp: 2924,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1653903269419,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9531475519040746 },
                { start: 100, end: 300, density: 0.022204951704230043 },
                { start: 300, density: 0.02464749639169536 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.856474780091303 },
                { start: 2500, end: 4000, density: 0.09854136510410859 },
                { start: 4000, density: 0.0449838548045885 },
              ],
              percentiles: { p75: 1937 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9606299212598425,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026061883109681713,
                },
                { start: "0.25", density: 0.013308195630475776 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5881894150417833 },
                { start: 200, end: 500, density: 0.3192200557103068 },
                { start: 500, density: 0.09259052924790984 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6871726289981053 },
                { start: 800, end: 1800, density: 0.24317396634347482 },
                { start: 1800, density: 0.06965340465841995 },
              ],
              percentiles: { p75: 891 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220263334077214 },
                { start: 1800, end: 3000, density: 0.11727293014952016 },
                { start: 3000, density: 0.060700736442758495 },
              ],
              percentiles: { p75: 1551 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1551,
        lcp: 1937,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903269759,
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
                { start: "0.00", end: "0.10", density: 0.8127 },
                { start: "0.10", end: "0.25", density: 0.1273 },
                { start: "0.25", density: 0.06000000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7488748874887486 },
                { start: 200, end: 500, density: 0.19381938193819373 },
                { start: 500, density: 0.057305730573057725 },
              ],
              percentiles: { p75: 201 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3379675935187034 },
                { start: 800, end: 1800, density: 0.44148829765953157 },
                { start: 1800, density: 0.22054410882176495 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6102000000000001 },
                { start: 1800, end: 3000, density: 0.21870000000000012 },
                { start: 3000, density: 0.17109999999999984 },
              ],
              percentiles: { p75: 2488 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574957495749574 },
                { start: 100, end: 300, density: 0.023602360236023603 },
                { start: 300, density: 0.018901890189018895 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6730826917308261 },
                { start: 2500, end: 4000, density: 0.1890310968903107 },
                { start: 4000, density: 0.1378862113788632 },
              ],
              percentiles: { p75: 2982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2488,
        lcp: 2982,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653903270313,
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
                { start: 0, end: 100, density: 0.978 },
                { start: 100, end: 300, density: 0.0157 },
                { start: 300, density: 0.00630000000000002 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6737499999999995 },
                { start: 2500, end: 4000, density: 0.2125499999999998 },
                { start: 4000, density: 0.11370000000000062 },
              ],
              percentiles: { p75: 2872 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8465153484651534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08289171082891711,
                },
                { start: "0.25", density: 0.07059294070592943 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7019403880776157 },
                { start: 200, end: 500, density: 0.2541508301660333 },
                { start: 500, density: 0.04390878175635103 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30826917308269197 },
                { start: 800, end: 1800, density: 0.5418458154184588 },
                { start: 1800, density: 0.14988501149884922 },
              ],
              percentiles: { p75: 1503 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5532659797939377 },
                { start: 1800, end: 3000, density: 0.29218765629688864 },
                { start: 3000, density: 0.15454636390917387 },
              ],
              percentiles: { p75: 2454 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2454,
        lcp: 2872,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653903270869,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7117999999999993 },
                { start: 1800, end: 3000, density: 0.1793999999999998 },
                { start: 3000, density: 0.1088000000000007 },
              ],
              percentiles: { p75: 1994 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574787393696849 },
                { start: 100, end: 300, density: 0.03371685842921461 },
                { start: 300, density: 0.008804402201100557 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7691192642207334 },
                { start: 2500, end: 4000, density: 0.13810856742977098 },
                { start: 4000, density: 0.09277216834949548 },
              ],
              percentiles: { p75: 2418 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8191819181918192,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12001200120012001,
                },
                { start: "0.25", density: 0.060806080608060815 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6764000000000002 },
                { start: 200, end: 500, density: 0.2444000000000001 },
                { start: 500, density: 0.07919999999999976 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47385784264720565 },
                { start: 800, end: 1800, density: 0.4064780565830249 },
                { start: 1800, density: 0.11966410076976954 },
              ],
              percentiles: { p75: 1300 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 1994,
        lcp: 2418,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1653903271280,
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
                { start: 0, end: 1800, density: 0.4909111437281258 },
                { start: 1800, end: 3000, density: 0.25087501411313146 },
                { start: 3000, density: 0.2582138421587428 },
              ],
              percentiles: { p75: 3306 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5553547220967006 },
                { start: 2500, end: 4000, density: 0.21825576140985053 },
                { start: 4000, density: 0.22638951649344885 },
              ],
              percentiles: { p75: 3960 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8876190476190475,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07585434173669467,
                },
                { start: "0.25", density: 0.03652661064425768 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5728254690164865 },
                { start: 200, end: 500, density: 0.31802160318362693 },
                { start: 500, density: 0.10915292779988657 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44262849413886324 },
                { start: 800, end: 1800, density: 0.33566275924256045 },
                { start: 1800, density: 0.22170874661857645 },
              ],
              percentiles: { p75: 1768 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3306, lcp: 3960, cls: "0.00" },
      timestamp: 1653903271622,
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
                  density: 0.9292999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.056299999999999996,
                },
                { start: "0.25", density: 0.014399999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6190142957112869 },
                { start: 200, end: 500, density: 0.2939118264520644 },
                { start: 500, density: 0.08707387783664874 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6993901829451159 },
                { start: 800, end: 1800, density: 0.23502949115265406 },
                { start: 1800, density: 0.06558032590223017 },
              ],
              percentiles: { p75: 876 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8274172582741722 },
                { start: 1800, end: 3000, density: 0.11388861113888606 },
                { start: 3000, density: 0.05869413058694173 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574042595740426 },
                { start: 100, end: 300, density: 0.0202979702029797 },
                { start: 300, density: 0.022297770222977714 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8559355935593554 },
                { start: 2500, end: 4000, density: 0.09845984598459834 },
                { start: 4000, density: 0.045604560456046064 },
              ],
              percentiles: { p75: 1954 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 1954,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903272106,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.660771090469526 },
                { start: 1800, end: 3000, density: 0.2443058913347756 },
                { start: 3000, density: 0.0949230181956985 },
              ],
              percentiles: { p75: 1994 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9770491803278689 },
                { start: 100, end: 300, density: 0.011475409836065573 },
                { start: 300, density: 0.011475409836065573 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8002413617886179 },
                { start: 2500, end: 4000, density: 0.1368775406504065 },
                { start: 4000, density: 0.06288109756097553 },
              ],
              percentiles: { p75: 2277 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.962223626026532,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0180669614655717,
                },
                { start: "0.25", density: 0.01970941250789639 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5947355351378197 },
                { start: 200, end: 500, density: 0.3456667494412714 },
                { start: 500, density: 0.059597715420908935 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40836830726185946 },
                { start: 800, end: 1800, density: 0.51036500063589 },
                { start: 1800, density: 0.08126669210225053 },
              ],
              percentiles: { p75: 1135 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 1994,
        lcp: 2277,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903272399,
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
                { start: 0, end: 800, density: 0.5125025005000999 },
                { start: 800, end: 1800, density: 0.376875375075015 },
                { start: 1800, density: 0.11062212442488509 },
              ],
              percentiles: { p75: 1218 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7576484703059383 },
                { start: 1800, end: 3000, density: 0.14137172565486894 },
                { start: 3000, density: 0.10097980403919292 },
              ],
              percentiles: { p75: 1770 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662 },
                { start: 100, end: 300, density: 0.024399999999999995 },
                { start: 300, density: 0.009400000000000013 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8035196480351964 },
                { start: 2500, end: 4000, density: 0.11948805119488048 },
                { start: 4000, density: 0.07699230076992306 },
              ],
              percentiles: { p75: 2157 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7995 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13570000000000002,
                },
                { start: "0.25", density: 0.06480000000000002 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7709541908381679 },
                { start: 200, end: 500, density: 0.18083616723344673 },
                { start: 500, density: 0.04820964192838542 },
              ],
              percentiles: { p75: 188 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1770,
        lcp: 2157,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1653903272948,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8086999999999996 },
                { start: 200, end: 500, density: 0.10929999999999994 },
                { start: 500, density: 0.08200000000000054 },
              ],
              percentiles: { p75: 158 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25297470252974696 },
                { start: 800, end: 1800, density: 0.4881511848815117 },
                { start: 1800, density: 0.2588741125887413 },
              ],
              percentiles: { p75: 1853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.048695130486951586 },
                { start: 1800, end: 3000, density: 0.36486351364863717 },
                { start: 3000, density: 0.5864413558644113 },
              ],
              percentiles: { p75: 5058 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.19101179764047227 },
                { start: 2500, end: 4000, density: 0.37187562487502573 },
                { start: 4000, density: 0.43711257748450194 },
              ],
              percentiles: { p75: 5554 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8679264147170566,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07448510297940411,
                },
                { start: "0.25", density: 0.05758848230353931 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5058, lcp: 5554, cls: "0.05" },
      timestamp: 1653903273245,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5264052810562112 },
                { start: 800, end: 1800, density: 0.38927785557111416 },
                { start: 1800, density: 0.08431686337267476 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7261726172617259 },
                { start: 1800, end: 3000, density: 0.18451845184518448 },
                { start: 3000, density: 0.08930893089308962 },
              ],
              percentiles: { p75: 1992 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644 },
                { start: 100, end: 300, density: 0.023 },
                { start: 300, density: 0.012600000000000042 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7536753675367542 },
                { start: 2500, end: 4000, density: 0.1623162316231623 },
                { start: 4000, density: 0.08400840084008343 },
              ],
              percentiles: { p75: 2584 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7754 },
                { start: "0.10", end: "0.25", density: 0.1626 },
                { start: "0.25", density: 0.06199999999999996 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7817654703588927 },
                { start: 200, end: 500, density: 0.15285414375687295 },
                { start: 500, density: 0.06538038588423434 },
              ],
              percentiles: { p75: 187 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1992, lcp: 2584, cls: "0.07", fid: 9 },
      timestamp: 1653903273574,
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
                { start: 0, end: 200, density: 0.4896531040687791 },
                { start: 200, end: 500, density: 0.2973108067579724 },
                { start: 500, density: 0.2130360891732485 },
              ],
              percentiles: { p75: 430 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41460730365182547 },
                { start: 800, end: 1800, density: 0.40060030015007464 },
                { start: 1800, density: 0.18479239619809987 },
              ],
              percentiles: { p75: 1567 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5175517551755167 },
                { start: 1800, end: 3000, density: 0.24172417241724128 },
                { start: 3000, density: 0.24072407240724197 },
              ],
              percentiles: { p75: 2982 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9140398278795158 },
                { start: 100, end: 300, density: 0.05583908736115281 },
                { start: 300, density: 0.030121084759331472 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5626125225044998 },
                { start: 2500, end: 4000, density: 0.2418483696739343 },
                { start: 4000, density: 0.1955391078215658 },
              ],
              percentiles: { p75: 3569 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8510702140428086,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10612122424484896,
                },
                { start: "0.25", density: 0.042808561712342465 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 2982,
        lcp: 3569,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1653903273879,
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
                { start: 0, end: 2500, density: 0.4921015796840627 },
                { start: 2500, end: 4000, density: 0.30663867226554653 },
                { start: 4000, density: 0.2012597480503908 },
              ],
              percentiles: { p75: 3737 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9332066793320668,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04719528047195281,
                },
                { start: "0.25", density: 0.019598040195980417 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5441455854414559 },
                { start: 200, end: 500, density: 0.342965703429657 },
                { start: 500, density: 0.11288871112888724 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23155368926214775 },
                { start: 800, end: 1800, density: 0.5234953009398124 },
                { start: 1800, density: 0.24495100979803974 },
              ],
              percentiles: { p75: 1823 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37630000000000136 },
                { start: 1800, end: 3000, density: 0.3271000000000012 },
                { start: 3000, density: 0.2965999999999973 },
              ],
              percentiles: { p75: 3342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9683095071478557 },
                { start: 100, end: 300, density: 0.024792562231330598 },
                { start: 300, density: 0.006897930620813753 },
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
        fcp: 3342,
        lcp: 3737,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653903274195,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9606039396060394,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0287971202879712,
                },
                { start: "0.25", density: 0.010598940105989389 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6760999999999997 },
                { start: 200, end: 500, density: 0.2599 },
                { start: 500, density: 0.06400000000000015 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6231999999999999 },
                { start: 800, end: 1800, density: 0.33120000000000005 },
                { start: 1800, density: 0.04560000000000009 },
              ],
              percentiles: { p75: 950 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.876963088926678 },
                { start: 1800, end: 3000, density: 0.09002700810243067 },
                { start: 3000, density: 0.03300990297089147 },
              ],
              percentiles: { p75: 1405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701149425287356 },
                { start: 100, end: 300, density: 0.016291854072963522 },
                { start: 300, density: 0.01359320339830086 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8909172751825546 },
                { start: 2500, end: 4000, density: 0.07997399219765929 },
                { start: 4000, density: 0.029108732619786186 },
              ],
              percentiles: { p75: 1812 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1405,
        lcp: 1812,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653903274503,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6857142857142856 },
                { start: 1800, end: 3000, density: 0.2332653061224489 },
                { start: 3000, density: 0.08102040816326556 },
              ],
              percentiles: { p75: 2000 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643574297188755 },
                { start: 100, end: 300, density: 0.025100401606425703 },
                { start: 300, density: 0.010542168674698798 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7778119868637107 },
                { start: 2500, end: 4000, density: 0.16882183908045967 },
                { start: 4000, density: 0.053366174055829774 },
              ],
              percentiles: { p75: 2385 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9485588470776622,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041032826261008806,
                },
                { start: "0.25", density: 0.010408326661329058 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8564451051178595 },
                { start: 200, end: 500, density: 0.1227436823104693 },
                { start: 500, density: 0.020811212571671248 },
              ],
              percentiles: { p75: 144 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.515484922575387 },
                { start: 800, end: 1800, density: 0.3765281173594132 },
                { start: 1800, density: 0.10798696006519971 },
              ],
              percentiles: { p75: 1270 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2000,
        lcp: 2385,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903274868,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7376307856002838 },
                { start: 2500, end: 4000, density: 0.161464798723178 },
                { start: 4000, density: 0.10090441567653813 },
              ],
              percentiles: { p75: 2580 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9268122270742358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04908296943231442,
                },
                { start: "0.25", density: 0.02410480349344981 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6669825625473842 },
                { start: 200, end: 500, density: 0.24431387414708094 },
                { start: 500, density: 0.0887035633055349 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5084745762711856 },
                { start: 800, end: 1800, density: 0.36431757359500394 },
                { start: 1800, density: 0.12720785013381034 },
              ],
              percentiles: { p75: 1312 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6733273862622658 },
                { start: 1800, end: 3000, density: 0.19928635147190008 },
                { start: 3000, density: 0.12738626226583416 },
              ],
              percentiles: { p75: 2146 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621767657275184 },
                { start: 100, end: 300, density: 0.029525279814743337 },
                { start: 300, density: 0.00829795445773829 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2146,
        lcp: 2580,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903275317,
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
                  density: 0.9459000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032900000000000006,
                },
                { start: "0.25", density: 0.021199999999999997 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6263626362636263 },
                { start: 200, end: 500, density: 0.2694269426942694 },
                { start: 500, density: 0.1042104210421043 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46195380461953806 },
                { start: 800, end: 1800, density: 0.36046395360463956 },
                { start: 1800, density: 0.17758224177582227 },
              ],
              percentiles: { p75: 1512 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6372999999999998 },
                { start: 1800, end: 3000, density: 0.22749999999999992 },
                { start: 3000, density: 0.13520000000000024 },
              ],
              percentiles: { p75: 2299 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411176647005898 },
                { start: 100, end: 300, density: 0.03838848345496351 },
                { start: 300, density: 0.020493851844446815 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7377999999999999 },
                { start: 2500, end: 4000, density: 0.18639999999999993 },
                { start: 4000, density: 0.07580000000000009 },
              ],
              percentiles: { p75: 2574 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2299,
        lcp: 2574,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903275766,
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
                { start: 0, end: 1800, density: 0.3662575266326999 },
                { start: 1800, end: 3000, density: 0.3268874478925424 },
                { start: 3000, density: 0.3068550254747577 },
              ],
              percentiles: { p75: 3403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647629182925387 },
                { start: 100, end: 300, density: 0.027078160104055813 },
                { start: 300, density: 0.00815892160340546 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49185347816038866 },
                { start: 2500, end: 4000, density: 0.3171365842385026 },
                { start: 4000, density: 0.19100993760110876 },
              ],
              percentiles: { p75: 3691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9608340052989287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020619744269093424,
                },
                { start: "0.25", density: 0.0185462504319779 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49959598291584895 },
                { start: 200, end: 500, density: 0.37792912386009453 },
                { start: 500, density: 0.12247489322405651 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22741898414157707 },
                { start: 800, end: 1800, density: 0.5171225005745815 },
                { start: 1800, density: 0.25545851528384145 },
              ],
              percentiles: { p75: 1856 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3403,
        lcp: 3691,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903276054,
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
                  density: 0.8679264147170566,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07448510297940411,
                },
                { start: "0.25", density: 0.05758848230353931 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8086999999999996 },
                { start: 200, end: 500, density: 0.10929999999999994 },
                { start: 500, density: 0.08200000000000054 },
              ],
              percentiles: { p75: 165 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25297470252974696 },
                { start: 800, end: 1800, density: 0.4881511848815117 },
                { start: 1800, density: 0.2588741125887413 },
              ],
              percentiles: { p75: 1881 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.048695130486951586 },
                { start: 1800, end: 3000, density: 0.36486351364863717 },
                { start: 3000, density: 0.5864413558644113 },
              ],
              percentiles: { p75: 5272 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.19101179764047227 },
                { start: 2500, end: 4000, density: 0.37187562487502573 },
                { start: 4000, density: 0.43711257748450194 },
              ],
              percentiles: { p75: 5568 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5272, lcp: 5568, cls: "0.04" },
      timestamp: 1653903276512,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9727972797279728 },
                { start: 100, end: 300, density: 0.0078007800780078 },
                { start: 300, density: 0.01940194019401941 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7054705470547055 },
                { start: 2500, end: 4000, density: 0.18771877187718772 },
                { start: 4000, density: 0.10681068106810673 },
              ],
              percentiles: { p75: 2782 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7948794879487949,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12911291129112912,
                },
                { start: "0.25", density: 0.07600760076007602 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7743676896930921 },
                { start: 200, end: 500, density: 0.18824352694191737 },
                { start: 500, density: 0.037388783364990526 },
              ],
              percentiles: { p75: 194 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31586841315868414 },
                { start: 800, end: 1800, density: 0.5076492350764924 },
                { start: 1800, density: 0.17648235176482355 },
              ],
              percentiles: { p75: 1590 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.631936806319368 },
                { start: 1800, end: 3000, density: 0.2423757624237577 },
                { start: 3000, density: 0.12568743125687426 },
              ],
              percentiles: { p75: 2301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2301, lcp: 2782, cls: "0.06", fid: 9 },
      timestamp: 1653903276985,
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
                { start: 0, end: 800, density: 0.6390639063906391 },
                { start: 800, end: 1800, density: 0.3243324332433244 },
                { start: 1800, density: 0.03660366036603645 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8604581374412327 },
                { start: 1800, end: 3000, density: 0.10633189956987096 },
                { start: 3000, density: 0.03320996298889638 },
              ],
              percentiles: { p75: 1362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.984898489848985 },
                { start: 100, end: 300, density: 0.011701170117011704 },
                { start: 300, density: 0.0034003400340034016 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8992798559711941 },
                { start: 2500, end: 4000, density: 0.07781556311262253 },
                { start: 4000, density: 0.022904580916183265 },
              ],
              percentiles: { p75: 1726 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8918108189181082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07649235076492351,
                },
                { start: "0.25", density: 0.03169683031696831 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8054805480548054 },
                { start: 200, end: 500, density: 0.17331733173317335 },
                { start: 500, density: 0.021202120212021277 },
              ],
              percentiles: { p75: 169 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1362,
        lcp: 1726,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1653903277290,
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
                  density: 0.8120999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1534 },
                { start: "0.25", density: 0.034500000000000024 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6243497398959588 },
                { start: 200, end: 500, density: 0.24289715886354554 },
                { start: 500, density: 0.13275310124049583 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47491003598560566 },
                { start: 800, end: 1800, density: 0.3967413034786084 },
                { start: 1800, density: 0.12834866053578597 },
              ],
              percentiles: { p75: 1318 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6757000000000002 },
                { start: 1800, end: 3000, density: 0.2063000000000001 },
                { start: 3000, density: 0.11799999999999973 },
              ],
              percentiles: { p75: 2110 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9205920592059206 },
                { start: 100, end: 300, density: 0.0421042104210421 },
                { start: 300, density: 0.03730373037303723 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7184281571842812 },
                { start: 2500, end: 4000, density: 0.16568343165683427 },
                { start: 4000, density: 0.11588841115888454 },
              ],
              percentiles: { p75: 2675 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2110,
        lcp: 2675,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1653903277587,
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
                  density: 0.9518951895189518,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03510351035103511,
                },
                { start: "0.25", density: 0.013001300130013022 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9239076092390761 },
                { start: 200, end: 500, density: 0.0643935606439356 },
                { start: 500, density: 0.011698830116988275 },
              ],
              percentiles: { p75: 96 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5855999999999999 },
                { start: 800, end: 1800, density: 0.3400999999999999 },
                { start: 1800, density: 0.07430000000000019 },
              ],
              percentiles: { p75: 1100 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7803560712142426 },
                { start: 1800, end: 3000, density: 0.16783356671334265 },
                { start: 3000, density: 0.05181036207241463 },
              ],
              percentiles: { p75: 1723 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.984998499849985 },
                { start: 100, end: 300, density: 0.01000100010001 },
                { start: 300, density: 0.005000500050005002 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8153000000000002 },
                { start: 2500, end: 4000, density: 0.12299999999999997 },
                { start: 4000, density: 0.06169999999999975 },
              ],
              percentiles: { p75: 2200 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1723, lcp: 2200, cls: "0.02", fid: 8 },
      timestamp: 1653903277899,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.510095961615353 },
                { start: 1800, end: 3000, density: 0.20621751299480165 },
                { start: 3000, density: 0.2836865253898454 },
              ],
              percentiles: { p75: 3323 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517048295170484 },
                { start: 100, end: 300, density: 0.03709629037096291 },
                { start: 300, density: 0.011198880111988803 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5791000000000002 },
                { start: 2500, end: 4000, density: 0.1983000000000001 },
                { start: 4000, density: 0.22259999999999966 },
              ],
              percentiles: { p75: 3807 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7423257674232577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1287871212878712,
                },
                { start: "0.25", density: 0.12888711128887112 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339566043395664 },
                { start: 800, end: 1800, density: 0.3283671632836719 },
                { start: 1800, density: 0.2376762323767617 },
              ],
              percentiles: { p75: 1767 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3323,
        lcp: 3807,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1653903278262,
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
                { start: 0, end: 1800, density: 0.510095961615353 },
                { start: 1800, end: 3000, density: 0.20621751299480165 },
                { start: 3000, density: 0.2836865253898454 },
              ],
              percentiles: { p75: 3323 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517048295170484 },
                { start: 100, end: 300, density: 0.03709629037096291 },
                { start: 300, density: 0.011198880111988803 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5791000000000002 },
                { start: 2500, end: 4000, density: 0.1983000000000001 },
                { start: 4000, density: 0.22259999999999966 },
              ],
              percentiles: { p75: 3807 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7423257674232577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1287871212878712,
                },
                { start: "0.25", density: 0.12888711128887112 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339566043395664 },
                { start: 800, end: 1800, density: 0.3283671632836719 },
                { start: 1800, density: 0.2376762323767617 },
              ],
              percentiles: { p75: 1767 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3323,
        lcp: 3807,
        cls: "0.14",
        fid: 12,
      },
      timestamp: 1653903278673,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5744148829765944 },
                { start: 2500, end: 4000, density: 0.20374074814962967 },
                { start: 4000, density: 0.22184436887377607 },
              ],
              percentiles: { p75: 3938 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.891910808919108,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07189281071892811,
                },
                { start: "0.25", density: 0.03619638036196381 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6111833550065018 },
                { start: 200, end: 500, density: 0.2877863359007702 },
                { start: 500, density: 0.101030309092728 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45249049809962033 },
                { start: 800, end: 1800, density: 0.3361672334466897 },
                { start: 1800, density: 0.21134226845369003 },
              ],
              percentiles: { p75: 1748 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5122512251225125 },
                { start: 1800, end: 3000, density: 0.2405240524052406 },
                { start: 3000, density: 0.247224722472247 },
              ],
              percentiles: { p75: 3264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3264, lcp: 3938, cls: "0.01" },
      timestamp: 1653903279013,
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
                  density: 0.9611208406304729,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01733800350262697,
                },
                { start: "0.25", density: 0.021541155866900166 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6169265033407572 },
                { start: 200, end: 500, density: 0.3229398663697104 },
                { start: 500, density: 0.06013363028953234 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32918180245632245 },
                { start: 800, end: 1800, density: 0.47016087182148414 },
                { start: 1800, density: 0.20065732572219344 },
              ],
              percentiles: { p75: 1620 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.579653137850885 },
                { start: 1800, end: 3000, density: 0.28178079742535306 },
                { start: 3000, density: 0.13856606472376193 },
              ],
              percentiles: { p75: 2400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9562017591096751 },
                { start: 100, end: 300, density: 0.008975049362771496 },
                { start: 300, density: 0.03482319152755343 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6915590161033446 },
                { start: 2500, end: 4000, density: 0.22066890815784818 },
                { start: 4000, density: 0.08777207573880719 },
              ],
              percentiles: { p75: 2822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2400,
        lcp: 2822,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903279370,
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
                  density: 0.8571142885711428,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11058894110588942,
                },
                { start: "0.25", density: 0.0322967703229677 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7120863740877734 },
                { start: 200, end: 500, density: 0.2133359992002398 },
                { start: 500, density: 0.07457762671198673 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7257274272572742 },
                { start: 800, end: 1800, density: 0.24737526247375258 },
                { start: 1800, density: 0.02689731026897314 },
              ],
              percentiles: { p75: 839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9091999999999999 },
                { start: 1800, end: 3000, density: 0.06979999999999999 },
                { start: 3000, density: 0.02100000000000006 },
              ],
              percentiles: { p75: 1242 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646106168149553 },
                { start: 100, end: 300, density: 0.017594721583524937 },
                { start: 300, density: 0.01779466160151979 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9215421542154214 },
                { start: 2500, end: 4000, density: 0.059555955595559526 },
                { start: 4000, density: 0.018901890189019104 },
              ],
              percentiles: { p75: 1672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1242,
        lcp: 1672,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653903280046,
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
                  density: 0.9666966696669667,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021002100210021003,
                },
                { start: "0.25", density: 0.01230123012301231 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6898930320903729 },
                { start: 200, end: 500, density: 0.22323303009097267 },
                { start: 500, density: 0.08687393781865443 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7596240375962404 },
                { start: 800, end: 1800, density: 0.23027697230276972 },
                { start: 1800, density: 0.0100989901009899 },
              ],
              percentiles: { p75: 789 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9324000000000001 },
                { start: 1800, end: 3000, density: 0.057499999999999996 },
                { start: 3000, density: 0.010099999999999994 },
              ],
              percentiles: { p75: 1245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643 },
                { start: 100, end: 300, density: 0.022700000000000005 },
                { start: 300, density: 0.012999999999999986 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9442944294429443 },
                { start: 2500, end: 4000, density: 0.04950495049504953 },
                { start: 4000, density: 0.0062006200620062 },
              ],
              percentiles: { p75: 1649 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1245,
        lcp: 1649,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653903280422,
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
                  density: 0.792020797920208,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16498350164983502,
                },
                { start: "0.25", density: 0.04299570042995709 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6921692169216919 },
                { start: 200, end: 500, density: 0.2190219021902189 },
                { start: 500, density: 0.08880888088808908 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7366789963011096 },
                { start: 800, end: 1800, density: 0.22733180045986207 },
                { start: 1800, density: 0.03598920323902844 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8930427828868454 },
                { start: 1800, end: 3000, density: 0.07576969212315078 },
                { start: 3000, density: 0.031187524990003847 },
              ],
              percentiles: { p75: 1295 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654034596540347 },
                { start: 100, end: 300, density: 0.018998100189981004 },
                { start: 300, density: 0.015598440155984331 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8876836948915326 },
                { start: 2500, end: 4000, density: 0.08022593222033392 },
                { start: 4000, density: 0.032090372888133524 },
              ],
              percentiles: { p75: 1814 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1295,
        lcp: 1814,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653903280770,
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
                { start: "0.00", end: "0.10", density: 0.7754 },
                { start: "0.10", end: "0.25", density: 0.1626 },
                { start: "0.25", density: 0.06199999999999996 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7817654703588927 },
                { start: 200, end: 500, density: 0.15285414375687295 },
                { start: 500, density: 0.06538038588423434 },
              ],
              percentiles: { p75: 187 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5264052810562112 },
                { start: 800, end: 1800, density: 0.38927785557111416 },
                { start: 1800, density: 0.08431686337267476 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7261726172617259 },
                { start: 1800, end: 3000, density: 0.18451845184518448 },
                { start: 3000, density: 0.08930893089308962 },
              ],
              percentiles: { p75: 1992 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644 },
                { start: 100, end: 300, density: 0.023 },
                { start: 300, density: 0.012600000000000042 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7536753675367542 },
                { start: 2500, end: 4000, density: 0.1623162316231623 },
                { start: 4000, density: 0.08400840084008343 },
              ],
              percentiles: { p75: 2584 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1992, lcp: 2584, cls: "0.07", fid: 9 },
      timestamp: 1653903281117,
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
                { start: "0.00", end: "0.10", density: 0.9137 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05829999999999999,
                },
                { start: "0.25", density: 0.02799999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6333000000000001 },
                { start: 200, end: 500, density: 0.2557 },
                { start: 500, density: 0.11099999999999996 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5128025605121019 },
                { start: 800, end: 1800, density: 0.27775555111022177 },
                { start: 1800, density: 0.20944188837767638 },
              ],
              percentiles: { p75: 1603 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6318736252749455 },
                { start: 1800, end: 3000, density: 0.1465706858628276 },
                { start: 3000, density: 0.22155568886222682 },
              ],
              percentiles: { p75: 2706 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472052794720528 },
                { start: 100, end: 300, density: 0.0324967503249675 },
                { start: 300, density: 0.020297970202979673 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.649744923477043 },
                { start: 2500, end: 4000, density: 0.18440532159647893 },
                { start: 4000, density: 0.16584975492647802 },
              ],
              percentiles: { p75: 3233 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2706,
        lcp: 3233,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903281415,
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
                  density: 0.8101999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12660000000000002,
                },
                { start: "0.25", density: 0.06320000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6127225445089015 },
                { start: 200, end: 500, density: 0.28005601120224033 },
                { start: 500, density: 0.10722144428885806 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2652000000000018 },
                { start: 800, end: 1800, density: 0.4774000000000033 },
                { start: 1800, density: 0.25739999999999486 },
              ],
              percentiles: { p75: 1858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5180554166249867 },
                { start: 1800, end: 3000, density: 0.2623787136140839 },
                { start: 3000, density: 0.21956586976092946 },
              ],
              percentiles: { p75: 2863 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9497050294970503 },
                { start: 100, end: 300, density: 0.03499650034996501 },
                { start: 300, density: 0.015298470152984741 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5734793917567013 },
                { start: 2500, end: 4000, density: 0.24194677871148396 },
                { start: 4000, density: 0.18457382953181484 },
              ],
              percentiles: { p75: 3503 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2863,
        lcp: 3503,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1653903281719,
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
                { start: "0.00", end: "0.10", density: 0.9287 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055999999999999994,
                },
                { start: "0.25", density: 0.015299999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7967203279672035 },
                { start: 1800, end: 3000, density: 0.13718628137186287 },
                { start: 3000, density: 0.06609339066093377 },
              ],
              percentiles: { p75: 1717 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8354164583541647 },
                { start: 2500, end: 4000, density: 0.12118788121187879 },
                { start: 4000, density: 0.04339566043395651 },
              ],
              percentiles: { p75: 2222 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1717, lcp: 2222, cls: "0.01" },
      timestamp: 1653903282013,
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
                { start: "0.00", end: "0.10", density: 0.8263 },
                { start: "0.10", end: "0.25", density: 0.115 },
                { start: "0.25", density: 0.058699999999999974 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7086417283456691 },
                { start: 200, end: 500, density: 0.23434686937387478 },
                { start: 500, density: 0.0570114022804561 },
              ],
              percentiles: { p75: 216 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47675232476752333 },
                { start: 800, end: 1800, density: 0.40565943405659455 },
                { start: 1800, density: 0.11758824117588224 },
              ],
              percentiles: { p75: 1306 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7112866140157955 },
                { start: 1800, end: 3000, density: 0.1757472758172549 },
                { start: 3000, density: 0.11296611016694967 },
              ],
              percentiles: { p75: 2004 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802980298029803 },
                { start: 100, end: 300, density: 0.015701570157015704 },
                { start: 300, density: 0.004000400040004001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7271272872712727 },
                { start: 2500, end: 4000, density: 0.14808519148085186 },
                { start: 4000, density: 0.12478752124787548 },
              ],
              percentiles: { p75: 2742 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2004,
        lcp: 2742,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653903282305,
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
                  density: 0.8397320535892822,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1196760647870426,
                },
                { start: "0.25", density: 0.04059188162367525 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5091981603679255 },
                { start: 200, end: 500, density: 0.34313137372525443 },
                { start: 500, density: 0.14767046590682 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6365363463653637 },
                { start: 800, end: 1800, density: 0.28287171282871715 },
                { start: 1800, density: 0.08059194080591904 },
              ],
              percentiles: { p75: 1002 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7561243875612428 },
                { start: 1800, end: 3000, density: 0.15248475152484725 },
                { start: 3000, density: 0.09139086091391008 },
              ],
              percentiles: { p75: 1812 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511853556066819 },
                { start: 100, end: 300, density: 0.03260978293488046 },
                { start: 300, density: 0.01620486145843758 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8004199580041989 },
                { start: 2500, end: 4000, density: 0.1261873812618737 },
                { start: 4000, density: 0.07339266073392749 },
              ],
              percentiles: { p75: 2264 },
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
        lcp: 2264,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653903282630,
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
                  density: 0.8173960612691464,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11892778993435446,
                },
                { start: "0.25", density: 0.063676148796499 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5831962268290005 },
                { start: 200, end: 500, density: 0.30360864319403297 },
                { start: 500, density: 0.11319512997696649 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.253070175438596 },
                { start: 800, end: 1800, density: 0.47960526315789376 },
                { start: 1800, density: 0.26732456140351035 },
              ],
              percentiles: { p75: 1886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5026914204108532 },
                { start: 1800, end: 3000, density: 0.26837306382511233 },
                { start: 3000, density: 0.22893551576403448 },
              ],
              percentiles: { p75: 2927 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9448968209704405 },
                { start: 100, end: 300, density: 0.03859453430005577 },
                { start: 300, density: 0.01650864472950365 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5620133786599399 },
                { start: 2500, end: 4000, density: 0.2536462331395982 },
                { start: 4000, density: 0.18434038820046178 },
              ],
              percentiles: { p75: 3495 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2927,
        lcp: 3495,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653903282997,
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
                { start: "0.00", end: "0.10", density: 0.8108 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17260000000000003,
                },
                { start: "0.25", density: 0.016599999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7640000000000001 },
                { start: 200, end: 500, density: 0.1715 },
                { start: 500, density: 0.06449999999999988 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7376262373762624 },
                { start: 800, end: 1800, density: 0.2257774222577742 },
                { start: 1800, density: 0.03659634036596342 },
              ],
              percentiles: { p75: 826 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9049904990499051 },
                { start: 1800, end: 3000, density: 0.07000700070007003 },
                { start: 3000, density: 0.025002500250024963 },
              ],
              percentiles: { p75: 1275 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9825017498250175 },
                { start: 100, end: 300, density: 0.009999000099990002 },
                { start: 300, density: 0.007499250074992508 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9105410541054105 },
                { start: 2500, end: 4000, density: 0.06545654565456545 },
                { start: 4000, density: 0.024002400240024 },
              ],
              percentiles: { p75: 1704 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1275, lcp: 1704, cls: "0.08", fid: 9 },
      timestamp: 1653903283450,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5609000000000003 },
                { start: 200, end: 500, density: 0.3280000000000003 },
                { start: 500, density: 0.11109999999999946 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7237895158063222 },
                { start: 800, end: 1800, density: 0.2228891556622649 },
                { start: 1800, density: 0.053321328531412984 },
              ],
              percentiles: { p75: 851 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8729127087291266 },
                { start: 1800, end: 3000, density: 0.09079092090790916 },
                { start: 3000, density: 0.03629637036296421 },
              ],
              percentiles: { p75: 1331 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556955695569556 },
                { start: 100, end: 300, density: 0.027802780278027798 },
                { start: 300, density: 0.016501650165016594 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8870935467733866 },
                { start: 2500, end: 4000, density: 0.08389194597298652 },
                { start: 4000, density: 0.02901450725362697 },
              ],
              percentiles: { p75: 1774 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8768 },
                { start: "0.10", end: "0.25", density: 0.0803 },
                { start: "0.25", density: 0.042899999999999994 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1331,
        lcp: 1774,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653903283749,
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
                { start: 0, end: 100, density: 0.8757754577091847 },
                { start: 100, end: 300, density: 0.05492510213345441 },
                { start: 300, density: 0.06929944015736081 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6653009324667983 },
                { start: 2500, end: 4000, density: 0.18013563153433163 },
                { start: 4000, density: 0.15456343599887004 },
              ],
              percentiles: { p75: 3048 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8904243439419319,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027638190954773868,
                },
                { start: "0.25", density: 0.08193746510329429 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5022898507903684 },
                { start: 200, end: 500, density: 0.3100901167085244 },
                { start: 500, density: 0.18762003250110723 },
              ],
              percentiles: { p75: 386 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3634577603143416 },
                { start: 800, end: 1800, density: 0.4489194499017679 },
                { start: 1800, density: 0.1876227897838906 },
              ],
              percentiles: { p75: 1559 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5765139696496937 },
                { start: 1800, end: 3000, density: 0.24606438803006614 },
                { start: 3000, density: 0.17742164232024002 },
              ],
              percentiles: { p75: 2522 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2522,
        lcp: 3048,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1653903284041,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8923392339233924 },
                { start: 2500, end: 4000, density: 0.08545854585458545 },
                { start: 4000, density: 0.02220222022202203 },
              ],
              percentiles: { p75: 1819 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8885888588858886,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08290829082908292,
                },
                { start: "0.25", density: 0.028502850285028504 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47124712471247104 },
                { start: 200, end: 500, density: 0.4040404040404039 },
                { start: 500, density: 0.12471247124712502 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6509349065093493 },
                { start: 800, end: 1800, density: 0.31806819318068197 },
                { start: 1800, density: 0.030996900309968895 },
              ],
              percentiles: { p75: 926 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8891221755648873 },
                { start: 1800, end: 3000, density: 0.08748250349930015 },
                { start: 3000, density: 0.023395320935812647 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.95999599959996 },
                { start: 100, end: 300, density: 0.027502750275027504 },
                { start: 300, density: 0.012501250125012539 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1376,
        lcp: 1819,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653903284499,
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
                { start: 0, end: 100, density: 0.984898489848985 },
                { start: 100, end: 300, density: 0.011701170117011704 },
                { start: 300, density: 0.0034003400340034016 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8992798559711941 },
                { start: 2500, end: 4000, density: 0.07781556311262253 },
                { start: 4000, density: 0.022904580916183265 },
              ],
              percentiles: { p75: 1723 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8918108189181082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07649235076492351,
                },
                { start: "0.25", density: 0.03169683031696831 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8054805480548054 },
                { start: 200, end: 500, density: 0.17331733173317335 },
                { start: 500, density: 0.021202120212021277 },
              ],
              percentiles: { p75: 175 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6390639063906391 },
                { start: 800, end: 1800, density: 0.3243324332433244 },
                { start: 1800, density: 0.03660366036603645 },
              ],
              percentiles: { p75: 977 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8604581374412327 },
                { start: 1800, end: 3000, density: 0.10633189956987096 },
                { start: 3000, density: 0.03320996298889638 },
              ],
              percentiles: { p75: 1359 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1359,
        lcp: 1723,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653903284852,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9575477587713822 },
                { start: 100, end: 300, density: 0.02896741166188038 },
                { start: 300, density: 0.013484829566737406 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7351658997335911 },
                { start: 2500, end: 4000, density: 0.15463792685880345 },
                { start: 4000, density: 0.11019617340760546 },
              ],
              percentiles: { p75: 2605 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9336624127137009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02383818926077534,
                },
                { start: "0.25", density: 0.04249939802552372 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4849044978435008 },
                { start: 200, end: 500, density: 0.3560073937153427 },
                { start: 500, density: 0.1590881084411565 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4754356243949661 },
                { start: 800, end: 1800, density: 0.414569215876089 },
                { start: 1800, density: 0.10999515972894493 },
              ],
              percentiles: { p75: 1220 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.639397985192377 },
                { start: 1800, end: 3000, density: 0.21944410729457428 },
                { start: 3000, density: 0.14115790751304869 },
              ],
              percentiles: { p75: 2238 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2238,
        lcp: 2605,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903285311,
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
                  density: 0.8454058778542554,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1043373757238064,
                },
                { start: "0.25", density: 0.05025674642193812 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.653248042351384 },
                { start: 200, end: 500, density: 0.26392412043674857 },
                { start: 500, density: 0.08282783721186747 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46344948884247494 },
                { start: 800, end: 1800, density: 0.41189403099923005 },
                { start: 1800, density: 0.12465648015829495 },
              ],
              percentiles: { p75: 1321 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.699583516001753 },
                { start: 1800, end: 3000, density: 0.18884261288908358 },
                { start: 3000, density: 0.1115738711091635 },
              ],
              percentiles: { p75: 2045 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9538943598925693 },
                { start: 100, end: 300, density: 0.03670546105640106 },
                { start: 300, density: 0.009400179051029517 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7653563998686083 },
                { start: 2500, end: 4000, density: 0.14190298916018831 },
                { start: 4000, density: 0.09274061097120334 },
              ],
              percentiles: { p75: 2434 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2045,
        lcp: 2434,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653903285758,
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
                { start: 0, end: 1800, density: 0.510095961615353 },
                { start: 1800, end: 3000, density: 0.20621751299480165 },
                { start: 3000, density: 0.2836865253898454 },
              ],
              percentiles: { p75: 3362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517048295170484 },
                { start: 100, end: 300, density: 0.03709629037096291 },
                { start: 300, density: 0.011198880111988803 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5791000000000002 },
                { start: 2500, end: 4000, density: 0.1983000000000001 },
                { start: 4000, density: 0.22259999999999966 },
              ],
              percentiles: { p75: 3789 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7423257674232577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1287871212878712,
                },
                { start: "0.25", density: 0.12888711128887112 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339566043395664 },
                { start: 800, end: 1800, density: 0.3283671632836719 },
                { start: 1800, density: 0.2376762323767617 },
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
        fcp: 3362,
        lcp: 3789,
        cls: "0.11",
        fid: 14,
      },
      timestamp: 1653903286205,
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
                  density: 0.8351835183518352,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11851185118511852,
                },
                { start: "0.25", density: 0.04630463046304631 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7355471094218843 },
                { start: 200, end: 500, density: 0.18423684736947393 },
                { start: 500, density: 0.08021604320864173 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8661866186618662 },
                { start: 800, end: 1800, density: 0.12021202120212018 },
                { start: 1800, density: 0.013601360136013652 },
              ],
              percentiles: { p75: 663 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.94518355506652 },
                { start: 1800, end: 3000, density: 0.04171251375412625 },
                { start: 3000, density: 0.013103931179353805 },
              ],
              percentiles: { p75: 1101 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657931586317262 },
                { start: 100, end: 300, density: 0.016903380676135227 },
                { start: 300, density: 0.017303460692138558 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9503851155346604 },
                { start: 2500, end: 4000, density: 0.0386115834750425 },
                { start: 4000, density: 0.011003300990297081 },
              ],
              percentiles: { p75: 1506 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1101,
        lcp: 1506,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653903286752,
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
                { start: 0, end: 2500, density: 0.7761223877612231 },
                { start: 2500, end: 4000, density: 0.1381861813818617 },
                { start: 4000, density: 0.08569143085691512 },
              ],
              percentiles: { p75: 2396 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9302 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038599999999999995,
                },
                { start: "0.25", density: 0.03119999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6138613861386136 },
                { start: 200, end: 500, density: 0.2665266526652664 },
                { start: 500, density: 0.11961196119611994 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5325532553255324 },
                { start: 800, end: 1800, density: 0.37143714371437137 },
                { start: 1800, density: 0.09600960096009625 },
              ],
              percentiles: { p75: 1145 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.722155568886222 },
                { start: 1800, end: 3000, density: 0.17706458708258332 },
                { start: 3000, density: 0.1007798440311947 },
              ],
              percentiles: { p75: 1914 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668099570128962 },
                { start: 100, end: 300, density: 0.025592322303309007 },
                { start: 300, density: 0.007597720683794857 },
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
        fcp: 1914,
        lcp: 2396,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903287110,
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
                { start: 0, end: 2500, density: 0.9143414341434144 },
                { start: 2500, end: 4000, density: 0.06865686568656866 },
                { start: 4000, density: 0.0170017001700168 },
              ],
              percentiles: { p75: 1714 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8932 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09230000000000002,
                },
                { start: "0.25", density: 0.014499999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6735347069413883 },
                { start: 200, end: 500, density: 0.26875375075015007 },
                { start: 500, density: 0.05771154230846155 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6964303569643036 },
                { start: 800, end: 1800, density: 0.27547245275472454 },
                { start: 1800, density: 0.02809719028097185 },
              ],
              percentiles: { p75: 862 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9025000000000001 },
                { start: 1800, end: 3000, density: 0.07789999999999998 },
                { start: 3000, density: 0.019599999999999878 },
              ],
              percentiles: { p75: 1339 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.979097909790979 },
                { start: 100, end: 300, density: 0.015001500150015 },
                { start: 300, density: 0.005900590059005911 },
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
        fcp: 1339,
        lcp: 1714,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903287428,
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
                  density: 0.7423257674232577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1287871212878712,
                },
                { start: "0.25", density: 0.12888711128887112 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339566043395664 },
                { start: 800, end: 1800, density: 0.3283671632836719 },
                { start: 1800, density: 0.2376762323767617 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.510095961615353 },
                { start: 1800, end: 3000, density: 0.20621751299480165 },
                { start: 3000, density: 0.2836865253898454 },
              ],
              percentiles: { p75: 3362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517048295170484 },
                { start: 100, end: 300, density: 0.03709629037096291 },
                { start: 300, density: 0.011198880111988803 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5791000000000002 },
                { start: 2500, end: 4000, density: 0.1983000000000001 },
                { start: 4000, density: 0.22259999999999966 },
              ],
              percentiles: { p75: 3789 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3362,
        lcp: 3789,
        cls: "0.11",
        fid: 14,
      },
      timestamp: 1653903287777,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9159806611786229 },
                { start: 1800, end: 3000, density: 0.06219783091598068 },
                { start: 3000, density: 0.02182150790539648 },
              ],
              percentiles: { p75: 1215 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9343454521241178 },
                { start: 100, end: 300, density: 0.03595685177786656 },
                { start: 300, density: 0.029697696098015758 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9145544813169584 },
                { start: 2500, end: 4000, density: 0.06937548993990071 },
                { start: 4000, density: 0.016070028743140983 },
              ],
              percentiles: { p75: 1748 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9025341130604289,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06510721247563353,
                },
                { start: "0.25", density: 0.03235867446393761 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42920067366239095 },
                { start: 200, end: 500, density: 0.39603575592693296 },
                { start: 500, density: 0.17476357041067606 },
              ],
              percentiles: { p75: 380 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.83370346178968 },
                { start: 800, end: 1800, density: 0.1400391900718485 },
                { start: 1800, density: 0.026257348138471553 },
              ],
              percentiles: { p75: 695 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1215,
        lcp: 1748,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903288238,
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
                { start: 0, end: 2500, density: 0.7974205158968203 },
                { start: 2500, end: 4000, density: 0.1260347930413917 },
                { start: 4000, density: 0.076544691061788 },
              ],
              percentiles: { p75: 2227 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8427838128208189,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10779515339620387,
                },
                { start: "0.25", density: 0.04942103378297723 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7313432835820896 },
                { start: 200, end: 500, density: 0.21380900376167936 },
                { start: 500, density: 0.05484771265623114 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5016270941304082 },
                { start: 800, end: 1800, density: 0.38278895986501127 },
                { start: 1800, density: 0.11558394600458055 },
              ],
              percentiles: { p75: 1236 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7430154142581881 },
                { start: 1800, end: 3000, density: 0.14968689788053932 },
                { start: 3000, density: 0.10729768786127244 },
              ],
              percentiles: { p75: 1839 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588061174148987 },
                { start: 100, end: 300, density: 0.029600394671928956 },
                { start: 300, density: 0.01159348791317219 },
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
        fcp: 1839,
        lcp: 2227,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1653903288815,
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
                { start: "0.00", end: "0.10", density: 0.8844 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06609999999999999,
                },
                { start: "0.25", density: 0.049499999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6300630063006306 },
                { start: 200, end: 500, density: 0.27982798279828014 },
                { start: 500, density: 0.09010901090108919 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45679135827165435 },
                { start: 800, end: 1800, density: 0.41578315663132626 },
                { start: 1800, density: 0.12742548509701937 },
              ],
              percentiles: { p75: 1325 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6367999999999987 },
                { start: 1800, end: 3000, density: 0.2124999999999997 },
                { start: 3000, density: 0.1507000000000015 },
              ],
              percentiles: { p75: 2313 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551820728291315 },
                { start: 100, end: 300, density: 0.026910764305722285 },
                { start: 300, density: 0.017907162865146188 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7101710171017089 },
                { start: 2500, end: 4000, density: 0.16151615161516125 },
                { start: 4000, density: 0.12831283128312973 },
              ],
              percentiles: { p75: 2782 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2313,
        lcp: 2782,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903289290,
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
                { start: "0.00", end: "0.10", density: 0.881 },
                { start: "0.10", end: "0.25", density: 0.0714 },
                { start: "0.25", density: 0.04760000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4679935987197443 },
                { start: 200, end: 500, density: 0.37727545509101856 },
                { start: 500, density: 0.15473094618923725 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5619999999999994 },
                { start: 800, end: 1800, density: 0.3564999999999997 },
                { start: 1800, density: 0.08150000000000102 },
              ],
              percentiles: { p75: 1113 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7461999999999994 },
                { start: 1800, end: 3000, density: 0.16849999999999982 },
                { start: 3000, density: 0.08530000000000078 },
              ],
              percentiles: { p75: 1823 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9216078392160785 },
                { start: 100, end: 300, density: 0.0475952404759524 },
                { start: 300, density: 0.030796920307969138 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7995200479952005 },
                { start: 2500, end: 4000, density: 0.13078692130786923 },
                { start: 4000, density: 0.06969303069693027 },
              ],
              percentiles: { p75: 2275 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1823,
        lcp: 2275,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1653903289610,
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
                { start: "0.00", end: "0.10", density: 0.9287 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055999999999999994,
                },
                { start: "0.25", density: 0.015299999999999998 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7967203279672035 },
                { start: 1800, end: 3000, density: 0.13718628137186287 },
                { start: 3000, density: 0.06609339066093377 },
              ],
              percentiles: { p75: 1718 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8354164583541647 },
                { start: 2500, end: 4000, density: 0.12118788121187879 },
                { start: 4000, density: 0.04339566043395651 },
              ],
              percentiles: { p75: 2114 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1718, lcp: 2114, cls: "0.00" },
      timestamp: 1653903289925,
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
                { start: 0, end: 100, density: 0.954228855721393 },
                { start: 100, end: 300, density: 0.03134328358208956 },
                { start: 300, density: 0.0144278606965174 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9013248343957004 },
                { start: 2500, end: 4000, density: 0.07905261842269719 },
                { start: 4000, density: 0.019622547181602397 },
              ],
              percentiles: { p75: 1802 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9444237687631807,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03895298350080635,
                },
                { start: "0.25", density: 0.0166232477360129 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4151500245941958 },
                { start: 200, end: 500, density: 0.4471224790949336 },
                { start: 500, density: 0.13772749631087064 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6408881127603843 },
                { start: 800, end: 1800, density: 0.3284270924285893 },
                { start: 1800, density: 0.030684794811026404 },
              ],
              percentiles: { p75: 934 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8858682034577803 },
                { start: 1800, end: 3000, density: 0.09045352042094719 },
                { start: 3000, density: 0.0236782761212726 },
              ],
              percentiles: { p75: 1391 },
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
        lcp: 1802,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903290421,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6020183273402159 },
                { start: 800, end: 1800, density: 0.3593550632177241 },
                { start: 1800, density: 0.0386266094420601 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7835447457232635 },
                { start: 1800, end: 3000, density: 0.16536715931572216 },
                { start: 3000, density: 0.05108809496101446 },
              ],
              percentiles: { p75: 1708 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9507659922816044 },
                { start: 100, end: 300, density: 0.027833001988071576 },
                { start: 300, density: 0.021401005730323996 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8311861652739089 },
                { start: 2500, end: 4000, density: 0.12494196843082633 },
                { start: 4000, density: 0.04387186629526484 },
              ],
              percentiles: { p75: 2152 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8817653890824623,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08977932636469221,
                },
                { start: "0.25", density: 0.028455284552845513 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5533064979873492 },
                { start: 200, end: 500, density: 0.32190914318573893 },
                { start: 500, density: 0.12478435882691188 },
              ],
              percentiles: { p75: 305 },
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
        lcp: 2152,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903291002,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8783303730017765 },
                { start: 2500, end: 4000, density: 0.08936500888099466 },
                { start: 4000, density: 0.03230461811722881 },
              ],
              percentiles: { p75: 1899 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9312403272164492,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059363254477116954,
                },
                { start: "0.25", density: 0.009396418306433792 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6086284894626502 },
                { start: 200, end: 500, density: 0.3055279708705726 },
                { start: 500, density: 0.08584353966677713 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5847608453837596 },
                { start: 800, end: 1800, density: 0.36740823136818695 },
                { start: 1800, density: 0.04783092324805347 },
              ],
              percentiles: { p75: 990 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8638382940915147 },
                { start: 1800, end: 3000, density: 0.09440248778320744 },
                { start: 3000, density: 0.041759218125277844 },
              ],
              percentiles: { p75: 1476 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532438478747204 },
                { start: 100, end: 300, density: 0.02583892617449664 },
                { start: 300, density: 0.020917225950783023 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1476,
        lcp: 1899,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903291532,
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
                { start: 0, end: 100, density: 0.960482725982016 },
                { start: 100, end: 300, density: 0.02176999526739233 },
                { start: 300, density: 0.01774727875059159 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.904420273084934 },
                { start: 2500, end: 4000, density: 0.07035408470261516 },
                { start: 4000, density: 0.02522564221245077 },
              ],
              percentiles: { p75: 1769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9394076418720326,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044313814153289624,
                },
                { start: "0.25", density: 0.016278543974677817 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5237265999129301 },
                { start: 200, end: 500, density: 0.34653896386591226 },
                { start: 500, density: 0.12973443622115763 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6736745886654479 },
                { start: 800, end: 1800, density: 0.2872486288848263 },
                { start: 1800, density: 0.039076782449725754 },
              ],
              percentiles: { p75: 901 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8855824682814303 },
                { start: 1800, end: 3000, density: 0.07635524798154555 },
                { start: 3000, density: 0.03806228373702415 },
              ],
              percentiles: { p75: 1407 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1407,
        lcp: 1769,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903292025,
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
                  density: 0.9487139996919759,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030340366548590795,
                },
                { start: "0.25", density: 0.020945633759433244 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.613425232244531 },
                { start: 200, end: 500, density: 0.2695534911597243 },
                { start: 500, density: 0.11702127659574453 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8515099358472851 },
                { start: 800, end: 1800, density: 0.13487717102174934 },
                { start: 1800, density: 0.013612893130965512 },
              ],
              percentiles: { p75: 703 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9360866834170855 },
                { start: 1800, end: 3000, density: 0.04805276381909548 },
                { start: 3000, density: 0.015860552763819126 },
              ],
              percentiles: { p75: 1199 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467933491686459 },
                { start: 100, end: 300, density: 0.025811559778305612 },
                { start: 300, density: 0.027395091053048503 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9412636505460218 },
                { start: 2500, end: 4000, density: 0.04485179407176286 },
                { start: 4000, density: 0.013884555382215315 },
              ],
              percentiles: { p75: 1557 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1199,
        lcp: 1557,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903292580,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26122949563084497 },
                { start: 800, end: 1800, density: 0.382646021769125 },
                { start: 1800, density: 0.3561244826000301 },
              ],
              percentiles: { p75: 2138 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44353846153846105 },
                { start: 1800, end: 3000, density: 0.31307692307692264 },
                { start: 3000, density: 0.2433846153846162 },
              ],
              percentiles: { p75: 2981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9168631148829166 },
                { start: 100, end: 300, density: 0.046047461889046036 },
                { start: 300, density: 0.03708942322803733 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.567394983843667 },
                { start: 2500, end: 4000, density: 0.2765810124634553 },
                { start: 4000, density: 0.15602400369287778 },
              ],
              percentiles: { p75: 3328 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9456979542719616,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030685920577617334,
                },
                { start: "0.25", density: 0.02361612515042115 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4757176105508156 },
                { start: 200, end: 500, density: 0.34290147401086185 },
                { start: 500, density: 0.18138091543832255 },
              ],
              percentiles: { p75: 370 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2981,
        lcp: 3328,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1653903293144,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9081032719836398 },
                { start: 100, end: 300, density: 0.041411042944785266 },
                { start: 300, density: 0.05048568507157475 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6494575622208036 },
                { start: 2500, end: 4000, density: 0.26158264199106557 },
                { start: 4000, density: 0.08895979578813087 },
              ],
              percentiles: { p75: 3026 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9313737857953829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03115932887599344,
                },
                { start: "0.25", density: 0.037466885328623654 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5023815492604672 },
                { start: 200, end: 500, density: 0.300952619704187 },
                { start: 500, density: 0.1966658310353459 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2963627049180329 },
                { start: 800, end: 1800, density: 0.44902663934426246 },
                { start: 1800, density: 0.25461065573770464 },
              ],
              percentiles: { p75: 1935 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4983320502950983 },
                { start: 1800, end: 3000, density: 0.3618167821401074 },
                { start: 3000, density: 0.1398511675647943 },
              ],
              percentiles: { p75: 2619 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2619,
        lcp: 3026,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903293655,
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
                { start: 0, end: 200, density: 0.5206638821719062 },
                { start: 200, end: 500, density: 0.36216750934271286 },
                { start: 500, density: 0.11716860848538097 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6644144144144146 },
                { start: 800, end: 1800, density: 0.29054054054054057 },
                { start: 1800, density: 0.04504504504504476 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8124932570935371 },
                { start: 1800, end: 3000, density: 0.13313194519365615 },
                { start: 3000, density: 0.05437479771280673 },
              ],
              percentiles: { p75: 1613 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9439664681226562 },
                { start: 100, end: 300, density: 0.03673064195896758 },
                { start: 300, density: 0.01930288991837624 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.867936643835616 },
                { start: 2500, end: 4000, density: 0.09160958904109584 },
                { start: 4000, density: 0.04045376712328818 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9102249706791767,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07740697302484273,
                },
                { start: "0.25", density: 0.012368056295980395 },
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
        fcp: 1613,
        lcp: 1952,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903294172,
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
                { start: 0, end: 1800, density: 0.8563997096540044 },
                { start: 1800, end: 3000, density: 0.1102105008468425 },
                { start: 3000, density: 0.03338978949915312 },
              ],
              percentiles: { p75: 1447 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637066600149664 },
                { start: 100, end: 300, density: 0.026939386380643554 },
                { start: 300, density: 0.009353953604390114 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8876662636033857 },
                { start: 2500, end: 4000, density: 0.0889963724304716 },
                { start: 4000, density: 0.023337363966142693 },
              ],
              percentiles: { p75: 1875 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9386229350054263,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04811286627276015,
                },
                { start: "0.25", density: 0.013264198721813574 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5802100740033419 },
                { start: 200, end: 500, density: 0.3405347338266889 },
                { start: 500, density: 0.07925519216996922 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6286443148688046 },
                { start: 800, end: 1800, density: 0.32847424684159376 },
                { start: 1800, density: 0.04288143828960157 },
              ],
              percentiles: { p75: 982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1447,
        lcp: 1875,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903294732,
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
                  density: 0.9652413431269675,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021379853095487934,
                },
                { start: "0.25", density: 0.013378803777544591 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4676693662424474 },
                { start: 200, end: 500, density: 0.3972232934824527 },
                { start: 500, density: 0.1351073402750998 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7028101802757156 },
                { start: 800, end: 1800, density: 0.2366118769883351 },
                { start: 1800, density: 0.060577942735949256 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8578801111552198 },
                { start: 1800, end: 3000, density: 0.10123064708217541 },
                { start: 3000, density: 0.040889241762604826 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443866943866944 },
                { start: 100, end: 300, density: 0.03495322245322246 },
                { start: 300, density: 0.020660083160083186 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8818529256721142 },
                { start: 2500, end: 4000, density: 0.08809963099631002 },
                { start: 4000, density: 0.03004744333157589 },
              ],
              percentiles: { p75: 1818 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1382,
        lcp: 1818,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653903295284,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7323108384458075 },
                { start: 2500, end: 4000, density: 0.19631901840490784 },
                { start: 4000, density: 0.07137014314928468 },
              ],
              percentiles: { p75: 2668 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9562688064192576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022266800401203605,
                },
                { start: "0.25", density: 0.021464393179538625 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6217409587888987 },
                { start: 200, end: 500, density: 0.27270815811606414 },
                { start: 500, density: 0.10555088309503712 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40531010163866404 },
                { start: 800, end: 1800, density: 0.48226509023024244 },
                { start: 1800, density: 0.11242480813109357 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6213932399010713 },
                { start: 1800, end: 3000, density: 0.2605111294311622 },
                { start: 3000, density: 0.11809563066776645 },
              ],
              percentiles: { p75: 2413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9335541295797971 },
                { start: 100, end: 300, density: 0.04036431380666528 },
                { start: 300, density: 0.026081556613537654 },
              ],
              percentiles: { p75: 13 },
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
        lcp: 2668,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903295806,
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
                  density: 0.9371869500473805,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024637877352105046,
                },
                { start: "0.25", density: 0.03817517260051443 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6117006422786933 },
                { start: 200, end: 500, density: 0.3445964814297683 },
                { start: 500, density: 0.043702876291538434 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28384100532714096 },
                { start: 800, end: 1800, density: 0.5501980603742656 },
                { start: 1800, density: 0.16596093429859354 },
              ],
              percentiles: { p75: 1563 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5078562645170102 },
                { start: 1800, end: 3000, density: 0.3115179669353734 },
                { start: 3000, density: 0.18062576854761642 },
              ],
              percentiles: { p75: 2598 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706886738759248 },
                { start: 100, end: 300, density: 0.02233921457029026 },
                { start: 300, density: 0.0069721115537848665 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6619488296134997 },
                { start: 2500, end: 4000, density: 0.23162765378334219 },
                { start: 4000, density: 0.10642351660315814 },
              ],
              percentiles: { p75: 2893 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2598,
        lcp: 2893,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903296333,
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
                  density: 0.8900999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0826 },
                { start: "0.25", density: 0.02730000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5770000000000003 },
                { start: 200, end: 500, density: 0.3027000000000002 },
                { start: 500, density: 0.12029999999999953 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6091999999999999 },
                { start: 800, end: 1800, density: 0.35399999999999987 },
                { start: 1800, density: 0.03680000000000013 },
              ],
              percentiles: { p75: 979 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7898420315936812 },
                { start: 1800, end: 3000, density: 0.1605678864227155 },
                { start: 3000, density: 0.04959008198360341 },
              ],
              percentiles: { p75: 1689 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9535000000000001 },
                { start: 100, end: 300, density: 0.026000000000000002 },
                { start: 300, density: 0.020499999999999928 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8239499999999998 },
                { start: 2500, end: 4000, density: 0.12925 },
                { start: 4000, density: 0.046800000000000196 },
              ],
              percentiles: { p75: 2180 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1689,
        lcp: 2180,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903296936,
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
                { start: 0, end: 100, density: 0.9493746873436717 },
                { start: 100, end: 300, density: 0.028314157078539265 },
                { start: 300, density: 0.022311155577788924 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9225154969006198 },
                { start: 2500, end: 4000, density: 0.06148770245950809 },
                { start: 4000, density: 0.015996800639872022 },
              ],
              percentiles: { p75: 1700 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8742000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09300000000000001,
                },
                { start: "0.25", density: 0.0328 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5430370888733372 },
                { start: 200, end: 500, density: 0.3151054683594917 },
                { start: 500, density: 0.14185744276717105 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8558567570271082 },
                { start: 800, end: 1800, density: 0.12123637091127339 },
                { start: 1800, density: 0.02290687206161843 },
              ],
              percentiles: { p75: 662 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9282143571285744 },
                { start: 1800, end: 3000, density: 0.05258948210357928 },
                { start: 3000, density: 0.01919616076784638 },
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
        lcp: 1700,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653903297323,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7584516903380676 },
                { start: 1800, end: 3000, density: 0.15093018603720748 },
                { start: 3000, density: 0.09061812362472499 },
              ],
              percentiles: { p75: 1773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9761000000000001 },
                { start: 100, end: 300, density: 0.0179 },
                { start: 300, density: 0.005999999999999971 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7841352405721713 },
                { start: 2500, end: 4000, density: 0.13093928178453532 },
                { start: 4000, density: 0.08492547764329345 },
              ],
              percentiles: { p75: 2312 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8377837783778378,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1334133413341334,
                },
                { start: "0.25", density: 0.02880288028802883 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8004999999999994 },
                { start: 200, end: 500, density: 0.1433999999999999 },
                { start: 500, density: 0.05610000000000057 },
              ],
              percentiles: { p75: 173 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6113834150245068 },
                { start: 800, end: 1800, density: 0.2960888266479941 },
                { start: 1800, density: 0.09252775832749918 },
              ],
              percentiles: { p75: 1106 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1773,
        lcp: 2312,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653903297683,
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
                  density: 0.9401388085598612,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03441295546558704,
                },
                { start: "0.25", density: 0.025448235974551776 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5090424786204967 },
                { start: 200, end: 500, density: 0.37431655684845117 },
                { start: 500, density: 0.11664096453105206 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7409158050221567 },
                { start: 800, end: 1800, density: 0.2319054652880354 },
                { start: 1800, density: 0.027178729689808022 },
              ],
              percentiles: { p75: 838 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8886131386861315 },
                { start: 1800, end: 3000, density: 0.08321167883211678 },
                { start: 3000, density: 0.028175182481751784 },
              ],
              percentiles: { p75: 1350 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.929428989751098 },
                { start: 100, end: 300, density: 0.04040995607613469 },
                { start: 300, density: 0.030161054172767265 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.90442037470726 },
                { start: 2500, end: 4000, density: 0.0749414519906323 },
                { start: 4000, density: 0.020638173302107696 },
              ],
              percentiles: { p75: 1819 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1350,
        lcp: 1819,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903298038,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9486102779444112 },
                { start: 100, end: 300, density: 0.033793241351729654 },
                { start: 300, density: 0.01759648070385912 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8696239247849566 },
                { start: 2500, end: 4000, density: 0.0908681736347269 },
                { start: 4000, density: 0.039507901580316536 },
              ],
              percentiles: { p75: 1942 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8840884088408841,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09860986098609861,
                },
                { start: "0.25", density: 0.0173017301730173 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5548000000000003 },
                { start: 200, end: 500, density: 0.3359000000000003 },
                { start: 500, density: 0.10929999999999945 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6731038623173907 },
                { start: 800, end: 1800, density: 0.2838703221933161 },
                { start: 1800, density: 0.04302581548929331 },
              ],
              percentiles: { p75: 909 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8189637927585511 },
                { start: 1800, end: 3000, density: 0.1287257451490297 },
                { start: 3000, density: 0.05231046209241904 },
              ],
              percentiles: { p75: 1594 },
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
        lcp: 1942,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903298574,
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
                { start: 0, end: 800, density: 0.515378937007874 },
                { start: 800, end: 1800, density: 0.37992125984251957 },
                { start: 1800, density: 0.10469980314960664 },
              ],
              percentiles: { p75: 1178 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7022485791944645 },
                { start: 1800, end: 3000, density: 0.18890536199654046 },
                { start: 3000, density: 0.10884605880899507 },
              ],
              percentiles: { p75: 1976 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598632565206382 },
                { start: 100, end: 300, density: 0.03165358318561661 },
                { start: 300, density: 0.008483160293745245 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7794843325931399 },
                { start: 2500, end: 4000, density: 0.13810757463607187 },
                { start: 4000, density: 0.08240809277078817 },
              ],
              percentiles: { p75: 2366 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9593187109422866,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013723808356819021,
                },
                { start: "0.25", density: 0.0269574807008945 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5520107566312188 },
                { start: 200, end: 500, density: 0.3131646497983132 },
                { start: 500, density: 0.13482459357046803 },
              ],
              percentiles: { p75: 319 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1976,
        lcp: 2366,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903298935,
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
                  density: 0.7897210278972102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1287871212878712,
                },
                { start: "0.25", density: 0.08149185081491857 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6296370362963695 },
                { start: 200, end: 500, density: 0.23937606239376027 },
                { start: 500, density: 0.13098690130987023 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2936293629362961 },
                { start: 800, end: 1800, density: 0.39473947394739806 },
                { start: 1800, density: 0.31163116311630584 },
              ],
              percentiles: { p75: 2006 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5144485551444853 },
                { start: 1800, end: 3000, density: 0.2832716728327166 },
                { start: 3000, density: 0.20227977202279823 },
              ],
              percentiles: { p75: 2725 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9385000000000001 },
                { start: 100, end: 300, density: 0.034 },
                { start: 300, density: 0.02749999999999996 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6060181945416367 },
                { start: 2500, end: 4000, density: 0.24832550234929487 },
                { start: 4000, density: 0.14565630310906844 },
              ],
              percentiles: { p75: 3180 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2725,
        lcp: 3180,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1653903299573,
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
                  density: 0.9585161047750345,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019175335255044494,
                },
                { start: "0.25", density: 0.02230855996992104 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5573326454275769 },
                { start: 200, end: 500, density: 0.3607635753901719 },
                { start: 500, density: 0.08190377918225125 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.441942828231723 },
                { start: 800, end: 1800, density: 0.442448773083734 },
                { start: 1800, density: 0.11560839868454305 },
              ],
              percentiles: { p75: 1304 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5890826383623955 },
                { start: 1800, end: 3000, density: 0.2643416729845842 },
                { start: 3000, density: 0.14657568865302034 },
              ],
              percentiles: { p75: 2395 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964907819453274 },
                { start: 100, end: 300, density: 0.024157660521296878 },
                { start: 300, density: 0.0109345200254291 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7043269230769222 },
                { start: 2500, end: 4000, density: 0.19407894736842077 },
                { start: 4000, density: 0.10159412955465703 },
              ],
              percentiles: { p75: 2726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2395,
        lcp: 2726,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903299940,
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
                { start: 0, end: 200, density: 0.5865000000000009 },
                { start: 200, end: 500, density: 0.25270000000000037 },
                { start: 500, density: 0.1607999999999987 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29237076292370795 },
                { start: 800, end: 1800, density: 0.46085391460853947 },
                { start: 1800, density: 0.2467753224677527 },
              ],
              percentiles: { p75: 1907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5302939412117581 },
                { start: 1800, end: 3000, density: 0.3348330333933217 },
                { start: 3000, density: 0.1348730253949201 },
              ],
              percentiles: { p75: 2560 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9236923692369238 },
                { start: 100, end: 300, density: 0.035303530353035295 },
                { start: 300, density: 0.04100410041004105 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6566469940982296 },
                { start: 2500, end: 4000, density: 0.24892467740322097 },
                { start: 4000, density: 0.09442832849854943 },
              ],
              percentiles: { p75: 3026 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8516851685168517,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08150815081508152,
                },
                { start: "0.25", density: 0.0668066806680668 },
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
        fcp: 2560,
        lcp: 3026,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1653903300496,
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
                  density: 0.9686968696869687,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020902090209020903,
                },
                { start: "0.25", density: 0.010401040104010406 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5653304008797364 },
                { start: 200, end: 500, density: 0.33579926022193357 },
                { start: 500, density: 0.09887033889833008 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4653534646535342 },
                { start: 800, end: 1800, density: 0.358664133586641 },
                { start: 1800, density: 0.1759824017598247 },
              ],
              percentiles: { p75: 1646 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5822835432913416 },
                { start: 1800, end: 3000, density: 0.3148370325934813 },
                { start: 3000, density: 0.10287942411517716 },
              ],
              percentiles: { p75: 2274 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9338 },
                { start: 100, end: 300, density: 0.048499999999999995 },
                { start: 300, density: 0.017700000000000035 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6506999999999994 },
                { start: 2500, end: 4000, density: 0.2546999999999998 },
                { start: 4000, density: 0.09460000000000075 },
              ],
              percentiles: { p75: 2944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2274,
        lcp: 2944,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903300860,
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
                { start: 0, end: 800, density: 0.7201000000000001 },
                { start: 800, end: 1800, density: 0.22530000000000003 },
                { start: 1800, density: 0.05459999999999991 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8354329134173164 },
                { start: 1800, end: 3000, density: 0.0981803639272145 },
                { start: 3000, density: 0.06638672265546924 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9667 },
                { start: 100, end: 300, density: 0.0205 },
                { start: 300, density: 0.012800000000000021 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8510148985101484 },
                { start: 2500, end: 4000, density: 0.0996900309969003 },
                { start: 4000, density: 0.0492950704929512 },
              ],
              percentiles: { p75: 1941 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9575 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028999999999999998,
                },
                { start: "0.25", density: 0.01350000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6081391860813914 },
                { start: 200, end: 500, density: 0.32006799320067975 },
                { start: 500, density: 0.07179282071792878 },
              ],
              percentiles: { p75: 265 },
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
        lcp: 1941,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653903301218,
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
                  density: 0.9732142857142856,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012548262548262546,
                },
                { start: "0.25", density: 0.014237451737451735 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6798331697742884 },
                { start: 200, end: 500, density: 0.2690137389597643 },
                { start: 500, density: 0.05115309126594734 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39106280193236653 },
                { start: 800, end: 1800, density: 0.47451690821255965 },
                { start: 1800, density: 0.13442028985507376 },
              ],
              percentiles: { p75: 1364 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5947291717269853 },
                { start: 1800, end: 3000, density: 0.27131406363857163 },
                { start: 3000, density: 0.13395676463444298 },
              ],
              percentiles: { p75: 2296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9753490127028047 },
                { start: 100, end: 300, density: 0.019620173563073825 },
                { start: 300, density: 0.005030813734121496 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7390401758456464 },
                { start: 2500, end: 4000, density: 0.15642935645377937 },
                { start: 4000, density: 0.10453046770057424 },
              ],
              percentiles: { p75: 2601 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2296,
        lcp: 2601,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903301597,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6295986622073578 },
                { start: 200, end: 500, density: 0.31270903010033446 },
                { start: 500, density: 0.057692307692307716 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43820853743876836 },
                { start: 800, end: 1800, density: 0.422673198040588 },
                { start: 1800, density: 0.1391182645206437 },
              ],
              percentiles: { p75: 1346 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6784269976293406 },
                { start: 1800, end: 3000, density: 0.19495188955515275 },
                { start: 3000, density: 0.12662111281550667 },
              ],
              percentiles: { p75: 2137 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9736029205279415 },
                { start: 100, end: 300, density: 0.02078067958438641 },
                { start: 300, density: 0.005616399887672003 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7233435412026733 },
                { start: 2500, end: 4000, density: 0.1556932071269489 },
                { start: 4000, density: 0.12096325167037777 },
              ],
              percentiles: { p75: 2730 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9349267753523072,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02003315833103067,
                },
                { start: "0.25", density: 0.045040066316662075 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2137,
        lcp: 2730,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903302225,
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
                { start: 0, end: 200, density: 0.7315999999999998 },
                { start: 200, end: 500, density: 0.22489999999999996 },
                { start: 500, density: 0.04350000000000024 },
              ],
              percentiles: { p75: 209 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4253425342534249 },
                { start: 800, end: 1800, density: 0.4580458045804576 },
                { start: 1800, density: 0.11661166116611739 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6373450619752092 },
                { start: 1800, end: 3000, density: 0.2452019192323068 },
                { start: 3000, density: 0.11745301879248393 },
              ],
              percentiles: { p75: 2186 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.97990200979902 },
                { start: 100, end: 300, density: 0.016098390160983897 },
                { start: 300, density: 0.003999600039996001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7488248824882482 },
                { start: 2500, end: 4000, density: 0.14946494649464934 },
                { start: 4000, density: 0.10171017101710247 },
              ],
              percentiles: { p75: 2563 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9448000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04020000000000001,
                },
                { start: "0.25", density: 0.015000000000000001 },
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
        lcp: 2563,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903302795,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9468581246931761 },
                { start: 100, end: 300, density: 0.031786941580756005 },
                { start: 300, density: 0.0213549337260679 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7017110495240382 },
                { start: 2500, end: 4000, density: 0.1655018676949028 },
                { start: 4000, density: 0.13278708278105886 },
              ],
              percentiles: { p75: 2811 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9391980849790544,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021783363255535607,
                },
                { start: "0.25", density: 0.039018551765409956 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5676070038910511 },
                { start: 200, end: 500, density: 0.3296449416342415 },
                { start: 500, density: 0.10274805447470732 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4387019230769227 },
                { start: 800, end: 1800, density: 0.4205528846153843 },
                { start: 1800, density: 0.14074519230769303 },
              ],
              percentiles: { p75: 1374 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6104742367563641 },
                { start: 1800, end: 3000, density: 0.2222758537468319 },
                { start: 3000, density: 0.16724990949680385 },
              ],
              percentiles: { p75: 2420 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2420,
        lcp: 2811,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903303166,
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
                { start: 0, end: 2500, density: 0.5399293688767373 },
                { start: 2500, end: 4000, density: 0.2541011619958988 },
                { start: 4000, density: 0.2059694691273639 },
              ],
              percentiles: { p75: 3657 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8610576378666063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09625184010870796,
                },
                { start: "0.25", density: 0.042690522024685776 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43158017221317174 },
                { start: 200, end: 500, density: 0.33290667907842664 },
                { start: 500, density: 0.2355131487084015 },
              ],
              percentiles: { p75: 471 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38910198555956643 },
                { start: 800, end: 1800, density: 0.40997292418772524 },
                { start: 1800, density: 0.20092509025270835 },
              ],
              percentiles: { p75: 1631 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48550312677657703 },
                { start: 1800, end: 3000, density: 0.2534394542353607 },
                { start: 3000, density: 0.2610574189880623 },
              ],
              percentiles: { p75: 3108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9015017145559893 },
                { start: 100, end: 300, density: 0.06373418469906587 },
                { start: 300, density: 0.03476410074494491 },
              ],
              percentiles: { p75: 19 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3108,
        lcp: 3657,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1653903303732,
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
                { start: 0, end: 200, density: 0.6431356864313569 },
                { start: 200, end: 500, density: 0.28887111288871115 },
                { start: 500, density: 0.06799320067993203 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6429428228708519 },
                { start: 800, end: 1800, density: 0.3178728508596562 },
                { start: 1800, density: 0.03918432626949192 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8656865686568658 },
                { start: 1800, end: 3000, density: 0.1042104210421042 },
                { start: 3000, density: 0.03010301030103001 },
              ],
              percentiles: { p75: 1428 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9708970897089709 },
                { start: 100, end: 300, density: 0.021602160216021606 },
                { start: 300, density: 0.0075007500750074955 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8838267653530707 },
                { start: 2500, end: 4000, density: 0.09206841368273656 },
                { start: 4000, density: 0.024104820964192752 },
              ],
              percentiles: { p75: 1900 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9429000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04410000000000001,
                },
                { start: "0.25", density: 0.012999999999999992 },
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
        fcp: 1428,
        lcp: 1900,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903304295,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9063906390639064 },
                { start: 1800, end: 3000, density: 0.0695069506950695 },
                { start: 3000, density: 0.024102410241024073 },
              ],
              percentiles: { p75: 1287 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9518096380723855 },
                { start: 100, end: 300, density: 0.027594481103779243 },
                { start: 300, density: 0.020595880823835278 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9092090790920908 },
                { start: 2500, end: 4000, density: 0.0684931506849315 },
                { start: 4000, density: 0.022297770222977666 },
              ],
              percentiles: { p75: 1802 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8055805580558056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13171317131713173,
                },
                { start: "0.25", density: 0.06270627062706273 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6396919075722722 },
                { start: 200, end: 500, density: 0.27508252475742734 },
                { start: 500, density: 0.08522556767030043 },
              ],
              percentiles: { p75: 252 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7675464907018597 },
                { start: 800, end: 1800, density: 0.2094581083783243 },
                { start: 1800, density: 0.02299540091981607 },
              ],
              percentiles: { p75: 822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1287,
        lcp: 1802,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653903304737,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7035907181436288 },
                { start: 2500, end: 4000, density: 0.18978795759151829 },
                { start: 4000, density: 0.1066213242648528 },
              ],
              percentiles: { p75: 2758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9212078792120788,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052194780521947794,
                },
                { start: "0.25", density: 0.026597340265973404 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6357364263573647 },
                { start: 200, end: 500, density: 0.29267073292670753 },
                { start: 500, density: 0.0715928407159278 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.450490098019604 },
                { start: 800, end: 1800, density: 0.443988797759552 },
                { start: 1800, density: 0.1055211042208439 },
              ],
              percentiles: { p75: 1285 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6115611561156118 },
                { start: 1800, end: 3000, density: 0.2535253525352536 },
                { start: 3000, density: 0.13491349134913475 },
              ],
              percentiles: { p75: 2325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9716028397160283 },
                { start: 100, end: 300, density: 0.019798020197980198 },
                { start: 300, density: 0.008599140085991386 },
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
        fcp: 2325,
        lcp: 2758,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653903305253,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5434456554344551 },
                { start: 1800, end: 3000, density: 0.29267073292670653 },
                { start: 3000, density: 0.1638836116388383 },
              ],
              percentiles: { p75: 2520 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690030996900311 },
                { start: 100, end: 300, density: 0.023297670232976707 },
                { start: 300, density: 0.007699230076992304 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6645322661330663 },
                { start: 2500, end: 4000, density: 0.21750875437718856 },
                { start: 4000, density: 0.11795897948974522 },
              ],
              percentiles: { p75: 2915 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9036096390360963,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04639536046395361,
                },
                { start: "0.25", density: 0.04999500049995001 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6267373262673741 },
                { start: 200, end: 500, density: 0.29977002299770067 },
                { start: 500, density: 0.07349265073492525 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31189999999999946 },
                { start: 800, end: 1800, density: 0.538899999999999 },
                { start: 1800, density: 0.14920000000000155 },
              ],
              percentiles: { p75: 1480 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2520,
        lcp: 2915,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653903305672,
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
                { start: 0, end: 200, density: 0.5395838962442586 },
                { start: 200, end: 500, density: 0.38232910024317773 },
                { start: 500, density: 0.07808700351256373 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3100917431192661 },
                { start: 800, end: 1800, density: 0.46422018348623856 },
                { start: 1800, density: 0.2256880733944955 },
              ],
              percentiles: { p75: 1756 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4918618499404513 },
                { start: 1800, end: 3000, density: 0.3085880640465784 },
                { start: 3000, density: 0.1995500860129704 },
              ],
              percentiles: { p75: 2732 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686644772851668 },
                { start: 100, end: 300, density: 0.022851669403393535 },
                { start: 300, density: 0.008483853311439523 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6316102591221571 },
                { start: 2500, end: 4000, density: 0.22309624537281852 },
                { start: 4000, density: 0.1452934955050245 },
              ],
              percentiles: { p75: 3081 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9322145011144617,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03146715615576243,
                },
                { start: "0.25", density: 0.03631834272977577 },
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
        fcp: 2732,
        lcp: 3081,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653903306123,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5128025605121019 },
                { start: 800, end: 1800, density: 0.27775555111022177 },
                { start: 1800, density: 0.20944188837767638 },
              ],
              percentiles: { p75: 1627 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6318736252749455 },
                { start: 1800, end: 3000, density: 0.1465706858628276 },
                { start: 3000, density: 0.22155568886222682 },
              ],
              percentiles: { p75: 2850 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472052794720528 },
                { start: 100, end: 300, density: 0.0324967503249675 },
                { start: 300, density: 0.020297970202979673 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.649744923477043 },
                { start: 2500, end: 4000, density: 0.18440532159647893 },
                { start: 4000, density: 0.16584975492647802 },
              ],
              percentiles: { p75: 3298 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9137 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05829999999999999,
                },
                { start: "0.25", density: 0.02799999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6333000000000001 },
                { start: 200, end: 500, density: 0.2557 },
                { start: 500, density: 0.11099999999999996 },
              ],
              percentiles: { p75: 271 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2850,
        lcp: 3298,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903306753,
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
                  density: 0.9760512084758858,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01335393444432182,
                },
                { start: "0.25", density: 0.010594857079792516 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5505890124408235 },
                { start: 200, end: 500, density: 0.35076516569415395 },
                { start: 500, density: 0.09864582186502265 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46063467662237806 },
                { start: 800, end: 1800, density: 0.3620292083013064 },
                { start: 1800, density: 0.17733611507631564 },
              ],
              percentiles: { p75: 1650 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.574958632101489 },
                { start: 1800, end: 3000, density: 0.32266960838389397 },
                { start: 3000, density: 0.102371759514617 },
              ],
              percentiles: { p75: 2278 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308622794362447 },
                { start: 100, end: 300, density: 0.05060481633558983 },
                { start: 300, density: 0.0185329042281656 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6463212549712771 },
                { start: 2500, end: 4000, density: 0.26165488289880684 },
                { start: 4000, density: 0.09202386212991598 },
              ],
              percentiles: { p75: 2950 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2278,
        lcp: 2950,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903307375,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42247364361018236 },
                { start: 200, end: 500, density: 0.40717408074055017 },
                { start: 500, density: 0.1703522756492675 },
              ],
              percentiles: { p75: 380 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6098538730117675 },
                { start: 800, end: 1800, density: 0.2979438768912452 },
                { start: 1800, density: 0.09220225009698733 },
              ],
              percentiles: { p75: 1053 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7302494802494788 },
                { start: 1800, end: 3000, density: 0.16567047817047784 },
                { start: 3000, density: 0.10408004158004344 },
              ],
              percentiles: { p75: 1915 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9448428739079411 },
                { start: 100, end: 300, density: 0.03820576346329378 },
                { start: 300, density: 0.016951362628765163 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7954163976759198 },
                { start: 2500, end: 4000, density: 0.12814719173660427 },
                { start: 4000, density: 0.07643641058747604 },
              ],
              percentiles: { p75: 2275 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9254634397528321,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0575437693099897,
                },
                { start: "0.25", density: 0.016992790937178162 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1915,
        lcp: 2275,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903308068,
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
                  density: 0.9401388085598612,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03441295546558704,
                },
                { start: "0.25", density: 0.025448235974551776 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5090424786204967 },
                { start: 200, end: 500, density: 0.37431655684845117 },
                { start: 500, density: 0.11664096453105206 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7409158050221567 },
                { start: 800, end: 1800, density: 0.2319054652880354 },
                { start: 1800, density: 0.027178729689808022 },
              ],
              percentiles: { p75: 838 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8886131386861315 },
                { start: 1800, end: 3000, density: 0.08321167883211678 },
                { start: 3000, density: 0.028175182481751784 },
              ],
              percentiles: { p75: 1350 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.929428989751098 },
                { start: 100, end: 300, density: 0.04040995607613469 },
                { start: 300, density: 0.030161054172767265 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.90442037470726 },
                { start: 2500, end: 4000, density: 0.0749414519906323 },
                { start: 4000, density: 0.020638173302107696 },
              ],
              percentiles: { p75: 1819 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1350,
        lcp: 1819,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653903308661,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5383233532934129 },
                { start: 200, end: 500, density: 0.38095808383233515 },
                { start: 500, density: 0.080718562874252 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7025877779127688 },
                { start: 800, end: 1800, density: 0.2386101324261937 },
                { start: 1800, density: 0.0588020896610375 },
              ],
              percentiles: { p75: 887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8210282651072122 },
                { start: 1800, end: 3000, density: 0.10843079922027284 },
                { start: 3000, density: 0.07054093567251511 },
              ],
              percentiles: { p75: 1516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595185995623633 },
                { start: 100, end: 300, density: 0.024920982251398004 },
                { start: 300, density: 0.015560418186238779 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8555542051531351 },
                { start: 2500, end: 4000, density: 0.09765435099659693 },
                { start: 4000, density: 0.04679144385026801 },
              ],
              percentiles: { p75: 1910 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9777509068923822,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009189842805320437,
                },
                { start: "0.25", density: 0.01305925030229747 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1516,
        lcp: 1910,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903309296,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8978276877761413 },
                { start: 2500, end: 4000, density: 0.07529455081001468 },
                { start: 4000, density: 0.02687776141384414 },
              ],
              percentiles: { p75: 1781 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9789628180039139,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01149706457925636,
                },
                { start: "0.25", density: 0.009540117416829738 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6305269533615988 },
                { start: 200, end: 500, density: 0.29884918231374924 },
                { start: 500, density: 0.07062386432465195 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.599951004409603 },
                { start: 800, end: 1800, density: 0.3501959823615873 },
                { start: 1800, density: 0.04985301322880959 },
              ],
              percentiles: { p75: 973 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8669533169533167 },
                { start: 1800, end: 3000, density: 0.0974201474201474 },
                { start: 3000, density: 0.0356265356265358 },
              ],
              percentiles: { p75: 1451 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664133366021083 },
                { start: 100, end: 300, density: 0.01838685952439323 },
                { start: 300, density: 0.015199803873498428 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1451,
        lcp: 1781,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653903309917,
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
                { start: 0, end: 2500, density: 0.9208451123344742 },
                { start: 2500, end: 4000, density: 0.05981252789763429 },
                { start: 4000, density: 0.019342359767891577 },
              ],
              percentiles: { p75: 1699 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525143784102639,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03391830113552573,
                },
                { start: "0.25", density: 0.013567320454210285 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6243455497382197 },
                { start: 200, end: 500, density: 0.28010471204188464 },
                { start: 500, density: 0.09554973821989583 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6936827753370702 },
                { start: 800, end: 1800, density: 0.27495833964550825 },
                { start: 1800, density: 0.0313588850174216 },
              ],
              percentiles: { p75: 896 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8948629624082672 },
                { start: 1800, end: 3000, density: 0.08012580500224654 },
                { start: 3000, density: 0.02501123258948624 },
              ],
              percentiles: { p75: 1337 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527714502657555 },
                { start: 100, end: 300, density: 0.023082763857251325 },
                { start: 300, density: 0.024145785876993283 },
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
        fcp: 1337,
        lcp: 1699,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903310579,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5784962406015035 },
                { start: 1800, end: 3000, density: 0.21533834586466152 },
                { start: 3000, density: 0.20616541353383502 },
              ],
              percentiles: { p75: 2693 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412292507851054 },
                { start: 100, end: 300, density: 0.03304919994018245 },
                { start: 300, density: 0.025721549274712145 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6559187938498288 },
                { start: 2500, end: 4000, density: 0.20480668756530845 },
                { start: 4000, density: 0.1392745185848629 },
              ],
              percentiles: { p75: 3052 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9555490138357373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028848984397998233,
                },
                { start: "0.25", density: 0.015602001766264363 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6435255055840624 },
                { start: 200, end: 500, density: 0.27543012375490467 },
                { start: 500, density: 0.0810443706610329 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3357335733573355 },
                { start: 800, end: 1800, density: 0.4176417641764174 },
                { start: 1800, density: 0.24662466246624704 },
              ],
              percentiles: { p75: 1789 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2693,
        lcp: 3052,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903311185,
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
                { start: 0, end: 800, density: 0.7328908554572271 },
                { start: 800, end: 1800, density: 0.25412979351032455 },
                { start: 1800, density: 0.012979351032448377 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9286979627989371 },
                { start: 1800, end: 3000, density: 0.06141127841747861 },
                { start: 3000, density: 0.00989075878358429 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.957937782970644 },
                { start: 100, end: 300, density: 0.02818752738425588 },
                { start: 300, density: 0.013874689645100033 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9474452554744527 },
                { start: 2500, end: 4000, density: 0.04700729927007301 },
                { start: 4000, density: 0.005547445255474454 },
              ],
              percentiles: { p75: 1644 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9752857142857143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014142857142857143,
                },
                { start: "0.25", density: 0.01057142857142857 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5965551043271251 },
                { start: 200, end: 500, density: 0.29141576809970593 },
                { start: 500, density: 0.11202912757316903 },
              ],
              percentiles: { p75: 292 },
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
        lcp: 1644,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903311794,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8944784139336667 },
                { start: 2500, end: 4000, density: 0.07772836761163612 },
                { start: 4000, density: 0.027793218454697118 },
              ],
              percentiles: { p75: 1882 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9635076252723311,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021786492374727663,
                },
                { start: "0.25", density: 0.014705882352941188 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5131578947368416 },
                { start: 200, end: 500, density: 0.3462509012256666 },
                { start: 500, density: 0.1405912040374917 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6918647845468052 },
                { start: 800, end: 1800, density: 0.27043090638930173 },
                { start: 1800, density: 0.03770430906389311 },
              ],
              percentiles: { p75: 908 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8727138370589324 },
                { start: 1800, end: 3000, density: 0.09680399039349716 },
                { start: 3000, density: 0.030482172547570494 },
              ],
              percentiles: { p75: 1428 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9426077265973255 },
                { start: 100, end: 300, density: 0.030646359583952457 },
                { start: 300, density: 0.026745913818722013 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1428,
        lcp: 1882,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653903312416,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.901323166629289 },
                { start: 1800, end: 3000, density: 0.08017492711370264 },
                { start: 3000, density: 0.0185019062570082 },
              ],
              percentiles: { p75: 1346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9771674013789985 },
                { start: 100, end: 300, density: 0.016615801966768394 },
                { start: 300, density: 0.0062167966542330845 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9231243001119822 },
                { start: 2500, end: 4000, density: 0.0632138857782755 },
                { start: 4000, density: 0.013661814109742466 },
              ],
              percentiles: { p75: 1677 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.907769703745109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08049189491335941,
                },
                { start: "0.25", density: 0.011738401341531578 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6432559178204557 },
                { start: 200, end: 500, density: 0.29477445288075044 },
                { start: 500, density: 0.06196962929879392 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6838819523269013 },
                { start: 800, end: 1800, density: 0.2861520998864926 },
                { start: 1800, density: 0.029965947786606096 },
              ],
              percentiles: { p75: 873 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1346,
        lcp: 1677,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903313130,
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
                { start: "0.00", end: "0.10", density: 0.9122 },
                { start: "0.10", end: "0.25", density: 0.0746 },
                { start: "0.25", density: 0.0132 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.642307307807658 },
                { start: 200, end: 500, density: 0.27821653503948823 },
                { start: 500, density: 0.07947615715285397 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5934 },
                { start: 800, end: 1800, density: 0.36039999999999994 },
                { start: 1800, density: 0.04620000000000005 },
              ],
              percentiles: { p75: 982 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8675867586758674 },
                { start: 1800, end: 3000, density: 0.09200920092009197 },
                { start: 3000, density: 0.04040404040404057 },
              ],
              percentiles: { p75: 1464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582125362391282 },
                { start: 100, end: 300, density: 0.02309307207837648 },
                { start: 300, density: 0.018694391682495277 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8742874287428739 },
                { start: 2500, end: 4000, density: 0.09190919091909182 },
                { start: 4000, density: 0.033803380338034164 },
              ],
              percentiles: { p75: 1917 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1464,
        lcp: 1917,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653903313756,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9341707935741033 },
                { start: 100, end: 300, density: 0.03696098562628337 },
                { start: 300, density: 0.028868220799613445 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8899340922708207 },
                { start: 2500, end: 4000, density: 0.07663271420011983 },
                { start: 4000, density: 0.0334331935290595 },
              ],
              percentiles: { p75: 1765 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9413234944060938,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03249226374672697,
                },
                { start: "0.25", density: 0.026184241847179247 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48020735155513655 },
                { start: 200, end: 500, density: 0.39019792648444845 },
                { start: 500, density: 0.12959472196041508 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7883971291866025 },
                { start: 800, end: 1800, density: 0.17153110047846887 },
                { start: 1800, density: 0.04007177033492852 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.859276072153864 },
                { start: 1800, end: 3000, density: 0.09616533269621307 },
                { start: 3000, density: 0.04455859514992271 },
              ],
              percentiles: { p75: 1414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1414,
        lcp: 1765,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653903314176,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8681868186818678 },
                { start: 1800, end: 3000, density: 0.08930893089308921 },
                { start: 3000, density: 0.04250425042504311 },
              ],
              percentiles: { p75: 1377 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9437943794379438 },
                { start: 100, end: 300, density: 0.03140314031403141 },
                { start: 300, density: 0.02480248024802483 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8912999999999993 },
                { start: 2500, end: 4000, density: 0.07469999999999995 },
                { start: 4000, density: 0.03400000000000071 },
              ],
              percentiles: { p75: 1751 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9434056594340566,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0314968503149685,
                },
                { start: "0.25", density: 0.02509749025097489 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5443455654434552 },
                { start: 200, end: 500, density: 0.3418658134186579 },
                { start: 500, density: 0.11378862113788685 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8007800780078007 },
                { start: 800, end: 1800, density: 0.16241624162416243 },
                { start: 1800, density: 0.03680368036803683 },
              ],
              percentiles: { p75: 727 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1377,
        lcp: 1751,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653903314811,
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
                  density: 0.8055805580558056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13171317131713173,
                },
                { start: "0.25", density: 0.06270627062706273 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6396919075722722 },
                { start: 200, end: 500, density: 0.27508252475742734 },
                { start: 500, density: 0.08522556767030043 },
              ],
              percentiles: { p75: 252 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7675464907018597 },
                { start: 800, end: 1800, density: 0.2094581083783243 },
                { start: 1800, density: 0.02299540091981607 },
              ],
              percentiles: { p75: 822 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9063906390639064 },
                { start: 1800, end: 3000, density: 0.0695069506950695 },
                { start: 3000, density: 0.024102410241024073 },
              ],
              percentiles: { p75: 1287 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9518096380723855 },
                { start: 100, end: 300, density: 0.027594481103779243 },
                { start: 300, density: 0.020595880823835278 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9092090790920908 },
                { start: 2500, end: 4000, density: 0.0684931506849315 },
                { start: 4000, density: 0.022297770222977666 },
              ],
              percentiles: { p75: 1802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1287,
        lcp: 1802,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1653903315233,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7970186056937906,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16857206904281552,
                },
                { start: "0.25", density: 0.03440932526339387 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5818367810866104 },
                { start: 200, end: 500, density: 0.2726756080927482 },
                { start: 500, density: 0.14548761082064152 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.450033459736783 },
                { start: 800, end: 1800, density: 0.41032790542047703 },
                { start: 1800, density: 0.13963863484273992 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6497809727058295 },
                { start: 1800, end: 3000, density: 0.2213860496461866 },
                { start: 3000, density: 0.12883297764798385 },
              ],
              percentiles: { p75: 2189 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.909515469935785 },
                { start: 100, end: 300, density: 0.048336252189141844 },
                { start: 300, density: 0.042148277875073206 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7012635379061368 },
                { start: 2500, end: 4000, density: 0.1755415162454874 },
                { start: 4000, density: 0.12319494584837576 },
              ],
              percentiles: { p75: 2753 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2189,
        lcp: 2753,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1653903315670,
    },
  ],
};
