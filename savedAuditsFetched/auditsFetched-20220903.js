export const audit38 = {
  date: "2022-09-03T17:31:07.367Z",
  dateParsedLocale: "03/09/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "03/09/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.788257651530306 },
                { start: 800, end: 1800, density: 0.18393678735747154 },
                { start: 1800, density: 0.027805561112222394 },
              ],
              percentiles: { p75: 766 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9105089491050895 },
                { start: 1800, end: 3000, density: 0.06229377062293769 },
                { start: 3000, density: 0.027197280271972785 },
              ],
              percentiles: { p75: 1225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655931186237248 },
                { start: 100, end: 300, density: 0.022804560912182442 },
                { start: 300, density: 0.011602320464092798 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9217500000000001 },
                { start: 2500, end: 4000, density: 0.05435000000000001 },
                { start: 4000, density: 0.023899999999999928 },
              ],
              percentiles: { p75: 1754 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8303 },
                { start: "0.10", end: "0.25", density: 0.11910000000000001 },
                { start: "0.25", density: 0.050600000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6121224244848971 },
                { start: 200, end: 500, density: 0.28575715143028607 },
                { start: 500, density: 0.10212042408481696 },
              ],
              percentiles: { p75: 312 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1225, lcp: 1754, cls: "0.06", fid: 12 },
      timestamp: 1662226261639,
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
                { start: "0.00", end: "0.10", density: 0.8627862786278627 },
                { start: "0.10", end: "0.25", density: 0.09700970097009702 },
                { start: "0.25", density: 0.040204020402040234 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44209999999999955 },
                { start: 200, end: 500, density: 0.36769999999999964 },
                { start: 500, density: 0.1902000000000009 },
              ],
              percentiles: { p75: 429 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7154569086182764 },
                { start: 800, end: 1800, density: 0.24555088982203552 },
                { start: 1800, density: 0.03899220155968813 },
              ],
              percentiles: { p75: 845 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8828765753150629 },
                { start: 1800, end: 3000, density: 0.08431686337267452 },
                { start: 3000, density: 0.03280656131226263 },
              ],
              percentiles: { p75: 1353 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.958891778355671 },
                { start: 100, end: 300, density: 0.02530506101220244 },
                { start: 300, density: 0.015803160632126525 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8875050020008004 },
                { start: 2500, end: 4000, density: 0.08278311324529812 },
                { start: 4000, density: 0.02971188475390147 },
              ],
              percentiles: { p75: 1812 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1353, lcp: 1812, cls: "0.02", fid: 14 },
      timestamp: 1662226261773,
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
                { start: "0.00", end: "0.10", density: 0.8303 },
                { start: "0.10", end: "0.25", density: 0.11910000000000001 },
                { start: "0.25", density: 0.050600000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6121224244848971 },
                { start: 200, end: 500, density: 0.28575715143028607 },
                { start: 500, density: 0.10212042408481696 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.788257651530306 },
                { start: 800, end: 1800, density: 0.18393678735747154 },
                { start: 1800, density: 0.027805561112222394 },
              ],
              percentiles: { p75: 766 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9105089491050895 },
                { start: 1800, end: 3000, density: 0.06229377062293769 },
                { start: 3000, density: 0.027197280271972785 },
              ],
              percentiles: { p75: 1225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9655931186237248 },
                { start: 100, end: 300, density: 0.022804560912182442 },
                { start: 300, density: 0.011602320464092798 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9217500000000001 },
                { start: 2500, end: 4000, density: 0.05435000000000001 },
                { start: 4000, density: 0.023899999999999928 },
              ],
              percentiles: { p75: 1754 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1225, lcp: 1754, cls: "0.06", fid: 12 },
      timestamp: 1662226261931,
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
                { start: 0, end: 100, density: 0.9725972597259726 },
                { start: 100, end: 300, density: 0.024102410241024094 },
                { start: 300, density: 0.0033003300330032995 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7425514897020602 },
                { start: 2500, end: 4000, density: 0.17676464707058606 },
                { start: 4000, density: 0.08068386322735376 },
              ],
              percentiles: { p75: 2656 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9459000000000001 },
                { start: "0.10", end: "0.25", density: 0.0399 },
                { start: "0.25", density: 0.014199999999999997 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5619999999999999 },
                { start: 200, end: 500, density: 0.34750000000000003 },
                { start: 500, density: 0.09049999999999994 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4891999999999998 },
                { start: 800, end: 1800, density: 0.40949999999999986 },
                { start: 1800, density: 0.10130000000000025 },
              ],
              percentiles: { p75: 1160 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6468706258748245 },
                { start: 1800, end: 3000, density: 0.22985402919416087 },
                { start: 3000, density: 0.12327534493101466 },
              ],
              percentiles: { p75: 2204 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2204, lcp: 2656, cls: "0.00", fid: 12 },
      timestamp: 1662226261931,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586124162751175 },
                { start: 100, end: 300, density: 0.03229031290612815 },
                { start: 300, density: 0.009097270818754406 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6640664066406625 },
                { start: 2500, end: 4000, density: 0.18751875187518713 },
                { start: 4000, density: 0.14841484148415024 },
              ],
              percentiles: { p75: 3016 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9223077692230777 },
                { start: "0.10", end: "0.25", density: 0.049595040495950406 },
                { start: "0.25", density: 0.028097190280971917 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5324532453245326 },
                { start: 200, end: 500, density: 0.3545354535453547 },
                { start: 500, density: 0.11301130113011268 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4219999999999999 },
                { start: 800, end: 1800, density: 0.4154999999999999 },
                { start: 1800, density: 0.16250000000000026 },
              ],
              percentiles: { p75: 1511 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5609999999999992 },
                { start: 1800, end: 3000, density: 0.24399999999999963 },
                { start: 3000, density: 0.19500000000000128 },
              ],
              percentiles: { p75: 2625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2625, lcp: 3016, cls: "0.01", fid: 12 },
      timestamp: 1662226261932,
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
                { start: "0.00", end: "0.10", density: 0.9695550351288056 },
                { start: "0.10", end: "0.25", density: 0.015492704017294181 },
                { start: "0.25", density: 0.014952260853900197 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7784856206771023 },
                { start: 800, end: 1800, density: 0.20986530760829994 },
                { start: 1800, density: 0.011649071714597743 },
              ],
              percentiles: { p75: 780 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788914882130646 },
                { start: 1800, end: 3000, density: 0.09087637214324276 },
                { start: 3000, density: 0.030232139643692636 },
              ],
              percentiles: { p75: 1456 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1456, cls: "0.00" },
      timestamp: 1662226261932,
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
                { start: "0.00", end: "0.10", density: 0.8979183817476184 },
                { start: "0.10", end: "0.25", density: 0.08255909678936846 },
                { start: "0.25", density: 0.019522521463013046 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.560557721848044 },
                { start: 200, end: 500, density: 0.3335696561503011 },
                { start: 500, density: 0.10587262200165487 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7782013103037522 },
                { start: 800, end: 1800, density: 0.20452650387135193 },
                { start: 1800, density: 0.017272185824895772 },
              ],
              percentiles: { p75: 794 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9116437551404065 },
                { start: 1800, end: 3000, density: 0.07284690400657974 },
                { start: 3000, density: 0.015509340853013734 },
              ],
              percentiles: { p75: 1309 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723922698355539 },
                { start: 100, end: 300, density: 0.016804705317488896 },
                { start: 300, density: 0.010803024846957145 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9366188909774436 },
                { start: 2500, end: 4000, density: 0.049988251879699276 },
                { start: 4000, density: 0.013392857142857135 },
              ],
              percentiles: { p75: 1682 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1309, lcp: 1682, cls: "0.00", fid: 13 },
      timestamp: 1662226261932,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6587264967124223 },
                { start: 2500, end: 4000, density: 0.191313877033106 },
                { start: 4000, density: 0.14995962625447162 },
              ],
              percentiles: { p75: 3006 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9364455743009013 },
                { start: "0.10", end: "0.25", density: 0.03639935290039288 },
                { start: "0.25", density: 0.02715507279870579 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4502846070001212 },
                { start: 200, end: 500, density: 0.41697953251786357 },
                { start: 500, density: 0.13273586048201533 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4068322981366456 },
                { start: 800, end: 1800, density: 0.42201518288474776 },
                { start: 1800, density: 0.17115251897860662 },
              ],
              percentiles: { p75: 1537 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5376965772432922 },
                { start: 1800, end: 3000, density: 0.2547409805735425 },
                { start: 3000, density: 0.20756244218316536 },
              ],
              percentiles: { p75: 2712 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522184300341295 },
                { start: 100, end: 300, density: 0.03730728492409085 },
                { start: 300, density: 0.010474285041779495 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2712, lcp: 3006, cls: "0.00", fid: 13 },
      timestamp: 1662226261932,
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
                { start: 0, end: 100, density: 0.9528385383740043 },
                { start: 100, end: 300, density: 0.028827917562270825 },
                { start: 300, density: 0.0183335440637249 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8923222152297046 },
                { start: 2500, end: 4000, density: 0.07910635619886729 },
                { start: 4000, density: 0.028571428571428276 },
              ],
              percentiles: { p75: 1824 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.90142263628352 },
                { start: "0.10", end: "0.25", density: 0.0600528767468211 },
                { start: "0.25", density: 0.03852448696965883 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.37104969636881885 },
                { start: 200, end: 500, density: 0.4187631676787705 },
                { start: 500, density: 0.21018713595241073 },
              ],
              percentiles: { p75: 455 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7033379172396547 },
                { start: 800, end: 1800, density: 0.25665708213526683 },
                { start: 1800, density: 0.04000500062507843 },
              ],
              percentiles: { p75: 858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.879833732208087 },
                { start: 1800, end: 3000, density: 0.08653482806398793 },
                { start: 3000, density: 0.0336314397279251 },
              ],
              percentiles: { p75: 1377 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1377, lcp: 1824, cls: "0.00", fid: 15 },
      timestamp: 1662226261932,
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
                { start: "0.00", end: "0.10", density: 0.7934000000000001 },
                { start: "0.10", end: "0.25", density: 0.1384 },
                { start: "0.25", density: 0.06819999999999979 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7638763876387642 },
                { start: 200, end: 500, density: 0.14911491149114917 },
                { start: 500, density: 0.08700870087008668 },
              ],
              percentiles: { p75: 191 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143999999999998 },
                { start: 800, end: 1800, density: 0.4303999999999999 },
                { start: 1800, density: 0.15520000000000034 },
              ],
              percentiles: { p75: 1333 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08867339798060626 },
                { start: 1800, end: 3000, density: 0.41117664700590034 },
                { start: 3000, density: 0.5001499550134935 },
              ],
              percentiles: { p75: 4840 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8868226354729054 },
                { start: 100, end: 300, density: 0.08418316336732654 },
                { start: 300, density: 0.028994201159768022 },
              ],
              percentiles: { p75: 38 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.24734946989397932 },
                { start: 2500, end: 4000, density: 0.3760752150430093 },
                { start: 4000, density: 0.3765753150630114 },
              ],
              percentiles: { p75: 5297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4840, lcp: 5297, cls: "0.07", fid: 38 },
      timestamp: 1662226261932,
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
                { start: 0, end: 1800, density: 0.7572802564787594 },
                { start: 1800, end: 3000, density: 0.17860005343307492 },
                { start: 3000, density: 0.06411969008816557 },
              ],
              percentiles: { p75: 1780 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9096896955503512 },
                { start: 100, end: 300, density: 0.04771662763466042 },
                { start: 300, density: 0.04259367681498845 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8153649684097313 },
                { start: 2500, end: 4000, density: 0.13341847022449238 },
                { start: 4000, density: 0.05121656136577637 },
              ],
              percentiles: { p75: 2191 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9685996793158738 },
                { start: "0.10", end: "0.25", density: 0.022447888829502938 },
                { start: "0.25", density: 0.008952431854623192 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3867260451084613 },
                { start: 200, end: 500, density: 0.4071254130153711 },
                { start: 500, density: 0.20614854187616763 },
              ],
              percentiles: { p75: 441 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5033244680851068 },
                { start: 800, end: 1800, density: 0.4170212765957449 },
                { start: 1800, density: 0.07965425531914846 },
              ],
              percentiles: { p75: 1178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1780, lcp: 2191, cls: "0.00", fid: 18 },
      timestamp: 1662226261932,
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
                { start: 0, end: 200, density: 0.5581441855814412 },
                { start: 200, end: 500, density: 0.3025697430256971 },
                { start: 500, density: 0.1392860713928617 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.557255725572557 },
                { start: 800, end: 1800, density: 0.3391339133913389 },
                { start: 1800, density: 0.103610361036104 },
              ],
              percentiles: { p75: 1122 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7053589282143569 },
                { start: 1800, end: 3000, density: 0.18006398720255942 },
                { start: 3000, density: 0.1145770845830837 },
              ],
              percentiles: { p75: 1995 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9676 },
                { start: 100, end: 300, density: 0.0228 },
                { start: 300, density: 0.009600000000000022 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7775499999999985 },
                { start: 2500, end: 4000, density: 0.1329499999999997 },
                { start: 4000, density: 0.08950000000000159 },
              ],
              percentiles: { p75: 2363 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9258925892589258 },
                { start: "0.10", end: "0.25", density: 0.0497049704970497 },
                { start: "0.25", density: 0.024402440244024413 },
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
      extractedResults: { fcp: 1995, lcp: 2363, cls: "0.00", fid: 12 },
      timestamp: 1662226261932,
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
                { start: "0.00", end: "0.10", density: 0.7934000000000001 },
                { start: "0.10", end: "0.25", density: 0.1384 },
                { start: "0.25", density: 0.06819999999999979 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7638763876387642 },
                { start: 200, end: 500, density: 0.14911491149114917 },
                { start: 500, density: 0.08700870087008668 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4143999999999998 },
                { start: 800, end: 1800, density: 0.4303999999999999 },
                { start: 1800, density: 0.15520000000000034 },
              ],
              percentiles: { p75: 1313 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08867339798060626 },
                { start: 1800, end: 3000, density: 0.41117664700590034 },
                { start: 3000, density: 0.5001499550134935 },
              ],
              percentiles: { p75: 4605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8868226354729054 },
                { start: 100, end: 300, density: 0.08418316336732654 },
                { start: 300, density: 0.028994201159768022 },
              ],
              percentiles: { p75: 35 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.24734946989397932 },
                { start: 2500, end: 4000, density: 0.3760752150430093 },
                { start: 4000, density: 0.3765753150630114 },
              ],
              percentiles: { p75: 5165 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4605, lcp: 5165, cls: "0.07", fid: 35 },
      timestamp: 1662226261932,
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
                { start: 0, end: 100, density: 0.9298303957432656 },
                { start: 100, end: 300, density: 0.04966190001108524 },
                { start: 300, density: 0.020507704245649065 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8267173122191309 },
                { start: 2500, end: 4000, density: 0.11689492831157712 },
                { start: 4000, density: 0.05638775946929191 },
              ],
              percentiles: { p75: 2165 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9341655996585574 },
                { start: "0.10", end: "0.25", density: 0.05751173708920189 },
                { start: "0.25", density: 0.008322663252240719 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44096122337520605 },
                { start: 200, end: 500, density: 0.37531403604587765 },
                { start: 500, density: 0.18372474057891638 },
              ],
              percentiles: { p75: 418 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5975791038437035 },
                { start: 800, end: 1800, density: 0.3399872584412826 },
                { start: 1800, density: 0.06243363771501403 },
              ],
              percentiles: { p75: 1072 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7206870799103807 },
                { start: 1800, end: 3000, density: 0.19374799957324226 },
                { start: 3000, density: 0.08556492051637707 },
              ],
              percentiles: { p75: 1900 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1900, lcp: 2165, cls: "0.00", fid: 14 },
      timestamp: 1662226261932,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7448510297940408 },
                { start: 1800, end: 3000, density: 0.1557688462307538 },
                { start: 3000, density: 0.09938012397520544 },
              ],
              percentiles: { p75: 1843 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9256851370274055 },
                { start: 100, end: 300, density: 0.046409281856371276 },
                { start: 300, density: 0.027905581116223235 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8006499999999991 },
                { start: 2500, end: 4000, density: 0.1300499999999998 },
                { start: 4000, density: 0.06930000000000112 },
              ],
              percentiles: { p75: 2250 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8864000000000001 },
                { start: "0.10", end: "0.25", density: 0.0588 },
                { start: "0.25", density: 0.054799999999999884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3961396139613967 },
                { start: 200, end: 500, density: 0.3853385338533859 },
                { start: 500, density: 0.21852185218521736 },
              ],
              percentiles: { p75: 457 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5946405359464052 },
                { start: 800, end: 1800, density: 0.31546845315468447 },
                { start: 1800, density: 0.08989101089891029 },
              ],
              percentiles: { p75: 1093 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1843, lcp: 2250, cls: "0.00", fid: 14 },
      timestamp: 1662226261932,
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
                { start: 0, end: 100, density: 0.9594651065608024 },
                { start: 100, end: 300, density: 0.027023262292798444 },
                { start: 300, density: 0.013511631146399132 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8905696375034069 },
                { start: 2500, end: 4000, density: 0.07604251839738346 },
                { start: 4000, density: 0.033387844099209474 },
              ],
              percentiles: { p75: 1782 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9568788501026694 },
                { start: "0.10", end: "0.25", density: 0.03449691991786447 },
                { start: "0.25", density: 0.008624229979466115 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.38328139818452783 },
                { start: 200, end: 500, density: 0.4523777265953122 },
                { start: 500, density: 0.16434087522016003 },
              ],
              percentiles: { p75: 410 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.689532659196502 },
                { start: 800, end: 1800, density: 0.25430445476906266 },
                { start: 1800, density: 0.05616288603443533 },
              ],
              percentiles: { p75: 893 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8490824431662554 },
                { start: 1800, end: 3000, density: 0.105176663927691 },
                { start: 3000, density: 0.045740892906053786 },
              ],
              percentiles: { p75: 1438 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1438, lcp: 1782, cls: "0.00", fid: 14 },
      timestamp: 1662226261933,
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
                { start: 0, end: 100, density: 0.8497517637836416 },
                { start: 100, end: 300, density: 0.04716488110791737 },
                { start: 300, density: 0.10308335510844105 },
              ],
              percentiles: { p75: 25 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7085169821104472 },
                { start: 2500, end: 4000, density: 0.15264454239045863 },
                { start: 4000, density: 0.1388384754990942 },
              ],
              percentiles: { p75: 2773 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9303515215110177 },
                { start: "0.10", end: "0.25", density: 0.032004197271773345 },
                { start: "0.25", density: 0.037644281217208905 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.39603960396039534 },
                { start: 200, end: 500, density: 0.3373118133731175 },
                { start: 500, density: 0.2666485826664871 },
              ],
              percentiles: { p75: 538 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4417507535054382 },
                { start: 800, end: 1800, density: 0.39444371641986614 },
                { start: 1800, density: 0.16380553007469564 },
              ],
              percentiles: { p75: 1429 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6227082242011512 },
                { start: 1800, end: 3000, density: 0.20625982189628037 },
                { start: 3000, density: 0.17103195390256842 },
              ],
              percentiles: { p75: 2415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 2415, lcp: 2773, cls: "0.00", fid: 25 },
      timestamp: 1662226261933,
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
                { start: 0, end: 2500, density: 0.6435287057411478 },
                { start: 2500, end: 4000, density: 0.1643328665733145 },
                { start: 4000, density: 0.19213842768553768 },
              ],
              percentiles: { p75: 3438 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8892110788921108 },
                { start: "0.10", end: "0.25", density: 0.05529447055294471 },
                { start: "0.25", density: 0.0554944505549445 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4688000000000004 },
                { start: 200, end: 500, density: 0.3807000000000004 },
                { start: 500, density: 0.15049999999999927 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5689862027594476 },
                { start: 800, end: 1800, density: 0.21395720855828818 },
                { start: 1800, density: 0.21705658868226438 },
              ],
              percentiles: { p75: 1605 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6269373062693745 },
                { start: 1800, end: 3000, density: 0.13798620137986234 },
                { start: 3000, density: 0.2350764923507632 },
              ],
              percentiles: { p75: 2875 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9494 },
                { start: 100, end: 300, density: 0.0401 },
                { start: 300, density: 0.01050000000000001 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2875, lcp: 3438, cls: "0.00", fid: 14 },
      timestamp: 1662226261933,
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
                { start: "0.00", end: "0.10", density: 0.6881999999999999 },
                { start: "0.10", end: "0.25", density: 0.10619999999999999 },
                { start: "0.25", density: 0.20560000000000014 },
              ],
              percentiles: { p75: "0.18" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5476547654765469 },
                { start: 800, end: 1800, density: 0.21842184218421812 },
                { start: 1800, density: 0.23392339233923495 },
              ],
              percentiles: { p75: 1667 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5290412876137152 },
                { start: 1800, end: 3000, density: 0.1416575027491751 },
                { start: 3000, density: 0.3293012096371096 },
              ],
              percentiles: { p75: 3585 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469 },
                { start: 100, end: 300, density: 0.03690000000000001 },
                { start: 300, density: 0.01620000000000001 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5487402519496114 },
                { start: 2500, end: 4000, density: 0.20270945810837873 },
                { start: 4000, density: 0.2485502899420098 },
              ],
              percentiles: { p75: 3930 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3585, lcp: 3930, cls: "0.18", fid: 13 },
      timestamp: 1662226261934,
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
                { start: 0, end: 200, density: 0.49652391546162433 },
                { start: 200, end: 500, density: 0.35414349276974444 },
                { start: 500, density: 0.14933259176863115 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6597232337946103 },
                { start: 800, end: 1800, density: 0.3026948288419518 },
                { start: 1800, density: 0.03758193736343781 },
              ],
              percentiles: { p75: 961 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8858473260900239 },
                { start: 1800, end: 3000, density: 0.09087060815577816 },
                { start: 3000, density: 0.023282065754197907 },
              ],
              percentiles: { p75: 1378 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9562391681109185 },
                { start: 100, end: 300, density: 0.022385904101675333 },
                { start: 300, density: 0.021374927787406194 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9179544815959539 },
                { start: 2500, end: 4000, density: 0.06293902781680244 },
                { start: 4000, density: 0.019106490587243587 },
              ],
              percentiles: { p75: 1771 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9631251766035603 },
                { start: "0.10", end: "0.25", density: 0.02853913534896863 },
                { start: "0.25", density: 0.00833568804747104 },
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
      extractedResults: { fcp: 1378, lcp: 1771, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.9413010007698228 },
                { start: "0.10", end: "0.25", density: 0.03829869130100077 },
                { start: "0.25", density: 0.020400307929176287 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5558816888688194 },
                { start: 200, end: 500, density: 0.36531948521110874 },
                { start: 500, density: 0.078798825920072 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30729783037475333 },
                { start: 800, end: 1800, density: 0.4041420118343194 },
                { start: 1800, density: 0.28856015779092736 },
              ],
              percentiles: { p75: 1869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5215301806997311 },
                { start: 1800, end: 3000, density: 0.28431372549019623 },
                { start: 3000, density: 0.1941560938100728 },
              ],
              percentiles: { p75: 2702 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548118737001324 },
                { start: 100, end: 300, density: 0.04518812629986766 },
                { start: 300 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6586166924265843 },
                { start: 2500, end: 4000, density: 0.24323802163833083 },
                { start: 4000, density: 0.09814528593508501 },
              ],
              percentiles: { p75: 2905 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2702, lcp: 2905, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.9494949494949495 },
                { start: "0.10", end: "0.25", density: 0.036403640364036406 },
                { start: "0.25", density: 0.014101410141014094 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4704470447044703 },
                { start: 200, end: 500, density: 0.3841384138413841 },
                { start: 500, density: 0.1454145414541457 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.806980698069807 },
                { start: 800, end: 1800, density: 0.1629162916291629 },
                { start: 1800, density: 0.0301030103010301 },
              ],
              percentiles: { p75: 730 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.883453381352541 },
                { start: 1800, end: 3000, density: 0.0769307723089236 },
                { start: 3000, density: 0.03961584633853538 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189162167566486 },
                { start: 100, end: 300, density: 0.024595080983803242 },
                { start: 300, density: 0.0564887022595481 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.90265 },
                { start: 2500, end: 4000, density: 0.06625 },
                { start: 4000, density: 0.031100000000000027 },
              ],
              percentiles: { p75: 1727 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1364, lcp: 1727, cls: "0.00", fid: 14 },
      timestamp: 1662226261934,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9693863021500783 },
                { start: 100, end: 300, density: 0.021500783141107788 },
                { start: 300, density: 0.00911291470881389 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7597535934291585 },
                { start: 2500, end: 4000, density: 0.14798083504449017 },
                { start: 4000, density: 0.09226557152635141 },
              ],
              percentiles: { p75: 2474 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9609053497942386 },
                { start: "0.10", end: "0.25", density: 0.01728395061728395 },
                { start: "0.25", density: 0.021810699588477363 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5628246525340446 },
                { start: 200, end: 500, density: 0.36094342271514823 },
                { start: 500, density: 0.07623192475080715 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5182683027712665 },
                { start: 800, end: 1800, density: 0.3686750310216459 },
                { start: 1800, density: 0.11305666620708756 },
              ],
              percentiles: { p75: 1254 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6836552952459232 },
                { start: 1800, end: 3000, density: 0.18988902589395779 },
                { start: 3000, density: 0.12645567886011905 },
              ],
              percentiles: { p75: 2122 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 2122, lcp: 2474, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5476547654765469 },
                { start: 800, end: 1800, density: 0.21842184218421812 },
                { start: 1800, density: 0.23392339233923495 },
              ],
              percentiles: { p75: 1722 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5290412876137152 },
                { start: 1800, end: 3000, density: 0.1416575027491751 },
                { start: 3000, density: 0.3293012096371096 },
              ],
              percentiles: { p75: 3773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469 },
                { start: 100, end: 300, density: 0.03690000000000001 },
                { start: 300, density: 0.01620000000000001 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5487402519496114 },
                { start: 2500, end: 4000, density: 0.20270945810837873 },
                { start: 4000, density: 0.2485502899420098 },
              ],
              percentiles: { p75: 4026 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6881999999999999 },
                { start: "0.10", end: "0.25", density: 0.10619999999999999 },
                { start: "0.25", density: 0.20560000000000014 },
              ],
              percentiles: { p75: "0.17" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3773, lcp: 4026, cls: "0.17", fid: 14 },
      timestamp: 1662226261934,
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
                { start: 0, end: 100, density: 0.935387077415483 },
                { start: 100, end: 300, density: 0.045609121824364864 },
                { start: 300, density: 0.019003800760152078 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8269673032696728 },
                { start: 2500, end: 4000, density: 0.11703829617038292 },
                { start: 4000, density: 0.055994400559944216 },
              ],
              percentiles: { p75: 2159 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9115911591159117 },
                { start: "0.10", end: "0.25", density: 0.07630763076307631 },
                { start: "0.25", density: 0.012101210121012104 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47470000000000073 },
                { start: 200, end: 500, density: 0.3521000000000006 },
                { start: 500, density: 0.17319999999999872 },
              ],
              percentiles: { p75: 400 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6080608060806079 },
                { start: 800, end: 1800, density: 0.3316331633163316 },
                { start: 1800, density: 0.06030603060306048 },
              ],
              percentiles: { p75: 1055 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7290541891621674 },
                { start: 1800, end: 3000, density: 0.18786242751449705 },
                { start: 3000, density: 0.08308338332333574 },
              ],
              percentiles: { p75: 1875 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1875, lcp: 2159, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
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
                { start: 0, end: 2500, density: 0.9348630273945211 },
                { start: 2500, end: 4000, density: 0.049640071985602885 },
                { start: 4000, density: 0.01549690061987602 },
              ],
              percentiles: { p75: 1699 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8615861586158615 },
                { start: "0.10", end: "0.25", density: 0.1164116411641164 },
                { start: "0.25", density: 0.022002200220021997 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6160464185674268 },
                { start: 200, end: 500, density: 0.2869147659063625 },
                { start: 500, density: 0.09703881552621076 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7981605518344497 },
                { start: 800, end: 1800, density: 0.18404478656403078 },
                { start: 1800, density: 0.017794661601519563 },
              ],
              percentiles: { p75: 771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9184081591840816 },
                { start: 1800, end: 3000, density: 0.06599340065993398 },
                { start: 3000, density: 0.015598440155984388 },
              ],
              percentiles: { p75: 1295 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9741974197419743 },
                { start: 100, end: 300, density: 0.0158015801580158 },
                { start: 300, density: 0.010001000100010001 },
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
      extractedResults: { fcp: 1295, lcp: 1699, cls: "0.02", fid: 12 },
      timestamp: 1662226261934,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571131381020963 },
                { start: 100, end: 300, density: 0.027684429508721402 },
                { start: 300, density: 0.015202432389182296 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6724324324324331 },
                { start: 2500, end: 4000, density: 0.181776061776062 },
                { start: 4000, density: 0.14579150579150477 },
              ],
              percentiles: { p75: 2988 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9415604600559527 },
                { start: "0.10", end: "0.25", density: 0.02984146720547094 },
                { start: "0.25", density: 0.028598072738576306 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5712651193200392 },
                { start: 200, end: 500, density: 0.339980385746976 },
                { start: 500, density: 0.08875449493298489 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4000000000000003 },
                { start: 800, end: 1800, density: 0.3846875000000002 },
                { start: 1800, density: 0.21531249999999955 },
              ],
              percentiles: { p75: 1660 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5923398976585524 },
                { start: 1800, end: 3000, density: 0.21166072259265029 },
                { start: 3000, density: 0.1959993797487973 },
              ],
              percentiles: { p75: 2639 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2639, lcp: 2988, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
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
                { start: 0, end: 800, density: 0.6314157078539269 },
                { start: 800, end: 1800, density: 0.2784392196098048 },
                { start: 1800, density: 0.09014507253626818 },
              ],
              percentiles: { p75: 1067 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7475242572771823 },
                { start: 1800, end: 3000, density: 0.1496448934680402 },
                { start: 3000, density: 0.10283084925477742 },
              ],
              percentiles: { p75: 1842 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9755024497550245 },
                { start: 100, end: 300, density: 0.0176982301769823 },
                { start: 300, density: 0.0067993200679931825 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7792675605363218 },
                { start: 2500, end: 4000, density: 0.13338002801681012 },
                { start: 4000, density: 0.08735241144686809 },
              ],
              percentiles: { p75: 2353 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8768630589176754 },
                { start: "0.10", end: "0.25", density: 0.09402820846253876 },
                { start: "0.25", density: 0.029108732619785933 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7898630410876736 },
                { start: 200, end: 500, density: 0.1617514745576327 },
                { start: 500, density: 0.0483854843546937 },
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
      extractedResults: { fcp: 1842, lcp: 2353, cls: "0.04", fid: 12 },
      timestamp: 1662226261934,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7400434467776972 },
                { start: 1800, end: 3000, density: 0.1833816075307748 },
                { start: 3000, density: 0.07657494569152806 },
              ],
              percentiles: { p75: 1880 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9648981238652411 },
                { start: 100, end: 300, density: 0.010691950776679445 },
                { start: 300, density: 0.024409925358079433 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7837426062018282 },
                { start: 2500, end: 4000, density: 0.17126725219573405 },
                { start: 4000, density: 0.044990141602437764 },
              ],
              percentiles: { p75: 2359 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9223512336719885 },
                { start: "0.10", end: "0.25", density: 0.05696661828737301 },
                { start: "0.25", density: 0.0206821480406386 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6827316379157032 },
                { start: 200, end: 500, density: 0.22407967277254134 },
                { start: 500, density: 0.09318868931175531 },
              ],
              percentiles: { p75: 235 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6409608091024019 },
                { start: 800, end: 1800, density: 0.2920353982300885 },
                { start: 1800, density: 0.06700379266750944 },
              ],
              percentiles: { p75: 1009 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1880, lcp: 2359, cls: "0.00", fid: 12 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.9600848197580141 },
                { start: "0.10", end: "0.25", density: 0.017837096170637393 },
                { start: "0.25", density: 0.0220780840713484 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5909972836631746 },
                { start: 200, end: 500, density: 0.2999611951882036 },
                { start: 500, density: 0.10904152114862194 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4801992528019923 },
                { start: 800, end: 1800, density: 0.36338729763387284 },
                { start: 1800, density: 0.15641344956413486 },
              ],
              percentiles: { p75: 1436 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6349681767128417 },
                { start: 1800, end: 3000, density: 0.21577436665418695 },
                { start: 3000, density: 0.1492574566329713 },
              ],
              percentiles: { p75: 2306 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9506381870278717 },
                { start: 100, end: 300, density: 0.021620213597290962 },
                { start: 300, density: 0.027741599374837268 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7383258817685049 },
                { start: 2500, end: 4000, density: 0.17461500248385498 },
                { start: 4000, density: 0.08705911574764012 },
              ],
              percentiles: { p75: 2570 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 2306, lcp: 2570, cls: "0.00", fid: 14 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.9238720661559041 },
                { start: "0.10", end: "0.25", density: 0.044874133527909525 },
                { start: "0.25", density: 0.031253800316186346 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40253679550077814 },
                { start: 200, end: 500, density: 0.4174943161421566 },
                { start: 500, density: 0.17996888835706526 },
              ],
              percentiles: { p75: 404 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7697815533980585 },
                { start: 800, end: 1800, density: 0.18434466019417484 },
                { start: 1800, density: 0.0458737864077666 },
              ],
              percentiles: { p75: 774 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8331304771178184 },
                { start: 1800, end: 3000, density: 0.11112463485881201 },
                { start: 3000, density: 0.05574488802336957 },
              ],
              percentiles: { p75: 1506 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9479733817301874 },
                { start: 100, end: 300, density: 0.025529340592861455 },
                { start: 300, density: 0.0264972776769511 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8821667681071208 },
                { start: 2500, end: 4000, density: 0.07668898356664634 },
                { start: 4000, density: 0.041144248326232834 },
              ],
              percentiles: { p75: 1822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1506, lcp: 1822, cls: "0.00", fid: 13 },
      timestamp: 1662226261934,
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
                { start: 0, end: 800, density: 0.5789413382218147 },
                { start: 800, end: 1800, density: 0.3244729605866177 },
                { start: 1800, density: 0.09658570119156765 },
              ],
              percentiles: { p75: 1122 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.732036613272311 },
                { start: 1800, end: 3000, density: 0.16292906178489694 },
                { start: 3000, density: 0.10503432494279209 },
              ],
              percentiles: { p75: 1895 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.918002537192942 },
                { start: 100, end: 300, density: 0.0506285318879022 },
                { start: 300, density: 0.031368930919155796 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.796957520091848 },
                { start: 2500, end: 4000, density: 0.1319747416762341 },
                { start: 4000, density: 0.07106773823191796 },
              ],
              percentiles: { p75: 2266 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9280073251688223 },
                { start: "0.10", end: "0.25", density: 0.028385029186219535 },
                { start: "0.25", density: 0.043607645644958164 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.33233807992650466 },
                { start: 200, end: 500, density: 0.4257005052824991 },
                { start: 500, density: 0.24196141479099623 },
              ],
              percentiles: { p75: 486 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1895, lcp: 2266, cls: "0.00", fid: 16 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.9414941494149415 },
                { start: "0.10", end: "0.25", density: 0.032403240324032405 },
                { start: "0.25", density: 0.02610261026102612 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6428285657131427 },
                { start: 200, end: 500, density: 0.2770554110822165 },
                { start: 500, density: 0.08011602320464065 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49144914491449104 },
                { start: 800, end: 1800, density: 0.37513751375137494 },
                { start: 1800, density: 0.13341334133413407 },
              ],
              percentiles: { p75: 1307 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6503398640543774 },
                { start: 1800, end: 3000, density: 0.20811675329868026 },
                { start: 3000, density: 0.1415433826469424 },
              ],
              percentiles: { p75: 2248 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9598959895989598 },
                { start: 100, end: 300, density: 0.03530353035303531 },
                { start: 300, density: 0.0048004800480048 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7408963585434173 },
                { start: 2500, end: 4000, density: 0.15196078431372537 },
                { start: 4000, density: 0.10714285714285753 },
              ],
              percentiles: { p75: 2621 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 2248, lcp: 2621, cls: "0.00", fid: 12 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.884011598840116 },
                { start: "0.10", end: "0.25", density: 0.06919308069193081 },
                { start: "0.25", density: 0.04679532046795322 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5572557255725572 },
                { start: 200, end: 500, density: 0.32653265326532666 },
                { start: 500, density: 0.11621162116211618 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.492544781346943 },
                { start: 800, end: 1800, density: 0.3767637346142302 },
                { start: 1800, density: 0.13069148403882688 },
              ],
              percentiles: { p75: 1281 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6386554621848735 },
                { start: 1800, end: 3000, density: 0.20108043217286892 },
                { start: 3000, density: 0.16026410564225776 },
              ],
              percentiles: { p75: 2343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9518096380723856 },
                { start: 100, end: 300, density: 0.03019396120775845 },
                { start: 300, density: 0.017996400719855976 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7134707766212968 },
                { start: 2500, end: 4000, density: 0.1618294635708566 },
                { start: 4000, density: 0.12469975980784671 },
              ],
              percentiles: { p75: 2787 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 2343, lcp: 2787, cls: "0.01", fid: 12 },
      timestamp: 1662226261934,
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
                { start: "0.00", end: "0.10", density: 0.8452845284528453 },
                { start: "0.10", end: "0.25", density: 0.1125112511251125 },
                { start: "0.25", density: 0.04220422042204219 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44778955791158254 },
                { start: 200, end: 500, density: 0.3061612322464494 },
                { start: 500, density: 0.24604920984196801 },
              ],
              percentiles: { p75: 491 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4762428728618579 },
                { start: 800, end: 1800, density: 0.3626087826347899 },
                { start: 1800, density: 0.16114834450335225 },
              ],
              percentiles: { p75: 1457 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5413624087226162 },
                { start: 1800, end: 3000, density: 0.22976893067920343 },
                { start: 3000, density: 0.22886866059818053 },
              ],
              percentiles: { p75: 2898 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9220844168833766 },
                { start: 100, end: 300, density: 0.05301060212042409 },
                { start: 300, density: 0.0249049809961992 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5813999999999986 },
                { start: 2500, end: 4000, density: 0.2338999999999995 },
                { start: 4000, density: 0.18470000000000183 },
              ],
              percentiles: { p75: 3485 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: { fcp: 2898, lcp: 3485, cls: "0.05", fid: 16 },
      timestamp: 1662226261935,
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
                { start: "0.00", end: "0.10", density: 0.9226000000000001 },
                { start: "0.10", end: "0.25", density: 0.039900000000000005 },
                { start: "0.25", density: 0.037499999999999985 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5752000000000004 },
                { start: 200, end: 500, density: 0.3308000000000002 },
                { start: 500, density: 0.0939999999999995 },
              ],
              percentiles: { p75: 299 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42489999999999944 },
                { start: 800, end: 1800, density: 0.4325999999999994 },
                { start: 1800, density: 0.14250000000000115 },
              ],
              percentiles: { p75: 1496 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5792579257925794 },
                { start: 1800, end: 3000, density: 0.254025402540254 },
                { start: 3000, density: 0.1667166716671667 },
              ],
              percentiles: { p75: 2545 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746025397460253 },
                { start: 100, end: 300, density: 0.021097890210978902 },
                { start: 300, density: 0.0042995700429957024 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6727999999999996 },
                { start: 2500, end: 4000, density: 0.20589999999999997 },
                { start: 4000, density: 0.12130000000000028 },
              ],
              percentiles: { p75: 2909 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 2545, lcp: 2909, cls: "0.02", fid: 11 },
      timestamp: 1662226261935,
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
                { start: 0, end: 2500, density: 0.5805580558055812 },
                { start: 2500, end: 4000, density: 0.18841884188418856 },
                { start: 4000, density: 0.23102310231023035 },
              ],
              percentiles: { p75: 3883 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8835 },
                { start: "0.10", end: "0.25", density: 0.0708 },
                { start: "0.25", density: 0.04569999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4874512548745127 },
                { start: 800, end: 1800, density: 0.28047195280471965 },
                { start: 1800, density: 0.23207679232076767 },
              ],
              percentiles: { p75: 1777 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5118511851185107 },
                { start: 1800, end: 3000, density: 0.183418341834183 },
                { start: 3000, density: 0.3047304730473064 },
              ],
              percentiles: { p75: 3723 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: { fcp: 3723, lcp: 3883, cls: "0.01" },
      timestamp: 1662226261935,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565791646029388 },
                { start: 100, end: 300, density: 0.023113752682846298 },
                { start: 300, density: 0.020307082714214927 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6808770785784163 },
                { start: 2500, end: 4000, density: 0.20842843169220765 },
                { start: 4000, density: 0.11069448972937619 },
              ],
              percentiles: { p75: 2823 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9062295081967212 },
                { start: "0.10", end: "0.25", density: 0.0501639344262295 },
                { start: "0.25", density: 0.04360655737704914 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4921657381615593 },
                { start: 200, end: 500, density: 0.3520194986072419 },
                { start: 500, density: 0.1558147632311987 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37665343915343896 },
                { start: 800, end: 1800, density: 0.4682539682539679 },
                { start: 1800, density: 0.15509259259259314 },
              ],
              percentiles: { p75: 1462 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.581456518165378 },
                { start: 1800, end: 3000, density: 0.24905474272562836 },
                { start: 3000, density: 0.16948873910899365 },
              ],
              percentiles: { p75: 2507 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2507, lcp: 2823, cls: "0.00", fid: 13 },
      timestamp: 1662226261935,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37665343915343896 },
                { start: 800, end: 1800, density: 0.4682539682539679 },
                { start: 1800, density: 0.15509259259259314 },
              ],
              percentiles: { p75: 1462 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.581456518165378 },
                { start: 1800, end: 3000, density: 0.24905474272562836 },
                { start: 3000, density: 0.16948873910899365 },
              ],
              percentiles: { p75: 2507 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565791646029388 },
                { start: 100, end: 300, density: 0.023113752682846298 },
                { start: 300, density: 0.020307082714214927 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6808770785784163 },
                { start: 2500, end: 4000, density: 0.20842843169220765 },
                { start: 4000, density: 0.11069448972937619 },
              ],
              percentiles: { p75: 2823 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9062295081967212 },
                { start: "0.10", end: "0.25", density: 0.0501639344262295 },
                { start: "0.25", density: 0.04360655737704914 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4921657381615593 },
                { start: 200, end: 500, density: 0.3520194986072419 },
                { start: 500, density: 0.1558147632311987 },
              ],
              percentiles: { p75: 359 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2507, lcp: 2823, cls: "0.00", fid: 13 },
      timestamp: 1662226261935,
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
                { start: "0.00", end: "0.10", density: 0.9785842523724032 },
                { start: "0.10", end: "0.25", density: 0.008591946652987946 },
                { start: "0.25", density: 0.01282380097460888 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4359101625511849 },
                { start: 200, end: 500, density: 0.41394713984365294 },
                { start: 500, density: 0.15014269760516233 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5620623806492684 },
                { start: 800, end: 1800, density: 0.3217059197963083 },
                { start: 1800, density: 0.1162316995544234 },
              ],
              percentiles: { p75: 1295 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6846893017296605 },
                { start: 1800, end: 3000, density: 0.18129404228058932 },
                { start: 3000, density: 0.13401665598975016 },
              ],
              percentiles: { p75: 2123 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9377582968065122 },
                { start: 100, end: 300, density: 0.03143393863494052 },
                { start: 300, density: 0.03080776455854724 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7734495130702206 },
                { start: 2500, end: 4000, density: 0.1462070732957458 },
                { start: 4000, density: 0.08034341363403359 },
              ],
              percentiles: { p75: 2400 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 2123, lcp: 2400, cls: "0.00", fid: 13 },
      timestamp: 1662226261935,
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
                { start: "0.00", end: "0.10", density: 0.9523952395239523 },
                { start: "0.10", end: "0.25", density: 0.034003400340034004 },
                { start: "0.25", density: 0.013601360136013615 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5336466353364664 },
                { start: 200, end: 500, density: 0.34276572342765715 },
                { start: 500, density: 0.12358764123587654 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6091827548264481 },
                { start: 800, end: 1800, density: 0.2913874162248676 },
                { start: 1800, density: 0.0994298289486842 },
              ],
              percentiles: { p75: 1179 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7281543691261745 },
                { start: 1800, end: 3000, density: 0.15696860627874423 },
                { start: 3000, density: 0.11487702459508137 },
              ],
              percentiles: { p75: 1920 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9473842152645794 },
                { start: 100, end: 300, density: 0.027308192457737322 },
                { start: 300, density: 0.025307592277683266 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7935087017403476 },
                { start: 2500, end: 4000, density: 0.1318763752750549 },
                { start: 4000, density: 0.07461492298459746 },
              ],
              percentiles: { p75: 2285 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1920, lcp: 2285, cls: "0.01", fid: 12 },
      timestamp: 1662226262076,
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
                { start: "0.00", end: "0.10", density: 0.9715129151291512 },
                { start: "0.10", end: "0.25", density: 0.01712177121771218 },
                { start: "0.25", density: 0.01136531365313653 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4736995059575705 },
                { start: 200, end: 500, density: 0.38709677419354843 },
                { start: 500, density: 0.13920371984888108 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7479993960440887 },
                { start: 800, end: 1800, density: 0.22210478635059647 },
                { start: 1800, density: 0.02989581760531476 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8921828908554572 },
                { start: 1800, end: 3000, density: 0.07831858407079646 },
                { start: 3000, density: 0.02949852507374624 },
              ],
              percentiles: { p75: 1336 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512231954092418 },
                { start: 100, end: 300, density: 0.032769556025369975 },
                { start: 300, density: 0.01600724856538809 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9222943084635801 },
                { start: 2500, end: 4000, density: 0.05632556767915068 },
                { start: 4000, density: 0.021380123857269232 },
              ],
              percentiles: { p75: 1749 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1336, lcp: 1749, cls: "0.00", fid: 14 },
      timestamp: 1662226262180,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.914882976595319 },
                { start: 1800, end: 3000, density: 0.0643128625725145 },
                { start: 3000, density: 0.02080416083216643 },
              ],
              percentiles: { p75: 1218 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7888211178882112 },
                { start: "0.10", end: "0.25", density: 0.19398060193980604 },
                { start: "0.25", density: 0.017198280171982803 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8248175182481752 },
                { start: 800, end: 1800, density: 0.16428357164283572 },
                { start: 1800, density: 0.0108989101089891 },
              ],
              percentiles: { p75: 711 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1218, cls: "0.06" },
      timestamp: 1662226262180,
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
                { start: 0, end: 100, density: 0.9669966996699669 },
                { start: 100, end: 300, density: 0.019101910191019096 },
                { start: 300, density: 0.01390139013901388 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6967893578715748 },
                { start: 2500, end: 4000, density: 0.187987597519504 },
                { start: 4000, density: 0.11522304460892119 },
              ],
              percentiles: { p75: 2843 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.789021097890211 },
                { start: "0.10", end: "0.25", density: 0.1454854514548545 },
                { start: "0.25", density: 0.06549345065493449 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6540037988603417 },
                { start: 200, end: 500, density: 0.23892832150354884 },
                { start: 500, density: 0.1070678796361095 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47235829251224604 },
                { start: 800, end: 1800, density: 0.4086773967809656 },
                { start: 1800, density: 0.11896431070678824 },
              ],
              percentiles: { p75: 1340 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6654003798860351 },
                { start: 1800, end: 3000, density: 0.20473857842647233 },
                { start: 3000, density: 0.1298610416874927 },
              ],
              percentiles: { p75: 2229 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2229, lcp: 2843, cls: "0.07", fid: 11 },
      timestamp: 1662226262180,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9531906381276255 },
                { start: 2500, end: 4000, density: 0.033706741348269655 },
                { start: 4000, density: 0.013102620524104795 },
              ],
              percentiles: { p75: 1501 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8652134786521348 },
                { start: "0.10", end: "0.25", density: 0.10098990100989902 },
                { start: "0.25", density: 0.03379662033796616 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6555999999999996 },
                { start: 200, end: 500, density: 0.24489999999999995 },
                { start: 500, density: 0.0995000000000003 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8695000000000002 },
                { start: 800, end: 1800, density: 0.11490000000000002 },
                { start: 1800, density: 0.015599999999999977 },
              ],
              percentiles: { p75: 637 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9437887577515504 },
                { start: 1800, end: 3000, density: 0.039407881576315265 },
                { start: 3000, density: 0.016803360672134456 },
              ],
              percentiles: { p75: 1107 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9717943588717743 },
                { start: 100, end: 300, density: 0.01830366073214643 },
                { start: 300, density: 0.009901980396079205 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 1107, lcp: 1501, cls: "0.05", fid: 11 },
      timestamp: 1662226262180,
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
                { start: "0.00", end: "0.10", density: 0.9111998968939297 },
                { start: "0.10", end: "0.25", density: 0.055677277999742245 },
                { start: "0.25", density: 0.03312282510632817 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4258373205741629 },
                { start: 200, end: 500, density: 0.35871496924128526 },
                { start: 500, density: 0.2154477101845519 },
              ],
              percentiles: { p75: 446 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2488425925925932 },
                { start: 800, end: 1800, density: 0.3184156378600831 },
                { start: 1800, density: 0.43274176954732385 },
              ],
              percentiles: { p75: 2414 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39356084996780744 },
                { start: 1800, end: 3000, density: 0.2775273663876391 },
                { start: 3000, density: 0.3289117836445534 },
              ],
              percentiles: { p75: 3573 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9100977198697067 },
                { start: 100, end: 300, density: 0.041954397394136804 },
                { start: 300, density: 0.04794788273615652 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5118465104300787 },
                { start: 2500, end: 4000, density: 0.26706155034766854 },
                { start: 4000, density: 0.22109193922225284 },
              ],
              percentiles: { p75: 3794 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 3573, lcp: 3794, cls: "0.01", fid: 18 },
      timestamp: 1662226262180,
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
                { start: 0, end: 100, density: 0.9232439335887611 },
                { start: 100, end: 300, density: 0.04942528735632184 },
                { start: 300, density: 0.027330779054916987 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7332745369787073 },
                { start: 2500, end: 4000, density: 0.1539624543278316 },
                { start: 4000, density: 0.11276300869346113 },
              ],
              percentiles: { p75: 2641 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9300919511273461 },
                { start: "0.10", end: "0.25", density: 0.04408615694671873 },
                { start: "0.25", density: 0.02582189192593524 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3562820512820521 },
                { start: 200, end: 500, density: 0.42769230769230876 },
                { start: 500, density: 0.2160256410256392 },
              ],
              percentiles: { p75: 445 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5514408493427698 },
                { start: 800, end: 1800, density: 0.31407987866531817 },
                { start: 1800, density: 0.1344792719919119 },
              ],
              percentiles: { p75: 1244 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6488799395922473 },
                { start: 1800, end: 3000, density: 0.18336269821293721 },
                { start: 3000, density: 0.16775736219481543 },
              ],
              percentiles: { p75: 2359 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 2359, lcp: 2641, cls: "0.00", fid: 15 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yarabrasil.com.br" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.38463324048282266 },
                { start: 200, end: 500, density: 0.34041318477251625 },
                { start: 500, density: 0.27495357474466114 },
              ],
              percentiles: { p75: 538 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4522314804246085 },
                { start: 800, end: 1800, density: 0.37256021002168654 },
                { start: 1800, density: 0.17520830955370506 },
              ],
              percentiles: { p75: 1521 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5115613553113552 },
                { start: 1800, end: 3000, density: 0.23878205128205124 },
                { start: 3000, density: 0.24965659340659355 },
              ],
              percentiles: { p75: 3037 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9119311483140771 },
                { start: 100, end: 300, density: 0.06024522518273993 },
                { start: 300, density: 0.02782362650318309 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.558325709057639 },
                { start: 2500, end: 4000, density: 0.2474839890210428 },
                { start: 4000, density: 0.19419030192131823 },
              ],
              percentiles: { p75: 3573 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.858451672010994 },
                { start: "0.10", end: "0.25", density: 0.10066422354557948 },
                { start: "0.25", density: 0.04088410444342649 },
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
      extractedResults: { fcp: 3037, lcp: 3573, cls: "0.04", fid: 18 },
      timestamp: 1662226262181,
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
                { start: 0, end: 800, density: 0.7047295270472952 },
                { start: 800, end: 1800, density: 0.23837616238376155 },
                { start: 1800, density: 0.05689431056894328 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8713257348530296 },
                { start: 1800, end: 3000, density: 0.10377924415116976 },
                { start: 3000, density: 0.024895020995800748 },
              ],
              percentiles: { p75: 1370 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9599040095990401 },
                { start: 100, end: 300, density: 0.0194980501949805 },
                { start: 300, density: 0.020597940205979413 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8971397139713969 },
                { start: 2500, end: 4000, density: 0.07795779577957798 },
                { start: 4000, density: 0.02490249024902508 },
              ],
              percentiles: { p75: 1790 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.867 },
                { start: "0.10", end: "0.25", density: 0.1168 },
                { start: "0.25", density: 0.01620000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6197760447910416 },
                { start: 200, end: 500, density: 0.24695060987802434 },
                { start: 500, density: 0.13327334533093405 },
              ],
              percentiles: { p75: 324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1370, lcp: 1790, cls: "0.04", fid: 12 },
      timestamp: 1662226262181,
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
                { start: 0, end: 800, density: 0.5865413458654134 },
                { start: 800, end: 1800, density: 0.36496350364963515 },
                { start: 1800, density: 0.0484951504849515 },
              ],
              percentiles: { p75: 1018 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8376512953886166 },
                { start: 1800, end: 3000, density: 0.12813844153245976 },
                { start: 3000, density: 0.034210263078923706 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532046795320467 },
                { start: 100, end: 300, density: 0.027897210278972105 },
                { start: 300, density: 0.018898110188981215 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.884861513848615 },
                { start: 2500, end: 4000, density: 0.08584141585841418 },
                { start: 4000, density: 0.02929707029297087 },
              ],
              percentiles: { p75: 1995 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9547 },
                { start: "0.10", end: "0.25", density: 0.0274 },
                { start: "0.25", density: 0.01790000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5155031006201235 },
                { start: 200, end: 500, density: 0.35237047409481864 },
                { start: 500, density: 0.1321264252850579 },
              ],
              percentiles: { p75: 329 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1574, lcp: 1995, cls: "0.00", fid: 12 },
      timestamp: 1662226262181,
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
                { start: "0.00", end: "0.10", density: 0.832983298329833 },
                { start: "0.10", end: "0.25", density: 0.09140914091409141 },
                { start: "0.25", density: 0.07560756075607566 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49999999999999967 },
                { start: 200, end: 500, density: 0.31059999999999977 },
                { start: 500, density: 0.1894000000000005 },
              ],
              percentiles: { p75: 413 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2831716828317171 },
                { start: 800, end: 1800, density: 0.39526047395260516 },
                { start: 1800, density: 0.3215678432156778 },
              ],
              percentiles: { p75: 2010 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4966000000000003 },
                { start: 1800, end: 3000, density: 0.3121000000000002 },
                { start: 3000, density: 0.1912999999999994 },
              ],
              percentiles: { p75: 2658 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.917008299170083 },
                { start: 100, end: 300, density: 0.028497150284971507 },
                { start: 300, density: 0.05449455054494546 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6224000000000001 },
                { start: 2500, end: 4000, density: 0.2615 },
                { start: 4000, density: 0.11609999999999983 },
              ],
              percentiles: { p75: 3151 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 2658, lcp: 3151, cls: "0.05", fid: 15 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.789021097890211 },
                { start: "0.10", end: "0.25", density: 0.1454854514548545 },
                { start: "0.25", density: 0.06549345065493449 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6540037988603417 },
                { start: 200, end: 500, density: 0.23892832150354884 },
                { start: 500, density: 0.1070678796361095 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47235829251224604 },
                { start: 800, end: 1800, density: 0.4086773967809656 },
                { start: 1800, density: 0.11896431070678824 },
              ],
              percentiles: { p75: 1340 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6654003798860351 },
                { start: 1800, end: 3000, density: 0.20473857842647233 },
                { start: 3000, density: 0.1298610416874927 },
              ],
              percentiles: { p75: 2229 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9669966996699669 },
                { start: 100, end: 300, density: 0.019101910191019096 },
                { start: 300, density: 0.01390139013901388 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6967893578715748 },
                { start: 2500, end: 4000, density: 0.187987597519504 },
                { start: 4000, density: 0.11522304460892119 },
              ],
              percentiles: { p75: 2843 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2229, lcp: 2843, cls: "0.07", fid: 11 },
      timestamp: 1662226262181,
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
                { start: 0, end: 1800, density: 0.7666406511316747 },
                { start: 1800, end: 3000, density: 0.15943806444419642 },
                { start: 3000, density: 0.07392128442412896 },
              ],
              percentiles: { p75: 1749 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9489911584674676 },
                { start: 100, end: 300, density: 0.03457265926093856 },
                { start: 300, density: 0.01643618227159381 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7856744393618208 },
                { start: 2500, end: 4000, density: 0.14068950128305255 },
                { start: 4000, density: 0.07363605935512663 },
              ],
              percentiles: { p75: 2330 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8234834968777877 },
                { start: "0.10", end: "0.25", density: 0.1422836752899197 },
                { start: "0.25", density: 0.0342328278322926 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5291035425447093 },
                { start: 200, end: 500, density: 0.35824125754641767 },
                { start: 500, density: 0.11265519990887302 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6751507032819822 },
                { start: 800, end: 1800, density: 0.2609957579816923 },
                { start: 1800, density: 0.06385353873632547 },
              ],
              percentiles: { p75: 953 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1749, lcp: 2330, cls: "0.04", fid: 15 },
      timestamp: 1662226262181,
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
                { start: 0, end: 800, density: 0.5476547654765469 },
                { start: 800, end: 1800, density: 0.21842184218421812 },
                { start: 1800, density: 0.23392339233923495 },
              ],
              percentiles: { p75: 1722 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5290412876137152 },
                { start: 1800, end: 3000, density: 0.1416575027491751 },
                { start: 3000, density: 0.3293012096371096 },
              ],
              percentiles: { p75: 3773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469 },
                { start: 100, end: 300, density: 0.03690000000000001 },
                { start: 300, density: 0.01620000000000001 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5487402519496114 },
                { start: 2500, end: 4000, density: 0.20270945810837873 },
                { start: 4000, density: 0.2485502899420098 },
              ],
              percentiles: { p75: 4026 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6881999999999999 },
                { start: "0.10", end: "0.25", density: 0.10619999999999999 },
                { start: "0.25", density: 0.20560000000000014 },
              ],
              percentiles: { p75: "0.17" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3773, lcp: 4026, cls: "0.17", fid: 14 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5622664255575648 },
                { start: 800, end: 1800, density: 0.38420735382760707 },
                { start: 1800, density: 0.053526220614828174 },
              ],
              percentiles: { p75: 1042 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8306928351856231 },
                { start: 1800, end: 3000, density: 0.136202411917711 },
                { start: 3000, density: 0.03310475289666589 },
              ],
              percentiles: { p75: 1607 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467077214590239 },
                { start: 100, end: 300, density: 0.03233064898152534 },
                { start: 300, density: 0.02096162955945066 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8941955313866886 },
                { start: 2500, end: 4000, density: 0.08145170823974467 },
                { start: 4000, density: 0.024352760373566776 },
              ],
              percentiles: { p75: 1964 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9765846736045413 },
                { start: "0.10", end: "0.25", density: 0.013363292336802272 },
                { start: "0.25", density: 0.010052034058656583 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44595704729491836 },
                { start: 200, end: 500, density: 0.4061729843915035 },
                { start: 500, density: 0.1478699683135781 },
              ],
              percentiles: { p75: 356 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1607, lcp: 1964, cls: "0.00", fid: 13 },
      timestamp: 1662226262181,
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
                { start: "0.00", end: "0.10", density: 0.9305930593059305 },
                { start: "0.10", end: "0.25", density: 0.049004900490049 },
                { start: "0.25", density: 0.020402040204020408 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6600339966003401 },
                { start: 200, end: 500, density: 0.24427557244275586 },
                { start: 500, density: 0.09569043095690405 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5295470452954709 },
                { start: 800, end: 1800, density: 0.33376662333766655 },
                { start: 1800, density: 0.13668633136686248 },
              ],
              percentiles: { p75: 1357 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6769323067693229 },
                { start: 1800, end: 3000, density: 0.19218078192180782 },
                { start: 3000, density: 0.13088691130886942 },
              ],
              percentiles: { p75: 2201 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602999999999998 },
                { start: 100, end: 300, density: 0.017199999999999997 },
                { start: 300, density: 0.022500000000000055 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7606021204240848 },
                { start: 2500, end: 4000, density: 0.16038207641528304 },
                { start: 4000, density: 0.07901580316063223 },
              ],
              percentiles: { p75: 2462 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 2201, lcp: 2462, cls: "0.01", fid: 12 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9562912582516501 },
                { start: 100, end: 300, density: 0.025705141028205633 },
                { start: 300, density: 0.018003600720144283 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8125312531253124 },
                { start: 2500, end: 4000, density: 0.12796279627962803 },
                { start: 4000, density: 0.05950595059505958 },
              ],
              percentiles: { p75: 2205 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8888 },
                { start: "0.10", end: "0.25", density: 0.08050000000000002 },
                { start: "0.25", density: 0.030700000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5096509650965096 },
                { start: 200, end: 500, density: 0.3331333133313331 },
                { start: 500, density: 0.1572157215721572 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.622075584883023 },
                { start: 800, end: 1800, density: 0.3034393121375723 },
                { start: 1800, density: 0.07448510297940476 },
              ],
              percentiles: { p75: 1051 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7665466906618674 },
                { start: 1800, end: 3000, density: 0.16046790641871625 },
                { start: 3000, density: 0.07298540291941619 },
              ],
              percentiles: { p75: 1754 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1754, lcp: 2205, cls: "0.01", fid: 12 },
      timestamp: 1662226262181,
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
                { start: "0.00", end: "0.10", density: 0.9154999999999999 },
                { start: "0.10", end: "0.25", density: 0.048999999999999995 },
                { start: "0.25", density: 0.035500000000000004 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.477 },
                { start: 200, end: 500, density: 0.3631000000000001 },
                { start: 500, density: 0.15989999999999993 },
              ],
              percentiles: { p75: 358 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47010000000000124 },
                { start: 800, end: 1800, density: 0.31570000000000076 },
                { start: 1800, density: 0.21419999999999803 },
              ],
              percentiles: { p75: 1632 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5309530953095302 },
                { start: 1800, end: 3000, density: 0.2105210521052102 },
                { start: 3000, density: 0.2585258525852596 },
              ],
              percentiles: { p75: 3245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374062593740625 },
                { start: 100, end: 300, density: 0.04309569043095691 },
                { start: 300, density: 0.01949805019498048 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5907909209079094 },
                { start: 2500, end: 4000, density: 0.19563043695630447 },
                { start: 4000, density: 0.2135786421357861 },
              ],
              percentiles: { p75: 3688 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3245, lcp: 3688, cls: "0.00", fid: 12 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5433145009416199 },
                { start: 800, end: 1800, density: 0.33866917765222876 },
                { start: 1800, density: 0.11801632140615147 },
              ],
              percentiles: { p75: 1239 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6717329990598548 },
                { start: 1800, end: 3000, density: 0.1919460984017546 },
                { start: 3000, density: 0.13632090253839063 },
              ],
              percentiles: { p75: 2170 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647457627118644 },
                { start: 100, end: 300, density: 0.02559322033898305 },
                { start: 300, density: 0.009661016949152532 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7399033213784492 },
                { start: 2500, end: 4000, density: 0.15655699360673608 },
                { start: 4000, density: 0.10353968501481471 },
              ],
              percentiles: { p75: 2571 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9274522093387653 },
                { start: "0.10", end: "0.25", density: 0.046850517079285496 },
                { start: "0.25", density: 0.02569727358194923 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6696990902729179 },
                { start: 200, end: 500, density: 0.2578726382085373 },
                { start: 500, density: 0.0724282715185449 },
              ],
              percentiles: { p75: 233 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: { fcp: 2170, lcp: 2571, cls: "0.00", fid: 15 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6239623962396244 },
                { start: 200, end: 500, density: 0.262926292629263 },
                { start: 500, density: 0.11311131113111257 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7115288471152884 },
                { start: 800, end: 1800, density: 0.2548745125487452 },
                { start: 1800, density: 0.03359664033596644 },
              ],
              percentiles: { p75: 883 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9020999999999999 },
                { start: 1800, end: 3000, density: 0.07739999999999998 },
                { start: 3000, density: 0.020500000000000008 },
              ],
              percentiles: { p75: 1323 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690876350540215 },
                { start: 100, end: 300, density: 0.01610644257703081 },
                { start: 300, density: 0.014805922368947627 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9177164567086582 },
                { start: 2500, end: 4000, density: 0.06378724255148971 },
                { start: 4000, density: 0.018496300739852093 },
              ],
              percentiles: { p75: 1757 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8742874287428742 },
                { start: "0.10", end: "0.25", density: 0.09800980098009801 },
                { start: "0.25", density: 0.027702770277027697 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 1323, lcp: 1757, cls: "0.03", fid: 11 },
      timestamp: 1662226262181,
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
                { start: 0, end: 800, density: 0.529347562454523 },
                { start: 800, end: 1800, density: 0.3435605141886973 },
                { start: 1800, density: 0.1270919233567797 },
              ],
              percentiles: { p75: 1261 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7261053906723189 },
                { start: 1800, end: 3000, density: 0.15324046032707428 },
                { start: 3000, density: 0.12065414900060677 },
              ],
              percentiles: { p75: 1979 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653004777470455 },
                { start: 100, end: 300, density: 0.021247171234598947 },
                { start: 300, density: 0.01345235101835556 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.781079772424646 },
                { start: 2500, end: 4000, density: 0.1263164265827381 },
                { start: 4000, density: 0.09260380099261593 },
              ],
              percentiles: { p75: 2328 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8665536449503511 },
                { start: "0.10", end: "0.25", density: 0.08718818115766529 },
                { start: "0.25", density: 0.04625817389198358 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6217228464419474 },
                { start: 200, end: 500, density: 0.2977528089887639 },
                { start: 500, density: 0.08052434456928872 },
              ],
              percentiles: { p75: 264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1979, lcp: 2328, cls: "0.01", fid: 14 },
      timestamp: 1662226262181,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48811013767208866 },
                { start: 1800, end: 3000, density: 0.3136420525657062 },
                { start: 3000, density: 0.19824780976220513 },
              ],
              percentiles: { p75: 2674 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.960392156862745 },
                { start: 100, end: 300, density: 0.03594771241830066 },
                { start: 300, density: 0.0036601307189542444 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6304456685027525 },
                { start: 2500, end: 4000, density: 0.23360040060090087 },
                { start: 4000, density: 0.13595393089634658 },
              ],
              percentiles: { p75: 3030 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9411247803163444 },
                { start: "0.10", end: "0.25", density: 0.034019583228722075 },
                { start: "0.25", density: 0.02485563645493346 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5151033386327504 },
                { start: 200, end: 500, density: 0.39321674615792257 },
                { start: 500, density: 0.09167991520932714 },
              ],
              percentiles: { p75: 322 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3415741675075679 },
                { start: 800, end: 1800, density: 0.4809535822401612 },
                { start: 1800, density: 0.17747225025227084 },
              ],
              percentiles: { p75: 1590 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2674, lcp: 3030, cls: "0.00", fid: 13 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.9715129151291512 },
                { start: "0.10", end: "0.25", density: 0.01712177121771218 },
                { start: "0.25", density: 0.01136531365313653 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4736995059575705 },
                { start: 200, end: 500, density: 0.38709677419354843 },
                { start: 500, density: 0.13920371984888108 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7479993960440887 },
                { start: 800, end: 1800, density: 0.22210478635059647 },
                { start: 1800, density: 0.02989581760531476 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8921828908554572 },
                { start: 1800, end: 3000, density: 0.07831858407079646 },
                { start: 3000, density: 0.02949852507374624 },
              ],
              percentiles: { p75: 1336 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512231954092418 },
                { start: 100, end: 300, density: 0.032769556025369975 },
                { start: 300, density: 0.01600724856538809 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9222943084635801 },
                { start: 2500, end: 4000, density: 0.05632556767915068 },
                { start: 4000, density: 0.021380123857269232 },
              ],
              percentiles: { p75: 1749 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1336, lcp: 1749, cls: "0.00", fid: 14 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.8777877787778777 },
                { start: "0.10", end: "0.25", density: 0.07890789078907891 },
                { start: "0.25", density: 0.043304330433043305 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6114222844568913 },
                { start: 200, end: 500, density: 0.30966193238647716 },
                { start: 500, density: 0.07891578315663161 },
              ],
              percentiles: { p75: 283 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35803580358035764 },
                { start: 800, end: 1800, density: 0.47604760476047553 },
                { start: 1800, density: 0.16591659165916686 },
              ],
              percentiles: { p75: 1559 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5112999999999993 },
                { start: 1800, end: 3000, density: 0.30559999999999954 },
                { start: 3000, density: 0.18310000000000115 },
              ],
              percentiles: { p75: 2641 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684905471641492 },
                { start: 100, end: 300, density: 0.02870861258377513 },
                { start: 300, density: 0.0028008402520756197 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.630649999999999 },
                { start: 2500, end: 4000, density: 0.22694999999999968 },
                { start: 4000, density: 0.1424000000000013 },
              ],
              percentiles: { p75: 3103 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2641, lcp: 3103, cls: "0.03", fid: 11 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.9285311053404087 },
                { start: "0.10", end: "0.25", density: 0.06063001016145421 },
                { start: "0.25", density: 0.01083888449813707 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43396864779519567 },
                { start: 200, end: 500, density: 0.4067892184504342 },
                { start: 500, density: 0.15924213375437005 },
              ],
              percentiles: { p75: 389 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5673839184597962 },
                { start: 800, end: 1800, density: 0.37734994337485844 },
                { start: 1800, density: 0.05526613816534547 },
              ],
              percentiles: { p75: 1038 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.831866395847438 },
                { start: 1800, end: 3000, density: 0.12040171518844496 },
                { start: 3000, density: 0.04773188896411702 },
              ],
              percentiles: { p75: 1560 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548409168662334 },
                { start: 100, end: 300, density: 0.021667236857110278 },
                { start: 300, density: 0.02349184627665643 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8657957244655582 },
                { start: 2500, end: 4000, density: 0.1000452437507069 },
                { start: 4000, density: 0.03415903178373479 },
              ],
              percentiles: { p75: 1960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1560, lcp: 1960, cls: "0.00", fid: 12 },
      timestamp: 1662226262183,
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
                { start: 0, end: 200, density: 0.48084808480848 },
                { start: 200, end: 500, density: 0.35423542354235366 },
                { start: 500, density: 0.1649164916491663 },
              ],
              percentiles: { p75: 376 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49539815926370495 },
                { start: 800, end: 1800, density: 0.38835534213685435 },
                { start: 1800, density: 0.11624649859944078 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6461292258451694 },
                { start: 1800, end: 3000, density: 0.20754150830166046 },
                { start: 3000, density: 0.1463292658531702 },
              ],
              percentiles: { p75: 2278 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589041095890408 },
                { start: 100, end: 300, density: 0.0291970802919708 },
                { start: 300, density: 0.01189881011898818 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7314768523147679 },
                { start: 2500, end: 4000, density: 0.15303469653034685 },
                { start: 4000, density: 0.11548845115488524 },
              ],
              percentiles: { p75: 2658 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8958791758351671 },
                { start: "0.10", end: "0.25", density: 0.05901180236047209 },
                { start: "0.25", density: 0.04510902180436087 },
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
      extractedResults: { fcp: 2278, lcp: 2658, cls: "0.01", fid: 13 },
      timestamp: 1662226262183,
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
                { start: 0, end: 800, density: 0.5663132626525302 },
                { start: 800, end: 1800, density: 0.3653730746149228 },
                { start: 1800, density: 0.06831366273254694 },
              ],
              percentiles: { p75: 1100 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7902999999999994 },
                { start: 1800, end: 3000, density: 0.15469999999999995 },
                { start: 3000, density: 0.05500000000000063 },
              ],
              percentiles: { p75: 1668 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9304721888755499 },
                { start: 100, end: 300, density: 0.03781512605042015 },
                { start: 300, density: 0.031712685074029835 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8262368815592194 },
                { start: 2500, end: 4000, density: 0.12698650674662654 },
                { start: 4000, density: 0.046776611694154015 },
              ],
              percentiles: { p75: 2131 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9034903490349036 },
                { start: "0.10", end: "0.25", density: 0.0737073707370737 },
                { start: "0.25", density: 0.02280228022802282 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5251000000000005 },
                { start: 200, end: 500, density: 0.31540000000000024 },
                { start: 500, density: 0.15949999999999934 },
              ],
              percentiles: { p75: 364 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1668, lcp: 2131, cls: "0.01", fid: 14 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.9598959895989597 },
                { start: "0.10", end: "0.25", density: 0.0275027502750275 },
                { start: "0.25", density: 0.012601260126012606 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5734426557344264 },
                { start: 200, end: 500, density: 0.3201679832016797 },
                { start: 500, density: 0.10638936106389396 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6396360363963604 },
                { start: 800, end: 1800, density: 0.2961703829617039 },
                { start: 1800, density: 0.0641935806419357 },
              ],
              percentiles: { p75: 984 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.827851644506648 },
                { start: 1800, end: 3000, density: 0.11466560031990404 },
                { start: 3000, density: 0.05748275517344789 },
              ],
              percentiles: { p75: 1510 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9697060587882423 },
                { start: 100, end: 300, density: 0.027494501099780046 },
                { start: 300, density: 0.0027994401119776045 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.86045 },
                { start: 2500, end: 4000, density: 0.10154999999999996 },
                { start: 4000, density: 0.03800000000000003 },
              ],
              percentiles: { p75: 1937 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1510, lcp: 1937, cls: "0.01", fid: 12 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7115288471152887 },
                { start: 200, end: 500, density: 0.22407759224077595 },
                { start: 500, density: 0.06439356064393525 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4492449244924495 },
                { start: 800, end: 1800, density: 0.3790379037903792 },
                { start: 1800, density: 0.17171717171717135 },
              ],
              percentiles: { p75: 1492 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6544036788963317 },
                { start: 1800, end: 3000, density: 0.19444166749975028 },
                { start: 3000, density: 0.15115465360391805 },
              ],
              percentiles: { p75: 2295 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691938387677536 },
                { start: 100, end: 300, density: 0.019803960792158435 },
                { start: 300, density: 0.011002200440088051 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7077999999999994 },
                { start: 2500, end: 4000, density: 0.15949999999999992 },
                { start: 4000, density: 0.1327000000000006 },
              ],
              percentiles: { p75: 2810 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7987000000000001 },
                { start: "0.10", end: "0.25", density: 0.13140000000000002 },
                { start: "0.25", density: 0.0699 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2295, lcp: 2810, cls: "0.06", fid: 11 },
      timestamp: 1662226262183,
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
                { start: 0, end: 2500, density: 0.7620812023797098 },
                { start: 2500, end: 4000, density: 0.13782486170545866 },
                { start: 4000, density: 0.1000939359148316 },
              ],
              percentiles: { p75: 2459 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8097229482488237 },
                { start: "0.10", end: "0.25", density: 0.11824359644537376 },
                { start: "0.25", density: 0.07203345530580253 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5453000531067448 },
                { start: 200, end: 500, density: 0.34200743494423796 },
                { start: 500, density: 0.11269251194901717 },
              ],
              percentiles: { p75: 310 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5304138795986617 },
                { start: 800, end: 1800, density: 0.3491847826086953 },
                { start: 1800, density: 0.12040133779264295 },
              ],
              percentiles: { p75: 1222 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6876242284757809 },
                { start: 1800, end: 3000, density: 0.18077204728528065 },
                { start: 3000, density: 0.13160372423893843 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643647865050078 },
                { start: 100, end: 300, density: 0.026041117554032687 },
                { start: 300, density: 0.009594095940959538 },
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
      extractedResults: { fcp: 2108, lcp: 2459, cls: "0.04", fid: 15 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451308139534883 },
                { start: 100, end: 300, density: 0.03464147286821705 },
                { start: 300, density: 0.020227713178294575 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7000240413511232 },
                { start: 2500, end: 4000, density: 0.16895059502344012 },
                { start: 4000, density: 0.13102536362543668 },
              ],
              percentiles: { p75: 2854 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9333012859031367 },
                { start: "0.10", end: "0.25", density: 0.028962865040259585 },
                { start: "0.25", density: 0.03773584905660374 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4856412752494528 },
                { start: 200, end: 500, density: 0.38147967875395505 },
                { start: 500, density: 0.13287904599659228 },
              ],
              percentiles: { p75: 346 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4721523535752782 },
                { start: 800, end: 1800, density: 0.3833992094861658 },
                { start: 1800, density: 0.14444843693855602 },
              ],
              percentiles: { p75: 1347 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6079067531843301 },
                { start: 1800, end: 3000, density: 0.21461187214611843 },
                { start: 3000, density: 0.1774813746695515 },
              ],
              percentiles: { p75: 2495 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 2495, lcp: 2854, cls: "0.00", fid: 13 },
      timestamp: 1662226262183,
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
                { start: 0, end: 100, density: 0.9567956795679567 },
                { start: 100, end: 300, density: 0.0213021302130213 },
                { start: 300, density: 0.021902190219021987 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8914957478739367 },
                { start: 2500, end: 4000, density: 0.07018509254627314 },
                { start: 4000, density: 0.03831915957979017 },
              ],
              percentiles: { p75: 1751 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9257148570285942 },
                { start: "0.10", end: "0.25", density: 0.04249150169966007 },
                { start: "0.25", density: 0.03179364127174562 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4865540337898631 },
                { start: 200, end: 500, density: 0.35969209237228844 },
                { start: 500, density: 0.15375387383784844 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.791220877912209 },
                { start: 800, end: 1800, density: 0.1683831616838317 },
                { start: 1800, density: 0.040395960403959305 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8524999999999994 },
                { start: 1800, end: 3000, density: 0.09799999999999995 },
                { start: 3000, density: 0.049500000000000745 },
              ],
              percentiles: { p75: 1423 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1423, lcp: 1751, cls: "0.01", fid: 12 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8737873787378736 },
                { start: 2500, end: 4000, density: 0.08810881088108811 },
                { start: 4000, density: 0.03810381038103828 },
              ],
              percentiles: { p75: 1845 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9141914191419142 },
                { start: "0.10", end: "0.25", density: 0.0657065706570657 },
                { start: "0.25", density: 0.02010201020102008 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5725572557255727 },
                { start: 200, end: 500, density: 0.316931693169317 },
                { start: 500, density: 0.11051105110511036 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7215000000000003 },
                { start: 800, end: 1800, density: 0.21900000000000008 },
                { start: 1800, density: 0.0594999999999997 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8403159684031596 },
                { start: 1800, end: 3000, density: 0.10828917108289167 },
                { start: 3000, density: 0.05139486051394879 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9721000000000001 },
                { start: 100, end: 300, density: 0.018000000000000002 },
                { start: 300, density: 0.009899999999999949 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1458, lcp: 1845, cls: "0.01", fid: 12 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.8835 },
                { start: "0.10", end: "0.25", density: 0.0708 },
                { start: "0.25", density: 0.04569999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4874512548745127 },
                { start: 800, end: 1800, density: 0.28047195280471965 },
                { start: 1800, density: 0.23207679232076767 },
              ],
              percentiles: { p75: 1759 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5118511851185107 },
                { start: 1800, end: 3000, density: 0.183418341834183 },
                { start: 3000, density: 0.3047304730473064 },
              ],
              percentiles: { p75: 3812 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5805580558055812 },
                { start: 2500, end: 4000, density: 0.18841884188418856 },
                { start: 4000, density: 0.23102310231023035 },
              ],
              percentiles: { p75: 4156 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: { fcp: 3812, lcp: 4156, cls: "0.01" },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.tz" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5212521252125208 },
                { start: 200, end: 500, density: 0.33213321332133183 },
                { start: 500, density: 0.1466146614661474 },
              ],
              percentiles: { p75: 344 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44244424442444275 },
                { start: 800, end: 1800, density: 0.3503350335033506 },
                { start: 1800, density: 0.20722072207220657 },
              ],
              percentiles: { p75: 1617 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5109489051094902 },
                { start: 1800, end: 3000, density: 0.23127687231276928 },
                { start: 3000, density: 0.2577742225777404 },
              ],
              percentiles: { p75: 3213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9417941794179419 },
                { start: 100, end: 300, density: 0.039003900390039 },
                { start: 300, density: 0.01920192019201919 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5937687537507493 },
                { start: 2500, end: 4000, density: 0.2094918983796757 },
                { start: 4000, density: 0.19673934786957503 },
              ],
              percentiles: { p75: 3551 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8458845884588458 },
                { start: "0.10", end: "0.25", density: 0.0914091409140914 },
                { start: "0.25", density: 0.06270627062706274 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: { fcp: 3213, lcp: 3551, cls: "0.03", fid: 13 },
      timestamp: 1662226262183,
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
                { start: 0, end: 2500, density: 0.6140951914841551 },
                { start: 2500, end: 4000, density: 0.2562094702067785 },
                { start: 4000, density: 0.12969533830906635 },
              ],
              percentiles: { p75: 3160 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9100431300061615 },
                { start: "0.10", end: "0.25", density: 0.044485520640788666 },
                { start: "0.25", density: 0.04547134935304989 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3925614571392177 },
                { start: 200, end: 500, density: 0.379569481594701 },
                { start: 500, density: 0.22786906126608128 },
              ],
              percentiles: { p75: 473 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27905255366395293 },
                { start: 800, end: 1800, density: 0.4008142116950411 },
                { start: 1800, density: 0.32013323464100596 },
              ],
              percentiles: { p75: 2027 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48865038243276626 },
                { start: 1800, end: 3000, density: 0.29521342215642754 },
                { start: 3000, density: 0.2161361954108062 },
              ],
              percentiles: { p75: 2781 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.902390188962583 },
                { start: 100, end: 300, density: 0.03566512326367164 },
                { start: 300, density: 0.06194468777374533 },
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
      extractedResults: { fcp: 2781, lcp: 3160, cls: "0.01", fid: 18 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.811018898110189 },
                { start: "0.10", end: "0.25", density: 0.14818518148185186 },
                { start: "0.25", density: 0.04079592040795919 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7773445310937814 },
                { start: 200, end: 500, density: 0.1814637072585483 },
                { start: 500, density: 0.04119176164767027 },
              ],
              percentiles: { p75: 183 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4066813362672533 },
                { start: 800, end: 1800, density: 0.377275455091018 },
                { start: 1800, density: 0.21604320864172857 },
              ],
              percentiles: { p75: 1728 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6258625862586256 },
                { start: 1800, end: 3000, density: 0.2332233223322331 },
                { start: 3000, density: 0.1409140914091413 },
              ],
              percentiles: { p75: 2264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9741 },
                { start: 100, end: 300, density: 0.0239 },
                { start: 300, density: 0.0020000000000000005 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7328500000000001 },
                { start: 2500, end: 4000, density: 0.17395 },
                { start: 4000, density: 0.09319999999999992 },
              ],
              percentiles: { p75: 2726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2264, lcp: 2726, cls: "0.07", fid: 10 },
      timestamp: 1662226262183,
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
                { start: 0, end: 1800, density: 0.8306188925081432 },
                { start: 1800, end: 3000, density: 0.13182602031040427 },
                { start: 3000, density: 0.037555087181452416 },
              ],
              percentiles: { p75: 1525 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9337586789266278 },
                { start: 100, end: 300, density: 0.036592231187840114 },
                { start: 300, density: 0.02964908988553202 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8889735288516472 },
                { start: 2500, end: 4000, density: 0.07636640639878116 },
                { start: 4000, density: 0.034660064749571715 },
              ],
              percentiles: { p75: 1938 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9393881453154875 },
                { start: "0.10", end: "0.25", density: 0.04416826003824092 },
                { start: "0.25", density: 0.016443594646271507 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3822166785459729 },
                { start: 200, end: 500, density: 0.39540270848182457 },
                { start: 500, density: 0.22238061297220255 },
              ],
              percentiles: { p75: 466 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6180265654648956 },
                { start: 800, end: 1800, density: 0.32447817836812143 },
                { start: 1800, density: 0.05749525616698291 },
              ],
              percentiles: { p75: 944 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1525, lcp: 1938, cls: "0.00", fid: 17 },
      timestamp: 1662226262183,
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
                { start: 0, end: 800, density: 0.4781156415572443 },
                { start: 800, end: 1800, density: 0.39702833448514135 },
                { start: 1800, density: 0.12485602395761441 },
              ],
              percentiles: { p75: 1257 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6288576692768314 },
                { start: 1800, end: 3000, density: 0.21510824504836498 },
                { start: 3000, density: 0.15603408567480362 },
              ],
              percentiles: { p75: 2335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9551679737797026 },
                { start: 100, end: 300, density: 0.03242420695306099 },
                { start: 300, density: 0.012407819267236404 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7299320511344 },
                { start: 2500, end: 4000, density: 0.15593688817229054 },
                { start: 4000, density: 0.11413106069330951 },
              ],
              percentiles: { p75: 2642 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9381478921907395 },
                { start: "0.10", end: "0.25", density: 0.025685325961759962 },
                { start: "0.25", density: 0.03616678184750059 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4208018593840789 },
                { start: 200, end: 500, density: 0.3967460778617082 },
                { start: 500, density: 0.1824520627542129 },
              ],
              percentiles: { p75: 404 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 2335, lcp: 2642, cls: "0.00", fid: 13 },
      timestamp: 1662226262183,
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
                { start: 0, end: 100, density: 0.9748974897489749 },
                { start: 100, end: 300, density: 0.017801780178017805 },
                { start: 300, density: 0.007300730073007296 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.758822353294012 },
                { start: 2500, end: 4000, density: 0.14060781765470365 },
                { start: 4000, density: 0.10056982905128438 },
              ],
              percentiles: { p75: 2527 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9059905990599059 },
                { start: "0.10", end: "0.25", density: 0.0653065306530653 },
                { start: "0.25", density: 0.028702870287028677 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6580999999999998 },
                { start: 200, end: 500, density: 0.27569999999999995 },
                { start: 500, density: 0.06620000000000031 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5720288115246095 },
                { start: 800, end: 1800, density: 0.3320328131252499 },
                { start: 1800, density: 0.09593837535014052 },
              ],
              percentiles: { p75: 1198 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.720927907209278 },
                { start: 1800, end: 3000, density: 0.17068293170682916 },
                { start: 3000, density: 0.10838916108389281 },
              ],
              percentiles: { p75: 2003 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 2003, lcp: 2527, cls: "0.02", fid: 11 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7010402080416083 },
                { start: 2500, end: 4000, density: 0.1574314862972595 },
                { start: 4000, density: 0.14152830566113236 },
              ],
              percentiles: { p75: 2865 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8699739947989598 },
                { start: "0.10", end: "0.25", density: 0.08081616323264652 },
                { start: "0.25", density: 0.04920984196839371 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.521395720855828 },
                { start: 200, end: 500, density: 0.27194561087782404 },
                { start: 500, density: 0.20665866826634802 },
              ],
              percentiles: { p75: 415 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46219243848769764 },
                { start: 800, end: 1800, density: 0.37987597519503913 },
                { start: 1800, density: 0.15793158631726328 },
              ],
              percentiles: { p75: 1414 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6420210105052513 },
                { start: 1800, end: 3000, density: 0.1996998499249621 },
                { start: 3000, density: 0.15827913956978665 },
              ],
              percentiles: { p75: 2341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8777244551089777 },
                { start: 100, end: 300, density: 0.039792041591681655 },
                { start: 300, density: 0.08248350329934082 },
              ],
              percentiles: { p75: 18 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 2341, lcp: 2865, cls: "0.04", fid: 18 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6179044465468302 },
                { start: 1800, end: 3000, density: 0.2470435193945126 },
                { start: 3000, density: 0.13505203405865726 },
              ],
              percentiles: { p75: 2307 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696066746126342 },
                { start: 100, end: 300, density: 0.026460071513706794 },
                { start: 300, density: 0.003933253873659118 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7543056726484406 },
                { start: 2500, end: 4000, density: 0.17487655064434543 },
                { start: 4000, density: 0.070817776707214 },
              ],
              percentiles: { p75: 2644 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9674016121384542 },
                { start: "0.10", end: "0.25", density: 0.018966334755808438 },
                { start: "0.25", density: 0.013632053105737308 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5109497464269249 },
                { start: 200, end: 500, density: 0.3891194098662979 },
                { start: 500, density: 0.09993084370677704 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47419738406658735 },
                { start: 800, end: 1800, density: 0.41676575505350755 },
                { start: 1800, density: 0.10903686087990515 },
              ],
              percentiles: { p75: 1212 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2307, lcp: 2644, cls: "0.00", fid: 12 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6867999999999999 },
                { start: 800, end: 1800, density: 0.25270000000000004 },
                { start: 1800, density: 0.060500000000000234 },
              ],
              percentiles: { p75: 930 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7802999999999992 },
                { start: 1800, end: 3000, density: 0.14979999999999985 },
                { start: 3000, density: 0.06990000000000092 },
              ],
              percentiles: { p75: 1694 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536907381476294 },
                { start: 100, end: 300, density: 0.030906181236247245 },
                { start: 300, density: 0.01540308061612331 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7942499999999996 },
                { start: 2500, end: 4000, density: 0.1333499999999999 },
                { start: 4000, density: 0.07240000000000048 },
              ],
              percentiles: { p75: 2281 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8364 },
                { start: "0.10", end: "0.25", density: 0.1307 },
                { start: "0.25", density: 0.03290000000000002 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5795000000000001 },
                { start: 200, end: 500, density: 0.31820000000000026 },
                { start: 500, density: 0.10229999999999961 },
              ],
              percentiles: { p75: 299 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1694, lcp: 2281, cls: "0.03", fid: 14 },
      timestamp: 1662226262183,
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
                { start: 0, end: 800, density: 0.5393921215756845 },
                { start: 800, end: 1800, density: 0.37092581483703246 },
                { start: 1800, density: 0.0896820635872831 },
              ],
              percentiles: { p75: 1143 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6431999999999992 },
                { start: 1800, end: 3000, density: 0.21719999999999967 },
                { start: 3000, density: 0.1396000000000012 },
              ],
              percentiles: { p75: 2234 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702089373188044 },
                { start: 100, end: 300, density: 0.023792862141357594 },
                { start: 300, density: 0.005998200539838063 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7155715571557152 },
                { start: 2500, end: 4000, density: 0.1736173617361735 },
                { start: 4000, density: 0.11081108110811132 },
              ],
              percentiles: { p75: 2700 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9138999999999999 },
                { start: "0.10", end: "0.25", density: 0.05809999999999999 },
                { start: "0.25", density: 0.027999999999999973 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6018407362945177 },
                { start: 200, end: 500, density: 0.311624649859944 },
                { start: 500, density: 0.0865346138455382 },
              ],
              percentiles: { p75: 284 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2234, lcp: 2700, cls: "0.02", fid: 11 },
      timestamp: 1662226262183,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.bo" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3274793388429753 },
                { start: 800, end: 1800, density: 0.4506427915518827 },
                { start: 1800, density: 0.22187786960514203 },
              ],
              percentiles: { p75: 1729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4144360558224655 },
                { start: 1800, end: 3000, density: 0.26973232669869546 },
                { start: 3000, density: 0.3158316174788391 },
              ],
              percentiles: { p75: 3469 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665162669199714 },
                { start: 100, end: 300, density: 0.026359534552362857 },
                { start: 300, density: 0.007124198527665623 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5528060349754247 },
                { start: 2500, end: 4000, density: 0.23837009943993556 },
                { start: 4000, density: 0.20882386558463978 },
              ],
              percentiles: { p75: 3714 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9449152542372882 },
                { start: "0.10", end: "0.25", density: 0.0282867613376088 },
                { start: "0.25", density: 0.02679798442510309 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4370475851429928 },
                { start: 200, end: 500, density: 0.41343301293461493 },
                { start: 500, density: 0.1495194019223923 },
              ],
              percentiles: { p75: 395 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 3469, lcp: 3714, cls: "0.00", fid: 12 },
      timestamp: 1662226262183,
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
                { start: "0.00", end: "0.10", density: 0.8892110788921108 },
                { start: "0.10", end: "0.25", density: 0.05529447055294471 },
                { start: "0.25", density: 0.0554944505549445 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4688000000000004 },
                { start: 200, end: 500, density: 0.3807000000000004 },
                { start: 500, density: 0.15049999999999927 },
              ],
              percentiles: { p75: 379 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5689862027594476 },
                { start: 800, end: 1800, density: 0.21395720855828818 },
                { start: 1800, density: 0.21705658868226438 },
              ],
              percentiles: { p75: 1657 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6269373062693745 },
                { start: 1800, end: 3000, density: 0.13798620137986234 },
                { start: 3000, density: 0.2350764923507632 },
              ],
              percentiles: { p75: 2981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9494 },
                { start: 100, end: 300, density: 0.0401 },
                { start: 300, density: 0.01050000000000001 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6435287057411478 },
                { start: 2500, end: 4000, density: 0.1643328665733145 },
                { start: 4000, density: 0.19213842768553768 },
              ],
              percentiles: { p75: 3463 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 2981, lcp: 3463, cls: "0.00", fid: 15 },
      timestamp: 1662226262184,
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
                { start: 0, end: 100, density: 0.9318931893189318 },
                { start: 100, end: 300, density: 0.0447044704470447 },
                { start: 300, density: 0.02340234023402346 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7518751875187515 },
                { start: 2500, end: 4000, density: 0.14691469146914682 },
                { start: 4000, density: 0.10121012101210174 },
              ],
              percentiles: { p75: 2541 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8533853385338535 },
                { start: "0.10", end: "0.25", density: 0.09930993099309933 },
                { start: "0.25", density: 0.04730473047304729 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45860827834433193 },
                { start: 200, end: 500, density: 0.3560287942411524 },
                { start: 500, density: 0.18536292741451568 },
              ],
              percentiles: { p75: 402 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5889233230030986 },
                { start: 800, end: 1800, density: 0.29571128661401563 },
                { start: 1800, density: 0.11536539038288582 },
              ],
              percentiles: { p75: 1169 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6853629274145177 },
                { start: 1800, end: 3000, density: 0.17076584683063406 },
                { start: 3000, density: 0.1438712257548483 },
              ],
              percentiles: { p75: 2187 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 2187, lcp: 2541, cls: "0.03", fid: 13 },
      timestamp: 1662226262290,
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
                { start: 0, end: 2500, density: 0.7279154078549842 },
                { start: 2500, end: 4000, density: 0.16211480362537753 },
                { start: 4000, density: 0.10996978851963836 },
              ],
              percentiles: { p75: 2698 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9650628626692456 },
                { start: "0.10", end: "0.25", density: 0.012451644100580271 },
                { start: "0.25", density: 0.022485493230174083 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5806569343065695 },
                { start: 200, end: 500, density: 0.3283454987834551 },
                { start: 500, density: 0.0909975669099753 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4556716055380137 },
                { start: 800, end: 1800, density: 0.3932475103230512 },
                { start: 1800, density: 0.15108088413893503 },
              ],
              percentiles: { p75: 1391 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6137847642079799 },
                { start: 1800, end: 3000, density: 0.22587666263603362 },
                { start: 3000, density: 0.16033857315598662 },
              ],
              percentiles: { p75: 2404 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516464683559799 },
                { start: 100, end: 300, density: 0.042477659444240416 },
                { start: 300, density: 0.005875872199779653 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 2404, lcp: 2698, cls: "0.00", fid: 13 },
      timestamp: 1662226262290,
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
                { start: 0, end: 200, density: 0.49137931034482774 },
                { start: 200, end: 500, density: 0.40503109101187124 },
                { start: 500, density: 0.1035895986433011 },
              ],
              percentiles: { p75: 336 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49951783992285415 },
                { start: 800, end: 1800, density: 0.3970243835239011 },
                { start: 1800, density: 0.10345777655324474 },
              ],
              percentiles: { p75: 1203 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5999726102437682 },
                { start: 1800, end: 3000, density: 0.24130375239660345 },
                { start: 3000, density: 0.15872363735962822 },
              ],
              percentiles: { p75: 2413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9600837404047453 },
                { start: 100, end: 300, density: 0.032658757850662946 },
                { start: 300, density: 0.007257501744591782 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7099656357388314 },
                { start: 2500, end: 4000, density: 0.18281786941580747 },
                { start: 4000, density: 0.10721649484536107 },
              ],
              percentiles: { p75: 2740 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.957356369121075 },
                { start: "0.10", end: "0.25", density: 0.018648018648018648 },
                { start: "0.25", density: 0.023995612230906332 },
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
      extractedResults: { fcp: 2413, lcp: 2740, cls: "0.00", fid: 13 },
      timestamp: 1662226262290,
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
                { start: 0, end: 100, density: 0.9707912373712113 },
                { start: 100, end: 300, density: 0.023206962088626586 },
                { start: 300, density: 0.006001800540162036 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5538392321535679 },
                { start: 2500, end: 4000, density: 0.2328034393121369 },
                { start: 4000, density: 0.2133573285342952 },
              ],
              percentiles: { p75: 3767 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9232 },
                { start: "0.10", end: "0.25", density: 0.050600000000000006 },
                { start: "0.25", density: 0.0262 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.503199360127975 },
                { start: 200, end: 500, density: 0.35492901419716083 },
                { start: 500, density: 0.14187162567486422 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.34046595340465935 },
                { start: 800, end: 1800, density: 0.44725527447255237 },
                { start: 1800, density: 0.21227877212278834 },
              ],
              percentiles: { p75: 1703 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4258851770354054 },
                { start: 1800, end: 3000, density: 0.26925385077015285 },
                { start: 3000, density: 0.30486097219444186 },
              ],
              percentiles: { p75: 3407 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 3407, lcp: 3767, cls: "0.00", fid: 11 },
      timestamp: 1662226262290,
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
                { start: "0.00", end: "0.10", density: 0.8815881588158816 },
                { start: "0.10", end: "0.25", density: 0.08670867086708671 },
                { start: "0.25", density: 0.03170317031703171 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4851455436630994 },
                { start: 200, end: 500, density: 0.34570371111333437 },
                { start: 500, density: 0.16915074522356616 },
              ],
              percentiles: { p75: 397 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8667466986794718 },
                { start: 800, end: 1800, density: 0.12194877951180473 },
                { start: 1800, density: 0.011304521808723475 },
              ],
              percentiles: { p75: 640 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9281999999999999 },
                { start: 1800, end: 3000, density: 0.0524 },
                { start: 3000, density: 0.019400000000000056 },
              ],
              percentiles: { p75: 1143 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9468106378724255 },
                { start: 100, end: 300, density: 0.023295340931813638 },
                { start: 300, density: 0.029894021195760904 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9323567643235675 },
                { start: 2500, end: 4000, density: 0.053844615538446154 },
                { start: 4000, density: 0.013798620137986195 },
              ],
              percentiles: { p75: 1603 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 1143, lcp: 1603, cls: "0.02", fid: 12 },
      timestamp: 1662226262290,
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
                { start: "0.00", end: "0.10", density: 0.8084191580841915 },
                { start: "0.10", end: "0.25", density: 0.1224877512248775 },
                { start: "0.25", density: 0.06909309069093095 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.686168616861686 },
                { start: 200, end: 500, density: 0.24492449244924488 },
                { start: 500, density: 0.06890689068906919 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5431999999999996 },
                { start: 800, end: 1800, density: 0.33979999999999977 },
                { start: 1800, density: 0.11700000000000067 },
              ],
              percentiles: { p75: 1221 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7526494701059784 },
                { start: 1800, end: 3000, density: 0.14047190561887615 },
                { start: 3000, density: 0.10687862427514548 },
              ],
              percentiles: { p75: 1798 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972097209720972 },
                { start: 100, end: 300, density: 0.0172017201720172 },
                { start: 300, density: 0.010701070107010713 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7976095219043802 },
                { start: 2500, end: 4000, density: 0.11557311462292448 },
                { start: 4000, density: 0.0868173634726953 },
              ],
              percentiles: { p75: 2204 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1798, lcp: 2204, cls: "0.06", fid: 13 },
      timestamp: 1662226262290,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.tz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8458845884588458 },
                { start: "0.10", end: "0.25", density: 0.0914091409140914 },
                { start: "0.25", density: 0.06270627062706274 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5212521252125208 },
                { start: 200, end: 500, density: 0.33213321332133183 },
                { start: 500, density: 0.1466146614661474 },
              ],
              percentiles: { p75: 368 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44244424442444275 },
                { start: 800, end: 1800, density: 0.3503350335033506 },
                { start: 1800, density: 0.20722072207220657 },
              ],
              percentiles: { p75: 1634 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5109489051094902 },
                { start: 1800, end: 3000, density: 0.23127687231276928 },
                { start: 3000, density: 0.2577742225777404 },
              ],
              percentiles: { p75: 3262 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9417941794179419 },
                { start: 100, end: 300, density: 0.039003900390039 },
                { start: 300, density: 0.01920192019201919 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5937687537507493 },
                { start: 2500, end: 4000, density: 0.2094918983796757 },
                { start: 4000, density: 0.19673934786957503 },
              ],
              percentiles: { p75: 3587 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: { fcp: 3262, lcp: 3587, cls: "0.01", fid: 14 },
      timestamp: 1662226262290,
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
                { start: "0.00", end: "0.10", density: 0.7993200679932007 },
                { start: "0.10", end: "0.25", density: 0.1257874212578742 },
                { start: "0.25", density: 0.07489251074892522 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5670402241344811 },
                { start: 200, end: 500, density: 0.32529517710626393 },
                { start: 500, density: 0.10766459875925498 },
              ],
              percentiles: { p75: 298 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5349604881464435 },
                { start: 800, end: 1800, density: 0.34660398119435804 },
                { start: 1800, density: 0.11843553065919851 },
              ],
              percentiles: { p75: 1213 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6940694069406926 },
                { start: 1800, end: 3000, density: 0.1775177517751772 },
                { start: 3000, density: 0.12841284128413016 },
              ],
              percentiles: { p75: 2078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659068186362727 },
                { start: 100, end: 300, density: 0.02479504099180164 },
                { start: 300, density: 0.009298140371925698 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7647500000000002 },
                { start: 2500, end: 4000, density: 0.13585000000000003 },
                { start: 4000, density: 0.09939999999999977 },
              ],
              percentiles: { p75: 2443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 2078, lcp: 2443, cls: "0.06", fid: 14 },
      timestamp: 1662226262290,
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
                { start: "0.00", end: "0.10", density: 0.8608 },
                { start: "0.10", end: "0.25", density: 0.0919 },
                { start: "0.25", density: 0.047299999999999995 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5047514254276273 },
                { start: 200, end: 500, density: 0.360208062418725 },
                { start: 500, density: 0.13504051215364785 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7202440488097621 },
                { start: 800, end: 1800, density: 0.2320464092818564 },
                { start: 1800, density: 0.047709541908381434 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8666999999999994 },
                { start: 1800, end: 3000, density: 0.09109999999999996 },
                { start: 3000, density: 0.04220000000000064 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678903671101331 },
                { start: 100, end: 300, density: 0.020606181854556368 },
                { start: 300, density: 0.011503451035310542 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8972191657497245 },
                { start: 2500, end: 4000, density: 0.07097129138741617 },
                { start: 4000, density: 0.03180954286285939 },
              ],
              percentiles: { p75: 1732 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1364, lcp: 1732, cls: "0.02", fid: 12 },
      timestamp: 1662226262290,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8697404290624626 },
                { start: 2500, end: 4000, density: 0.09138319307810826 },
                { start: 4000, density: 0.038876377859429045 },
              ],
              percentiles: { p75: 1871 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9573055028462998 },
                { start: "0.10", end: "0.25", density: 0.02229601518026565 },
                { start: "0.25", density: 0.02039848197343452 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49891041162227623 },
                { start: 200, end: 500, density: 0.37167070217917686 },
                { start: 500, density: 0.129418886198547 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6982933524286911 },
                { start: 800, end: 1800, density: 0.23475355054302433 },
                { start: 1800, density: 0.06695309702828461 },
              ],
              percentiles: { p75: 882 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8281917418130044 },
                { start: 1800, end: 3000, density: 0.11687233032747983 },
                { start: 3000, density: 0.054935927859515746 },
              ],
              percentiles: { p75: 1502 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688179840464104 },
                { start: 100, end: 300, density: 0.020062847474014996 },
                { start: 300, density: 0.01111916847957452 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1502, lcp: 1871, cls: "0.00", fid: 13 },
      timestamp: 1662226262290,
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
                { start: 0, end: 200, density: 0.4953624603368309 },
                { start: 200, end: 500, density: 0.34854771784232297 },
                { start: 500, density: 0.15608982182084624 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5390985448953032 },
                { start: 800, end: 1800, density: 0.350526440317047 },
                { start: 1800, density: 0.11037501478764981 },
              ],
              percentiles: { p75: 1154 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6841294298921418 },
                { start: 1800, end: 3000, density: 0.19319663387460007 },
                { start: 3000, density: 0.12267393623325822 },
              ],
              percentiles: { p75: 2067 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652973635806255 },
                { start: 100, end: 300, density: 0.025383200490496624 },
                { start: 300, density: 0.009319435928877991 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7835971908106167 },
                { start: 2500, end: 4000, density: 0.13105582668729895 },
                { start: 4000, density: 0.08534698250208438 },
              ],
              percentiles: { p75: 2355 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9444114502910083 },
                { start: "0.10", end: "0.25", density: 0.03064496971136714 },
                { start: "0.25", density: 0.02494357999762444 },
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
      extractedResults: { fcp: 2067, lcp: 2355, cls: "0.00", fid: 12 },
      timestamp: 1662226262291,
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
                { start: "0.00", end: "0.10", density: 0.8981 },
                { start: "0.10", end: "0.25", density: 0.08360000000000002 },
                { start: "0.25", density: 0.018299999999999997 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49425172448265525 },
                { start: 200, end: 500, density: 0.36459062281315613 },
                { start: 500, density: 0.1411576527041887 },
              ],
              percentiles: { p75: 361 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5742277316804959 },
                { start: 800, end: 1800, density: 0.37258822353294013 },
                { start: 1800, density: 0.0531840447865641 },
              ],
              percentiles: { p75: 1029 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8411523457037108 },
                { start: 1800, end: 3000, density: 0.11263379013704103 },
                { start: 3000, density: 0.04621386415924827 },
              ],
              percentiles: { p75: 1540 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603960396039602 },
                { start: 100, end: 300, density: 0.019001900190019003 },
                { start: 300, density: 0.020602060206020623 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633726745349066 },
                { start: 2500, end: 4000, density: 0.10252050410082011 },
                { start: 4000, density: 0.034106821364273135 },
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
      extractedResults: { fcp: 1540, lcp: 1959, cls: "0.01", fid: 12 },
      timestamp: 1662226262291,
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
                { start: "0.00", end: "0.10", density: 0.9494949494949495 },
                { start: "0.10", end: "0.25", density: 0.036403640364036406 },
                { start: "0.25", density: 0.014101410141014094 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4704470447044703 },
                { start: 200, end: 500, density: 0.3841384138413841 },
                { start: 500, density: 0.1454145414541457 },
              ],
              percentiles: { p75: 326 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.806980698069807 },
                { start: 800, end: 1800, density: 0.1629162916291629 },
                { start: 1800, density: 0.0301030103010301 },
              ],
              percentiles: { p75: 720 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.883453381352541 },
                { start: 1800, end: 3000, density: 0.0769307723089236 },
                { start: 3000, density: 0.03961584633853538 },
              ],
              percentiles: { p75: 1344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9189162167566486 },
                { start: 100, end: 300, density: 0.024595080983803242 },
                { start: 300, density: 0.0564887022595481 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.90265 },
                { start: 2500, end: 4000, density: 0.06625 },
                { start: 4000, density: 0.031100000000000027 },
              ],
              percentiles: { p75: 1726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1344, lcp: 1726, cls: "0.01", fid: 13 },
      timestamp: 1662226262291,
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
                { start: "0.00", end: "0.10", density: 0.9327 },
                { start: "0.10", end: "0.25", density: 0.0456 },
                { start: "0.25", density: 0.021700000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8032606521304261 },
                { start: 200, end: 500, density: 0.13782756551310257 },
                { start: 500, density: 0.05891178235647134 },
              ],
              percentiles: { p75: 166 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6716328367163285 },
                { start: 800, end: 1800, density: 0.27777222277772223 },
                { start: 1800, density: 0.0505949405059494 },
              ],
              percentiles: { p75: 947 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7970594118823763 },
                { start: 1800, end: 3000, density: 0.15253050610122026 },
                { start: 3000, density: 0.0504100820164034 },
              ],
              percentiles: { p75: 1657 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9766023397660234 },
                { start: 100, end: 300, density: 0.0067993200679932 },
                { start: 300, density: 0.01659834016598338 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8179364127174567 },
                { start: 2500, end: 4000, density: 0.1259748050389922 },
                { start: 4000, density: 0.05608878224355117 },
              ],
              percentiles: { p75: 2146 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1657, lcp: 2146, cls: "0.03", fid: 9 },
      timestamp: 1662226262291,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ma" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9586041395860414 },
                { start: "0.10", end: "0.25", density: 0.03299670032996701 },
                { start: "0.25", density: 0.008399160083991603 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6018601860186019 },
                { start: 200, end: 500, density: 0.30303030303030304 },
                { start: 500, density: 0.09510951095109509 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7107289271072895 },
                { start: 800, end: 1800, density: 0.22147785221477856 },
                { start: 1800, density: 0.06779322067793195 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.790158031606321 },
                { start: 1800, end: 3000, density: 0.12512502500500097 },
                { start: 3000, density: 0.0847169433886779 },
              ],
              percentiles: { p75: 1623 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9816 },
                { start: 100, end: 300, density: 0.0122 },
                { start: 300, density: 0.0062 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8487848784878484 },
                { start: 2500, end: 4000, density: 0.08520852085208519 },
                { start: 4000, density: 0.06600660066006635 },
              ],
              percentiles: { p75: 1989 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1623, lcp: 1989, cls: "0.00", fid: 10 },
      timestamp: 1662226262398,
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
                { start: 0, end: 100, density: 0.9228922892289232 },
                { start: 100, end: 300, density: 0.03610361036103611 },
                { start: 300, density: 0.04100410041004076 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.541849999999999 },
                { start: 2500, end: 4000, density: 0.25754999999999956 },
                { start: 4000, density: 0.20060000000000133 },
              ],
              percentiles: { p75: 3627 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8233823382338233 },
                { start: "0.10", end: "0.25", density: 0.10551055105510551 },
                { start: "0.25", density: 0.07110711071107119 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5442999999999999 },
                { start: 200, end: 500, density: 0.28379999999999994 },
                { start: 500, density: 0.1719000000000001 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26784643071385816 },
                { start: 800, end: 1800, density: 0.3355328934213169 },
                { start: 1800, density: 0.39662067586482475 },
              ],
              percentiles: { p75: 2289 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4383684894531677 },
                { start: 1800, end: 3000, density: 0.27191842447266046 },
                { start: 3000, density: 0.28971308607417195 },
              ],
              percentiles: { p75: 3320 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 3320, lcp: 3627, cls: "0.05", fid: 15 },
      timestamp: 1662226262398,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47010000000000124 },
                { start: 800, end: 1800, density: 0.31570000000000076 },
                { start: 1800, density: 0.21419999999999803 },
              ],
              percentiles: { p75: 1612 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5309530953095302 },
                { start: 1800, end: 3000, density: 0.2105210521052102 },
                { start: 3000, density: 0.2585258525852596 },
              ],
              percentiles: { p75: 3228 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374062593740625 },
                { start: 100, end: 300, density: 0.04309569043095691 },
                { start: 300, density: 0.01949805019498048 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5907909209079094 },
                { start: 2500, end: 4000, density: 0.19563043695630447 },
                { start: 4000, density: 0.2135786421357861 },
              ],
              percentiles: { p75: 3683 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9154999999999999 },
                { start: "0.10", end: "0.25", density: 0.048999999999999995 },
                { start: "0.25", density: 0.035500000000000004 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.477 },
                { start: 200, end: 500, density: 0.3631000000000001 },
                { start: 500, density: 0.15989999999999993 },
              ],
              percentiles: { p75: 344 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3228, lcp: 3683, cls: "0.00", fid: 11 },
      timestamp: 1662226262398,
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
                { start: "0.00", end: "0.10", density: 0.8795459810053277 },
                { start: "0.10", end: "0.25", density: 0.08744498494324762 },
                { start: "0.25", density: 0.03300903405142461 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47301623599359716 },
                { start: 200, end: 500, density: 0.36073633661102217 },
                { start: 500, density: 0.16624742739538068 },
              ],
              percentiles: { p75: 376 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6068147459006861 },
                { start: 800, end: 1800, density: 0.3165484358646354 },
                { start: 1800, density: 0.0766368182346785 },
              ],
              percentiles: { p75: 1081 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.759012402921062 },
                { start: 1800, end: 3000, density: 0.1661064101078011 },
                { start: 3000, density: 0.07488118697113683 },
              ],
              percentiles: { p75: 1773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529548088064886 },
                { start: 100, end: 300, density: 0.028041714947856303 },
                { start: 300, density: 0.019003476245654953 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8168557536466771 },
                { start: 2500, end: 4000, density: 0.12711275758277368 },
                { start: 4000, density: 0.05603148877054916 },
              ],
              percentiles: { p75: 2192 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1773, lcp: 2192, cls: "0.00", fid: 12 },
      timestamp: 1662226262398,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5476547654765469 },
                { start: 800, end: 1800, density: 0.21842184218421812 },
                { start: 1800, density: 0.23392339233923495 },
              ],
              percentiles: { p75: 1667 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5290412876137152 },
                { start: 1800, end: 3000, density: 0.1416575027491751 },
                { start: 3000, density: 0.3293012096371096 },
              ],
              percentiles: { p75: 3585 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469 },
                { start: 100, end: 300, density: 0.03690000000000001 },
                { start: 300, density: 0.01620000000000001 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5487402519496114 },
                { start: 2500, end: 4000, density: 0.20270945810837873 },
                { start: 4000, density: 0.2485502899420098 },
              ],
              percentiles: { p75: 3930 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6881999999999999 },
                { start: "0.10", end: "0.25", density: 0.10619999999999999 },
                { start: "0.25", density: 0.20560000000000014 },
              ],
              percentiles: { p75: "0.18" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3585, lcp: 3930, cls: "0.18", fid: 13 },
      timestamp: 1662226262398,
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
                { start: 0, end: 200, density: 0.49154951824356335 },
                { start: 200, end: 500, density: 0.35855315116095404 },
                { start: 500, density: 0.14989733059548263 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8438016528925621 },
                { start: 800, end: 1800, density: 0.13851239669421486 },
                { start: 1800, density: 0.0176859504132231 },
              ],
              percentiles: { p75: 678 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9314956777034743 },
                { start: 1800, end: 3000, density: 0.04697439243190345 },
                { start: 3000, density: 0.021529929864622325 },
              ],
              percentiles: { p75: 1183 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565432914738929 },
                { start: 100, end: 300, density: 0.027098479841374756 },
                { start: 300, density: 0.0163582286847323 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9460990611848494 },
                { start: 2500, end: 4000, density: 0.03674328261573325 },
                { start: 4000, density: 0.017157656199417236 },
              ],
              percentiles: { p75: 1530 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9487095720352825 },
                { start: "0.10", end: "0.25", density: 0.028912120222149625 },
                { start: "0.25", density: 0.022378307742567792 },
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
      extractedResults: { fcp: 1183, lcp: 1530, cls: "0.00", fid: 14 },
      timestamp: 1662226262398,
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
                { start: "0.00", end: "0.10", density: 0.9399091499026607 },
                { start: "0.10", end: "0.25", density: 0.023231667748215445 },
                { start: "0.25", density: 0.03685918234912394 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47311105135789217 },
                { start: 200, end: 500, density: 0.4126109169131489 },
                { start: 500, density: 0.11427803172895892 },
              ],
              percentiles: { p75: 335 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37685148774413424 },
                { start: 800, end: 1800, density: 0.4606108271070913 },
                { start: 1800, density: 0.16253768514877456 },
              ],
              percentiles: { p75: 1570 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5314285714285716 },
                { start: 1800, end: 3000, density: 0.2761038961038962 },
                { start: 3000, density: 0.19246753246753215 },
              ],
              percentiles: { p75: 2712 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684 },
                { start: 100, end: 300, density: 0.026266666666666664 },
                { start: 300, density: 0.005333333333333336 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6457873555757492 },
                { start: 2500, end: 4000, density: 0.2341295599117226 },
                { start: 4000, density: 0.12008308451252812 },
              ],
              percentiles: { p75: 3010 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 2712, lcp: 3010, cls: "0.00", fid: 12 },
      timestamp: 1662226262398,
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
                { start: 0, end: 200, density: 0.36167165733628526 },
                { start: 200, end: 500, density: 0.42806926181486893 },
                { start: 500, density: 0.21025908084884587 },
              ],
              percentiles: { p75: 448 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8563878980050205 },
                { start: 800, end: 1800, density: 0.13145725987580925 },
                { start: 1800, density: 0.012154842119170294 },
              ],
              percentiles: { p75: 658 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9211393907424502 },
                { start: 1800, end: 3000, density: 0.05855202426480288 },
                { start: 3000, density: 0.020308584992746934 },
              ],
              percentiles: { p75: 1170 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320954907161803 },
                { start: 100, end: 300, density: 0.029575596816976125 },
                { start: 300, density: 0.03832891246684357 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9299526440410417 },
                { start: 2500, end: 4000, density: 0.05439358063667456 },
                { start: 4000, density: 0.015653775322283608 },
              ],
              percentiles: { p75: 1623 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9061057628906766 },
                { start: "0.10", end: "0.25", density: 0.060266385335619156 },
                { start: "0.25", density: 0.03362785177370434 },
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
      extractedResults: { fcp: 1170, lcp: 1623, cls: "0.00", fid: 13 },
      timestamp: 1662226262519,
    },
  ],
};
