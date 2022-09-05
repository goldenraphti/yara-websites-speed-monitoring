export const audit25 = {
  date: "2022-05-20T16:54:56.042Z",
  dateParsedLocale: "20/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "20/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9181156739425331 },
                { start: 100, end: 300, density: 0.048218029350104816 },
                { start: 300, density: 0.03366629670736203 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7842599366008289 },
                { start: 2500, end: 4000, density: 0.14453791758107778 },
                { start: 4000, density: 0.07120214581809334 },
              ],
              percentiles: { p75: 2335 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9373558334345028,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029622435352676942,
                },
                { start: "0.25", density: 0.03302173121282019 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4012638230647707 },
                { start: 200, end: 500, density: 0.42714789160286776 },
                { start: 500, density: 0.1715882853323616 },
              ],
              percentiles: { p75: 394 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5328732292045036 },
                { start: 800, end: 1800, density: 0.377164305606005 },
                { start: 1800, density: 0.08996246518949128 },
              ],
              percentiles: { p75: 1148 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7303837692495727 },
                { start: 1800, end: 3000, density: 0.17929601564409692 },
                { start: 3000, density: 0.09032021510633043 },
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
        lcp: 2335,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1653064483461,
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
                { start: 0, end: 100, density: 0.9381287726358147 },
                { start: 100, end: 300, density: 0.03659456740442656 },
                { start: 300, density: 0.025276659959758592 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8820323267760927 },
                { start: 2500, end: 4000, density: 0.07900012529758171 },
                { start: 4000, density: 0.038967547926325605 },
              ],
              percentiles: { p75: 1758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9348205383848454,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03713858424725823,
                },
                { start: "0.25", density: 0.02804087736789631 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49387254901960764 },
                { start: 200, end: 500, density: 0.37757352941176453 },
                { start: 500, density: 0.12855392156862774 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7843777470802463 },
                { start: 800, end: 1800, density: 0.1739294235840764 },
                { start: 1800, density: 0.04169282933567734 },
              ],
              percentiles: { p75: 754 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8660658405307299 },
                { start: 1800, end: 3000, density: 0.08737013393415947 },
                { start: 3000, density: 0.046564025535110756 },
              ],
              percentiles: { p75: 1388 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1388,
        lcp: 1758,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064484114,
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
                { start: 0, end: 200, density: 0.6496733882419767 },
                { start: 200, end: 500, density: 0.257455268389662 },
                { start: 500, density: 0.09287134336836135 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6897311591009255 },
                { start: 800, end: 1800, density: 0.28353165858674895 },
                { start: 1800, density: 0.02673718231232538 },
              ],
              percentiles: { p75: 896 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8965617292905848 },
                { start: 1800, end: 3000, density: 0.08312781082257362 },
                { start: 3000, density: 0.020310459886841607 },
              ],
              percentiles: { p75: 1352 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9579718815435239 },
                { start: 100, end: 300, density: 0.02108884235716423 },
                { start: 300, density: 0.020939276099311916 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9178230702515179 },
                { start: 2500, end: 4000, density: 0.06425267418328999 },
                { start: 4000, density: 0.017924255565192056 },
              ],
              percentiles: { p75: 1739 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9462673735492191,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038830778048431006,
                },
                { start: "0.25", density: 0.014901848402349899 },
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
        fcp: 1352,
        lcp: 1739,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064484546,
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
                { start: 0, end: 1800, density: 0.8626634958382877 },
                { start: 1800, end: 3000, density: 0.10126833135156557 },
                { start: 3000, density: 0.03606817281014669 },
              ],
              percentiles: { p75: 1453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9327715355805245 },
                { start: 100, end: 300, density: 0.030524344569288393 },
                { start: 300, density: 0.036704119850187074 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8692460317460319 },
                { start: 2500, end: 4000, density: 0.09742063492063498 },
                { start: 4000, density: 0.033333333333333104 },
              ],
              percentiles: { p75: 2008 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9608110742834861,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02339637356209788,
                },
                { start: "0.25", density: 0.015792552154416082 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.511170011359334 },
                { start: 200, end: 500, density: 0.3231730405149566 },
                { start: 500, density: 0.16565694812570939 },
              ],
              percentiles: { p75: 339 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6733280569845668 },
                { start: 800, end: 1800, density: 0.2892758211317768 },
                { start: 1800, density: 0.0373961218836564 },
              ],
              percentiles: { p75: 937 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1453,
        lcp: 2008,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064484936,
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
                  density: 0.9486103828002098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029015906310085646,
                },
                { start: "0.25", density: 0.022373710889704586 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5498998664886521 },
                { start: 200, end: 500, density: 0.3179238985313755 },
                { start: 500, density: 0.13217623497997233 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7394670507742167 },
                { start: 800, end: 1800, density: 0.23964710118833274 },
                { start: 1800, density: 0.020885848037450545 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9000533523030411 },
                { start: 1800, end: 3000, density: 0.07949493153121111 },
                { start: 3000, density: 0.020451716165747827 },
              ],
              percentiles: { p75: 1368 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9058407079646017 },
                { start: 100, end: 300, density: 0.03716814159292035 },
                { start: 300, density: 0.05699115044247798 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.892149866190901 },
                { start: 2500, end: 4000, density: 0.08679750223015162 },
                { start: 4000, density: 0.021052631578947382 },
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
        fcp: 1368,
        lcp: 1911,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064485331,
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
                  density: 0.8779536862003782,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0923913043478261,
                },
                { start: "0.25", density: 0.029655009451795823 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5763799743260594 },
                { start: 200, end: 500, density: 0.31578947368421073 },
                { start: 500, density: 0.10783055198972996 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5961425379277904 },
                { start: 800, end: 1800, density: 0.35987298600493955 },
                { start: 1800, density: 0.043984476067270004 },
              ],
              percentiles: { p75: 992 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7861538461538458 },
                { start: 1800, end: 3000, density: 0.15999999999999992 },
                { start: 3000, density: 0.0538461538461543 },
              ],
              percentiles: { p75: 1711 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554117224020136 },
                { start: 100, end: 300, density: 0.02553038475368572 },
                { start: 300, density: 0.0190578928443007 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.821572104018912 },
                { start: 2500, end: 4000, density: 0.13020094562647747 },
                { start: 4000, density: 0.048226950354610464 },
              ],
              percentiles: { p75: 2183 },
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
        lcp: 2183,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064485773,
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
                { start: 0, end: 1800, density: 0.8204142378767211 },
                { start: 1800, end: 3000, density: 0.11596180081855394 },
                { start: 3000, density: 0.06362396130472511 },
              ],
              percentiles: { p75: 1542 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9470008729267988 },
                { start: 100, end: 300, density: 0.03666292555181444 },
                { start: 300, density: 0.016336201521386668 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8481389578163769 },
                { start: 2500, end: 4000, density: 0.1050868486352357 },
                { start: 4000, density: 0.04677419354838751 },
              ],
              percentiles: { p75: 1960 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9778079151769203,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.00924670200961657,
                },
                { start: "0.25", density: 0.01294538281346319 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5562484715089263 },
                { start: 200, end: 500, density: 0.3504524333577892 },
                { start: 500, density: 0.09329909513328445 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6898898651157036 },
                { start: 800, end: 1800, density: 0.25652765746813516 },
                { start: 1800, density: 0.05358247741616132 },
              ],
              percentiles: { p75: 896 },
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
        lcp: 1960,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064486185,
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
                { start: 0, end: 1800, density: 0.8215530114484817 },
                { start: 1800, end: 3000, density: 0.13974614235938274 },
                { start: 3000, density: 0.038700846192135464 },
              ],
              percentiles: { p75: 1590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642081043078103 },
                { start: 100, end: 300, density: 0.02403170139332737 },
                { start: 300, density: 0.011760194298862325 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8580316038322758 },
                { start: 2500, end: 4000, density: 0.11235535647629709 },
                { start: 4000, density: 0.02961303969142715 },
              ],
              percentiles: { p75: 2024 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9427617752503399,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04574112992953393,
                },
                { start: "0.25", density: 0.011497094820126091 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5491843194545898 },
                { start: 200, end: 500, density: 0.3466033601168737 },
                { start: 500, density: 0.10421232042853648 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5844042420461635 },
                { start: 800, end: 1800, density: 0.3701809107922645 },
                { start: 1800, density: 0.04541484716157201 },
              ],
              percentiles: { p75: 1046 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1590,
        lcp: 2024,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064486640,
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
                { start: 0, end: 100, density: 0.9596453336364668 },
                { start: 100, end: 300, density: 0.021143571672160962 },
                { start: 300, density: 0.019211094691372166 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8629123361952102 },
                { start: 2500, end: 4000, density: 0.10059873474920919 },
                { start: 4000, density: 0.03648892905558056 },
              ],
              percentiles: { p75: 1956 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9341647005954387,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058195708347376696,
                },
                { start: "0.25", density: 0.007639591057184586 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6199641897940911 },
                { start: 200, end: 500, density: 0.30371530886302595 },
                { start: 500, density: 0.07632050134288293 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5632417768735166 },
                { start: 800, end: 1800, density: 0.38736294789194087 },
                { start: 1800, density: 0.049395275234542534 },
              ],
              percentiles: { p75: 1022 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8523330697096367 },
                { start: 1800, end: 3000, density: 0.10631567054570093 },
                { start: 3000, density: 0.041351259744662305 },
              ],
              percentiles: { p75: 1522 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1522,
        lcp: 1956,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064487045,
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
                  density: 0.9667802385008518,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01767461669505963,
                },
                { start: "0.25", density: 0.01554514480408859 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6512586805555552 },
                { start: 200, end: 500, density: 0.2610677083333333 },
                { start: 500, density: 0.0876736111111115 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37377122430741716 },
                { start: 800, end: 1800, density: 0.5205540661304733 },
                { start: 1800, density: 0.1056747095621095 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6161395856052343 },
                { start: 1800, end: 3000, density: 0.26237731733914943 },
                { start: 3000, density: 0.12148309705561622 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521206821163096 },
                { start: 100, end: 300, density: 0.033887188456493224 },
                { start: 300, density: 0.013992129427197166 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7209604153147302 },
                { start: 2500, end: 4000, density: 0.20484533852476736 },
                { start: 4000, density: 0.07419424616050255 },
              ],
              percentiles: { p75: 2698 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2698,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064487534,
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
                { start: 0, end: 100, density: 0.9570000000000001 },
                { start: 100, end: 300, density: 0.0299 },
                { start: 300, density: 0.013099999999999971 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8493301339732053 },
                { start: 2500, end: 4000, density: 0.10117976404719055 },
                { start: 4000, density: 0.04949010197960414 },
              ],
              percentiles: { p75: 1967 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9580958095809581,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028102810281028106,
                },
                { start: "0.25", density: 0.013801380138013812 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6303109067279816 },
                { start: 200, end: 500, density: 0.28911326602019394 },
                { start: 500, density: 0.0805758272518245 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.712685074029612 },
                { start: 800, end: 1800, density: 0.23909563825530214 },
                { start: 1800, density: 0.04821928771508596 },
              ],
              percentiles: { p75: 868 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8385322935412917 },
                { start: 1800, end: 3000, density: 0.10277944411117775 },
                { start: 3000, density: 0.05868826234753064 },
              ],
              percentiles: { p75: 1457 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1457,
        lcp: 1967,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653064488040,
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
                { start: 0, end: 100, density: 0.9796770601336303 },
                { start: 100, end: 300, density: 0.014476614699331852 },
                { start: 300, density: 0.005846325167037863 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7577516906979718 },
                { start: 2500, end: 4000, density: 0.1614776062268726 },
                { start: 4000, density: 0.0807707030751555 },
              ],
              percentiles: { p75: 2497 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.966530923899211,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018579791295495036,
                },
                { start: "0.25", density: 0.014889284805293968 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6100472519273813 },
                { start: 200, end: 500, density: 0.3464312360109426 },
                { start: 500, density: 0.0435215120616761 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38768441308531115 },
                { start: 800, end: 1800, density: 0.5214881334188585 },
                { start: 1800, density: 0.09082745349583041 },
              ],
              percentiles: { p75: 1172 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6323811963622388 },
                { start: 1800, end: 3000, density: 0.2602792365825541 },
                { start: 3000, density: 0.10733956705520721 },
              ],
              percentiles: { p75: 2132 },
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
        lcp: 2497,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064488384,
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
                  density: 0.8462469733656174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09916354831609067,
                },
                { start: "0.25", density: 0.054589478318291876 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6493635860542335 },
                { start: 200, end: 500, density: 0.2627559490868843 },
                { start: 500, density: 0.08788046485888222 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46460919154646046 },
                { start: 800, end: 1800, density: 0.4193223750419316 },
                { start: 1800, density: 0.11606843341160801 },
              ],
              percentiles: { p75: 1299 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7054228966748486 },
                { start: 1800, end: 3000, density: 0.18712340995313528 },
                { start: 3000, density: 0.10745369337201621 },
              ],
              percentiles: { p75: 2029 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521979884732736 },
                { start: 100, end: 300, density: 0.0358232568651825 },
                { start: 300, density: 0.01197875466154371 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7713387737097482 },
                { start: 2500, end: 4000, density: 0.13878473753859719 },
                { start: 4000, density: 0.0898764887516546 },
              ],
              percentiles: { p75: 2404 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2029,
        lcp: 2404,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653064488834,
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
                  density: 0.9354292623941959,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025634824667472796,
                },
                { start: "0.25", density: 0.03893591293833133 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4809019221291282 },
                { start: 200, end: 500, density: 0.354484967964515 },
                { start: 500, density: 0.16461310990635689 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4410512227764933 },
                { start: 800, end: 1800, density: 0.4410512227764933 },
                { start: 1800, density: 0.11789755444701351 },
              ],
              percentiles: { p75: 1278 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6159279103750603 },
                { start: 1800, end: 3000, density: 0.2357525572333169 },
                { start: 3000, density: 0.1483195323916229 },
              ],
              percentiles: { p75: 2330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9535059060065342 },
                { start: 100, end: 300, density: 0.0309122895199799 },
                { start: 300, density: 0.015581804473485882 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7135454767129971 },
                { start: 2500, end: 4000, density: 0.16782492075103628 },
                { start: 4000, density: 0.11862960253596673 },
              ],
              percentiles: { p75: 2729 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2330,
        lcp: 2729,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064489264,
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
                { start: 0, end: 800, density: 0.6202341639147397 },
                { start: 800, end: 1800, density: 0.2886020214149902 },
                { start: 1800, density: 0.09116381467027011 },
              ],
              percentiles: { p75: 1086 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7631289386816038 },
                { start: 1800, end: 3000, density: 0.1466439931979593 },
                { start: 3000, density: 0.09022706812043702 },
              ],
              percentiles: { p75: 1752 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757 },
                { start: 100, end: 300, density: 0.018199999999999997 },
                { start: 300, density: 0.006099999999999976 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7847138855542211 },
                { start: 2500, end: 4000, density: 0.13265306122448967 },
                { start: 4000, density: 0.08263305322128921 },
              ],
              percentiles: { p75: 2304 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.828865773154631,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14122824564912984,
                },
                { start: "0.25", density: 0.029905981196239228 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8038803880388038 },
                { start: 200, end: 500, density: 0.13841384138413843 },
                { start: 500, density: 0.05770577057705772 },
              ],
              percentiles: { p75: 170 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1752,
        lcp: 2304,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653064489668,
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
                  density: 0.9376829778335424,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02481527952042381,
                },
                { start: "0.25", density: 0.03750174264603372 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6244084325254552 },
                { start: 200, end: 500, density: 0.3256847841675031 },
                { start: 500, density: 0.04990678330704174 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26409537166900393 },
                { start: 800, end: 1800, density: 0.5555399719495088 },
                { start: 1800, density: 0.18036465638148733 },
              ],
              percentiles: { p75: 1610 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4645425066967426 },
                { start: 1800, end: 3000, density: 0.34682080924855446 },
                { start: 3000, density: 0.18863668405470294 },
              ],
              percentiles: { p75: 2706 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9693351024620375 },
                { start: 100, end: 300, density: 0.02358838272150966 },
                { start: 300, density: 0.007076514816452903 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6247360270308316 },
                { start: 2500, end: 4000, density: 0.2637617907926225 },
                { start: 4000, density: 0.11150218217654585 },
              ],
              percentiles: { p75: 3051 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2706,
        lcp: 3051,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064489971,
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
                { start: 0, end: 800, density: 0.3141371725654866 },
                { start: 800, end: 1800, density: 0.5293941211757643 },
                { start: 1800, density: 0.156468706258749 },
              ],
              percentiles: { p75: 1497 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5368999999999987 },
                { start: 1800, end: 3000, density: 0.2881999999999994 },
                { start: 3000, density: 0.17490000000000186 },
              ],
              percentiles: { p75: 2579 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663101069679096 },
                { start: 100, end: 300, density: 0.024092772168349492 },
                { start: 300, density: 0.009597120863740864 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6519544136758965 },
                { start: 2500, end: 4000, density: 0.22518244526641984 },
                { start: 4000, density: 0.12286314105768376 },
              ],
              percentiles: { p75: 2977 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9052 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046000000000000006,
                },
                { start: "0.25", density: 0.048799999999999996 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.637736226377363 },
                { start: 200, end: 500, density: 0.28447155284471576 },
                { start: 500, density: 0.07779222077792128 },
              ],
              percentiles: { p75: 255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2579,
        lcp: 2977,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1653064490349,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8980601939806018 },
                { start: 2500, end: 4000, density: 0.07704229577042297 },
                { start: 4000, density: 0.024897510248975196 },
              ],
              percentiles: { p75: 1785 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8182818281828182,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15931593159315932,
                },
                { start: "0.25", density: 0.02240224022402241 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7406259374062597 },
                { start: 200, end: 500, density: 0.17208279172082794 },
                { start: 500, density: 0.08729127087291234 },
              ],
              percentiles: { p75: 208 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7133000000000002 },
                { start: 800, end: 1800, density: 0.24549999999999997 },
                { start: 1800, density: 0.041199999999999896 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8929892989298929 },
                { start: 1800, end: 3000, density: 0.07590759075907591 },
                { start: 3000, density: 0.031103110311031232 },
              ],
              percentiles: { p75: 1314 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9740025997400259 },
                { start: 100, end: 300, density: 0.016798320167983202 },
                { start: 300, density: 0.00919908009199082 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1314, lcp: 1785, cls: "0.08", fid: 9 },
      timestamp: 1653064490626,
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
                { start: "0.00", end: "0.10", density: 0.8889 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08349999999999999,
                },
                { start: "0.25", density: 0.02759999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6095999999999998 },
                { start: 200, end: 500, density: 0.29019999999999985 },
                { start: 500, density: 0.10020000000000029 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.606657337065174 },
                { start: 800, end: 1800, density: 0.35145941623350674 },
                { start: 1800, density: 0.04188324670131932 },
              ],
              percentiles: { p75: 978 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7946205379462049 },
                { start: 1800, end: 3000, density: 0.15378462153784614 },
                { start: 3000, density: 0.051594840515948856 },
              ],
              percentiles: { p75: 1688 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9590959095909589 },
                { start: 100, end: 300, density: 0.023902390239023904 },
                { start: 300, density: 0.017001700170017144 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8143685631436856 },
                { start: 2500, end: 4000, density: 0.13423657634236572 },
                { start: 4000, density: 0.05139486051394883 },
              ],
              percentiles: { p75: 2210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1688,
        lcp: 2210,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064490898,
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
                { start: 0, end: 100, density: 0.9300209937018895 },
                { start: 100, end: 300, density: 0.024792562231330594 },
                { start: 300, density: 0.045186444066779935 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6351405421626487 },
                { start: 2500, end: 4000, density: 0.26723016905071517 },
                { start: 4000, density: 0.0976292887866362 },
              ],
              percentiles: { p75: 3034 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8291 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08460000000000002,
                },
                { start: "0.25", density: 0.08630000000000007 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5885000000000001 },
                { start: 200, end: 500, density: 0.2507000000000001 },
                { start: 500, density: 0.16079999999999964 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29167083291670814 },
                { start: 800, end: 1800, density: 0.4584541545845414 },
                { start: 1800, density: 0.24987501249875052 },
              ],
              percentiles: { p75: 1863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5274945010997799 },
                { start: 1800, end: 3000, density: 0.33883223355328923 },
                { start: 3000, density: 0.13367326534693091 },
              ],
              percentiles: { p75: 2554 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2554,
        lcp: 3034,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653064491176,
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
                { start: 0, end: 100, density: 0.967 },
                { start: 100, end: 300, density: 0.019200000000000002 },
                { start: 300, density: 0.013799999999999965 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8819763952790555 },
                { start: 2500, end: 4000, density: 0.08781756351270256 },
                { start: 4000, density: 0.03020604120824195 },
              ],
              percentiles: { p75: 1880 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.958095809580958,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030503050305030498,
                },
                { start: "0.25", density: 0.011401140114011403 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6735020506151846 },
                { start: 200, end: 500, density: 0.25877763328998704 },
                { start: 500, density: 0.0677203160948283 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.600180054016205 },
                { start: 800, end: 1800, density: 0.35740722216665 },
                { start: 1800, density: 0.04241272381714497 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8656865686568656 },
                { start: 1800, end: 3000, density: 0.10091009100910087 },
                { start: 3000, density: 0.03340334033403361 },
              ],
              percentiles: { p75: 1454 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1454,
        lcp: 1880,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653064491449,
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
                  density: 0.9612285413990425,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016582973257036088,
                },
                { start: "0.25", density: 0.022188485343921517 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4997683039851715 },
                { start: 200, end: 500, density: 0.37859128822984245 },
                { start: 500, density: 0.12164040778498611 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22504984167937137 },
                { start: 800, end: 1800, density: 0.521637152574176 },
                { start: 1800, density: 0.25331300574645266 },
              ],
              percentiles: { p75: 1853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36405421331762006 },
                { start: 1800, end: 3000, density: 0.32480848556275843 },
                { start: 3000, density: 0.3111373011196215 },
              ],
              percentiles: { p75: 3456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651646653192248 },
                { start: 100, end: 300, density: 0.02544287242896207 },
                { start: 300, density: 0.009392462251813104 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4842482661337723 },
                { start: 2500, end: 4000, density: 0.3108616433525332 },
                { start: 4000, density: 0.2048900905136945 },
              ],
              percentiles: { p75: 3799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3456,
        lcp: 3799,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653064491783,
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
                { start: 0, end: 1800, density: 0.5254949010197951 },
                { start: 1800, end: 3000, density: 0.31793641271745604 },
                { start: 3000, density: 0.15656868626274878 },
              ],
              percentiles: { p75: 2519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784021597840216 },
                { start: 100, end: 300, density: 0.015998400159984 },
                { start: 300, density: 0.005599440055994403 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.649699999999999 },
                { start: 2500, end: 4000, density: 0.23119999999999963 },
                { start: 4000, density: 0.11910000000000144 },
              ],
              percentiles: { p75: 3020 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8373162683731626,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0923907609239076,
                },
                { start: "0.25", density: 0.07029297070292971 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7159999999999997 },
                { start: 200, end: 500, density: 0.23829999999999998 },
                { start: 500, density: 0.04570000000000023 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2952885865759727 },
                { start: 800, end: 1800, density: 0.5526657997399219 },
                { start: 1800, density: 0.15204561368410552 },
              ],
              percentiles: { p75: 1545 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2519,
        lcp: 3020,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1653064492188,
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
                  density: 0.9335472656772296,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019655034095467306,
                },
                { start: "0.25", density: 0.04679770022730309 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6550981974710788 },
                { start: 200, end: 500, density: 0.29365079365079366 },
                { start: 500, density: 0.05125100887812747 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45382944052145574 },
                { start: 800, end: 1800, density: 0.4125475285171102 },
                { start: 1800, density: 0.1336230309614341 },
              ],
              percentiles: { p75: 1370 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6654501216545013 },
                { start: 1800, end: 3000, density: 0.19951338199513388 },
                { start: 3000, density: 0.13503649635036477 },
              ],
              percentiles: { p75: 2190 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656258559298823 },
                { start: 100, end: 300, density: 0.026568063544234456 },
                { start: 300, density: 0.007806080525883323 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7174177010253641 },
                { start: 2500, end: 4000, density: 0.1550863464651915 },
                { start: 4000, density: 0.12749595250944434 },
              ],
              percentiles: { p75: 2769 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2190,
        lcp: 2769,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064492452,
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
                { start: 0, end: 100, density: 0.9456945694569455 },
                { start: 100, end: 300, density: 0.022102210221022097 },
                { start: 300, density: 0.03220322032203225 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9076277116864943 },
                { start: 2500, end: 4000, density: 0.07137858642407278 },
                { start: 4000, density: 0.020993701889433 },
              ],
              percentiles: { p75: 1783 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7625 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16400000000000003,
                },
                { start: "0.25", density: 0.07350000000000002 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7132573485302943 },
                { start: 200, end: 500, density: 0.20365926814637078 },
                { start: 500, density: 0.08308338332333486 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7831216878312168 },
                { start: 800, end: 1800, density: 0.19778022197780226 },
                { start: 1800, density: 0.01909809019098085 },
              ],
              percentiles: { p75: 796 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9202760828248474 },
                { start: 1800, end: 3000, density: 0.06281884565369611 },
                { start: 3000, density: 0.016905071521456434 },
              ],
              percentiles: { p75: 1248 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1248,
        lcp: 1783,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1653064492831,
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
                { start: 0, end: 2500, density: 0.6973115698511753 },
                { start: 2500, end: 4000, density: 0.16826692270763302 },
                { start: 4000, density: 0.13442150744119172 },
              ],
              percentiles: { p75: 2848 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9370612730517549,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022248661511005356,
                },
                { start: "0.25", density: 0.040690065437239735 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5756191392161583 },
                { start: 200, end: 500, density: 0.32916566482327525 },
                { start: 500, density: 0.09521519596056653 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4311004784688994 },
                { start: 800, end: 1800, density: 0.42607655502392344 },
                { start: 1800, density: 0.14282296650717713 },
              ],
              percentiles: { p75: 1387 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6056506644319397 },
                { start: 1800, end: 3000, density: 0.22470968514306205 },
                { start: 3000, density: 0.16963965042499815 },
              ],
              percentiles: { p75: 2453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443161094224926 },
                { start: 100, end: 300, density: 0.03367781155015198 },
                { start: 300, density: 0.022006079027355366 },
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
        fcp: 2453,
        lcp: 2848,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064493092,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48099211868335623 },
                { start: 800, end: 1800, density: 0.4160871580899395 },
                { start: 1800, density: 0.10292072322670416 },
              ],
              percentiles: { p75: 1237 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6800701344243129 },
                { start: 1800, end: 3000, density: 0.22045587375803613 },
                { start: 3000, density: 0.09947399181765104 },
              ],
              percentiles: { p75: 2056 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.933528122717312 },
                { start: 100, end: 300, density: 0.03700998295592891 },
                { start: 300, density: 0.029461894326759178 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7280351906158352 },
                { start: 2500, end: 4000, density: 0.17225806451612885 },
                { start: 4000, density: 0.09970674486803598 },
              ],
              percentiles: { p75: 2608 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7848647388059702,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17863805970149257,
                },
                { start: "0.25", density: 0.03649720149253728 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5937755937755939 },
                { start: 200, end: 500, density: 0.27155727155727155 },
                { start: 500, density: 0.1346671346671346 },
              ],
              percentiles: { p75: 303 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2056,
        lcp: 2608,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1653064493544,
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
                { start: 0, end: 800, density: 0.520747925207479 },
                { start: 800, end: 1800, density: 0.3975602439756023 },
                { start: 1800, density: 0.08169183081691851 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7277911164465788 },
                { start: 1800, end: 3000, density: 0.17847138855542224 },
                { start: 3000, density: 0.0937374949979989 },
              ],
              percentiles: { p75: 1989 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756 },
                { start: 100, end: 300, density: 0.018 },
                { start: 300, density: 0.006399999999999983 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7457245724572468 },
                { start: 2500, end: 4000, density: 0.16846684668466866 },
                { start: 4000, density: 0.08580858085808464 },
              ],
              percentiles: { p75: 2641 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.766 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17170000000000002,
                },
                { start: "0.25", density: 0.062299999999999946 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8104241696678669 },
                { start: 200, end: 500, density: 0.13575430172068823 },
                { start: 500, density: 0.053821528611444784 },
              ],
              percentiles: { p75: 176 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1989, lcp: 2641, cls: "0.08", fid: 9 },
      timestamp: 1653064494025,
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
                { start: "0.00", end: "0.10", density: 0.9048 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08470000000000001,
                },
                { start: "0.25", density: 0.010500000000000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6574972491747523 },
                { start: 200, end: 500, density: 0.27278183455036503 },
                { start: 500, density: 0.06972091627488267 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5774154830966195 },
                { start: 800, end: 1800, density: 0.37567513502700545 },
                { start: 1800, density: 0.046909381876375104 },
              ],
              percentiles: { p75: 1013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8587141285871406 },
                { start: 1800, end: 3000, density: 0.1021897810218977 },
                { start: 3000, density: 0.039096090390961506 },
              ],
              percentiles: { p75: 1498 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9645070985802838 },
                { start: 100, end: 300, density: 0.01859628074385123 },
                { start: 300, density: 0.016896620675864924 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8639272145570888 },
                { start: 2500, end: 4000, density: 0.09998000399920016 },
                { start: 4000, density: 0.03609278144371104 },
              ],
              percentiles: { p75: 1959 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1498,
        lcp: 1959,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1653064494302,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6563687262547492 },
                { start: 200, end: 500, density: 0.2759448110377926 },
                { start: 500, density: 0.0676864627074582 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4413117376524691 },
                { start: 800, end: 1800, density: 0.44501099780043946 },
                { start: 1800, density: 0.11367726454709139 },
              ],
              percentiles: { p75: 1302 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6157 },
                { start: 1800, end: 3000, density: 0.24780000000000005 },
                { start: 3000, density: 0.13649999999999998 },
              ],
              percentiles: { p75: 2334 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9730053989202159 },
                { start: 100, end: 300, density: 0.01989602079584083 },
                { start: 300, density: 0.00709858028394321 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000100030008994 },
                { start: 2500, end: 4000, density: 0.1916574972491746 },
                { start: 4000, density: 0.108332499749926 },
              ],
              percentiles: { p75: 2809 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9258074192580741,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048895110488951114,
                },
                { start: "0.25", density: 0.025297470252974692 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2334,
        lcp: 2809,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653064494577,
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
                { start: "0.00", end: "0.10", density: 0.8598 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11009999999999999,
                },
                { start: "0.25", density: 0.03009999999999999 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7174000000000003 },
                { start: 200, end: 500, density: 0.20560000000000003 },
                { start: 500, density: 0.07699999999999971 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7204440888177635 },
                { start: 800, end: 1800, density: 0.2552510502100421 },
                { start: 1800, density: 0.024304860972194444 },
              ],
              percentiles: { p75: 847 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9092909290929091 },
                { start: 1800, end: 3000, density: 0.07180718071807181 },
                { start: 3000, density: 0.018901890189019062 },
              ],
              percentiles: { p75: 1270 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9674902470741221 },
                { start: 100, end: 300, density: 0.01610483144943483 },
                { start: 300, density: 0.01640492147644305 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9135327065413081 },
                { start: 2500, end: 4000, density: 0.06716343268653728 },
                { start: 4000, density: 0.019303860772154634 },
              ],
              percentiles: { p75: 1736 },
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
        lcp: 1736,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653064494846,
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
                { start: 0, end: 200, density: 0.6908914728682168 },
                { start: 200, end: 500, density: 0.2558139534883721 },
                { start: 500, density: 0.053294573643410975 },
              ],
              percentiles: { p75: 227 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38749848869544135 },
                { start: 800, end: 1800, density: 0.47600048361745806 },
                { start: 1800, density: 0.1365010276871007 },
              ],
              percentiles: { p75: 1374 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5847167968749989 },
                { start: 1800, end: 3000, density: 0.27062988281249956 },
                { start: 3000, density: 0.1446533203125015 },
              ],
              percentiles: { p75: 2363 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696056267269529 },
                { start: 100, end: 300, density: 0.024114544084400898 },
                { start: 300, density: 0.006279829188646061 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7193508879363126 },
                { start: 2500, end: 4000, density: 0.1638089406001223 },
                { start: 4000, density: 0.11684017146356517 },
              ],
              percentiles: { p75: 2703 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9703210175651121,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015748031496062992,
                },
                { start: "0.25", density: 0.013930950938824961 },
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
        fcp: 2363,
        lcp: 2703,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064495101,
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
                  density: 0.8835383714118337,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08107791446983013,
                },
                { start: "0.25", density: 0.03538371411833627 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.792741935483871 },
                { start: 200, end: 500, density: 0.16843317972350227 },
                { start: 500, density: 0.03882488479262675 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6502803961341128 },
                { start: 800, end: 1800, density: 0.31237322515212973 },
                { start: 1800, density: 0.03734637871375742 },
              ],
              percentiles: { p75: 967 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8497421472105019 },
                { start: 1800, end: 3000, density: 0.11322081575246137 },
                { start: 3000, density: 0.03703703703703675 },
              ],
              percentiles: { p75: 1371 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8930418429713209 },
                { start: 2500, end: 4000, density: 0.0807475317348378 },
                { start: 4000, density: 0.02621062529384116 },
              ],
              percentiles: { p75: 1695 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1371, lcp: 1695, cls: "0.01" },
      timestamp: 1653064495554,
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
                  density: 0.9407825630252101,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029149159663865554,
                },
                { start: "0.25", density: 0.030068277310924353 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4910449684319031 },
                { start: 200, end: 500, density: 0.31233088519520674 },
                { start: 500, density: 0.19662414637289016 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28852064679941225 },
                { start: 800, end: 1800, density: 0.4424695977549114 },
                { start: 1800, density: 0.26900975544567646 },
              ],
              percentiles: { p75: 1911 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4903035976996122 },
                { start: 1800, end: 3000, density: 0.36846328741473866 },
                { start: 3000, density: 0.1412331148856492 },
              ],
              percentiles: { p75: 2620 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9118472018164819 },
                { start: 100, end: 300, density: 0.03312408174168558 },
                { start: 300, density: 0.05502871644183247 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6135156664896444 },
                { start: 2500, end: 4000, density: 0.2875730217737653 },
                { start: 4000, density: 0.09891131173659028 },
              ],
              percentiles: { p75: 3068 },
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
        lcp: 3068,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653064495982,
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
                  density: 0.9725690890481063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.00511770726714432,
                },
                { start: "0.25", density: 0.022313203684749244 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6711843202668891 },
                { start: 200, end: 500, density: 0.26522101751459537 },
                { start: 500, density: 0.06359466221851542 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.319828990228013 },
                { start: 800, end: 1800, density: 0.4609120521172638 },
                { start: 1800, density: 0.21925895765472317 },
              ],
              percentiles: { p75: 1672 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5425952926473653 },
                { start: 1800, end: 3000, density: 0.3086856904811499 },
                { start: 3000, density: 0.14871901687148478 },
              ],
              percentiles: { p75: 2612 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554329371816638 },
                { start: 100, end: 300, density: 0.012521222410865875 },
                { start: 300, density: 0.03204584040747029 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6783728115345004 },
                { start: 2500, end: 4000, density: 0.23079299691040156 },
                { start: 4000, density: 0.09083419155509813 },
              ],
              percentiles: { p75: 2910 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2612,
        lcp: 2910,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064496372,
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
                { start: 0, end: 200, density: 0.6711 },
                { start: 200, end: 500, density: 0.29 },
                { start: 500, density: 0.038899999999999914 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4167166566686663 },
                { start: 800, end: 1800, density: 0.4996000799840033 },
                { start: 1800, density: 0.08368326334733038 },
              ],
              percentiles: { p75: 1169 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6579999999999995 },
                { start: 1800, end: 3000, density: 0.24139999999999978 },
                { start: 3000, density: 0.10060000000000077 },
              ],
              percentiles: { p75: 2107 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9853985398539854 },
                { start: 100, end: 300, density: 0.010401040104010403 },
                { start: 300, density: 0.004200420042004201 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7389977995599126 },
                { start: 2500, end: 4000, density: 0.15438087617523524 },
                { start: 4000, density: 0.10662132426485214 },
              ],
              percentiles: { p75: 2641 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9287071292870713,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05539446055394461,
                },
                { start: "0.25", density: 0.015898410158984105 },
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
        fcp: 2107,
        lcp: 2641,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1653064496771,
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
                { start: 0, end: 200, density: 0.5510306183710237 },
                { start: 200, end: 500, density: 0.30328196918150946 },
                { start: 500, density: 0.14568741244746683 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45263579073722104 },
                { start: 800, end: 1800, density: 0.43363008902670797 },
                { start: 1800, density: 0.11373412023607106 },
              ],
              percentiles: { p75: 1257 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6296889066720022 },
                { start: 1800, end: 3000, density: 0.2257677303190959 },
                { start: 3000, density: 0.14454336300890194 },
              ],
              percentiles: { p75: 2283 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9581999999999998 },
                { start: 100, end: 300, density: 0.027099999999999996 },
                { start: 300, density: 0.014700000000000053 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7066706670667073 },
                { start: 2500, end: 4000, density: 0.16631663166316643 },
                { start: 4000, density: 0.1270127012701262 },
              ],
              percentiles: { p75: 2779 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8721 },
                { start: "0.10", end: "0.25", density: 0.0762 },
                { start: "0.25", density: 0.051700000000000045 },
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
        fcp: 2283,
        lcp: 2779,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064497040,
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
                  density: 0.913008699130087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05879412058794121,
                },
                { start: "0.25", density: 0.028197180281971806 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6366000000000003 },
                { start: 200, end: 500, density: 0.2980000000000001 },
                { start: 500, density: 0.0653999999999996 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3209641928385679 },
                { start: 800, end: 1800, density: 0.473594718943789 },
                { start: 1800, density: 0.20544108821764318 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5343534353435341 },
                { start: 1800, end: 3000, density: 0.291129112911291 },
                { start: 3000, density: 0.1745174517451749 },
              ],
              percentiles: { p75: 2603 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9725945189037808 },
                { start: 100, end: 300, density: 0.021304260852170433 },
                { start: 300, density: 0.006101220244048814 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.64247150569886 },
                { start: 2500, end: 4000, density: 0.21385722855428907 },
                { start: 4000, density: 0.14367126574685085 },
              ],
              percentiles: { p75: 3073 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2603,
        lcp: 3073,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1653064497319,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36673667366736673 },
                { start: 800, end: 1800, density: 0.42984298429842976 },
                { start: 1800, density: 0.20342034203420348 },
              ],
              percentiles: { p75: 1650 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6297740451909601 },
                { start: 1800, end: 3000, density: 0.21255748850229894 },
                { start: 3000, density: 0.157668466306741 },
              ],
              percentiles: { p75: 2464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9584 },
                { start: 100, end: 300, density: 0.0237 },
                { start: 300, density: 0.017899999999999975 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6798820117988194 },
                { start: 2500, end: 4000, density: 0.19293070692930683 },
                { start: 4000, density: 0.12718728127187387 },
              ],
              percentiles: { p75: 2923 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8058 },
                { start: "0.10", end: "0.25", density: 0.1309 },
                { start: "0.25", density: 0.06330000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7614477104579084 },
                { start: 200, end: 500, density: 0.18036392721455707 },
                { start: 500, density: 0.058188362327534555 },
              ],
              percentiles: { p75: 194 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2464,
        lcp: 2923,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1653064497652,
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
                { start: 0, end: 1800, density: 0.719071907190718 },
                { start: 1800, end: 3000, density: 0.17601760176017572 },
                { start: 3000, density: 0.10491049104910628 },
              ],
              percentiles: { p75: 1961 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9567870361108333 },
                { start: 100, end: 300, density: 0.03230969290787236 },
                { start: 300, density: 0.01090327098129442 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.777127712771277 },
                { start: 2500, end: 4000, density: 0.13436343634363435 },
                { start: 4000, density: 0.0885088508850886 },
              ],
              percentiles: { p75: 2377 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8177 },
                { start: "0.10", end: "0.25", density: 0.1172 },
                { start: "0.25", density: 0.06510000000000009 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6744302279088369 },
                { start: 200, end: 500, density: 0.24190323870451835 },
                { start: 500, density: 0.08366653338664483 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4797999999999995 },
                { start: 800, end: 1800, density: 0.40819999999999956 },
                { start: 1800, density: 0.11200000000000103 },
              ],
              percentiles: { p75: 1277 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 1961,
        lcp: 2377,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1653064497920,
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
                { start: 0, end: 200, density: 0.6338366163383659 },
                { start: 200, end: 500, density: 0.22557744225577428 },
                { start: 500, density: 0.1405859414058598 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41802540762228685 },
                { start: 800, end: 1800, density: 0.42032609782934893 },
                { start: 1800, density: 0.16164849454836425 },
              ],
              percentiles: { p75: 1446 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6349269853970788 },
                { start: 1800, end: 3000, density: 0.21614322864572896 },
                { start: 3000, density: 0.14892978595719228 },
              ],
              percentiles: { p75: 2293 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9173248025592324 },
                { start: 100, end: 300, density: 0.0362891132660202 },
                { start: 300, density: 0.04638608417474738 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6816999999999998 },
                { start: 2500, end: 4000, density: 0.17259999999999984 },
                { start: 4000, density: 0.14570000000000027 },
              ],
              percentiles: { p75: 2930 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8153815381538153,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10261026102610259,
                },
                { start: "0.25", density: 0.08200820082008208 },
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
        fcp: 2293,
        lcp: 2930,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1653064498181,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756927078123437 },
                { start: 100, end: 300, density: 0.018405521656496948 },
                { start: 300, density: 0.005901770531159348 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8093690630936904 },
                { start: 2500, end: 4000, density: 0.11113888611138882 },
                { start: 4000, density: 0.07949205079492072 },
              ],
              percentiles: { p75: 2149 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7957 },
                { start: "0.10", end: "0.25", density: 0.1403 },
                { start: "0.25", density: 0.064 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.781965410376887 },
                { start: 200, end: 500, density: 0.17714685594321705 },
                { start: 500, density: 0.04088773367989596 },
              ],
              percentiles: { p75: 183 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5077999999999998 },
                { start: 800, end: 1800, density: 0.3804999999999998 },
                { start: 1800, density: 0.11170000000000037 },
              ],
              percentiles: { p75: 1222 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7629237076292371 },
                { start: 1800, end: 3000, density: 0.1383861613838616 },
                { start: 3000, density: 0.09869013098690137 },
              ],
              percentiles: { p75: 1760 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1760,
        lcp: 2149,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1653064498444,
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
                { start: 0, end: 1800, density: 0.08307507747675683 },
                { start: 1800, end: 3000, density: 0.3765870238928315 },
                { start: 3000, density: 0.5403378986304118 },
              ],
              percentiles: { p75: 5190 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22299459891978418 },
                { start: 2500, end: 4000, density: 0.355321064212843 },
                { start: 4000, density: 0.42168433686737294 },
              ],
              percentiles: { p75: 5868 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8493150684931507,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08659134086591341,
                },
                { start: "0.25", density: 0.06409359064093592 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8262826282628265 },
                { start: 200, end: 500, density: 0.10751075107510756 },
                { start: 500, density: 0.066206620662066 },
              ],
              percentiles: { p75: 151 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2774 },
                { start: 800, end: 1800, density: 0.4845999999999999 },
                { start: 1800, density: 0.23800000000000004 },
              ],
              percentiles: { p75: 1776 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5190, lcp: 5868, cls: "0.05" },
      timestamp: 1653064498705,
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
                { start: "0.00", end: "0.10", density: 0.7496 },
                { start: "0.10", end: "0.25", density: 0.1768 },
                { start: "0.25", density: 0.07360000000000008 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8268519444166751 },
                { start: 200, end: 500, density: 0.1401579526142157 },
                { start: 500, density: 0.032990102969109265 },
              ],
              percentiles: { p75: 168 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33530000000000004 },
                { start: 800, end: 1800, density: 0.5085000000000001 },
                { start: 1800, density: 0.15619999999999998 },
              ],
              percentiles: { p75: 1575 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6483351664833518 },
                { start: 1800, end: 3000, density: 0.2434756524347566 },
                { start: 3000, density: 0.10818918108189161 },
              ],
              percentiles: { p75: 2247 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9762976297629763 },
                { start: 100, end: 300, density: 0.0086008600860086 },
                { start: 300, density: 0.015101510151015102 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7247449489897979 },
                { start: 2500, end: 4000, density: 0.1829365873174635 },
                { start: 4000, density: 0.09231846369273859 },
              ],
              percentiles: { p75: 2762 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2247, lcp: 2762, cls: "0.09", fid: 9 },
      timestamp: 1653064498969,
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
                { start: 0, end: 1800, density: 0.8556433070078979 },
                { start: 1800, end: 3000, density: 0.10476856942917125 },
                { start: 3000, density: 0.03958812356293088 },
              ],
              percentiles: { p75: 1343 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8934606539346065 },
                { start: 2500, end: 4000, density: 0.07854214578542143 },
                { start: 4000, density: 0.027997200279972 },
              ],
              percentiles: { p75: 1663 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8498849884988499,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11061106110611063,
                },
                { start: "0.25", density: 0.039503950395039525 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8119999999999999 },
                { start: 200, end: 500, density: 0.15109999999999996 },
                { start: 500, density: 0.03690000000000014 },
              ],
              percentiles: { p75: 168 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6687331266873315 },
                { start: 800, end: 1800, density: 0.2941705829417058 },
                { start: 1800, density: 0.03709629037096276 },
              ],
              percentiles: { p75: 942 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1343, lcp: 1663, cls: "0.05" },
      timestamp: 1653064499243,
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
                  density: 0.8073807380738074,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1568156815681568,
                },
                { start: "0.25", density: 0.03580358035803575 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.644764476447645 },
                { start: 200, end: 500, density: 0.23542354235423546 },
                { start: 500, density: 0.11981198119811953 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5137513751375136 },
                { start: 800, end: 1800, density: 0.3938393839383937 },
                { start: 1800, density: 0.09240924092409272 },
              ],
              percentiles: { p75: 1190 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7098419683936782 },
                { start: 1800, end: 3000, density: 0.20154030806161216 },
                { start: 3000, density: 0.08861772354470973 },
              ],
              percentiles: { p75: 1955 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9436112777444512 },
                { start: 100, end: 300, density: 0.03079384123175365 },
                { start: 300, density: 0.025594881023795202 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7470994198839762 },
                { start: 2500, end: 4000, density: 0.16028205641128213 },
                { start: 4000, density: 0.09261852370474166 },
              ],
              percentiles: { p75: 2521 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1955,
        lcp: 2521,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1653064499578,
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
                { start: 0, end: 2500, density: 0.8128 },
                { start: 2500, end: 4000, density: 0.12620000000000003 },
                { start: 4000, density: 0.06100000000000003 },
              ],
              percentiles: { p75: 2188 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9512048795120488,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0330966903309669,
                },
                { start: "0.25", density: 0.015698430156984303 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9166916691669167 },
                { start: 200, end: 500, density: 0.06720672067206723 },
                { start: 500, density: 0.016101610161016102 },
              ],
              percentiles: { p75: 102 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5980401959804019 },
                { start: 800, end: 1800, density: 0.33556644335566443 },
                { start: 1800, density: 0.06639336066393361 },
              ],
              percentiles: { p75: 1055 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.782256451290258 },
                { start: 1800, end: 3000, density: 0.16843368673734743 },
                { start: 3000, density: 0.04930986197239455 },
              ],
              percentiles: { p75: 1720 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9873987398739874 },
                { start: 100, end: 300, density: 0.006100610061006101 },
                { start: 300, density: 0.006500650065006499 },
              ],
              percentiles: { p75: 8 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1720, lcp: 2188, cls: "0.02", fid: 8 },
      timestamp: 1653064499844,
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
                  density: 0.746874687468747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12271227122712274,
                },
                { start: "0.25", density: 0.13041304130413037 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5968403159684033 },
                { start: 200, end: 500, density: 0.3351664833516649 },
                { start: 500, density: 0.0679932006799318 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41456582633053435 },
                { start: 800, end: 1800, density: 0.32583033213285484 },
                { start: 1800, density: 0.2596038415366108 },
              ],
              percentiles: { p75: 1807 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5068506850685071 },
                { start: 1800, end: 3000, density: 0.20952095209520957 },
                { start: 3000, density: 0.2836283628362834 },
              ],
              percentiles: { p75: 3240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597 },
                { start: 100, end: 300, density: 0.0363 },
                { start: 300, density: 0.004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5636436356364365 },
                { start: 2500, end: 4000, density: 0.21047895210478956 },
                { start: 4000, density: 0.22587741225877395 },
              ],
              percentiles: { p75: 3739 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3240,
        lcp: 3739,
        cls: "0.13",
        fid: 12,
      },
      timestamp: 1653064500115,
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
                  density: 0.746874687468747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12271227122712274,
                },
                { start: "0.25", density: 0.13041304130413037 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5968403159684033 },
                { start: 200, end: 500, density: 0.3351664833516649 },
                { start: 500, density: 0.0679932006799318 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41456582633053435 },
                { start: 800, end: 1800, density: 0.32583033213285484 },
                { start: 1800, density: 0.2596038415366108 },
              ],
              percentiles: { p75: 1807 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5068506850685071 },
                { start: 1800, end: 3000, density: 0.20952095209520957 },
                { start: 3000, density: 0.2836283628362834 },
              ],
              percentiles: { p75: 3240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597 },
                { start: 100, end: 300, density: 0.0363 },
                { start: 300, density: 0.004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5636436356364365 },
                { start: 2500, end: 4000, density: 0.21047895210478956 },
                { start: 4000, density: 0.22587741225877395 },
              ],
              percentiles: { p75: 3739 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3240,
        lcp: 3739,
        cls: "0.13",
        fid: 12,
      },
      timestamp: 1653064500378,
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
                { start: 0, end: 2500, density: 0.6034000000000012 },
                { start: 2500, end: 4000, density: 0.1903000000000003 },
                { start: 4000, density: 0.20629999999999848 },
              ],
              percentiles: { p75: 3620 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8972 },
                { start: "0.10", end: "0.25", density: 0.0672 },
                { start: "0.25", density: 0.03559999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6073999999999998 },
                { start: 200, end: 500, density: 0.2837999999999999 },
                { start: 500, density: 0.10880000000000015 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4624462446244617 },
                { start: 800, end: 1800, density: 0.3516351635163511 },
                { start: 1800, density: 0.1859185918591872 },
              ],
              percentiles: { p75: 1591 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5383000000000001 },
                { start: 1800, end: 3000, density: 0.22499999999999995 },
                { start: 3000, density: 0.2366999999999999 },
              ],
              percentiles: { p75: 3087 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9493050694930507 },
                { start: 100, end: 300, density: 0.0373962603739626 },
                { start: 300, density: 0.013298670132986714 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3087,
        lcp: 3620,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064500642,
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
                { start: 0, end: 200, density: 0.6643335666433361 },
                { start: 200, end: 500, density: 0.2522747725227479 },
                { start: 500, density: 0.08339166083391608 },
              ],
              percentiles: { p75: 228 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5213042608521709 },
                { start: 800, end: 1800, density: 0.2805561112222447 },
                { start: 1800, density: 0.19813962792558426 },
              ],
              percentiles: { p75: 1551 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6553310662132412 },
                { start: 1800, end: 3000, density: 0.13272654530906156 },
                { start: 3000, density: 0.21194238847769725 },
              ],
              percentiles: { p75: 2639 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488102379524096 },
                { start: 100, end: 300, density: 0.033493301339732065 },
                { start: 300, density: 0.017696460707858453 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6661666166616653 },
                { start: 2500, end: 4000, density: 0.17571757175717542 },
                { start: 4000, density: 0.15811581158115928 },
              ],
              percentiles: { p75: 3080 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9093909390939092,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06420642064206421,
                },
                { start: "0.25", density: 0.026402640264026386 },
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
        fcp: 2639,
        lcp: 3080,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064500905,
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
                  density: 0.8238000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1162 },
                { start: "0.25", density: 0.06000000000000005 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6152000000000002 },
                { start: 200, end: 500, density: 0.28440000000000015 },
                { start: 500, density: 0.10039999999999966 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2775000000000013 },
                { start: 800, end: 1800, density: 0.45750000000000207 },
                { start: 1800, density: 0.2649999999999965 },
              ],
              percentiles: { p75: 1877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5234523452345236 },
                { start: 1800, end: 3000, density: 0.25702570257025703 },
                { start: 3000, density: 0.21952195219521936 },
              ],
              percentiles: { p75: 2862 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596838735494198 },
                { start: 100, end: 300, density: 0.02901160464185674 },
                { start: 300, density: 0.0113045218087235 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5771922807719234 },
                { start: 2500, end: 4000, density: 0.23692630736926332 },
                { start: 4000, density: 0.18588141185881335 },
              ],
              percentiles: { p75: 3525 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2862,
        lcp: 3525,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1653064501195,
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
                { start: "0.00", end: "0.10", density: 0.8206 },
                { start: "0.10", end: "0.25", density: 0.1137 },
                { start: "0.25", density: 0.06570000000000005 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7133000000000002 },
                { start: 200, end: 500, density: 0.22760000000000008 },
                { start: 500, density: 0.05909999999999982 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4895447723861931 },
                { start: 800, end: 1800, density: 0.39509754877438713 },
                { start: 1800, density: 0.11535767883941972 },
              ],
              percentiles: { p75: 1314 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6991601679664067 },
                { start: 1800, end: 3000, density: 0.17696460707858427 },
                { start: 3000, density: 0.12387522495500904 },
              ],
              percentiles: { p75: 2071 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748974897489748 },
                { start: 100, end: 300, density: 0.019401940194019397 },
                { start: 300, density: 0.0057005700570057025 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7238723872387223 },
                { start: 2500, end: 4000, density: 0.143314331433143 },
                { start: 4000, density: 0.13281328132813458 },
              ],
              percentiles: { p75: 2784 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2071,
        lcp: 2784,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653064501532,
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
                  density: 0.8685131486851315,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0994900509949005,
                },
                { start: "0.25", density: 0.03199680031996801 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5666433356664338 },
                { start: 200, end: 500, density: 0.30616938306169406 },
                { start: 500, density: 0.12718728127187223 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8437843784378437 },
                { start: 800, end: 1800, density: 0.12941294129412942 },
                { start: 1800, density: 0.02680268026802675 },
              ],
              percentiles: { p75: 682 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9213078692130787 },
                { start: 1800, end: 3000, density: 0.0574942505749425 },
                { start: 3000, density: 0.02119788021197878 },
              ],
              percentiles: { p75: 1173 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9584958495849586 },
                { start: 100, end: 300, density: 0.020802080208020803 },
                { start: 300, density: 0.020702070207020674 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9129000000000003 },
                { start: 2500, end: 4000, density: 0.06730000000000001 },
                { start: 4000, density: 0.019799999999999894 },
              ],
              percentiles: { p75: 1726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1173,
        lcp: 1726,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1653064501801,
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
                { start: 0, end: 200, density: 0.8363877235592846 },
                { start: 200, end: 500, density: 0.13402517111945236 },
                { start: 500, density: 0.02958710532126304 },
              ],
              percentiles: { p75: 154 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5171270718232043 },
                { start: 800, end: 1800, density: 0.3869613259668507 },
                { start: 1800, density: 0.09591160220994513 },
              ],
              percentiles: { p75: 1228 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6872017353579174 },
                { start: 1800, end: 3000, density: 0.2290672451193058 },
                { start: 3000, density: 0.08373101952277678 },
              ],
              percentiles: { p75: 1984 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696969696969697 },
                { start: 100, end: 300, density: 0.015799015799015798 },
                { start: 300, density: 0.014504014504014501 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7649794505732211 },
                { start: 2500, end: 4000, density: 0.17834739346744552 },
                { start: 4000, density: 0.05667315595933334 },
              ],
              percentiles: { p75: 2406 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9378855562646246,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04722399489470326,
                },
                { start: "0.25", density: 0.014890448840672197 },
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
        fcp: 1984,
        lcp: 2406,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064502064,
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
                { start: 0, end: 2500, density: 0.7811580636533828 },
                { start: 2500, end: 4000, density: 0.1351297138272265 },
                { start: 4000, density: 0.08371222251939066 },
              ],
              percentiles: { p75: 2346 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9254782146652497,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05526036131774708,
                },
                { start: "0.25", density: 0.01926142401700318 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4397014534503072 },
                { start: 200, end: 500, density: 0.39334817336650485 },
                { start: 500, density: 0.16695037318318784 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6060646362548211 },
                { start: 800, end: 1800, density: 0.29831094560446864 },
                { start: 1800, density: 0.09562441814071015 },
              ],
              percentiles: { p75: 1077 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7265907568653712 },
                { start: 1800, end: 3000, density: 0.1655726724715337 },
                { start: 3000, density: 0.10783657066309515 },
              ],
              percentiles: { p75: 1931 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9413963422773995 },
                { start: 100, end: 300, density: 0.03737818715792283 },
                { start: 300, density: 0.02122547056467766 },
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
        fcp: 1931,
        lcp: 2346,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064502480,
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
                  density: 0.9627413345376539,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018516427684317487,
                },
                { start: "0.25", density: 0.01874223777802868 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5909400544959129 },
                { start: 200, end: 500, density: 0.29382379654859214 },
                { start: 500, density: 0.11523614895549492 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4397953382603749 },
                { start: 800, end: 1800, density: 0.3752131893121089 },
                { start: 1800, density: 0.1849914724275162 },
              ],
              percentiles: { p75: 1537 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6190205658447898 },
                { start: 1800, end: 3000, density: 0.23224633564367667 },
                { start: 3000, density: 0.1487330985115335 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9391374913053558 },
                { start: 100, end: 300, density: 0.041386505912357985 },
                { start: 300, density: 0.01947600278228619 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7186365698729583 },
                { start: 2500, end: 4000, density: 0.19266107078039935 },
                { start: 4000, density: 0.08870235934664242 },
              ],
              percentiles: { p75: 2668 },
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
        lcp: 2668,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064502893,
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
                  density: 0.9470699432892249,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029143037177063635,
                },
                { start: "0.25", density: 0.023787019533711394 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6088280060882795 },
                { start: 200, end: 500, density: 0.2674277016742767 },
                { start: 500, density: 0.12374429223744388 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8418106206014075 },
                { start: 800, end: 1800, density: 0.14635316698656434 },
                { start: 1800, density: 0.011836212412028134 },
              ],
              percentiles: { p75: 704 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9351821992905515 },
                { start: 1800, end: 3000, density: 0.04595291841341502 },
                { start: 3000, density: 0.018864882296033517 },
              ],
              percentiles: { p75: 1217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9421487603305783 },
                { start: 100, end: 300, density: 0.029006643979906002 },
                { start: 300, density: 0.028844595689515633 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9343281200127673 },
                { start: 2500, end: 4000, density: 0.0505106926268752 },
                { start: 4000, density: 0.015161187360357436 },
              ],
              percentiles: { p75: 1595 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1217,
        lcp: 1595,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064503362,
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
                  density: 0.939929328621908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043580683156654886,
                },
                { start: "0.25", density: 0.01648998822143699 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4199458134434266 },
                { start: 200, end: 500, density: 0.44794220100632176 },
                { start: 500, density: 0.13211198555025166 },
              ],
              percentiles: { p75: 358 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6487843551797041 },
                { start: 800, end: 1800, density: 0.3272991543340381 },
                { start: 1800, density: 0.023916490486257724 },
              ],
              percentiles: { p75: 919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8861044815698753 },
                { start: 1800, end: 3000, density: 0.09466984884645986 },
                { start: 3000, density: 0.019225669583664763 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9546942516695037 },
                { start: 100, end: 300, density: 0.0294618305617389 },
                { start: 300, density: 0.015843917768757432 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8866640232619613 },
                { start: 2500, end: 4000, density: 0.09232090933121863 },
                { start: 4000, density: 0.02101506740682008 },
              ],
              percentiles: { p75: 1856 },
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
        lcp: 1856,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653064503810,
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
                { start: 0, end: 2500, density: 0.9049451242588622 },
                { start: 2500, end: 4000, density: 0.07335688154408984 },
                { start: 4000, density: 0.02169799419704789 },
              ],
              percentiles: { p75: 1791 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8975358310284134,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07141061101332663,
                },
                { start: "0.25", density: 0.03105355795826001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4740414833438091 },
                { start: 200, end: 500, density: 0.3737272155876809 },
                { start: 500, density: 0.15223130106850993 },
              ],
              percentiles: { p75: 355 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8196512663866616 },
                { start: 800, end: 1800, density: 0.15031182385134279 },
                { start: 1800, density: 0.030036909761995616 },
              ],
              percentiles: { p75: 717 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9108135421930269 },
                { start: 1800, end: 3000, density: 0.06505811015664477 },
                { start: 3000, density: 0.02412834765032843 },
              ],
              percentiles: { p75: 1226 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9479597107438016 },
                { start: 100, end: 300, density: 0.025309917355371896 },
                { start: 300, density: 0.02673037190082641 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1226,
        lcp: 1791,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064504235,
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
                  density: 0.746874687468747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12271227122712274,
                },
                { start: "0.25", density: 0.13041304130413037 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5968403159684033 },
                { start: 200, end: 500, density: 0.3351664833516649 },
                { start: 500, density: 0.0679932006799318 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41456582633053435 },
                { start: 800, end: 1800, density: 0.32583033213285484 },
                { start: 1800, density: 0.2596038415366108 },
              ],
              percentiles: { p75: 1883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5068506850685071 },
                { start: 1800, end: 3000, density: 0.20952095209520957 },
                { start: 3000, density: 0.2836283628362834 },
              ],
              percentiles: { p75: 3333 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597 },
                { start: 100, end: 300, density: 0.0363 },
                { start: 300, density: 0.004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5636436356364365 },
                { start: 2500, end: 4000, density: 0.21047895210478956 },
                { start: 4000, density: 0.22587741225877395 },
              ],
              percentiles: { p75: 3782 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3333,
        lcp: 3782,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1653064504758,
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
                { start: 0, end: 200, density: 0.5719715914774436 },
                { start: 200, end: 500, density: 0.32549764929478864 },
                { start: 500, density: 0.10253075922776775 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42135281168701216 },
                { start: 800, end: 1800, density: 0.3810286171703022 },
                { start: 1800, density: 0.19761857114268574 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5393618085425625 },
                { start: 1800, end: 3000, density: 0.34350305091527444 },
                { start: 3000, density: 0.11713514054216305 },
              ],
              percentiles: { p75: 2379 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9263147370525894 },
                { start: 100, end: 300, density: 0.05218956208758248 },
                { start: 300, density: 0.021495700859828163 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6124499999999998 },
                { start: 2500, end: 4000, density: 0.2836499999999998 },
                { start: 4000, density: 0.10390000000000024 },
              ],
              percentiles: { p75: 3075 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9689937987597519,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020104020804160832,
                },
                { start: "0.25", density: 0.010902180436087207 },
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
        fcp: 2379,
        lcp: 3075,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064505282,
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
                { start: 0, end: 1800, density: 0.8251475442632789 },
                { start: 1800, end: 3000, density: 0.11813544063218966 },
                { start: 3000, density: 0.05671701510453147 },
              ],
              percentiles: { p75: 1553 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9474789915966387 },
                { start: 100, end: 300, density: 0.02110844337735094 },
                { start: 300, density: 0.031412565026010406 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8470847084708466 },
                { start: 2500, end: 4000, density: 0.10631063106310626 },
                { start: 4000, density: 0.04660466046604715 },
              ],
              percentiles: { p75: 1996 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9240075992400759,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060993900609939006,
                },
                { start: "0.25", density: 0.014998500149985012 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6147844353305989 },
                { start: 200, end: 500, density: 0.29258777633289973 },
                { start: 500, density: 0.09262778833650136 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6872312768723128 },
                { start: 800, end: 1800, density: 0.2536746325367463 },
                { start: 1800, density: 0.059094090590941006 },
              ],
              percentiles: { p75: 887 },
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
        lcp: 1996,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064505704,
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
                { start: 0, end: 200, density: 0.5569298729983432 },
                { start: 200, end: 500, density: 0.34014356709000537 },
                { start: 500, density: 0.10292655991165145 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4138120938429341 },
                { start: 800, end: 1800, density: 0.38528472298711297 },
                { start: 1800, density: 0.20090318316995273 },
              ],
              percentiles: { p75: 1703 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5294117647058819 },
                { start: 1800, end: 3000, density: 0.3536058491193085 },
                { start: 3000, density: 0.11698238617480972 },
              ],
              percentiles: { p75: 2388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9226309921962095 },
                { start: 100, end: 300, density: 0.05496098104793756 },
                { start: 300, density: 0.022408026755852944 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6078659143710581 },
                { start: 2500, end: 4000, density: 0.29090607368071664 },
                { start: 4000, density: 0.1012280119482253 },
              ],
              percentiles: { p75: 3079 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.976780185758514,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011941618752764265,
                },
                { start: "0.25", density: 0.011278195488721802 },
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
        fcp: 2388,
        lcp: 3079,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064506076,
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
                { start: 0, end: 200, density: 0.7132573485302943 },
                { start: 200, end: 500, density: 0.20365926814637078 },
                { start: 500, density: 0.08308338332333486 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7831216878312168 },
                { start: 800, end: 1800, density: 0.19778022197780226 },
                { start: 1800, density: 0.01909809019098085 },
              ],
              percentiles: { p75: 796 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9202760828248474 },
                { start: 1800, end: 3000, density: 0.06281884565369611 },
                { start: 3000, density: 0.016905071521456434 },
              ],
              percentiles: { p75: 1248 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9456945694569455 },
                { start: 100, end: 300, density: 0.022102210221022097 },
                { start: 300, density: 0.03220322032203225 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9076277116864943 },
                { start: 2500, end: 4000, density: 0.07137858642407278 },
                { start: 4000, density: 0.020993701889433 },
              ],
              percentiles: { p75: 1783 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7625 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16400000000000003,
                },
                { start: "0.25", density: 0.07350000000000002 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1248,
        lcp: 1783,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1653064506543,
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
                  density: 0.9366936693669367,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036303630363036306,
                },
                { start: "0.25", density: 0.02700270027002699 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5678 },
                { start: 200, end: 500, density: 0.32249999999999995 },
                { start: 500, density: 0.10969999999999999 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7996398919675903 },
                { start: 800, end: 1800, density: 0.16314894468340504 },
                { start: 1800, density: 0.03721116334900467 },
              ],
              percentiles: { p75: 729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8765753150630129 },
                { start: 1800, end: 3000, density: 0.08081616323264652 },
                { start: 3000, density: 0.04260852170434069 },
              ],
              percentiles: { p75: 1342 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9487897579515903 },
                { start: 100, end: 300, density: 0.030206041208241646 },
                { start: 300, density: 0.02100420084016808 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8847154146243871 },
                { start: 2500, end: 4000, density: 0.07737321196358904 },
                { start: 4000, density: 0.037911373412023816 },
              ],
              percentiles: { p75: 1746 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1342,
        lcp: 1746,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064506904,
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
                  density: 0.9604859491962204,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017916308749539818,
                },
                { start: "0.25", density: 0.021597742054239786 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5965154173978441 },
                { start: 200, end: 500, density: 0.3291551767360241 },
                { start: 500, density: 0.07432940586613189 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4420344053851907 },
                { start: 800, end: 1800, density: 0.43430565943654936 },
                { start: 1800, density: 0.1236599351782599 },
              ],
              percentiles: { p75: 1308 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6056634104117712 },
                { start: 1800, end: 3000, density: 0.24928898231729898 },
                { start: 3000, density: 0.14504760727092972 },
              ],
              percentiles: { p75: 2401 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677257943457593 },
                { start: 100, end: 300, density: 0.02389291968976732 },
                { start: 300, density: 0.008381285964473354 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7052141527001856 },
                { start: 2500, end: 4000, density: 0.1926132836747361 },
                { start: 4000, density: 0.10217256362507819 },
              ],
              percentiles: { p75: 2762 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2401,
        lcp: 2762,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064507222,
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
                  density: 0.9311043566362717,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021023302938196556,
                },
                { start: "0.25", density: 0.04787234042553187 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5619370839316018 },
                { start: 200, end: 500, density: 0.34877953269808143 },
                { start: 500, density: 0.08928338337031684 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2810242109266064 },
                { start: 800, end: 1800, density: 0.5351755609075923 },
                { start: 1800, density: 0.18380022816580133 },
              ],
              percentiles: { p75: 1573 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4861093329919332 },
                { start: 1800, end: 3000, density: 0.31366022276276967 },
                { start: 3000, density: 0.2002304442452971 },
              ],
              percentiles: { p75: 2745 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9569878065121266 },
                { start: 100, end: 300, density: 0.030684711242127825 },
                { start: 300, density: 0.012327482245745654 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.623499361430395 },
                { start: 2500, end: 4000, density: 0.24916985951468665 },
                { start: 4000, density: 0.12733077905491844 },
              ],
              percentiles: { p75: 3062 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2745,
        lcp: 3062,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064507699,
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
                  density: 0.8489079842463301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10418904403866808,
                },
                { start: "0.25", density: 0.04690297171500179 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7433393610608803 },
                { start: 200, end: 500, density: 0.20964436407474377 },
                { start: 500, density: 0.047016274864375984 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49240859953844235 },
                { start: 800, end: 1800, density: 0.3890440908538804 },
                { start: 1800, density: 0.11854730960767729 },
              ],
              percentiles: { p75: 1248 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7485879101069577 },
                { start: 1800, end: 3000, density: 0.1467371710130993 },
                { start: 3000, density: 0.10467491887994305 },
              ],
              percentiles: { p75: 1824 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704683059434079 },
                { start: 100, end: 300, density: 0.022241443222537995 },
                { start: 300, density: 0.007290250834054121 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8029902726071807 },
                { start: 2500, end: 4000, density: 0.11786958088146982 },
                { start: 4000, density: 0.07914014651134957 },
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
        fcp: 1824,
        lcp: 2206,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653064508283,
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
                  density: 0.8916123547747238,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028620005667327853,
                },
                { start: "0.25", density: 0.07976763955794842 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4971478718736284 },
                { start: 200, end: 500, density: 0.3086148895714493 },
                { start: 500, density: 0.1942372385549222 },
              ],
              percentiles: { p75: 393 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36040249433106564 },
                { start: 800, end: 1800, density: 0.45110544217687043 },
                { start: 1800, density: 0.18849206349206377 },
              ],
              percentiles: { p75: 1549 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5723523494754991 },
                { start: 1800, end: 3000, density: 0.2474493461704266 },
                { start: 3000, density: 0.18019830435407422 },
              ],
              percentiles: { p75: 2510 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8798666868656265 },
                { start: 100, end: 300, density: 0.0536282381457355 },
                { start: 300, density: 0.06650507498863788 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6528475111174856 },
                { start: 2500, end: 4000, density: 0.18060536508391872 },
                { start: 4000, density: 0.16654712379859574 },
              ],
              percentiles: { p75: 3158 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2510,
        lcp: 3158,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1653064508816,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8843833780160858 },
                { start: 2500, end: 4000, density: 0.0865728328865058 },
                { start: 4000, density: 0.029043789097408415 },
              ],
              percentiles: { p75: 1924 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9309746038636857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044714564792706746,
                },
                { start: "0.25", density: 0.02431083134360755 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49554034432690325 },
                { start: 200, end: 500, density: 0.3320887782617714 },
                { start: 500, density: 0.1723708774113253 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6368863334807608 },
                { start: 800, end: 1800, density: 0.31777974347633786 },
                { start: 1800, density: 0.04533392304290135 },
              ],
              percentiles: { p75: 943 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8538650033415015 },
                { start: 1800, end: 3000, density: 0.10002227667631992 },
                { start: 3000, density: 0.04611271998217857 },
              ],
              percentiles: { p75: 1488 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9436241610738254 },
                { start: 100, end: 300, density: 0.035794183445190156 },
                { start: 300, density: 0.020581655480984378 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1488,
        lcp: 1924,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064509345,
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
                { start: 0, end: 100, density: 0.9689937987597519 },
                { start: 100, end: 300, density: 0.02310462092418483 },
                { start: 300, density: 0.007901580316063214 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4871525694861024 },
                { start: 2500, end: 4000, density: 0.2965906818636271 },
                { start: 4000, density: 0.21625674865027053 },
              ],
              percentiles: { p75: 3859 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.927007299270073,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0498950104989501,
                },
                { start: "0.25", density: 0.023097690230976915 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5442999999999999 },
                { start: 200, end: 500, density: 0.34219999999999995 },
                { start: 500, density: 0.1135000000000002 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22993102069379195 },
                { start: 800, end: 1800, density: 0.5295411376587027 },
                { start: 1800, density: 0.2405278416475053 },
              ],
              percentiles: { p75: 1814 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3784000000000028 },
                { start: 1800, end: 3000, density: 0.3211000000000024 },
                { start: 3000, density: 0.3004999999999949 },
              ],
              percentiles: { p75: 3369 },
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
        lcp: 3859,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1653064509840,
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
                { start: 0, end: 1800, density: 0.897073892747353 },
                { start: 1800, end: 3000, density: 0.08254582716611635 },
                { start: 3000, density: 0.020380280086530617 },
              ],
              percentiles: { p75: 1350 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9774237909695164 },
                { start: 100, end: 300, density: 0.01650240660096264 },
                { start: 300, density: 0.006073802429520985 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9162872752105622 },
                { start: 2500, end: 4000, density: 0.06777828363305258 },
                { start: 4000, density: 0.015934441156385263 },
              ],
              percentiles: { p75: 1700 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9077185017026107,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0807037457434733,
                },
                { start: "0.25", density: 0.011577752553915998 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6492217459959398 },
                { start: 200, end: 500, density: 0.2923528084818408 },
                { start: 500, density: 0.058425445522219385 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6937175792507204 },
                { start: 800, end: 1800, density: 0.27907780979827096 },
                { start: 1800, density: 0.027204610951008602 },
              ],
              percentiles: { p75: 863 },
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
        lcp: 1700,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064510176,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390060993900609 },
                { start: 100, end: 300, density: 0.03369663033696629 },
                { start: 300, density: 0.027297270272972803 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5989302139572082 },
                { start: 2500, end: 4000, density: 0.25149970005998784 },
                { start: 4000, density: 0.149570085982804 },
              ],
              percentiles: { p75: 3206 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7890210978902109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1276872312768723,
                },
                { start: "0.25", density: 0.08329167083291682 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6285857071464258 },
                { start: 200, end: 500, density: 0.2380809595202395 },
                { start: 500, density: 0.1333333333333347 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28794241151769684 },
                { start: 800, end: 1800, density: 0.39532093581283784 },
                { start: 1800, density: 0.3167366526694654 },
              ],
              percentiles: { p75: 2013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.510102020404081 },
                { start: 1800, end: 3000, density: 0.2860572114422885 },
                { start: 3000, density: 0.2038407681536305 },
              ],
              percentiles: { p75: 2747 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2747,
        lcp: 3206,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1653064510820,
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
                { start: 0, end: 100, density: 0.9399632159747766 },
                { start: 100, end: 300, density: 0.036652653704676824 },
                { start: 300, density: 0.02338413032054652 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8745158274342191 },
                { start: 2500, end: 4000, density: 0.09062374782957126 },
                { start: 4000, density: 0.03486042473620968 },
              ],
              percentiles: { p75: 1891 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.962249102751562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023129070849395188,
                },
                { start: "0.25", density: 0.014621826399042932 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4710776030157291 },
                { start: 200, end: 500, density: 0.3889249967502929 },
                { start: 500, density: 0.139997400233978 },
              ],
              percentiles: { p75: 346 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7017849953026438 },
                { start: 800, end: 1800, density: 0.23808884713461276 },
                { start: 1800, density: 0.06012615756274351 },
              ],
              percentiles: { p75: 888 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8497187248861503 },
                { start: 1800, end: 3000, density: 0.10782212697562274 },
                { start: 3000, density: 0.04245914813822701 },
              ],
              percentiles: { p75: 1424 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1424,
        lcp: 1891,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1653064511253,
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
                  density: 0.9592875318066157,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026551609691337536,
                },
                { start: "0.25", density: 0.014160858502046687 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.581318317323617 },
                { start: 200, end: 500, density: 0.3187589709616871 },
                { start: 500, density: 0.09992271171469597 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6723333333333332 },
                { start: 800, end: 1800, density: 0.2651111111111111 },
                { start: 1800, density: 0.06255555555555566 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8179091212087548 },
                { start: 1800, end: 3000, density: 0.12320853238529057 },
                { start: 3000, density: 0.058882346405954564 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9413291210651021 },
                { start: 100, end: 300, density: 0.02335552296062281 },
                { start: 300, density: 0.03531535597427507 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8472253052164261 },
                { start: 2500, end: 4000, density: 0.10682574916759155 },
                { start: 4000, density: 0.0459489456159823 },
              ],
              percentiles: { p75: 1982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1574,
        lcp: 1982,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064511774,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43482294727075915 },
                { start: 1800, end: 3000, density: 0.319777331065409 },
                { start: 3000, density: 0.24539972166383192 },
              ],
              percentiles: { p75: 2999 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.916719044626021 },
                { start: 100, end: 300, density: 0.04698302954116906 },
                { start: 300, density: 0.03629792583280985 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5575855689176695 },
                { start: 2500, end: 4000, density: 0.2819148936170217 },
                { start: 4000, density: 0.16049953746530884 },
              ],
              percentiles: { p75: 3354 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9424036281179138,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03159486016628874,
                },
                { start: "0.25", density: 0.026001511715797492 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48221161250577504 },
                { start: 200, end: 500, density: 0.3354381641768055 },
                { start: 500, density: 0.18235022331741946 },
              ],
              percentiles: { p75: 367 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2546097111247695 },
                { start: 800, end: 1800, density: 0.3838352796558081 },
                { start: 1800, density: 0.3615550092194224 },
              ],
              percentiles: { p75: 2145 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2999,
        lcp: 3354,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1653064512512,
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
                  density: 0.9486103828002098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029015906310085646,
                },
                { start: "0.25", density: 0.022373710889704586 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5498998664886521 },
                { start: 200, end: 500, density: 0.3179238985313755 },
                { start: 500, density: 0.13217623497997233 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7394670507742167 },
                { start: 800, end: 1800, density: 0.23964710118833274 },
                { start: 1800, density: 0.020885848037450545 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9000533523030411 },
                { start: 1800, end: 3000, density: 0.07949493153121111 },
                { start: 3000, density: 0.020451716165747827 },
              ],
              percentiles: { p75: 1368 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9058407079646017 },
                { start: 100, end: 300, density: 0.03716814159292035 },
                { start: 300, density: 0.05699115044247798 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.892149866190901 },
                { start: 2500, end: 4000, density: 0.08679750223015162 },
                { start: 4000, density: 0.021052631578947382 },
              ],
              percentiles: { p75: 1911 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1368,
        lcp: 1911,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064513385,
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
                  density: 0.9652965296529654,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026002600260026005,
                },
                { start: "0.25", density: 0.008700870087008703 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6968393678735747 },
                { start: 200, end: 500, density: 0.22614522904580922 },
                { start: 500, density: 0.07701540308061587 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7631763176317632 },
                { start: 800, end: 1800, density: 0.21782178217821788 },
                { start: 1800, density: 0.01900190019001902 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9195080491950806 },
                { start: 1800, end: 3000, density: 0.06629337066293371 },
                { start: 3000, density: 0.014198580141985809 },
              ],
              percentiles: { p75: 1273 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684031596840317 },
                { start: 100, end: 300, density: 0.0190980901909809 },
                { start: 300, density: 0.0124987501249875 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9306430643064306 },
                { start: 2500, end: 4000, density: 0.05535553555355534 },
                { start: 4000, density: 0.014001400140014001 },
              ],
              percentiles: { p75: 1750 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1273,
        lcp: 1750,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1653064514009,
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
                { start: "0.00", end: "0.10", density: 0.8666 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08569999999999998,
                },
                { start: "0.25", density: 0.047699999999999965 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5619561956195622 },
                { start: 200, end: 500, density: 0.3221322132213223 },
                { start: 500, density: 0.11591159115911547 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7217165149544861 },
                { start: 800, end: 1800, density: 0.2262678803641092 },
                { start: 1800, density: 0.052015604681404815 },
              ],
              percentiles: { p75: 851 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8677132286771322 },
                { start: 1800, end: 3000, density: 0.0956904309569043 },
                { start: 3000, density: 0.036596340365963466 },
              ],
              percentiles: { p75: 1357 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9514999999999998 },
                { start: 100, end: 300, density: 0.028999999999999995 },
                { start: 300, density: 0.019500000000000173 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.881023795240951 },
                { start: 2500, end: 4000, density: 0.08638272345530884 },
                { start: 4000, density: 0.0325934813037401 },
              ],
              percentiles: { p75: 1858 },
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
        lcp: 1858,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653064514459,
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
                  density: 0.8493150684931507,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08659134086591341,
                },
                { start: "0.25", density: 0.06409359064093592 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8262826282628265 },
                { start: 200, end: 500, density: 0.10751075107510756 },
                { start: 500, density: 0.066206620662066 },
              ],
              percentiles: { p75: 155 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2774 },
                { start: 800, end: 1800, density: 0.4845999999999999 },
                { start: 1800, density: 0.23800000000000004 },
              ],
              percentiles: { p75: 1778 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08307507747675683 },
                { start: 1800, end: 3000, density: 0.3765870238928315 },
                { start: 3000, density: 0.5403378986304118 },
              ],
              percentiles: { p75: 5272 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22299459891978418 },
                { start: 2500, end: 4000, density: 0.355321064212843 },
                { start: 4000, density: 0.42168433686737294 },
              ],
              percentiles: { p75: 5868 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5272, lcp: 5868, cls: "0.04" },
      timestamp: 1653064514989,
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
                { start: 0, end: 800, density: 0.4436115843270867 },
                { start: 800, end: 1800, density: 0.3568427030096534 },
                { start: 1800, density: 0.19954571266325996 },
              ],
              percentiles: { p75: 1602 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.514295400610239 },
                { start: 1800, end: 3000, density: 0.23189060910837425 },
                { start: 3000, density: 0.25381399028138674 },
              ],
              percentiles: { p75: 3157 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9493050694930507 },
                { start: 100, end: 300, density: 0.0373962603739626 },
                { start: 300, density: 0.013298670132986714 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5832486736651995 },
                { start: 2500, end: 4000, density: 0.20702110847725486 },
                { start: 4000, density: 0.20973021785754556 },
              ],
              percentiles: { p75: 3620 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8972 },
                { start: "0.10", end: "0.25", density: 0.0672 },
                { start: "0.25", density: 0.03559999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5678717598908595 },
                { start: 200, end: 500, density: 0.3102546612096406 },
                { start: 500, density: 0.12187357889950003 },
              ],
              percentiles: { p75: 317 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3157,
        lcp: 3620,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064515672,
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
                  density: 0.746874687468747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12271227122712274,
                },
                { start: "0.25", density: 0.13041304130413037 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5968403159684033 },
                { start: 200, end: 500, density: 0.3351664833516649 },
                { start: 500, density: 0.0679932006799318 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41456582633053435 },
                { start: 800, end: 1800, density: 0.32583033213285484 },
                { start: 1800, density: 0.2596038415366108 },
              ],
              percentiles: { p75: 1883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5068506850685071 },
                { start: 1800, end: 3000, density: 0.20952095209520957 },
                { start: 3000, density: 0.2836283628362834 },
              ],
              percentiles: { p75: 3333 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597 },
                { start: 100, end: 300, density: 0.0363 },
                { start: 300, density: 0.004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5636436356364365 },
                { start: 2500, end: 4000, density: 0.21047895210478956 },
                { start: 4000, density: 0.22587741225877395 },
              ],
              percentiles: { p75: 3782 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3333,
        lcp: 3782,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1653064516231,
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
                { start: "0.00", end: "0.10", density: 0.9476 },
                { start: "0.10", end: "0.25", density: 0.0344 },
                { start: "0.25", density: 0.017999999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6351270254050811 },
                { start: 200, end: 500, density: 0.26175235047009404 },
                { start: 500, density: 0.10312062412482487 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46199999999999963 },
                { start: 800, end: 1800, density: 0.3612999999999998 },
                { start: 1800, density: 0.17670000000000058 },
              ],
              percentiles: { p75: 1492 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6375362463753622 },
                { start: 1800, end: 3000, density: 0.22357764223577642 },
                { start: 3000, density: 0.13888611138886123 },
              ],
              percentiles: { p75: 2329 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463053694630535 },
                { start: 100, end: 300, density: 0.036296370362963695 },
                { start: 300, density: 0.0173982601739827 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.72975 },
                { start: 2500, end: 4000, density: 0.18504999999999994 },
                { start: 4000, density: 0.08520000000000022 },
              ],
              percentiles: { p75: 2635 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2329,
        lcp: 2635,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064516801,
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
                { start: "0.00", end: "0.10", density: 0.94618660472319 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02464834172151245,
                },
                { start: "0.25", density: 0.029165053555297464 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5486667542361752 },
                { start: 200, end: 500, density: 0.376986733219493 },
                { start: 500, density: 0.07434651254433178 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3078218078218073 },
                { start: 800, end: 1800, density: 0.469696969696969 },
                { start: 1800, density: 0.22248122248122368 },
              ],
              percentiles: { p75: 1751 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4972008853013923 },
                { start: 1800, end: 3000, density: 0.30464783231350034 },
                { start: 3000, density: 0.1981512823851074 },
              ],
              percentiles: { p75: 2751 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964046149718272 },
                { start: 100, end: 300, density: 0.027770324657901795 },
                { start: 300, density: 0.008183525623826139 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6343468615424761 },
                { start: 2500, end: 4000, density: 0.2243246770194439 },
                { start: 4000, density: 0.14132846143808006 },
              ],
              percentiles: { p75: 3076 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2751,
        lcp: 3076,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1653064517221,
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
                  density: 0.7752224777522247,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18028197180281974,
                },
                { start: "0.25", density: 0.04449555044495551 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6972908127561727 },
                { start: 200, end: 500, density: 0.197440767769669 },
                { start: 500, density: 0.10526841947415844 },
              ],
              percentiles: { p75: 233 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7328068772491004 },
                { start: 800, end: 1800, density: 0.2318072770891643 },
                { start: 1800, density: 0.0353858456617353 },
              ],
              percentiles: { p75: 835 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8924892489248927 },
                { start: 1800, end: 3000, density: 0.07100710071007102 },
                { start: 3000, density: 0.036503650365036194 },
              ],
              percentiles: { p75: 1284 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632926585317065 },
                { start: 100, end: 300, density: 0.01710342068413683 },
                { start: 300, density: 0.019603920784156726 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8667233446689335 },
                { start: 2500, end: 4000, density: 0.0938687737547509 },
                { start: 4000, density: 0.03940788157631552 },
              ],
              percentiles: { p75: 1904 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1284,
        lcp: 1904,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1653064517919,
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
                { start: 0, end: 1800, density: 0.8933999999999999 },
                { start: 1800, end: 3000, density: 0.08709999999999998 },
                { start: 3000, density: 0.019500000000000236 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618038196180381 },
                { start: 100, end: 300, density: 0.025197480251974796 },
                { start: 300, density: 0.012998700129987033 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8794758951790359 },
                { start: 2500, end: 4000, density: 0.09731946389277855 },
                { start: 4000, density: 0.023204640928185638 },
              ],
              percentiles: { p75: 1873 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8707870787078709,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09850985098509851,
                },
                { start: "0.25", density: 0.030703070307030712 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4941988397679536 },
                { start: 200, end: 500, density: 0.3884776955391079 },
                { start: 500, density: 0.11732346469293843 },
              ],
              percentiles: { p75: 332 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6623337666233378 },
                { start: 800, end: 1800, density: 0.3116688331166883 },
                { start: 1800, density: 0.025997400259973824 },
              ],
              percentiles: { p75: 908 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1364,
        lcp: 1873,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1653064518345,
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
                  density: 0.9093909390939092,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06420642064206421,
                },
                { start: "0.25", density: 0.026402640264026386 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6643335666433361 },
                { start: 200, end: 500, density: 0.2522747725227479 },
                { start: 500, density: 0.08339166083391608 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5213042608521709 },
                { start: 800, end: 1800, density: 0.2805561112222447 },
                { start: 1800, density: 0.19813962792558426 },
              ],
              percentiles: { p75: 1547 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6553310662132412 },
                { start: 1800, end: 3000, density: 0.13272654530906156 },
                { start: 3000, density: 0.21194238847769725 },
              ],
              percentiles: { p75: 2755 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488102379524096 },
                { start: 100, end: 300, density: 0.033493301339732065 },
                { start: 300, density: 0.017696460707858453 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6661666166616653 },
                { start: 2500, end: 4000, density: 0.17571757175717542 },
                { start: 4000, density: 0.15811581158115928 },
              ],
              percentiles: { p75: 3097 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2755,
        lcp: 3097,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064518821,
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
                { start: 0, end: 100, density: 0.9488846653996201 },
                { start: 100, end: 300, density: 0.031309392817845366 },
                { start: 300, density: 0.019805941782534562 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7879787978797871 },
                { start: 2500, end: 4000, density: 0.13301330133013284 },
                { start: 4000, density: 0.07900790079008008 },
              ],
              percentiles: { p75: 2321 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8333 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12210000000000001,
                },
                { start: "0.25", density: 0.044600000000000015 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.527658297489247 },
                { start: 200, end: 500, density: 0.32739821946583986 },
                { start: 500, density: 0.14494348304491317 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6347365263473651 },
                { start: 800, end: 1800, density: 0.2832716728327167 },
                { start: 1800, density: 0.08199180081991811 },
              ],
              percentiles: { p75: 1016 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7538999999999992 },
                { start: 1800, end: 3000, density: 0.15259999999999985 },
                { start: 3000, density: 0.09350000000000092 },
              ],
              percentiles: { p75: 1821 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1821,
        lcp: 2321,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1653064519404,
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
                  density: 0.8641322685862108,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09369024856596558,
                },
                { start: "0.25", density: 0.042177482847823626 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43894313612866154 },
                { start: 200, end: 500, density: 0.33061458931648463 },
                { start: 500, density: 0.23044227455485392 },
              ],
              percentiles: { p75: 466 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.383561643835616 },
                { start: 800, end: 1800, density: 0.40478329216258657 },
                { start: 1800, density: 0.21165506400179757 },
              ],
              percentiles: { p75: 1678 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47092760180995435 },
                { start: 1800, end: 3000, density: 0.25316742081447946 },
                { start: 3000, density: 0.2759049773755663 },
              ],
              percentiles: { p75: 3202 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9019814749677572 },
                { start: 100, end: 300, density: 0.06307890725759174 },
                { start: 300, density: 0.03493961777465121 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5191306316504409 },
                { start: 2500, end: 4000, density: 0.24790581842879755 },
                { start: 4000, density: 0.23296354992076143 },
              ],
              percentiles: { p75: 3886 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3202,
        lcp: 3886,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1653064519801,
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
                { start: 0, end: 800, density: 0.7070585882823436 },
                { start: 800, end: 1800, density: 0.26644671065786846 },
                { start: 1800, density: 0.026494701059788014 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8984593837535017 },
                { start: 1800, end: 3000, density: 0.07953181272509004 },
                { start: 3000, density: 0.02200880352140836 },
              ],
              percentiles: { p75: 1346 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797040591881624 },
                { start: 100, end: 300, density: 0.014697060587882425 },
                { start: 300, density: 0.005598880223955209 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9075184963007402 },
                { start: 2500, end: 4000, density: 0.07288542291541693 },
                { start: 4000, density: 0.019596080783842878 },
              ],
              percentiles: { p75: 1742 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8881 },
                { start: "0.10", end: "0.25", density: 0.0983 },
                { start: "0.25", density: 0.0136 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6822635472905422 },
                { start: 200, end: 500, density: 0.2636472705458909 },
                { start: 500, density: 0.054089182163567034 },
              ],
              percentiles: { p75: 232 },
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
        lcp: 1742,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064520466,
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
                { start: 0, end: 2500, density: 0.8627862786278625 },
                { start: 2500, end: 4000, density: 0.09700970097009694 },
                { start: 4000, density: 0.040204020402040526 },
              ],
              percentiles: { p75: 1972 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8836 },
                { start: "0.10", end: "0.25", density: 0.0992 },
                { start: "0.25", density: 0.017199999999999986 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5623124624924984 },
                { start: 200, end: 500, density: 0.32796559311862367 },
                { start: 500, density: 0.10972194438887782 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6795679567956796 },
                { start: 800, end: 1800, density: 0.2780278027802781 },
                { start: 1800, density: 0.04240424042404229 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8168633726745348 },
                { start: 1800, end: 3000, density: 0.133126625325065 },
                { start: 3000, density: 0.050010002000400164 },
              ],
              percentiles: { p75: 1600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460000000000001 },
                { start: 100, end: 300, density: 0.0358 },
                { start: 300, density: 0.01819999999999992 },
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
        fcp: 1600,
        lcp: 1972,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064520859,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8723127687231277,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07859214078592142,
                },
                { start: "0.25", density: 0.04909509049095093 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4786521347865212 },
                { start: 200, end: 500, density: 0.3702629737026295 },
                { start: 500, density: 0.1510848915108493 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5595440455954398 },
                { start: 800, end: 1800, density: 0.3567643235676429 },
                { start: 1800, density: 0.08369163083691729 },
              ],
              percentiles: { p75: 1111 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7499499899979996 },
                { start: 1800, end: 3000, density: 0.16623324664932984 },
                { start: 3000, density: 0.08381676335267076 },
              ],
              percentiles: { p75: 1819 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297210836748975 },
                { start: 100, end: 300, density: 0.04158752374287713 },
                { start: 300, density: 0.028691392582225354 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7905290529052909 },
                { start: 2500, end: 4000, density: 0.13816381638163822 },
                { start: 4000, density: 0.0713071307130709 },
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
        fcp: 1819,
        lcp: 2311,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1653064521252,
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
                  density: 0.9776763690182536,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012703502713369513,
                },
                { start: "0.25", density: 0.009620128268376906 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6274629044028216 },
                { start: 200, end: 500, density: 0.29712965215276094 },
                { start: 500, density: 0.0754074434444175 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5775203352230712 },
                { start: 800, end: 1800, density: 0.3761400049297511 },
                { start: 1800, density: 0.04633965984717757 },
              ],
              percentiles: { p75: 995 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8564178734991953 },
                { start: 1800, end: 3000, density: 0.10781037257086275 },
                { start: 3000, density: 0.03577175392994199 },
              ],
              percentiles: { p75: 1497 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620612951062778 },
                { start: 100, end: 300, density: 0.022367770637666828 },
                { start: 300, density: 0.015570934256055331 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8897652465532229 },
                { start: 2500, end: 4000, density: 0.08241212271767481 },
                { start: 4000, density: 0.02782263072910226 },
              ],
              percentiles: { p75: 1840 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1497,
        lcp: 1840,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064521662,
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
                { start: 0, end: 2500, density: 0.705591118223644 },
                { start: 2500, end: 4000, density: 0.16368273654730928 },
                { start: 4000, density: 0.1307261452290467 },
              ],
              percentiles: { p75: 2817 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8823 },
                { start: "0.10", end: "0.25", density: 0.0664 },
                { start: "0.25", density: 0.051300000000000026 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6324000000000003 },
                { start: 200, end: 500, density: 0.2829000000000001 },
                { start: 500, density: 0.08469999999999961 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4499899979996 },
                { start: 800, end: 1800, density: 0.41988397679535916 },
                { start: 1800, density: 0.1301260252050408 },
              ],
              percentiles: { p75: 1336 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6316631663166303 },
                { start: 1800, end: 3000, density: 0.2150215021502146 },
                { start: 3000, density: 0.15331533153315507 },
              ],
              percentiles: { p75: 2343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9528094381123777 },
                { start: 100, end: 300, density: 0.02869426114777046 },
                { start: 300, density: 0.018496300739851822 },
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
        fcp: 2343,
        lcp: 2817,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1653064522289,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7209604153147302 },
                { start: 2500, end: 4000, density: 0.20484533852476736 },
                { start: 4000, density: 0.07419424616050255 },
              ],
              percentiles: { p75: 2698 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9667802385008518,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01767461669505963,
                },
                { start: "0.25", density: 0.01554514480408859 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6512586805555552 },
                { start: 200, end: 500, density: 0.2610677083333333 },
                { start: 500, density: 0.0876736111111115 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37377122430741716 },
                { start: 800, end: 1800, density: 0.5205540661304733 },
                { start: 1800, density: 0.1056747095621095 },
              ],
              percentiles: { p75: 1409 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6161395856052343 },
                { start: 1800, end: 3000, density: 0.26237731733914943 },
                { start: 3000, density: 0.12148309705561622 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521206821163096 },
                { start: 100, end: 300, density: 0.033887188456493224 },
                { start: 300, density: 0.013992129427197166 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2698,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064522734,
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
                  density: 0.9603694874851013,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02264600715137068,
                },
                { start: "0.25", density: 0.01698450536352802 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6673189823874756 },
                { start: 200, end: 500, density: 0.2527472527472528 },
                { start: 500, density: 0.07993376486527157 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3646827199757683 },
                { start: 800, end: 1800, density: 0.4096622747236101 },
                { start: 1800, density: 0.22565500530062155 },
              ],
              percentiles: { p75: 1705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6007893139040673 },
                { start: 1800, end: 3000, density: 0.21432908318154195 },
                { start: 3000, density: 0.18488160291439082 },
              ],
              percentiles: { p75: 2603 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400274683351136 },
                { start: 100, end: 300, density: 0.03418281703036777 },
                { start: 300, density: 0.025789714634518523 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6611464004839682 },
                { start: 2500, end: 4000, density: 0.20969449485783406 },
                { start: 4000, density: 0.1291591046581977 },
              ],
              percentiles: { p75: 2981 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2603,
        lcp: 2981,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1653064523394,
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
                { start: 0, end: 2500, density: 0.7626025205040999 },
                { start: 2500, end: 4000, density: 0.14387877575515087 },
                { start: 4000, density: 0.09351870374074911 },
              ],
              percentiles: { p75: 2463 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9237923792379238,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044404440444044416,
                },
                { start: "0.25", density: 0.03180318031803182 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6148229645929185 },
                { start: 200, end: 500, density: 0.26175235047009404 },
                { start: 500, density: 0.12342468493698748 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5327934413117377 },
                { start: 800, end: 1800, density: 0.37082583483303333 },
                { start: 1800, density: 0.09638072385522901 },
              ],
              percentiles: { p75: 1152 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7146429285857161 },
                { start: 1800, end: 3000, density: 0.18233646729345848 },
                { start: 3000, density: 0.1030206041208255 },
              ],
              percentiles: { p75: 1954 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639144342263095 },
                { start: 100, end: 300, density: 0.02798880447820872 },
                { start: 300, density: 0.008096761295481819 },
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
        fcp: 1954,
        lcp: 2463,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064524166,
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
                  density: 0.832063634326686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10743894241541563,
                },
                { start: "0.25", density: 0.06049742325789829 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5778803919360291 },
                { start: 200, end: 500, density: 0.313886698952585 },
                { start: 500, density: 0.1082329091113859 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2553430821147365 },
                { start: 800, end: 1800, density: 0.46265466816648076 },
                { start: 1800, density: 0.2820022497187826 },
              ],
              percentiles: { p75: 1917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49271926854046727 },
                { start: 1800, end: 3000, density: 0.2709109380291229 },
                { start: 3000, density: 0.23636979343040973 },
              ],
              percentiles: { p75: 2960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534642032332563 },
                { start: 100, end: 300, density: 0.03348729792147806 },
                { start: 300, density: 0.0130484988452656 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5579677455734754 },
                { start: 2500, end: 4000, density: 0.24816736212924362 },
                { start: 4000, density: 0.19386489229728113 },
              ],
              percentiles: { p75: 3565 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2960,
        lcp: 3565,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1653064524586,
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
                { start: "0.00", end: "0.10", density: 0.8306 },
                { start: "0.10", end: "0.25", density: 0.1247 },
                { start: "0.25", density: 0.04469999999999997 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7357471494298856 },
                { start: 200, end: 500, density: 0.18083616723344664 },
                { start: 500, density: 0.08341668333666778 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8584575372611783 },
                { start: 800, end: 1800, density: 0.12943883164949482 },
                { start: 1800, density: 0.012103631089326826 },
              ],
              percentiles: { p75: 667 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9456782713085234 },
                { start: 1800, end: 3000, density: 0.03991596638655462 },
                { start: 3000, density: 0.01440576230492195 },
              ],
              percentiles: { p75: 1121 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.96328531412565 },
                { start: 100, end: 300, density: 0.018607442977190875 },
                { start: 300, density: 0.018107242897158995 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9454 },
                { start: 2500, end: 4000, density: 0.04259999999999999 },
                { start: 4000, density: 0.011999999999999985 },
              ],
              percentiles: { p75: 1542 },
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
        lcp: 1542,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1653064525244,
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
                { start: 0, end: 2500, density: 0.8573499999999998 },
                { start: 2500, end: 4000, density: 0.11134999999999998 },
                { start: 4000, density: 0.03130000000000005 },
              ],
              percentiles: { p75: 2024 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9434000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044000000000000004,
                },
                { start: "0.25", density: 0.012599999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.625225045009002 },
                { start: 200, end: 500, density: 0.2875575115023006 },
                { start: 500, density: 0.08721744348869753 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6099390060993903 },
                { start: 800, end: 1800, density: 0.3494650534946506 },
                { start: 1800, density: 0.0405959404059591 },
              ],
              percentiles: { p75: 1014 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8394678935787157 },
                { start: 1800, end: 3000, density: 0.1264252850570114 },
                { start: 3000, density: 0.03410682136427305 },
              ],
              percentiles: { p75: 1540 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.971997199719972 },
                { start: 100, end: 300, density: 0.018801880188018802 },
                { start: 300, density: 0.009200920092009197 },
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
        fcp: 1540,
        lcp: 2024,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1653064525710,
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
                { start: "0.00", end: "0.10", density: 0.8547 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10300000000000001,
                },
                { start: "0.25", density: 0.04229999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4912982596519303 },
                { start: 200, end: 500, density: 0.298259651930386 },
                { start: 500, density: 0.21044208841768372 },
              ],
              percentiles: { p75: 428 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40758151630326045 },
                { start: 800, end: 1800, density: 0.39717943588717713 },
                { start: 1800, density: 0.19523904780956253 },
              ],
              percentiles: { p75: 1608 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5023507052115668 },
                { start: 1800, end: 3000, density: 0.24277283184955656 },
                { start: 3000, density: 0.25487646293887667 },
              ],
              percentiles: { p75: 3086 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.913056528264132 },
                { start: 100, end: 300, density: 0.056128064032016006 },
                { start: 300, density: 0.03081540770385201 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5425670268107246 },
                { start: 2500, end: 4000, density: 0.23714485794317733 },
                { start: 4000, density: 0.22028811524609815 },
              ],
              percentiles: { p75: 3778 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3086,
        lcp: 3778,
        cls: "0.03",
        fid: 16,
      },
      timestamp: 1653064526095,
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
                { start: 0, end: 200, density: 0.736926307369263 },
                { start: 200, end: 500, density: 0.21677832216778314 },
                { start: 500, density: 0.046295370462953886 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42395760423957557 },
                { start: 800, end: 1800, density: 0.4596540345965398 },
                { start: 1800, density: 0.11638836116388462 },
              ],
              percentiles: { p75: 1306 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270881264379305 },
                { start: 1800, end: 3000, density: 0.24757427228168424 },
                { start: 3000, density: 0.12533760128038526 },
              ],
              percentiles: { p75: 2240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9747949589917984 },
                { start: 100, end: 300, density: 0.02020404080816163 },
                { start: 300, density: 0.005001000200040002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7294541091781638 },
                { start: 2500, end: 4000, density: 0.15626874625074974 },
                { start: 4000, density: 0.11427714457108644 },
              ],
              percentiles: { p75: 2662 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9407940794079407,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0452045204520452,
                },
                { start: "0.25", density: 0.014001400140014003 },
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
        fcp: 2240,
        lcp: 2662,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1653064526511,
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
                { start: 0, end: 800, density: 0.7032948653621006 },
                { start: 800, end: 1800, density: 0.26726877404248206 },
                { start: 1800, density: 0.029436360595417314 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8936529372045914 },
                { start: 1800, end: 3000, density: 0.08676569885212694 },
                { start: 3000, density: 0.019581363943281572 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597212780421481 },
                { start: 100, end: 300, density: 0.026172671651937453 },
                { start: 300, density: 0.014106050305914341 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9206960013384641 },
                { start: 2500, end: 4000, density: 0.06140204115777146 },
                { start: 4000, density: 0.017901957503764433 },
              ],
              percentiles: { p75: 1832 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.97705078125 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015625000000000003,
                },
                { start: "0.25", density: 0.007324218750000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5546110665597436 },
                { start: 200, end: 500, density: 0.3374498797113073 },
                { start: 500, density: 0.10793905372894916 },
              ],
              percentiles: { p75: 308 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1382,
        lcp: 1832,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064526914,
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
                  density: 0.9104859335038363,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07896419437340153,
                },
                { start: "0.25", density: 0.010549872122762139 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5273063533507399 },
                { start: 200, end: 500, density: 0.3543298520452568 },
                { start: 500, density: 0.11836379460400323 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6729973474801062 },
                { start: 800, end: 1800, density: 0.2832891246684351 },
                { start: 1800, density: 0.04371352785145875 },
              ],
              percentiles: { p75: 909 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8111455108359132 },
                { start: 1800, end: 3000, density: 0.1372904878829935 },
                { start: 3000, density: 0.05156400128109329 },
              ],
              percentiles: { p75: 1621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9409683838160513 },
                { start: 100, end: 300, density: 0.03902277249613089 },
                { start: 300, density: 0.02000884368781773 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8608583966606013 },
                { start: 2500, end: 4000, density: 0.09804131435299146 },
                { start: 4000, density: 0.04110028898640727 },
              ],
              percentiles: { p75: 1978 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1621,
        lcp: 1978,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064527776,
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
                { start: 0, end: 2500, density: 0.7457245724572468 },
                { start: 2500, end: 4000, density: 0.16846684668466866 },
                { start: 4000, density: 0.08580858085808464 },
              ],
              percentiles: { p75: 2641 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.766 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17170000000000002,
                },
                { start: "0.25", density: 0.062299999999999946 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8104241696678669 },
                { start: 200, end: 500, density: 0.13575430172068823 },
                { start: 500, density: 0.053821528611444784 },
              ],
              percentiles: { p75: 176 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.520747925207479 },
                { start: 800, end: 1800, density: 0.3975602439756023 },
                { start: 1800, density: 0.08169183081691851 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7277911164465788 },
                { start: 1800, end: 3000, density: 0.17847138855542224 },
                { start: 3000, density: 0.0937374949979989 },
              ],
              percentiles: { p75: 1989 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756 },
                { start: 100, end: 300, density: 0.018 },
                { start: 300, density: 0.006399999999999983 },
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
      extractedResults: { fcp: 1989, lcp: 2641, cls: "0.08", fid: 9 },
      timestamp: 1653064528547,
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
                  density: 0.9235772357723576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048780487804878044,
                },
                { start: "0.25", density: 0.027642276422764213 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6707317073170727 },
                { start: 200, end: 500, density: 0.23577235772357702 },
                { start: 500, density: 0.0934959349593503 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5064623338257012 },
                { start: 800, end: 1800, density: 0.367060561299852 },
                { start: 1800, density: 0.12647710487444677 },
              ],
              percentiles: { p75: 1300 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.671594899279245 },
                { start: 1800, end: 3000, density: 0.19922380336351844 },
                { start: 3000, density: 0.12918129735723657 },
              ],
              percentiles: { p75: 2168 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9600957701516362 },
                { start: 100, end: 300, density: 0.029728651237031126 },
                { start: 300, density: 0.010175578611332758 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7331000184195988 },
                { start: 2500, end: 4000, density: 0.1663289740283663 },
                { start: 4000, density: 0.10057100755203496 },
              ],
              percentiles: { p75: 2607 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2168,
        lcp: 2607,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1653064528995,
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
                { start: 0, end: 100, density: 0.9570700636942676 },
                { start: 100, end: 300, density: 0.03452229299363057 },
                { start: 300, density: 0.008407643312101898 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.765722097936862 },
                { start: 2500, end: 4000, density: 0.14479244345016135 },
                { start: 4000, density: 0.08948545861297666 },
              ],
              percentiles: { p75: 2442 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9578194375925012,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015540207202762703,
                },
                { start: "0.25", density: 0.02664035520473607 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5516859463450656 },
                { start: 200, end: 500, density: 0.3093773074083192 },
                { start: 500, density: 0.13893674624661517 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5154716043245928 },
                { start: 800, end: 1800, density: 0.37927177830247266 },
                { start: 1800, density: 0.1052566173729346 },
              ],
              percentiles: { p75: 1193 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6918568400049867 },
                { start: 1800, end: 3000, density: 0.1966579373986778 },
                { start: 3000, density: 0.11148522259633543 },
              ],
              percentiles: { p75: 2035 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2035,
        lcp: 2442,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1653064529753,
    },
  ],
};
