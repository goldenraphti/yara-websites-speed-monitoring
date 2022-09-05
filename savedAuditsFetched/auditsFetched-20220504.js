export const audit19 = {
  date: "2022-05-04T16:51:48.590Z",
  dateParsedLocale: "04/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "04/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8343240254354433 },
                { start: 2500, end: 4000, density: 0.10927564279789874 },
                { start: 4000, density: 0.05640033176665801 },
              ],
              percentiles: { p75: 2057 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9534404614750721,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029391567092432354,
                },
                { start: "0.25", density: 0.017167971432495537 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4642376983059962 },
                { start: 200, end: 500, density: 0.380344178542619 },
                { start: 500, density: 0.1554181231513847 },
              ],
              percentiles: { p75: 357 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6496068423230793 },
                { start: 800, end: 1800, density: 0.26624361980962896 },
                { start: 1800, density: 0.0841495378672918 },
              ],
              percentiles: { p75: 982 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8127942398227634 },
                { start: 1800, end: 3000, density: 0.12295762946552197 },
                { start: 3000, density: 0.06424813071171455 },
              ],
              percentiles: { p75: 1557 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390724874201009 },
                { start: 100, end: 300, density: 0.0342717258261934 },
                { start: 300, density: 0.026655786753705907 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1557,
        lcp: 2057,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651683057605,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6830683068306832 },
                { start: 800, end: 1800, density: 0.27262726272627263 },
                { start: 1800, density: 0.044304430443044204 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8840347895631311 },
                { start: 1800, end: 3000, density: 0.086074177746676 },
                { start: 3000, density: 0.02989103269019299 },
              ],
              percentiles: { p75: 1332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663966396639665 },
                { start: 100, end: 300, density: 0.024002400240024 },
                { start: 300, density: 0.009600960096009569 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8925607439256075 },
                { start: 2500, end: 4000, density: 0.08374162583741628 },
                { start: 4000, density: 0.023697630236976328 },
              ],
              percentiles: { p75: 1860 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8506 },
                { start: "0.10", end: "0.25", density: 0.1262 },
                { start: "0.25", density: 0.023200000000000012 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7116711671167115 },
                { start: 200, end: 500, density: 0.19261926192619253 },
                { start: 500, density: 0.09570957095709604 },
              ],
              percentiles: { p75: 238 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1332,
        lcp: 1860,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651683057837,
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
                { start: 0, end: 200, density: 0.5248779200211168 },
                { start: 200, end: 500, density: 0.39039197571598266 },
                { start: 500, density: 0.08473010426290052 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2905769483506372 },
                { start: 800, end: 1800, density: 0.5129451964778547 },
                { start: 1800, density: 0.19647785517150804 },
              ],
              percentiles: { p75: 1654 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4784339747843383 },
                { start: 1800, end: 3000, density: 0.32395487723954774 },
                { start: 3000, density: 0.1976111479761139 },
              ],
              percentiles: { p75: 2749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621894621894622 },
                { start: 100, end: 300, density: 0.029757029757029756 },
                { start: 300, density: 0.008053508053508069 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6253644314868796 },
                { start: 2500, end: 4000, density: 0.24357275377683507 },
                { start: 4000, density: 0.13106281473628542 },
              ],
              percentiles: { p75: 3090 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9456336178594879,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024819435325016414,
                },
                { start: "0.25", density: 0.029546946815495724 },
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
        fcp: 2749,
        lcp: 3090,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683057933,
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
                  density: 0.7570757075707573,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10861086108610866,
                },
                { start: "0.25", density: 0.13431343134313412 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6967696769676968 },
                { start: 200, end: 500, density: 0.2419241924192419 },
                { start: 500, density: 0.06130613061306127 },
              ],
              percentiles: { p75: 216 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270000000000003 },
                { start: 1800, end: 3000, density: 0.14130000000000012 },
                { start: 3000, density: 0.23169999999999952 },
              ],
              percentiles: { p75: 2798 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6523000000000001 },
                { start: 2500, end: 4000, density: 0.16669999999999996 },
                { start: 4000, density: 0.18099999999999986 },
              ],
              percentiles: { p75: 3183 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2798, lcp: 3183, cls: "0.09" },
      timestamp: 1651683058068,
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
                { start: 0, end: 1800, density: 0.8654625448651152 },
                { start: 1800, end: 3000, density: 0.11045501910385555 },
                { start: 3000, density: 0.024082436031029258 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756753596070635 },
                { start: 100, end: 300, density: 0.016372354110630337 },
                { start: 300, density: 0.007952286282306147 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8934976281383781 },
                { start: 2500, end: 4000, density: 0.0869489760499827 },
                { start: 4000, density: 0.019553395811639267 },
              ],
              percentiles: { p75: 1806 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052389176741509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0800230282095567,
                },
                { start: "0.25", density: 0.014738054116292464 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6633842671194112 },
                { start: 200, end: 500, density: 0.27481607243916234 },
                { start: 500, density: 0.06179966044142643 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6712216771782293 },
                { start: 800, end: 1800, density: 0.29782761037140854 },
                { start: 1800, density: 0.030950712450362013 },
              ],
              percentiles: { p75: 903 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1806,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683058192,
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
                { start: 0, end: 2500, density: 0.6931005214017216 },
                { start: 2500, end: 4000, density: 0.1784891475688129 },
                { start: 4000, density: 0.12841033102946547 },
              ],
              percentiles: { p75: 2800 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9684387375495019,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014760590423616948,
                },
                { start: "0.25", density: 0.01680067202688108 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6889315265619379 },
                { start: 200, end: 500, density: 0.2531478594555702 },
                { start: 500, density: 0.05792061398249194 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3679893860812929 },
                { start: 800, end: 1800, density: 0.4825714630322035 },
                { start: 1800, density: 0.14943915088650364 },
              ],
              percentiles: { p75: 1395 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5537459283387614 },
                { start: 1800, end: 3000, density: 0.27820002412836253 },
                { start: 3000, density: 0.1680540475328761 },
              ],
              percentiles: { p75: 2494 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460377358490566 },
                { start: 100, end: 300, density: 0.040503144654088045 },
                { start: 300, density: 0.013459119496855357 },
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
        fcp: 2494,
        lcp: 2800,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683058316,
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
                  density: 0.8525212986414922,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13377849412848264,
                },
                { start: "0.25", density: 0.013700207230025328 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5671312427409988 },
                { start: 200, end: 500, density: 0.3150987224157956 },
                { start: 500, density: 0.1177700348432055 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6452606364777005 },
                { start: 800, end: 1800, density: 0.299874529485571 },
                { start: 1800, density: 0.05486483403672838 },
              ],
              percentiles: { p75: 988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7988671829846254 },
                { start: 1800, end: 3000, density: 0.14611027626863932 },
                { start: 3000, density: 0.055022540746735286 },
              ],
              percentiles: { p75: 1652 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443714933747165 },
                { start: 100, end: 300, density: 0.033663602721738094 },
                { start: 300, density: 0.02196490390354541 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8311507706570864 },
                { start: 2500, end: 4000, density: 0.11994437362382662 },
                { start: 4000, density: 0.04890485571908695 },
              ],
              percentiles: { p75: 2111 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1652,
        lcp: 2111,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1651683058450,
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
                  density: 0.9377599524658348,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0350564468211527,
                },
                { start: "0.25", density: 0.02718360071301255 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4849253731343285 },
                { start: 200, end: 500, density: 0.3267164179104479 },
                { start: 500, density: 0.18835820895522368 },
              ],
              percentiles: { p75: 374 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23621572762880313 },
                { start: 800, end: 1800, density: 0.37616752033745 },
                { start: 1800, density: 0.387616752033747 },
              ],
              percentiles: { p75: 2174 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.40715476731847683 },
                { start: 1800, end: 3000, density: 0.3303016522661807 },
                { start: 3000, density: 0.2625435804153424 },
              ],
              percentiles: { p75: 3113 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9136946117029491 },
                { start: 100, end: 300, density: 0.04508259996912152 },
                { start: 300, density: 0.041222788327929485 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5247389922832494 },
                { start: 2500, end: 4000, density: 0.29157209865335104 },
                { start: 4000, density: 0.1836889090633996 },
              ],
              percentiles: { p75: 3530 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3113,
        lcp: 3530,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1651683058585,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7796194700595314 },
                { start: 1800, end: 3000, density: 0.14824325901715893 },
                { start: 3000, density: 0.07213727092330965 },
              ],
              percentiles: { p75: 1720 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382402707275803 },
                { start: 100, end: 300, density: 0.028281363306744012 },
                { start: 300, density: 0.033478365965675744 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8257575757575757 },
                { start: 2500, end: 4000, density: 0.11818181818181815 },
                { start: 4000, density: 0.05606060606060629 },
              ],
              percentiles: { p75: 2103 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9550313734603766,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02951429235417151,
                },
                { start: "0.25", density: 0.015454334185452008 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5880306193458589 },
                { start: 200, end: 500, density: 0.31384829505915085 },
                { start: 500, density: 0.09812108559499022 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6285947141692865 },
                { start: 800, end: 1800, density: 0.30143206426825003 },
                { start: 1800, density: 0.06997322156246366 },
              ],
              percentiles: { p75: 980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1720,
        lcp: 2103,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683058701,
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
                { start: "0.00", end: "0.10", density: 0.8649 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07400000000000001,
                },
                { start: "0.25", density: 0.0611 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8267173282671731 },
                { start: 200, end: 500, density: 0.1235876412358764 },
                { start: 500, density: 0.049695030496950385 },
              ],
              percentiles: { p75: 152 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42604260426042584 },
                { start: 800, end: 1800, density: 0.4135413541354133 },
                { start: 1800, density: 0.16041604160416076 },
              ],
              percentiles: { p75: 1351 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16176764647070563 },
                { start: 1800, end: 3000, density: 0.4209158168366321 },
                { start: 3000, density: 0.41731653669266217 },
              ],
              percentiles: { p75: 4418 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3308999999999995 },
                { start: 2500, end: 4000, density: 0.32549999999999935 },
                { start: 4000, density: 0.34360000000000124 },
              ],
              percentiles: { p75: 5089 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4418, lcp: 5089, cls: "0.04" },
      timestamp: 1651683058819,
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
                  density: 0.8776785714285715,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0861607142857143,
                },
                { start: "0.25", density: 0.036160714285714275 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4286363120245255 },
                { start: 200, end: 500, density: 0.31872374247757446 },
                { start: 500, density: 0.2526399454979 },
              ],
              percentiles: { p75: 505 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34316234561032616 },
                { start: 800, end: 1800, density: 0.3969066429286748 },
                { start: 1800, density: 0.25993101146099906 },
              ],
              percentiles: { p75: 1877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41195566998769034 },
                { start: 1800, end: 3000, density: 0.25624090451136505 },
                { start: 3000, density: 0.33180342550094455 },
              ],
              percentiles: { p75: 3588 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8885135135135133 },
                { start: 100, end: 300, density: 0.0700139794967381 },
                { start: 300, density: 0.041472506989748595 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4619620182042951 },
                { start: 2500, end: 4000, density: 0.25182604787054863 },
                { start: 4000, density: 0.2862119339251563 },
              ],
              percentiles: { p75: 4361 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3588,
        lcp: 4361,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1651683058897,
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
                { start: 0, end: 800, density: 0.6112444977991197 },
                { start: 800, end: 1800, density: 0.29521808723489407 },
                { start: 1800, density: 0.09353741496598626 },
              ],
              percentiles: { p75: 1121 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7513259281497046 },
                { start: 1800, end: 3000, density: 0.15490843590513356 },
                { start: 3000, density: 0.0937656359451617 },
              ],
              percentiles: { p75: 1818 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9755 },
                { start: 100, end: 300, density: 0.0171 },
                { start: 300, density: 0.007399999999999998 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.771004200840168 },
                { start: 2500, end: 4000, density: 0.1424784956991398 },
                { start: 4000, density: 0.08651730346069227 },
              ],
              percentiles: { p75: 2394 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8169633926785357,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14892978595719142,
                },
                { start: "0.25", density: 0.03410682136427286 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8029591122663198 },
                { start: 200, end: 500, density: 0.13525942217334788 },
                { start: 500, density: 0.06178146556033234 },
              ],
              percentiles: { p75: 171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1818,
        lcp: 2394,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651683059045,
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
                  density: 0.9521929824561404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02587719298245614,
                },
                { start: "0.25", density: 0.021929824561403508 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6632025761124116 },
                { start: 200, end: 500, density: 0.24590163934426218 },
                { start: 500, density: 0.09089578454332616 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39559130175752105 },
                { start: 800, end: 1800, density: 0.3848674411677088 },
                { start: 1800, density: 0.21954125707477015 },
              ],
              percentiles: { p75: 1711 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5872188291374935 },
                { start: 1800, end: 3000, density: 0.21972292566661658 },
                { start: 3000, density: 0.19305824519588996 },
              ],
              percentiles: { p75: 2660 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9491474271917911 },
                { start: 100, end: 300, density: 0.036819073487249124 },
                { start: 300, density: 0.014033499320959713 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.66116807846634 },
                { start: 2500, end: 4000, density: 0.20864913062862253 },
                { start: 4000, density: 0.1301827909050374 },
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
        fcp: 2660,
        lcp: 2982,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683059132,
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
                { start: 0, end: 2500, density: 0.877986604018794 },
                { start: 2500, end: 4000, density: 0.08402479256223126 },
                { start: 4000, density: 0.037988603418974656 },
              ],
              percentiles: { p75: 1822 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9328000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0382 },
                { start: "0.25", density: 0.02899999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5873587358735876 },
                { start: 200, end: 500, density: 0.2939293929392941 },
                { start: 500, density: 0.11871187118711828 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7850644806558034 },
                { start: 800, end: 1800, density: 0.17904628611416576 },
                { start: 1800, density: 0.03588923323003079 },
              ],
              percentiles: { p75: 755 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8646406078176547 },
                { start: 1800, end: 3000, density: 0.09127261821453564 },
                { start: 3000, density: 0.044086773967809634 },
              ],
              percentiles: { p75: 1404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517951795179517 },
                { start: 100, end: 300, density: 0.025402540254025396 },
                { start: 300, density: 0.022802280228022918 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1404,
        lcp: 1822,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683059256,
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
                  density: 0.7570757075707573,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10861086108610866,
                },
                { start: "0.25", density: 0.13431343134313412 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6967696769676968 },
                { start: 200, end: 500, density: 0.2419241924192419 },
                { start: 500, density: 0.06130613061306127 },
              ],
              percentiles: { p75: 223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270000000000003 },
                { start: 1800, end: 3000, density: 0.14130000000000012 },
                { start: 3000, density: 0.23169999999999952 },
              ],
              percentiles: { p75: 2648 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6523000000000001 },
                { start: 2500, end: 4000, density: 0.16669999999999996 },
                { start: 4000, density: 0.18099999999999986 },
              ],
              percentiles: { p75: 3128 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2648, lcp: 3128, cls: "0.10" },
      timestamp: 1651683059334,
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
                  density: 0.7570757075707573,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10861086108610866,
                },
                { start: "0.25", density: 0.13431343134313412 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6967696769676968 },
                { start: 200, end: 500, density: 0.2419241924192419 },
                { start: 500, density: 0.06130613061306127 },
              ],
              percentiles: { p75: 223 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270000000000003 },
                { start: 1800, end: 3000, density: 0.14130000000000012 },
                { start: 3000, density: 0.23169999999999952 },
              ],
              percentiles: { p75: 2648 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6523000000000001 },
                { start: 2500, end: 4000, density: 0.16669999999999996 },
                { start: 4000, density: 0.18099999999999986 },
              ],
              percentiles: { p75: 3128 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2648, lcp: 3128, cls: "0.10" },
      timestamp: 1651683059421,
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
                { start: 0, end: 2500, density: 0.7416905265778673 },
                { start: 2500, end: 4000, density: 0.15623054898543526 },
                { start: 4000, density: 0.10207892443669747 },
              ],
              percentiles: { p75: 2555 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9679781556410575,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014149187042323447,
                },
                { start: "0.25", density: 0.017872657316619075 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6187778715198263 },
                { start: 200, end: 500, density: 0.33433771242617816 },
                { start: 500, density: 0.046884416053995355 },
              ],
              percentiles: { p75: 252 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43218984384605896 },
                { start: 800, end: 1800, density: 0.46489610229927425 },
                { start: 1800, density: 0.1029140538546669 },
              ],
              percentiles: { p75: 1212 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6325338635516344 },
                { start: 1800, end: 3000, density: 0.24518454082266697 },
                { start: 3000, density: 0.1222815956256986 },
              ],
              percentiles: { p75: 2170 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643901142705289 },
                { start: 100, end: 300, density: 0.024581450969970768 },
                { start: 300, density: 0.0110284347595004 },
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
        fcp: 2170,
        lcp: 2555,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683059503,
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
                { start: 0, end: 200, density: 0.7195280471952803 },
                { start: 200, end: 500, density: 0.2230776922307769 },
                { start: 500, density: 0.057394260573942826 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4014598540145981 },
                { start: 800, end: 1800, density: 0.46315368463153633 },
                { start: 1800, density: 0.1353864613538656 },
              ],
              percentiles: { p75: 1343 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5867760328098424 },
                { start: 1800, end: 3000, density: 0.2592777833350001 },
                { start: 3000, density: 0.1539461838551575 },
              ],
              percentiles: { p75: 2383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9535046495350465 },
                { start: 100, end: 300, density: 0.03279672032796721 },
                { start: 300, density: 0.013698630136986306 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6887811218878094 },
                { start: 2500, end: 4000, density: 0.17703229677032253 },
                { start: 4000, density: 0.13418658134186814 },
              ],
              percentiles: { p75: 2837 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9374999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0441 },
                { start: "0.25", density: 0.01839999999999999 },
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
        fcp: 2383,
        lcp: 2837,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683059634,
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
                  density: 0.882911708829117,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10028997100289971,
                },
                { start: "0.25", density: 0.016798320167983195 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6977999999999999 },
                { start: 200, end: 500, density: 0.24669999999999995 },
                { start: 500, density: 0.055500000000000146 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6927 },
                { start: 800, end: 1800, density: 0.27920000000000006 },
                { start: 1800, density: 0.02809999999999996 },
              ],
              percentiles: { p75: 883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.872248899559824 },
                { start: 1800, end: 3000, density: 0.1042416966786715 },
                { start: 3000, density: 0.02350940376150456 },
              ],
              percentiles: { p75: 1427 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9788042391521696 },
                { start: 100, end: 300, density: 0.014397120575884824 },
                { start: 300, density: 0.006798640271945598 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8905609439056096 },
                { start: 2500, end: 4000, density: 0.08944105589441059 },
                { start: 4000, density: 0.019998000199979802 },
              ],
              percentiles: { p75: 1842 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1427,
        lcp: 1842,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651683059727,
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
                { start: 0, end: 2500, density: 0.44280913199675465 },
                { start: 2500, end: 4000, density: 0.34384053772163586 },
                { start: 4000, density: 0.2133503302816094 },
              ],
              percentiles: { p75: 3867 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9558688674919761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014213663457129757,
                },
                { start: "0.25", density: 0.029917469050894076 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46689381033503663 },
                { start: 200, end: 500, density: 0.3944349801249289 },
                { start: 500, density: 0.13867120954003445 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.19875489970025356 },
                { start: 800, end: 1800, density: 0.5318192298824069 },
                { start: 1800, density: 0.26942587041733956 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.31920315033588115 },
                { start: 1800, end: 3000, density: 0.3485059068797773 },
                { start: 3000, density: 0.3322909427843417 },
              ],
              percentiles: { p75: 3516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618104667609617 },
                { start: 100, end: 300, density: 0.03099952852428099 },
                { start: 300, density: 0.007190004714757187 },
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
        fcp: 3516,
        lcp: 3867,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651683059810,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8079622304453232 },
                { start: 1800, end: 3000, density: 0.12326145208625748 },
                { start: 3000, density: 0.06877631746841915 },
              ],
              percentiles: { p75: 1600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9547551909766727 },
                { start: 100, end: 300, density: 0.03076134324532171 },
                { start: 300, density: 0.014483465778005586 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8331844288449266 },
                { start: 2500, end: 4000, density: 0.1087428206764518 },
                { start: 4000, density: 0.05807275047862153 },
              ],
              percentiles: { p75: 2065 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9790980491512541,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005827210539650367,
                },
                { start: "0.25", density: 0.015074740309095525 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5903539381854445 },
                { start: 200, end: 500, density: 0.317921236291127 },
                { start: 500, density: 0.09172482552342857 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6821166961353874 },
                { start: 800, end: 1800, density: 0.2590300580954785 },
                { start: 1800, density: 0.05885324576913405 },
              ],
              percentiles: { p75: 917 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1600,
        lcp: 2065,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683059945,
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
                { start: 0, end: 800, density: 0.503021462804751 },
                { start: 800, end: 1800, density: 0.4186288810168785 },
                { start: 1800, density: 0.07834965617837057 },
              ],
              percentiles: { p75: 1238 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7016552280985066 },
                { start: 1800, end: 3000, density: 0.2305207912797739 },
                { start: 3000, density: 0.06782398062171965 },
              ],
              percentiles: { p75: 1969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543539325842697 },
                { start: 100, end: 300, density: 0.03136704119850187 },
                { start: 300, density: 0.01427902621722845 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7755040322580645 },
                { start: 2500, end: 4000, density: 0.1664314516129032 },
                { start: 4000, density: 0.05806451612903233 },
              ],
              percentiles: { p75: 2381 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9220365950676213,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057080350039777246,
                },
                { start: "0.25", density: 0.020883054892601446 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7581067472306142 },
                { start: 200, end: 500, density: 0.19436052366565956 },
                { start: 500, density: 0.047532729103726176 },
              ],
              percentiles: { p75: 194 },
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
        lcp: 2381,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683060065,
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
                { start: 0, end: 100, density: 0.9637 },
                { start: 100, end: 300, density: 0.0206 },
                { start: 300, density: 0.015699999999999992 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6386999999999984 },
                { start: 2500, end: 4000, density: 0.17809999999999956 },
                { start: 4000, density: 0.18320000000000217 },
              ],
              percentiles: { p75: 3249 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9148000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0565 },
                { start: "0.25", density: 0.028699999999999993 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6460584233693477 },
                { start: 200, end: 500, density: 0.2874149659863946 },
                { start: 500, density: 0.06652661064425769 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5095509550955101 },
                { start: 800, end: 1800, density: 0.2658265826582661 },
                { start: 1800, density: 0.22462246224622376 },
              ],
              percentiles: { p75: 1651 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6193761247750429 },
                { start: 1800, end: 3000, density: 0.14497100579883979 },
                { start: 3000, density: 0.23565286942611738 },
              ],
              percentiles: { p75: 2797 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2797,
        lcp: 3249,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683060181,
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
                  density: 0.9260061130922057,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04126337238920019,
                },
                { start: "0.25", density: 0.032730514518593976 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5112528132033012 },
                { start: 200, end: 500, density: 0.3482120530132536 },
                { start: 500, density: 0.14053513378344532 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7621060722521141 },
                { start: 800, end: 1800, density: 0.1971560338201384 },
                { start: 1800, density: 0.040737893927747536 },
              ],
              percentiles: { p75: 784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8510420662319399 },
                { start: 1800, end: 3000, density: 0.10113796189745555 },
                { start: 3000, density: 0.04781997187060468 },
              ],
              percentiles: { p75: 1460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400129282482222 },
                { start: 100, end: 300, density: 0.03141564318034906 },
                { start: 300, density: 0.028571428571428664 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8748560460652588 },
                { start: 2500, end: 4000, density: 0.08726807421625075 },
                { start: 4000, density: 0.03787587971849053 },
              ],
              percentiles: { p75: 1841 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1460,
        lcp: 1841,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683060260,
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
                { start: 0, end: 800, density: 0.4304301957566517 },
                { start: 800, end: 1800, density: 0.42034931426561906 },
                { start: 1800, density: 0.14922048997772913 },
              ],
              percentiles: { p75: 1413 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5987306064880105 },
                { start: 1800, end: 3000, density: 0.2280206864127877 },
                { start: 3000, density: 0.17324870709920184 },
              ],
              percentiles: { p75: 2501 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9419370286124744 },
                { start: 100, end: 300, density: 0.036034957500299294 },
                { start: 300, density: 0.022028013887226233 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6858032671289228 },
                { start: 2500, end: 4000, density: 0.17575508285344935 },
                { start: 4000, density: 0.13844165001762782 },
              ],
              percentiles: { p75: 2921 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9358869555062479,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021371014831250732,
                },
                { start: "0.25", density: 0.04274202966250144 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5859025653094854 },
                { start: 200, end: 500, density: 0.3143092492351145 },
                { start: 500, density: 0.09978818545540019 },
              ],
              percentiles: { p75: 278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2501,
        lcp: 2921,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683060379,
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
                { start: 0, end: 2500, density: 0.764443241780543 },
                { start: 2500, end: 4000, density: 0.14612366391557272 },
                { start: 4000, density: 0.08943309430388421 },
              ],
              percentiles: { p75: 2457 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9197364883033072,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054853455229900504,
                },
                { start: "0.25", density: 0.02541005646679216 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46581478066130966 },
                { start: 200, end: 500, density: 0.357792122250033 },
                { start: 500, density: 0.17639309708865747 },
              ],
              percentiles: { p75: 379 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5803018054432761 },
                { start: 800, end: 1800, density: 0.31447049312853637 },
                { start: 1800, density: 0.1052277014281875 },
              ],
              percentiles: { p75: 1121 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.703939352917287 },
                { start: 1800, end: 3000, density: 0.17869229727900357 },
                { start: 3000, density: 0.1173683498037094 },
              ],
              percentiles: { p75: 2015 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9343055744854845 },
                { start: 100, end: 300, density: 0.04007087365408205 },
                { start: 300, density: 0.02562355186043347 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2015,
        lcp: 2457,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683060504,
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
                  density: 0.9652519553788947,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013719707654827542,
                },
                { start: "0.25", density: 0.02102833696627773 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5774378585086042 },
                { start: 200, end: 500, density: 0.28030592734225634 },
                { start: 500, density: 0.1422562141491395 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4973173224322943 },
                { start: 800, end: 1800, density: 0.40150740929994877 },
                { start: 1800, density: 0.10117526826775686 },
              ],
              percentiles: { p75: 1210 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6657157676348541 },
                { start: 1800, end: 3000, density: 0.2222510373443981 },
                { start: 3000, density: 0.11203319502074781 },
              ],
              percentiles: { p75: 2104 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9628788890372547 },
                { start: 100, end: 300, density: 0.02630524769662172 },
                { start: 300, density: 0.010815863266123658 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.753174397512309 },
                { start: 2500, end: 4000, density: 0.15366675304483038 },
                { start: 4000, density: 0.09315884944286049 },
              ],
              percentiles: { p75: 2496 },
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
        lcp: 2496,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683060631,
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
                { start: 0, end: 100, density: 0.9776 },
                { start: 100, end: 300, density: 0.017 },
                { start: 300, density: 0.005399999999999999 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9250999999999999 },
                { start: 2500, end: 4000, density: 0.055900000000000005 },
                { start: 4000, density: 0.018999999999999993 },
              ],
              percentiles: { p75: 1776 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9515048495150485,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03399660033996601,
                },
                { start: "0.25", density: 0.014498550144985509 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7375262473752623 },
                { start: 200, end: 500, density: 0.18128187181281866 },
                { start: 500, density: 0.08119188081191893 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7689537907581516 },
                { start: 800, end: 1800, density: 0.20874174834967 },
                { start: 1800, density: 0.022304460892178444 },
              ],
              percentiles: { p75: 793 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9151915191519153 },
                { start: 1800, end: 3000, density: 0.06930693069306929 },
                { start: 3000, density: 0.015501550155015484 },
              ],
              percentiles: { p75: 1255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1255,
        lcp: 1776,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1651683060762,
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
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6271384136858474 },
                { start: 1800, end: 3000, density: 0.2583592534992224 },
                { start: 3000, density: 0.11450233281493016 },
              ],
              percentiles: { p75: 2397 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450681635926224 },
                { start: 100, end: 300, density: 0.025862068965517244 },
                { start: 300, density: 0.029069767441860454 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7099575453492858 },
                { start: 2500, end: 4000, density: 0.20069471246622927 },
                { start: 4000, density: 0.0893477421844849 },
              ],
              percentiles: { p75: 2802 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9687085150768064,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012706239332448322,
                },
                { start: "0.25", density: 0.018585245590745317 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5831747240197942 },
                { start: 200, end: 500, density: 0.3020555767034639 },
                { start: 500, density: 0.11476969927674195 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40293890177880887 },
                { start: 800, end: 1800, density: 0.4827919566898684 },
                { start: 1800, density: 0.11426914153132275 },
              ],
              percentiles: { p75: 1433 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2397,
        lcp: 2802,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683060849,
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
                { start: 0, end: 200, density: 0.6468646864686469 },
                { start: 200, end: 500, density: 0.23332333233323327 },
                { start: 500, density: 0.11981198119811973 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5284000000000001 },
                { start: 800, end: 1800, density: 0.38100000000000006 },
                { start: 1800, density: 0.09059999999999989 },
              ],
              percentiles: { p75: 1161 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7030703070307022 },
                { start: 1800, end: 3000, density: 0.1974197419741972 },
                { start: 3000, density: 0.09950995099510064 },
              ],
              percentiles: { p75: 1998 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662067586482703 },
                { start: 100, end: 300, density: 0.022295540891821636 },
                { start: 300, density: 0.01149770045990803 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.757625762576257 },
                { start: 2500, end: 4000, density: 0.14546454645464538 },
                { start: 4000, density: 0.09690969096909752 },
              ],
              percentiles: { p75: 2496 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9297000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042300000000000004,
                },
                { start: "0.25", density: 0.027999999999999994 },
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
        fcp: 1998,
        lcp: 2496,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651683060991,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5468999999999997 },
                { start: 800, end: 1800, density: 0.3671999999999997 },
                { start: 1800, density: 0.08590000000000053 },
              ],
              percentiles: { p75: 1119 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7347530493901225 },
                { start: 1800, end: 3000, density: 0.17726454709058193 },
                { start: 3000, density: 0.08798240351929547 },
              ],
              percentiles: { p75: 1870 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9424057594240577 },
                { start: 100, end: 300, density: 0.033496650334966495 },
                { start: 300, density: 0.024097590240975814 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7755999999999994 },
                { start: 2500, end: 4000, density: 0.1507999999999999 },
                { start: 4000, density: 0.07360000000000064 },
              ],
              percentiles: { p75: 2385 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8678999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07769999999999998,
                },
                { start: "0.25", density: 0.05440000000000006 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48589999999999955 },
                { start: 200, end: 500, density: 0.3606999999999997 },
                { start: 500, density: 0.15340000000000095 },
              ],
              percentiles: { p75: 352 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1870,
        lcp: 2385,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1651683061083,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.676835379604108 },
                { start: 2500, end: 4000, density: 0.20527436732648432 },
                { start: 4000, density: 0.11789025306940772 },
              ],
              percentiles: { p75: 2876 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9647922368748445,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012316496640955464,
                },
                { start: "0.25", density: 0.022891266484200052 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6203634553149115 },
                { start: 200, end: 500, density: 0.30781677869056506 },
                { start: 500, density: 0.07181976599452349 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4196540486337426 },
                { start: 800, end: 1800, density: 0.444221609425921 },
                { start: 1800, density: 0.13612434194033643 },
              ],
              percentiles: { p75: 1362 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5774242044600352 },
                { start: 1800, end: 3000, density: 0.2516913054372338 },
                { start: 3000, density: 0.17088449010273107 },
              ],
              percentiles: { p75: 2536 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620980091883614 },
                { start: 100, end: 300, density: 0.02922409392547218 },
                { start: 300, density: 0.008677896886166414 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2536,
        lcp: 2876,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683061165,
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
                  density: 0.9440518256772673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0325873576756969,
                },
                { start: "0.25", density: 0.02336081664703574 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847394075740534 },
                { start: 200, end: 500, density: 0.26752905886764156 },
                { start: 500, density: 0.14773153355830504 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7069626639757819 },
                { start: 800, end: 1800, density: 0.27043390514631677 },
                { start: 1800, density: 0.022603430877901204 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8695046747563159 },
                { start: 1800, end: 3000, density: 0.09628008752735229 },
                { start: 3000, density: 0.03421523771633186 },
              ],
              percentiles: { p75: 1483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9366830065359476 },
                { start: 100, end: 300, density: 0.01633986928104575 },
                { start: 300, density: 0.046977124183006654 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8689272258576242 },
                { start: 2500, end: 4000, density: 0.08506841165972635 },
                { start: 4000, density: 0.046004362482649476 },
              ],
              percentiles: { p75: 2012 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1483,
        lcp: 2012,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683061284,
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
                { start: 0, end: 800, density: 0.45099019803960744 },
                { start: 800, end: 1800, density: 0.4122824564912978 },
                { start: 1800, density: 0.13672734546909474 },
              ],
              percentiles: { p75: 1361 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6234376562343754 },
                { start: 1800, end: 3000, density: 0.21807819218078148 },
                { start: 3000, density: 0.15848415158484322 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.949889977995599 },
                { start: 100, end: 300, density: 0.031106221244248854 },
                { start: 300, density: 0.01900380076015209 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6971394278855759 },
                { start: 2500, end: 4000, density: 0.16813362672534468 },
                { start: 4000, density: 0.13472694538907945 },
              ],
              percentiles: { p75: 2874 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8866886688668867,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0616061606160616,
                },
                { start: "0.25", density: 0.05170517051705172 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6328898669600886 },
                { start: 200, end: 500, density: 0.2761828548564572 },
                { start: 500, density: 0.0909272781834541 },
              ],
              percentiles: { p75: 260 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2389,
        lcp: 2874,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683061405,
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
                { start: 0, end: 800, density: 0.5095509550955101 },
                { start: 800, end: 1800, density: 0.2658265826582661 },
                { start: 1800, density: 0.22462246224622376 },
              ],
              percentiles: { p75: 1673 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6193761247750429 },
                { start: 1800, end: 3000, density: 0.14497100579883979 },
                { start: 3000, density: 0.23565286942611738 },
              ],
              percentiles: { p75: 2901 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637 },
                { start: 100, end: 300, density: 0.0206 },
                { start: 300, density: 0.015699999999999992 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6386999999999984 },
                { start: 2500, end: 4000, density: 0.17809999999999956 },
                { start: 4000, density: 0.18320000000000217 },
              ],
              percentiles: { p75: 3301 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9148000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0565 },
                { start: "0.25", density: 0.028699999999999993 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6460584233693477 },
                { start: 200, end: 500, density: 0.2874149659863946 },
                { start: 500, density: 0.06652661064425769 },
              ],
              percentiles: { p75: 255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2901,
        lcp: 3301,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683061483,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7709687093871838 },
                { start: 800, end: 1800, density: 0.20793761871438568 },
                { start: 1800, density: 0.021093671898430522 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9072 },
                { start: 1800, end: 3000, density: 0.06879999999999997 },
                { start: 3000, density: 0.023999999999999962 },
              ],
              percentiles: { p75: 1228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659 },
                { start: 100, end: 300, density: 0.010299999999999998 },
                { start: 300, density: 0.023800000000000057 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8972088835534213 },
                { start: 2500, end: 4000, density: 0.0704781912765106 },
                { start: 4000, density: 0.03231292517006801 },
              ],
              percentiles: { p75: 1780 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7493 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17579999999999998,
                },
                { start: "0.25", density: 0.0749 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7601760176017603 },
                { start: 200, end: 500, density: 0.15381538153815386 },
                { start: 500, density: 0.08600860086008591 },
              ],
              percentiles: { p75: 196 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1228, lcp: 1780, cls: "0.09", fid: 9 },
      timestamp: 1651683061609,
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
                  density: 0.9402470895699692,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02328344024708957,
                },
                { start: "0.25", density: 0.03646947018294131 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47924618320610746 },
                { start: 200, end: 500, density: 0.3535305343511455 },
                { start: 500, density: 0.16722328244274703 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4168855982803913 },
                { start: 800, end: 1800, density: 0.4516360162407448 },
                { start: 1800, density: 0.13147838547886379 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5832734243949181 },
                { start: 1800, end: 3000, density: 0.2512580877066852 },
                { start: 3000, density: 0.16546848789839685 },
              ],
              percentiles: { p75: 2452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512555391432791 },
                { start: 100, end: 300, density: 0.03360413589364844 },
                { start: 300, density: 0.015140324963072434 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6872755566195843 },
                { start: 2500, end: 4000, density: 0.18895140052669393 },
                { start: 4000, density: 0.1237730428537218 },
              ],
              percentiles: { p75: 2869 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2452,
        lcp: 2869,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683061690,
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
                { start: "0.00", end: "0.10", density: 0.9527 },
                { start: "0.10", end: "0.25", density: 0.0355 },
                { start: "0.25", density: 0.011800000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6717015104531361 },
                { start: 200, end: 500, density: 0.25717715314594386 },
                { start: 500, density: 0.07112133640092 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5752575257525754 },
                { start: 800, end: 1800, density: 0.382838283828383 },
                { start: 1800, density: 0.04190419041904167 },
              ],
              percentiles: { p75: 995 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8461999999999998 },
                { start: 1800, end: 3000, density: 0.11909999999999997 },
                { start: 3000, density: 0.034700000000000224 },
              ],
              percentiles: { p75: 1529 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967 },
                { start: 100, end: 300, density: 0.0203 },
                { start: 300, density: 0.012699999999999979 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8643135686431357 },
                { start: 2500, end: 4000, density: 0.10348965103489652 },
                { start: 4000, density: 0.03219678032196788 },
              ],
              percentiles: { p75: 1982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1529,
        lcp: 1982,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651683061810,
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
                  density: 0.8797879787978797,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.093009300930093,
                },
                { start: "0.25", density: 0.027202720272027216 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6337999999999997 },
                { start: 200, end: 500, density: 0.2704999999999998 },
                { start: 500, density: 0.09570000000000049 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6247375262473752 },
                { start: 800, end: 1800, density: 0.32896710328967105 },
                { start: 1800, density: 0.046295370462953706 },
              ],
              percentiles: { p75: 970 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7963796379637961 },
                { start: 1800, end: 3000, density: 0.14971497149714966 },
                { start: 3000, density: 0.05390539053905427 },
              ],
              percentiles: { p75: 1666 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963996399639964 },
                { start: 100, end: 300, density: 0.021402140214021405 },
                { start: 300, density: 0.014601460146014605 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8128561431570526 },
                { start: 2500, end: 4000, density: 0.1317604718584424 },
                { start: 4000, density: 0.055383384984504985 },
              ],
              percentiles: { p75: 2189 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1666,
        lcp: 2189,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683061896,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595361149628137 },
                { start: 100, end: 300, density: 0.0252111433253498 },
                { start: 300, density: 0.015252741711836616 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.727339092347 },
                { start: 2500, end: 4000, density: 0.1839639858863606 },
                { start: 4000, density: 0.08869692176663936 },
              ],
              percentiles: { p75: 2601 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.780351728320194,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18144329896907216,
                },
                { start: "0.25", density: 0.03820497271073376 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6234530818214588 },
                { start: 200, end: 500, density: 0.26120389282710565 },
                { start: 500, density: 0.1153430253514356 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4990951863916032 },
                { start: 800, end: 1800, density: 0.42538303776088787 },
                { start: 1800, density: 0.0755217758475089 },
              ],
              percentiles: { p75: 1196 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6893948618044559 },
                { start: 1800, end: 3000, density: 0.2328016559113599 },
                { start: 3000, density: 0.07780348228418434 },
              ],
              percentiles: { p75: 2008 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2008,
        lcp: 2601,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1651683061982,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4861932938856021 },
                { start: 200, end: 500, density: 0.3540433925049314 },
                { start: 500, density: 0.15976331360946658 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8065304023653427 },
                { start: 800, end: 1800, density: 0.16865921069546216 },
                { start: 1800, density: 0.024810386939195243 },
              ],
              percentiles: { p75: 741 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.90027841052898 },
                { start: 1800, end: 3000, density: 0.0770690964312832 },
                { start: 3000, density: 0.022652493039736706 },
              ],
              percentiles: { p75: 1285 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582265504869296 },
                { start: 100, end: 300, density: 0.0216555612506407 },
                { start: 300, density: 0.020117888262429582 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8949505201725451 },
                { start: 2500, end: 4000, density: 0.08411570667343315 },
                { start: 4000, density: 0.020933773154021795 },
              ],
              percentiles: { p75: 1850 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8938097634625063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07574232511323604,
                },
                { start: "0.25", density: 0.030447911424257696 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1285,
        lcp: 1850,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651683062142,
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
                  density: 0.9414385741565882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049140674729471666,
                },
                { start: "0.25", density: 0.00942075111394017 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5427248842737394 },
                { start: 200, end: 500, density: 0.34542724884273734 },
                { start: 500, density: 0.11184786688352319 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5979964038016952 },
                { start: 800, end: 1800, density: 0.36077575134857426 },
                { start: 1800, density: 0.04122784484973046 },
              ],
              percentiles: { p75: 1011 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8243277848911651 },
                { start: 1800, end: 3000, density: 0.14110115236875798 },
                { start: 3000, density: 0.03457106274007701 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662463882322038 },
                { start: 100, end: 300, density: 0.0225899658523772 },
                { start: 300, density: 0.011163645915418966 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8472044932346182 },
                { start: 2500, end: 4000, density: 0.12101097778912429 },
                { start: 4000, density: 0.03178452897625746 },
              ],
              percentiles: { p75: 2071 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2071,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683062287,
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
                  density: 0.9438000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0408 },
                { start: "0.25", density: 0.015399999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.671701510453136 },
                { start: 200, end: 500, density: 0.23246974092227674 },
                { start: 500, density: 0.09582874862458728 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4504900980196034 },
                { start: 800, end: 1800, density: 0.36937387477495465 },
                { start: 1800, density: 0.18013602720544203 },
              ],
              percentiles: { p75: 1522 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6203999999999994 },
                { start: 1800, end: 3000, density: 0.2309999999999998 },
                { start: 3000, density: 0.1486000000000006 },
              ],
              percentiles: { p75: 2374 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460215913634548 },
                { start: 100, end: 300, density: 0.03428628548580568 },
                { start: 300, density: 0.019692123150739607 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7064499999999997 },
                { start: 2500, end: 4000, density: 0.19484999999999994 },
                { start: 4000, density: 0.09870000000000032 },
              ],
              percentiles: { p75: 2762 },
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
        lcp: 2762,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683062430,
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
                { start: 0, end: 200, density: 0.7197560487902419 },
                { start: 200, end: 500, density: 0.22905418916216752 },
                { start: 500, density: 0.051189762047590466 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25647435256474316 },
                { start: 800, end: 1800, density: 0.5821417858214168 },
                { start: 1800, density: 0.16138386161384005 },
              ],
              percentiles: { p75: 1559 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.491798359671934 },
                { start: 1800, end: 3000, density: 0.3233646729345867 },
                { start: 3000, density: 0.18483696739347924 },
              ],
              percentiles: { p75: 2678 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9822982298229823 },
                { start: 100, end: 300, density: 0.015301530153015303 },
                { start: 300, density: 0.002400240024002402 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6113611361136092 },
                { start: 2500, end: 4000, density: 0.23572357235723482 },
                { start: 4000, density: 0.15291529152915598 },
              ],
              percentiles: { p75: 3234 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8092809280928093,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11231123112311232,
                },
                { start: "0.25", density: 0.07840784078407843 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2678,
        lcp: 3234,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651683062526,
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
                  density: 0.8734000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.092 },
                { start: "0.25", density: 0.03459999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5716856628674264 },
                { start: 200, end: 500, density: 0.29364127174565074 },
                { start: 500, density: 0.134673065386923 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8284656931386277 },
                { start: 800, end: 1800, density: 0.14842968593718744 },
                { start: 1800, density: 0.0231046209241848 },
              ],
              percentiles: { p75: 705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9112088791120888 },
                { start: 1800, end: 3000, density: 0.06709329067093293 },
                { start: 3000, density: 0.02169783021697824 },
              ],
              percentiles: { p75: 1235 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663966396639663 },
                { start: 100, end: 300, density: 0.017401740174017404 },
                { start: 300, density: 0.016201620162016192 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9042617046818727 },
                { start: 2500, end: 4000, density: 0.07643057222889157 },
                { start: 4000, density: 0.019307723089235732 },
              ],
              percentiles: { p75: 1792 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1235,
        lcp: 1792,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1651683062619,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636891067320196 },
                { start: 100, end: 300, density: 0.027208162448734627 },
                { start: 300, density: 0.009102730819245761 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5769846030793843 },
                { start: 2500, end: 4000, density: 0.25374925014997013 },
                { start: 4000, density: 0.16926614677064564 },
              ],
              percentiles: { p75: 3385 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8974205158968205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05258948210357928,
                },
                { start: "0.25", density: 0.04999000199960013 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6137613761376145 },
                { start: 200, end: 500, density: 0.2929292929292932 },
                { start: 500, density: 0.09330933093309236 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29271218634409657 },
                { start: 800, end: 1800, density: 0.50924722583225 },
                { start: 1800, density: 0.1980405878236534 },
              ],
              percentiles: { p75: 1640 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4776567029891032 },
                { start: 1800, end: 3000, density: 0.28531440567829636 },
                { start: 3000, density: 0.23702889133260052 },
              ],
              percentiles: { p75: 2936 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2936,
        lcp: 3385,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651683062705,
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
                  density: 0.9405095541401275,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03057324840764332,
                },
                { start: "0.25", density: 0.028917197452229294 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6843691148775893 },
                { start: 200, end: 500, density: 0.2693032015065913 },
                { start: 500, density: 0.046327683615819355 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3798760010333248 },
                { start: 800, end: 1800, density: 0.47171273572720224 },
                { start: 1800, density: 0.14841126323947298 },
              ],
              percentiles: { p75: 1477 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5933100865297681 },
                { start: 1800, end: 3000, density: 0.22962675965388066 },
                { start: 3000, density: 0.17706315381635118 },
              ],
              percentiles: { p75: 2442 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636410855733021 },
                { start: 100, end: 300, density: 0.029996104402025707 },
                { start: 300, density: 0.0063628100246721185 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6641657047582412 },
                { start: 2500, end: 4000, density: 0.1787225856098502 },
                { start: 4000, density: 0.15711170963190865 },
              ],
              percentiles: { p75: 3002 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2442,
        lcp: 3002,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683062800,
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
                { start: 0, end: 800, density: 0.744125587441256 },
                { start: 800, end: 1800, density: 0.217978202179782 },
                { start: 1800, density: 0.03789621037896203 },
              ],
              percentiles: { p75: 814 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8916891689168914 },
                { start: 1800, end: 3000, density: 0.07630763076307628 },
                { start: 3000, density: 0.03200320032003222 },
              ],
              percentiles: { p75: 1275 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663966396639664 },
                { start: 100, end: 300, density: 0.0158015801580158 },
                { start: 300, density: 0.017801780178017833 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8660633936606339 },
                { start: 2500, end: 4000, density: 0.09504049595040497 },
                { start: 4000, density: 0.03889611038896106 },
              ],
              percentiles: { p75: 1906 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7870999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1668 },
                { start: "0.25", density: 0.04609999999999996 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7235999999999997 },
                { start: 200, end: 500, density: 0.18299999999999986 },
                { start: 500, density: 0.09340000000000057 },
              ],
              percentiles: { p75: 218 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1275,
        lcp: 1906,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651683062925,
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
                { start: 0, end: 800, density: 0.621237876212378 },
                { start: 800, end: 1800, density: 0.29087091290870887 },
                { start: 1800, density: 0.087891210878913 },
              ],
              percentiles: { p75: 1049 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.738978306508048 },
                { start: 1800, end: 3000, density: 0.1610516844946517 },
                { start: 3000, density: 0.09997000899730034 },
              ],
              percentiles: { p75: 1885 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9432829848954687 },
                { start: 100, end: 300, density: 0.033510053015904775 },
                { start: 300, density: 0.023206962088626513 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7778444311137768 },
                { start: 2500, end: 4000, density: 0.14017196560687853 },
                { start: 4000, density: 0.08198360327934466 },
              ],
              percentiles: { p75: 2393 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8249175082491751,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12248775122487751,
                },
                { start: "0.25", density: 0.052594740525947425 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5505999999999998 },
                { start: 200, end: 500, density: 0.2960999999999999 },
                { start: 500, density: 0.15330000000000024 },
              ],
              percentiles: { p75: 331 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1885,
        lcp: 2393,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1651683063008,
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
                { start: 0, end: 100, density: 0.9674967496749675 },
                { start: 100, end: 300, density: 0.024902490249024904 },
                { start: 300, density: 0.0076007600760076 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6813637272545479 },
                { start: 2500, end: 4000, density: 0.1951609678064383 },
                { start: 4000, density: 0.1234753049390139 },
              ],
              percentiles: { p75: 2888 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9305930593059306,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041204120412041204,
                },
                { start: "0.25", density: 0.028202820282028196 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6764000000000001 },
                { start: 200, end: 500, density: 0.2584 },
                { start: 500, density: 0.06519999999999988 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42597220833749844 },
                { start: 800, end: 1800, density: 0.44736579026292084 },
                { start: 1800, density: 0.1266620013995807 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.599080183963207 },
                { start: 1800, end: 3000, density: 0.24305138972205542 },
                { start: 3000, density: 0.1578684263147377 },
              ],
              percentiles: { p75: 2452 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2452,
        lcp: 2888,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651683063108,
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
                { start: "0.00", end: "0.10", density: 0.8649 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07400000000000001,
                },
                { start: "0.25", density: 0.0611 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8267173282671731 },
                { start: 200, end: 500, density: 0.1235876412358764 },
                { start: 500, density: 0.049695030496950385 },
              ],
              percentiles: { p75: 155 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42604260426042584 },
                { start: 800, end: 1800, density: 0.4135413541354133 },
                { start: 1800, density: 0.16041604160416076 },
              ],
              percentiles: { p75: 1346 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16176764647070563 },
                { start: 1800, end: 3000, density: 0.4209158168366321 },
                { start: 3000, density: 0.41731653669266217 },
              ],
              percentiles: { p75: 4418 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3308999999999995 },
                { start: 2500, end: 4000, density: 0.32549999999999935 },
                { start: 4000, density: 0.34360000000000124 },
              ],
              percentiles: { p75: 5085 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4418, lcp: 5085, cls: "0.04" },
      timestamp: 1651683063193,
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
                  density: 0.8426842684268425,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07860786078607859,
                },
                { start: "0.25", density: 0.07870787078707875 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5571442855714428 },
                { start: 200, end: 500, density: 0.2756724327567243 },
                { start: 500, density: 0.16718328167183286 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2979702029797019 },
                { start: 800, end: 1800, density: 0.42635736426357346 },
                { start: 1800, density: 0.2756724327567247 },
              ],
              percentiles: { p75: 1866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5121999999999998 },
                { start: 1800, end: 3000, density: 0.35289999999999994 },
                { start: 3000, density: 0.13490000000000027 },
              ],
              percentiles: { p75: 2544 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9426057394260573 },
                { start: 100, end: 300, density: 0.016898310168983095 },
                { start: 300, density: 0.04049595040495965 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6191119111911189 },
                { start: 2500, end: 4000, density: 0.28457845784578445 },
                { start: 4000, density: 0.09630963096309679 },
              ],
              percentiles: { p75: 3010 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2544,
        lcp: 3010,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651683063331,
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
                { start: 0, end: 2500, density: 0.8514054216264879 },
                { start: 2500, end: 4000, density: 0.11848554566369911 },
                { start: 4000, density: 0.030109032709812952 },
              ],
              percentiles: { p75: 2017 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8176 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13390000000000002,
                },
                { start: "0.25", density: 0.04850000000000004 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5360608182454739 },
                { start: 200, end: 500, density: 0.3325997799339803 },
                { start: 500, density: 0.13133940182054576 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6615353858456618 },
                { start: 800, end: 1800, density: 0.30907636945221917 },
                { start: 1800, density: 0.029388244702119155 },
              ],
              percentiles: { p75: 904 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8857342797160853 },
                { start: 1800, end: 3000, density: 0.0905728281515545 },
                { start: 3000, density: 0.023692892132360248 },
              ],
              percentiles: { p75: 1384 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648964896489648 },
                { start: 100, end: 300, density: 0.0172017201720172 },
                { start: 300, density: 0.017901790179017996 },
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
        fcp: 1384,
        lcp: 2017,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1651683063416,
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
                { start: 0, end: 200, density: 0.5747794035518822 },
                { start: 200, end: 500, density: 0.3254774935775718 },
                { start: 500, density: 0.09974310287054602 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39063022866703856 },
                { start: 800, end: 1800, density: 0.39252649191299505 },
                { start: 1800, density: 0.21684327941996645 },
              ],
              percentiles: { p75: 1739 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5078867882313454 },
                { start: 1800, end: 3000, density: 0.3608904799194537 },
                { start: 3000, density: 0.131222731849201 },
              ],
              percentiles: { p75: 2464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9180457052797477 },
                { start: 100, end: 300, density: 0.05369807497467072 },
                { start: 300, density: 0.028256219745581568 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5896258122339229 },
                { start: 2500, end: 4000, density: 0.3020389872283214 },
                { start: 4000, density: 0.10833520053775571 },
              ],
              percentiles: { p75: 3133 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9795599240478052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01005249636993187,
                },
                { start: "0.25", density: 0.010387579582262932 },
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
        fcp: 2464,
        lcp: 3133,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683063500,
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
                  density: 0.8339667933586717,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10352070414082816,
                },
                { start: "0.25", density: 0.0625125025005001 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5595000000000003 },
                { start: 200, end: 500, density: 0.3151000000000002 },
                { start: 500, density: 0.12539999999999948 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6843999999999997 },
                { start: 800, end: 1800, density: 0.23979999999999987 },
                { start: 1800, density: 0.07580000000000034 },
              ],
              percentiles: { p75: 925 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8358999999999998 },
                { start: 1800, end: 3000, density: 0.10819999999999995 },
                { start: 3000, density: 0.0559000000000003 },
              ],
              percentiles: { p75: 1456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502850855256576 },
                { start: 100, end: 300, density: 0.027608282484745426 },
                { start: 300, density: 0.02210663198959687 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8439156084391556 },
                { start: 2500, end: 4000, density: 0.10408959104089584 },
                { start: 4000, density: 0.051994800519948536 },
              ],
              percentiles: { p75: 2019 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1456,
        lcp: 2019,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651683063633,
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
                { start: 0, end: 800, density: 0.6565999999999997 },
                { start: 800, end: 1800, density: 0.2789 },
                { start: 1800, density: 0.06450000000000014 },
              ],
              percentiles: { p75: 947 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7960611816455061 },
                { start: 1800, end: 3000, density: 0.13705888233529934 },
                { start: 3000, density: 0.06687993601919455 },
              ],
              percentiles: { p75: 1660 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9479104179164166 },
                { start: 100, end: 300, density: 0.02399520095980804 },
                { start: 300, density: 0.028094381123775353 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8294829482948296 },
                { start: 2500, end: 4000, density: 0.1162116211621162 },
                { start: 4000, density: 0.05430543054305423 },
              ],
              percentiles: { p75: 2095 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.91 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07339999999999999,
                },
                { start: "0.25", density: 0.016600000000000004 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6367999999999996 },
                { start: 200, end: 500, density: 0.2754999999999999 },
                { start: 500, density: 0.08770000000000046 },
              ],
              percentiles: { p75: 255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1660,
        lcp: 2095,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651683063724,
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
                { start: 0, end: 2500, density: 0.8374674934986992 },
                { start: 2500, end: 4000, density: 0.11762352470494085 },
                { start: 4000, density: 0.04490898179636 },
              ],
              percentiles: { p75: 2111 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8976897689768977,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09050905090509051,
                },
                { start: "0.25", density: 0.011801180118011793 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6683331666833315 },
                { start: 200, end: 500, density: 0.25707429257074293 },
                { start: 500, density: 0.07459254074592561 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5368389483155053 },
                { start: 800, end: 1800, density: 0.4164750574827551 },
                { start: 1800, density: 0.046685994201739744 },
              ],
              percentiles: { p75: 1077 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8259000000000003 },
                { start: 1800, end: 3000, density: 0.13240000000000005 },
                { start: 3000, density: 0.04169999999999969 },
              ],
              percentiles: { p75: 1605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9552910582116422 },
                { start: 100, end: 300, density: 0.022504500900180035 },
                { start: 300, density: 0.02220444088817766 },
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
        fcp: 1605,
        lcp: 2111,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1651683063827,
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
                { start: "0.00", end: "0.10", density: 0.7493 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17579999999999998,
                },
                { start: "0.25", density: 0.0749 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7601760176017603 },
                { start: 200, end: 500, density: 0.15381538153815386 },
                { start: 500, density: 0.08600860086008591 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7709687093871838 },
                { start: 800, end: 1800, density: 0.20793761871438568 },
                { start: 1800, density: 0.021093671898430522 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9072 },
                { start: 1800, end: 3000, density: 0.06879999999999997 },
                { start: 3000, density: 0.023999999999999962 },
              ],
              percentiles: { p75: 1228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659 },
                { start: 100, end: 300, density: 0.010299999999999998 },
                { start: 300, density: 0.023800000000000057 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8972088835534213 },
                { start: 2500, end: 4000, density: 0.0704781912765106 },
                { start: 4000, density: 0.03231292517006801 },
              ],
              percentiles: { p75: 1780 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1228, lcp: 1780, cls: "0.09", fid: 9 },
      timestamp: 1651683063921,
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
                  density: 0.8996544773970631,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06809674632882233,
                },
                { start: "0.25", density: 0.032248776274114606 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4318820224719103 },
                { start: 200, end: 500, density: 0.406179775280899 },
                { start: 500, density: 0.16193820224719072 },
              ],
              percentiles: { p75: 374 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6318393480791619 },
                { start: 800, end: 1800, density: 0.33367287543655416 },
                { start: 1800, density: 0.034487776484284076 },
              ],
              percentiles: { p75: 922 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8685638844066306 },
                { start: 1800, end: 3000, density: 0.10532492298665104 },
                { start: 3000, density: 0.0261111926067185 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9550218340611353 },
                { start: 100, end: 300, density: 0.02125181950509462 },
                { start: 300, density: 0.023726346433770064 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.845497007736097 },
                { start: 2500, end: 4000, density: 0.1242884250474384 },
                { start: 4000, density: 0.030214567216464712 },
              ],
              percentiles: { p75: 2053 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 2053,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651683064016,
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
                  density: 0.8676132386761325,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0956904309569043,
                },
                { start: "0.25", density: 0.0366963303669633 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4764523547645239 },
                { start: 200, end: 500, density: 0.29067093290670953 },
                { start: 500, density: 0.2328767123287665 },
              ],
              percentiles: { p75: 463 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36747349469893986 },
                { start: 800, end: 1800, density: 0.39217843568713745 },
                { start: 1800, density: 0.24034806961392272 },
              ],
              percentiles: { p75: 1801 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4474447444744502 },
                { start: 1800, end: 3000, density: 0.24522452245224668 },
                { start: 3000, density: 0.3073307330733031 },
              ],
              percentiles: { p75: 3441 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.900670201060318 },
                { start: 100, end: 300, density: 0.062218665599679895 },
                { start: 300, density: 0.03711113334000216 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4898989898989936 },
                { start: 2500, end: 4000, density: 0.2400740074007419 },
                { start: 4000, density: 0.27002700270026453 },
              ],
              percentiles: { p75: 4236 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3441,
        lcp: 4236,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1651683064151,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642964296429644 },
                { start: 100, end: 300, density: 0.024402440244024402 },
                { start: 300, density: 0.01130113011301126 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8431029308792641 },
                { start: 2500, end: 4000, density: 0.1023807142142643 },
                { start: 4000, density: 0.054516354906471685 },
              ],
              percentiles: { p75: 2021 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9505049495050495,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0318968103189681,
                },
                { start: "0.25", density: 0.017598240175982407 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6652330466093226 },
                { start: 200, end: 500, density: 0.2590518103620727 },
                { start: 500, density: 0.07571514302860481 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7016999999999999 },
                { start: 800, end: 1800, density: 0.24489999999999992 },
                { start: 1800, density: 0.05340000000000032 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.830683068306831 },
                { start: 1800, end: 3000, density: 0.10911091109110913 },
                { start: 3000, density: 0.060206020602059866 },
              ],
              percentiles: { p75: 1491 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1491,
        lcp: 2021,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651683064244,
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
                  density: 0.9766707168894289,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01470230862697448,
                },
                { start: "0.25", density: 0.008626974483596592 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6299496040316775 },
                { start: 200, end: 500, density: 0.2927765778737702 },
                { start: 500, density: 0.07727381809455224 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.552218681049277 },
                { start: 800, end: 1800, density: 0.4030399607746998 },
                { start: 1800, density: 0.0447413581760233 },
              ],
              percentiles: { p75: 1020 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8376068376068377 },
                { start: 1800, end: 3000, density: 0.12637362637362642 },
                { start: 3000, density: 0.03601953601953577 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621900319175056 },
                { start: 100, end: 300, density: 0.023201571323348887 },
                { start: 300, density: 0.014608396759145612 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8735218822382056 },
                { start: 2500, end: 4000, density: 0.09795196879190543 },
                { start: 4000, density: 0.02852614896988901 },
              ],
              percentiles: { p75: 1933 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1574,
        lcp: 1933,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683064334,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8462153784621538 },
                { start: 800, end: 1800, density: 0.14118588141185887 },
                { start: 1800, density: 0.012598740125987391 },
              ],
              percentiles: { p75: 682 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9419116176764646 },
                { start: 1800, end: 3000, density: 0.04539092181563688 },
                { start: 3000, density: 0.012697460507898432 },
              ],
              percentiles: { p75: 1152 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603079384123177 },
                { start: 100, end: 300, density: 0.020295940811837634 },
                { start: 300, density: 0.019396120775844693 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9315 },
                { start: 2500, end: 4000, density: 0.05410000000000002 },
                { start: 4000, density: 0.014399999999999956 },
              ],
              percentiles: { p75: 1622 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8098 },
                { start: "0.10", end: "0.25", density: 0.1457 },
                { start: "0.25", density: 0.04450000000000004 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7241827451764471 },
                { start: 200, end: 500, density: 0.18114565630310914 },
                { start: 500, density: 0.09467159852044374 },
              ],
              percentiles: { p75: 220 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1152,
        lcp: 1622,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651683064467,
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
                { start: 0, end: 2500, density: 0.5704429557044286 },
                { start: 2500, end: 4000, density: 0.25947405259474005 },
                { start: 4000, density: 0.17008299170083133 },
              ],
              percentiles: { p75: 3370 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7879212078792119,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12418758124187579,
                },
                { start: "0.25", density: 0.08789121087891225 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6147385261473852 },
                { start: 200, end: 500, density: 0.2438756124387561 },
                { start: 500, density: 0.14138586141385856 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26881935419374137 },
                { start: 800, end: 1800, density: 0.3929821053683888 },
                { start: 1800, density: 0.3381985404378698 },
              ],
              percentiles: { p75: 2052 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4847515248475146 },
                { start: 1800, end: 3000, density: 0.2957704229577037 },
                { start: 3000, density: 0.21947805219478175 },
              ],
              percentiles: { p75: 2841 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9358000000000001 },
                { start: 100, end: 300, density: 0.0328 },
                { start: 300, density: 0.03140000000000003 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2841,
        lcp: 3370,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651683064556,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9000908265213443 },
                { start: 1800, end: 3000, density: 0.08128973660308808 },
                { start: 3000, density: 0.01861943687556768 },
              ],
              percentiles: { p75: 1360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9540050062578221 },
                { start: 100, end: 300, density: 0.021433041301627032 },
                { start: 300, density: 0.024561952440550858 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.910760163215959 },
                { start: 2500, end: 4000, density: 0.07034910080096723 },
                { start: 4000, density: 0.01889073598307393 },
              ],
              percentiles: { p75: 1760 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9421499925451021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04100193827344565,
                },
                { start: "0.25", density: 0.0168480691814522 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6508077664147026 },
                { start: 200, end: 500, density: 0.23610493552690084 },
                { start: 500, density: 0.11308729805839647 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6950959488272921 },
                { start: 800, end: 1800, density: 0.2812975936643313 },
                { start: 1800, density: 0.023606457508376533 },
              ],
              percentiles: { p75: 877 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1360,
        lcp: 1760,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683064648,
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
                  density: 0.9205438443307971,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025944867157290753,
                },
                { start: "0.25", density: 0.05351128851191226 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5410603568265219 },
                { start: 200, end: 500, density: 0.3560673162090348 },
                { start: 500, density: 0.10287232696444347 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26224783861671447 },
                { start: 800, end: 1800, density: 0.5095852650043851 },
                { start: 1800, density: 0.22816689637890047 },
              ],
              percentiles: { p75: 1737 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42674756667930663 },
                { start: 1800, end: 3000, density: 0.30527114144861534 },
                { start: 3000, density: 0.2679812918720781 },
              ],
              percentiles: { p75: 3123 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543781225348409 },
                { start: 100, end: 300, density: 0.03576124112542731 },
                { start: 300, density: 0.009860636339731797 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5425585494837574 },
                { start: 2500, end: 4000, density: 0.27839335180055413 },
                { start: 4000, density: 0.1790480987156886 },
              ],
              percentiles: { p75: 3497 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3123,
        lcp: 3497,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683064779,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6641335866413359 },
                { start: 1800, end: 3000, density: 0.22687731226877314 },
                { start: 3000, density: 0.1089891010898908 },
              ],
              percentiles: { p75: 2352 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9890989098909891 },
                { start: 100, end: 300, density: 0.0081008100810081 },
                { start: 300, density: 0.0028002800280028 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7302039592081581 },
                { start: 2500, end: 4000, density: 0.19271145770845824 },
                { start: 4000, density: 0.07708458308338362 },
              ],
              percentiles: { p75: 2711 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7768999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1708 },
                { start: "0.25", density: 0.05230000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8141814181418142 },
                { start: 200, end: 500, density: 0.1551155115511551 },
                { start: 500, density: 0.030703070307030678 },
              ],
              percentiles: { p75: 161 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38081424427328203 },
                { start: 800, end: 1800, density: 0.4390317095128539 },
                { start: 1800, density: 0.18015404621386405 },
              ],
              percentiles: { p75: 1572 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2352, lcp: 2711, cls: "0.08", fid: 8 },
      timestamp: 1651683064919,
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
                  density: 0.9702940588117622,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019403880776155232,
                },
                { start: "0.25", density: 0.010302060412082413 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5883823235352932 },
                { start: 200, end: 500, density: 0.3125374925014998 },
                { start: 500, density: 0.09908018396320702 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40116104494044635 },
                { start: 800, end: 1800, density: 0.3853468121309178 },
                { start: 1800, density: 0.2134921429286358 },
              ],
              percentiles: { p75: 1731 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5207958408318334 },
                { start: 1800, end: 3000, density: 0.34923015396920587 },
                { start: 3000, density: 0.12997400519896063 },
              ],
              percentiles: { p75: 2449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9212921292129213 },
                { start: 100, end: 300, density: 0.051905190519051896 },
                { start: 300, density: 0.026802680268026867 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5965403459654034 },
                { start: 2500, end: 4000, density: 0.2935706429357064 },
                { start: 4000, density: 0.10988901109889032 },
              ],
              percentiles: { p75: 3128 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2449,
        lcp: 3128,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683065009,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45851063829787275 },
                { start: 800, end: 1800, density: 0.3477541371158397 },
                { start: 1800, density: 0.19373522458628753 },
              ],
              percentiles: { p75: 1579 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129823725583603 },
                { start: 1800, end: 3000, density: 0.21343496903287243 },
                { start: 3000, density: 0.27358265840876733 },
              ],
              percentiles: { p75: 3245 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5797999047165316 },
                { start: 2500, end: 4000, density: 0.21081467365412088 },
                { start: 4000, density: 0.20938542162934748 },
              ],
              percentiles: { p75: 3629 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9162346842601319,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05301602262016964,
                },
                { start: "0.25", density: 0.0307492931196984 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5786778398510238 },
                { start: 200, end: 500, density: 0.28223929236499046 },
                { start: 500, density: 0.13908286778398574 },
              ],
              percentiles: { p75: 329 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3245, lcp: 3629, cls: "0.00" },
      timestamp: 1651683065105,
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
                { start: 0, end: 800, density: 0.20506252825071494 },
                { start: 800, end: 1800, density: 0.5990658430013539 },
                { start: 1800, density: 0.19587162874793115 },
              ],
              percentiles: { p75: 1643 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39672429481346677 },
                { start: 1800, end: 3000, density: 0.383985441310282 },
                { start: 3000, density: 0.21929026387625122 },
              ],
              percentiles: { p75: 2851 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9722047738693467 },
                { start: 100, end: 300, density: 0.02402638190954774 },
                { start: 300, density: 0.0037688442211055305 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5725243013365728 },
                { start: 2500, end: 4000, density: 0.2851609963547993 },
                { start: 4000, density: 0.14231470230862794 },
              ],
              percentiles: { p75: 3226 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9390589992531739,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02524271844660194,
                },
                { start: "0.25", density: 0.03569828230022407 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6180627882755544 },
                { start: 200, end: 500, density: 0.31929772355304276 },
                { start: 500, density: 0.0626394881714029 },
              ],
              percentiles: { p75: 242 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2851,
        lcp: 3226,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683065250,
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
                  density: 0.932976306394028,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04333008763388511,
                },
                { start: "0.25", density: 0.023693605972086997 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5834248940511697 },
                { start: 200, end: 500, density: 0.2746821535080836 },
                { start: 500, density: 0.14189295244074668 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8201284796573877 },
                { start: 800, end: 1800, density: 0.16554109701861308 },
                { start: 1800, density: 0.014330423323999334 },
              ],
              percentiles: { p75: 724 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9281067556296914 },
                { start: 1800, end: 3000, density: 0.05504587155963302 },
                { start: 3000, density: 0.016847372810675543 },
              ],
              percentiles: { p75: 1280 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9371639784946237 },
                { start: 100, end: 300, density: 0.03074596774193549 },
                { start: 300, density: 0.032090053763440644 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9195809963708347 },
                { start: 2500, end: 4000, density: 0.06540745628505445 },
                { start: 4000, density: 0.015011547344110811 },
              ],
              percentiles: { p75: 1698 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1280,
        lcp: 1698,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683065390,
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
                { start: 0, end: 800, density: 0.695639127825565 },
                { start: 800, end: 1800, density: 0.25805161032206436 },
                { start: 1800, density: 0.04630926185237071 },
              ],
              percentiles: { p75: 938 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8027000000000001 },
                { start: 1800, end: 3000, density: 0.1465 },
                { start: 3000, density: 0.0508 },
              ],
              percentiles: { p75: 1703 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1703 },
      timestamp: 1651683065537,
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
                  density: 0.9384938493849385,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04040404040404041,
                },
                { start: "0.25", density: 0.021102110211021097 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8674000000000001 },
                { start: 200, end: 500, density: 0.10519999999999999 },
                { start: 500, density: 0.027399999999999997 },
              ],
              percentiles: { p75: 124 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5804 },
                { start: 800, end: 1800, density: 0.3638 },
                { start: 1800, density: 0.05580000000000004 },
              ],
              percentiles: { p75: 1098 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7742548509701941 },
                { start: 1800, end: 3000, density: 0.17743548709741946 },
                { start: 3000, density: 0.04830966193238641 },
              ],
              percentiles: { p75: 1741 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9785021497850216 },
                { start: 100, end: 300, density: 0.014398560143985602 },
                { start: 300, density: 0.007099290070992896 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8161816181618166 },
                { start: 2500, end: 4000, density: 0.1197119711971198 },
                { start: 4000, density: 0.06410641064106351 },
              ],
              percentiles: { p75: 2204 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1741, lcp: 2204, cls: "0.01", fid: 8 },
      timestamp: 1651683065637,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648964896489649 },
                { start: 100, end: 300, density: 0.0272027202720272 },
                { start: 300, density: 0.007900790079007899 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45280471952804635 },
                { start: 2500, end: 4000, density: 0.3243175682431751 },
                { start: 4000, density: 0.22287771222877853 },
              ],
              percentiles: { p75: 3912 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9293 },
                { start: "0.10", end: "0.25", density: 0.0395 },
                { start: "0.25", density: 0.031200000000000006 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5138486151384863 },
                { start: 200, end: 500, density: 0.35786421357864223 },
                { start: 500, density: 0.12828717128287137 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.204740948189638 },
                { start: 800, end: 1800, density: 0.5364072814562915 },
                { start: 1800, density: 0.25885177035407053 },
              ],
              percentiles: { p75: 1853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3382661733826619 },
                { start: 1800, end: 3000, density: 0.3432656734326569 },
                { start: 3000, density: 0.3184681531846812 },
              ],
              percentiles: { p75: 3426 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3426,
        lcp: 3912,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651683065729,
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
                  density: 0.9570949720670392,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02972067039106146,
                },
                { start: "0.25", density: 0.013184357541899444 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6390041493775934 },
                { start: 200, end: 500, density: 0.31906529810002193 },
                { start: 500, density: 0.04193055252238481 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34248788368336025 },
                { start: 800, end: 1800, density: 0.42557119778444497 },
                { start: 1800, density: 0.2319409185321948 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5457875457875455 },
                { start: 1800, end: 3000, density: 0.31181318681318676 },
                { start: 3000, density: 0.1423992673992677 },
              ],
              percentiles: { p75: 2677 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9733561476411635 },
                { start: 100, end: 300, density: 0.01979956000977756 },
                { start: 300, density: 0.00684429234905891 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6417385383567862 },
                { start: 2500, end: 4000, density: 0.26974580118020874 },
                { start: 4000, density: 0.08851566046300499 },
              ],
              percentiles: { p75: 2932 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2677,
        lcp: 2932,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683065823,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6010803240972281 },
                { start: 1800, end: 3000, density: 0.24037211163348957 },
                { start: 3000, density: 0.15854756426928235 },
              ],
              percentiles: { p75: 2398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556044395560445 },
                { start: 100, end: 300, density: 0.029797020297970198 },
                { start: 300, density: 0.014598540145985444 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6850055016504939 },
                { start: 2500, end: 4000, density: 0.18375512653796108 },
                { start: 4000, density: 0.13123937181154482 },
              ],
              percentiles: { p75: 2902 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8829 },
                { start: "0.10", end: "0.25", density: 0.0675 },
                { start: "0.25", density: 0.049600000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5380923815236959 },
                { start: 200, end: 500, density: 0.30943811237752494 },
                { start: 500, density: 0.1524695060987791 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4316589953972381 },
                { start: 800, end: 1800, density: 0.444066439863918 },
                { start: 1800, density: 0.12427456473884374 },
              ],
              percentiles: { p75: 1315 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2398,
        lcp: 2902,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651683065971,
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
                  density: 0.8624084827063873,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0930320626104519,
                },
                { start: "0.25", density: 0.04455945468316082 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7518266565885613 },
                { start: 200, end: 500, density: 0.20760896951373142 },
                { start: 500, density: 0.04056437389770727 },
              ],
              percentiles: { p75: 198 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5192063088272703 },
                { start: 800, end: 1800, density: 0.36428389722716853 },
                { start: 1800, density: 0.11650979394556116 },
              ],
              percentiles: { p75: 1256 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7554878822484449 },
                { start: 1800, end: 3000, density: 0.14173328257835283 },
                { start: 3000, density: 0.10277883517320222 },
              ],
              percentiles: { p75: 1792 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9573541061526274 },
                { start: 100, end: 300, density: 0.034724055980987587 },
                { start: 300, density: 0.007921837866385001 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8033265617064491 },
                { start: 2500, end: 4000, density: 0.11490604367699325 },
                { start: 4000, density: 0.08176739461655762 },
              ],
              percentiles: { p75: 2168 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1792,
        lcp: 2168,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651683066068,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9707970797079707 },
                { start: 100, end: 300, density: 0.023102310231023097 },
                { start: 300, density: 0.006100610061006099 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6727345469093817 },
                { start: 2500, end: 4000, density: 0.16373274654930983 },
                { start: 4000, density: 0.16353270654130847 },
              ],
              percentiles: { p75: 3141 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8441155884411559,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11178882111788821,
                },
                { start: "0.25", density: 0.04409559044095594 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7199159747924375 },
                { start: 200, end: 500, density: 0.2228668600580173 },
                { start: 500, density: 0.05721716514954517 },
              ],
              percentiles: { p75: 210 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41014101410141013 },
                { start: 800, end: 1800, density: 0.4516451645164517 },
                { start: 1800, density: 0.13821382138213814 },
              ],
              percentiles: { p75: 1453 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6230130960711773 },
                { start: 1800, end: 3000, density: 0.20863740877736622 },
                { start: 3000, density: 0.16834949515145656 },
              ],
              percentiles: { p75: 2411 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2411,
        lcp: 3141,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651683066217,
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
                { start: 0, end: 2500, density: 0.723682895131462 },
                { start: 2500, end: 4000, density: 0.1829451164650609 },
                { start: 4000, density: 0.093371988403477 },
              ],
              percentiles: { p75: 2771 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7978 },
                { start: "0.10", end: "0.25", density: 0.1507 },
                { start: "0.25", density: 0.05149999999999995 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7547000000000004 },
                { start: 200, end: 500, density: 0.17730000000000012 },
                { start: 500, density: 0.06799999999999957 },
              ],
              percentiles: { p75: 203 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48335166483351655 },
                { start: 800, end: 1800, density: 0.42905709429057093 },
                { start: 1800, density: 0.08759124087591258 },
              ],
              percentiles: { p75: 1301 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7017894631610531 },
                { start: 1800, end: 3000, density: 0.2077376786963915 },
                { start: 3000, density: 0.09047285814255526 },
              ],
              percentiles: { p75: 2144 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705999999999999 },
                { start: 100, end: 300, density: 0.0139 },
                { start: 300, density: 0.015499999999999986 },
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
        fcp: 2144,
        lcp: 2771,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651683066314,
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
                { start: 0, end: 2500, density: 0.6452790558111616 },
                { start: 2500, end: 4000, density: 0.22329465893178613 },
                { start: 4000, density: 0.1314262852570523 },
              ],
              percentiles: { p75: 3047 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052905290529053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0661066106610661,
                },
                { start: "0.25", density: 0.028602860286028584 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6192000000000003 },
                { start: 200, end: 500, density: 0.30760000000000015 },
                { start: 500, density: 0.07319999999999956 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31689999999999974 },
                { start: 800, end: 1800, density: 0.5065999999999995 },
                { start: 1800, density: 0.17650000000000082 },
              ],
              percentiles: { p75: 1590 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.534246575342465 },
                { start: 1800, end: 3000, density: 0.29817018298170134 },
                { start: 3000, density: 0.16758324167583366 },
              ],
              percentiles: { p75: 2568 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715886354541817 },
                { start: 100, end: 300, density: 0.02250900360144058 },
                { start: 300, density: 0.005902360944377762 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2568,
        lcp: 3047,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651683066409,
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
                  density: 0.9340333539221743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028165534280420016,
                },
                { start: "0.25", density: 0.03780111179740579 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40495363591996114 },
                { start: 200, end: 500, density: 0.4177647632991706 },
                { start: 500, density: 0.17728160078086835 },
              ],
              percentiles: { p75: 393 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.51330376940133 },
                { start: 800, end: 1800, density: 0.391722099039172 },
                { start: 1800, density: 0.09497413155949788 },
              ],
              percentiles: { p75: 1164 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7060575968222437 },
                { start: 1800, end: 3000, density: 0.196127110228401 },
                { start: 3000, density: 0.09781529294935531 },
              ],
              percentiles: { p75: 1963 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9313664208026006 },
                { start: 100, end: 300, density: 0.04025503187898488 },
                { start: 300, density: 0.02837854731841471 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7636905501055496 },
                { start: 2500, end: 4000, density: 0.16130634546131856 },
                { start: 4000, density: 0.07500310443313177 },
              ],
              percentiles: { p75: 2449 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1963,
        lcp: 2449,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1651683066501,
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
                { start: 0, end: 800, density: 0.6848335067637877 },
                { start: 800, end: 1800, density: 0.27276274713839743 },
                { start: 1800, density: 0.042403746097814755 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7831388488265374 },
                { start: 1800, end: 3000, density: 0.16349809885931552 },
                { start: 3000, density: 0.053363052314147105 },
              ],
              percentiles: { p75: 1811 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1811 },
      timestamp: 1651683066645,
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
                  density: 0.8212178782121787,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11768823117688229,
                },
                { start: "0.25", density: 0.06109389061093888 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7484496899379881 },
                { start: 200, end: 500, density: 0.18223644728945804 },
                { start: 500, density: 0.06931386277255377 },
              ],
              percentiles: { p75: 197 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41465853414658466 },
                { start: 800, end: 1800, density: 0.38906109389061033 },
                { start: 1800, density: 0.196280371962805 },
              ],
              percentiles: { p75: 1624 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.629125825165032 },
                { start: 1800, end: 3000, density: 0.2101420284056809 },
                { start: 3000, density: 0.16073214642928696 },
              ],
              percentiles: { p75: 2430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657931586317263 },
                { start: 100, end: 300, density: 0.024404880976195236 },
                { start: 300, density: 0.009801960392078434 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6904000000000001 },
                { start: 2500, end: 4000, density: 0.18699999999999997 },
                { start: 4000, density: 0.1226 },
              ],
              percentiles: { p75: 2900 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2430,
        lcp: 2900,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651683066809,
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
                  density: 0.9440518256772673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0325873576756969,
                },
                { start: "0.25", density: 0.02336081664703574 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847394075740534 },
                { start: 200, end: 500, density: 0.26752905886764156 },
                { start: 500, density: 0.14773153355830504 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7069626639757819 },
                { start: 800, end: 1800, density: 0.27043390514631677 },
                { start: 1800, density: 0.022603430877901204 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8695046747563159 },
                { start: 1800, end: 3000, density: 0.09628008752735229 },
                { start: 3000, density: 0.03421523771633186 },
              ],
              percentiles: { p75: 1483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9366830065359476 },
                { start: 100, end: 300, density: 0.01633986928104575 },
                { start: 300, density: 0.046977124183006654 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8689272258576242 },
                { start: 2500, end: 4000, density: 0.08506841165972635 },
                { start: 4000, density: 0.046004362482649476 },
              ],
              percentiles: { p75: 2012 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1483,
        lcp: 2012,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683066909,
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
                  density: 0.9360217138425746,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046529662659945716,
                },
                { start: "0.25", density: 0.017448623497479644 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5003648303538852 },
                { start: 200, end: 500, density: 0.3265231667274715 },
                { start: 500, density: 0.1731120029186434 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6024647187437885 },
                { start: 800, end: 1800, density: 0.3546014708805408 },
                { start: 1800, density: 0.04293381037567079 },
              ],
              percentiles: { p75: 978 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8431178103927014 },
                { start: 1800, end: 3000, density: 0.11305037683458943 },
                { start: 3000, density: 0.043831812772709235 },
              ],
              percentiles: { p75: 1508 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9375500400320257 },
                { start: 100, end: 300, density: 0.04323458767013611 },
                { start: 300, density: 0.019215372297838207 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8854516702905714 },
                { start: 2500, end: 4000, density: 0.08351452856295709 },
                { start: 4000, density: 0.03103380114647158 },
              ],
              percentiles: { p75: 1976 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1508,
        lcp: 1976,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651683067071,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6883311668833122 },
                { start: 200, end: 500, density: 0.2292770722927709 },
                { start: 500, density: 0.08239176082391692 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44499999999999995 },
                { start: 800, end: 1800, density: 0.42329999999999995 },
                { start: 1800, density: 0.13170000000000015 },
              ],
              percentiles: { p75: 1376 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.689206762028608 },
                { start: 1800, end: 3000, density: 0.19175752725817738 },
                { start: 3000, density: 0.11903571071321463 },
              ],
              percentiles: { p75: 2103 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962477486491895 },
                { start: 100, end: 300, density: 0.024914948969381626 },
                { start: 300, density: 0.01260756453872334 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7502500500100013 },
                { start: 2500, end: 4000, density: 0.15273054610922163 },
                { start: 4000, density: 0.09701940388077712 },
              ],
              percentiles: { p75: 2504 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8151184881511847,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12128787121287869,
                },
                { start: "0.25", density: 0.06359364063593666 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2103,
        lcp: 2504,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651683067220,
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
                { start: 0, end: 1800, density: 0.7017894631610531 },
                { start: 1800, end: 3000, density: 0.2077376786963915 },
                { start: 3000, density: 0.09047285814255526 },
              ],
              percentiles: { p75: 2144 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705999999999999 },
                { start: 100, end: 300, density: 0.0139 },
                { start: 300, density: 0.015499999999999986 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.723682895131462 },
                { start: 2500, end: 4000, density: 0.1829451164650609 },
                { start: 4000, density: 0.093371988403477 },
              ],
              percentiles: { p75: 2771 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7978 },
                { start: "0.10", end: "0.25", density: 0.1507 },
                { start: "0.25", density: 0.05149999999999995 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7547000000000004 },
                { start: 200, end: 500, density: 0.17730000000000012 },
                { start: 500, density: 0.06799999999999957 },
              ],
              percentiles: { p75: 203 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48335166483351655 },
                { start: 800, end: 1800, density: 0.42905709429057093 },
                { start: 1800, density: 0.08759124087591258 },
              ],
              percentiles: { p75: 1301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2144,
        lcp: 2771,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651683067323,
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
                  density: 0.9003944773175542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0302902225979149,
                },
                { start: "0.25", density: 0.06931530008453088 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4874328054627334 },
                { start: 200, end: 500, density: 0.2968182478570386 },
                { start: 500, density: 0.215748946680228 },
              ],
              percentiles: { p75: 423 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37517670342097764 },
                { start: 800, end: 1800, density: 0.44105173876166187 },
                { start: 1800, density: 0.18377155781736051 },
              ],
              percentiles: { p75: 1540 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5754932799542459 },
                { start: 1800, end: 3000, density: 0.2374892765227336 },
                { start: 3000, density: 0.18701744352302035 },
              ],
              percentiles: { p75: 2551 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8649263924723025 },
                { start: 100, end: 300, density: 0.05752010927303083 },
                { start: 300, density: 0.0775534982546666 },
              ],
              percentiles: { p75: 23 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6381541115583671 },
                { start: 2500, end: 4000, density: 0.18315123634272573 },
                { start: 4000, density: 0.17869465209890723 },
              ],
              percentiles: { p75: 3251 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2551,
        lcp: 3251,
        cls: "0.01",
        fid: 23,
      },
      timestamp: 1651683067422,
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
                { start: "0.00", end: "0.10", density: 0.9353 },
                { start: "0.10", end: "0.25", density: 0.0545 },
                { start: "0.25", density: 0.010199999999999996 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6229754049190164 },
                { start: 200, end: 500, density: 0.2818436312737453 },
                { start: 500, density: 0.0951809638072384 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6181763647270546 },
                { start: 800, end: 1800, density: 0.3454309138172364 },
                { start: 1800, density: 0.036392721455709084 },
              ],
              percentiles: { p75: 986 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8423369347739096 },
                { start: 1800, end: 3000, density: 0.12625050020008002 },
                { start: 3000, density: 0.031412565026010496 },
              ],
              percentiles: { p75: 1540 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972902709729027 },
                { start: 100, end: 300, density: 0.017198280171982803 },
                { start: 300, density: 0.00989901009899011 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8424184836967398 },
                { start: 2500, end: 4000, density: 0.12477495499099829 },
                { start: 4000, density: 0.03280656131226193 },
              ],
              percentiles: { p75: 2090 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1540,
        lcp: 2090,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651683067571,
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
                  density: 0.8052805280528054,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16551655165516554,
                },
                { start: "0.25", density: 0.029202920292029196 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6212242448489697 },
                { start: 200, end: 500, density: 0.2758551710342068 },
                { start: 500, density: 0.10292058411682348 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6644000000000001 },
                { start: 800, end: 1800, density: 0.28540000000000015 },
                { start: 1800, density: 0.05019999999999982 },
              ],
              percentiles: { p75: 958 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8154815481548152 },
                { start: 1800, end: 3000, density: 0.13421342134213418 },
                { start: 3000, density: 0.05030503050305064 },
              ],
              percentiles: { p75: 1600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525047495250476 },
                { start: 100, end: 300, density: 0.028597140285971406 },
                { start: 300, density: 0.0188981101889811 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8404319136172763 },
                { start: 2500, end: 4000, density: 0.11347730453909215 },
                { start: 4000, density: 0.04609078184363148 },
              ],
              percentiles: { p75: 2061 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1600,
        lcp: 2061,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651683067669,
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
                  density: 0.9614619142391895,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025872987153971412,
                },
                { start: "0.25", density: 0.012665098606839153 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5701661364439731 },
                { start: 200, end: 500, density: 0.29445033580770585 },
                { start: 500, density: 0.13538352774832121 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6991959064327485 },
                { start: 800, end: 1800, density: 0.26297514619883045 },
                { start: 1800, density: 0.037828947368421066 },
              ],
              percentiles: { p75: 877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8786873156342183 },
                { start: 1800, end: 3000, density: 0.09273598820058997 },
                { start: 3000, density: 0.028576696165191703 },
              ],
              percentiles: { p75: 1449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565470417070806 },
                { start: 100, end: 300, density: 0.032977691561590694 },
                { start: 300, density: 0.010475266731328807 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8973467520585544 },
                { start: 2500, end: 4000, density: 0.07063129002744745 },
                { start: 4000, density: 0.032021957913998166 },
              ],
              percentiles: { p75: 1963 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1449,
        lcp: 1963,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683067764,
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
                { start: 0, end: 2500, density: 0.6523000000000001 },
                { start: 2500, end: 4000, density: 0.16669999999999996 },
                { start: 4000, density: 0.18099999999999986 },
              ],
              percentiles: { p75: 3183 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7570757075707573,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10861086108610866,
                },
                { start: "0.25", density: 0.13431343134313412 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6967696769676968 },
                { start: 200, end: 500, density: 0.2419241924192419 },
                { start: 500, density: 0.06130613061306127 },
              ],
              percentiles: { p75: 216 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270000000000003 },
                { start: 1800, end: 3000, density: 0.14130000000000012 },
                { start: 3000, density: 0.23169999999999952 },
              ],
              percentiles: { p75: 2798 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2798, lcp: 3183, cls: "0.09" },
      timestamp: 1651683067911,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572610294117646 },
                { start: 100, end: 300, density: 0.028377757352941176 },
                { start: 300, density: 0.014361213235294242 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7425381508078992 },
                { start: 2500, end: 4000, density: 0.15927962298025133 },
                { start: 4000, density: 0.09818222621184951 },
              ],
              percentiles: { p75: 2538 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8498827208756841,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09840277002122193,
                },
                { start: "0.25", density: 0.05171450910309395 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6597004917299956 },
                { start: 200, end: 500, density: 0.2520116227089853 },
                { start: 500, density: 0.08828788556101921 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43024039541676 },
                { start: 800, end: 1800, density: 0.4348461019995505 },
                { start: 1800, density: 0.13491350258368964 },
              ],
              percentiles: { p75: 1402 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6745515695067259 },
                { start: 1800, end: 3000, density: 0.20257847533632262 },
                { start: 3000, density: 0.12286995515695152 },
              ],
              percentiles: { p75: 2164 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2164,
        lcp: 2538,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651683068057,
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
                { start: 0, end: 800, density: 0.6102278120550542 },
                { start: 800, end: 1800, density: 0.3400569530137635 },
                { start: 1800, density: 0.04971523493118238 },
              ],
              percentiles: { p75: 987 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7867445464298481 },
                { start: 1800, end: 3000, density: 0.15579926093694105 },
                { start: 3000, density: 0.057456192633210786 },
              ],
              percentiles: { p75: 1694 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588974854932302 },
                { start: 100, end: 300, density: 0.02381528046421664 },
                { start: 300, density: 0.017287234042553203 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.820007149666349 },
                { start: 2500, end: 4000, density: 0.1281577693040991 },
                { start: 4000, density: 0.0518350810295519 },
              ],
              percentiles: { p75: 2166 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8691777566539923,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10218631178707226,
                },
                { start: "0.25", density: 0.028635931558935374 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6050606343283582 },
                { start: 200, end: 500, density: 0.29232742537313433 },
                { start: 500, density: 0.10261194029850751 },
              ],
              percentiles: { p75: 267 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1694,
        lcp: 2166,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683068200,
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
                { start: 0, end: 2500, density: 0.836080047086521 },
                { start: 2500, end: 4000, density: 0.11989405532666272 },
                { start: 4000, density: 0.044025897586816284 },
              ],
              percentiles: { p75: 2124 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9373242736644799,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.056115276476101206,
                },
                { start: "0.25", density: 0.006560449859418929 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6225780252929574 },
                { start: 200, end: 500, density: 0.2937695788374521 },
                { start: 500, density: 0.08365239586959057 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5130568356374806 },
                { start: 800, end: 1800, density: 0.4375516956162116 },
                { start: 1800, density: 0.04939146874630778 },
              ],
              percentiles: { p75: 1097 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8135055783910748 },
                { start: 1800, end: 3000, density: 0.14362889019377573 },
                { start: 3000, density: 0.04286553141514945 },
              ],
              percentiles: { p75: 1651 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9474691875074789 },
                { start: 100, end: 300, density: 0.026923537154481276 },
                { start: 300, density: 0.025607275338039987 },
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
        fcp: 1651,
        lcp: 2124,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651683068349,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9694214876033058,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016174734356552537,
                },
                { start: "0.25", density: 0.01440377804014167 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6209458662578133 },
                { start: 200, end: 500, density: 0.2704328340606204 },
                { start: 500, density: 0.10862129968156638 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42079031683873214 },
                { start: 800, end: 1800, density: 0.3822238044381152 },
                { start: 1800, density: 0.19698587872315282 },
              ],
              percentiles: { p75: 1601 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5873110344006666 },
                { start: 1800, end: 3000, density: 0.2479466730151173 },
                { start: 3000, density: 0.16474229258421622 },
              ],
              percentiles: { p75: 2519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.935764101309189 },
                { start: 100, end: 300, density: 0.04062155879114158 },
                { start: 300, density: 0.023614339899669524 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6847619047619047 },
                { start: 2500, end: 4000, density: 0.21130952380952378 },
                { start: 4000, density: 0.10392857142857162 },
              ],
              percentiles: { p75: 2830 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2519,
        lcp: 2830,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651683068518,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7275182554766428 },
                { start: 1800, end: 3000, density: 0.2045613684105231 },
                { start: 3000, density: 0.06792037611283408 },
              ],
              percentiles: { p75: 1878 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966 },
                { start: 100, end: 300, density: 0.0205 },
                { start: 300, density: 0.013499999999999951 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7548499999999996 },
                { start: 2500, end: 4000, density: 0.16314999999999996 },
                { start: 4000, density: 0.08200000000000042 },
              ],
              percentiles: { p75: 2485 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8099 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15280000000000002,
                },
                { start: "0.25", density: 0.0373 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6774645070985802 },
                { start: 200, end: 500, density: 0.2212557488502299 },
                { start: 500, density: 0.10127974405118996 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5385615684705414 },
                { start: 800, end: 1800, density: 0.39431829548864666 },
                { start: 1800, density: 0.06712013604081193 },
              ],
              percentiles: { p75: 1150 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1878,
        lcp: 2485,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651683068682,
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
                  density: 0.9687085150768064,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012706239332448322,
                },
                { start: "0.25", density: 0.018585245590745317 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5831747240197942 },
                { start: 200, end: 500, density: 0.3020555767034639 },
                { start: 500, density: 0.11476969927674195 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40293890177880887 },
                { start: 800, end: 1800, density: 0.4827919566898684 },
                { start: 1800, density: 0.11426914153132275 },
              ],
              percentiles: { p75: 1433 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6271384136858474 },
                { start: 1800, end: 3000, density: 0.2583592534992224 },
                { start: 3000, density: 0.11450233281493016 },
              ],
              percentiles: { p75: 2397 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450681635926224 },
                { start: 100, end: 300, density: 0.025862068965517244 },
                { start: 300, density: 0.029069767441860454 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7099575453492858 },
                { start: 2500, end: 4000, density: 0.20069471246622927 },
                { start: 4000, density: 0.0893477421844849 },
              ],
              percentiles: { p75: 2802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2397,
        lcp: 2802,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683068799,
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
                  density: 0.9211787679744364,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04775430498846085,
                },
                { start: "0.25", density: 0.031066927037102777 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6819286114744906 },
                { start: 200, end: 500, density: 0.22126705288731074 },
                { start: 500, density: 0.09680433563819864 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5060655440883574 },
                { start: 800, end: 1800, density: 0.3693644758283539 },
                { start: 1800, density: 0.12456998008328875 },
              ],
              percentiles: { p75: 1315 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6610568222946075 },
                { start: 1800, end: 3000, density: 0.20557365182772344 },
                { start: 3000, density: 0.13336952587766907 },
              ],
              percentiles: { p75: 2227 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602339181286549 },
                { start: 100, end: 300, density: 0.0276803118908382 },
                { start: 300, density: 0.012085769980506823 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7204873646209381 },
                { start: 2500, end: 4000, density: 0.1748194945848374 },
                { start: 4000, density: 0.10469314079422463 },
              ],
              percentiles: { p75: 2682 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2227,
        lcp: 2682,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683068954,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7307 },
                { start: 800, end: 1800, density: 0.24810000000000001 },
                { start: 1800, density: 0.02119999999999995 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9136259122263322 },
                { start: 1800, end: 3000, density: 0.06867939618114566 },
                { start: 3000, density: 0.017694691592522148 },
              ],
              percentiles: { p75: 1270 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9671967196719671 },
                { start: 100, end: 300, density: 0.014901490149014896 },
                { start: 300, density: 0.017901790179017947 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.905840584058406 },
                { start: 2500, end: 4000, density: 0.07335733573357332 },
                { start: 4000, density: 0.020802080208020837 },
              ],
              percentiles: { p75: 1758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8489000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11840000000000002,
                },
                { start: "0.25", density: 0.032699999999999924 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7267273272672734 },
                { start: 200, end: 500, density: 0.18408159184081596 },
                { start: 500, density: 0.08919108089191063 },
              ],
              percentiles: { p75: 212 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1270,
        lcp: 1758,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651683069121,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.522368170569197 },
                { start: 200, end: 500, density: 0.32172092137825914 },
                { start: 500, density: 0.1559109080525437 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6694320357370773 },
                { start: 800, end: 1800, density: 0.2890874282067646 },
                { start: 1800, density: 0.04148053605615806 },
              ],
              percentiles: { p75: 922 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8487898907689015 },
                { start: 1800, end: 3000, density: 0.11587063611051618 },
                { start: 3000, density: 0.03533947312058235 },
              ],
              percentiles: { p75: 1484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9372319688109161 },
                { start: 100, end: 300, density: 0.0290448343079922 },
                { start: 300, density: 0.03372319688109166 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8461208744106303 },
                { start: 2500, end: 4000, density: 0.1170167166738106 },
                { start: 4000, density: 0.03686240891555915 },
              ],
              percentiles: { p75: 2082 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9589356798659123,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02346532579090718,
                },
                { start: "0.25", density: 0.017598994343180394 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1484,
        lcp: 2082,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1651683069221,
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
                { start: "0.00", end: "0.10", density: 0.9163 },
                { start: "0.10", end: "0.25", density: 0.0499 },
                { start: "0.25", density: 0.03380000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.62046204620462 },
                { start: 200, end: 500, density: 0.2546254625462544 },
                { start: 500, density: 0.12491249124912554 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4773000000000005 },
                { start: 800, end: 1800, density: 0.3442000000000004 },
                { start: 1800, density: 0.17849999999999908 },
              ],
              percentiles: { p75: 1558 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5527000000000007 },
                { start: 1800, end: 3000, density: 0.2022000000000002 },
                { start: 3000, density: 0.2450999999999991 },
              ],
              percentiles: { p75: 3145 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6030793841231761 },
                { start: 2500, end: 4000, density: 0.19546090781843647 },
                { start: 4000, density: 0.2014597080583875 },
              ],
              percentiles: { p75: 3632 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3145, lcp: 3632, cls: "0.01" },
      timestamp: 1651683069377,
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
                  density: 0.7956204379562044,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13688631136886312,
                },
                { start: "0.25", density: 0.06749325067493249 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7956000000000001 },
                { start: 200, end: 500, density: 0.1683 },
                { start: 500, density: 0.03610000000000003 },
              ],
              percentiles: { p75: 177 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5425457454254572 },
                { start: 800, end: 1800, density: 0.35506449355064484 },
                { start: 1800, density: 0.10238976102389796 },
              ],
              percentiles: { p75: 1186 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7842000000000005 },
                { start: 1800, end: 3000, density: 0.12690000000000004 },
                { start: 3000, density: 0.0888999999999996 },
              ],
              percentiles: { p75: 1665 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677 },
                { start: 100, end: 300, density: 0.0263 },
                { start: 300, density: 0.006000000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.824682468246824 },
                { start: 2500, end: 4000, density: 0.10241024102410236 },
                { start: 4000, density: 0.07290729072907348 },
              ],
              percentiles: { p75: 2070 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1665,
        lcp: 2070,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651683069499,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6223622362236216 },
                { start: 200, end: 500, density: 0.21952195219521933 },
                { start: 500, density: 0.158115811581159 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4315999999999995 },
                { start: 800, end: 1800, density: 0.4179999999999995 },
                { start: 1800, density: 0.150400000000001 },
              ],
              percentiles: { p75: 1415 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6447999999999997 },
                { start: 1800, end: 3000, density: 0.20379999999999993 },
                { start: 3000, density: 0.1514000000000003 },
              ],
              percentiles: { p75: 2302 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9070371851259497 },
                { start: 100, end: 300, density: 0.040383846461415435 },
                { start: 300, density: 0.05257896841263482 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6750350070013996 },
                { start: 2500, end: 4000, density: 0.16983396679335855 },
                { start: 4000, density: 0.15513102620524186 },
              ],
              percentiles: { p75: 3012 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8242999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1025 },
                { start: "0.25", density: 0.07320000000000011 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2302,
        lcp: 3012,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1651683069598,
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
                { start: 0, end: 2500, density: 0.5961844197138312 },
                { start: 2500, end: 4000, density: 0.3004769475357709 },
                { start: 4000, density: 0.10333863275039792 },
              ],
              percentiles: { p75: 3040 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9429344325647301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027824294731418262,
                },
                { start: "0.25", density: 0.029241272703851604 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4720170276699638 },
                { start: 200, end: 500, density: 0.3277826468010516 },
                { start: 500, density: 0.2002003255289845 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2838292367399743 },
                { start: 800, end: 1800, density: 0.4139715394566627 },
                { start: 1800, density: 0.30219922380336295 },
              ],
              percentiles: { p75: 1921 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4779084967320271 },
                { start: 1800, end: 3000, density: 0.367581699346406 },
                { start: 3000, density: 0.15450980392156688 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9293561573837504 },
                { start: 100, end: 300, density: 0.0215891670924885 },
                { start: 300, density: 0.04905467552376104 },
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
        fcp: 2622,
        lcp: 3040,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651683069698,
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
                  density: 0.9322999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05009999999999999,
                },
                { start: "0.25", density: 0.017599999999999987 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6735652869426116 },
                { start: 200, end: 500, density: 0.28234353129374123 },
                { start: 500, density: 0.044091181763647194 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45779999999999976 },
                { start: 800, end: 1800, density: 0.4504999999999998 },
                { start: 1800, density: 0.09170000000000056 },
              ],
              percentiles: { p75: 1182 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6625012496251126 },
                { start: 1800, end: 3000, density: 0.22963111066680003 },
                { start: 3000, density: 0.10786763970808746 },
              ],
              percentiles: { p75: 2132 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9731973197319732 },
                { start: 100, end: 300, density: 0.0185018501850185 },
                { start: 300, density: 0.0083008300830083 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7312537492501503 },
                { start: 2500, end: 4000, density: 0.15186962607478502 },
                { start: 4000, density: 0.11687662467506464 },
              ],
              percentiles: { p75: 2646 },
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
        lcp: 2646,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651683069859,
    },
  ],
};
