export const audit29 = {
  date: "2022-06-01T18:30:22.915Z",
  dateParsedLocale: "01/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "01/06/2022-legacy-audit",
  audits: [
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
                  density: 0.9296918455890533,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.061297140950050066,
                },
                { start: "0.25", density: 0.009011013460896647 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6025155832591268 },
                { start: 200, end: 500, density: 0.31044078361531585 },
                { start: 500, density: 0.08704363312555732 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5852348993288591 },
                { start: 800, end: 1800, density: 0.36442953020134233 },
                { start: 1800, density: 0.05033557046979868 },
              ],
              percentiles: { p75: 988 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.866227825504853 },
                { start: 1800, end: 3000, density: 0.09528059801405782 },
                { start: 3000, density: 0.038491576481089126 },
              ],
              percentiles: { p75: 1474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543559111912543 },
                { start: 100, end: 300, density: 0.02625943874675983 },
                { start: 300, density: 0.019384650061985774 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8782696177062376 },
                { start: 2500, end: 4000, density: 0.08942544153811766 },
                { start: 4000, density: 0.03230494075564481 },
              ],
              percentiles: { p75: 1896 },
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
        lcp: 1896,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107327849,
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
                { start: 0, end: 200, density: 0.5497854549455385 },
                { start: 200, end: 500, density: 0.3516338431070525 },
                { start: 500, density: 0.09858070194740898 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4786043449637918 },
                { start: 800, end: 1800, density: 0.3539609392143953 },
                { start: 1800, density: 0.16743471582181313 },
              ],
              percentiles: { p75: 1628 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5935982339955851 },
                { start: 1800, end: 3000, density: 0.3079470198675497 },
                { start: 3000, density: 0.09845474613686524 },
              ],
              percentiles: { p75: 2239 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9343843677140001 },
                { start: 100, end: 300, density: 0.048295769956700346 },
                { start: 300, density: 0.01731986232929959 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.661051585109908 },
                { start: 2500, end: 4000, density: 0.2482602452225781 },
                { start: 4000, density: 0.09068816966751389 },
              ],
              percentiles: { p75: 2908 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9755102040816327,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014120242691671264,
                },
                { start: "0.25", density: 0.01036955322669608 },
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
        fcp: 2239,
        lcp: 2908,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107329076,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8077923377013101 },
                { start: 2500, end: 4000, density: 0.11588476542962882 },
                { start: 4000, density: 0.07632289686906113 },
              ],
              percentiles: { p75: 2138 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7996200379962004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13528647135286473,
                },
                { start: "0.25", density: 0.06509349065093491 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7884365309592877 },
                { start: 200, end: 500, density: 0.1645493648094428 },
                { start: 500, density: 0.047014104231269574 },
              ],
              percentiles: { p75: 182 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5185518551855185 },
                { start: 800, end: 1800, density: 0.37123712371237116 },
                { start: 1800, density: 0.11021102110211048 },
              ],
              percentiles: { p75: 1220 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7639236076392355 },
                { start: 1800, end: 3000, density: 0.1387861213878611 },
                { start: 3000, density: 0.09729027097290349 },
              ],
              percentiles: { p75: 1747 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688062387522495 },
                { start: 100, end: 300, density: 0.022095580883823233 },
                { start: 300, density: 0.00909818036392718 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1747,
        lcp: 2138,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654107330016,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7982201779822018,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1255874412558744,
                },
                { start: "0.25", density: 0.07619238076192386 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7702 },
                { start: 200, end: 500, density: 0.19210000000000002 },
                { start: 500, density: 0.03770000000000002 },
              ],
              percentiles: { p75: 195 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3150315031503151 },
                { start: 800, end: 1800, density: 0.4995499549954997 },
                { start: 1800, density: 0.18541854185418516 },
              ],
              percentiles: { p75: 1620 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6165000000000005 },
                { start: 1800, end: 3000, density: 0.2562000000000002 },
                { start: 3000, density: 0.12729999999999933 },
              ],
              percentiles: { p75: 2329 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704940988197639 },
                { start: 100, end: 300, density: 0.010102020404080815 },
                { start: 300, density: 0.019403880776155236 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6997699769977 },
                { start: 2500, end: 4000, density: 0.19291929192919294 },
                { start: 4000, density: 0.10731073107310707 },
              ],
              percentiles: { p75: 2786 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2329, lcp: 2786, cls: "0.06", fid: 9 },
      timestamp: 1654107330515,
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
                  density: 0.9770268627689315,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01239820104533852,
                },
                { start: "0.25", density: 0.01057493618572991 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6333936106088005 },
                { start: 200, end: 500, density: 0.2972875226039784 },
                { start: 500, density: 0.06931886678722116 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.604458521135339 },
                { start: 800, end: 1800, density: 0.34583993178219014 },
                { start: 1800, density: 0.04970154708247085 },
              ],
              percentiles: { p75: 968 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8677887547261862 },
                { start: 1800, end: 3000, density: 0.09635321380656178 },
                { start: 3000, density: 0.03585803146725207 },
              ],
              percentiles: { p75: 1449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649975692756441 },
                { start: 100, end: 300, density: 0.018230432668935346 },
                { start: 300, density: 0.016771998055420536 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8982895540623088 },
                { start: 2500, end: 4000, density: 0.07409896151496637 },
                { start: 4000, density: 0.027611484422724885 },
              ],
              percentiles: { p75: 1773 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1449,
        lcp: 1773,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107331049,
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
                { start: 0, end: 800, density: 0.40570522979397766 },
                { start: 800, end: 1800, density: 0.47959587955625965 },
                { start: 1800, density: 0.11469889064976273 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6177969423755386 },
                { start: 1800, end: 3000, density: 0.25597804782438244 },
                { start: 3000, density: 0.12622500980007906 },
              ],
              percentiles: { p75: 2435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9366073175503815 },
                { start: 100, end: 300, density: 0.03932694189004109 },
                { start: 300, density: 0.024065740559577387 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7203109815354709 },
                { start: 2500, end: 4000, density: 0.20310981535471315 },
                { start: 4000, density: 0.07657920310981597 },
              ],
              percentiles: { p75: 2716 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525820694951047,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02226914954885775,
                },
                { start: "0.25", density: 0.025148780956037613 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109215017064851 },
                { start: 200, end: 500, density: 0.2772535635414577 },
                { start: 500, density: 0.11182493475205724 },
              ],
              percentiles: { p75: 278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2435,
        lcp: 2716,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107331831,
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
                { start: 0, end: 200, density: 0.6085174886579835 },
                { start: 200, end: 500, density: 0.2749890238548222 },
                { start: 500, density: 0.11649348748719424 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8505982367758186 },
                { start: 800, end: 1800, density: 0.1352329974811083 },
                { start: 1800, density: 0.014168765743073136 },
              ],
              percentiles: { p75: 701 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9374802152579931 },
                { start: 1800, end: 3000, density: 0.04621715732826842 },
                { start: 3000, density: 0.016302627413738575 },
              ],
              percentiles: { p75: 1194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9484965304548958 },
                { start: 100, end: 300, density: 0.026522744795682347 },
                { start: 300, density: 0.024980724749421788 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9435623329665147 },
                { start: 2500, end: 4000, density: 0.04354661216789812 },
                { start: 4000, density: 0.012891054865587172 },
              ],
              percentiles: { p75: 1539 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9468764605078673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030845926156722235,
                },
                { start: "0.25", density: 0.0222776133354105 },
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
        fcp: 1194,
        lcp: 1539,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107332777,
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
                { start: 0, end: 200, density: 0.5913563332918171 },
                { start: 200, end: 500, density: 0.34636941088553985 },
                { start: 500, density: 0.062274255822643086 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39974747474747474 },
                { start: 800, end: 1800, density: 0.5215909090909091 },
                { start: 1800, density: 0.07866161616161624 },
              ],
              percentiles: { p75: 1133 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6566919191919195 },
                { start: 1800, end: 3000, density: 0.2501262626262627 },
                { start: 3000, density: 0.09318181818181777 },
              ],
              percentiles: { p75: 1993 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981902933918289 },
                { start: 100, end: 300, density: 0.009048533040855497 },
                { start: 300, density: 0.009048533040855499 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8022185806126308 },
                { start: 2500, end: 4000, density: 0.13941762258918447 },
                { start: 4000, density: 0.05836379679818468 },
              ],
              percentiles: { p75: 2272 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9585265004385415,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01967172033579752,
                },
                { start: "0.25", density: 0.021801779225660938 },
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
        fcp: 1993,
        lcp: 2272,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107333501,
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
                { start: 0, end: 800, density: 0.6285742851429713 },
                { start: 800, end: 1800, density: 0.33083383323335347 },
                { start: 1800, density: 0.040591881623675156 },
              ],
              percentiles: { p75: 981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8471235617808907 },
                { start: 1800, end: 3000, density: 0.11825912956478242 },
                { start: 3000, density: 0.034617308654326835 },
              ],
              percentiles: { p75: 1405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9825017498250176 },
                { start: 100, end: 300, density: 0.0131986801319868 },
                { start: 300, density: 0.004299570042995701 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8918716256748651 },
                { start: 2500, end: 4000, density: 0.0844331133773245 },
                { start: 4000, density: 0.023695260947810364 },
              ],
              percentiles: { p75: 1772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8943000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07280000000000002,
                },
                { start: "0.25", density: 0.032899999999999985 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7836 },
                { start: 200, end: 500, density: 0.1926 },
                { start: 500, density: 0.023799999999999964 },
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
      extractedResults: {
        fcp: 1405,
        lcp: 1772,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654107334275,
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
                { start: 0, end: 1800, density: 0.6620324064812967 },
                { start: 1800, end: 3000, density: 0.21294258851770373 },
                { start: 3000, density: 0.12502500500099953 },
              ],
              percentiles: { p75: 2148 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189918991899191 },
                { start: 100, end: 300, density: 0.041404140414041404 },
                { start: 300, density: 0.039603960396039625 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7055000000000006 },
                { start: 2500, end: 4000, density: 0.16960000000000014 },
                { start: 4000, density: 0.12489999999999925 },
              ],
              percentiles: { p75: 2752 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8136 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15170000000000003,
                },
                { start: "0.25", density: 0.034699999999999995 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6204379562043801 },
                { start: 200, end: 500, density: 0.2441755824417561 },
                { start: 500, density: 0.1353864613538638 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46165383461653847 },
                { start: 800, end: 1800, density: 0.4034596540345967 },
                { start: 1800, density: 0.13488651134886476 },
              ],
              percentiles: { p75: 1347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2148,
        lcp: 2752,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1654107334855,
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
                { start: 0, end: 200, density: 0.4952614952614954 },
                { start: 200, end: 500, density: 0.38223938223938225 },
                { start: 500, density: 0.1224991224991224 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22000000000000025 },
                { start: 800, end: 1800, density: 0.5191860465116285 },
                { start: 1800, density: 0.2608139534883713 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.35791198501872484 },
                { start: 1800, end: 3000, density: 0.3283005617977513 },
                { start: 3000, density: 0.3137874531835238 },
              ],
              percentiles: { p75: 3429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9681834553968062 },
                { start: 100, end: 300, density: 0.023412174330651937 },
                { start: 300, density: 0.008404370272541718 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4846243447874197 },
                { start: 2500, end: 4000, density: 0.31700640652300516 },
                { start: 4000, density: 0.19836924868957512 },
              ],
              percentiles: { p75: 3703 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9586439888164027,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02294967381174278,
                },
                { start: "0.25", density: 0.018406337371854615 },
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
        fcp: 3429,
        lcp: 3703,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107335475,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5796840631873625 },
                { start: 800, end: 1800, density: 0.3397320535892822 },
                { start: 1800, density: 0.08058388322335536 },
              ],
              percentiles: { p75: 1138 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7687306191857558 },
                { start: 1800, end: 3000, density: 0.17515254576372913 },
                { start: 3000, density: 0.056116835050515214 },
              ],
              percentiles: { p75: 1757 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.987101289871013 },
                { start: 100, end: 300, density: 0.008599140085991403 },
                { start: 300, density: 0.0042995700429957 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8067386522695458 },
                { start: 2500, end: 4000, density: 0.1247750449910018 },
                { start: 4000, density: 0.0684863027394525 },
              ],
              percentiles: { p75: 2229 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9492050794920508,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0367963203679632,
                },
                { start: "0.25", density: 0.013998600139986014 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9242000000000001 },
                { start: 200, end: 500, density: 0.06380000000000001 },
                { start: 500, density: 0.011999999999999981 },
              ],
              percentiles: { p75: 100 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1757, lcp: 2229, cls: "0.02", fid: 8 },
      timestamp: 1654107336266,
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
                { start: 0, end: 100, density: 0.8771584368373224 },
                { start: 100, end: 300, density: 0.055589215389276 },
                { start: 300, density: 0.06725234777340164 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6683941502200762 },
                { start: 2500, end: 4000, density: 0.1811018032088598 },
                { start: 4000, density: 0.15050404657106395 },
              ],
              percentiles: { p75: 3032 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8882963794555151,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02764524277294415,
                },
                { start: "0.25", density: 0.08405837777154089 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4959773539928493 },
                { start: 200, end: 500, density: 0.31734207389749747 },
                { start: 500, density: 0.18668057210965325 },
              ],
              percentiles: { p75: 387 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35708251196845947 },
                { start: 800, end: 1800, density: 0.45944804280484347 },
                { start: 1800, density: 0.18346944522669711 },
              ],
              percentiles: { p75: 1550 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5756799088708517 },
                { start: 1800, end: 3000, density: 0.24775736864587736 },
                { start: 3000, density: 0.17656272248327087 },
              ],
              percentiles: { p75: 2514 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2514,
        lcp: 3032,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1654107336729,
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
                { start: 0, end: 200, density: 0.546555541086079 },
                { start: 200, end: 500, density: 0.37322568042713883 },
                { start: 500, density: 0.08021877848678222 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43519346188226293 },
                { start: 800, end: 1800, density: 0.45319882518196924 },
                { start: 1800, density: 0.1116077129357678 },
              ],
              percentiles: { p75: 1308 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5795396419437333 },
                { start: 1800, end: 3000, density: 0.27237851662404045 },
                { start: 3000, density: 0.14808184143222622 },
              ],
              percentiles: { p75: 2417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9614098276305634 },
                { start: 100, end: 300, density: 0.026498585027013122 },
                { start: 300, density: 0.012091587342423446 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6984992303745496 },
                { start: 2500, end: 4000, density: 0.2009363776295531 },
                { start: 4000, density: 0.1005643919958972 },
              ],
              percentiles: { p75: 2750 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.957984259964458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019167301345519167,
                },
                { start: "0.25", density: 0.022848438690022836 },
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
        fcp: 2417,
        lcp: 2750,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107337421,
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
                { start: 0, end: 1800, density: 0.8834750632038612 },
                { start: 1800, end: 3000, density: 0.07791312341990347 },
                { start: 3000, density: 0.038611813376235336 },
              ],
              percentiles: { p75: 1403 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9584018801410104 },
                { start: 100, end: 300, density: 0.027732079905992944 },
                { start: 300, density: 0.013866039952996515 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9066666666666667 },
                { start: 2500, end: 4000, density: 0.06988505747126438 },
                { start: 4000, density: 0.0234482758620689 },
              ],
              percentiles: { p75: 1769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939748201438849,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044289568345323736,
                },
                { start: "0.25", density: 0.015962230215827333 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.512892135797164 },
                { start: 200, end: 500, density: 0.35174043833261726 },
                { start: 500, density: 0.13536742587021888 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6760691537761602 },
                { start: 800, end: 1800, density: 0.2841219290263876 },
                { start: 1800, density: 0.039808917197452186 },
              ],
              percentiles: { p75: 899 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1403,
        lcp: 1769,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654107338215,
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
                  density: 0.734026597340266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13438656134386562,
                },
                { start: "0.25", density: 0.13158684131586848 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5936593659365936 },
                { start: 200, end: 500, density: 0.33833383338333844 },
                { start: 500, density: 0.06800680068006795 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339433943394337 },
                { start: 800, end: 1800, density: 0.3310331033103308 },
                { start: 1800, density: 0.23502350235023553 },
              ],
              percentiles: { p75: 1767 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129512951295133 },
                { start: 1800, end: 3000, density: 0.2034203420342035 },
                { start: 3000, density: 0.2836283628362832 },
              ],
              percentiles: { p75: 3362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656 },
                { start: 100, end: 300, density: 0.0267 },
                { start: 300, density: 0.0077 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5779655931186244 },
                { start: 2500, end: 4000, density: 0.19768953790758179 },
                { start: 4000, density: 0.22434486897379385 },
              ],
              percentiles: { p75: 3825 },
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
        lcp: 3825,
        cls: "0.14",
        fid: 13,
      },
      timestamp: 1654107338918,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5936593659365936 },
                { start: 200, end: 500, density: 0.33833383338333844 },
                { start: 500, density: 0.06800680068006795 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339433943394337 },
                { start: 800, end: 1800, density: 0.3310331033103308 },
                { start: 1800, density: 0.23502350235023553 },
              ],
              percentiles: { p75: 1767 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129512951295133 },
                { start: 1800, end: 3000, density: 0.2034203420342035 },
                { start: 3000, density: 0.2836283628362832 },
              ],
              percentiles: { p75: 3362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656 },
                { start: 100, end: 300, density: 0.0267 },
                { start: 300, density: 0.0077 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5779655931186244 },
                { start: 2500, end: 4000, density: 0.19768953790758179 },
                { start: 4000, density: 0.22434486897379385 },
              ],
              percentiles: { p75: 3825 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.734026597340266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13438656134386562,
                },
                { start: "0.25", density: 0.13158684131586848 },
              ],
              percentiles: { p75: "0.14" },
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
        lcp: 3825,
        cls: "0.14",
        fid: 13,
      },
      timestamp: 1654107339635,
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
                { start: 0, end: 800, density: 0.2938791524980385 },
                { start: 800, end: 1800, density: 0.4221815328276227 },
                { start: 1800, density: 0.2839393146743388 },
              ],
              percentiles: { p75: 1920 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49048983845753014 },
                { start: 1800, end: 3000, density: 0.3297290255341325 },
                { start: 3000, density: 0.1797811360083372 },
              ],
              percentiles: { p75: 2603 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9124779840130063 },
                { start: 100, end: 300, density: 0.03929006909632841 },
                { start: 300, density: 0.048231946890665296 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6676193008108465 },
                { start: 2500, end: 4000, density: 0.2483716602419247 },
                { start: 4000, density: 0.08400903894722876 },
              ],
              percentiles: { p75: 3002 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9338757587498385,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02673382409918636,
                },
                { start: "0.25", density: 0.03939041715097506 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49999999999999994 },
                { start: 200, end: 500, density: 0.31372809346787045 },
                { start: 500, density: 0.18627190653212955 },
              ],
              percentiles: { p75: 364 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2603,
        lcp: 3002,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107340184,
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
                { start: 0, end: 2500, density: 0.584791520847915 },
                { start: 2500, end: 4000, density: 0.1993300669933007 },
                { start: 4000, density: 0.21587841215878428 },
              ],
              percentiles: { p75: 3856 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8932893289328933,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07040704070407039,
                },
                { start: "0.25", density: 0.036303630363036285 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6245000000000006 },
                { start: 200, end: 500, density: 0.2788000000000003 },
                { start: 500, density: 0.09669999999999897 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45590881823635243 },
                { start: 800, end: 1800, density: 0.3346330733853227 },
                { start: 1800, density: 0.20945810837832493 },
              ],
              percentiles: { p75: 1721 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5212999999999984 },
                { start: 1800, end: 3000, density: 0.2371999999999993 },
                { start: 3000, density: 0.24150000000000219 },
              ],
              percentiles: { p75: 3237 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561043895610439 },
                { start: 100, end: 300, density: 0.031996800319968 },
                { start: 300, density: 0.011898810118988093 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3237,
        lcp: 3856,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654107341188,
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
                { start: 0, end: 200, density: 0.6388083574927522 },
                { start: 200, end: 500, density: 0.2518244526642008 },
                { start: 500, density: 0.10936718984304696 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49314931493149294 },
                { start: 800, end: 1800, density: 0.2894289428942893 },
                { start: 1800, density: 0.21742174217421784 },
              ],
              percentiles: { p75: 1662 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270627062706273 },
                { start: 1800, end: 3000, density: 0.143914391439144 },
                { start: 3000, density: 0.22902290229022873 },
              ],
              percentiles: { p75: 2740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9510000000000001 },
                { start: 100, end: 300, density: 0.0316 },
                { start: 300, density: 0.017400000000000002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6489797959591908 },
                { start: 2500, end: 4000, density: 0.18448689737947568 },
                { start: 4000, density: 0.16653330666133362 },
              ],
              percentiles: { p75: 3237 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9118911891189119,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0601060106010601,
                },
                { start: "0.25", density: 0.028002800280027995 },
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
        fcp: 2740,
        lcp: 3237,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107342150,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3068755664897059 },
                { start: 800, end: 1800, density: 0.4666580344425738 },
                { start: 1800, density: 0.22646639906772026 },
              ],
              percentiles: { p75: 1755 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4960917144346005 },
                { start: 1800, end: 3000, density: 0.3057582073996868 },
                { start: 3000, density: 0.19815007816571284 },
              ],
              percentiles: { p75: 2719 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678244480344642 },
                { start: 100, end: 300, density: 0.02396338179859989 },
                { start: 300, density: 0.008212170166935923 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6326223501701116 },
                { start: 2500, end: 4000, density: 0.2257916775713161 },
                { start: 4000, density: 0.14158597225857225 },
              ],
              percentiles: { p75: 3070 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9315033018257156,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030817040010358676,
                },
                { start: "0.25", density: 0.0376796581639259 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5399946495452117 },
                { start: 200, end: 500, density: 0.38309256286784404 },
                { start: 500, density: 0.07691278758694436 },
              ],
              percentiles: { p75: 300 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2719,
        lcp: 3070,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654107343022,
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
                  density: 0.968003199680032,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021697830216978305,
                },
                { start: "0.25", density: 0.010298970102989703 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5667433256674336 },
                { start: 200, end: 500, density: 0.3353664633536648 },
                { start: 500, density: 0.09789021097890166 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4841515848415156 },
                { start: 800, end: 1800, density: 0.34966503349665 },
                { start: 1800, density: 0.16618338166183436 },
              ],
              percentiles: { p75: 1624 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6011196641007697 },
                { start: 1800, end: 3000, density: 0.2995101469559131 },
                { start: 3000, density: 0.09937018894331727 },
              ],
              percentiles: { p75: 2235 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.936906309369063 },
                { start: 100, end: 300, density: 0.0462953704629537 },
                { start: 300, density: 0.016798320167983168 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6660501849445163 },
                { start: 2500, end: 4000, density: 0.2412776167149854 },
                { start: 4000, density: 0.09267219834049821 },
              ],
              percentiles: { p75: 2888 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2235,
        lcp: 2888,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107344296,
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
                  density: 0.9506154530624351,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03396114489099808,
                },
                { start: "0.25", density: 0.015423402046566812 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6253119953017171 },
                { start: 200, end: 500, density: 0.278226398473058 },
                { start: 500, density: 0.09646160622522486 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6927067439731461 },
                { start: 800, end: 1800, density: 0.27464144034177596 },
                { start: 1800, density: 0.03265181568507781 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8927601809954752 },
                { start: 1800, end: 3000, density: 0.08220211161387632 },
                { start: 3000, density: 0.0250377073906486 },
              ],
              percentiles: { p75: 1340 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506794930523744 },
                { start: 100, end: 300, density: 0.025958161551381885 },
                { start: 300, density: 0.023362345396243683 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9179541022948854 },
                { start: 2500, end: 4000, density: 0.062096895155242283 },
                { start: 4000, density: 0.01994900254987236 },
              ],
              percentiles: { p75: 1701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1340,
        lcp: 1701,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107345198,
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
                { start: "0.00", end: "0.10", density: 0.890625 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07284007352941177,
                },
                { start: "0.25", density: 0.03653492647058822 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5793706293706301 },
                { start: 200, end: 500, density: 0.3163170163170168 },
                { start: 500, density: 0.10431235431235307 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44703707981979773 },
                { start: 800, end: 1800, density: 0.3324477301605628 },
                { start: 1800, density: 0.22051519001963937 },
              ],
              percentiles: { p75: 1766 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4954319417138886 },
                { start: 1800, end: 3000, density: 0.2513010292587021 },
                { start: 3000, density: 0.2532670290274093 },
              ],
              percentiles: { p75: 3302 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9480411883063085 },
                { start: 100, end: 300, density: 0.03787430465143803 },
                { start: 300, density: 0.014084507042253508 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.565323141070187 },
                { start: 2500, end: 4000, density: 0.21496409543664544 },
                { start: 4000, density: 0.2197127634931675 },
              ],
              percentiles: { p75: 3913 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3302,
        lcp: 3913,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107346321,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5728854229154161 },
                { start: 2500, end: 4000, density: 0.2447510497900416 },
                { start: 4000, density: 0.18236352729454222 },
              ],
              percentiles: { p75: 3486 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8125 },
                { start: "0.10", end: "0.25", density: 0.1221 },
                { start: "0.25", density: 0.06539999999999997 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6127612761276128 },
                { start: 200, end: 500, density: 0.2804280428042804 },
                { start: 500, density: 0.10681068106810682 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26762676267626945 },
                { start: 800, end: 1800, density: 0.473847384738477 },
                { start: 1800, density: 0.2585258525852536 },
              ],
              percentiles: { p75: 1859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5143028605721139 },
                { start: 1800, end: 3000, density: 0.26465293058611705 },
                { start: 3000, density: 0.22104420884176895 },
              ],
              percentiles: { p75: 2867 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9491999999999999 },
                { start: 100, end: 300, density: 0.035699999999999996 },
                { start: 300, density: 0.015100000000000053 },
              ],
              percentiles: { p75: 12 },
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
        lcp: 3486,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1654107347624,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5407918416316738 },
                { start: 200, end: 500, density: 0.37342531493701264 },
                { start: 500, density: 0.08578284343131344 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6495 },
                { start: 800, end: 1800, density: 0.3048 },
                { start: 1800, density: 0.045700000000000005 },
              ],
              percentiles: { p75: 942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8059999999999999 },
                { start: 1800, end: 3000, density: 0.13410000000000005 },
                { start: 3000, density: 0.059900000000000106 },
              ],
              percentiles: { p75: 1708 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9181918191819182 },
                { start: 100, end: 300, density: 0.0502050205020502 },
                { start: 300, density: 0.031603160316031595 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8446999999999999 },
                { start: 2500, end: 4000, density: 0.11360000000000003 },
                { start: 4000, density: 0.04170000000000002 },
              ],
              percentiles: { p75: 2153 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9329 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05389999999999999,
                },
                { start: "0.25", density: 0.013199999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: {
        fcp: 1708,
        lcp: 2153,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107348717,
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
                { start: 0, end: 100, density: 0.9806961392278455 },
                { start: 100, end: 300, density: 0.014502900580116024 },
                { start: 300, density: 0.0048009601920384086 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7309999999999992 },
                { start: 2500, end: 4000, density: 0.14739999999999986 },
                { start: 4000, density: 0.12160000000000082 },
              ],
              percentiles: { p75: 2685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.832016798320168,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1096890310968903,
                },
                { start: "0.25", density: 0.05829417058294173 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7016298370162984 },
                { start: 200, end: 500, density: 0.24347565243475655 },
                { start: 500, density: 0.05489451054894511 },
              ],
              percentiles: { p75: 222 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48340331933613295 },
                { start: 800, end: 1800, density: 0.40321935612877446 },
                { start: 1800, density: 0.11337732453509264 },
              ],
              percentiles: { p75: 1289 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7129000000000002 },
                { start: 1800, end: 3000, density: 0.17500000000000002 },
                { start: 3000, density: 0.11209999999999974 },
              ],
              percentiles: { p75: 1991 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 1991,
        lcp: 2685,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654107349627,
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
                { start: 0, end: 100, density: 0.9803999999999999 },
                { start: 100, end: 300, density: 0.0132 },
                { start: 300, density: 0.0064000000000000185 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6618499999999995 },
                { start: 2500, end: 4000, density: 0.21924999999999978 },
                { start: 4000, density: 0.11890000000000069 },
              ],
              percentiles: { p75: 2926 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8416 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08779999999999999,
                },
                { start: "0.25", density: 0.07059999999999998 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6990000000000003 },
                { start: 200, end: 500, density: 0.2544000000000001 },
                { start: 500, density: 0.046599999999999746 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31413717256548707 },
                { start: 800, end: 1800, density: 0.5328934213157372 },
                { start: 1800, density: 0.1529694061187757 },
              ],
              percentiles: { p75: 1508 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5539553955395535 },
                { start: 1800, end: 3000, density: 0.28782878287828756 },
                { start: 3000, density: 0.15821582158215888 },
              ],
              percentiles: { p75: 2466 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2466,
        lcp: 2926,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654107350390,
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
                { start: 0, end: 1800, density: 0.6824022346368718 },
                { start: 1800, end: 3000, density: 0.19148044692737437 },
                { start: 3000, density: 0.1261173184357539 },
              ],
              percentiles: { p75: 2128 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9741331096196867 },
                { start: 100, end: 300, density: 0.019155480984340043 },
                { start: 300, density: 0.006711409395973155 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7256207518379804 },
                { start: 2500, end: 4000, density: 0.15563878485226798 },
                { start: 4000, density: 0.11874046330975162 },
              ],
              percentiles: { p75: 2685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9367228516164687,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018098922354241504,
                },
                { start: "0.25", density: 0.04517822602928985 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6164440734557597 },
                { start: 200, end: 500, density: 0.32623817473567057 },
                { start: 500, density: 0.05731775180856971 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4438554889105874 },
                { start: 800, end: 1800, density: 0.41944483191519055 },
                { start: 1800, density: 0.13669967917422193 },
              ],
              percentiles: { p75: 1346 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2128,
        lcp: 2685,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107351375,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6388083574927522 },
                { start: 200, end: 500, density: 0.2518244526642008 },
                { start: 500, density: 0.10936718984304696 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49314931493149294 },
                { start: 800, end: 1800, density: 0.2894289428942893 },
                { start: 1800, density: 0.21742174217421784 },
              ],
              percentiles: { p75: 1697 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270627062706273 },
                { start: 1800, end: 3000, density: 0.143914391439144 },
                { start: 3000, density: 0.22902290229022873 },
              ],
              percentiles: { p75: 2882 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9510000000000001 },
                { start: 100, end: 300, density: 0.0316 },
                { start: 300, density: 0.017400000000000002 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6489797959591908 },
                { start: 2500, end: 4000, density: 0.18448689737947568 },
                { start: 4000, density: 0.16653330666133362 },
              ],
              percentiles: { p75: 3293 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9118911891189119,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0601060106010601,
                },
                { start: "0.25", density: 0.028002800280027995 },
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
        fcp: 2882,
        lcp: 3293,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107352734,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837857666911225 },
                { start: 1800, end: 3000, density: 0.08628026412325752 },
                { start: 3000, density: 0.029933969185619923 },
              ],
              percentiles: { p75: 1372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9238906846899795 },
                { start: 100, end: 300, density: 0.04525418748163386 },
                { start: 300, density: 0.03085512782838669 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.899173309713611 },
                { start: 2500, end: 4000, density: 0.0791260702686743 },
                { start: 4000, density: 0.021700620017714764 },
              ],
              percentiles: { p75: 1845 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9366904380730606,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036384805705137545,
                },
                { start: "0.25", density: 0.026924756221801772 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49231853417899984 },
                { start: 200, end: 500, density: 0.37730796335447525 },
                { start: 500, density: 0.130373502466525 },
              ],
              percentiles: { p75: 324 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7315157801155726 },
                { start: 800, end: 1800, density: 0.2397392206252778 },
                { start: 1800, density: 0.028744999259149553 },
              ],
              percentiles: { p75: 843 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1372,
        lcp: 1845,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654107353946,
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
                  density: 0.9266903914590747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048754448398576504,
                },
                { start: "0.25", density: 0.024555160142348733 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6701841903300076 },
                { start: 200, end: 500, density: 0.24712202609363002 },
                { start: 500, density: 0.08269378357636231 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5056787452677116 },
                { start: 800, end: 1800, density: 0.36506219578150306 },
                { start: 1800, density: 0.12925905895078535 },
              ],
              percentiles: { p75: 1318 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.672382342210873 },
                { start: 1800, end: 3000, density: 0.20065669463699415 },
                { start: 3000, density: 0.12696096315213282 },
              ],
              percentiles: { p75: 2169 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962809917355372 },
                { start: 100, end: 300, density: 0.0303030303030303 },
                { start: 300, density: 0.006887052341597767 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7365253323751352 },
                { start: 2500, end: 4000, density: 0.16286381602587138 },
                { start: 4000, density: 0.10061085159899359 },
              ],
              percentiles: { p75: 2590 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2169,
        lcp: 2590,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107355367,
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
                { start: 0, end: 800, density: 0.6399639963996399 },
                { start: 800, end: 1800, density: 0.279027902790279 },
                { start: 1800, density: 0.08100810081008132 },
              ],
              percentiles: { p75: 999 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7553999999999992 },
                { start: 1800, end: 3000, density: 0.1511999999999998 },
                { start: 3000, density: 0.09340000000000097 },
              ],
              percentiles: { p75: 1811 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506901380276055 },
                { start: 100, end: 300, density: 0.03230646129225845 },
                { start: 300, density: 0.017003400680136033 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8031696830316958 },
                { start: 2500, end: 4000, density: 0.12393760623937598 },
                { start: 4000, density: 0.07289271072892842 },
              ],
              percentiles: { p75: 2246 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8366000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12020000000000002,
                },
                { start: "0.25", density: 0.04319999999999997 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5101489851014895 },
                { start: 200, end: 500, density: 0.3406659334066592 },
                { start: 500, density: 0.14918508149185125 },
              ],
              percentiles: { p75: 342 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1811,
        lcp: 2246,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654107356741,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7249999999999999 },
                { start: 800, end: 1800, density: 0.21899999999999992 },
                { start: 1800, density: 0.05600000000000019 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8756626988096425 },
                { start: 1800, end: 3000, density: 0.08942682804841448 },
                { start: 3000, density: 0.034910473141942976 },
              ],
              percentiles: { p75: 1323 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572213893053474 },
                { start: 100, end: 300, density: 0.0271864067966017 },
                { start: 300, density: 0.015592203898050936 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8870725854829032 },
                { start: 2500, end: 4000, density: 0.08613277344531091 },
                { start: 4000, density: 0.02679464107178583 },
              ],
              percentiles: { p75: 1749 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8765999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08079999999999998,
                },
                { start: "0.25", density: 0.042599999999999985 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5565669700910272 },
                { start: 200, end: 500, density: 0.3331999599879964 },
                { start: 500, density: 0.11023306992097638 },
              ],
              percentiles: { p75: 306 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1323,
        lcp: 1749,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654107357817,
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
                { start: 0, end: 200, density: 0.4187734992869188 },
                { start: 200, end: 500, density: 0.407623492804357 },
                { start: 500, density: 0.1736030079087242 },
              ],
              percentiles: { p75: 383 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6125845033801349 },
                { start: 800, end: 1800, density: 0.2940717628705148 },
                { start: 1800, density: 0.0933437337493502 },
              ],
              percentiles: { p75: 1053 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7265839320705416 },
                { start: 1800, end: 3000, density: 0.1662965382103199 },
                { start: 3000, density: 0.10711952971913835 },
              ],
              percentiles: { p75: 1920 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9438157894736842 },
                { start: 100, end: 300, density: 0.03842105263157894 },
                { start: 300, density: 0.017763157894736908 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7973361190911469 },
                { start: 2500, end: 4000, density: 0.1266649255680334 },
                { start: 4000, density: 0.07599895534081968 },
              ],
              percentiles: { p75: 2266 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9240145228215767,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05822095435684648,
                },
                { start: "0.25", density: 0.017764522821576763 },
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
        fcp: 1920,
        lcp: 2266,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107358686,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5398649449117396 },
                { start: 800, end: 1800, density: 0.3737708802274607 },
                { start: 1800, density: 0.08636417486079966 },
              ],
              percentiles: { p75: 1149 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7314128615825956 },
                { start: 1800, end: 3000, density: 0.18120965814009063 },
                { start: 3000, density: 0.08737748027731389 },
              ],
              percentiles: { p75: 1881 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9070591108939914 },
                { start: 100, end: 300, density: 0.05654616511968736 },
                { start: 300, density: 0.0363947239863213 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8015910994138048 },
                { start: 2500, end: 4000, density: 0.1323722933365234 },
                { start: 4000, density: 0.06603660724967181 },
              ],
              percentiles: { p75: 2270 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.941421102661597,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025903041825095056,
                },
                { start: "0.25", density: 0.03267585551330796 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.39250873178369305 },
                { start: 200, end: 500, density: 0.4311694568228356 },
                { start: 500, density: 0.17632181139347147 },
              ],
              percentiles: { p75: 399 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1881,
        lcp: 2270,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1654107360062,
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
                { start: 0, end: 200, density: 0.5936593659365936 },
                { start: 200, end: 500, density: 0.33833383338333844 },
                { start: 500, density: 0.06800680068006795 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339433943394337 },
                { start: 800, end: 1800, density: 0.3310331033103308 },
                { start: 1800, density: 0.23502350235023553 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129512951295133 },
                { start: 1800, end: 3000, density: 0.2034203420342035 },
                { start: 3000, density: 0.2836283628362832 },
              ],
              percentiles: { p75: 3376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656 },
                { start: 100, end: 300, density: 0.0267 },
                { start: 300, density: 0.0077 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5779655931186244 },
                { start: 2500, end: 4000, density: 0.19768953790758179 },
                { start: 4000, density: 0.22434486897379385 },
              ],
              percentiles: { p75: 3789 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.734026597340266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13438656134386562,
                },
                { start: "0.25", density: 0.13158684131586848 },
              ],
              percentiles: { p75: "0.12" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3376,
        lcp: 3789,
        cls: "0.12",
        fid: 14,
      },
      timestamp: 1654107361430,
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
                  density: 0.9107910791079109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07560756075607562,
                },
                { start: "0.25", density: 0.0136013601360136 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6395918775632686 },
                { start: 200, end: 500, density: 0.2805841752525757 },
                { start: 500, density: 0.07982394718415554 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5957191438287658 },
                { start: 800, end: 1800, density: 0.35647129425885177 },
                { start: 1800, density: 0.04780956191238248 },
              ],
              percentiles: { p75: 978 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8719256148770245 },
                { start: 1800, end: 3000, density: 0.09108178364327131 },
                { start: 3000, density: 0.03699260147970424 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595040495950405 },
                { start: 100, end: 300, density: 0.0232976702329767 },
                { start: 300, density: 0.01719828017198278 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8760623937606232 },
                { start: 2500, end: 4000, density: 0.09084091590840905 },
                { start: 4000, density: 0.033096690330967606 },
              ],
              percentiles: { p75: 1907 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1907,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654107362846,
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
                  density: 0.7981775227809653,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16706041174485317,
                },
                { start: "0.25", density: 0.03476206547418154 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5754426042261566 },
                { start: 200, end: 500, density: 0.2756139348943461 },
                { start: 500, density: 0.14894346087949725 },
              ],
              percentiles: { p75: 325 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4364937388193206 },
                { start: 800, end: 1800, density: 0.4161449016100182 },
                { start: 1800, density: 0.14736135957066127 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6335172879828818 },
                { start: 1800, end: 3000, density: 0.22874197544768576 },
                { start: 3000, density: 0.13774073656943253 },
              ],
              percentiles: { p75: 2246 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.906672943391785 },
                { start: 100, end: 300, density: 0.04778156996587029 },
                { start: 300, density: 0.04554548664234471 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6862589356632256 },
                { start: 2500, end: 4000, density: 0.18052876432542858 },
                { start: 4000, density: 0.1332123000113458 },
              ],
              percentiles: { p75: 2839 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2246,
        lcp: 2839,
        cls: "0.05",
        fid: 17,
      },
      timestamp: 1654107363686,
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
                { start: 0, end: 100, density: 0.9193758127438232 },
                { start: 100, end: 300, density: 0.049314794438331505 },
                { start: 300, density: 0.031309392817845234 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8005300530053001 },
                { start: 2500, end: 4000, density: 0.13086308630863078 },
                { start: 4000, density: 0.06860686068606912 },
              ],
              percentiles: { p75: 2272 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8829117088291171,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07079292070792921,
                },
                { start: "0.25", density: 0.0462953704629537 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4680063987202561 },
                { start: 200, end: 500, density: 0.3759248150369929 },
                { start: 500, density: 0.15606878624275103 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5628311506548029 },
                { start: 800, end: 1800, density: 0.35479356193142014 },
                { start: 1800, density: 0.08237528741377692 },
              ],
              percentiles: { p75: 1119 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7467999999999996 },
                { start: 1800, end: 3000, density: 0.16979999999999984 },
                { start: 3000, density: 0.08340000000000071 },
              ],
              percentiles: { p75: 1828 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1828,
        lcp: 2272,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1654107364864,
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
                  density: 0.8883888388838884,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0846084608460846,
                },
                { start: "0.25", density: 0.027002700270027005 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5734146829365881 },
                { start: 200, end: 500, density: 0.3036607321464297 },
                { start: 500, density: 0.12292458491698215 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6110999999999999 },
                { start: 800, end: 1800, density: 0.35019999999999996 },
                { start: 1800, density: 0.03870000000000017 },
              ],
              percentiles: { p75: 976 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7898999999999999 },
                { start: 1800, end: 3000, density: 0.16060000000000002 },
                { start: 3000, density: 0.049500000000000065 },
              ],
              percentiles: { p75: 1691 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520904180836167 },
                { start: 100, end: 300, density: 0.026705341068213644 },
                { start: 300, density: 0.021204240848169725 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8247850429914013 },
                { start: 2500, end: 4000, density: 0.12912417516496702 },
                { start: 4000, density: 0.046090781843631676 },
              ],
              percentiles: { p75: 2172 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1691,
        lcp: 2172,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107365566,
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
                { start: 0, end: 800, density: 0.7330060984679458 },
                { start: 800, end: 1800, density: 0.2543507362784471 },
                { start: 1800, density: 0.012643165253607022 },
              ],
              percentiles: { p75: 840 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9290380047505937 },
                { start: 1800, end: 3000, density: 0.06250000000000001 },
                { start: 3000, density: 0.008461995249406171 },
              ],
              percentiles: { p75: 1310 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578808335779279 },
                { start: 100, end: 300, density: 0.026416201937188143 },
                { start: 300, density: 0.015702964484884063 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.949464573859469 },
                { start: 2500, end: 4000, density: 0.044961126595276506 },
                { start: 4000, density: 0.005574299545254508 },
              ],
              percentiles: { p75: 1634 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9710916151301597,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017258737235725588,
                },
                { start: "0.25", density: 0.011649647634114774 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5890991245410899 },
                { start: 200, end: 500, density: 0.29567918667043197 },
                { start: 500, density: 0.1152216887884782 },
              ],
              percentiles: { p75: 296 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1310,
        lcp: 1634,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107366380,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.624362436243625 },
                { start: 200, end: 500, density: 0.30203020302030237 },
                { start: 500, density: 0.07360736073607266 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3131373725254942 },
                { start: 800, end: 1800, density: 0.5372925414917004 },
                { start: 1800, density: 0.14957008598280544 },
              ],
              percentiles: { p75: 1481 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5460092018403666 },
                { start: 1800, end: 3000, density: 0.293358671734346 },
                { start: 3000, density: 0.16063212642528724 },
              ],
              percentiles: { p75: 2511 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675967596759676 },
                { start: 100, end: 300, density: 0.0249024902490249 },
                { start: 300, density: 0.0075007500750075016 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.66775 },
                { start: 2500, end: 4000, density: 0.21735 },
                { start: 4000, density: 0.11489999999999993 },
              ],
              percentiles: { p75: 2905 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9046095390460954,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04559544045595441,
                },
                { start: "0.25", density: 0.049795020497950246 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2511,
        lcp: 2905,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654107367825,
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
                { start: 0, end: 800, density: 0.27671698490452873 },
                { start: 800, end: 1800, density: 0.4879536139158254 },
                { start: 1800, density: 0.23532940117964596 },
              ],
              percentiles: { p75: 1770 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.045609121824364926 },
                { start: 1800, end: 3000, density: 0.3791758351670339 },
                { start: 3000, density: 0.5752150430086012 },
              ],
              percentiles: { p75: 5003 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.20077007700770158 },
                { start: 2500, end: 4000, density: 0.38158815881588315 },
                { start: 4000, density: 0.4176417641764153 },
              ],
              percentiles: { p75: 5408 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8736126387361265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07489251074892513,
                },
                { start: "0.25", density: 0.0514948505149485 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.813462692538508 },
                { start: 200, end: 500, density: 0.10472094418883783 },
                { start: 500, density: 0.08181636327265414 },
              ],
              percentiles: { p75: 157 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5003, lcp: 5408, cls: "0.05" },
      timestamp: 1654107368574,
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
                  density: 0.9366904380730606,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036384805705137545,
                },
                { start: "0.25", density: 0.026924756221801772 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49231853417899984 },
                { start: 200, end: 500, density: 0.37730796335447525 },
                { start: 500, density: 0.130373502466525 },
              ],
              percentiles: { p75: 324 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7315157801155726 },
                { start: 800, end: 1800, density: 0.2397392206252778 },
                { start: 1800, density: 0.028744999259149553 },
              ],
              percentiles: { p75: 843 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837857666911225 },
                { start: 1800, end: 3000, density: 0.08628026412325752 },
                { start: 3000, density: 0.029933969185619923 },
              ],
              percentiles: { p75: 1372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9238906846899795 },
                { start: 100, end: 300, density: 0.04525418748163386 },
                { start: 300, density: 0.03085512782838669 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.899173309713611 },
                { start: 2500, end: 4000, density: 0.0791260702686743 },
                { start: 4000, density: 0.021700620017714764 },
              ],
              percentiles: { p75: 1845 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1372,
        lcp: 1845,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654107369289,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9457945794579458 },
                { start: 2500, end: 4000, density: 0.04820482048204821 },
                { start: 4000, density: 0.006000600060005998 },
              ],
              percentiles: { p75: 1636 },
            },
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
                  density: 0.0263973602639736,
                },
                { start: "0.25", density: 0.012998700129987 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6888933320003997 },
                { start: 200, end: 500, density: 0.22403279016295108 },
                { start: 500, density: 0.08707387783664912 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7632000000000001 },
                { start: 800, end: 1800, density: 0.22689999999999996 },
                { start: 1800, density: 0.009900000000000003 },
              ],
              percentiles: { p75: 785 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9364999999999999 },
                { start: 1800, end: 3000, density: 0.0541 },
                { start: 3000, density: 0.009399999999999999 },
              ],
              percentiles: { p75: 1234 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9640071985602879 },
                { start: 100, end: 300, density: 0.02149570085982803 },
                { start: 300, density: 0.014497100579884023 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1234,
        lcp: 1636,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654107370425,
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
                  density: 0.8736126387361265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07489251074892513,
                },
                { start: "0.25", density: 0.0514948505149485 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.813462692538508 },
                { start: 200, end: 500, density: 0.10472094418883783 },
                { start: 500, density: 0.08181636327265414 },
              ],
              percentiles: { p75: 164 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27671698490452873 },
                { start: 800, end: 1800, density: 0.4879536139158254 },
                { start: 1800, density: 0.23532940117964596 },
              ],
              percentiles: { p75: 1777 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.045609121824364926 },
                { start: 1800, end: 3000, density: 0.3791758351670339 },
                { start: 3000, density: 0.5752150430086012 },
              ],
              percentiles: { p75: 5068 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.20077007700770158 },
                { start: 2500, end: 4000, density: 0.38158815881588315 },
                { start: 4000, density: 0.4176417641764153 },
              ],
              percentiles: { p75: 5526 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5068, lcp: 5526, cls: "0.04" },
      timestamp: 1654107371319,
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
                { start: "0.00", end: "0.10", density: 0.7924 },
                { start: "0.10", end: "0.25", density: 0.1281 },
                { start: "0.25", density: 0.07950000000000003 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6261626162616265 },
                { start: 200, end: 500, density: 0.24512451245124522 },
                { start: 500, density: 0.1287128712871284 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29490000000000294 },
                { start: 800, end: 1800, density: 0.391500000000004 },
                { start: 1800, density: 0.313599999999993 },
              ],
              percentiles: { p75: 2015 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.512402480496099 },
                { start: 1800, end: 3000, density: 0.2815563112622524 },
                { start: 3000, density: 0.20604120824164848 },
              ],
              percentiles: { p75: 2745 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9370811243373012 },
                { start: 100, end: 300, density: 0.035110533159947985 },
                { start: 300, density: 0.02780834250275088 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6043791241751638 },
                { start: 2500, end: 4000, density: 0.24825034993001358 },
                { start: 4000, density: 0.1473705258948226 },
              ],
              percentiles: { p75: 3197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2745,
        lcp: 3197,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1654107372743,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6351270254050794 },
                { start: 1800, end: 3000, density: 0.2111422284456886 },
                { start: 3000, density: 0.15373074614923185 },
              ],
              percentiles: { p75: 2331 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9558999999999999 },
                { start: 100, end: 300, density: 0.027499999999999993 },
                { start: 300, density: 0.016600000000000104 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7103130939281777 },
                { start: 2500, end: 4000, density: 0.1611483445033508 },
                { start: 4000, density: 0.1285385615684715 },
              ],
              percentiles: { p75: 2795 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8864 },
                { start: "0.10", end: "0.25", density: 0.0636 },
                { start: "0.25", density: 0.04999999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6298000000000007 },
                { start: 200, end: 500, density: 0.27720000000000034 },
                { start: 500, density: 0.09299999999999896 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45568227290916363 },
                { start: 800, end: 1800, density: 0.41376550620248087 },
                { start: 1800, density: 0.13055222088835547 },
              ],
              percentiles: { p75: 1329 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2331,
        lcp: 2795,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107373535,
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
                { start: 0, end: 800, density: 0.6474410235905638 },
                { start: 800, end: 1800, density: 0.3217712914834066 },
                { start: 1800, density: 0.030787684926029662 },
              ],
              percentiles: { p75: 929 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8910326901929422 },
                { start: 1800, end: 3000, density: 0.08647405778266522 },
                { start: 3000, density: 0.0224932520243926 },
              ],
              percentiles: { p75: 1377 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9609921984396879 },
                { start: 100, end: 300, density: 0.026805361072214446 },
                { start: 300, density: 0.012202440488097707 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8962500000000004 },
                { start: 2500, end: 4000, density: 0.08245000000000002 },
                { start: 4000, density: 0.021299999999999677 },
              ],
              percentiles: { p75: 1813 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8896999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0811 },
                { start: "0.25", density: 0.029200000000000025 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47254725472547243 },
                { start: 200, end: 500, density: 0.40414041404140416 },
                { start: 500, density: 0.12331233123312328 },
              ],
              percentiles: { p75: 344 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1377,
        lcp: 1813,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654107374234,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9425942594259427,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030803080308030806,
                },
                { start: "0.25", density: 0.026602660266026618 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5418999999999999 },
                { start: 200, end: 500, density: 0.3432 },
                { start: 500, density: 0.11489999999999992 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8032409722916872 },
                { start: 800, end: 1800, density: 0.16024807442232666 },
                { start: 1800, density: 0.036510953285985984 },
              ],
              percentiles: { p75: 728 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8676867686768669 },
                { start: 1800, end: 3000, density: 0.09020902090209011 },
                { start: 3000, density: 0.04210421042104291 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9436887377475495 },
                { start: 100, end: 300, density: 0.03150630126025205 },
                { start: 300, density: 0.02480496099219857 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8932393239323926 },
                { start: 2500, end: 4000, density: 0.07285728572857278 },
                { start: 4000, density: 0.03390339033903463 },
              ],
              percentiles: { p75: 1743 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 1743,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107374975,
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
                { start: 0, end: 100, density: 0.9668033196680331 },
                { start: 100, end: 300, density: 0.020597940205979406 },
                { start: 300, density: 0.0125987401259874 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8569143085691433 },
                { start: 2500, end: 4000, density: 0.09459054094590542 },
                { start: 4000, density: 0.048495150484951295 },
              ],
              percentiles: { p75: 1899 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9587 },
                { start: "0.10", end: "0.25", density: 0.0285 },
                { start: "0.25", density: 0.012799999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5963999999999998 },
                { start: 200, end: 500, density: 0.33129999999999976 },
                { start: 500, density: 0.07230000000000034 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7170282971702828 },
                { start: 800, end: 1800, density: 0.22707729227077286 },
                { start: 1800, density: 0.05589441055894432 },
              ],
              percentiles: { p75: 857 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8380161983801612 },
                { start: 1800, end: 3000, density: 0.09469053094690519 },
                { start: 3000, density: 0.0672932706729336 },
              ],
              percentiles: { p75: 1458 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1899,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654107375814,
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
                  density: 0.8768123187681232,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.105989401059894,
                },
                { start: "0.25", density: 0.01719828017198281 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.559888022395521 },
                { start: 200, end: 500, density: 0.33273345330933823 },
                { start: 500, density: 0.10737852429514072 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6596319263852772 },
                { start: 800, end: 1800, density: 0.29535907181436294 },
                { start: 1800, density: 0.04500900180035992 },
              ],
              percentiles: { p75: 932 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8157262905162064 },
                { start: 1800, end: 3000, density: 0.13145258103241292 },
                { start: 3000, density: 0.05282112845138059 },
              ],
              percentiles: { p75: 1605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9491152654203739 },
                { start: 100, end: 300, density: 0.033090072978106566 },
                { start: 300, density: 0.01779466160151943 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8673101930579172 },
                { start: 2500, end: 4000, density: 0.09367810343102928 },
                { start: 4000, density: 0.039011703511053576 },
              ],
              percentiles: { p75: 1958 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1605,
        lcp: 1958,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107376738,
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
                { start: 0, end: 2500, density: 0.7466246624662466 },
                { start: 2500, end: 4000, density: 0.1674667466746675 },
                { start: 4000, density: 0.08590859085908593 },
              ],
              percentiles: { p75: 2632 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7786778677867787,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1615161516151615,
                },
                { start: "0.25", density: 0.05980598059805978 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7677767776777675 },
                { start: 200, end: 500, density: 0.1609160916091608 },
                { start: 500, density: 0.07130713071307165 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5210478952104789 },
                { start: 800, end: 1800, density: 0.3916608339166083 },
                { start: 1800, density: 0.08729127087291286 },
              ],
              percentiles: { p75: 1240 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7180563887222554 },
                { start: 1800, end: 3000, density: 0.18576284743051377 },
                { start: 3000, density: 0.0961807638472309 },
              ],
              percentiles: { p75: 2015 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643928785757152 },
                { start: 100, end: 300, density: 0.023304660932186437 },
                { start: 300, density: 0.012302460492098422 },
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
      extractedResults: { fcp: 2015, lcp: 2632, cls: "0.07", fid: 9 },
      timestamp: 1654107377618,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7547373470856319 },
                { start: 200, end: 500, density: 0.19249220436555523 },
                { start: 500, density: 0.05277044854881278 },
              ],
              percentiles: { p75: 197 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5123986647591793 },
                { start: 800, end: 1800, density: 0.3743443013829278 },
                { start: 1800, density: 0.11325703385789289 },
              ],
              percentiles: { p75: 1234 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7514526265860304 },
                { start: 1800, end: 3000, density: 0.14704138503498146 },
                { start: 3000, density: 0.10150598837898811 },
              ],
              percentiles: { p75: 1805 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625472733927047 },
                { start: 100, end: 300, density: 0.026351104062461883 },
                { start: 300, density: 0.011101622544833434 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.804026050917702 },
                { start: 2500, end: 4000, density: 0.12066311426879799 },
                { start: 4000, density: 0.07531083481350012 },
              ],
              percentiles: { p75: 2177 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8410135533294049,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10771950500883912,
                },
                { start: "0.25", density: 0.0512669416617561 },
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
        fcp: 1805,
        lcp: 2177,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654107378389,
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
                  density: 0.8047804780478048,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1319131913191319,
                },
                { start: "0.25", density: 0.06330633063306328 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6273882164649397 },
                { start: 200, end: 500, density: 0.2770831249374813 },
                { start: 500, density: 0.09552865859757892 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7619476104779044 },
                { start: 800, end: 1800, density: 0.21325734853029393 },
                { start: 1800, density: 0.02479504099180167 },
              ],
              percentiles: { p75: 826 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9000000000000001 },
                { start: 1800, end: 3000, density: 0.07330000000000002 },
                { start: 3000, density: 0.02669999999999999 },
              ],
              percentiles: { p75: 1315 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482000000000002 },
                { start: 100, end: 300, density: 0.030800000000000008 },
                { start: 300, density: 0.02099999999999998 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9032096790320969 },
                { start: 2500, end: 4000, density: 0.07239276072392758 },
                { start: 4000, density: 0.02439756024397558 },
              ],
              percentiles: { p75: 1828 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1315,
        lcp: 1828,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1654107379507,
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
                { start: 0, end: 200, density: 0.7549490101979602 },
                { start: 200, end: 500, density: 0.17736452709458111 },
                { start: 500, density: 0.06768646270745866 },
              ],
              percentiles: { p75: 201 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7403740374037404 },
                { start: 800, end: 1800, density: 0.22522252225222522 },
                { start: 1800, density: 0.034403440344034454 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9088908890889089 },
                { start: 1800, end: 3000, density: 0.0657065706570657 },
                { start: 3000, density: 0.025402540254025364 },
              ],
              percentiles: { p75: 1265 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981503699260148 },
                { start: 100, end: 300, density: 0.012597480503899222 },
                { start: 300, density: 0.005898820235952829 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.91715 },
                { start: 2500, end: 4000, density: 0.060549999999999986 },
                { start: 4000, density: 0.02229999999999996 },
              ],
              percentiles: { p75: 1700 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8084191580841915,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17108289171082894,
                },
                { start: "0.25", density: 0.020497950204979513 },
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
      extractedResults: { fcp: 1265, lcp: 1700, cls: "0.08", fid: 9 },
      timestamp: 1654107380406,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.632247101159536 },
                { start: 1800, end: 3000, density: 0.22930827668932413 },
                { start: 3000, density: 0.13844462215113984 },
              ],
              percentiles: { p75: 2325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9530281830901458 },
                { start: 100, end: 300, density: 0.026983809714171487 },
                { start: 300, density: 0.019988007195682715 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7328732873287327 },
                { start: 2500, end: 4000, density: 0.18991899189918995 },
                { start: 4000, density: 0.0772077207720773 },
              ],
              percentiles: { p75: 2615 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9459945994599459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0337033703370337,
                },
                { start: "0.25", density: 0.020302030203020304 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6410358964103589 },
                { start: 200, end: 500, density: 0.2575742425757424 },
                { start: 500, density: 0.10138986101389866 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46120775844831025 },
                { start: 800, end: 1800, density: 0.35912817436512695 },
                { start: 1800, density: 0.17966406718656272 },
              ],
              percentiles: { p75: 1534 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2325,
        lcp: 2615,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107381528,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6285742851429713 },
                { start: 800, end: 1800, density: 0.33083383323335347 },
                { start: 1800, density: 0.040591881623675156 },
              ],
              percentiles: { p75: 993 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8471235617808907 },
                { start: 1800, end: 3000, density: 0.11825912956478242 },
                { start: 3000, density: 0.034617308654326835 },
              ],
              percentiles: { p75: 1411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9825017498250176 },
                { start: 100, end: 300, density: 0.0131986801319868 },
                { start: 300, density: 0.004299570042995701 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8918716256748651 },
                { start: 2500, end: 4000, density: 0.0844331133773245 },
                { start: 4000, density: 0.023695260947810364 },
              ],
              percentiles: { p75: 1772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8943000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07280000000000002,
                },
                { start: "0.25", density: 0.032899999999999985 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7836 },
                { start: 200, end: 500, density: 0.1926 },
                { start: 500, density: 0.023799999999999964 },
              ],
              percentiles: { p75: 185 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1411,
        lcp: 1772,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654107382352,
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
                  density: 0.8563712742548508,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08101620324064812,
                },
                { start: "0.25", density: 0.06261252250450097 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6008600860086009 },
                { start: 200, end: 500, density: 0.25512551255125515 },
                { start: 500, density: 0.14401440144014405 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3174999999999999 },
                { start: 800, end: 1800, density: 0.42199999999999993 },
                { start: 1800, density: 0.26050000000000006 },
              ],
              percentiles: { p75: 1860 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5402999999999998 },
                { start: 1800, end: 3000, density: 0.2989999999999998 },
                { start: 3000, density: 0.16070000000000037 },
              ],
              percentiles: { p75: 2505 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9292141571685663 },
                { start: 100, end: 300, density: 0.033393321335732855 },
                { start: 300, density: 0.037392521495700916 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6842868573714741 },
                { start: 2500, end: 4000, density: 0.2268953790758151 },
                { start: 4000, density: 0.08881776355271084 },
              ],
              percentiles: { p75: 2987 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2505,
        lcp: 2987,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1654107383508,
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
                  density: 0.9522565665360614,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03032941517921927,
                },
                { start: "0.25", density: 0.017414018284719213 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.627293064876957 },
                { start: 200, end: 500, density: 0.28456375838926157 },
                { start: 500, density: 0.08814317673378139 },
              ],
              percentiles: { p75: 252 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3571006790670208 },
                { start: 800, end: 1800, density: 0.4105403011514612 },
                { start: 1800, density: 0.23235901978151802 },
              ],
              percentiles: { p75: 1717 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.597335307179867 },
                { start: 1800, end: 3000, density: 0.20799407846039986 },
                { start: 3000, density: 0.1946706143597331 },
              ],
              percentiles: { p75: 2608 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9339122755372388 },
                { start: 100, end: 300, density: 0.04091845746246688 },
                { start: 300, density: 0.025169267000294378 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6720817406645105 },
                { start: 2500, end: 4000, density: 0.19589826521611298 },
                { start: 4000, density: 0.1320199941193764 },
              ],
              percentiles: { p75: 2962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2608,
        lcp: 2962,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107384355,
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
                { start: 0, end: 2500, density: 0.5648097677967937 },
                { start: 2500, end: 4000, density: 0.2543333696718626 },
                { start: 4000, density: 0.18085686253134362 },
              ],
              percentiles: { p75: 3483 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8191107729100989,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1149037938906403,
                },
                { start: "0.25", density: 0.06598543319926088 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847179711412335 },
                { start: 200, end: 500, density: 0.30257979886313957 },
                { start: 500, density: 0.11270222999562697 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25788153158066923 },
                { start: 800, end: 1800, density: 0.4749645467437537 },
                { start: 1800, density: 0.267153921675577 },
              ],
              percentiles: { p75: 1886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5011451630494055 },
                { start: 1800, end: 3000, density: 0.2700403533645981 },
                { start: 3000, density: 0.22881448358599635 },
              ],
              percentiles: { p75: 2918 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9452813469206911 },
                { start: 100, end: 300, density: 0.038435976960567116 },
                { start: 300, density: 0.01628267611874173 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2918,
        lcp: 3483,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654107385684,
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
                  density: 0.9596999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028599999999999997,
                },
                { start: "0.25", density: 0.01169999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.677764447110578 },
                { start: 200, end: 500, density: 0.25974805038992216 },
                { start: 500, density: 0.06248750249949966 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6272254450890176 },
                { start: 800, end: 1800, density: 0.3269653930786157 },
                { start: 1800, density: 0.04580916183236675 },
              ],
              percentiles: { p75: 946 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8776632989896969 },
                { start: 1800, end: 3000, density: 0.08922676803040909 },
                { start: 3000, density: 0.033109932979894126 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9697909372811843 },
                { start: 100, end: 300, density: 0.016104831449434826 },
                { start: 300, density: 0.014104231269380894 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8917567026810724 },
                { start: 2500, end: 4000, density: 0.0793317326930772 },
                { start: 4000, density: 0.028911564625850428 },
              ],
              percentiles: { p75: 1799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1402,
        lcp: 1799,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107387126,
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
                { start: 0, end: 200, density: 0.4934493449344938 },
                { start: 200, end: 500, density: 0.29662966296629684 },
                { start: 500, density: 0.2099209920992094 },
              ],
              percentiles: { p75: 428 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41818363672734515 },
                { start: 800, end: 1800, density: 0.3964792958591716 },
                { start: 1800, density: 0.18533706741348333 },
              ],
              percentiles: { p75: 1564 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5198079231692666 },
                { start: 1800, end: 3000, density: 0.23959583833533366 },
                { start: 3000, density: 0.2405962384953998 },
              ],
              percentiles: { p75: 2973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.913991399139914 },
                { start: 100, end: 300, density: 0.05600560056005602 },
                { start: 300, density: 0.030003000300029916 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5656631326265243 },
                { start: 2500, end: 4000, density: 0.24219843968793717 },
                { start: 4000, density: 0.1921384276855385 },
              ],
              percentiles: { p75: 3537 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8486848684868487,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10781078107810779,
                },
                { start: "0.25", density: 0.043504350435043485 },
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
        fcp: 2973,
        lcp: 3537,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654107387888,
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
                  density: 0.9024069446271209,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06326450085492569,
                },
                { start: "0.25", density: 0.034328554517953434 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4064212999216917 },
                { start: 200, end: 500, density: 0.4055077003393371 },
                { start: 500, density: 0.1880709997389713 },
              ],
              percentiles: { p75: 399 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8391654562260662 },
                { start: 800, end: 1800, density: 0.13429288260926975 },
                { start: 1800, density: 0.026541661164663964 },
              ],
              percentiles: { p75: 688 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9173520827805786 },
                { start: 1800, end: 3000, density: 0.06075882196869195 },
                { start: 3000, density: 0.021889095250729466 },
              ],
              percentiles: { p75: 1212 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.929755966023999 },
                { start: 100, end: 300, density: 0.03775111230955913 },
                { start: 300, density: 0.03249292166644188 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9136951928156366 },
                { start: 2500, end: 4000, density: 0.06979661912308507 },
                { start: 4000, density: 0.01650818806127843 },
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
        fcp: 1212,
        lcp: 1743,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654107388814,
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
                  density: 0.8537146285371463,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11258874112588742,
                },
                { start: "0.25", density: 0.03369663033696629 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7163000000000005 },
                { start: 200, end: 500, density: 0.2097000000000002 },
                { start: 500, density: 0.07399999999999933 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7269453890778155 },
                { start: 800, end: 1800, density: 0.24614922984596915 },
                { start: 1800, density: 0.026905381076215207 },
              ],
              percentiles: { p75: 838 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9070185962807438 },
                { start: 1800, end: 3000, density: 0.07208558288342329 },
                { start: 3000, density: 0.020895820835832857 },
              ],
              percentiles: { p75: 1244 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636999999999999 },
                { start: 100, end: 300, density: 0.0193 },
                { start: 300, density: 0.01700000000000018 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.918808119188081 },
                { start: 2500, end: 4000, density: 0.06179382061793819 },
                { start: 4000, density: 0.019398060193980802 },
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
        fcp: 1244,
        lcp: 1672,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654107389931,
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
                { start: "0.00", end: "0.10", density: 0.9329 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05389999999999999,
                },
                { start: "0.25", density: 0.013199999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5407918416316738 },
                { start: 200, end: 500, density: 0.37342531493701264 },
                { start: 500, density: 0.08578284343131344 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6495 },
                { start: 800, end: 1800, density: 0.3048 },
                { start: 1800, density: 0.045700000000000005 },
              ],
              percentiles: { p75: 942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8059999999999999 },
                { start: 1800, end: 3000, density: 0.13410000000000005 },
                { start: 3000, density: 0.059900000000000106 },
              ],
              percentiles: { p75: 1707 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9181918191819182 },
                { start: 100, end: 300, density: 0.0502050205020502 },
                { start: 300, density: 0.031603160316031595 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8446999999999999 },
                { start: 2500, end: 4000, density: 0.11360000000000003 },
                { start: 4000, density: 0.04170000000000002 },
              ],
              percentiles: { p75: 2086 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: {
        fcp: 1707,
        lcp: 2086,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107390786,
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
                { start: 0, end: 800, density: 0.41585841415858404 },
                { start: 800, end: 1800, density: 0.4642535746425357 },
                { start: 1800, density: 0.11988801119888028 },
              ],
              percentiles: { p75: 1320 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6272254450890172 },
                { start: 1800, end: 3000, density: 0.25205041008201623 },
                { start: 3000, density: 0.12072414482896647 },
              ],
              percentiles: { p75: 2227 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783999999999999 },
                { start: 100, end: 300, density: 0.017400000000000002 },
                { start: 300, density: 0.0042 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7403740374037403 },
                { start: 2500, end: 4000, density: 0.15371537153715373 },
                { start: 4000, density: 0.10591059105910595 },
              ],
              percentiles: { p75: 2599 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9464 },
                { start: "0.10", end: "0.25", density: 0.0382 },
                { start: "0.25", density: 0.015399999999999987 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7178435687137428 },
                { start: 200, end: 500, density: 0.2359471894378875 },
                { start: 500, density: 0.04620924184836978 },
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
        fcp: 2227,
        lcp: 2599,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107392117,
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
                { start: 0, end: 2500, density: 0.9032096790320969 },
                { start: 2500, end: 4000, density: 0.07239276072392758 },
                { start: 4000, density: 0.02439756024397558 },
              ],
              percentiles: { p75: 1828 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8047804780478048,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1319131913191319,
                },
                { start: "0.25", density: 0.06330633063306328 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6273882164649397 },
                { start: 200, end: 500, density: 0.2770831249374813 },
                { start: 500, density: 0.09552865859757892 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7619476104779044 },
                { start: 800, end: 1800, density: 0.21325734853029393 },
                { start: 1800, density: 0.02479504099180167 },
              ],
              percentiles: { p75: 826 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9000000000000001 },
                { start: 1800, end: 3000, density: 0.07330000000000002 },
                { start: 3000, density: 0.02669999999999999 },
              ],
              percentiles: { p75: 1315 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482000000000002 },
                { start: 100, end: 300, density: 0.030800000000000008 },
                { start: 300, density: 0.02099999999999998 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1315,
        lcp: 1828,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1654107393049,
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
                { start: 0, end: 100, density: 0.9562820994613553 },
                { start: 100, end: 300, density: 0.029187022422648125 },
                { start: 300, density: 0.014530878115996548 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7351262748907229 },
                { start: 2500, end: 4000, density: 0.15571879553181145 },
                { start: 4000, density: 0.10915492957746557 },
              ],
              percentiles: { p75: 2607 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9327862917823098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02328948956196452,
                },
                { start: "0.25", density: 0.04392421865572585 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4856435643564358 },
                { start: 200, end: 500, density: 0.3570544554455447 },
                { start: 500, density: 0.1573019801980195 },
              ],
              percentiles: { p75: 368 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4733203977686148 },
                { start: 800, end: 1800, density: 0.41377637642493315 },
                { start: 1800, density: 0.11290322580645203 },
              ],
              percentiles: { p75: 1221 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6372274333049092 },
                { start: 1800, end: 3000, density: 0.21951516628091114 },
                { start: 3000, density: 0.1432574004141798 },
              ],
              percentiles: { p75: 2241 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2241,
        lcp: 2607,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107393901,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9032806561312264 },
                { start: 1800, end: 3000, density: 0.07681536307261451 },
                { start: 3000, density: 0.01990398079615902 },
              ],
              percentiles: { p75: 1332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783956791358273 },
                { start: 100, end: 300, density: 0.01480296059211842 },
                { start: 300, density: 0.006801360272054413 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9191419141914194 },
                { start: 2500, end: 4000, density: 0.06435643564356437 },
                { start: 4000, density: 0.016501650165016313 },
              ],
              percentiles: { p75: 1699 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8982101789821019,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08679132086791319,
                },
                { start: "0.25", density: 0.014998500149985 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.677132286771323 },
                { start: 200, end: 500, density: 0.26477352264773524 },
                { start: 500, density: 0.05809419058094188 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6943388677735548 },
                { start: 800, end: 1800, density: 0.27755551110222043 },
                { start: 1800, density: 0.028105621124224794 },
              ],
              percentiles: { p75: 862 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1332,
        lcp: 1699,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107395196,
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
                { start: 0, end: 100, density: 0.9694963348309293 },
                { start: 100, end: 300, density: 0.020335776779380466 },
                { start: 300, density: 0.01016788838969023 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7704091526081055 },
                { start: 2500, end: 4000, density: 0.1685088229590847 },
                { start: 4000, density: 0.06108202443280972 },
              ],
              percentiles: { p75: 2412 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9471790988262023,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04051495645588792,
                },
                { start: "0.25", density: 0.012305944717909882 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8663436301231576 },
                { start: 200, end: 500, density: 0.1150817686250757 },
                { start: 500, density: 0.01857460125176658 },
              ],
              percentiles: { p75: 140 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5120540019286403 },
                { start: 800, end: 1800, density: 0.3718418514946962 },
                { start: 1800, density: 0.11610414657666372 },
              ],
              percentiles: { p75: 1291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6737084693681581 },
                { start: 1800, end: 3000, density: 0.2396773574034953 },
                { start: 3000, density: 0.08661417322834657 },
              ],
              percentiles: { p75: 2034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2034,
        lcp: 2412,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654107396234,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8834552102376599 },
                { start: 2500, end: 4000, density: 0.08899190389135546 },
                { start: 4000, density: 0.027552885870984655 },
              ],
              percentiles: { p75: 1781 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.963622190463817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021307002728335713,
                },
                { start: "0.25", density: 0.015070806807847215 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46696428571428594 },
                { start: 200, end: 500, density: 0.40127551020408186 },
                { start: 500, density: 0.13176020408163214 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7087161984772905 },
                { start: 800, end: 1800, density: 0.2280126017327383 },
                { start: 1800, density: 0.06327119978997116 },
              ],
              percentiles: { p75: 872 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8623949579831929 },
                { start: 1800, end: 3000, density: 0.09887079831932771 },
                { start: 3000, density: 0.03873424369747948 },
              ],
              percentiles: { p75: 1365 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469414037347071 },
                { start: 100, end: 300, density: 0.033869929169349645 },
                { start: 300, density: 0.019188667095943295 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1365,
        lcp: 1781,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654107397529,
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
                { start: 0, end: 800, density: 0.609660966096609 },
                { start: 800, end: 1800, density: 0.29722972297229694 },
                { start: 1800, density: 0.09310931093109395 },
              ],
              percentiles: { p75: 1114 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7581548929357617 },
                { start: 1800, end: 3000, density: 0.15099059435661402 },
                { start: 3000, density: 0.0908545127076243 },
              ],
              percentiles: { p75: 1777 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9766023397660234 },
                { start: 100, end: 300, density: 0.018298170182981695 },
                { start: 300, density: 0.0050994900509948775 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.784442221110555 },
                { start: 2500, end: 4000, density: 0.13131565782891433 },
                { start: 4000, density: 0.08424212106053068 },
              ],
              percentiles: { p75: 2316 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8395 },
                { start: "0.10", end: "0.25", density: 0.1317 },
                { start: "0.25", density: 0.0288 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8034803480348032 },
                { start: 200, end: 500, density: 0.14341434143414336 },
                { start: 500, density: 0.05310531053105345 },
              ],
              percentiles: { p75: 172 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1777,
        lcp: 2316,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654107398855,
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
                { start: 0, end: 2500, density: 0.701775431861804 },
                { start: 2500, end: 4000, density: 0.16530710172744723 },
                { start: 4000, density: 0.13291746641074886 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.93918114734587 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022018567007855275,
                },
                { start: "0.25", density: 0.03880028564627469 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.567983519146874 },
                { start: 200, end: 500, density: 0.3263451284537083 },
                { start: 500, density: 0.10567135239941779 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4378139201148049 },
                { start: 800, end: 1800, density: 0.418679741688591 },
                { start: 1800, density: 0.14350633819660402 },
              ],
              percentiles: { p75: 1378 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6090505341495607 },
                { start: 1800, end: 3000, density: 0.22074180770615728 },
                { start: 3000, density: 0.1702076581442821 },
              ],
              percentiles: { p75: 2436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9484107579462102 },
                { start: 100, end: 300, density: 0.032151589242053795 },
                { start: 300, density: 0.019437652811735952 },
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
        fcp: 2436,
        lcp: 2821,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107399782,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9297070292970703,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0510948905109489,
                },
                { start: "0.25", density: 0.019198080191980813 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5448 },
                { start: 200, end: 500, density: 0.3433 },
                { start: 500, density: 0.11190000000000001 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22667733226677353 },
                { start: 800, end: 1800, density: 0.5262473752624742 },
                { start: 1800, density: 0.24707529247075224 },
              ],
              percentiles: { p75: 1836 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3716743348669744 },
                { start: 1800, end: 3000, density: 0.326765353070615 },
                { start: 3000, density: 0.3015603120624107 },
              ],
              percentiles: { p75: 3365 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9717056588682264 },
                { start: 100, end: 300, density: 0.02129574085182963 },
                { start: 300, density: 0.006998600279944009 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4861486148614852 },
                { start: 2500, end: 4000, density: 0.3051305130513044 },
                { start: 4000, density: 0.2087208720872105 },
              ],
              percentiles: { p75: 3746 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3365,
        lcp: 3746,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1654107401140,
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
                  density: 0.9629762117689143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014845287068502952,
                },
                { start: "0.25", density: 0.022178501162582718 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5924866514111364 },
                { start: 200, end: 500, density: 0.3403890160183066 },
                { start: 500, density: 0.06712433257055689 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33116654954321856 },
                { start: 800, end: 1800, density: 0.4689037245256501 },
                { start: 1800, density: 0.19992972593113134 },
              ],
              percentiles: { p75: 1637 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5535941765241128 },
                { start: 1800, end: 3000, density: 0.3111919927206552 },
                { start: 3000, density: 0.13521383075523205 },
              ],
              percentiles: { p75: 2425 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9501845018450183 },
                { start: 100, end: 300, density: 0.014022140221402213 },
                { start: 300, density: 0.035793357933579344 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6838820549927641 },
                { start: 2500, end: 4000, density: 0.22910636758321273 },
                { start: 4000, density: 0.08701157742402325 },
              ],
              percentiles: { p75: 2821 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2425,
        lcp: 2821,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107402120,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6375087473757874 },
                { start: 800, end: 1800, density: 0.32300309907027897 },
                { start: 1800, density: 0.03948815355393355 },
              ],
              percentiles: { p75: 976 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8607721544308862 },
                { start: 1800, end: 3000, density: 0.10792158431686341 },
                { start: 3000, density: 0.03130626125225043 },
              ],
              percentiles: { p75: 1437 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664033596640337 },
                { start: 100, end: 300, density: 0.024997500249975 },
                { start: 300, density: 0.0085991400859914 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8837964814074373 },
                { start: 2500, end: 4000, density: 0.09131347461015593 },
                { start: 4000, density: 0.024890043982406938 },
              ],
              percentiles: { p75: 1906 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9434943494349436,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04360436043604361,
                },
                { start: "0.25", density: 0.012901290129012907 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6286371362863711 },
                { start: 200, end: 500, density: 0.2990700929907008 },
                { start: 500, density: 0.07229277072292818 },
              ],
              percentiles: { p75: 260 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1437,
        lcp: 1906,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107403645,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6061787642471501 },
                { start: 1800, end: 3000, density: 0.259348130373925 },
                { start: 3000, density: 0.1344731053789249 },
              ],
              percentiles: { p75: 2350 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9697 },
                { start: 100, end: 300, density: 0.0209 },
                { start: 300, density: 0.009399999999999986 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6990999999999996 },
                { start: 2500, end: 4000, density: 0.19519999999999987 },
                { start: 4000, density: 0.1057000000000006 },
              ],
              percentiles: { p75: 2781 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9186000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05440000000000001,
                },
                { start: "0.25", density: 0.026999999999999993 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6319263852770559 },
                { start: 200, end: 500, density: 0.29855971194238873 },
                { start: 500, density: 0.06951390278055537 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.445510897820436 },
                { start: 800, end: 1800, density: 0.45370925814837043 },
                { start: 1800, density: 0.10077984403119353 },
              ],
              percentiles: { p75: 1292 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2350,
        lcp: 2781,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654107404546,
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
                { start: 0, end: 1800, density: 0.9295140971805641 },
                { start: 1800, end: 3000, density: 0.05068986202759449 },
                { start: 3000, density: 0.019796040791841465 },
              ],
              percentiles: { p75: 1148 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.946183855156547 },
                { start: 100, end: 300, density: 0.029308792637791337 },
                { start: 300, density: 0.02450735220566162 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9222311075569773 },
                { start: 2500, end: 4000, density: 0.06137544982007196 },
                { start: 4000, density: 0.016393442622950734 },
              ],
              percentiles: { p75: 1688 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8766 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09059999999999999,
                },
                { start: "0.25", density: 0.0328 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.529247075292471 },
                { start: 200, end: 500, density: 0.3203679632036798 },
                { start: 500, density: 0.15038496150384928 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8607582274682404 },
                { start: 800, end: 1800, density: 0.11593478043413023 },
                { start: 1800, density: 0.023306992097629296 },
              ],
              percentiles: { p75: 655 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1148,
        lcp: 1688,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654107405555,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659829914957478 },
                { start: 100, end: 300, density: 0.017808904452226115 },
                { start: 300, density: 0.01620810405202604 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9466499999999999 },
                { start: 2500, end: 4000, density: 0.04185 },
                { start: 4000, density: 0.011500000000000035 },
              ],
              percentiles: { p75: 1506 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8463 },
                { start: "0.10", end: "0.25", density: 0.1114 },
                { start: "0.25", density: 0.042300000000000004 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7257725772577259 },
                { start: 200, end: 500, density: 0.19241924192419246 },
                { start: 500, density: 0.0818081808180817 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8605721144228845 },
                { start: 800, end: 1800, density: 0.12402480496099219 },
                { start: 1800, density: 0.015403080616123279 },
              ],
              percentiles: { p75: 669 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9436943694369436 },
                { start: 1800, end: 3000, density: 0.04260426042604258 },
                { start: 3000, density: 0.013701370137013714 },
              ],
              percentiles: { p75: 1107 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1107,
        lcp: 1506,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654107406431,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6891000000000006 },
                { start: 200, end: 500, density: 0.2209000000000002 },
                { start: 500, density: 0.08999999999999922 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7441999999999999 },
                { start: 800, end: 1800, density: 0.2219 },
                { start: 1800, density: 0.03390000000000013 },
              ],
              percentiles: { p75: 819 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8987202559488103 },
                { start: 1800, end: 3000, density: 0.07108578284343134 },
                { start: 3000, density: 0.03019396120775828 },
              ],
              percentiles: { p75: 1269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663 },
                { start: 100, end: 300, density: 0.0193 },
                { start: 300, density: 0.014399999999999955 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8947105289471052 },
                { start: 2500, end: 4000, density: 0.07679232076792324 },
                { start: 4000, density: 0.028497150284971535 },
              ],
              percentiles: { p75: 1782 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7861213878612139,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17148285171482855,
                },
                { start: "0.25", density: 0.04239576042395759 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1269,
        lcp: 1782,
        cls: "0.08",
        fid: 11,
      },
      timestamp: 1654107407382,
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
                { start: 0, end: 200, density: 0.6026602660266023 },
                { start: 200, end: 500, density: 0.2748274827482747 },
                { start: 500, density: 0.12251225122512314 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5217521752175217 },
                { start: 800, end: 1800, density: 0.38033803380338027 },
                { start: 1800, density: 0.09790979097909815 },
              ],
              percentiles: { p75: 1155 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7138000000000001 },
                { start: 1800, end: 3000, density: 0.18119999999999997 },
                { start: 3000, density: 0.10499999999999994 },
              ],
              percentiles: { p75: 1936 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659034096590341 },
                { start: 100, end: 300, density: 0.026597340265973404 },
                { start: 300, density: 0.0074992500749924956 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.771777177717771 },
                { start: 2500, end: 4000, density: 0.14101410141014087 },
                { start: 4000, density: 0.08720872087208802 },
              ],
              percentiles: { p75: 2413 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9272 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04069999999999999,
                },
                { start: "0.25", density: 0.032100000000000004 },
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
        fcp: 1936,
        lcp: 2413,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107408456,
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
                { start: "0.00", end: "0.10", density: 0.81991800819918 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12138786121387862,
                },
                { start: "0.25", density: 0.05869413058694131 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7351735173517351 },
                { start: 200, end: 500, density: 0.2011201120112011 },
                { start: 500, density: 0.06370637063706386 },
              ],
              percentiles: { p75: 208 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3500599760095959 },
                { start: 800, end: 1800, density: 0.43582566973210685 },
                { start: 1800, density: 0.21411435425829728 },
              ],
              percentiles: { p75: 1667 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6183618361836184 },
                { start: 1800, end: 3000, density: 0.21562156215621558 },
                { start: 3000, density: 0.16601660166016605 },
              ],
              percentiles: { p75: 2445 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9519903980796159 },
                { start: 100, end: 300, density: 0.029205841168233646 },
                { start: 300, density: 0.018803760752150435 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6830633873225346 },
                { start: 2500, end: 4000, density: 0.18256348730253927 },
                { start: 4000, density: 0.13437312537492616 },
              ],
              percentiles: { p75: 2934 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2445,
        lcp: 2934,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654107409298,
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
                { start: 0, end: 2500, density: 0.7219831899139484 },
                { start: 2500, end: 4000, density: 0.15584350610366232 },
                { start: 4000, density: 0.12217330398238926 },
              ],
              percentiles: { p75: 2688 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8729745949189839,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07371474294858972,
                },
                { start: "0.25", density: 0.05331066213242647 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5551665499649888 },
                { start: 200, end: 500, density: 0.30569170751225333 },
                { start: 500, density: 0.13914174252275777 },
              ],
              percentiles: { p75: 332 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47613806903451705 },
                { start: 800, end: 1800, density: 0.4122061030515256 },
                { start: 1800, density: 0.11165582791395733 },
              ],
              percentiles: { p75: 1217 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6440932279683892 },
                { start: 1800, end: 3000, density: 0.21386415924777377 },
                { start: 3000, density: 0.14204261278383715 },
              ],
              percentiles: { p75: 2222 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.0251025102510251 },
                { start: 300, density: 0.01400140014001404 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2222,
        lcp: 2688,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107410140,
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
                { start: 0, end: 100, density: 0.9127825565113025 },
                { start: 100, end: 300, density: 0.039007801560312076 },
                { start: 300, density: 0.04820964192838544 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6871374274854962 },
                { start: 2500, end: 4000, density: 0.1735347069413881 },
                { start: 4000, density: 0.13932786557311572 },
              ],
              percentiles: { p75: 2907 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8136 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09959999999999998,
                },
                { start: "0.25", density: 0.08680000000000003 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6253250650130021 },
                { start: 200, end: 500, density: 0.236647329465893 },
                { start: 500, density: 0.13802760552110493 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4129825965193032 },
                { start: 800, end: 1800, density: 0.4278855771154223 },
                { start: 1800, density: 0.15913182636527448 },
              ],
              percentiles: { p75: 1453 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6323735252949404 },
                { start: 1800, end: 3000, density: 0.21955608878224342 },
                { start: 3000, density: 0.14807038592281616 },
              ],
              percentiles: { p75: 2322 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2322,
        lcp: 2907,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1654107411066,
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
                { start: 0, end: 200, density: 0.528859857482185 },
                { start: 200, end: 500, density: 0.39073634204275504 },
                { start: 500, density: 0.08040380047506006 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.699264439889063 },
                { start: 800, end: 1800, density: 0.24080549861328826 },
                { start: 1800, density: 0.059930061497648825 },
              ],
              percentiles: { p75: 887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8238279362010634 },
                { start: 1800, end: 3000, density: 0.1056065732237796 },
                { start: 3000, density: 0.07056549057515692 },
              ],
              percentiles: { p75: 1511 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9600481347773766 },
                { start: 100, end: 300, density: 0.02478941034897714 },
                { start: 300, density: 0.015162454873646208 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8598170217888528 },
                { start: 2500, end: 4000, density: 0.09323462140363549 },
                { start: 4000, density: 0.046948356807511714 },
              ],
              percentiles: { p75: 1879 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.978682634730539,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009221556886227547,
                },
                { start: "0.25", density: 0.012095808383233531 },
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
        fcp: 1511,
        lcp: 1879,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107411902,
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
                { start: 0, end: 200, density: 0.4181372549019608 },
                { start: 200, end: 500, density: 0.4459558823529412 },
                { start: 500, density: 0.13590686274509794 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.638771973260708 },
                { start: 800, end: 1800, density: 0.3308987373112156 },
                { start: 1800, density: 0.03032928942807631 },
              ],
              percentiles: { p75: 936 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8894141062321186 },
                { start: 1800, end: 3000, density: 0.08807065555417339 },
                { start: 3000, density: 0.02251523821370805 },
              ],
              percentiles: { p75: 1389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554400297066468 },
                { start: 100, end: 300, density: 0.030449313033791312 },
                { start: 300, density: 0.014110657259561874 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9057118077066038 },
                { start: 2500, end: 4000, density: 0.07533143352744391 },
                { start: 4000, density: 0.018956758765952254 },
              ],
              percentiles: { p75: 1790 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426633785450061,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03970406905055488,
                },
                { start: "0.25", density: 0.017632552404438957 },
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
        fcp: 1389,
        lcp: 1790,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654107413384,
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
                { start: 0, end: 100, density: 0.9366073175503815 },
                { start: 100, end: 300, density: 0.03932694189004109 },
                { start: 300, density: 0.024065740559577387 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7203109815354709 },
                { start: 2500, end: 4000, density: 0.20310981535471315 },
                { start: 4000, density: 0.07657920310981597 },
              ],
              percentiles: { p75: 2716 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525820694951047,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02226914954885775,
                },
                { start: "0.25", density: 0.025148780956037613 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109215017064851 },
                { start: 200, end: 500, density: 0.2772535635414577 },
                { start: 500, density: 0.11182493475205724 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40570522979397766 },
                { start: 800, end: 1800, density: 0.47959587955625965 },
                { start: 1800, density: 0.11469889064976273 },
              ],
              percentiles: { p75: 1407 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6177969423755386 },
                { start: 1800, end: 3000, density: 0.25597804782438244 },
                { start: 3000, density: 0.12622500980007906 },
              ],
              percentiles: { p75: 2435 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2435,
        lcp: 2716,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107414830,
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
                { start: 0, end: 2500, density: 0.6508344923504866 },
                { start: 2500, end: 4000, density: 0.2383171070931849 },
                { start: 4000, density: 0.11084840055632846 },
              ],
              percentiles: { p75: 2927 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9345575037967693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028165124948225873,
                },
                { start: "0.25", density: 0.03727737125500482 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6057142857142859 },
                { start: 200, end: 500, density: 0.3504285714285715 },
                { start: 500, density: 0.043857142857142525 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.289139829917747 },
                { start: 800, end: 1800, density: 0.5385473302662762 },
                { start: 1800, density: 0.17231283981597692 },
              ],
              percentiles: { p75: 1570 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5058675607711648 },
                { start: 1800, end: 3000, density: 0.305671975412126 },
                { start: 3000, density: 0.18846046381670914 },
              ],
              percentiles: { p75: 2645 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973426777631771 },
                { start: 100, end: 300, density: 0.01927288655278143 },
                { start: 300, density: 0.0073003358154475236 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2645,
        lcp: 2927,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107416179,
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
                { start: 0, end: 200, density: 0.47985476692433826 },
                { start: 200, end: 500, density: 0.38955258842820334 },
                { start: 500, density: 0.1305926446474584 },
              ],
              percentiles: { p75: 332 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7914197677174685 },
                { start: 800, end: 1800, density: 0.16911590424271147 },
                { start: 1800, density: 0.039464328039820105 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8596968979398525 },
                { start: 1800, end: 3000, density: 0.09696897939853176 },
                { start: 3000, density: 0.043334122661615654 },
              ],
              percentiles: { p75: 1417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347930126824598 },
                { start: 100, end: 300, density: 0.03673127542474277 },
                { start: 300, density: 0.02847571189279737 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.891919191919192 },
                { start: 2500, end: 4000, density: 0.07445038621509208 },
                { start: 4000, density: 0.03363042186571607 },
              ],
              percentiles: { p75: 1752 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9424553940682973,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030721966205837174,
                },
                { start: "0.25", density: 0.026822639725865544 },
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
        fcp: 1417,
        lcp: 1752,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107417629,
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
                { start: 0, end: 100, density: 0.958349303692347 },
                { start: 100, end: 300, density: 0.03321834674843491 },
                { start: 300, density: 0.008432349559218087 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7738849546527514 },
                { start: 2500, end: 4000, density: 0.1407628276804571 },
                { start: 4000, density: 0.08535221766679152 },
              ],
              percentiles: { p75: 2391 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9581280788177341,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014285714285714284,
                },
                { start: "0.25", density: 0.027586206896551724 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5338596274824223 },
                { start: 200, end: 500, density: 0.32749475761687413 },
                { start: 500, density: 0.13864561490070354 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5025293028994446 },
                { start: 800, end: 1800, density: 0.38988278840222074 },
                { start: 1800, density: 0.10758790869833461 },
              ],
              percentiles: { p75: 1194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6908662199056836 },
                { start: 1800, end: 3000, density: 0.19347232563911637 },
                { start: 3000, density: 0.11566145445519994 },
              ],
              percentiles: { p75: 2017 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2017,
        lcp: 2391,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107419094,
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
                  density: 0.9623488773747841,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017040875071963155,
                },
                { start: "0.25", density: 0.020610247553252737 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5848460007026585 },
                { start: 200, end: 500, density: 0.2980442674786275 },
                { start: 500, density: 0.11710973181871406 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4315386400556975 },
                { start: 800, end: 1800, density: 0.37537711766071025 },
                { start: 1800, density: 0.19308424228359233 },
              ],
              percentiles: { p75: 1592 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6062955676426337 },
                { start: 1800, end: 3000, density: 0.24395324615206565 },
                { start: 3000, density: 0.14975118620530062 },
              ],
              percentiles: { p75: 2433 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.944768479942864 },
                { start: 100, end: 300, density: 0.03178193072253303 },
                { start: 300, density: 0.023449589334603137 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7189595375722545 },
                { start: 2500, end: 4000, density: 0.2018497109826589 },
                { start: 4000, density: 0.07919075144508672 },
              ],
              percentiles: { p75: 2663 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2433,
        lcp: 2663,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107420727,
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
                { start: 0, end: 1800, density: 0.7825732899022803 },
                { start: 1800, end: 3000, density: 0.1665891112145184 },
                { start: 3000, density: 0.05083759888320143 },
              ],
              percentiles: { p75: 1713 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9493168282144105 },
                { start: 100, end: 300, density: 0.028611467943477745 },
                { start: 300, density: 0.022071703842111694 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.833158508158508 },
                { start: 2500, end: 4000, density: 0.1241841491841492 },
                { start: 4000, density: 0.04265734265734283 },
              ],
              percentiles: { p75: 2145 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8803160585637926,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09179642110155704,
                },
                { start: "0.25", density: 0.027887520334650254 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5498909174417269 },
                { start: 200, end: 500, density: 0.3221954300149271 },
                { start: 500, density: 0.12791365254334583 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6030144927536232 },
                { start: 800, end: 1800, density: 0.3561739130434782 },
                { start: 1800, density: 0.04081159420289853 },
              ],
              percentiles: { p75: 991 },
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
        lcp: 2145,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107422589,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9442107593535533 },
                { start: 100, end: 300, density: 0.03619659065751605 },
                { start: 300, density: 0.019592649988930587 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8649838882921587 },
                { start: 2500, end: 4000, density: 0.09495166487647688 },
                { start: 4000, density: 0.04006444683136446 },
              ],
              percentiles: { p75: 1972 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9045478865703586,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08346709470304976,
                },
                { start: "0.25", density: 0.01198501872659177 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5236589620584386 },
                { start: 200, end: 500, density: 0.36077191452245966 },
                { start: 500, density: 0.11556912341910174 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6506280604641261 },
                { start: 800, end: 1800, density: 0.3025335320417289 },
                { start: 1800, density: 0.046838407494145036 },
              ],
              percentiles: { p75: 942 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8082441113490365 },
                { start: 1800, end: 3000, density: 0.1366167023554604 },
                { start: 3000, density: 0.055139186295503254 },
              ],
              percentiles: { p75: 1631 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1631,
        lcp: 1972,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107423977,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3193000000000001 },
                { start: 800, end: 1800, density: 0.47600000000000003 },
                { start: 1800, density: 0.2046999999999999 },
              ],
              percentiles: { p75: 1703 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5335999999999992 },
                { start: 1800, end: 3000, density: 0.2895999999999996 },
                { start: 3000, density: 0.1768000000000013 },
              ],
              percentiles: { p75: 2600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748 },
                { start: 100, end: 300, density: 0.018899999999999997 },
                { start: 300, density: 0.006300000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6372999999999993 },
                { start: 2500, end: 4000, density: 0.21369999999999975 },
                { start: 4000, density: 0.14900000000000085 },
              ],
              percentiles: { p75: 3122 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9009099090090991,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06319368063193681,
                },
                { start: "0.25", density: 0.035896410358964154 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6313368663133686 },
                { start: 200, end: 500, density: 0.300969903009699 },
                { start: 500, density: 0.06769323067693239 },
              ],
              percentiles: { p75: 266 },
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
        lcp: 3122,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1654107425717,
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
                  density: 0.9387706290361157,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04831380052618991,
                },
                { start: "0.25", density: 0.012915570437694332 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5664020850610112 },
                { start: 200, end: 500, density: 0.34984006634285014 },
                { start: 500, density: 0.0837578485961387 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.625045197059178 },
                { start: 800, end: 1800, density: 0.3319272026033506 },
                { start: 1800, density: 0.043027600337471425 },
              ],
              percentiles: { p75: 986 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.852502406159769 },
                { start: 1800, end: 3000, density: 0.11345043310875837 },
                { start: 3000, density: 0.034047160731472514 },
              ],
              percentiles: { p75: 1456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585031493145609 },
                { start: 100, end: 300, density: 0.030875632950475487 },
                { start: 300, density: 0.010621217734963568 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8883221315410467 },
                { start: 2500, end: 4000, density: 0.08803408545367257 },
                { start: 4000, density: 0.02364378300528077 },
              ],
              percentiles: { p75: 1881 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1456,
        lcp: 1881,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654107426711,
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
                { start: 0, end: 1800, density: 0.8781255788108909 },
                { start: 1800, end: 3000, density: 0.09260974254491572 },
                { start: 3000, density: 0.029264678644193378 },
              ],
              percentiles: { p75: 1401 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9454377880184334 },
                { start: 100, end: 300, density: 0.030230414746543786 },
                { start: 300, density: 0.024331797235022903 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9047353760445682 },
                { start: 2500, end: 4000, density: 0.07186629526462392 },
                { start: 4000, density: 0.02339832869080785 },
              ],
              percentiles: { p75: 1830 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.959520784171356,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024868397168270103,
                },
                { start: "0.25", density: 0.015610818660373938 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5034234234234239 },
                { start: 200, end: 500, density: 0.35369369369369397 },
                { start: 500, density: 0.1428828828828821 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7016595189259743 },
                { start: 800, end: 1800, density: 0.26384486294984144 },
                { start: 1800, density: 0.03449561812418433 },
              ],
              percentiles: { p75: 891 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1401,
        lcp: 1830,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654107428226,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6657323909334631 },
                { start: 200, end: 500, density: 0.2808920302217888 },
                { start: 500, density: 0.05337557884474792 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3842269776388556 },
                { start: 800, end: 1800, density: 0.4776388554941093 },
                { start: 1800, density: 0.13813416686703528 },
              ],
              percentiles: { p75: 1380 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5847642079806523 },
                { start: 1800, end: 3000, density: 0.2777509068923818 },
                { start: 3000, density: 0.1374848851269659 },
              ],
              percentiles: { p75: 2327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9735787628349613 },
                { start: 100, end: 300, density: 0.02116203355872778 },
                { start: 300, density: 0.005259203606311044 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7321103146640746 },
                { start: 2500, end: 4000, density: 0.16097679504312964 },
                { start: 4000, density: 0.10691289029279569 },
              ],
              percentiles: { p75: 2640 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9730672117350007,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012023566189731874,
                },
                { start: "0.25", density: 0.014909222075267518 },
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
        fcp: 2327,
        lcp: 2640,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107429732,
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
                  density: 0.9324429460580911,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019968879668049788,
                },
                { start: "0.25", density: 0.047588174273858946 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5311147186147197 },
                { start: 200, end: 500, density: 0.3791937229437237 },
                { start: 500, density: 0.08969155844155662 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27437759336099504 },
                { start: 800, end: 1800, density: 0.5519968879668034 },
                { start: 1800, density: 0.1736255186722016 },
              ],
              percentiles: { p75: 1567 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4909856560073687 },
                { start: 1800, end: 3000, density: 0.3272799052506904 },
                { start: 3000, density: 0.1817344387419409 },
              ],
              percentiles: { p75: 2667 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9579426365140651 },
                { start: 100, end: 300, density: 0.03212906784335356 },
                { start: 300, density: 0.00992829564258136 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6383006707878465 },
                { start: 2500, end: 4000, density: 0.24845455741154787 },
                { start: 4000, density: 0.11324477180060558 },
              ],
              percentiles: { p75: 2961 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2667,
        lcp: 2961,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107431387,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46348962336664085 },
                { start: 800, end: 1800, density: 0.40924563522565055 },
                { start: 1800, density: 0.12726474140770852 },
              ],
              percentiles: { p75: 1323 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7011381046180781 },
                { start: 1800, end: 3000, density: 0.1884438608010505 },
                { start: 3000, density: 0.1104180345808714 },
              ],
              percentiles: { p75: 2040 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561040991846309 },
                { start: 100, end: 300, density: 0.03518373729476153 },
                { start: 300, density: 0.008712163520607578 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7670610143498736 },
                { start: 2500, end: 4000, density: 0.1413626903275276 },
                { start: 4000, density: 0.09157629532259885 },
              ],
              percentiles: { p75: 2426 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8483458892892237,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10284965607599084,
                },
                { start: "0.25", density: 0.04880445463478547 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6506382042253527 },
                { start: 200, end: 500, density: 0.26606514084507066 },
                { start: 500, density: 0.08329665492957676 },
              ],
              percentiles: { p75: 246 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2040,
        lcp: 2426,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654107433060,
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
                { start: 0, end: 100, density: 0.9585958595859584 },
                { start: 100, end: 300, density: 0.019301930193019297 },
                { start: 300, density: 0.022102210221022236 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8591359135913593 },
                { start: 2500, end: 4000, density: 0.09595959595959604 },
                { start: 4000, density: 0.044904490449044675 },
              ],
              percentiles: { p75: 1937 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9273072692730727,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05839416058394162,
                },
                { start: "0.25", density: 0.014298570142985693 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6172382761723828 },
                { start: 200, end: 500, density: 0.2958704129587042 },
                { start: 500, density: 0.08689131086891291 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7025702570257021 },
                { start: 800, end: 1800, density: 0.232223222322232 },
                { start: 1800, density: 0.06520652065206586 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8281 },
                { start: 1800, end: 3000, density: 0.11319999999999997 },
                { start: 3000, density: 0.05870000000000016 },
              ],
              percentiles: { p75: 1523 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1523,
        lcp: 1937,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654107434706,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656 },
                { start: 100, end: 300, density: 0.0267 },
                { start: 300, density: 0.0077 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5779655931186244 },
                { start: 2500, end: 4000, density: 0.19768953790758179 },
                { start: 4000, density: 0.22434486897379385 },
              ],
              percentiles: { p75: 3789 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.734026597340266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13438656134386562,
                },
                { start: "0.25", density: 0.13158684131586848 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5936593659365936 },
                { start: 200, end: 500, density: 0.33833383338333844 },
                { start: 500, density: 0.06800680068006795 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4339433943394337 },
                { start: 800, end: 1800, density: 0.3310331033103308 },
                { start: 1800, density: 0.23502350235023553 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5129512951295133 },
                { start: 1800, end: 3000, density: 0.2034203420342035 },
                { start: 3000, density: 0.2836283628362832 },
              ],
              percentiles: { p75: 3376 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3376,
        lcp: 3789,
        cls: "0.12",
        fid: 14,
      },
      timestamp: 1654107435756,
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
                  density: 0.9477488330070772,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03147116398132811,
                },
                { start: "0.25", density: 0.020780003011594623 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4728033472803347 },
                { start: 200, end: 500, density: 0.3486750348675035 },
                { start: 500, density: 0.1785216178521618 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2591799265605874 },
                { start: 800, end: 1800, density: 0.3786719706242349 },
                { start: 1800, density: 0.3621481028151777 },
              ],
              percentiles: { p75: 2157 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4391143911439111 },
                { start: 1800, end: 3000, density: 0.31057810578105755 },
                { start: 3000, density: 0.2503075030750314 },
              ],
              percentiles: { p75: 3006 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9140172278778386 },
                { start: 100, end: 300, density: 0.047768206734534066 },
                { start: 300, density: 0.03821456538762736 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5643328727161048 },
                { start: 2500, end: 4000, density: 0.27552587133425366 },
                { start: 4000, density: 0.16014125594964154 },
              ],
              percentiles: { p75: 3347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3006,
        lcp: 3347,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1654107437383,
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
                  density: 0.933993399339934,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0411041104110411,
                },
                { start: "0.25", density: 0.02490249024902491 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6517 },
                { start: 200, end: 500, density: 0.29189999999999994 },
                { start: 500, density: 0.05640000000000011 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41810905452726366 },
                { start: 800, end: 1800, density: 0.5052526263131568 },
                { start: 1800, density: 0.07663831915957951 },
              ],
              percentiles: { p75: 1135 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.679064187162568 },
                { start: 1800, end: 3000, density: 0.23105378924215172 },
                { start: 3000, density: 0.08988202359528025 },
              ],
              percentiles: { p75: 1985 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9850999999999999 },
                { start: 100, end: 300, density: 0.006599999999999999 },
                { start: 300, density: 0.0083 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7662266226622666 },
                { start: 2500, end: 4000, density: 0.1435643564356436 },
                { start: 4000, density: 0.09020902090208975 },
              ],
              percentiles: { p75: 2453 },
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
      timestamp: 1654107438993,
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
                { start: 0, end: 800, density: 0.6818594104308392 },
                { start: 800, end: 1800, density: 0.28820861678004533 },
                { start: 1800, density: 0.0299319727891156 },
              ],
              percentiles: { p75: 875 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9022480706856058 },
                { start: 1800, end: 3000, density: 0.07907392909070572 },
                { start: 3000, density: 0.018678000223688436 },
              ],
              percentiles: { p75: 1340 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9767363071710898 },
                { start: 100, end: 300, density: 0.016374929418407676 },
                { start: 300, density: 0.006888763410502543 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9262881412764055 },
                { start: 2500, end: 4000, density: 0.06052308036213255 },
                { start: 4000, density: 0.013188778361462011 },
              ],
              percentiles: { p75: 1670 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9109971001561454,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07651126477805043,
                },
                { start: "0.25", density: 0.012491635065804148 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6471047640299008 },
                { start: 200, end: 500, density: 0.2905277250920451 },
                { start: 500, density: 0.06236751087805414 },
              ],
              percentiles: { p75: 247 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1340,
        lcp: 1670,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654107439973,
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
                { start: 0, end: 1800, density: 0.714114234270281 },
                { start: 1800, end: 3000, density: 0.1789536861058317 },
                { start: 3000, density: 0.1069320796238873 },
              ],
              percentiles: { p75: 1988 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595878763629089 },
                { start: 100, end: 300, density: 0.032209662898869666 },
                { start: 300, density: 0.008202460738221444 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7707229277072286 },
                { start: 2500, end: 4000, density: 0.13748625137486237 },
                { start: 4000, density: 0.09179082091790891 },
              ],
              percentiles: { p75: 2407 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8228 },
                { start: "0.10", end: "0.25", density: 0.1178 },
                { start: "0.25", density: 0.05940000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.673867386738674 },
                { start: 200, end: 500, density: 0.24682468246824685 },
                { start: 500, density: 0.07930793079307925 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4752524747525247 },
                { start: 800, end: 1800, density: 0.40265973402659716 },
                { start: 1800, density: 0.12208779122087808 },
              ],
              percentiles: { p75: 1299 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 1988,
        lcp: 2407,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1654107441547,
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
                { start: 0, end: 200, density: 0.5866621908917987 },
                { start: 200, end: 500, density: 0.32091305807317927 },
                { start: 500, density: 0.09242475103502198 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6892693297527134 },
                { start: 800, end: 1800, density: 0.24146805415687586 },
                { start: 1800, density: 0.0692626160904107 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220158854457993 },
                { start: 1800, end: 3000, density: 0.11757467278219039 },
                { start: 3000, density: 0.060409441772010325 },
              ],
              percentiles: { p75: 1541 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543937708565071 },
                { start: 100, end: 300, density: 0.021134593993325915 },
                { start: 300, density: 0.024471635150167006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8607545484987156 },
                { start: 2500, end: 4000, density: 0.09549056814376594 },
                { start: 4000, density: 0.04375488335751838 },
              ],
              percentiles: { p75: 1928 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9604356523671927,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026228050677928424,
                },
                { start: "0.25", density: 0.013336296954878852 },
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
        fcp: 1541,
        lcp: 1928,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654107442629,
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
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.487993626948901 },
                { start: 1800, end: 3000, density: 0.25048366905656044 },
                { start: 3000, density: 0.26152270399453864 },
              ],
              percentiles: { p75: 3101 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9020466106707679 },
                { start: 100, end: 300, density: 0.0637643440198746 },
                { start: 300, density: 0.03418904530935753 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5428343586238316 },
                { start: 2500, end: 4000, density: 0.2547277284119386 },
                { start: 4000, density: 0.20243791296422986 },
              ],
              percentiles: { p75: 3624 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8594882246376813,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09692028985507246,
                },
                { start: "0.25", density: 0.04359148550724638 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4357840856212189 },
                { start: 200, end: 500, density: 0.3320148906468122 },
                { start: 500, density: 0.23220102373196871 },
              ],
              percentiles: { p75: 470 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39408644622503064 },
                { start: 800, end: 1800, density: 0.4048075837941538 },
                { start: 1800, density: 0.2011059699808154 },
              ],
              percentiles: { p75: 1628 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3101,
        lcp: 3624,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1654107444370,
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
                { start: 0, end: 1800, density: 0.7180563887222554 },
                { start: 1800, end: 3000, density: 0.18576284743051377 },
                { start: 3000, density: 0.0961807638472309 },
              ],
              percentiles: { p75: 2015 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643928785757152 },
                { start: 100, end: 300, density: 0.023304660932186437 },
                { start: 300, density: 0.012302460492098422 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7466246624662466 },
                { start: 2500, end: 4000, density: 0.1674667466746675 },
                { start: 4000, density: 0.08590859085908593 },
              ],
              percentiles: { p75: 2632 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7786778677867787,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1615161516151615,
                },
                { start: "0.25", density: 0.05980598059805978 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7677767776777675 },
                { start: 200, end: 500, density: 0.1609160916091608 },
                { start: 500, density: 0.07130713071307165 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5210478952104789 },
                { start: 800, end: 1800, density: 0.3916608339166083 },
                { start: 1800, density: 0.08729127087291286 },
              ],
              percentiles: { p75: 1240 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2015, lcp: 2632, cls: "0.07", fid: 9 },
      timestamp: 1654107446005,
    },
  ],
};
