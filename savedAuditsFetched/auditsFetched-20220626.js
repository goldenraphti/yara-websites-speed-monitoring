export const audit35 = {
  date: "2022-06-26T21:54:56.857Z",
  dateParsedLocale: "26/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "26/06/2022-legacy-audit",
  audits: [
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
                  density: 0.9657162253903598,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01844308667119258,
                },
                { start: "0.25", density: 0.01584068793844761 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5807267709291635 },
                { start: 200, end: 500, density: 0.3242870285188596 },
                { start: 500, density: 0.09498620055197687 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6810158296321598 },
                { start: 800, end: 1800, density: 0.24609953308279217 },
                { start: 1800, density: 0.07288463728504788 },
              ],
              percentiles: { p75: 904 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8242858768635474 },
                { start: 1800, end: 3000, density: 0.11858427222032532 },
                { start: 3000, density: 0.05712985091612726 },
              ],
              percentiles: { p75: 1515 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453279164248405 },
                { start: 100, end: 300, density: 0.027161926871735343 },
                { start: 300, density: 0.027510156703424174 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8659963644626222 },
                { start: 2500, end: 4000, density: 0.09299022949329701 },
                { start: 4000, density: 0.041013406044080714 },
              ],
              percentiles: { p75: 1913 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1515,
        lcp: 1913,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280332365,
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
                { start: 0, end: 1800, density: 0.6995 },
                { start: 1800, end: 3000, density: 0.18749999999999997 },
                { start: 3000, density: 0.11300000000000002 },
              ],
              percentiles: { p75: 2031 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9631 },
                { start: 100, end: 300, density: 0.0223 },
                { start: 300, density: 0.014600000000000096 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7620000000000002 },
                { start: 2500, end: 4000, density: 0.1434000000000001 },
                { start: 4000, density: 0.09459999999999975 },
              ],
              percentiles: { p75: 2447 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8291 },
                { start: "0.10", end: "0.25", density: 0.1153 },
                { start: "0.25", density: 0.05560000000000008 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6446066180145956 },
                { start: 200, end: 500, density: 0.2680195941217634 },
                { start: 500, density: 0.08737378786364097 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46675332466753267 },
                { start: 800, end: 1800, density: 0.3954604539546041 },
                { start: 1800, density: 0.1377862213778633 },
              ],
              percentiles: { p75: 1364 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2031,
        lcp: 2447,
        cls: "0.03",
        fid: 14,
      },
      timestamp: 1656280333513,
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
                  density: 0.8199180081991801,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1274872512748725,
                },
                { start: "0.25", density: 0.05259474052594741 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7764 },
                { start: 200, end: 500, density: 0.17380000000000004 },
                { start: 500, density: 0.04980000000000003 },
              ],
              percentiles: { p75: 189 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.493398679735947 },
                { start: 800, end: 1800, density: 0.3829765953190637 },
                { start: 1800, density: 0.1236247249449893 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7416741674167419 },
                { start: 1800, end: 3000, density: 0.1475147514751476 },
                { start: 3000, density: 0.1108110811081105 },
              ],
              percentiles: { p75: 1843 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9732080375887234 },
                { start: 100, end: 300, density: 0.01839448165550335 },
                { start: 300, density: 0.008397480755773241 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7918583716743339 },
                { start: 2500, end: 4000, density: 0.12062412482496492 },
                { start: 4000, density: 0.0875175035007011 },
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
        fcp: 1843,
        lcp: 2257,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1656280333981,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42076816927322863 },
                { start: 200, end: 500, density: 0.32106715731370716 },
                { start: 500, density: 0.2581646734130642 },
              ],
              percentiles: { p75: 513 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4066921176734784 },
                { start: 800, end: 1800, density: 0.38165281832472475 },
                { start: 1800, density: 0.21165506400179687 },
              ],
              percentiles: { p75: 1660 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48982360922659357 },
                { start: 1800, end: 3000, density: 0.2395974672094071 },
                { start: 3000, density: 0.2705789235639993 },
              ],
              percentiles: { p75: 3184 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9027064862342511 },
                { start: 100, end: 300, density: 0.06451236584227721 },
                { start: 300, density: 0.032781147923471775 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5384441429217547 },
                { start: 2500, end: 4000, density: 0.25407055630936215 },
                { start: 4000, density: 0.20748530076888333 },
              ],
              percentiles: { p75: 3685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8569983136593591,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09994378864530633,
                },
                { start: "0.25", density: 0.04305789769533449 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3184,
        lcp: 3685,
        cls: "0.03",
        fid: 19,
      },
      timestamp: 1656280334347,
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
                { start: 0, end: 2500, density: 0.612478382333378 },
                { start: 2500, end: 4000, density: 0.25595317280830127 },
                { start: 4000, density: 0.13156844485832075 },
              ],
              percentiles: { p75: 3006 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9308895020365262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024701090526869005,
                },
                { start: "0.25", density: 0.044409407436604896 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5673116508851379 },
                { start: 200, end: 500, density: 0.37601207630026084 },
                { start: 500, density: 0.05667627281460125 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2774305093762469 },
                { start: 800, end: 1800, density: 0.5121691714323714 },
                { start: 1800, density: 0.21040031919138164 },
              ],
              percentiles: { p75: 1706 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4668176972281443 },
                { start: 1800, end: 3000, density: 0.336886993603411 },
                { start: 3000, density: 0.19629530916844462 },
              ],
              percentiles: { p75: 2740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797081306462821 },
                { start: 100, end: 300, density: 0.014454482279360666 },
                { start: 300, density: 0.005837387074357192 },
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
        fcp: 2740,
        lcp: 3006,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280334971,
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
                { start: 0, end: 100, density: 0.9759 },
                { start: 100, end: 300, density: 0.018900000000000004 },
                { start: 300, density: 0.005199999999999969 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.787680144115292 },
                { start: 2500, end: 4000, density: 0.1344575660528422 },
                { start: 4000, density: 0.0778622898318658 },
              ],
              percentiles: { p75: 2299 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8595859585958596,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10921092109210924,
                },
                { start: "0.25", density: 0.031203120312031225 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.791620837916208 },
                { start: 200, end: 500, density: 0.15808419158084183 },
                { start: 500, density: 0.05029497050295003 },
              ],
              percentiles: { p75: 177 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6135067533766885 },
                { start: 800, end: 1800, density: 0.29234617308654326 },
                { start: 1800, density: 0.09414707353676835 },
              ],
              percentiles: { p75: 1123 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7630815407703847 },
                { start: 1800, end: 3000, density: 0.14797398699349662 },
                { start: 3000, density: 0.08894447223611864 },
              ],
              percentiles: { p75: 1751 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1751,
        lcp: 2299,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1656280335437,
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
                  density: 0.9386697015680323,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033257460799190695,
                },
                { start: "0.25", density: 0.02807283763277695 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4874005305039783 },
                { start: 200, end: 500, density: 0.4161803713527847 },
                { start: 500, density: 0.09641909814323696 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2883909355614629 },
                { start: 800, end: 1800, density: 0.4666413470059492 },
                { start: 1800, density: 0.2449677174325879 },
              ],
              percentiles: { p75: 1803 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4645045965270677 },
                { start: 1800, end: 3000, density: 0.32609805924412605 },
                { start: 3000, density: 0.2093973442288063 },
              ],
              percentiles: { p75: 2809 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577926333726569 },
                { start: 100, end: 300, density: 0.034473718704941675 },
                { start: 300, density: 0.007733647922401352 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5991840897501263 },
                { start: 2500, end: 4000, density: 0.2530596634370214 },
                { start: 4000, density: 0.14775624681285232 },
              ],
              percentiles: { p75: 3139 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2809,
        lcp: 3139,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280335804,
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
                { start: 0, end: 200, density: 0.6086543033761296 },
                { start: 200, end: 500, density: 0.31169757489301014 },
                { start: 500, density: 0.07964812173086039 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.397223518432104 },
                { start: 800, end: 1800, density: 0.39454036397573433 },
                { start: 1800, density: 0.20823611759216165 },
              ],
              percentiles: { p75: 1636 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5070389210931024 },
                { start: 1800, end: 3000, density: 0.25115343664971 },
                { start: 3000, density: 0.24180764225718754 },
              ],
              percentiles: { p75: 3022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737905695039804 },
                { start: 100, end: 300, density: 0.02486221677893448 },
                { start: 300, density: 0.0013472137170851195 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6078338839075021 },
                { start: 2500, end: 4000, density: 0.19549315714959847 },
                { start: 4000, density: 0.19667295894289946 },
              ],
              percentiles: { p75: 3464 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9128654970760235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05871345029239766,
                },
                { start: "0.25", density: 0.02842105263157894 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3022,
        lcp: 3464,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280336237,
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
                  density: 0.8632273545290942,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07638472305538892,
                },
                { start: "0.25", density: 0.06038792241551685 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7649235076492349 },
                { start: 200, end: 500, density: 0.14558544145585436 },
                { start: 500, density: 0.08949105089491072 },
              ],
              percentiles: { p75: 182 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3871612838716131 },
                { start: 800, end: 1800, density: 0.44435556444355595 },
                { start: 1800, density: 0.1684831516848309 },
              ],
              percentiles: { p75: 1335 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08199180081991805 },
                { start: 1800, end: 3000, density: 0.4807519248075195 },
                { start: 3000, density: 0.43725627437256254 },
              ],
              percentiles: { p75: 4206 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.29582958295829564 },
                { start: 2500, end: 4000, density: 0.3684368436843683 },
                { start: 4000, density: 0.33573357335733617 },
              ],
              percentiles: { p75: 4957 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4206, lcp: 4957, cls: "0.04" },
      timestamp: 1656280336684,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6517696460707855 },
                { start: 200, end: 500, density: 0.26534693061387704 },
                { start: 500, density: 0.08288342331533761 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47564756475647524 },
                { start: 800, end: 1800, density: 0.35303530353035273 },
                { start: 1800, density: 0.17131713171317198 },
              ],
              percentiles: { p75: 1476 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6453290658131609 },
                { start: 1800, end: 3000, density: 0.2023404680936182 },
                { start: 3000, density: 0.15233046609322087 },
              ],
              percentiles: { p75: 2341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483258370814593 },
                { start: 100, end: 300, density: 0.035082458770614694 },
                { start: 300, density: 0.01659170414792599 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7307999999999992 },
                { start: 2500, end: 4000, density: 0.17849999999999985 },
                { start: 4000, density: 0.09070000000000096 },
              ],
              percentiles: { p75: 2617 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9402 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04130000000000001,
                },
                { start: "0.25", density: 0.018499999999999992 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2341,
        lcp: 2617,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280336947,
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
                  density: 0.8247175282471753,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12518748125187482,
                },
                { start: "0.25", density: 0.050094990500949906 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7373000000000001 },
                { start: 200, end: 500, density: 0.21370000000000006 },
                { start: 500, density: 0.04899999999999991 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.321635672865427 },
                { start: 800, end: 1800, density: 0.4619076184763049 },
                { start: 1800, density: 0.21645670865826802 },
              ],
              percentiles: { p75: 1786 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6329999999999998 },
                { start: 1800, end: 3000, density: 0.2100999999999999 },
                { start: 3000, density: 0.15690000000000037 },
              ],
              percentiles: { p75: 2543 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9785 },
                { start: 100, end: 300, density: 0.019 },
                { start: 300, density: 0.0025 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.726145229045809 },
                { start: 2500, end: 4000, density: 0.19503900780156033 },
                { start: 4000, density: 0.07881576315263061 },
              ],
              percentiles: { p75: 2757 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2543,
        lcp: 2757,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1656280337225,
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
                  density: 0.8852999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0723 },
                { start: "0.25", density: 0.04240000000000004 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6153 },
                { start: 200, end: 500, density: 0.3151 },
                { start: 500, density: 0.06959999999999995 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3706629337066287 },
                { start: 800, end: 1800, density: 0.4149585041495843 },
                { start: 1800, density: 0.21437856214378695 },
              ],
              percentiles: { p75: 1633 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057000000000008 },
                { start: 1800, end: 3000, density: 0.22580000000000028 },
                { start: 3000, density: 0.16849999999999898 },
              ],
              percentiles: { p75: 2353 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6928807119288071 },
                { start: 2500, end: 4000, density: 0.17693230676932295 },
                { start: 4000, density: 0.1301869813018699 },
              ],
              percentiles: { p75: 2687 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2353, lcp: 2687, cls: "0.04" },
      timestamp: 1656280337572,
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
                { start: "0.00", end: "0.10", density: 0.9439 },
                { start: "0.10", end: "0.25", density: 0.0427 },
                { start: "0.25", density: 0.0134 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9075277416774967 },
                { start: 200, end: 500, density: 0.07367789663101068 },
                { start: 500, density: 0.018794361691492567 },
              ],
              percentiles: { p75: 100 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6111388861113889 },
                { start: 800, end: 1800, density: 0.2918708129187082 },
                { start: 1800, density: 0.09699030096990298 },
              ],
              percentiles: { p75: 1121 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7636999999999998 },
                { start: 1800, end: 3000, density: 0.1621 },
                { start: 3000, density: 0.0742 },
              ],
              percentiles: { p75: 1749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9879012098790121 },
                { start: 100, end: 300, density: 0.012098790120987902 },
                { start: 300 },
              ],
              percentiles: { p75: 7 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8115811581158117 },
                { start: 2500, end: 4000, density: 0.11751175117511752 },
                { start: 4000, density: 0.07090709070907089 },
              ],
              percentiles: { p75: 2185 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1749, lcp: 2185, cls: "0.02", fid: 7 },
      timestamp: 1656280337820,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.tz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5639499999999987 },
                { start: 2500, end: 4000, density: 0.22064999999999949 },
                { start: 4000, density: 0.21540000000000165 },
              ],
              percentiles: { p75: 3685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8097809780978098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14201420142014204,
                },
                { start: "0.25", density: 0.048204820482048216 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6446999999999998 },
                { start: 200, end: 500, density: 0.23089999999999994 },
                { start: 500, density: 0.12440000000000034 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3950604939506046 },
                { start: 800, end: 1800, density: 0.3404659534046591 },
                { start: 1800, density: 0.2644735526447362 },
              ],
              percentiles: { p75: 1866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5315999999999996 },
                { start: 1800, end: 3000, density: 0.19819999999999996 },
                { start: 3000, density: 0.27020000000000044 },
              ],
              percentiles: { p75: 3142 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9221922192219222 },
                { start: 100, end: 300, density: 0.0625062506250625 },
                { start: 300, density: 0.015301530153015292 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: {
        fcp: 3142,
        lcp: 3685,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1656280338106,
    },
    {
      url: "https://www.yara.co.zm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.zm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36913691369136775 },
                { start: 800, end: 1800, density: 0.33673367336733545 },
                { start: 1800, density: 0.29412941294129674 },
              ],
              percentiles: { p75: 2049 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46570685862827393 },
                { start: 1800, end: 3000, density: 0.20385922815436897 },
                { start: 3000, density: 0.33043391321735716 },
              ],
              percentiles: { p75: 3484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9269073092690729 },
                { start: 100, end: 300, density: 0.0281971802819718 },
                { start: 300, density: 0.044895510448955116 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5314500000000014 },
                { start: 2500, end: 4000, density: 0.2302500000000006 },
                { start: 4000, density: 0.2382999999999979 },
              ],
              percentiles: { p75: 4065 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8928 },
                { start: "0.10", end: "0.25", density: 0.067 },
                { start: "0.25", density: 0.04019999999999997 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4633000000000003 },
                { start: 200, end: 500, density: 0.3298000000000002 },
                { start: 500, density: 0.2068999999999994 },
              ],
              percentiles: { p75: 380 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: {
        fcp: 3484,
        lcp: 4065,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280338363,
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
                { start: "0.00", end: "0.10", density: 0.9127 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057100000000000005,
                },
                { start: "0.25", density: 0.03020000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5904590459045901 },
                { start: 200, end: 500, density: 0.326232623262326 },
                { start: 500, density: 0.083308330833084 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3001699830016993 },
                { start: 800, end: 1800, density: 0.47245275472452664 },
                { start: 1800, density: 0.22737726227377414 },
              ],
              percentiles: { p75: 1762 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49485154453663804 },
                { start: 1800, end: 3000, density: 0.3128061581525535 },
                { start: 3000, density: 0.1923422973108083 },
              ],
              percentiles: { p75: 2722 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663101069679096 },
                { start: 100, end: 300, density: 0.026891932420273924 },
                { start: 300, density: 0.00679796061181644 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6010297940411895 },
                { start: 2500, end: 4000, density: 0.2407018596280735 },
                { start: 4000, density: 0.15826834633073691 },
              ],
              percentiles: { p75: 3222 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2722,
        lcp: 3222,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1656280338613,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9669966996699669 },
                { start: 100, end: 300, density: 0.024002400240024 },
                { start: 300, density: 0.009000900090009005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8938893889388938 },
                { start: 2500, end: 4000, density: 0.0757075707570757 },
                { start: 4000, density: 0.03040304030403038 },
              ],
              percentiles: { p75: 1797 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9638963896389638,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0265026502650265,
                },
                { start: "0.25", density: 0.009600960096009603 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.608239176082392 },
                { start: 200, end: 500, density: 0.3323667633236677 },
                { start: 500, density: 0.059394060593940354 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7618523704740949 },
                { start: 800, end: 1800, density: 0.20354070814162836 },
                { start: 1800, density: 0.034606921384276706 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.864013598640136 },
                { start: 1800, end: 3000, density: 0.09289071092890712 },
                { start: 3000, density: 0.0430956904309568 },
              ],
              percentiles: { p75: 1419 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1419,
        lcp: 1797,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280338849,
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
                { start: 0, end: 1800, density: 0.5117535260578181 },
                { start: 1800, end: 3000, density: 0.1979593878163453 },
                { start: 3000, density: 0.29028708612583665 },
              ],
              percentiles: { p75: 3327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8971897189718971 },
                { start: 100, end: 300, density: 0.0924092409240924 },
                { start: 300, density: 0.010401040104010405 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608878224355128 },
                { start: 2500, end: 4000, density: 0.21145770845830839 },
                { start: 4000, density: 0.22765446910617881 },
              ],
              percentiles: { p75: 3761 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6859999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13350000000000004,
                },
                { start: "0.25", density: 0.18050000000000002 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42634263426342667 },
                { start: 800, end: 1800, density: 0.29622962296229643 },
                { start: 1800, density: 0.27742774277427684 },
              ],
              percentiles: { p75: 1944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3327,
        lcp: 3761,
        cls: "0.16",
        fid: 13,
      },
      timestamp: 1656280339080,
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
                  density: 0.9574331275720165,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020318930041152268,
                },
                { start: "0.25", density: 0.022247942386831282 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6061750911933299 },
                { start: 200, end: 500, density: 0.3352006253256905 },
                { start: 500, density: 0.058624283480979596 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38074712643678155 },
                { start: 800, end: 1800, density: 0.4578108672936259 },
                { start: 1800, density: 0.16144200626959254 },
              ],
              percentiles: { p75: 1552 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6110679108346306 },
                { start: 1800, end: 3000, density: 0.2273198548470715 },
                { start: 3000, density: 0.1616122343182979 },
              ],
              percentiles: { p75: 2411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9557545430603108 },
                { start: 100, end: 300, density: 0.03502765341058732 },
                { start: 300, density: 0.009217803529101919 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6913660632894909 },
                { start: 2500, end: 4000, density: 0.19429613230889442 },
                { start: 4000, density: 0.1143378044016146 },
              ],
              percentiles: { p75: 2826 },
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
        lcp: 2826,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280339501,
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
                { start: 0, end: 200, density: 0.6237623762376238 },
                { start: 200, end: 500, density: 0.2726272627262727 },
                { start: 500, density: 0.10361036103610353 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7407481496299259 },
                { start: 800, end: 1800, density: 0.23234646929385872 },
                { start: 1800, density: 0.026905381076215266 },
              ],
              percentiles: { p75: 837 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8924107589241076 },
                { start: 1800, end: 3000, density: 0.07859214078592142 },
                { start: 3000, density: 0.028997100289971045 },
              ],
              percentiles: { p75: 1337 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533046695330467 },
                { start: 100, end: 300, density: 0.0286971302869713 },
                { start: 300, density: 0.017998200179981966 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9068313662732546 },
                { start: 2500, end: 4000, density: 0.061262252450490086 },
                { start: 4000, density: 0.03190638127625528 },
              ],
              percentiles: { p75: 1829 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8071192880711928,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.146985301469853,
                },
                { start: "0.25", density: 0.04589541045895414 },
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
        fcp: 1337,
        lcp: 1829,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1656280339842,
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
                { start: 0, end: 200, density: 0.5883882149046794 },
                { start: 200, end: 500, density: 0.3460014855162169 },
                { start: 500, density: 0.06561029957910375 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4336081166772352 },
                { start: 800, end: 1800, density: 0.4863665187064044 },
                { start: 1800, density: 0.08002536461636031 },
              ],
              percentiles: { p75: 1225 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6704661885245903 },
                { start: 1800, end: 3000, density: 0.2516649590163935 },
                { start: 3000, density: 0.07786885245901623 },
              ],
              percentiles: { p75: 2124 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9725500256541817 },
                { start: 100, end: 300, density: 0.025269368907131867 },
                { start: 300, density: 0.0021806054386865063 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7933884297520659 },
                { start: 2500, end: 4000, density: 0.15206611570247927 },
                { start: 4000, density: 0.05454545454545474 },
              ],
              percentiles: { p75: 2437 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.955333417689485,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02163735290396052,
                },
                { start: "0.25", density: 0.02302922940655448 },
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
        fcp: 2124,
        lcp: 2437,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280340064,
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
                { start: 0, end: 1800, density: 0.650669866026794 },
                { start: 1800, end: 3000, density: 0.2026594681063785 },
                { start: 3000, density: 0.14667066586682756 },
              ],
              percentiles: { p75: 2255 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9117 },
                { start: 100, end: 300, density: 0.0357 },
                { start: 300, density: 0.05260000000000002 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7162716271627162 },
                { start: 2500, end: 4000, density: 0.16331633163316328 },
                { start: 4000, density: 0.12041204120412062 },
              ],
              percentiles: { p75: 2736 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8099619923984799,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11242248449689939,
                },
                { start: "0.25", density: 0.07761552310462083 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5961192238447698 },
                { start: 200, end: 500, density: 0.24514902980596145 },
                { start: 500, density: 0.1587317463492688 },
              ],
              percentiles: { p75: 322 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4300430043004297 },
                { start: 800, end: 1800, density: 0.4199419941994196 },
                { start: 1800, density: 0.15001500150015068 },
              ],
              percentiles: { p75: 1405 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2255,
        lcp: 2736,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1656280340407,
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
                  density: 0.8746125387461254,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0897910208979102,
                },
                { start: "0.25", density: 0.035596440355964404 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8003199680031997 },
                { start: 200, end: 500, density: 0.1634836516348365 },
                { start: 500, density: 0.03619638036196393 },
              ],
              percentiles: { p75: 175 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6137613761376137 },
                { start: 800, end: 1800, density: 0.3262326232623262 },
                { start: 1800, density: 0.06000600060006001 },
              ],
              percentiles: { p75: 1048 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8162 },
                { start: 1800, end: 3000, density: 0.142 },
                { start: 3000, density: 0.04179999999999998 },
              ],
              percentiles: { p75: 1508 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8526352635263525 },
                { start: 2500, end: 4000, density: 0.11976197619761973 },
                { start: 4000, density: 0.027602760276027566 },
              ],
              percentiles: { p75: 1887 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1508, lcp: 1887, cls: "0.03" },
      timestamp: 1656280340651,
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
                  density: 0.7823645970937912,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17206076618229857,
                },
                { start: "0.25", density: 0.045574636723910204 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5441933318415751 },
                { start: 200, end: 500, density: 0.2876482434549115 },
                { start: 500, density: 0.1681584247035134 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48054818744473865 },
                { start: 800, end: 1800, density: 0.41854553492484503 },
                { start: 1800, density: 0.10090627763041626 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6724842593615371 },
                { start: 1800, end: 3000, density: 0.22854302441179689 },
                { start: 3000, density: 0.09897271622666601 },
              ],
              percentiles: { p75: 2046 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.911855141783396 },
                { start: 100, end: 300, density: 0.04566678054891243 },
                { start: 300, density: 0.04247807766769157 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7132499446535298 },
                { start: 2500, end: 4000, density: 0.18358423732565832 },
                { start: 4000, density: 0.10316581802081196 },
              ],
              percentiles: { p75: 2672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2046,
        lcp: 2672,
        cls: "0.07",
        fid: 18,
      },
      timestamp: 1656280340920,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7237171151345395 },
                { start: 2500, end: 4000, density: 0.17595278583575052 },
                { start: 4000, density: 0.10033009902970987 },
              ],
              percentiles: { p75: 2622 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7961796179617961,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1585158515851585,
                },
                { start: "0.25", density: 0.04530453045304531 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5845584558455842 },
                { start: 200, end: 500, density: 0.26012601260126 },
                { start: 500, density: 0.15531553155315572 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4991998399679933 },
                { start: 800, end: 1800, density: 0.4055811162232443 },
                { start: 1800, density: 0.0952190438087624 },
              ],
              percentiles: { p75: 1200 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6891999999999991 },
                { start: 1800, end: 3000, density: 0.21769999999999967 },
                { start: 3000, density: 0.09310000000000114 },
              ],
              percentiles: { p75: 1999 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9214000000000001 },
                { start: 100, end: 300, density: 0.040100000000000004 },
                { start: 300, density: 0.03849999999999984 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1999,
        lcp: 2622,
        cls: "0.06",
        fid: 16,
      },
      timestamp: 1656280341299,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6138386161383862 },
                { start: 200, end: 500, density: 0.2882711728827117 },
                { start: 500, density: 0.0978902109789022 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32389716915074596 },
                { start: 800, end: 1800, density: 0.417225167550266 },
                { start: 1800, density: 0.258877663298988 },
              ],
              percentiles: { p75: 1879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5369389183245018 },
                { start: 1800, end: 3000, density: 0.24222733180045947 },
                { start: 3000, density: 0.2208337498750389 },
              ],
              percentiles: { p75: 2906 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583041695830417 },
                { start: 100, end: 300, density: 0.030096990300969902 },
                { start: 300, density: 0.011598840115988428 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5876175235047009 },
                { start: 2500, end: 4000, density: 0.2323464692938588 },
                { start: 4000, density: 0.18003600720144025 },
              ],
              percentiles: { p75: 3443 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8459999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10499999999999998,
                },
                { start: "0.25", density: 0.04900000000000004 },
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
        fcp: 2906,
        lcp: 3443,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1656280341537,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8189137827565512 },
                { start: 2500, end: 4000, density: 0.11127225445089019 },
                { start: 4000, density: 0.06981396279255851 },
              ],
              percentiles: { p75: 2202 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9436943694369437,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04680468046804681,
                },
                { start: "0.25", density: 0.009500950095009505 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5934593459345934 },
                { start: 200, end: 500, density: 0.34773477347734777 },
                { start: 500, density: 0.05880588058805879 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6415000000000001 },
                { start: 800, end: 1800, density: 0.28829999999999995 },
                { start: 1800, density: 0.07019999999999989 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7792337701310392 },
                { start: 1800, end: 3000, density: 0.12803841152345696 },
                { start: 3000, density: 0.09272781834550392 },
              ],
              percentiles: { p75: 1664 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1664, lcp: 2202, cls: "0.00" },
      timestamp: 1656280341766,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6801720688275309 },
                { start: 200, end: 500, density: 0.2707082833133254 },
                { start: 500, density: 0.04911964785914358 },
              ],
              percentiles: { p75: 226 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4092 },
                { start: 800, end: 1800, density: 0.4452000000000001 },
                { start: 1800, density: 0.1455999999999999 },
              ],
              percentiles: { p75: 1496 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6438999999999991 },
                { start: 1800, end: 3000, density: 0.2139999999999997 },
                { start: 3000, density: 0.14210000000000117 },
              ],
              percentiles: { p75: 2269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663932786557311 },
                { start: 100, end: 300, density: 0.026605321064212845 },
                { start: 300, density: 0.0070014002800560075 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6975500000000006 },
                { start: 2500, end: 4000, density: 0.18145000000000017 },
                { start: 4000, density: 0.12099999999999922 },
              ],
              percentiles: { p75: 2863 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8986101389861014,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06929307069293071,
                },
                { start: "0.25", density: 0.03209679032096791 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2269,
        lcp: 2863,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1656280341997,
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
                  density: 0.6859999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13350000000000004,
                },
                { start: "0.25", density: 0.18050000000000002 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42634263426342667 },
                { start: 800, end: 1800, density: 0.29622962296229643 },
                { start: 1800, density: 0.27742774277427684 },
              ],
              percentiles: { p75: 1795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5117535260578181 },
                { start: 1800, end: 3000, density: 0.1979593878163453 },
                { start: 3000, density: 0.29028708612583665 },
              ],
              percentiles: { p75: 3042 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8971897189718971 },
                { start: 100, end: 300, density: 0.0924092409240924 },
                { start: 300, density: 0.010401040104010405 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608878224355128 },
                { start: 2500, end: 4000, density: 0.21145770845830839 },
                { start: 4000, density: 0.22765446910617881 },
              ],
              percentiles: { p75: 3482 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3042,
        lcp: 3482,
        cls: "0.16",
        fid: 11,
      },
      timestamp: 1656280342234,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6778787134790082 },
                { start: 1800, end: 3000, density: 0.20120304443898845 },
                { start: 3000, density: 0.12091824208200334 },
              ],
              percentiles: { p75: 2100 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.961283876607968 },
                { start: 100, end: 300, density: 0.031222680154864492 },
                { start: 300, density: 0.0074934432371674894 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.773050079588588 },
                { start: 2500, end: 4000, density: 0.14564711644422662 },
                { start: 4000, density: 0.08130280396718552 },
              ],
              percentiles: { p75: 2414 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.952242070725483,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017620610037671645,
                },
                { start: "0.25", density: 0.030137319236845317 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5531081742535487 },
                { start: 200, end: 500, density: 0.3195056289769947 },
                { start: 500, density: 0.1273861967694567 },
              ],
              percentiles: { p75: 325 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.485689928145171 },
                { start: 800, end: 1800, density: 0.40494458653026427 },
                { start: 1800, density: 0.10936548532456472 },
              ],
              percentiles: { p75: 1208 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2100,
        lcp: 2414,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280342481,
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
                  density: 0.6859999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13350000000000004,
                },
                { start: "0.25", density: 0.18050000000000002 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42634263426342667 },
                { start: 800, end: 1800, density: 0.29622962296229643 },
                { start: 1800, density: 0.27742774277427684 },
              ],
              percentiles: { p75: 1795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5117535260578181 },
                { start: 1800, end: 3000, density: 0.1979593878163453 },
                { start: 3000, density: 0.29028708612583665 },
              ],
              percentiles: { p75: 3042 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8971897189718971 },
                { start: 100, end: 300, density: 0.0924092409240924 },
                { start: 300, density: 0.010401040104010405 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608878224355128 },
                { start: 2500, end: 4000, density: 0.21145770845830839 },
                { start: 4000, density: 0.22765446910617881 },
              ],
              percentiles: { p75: 3482 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3042,
        lcp: 3482,
        cls: "0.16",
        fid: 11,
      },
      timestamp: 1656280342895,
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
                { start: 0, end: 1800, density: 0.5323532353235312 },
                { start: 1800, end: 3000, density: 0.2381238123812377 },
                { start: 3000, density: 0.22952295229523106 },
              ],
              percentiles: { p75: 2975 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9786 },
                { start: 100, end: 300, density: 0.0203 },
                { start: 300, density: 0.0011 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6206138158552429 },
                { start: 2500, end: 4000, density: 0.18734379686094163 },
                { start: 4000, density: 0.19204238728381548 },
              ],
              percentiles: { p75: 3489 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9142 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058600000000000006,
                },
                { start: "0.25", density: 0.027199999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6571028691392581 },
                { start: 200, end: 500, density: 0.2696191142657203 },
                { start: 500, density: 0.07327801659502162 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4094409440944091 },
                { start: 800, end: 1800, density: 0.3940394039403938 },
                { start: 1800, density: 0.19651965196519716 },
              ],
              percentiles: { p75: 1585 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2975,
        lcp: 3489,
        cls: "0.01",
        fid: 10,
      },
      timestamp: 1656280343125,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6676329468212707 },
                { start: 2500, end: 4000, density: 0.15943622550979597 },
                { start: 4000, density: 0.17293082766893328 },
              ],
              percentiles: { p75: 3166 },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6870251899240299 },
                { start: 200, end: 500, density: 0.22311075569772074 },
                { start: 500, density: 0.08986405437824921 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5441367589723086 },
                { start: 800, end: 1800, density: 0.24602619214235746 },
                { start: 1800, density: 0.2098370488853338 },
              ],
              percentiles: { p75: 1636 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6486648664866491 },
                { start: 1800, end: 3000, density: 0.13241324132413257 },
                { start: 3000, density: 0.21892189218921834 },
              ],
              percentiles: { p75: 2765 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2765, lcp: 3166 },
      timestamp: 1656280343358,
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
                { start: 0, end: 2500, density: 0.5613622724544904 },
                { start: 2500, end: 4000, density: 0.2406981396279253 },
                { start: 4000, density: 0.19793958791758434 },
              ],
              percentiles: { p75: 3599 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8442 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11189999999999999,
                },
                { start: "0.25", density: 0.04390000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4762523747625238 },
                { start: 200, end: 500, density: 0.28957104289571045 },
                { start: 500, density: 0.2341765823417658 },
              ],
              percentiles: { p75: 470 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4311431143114309 },
                { start: 800, end: 1800, density: 0.3731373137313729 },
                { start: 1800, density: 0.19571957195719622 },
              ],
              percentiles: { p75: 1590 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5185481451854859 },
                { start: 1800, end: 3000, density: 0.23007699230077192 },
                { start: 3000, density: 0.2513748625137423 },
              ],
              percentiles: { p75: 3047 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9130739221766531 },
                { start: 100, end: 300, density: 0.057317195158547565 },
                { start: 300, density: 0.029608882664799385 },
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
        fcp: 3047,
        lcp: 3599,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1656280343590,
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
                  density: 0.9470999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044899999999999995,
                },
                { start: "0.25", density: 0.008 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.724272427242724 },
                { start: 200, end: 500, density: 0.1915191519151915 },
                { start: 500, density: 0.08420842084208455 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7735773577357734 },
                { start: 800, end: 1800, density: 0.21952195219521956 },
                { start: 1800, density: 0.006900690069006896 },
              ],
              percentiles: { p75: 778 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9348934893489348 },
                { start: 1800, end: 3000, density: 0.05280528052805279 },
                { start: 3000, density: 0.012301230123012319 },
              ],
              percentiles: { p75: 1194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739052189562087 },
                { start: 100, end: 300, density: 0.016896620675864827 },
                { start: 300, density: 0.009198160367926415 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.95635 },
                { start: 2500, end: 4000, density: 0.03515 },
                { start: 4000, density: 0.008500000000000011 },
              ],
              percentiles: { p75: 1532 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1194,
        lcp: 1532,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1656280343822,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5901864348621755 },
                { start: 800, end: 1800, density: 0.3658927141713371 },
                { start: 1800, density: 0.0439208509664874 },
              ],
              percentiles: { p75: 989 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8609225813873234 },
                { start: 1800, end: 3000, density: 0.10307143678822042 },
                { start: 3000, density: 0.03600598182445631 },
              ],
              percentiles: { p75: 1479 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9494078417845234 },
                { start: 100, end: 300, density: 0.02380131079682649 },
                { start: 300, density: 0.026790847418650104 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8822344954550687 },
                { start: 2500, end: 4000, density: 0.08842480727189043 },
                { start: 4000, density: 0.029340697273040846 },
              ],
              percentiles: { p75: 1897 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9257816974000687,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06253579200549765,
                },
                { start: "0.25", density: 0.011682510594433631 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.57516191341893 },
                { start: 200, end: 500, density: 0.32723554141574845 },
                { start: 500, density: 0.09760254516532155 },
              ],
              percentiles: { p75: 291 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1479,
        lcp: 1897,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280344054,
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
                  density: 0.8480848084808482,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09940994099409942,
                },
                { start: "0.25", density: 0.052505250525052505 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5475095019003798 },
                { start: 200, end: 500, density: 0.3309661932386477 },
                { start: 500, density: 0.12152430486097258 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7344265573442653 },
                { start: 800, end: 1800, density: 0.1962803719628037 },
                { start: 1800, density: 0.06929307069293088 },
              ],
              percentiles: { p75: 828 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8720127987201276 },
                { start: 1800, end: 3000, density: 0.08929107089291066 },
                { start: 3000, density: 0.038696130386961715 },
              ],
              percentiles: { p75: 1292 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642892867860359 },
                { start: 100, end: 300, density: 0.017705311593478046 },
                { start: 300, density: 0.018005401620486063 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8845884588458848 },
                { start: 2500, end: 4000, density: 0.08650865086508656 },
                { start: 4000, density: 0.028902890289028687 },
              ],
              percentiles: { p75: 1734 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1292,
        lcp: 1734,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1656280344471,
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
                { start: 0, end: 200, density: 0.6182381761823823 },
                { start: 200, end: 500, density: 0.3049695030496953 },
                { start: 500, density: 0.07679232076792246 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31259999999999993 },
                { start: 800, end: 1800, density: 0.4881999999999999 },
                { start: 1800, density: 0.1992000000000001 },
              ],
              percentiles: { p75: 1645 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5336932613477289 },
                { start: 1800, end: 3000, density: 0.29234153169366034 },
                { start: 3000, density: 0.17396520695861073 },
              ],
              percentiles: { p75: 2637 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652 },
                { start: 100, end: 300, density: 0.027999999999999997 },
                { start: 300, density: 0.006799999999999996 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6435500000000003 },
                { start: 2500, end: 4000, density: 0.2327500000000001 },
                { start: 4000, density: 0.12369999999999956 },
              ],
              percentiles: { p75: 2995 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9123087691230877,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0473952604739526,
                },
                { start: "0.25", density: 0.040295970402959735 },
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
        fcp: 2637,
        lcp: 2995,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1656280344704,
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
                  density: 0.866929407673583,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09377535643908659,
                },
                { start: "0.25", density: 0.03929523588733044 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7424761005547031 },
                { start: 200, end: 500, density: 0.20158149415791338 },
                { start: 500, density: 0.05594240528738352 },
              ],
              percentiles: { p75: 203 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4817244611059043 },
                { start: 800, end: 1800, density: 0.38378631677600733 },
                { start: 1800, density: 0.13448922211808842 },
              ],
              percentiles: { p75: 1341 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7257669427271669 },
                { start: 1800, end: 3000, density: 0.15700454916598625 },
                { start: 3000, density: 0.11722850810684678 },
              ],
              percentiles: { p75: 1922 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686721253114988 },
                { start: 100, end: 300, density: 0.021834579328349358 },
                { start: 300, density: 0.009493295360151881 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7870359595019197 },
                { start: 2500, end: 4000, density: 0.12545094844640975 },
                { start: 4000, density: 0.08751309205167054 },
              ],
              percentiles: { p75: 2302 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1922,
        lcp: 2302,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280344934,
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
                { start: 0, end: 200, density: 0.5092086330935262 },
                { start: 200, end: 500, density: 0.3936690647482022 },
                { start: 500, density: 0.09712230215827174 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.25976825653462643 },
                { start: 800, end: 1800, density: 0.5110482349770944 },
                { start: 1800, density: 0.22918350848827915 },
              ],
              percentiles: { p75: 1739 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46408839779005356 },
                { start: 1800, end: 3000, density: 0.3305248618784518 },
                { start: 3000, density: 0.20538674033149473 },
              ],
              percentiles: { p75: 2800 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9549680418361417 },
                { start: 100, end: 300, density: 0.03631609529343405 },
                { start: 300, density: 0.008715862870424166 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5989907369003176 },
                { start: 2500, end: 4000, density: 0.27353795105765216 },
                { start: 4000, density: 0.1274713120420303 },
              ],
              percentiles: { p75: 3112 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9467067504782728,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020497403662202787,
                },
                { start: "0.25", density: 0.03279584585952445 },
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
        fcp: 2800,
        lcp: 3112,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280345283,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8100081842628317 },
                { start: 1800, end: 3000, density: 0.14790132117385715 },
                { start: 3000, density: 0.042090494563311105 },
              ],
              percentiles: { p75: 1551 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8528723528723529 },
                { start: 2500, end: 4000, density: 0.12442962442962438 },
                { start: 4000, density: 0.022698022698022652 },
              ],
              percentiles: { p75: 1886 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.91067055393586 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06285714285714286,
                },
                { start: "0.25", density: 0.026472303206997085 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7780167534525695 },
                { start: 200, end: 500, density: 0.18440117726964 },
                { start: 500, density: 0.03758206927779051 },
              ],
              percentiles: { p75: 185 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6081802015411973 },
                { start: 800, end: 1800, density: 0.33052756372258446 },
                { start: 1800, density: 0.06129223473621812 },
              ],
              percentiles: { p75: 1080 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1551, lcp: 1886, cls: "0.01" },
      timestamp: 1656280345682,
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
                { start: "0.00", end: "0.10", density: 0.8781 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08940000000000001,
                },
                { start: "0.25", density: 0.03249999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.585758575857586 },
                { start: 200, end: 500, density: 0.29852985298529866 },
                { start: 500, density: 0.11571157115711532 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6267746450709857 },
                { start: 800, end: 1800, density: 0.3300339932013597 },
                { start: 1800, density: 0.04319136172765465 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7925377613283984 },
                { start: 1800, end: 3000, density: 0.15464639391817545 },
                { start: 3000, density: 0.05281584475342618 },
              ],
              percentiles: { p75: 1682 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568913782756551 },
                { start: 100, end: 300, density: 0.027305461092218444 },
                { start: 300, density: 0.015803160632126462 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.83695 },
                { start: 2500, end: 4000, density: 0.11875000000000005 },
                { start: 4000, density: 0.044299999999999874 },
              ],
              percentiles: { p75: 2124 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1682,
        lcp: 2124,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280346104,
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
                { start: 0, end: 2500, density: 0.7355025773195876 },
                { start: 2500, end: 4000, density: 0.18009020618556693 },
                { start: 4000, density: 0.08440721649484548 },
              ],
              percentiles: { p75: 2603 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9412253374870198,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0371754932502596,
                },
                { start: "0.25", density: 0.02159916926272068 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8108229988726043 },
                { start: 200, end: 500, density: 0.15625704622322437 },
                { start: 500, density: 0.03291995490417138 },
              ],
              percentiles: { p75: 169 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48796680497925327 },
                { start: 800, end: 1800, density: 0.3562240663900415 },
                { start: 1800, density: 0.15580912863070528 },
              ],
              percentiles: { p75: 1388 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6227810650887574 },
                { start: 1800, end: 3000, density: 0.24957734573119195 },
                { start: 3000, density: 0.12764158918005078 },
              ],
              percentiles: { p75: 2305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696969696969697 },
                { start: 100, end: 300, density: 0.030303030303030307 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2305,
        lcp: 2603,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1656280346366,
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
                { start: 0, end: 2500, density: 0.8189137827565512 },
                { start: 2500, end: 4000, density: 0.11127225445089019 },
                { start: 4000, density: 0.06981396279255851 },
              ],
              percentiles: { p75: 2127 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9436943694369437,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04680468046804681,
                },
                { start: "0.25", density: 0.009500950095009505 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5934593459345934 },
                { start: 200, end: 500, density: 0.34773477347734777 },
                { start: 500, density: 0.05880588058805879 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6415000000000001 },
                { start: 800, end: 1800, density: 0.28829999999999995 },
                { start: 1800, density: 0.07019999999999989 },
              ],
              percentiles: { p75: 1019 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7792337701310392 },
                { start: 1800, end: 3000, density: 0.12803841152345696 },
                { start: 3000, density: 0.09272781834550392 },
              ],
              percentiles: { p75: 1690 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1690, lcp: 2127, cls: "0.00" },
      timestamp: 1656280346721,
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
                { start: "0.00", end: "0.10", density: 0.9257 },
                { start: "0.10", end: "0.25", density: 0.034 },
                { start: "0.25", density: 0.04030000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7184000000000001 },
                { start: 200, end: 500, density: 0.23550000000000004 },
                { start: 500, density: 0.046099999999999794 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.431313737252549 },
                { start: 800, end: 1800, density: 0.4296140771845626 },
                { start: 1800, density: 0.1390721855628883 },
              ],
              percentiles: { p75: 1371 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6152999999999993 },
                { start: 1800, end: 3000, density: 0.23369999999999966 },
                { start: 3000, density: 0.151000000000001 },
              ],
              percentiles: { p75: 2347 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506049395060494 },
                { start: 100, end: 300, density: 0.042495750424957505 },
                { start: 300, density: 0.006899310068993093 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7135645741703311 },
                { start: 2500, end: 4000, density: 0.16748300679728093 },
                { start: 4000, density: 0.11895241903238782 },
              ],
              percentiles: { p75: 2723 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2347,
        lcp: 2723,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280347100,
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
                  density: 0.9405065442801293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046064932857385686,
                },
                { start: "0.25", density: 0.013428522862485128 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4265860039241336 },
                { start: 200, end: 500, density: 0.42805755395683454 },
                { start: 500, density: 0.14535644211903193 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.689435650378527 },
                { start: 800, end: 1800, density: 0.2875086028905713 },
                { start: 1800, density: 0.023055746730901577 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8717948717948719 },
                { start: 1800, end: 3000, density: 0.10204784030287388 },
                { start: 3000, density: 0.02615728790225426 },
              ],
              percentiles: { p75: 1454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.926124916051041 },
                { start: 100, end: 300, density: 0.04365345869711216 },
                { start: 300, density: 0.03022162525184682 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9085303186022607 },
                { start: 2500, end: 4000, density: 0.062007536827680725 },
                { start: 4000, density: 0.029462144570058493 },
              ],
              percentiles: { p75: 1855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1454,
        lcp: 1855,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1656280347372,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585339753879081 },
                { start: 100, end: 300, density: 0.022070626003210275 },
                { start: 300, density: 0.01939539860888168 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8761079774375506 },
                { start: 2500, end: 4000, density: 0.09461455815202797 },
                { start: 4000, density: 0.029277464410421342 },
              ],
              percentiles: { p75: 1764 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9586501267173535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026277177537681738,
                },
                { start: "0.25", density: 0.01507269574496464 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45424226254002126 },
                { start: 200, end: 500, density: 0.3987459978655282 },
                { start: 500, density: 0.1470117395944506 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7162928938124831 },
                { start: 800, end: 1800, density: 0.20467441232099431 },
                { start: 1800, density: 0.07903269386652258 },
              ],
              percentiles: { p75: 857 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8587950511027431 },
                { start: 1800, end: 3000, density: 0.09830554061323289 },
                { start: 3000, density: 0.042899408284024054 },
              ],
              percentiles: { p75: 1357 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1357,
        lcp: 1764,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1656280347794,
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
                  density: 0.8576999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06839999999999999,
                },
                { start: "0.25", density: 0.07390000000000009 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6631000000000004 },
                { start: 200, end: 500, density: 0.2825000000000001 },
                { start: 500, density: 0.05439999999999958 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28347165283471665 },
                { start: 800, end: 1800, density: 0.5236476352364764 },
                { start: 1800, density: 0.19288071192880685 },
              ],
              percentiles: { p75: 1678 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49664966496649676 },
                { start: 1800, end: 3000, density: 0.3278327832783279 },
                { start: 3000, density: 0.17551755175517542 },
              ],
              percentiles: { p75: 2669 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9847030593881224 },
                { start: 100, end: 300, density: 0.011097780443911217 },
                { start: 300, density: 0.004199160167966406 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6086826047814341 },
                { start: 2500, end: 4000, density: 0.24567370211063305 },
                { start: 4000, density: 0.1456436931079328 },
              ],
              percentiles: { p75: 3069 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2669,
        lcp: 3069,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1656280348263,
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
                { start: 0, end: 2500, density: 0.770154030806161 },
                { start: 2500, end: 4000, density: 0.14072814562912572 },
                { start: 4000, density: 0.08911782356471322 },
              ],
              percentiles: { p75: 2423 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9272999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039900000000000005,
                },
                { start: "0.25", density: 0.032800000000000024 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6207 },
                { start: 200, end: 500, density: 0.26930000000000004 },
                { start: 500, density: 0.11000000000000001 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5154030806161232 },
                { start: 800, end: 1800, density: 0.383376675335067 },
                { start: 1800, density: 0.10122024404880987 },
              ],
              percentiles: { p75: 1173 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7052000000000003 },
                { start: 1800, end: 3000, density: 0.18190000000000006 },
                { start: 3000, density: 0.11289999999999958 },
              ],
              percentiles: { p75: 2001 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664932986597319 },
                { start: 100, end: 300, density: 0.025605121024204838 },
                { start: 300, density: 0.007901580316063217 },
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
        fcp: 2001,
        lcp: 2423,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280348513,
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
                { start: 0, end: 800, density: 0.41834183418341814 },
                { start: 800, end: 1800, density: 0.48074807480748055 },
                { start: 1800, density: 0.10091009100910141 },
              ],
              percentiles: { p75: 1322 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6104831449434818 },
                { start: 1800, end: 3000, density: 0.24807442232669735 },
                { start: 3000, density: 0.14144243272982085 },
              ],
              percentiles: { p75: 2349 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9709 },
                { start: 100, end: 300, density: 0.025299999999999993 },
                { start: 300, density: 0.0038000000000000048 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6958783513405354 },
                { start: 2500, end: 4000, density: 0.1872749099639854 },
                { start: 4000, density: 0.11684673869547914 },
              ],
              percentiles: { p75: 2811 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9161916191619162,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0463046304630463,
                },
                { start: "0.25", density: 0.0375037503750375 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6553310662132429 },
                { start: 200, end: 500, density: 0.279855971194239 },
                { start: 500, density: 0.06481296259251809 },
              ],
              percentiles: { p75: 252 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2349,
        lcp: 2811,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1656280348761,
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
                { start: 0, end: 100, density: 0.9619076184763049 },
                { start: 100, end: 300, density: 0.02159568086382724 },
                { start: 300, density: 0.016496700659868007 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9071185762847431 },
                { start: 2500, end: 4000, density: 0.06248750249950011 },
                { start: 4000, density: 0.03039392121575679 },
              ],
              percentiles: { p75: 1778 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8185 },
                { start: "0.10", end: "0.25", density: 0.1446 },
                { start: "0.25", density: 0.03690000000000002 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6428357164283574 },
                { start: 200, end: 500, density: 0.25947405259474066 },
                { start: 500, density: 0.09769023097690192 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7093709370937092 },
                { start: 800, end: 1800, density: 0.25272527252725274 },
                { start: 1800, density: 0.03790379037903801 },
              ],
              percentiles: { p75: 869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8959 },
                { start: 1800, end: 3000, density: 0.07270000000000001 },
                { start: 3000, density: 0.03140000000000004 },
              ],
              percentiles: { p75: 1334 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1334,
        lcp: 1778,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1656280349029,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7760500000000006 },
                { start: 2500, end: 4000, density: 0.14685000000000004 },
                { start: 4000, density: 0.0770999999999995 },
              ],
              percentiles: { p75: 2514 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9277072292770723,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04769523047695231,
                },
                { start: "0.25", density: 0.02459754024597541 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.653 },
                { start: 200, end: 500, density: 0.2904 },
                { start: 500, density: 0.05659999999999995 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45525447455254475 },
                { start: 800, end: 1800, density: 0.4698530146985301 },
                { start: 1800, density: 0.07489251074892522 },
              ],
              percentiles: { p75: 1210 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.687306191857557 },
                { start: 1800, end: 3000, density: 0.2387716314894468 },
                { start: 3000, density: 0.07392217665299623 },
              ],
              percentiles: { p75: 2080 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9786021397860215 },
                { start: 100, end: 300, density: 0.019698030196980305 },
                { start: 300, density: 0.0016998300169983004 },
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
        fcp: 2080,
        lcp: 2514,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280349289,
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
                  density: 0.9395248380129589,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021825622371262933,
                },
                { start: "0.25", density: 0.03864953961577809 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4470464872422226 },
                { start: 200, end: 500, density: 0.3962483979960383 },
                { start: 500, density: 0.15670511476173898 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.21750602271423636 },
                { start: 800, end: 1800, density: 0.4979924285878164 },
                { start: 1800, density: 0.28450154869794725 },
              ],
              percentiles: { p75: 1899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37605066206102405 },
                { start: 1800, end: 3000, density: 0.3089234312032234 },
                { start: 3000, density: 0.31502590673575254 },
              ],
              percentiles: { p75: 3374 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620925838450638 },
                { start: 100, end: 300, density: 0.029877184695323578 },
                { start: 300, density: 0.008030231459612666 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48032128514056227 },
                { start: 2500, end: 4000, density: 0.3115318416523237 },
                { start: 4000, density: 0.20814687320711406 },
              ],
              percentiles: { p75: 3701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3374,
        lcp: 3701,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280349556,
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
                { start: 0, end: 2500, density: 0.7311962392478493 },
                { start: 2500, end: 4000, density: 0.15668133626725333 },
                { start: 4000, density: 0.11212242448489743 },
              ],
              percentiles: { p75: 2656 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8872887288728872,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058005800580058005,
                },
                { start: "0.25", density: 0.054705470547054755 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5288586575972789 },
                { start: 200, end: 500, density: 0.32039611883565045 },
                { start: 500, density: 0.15074522356707065 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47665233476652324 },
                { start: 800, end: 1800, density: 0.4106589341065892 },
                { start: 1800, density: 0.1126887311268874 },
              ],
              percentiles: { p75: 1243 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6477352264773506 },
                { start: 1800, end: 3000, density: 0.21407859214078537 },
                { start: 3000, density: 0.138186181381864 },
              ],
              percentiles: { p75: 2231 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574170331867251 },
                { start: 100, end: 300, density: 0.030587764894042378 },
                { start: 300, density: 0.01199520191923236 },
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
        fcp: 2231,
        lcp: 2656,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280350019,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5869798657718119 },
                { start: 200, end: 500, density: 0.2986577181208053 },
                { start: 500, density: 0.11436241610738275 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6898410504492053 },
                { start: 800, end: 1800, density: 0.27657221838286117 },
                { start: 1800, density: 0.033586731167933606 },
              ],
              percentiles: { p75: 899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8848045914184204 },
                { start: 1800, end: 3000, density: 0.09346816069964473 },
                { start: 3000, density: 0.021727247881934968 },
              ],
              percentiles: { p75: 1332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308525409608444 },
                { start: 100, end: 300, density: 0.03707303526798112 },
                { start: 300, density: 0.03207442377117449 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9244702665755297 },
                { start: 2500, end: 4000, density: 0.05926179084073818 },
                { start: 4000, density: 0.016267942583732122 },
              ],
              percentiles: { p75: 1694 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9516281583569788,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029590595865423595,
                },
                { start: "0.25", density: 0.01878124577759761 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1332,
        lcp: 1694,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280350271,
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
                { start: 0, end: 800, density: 0.4605701990317369 },
                { start: 800, end: 1800, density: 0.3975255513717047 },
                { start: 1800, density: 0.14190424959655834 },
              ],
              percentiles: { p75: 1380 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6910691283812793 },
                { start: 1800, end: 3000, density: 0.19235723486474882 },
                { start: 3000, density: 0.11657363675397182 },
              ],
              percentiles: { p75: 2066 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9609042262749807 },
                { start: 100, end: 300, density: 0.02391612973681336 },
                { start: 300, density: 0.015179643988205892 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7594440867138871 },
                { start: 2500, end: 4000, density: 0.14632968448164838 },
                { start: 4000, density: 0.0942262288044646 },
              ],
              percentiles: { p75: 2460 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8485821294810059,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1012306046013911,
                },
                { start: "0.25", density: 0.05018726591760313 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6246213760276937 },
                { start: 200, end: 500, density: 0.285049762007789 },
                { start: 500, density: 0.09032886196451732 },
              ],
              percentiles: { p75: 255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2066,
        lcp: 2460,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1656280350659,
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
                  density: 0.9258068220971631,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05995176294935108,
                },
                { start: "0.25", density: 0.014241414953485711 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6596864629820345 },
                { start: 200, end: 500, density: 0.2752031124842659 },
                { start: 500, density: 0.06511042453369953 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6987628384687209 },
                { start: 800, end: 1800, density: 0.2679738562091504 },
                { start: 1800, density: 0.03326330532212869 },
              ],
              percentiles: { p75: 866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8896710905943452 },
                { start: 1800, end: 3000, density: 0.08216964800923256 },
                { start: 3000, density: 0.028159261396422212 },
              ],
              percentiles: { p75: 1351 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9731818714135144 },
                { start: 100, end: 300, density: 0.019440215481906543 },
                { start: 300, density: 0.007377913104578956 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9247522470615349 },
                { start: 2500, end: 4000, density: 0.0508181608665591 },
                { start: 4000, density: 0.024429592071905905 },
              ],
              percentiles: { p75: 1675 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1351,
        lcp: 1675,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280351070,
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
                  density: 0.8687058823529411,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09799999999999999,
                },
                { start: "0.25", density: 0.03329411764705884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.556296036478429 },
                { start: 200, end: 500, density: 0.3204723488834329 },
                { start: 500, density: 0.12323161463813814 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6124970581313249 },
                { start: 800, end: 1800, density: 0.34172746528594955 },
                { start: 1800, density: 0.04577547658272542 },
              ],
              percentiles: { p75: 1011 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7828746177370027 },
                { start: 1800, end: 3000, density: 0.1612561750176428 },
                { start: 3000, density: 0.05586920724535438 },
              ],
              percentiles: { p75: 1709 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954022988505747 },
                { start: 100, end: 300, density: 0.029505865623889082 },
                { start: 300, density: 0.016471145870363954 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8425368731563417 },
                { start: 2500, end: 4000, density: 0.11592920353982296 },
                { start: 4000, density: 0.04153392330383534 },
              ],
              percentiles: { p75: 2108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1709,
        lcp: 2108,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280351499,
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
                  density: 0.9505009720352924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02990877822640945,
                },
                { start: "0.25", density: 0.019590249738298194 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.561965134706814 },
                { start: 200, end: 500, density: 0.31299524564183795 },
                { start: 500, density: 0.12503961965134816 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40568356374807996 },
                { start: 800, end: 1800, density: 0.4387096774193549 },
                { start: 1800, density: 0.15560675883256525 },
              ],
              percentiles: { p75: 1453 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6145691352415558 },
                { start: 1800, end: 3000, density: 0.23822504922005108 },
                { start: 3000, density: 0.14720581553839301 },
              ],
              percentiles: { p75: 2395 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336366488860997 },
                { start: 100, end: 300, density: 0.03875117665516159 },
                { start: 300, density: 0.027612174458738824 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7069834963325188 },
                { start: 2500, end: 4000, density: 0.18757640586797075 },
                { start: 4000, density: 0.10544009779951045 },
              ],
              percentiles: { p75: 2714 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2395,
        lcp: 2714,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1656280352011,
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
                { start: 0, end: 1800, density: 0.5699987330546047 },
                { start: 1800, end: 3000, density: 0.255669580641074 },
                { start: 3000, density: 0.17433168630432136 },
              ],
              percentiles: { p75: 2501 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374157000269759 },
                { start: 100, end: 300, density: 0.0557054221742649 },
                { start: 300, density: 0.006878877798759093 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6975811584977709 },
                { start: 2500, end: 4000, density: 0.1766390833863778 },
                { start: 4000, density: 0.12577975811585138 },
              ],
              percentiles: { p75: 2757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9636432255629639,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012202792804126306,
                },
                { start: "0.25", density: 0.024153981632909823 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6472513089005236 },
                { start: 200, end: 500, density: 0.29659685863874347 },
                { start: 500, density: 0.05615183246073282 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3825588796944616 },
                { start: 800, end: 1800, density: 0.45219605346912733 },
                { start: 1800, density: 0.1652450668364111 },
              ],
              percentiles: { p75: 1475 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2501,
        lcp: 2757,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1656280352425,
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
                  density: 0.9666016577279375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015358361774744029,
                },
                { start: "0.25", density: 0.018039980497318392 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5780460761365033 },
                { start: 200, end: 500, density: 0.32376493778489585 },
                { start: 500, density: 0.09818898607860091 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43606637384089764 },
                { start: 800, end: 1800, density: 0.37152269399707144 },
                { start: 1800, density: 0.192410932162031 },
              ],
              percentiles: { p75: 1573 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6065794301088403 },
                { start: 1800, end: 3000, density: 0.22404304757245871 },
                { start: 3000, density: 0.16937752231870087 },
              ],
              percentiles: { p75: 2500 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347716376482463 },
                { start: 100, end: 300, density: 0.044284632853898574 },
                { start: 300, density: 0.020943729497855102 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7040317654245566 },
                { start: 2500, end: 4000, density: 0.19590714722052516 },
                { start: 4000, density: 0.1000610873549183 },
              ],
              percentiles: { p75: 2741 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2500,
        lcp: 2741,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280352864,
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
                { start: 0, end: 2500, density: 0.8444976076555016 },
                { start: 2500, end: 4000, density: 0.10264826972293303 },
                { start: 4000, density: 0.052854122621565296 },
              ],
              percentiles: { p75: 2058 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.877191036165964,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10738850676725094,
                },
                { start: "0.25", density: 0.015420457066784994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5094318562339546 },
                { start: 200, end: 500, density: 0.3654425717155932 },
                { start: 500, density: 0.12512557205045224 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6028032226023617 },
                { start: 800, end: 1800, density: 0.33649707537799367 },
                { start: 1800, density: 0.060699702019644544 },
              ],
              percentiles: { p75: 1056 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7858888888888879 },
                { start: 1800, end: 3000, density: 0.14355555555555544 },
                { start: 3000, density: 0.07055555555555684 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400765938274386 },
                { start: 100, end: 300, density: 0.03457986032890291 },
                { start: 300, density: 0.02534354584365855 },
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
        fcp: 1690,
        lcp: 2058,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280353318,
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
                { start: 0, end: 200, density: 0.5559444055594439 },
                { start: 200, end: 500, density: 0.3301669833016697 },
                { start: 500, density: 0.11388861113888635 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6191619161916193 },
                { start: 800, end: 1800, density: 0.32343234323432346 },
                { start: 1800, density: 0.05740574057405734 },
              ],
              percentiles: { p75: 1032 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7979202079792009 },
                { start: 1800, end: 3000, density: 0.1355864413558643 },
                { start: 3000, density: 0.06649335066493482 },
              ],
              percentiles: { p75: 1650 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9459891978395679 },
                { start: 100, end: 300, density: 0.03130626125225045 },
                { start: 300, density: 0.0227045409081817 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8490349034903485 },
                { start: 2500, end: 4000, density: 0.10056005600560049 },
                { start: 4000, density: 0.05040504050405108 },
              ],
              percentiles: { p75: 2038 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8378 },
                { start: "0.10", end: "0.25", density: 0.1374 },
                { start: "0.25", density: 0.024799999999999996 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1650,
        lcp: 2038,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1656280353789,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587513935340022 },
                { start: 100, end: 300, density: 0.02440232875015483 },
                { start: 300, density: 0.016846277715842913 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.863811058765187 },
                { start: 2500, end: 4000, density: 0.08709397470865357 },
                { start: 4000, density: 0.049094966526159245 },
              ],
              percentiles: { p75: 1865 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9837638376383764,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.007257072570725706,
                },
                { start: "0.25", density: 0.008979089790897912 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5134474327628362 },
                { start: 200, end: 500, density: 0.384474327628362 },
                { start: 500, density: 0.10207823960880198 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6744012904826899 },
                { start: 800, end: 1800, density: 0.2542499069363443 },
                { start: 1800, density: 0.07134880258096564 },
              ],
              percentiles: { p75: 930 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8164807930607191 },
                { start: 1800, end: 3000, density: 0.1068153655514251 },
                { start: 3000, density: 0.07670384138785578 },
              ],
              percentiles: { p75: 1542 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1542,
        lcp: 1865,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280354106,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.21472147214721438 },
                { start: 800, end: 1800, density: 0.505850585058505 },
                { start: 1800, density: 0.27942794279428074 },
              ],
              percentiles: { p75: 1894 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3827382738273821 },
                { start: 1800, end: 3000, density: 0.309430943094309 },
                { start: 3000, density: 0.30783078307830897 },
              ],
              percentiles: { p75: 3333 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9679128348660535 },
                { start: 100, end: 300, density: 0.02528988404638145 },
                { start: 300, density: 0.00679728108756498 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.47195000000000115 },
                { start: 2500, end: 4000, density: 0.29965000000000086 },
                { start: 4000, density: 0.22839999999999808 },
              ],
              percentiles: { p75: 3874 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9099090090990901,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05499450054994501,
                },
                { start: "0.25", density: 0.03509649035096488 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5040495950404955 },
                { start: 200, end: 500, density: 0.35276472352764693 },
                { start: 500, density: 0.14318568143185761 },
              ],
              percentiles: { p75: 351 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3333,
        lcp: 3874,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1656280354556,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9248451479697177 },
                { start: 1800, end: 3000, density: 0.059738472126634565 },
                { start: 3000, density: 0.01541637990364765 },
              ],
              percentiles: { p75: 1272 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9669489210598197 },
                { start: 100, end: 300, density: 0.020486205954657194 },
                { start: 300, density: 0.012564872985523078 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9557954076722123 },
                { start: 2500, end: 4000, density: 0.03416746871992299 },
                { start: 4000, density: 0.010037123607864696 },
              ],
              percentiles: { p75: 1553 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9677067720397874,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02357269382749693,
                },
                { start: "0.25", density: 0.008720534132715627 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6433994938057811 },
                { start: 200, end: 500, density: 0.2488344212068736 },
                { start: 500, density: 0.10776608498734527 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7375847281781713 },
                { start: 800, end: 1800, density: 0.25439203209295896 },
                { start: 1800, density: 0.008023239728869827 },
              ],
              percentiles: { p75: 819 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1272,
        lcp: 1553,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280354854,
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
                { start: 0, end: 200, density: 0.6237623762376238 },
                { start: 200, end: 500, density: 0.2726272627262727 },
                { start: 500, density: 0.10361036103610353 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7407481496299259 },
                { start: 800, end: 1800, density: 0.23234646929385872 },
                { start: 1800, density: 0.026905381076215266 },
              ],
              percentiles: { p75: 837 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8924107589241076 },
                { start: 1800, end: 3000, density: 0.07859214078592142 },
                { start: 3000, density: 0.028997100289971045 },
              ],
              percentiles: { p75: 1337 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533046695330467 },
                { start: 100, end: 300, density: 0.0286971302869713 },
                { start: 300, density: 0.017998200179981966 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9068313662732546 },
                { start: 2500, end: 4000, density: 0.061262252450490086 },
                { start: 4000, density: 0.03190638127625528 },
              ],
              percentiles: { p75: 1829 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8071192880711928,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.146985301469853,
                },
                { start: "0.25", density: 0.04589541045895414 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1337,
        lcp: 1829,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1656280355318,
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
                { start: 0, end: 200, density: 0.6570410650665666 },
                { start: 200, end: 500, density: 0.26870429401837614 },
                { start: 500, density: 0.07425464091505739 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49598715890850664 },
                { start: 800, end: 1800, density: 0.37364009274121585 },
                { start: 1800, density: 0.1303727483502775 },
              ],
              percentiles: { p75: 1335 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6748183590288844 },
                { start: 1800, end: 3000, density: 0.2000708842814103 },
                { start: 3000, density: 0.12511075668970517 },
              ],
              percentiles: { p75: 2160 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619318181818183 },
                { start: 100, end: 300, density: 0.032007575757575756 },
                { start: 300, density: 0.006060606060606033 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7425392901289063 },
                { start: 2500, end: 4000, density: 0.16598975807875666 },
                { start: 4000, density: 0.09147095179233705 },
              ],
              percentiles: { p75: 2556 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.923304347826087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.051304347826086956,
                },
                { start: "0.25", density: 0.02539130434782607 },
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
        fcp: 2160,
        lcp: 2556,
        cls: "0.05",
        fid: 15,
      },
      timestamp: 1656280355632,
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
                { start: 0, end: 200, density: 0.6239424169718393 },
                { start: 200, end: 500, density: 0.2747821694658414 },
                { start: 500, density: 0.10127541356231932 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49468425771743413 },
                { start: 800, end: 1800, density: 0.27565005764057965 },
                { start: 1800, density: 0.22966568464198625 },
              ],
              percentiles: { p75: 1726 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6119365399143791 },
                { start: 1800, end: 3000, density: 0.14643666582724754 },
                { start: 3000, density: 0.24162679425837333 },
              ],
              percentiles: { p75: 2923 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6354745078243305 },
                { start: 2500, end: 4000, density: 0.17926552246340205 },
                { start: 4000, density: 0.1852599697122674 },
              ],
              percentiles: { p75: 3288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2923, lcp: 3288 },
      timestamp: 1656280356175,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46840367837774194 },
                { start: 200, end: 500, density: 0.3632398019335069 },
                { start: 500, density: 0.1683565196887512 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46869534802378476 },
                { start: 800, end: 1800, density: 0.41226536084878185 },
                { start: 1800, density: 0.11903929112743353 },
              ],
              percentiles: { p75: 1262 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6331499473252962 },
                { start: 1800, end: 3000, density: 0.22076553903780885 },
                { start: 3000, density: 0.146084513636895 },
              ],
              percentiles: { p75: 2266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520922491678554 },
                { start: 100, end: 300, density: 0.03471231573941987 },
                { start: 300, density: 0.013195435092724719 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7352081384471468 },
                { start: 2500, end: 4000, density: 0.15674695977549108 },
                { start: 4000, density: 0.10804490177736216 },
              ],
              percentiles: { p75: 2608 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9293434049970947,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023707147007553747,
                },
                { start: "0.25", density: 0.04694944799535154 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2266,
        lcp: 2608,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280356677,
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
                  density: 0.9384778976150692,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035090384323256875,
                },
                { start: "0.25", density: 0.02643171806167403 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6120703310628861 },
                { start: 200, end: 500, density: 0.32425154443212423 },
                { start: 500, density: 0.06367812450498965 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36399557452189013 },
                { start: 800, end: 1800, density: 0.46752015173067785 },
                { start: 1800, density: 0.16848427374743202 },
              ],
              percentiles: { p75: 1659 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.651639981346184 },
                { start: 1800, end: 3000, density: 0.21918234105394072 },
                { start: 3000, density: 0.1291776775998754 },
              ],
              percentiles: { p75: 2335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655944951192191 },
                { start: 100, end: 300, density: 0.030404864778364536 },
                { start: 300, density: 0.004000640102416387 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7831644583008572 },
                { start: 2500, end: 4000, density: 0.17724084177708502 },
                { start: 4000, density: 0.03959469992205765 },
              ],
              percentiles: { p75: 2473 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2335,
        lcp: 2473,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280357120,
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
                { start: 0, end: 200, density: 0.36520282397989673 },
                { start: 200, end: 500, density: 0.44501615412229223 },
                { start: 500, density: 0.18978102189781107 },
              ],
              percentiles: { p75: 423 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5359661495063467 },
                { start: 800, end: 1800, density: 0.3747061589092618 },
                { start: 1800, density: 0.08932769158439141 },
              ],
              percentiles: { p75: 1129 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7330177514792899 },
                { start: 1800, end: 3000, density: 0.18023668639053256 },
                { start: 3000, density: 0.08674556213017755 },
              ],
              percentiles: { p75: 1873 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9072975916737264 },
                { start: 100, end: 300, density: 0.06172092460365485 },
                { start: 300, density: 0.030981483722618795 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8191199146008777 },
                { start: 2500, end: 4000, density: 0.1219309690428181 },
                { start: 4000, density: 0.0589491163563042 },
              ],
              percentiles: { p75: 2189 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9332940483205656,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03335297583971714,
                },
                { start: "0.25", density: 0.03335297583971714 },
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
        fcp: 1873,
        lcp: 2189,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1656280357600,
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
                  density: 0.8922536163309448,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03947546302555089,
                },
                { start: "0.25", density: 0.06827092064350428 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46355643788996026 },
                { start: 200, end: 500, density: 0.32785025524673844 },
                { start: 500, density: 0.20859330686330127 },
              ],
              percentiles: { p75: 414 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37522051838784026 },
                { start: 800, end: 1800, density: 0.4501289184421215 },
                { start: 1800, density: 0.1746505631700382 },
              ],
              percentiles: { p75: 1518 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5960038319419724 },
                { start: 1800, end: 3000, density: 0.22936909812508513 },
                { start: 3000, density: 0.17462706993294255 },
              ],
              percentiles: { p75: 2477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8830384723392305 },
                { start: 100, end: 300, density: 0.0468969390620612 },
                { start: 300, density: 0.0700645885987082 },
              ],
              percentiles: { p75: 22 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6969655361801461 },
                { start: 2500, end: 4000, density: 0.17245640532747514 },
                { start: 4000, density: 0.13057805849237888 },
              ],
              percentiles: { p75: 2833 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2477,
        lcp: 2833,
        cls: "0.05",
        fid: 22,
      },
      timestamp: 1656280358182,
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
                { start: 0, end: 100, density: 0.954539914686167 },
                { start: 100, end: 300, density: 0.028762949421084705 },
                { start: 300, density: 0.016697135892748412 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9170965364775241 },
                { start: 2500, end: 4000, density: 0.062024072709408 },
                { start: 4000, density: 0.020879390813067892 },
              ],
              percentiles: { p75: 1702 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9465201465201466,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037606837606837605,
                },
                { start: "0.25", density: 0.01587301587301587 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43209876543209924 },
                { start: 200, end: 500, density: 0.4287426585161217 },
                { start: 500, density: 0.13915857605177914 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6627139364303178 },
                { start: 800, end: 1800, density: 0.30330073349633246 },
                { start: 1800, density: 0.03398533007334963 },
              ],
              percentiles: { p75: 901 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8964241676942045 },
                { start: 1800, end: 3000, density: 0.07990135635018494 },
                { start: 3000, density: 0.023674475955610542 },
              ],
              percentiles: { p75: 1334 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1334,
        lcp: 1702,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1656280358713,
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
                  density: 0.9406574012795058,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04323847341716302,
                },
                { start: "0.25", density: 0.01610412530333113 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5068436333471581 },
                { start: 200, end: 500, density: 0.338656159270012 },
                { start: 500, density: 0.15450020738282977 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7253358036127837 },
                { start: 800, end: 1800, density: 0.2290412227883279 },
                { start: 1800, density: 0.04562297359888836 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8906072322037752 },
                { start: 1800, end: 3000, density: 0.07778030475324085 },
                { start: 3000, density: 0.03161246304298383 },
              ],
              percentiles: { p75: 1310 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9640479360852198 },
                { start: 100, end: 300, density: 0.022192632046160676 },
                { start: 300, density: 0.013759431868619627 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9113554757630161 },
                { start: 2500, end: 4000, density: 0.06912028725314186 },
                { start: 4000, density: 0.01952423698384201 },
              ],
              percentiles: { p75: 1689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1310,
        lcp: 1689,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280359139,
    },
    {
      url: "https://www.yara.co.zm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.zm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5314500000000014 },
                { start: 2500, end: 4000, density: 0.2302500000000006 },
                { start: 4000, density: 0.2382999999999979 },
              ],
              percentiles: { p75: 3931 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8928 },
                { start: "0.10", end: "0.25", density: 0.067 },
                { start: "0.25", density: 0.04019999999999997 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4633000000000003 },
                { start: 200, end: 500, density: 0.3298000000000002 },
                { start: 500, density: 0.2068999999999994 },
              ],
              percentiles: { p75: 396 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36913691369136775 },
                { start: 800, end: 1800, density: 0.33673367336733545 },
                { start: 1800, density: 0.29412941294129674 },
              ],
              percentiles: { p75: 2087 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46570685862827393 },
                { start: 1800, end: 3000, density: 0.20385922815436897 },
                { start: 3000, density: 0.33043391321735716 },
              ],
              percentiles: { p75: 3484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9269073092690729 },
                { start: 100, end: 300, density: 0.0281971802819718 },
                { start: 300, density: 0.044895510448955116 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: {
        fcp: 3484,
        lcp: 3931,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280359590,
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
                { start: 0, end: 100, density: 0.9344146685472496 },
                { start: 100, end: 300, density: 0.03396803008932769 },
                { start: 300, density: 0.03161730136342258 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8852869281806539 },
                { start: 2500, end: 4000, density: 0.07967640554068209 },
                { start: 4000, density: 0.035036666278663975 },
              ],
              percentiles: { p75: 1839 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9461244351755301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03116672459738153,
                },
                { start: "0.25", density: 0.0227088402270884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46322251824394806 },
                { start: 200, end: 500, density: 0.39360593073091654 },
                { start: 500, density: 0.1431715510251354 },
              ],
              percentiles: { p75: 356 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7508116883116885 },
                { start: 800, end: 1800, density: 0.20547309833024124 },
                { start: 1800, density: 0.04371521335807025 },
              ],
              percentiles: { p75: 800 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8448756681385082 },
                { start: 1800, end: 3000, density: 0.1071345572856147 },
                { start: 3000, density: 0.04798977457587714 },
              ],
              percentiles: { p75: 1488 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1488,
        lcp: 1839,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280360067,
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
                  density: 0.950520059435364,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022882615156017833,
                },
                { start: "0.25", density: 0.026597325408618106 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6177777777777778 },
                { start: 200, end: 500, density: 0.29226053639846744 },
                { start: 500, density: 0.08996168582375479 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37966050318278266 },
                { start: 800, end: 1800, density: 0.3866323128220673 },
                { start: 1800, density: 0.23370718399515017 },
              ],
              percentiles: { p75: 1727 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.616989117291413 },
                { start: 1800, end: 3000, density: 0.20631801692865714 },
                { start: 3000, density: 0.1766928657799298 },
              ],
              percentiles: { p75: 2478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9484036919352398 },
                { start: 100, end: 300, density: 0.03389317597215917 },
                { start: 300, density: 0.017703132092601027 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.703670276774969 },
                { start: 2500, end: 4000, density: 0.18336341756919347 },
                { start: 4000, density: 0.11296630565583762 },
              ],
              percentiles: { p75: 2745 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2478,
        lcp: 2745,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280360662,
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
                  density: 0.9534046595340466,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033596640335966405,
                },
                { start: "0.25", density: 0.012998700129987014 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5710857828434317 },
                { start: 200, end: 500, density: 0.32203559288142397 },
                { start: 500, density: 0.10687862427514437 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6447355264473553 },
                { start: 800, end: 1800, density: 0.3191680831916809 },
                { start: 1800, density: 0.03609639036096385 },
              ],
              percentiles: { p75: 957 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.860141957412776 },
                { start: 1800, end: 3000, density: 0.10696790962711188 },
                { start: 3000, density: 0.03289013296011212 },
              ],
              percentiles: { p75: 1448 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656137544982006 },
                { start: 100, end: 300, density: 0.02269092363054778 },
                { start: 300, density: 0.01169532187125149 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8862886288628862 },
                { start: 2500, end: 4000, density: 0.08620862086208615 },
                { start: 4000, density: 0.02750275027502763 },
              ],
              percentiles: { p75: 1943 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1448,
        lcp: 1943,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280361257,
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
                { start: "0.00", end: "0.10", density: 0.8089 },
                { start: "0.10", end: "0.25", density: 0.1129 },
                { start: "0.25", density: 0.0782000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5999200239928025 },
                { start: 200, end: 500, density: 0.26372088373487973 },
                { start: 500, density: 0.13635909227231774 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2998000000000008 },
                { start: 800, end: 1800, density: 0.34820000000000095 },
                { start: 1800, density: 0.3519999999999983 },
              ],
              percentiles: { p75: 2162 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48495150484951344 },
                { start: 1800, end: 3000, density: 0.27387261273872526 },
                { start: 3000, density: 0.24117588241176122 },
              ],
              percentiles: { p75: 2962 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9368063193680634 },
                { start: 100, end: 300, density: 0.03379662033796621 },
                { start: 300, density: 0.029397060293970538 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5794499999999996 },
                { start: 2500, end: 4000, density: 0.25294999999999973 },
                { start: 4000, density: 0.16760000000000078 },
              ],
              percentiles: { p75: 3338 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2962,
        lcp: 3338,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1656280361612,
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
                { start: 0, end: 200, density: 0.4697255699143311 },
                { start: 200, end: 500, density: 0.35356468709162175 },
                { start: 500, density: 0.17670974299404704 },
              ],
              percentiles: { p75: 378 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26802642918701586 },
                { start: 800, end: 1800, density: 0.3310830221200813 },
                { start: 1800, density: 0.4008905486929027 },
              ],
              percentiles: { p75: 2319 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4256484149855899 },
                { start: 1800, end: 3000, density: 0.2900576368876075 },
                { start: 3000, density: 0.2842939481268025 },
              ],
              percentiles: { p75: 3225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9175904317386231 },
                { start: 100, end: 300, density: 0.04346557759626605 },
                { start: 300, density: 0.03894399066511075 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5433438757906837 },
                { start: 2500, end: 4000, density: 0.27278608395629644 },
                { start: 4000, density: 0.1838700402530198 },
              ],
              percentiles: { p75: 3478 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9438392983448861,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03338520299900976,
                },
                { start: "0.25", density: 0.022775498656104155 },
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
        fcp: 3225,
        lcp: 3478,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1656280361946,
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
                  density: 0.9522585880443603,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016905599134433322,
                },
                { start: "0.25", density: 0.03083581282120641 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5539598438371447 },
                { start: 200, end: 500, density: 0.3690741773563862 },
                { start: 500, density: 0.07696597880646915 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40433310765064295 },
                { start: 800, end: 1800, density: 0.4816519972918074 },
                { start: 1800, density: 0.1140148950575497 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5828555828555828 },
                { start: 1800, end: 3000, density: 0.25975975975975985 },
                { start: 3000, density: 0.15738465738465737 },
              ],
              percentiles: { p75: 2445 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625510347740391 },
                { start: 100, end: 300, density: 0.03336618330282979 },
                { start: 300, density: 0.004082781923131079 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6984613289760339 },
                { start: 2500, end: 4000, density: 0.19900599128540275 },
                { start: 4000, density: 0.1025326797385634 },
              ],
              percentiles: { p75: 2766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2445,
        lcp: 2766,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280362422,
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
                { start: 0, end: 2500, density: 0.9132 },
                { start: 2500, end: 4000, density: 0.0652 },
                { start: 4000, density: 0.021599999999999953 },
              ],
              percentiles: { p75: 1702 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.897910208979102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07539246075392461,
                },
                { start: "0.25", density: 0.02669733026697335 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.483503299340132 },
                { start: 200, end: 500, density: 0.3869226154769046 },
                { start: 500, density: 0.12957408518296346 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.67702918832467 },
                { start: 800, end: 1800, density: 0.28928428628548575 },
                { start: 1800, density: 0.033686525389844284 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9004199160167964 },
                { start: 1800, end: 3000, density: 0.0761847630473905 },
                { start: 3000, density: 0.023395320935813143 },
              ],
              percentiles: { p75: 1313 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587958795879589 },
                { start: 100, end: 300, density: 0.0262026202620262 },
                { start: 300, density: 0.01500150015001504 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1313,
        lcp: 1702,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1656280362939,
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
                  density: 0.9405065442801293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046064932857385686,
                },
                { start: "0.25", density: 0.013428522862485128 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4265860039241336 },
                { start: 200, end: 500, density: 0.42805755395683454 },
                { start: 500, density: 0.14535644211903193 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.689435650378527 },
                { start: 800, end: 1800, density: 0.2875086028905713 },
                { start: 1800, density: 0.023055746730901577 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8717948717948719 },
                { start: 1800, end: 3000, density: 0.10204784030287388 },
                { start: 3000, density: 0.02615728790225426 },
              ],
              percentiles: { p75: 1454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.926124916051041 },
                { start: 100, end: 300, density: 0.04365345869711216 },
                { start: 300, density: 0.03022162525184682 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9085303186022607 },
                { start: 2500, end: 4000, density: 0.062007536827680725 },
                { start: 4000, density: 0.029462144570058493 },
              ],
              percentiles: { p75: 1855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1454,
        lcp: 1855,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1656280363334,
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
                { start: 0, end: 800, density: 0.6979302069793014 },
                { start: 800, end: 1800, density: 0.23417658234176558 },
                { start: 1800, density: 0.06789321067893299 },
              ],
              percentiles: { p75: 882 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8316168383161683 },
                { start: 1800, end: 3000, density: 0.11338866113388658 },
                { start: 3000, density: 0.054994500549945084 },
              ],
              percentiles: { p75: 1481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516903380676136 },
                { start: 100, end: 300, density: 0.02410482096419284 },
                { start: 300, density: 0.02420484096819352 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8668366836683666 },
                { start: 2500, end: 4000, density: 0.09245924592459241 },
                { start: 4000, density: 0.04070407040704095 },
              ],
              percentiles: { p75: 1905 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.925 },
                { start: "0.10", end: "0.25", density: 0.0589 },
                { start: "0.25", density: 0.0161 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6283628362836288 },
                { start: 200, end: 500, density: 0.2863286328632866 },
                { start: 500, density: 0.08530853085308458 },
              ],
              percentiles: { p75: 259 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1481,
        lcp: 1905,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280364266,
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
                { start: 0, end: 800, density: 0.701310393117935 },
                { start: 800, end: 1800, density: 0.23497049114734408 },
                { start: 1800, density: 0.063719115734721 },
              ],
              percentiles: { p75: 881 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8304830483048301 },
                { start: 1800, end: 3000, density: 0.09890989098909889 },
                { start: 3000, density: 0.07060706070607103 },
              ],
              percentiles: { p75: 1462 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632926585317063 },
                { start: 100, end: 300, density: 0.02050410082016403 },
                { start: 300, density: 0.01620324064812964 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.860172034406881 },
                { start: 2500, end: 4000, density: 0.09031806361272249 },
                { start: 4000, density: 0.0495099019803967 },
              ],
              percentiles: { p75: 1872 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9571000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028999999999999998,
                },
                { start: "0.25", density: 0.013899999999999996 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5854414558544148 },
                { start: 200, end: 500, density: 0.3236676332366765 },
                { start: 500, density: 0.09089091090890859 },
              ],
              percentiles: { p75: 276 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1462,
        lcp: 1872,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1656280364808,
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
                { start: 0, end: 100, density: 0.9603841536614646 },
                { start: 100, end: 300, density: 0.023809523809523808 },
                { start: 300, density: 0.015806322529011627 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8868999999999998 },
                { start: 2500, end: 4000, density: 0.08520000000000003 },
                { start: 4000, density: 0.027900000000000202 },
              ],
              percentiles: { p75: 1853 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9570957095709571,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0266026602660266,
                },
                { start: "0.25", density: 0.0163016301630163 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6406718656268745 },
                { start: 200, end: 500, density: 0.2834433113377325 },
                { start: 500, density: 0.07588482303539293 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6157384261573841 },
                { start: 800, end: 1800, density: 0.33326667333266663 },
                { start: 1800, density: 0.05099490050994918 },
              ],
              percentiles: { p75: 978 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8545145485451453 },
                { start: 1800, end: 3000, density: 0.10768923107689225 },
                { start: 3000, density: 0.03779622037796255 },
              ],
              percentiles: { p75: 1477 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1853,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280365357,
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
                  density: 0.8823882388238824,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0821082108210821,
                },
                { start: "0.25", density: 0.035503550355035475 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6552344765523447 },
                { start: 200, end: 500, density: 0.243975602439756 },
                { start: 500, density: 0.10078992100789937 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7225277472252776 },
                { start: 800, end: 1800, density: 0.2490750924907509 },
                { start: 1800, density: 0.02839716028397153 },
              ],
              percentiles: { p75: 845 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8994201159768047 },
                { start: 1800, end: 3000, density: 0.0810837832433513 },
                { start: 3000, density: 0.01949610077984404 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9433056694330567 },
                { start: 100, end: 300, density: 0.029697030296970305 },
                { start: 300, density: 0.026997300269972897 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9238576142385762 },
                { start: 2500, end: 4000, density: 0.05984401559844016 },
                { start: 4000, density: 0.016298370162983754 },
              ],
              percentiles: { p75: 1664 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1256,
        lcp: 1664,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1656280366043,
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
                { start: 0, end: 1800, density: 0.5117535260578181 },
                { start: 1800, end: 3000, density: 0.1979593878163453 },
                { start: 3000, density: 0.29028708612583665 },
              ],
              percentiles: { p75: 3327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8971897189718971 },
                { start: 100, end: 300, density: 0.0924092409240924 },
                { start: 300, density: 0.010401040104010405 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608878224355128 },
                { start: 2500, end: 4000, density: 0.21145770845830839 },
                { start: 4000, density: 0.22765446910617881 },
              ],
              percentiles: { p75: 3761 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6859999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13350000000000004,
                },
                { start: "0.25", density: 0.18050000000000002 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42634263426342667 },
                { start: 800, end: 1800, density: 0.29622962296229643 },
                { start: 1800, density: 0.27742774277427684 },
              ],
              percentiles: { p75: 1944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3327,
        lcp: 3761,
        cls: "0.16",
        fid: 13,
      },
      timestamp: 1656280366491,
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
                  density: 0.898810118988101,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08449155084491551,
                },
                { start: "0.25", density: 0.0166983301669833 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6998099429828949 },
                { start: 200, end: 500, density: 0.24237271181354414 },
                { start: 500, density: 0.057817345203560994 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7180000000000002 },
                { start: 800, end: 1800, density: 0.2512000000000001 },
                { start: 1800, density: 0.03079999999999988 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8956000000000003 },
                { start: 1800, end: 3000, density: 0.0777 },
                { start: 3000, density: 0.026699999999999818 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9763023697630238 },
                { start: 100, end: 300, density: 0.016998300169983 },
                { start: 300, density: 0.0066993300669932745 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9235305877648942 },
                { start: 2500, end: 4000, density: 0.0526789284286286 },
                { start: 4000, density: 0.023790483806477365 },
              ],
              percentiles: { p75: 1685 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1685,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1656280367001,
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
                { start: 0, end: 200, density: 0.6226000000000005 },
                { start: 200, end: 500, density: 0.2909000000000002 },
                { start: 500, density: 0.08649999999999938 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6029191242627212 },
                { start: 800, end: 1800, density: 0.3542937118864341 },
                { start: 1800, density: 0.04278716385084469 },
              ],
              percentiles: { p75: 983 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8671867186718668 },
                { start: 1800, end: 3000, density: 0.09940994099409932 },
                { start: 3000, density: 0.033403340334033874 },
              ],
              percentiles: { p75: 1454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551089782043591 },
                { start: 100, end: 300, density: 0.020995800839832036 },
                { start: 300, density: 0.023895220955808847 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8804358692392283 },
                { start: 2500, end: 4000, density: 0.09107267819654102 },
                { start: 4000, density: 0.02849145256423065 },
              ],
              percentiles: { p75: 1913 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052094790520949,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07799220077992201,
                },
                { start: "0.25", density: 0.01679832016798321 },
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
        fcp: 1454,
        lcp: 1913,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1656280367385,
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
                { start: 0, end: 800, density: 0.7575375564660154 },
                { start: 800, end: 1800, density: 0.20716461813215675 },
                { start: 1800, density: 0.035297825401827757 },
              ],
              percentiles: { p75: 791 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8614236147618547 },
                { start: 1800, end: 3000, density: 0.0946272736831038 },
                { start: 3000, density: 0.043949111555041435 },
              ],
              percentiles: { p75: 1429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654626108998732 },
                { start: 100, end: 300, density: 0.02503168567807351 },
                { start: 300, density: 0.009505703422053235 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8929134686152874 },
                { start: 2500, end: 4000, density: 0.07533382399327096 },
                { start: 4000, density: 0.031752707391441475 },
              ],
              percentiles: { p75: 1806 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9689506367750763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022734449005367856,
                },
                { start: "0.25", density: 0.008314914219555838 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5915419240029313 },
                { start: 200, end: 500, density: 0.3474301266617818 },
                { start: 500, density: 0.06102794933528707 },
              ],
              percentiles: { p75: 273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1429,
        lcp: 1806,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1656280367792,
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
                { start: 0, end: 2500, density: 0.9299473558267528 },
                { start: 2500, end: 4000, density: 0.053541517109356285 },
                { start: 4000, density: 0.01651112706389098 },
              ],
              percentiles: { p75: 1642 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9029460679496318,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06557377049180328,
                },
                { start: "0.25", density: 0.031480161558565 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4053670646648542 },
                { start: 200, end: 500, density: 0.42120818063600907 },
                { start: 500, density: 0.17342475469913674 },
              ],
              percentiles: { p75: 374 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8708007224563517 },
                { start: 800, end: 1800, density: 0.11788079470198676 },
                { start: 1800, density: 0.011318482841661601 },
              ],
              percentiles: { p75: 648 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9304504504504505 },
                { start: 1800, end: 3000, density: 0.054894894894894894 },
                { start: 3000, density: 0.014654654654654755 },
              ],
              percentiles: { p75: 1148 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9139072847682121 },
                { start: 100, end: 300, density: 0.04202287778446721 },
                { start: 300, density: 0.04406983744732067 },
              ],
              percentiles: { p75: 16 },
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
        lcp: 1642,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1656280368335,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551179528188722 },
                { start: 100, end: 300, density: 0.02638944422231107 },
                { start: 300, density: 0.018492602958816665 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7151215121512152 },
                { start: 2500, end: 4000, density: 0.18626862686268628 },
                { start: 4000, density: 0.09860986098609845 },
              ],
              percentiles: { p75: 2702 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8289171082891711,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1251874812518748,
                },
                { start: "0.25", density: 0.04589541045895406 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6977 },
                { start: 200, end: 500, density: 0.21249999999999994 },
                { start: 500, density: 0.08979999999999999 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4807961592318465 },
                { start: 800, end: 1800, density: 0.39667933586717347 },
                { start: 1800, density: 0.1225245049009801 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6656999999999992 },
                { start: 1800, end: 3000, density: 0.21459999999999976 },
                { start: 3000, density: 0.11970000000000088 },
              ],
              percentiles: { p75: 2239 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2239,
        lcp: 2702,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1656280368887,
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
                  density: 0.8673867386738673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0693069306930693,
                },
                { start: "0.25", density: 0.06330633063306333 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5547445255474451 },
                { start: 200, end: 500, density: 0.2823717628237176 },
                { start: 500, density: 0.1628837116288372 },
              ],
              percentiles: { p75: 355 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3417658234176586 },
                { start: 800, end: 1800, density: 0.41275872412758763 },
                { start: 1800, density: 0.2454754524547538 },
              ],
              percentiles: { p75: 1850 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5348069613922785 },
                { start: 1800, end: 3000, density: 0.29115823164632926 },
                { start: 3000, density: 0.17403480696139229 },
              ],
              percentiles: { p75: 2527 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9203920392039203 },
                { start: 100, end: 300, density: 0.04450445044504451 },
                { start: 300, density: 0.03510351035103517 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6789284286285487 },
                { start: 2500, end: 4000, density: 0.23270691723310685 },
                { start: 4000, density: 0.08836465413834443 },
              ],
              percentiles: { p75: 2947 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2527,
        lcp: 2947,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1656280369251,
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
                  density: 0.8289171082891711,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1251874812518748,
                },
                { start: "0.25", density: 0.04589541045895406 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6977 },
                { start: 200, end: 500, density: 0.21249999999999994 },
                { start: 500, density: 0.08979999999999999 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4807961592318465 },
                { start: 800, end: 1800, density: 0.39667933586717347 },
                { start: 1800, density: 0.1225245049009801 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6656999999999992 },
                { start: 1800, end: 3000, density: 0.21459999999999976 },
                { start: 3000, density: 0.11970000000000088 },
              ],
              percentiles: { p75: 2239 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551179528188722 },
                { start: 100, end: 300, density: 0.02638944422231107 },
                { start: 300, density: 0.018492602958816665 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7151215121512152 },
                { start: 2500, end: 4000, density: 0.18626862686268628 },
                { start: 4000, density: 0.09860986098609845 },
              ],
              percentiles: { p75: 2702 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2239,
        lcp: 2702,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1656280369631,
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
                { start: 0, end: 200, density: 0.566233470132239 },
                { start: 200, end: 500, density: 0.3250113999088008 },
                { start: 500, density: 0.10875512995896025 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2949812222601567 },
                { start: 800, end: 1800, density: 0.4243769204506652 },
                { start: 1800, density: 0.2806418572891781 },
              ],
              percentiles: { p75: 1924 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5011960359949874 },
                { start: 1800, end: 3000, density: 0.26039412233739573 },
                { start: 3000, density: 0.2384098416676169 },
              ],
              percentiles: { p75: 2976 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529879546251899 },
                { start: 100, end: 300, density: 0.03403110747281019 },
                { start: 300, density: 0.012980937901999778 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5604709647919532 },
                { start: 2500, end: 4000, density: 0.2535436671239143 },
                { start: 4000, density: 0.18598536808413244 },
              ],
              percentiles: { p75: 3469 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8527272727272727,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09511363636363636,
                },
                { start: "0.25", density: 0.05215909090909096 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 3469,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280370053,
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
                  density: 0.8786242751449709,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08338332333533291,
                },
                { start: "0.25", density: 0.03799240151969614 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6859000000000005 },
                { start: 200, end: 500, density: 0.21240000000000014 },
                { start: 500, density: 0.10169999999999942 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8389483155053484 },
                { start: 800, end: 1800, density: 0.1409577126861942 },
                { start: 1800, density: 0.02009397180845734 },
              ],
              percentiles: { p75: 690 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9420710355177587 },
                { start: 1800, end: 3000, density: 0.043321660830415186 },
                { start: 3000, density: 0.014607303651825991 },
              ],
              percentiles: { p75: 1153 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9541999999999999 },
                { start: 100, end: 300, density: 0.023899999999999998 },
                { start: 300, density: 0.02190000000000004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9444222311075571 },
                { start: 2500, end: 4000, density: 0.041083566573370665 },
                { start: 4000, density: 0.014494202319072303 },
              ],
              percentiles: { p75: 1538 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1153,
        lcp: 1538,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1656280370767,
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
                  density: 0.8632273545290942,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07638472305538892,
                },
                { start: "0.25", density: 0.06038792241551685 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7649235076492349 },
                { start: 200, end: 500, density: 0.14558544145585436 },
                { start: 500, density: 0.08949105089491072 },
              ],
              percentiles: { p75: 190 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3871612838716131 },
                { start: 800, end: 1800, density: 0.44435556444355595 },
                { start: 1800, density: 0.1684831516848309 },
              ],
              percentiles: { p75: 1327 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08199180081991805 },
                { start: 1800, end: 3000, density: 0.4807519248075195 },
                { start: 3000, density: 0.43725627437256254 },
              ],
              percentiles: { p75: 4263 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.29582958295829564 },
                { start: 2500, end: 4000, density: 0.3684368436843683 },
                { start: 4000, density: 0.33573357335733617 },
              ],
              percentiles: { p75: 5023 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4263, lcp: 5023, cls: "0.04" },
      timestamp: 1656280371156,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48403131601839183 },
                { start: 1800, end: 3000, density: 0.32322604697402746 },
                { start: 3000, density: 0.19274263700758063 },
              ],
              percentiles: { p75: 2672 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.897076176740527 },
                { start: 100, end: 300, density: 0.05690310738167038 },
                { start: 300, density: 0.046020715877802626 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6569523809523815 },
                { start: 2500, end: 4000, density: 0.26038095238095255 },
                { start: 4000, density: 0.082666666666666 },
              ],
              percentiles: { p75: 3019 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9514754908013334,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021607605877268798,
                },
                { start: "0.25", density: 0.026916903321397703 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45281553398058266 },
                { start: 200, end: 500, density: 0.34485436893203886 },
                { start: 500, density: 0.20233009708737856 },
              ],
              percentiles: { p75: 421 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30133502860775613 },
                { start: 800, end: 1800, density: 0.43699936427209185 },
                { start: 1800, density: 0.2616656071201519 },
              ],
              percentiles: { p75: 1910 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2672,
        lcp: 3019,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1656280371929,
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
                { start: 0, end: 800, density: 0.44686812087252303 },
                { start: 800, end: 1800, density: 0.41344806884130436 },
                { start: 1800, density: 0.13968381028617263 },
              ],
              percentiles: { p75: 1348 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6343440408285795 },
                { start: 1800, end: 3000, density: 0.2084459121384967 },
                { start: 3000, density: 0.15721004703292377 },
              ],
              percentiles: { p75: 2301 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9544908981796361 },
                { start: 100, end: 300, density: 0.029605921184236852 },
                { start: 300, density: 0.015903180636127126 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.716086434573829 },
                { start: 2500, end: 4000, density: 0.1630652260904361 },
                { start: 4000, density: 0.1208483393357348 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8838651595478645,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06361908572571773,
                },
                { start: "0.25", density: 0.05251575472641792 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6030396960303973 },
                { start: 200, end: 500, density: 0.2984701529847016 },
                { start: 500, density: 0.0984901509849011 },
              ],
              percentiles: { p75: 279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2301,
        lcp: 2767,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1656280372507,
    },
    {
      url: "https://www.yara.ph/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ph" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8852999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0723 },
                { start: "0.25", density: 0.04240000000000004 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6153 },
                { start: 200, end: 500, density: 0.3151 },
                { start: 500, density: 0.06959999999999995 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3706629337066287 },
                { start: 800, end: 1800, density: 0.4149585041495843 },
                { start: 1800, density: 0.21437856214378695 },
              ],
              percentiles: { p75: 1704 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057000000000008 },
                { start: 1800, end: 3000, density: 0.22580000000000028 },
                { start: 3000, density: 0.16849999999999898 },
              ],
              percentiles: { p75: 2491 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6928807119288071 },
                { start: 2500, end: 4000, density: 0.17693230676932295 },
                { start: 4000, density: 0.1301869813018699 },
              ],
              percentiles: { p75: 2772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2491, lcp: 2772, cls: "0.00" },
      timestamp: 1656280372843,
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
                { start: 0, end: 1800, density: 0.9183999999999999 },
                { start: 1800, end: 3000, density: 0.057800000000000004 },
                { start: 3000, density: 0.02380000000000005 },
              ],
              percentiles: { p75: 1187 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9822017798220177 },
                { start: 100, end: 300, density: 0.0115988401159884 },
                { start: 300, density: 0.006199380061993804 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9248424842484249 },
                { start: 2500, end: 4000, density: 0.05865586558655863 },
                { start: 4000, density: 0.01650165016501649 },
              ],
              percentiles: { p75: 1590 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8232823282328233,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15171517151715172,
                },
                { start: "0.25", density: 0.02500250025002498 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7514497100579878 },
                { start: 200, end: 500, density: 0.17336532693461298 },
                { start: 500, density: 0.07518496300739909 },
              ],
              percentiles: { p75: 205 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7651530306061212 },
                { start: 800, end: 1800, density: 0.20044008801760346 },
                { start: 1800, density: 0.03440688137627529 },
              ],
              percentiles: { p75: 789 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1187, lcp: 1590, cls: "0.08", fid: 9 },
      timestamp: 1656280373311,
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
                { start: 0, end: 2500, density: 0.8919251023990638 },
                { start: 2500, end: 4000, density: 0.08115857226448214 },
                { start: 4000, density: 0.026916325336454005 },
              ],
              percentiles: { p75: 1835 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9738134206219312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013677811550151972,
                },
                { start: "0.25", density: 0.012508767827916769 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.60125260960334 },
                { start: 200, end: 500, density: 0.3160519601020644 },
                { start: 500, density: 0.08269543029459549 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6009120673526659 },
                { start: 800, end: 1800, density: 0.3420252572497662 },
                { start: 1800, density: 0.05706267539756795 },
              ],
              percentiles: { p75: 995 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8475967174677606 },
                { start: 1800, end: 3000, density: 0.11219226260257908 },
                { start: 3000, density: 0.040211019929660245 },
              ],
              percentiles: { p75: 1502 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.955695464614667 },
                { start: 100, end: 300, density: 0.026582721231199716 },
                { start: 300, density: 0.017721814154133177 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1502,
        lcp: 1835,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280373627,
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
                { start: 0, end: 800, density: 0.884111588841116 },
                { start: 800, end: 1800, density: 0.1053894610538946 },
                { start: 1800, density: 0.010498950104989455 },
              ],
              percentiles: { p75: 630 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.933006699330067 },
                { start: 1800, end: 3000, density: 0.05019498050194981 },
                { start: 3000, density: 0.01679832016798315 },
              ],
              percentiles: { p75: 1115 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9271000000000001 },
                { start: 100, end: 300, density: 0.03580000000000001 },
                { start: 300, density: 0.03709999999999975 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9286928692869288 },
                { start: 2500, end: 4000, density: 0.05310531053105313 },
                { start: 4000, density: 0.018201820182018116 },
              ],
              percentiles: { p75: 1628 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8937106289371063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0758924107589241,
                },
                { start: "0.25", density: 0.030396960303969617 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48724872487248705 },
                { start: 200, end: 500, density: 0.3613361336133613 },
                { start: 500, density: 0.1514151415141515 },
              ],
              percentiles: { p75: 344 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1115,
        lcp: 1628,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1656280374105,
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
                { start: 0, end: 2500, density: 0.8190680931906809 },
                { start: 2500, end: 4000, density: 0.12053794620537946 },
                { start: 4000, density: 0.06039396060393976 },
              ],
              percentiles: { p75: 2182 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8839 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06950000000000002,
                },
                { start: "0.25", density: 0.04660000000000004 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44179999999999997 },
                { start: 200, end: 500, density: 0.38949999999999996 },
                { start: 500, density: 0.16870000000000002 },
              ],
              percentiles: { p75: 395 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5598559855985598 },
                { start: 800, end: 1800, density: 0.3563356335633564 },
                { start: 1800, density: 0.08380838083808397 },
              ],
              percentiles: { p75: 1103 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7491250874912507 },
                { start: 1800, end: 3000, density: 0.16878312168783122 },
                { start: 3000, density: 0.0820917908209181 },
              ],
              percentiles: { p75: 1823 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.917883576715343 },
                { start: 100, end: 300, density: 0.05301060212042409 },
                { start: 300, density: 0.029105821164232853 },
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
        fcp: 1823,
        lcp: 2182,
        cls: "0.02",
        fid: 16,
      },
      timestamp: 1656280374470,
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
                { start: 0, end: 200, density: 0.561965134706814 },
                { start: 200, end: 500, density: 0.31299524564183795 },
                { start: 500, density: 0.12503961965134816 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40568356374807996 },
                { start: 800, end: 1800, density: 0.4387096774193549 },
                { start: 1800, density: 0.15560675883256525 },
              ],
              percentiles: { p75: 1453 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6145691352415558 },
                { start: 1800, end: 3000, density: 0.23822504922005108 },
                { start: 3000, density: 0.14720581553839301 },
              ],
              percentiles: { p75: 2395 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336366488860997 },
                { start: 100, end: 300, density: 0.03875117665516159 },
                { start: 300, density: 0.027612174458738824 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7069834963325188 },
                { start: 2500, end: 4000, density: 0.18757640586797075 },
                { start: 4000, density: 0.10544009779951045 },
              ],
              percentiles: { p75: 2714 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9505009720352924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02990877822640945,
                },
                { start: "0.25", density: 0.019590249738298194 },
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
        fcp: 2395,
        lcp: 2714,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1656280374825,
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
                { start: "0.00", end: "0.10", density: 0.8329 },
                { start: "0.10", end: "0.25", density: 0.1187 },
                { start: "0.25", density: 0.04840000000000006 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5097019403880767 },
                { start: 200, end: 500, density: 0.33066613322664473 },
                { start: 500, density: 0.1596319263852785 },
              ],
              percentiles: { p75: 357 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6187000000000006 },
                { start: 800, end: 1800, density: 0.2829000000000004 },
                { start: 1800, density: 0.09839999999999907 },
              ],
              percentiles: { p75: 1076 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7297351324337823 },
                { start: 1800, end: 3000, density: 0.1597201399300348 },
                { start: 3000, density: 0.11054472763618302 },
              ],
              percentiles: { p75: 1922 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9397879575915182 },
                { start: 100, end: 300, density: 0.040208041608321664 },
                { start: 300, density: 0.020004000800160106 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7867073414682935 },
                { start: 2500, end: 4000, density: 0.1346769353870774 },
                { start: 4000, density: 0.0786157231446292 },
              ],
              percentiles: { p75: 2340 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1922,
        lcp: 2340,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1656280375361,
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
                  density: 0.9497036105622418,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03287228309682056,
                },
                { start: "0.25", density: 0.01742410634093767 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4475067996373528 },
                { start: 200, end: 500, density: 0.3996373526745241 },
                { start: 500, density: 0.15285584768812302 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6312419974391804 },
                { start: 800, end: 1800, density: 0.3276019754892995 },
                { start: 1800, density: 0.04115602707151999 },
              ],
              percentiles: { p75: 968 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8712798977542451 },
                { start: 1800, end: 3000, density: 0.09804637575314955 },
                { start: 3000, density: 0.030673726492605344 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9403961475558787 },
                { start: 100, end: 300, density: 0.03307286934399419 },
                { start: 300, density: 0.02653098310012719 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9199193696170057 },
                { start: 2500, end: 4000, density: 0.05735752244823162 },
                { start: 4000, density: 0.02272310793476275 },
              ],
              percentiles: { p75: 1818 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1818,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280375702,
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
                  density: 0.947994799479948,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030703070307030712,
                },
                { start: "0.25", density: 0.021302130213021298 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5153484651534849 },
                { start: 200, end: 500, density: 0.3552644735526448 },
                { start: 500, density: 0.12938706129387043 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7666466706658669 },
                { start: 800, end: 1800, density: 0.1929614077184563 },
                { start: 1800, density: 0.04039192161567678 },
              ],
              percentiles: { p75: 781 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8540000000000001 },
                { start: 1800, end: 3000, density: 0.10070000000000003 },
                { start: 3000, density: 0.04529999999999979 },
              ],
              percentiles: { p75: 1450 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942005799420058 },
                { start: 100, end: 300, density: 0.0302969703029697 },
                { start: 300, density: 0.027697230276972254 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8853885388538856 },
                { start: 2500, end: 4000, density: 0.0803080308030803 },
                { start: 4000, density: 0.03430343034303404 },
              ],
              percentiles: { p75: 1824 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1450,
        lcp: 1824,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1656280376214,
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
                  density: 0.9520278099652375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03383545770567787,
                },
                { start: "0.25", density: 0.014136732329084602 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5158921399885259 },
                { start: 200, end: 500, density: 0.3647733792312109 },
                { start: 500, density: 0.11933448078026328 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.638425925925926 },
                { start: 800, end: 1800, density: 0.3222222222222222 },
                { start: 1800, density: 0.039351851851851805 },
              ],
              percentiles: { p75: 972 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8505466387531984 },
                { start: 1800, end: 3000, density: 0.11374738311235175 },
                { start: 3000, density: 0.03570597813444989 },
              ],
              percentiles: { p75: 1481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597804033894259 },
                { start: 100, end: 300, density: 0.026256116481680393 },
                { start: 300, density: 0.013963480128893653 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8849459867580439 },
                { start: 2500, end: 4000, density: 0.08659542339412239 },
                { start: 4000, density: 0.028458589847833803 },
              ],
              percentiles: { p75: 1945 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1481,
        lcp: 1945,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280376554,
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
                { start: 0, end: 2500, density: 0.9463726691166463 },
                { start: 2500, end: 4000, density: 0.04301075268817205 },
                { start: 4000, density: 0.010616578195181687 },
              ],
              percentiles: { p75: 1538 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9418573351278601,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029071332436069987,
                },
                { start: "0.25", density: 0.029071332436070033 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5925975236320066 },
                { start: 200, end: 500, density: 0.27479696445213714 },
                { start: 500, density: 0.13260551191585623 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8356257660356802 },
                { start: 800, end: 1800, density: 0.14585319351763582 },
                { start: 1800, density: 0.018521040446684 },
              ],
              percentiles: { p75: 704 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9399288451012588 },
                { start: 1800, end: 3000, density: 0.047071702244116026 },
                { start: 3000, density: 0.012999452654625182 },
              ],
              percentiles: { p75: 1208 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9370333849838005 },
                { start: 100, end: 300, density: 0.03310325397943373 },
                { start: 300, density: 0.02986336103676577 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1208,
        lcp: 1538,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1656280377079,
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
                  density: 0.9313738354546647,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04973100642960241,
                },
                { start: "0.25", density: 0.018895158115732818 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4173684210526321 },
                { start: 200, end: 500, density: 0.3975000000000004 },
                { start: 500, density: 0.1851315789473675 },
              ],
              percentiles: { p75: 402 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.581530343007916 },
                { start: 800, end: 1800, density: 0.3038258575197892 },
                { start: 1800, density: 0.11464379947229493 },
              ],
              percentiles: { p75: 1150 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6985031129950976 },
                { start: 1800, end: 3000, density: 0.17432772552655962 },
                { start: 3000, density: 0.12716916147834273 },
              ],
              percentiles: { p75: 2047 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.934105431309904 },
                { start: 100, end: 300, density: 0.04592651757188498 },
                { start: 300, density: 0.019968051118210962 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7816061489530874 },
                { start: 2500, end: 4000, density: 0.1357010336602174 },
                { start: 4000, density: 0.08269281738669519 },
              ],
              percentiles: { p75: 2365 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2047,
        lcp: 2365,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1656280377666,
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
                { start: "0.00", end: "0.10", density: 0.8012 },
                { start: "0.10", end: "0.25", density: 0.1382 },
                { start: "0.25", density: 0.060599999999999994 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7318731873187319 },
                { start: 200, end: 500, density: 0.19951995199519948 },
                { start: 500, density: 0.0686068606860686 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4135932033983007 },
                { start: 800, end: 1800, density: 0.3813093453273362 },
                { start: 1800, density: 0.2050974512743631 },
              ],
              percentiles: { p75: 1654 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6533653365336525 },
                { start: 1800, end: 3000, density: 0.20342034203420317 },
                { start: 3000, density: 0.14321432143214427 },
              ],
              percentiles: { p75: 2276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9645070985802839 },
                { start: 100, end: 300, density: 0.022895420915816835 },
                { start: 300, density: 0.012597480503899226 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7260226022602253 },
                { start: 2500, end: 4000, density: 0.15846584658465834 },
                { start: 4000, density: 0.11551155115511637 },
              ],
              percentiles: { p75: 2696 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2276,
        lcp: 2696,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1656280378262,
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
                { start: 0, end: 1800, density: 0.6102686567164168 },
                { start: 1800, end: 3000, density: 0.2182686567164175 },
                { start: 3000, density: 0.17146268656716573 },
              ],
              percentiles: { p75: 2411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472352728586917 },
                { start: 100, end: 300, density: 0.03433321286591977 },
                { start: 300, density: 0.018431514275388555 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7064088793412103 },
                { start: 2500, end: 4000, density: 0.17006802721088435 },
                { start: 4000, density: 0.12352309344790538 },
              ],
              percentiles: { p75: 2799 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9372855283398416,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021654242101526448,
                },
                { start: "0.25", density: 0.041060229558632116 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5444763271162124 },
                { start: 200, end: 500, density: 0.345169775227164 },
                { start: 500, density: 0.1103538976566236 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42995855535819977 },
                { start: 800, end: 1800, density: 0.4175251628182353 },
                { start: 1800, density: 0.1525162818235649 },
              ],
              percentiles: { p75: 1401 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2411,
        lcp: 2799,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1656280378669,
    },
  ],
};
