export const audit7 = {
  date: "2022-03-28",
  legacyAudit: true,
  legacyAuditType: 2,
  legacyAuditId: "2022-03-28-legacy-audit",
  audits: [
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7068206820682085 },
                { start: 2500, end: 4000, density: 0.17126712671267172 },
                { start: 4000, density: 0.1219121912191224 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7629000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17290000000000003,
                },
                { start: "0.25", density: 0.0642 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6940694069406932 },
                { start: 1800, end: 3000, density: 0.18801880188018777 },
                { start: 3000, density: 0.11791179117911847 },
              ],
              percentiles: { p75: 2115 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659965996599645 },
                { start: 100, end: 300, density: 0.018801880188018774 },
                { start: 300, density: 0.015201520152015176 },
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
        fcp: 2115,
        lcp: 2821,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648491561356,
    },
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8799120087991201,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0885911408859114,
                },
                { start: "0.25", density: 0.0314968503149685 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9120824164832965 },
                { start: 1800, end: 3000, density: 0.0693138627725545 },
                { start: 3000, density: 0.018603720744148886 },
              ],
              percentiles: { p75: 1209 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189918991899197 },
                { start: 100, end: 300, density: 0.03550355035503553 },
                { start: 300, density: 0.04550455045504556 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.902679196241128 },
                { start: 2500, end: 4000, density: 0.07352794161751476 },
                { start: 4000, density: 0.02379286214135766 },
              ],
              percentiles: { p75: 1712 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1209,
        lcp: 1712,
        cls: "0.03",
        fid: 15,
      },
      timestamp: 1648491561515,
    },
    {
      url: "http://www.yara.com.mm/",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.23054999999999773 },
                { start: 2500, end: 4000, density: 0.3960499999999961 },
                { start: 4000, density: 0.37339999999999707 },
              ],
              percentiles: { p75: 5343 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8783121687831201,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07039296070392947,
                },
                { start: "0.25", density: 0.0512948705129487 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07052115634690372 },
                { start: 1800, end: 3000, density: 0.440932279683903 },
                { start: 3000, density: 0.4885465639691878 },
              ],
              percentiles: { p75: 4828 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4828, lcp: 5343, cls: "0.05" },
      timestamp: 1648491561576,
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
                  density: 0.8103000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15440000000000004,
                },
                { start: "0.25", density: 0.0353 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7333266673332739 },
                { start: 1800, end: 3000, density: 0.19688031196880507 },
                { start: 3000, density: 0.06979302069793203 },
              ],
              percentiles: { p75: 1859 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9701999999999984 },
                { start: 100, end: 300, density: 0.021399999999999968 },
                { start: 300, density: 0.008399999999999968 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7632236776322471 },
                { start: 2500, end: 4000, density: 0.15628437156284583 },
                { start: 4000, density: 0.08049195080492212 },
              ],
              percentiles: { p75: 2435 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1859,
        lcp: 2435,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1648491561613,
    },
    {
      url: "https://www.yara.com.gt/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8946105389461051,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07509249075092489,
                },
                { start: "0.25", density: 0.030296970302969704 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6704670467046828 },
                { start: 1800, end: 3000, density: 0.21872187218722278 },
                { start: 3000, density: 0.11081108110811368 },
              ],
              percentiles: { p75: 2095 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672065586882631 },
                { start: 100, end: 300, density: 0.023095380923815256 },
                { start: 300, density: 0.00969806038792243 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7209779022097819 },
                { start: 2500, end: 4000, density: 0.16783321667833292 },
                { start: 4000, density: 0.11118888111188938 },
              ],
              percentiles: { p75: 2682 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2095,
        lcp: 2682,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648491561655,
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
                  density: 0.9383938393839377,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03810381038103808,
                },
                { start: "0.25", density: 0.023502350235023478 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36373637363736483 },
                { start: 1800, end: 3000, density: 0.3355335533553365 },
                { start: 3000, density: 0.3007300730072985 },
              ],
              percentiles: { p75: 3278 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9755975597559756 },
                { start: 100, end: 300, density: 0.0219021902190219 },
                { start: 300, density: 0.0025002500250025004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46795640871826316 },
                { start: 2500, end: 4000, density: 0.32758448310338395 },
                { start: 4000, density: 0.204459108178371 },
              ],
              percentiles: { p75: 3780 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3278,
        lcp: 3780,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1648491561706,
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
                  density: 0.8068000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12630000000000002,
                },
                { start: "0.25", density: 0.06690000000000006 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5221000000000011 },
                { start: 1800, end: 3000, density: 0.3286000000000009 },
                { start: 3000, density: 0.14929999999999943 },
              ],
              percentiles: { p75: 2519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9403119376124758 },
                { start: 100, end: 300, density: 0.02789442111577679 },
                { start: 300, density: 0.03179364127174565 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.598309830983094 },
                { start: 2500, end: 4000, density: 0.2877787778777856 },
                { start: 4000, density: 0.11391139113911299 },
              ],
              percentiles: { p75: 3165 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2519,
        lcp: 3165,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1648491561759,
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7473 },
                { start: "0.10", end: "0.25", density: 0.196 },
                { start: "0.25", density: 0.05670000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6604339566043392 },
                { start: 1800, end: 3000, density: 0.2350764923507648 },
                { start: 3000, density: 0.1044895510448955 },
              ],
              percentiles: { p75: 2278 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.989 },
                { start: 100, end: 300, density: 0.011 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7461999999999986 },
                { start: 2500, end: 4000, density: 0.16279999999999972 },
                { start: 4000, density: 0.09099999999999957 },
              ],
              percentiles: { p75: 2644 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2278,
        lcp: 2644,
        cls: "0.08",
        fid: 11,
      },
      timestamp: 1648491561820,
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6639655862344943 },
                { start: 1800, end: 3000, density: 0.21088435374149678 },
                { start: 3000, density: 0.12515006002400977 },
              ],
              percentiles: { p75: 2193 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626074785042967 },
                { start: 100, end: 300, density: 0.026794641071785582 },
                { start: 300, density: 0.010597880423915207 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7331800459862106 },
                { start: 2500, end: 4000, density: 0.16704988503449106 },
                { start: 4000, density: 0.09977006897930779 },
              ],
              percentiles: { p75: 2602 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8176364727054586,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11847630473905213,
                },
                { start: "0.25", density: 0.06388722255548895 },
              ],
              percentiles: { p75: "0.05" },
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
        lcp: 2602,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648491561877,
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
                  density: 0.8377999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11139999999999994,
                },
                { start: "0.25", density: 0.05079999999999994 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6115611561156118 },
                { start: 1800, end: 3000, density: 0.23172317231723186 },
                { start: 3000, density: 0.15671567156715874 },
              ],
              percentiles: { p75: 2381 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608235058964695 },
                { start: 100, end: 300, density: 0.025784529282430736 },
                { start: 300, density: 0.013391964821107443 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6916458229114633 },
                { start: 2500, end: 4000, density: 0.1752876438219128 },
                { start: 4000, density: 0.13306653326663584 },
              ],
              percentiles: { p75: 2874 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2381,
        lcp: 2874,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1648491561934,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6331133113311352 },
                { start: 2500, end: 4000, density: 0.17916791679167982 },
                { start: 4000, density: 0.18771877187718858 },
              ],
              percentiles: { p75: 3384 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6617661766176615,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15901590159015894,
                },
                { start: "0.25", density: 0.17921792179217907 },
              ],
              percentiles: { p75: "0.20" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6079607960796062 },
                { start: 1800, end: 3000, density: 0.14811481148114772 },
                { start: 3000, density: 0.24392439243924371 },
              ],
              percentiles: { p75: 2955 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728 },
                { start: 100, end: 300, density: 0.027200000000000005 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2955,
        lcp: 3384,
        cls: "0.20",
        fid: 11,
      },
      timestamp: 1648491561982,
    },
    {
      url: "https://www.yara.com.pe/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8282000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1258000000000001,
                },
                { start: "0.25", density: 0.045999999999999985 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5479547954795517 },
                { start: 1800, end: 3000, density: 0.2774277427742793 },
                { start: 3000, density: 0.17461746174617543 },
              ],
              percentiles: { p75: 2596 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9731919575872748 },
                { start: 100, end: 300, density: 0.021706511953586048 },
                { start: 300, density: 0.005101530459137727 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6500800160031995 },
                { start: 2500, end: 4000, density: 0.2069913982796556 },
                { start: 4000, density: 0.1429285857171435 },
              ],
              percentiles: { p75: 3067 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2596,
        lcp: 3067,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1648491562033,
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7710855427713839 },
                { start: 1800, end: 3000, density: 0.16668334167083504 },
                { start: 3000, density: 0.06223111555777901 },
              ],
              percentiles: { p75: 1740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638999999999944 },
                { start: 100, end: 300, density: 0.02349999999999986 },
                { start: 300, density: 0.012599999999999943 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.794117647058824 },
                { start: 2500, end: 4000, density: 0.14655862344937975 },
                { start: 4000, density: 0.05932372949179703 },
              ],
              percentiles: { p75: 2285 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8934 },
                { start: "0.10", end: "0.25", density: 0.0932 },
                { start: "0.25", density: 0.013400000000000004 },
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
        fcp: 1740,
        lcp: 2285,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1648491562092,
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
                  density: 0.8916999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08159999999999995,
                },
                { start: "0.25", density: 0.02669999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48700259948010755 },
                { start: 1800, end: 3000, density: 0.2914417116576706 },
                { start: 3000, density: 0.22155568886223176 },
              ],
              percentiles: { p75: 2858 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622037796220373 },
                { start: 100, end: 300, density: 0.027197280271972792 },
                { start: 300, density: 0.010598940105989373 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5906409359064122 },
                { start: 2500, end: 4000, density: 0.24527547245275597 },
                { start: 4000, density: 0.16408359164083733 },
              ],
              percentiles: { p75: 3301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2858,
        lcp: 3301,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648491562160,
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
                  density: 0.8243999999999992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12959999999999988,
                },
                { start: "0.25", density: 0.045999999999999874 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7050589882023738 },
                { start: 1800, end: 3000, density: 0.17496500699860384 },
                { start: 3000, density: 0.11997600479904404 },
              ],
              percentiles: { p75: 2030 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9425942594259404 },
                { start: 100, end: 300, density: 0.03590359035903582 },
                { start: 300, density: 0.021502150215021252 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7570228931320832 },
                { start: 2500, end: 4000, density: 0.15120463860842198 },
                { start: 4000, density: 0.09177246825952617 },
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
        fcp: 2030,
        lcp: 2489,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648491562211,
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
                  density: 0.9114999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06539999999999999,
                },
                { start: "0.25", density: 0.023099999999999996 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7913582716543345 },
                { start: 1800, end: 3000, density: 0.16133226645329143 },
                { start: 3000, density: 0.04730946189237837 },
              ],
              percentiles: { p75: 1661 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9877987798779877 },
                { start: 100, end: 300, density: 0.0106010601060106 },
                { start: 300, density: 0.0016001600160016002 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8236852629474106 },
                { start: 2500, end: 4000, density: 0.11792641471705655 },
                { start: 4000, density: 0.058388322335532705 },
              ],
              percentiles: { p75: 2136 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1661, lcp: 2136, cls: "0.02", fid: 8 },
      timestamp: 1648491562269,
    },
    {
      url: "https://www.yara.it/",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8643406977906642 },
                { start: 2500, end: 4000, density: 0.09347195841247641 },
                { start: 4000, density: 0.04218734379686111 },
              ],
              percentiles: { p75: 1884 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8568000000000007,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08850000000000006,
                },
                { start: "0.25", density: 0.05470000000000008 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8426314737052665 },
                { start: 1800, end: 3000, density: 0.10657868426314836 },
                { start: 3000, density: 0.05078984203159418 },
              ],
              percentiles: { p75: 1454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9569129261221591 },
                { start: 100, end: 300, density: 0.0263920823752873 },
                { start: 300, density: 0.0166949915025492 },
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
        fcp: 1454,
        lcp: 1884,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648491562327,
    },
    {
      url: "https://www.yara.com.pa/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9091818363672742,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06941388277655537,
                },
                { start: "0.25", density: 0.021404280856171277 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6468999999999939 },
                { start: 1800, end: 3000, density: 0.24149999999999777 },
                { start: 3000, density: 0.11159999999999864 },
              ],
              percentiles: { p75: 2115 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7261595361855284 },
                { start: 2500, end: 4000, density: 0.15968612554978068 },
                { start: 4000, density: 0.11415433826469426 },
              ],
              percentiles: { p75: 2672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2115, lcp: 2672, cls: "0.02" },
      timestamp: 1648491562376,
    },
    {
      url: "https://www.yara.ci/",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9242924292429244,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04580458045804581,
                },
                { start: "0.25", density: 0.02990299029902988 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5275999999999992 },
                { start: 1800, end: 3000, density: 0.21449999999999958 },
                { start: 3000, density: 0.25790000000000224 },
              ],
              percentiles: { p75: 3196 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9579000000000002 },
                { start: 100, end: 300, density: 0.031200000000000006 },
                { start: 300, density: 0.010900000000000026 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5915000000000159 },
                { start: 2500, end: 4000, density: 0.19350000000000522 },
                { start: 4000, density: 0.21500000000001174 },
              ],
              percentiles: { p75: 3790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3196,
        lcp: 3790,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648491562428,
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9320067993200691 },
                { start: 2500, end: 4000, density: 0.05289471052894716 },
                { start: 4000, density: 0.015098490150984866 },
              ],
              percentiles: { p75: 1533 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7775000000000007,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17520000000000016,
                },
                { start: "0.25", density: 0.04730000000000007 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9371062893710633 },
                { start: 1800, end: 3000, density: 0.04589541045895413 },
                { start: 3000, density: 0.016998300169982918 },
              ],
              percentiles: { p75: 1085 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981305608317502 },
                { start: 100, end: 300, density: 0.011596521043686865 },
                { start: 300, density: 0.007097870638808334 },
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
        fcp: 1085,
        lcp: 1533,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648491562478,
    },
    {
      url: "https://www.yara.fi/",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.89805922368948 },
                { start: 1800, end: 3000, density: 0.07763105242096874 },
                { start: 3000, density: 0.02430972388955601 },
              ],
              percentiles: { p75: 1302 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9448889777955563 },
                { start: 100, end: 300, density: 0.02800560112022396 },
                { start: 300, density: 0.027105421084216763 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8645270945810926 },
                { start: 2500, end: 4000, density: 0.10837832433513403 },
                { start: 4000, density: 0.027094581083783535 },
              ],
              percentiles: { p75: 1977 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7793779377937794,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16671667166716672,
                },
                { start: "0.25", density: 0.05390539053905397 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1302,
        lcp: 1977,
        cls: "0.08",
        fid: 14,
      },
      timestamp: 1648491562534,
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
                  density: 0.9100089991000896,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06949305069493049,
                },
                { start: "0.25", density: 0.020497950204979472 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8348339335734437 },
                { start: 1800, end: 3000, density: 0.13035214085634475 },
                { start: 3000, density: 0.034813925570228714 },
              ],
              percentiles: { p75: 1589 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705970597059701 },
                { start: 100, end: 300, density: 0.020002000200019993 },
                { start: 300, density: 0.009400940094009406 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.869250000000002 },
                { start: 2500, end: 4000, density: 0.10195000000000018 },
                { start: 4000, density: 0.028799999999999902 },
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
        fcp: 1589,
        lcp: 2041,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648491562591,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8294170582941699,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12758724127587232,
                },
                { start: "0.25", density: 0.042995700429957026 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4877463238971671 },
                { start: 1800, end: 3000, density: 0.24977493247974292 },
                { start: 3000, density: 0.2624787436230765 },
              ],
              percentiles: { p75: 3164 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9147573786893469 },
                { start: 100, end: 300, density: 0.054127063531766 },
                { start: 300, density: 0.03111555777888951 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5062018605581633 },
                { start: 2500, end: 4000, density: 0.24592377713313798 },
                { start: 4000, density: 0.24787436230869336 },
              ],
              percentiles: { p75: 4070 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3164,
        lcp: 4070,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1648491562650,
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7515248475152484,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17008299170082986,
                },
                { start: "0.25", density: 0.07839216078392162 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8753999999999994 },
                { start: 1800, end: 3000, density: 0.08409999999999995 },
                { start: 3000, density: 0.04050000000000001 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688937787557504 },
                { start: 100, end: 300, density: 0.010402080416083209 },
                { start: 300, density: 0.020704140828165643 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8694869486948698 },
                { start: 2500, end: 4000, density: 0.10171017101710178 },
                { start: 4000, density: 0.0288028802880288 },
              ],
              percentiles: { p75: 1982 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1382,
        lcp: 1982,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648491562705,
    },
    {
      url: "https://www.yara.cm/",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6079607960796062 },
                { start: 1800, end: 3000, density: 0.14811481148114772 },
                { start: 3000, density: 0.24392439243924371 },
              ],
              percentiles: { p75: 2955 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728 },
                { start: 100, end: 300, density: 0.027200000000000005 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6331133113311352 },
                { start: 2500, end: 4000, density: 0.17916791679167982 },
                { start: 4000, density: 0.18771877187718858 },
              ],
              percentiles: { p75: 3384 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6617661766176615,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15901590159015894,
                },
                { start: "0.25", density: 0.17921792179217907 },
              ],
              percentiles: { p75: "0.20" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2955,
        lcp: 3384,
        cls: "0.20",
        fid: 11,
      },
      timestamp: 1648491562766,
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6940694069406932 },
                { start: 1800, end: 3000, density: 0.18801880188018777 },
                { start: 3000, density: 0.11791179117911847 },
              ],
              percentiles: { p75: 2115 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659965996599645 },
                { start: 100, end: 300, density: 0.018801880188018774 },
                { start: 300, density: 0.015201520152015176 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7068206820682085 },
                { start: 2500, end: 4000, density: 0.17126712671267172 },
                { start: 4000, density: 0.1219121912191224 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7629000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17290000000000003,
                },
                { start: "0.25", density: 0.0642 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2115,
        lcp: 2821,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648491562824,
    },
    {
      url: "https://www.yara.co.za/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6875749700119913 },
                { start: 2500, end: 4000, density: 0.1705817672930819 },
                { start: 4000, density: 0.1418432626949224 },
              ],
              percentiles: { p75: 2917 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8078999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12949999999999995,
                },
                { start: "0.25", density: 0.06259999999999996 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6592977893368028 },
                { start: 1800, end: 3000, density: 0.19515854756426979 },
                { start: 3000, density: 0.14554366309893205 },
              ],
              percentiles: { p75: 2305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9851970394078816 },
                { start: 100, end: 300, density: 0.01180236047209442 },
                { start: 300, density: 0.003000600120024005 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2305,
        lcp: 2917,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648491562883,
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9292000000000008,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054500000000000055,
                },
                { start: "0.25", density: 0.016300000000000012 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8183273309323787 },
                { start: 1800, end: 3000, density: 0.11694677871148543 },
                { start: 3000, density: 0.06472589035614335 },
              ],
              percentiles: { p75: 1527 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604118764370692 },
                { start: 100, end: 300, density: 0.02249325202439269 },
                { start: 300, density: 0.017094871538538385 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8458845884588468 },
                { start: 2500, end: 4000, density: 0.10081008100810088 },
                { start: 4000, density: 0.05330533053305341 },
              ],
              percentiles: { p75: 1995 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1527,
        lcp: 1995,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648491562942,
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
                  density: 0.871012898710129,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1060893910608939,
                },
                { start: "0.25", density: 0.02289771022897708 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7343202960888378 },
                { start: 1800, end: 3000, density: 0.1791537461238398 },
                { start: 3000, density: 0.08652595778733833 },
              ],
              percentiles: { p75: 1869 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9680095971208663 },
                { start: 100, end: 300, density: 0.015795261421573573 },
                { start: 300, density: 0.01619514145756272 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.789950000000006 },
                { start: 2500, end: 4000, density: 0.14455000000000107 },
                { start: 4000, density: 0.06550000000000086 },
              ],
              percentiles: { p75: 2298 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1869,
        lcp: 2298,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648491563011,
    },
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
                  density: 0.8914891489148916,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08680868086808681,
                },
                { start: "0.25", density: 0.02170217021702169 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5717571757175701 },
                { start: 1800, end: 3000, density: 0.26012601260125934 },
                { start: 3000, density: 0.16811681168116838 },
              ],
              percentiles: { p75: 2609 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556911382276454 },
                { start: 100, end: 300, density: 0.031906381276255245 },
                { start: 300, density: 0.012402480496099207 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6653330666133229 },
                { start: 2500, end: 4000, density: 0.22584516903380678 },
                { start: 4000, density: 0.10882176435287001 },
              ],
              percentiles: { p75: 2944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2609,
        lcp: 2944,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648491563071,
    },
    {
      url: "https://www.yara.co.uk/",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7121287871212882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18428157184281582,
                },
                { start: "0.25", density: 0.10358964103589655 },
              ],
              percentiles: { p75: "0.12" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45885411458853825 },
                { start: 1800, end: 3000, density: 0.3005699430056976 },
                { start: 3000, density: 0.2405759424057607 },
              ],
              percentiles: { p75: 2980 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276289484206262 },
                { start: 100, end: 300, density: 0.03588564574170309 },
                { start: 300, density: 0.036485405837664575 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5461546154615494 },
                { start: 2500, end: 4000, density: 0.2770277027702786 },
                { start: 4000, density: 0.1768176817681805 },
              ],
              percentiles: { p75: 3480 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2980,
        lcp: 3480,
        cls: "0.12",
        fid: 13,
      },
      timestamp: 1648491563138,
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
                  density: 0.9149999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06759999999999998,
                },
                { start: "0.25", density: 0.017399999999999995 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.840300000000001 },
                { start: 1800, end: 3000, density: 0.12270000000000016 },
                { start: 3000, density: 0.03699999999999999 },
              ],
              percentiles: { p75: 1527 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739999999999991 },
                { start: 100, end: 300, density: 0.02169999999999998 },
                { start: 300, density: 0.004299999999999999 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8558499999999977 },
                { start: 2500, end: 4000, density: 0.11304999999999975 },
                { start: 4000, density: 0.031099999999999912 },
              ],
              percentiles: { p75: 2118 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1527,
        lcp: 2118,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648491563212,
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9164000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07370000000000002,
                },
                { start: "0.25", density: 0.0099 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.951890378075615 },
                { start: 1800, end: 3000, density: 0.04200840168033606 },
                { start: 3000, density: 0.006101220244048809 },
              ],
              percentiles: { p75: 1106 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632000000000001 },
                { start: 100, end: 300, density: 0.031100000000000003 },
                { start: 300, density: 0.0057 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9478947894789451 },
                { start: 2500, end: 4000, density: 0.0396039603960395 },
                { start: 4000, density: 0.012501250125012518 },
              ],
              percentiles: { p75: 1576 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1106,
        lcp: 1576,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1648491563286,
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
                  density: 0.9185999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05079999999999998,
                },
                { start: "0.25", density: 0.030599999999999968 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6009000000000044 },
                { start: 1800, end: 3000, density: 0.18010000000000137 },
                { start: 3000, density: 0.21900000000000272 },
              ],
              percentiles: { p75: 2708 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6248125562331288 },
                { start: 2500, end: 4000, density: 0.21313605918224499 },
                { start: 4000, density: 0.16205138458462381 },
              ],
              percentiles: { p75: 3166 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2708, lcp: 3166, cls: "0.00" },
      timestamp: 1648491563352,
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7908209179082092,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13598640135986403,
                },
                { start: "0.25", density: 0.07319268073192678 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8397320535892876 },
                { start: 1800, end: 3000, density: 0.12077584483103457 },
                { start: 3000, density: 0.039492101579684025 },
              ],
              percentiles: { p75: 1463 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602801400700304 },
                { start: 100, end: 300, density: 0.02621310655327651 },
                { start: 300, density: 0.013506753376688186 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8607082124637393 },
                { start: 2500, end: 4000, density: 0.10418125437631288 },
                { start: 4000, density: 0.03511053315994826 },
              ],
              percentiles: { p75: 1955 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1463,
        lcp: 1955,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1648491563429,
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6420857914208677 },
                { start: 2500, end: 4000, density: 0.22642735726427704 },
                { start: 4000, density: 0.1314868513148712 },
              ],
              percentiles: { p75: 3058 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8882888288828886,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08110811081108114,
                },
                { start: "0.25", density: 0.0306030603060306 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5431456854314546 },
                { start: 1800, end: 3000, density: 0.2813718628137174 },
                { start: 3000, density: 0.17548245175482688 },
              ],
              percentiles: { p75: 2603 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9689000000000005 },
                { start: 100, end: 300, density: 0.025500000000000016 },
                { start: 300, density: 0.005599999999999991 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2603,
        lcp: 3058,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648491563503,
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9694999999999993,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023199999999999988,
                },
                { start: "0.25", density: 0.007299999999999996 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41985191114668896 },
                { start: 1800, end: 3000, density: 0.42535521312787766 },
                { start: 3000, density: 0.15479287572543607 },
              ],
              percentiles: { p75: 2624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9191161767646534 },
                { start: 100, end: 300, density: 0.05738852229554129 },
                { start: 300, density: 0.023495300939812058 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5015507753876959 },
                { start: 2500, end: 4000, density: 0.3514757378689358 },
                { start: 4000, density: 0.14697348674337213 },
              ],
              percentiles: { p75: 3435 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2624,
        lcp: 3435,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648491563580,
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.890510948905111 },
                { start: 1800, end: 3000, density: 0.0907909209079094 },
                { start: 3000, density: 0.018698130186981278 },
              ],
              percentiles: { p75: 1406 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9810962192438482 },
                { start: 100, end: 300, density: 0.012602520504100812 },
                { start: 300, density: 0.006301260252050414 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9055499999999994 },
                { start: 2500, end: 4000, density: 0.07474999999999993 },
                { start: 4000, density: 0.019699999999999974 },
              ],
              percentiles: { p75: 1812 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8489848984898493,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12851285128512857,
                },
                { start: "0.25", density: 0.022502250225022523 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1406,
        lcp: 1812,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648491563658,
    },
    {
      url: "https://www.yara.dk/",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.871961588476545 },
                { start: 1800, end: 3000, density: 0.10003000900270105 },
                { start: 3000, density: 0.028008402520756388 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9765953190638121 },
                { start: 100, end: 300, density: 0.014402880576115214 },
                { start: 300, density: 0.009001800360071985 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8890499999999999 },
                { start: 2500, end: 4000, density: 0.08695000000000003 },
                { start: 4000, density: 0.02399999999999995 },
              ],
              percentiles: { p75: 1851 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8124999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1605999999999999,
                },
                { start: "0.25", density: 0.026899999999999966 },
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
        fcp: 1382,
        lcp: 1851,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648491563745,
    },
    {
      url: "https://www.yara.be/fr-be/",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8694869486948698 },
                { start: 2500, end: 4000, density: 0.10171017101710178 },
                { start: 4000, density: 0.0288028802880288 },
              ],
              percentiles: { p75: 1982 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7515248475152484,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17008299170082986,
                },
                { start: "0.25", density: 0.07839216078392162 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8753999999999994 },
                { start: 1800, end: 3000, density: 0.08409999999999995 },
                { start: 3000, density: 0.04050000000000001 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688937787557504 },
                { start: 100, end: 300, density: 0.010402080416083209 },
                { start: 300, density: 0.020704140828165643 },
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
        fcp: 1382,
        lcp: 1982,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648491563812,
    },
    {
      url: "https://www.yara.my/",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9790020997900208 },
                { start: 100, end: 300, density: 0.017298270172982702 },
                { start: 300, density: 0.003699630036996298 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8140500000000025 },
                { start: 2500, end: 4000, density: 0.11145000000000037 },
                { start: 4000, density: 0.07450000000000098 },
              ],
              percentiles: { p75: 2169 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7953999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12869999999999995,
                },
                { start: "0.25", density: 0.07590000000000005 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7597240275972496 },
                { start: 1800, end: 3000, density: 0.15168483151685017 },
                { start: 3000, density: 0.08859114088591273 },
              ],
              percentiles: { p75: 1795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1795,
        lcp: 2169,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648491563884,
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9041904190419043,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06930693069306931,
                },
                { start: "0.25", density: 0.02650265026502648 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6199479791916878 },
                { start: 1800, end: 3000, density: 0.24019607843137677 },
                { start: 3000, density: 0.13985594237695637 },
              ],
              percentiles: { p75: 2277 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9498100379924028 },
                { start: 100, end: 300, density: 0.03899220155968811 },
                { start: 300, density: 0.011197760447910422 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6949805019498095 },
                { start: 2500, end: 4000, density: 0.1755324467553256 },
                { start: 4000, density: 0.1294870512948709 },
              ],
              percentiles: { p75: 2888 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2277,
        lcp: 2888,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648491563955,
    },
    {
      url: "https://www.yara.pl/",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9550955095509523 },
                { start: 100, end: 300, density: 0.025502550255025437 },
                { start: 300, density: 0.019401940194019248 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8058388322335672 },
                { start: 2500, end: 4000, density: 0.14327134573085631 },
                { start: 4000, density: 0.050889822035594265 },
              ],
              percentiles: { p75: 2259 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7584000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2027000000000001,
                },
                { start: "0.25", density: 0.038900000000000066 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7674232576742452 },
                { start: 1800, end: 3000, density: 0.17268273172683016 },
                { start: 3000, density: 0.05989401059894155 },
              ],
              percentiles: { p75: 1755 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1755,
        lcp: 2259,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1648491564027,
    },
    {
      url: "https://www.yara.se/",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8142185781421855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14478552144785514,
                },
                { start: "0.25", density: 0.04099590040995896 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9255074492550757 },
                { start: 1800, end: 3000, density: 0.0607939206079393 },
                { start: 3000, density: 0.013698630136986405 },
              ],
              percentiles: { p75: 1238 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.974405118976209 },
                { start: 100, end: 300, density: 0.01359728054389128 },
                { start: 300, density: 0.011997600479904068 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9200920092009283 },
                { start: 2500, end: 4000, density: 0.06560656065606618 },
                { start: 4000, density: 0.014301430143014502 },
              ],
              percentiles: { p75: 1697 },
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
        lcp: 1697,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648491564103,
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
                  density: 0.8134000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11980000000000003,
                },
                { start: "0.25", density: 0.06679999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5914591459145944 },
                { start: 1800, end: 3000, density: 0.22802280228022914 },
                { start: 3000, density: 0.1805180518051824 },
              ],
              percentiles: { p75: 2474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9535046495350489 },
                { start: 100, end: 300, density: 0.030596940305969482 },
                { start: 300, density: 0.015898410158984064 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6769415532425919 },
                { start: 2500, end: 4000, density: 0.1776421136909522 },
                { start: 4000, density: 0.14541633306645438 },
              ],
              percentiles: { p75: 2995 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2474,
        lcp: 2995,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648491564177,
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
                  density: 0.8501999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09199999999999994,
                },
                { start: "0.25", density: 0.05779999999999993 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4401000000000015 },
                { start: 1800, end: 3000, density: 0.3567000000000012 },
                { start: 3000, density: 0.20320000000000055 },
              ],
              percentiles: { p75: 2832 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9685968596859688 },
                { start: 100, end: 300, density: 0.025702570257025704 },
                { start: 300, density: 0.005700570057005706 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5786578657865755 },
                { start: 2500, end: 4000, density: 0.26352635263526214 },
                { start: 4000, density: 0.15781578157815745 },
              ],
              percentiles: { p75: 3319 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2832,
        lcp: 3319,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1648491564254,
    },
    {
      url: "https://www.yara.com.au/",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9772068379486166 },
                { start: 100, end: 300, density: 0.015095471358592441 },
                { start: 300, density: 0.007697690692792158 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.683068306830682 },
                { start: 2500, end: 4000, density: 0.19801980198019764 },
                { start: 4000, density: 0.11891189118911838 },
              ],
              percentiles: { p75: 2925 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7636763676367644,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1612161216121614,
                },
                { start: "0.25", density: 0.0751075107510752 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.618138186181381 },
                { start: 1800, end: 3000, density: 0.22707729227077264 },
                { start: 3000, density: 0.15478452154784383 },
              ],
              percentiles: { p75: 2455 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 2925,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648491564332,
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
                  density: 0.9093090690930908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07759224077592243,
                },
                { start: "0.25", density: 0.0130986901309869 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8130373925214948 },
                { start: 1800, end: 3000, density: 0.14967006598680244 },
                { start: 3000, density: 0.03729254149170172 },
              ],
              percentiles: { p75: 1629 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630036996300398 },
                { start: 100, end: 300, density: 0.01659834016598345 },
                { start: 300, density: 0.020397960203979666 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8370500000000066 },
                { start: 2500, end: 4000, density: 0.1278500000000011 },
                { start: 4000, density: 0.03510000000000066 },
              ],
              percentiles: { p75: 2133 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1629,
        lcp: 2133,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648491564411,
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7321196358907582 },
                { start: 1800, end: 3000, density: 0.16424927478243273 },
                { start: 3000, density: 0.10363108932679697 },
              ],
              percentiles: { p75: 1914 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9783827061649336 },
                { start: 100, end: 300, density: 0.016913530824659757 },
                { start: 300, density: 0.00470376301040832 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7603041216486567 },
                { start: 2500, end: 4000, density: 0.14795918367346894 },
                { start: 4000, density: 0.09173669467787116 },
              ],
              percentiles: { p75: 2468 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8657000000000011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10110000000000012,
                },
                { start: "0.25", density: 0.033200000000000056 },
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
        fcp: 1914,
        lcp: 2468,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1648491564493,
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7877787778777876,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16361636163616355,
                },
                { start: "0.25", density: 0.048604860486048534 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8634863486348696 },
                { start: 1800, end: 3000, density: 0.09630963096309703 },
                { start: 3000, density: 0.04020402040204037 },
              ],
              percentiles: { p75: 1400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619152339064392 },
                { start: 100, end: 300, density: 0.022790883646541426 },
                { start: 300, density: 0.015293882447021259 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8607500000000011 },
                { start: 2500, end: 4000, density: 0.09585000000000016 },
                { start: 4000, density: 0.04340000000000028 },
              ],
              percentiles: { p75: 2037 },
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
        lcp: 2037,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1648491564574,
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8195000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12550000000000006,
                },
                { start: "0.25", density: 0.05500000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6136613661366097 },
                { start: 1800, end: 3000, density: 0.21752175217521613 },
                { start: 3000, density: 0.16881688168816886 },
              ],
              percentiles: { p75: 2448 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9235923592359233 },
                { start: 100, end: 300, density: 0.0343034303430343 },
                { start: 300, density: 0.04210421042104189 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6603660366036542 },
                { start: 2500, end: 4000, density: 0.1889188918891872 },
                { start: 4000, density: 0.15071507150715072 },
              ],
              percentiles: { p75: 3114 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2448,
        lcp: 3114,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648491564657,
    },
    {
      url: "https://www.yara.es/",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8066193380661922,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12148785121487835,
                },
                { start: "0.25", density: 0.07189281071892793 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7499250074992428 },
                { start: 1800, end: 3000, density: 0.16558344165583289 },
                { start: 3000, density: 0.08449155084491519 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9546045395460403 },
                { start: 100, end: 300, density: 0.028297170282971556 },
                { start: 300, density: 0.01709829017098289 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8002899420116151 },
                { start: 2500, end: 4000, density: 0.13332333533293628 },
                { start: 4000, density: 0.0663867226554715 },
              ],
              percentiles: { p75: 2265 },
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
        lcp: 2265,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648491564742,
    },
  ],
};
