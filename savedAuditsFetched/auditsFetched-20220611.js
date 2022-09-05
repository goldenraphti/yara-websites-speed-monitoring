export const audit32 = {
  date: "2022-06-11T15:39:29.439Z",
  dateParsedLocale: "11/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "11/06/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48728606356968174 },
                { start: 800, end: 1800, density: 0.40586797066014635 },
                { start: 1800, density: 0.106845965770172 },
              ],
              percentiles: { p75: 1193 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6890258939580767 },
                { start: 1800, end: 3000, density: 0.19321824907521584 },
                { start: 3000, density: 0.1177558569667075 },
              ],
              percentiles: { p75: 2026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612870789341377 },
                { start: 100, end: 300, density: 0.03029160382101559 },
                { start: 300, density: 0.008421317244846654 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7754951408537337 },
                { start: 2500, end: 4000, density: 0.14220691351949807 },
                { start: 4000, density: 0.08229794562676815 },
              ],
              percentiles: { p75: 2378 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9603718199608611,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014554794520547946,
                },
                { start: "0.25", density: 0.025073385518590983 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5343941248470013 },
                { start: 200, end: 500, density: 0.3291309669522645 },
                { start: 500, density: 0.13647490820073424 },
              ],
              percentiles: { p75: 332 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2026,
        lcp: 2378,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961774380,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4868686868686866 },
                { start: 1800, end: 3000, density: 0.32255892255892227 },
                { start: 3000, density: 0.19057239057239106 },
              ],
              percentiles: { p75: 2714 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9555180180180181 },
                { start: 100, end: 300, density: 0.03392454954954955 },
                { start: 300, density: 0.010557432432432434 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6252191503708706 },
                { start: 2500, end: 4000, density: 0.25232636547538806 },
                { start: 4000, density: 0.12245448415374138 },
              ],
              percentiles: { p75: 3006 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9320090654579389,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021997067057725635,
                },
                { start: "0.25", density: 0.045993867484335454 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.500700084010082 },
                { start: 200, end: 500, density: 0.40492859143097243 },
                { start: 500, density: 0.09437132455894551 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2693276753746191 },
                { start: 800, end: 1800, density: 0.543296645007294 },
                { start: 1800, density: 0.18737567961808693 },
              ],
              percentiles: { p75: 1609 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2714,
        lcp: 3006,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961777457,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4753376394597766 },
                { start: 200, end: 500, density: 0.3492366412213738 },
                { start: 500, density: 0.17542571931884954 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26976270199447044 },
                { start: 800, end: 1800, density: 0.35492793710875287 },
                { start: 1800, density: 0.3753093608967767 },
              ],
              percentiles: { p75: 2192 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43828604855220726 },
                { start: 1800, end: 3000, density: 0.30023398654577305 },
                { start: 3000, density: 0.2614799649020197 },
              ],
              percentiles: { p75: 3077 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9152643335815337 },
                { start: 100, end: 300, density: 0.0445271779597915 },
                { start: 300, density: 0.04020848845867476 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5639762353282117 },
                { start: 2500, end: 4000, density: 0.2644544268946522 },
                { start: 4000, density: 0.17156933777713618 },
              ],
              percentiles: { p75: 3366 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.943267453433812,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03270297170482014,
                },
                { start: "0.25", density: 0.024029574861367885 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3077,
        lcp: 3366,
        cls: "0.00",
        fid: 18,
      },
      timestamp: 1654961783068,
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
                { start: 0, end: 200, density: 0.5239476052394759 },
                { start: 200, end: 500, density: 0.35576442355764415 },
                { start: 500, density: 0.1202879712028799 },
              ],
              percentiles: { p75: 333 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20747925207479156 },
                { start: 800, end: 1800, density: 0.5320467953204656 },
                { start: 1800, density: 0.26047395260474293 },
              ],
              percentiles: { p75: 1871 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36817363472694703 },
                { start: 1800, end: 3000, density: 0.326565313062614 },
                { start: 3000, density: 0.30526105221043903 },
              ],
              percentiles: { p75: 3369 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.971591477443233 },
                { start: 100, end: 300, density: 0.020106031809542863 },
                { start: 300, density: 0.008302490747224167 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4754524547545246 },
                { start: 2500, end: 4000, density: 0.31596840315968416 },
                { start: 4000, density: 0.20857914208579129 },
              ],
              percentiles: { p75: 3738 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9224 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.053700000000000005,
                },
                { start: "0.25", density: 0.023900000000000008 },
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
        fcp: 3369,
        lcp: 3738,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1654961786597,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7218609304652321 },
                { start: 2500, end: 4000, density: 0.1943971985992995 },
                { start: 4000, density: 0.08374187093546835 },
              ],
              percentiles: { p75: 2663 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.935612877424515,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04189162167566486,
                },
                { start: "0.25", density: 0.022495500899820026 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6524999999999996 },
                { start: 200, end: 500, density: 0.2583999999999999 },
                { start: 500, density: 0.08910000000000043 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.457008598280344 },
                { start: 800, end: 1800, density: 0.3537292541491703 },
                { start: 1800, density: 0.1892621475704858 },
              ],
              percentiles: { p75: 1569 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6232999999999997 },
                { start: 1800, end: 3000, density: 0.22269999999999993 },
                { start: 3000, density: 0.1540000000000004 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956391278255651 },
                { start: 100, end: 300, density: 0.026105221044208832 },
                { start: 300, density: 0.017503500700140173 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2663,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961787730,
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
                { start: 0, end: 2500, density: 0.7030778515389259 },
                { start: 2500, end: 4000, density: 0.16837658418829207 },
                { start: 4000, density: 0.12854556427278205 },
              ],
              percentiles: { p75: 2817 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939114832535885,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02200956937799043,
                },
                { start: "0.25", density: 0.0388755980861244 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5454768626488282 },
                { start: 200, end: 500, density: 0.3404934331655828 },
                { start: 500, density: 0.11402970418558894 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4398320335932808 },
                { start: 800, end: 1800, density: 0.4178764247150565 },
                { start: 1800, density: 0.1422915416916626 },
              ],
              percentiles: { p75: 1382 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6115581565471819 },
                { start: 1800, end: 3000, density: 0.22153133382101867 },
                { start: 3000, density: 0.1669105096317995 },
              ],
              percentiles: { p75: 2438 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9458858413639734 },
                { start: 100, end: 300, density: 0.03397578453175192 },
                { start: 300, density: 0.020138374104274714 },
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
        fcp: 2438,
        lcp: 2817,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961788796,
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
                  density: 0.9055188962207558,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06088782243551289,
                },
                { start: "0.25", density: 0.03359328134373124 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6029 },
                { start: 200, end: 500, density: 0.3214000000000001 },
                { start: 500, density: 0.07569999999999986 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3075692430756928 },
                { start: 800, end: 1800, density: 0.4738526147385267 },
                { start: 1800, density: 0.2185781421857806 },
              ],
              percentiles: { p75: 1748 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5156546964089223 },
                { start: 1800, end: 3000, density: 0.30069020706211835 },
                { start: 3000, density: 0.1836550965289594 },
              ],
              percentiles: { p75: 2661 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706088173547935 },
                { start: 100, end: 300, density: 0.02299310206937918 },
                { start: 300, density: 0.006398080575827243 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6195499999999998 },
                { start: 2500, end: 4000, density: 0.22414999999999993 },
                { start: 4000, density: 0.15630000000000022 },
              ],
              percentiles: { p75: 3189 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2661,
        lcp: 3189,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654961790599,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9113911391139115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06180618061806181,
                },
                { start: "0.25", density: 0.026802680268026787 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7979 },
                { start: 200, end: 500, density: 0.1739 },
                { start: 500, density: 0.02820000000000005 },
              ],
              percentiles: { p75: 180 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6051000000000001 },
                { start: 800, end: 1800, density: 0.3461 },
                { start: 1800, density: 0.048800000000000024 },
              ],
              percentiles: { p75: 1051 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8260521843446968 },
                { start: 1800, end: 3000, density: 0.1310606817954614 },
                { start: 3000, density: 0.042887133859841886 },
              ],
              percentiles: { p75: 1480 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9822 },
                { start: 100, end: 300, density: 0.0128 },
                { start: 300, density: 0.005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8750624937506248 },
                { start: 2500, end: 4000, density: 0.09524047595240472 },
                { start: 4000, density: 0.029697030296970375 },
              ],
              percentiles: { p75: 1892 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1480,
        lcp: 1892,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654961791753,
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
                  density: 0.8182818281828184,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14661466146614666,
                },
                { start: "0.25", density: 0.035103510351035136 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6016195141457567 },
                { start: 200, end: 500, density: 0.25412376287113886 },
                { start: 500, density: 0.1442567229831044 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44814481448144744 },
                { start: 800, end: 1800, density: 0.41364136413641295 },
                { start: 1800, density: 0.13821382138213956 },
              ],
              percentiles: { p75: 1384 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6510999999999991 },
                { start: 1800, end: 3000, density: 0.22439999999999968 },
                { start: 3000, density: 0.12450000000000122 },
              ],
              percentiles: { p75: 2186 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9152000000000001 },
                { start: 100, end: 300, density: 0.0433 },
                { start: 300, density: 0.041499999999999954 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6942388477695532 },
                { start: 2500, end: 4000, density: 0.17593518703740735 },
                { start: 4000, density: 0.12982596519303927 },
              ],
              percentiles: { p75: 2810 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2186,
        lcp: 2810,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654961793158,
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
                { start: "0.00", end: "0.10", density: 0.9529 },
                { start: "0.10", end: "0.25", density: 0.0373 },
                { start: "0.25", density: 0.009800000000000026 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9153084691530846 },
                { start: 200, end: 500, density: 0.0662933706629337 },
                { start: 500, density: 0.018398160183981622 },
              ],
              percentiles: { p75: 101 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.562143785621438 },
                { start: 800, end: 1800, density: 0.34086591340865924 },
                { start: 1800, density: 0.09699030096990285 },
              ],
              percentiles: { p75: 1211 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7572000000000001 },
                { start: 1800, end: 3000, density: 0.17350000000000007 },
                { start: 3000, density: 0.0692999999999999 },
              ],
              percentiles: { p75: 1794 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9800000000000001 },
                { start: 100, end: 300, density: 0.016600000000000004 },
                { start: 300, density: 0.0034000000000000002 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8030303030303033 },
                { start: 2500, end: 4000, density: 0.12986298629862997 },
                { start: 4000, density: 0.06710671067106677 },
              ],
              percentiles: { p75: 2246 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1794, lcp: 2246, cls: "0.03", fid: 8 },
      timestamp: 1654961794278,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649169435215946 },
                { start: 100, end: 300, density: 0.02737541528239202 },
                { start: 300, density: 0.00770764119601328 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6937107740585772 },
                { start: 2500, end: 4000, density: 0.2066553347280335 },
                { start: 4000, density: 0.0996338912133892 },
              ],
              percentiles: { p75: 2771 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9544277576385292,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018254790264111857,
                },
                { start: "0.25", density: 0.02731745209735888 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5559855865474446 },
                { start: 200, end: 500, density: 0.37194715067396245 },
                { start: 500, density: 0.07206726277859309 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4224786103189007 },
                { start: 800, end: 1800, density: 0.4655172413793104 },
                { start: 1800, density: 0.11200414830178898 },
              ],
              percentiles: { p75: 1336 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5746961181544895 },
                { start: 1800, end: 3000, density: 0.27016076329891514 },
                { start: 3000, density: 0.15514311854659527 },
              ],
              percentiles: { p75: 2450 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2450,
        lcp: 2771,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961795479,
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
                  density: 0.951863809803346,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023040798356325217,
                },
                { start: "0.25", density: 0.025095391840328742 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6221036585365852 },
                { start: 200, end: 500, density: 0.3295731707317073 },
                { start: 500, density: 0.04832317073170741 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3640436016126623 },
                { start: 800, end: 1800, density: 0.46289383305957893 },
                { start: 1800, density: 0.17306256532775874 },
              ],
              percentiles: { p75: 1575 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6476445237033737 },
                { start: 1800, end: 3000, density: 0.2333184722841434 },
                { start: 3000, density: 0.11903700401248303 },
              ],
              percentiles: { p75: 2243 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647951441578149 },
                { start: 100, end: 300, density: 0.0075872534142640375 },
                { start: 300, density: 0.027617602427921144 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7431848651869508 },
                { start: 2500, end: 4000, density: 0.19365410397735738 },
                { start: 4000, density: 0.0631610308356919 },
              ],
              percentiles: { p75: 2600 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2243,
        lcp: 2600,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961797477,
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
                { start: 0, end: 200, density: 0.5963999999999999 },
                { start: 200, end: 500, density: 0.34469999999999995 },
                { start: 500, density: 0.05890000000000004 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143828765753153 },
                { start: 800, end: 1800, density: 0.355971194238848 },
                { start: 1800, density: 0.22964592918583682 },
              ],
              percentiles: { p75: 1795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5145514551455153 },
                { start: 1800, end: 3000, density: 0.20812081208120842 },
                { start: 3000, density: 0.27732773277327627 },
              ],
              percentiles: { p75: 3370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9314 },
                { start: 100, end: 300, density: 0.0572 },
                { start: 300, density: 0.011399999999999999 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5674067406740684 },
                { start: 2500, end: 4000, density: 0.21457145714571493 },
                { start: 4000, density: 0.2180218021802167 },
              ],
              percentiles: { p75: 3765 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7280271972802719,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.1292870712928708 },
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
        fcp: 3370,
        lcp: 3765,
        cls: "0.14",
        fid: 14,
      },
      timestamp: 1654961832082,
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
                { start: 0, end: 1800, density: 0.5145514551455153 },
                { start: 1800, end: 3000, density: 0.20812081208120842 },
                { start: 3000, density: 0.27732773277327627 },
              ],
              percentiles: { p75: 3370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9314 },
                { start: 100, end: 300, density: 0.0572 },
                { start: 300, density: 0.011399999999999999 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5674067406740684 },
                { start: 2500, end: 4000, density: 0.21457145714571493 },
                { start: 4000, density: 0.2180218021802167 },
              ],
              percentiles: { p75: 3765 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7280271972802719,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.1292870712928708 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5963999999999999 },
                { start: 200, end: 500, density: 0.34469999999999995 },
                { start: 500, density: 0.05890000000000004 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143828765753153 },
                { start: 800, end: 1800, density: 0.355971194238848 },
                { start: 1800, density: 0.22964592918583682 },
              ],
              percentiles: { p75: 1795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3370,
        lcp: 3765,
        cls: "0.14",
        fid: 14,
      },
      timestamp: 1654961833652,
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
                { start: "0.00", end: "0.10", density: 0.9013 },
                { start: "0.10", end: "0.25", density: 0.0696 },
                { start: "0.25", density: 0.02909999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6331266253250657 },
                { start: 200, end: 500, density: 0.27295459091818386 },
                { start: 500, density: 0.09391878375675039 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4379124175164965 },
                { start: 800, end: 1800, density: 0.34883023395320917 },
                { start: 1800, density: 0.21325734853029443 },
              ],
              percentiles: { p75: 1716 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5004000800160028 },
                { start: 1800, end: 3000, density: 0.24504900980196018 },
                { start: 3000, density: 0.2545509101820371 },
              ],
              percentiles: { p75: 3253 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5691430856914301 },
                { start: 2500, end: 4000, density: 0.20917908209179045 },
                { start: 4000, density: 0.2216778322167795 },
              ],
              percentiles: { p75: 3877 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3253, lcp: 3877, cls: "0.01" },
      timestamp: 1654961835013,
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
                { start: 0, end: 200, density: 0.6163616361636164 },
                { start: 200, end: 500, density: 0.2712271227122713 },
                { start: 500, density: 0.1124112411241123 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47783891945973017 },
                { start: 800, end: 1800, density: 0.28944472236118085 },
                { start: 1800, density: 0.23271635817908895 },
              ],
              percentiles: { p75: 1740 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5969806038792254 },
                { start: 1800, end: 3000, density: 0.14717056588682292 },
                { start: 3000, density: 0.2558488302339518 },
              ],
              percentiles: { p75: 2920 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572957295729574 },
                { start: 100, end: 300, density: 0.030203020302030207 },
                { start: 300, density: 0.012501250125012516 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6121999999999996 },
                { start: 2500, end: 4000, density: 0.20459999999999978 },
                { start: 4000, density: 0.18320000000000064 },
              ],
              percentiles: { p75: 3380 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9226077392260774,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0512948705129487,
                },
                { start: "0.25", density: 0.0260973902609739 },
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
        fcp: 2920,
        lcp: 3380,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961836156,
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
                { start: 0, end: 200, density: 0.6118388161183882 },
                { start: 200, end: 500, density: 0.25667433256674344 },
                { start: 500, density: 0.13148685131486837 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2989000000000024 },
                { start: 800, end: 1800, density: 0.371600000000003 },
                { start: 1800, density: 0.32949999999999463 },
              ],
              percentiles: { p75: 2056 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.501399999999999 },
                { start: 1800, end: 3000, density: 0.28069999999999945 },
                { start: 3000, density: 0.2179000000000015 },
              ],
              percentiles: { p75: 2816 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351064893510649 },
                { start: 100, end: 300, density: 0.034796520347965196 },
                { start: 300, density: 0.03009699030096994 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.601919424172747 },
                { start: 2500, end: 4000, density: 0.2451264620613811 },
                { start: 4000, density: 0.15295411376587184 },
              ],
              percentiles: { p75: 3229 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8074192580741925,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11218878112188778,
                },
                { start: "0.25", density: 0.0803919608039198 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2816,
        lcp: 3229,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1654961837234,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8140999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10389999999999999,
                },
                { start: "0.25", density: 0.08200000000000011 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6125387461253872 },
                { start: 200, end: 500, density: 0.23857614238576128 },
                { start: 500, density: 0.1488851114888515 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4237999999999992 },
                { start: 800, end: 1800, density: 0.4265999999999992 },
                { start: 1800, density: 0.1496000000000016 },
              ],
              percentiles: { p75: 1412 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6470235117558767 },
                { start: 1800, end: 3000, density: 0.20660330165082508 },
                { start: 3000, density: 0.14637318659329815 },
              ],
              percentiles: { p75: 2263 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9131086891310871 },
                { start: 100, end: 300, density: 0.03589641035896411 },
                { start: 300, density: 0.0509949005099489 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7110211021102105 },
                { start: 2500, end: 4000, density: 0.16696669666966682 },
                { start: 4000, density: 0.12201220122012259 },
              ],
              percentiles: { p75: 2758 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2263,
        lcp: 2758,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1654961838425,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7818847425602262 },
                { start: 1800, end: 3000, density: 0.1643835616438355 },
                { start: 3000, density: 0.05373169579593821 },
              ],
              percentiles: { p75: 1716 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9489180560482439 },
                { start: 100, end: 300, density: 0.02967955539789523 },
                { start: 300, density: 0.021402388553860997 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.841349562751122 },
                { start: 2500, end: 4000, density: 0.11740723233278176 },
                { start: 4000, density: 0.04124320491609613 },
              ],
              percentiles: { p75: 2104 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8828032979976442,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08904593639575971,
                },
                { start: "0.25", density: 0.028150765606595973 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5469150174621653 },
                { start: 200, end: 500, density: 0.3207217694994179 },
                { start: 500, density: 0.13236321303841678 },
              ],
              percentiles: { p75: 316 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6022326674500589 },
                { start: 800, end: 1800, density: 0.3539365452408932 },
                { start: 1800, density: 0.04383078730904791 },
              ],
              percentiles: { p75: 997 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1716,
        lcp: 2104,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961839780,
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
                  density: 0.8231999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11719999999999998,
                },
                { start: "0.25", density: 0.05959999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6198619861986207 },
                { start: 200, end: 500, density: 0.2792279227922796 },
                { start: 500, density: 0.10091009100909985 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30127948820471934 },
                { start: 800, end: 1800, density: 0.44102359056377627 },
                { start: 1800, density: 0.2576969212315044 },
              ],
              percentiles: { p75: 1891 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5293588076422928 },
                { start: 1800, end: 3000, density: 0.24487346203861163 },
                { start: 3000, density: 0.22576773031909564 },
              ],
              percentiles: { p75: 2934 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488204718112756 },
                { start: 100, end: 300, density: 0.038484606157536974 },
                { start: 300, density: 0.01269492203118756 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5808338332333541 },
                { start: 2500, end: 4000, density: 0.23500299940012026 },
                { start: 4000, density: 0.1841631673665257 },
              ],
              percentiles: { p75: 3488 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2934,
        lcp: 3488,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1654961841544,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43849999999999995 },
                { start: 800, end: 1800, density: 0.43519999999999986 },
                { start: 1800, density: 0.12630000000000013 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6708000000000004 },
                { start: 1800, end: 3000, density: 0.20140000000000016 },
                { start: 3000, density: 0.12779999999999936 },
              ],
              percentiles: { p75: 2160 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9776910764305723 },
                { start: 100, end: 300, density: 0.015806322529011603 },
                { start: 300, density: 0.006502601040416169 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7023797620237969 },
                { start: 2500, end: 4000, density: 0.17833216678332145 },
                { start: 4000, density: 0.11928807119288164 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8652000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08670000000000001,
                },
                { start: "0.25", density: 0.04809999999999998 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6892621475704859 },
                { start: 200, end: 500, density: 0.2556488702259548 },
                { start: 500, density: 0.055088982203559164 },
              ],
              percentiles: { p75: 226 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2160,
        lcp: 2821,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654961842361,
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
                  density: 0.9258868984896382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04970144011239901,
                },
                { start: "0.25", density: 0.02441166139796275 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6656400384985562 },
                { start: 200, end: 500, density: 0.25948026948989406 },
                { start: 500, density: 0.07487969201154972 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49333333333333274 },
                { start: 800, end: 1800, density: 0.3774774774774771 },
                { start: 1800, density: 0.12918918918919015 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6679224973089337 },
                { start: 1800, end: 3000, density: 0.20057409400789364 },
                { start: 3000, density: 0.13150340868317256 },
              ],
              percentiles: { p75: 2192 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643483343074226 },
                { start: 100, end: 300, density: 0.029612312487823887 },
                { start: 300, density: 0.006039353204753535 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7341738197424894 },
                { start: 2500, end: 4000, density: 0.1692596566523606 },
                { start: 4000, density: 0.09656652360515001 },
              ],
              percentiles: { p75: 2600 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2192,
        lcp: 2600,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654961843107,
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
                { start: 0, end: 1800, density: 0.801309328968903 },
                { start: 1800, end: 3000, density: 0.14206219312602278 },
                { start: 3000, density: 0.05662847790507444 },
              ],
              percentiles: { p75: 1655 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9466696418609839 },
                { start: 100, end: 300, density: 0.031016400758674546 },
                { start: 300, density: 0.022313957380341573 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8599869095669241 },
                { start: 2500, end: 4000, density: 0.095069270208356 },
                { start: 4000, density: 0.04494382022471989 },
              ],
              percentiles: { p75: 1996 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8816748232735182,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10309951060358892,
                },
                { start: "0.25", density: 0.01522566612289287 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.524136403897254 },
                { start: 200, end: 500, density: 0.35839238263950385 },
                { start: 500, density: 0.11747121346324206 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6167496212940922 },
                { start: 800, end: 1800, density: 0.3313135684916685 },
                { start: 1800, density: 0.05193681021423932 },
              ],
              percentiles: { p75: 996 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1655,
        lcp: 1996,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961844406,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31260000000000016 },
                { start: 800, end: 1800, density: 0.5246000000000004 },
                { start: 1800, density: 0.16279999999999942 },
              ],
              percentiles: { p75: 1527 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5455454454554539 },
                { start: 1800, end: 3000, density: 0.28847115288471126 },
                { start: 3000, density: 0.16598340165983475 },
              ],
              percentiles: { p75: 2546 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664067186562686 },
                { start: 100, end: 300, density: 0.025694861027794436 },
                { start: 300, density: 0.007898420315936808 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6608000000000004 },
                { start: 2500, end: 4000, density: 0.21760000000000018 },
                { start: 4000, density: 0.12159999999999943 },
              ],
              percentiles: { p75: 2927 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9057094290570942,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0444955504449555,
                },
                { start: "0.25", density: 0.04979502049795025 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6101220244048814 },
                { start: 200, end: 500, density: 0.3144628925785159 },
                { start: 500, density: 0.07541508301660281 },
              ],
              percentiles: { p75: 268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2546,
        lcp: 2927,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654961845507,
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
                { start: 0, end: 800, density: 0.41722516755026545 },
                { start: 800, end: 1800, density: 0.45573672101630536 },
                { start: 1800, density: 0.12703811143342922 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6184381561843809 },
                { start: 1800, end: 3000, density: 0.24897510248975072 },
                { start: 3000, density: 0.1325867413258684 },
              ],
              percentiles: { p75: 2281 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643964396439645 },
                { start: 100, end: 300, density: 0.030203020302030203 },
                { start: 300, density: 0.005400540054005402 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7274227422742269 },
                { start: 2500, end: 4000, density: 0.15986598659865967 },
                { start: 4000, density: 0.11271127112711334 },
              ],
              percentiles: { p75: 2669 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9302069793020699,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037996200379962,
                },
                { start: "0.25", density: 0.031796820317968204 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7202720272027202 },
                { start: 200, end: 500, density: 0.2362236223622362 },
                { start: 500, density: 0.043504350435043596 },
              ],
              percentiles: { p75: 215 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2281,
        lcp: 2669,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961846270,
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
                { start: 0, end: 1800, density: 0.6805361072214453 },
                { start: 1800, end: 3000, density: 0.2326465293058615 },
                { start: 3000, density: 0.08681736347269321 },
              ],
              percentiles: { p75: 1996 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803019698030198 },
                { start: 100, end: 300, density: 0.012298770122987702 },
                { start: 300, density: 0.0073992600739926015 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7773832149644895 },
                { start: 2500, end: 4000, density: 0.14349304791437437 },
                { start: 4000, density: 0.07912373712113616 },
              ],
              percentiles: { p75: 2388 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9299929992999301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0437043704370437,
                },
                { start: "0.25", density: 0.026302630263026296 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6432573029211687 },
                { start: 200, end: 500, density: 0.29121648659463784 },
                { start: 500, density: 0.06552621048419341 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4426442644264427 },
                { start: 800, end: 1800, density: 0.47704770477047714 },
                { start: 1800, density: 0.08030803080308015 },
              ],
              percentiles: { p75: 1132 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 1996,
        lcp: 2388,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654961846993,
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
                { start: 0, end: 2500, density: 0.561768530559167 },
                { start: 2500, end: 4000, density: 0.24557367210163014 },
                { start: 4000, density: 0.19265779733920294 },
              ],
              percentiles: { p75: 3549 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8483 },
                { start: "0.10", end: "0.25", density: 0.1083 },
                { start: "0.25", density: 0.043399999999999966 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4798000000000004 },
                { start: 200, end: 500, density: 0.2956000000000002 },
                { start: 500, density: 0.2245999999999995 },
              ],
              percentiles: { p75: 453 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41496598639455734 },
                { start: 800, end: 1800, density: 0.3949579831932769 },
                { start: 1800, density: 0.19007603041216564 },
              ],
              percentiles: { p75: 1594 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129487051294862 },
                { start: 1800, end: 3000, density: 0.23817618238176144 },
                { start: 3000, density: 0.2488751124887523 },
              ],
              percentiles: { p75: 3029 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9125737721316395 },
                { start: 100, end: 300, density: 0.05681704511353406 },
                { start: 300, density: 0.03060918275482648 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3029,
        lcp: 3549,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654961847853,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6771677167716774 },
                { start: 200, end: 500, density: 0.22432243224322435 },
                { start: 500, density: 0.09850985098509836 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7639236076392361 },
                { start: 800, end: 1800, density: 0.22357764223577642 },
                { start: 1800, density: 0.0124987501249875 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9261926192619262 },
                { start: 1800, end: 3000, density: 0.05740574057405742 },
                { start: 3000, density: 0.016401640164016434 },
              ],
              percentiles: { p75: 1220 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698969896989699 },
                { start: 100, end: 300, density: 0.0214021402140214 },
                { start: 300, density: 0.008700870087008697 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9433499999999999 },
                { start: 2500, end: 4000, density: 0.04885 },
                { start: 4000, density: 0.00780000000000001 },
              ],
              percentiles: { p75: 1580 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9617961796179617,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027002700270027002,
                },
                { start: "0.25", density: 0.011201120112011204 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1220,
        lcp: 1580,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654961848549,
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
                { start: 0, end: 800, density: 0.7200687714910909 },
                { start: 800, end: 1800, density: 0.24773366677086592 },
                { start: 1800, density: 0.032197561738043154 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8702870442203257 },
                { start: 1800, end: 3000, density: 0.09775019394879748 },
                { start: 3000, density: 0.031962761830876825 },
              ],
              percentiles: { p75: 1411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.922506946588453 },
                { start: 100, end: 300, density: 0.03967273849953689 },
                { start: 300, density: 0.03782031491201007 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9053510671203217 },
                { start: 2500, end: 4000, density: 0.07021342406433649 },
                { start: 4000, density: 0.024435508815341754 },
              ],
              percentiles: { p75: 1826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9343581860107609,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04289008455034589,
                },
                { start: "0.25", density: 0.022751729438893156 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4440606697702355 },
                { start: 200, end: 500, density: 0.41282474846072953 },
                { start: 500, density: 0.14311458176903497 },
              ],
              percentiles: { p75: 343 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1411,
        lcp: 1826,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1654961849273,
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
                { start: 0, end: 800, density: 0.6082287488678996 },
                { start: 800, end: 1800, density: 0.29175831284771625 },
                { start: 1800, density: 0.10001293828438405 },
              ],
              percentiles: { p75: 1072 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7191069574247132 },
                { start: 1800, end: 3000, density: 0.16718587746625102 },
                { start: 3000, density: 0.11370716510903567 },
              ],
              percentiles: { p75: 1959 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9395518499218343 },
                { start: 100, end: 300, density: 0.0416883793642522 },
                { start: 300, density: 0.01875977071391355 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7957317073170731 },
                { start: 2500, end: 4000, density: 0.12422158796056043 },
                { start: 4000, density: 0.0800467047223665 },
              ],
              percentiles: { p75: 2270 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9257157596079443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05610007737941707,
                },
                { start: "0.25", density: 0.01818416301263864 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4176872502256025 },
                { start: 200, end: 500, density: 0.4041510893386618 },
                { start: 500, density: 0.1781616604357358 },
              ],
              percentiles: { p75: 390 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1959,
        lcp: 2270,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961850391,
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
                  density: 0.9762413875029697,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011998099311000236,
                },
                { start: "0.25", density: 0.011760513186029928 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6239194789816461 },
                { start: 200, end: 500, density: 0.2991119005328598 },
                { start: 500, density: 0.07696862048549408 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6087733937298845 },
                { start: 800, end: 1800, density: 0.33722732149243057 },
                { start: 1800, density: 0.05399928477768502 },
              ],
              percentiles: { p75: 974 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8634250983196279 },
                { start: 1800, end: 3000, density: 0.09641282326301988 },
                { start: 3000, density: 0.04016207841735229 },
              ],
              percentiles: { p75: 1462 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9661560384752403 },
                { start: 100, end: 300, density: 0.019593872461702883 },
                { start: 300, density: 0.014250089063056713 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8982879562477708 },
                { start: 2500, end: 4000, density: 0.07412911663298066 },
                { start: 4000, density: 0.027582927119248497 },
              ],
              percentiles: { p75: 1771 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1462,
        lcp: 1771,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961851644,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276532630191164 },
                { start: 100, end: 300, density: 0.0410349373764008 },
                { start: 300, density: 0.03131179960448272 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6935985592665355 },
                { start: 2500, end: 4000, density: 0.20194826457105428 },
                { start: 4000, density: 0.1044531761624102 },
              ],
              percentiles: { p75: 2759 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9490435621282752,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024915608423083106,
                },
                { start: "0.25", density: 0.026040829448641695 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5589078038092025 },
                { start: 200, end: 500, density: 0.30962413618742607 },
                { start: 500, density: 0.13146806000337152 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37927631578947363 },
                { start: 800, end: 1800, density: 0.4620065789473683 },
                { start: 1800, density: 0.15871710526315794 },
              ],
              percentiles: { p75: 1460 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6006859382655566 },
                { start: 1800, end: 3000, density: 0.2448146333496654 },
                { start: 3000, density: 0.154499428384778 },
              ],
              percentiles: { p75: 2473 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2473,
        lcp: 2759,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961852469,
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
                { start: "0.00", end: "0.10", density: 0.9336 },
                { start: "0.10", end: "0.25", density: 0.0377 },
                { start: "0.25", density: 0.02870000000000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6023397660233977 },
                { start: 200, end: 500, density: 0.27927207279272076 },
                { start: 500, density: 0.11838816118388164 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5088526557967383 },
                { start: 800, end: 1800, density: 0.392717815344603 },
                { start: 1800, density: 0.09842952885865845 },
              ],
              percentiles: { p75: 1157 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7133713371337133 },
                { start: 1800, end: 3000, density: 0.18001800180018 },
                { start: 3000, density: 0.1066106610661068 },
              ],
              percentiles: { p75: 1949 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672065586882624 },
                { start: 100, end: 300, density: 0.02429514097180564 },
                { start: 300, density: 0.008498300339932022 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7742725727427262 },
                { start: 2500, end: 4000, density: 0.14333566643335677 },
                { start: 4000, density: 0.0823917608239171 },
              ],
              percentiles: { p75: 2392 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1949,
        lcp: 2392,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961853506,
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
                { start: 0, end: 100, density: 0.922468559574744 },
                { start: 100, end: 300, density: 0.04187734992869182 },
                { start: 300, density: 0.03565409049656416 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6412757973733577 },
                { start: 2500, end: 4000, density: 0.2516572858036271 },
                { start: 4000, density: 0.10706691682301508 },
              ],
              percentiles: { p75: 2968 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9343815773183113,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028971152655689,
                },
                { start: "0.25", density: 0.03664727002599976 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5016343977872773 },
                { start: 200, end: 500, density: 0.31606738747799873 },
                { start: 500, density: 0.18229821473472402 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2889444097439101 },
                { start: 800, end: 1800, density: 0.42373516552154916 },
                { start: 1800, density: 0.2873204247345407 },
              ],
              percentiles: { p75: 1921 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48929016189290053 },
                { start: 1800, end: 3000, density: 0.32689912826899065 },
                { start: 3000, density: 0.18381070983810896 },
              ],
              percentiles: { p75: 2632 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2632,
        lcp: 2968,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961854329,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3113868320992588 },
                { start: 800, end: 1800, density: 0.4192515509305575 },
                { start: 1800, density: 0.2693616169701837 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5282999999999993 },
                { start: 1800, end: 3000, density: 0.30649999999999955 },
                { start: 3000, density: 0.16520000000000115 },
              ],
              percentiles: { p75: 2531 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9359935993599361 },
                { start: 100, end: 300, density: 0.036503650365036514 },
                { start: 300, density: 0.027502750275027438 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6582499999999997 },
                { start: 2500, end: 4000, density: 0.2360499999999999 },
                { start: 4000, density: 0.1057000000000004 },
              ],
              percentiles: { p75: 2941 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8543999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0871 },
                { start: "0.25", density: 0.05850000000000007 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.580816163232647 },
                { start: 200, end: 500, density: 0.2719543908781758 },
                { start: 500, density: 0.1472294458891772 },
              ],
              percentiles: { p75: 310 },
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
        lcp: 2941,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1654961855490,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9092014099914917 },
                { start: 100, end: 300, density: 0.0611401482922086 },
                { start: 300, density: 0.029658441716299753 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8142823334516617 },
                { start: 2500, end: 4000, density: 0.12359484084723685 },
                { start: 4000, density: 0.06212282570110143 },
              ],
              percentiles: { p75: 2206 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9407677814413565,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02626000942063118,
                },
                { start: "0.25", density: 0.03297220913801224 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37328519855595704 },
                { start: 200, end: 500, density: 0.4484957882069799 },
                { start: 500, density: 0.17821901323706316 },
              ],
              percentiles: { p75: 413 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5383170989320497 },
                { start: 800, end: 1800, density: 0.3760122051402414 },
                { start: 1800, density: 0.08567069592770898 },
              ],
              percentiles: { p75: 1143 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7298224852071004 },
                { start: 1800, end: 3000, density: 0.18177514792899402 },
                { start: 3000, density: 0.08840236686390565 },
              ],
              percentiles: { p75: 1886 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1886,
        lcp: 2206,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1654961856340,
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
                  density: 0.9743204480262259,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016800983472203247,
                },
                { start: "0.25", density: 0.008878568501570821 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.589726484322882 },
                { start: 200, end: 500, density: 0.2823215476984656 },
                { start: 500, density: 0.12795196797865235 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7384378929719156 },
                { start: 800, end: 1800, density: 0.24758977225094317 },
                { start: 1800, density: 0.013972334777141264 },
              ],
              percentiles: { p75: 817 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.916273257428492 },
                { start: 1800, end: 3000, density: 0.06609275201332965 },
                { start: 3000, density: 0.01763399055817825 },
              ],
              percentiles: { p75: 1307 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608731466227348 },
                { start: 100, end: 300, density: 0.027182866556836913 },
                { start: 300, density: 0.011943986820428333 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9443678477871226 },
                { start: 2500, end: 4000, density: 0.0468082172893975 },
                { start: 4000, density: 0.008823934923479954 },
              ],
              percentiles: { p75: 1614 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1307,
        lcp: 1614,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961857505,
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
                  density: 0.9007590347796534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07046561685736945,
                },
                { start: "0.25", density: 0.028775348362977213 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5961538461538469 },
                { start: 200, end: 500, density: 0.3032012897282362 },
                { start: 500, density: 0.10064486411791695 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44006381039197795 },
                { start: 800, end: 1800, density: 0.34161349134001806 },
                { start: 1800, density: 0.21832269826800385 },
              ],
              percentiles: { p75: 1766 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48508741858073506 },
                { start: 1800, end: 3000, density: 0.25505656496400486 },
                { start: 3000, density: 0.25985601645526 },
              ],
              percentiles: { p75: 3302 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5614355926391577 },
                { start: 2500, end: 4000, density: 0.21751057263687237 },
                { start: 4000, density: 0.22105383472397003 },
              ],
              percentiles: { p75: 3923 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3302, lcp: 3923, cls: "0.00" },
      timestamp: 1654961858720,
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
                { start: 0, end: 2500, density: 0.9053510671203217 },
                { start: 2500, end: 4000, density: 0.07021342406433649 },
                { start: 4000, density: 0.024435508815341754 },
              ],
              percentiles: { p75: 1826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9343581860107609,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04289008455034589,
                },
                { start: "0.25", density: 0.022751729438893156 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4440606697702355 },
                { start: 200, end: 500, density: 0.41282474846072953 },
                { start: 500, density: 0.14311458176903497 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7200687714910909 },
                { start: 800, end: 1800, density: 0.24773366677086592 },
                { start: 1800, density: 0.032197561738043154 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8702870442203257 },
                { start: 1800, end: 3000, density: 0.09775019394879748 },
                { start: 3000, density: 0.031962761830876825 },
              ],
              percentiles: { p75: 1411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.922506946588453 },
                { start: 100, end: 300, density: 0.03967273849953689 },
                { start: 300, density: 0.03782031491201007 },
              ],
              percentiles: { p75: 17 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1411,
        lcp: 1826,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1654961859836,
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
                { start: 0, end: 800, density: 0.3604203670811126 },
                { start: 800, end: 1800, density: 0.40615748963883896 },
                { start: 1800, density: 0.23342214328004837 },
              ],
              percentiles: { p75: 1716 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6026265309133841 },
                { start: 1800, end: 3000, density: 0.2036299247454628 },
                { start: 3000, density: 0.19374354434115318 },
              ],
              percentiles: { p75: 2585 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.934654919236417 },
                { start: 100, end: 300, density: 0.039207048458149776 },
                { start: 300, density: 0.026138032305433257 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6782532495983642 },
                { start: 2500, end: 4000, density: 0.19439170439608588 },
                { start: 4000, density: 0.1273550460055498 },
              ],
              percentiles: { p75: 2949 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9577118030412745,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02534395365677046,
                },
                { start: "0.25", density: 0.016944243301955108 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6017964071856285 },
                { start: 200, end: 500, density: 0.3068862275449102 },
                { start: 500, density: 0.0913173652694613 },
              ],
              percentiles: { p75: 270 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2585,
        lcp: 2949,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961860932,
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
                  density: 0.8783121687831217,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0710928907109289,
                },
                { start: "0.25", density: 0.05059494050594943 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5506651995598687 },
                { start: 200, end: 500, density: 0.30919275782734856 },
                { start: 500, density: 0.14014204261278276 },
              ],
              percentiles: { p75: 335 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47408445067040234 },
                { start: 800, end: 1800, density: 0.41424854912947773 },
                { start: 1800, density: 0.11166700020012 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6412000000000001 },
                { start: 1800, end: 3000, density: 0.21710000000000004 },
                { start: 3000, density: 0.14169999999999996 },
              ],
              percentiles: { p75: 2234 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627074585082983 },
                { start: 100, end: 300, density: 0.02519496100779844 },
                { start: 300, density: 0.012097580483903317 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7256079255478832 },
                { start: 2500, end: 4000, density: 0.15660962673871706 },
                { start: 4000, density: 0.11778244771339977 },
              ],
              percentiles: { p75: 2668 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2234,
        lcp: 2668,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961862094,
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
                  density: 0.9196999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04699999999999999,
                },
                { start: "0.25", density: 0.033299999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.65016501650165 },
                { start: 200, end: 500, density: 0.2899289928992898 },
                { start: 500, density: 0.05990599059906005 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43866839948015585 },
                { start: 800, end: 1800, density: 0.4625612316305108 },
                { start: 1800, density: 0.0987703688893334 },
              ],
              percentiles: { p75: 1305 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6096609660966085 },
                { start: 1800, end: 3000, density: 0.254525452545254 },
                { start: 3000, density: 0.1358135813581375 },
              ],
              percentiles: { p75: 2351 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9722944588917785 },
                { start: 100, end: 300, density: 0.021604320864172834 },
                { start: 300, density: 0.006101220244048803 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7012798720127984 },
                { start: 2500, end: 4000, density: 0.191930806919308 },
                { start: 4000, density: 0.1067893210678937 },
              ],
              percentiles: { p75: 2771 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2351,
        lcp: 2771,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654961862962,
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
                { start: 0, end: 1800, density: 0.8635307138904258 },
                { start: 1800, end: 3000, density: 0.09640287769784167 },
                { start: 3000, density: 0.04006640841173267 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9526362823949956 },
                { start: 100, end: 300, density: 0.026027703306523674 },
                { start: 300, density: 0.021336014298480758 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8850835454243667 },
                { start: 2500, end: 4000, density: 0.08315812769724464 },
                { start: 4000, density: 0.031758326878388546 },
              ],
              percentiles: { p75: 1885 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.927365051330169,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06292085219119109,
                },
                { start: "0.25", density: 0.009714096478640022 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5926459187063902 },
                { start: 200, end: 500, density: 0.31819692103222935 },
                { start: 500, density: 0.08915716026138056 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5884180164189041 },
                { start: 800, end: 1800, density: 0.3612158863989352 },
                { start: 1800, density: 0.050366097182160674 },
              ],
              percentiles: { p75: 984 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1885,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961863795,
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
                { start: 0, end: 800, density: 0.45592796398199076 },
                { start: 800, end: 1800, density: 0.41410705352676336 },
                { start: 1800, density: 0.12996498249124586 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6335801480888522 },
                { start: 1800, end: 3000, density: 0.21232739643786233 },
                { start: 3000, density: 0.15409245547328534 },
              ],
              percentiles: { p75: 2327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.953718512594962 },
                { start: 100, end: 300, density: 0.02888844462215114 },
                { start: 300, density: 0.017393042782886788 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7121348539415763 },
                { start: 2500, end: 4000, density: 0.1620148059223689 },
                { start: 4000, density: 0.12585034013605503 },
              ],
              percentiles: { p75: 2791 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8827 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06620000000000001,
                },
                { start: "0.25", density: 0.05109999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.611638836116389 },
                { start: 200, end: 500, density: 0.2879712028797123 },
                { start: 500, density: 0.10038996100389874 },
              ],
              percentiles: { p75: 275 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2327,
        lcp: 2791,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961864893,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447055294470554 },
                { start: 100, end: 300, density: 0.031296870312968704 },
                { start: 300, density: 0.02399760023997594 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8909218156368719 },
                { start: 2500, end: 4000, density: 0.07548490301939607 },
                { start: 4000, density: 0.03359328134373193 },
              ],
              percentiles: { p75: 1775 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9474052594740526,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029097090290970903,
                },
                { start: "0.25", density: 0.02349765023497649 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5323999999999997 },
                { start: 200, end: 500, density: 0.3506999999999998 },
                { start: 500, density: 0.11690000000000057 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7930620813755871 },
                { start: 800, end: 1800, density: 0.17084874537638706 },
                { start: 1800, density: 0.036089173248025845 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8614722944588914 },
                { start: 1800, end: 3000, density: 0.09581916383276645 },
                { start: 3000, density: 0.04270854170834225 },
              ],
              percentiles: { p75: 1415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1415,
        lcp: 1775,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961865654,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6417785234899328 },
                { start: 800, end: 1800, density: 0.3220278044103547 },
                { start: 1800, density: 0.036193672099712436 },
              ],
              percentiles: { p75: 940 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8655552890381387 },
                { start: 1800, end: 3000, density: 0.10566082993523628 },
                { start: 3000, density: 0.028783881026625 },
              ],
              percentiles: { p75: 1418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603874332546877 },
                { start: 100, end: 300, density: 0.026946479572829994 },
                { start: 300, density: 0.01266608717248229 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8967645296584782 },
                { start: 2500, end: 4000, density: 0.08274415817854999 },
                { start: 4000, density: 0.020491312162971755 },
              ],
              percentiles: { p75: 1848 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9425095419847328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04425095419847328,
                },
                { start: "0.25", density: 0.013239503816793908 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5394752605726613 },
                { start: 200, end: 500, density: 0.36288486881514326 },
                { start: 500, density: 0.09763987061219544 },
              ],
              percentiles: { p75: 295 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 1848,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961866514,
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
                  density: 0.8104189581041896,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1316868313168683,
                },
                { start: "0.25", density: 0.05789421057894212 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6133386661333865 },
                { start: 200, end: 500, density: 0.28177182281771823 },
                { start: 500, density: 0.10488951104889527 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7622000000000001 },
                { start: 800, end: 1800, density: 0.20730000000000004 },
                { start: 1800, density: 0.030499999999999944 },
              ],
              percentiles: { p75: 808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8910326901929421 },
                { start: 1800, end: 3000, density: 0.08007597720683794 },
                { start: 3000, density: 0.02889133260022 },
              ],
              percentiles: { p75: 1311 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.947805219478052 },
                { start: 100, end: 300, density: 0.027697230276972292 },
                { start: 300, density: 0.024497550244975623 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9103410341034103 },
                { start: 2500, end: 4000, density: 0.06615661566156618 },
                { start: 4000, density: 0.02350235023502363 },
              ],
              percentiles: { p75: 1781 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1311,
        lcp: 1781,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654961867801,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6257251450290051 },
                { start: 1800, end: 3000, density: 0.20724144828965774 },
                { start: 3000, density: 0.16703340668133726 },
              ],
              percentiles: { p75: 2406 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954 },
                { start: 100, end: 300, density: 0.027200000000000005 },
                { start: 300, density: 0.018800000000000067 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6915691569156923 },
                { start: 2500, end: 4000, density: 0.17621762176217637 },
                { start: 4000, density: 0.13221322132213126 },
              ],
              percentiles: { p75: 2911 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8293170682931706,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11708829117088292,
                },
                { start: "0.25", density: 0.053594640535946425 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7191719171917195 },
                { start: 200, end: 500, density: 0.2130213021302131 },
                { start: 500, density: 0.0678067806780673 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37139999999999956 },
                { start: 800, end: 1800, density: 0.4128999999999995 },
                { start: 1800, density: 0.21570000000000095 },
              ],
              percentiles: { p75: 1660 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2406,
        lcp: 2911,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654961868560,
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
                { start: 0, end: 1800, density: 0.9099 },
                { start: 1800, end: 3000, density: 0.0708 },
                { start: 3000, density: 0.019299999999999862 },
              ],
              percentiles: { p75: 1219 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593203398300849 },
                { start: 100, end: 300, density: 0.023088455772113936 },
                { start: 300, density: 0.01759120439780116 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9268853770754151 },
                { start: 2500, end: 4000, density: 0.056511302260452055 },
                { start: 4000, density: 0.016603320664132795 },
              ],
              percentiles: { p75: 1619 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8608 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10279999999999999,
                },
                { start: "0.25", density: 0.03640000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7031000000000004 },
                { start: 200, end: 500, density: 0.21780000000000008 },
                { start: 500, density: 0.07909999999999953 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7348469693938787 },
                { start: 800, end: 1800, density: 0.24064812962592516 },
                { start: 1800, density: 0.024504900980196007 },
              ],
              percentiles: { p75: 825 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1219,
        lcp: 1619,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654961869400,
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
                  density: 0.9267073292670733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0574942505749425,
                },
                { start: "0.25", density: 0.015798420157984196 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6322529011604641 },
                { start: 200, end: 500, density: 0.2869147659063624 },
                { start: 500, density: 0.08083233293317346 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7078584283143369 },
                { start: 800, end: 1800, density: 0.22725454909018192 },
                { start: 1800, density: 0.06488702259548114 },
              ],
              percentiles: { p75: 868 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8302830283028301 },
                { start: 1800, end: 3000, density: 0.11271127112711272 },
                { start: 3000, density: 0.057005700570057216 },
              ],
              percentiles: { p75: 1507 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659999999999997 },
                { start: 100, end: 300, density: 0.015899999999999997 },
                { start: 300, density: 0.018100000000000106 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8670632936706326 },
                { start: 2500, end: 4000, density: 0.09084091590840913 },
                { start: 4000, density: 0.04209579042095819 },
              ],
              percentiles: { p75: 1903 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1507,
        lcp: 1903,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961870311,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5737000000000001 },
                { start: 200, end: 500, density: 0.30010000000000003 },
                { start: 500, density: 0.12619999999999995 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6135613561356137 },
                { start: 800, end: 1800, density: 0.3454345434543455 },
                { start: 1800, density: 0.04100410041004092 },
              ],
              percentiles: { p75: 981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7925207479252072 },
                { start: 1800, end: 3000, density: 0.15638436156384355 },
                { start: 3000, density: 0.051094890510949134 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525094981003798 },
                { start: 100, end: 300, density: 0.027194561087782437 },
                { start: 300, density: 0.020295940811837755 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8353670734146827 },
                { start: 2500, end: 4000, density: 0.1210242048409681 },
                { start: 4000, density: 0.04360872174434912 },
              ],
              percentiles: { p75: 2124 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8911 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08180000000000001,
                },
                { start: "0.25", density: 0.027100000000000003 },
              ],
              percentiles: { p75: "0.01" },
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
        lcp: 2124,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961871230,
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
                { start: 0, end: 800, density: 0.3715558029501806 },
                { start: 800, end: 1800, density: 0.45727804063456695 },
                { start: 1800, density: 0.17116615641525254 },
              ],
              percentiles: { p75: 1509 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.594575505014832 },
                { start: 1800, end: 3000, density: 0.235909026698686 },
                { start: 3000, density: 0.16951546828648198 },
              ],
              percentiles: { p75: 2441 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8813108945969889 },
                { start: 100, end: 300, density: 0.04856805432536171 },
                { start: 300, density: 0.0701210510776494 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6969440923813529 },
                { start: 2500, end: 4000, density: 0.1747641177298968 },
                { start: 4000, density: 0.12829178988875028 },
              ],
              percentiles: { p75: 2820 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8925194660734149,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03211902113459399,
                },
                { start: "0.25", density: 0.07536151279199114 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48901818181818185 },
                { start: 200, end: 500, density: 0.3147636363636363 },
                { start: 500, density: 0.19621818181818185 },
              ],
              percentiles: { p75: 396 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2441,
        lcp: 2820,
        cls: "0.02",
        fid: 20,
      },
      timestamp: 1654961872283,
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
                { start: 0, end: 800, density: 0.7138713871387138 },
                { start: 800, end: 1800, density: 0.22422242224222422 },
                { start: 1800, density: 0.061906190619062135 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8335999999999995 },
                { start: 1800, end: 3000, density: 0.09799999999999995 },
                { start: 3000, density: 0.06840000000000065 },
              ],
              percentiles: { p75: 1453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9683968396839685 },
                { start: 100, end: 300, density: 0.018401840184018404 },
                { start: 300, density: 0.013201320132013167 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8632363236323625 },
                { start: 2500, end: 4000, density: 0.08905890589058897 },
                { start: 4000, density: 0.04770477047704846 },
              ],
              percentiles: { p75: 1860 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9567043295670433,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0290970902909709,
                },
                { start: "0.25", density: 0.014198580141985793 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5956404359564045 },
                { start: 200, end: 500, density: 0.32816718328167177 },
                { start: 500, density: 0.07619238076192383 },
              ],
              percentiles: { p75: 272 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1453,
        lcp: 1860,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654961873526,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6133386661333865 },
                { start: 200, end: 500, density: 0.28177182281771823 },
                { start: 500, density: 0.10488951104889527 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7622000000000001 },
                { start: 800, end: 1800, density: 0.20730000000000004 },
                { start: 1800, density: 0.030499999999999944 },
              ],
              percentiles: { p75: 808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8910326901929421 },
                { start: 1800, end: 3000, density: 0.08007597720683794 },
                { start: 3000, density: 0.02889133260022 },
              ],
              percentiles: { p75: 1311 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.947805219478052 },
                { start: 100, end: 300, density: 0.027697230276972292 },
                { start: 300, density: 0.024497550244975623 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9103410341034103 },
                { start: 2500, end: 4000, density: 0.06615661566156618 },
                { start: 4000, density: 0.02350235023502363 },
              ],
              percentiles: { p75: 1781 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8104189581041896,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1316868313168683,
                },
                { start: "0.25", density: 0.05789421057894212 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1311,
        lcp: 1781,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654961874428,
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
                  density: 0.9226077392260774,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0512948705129487,
                },
                { start: "0.25", density: 0.0260973902609739 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6163616361636164 },
                { start: 200, end: 500, density: 0.2712271227122713 },
                { start: 500, density: 0.1124112411241123 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47783891945973017 },
                { start: 800, end: 1800, density: 0.28944472236118085 },
                { start: 1800, density: 0.23271635817908895 },
              ],
              percentiles: { p75: 1750 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5969806038792254 },
                { start: 1800, end: 3000, density: 0.14717056588682292 },
                { start: 3000, density: 0.2558488302339518 },
              ],
              percentiles: { p75: 3141 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572957295729574 },
                { start: 100, end: 300, density: 0.030203020302030207 },
                { start: 300, density: 0.012501250125012516 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6121999999999996 },
                { start: 2500, end: 4000, density: 0.20459999999999978 },
                { start: 4000, density: 0.18320000000000064 },
              ],
              percentiles: { p75: 3470 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3141,
        lcp: 3470,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961875252,
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
                { start: 0, end: 800, density: 0.32310000000000016 },
                { start: 800, end: 1800, density: 0.4727000000000003 },
                { start: 1800, density: 0.2041999999999995 },
              ],
              percentiles: { p75: 1656 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6361272254450887 },
                { start: 1800, end: 3000, density: 0.22084416883376665 },
                { start: 3000, density: 0.1430286057211447 },
              ],
              percentiles: { p75: 2419 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9767976797679768 },
                { start: 100, end: 300, density: 0.005000500050005001 },
                { start: 300, density: 0.01820182018201823 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7102999999999998 },
                { start: 2500, end: 4000, density: 0.19339999999999993 },
                { start: 4000, density: 0.09630000000000026 },
              ],
              percentiles: { p75: 2788 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8455691138227646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11112222444488898,
                },
                { start: "0.25", density: 0.043308661732346446 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7314 },
                { start: 200, end: 500, density: 0.22829999999999998 },
                { start: 500, density: 0.04030000000000006 },
              ],
              percentiles: { p75: 207 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2419,
        lcp: 2788,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1654961876617,
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
                { start: 0, end: 800, density: 0.3745275888133029 },
                { start: 800, end: 1800, density: 0.47367094986142566 },
                { start: 1800, density: 0.15180146132527153 },
              ],
              percentiles: { p75: 1446 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5695214105793441 },
                { start: 1800, end: 3000, density: 0.2748110831234252 },
                { start: 3000, density: 0.1556675062972307 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521890948160086 },
                { start: 100, end: 300, density: 0.04055868922911629 },
                { start: 300, density: 0.0072522159548751 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7107129289603648 },
                { start: 2500, end: 4000, density: 0.17038115740154483 },
                { start: 4000, density: 0.1189059136380904 },
              ],
              percentiles: { p75: 2716 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9678990756932301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012615538346240318,
                },
                { start: "0.25", density: 0.019485385960529594 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.648977478643541 },
                { start: 200, end: 500, density: 0.2973077918716023 },
                { start: 500, density: 0.05371472948485669 },
              ],
              percentiles: { p75: 244 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2432,
        lcp: 2716,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961877514,
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
                  density: 0.8722127787221278,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0764923507649235,
                },
                { start: "0.25", density: 0.051294870512948745 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7647999999999998 },
                { start: 200, end: 500, density: 0.13879999999999995 },
                { start: 500, density: 0.09640000000000011 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29480000000000006 },
                { start: 800, end: 1800, density: 0.49570000000000014 },
                { start: 1800, density: 0.2094999999999999 },
              ],
              percentiles: { p75: 1613 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.04669066186762628 },
                { start: 1800, end: 3000, density: 0.4359128174365108 },
                { start: 3000, density: 0.517396520695863 },
              ],
              percentiles: { p75: 4648 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22777277727772813 },
                { start: 2500, end: 4000, density: 0.3938893889388944 },
                { start: 4000, density: 0.3783378337833775 },
              ],
              percentiles: { p75: 5072 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4648, lcp: 5072, cls: "0.05" },
      timestamp: 1654961878901,
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
                  density: 0.8493999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10590000000000001,
                },
                { start: "0.25", density: 0.0447 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7148000000000001 },
                { start: 200, end: 500, density: 0.20130000000000003 },
                { start: 500, density: 0.08389999999999984 },
              ],
              percentiles: { p75: 227 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8484545363609083 },
                { start: 800, end: 1800, density: 0.1338401520456137 },
                { start: 1800, density: 0.01770531159347796 },
              ],
              percentiles: { p75: 680 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9437718859429715 },
                { start: 1800, end: 3000, density: 0.04152076038019009 },
                { start: 3000, density: 0.014707353676838508 },
              ],
              percentiles: { p75: 1121 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651069786042792 },
                { start: 100, end: 300, density: 0.020795840831833633 },
                { start: 300, density: 0.014097180563887273 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9483206717313075 },
                { start: 2500, end: 4000, density: 0.038284686125549784 },
                { start: 4000, density: 0.013394642143142753 },
              ],
              percentiles: { p75: 1491 },
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
        lcp: 1491,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654961879709,
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
                { start: 0, end: 800, density: 0.5968790637191154 },
                { start: 800, end: 1800, density: 0.29038711613484025 },
                { start: 1800, density: 0.11273382014604427 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7074999999999996 },
                { start: 1800, end: 3000, density: 0.2173999999999999 },
                { start: 3000, density: 0.07510000000000046 },
              ],
              percentiles: { p75: 1968 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475157452764171 },
                { start: 100, end: 300, density: 0.039288213535939226 },
                { start: 300, density: 0.01319604118764365 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.759275927592759 },
                { start: 2500, end: 4000, density: 0.16831683168316827 },
                { start: 4000, density: 0.07240724072407269 },
              ],
              percentiles: { p75: 2459 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9657 },
                { start: "0.10", end: "0.25", density: 0.0243 },
                { start: "0.25", density: 0.010000000000000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5798579857985804 },
                { start: 200, end: 500, density: 0.33633363336333655 },
                { start: 500, density: 0.08380838083808308 },
              ],
              percentiles: { p75: 292 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1968,
        lcp: 2459,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961880521,
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
                  density: 0.9724919093851133,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018338727076591156,
                },
                { start: "0.25", density: 0.00916936353829558 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5649930115041399 },
                { start: 200, end: 500, density: 0.3500698849586069 },
                { start: 500, density: 0.08493710353725323 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5953869368398359 },
                { start: 800, end: 1800, density: 0.29111877559818916 },
                { start: 1800, density: 0.11349428756197498 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.705381214278011 },
                { start: 1800, end: 3000, density: 0.22020920953305284 },
                { start: 3000, density: 0.07440957618893612 },
              ],
              percentiles: { p75: 1971 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467186484730344 },
                { start: 100, end: 300, density: 0.04006930907515703 },
                { start: 300, density: 0.013212042451808485 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7552904340315265 },
                { start: 2500, end: 4000, density: 0.17172316994169717 },
                { start: 4000, density: 0.07298639602677623 },
              ],
              percentiles: { p75: 2480 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1971,
        lcp: 2480,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961881801,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.871087108710871 },
                { start: 800, end: 1800, density: 0.11351135113511353 },
                { start: 1800, density: 0.01540154015401546 },
              ],
              percentiles: { p75: 650 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9256000000000002 },
                { start: 1800, end: 3000, density: 0.05270000000000001 },
                { start: 3000, density: 0.021699999999999827 },
              ],
              percentiles: { p75: 1149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9247075292470754 },
                { start: 100, end: 300, density: 0.0397960203979602 },
                { start: 300, density: 0.03549645035496437 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9237500000000001 },
                { start: 2500, end: 4000, density: 0.058449999999999995 },
                { start: 4000, density: 0.017799999999999892 },
              ],
              percentiles: { p75: 1669 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.886011398860114,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0804919508049195,
                },
                { start: "0.25", density: 0.03349665033496649 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4979004199160167 },
                { start: 200, end: 500, density: 0.3300339932013596 },
                { start: 500, density: 0.17206558688262363 },
              ],
              percentiles: { p75: 366 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1149,
        lcp: 1669,
        cls: "0.03",
        fid: 14,
      },
      timestamp: 1654961883160,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.ke" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.509703323667187 },
                { start: 1800, end: 3000, density: 0.2541824670979254 },
                { start: 3000, density: 0.23611420923488766 },
              ],
              percentiles: { p75: 2966 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9444193912063134 },
                { start: 100, end: 300, density: 0.041826381059751956 },
                { start: 300, density: 0.013754227733934631 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5649660998110486 },
                { start: 2500, end: 4000, density: 0.2505279537623654 },
                { start: 4000, density: 0.18450594642658613 },
              ],
              percentiles: { p75: 3467 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8303144793865985,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10645627291921324,
                },
                { start: "0.25", density: 0.06322924769418824 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5877989371124894 },
                { start: 200, end: 500, density: 0.30569087688219687 },
                { start: 500, density: 0.10651018600531374 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2876742642177472 },
                { start: 800, end: 1800, density: 0.44080548793980956 },
                { start: 1800, density: 0.27152024784244316 },
              ],
              percentiles: { p75: 1919 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2966,
        lcp: 3467,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961884071,
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
                  density: 0.9601123595505618,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024606741573033705,
                },
                { start: "0.25", density: 0.01528089887640448 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5972649572649569 },
                { start: 200, end: 500, density: 0.31566951566951557 },
                { start: 500, density: 0.0870655270655277 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.694652164060729 },
                { start: 800, end: 1800, density: 0.23600725130296835 },
                { start: 1800, density: 0.06934058463630247 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8248216510021517 },
                { start: 1800, end: 3000, density: 0.1168610576378666 },
                { start: 3000, density: 0.0583172913599817 },
              ],
              percentiles: { p75: 1528 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626612355736591 },
                { start: 100, end: 300, density: 0.017537904503281285 },
                { start: 300, density: 0.019800859923059615 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8686880072137056 },
                { start: 2500, end: 4000, density: 0.09017132551848504 },
                { start: 4000, density: 0.04114066726780929 },
              ],
              percentiles: { p75: 1888 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1528,
        lcp: 1888,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961885489,
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
                { start: 0, end: 1800, density: 0.9180848361696725 },
                { start: 1800, end: 3000, density: 0.06045212090424182 },
                { start: 3000, density: 0.021463042926085734 },
              ],
              percentiles: { p75: 1204 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9062222785451783 },
                { start: 100, end: 300, density: 0.04929666708908884 },
                { start: 300, density: 0.0444810543657328 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9228767297194362 },
                { start: 2500, end: 4000, density: 0.061762092167068655 },
                { start: 4000, density: 0.015361178113495065 },
              ],
              percentiles: { p75: 1694 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9007279116465864,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06400602409638553,
                },
                { start: "0.25", density: 0.035266064257028135 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3960346964064433 },
                { start: 200, end: 500, density: 0.3990086741016106 },
                { start: 500, density: 0.20495662949194599 },
              ],
              percentiles: { p75: 418 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8552532123960694 },
                { start: 800, end: 1800, density: 0.12836986646510454 },
                { start: 1800, density: 0.01637692113882597 },
              ],
              percentiles: { p75: 674 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1204,
        lcp: 1694,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654961887614,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4670934186837367 },
                { start: 800, end: 1800, density: 0.41218243648729747 },
                { start: 1800, density: 0.12072414482896579 },
              ],
              percentiles: { p75: 1340 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6756324367563246 },
                { start: 1800, end: 3000, density: 0.20527947205279487 },
                { start: 3000, density: 0.11908809119088053 },
              ],
              percentiles: { p75: 2204 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532999999999998 },
                { start: 100, end: 300, density: 0.027700000000000002 },
                { start: 300, density: 0.019000000000000114 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7137213721372136 },
                { start: 2500, end: 4000, density: 0.18446844684468441 },
                { start: 4000, density: 0.10181018101810195 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8167 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13140000000000002,
                },
                { start: "0.25", density: 0.0519 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6999699969996995 },
                { start: 200, end: 500, density: 0.20932093209320918 },
                { start: 500, density: 0.09070907090709138 },
              ],
              percentiles: { p75: 229 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2204,
        lcp: 2767,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654961888965,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8459227467811159 },
                { start: 200, end: 500, density: 0.12532188841201716 },
                { start: 500, density: 0.028755364806866978 },
              ],
              percentiles: { p75: 152 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4558652729384438 },
                { start: 800, end: 1800, density: 0.3886953155245839 },
                { start: 1800, density: 0.1554394115369722 },
              ],
              percentiles: { p75: 1419 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.640731375218829 },
                { start: 1800, end: 3000, density: 0.24839525384166497 },
                { start: 3000, density: 0.11087337093950618 },
              ],
              percentiles: { p75: 2164 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522587268993841 },
                { start: 100, end: 300, density: 0.03901437371663245 },
                { start: 300, density: 0.008726899383983574 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7503952569169958 },
                { start: 2500, end: 4000, density: 0.18517786561264815 },
                { start: 4000, density: 0.06442687747035605 },
              ],
              percentiles: { p75: 2487 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9536753445635529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03713629402756509,
                },
                { start: "0.25", density: 0.009188361408882085 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2164,
        lcp: 2487,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654961889752,
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
                  density: 0.9434322033898304,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04152542372881356,
                },
                { start: "0.25", density: 0.01504237288135592 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5307017543859647 },
                { start: 200, end: 500, density: 0.3277511961722486 },
                { start: 500, density: 0.1415470494417867 },
              ],
              percentiles: { p75: 325 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7201387383481466 },
                { start: 800, end: 1800, density: 0.2395404292217646 },
                { start: 1800, density: 0.04032083243008882 },
              ],
              percentiles: { p75: 860 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8933623503808488 },
                { start: 1800, end: 3000, density: 0.07377584330794341 },
                { start: 3000, density: 0.03286180631120778 },
              ],
              percentiles: { p75: 1348 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634487207052247 },
                { start: 100, end: 300, density: 0.024080842829499034 },
                { start: 300, density: 0.012470436465276295 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.924793208532869 },
                { start: 2500, end: 4000, density: 0.05975185023944274 },
                { start: 4000, density: 0.01545494122768829 },
              ],
              percentiles: { p75: 1694 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1348,
        lcp: 1694,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961891120,
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
                { start: "0.00", end: "0.10", density: 0.8948 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07780000000000001,
                },
                { start: "0.25", density: 0.027400000000000032 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47500999600159927 },
                { start: 200, end: 500, density: 0.3941423430627748 },
                { start: 500, density: 0.13084766093562597 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6364999999999998 },
                { start: 800, end: 1800, density: 0.3314 },
                { start: 1800, density: 0.03210000000000016 },
              ],
              percentiles: { p75: 936 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8874887488748874 },
                { start: 1800, end: 3000, density: 0.08790879087908791 },
                { start: 3000, density: 0.024602460246024745 },
              ],
              percentiles: { p75: 1387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616885065519655 },
                { start: 100, end: 300, density: 0.02580774232269681 },
                { start: 300, density: 0.012503751125337704 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9034903490349036 },
                { start: 2500, end: 4000, density: 0.07640764076407647 },
                { start: 4000, density: 0.020102010201019982 },
              ],
              percentiles: { p75: 1795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1387,
        lcp: 1795,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654961892703,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9132331555986427 },
                { start: 2500, end: 4000, density: 0.06834706737760539 },
                { start: 4000, density: 0.018419777023751808 },
              ],
              percentiles: { p75: 1768 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9425883488119647,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03931974430104934,
                },
                { start: "0.25", density: 0.018091906886985885 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4261036468330137 },
                { start: 200, end: 500, density: 0.43138195777351285 },
                { start: 500, density: 0.14251439539347338 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6289247181476542 },
                { start: 800, end: 1800, density: 0.3400412171172263 },
                { start: 1800, density: 0.03103406473511958 },
              ],
              percentiles: { p75: 943 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.885102239532619 },
                { start: 1800, end: 3000, density: 0.09006815968841281 },
                { start: 3000, density: 0.024829600778968234 },
              ],
              percentiles: { p75: 1398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9569500182415176 },
                { start: 100, end: 300, density: 0.029064818192873647 },
                { start: 300, density: 0.013985163565608721 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1398,
        lcp: 1768,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654961893573,
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
                { start: 0, end: 100, density: 0.9750686184812443 },
                { start: 100, end: 300, density: 0.015667886550777676 },
                { start: 300, density: 0.009263494967978049 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9297483354023247 },
                { start: 2500, end: 4000, density: 0.054452093443177974 },
                { start: 4000, density: 0.015799571154497285 },
              ],
              percentiles: { p75: 1664 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9169012498592501,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07093795743722556,
                },
                { start: "0.25", density: 0.012160792703524374 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6627724106942259 },
                { start: 200, end: 500, density: 0.271512019770838 },
                { start: 500, density: 0.06571556953493597 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6793701506161571 },
                { start: 800, end: 1800, density: 0.28651300775901417 },
                { start: 1800, density: 0.03411684162482882 },
              ],
              percentiles: { p75: 882 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.889855399909625 },
                { start: 1800, end: 3000, density: 0.08619521012200633 },
                { start: 3000, density: 0.02394938996836864 },
              ],
              percentiles: { p75: 1350 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1350,
        lcp: 1664,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961894794,
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
                { start: 0, end: 100, density: 0.9627453598611296 },
                { start: 100, end: 300, density: 0.029376418747496323 },
                { start: 300, density: 0.007878221391374018 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6121125664634933 },
                { start: 2500, end: 4000, density: 0.24043574114900793 },
                { start: 4000, density: 0.14745169238749867 },
              ],
              percentiles: { p75: 3147 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.933230412967966,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03357776920108067,
                },
                { start: "0.25", density: 0.033191817830953325 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4997996527314011 },
                { start: 200, end: 500, density: 0.41004407639909174 },
                { start: 500, density: 0.09015627086950713 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2963917525773197 },
                { start: 800, end: 1800, density: 0.4645618556701033 },
                { start: 1800, density: 0.239046391752577 },
              ],
              percentiles: { p75: 1791 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47796214674617504 },
                { start: 1800, end: 3000, density: 0.3168265491314488 },
                { start: 3000, density: 0.2052113041223763 },
              ],
              percentiles: { p75: 2790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2790,
        lcp: 3147,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961896160,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9015835777126099 },
                { start: 100, end: 300, density: 0.06392961876832844 },
                { start: 300, density: 0.03448680351906166 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5401042256712354 },
                { start: 2500, end: 4000, density: 0.258808202107171 },
                { start: 4000, density: 0.20108757222159357 },
              ],
              percentiles: { p75: 3630 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8604886837067898,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09661074203355477,
                },
                { start: "0.25", density: 0.042900574259655405 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42510402219140053 },
                { start: 200, end: 500, density: 0.32697642163661567 },
                { start: 500, density: 0.24791955617198372 },
              ],
              percentiles: { p75: 497 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3920754293411154 },
                { start: 800, end: 1800, density: 0.4024020653271968 },
                { start: 1800, density: 0.20552250533168784 },
              ],
              percentiles: { p75: 1656 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48445449406444285 },
                { start: 1800, end: 3000, density: 0.24771057094403612 },
                { start: 3000, density: 0.26783493499152095 },
              ],
              percentiles: { p75: 3146 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3146,
        lcp: 3630,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1654961897620,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7478999999999997 },
                { start: 200, end: 500, density: 0.17899999999999994 },
                { start: 500, density: 0.07310000000000036 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7608 },
                { start: 800, end: 1800, density: 0.20630000000000004 },
                { start: 1800, density: 0.032899999999999985 },
              ],
              percentiles: { p75: 798 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9191757527258178 },
                { start: 1800, end: 3000, density: 0.059617885365609705 },
                { start: 3000, density: 0.021206361908572568 },
              ],
              percentiles: { p75: 1213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9822017798220178 },
                { start: 100, end: 300, density: 0.011998800119988003 },
                { start: 300, density: 0.005799420057994205 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9279639819909955 },
                { start: 2500, end: 4000, density: 0.05662831415707854 },
                { start: 4000, density: 0.015407703851925948 },
              ],
              percentiles: { p75: 1628 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8237176282371763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1563843615638436,
                },
                { start: "0.25", density: 0.019898010198980094 },
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
      extractedResults: {
        fcp: 1213,
        lcp: 1628,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1654961898963,
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
                { start: 0, end: 100, density: 0.9822 },
                { start: 100, end: 300, density: 0.0128 },
                { start: 300, density: 0.005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8753557199772339 },
                { start: 2500, end: 4000, density: 0.0993739328400683 },
                { start: 4000, density: 0.025270347182697706 },
              ],
              percentiles: { p75: 1898 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9113911391139115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06180618061806181,
                },
                { start: "0.25", density: 0.026802680268026787 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7800044533511468 },
                { start: 200, end: 500, density: 0.19294143843242043 },
                { start: 500, density: 0.027054108216432893 },
              ],
              percentiles: { p75: 188 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.593366234362447 },
                { start: 800, end: 1800, density: 0.3561345116492597 },
                { start: 1800, density: 0.05049925398829338 },
              ],
              percentiles: { p75: 1067 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8181921417215532 },
                { start: 1800, end: 3000, density: 0.13888258005905066 },
                { start: 3000, density: 0.042925278219396096 },
              ],
              percentiles: { p75: 1501 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1501,
        lcp: 1898,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654961899874,
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
                  density: 0.9429320133935071,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03188237006842335,
                },
                { start: "0.25", density: 0.025185616538069663 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6022662076878945 },
                { start: 200, end: 500, density: 0.2802639127940333 },
                { start: 500, density: 0.11746987951807218 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8416982562547384 },
                { start: 800, end: 1800, density: 0.1431387414708112 },
                { start: 1800, density: 0.015163002274450312 },
              ],
              percentiles: { p75: 704 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9416526653429053 },
                { start: 1800, end: 3000, density: 0.04460058041851228 },
                { start: 3000, density: 0.013746754238582633 },
              ],
              percentiles: { p75: 1194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488919041157847 },
                { start: 100, end: 300, density: 0.0303030303030303 },
                { start: 300, density: 0.020805065581185063 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9487726003233867 },
                { start: 2500, end: 4000, density: 0.039320887843598405 },
                { start: 4000, density: 0.011906511833014801 },
              ],
              percentiles: { p75: 1512 },
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
        lcp: 1512,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654961901260,
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
                { start: 0, end: 800, density: 0.7792192613370732 },
                { start: 800, end: 1800, density: 0.18197755960729306 },
                { start: 1800, density: 0.03880317905563372 },
              ],
              percentiles: { p75: 767 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8517435057336762 },
                { start: 1800, end: 3000, density: 0.10320617832904277 },
                { start: 3000, density: 0.045050315937281045 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9368770764119602 },
                { start: 100, end: 300, density: 0.03571428571428571 },
                { start: 300, density: 0.027408637873754117 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8881176470588233 },
                { start: 2500, end: 4000, density: 0.07811764705882353 },
                { start: 4000, density: 0.033764705882353065 },
              ],
              percentiles: { p75: 1804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9480382998598786,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028608127043437646,
                },
                { start: "0.25", density: 0.02335357309668378 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47361677344205 },
                { start: 200, end: 500, density: 0.39475829935934775 },
                { start: 500, density: 0.13162492719860233 },
              ],
              percentiles: { p75: 343 },
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
        lcp: 1804,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654961902550,
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
                { start: "0.00", end: "0.10", density: 0.948 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040100000000000004,
                },
                { start: "0.25", density: 0.011899999999999997 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6077000000000005 },
                { start: 200, end: 500, density: 0.3072000000000001 },
                { start: 500, density: 0.08509999999999947 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6492350764923508 },
                { start: 800, end: 1800, density: 0.31696830316968305 },
                { start: 1800, density: 0.03379662033796624 },
              ],
              percentiles: { p75: 935 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8725127487251274 },
                { start: 1800, end: 3000, density: 0.10028997100289974 },
                { start: 3000, density: 0.02719728027197274 },
              ],
              percentiles: { p75: 1405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675097470758772 },
                { start: 100, end: 300, density: 0.022293312006398076 },
                { start: 300, density: 0.010196940917724672 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8933286657331467 },
                { start: 2500, end: 4000, density: 0.08406681336267254 },
                { start: 4000, density: 0.022604520904180813 },
              ],
              percentiles: { p75: 1873 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1405,
        lcp: 1873,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961903855,
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
                  density: 0.8247824782478248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12131213121312132,
                },
                { start: "0.25", density: 0.053905390539054 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7828651404578625 },
                { start: 200, end: 500, density: 0.16635009497150846 },
                { start: 500, density: 0.05078476457062913 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.503099380123975 },
                { start: 800, end: 1800, density: 0.3753249350129972 },
                { start: 1800, density: 0.12157568486302786 },
              ],
              percentiles: { p75: 1270 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7454509098180365 },
                { start: 1800, end: 3000, density: 0.14517096580683866 },
                { start: 3000, density: 0.10937812437512479 },
              ],
              percentiles: { p75: 1829 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625112466260122 },
                { start: 100, end: 300, density: 0.02269319204238729 },
                { start: 300, density: 0.014795561331600489 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7966703329667032 },
                { start: 2500, end: 4000, density: 0.12033796620337964 },
                { start: 4000, density: 0.0829917008299172 },
              ],
              percentiles: { p75: 2206 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1829,
        lcp: 2206,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654961904771,
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
                  density: 0.9499272197962153,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03275109170305677,
                },
                { start: "0.25", density: 0.0173216885007278 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6075694344509996 },
                { start: 200, end: 500, density: 0.2914088358037126 },
                { start: 500, density: 0.10102172974528784 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6968061178587495 },
                { start: 800, end: 1800, density: 0.2736542210226422 },
                { start: 1800, density: 0.02953966111860844 },
              ],
              percentiles: { p75: 889 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8924715278804912 },
                { start: 1800, end: 3000, density: 0.08312379825469605 },
                { start: 3000, density: 0.02440467386481273 },
              ],
              percentiles: { p75: 1319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453731343283583 },
                { start: 100, end: 300, density: 0.03164179104477613 },
                { start: 300, density: 0.02298507462686557 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9253544004725339 },
                { start: 2500, end: 4000, density: 0.05736857649143535 },
                { start: 4000, density: 0.01727702303603082 },
              ],
              percentiles: { p75: 1667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1319,
        lcp: 1667,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961905690,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8828882888288826 },
                { start: 2500, end: 4000, density: 0.08510851085108509 },
                { start: 4000, density: 0.032003200320032274 },
              ],
              percentiles: { p75: 1901 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9087999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07499999999999997,
                },
                { start: "0.25", density: 0.016200000000000016 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6294258851770352 },
                { start: 200, end: 500, density: 0.2887577515503099 },
                { start: 500, density: 0.08181636327265476 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5961403859614041 },
                { start: 800, end: 1800, density: 0.3558644135586443 },
                { start: 1800, density: 0.04799520047995168 },
              ],
              percentiles: { p75: 980 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8679660169915038 },
                { start: 1800, end: 3000, density: 0.0936531734132933 },
                { start: 3000, density: 0.03838080959520289 },
              ],
              percentiles: { p75: 1464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9573128061581526 },
                { start: 100, end: 300, density: 0.023293012096371087 },
                { start: 300, density: 0.019394181745476326 },
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
        fcp: 1464,
        lcp: 1901,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654961907023,
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
                  density: 0.9304609743321111,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02069146149816658,
                },
                { start: "0.25", density: 0.048847564169722364 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6114632857897518 },
                { start: 200, end: 500, density: 0.3219756999471738 },
                { start: 500, density: 0.06656101426307437 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41961095672886095 },
                { start: 800, end: 1800, density: 0.4369458779939131 },
                { start: 1800, density: 0.14344316527722595 },
              ],
              percentiles: { p75: 1452 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6468638111656275 },
                { start: 1800, end: 3000, density: 0.21137780135260562 },
                { start: 3000, density: 0.14175838748176686 },
              ],
              percentiles: { p75: 2252 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715156332803392 },
                { start: 100, end: 300, density: 0.01987281399046105 },
                { start: 300, density: 0.008611552729199792 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7021065182829892 },
                { start: 2500, end: 4000, density: 0.18541335453100158 },
                { start: 4000, density: 0.1124801271860093 },
              ],
              percentiles: { p75: 2781 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2252,
        lcp: 2781,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961907918,
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
                { start: 0, end: 1800, density: 0.5242951409718053 },
                { start: 1800, end: 3000, density: 0.30733853229354113 },
                { start: 3000, density: 0.1683663267346536 },
              ],
              percentiles: { p75: 2574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9814018598140186 },
                { start: 100, end: 300, density: 0.0114988501149885 },
                { start: 300, density: 0.007099290070992921 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6402579226232126 },
                { start: 2500, end: 4000, density: 0.2291812456263121 },
                { start: 4000, density: 0.13056083175047534 },
              ],
              percentiles: { p75: 2983 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8514851485148515,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07990799079907993,
                },
                { start: "0.25", density: 0.06860686068606867 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6665333066613325 },
                { start: 200, end: 500, density: 0.279755951190238 },
                { start: 500, density: 0.05371074214842949 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29538861658497556 },
                { start: 800, end: 1800, density: 0.527958387516255 },
                { start: 1800, density: 0.17665299589876937 },
              ],
              percentiles: { p75: 1610 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2574,
        lcp: 2983,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1654961909238,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4639175257731959 },
                { start: 200, end: 500, density: 0.40490579452541764 },
                { start: 500, density: 0.13117667970138636 },
              ],
              percentiles: { p75: 358 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20160353241924267 },
                { start: 800, end: 1800, density: 0.5285847083430173 },
                { start: 1800, density: 0.26981175923774 },
              ],
              percentiles: { p75: 1887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3574527969977726 },
                { start: 1800, end: 3000, density: 0.32801688753371716 },
                { start: 3000, density: 0.3145303154685102 },
              ],
              percentiles: { p75: 3403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9670184696569921 },
                { start: 100, end: 300, density: 0.023027104821300076 },
                { start: 300, density: 0.009954425521707843 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4791324736225087 },
                { start: 2500, end: 4000, density: 0.32872215709261426 },
                { start: 4000, density: 0.192145369284877 },
              ],
              percentiles: { p75: 3661 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.949160447761194,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025186567164179097,
                },
                { start: "0.25", density: 0.02565298507462687 },
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
        fcp: 3403,
        lcp: 3661,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654961910239,
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
                  density: 0.9490435621282752,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024915608423083106,
                },
                { start: "0.25", density: 0.026040829448641695 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5589078038092025 },
                { start: 200, end: 500, density: 0.30962413618742607 },
                { start: 500, density: 0.13146806000337152 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37927631578947363 },
                { start: 800, end: 1800, density: 0.4620065789473683 },
                { start: 1800, density: 0.15871710526315794 },
              ],
              percentiles: { p75: 1460 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6006859382655566 },
                { start: 1800, end: 3000, density: 0.2448146333496654 },
                { start: 3000, density: 0.154499428384778 },
              ],
              percentiles: { p75: 2473 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276532630191164 },
                { start: 100, end: 300, density: 0.0410349373764008 },
                { start: 300, density: 0.03131179960448272 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6935985592665355 },
                { start: 2500, end: 4000, density: 0.20194826457105428 },
                { start: 4000, density: 0.1044531761624102 },
              ],
              percentiles: { p75: 2759 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2473,
        lcp: 2759,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961911596,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453054694530547 },
                { start: 100, end: 300, density: 0.036196380361963806 },
                { start: 300, density: 0.018498150184981507 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8016698330166974 },
                { start: 2500, end: 4000, density: 0.12243775622437743 },
                { start: 4000, density: 0.07589241075892517 },
              ],
              percentiles: { p75: 2252 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8416683336667334,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11482296459291859,
                },
                { start: "0.25", density: 0.04350870174034804 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5055999999999995 },
                { start: 200, end: 500, density: 0.34019999999999967 },
                { start: 500, density: 0.15420000000000098 },
              ],
              percentiles: { p75: 351 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6362272454490903 },
                { start: 800, end: 1800, density: 0.2762552510502103 },
                { start: 1800, density: 0.08751750350069937 },
              ],
              percentiles: { p75: 1018 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7483748374837472 },
                { start: 1800, end: 3000, density: 0.15231523152315207 },
                { start: 3000, density: 0.09930993099310068 },
              ],
              percentiles: { p75: 1850 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1850,
        lcp: 2252,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654961912847,
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
                { start: 0, end: 100, density: 0.9646964696469648 },
                { start: 100, end: 300, density: 0.020602060206020605 },
                { start: 300, density: 0.014701470147014705 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9136 },
                { start: 2500, end: 4000, density: 0.0624 },
                { start: 4000, density: 0.024000000000000042 },
              ],
              percentiles: { p75: 1713 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8009800980098009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15141514151415142,
                },
                { start: "0.25", density: 0.04760476047604766 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6775644871025795 },
                { start: 200, end: 500, density: 0.2316536692661468 },
                { start: 500, density: 0.09078184363127362 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7440255974402561 },
                { start: 800, end: 1800, density: 0.217978202179782 },
                { start: 1800, density: 0.03799620037996181 },
              ],
              percentiles: { p75: 823 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8973897389738973 },
                { start: 1800, end: 3000, density: 0.07350735073507352 },
                { start: 3000, density: 0.02910291029102917 },
              ],
              percentiles: { p75: 1266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1266,
        lcp: 1713,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654961913762,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6917740336967293 },
                { start: 800, end: 1800, density: 0.23959365708622393 },
                { start: 1800, density: 0.06863230921704683 },
              ],
              percentiles: { p75: 897 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8175734291733793 },
                { start: 1800, end: 3000, density: 0.1085636386169289 },
                { start: 3000, density: 0.0738629322096919 },
              ],
              percentiles: { p75: 1522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618822945120438 },
                { start: 100, end: 300, density: 0.0228457909113484 },
                { start: 300, density: 0.015271914576607835 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.867153646155751 },
                { start: 2500, end: 4000, density: 0.08542775783087782 },
                { start: 4000, density: 0.047418596013371325 },
              ],
              percentiles: { p75: 1837 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9819032377200542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.007386433583651359,
                },
                { start: "0.25", density: 0.010710328696294475 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5190353776472026 },
                { start: 200, end: 500, density: 0.3947851634226955 },
                { start: 500, density: 0.08617945893010193 },
              ],
              percentiles: { p75: 297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1522,
        lcp: 1837,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961914852,
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
                { start: 0, end: 100, density: 0.9581678252234359 },
                { start: 100, end: 300, density: 0.02904667328699105 },
                { start: 300, density: 0.012785501489573097 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7375907990314766 },
                { start: 2500, end: 4000, density: 0.1568401937046004 },
                { start: 4000, density: 0.105569007263923 },
              ],
              percentiles: { p75: 2596 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9335815517655538,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024021138601969735,
                },
                { start: "0.25", density: 0.04239730963247658 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4807598039215688 },
                { start: 200, end: 500, density: 0.36017156862745103 },
                { start: 500, density: 0.1590686274509801 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47140611776085095 },
                { start: 800, end: 1800, density: 0.4153064925643813 },
                { start: 1800, density: 0.11328738967476779 },
              ],
              percentiles: { p75: 1236 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6330909090909087 },
                { start: 1800, end: 3000, density: 0.22375757575757557 },
                { start: 3000, density: 0.14315151515151572 },
              ],
              percentiles: { p75: 2259 },
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
        lcp: 2596,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961916209,
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
                { start: 0, end: 100, density: 0.9474194330021807 },
                { start: 100, end: 300, density: 0.031378725466440514 },
                { start: 300, density: 0.021201841531378905 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7027218098267939 },
                { start: 2500, end: 4000, density: 0.20820077765995057 },
                { start: 4000, density: 0.0890774125132555 },
              ],
              percentiles: { p75: 2758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9629064444183589,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015612161051766639,
                },
                { start: "0.25", density: 0.02148139452987438 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5921021235981863 },
                { start: 200, end: 500, density: 0.3042233357193985 },
                { start: 500, density: 0.10367454068241519 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42570281124497994 },
                { start: 800, end: 1800, density: 0.3660524450744154 },
                { start: 1800, density: 0.20824474368060458 },
              ],
              percentiles: { p75: 1638 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5930027093886207 },
                { start: 1800, end: 3000, density: 0.23925079514666042 },
                { start: 3000, density: 0.16774649546471906 },
              ],
              percentiles: { p75: 2540 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2540,
        lcp: 2758,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654961917474,
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
                { start: 0, end: 1800, density: 0.6521006224066401 },
                { start: 1800, end: 3000, density: 0.25389004149377636 },
                { start: 3000, density: 0.09400933609958345 },
              ],
              percentiles: { p75: 2034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9753816531426214 },
                { start: 100, end: 300, density: 0.016916517672947325 },
                { start: 300, density: 0.007701829184431301 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.801943005181347 },
                { start: 2500, end: 4000, density: 0.14028497409326426 },
                { start: 4000, density: 0.05777202072538877 },
              ],
              percentiles: { p75: 2292 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9546738572162302,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021058038007190555,
                },
                { start: "0.25", density: 0.02426810477657936 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5735777496839444 },
                { start: 200, end: 500, density: 0.349936788874842 },
                { start: 500, density: 0.07648546144121368 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4165267914783733 },
                { start: 800, end: 1800, density: 0.49838605551969023 },
                { start: 1800, density: 0.08508715300193662 },
              ],
              percentiles: { p75: 1147 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2034,
        lcp: 2292,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961918851,
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
                { start: "0.00", end: "0.10", density: 0.8492 },
                { start: "0.10", end: "0.25", density: 0.1224 },
                { start: "0.25", density: 0.028400000000000026 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8027197280271975 },
                { start: 200, end: 500, density: 0.147985201479852 },
                { start: 500, density: 0.04929507049295064 },
              ],
              percentiles: { p75: 171 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6070856685348276 },
                { start: 800, end: 1800, density: 0.2996397117694154 },
                { start: 1800, density: 0.09327461969575702 },
              ],
              percentiles: { p75: 1127 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7559023609443779 },
                { start: 1800, end: 3000, density: 0.14955982392957182 },
                { start: 3000, density: 0.0945378151260503 },
              ],
              percentiles: { p75: 1790 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9778022197780222 },
                { start: 100, end: 300, density: 0.017298270172982702 },
                { start: 300, density: 0.00489951004899507 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7804902451225607 },
                { start: 2500, end: 4000, density: 0.13616808404202094 },
                { start: 4000, density: 0.08334167083541852 },
              ],
              percentiles: { p75: 2341 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1790,
        lcp: 2341,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654961920388,
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
                { start: 0, end: 1800, density: 0.4908919174200507 },
                { start: 1800, end: 3000, density: 0.3165564701119952 },
                { start: 3000, density: 0.19255161246795405 },
              ],
              percentiles: { p75: 2697 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.976655885248207 },
                { start: 100, end: 300, density: 0.015328364505695403 },
                { start: 300, density: 0.008015750246097613 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6343333781783931 },
                { start: 2500, end: 4000, density: 0.24781380330956507 },
                { start: 4000, density: 0.11785281851204173 },
              ],
              percentiles: { p75: 2980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9321127889883737,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027662702124816255,
                },
                { start: "0.25", density: 0.04022450888681009 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5762384434938597 },
                { start: 200, end: 500, density: 0.37270594728853335 },
                { start: 500, density: 0.05105560921760691 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2815782386210613 },
                { start: 800, end: 1800, density: 0.5246431457042825 },
                { start: 1800, density: 0.19377861567465635 },
              ],
              percentiles: { p75: 1648 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2697,
        lcp: 2980,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961921320,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5674067406740684 },
                { start: 2500, end: 4000, density: 0.21457145714571493 },
                { start: 4000, density: 0.2180218021802167 },
              ],
              percentiles: { p75: 3839 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7280271972802719,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.1292870712928708 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5963999999999999 },
                { start: 200, end: 500, density: 0.34469999999999995 },
                { start: 500, density: 0.05890000000000004 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143828765753153 },
                { start: 800, end: 1800, density: 0.355971194238848 },
                { start: 1800, density: 0.22964592918583682 },
              ],
              percentiles: { p75: 1863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5145514551455153 },
                { start: 1800, end: 3000, density: 0.20812081208120842 },
                { start: 3000, density: 0.27732773277327627 },
              ],
              percentiles: { p75: 3410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9314 },
                { start: 100, end: 300, density: 0.0572 },
                { start: 300, density: 0.011399999999999999 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3410,
        lcp: 3839,
        cls: "0.13",
        fid: 16,
      },
      timestamp: 1654961922748,
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
                { start: 0, end: 200, density: 0.5963999999999999 },
                { start: 200, end: 500, density: 0.34469999999999995 },
                { start: 500, density: 0.05890000000000004 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143828765753153 },
                { start: 800, end: 1800, density: 0.355971194238848 },
                { start: 1800, density: 0.22964592918583682 },
              ],
              percentiles: { p75: 1863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5145514551455153 },
                { start: 1800, end: 3000, density: 0.20812081208120842 },
                { start: 3000, density: 0.27732773277327627 },
              ],
              percentiles: { p75: 3410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9314 },
                { start: 100, end: 300, density: 0.0572 },
                { start: 300, density: 0.011399999999999999 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5674067406740684 },
                { start: 2500, end: 4000, density: 0.21457145714571493 },
                { start: 4000, density: 0.2180218021802167 },
              ],
              percentiles: { p75: 3839 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7280271972802719,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426857314268573,
                },
                { start: "0.25", density: 0.1292870712928708 },
              ],
              percentiles: { p75: "0.13" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3410,
        lcp: 3839,
        cls: "0.13",
        fid: 16,
      },
      timestamp: 1654961924257,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6838948860538656 },
                { start: 1800, end: 3000, density: 0.19539853887253297 },
                { start: 3000, density: 0.12070657507360137 },
              ],
              percentiles: { p75: 2088 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591791458679977 },
                { start: 100, end: 300, density: 0.03194675540765392 },
                { start: 300, density: 0.008874098724348302 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7554864068129704 },
                { start: 2500, end: 4000, density: 0.14919751064526687 },
                { start: 4000, density: 0.09531608254176263 },
              ],
              percentiles: { p75: 2479 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8530018456193682,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09868635327326021,
                },
                { start: "0.25", density: 0.04831180110737166 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6395132112706943 },
                { start: 200, end: 500, density: 0.278697511237803 },
                { start: 500, density: 0.08178927749150285 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44909329254970504 },
                { start: 800, end: 1800, density: 0.41402665501420144 },
                { start: 1800, density: 0.13688005243609344 },
              ],
              percentiles: { p75: 1372 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2088,
        lcp: 2479,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654961925673,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4598459845984601 },
                { start: 800, end: 1800, density: 0.4094409440944097 },
                { start: 1800, density: 0.1307130713071302 },
              ],
              percentiles: { p75: 1352 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6965213914434231 },
                { start: 1800, end: 3000, density: 0.18662534986005605 },
                { start: 3000, density: 0.1168532586965209 },
              ],
              percentiles: { p75: 2048 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620810405202601 },
                { start: 100, end: 300, density: 0.029514757378689343 },
                { start: 300, density: 0.008404202101050577 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7587499999999995 },
                { start: 2500, end: 4000, density: 0.14534999999999995 },
                { start: 4000, density: 0.09590000000000057 },
              ],
              percentiles: { p75: 2469 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8311999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1124 },
                { start: "0.25", density: 0.0564 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6636 },
                { start: 200, end: 500, density: 0.2582 },
                { start: 500, density: 0.07820000000000006 },
              ],
              percentiles: { p75: 239 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2048,
        lcp: 2469,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1654961927121,
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
                { start: 0, end: 200, density: 0.7647999999999998 },
                { start: 200, end: 500, density: 0.13879999999999995 },
                { start: 500, density: 0.09640000000000011 },
              ],
              percentiles: { p75: 193 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29480000000000006 },
                { start: 800, end: 1800, density: 0.49570000000000014 },
                { start: 1800, density: 0.2094999999999999 },
              ],
              percentiles: { p75: 1651 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.04669066186762628 },
                { start: 1800, end: 3000, density: 0.4359128174365108 },
                { start: 3000, density: 0.517396520695863 },
              ],
              percentiles: { p75: 4809 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22777277727772813 },
                { start: 2500, end: 4000, density: 0.3938893889388944 },
                { start: 4000, density: 0.3783378337833775 },
              ],
              percentiles: { p75: 5289 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8722127787221278,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0764923507649235,
                },
                { start: "0.25", density: 0.051294870512948745 },
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
      extractedResults: { fcp: 4809, lcp: 5289, cls: "0.04" },
      timestamp: 1654961927989,
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
                { start: 0, end: 2500, density: 0.8105810581058105 },
                { start: 2500, end: 4000, density: 0.1245124512451245 },
                { start: 4000, density: 0.06490649064906492 },
              ],
              percentiles: { p75: 2223 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8890999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06520000000000001,
                },
                { start: "0.25", density: 0.0457 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44961007798440317 },
                { start: 200, end: 500, density: 0.3909218156368727 },
                { start: 500, density: 0.15946810637872408 },
              ],
              percentiles: { p75: 383 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5597999999999997 },
                { start: 800, end: 1800, density: 0.35729999999999984 },
                { start: 1800, density: 0.08290000000000032 },
              ],
              percentiles: { p75: 1115 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7436743674367433 },
                { start: 1800, end: 3000, density: 0.17031703170317022 },
                { start: 3000, density: 0.08600860086008645 },
              ],
              percentiles: { p75: 1845 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9201079892010797 },
                { start: 100, end: 300, density: 0.053094690530946904 },
                { start: 300, density: 0.026797320267973313 },
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
        fcp: 1845,
        lcp: 2223,
        cls: "0.02",
        fid: 16,
      },
      timestamp: 1654961929612,
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
                { start: 0, end: 2500, density: 0.6796105763911938 },
                { start: 2500, end: 4000, density: 0.18519747759707939 },
                { start: 4000, density: 0.13519194601172682 },
              ],
              percentiles: { p75: 2877 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8080052782054102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15790631185396967,
                },
                { start: "0.25", density: 0.03408840994062019 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5628494743905158 },
                { start: 200, end: 500, density: 0.2812569894878099 },
                { start: 500, density: 0.15589353612167445 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42746085623562835 },
                { start: 800, end: 1800, density: 0.42472353005584085 },
                { start: 1800, density: 0.14781561370853089 },
              ],
              percentiles: { p75: 1425 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6294544654641437 },
                { start: 1800, end: 3000, density: 0.23669159700835876 },
                { start: 3000, density: 0.13385393752749752 },
              ],
              percentiles: { p75: 2250 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9040767386091129 },
                { start: 100, end: 300, density: 0.04898937992463172 },
                { start: 300, density: 0.0469338814662555 },
              ],
              percentiles: { p75: 18 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2250,
        lcp: 2877,
        cls: "0.05",
        fid: 18,
      },
      timestamp: 1654961930706,
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
                { start: 0, end: 2500, density: 0.9167931688804555 },
                { start: 2500, end: 4000, density: 0.0625237191650854 },
                { start: 4000, density: 0.02068311195445926 },
              ],
              percentiles: { p75: 1766 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9382282226743112,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04272239689291659,
                },
                { start: "0.25", density: 0.019049380432772337 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4806599450045831 },
                { start: 200, end: 500, density: 0.3692025664527957 },
                { start: 500, density: 0.15013748854262113 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6920871559633027 },
                { start: 800, end: 1800, density: 0.264717125382263 },
                { start: 1800, density: 0.04319571865443432 },
              ],
              percentiles: { p75: 908 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8691376701966717 },
                { start: 1800, end: 3000, density: 0.0979576399394856 },
                { start: 3000, density: 0.032904689863842686 },
              ],
              percentiles: { p75: 1417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9444547996272135 },
                { start: 100, end: 300, density: 0.03187325256290774 },
                { start: 300, density: 0.02367194780987881 },
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
        fcp: 1417,
        lcp: 1766,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654961932238,
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
                  density: 0.9026000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0821 },
                { start: "0.25", density: 0.015299999999999992 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6955217912834867 },
                { start: 200, end: 500, density: 0.24540183926429432 },
                { start: 500, density: 0.05907636945221902 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.697590722783165 },
                { start: 800, end: 1800, density: 0.27131860441867445 },
                { start: 1800, density: 0.031090672798160517 },
              ],
              percentiles: { p75: 863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.893978795759152 },
                { start: 1800, end: 3000, density: 0.08311662332466492 },
                { start: 3000, density: 0.022904580916183147 },
              ],
              percentiles: { p75: 1342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9774999999999999 },
                { start: 100, end: 300, density: 0.0141 },
                { start: 300, density: 0.008400000000000006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.925485097019404 },
                { start: 2500, end: 4000, density: 0.05731146229245848 },
                { start: 4000, density: 0.01720344068813751 },
              ],
              percentiles: { p75: 1691 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1342,
        lcp: 1691,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654961934676,
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
                { start: 0, end: 800, density: 0.4670934186837367 },
                { start: 800, end: 1800, density: 0.41218243648729747 },
                { start: 1800, density: 0.12072414482896579 },
              ],
              percentiles: { p75: 1340 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6756324367563246 },
                { start: 1800, end: 3000, density: 0.20527947205279487 },
                { start: 3000, density: 0.11908809119088053 },
              ],
              percentiles: { p75: 2204 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532999999999998 },
                { start: 100, end: 300, density: 0.027700000000000002 },
                { start: 300, density: 0.019000000000000114 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7137213721372136 },
                { start: 2500, end: 4000, density: 0.18446844684468441 },
                { start: 4000, density: 0.10181018101810195 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8167 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13140000000000002,
                },
                { start: "0.25", density: 0.0519 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6999699969996995 },
                { start: 200, end: 500, density: 0.20932093209320918 },
                { start: 500, density: 0.09070907090709138 },
              ],
              percentiles: { p75: 229 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2204,
        lcp: 2767,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654961936435,
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
                  density: 0.8582858285828582,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09240924092409239,
                },
                { start: "0.25", density: 0.04930493049304931 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5474452554744528 },
                { start: 200, end: 500, density: 0.34256574342565743 },
                { start: 500, density: 0.10998900109988981 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7148429685937185 },
                { start: 800, end: 1800, density: 0.22084416883376673 },
                { start: 1800, density: 0.06431286257251473 },
              ],
              percentiles: { p75: 863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8686605981794538 },
                { start: 1800, end: 3000, density: 0.09412823847154146 },
                { start: 3000, density: 0.037211163349004546 },
              ],
              percentiles: { p75: 1336 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9624000000000001 },
                { start: 100, end: 300, density: 0.024500000000000004 },
                { start: 300, density: 0.01309999999999993 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8836918459229613 },
                { start: 2500, end: 4000, density: 0.08629314657328664 },
                { start: 4000, density: 0.030015007503752 },
              ],
              percentiles: { p75: 1757 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1336,
        lcp: 1757,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654961938151,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8616415075477347 },
                { start: 2500, end: 4000, density: 0.09437168849345187 },
                { start: 4000, density: 0.04398680395881349 },
              ],
              percentiles: { p75: 1983 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8494849484948496,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12871287128712874,
                },
                { start: "0.25", density: 0.021802180218021796 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5657434256574341 },
                { start: 200, end: 500, density: 0.32656734326567344 },
                { start: 500, density: 0.10768923107689253 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6291629162916291 },
                { start: 800, end: 1800, density: 0.3209320932093208 },
                { start: 1800, density: 0.04990499049904994 },
              ],
              percentiles: { p75: 982 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8091999999999991 },
                { start: 1800, end: 3000, density: 0.13619999999999988 },
                { start: 3000, density: 0.054600000000001016 },
              ],
              percentiles: { p75: 1624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951914425672298 },
                { start: 100, end: 300, density: 0.028091572528241522 },
                { start: 300, density: 0.019994001799460315 },
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
        fcp: 1624,
        lcp: 1983,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1654961939683,
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
                { start: 0, end: 2500, density: 0.8916 },
                { start: 2500, end: 4000, density: 0.07910000000000002 },
                { start: 4000, density: 0.02930000000000002 },
              ],
              percentiles: { p75: 1800 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9537999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030799999999999998,
                },
                { start: "0.25", density: 0.015399999999999994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6652334766523347 },
                { start: 200, end: 500, density: 0.2650734926507349 },
                { start: 500, density: 0.06969303069693039 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6295259051810363 },
                { start: 800, end: 1800, density: 0.3209641928385678 },
                { start: 1800, density: 0.04950990198039581 },
              ],
              percentiles: { p75: 954 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8709516193522584 },
                { start: 1800, end: 3000, density: 0.09176329468212709 },
                { start: 3000, density: 0.03728508596561441 },
              ],
              percentiles: { p75: 1427 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9700940188037607 },
                { start: 100, end: 300, density: 0.01730346069213843 },
                { start: 300, density: 0.01260252050410088 },
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
        fcp: 1427,
        lcp: 1800,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654961941136,
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
                  density: 0.8600976063211712,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09353939112247268,
                },
                { start: "0.25", density: 0.04636300255635612 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.751711116355912 },
                { start: 200, end: 500, density: 0.1925890960585318 },
                { start: 500, density: 0.055699787585556076 },
              ],
              percentiles: { p75: 199 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4953040619863816 },
                { start: 800, end: 1800, density: 0.37720122094388336 },
                { start: 1800, density: 0.12749471706973486 },
              ],
              percentiles: { p75: 1291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7341520467836256 },
                { start: 1800, end: 3000, density: 0.15157894736842098 },
                { start: 3000, density: 0.11426900584795344 },
              ],
              percentiles: { p75: 1889 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.955727923627685 },
                { start: 100, end: 300, density: 0.02708830548926015 },
                { start: 300, density: 0.017183770883054852 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7930107526881717 },
                { start: 2500, end: 4000, density: 0.1256428237494156 },
                { start: 4000, density: 0.08134642356241281 },
              ],
              percentiles: { p75: 2257 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1889,
        lcp: 2257,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654961942937,
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
                  density: 0.9592700343824385,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026712509918011103,
                },
                { start: "0.25", density: 0.014017455699550383 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45848044984961456 },
                { start: 200, end: 500, density: 0.4078723682489868 },
                { start: 500, density: 0.13364718190139868 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7030416221985061 },
                { start: 800, end: 1800, density: 0.224119530416222 },
                { start: 1800, density: 0.07283884738527187 },
              ],
              percentiles: { p75: 881 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8571428571428572 },
                { start: 1800, end: 3000, density: 0.10257436307856481 },
                { start: 3000, density: 0.040282779778578 },
              ],
              percentiles: { p75: 1375 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534059587872425 },
                { start: 100, end: 300, density: 0.030187688673054214 },
                { start: 300, density: 0.01640635253970329 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8823060573857596 },
                { start: 2500, end: 4000, density: 0.0880712008501594 },
                { start: 4000, density: 0.029622741764080935 },
              ],
              percentiles: { p75: 1768 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1375,
        lcp: 1768,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654961944819,
    },
  ],
};
