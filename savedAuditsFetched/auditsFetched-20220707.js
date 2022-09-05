export const audit37 = {
  date: "2022-07-07T11:06:44.909Z",
  dateParsedLocale: "07/07/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "07/07/2022-legacy-audit",
  audits: [
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
                  density: 0.7948794879487949,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14161416141614164,
                },
                { start: "0.25", density: 0.06350635063506348 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7375737573757377 },
                { start: 200, end: 500, density: 0.19041904190419043 },
                { start: 500, density: 0.07200720072007193 },
              ],
              percentiles: { p75: 203 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4062625050020013 },
                { start: 800, end: 1800, density: 0.3834533813525414 },
                { start: 1800, density: 0.21028411364545738 },
              ],
              percentiles: { p75: 1690 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6498599439775901 },
                { start: 1800, end: 3000, density: 0.20508203281312493 },
                { start: 3000, density: 0.145058023209285 },
              ],
              percentiles: { p75: 2312 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578042195780422 },
                { start: 100, end: 300, density: 0.0223977602239776 },
                { start: 300, density: 0.019798020197980246 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7254225422542254 },
                { start: 2500, end: 4000, density: 0.1573657365736574 },
                { start: 4000, density: 0.11721172117211724 },
              ],
              percentiles: { p75: 2704 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2312,
        lcp: 2704,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1657191927995,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9327932793279328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043604360436043606,
                },
                { start: "0.25", density: 0.023602360236023603 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4528094381123764 },
                { start: 1800, end: 3000, density: 0.20865826834633025 },
                { start: 3000, density: 0.33853229354129344 },
              ],
              percentiles: { p75: 3264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: { fcp: 3264, cls: "0.01" },
      timestamp: 1657191928657,
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
                { start: 0, end: 800, density: 0.6777686403508771 },
                { start: 800, end: 1800, density: 0.2839912280701754 },
                { start: 1800, density: 0.03824013157894743 },
              ],
              percentiles: { p75: 920 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8754732287723093 },
                { start: 1800, end: 3000, density: 0.09883720930232556 },
                { start: 3000, density: 0.025689561925365142 },
              ],
              percentiles: { p75: 1370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9278134599273944 },
                { start: 100, end: 300, density: 0.03700083775481708 },
                { start: 300, density: 0.03518570231778849 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.919894366197183 },
                { start: 2500, end: 4000, density: 0.06033315276273023 },
                { start: 4000, density: 0.01977248104008679 },
              ],
              percentiles: { p75: 1729 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9563178346509447,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02974675063647327,
                },
                { start: "0.25", density: 0.013935414712582061 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5699594046008116 },
                { start: 200, end: 500, density: 0.31935047361299035 },
                { start: 500, density: 0.11069012178619805 },
              ],
              percentiles: { p75: 292 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1370,
        lcp: 1729,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191929021,
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
                { start: "0.00", end: "0.10", density: 0.9367 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03649999999999999,
                },
                { start: "0.25", density: 0.0268 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7126861941417576 },
                { start: 200, end: 500, density: 0.2396281115665301 },
                { start: 500, density: 0.047685694291712336 },
              ],
              percentiles: { p75: 222 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4047595240475949 },
                { start: 800, end: 1800, density: 0.4512548745125485 },
                { start: 1800, density: 0.14398560143985653 },
              ],
              percentiles: { p75: 1394 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5947620951619338 },
                { start: 1800, end: 3000, density: 0.2513994402239099 },
                { start: 3000, density: 0.15383846461415634 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9559867960388115 },
                { start: 100, end: 300, density: 0.0364109232769831 },
                { start: 300, density: 0.0076022806842052535 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6992699269926987 },
                { start: 2500, end: 4000, density: 0.18301830183018286 },
                { start: 4000, density: 0.11771177117711842 },
              ],
              percentiles: { p75: 2797 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2386,
        lcp: 2797,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657191929626,
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
                { start: 0, end: 2500, density: 0.4879499999999994 },
                { start: 2500, end: 4000, density: 0.29074999999999956 },
                { start: 4000, density: 0.22130000000000116 },
              ],
              percentiles: { p75: 3829 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9018901890189019,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.062106210621062106,
                },
                { start: "0.25", density: 0.03600360036003599 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5238476152384761 },
                { start: 200, end: 500, density: 0.3321667833216679 },
                { start: 500, density: 0.14398560143985598 },
              ],
              percentiles: { p75: 351 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22209999999999983 },
                { start: 800, end: 1800, density: 0.5099999999999997 },
                { start: 1800, density: 0.2679000000000005 },
              ],
              percentiles: { p75: 1865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3795620437956199 },
                { start: 1800, end: 3000, density: 0.31806819318068147 },
                { start: 3000, density: 0.30236976302369856 },
              ],
              percentiles: { p75: 3300 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611999999999998 },
                { start: 100, end: 300, density: 0.030699999999999995 },
                { start: 300, density: 0.0081 },
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
        fcp: 3300,
        lcp: 3829,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1657191930063,
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
                  density: 0.9481299816063763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035438381361128146,
                },
                { start: "0.25", density: 0.0164316370324954 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4194128220491311 },
                { start: 200, end: 500, density: 0.4330736968244458 },
                { start: 500, density: 0.14751348112642312 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6640117632643059 },
                { start: 800, end: 1800, density: 0.2968998897193971 },
                { start: 1800, density: 0.039088347016297015 },
              ],
              percentiles: { p75: 903 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8944835246205108 },
                { start: 1800, end: 3000, density: 0.0775021596939405 },
                { start: 3000, density: 0.028014315685548682 },
              ],
              percentiles: { p75: 1332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9530373261771165 },
                { start: 100, end: 300, density: 0.027445718467919 },
                { start: 300, density: 0.019516955354964578 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9125538461538463 },
                { start: 2500, end: 4000, density: 0.06406153846153848 },
                { start: 4000, density: 0.02338461538461542 },
              ],
              percentiles: { p75: 1710 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1332,
        lcp: 1710,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657191930421,
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
                  density: 0.7141000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10849999999999997,
                },
                { start: "0.25", density: 0.17740000000000003 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4865000000000004 },
                { start: 800, end: 1800, density: 0.31160000000000015 },
                { start: 1800, density: 0.2018999999999995 },
              ],
              percentiles: { p75: 1687 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5630126025205044 },
                { start: 1800, end: 3000, density: 0.21164232846569334 },
                { start: 3000, density: 0.2253450690138022 },
              ],
              percentiles: { p75: 2916 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604 },
                { start: 100, end: 300, density: 0.026300000000000004 },
                { start: 300, density: 0.013300000000000018 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122224444888977 },
                { start: 2500, end: 4000, density: 0.20724144828965785 },
                { start: 4000, density: 0.18053610722144442 },
              ],
              percentiles: { p75: 3355 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2916,
        lcp: 3355,
        cls: "0.14",
        fid: 11,
      },
      timestamp: 1657191930969,
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
                { start: 0, end: 2500, density: 0.8700932427765627 },
                { start: 2500, end: 4000, density: 0.09433636468285947 },
                { start: 4000, density: 0.035570392540577776 },
              ],
              percentiles: { p75: 1969 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9260361804442409,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06457522326539958,
                },
                { start: "0.25", density: 0.00938859629035952 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5461678417102568 },
                { start: 200, end: 500, density: 0.3526267909938596 },
                { start: 500, density: 0.1012053672958836 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5573564661568313 },
                { start: 800, end: 1800, density: 0.391964387626983 },
                { start: 1800, density: 0.050679146216185654 },
              ],
              percentiles: { p75: 1035 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8378751293549499 },
                { start: 1800, end: 3000, density: 0.1213061975393814 },
                { start: 3000, density: 0.040818673105668786 },
              ],
              percentiles: { p75: 1542 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463234445342261 },
                { start: 100, end: 300, density: 0.024471891954288345 },
                { start: 300, density: 0.029204663511485606 },
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
        fcp: 1542,
        lcp: 1969,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191931428,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9171999999999999 },
                { start: 100, end: 300, density: 0.051199999999999996 },
                { start: 300, density: 0.03160000000000002 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8053694630536938 },
                { start: 2500, end: 4000, density: 0.12643735626437344 },
                { start: 4000, density: 0.06819318068193268 },
              ],
              percentiles: { p75: 2228 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8854114588541147,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06959304069593042,
                },
                { start: "0.25", density: 0.04499550044995499 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44398879775955136 },
                { start: 200, end: 500, density: 0.38187637527505447 },
                { start: 500, density: 0.17413482696539406 },
              ],
              percentiles: { p75: 398 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5461907618476299 },
                { start: 800, end: 1800, density: 0.3656268746250746 },
                { start: 1800, density: 0.08818236352729554 },
              ],
              percentiles: { p75: 1131 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7353999999999996 },
                { start: 1800, end: 3000, density: 0.17649999999999988 },
                { start: 3000, density: 0.08810000000000051 },
              ],
              percentiles: { p75: 1864 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1864,
        lcp: 2228,
        cls: "0.02",
        fid: 17,
      },
      timestamp: 1657191931922,
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
                { start: "0.00", end: "0.10", density: 0.9038 },
                { start: "0.10", end: "0.25", density: 0.0708 },
                { start: "0.25", density: 0.025400000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5250999999999996 },
                { start: 200, end: 500, density: 0.34429999999999983 },
                { start: 500, density: 0.13060000000000055 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8699390182945117 },
                { start: 800, end: 1800, density: 0.11806458062581225 },
                { start: 1800, density: 0.011996401079676026 },
              ],
              percentiles: { p75: 651 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.93 },
                { start: 1800, end: 3000, density: 0.054500000000000014 },
                { start: 3000, density: 0.015500000000000003 },
              ],
              percentiles: { p75: 1167 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9428171548535439 },
                { start: 100, end: 300, density: 0.03329001299610116 },
                { start: 300, density: 0.023892832150354898 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9237847569513902 },
                { start: 2500, end: 4000, density: 0.05501100220044008 },
                { start: 4000, density: 0.02120424084816978 },
              ],
              percentiles: { p75: 1655 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1167,
        lcp: 1655,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1657191932248,
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
                  density: 0.987177891198805,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005477405701481389,
                },
                { start: "0.25", density: 0.007344703099713675 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4948885330705754 },
                { start: 200, end: 500, density: 0.4018967853183891 },
                { start: 500, density: 0.10321468161103545 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6562344759066071 },
                { start: 800, end: 1800, density: 0.26838052657724804 },
                { start: 1800, density: 0.07538499751614489 },
              ],
              percentiles: { p75: 950 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8032048072108157 },
                { start: 1800, end: 3000, density: 0.11479719579369049 },
                { start: 3000, density: 0.08199799699549394 },
              ],
              percentiles: { p75: 1587 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9567385612766487 },
                { start: 100, end: 300, density: 0.022565764867223535 },
                { start: 300, density: 0.020695673856127774 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8534385569334831 },
                { start: 2500, end: 4000, density: 0.09795816109232114 },
                { start: 4000, density: 0.04860328197419565 },
              ],
              percentiles: { p75: 1966 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1587,
        lcp: 1966,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191932609,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5992884144985545 },
                { start: 800, end: 1800, density: 0.3353346675561486 },
                { start: 1800, density: 0.06537691794529694 },
              ],
              percentiles: { p75: 1076 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7743347928595476 },
                { start: 1800, end: 3000, density: 0.15033120017963378 },
                { start: 3000, density: 0.07533400696081846 },
              ],
              percentiles: { p75: 1734 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9333560013600818 },
                { start: 100, end: 300, density: 0.040122407344440676 },
                { start: 300, density: 0.026521591295477532 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8365774077407742 },
                { start: 2500, end: 4000, density: 0.10716696669666971 },
                { start: 4000, density: 0.056255625562556026 },
              ],
              percentiles: { p75: 2094 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8910436049770206,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09415984755072299,
                },
                { start: "0.25", density: 0.014796547472256465 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4915330268027364 },
                { start: 200, end: 500, density: 0.37972412246271164 },
                { start: 500, density: 0.12874285073455197 },
              ],
              percentiles: { p75: 338 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1734,
        lcp: 2094,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191933140,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.95036201615149 },
                { start: 2500, end: 4000, density: 0.04086605402394874 },
                { start: 4000, density: 0.008771929824561394 },
              ],
              percentiles: { p75: 1552 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9514242465941929,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02256777212054493,
                },
                { start: "0.25", density: 0.02600798128526213 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5994279487877963 },
                { start: 200, end: 500, density: 0.26614001634432033 },
                { start: 500, density: 0.1344320348678833 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8457996092659781 },
                { start: 800, end: 1800, density: 0.13647781188947808 },
                { start: 1800, density: 0.01772257884454372 },
              ],
              percentiles: { p75: 696 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9398128752967464 },
                { start: 1800, end: 3000, density: 0.04692082111436949 },
                { start: 3000, density: 0.013266303588884275 },
              ],
              percentiles: { p75: 1196 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9376897498915714 },
                { start: 100, end: 300, density: 0.024721700159028477 },
                { start: 300, density: 0.03758854994940024 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1196,
        lcp: 1552,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191933622,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4865000000000004 },
                { start: 800, end: 1800, density: 0.31160000000000015 },
                { start: 1800, density: 0.2018999999999995 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5630126025205044 },
                { start: 1800, end: 3000, density: 0.21164232846569334 },
                { start: 3000, density: 0.2253450690138022 },
              ],
              percentiles: { p75: 2969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604 },
                { start: 100, end: 300, density: 0.026300000000000004 },
                { start: 300, density: 0.013300000000000018 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122224444888977 },
                { start: 2500, end: 4000, density: 0.20724144828965785 },
                { start: 4000, density: 0.18053610722144442 },
              ],
              percentiles: { p75: 3458 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7141000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10849999999999997,
                },
                { start: "0.25", density: 0.17740000000000003 },
              ],
              percentiles: { p75: "0.15" },
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
        lcp: 3458,
        cls: "0.15",
        fid: 12,
      },
      timestamp: 1657191934223,
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
                { start: 0, end: 100, density: 0.9116646658663465 },
                { start: 100, end: 300, density: 0.0349139655862345 },
                { start: 300, density: 0.05342136854741887 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7186937387477497 },
                { start: 2500, end: 4000, density: 0.15908181636327273 },
                { start: 4000, density: 0.12222444488897757 },
              ],
              percentiles: { p75: 2736 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8016801680168018,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12311231123112312,
                },
                { start: "0.25", density: 0.0752075207520751 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5997599759975999 },
                { start: 200, end: 500, density: 0.24942494249424943 },
                { start: 500, density: 0.1508150815081507 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43198639727945554 },
                { start: 800, end: 1800, density: 0.41348269653930747 },
                { start: 1800, density: 0.15453090618123705 },
              ],
              percentiles: { p75: 1415 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6468999999999997 },
                { start: 1800, end: 3000, density: 0.20369999999999996 },
                { start: 3000, density: 0.14940000000000025 },
              ],
              percentiles: { p75: 2270 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2270,
        lcp: 2736,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1657191934733,
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
                { start: 0, end: 1800, density: 0.5630126025205044 },
                { start: 1800, end: 3000, density: 0.21164232846569334 },
                { start: 3000, density: 0.2253450690138022 },
              ],
              percentiles: { p75: 2969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604 },
                { start: 100, end: 300, density: 0.026300000000000004 },
                { start: 300, density: 0.013300000000000018 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122224444888977 },
                { start: 2500, end: 4000, density: 0.20724144828965785 },
                { start: 4000, density: 0.18053610722144442 },
              ],
              percentiles: { p75: 3458 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7141000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10849999999999997,
                },
                { start: "0.25", density: 0.17740000000000003 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4865000000000004 },
                { start: 800, end: 1800, density: 0.31160000000000015 },
                { start: 1800, density: 0.2018999999999995 },
              ],
              percentiles: { p75: 1719 },
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
        lcp: 3458,
        cls: "0.15",
        fid: 12,
      },
      timestamp: 1657191935062,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8702826048797612 },
                { start: 1800, end: 3000, density: 0.10391434088116551 },
                { start: 3000, density: 0.025803054239073257 },
              ],
              percentiles: { p75: 1490 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9385689354275741 },
                { start: 100, end: 300, density: 0.033158813263525315 },
                { start: 300, density: 0.028272251308900584 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9124540843099528 },
                { start: 2500, end: 4000, density: 0.06445688298058423 },
                { start: 4000, density: 0.023089032709463084 },
              ],
              percentiles: { p75: 1824 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9598059598059597,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02304227304227304,
                },
                { start: "0.25", density: 0.017151767151767156 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4157618213660244 },
                { start: 200, end: 500, density: 0.41786339754816104 },
                { start: 500, density: 0.16637478108581447 },
              ],
              percentiles: { p75: 385 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6267741370247065 },
                { start: 800, end: 1800, density: 0.33590327667776415 },
                { start: 1800, density: 0.03732258629752935 },
              ],
              percentiles: { p75: 961 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1490,
        lcp: 1824,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191935640,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8308131920466719 },
                { start: 1800, end: 3000, density: 0.12942016906774614 },
                { start: 3000, density: 0.03976663888558193 },
              ],
              percentiles: { p75: 1567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9479775683092708 },
                { start: 100, end: 300, density: 0.029829375969454713 },
                { start: 300, density: 0.022193055721274366 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8839328251548356 },
                { start: 2500, end: 4000, density: 0.08700571700809907 },
                { start: 4000, density: 0.02906145783706525 },
              ],
              percentiles: { p75: 1899 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9770892687559355,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01103988603988604,
                },
                { start: "0.25", density: 0.011870845204178538 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5718506263294733 },
                { start: 200, end: 500, density: 0.34105412432049176 },
                { start: 500, density: 0.08709524935003506 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5518430439952438 },
                { start: 800, end: 1800, density: 0.38775267538644465 },
                { start: 1800, density: 0.060404280618311545 },
              ],
              percentiles: { p75: 1030 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1567,
        lcp: 1899,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191936168,
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
                { start: 0, end: 100, density: 0.9575042495750425 },
                { start: 100, end: 300, density: 0.025297470252974706 },
                { start: 300, density: 0.017198280171982782 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9100499999999999 },
                { start: 2500, end: 4000, density: 0.06684999999999999 },
                { start: 4000, density: 0.023100000000000103 },
              ],
              percentiles: { p75: 1700 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8979 },
                { start: "0.10", end: "0.25", density: 0.0751 },
                { start: "0.25", density: 0.02699999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4731000000000005 },
                { start: 200, end: 500, density: 0.39000000000000035 },
                { start: 500, density: 0.13689999999999905 },
              ],
              percentiles: { p75: 356 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6825317468253175 },
                { start: 800, end: 1800, density: 0.28047195280471954 },
                { start: 1800, density: 0.036996300369962945 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8996301109667098 },
                { start: 1800, end: 3000, density: 0.07397780665800259 },
                { start: 3000, density: 0.02639208237528766 },
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
        lcp: 1700,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1657191936668,
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
                { start: 0, end: 800, density: 0.6230786877724246 },
                { start: 800, end: 1800, density: 0.3316127552190869 },
                { start: 1800, density: 0.045308557008488425 },
              ],
              percentiles: { p75: 1010 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8416455987129393 },
                { start: 1800, end: 3000, density: 0.12077683291197422 },
                { start: 3000, density: 0.03757756837508652 },
              ],
              percentiles: { p75: 1515 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554903112155021 },
                { start: 100, end: 300, density: 0.031121550205519672 },
                { start: 300, density: 0.013388138578978206 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8848495290604184 },
                { start: 2500, end: 4000, density: 0.08620491614978176 },
                { start: 4000, density: 0.028945554789800022 },
              ],
              percentiles: { p75: 1945 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9636948529411765,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02481617647058824,
                },
                { start: "0.25", density: 0.011488970588235291 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5312748325576111 },
                { start: 200, end: 500, density: 0.3567941877625154 },
                { start: 500, density: 0.11193097967987355 },
              ],
              percentiles: { p75: 314 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1515,
        lcp: 1945,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191937069,
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
                { start: 0, end: 100, density: 0.9725787631271877 },
                { start: 100, end: 300, density: 0.021936989498249706 },
                { start: 300, density: 0.005484247374562456 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9099119698182234 },
                { start: 2500, end: 4000, density: 0.061278152509431805 },
                { start: 4000, density: 0.028809877672344712 },
              ],
              percentiles: { p75: 1757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9286365709074328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055517555859553126,
                },
                { start: "0.25", density: 0.01584587323301414 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6363430127041741 },
                { start: 200, end: 500, density: 0.2955989110707803 },
                { start: 500, density: 0.06805807622504557 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6583535388523266 },
                { start: 800, end: 1800, density: 0.2992726013162452 },
                { start: 1800, density: 0.04237385983142808 },
              ],
              percentiles: { p75: 906 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8694508009153317 },
                { start: 1800, end: 3000, density: 0.09290617848970247 },
                { start: 3000, density: 0.037643020594965965 },
              ],
              percentiles: { p75: 1424 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1424,
        lcp: 1757,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191937612,
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
                { start: "0.00", end: "0.10", density: 0.797 },
                { start: "0.10", end: "0.25", density: 0.1185 },
                { start: "0.25", density: 0.08449999999999998 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5946000000000001 },
                { start: 200, end: 500, density: 0.2590000000000001 },
                { start: 500, density: 0.1463999999999998 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2997299729973013 },
                { start: 800, end: 1800, density: 0.34353435343534533 },
                { start: 1800, density: 0.3567356735673533 },
              ],
              percentiles: { p75: 2178 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48789515806322525 },
                { start: 1800, end: 3000, density: 0.2710084033613446 },
                { start: 3000, density: 0.2410964385754302 },
              ],
              percentiles: { p75: 2974 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9303 },
                { start: 100, end: 300, density: 0.033999999999999996 },
                { start: 300, density: 0.03570000000000004 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5847830433913213 },
                { start: 2500, end: 4000, density: 0.251849630073985 },
                { start: 4000, density: 0.16336732653469374 },
              ],
              percentiles: { p75: 3353 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2974,
        lcp: 3353,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1657191938148,
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
                  density: 0.9671769748928353,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012737293325168401,
                },
                { start: "0.25", density: 0.020085731781996335 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6563981042654031 },
                { start: 200, end: 500, density: 0.2902220004988777 },
                { start: 500, density: 0.0533798952357192 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3714675260287553 },
                { start: 800, end: 1800, density: 0.4644273673772928 },
                { start: 1800, density: 0.1641051065939519 },
              ],
              percentiles: { p75: 1459 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5593784683684774 },
                { start: 1800, end: 3000, density: 0.26735725736835525 },
                { start: 3000, density: 0.1732642742631674 },
              ],
              percentiles: { p75: 2522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9476661951909477 },
                { start: 100, end: 300, density: 0.04513308473704513 },
                { start: 300, density: 0.007200720072007191 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6945679012345672 },
                { start: 2500, end: 4000, density: 0.1914814814814812 },
                { start: 4000, density: 0.11395061728395149 },
              ],
              percentiles: { p75: 2780 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2522,
        lcp: 2780,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657191938566,
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
                { start: 0, end: 200, density: 0.6450645064506448 },
                { start: 200, end: 500, density: 0.26192619261926187 },
                { start: 500, density: 0.09300930093009326 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4562543745625436 },
                { start: 800, end: 1800, density: 0.37366263373662634 },
                { start: 1800, density: 0.17008299170083005 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5739573957395744 },
                { start: 1800, end: 3000, density: 0.2230223022302231 },
                { start: 3000, density: 0.20302030203020263 },
              ],
              percentiles: { p75: 2665 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6551500000000017 },
                { start: 2500, end: 4000, density: 0.16765000000000052 },
                { start: 4000, density: 0.17719999999999791 },
              ],
              percentiles: { p75: 3273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2665, lcp: 3273 },
      timestamp: 1657191939153,
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
                  density: 0.8968166849615806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03937980241492865,
                },
                { start: "0.25", density: 0.06380351262349071 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4597617664148749 },
                { start: 200, end: 500, density: 0.3383207437536315 },
                { start: 500, density: 0.20191748983149366 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38221852928957195 },
                { start: 800, end: 1800, density: 0.4396897936573879 },
                { start: 1800, density: 0.1780916770530401 },
              ],
              percentiles: { p75: 1525 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.59260803112408 },
                { start: 1800, end: 3000, density: 0.23218007503126328 },
                { start: 3000, density: 0.17521189384465677 },
              ],
              percentiles: { p75: 2485 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8831020174560023 },
                { start: 100, end: 300, density: 0.046501645442838746 },
                { start: 300, density: 0.07039633710115901 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959923140269006 },
                { start: 2500, end: 4000, density: 0.1660719187482844 },
                { start: 4000, density: 0.13793576722481501 },
              ],
              percentiles: { p75: 2842 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2485,
        lcp: 2842,
        cls: "0.05",
        fid: 21,
      },
      timestamp: 1657191939512,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43468600163723536 },
                { start: 200, end: 500, density: 0.41550695825049694 },
                { start: 500, density: 0.14980704011226767 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7254257193188488 },
                { start: 800, end: 1800, density: 0.22771579565472697 },
                { start: 1800, density: 0.04685848502642413 },
              ],
              percentiles: { p75: 834 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8366097704532081 },
                { start: 1800, end: 3000, density: 0.11218363743378462 },
                { start: 3000, density: 0.05120659211300737 },
              ],
              percentiles: { p75: 1520 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9264758284831928 },
                { start: 100, end: 300, density: 0.038959496377241956 },
                { start: 300, density: 0.034564675139565224 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8828849994126627 },
                { start: 2500, end: 4000, density: 0.07905556208152234 },
                { start: 4000, density: 0.03805943850581483 },
              ],
              percentiles: { p75: 1854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9362176105053348,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03763629968343299,
                },
                { start: "0.25", density: 0.026146089811232266 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1520,
        lcp: 1854,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191940086,
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
                { start: 0, end: 2500, density: 0.6386056589344891 },
                { start: 2500, end: 4000, density: 0.28555952077491736 },
                { start: 4000, density: 0.07583482029059352 },
              ],
              percentiles: { p75: 2967 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9349552502205974,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028614647674272024,
                },
                { start: "0.25", density: 0.0364301021051305 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42474958792950446 },
                { start: 200, end: 500, density: 0.36148091796627374 },
                { start: 500, density: 0.21376949410422175 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26963151207115654 },
                { start: 800, end: 1800, density: 0.46670902160101696 },
                { start: 1800, density: 0.26365946632782655 },
              ],
              percentiles: { p75: 1892 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4761661993372424 },
                { start: 1800, end: 3000, density: 0.36438949783329133 },
                { start: 3000, density: 0.1594443028294663 },
              ],
              percentiles: { p75: 2575 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8861475199177589 },
                { start: 100, end: 300, density: 0.05551272166538163 },
                { start: 300, density: 0.05833975841685958 },
              ],
              percentiles: { p75: 18 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2575,
        lcp: 2967,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1657191940660,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5906976744186049 },
                { start: 200, end: 500, density: 0.3488372093023258 },
                { start: 500, density: 0.06046511627906932 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7470581999363938 },
                { start: 800, end: 1800, density: 0.21318774515000535 },
                { start: 1800, density: 0.03975405491360097 },
              ],
              percentiles: { p75: 807 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8542042201251198 },
                { start: 1800, end: 3000, density: 0.1052910613932775 },
                { start: 3000, density: 0.04050471848160284 },
              ],
              percentiles: { p75: 1445 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649797138586377 },
                { start: 100, end: 300, density: 0.02370275464445868 },
                { start: 300, density: 0.011317531496903673 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.882649808754781 },
                { start: 2500, end: 4000, density: 0.08515724606884825 },
                { start: 4000, density: 0.03219294517637063 },
              ],
              percentiles: { p75: 1853 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9687665993838309,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022946988207797732,
                },
                { start: "0.25", density: 0.00828641240837141 },
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
        fcp: 1445,
        lcp: 1853,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191941176,
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
                  density: 0.9366380431954203,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047619047619047616,
                },
                { start: "0.25", density: 0.015742909185532117 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3992707383773929 },
                { start: 200, end: 500, density: 0.4111212397447584 },
                { start: 500, density: 0.18960802187784861 },
              ],
              percentiles: { p75: 407 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5612405129547234 },
                { start: 800, end: 1800, density: 0.31680188432347534 },
                { start: 1800, density: 0.12195760272180117 },
              ],
              percentiles: { p75: 1190 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6912460567823336 },
                { start: 1800, end: 3000, density: 0.17652471083070437 },
                { start: 3000, density: 0.13222923238696205 },
              ],
              percentiles: { p75: 2084 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9301011693601366 },
                { start: 100, end: 300, density: 0.047825515700959144 },
                { start: 300, density: 0.022073314938904177 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.775362318840579 },
                { start: 2500, end: 4000, density: 0.13454759106933004 },
                { start: 4000, density: 0.09009009009009096 },
              ],
              percentiles: { p75: 2395 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2084,
        lcp: 2395,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1657191941786,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37474949899799564 },
                { start: 200, end: 500, density: 0.4313332547447834 },
                { start: 500, density: 0.19391724625722093 },
              ],
              percentiles: { p75: 427 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5260955480646279 },
                { start: 800, end: 1800, density: 0.3805649192142271 },
                { start: 1800, density: 0.09333953272114497 },
              ],
              percentiles: { p75: 1159 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7188999414862486 },
                { start: 1800, end: 3000, density: 0.18689291983616124 },
                { start: 3000, density: 0.09420713867759034 },
              ],
              percentiles: { p75: 1916 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9066666666666667 },
                { start: 100, end: 300, density: 0.0592857142857143 },
                { start: 300, density: 0.03404761904761897 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8055328108550699 },
                { start: 2500, end: 4000, density: 0.12755877880453845 },
                { start: 4000, density: 0.06690841034039159 },
              ],
              percentiles: { p75: 2234 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9332867621376179,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033531260915124,
                },
                { start: "0.25", density: 0.033181976947258086 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1916,
        lcp: 2234,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1657191942317,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.863813618638136 },
                { start: 2500, end: 4000, density: 0.10808919108089193 },
                { start: 4000, density: 0.028097190280971882 },
              ],
              percentiles: { p75: 1813 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9141 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06369999999999999,
                },
                { start: "0.25", density: 0.022200000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8032196780321968 },
                { start: 200, end: 500, density: 0.16228377162283775 },
                { start: 500, density: 0.03449655034496547 },
              ],
              percentiles: { p75: 177 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6352635263526353 },
                { start: 800, end: 1800, density: 0.3106310631063106 },
                { start: 1800, density: 0.054105410541054236 },
              ],
              percentiles: { p75: 1031 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8326832683268328 },
                { start: 1800, end: 3000, density: 0.12541254125412546 },
                { start: 3000, density: 0.0419041904190418 },
              ],
              percentiles: { p75: 1428 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1428, lcp: 1813, cls: "0.03" },
      timestamp: 1657191942856,
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
                  density: 0.8257825782578258,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1389138913891389,
                },
                { start: "0.25", density: 0.035303530353035274 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6154384561543851 },
                { start: 200, end: 500, density: 0.2755724427557247 },
                { start: 500, density: 0.1089891010898903 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6988397679535907 },
                { start: 800, end: 1800, density: 0.2641528305661133 },
                { start: 1800, density: 0.03700740148029608 },
              ],
              percentiles: { p75: 880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8929214157168565 },
                { start: 1800, end: 3000, density: 0.07858428314337129 },
                { start: 3000, density: 0.028494301139772138 },
              ],
              percentiles: { p75: 1362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598 },
                { start: 100, end: 300, density: 0.0226 },
                { start: 300, density: 0.017599999999999998 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9001699660067987 },
                { start: 2500, end: 4000, density: 0.06733653269346132 },
                { start: 4000, density: 0.0324935012997401 },
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
        fcp: 1362,
        lcp: 1814,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1657191943291,
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
                { start: 0, end: 800, density: 0.7205097806757557 },
                { start: 800, end: 1800, density: 0.274896265560166 },
                { start: 1800, density: 0.004593953764078245 },
              ],
              percentiles: { p75: 849 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9259094942324756 },
                { start: 1800, end: 3000, density: 0.061076604554865424 },
                { start: 3000, density: 0.013013901212658977 },
              ],
              percentiles: { p75: 1332 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9505779490219323 },
                { start: 2500, end: 4000, density: 0.03815945465323058 },
                { start: 4000, density: 0.011262596324836987 },
              ],
              percentiles: { p75: 1618 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1332, lcp: 1618 },
      timestamp: 1657191943661,
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
                  density: 0.956439136924956,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028362057266929027,
                },
                { start: "0.25", density: 0.015198805808115074 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45413900555480285 },
                { start: 200, end: 500, density: 0.3988619428261751 },
                { start: 500, density: 0.14699905161902196 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7195556774547452 },
                { start: 800, end: 1800, density: 0.19939659901261664 },
                { start: 1800, density: 0.08104772353263814 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8595505617977521 },
                { start: 1800, end: 3000, density: 0.09687585639901333 },
                { start: 3000, density: 0.04357358180323446 },
              ],
              percentiles: { p75: 1359 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603368649823417 },
                { start: 100, end: 300, density: 0.020510730779679433 },
                { start: 300, density: 0.01915240423797887 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8817233809001102 },
                { start: 2500, end: 4000, density: 0.08959934138309551 },
                { start: 4000, density: 0.028677277716794305 },
              ],
              percentiles: { p75: 1763 },
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
        lcp: 1763,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657191944204,
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
                  density: 0.9379784102060843,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0451422963689892,
                },
                { start: "0.25", density: 0.016879293424926396 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5344336937962442 },
                { start: 200, end: 500, density: 0.3356099411876309 },
                { start: 500, density: 0.12995636501612498 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6805896805896806 },
                { start: 800, end: 1800, density: 0.26248976248976247 },
                { start: 1800, density: 0.056920556920556926 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8714429868819374 },
                { start: 1800, end: 3000, density: 0.09586276488395562 },
                { start: 3000, density: 0.03269424823410698 },
              ],
              percentiles: { p75: 1369 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9628230616302186 },
                { start: 100, end: 300, density: 0.016500994035785286 },
                { start: 300, density: 0.02067594433399605 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9024463007159904 },
                { start: 2500, end: 4000, density: 0.07209626093874304 },
                { start: 4000, density: 0.02545743834526652 },
              ],
              percentiles: { p75: 1701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1369,
        lcp: 1701,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191944824,
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
                  density: 0.8449999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10189999999999998,
                },
                { start: "0.25", density: 0.053100000000000015 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5557888422315538 },
                { start: 200, end: 500, density: 0.32443511297740457 },
                { start: 500, density: 0.11977604479104167 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7466253374662533 },
                { start: 800, end: 1800, density: 0.18388161183881604 },
                { start: 1800, density: 0.06949305069493082 },
              ],
              percentiles: { p75: 810 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8770245950809834 },
                { start: 1800, end: 3000, density: 0.08498300339932009 },
                { start: 3000, density: 0.03799240151969644 },
              ],
              percentiles: { p75: 1272 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659931986397278 },
                { start: 100, end: 300, density: 0.01590318063612722 },
                { start: 300, density: 0.018103620724145016 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8893000000000001 },
                { start: 2500, end: 4000, density: 0.0831 },
                { start: 4000, density: 0.027599999999999833 },
              ],
              percentiles: { p75: 1711 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1272,
        lcp: 1711,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1657191945386,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9170816733067728 },
                { start: 2500, end: 4000, density: 0.05926294820717133 },
                { start: 4000, density: 0.023655378486055954 },
              ],
              percentiles: { p75: 1682 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9104292960534455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0640851169120376,
                },
                { start: "0.25", density: 0.025485587034516893 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4239330955602017 },
                { start: 200, end: 500, density: 0.41778379043168123 },
                { start: 500, density: 0.15828311400811698 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.853609541745135 },
                { start: 800, end: 1800, density: 0.13258003766478343 },
                { start: 1800, density: 0.01381042059008152 },
              ],
              percentiles: { p75: 679 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9200150206533984 },
                { start: 1800, end: 3000, density: 0.06321191638502943 },
                { start: 3000, density: 0.016773062961572164 },
              ],
              percentiles: { p75: 1215 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9291358334378528 },
                { start: 100, end: 300, density: 0.0408879969898407 },
                { start: 300, density: 0.029976169572306532 },
              ],
              percentiles: { p75: 15 },
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
        lcp: 1682,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1657191945747,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.12017596480703811 },
                { start: 1800, end: 3000, density: 0.43061387722455335 },
                { start: 3000, density: 0.44921015796840863 },
              ],
              percentiles: { p75: 4366 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3101189881011919 },
                { start: 2500, end: 4000, density: 0.34241575842415967 },
                { start: 4000, density: 0.34746525347464846 },
              ],
              percentiles: { p75: 5072 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8491150884911509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08879112088791122,
                },
                { start: "0.25", density: 0.062093790620937936 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7653000000000004 },
                { start: 200, end: 500, density: 0.13760000000000003 },
                { start: 500, density: 0.09709999999999948 },
              ],
              percentiles: { p75: 180 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40019999999999956 },
                { start: 800, end: 1800, density: 0.4263999999999994 },
                { start: 1800, density: 0.17340000000000114 },
              ],
              percentiles: { p75: 1399 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4366, lcp: 5072, cls: "0.05" },
      timestamp: 1657191946359,
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
                  density: 0.9363289670038136,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04277897529431272,
                },
                { start: "0.25", density: 0.02089205770187364 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4458116422148606 },
                { start: 200, end: 500, density: 0.40164063732449934 },
                { start: 500, density: 0.15254772046064013 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6745150058033492 },
                { start: 800, end: 1800, density: 0.29530757751616654 },
                { start: 1800, density: 0.030177416680484154 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8593697619845795 },
                { start: 1800, end: 3000, density: 0.1104592691920885 },
                { start: 3000, density: 0.030170968823331985 },
              ],
              percentiles: { p75: 1453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9337813473201114 },
                { start: 100, end: 300, density: 0.041796426815276184 },
                { start: 300, density: 0.02442222586461231 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9021230357739889 },
                { start: 2500, end: 4000, density: 0.07029421598127714 },
                { start: 4000, density: 0.027582748244733987 },
              ],
              percentiles: { p75: 1883 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1453,
        lcp: 1883,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1657191946755,
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
                  density: 0.9306000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048900000000000006,
                },
                { start: "0.25", density: 0.020499999999999984 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6205620562056209 },
                { start: 200, end: 500, density: 0.2943294329432945 },
                { start: 500, density: 0.08510851085108456 },
              ],
              percentiles: { p75: 239 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6809319068093189 },
                { start: 1800, end: 3000, density: 0.12758724127587237 },
                { start: 3000, density: 0.19148085191480865 },
              ],
              percentiles: { p75: 2357 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7002801120448162 },
                { start: 2500, end: 4000, density: 0.15786314525810283 },
                { start: 4000, density: 0.1418567426970809 },
              ],
              percentiles: { p75: 2808 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2357, lcp: 2808, cls: "0.00" },
      timestamp: 1657191947308,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9172334466893379 },
                { start: 2500, end: 4000, density: 0.06196239247849568 },
                { start: 4000, density: 0.02080416083216657 },
              ],
              percentiles: { p75: 1704 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8801 },
                { start: "0.10", end: "0.25", density: 0.0899 },
                { start: "0.25", density: 0.03000000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.635063506350635 },
                { start: 200, end: 500, density: 0.26502650265026495 },
                { start: 500, density: 0.09990999099910014 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7112 },
                { start: 800, end: 1800, density: 0.2559 },
                { start: 1800, density: 0.03289999999999984 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8896000000000001 },
                { start: 1800, end: 3000, density: 0.08679999999999997 },
                { start: 3000, density: 0.02360000000000011 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411235505797679 },
                { start: 100, end: 300, density: 0.029788084766093556 },
                { start: 300, density: 0.02908836465413847 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1296,
        lcp: 1704,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1657191947684,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6745150058033492 },
                { start: 800, end: 1800, density: 0.29530757751616654 },
                { start: 1800, density: 0.030177416680484154 },
              ],
              percentiles: { p75: 916 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8593697619845795 },
                { start: 1800, end: 3000, density: 0.1104592691920885 },
                { start: 3000, density: 0.030170968823331985 },
              ],
              percentiles: { p75: 1453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9337813473201114 },
                { start: 100, end: 300, density: 0.041796426815276184 },
                { start: 300, density: 0.02442222586461231 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9021230357739889 },
                { start: 2500, end: 4000, density: 0.07029421598127714 },
                { start: 4000, density: 0.027582748244733987 },
              ],
              percentiles: { p75: 1883 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9363289670038136,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04277897529431272,
                },
                { start: "0.25", density: 0.02089205770187364 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4458116422148606 },
                { start: 200, end: 500, density: 0.40164063732449934 },
                { start: 500, density: 0.15254772046064013 },
              ],
              percentiles: { p75: 375 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1453,
        lcp: 1883,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1657191948140,
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
                { start: 0, end: 1800, density: 0.6769416221801263 },
                { start: 1800, end: 3000, density: 0.20423626657482322 },
                { start: 3000, density: 0.11882211124505043 },
              ],
              percentiles: { p75: 2126 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619396157365051 },
                { start: 100, end: 300, density: 0.0322049405306496 },
                { start: 300, density: 0.005855443732845353 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.746295658166781 },
                { start: 2500, end: 4000, density: 0.1639386629910406 },
                { start: 4000, density: 0.08976567884217837 },
              ],
              percentiles: { p75: 2540 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9249915340331867,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05028784287165594,
                },
                { start: "0.25", density: 0.024720623095157483 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6494263340010924 },
                { start: 200, end: 500, density: 0.272263704243307 },
                { start: 500, density: 0.0783099617556005 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.495518786625301 },
                { start: 800, end: 1800, density: 0.37659427783522864 },
                { start: 1800, density: 0.1278869355394703 },
              ],
              percentiles: { p75: 1341 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2126,
        lcp: 2540,
        cls: "0.05",
        fid: 14,
      },
      timestamp: 1657191948689,
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
                { start: 0, end: 1800, density: 0.8855885588558857 },
                { start: 1800, end: 3000, density: 0.08430843084308433 },
                { start: 3000, density: 0.03010301030102997 },
              ],
              percentiles: { p75: 1346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565043495650435 },
                { start: 100, end: 300, density: 0.028597140285971403 },
                { start: 300, density: 0.014898510148985071 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9027902790279027 },
                { start: 2500, end: 4000, density: 0.06310631063106309 },
                { start: 4000, density: 0.03410341034103434 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.797 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15910000000000002,
                },
                { start: "0.25", density: 0.04389999999999995 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6294629462946297 },
                { start: 200, end: 500, density: 0.26532653265326545 },
                { start: 500, density: 0.10521052105210478 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7233723372337234 },
                { start: 800, end: 1800, density: 0.24572457245724574 },
                { start: 1800, density: 0.030903090309030875 },
              ],
              percentiles: { p75: 863 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1346,
        lcp: 1847,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1657191949250,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6648329665933177 },
                { start: 1800, end: 3000, density: 0.21814362872574475 },
                { start: 3000, density: 0.11702340468093754 },
              ],
              percentiles: { p75: 2211 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959716113554578 },
                { start: 100, end: 300, density: 0.020491803278688523 },
                { start: 300, density: 0.019792083166733497 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7225222522252228 },
                { start: 2500, end: 4000, density: 0.17186718671867185 },
                { start: 4000, density: 0.10561056105610538 },
              ],
              percentiles: { p75: 2669 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8121812181218122,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13641364136413642,
                },
                { start: "0.25", density: 0.0514051405140514 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7255274472552745 },
                { start: 200, end: 500, density: 0.17878212178782119 },
                { start: 500, density: 0.09569043095690434 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4955 },
                { start: 800, end: 1800, density: 0.3802000000000001 },
                { start: 1800, density: 0.1242999999999998 },
              ],
              percentiles: { p75: 1363 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2211,
        lcp: 2669,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1657191949707,
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
                { start: 0, end: 100, density: 0.9646926431284286 },
                { start: 100, end: 300, density: 0.03136868757912505 },
                { start: 300, density: 0.003938669292446196 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6945169712793721 },
                { start: 2500, end: 4000, density: 0.19568503504191254 },
                { start: 4000, density: 0.10979799367871525 },
              ],
              percentiles: { p75: 2796 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9548184548184548,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01638001638001638,
                },
                { start: "0.25", density: 0.028801528801528815 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5533370566880762 },
                { start: 200, end: 500, density: 0.35939681653169514 },
                { start: 500, density: 0.08726612678022873 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4036873968079245 },
                { start: 800, end: 1800, density: 0.47454595487066514 },
                { start: 1800, density: 0.12176664832141025 },
              ],
              percentiles: { p75: 1373 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5771664374140313 },
                { start: 1800, end: 3000, density: 0.2595598349381022 },
                { start: 3000, density: 0.1632737276478666 },
              ],
              percentiles: { p75: 2474 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2474,
        lcp: 2796,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191950084,
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
                  density: 0.9047904790479049,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049604960496049615,
                },
                { start: "0.25", density: 0.04560456045604558 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6431286257251453 },
                { start: 200, end: 500, density: 0.2879575915183037 },
                { start: 500, density: 0.06891378275655104 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3364999999999998 },
                { start: 800, end: 1800, density: 0.49019999999999975 },
                { start: 1800, density: 0.17330000000000034 },
              ],
              percentiles: { p75: 1573 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5562331300609824 },
                { start: 1800, end: 3000, density: 0.281415575327402 },
                { start: 3000, density: 0.16235129461161563 },
              ],
              percentiles: { p75: 2565 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9716971697169716 },
                { start: 100, end: 300, density: 0.024202420242024195 },
                { start: 300, density: 0.0041004100410041 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6586841315868408 },
                { start: 2500, end: 4000, density: 0.2206279372062793 },
                { start: 4000, density: 0.12068793120687997 },
              ],
              percentiles: { p75: 2920 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2565,
        lcp: 2920,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1657191950648,
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
                  density: 0.9408134198449121,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03339135939230891,
                },
                { start: "0.25", density: 0.02579522076277893 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.587272727272727 },
                { start: 200, end: 500, density: 0.27752066115702473 },
                { start: 500, density: 0.1352066115702483 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4156094427493177 },
                { start: 800, end: 1800, density: 0.43279267705154995 },
                { start: 1800, density: 0.1515978801991324 },
              ],
              percentiles: { p75: 1481 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057984943136302 },
                { start: 1800, end: 3000, density: 0.24587538042607682 },
                { start: 3000, density: 0.1483261252602931 },
              ],
              percentiles: { p75: 2410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382797110965199 },
                { start: 100, end: 300, density: 0.03069599474720945 },
                { start: 300, density: 0.031024294156270723 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7099033816425124 },
                { start: 2500, end: 4000, density: 0.17608695652173917 },
                { start: 4000, density: 0.11400966183574836 },
              ],
              percentiles: { p75: 2719 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2410,
        lcp: 2719,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1657191951053,
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
                { start: 0, end: 2500, density: 0.7270851917930415 },
                { start: 2500, end: 4000, density: 0.17980597680642266 },
                { start: 4000, density: 0.09310883140053595 },
              ],
              percentiles: { p75: 2593 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.786016007114273,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1690751445086705,
                },
                { start: "0.25", density: 0.04490884837705644 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5416478555304739 },
                { start: 200, end: 500, density: 0.28860045146726854 },
                { start: 500, density: 0.16975169300225754 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48378076062639797 },
                { start: 800, end: 1800, density: 0.4286353467561519 },
                { start: 1800, density: 0.08758389261745017 },
              ],
              percentiles: { p75: 1231 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6820158323112945 },
                { start: 1800, end: 3000, density: 0.22934552346972906 },
                { start: 3000, density: 0.0886386442189764 },
              ],
              percentiles: { p75: 2018 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9139452274550242 },
                { start: 100, end: 300, density: 0.043772201214621276 },
                { start: 300, density: 0.042282571330354436 },
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
        fcp: 2018,
        lcp: 2593,
        cls: "0.07",
        fid: 18,
      },
      timestamp: 1657191951688,
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
                { start: 0, end: 800, density: 0.48123276172202917 },
                { start: 800, end: 1800, density: 0.3959707398968703 },
                { start: 1800, density: 0.12279649838110054 },
              ],
              percentiles: { p75: 1253 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6646547561564454 },
                { start: 1800, end: 3000, density: 0.21294060840173804 },
                { start: 3000, density: 0.12240463544181643 },
              ],
              percentiles: { p75: 2124 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593336599706027 },
                { start: 100, end: 300, density: 0.03331700146986772 },
                { start: 300, density: 0.00734933855952964 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7677756425654564 },
                { start: 2500, end: 4000, density: 0.14718952678356934 },
                { start: 4000, density: 0.0850348306509743 },
              ],
              percentiles: { p75: 2431 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9555741827326067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017722428451682433,
                },
                { start: "0.25", density: 0.02670338881571067 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5497167650958172 },
                { start: 200, end: 500, density: 0.3191515005423644 },
                { start: 500, density: 0.1311317343618185 },
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
        fcp: 2124,
        lcp: 2431,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191952261,
    },
    {
      url: "https://www.yara.co.zm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.zm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9327932793279328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043604360436043606,
                },
                { start: "0.25", density: 0.023602360236023603 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4528094381123764 },
                { start: 1800, end: 3000, density: 0.20865826834633025 },
                { start: 3000, density: 0.33853229354129344 },
              ],
              percentiles: { p75: 3464 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: { fcp: 3464, cls: "0.00" },
      timestamp: 1657191952933,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6294629462946297 },
                { start: 200, end: 500, density: 0.26532653265326545 },
                { start: 500, density: 0.10521052105210478 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7233723372337234 },
                { start: 800, end: 1800, density: 0.24572457245724574 },
                { start: 1800, density: 0.030903090309030875 },
              ],
              percentiles: { p75: 863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8855885588558857 },
                { start: 1800, end: 3000, density: 0.08430843084308433 },
                { start: 3000, density: 0.03010301030102997 },
              ],
              percentiles: { p75: 1346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565043495650435 },
                { start: 100, end: 300, density: 0.028597140285971403 },
                { start: 300, density: 0.014898510148985071 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9027902790279027 },
                { start: 2500, end: 4000, density: 0.06310631063106309 },
                { start: 4000, density: 0.03410341034103434 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.797 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15910000000000002,
                },
                { start: "0.25", density: 0.04389999999999995 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1346,
        lcp: 1847,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1657191953534,
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
                { start: 0, end: 1800, density: 0.6026827012025887 },
                { start: 1800, end: 3000, density: 0.21631205673758805 },
                { start: 3000, density: 0.18100524205982338 },
              ],
              percentiles: { p75: 2513 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9372597262801783 },
                { start: 100, end: 300, density: 0.034445640473627546 },
                { start: 300, density: 0.02829463324619413 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7022273425499224 },
                { start: 2500, end: 4000, density: 0.1801075268817202 },
                { start: 4000, density: 0.11766513056835749 },
              ],
              percentiles: { p75: 2741 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9526975970983829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025540275049115914,
                },
                { start: "0.25", density: 0.021762127852501142 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6228721757969667 },
                { start: 200, end: 500, density: 0.2799442896935932 },
                { start: 500, density: 0.09718353450944005 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36159678168033493 },
                { start: 800, end: 1800, density: 0.39733869719944376 },
                { start: 1800, density: 0.24106452112022123 },
              ],
              percentiles: { p75: 1785 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2513,
        lcp: 2741,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191953925,
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
                { start: "0.00", end: "0.10", density: 0.9255 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052500000000000005,
                },
                { start: "0.25", density: 0.021999999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299629962996299 },
                { start: 200, end: 500, density: 0.3137313731373138 },
                { start: 500, density: 0.0563056305630563 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4195419541954193 },
                { start: 800, end: 1800, density: 0.4826482648264823 },
                { start: 1800, density: 0.09780978097809832 },
              ],
              percentiles: { p75: 1280 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6500999999999998 },
                { start: 1800, end: 3000, density: 0.25659999999999994 },
                { start: 3000, density: 0.0933000000000003 },
              ],
              percentiles: { p75: 2132 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9788021197880212 },
                { start: 100, end: 300, density: 0.016998300169983 },
                { start: 300, density: 0.004199580041995801 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7471747174717476 },
                { start: 2500, end: 4000, density: 0.17261726172617264 },
                { start: 4000, density: 0.0802080208020799 },
              ],
              percentiles: { p75: 2636 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2132,
        lcp: 2636,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191954585,
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
                { start: "0.00", end: "0.10", density: 0.9616 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027399999999999997,
                },
                { start: "0.25", density: 0.010999999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5823999999999997 },
                { start: 200, end: 500, density: 0.31779999999999975 },
                { start: 500, density: 0.09980000000000058 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6322529011604641 },
                { start: 800, end: 1800, density: 0.3250300120048019 },
                { start: 1800, density: 0.0427170868347341 },
              ],
              percentiles: { p75: 989 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8524442667199835 },
                { start: 1800, end: 3000, density: 0.1124662601219634 },
                { start: 3000, density: 0.03508947315805301 },
              ],
              percentiles: { p75: 1478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620962096209622 },
                { start: 100, end: 300, density: 0.026502650265026507 },
                { start: 300, density: 0.011401140114011344 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8849884988498852 },
                { start: 2500, end: 4000, density: 0.0869086908690869 },
                { start: 4000, density: 0.028102810281028023 },
              ],
              percentiles: { p75: 1936 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1478,
        lcp: 1936,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657191955000,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.604620924184837 },
                { start: 800, end: 1800, density: 0.30156031206241257 },
                { start: 1800, density: 0.09381876375275038 },
              ],
              percentiles: { p75: 1134 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7626050420168072 },
                { start: 1800, end: 3000, density: 0.1502601040416167 },
                { start: 3000, density: 0.087134853941576 },
              ],
              percentiles: { p75: 1757 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9763023697630236 },
                { start: 100, end: 300, density: 0.018998100189981 },
                { start: 300, density: 0.004699530046995286 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7874937468734369 },
                { start: 2500, end: 4000, density: 0.13586793396698343 },
                { start: 4000, density: 0.07663831915957973 },
              ],
              percentiles: { p75: 2298 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8593718743748749,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11012202440488099,
                },
                { start: "0.25", density: 0.030506101220244063 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7830650804758572 },
                { start: 200, end: 500, density: 0.16395081475557333 },
                { start: 500, density: 0.05298410476856945 },
              ],
              percentiles: { p75: 180 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1757,
        lcp: 2298,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1657191955391,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6839367873574715 },
                { start: 800, end: 1800, density: 0.2447489497899581 },
                { start: 1800, density: 0.07131426285257036 },
              ],
              percentiles: { p75: 897 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8269173082691725 },
                { start: 1800, end: 3000, density: 0.11608839116088382 },
                { start: 3000, density: 0.05699430056994363 },
              ],
              percentiles: { p75: 1506 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942076830732293 },
                { start: 100, end: 300, density: 0.028511404561824726 },
                { start: 300, density: 0.0294117647058823 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8545354535453544 },
                { start: 2500, end: 4000, density: 0.09875987598759876 },
                { start: 4000, density: 0.04670467046704678 },
              ],
              percentiles: { p75: 1944 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9229999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06049999999999999,
                },
                { start: "0.25", density: 0.0165 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6133000000000002 },
                { start: 200, end: 500, density: 0.2954000000000001 },
                { start: 500, density: 0.09129999999999973 },
              ],
              percentiles: { p75: 269 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1506,
        lcp: 1944,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191955811,
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
                { start: 0, end: 200, density: 0.5760908547519425 },
                { start: 200, end: 500, density: 0.3642558278541542 },
                { start: 500, density: 0.05965331739390327 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4098560624542569 },
                { start: 800, end: 1800, density: 0.4873139790192727 },
                { start: 1800, density: 0.10282995852647045 },
              ],
              percentiles: { p75: 1300 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6267371786988071 },
                { start: 1800, end: 3000, density: 0.27229123109088677 },
                { start: 3000, density: 0.10097159021030612 },
              ],
              percentiles: { p75: 2201 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9788961038961039 },
                { start: 100, end: 300, density: 0.018481518481518484 },
                { start: 300, density: 0.0026223776223776225 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.764233128834356 },
                { start: 2500, end: 4000, density: 0.17282208588957057 },
                { start: 4000, density: 0.06294478527607339 },
              ],
              percentiles: { p75: 2548 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9549019607843138,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025980392156862746,
                },
                { start: "0.25", density: 0.01911764705882354 },
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
        fcp: 2201,
        lcp: 2548,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191956290,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9070442265359214 },
                { start: 100, end: 300, density: 0.06133680208124874 },
                { start: 300, density: 0.03161897138282977 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5489999999999993 },
                { start: 2500, end: 4000, density: 0.2445999999999997 },
                { start: 4000, density: 0.20640000000000103 },
              ],
              percentiles: { p75: 3671 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8481 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10939999999999998,
                },
                { start: "0.25", density: 0.042499999999999996 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4694061187762449 },
                { start: 200, end: 500, density: 0.28974205158968214 },
                { start: 500, density: 0.24085182963407306 },
              ],
              percentiles: { p75: 480 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4142828565713138 },
                { start: 800, end: 1800, density: 0.376675335067013 },
                { start: 1800, density: 0.20904180836167321 },
              ],
              percentiles: { p75: 1646 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5018509254627341 },
                { start: 1800, end: 3000, density: 0.23311655827914088 },
                { start: 3000, density: 0.2650325162581251 },
              ],
              percentiles: { p75: 3138 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3138,
        lcp: 3671,
        cls: "0.06",
        fid: 17,
      },
      timestamp: 1657191956950,
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
                { start: 0, end: 100, density: 0.9374125174965009 },
                { start: 100, end: 300, density: 0.04149170165966807 },
                { start: 300, density: 0.02109578084383109 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7811718828117183 },
                { start: 2500, end: 4000, density: 0.13503649635036488 },
                { start: 4000, density: 0.0837916208379167 },
              ],
              percentiles: { p75: 2378 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8331 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12209999999999999,
                },
                { start: "0.25", density: 0.0448 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49040000000000017 },
                { start: 200, end: 500, density: 0.34330000000000016 },
                { start: 500, density: 0.16629999999999973 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5996999999999997 },
                { start: 800, end: 1800, density: 0.29609999999999986 },
                { start: 1800, density: 0.10420000000000056 },
              ],
              percentiles: { p75: 1116 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7234999999999988 },
                { start: 1800, end: 3000, density: 0.16379999999999967 },
                { start: 3000, density: 0.11270000000000156 },
              ],
              percentiles: { p75: 1955 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1955,
        lcp: 2378,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1657191957385,
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
                  density: 0.8657585283502153,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10082663872394922,
                },
                { start: "0.25", density: 0.03341483292583538 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5377173787861337 },
                { start: 200, end: 500, density: 0.3319129333179776 },
                { start: 500, density: 0.13036968789588874 },
              ],
              percentiles: { p75: 316 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6002109704641349 },
                { start: 800, end: 1800, density: 0.3534927332395686 },
                { start: 1800, density: 0.04629629629629654 },
              ],
              percentiles: { p75: 1038 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7737984134391038 },
                { start: 1800, end: 3000, density: 0.17032197853476425 },
                { start: 3000, density: 0.05587960802613186 },
              ],
              percentiles: { p75: 1732 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577811657089246 },
                { start: 100, end: 300, density: 0.027090418670106718 },
                { start: 300, density: 0.015128415620968639 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8350815850815846 },
                { start: 2500, end: 4000, density: 0.1213286713286713 },
                { start: 4000, density: 0.043589743589744046 },
              ],
              percentiles: { p75: 2155 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1732,
        lcp: 2155,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191957801,
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
                { start: 0, end: 800, density: 0.3082691730826916 },
                { start: 800, end: 1800, density: 0.4932506749325066 },
                { start: 1800, density: 0.19848015198480173 },
              ],
              percentiles: { p75: 1707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6034603460346033 },
                { start: 1800, end: 3000, density: 0.24712471247124698 },
                { start: 3000, density: 0.1494149414941496 },
              ],
              percentiles: { p75: 2496 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9641964196419642 },
                { start: 100, end: 300, density: 0.024702470247024707 },
                { start: 300, density: 0.011101110111011106 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6997 },
                { start: 2500, end: 4000, density: 0.20849999999999985 },
                { start: 4000, density: 0.09180000000000003 },
              ],
              percentiles: { p75: 2774 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7843784378437845,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14901490149014904,
                },
                { start: "0.25", density: 0.06660666066606659 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6817318268173183 },
                { start: 200, end: 500, density: 0.2513748625137486 },
                { start: 500, density: 0.06689331066893318 },
              ],
              percentiles: { p75: 233 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2496,
        lcp: 2774,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1657191958550,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803000000000001 },
                { start: 100, end: 300, density: 0.009300000000000001 },
                { start: 300, density: 0.010400000000000015 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9123675264947011 },
                { start: 2500, end: 4000, density: 0.06663667266546691 },
                { start: 4000, density: 0.02099580083983205 },
              ],
              percentiles: { p75: 1652 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8408 },
                { start: "0.10", end: "0.25", density: 0.139 },
                { start: "0.25", density: 0.02020000000000001 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7420000000000003 },
                { start: 200, end: 500, density: 0.18750000000000022 },
                { start: 500, density: 0.07049999999999948 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7327267273272672 },
                { start: 800, end: 1800, density: 0.2243775622437756 },
                { start: 1800, density: 0.0428957104289571 },
              ],
              percentiles: { p75: 844 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8995301409577126 },
                { start: 1800, end: 3000, density: 0.07117864640607818 },
                { start: 3000, density: 0.02929121263620914 },
              ],
              percentiles: { p75: 1255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1255, lcp: 1652, cls: "0.07", fid: 9 },
      timestamp: 1657191958997,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44432586268231955 },
                { start: 200, end: 500, density: 0.4402347918890075 },
                { start: 500, density: 0.11543934542867304 },
              ],
              percentiles: { p75: 326 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3609790456066209 },
                { start: 800, end: 1800, density: 0.46346187709103714 },
                { start: 1800, density: 0.175559077302342 },
              ],
              percentiles: { p75: 1707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6073555166374782 },
                { start: 1800, end: 3000, density: 0.25726795096322236 },
                { start: 3000, density: 0.13537653239929937 },
              ],
              percentiles: { p75: 2530 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9385513216615173 },
                { start: 100, end: 300, density: 0.04239615516649503 },
                { start: 300, density: 0.019052523171987648 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7336043839490898 },
                { start: 2500, end: 4000, density: 0.21177302457132754 },
                { start: 4000, density: 0.05462259147958281 },
              ],
              percentiles: { p75: 2695 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9348345274650289,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02917093142272262,
                },
                { start: "0.25", density: 0.03599454111224841 },
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
        fcp: 2530,
        lcp: 2695,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191959430,
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
                  density: 0.8491150884911509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08879112088791122,
                },
                { start: "0.25", density: 0.062093790620937936 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7653000000000004 },
                { start: 200, end: 500, density: 0.13760000000000003 },
                { start: 500, density: 0.09709999999999948 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40019999999999956 },
                { start: 800, end: 1800, density: 0.4263999999999994 },
                { start: 1800, density: 0.17340000000000114 },
              ],
              percentiles: { p75: 1391 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.12017596480703811 },
                { start: 1800, end: 3000, density: 0.43061387722455335 },
                { start: 3000, density: 0.44921015796840863 },
              ],
              percentiles: { p75: 4413 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3101189881011919 },
                { start: 2500, end: 4000, density: 0.34241575842415967 },
                { start: 4000, density: 0.34746525347464846 },
              ],
              percentiles: { p75: 5092 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4413, lcp: 5092, cls: "0.05" },
      timestamp: 1657191960159,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5803330884153807 },
                { start: 200, end: 500, density: 0.3152094048493753 },
                { start: 500, density: 0.10445750673524397 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41306181467646685 },
                { start: 800, end: 1800, density: 0.3959513194360766 },
                { start: 1800, density: 0.19098686588745659 },
              ],
              percentiles: { p75: 1497 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5336673591592332 },
                { start: 1800, end: 3000, density: 0.24196504949285133 },
                { start: 3000, density: 0.22436759134791542 },
              ],
              percentiles: { p75: 2875 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6257911392405087 },
                { start: 2500, end: 4000, density: 0.18165774099318466 },
                { start: 4000, density: 0.19255111976630665 },
              ],
              percentiles: { p75: 3396 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2875, lcp: 3396 },
      timestamp: 1657191960801,
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
                  density: 0.8591944350948053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09884438460675417,
                },
                { start: "0.25", density: 0.04196118029844048 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4141957641671432 },
                { start: 200, end: 500, density: 0.3195191757298222 },
                { start: 500, density: 0.2662850601030346 },
              ],
              percentiles: { p75: 526 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38838434802107835 },
                { start: 800, end: 1800, density: 0.38513286242852307 },
                { start: 1800, density: 0.22648278955039855 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4701509348952508 },
                { start: 1800, end: 3000, density: 0.2425095742284319 },
                { start: 3000, density: 0.2873394908763174 },
              ],
              percentiles: { p75: 3274 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8946756568239945 },
                { start: 100, end: 300, density: 0.0696349686119507 },
                { start: 300, density: 0.03568937456405481 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.524005409669785 },
                { start: 2500, end: 4000, density: 0.2580299785867238 },
                { start: 4000, density: 0.21796461174349127 },
              ],
              percentiles: { p75: 3771 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3274,
        lcp: 3771,
        cls: "0.04",
        fid: 20,
      },
      timestamp: 1657191961449,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5556465769455825 },
                { start: 200, end: 500, density: 0.340198946752487 },
                { start: 500, density: 0.10415447630193045 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6600254836094054 },
                { start: 800, end: 1800, density: 0.262481176879416 },
                { start: 1800, density: 0.07749333951117848 },
              ],
              percentiles: { p75: 931 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.816182428521819 },
                { start: 1800, end: 3000, density: 0.12374117374696138 },
                { start: 3000, density: 0.06007639773121966 },
              ],
              percentiles: { p75: 1550 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.932033096926714 },
                { start: 100, end: 300, density: 0.03321513002364067 },
                { start: 300, density: 0.034751773049645336 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8512903599120464 },
                { start: 2500, end: 4000, density: 0.10091424603633832 },
                { start: 4000, density: 0.04779539405161534 },
              ],
              percentiles: { p75: 1963 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9693301049233253,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014989046466044044,
                },
                { start: "0.25", density: 0.015680848610630696 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1550,
        lcp: 1963,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191962182,
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
                  density: 0.944411520682707,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01884556121844257,
                },
                { start: "0.25", density: 0.03674291809885031 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46174994023428173 },
                { start: 200, end: 500, density: 0.37676308869232616 },
                { start: 500, density: 0.161486971073392 },
              ],
              percentiles: { p75: 383 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2261408316454185 },
                { start: 800, end: 1800, density: 0.49231502442511554 },
                { start: 1800, density: 0.281544143929466 },
              ],
              percentiles: { p75: 1911 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3668546741869671 },
                { start: 1800, end: 3000, density: 0.31897275891035615 },
                { start: 3000, density: 0.3141725669026767 },
              ],
              percentiles: { p75: 3353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522167487684728 },
                { start: 100, end: 300, density: 0.037807881773399006 },
                { start: 300, density: 0.009975369458128077 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4974245328222324 },
                { start: 2500, end: 4000, density: 0.3045639674173452 },
                { start: 4000, density: 0.1980114997604223 },
              ],
              percentiles: { p75: 3673 },
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
        lcp: 3673,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191962802,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8305999999999998 },
                { start: 2500, end: 4000, density: 0.10699999999999993 },
                { start: 4000, density: 0.06240000000000014 },
              ],
              percentiles: { p75: 2106 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9442944294429443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0426042604260426,
                },
                { start: "0.25", density: 0.01310131013101311 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9133740122036611 },
                { start: 200, end: 500, density: 0.06842052615784738 },
                { start: 500, density: 0.01820546163849153 },
              ],
              percentiles: { p75: 97 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6581341865813419 },
                { start: 800, end: 1800, density: 0.2707729227077292 },
                { start: 1800, density: 0.07109289071092884 },
              ],
              percentiles: { p75: 952 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8003 },
                { start: 1800, end: 3000, density: 0.13839999999999994 },
                { start: 3000, density: 0.061300000000000146 },
              ],
              percentiles: { p75: 1620 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9924015196960607 },
                { start: 100, end: 300, density: 0.006798640271945611 },
                { start: 300, density: 0.0007998400319936012 },
              ],
              percentiles: { p75: 7 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1620, lcp: 2106, cls: "0.03", fid: 7 },
      timestamp: 1657191963450,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6768323167683231 },
                { start: 200, end: 500, density: 0.2627737226277371 },
                { start: 500, density: 0.06039396060393978 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6807000000000001 },
                { start: 800, end: 1800, density: 0.2809 },
                { start: 1800, density: 0.03839999999999985 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8777877787778776 },
                { start: 1800, end: 3000, density: 0.0871087108710871 },
                { start: 3000, density: 0.035103510351035386 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.975504899020196 },
                { start: 100, end: 300, density: 0.019796040791841635 },
                { start: 300, density: 0.0046990601879624335 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9088500000000002 },
                { start: 2500, end: 4000, density: 0.06325 },
                { start: 4000, density: 0.02790000000000004 },
              ],
              percentiles: { p75: 1769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8944999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08629999999999999,
                },
                { start: "0.25", density: 0.019199999999999995 },
              ],
              percentiles: { p75: "0.02" },
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
        lcp: 1769,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1657191964001,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4739697564354144 },
                { start: 800, end: 1800, density: 0.4081726884451108 },
                { start: 1800, density: 0.11785755511947488 },
              ],
              percentiles: { p75: 1271 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6331600231080302 },
                { start: 1800, end: 3000, density: 0.21917966493356458 },
                { start: 3000, density: 0.14766031195840515 },
              ],
              percentiles: { p75: 2280 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.949994130766522 },
                { start: 100, end: 300, density: 0.03568493954689518 },
                { start: 300, density: 0.014320929686582889 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7345629047178533 },
                { start: 2500, end: 4000, density: 0.15408186864014797 },
                { start: 4000, density: 0.11135522664199875 },
              ],
              percentiles: { p75: 2626 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9258323765786454,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024225028702640646,
                },
                { start: "0.25", density: 0.049942594718714095 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.463573843105256 },
                { start: 200, end: 500, density: 0.36822473481757684 },
                { start: 500, density: 0.16820142207716707 },
              ],
              percentiles: { p75: 380 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2280,
        lcp: 2626,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191964458,
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
                { start: "0.00", end: "0.10", density: 0.8783 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08619999999999998,
                },
                { start: "0.25", density: 0.03549999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6964392878575719 },
                { start: 200, end: 500, density: 0.20224044808961808 },
                { start: 500, density: 0.10132026405281007 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8500550165049515 },
                { start: 800, end: 1800, density: 0.1314394318295489 },
                { start: 1800, density: 0.018505551665499588 },
              ],
              percentiles: { p75: 677 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9406 },
                { start: 1800, end: 3000, density: 0.0429 },
                { start: 3000, density: 0.01649999999999993 },
              ],
              percentiles: { p75: 1147 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9555733440064036 },
                { start: 100, end: 300, density: 0.017510506303782262 },
                { start: 300, density: 0.026916149689814046 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9487551244875513 },
                { start: 2500, end: 4000, density: 0.037246275372462764 },
                { start: 4000, density: 0.013998600139985983 },
              ],
              percentiles: { p75: 1544 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1147,
        lcp: 1544,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1657191965086,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6389722055588883 },
                { start: 200, end: 500, density: 0.29974005198960213 },
                { start: 500, density: 0.06128774245150957 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.282356471294259 },
                { start: 800, end: 1800, density: 0.5213042608521706 },
                { start: 1800, density: 0.1963392678535703 },
              ],
              percentiles: { p75: 1681 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5128999999999994 },
                { start: 1800, end: 3000, density: 0.31249999999999956 },
                { start: 3000, density: 0.1746000000000011 },
              ],
              percentiles: { p75: 2652 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9795 },
                { start: 100, end: 300, density: 0.016300000000000002 },
                { start: 300, density: 0.0042 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6201740348069612 },
                { start: 2500, end: 4000, density: 0.2376975395079016 },
                { start: 4000, density: 0.14212842568513712 },
              ],
              percentiles: { p75: 3057 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8779 },
                { start: "0.10", end: "0.25", density: 0.0576 },
                { start: "0.25", density: 0.06450000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2652,
        lcp: 3057,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1657191965526,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6075000000000004 },
                { start: 200, end: 500, density: 0.3322000000000003 },
                { start: 500, density: 0.060299999999999486 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7514751475147515 },
                { start: 800, end: 1800, density: 0.20982098209820982 },
                { start: 1800, density: 0.038703870387038514 },
              ],
              percentiles: { p75: 802 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8573714742948593 },
                { start: 1800, end: 3000, density: 0.10272054410882182 },
                { start: 3000, density: 0.03990798159631891 },
              ],
              percentiles: { p75: 1443 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9667933586717344 },
                { start: 100, end: 300, density: 0.02260452090418084 },
                { start: 300, density: 0.010602120424084796 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8834 },
                { start: 2500, end: 4000, density: 0.08569999999999998 },
                { start: 4000, density: 0.03090000000000004 },
              ],
              percentiles: { p75: 1849 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9667 },
                { start: "0.10", end: "0.25", density: 0.0242 },
                { start: "0.25", density: 0.009099999999999997 },
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
        fcp: 1443,
        lcp: 1849,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657191966047,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8801380138013797 },
                { start: 2500, end: 4000, density: 0.08245824582458246 },
                { start: 4000, density: 0.03740374037403779 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9400940094009401,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03540354035403541,
                },
                { start: "0.25", density: 0.02450245024502449 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4914508549145087 },
                { start: 200, end: 500, density: 0.3727627237276273 },
                { start: 500, density: 0.13578642135786395 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7447021191523389 },
                { start: 800, end: 1800, density: 0.21241503398640543 },
                { start: 1800, density: 0.042882846861255715 },
              ],
              percentiles: { p75: 810 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8471152884711531 },
                { start: 1800, end: 3000, density: 0.10488951104889514 },
                { start: 3000, density: 0.047995200479951754 },
              ],
              percentiles: { p75: 1470 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9353870774154832 },
                { start: 100, end: 300, density: 0.034406881376275254 },
                { start: 300, density: 0.030206041208241628 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1470,
        lcp: 1847,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657191966508,
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
                  density: 0.8670994192005467,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09121967885206698,
                },
                { start: "0.25", density: 0.04168090194738641 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5107922062769795 },
                { start: 200, end: 500, density: 0.32971648582429064 },
                { start: 500, density: 0.15949130789873 },
              ],
              percentiles: { p75: 367 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28473177441540537 },
                { start: 800, end: 1800, density: 0.44234296194406175 },
                { start: 1800, density: 0.2729252636405328 },
              ],
              percentiles: { p75: 1902 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47348571428571384 },
                { start: 1800, end: 3000, density: 0.27702857142857124 },
                { start: 3000, density: 0.249485714285715 },
              ],
              percentiles: { p75: 3078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9492914861224968 },
                { start: 100, end: 300, density: 0.03290783464105868 },
                { start: 300, density: 0.01780067923644454 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5527939664038386 },
                { start: 2500, end: 4000, density: 0.25637070049137195 },
                { start: 4000, density: 0.19083533310478942 },
              ],
              percentiles: { p75: 3521 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3078,
        lcp: 3521,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191966968,
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
                { start: 0, end: 2500, density: 0.6981098849495178 },
                { start: 2500, end: 4000, density: 0.1693472646161069 },
                { start: 4000, density: 0.13254285043437547 },
              ],
              percentiles: { p75: 2816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9363213038416763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02118742724097788,
                },
                { start: "0.25", density: 0.0424912689173457 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.552333804809053 },
                { start: 200, end: 500, density: 0.34547383309759594 },
                { start: 500, density: 0.10219236209335102 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42850461826259706 },
                { start: 800, end: 1800, density: 0.4155267157722429 },
                { start: 1800, density: 0.15596866596515999 },
              ],
              percentiles: { p75: 1413 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6072560760831257 },
                { start: 1800, end: 3000, density: 0.21674298461899655 },
                { start: 3000, density: 0.17600093929787777 },
              ],
              percentiles: { p75: 2435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9480735032602253 },
                { start: 100, end: 300, density: 0.033669235328986365 },
                { start: 300, density: 0.01825726141078838 },
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
        lcp: 2816,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191967658,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.281952965235174 },
                { start: 800, end: 1800, density: 0.504729038854806 },
                { start: 1800, density: 0.21331799591002007 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48905670037117593 },
                { start: 1800, end: 3000, density: 0.3193395622680146 },
                { start: 3000, density: 0.19160373736080943 },
              ],
              percentiles: { p75: 2718 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9740277217063652 },
                { start: 100, end: 300, density: 0.020320279908491456 },
                { start: 300, density: 0.005651998385143318 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6243793761935059 },
                { start: 2500, end: 4000, density: 0.24640356460852908 },
                { start: 4000, density: 0.12921705919796495 },
              ],
              percentiles: { p75: 2983 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9425752592967367,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020490766506450795,
                },
                { start: "0.25", density: 0.036933974196812554 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5450546520927753 },
                { start: 200, end: 500, density: 0.38429752066115697 },
                { start: 500, density: 0.07064782724606763 },
              ],
              percentiles: { p75: 297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2718,
        lcp: 2983,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191968320,
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
                  density: 0.9353763302987562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0332093858186947,
                },
                { start: "0.25", density: 0.03141428388254905 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4952342596321652 },
                { start: 200, end: 500, density: 0.4020673915961872 },
                { start: 500, density: 0.10269834877164753 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3063028439661794 },
                { start: 800, end: 1800, density: 0.43991801178580514 },
                { start: 1800, density: 0.2537791442480154 },
              ],
              percentiles: { p75: 1824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46328195829555685 },
                { start: 1800, end: 3000, density: 0.3192591633208129 },
                { start: 3000, density: 0.2174588783836302 },
              ],
              percentiles: { p75: 2834 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571126946423859 },
                { start: 100, end: 300, density: 0.036289258379519664 },
                { start: 300, density: 0.006598046978094472 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5976922079605861 },
                { start: 2500, end: 4000, density: 0.2567094515752626 },
                { start: 4000, density: 0.14559834046415135 },
              ],
              percentiles: { p75: 3197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2834,
        lcp: 3197,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191968960,
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
                { start: 0, end: 2500, density: 0.7344234423442342 },
                { start: 2500, end: 4000, density: 0.15286528652865278 },
                { start: 4000, density: 0.11271127112711313 },
              ],
              percentiles: { p75: 2649 },
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
                  density: 0.05329999999999999,
                },
                { start: "0.25", density: 0.057600000000000005 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5214435669299216 },
                { start: 200, end: 500, density: 0.3263021093671902 },
                { start: 500, density: 0.1522543237028883 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48545145485451424 },
                { start: 800, end: 1800, density: 0.40305969403059666 },
                { start: 1800, density: 0.11148885111488918 },
              ],
              percentiles: { p75: 1251 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.650295088526559 },
                { start: 1800, end: 3000, density: 0.21116334900470177 },
                { start: 3000, density: 0.13854156246873925 },
              ],
              percentiles: { p75: 2235 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554267439536279 },
                { start: 100, end: 300, density: 0.03168099140515691 },
                { start: 300, density: 0.012892264641215286 },
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
        fcp: 2235,
        lcp: 2649,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1657191969689,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9083999999999999 },
                { start: 100, end: 300, density: 0.0447 },
                { start: 300, density: 0.046900000000000136 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6673667366736671 },
                { start: 2500, end: 4000, density: 0.2510251025102509 },
                { start: 4000, density: 0.08160816081608191 },
              ],
              percentiles: { p75: 2920 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8264173582641736,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08069193080691932,
                },
                { start: "0.25", density: 0.09289071092890706 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5299940011997601 },
                { start: 200, end: 500, density: 0.29464107178564297 },
                { start: 500, density: 0.1753649270145968 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.293287986395919 },
                { start: 800, end: 1800, density: 0.4582374712413728 },
                { start: 1800, density: 0.24847454236270813 },
              ],
              percentiles: { p75: 1847 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5224477552244773 },
                { start: 1800, end: 3000, density: 0.3324667533246675 },
                { start: 3000, density: 0.14508549145085511 },
              ],
              percentiles: { p75: 2483 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2483,
        lcp: 2920,
        cls: "0.05",
        fid: 15,
      },
      timestamp: 1657191970119,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7002801120448162 },
                { start: 2500, end: 4000, density: 0.15786314525810283 },
                { start: 4000, density: 0.1418567426970809 },
              ],
              percentiles: { p75: 2852 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9306000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048900000000000006,
                },
                { start: "0.25", density: 0.020499999999999984 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6205620562056209 },
                { start: 200, end: 500, density: 0.2943294329432945 },
                { start: 500, density: 0.08510851085108456 },
              ],
              percentiles: { p75: 264 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6809319068093189 },
                { start: 1800, end: 3000, density: 0.12758724127587237 },
                { start: 3000, density: 0.19148085191480865 },
              ],
              percentiles: { p75: 2468 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2468, lcp: 2852, cls: "0.00" },
      timestamp: 1657191970549,
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
                { start: 0, end: 2500, density: 0.7522743177046892 },
                { start: 2500, end: 4000, density: 0.162151354593622 },
                { start: 4000, density: 0.08557432770168864 },
              ],
              percentiles: { p75: 2510 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9524095180963809,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03339332133573286,
                },
                { start: "0.25", density: 0.014197160567886438 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6295629562956293 },
                { start: 200, end: 500, density: 0.2787278727872787 },
                { start: 500, density: 0.09170917091709208 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4906490649064898 },
                { start: 800, end: 1800, density: 0.36003600360035937 },
                { start: 1800, density: 0.14931493149315092 },
              ],
              percentiles: { p75: 1396 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.666666666666665 },
                { start: 1800, end: 3000, density: 0.19576084783043343 },
                { start: 3000, density: 0.13757248550290171 },
              ],
              percentiles: { p75: 2217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502149355193441 },
                { start: 100, end: 300, density: 0.03319004298710387 },
                { start: 300, density: 0.016595021493551965 },
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
        fcp: 2217,
        lcp: 2510,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191971226,
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
                  density: 0.8697130286971303,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0917908209179082,
                },
                { start: "0.25", density: 0.03849615038496155 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6951695169516953 },
                { start: 200, end: 500, density: 0.25662566256625663 },
                { start: 500, density: 0.04820482048204825 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40430000000000077 },
                { start: 800, end: 1800, density: 0.4280000000000008 },
                { start: 1800, density: 0.16769999999999835 },
              ],
              percentiles: { p75: 1554 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6416925077523261 },
                { start: 1800, end: 3000, density: 0.19155746724017217 },
                { start: 3000, density: 0.16675002500750175 },
              ],
              percentiles: { p75: 2392 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.96111166650005 },
                { start: 100, end: 300, density: 0.032890132960111965 },
                { start: 300, density: 0.005998200539838049 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6749650069986011 },
                { start: 2500, end: 4000, density: 0.17056588682263565 },
                { start: 4000, density: 0.15446910617876336 },
              ],
              percentiles: { p75: 3097 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2392,
        lcp: 3097,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1657191971717,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6135999999999995 },
                { start: 200, end: 500, density: 0.2723999999999997 },
                { start: 500, density: 0.11400000000000067 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5056988602279546 },
                { start: 800, end: 1800, density: 0.37852429514097197 },
                { start: 1800, density: 0.11577684463107336 },
              ],
              percentiles: { p75: 1219 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6887311268873106 },
                { start: 1800, end: 3000, density: 0.19548045195480424 },
                { start: 3000, density: 0.11578842115788521 },
              ],
              percentiles: { p75: 2058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653034696530347 },
                { start: 100, end: 300, density: 0.0277972202779722 },
                { start: 300, density: 0.006899310068993097 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7681963607278539 },
                { start: 2500, end: 4000, density: 0.14152169566086767 },
                { start: 4000, density: 0.09028194361127834 },
              ],
              percentiles: { p75: 2441 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9337933793379338,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03620362036203621,
                },
                { start: "0.25", density: 0.030003000300030024 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2058,
        lcp: 2441,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191972149,
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
                  density: 0.7141000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10849999999999997,
                },
                { start: "0.25", density: 0.17740000000000003 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4865000000000004 },
                { start: 800, end: 1800, density: 0.31160000000000015 },
                { start: 1800, density: 0.2018999999999995 },
              ],
              percentiles: { p75: 1687 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5630126025205044 },
                { start: 1800, end: 3000, density: 0.21164232846569334 },
                { start: 3000, density: 0.2253450690138022 },
              ],
              percentiles: { p75: 2916 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604 },
                { start: 100, end: 300, density: 0.026300000000000004 },
                { start: 300, density: 0.013300000000000018 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122224444888977 },
                { start: 2500, end: 4000, density: 0.20724144828965785 },
                { start: 4000, density: 0.18053610722144442 },
              ],
              percentiles: { p75: 3355 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2916,
        lcp: 3355,
        cls: "0.14",
        fid: 11,
      },
      timestamp: 1657191972578,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561868560568171 },
                { start: 100, end: 300, density: 0.028108432529758934 },
                { start: 300, density: 0.01570471141342403 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5738352329534085 },
                { start: 2500, end: 4000, density: 0.24050189962007568 },
                { start: 4000, density: 0.1856628674265157 },
              ],
              percentiles: { p75: 3499 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8642 },
                { start: "0.10", end: "0.25", density: 0.0959 },
                { start: "0.25", density: 0.039900000000000005 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5749574957495744 },
                { start: 200, end: 500, density: 0.2863286328632861 },
                { start: 500, density: 0.13871387138713953 },
              ],
              percentiles: { p75: 324 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3159947984395324 },
                { start: 800, end: 1800, density: 0.42922876863058984 },
                { start: 1800, density: 0.25477643292987784 },
              ],
              percentiles: { p75: 1855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5090490950904905 },
                { start: 1800, end: 3000, density: 0.25897410258974074 },
                { start: 3000, density: 0.23197680231976892 },
              ],
              percentiles: { p75: 2976 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2976,
        lcp: 3499,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1657191973030,
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
                  density: 0.8754124587541245,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0920907909209079,
                },
                { start: "0.25", density: 0.03249675032496753 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5718571857185718 },
                { start: 200, end: 500, density: 0.3064306430643063 },
                { start: 500, density: 0.12171217121712191 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6132613261326132 },
                { start: 800, end: 1800, density: 0.3427342734273426 },
                { start: 1800, density: 0.04400440044004425 },
              ],
              percentiles: { p75: 1017 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7837216278372163 },
                { start: 1800, end: 3000, density: 0.16278372162783727 },
                { start: 3000, density: 0.05349465053494639 },
              ],
              percentiles: { p75: 1712 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610155937624951 },
                { start: 100, end: 300, density: 0.024390243902439025 },
                { start: 300, density: 0.014594162335065938 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8290670932906705 },
                { start: 2500, end: 4000, density: 0.12383761623837615 },
                { start: 4000, density: 0.04709529047095328 },
              ],
              percentiles: { p75: 2178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1712,
        lcp: 2178,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1657191973542,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7809657102869144 },
                { start: 1800, end: 3000, density: 0.11296611016695003 },
                { start: 3000, density: 0.10606817954613568 },
              ],
              percentiles: { p75: 1637 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.823997199159748 },
                { start: 2500, end: 4000, density: 0.09317795338601584 },
                { start: 4000, density: 0.08282484745423616 },
              ],
              percentiles: { p75: 2137 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9202 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054599999999999996,
                },
                { start: "0.25", density: 0.025200000000000007 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.652765276527653 },
                { start: 800, end: 1800, density: 0.2635263526352636 },
                { start: 1800, density: 0.08370837083708334 },
              ],
              percentiles: { p75: 945 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1637, lcp: 2137, cls: "0.00" },
      timestamp: 1657191973973,
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
                { start: "0.00", end: "0.10", density: 0.8013 },
                { start: "0.10", end: "0.25", density: 0.1552 },
                { start: "0.25", density: 0.04350000000000003 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5843584358435845 },
                { start: 200, end: 500, density: 0.2601260126012601 },
                { start: 500, density: 0.15551555155515548 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5041999999999996 },
                { start: 800, end: 1800, density: 0.4126999999999998 },
                { start: 1800, density: 0.0831000000000005 },
              ],
              percentiles: { p75: 1203 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6989301069893009 },
                { start: 1800, end: 3000, density: 0.2174782521747825 },
                { start: 3000, density: 0.08359164083591661 },
              ],
              percentiles: { p75: 1969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9226154769046189 },
                { start: 100, end: 300, density: 0.03909218156368727 },
                { start: 300, density: 0.03829234153169393 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7388261173882611 },
                { start: 2500, end: 4000, density: 0.1708829117088291 },
                { start: 4000, density: 0.09029097090290979 },
              ],
              percentiles: { p75: 2548 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1969,
        lcp: 2548,
        cls: "0.06",
        fid: 16,
      },
      timestamp: 1657191974399,
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
                { start: 0, end: 100, density: 0.9623150739704118 },
                { start: 100, end: 300, density: 0.02199120351859256 },
                { start: 300, density: 0.015693722510995628 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7693499999999996 },
                { start: 2500, end: 4000, density: 0.13934999999999992 },
                { start: 4000, density: 0.09130000000000044 },
              ],
              percentiles: { p75: 2412 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8263 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11730000000000002,
                },
                { start: "0.25", density: 0.056400000000000027 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6465000000000001 },
                { start: 200, end: 500, density: 0.26620000000000016 },
                { start: 500, density: 0.08729999999999981 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4667466746674667 },
                { start: 800, end: 1800, density: 0.39883988398839876 },
                { start: 1800, density: 0.13441344134413455 },
              ],
              percentiles: { p75: 1364 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6998399679935985 },
                { start: 1800, end: 3000, density: 0.19023804760952184 },
                { start: 3000, density: 0.10992198439687971 },
              ],
              percentiles: { p75: 2024 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2024,
        lcp: 2412,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1657191974842,
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
                { start: "0.00", end: "0.10", density: 0.8544 },
                { start: "0.10", end: "0.25", density: 0.0959 },
                { start: "0.25", density: 0.04970000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6543963188956687 },
                { start: 200, end: 500, density: 0.27638291487446237 },
                { start: 500, density: 0.06922076622986888 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37988994497248596 },
                { start: 800, end: 1800, density: 0.44862431215607784 },
                { start: 1800, density: 0.1714857428714362 },
              ],
              percentiles: { p75: 1535 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6225377462253768 },
                { start: 1800, end: 3000, density: 0.20407959204079576 },
                { start: 3000, density: 0.17338266173382735 },
              ],
              percentiles: { p75: 2371 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596000000000001 },
                { start: 100, end: 300, density: 0.027600000000000006 },
                { start: 300, density: 0.01279999999999998 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7005299470052992 },
                { start: 2500, end: 4000, density: 0.14708529147085286 },
                { start: 4000, density: 0.15238476152384786 },
              ],
              percentiles: { p75: 2815 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: {
        fcp: 2371,
        lcp: 2815,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1657191975309,
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
                { start: 0, end: 2500, density: 0.5402576489533018 },
                { start: 2500, end: 4000, density: 0.2779241692285173 },
                { start: 4000, density: 0.1818181818181809 },
              ],
              percentiles: { p75: 3530 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9454781479878839,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030289917784508867,
                },
                { start: "0.25", density: 0.02423193422760713 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45020808561236586 },
                { start: 200, end: 500, density: 0.35419143876337655 },
                { start: 500, density: 0.19560047562425759 },
              ],
              percentiles: { p75: 402 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26497729603046905 },
                { start: 800, end: 1800, density: 0.32122454958254204 },
                { start: 1800, density: 0.41379815438698897 },
              ],
              percentiles: { p75: 2347 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42231017296980294 },
                { start: 1800, end: 3000, density: 0.2880386983289355 },
                { start: 3000, density: 0.28965112870126153 },
              ],
              percentiles: { p75: 3268 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9055985705777246 },
                { start: 100, end: 300, density: 0.046307325789160206 },
                { start: 300, density: 0.048094103633115205 },
              ],
              percentiles: { p75: 17 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3268,
        lcp: 3530,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1657191975805,
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
                { start: 0, end: 2500, density: 0.7225222522252228 },
                { start: 2500, end: 4000, density: 0.17186718671867185 },
                { start: 4000, density: 0.10561056105610538 },
              ],
              percentiles: { p75: 2669 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8121812181218122,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13641364136413642,
                },
                { start: "0.25", density: 0.0514051405140514 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7255274472552745 },
                { start: 200, end: 500, density: 0.17878212178782119 },
                { start: 500, density: 0.09569043095690434 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4955 },
                { start: 800, end: 1800, density: 0.3802000000000001 },
                { start: 1800, density: 0.1242999999999998 },
              ],
              percentiles: { p75: 1363 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6648329665933177 },
                { start: 1800, end: 3000, density: 0.21814362872574475 },
                { start: 3000, density: 0.11702340468093754 },
              ],
              percentiles: { p75: 2211 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959716113554578 },
                { start: 100, end: 300, density: 0.020491803278688523 },
                { start: 300, density: 0.019792083166733497 },
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
        fcp: 2211,
        lcp: 2669,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1657191976461,
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
                { start: 0, end: 2500, density: 0.7655813453685788 },
                { start: 2500, end: 4000, density: 0.14318719105953137 },
                { start: 4000, density: 0.0912314635718897 },
              ],
              percentiles: { p75: 2426 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8481501340482573,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10230563002680966,
                },
                { start: "0.25", density: 0.049544235924933074 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.626244050194721 },
                { start: 200, end: 500, density: 0.28277801817395065 },
                { start: 500, density: 0.09097793163132846 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46092486795300136 },
                { start: 800, end: 1800, density: 0.4009916999029854 },
                { start: 1800, density: 0.13808343214401333 },
              ],
              percentiles: { p75: 1380 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6915717050096751 },
                { start: 1800, end: 3000, density: 0.19554934422704787 },
                { start: 3000, density: 0.11287895076327713 },
              ],
              percentiles: { p75: 2051 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9601794114429493 },
                { start: 100, end: 300, density: 0.023411005360463845 },
                { start: 300, density: 0.016409583196586846 },
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
        fcp: 2051,
        lcp: 2426,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1657191976892,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.823997199159748 },
                { start: 2500, end: 4000, density: 0.09317795338601584 },
                { start: 4000, density: 0.08282484745423616 },
              ],
              percentiles: { p75: 2127 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9202 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054599999999999996,
                },
                { start: "0.25", density: 0.025200000000000007 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.652765276527653 },
                { start: 800, end: 1800, density: 0.2635263526352636 },
                { start: 1800, density: 0.08370837083708334 },
              ],
              percentiles: { p75: 1019 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7809657102869144 },
                { start: 1800, end: 3000, density: 0.11296611016695003 },
                { start: 3000, density: 0.10606817954613568 },
              ],
              percentiles: { p75: 1699 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1699, lcp: 2127, cls: "0.00" },
      timestamp: 1657191977630,
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
                  density: 0.9520356943669828,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020496374790853325,
                },
                { start: "0.25", density: 0.02746793084216397 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5897435897435898 },
                { start: 200, end: 500, density: 0.347944420570119 },
                { start: 500, density: 0.0623119896862913 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3419784580498876 },
                { start: 800, end: 1800, density: 0.45790816326530737 },
                { start: 1800, density: 0.20011337868480503 },
              ],
              percentiles: { p75: 1657 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5896605155655732 },
                { start: 1800, end: 3000, density: 0.21397379912663772 },
                { start: 3000, density: 0.19636568530778914 },
              ],
              percentiles: { p75: 2600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9474372005227241 },
                { start: 100, end: 300, density: 0.04385073326557283 },
                { start: 300, density: 0.00871206621170321 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6471045197740111 },
                { start: 2500, end: 4000, density: 0.1924435028248587 },
                { start: 4000, density: 0.16045197740113012 },
              ],
              percentiles: { p75: 3140 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2600,
        lcp: 3140,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1657191978284,
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
                { start: "0.00", end: "0.10", density: 0.9141 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06369999999999999,
                },
                { start: "0.25", density: 0.022200000000000004 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7826378789573778 },
                { start: 200, end: 500, density: 0.18100458664280125 },
                { start: 500, density: 0.03635753439982093 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6347305389221556 },
                { start: 800, end: 1800, density: 0.30738522954091824 },
                { start: 1800, density: 0.0578842315369263 },
              ],
              percentiles: { p75: 1038 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8323009864647856 },
                { start: 1800, end: 3000, density: 0.1265198440009177 },
                { start: 3000, density: 0.04117916953429676 },
              ],
              percentiles: { p75: 1426 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8628800917957544 },
                { start: 2500, end: 4000, density: 0.1117613310384395 },
                { start: 4000, density: 0.02535857716580607 },
              ],
              percentiles: { p75: 1803 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1426, lcp: 1803, cls: "0.00" },
      timestamp: 1657191978969,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.tz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39813981398139847 },
                { start: 800, end: 1800, density: 0.3599359935993603 },
                { start: 1800, density: 0.24192419241924126 },
              ],
              percentiles: { p75: 1776 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6049999999999984 },
                { start: 1800, end: 3000, density: 0.17519999999999958 },
                { start: 3000, density: 0.21980000000000197 },
              ],
              percentiles: { p75: 2763 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410941094109411 },
                { start: 100, end: 300, density: 0.0501050105010501 },
                { start: 300, density: 0.008800880088008795 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.617123424684937 },
                { start: 2500, end: 4000, density: 0.19623924784956995 },
                { start: 4000, density: 0.18663732746549314 },
              ],
              percentiles: { p75: 3368 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8207 },
                { start: "0.10", end: "0.25", density: 0.1152 },
                { start: "0.25", density: 0.06409999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6936000000000002 },
                { start: 200, end: 500, density: 0.21750000000000005 },
                { start: 500, density: 0.08889999999999976 },
              ],
              percentiles: { p75: 236 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: {
        fcp: 2763,
        lcp: 3368,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1657191979762,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8224177582241774 },
                { start: 1800, end: 3000, density: 0.10388961103889609 },
                { start: 3000, density: 0.07369263073692646 },
              ],
              percentiles: { p75: 1494 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623999999999999 },
                { start: 100, end: 300, density: 0.019100000000000002 },
                { start: 300, density: 0.01850000000000018 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8530499999999998 },
                { start: 2500, end: 4000, density: 0.09824999999999996 },
                { start: 4000, density: 0.048700000000000354 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9572042795720429,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03259674032596741,
                },
                { start: "0.25", density: 0.010198980101989795 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5750849830033994 },
                { start: 200, end: 500, density: 0.33333333333333337 },
                { start: 500, density: 0.09158168366326726 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6917308269173083 },
                { start: 800, end: 1800, density: 0.24307569243075694 },
                { start: 1800, density: 0.06519348065193466 },
              ],
              percentiles: { p75: 890 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1494,
        lcp: 1952,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1657191980262,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701940388077617 },
                { start: 100, end: 300, density: 0.026105221044208843 },
                { start: 300, density: 0.0037007401480296073 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6895500000000008 },
                { start: 2500, end: 4000, density: 0.18745000000000028 },
                { start: 4000, density: 0.12299999999999886 },
              ],
              percentiles: { p75: 2864 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.915116976604679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05088982203559288,
                },
                { start: "0.25", density: 0.03399320135972808 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6479295859171831 },
                { start: 200, end: 500, density: 0.2793558711742347 },
                { start: 500, density: 0.0727145429085823 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4184418441844181 },
                { start: 800, end: 1800, density: 0.4719471947194715 },
                { start: 1800, density: 0.10961096109611046 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6000200040007985 },
                { start: 1800, end: 3000, density: 0.2511502300460085 },
                { start: 3000, density: 0.14882976595319308 },
              ],
              percentiles: { p75: 2374 },
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
        lcp: 2864,
        cls: "0.02",
        fid: 10,
      },
      timestamp: 1657191980768,
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
                { start: 0, end: 200, density: 0.587272727272727 },
                { start: 200, end: 500, density: 0.27752066115702473 },
                { start: 500, density: 0.1352066115702483 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4156094427493177 },
                { start: 800, end: 1800, density: 0.43279267705154995 },
                { start: 1800, density: 0.1515978801991324 },
              ],
              percentiles: { p75: 1481 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057984943136302 },
                { start: 1800, end: 3000, density: 0.24587538042607682 },
                { start: 3000, density: 0.1483261252602931 },
              ],
              percentiles: { p75: 2410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382797110965199 },
                { start: 100, end: 300, density: 0.03069599474720945 },
                { start: 300, density: 0.031024294156270723 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7099033816425124 },
                { start: 2500, end: 4000, density: 0.17608695652173917 },
                { start: 4000, density: 0.11400966183574836 },
              ],
              percentiles: { p75: 2719 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9408134198449121,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03339135939230891,
                },
                { start: "0.25", density: 0.02579522076277893 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2410,
        lcp: 2719,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1657191981254,
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
                { start: 0, end: 1800, density: 0.8465846584658463 },
                { start: 1800, end: 3000, density: 0.1158115811581158 },
                { start: 3000, density: 0.03760376037603791 },
              ],
              percentiles: { p75: 1504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9524952495249525 },
                { start: 100, end: 300, density: 0.021502150215021498 },
                { start: 300, density: 0.02600260026002604 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8683368336833682 },
                { start: 2500, end: 4000, density: 0.09735973597359732 },
                { start: 4000, density: 0.03430343034303452 },
              ],
              percentiles: { p75: 1969 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9036903690369037,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08190819081908192,
                },
                { start: "0.25", density: 0.01440144014401441 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5958212536239126 },
                { start: 200, end: 500, density: 0.3136059182245325 },
                { start: 500, density: 0.09057282815155485 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5745276417074876 },
                { start: 800, end: 1800, density: 0.3762871138658402 },
                { start: 1800, density: 0.049185244426672166 },
              ],
              percentiles: { p75: 1020 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1504,
        lcp: 1969,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657191982067,
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
                  density: 0.9392731535756155,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03798358733880422,
                },
                { start: "0.25", density: 0.02274325908558032 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8042947779404587 },
                { start: 200, end: 500, density: 0.1588579795021962 },
                { start: 500, density: 0.036847242557345034 },
              ],
              percentiles: { p75: 172 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5462811844252741 },
                { start: 800, end: 1800, density: 0.34250408020517603 },
                { start: 1800, density: 0.11121473536955002 },
              ],
              percentiles: { p75: 1240 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6646877226312038 },
                { start: 1800, end: 3000, density: 0.21633816195677974 },
                { start: 3000, density: 0.11897411541201641 },
              ],
              percentiles: { p75: 2165 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783223374175305 },
                { start: 100, end: 300, density: 0.019164310398994657 },
                { start: 300, density: 0.0025133521834747093 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7547915668423573 },
                { start: 2500, end: 4000, density: 0.16950167704839472 },
                { start: 4000, density: 0.07570675610924794 },
              ],
              percentiles: { p75: 2491 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2165,
        lcp: 2491,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1657191982473,
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
                  density: 0.8480848084808481,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1264126412641264,
                },
                { start: "0.25", density: 0.025502550255025524 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5425457454254575 },
                { start: 200, end: 500, density: 0.34116588341165877 },
                { start: 500, density: 0.11628837116288375 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6203 },
                { start: 800, end: 1800, density: 0.31920000000000004 },
                { start: 1800, density: 0.06050000000000009 },
              ],
              percentiles: { p75: 1043 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7910582116423276 },
                { start: 1800, end: 3000, density: 0.14042808561712325 },
                { start: 3000, density: 0.0685137027405492 },
              ],
              percentiles: { p75: 1677 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9402940294029405 },
                { start: 100, end: 300, density: 0.03610361036103611 },
                { start: 300, density: 0.023602360236023433 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8461000000000003 },
                { start: 2500, end: 4000, density: 0.10220000000000004 },
                { start: 4000, density: 0.051699999999999684 },
              ],
              percentiles: { p75: 2054 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1677,
        lcp: 2054,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1657191983072,
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
                  density: 0.9580041995800419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025697430256974296,
                },
                { start: "0.25", density: 0.016298370162983696 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6201000000000001 },
                { start: 200, end: 500, density: 0.3011 },
                { start: 500, density: 0.07879999999999994 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5702999999999998 },
                { start: 800, end: 1800, density: 0.3746999999999999 },
                { start: 1800, density: 0.05500000000000014 },
              ],
              percentiles: { p75: 1013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8401319736052786 },
                { start: 1800, end: 3000, density: 0.12197560487902417 },
                { start: 3000, density: 0.03789242151569721 },
              ],
              percentiles: { p75: 1535 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.955113465960212 },
                { start: 100, end: 300, density: 0.025892232330300913 },
                { start: 300, density: 0.018994301709487193 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8783891945972986 },
                { start: 2500, end: 4000, density: 0.09139569784892443 },
                { start: 4000, density: 0.03021510755377704 },
              ],
              percentiles: { p75: 1917 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1535,
        lcp: 1917,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191983569,
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
                { start: 0, end: 100, density: 0.9635964912280702 },
                { start: 100, end: 300, density: 0.03172514619883041 },
                { start: 300, density: 0.004678362573099419 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6216719547523789 },
                { start: 2500, end: 4000, density: 0.25858739136432585 },
                { start: 4000, density: 0.1197406538832953 },
              ],
              percentiles: { p75: 3021 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9401066593737181,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019007247367701353,
                },
                { start: "0.25", density: 0.040886093258580634 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5318384361075175 },
                { start: 200, end: 500, density: 0.38091131234727615 },
                { start: 500, density: 0.08725025154520633 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2868520518358529 },
                { start: 800, end: 1800, density: 0.5132289416846649 },
                { start: 1800, density: 0.19991900647948205 },
              ],
              percentiles: { p75: 1673 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48921555158675545 },
                { start: 1800, end: 3000, density: 0.3162522324495118 },
                { start: 3000, density: 0.1945322159637328 },
              ],
              percentiles: { p75: 2729 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2729,
        lcp: 3021,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1657191983977,
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
                { start: 0, end: 200, density: 0.6022806842052613 },
                { start: 200, end: 500, density: 0.31099329798939673 },
                { start: 500, density: 0.08672601780534188 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31936806319368005 },
                { start: 800, end: 1800, density: 0.4458554144585534 },
                { start: 1800, density: 0.23477652234776644 },
              ],
              percentiles: { p75: 1780 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49855014498550015 },
                { start: 1800, end: 3000, density: 0.306269373062693 },
                { start: 3000, density: 0.19518048195180682 },
              ],
              percentiles: { p75: 2728 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663067386522697 },
                { start: 100, end: 300, density: 0.028094381123775252 },
                { start: 300, density: 0.005598880223955194 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6033896610338952 },
                { start: 2500, end: 4000, density: 0.2419258074192576 },
                { start: 4000, density: 0.15468453154684722 },
              ],
              percentiles: { p75: 3235 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9060187962407519,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.061687662467506496,
                },
                { start: "0.25", density: 0.03229354129174173 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2728,
        lcp: 3235,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1657191984580,
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
                { start: "0.00", end: "0.10", density: 0.8045 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13290000000000002,
                },
                { start: "0.25", density: 0.06259999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7606239376062391 },
                { start: 200, end: 500, density: 0.19308069193080682 },
                { start: 500, density: 0.0462953704629539 },
              ],
              percentiles: { p75: 194 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5059999999999999 },
                { start: 800, end: 1800, density: 0.3770999999999998 },
                { start: 1800, density: 0.11690000000000031 },
              ],
              percentiles: { p75: 1285 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7440488097619515 },
                { start: 1800, end: 3000, density: 0.15123024604920962 },
                { start: 3000, density: 0.10472094418883891 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9766953390678136 },
                { start: 100, end: 300, density: 0.014202840568113622 },
                { start: 300, density: 0.0091018203640728 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7912335065973604 },
                { start: 2500, end: 4000, density: 0.12779888044782078 },
                { start: 4000, density: 0.0809676129548189 },
              ],
              percentiles: { p75: 2265 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1825,
        lcp: 2265,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1657191984993,
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
                { start: 0, end: 2500, density: 0.7833412717313636 },
                { start: 2500, end: 4000, density: 0.13390092879256957 },
                { start: 4000, density: 0.08275779947606685 },
              ],
              percentiles: { p75: 2319 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8642356574415012,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09419170922912458,
                },
                { start: "0.25", density: 0.041572633329374095 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7148936170212762 },
                { start: 200, end: 500, density: 0.23185410334346504 },
                { start: 500, density: 0.053252279635258734 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49418534947847964 },
                { start: 800, end: 1800, density: 0.37933101546577125 },
                { start: 1800, density: 0.12648363505574906 },
              ],
              percentiles: { p75: 1324 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7255019120458882 },
                { start: 1800, end: 3000, density: 0.1614483747609941 },
                { start: 3000, density: 0.11304971319311773 },
              ],
              percentiles: { p75: 1938 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9725776965265082 },
                { start: 100, end: 300, density: 0.016819012797074956 },
                { start: 300, density: 0.010603290676416799 },
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
        fcp: 1938,
        lcp: 2319,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1657191985489,
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
                { start: 0, end: 1800, density: 0.633819518558045 },
                { start: 1800, end: 3000, density: 0.21404008063559798 },
                { start: 3000, density: 0.15214040080635696 },
              ],
              percentiles: { p75: 2322 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9392682926829268 },
                { start: 100, end: 300, density: 0.04048780487804878 },
                { start: 300, density: 0.02024390243902443 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7313848707612052 },
                { start: 2500, end: 4000, density: 0.178385107896609 },
                { start: 4000, density: 0.09023002134218594 },
              ],
              percentiles: { p75: 2601 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9691889977570535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01570062566403022,
                },
                { start: "0.25", density: 0.015110376578916316 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5660648092789666 },
                { start: 200, end: 500, density: 0.32799234724381193 },
                { start: 500, density: 0.10594284347722145 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.453319133830315 },
                { start: 800, end: 1800, density: 0.3813749852088502 },
                { start: 1800, density: 0.1653058809608348 },
              ],
              percentiles: { p75: 1468 },
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
        lcp: 2601,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1657191986116,
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
                { start: 0, end: 800, density: 0.7609760976097609 },
                { start: 800, end: 1800, density: 0.23402340234023403 },
                { start: 1800, density: 0.005000500050005 },
              ],
              percentiles: { p75: 803 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9332133573285343 },
                { start: 1800, end: 3000, density: 0.05468906218756249 },
                { start: 3000, density: 0.012097580483903225 },
              ],
              percentiles: { p75: 1243 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9482655203438969 },
                { start: 2500, end: 4000, density: 0.038338498450464845 },
                { start: 4000, density: 0.013395981205638315 },
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
      extractedResults: { fcp: 1243, lcp: 1614 },
      timestamp: 1657191986729,
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
                { start: 0, end: 800, density: 0.44506648005598226 },
                { start: 800, end: 1800, density: 0.4112766170148947 },
                { start: 1800, density: 0.14365690292912306 },
              ],
              percentiles: { p75: 1363 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.629803843074458 },
                { start: 1800, end: 3000, density: 0.20826661329063206 },
                { start: 3000, density: 0.16192954363491002 },
              ],
              percentiles: { p75: 2335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548954895489549 },
                { start: 100, end: 300, density: 0.029502950295029504 },
                { start: 300, density: 0.015601560156015595 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7060969515242372 },
                { start: 2500, end: 4000, density: 0.16446776611694136 },
                { start: 4000, density: 0.12943528235882149 },
              ],
              percentiles: { p75: 2782 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8874887488748876,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06000600060006002,
                },
                { start: "0.25", density: 0.05250525052505244 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6049209841968397 },
                { start: 200, end: 500, density: 0.3028605721144231 },
                { start: 500, density: 0.09221844368873705 },
              ],
              percentiles: { p75: 277 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2335,
        lcp: 2782,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1657191987156,
    },
  ],
};
