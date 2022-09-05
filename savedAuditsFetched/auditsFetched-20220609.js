export const audit31 = {
  date: "2022-06-10T00:18:48.043Z",
  dateParsedLocale: "10/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "10/06/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7926622013395983 },
                { start: 800, end: 1800, density: 0.17154853543936818 },
                { start: 1800, density: 0.03578926322103361 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8606999999999996 },
                { start: 1800, end: 3000, density: 0.09639999999999994 },
                { start: 3000, density: 0.042900000000000556 },
              ],
              percentiles: { p75: 1414 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9441000000000002 },
                { start: 100, end: 300, density: 0.030600000000000006 },
                { start: 300, density: 0.025299999999999826 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.892460753924607 },
                { start: 2500, end: 4000, density: 0.07444255574442547 },
                { start: 4000, density: 0.03309669033096766 },
              ],
              percentiles: { p75: 1778 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9459108178364326,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03049390121975605,
                },
                { start: "0.25", density: 0.023595280943811237 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5287586275882767 },
                { start: 200, end: 500, density: 0.35450635190557184 },
                { start: 500, density: 0.11673502050615138 },
              ],
              percentiles: { p75: 322 },
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
        lcp: 1778,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820036454,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29964007198560316 },
                { start: 800, end: 1800, density: 0.5307938412317542 },
                { start: 1800, density: 0.1695660867826425 },
              ],
              percentiles: { p75: 1588 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5277000000000005 },
                { start: 1800, end: 3000, density: 0.30590000000000034 },
                { start: 3000, density: 0.1663999999999993 },
              ],
              percentiles: { p75: 2538 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9826017398260174 },
                { start: 100, end: 300, density: 0.0110988901109889 },
                { start: 300, density: 0.006299370062993719 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.646879375875175 },
                { start: 2500, end: 4000, density: 0.2249949989997999 },
                { start: 4000, density: 0.1281256251250253 },
              ],
              percentiles: { p75: 2969 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8395999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08909999999999998,
                },
                { start: "0.25", density: 0.07130000000000002 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6763028908672603 },
                { start: 200, end: 500, density: 0.2705811743523057 },
                { start: 500, density: 0.05311593478043403 },
              ],
              percentiles: { p75: 237 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2538,
        lcp: 2969,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654820038595,
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
                  density: 0.9595959595959596,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0277027702770277,
                },
                { start: "0.25", density: 0.012701270127012694 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6639336066393362 },
                { start: 200, end: 500, density: 0.2661733826617339 },
                { start: 500, density: 0.06989301069892993 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.630126025205041 },
                { start: 800, end: 1800, density: 0.3225645129025804 },
                { start: 1800, density: 0.047309461892378536 },
              ],
              percentiles: { p75: 951 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8731253749250145 },
                { start: 1800, end: 3000, density: 0.08988202359528091 },
                { start: 3000, density: 0.036992601479704616 },
              ],
              percentiles: { p75: 1417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668900670201059 },
                { start: 100, end: 300, density: 0.018105431629488845 },
                { start: 300, density: 0.015004501350405241 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8936893689368938 },
                { start: 2500, end: 4000, density: 0.07750775077507749 },
                { start: 4000, density: 0.02880288028802861 },
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
        fcp: 1417,
        lcp: 1799,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820040203,
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
                  density: 0.9593862815884476,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018179473955647243,
                },
                { start: "0.25", density: 0.022434244455905108 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5701754385964913 },
                { start: 200, end: 500, density: 0.35659801678108327 },
                { start: 500, density: 0.07322654462242553 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4165049799508473 },
                { start: 800, end: 1800, density: 0.49747768723321695 },
                { start: 1800, density: 0.08601733281593577 },
              ],
              percentiles: { p75: 1145 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6513868993358518 },
                { start: 1800, end: 3000, density: 0.2568042713895042 },
                { start: 3000, density: 0.091808829274644 },
              ],
              percentiles: { p75: 2030 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9754516618397463 },
                { start: 100, end: 300, density: 0.016549441456350848 },
                { start: 300, density: 0.007998896703902912 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8014142986895031 },
                { start: 2500, end: 4000, density: 0.14188400155702605 },
                { start: 4000, density: 0.056701699753470884 },
              ],
              percentiles: { p75: 2304 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2030,
        lcp: 2304,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820041419,
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
                { start: 0, end: 100, density: 0.9669590291962031 },
                { start: 100, end: 300, density: 0.023188754055028234 },
                { start: 300, density: 0.009852216748768468 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4770770304863857 },
                { start: 2500, end: 4000, density: 0.32487782173609503 },
                { start: 4000, density: 0.19804514777751922 },
              ],
              percentiles: { p75: 3707 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9510781358683051,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02480871782981683,
                },
                { start: "0.25", density: 0.024113146301878042 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46319018404907963 },
                { start: 200, end: 500, density: 0.4044360547428031 },
                { start: 500, density: 0.13237376120811728 },
              ],
              percentiles: { p75: 356 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20284656329553347 },
                { start: 800, end: 1800, density: 0.5288127748206436 },
                { start: 1800, density: 0.2683406618838229 },
              ],
              percentiles: { p75: 1887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.352707749766574 },
                { start: 1800, end: 3000, density: 0.32843137254902016 },
                { start: 3000, density: 0.31886087768440585 },
              ],
              percentiles: { p75: 3437 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3437,
        lcp: 3707,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820044173,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4956233735509816 },
                { start: 800, end: 1800, density: 0.3776910338301394 },
                { start: 1800, density: 0.126685592618879 },
              ],
              percentiles: { p75: 1291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7339070973826928 },
                { start: 1800, end: 3000, density: 0.1519688752652676 },
                { start: 3000, density: 0.11412402735203972 },
              ],
              percentiles: { p75: 1891 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653179190751445 },
                { start: 100, end: 300, density: 0.025650289017341038 },
                { start: 300, density: 0.009031791907514457 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7914070765252138 },
                { start: 2500, end: 4000, density: 0.12701304807805325 },
                { start: 4000, density: 0.08157987539673289 },
              ],
              percentiles: { p75: 2262 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8529342997428102,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10007014262333408,
                },
                { start: "0.25", density: 0.046995557633855586 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7614285714285713 },
                { start: 200, end: 500, density: 0.1910714285714285 },
                { start: 500, density: 0.04750000000000012 },
              ],
              percentiles: { p75: 194 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1891,
        lcp: 2262,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654820046157,
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
                { start: 0, end: 100, density: 0.9552222097839471 },
                { start: 100, end: 300, density: 0.024851673569909322 },
                { start: 300, density: 0.019926116646143455 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8887288041671287 },
                { start: 2500, end: 4000, density: 0.08112601130444429 },
                { start: 4000, density: 0.030145184528426995 },
              ],
              percentiles: { p75: 1870 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9263064854712186,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0634184068058778,
                },
                { start: "0.25", density: 0.010275107722903536 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5976514899745211 },
                { start: 200, end: 500, density: 0.31538717181787984 },
                { start: 500, density: 0.08696133820759896 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5936423252195178 },
                { start: 800, end: 1800, density: 0.3583416694453706 },
                { start: 1800, density: 0.048016005335111585 },
              ],
              percentiles: { p75: 979 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.869088492634843 },
                { start: 1800, end: 3000, density: 0.0908184738066231 },
                { start: 3000, density: 0.040093033558533976 },
              ],
              percentiles: { p75: 1466 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1466,
        lcp: 1870,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820047788,
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
                { start: 0, end: 100, density: 0.9615668883961567 },
                { start: 100, end: 300, density: 0.02402069475240207 },
                { start: 300, density: 0.014412416851441212 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8639439045393036 },
                { start: 2500, end: 4000, density: 0.08771066551851395 },
                { start: 4000, density: 0.04834542994218247 },
              ],
              percentiles: { p75: 1860 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9793600390815829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009281875915974598,
                },
                { start: "0.25", density: 0.011358085002442599 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5156934306569342 },
                { start: 200, end: 500, density: 0.39756690997566896 },
                { start: 500, density: 0.08673965936739675 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6950258557005657 },
                { start: 800, end: 1800, density: 0.23688746614134426 },
                { start: 1800, density: 0.06808667815808993 },
              ],
              percentiles: { p75: 897 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8163265306122446 },
                { start: 1800, end: 3000, density: 0.11150725350381112 },
                { start: 3000, density: 0.07216621588394413 },
              ],
              percentiles: { p75: 1528 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1528,
        lcp: 1860,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820050465,
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
                  density: 0.8878676470588235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0978589965397924,
                },
                { start: "0.25", density: 0.014273356401384081 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5281170903488499 },
                { start: 200, end: 500, density: 0.35380213491801454 },
                { start: 500, density: 0.11808077473313557 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6237751695919027 },
                { start: 800, end: 1800, density: 0.325724130505007 },
                { start: 1800, density: 0.05050069990309021 },
              ],
              percentiles: { p75: 987 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8003907521979803 },
                { start: 1800, end: 3000, density: 0.1409964181048517 },
                { start: 3000, density: 0.05861282969716801 },
              ],
              percentiles: { p75: 1658 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9480418335558521 },
                { start: 100, end: 300, density: 0.030262572318647086 },
                { start: 300, density: 0.021695594125500775 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593003042155576 },
                { start: 2500, end: 4000, density: 0.09637114298131236 },
                { start: 4000, density: 0.044328552803130014 },
              ],
              percentiles: { p75: 1998 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1658,
        lcp: 1998,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820052831,
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
                { start: 0, end: 2500, density: 0.946707298944552 },
                { start: 2500, end: 4000, density: 0.040954363014716805 },
                { start: 4000, density: 0.012338338040731336 },
              ],
              percentiles: { p75: 1525 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9435019691002725,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031202665858830653,
                },
                { start: "0.25", density: 0.02529536504089675 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5983287710704518 },
                { start: 200, end: 500, density: 0.2842529894827839 },
                { start: 500, density: 0.11741823944676433 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8433200856007336 },
                { start: 800, end: 1800, density: 0.14246407826352797 },
                { start: 1800, density: 0.014215836135738283 },
              ],
              percentiles: { p75: 705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9432449105490437 },
                { start: 1800, end: 3000, density: 0.0431832202344232 },
                { start: 3000, density: 0.013571869216533087 },
              ],
              percentiles: { p75: 1207 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483461712732215 },
                { start: 100, end: 300, density: 0.03005588279716054 },
                { start: 300, density: 0.021597945929618015 },
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
        fcp: 1207,
        lcp: 1525,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820055211,
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
                { start: 0, end: 2500, density: 0.9265451812887469 },
                { start: 2500, end: 4000, density: 0.05504414803682132 },
                { start: 4000, density: 0.018410670674431688 },
              ],
              percentiles: { p75: 1743 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426470588235294,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03860294117647058,
                },
                { start: "0.25", density: 0.018750000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48029780279644135 },
                { start: 200, end: 500, density: 0.37189032140911604 },
                { start: 500, density: 0.14781187579444255 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7159112459700361 },
                { start: 800, end: 1800, density: 0.24767684430115688 },
                { start: 1800, density: 0.03641190972880705 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788106887467069 },
                { start: 1800, end: 3000, density: 0.09051561911930746 },
                { start: 3000, density: 0.030673692133985665 },
              ],
              percentiles: { p75: 1371 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9500092575448992 },
                { start: 100, end: 300, density: 0.02869838918718756 },
                { start: 300, density: 0.021292353267913292 },
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
        fcp: 1371,
        lcp: 1743,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654820057220,
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
                { start: 0, end: 200, density: 0.6076855639976625 },
                { start: 200, end: 500, density: 0.2906195207481006 },
                { start: 500, density: 0.10169491525423685 },
              ],
              percentiles: { p75: 267 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6986886245806648 },
                { start: 800, end: 1800, density: 0.27035681610247037 },
                { start: 1800, density: 0.03095455931686484 },
              ],
              percentiles: { p75: 887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.894183075304374 },
                { start: 1800, end: 3000, density: 0.08101608297008867 },
                { start: 3000, density: 0.024800841725537183 },
              ],
              percentiles: { p75: 1324 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506304116664135 },
                { start: 100, end: 300, density: 0.027950782318092053 },
                { start: 300, density: 0.021418806015494417 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9250261623561069 },
                { start: 2500, end: 4000, density: 0.057033936313350304 },
                { start: 4000, density: 0.017939901330542785 },
              ],
              percentiles: { p75: 1674 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9484870848708489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0340959409594096,
                },
                { start: "0.25", density: 0.017416974169741715 },
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
        fcp: 1324,
        lcp: 1674,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820060444,
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
                  density: 0.8579999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12149999999999998,
                },
                { start: "0.25", density: 0.02049999999999999 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5677567756775675 },
                { start: 200, end: 500, density: 0.3237323732373235 },
                { start: 500, density: 0.10851085108510888 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6348460615753699 },
                { start: 800, end: 1800, density: 0.31647341063574574 },
                { start: 1800, density: 0.04868052778888435 },
              ],
              percentiles: { p75: 975 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8072963518240872 },
                { start: 1800, end: 3000, density: 0.13613193403298338 },
                { start: 3000, density: 0.05657171414292935 },
              ],
              percentiles: { p75: 1631 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9530187924830067 },
                { start: 100, end: 300, density: 0.0274890043982407 },
                { start: 300, density: 0.01949220311875259 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8603639636036385 },
                { start: 2500, end: 4000, density: 0.09614038596140373 },
                { start: 4000, density: 0.04349565043495766 },
              ],
              percentiles: { p75: 1987 },
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
        lcp: 1987,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654820063549,
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
                { start: 0, end: 2500, density: 0.7227336401841108 },
                { start: 2500, end: 4000, density: 0.15629377626575952 },
                { start: 4000, density: 0.12097258355012969 },
              ],
              percentiles: { p75: 2674 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.875987598759876,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.072007200720072,
                },
                { start: "0.25", density: 0.052005200520052045 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5497397918334676 },
                { start: 200, end: 500, density: 0.3097477982385913 },
                { start: 500, density: 0.14051240992794106 },
              ],
              percentiles: { p75: 337 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47579031612645056 },
                { start: 800, end: 1800, density: 0.4112645058023209 },
                { start: 1800, density: 0.1129451780712286 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6399919975992794 },
                { start: 1800, end: 3000, density: 0.21856556967090116 },
                { start: 3000, density: 0.14144243272981954 },
              ],
              percentiles: { p75: 2241 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623999999999999 },
                { start: 100, end: 300, density: 0.025299999999999996 },
                { start: 300, density: 0.012300000000000078 },
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
        fcp: 2241,
        lcp: 2674,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654820066398,
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
                  density: 0.8331677155791101,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10610577453903056,
                },
                { start: "0.25", density: 0.06072650988185934 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5907787337304216 },
                { start: 200, end: 500, density: 0.3060886829913966 },
                { start: 500, density: 0.10313258327818182 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28406466512702055 },
                { start: 800, end: 1800, density: 0.4522159903222255 },
                { start: 1800, density: 0.2637193445507539 },
              ],
              percentiles: { p75: 1876 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5143299767621997 },
                { start: 1800, end: 3000, density: 0.25627973885138866 },
                { start: 3000, density: 0.2293902843864117 },
              ],
              percentiles: { p75: 2907 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9444195428059167 },
                { start: 100, end: 300, density: 0.04202151501568804 },
                { start: 300, density: 0.013558942178395294 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5756353591160219 },
                { start: 2500, end: 4000, density: 0.24779005524861866 },
                { start: 4000, density: 0.1765745856353594 },
              ],
              percentiles: { p75: 3432 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2907,
        lcp: 3432,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654820068915,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9174902665468704 },
                { start: 100, end: 300, density: 0.0437256663671758 },
                { start: 300, density: 0.03878406708595385 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5647916359888081 },
                { start: 2500, end: 4000, density: 0.2636577823590042 },
                { start: 4000, density: 0.17155058165218762 },
              ],
              percentiles: { p75: 3363 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426632004621606,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033939919121894854,
                },
                { start: "0.25", density: 0.023396880415944586 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47345660602445605 },
                { start: 200, end: 500, density: 0.3529674917983897 },
                { start: 500, density: 0.1735759021771542 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27093091334894737 },
                { start: 800, end: 1800, density: 0.35699648711943943 },
                { start: 1800, density: 0.37207259953161326 },
              ],
              percentiles: { p75: 2185 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44150499706055196 },
                { start: 1800, end: 3000, density: 0.3029100529100523 },
                { start: 3000, density: 0.25558495002939574 },
              ],
              percentiles: { p75: 3064 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3064,
        lcp: 3363,
        cls: "0.00",
        fid: 18,
      },
      timestamp: 1654820073319,
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
                  density: 0.9753277711561382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012991656734207388,
                },
                { start: "0.25", density: 0.011680572109654338 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6201762744163889 },
                { start: 200, end: 500, density: 0.30181038589804676 },
                { start: 500, density: 0.07801333968556429 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6085238836346224 },
                { start: 800, end: 1800, density: 0.3392793008499939 },
                { start: 1800, density: 0.052196815515383764 },
              ],
              percentiles: { p75: 973 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8647904191616762 },
                { start: 1800, end: 3000, density: 0.09485029940119759 },
                { start: 3000, density: 0.04035928143712614 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621175908221797 },
                { start: 100, end: 300, density: 0.02043499043977055 },
                { start: 300, density: 0.01744741873804985 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8997492237879152 },
                { start: 2500, end: 4000, density: 0.07266539288273227 },
                { start: 4000, density: 0.027585383329352665 },
              ],
              percentiles: { p75: 1767 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1767,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820078329,
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
                { start: 0, end: 2500, density: 0.9272310957221042 },
                { start: 2500, end: 4000, density: 0.056349826873673646 },
                { start: 4000, density: 0.016419077404222153 },
              ],
              percentiles: { p75: 1654 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9104294478527607,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07562744004461795,
                },
                { start: "0.25", density: 0.0139431121026213 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6498219056099732 },
                { start: 200, end: 500, density: 0.2837266251113089 },
                { start: 500, density: 0.06645146927871784 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.681715320208192 },
                { start: 800, end: 1800, density: 0.283887757411179 },
                { start: 1800, density: 0.034396922380629046 },
              ],
              percentiles: { p75: 879 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8940004477277816 },
                { start: 1800, end: 3000, density: 0.0842847548690396 },
                { start: 3000, density: 0.02171479740317877 },
              ],
              percentiles: { p75: 1343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9751749040848567 },
                { start: 100, end: 300, density: 0.01568494696456782 },
                { start: 300, density: 0.009140148950575513 },
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
        fcp: 1343,
        lcp: 1654,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820083319,
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
                  density: 0.937994722955145,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04785320220676421,
                },
                { start: "0.25", density: 0.014152074838090669 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5283267457180506 },
                { start: 200, end: 500, density: 0.3662714097496709 },
                { start: 500, density: 0.1054018445322786 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6344603537480448 },
                { start: 800, end: 1800, density: 0.3269161352424497 },
                { start: 1800, density: 0.03862351100950562 },
              ],
              percentiles: { p75: 945 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.86261016539901 },
                { start: 1800, end: 3000, density: 0.10624169986719789 },
                { start: 3000, density: 0.03114813473379203 },
              ],
              percentiles: { p75: 1430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9576607896697292 },
                { start: 100, end: 300, density: 0.029053886267693077 },
                { start: 300, density: 0.013285324062577588 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8913253594297451 },
                { start: 2500, end: 4000, density: 0.08620273045789541 },
                { start: 4000, density: 0.02247191011235949 },
              ],
              percentiles: { p75: 1859 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1430,
        lcp: 1859,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654820086693,
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
                { start: 0, end: 100, density: 0.9362704676640359 },
                { start: 100, end: 300, density: 0.03486865355165509 },
                { start: 300, density: 0.028860878784309044 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8891228070175436 },
                { start: 2500, end: 4000, density: 0.07754385964912279 },
                { start: 4000, density: 0.03333333333333358 },
              ],
              percentiles: { p75: 1804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9474294998259255,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029360566322385984,
                },
                { start: "0.25", density: 0.023209933851688517 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47311206198681605 },
                { start: 200, end: 500, density: 0.3956285416907596 },
                { start: 500, density: 0.13125939632242428 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7783720930232558 },
                { start: 800, end: 1800, density: 0.18302325581395346 },
                { start: 1800, density: 0.03860465116279082 },
              ],
              percentiles: { p75: 765 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.851175238538515 },
                { start: 1800, end: 3000, density: 0.10356062369094712 },
                { start: 3000, density: 0.04526413777053799 },
              ],
              percentiles: { p75: 1454 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1454,
        lcp: 1804,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820090448,
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
                { start: 0, end: 100, density: 0.9229066284672484 },
                { start: 100, end: 300, density: 0.041672092720406305 },
                { start: 300, density: 0.03542127881234531 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6733230926779314 },
                { start: 2500, end: 4000, density: 0.24692780337941633 },
                { start: 4000, density: 0.07974910394265222 },
              ],
              percentiles: { p75: 2950 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.933764750666159,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03019921329780485,
                },
                { start: "0.25", density: 0.036036036036036084 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49487744780184123 },
                { start: 200, end: 500, density: 0.3312151471923226 },
                { start: 500, density: 0.17390740500583615 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3028006166495377 },
                { start: 800, end: 1800, density: 0.443473792394656 },
                { start: 1800, density: 0.25372559095580627 },
              ],
              percentiles: { p75: 1927 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5087629525393371 },
                { start: 1800, end: 3000, density: 0.35346040680567986 },
                { start: 3000, density: 0.13777664065498313 },
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
        lcp: 2950,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820094123,
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
                  density: 0.9756176502319559,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014996223972381054,
                },
                { start: "0.25", density: 0.009386125795662961 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5550295857988166 },
                { start: 200, end: 500, density: 0.35244755244755244 },
                { start: 500, density: 0.09252286175363102 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5432723358449953 },
                { start: 800, end: 1800, density: 0.32034445640473663 },
                { start: 1800, density: 0.1363832077502679 },
              ],
              percentiles: { p75: 1531 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6555292088812242 },
                { start: 1800, end: 3000, density: 0.2589997844363008 },
                { start: 3000, density: 0.08547100668247495 },
              ],
              percentiles: { p75: 2116 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9406422315926045 },
                { start: 100, end: 300, density: 0.044112877067791115 },
                { start: 300, density: 0.015244891339604305 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7102738249245366 },
                { start: 2500, end: 4000, density: 0.20639284174213016 },
                { start: 4000, density: 0.08333333333333323 },
              ],
              percentiles: { p75: 2728 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2116,
        lcp: 2728,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820096242,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9409998694687376 },
                { start: 100, end: 300, density: 0.04124787886698863 },
                { start: 300, density: 0.017752251664273706 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.795997920997921 },
                { start: 2500, end: 4000, density: 0.12616943866943864 },
                { start: 4000, density: 0.07783264033264026 },
              ],
              percentiles: { p75: 2267 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9264136328427575,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05564162148205525,
                },
                { start: "0.25", density: 0.0179447456751872 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4175923533970551 },
                { start: 200, end: 500, density: 0.40532162231981395 },
                { start: 500, density: 0.17708602428313097 },
              ],
              percentiles: { p75: 389 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6097782388795225 },
                { start: 800, end: 1800, density: 0.2885488263519646 },
                { start: 1800, density: 0.10167293476851291 },
              ],
              percentiles: { p75: 1066 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7181758957654716 },
                { start: 1800, end: 3000, density: 0.1667752442996741 },
                { start: 3000, density: 0.11504885993485436 },
              ],
              percentiles: { p75: 1959 },
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
        lcp: 2267,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820098134,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7931206879312067 },
                { start: 1800, end: 3000, density: 0.15618438156184378 },
                { start: 3000, density: 0.05069493050694956 },
              ],
              percentiles: { p75: 1687 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536953695369537 },
                { start: 100, end: 300, density: 0.027602760276027597 },
                { start: 300, density: 0.018701870187018747 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8342165783421657 },
                { start: 2500, end: 4000, density: 0.12358764123587643 },
                { start: 4000, density: 0.042195780421957964 },
              ],
              percentiles: { p75: 2125 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8940788157631526,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07931586317263452,
                },
                { start: "0.25", density: 0.02660532106421284 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5755848830233954 },
                { start: 200, end: 500, density: 0.3000399920015997 },
                { start: 500, density: 0.12437512497500501 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6136841052315694 },
                { start: 800, end: 1800, density: 0.3458037411223366 },
                { start: 1800, density: 0.04051215364609393 },
              ],
              percentiles: { p75: 980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1687,
        lcp: 2125,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820099943,
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
                { start: 0, end: 100, density: 0.8814935064935071 },
                { start: 100, end: 300, density: 0.05076741440377808 },
                { start: 300, density: 0.06773907910271489 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6946242611877278 },
                { start: 2500, end: 4000, density: 0.17562623135378533 },
                { start: 4000, density: 0.12974950745848687 },
              ],
              percentiles: { p75: 2824 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8942041042706599,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030643372157515246,
                },
                { start: "0.25", density: 0.07515252357182478 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48348783314020877 },
                { start: 200, end: 500, density: 0.3208285052143686 },
                { start: 500, density: 0.19568366164542253 },
              ],
              percentiles: { p75: 399 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3715513655899071 },
                { start: 800, end: 1800, density: 0.4588936642173853 },
                { start: 1800, density: 0.16955497019270746 },
              ],
              percentiles: { p75: 1513 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5937499999999986 },
                { start: 1800, end: 3000, density: 0.24014639639639582 },
                { start: 3000, density: 0.16610360360360577 },
              ],
              percentiles: { p75: 2441 },
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
        lcp: 2824,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1654820101171,
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
                  density: 0.940947666195191,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026638378123526634,
                },
                { start: "0.25", density: 0.03241395568128241 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3821187258687255 },
                { start: 200, end: 500, density: 0.4434121621621618 },
                { start: 500, density: 0.1744691119691128 },
              ],
              percentiles: { p75: 406 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5396470588235286 },
                { start: 800, end: 1800, density: 0.37435294117647006 },
                { start: 1800, density: 0.0860000000000015 },
              ],
              percentiles: { p75: 1140 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.731814406075708 },
                { start: 1800, end: 3000, density: 0.18084727661089336 },
                { start: 3000, density: 0.08733831731339857 },
              ],
              percentiles: { p75: 1876 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9103330486763452 },
                { start: 100, end: 300, density: 0.06209588873978286 },
                { start: 300, density: 0.027571062583871875 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8170746197718624 },
                { start: 2500, end: 4000, density: 0.1220888783269961 },
                { start: 4000, density: 0.06083650190114148 },
              ],
              percentiles: { p75: 2197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1876,
        lcp: 2197,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1654820103783,
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
                { start: 0, end: 1800, density: 0.9211524947294448 },
                { start: 1800, end: 3000, density: 0.06324666198172876 },
                { start: 3000, density: 0.01560084328882637 },
              ],
              percentiles: { p75: 1306 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611488830303871 },
                { start: 100, end: 300, density: 0.02677951991119745 },
                { start: 300, density: 0.01207159705841543 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9469399213924761 },
                { start: 2500, end: 4000, density: 0.045199326221224044 },
                { start: 4000, density: 0.007860752386299814 },
              ],
              percentiles: { p75: 1616 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.974561039679248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016314115857873634,
                },
                { start: "0.25", density: 0.009124844462878473 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5815401272161319 },
                { start: 200, end: 500, density: 0.29219109487075373 },
                { start: 500, density: 0.1262687779131144 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7429221795418979 },
                { start: 800, end: 1800, density: 0.24327784891165166 },
                { start: 1800, density: 0.01379997154645042 },
              ],
              percentiles: { p75: 813 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1306,
        lcp: 1616,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820106453,
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
                { start: 0, end: 800, density: 0.5036503650365034 },
                { start: 800, end: 1800, density: 0.3760376037603758 },
                { start: 1800, density: 0.12031203120312074 },
              ],
              percentiles: { p75: 1266 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7466746674667475 },
                { start: 1800, end: 3000, density: 0.14461446144614473 },
                { start: 3000, density: 0.10871087108710775 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9711971197119712 },
                { start: 100, end: 300, density: 0.0213021302130213 },
                { start: 300, density: 0.007500750075007505 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7967109867039887 },
                { start: 2500, end: 4000, density: 0.12071378586424068 },
                { start: 4000, density: 0.08257522743177058 },
              ],
              percentiles: { p75: 2206 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.818 },
                { start: "0.10", end: "0.25", density: 0.1266 },
                { start: "0.25", density: 0.05540000000000006 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7932793279327931 },
                { start: 200, end: 500, density: 0.16351635163516348 },
                { start: 500, density: 0.043204320432043364 },
              ],
              percentiles: { p75: 181 },
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
        lcp: 2206,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654820108636,
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
                { start: 0, end: 2500, density: 0.22170565886822732 },
                { start: 2500, end: 4000, density: 0.3906718656268765 },
                { start: 4000, density: 0.3876224755048962 },
              ],
              percentiles: { p75: 5326 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8721744348869773,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07671534306861373,
                },
                { start: "0.25", density: 0.051110222044408855 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7851000000000001 },
                { start: 200, end: 500, density: 0.12560000000000007 },
                { start: 500, density: 0.08929999999999991 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2914542728635683 },
                { start: 800, end: 1800, density: 0.4884557721139433 },
                { start: 1800, density: 0.22008995502248851 },
              ],
              percentiles: { p75: 1729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.052710542108421625 },
                { start: 1800, end: 3000, density: 0.42028405681136183 },
                { start: 3000, density: 0.5270054010802165 },
              ],
              percentiles: { p75: 4813 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4813, lcp: 5326, cls: "0.04" },
      timestamp: 1654820110196,
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
                  density: 0.9712132443785522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01111934766493699,
                },
                { start: "0.25", density: 0.017667407956511 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6482450542437778 },
                { start: 200, end: 500, density: 0.29393746011486915 },
                { start: 500, density: 0.057817485641353056 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38450055977111547 },
                { start: 800, end: 1800, density: 0.46684911058589335 },
                { start: 1800, density: 0.14865032964299116 },
              ],
              percentiles: { p75: 1416 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5802238805970149 },
                { start: 1800, end: 3000, density: 0.26902985074626873 },
                { start: 3000, density: 0.15074626865671625 },
              ],
              percentiles: { p75: 2405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532071503680337 },
                { start: 100, end: 300, density: 0.04114090431125132 },
                { start: 300, density: 0.0056519453207150355 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7227494069172188 },
                { start: 2500, end: 4000, density: 0.1648770133599702 },
                { start: 4000, density: 0.11237357972281103 },
              ],
              percentiles: { p75: 2671 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2405,
        lcp: 2671,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820112600,
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
                { start: 0, end: 1800, density: 0.6524300441826218 },
                { start: 1800, end: 3000, density: 0.22901325478645085 },
                { start: 3000, density: 0.11855670103092739 },
              ],
              percentiles: { p75: 2224 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9703000150761344 },
                { start: 100, end: 300, density: 0.0039197949645710835 },
                { start: 300, density: 0.02578018995929449 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.750110963160231 },
                { start: 2500, end: 4000, density: 0.18597425654682648 },
                { start: 4000, density: 0.06391478029294265 },
              ],
              percentiles: { p75: 2547 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.95418733586227 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023052232273125178,
                },
                { start: "0.25", density: 0.02276043186460462 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6260618932038833 },
                { start: 200, end: 500, density: 0.3250910194174757 },
                { start: 500, density: 0.04884708737864088 },
              ],
              percentiles: { p75: 253 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36017764618800896 },
                { start: 800, end: 1800, density: 0.4712065136935603 },
                { start: 1800, density: 0.1686158401184307 },
              ],
              percentiles: { p75: 1525 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2224,
        lcp: 2547,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820115329,
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
                { start: 0, end: 2500, density: 0.8865612648221343 },
                { start: 2500, end: 4000, density: 0.08537549407114622 },
                { start: 4000, density: 0.028063241106719566 },
              ],
              percentiles: { p75: 1755 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.961876064456963,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024367876326477137,
                },
                { start: "0.25", density: 0.013756059216559677 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.461866597724923 },
                { start: 200, end: 500, density: 0.4055067218200625 },
                { start: 500, density: 0.13262668045501452 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7059602649006622 },
                { start: 800, end: 1800, density: 0.2247682119205298 },
                { start: 1800, density: 0.06927152317880797 },
              ],
              percentiles: { p75: 878 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8588981371383275 },
                { start: 1800, end: 3000, density: 0.10080591887964065 },
                { start: 3000, density: 0.04029594398203201 },
              ],
              percentiles: { p75: 1366 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954391891891892 },
                { start: 100, end: 300, density: 0.028456340956340965 },
                { start: 300, density: 0.017151767151767045 },
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
        fcp: 1366,
        lcp: 1755,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654820118001,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5092707045735478 },
                { start: 200, end: 500, density: 0.3417799752781212 },
                { start: 500, density: 0.14894932014833104 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7124693285746153 },
                { start: 800, end: 1800, density: 0.2480481820209681 },
                { start: 1800, density: 0.03948248940441665 },
              ],
              percentiles: { p75: 870 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8897124887690926 },
                { start: 1800, end: 3000, density: 0.0774932614555256 },
                { start: 3000, density: 0.0327942497753818 },
              ],
              percentiles: { p75: 1360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608019824284749 },
                { start: 100, end: 300, density: 0.027258391529623786 },
                { start: 300, density: 0.01193962604190134 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9213963963963963 },
                { start: 2500, end: 4000, density: 0.061711711711711734 },
                { start: 4000, density: 0.016891891891891893 },
              ],
              percentiles: { p75: 1706 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9446640316205533,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039306104523495825,
                },
                { start: "0.25", density: 0.016029863855950805 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1360,
        lcp: 1706,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820120247,
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
                { start: 0, end: 1800, density: 0.920819630660258 },
                { start: 1800, end: 3000, density: 0.05932203389830505 },
                { start: 3000, density: 0.019858335441436878 },
              ],
              percentiles: { p75: 1192 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9128840561385766 },
                { start: 100, end: 300, density: 0.043494752813250735 },
                { start: 300, density: 0.04362119104817266 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.921488125315816 },
                { start: 2500, end: 4000, density: 0.06486862051541184 },
                { start: 4000, density: 0.013643254168772122 },
              ],
              percentiles: { p75: 1683 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.90028775178281 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06405604904291254,
                },
                { start: "0.25", density: 0.03565619917427749 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40757238307349647 },
                { start: 200, end: 500, density: 0.3947042811185347 },
                { start: 500, density: 0.19772333580796878 },
              ],
              percentiles: { p75: 409 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8517774148976258 },
                { start: 800, end: 1800, density: 0.1288782816229117 },
                { start: 1800, density: 0.01934430347946243 },
              ],
              percentiles: { p75: 670 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1192,
        lcp: 1683,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654820122671,
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
                { start: 0, end: 1800, density: 0.8724116930572472 },
                { start: 1800, end: 3000, density: 0.09728989037758828 },
                { start: 3000, density: 0.0302984165651646 },
              ],
              percentiles: { p75: 1418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276355880560633 },
                { start: 100, end: 300, density: 0.03427787934186471 },
                { start: 300, density: 0.03808653260207206 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9069359756097563 },
                { start: 2500, end: 4000, density: 0.07141768292682928 },
                { start: 4000, density: 0.021646341463414542 },
              ],
              percentiles: { p75: 1821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9381911831540675,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03893349492501136,
                },
                { start: "0.25", density: 0.022875321920921086 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44519940915805045 },
                { start: 200, end: 500, density: 0.4144756277695718 },
                { start: 500, density: 0.14032496307237777 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7272025921925629 },
                { start: 800, end: 1800, density: 0.2430180527696343 },
                { start: 1800, density: 0.029779355037802824 },
              ],
              percentiles: { p75: 839 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 1821,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654820125013,
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
                  density: 0.9567387687188019,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016766926916677333,
                },
                { start: "0.25", density: 0.026494304364520674 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5524086818422447 },
                { start: 200, end: 500, density: 0.3757278983589201 },
                { start: 500, density: 0.07186341979883523 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42361111111111116 },
                { start: 800, end: 1800, density: 0.46656378600823045 },
                { start: 1800, density: 0.10982510288065839 },
              ],
              percentiles: { p75: 1332 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5736814891416764 },
                { start: 1800, end: 3000, density: 0.2702947259565671 },
                { start: 3000, density: 0.1560237849017565 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635765943458251 },
                { start: 100, end: 300, density: 0.027876397107166332 },
                { start: 300, density: 0.008547008547008536 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6963225806451615 },
                { start: 2500, end: 4000, density: 0.20561290322580655 },
                { start: 4000, density: 0.098064516129032 },
              ],
              percentiles: { p75: 2752 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 2752,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820127352,
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
                  density: 0.9381911831540675,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03893349492501136,
                },
                { start: "0.25", density: 0.022875321920921086 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44519940915805045 },
                { start: 200, end: 500, density: 0.4144756277695718 },
                { start: 500, density: 0.14032496307237777 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7272025921925629 },
                { start: 800, end: 1800, density: 0.2430180527696343 },
                { start: 1800, density: 0.029779355037802824 },
              ],
              percentiles: { p75: 839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8724116930572472 },
                { start: 1800, end: 3000, density: 0.09728989037758828 },
                { start: 3000, density: 0.0302984165651646 },
              ],
              percentiles: { p75: 1418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276355880560633 },
                { start: 100, end: 300, density: 0.03427787934186471 },
                { start: 300, density: 0.03808653260207206 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9069359756097563 },
                { start: 2500, end: 4000, density: 0.07141768292682928 },
                { start: 4000, density: 0.021646341463414542 },
              ],
              percentiles: { p75: 1821 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 1821,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654820129266,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9773068079576128 },
                { start: 100, end: 300, density: 0.014195741277616714 },
                { start: 300, density: 0.00849745076477059 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9230153969206161 },
                { start: 2500, end: 4000, density: 0.05888822235552892 },
                { start: 4000, density: 0.018096380723855086 },
              ],
              percentiles: { p75: 1687 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8975102489751026,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0860913908609139,
                },
                { start: "0.25", density: 0.016398360163983588 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.681068106810681 },
                { start: 200, end: 500, density: 0.2586258625862587 },
                { start: 500, density: 0.060306030603060466 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.696751624187906 },
                { start: 800, end: 1800, density: 0.2714642678660669 },
                { start: 1800, density: 0.031784107946027054 },
              ],
              percentiles: { p75: 864 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.897889788978898 },
                { start: 1800, end: 3000, density: 0.08110811081108112 },
                { start: 3000, density: 0.0210021002100209 },
              ],
              percentiles: { p75: 1335 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1335,
        lcp: 1687,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654820131440,
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
                  density: 0.9260159777700591,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048627995831886074,
                },
                { start: "0.25", density: 0.025356026398054867 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6662867996201322 },
                { start: 200, end: 500, density: 0.2566001899335229 },
                { start: 500, density: 0.07711301044634478 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4951111111111107 },
                { start: 800, end: 1800, density: 0.37191111111111086 },
                { start: 1800, density: 0.1329777777777784 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6689177181446584 },
                { start: 1800, end: 3000, density: 0.20081748711569178 },
                { start: 3000, density: 0.13026479473964975 },
              ],
              percentiles: { p75: 2186 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632550981146596 },
                { start: 100, end: 300, density: 0.030973451327433642 },
                { start: 300, density: 0.0057714505579068666 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7346126636009902 },
                { start: 2500, end: 4000, density: 0.16704987619384498 },
                { start: 4000, density: 0.09833746020516476 },
              ],
              percentiles: { p75: 2595 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2186,
        lcp: 2595,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654820132840,
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
                  density: 0.9329662437155852,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023581517835767295,
                },
                { start: "0.25", density: 0.04345223844864738 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48106712564543885 },
                { start: 200, end: 500, density: 0.3602163757069093 },
                { start: 500, density: 0.15871649864765172 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47177759056444785 },
                { start: 800, end: 1800, density: 0.4134071488747138 },
                { start: 1800, density: 0.11481526056083839 },
              ],
              percentiles: { p75: 1233 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6337075938669561 },
                { start: 1800, end: 3000, density: 0.22310756972111542 },
                { start: 3000, density: 0.14318483641192858 },
              ],
              percentiles: { p75: 2261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9581216701771774 },
                { start: 100, end: 300, density: 0.028992689877338614 },
                { start: 300, density: 0.012885639945483942 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7370137714423772 },
                { start: 2500, end: 4000, density: 0.1560763469437061 },
                { start: 4000, density: 0.10690988161391678 },
              ],
              percentiles: { p75: 2596 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2261,
        lcp: 2596,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820135044,
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
                  density: 0.9050298188365028,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06593901204005852,
                },
                { start: "0.25", density: 0.029031169123438727 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7777284334406572 },
                { start: 200, end: 500, density: 0.19529255023870326 },
                { start: 500, density: 0.026979016320639527 },
              ],
              percentiles: { p75: 188 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6055505004549591 },
                { start: 800, end: 1800, density: 0.35338944494995456 },
                { start: 1800, density: 0.04106005459508647 },
              ],
              percentiles: { p75: 1037 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8304740406320539 },
                { start: 1800, end: 3000, density: 0.13205417607223477 },
                { start: 3000, density: 0.037471783295711304 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9824035192961408 },
                { start: 100, end: 300, density: 0.01249750049990002 },
                { start: 300, density: 0.005098980203959209 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8851847666402983 },
                { start: 2500, end: 4000, density: 0.09108373827551135 },
                { start: 4000, density: 0.023731495084190236 },
              ],
              percentiles: { p75: 1865 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1865,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654820137211,
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
                  density: 0.8932159385935208,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07596794220566656,
                },
                { start: "0.25", density: 0.03081611920081272 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5872325820844296 },
                { start: 200, end: 500, density: 0.3088891431186363 },
                { start: 500, density: 0.10387827479693393 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42268392370572144 },
                { start: 800, end: 1800, density: 0.3492279745685735 },
                { start: 1800, density: 0.22808810172570504 },
              ],
              percentiles: { p75: 1795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4807670486780896 },
                { start: 1800, end: 3000, density: 0.25382956995347794 },
                { start: 3000, density: 0.26540338136843244 },
              ],
              percentiles: { p75: 3333 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505099675475197 },
                { start: 100, end: 300, density: 0.035465924895688464 },
                { start: 300, density: 0.014024107556791834 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5485138366928588 },
                { start: 2500, end: 4000, density: 0.22508825874046198 },
                { start: 4000, density: 0.22639790456667927 },
              ],
              percentiles: { p75: 3960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3333,
        lcp: 3960,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820139073,
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
                { start: 0, end: 200, density: 0.6251657385308939 },
                { start: 200, end: 500, density: 0.3138424821002387 },
                { start: 500, density: 0.06099177936886743 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42828921374950635 },
                { start: 800, end: 1800, density: 0.42960621625181106 },
                { start: 1800, density: 0.14210456999868262 },
              ],
              percentiles: { p75: 1440 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.652087737843552 },
                { start: 1800, end: 3000, density: 0.20599894291754764 },
                { start: 3000, density: 0.1419133192389003 },
              ],
              percentiles: { p75: 2249 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9733227680929741 },
                { start: 100, end: 300, density: 0.018357105124141574 },
                { start: 300, density: 0.008320126782884315 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7088122605363988 },
                { start: 2500, end: 4000, density: 0.17888756771039782 },
                { start: 4000, density: 0.11230017175320335 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.933742812336644,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020648196549921585,
                },
                { start: "0.25", density: 0.0456089911134344 },
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
        fcp: 2249,
        lcp: 2754,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820140749,
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
                  density: 0.9613207547169812,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01650943396226415,
                },
                { start: "0.25", density: 0.02216981132075472 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5862027737924435 },
                { start: 200, end: 500, density: 0.302965088474414 },
                { start: 500, density: 0.11083213773314253 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4265020185229159 },
                { start: 800, end: 1800, density: 0.36843980052244096 },
                { start: 1800, density: 0.20505818095464298 },
              ],
              percentiles: { p75: 1636 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5932826964158556 },
                { start: 1800, end: 3000, density: 0.24092095893662466 },
                { start: 3000, density: 0.16579634464751963 },
              ],
              percentiles: { p75: 2528 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9439229550164572 },
                { start: 100, end: 300, density: 0.033768133609654985 },
                { start: 300, density: 0.02230891137388783 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.706990521327014 },
                { start: 2500, end: 4000, density: 0.2069905213270142 },
                { start: 4000, density: 0.08601895734597184 },
              ],
              percentiles: { p75: 2737 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2528,
        lcp: 2737,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820142871,
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
                { start: 0, end: 800, density: 0.3074692530746928 },
                { start: 800, end: 1800, density: 0.4771522847715233 },
                { start: 1800, density: 0.21537846215378403 },
              ],
              percentiles: { p75: 1740 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5174965006998588 },
                { start: 1800, end: 3000, density: 0.2994401119776038 },
                { start: 3000, density: 0.1830633873225376 },
              ],
              percentiles: { p75: 2652 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704999999999999 },
                { start: 100, end: 300, density: 0.0222 },
                { start: 300, density: 0.007299999999999985 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.624287571242874 },
                { start: 2500, end: 4000, density: 0.22142785721427785 },
                { start: 4000, density: 0.15428457154284805 },
              ],
              percentiles: { p75: 3172 },
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
                  density: 0.0604879024195161,
                },
                { start: "0.25", density: 0.03349330133973208 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6064787042591481 },
                { start: 200, end: 500, density: 0.32143571285742845 },
                { start: 500, density: 0.07208558288342348 },
              ],
              percentiles: { p75: 280 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2652,
        lcp: 3172,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654820144853,
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
                { start: "0.00", end: "0.10", density: 0.8931 },
                { start: "0.10", end: "0.25", density: 0.0786 },
                { start: "0.25", density: 0.028300000000000027 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47754326297889377 },
                { start: 200, end: 500, density: 0.39651895568670603 },
                { start: 500, density: 0.1259377813344002 },
              ],
              percentiles: { p75: 347 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6363636363636362 },
                { start: 800, end: 1800, density: 0.3316331633163316 },
                { start: 1800, density: 0.032003200320032205 },
              ],
              percentiles: { p75: 939 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8861772354470894 },
                { start: 1800, end: 3000, density: 0.08951790358071614 },
                { start: 3000, density: 0.024304860972194503 },
              ],
              percentiles: { p75: 1393 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606882064619385 },
                { start: 100, end: 300, density: 0.02670801240372112 },
                { start: 300, density: 0.012603781134340408 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9016000000000001 },
                { start: 2500, end: 4000, density: 0.07700000000000004 },
                { start: 4000, density: 0.021399999999999884 },
              ],
              percentiles: { p75: 1806 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1393,
        lcp: 1806,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654820145635,
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
                { start: 0, end: 200, density: 0.5853585358535851 },
                { start: 200, end: 500, density: 0.27792779277927787 },
                { start: 500, density: 0.136713671367137 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3265673432656732 },
                { start: 800, end: 1800, density: 0.4332566743325664 },
                { start: 1800, density: 0.2401759824017604 },
              ],
              percentiles: { p75: 1864 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5497000000000001 },
                { start: 1800, end: 3000, density: 0.3217 },
                { start: 3000, density: 0.12860000000000002 },
              ],
              percentiles: { p75: 2531 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9367 },
                { start: 100, end: 300, density: 0.03610000000000001 },
                { start: 300, density: 0.027199999999999967 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6883753501400556 },
                { start: 2500, end: 4000, density: 0.22929171668667442 },
                { start: 4000, density: 0.08233293317327003 },
              ],
              percentiles: { p75: 2934 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8529 },
                { start: "0.10", end: "0.25", density: 0.0909 },
                { start: "0.25", density: 0.0562 },
              ],
              percentiles: { p75: "0.05" },
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
        lcp: 2934,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1654820146738,
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
                { start: 0, end: 100, density: 0.9625577985790007 },
                { start: 100, end: 300, density: 0.017480545844141198 },
                { start: 300, density: 0.019961655576858143 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8693495660015781 },
                { start: 2500, end: 4000, density: 0.08905422162101229 },
                { start: 4000, density: 0.04159621237740977 },
              ],
              percentiles: { p75: 1893 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9598339504095142,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024346460226635253,
                },
                { start: "0.25", density: 0.015819589363850552 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5947296683325759 },
                { start: 200, end: 500, density: 0.3172421626533392 },
                { start: 500, density: 0.08802816901408486 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6945734677693438 },
                { start: 800, end: 1800, density: 0.23428118273479098 },
                { start: 1800, density: 0.07114534949586525 },
              ],
              percentiles: { p75: 885 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8246782569428764 },
                { start: 1800, end: 3000, density: 0.11695642357191238 },
                { start: 3000, density: 0.05836531948521117 },
              ],
              percentiles: { p75: 1531 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1531,
        lcp: 1893,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820147731,
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
                { start: 0, end: 800, density: 0.29795657726692204 },
                { start: 800, end: 1800, density: 0.4674329501915708 },
                { start: 1800, density: 0.2346104725415071 },
              ],
              percentiles: { p75: 1784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48375080282594657 },
                { start: 1800, end: 3000, density: 0.3138086062941549 },
                { start: 3000, density: 0.20244059087989855 },
              ],
              percentiles: { p75: 2769 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629482598914914 },
                { start: 100, end: 300, density: 0.028053460367870847 },
                { start: 300, density: 0.008998279740637815 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6188125160297515 },
                { start: 2500, end: 4000, density: 0.23563734290843813 },
                { start: 4000, density: 0.14555014106181044 },
              ],
              percentiles: { p75: 3109 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9338422391857507,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03295165394402036,
                },
                { start: "0.25", density: 0.033206106870229 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5095313741064337 },
                { start: 200, end: 500, density: 0.4064072014826582 },
                { start: 500, density: 0.08406142441090801 },
              ],
              percentiles: { p75: 313 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2769,
        lcp: 3109,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654820149019,
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
                  density: 0.9358000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041499999999999995,
                },
                { start: "0.25", density: 0.022699999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6490403838464612 },
                { start: 200, end: 500, density: 0.2566973210715713 },
                { start: 500, density: 0.0942622950819676 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4585624312706185 },
                { start: 800, end: 1800, density: 0.35339398180545817 },
                { start: 1800, density: 0.18804358692392334 },
              ],
              percentiles: { p75: 1568 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6254250850170029 },
                { start: 1800, end: 3000, density: 0.22334466893378663 },
                { start: 3000, density: 0.15123024604921045 },
              ],
              percentiles: { p75: 2392 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9537861358407521 },
                { start: 100, end: 300, density: 0.02790837251175352 },
                { start: 300, density: 0.01830549164749444 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7261452290458089 },
                { start: 2500, end: 4000, density: 0.19293858771754338 },
                { start: 4000, density: 0.08091618323664769 },
              ],
              percentiles: { p75: 2650 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2392,
        lcp: 2650,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654820150279,
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
                { start: 0, end: 2500, density: 0.5677728908436626 },
                { start: 2500, end: 4000, density: 0.21561375449820078 },
                { start: 4000, density: 0.2166133546581367 },
              ],
              percentiles: { p75: 3759 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7266273372662733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14438556144385556,
                },
                { start: "0.25", density: 0.1289871012898711 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42829999999999985 },
                { start: 800, end: 1800, density: 0.33039999999999997 },
                { start: 1800, density: 0.2413000000000003 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5157031406281246 },
                { start: 1800, end: 3000, density: 0.20204040808161594 },
                { start: 3000, density: 0.2822564512902594 },
              ],
              percentiles: { p75: 3330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189081091890811 },
                { start: 100, end: 300, density: 0.06949305069493052 },
                { start: 300, density: 0.011598840115988402 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3330,
        lcp: 3759,
        cls: "0.13",
        fid: 15,
      },
      timestamp: 1654820151262,
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
                  density: 0.7266273372662733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14438556144385556,
                },
                { start: "0.25", density: 0.1289871012898711 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42829999999999985 },
                { start: 800, end: 1800, density: 0.33039999999999997 },
                { start: 1800, density: 0.2413000000000003 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5157031406281246 },
                { start: 1800, end: 3000, density: 0.20204040808161594 },
                { start: 3000, density: 0.2822564512902594 },
              ],
              percentiles: { p75: 3330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189081091890811 },
                { start: 100, end: 300, density: 0.06949305069493052 },
                { start: 300, density: 0.011598840115988402 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5677728908436626 },
                { start: 2500, end: 4000, density: 0.21561375449820078 },
                { start: 4000, density: 0.2166133546581367 },
              ],
              percentiles: { p75: 3759 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3330,
        lcp: 3759,
        cls: "0.13",
        fid: 15,
      },
      timestamp: 1654820152470,
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
                { start: 0, end: 800, density: 0.7358471694338868 },
                { start: 800, end: 1800, density: 0.23864772954590915 },
                { start: 1800, density: 0.025505101020204018 },
              ],
              percentiles: { p75: 828 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9097819563912785 },
                { start: 1800, end: 3000, density: 0.07061412282456492 },
                { start: 3000, density: 0.019603920784156677 },
              ],
              percentiles: { p75: 1221 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635036496350365 },
                { start: 100, end: 300, density: 0.020497950204979503 },
                { start: 300, density: 0.01599840015998407 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.92755 },
                { start: 2500, end: 4000, density: 0.055749999999999994 },
                { start: 4000, density: 0.016699999999999954 },
              ],
              percentiles: { p75: 1635 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8560143985601438,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1070892910708929,
                },
                { start: "0.25", density: 0.03689631036896312 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7070292970702937 },
                { start: 200, end: 500, density: 0.21437856214378578 },
                { start: 500, density: 0.07859214078592057 },
              ],
              percentiles: { p75: 222 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1221,
        lcp: 1635,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654820153676,
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
                { start: 0, end: 100, density: 0.9160419790104947 },
                { start: 100, end: 300, density: 0.04327836081959018 },
                { start: 300, density: 0.0406796601699151 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6928114377124566 },
                { start: 2500, end: 4000, density: 0.17451509698060363 },
                { start: 4000, density: 0.13267346530693988 },
              ],
              percentiles: { p75: 2823 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.819018098190181,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1447855214478552,
                },
                { start: "0.25", density: 0.03619638036196382 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6009403761504604 },
                { start: 200, end: 500, density: 0.2572028811524611 },
                { start: 500, density: 0.14185674269707854 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44429999999999936 },
                { start: 800, end: 1800, density: 0.41209999999999947 },
                { start: 1800, density: 0.1436000000000012 },
              ],
              percentiles: { p75: 1392 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6471058682395266 },
                { start: 1800, end: 3000, density: 0.22443267019893973 },
                { start: 3000, density: 0.12846146156153354 },
              ],
              percentiles: { p75: 2205 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2205,
        lcp: 2823,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654820154516,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47230553889222093 },
                { start: 800, end: 1800, density: 0.288842231553689 },
                { start: 1800, density: 0.23885222955409013 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5894410558944115 },
                { start: 1800, end: 3000, density: 0.1483851614838519 },
                { start: 3000, density: 0.2621737826217366 },
              ],
              percentiles: { p75: 3029 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.01410000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6109721944388868 },
                { start: 2500, end: 4000, density: 0.19858971794358846 },
                { start: 4000, density: 0.19043808761752476 },
              ],
              percentiles: { p75: 3451 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9189 },
                { start: "0.10", end: "0.25", density: 0.0532 },
                { start: "0.25", density: 0.027900000000000008 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6180381961803817 },
                { start: 200, end: 500, density: 0.27027297270272965 },
                { start: 500, density: 0.11168883111688864 },
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
        fcp: 3029,
        lcp: 3451,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820155309,
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
                { start: 0, end: 200, density: 0.6641671665666872 },
                { start: 200, end: 500, density: 0.25864827034593096 },
                { start: 500, density: 0.0771845630873819 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4620537946205378 },
                { start: 800, end: 1800, density: 0.4098590140985899 },
                { start: 1800, density: 0.12808719128087237 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6980301969803026 },
                { start: 1800, end: 3000, density: 0.18528147185281488 },
                { start: 3000, density: 0.11668833116688258 },
              ],
              percentiles: { p75: 2037 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606842737094836 },
                { start: 100, end: 300, density: 0.030912364945978387 },
                { start: 300, density: 0.008403361344537888 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7635709287213833 },
                { start: 2500, end: 4000, density: 0.14185744276716974 },
                { start: 4000, density: 0.09457162851144692 },
              ],
              percentiles: { p75: 2452 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8289828982898291,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11521152115211522,
                },
                { start: "0.25", density: 0.05580558055805577 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2037,
        lcp: 2452,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1654820156297,
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
                { start: 0, end: 200, density: 0.7454999999999999 },
                { start: 200, end: 500, density: 0.17939999999999995 },
                { start: 500, density: 0.07510000000000012 },
              ],
              percentiles: { p75: 209 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7590240975902409 },
                { start: 800, end: 1800, density: 0.20467953204679531 },
                { start: 1800, density: 0.036296370362963716 },
              ],
              percentiles: { p75: 800 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9137 },
                { start: 1800, end: 3000, density: 0.06400000000000002 },
                { start: 3000, density: 0.02229999999999996 },
              ],
              percentiles: { p75: 1216 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9817981798179818 },
                { start: 100, end: 300, density: 0.012901290129012899 },
                { start: 300, density: 0.0053005300530053045 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9269780934280283 },
                { start: 2500, end: 4000, density: 0.05451635490647194 },
                { start: 4000, density: 0.018505551665499633 },
              ],
              percentiles: { p75: 1641 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8061 },
                { start: "0.10", end: "0.25", density: 0.1727 },
                { start: "0.25", density: 0.02119999999999998 },
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
        fcp: 1216,
        lcp: 1641,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1654820157147,
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
                { start: 0, end: 1800, density: 0.6841657552558025 },
                { start: 1800, end: 3000, density: 0.19832300401020772 },
                { start: 3000, density: 0.11751124073398976 },
              ],
              percentiles: { p75: 2033 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598468000988386 },
                { start: 100, end: 300, density: 0.03175191499876452 },
                { start: 300, density: 0.008401284902396833 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7727825030376664 },
                { start: 2500, end: 4000, density: 0.14301336573511533 },
                { start: 4000, density: 0.08420413122721838 },
              ],
              percentiles: { p75: 2396 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.957710843373494,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01433734939759036,
                },
                { start: "0.25", density: 0.027951807228915656 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.534869691119691 },
                { start: 200, end: 500, density: 0.3284266409266409 },
                { start: 500, density: 0.13670366795366817 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4856661045531198 },
                { start: 800, end: 1800, density: 0.40351722476511687 },
                { start: 1800, density: 0.11081667068176322 },
              ],
              percentiles: { p75: 1200 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2033,
        lcp: 2396,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820158084,
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
                { start: 0, end: 800, density: 0.5613999999999992 },
                { start: 800, end: 1800, density: 0.3559999999999995 },
                { start: 1800, density: 0.08260000000000138 },
              ],
              percentiles: { p75: 1112 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7450764770568824 },
                { start: 1800, end: 3000, density: 0.17024892532240316 },
                { start: 3000, density: 0.08467459762071448 },
              ],
              percentiles: { p75: 1829 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9208920892089208 },
                { start: 100, end: 300, density: 0.05400540054005401 },
                { start: 300, density: 0.025102510251025147 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8118564430670795 },
                { start: 2500, end: 4000, density: 0.12406278116565025 },
                { start: 4000, density: 0.06408077576727032 },
              ],
              percentiles: { p75: 2215 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8881000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06680000000000001,
                },
                { start: "0.25", density: 0.04509999999999998 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.456645664566457 },
                { start: 200, end: 500, density: 0.3865386538653868 },
                { start: 500, density: 0.15681568156815612 },
              ],
              percentiles: { p75: 377 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1829,
        lcp: 2215,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1654820159330,
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
                  density: 0.9524940617577197,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024861441013460016,
                },
                { start: "0.25", density: 0.022644497228820268 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5687250996015932 },
                { start: 200, end: 500, density: 0.2971447543160689 },
                { start: 500, density: 0.1341301460823379 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3868980055132156 },
                { start: 800, end: 1800, density: 0.46521809631911804 },
                { start: 1800, density: 0.14788389816766637 },
              ],
              percentiles: { p75: 1421 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6049541579539969 },
                { start: 1800, end: 3000, density: 0.24577770628920687 },
                { start: 3000, density: 0.14926813575679634 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9307081291194862 },
                { start: 100, end: 300, density: 0.03768801757647457 },
                { start: 300, density: 0.03160385330403914 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6990041760359781 },
                { start: 2500, end: 4000, density: 0.20157404433022805 },
                { start: 4000, density: 0.09942177963379384 },
              ],
              percentiles: { p75: 2705 },
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
        lcp: 2705,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820160185,
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
                { start: 0, end: 800, density: 0.4628611416575027 },
                { start: 800, end: 1800, density: 0.418374487653704 },
                { start: 1800, density: 0.11876437068879325 },
              ],
              percentiles: { p75: 1308 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6737999999999997 },
                { start: 1800, end: 3000, density: 0.20699999999999996 },
                { start: 3000, density: 0.11920000000000035 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9557132860141958 },
                { start: 100, end: 300, density: 0.025592322303309014 },
                { start: 300, density: 0.01869439168249521 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7155999999999997 },
                { start: 2500, end: 4000, density: 0.18359999999999999 },
                { start: 4000, density: 0.10080000000000035 },
              ],
              percentiles: { p75: 2691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8169816981698169,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13121312131213123,
                },
                { start: "0.25", density: 0.05180518051805181 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7027405481096213 },
                { start: 200, end: 500, density: 0.2045409081816362 },
                { start: 500, density: 0.09271854370874244 },
              ],
              percentiles: { p75: 228 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2149,
        lcp: 2691,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654820161414,
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
                { start: 0, end: 100, density: 0.9656931386277254 },
                { start: 100, end: 300, density: 0.016003200640128022 },
                { start: 300, density: 0.018303660732146548 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8681499999999999 },
                { start: 2500, end: 4000, density: 0.08964999999999992 },
                { start: 4000, density: 0.04220000000000027 },
              ],
              percentiles: { p75: 1903 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9257999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05789999999999999,
                },
                { start: "0.25", density: 0.016299999999999995 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6295629562956297 },
                { start: 200, end: 500, density: 0.2886288628862887 },
                { start: 500, density: 0.08180818081808156 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7076999999999994 },
                { start: 800, end: 1800, density: 0.22609999999999983 },
                { start: 1800, density: 0.06620000000000054 },
              ],
              percentiles: { p75: 870 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8301169883011693 },
                { start: 1800, end: 3000, density: 0.11298870112988693 },
                { start: 3000, density: 0.05689431056894358 },
              ],
              percentiles: { p75: 1510 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1510,
        lcp: 1903,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654820162341,
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
                { start: 0, end: 800, density: 0.6026410564225689 },
                { start: 800, end: 1800, density: 0.30082032813125253 },
                { start: 1800, density: 0.09653861544617857 },
              ],
              percentiles: { p75: 1130 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7534520712427455 },
                { start: 1800, end: 3000, density: 0.1517910746447869 },
                { start: 3000, density: 0.09475685411246768 },
              ],
              percentiles: { p75: 1797 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9767000000000001 },
                { start: 100, end: 300, density: 0.0186 },
                { start: 300, density: 0.00469999999999997 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.778383515054517 },
                { start: 2500, end: 4000, density: 0.13539061718515571 },
                { start: 4000, density: 0.08622586776032735 },
              ],
              percentiles: { p75: 2349 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8484 },
                { start: "0.10", end: "0.25", density: 0.1223 },
                { start: "0.25", density: 0.029300000000000007 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8003000000000005 },
                { start: 200, end: 500, density: 0.1484000000000001 },
                { start: 500, density: 0.05129999999999948 },
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
        fcp: 1797,
        lcp: 2349,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654820163277,
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
                  density: 0.8857412653446649,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08652030217186024,
                },
                { start: "0.25", density: 0.02773843248347498 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5495274763738184 },
                { start: 200, end: 500, density: 0.31979932329949823 },
                { start: 500, density: 0.13067320032668334 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6007774767345978 },
                { start: 800, end: 1800, density: 0.3557545058310755 },
                { start: 1800, density: 0.043468017434326656 },
              ],
              percentiles: { p75: 997 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7821420146260912 },
                { start: 1800, end: 3000, density: 0.16489738145789098 },
                { start: 3000, density: 0.052960603916017916 },
              ],
              percentiles: { p75: 1717 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502670623145401 },
                { start: 100, end: 300, density: 0.030148367952522254 },
                { start: 300, density: 0.019584569732937752 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8407477520113579 },
                { start: 2500, end: 4000, density: 0.119380028395646 },
                { start: 4000, density: 0.03987221959299608 },
              ],
              percentiles: { p75: 2107 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1717,
        lcp: 2107,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820164174,
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
                { start: 0, end: 1800, density: 0.49740051989602063 },
                { start: 1800, end: 3000, density: 0.24455108978204348 },
                { start: 3000, density: 0.2580483903219358 },
              ],
              percentiles: { p75: 3302 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572957295729574 },
                { start: 100, end: 300, density: 0.03060306030603061 },
                { start: 300, density: 0.012101210121012097 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.557932620213934 },
                { start: 2500, end: 4000, density: 0.2149355193441961 },
                { start: 4000, density: 0.22713186044186995 },
              ],
              percentiles: { p75: 3960 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8935106489351063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0751924807519248,
                },
                { start: "0.25", density: 0.031296870312968676 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6244375562443759 },
                { start: 200, end: 500, density: 0.27927207279272076 },
                { start: 500, density: 0.0962903709629035 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4219687875150053 },
                { start: 800, end: 1800, density: 0.35794317727090785 },
                { start: 1800, density: 0.22008803521408674 },
              ],
              percentiles: { p75: 1778 },
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
        lcp: 3960,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654820165672,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5929371748699477 },
                { start: 200, end: 500, density: 0.33103241296518593 },
                { start: 500, density: 0.07603041216486647 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7138286171382855 },
                { start: 800, end: 1800, density: 0.2239776022397758 },
                { start: 1800, density: 0.06219378062193852 },
              ],
              percentiles: { p75: 864 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.832366473294659 },
                { start: 1800, end: 3000, density: 0.1002200440088018 },
                { start: 3000, density: 0.06741348269653935 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678935787157431 },
                { start: 100, end: 300, density: 0.019503900780156035 },
                { start: 300, density: 0.012602520504100812 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8610722144428882 },
                { start: 2500, end: 4000, density: 0.09171834366873369 },
                { start: 4000, density: 0.047209441888378265 },
              ],
              percentiles: { p75: 1875 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9573999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027899999999999998,
                },
                { start: "0.25", density: 0.014700000000000001 },
              ],
              percentiles: { p75: "0.01" },
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
        lcp: 1875,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654820166689,
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
                { start: 0, end: 200, density: 0.7132860141957419 },
                { start: 200, end: 500, density: 0.20283914825552352 },
                { start: 500, density: 0.08387483754873452 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.851985198519852 },
                { start: 800, end: 1800, density: 0.13151315131513153 },
                { start: 1800, density: 0.016501650165016476 },
              ],
              percentiles: { p75: 680 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9462731365682842 },
                { start: 1800, end: 3000, density: 0.039719859929964976 },
                { start: 3000, density: 0.014007003501750964 },
              ],
              percentiles: { p75: 1126 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647894368310491 },
                { start: 100, end: 300, density: 0.020506151845553666 },
                { start: 300, density: 0.014704411323397108 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9469106178764247 },
                { start: 2500, end: 4000, density: 0.039992001599680076 },
                { start: 4000, density: 0.013097380523895226 },
              ],
              percentiles: { p75: 1498 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8488000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10780000000000002,
                },
                { start: "0.25", density: 0.043399999999999925 },
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
        fcp: 1126,
        lcp: 1498,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654820167590,
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
                { start: 0, end: 2500, density: 0.5677728908436626 },
                { start: 2500, end: 4000, density: 0.21561375449820078 },
                { start: 4000, density: 0.2166133546581367 },
              ],
              percentiles: { p75: 3593 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7266273372662733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14438556144385556,
                },
                { start: "0.25", density: 0.1289871012898711 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42829999999999985 },
                { start: 800, end: 1800, density: 0.33039999999999997 },
                { start: 1800, density: 0.2413000000000003 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5157031406281246 },
                { start: 1800, end: 3000, density: 0.20204040808161594 },
                { start: 3000, density: 0.2822564512902594 },
              ],
              percentiles: { p75: 3245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189081091890811 },
                { start: 100, end: 300, density: 0.06949305069493052 },
                { start: 300, density: 0.011598840115988402 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3245,
        lcp: 3593,
        cls: "0.13",
        fid: 14,
      },
      timestamp: 1654820168433,
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
                  density: 0.9482504604051566,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03996316758747698,
                },
                { start: "0.25", density: 0.011786372007366482 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8452018665043619 },
                { start: 200, end: 500, density: 0.12396023534185431 },
                { start: 500, density: 0.030837898153783717 },
              ],
              percentiles: { p75: 146 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44635193133047235 },
                { start: 800, end: 1800, density: 0.39708900914349704 },
                { start: 1800, density: 0.15655905952603066 },
              ],
              percentiles: { p75: 1414 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6338001867413631 },
                { start: 1800, end: 3000, density: 0.253781512605042 },
                { start: 3000, density: 0.1124183006535949 },
              ],
              percentiles: { p75: 2190 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572218216774814 },
                { start: 100, end: 300, density: 0.032203797164143226 },
                { start: 300, density: 0.010574381158375385 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7434634331186054 },
                { start: 2500, end: 4000, density: 0.18605532398635852 },
                { start: 4000, density: 0.07048124289503616 },
              ],
              percentiles: { p75: 2519 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2190,
        lcp: 2519,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654820169278,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6737999999999997 },
                { start: 1800, end: 3000, density: 0.20699999999999996 },
                { start: 3000, density: 0.11920000000000035 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9557132860141958 },
                { start: 100, end: 300, density: 0.025592322303309014 },
                { start: 300, density: 0.01869439168249521 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7155999999999997 },
                { start: 2500, end: 4000, density: 0.18359999999999999 },
                { start: 4000, density: 0.10080000000000035 },
              ],
              percentiles: { p75: 2691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8169816981698169,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13121312131213123,
                },
                { start: "0.25", density: 0.05180518051805181 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7027405481096213 },
                { start: 200, end: 500, density: 0.2045409081816362 },
                { start: 500, density: 0.09271854370874244 },
              ],
              percentiles: { p75: 228 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4628611416575027 },
                { start: 800, end: 1800, density: 0.418374487653704 },
                { start: 1800, density: 0.11876437068879325 },
              ],
              percentiles: { p75: 1308 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2149,
        lcp: 2691,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654820170487,
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
                  density: 0.7266273372662733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14438556144385556,
                },
                { start: "0.25", density: 0.1289871012898711 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42829999999999985 },
                { start: 800, end: 1800, density: 0.33039999999999997 },
                { start: 1800, density: 0.2413000000000003 },
              ],
              percentiles: { p75: 1757 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5157031406281246 },
                { start: 1800, end: 3000, density: 0.20204040808161594 },
                { start: 3000, density: 0.2822564512902594 },
              ],
              percentiles: { p75: 3245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189081091890811 },
                { start: 100, end: 300, density: 0.06949305069493052 },
                { start: 300, density: 0.011598840115988402 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5677728908436626 },
                { start: 2500, end: 4000, density: 0.21561375449820078 },
                { start: 4000, density: 0.2166133546581367 },
              ],
              percentiles: { p75: 3593 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3245,
        lcp: 3593,
        cls: "0.13",
        fid: 14,
      },
      timestamp: 1654820171174,
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
                { start: 0, end: 2500, density: 0.7914000000000004 },
                { start: 2500, end: 4000, density: 0.1332000000000001 },
                { start: 4000, density: 0.07539999999999951 },
              ],
              percentiles: { p75: 2316 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9448999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039799999999999995,
                },
                { start: "0.25", density: 0.015300000000000008 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9125087491250874 },
                { start: 200, end: 500, density: 0.0687931206879312 },
                { start: 500, density: 0.018698130186981306 },
              ],
              percentiles: { p75: 102 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5349930013997202 },
                { start: 800, end: 1800, density: 0.36152769446110783 },
                { start: 1800, density: 0.103479304139172 },
              ],
              percentiles: { p75: 1241 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7402000000000002 },
                { start: 1800, end: 3000, density: 0.18710000000000007 },
                { start: 3000, density: 0.07269999999999968 },
              ],
              percentiles: { p75: 1854 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9813037392521496 },
                { start: 100, end: 300, density: 0.014297140571885622 },
                { start: 300, density: 0.0043991201759648055 },
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
      extractedResults: { fcp: 1854, lcp: 2316, cls: "0.03", fid: 8 },
      timestamp: 1654820171799,
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
                { start: 0, end: 100, density: 0.9623226064361384 },
                { start: 100, end: 300, density: 0.023286028382970222 },
                { start: 300, density: 0.01439136518089136 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8870161048314494 },
                { start: 2500, end: 4000, density: 0.0843753125937781 },
                { start: 4000, density: 0.028608582574772515 },
              ],
              percentiles: { p75: 1744 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8623862386238624,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09020902090209022,
                },
                { start: "0.25", density: 0.047404740474047406 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5538000000000003 },
                { start: 200, end: 500, density: 0.3358000000000002 },
                { start: 500, density: 0.1103999999999995 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7180845746276115 },
                { start: 800, end: 1800, density: 0.220333899830051 },
                { start: 1800, density: 0.06158152554233729 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8690607182154644 },
                { start: 1800, end: 3000, density: 0.0935280584175252 },
                { start: 3000, density: 0.037411223367010416 },
              ],
              percentiles: { p75: 1333 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1333,
        lcp: 1744,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654820172490,
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
                { start: 0, end: 2500, density: 0.8861727654469104 },
                { start: 2500, end: 4000, density: 0.0864327134573086 },
                { start: 4000, density: 0.027394521095780916 },
              ],
              percentiles: { p75: 1849 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8805999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08549999999999999,
                },
                { start: "0.25", density: 0.03390000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.796 },
                { start: 200, end: 500, density: 0.17649999999999996 },
                { start: 500, density: 0.02750000000000007 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6173765246950611 },
                { start: 800, end: 1800, density: 0.34133173365326935 },
                { start: 1800, density: 0.0412917416516697 },
              ],
              percentiles: { p75: 1026 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8378324335132976 },
                { start: 1800, end: 3000, density: 0.12487502499500104 },
                { start: 3000, density: 0.037292541491701414 },
              ],
              percentiles: { p75: 1446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9824035192961408 },
                { start: 100, end: 300, density: 0.01249750049990002 },
                { start: 300, density: 0.005098980203959209 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1446,
        lcp: 1849,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1654820173156,
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
                  density: 0.9690030996900311,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021197880211978805,
                },
                { start: "0.25", density: 0.0097990200979902 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5678567856785681 },
                { start: 200, end: 500, density: 0.3397339733973398 },
                { start: 500, density: 0.09240924092409217 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.545690861827635 },
                { start: 800, end: 1800, density: 0.3181363727254552 },
                { start: 1800, density: 0.1361727654469097 },
              ],
              percentiles: { p75: 1529 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6572685462907416 },
                { start: 1800, end: 3000, density: 0.2556488702259548 },
                { start: 3000, density: 0.08708258348330346 },
              ],
              percentiles: { p75: 2116 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9413234706117553 },
                { start: 100, end: 300, density: 0.0432826869252299 },
                { start: 300, density: 0.015393842463014834 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7133573285342932 },
                { start: 2500, end: 4000, density: 0.20275944811037805 },
                { start: 4000, density: 0.08388322335532869 },
              ],
              percentiles: { p75: 2715 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2116,
        lcp: 2715,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820173931,
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
                  density: 0.8849999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08099999999999999,
                },
                { start: "0.25", density: 0.034 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5049495050494945 },
                { start: 200, end: 500, density: 0.32726727327267235 },
                { start: 500, density: 0.16778322167783305 },
              ],
              percentiles: { p75: 361 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8689475790316128 },
                { start: 800, end: 1800, density: 0.11344537815126053 },
                { start: 1800, density: 0.017607042817126807 },
              ],
              percentiles: { p75: 650 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9283000000000002 },
                { start: 1800, end: 3000, density: 0.052100000000000014 },
                { start: 3000, density: 0.019599999999999843 },
              ],
              percentiles: { p75: 1139 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297070292970704 },
                { start: 100, end: 300, density: 0.03539646035396461 },
                { start: 300, density: 0.03489651034896498 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9239923992399239 },
                { start: 2500, end: 4000, density: 0.060906090609060916 },
                { start: 4000, density: 0.015101510151015202 },
              ],
              percentiles: { p75: 1667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1139,
        lcp: 1667,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1654820174585,
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
                { start: 0, end: 2500, density: 0.9431943194319431 },
                { start: 2500, end: 4000, density: 0.050005000500049995 },
                { start: 4000, density: 0.006800680068006783 },
              ],
              percentiles: { p75: 1586 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9624999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.026 },
                { start: "0.25", density: 0.0115 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6733979806058181 },
                { start: 200, end: 500, density: 0.22883135059482146 },
                { start: 500, density: 0.09777066879936044 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7683 },
                { start: 800, end: 1800, density: 0.2197 },
                { start: 1800, density: 0.011999999999999999 },
              ],
              percentiles: { p75: 785 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9290141971605678 },
                { start: 1800, end: 3000, density: 0.05668866226754651 },
                { start: 3000, density: 0.014297140571885589 },
              ],
              percentiles: { p75: 1228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684968496849684 },
                { start: 100, end: 300, density: 0.0211021102110211 },
                { start: 300, density: 0.0104010401040104 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1228,
        lcp: 1586,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654820175283,
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
                { start: 0, end: 200, density: 0.5687250996015932 },
                { start: 200, end: 500, density: 0.2971447543160689 },
                { start: 500, density: 0.1341301460823379 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3868980055132156 },
                { start: 800, end: 1800, density: 0.46521809631911804 },
                { start: 1800, density: 0.14788389816766637 },
              ],
              percentiles: { p75: 1421 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6049541579539969 },
                { start: 1800, end: 3000, density: 0.24577770628920687 },
                { start: 3000, density: 0.14926813575679634 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9307081291194862 },
                { start: 100, end: 300, density: 0.03768801757647457 },
                { start: 300, density: 0.03160385330403914 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6990041760359781 },
                { start: 2500, end: 4000, density: 0.20157404433022805 },
                { start: 4000, density: 0.09942177963379384 },
              ],
              percentiles: { p75: 2705 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9524940617577197,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024861441013460016,
                },
                { start: "0.25", density: 0.022644497228820268 },
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
        lcp: 2705,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820175899,
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
                { start: 0, end: 200, density: 0.7001299870013 },
                { start: 200, end: 500, density: 0.24937506249375066 },
                { start: 500, density: 0.05049495050494932 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44704470447044714 },
                { start: 800, end: 1800, density: 0.4304430443044306 },
                { start: 1800, density: 0.12251225122512231 },
              ],
              percentiles: { p75: 1385 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6770677067706771 },
                { start: 1800, end: 3000, density: 0.19731973197319727 },
                { start: 3000, density: 0.12561256125612566 },
              ],
              percentiles: { p75: 2127 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9789936981094328 },
                { start: 100, end: 300, density: 0.01470441132339702 },
                { start: 300, density: 0.006301890567170154 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7093790620937902 },
                { start: 2500, end: 4000, density: 0.17313268673132676 },
                { start: 4000, density: 0.11748825117488311 },
              ],
              percentiles: { p75: 2783 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8654 },
                { start: "0.10", end: "0.25", density: 0.086 },
                { start: "0.25", density: 0.04860000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2127,
        lcp: 2783,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654820176887,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5588896381209254 },
                { start: 200, end: 500, density: 0.28680602382557846 },
                { start: 500, density: 0.15430433805349614 },
              ],
              percentiles: { p75: 336 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42270876884145614 },
                { start: 800, end: 1800, density: 0.42303883815601223 },
                { start: 1800, density: 0.15425239300253163 },
              ],
              percentiles: { p75: 1436 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.623327805417357 },
                { start: 1800, end: 3000, density: 0.2381426202321722 },
                { start: 3000, density: 0.13852957435047084 },
              ],
              percentiles: { p75: 2282 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9045977011494253 },
                { start: 100, end: 300, density: 0.0493103448275862 },
                { start: 300, density: 0.04609195402298856 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6765489673550968 },
                { start: 2500, end: 4000, density: 0.18443260048856316 },
                { start: 4000, density: 0.1390184321563399 },
              ],
              percentiles: { p75: 2900 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.808256982006844,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15619825587813227,
                },
                { start: "0.25", density: 0.03554476211502375 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2282,
        lcp: 2900,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1654820177693,
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
                { start: "0.00", end: "0.10", density: 0.7994 },
                { start: "0.10", end: "0.25", density: 0.1523 },
                { start: "0.25", density: 0.04829999999999998 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.676535307061413 },
                { start: 200, end: 500, density: 0.23394678935787175 },
                { start: 500, density: 0.08951790358071528 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7596759675967597 },
                { start: 800, end: 1800, density: 0.2065206520652065 },
                { start: 1800, density: 0.033803380338033755 },
              ],
              percentiles: { p75: 801 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.901519696060788 },
                { start: 1800, end: 3000, density: 0.07018596280743852 },
                { start: 3000, density: 0.02829434113177355 },
              ],
              percentiles: { p75: 1242 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967103289671033 },
                { start: 100, end: 300, density: 0.019098090190980906 },
                { start: 300, density: 0.01379862013798618 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.918 },
                { start: 2500, end: 4000, density: 0.05859999999999997 },
                { start: 4000, density: 0.02340000000000005 },
              ],
              percentiles: { p75: 1691 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1242,
        lcp: 1691,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654820178865,
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
                { start: 0, end: 800, density: 0.28386027888996324 },
                { start: 800, end: 1800, density: 0.5301670578489583 },
                { start: 1800, density: 0.18597266326107834 },
              ],
              percentiles: { p75: 1614 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4886033982594283 },
                { start: 1800, end: 3000, density: 0.32131509877054854 },
                { start: 3000, density: 0.1900815029700231 },
              ],
              percentiles: { p75: 2670 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9768149543544414 },
                { start: 100, end: 300, density: 0.016084625416606282 },
                { start: 300, density: 0.007100420228952333 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.636627104609439 },
                { start: 2500, end: 4000, density: 0.24744686723709608 },
                { start: 4000, density: 0.11592602815346484 },
              ],
              percentiles: { p75: 2936 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9304966479682583,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029689423997810917,
                },
                { start: "0.25", density: 0.03981392803393074 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5807365439093487 },
                { start: 200, end: 500, density: 0.367988668555241 },
                { start: 500, density: 0.05127478753541041 },
              ],
              percentiles: { p75: 271 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2670,
        lcp: 2936,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820179574,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597758655193116 },
                { start: 100, end: 300, density: 0.02221332799679808 },
                { start: 300, density: 0.018010806483890317 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8861272254450894 },
                { start: 2500, end: 4000, density: 0.08326665333066614 },
                { start: 4000, density: 0.030606121224244515 },
              ],
              percentiles: { p75: 1888 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.909 },
                { start: "0.10", end: "0.25", density: 0.0761 },
                { start: "0.25", density: 0.01489999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6342000000000001 },
                { start: 200, end: 500, density: 0.2859000000000001 },
                { start: 500, density: 0.07989999999999986 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6010000000000001 },
                { start: 800, end: 1800, density: 0.35269999999999996 },
                { start: 1800, density: 0.04629999999999993 },
              ],
              percentiles: { p75: 976 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8736252749450107 },
                { start: 1800, end: 3000, density: 0.08818236352729453 },
                { start: 3000, density: 0.03819236152769483 },
              ],
              percentiles: { p75: 1454 },
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
        lcp: 1888,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654820180771,
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
                { start: 0, end: 200, density: 0.5219999999999999 },
                { start: 200, end: 500, density: 0.35779999999999995 },
                { start: 500, density: 0.12020000000000022 },
              ],
              percentiles: { p75: 331 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20977902209778973 },
                { start: 800, end: 1800, density: 0.5312468753124674 },
                { start: 1800, density: 0.25897410258974274 },
              ],
              percentiles: { p75: 1868 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3624362436243633 },
                { start: 1800, end: 3000, density: 0.327232723272328 },
                { start: 3000, density: 0.3103310331033088 },
              ],
              percentiles: { p75: 3376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715971597159715 },
                { start: 100, end: 300, density: 0.0202020202020202 },
                { start: 300, density: 0.008200820082008198 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4754499999999991 },
                { start: 2500, end: 4000, density: 0.3110499999999994 },
                { start: 4000, density: 0.21350000000000147 },
              ],
              percentiles: { p75: 3779 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9254999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050899999999999994,
                },
                { start: "0.25", density: 0.0236 },
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
        fcp: 3376,
        lcp: 3779,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1654820181710,
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
                { start: "0.00", end: "0.10", density: 0.95768628009688 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025359737854395215,
                },
                { start: "0.25", density: 0.016953982048724895 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6018859584499777 },
                { start: 200, end: 500, density: 0.3061735671135993 },
                { start: 500, density: 0.09194047443642299 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36220242441945316 },
                { start: 800, end: 1800, density: 0.4013436541551037 },
                { start: 1800, density: 0.23645392142544308 },
              ],
              percentiles: { p75: 1717 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6053779069767444 },
                { start: 1800, end: 3000, density: 0.20247093023255822 },
                { start: 3000, density: 0.19215116279069733 },
              ],
              percentiles: { p75: 2599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351851851851851 },
                { start: 100, end: 300, density: 0.03833912037037037 },
                { start: 300, density: 0.026475694444444517 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6814574314574317 },
                { start: 2500, end: 4000, density: 0.1941558441558441 },
                { start: 4000, density: 0.1243867243867242 },
              ],
              percentiles: { p75: 2954 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2599,
        lcp: 2954,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654820182556,
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
                  density: 0.8143999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1291 },
                { start: "0.25", density: 0.05649999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6087391260873916 },
                { start: 200, end: 500, density: 0.2875712428757125 },
                { start: 500, density: 0.10368963103689591 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7619523904780956 },
                { start: 800, end: 1800, density: 0.20954190838167636 },
                { start: 1800, density: 0.028505701140227987 },
              ],
              percentiles: { p75: 808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8896000000000001 },
                { start: 1800, end: 3000, density: 0.0817 },
                { start: 3000, density: 0.028700000000000062 },
              ],
              percentiles: { p75: 1316 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511902380476094 },
                { start: 100, end: 300, density: 0.023804760952190435 },
                { start: 300, density: 0.02500500100020014 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9076815363072613 },
                { start: 2500, end: 4000, density: 0.06851370274054815 },
                { start: 4000, density: 0.023804760952190557 },
              ],
              percentiles: { p75: 1775 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1316,
        lcp: 1775,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654820183803,
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
                  density: 0.8015198480151984,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1163883611638836,
                },
                { start: "0.25", density: 0.082091790820918 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6137386261373856 },
                { start: 200, end: 500, density: 0.2560743925607437 },
                { start: 500, density: 0.1301869813018706 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29914017196560827 },
                { start: 800, end: 1800, density: 0.3736252749450128 },
                { start: 1800, density: 0.327234553089379 },
              ],
              percentiles: { p75: 2054 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5034006801360272 },
                { start: 1800, end: 3000, density: 0.28145629125825156 },
                { start: 3000, density: 0.21514302860572135 },
              ],
              percentiles: { p75: 2812 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9365936593659365 },
                { start: 100, end: 300, density: 0.03420342034203421 },
                { start: 300, density: 0.029202920292029273 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5982499999999993 },
                { start: 2500, end: 4000, density: 0.24464999999999965 },
                { start: 4000, density: 0.15710000000000107 },
              ],
              percentiles: { p75: 3230 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2812,
        lcp: 3230,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1654820184614,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5487804878048784 },
                { start: 200, end: 500, density: 0.34158415841584183 },
                { start: 500, density: 0.10963535377927967 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4404379388313692 },
                { start: 800, end: 1800, density: 0.4153278590979407 },
                { start: 1800, density: 0.14423420207069004 },
              ],
              percentiles: { p75: 1386 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6086436011013996 },
                { start: 1800, end: 3000, density: 0.22159703100682343 },
                { start: 3000, density: 0.16975936789177706 },
              ],
              percentiles: { p75: 2444 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461165048543689 },
                { start: 100, end: 300, density: 0.03300970873786408 },
                { start: 300, density: 0.020873786407766885 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7033928785517325 },
                { start: 2500, end: 4000, density: 0.1678455820645007 },
                { start: 4000, density: 0.12876153938376667 },
              ],
              percentiles: { p75: 2816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9403587976713792,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021860520375430674,
                },
                { start: "0.25", density: 0.037780681953189975 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2444,
        lcp: 2816,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820185369,
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
                { start: 0, end: 100, density: 0.9511902380476094 },
                { start: 100, end: 300, density: 0.023804760952190435 },
                { start: 300, density: 0.02500500100020014 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9076815363072613 },
                { start: 2500, end: 4000, density: 0.06851370274054815 },
                { start: 4000, density: 0.023804760952190557 },
              ],
              percentiles: { p75: 1775 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8143999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1291 },
                { start: "0.25", density: 0.05649999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6087391260873916 },
                { start: 200, end: 500, density: 0.2875712428757125 },
                { start: 500, density: 0.10368963103689591 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7619523904780956 },
                { start: 800, end: 1800, density: 0.20954190838167636 },
                { start: 1800, density: 0.028505701140227987 },
              ],
              percentiles: { p75: 808 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8896000000000001 },
                { start: 1800, end: 3000, density: 0.0817 },
                { start: 3000, density: 0.028700000000000062 },
              ],
              percentiles: { p75: 1316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1316,
        lcp: 1775,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654820186603,
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
                  density: 0.8721744348869773,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07671534306861373,
                },
                { start: "0.25", density: 0.051110222044408855 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7851000000000001 },
                { start: 200, end: 500, density: 0.12560000000000007 },
                { start: 500, density: 0.08929999999999991 },
              ],
              percentiles: { p75: 173 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2914542728635683 },
                { start: 800, end: 1800, density: 0.4884557721139433 },
                { start: 1800, density: 0.22008995502248851 },
              ],
              percentiles: { p75: 1694 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.052710542108421625 },
                { start: 1800, end: 3000, density: 0.42028405681136183 },
                { start: 3000, density: 0.5270054010802165 },
              ],
              percentiles: { p75: 4661 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22170565886822732 },
                { start: 2500, end: 4000, density: 0.3906718656268765 },
                { start: 4000, density: 0.3876224755048962 },
              ],
              percentiles: { p75: 5199 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4661, lcp: 5199, cls: "0.05" },
      timestamp: 1654820187449,
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
                { start: 0, end: 1800, density: 0.48992834933080975 },
                { start: 1800, end: 3000, density: 0.3237799107746383 },
                { start: 3000, density: 0.18629173989455186 },
              ],
              percentiles: { p75: 2695 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568031518221471 },
                { start: 100, end: 300, density: 0.032503165892781766 },
                { start: 300, density: 0.010693682285071058 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6304025851622457 },
                { start: 2500, end: 4000, density: 0.25030294870068664 },
                { start: 4000, density: 0.1192944661370678 },
              ],
              percentiles: { p75: 2979 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9322124366159595,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02054977315185482,
                },
                { start: "0.25", density: 0.047237790232185765 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.499581706636922 },
                { start: 200, end: 500, density: 0.40253764640267753 },
                { start: 500, density: 0.09788064696040054 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2767362027990492 },
                { start: 800, end: 1800, density: 0.5397412199630313 },
                { start: 1800, density: 0.18352257723791945 },
              ],
              percentiles: { p75: 1592 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2695,
        lcp: 2979,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820188077,
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
                  density: 0.8427685537107422,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1150230046009202,
                },
                { start: "0.25", density: 0.042208441688337636 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5059999999999998 },
                { start: 200, end: 500, density: 0.34099999999999986 },
                { start: 500, density: 0.1530000000000004 },
              ],
              percentiles: { p75: 352 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.638372325534893 },
                { start: 800, end: 1800, density: 0.27304539092181557 },
                { start: 1800, density: 0.08858228354329133 },
              ],
              percentiles: { p75: 1013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7476252374762521 },
                { start: 1800, end: 3000, density: 0.15198480151984792 },
                { start: 3000, density: 0.10038996100389994 },
              ],
              percentiles: { p75: 1847 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463107378524296 },
                { start: 100, end: 300, density: 0.03559288142371526 },
                { start: 300, density: 0.018096380723855214 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8014102820564107 },
                { start: 2500, end: 4000, density: 0.12397479495899172 },
                { start: 4000, density: 0.07461492298459751 },
              ],
              percentiles: { p75: 2245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1847,
        lcp: 2245,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1654820189812,
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
                { start: 0, end: 200, density: 0.48364836483648355 },
                { start: 200, end: 500, density: 0.2931293129312931 },
                { start: 500, density: 0.2232223222322232 },
              ],
              percentiles: { p75: 447 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4151830366073211 },
                { start: 800, end: 1800, density: 0.3955791158231643 },
                { start: 1800, density: 0.1892378475695146 },
              ],
              percentiles: { p75: 1594 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5131539461838538 },
                { start: 1800, end: 3000, density: 0.23937181154346243 },
                { start: 3000, density: 0.24747424227268372 },
              ],
              percentiles: { p75: 3026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.913482696539308 },
                { start: 100, end: 300, density: 0.057411482296459294 },
                { start: 300, density: 0.029105821164232795 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5625812906453219 },
                { start: 2500, end: 4000, density: 0.24722361180590274 },
                { start: 4000, density: 0.1901950975487754 },
              ],
              percentiles: { p75: 3548 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8472999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1089 },
                { start: "0.25", density: 0.04379999999999999 },
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
        fcp: 3026,
        lcp: 3548,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654820191080,
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
                  density: 0.9429611650485438,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03883495145631068,
                },
                { start: "0.25", density: 0.01820388349514564 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4270845939731334 },
                { start: 200, end: 500, density: 0.4339828149582477 },
                { start: 500, density: 0.13893259106861883 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6285400390624999 },
                { start: 800, end: 1800, density: 0.34045410156249983 },
                { start: 1800, density: 0.03100585937500018 },
              ],
              percentiles: { p75: 944 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8842298288508555 },
                { start: 1800, end: 3000, density: 0.09193154034229825 },
                { start: 3000, density: 0.02383863080684623 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9560117302052785 },
                { start: 100, end: 300, density: 0.029936461388074292 },
                { start: 300, density: 0.014051808406647198 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9118722574353975 },
                { start: 2500, end: 4000, density: 0.06874695270599704 },
                { start: 4000, density: 0.019380789858605387 },
              ],
              percentiles: { p75: 1776 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1402,
        lcp: 1776,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654820192201,
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
                { start: 0, end: 200, density: 0.5981401859814024 },
                { start: 200, end: 500, density: 0.31066893310668964 },
                { start: 500, density: 0.091190880911908 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6459645964596461 },
                { start: 800, end: 1800, density: 0.3181318131813182 },
                { start: 1800, density: 0.035903590359035696 },
              ],
              percentiles: { p75: 940 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.870535267633817 },
                { start: 1800, end: 3000, density: 0.10015007503751877 },
                { start: 3000, density: 0.029314657328664225 },
              ],
              percentiles: { p75: 1408 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654138344662135 },
                { start: 100, end: 300, density: 0.023890443822471012 },
                { start: 300, density: 0.010695721711315463 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8893278655731147 },
                { start: 2500, end: 4000, density: 0.08686737347469493 },
                { start: 4000, density: 0.023804760952190362 },
              ],
              percentiles: { p75: 1888 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9433999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043500000000000004,
                },
                { start: "0.25", density: 0.013100000000000011 },
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
        fcp: 1408,
        lcp: 1888,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654820195035,
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
                { start: 0, end: 2500, density: 0.5882000000000001 },
                { start: 2500, end: 4000, density: 0.2337000000000001 },
                { start: 4000, density: 0.17809999999999984 },
              ],
              percentiles: { p75: 3462 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8270654130826165,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11552310462092416,
                },
                { start: "0.25", density: 0.0574114822964593 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6209379062093794 },
                { start: 200, end: 500, density: 0.28057194280571957 },
                { start: 500, density: 0.09849015098490098 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29494101179764165 },
                { start: 800, end: 1800, density: 0.4522095580883842 },
                { start: 1800, density: 0.2528494301139742 },
              ],
              percentiles: { p75: 1868 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5313531353135316 },
                { start: 1800, end: 3000, density: 0.24832483248324833 },
                { start: 3000, density: 0.22032203220322003 },
              ],
              percentiles: { p75: 2891 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9486794717887155 },
                { start: 100, end: 300, density: 0.03881552621048419 },
                { start: 300, density: 0.0125050020008003 },
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
        fcp: 2891,
        lcp: 3462,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1654820199921,
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
                { start: 0, end: 2500, density: 0.6639008297510741 },
                { start: 2500, end: 4000, density: 0.2161351594521643 },
                { start: 4000, density: 0.11996401079676162 },
              ],
              percentiles: { p75: 2913 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.906009399060094,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042795720427957214,
                },
                { start: "0.25", density: 0.05119488051194879 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6095609560956103 },
                { start: 200, end: 500, density: 0.31213121312131253 },
                { start: 500, density: 0.0783078307830771 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31599999999999995 },
                { start: 800, end: 1800, density: 0.5237999999999999 },
                { start: 1800, density: 0.16020000000000018 },
              ],
              percentiles: { p75: 1503 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5490196078431363 },
                { start: 1800, end: 3000, density: 0.28811524609843886 },
                { start: 3000, density: 0.1628651460584248 },
              ],
              percentiles: { p75: 2516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678032196780322 },
                { start: 100, end: 300, density: 0.024197580241975797 },
                { start: 300, density: 0.007999200079992002 },
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
        fcp: 2516,
        lcp: 2913,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654820201870,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954 },
                { start: 100, end: 300, density: 0.031900000000000005 },
                { start: 300, density: 0.01410000000000001 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6109721944388868 },
                { start: 2500, end: 4000, density: 0.19858971794358846 },
                { start: 4000, density: 0.19043808761752476 },
              ],
              percentiles: { p75: 3551 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9189 },
                { start: "0.10", end: "0.25", density: 0.0532 },
                { start: "0.25", density: 0.027900000000000008 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6180381961803817 },
                { start: 200, end: 500, density: 0.27027297270272965 },
                { start: 500, density: 0.11168883111688864 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47230553889222093 },
                { start: 800, end: 1800, density: 0.288842231553689 },
                { start: 1800, density: 0.23885222955409013 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5894410558944115 },
                { start: 1800, end: 3000, density: 0.1483851614838519 },
                { start: 3000, density: 0.2621737826217366 },
              ],
              percentiles: { p75: 3221 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3221,
        lcp: 3551,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654820202989,
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
                  density: 0.8586245772266066,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0976324689966178,
                },
                { start: "0.25", density: 0.04374295377677563 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4276445371335882 },
                { start: 200, end: 500, density: 0.32557061754142047 },
                { start: 500, density: 0.24678484532499143 },
              ],
              percentiles: { p75: 491 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3924549549549545 },
                { start: 800, end: 1800, density: 0.402815315315315 },
                { start: 1800, density: 0.2047297297297304 },
              ],
              percentiles: { p75: 1656 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48372462288760265 },
                { start: 1800, end: 3000, density: 0.2494045593739363 },
                { start: 3000, density: 0.266870817738461 },
              ],
              percentiles: { p75: 3143 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9024849841008128 },
                { start: 100, end: 300, density: 0.0646566953244612 },
                { start: 300, density: 0.03285832057472609 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5405343945423532 },
                { start: 2500, end: 4000, density: 0.26026151222285376 },
                { start: 4000, density: 0.19920409323479307 },
              ],
              percentiles: { p75: 3628 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3143,
        lcp: 3628,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1654820204797,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6390878043406416 },
                { start: 200, end: 500, density: 0.28004847416547346 },
                { start: 500, density: 0.080863721493885 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44966442953020125 },
                { start: 800, end: 1800, density: 0.4161073825503354 },
                { start: 1800, density: 0.1342281879194633 },
              ],
              percentiles: { p75: 1364 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.683921912700154 },
                { start: 1800, end: 3000, density: 0.19543759596402732 },
                { start: 3000, density: 0.12064049133581863 },
              ],
              percentiles: { p75: 2082 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571285028469353 },
                { start: 100, end: 300, density: 0.03382829072234007 },
                { start: 300, density: 0.009043206430724567 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7591353012180396 },
                { start: 2500, end: 4000, density: 0.1466037528805003 },
                { start: 4000, density: 0.09426094590146002 },
              ],
              percentiles: { p75: 2466 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8525844170036062,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10053546060539832,
                },
                { start: "0.25", density: 0.046880122390995524 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2082,
        lcp: 2466,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654820206651,
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
                { start: 0, end: 100, density: 0.9536907381476295 },
                { start: 100, end: 300, density: 0.02700540108021604 },
                { start: 300, density: 0.019303860772154492 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6884000000000011 },
                { start: 2500, end: 4000, density: 0.17840000000000034 },
                { start: 4000, density: 0.1331999999999986 },
              ],
              percentiles: { p75: 2923 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8329000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1129 },
                { start: "0.25", density: 0.05419999999999997 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7165283471652838 },
                { start: 200, end: 500, density: 0.21547845215478456 },
                { start: 500, density: 0.06799320067993168 },
              ],
              percentiles: { p75: 215 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.363927214557088 },
                { start: 800, end: 1800, density: 0.4155168966206753 },
                { start: 1800, density: 0.22055588882223662 },
              ],
              percentiles: { p75: 1672 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6220866259877964 },
                { start: 1800, end: 3000, density: 0.20896268880664204 },
                { start: 3000, density: 0.16895068520556164 },
              ],
              percentiles: { p75: 2445 },
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
        lcp: 2923,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1654820208065,
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
                { start: 0, end: 1800, density: 0.6054394560543946 },
                { start: 1800, end: 3000, density: 0.2562743725627437 },
                { start: 3000, density: 0.13828617138286176 },
              ],
              percentiles: { p75: 2364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9709912973892169 },
                { start: 100, end: 300, density: 0.02220666199859958 },
                { start: 300, density: 0.006802040612183648 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6998100379924014 },
                { start: 2500, end: 4000, density: 0.19341131773645265 },
                { start: 4000, density: 0.10677864427114607 },
              ],
              percentiles: { p75: 2778 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9186000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0489 },
                { start: "0.25", density: 0.03250000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6437356264373564 },
                { start: 200, end: 500, density: 0.29547045295470453 },
                { start: 500, density: 0.06079392060793917 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43875612438756106 },
                { start: 800, end: 1800, density: 0.46425357464253547 },
                { start: 1800, density: 0.09699030096990346 },
              ],
              percentiles: { p75: 1304 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2364,
        lcp: 2778,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654820208881,
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
                  density: 0.8883888388838884,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06330633063306333,
                },
                { start: "0.25", density: 0.04830483048304831 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6110611061106113 },
                { start: 200, end: 500, density: 0.29202920292029216 },
                { start: 500, density: 0.09690969096909663 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45524552455245565 },
                { start: 800, end: 1800, density: 0.412541254125413 },
                { start: 1800, density: 0.13221322132213137 },
              ],
              percentiles: { p75: 1339 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.633716858429213 },
                { start: 1800, end: 3000, density: 0.21200600300150022 },
                { start: 3000, density: 0.15427713856928674 },
              ],
              percentiles: { p75: 2332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9538092381523695 },
                { start: 100, end: 300, density: 0.028394321135772848 },
                { start: 300, density: 0.01779644071185753 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7122924584916983 },
                { start: 2500, end: 4000, density: 0.16208241648329666 },
                { start: 4000, density: 0.1256251250250051 },
              ],
              percentiles: { p75: 2788 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2332,
        lcp: 2788,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654820209890,
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
                { start: 0, end: 800, density: 0.42742822846854023 },
                { start: 800, end: 1800, density: 0.44773432029608845 },
                { start: 1800, density: 0.12483745123537121 },
              ],
              percentiles: { p75: 1331 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.628599999999999 },
                { start: 1800, end: 3000, density: 0.24229999999999957 },
                { start: 3000, density: 0.12910000000000132 },
              ],
              percentiles: { p75: 2261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644035596440356 },
                { start: 100, end: 300, density: 0.03129687031296871 },
                { start: 300, density: 0.0042995700429957 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7375237523752376 },
                { start: 2500, end: 4000, density: 0.157065706570657 },
                { start: 4000, density: 0.10541054105410542 },
              ],
              percentiles: { p75: 2628 },
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
                  density: 0.0381961803819618,
                },
                { start: "0.25", density: 0.028597140285971382 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7168 },
                { start: 200, end: 500, density: 0.23590000000000008 },
                { start: 500, density: 0.047299999999999946 },
              ],
              percentiles: { p75: 218 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2261,
        lcp: 2628,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820210790,
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
                { start: 0, end: 1800, density: 0.7078707870787074 },
                { start: 1800, end: 3000, density: 0.18541854185418527 },
                { start: 3000, density: 0.1067106710671074 },
              ],
              percentiles: { p75: 1965 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657034296570344 },
                { start: 100, end: 300, density: 0.025997400259974008 },
                { start: 300, density: 0.008299170082991724 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7694730526947297 },
                { start: 2500, end: 4000, density: 0.14603539646035388 },
                { start: 4000, density: 0.08449155084491662 },
              ],
              percentiles: { p75: 2423 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9318 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036599999999999994,
                },
                { start: "0.25", density: 0.031599999999999975 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5978793638091429 },
                { start: 200, end: 500, density: 0.2826848054416325 },
                { start: 500, density: 0.11943583074922477 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5033006601320265 },
                { start: 800, end: 1800, density: 0.3946789357871575 },
                { start: 1800, density: 0.10202040408081617 },
              ],
              percentiles: { p75: 1170 },
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
        lcp: 2423,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654820211584,
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
                { start: 0, end: 200, density: 0.6087173847845649 },
                { start: 200, end: 500, density: 0.2436269119264222 },
                { start: 500, density: 0.14765570328901292 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4222422242224215 },
                { start: 800, end: 1800, density: 0.42934293429342874 },
                { start: 1800, density: 0.1484148414841497 },
              ],
              percentiles: { p75: 1421 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6434999999999998 },
                { start: 1800, end: 3000, density: 0.21279999999999982 },
                { start: 3000, density: 0.14370000000000038 },
              ],
              percentiles: { p75: 2266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9132347061175531 },
                { start: 100, end: 300, density: 0.03758496601359457 },
                { start: 300, density: 0.0491803278688523 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.709841968393678 },
                { start: 2500, end: 4000, density: 0.1666333266653329 },
                { start: 4000, density: 0.12352470494098922 },
              ],
              percentiles: { p75: 2758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8184818481848184,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1009100910091009,
                },
                { start: "0.25", density: 0.08060806080608074 },
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
        fcp: 2266,
        lcp: 2758,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1654820212372,
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
                  density: 0.9315931593159316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04320432043204319,
                },
                { start: "0.25", density: 0.02520252025202519 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.643 },
                { start: 200, end: 500, density: 0.29569999999999996 },
                { start: 500, density: 0.061299999999999924 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4437225109956017 },
                { start: 800, end: 1800, density: 0.47570971611355456 },
                { start: 1800, density: 0.0805677728908436 },
              ],
              percentiles: { p75: 1126 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6811043312993904 },
                { start: 1800, end: 3000, density: 0.2324697409222769 },
                { start: 3000, density: 0.08642592777833272 },
              ],
              percentiles: { p75: 1985 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981001899810019 },
                { start: 100, end: 300, density: 0.011998800119988001 },
                { start: 300, density: 0.006999300069993002 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.77605 },
                { start: 2500, end: 4000, density: 0.14475000000000005 },
                { start: 4000, density: 0.0791999999999999 },
              ],
              percentiles: { p75: 2375 },
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
        lcp: 2375,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654820213200,
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
                { start: "0.00", end: "0.10", density: 0.8499 },
                { start: "0.10", end: "0.25", density: 0.1073 },
                { start: "0.25", density: 0.0428 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7327999999999999 },
                { start: 200, end: 500, density: 0.22679999999999997 },
                { start: 500, density: 0.04040000000000006 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32449999999999984 },
                { start: 800, end: 1800, density: 0.48059999999999964 },
                { start: 1800, density: 0.19490000000000055 },
              ],
              percentiles: { p75: 1615 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6471999999999993 },
                { start: 1800, end: 3000, density: 0.2201999999999998 },
                { start: 3000, density: 0.13260000000000086 },
              ],
              percentiles: { p75: 2304 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803019698030198 },
                { start: 100, end: 300, density: 0.0025997400259974 },
                { start: 300, density: 0.017098290170982938 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7234170251075323 },
                { start: 2500, end: 4000, density: 0.186255876763029 },
                { start: 4000, density: 0.0903270981294387 },
              ],
              percentiles: { p75: 2741 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2304,
        lcp: 2741,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1654820214163,
    },
  ],
};
