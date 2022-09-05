export const audit23 = {
  date: "2022-05-17T21:54:56.105Z",
  dateParsedLocale: "17/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "17/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8333833383338333 },
                { start: 1800, end: 3000, density: 0.13181318131813177 },
                { start: 3000, density: 0.03480348034803511 },
              ],
              percentiles: { p75: 1559 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657137145141942 },
                { start: 100, end: 300, density: 0.02119152339064374 },
                { start: 300, density: 0.013094762095161933 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8535207041408285 },
                { start: 2500, end: 4000, density: 0.11477295459091823 },
                { start: 4000, density: 0.03170634126825336 },
              ],
              percentiles: { p75: 2060 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9441 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044500000000000005,
                },
                { start: "0.25", density: 0.011400000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6164767046590687 },
                { start: 200, end: 500, density: 0.29074185162967425 },
                { start: 500, density: 0.09278144371125718 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6021193641907429 },
                { start: 800, end: 1800, density: 0.3559932020393883 },
                { start: 1800, density: 0.04188743376986879 },
              ],
              percentiles: { p75: 1022 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1559,
        lcp: 2060,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824427002,
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
                  density: 0.9699316040779457,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01638921151116273,
                },
                { start: "0.25", density: 0.013679184410891722 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5976294447910168 },
                { start: 200, end: 500, density: 0.3573300062383032 },
                { start: 500, density: 0.045040548970679974 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38721755971594596 },
                { start: 800, end: 1800, density: 0.5274370561652681 },
                { start: 1800, density: 0.08534538411878594 },
              ],
              percentiles: { p75: 1177 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6323032978447154 },
                { start: 1800, end: 3000, density: 0.26616463256297057 },
                { start: 3000, density: 0.10153206959231402 },
              ],
              percentiles: { p75: 2118 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965702947845805 },
                { start: 100, end: 300, density: 0.025793650793650792 },
                { start: 300, density: 0.008503401360544218 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7574597820446293 },
                { start: 2500, end: 4000, density: 0.15432018681888954 },
                { start: 4000, density: 0.0882200311364812 },
              ],
              percentiles: { p75: 2515 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2118,
        lcp: 2515,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824427989,
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
                { start: 0, end: 1800, density: 0.894199941707957 },
                { start: 1800, end: 3000, density: 0.08423200233168174 },
                { start: 3000, density: 0.021568055960361283 },
              ],
              percentiles: { p75: 1357 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959737548464062 },
                { start: 100, end: 300, density: 0.019087384431852074 },
                { start: 300, density: 0.021175067104085885 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9143478260869567 },
                { start: 2500, end: 4000, density: 0.06710144927536235 },
                { start: 4000, density: 0.018550724637681 },
              ],
              percentiles: { p75: 1757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9453551912568307,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039257981018119066,
                },
                { start: "0.25", density: 0.015386827725050336 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6576242147344383 },
                { start: 200, end: 500, density: 0.24500285551113674 },
                { start: 500, density: 0.09737292975442494 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6830488522660388 },
                { start: 800, end: 1800, density: 0.286933490288405 },
                { start: 1800, density: 0.03001765744555617 },
              ],
              percentiles: { p75: 904 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1357,
        lcp: 1757,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824428979,
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
                { start: 0, end: 800, density: 0.7848569713942789 },
                { start: 800, end: 1800, density: 0.19803960792158426 },
                { start: 1800, density: 0.017103420684136783 },
              ],
              percentiles: { p75: 795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9209683873549419 },
                { start: 1800, end: 3000, density: 0.06232492997198881 },
                { start: 3000, density: 0.016706682673069212 },
              ],
              percentiles: { p75: 1250 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472052794720528 },
                { start: 100, end: 300, density: 0.024397560243975606 },
                { start: 300, density: 0.028397160283971566 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9035596440355965 },
                { start: 2500, end: 4000, density: 0.07074292570742924 },
                { start: 4000, density: 0.02569743025697427 },
              ],
              percentiles: { p75: 1778 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7726999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1557 },
                { start: "0.25", density: 0.07159999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7117423484696942 },
                { start: 200, end: 500, density: 0.20434086817363484 },
                { start: 500, density: 0.08391678335667095 },
              ],
              percentiles: { p75: 222 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1250,
        lcp: 1778,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652824429705,
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
                { start: 0, end: 2500, density: 0.878861788617886 },
                { start: 2500, end: 4000, density: 0.09918699186991871 },
                { start: 4000, density: 0.021951219512195287 },
              ],
              percentiles: { p75: 1895 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9371482176360225,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0456982042347896,
                },
                { start: "0.25", density: 0.017153578129187896 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42401155917509525 },
                { start: 200, end: 500, density: 0.44174438460528054 },
                { start: 500, density: 0.13424405621962418 },
              ],
              percentiles: { p75: 357 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.646733261339093 },
                { start: 800, end: 1800, density: 0.32910367170626353 },
                { start: 1800, density: 0.02416306695464338 },
              ],
              percentiles: { p75: 918 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8825767871704269 },
                { start: 1800, end: 3000, density: 0.09649361239467245 },
                { start: 3000, density: 0.02092960043490071 },
              ],
              percentiles: { p75: 1398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583890821514585 },
                { start: 100, end: 300, density: 0.02609044688252609 },
                { start: 300, density: 0.015520470966015483 },
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
        lcp: 1895,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652824430166,
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
                { start: 0, end: 200, density: 0.6249720795175344 },
                { start: 200, end: 500, density: 0.2881393790484701 },
                { start: 500, density: 0.08688854143399546 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3483535528596187 },
                { start: 800, end: 1800, density: 0.5162478336221836 },
                { start: 1800, density: 0.1353986135181977 },
              ],
              percentiles: { p75: 1424 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5805833510751565 },
                { start: 1800, end: 3000, density: 0.26697892271662865 },
                { start: 3000, density: 0.15243772620821483 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9490052595472216 },
                { start: 100, end: 300, density: 0.034758746855705465 },
                { start: 300, density: 0.016235993597072937 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.712837084911967 },
                { start: 2500, end: 4000, density: 0.20225094718074413 },
                { start: 4000, density: 0.084911967907289 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9634930512341837,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0159717900850446,
                },
                { start: "0.25", density: 0.020535158680771638 },
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
        fcp: 2432,
        lcp: 2767,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824430829,
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
                { start: 0, end: 2500, density: 0.8595921622237411 },
                { start: 2500, end: 4000, density: 0.10463659147869672 },
                { start: 4000, density: 0.035771246297562245 },
              ],
              percentiles: { p75: 1977 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9353521605988432,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0561415447431099,
                },
                { start: "0.25", density: 0.00850629465804696 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.608362447875577 },
                { start: 200, end: 500, density: 0.3125211315225964 },
                { start: 500, density: 0.07911642060182657 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5595618439068921 },
                { start: 800, end: 1800, density: 0.39137380191693316 },
                { start: 1800, density: 0.04906435417617467 },
              ],
              percentiles: { p75: 1029 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8478607191624938 },
                { start: 1800, end: 3000, density: 0.11162949476558941 },
                { start: 3000, density: 0.040509786071916805 },
              ],
              percentiles: { p75: 1530 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582233444278663 },
                { start: 100, end: 300, density: 0.023642832549064616 },
                { start: 300, density: 0.018133823023069068 },
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
        fcp: 1530,
        lcp: 1977,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824431512,
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
                { start: 0, end: 200, density: 0.5561701081612588 },
                { start: 200, end: 500, density: 0.3533677482792528 },
                { start: 500, density: 0.09046214355948846 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6944131983502061 },
                { start: 800, end: 1800, density: 0.25496812898387705 },
                { start: 1800, density: 0.05061867266591675 },
              ],
              percentiles: { p75: 894 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8177389131792633 },
                { start: 1800, end: 3000, density: 0.12054965646470958 },
                { start: 3000, density: 0.06171143035602712 },
              ],
              percentiles: { p75: 1542 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488886098204194 },
                { start: 100, end: 300, density: 0.033153334170538735 },
                { start: 300, density: 0.01795805600904182 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8495115230460921 },
                { start: 2500, end: 4000, density: 0.10289328657314625 },
                { start: 4000, density: 0.04759519038076168 },
              ],
              percentiles: { p75: 1988 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9769785963165755,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.00970632155301145,
                },
                { start: "0.25", density: 0.013315082130413144 },
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
        fcp: 1542,
        lcp: 1988,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824432306,
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
                { start: 0, end: 200, density: 0.5296186394109242 },
                { start: 200, end: 500, density: 0.3509176832618969 },
                { start: 500, density: 0.11946367732717887 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6774159103043248 },
                { start: 800, end: 1800, density: 0.27698878804057675 },
                { start: 1800, density: 0.04559530165509854 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8099601164169449 },
                { start: 1800, end: 3000, density: 0.1366821170637059 },
                { start: 3000, density: 0.05335776651934919 },
              ],
              percentiles: { p75: 1623 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9388098173260114 },
                { start: 100, end: 300, density: 0.04012103552616833 },
                { start: 300, density: 0.021069147147820235 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8569806423704984 },
                { start: 2500, end: 4000, density: 0.101708662268844 },
                { start: 4000, density: 0.041310695360657686 },
              ],
              percentiles: { p75: 1995 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052993657959798,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08395141352251963,
                },
                { start: "0.25", density: 0.010749220681500592 },
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
        fcp: 1623,
        lcp: 1995,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824432748,
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
                { start: 0, end: 200, density: 0.6087225870400196 },
                { start: 200, end: 500, density: 0.3197868913393631 },
                { start: 500, density: 0.07149052162061735 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44685600892967875 },
                { start: 800, end: 1800, density: 0.43507379387324824 },
                { start: 1800, density: 0.11807019719707289 },
              ],
              percentiles: { p75: 1308 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6067554240631154 },
                { start: 1800, end: 3000, density: 0.24728796844181417 },
                { start: 3000, density: 0.14595660749507036 },
              ],
              percentiles: { p75: 2399 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9703795892968263 },
                { start: 100, end: 300, density: 0.021032980709396392 },
                { start: 300, density: 0.008587429993777223 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7022298878896136 },
                { start: 2500, end: 4000, density: 0.19292842183072548 },
                { start: 4000, density: 0.10484169027966102 },
              ],
              percentiles: { p75: 2750 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9623032816884227,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01707941929974381,
                },
                { start: "0.25", density: 0.02061729901183359 },
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
        fcp: 2399,
        lcp: 2750,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824433163,
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
                  density: 0.9442431000836354,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02341789796487315,
                },
                { start: "0.25", density: 0.032339001951491475 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6270146911995436 },
                { start: 200, end: 500, density: 0.3204963628583654 },
                { start: 500, density: 0.052488945942091074 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.259539842873176 },
                { start: 800, end: 1800, density: 0.5642536475869803 },
                { start: 1800, density: 0.1762065095398436 },
              ],
              percentiles: { p75: 1606 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46229600450197095 },
                { start: 1800, end: 3000, density: 0.3497467642093427 },
                { start: 3000, density: 0.1879572312886863 },
              ],
              percentiles: { p75: 2704 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9730323904440862 },
                { start: 100, end: 300, density: 0.022277590502711418 },
                { start: 300, density: 0.004690019053202406 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6227675432428634 },
                { start: 2500, end: 4000, density: 0.26599634369287034 },
                { start: 4000, density: 0.11123611306426613 },
              ],
              percentiles: { p75: 3052 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2704,
        lcp: 3052,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824433606,
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
                { start: 0, end: 1800, density: 0.8633502538071067 },
                { start: 1800, end: 3000, density: 0.10050761421319797 },
                { start: 3000, density: 0.036142131979695215 },
              ],
              percentiles: { p75: 1453 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9376642883965453 },
                { start: 100, end: 300, density: 0.03098009763424709 },
                { start: 300, density: 0.03135561396920764 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8635253409322208 },
                { start: 2500, end: 4000, density: 0.10370445756157134 },
                { start: 4000, density: 0.03277020150620786 },
              ],
              percentiles: { p75: 2024 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9657302251444511,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019725044829647338,
                },
                { start: "0.25", density: 0.014544730025901573 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5139500734214392 },
                { start: 200, end: 500, density: 0.3237885462555068 },
                { start: 500, density: 0.16226138032305387 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6708603896103896 },
                { start: 800, end: 1800, density: 0.29078733766233766 },
                { start: 1800, density: 0.03835227272727262 },
              ],
              percentiles: { p75: 942 },
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
        lcp: 2024,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824434141,
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
                { start: "0.00", end: "0.10", density: 0.94377444589309 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030312907431551493,
                },
                { start: "0.25", density: 0.025912646675358517 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6045128830614421 },
                { start: 200, end: 500, density: 0.2748894648574477 },
                { start: 500, density: 0.12059765208111017 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8396883289124668 },
                { start: 800, end: 1800, density: 0.14754641909814326 },
                { start: 1800, density: 0.012765251989389896 },
              ],
              percentiles: { p75: 705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9333333333333332 },
                { start: 1800, end: 3000, density: 0.048287385129490386 },
                { start: 3000, density: 0.01837928153717627 },
              ],
              percentiles: { p75: 1232 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9437744458930902 },
                { start: 100, end: 300, density: 0.03129074315514995 },
                { start: 300, density: 0.02493481095175991 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9322985468956406 },
                { start: 2500, end: 4000, density: 0.052179656538969624 },
                { start: 4000, density: 0.015521796565389762 },
              ],
              percentiles: { p75: 1619 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1232,
        lcp: 1619,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824434944,
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
                { start: 0, end: 2500, density: 0.4797973917093622 },
                { start: 2500, end: 4000, density: 0.31864229156963214 },
                { start: 4000, density: 0.20156031672100574 },
              ],
              percentiles: { p75: 3772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9585839888940305,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015849143914854234,
                },
                { start: "0.25", density: 0.025566867191115217 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46929170014923666 },
                { start: 200, end: 500, density: 0.4069567213867523 },
                { start: 500, density: 0.12375157846401105 },
              ],
              percentiles: { p75: 337 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2179934823091247 },
                { start: 800, end: 1800, density: 0.5257216014897579 },
                { start: 1800, density: 0.25628491620111754 },
              ],
              percentiles: { p75: 1841 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.349095154699358 },
                { start: 1800, end: 3000, density: 0.3406888499708114 },
                { start: 3000, density: 0.3102159953298306 },
              ],
              percentiles: { p75: 3429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9674671714184314 },
                { start: 100, end: 300, density: 0.0250798533065184 },
                { start: 300, density: 0.00745297527505028 },
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
        fcp: 3429,
        lcp: 3772,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824435754,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6208368915456874 },
                { start: 200, end: 500, density: 0.3023057216054653 },
                { start: 500, density: 0.07685738684884727 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5723130262506191 },
                { start: 800, end: 1800, density: 0.3827389796929173 },
                { start: 1800, density: 0.04494799405646361 },
              ],
              percentiles: { p75: 998 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.856446776611694 },
                { start: 1800, end: 3000, density: 0.10894552723638178 },
                { start: 3000, density: 0.034607696151924175 },
              ],
              percentiles: { p75: 1510 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625528738492164 },
                { start: 100, end: 300, density: 0.022020403085344618 },
                { start: 300, density: 0.015426723065439117 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8863806903451724 },
                { start: 2500, end: 4000, density: 0.08535517758879435 },
                { start: 4000, density: 0.028264132066033235 },
              ],
              percentiles: { p75: 1862 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9769814607440587,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01368669901704616,
                },
                { start: "0.25", density: 0.009331840238895103 },
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
        fcp: 1510,
        lcp: 1862,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824436535,
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
                { start: 0, end: 2500, density: 0.8111311131113111 },
                { start: 2500, end: 4000, density: 0.13486348634863485 },
                { start: 4000, density: 0.05400540054005406 },
              ],
              percentiles: { p75: 2225 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8863113688631138,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08559144085591441,
                },
                { start: "0.25", density: 0.028097190280971893 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5984401559844015 },
                { start: 200, end: 500, density: 0.29777022297770217 },
                { start: 500, density: 0.10378962103789627 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6127612761276128 },
                { start: 800, end: 1800, density: 0.34533453345334525 },
                { start: 1800, density: 0.04190419041904206 },
              ],
              percentiles: { p75: 973 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7920584116823358 },
                { start: 1800, end: 3000, density: 0.1550310062012402 },
                { start: 3000, density: 0.0529105821164239 },
              ],
              percentiles: { p75: 1689 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587958795879588 },
                { start: 100, end: 300, density: 0.0254025402540254 },
                { start: 300, density: 0.015801580158015843 },
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
        fcp: 1689,
        lcp: 2225,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824437255,
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
                { start: 0, end: 800, density: 0.688094685541889 },
                { start: 800, end: 1800, density: 0.285100951496867 },
                { start: 1800, density: 0.026804362961243926 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8956182610690524 },
                { start: 1800, end: 3000, density: 0.08189951823812794 },
                { start: 3000, density: 0.022482220692819556 },
              ],
              percentiles: { p75: 1373 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784313725490196 },
                { start: 100, end: 300, density: 0.016262975778546712 },
                { start: 300, density: 0.005305651672433687 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9129213483146067 },
                { start: 2500, end: 4000, density: 0.070797982114194 },
                { start: 4000, density: 0.016280669571199276 },
              ],
              percentiles: { p75: 1715 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9049090284929626,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08296143723538163,
                },
                { start: "0.25", density: 0.012129534271655808 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6483305036785514 },
                { start: 200, end: 500, density: 0.2942840973401246 },
                { start: 500, density: 0.057385398981323985 },
              ],
              percentiles: { p75: 241 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1373,
        lcp: 1715,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824437622,
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
                  density: 0.9634930512341837,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0159717900850446,
                },
                { start: "0.25", density: 0.020535158680771638 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6249720795175344 },
                { start: 200, end: 500, density: 0.2881393790484701 },
                { start: 500, density: 0.08688854143399546 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3483535528596187 },
                { start: 800, end: 1800, density: 0.5162478336221836 },
                { start: 1800, density: 0.1353986135181977 },
              ],
              percentiles: { p75: 1424 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5805833510751565 },
                { start: 1800, end: 3000, density: 0.26697892271662865 },
                { start: 3000, density: 0.15243772620821483 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9490052595472216 },
                { start: 100, end: 300, density: 0.034758746855705465 },
                { start: 300, density: 0.016235993597072937 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.712837084911967 },
                { start: 2500, end: 4000, density: 0.20225094718074413 },
                { start: 4000, density: 0.084911967907289 },
              ],
              percentiles: { p75: 2767 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2432,
        lcp: 2767,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824438338,
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
                  density: 0.9353986551392891,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024135446685878963,
                },
                { start: "0.25", density: 0.040465898174831885 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4779644509374242 },
                { start: 200, end: 500, density: 0.3551253956659364 },
                { start: 500, density: 0.1669101533966394 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4362561814015193 },
                { start: 800, end: 1800, density: 0.4398745627789165 },
                { start: 1800, density: 0.12386925581956422 },
              ],
              percentiles: { p75: 1297 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6048680067813023 },
                { start: 1800, end: 3000, density: 0.24037297166384086 },
                { start: 3000, density: 0.15475902155485688 },
              ],
              percentiles: { p75: 2360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536300348085528 },
                { start: 100, end: 300, density: 0.03170064644455495 },
                { start: 300, density: 0.014669318746892163 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7037974683544307 },
                { start: 2500, end: 4000, density: 0.17359855334538876 },
                { start: 4000, density: 0.12260397830018052 },
              ],
              percentiles: { p75: 2783 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2360,
        lcp: 2783,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824439366,
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
                { start: 0, end: 800, density: 0.7835689045936397 },
                { start: 800, end: 1800, density: 0.17491166077738515 },
                { start: 1800, density: 0.04151943462897515 },
              ],
              percentiles: { p75: 753 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8648580758603368 },
                { start: 1800, end: 3000, density: 0.08867118814368252 },
                { start: 3000, density: 0.04647073599598079 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9366081575956559 },
                { start: 100, end: 300, density: 0.036368228311655496 },
                { start: 300, density: 0.027023614092688636 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8826562696516159 },
                { start: 2500, end: 4000, density: 0.08024147905923783 },
                { start: 4000, density: 0.03710225128914637 },
              ],
              percentiles: { p75: 1758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9331333583302087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03762029746281715,
                },
                { start: "0.25", density: 0.029246344206974115 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4879429133858272 },
                { start: 200, end: 500, density: 0.377706692913386 },
                { start: 500, density: 0.13435039370078675 },
              ],
              percentiles: { p75: 313 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1391,
        lcp: 1758,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824440251,
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
                { start: 0, end: 1800, density: 0.619671803081849 },
                { start: 1800, end: 3000, density: 0.23123874324594754 },
                { start: 3000, density: 0.14908945367220353 },
              ],
              percentiles: { p75: 2307 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9570957095709571 },
                { start: 100, end: 300, density: 0.02870287028702871 },
                { start: 300, density: 0.01420142014201422 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7005401080216034 },
                { start: 2500, end: 4000, density: 0.17123424684936966 },
                { start: 4000, density: 0.12822564512902698 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.874 },
                { start: "0.10", end: "0.25", density: 0.0737 },
                { start: "0.25", density: 0.05230000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5440264158495094 },
                { start: 200, end: 500, density: 0.30718431058635165 },
                { start: 500, density: 0.14878927356413899 },
              ],
              percentiles: { p75: 339 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4494797919167665 },
                { start: 800, end: 1800, density: 0.43247298919567795 },
                { start: 1800, density: 0.11804721888755562 },
              ],
              percentiles: { p75: 1272 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2307,
        lcp: 2821,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824441227,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572389290699149 },
                { start: 100, end: 300, density: 0.02690013957619591 },
                { start: 300, density: 0.015860931353889097 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8518952957155204 },
                { start: 2500, end: 4000, density: 0.11624891961970607 },
                { start: 4000, density: 0.031855784664773484 },
              ],
              percentiles: { p75: 2061 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9466108992496002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04379382457866896,
                },
                { start: "0.25", density: 0.009595276171730834 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5420244285887051 },
                { start: 200, end: 500, density: 0.3478050550247916 },
                { start: 500, density: 0.1101705163865034 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5754494730316181 },
                { start: 800, end: 1800, density: 0.37693738375697455 },
                { start: 1800, density: 0.047613143211407354 },
              ],
              percentiles: { p75: 1050 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.812809099901088 },
                { start: 1800, end: 3000, density: 0.14750247279920867 },
                { start: 3000, density: 0.039688427299703385 },
              ],
              percentiles: { p75: 1605 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1605,
        lcp: 2061,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824441930,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4383807681680025 },
                { start: 800, end: 1800, density: 0.4273279911577788 },
                { start: 1800, density: 0.13429124067421863 },
              ],
              percentiles: { p75: 1383 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6538619275461374 },
                { start: 1800, end: 3000, density: 0.20300751879699222 },
                { start: 3000, density: 0.14313055365687033 },
              ],
              percentiles: { p75: 2219 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657590759075907 },
                { start: 100, end: 300, density: 0.026952695269526948 },
                { start: 300, density: 0.007288228822882284 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7242536291426996 },
                { start: 2500, end: 4000, density: 0.14317995069843856 },
                { start: 4000, density: 0.1325664201588617 },
              ],
              percentiles: { p75: 2756 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9336403033586133,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023158179848320696,
                },
                { start: "0.25", density: 0.04320151679306608 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6538358008075371 },
                { start: 200, end: 500, density: 0.2969044414535667 },
                { start: 500, density: 0.049259757738896175 },
              ],
              percentiles: { p75: 236 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2219,
        lcp: 2756,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824442903,
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
                { start: 0, end: 800, density: 0.2828467153284672 },
                { start: 800, end: 1800, density: 0.43508863399374365 },
                { start: 1800, density: 0.2820646506777891 },
              ],
              percentiles: { p75: 1915 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4727320398531723 },
                { start: 1800, end: 3000, density: 0.38633980073413726 },
                { start: 3000, density: 0.1409281594126904 },
              ],
              percentiles: { p75: 2641 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9048241600209177 },
                { start: 100, end: 300, density: 0.031768858674336514 },
                { start: 300, density: 0.06340698130474583 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.596587960560456 },
                { start: 2500, end: 4000, density: 0.3040347690710948 },
                { start: 4000, density: 0.099377270368449 },
              ],
              percentiles: { p75: 3100 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9428424964757144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02678457003716519,
                },
                { start: "0.25", density: 0.030372933487120345 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47265624999999983 },
                { start: 200, end: 500, density: 0.3232106854838709 },
                { start: 500, density: 0.20413306451612936 },
              ],
              percentiles: { p75: 380 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2641,
        lcp: 3100,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652824443854,
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
                { start: 0, end: 800, density: 0.3151945583675105 },
                { start: 800, end: 1800, density: 0.4548364509352809 },
                { start: 1800, density: 0.22996899069720866 },
              ],
              percentiles: { p75: 1736 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.09630963096309626 },
                { start: 1800, end: 3000, density: 0.39003900390038987 },
                { start: 3000, density: 0.5136513651365138 },
              ],
              percentiles: { p75: 5029 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.24689937987597424 },
                { start: 2500, end: 4000, density: 0.3438187637527492 },
                { start: 4000, density: 0.4092818563712765 },
              ],
              percentiles: { p75: 5667 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8578 },
                { start: "0.10", end: "0.25", density: 0.0798 },
                { start: "0.25", density: 0.062399999999999976 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8206641328265653 },
                { start: 200, end: 500, density: 0.12052410482096418 },
                { start: 500, density: 0.05881176235247055 },
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
      extractedResults: { fcp: 5029, lcp: 5667, cls: "0.05" },
      timestamp: 1652824444777,
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
                  density: 0.9768446709505872,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01185464214491469,
                },
                { start: "0.25", density: 0.011300686904498107 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5553217410565956 },
                { start: 200, end: 500, density: 0.3382434378114963 },
                { start: 500, density: 0.10643482113190816 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.405880402343318 },
                { start: 800, end: 1800, density: 0.38952138830551547 },
                { start: 1800, density: 0.2045982093511665 },
              ],
              percentiles: { p75: 1714 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5219463533584571 },
                { start: 1800, end: 3000, density: 0.3589004655287075 },
                { start: 3000, density: 0.11915318111283538 },
              ],
              percentiles: { p75: 2406 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9220301171221416 },
                { start: 100, end: 300, density: 0.05499163413273842 },
                { start: 300, density: 0.02297824874512001 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5998777913565154 },
                { start: 2500, end: 4000, density: 0.2949116764803908 },
                { start: 4000, density: 0.10521053216309377 },
              ],
              percentiles: { p75: 3095 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2406,
        lcp: 3095,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824445411,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9758048390321936 },
                { start: 100, end: 300, density: 0.018196360727854428 },
                { start: 300, density: 0.00599880023995201 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7393499999999998 },
                { start: 2500, end: 4000, density: 0.14664999999999995 },
                { start: 4000, density: 0.11400000000000032 },
              ],
              percentiles: { p75: 2643 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9284928492849284,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057005700570057,
                },
                { start: "0.25", density: 0.014501450145014498 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6612338766123388 },
                { start: 200, end: 500, density: 0.29547045295470453 },
                { start: 500, density: 0.04329567043295674 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41524152415241533 },
                { start: 800, end: 1800, density: 0.505950595059506 },
                { start: 1800, density: 0.07880788078807871 },
              ],
              percentiles: { p75: 1170 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6621351459416233 },
                { start: 1800, end: 3000, density: 0.2430027988804478 },
                { start: 3000, density: 0.09486205517792894 },
              ],
              percentiles: { p75: 2096 },
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
      timestamp: 1652824446257,
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
                { start: 0, end: 2500, density: 0.7786330049261082 },
                { start: 2500, end: 4000, density: 0.1491995073891626 },
                { start: 4000, density: 0.07216748768472933 },
              ],
              percentiles: { p75: 2363 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9377679774592673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02940095553105476,
                },
                { start: "0.25", density: 0.032831067009677806 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3992919921874997 },
                { start: 200, end: 500, density: 0.4288330078124998 },
                { start: 500, density: 0.17187500000000053 },
              ],
              percentiles: { p75: 395 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5337738619676942 },
                { start: 800, end: 1800, density: 0.3742046010768475 },
                { start: 1800, density: 0.09202153695545834 },
              ],
              percentiles: { p75: 1141 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7305514524864599 },
                { start: 1800, end: 3000, density: 0.17700640078778931 },
                { start: 3000, density: 0.09244214672575096 },
              ],
              percentiles: { p75: 1885 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9172988434274347 },
                { start: 100, end: 300, density: 0.049620693943539386 },
                { start: 300, density: 0.03308046262902604 },
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
        fcp: 1885,
        lcp: 2363,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1652824446877,
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
                  density: 0.9708168879320656,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015309173543834471,
                },
                { start: "0.25", density: 0.013873938524099998 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6834068949063581 },
                { start: 200, end: 500, density: 0.26303232732911835 },
                { start: 500, density: 0.05356077776452357 },
              ],
              percentiles: { p75: 231 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38385286038456895 },
                { start: 800, end: 1800, density: 0.47665114057088187 },
                { start: 1800, density: 0.13949599904454926 },
              ],
              percentiles: { p75: 1386 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.576367140448084 },
                { start: 1800, end: 3000, density: 0.27174174897614994 },
                { start: 3000, density: 0.15189111057576607 },
              ],
              percentiles: { p75: 2395 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662629757785467 },
                { start: 100, end: 300, density: 0.026816608996539797 },
                { start: 300, density: 0.0069204152249135046 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7142943305186978 },
                { start: 2500, end: 4000, density: 0.1662846803377565 },
                { start: 4000, density: 0.11942098914354562 },
              ],
              percentiles: { p75: 2722 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2395,
        lcp: 2722,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824447883,
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
                { start: 0, end: 800, density: 0.5931477516059953 },
                { start: 800, end: 1800, density: 0.30433618843683063 },
                { start: 1800, density: 0.1025160599571739 },
              ],
              percentiles: { p75: 1113 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7175757575757563 },
                { start: 1800, end: 3000, density: 0.17481481481481456 },
                { start: 3000, density: 0.10760942760942914 },
              ],
              percentiles: { p75: 1973 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9407417360924483 },
                { start: 100, end: 300, density: 0.03735554958344531 },
                { start: 300, density: 0.021902714324106457 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7704983922829568 },
                { start: 2500, end: 4000, density: 0.14375669882100733 },
                { start: 4000, density: 0.08574490889603581 },
              ],
              percentiles: { p75: 2416 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9247569583166867,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05406845119190305,
                },
                { start: "0.25", density: 0.02117459049141029 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.439643885833988 },
                { start: 200, end: 500, density: 0.39054726368159204 },
                { start: 500, density: 0.1698088504844199 },
              ],
              percentiles: { p75: 375 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1973,
        lcp: 2416,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824448930,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8657597279183751 },
                { start: 1800, end: 3000, density: 0.10193057917375209 },
                { start: 3000, density: 0.03230969290787284 },
              ],
              percentiles: { p75: 1470 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677064587082583 },
                { start: 100, end: 300, density: 0.01859628074385123 },
                { start: 300, density: 0.013697260547890373 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8765246950609877 },
                { start: 2500, end: 4000, density: 0.09238152369526088 },
                { start: 4000, density: 0.031093781243751485 },
              ],
              percentiles: { p75: 1896 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9569999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030699999999999995,
                },
                { start: "0.25", density: 0.012299999999999997 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6683994801559535 },
                { start: 200, end: 500, density: 0.2611216635009498 },
                { start: 500, density: 0.07047885634309684 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5959383753501402 },
                { start: 800, end: 1800, density: 0.36284513805522206 },
                { start: 1800, density: 0.041216486594637836 },
              ],
              percentiles: { p75: 973 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1470,
        lcp: 1896,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652824449771,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8509634820105104 },
                { start: 1800, end: 3000, density: 0.10820644118043388 },
                { start: 3000, density: 0.04083007680905569 },
              ],
              percentiles: { p75: 1432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9415181518151815 },
                { start: 100, end: 300, density: 0.03524752475247525 },
                { start: 300, density: 0.023234323432343346 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8678927512799783 },
                { start: 2500, end: 4000, density: 0.09774993263271353 },
                { start: 4000, density: 0.034357316087308215 },
              ],
              percentiles: { p75: 1907 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.961430293290478,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024373911878933972,
                },
                { start: "0.25", density: 0.014195794830587917 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4678217821782174 },
                { start: 200, end: 500, density: 0.3913496612819174 },
                { start: 500, density: 0.1408285565398652 },
              ],
              percentiles: { p75: 346 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.698072516511659 },
                { start: 800, end: 1800, density: 0.24127240868041513 },
                { start: 1800, density: 0.060655074807925834 },
              ],
              percentiles: { p75: 893 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1432,
        lcp: 1907,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1652824450331,
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
                  density: 0.9274927492749275,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04490449044904491,
                },
                { start: "0.25", density: 0.027602760276027604 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5168999999999999 },
                { start: 200, end: 500, density: 0.3671 },
                { start: 500, density: 0.11600000000000008 },
              ],
              percentiles: { p75: 326 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22345530893821217 },
                { start: 800, end: 1800, density: 0.530593881223755 },
                { start: 1800, density: 0.2459508098380329 },
              ],
              percentiles: { p75: 1823 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3659097729318811 },
                { start: 1800, end: 3000, density: 0.3352005601680518 },
                { start: 3000, density: 0.298889666900067 },
              ],
              percentiles: { p75: 3363 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9700999999999999 },
                { start: 100, end: 300, density: 0.022799999999999994 },
                { start: 300, density: 0.0070999999999999995 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48314831483148296 },
                { start: 2500, end: 4000, density: 0.3032303230323032 },
                { start: 4000, density: 0.21362136213621397 },
              ],
              percentiles: { p75: 3841 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3363,
        lcp: 3841,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652824450999,
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
                  density: 0.931157006440151,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04552520541860981,
                },
                { start: "0.25", density: 0.02331778814123917 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4909320961619566 },
                { start: 200, end: 500, density: 0.3431041754533949 },
                { start: 500, density: 0.16596372838464848 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.619026047565119 },
                { start: 800, end: 1800, density: 0.33816534541336346 },
                { start: 1800, density: 0.04280860702151757 },
              ],
              percentiles: { p75: 947 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8526051188299818 },
                { start: 1800, end: 3000, density: 0.10146252285191958 },
                { start: 3000, density: 0.04593235831809861 },
              ],
              percentiles: { p75: 1504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9406915502633387 },
                { start: 100, end: 300, density: 0.03732539500801465 },
                { start: 300, density: 0.021983054728646596 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8795345653661876 },
                { start: 2500, end: 4000, density: 0.08783937942048829 },
                { start: 4000, density: 0.03262605521332415 },
              ],
              percentiles: { p75: 1970 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1504,
        lcp: 1970,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824451439,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8233121019108282 },
                { start: 800, end: 1800, density: 0.14891719745222928 },
                { start: 1800, density: 0.027770700636942744 },
              ],
              percentiles: { p75: 715 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9065220133720197 },
                { start: 1800, end: 3000, density: 0.06913081872082757 },
                { start: 3000, density: 0.02434716790715269 },
              ],
              percentiles: { p75: 1232 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525345027731202 },
                { start: 100, end: 300, density: 0.02721527150780344 },
                { start: 300, density: 0.020250225719076413 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9035939470365701 },
                { start: 2500, end: 4000, density: 0.07622950819672132 },
                { start: 4000, density: 0.020176544766708656 },
              ],
              percentiles: { p75: 1801 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8942875078468299,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0714375392341494,
                },
                { start: "0.25", density: 0.034274952919020725 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47800000000000004 },
                { start: 200, end: 500, density: 0.37687500000000007 },
                { start: 500, density: 0.14512499999999992 },
              ],
              percentiles: { p75: 350 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1232,
        lcp: 1801,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824452133,
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
                { start: "0.00", end: "0.10", density: 0.9035 },
                { start: "0.10", end: "0.25", density: 0.0495 },
                { start: "0.25", density: 0.046999999999999986 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6309892967890374 },
                { start: 200, end: 500, density: 0.2855856757027111 },
                { start: 500, density: 0.08342502750825156 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3046390721855628 },
                { start: 800, end: 1800, density: 0.5317936412717456 },
                { start: 1800, density: 0.16356728654269168 },
              ],
              percentiles: { p75: 1538 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5254101640656251 },
                { start: 1800, end: 3000, density: 0.28821528611444514 },
                { start: 3000, density: 0.18637454981992965 },
              ],
              percentiles: { p75: 2663 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644964496449644 },
                { start: 100, end: 300, density: 0.025102510251025098 },
                { start: 300, density: 0.010401040104010384 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6391639163916388 },
                { start: 2500, end: 4000, density: 0.23282328232823268 },
                { start: 4000, density: 0.12801280128012837 },
              ],
              percentiles: { p75: 3054 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2663,
        lcp: 3054,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1652824452690,
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
                { start: 0, end: 100, density: 0.9620941696413394 },
                { start: 100, end: 300, density: 0.022777494475607684 },
                { start: 300, density: 0.015128335883052868 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9086656819300837 },
                { start: 2500, end: 4000, density: 0.0706548498276711 },
                { start: 4000, density: 0.020679468242245244 },
              ],
              percentiles: { p75: 1881 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.972231088413661,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020108522183210978,
                },
                { start: "0.25", density: 0.007660389403127993 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5540952075653149 },
                { start: 200, end: 500, density: 0.3321045039269114 },
                { start: 500, density: 0.11380028850777373 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7189144736842105 },
                { start: 800, end: 1800, density: 0.2501644736842105 },
                { start: 1800, density: 0.03092105263157895 },
              ],
              percentiles: { p75: 849 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8878722342372317 },
                { start: 1800, end: 3000, density: 0.08833804691399103 },
                { start: 3000, density: 0.023789718848777265 },
              ],
              percentiles: { p75: 1373 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1373,
        lcp: 1881,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824452946,
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
                  density: 0.9474870017331021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03015597920277296,
                },
                { start: "0.25", density: 0.022357019064124777 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5579793340987376 },
                { start: 200, end: 500, density: 0.3121207151057899 },
                { start: 500, density: 0.1298999507954725 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7357411049526194 },
                { start: 800, end: 1800, density: 0.24369747899159658 },
                { start: 1800, density: 0.020561416055784078 },
              ],
              percentiles: { p75: 865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8946718419195484 },
                { start: 1800, end: 3000, density: 0.08203952011291461 },
                { start: 3000, density: 0.023288637967537034 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.909106830122592 },
                { start: 100, end: 300, density: 0.041155866900175135 },
                { start: 300, density: 0.04973730297723285 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8833392163783976 },
                { start: 2500, end: 4000, density: 0.08418637486763149 },
                { start: 4000, density: 0.032474408753970965 },
              ],
              percentiles: { p75: 1894 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 1894,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824453446,
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
                { start: 0, end: 800, density: 0.2711000000000012 },
                { start: 800, end: 1800, density: 0.4447000000000019 },
                { start: 1800, density: 0.2841999999999969 },
              ],
              percentiles: { p75: 1925 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5116023204640906 },
                { start: 1800, end: 3000, density: 0.2550510102020394 },
                { start: 3000, density: 0.23334666933387005 },
              ],
              percentiles: { p75: 2947 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9570914182836567 },
                { start: 100, end: 300, density: 0.03050610122024405 },
                { start: 300, density: 0.012402480496099233 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5611244497799122 },
                { start: 2500, end: 4000, density: 0.23879551820728306 },
                { start: 4000, density: 0.2000800320128048 },
              ],
              percentiles: { p75: 3630 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8265826582658267,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11681168116811681,
                },
                { start: "0.25", density: 0.05660566056605665 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6072 },
                { start: 200, end: 500, density: 0.2909 },
                { start: 500, density: 0.10189999999999994 },
              ],
              percentiles: { p75: 274 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2947,
        lcp: 3630,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1652824453918,
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
                { start: 0, end: 100, density: 0.9776977697769778 },
                { start: 100, end: 300, density: 0.015201520152015199 },
                { start: 300, density: 0.007100710071007096 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7459016393442642 },
                { start: 2500, end: 4000, density: 0.16953218712515045 },
                { start: 4000, density: 0.08456617353058517 },
              ],
              percentiles: { p75: 2649 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7706229377062294,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16938306169383063,
                },
                { start: "0.25", density: 0.05999400059993998 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8066193380661939 },
                { start: 200, end: 500, density: 0.1437856214378563 },
                { start: 500, density: 0.04959504049594988 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5036496350364963 },
                { start: 800, end: 1800, density: 0.4014598540145986 },
                { start: 1800, density: 0.09489051094890501 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7083708370837094 },
                { start: 1800, end: 3000, density: 0.18751875187518777 },
                { start: 3000, density: 0.10411041104110273 },
              ],
              percentiles: { p75: 2006 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2006, lcp: 2649, cls: "0.08", fid: 9 },
      timestamp: 1652824454223,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8946718419195484 },
                { start: 1800, end: 3000, density: 0.08203952011291461 },
                { start: 3000, density: 0.023288637967537034 },
              ],
              percentiles: { p75: 1383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.909106830122592 },
                { start: 100, end: 300, density: 0.041155866900175135 },
                { start: 300, density: 0.04973730297723285 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8833392163783976 },
                { start: 2500, end: 4000, density: 0.08418637486763149 },
                { start: 4000, density: 0.032474408753970965 },
              ],
              percentiles: { p75: 1894 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9474870017331021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03015597920277296,
                },
                { start: "0.25", density: 0.022357019064124777 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5579793340987376 },
                { start: 200, end: 500, density: 0.3121207151057899 },
                { start: 500, density: 0.1298999507954725 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7357411049526194 },
                { start: 800, end: 1800, density: 0.24369747899159658 },
                { start: 1800, density: 0.020561416055784078 },
              ],
              percentiles: { p75: 865 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1383,
        lcp: 1894,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824454547,
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
                  density: 0.8675496688741722,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09226624761477158,
                },
                { start: "0.25", density: 0.040184083511056234 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4339277549154093 },
                { start: 200, end: 500, density: 0.3305898491083677 },
                { start: 500, density: 0.23548239597622297 },
              ],
              percentiles: { p75: 472 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3809310653536253 },
                { start: 800, end: 1800, density: 0.4007385854968661 },
                { start: 1800, density: 0.21833034914950863 },
              ],
              percentiles: { p75: 1697 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4643621213827263 },
                { start: 1800, end: 3000, density: 0.25391284765229094 },
                { start: 3000, density: 0.2817250309649827 },
              ],
              percentiles: { p75: 3250 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9005608787099789 },
                { start: 100, end: 300, density: 0.06450105164758121 },
                { start: 300, density: 0.03493806964243987 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5128842676311026 },
                { start: 2500, end: 4000, density: 0.2459312839059672 },
                { start: 4000, density: 0.2411844484629302 },
              ],
              percentiles: { p75: 3967 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3250,
        lcp: 3967,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1652824455045,
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
                { start: 0, end: 200, density: 0.6655750337121934 },
                { start: 200, end: 500, density: 0.23425158928915407 },
                { start: 500, density: 0.10017337699865256 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5104610257359743 },
                { start: 800, end: 1800, density: 0.36752453249398226 },
                { start: 1800, density: 0.12201444177004343 },
              ],
              percentiles: { p75: 1305 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6667282127031015 },
                { start: 1800, end: 3000, density: 0.20180945347119625 },
                { start: 3000, density: 0.13146233382570222 },
              ],
              percentiles: { p75: 2198 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9592407592407592 },
                { start: 100, end: 300, density: 0.029970029970029975 },
                { start: 300, density: 0.010789210789210746 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7292588495575216 },
                { start: 2500, end: 4000, density: 0.16970870206489672 },
                { start: 4000, density: 0.1010324483775817 },
              ],
              percentiles: { p75: 2627 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9237871107892831,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04779145546705286,
                },
                { start: "0.25", density: 0.028421433743664015 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2198,
        lcp: 2627,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652824455468,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5656224525445438 },
                { start: 200, end: 500, density: 0.323628741120298 },
                { start: 500, density: 0.11074880633515816 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6035433532793617 },
                { start: 800, end: 1800, density: 0.35257538425437046 },
                { start: 1800, density: 0.043881262466267945 },
              ],
              percentiles: { p75: 986 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7845518867924522 },
                { start: 1800, end: 3000, density: 0.16025943396226405 },
                { start: 3000, density: 0.05518867924528374 },
              ],
              percentiles: { p75: 1711 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548002385211688 },
                { start: 100, end: 300, density: 0.027191413237924865 },
                { start: 300, density: 0.018008348240906358 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8185137204098456 },
                { start: 2500, end: 4000, density: 0.13037333647391353 },
                { start: 4000, density: 0.0511129431162409 },
              ],
              percentiles: { p75: 2203 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8757946785966564,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09394866964916412,
                },
                { start: "0.25", density: 0.030256651754179437 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 2203,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824455898,
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
                { start: 0, end: 100, density: 0.9747000000000001 },
                { start: 100, end: 300, density: 0.018600000000000002 },
                { start: 300, density: 0.006699999999999977 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7816189713828294 },
                { start: 2500, end: 4000, density: 0.1352311386832099 },
                { start: 4000, density: 0.0831498899339607 },
              ],
              percentiles: { p75: 2323 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8255651130226046,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14252850570114023,
                },
                { start: "0.25", density: 0.03190638127625526 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7992999999999999 },
                { start: 200, end: 500, density: 0.13879999999999995 },
                { start: 500, density: 0.061900000000000156 },
              ],
              percentiles: { p75: 171 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6235494197679072 },
                { start: 800, end: 1800, density: 0.2881152460984394 },
                { start: 1800, density: 0.08833533413365334 },
              ],
              percentiles: { p75: 1091 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7611088871096873 },
                { start: 1800, end: 3000, density: 0.14751801441152917 },
                { start: 3000, density: 0.09137309847878343 },
              ],
              percentiles: { p75: 1762 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1762,
        lcp: 2323,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652824456346,
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
                { start: 0, end: 100, density: 0.9475209916033585 },
                { start: 100, end: 300, density: 0.030287884846061573 },
                { start: 300, density: 0.022191123550579884 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8833233353329331 },
                { start: 2500, end: 4000, density: 0.07898420315936806 },
                { start: 4000, density: 0.0376924615076988 },
              ],
              percentiles: { p75: 1754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9366063393660635,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035596440355964404,
                },
                { start: "0.25", density: 0.027797220277972184 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5647129425885178 },
                { start: 200, end: 500, density: 0.32106421284256875 },
                { start: 500, density: 0.11422284456891353 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7983000000000002 },
                { start: 800, end: 1800, density: 0.1643 },
                { start: 1800, density: 0.037399999999999864 },
              ],
              percentiles: { p75: 729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.875187518751875 },
                { start: 1800, end: 3000, density: 0.08170817081708165 },
                { start: 3000, density: 0.04310431043104344 },
              ],
              percentiles: { p75: 1348 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1348,
        lcp: 1754,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824456649,
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
                { start: 0, end: 100, density: 0.9711 },
                { start: 100, end: 300, density: 0.022799999999999997 },
                { start: 300, density: 0.006100000000000008 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7187781221877821 },
                { start: 2500, end: 4000, density: 0.1619338066193383 },
                { start: 4000, density: 0.11928807119287962 },
              ],
              percentiles: { p75: 2711 },
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
                  density: 0.041100000000000005,
                },
                { start: "0.25", density: 0.014099999999999993 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7249899959983992 },
                { start: 200, end: 500, density: 0.22649059623849532 },
                { start: 500, density: 0.048519407763105545 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4172417241724167 },
                { start: 800, end: 1800, density: 0.459645964596459 },
                { start: 1800, density: 0.12311231123112434 },
              ],
              percentiles: { p75: 1315 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6129838951685511 },
                { start: 1800, end: 3000, density: 0.25187556266880096 },
                { start: 3000, density: 0.13514054216264798 },
              ],
              percentiles: { p75: 2279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2279,
        lcp: 2711,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824456991,
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
                { start: 0, end: 100, density: 0.9448055194480551 },
                { start: 100, end: 300, density: 0.0362963703629637 },
                { start: 300, density: 0.018898110188981094 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8592796398199097 },
                { start: 2500, end: 4000, density: 0.10040020010004996 },
                { start: 4000, density: 0.040320160080040385 },
              ],
              percentiles: { p75: 1984 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8757 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10600000000000001,
                },
                { start: "0.25", density: 0.01829999999999998 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5681568156815683 },
                { start: 200, end: 500, density: 0.32203220322032206 },
                { start: 500, density: 0.10981098109810972 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6857743097238896 },
                { start: 800, end: 1800, density: 0.27030812324929976 },
                { start: 1800, density: 0.04391756702681049 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.817426970788315 },
                { start: 1800, end: 3000, density: 0.13145258103241292 },
                { start: 3000, density: 0.05112044817927205 },
              ],
              percentiles: { p75: 1600 },
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
        lcp: 1984,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824457322,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527047295270473 },
                { start: 100, end: 300, density: 0.025397460253974605 },
                { start: 300, density: 0.02189781021897802 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7564012802560511 },
                { start: 2500, end: 4000, density: 0.1569813962792559 },
                { start: 4000, density: 0.08661732346469293 },
              ],
              percentiles: { p75: 2477 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8042195780421958,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15998400159984003,
                },
                { start: "0.25", density: 0.03579642035796415 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6508301660332064 },
                { start: 200, end: 500, density: 0.2360472094418884 },
                { start: 500, density: 0.1131226245249051 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5330999999999999 },
                { start: 800, end: 1800, density: 0.3835999999999999 },
                { start: 1800, density: 0.08330000000000029 },
              ],
              percentiles: { p75: 1149 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7251274872512743 },
                { start: 1800, end: 3000, density: 0.19578042195780407 },
                { start: 3000, density: 0.07909209079092167 },
              ],
              percentiles: { p75: 1902 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1902,
        lcp: 2477,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1652824457615,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7330199059717917 },
                { start: 200, end: 500, density: 0.18505551665499645 },
                { start: 500, density: 0.08192457737321199 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8567570271081325 },
                { start: 800, end: 1800, density: 0.13043913173952187 },
                { start: 1800, density: 0.012803841152345731 },
              ],
              percentiles: { p75: 668 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9454000000000001 },
                { start: 1800, end: 3000, density: 0.04069999999999999 },
                { start: 3000, density: 0.013899999999999964 },
              ],
              percentiles: { p75: 1128 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964589376813044 },
                { start: 100, end: 300, density: 0.019805941782534763 },
                { start: 300, density: 0.015604681404421204 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9404380876175235 },
                { start: 2500, end: 4000, density: 0.04675935187037404 },
                { start: 4000, density: 0.01280256051210246 },
              ],
              percentiles: { p75: 1559 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8327999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12169999999999999,
                },
                { start: "0.25", density: 0.0455 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1128,
        lcp: 1559,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652824457903,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9035596440355965 },
                { start: 2500, end: 4000, density: 0.07074292570742924 },
                { start: 4000, density: 0.02569743025697427 },
              ],
              percentiles: { p75: 1778 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7726999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1557 },
                { start: "0.25", density: 0.07159999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7117423484696942 },
                { start: 200, end: 500, density: 0.20434086817363484 },
                { start: 500, density: 0.08391678335667095 },
              ],
              percentiles: { p75: 222 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7848569713942789 },
                { start: 800, end: 1800, density: 0.19803960792158426 },
                { start: 1800, density: 0.017103420684136783 },
              ],
              percentiles: { p75: 795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9209683873549419 },
                { start: 1800, end: 3000, density: 0.06232492997198881 },
                { start: 3000, density: 0.016706682673069212 },
              ],
              percentiles: { p75: 1250 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472052794720528 },
                { start: 100, end: 300, density: 0.024397560243975606 },
                { start: 300, density: 0.028397160283971566 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1250,
        lcp: 1778,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652824458186,
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
                { start: "0.00", end: "0.10", density: 0.858 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10149999999999999,
                },
                { start: "0.25", density: 0.04050000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4836483648364831 },
                { start: 200, end: 500, density: 0.30023002300229995 },
                { start: 500, density: 0.21612161216121695 },
              ],
              percentiles: { p75: 436 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4044999999999996 },
                { start: 800, end: 1800, density: 0.39399999999999963 },
                { start: 1800, density: 0.20150000000000076 },
              ],
              percentiles: { p75: 1628 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4964503549645081 },
                { start: 1800, end: 3000, density: 0.24277572242775938 },
                { start: 3000, density: 0.26077392260773247 },
              ],
              percentiles: { p75: 3124 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9115469281568942 },
                { start: 100, end: 300, density: 0.05743446067640584 },
                { start: 300, density: 0.031018611166700075 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.536618309154576 },
                { start: 2500, end: 4000, density: 0.23506753376688302 },
                { start: 4000, density: 0.22831415707854102 },
              ],
              percentiles: { p75: 3853 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3124,
        lcp: 3853,
        cls: "0.03",
        fid: 16,
      },
      timestamp: 1652824458471,
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
                { start: 0, end: 800, density: 0.5036496350364963 },
                { start: 800, end: 1800, density: 0.4014598540145986 },
                { start: 1800, density: 0.09489051094890501 },
              ],
              percentiles: { p75: 1230 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7083708370837094 },
                { start: 1800, end: 3000, density: 0.18751875187518777 },
                { start: 3000, density: 0.10411041104110273 },
              ],
              percentiles: { p75: 2006 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9776977697769778 },
                { start: 100, end: 300, density: 0.015201520152015199 },
                { start: 300, density: 0.007100710071007096 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7459016393442642 },
                { start: 2500, end: 4000, density: 0.16953218712515045 },
                { start: 4000, density: 0.08456617353058517 },
              ],
              percentiles: { p75: 2649 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7706229377062294,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16938306169383063,
                },
                { start: "0.25", density: 0.05999400059993998 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8066193380661939 },
                { start: 200, end: 500, density: 0.1437856214378563 },
                { start: 500, density: 0.04959504049594988 },
              ],
              percentiles: { p75: 178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2006, lcp: 2649, cls: "0.08", fid: 9 },
      timestamp: 1652824458760,
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
                { start: 0, end: 800, density: 0.37276272372762703 },
                { start: 800, end: 1800, density: 0.41525847415258454 },
                { start: 1800, density: 0.21197880211978845 },
              ],
              percentiles: { p75: 1688 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6261747650469889 },
                { start: 1800, end: 3000, density: 0.21145770845830775 },
                { start: 3000, density: 0.16236752649470348 },
              ],
              percentiles: { p75: 2477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620886265879764 },
                { start: 100, end: 300, density: 0.02620786235870762 },
                { start: 300, density: 0.011703511053315982 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6789178917891782 },
                { start: 2500, end: 4000, density: 0.19296929692969278 },
                { start: 4000, density: 0.12811281128112897 },
              ],
              percentiles: { p75: 2954 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8066193380661933,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12918708129187081,
                },
                { start: "0.25", density: 0.06419358064193575 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7542000000000001 },
                { start: 200, end: 500, density: 0.18580000000000005 },
                { start: 500, density: 0.05999999999999981 },
              ],
              percentiles: { p75: 197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2477,
        lcp: 2954,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652824459063,
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
                { start: 0, end: 200, density: 0.5633559531153609 },
                { start: 200, end: 500, density: 0.29784083898827884 },
                { start: 500, density: 0.13880320789636025 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5191659383193904 },
                { start: 800, end: 1800, density: 0.3781995255337742 },
                { start: 1800, density: 0.10263453614683546 },
              ],
              percentiles: { p75: 1186 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6909796071562606 },
                { start: 1800, end: 3000, density: 0.19954960590516668 },
                { start: 3000, density: 0.10947078693857269 },
              ],
              percentiles: { p75: 2035 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621843353416228 },
                { start: 100, end: 300, density: 0.02935521087040123 },
                { start: 300, density: 0.008460453787975874 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7620264207377874 },
                { start: 2500, end: 4000, density: 0.14699651046859427 },
                { start: 4000, density: 0.09097706879361835 },
              ],
              percentiles: { p75: 2450 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9591786244433448,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014720435428005938,
                },
                { start: "0.25", density: 0.026100940128649164 },
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
        fcp: 2035,
        lcp: 2450,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824459415,
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
                { start: 0, end: 2500, density: 0.5887822435512892 },
                { start: 2500, end: 4000, density: 0.2555488902219554 },
                { start: 4000, density: 0.1556688662267555 },
              ],
              percentiles: { p75: 3259 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7875212478752123,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1276872312768723,
                },
                { start: "0.25", density: 0.08479152084791532 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6219999999999999 },
                { start: 200, end: 500, density: 0.2406 },
                { start: 500, density: 0.13740000000000016 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28232823282328257 },
                { start: 800, end: 1800, density: 0.39453945394539486 },
                { start: 1800, density: 0.32313231323132247 },
              ],
              percentiles: { p75: 2028 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5021497850214973 },
                { start: 1800, end: 3000, density: 0.28807119288071165 },
                { start: 3000, density: 0.2097790220977909 },
              ],
              percentiles: { p75: 2785 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9369189243227032 },
                { start: 100, end: 300, density: 0.03508947315805259 },
                { start: 300, density: 0.02799160251924421 },
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
        fcp: 2785,
        lcp: 3259,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1652824459843,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9716275470724788 },
                { start: 100, end: 300, density: 0.018828991488264127 },
                { start: 300, density: 0.00954346143925716 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6245831348261076 },
                { start: 2500, end: 4000, density: 0.2908527870414483 },
                { start: 4000, density: 0.08456407813244403 },
              ],
              percentiles: { p75: 3056 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.975963826749167,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005949547834364588,
                },
                { start: "0.25", density: 0.018086625416468348 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6826946546253356 },
                { start: 200, end: 500, density: 0.2675128142543325 },
                { start: 500, density: 0.04979253112033193 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24589025237323453 },
                { start: 800, end: 1800, density: 0.5149340125028942 },
                { start: 1800, density: 0.23917573512387139 },
              ],
              percentiles: { p75: 1808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4553419323436359 },
                { start: 1800, end: 3000, density: 0.37770747140423466 },
                { start: 3000, density: 0.1669505962521294 },
              ],
              percentiles: { p75: 2779 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2779,
        lcp: 3056,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824460124,
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
                  density: 0.9692969296929693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019901990199019903,
                },
                { start: "0.25", density: 0.010801080108010798 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5701429857014298 },
                { start: 200, end: 500, density: 0.3243675632436755 },
                { start: 500, density: 0.10548945105489459 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4132132132132129 },
                { start: 800, end: 1800, density: 0.3840840840840838 },
                { start: 1800, density: 0.20270270270270324 },
              ],
              percentiles: { p75: 1709 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5331665832916455 },
                { start: 1800, end: 3000, density: 0.3477738869434716 },
                { start: 3000, density: 0.11905952976488281 },
              ],
              percentiles: { p75: 2399 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9258703481392556 },
                { start: 100, end: 300, density: 0.05232092837134854 },
                { start: 300, density: 0.021808723489395797 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6057711542308459 },
                { start: 2500, end: 4000, density: 0.2864072814562912 },
                { start: 4000, density: 0.1078215643128628 },
              ],
              percentiles: { p75: 3093 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2399,
        lcp: 3093,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824460564,
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
                  density: 0.9315931593159317,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04460446044604461,
                },
                { start: "0.25", density: 0.023802380238023786 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6632673465306941 },
                { start: 200, end: 500, density: 0.2705458908218357 },
                { start: 500, density: 0.06618676264747014 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44311137772445486 },
                { start: 800, end: 1800, density: 0.4470105978804236 },
                { start: 1800, density: 0.10987802439512162 },
              ],
              percentiles: { p75: 1300 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6159999999999993 },
                { start: 1800, end: 3000, density: 0.24549999999999983 },
                { start: 3000, density: 0.13850000000000087 },
              ],
              percentiles: { p75: 2341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9751074677596722 },
                { start: 100, end: 300, density: 0.017594721583524944 },
                { start: 300, density: 0.007297810656802957 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6965196519651957 },
                { start: 2500, end: 4000, density: 0.19166916691669156 },
                { start: 4000, density: 0.11181118111811267 },
              ],
              percentiles: { p75: 2799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2341,
        lcp: 2799,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652824460883,
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
                { start: 0, end: 800, density: 0.2495776378436488 },
                { start: 800, end: 1800, density: 0.38058669943173035 },
                { start: 1800, density: 0.3698356627246209 },
              ],
              percentiles: { p75: 2168 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4257164988381097 },
                { start: 1800, end: 3000, density: 0.32145623547637475 },
                { start: 3000, density: 0.25282726568551556 },
              ],
              percentiles: { p75: 3044 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9125846590014176 },
                { start: 100, end: 300, density: 0.04992912269648765 },
                { start: 300, density: 0.037486218302094865 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5445918839685238 },
                { start: 2500, end: 4000, density: 0.287069896620892 },
                { start: 4000, density: 0.16833821941058436 },
              ],
              percentiles: { p75: 3414 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9425757575757576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031363636363636364,
                },
                { start: "0.25", density: 0.0260606060606061 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47345811598649823 },
                { start: 200, end: 500, density: 0.33906106167536015 },
                { start: 500, density: 0.18748082233814164 },
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
        fcp: 3044,
        lcp: 3414,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1652824461183,
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
                { start: 0, end: 2500, density: 0.6990614233099676 },
                { start: 2500, end: 4000, density: 0.1682309611500534 },
                { start: 4000, density: 0.13270761553997895 },
              ],
              percentiles: { p75: 2840 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9358187824445493,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02182633317602643,
                },
                { start: "0.25", density: 0.04235488437942427 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5806144320076213 },
                { start: 200, end: 500, density: 0.3262681590854969 },
                { start: 500, density: 0.09311740890688176 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4405552918841957 },
                { start: 800, end: 1800, density: 0.41931656383483634 },
                { start: 1800, density: 0.140128144280968 },
              ],
              percentiles: { p75: 1379 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6094920899250615 },
                { start: 1800, end: 3000, density: 0.22064945878434597 },
                { start: 3000, density: 0.16985845129059243 },
              ],
              percentiles: { p75: 2435 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9437469821342348 },
                { start: 100, end: 300, density: 0.03573153066151617 },
                { start: 300, density: 0.020521487204248994 },
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
        lcp: 2840,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824461702,
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
                { start: 0, end: 1800, density: 0.6357907372211664 },
                { start: 1800, end: 3000, density: 0.2555766730019005 },
                { start: 3000, density: 0.10863258977693305 },
              ],
              percentiles: { p75: 2329 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9854029194161168 },
                { start: 100, end: 300, density: 0.010897820435912817 },
                { start: 300, density: 0.003699260147970406 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7145499999999999 },
                { start: 2500, end: 4000, density: 0.19925 },
                { start: 4000, density: 0.08620000000000008 },
              ],
              percentiles: { p75: 2795 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7306 },
                { start: "0.10", end: "0.25", density: 0.1932 },
                { start: "0.25", density: 0.07619999999999998 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.854985498549855 },
                { start: 200, end: 500, density: 0.12171217121712172 },
                { start: 500, density: 0.023302330233023298 },
              ],
              percentiles: { p75: 149 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3103 },
                { start: 800, end: 1800, density: 0.5414000000000001 },
                { start: 1800, density: 0.14829999999999993 },
              ],
              percentiles: { p75: 1548 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2329, lcp: 2795, cls: "0.11", fid: 8 },
      timestamp: 1652824462164,
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
                { start: "0.00", end: "0.10", density: 0.8176 },
                { start: "0.10", end: "0.25", density: 0.1207 },
                { start: "0.25", density: 0.06170000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7103289671032901 },
                { start: 200, end: 500, density: 0.22777722227777233 },
                { start: 500, density: 0.0618938106189376 },
              ],
              percentiles: { p75: 216 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48110755697720947 },
                { start: 800, end: 1800, density: 0.401239504198321 },
                { start: 1800, density: 0.11765293882446952 },
              ],
              percentiles: { p75: 1337 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6941611677664468 },
                { start: 1800, end: 3000, density: 0.17716456708658265 },
                { start: 3000, density: 0.12867426514697047 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9751024897510248 },
                { start: 100, end: 300, density: 0.019598040195980396 },
                { start: 300, density: 0.005299470052994697 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7342765723427641 },
                { start: 2500, end: 4000, density: 0.13303669633036666 },
                { start: 4000, density: 0.13268673132686912 },
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
        fcp: 2108,
        lcp: 2769,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652824462516,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.57517255176553 },
                { start: 800, end: 1800, density: 0.37801340402120653 },
                { start: 1800, density: 0.04681404421326349 },
              ],
              percentiles: { p75: 1016 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8539292141571683 },
                { start: 1800, end: 3000, density: 0.10667866426714648 },
                { start: 3000, density: 0.03939212157568526 },
              ],
              percentiles: { p75: 1507 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629962996299629 },
                { start: 100, end: 300, density: 0.020602060206020602 },
                { start: 300, density: 0.016401640164016483 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8586141385861412 },
                { start: 2500, end: 4000, density: 0.10428957104289571 },
                { start: 4000, density: 0.037096290370963035 },
              ],
              percentiles: { p75: 1983 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9014098590140985,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08619138086191382,
                },
                { start: "0.25", density: 0.012398760123987608 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6476999999999996 },
                { start: 200, end: 500, density: 0.2801999999999998 },
                { start: 500, density: 0.07210000000000054 },
              ],
              percentiles: { p75: 248 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1507,
        lcp: 1983,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652824462826,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6572028391482532 },
                { start: 1800, end: 3000, density: 0.13365990202939068 },
                { start: 3000, density: 0.20913725882235604 },
              ],
              percentiles: { p75: 2572 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533953395339535 },
                { start: 100, end: 300, density: 0.029902990299029906 },
                { start: 300, density: 0.0167016701670167 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.67166716671667 },
                { start: 2500, end: 4000, density: 0.1671167116711667 },
                { start: 4000, density: 0.16121612161216337 },
              ],
              percentiles: { p75: 2978 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.908 },
                { start: "0.10", end: "0.25", density: 0.0632 },
                { start: "0.25", density: 0.02880000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6700329967003298 },
                { start: 200, end: 500, density: 0.24567543245675424 },
                { start: 500, density: 0.084291570842916 },
              ],
              percentiles: { p75: 224 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5154000000000002 },
                { start: 800, end: 1800, density: 0.27990000000000004 },
                { start: 1800, density: 0.20469999999999983 },
              ],
              percentiles: { p75: 1549 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2572,
        lcp: 2978,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824463131,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9524000000000001 },
                { start: 100, end: 300, density: 0.027900000000000008 },
                { start: 300, density: 0.019700000000000006 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8754249150169959 },
                { start: 2500, end: 4000, density: 0.09198160367926408 },
                { start: 4000, density: 0.032593481303739964 },
              ],
              percentiles: { p75: 1866 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8623275344931013,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09018196360727854,
                },
                { start: "0.25", density: 0.04749050189962012 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5596440355964403 },
                { start: 200, end: 500, density: 0.3236676332366763 },
                { start: 500, density: 0.11668833116688342 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7215443088617722 },
                { start: 800, end: 1800, density: 0.22604520904180836 },
                { start: 1800, density: 0.0524104820964194 },
              ],
              percentiles: { p75: 852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.868486848684868 },
                { start: 1800, end: 3000, density: 0.09560956095609559 },
                { start: 3000, density: 0.03590359035903652 },
              ],
              percentiles: { p75: 1363 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1363,
        lcp: 1866,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1652824463438,
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
                { start: 0, end: 200, density: 0.5654434556544347 },
                { start: 200, end: 500, density: 0.2656734326567343 },
                { start: 500, density: 0.16888311168883108 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2928000000000003 },
                { start: 800, end: 1800, density: 0.4476000000000005 },
                { start: 1800, density: 0.25959999999999933 },
              ],
              percentiles: { p75: 1877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5150515051505155 },
                { start: 1800, end: 3000, density: 0.3516351635163519 },
                { start: 3000, density: 0.1333133313331327 },
              ],
              percentiles: { p75: 2583 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9227154569086182 },
                { start: 100, end: 300, density: 0.02429514097180564 },
                { start: 300, density: 0.05298940211957617 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6212121212121214 },
                { start: 2500, end: 4000, density: 0.28237823782378235 },
                { start: 4000, density: 0.09640964096409613 },
              ],
              percentiles: { p75: 3068 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8425842584258425,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0766076607660766,
                },
                { start: "0.25", density: 0.08080808080808095 },
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
        fcp: 2583,
        lcp: 3068,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652824463729,
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
                { start: "0.00", end: "0.10", density: 0.7879 },
                { start: "0.10", end: "0.25", density: 0.146 },
                { start: "0.25", density: 0.06609999999999999 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7734546909381876 },
                { start: 200, end: 500, density: 0.18253650730146032 },
                { start: 500, density: 0.044008801760352045 },
              ],
              percentiles: { p75: 188 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5097999999999999 },
                { start: 800, end: 1800, density: 0.38009999999999994 },
                { start: 1800, density: 0.11010000000000031 },
              ],
              percentiles: { p75: 1224 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7647764776477642 },
                { start: 1800, end: 3000, density: 0.1384138413841383 },
                { start: 3000, density: 0.09680968096809754 },
              ],
              percentiles: { p75: 1752 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.976504699060188 },
                { start: 100, end: 300, density: 0.019596080783843232 },
                { start: 300, density: 0.0038992201559688035 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.813381338133813 },
                { start: 2500, end: 4000, density: 0.1096109610961096 },
                { start: 4000, density: 0.07700770077007744 },
              ],
              percentiles: { p75: 2121 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1752,
        lcp: 2121,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1652824464090,
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
                { start: "0.00", end: "0.10", density: 0.908 },
                { start: "0.10", end: "0.25", density: 0.0632 },
                { start: "0.25", density: 0.02880000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6700329967003298 },
                { start: 200, end: 500, density: 0.24567543245675424 },
                { start: 500, density: 0.084291570842916 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5154000000000002 },
                { start: 800, end: 1800, density: 0.27990000000000004 },
                { start: 1800, density: 0.20469999999999983 },
              ],
              percentiles: { p75: 1565 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6572028391482532 },
                { start: 1800, end: 3000, density: 0.13365990202939068 },
                { start: 3000, density: 0.20913725882235604 },
              ],
              percentiles: { p75: 2705 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533953395339535 },
                { start: 100, end: 300, density: 0.029902990299029906 },
                { start: 300, density: 0.0167016701670167 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.67166716671667 },
                { start: 2500, end: 4000, density: 0.1671167116711667 },
                { start: 4000, density: 0.16121612161216337 },
              ],
              percentiles: { p75: 3066 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2705,
        lcp: 3066,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824464398,
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
                { start: 0, end: 1800, density: 0.4790540540540527 },
                { start: 1800, end: 3000, density: 0.26869369369369284 },
                { start: 3000, density: 0.25225225225225456 },
              ],
              percentiles: { p75: 3082 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.950473331794043 },
                { start: 100, end: 300, density: 0.03521126760563381 },
                { start: 300, density: 0.014315400600323267 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5406014190787253 },
                { start: 2500, end: 4000, density: 0.24923977925442073 },
                { start: 4000, density: 0.21015880166685388 },
              ],
              percentiles: { p75: 3680 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8346192552834619,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1076819859107682,
                },
                { start: "0.25", density: 0.05769875880576988 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.569291338582677 },
                { start: 200, end: 500, density: 0.32103487064116976 },
                { start: 500, density: 0.10967379077615322 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24851140321312346 },
                { start: 800, end: 1800, density: 0.44871362768228534 },
                { start: 1800, density: 0.3027749691045912 },
              ],
              percentiles: { p75: 1974 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3082,
        lcp: 3680,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652824464868,
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
                { start: 0, end: 1800, density: 0.9068906890689067 },
                { start: 1800, end: 3000, density: 0.07320732073207319 },
                { start: 3000, density: 0.01990199019902008 },
              ],
              percentiles: { p75: 1277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692907872361708 },
                { start: 100, end: 300, density: 0.014704411323397018 },
                { start: 300, density: 0.01600480144043219 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9091590840915907 },
                { start: 2500, end: 4000, density: 0.07034296570342967 },
                { start: 4000, density: 0.020497950204979673 },
              ],
              percentiles: { p75: 1758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8602139786021398,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10828917108289171,
                },
                { start: "0.25", density: 0.03149685031496848 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7221000000000007 },
                { start: 200, end: 500, density: 0.19710000000000016 },
                { start: 500, density: 0.08079999999999901 },
              ],
              percentiles: { p75: 213 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7160851744476656 },
                { start: 800, end: 1800, density: 0.25762271318604424 },
                { start: 1800, density: 0.026292112366290022 },
              ],
              percentiles: { p75: 852 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1277,
        lcp: 1758,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652824465320,
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
                { start: 0, end: 2500, density: 0.9074500000000001 },
                { start: 2500, end: 4000, density: 0.07375000000000001 },
                { start: 4000, density: 0.01879999999999983 },
              ],
              percentiles: { p75: 1742 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8844 },
                { start: "0.10", end: "0.25", density: 0.0999 },
                { start: "0.25", density: 0.01570000000000001 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6826365273054613 },
                { start: 200, end: 500, density: 0.2635527105421085 },
                { start: 500, density: 0.05381076215243017 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7046999999999998 },
                { start: 800, end: 1800, density: 0.2702000000000001 },
                { start: 1800, density: 0.025100000000000004 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8982898289828982 },
                { start: 1800, end: 3000, density: 0.07810781078107808 },
                { start: 3000, density: 0.023602360236023693 },
              ],
              percentiles: { p75: 1353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9809942982894868 },
                { start: 100, end: 300, density: 0.014104231269380811 },
                { start: 300, density: 0.00490147044113235 },
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
        fcp: 1353,
        lcp: 1742,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1652824465628,
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
                { start: 0, end: 800, density: 0.7159 },
                { start: 800, end: 1800, density: 0.23750000000000004 },
                { start: 1800, density: 0.046599999999999996 },
              ],
              percentiles: { p75: 862 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8367836783678368 },
                { start: 1800, end: 3000, density: 0.10631063106310633 },
                { start: 3000, density: 0.05690569056905687 },
              ],
              percentiles: { p75: 1449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588835534213684 },
                { start: 100, end: 300, density: 0.026810724289715884 },
                { start: 300, density: 0.014305722288915565 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8522647735226476 },
                { start: 2500, end: 4000, density: 0.09854014598540142 },
                { start: 4000, density: 0.04919508049195108 },
              ],
              percentiles: { p75: 1976 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.955995599559956,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029302930293029304,
                },
                { start: "0.25", density: 0.014701470147014705 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6309630963096313 },
                { start: 200, end: 500, density: 0.2915291529152917 },
                { start: 500, density: 0.07750775077507713 },
              ],
              percentiles: { p75: 255 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1449,
        lcp: 1976,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652824465947,
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
                { start: 0, end: 100, density: 0.9543133566245633 },
                { start: 100, end: 300, density: 0.032786885245901634 },
                { start: 300, density: 0.012899758129535074 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6038086688894582 },
                { start: 2500, end: 4000, density: 0.2633367530135929 },
                { start: 4000, density: 0.13285457809694884 },
              ],
              percentiles: { p75: 3155 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9302945657694262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021838496698831898,
                },
                { start: "0.25", density: 0.04786693753174195 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5483198749674396 },
                { start: 200, end: 500, density: 0.3556915863506123 },
                { start: 500, density: 0.09598853868194795 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2693187595322826 },
                { start: 800, end: 1800, density: 0.538383324860193 },
                { start: 1800, density: 0.19229791560752438 },
              ],
              percentiles: { p75: 1610 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4672247263361224 },
                { start: 1800, end: 3000, density: 0.3184803605924009 },
                { start: 3000, density: 0.21429491307147674 },
              ],
              percentiles: { p75: 2826 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2826,
        lcp: 3155,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824466268,
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
                  density: 0.8693000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08020000000000001,
                },
                { start: "0.25", density: 0.05049999999999998 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47784778477847745 },
                { start: 200, end: 500, density: 0.3721372137213719 },
                { start: 500, density: 0.1500150015001506 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5622562256225617 },
                { start: 800, end: 1800, density: 0.3533353335333532 },
                { start: 1800, density: 0.08440844084408494 },
              ],
              percentiles: { p75: 1102 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7514751475147514 },
                { start: 1800, end: 3000, density: 0.1633163316331633 },
                { start: 3000, density: 0.08520852085208525 },
              ],
              percentiles: { p75: 1808 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9292141571685664 },
                { start: 100, end: 300, density: 0.04239152169566087 },
                { start: 300, density: 0.02839432113577276 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7861000000000004 },
                { start: 2500, end: 4000, density: 0.1420000000000001 },
                { start: 4000, density: 0.07189999999999953 },
              ],
              percentiles: { p75: 2328 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1808,
        lcp: 2328,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1652824466802,
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
                { start: 0, end: 200, density: 0.6333266653330669 },
                { start: 200, end: 500, density: 0.299359871974395 },
                { start: 500, density: 0.06731346269253814 },
              ],
              percentiles: { p75: 262 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3182681731826819 },
                { start: 800, end: 1800, density: 0.4777522247775226 },
                { start: 1800, density: 0.20397960203979554 },
              ],
              percentiles: { p75: 1692 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5298059611922379 },
                { start: 1800, end: 3000, density: 0.29335867173434654 },
                { start: 3000, density: 0.17683536707341546 },
              ],
              percentiles: { p75: 2607 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9727972797279727 },
                { start: 100, end: 300, density: 0.0213021302130213 },
                { start: 300, density: 0.005900590059005904 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6388277655531104 },
                { start: 2500, end: 4000, density: 0.21624324864972985 },
                { start: 4000, density: 0.1449289857971598 },
              ],
              percentiles: { p75: 3082 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9106821364272856,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06081216243248649,
                },
                { start: "0.25", density: 0.02850570114022803 },
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
        fcp: 2607,
        lcp: 3082,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1652824467108,
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
                  density: 0.7624237576242375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11818818118188179,
                },
                { start: "0.25", density: 0.11938806119388062 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6291629162916291 },
                { start: 200, end: 500, density: 0.3046304630463046 },
                { start: 500, density: 0.06620662066206628 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45970000000000066 },
                { start: 800, end: 1800, density: 0.29750000000000043 },
                { start: 1800, density: 0.24279999999999904 },
              ],
              percentiles: { p75: 1752 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5462453754624544 },
                { start: 1800, end: 3000, density: 0.18198180181981827 },
                { start: 3000, density: 0.27177282271772724 },
              ],
              percentiles: { p75: 3249 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.038 },
                { start: 300, density: 0.0037 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5927314537092587 },
                { start: 2500, end: 4000, density: 0.187912417516497 },
                { start: 4000, density: 0.2193561287742443 },
              ],
              percentiles: { p75: 3706 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3249,
        lcp: 3706,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1652824467395,
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
                { start: 0, end: 1800, density: 0.6964411972660849 },
                { start: 1800, end: 3000, density: 0.21470657553617709 },
                { start: 3000, density: 0.08885222719773811 },
              ],
              percentiles: { p75: 1996 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9440019605440509 },
                { start: 100, end: 300, density: 0.030633500796471022 },
                { start: 300, density: 0.025364538659477943 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7384524512699351 },
                { start: 2500, end: 4000, density: 0.16881275841701127 },
                { start: 4000, density: 0.09273479031305364 },
              ],
              percentiles: { p75: 2550 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7788224233164884,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18380538253613823,
                },
                { start: "0.25", density: 0.03737219414737332 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5989644622264062 },
                { start: 200, end: 500, density: 0.27371146152035775 },
                { start: 500, density: 0.12732407625323616 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5025166803230714 },
                { start: 800, end: 1800, density: 0.4052440594638885 },
                { start: 1800, density: 0.09223926021304008 },
              ],
              percentiles: { p75: 1194 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1996,
        lcp: 2550,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1652824467819,
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
                { start: 0, end: 800, density: 0.7101289871012898 },
                { start: 800, end: 1800, density: 0.24837516248375158 },
                { start: 1800, density: 0.041495850414958436 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8916566626650659 },
                { start: 1800, end: 3000, density: 0.07733093237294915 },
                { start: 3000, density: 0.031012404961984878 },
              ],
              percentiles: { p75: 1321 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972610955617753 },
                { start: 100, end: 300, density: 0.017792882846861258 },
                { start: 300, density: 0.009596161535385816 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8936787357471493 },
                { start: 2500, end: 4000, density: 0.08071614322864569 },
                { start: 4000, density: 0.025605121024205035 },
              ],
              percentiles: { p75: 1800 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8196 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15470000000000003,
                },
                { start: "0.25", density: 0.0257 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7421999999999999 },
                { start: 200, end: 500, density: 0.17569999999999997 },
                { start: 500, density: 0.08210000000000023 },
              ],
              percentiles: { p75: 208 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1321, lcp: 1800, cls: "0.08", fid: 9 },
      timestamp: 1652824468258,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5927314537092587 },
                { start: 2500, end: 4000, density: 0.187912417516497 },
                { start: 4000, density: 0.2193561287742443 },
              ],
              percentiles: { p75: 3565 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7624237576242375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11818818118188179,
                },
                { start: "0.25", density: 0.11938806119388062 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6291629162916291 },
                { start: 200, end: 500, density: 0.3046304630463046 },
                { start: 500, density: 0.06620662066206628 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45970000000000066 },
                { start: 800, end: 1800, density: 0.29750000000000043 },
                { start: 1800, density: 0.24279999999999904 },
              ],
              percentiles: { p75: 1645 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5462453754624544 },
                { start: 1800, end: 3000, density: 0.18198180181981827 },
                { start: 3000, density: 0.27177282271772724 },
              ],
              percentiles: { p75: 3006 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.038 },
                { start: 300, density: 0.0037 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3006,
        lcp: 3565,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1652824468580,
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
                { start: 0, end: 1800, density: 0.5462453754624544 },
                { start: 1800, end: 3000, density: 0.18198180181981827 },
                { start: 3000, density: 0.27177282271772724 },
              ],
              percentiles: { p75: 3249 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.038 },
                { start: 300, density: 0.0037 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5927314537092587 },
                { start: 2500, end: 4000, density: 0.187912417516497 },
                { start: 4000, density: 0.2193561287742443 },
              ],
              percentiles: { p75: 3706 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7624237576242375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11818818118188179,
                },
                { start: "0.25", density: 0.11938806119388062 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6291629162916291 },
                { start: 200, end: 500, density: 0.3046304630463046 },
                { start: 500, density: 0.06620662066206628 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45970000000000066 },
                { start: 800, end: 1800, density: 0.29750000000000043 },
                { start: 1800, density: 0.24279999999999904 },
              ],
              percentiles: { p75: 1752 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3249,
        lcp: 3706,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1652824468948,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8845884588458846,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0638063806380638,
                },
                { start: "0.25", density: 0.051605160516051574 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6342365763423661 },
                { start: 200, end: 500, density: 0.28177182281771834 },
                { start: 500, density: 0.08399160083991561 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45844584458445803 },
                { start: 800, end: 1800, density: 0.41364136413641334 },
                { start: 1800, density: 0.12791279127912872 },
              ],
              percentiles: { p75: 1330 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6334900470141028 },
                { start: 1800, end: 3000, density: 0.2123637091127334 },
                { start: 3000, density: 0.1541462438731637 },
              ],
              percentiles: { p75: 2322 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951409718056389 },
                { start: 100, end: 300, density: 0.03089382123575286 },
                { start: 300, density: 0.017696460707858304 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7075915183036593 },
                { start: 2500, end: 4000, density: 0.16278255651130188 },
                { start: 4000, density: 0.1296259251850389 },
              ],
              percentiles: { p75: 2814 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2322,
        lcp: 2814,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824469430,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4890425254369936 },
                { start: 1800, end: 3000, density: 0.31046177928515467 },
                { start: 3000, density: 0.20049569527785163 },
              ],
              percentiles: { p75: 2755 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644051920246219 },
                { start: 100, end: 300, density: 0.027699718988358088 },
                { start: 300, density: 0.007895088987019945 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6254235079489172 },
                { start: 2500, end: 4000, density: 0.22954130831378636 },
                { start: 4000, density: 0.14503518373729635 },
              ],
              percentiles: { p75: 3091 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9449612403100776,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025322997416020673,
                },
                { start: "0.25", density: 0.029715762273901776 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5472708278924001 },
                { start: 200, end: 500, density: 0.37712196395925834 },
                { start: 500, density: 0.07560720814834161 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.301529686284677 },
                { start: 800, end: 1800, density: 0.478480684469795 },
                { start: 1800, density: 0.21998962924552787 },
              ],
              percentiles: { p75: 1744 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2755,
        lcp: 3091,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824469760,
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
                { start: 0, end: 200, density: 0.6285628562856281 },
                { start: 200, end: 500, density: 0.2645264526452644 },
                { start: 500, density: 0.10691069106910742 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4461338401520449 },
                { start: 800, end: 1800, density: 0.3730119035710708 },
                { start: 1800, density: 0.18085425627688423 },
              ],
              percentiles: { p75: 1533 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6237999999999999 },
                { start: 1800, end: 3000, density: 0.22880000000000006 },
                { start: 3000, density: 0.1474000000000001 },
              ],
              percentiles: { p75: 2380 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.945272636318159 },
                { start: 100, end: 300, density: 0.03701850925462731 },
                { start: 300, density: 0.01770885442721374 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7164567086582683 },
                { start: 2500, end: 4000, density: 0.19176164767046586 },
                { start: 4000, density: 0.0917816436712658 },
              ],
              percentiles: { p75: 2722 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9428 },
                { start: "0.10", end: "0.25", density: 0.0392 },
                { start: "0.25", density: 0.018000000000000006 },
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
        fcp: 2380,
        lcp: 2722,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824470271,
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
                { start: "0.00", end: "0.10", density: 0.9213 },
                { start: "0.10", end: "0.25", density: 0.064 },
                { start: "0.25", density: 0.014700000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6090000000000003 },
                { start: 200, end: 500, density: 0.2950000000000001 },
                { start: 500, density: 0.09599999999999967 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6832999999999999 },
                { start: 800, end: 1800, density: 0.25609999999999994 },
                { start: 1800, density: 0.06060000000000009 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8235176482351768 },
                { start: 1800, end: 3000, density: 0.12108789121087893 },
                { start: 3000, density: 0.055394460553944216 },
              ],
              percentiles: { p75: 1567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451109778044391 },
                { start: 100, end: 300, density: 0.022895420915816835 },
                { start: 300, density: 0.03199360127974403 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8431970408877331 },
                { start: 2500, end: 4000, density: 0.10921723482955109 },
                { start: 4000, density: 0.04758572428271578 },
              ],
              percentiles: { p75: 2012 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1567,
        lcp: 2012,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824470604,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8603000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10620000000000002,
                },
                { start: "0.25", density: 0.033500000000000016 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5034006801360273 },
                { start: 200, end: 500, density: 0.37917583516703346 },
                { start: 500, density: 0.11742348469693913 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.663999199759928 },
                { start: 800, end: 1800, density: 0.31229368810643193 },
                { start: 1800, density: 0.023707112133639893 },
              ],
              percentiles: { p75: 906 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8929785957191438 },
                { start: 1800, end: 3000, density: 0.08701740348069616 },
                { start: 3000, density: 0.020004000800159995 },
              ],
              percentiles: { p75: 1361 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652965296529653 },
                { start: 100, end: 300, density: 0.022002200220022 },
                { start: 300, density: 0.012701270127012717 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.873524704940988 },
                { start: 2500, end: 4000, density: 0.10207041408281656 },
                { start: 4000, density: 0.02440488097619541 },
              ],
              percentiles: { p75: 1896 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1361,
        lcp: 1896,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652824470919,
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
                { start: 0, end: 100, density: 0.938407441016334 },
                { start: 100, end: 300, density: 0.02529491833030853 },
                { start: 300, density: 0.036297640653357506 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8434889161189703 },
                { start: 2500, end: 4000, density: 0.10927926924362258 },
                { start: 4000, density: 0.04723181463740725 },
              ],
              percentiles: { p75: 2008 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9586712587490279,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02766359293411843,
                },
                { start: "0.25", density: 0.013665148316853688 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5717133680363276 },
                { start: 200, end: 500, density: 0.32395614132240563 },
                { start: 500, density: 0.10433049064126677 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6660722246990638 },
                { start: 800, end: 1800, density: 0.27006241640659834 },
                { start: 1800, density: 0.06386535889433798 },
              ],
              percentiles: { p75: 918 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8151907204996653 },
                { start: 1800, end: 3000, density: 0.12681240240910105 },
                { start: 3000, density: 0.05799687709123351 },
              ],
              percentiles: { p75: 1596 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1596,
        lcp: 2008,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824471236,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.038 },
                { start: 300, density: 0.0037 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5927314537092587 },
                { start: 2500, end: 4000, density: 0.187912417516497 },
                { start: 4000, density: 0.2193561287742443 },
              ],
              percentiles: { p75: 3565 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7624237576242375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11818818118188179,
                },
                { start: "0.25", density: 0.11938806119388062 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6291629162916291 },
                { start: 200, end: 500, density: 0.3046304630463046 },
                { start: 500, density: 0.06620662066206628 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45970000000000066 },
                { start: 800, end: 1800, density: 0.29750000000000043 },
                { start: 1800, density: 0.24279999999999904 },
              ],
              percentiles: { p75: 1645 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5462453754624544 },
                { start: 1800, end: 3000, density: 0.18198180181981827 },
                { start: 3000, density: 0.27177282271772724 },
              ],
              percentiles: { p75: 3006 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3006,
        lcp: 3565,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1652824471817,
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
                  density: 0.783078307830783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17341734173417342,
                },
                { start: "0.25", density: 0.043504350435043526 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7086291370862913 },
                { start: 200, end: 500, density: 0.18858114188581138 },
                { start: 500, density: 0.10278972102789742 },
              ],
              percentiles: { p75: 228 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7363790862741177 },
                { start: 800, end: 1800, density: 0.22613216035189443 },
                { start: 1800, density: 0.03748875337398782 },
              ],
              percentiles: { p75: 830 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8939787957591514 },
                { start: 1800, end: 3000, density: 0.07001400280056007 },
                { start: 3000, density: 0.03600720144028838 },
              ],
              percentiles: { p75: 1273 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965493098619724 },
                { start: 100, end: 300, density: 0.017403480696139232 },
                { start: 300, density: 0.017103420684136835 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8660267946410715 },
                { start: 2500, end: 4000, density: 0.09448110377924408 },
                { start: 4000, density: 0.03949210157968435 },
              ],
              percentiles: { p75: 1897 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1273,
        lcp: 1897,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652824472132,
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
                  density: 0.945105489451055,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03379662033796621,
                },
                { start: "0.25", density: 0.021097890210978878 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9044191161767645 },
                { start: 200, end: 500, density: 0.07658468306338732 },
                { start: 500, density: 0.01899620075984809 },
              ],
              percentiles: { p75: 112 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6130226045209043 },
                { start: 800, end: 1800, density: 0.3269653930786158 },
                { start: 1800, density: 0.06001200240048005 },
              ],
              percentiles: { p75: 1033 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7885577115423084 },
                { start: 1800, end: 3000, density: 0.16303260652130425 },
                { start: 3000, density: 0.048409681936387484 },
              ],
              percentiles: { p75: 1670 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9887977595519104 },
                { start: 100, end: 300, density: 0.00630126025205041 },
                { start: 300, density: 0.004900980196039209 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8173365326934616 },
                { start: 2500, end: 4000, density: 0.12117576484703066 },
                { start: 4000, density: 0.06148770245950782 },
              ],
              percentiles: { p75: 2173 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1670, lcp: 2173, cls: "0.01", fid: 8 },
      timestamp: 1652824472463,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9130347860855659 },
                { start: 2500, end: 4000, density: 0.06937225109956018 },
                { start: 4000, density: 0.01759296281487395 },
              ],
              percentiles: { p75: 1737 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8662133786621339,
                },
                { start: "0.10", end: "0.25", density: 0.0999900009999 },
                { start: "0.25", density: 0.03379662033796621 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5675297410776766 },
                { start: 200, end: 500, density: 0.30960711786464046 },
                { start: 500, density: 0.12286314105768298 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8466693338667735 },
                { start: 800, end: 1800, density: 0.1285257051410282 },
                { start: 1800, density: 0.024804960992198474 },
              ],
              percentiles: { p75: 678 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9179 },
                { start: 1800, end: 3000, density: 0.061099999999999995 },
                { start: 3000, density: 0.02099999999999994 },
              ],
              percentiles: { p75: 1177 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618847539015607 },
                { start: 100, end: 300, density: 0.022408963585434177 },
                { start: 300, density: 0.015706282513005144 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1177,
        lcp: 1737,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1652824472780,
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
                { start: 0, end: 1800, density: 0.5878316559926788 },
                { start: 1800, end: 3000, density: 0.21591948764867278 },
                { start: 3000, density: 0.19624885635864842 },
              ],
              percentiles: { p75: 2691 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9462613235068325 },
                { start: 100, end: 300, density: 0.03730999539382772 },
                { start: 300, density: 0.016428681099339787 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6529251288269176 },
                { start: 2500, end: 4000, density: 0.20945741133676882 },
                { start: 4000, density: 0.1376174598363136 },
              ],
              percentiles: { p75: 3018 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9619817392605898,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022451728783116298,
                },
                { start: "0.25", density: 0.015566531956293969 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6602496616032487 },
                { start: 200, end: 500, density: 0.2597383065122575 },
                { start: 500, density: 0.08001203188449385 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.365445980853973 },
                { start: 800, end: 1800, density: 0.3956845464215159 },
                { start: 1800, density: 0.23886947272451114 },
              ],
              percentiles: { p75: 1773 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2691,
        lcp: 3018,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824473101,
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
                  density: 0.8780722891566265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08493975903614456,
                },
                { start: "0.25", density: 0.03698795180722889 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7883159886471145 },
                { start: 200, end: 500, density: 0.16639072847682118 },
                { start: 500, density: 0.04529328287606426 },
              ],
              percentiles: { p75: 179 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.641167095745985 },
                { start: 800, end: 1800, density: 0.32168689469167583 },
                { start: 1800, density: 0.037146009562339266 },
              ],
              percentiles: { p75: 979 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8443988411395463 },
                { start: 1800, end: 3000, density: 0.11697247706422022 },
                { start: 3000, density: 0.03862868179623336 },
              ],
              percentiles: { p75: 1396 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8849546827794561 },
                { start: 2500, end: 4000, density: 0.0876132930513595 },
                { start: 4000, density: 0.027432024169184364 },
              ],
              percentiles: { p75: 1708 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1396, lcp: 1708, cls: "0.02" },
      timestamp: 1652824473577,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7469746974697459 },
                { start: 1800, end: 3000, density: 0.15931593159315902 },
                { start: 3000, density: 0.09370937093709515 },
              ],
              percentiles: { p75: 1861 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9478947894789479 },
                { start: 100, end: 300, density: 0.03160316031603161 },
                { start: 300, density: 0.020502050205020467 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7794779477947785 },
                { start: 2500, end: 4000, density: 0.14031403140314014 },
                { start: 4000, density: 0.08020802080208132 },
              ],
              percentiles: { p75: 2375 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8306169383061693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12238776122387761,
                },
                { start: "0.25", density: 0.04699530046995297 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5240999999999998 },
                { start: 200, end: 500, density: 0.3258999999999999 },
                { start: 500, density: 0.15000000000000033 },
              ],
              percentiles: { p75: 339 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6288628862886286 },
                { start: 800, end: 1800, density: 0.28442844284428426 },
                { start: 1800, density: 0.08670867086708722 },
              ],
              percentiles: { p75: 1034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1861,
        lcp: 2375,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1652824474068,
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
                  density: 0.8919110355574443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027199320016999574,
                },
                { start: "0.25", density: 0.08088964442555606 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.488076079005121 },
                { start: 200, end: 500, density: 0.31016825164594014 },
                { start: 500, density: 0.2017556693489388 },
              ],
              percentiles: { p75: 404 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3622695035460985 },
                { start: 800, end: 1800, density: 0.4478014184397153 },
                { start: 1800, density: 0.18992907801418632 },
              ],
              percentiles: { p75: 1548 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5675908633816976 },
                { start: 1800, end: 3000, density: 0.24622899008763094 },
                { start: 3000, density: 0.18618014653067136 },
              ],
              percentiles: { p75: 2539 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8742587805990572 },
                { start: 100, end: 300, density: 0.05504029192641021 },
                { start: 300, density: 0.07070092747453281 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6410716851027142 },
                { start: 2500, end: 4000, density: 0.1852463726476078 },
                { start: 4000, density: 0.17368194224967806 },
              ],
              percentiles: { p75: 3242 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2539,
        lcp: 3242,
        cls: "0.01",
        fid: 21,
      },
      timestamp: 1652824474390,
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
                  density: 0.8153815381538154,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1014101410141014,
                },
                { start: "0.25", density: 0.08320832083208327 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6272999999999996 },
                { start: 200, end: 500, density: 0.22589999999999988 },
                { start: 500, density: 0.1468000000000003 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42050000000000026 },
                { start: 800, end: 1800, density: 0.4195000000000003 },
                { start: 1800, density: 0.15999999999999948 },
              ],
              percentiles: { p75: 1439 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6321264252850567 },
                { start: 1800, end: 3000, density: 0.2154430886177233 },
                { start: 3000, density: 0.15243048609722012 },
              ],
              percentiles: { p75: 2303 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9135 },
                { start: 100, end: 300, density: 0.037399999999999996 },
                { start: 300, density: 0.049100000000000074 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6750499999999998 },
                { start: 2500, end: 4000, density: 0.17524999999999996 },
                { start: 4000, density: 0.1497000000000003 },
              ],
              percentiles: { p75: 2979 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2303,
        lcp: 2979,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1652824474998,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7136999999999992 },
                { start: 1800, end: 3000, density: 0.18369999999999975 },
                { start: 3000, density: 0.10260000000000097 },
              ],
              percentiles: { p75: 1954 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967809657102869 },
                { start: 100, end: 300, density: 0.02409277216834949 },
                { start: 300, density: 0.00809757072878138 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7572242775722422 },
                { start: 2500, end: 4000, density: 0.14668533146685325 },
                { start: 4000, density: 0.09609039096090444 },
              ],
              percentiles: { p75: 2475 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9224922492249225,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0462046204620462,
                },
                { start: "0.25", density: 0.031303130313031294 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6250124962511249 },
                { start: 200, end: 500, density: 0.252524242727182 },
                { start: 500, density: 0.12246326102169312 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5377537753775377 },
                { start: 800, end: 1800, density: 0.36733673367336717 },
                { start: 1800, density: 0.09490949094909519 },
              ],
              percentiles: { p75: 1149 },
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
        lcp: 2475,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652824475344,
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
                { start: 0, end: 200, density: 0.6731673167316733 },
                { start: 200, end: 500, density: 0.24132413241324135 },
                { start: 500, density: 0.08550855085508541 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4778999999999999 },
                { start: 800, end: 1800, density: 0.40699999999999986 },
                { start: 1800, density: 0.11510000000000022 },
              ],
              percentiles: { p75: 1293 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7102289771022887 },
                { start: 1800, end: 3000, density: 0.1794820517948202 },
                { start: 3000, density: 0.11028897110289104 },
              ],
              percentiles: { p75: 2008 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9570914182836566 },
                { start: 100, end: 300, density: 0.03170634126825365 },
                { start: 300, density: 0.011202240448089653 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7718728127187274 },
                { start: 2500, end: 4000, density: 0.1384361563843614 },
                { start: 4000, density: 0.0896910308969112 },
              ],
              percentiles: { p75: 2418 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8180363927214555,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11767646470705856,
                },
                { start: "0.25", density: 0.06428714257148588 },
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
        fcp: 2008,
        lcp: 2418,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652824475680,
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
                  density: 0.9624971151627048,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019270713131779364,
                },
                { start: "0.25", density: 0.018232171705515804 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.575659416936603 },
                { start: 200, end: 500, density: 0.30298472929199427 },
                { start: 500, density: 0.12135585377140273 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41777880933039274 },
                { start: 800, end: 1800, density: 0.3902750377161418 },
                { start: 1800, density: 0.19194615295346537 },
              ],
              percentiles: { p75: 1592 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5982132497969596 },
                { start: 1800, end: 3000, density: 0.24179139111265777 },
                { start: 3000, density: 0.15999535909038257 },
              ],
              percentiles: { p75: 2483 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9360965121834687 },
                { start: 100, end: 300, density: 0.0434782608695652 },
                { start: 300, density: 0.020425226946966163 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000580046403713 },
                { start: 2500, end: 4000, density: 0.20319025522041767 },
                { start: 4000, density: 0.096751740139211 },
              ],
              percentiles: { p75: 2774 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2483,
        lcp: 2774,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652824476003,
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
                { start: 0, end: 1800, density: 0.6978193146417437 },
                { start: 1800, end: 3000, density: 0.1894748553627056 },
                { start: 3000, density: 0.1127058299955506 },
              ],
              percentiles: { p75: 2058 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525202520252025 },
                { start: 100, end: 300, density: 0.03521602160216021 },
                { start: 300, density: 0.012263726372637304 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7665091748159536 },
                { start: 2500, end: 4000, density: 0.14240193385342254 },
                { start: 4000, density: 0.09108889133062383 },
              ],
              percentiles: { p75: 2438 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8461622807017544,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1005482456140351,
                },
                { start: "0.25", density: 0.05328947368421059 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6496583645580781 },
                { start: 200, end: 500, density: 0.2607449856733525 },
                { start: 500, density: 0.08959664976856933 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4642537980339584 },
                { start: 800, end: 1800, density: 0.41744861483467344 },
                { start: 1800, density: 0.11829758713136812 },
              ],
              percentiles: { p75: 1312 },
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
        lcp: 2438,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652824476444,
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
                { start: 0, end: 200, density: 0.7169999999999997 },
                { start: 200, end: 500, density: 0.23609999999999995 },
                { start: 500, density: 0.046900000000000226 },
              ],
              percentiles: { p75: 215 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29171668667466955 },
                { start: 800, end: 1800, density: 0.5567226890756298 },
                { start: 1800, density: 0.1515606242497005 },
              ],
              percentiles: { p75: 1545 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5215478452154794 },
                { start: 1800, end: 3000, density: 0.3189681031896815 },
                { start: 3000, density: 0.1594840515948391 },
              ],
              percentiles: { p75: 2530 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981594478343503 },
                { start: 100, end: 300, density: 0.015204561368410524 },
                { start: 300, density: 0.003200960288086428 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6419641964196424 },
                { start: 2500, end: 4000, density: 0.23522352235223526 },
                { start: 4000, density: 0.1228122812281223 },
              ],
              percentiles: { p75: 3062 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8380161983801621,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09599040095990401,
                },
                { start: "0.25", density: 0.06599340065993402 },
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
        fcp: 2530,
        lcp: 3062,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1652824476916,
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
                { start: "0.00", end: "0.10", density: 0.9065 },
                { start: "0.10", end: "0.25", density: 0.0581 },
                { start: "0.25", density: 0.035399999999999994 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5918183636727344 },
                { start: 200, end: 500, density: 0.28565713142628524 },
                { start: 500, density: 0.12252450490098035 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47940000000000105 },
                { start: 800, end: 1800, density: 0.33630000000000076 },
                { start: 1800, density: 0.18429999999999827 },
              ],
              percentiles: { p75: 1523 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.548 },
                { start: 1800, end: 3000, density: 0.21709999999999996 },
                { start: 3000, density: 0.2349000000000002 },
              ],
              percentiles: { p75: 2896 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.031200000000000006 },
                { start: 300, density: 0.010500000000000015 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6144614461446156 },
                { start: 2500, end: 4000, density: 0.19721972197219764 },
                { start: 4000, density: 0.18831883188318688 },
              ],
              percentiles: { p75: 3467 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2896,
        lcp: 3467,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652824477223,
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
                  density: 0.9345484672742336,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04536039768019884,
                },
                { start: "0.25", density: 0.0200911350455675 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8156401093125919 },
                { start: 200, end: 500, density: 0.149674164389321 },
                { start: 500, density: 0.03468572629808712 },
              ],
              percentiles: { p75: 165 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5368238105583315 },
                { start: 800, end: 1800, density: 0.38127308277210525 },
                { start: 1800, density: 0.08190310666956321 },
              ],
              percentiles: { p75: 1193 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7006960556844543 },
                { start: 1800, end: 3000, density: 0.21999578148070018 },
                { start: 3000, density: 0.07930816283484544 },
              ],
              percentiles: { p75: 1938 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9743717342622543 },
                { start: 100, end: 300, density: 0.015675541179397862 },
                { start: 300, density: 0.009952724558347852 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7734457323498422 },
                { start: 2500, end: 4000, density: 0.1654373024236038 },
                { start: 4000, density: 0.061116965226554035 },
              ],
              percentiles: { p75: 2348 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1938,
        lcp: 2348,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652824477516,
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
                { start: 0, end: 200, density: 0.6943999999999998 },
                { start: 200, end: 500, density: 0.22490000000000002 },
                { start: 500, density: 0.08070000000000017 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.769 },
                { start: 800, end: 1800, density: 0.21219999999999994 },
                { start: 1800, density: 0.0188 },
              ],
              percentiles: { p75: 785 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9134173165366927 },
                { start: 1800, end: 3000, density: 0.06938612277544488 },
                { start: 3000, density: 0.017196560687862437 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712971297129712 },
                { start: 100, end: 300, density: 0.0156015601560156 },
                { start: 300, density: 0.013101310131013101 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9195839167833566 },
                { start: 2500, end: 4000, density: 0.06491298259651929 },
                { start: 4000, density: 0.01550310062012405 },
              ],
              percentiles: { p75: 1785 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9662966296629664,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024702470247024703,
                },
                { start: "0.25", density: 0.009000900090009008 },
              ],
              percentiles: { p75: "0.03" },
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
        lcp: 1785,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1652824478092,
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
                { start: 0, end: 1800, density: 0.7485899435977434 },
                { start: 1800, end: 3000, density: 0.14736589463578528 },
                { start: 3000, density: 0.10404416176647131 },
              ],
              percentiles: { p75: 1817 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715381759683207 },
                { start: 100, end: 300, density: 0.0236356886523945 },
                { start: 300, density: 0.004826135379284738 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8027533966574482 },
                { start: 2500, end: 4000, density: 0.11728988818083436 },
                { start: 4000, density: 0.07995671516171737 },
              ],
              percentiles: { p75: 2194 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.847953216374269,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10669530970282852,
                },
                { start: "0.25", density: 0.04535147392290251 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7356944946392001 },
                { start: 200, end: 500, density: 0.21575713769425378 },
                { start: 500, density: 0.04854836766654612 },
              ],
              percentiles: { p75: 205 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4951526902569072 },
                { start: 800, end: 1800, density: 0.38645176926805597 },
                { start: 1800, density: 0.11839554047503681 },
              ],
              percentiles: { p75: 1266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1817,
        lcp: 2194,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652824478400,
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
                  density: 0.8426842684268429,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11731173117311733,
                },
                { start: "0.25", density: 0.04000400040004002 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8120375924815036 },
                { start: 200, end: 500, density: 0.14677064587082583 },
                { start: 500, density: 0.0411917616476705 },
              ],
              percentiles: { p75: 167 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6625674865026995 },
                { start: 800, end: 1800, density: 0.2993401319736054 },
                { start: 1800, density: 0.03809238152369511 },
              ],
              percentiles: { p75: 953 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8501000000000003 },
                { start: 1800, end: 3000, density: 0.1077 },
                { start: 3000, density: 0.04219999999999977 },
              ],
              percentiles: { p75: 1366 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8858114188581142 },
                { start: 2500, end: 4000, density: 0.0831916808319168 },
                { start: 4000, density: 0.030996900309968992 },
              ],
              percentiles: { p75: 1679 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1366, lcp: 1679, cls: "0.05" },
      timestamp: 1652824478865,
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
                { start: 0, end: 2500, density: 0.24689937987597424 },
                { start: 2500, end: 4000, density: 0.3438187637527492 },
                { start: 4000, density: 0.4092818563712765 },
              ],
              percentiles: { p75: 5667 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8578 },
                { start: "0.10", end: "0.25", density: 0.0798 },
                { start: "0.25", density: 0.062399999999999976 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8206641328265653 },
                { start: 200, end: 500, density: 0.12052410482096418 },
                { start: 500, density: 0.05881176235247055 },
              ],
              percentiles: { p75: 159 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3151945583675105 },
                { start: 800, end: 1800, density: 0.4548364509352809 },
                { start: 1800, density: 0.22996899069720866 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.09630963096309626 },
                { start: 1800, end: 3000, density: 0.39003900390038987 },
                { start: 3000, density: 0.5136513651365138 },
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
      extractedResults: { fcp: 5093, lcp: 5667, cls: "0.04" },
      timestamp: 1652824479199,
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
                { start: 0, end: 1800, density: 0.548 },
                { start: 1800, end: 3000, density: 0.21709999999999996 },
                { start: 3000, density: 0.2349000000000002 },
              ],
              percentiles: { p75: 2964 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583 },
                { start: 100, end: 300, density: 0.031200000000000006 },
                { start: 300, density: 0.010500000000000015 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6144614461446156 },
                { start: 2500, end: 4000, density: 0.19721972197219764 },
                { start: 4000, density: 0.18831883188318688 },
              ],
              percentiles: { p75: 3462 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9065 },
                { start: "0.10", end: "0.25", density: 0.0581 },
                { start: "0.25", density: 0.035399999999999994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5918183636727344 },
                { start: 200, end: 500, density: 0.28565713142628524 },
                { start: 500, density: 0.12252450490098035 },
              ],
              percentiles: { p75: 307 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47940000000000105 },
                { start: 800, end: 1800, density: 0.33630000000000076 },
                { start: 1800, density: 0.18429999999999827 },
              ],
              percentiles: { p75: 1539 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2964,
        lcp: 3462,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652824479747,
    },
  ],
};
