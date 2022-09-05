export const audit22 = {
  date: "2022-05-10T14:04:13.682Z",
  dateParsedLocale: "10/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "10/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4877341070957531 },
                { start: 1800, end: 3000, density: 0.3794513321023476 },
                { start: 3000, density: 0.1328145608018992 },
              ],
              percentiles: { p75: 2620 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9202113946893528 },
                { start: 100, end: 300, density: 0.018948182521268366 },
                { start: 300, density: 0.06084042278937885 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6012534273403838 },
                { start: 2500, end: 4000, density: 0.29507768638203413 },
                { start: 4000, density: 0.103668886277582 },
              ],
              percentiles: { p75: 3070 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9467631476935003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025326269543868716,
                },
                { start: "0.25", density: 0.027910582762630823 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4764522173641469 },
                { start: 200, end: 500, density: 0.30893191755152993 },
                { start: 500, density: 0.21461586508432326 },
              ],
              percentiles: { p75: 379 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28864765890661775 },
                { start: 800, end: 1800, density: 0.43212137065132084 },
                { start: 1800, density: 0.2792309704420615 },
              ],
              percentiles: { p75: 1921 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2620,
        lcp: 3070,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190060662,
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
                { start: 0, end: 200, density: 0.5043216835776027 },
                { start: 200, end: 500, density: 0.3625203557559816 },
                { start: 500, density: 0.13315796066641583 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7790637860082305 },
                { start: 800, end: 1800, density: 0.18016975308641978 },
                { start: 1800, density: 0.0407664609053498 },
              ],
              percentiles: { p75: 760 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8573254922014822 },
                { start: 1800, end: 3000, density: 0.0947328049092303 },
                { start: 3000, density: 0.04794170288928738 },
              ],
              percentiles: { p75: 1426 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9376774193548388 },
                { start: 100, end: 300, density: 0.03612903225806452 },
                { start: 300, density: 0.026193548387096758 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8754318618042225 },
                { start: 2500, end: 4000, density: 0.08323736404350604 },
                { start: 4000, density: 0.041330774152271293 },
              ],
              percentiles: { p75: 1804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9299184505606525,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03822629969418961,
                },
                { start: "0.25", density: 0.031855249745157986 },
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
        fcp: 1426,
        lcp: 1804,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190061278,
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
                { start: 0, end: 800, density: 0.43989999999999985 },
                { start: 800, end: 1800, density: 0.47749999999999987 },
                { start: 1800, density: 0.08260000000000028 },
              ],
              percentiles: { p75: 1182 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6777033109932976 },
                { start: 1800, end: 3000, density: 0.2264679403821145 },
                { start: 3000, density: 0.09582874862458786 },
              ],
              percentiles: { p75: 2096 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718056388722256 },
                { start: 100, end: 300, density: 0.019696060787842428 },
                { start: 300, density: 0.008498300339932015 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7371051579368254 },
                { start: 2500, end: 4000, density: 0.14564174330267884 },
                { start: 4000, density: 0.1172530987604958 },
              ],
              percentiles: { p75: 2643 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9387999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04379999999999999,
                },
                { start: "0.25", density: 0.01739999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6969606078784243 },
                { start: 200, end: 500, density: 0.2630473905218957 },
                { start: 500, density: 0.0399920015996801 },
              ],
              percentiles: { p75: 227 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2096,
        lcp: 2643,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190061706,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5338135254101629 },
                { start: 1800, end: 3000, density: 0.2958183273309317 },
                { start: 3000, density: 0.17036814725890545 },
              ],
              percentiles: { p75: 2599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9744025597440255 },
                { start: 100, end: 300, density: 0.019698030196980302 },
                { start: 300, density: 0.005899410058994105 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6422142214221429 },
                { start: 2500, end: 4000, density: 0.2199719971997202 },
                { start: 4000, density: 0.13781378137813702 },
              ],
              percentiles: { p75: 3073 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9128087191280871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0617938206179382,
                },
                { start: "0.25", density: 0.025397460253974588 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6283371662833717 },
                { start: 200, end: 500, density: 0.3017698230176983 },
                { start: 500, density: 0.06989301069892999 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3173317331733169 },
                { start: 800, end: 1800, density: 0.4942494249424936 },
                { start: 1800, density: 0.1884188418841896 },
              ],
              percentiles: { p75: 1623 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2599,
        lcp: 3073,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1652190061933,
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
                { start: 0, end: 2500, density: 0.8709697268028549 },
                { start: 2500, end: 4000, density: 0.09851095249815409 },
                { start: 4000, density: 0.030519320698991083 },
              ],
              percentiles: { p75: 1929 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9781702232033358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013980868285504048,
                },
                { start: "0.25", density: 0.007848908511160164 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.623033505464153 },
                { start: 200, end: 500, density: 0.296865617869581 },
                { start: 500, density: 0.08010087666626585 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5553781925343809 },
                { start: 800, end: 1800, density: 0.3979616895874262 },
                { start: 1800, density: 0.046660117878192714 },
              ],
              percentiles: { p75: 1018 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8400640236394975 },
                { start: 1800, end: 3000, density: 0.12386111795124351 },
                { start: 3000, density: 0.036074858409259024 },
              ],
              percentiles: { p75: 1567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647116685110046 },
                { start: 100, end: 300, density: 0.022009098733554663 },
                { start: 300, density: 0.013279232755440738 },
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
        fcp: 1567,
        lcp: 1929,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190062152,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4316704988503444 },
                { start: 800, end: 1800, density: 0.4170748775367386 },
                { start: 1800, density: 0.15125462361291697 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6416358364163584 },
                { start: 1800, end: 3000, density: 0.20617938206179387 },
                { start: 3000, density: 0.15218478152184778 },
              ],
              percentiles: { p75: 2287 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9081816363272656 },
                { start: 100, end: 300, density: 0.038807761552310464 },
                { start: 300, density: 0.053010602120424126 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6744848969793955 },
                { start: 2500, end: 4000, density: 0.17258451690338067 },
                { start: 4000, density: 0.1529305861172239 },
              ],
              percentiles: { p75: 2995 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8198819881988199,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10051005100510049,
                },
                { start: "0.25", density: 0.07960796079607971 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299370062993699 },
                { start: 200, end: 500, density: 0.21707829217078287 },
                { start: 500, density: 0.15298470152984728 },
              ],
              percentiles: { p75: 297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2287,
        lcp: 2995,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1652190062472,
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
                  density: 0.972838275604286,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012210316471467728,
                },
                { start: "0.25", density: 0.014951407924246185 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6437591063623117 },
                { start: 200, end: 500, density: 0.31301602719766874 },
                { start: 500, density: 0.043224866440019466 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4166666666666664 },
                { start: 800, end: 1800, density: 0.49154228855721366 },
                { start: 1800, density: 0.09179104477611977 },
              ],
              percentiles: { p75: 1192 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6520650813516895 },
                { start: 1800, end: 3000, density: 0.24217772215269084 },
                { start: 3000, density: 0.1057571964956197 },
              ],
              percentiles: { p75: 2122 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618918918918918 },
                { start: 100, end: 300, density: 0.026621621621621617 },
                { start: 300, density: 0.011486486486486487 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7539067383422918 },
                { start: 2500, end: 4000, density: 0.1508313539192397 },
                { start: 4000, density: 0.09526190773846832 },
              ],
              percentiles: { p75: 2514 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2122,
        lcp: 2514,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190062709,
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
                { start: 0, end: 100, density: 0.9657034296570343 },
                { start: 100, end: 300, density: 0.02529747025297471 },
                { start: 300, density: 0.008999100089991005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6852944116764962 },
                { start: 2500, end: 4000, density: 0.18714385684294693 },
                { start: 4000, density: 0.12756173148055702 },
              ],
              percentiles: { p75: 2922 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8182 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11960000000000001,
                },
                { start: "0.25", density: 0.062199999999999984 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7555999999999999 },
                { start: 200, end: 500, density: 0.18280000000000007 },
                { start: 500, density: 0.061599999999999905 },
              ],
              percentiles: { p75: 195 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4019401940194015 },
                { start: 800, end: 1800, density: 0.3916391639163912 },
                { start: 1800, density: 0.20642064206420724 },
              ],
              percentiles: { p75: 1668 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6317999999999987 },
                { start: 1800, end: 3000, density: 0.20779999999999957 },
                { start: 3000, density: 0.16040000000000185 },
              ],
              percentiles: { p75: 2434 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2434,
        lcp: 2922,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652190063036,
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
                { start: 0, end: 2500, density: 0.25142514251425113 },
                { start: 2500, end: 4000, density: 0.3462346234623459 },
                { start: 4000, density: 0.4023402340234029 },
              ],
              percentiles: { p75: 5645 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8595280943811237,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08228354329134173,
                },
                { start: "0.25", density: 0.05818836232753452 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.813043913173952 },
                { start: 200, end: 500, density: 0.1283385015504651 },
                { start: 500, density: 0.05861758527558284 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34196580341965827 },
                { start: 800, end: 1800, density: 0.4518548145185485 },
                { start: 1800, density: 0.2061793820617933 },
              ],
              percentiles: { p75: 1599 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.09600960096009628 },
                { start: 1800, end: 3000, density: 0.3998399839984009 },
                { start: 3000, density: 0.5041504150415028 },
              ],
              percentiles: { p75: 5093 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5093, lcp: 5645, cls: "0.04" },
      timestamp: 1652190063222,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ar" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2555015353121799 },
                { start: 800, end: 1800, density: 0.5333930399181162 },
                { start: 1800, density: 0.2111054247697039 },
              ],
              percentiles: { p75: 1669 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44076992636610285 },
                { start: 1800, end: 3000, density: 0.3145588425268055 },
                { start: 3000, density: 0.24467123110709169 },
              ],
              percentiles: { p75: 2988 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540229885057472 },
                { start: 100, end: 300, density: 0.03407707910750508 },
                { start: 300, density: 0.011899932386747759 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5654133402008751 },
                { start: 2500, end: 4000, density: 0.28019572495493156 },
                { start: 4000, density: 0.15439093484419344 },
              ],
              percentiles: { p75: 3337 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9258787570045848,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025980641874681614,
                },
                { start: "0.25", density: 0.048140601120733616 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5437500000000001 },
                { start: 200, end: 500, density: 0.35507812500000013 },
                { start: 500, density: 0.10117187499999965 },
              ],
              percentiles: { p75: 291 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2988,
        lcp: 3337,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190063537,
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
                { start: 0, end: 100, density: 0.938027136046938 },
                { start: 100, end: 300, density: 0.04339322821171006 },
                { start: 300, density: 0.018579635741351967 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6849840632747022 },
                { start: 2500, end: 4000, density: 0.2103057490260891 },
                { start: 4000, density: 0.1047101876992088 },
              ],
              percentiles: { p75: 2828 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9673340358271864,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017094017094017092,
                },
                { start: "0.25", density: 0.015571947078796397 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.606320488721805 },
                { start: 200, end: 500, density: 0.27960526315789497 },
                { start: 500, density: 0.11407424812030002 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4088820826952524 },
                { start: 800, end: 1800, density: 0.39462834256096097 },
                { start: 1800, density: 0.1964895747437867 },
              ],
              percentiles: { p75: 1601 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5851790763430721 },
                { start: 1800, end: 3000, density: 0.24835061262959462 },
                { start: 3000, density: 0.16647031102733312 },
              ],
              percentiles: { p75: 2525 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2525,
        lcp: 2828,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190063832,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7758327498249477 },
                { start: 1800, end: 3000, density: 0.1349404821446434 },
                { start: 3000, density: 0.08922676803040885 },
              ],
              percentiles: { p75: 1718 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706941388277656 },
                { start: 100, end: 300, density: 0.023604720944188837 },
                { start: 300, density: 0.005701140228045609 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8174730107956812 },
                { start: 2500, end: 4000, density: 0.10795681727309064 },
                { start: 4000, density: 0.0745701719312281 },
              ],
              percentiles: { p75: 2099 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7926792679267927,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13861386138613863,
                },
                { start: "0.25", density: 0.06870687068706867 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7774332299689906 },
                { start: 200, end: 500, density: 0.1779533860158047 },
                { start: 500, density: 0.04461338401520474 },
              ],
              percentiles: { p75: 186 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5232953409318132 },
                { start: 800, end: 1800, density: 0.37542491501699626 },
                { start: 1800, density: 0.10127974405119053 },
              ],
              percentiles: { p75: 1191 },
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
        lcp: 2099,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1652190064154,
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
                { start: 0, end: 100, density: 0.9063719115734717 },
                { start: 100, end: 300, density: 0.059317795338601556 },
                { start: 300, density: 0.03431029308792674 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5082516503300697 },
                { start: 2500, end: 4000, density: 0.23839767953590893 },
                { start: 4000, density: 0.25335067013402135 },
              ],
              percentiles: { p75: 4095 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8662133786621338,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0963903609639036,
                },
                { start: "0.25", density: 0.0373962603739626 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4825482548254827 },
                { start: 200, end: 500, density: 0.2926292629262927 },
                { start: 500, density: 0.22482248224822463 },
              ],
              percentiles: { p75: 448 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3834150245073518 },
                { start: 800, end: 1800, density: 0.39111733520055963 },
                { start: 1800, density: 0.2254676402920885 },
              ],
              percentiles: { p75: 1736 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4672869147659075 },
                { start: 1800, end: 3000, density: 0.24329731892757156 },
                { start: 3000, density: 0.28941576630652094 },
              ],
              percentiles: { p75: 3317 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3317,
        lcp: 4095,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1652190064384,
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
                { start: 0, end: 1800, density: 0.09600960096009628 },
                { start: 1800, end: 3000, density: 0.3998399839984009 },
                { start: 3000, density: 0.5041504150415028 },
              ],
              percentiles: { p75: 5080 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.25142514251425113 },
                { start: 2500, end: 4000, density: 0.3462346234623459 },
                { start: 4000, density: 0.4023402340234029 },
              ],
              percentiles: { p75: 5645 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8595280943811237,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08228354329134173,
                },
                { start: "0.25", density: 0.05818836232753452 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.813043913173952 },
                { start: 200, end: 500, density: 0.1283385015504651 },
                { start: 500, density: 0.05861758527558284 },
              ],
              percentiles: { p75: 155 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34196580341965827 },
                { start: 800, end: 1800, density: 0.4518548145185485 },
                { start: 1800, density: 0.2061793820617933 },
              ],
              percentiles: { p75: 1599 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5080, lcp: 5645, cls: "0.04" },
      timestamp: 1652190064651,
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
                  density: 0.8886293792255685,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08125384142593729,
                },
                { start: "0.25", density: 0.03011677934849414 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47731153939985305 },
                { start: 200, end: 500, density: 0.3632593315442786 },
                { start: 500, density: 0.1594291290558684 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8219521363237688 },
                { start: 800, end: 1800, density: 0.1533642400701666 },
                { start: 1800, density: 0.02468362360606445 },
              ],
              percentiles: { p75: 719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9054874272265577 },
                { start: 1800, end: 3000, density: 0.07308311656137745 },
                { start: 3000, density: 0.021429456212064837 },
              ],
              percentiles: { p75: 1249 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517935808684707 },
                { start: 100, end: 300, density: 0.02391441157960982 },
                { start: 300, density: 0.024292007551919473 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9043644906033632 },
                { start: 2500, end: 4000, density: 0.07572947576656773 },
                { start: 4000, density: 0.019906033630069153 },
              ],
              percentiles: { p75: 1806 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1249,
        lcp: 1806,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652190064846,
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
                { start: 0, end: 100, density: 0.982898289828983 },
                { start: 100, end: 300, density: 0.014301430143014304 },
                { start: 300, density: 0.0028002800280028006 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7363972794558913 },
                { start: 2500, end: 4000, density: 0.18878775755151028 },
                { start: 4000, density: 0.0748149629925984 },
              ],
              percentiles: { p75: 2722 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7406999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.186 },
                { start: "0.25", density: 0.07330000000000003 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8269000000000001 },
                { start: 200, end: 500, density: 0.14170000000000002 },
                { start: 500, density: 0.03140000000000003 },
              ],
              percentiles: { p75: 155 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3679 },
                { start: 800, end: 1800, density: 0.4817 },
                { start: 1800, density: 0.15039999999999998 },
              ],
              percentiles: { p75: 1517 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6619999999999998 },
                { start: 1800, end: 3000, density: 0.24320000000000003 },
                { start: 3000, density: 0.0948000000000002 },
              ],
              percentiles: { p75: 2297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2297, lcp: 2722, cls: "0.11", fid: 8 },
      timestamp: 1652190065134,
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
                { start: 0, end: 2500, density: 0.7448010397920427 },
                { start: 2500, end: 4000, density: 0.1705158968206361 },
                { start: 4000, density: 0.08468306338732108 },
              ],
              percentiles: { p75: 2667 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.773022697730227,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1653834616538346,
                },
                { start: "0.25", density: 0.061593840615938394 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7815781578157817 },
                { start: 200, end: 500, density: 0.15591559155915596 },
                { start: 500, density: 0.06250625062506236 },
              ],
              percentiles: { p75: 192 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5162 },
                { start: 800, end: 1800, density: 0.4044 },
                { start: 1800, density: 0.07940000000000004 },
              ],
              percentiles: { p75: 1246 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7281902668132324 },
                { start: 1800, end: 3000, density: 0.1880683521534929 },
                { start: 3000, density: 0.08374138103327473 },
              ],
              percentiles: { p75: 2026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696060787842431 },
                { start: 100, end: 300, density: 0.017196560687862423 },
                { start: 300, density: 0.013197360527894409 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2026, lcp: 2667, cls: "0.07", fid: 9 },
      timestamp: 1652190065328,
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
                { start: 0, end: 200, density: 0.549314760727926 },
                { start: 200, end: 500, density: 0.3329588856436753 },
                { start: 500, density: 0.11772635362839863 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6743626217310427 },
                { start: 800, end: 1800, density: 0.2789145420724368 },
                { start: 1800, density: 0.046722836196520554 },
              ],
              percentiles: { p75: 920 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8129281767955798 },
                { start: 1800, end: 3000, density: 0.13591160220994472 },
                { start: 3000, density: 0.05116022099447548 },
              ],
              percentiles: { p75: 1616 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9383640552995391 },
                { start: 100, end: 300, density: 0.03824884792626728 },
                { start: 300, density: 0.02338709677419354 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.849039849039849 },
                { start: 2500, end: 4000, density: 0.10744810744810739 },
                { start: 4000, density: 0.04351204351204365 },
              ],
              percentiles: { p75: 2028 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8825410830484173,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10565788022499173,
                },
                { start: "0.25", density: 0.011801036726590924 },
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
        fcp: 1616,
        lcp: 2028,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190065517,
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
                  density: 0.773022697730227,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1653834616538346,
                },
                { start: "0.25", density: 0.061593840615938394 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7815781578157817 },
                { start: 200, end: 500, density: 0.15591559155915596 },
                { start: 500, density: 0.06250625062506236 },
              ],
              percentiles: { p75: 192 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5162 },
                { start: 800, end: 1800, density: 0.4044 },
                { start: 1800, density: 0.07940000000000004 },
              ],
              percentiles: { p75: 1246 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7281902668132324 },
                { start: 1800, end: 3000, density: 0.1880683521534929 },
                { start: 3000, density: 0.08374138103327473 },
              ],
              percentiles: { p75: 2026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696060787842431 },
                { start: 100, end: 300, density: 0.017196560687862423 },
                { start: 300, density: 0.013197360527894409 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7448010397920427 },
                { start: 2500, end: 4000, density: 0.1705158968206361 },
                { start: 4000, density: 0.08468306338732108 },
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
      extractedResults: { fcp: 2026, lcp: 2667, cls: "0.07", fid: 9 },
      timestamp: 1652190065809,
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
                  density: 0.8694130586941305,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0998900109989001,
                },
                { start: "0.25", density: 0.030696930306969298 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7833433313337335 },
                { start: 200, end: 500, density: 0.16396720655868824 },
                { start: 500, density: 0.05268946210757836 },
              ],
              percentiles: { p75: 169 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6473352664733527 },
                { start: 800, end: 1800, density: 0.3109689031096891 },
                { start: 1800, density: 0.041695830416958145 },
              ],
              percentiles: { p75: 975 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8429314137172568 },
                { start: 1800, end: 3000, density: 0.10967806438712259 },
                { start: 3000, density: 0.04739052189562062 },
              ],
              percentiles: { p75: 1390 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.871862813718628 },
                { start: 2500, end: 4000, density: 0.09184081591840816 },
                { start: 4000, density: 0.03629637036296382 },
              ],
              percentiles: { p75: 1740 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1390, lcp: 1740, cls: "0.04" },
      timestamp: 1652190066001,
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
                { start: 0, end: 2500, density: 0.8510148985101492 },
                { start: 2500, end: 4000, density: 0.11698830116988304 },
                { start: 4000, density: 0.03199680031996767 },
              ],
              percentiles: { p75: 2069 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9393 },
                { start: "0.10", end: "0.25", density: 0.0491 },
                { start: "0.25", density: 0.011600000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6145229045809163 },
                { start: 200, end: 500, density: 0.29675935187037417 },
                { start: 500, density: 0.08871774354870968 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6075784843031394 },
                { start: 800, end: 1800, density: 0.35572885422915423 },
                { start: 1800, density: 0.036692661467706424 },
              ],
              percentiles: { p75: 1010 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8362999999999998 },
                { start: 1800, end: 3000, density: 0.13210000000000002 },
                { start: 3000, density: 0.03160000000000007 },
              ],
              percentiles: { p75: 1537 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9732946589317863 },
                { start: 100, end: 300, density: 0.017203440688137624 },
                { start: 300, density: 0.009501900380076032 },
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
        fcp: 1537,
        lcp: 2069,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190066274,
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
                { start: 0, end: 1800, density: 0.776877687768777 },
                { start: 1800, end: 3000, density: 0.17651765176517656 },
                { start: 3000, density: 0.04660466046604658 },
              ],
              percentiles: { p75: 1724 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.983003399320136 },
                { start: 100, end: 300, density: 0.012997400519896021 },
                { start: 300, density: 0.003999200159968006 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8139372125574885 },
                { start: 2500, end: 4000, density: 0.12507498500299938 },
                { start: 4000, density: 0.06098780243951209 },
              ],
              percentiles: { p75: 2204 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9417941794179419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0371037103710371,
                },
                { start: "0.25", density: 0.0211021102110211 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8855656697009104 },
                { start: 200, end: 500, density: 0.09282784835450635 },
                { start: 500, density: 0.021606481944583388 },
              ],
              percentiles: { p75: 121 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6047395260473953 },
                { start: 800, end: 1800, density: 0.3416658334166583 },
                { start: 1800, density: 0.05359464053594644 },
              ],
              percentiles: { p75: 1041 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1724, lcp: 2204, cls: "0.01", fid: 8 },
      timestamp: 1652190066567,
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
                  density: 0.9378893041466452,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035059619149314825,
                },
                { start: "0.25", density: 0.027051076704039865 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5740740740740744 },
                { start: 200, end: 500, density: 0.29544682296975877 },
                { start: 500, density: 0.1304791029561669 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7052534562211982 },
                { start: 800, end: 1800, density: 0.2691244239631336 },
                { start: 1800, density: 0.025622119815668264 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8749773837524879 },
                { start: 1800, end: 3000, density: 0.08847476026777637 },
                { start: 3000, density: 0.03654785597973581 },
              ],
              percentiles: { p75: 1435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9305251641137856 },
                { start: 100, end: 300, density: 0.03063457330415756 },
                { start: 300, density: 0.038840262582056875 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8656783468104223 },
                { start: 2500, end: 4000, density: 0.09119496855345907 },
                { start: 4000, density: 0.04312668463611855 },
              ],
              percentiles: { p75: 1990 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1435,
        lcp: 1990,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190066808,
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
                { start: "0.00", end: "0.10", density: 0.7497 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11810000000000001,
                },
                { start: "0.25", density: 0.1322000000000001 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6885 },
                { start: 200, end: 500, density: 0.2604 },
                { start: 500, density: 0.051099999999999965 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5370462953704639 },
                { start: 800, end: 1800, density: 0.25697430256974346 },
                { start: 1800, density: 0.20597940205979262 },
              ],
              percentiles: { p75: 1457 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6224622462246227 },
                { start: 1800, end: 3000, density: 0.14841484148414844 },
                { start: 3000, density: 0.22912291229122886 },
              ],
              percentiles: { p75: 2665 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651000000000001 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.003 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6476000000000005 },
                { start: 2500, end: 4000, density: 0.1661000000000001 },
                { start: 4000, density: 0.18629999999999927 },
              ],
              percentiles: { p75: 3162 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2665,
        lcp: 3162,
        cls: "0.11",
        fid: 11,
      },
      timestamp: 1652190067146,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4045358060551893 },
                { start: 800, end: 1800, density: 0.3853200759691654 },
                { start: 1800, density: 0.2101441179756453 },
              ],
              percentiles: { p75: 1723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5227527460210709 },
                { start: 1800, end: 3000, density: 0.3544048419636849 },
                { start: 3000, density: 0.1228424120152441 },
              ],
              percentiles: { p75: 2426 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9265204612254123 },
                { start: 100, end: 300, density: 0.052566131584897105 },
                { start: 300, density: 0.02091340718969057 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6054257470231401 },
                { start: 2500, end: 4000, density: 0.2941473826106489 },
                { start: 4000, density: 0.1004268703662111 },
              ],
              percentiles: { p75: 3058 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9766998991822562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01153803069340204,
                },
                { start: "0.25", density: 0.01176207012434189 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5708058567117468 },
                { start: 200, end: 500, density: 0.33229015312395216 },
                { start: 500, density: 0.0969039901643011 },
              ],
              percentiles: { p75: 293 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2426,
        lcp: 3058,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190067349,
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
                { start: 0, end: 2500, density: 0.6476000000000005 },
                { start: 2500, end: 4000, density: 0.1661000000000001 },
                { start: 4000, density: 0.18629999999999927 },
              ],
              percentiles: { p75: 3162 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7497 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11810000000000001,
                },
                { start: "0.25", density: 0.1322000000000001 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6885 },
                { start: 200, end: 500, density: 0.2604 },
                { start: 500, density: 0.051099999999999965 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5370462953704639 },
                { start: 800, end: 1800, density: 0.25697430256974346 },
                { start: 1800, density: 0.20597940205979262 },
              ],
              percentiles: { p75: 1457 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6224622462246227 },
                { start: 1800, end: 3000, density: 0.14841484148414844 },
                { start: 3000, density: 0.22912291229122886 },
              ],
              percentiles: { p75: 2665 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651000000000001 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.003 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2665,
        lcp: 3162,
        cls: "0.11",
        fid: 11,
      },
      timestamp: 1652190067684,
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
                { start: 0, end: 2500, density: 0.8486582067817768 },
                { start: 2500, end: 4000, density: 0.11327231121281466 },
                { start: 4000, density: 0.038069482005408564 },
              ],
              percentiles: { p75: 2063 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9653838322133985,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017918957442476072,
                },
                { start: "0.25", density: 0.016697210344125434 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5212884116993706 },
                { start: 200, end: 500, density: 0.3259903739355794 },
                { start: 500, density: 0.15272121436504993 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6645307978503514 },
                { start: 800, end: 1800, density: 0.29661016949152547 },
                { start: 1800, density: 0.03885903265812308 },
              ],
              percentiles: { p75: 939 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8575285565939773 },
                { start: 1800, end: 3000, density: 0.10882658359293879 },
                { start: 3000, density: 0.03364485981308395 },
              ],
              percentiles: { p75: 1492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9322001888574127 },
                { start: 100, end: 300, density: 0.033616619452313506 },
                { start: 300, density: 0.03418319169027385 },
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
        fcp: 1492,
        lcp: 2063,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190067891,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.ke" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5309759388351686 },
                { start: 2500, end: 4000, density: 0.24898808185293403 },
                { start: 4000, density: 0.22003597931189725 },
              ],
              percentiles: { p75: 3770 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8479722159982075,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09713197400851446,
                },
                { start: "0.25", density: 0.05489580999327808 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5714607500844691 },
                { start: 200, end: 500, density: 0.3112963171528326 },
                { start: 500, density: 0.11724293276269825 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2525309336332957 },
                { start: 800, end: 1800, density: 0.44184476940382417 },
                { start: 1800, density: 0.30562429696288 },
              ],
              percentiles: { p75: 1988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47990091205945273 },
                { start: 1800, end: 3000, density: 0.2565026460984124 },
                { start: 3000, density: 0.263596441842135 },
              ],
              percentiles: { p75: 3154 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9448828034346716 },
                { start: 100, end: 300, density: 0.04038059874680901 },
                { start: 300, density: 0.014736597818519399 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3154,
        lcp: 3770,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1652190068229,
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
                  density: 0.9359177215189873,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04845727848101265,
                },
                { start: "0.25", density: 0.015625 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5171258376768422 },
                { start: 200, end: 500, density: 0.3183172002978402 },
                { start: 500, density: 0.16455696202531767 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5872435506804794 },
                { start: 800, end: 1800, density: 0.3743652244566322 },
                { start: 1800, density: 0.03839122486288845 },
              ],
              percentiles: { p75: 971 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8587639311043562 },
                { start: 1800, end: 3000, density: 0.10030395136778114 },
                { start: 3000, density: 0.0409321175278625 },
              ],
              percentiles: { p75: 1491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9415835538367596 },
                { start: 100, end: 300, density: 0.040504783228170166 },
                { start: 300, density: 0.017911662935070193 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8826551168412571 },
                { start: 2500, end: 4000, density: 0.08591861402095086 },
                { start: 4000, density: 0.031426269137792034 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1491,
        lcp: 1962,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190068624,
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
                  density: 0.907990799079908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06390639063906389,
                },
                { start: "0.25", density: 0.028102810281028085 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6707341468293659 },
                { start: 200, end: 500, density: 0.25805161032206453 },
                { start: 500, density: 0.0712142428485694 },
              ],
              percentiles: { p75: 227 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5024497550244974 },
                { start: 800, end: 1800, density: 0.2876712328767122 },
                { start: 1800, density: 0.20987901209879042 },
              ],
              percentiles: { p75: 1546 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6422715456908591 },
                { start: 1800, end: 3000, density: 0.1457708458308332 },
                { start: 3000, density: 0.21195760847830764 },
              ],
              percentiles: { p75: 2584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639036096390361 },
                { start: 100, end: 300, density: 0.022297770222977704 },
                { start: 300, density: 0.01379862013798618 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6637172565486884 },
                { start: 2500, end: 4000, density: 0.16961607678464266 },
                { start: 4000, density: 0.16666666666666907 },
              ],
              percentiles: { p75: 3032 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2584,
        lcp: 3032,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652190068978,
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
                  density: 0.9415134157371118,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03210732589689478,
                },
                { start: "0.25", density: 0.026379258365993422 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48310199155099526 },
                { start: 200, end: 500, density: 0.33117079058539484 },
                { start: 500, density: 0.18572721786360982 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2483930211202935 },
                { start: 800, end: 1800, density: 0.3754208754208748 },
                { start: 1800, density: 0.3761861034588317 },
              ],
              percentiles: { p75: 2153 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41892725030826045 },
                { start: 1800, end: 3000, density: 0.3249075215782977 },
                { start: 3000, density: 0.2561652281134418 },
              ],
              percentiles: { p75: 3058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9142544202785168 },
                { start: 100, end: 300, density: 0.046784540760444394 },
                { start: 300, density: 0.03896103896103879 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.533256704980842 },
                { start: 2500, end: 4000, density: 0.2883524904214555 },
                { start: 4000, density: 0.1783908045977026 },
              ],
              percentiles: { p75: 3461 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3058,
        lcp: 3461,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1652190069249,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8020999999999997 },
                { start: 200, end: 500, density: 0.13349999999999998 },
                { start: 500, density: 0.06440000000000025 },
              ],
              percentiles: { p75: 171 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6171234246849369 },
                { start: 800, end: 1800, density: 0.291758351670334 },
                { start: 1800, density: 0.09111822364472916 },
              ],
              percentiles: { p75: 1110 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7587311117782448 },
                { start: 1800, end: 3000, density: 0.15200640448313818 },
                { start: 3000, density: 0.08926248373861685 },
              ],
              percentiles: { p75: 1791 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757975797579759 },
                { start: 100, end: 300, density: 0.017101710171017102 },
                { start: 300, density: 0.007100710071007099 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7780334100230071 },
                { start: 2500, end: 4000, density: 0.13794138241472445 },
                { start: 4000, density: 0.0840252075622684 },
              ],
              percentiles: { p75: 2352 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8203640728145628,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14662932586517302,
                },
                { start: "0.25", density: 0.033006601320264034 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1791,
        lcp: 2352,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1652190069651,
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
                { start: 0, end: 800, density: 0.21978183962264106 },
                { start: 800, end: 1800, density: 0.5840212264150932 },
                { start: 1800, density: 0.19619693396226578 },
              ],
              percentiles: { p75: 1656 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4240985309393086 },
                { start: 1800, end: 3000, density: 0.3705297521887521 },
                { start: 3000, density: 0.20537171687193925 },
              ],
              percentiles: { p75: 2829 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668721109399075 },
                { start: 100, end: 300, density: 0.026194144838212634 },
                { start: 300, density: 0.006933744221879812 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5822304832713755 },
                { start: 2500, end: 4000, density: 0.2837918215613382 },
                { start: 4000, density: 0.13397769516728641 },
              ],
              percentiles: { p75: 3163 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9406952965235175,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024247735904177625,
                },
                { start: "0.25", density: 0.03505696757230502 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6018012697475272 },
                { start: 200, end: 500, density: 0.3355972242728484 },
                { start: 500, density: 0.06260150597962426 },
              ],
              percentiles: { p75: 244 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2829,
        lcp: 3163,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190069925,
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
                { start: "0.00", end: "0.10", density: 0.8379 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10880000000000001,
                },
                { start: "0.25", density: 0.05330000000000003 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6100000000000001 },
                { start: 200, end: 500, density: 0.28200000000000003 },
                { start: 500, density: 0.10799999999999998 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27944411117776424 },
                { start: 800, end: 1800, density: 0.43651269746050747 },
                { start: 1800, density: 0.28404319136172834 },
              ],
              percentiles: { p75: 1939 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5149485051494842 },
                { start: 1800, end: 3000, density: 0.24217578242175736 },
                { start: 3000, density: 0.24287571242875827 },
              ],
              percentiles: { p75: 3022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9524952495249525 },
                { start: 100, end: 300, density: 0.03480348034803481 },
                { start: 300, density: 0.01270127012701272 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5554610922184432 },
                { start: 2500, end: 4000, density: 0.2375975195039005 },
                { start: 4000, density: 0.2069413882776563 },
              ],
              percentiles: { p75: 3688 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3022,
        lcp: 3688,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1652190070259,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6875 },
                { start: 800, end: 1800, density: 0.27130000000000004 },
                { start: 1800, density: 0.0411999999999999 },
              ],
              percentiles: { p75: 949 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8091572528241527 },
                { start: 1800, end: 3000, density: 0.13655903229031294 },
                { start: 3000, density: 0.05428371488553429 },
              ],
              percentiles: { p75: 1700 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.834700410123037 },
                { start: 2500, end: 4000, density: 0.10868260478143443 },
                { start: 4000, density: 0.056616985095528614 },
              ],
              percentiles: { p75: 2136 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1700, lcp: 2136 },
      timestamp: 1652190070528,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27995599119824083 },
                { start: 800, end: 1800, density: 0.39227845569113995 },
                { start: 1800, density: 0.3277655531106193 },
              ],
              percentiles: { p75: 2029 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4959999999999993 },
                { start: 1800, end: 3000, density: 0.29089999999999977 },
                { start: 3000, density: 0.21310000000000098 },
              ],
              percentiles: { p75: 2800 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9364127174565087 },
                { start: 100, end: 300, density: 0.033593281343731254 },
                { start: 300, density: 0.029994001199759993 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5789078907890783 },
                { start: 2500, end: 4000, density: 0.2578757875787576 },
                { start: 4000, density: 0.16321632163216404 },
              ],
              percentiles: { p75: 3315 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7902419516096779,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12407518496300737,
                },
                { start: "0.25", density: 0.08568286342731468 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6188381161883814 },
                { start: 200, end: 500, density: 0.2427757224277573 },
                { start: 500, density: 0.13838616138386134 },
              ],
              percentiles: { p75: 288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2800,
        lcp: 3315,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1652190070782,
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
                { start: 0, end: 800, density: 0.3847517730496453 },
                { start: 800, end: 1800, density: 0.3783983451536643 },
                { start: 1800, density: 0.23684988179669053 },
              ],
              percentiles: { p75: 1762 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5860589018795312 },
                { start: 1800, end: 3000, density: 0.21577623205564564 },
                { start: 3000, density: 0.19816486606482306 },
              ],
              percentiles: { p75: 2699 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9498590713543984 },
                { start: 100, end: 300, density: 0.037531523512831934 },
                { start: 300, density: 0.012609405132769626 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6561577082102782 },
                { start: 2500, end: 4000, density: 0.20444477259303023 },
                { start: 4000, density: 0.13939751919669147 },
              ],
              percentiles: { p75: 3018 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9554065870008743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023608277470125328,
                },
                { start: "0.25", density: 0.02098513552900029 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6701328711727327 },
                { start: 200, end: 500, density: 0.24783362218370888 },
                { start: 500, density: 0.08203350664355849 },
              ],
              percentiles: { p75: 233 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2699,
        lcp: 3018,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190071020,
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
                { start: 0, end: 1800, density: 0.9459054094590541 },
                { start: 1800, end: 3000, density: 0.0394960503949605 },
                { start: 3000, density: 0.014598540145985368 },
              ],
              percentiles: { p75: 1129 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646070785842831 },
                { start: 100, end: 300, density: 0.018396320735852827 },
                { start: 300, density: 0.01699660067986395 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9397439743974398 },
                { start: 2500, end: 4000, density: 0.046054605460546044 },
                { start: 4000, density: 0.014201420142014148 },
              ],
              percentiles: { p75: 1576 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8175 },
                { start: "0.10", end: "0.25", density: 0.1369 },
                { start: "0.25", density: 0.04559999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7388738873887393 },
                { start: 200, end: 500, density: 0.17571757175717576 },
                { start: 500, density: 0.0854085408540851 },
              ],
              percentiles: { p75: 208 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8493 },
                { start: 800, end: 1800, density: 0.13720000000000002 },
                { start: 1800, density: 0.013500000000000022 },
              ],
              percentiles: { p75: 676 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1129,
        lcp: 1576,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652190071388,
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
                  density: 0.9234693877551021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054779806659505915,
                },
                { start: "0.25", density: 0.021750805585392056 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45968379446640245 },
                { start: 200, end: 500, density: 0.3698287220026344 },
                { start: 500, density: 0.17048748353096324 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5814330049925777 },
                { start: 800, end: 1800, density: 0.31655647011199517 },
                { start: 1800, density: 0.10201052489542704 },
              ],
              percentiles: { p75: 1123 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7076569264069255 },
                { start: 1800, end: 3000, density: 0.1800595238095236 },
                { start: 3000, density: 0.11228354978355089 },
              ],
              percentiles: { p75: 1995 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382900638847356 },
                { start: 100, end: 300, density: 0.038466766344977574 },
                { start: 300, density: 0.023243169770286776 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7656166577682855 },
                { start: 2500, end: 4000, density: 0.1461558996262679 },
                { start: 4000, density: 0.08822744260544657 },
              ],
              percentiles: { p75: 2447 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1995,
        lcp: 2447,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190071597,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9016601727934949 },
                { start: 2500, end: 4000, density: 0.0703879383364391 },
                { start: 4000, density: 0.027951888870066013 },
              ],
              percentiles: { p75: 1918 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9642857142857143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026659959758551306,
                },
                { start: "0.25", density: 0.009054325955734403 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5566510425084856 },
                { start: 200, end: 500, density: 0.3227735574591888 },
                { start: 500, density: 0.1205754000323255 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7021563342318059 },
                { start: 800, end: 1800, density: 0.26044474393531003 },
                { start: 1800, density: 0.037398921832884076 },
              ],
              percentiles: { p75: 877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837328767123287 },
                { start: 1800, end: 3000, density: 0.08989726027397262 },
                { start: 3000, density: 0.026369863013698695 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9670135826424414 },
                { start: 100, end: 300, density: 0.019050979008643505 },
                { start: 300, density: 0.013935438348915157 },
              ],
              percentiles: { p75: 13 },
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
        lcp: 1918,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190071939,
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
                  density: 0.9047293447293447,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08250712250712251,
                },
                { start: "0.25", density: 0.012763532763532755 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6633239436619718 },
                { start: 200, end: 500, density: 0.27932394366197183 },
                { start: 500, density: 0.0573521126760564 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6789510166358595 },
                { start: 800, end: 1800, density: 0.294362292051756 },
                { start: 1800, density: 0.026686691312384485 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8827231121281464 },
                { start: 1800, end: 3000, density: 0.09771167048054921 },
                { start: 3000, density: 0.01956521739130442 },
              ],
              percentiles: { p75: 1415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783060235402722 },
                { start: 100, end: 300, density: 0.014193399492268634 },
                { start: 300, density: 0.0075005769674590175 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9037231612608495 },
                { start: 2500, end: 4000, density: 0.08063042485153041 },
                { start: 4000, density: 0.01564641388762 },
              ],
              percentiles: { p75: 1761 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1415,
        lcp: 1761,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190072280,
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
                  density: 0.8857885788578858,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09920992099209922,
                },
                { start: "0.25", density: 0.015001500150015014 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6965213914434226 },
                { start: 200, end: 500, density: 0.2508996401439424 },
                { start: 500, density: 0.052578968412635034 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6960303969603039 },
                { start: 800, end: 1800, density: 0.2781721827817218 },
                { start: 1800, density: 0.025797420257974216 },
              ],
              percentiles: { p75: 870 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8863227354529094 },
                { start: 1800, end: 3000, density: 0.09368126374725055 },
                { start: 3000, density: 0.019996000799840066 },
              ],
              percentiles: { p75: 1390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812018798120188 },
                { start: 100, end: 300, density: 0.0122987701229877 },
                { start: 300, density: 0.0064993500649934855 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8998199459837952 },
                { start: 2500, end: 4000, density: 0.08307492247674302 },
                { start: 4000, density: 0.01710513153946175 },
              ],
              percentiles: { p75: 1794 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1390,
        lcp: 1794,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190072662,
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
                  density: 0.9383327437802146,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024053767244428717,
                },
                { start: "0.25", density: 0.03761348897535669 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47989562329498325 },
                { start: 200, end: 500, density: 0.35428774759815007 },
                { start: 500, density: 0.16581662910686656 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42186944674801535 },
                { start: 800, end: 1800, density: 0.45243454566994407 },
                { start: 1800, density: 0.12569600758204041 },
              ],
              percentiles: { p75: 1319 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5978351373855109 },
                { start: 1800, end: 3000, density: 0.2452717973117635 },
                { start: 3000, density: 0.15689306530272557 },
              ],
              percentiles: { p75: 2386 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9519570784050724 },
                { start: 100, end: 300, density: 0.03389830508474576 },
                { start: 300, density: 0.014144616510181736 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000831946755408 },
                { start: 2500, end: 4000, density: 0.1778583313525077 },
                { start: 4000, density: 0.12205847397195146 },
              ],
              percentiles: { p75: 2809 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2386,
        lcp: 2809,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190072936,
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
                { start: 0, end: 200, density: 0.5846000000000002 },
                { start: 200, end: 500, density: 0.31800000000000017 },
                { start: 500, density: 0.09739999999999953 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41741741741741734 },
                { start: 800, end: 1800, density: 0.37707707707707705 },
                { start: 1800, density: 0.2055055055055057 },
              ],
              percentiles: { p75: 1715 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5369758831181821 },
                { start: 1800, end: 3000, density: 0.34173921745221614 },
                { start: 3000, density: 0.12128489942960181 },
              ],
              percentiles: { p75: 2412 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9283856771354269 },
                { start: 100, end: 300, density: 0.05121024204840968 },
                { start: 300, density: 0.020404080816163454 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122061030515256 },
                { start: 2500, end: 4000, density: 0.2850425212606302 },
                { start: 4000, density: 0.10275137568784444 },
              ],
              percentiles: { p75: 3050 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9679903971191358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02060618185455637,
                },
                { start: "0.25", density: 0.011403421026307902 },
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
        fcp: 2412,
        lcp: 3050,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190073291,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8262761506276151 },
                { start: 800, end: 1800, density: 0.1593305439330544 },
                { start: 1800, density: 0.014393305439330603 },
              ],
              percentiles: { p75: 716 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9329514824797844 },
                { start: 1800, end: 3000, density: 0.04599056603773585 },
                { start: 3000, density: 0.021057951482479728 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9419200546634781 },
                { start: 100, end: 300, density: 0.029552442774171513 },
                { start: 300, density: 0.028527502562350412 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.92761841227485 },
                { start: 2500, end: 4000, density: 0.05503669112741827 },
                { start: 4000, density: 0.017344896597731814 },
              ],
              percentiles: { p75: 1645 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.938785584992595,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03850584169820635,
                },
                { start: "0.25", density: 0.02270857330919861 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6015228426395944 },
                { start: 200, end: 500, density: 0.2688769035532998 },
                { start: 500, density: 0.12960025380710588 },
              ],
              percentiles: { p75: 281 },
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
        lcp: 1645,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190073518,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4344303290987296 },
                { start: 800, end: 1800, density: 0.444633390017005 },
                { start: 1800, density: 0.12093628088426532 },
              ],
              percentiles: { p75: 1296 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6111222244448884 },
                { start: 1800, end: 3000, density: 0.23614722944588892 },
                { start: 3000, density: 0.1527305461092227 },
              ],
              percentiles: { p75: 2342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956486946083825 },
                { start: 100, end: 300, density: 0.030109032709812945 },
                { start: 300, density: 0.013404021206361897 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6950585175552659 },
                { start: 2500, end: 4000, density: 0.17630289086726003 },
                { start: 4000, density: 0.128638591577474 },
              ],
              percentiles: { p75: 2854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8817999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06760000000000001,
                },
                { start: "0.25", density: 0.05060000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5363000000000002 },
                { start: 200, end: 500, density: 0.31170000000000003 },
                { start: 500, density: 0.15199999999999958 },
              ],
              percentiles: { p75: 340 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2342,
        lcp: 2854,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652190073894,
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
                { start: 0, end: 200, density: 0.5721111530240158 },
                { start: 200, end: 500, density: 0.3338362881931345 },
                { start: 500, density: 0.09405255878284953 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6867684478371503 },
                { start: 800, end: 1800, density: 0.25750636132315524 },
                { start: 1800, density: 0.05572519083969459 },
              ],
              percentiles: { p75: 915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8096339113680154 },
                { start: 1800, end: 3000, density: 0.12447013487475915 },
                { start: 3000, density: 0.06589595375722532 },
              ],
              percentiles: { p75: 1575 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502461777662607 },
                { start: 100, end: 300, density: 0.03329878206789324 },
                { start: 300, density: 0.01645504016584606 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8379837983798378 },
                { start: 2500, end: 4000, density: 0.1086537225151086 },
                { start: 4000, density: 0.053362479105053595 },
              ],
              percentiles: { p75: 2049 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9794721407624634,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.006757618258319521,
                },
                { start: "0.25", density: 0.013770240979217143 },
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
        fcp: 1575,
        lcp: 2049,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190074129,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6701429123213596 },
                { start: 800, end: 1800, density: 0.2916183854770182 },
                { start: 1800, density: 0.038238702201622274 },
              ],
              percentiles: { p75: 989 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7924650440186433 },
                { start: 1800, end: 3000, density: 0.15251165199378564 },
                { start: 3000, density: 0.055023303987571194 },
              ],
              percentiles: { p75: 1775 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8368373532826004 },
                { start: 2500, end: 4000, density: 0.10782922739584683 },
                { start: 4000, density: 0.05533341932155267 },
              ],
              percentiles: { p75: 2139 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1775, lcp: 2139 },
      timestamp: 1652190074398,
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
                { start: 0, end: 100, density: 0.9483845153546063 },
                { start: 100, end: 300, density: 0.031609482844853466 },
                { start: 300, density: 0.02000600180054017 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7778277827782769 },
                { start: 2500, end: 4000, density: 0.1415641564156414 },
                { start: 4000, density: 0.08060806080608161 },
              ],
              percentiles: { p75: 2393 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8261 },
                { start: "0.10", end: "0.25", density: 0.1238 },
                { start: "0.25", density: 0.05010000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5428914217156566 },
                { start: 200, end: 500, density: 0.30823835232953395 },
                { start: 500, density: 0.14887022595480934 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6152615261526152 },
                { start: 800, end: 1800, density: 0.29582958295829587 },
                { start: 1800, density: 0.08890889088908878 },
              ],
              percentiles: { p75: 1053 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7367053178728505 },
                { start: 1800, end: 3000, density: 0.16173530587764887 },
                { start: 3000, density: 0.10155937624950044 },
              ],
              percentiles: { p75: 1880 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1880,
        lcp: 2393,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1652190074918,
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
                { start: "0.00", end: "0.10", density: 0.8465 },
                { start: "0.10", end: "0.25", density: 0.1317 },
                { start: "0.25", density: 0.021799999999999986 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5940594059405937 },
                { start: 200, end: 500, density: 0.2999299929992999 },
                { start: 500, density: 0.10601060106010643 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6859 },
                { start: 800, end: 1800, density: 0.2699 },
                { start: 1800, density: 0.044200000000000114 },
              ],
              percentiles: { p75: 904 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8232823282328228 },
                { start: 1800, end: 3000, density: 0.12851285128512843 },
                { start: 3000, density: 0.048204820482048716 },
              ],
              percentiles: { p75: 1584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9456945694569457 },
                { start: 100, end: 300, density: 0.0337033703370337 },
                { start: 300, density: 0.020602060206020574 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.85375 },
                { start: 2500, end: 4000, density: 0.10435 },
                { start: 4000, density: 0.04190000000000008 },
              ],
              percentiles: { p75: 2008 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1584,
        lcp: 2008,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1652190075197,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8908109189081085 },
                { start: 1800, end: 3000, density: 0.07419258074192575 },
                { start: 3000, density: 0.0349965003499657 },
              ],
              percentiles: { p75: 1305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9624924984997 },
                { start: 100, end: 300, density: 0.019003800760152033 },
                { start: 300, density: 0.01850370074014803 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8575857585758571 },
                { start: 2500, end: 4000, density: 0.0982098209820981 },
                { start: 4000, density: 0.044204420442044895 },
              ],
              percentiles: { p75: 1943 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7809999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1769 },
                { start: "0.25", density: 0.0421 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7130713071307131 },
                { start: 200, end: 500, density: 0.19001900190019003 },
                { start: 500, density: 0.09690969096909692 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7305538892221554 },
                { start: 800, end: 1800, density: 0.22965406918616268 },
                { start: 1800, density: 0.039792041591681926 },
              ],
              percentiles: { p75: 837 },
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
        lcp: 1943,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652190075526,
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
                  density: 0.8980505415162455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025703971119133574,
                },
                { start: "0.25", density: 0.07624548736462097 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4882824087807767 },
                { start: 200, end: 500, density: 0.30035597745476095 },
                { start: 500, density: 0.2113616137644624 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3718745483451362 },
                { start: 800, end: 1800, density: 0.44442838560485587 },
                { start: 1800, density: 0.18369706605000802 },
              ],
              percentiles: { p75: 1532 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5714703303127743 },
                { start: 1800, end: 3000, density: 0.23925752703887762 },
                { start: 3000, density: 0.1892721426483481 },
              ],
              percentiles: { p75: 2555 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8643386897404202 },
                { start: 100, end: 300, density: 0.05701483312731766 },
                { start: 300, density: 0.07864647713226224 },
              ],
              percentiles: { p75: 23 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6397209985315705 },
                { start: 2500, end: 4000, density: 0.18377386196769432 },
                { start: 4000, density: 0.1765051395007352 },
              ],
              percentiles: { p75: 3268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2555,
        lcp: 3268,
        cls: "0.01",
        fid: 23,
      },
      timestamp: 1652190075849,
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
                { start: 0, end: 1800, density: 0.6224622462246227 },
                { start: 1800, end: 3000, density: 0.14841484148414844 },
                { start: 3000, density: 0.22912291229122886 },
              ],
              percentiles: { p75: 2798 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651000000000001 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.003 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6476000000000005 },
                { start: 2500, end: 4000, density: 0.1661000000000001 },
                { start: 4000, density: 0.18629999999999927 },
              ],
              percentiles: { p75: 3210 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7497 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11810000000000001,
                },
                { start: "0.25", density: 0.1322000000000001 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6885 },
                { start: 200, end: 500, density: 0.2604 },
                { start: 500, density: 0.051099999999999965 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5370462953704639 },
                { start: 800, end: 1800, density: 0.25697430256974346 },
                { start: 1800, density: 0.20597940205979262 },
              ],
              percentiles: { p75: 1482 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2798,
        lcp: 3210,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652190076242,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655330882352942 },
                { start: 100, end: 300, density: 0.027573529411764712 },
                { start: 300, density: 0.006893382352941178 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.778572868373312 },
                { start: 2500, end: 4000, density: 0.16539004233017532 },
                { start: 4000, density: 0.0560370892965128 },
              ],
              percentiles: { p75: 2338 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9304399524375743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04756242568370987,
                },
                { start: "0.25", density: 0.021997621878715796 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7947953913388954 },
                { start: 200, end: 500, density: 0.17024235200635673 },
                { start: 500, density: 0.0349622566547478 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5444467255183741 },
                { start: 800, end: 1800, density: 0.3818517758160541 },
                { start: 1800, density: 0.07370149866557177 },
              ],
              percentiles: { p75: 1174 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6988362760834672 },
                { start: 1800, end: 3000, density: 0.23073836276083465 },
                { start: 3000, density: 0.07042536115569814 },
              ],
              percentiles: { p75: 1969 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1969,
        lcp: 2338,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190076689,
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
                { start: "0.00", end: "0.10", density: 0.9467 },
                { start: "0.10", end: "0.25", density: 0.0371 },
                { start: "0.25", density: 0.0162 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6591022693192047 },
                { start: 200, end: 500, density: 0.24102769169249244 },
                { start: 500, density: 0.09987003898830277 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4431999999999998 },
                { start: 800, end: 1800, density: 0.37539999999999973 },
                { start: 1800, density: 0.18140000000000045 },
              ],
              percentiles: { p75: 1526 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6173852155646685 },
                { start: 1800, end: 3000, density: 0.23166950085025476 },
                { start: 3000, density: 0.15094528358507672 },
              ],
              percentiles: { p75: 2408 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482741370685343 },
                { start: 100, end: 300, density: 0.03611805902951475 },
                { start: 300, density: 0.015607803901951017 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7059382185344398 },
                { start: 2500, end: 4000, density: 0.19549135259422176 },
                { start: 4000, density: 0.09857042887133846 },
              ],
              percentiles: { p75: 2772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2408,
        lcp: 2772,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190077112,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fi" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.638198757763975 },
                { start: 800, end: 1800, density: 0.3307453416149069 },
                { start: 1800, density: 0.03105590062111798 },
              ],
              percentiles: { p75: 922 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8757118451025059 },
                { start: 1800, end: 3000, density: 0.09994305239179957 },
                { start: 3000, density: 0.024345102505694622 },
              ],
              percentiles: { p75: 1410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540744889386729 },
                { start: 100, end: 300, density: 0.024362923550826105 },
                { start: 300, density: 0.021562587510501156 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8579818850834988 },
                { start: 2500, end: 4000, density: 0.11399660345315603 },
                { start: 4000, density: 0.028021511463345226 },
              ],
              percentiles: { p75: 1972 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9268360793074562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054314437308014524,
                },
                { start: "0.25", density: 0.01884948338452946 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4353277906501293 },
                { start: 200, end: 500, density: 0.4234700831402477 },
                { start: 500, density: 0.14120212620962297 },
              ],
              percentiles: { p75: 360 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1410,
        lcp: 1972,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1652190077473,
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
                  density: 0.8978889943074003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0717504743833017,
                },
                { start: "0.25", density: 0.030360531309297924 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7833433313337335 },
                { start: 200, end: 500, density: 0.16396720655868824 },
                { start: 500, density: 0.05268946210757836 },
              ],
              percentiles: { p75: 183 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6270941304085815 },
                { start: 800, end: 1800, density: 0.3307219476919369 },
                { start: 1800, density: 0.04218392189948153 },
              ],
              percentiles: { p75: 1005 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8341041147871461 },
                { start: 1800, end: 3000, density: 0.11964899798411008 },
                { start: 3000, density: 0.046246887228743906 },
              ],
              percentiles: { p75: 1439 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8725746934888704 },
                { start: 2500, end: 4000, density: 0.0940959409594096 },
                { start: 4000, density: 0.03332936555172011 },
              ],
              percentiles: { p75: 1761 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1439, lcp: 1761, cls: "0.01" },
      timestamp: 1652190077869,
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
                { start: 0, end: 800, density: 0.43906827951614474 },
                { start: 800, end: 1800, density: 0.4409677096870934 },
                { start: 1800, density: 0.11996401079676185 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6128612861286112 },
                { start: 1800, end: 3000, density: 0.239523952395239 },
                { start: 3000, density: 0.14761476147614966 },
              ],
              percentiles: { p75: 2381 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9711115553778489 },
                { start: 100, end: 300, density: 0.02059176329468213 },
                { start: 300, density: 0.00829668132746901 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6910146087652584 },
                { start: 2500, end: 4000, density: 0.19161496898138858 },
                { start: 4000, density: 0.11737042225335301 },
              ],
              percentiles: { p75: 2819 },
            },
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
                  density: 0.04539546045395461,
                },
                { start: "0.25", density: 0.026797320267973223 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6708329167083296 },
                { start: 200, end: 500, density: 0.25887411258874127 },
                { start: 500, density: 0.07029297070292914 },
              ],
              percentiles: { p75: 243 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2381,
        lcp: 2819,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190078234,
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
                { start: 0, end: 1800, density: 0.5111638954869357 },
                { start: 1800, end: 3000, density: 0.34441805225653194 },
                { start: 3000, density: 0.14441805225653237 },
              ],
              percentiles: { p75: 2730 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565438373570521 },
                { start: 100, end: 300, density: 0.03634053367217281 },
                { start: 300, density: 0.0071156289707750954 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6572334429309535 },
                { start: 2500, end: 4000, density: 0.27066697980272425 },
                { start: 4000, density: 0.07209957726632223 },
              ],
              percentiles: { p75: 2924 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9676744186046512,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018837209302325582,
                },
                { start: "0.25", density: 0.013488372093023256 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6331333640978312 },
                { start: 200, end: 500, density: 0.3163359483156438 },
                { start: 500, density: 0.05053068758652517 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3218997361477573 },
                { start: 800, end: 1800, density: 0.4564643799472297 },
                { start: 1800, density: 0.221635883905013 },
              ],
              percentiles: { p75: 1808 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2730,
        lcp: 2924,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190078504,
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
                { start: 0, end: 2500, density: 0.7634176434299812 },
                { start: 2500, end: 4000, density: 0.16045650832819242 },
                { start: 4000, density: 0.0761258482418264 },
              ],
              percentiles: { p75: 2441 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9317762753534112,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03110018438844499,
                },
                { start: "0.25", density: 0.037123540258143815 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40252641807360684 },
                { start: 200, end: 500, density: 0.41940969270010997 },
                { start: 500, density: 0.17806388922628336 },
              ],
              percentiles: { p75: 397 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5211905928466432 },
                { start: 800, end: 1800, density: 0.3829005389514939 },
                { start: 1800, density: 0.09590886820186294 },
              ],
              percentiles: { p75: 1160 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.713227121155984 },
                { start: 1800, end: 3000, density: 0.18895887365691008 },
                { start: 3000, density: 0.09781400518710592 },
              ],
              percentiles: { p75: 1945 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9200992555831268 },
                { start: 100, end: 300, density: 0.04528535980148884 },
                { start: 300, density: 0.03461538461538451 },
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
        fcp: 1945,
        lcp: 2441,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1652190079336,
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
                  density: 0.9227922792279228,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04470447044704472,
                },
                { start: "0.25", density: 0.0325032503250325 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6477295459091827 },
                { start: 200, end: 500, density: 0.22964592918583746 },
                { start: 500, density: 0.12262452490497992 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5396618985695703 },
                { start: 800, end: 1800, density: 0.37221166349904933 },
                { start: 1800, density: 0.08812643793138046 },
              ],
              percentiles: { p75: 1137 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7119864040787756 },
                { start: 1800, end: 3000, density: 0.1872438268519442 },
                { start: 3000, density: 0.10076976906928023 },
              ],
              percentiles: { p75: 1965 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672000000000001 },
                { start: 100, end: 300, density: 0.0226 },
                { start: 300, density: 0.010200000000000028 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7617023404680932 },
                { start: 2500, end: 4000, density: 0.1411782356471293 },
                { start: 4000, density: 0.0971194238847774 },
              ],
              percentiles: { p75: 2460 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1965,
        lcp: 2460,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190079801,
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
                { start: 0, end: 200, density: 0.4818036392721457 },
                { start: 200, end: 500, density: 0.36312737452509514 },
                { start: 500, density: 0.15506898620275922 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5518999999999998 },
                { start: 800, end: 1800, density: 0.3597999999999998 },
                { start: 1800, density: 0.08830000000000034 },
              ],
              percentiles: { p75: 1118 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7384523095380924 },
                { start: 1800, end: 3000, density: 0.1719656068786243 },
                { start: 3000, density: 0.08958208358328336 },
              ],
              percentiles: { p75: 1858 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9324932493249325 },
                { start: 100, end: 300, density: 0.0378037803780378 },
                { start: 300, density: 0.029702970297029667 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7731953609278135 },
                { start: 2500, end: 4000, density: 0.15091981603679241 },
                { start: 4000, density: 0.0758848230353941 },
              ],
              percentiles: { p75: 2394 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.868 },
                { start: "0.10", end: "0.25", density: 0.0787 },
                { start: "0.25", density: 0.05330000000000001 },
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
        fcp: 1858,
        lcp: 2394,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1652190080106,
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
                  density: 0.7693230676932308,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15928407159284075,
                },
                { start: "0.25", density: 0.07139286071392856 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7290458091618325 },
                { start: 200, end: 500, density: 0.1868373674734948 },
                { start: 500, density: 0.08411682336467272 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7585724282715185 },
                { start: 800, end: 1800, density: 0.21713485954213738 },
                { start: 1800, density: 0.02429271218634413 },
              ],
              percentiles: { p75: 820 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9015295411376586 },
                { start: 1800, end: 3000, density: 0.06967909627111868 },
                { start: 3000, density: 0.028791362591222704 },
              ],
              percentiles: { p75: 1276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598200899550225 },
                { start: 100, end: 300, density: 0.017791104447776113 },
                { start: 300, density: 0.022388805597201383 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8888888888888891 },
                { start: 2500, end: 4000, density: 0.07500750075007505 },
                { start: 4000, density: 0.03610361036103599 },
              ],
              percentiles: { p75: 1810 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1276,
        lcp: 1810,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652190080422,
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
                { start: 0, end: 1800, density: 0.6077713475847394 },
                { start: 1800, end: 3000, density: 0.22180229124837555 },
                { start: 3000, density: 0.17042636116688512 },
              ],
              percentiles: { p75: 2456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9428880605987738 },
                { start: 100, end: 300, density: 0.03450763496453048 },
                { start: 300, density: 0.02260430443669569 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6922257720979764 },
                { start: 2500, end: 4000, density: 0.17074902378416748 },
                { start: 4000, density: 0.13702520411785613 },
              ],
              percentiles: { p75: 2882 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9359652214780871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02173657619551169,
                },
                { start: "0.25", density: 0.042298202326401114 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5864350703060387 },
                { start: 200, end: 500, density: 0.318681318681319 },
                { start: 500, density: 0.09488361101264235 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4329799764428739 },
                { start: 800, end: 1800, density: 0.4193168433451119 },
                { start: 1800, density: 0.14770318021201428 },
              ],
              percentiles: { p75: 1398 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2456,
        lcp: 2882,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190080670,
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
                { start: 0, end: 800, density: 0.5024497550244974 },
                { start: 800, end: 1800, density: 0.2876712328767122 },
                { start: 1800, density: 0.20987901209879042 },
              ],
              percentiles: { p75: 1568 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6422715456908591 },
                { start: 1800, end: 3000, density: 0.1457708458308332 },
                { start: 3000, density: 0.21195760847830764 },
              ],
              percentiles: { p75: 2709 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639036096390361 },
                { start: 100, end: 300, density: 0.022297770222977704 },
                { start: 300, density: 0.01379862013798618 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6637172565486884 },
                { start: 2500, end: 4000, density: 0.16961607678464266 },
                { start: 4000, density: 0.16666666666666907 },
              ],
              percentiles: { p75: 3097 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.907990799079908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06390639063906389,
                },
                { start: "0.25", density: 0.028102810281028085 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6707341468293659 },
                { start: 200, end: 500, density: 0.25805161032206453 },
                { start: 500, density: 0.0712142428485694 },
              ],
              percentiles: { p75: 242 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2709,
        lcp: 3097,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190081056,
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
                { start: 0, end: 1800, density: 0.9015295411376586 },
                { start: 1800, end: 3000, density: 0.06967909627111868 },
                { start: 3000, density: 0.028791362591222704 },
              ],
              percentiles: { p75: 1276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598200899550225 },
                { start: 100, end: 300, density: 0.017791104447776113 },
                { start: 300, density: 0.022388805597201383 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8888888888888891 },
                { start: 2500, end: 4000, density: 0.07500750075007505 },
                { start: 4000, density: 0.03610361036103599 },
              ],
              percentiles: { p75: 1810 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7693230676932308,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15928407159284075,
                },
                { start: "0.25", density: 0.07139286071392856 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7290458091618325 },
                { start: 200, end: 500, density: 0.1868373674734948 },
                { start: 500, density: 0.08411682336467272 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7585724282715185 },
                { start: 800, end: 1800, density: 0.21713485954213738 },
                { start: 1800, density: 0.02429271218634413 },
              ],
              percentiles: { p75: 820 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1276,
        lcp: 1810,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652190081561,
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
                { start: "0.00", end: "0.10", density: 0.9283 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044399999999999995,
                },
                { start: "0.25", density: 0.027299999999999987 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.527994401119776 },
                { start: 200, end: 500, density: 0.3520295940811838 },
                { start: 500, density: 0.11997600479904022 },
              ],
              percentiles: { p75: 322 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2130786921307868 },
                { start: 800, end: 1800, density: 0.5307469253074688 },
                { start: 1800, density: 0.2561743825617443 },
              ],
              percentiles: { p75: 1839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3532646735326473 },
                { start: 1800, end: 3000, density: 0.34046595340466007 },
                { start: 3000, density: 0.30626937306269264 },
              ],
              percentiles: { p75: 3390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652104368689393 },
                { start: 100, end: 300, density: 0.02839148255523343 },
                { start: 300, density: 0.006398080575827252 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4655465546554654 },
                { start: 2500, end: 4000, density: 0.313131313131313 },
                { start: 4000, density: 0.22132213221322158 },
              ],
              percentiles: { p75: 3870 },
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
        lcp: 3870,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652190081999,
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
                  density: 0.9424728105323411,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0412135088723526,
                },
                { start: "0.25", density: 0.01631368059530624 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6602564102564102 },
                { start: 200, end: 500, density: 0.23717948717948717 },
                { start: 500, density: 0.10256410256410273 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6828521434820648 },
                { start: 800, end: 1800, density: 0.289297171186935 },
                { start: 1800, density: 0.027850685331000262 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8953623188405796 },
                { start: 1800, end: 3000, density: 0.08333333333333334 },
                { start: 3000, density: 0.021304347826086964 },
              ],
              percentiles: { p75: 1366 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9555422944950022 },
                { start: 100, end: 300, density: 0.02028942264657616 },
                { start: 300, density: 0.02416828285842163 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9155072463768115 },
                { start: 2500, end: 4000, density: 0.06753623188405797 },
                { start: 4000, density: 0.01695652173913051 },
              ],
              percentiles: { p75: 1772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1366,
        lcp: 1772,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190082307,
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
                { start: 0, end: 800, density: 0.37631327602674314 },
                { start: 800, end: 1800, density: 0.4745702005730661 },
                { start: 1800, density: 0.14911652340019071 },
              ],
              percentiles: { p75: 1393 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5667108593467509 },
                { start: 1800, end: 3000, density: 0.27552127274918614 },
                { start: 3000, density: 0.15776786790406305 },
              ],
              percentiles: { p75: 2454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.960278919188146 },
                { start: 100, end: 300, density: 0.03200099613995767 },
                { start: 300, density: 0.007720084671896401 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7028564512224643 },
                { start: 2500, end: 4000, density: 0.17296054224158802 },
                { start: 4000, density: 0.12418300653594765 },
              ],
              percentiles: { p75: 2779 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9663513351694407,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018560651418991738,
                },
                { start: "0.25", density: 0.01508801341156747 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6836090941554577 },
                { start: 200, end: 500, density: 0.26092131889060827 },
                { start: 500, density: 0.05546958695393405 },
              ],
              percentiles: { p75: 230 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2454,
        lcp: 2779,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190082755,
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
                  density: 0.9503350413874655,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024175535409276052,
                },
                { start: "0.25", density: 0.025489423203258442 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5375280306028227 },
                { start: 200, end: 500, density: 0.382535285582377 },
                { start: 500, density: 0.07993668381480021 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2914638958305928 },
                { start: 800, end: 1800, density: 0.4991450743127705 },
                { start: 1800, density: 0.20939102985663666 },
              ],
              percentiles: { p75: 1707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4799893631166058 },
                { start: 1800, end: 3000, density: 0.3199042680494608 },
                { start: 3000, density: 0.20010636883393346 },
              ],
              percentiles: { p75: 2759 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664575947641124 },
                { start: 100, end: 300, density: 0.025497682028906458 },
                { start: 300, density: 0.00804472320698119 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6202229299363051 },
                { start: 2500, end: 4000, density: 0.2395169851380041 },
                { start: 4000, density: 0.1402600849256908 },
              ],
              percentiles: { p75: 3122 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2759,
        lcp: 3122,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652190083189,
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
                { start: 0, end: 800, density: 0.6174999999999997 },
                { start: 800, end: 1800, density: 0.33889999999999976 },
                { start: 1800, density: 0.04360000000000045 },
              ],
              percentiles: { p75: 979 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7919999999999994 },
                { start: 1800, end: 3000, density: 0.15339999999999993 },
                { start: 3000, density: 0.05460000000000069 },
              ],
              percentiles: { p75: 1684 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623 },
                { start: 100, end: 300, density: 0.0226 },
                { start: 300, density: 0.015099999999999959 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8065886822635466 },
                { start: 2500, end: 4000, density: 0.1375224955008996 },
                { start: 4000, density: 0.05588882223555392 },
              ],
              percentiles: { p75: 2238 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8776999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09430000000000001,
                },
                { start: "0.25", density: 0.028000000000000025 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6175852755826751 },
                { start: 200, end: 500, density: 0.2871861558467541 },
                { start: 500, density: 0.09522856857057078 },
              ],
              percentiles: { p75: 263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1684,
        lcp: 2238,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190083625,
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
                { start: 0, end: 2500, density: 0.6577639751552806 },
                { start: 2500, end: 4000, density: 0.1825396825396828 },
                { start: 4000, density: 0.15969634230503651 },
              ],
              percentiles: { p75: 3131 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9408799891023022,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030785996458248203,
                },
                { start: "0.25", density: 0.02833401443944969 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6730303845119653 },
                { start: 200, end: 500, density: 0.2781661737026082 },
                { start: 500, density: 0.04880344178542659 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3689079110865666 },
                { start: 800, end: 1800, density: 0.4731464862625988 },
                { start: 1800, density: 0.1579456026508346 },
              ],
              percentiles: { p75: 1494 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5823691460055085 },
                { start: 1800, end: 3000, density: 0.24187327823691407 },
                { start: 3000, density: 0.17575757575757742 },
              ],
              percentiles: { p75: 2508 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602059273688603 },
                { start: 100, end: 300, density: 0.03255878669820509 },
                { start: 300, density: 0.007235285932934457 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2508,
        lcp: 3131,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190083943,
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
                  density: 0.9177917791779178,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06800680068006801,
                },
                { start: "0.25", density: 0.014201420142014205 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6289628962896292 },
                { start: 200, end: 500, density: 0.28662866286628674 },
                { start: 500, density: 0.08440844084408397 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.669166916691669 },
                { start: 800, end: 1800, density: 0.2689268926892689 },
                { start: 1800, density: 0.06190619061906225 },
              ],
              percentiles: { p75: 922 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8081383723255349 },
                { start: 1800, end: 3000, density: 0.12957408518296346 },
                { start: 3000, density: 0.062287542491501584 },
              ],
              percentiles: { p75: 1612 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517144856543037 },
                { start: 100, end: 300, density: 0.022693192042387286 },
                { start: 300, density: 0.02559232230330896 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8343665633436654 },
                { start: 2500, end: 4000, density: 0.11403859614038592 },
                { start: 4000, density: 0.051594840515948516 },
              ],
              percentiles: { p75: 2050 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1612,
        lcp: 2050,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190084423,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5776422357764224 },
                { start: 800, end: 1800, density: 0.37876212378762114 },
                { start: 1800, density: 0.04359564043595651 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8510851085108508 },
                { start: 1800, end: 3000, density: 0.11491149114911488 },
                { start: 3000, density: 0.03400340034003423 },
              ],
              percentiles: { p75: 1516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9682000000000001 },
                { start: 100, end: 300, density: 0.019600000000000006 },
                { start: 300, density: 0.012199999999999963 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.864186418641864 },
                { start: 2500, end: 4000, density: 0.10311031103110306 },
                { start: 4000, density: 0.03270327032703292 },
              ],
              percentiles: { p75: 1961 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.956895689568957,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032603260326032606,
                },
                { start: "0.25", density: 0.010501050105010505 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6651669666066783 },
                { start: 200, end: 500, density: 0.26084783043391313 },
                { start: 500, density: 0.07398520295940848 },
              ],
              percentiles: { p75: 233 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1516,
        lcp: 1961,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190084823,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6211378862113787 },
                { start: 2500, end: 4000, density: 0.2828717128287171 },
                { start: 4000, density: 0.09599040095990426 },
              ],
              percentiles: { p75: 3036 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8385161483851615,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06989301069893011,
                },
                { start: "0.25", density: 0.09159084091590845 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5616999999999993 },
                { start: 200, end: 500, density: 0.2580999999999996 },
                { start: 500, density: 0.18020000000000122 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2989999999999996 },
                { start: 800, end: 1800, density: 0.44999999999999957 },
                { start: 1800, density: 0.2510000000000009 },
              ],
              percentiles: { p75: 1858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5272054410882175 },
                { start: 1800, end: 3000, density: 0.35367073414682926 },
                { start: 3000, density: 0.11912382476495315 },
              ],
              percentiles: { p75: 2553 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336867373474694 },
                { start: 100, end: 300, density: 0.014702940588117623 },
                { start: 300, density: 0.051610322064412996 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2553,
        lcp: 3036,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1652190085112,
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
                  density: 0.8497984968957629,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09802853719638384,
                },
                { start: "0.25", density: 0.05217296590785322 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6566593886462883 },
                { start: 200, end: 500, density: 0.2520742358078603 },
                { start: 500, density: 0.09126637554585147 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45124617402710954 },
                { start: 800, end: 1800, density: 0.4259947529514646 },
                { start: 1800, density: 0.12275907302142573 },
              ],
              percentiles: { p75: 1355 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6900655021834056 },
                { start: 1800, end: 3000, density: 0.19432314410480334 },
                { start: 3000, density: 0.11561135371179107 },
              ],
              percentiles: { p75: 2102 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540486281507918 },
                { start: 100, end: 300, density: 0.03234441222395717 },
                { start: 300, density: 0.013606959625251089 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7534710834153271 },
                { start: 2500, end: 4000, density: 0.15327429758390718 },
                { start: 4000, density: 0.09325461900076577 },
              ],
              percentiles: { p75: 2485 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2102,
        lcp: 2485,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652190085388,
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
                  density: 0.9225504322766569,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04899135446685879,
                },
                { start: "0.25", density: 0.02845821325648415 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6736282513764947 },
                { start: 200, end: 500, density: 0.22384659198784865 },
                { start: 500, density: 0.10252515663565674 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5093121888253733 },
                { start: 800, end: 1800, density: 0.3662179605384473 },
                { start: 1800, density: 0.12446985063617935 },
              ],
              percentiles: { p75: 1316 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.663843888070692 },
                { start: 1800, end: 3000, density: 0.2047128129602356 },
                { start: 3000, density: 0.1314432989690723 },
              ],
              percentiles: { p75: 2217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602137767220902 },
                { start: 100, end: 300, density: 0.02771179730799683 },
                { start: 300, density: 0.012074425969912907 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7267388511653509 },
                { start: 2500, end: 4000, density: 0.17140759772435302 },
                { start: 4000, density: 0.10185355111029598 },
              ],
              percentiles: { p75: 2661 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2217,
        lcp: 2661,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190085897,
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
                { start: 0, end: 1800, density: 0.7824594626583024 },
                { start: 1800, end: 3000, density: 0.15895372233400393 },
                { start: 3000, density: 0.05858681500769382 },
              ],
              percentiles: { p75: 1713 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585336538461539 },
                { start: 100, end: 300, density: 0.02427884615384615 },
                { start: 300, density: 0.017187500000000046 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8135071090047383 },
                { start: 2500, end: 4000, density: 0.1330568720379146 },
                { start: 4000, density: 0.053436018957347 },
              ],
              percentiles: { p75: 2210 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8668555240793201,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10328139754485362,
                },
                { start: "0.25", density: 0.029863078375826246 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5876948127471501 },
                { start: 200, end: 500, density: 0.31146778320539636 },
                { start: 500, density: 0.1008374040474534 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6043190936983712 },
                { start: 800, end: 1800, density: 0.3491857446306346 },
                { start: 1800, density: 0.04649516167099421 },
              ],
              percentiles: { p75: 996 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1713,
        lcp: 2210,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190086300,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8556247709783803 },
                { start: 2500, end: 4000, density: 0.11298399902284106 },
                { start: 4000, density: 0.03139122999877858 },
              ],
              percentiles: { p75: 2047 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9462025316455697,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044182083739045766,
                },
                { start: "0.25", density: 0.009615384615384609 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5467244701348746 },
                { start: 200, end: 500, density: 0.35079479768786126 },
                { start: 500, density: 0.10248073217726408 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5917889286154606 },
                { start: 800, end: 1800, density: 0.3686351867833806 },
                { start: 1800, density: 0.03957588460115887 },
              ],
              percentiles: { p75: 1029 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220753793441019 },
                { start: 1800, end: 3000, density: 0.1432941752325012 },
                { start: 3000, density: 0.034630445423396966 },
              ],
              percentiles: { p75: 1588 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672439759036144 },
                { start: 100, end: 300, density: 0.0215863453815261 },
                { start: 300, density: 0.011169678714859455 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1588,
        lcp: 2047,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190086725,
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
                { start: 0, end: 2500, density: 0.8656783468104223 },
                { start: 2500, end: 4000, density: 0.09119496855345907 },
                { start: 4000, density: 0.04312668463611855 },
              ],
              percentiles: { p75: 1990 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9378893041466452,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035059619149314825,
                },
                { start: "0.25", density: 0.027051076704039865 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5740740740740744 },
                { start: 200, end: 500, density: 0.29544682296975877 },
                { start: 500, density: 0.1304791029561669 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7052534562211982 },
                { start: 800, end: 1800, density: 0.2691244239631336 },
                { start: 1800, density: 0.025622119815668264 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8749773837524879 },
                { start: 1800, end: 3000, density: 0.08847476026777637 },
                { start: 3000, density: 0.03654785597973581 },
              ],
              percentiles: { p75: 1435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9305251641137856 },
                { start: 100, end: 300, density: 0.03063457330415756 },
                { start: 300, density: 0.038840262582056875 },
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
        fcp: 1435,
        lcp: 1990,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190087176,
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
                  density: 0.8216178382161783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10138986101389859,
                },
                { start: "0.25", density: 0.07699230076992304 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7123438280859573 },
                { start: 200, end: 500, density: 0.2364817591204399 },
                { start: 500, density: 0.051174412793602776 },
              ],
              percentiles: { p75: 216 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2687924830067971 },
                { start: 800, end: 1800, density: 0.569572171131547 },
                { start: 1800, density: 0.1616353458616558 },
              ],
              percentiles: { p75: 1558 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5061000000000002 },
                { start: 1800, end: 3000, density: 0.32140000000000013 },
                { start: 3000, density: 0.1724999999999996 },
              ],
              percentiles: { p75: 2637 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9785085965613753 },
                { start: 100, end: 300, density: 0.01699320271891244 },
                { start: 300, density: 0.004498200719712114 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6178117811781166 },
                { start: 2500, end: 4000, density: 0.2415741574157411 },
                { start: 4000, density: 0.14061406140614213 },
              ],
              percentiles: { p75: 3124 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2637,
        lcp: 3124,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652190087758,
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
                  density: 0.9348729792147806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05704387990762125,
                },
                { start: "0.25", density: 0.00808314087759815 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6156135531135537 },
                { start: 200, end: 500, density: 0.30299908424908456 },
                { start: 500, density: 0.08138736263736177 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5367612843182878 },
                { start: 800, end: 1800, density: 0.41658911121451864 },
                { start: 1800, density: 0.046649604467193566 },
              ],
              percentiles: { p75: 1061 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8314984355081698 },
                { start: 1800, end: 3000, density: 0.12840421833352647 },
                { start: 3000, density: 0.04009734615830374 },
              ],
              percentiles: { p75: 1579 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527106313072047 },
                { start: 100, end: 300, density: 0.026519596338887588 },
                { start: 300, density: 0.020769772353907614 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8465427077280653 },
                { start: 2500, end: 4000, density: 0.11626961069145841 },
                { start: 4000, density: 0.03718768158047631 },
              ],
              percentiles: { p75: 2064 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1579,
        lcp: 2064,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190088065,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6570000000000004 },
                { start: 200, end: 500, density: 0.2691000000000001 },
                { start: 500, density: 0.07389999999999947 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5559555955595563 },
                { start: 800, end: 1800, density: 0.3996399639963997 },
                { start: 1800, density: 0.04440444044404396 },
              ],
              percentiles: { p75: 1045 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8411682336467293 },
                { start: 1800, end: 3000, density: 0.11982396479295856 },
                { start: 3000, density: 0.039007801560312236 },
              ],
              percentiles: { p75: 1552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589958995899589 },
                { start: 100, end: 300, density: 0.022602260226022602 },
                { start: 300, density: 0.01840184018401848 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8452500000000002 },
                { start: 2500, end: 4000, density: 0.11495000000000005 },
                { start: 4000, density: 0.03979999999999995 },
              ],
              percentiles: { p75: 2074 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8974 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08990000000000001,
                },
                { start: "0.25", density: 0.012699999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1552,
        lcp: 2074,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190088537,
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
                { start: 0, end: 100, density: 0.9494151754473659 },
                { start: 100, end: 300, density: 0.029291212636209134 },
                { start: 300, density: 0.021293611916425054 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8763747250549881 },
                { start: 2500, end: 4000, density: 0.0821335732853428 },
                { start: 4000, density: 0.04149170165966891 },
              ],
              percentiles: { p75: 1804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9350064993500651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03569643035696431,
                },
                { start: "0.25", density: 0.029297070292970694 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.581016203240648 },
                { start: 200, end: 500, density: 0.30726145229045804 },
                { start: 500, density: 0.11172234446889397 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7945589117823565 },
                { start: 800, end: 1800, density: 0.16893378675735146 },
                { start: 1800, density: 0.03650730146029212 },
              ],
              percentiles: { p75: 741 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8683999999999995 },
                { start: 1800, end: 3000, density: 0.0869 },
                { start: 3000, density: 0.04470000000000049 },
              ],
              percentiles: { p75: 1378 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1378,
        lcp: 1804,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190088903,
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
                  density: 0.9529952995299529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031203120312031197,
                },
                { start: "0.25", density: 0.015801580158015804 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6526652665266526 },
                { start: 200, end: 500, density: 0.2702270227022702 },
                { start: 500, density: 0.07710771077107721 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7113845538215288 },
                { start: 800, end: 1800, density: 0.23849539815926374 },
                { start: 1800, density: 0.05012004801920762 },
              ],
              percentiles: { p75: 878 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8335499350194939 },
                { start: 1800, end: 3000, density: 0.10836748975307402 },
                { start: 3000, density: 0.05808257522743199 },
              ],
              percentiles: { p75: 1465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611805902951477 },
                { start: 100, end: 300, density: 0.026113056528264136 },
                { start: 300, density: 0.012706353176588284 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.848784878487849 },
                { start: 2500, end: 4000, density: 0.10061006100610062 },
                { start: 4000, density: 0.05060506050605038 },
              ],
              percentiles: { p75: 1999 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1465,
        lcp: 1999,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652190089197,
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
                  density: 0.8487848784878488,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.095009500950095,
                },
                { start: "0.25", density: 0.056205620562056156 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5610561056105611 },
                { start: 200, end: 500, density: 0.31963196319631954 },
                { start: 500, density: 0.11931193119311942 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7168433686737345 },
                { start: 800, end: 1800, density: 0.22844568913782753 },
                { start: 1800, density: 0.05471094218843779 },
              ],
              percentiles: { p75: 858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8652730546109216 },
                { start: 1800, end: 3000, density: 0.09831966393278647 },
                { start: 3000, density: 0.03640728145629192 },
              ],
              percentiles: { p75: 1379 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516096780643871 },
                { start: 100, end: 300, density: 0.027494501099780046 },
                { start: 300, density: 0.020895820835832832 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8680499999999998 },
                { start: 2500, end: 4000, density: 0.09464999999999997 },
                { start: 4000, density: 0.03730000000000029 },
              ],
              percentiles: { p75: 1916 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1379,
        lcp: 1916,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652190089503,
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
                { start: 0, end: 2500, density: 0.7394548231700147 },
                { start: 2500, end: 4000, density: 0.17630125719656897 },
                { start: 4000, density: 0.08424391963341625 },
              ],
              percentiles: { p75: 2542 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7667174142171215,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18948354608267953,
                },
                { start: "0.25", density: 0.04379903970019905 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6255691768826619 },
                { start: 200, end: 500, density: 0.2595446584938704 },
                { start: 500, density: 0.11488616462346773 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5159250585480095 },
                { start: 800, end: 1800, density: 0.4120608899297425 },
                { start: 1800, density: 0.07201405152224817 },
              ],
              percentiles: { p75: 1153 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7085976039464404 },
                { start: 1800, end: 3000, density: 0.2170542635658912 },
                { start: 3000, density: 0.07434813248766836 },
              ],
              percentiles: { p75: 1937 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.957933130699088 },
                { start: 100, end: 300, density: 0.02674772036474164 },
                { start: 300, density: 0.015319148936170179 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1937,
        lcp: 2542,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1652190089830,
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
                  density: 0.9541954195419542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03330333033303331,
                },
                { start: "0.25", density: 0.012501250125012499 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7095419083816765 },
                { start: 200, end: 500, density: 0.21104220844168842 },
                { start: 500, density: 0.07941588317663506 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7653234676532347 },
                { start: 800, end: 1800, density: 0.21087891210878917 },
                { start: 1800, density: 0.023797620237976196 },
              ],
              percentiles: { p75: 791 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9136913691369137 },
                { start: 1800, end: 3000, density: 0.0709070907090709 },
                { start: 3000, density: 0.015401540154015443 },
              ],
              percentiles: { p75: 1290 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812981298129813 },
                { start: 100, end: 300, density: 0.010801080108010801 },
                { start: 300, density: 0.0079007900790079 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9211421142114213 },
                { start: 2500, end: 4000, density: 0.060756075607560744 },
                { start: 4000, density: 0.018101810181018068 },
              ],
              percentiles: { p75: 1813 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1290,
        lcp: 1813,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1652190090278,
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
                { start: 0, end: 800, density: 0.6883081529876139 },
                { start: 800, end: 1800, density: 0.24880903770246357 },
                { start: 1800, density: 0.06288280930992253 },
              ],
              percentiles: { p75: 912 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8445469343461743 },
                { start: 1800, end: 3000, density: 0.11326641345632116 },
                { start: 3000, density: 0.04218665219750437 },
              ],
              percentiles: { p75: 1457 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9408078922810291 },
                { start: 100, end: 300, density: 0.03386215171310491 },
                { start: 300, density: 0.025329956005866003 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8604556550040683 },
                { start: 2500, end: 4000, density: 0.10008136696501219 },
                { start: 4000, density: 0.039462978030919575 },
              ],
              percentiles: { p75: 1968 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9601078167115903,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026010781671159028,
                },
                { start: "0.25", density: 0.013881401617250676 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46740273396424814 },
                { start: 200, end: 500, density: 0.3873554153522607 },
                { start: 500, density: 0.1452418506834911 },
              ],
              percentiles: { p75: 346 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1457,
        lcp: 1968,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1652190090562,
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
                { start: 0, end: 100, density: 0.9447288806143822 },
                { start: 100, end: 300, density: 0.02594833604840587 },
                { start: 300, density: 0.029322783337211958 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8333900226757364 },
                { start: 2500, end: 4000, density: 0.11400226757369612 },
                { start: 4000, density: 0.05260770975056765 },
              ],
              percentiles: { p75: 2053 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9595388788426763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02791591320072333,
                },
                { start: "0.25", density: 0.012545207956600357 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5874929577464788 },
                { start: 200, end: 500, density: 0.32011267605633803 },
                { start: 500, density: 0.09239436619718323 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6449926111174261 },
                { start: 800, end: 1800, density: 0.2885074457201317 },
                { start: 1800, density: 0.0664999431624421 },
              ],
              percentiles: { p75: 953 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.796685208309683 },
                { start: 1800, end: 3000, density: 0.13713247814734925 },
                { start: 3000, density: 0.06618231354296772 },
              ],
              percentiles: { p75: 1654 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1654,
        lcp: 2053,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190090996,
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
                { start: 0, end: 800, density: 0.45458183273309305 },
                { start: 800, end: 1800, density: 0.4113645458183272 },
                { start: 1800, density: 0.1340536214485797 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6335900770231068 },
                { start: 1800, end: 3000, density: 0.212263679103731 },
                { start: 3000, density: 0.15414624387316223 },
              ],
              percentiles: { p75: 2342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511048895110491 },
                { start: 100, end: 300, density: 0.02969703029697031 },
                { start: 300, density: 0.01919808019198061 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.702890578115622 },
                { start: 2500, end: 4000, density: 0.16408281656331247 },
                { start: 4000, density: 0.1330266053210657 },
              ],
              percentiles: { p75: 2840 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8879000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06140000000000001,
                },
                { start: "0.25", density: 0.050699999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6355635563556363 },
                { start: 200, end: 500, density: 0.2778277827782781 },
                { start: 500, density: 0.08660866086608557 },
              ],
              percentiles: { p75: 258 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2342,
        lcp: 2840,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652190091446,
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
                  density: 0.8649135086491351,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10358964103589641,
                },
                { start: "0.25", density: 0.0314968503149685 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5594999999999998 },
                { start: 200, end: 500, density: 0.3048999999999999 },
                { start: 500, density: 0.13560000000000025 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8426842684268426 },
                { start: 800, end: 1800, density: 0.134013401340134 },
                { start: 1800, density: 0.023302330233023336 },
              ],
              percentiles: { p75: 687 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9153084691530847 },
                { start: 1800, end: 3000, density: 0.06489351064893512 },
                { start: 3000, density: 0.019798020197980118 },
              ],
              percentiles: { p75: 1201 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603960396039605 },
                { start: 100, end: 300, density: 0.019801980198019802 },
                { start: 300, density: 0.019801980198019833 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9132586741325869 },
                { start: 2500, end: 4000, density: 0.06834316568343164 },
                { start: 4000, density: 0.018398160183981556 },
              ],
              percentiles: { p75: 1743 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1201,
        lcp: 1743,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1652190091744,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5803095660999752 },
                { start: 200, end: 500, density: 0.27822887591981754 },
                { start: 500, density: 0.14146155798020713 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5089445438282643 },
                { start: 800, end: 1800, density: 0.3939432660362888 },
                { start: 1800, density: 0.0971121901354468 },
              ],
              percentiles: { p75: 1194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.676326635754765 },
                { start: 1800, end: 3000, density: 0.21187532199896938 },
                { start: 3000, density: 0.11179804224626576 },
              ],
              percentiles: { p75: 2073 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608261159227182 },
                { start: 100, end: 300, density: 0.028381079280479678 },
                { start: 300, density: 0.01079280479680216 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7559339525283806 },
                { start: 2500, end: 4000, density: 0.15157378740970093 },
                { start: 4000, density: 0.09249226006191864 },
              ],
              percentiles: { p75: 2483 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9592644617545653,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01608989911888648,
                },
                { start: "0.25", density: 0.024645639126548317 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2073,
        lcp: 2483,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652190092067,
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
                { start: 0, end: 2500, density: 0.6066393360663928 },
                { start: 2500, end: 4000, density: 0.24867513248675113 },
                { start: 4000, density: 0.1446855314468561 },
              ],
              percentiles: { p75: 3216 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8973897389738973,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0556055605560556,
                },
                { start: "0.25", density: 0.047004700470047026 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6226377362263779 },
                { start: 200, end: 500, density: 0.2860713928607141 },
                { start: 500, density: 0.09129087091290806 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2949294929492947 },
                { start: 800, end: 1800, density: 0.5257525752575255 },
                { start: 1800, density: 0.1793179317931799 },
              ],
              percentiles: { p75: 1582 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5005499450054991 },
                { start: 1800, end: 3000, density: 0.28887111288871087 },
                { start: 3000, density: 0.21057894210579003 },
              ],
              percentiles: { p75: 2779 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963992798559712 },
                { start: 100, end: 300, density: 0.026005201040208037 },
                { start: 300, density: 0.010002000400079997 },
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
        fcp: 2779,
        lcp: 3216,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1652190092591,
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
                { start: 0, end: 2500, density: 0.6476000000000005 },
                { start: 2500, end: 4000, density: 0.1661000000000001 },
                { start: 4000, density: 0.18629999999999927 },
              ],
              percentiles: { p75: 3210 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7497 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11810000000000001,
                },
                { start: "0.25", density: 0.1322000000000001 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6885 },
                { start: 200, end: 500, density: 0.2604 },
                { start: 500, density: 0.051099999999999965 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5370462953704639 },
                { start: 800, end: 1800, density: 0.25697430256974346 },
                { start: 1800, density: 0.20597940205979262 },
              ],
              percentiles: { p75: 1482 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6224622462246227 },
                { start: 1800, end: 3000, density: 0.14841484148414844 },
                { start: 3000, density: 0.22912291229122886 },
              ],
              percentiles: { p75: 2798 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651000000000001 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.003 },
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
        fcp: 2798,
        lcp: 3210,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652190092895,
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
                { start: "0.00", end: "0.10", density: 0.8602 },
                { start: "0.10", end: "0.25", density: 0.1099 },
                { start: "0.25", density: 0.029900000000000076 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7215278472152781 },
                { start: 200, end: 500, density: 0.19288071192880699 },
                { start: 500, density: 0.08559144085591501 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7135713571357135 },
                { start: 800, end: 1800, density: 0.26182618261826185 },
                { start: 1800, density: 0.024602460246024607 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9085274417674699 },
                { start: 1800, end: 3000, density: 0.07127861641507549 },
                { start: 3000, density: 0.02019394181745474 },
              ],
              percentiles: { p75: 1292 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9666933386677334 },
                { start: 100, end: 300, density: 0.015003000600120022 },
                { start: 300, density: 0.01830366073214654 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9076999999999998 },
                { start: 2500, end: 4000, density: 0.07290000000000005 },
                { start: 4000, density: 0.019400000000000056 },
              ],
              percentiles: { p75: 1775 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1292,
        lcp: 1775,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652190093331,
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
                { start: 0, end: 800, density: 0.401085141903172 },
                { start: 800, end: 1800, density: 0.4947829716193655 },
                { start: 1800, density: 0.10413188647746252 },
              ],
              percentiles: { p75: 1424 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.639513301711693 },
                { start: 1800, end: 3000, density: 0.2528356362136522 },
                { start: 3000, density: 0.10765106207465468 },
              ],
              percentiles: { p75: 2353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407592824363787 },
                { start: 100, end: 300, density: 0.03379224030037547 },
                { start: 300, density: 0.025448477263245717 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7230643179024993 },
                { start: 2500, end: 4000, density: 0.193773043834494 },
                { start: 4000, density: 0.08316263826300668 },
              ],
              percentiles: { p75: 2751 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9609657947686115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019315895372233396,
                },
                { start: "0.25", density: 0.01971830985915493 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6031874117409726 },
                { start: 200, end: 500, density: 0.2923138995360097 },
                { start: 500, density: 0.1044986887230177 },
              ],
              percentiles: { p75: 274 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2353,
        lcp: 2751,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190093630,
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
                  density: 0.9630421118793212,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015336266499057198,
                },
                { start: "0.25", density: 0.02162162162162161 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6091242259572853 },
                { start: 200, end: 500, density: 0.31265006950587626 },
                { start: 500, density: 0.07822570453683832 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43049555273189305 },
                { start: 800, end: 1800, density: 0.43862770012706453 },
                { start: 1800, density: 0.13087674714104236 },
              ],
              percentiles: { p75: 1341 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.590470139771282 },
                { start: 1800, end: 3000, density: 0.2505717916137224 },
                { start: 3000, density: 0.1589580686149956 },
              ],
              percentiles: { p75: 2457 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649550706033376 },
                { start: 100, end: 300, density: 0.02490372272143774 },
                { start: 300, density: 0.010141206675224645 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.688277087033747 },
                { start: 2500, end: 4000, density: 0.20071047957371213 },
                { start: 4000, density: 0.11101243339254088 },
              ],
              percentiles: { p75: 2815 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2457,
        lcp: 2815,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190094066,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8921892189218923 },
                { start: 1800, end: 3000, density: 0.08630863086308628 },
                { start: 3000, density: 0.021502150215021405 },
              ],
              percentiles: { p75: 1365 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9640035996400361 },
                { start: 100, end: 300, density: 0.019598040195980403 },
                { start: 300, density: 0.01639836016398362 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8613500000000002 },
                { start: 2500, end: 4000, density: 0.1112500000000001 },
                { start: 4000, density: 0.02739999999999981 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8410000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12089999999999998,
                },
                { start: "0.25", density: 0.03810000000000002 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5260999999999996 },
                { start: 200, end: 500, density: 0.35409999999999975 },
                { start: 500, density: 0.11980000000000082 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6622337766223377 },
                { start: 800, end: 1800, density: 0.30996900309969005 },
                { start: 1800, density: 0.027797220277972177 },
              ],
              percentiles: { p75: 904 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1365,
        lcp: 1952,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652190094526,
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
                { start: 0, end: 100, density: 0.9693092072378285 },
                { start: 100, end: 300, density: 0.021893431970408887 },
                { start: 300, density: 0.008797360791762458 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8886888688868888 },
                { start: 2500, end: 4000, density: 0.0845084508450845 },
                { start: 4000, density: 0.026802680268026707 },
              ],
              percentiles: { p75: 1864 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8489 },
                { start: "0.10", end: "0.25", density: 0.1305 },
                { start: "0.25", density: 0.020599999999999997 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7264999999999994 },
                { start: 200, end: 500, density: 0.18439999999999987 },
                { start: 500, density: 0.08910000000000068 },
              ],
              percentiles: { p75: 216 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6783321667833218 },
                { start: 800, end: 1800, density: 0.2827717228277173 },
                { start: 1800, density: 0.03889611038896103 },
              ],
              percentiles: { p75: 889 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8897110288971102 },
                { start: 1800, end: 3000, density: 0.08029197080291972 },
                { start: 3000, density: 0.02999700029996993 },
              ],
              percentiles: { p75: 1347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1347,
        lcp: 1864,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1652190094841,
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
                  density: 0.8564628341266936,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10008543878921032,
                },
                { start: "0.25", density: 0.04345172708409619 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7365188551774966 },
                { start: 200, end: 500, density: 0.2134872865741309 },
                { start: 500, density: 0.04999385824837251 },
              ],
              percentiles: { p75: 205 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5047748976807641 },
                { start: 800, end: 1800, density: 0.38285997767580315 },
                { start: 1800, density: 0.11236512464343287 },
              ],
              percentiles: { p75: 1252 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7552969993876298 },
                { start: 1800, end: 3000, density: 0.14562155541947333 },
                { start: 3000, density: 0.09908144519289676 },
              ],
              percentiles: { p75: 1791 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630718119090212 },
                { start: 100, end: 300, density: 0.02964477383082034 },
                { start: 300, density: 0.007283414260158445 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8026606179499748 },
                { start: 2500, end: 4000, density: 0.11653997057381062 },
                { start: 4000, density: 0.0807994114762147 },
              ],
              percentiles: { p75: 2161 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1791,
        lcp: 2161,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652190095153,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659102269319205 },
                { start: 100, end: 300, density: 0.02689193242027392 },
                { start: 300, density: 0.0071978406478056586 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7043795620437939 },
                { start: 2500, end: 4000, density: 0.16863313668633104 },
                { start: 4000, density: 0.126987301269875 },
              ],
              percentiles: { p75: 2787 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9397 },
                { start: "0.10", end: "0.25", density: 0.0448 },
                { start: "0.25", density: 0.015500000000000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7188843346995899 },
                { start: 200, end: 500, density: 0.22863141057682684 },
                { start: 500, density: 0.05248425472358317 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40922276683004843 },
                { start: 800, end: 1800, density: 0.4572371711513447 },
                { start: 1800, density: 0.1335400620186069 },
              ],
              percentiles: { p75: 1342 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6030206041208251 },
                { start: 1800, end: 3000, density: 0.253450690138028 },
                { start: 3000, density: 0.14352870574114682 },
              ],
              percentiles: { p75: 2346 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2346,
        lcp: 2787,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190095655,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6777177717771783 },
                { start: 2500, end: 4000, density: 0.1633663366336635 },
                { start: 4000, density: 0.15891589158915817 },
              ],
              percentiles: { p75: 3090 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8193999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1318 },
                { start: "0.25", density: 0.04880000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.726809276289484 },
                { start: 200, end: 500, density: 0.21621351459416221 },
                { start: 500, density: 0.05697720911635383 },
              ],
              percentiles: { p75: 209 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41615838416158396 },
                { start: 800, end: 1800, density: 0.4417558244175584 },
                { start: 1800, density: 0.14208579142085762 },
              ],
              percentiles: { p75: 1440 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6333633363336343 },
                { start: 1800, end: 3000, density: 0.20762076207620786 },
                { start: 3000, density: 0.15901590159015788 },
              ],
              percentiles: { p75: 2391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9714028597140285 },
                { start: 100, end: 300, density: 0.023397660233976603 },
                { start: 300, density: 0.005199480051994795 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2391,
        lcp: 3090,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652190096020,
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
                { start: 0, end: 200, density: 0.6031874117409726 },
                { start: 200, end: 500, density: 0.2923138995360097 },
                { start: 500, density: 0.1044986887230177 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.401085141903172 },
                { start: 800, end: 1800, density: 0.4947829716193655 },
                { start: 1800, density: 0.10413188647746252 },
              ],
              percentiles: { p75: 1424 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.639513301711693 },
                { start: 1800, end: 3000, density: 0.2528356362136522 },
                { start: 3000, density: 0.10765106207465468 },
              ],
              percentiles: { p75: 2353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407592824363787 },
                { start: 100, end: 300, density: 0.03379224030037547 },
                { start: 300, density: 0.025448477263245717 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7230643179024993 },
                { start: 2500, end: 4000, density: 0.193773043834494 },
                { start: 4000, density: 0.08316263826300668 },
              ],
              percentiles: { p75: 2751 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9609657947686115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019315895372233396,
                },
                { start: "0.25", density: 0.01971830985915493 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2353,
        lcp: 2751,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652190096349,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9607587433313575 },
                { start: 100, end: 300, density: 0.03272080616478957 },
                { start: 300, density: 0.006520450503852994 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4528236114338839 },
                { start: 2500, end: 4000, density: 0.331164303973972 },
                { start: 4000, density: 0.21601208459214413 },
              ],
              percentiles: { p75: 3824 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9579531015363288,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01663393785375996,
                },
                { start: "0.25", density: 0.025412960609911064 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4787379972565156 },
                { start: 200, end: 500, density: 0.3902606310013717 },
                { start: 500, density: 0.13100137174211254 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2048122747878647 },
                { start: 800, end: 1800, density: 0.5264442636289666 },
                { start: 1800, density: 0.26874346158316864 },
              ],
              percentiles: { p75: 1871 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.33107871720116505 },
                { start: 1800, end: 3000, density: 0.3477551020408151 },
                { start: 3000, density: 0.3211661807580197 },
              ],
              percentiles: { p75: 3470 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3470,
        lcp: 3824,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652190096846,
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
                  density: 0.8752791424743189,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08776239392585976,
                },
                { start: "0.25", density: 0.03695846359982135 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43360218107463366 },
                { start: 200, end: 500, density: 0.32204930137453147 },
                { start: 500, density: 0.24434851755083492 },
              ],
              percentiles: { p75: 487 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35933674604940974 },
                { start: 800, end: 1800, density: 0.39683952815490714 },
                { start: 1800, density: 0.24382372579568315 },
              ],
              percentiles: { p75: 1812 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43256283662477846 },
                { start: 1800, end: 3000, density: 0.25460053859964266 },
                { start: 3000, density: 0.31283662477557883 },
              ],
              percentiles: { p75: 3455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8945712954333639 },
                { start: 100, end: 300, density: 0.06675209692451067 },
                { start: 300, density: 0.0386766076421253 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4818938371569945 },
                { start: 2500, end: 4000, density: 0.24955015744489403 },
                { start: 4000, density: 0.26855600539811153 },
              ],
              percentiles: { p75: 4217 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3455,
        lcp: 4217,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1652190097387,
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
                { start: "0.00", end: "0.10", density: 0.8251 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11389999999999999,
                },
                { start: "0.25", density: 0.061000000000000096 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6791037311193355 },
                { start: 200, end: 500, density: 0.23387016104831437 },
                { start: 500, density: 0.08702610783235011 },
              ],
              percentiles: { p75: 233 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46373912173652065 },
                { start: 800, end: 1800, density: 0.4171251375412621 },
                { start: 1800, density: 0.11913574072221728 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7022702270227014 },
                { start: 1800, end: 3000, density: 0.18591859185918572 },
                { start: 3000, density: 0.11181118111811289 },
              ],
              percentiles: { p75: 2058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583875162548763 },
                { start: 100, end: 300, density: 0.029308792637791334 },
                { start: 300, density: 0.012303691107332324 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7591259125912586 },
                { start: 2500, end: 4000, density: 0.149064906490649 },
                { start: 4000, density: 0.09180918091809245 },
              ],
              percentiles: { p75: 2462 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2058,
        lcp: 2462,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652190097904,
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
                  density: 0.7926792679267927,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16551655165516554,
                },
                { start: "0.25", density: 0.0418041804180418 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6702670267026708 },
                { start: 200, end: 500, density: 0.2257225722572259 },
                { start: 500, density: 0.1040104010401033 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5438087617523502 },
                { start: 800, end: 1800, density: 0.3908781756351269 },
                { start: 1800, density: 0.06531306261252304 },
              ],
              percentiles: { p75: 1123 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7351264873512645 },
                { start: 1800, end: 3000, density: 0.19818018198180168 },
                { start: 3000, density: 0.06669333066693374 },
              ],
              percentiles: { p75: 1849 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638927785557112 },
                { start: 100, end: 300, density: 0.022404480896179236 },
                { start: 300, density: 0.013702740548109563 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7557488502299539 },
                { start: 2500, end: 4000, density: 0.16396720655868818 },
                { start: 4000, density: 0.08028394321135798 },
              ],
              percentiles: { p75: 2474 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1849,
        lcp: 2474,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1652190098210,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9031838856400263 },
                { start: 200, end: 500, density: 0.05328135152696558 },
                { start: 500, density: 0.043534762833008216 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5759787657597876 },
                { start: 800, end: 1800, density: 0.3656270736562706 },
                { start: 1800, density: 0.05839416058394181 },
              ],
              percentiles: { p75: 1080 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7749510763209392 },
                { start: 1800, end: 3000, density: 0.1591650358773646 },
                { start: 3000, density: 0.06588388780169627 },
              ],
              percentiles: { p75: 1791 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9911032028469751 },
                { start: 100, end: 300, density: 0.004744958481613288 },
                { start: 300, density: 0.004151838671411628 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7617970265029089 },
                { start: 2500, end: 4000, density: 0.1263736263736264 },
                { start: 4000, density: 0.11182934712346464 },
              ],
              percentiles: { p75: 2534 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6129032258064516,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2876344086021505,
                },
                { start: "0.25", density: 0.09946236559139777 },
              ],
              percentiles: { p75: "0.14" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 1791, lcp: 2534, cls: "0.14", fid: 2 },
      timestamp: 1652191563250,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8401273885350314 },
                { start: 200, end: 500, density: 0.08216560509554137 },
                { start: 500, density: 0.07770700636942712 },
              ],
              percentiles: { p75: 130 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.502247912652537 },
                { start: 800, end: 1800, density: 0.40205523442517677 },
                { start: 1800, density: 0.09569685292228622 },
              ],
              percentiles: { p75: 1172 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6813602015113345 },
                { start: 1800, end: 3000, density: 0.18891687657430717 },
                { start: 3000, density: 0.12972292191435839 },
              ],
              percentiles: { p75: 2081 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728531855955679 },
                { start: 100, end: 300, density: 0.013296398891966757 },
                { start: 300, density: 0.013850415512465315 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6674036639292493 },
                { start: 2500, end: 4000, density: 0.16771951989892628 },
                { start: 4000, density: 0.16487681617182437 },
              ],
              percentiles: { p75: 3117 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5665349143610013,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.310935441370224,
                },
                { start: "0.25", density: 0.1225296442687747 },
              ],
              percentiles: { p75: "0.16" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 2081, lcp: 3117, cls: "0.16", fid: 3 },
      timestamp: 1652191563676,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.651220521307406 },
                { start: 1800, end: 3000, density: 0.2726520479933803 },
                { start: 3000, density: 0.07612743069921367 },
              ],
              percentiles: { p75: 2111 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803571428571428 },
                { start: 100, end: 300 },
                { start: 300, density: 0.019642857142857142 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6855802047781568 },
                { start: 2500, end: 4000, density: 0.24274744027303746 },
                { start: 4000, density: 0.07167235494880571 },
              ],
              percentiles: { p75: 2822 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4679345422379477,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.22202565236620958,
                },
                { start: "0.25", density: 0.3100398053958427 },
              ],
              percentiles: { p75: "0.27" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9038076152304608 },
                { start: 200, end: 500, density: 0.05410821643286573 },
                { start: 500, density: 0.04208416833667334 },
              ],
              percentiles: { p75: 104 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33234169145771375 },
                { start: 800, end: 1800, density: 0.5082872928176799 },
                { start: 1800, density: 0.15937101572460635 },
              ],
              percentiles: { p75: 1540 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 2111, lcp: 2822, cls: "0.27", fid: 2 },
      timestamp: 1652191563935,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8553459119496856,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12264150943396226,
                },
                { start: "0.25", density: 0.022012578616352193 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9436222692036647 },
                { start: 200, end: 500, density: 0.03241719520789288 },
                { start: 500, density: 0.023960535588442456 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7059913526868438 },
                { start: 800, end: 1800, density: 0.26683137739345275 },
                { start: 1800, density: 0.02717726991970354 },
              ],
              percentiles: { p75: 839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9202719406674906 },
                { start: 1800, end: 3000, density: 0.06180469715698392 },
                { start: 3000, density: 0.017923362175525398 },
              ],
              percentiles: { p75: 1227 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9975520195838433 },
                { start: 100, end: 300, density: 0.002447980416156671 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8586014851485146 },
                { start: 2500, end: 4000, density: 0.10983910891089109 },
                { start: 4000, density: 0.03155940594059423 },
              ],
              percentiles: { p75: 1999 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1227, lcp: 1999, cls: "0.08", fid: 2 },
      timestamp: 1652191564218,
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
                  density: 0.8965517241379309,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06896551724137931,
                },
                { start: "0.25", density: 0.03448275862068967 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2189349112426034 },
                { start: 800, end: 1800, density: 0.5443786982248517 },
                { start: 1800, density: 0.2366863905325449 },
              ],
              percentiles: { p75: 1940 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.40000000000000024 },
                { start: 1800, end: 3000, density: 0.3862068965517243 },
                { start: 3000, density: 0.2137931034482755 },
              ],
              percentiles: { p75: 3066 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49640287769784175 },
                { start: 2500, end: 4000, density: 0.2733812949640288 },
                { start: 4000, density: 0.23021582733812945 },
              ],
              percentiles: { p75: 3942 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 3066, lcp: 3942, cls: "0.04" },
      timestamp: 1652191564429,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9458495460440985 },
                { start: 200, end: 500, density: 0.036964980544747096 },
                { start: 500, density: 0.01718547341115438 },
              ],
              percentiles: { p75: 70 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4378094059405944 },
                { start: 800, end: 1800, density: 0.41893564356435675 },
                { start: 1800, density: 0.14325495049504877 },
              ],
              percentiles: { p75: 1473 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7260695598645736 },
                { start: 1800, end: 3000, density: 0.19175130809479835 },
                { start: 3000, density: 0.0821791320406281 },
              ],
              percentiles: { p75: 1993 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9984662576687116 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0015337423312883436 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.746361102508517 },
                { start: 2500, end: 4000, density: 0.15113038092288644 },
                { start: 4000, density: 0.10250851656859647 },
              ],
              percentiles: { p75: 2640 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5183296142811604,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3289767293592605,
                },
                { start: "0.25", density: 0.1526936563595791 },
              ],
              percentiles: { p75: "0.21" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 1993, lcp: 2640, cls: "0.21", fid: 2 },
      timestamp: 1652191564644,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5692739389687829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31234654507190457,
                },
                { start: "0.25", density: 0.11837951595931256 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9751191106405505 },
                { start: 200, end: 500, density: 0.008117169578260102 },
                { start: 500, density: 0.01676371978118934 },
              ],
              percentiles: { p75: 59 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4006861063464837 },
                { start: 800, end: 1800, density: 0.49999999999999994 },
                { start: 1800, density: 0.09931389365351632 },
              ],
              percentiles: { p75: 1374 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7721934369602764 },
                { start: 1800, end: 3000, density: 0.1690846286701209 },
                { start: 3000, density: 0.05872193436960275 },
              ],
              percentiles: { p75: 1792 },
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
                { start: 0, end: 2500, density: 0.7950548493818564 },
                { start: 2500, end: 4000, density: 0.128156016019502 },
                { start: 4000, density: 0.07678913459864169 },
              ],
              percentiles: { p75: 2263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 1792, lcp: 2263, cls: "0.16", fid: 2 },
      timestamp: 1652191564870,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.my" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.998158379373849 },
                { start: 100, end: 300, density: 0.001841620626151013 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.88284632034632 },
                { start: 2500, end: 4000, density: 0.07007575757575758 },
                { start: 4000, density: 0.04707792207792241 },
              ],
              percentiles: { p75: 1699 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5035971223021581,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3132263420033204,
                },
                { start: "0.25", density: 0.18317653569452147 },
              ],
              percentiles: { p75: "0.21" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9579514824797845 },
                { start: 200, end: 500, density: 0.021024258760107814 },
                { start: 500, density: 0.02102425876010787 },
              ],
              percentiles: { p75: 59 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5989717223650385 },
                { start: 800, end: 1800, density: 0.3434447300771209 },
                { start: 1800, density: 0.057583547557840696 },
              ],
              percentiles: { p75: 1019 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8646003262642737 },
                { start: 1800, end: 3000, density: 0.08809135399673734 },
                { start: 3000, density: 0.04730831973898892 },
              ],
              percentiles: { p75: 1363 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1363, lcp: 1699, cls: "0.21", fid: 2 },
      timestamp: 1652191565085,
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
                  density: 0.7541899441340782,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20577281191806335,
                },
                { start: "0.25", density: 0.04003724394785847 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9145146927871771 },
                { start: 200, end: 500, density: 0.048975957257346395 },
                { start: 500, density: 0.036509349955476444 },
              ],
              percentiles: { p75: 88 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4950405770964831 },
                { start: 800, end: 1800, density: 0.3940486925157798 },
                { start: 1800, density: 0.11091073038773722 },
              ],
              percentiles: { p75: 1374 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7937219730941704 },
                { start: 1800, end: 3000, density: 0.12914798206278033 },
                { start: 3000, density: 0.07713004484304929 },
              ],
              percentiles: { p75: 1930 },
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
                { start: 0, end: 2500, density: 0.7543064369900273 },
                { start: 2500, end: 4000, density: 0.14505893019038987 },
                { start: 4000, density: 0.1006346328195828 },
              ],
              percentiles: { p75: 3025 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: { fcp: 1930, lcp: 3025, cls: "0.09", fid: 2 },
      timestamp: 1652191565314,
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
                { start: 0, end: 800, density: 0.3396805896805895 },
                { start: 800, end: 1800, density: 0.42199017199017186 },
                { start: 1800, density: 0.23832923832923852 },
              ],
              percentiles: { p75: 1746 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6441958887545344 },
                { start: 1800, end: 3000, density: 0.22309552599758165 },
                { start: 3000, density: 0.1327085852478839 },
              ],
              percentiles: { p75: 2199 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9837853773584906 },
                { start: 100, end: 300, density: 0.007370283018867923 },
                { start: 300, density: 0.008844339622641485 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6712538226299691 },
                { start: 2500, end: 4000, density: 0.19571865443425068 },
                { start: 4000, density: 0.13302752293578016 },
              ],
              percentiles: { p75: 2901 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.46409364125276803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3223663397658968,
                },
                { start: "0.25", density: 0.21354001898133526 },
              ],
              percentiles: { p75: "0.22" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9212846347607052 },
                { start: 200, end: 500, density: 0.04376574307304785 },
                { start: 500, density: 0.03494962216624692 },
              ],
              percentiles: { p75: 84 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 2199, lcp: 2901, cls: "0.22", fid: 3 },
      timestamp: 1652191565558,
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
                { start: 0, end: 100, density: 0.9923165578179024 },
                { start: 100, end: 300, density: 0.0030733768728390316 },
                { start: 300, density: 0.00461006530925855 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7491047448522834 },
                { start: 2500, end: 4000, density: 0.14033124440465541 },
                { start: 4000, density: 0.1105640107430613 },
              ],
              percentiles: { p75: 2561 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7924616100511865,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16426244765006978,
                },
                { start: "0.25", density: 0.04327594229874358 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8833405079638397 },
                { start: 200, end: 500, density: 0.0581145071028842 },
                { start: 500, density: 0.05854498493327608 },
              ],
              percentiles: { p75: 99 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4356979405034325 },
                { start: 800, end: 1800, density: 0.4983981693363844 },
                { start: 1800, density: 0.06590389016018303 },
              ],
              percentiles: { p75: 1219 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7056737588652485 },
                { start: 1800, end: 3000, density: 0.20168439716312062 },
                { start: 3000, density: 0.09264184397163086 },
              ],
              percentiles: { p75: 1983 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 1983, lcp: 2561, cls: "0.08", fid: 3 },
      timestamp: 1652191565777,
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
                  density: 0.7902298850574714,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16954022988505751,
                },
                { start: "0.25", density: 0.040229885057471215 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8409658617818483 },
                { start: 200, end: 500, density: 0.07493755203996669 },
                { start: 500, density: 0.08409658617818502 },
              ],
              percentiles: { p75: 124 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5974282888229475 },
                { start: 800, end: 1800, density: 0.34025717111770515 },
                { start: 1800, density: 0.06231454005934737 },
              ],
              percentiles: { p75: 1074 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7523020257826889 },
                { start: 1800, end: 3000, density: 0.14917127071823208 },
                { start: 3000, density: 0.09852670349907917 },
              ],
              percentiles: { p75: 1876 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9787384833451453 },
                { start: 100, end: 300, density: 0.013465627214741318 },
                { start: 300, density: 0.0077958894401134 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7190605239385732 },
                { start: 2500, end: 4000, density: 0.14814814814814828 },
                { start: 4000, density: 0.13279132791327858 },
              ],
              percentiles: { p75: 2782 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: { fcp: 1876, lcp: 2782, cls: "0.09", fid: 3 },
      timestamp: 1652191565953,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7615219721329046,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20096463022508038,
                },
                { start: "0.25", density: 0.03751339764201501 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9324099722991689 },
                { start: 200, end: 500, density: 0.03933518005540166 },
                { start: 500, density: 0.028254847645429407 },
              ],
              percentiles: { p75: 80 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.9269746646795828 },
                { start: 800, end: 1800, density: 0.05663189269746646 },
                { start: 1800, density: 0.016393442622950827 },
              ],
              percentiles: { p75: 519 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9559357179885951 },
                { start: 1800, end: 3000, density: 0.031104199066874037 },
                { start: 3000, density: 0.012960082944530849 },
              ],
              percentiles: { p75: 898 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9941520467836257 },
                { start: 100, end: 300, density: 0.0038986354775828462 },
                { start: 300, density: 0.0019493177387914231 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9508625196027182 },
                { start: 2500, end: 4000, density: 0.037114479874542604 },
                { start: 4000, density: 0.012023000522739151 },
              ],
              percentiles: { p75: 1440 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 898, lcp: 1440, cls: "0.09", fid: 2 },
      timestamp: 1652191566122,
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
                { start: 0, end: 1800, density: 0.7946210268948654 },
                { start: 1800, end: 3000, density: 0.15892420537897314 },
                { start: 3000, density: 0.04645476772616147 },
              ],
              percentiles: { p75: 1651 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.945409429280397 },
                { start: 100, end: 300, density: 0.03970223325062034 },
                { start: 300, density: 0.01488833746898264 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.742718446601942 },
                { start: 2500, end: 4000, density: 0.1723300970873787 },
                { start: 4000, density: 0.0849514563106793 },
              ],
              percentiles: { p75: 2537 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8878048780487805,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09756097560975609,
                },
                { start: "0.25", density: 0.014634146341463419 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5312500000000003 },
                { start: 200, end: 500, density: 0.3293269230769233 },
                { start: 500, density: 0.13942307692307637 },
              ],
              percentiles: { p75: 316 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6342105263157893 },
                { start: 800, end: 1800, density: 0.3210526315789473 },
                { start: 1800, density: 0.04473684210526324 },
              ],
              percentiles: { p75: 947 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1651,
        lcp: 2537,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652191566301,
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
                  density: 0.9342560553633218,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05363321799307959,
                },
                { start: "0.25", density: 0.012110726643598618 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.23038397328881444 },
                { start: 200, end: 500, density: 0.5559265442404001 },
                { start: 500, density: 0.2136894824707854 },
              ],
              percentiles: { p75: 455 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6745886654478976 },
                { start: 800, end: 1800, density: 0.30347349177330896 },
                { start: 1800, density: 0.021937842778793425 },
              ],
              percentiles: { p75: 905 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8797909407665506 },
                { start: 1800, end: 3000, density: 0.09581881533101044 },
                { start: 3000, density: 0.024390243902439032 },
              ],
              percentiles: { p75: 1440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9528985507246376 },
                { start: 100, end: 300, density: 0.02898550724637681 },
                { start: 300, density: 0.018115942028985522 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.781303602058319 },
                { start: 2500, end: 4000, density: 0.16209262435677532 },
                { start: 4000, density: 0.0566037735849057 },
              ],
              percentiles: { p75: 2311 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1440,
        lcp: 2311,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1652191566476,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9132920438303954 },
                { start: 2500, end: 4000, density: 0.05955216769890422 },
                { start: 4000, density: 0.02715578847070047 },
              ],
              percentiles: { p75: 1597 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.43792434529582924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3491755577109602,
                },
                { start: "0.25", density: 0.21290009699321052 },
              ],
              percentiles: { p75: "0.24" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9642481598317562 },
                { start: 200, end: 500, density: 0.022607781282860145 },
                { start: 500, density: 0.013144058885383763 },
              ],
              percentiles: { p75: 72 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8305726455276857 },
                { start: 800, end: 1800, density: 0.14055844770468529 },
                { start: 1800, density: 0.028868906767629033 },
              ],
              percentiles: { p75: 676 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9412878787878788 },
                { start: 1800, end: 3000, density: 0.040246212121212134 },
                { start: 3000, density: 0.01846590909090907 },
              ],
              percentiles: { p75: 1013 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9939969984992496 },
                { start: 100, end: 300, density: 0.006003001500750375 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1013, lcp: 1597, cls: "0.24", fid: 2 },
      timestamp: 1652191566717,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9962490622655664 },
                { start: 100, end: 300, density: 0.0037509377344336083 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7095006090133983 },
                { start: 2500, end: 4000, density: 0.16017052375152238 },
                { start: 4000, density: 0.13032886723507928 },
              ],
              percentiles: { p75: 2873 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7936375052323148,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18166596902469653,
                },
                { start: "0.25", density: 0.024696525742988685 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9132231404958678 },
                { start: 200, end: 500, density: 0.04917355371900825 },
                { start: 500, density: 0.037603305785123914 },
              ],
              percentiles: { p75: 84 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3989983305509181 },
                { start: 800, end: 1800, density: 0.4787145242070116 },
                { start: 1800, density: 0.12228714524207027 },
              ],
              percentiles: { p75: 1423 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6980598221503636 },
                { start: 1800, end: 3000, density: 0.22271624898949066 },
                { start: 3000, density: 0.07922392886014572 },
              ],
              percentiles: { p75: 2044 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2044, lcp: 2873, cls: "0.08", fid: 2 },
      timestamp: 1652191566938,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9461451247165533 },
                { start: 200, end: 500, density: 0.029478458049886625 },
                { start: 500, density: 0.024376417233560103 },
              ],
              percentiles: { p75: 85 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5351681957186544 },
                { start: 800, end: 1800, density: 0.41946992864424054 },
                { start: 1800, density: 0.045361875637105004 },
              ],
              percentiles: { p75: 1105 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7803784860557766 },
                { start: 1800, end: 3000, density: 0.16334661354581664 },
                { start: 3000, density: 0.05627490039840665 },
              ],
              percentiles: { p75: 1725 },
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
                { start: 0, end: 2500, density: 0.6708229426433919 },
                { start: 2500, end: 4000, density: 0.12518703241895265 },
                { start: 4000, density: 0.2039900249376555 },
              ],
              percentiles: { p75: 3389 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8008109477952358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17131272174353776,
                },
                { start: "0.25", density: 0.02787633046122656 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 1725, lcp: 3389, cls: "0.06", fid: 3 },
      timestamp: 1652191567171,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9511186770428016 },
                { start: 200, end: 500, density: 0.031128404669260708 },
                { start: 500, density: 0.01775291828793774 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8213973799126638 },
                { start: 800, end: 1800, density: 0.1556768558951965 },
                { start: 1800, density: 0.02292576419213975 },
              ],
              percentiles: { p75: 721 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9343163538873994 },
                { start: 1800, end: 3000, density: 0.04647006255585344 },
                { start: 3000, density: 0.01921358355674712 },
              ],
              percentiles: { p75: 1034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9951348960636887 },
                { start: 100, end: 300, density: 0.0024325519681556835 },
                { start: 300, density: 0.0024325519681556835 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9181695220919748 },
                { start: 2500, end: 4000, density: 0.054553651938683514 },
                { start: 4000, density: 0.02727682596934176 },
              ],
              percentiles: { p75: 1657 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5535265921022599,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31842045195160923,
                },
                { start: "0.25", density: 0.128052955946131 },
              ],
              percentiles: { p75: "0.15" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1034, lcp: 1657, cls: "0.15", fid: 2 },
      timestamp: 1652191567346,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ma" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7485432541461229 },
                { start: 800, end: 1800, density: 0.20035858359480052 },
                { start: 1800, density: 0.05109816225907667 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8654099079351163 },
                { start: 1800, end: 3000, density: 0.08329679964927665 },
                { start: 3000, density: 0.051293292415607025 },
              ],
              percentiles: { p75: 1333 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8263672743441529 },
                { start: 2500, end: 4000, density: 0.11182747887950198 },
                { start: 4000, density: 0.06180524677634513 },
              ],
              percentiles: { p75: 2108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1333, lcp: 2108 },
      timestamp: 1652191567524,
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
                { start: 0, end: 800, density: 0.5404425099746103 },
                { start: 800, end: 1800, density: 0.35872324990932186 },
                { start: 1800, density: 0.100834240116068 },
              ],
              percentiles: { p75: 1273 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7694556083302888 },
                { start: 1800, end: 3000, density: 0.11728169528681036 },
                { start: 3000, density: 0.1132626963829009 },
              ],
              percentiles: { p75: 1862 },
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
                { start: 0, end: 2500, density: 0.7301962209302327 },
                { start: 2500, end: 4000, density: 0.11282703488372098 },
                { start: 4000, density: 0.15697674418604626 },
              ],
              percentiles: { p75: 3029 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.48419864559819414,
                },
                { start: "0.10", end: "0.25", density: 0.4104589917231 },
                { start: "0.25", density: 0.10534236267870586 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8829496683573937 },
                { start: 200, end: 500, density: 0.03628560280920795 },
                { start: 500, density: 0.08076472883339832 },
              ],
              percentiles: { p75: 77 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 1862, lcp: 3029, cls: "0.16", fid: 3 },
      timestamp: 1652191567842,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.dk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7666863555818075 },
                { start: 800, end: 1800, density: 0.19393581413664107 },
                { start: 1800, density: 0.039377830281551285 },
              ],
              percentiles: { p75: 782 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9202369200394865 },
                { start: 1800, end: 3000, density: 0.060217176702862765 },
                { start: 3000, density: 0.01954590325765069 },
              ],
              percentiles: { p75: 1139 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9960714987232371 },
                { start: 100, end: 300, density: 0.003928501276762915 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.89438157633512 },
                { start: 2500, end: 4000, density: 0.08318443517967042 },
                { start: 4000, density: 0.022433988485209597 },
              ],
              percentiles: { p75: 1720 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.760267044305078,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21424236293748736,
                },
                { start: "0.25", density: 0.025490592757434736 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9695530123083567 },
                { start: 200, end: 500, density: 0.028719499028287625 },
                { start: 500, density: 0.0017274886633556468 },
              ],
              percentiles: { p75: 70 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1139, lcp: 1720, cls: "0.09", fid: 2 },
      timestamp: 1652191568083,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9837537409149208 },
                { start: 100, end: 300, density: 0.009405728943993158 },
                { start: 300, density: 0.006840530141085904 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8278763074124607 },
                { start: 2500, end: 4000, density: 0.11664392905866308 },
                { start: 4000, density: 0.05547976352887624 },
              ],
              percentiles: { p75: 2177 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.48974130240856373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3630686886708296,
                },
                { start: "0.25", density: 0.1471900089206068 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8723201524535493 },
                { start: 200, end: 500, density: 0.06812767984754646 },
                { start: 500, density: 0.0595521676989041 },
              ],
              percentiles: { p75: 105 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7195281782437746 },
                { start: 800, end: 1800, density: 0.22892092616863255 },
                { start: 1800, density: 0.05155089558759293 },
              ],
              percentiles: { p75: 851 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.823937554206418 },
                { start: 1800, end: 3000, density: 0.1019080659150043 },
                { start: 3000, density: 0.07415437987857769 },
              ],
              percentiles: { p75: 1473 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 1473, lcp: 2177, cls: "0.16", fid: 2 },
      timestamp: 1652191568329,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7013724562233795 },
                { start: 2500, end: 4000, density: 0.15854235683861814 },
                { start: 4000, density: 0.14008518693800223 },
              ],
              percentiles: { p75: 2864 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.79119804400978 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1623471882640587,
                },
                { start: "0.25", density: 0.04645476772616134 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.904647819837087 },
                { start: 200, end: 500, density: 0.055103018687110705 },
                { start: 500, density: 0.04024916147580227 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4700374531835209 },
                { start: 800, end: 1800, density: 0.4494382022471911 },
                { start: 1800, density: 0.08052434456928799 },
              ],
              percentiles: { p75: 1223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6970837253057384 },
                { start: 1800, end: 3000, density: 0.19849482596425205 },
                { start: 3000, density: 0.10442144873000961 },
              ],
              percentiles: { p75: 2064 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9927699954812472 },
                { start: 100, end: 300, density: 0.005422503389064619 },
                { start: 300, density: 0.0018075011296882063 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2064, lcp: 2864, cls: "0.07", fid: 2 },
      timestamp: 1652191568584,
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
                { start: 0, end: 800, density: 0.6011834319526629 },
                { start: 800, end: 1800, density: 0.32189349112426036 },
                { start: 1800, density: 0.07692307692307682 },
              ],
              percentiles: { p75: 1141 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8387096774193543 },
                { start: 1800, end: 3000, density: 0.09318996415770603 },
                { start: 3000, density: 0.06810035842293954 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9961240310077519 },
                { start: 100, end: 300, density: 0.002906976744186047 },
                { start: 300, density: 0.0009689922480620156 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8168028004667445 },
                { start: 2500, end: 4000, density: 0.1038506417736289 },
                { start: 4000, density: 0.07934655775962653 },
              ],
              percentiles: { p75: 2076 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5487804878048781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2914634146341463,
                },
                { start: "0.25", density: 0.1597560975609755 },
              ],
              percentiles: { p75: "0.19" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9105882352941178 },
                { start: 200, end: 500, density: 0.038823529411764715 },
                { start: 500, density: 0.050588235294117545 },
              ],
              percentiles: { p75: 72 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 1518, lcp: 2076, cls: "0.19", fid: 2 },
      timestamp: 1652191569009,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9845474613686533,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011037527593818985,
                },
                { start: "0.25", density: 0.004415011037527594 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4517543859649124 },
                { start: 200, end: 500, density: 0.3728070175438597 },
                { start: 500, density: 0.17543859649122798 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4563318777292576 },
                { start: 800, end: 1800, density: 0.30349344978165943 },
                { start: 1800, density: 0.240174672489083 },
              ],
              percentiles: { p75: 1800 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5259593679458237 },
                { start: 1800, end: 3000, density: 0.3273137697516929 },
                { start: 3000, density: 0.14672686230248347 },
              ],
              percentiles: { p75: 2581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8571428571428574 },
                { start: 100, end: 300, density: 0.10204081632653063 },
                { start: 300, density: 0.04081632653061201 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5519911504424775 },
                { start: 2500, end: 4000, density: 0.2732300884955751 },
                { start: 4000, density: 0.17477876106194748 },
              ],
              percentiles: { p75: 3487 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2581,
        lcp: 3487,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1652191569260,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ru" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9950358521787094 },
                { start: 100, end: 300, density: 0.003309431880860452 },
                { start: 300, density: 0.001654715940430226 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8222222222222221 },
                { start: 2500, end: 4000, density: 0.11437908496732029 },
                { start: 4000, density: 0.06339869281045751 },
              ],
              percentiles: { p75: 2045 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8271604938271605,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15294924554183814,
                },
                { start: "0.25", density: 0.01989026063100138 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9590878604963112 },
                { start: 200, end: 500, density: 0.02146210596914823 },
                { start: 500, density: 0.01945003353454054 },
              ],
              percentiles: { p75: 60 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6370860927152318 },
                { start: 800, end: 1800, density: 0.26688741721854303 },
                { start: 1800, density: 0.09602649006622517 },
              ],
              percentiles: { p75: 1092 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7989382879893832 },
                { start: 1800, end: 3000, density: 0.13735899137359 },
                { start: 3000, density: 0.06370272063702681 },
              ],
              percentiles: { p75: 1627 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 1627, lcp: 2045, cls: "0.08", fid: 2 },
      timestamp: 1652191569466,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lv" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9473372781065088 },
                { start: 200, end: 500, density: 0.031360946745562134 },
                { start: 500, density: 0.02130177514792897 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6763771186440679 },
                { start: 800, end: 1800, density: 0.2997881355932203 },
                { start: 1800, density: 0.023834745762711874 },
              ],
              percentiles: { p75: 926 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8985270049099835 },
                { start: 1800, end: 3000, density: 0.08183306055646479 },
                { start: 3000, density: 0.019639934533551624 },
              ],
              percentiles: { p75: 1331 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9970443349753695 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0029556650246305416 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8315847598012148 },
                { start: 2500, end: 4000, density: 0.1341800110436223 },
                { start: 4000, density: 0.03423522915516295 },
              ],
              percentiles: { p75: 2152 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9070028011204481,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07170868347338934,
                },
                { start: "0.25", density: 0.02128851540616247 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1331, lcp: 2152, cls: "0.05", fid: 2 },
      timestamp: 1652191569645,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9313725490196078,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0392156862745098,
                },
                { start: "0.25", density: 0.029411764705882366 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.305418719211823 },
                { start: 200, end: 500, density: 0.46305418719211877 },
                { start: 500, density: 0.23152709359605828 },
              ],
              percentiles: { p75: 428 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3286384976525819 },
                { start: 800, end: 1800, density: 0.4413145539906101 },
                { start: 1800, density: 0.2300469483568081 },
              ],
              percentiles: { p75: 1870 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5380952380952381 },
                { start: 1800, end: 3000, density: 0.3047619047619047 },
                { start: 3000, density: 0.15714285714285725 },
              ],
              percentiles: { p75: 2592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8851674641148325 },
                { start: 100, end: 300, density: 0.0478468899521531 },
                { start: 300, density: 0.06698564593301448 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5476190476190478 },
                { start: 2500, end: 4000, density: 0.280952380952381 },
                { start: 4000, density: 0.17142857142857118 },
              ],
              percentiles: { p75: 3517 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2592,
        lcp: 3517,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1652191569949,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.957066189624329,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025044722719141318,
                },
                { start: "0.25", density: 0.01788908765652952 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9128672745694023 },
                { start: 200, end: 500, density: 0.05876393110435666 },
                { start: 500, density: 0.02836879432624099 },
              ],
              percentiles: { p75: 91 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7110332749562172 },
                { start: 800, end: 1800, density: 0.2679509632224168 },
                { start: 1800, density: 0.021015761821366028 },
              ],
              percentiles: { p75: 865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8603839441535778 },
                { start: 1800, end: 3000, density: 0.10907504363001741 },
                { start: 3000, density: 0.030541012216404848 },
              ],
              percentiles: { p75: 1448 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9960691823899371 },
                { start: 100, end: 300, density: 0.003930817610062892 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7791811846689896 },
                { start: 2500, end: 4000, density: 0.1572299651567944 },
                { start: 4000, density: 0.06358885017421599 },
              ],
              percentiles: { p75: 2347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1448, lcp: 2347, cls: "0.03", fid: 2 },
      timestamp: 1652191570231,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9481522338665196 },
                { start: 200, end: 500, density: 0.03474903474903474 },
                { start: 500, density: 0.017098731384445585 },
              ],
              percentiles: { p75: 71 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8506653523903401 },
                { start: 800, end: 1800, density: 0.1266633809758502 },
                { start: 1800, density: 0.022671266633809688 },
              ],
              percentiles: { p75: 650 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9085886489201405 },
                { start: 1800, end: 3000, density: 0.056755399296835735 },
                { start: 3000, density: 0.034655951783023685 },
              ],
              percentiles: { p75: 1145 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9975478175576263 },
                { start: 100, end: 300, density: 0.0004904364884747426 },
                { start: 300, density: 0.00196174595389897 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8848272408612918 },
                { start: 2500, end: 4000, density: 0.07160741111667504 },
                { start: 4000, density: 0.04356534802203318 },
              ],
              percentiles: { p75: 1750 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.953204476093591,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02644964394710071,
                },
                { start: "0.25", density: 0.020345879959308227 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1145, lcp: 1750, cls: "0.03", fid: 2 },
      timestamp: 1652191570477,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5653128430296378,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.36158068057080134,
                },
                { start: "0.25", density: 0.073106476399561 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9380434782608696 },
                { start: 200, end: 500, density: 0.030434782608695643 },
                { start: 500, density: 0.03152173913043464 },
              ],
              percentiles: { p75: 78 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8041764329852974 },
                { start: 800, end: 1800, density: 0.1583209034732581 },
                { start: 1800, density: 0.03750266354144449 },
              ],
              percentiles: { p75: 698 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9253795167842634 },
                { start: 1800, end: 3000, density: 0.036989523198631635 },
                { start: 3000, density: 0.037630960017105024 },
              ],
              percentiles: { p75: 1024 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.996597916223687 },
                { start: 100, end: 300, density: 0.002551562832234744 },
                { start: 300, density: 0.000850520944078248 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8736570691877954 },
                { start: 2500, end: 4000, density: 0.07520412548345509 },
                { start: 4000, density: 0.05113880532874946 },
              ],
              percentiles: { p75: 1695 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1024, lcp: 1695, cls: "0.14", fid: 2 },
      timestamp: 1652191570740,
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
                  density: 0.9136690647482014,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06474820143884892,
                },
                { start: "0.25", density: 0.021582733812949652 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6369863013698629 },
                { start: 200, end: 500, density: 0.2671232876712329 },
                { start: 500, density: 0.09589041095890419 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7375886524822695 },
                { start: 800, end: 1800, density: 0.21276595744680848 },
                { start: 1800, density: 0.04964539007092201 },
              ],
              percentiles: { p75: 958 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.804195804195804 },
                { start: 1800, end: 3000, density: 0.15384615384615388 },
                { start: 3000, density: 0.04195804195804196 },
              ],
              percentiles: { p75: 1806 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597315436241609 },
                { start: 100, end: 300, density: 0.033557046979865765 },
                { start: 300, density: 0.006711409395973153 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.767361111111111 },
                { start: 2500, end: 4000, density: 0.16319444444444436 },
                { start: 4000, density: 0.06944444444444468 },
              ],
              percentiles: { p75: 2803 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1806,
        lcp: 2803,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1652191571052,
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
                  density: 0.6297807241203467,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2893931667516574,
                },
                { start: "0.25", density: 0.08082610912799605 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9737483085250339 },
                { start: 200, end: 500, density: 0.016779431664411367 },
                { start: 500, density: 0.009472259810554825 },
              ],
              percentiles: { p75: 66 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8827911596722126 },
                { start: 800, end: 1800, density: 0.10479264961509806 },
                { start: 1800, density: 0.012416190712689354 },
              ],
              percentiles: { p75: 588 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9636452959960696 },
                { start: 1800, end: 3000, density: 0.030459346597887495 },
                { start: 3000, density: 0.005895357406042742 },
              ],
              percentiles: { p75: 881 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.996144578313253 },
                { start: 100, end: 300, density: 0.002891566265060241 },
                { start: 300, density: 0.0009638554216867469 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9579065700724456 },
                { start: 2500, end: 4000, density: 0.03260054958780914 },
                { start: 4000, density: 0.009492880339745187 },
              ],
              percentiles: { p75: 1446 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 881, lcp: 1446, cls: "0.12", fid: 2 },
      timestamp: 1652191571335,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cl" },
          metrics: {
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
                { start: 0, end: 2500, density: 0.690570643881599 },
                { start: 2500, end: 4000, density: 0.15471467805920053 },
                { start: 4000, density: 0.15471467805920056 },
              ],
              percentiles: { p75: 3050 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5634115409004439,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2685478757133798,
                },
                { start: "0.25", density: 0.1680405833861763 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.943670690188796 },
                { start: 200, end: 500, density: 0.028783658310120697 },
                { start: 500, density: 0.027545651501083283 },
              ],
              percentiles: { p75: 73 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37185461323392355 },
                { start: 800, end: 1800, density: 0.5396085740913327 },
                { start: 1800, density: 0.08853681267474386 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6752450980392158 },
                { start: 1800, end: 3000, density: 0.2199754901960785 },
                { start: 3000, density: 0.10477941176470565 },
              ],
              percentiles: { p75: 2098 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2098, lcp: 3050, cls: "0.16", fid: 2 },
      timestamp: 1652191571585,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9416887542597502 },
                { start: 1800, end: 3000, density: 0.03937902309731164 },
                { start: 3000, density: 0.01893222264293821 },
              ],
              percentiles: { p75: 1066 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9992902767920512 },
                { start: 100, end: 300, density: 0.0007097232079489 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9027303754266212 },
                { start: 2500, end: 4000, density: 0.07451649601820248 },
                { start: 4000, density: 0.022753128555176277 },
              ],
              percentiles: { p75: 1703 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6200392927308446,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30884086444007847,
                },
                { start: "0.25", density: 0.07111984282907685 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.964876867178038 },
                { start: 200, end: 500, density: 0.0222042793702059 },
                { start: 500, density: 0.012918853451756135 },
              ],
              percentiles: { p75: 71 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7907669396872674 },
                { start: 800, end: 1800, density: 0.19210722263588975 },
                { start: 1800, density: 0.017125837676842903 },
              ],
              percentiles: { p75: 739 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 1066, lcp: 1703, cls: "0.12", fid: 2 },
      timestamp: 1652191571834,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fi" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7322335025380712 },
                { start: 800, end: 1800, density: 0.24957698815566834 },
                { start: 1800, density: 0.018189509306260586 },
              ],
              percentiles: { p75: 829 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9433805162364697 },
                { start: 1800, end: 3000, density: 0.04496253122398001 },
                { start: 3000, density: 0.011656952539550363 },
              ],
              percentiles: { p75: 1149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.995674740484429 },
                { start: 100, end: 300, density: 0.003460207612456748 },
                { start: 300, density: 0.000865051903114187 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8928875638841568 },
                { start: 2500, end: 4000, density: 0.09050255536626912 },
                { start: 4000, density: 0.016609880749574042 },
              ],
              percentiles: { p75: 1804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5449313855688358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.349269588313413,
                },
                { start: "0.25", density: 0.10579902611775124 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9331719128329299 },
                { start: 200, end: 500, density: 0.04939467312348668 },
                { start: 500, density: 0.017433414043583433 },
              ],
              percentiles: { p75: 87 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1149, lcp: 1804, cls: "0.15", fid: 2 },
      timestamp: 1652191572089,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.se" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7205240174672488 },
                { start: 800, end: 1800, density: 0.2598253275109171 },
                { start: 1800, density: 0.019650655021834055 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9079229122055674 },
                { start: 1800, end: 3000, density: 0.0728051391862955 },
                { start: 3000, density: 0.01927194860813703 },
              ],
              percentiles: { p75: 1399 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9288702928870294 },
                { start: 100, end: 300, density: 0.025104602510460254 },
                { start: 300, density: 0.046025104602510435 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8161290322580645 },
                { start: 2500, end: 4000, density: 0.1387096774193548 },
                { start: 4000, density: 0.045161290322580774 },
              ],
              percentiles: { p75: 2251 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9319148936170212,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05319148936170213,
                },
                { start: "0.25", density: 0.014893617021276605 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37672583826430045 },
                { start: 200, end: 500, density: 0.41617357001972466 },
                { start: 500, density: 0.20710059171597492 },
              ],
              percentiles: { p75: 407 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1399,
        lcp: 2251,
        cls: "0.03",
        fid: 16,
      },
      timestamp: 1652191572331,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9403578528827037 },
                { start: 100, end: 300, density: 0.019880715705765405 },
                { start: 300, density: 0.03976143141153088 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8001912045889102 },
                { start: 2500, end: 4000, density: 0.15774378585086046 },
                { start: 4000, density: 0.04206500956022945 },
              ],
              percentiles: { p75: 2262 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.888030888030888,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07335907335907338,
                },
                { start: "0.25", density: 0.0386100386100386 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44105691056910573 },
                { start: 200, end: 500, density: 0.42073170731707343 },
                { start: 500, density: 0.13821138211382086 },
              ],
              percentiles: { p75: 344 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6704331450094163 },
                { start: 800, end: 1800, density: 0.29566854990583813 },
                { start: 1800, density: 0.0338983050847456 },
              ],
              percentiles: { p75: 950 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8527131782945736 },
                { start: 1800, end: 3000, density: 0.12403100775193797 },
                { start: 3000, density: 0.023255813953488393 },
              ],
              percentiles: { p75: 1516 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1516,
        lcp: 2262,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1652191572587,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6773504273504275 },
                { start: 800, end: 1800, density: 0.25213675213675213 },
                { start: 1800, density: 0.07051282051282039 },
              ],
              percentiles: { p75: 865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8711538461538463 },
                { start: 1800, end: 3000, density: 0.0903846153846154 },
                { start: 3000, density: 0.03846153846153831 },
              ],
              percentiles: { p75: 1387 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7905904059040592 },
                { start: 2500, end: 4000, density: 0.16697416974169751 },
                { start: 4000, density: 0.04243542435424342 },
              ],
              percentiles: { p75: 2405 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9269662921348315,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06367041198501873,
                },
                { start: "0.25", density: 0.009363295880149813 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1387, lcp: 2405, cls: "0.03" },
      timestamp: 1652191572865,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.com" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9910547118785105 },
                { start: 100, end: 300, density: 0.0062408986894112745 },
                { start: 300, density: 0.0027043894320782197 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8413941871026339 },
                { start: 2500, end: 4000, density: 0.09593551316984562 },
                { start: 4000, density: 0.06267029972752057 },
              ],
              percentiles: { p75: 1907 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6857010213556175,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.27530176415970287,
                },
                { start: "0.25", density: 0.03899721448467964 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9540405140492269 },
                { start: 200, end: 500, density: 0.02570246133739927 },
                { start: 500, density: 0.02025702461337386 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7456556082148498 },
                { start: 800, end: 1800, density: 0.2037914691943128 },
                { start: 1800, density: 0.050552922590837414 },
              ],
              percentiles: { p75: 803 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8730230456394035 },
                { start: 1800, end: 3000, density: 0.0872119295074559 },
                { start: 3000, density: 0.03976502485314066 },
              ],
              percentiles: { p75: 1228 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: { fcp: 1228, lcp: 1907, cls: "0.11", fid: 3 },
      timestamp: 1652191573142,
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
                  density: 0.5535265921022599,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31842045195160923,
                },
                { start: "0.25", density: 0.128052955946131 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9511186770428016 },
                { start: 200, end: 500, density: 0.031128404669260708 },
                { start: 500, density: 0.01775291828793774 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8213973799126638 },
                { start: 800, end: 1800, density: 0.1556768558951965 },
                { start: 1800, density: 0.02292576419213975 },
              ],
              percentiles: { p75: 721 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9343163538873994 },
                { start: 1800, end: 3000, density: 0.04647006255585344 },
                { start: 3000, density: 0.01921358355674712 },
              ],
              percentiles: { p75: 1034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9951348960636887 },
                { start: 100, end: 300, density: 0.0024325519681556835 },
                { start: 300, density: 0.0024325519681556835 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9181695220919748 },
                { start: 2500, end: 4000, density: 0.054553651938683514 },
                { start: 4000, density: 0.02727682596934176 },
              ],
              percentiles: { p75: 1657 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1034, lcp: 1657, cls: "0.15", fid: 2 },
      timestamp: 1652191573466,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6499540018399266 },
                { start: 800, end: 1800, density: 0.2943882244710211 },
                { start: 1800, density: 0.055657773689052344 },
              ],
              percentiles: { p75: 961 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8346738159070598 },
                { start: 1800, end: 3000, density: 0.10142984807864161 },
                { start: 3000, density: 0.06389633601429867 },
              ],
              percentiles: { p75: 1519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9879566439181051 },
                { start: 100, end: 300, density: 0.004817342432757928 },
                { start: 300, density: 0.00722601364913688 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.782308377896613 },
                { start: 2500, end: 4000, density: 0.10450089126559715 },
                { start: 4000, density: 0.11319073083778991 },
              ],
              percentiles: { p75: 2343 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7910516605166052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1476014760147602,
                },
                { start: "0.25", density: 0.06134686346863468 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8979688238072743 },
                { start: 200, end: 500, density: 0.04818138875767596 },
                { start: 500, density: 0.05384978743504965 },
              ],
              percentiles: { p75: 85 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: { fcp: 1519, lcp: 2343, cls: "0.07", fid: 2 },
      timestamp: 1652191573805,
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
                  density: 0.9010600706713782,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0777385159010601,
                },
                { start: "0.25", density: 0.021201413427561853 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42268041237113435 },
                { start: 200, end: 500, density: 0.40549828178694186 },
                { start: 500, density: 0.17182130584192398 },
              ],
              percentiles: { p75: 406 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5510948905109488 },
                { start: 800, end: 1800, density: 0.36131386861313874 },
                { start: 1800, density: 0.08759124087591244 },
              ],
              percentiles: { p75: 1146 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7525773195876287 },
                { start: 1800, end: 3000, density: 0.17869415807560135 },
                { start: 3000, density: 0.06872852233676983 },
              ],
              percentiles: { p75: 1889 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9113475177304965 },
                { start: 100, end: 300, density: 0.04964539007092199 },
                { start: 300, density: 0.039007092198581575 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6555944055944058 },
                { start: 2500, end: 4000, density: 0.21503496503496503 },
                { start: 4000, density: 0.12937062937062924 },
              ],
              percentiles: { p75: 3010 },
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
        lcp: 3010,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1652191574079,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.845238095238095 },
                { start: 2500, end: 4000, density: 0.11224489795918369 },
                { start: 4000, density: 0.04251700680272119 },
              ],
              percentiles: { p75: 1964 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5963541666666666,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.376736111111111,
                },
                { start: "0.25", density: 0.02690972222222223 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.956405693950178 },
                { start: 200, end: 500, density: 0.024021352313167262 },
                { start: 500, density: 0.01957295373665472 },
              ],
              percentiles: { p75: 77 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8466666666666667 },
                { start: 800, end: 1800, density: 0.125 },
                { start: 1800, density: 0.028333333333333335 },
              ],
              percentiles: { p75: 699 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8942065491183877 },
                { start: 1800, end: 3000, density: 0.07472712006717044 },
                { start: 3000, density: 0.031066330814441823 },
              ],
              percentiles: { p75: 1192 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9943222143364088 },
                { start: 100, end: 300, density: 0.0028388928317956 },
                { start: 300, density: 0.0028388928317956 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1192, lcp: 1964, cls: "0.14", fid: 2 },
      timestamp: 1652191574334,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9533615990308903,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026448616999798107,
                },
                { start: "0.25", density: 0.020189783969311547 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9776299879081016 },
                { start: 200, end: 500, density: 0.014308746473196294 },
                { start: 500, density: 0.008061265618702148 },
              ],
              percentiles: { p75: 47 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6619883040935672 },
                { start: 800, end: 1800, density: 0.3037037037037037 },
                { start: 1800, density: 0.03430799220272905 },
              ],
              percentiles: { p75: 915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8546940402631054 },
                { start: 1800, end: 3000, density: 0.12258321706198924 },
                { start: 3000, density: 0.022722742674905316 },
              ],
              percentiles: { p75: 1400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9964601769911504 },
                { start: 100, end: 300, density: 0.001769911504424779 },
                { start: 300, density: 0.001769911504424779 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8482355273592386 },
                { start: 2500, end: 4000, density: 0.08515067406819987 },
                { start: 4000, density: 0.06661379857256147 },
              ],
              percentiles: { p75: 1947 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1400, lcp: 1947, cls: "0.01", fid: 1 },
      timestamp: 1652191574667,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ee" },
          metrics: {
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
                { start: 0, end: 2500, density: 0.9487554904831624 },
                { start: 2500, end: 4000, density: 0.04734016593460224 },
                { start: 4000, density: 0.0039043435822352364 },
              ],
              percentiles: { p75: 1488 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9392812887236679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04312267657992565,
                },
                { start: "0.25", density: 0.017596034696406443 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9570343201467122 },
                { start: 200, end: 500, density: 0.03012837306785434 },
                { start: 500, density: 0.01283730678543359 },
              ],
              percentiles: { p75: 63 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8577405857740587 },
                { start: 800, end: 1800, density: 0.13832143736155547 },
                { start: 1800, density: 0.003937976864385922 },
              ],
              percentiles: { p75: 684 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9553314121037465 },
                { start: 1800, end: 3000, density: 0.0446685878962536 },
                { start: 3000 },
              ],
              percentiles: { p75: 1059 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1059, lcp: 1488, cls: "0.05", fid: 2 },
      timestamp: 1652191574840,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6310580204778157,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2795221843003413,
                },
                { start: "0.25", density: 0.08941979522184312 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9227230910763572 },
                { start: 200, end: 500, density: 0.04477154247163446 },
                { start: 500, density: 0.03250536645200849 },
              ],
              percentiles: { p75: 91 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.58641975308642 },
                { start: 800, end: 1800, density: 0.344650205761317 },
                { start: 1800, density: 0.06893004115226296 },
              ],
              percentiles: { p75: 1071 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8120849933598939 },
                { start: 1800, end: 3000, density: 0.12317397078353254 },
                { start: 3000, density: 0.06474103585657351 },
              ],
              percentiles: { p75: 1580 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9889330306469921 },
                { start: 100, end: 300, density: 0.005391600454029513 },
                { start: 300, density: 0.005675368898978436 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7604849279161204 },
                { start: 2500, end: 4000, density: 0.14318479685452157 },
                { start: 4000, density: 0.09633027522935801 },
              ],
              percentiles: { p75: 2457 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 1580, lcp: 2457, cls: "0.13", fid: 3 },
      timestamp: 1652191575003,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.vn" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7171136653895275,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2509578544061303,
                },
                { start: "0.25", density: 0.03192848020434228 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7457428068115091 },
                { start: 800, end: 1800, density: 0.21432765707574863 },
                { start: 1800, density: 0.03992953611274223 },
              ],
              percentiles: { p75: 814 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8898089171974524 },
                { start: 1800, end: 3000, density: 0.05668789808917198 },
                { start: 3000, density: 0.05350318471337562 },
              ],
              percentiles: { p75: 1058 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8682728410513143 },
                { start: 2500, end: 4000, density: 0.07978723404255321 },
                { start: 4000, density: 0.0519399249061325 },
              ],
              percentiles: { p75: 1381 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1058, lcp: 1381, cls: "0.11" },
      timestamp: 1652191575203,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.932592077831828 },
                { start: 200, end: 500, density: 0.025017373175816534 },
                { start: 500, density: 0.04239054899235556 },
              ],
              percentiles: { p75: 58 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7061643835616438 },
                { start: 800, end: 1800, density: 0.26712328767123295 },
                { start: 1800, density: 0.026712328767123254 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8851578240429818 },
                { start: 1800, end: 3000, density: 0.09066487575554065 },
                { start: 3000, density: 0.02417730020147759 },
              ],
              percentiles: { p75: 1247 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.992094861660079 },
                { start: 100, end: 300, density: 0.0022586109542631285 },
                { start: 300, density: 0.0056465273856578305 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8493288590604026 },
                { start: 2500, end: 4000, density: 0.09295302013422815 },
                { start: 4000, density: 0.05771812080536937 },
              ],
              percentiles: { p75: 1788 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9445205479452055,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02534246575342465,
                },
                { start: "0.25", density: 0.030136986301369836 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1247, lcp: 1788, cls: "0.02", fid: 2 },
      timestamp: 1652191575428,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7366071428571429,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.22395833333333334,
                },
                { start: "0.25", density: 0.03943452380952379 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8708133971291866 },
                { start: 200, end: 500, density: 0.08612440191387559 },
                { start: 500, density: 0.04306220095693779 },
              ],
              percentiles: { p75: 101 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2648532569792413 },
                { start: 800, end: 1800, density: 0.5576234788833214 },
                { start: 1800, density: 0.1775232641374372 },
              ],
              percentiles: { p75: 1621 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4852734922861151 },
                { start: 1800, end: 3000, density: 0.29663394109396934 },
                { start: 3000, density: 0.2180925666199154 },
              ],
              percentiles: { p75: 2761 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9885204081632653 },
                { start: 100, end: 300, density: 0.0057397959183673455 },
                { start: 300, density: 0.0057397959183673455 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5437589670014334 },
                { start: 2500, end: 4000, density: 0.20086083213773273 },
                { start: 4000, density: 0.2553802008608339 },
              ],
              percentiles: { p75: 4154 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 2761, lcp: 4154, cls: "0.10", fid: 2 },
      timestamp: 1652191575776,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45267489711934156 },
                { start: 800, end: 1800, density: 0.4814814814814814 },
                { start: 1800, density: 0.06584362139917699 },
              ],
              percentiles: { p75: 1109 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7707509881422925 },
                { start: 1800, end: 3000, density: 0.16996047430830036 },
                { start: 3000, density: 0.0592885375494072 },
              ],
              percentiles: { p75: 1782 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8951965065502182 },
                { start: 100, end: 300, density: 0.0480349344978166 },
                { start: 300, density: 0.05676855895196515 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000000000000003 },
                { start: 2500, end: 4000, density: 0.21200000000000016 },
                { start: 4000, density: 0.08799999999999969 },
              ],
              percentiles: { p75: 2690 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9133858267716537,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06299212598425197,
                },
                { start: "0.25", density: 0.023622047244094474 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49034749034749103 },
                { start: 200, end: 500, density: 0.347490347490348 },
                { start: 500, density: 0.16216216216216095 },
              ],
              percentiles: { p75: 288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1782,
        lcp: 2690,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652191576087,
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
                { start: 0, end: 800, density: 0.5789797172710511 },
                { start: 800, end: 1800, density: 0.3663183773816841 },
                { start: 1800, density: 0.054701905347264705 },
              ],
              percentiles: { p75: 1016 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7798003523194362 },
                { start: 1800, end: 3000, density: 0.14621256605989427 },
                { start: 3000, density: 0.07398708162066951 },
              ],
              percentiles: { p75: 1699 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9878419452887538 },
                { start: 100, end: 300, density: 0.0060790273556231 },
                { start: 300, density: 0.0060790273556231 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7120253164556963 },
                { start: 2500, end: 4000, density: 0.1481588032220944 },
                { start: 4000, density: 0.13981588032220915 },
              ],
              percentiles: { p75: 2775 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8047301394784717,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17768344451182536,
                },
                { start: "0.25", density: 0.01758641600970286 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9038101186758276 },
                { start: 200, end: 500, density: 0.05871330418488444 },
                { start: 500, density: 0.03747657713928783 },
              ],
              percentiles: { p75: 73 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 1699, lcp: 2775, cls: "0.07", fid: 2 },
      timestamp: 1652191576385,
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
                { start: 0, end: 200, density: 0.939373297002725 },
                { start: 200, end: 500, density: 0.03814713896457766 },
                { start: 500, density: 0.022479564032697425 },
              ],
              percentiles: { p75: 79 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7140115163147792 },
                { start: 800, end: 1800, density: 0.238003838771593 },
                { start: 1800, density: 0.047984644913627736 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8629882207067577 },
                { start: 1800, end: 3000, density: 0.08493490390576569 },
                { start: 3000, density: 0.05207687538747663 },
              ],
              percentiles: { p75: 1320 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9975801572897761 },
                { start: 100, end: 300, density: 0.0006049606775559588 },
                { start: 300, density: 0.0018148820326678778 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8412747524752483 },
                { start: 2500, end: 4000, density: 0.09189356435643574 },
                { start: 4000, density: 0.066831683168316 },
              ],
              percentiles: { p75: 1967 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5327868852459016,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3247162673392182,
                },
                { start: "0.25", density: 0.14249684741488017 },
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
      extractedResults: { fcp: 1320, lcp: 1967, cls: "0.17", fid: 2 },
      timestamp: 1652191576688,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5876739562624255,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30954274353876743,
                },
                { start: "0.25", density: 0.10278330019880715 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9579281603492757 },
                { start: 200, end: 500, density: 0.02163127604683469 },
                { start: 500, density: 0.020440563603889527 },
              ],
              percentiles: { p75: 79 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6219278033794163 },
                { start: 800, end: 1800, density: 0.32123655913978494 },
                { start: 1800, density: 0.05683563748079881 },
              ],
              percentiles: { p75: 1046 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8110098856367511 },
                { start: 1800, end: 3000, density: 0.12735026167861985 },
                { start: 3000, density: 0.06163985268462885 },
              ],
              percentiles: { p75: 1554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9961590167082773 },
                { start: 100, end: 300, density: 0.0019204916458613404 },
                { start: 300, density: 0.0019204916458613408 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7655334114888629 },
                { start: 2500, end: 4000, density: 0.1484955060570535 },
                { start: 4000, density: 0.08597108245408348 },
              ],
              percentiles: { p75: 2515 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1554, lcp: 2515, cls: "0.13", fid: 2 },
      timestamp: 1652191577000,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9134615384615384,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05448717948717948,
                },
                { start: "0.25", density: 0.032051282051282055 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3538961038961044 },
                { start: 200, end: 500, density: 0.428571428571429 },
                { start: 500, density: 0.21753246753246655 },
              ],
              percentiles: { p75: 454 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6577181208053692 },
                { start: 800, end: 1800, density: 0.29194630872483224 },
                { start: 1800, density: 0.05033557046979868 },
              ],
              percentiles: { p75: 978 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7752442996742671 },
                { start: 1800, end: 3000, density: 0.16612377850162868 },
                { start: 3000, density: 0.05863192182410424 },
              ],
              percentiles: { p75: 1837 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9174917491749176 },
                { start: 100, end: 300, density: 0.04620462046204621 },
                { start: 300, density: 0.036303630363036216 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7136075949367089 },
                { start: 2500, end: 4000, density: 0.20727848101265822 },
                { start: 4000, density: 0.07911392405063294 },
              ],
              percentiles: { p75: 2715 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1837,
        lcp: 2715,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652191577340,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9109697933227345 },
                { start: 1800, end: 3000, density: 0.06677265500794913 },
                { start: 3000, density: 0.02225755166931637 },
              ],
              percentiles: { p75: 1197 },
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
                { start: 0, end: 2500, density: 0.872983870967742 },
                { start: 2500, end: 4000, density: 0.10040322580645161 },
                { start: 4000, density: 0.02661290322580645 },
              ],
              percentiles: { p75: 1839 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7502040816326531,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21877551020408162,
                },
                { start: "0.25", density: 0.03102040816326528 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9548672566371682 },
                { start: 200, end: 500, density: 0.029203539823008846 },
                { start: 500, density: 0.015929203539823012 },
              ],
              percentiles: { p75: 69 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8062360801781737 },
                { start: 800, end: 1800, density: 0.1744617668893838 },
                { start: 1800, density: 0.019302152932442473 },
              ],
              percentiles: { p75: 737 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1197, lcp: 1839, cls: "0.10", fid: 2 },
      timestamp: 1652191577731,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9939255884586181 },
                { start: 100, end: 300, density: 0.0037965072133637067 },
                { start: 300, density: 0.0022779043280182257 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8922457200402821 },
                { start: 2500, end: 4000, density: 0.07653575025176235 },
                { start: 4000, density: 0.031218529707955595 },
              ],
              percentiles: { p75: 1690 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4957173447537474,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3854389721627409,
                },
                { start: "0.25", density: 0.11884368308351179 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9546279491833032 },
                { start: 200, end: 500, density: 0.03266787658802178 },
                { start: 500, density: 0.012704174228675072 },
              ],
              percentiles: { p75: 67 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8074245939675173 },
                { start: 800, end: 1800, density: 0.17517401392111367 },
                { start: 1800, density: 0.01740139211136893 },
              ],
              percentiles: { p75: 704 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9200841219768665 },
                { start: 1800, end: 3000, density: 0.05678233438485806 },
                { start: 3000, density: 0.023133543638275474 },
              ],
              percentiles: { p75: 1141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1141, lcp: 1690, cls: "0.15", fid: 2 },
      timestamp: 1652191578058,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8012160898035546 },
                { start: 800, end: 1800, density: 0.16884939195509824 },
                { start: 1800, density: 0.029934518241347085 },
              ],
              percentiles: { p75: 707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.917530419107706 },
                { start: 1800, end: 3000, density: 0.05092383956737269 },
                { start: 3000, density: 0.03154574132492134 },
              ],
              percentiles: { p75: 1064 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9982425307557118 },
                { start: 100, end: 300, density: 0.001757469244288225 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8862921348314609 },
                { start: 2500, end: 4000, density: 0.07280898876404497 },
                { start: 4000, density: 0.04089887640449416 },
              ],
              percentiles: { p75: 1746 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8566790352504638,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12059369202226344,
                },
                { start: "0.25", density: 0.02272727272727274 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9662921348314606 },
                { start: 200, end: 500, density: 0.022960429897410838 },
                { start: 500, density: 0.010747435271128475 },
              ],
              percentiles: { p75: 66 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1064, lcp: 1746, cls: "0.06", fid: 2 },
      timestamp: 1652191578370,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8284789644012945,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15857605177993528,
                },
                { start: "0.25", density: 0.012944983818770229 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8896321070234118 },
                { start: 200, end: 500, density: 0.06187290969899669 },
                { start: 500, density: 0.048494983277591545 },
              ],
              percentiles: { p75: 110 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5859106529209622 },
                { start: 800, end: 1800, density: 0.30584192439862545 },
                { start: 1800, density: 0.10824742268041233 },
              ],
              percentiles: { p75: 1440 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7464114832535881 },
                { start: 1800, end: 3000, density: 0.17384370015948958 },
                { start: 3000, density: 0.07974481658692224 },
              ],
              percentiles: { p75: 1835 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9915966386554622 },
                { start: 100, end: 300, density: 0.0056022408963585435 },
                { start: 300, density: 0.0028011204481792743 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7492211838006233 },
                { start: 2500, end: 4000, density: 0.1666666666666667 },
                { start: 4000, density: 0.08411214953271004 },
              ],
              percentiles: { p75: 2501 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1835, lcp: 2501, cls: "0.06", fid: 2 },
      timestamp: 1652191578766,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6542473919523099,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30327868852459017,
                },
                { start: "0.25", density: 0.04247391952309985 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.940805051302289 },
                { start: 200, end: 500, density: 0.03393843725335439 },
                { start: 500, density: 0.025256511444356665 },
              ],
              percentiles: { p75: 77 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6733096085409253 },
                { start: 800, end: 1800, density: 0.296797153024911 },
                { start: 1800, density: 0.0298932384341637 },
              ],
              percentiles: { p75: 905 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.900802334062728 },
                { start: 1800, end: 3000, density: 0.06710430342815465 },
                { start: 3000, density: 0.03209336250911734 },
              ],
              percentiles: { p75: 1266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9959322033898305 },
                { start: 100, end: 300 },
                { start: 300, density: 0.004067796610169491 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8379928315412185 },
                { start: 2500, end: 4000, density: 0.10681003584229384 },
                { start: 4000, density: 0.05519713261648763 },
              ],
              percentiles: { p75: 2076 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1266, lcp: 2076, cls: "0.14", fid: 2 },
      timestamp: 1652191578935,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6219278033794163 },
                { start: 800, end: 1800, density: 0.32123655913978494 },
                { start: 1800, density: 0.05683563748079881 },
              ],
              percentiles: { p75: 1046 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8110098856367511 },
                { start: 1800, end: 3000, density: 0.12735026167861985 },
                { start: 3000, density: 0.06163985268462885 },
              ],
              percentiles: { p75: 1554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9961590167082773 },
                { start: 100, end: 300, density: 0.0019204916458613404 },
                { start: 300, density: 0.0019204916458613408 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7655334114888629 },
                { start: 2500, end: 4000, density: 0.1484955060570535 },
                { start: 4000, density: 0.08597108245408348 },
              ],
              percentiles: { p75: 2515 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5876739562624255,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30954274353876743,
                },
                { start: "0.25", density: 0.10278330019880715 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9579281603492757 },
                { start: 200, end: 500, density: 0.02163127604683469 },
                { start: 500, density: 0.020440563603889527 },
              ],
              percentiles: { p75: 79 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1554, lcp: 2515, cls: "0.13", fid: 2 },
      timestamp: 1652191579107,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.31100478468899534 },
                { start: 200, end: 500, density: 0.5645933014354066 },
                { start: 500, density: 0.12440191387559796 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8272251308900525 },
                { start: 800, end: 1800, density: 0.1570680628272251 },
                { start: 1800, density: 0.015706806282722512 },
              ],
              percentiles: { p75: 711 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8860103626943006 },
                { start: 1800, end: 3000, density: 0.08808290155440414 },
                { start: 3000, density: 0.02590673575129534 },
              ],
              percentiles: { p75: 1409 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9292452830188679 },
                { start: 100, end: 300, density: 0.05188679245283019 },
                { start: 300, density: 0.0188679245283019 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8219895287958116 },
                { start: 2500, end: 4000, density: 0.1518324607329843 },
                { start: 4000, density: 0.026178010471204195 },
              ],
              percentiles: { p75: 2253 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9523809523809522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026455026455026454,
                },
                { start: "0.25", density: 0.02116402116402116 },
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
        fcp: 1409,
        lcp: 2253,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652191579284,
    },
  ],
};
