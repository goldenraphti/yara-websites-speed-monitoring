export const audit8 = {
  date: "2022-03-29",
  legacyAudit: true,
  legacyAuditType: 2,
  legacyAuditId: "2022-03-29-legacy-audit",
  audits: [
    {
      url: "https://www.yara.ru/",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8964000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08090000000000001,
                },
                { start: "0.25", density: 0.022700000000000005 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5704570457045699 },
                { start: 1800, end: 3000, density: 0.26232623262326205 },
                { start: 3000, density: 0.16721672167216695 },
              ],
              percentiles: { p75: 2607 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551910382076403 },
                { start: 100, end: 300, density: 0.029905981196239207 },
                { start: 300, density: 0.01490298059611921 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6643328665733154 },
                { start: 2500, end: 4000, density: 0.22844568913782792 },
                { start: 4000, density: 0.10722144428885769 },
              ],
              percentiles: { p75: 2953 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2607,
        lcp: 2953,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648571258521,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7105000000000007 },
                { start: 2500, end: 4000, density: 0.16940000000000022 },
                { start: 4000, density: 0.1201000000000001 },
              ],
              percentiles: { p75: 2818 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7585999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17489999999999992,
                },
                { start: "0.25", density: 0.06649999999999992 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.700429957004298 },
                { start: 1800, end: 3000, density: 0.1829817018298166 },
                { start: 3000, density: 0.1165883411658841 },
              ],
              percentiles: { p75: 2100 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686812087252331 },
                { start: 100, end: 300, density: 0.01711026615969578 },
                { start: 300, density: 0.014208525115069015 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2100,
        lcp: 2818,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648571258726,
    },
    {
      url: "https://www.yara.co.uk/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45985401459853953 },
                { start: 1800, end: 3000, density: 0.29887011298870075 },
                { start: 3000, density: 0.24127587241276074 },
              ],
              percentiles: { p75: 2977 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9295281887245054 },
                { start: 100, end: 300, density: 0.03498600559776071 },
                { start: 300, density: 0.035485805677728625 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5427914417116696 },
                { start: 2500, end: 4000, density: 0.2783443311337793 },
                { start: 4000, density: 0.1788642271545761 },
              ],
              percentiles: { p75: 3481 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.719228077192281,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17888211178882116,
                },
                { start: "0.25", density: 0.1018898110188982 },
              ],
              percentiles: { p75: "0.12" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2977,
        lcp: 3481,
        cls: "0.12",
        fid: 12,
      },
      timestamp: 1648571258770,
    },
    {
      url: "https://www.yara.my/",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8169316931693242 },
                { start: 2500, end: 4000, density: 0.11096109610961194 },
                { start: 4000, density: 0.07210721072107354 },
              ],
              percentiles: { p75: 2154 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7920792079207913,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13091309130913079,
                },
                { start: "0.25", density: 0.07700770077007693 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7648000000000096 },
                { start: 1800, end: 3000, density: 0.14720000000000186 },
                { start: 3000, density: 0.0880000000000015 },
              ],
              percentiles: { p75: 1770 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784000000000007 },
                { start: 100, end: 300, density: 0.017600000000000015 },
                { start: 300, density: 0.0040000000000000036 },
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
        fcp: 1770,
        lcp: 2154,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1648571258827,
    },
    {
      url: "https://www.yara.es/",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7500750075007434 },
                { start: 1800, end: 3000, density: 0.1651165116511636 },
                { start: 3000, density: 0.08480848084808444 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548090381923557 },
                { start: 100, end: 300, density: 0.028694261147770274 },
                { start: 300, density: 0.016496700659868052 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7989603119064536 },
                { start: 2500, end: 4000, density: 0.13475957212836578 },
                { start: 4000, density: 0.0662801159652137 },
              ],
              percentiles: { p75: 2267 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8081383723255351,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11997600479904022,
                },
                { start: "0.25", density: 0.07188562287542488 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1825,
        lcp: 2267,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648571258871,
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8931000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09320000000000002,
                },
                { start: "0.25", density: 0.013700000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.769238466926847 },
                { start: 1800, end: 3000, density: 0.16751726208345807 },
                { start: 3000, density: 0.06324427098969329 },
              ],
              percentiles: { p75: 1742 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638963896389592 },
                { start: 100, end: 300, density: 0.023502350235023388 },
                { start: 300, density: 0.01260126012601258 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7930344275420341 },
                { start: 2500, end: 4000, density: 0.14531625300240197 },
                { start: 4000, density: 0.0616493194555645 },
              ],
              percentiles: { p75: 2290 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1742,
        lcp: 2290,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1648571258914,
    },
    {
      url: "https://www.yara.bo/",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9360999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03899999999999999,
                },
                { start: "0.25", density: 0.024900000000000002 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3593718743748768 },
                { start: 1800, end: 3000, density: 0.34066813362672704 },
                { start: 3000, density: 0.29995999199839407 },
              ],
              percentiles: { p75: 3269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757 },
                { start: 100, end: 300, density: 0.021800000000000007 },
                { start: 300, density: 0.0025000000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4682563487302624 },
                { start: 2500, end: 4000, density: 0.32878424315137567 },
                { start: 4000, density: 0.20295940811838356 },
              ],
              percentiles: { p75: 3776 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3269,
        lcp: 3776,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1648571258955,
    },
    {
      url: "https://www.yara.pl/",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7550244975502443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.205779422057794,
                },
                { start: "0.25", density: 0.03919608039196082 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7658702389283257 },
                { start: 1800, end: 3000, density: 0.17504748575427467 },
                { start: 3000, density: 0.059082275317405515 },
              ],
              percentiles: { p75: 1756 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554866459937955 },
                { start: 100, end: 300, density: 0.02600780234070214 },
                { start: 300, density: 0.018505551665499522 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.805630563056304 },
                { start: 2500, end: 4000, density: 0.14416441644164382 },
                { start: 4000, density: 0.05020502050205045 },
              ],
              percentiles: { p75: 2263 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1756,
        lcp: 2263,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1648571259001,
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7585999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17489999999999992,
                },
                { start: "0.25", density: 0.06649999999999992 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.700429957004298 },
                { start: 1800, end: 3000, density: 0.1829817018298166 },
                { start: 3000, density: 0.1165883411658841 },
              ],
              percentiles: { p75: 2100 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686812087252331 },
                { start: 100, end: 300, density: 0.01711026615969578 },
                { start: 300, density: 0.014208525115069015 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7105000000000007 },
                { start: 2500, end: 4000, density: 0.16940000000000022 },
                { start: 4000, density: 0.1201000000000001 },
              ],
              percentiles: { p75: 2818 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2100,
        lcp: 2818,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648571259044,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6670000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15880000000000002,
                },
                { start: "0.25", density: 0.1742 },
              ],
              percentiles: { p75: "0.19" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6086174147755673 },
                { start: 1800, end: 3000, density: 0.15215435369389185 },
                { start: 3000, density: 0.23922823153054235 },
              ],
              percentiles: { p75: 2897 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6353135313531378 },
                { start: 2500, end: 4000, density: 0.17916791679167998 },
                { start: 4000, density: 0.18551855185518684 },
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
      extractedResults: { fcp: 2897, lcp: 3376, cls: "0.19" },
      timestamp: 1648571259091,
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6206241248249719 },
                { start: 1800, end: 3000, density: 0.23944788957791813 },
                { start: 3000, density: 0.13992798559712183 },
              ],
              percentiles: { p75: 2293 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482000000000029 },
                { start: 100, end: 300, density: 0.04020000000000012 },
                { start: 300, density: 0.011600000000000018 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959000000000013 },
                { start: 2500, end: 4000, density: 0.17350000000000032 },
                { start: 4000, density: 0.13059999999999922 },
              ],
              percentiles: { p75: 2901 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9066906690669065,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.067006700670067,
                },
                { start: "0.25", density: 0.02630263026302627 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2293,
        lcp: 2901,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648571259133,
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8698630136986324 },
                { start: 2500, end: 4000, density: 0.10073992600739955 },
                { start: 4000, density: 0.029397060293970746 },
              ],
              percentiles: { p75: 2001 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.753 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16970000000000002,
                },
                { start: "0.25", density: 0.07730000000000005 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8702389283215041 },
                { start: 1800, end: 3000, density: 0.08837348795361397 },
                { start: 3000, density: 0.0413875837248825 },
              ],
              percentiles: { p75: 1390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688968896889678 },
                { start: 100, end: 300, density: 0.011001100110010988 },
                { start: 300, density: 0.020102010201020128 },
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
        fcp: 1390,
        lcp: 2001,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648571259182,
    },
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9270000000000003 },
                { start: 100, end: 300, density: 0.03260000000000001 },
                { start: 300, density: 0.040400000000000026 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9059594040595936 },
                { start: 2500, end: 4000, density: 0.06884311568843111 },
                { start: 4000, density: 0.02519748025197485 },
              ],
              percentiles: { p75: 1685 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.871012898710129,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09349065093490651,
                },
                { start: "0.25", density: 0.0354964503549645 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.913091309130912 },
                { start: 1800, end: 3000, density: 0.06610661066106602 },
                { start: 3000, density: 0.020802080208020896 },
              ],
              percentiles: { p75: 1195 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1195,
        lcp: 1685,
        cls: "0.03",
        fid: 14,
      },
      timestamp: 1648571259228,
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8937106289371056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07669233076692326,
                },
                { start: "0.25", density: 0.029597040295970396 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5480451954804509 },
                { start: 1800, end: 3000, density: 0.27887211278872054 },
                { start: 3000, density: 0.17308269173082888 },
              ],
              percentiles: { p75: 2591 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675064987002582 },
                { start: 100, end: 300, density: 0.027294541091781588 },
                { start: 300, density: 0.0051989602079583865 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6443866319791961 },
                { start: 2500, end: 4000, density: 0.22433460076045927 },
                { start: 4000, density: 0.13127876726035842 },
              ],
              percentiles: { p75: 3041 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2591,
        lcp: 3041,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648571259275,
    },
    {
      url: "https://www.yara.se/",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9193838767753636 },
                { start: 2500, end: 4000, density: 0.06501300260052073 },
                { start: 4000, density: 0.015603120624125054 },
              ],
              percentiles: { p75: 1694 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.821882188218822,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1415141514151415,
                },
                { start: "0.25", density: 0.03660366036603663 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9255999999999984 },
                { start: 1800, end: 3000, density: 0.06069999999999988 },
                { start: 3000, density: 0.013700000000000061 },
              ],
              percentiles: { p75: 1238 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9742051589682081 },
                { start: 100, end: 300, density: 0.013297340531893647 },
                { start: 300, density: 0.012497500499900048 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1238,
        lcp: 1694,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1648571259343,
    },
    {
      url: "https://www.yara.com.pe/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.82981701829817 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12308769123087687,
                },
                { start: "0.25", density: 0.04709529047095292 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5513000000000026 },
                { start: 1800, end: 3000, density: 0.2759000000000013 },
                { start: 3000, density: 0.1728000000000005 },
              ],
              percentiles: { p75: 2585 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9744999999999984 },
                { start: 100, end: 300, density: 0.02059999999999997 },
                { start: 300, density: 0.00489999999999998 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6516196760647911 },
                { start: 2500, end: 4000, density: 0.2060087982403532 },
                { start: 4000, density: 0.14237152569486383 },
              ],
              percentiles: { p75: 3056 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2585,
        lcp: 3056,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1648571259401,
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8635409377186894 },
                { start: 1800, end: 3000, density: 0.09527141857442825 },
                { start: 3000, density: 0.04118764370688805 },
              ],
              percentiles: { p75: 1400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9614884465339639 },
                { start: 100, end: 300, density: 0.02350705211563478 },
                { start: 300, density: 0.015004501350405125 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8597859785978668 },
                { start: 2500, end: 4000, density: 0.09590959095909675 },
                { start: 4000, density: 0.0443044304430448 },
              ],
              percentiles: { p75: 2042 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7883788378837882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16251625162516248,
                },
                { start: "0.25", density: 0.049104910491049085 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1400,
        lcp: 2042,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1648571259480,
    },
    {
      url: "https://www.yara.ua/",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8733000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10370000000000003,
                },
                { start: "0.25", density: 0.02300000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7388261173882664 },
                { start: 1800, end: 3000, density: 0.1762823717628249 },
                { start: 3000, density: 0.0848915108489167 },
              ],
              percentiles: { p75: 1858 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9660999999999963 },
                { start: 100, end: 300, density: 0.018199999999999928 },
                { start: 300, density: 0.01570000000000001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.793650000000002 },
                { start: 2500, end: 4000, density: 0.14035000000000025 },
                { start: 4000, density: 0.06600000000000042 },
              ],
              percentiles: { p75: 2291 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1858,
        lcp: 2291,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648571259552,
    },
    {
      url: "https://www.yara.hu/",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9148999999999993,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06479999999999994,
                },
                { start: "0.25", density: 0.020299999999999978 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.834950485145558 },
                { start: 1800, end: 3000, density: 0.13063919175752947 },
                { start: 3000, density: 0.03441032309692979 },
              ],
              percentiles: { p75: 1590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715999999999988 },
                { start: 100, end: 300, density: 0.018799999999999983 },
                { start: 300, density: 0.009600000000000006 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8676338169084564 },
                { start: 2500, end: 4000, density: 0.10345172586293172 },
                { start: 4000, density: 0.028914457228614233 },
              ],
              percentiles: { p75: 2041 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1590,
        lcp: 2041,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648571259631,
    },
    {
      url: "https://www.yara.com.ar/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8916999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08099999999999999,
                },
                { start: "0.25", density: 0.027299999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49419767907162854 },
                { start: 1800, end: 3000, density: 0.2886154461784713 },
                { start: 3000, density: 0.21718687474990112 },
              ],
              percentiles: { p75: 2828 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9615076984603063 },
                { start: 100, end: 300, density: 0.027294541091781595 },
                { start: 300, density: 0.011197760447910373 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5960807838432334 },
                { start: 2500, end: 4000, density: 0.24325134973005483 },
                { start: 4000, density: 0.1606678664267186 },
              ],
              percentiles: { p75: 3268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2828,
        lcp: 3268,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648571259735,
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8456463061081685 },
                { start: 2500, end: 4000, density: 0.10176946915925238 },
                { start: 4000, density: 0.052584224732580176 },
              ],
              percentiles: { p75: 1993 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9324 },
                { start: "0.10", end: "0.25", density: 0.0514 },
                { start: "0.25", density: 0.016200000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8205461638491568 },
                { start: 1800, end: 3000, density: 0.1169350805241575 },
                { start: 3000, density: 0.06251875562668818 },
              ],
              percentiles: { p75: 1521 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616153538584544 },
                { start: 100, end: 300, density: 0.0216913234706117 },
                { start: 300, density: 0.016693322670931522 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1521,
        lcp: 1993,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648571259797,
    },
    {
      url: "https://www.yara.com.gt/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8979 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07260000000000001,
                },
                { start: "0.25", density: 0.02950000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6748349669934105 },
                { start: 1800, end: 3000, density: 0.2165433086617361 },
                { start: 3000, density: 0.10862172434487073 },
              ],
              percentiles: { p75: 2083 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9679935987197441 },
                { start: 100, end: 300, density: 0.02300460092018404 },
                { start: 300, density: 0.009001800360072016 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7267819654103718 },
                { start: 2500, end: 4000, density: 0.16465060481855326 },
                { start: 4000, density: 0.10856742977106784 },
              ],
              percentiles: { p75: 2670 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2083,
        lcp: 2670,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648571259859,
    },
    {
      url: "https://www.yara.co.th/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8106378724255151,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1541691661667667,
                },
                { start: "0.25", density: 0.035192961407718486 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7368526294741149 },
                { start: 1800, end: 3000, density: 0.19426114777044848 },
                { start: 3000, density: 0.0688862227554513 },
              ],
              percentiles: { p75: 1848 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698939787957589 },
                { start: 100, end: 300, density: 0.02120424084816963 },
                { start: 300, density: 0.0089017803560712 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7672465506898722 },
                { start: 2500, end: 4000, density: 0.1546690661867647 },
                { start: 4000, density: 0.07808438312337805 },
              ],
              percentiles: { p75: 2423 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1848,
        lcp: 2423,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1648571259920,
    },
    {
      url: "https://www.yara.fi/",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7827999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16419999999999993,
                },
                { start: "0.25", density: 0.05299999999999994 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8979897989799017 },
                { start: 1800, end: 3000, density: 0.07740774077407771 },
                { start: 3000, density: 0.024602460246024777 },
              ],
              percentiles: { p75: 1300 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443833149944945 },
                { start: 100, end: 300, density: 0.02900870261078312 },
                { start: 300, density: 0.02660798239471825 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8649135086491355 },
                { start: 2500, end: 4000, density: 0.10818918108189181 },
                { start: 4000, density: 0.02689731026897312 },
              ],
              percentiles: { p75: 1977 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1300,
        lcp: 1977,
        cls: "0.08",
        fid: 14,
      },
      timestamp: 1648571259974,
    },
    {
      url: "https://www.yara.lv/",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9198080191980812,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06509349065093499,
                },
                { start: "0.25", density: 0.015098490150984923 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8342834283428341 },
                { start: 1800, end: 3000, density: 0.1252125212521252 },
                { start: 3000, density: 0.040504050405040494 },
              ],
              percentiles: { p75: 1538 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704999999999998 },
                { start: 100, end: 300, density: 0.025399999999999995 },
                { start: 300, density: 0.004100000000000001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8495349534953491 },
                { start: 2500, end: 4000, density: 0.11726172617261724 },
                { start: 4000, density: 0.03320332033203313 },
              ],
              percentiles: { p75: 2128 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1538,
        lcp: 2128,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648571260033,
    },
    {
      url: "https://www.yara.com.co/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8173634726945386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11672334466893375,
                },
                { start: "0.25", density: 0.06591318263652729 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5985795738721695 },
                { start: 1800, end: 3000, density: 0.2282684805441662 },
                { start: 3000, density: 0.17315194558367647 },
              ],
              percentiles: { p75: 2471 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536046395360481 },
                { start: 100, end: 300, density: 0.029797020297970257 },
                { start: 300, density: 0.016598340165983286 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6799719887955126 },
                { start: 2500, end: 4000, density: 0.17637054821928622 },
                { start: 4000, density: 0.143657462985194 },
              ],
              percentiles: { p75: 2984 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2471,
        lcp: 2984,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648571260090,
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6234246849369782 },
                { start: 1800, end: 3000, density: 0.21684336867373155 },
                { start: 3000, density: 0.159731946389276 },
              ],
              percentiles: { p75: 2429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9253850770154037 },
                { start: 100, end: 300, density: 0.03290658131626327 },
                { start: 300, density: 0.04170834166833359 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6666666666666677 },
                { start: 2500, end: 4000, density: 0.1869626074785045 },
                { start: 4000, density: 0.14637072585483127 },
              ],
              percentiles: { p75: 3085 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8245175482451761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11968803119688039,
                },
                { start: "0.25", density: 0.05579442055794426 },
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
        fcp: 2429,
        lcp: 3085,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648571260161,
    },
    {
      url: "https://www.yara.com.mx/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8411841184118415,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10911091109110914,
                },
                { start: "0.25", density: 0.049704970497049694 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6110833249974965 },
                { start: 1800, end: 3000, density: 0.23246974092227563 },
                { start: 3000, density: 0.15644693408022414 },
              ],
              percentiles: { p75: 2372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603198400799675 },
                { start: 100, end: 300, density: 0.026586706646676873 },
                { start: 300, density: 0.013093453273363424 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6935274109643875 },
                { start: 2500, end: 4000, density: 0.17291916766706725 },
                { start: 4000, density: 0.1335534213685505 },
              ],
              percentiles: { p75: 2868 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2372,
        lcp: 2868,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1648571260227,
    },
    {
      url: "https://www.yara.ro/",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9115000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07570000000000003,
                },
                { start: "0.25", density: 0.012800000000000008 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8157631526305269 },
                { start: 1800, end: 3000, density: 0.14862972594518925 },
                { start: 3000, density: 0.035607121424284904 },
              ],
              percentiles: { p75: 1630 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647070585882823 },
                { start: 100, end: 300, density: 0.016096780643871225 },
                { start: 300, density: 0.01919616076784651 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8322835432913486 },
                { start: 2500, end: 4000, density: 0.13162367526494811 },
                { start: 4000, density: 0.03609278144371197 },
              ],
              percentiles: { p75: 2139 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1630,
        lcp: 2139,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648571260307,
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7449999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.19639999999999994,
                },
                { start: "0.25", density: 0.05859999999999996 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6557000000000004 },
                { start: 1800, end: 3000, density: 0.24250000000000016 },
                { start: 3000, density: 0.10180000000000006 },
              ],
              percentiles: { p75: 2287 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9894000000000001 },
                { start: 100, end: 300, density: 0.0106 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7411241124112401 },
                { start: 2500, end: 4000, density: 0.16926692669266907 },
                { start: 4000, density: 0.08960896089608965 },
              ],
              percentiles: { p75: 2654 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2287,
        lcp: 2654,
        cls: "0.08",
        fid: 11,
      },
      timestamp: 1648571260386,
    },
    {
      url: "https://www.yara.kr/",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9115999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.061999999999999986,
                },
                { start: "0.25", density: 0.026399999999999972 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.786600000000004 },
                { start: 1800, end: 3000, density: 0.16590000000000082 },
                { start: 3000, density: 0.04749999999999992 },
              ],
              percentiles: { p75: 1689 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9879975995199041 },
                { start: 100, end: 300, density: 0.01040208041608322 },
                { start: 300, density: 0.0016003200640128028 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8208179182081782 },
                { start: 2500, end: 4000, density: 0.11968803119688015 },
                { start: 4000, density: 0.059494050594940284 },
              ],
              percentiles: { p75: 2152 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1689, lcp: 2152, cls: "0.02", fid: 8 },
      timestamp: 1648571260456,
    },
    {
      url: "https://www.yara.cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6086174147755673 },
                { start: 1800, end: 3000, density: 0.15215435369389185 },
                { start: 3000, density: 0.23922823153054235 },
              ],
              percentiles: { p75: 2897 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6353135313531378 },
                { start: 2500, end: 4000, density: 0.17916791679167998 },
                { start: 4000, density: 0.18551855185518684 },
              ],
              percentiles: { p75: 3376 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6670000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15880000000000002,
                },
                { start: "0.25", density: 0.1742 },
              ],
              percentiles: { p75: "0.19" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2897, lcp: 3376, cls: "0.19" },
      timestamp: 1648571260536,
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8657731546309267,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10102020404080823,
                },
                { start: "0.25", density: 0.03320664132826566 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7318927571028356 },
                { start: 1800, end: 3000, density: 0.16506602641056303 },
                { start: 3000, density: 0.10304121648659467 },
              ],
              percentiles: { p75: 1913 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978780902812533 },
                { start: 100, end: 300, density: 0.0164147732959664 },
                { start: 300, density: 0.004804323891502344 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7594797398699363 },
                { start: 2500, end: 4000, density: 0.14847423711855956 },
                { start: 4000, density: 0.09204602301150624 },
              ],
              percentiles: { p75: 2469 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1913,
        lcp: 2469,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1648571260614,
    },
    {
      url: "https://www.yara.com.au/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7592 },
                { start: "0.10", end: "0.25", density: 0.1653 },
                { start: "0.25", density: 0.07549999999999998 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.617652938824473 },
                { start: 1800, end: 3000, density: 0.22710915633746603 },
                { start: 3000, density: 0.1552379048380649 },
              ],
              percentiles: { p75: 2444 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9756048790241972 },
                { start: 100, end: 300, density: 0.01679664067186566 },
                { start: 300, density: 0.007598480303939205 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6809819018098201 },
                { start: 2500, end: 4000, density: 0.19633036696330394 },
                { start: 4000, density: 0.12268773122687784 },
              ],
              percentiles: { p75: 2926 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2444,
        lcp: 2926,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648571260690,
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9332000000000008 },
                { start: 2500, end: 4000, density: 0.05070000000000006 },
                { start: 4000, density: 0.016099999999999955 },
              ],
              percentiles: { p75: 1529 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7739773977397737,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17741774177417735,
                },
                { start: "0.25", density: 0.048604860486048534 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9379186244126773 },
                { start: 1800, end: 3000, density: 0.045586324102769214 },
                { start: 3000, density: 0.01649505148455455 },
              ],
              percentiles: { p75: 1078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9824000000000012 },
                { start: 100, end: 300, density: 0.010900000000000012 },
                { start: 300, density: 0.006700000000000006 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1078,
        lcp: 1529,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648571260775,
    },
    {
      url: "https://www.yara.com.gh/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9200920092009203,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05230523052305232,
                },
                { start: "0.25", density: 0.027602760276027608 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6103000000000024 },
                { start: 1800, end: 3000, density: 0.1749000000000007 },
                { start: 3000, density: 0.2148000000000041 },
              ],
              percentiles: { p75: 2700 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2700, cls: "0.00" },
      timestamp: 1648571260841,
    },
    {
      url: "https://www.yara.cl/",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8468306338732253,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09248150369926013,
                },
                { start: "0.25", density: 0.06068786242751452 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4339132173565266 },
                { start: 1800, end: 3000, density: 0.3597280543891205 },
                { start: 3000, density: 0.2063587282543493 },
              ],
              percentiles: { p75: 2846 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9670967096709671 },
                { start: 100, end: 300, density: 0.026302630263026303 },
                { start: 300, density: 0.006600660066006604 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5765270418874313 },
                { start: 2500, end: 4000, density: 0.26462061381585406 },
                { start: 4000, density: 0.15885234429671027 },
              ],
              percentiles: { p75: 3324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2846,
        lcp: 3324,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1648571260915,
    },
    {
      url: "https://www.yara.com.pa/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7322535492901453 },
                { start: 2500, end: 4000, density: 0.16236752649470176 },
                { start: 4000, density: 0.10537892421515757 },
              ],
              percentiles: { p75: 2657 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9115000000000009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06940000000000007,
                },
                { start: "0.25", density: 0.019100000000000023 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6486351364863515 },
                { start: 1800, end: 3000, density: 0.2479752024797522 },
                { start: 3000, density: 0.103389661033896 },
              ],
              percentiles: { p75: 2103 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9754975497549755 },
                { start: 100, end: 300, density: 0.020702070207020706 },
                { start: 300, density: 0.0038003800380038005 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2103,
        lcp: 2657,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648571260984,
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8182999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11880000000000002,
                },
                { start: "0.25", density: 0.0629000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6645335466453369 },
                { start: 1800, end: 3000, density: 0.2112788721127892 },
                { start: 3000, density: 0.12418758124187555 },
              ],
              percentiles: { p75: 2193 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626112166350062 },
                { start: 100, end: 300, density: 0.026492052384284624 },
                { start: 300, density: 0.010896730980705845 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7343499999999904 },
                { start: 2500, end: 4000, density: 0.16694999999999788 },
                { start: 4000, density: 0.0986999999999991 },
              ],
              percentiles: { p75: 2608 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2193,
        lcp: 2608,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648571261055,
    },
    {
      url: "https://www.yara.be/fr-be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8698630136986324 },
                { start: 2500, end: 4000, density: 0.10073992600739955 },
                { start: 4000, density: 0.029397060293970746 },
              ],
              percentiles: { p75: 2001 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.753 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16970000000000002,
                },
                { start: "0.25", density: 0.07730000000000005 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8702389283215041 },
                { start: 1800, end: 3000, density: 0.08837348795361397 },
                { start: 3000, density: 0.0413875837248825 },
              ],
              percentiles: { p75: 1390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688968896889678 },
                { start: 100, end: 300, density: 0.011001100110010988 },
                { start: 300, density: 0.020102010201020128 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1390,
        lcp: 2001,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648571261127,
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8513000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12690000000000007,
                },
                { start: "0.25", density: 0.021800000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8864113588641129 },
                { start: 1800, end: 3000, density: 0.09369063093690623 },
                { start: 3000, density: 0.01989801019898013 },
              ],
              percentiles: { p75: 1415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803941182354721 },
                { start: 100, end: 300, density: 0.012603781134340322 },
                { start: 300, density: 0.00700210063018907 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9047595240475949 },
                { start: 2500, end: 4000, density: 0.07514248575142479 },
                { start: 4000, density: 0.020097990200979878 },
              ],
              percentiles: { p75: 1817 },
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
        lcp: 1817,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648571261197,
    },
    {
      url: "https://www.yara.ie/",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8142000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12400000000000004,
                },
                { start: "0.25", density: 0.061800000000000015 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.517344796561034 },
                { start: 1800, end: 3000, density: 0.3332000399880051 },
                { start: 3000, density: 0.149455163450965 },
              ],
              percentiles: { p75: 2525 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412117576484728 },
                { start: 100, end: 300, density: 0.027294541091781713 },
                { start: 300, density: 0.03149370125974825 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5924092409240898 },
                { start: 2500, end: 4000, density: 0.29207920792079084 },
                { start: 4000, density: 0.1155115511551151 },
              ],
              percentiles: { p75: 3167 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2525,
        lcp: 3167,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648571261270,
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594999999999954 },
                { start: 100, end: 300, density: 0.02659999999999987 },
                { start: 300, density: 0.013899999999999843 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8589794897448755 },
                { start: 2500, end: 4000, density: 0.10540270135067575 },
                { start: 4000, density: 0.03561780890445274 },
              ],
              percentiles: { p75: 1961 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7886788678867888,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13751375137513755,
                },
                { start: "0.25", density: 0.0738073807380739 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8382000000000053 },
                { start: 1800, end: 3000, density: 0.12230000000000078 },
                { start: 3000, density: 0.03950000000000014 },
              ],
              percentiles: { p75: 1466 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1466,
        lcp: 1961,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1648571261343,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9168501100660407 },
                { start: 100, end: 300, density: 0.05343205923554138 },
                { start: 300, density: 0.02971783069841907 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5077015403080617 },
                { start: 2500, end: 4000, density: 0.24574914982996612 },
                { start: 4000, density: 0.24654930986197515 },
              ],
              percentiles: { p75: 4073 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8286 },
                { start: "0.10", end: "0.25", density: 0.1281 },
                { start: "0.25", density: 0.043299999999999984 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4889999999999979 },
                { start: 1800, end: 3000, density: 0.24969999999999887 },
                { start: 3000, density: 0.26129999999998693 },
              ],
              percentiles: { p75: 3167 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3167,
        lcp: 4073,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1648571261419,
    },
    {
      url: "http://www.yara.com.mm/",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8781878187818797,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06960696069606971,
                },
                { start: "0.25", density: 0.05220522052205231 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07098580283943152 },
                { start: 1800, end: 3000, density: 0.44621075784842656 },
                { start: 3000, density: 0.482803439312139 },
              ],
              percentiles: { p75: 4828 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.22858142557232872 },
                { start: 2500, end: 4000, density: 0.3966310106967917 },
                { start: 4000, density: 0.3747875637308797 },
              ],
              percentiles: { p75: 5326 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4828, lcp: 5326, cls: "0.04" },
      timestamp: 1648571261494,
    },
    {
      url: "https://www.yara.fr/",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8218178182181781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13248675132486748,
                },
                { start: "0.25", density: 0.04569543045695425 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7063118935680809 },
                { start: 1800, end: 3000, density: 0.17515254576373177 },
                { start: 3000, density: 0.1185355606682026 },
              ],
              percentiles: { p75: 2024 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9418941894189415 },
                { start: 100, end: 300, density: 0.036103610361036084 },
                { start: 300, density: 0.022002200220021844 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7578484303139542 },
                { start: 2500, end: 4000, density: 0.15046990601879962 },
                { start: 4000, density: 0.09168166366727025 },
              ],
              percentiles: { p75: 2489 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2024,
        lcp: 2489,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648571261571,
    },
    {
      url: "https://www.yara.co.za/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8111999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12599999999999995,
                },
                { start: "0.25", density: 0.06279999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6605339466053368 },
                { start: 1800, end: 3000, density: 0.1950804919508042 },
                { start: 3000, density: 0.14438556144385672 },
              ],
              percentiles: { p75: 2300 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9847954386315896 },
                { start: 100, end: 300, density: 0.0122036610983295 },
                { start: 300, density: 0.0030009002700810247 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6884188418841927 },
                { start: 2500, end: 4000, density: 0.1716671667166727 },
                { start: 4000, density: 0.13991399139913943 },
              ],
              percentiles: { p75: 2917 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2300,
        lcp: 2917,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648571261648,
    },
    {
      url: "https://www.yara.dk/",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.815481548154815,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1589158915891588,
                },
                { start: "0.25", density: 0.02560256025602557 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8723872387238741 },
                { start: 1800, end: 3000, density: 0.10071007100710092 },
                { start: 3000, density: 0.02690269026902706 },
              ],
              percentiles: { p75: 1381 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9713971397139736 },
                { start: 100, end: 300, density: 0.01700170017001704 },
                { start: 300, density: 0.011601160116011583 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8895500000000006 },
                { start: 2500, end: 4000, density: 0.08685000000000007 },
                { start: 4000, density: 0.023600000000000097 },
              ],
              percentiles: { p75: 1843 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1381,
        lcp: 1843,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648571261728,
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5031515757878935 },
                { start: 2500, end: 4000, density: 0.35097548774387155 },
                { start: 4000, density: 0.14587293646823368 },
              ],
              percentiles: { p75: 3428 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.970797079707971,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02220222022202221,
                },
                { start: "0.25", density: 0.007000700070007 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42085251150690545 },
                { start: 1800, end: 3000, density: 0.4242545527316402 },
                { start: 3000, density: 0.1548929357614578 },
              ],
              percentiles: { p75: 2621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9185162967406594 },
                { start: 100, end: 300, density: 0.05878824235153018 },
                { start: 300, density: 0.022695460907818616 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2621,
        lcp: 3428,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648571261808,
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630999999999998 },
                { start: 100, end: 300, density: 0.03129999999999999 },
                { start: 300, density: 0.005599999999999999 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9457608478304339 },
                { start: 2500, end: 4000, density: 0.04234153169366126 },
                { start: 4000, density: 0.011897620475904832 },
              ],
              percentiles: { p75: 1605 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9149085091490855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07569243075692435,
                },
                { start: "0.25", density: 0.009399060093990604 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9501950195019498 },
                { start: 1800, end: 3000, density: 0.04260426042604258 },
                { start: 3000, density: 0.007200720072007196 },
              ],
              percentiles: { p75: 1108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1108,
        lcp: 1605,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1648571261891,
    },
    {
      url: "https://www.yara.it/",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8618999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08539999999999995,
                },
                { start: "0.25", density: 0.05269999999999992 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8464692938587762 },
                { start: 1800, end: 3000, density: 0.10252050410082071 },
                { start: 3000, density: 0.051010202040408195 },
              ],
              percentiles: { p75: 1446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959299999999998 },
                { start: 100, end: 300, density: 0.024199999999999954 },
                { start: 300, density: 0.016500000000000015 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8634363436343644 },
                { start: 2500, end: 4000, density: 0.09355935593559364 },
                { start: 4000, density: 0.04300430043004305 },
              ],
              percentiles: { p75: 1874 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1446,
        lcp: 1874,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648571261976,
    },
    {
      url: "https://www.yara.ci/",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5340000000000048 },
                { start: 1800, end: 3000, density: 0.20650000000000188 },
                { start: 3000, density: 0.2595000000000102 },
              ],
              percentiles: { p75: 3217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571000000000012 },
                { start: 100, end: 300, density: 0.03140000000000003 },
                { start: 300, density: 0.011499999999999979 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5880676135227216 },
                { start: 2500, end: 4000, density: 0.1938887777555567 },
                { start: 4000, density: 0.21804360872175707 },
              ],
              percentiles: { p75: 3838 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9255999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04449999999999998,
                },
                { start: "0.25", density: 0.02989999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3217,
        lcp: 3838,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648571262087,
    },
  ],
};
