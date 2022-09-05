export const audit33 = {
  date: "2022-06-15T22:15:49.469Z",
  dateParsedLocale: "16/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "16/06/2022-legacy-audit",
  audits: [
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9391838663935718 },
                { start: 100, end: 300, density: 0.036552702063967234 },
                { start: 300, density: 0.024263431542460998 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6999220576773184 },
                { start: 2500, end: 4000, density: 0.19298519095869052 },
                { start: 4000, density: 0.10709275136399093 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9468999386126459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026703499079189688,
                },
                { start: "0.25", density: 0.02639656230816452 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5641521598968401 },
                { start: 200, end: 500, density: 0.3075435203094774 },
                { start: 500, density: 0.12830431979368256 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3974298699263439 },
                { start: 800, end: 1800, density: 0.45102648487697866 },
                { start: 1800, density: 0.15154364519667748 },
              ],
              percentiles: { p75: 1425 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6138598407991265 },
                { start: 1800, end: 3000, density: 0.239581707507414 },
                { start: 3000, density: 0.1465584516934596 },
              ],
              percentiles: { p75: 2414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2414,
        lcp: 2754,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1655331183725,
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
                  density: 0.8360836083608362,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14081408140814083,
                },
                { start: "0.25", density: 0.023102310231023108 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5763576357635761 },
                { start: 200, end: 500, density: 0.3179317931793179 },
                { start: 500, density: 0.10571057105710588 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6261000000000002 },
                { start: 800, end: 1800, density: 0.32370000000000004 },
                { start: 1800, density: 0.05019999999999984 },
              ],
              percentiles: { p75: 995 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8143999999999995 },
                { start: 1800, end: 3000, density: 0.12989999999999988 },
                { start: 3000, density: 0.05570000000000062 },
              ],
              percentiles: { p75: 1609 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9519951995199518 },
                { start: 100, end: 300, density: 0.028602860286028597 },
                { start: 300, density: 0.01940194019401952 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.860499999999999 },
                { start: 2500, end: 4000, density: 0.09559999999999994 },
                { start: 4000, density: 0.04390000000000096 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1609,
        lcp: 1980,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1655331191421,
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
                  density: 0.9553955395539554,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029202920292029207,
                },
                { start: "0.25", density: 0.015401540154015408 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5898589858985899 },
                { start: 200, end: 500, density: 0.3299329932993299 },
                { start: 500, density: 0.08020802080208025 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7092127638291481 },
                { start: 800, end: 1800, density: 0.2267680304091225 },
                { start: 1800, density: 0.06401920576172929 },
              ],
              percentiles: { p75: 866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8309830983098302 },
                { start: 1800, end: 3000, density: 0.09870987098709863 },
                { start: 3000, density: 0.07030703070307129 },
              ],
              percentiles: { p75: 1457 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678935787157433 },
                { start: 100, end: 300, density: 0.020504100820164038 },
                { start: 300, density: 0.011602320464092776 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8601080324097226 },
                { start: 2500, end: 4000, density: 0.09177753325997796 },
                { start: 4000, density: 0.048114434330299403 },
              ],
              percentiles: { p75: 1880 },
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
        lcp: 1880,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655331193286,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9760201935212452 },
                { start: 100, end: 300, density: 0.015004908147524887 },
                { start: 300, density: 0.008974898331229855 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6233087742799726 },
                { start: 2500, end: 4000, density: 0.25612860013395816 },
                { start: 4000, density: 0.12056262558606935 },
              ],
              percentiles: { p75: 2982 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9265873015873016,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029497354497354498,
                },
                { start: "0.25", density: 0.0439153439153439 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5709371129764691 },
                { start: 200, end: 500, density: 0.376083665886886 },
                { start: 500, density: 0.052979221136644876 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.281603836419342 },
                { start: 800, end: 1800, density: 0.5133875049953378 },
                { start: 1800, density: 0.20500865858532002 },
              ],
              percentiles: { p75: 1686 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4788073271827784 },
                { start: 1800, end: 3000, density: 0.32557828586709436 },
                { start: 3000, density: 0.1956143869501272 },
              ],
              percentiles: { p75: 2712 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2712,
        lcp: 2982,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331195419,
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
                { start: 0, end: 800, density: 0.5859916782246879 },
                { start: 800, end: 1800, density: 0.3532131299121591 },
                { start: 1800, density: 0.06079519186315308 },
              ],
              percentiles: { p75: 1099 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8080889092575619 },
                { start: 1800, end: 3000, density: 0.14722731439046746 },
                { start: 3000, density: 0.04468377635197067 },
              ],
              percentiles: { p75: 1565 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9867026594681064 },
                { start: 100, end: 300, density: 0.008898220355928814 },
                { start: 300, density: 0.004399120175964807 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8574873679375288 },
                { start: 2500, end: 4000, density: 0.11874138723013324 },
                { start: 4000, density: 0.023771244832337987 },
              ],
              percentiles: { p75: 1952 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9094999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0622 },
                { start: "0.25", density: 0.02829999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7853456014362656 },
                { start: 200, end: 500, density: 0.1850314183123878 },
                { start: 500, density: 0.02962298025134646 },
              ],
              percentiles: { p75: 186 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1565,
        lcp: 1952,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655331197598,
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
                { start: 0, end: 800, density: 0.595240475952405 },
                { start: 800, end: 1800, density: 0.3579642035796422 },
                { start: 1800, density: 0.04679532046795286 },
              ],
              percentiles: { p75: 981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8648270345930811 },
                { start: 1800, end: 3000, density: 0.09648070385922809 },
                { start: 3000, density: 0.03869226154769098 },
              ],
              percentiles: { p75: 1468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9563131060681794 },
                { start: 100, end: 300, density: 0.025492352294311703 },
                { start: 300, density: 0.018194541637508815 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8781121887811215 },
                { start: 2500, end: 4000, density: 0.08739126087391258 },
                { start: 4000, density: 0.03449655034496598 },
              ],
              percentiles: { p75: 1914 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9059094090590941,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07659234076592342,
                },
                { start: "0.25", density: 0.01749825017498251 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6254999999999996 },
                { start: 200, end: 500, density: 0.29289999999999977 },
                { start: 500, density: 0.08160000000000063 },
              ],
              percentiles: { p75: 270 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1468,
        lcp: 1914,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655331199122,
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
                { start: 0, end: 1800, density: 0.638535560225638 },
                { start: 1800, end: 3000, density: 0.23703130184714047 },
                { start: 3000, density: 0.12443313792722169 },
              ],
              percentiles: { p75: 2197 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9046636874068981 },
                { start: 100, end: 300, density: 0.050189068408387744 },
                { start: 300, density: 0.0451472441847142 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6840500997561508 },
                { start: 2500, end: 4000, density: 0.18438262026158256 },
                { start: 4000, density: 0.1315672799822666 },
              ],
              percentiles: { p75: 2836 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7974627688913404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16458907887479315,
                },
                { start: "0.25", density: 0.03794815223386654 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5587244554233106 },
                { start: 200, end: 500, density: 0.27891309229732786 },
                { start: 500, density: 0.16236245227936144 },
              ],
              percentiles: { p75: 340 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44178119846069236 },
                { start: 800, end: 1800, density: 0.42396921385376546 },
                { start: 1800, density: 0.1342495876855421 },
              ],
              percentiles: { p75: 1382 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2197,
        lcp: 2836,
        cls: "0.06",
        fid: 18,
      },
      timestamp: 1655331200031,
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
                  density: 0.9085048631531328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0649174394933273,
                },
                { start: "0.25", density: 0.026577697353539917 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5946755791172065 },
                { start: 200, end: 500, density: 0.31047597095770424 },
                { start: 500, density: 0.09484844992508934 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4072557716365283 },
                { start: 800, end: 1800, density: 0.35971795746616547 },
                { start: 1800, density: 0.23302627089730624 },
              ],
              percentiles: { p75: 1901 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46534992579061635 },
                { start: 1800, end: 3000, density: 0.2660121018381099 },
                { start: 3000, density: 0.26863797237127357 },
              ],
              percentiles: { p75: 3344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9592791949450035 },
                { start: 100, end: 300, density: 0.031008659021764563 },
                { start: 300, density: 0.009712146033231924 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5588872420476555 },
                { start: 2500, end: 4000, density: 0.21331661156082488 },
                { start: 4000, density: 0.2277961463915196 },
              ],
              percentiles: { p75: 4006 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3344,
        lcp: 4006,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331200840,
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
                { start: 0, end: 800, density: 0.4981602373887236 },
                { start: 800, end: 1800, density: 0.3762611275964388 },
                { start: 1800, density: 0.1255786350148374 },
              ],
              percentiles: { p75: 1308 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7361817966623272 },
                { start: 1800, end: 3000, density: 0.1513788614037165 },
                { start: 3000, density: 0.11243934193395634 },
              ],
              percentiles: { p75: 1879 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9605517909002904 },
                { start: 100, end: 300, density: 0.024443368828654402 },
                { start: 300, density: 0.015004840271055163 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7923593915811807 },
                { start: 2500, end: 4000, density: 0.1262822780332507 },
                { start: 4000, density: 0.0813583303855685 },
              ],
              percentiles: { p75: 2273 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8592723004694836,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09377934272300469,
                },
                { start: "0.25", density: 0.046948356807511825 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7488372093023256 },
                { start: 200, end: 500, density: 0.19570661896243283 },
                { start: 500, density: 0.05545617173524156 },
              ],
              percentiles: { p75: 201 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1879,
        lcp: 2273,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655331201555,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619076184763046 },
                { start: 100, end: 300, density: 0.024795040991801638 },
                { start: 300, density: 0.013297340531893726 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9025500000000001 },
                { start: 2500, end: 4000, density: 0.07525000000000001 },
                { start: 4000, density: 0.022199999999999918 },
              ],
              percentiles: { p75: 1796 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8945 },
                { start: "0.10", end: "0.25", density: 0.0774 },
                { start: "0.25", density: 0.028100000000000035 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4769000000000002 },
                { start: 200, end: 500, density: 0.3920000000000002 },
                { start: 500, density: 0.13109999999999963 },
              ],
              percentiles: { p75: 351 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6356999999999998 },
                { start: 800, end: 1800, density: 0.3309 },
                { start: 1800, density: 0.033400000000000214 },
              ],
              percentiles: { p75: 937 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.885288528852885 },
                { start: 1800, end: 3000, density: 0.09000900090009002 },
                { start: 3000, density: 0.024702470247025 },
              ],
              percentiles: { p75: 1388 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1388,
        lcp: 1796,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655331202410,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8515851585158516,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11891189118911893,
                },
                { start: "0.25", density: 0.02950295029502951 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7999000000000005 },
                { start: 200, end: 500, density: 0.14900000000000008 },
                { start: 500, density: 0.0510999999999995 },
              ],
              percentiles: { p75: 173 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6108443377350937 },
                { start: 800, end: 1800, density: 0.29461784713885536 },
                { start: 1800, density: 0.09453781512605097 },
              ],
              percentiles: { p75: 1118 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7578789394697343 },
                { start: 1800, end: 3000, density: 0.15137568784392186 },
                { start: 3000, density: 0.0907453726863438 },
              ],
              percentiles: { p75: 1778 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9781043791241752 },
                { start: 100, end: 300, density: 0.01679664067186563 },
                { start: 300, density: 0.005098980203959193 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.781246872810967 },
                { start: 2500, end: 4000, density: 0.13619533673571485 },
                { start: 4000, density: 0.08255779045331804 },
              ],
              percentiles: { p75: 2323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1778,
        lcp: 2323,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1655331202919,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9391190163543035,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02268115076996538,
                },
                { start: "0.25", density: 0.03819983287573118 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5483129761760791 },
                { start: 200, end: 500, density: 0.33619542870963837 },
                { start: 500, density: 0.11549159511428254 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.436805219913001 },
                { start: 800, end: 1800, density: 0.41094731754470704 },
                { start: 1800, density: 0.1522474625422919 },
              ],
              percentiles: { p75: 1391 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6082725060827223 },
                { start: 1800, end: 3000, density: 0.21727493917274843 },
                { start: 3000, density: 0.17445255474452928 },
              ],
              percentiles: { p75: 2430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451445515196443 },
                { start: 100, end: 300, density: 0.03508771929824561 },
                { start: 300, density: 0.01976772918211008 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7045674238762687 },
                { start: 2500, end: 4000, density: 0.1680763653939101 },
                { start: 4000, density: 0.12735621072982115 },
              ],
              percentiles: { p75: 2816 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2430,
        lcp: 2816,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331203421,
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
                  density: 0.9430882352941177,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025441176470588238,
                },
                { start: "0.25", density: 0.031470588235294104 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6287204664007364 },
                { start: 200, end: 500, density: 0.3232586683031605 },
                { start: 500, density: 0.04802086529610299 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36620145631067963 },
                { start: 800, end: 1800, density: 0.4657160194174758 },
                { start: 1800, density: 0.16808252427184456 },
              ],
              percentiles: { p75: 1575 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6534741853890786 },
                { start: 1800, end: 3000, density: 0.22794227049546187 },
                { start: 3000, density: 0.11858354411545949 },
              ],
              percentiles: { p75: 2219 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963269054178145 },
                { start: 100, end: 300, density: 0.008417508417508419 },
                { start: 300, density: 0.02831343740434652 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7640860857868779 },
                { start: 2500, end: 4000, density: 0.17927066208339554 },
                { start: 4000, density: 0.05664325212972652 },
              ],
              percentiles: { p75: 2514 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2219,
        lcp: 2514,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331204125,
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
                { start: 0, end: 200, density: 0.4270708999761284 },
                { start: 200, end: 500, density: 0.4296968250179045 },
                { start: 500, density: 0.14323227500596702 },
              ],
              percentiles: { p75: 369 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6260250844187166 },
                { start: 800, end: 1800, density: 0.34032802701398923 },
                { start: 1800, density: 0.03364688856729413 },
              ],
              percentiles: { p75: 947 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8835409360261213 },
                { start: 1800, end: 3000, density: 0.09178860805417824 },
                { start: 3000, density: 0.024670455919700525 },
              ],
              percentiles: { p75: 1401 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9576834723733527 },
                { start: 100, end: 300, density: 0.027566195139644544 },
                { start: 300, density: 0.014750332487002762 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9108499095840871 },
                { start: 2500, end: 4000, density: 0.06841470765521401 },
                { start: 4000, density: 0.020735382760698917 },
              ],
              percentiles: { p75: 1772 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9422754491017964,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04023952095808383,
                },
                { start: "0.25", density: 0.017485029940119762 },
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
        fcp: 1401,
        lcp: 1772,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655331205088,
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
                  density: 0.9428307123034227,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03866790009250693,
                },
                { start: "0.25", density: 0.01850138760407031 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4747976453274468 },
                { start: 200, end: 500, density: 0.3774834437086092 },
                { start: 500, density: 0.14771891096394404 },
              ],
              percentiles: { p75: 347 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6803044719314939 },
                { start: 800, end: 1800, density: 0.2745956232159848 },
                { start: 1800, density: 0.045099904852521314 },
              ],
              percentiles: { p75: 932 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8700735432773902 },
                { start: 1800, end: 3000, density: 0.09843484819913254 },
                { start: 3000, density: 0.031491608523477176 },
              ],
              percentiles: { p75: 1444 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483655274888559 },
                { start: 100, end: 300, density: 0.02934621099554234 },
                { start: 300, density: 0.02228826151560166 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.919452887537994 },
                { start: 2500, end: 4000, density: 0.06060030395136779 },
                { start: 4000, density: 0.01994680851063825 },
              ],
              percentiles: { p75: 1783 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1444,
        lcp: 1783,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655331205907,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.955108978204359 },
                { start: 100, end: 300, density: 0.024695060987802435 },
                { start: 300, density: 0.020195960807838535 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9277855571114224 },
                { start: 2500, end: 4000, density: 0.05611122224444891 },
                { start: 4000, density: 0.016103220644128686 },
              ],
              percentiles: { p75: 1635 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8679 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09819999999999998,
                },
                { start: "0.25", density: 0.033900000000000007 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6890310968903108 },
                { start: 200, end: 500, density: 0.2240775922407759 },
                { start: 500, density: 0.08689131086891322 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7328732873287329 },
                { start: 800, end: 1800, density: 0.24162416241624166 },
                { start: 1800, density: 0.025502550255025458 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9087000000000001 },
                { start: 1800, end: 3000, density: 0.0724 },
                { start: 3000, density: 0.01889999999999988 },
              ],
              percentiles: { p75: 1228 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1228,
        lcp: 1635,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1655331206922,
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
                { start: 0, end: 2500, density: 0.5952499999999994 },
                { start: 2500, end: 4000, density: 0.24564999999999967 },
                { start: 4000, density: 0.1591000000000009 },
              ],
              percentiles: { p75: 3265 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.806080608060806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1154115411541154,
                },
                { start: "0.25", density: 0.07850785078507869 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6107221444288861 },
                { start: 200, end: 500, density: 0.25735147029405897 },
                { start: 500, density: 0.13192638527705491 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29887011298870353 },
                { start: 800, end: 1800, density: 0.36536346365363753 },
                { start: 1800, density: 0.33576642335765905 },
              ],
              percentiles: { p75: 2084 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49549999999999866 },
                { start: 1800, end: 3000, density: 0.28149999999999925 },
                { start: 3000, density: 0.22300000000000209 },
              ],
              percentiles: { p75: 2854 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9329999999999999 },
                { start: 100, end: 300, density: 0.03699999999999999 },
                { start: 300, density: 0.03000000000000009 },
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
        fcp: 2854,
        lcp: 3265,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1655331207474,
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
                { start: "0.00", end: "0.10", density: 0.8867 },
                { start: "0.10", end: "0.25", density: 0.0848 },
                { start: "0.25", density: 0.028499999999999994 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5731853629274147 },
                { start: 200, end: 500, density: 0.30063987202559495 },
                { start: 500, density: 0.12617476504699038 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6181236247249451 },
                { start: 800, end: 1800, density: 0.3416683336667334 },
                { start: 1800, density: 0.04020804160832156 },
              ],
              percentiles: { p75: 984 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7913417316536691 },
                { start: 1800, end: 3000, density: 0.15786842631473696 },
                { start: 3000, density: 0.05078984203159409 },
              ],
              percentiles: { p75: 1685 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9550910182036406 },
                { start: 100, end: 300, density: 0.02560512102420484 },
                { start: 300, density: 0.019303860772154596 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8373337333733369 },
                { start: 2500, end: 4000, density: 0.11966196619661958 },
                { start: 4000, density: 0.043004300430043364 },
              ],
              percentiles: { p75: 2113 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1685,
        lcp: 2113,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331208043,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6475447986967652 },
                { start: 800, end: 1800, density: 0.31533628112636725 },
                { start: 1800, density: 0.037118920176867645 },
              ],
              percentiles: { p75: 938 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8672391783683415 },
                { start: 1800, end: 3000, density: 0.10131136126262034 },
                { start: 3000, density: 0.03144946036903813 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647938268627922 },
                { start: 100, end: 300, density: 0.02712804436942368 },
                { start: 300, density: 0.008078128767783948 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8942933519293352 },
                { start: 2500, end: 4000, density: 0.08327522082752209 },
                { start: 4000, density: 0.02243142724314272 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9432041642567959,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042567958357432045,
                },
                { start: "0.25", density: 0.014227877385772126 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5463157894736846 },
                { start: 200, end: 500, density: 0.36093567251462005 },
                { start: 500, density: 0.09274853801169525 },
              ],
              percentiles: { p75: 296 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1391,
        lcp: 1847,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655331208686,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44934493449344926 },
                { start: 800, end: 1800, density: 0.362136213621362 },
                { start: 1800, density: 0.18851885188518888 },
              ],
              percentiles: { p75: 1569 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6167766446710653 },
                { start: 1800, end: 3000, density: 0.2232553489302137 },
                { start: 3000, density: 0.15996800639872094 },
              ],
              percentiles: { p75: 2438 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534953495349534 },
                { start: 100, end: 300, density: 0.0295029502950295 },
                { start: 300, density: 0.017001700170017085 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7157715771577152 },
                { start: 2500, end: 4000, density: 0.19461946194619434 },
                { start: 4000, density: 0.0896089608960903 },
              ],
              percentiles: { p75: 2711 },
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
                  density: 0.04259574042595741,
                },
                { start: "0.25", density: 0.022397760223977603 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6499949984995502 },
                { start: 200, end: 500, density: 0.2586776032809845 },
                { start: 500, density: 0.09132739821946531 },
              ],
              percentiles: { p75: 256 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2438,
        lcp: 2711,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331209470,
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
                  density: 0.8793000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07000000000000002,
                },
                { start: "0.25", density: 0.05069999999999996 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7727772777277726 },
                { start: 200, end: 500, density: 0.13491349134913488 },
                { start: 500, density: 0.09230923092309254 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33196680331966805 },
                { start: 800, end: 1800, density: 0.4667533246675333 },
                { start: 1800, density: 0.20127987201279865 },
              ],
              percentiles: { p75: 1593 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.0662999999999998 },
                { start: 1800, end: 3000, density: 0.43379999999999874 },
                { start: 3000, density: 0.49990000000000134 },
              ],
              percentiles: { p75: 4703 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2621737826217382 },
                { start: 2500, end: 4000, density: 0.367563243675633 },
                { start: 4000, density: 0.3702629737026289 },
              ],
              percentiles: { p75: 5150 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4703, lcp: 5150, cls: "0.04" },
      timestamp: 1655331210044,
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
                  density: 0.9321260713298312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025435443737904337,
                },
                { start: "0.25", density: 0.04243848493226431 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4914523775319644 },
                { start: 200, end: 500, density: 0.4143082890389318 },
                { start: 500, density: 0.0942393334291037 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2629856850715747 },
                { start: 800, end: 1800, density: 0.5330606680299935 },
                { start: 1800, density: 0.20395364689843173 },
              ],
              percentiles: { p75: 1662 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4754579779051866 },
                { start: 1800, end: 3000, density: 0.32331142497552684 },
                { start: 3000, density: 0.20123059711928645 },
              ],
              percentiles: { p75: 2778 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602397310334747 },
                { start: 100, end: 300, density: 0.031135798859815815 },
                { start: 300, density: 0.008624470106709546 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6142597257206829 },
                { start: 2500, end: 4000, density: 0.25517772180240683 },
                { start: 4000, density: 0.13056255247691032 },
              ],
              percentiles: { p75: 3060 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2778,
        lcp: 3060,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331210935,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.us" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5930365296803652 },
                { start: 1800, end: 3000, density: 0.23387557077625568 },
                { start: 3000, density: 0.17308789954337894 },
              ],
              percentiles: { p75: 2451 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8801591981132072 },
                { start: 100, end: 300, density: 0.04746462264150942 },
                { start: 300, density: 0.07237617924528342 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6966323798788208 },
                { start: 2500, end: 4000, density: 0.17232633507115647 },
                { start: 4000, density: 0.13104128505002277 },
              ],
              percentiles: { p75: 2829 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8917941585535465,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03532684283727399,
                },
                { start: "0.25", density: 0.07287899860917951 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48783382789317437 },
                { start: 200, end: 500, density: 0.31439169139465833 },
                { start: 500, density: 0.19777448071216738 },
              ],
              percentiles: { p75: 397 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37465258476931595 },
                { start: 800, end: 1800, density: 0.45275152862701457 },
                { start: 1800, density: 0.17259588660366948 },
              ],
              percentiles: { p75: 1508 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2451,
        lcp: 2829,
        cls: "0.05",
        fid: 21,
      },
      timestamp: 1655331211756,
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
                { start: 0, end: 100, density: 0.9715056988602281 },
                { start: 100, end: 300, density: 0.019796040791841638 },
                { start: 300, density: 0.008698260347930411 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.47284728472847243 },
                { start: 2500, end: 4000, density: 0.30313031303130283 },
                { start: 4000, density: 0.2240224022402247 },
              ],
              percentiles: { p75: 3867 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9204 },
                { start: "0.10", end: "0.25", density: 0.0552 },
                { start: "0.25", density: 0.024399999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5198999999999998 },
                { start: 200, end: 500, density: 0.3604999999999998 },
                { start: 500, density: 0.11960000000000026 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2130147940823668 },
                { start: 800, end: 1800, density: 0.5210915633746495 },
                { start: 1800, density: 0.2658936425429837 },
              ],
              percentiles: { p75: 1880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37050000000000083 },
                { start: 1800, end: 3000, density: 0.3217000000000007 },
                { start: 3000, density: 0.30779999999999835 },
              ],
              percentiles: { p75: 3402 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3402,
        lcp: 3867,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655331212530,
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
                  density: 0.9376331360946746,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029230769230769234,
                },
                { start: "0.25", density: 0.033136094674556214 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3673815582212533 },
                { start: 200, end: 500, density: 0.44856415848782316 },
                { start: 500, density: 0.1840542832909236 },
              ],
              percentiles: { p75: 417 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5336094674556211 },
                { start: 800, end: 1800, density: 0.37727810650887567 },
                { start: 1800, density: 0.08911242603550323 },
              ],
              percentiles: { p75: 1143 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7253218884120167 },
                { start: 1800, end: 3000, density: 0.1831187410586551 },
                { start: 3000, density: 0.09155937052932825 },
              ],
              percentiles: { p75: 1891 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9081345565749236 },
                { start: 100, end: 300, density: 0.060917431192660555 },
                { start: 300, density: 0.030948012232415802 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8136845869591124 },
                { start: 2500, end: 4000, density: 0.12432947907974716 },
                { start: 4000, density: 0.06198593396114035 },
              ],
              percentiles: { p75: 2206 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1891,
        lcp: 2206,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1655331213135,
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
                { start: 0, end: 800, density: 0.606162610046608 },
                { start: 800, end: 1800, density: 0.290523045054376 },
                { start: 1800, density: 0.10331434489901598 },
              ],
              percentiles: { p75: 1080 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7126317158839588 },
                { start: 1800, end: 3000, density: 0.16898660075452032 },
                { start: 3000, density: 0.11838168336152093 },
              ],
              percentiles: { p75: 1986 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9419135883043989 },
                { start: 100, end: 300, density: 0.04046469129356481 },
                { start: 300, density: 0.017621720402036346 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7941865001950833 },
                { start: 2500, end: 4000, density: 0.12804005722460643 },
                { start: 4000, density: 0.07777344258031017 },
              ],
              percentiles: { p75: 2293 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9250805931656996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0571244358478401,
                },
                { start: "0.25", density: 0.017794970986460327 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4216292858984282 },
                { start: 200, end: 500, density: 0.39804073214746144 },
                { start: 500, density: 0.1803299819541104 },
              ],
              percentiles: { p75: 392 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1986,
        lcp: 2293,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331213899,
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
                { start: 0, end: 100, density: 0.9603142354056615 },
                { start: 100, end: 300, density: 0.027224705404307187 },
                { start: 300, density: 0.01246105919003115 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9444218792309775 },
                { start: 2500, end: 4000, density: 0.047860817763336054 },
                { start: 4000, density: 0.007717303005686431 },
              ],
              percentiles: { p75: 1617 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9664617851416356,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021512560128273652,
                },
                { start: "0.25", density: 0.012025654730090863 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6010021097046413 },
                { start: 200, end: 500, density: 0.2721518987341772 },
                { start: 500, density: 0.1268459915611816 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7457951593053467 },
                { start: 800, end: 1800, density: 0.24299193217557777 },
                { start: 1800, density: 0.01121290851907562 },
              ],
              percentiles: { p75: 807 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9132556248305774 },
                { start: 1800, end: 3000, density: 0.0689888858769314 },
                { start: 3000, density: 0.017755489292491225 },
              ],
              percentiles: { p75: 1304 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1304,
        lcp: 1617,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655331214572,
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
                  density: 0.8479152084791522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10838916108389164,
                },
                { start: "0.25", density: 0.04369563043695628 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4823964792958597 },
                { start: 200, end: 500, density: 0.29245849169834004 },
                { start: 500, density: 0.22514502900580022 },
              ],
              percentiles: { p75: 452 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42065239143486033 },
                { start: 800, end: 1800, density: 0.38723233940364166 },
                { start: 1800, density: 0.1921152691614979 },
              ],
              percentiles: { p75: 1591 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5153030606121219 },
                { start: 1800, end: 3000, density: 0.2360472094418881 },
                { start: 3000, density: 0.24864972994599008 },
              ],
              percentiles: { p75: 3033 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9113468080848509 },
                { start: 100, end: 300, density: 0.05783470082049228 },
                { start: 300, density: 0.030818491094656775 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5640564056405631 },
                { start: 2500, end: 4000, density: 0.24432443244324406 },
                { start: 4000, density: 0.19161916191619277 },
              ],
              percentiles: { p75: 3559 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3033,
        lcp: 3559,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1655331215330,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7019996748496179 },
                { start: 800, end: 1800, density: 0.26434726060803115 },
                { start: 1800, density: 0.03365306454235083 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8657437218287185 },
                { start: 1800, end: 3000, density: 0.10511912427559561 },
                { start: 3000, density: 0.02913715389568595 },
              ],
              percentiles: { p75: 1452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9379167989838043 },
                { start: 100, end: 300, density: 0.03969514131470308 },
                { start: 300, density: 0.022388059701492602 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9036202735317782 },
                { start: 2500, end: 4000, density: 0.07417538213998391 },
                { start: 4000, density: 0.022204344328238035 },
              ],
              percentiles: { p75: 1849 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9319706164164803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04742893644203129,
                },
                { start: "0.25", density: 0.020600447141488353 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44458242781744817 },
                { start: 200, end: 500, density: 0.42797267929214544 },
                { start: 500, density: 0.12744489289040642 },
              ],
              percentiles: { p75: 341 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1452,
        lcp: 1849,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1655331215805,
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
                { start: "0.00", end: "0.10", density: 0.8269 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12319999999999999,
                },
                { start: "0.25", density: 0.04989999999999997 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6973302669733026 },
                { start: 200, end: 500, density: 0.21147885211478845 },
                { start: 500, density: 0.09119088091190893 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4736052789442112 },
                { start: 800, end: 1800, density: 0.4083183363327335 },
                { start: 1800, density: 0.11807638472305533 },
              ],
              percentiles: { p75: 1334 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6792717086834736 },
                { start: 1800, end: 3000, density: 0.20678271308523424 },
                { start: 3000, density: 0.11394557823129209 },
              ],
              percentiles: { p75: 2164 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603881164349305 },
                { start: 100, end: 300, density: 0.0242072621786536 },
                { start: 300, density: 0.01540462138641592 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7176064787042591 },
                { start: 2500, end: 4000, density: 0.180613877224555 },
                { start: 4000, density: 0.10177964407118589 },
              ],
              percentiles: { p75: 2731 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2164,
        lcp: 2731,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655331216489,
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
                { start: 0, end: 1800, density: 0.6792717086834736 },
                { start: 1800, end: 3000, density: 0.20678271308523424 },
                { start: 3000, density: 0.11394557823129209 },
              ],
              percentiles: { p75: 2164 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603881164349305 },
                { start: 100, end: 300, density: 0.0242072621786536 },
                { start: 300, density: 0.01540462138641592 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7176064787042591 },
                { start: 2500, end: 4000, density: 0.180613877224555 },
                { start: 4000, density: 0.10177964407118589 },
              ],
              percentiles: { p75: 2731 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8269 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12319999999999999,
                },
                { start: "0.25", density: 0.04989999999999997 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6973302669733026 },
                { start: 200, end: 500, density: 0.21147885211478845 },
                { start: 500, density: 0.09119088091190893 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4736052789442112 },
                { start: 800, end: 1800, density: 0.4083183363327335 },
                { start: 1800, density: 0.11807638472305533 },
              ],
              percentiles: { p75: 1334 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2164,
        lcp: 2731,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655331216958,
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
                { start: 0, end: 800, density: 0.45341739217452204 },
                { start: 800, end: 1800, density: 0.4080856599619732 },
                { start: 1800, density: 0.1384969478635047 },
              ],
              percentiles: { p75: 1337 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6326898069420811 },
                { start: 1800, end: 3000, density: 0.20686205861758475 },
                { start: 3000, density: 0.1604481344403342 },
              ],
              percentiles: { p75: 2310 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533093381323736 },
                { start: 100, end: 300, density: 0.02979404119176165 },
                { start: 300, density: 0.01689662067586471 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.714164249274783 },
                { start: 2500, end: 4000, density: 0.1612983895168551 },
                { start: 4000, density: 0.12453736120836205 },
              ],
              percentiles: { p75: 2775 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8837767553510701,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0656131226245249,
                },
                { start: "0.25", density: 0.05061012202440493 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6102000000000001 },
                { start: 200, end: 500, density: 0.2876 },
                { start: 500, density: 0.10219999999999996 },
              ],
              percentiles: { p75: 277 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2310,
        lcp: 2775,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331217474,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7128425685137029 },
                { start: 2500, end: 4000, density: 0.16953390678135624 },
                { start: 4000, density: 0.1176235247049409 },
              ],
              percentiles: { p75: 2730 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9247000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03880000000000001,
                },
                { start: "0.25", density: 0.036500000000000025 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7151139544182323 },
                { start: 200, end: 500, density: 0.23980407836865245 },
                { start: 500, density: 0.04508196721311527 },
              ],
              percentiles: { p75: 220 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4091000000000003 },
                { start: 800, end: 1800, density: 0.4558000000000002 },
                { start: 1800, density: 0.1350999999999995 },
              ],
              percentiles: { p75: 1375 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6013999999999999 },
                { start: 1800, end: 3000, density: 0.25599999999999984 },
                { start: 3000, density: 0.14260000000000014 },
              ],
              percentiles: { p75: 2348 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635036496350365 },
                { start: 100, end: 300, density: 0.029697030296970302 },
                { start: 300, density: 0.006799320067993193 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2348,
        lcp: 2730,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331217973,
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
                { start: 0, end: 100, density: 0.9723972397239724 },
                { start: 100, end: 300, density: 0.0222022202220222 },
                { start: 300, density: 0.0054005400540053814 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6975697569756969 },
                { start: 2500, end: 4000, density: 0.19101910191019092 },
                { start: 4000, density: 0.11141114111411218 },
              ],
              percentiles: { p75: 2795 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9172917291729173,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046004600460046,
                },
                { start: "0.25", density: 0.03670367036703671 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6488404638144741 },
                { start: 200, end: 500, density: 0.29288284686125543 },
                { start: 500, density: 0.058276689324270464 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43345665433456626 },
                { start: 800, end: 1800, density: 0.4691530846915305 },
                { start: 1800, density: 0.09739026097390317 },
              ],
              percentiles: { p75: 1303 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6041604160416038 },
                { start: 1800, end: 3000, density: 0.25622562256225606 },
                { start: 3000, density: 0.13961396139614018 },
              ],
              percentiles: { p75: 2349 },
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
        lcp: 2795,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655331218429,
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
                  density: 0.8493849384938493,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0794079407940794,
                },
                { start: "0.25", density: 0.07120712071207128 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6622662266226624 },
                { start: 200, end: 500, density: 0.2834283428342835 },
                { start: 500, density: 0.05430543054305408 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2907127861641508 },
                { start: 800, end: 1800, density: 0.5223432970108969 },
                { start: 1800, density: 0.18694391682495226 },
              ],
              percentiles: { p75: 1655 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5100999999999998 },
                { start: 1800, end: 3000, density: 0.31559999999999977 },
                { start: 3000, density: 0.17430000000000045 },
              ],
              percentiles: { p75: 2620 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9808038392321535 },
                { start: 100, end: 300, density: 0.011397720455908818 },
                { start: 300, density: 0.007798440311937628 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6279500000000001 },
                { start: 2500, end: 4000, density: 0.23825000000000013 },
                { start: 4000, density: 0.13379999999999972 },
              ],
              percentiles: { p75: 3014 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2620,
        lcp: 3014,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655331218876,
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
                { start: 0, end: 2500, density: 0.774922507749226 },
                { start: 2500, end: 4000, density: 0.14118588141185892 },
                { start: 4000, density: 0.0838916108389151 },
              ],
              percentiles: { p75: 2396 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9357935793579357,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036403640364036406,
                },
                { start: "0.25", density: 0.02780278027802781 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6076784643071386 },
                { start: 200, end: 500, density: 0.27774445110977797 },
                { start: 500, density: 0.11457708458308362 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5104468659402182 },
                { start: 800, end: 1800, density: 0.3937818654403679 },
                { start: 1800, density: 0.09577126861941385 },
              ],
              percentiles: { p75: 1160 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.709641928385677 },
                { start: 1800, end: 3000, density: 0.18103620724144828 },
                { start: 3000, density: 0.1093218643728747 },
              ],
              percentiles: { p75: 1965 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9727972797279728 },
                { start: 100, end: 300, density: 0.020002000200020003 },
                { start: 300, density: 0.007200720072007193 },
              ],
              percentiles: { p75: 11 },
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
        lcp: 2396,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655331219324,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616115165450364 },
                { start: 100, end: 300, density: 0.026691992402279312 },
                { start: 300, density: 0.01169649105268429 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7276638319159575 },
                { start: 2500, end: 4000, density: 0.15717858929464726 },
                { start: 4000, density: 0.11515757878939527 },
              ],
              percentiles: { p75: 2658 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8830883088308831,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06520652065206521,
                },
                { start: "0.25", density: 0.05170517051705172 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5411705852926468 },
                { start: 200, end: 500, density: 0.31785892946473265 },
                { start: 500, density: 0.14097048524262062 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47798679207524497 },
                { start: 800, end: 1800, density: 0.41094656794076434 },
                { start: 1800, density: 0.11106663998399069 },
              ],
              percentiles: { p75: 1224 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6459875925555328 },
                { start: 1800, end: 3000, density: 0.2136281769061435 },
                { start: 3000, density: 0.14038423053832358 },
              ],
              percentiles: { p75: 2226 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2226,
        lcp: 2658,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331219885,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520725388601033 },
                { start: 100, end: 300, density: 0.027908619877531782 },
                { start: 300, density: 0.020018841262364803 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8411730205278588 },
                { start: 2500, end: 4000, density: 0.11824046920821107 },
                { start: 4000, density: 0.04058651026393016 },
              ],
              percentiles: { p75: 2098 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8801313628899836,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09113300492610839,
                },
                { start: "0.25", density: 0.02873563218390804 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5487847424119081 },
                { start: 200, end: 500, density: 0.31957204326084415 },
                { start: 500, density: 0.13164321432724768 },
              ],
              percentiles: { p75: 318 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6046838407494146 },
                { start: 800, end: 1800, density: 0.3521077283372366 },
                { start: 1800, density: 0.043208430913348694 },
              ],
              percentiles: { p75: 1002 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7815471299448293 },
                { start: 1800, end: 3000, density: 0.1651602300739523 },
                { start: 3000, density: 0.053292639981218304 },
              ],
              percentiles: { p75: 1715 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1715,
        lcp: 2098,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331220356,
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
                { start: "0.00", end: "0.10", density: 0.9326 },
                { start: "0.10", end: "0.25", density: 0.0404 },
                { start: "0.25", density: 0.02699999999999999 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6440644064406441 },
                { start: 200, end: 500, density: 0.2909290929092909 },
                { start: 500, density: 0.06500650065006516 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4579457945794584 },
                { start: 800, end: 1800, density: 0.4667466746674671 },
                { start: 1800, density: 0.07530753075307452 },
              ],
              percentiles: { p75: 1122 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6933693369336943 },
                { start: 1800, end: 3000, density: 0.22572257225722606 },
                { start: 3000, density: 0.08090809080907978 },
              ],
              percentiles: { p75: 1984 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784978497849786 },
                { start: 100, end: 300, density: 0.013801380138013802 },
                { start: 300, density: 0.0077007700770077014 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.774922507749225 },
                { start: 2500, end: 4000, density: 0.14528547145285473 },
                { start: 4000, density: 0.07979202079792026 },
              ],
              percentiles: { p75: 2398 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 1984,
        lcp: 2398,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1655331221042,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6376637423386614 },
                { start: 1800, end: 3000, density: 0.21812282177622885 },
                { start: 3000, density: 0.14421343588510965 },
              ],
              percentiles: { p75: 2253 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568690095846644 },
                { start: 100, end: 300, density: 0.030720078643401323 },
                { start: 300, density: 0.0124109117719342 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7394755833533793 },
                { start: 2500, end: 4000, density: 0.1561222035121481 },
                { start: 4000, density: 0.10440221313447262 },
              ],
              percentiles: { p75: 2593 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.932609465360557,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02277823675203588,
                },
                { start: "0.25", density: 0.04461229788740707 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47413164925917 },
                { start: 200, end: 500, density: 0.36701481661403984 },
                { start: 500, density: 0.15885353412679015 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4756711409395976 },
                { start: 800, end: 1800, density: 0.4096356663470761 },
                { start: 1800, density: 0.11469319271332638 },
              ],
              percentiles: { p75: 1232 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2253,
        lcp: 2593,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331221502,
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
                { start: 0, end: 200, density: 0.6051605160516054 },
                { start: 200, end: 500, density: 0.31743174317431744 },
                { start: 500, density: 0.07740774077407718 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30486951304869514 },
                { start: 800, end: 1800, density: 0.4740525947405259 },
                { start: 1800, density: 0.22107789221077903 },
              ],
              percentiles: { p75: 1750 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5132486751324854 },
                { start: 1800, end: 3000, density: 0.3024697530246967 },
                { start: 3000, density: 0.18428157184281785 },
              ],
              percentiles: { p75: 2664 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9710086973907828 },
                { start: 100, end: 300, density: 0.02309307207837649 },
                { start: 300, density: 0.005898230530840725 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6146999999999994 },
                { start: 2500, end: 4000, density: 0.22969999999999974 },
                { start: 4000, density: 0.15560000000000088 },
              ],
              percentiles: { p75: 3189 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9041904190419041,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06220622062206221,
                },
                { start: "0.25", density: 0.033603360336033596 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2664,
        lcp: 3189,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1655331222291,
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
                { start: 0, end: 1800, density: 0.6456354364563538 },
                { start: 1800, end: 3000, density: 0.2049795020497948 },
                { start: 3000, density: 0.1493850614938513 },
              ],
              percentiles: { p75: 2266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9113911391139112 },
                { start: 100, end: 300, density: 0.03540354035403541 },
                { start: 300, density: 0.053205320532053346 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7101130339101728 },
                { start: 2500, end: 4000, density: 0.16675002500750224 },
                { start: 4000, density: 0.12313694108232494 },
              ],
              percentiles: { p75: 2770 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8138813881388139,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10611061106110613,
                },
                { start: "0.25", density: 0.08000800080007998 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6168999999999998 },
                { start: 200, end: 500, density: 0.2336 },
                { start: 500, density: 0.1495000000000002 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42925707429256976 },
                { start: 800, end: 1800, density: 0.4212578742125778 },
                { start: 1800, density: 0.14948505149485247 },
              ],
              percentiles: { p75: 1407 },
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
        lcp: 2770,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1655331222745,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6309369063093685 },
                { start: 1800, end: 3000, density: 0.20677932206779298 },
                { start: 3000, density: 0.16228377162283858 },
              ],
              percentiles: { p75: 2387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9573999999999999 },
                { start: 100, end: 300, density: 0.0268 },
                { start: 300, density: 0.01580000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6956782713085238 },
                { start: 2500, end: 4000, density: 0.16946778711484606 },
                { start: 4000, density: 0.13485394157663017 },
              ],
              percentiles: { p75: 2904 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8297 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11599999999999999,
                },
                { start: "0.25", density: 0.05429999999999998 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7264726472647262 },
                { start: 200, end: 500, density: 0.21172117211721161 },
                { start: 500, density: 0.06180618061806223 },
              ],
              percentiles: { p75: 209 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37166283371662834 },
                { start: 800, end: 1800, density: 0.4146585341465854 },
                { start: 1800, density: 0.21367863213678637 },
              ],
              percentiles: { p75: 1664 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2387,
        lcp: 2904,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1655331223208,
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
                { start: 0, end: 1800, density: 0.7058588282343533 },
                { start: 1800, end: 3000, density: 0.1819636072785443 },
                { start: 3000, density: 0.11217756448710231 },
              ],
              percentiles: { p75: 2015 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635781468881328 },
                { start: 100, end: 300, density: 0.025215129077446465 },
                { start: 300, density: 0.011206724034420716 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7635472905418917 },
                { start: 2500, end: 4000, density: 0.14347130573885233 },
                { start: 4000, density: 0.09298140371925605 },
              ],
              percentiles: { p75: 2443 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.831983198319832,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11351135113511349,
                },
                { start: "0.25", density: 0.0545054505450545 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6653334666533344 },
                { start: 200, end: 500, density: 0.2543745625437456 },
                { start: 500, density: 0.08029197080291996 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46735979206238126 },
                { start: 800, end: 1800, density: 0.4015795261421573 },
                { start: 1800, density: 0.13106068179546138 },
              ],
              percentiles: { p75: 1343 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2015,
        lcp: 2443,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1655331223667,
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
                { start: 0, end: 2500, density: 0.7948499999999994 },
                { start: 2500, end: 4000, density: 0.12204999999999996 },
                { start: 4000, density: 0.08310000000000055 },
              ],
              percentiles: { p75: 2246 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8212821282128211,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12361236123612361,
                },
                { start: "0.25", density: 0.05510551055105519 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7834 },
                { start: 200, end: 500, density: 0.16739999999999997 },
                { start: 500, density: 0.04920000000000007 },
              ],
              percentiles: { p75: 185 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5063506350635062 },
                { start: 800, end: 1800, density: 0.3734373437343734 },
                { start: 1800, density: 0.12021202120212049 },
              ],
              percentiles: { p75: 1285 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7471988795518206 },
                { start: 1800, end: 3000, density: 0.1462585034013605 },
                { start: 3000, density: 0.1065426170468189 },
              ],
              percentiles: { p75: 1817 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967 },
                { start: 100, end: 300, density: 0.0202 },
                { start: 300, density: 0.012799999999999988 },
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
        fcp: 1817,
        lcp: 2246,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1655331224197,
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
                  density: 0.8793000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07000000000000002,
                },
                { start: "0.25", density: 0.05069999999999996 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7727772777277726 },
                { start: 200, end: 500, density: 0.13491349134913488 },
                { start: 500, density: 0.09230923092309254 },
              ],
              percentiles: { p75: 180 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33196680331966805 },
                { start: 800, end: 1800, density: 0.4667533246675333 },
                { start: 1800, density: 0.20127987201279865 },
              ],
              percentiles: { p75: 1569 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.0662999999999998 },
                { start: 1800, end: 3000, density: 0.43379999999999874 },
                { start: 3000, density: 0.49990000000000134 },
              ],
              percentiles: { p75: 4604 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2621737826217382 },
                { start: 2500, end: 4000, density: 0.367563243675633 },
                { start: 4000, density: 0.3702629737026289 },
              ],
              percentiles: { p75: 5070 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4604, lcp: 5070, cls: "0.04" },
      timestamp: 1655331224743,
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
                { start: 0, end: 1800, density: 0.6315105468359494 },
                { start: 1800, end: 3000, density: 0.224632610216935 },
                { start: 3000, density: 0.14385684294711557 },
              ],
              percentiles: { p75: 2384 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9760000000000001 },
                { start: 100, end: 300, density: 0.0055000000000000005 },
                { start: 300, density: 0.018500000000000016 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170065986802638 },
                { start: 2500, end: 4000, density: 0.19061187762447507 },
                { start: 4000, density: 0.09238152369526098 },
              ],
              percentiles: { p75: 2781 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8272827282728272,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.114011401140114,
                },
                { start: "0.25", density: 0.058705870587058694 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7326465293058612 },
                { start: 200, end: 500, density: 0.22564512902580522 },
                { start: 500, density: 0.04170834166833371 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33223322332233207 },
                { start: 800, end: 1800, density: 0.4614461446144611 },
                { start: 1800, density: 0.20632063206320686 },
              ],
              percentiles: { p75: 1668 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2384,
        lcp: 2781,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1655331225325,
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
                  density: 0.9094999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0622 },
                { start: "0.25", density: 0.02829999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8043195680431957 },
                { start: 200, end: 500, density: 0.16548345165483455 },
                { start: 500, density: 0.030196980301969784 },
              ],
              percentiles: { p75: 176 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5947405259474053 },
                { start: 800, end: 1800, density: 0.34736526347365265 },
                { start: 1800, density: 0.05789421057894214 },
              ],
              percentiles: { p75: 1075 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8141814181418143 },
                { start: 1800, end: 3000, density: 0.14051405140514053 },
                { start: 3000, density: 0.04530453045304528 },
              ],
              percentiles: { p75: 1545 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9867026594681064 },
                { start: 100, end: 300, density: 0.008898220355928814 },
                { start: 300, density: 0.004399120175964807 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8552921168467388 },
                { start: 2500, end: 4000, density: 0.11529611844737891 },
                { start: 4000, density: 0.029411764705882415 },
              ],
              percentiles: { p75: 1955 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1545,
        lcp: 1955,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1655331225789,
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
                  density: 0.8091000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1521 },
                { start: "0.25", density: 0.038800000000000036 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5996000000000002 },
                { start: 200, end: 500, density: 0.2510000000000002 },
                { start: 500, density: 0.14939999999999956 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4611077784443109 },
                { start: 800, end: 1800, density: 0.4132173565286939 },
                { start: 1800, density: 0.12567486502699518 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6601320264052813 },
                { start: 1800, end: 3000, density: 0.22434486897379477 },
                { start: 3000, density: 0.11552310462092391 },
              ],
              percentiles: { p75: 2129 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9162083791620838 },
                { start: 100, end: 300, density: 0.0441955804419558 },
                { start: 300, density: 0.0395960403959605 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6982396479295843 },
                { start: 2500, end: 4000, density: 0.17503500700139993 },
                { start: 4000, density: 0.1267253450690159 },
              ],
              percentiles: { p75: 2766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2129,
        lcp: 2766,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1655331226267,
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
                  density: 0.7232000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1405 },
                { start: "0.25", density: 0.1362999999999999 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4414000000000004 },
                { start: 800, end: 1800, density: 0.33190000000000025 },
                { start: 1800, density: 0.22669999999999935 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5390078015603117 },
                { start: 1800, end: 3000, density: 0.1967393478695738 },
                { start: 3000, density: 0.26425285057011455 },
              ],
              percentiles: { p75: 3165 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5728 },
                { start: 2500, end: 4000, density: 0.21739999999999998 },
                { start: 4000, density: 0.2098 },
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
      extractedResults: { fcp: 3165, lcp: 3739, cls: "0.14" },
      timestamp: 1655331226814,
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
                { start: 0, end: 1800, density: 0.7460746074607463 },
                { start: 1800, end: 3000, density: 0.18041804180418045 },
                { start: 3000, density: 0.07350735073507335 },
              ],
              percentiles: { p75: 1822 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9805 },
                { start: 100, end: 300, density: 0.019500000000000007 },
                { start: 300 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8018698130186984 },
                { start: 2500, end: 4000, density: 0.1282371762823718 },
                { start: 4000, density: 0.06989301069892982 },
              ],
              percentiles: { p75: 2250 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9450999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0429 },
                { start: "0.25", density: 0.011999999999999992 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8987898789878987 },
                { start: 200, end: 500, density: 0.08300830083008302 },
                { start: 500, density: 0.018201820182018182 },
              ],
              percentiles: { p75: 104 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5640435956404362 },
                { start: 800, end: 1800, density: 0.3351664833516649 },
                { start: 1800, density: 0.10078992100789903 },
              ],
              percentiles: { p75: 1202 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1822, lcp: 2250, cls: "0.02", fid: 8 },
      timestamp: 1655331227280,
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
                { start: 0, end: 800, density: 0.4414000000000004 },
                { start: 800, end: 1800, density: 0.33190000000000025 },
                { start: 1800, density: 0.22669999999999935 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5390078015603117 },
                { start: 1800, end: 3000, density: 0.1967393478695738 },
                { start: 3000, density: 0.26425285057011455 },
              ],
              percentiles: { p75: 3165 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5728 },
                { start: 2500, end: 4000, density: 0.21739999999999998 },
                { start: 4000, density: 0.2098 },
              ],
              percentiles: { p75: 3739 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7232000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1405 },
                { start: "0.25", density: 0.1362999999999999 },
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
      extractedResults: { fcp: 3165, lcp: 3739, cls: "0.14" },
      timestamp: 1655331227750,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651930386077215 },
                { start: 100, end: 300, density: 0.026505301060212042 },
                { start: 300, density: 0.008301660332066417 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5637999999999984 },
                { start: 2500, end: 4000, density: 0.20899999999999946 },
                { start: 4000, density: 0.22720000000000212 },
              ],
              percentiles: { p75: 4023 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9079 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06520000000000001,
                },
                { start: "0.25", density: 0.026899999999999986 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.633036696330367 },
                { start: 200, end: 500, density: 0.2772722727727227 },
                { start: 500, density: 0.08969103089691033 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4041595840415954 },
                { start: 800, end: 1800, density: 0.3708629137086286 },
                { start: 1800, density: 0.22497750224977597 },
              ],
              percentiles: { p75: 1852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4794958991798337 },
                { start: 1800, end: 3000, density: 0.2590518103620711 },
                { start: 3000, density: 0.2614522904580952 },
              ],
              percentiles: { p75: 3323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3323,
        lcp: 4023,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655331228215,
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
                { start: 0, end: 1800, density: 0.8945 },
                { start: 1800, end: 3000, density: 0.07299999999999998 },
                { start: 3000, density: 0.032500000000000126 },
              ],
              percentiles: { p75: 1298 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966203379662034 },
                { start: 100, end: 300, density: 0.019798020197980208 },
                { start: 300, density: 0.013998600139985962 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9073592640735926 },
                { start: 2500, end: 4000, density: 0.06414358564143585 },
                { start: 4000, density: 0.02849715028497155 },
              ],
              percentiles: { p75: 1752 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.805738852229554,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1472705458908218,
                },
                { start: "0.25", density: 0.0469906018796241 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6710644677661171 },
                { start: 200, end: 500, density: 0.23938030984507752 },
                { start: 500, density: 0.08955522238880546 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7332733273327332 },
                { start: 800, end: 1800, density: 0.2251225122512251 },
                { start: 1800, density: 0.04160416041604164 },
              ],
              percentiles: { p75: 836 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1298,
        lcp: 1752,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1655331228696,
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
                  density: 0.8532853285328533,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10481048104810481,
                },
                { start: "0.25", density: 0.041904190419041885 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7027702770277029 },
                { start: 200, end: 500, density: 0.20842084208420847 },
                { start: 500, density: 0.08880888088808869 },
              ],
              percentiles: { p75: 232 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.849554866459938 },
                { start: 800, end: 1800, density: 0.1334400320096029 },
                { start: 1800, density: 0.017005101530459088 },
              ],
              percentiles: { p75: 682 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.944577831132453 },
                { start: 1800, end: 3000, density: 0.041216486594637856 },
                { start: 3000, density: 0.014205682272909198 },
              ],
              percentiles: { p75: 1125 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638 },
                { start: 100, end: 300, density: 0.022199999999999998 },
                { start: 300, density: 0.01400000000000006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9485 },
                { start: 2500, end: 4000, density: 0.0385 },
                { start: 4000, density: 0.012999999999999984 },
              ],
              percentiles: { p75: 1500 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1125,
        lcp: 1500,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1655331229246,
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
                { start: 0, end: 100, density: 0.9683120818078526 },
                { start: 100, end: 300, density: 0.024870597146824904 },
                { start: 300, density: 0.006817321045322552 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7747347643720699 },
                { start: 2500, end: 4000, density: 0.14310387367382188 },
                { start: 4000, density: 0.08216136195410825 },
              ],
              percentiles: { p75: 2391 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9601129111438388,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0157093765341188,
                },
                { start: "0.25", density: 0.024177712322042237 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.538300750030739 },
                { start: 200, end: 500, density: 0.3293987458502397 },
                { start: 500, density: 0.13230050411902133 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48386701018279965 },
                { start: 800, end: 1800, density: 0.4130781499202552 },
                { start: 1800, density: 0.10305483989694521 },
              ],
              percentiles: { p75: 1194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6837416481069039 },
                { start: 1800, end: 3000, density: 0.19648601831229878 },
                { start: 3000, density: 0.1197723335807974 },
              ],
              percentiles: { p75: 2051 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2051,
        lcp: 2391,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331229711,
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
                  density: 0.9567043295670433,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029097090290970903,
                },
                { start: "0.25", density: 0.014198580141985787 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.656831366273255 },
                { start: 200, end: 500, density: 0.2732546509301862 },
                { start: 500, density: 0.06991398279655878 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6273882164649394 },
                { start: 800, end: 1800, density: 0.320296088826648 },
                { start: 1800, density: 0.052315694708412644 },
              ],
              percentiles: { p75: 964 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8649729945989196 },
                { start: 1800, end: 3000, density: 0.09621924384876974 },
                { start: 3000, density: 0.03880776155231064 },
              ],
              percentiles: { p75: 1438 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635255321275107 },
                { start: 100, end: 300, density: 0.021884680723493557 },
                { start: 300, density: 0.014589787148995701 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8888388838883885 },
                { start: 2500, end: 4000, density: 0.08205820582058206 },
                { start: 4000, density: 0.0291029102910294 },
              ],
              percentiles: { p75: 1822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1438,
        lcp: 1822,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331230408,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.960324856876581,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0260950605778192,
                },
                { start: "0.25", density: 0.01358008254559978 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4498677248677252 },
                { start: 200, end: 500, density: 0.41349206349206385 },
                { start: 500, density: 0.136640211640211 },
              ],
              percentiles: { p75: 352 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7086909871244635 },
                { start: 800, end: 1800, density: 0.21955472103004295 },
                { start: 1800, density: 0.07175429184549352 },
              ],
              percentiles: { p75: 866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8602684563758387 },
                { start: 1800, end: 3000, density: 0.09704697986577178 },
                { start: 3000, density: 0.042684563758389464 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554939249867935 },
                { start: 100, end: 300, density: 0.027601690438457477 },
                { start: 300, density: 0.016904384574748993 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8815172228923738 },
                { start: 2500, end: 4000, density: 0.08845999195818258 },
                { start: 4000, density: 0.03002278514944375 },
              ],
              percentiles: { p75: 1752 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1364,
        lcp: 1752,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655331230886,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505851755526658 },
                { start: 100, end: 300, density: 0.037711313394018196 },
                { start: 300, density: 0.011703511053315983 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5895820835832842 },
                { start: 2500, end: 4000, density: 0.2337532493501304 },
                { start: 4000, density: 0.17666466706658532 },
              ],
              percentiles: { p75: 3428 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8337166283371663,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1084891510848915,
                },
                { start: "0.25", density: 0.05779422057794224 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6245249049809967 },
                { start: 200, end: 500, density: 0.2760552110422086 },
                { start: 500, density: 0.09941988397679472 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3176999999999998 },
                { start: 800, end: 1800, density: 0.42779999999999985 },
                { start: 1800, density: 0.25450000000000045 },
              ],
              percentiles: { p75: 1874 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5382385284414675 },
                { start: 1800, end: 3000, density: 0.24032790162951112 },
                { start: 3000, density: 0.2214335699290214 },
              ],
              percentiles: { p75: 2897 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2897,
        lcp: 3428,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655331231665,
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
                  density: 0.9453025200325166,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029032632679131348,
                },
                { start: "0.25", density: 0.025664847288352107 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45798718253026355 },
                { start: 200, end: 500, density: 0.40944694991692393 },
                { start: 500, density: 0.13256586755281258 },
              ],
              percentiles: { p75: 356 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20983074426153453 },
                { start: 800, end: 1800, density: 0.5128680732668668 },
                { start: 1800, density: 0.27730118247159863 },
              ],
              percentiles: { p75: 1938 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.35853030657617646 },
                { start: 1800, end: 3000, density: 0.31968172244324866 },
                { start: 3000, density: 0.3217879709805749 },
              ],
              percentiles: { p75: 3496 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9669064748201438 },
                { start: 100, end: 300, density: 0.022661870503597123 },
                { start: 300, density: 0.010431654676258987 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4717840869260423 },
                { start: 2500, end: 4000, density: 0.31510690501226746 },
                { start: 4000, density: 0.21310900806169022 },
              ],
              percentiles: { p75: 3751 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3496,
        lcp: 3751,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331232134,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5445455454454561 },
                { start: 200, end: 500, density: 0.34386561343865657 },
                { start: 500, density: 0.1115888411158874 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7258451690338066 },
                { start: 800, end: 1800, density: 0.21084216843368667 },
                { start: 1800, density: 0.06331266253250682 },
              ],
              percentiles: { p75: 846 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8728618585575671 },
                { start: 1800, end: 3000, density: 0.08802640792237663 },
                { start: 3000, density: 0.0391117335200563 },
              ],
              percentiles: { p75: 1312 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9640964096409641 },
                { start: 100, end: 300, density: 0.022302230223022305 },
                { start: 300, density: 0.01360136013601353 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8843152945883765 },
                { start: 2500, end: 4000, density: 0.08537561268380513 },
                { start: 4000, density: 0.03030909272781835 },
              ],
              percentiles: { p75: 1739 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8521147885211479,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0972902709729027,
                },
                { start: "0.25", density: 0.05059494050594941 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1312,
        lcp: 1739,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1655331232846,
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
                  density: 0.896010398960104,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08649135086491352,
                },
                { start: "0.25", density: 0.017498250174982487 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6985301469853012 },
                { start: 200, end: 500, density: 0.24487551244875505 },
                { start: 500, density: 0.056594340565943674 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7077876637008899 },
                { start: 800, end: 1800, density: 0.26272118364490654 },
                { start: 1800, density: 0.02949115265420373 },
              ],
              percentiles: { p75: 858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8973589435774312 },
                { start: 1800, end: 3000, density: 0.07993197278911564 },
                { start: 3000, density: 0.0227090836334533 },
              ],
              percentiles: { p75: 1340 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9767023297670233 },
                { start: 100, end: 300, density: 0.015298470152984701 },
                { start: 300, density: 0.007999200079992008 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9261278383515056 },
                { start: 2500, end: 4000, density: 0.056166850055016475 },
                { start: 4000, density: 0.01770531159347794 },
              ],
              percentiles: { p75: 1693 },
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
        lcp: 1693,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655331233379,
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
                { start: 0, end: 200, density: 0.6792679267926792 },
                { start: 200, end: 500, density: 0.26522652265226526 },
                { start: 500, density: 0.05550555055505547 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40643742502998836 },
                { start: 800, end: 1800, density: 0.4545181927229113 },
                { start: 1800, density: 0.13904438224710047 },
              ],
              percentiles: { p75: 1459 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6542654265426535 },
                { start: 1800, end: 3000, density: 0.21262126212621238 },
                { start: 3000, density: 0.13311331133113413 },
              ],
              percentiles: { p75: 2208 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696969696969696 },
                { start: 100, end: 300, density: 0.024802480248024797 },
                { start: 300, density: 0.0055005500550054974 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6964392878575708 },
                { start: 2500, end: 4000, density: 0.1814362872574513 },
                { start: 4000, density: 0.12212442488497786 },
              ],
              percentiles: { p75: 2832 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8859 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07919999999999999,
                },
                { start: "0.25", density: 0.03489999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2208,
        lcp: 2832,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655331233903,
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
                { start: 0, end: 2500, density: 0.6974894978995796 },
                { start: 2500, end: 4000, density: 0.2235947189437887 },
                { start: 4000, density: 0.07891578315663177 },
              ],
              percentiles: { p75: 2899 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8598140185981401,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08229177082291769,
                },
                { start: "0.25", density: 0.05789421057894208 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5771845630873823 },
                { start: 200, end: 500, density: 0.26834633073385306 },
                { start: 500, density: 0.15446910617876466 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33206641328265646 },
                { start: 800, end: 1800, density: 0.4314862972594517 },
                { start: 1800, density: 0.23644728945789187 },
              ],
              percentiles: { p75: 1854 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5595559555955594 },
                { start: 1800, end: 3000, density: 0.31323132313231317 },
                { start: 3000, density: 0.1272127212721274 },
              ],
              percentiles: { p75: 2493 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9256074392560744 },
                { start: 100, end: 300, density: 0.044195580441955803 },
                { start: 300, density: 0.03019698030196975 },
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
        fcp: 2493,
        lcp: 2899,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1655331234475,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4155489614243322 },
                { start: 800, end: 1800, density: 0.37483679525222535 },
                { start: 1800, density: 0.20961424332344236 },
              ],
              percentiles: { p75: 1647 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.584390938204246 },
                { start: 1800, end: 3000, density: 0.24077808089194638 },
                { start: 3000, density: 0.1748309809038077 },
              ],
              percentiles: { p75: 2579 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9431679296015644 },
                { start: 100, end: 300, density: 0.036054754338792475 },
                { start: 300, density: 0.02077731605964323 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6952901998097052 },
                { start: 2500, end: 4000, density: 0.2100380589914367 },
                { start: 4000, density: 0.09467174119885811 },
              ],
              percentiles: { p75: 2804 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.96208810676745 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0165347820951931,
                },
                { start: "0.25", density: 0.0213771111373568 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5848466626578476 },
                { start: 200, end: 500, density: 0.3071557426337944 },
                { start: 500, density: 0.10799759470835796 },
              ],
              percentiles: { p75: 284 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2579,
        lcp: 2804,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331235040,
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
                  density: 0.7232000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1405 },
                { start: "0.25", density: 0.1362999999999999 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4414000000000004 },
                { start: 800, end: 1800, density: 0.33190000000000025 },
                { start: 1800, density: 0.22669999999999935 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5390078015603117 },
                { start: 1800, end: 3000, density: 0.1967393478695738 },
                { start: 3000, density: 0.26425285057011455 },
              ],
              percentiles: { p75: 3303 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5728 },
                { start: 2500, end: 4000, density: 0.21739999999999998 },
                { start: 4000, density: 0.2098 },
              ],
              percentiles: { p75: 3765 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3303, lcp: 3765, cls: "0.14" },
      timestamp: 1655331235930,
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
                { start: 0, end: 800, density: 0.6501349865013497 },
                { start: 800, end: 1800, density: 0.3147685231476853 },
                { start: 1800, density: 0.035096490350964925 },
              ],
              percentiles: { p75: 937 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8714257148570285 },
                { start: 1800, end: 3000, density: 0.09808038392321534 },
                { start: 3000, density: 0.030493901219756203 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702059588082383 },
                { start: 100, end: 300, density: 0.02309538092381523 },
                { start: 300, density: 0.006698660267946416 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8897610238976102 },
                { start: 2500, end: 4000, density: 0.08634136586341366 },
                { start: 4000, density: 0.023897610238976116 },
              ],
              percentiles: { p75: 1876 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9482 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038900000000000004,
                },
                { start: "0.25", density: 0.012899999999999993 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6046000000000004 },
                { start: 200, end: 500, density: 0.3126000000000001 },
                { start: 500, density: 0.08279999999999946 },
              ],
              percentiles: { p75: 279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1391,
        lcp: 1876,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655331236725,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44182189334013805 },
                { start: 800, end: 1800, density: 0.47703495789742306 },
                { start: 1800, density: 0.08114314876243887 },
              ],
              percentiles: { p75: 1130 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6716245672522124 },
                { start: 1800, end: 3000, density: 0.2419540966790617 },
                { start: 3000, density: 0.08642133606872593 },
              ],
              percentiles: { p75: 2016 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9732179088326796 },
                { start: 100, end: 300, density: 0.01866630596510212 },
                { start: 300, density: 0.008115785202218314 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7998591909882233 },
                { start: 2500, end: 4000, density: 0.14266513056835642 },
                { start: 4000, density: 0.05747567844342032 },
              ],
              percentiles: { p75: 2307 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9554480651731161,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019602851323828916,
                },
                { start: "0.25", density: 0.024949083503054977 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5791447861965493 },
                { start: 200, end: 500, density: 0.34708677169292323 },
                { start: 500, density: 0.0737684421105274 },
              ],
              percentiles: { p75: 304 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2016,
        lcp: 2307,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331237223,
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
                  density: 0.8362726134941404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10126294231425648,
                },
                { start: "0.25", density: 0.06246444419160313 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5815433571996819 },
                { start: 200, end: 500, density: 0.31037617911126275 },
                { start: 500, density: 0.10808046368905537 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2898089171974526 },
                { start: 800, end: 1800, density: 0.4365332120109196 },
                { start: 1800, density: 0.27365787079162784 },
              ],
              percentiles: { p75: 1919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5080562221460408 },
                { start: 1800, end: 3000, density: 0.25414238372757425 },
                { start: 3000, density: 0.23780139412638493 },
              ],
              percentiles: { p75: 2970 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9445996275605215 },
                { start: 100, end: 300, density: 0.04224860335195531 },
                { start: 300, density: 0.013151769087523245 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5635854661791602 },
                { start: 2500, end: 4000, density: 0.2559986288848268 },
                { start: 4000, density: 0.18041590493601312 },
              ],
              percentiles: { p75: 3450 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2970,
        lcp: 3450,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655331237965,
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
                { start: 0, end: 100, density: 0.9813000000000001 },
                { start: 100, end: 300, density: 0.0122 },
                { start: 300, density: 0.006500000000000002 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9285714285714286 },
                { start: 2500, end: 4000, density: 0.05543336998900331 },
                { start: 4000, density: 0.015995201439568136 },
              ],
              percentiles: { p75: 1644 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8268826882688269,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15361536153615363,
                },
                { start: "0.25", density: 0.019501950195019498 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7522 },
                { start: 200, end: 500, density: 0.17149999999999993 },
                { start: 500, density: 0.07630000000000005 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7621 },
                { start: 800, end: 1800, density: 0.20739999999999997 },
                { start: 1800, density: 0.03049999999999997 },
              ],
              percentiles: { p75: 793 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9179410294852572 },
                { start: 1800, end: 3000, density: 0.05787106446776613 },
                { start: 3000, density: 0.02418790604697656 },
              ],
              percentiles: { p75: 1212 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1212,
        lcp: 1644,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1655331238824,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6720633207411404 },
                { start: 1800, end: 3000, density: 0.20147508544702286 },
                { start: 3000, density: 0.1264615938118368 },
              ],
              percentiles: { p75: 2173 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653235180162727 },
                { start: 100, end: 300, density: 0.028864781092599767 },
                { start: 300, density: 0.00581170089112745 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7378300700556846 },
                { start: 2500, end: 4000, density: 0.16714567989940712 },
                { start: 4000, density: 0.09502425004490833 },
              ],
              percentiles: { p75: 2577 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9239755884917176,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05091543156059285,
                },
                { start: "0.25", density: 0.025108979947689628 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6638542665388296 },
                { start: 200, end: 500, density: 0.25886864813039284 },
                { start: 500, density: 0.07727708533077747 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4971387696709584 },
                { start: 800, end: 1800, density: 0.3721387696709584 },
                { start: 1800, density: 0.13072246065808324 },
              ],
              percentiles: { p75: 1337 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2173,
        lcp: 2577,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1655331239341,
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
                  density: 0.8095000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.139 },
                { start: "0.25", density: 0.051499999999999956 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6248624862486252 },
                { start: 200, end: 500, density: 0.2818281828182819 },
                { start: 500, density: 0.0933093309330928 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7460746074607462 },
                { start: 800, end: 1800, density: 0.2212221222122213 },
                { start: 1800, density: 0.03270327032703256 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8893221355728853 },
                { start: 1800, end: 3000, density: 0.08208358328334334 },
                { start: 3000, density: 0.0285942811437713 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586958695869586 },
                { start: 100, end: 300, density: 0.027202720272027196 },
                { start: 300, density: 0.01410141014101414 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9089817963592718 },
                { start: 2500, end: 4000, density: 0.06691338267653532 },
                { start: 4000, density: 0.024104820964192957 },
              ],
              percentiles: { p75: 1802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1802,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1655331240106,
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
                  density: 0.9420235878336437,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025822470515207942,
                },
                { start: "0.25", density: 0.032153941651148384 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4958259549709079 },
                { start: 200, end: 500, density: 0.3134328358208953 },
                { start: 500, density: 0.19074120920819682 },
              ],
              percentiles: { p75: 397 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30127883650952886 },
                { start: 800, end: 1800, density: 0.4524824473420266 },
                { start: 1800, density: 0.24623871614844467 },
              ],
              percentiles: { p75: 1896 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5239644600175194 },
                { start: 1800, end: 3000, density: 0.3397572268802399 },
                { start: 3000, density: 0.1362783131022408 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9102155337329423 },
                { start: 100, end: 300, density: 0.05126897079454151 },
                { start: 300, density: 0.03851549547251619 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6872882419375077 },
                { start: 2500, end: 4000, density: 0.23892583762078048 },
                { start: 4000, density: 0.07378592044171177 },
              ],
              percentiles: { p75: 2934 },
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
        lcp: 2934,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655331240618,
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
                { start: 0, end: 800, density: 0.36032803690415166 },
                { start: 800, end: 1800, density: 0.4769349051768323 },
                { start: 1800, density: 0.16273705791901605 },
              ],
              percentiles: { p75: 1489 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5476923076923071 },
                { start: 1800, end: 3000, density: 0.28602564102564076 },
                { start: 3000, density: 0.16628205128205212 },
              ],
              percentiles: { p75: 2522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512866382276042 },
                { start: 100, end: 300, density: 0.040869684876840506 },
                { start: 300, density: 0.007843676895555238 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6939366632337788 },
                { start: 2500, end: 4000, density: 0.18144953656024693 },
                { start: 4000, density: 0.12461380020597423 },
              ],
              percentiles: { p75: 2771 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9658629441624366,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01218274111675127,
                },
                { start: "0.25", density: 0.021954314720812197 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6369181806126503 },
                { start: 200, end: 500, density: 0.30659063784643925 },
                { start: 500, density: 0.05649118154091048 },
              ],
              percentiles: { p75: 256 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2522,
        lcp: 2771,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655331241526,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5879023307436179 },
                { start: 200, end: 500, density: 0.3230854605993338 },
                { start: 500, density: 0.08901220865704836 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5892817433844788 },
                { start: 800, end: 1800, density: 0.3619079386257506 },
                { start: 1800, density: 0.04881031798977059 },
              ],
              percentiles: { p75: 985 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8608367550771276 },
                { start: 1800, end: 3000, density: 0.0986571967595161 },
                { start: 3000, density: 0.04050604816335635 },
              ],
              percentiles: { p75: 1479 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9513943330720125 },
                { start: 100, end: 300, density: 0.028558629185799076 },
                { start: 300, density: 0.02004703774218847 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8818373460556977 },
                { start: 2500, end: 4000, density: 0.08410074337068683 },
                { start: 4000, density: 0.03406191057361546 },
              ],
              percentiles: { p75: 1888 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9254458845685167,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06436246815110225,
                },
                { start: "0.25", density: 0.010191647280381078 },
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
        fcp: 1479,
        lcp: 1888,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331242417,
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
                { start: 0, end: 800, density: 0.38333986160073125 },
                { start: 800, end: 1800, density: 0.45906776341558964 },
                { start: 1800, density: 0.15759237498367903 },
              ],
              percentiles: { p75: 1515 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6270411495754404 },
                { start: 1800, end: 3000, density: 0.22377531025473527 },
                { start: 3000, density: 0.14918354016982427 },
              ],
              percentiles: { p75: 2305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9612801264322401 },
                { start: 100, end: 300, density: 0.03147635980508363 },
                { start: 300, density: 0.007243513762676145 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6952982547538418 },
                { start: 2500, end: 4000, density: 0.18891638447512352 },
                { start: 4000, density: 0.11578536077103467 },
              ],
              percentiles: { p75: 2821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9481691593604951,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022176379577101602,
                },
                { start: "0.25", density: 0.0296544610624033 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6020661697397673 },
                { start: 200, end: 500, density: 0.3324179416764744 },
                { start: 500, density: 0.06551588858375829 },
              ],
              percentiles: { p75: 268 },
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
        lcp: 2821,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331243198,
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
                { start: "0.00", end: "0.10", density: 0.86069090088056 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0960713479340709,
                },
                { start: "0.25", density: 0.04323775118536918 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.424994203570601 },
                { start: 200, end: 500, density: 0.3256434036633437 },
                { start: 500, density: 0.2493623927660552 },
              ],
              percentiles: { p75: 497 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3954458347424188 },
                { start: 800, end: 1800, density: 0.396911283958967 },
                { start: 1800, density: 0.20764288129861427 },
              ],
              percentiles: { p75: 1657 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4849585651038701 },
                { start: 1800, end: 3000, density: 0.2461119309796794 },
                { start: 3000, density: 0.26892950391645043 },
              ],
              percentiles: { p75: 3166 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.899894005417501 },
                { start: 100, end: 300, density: 0.06524555411612296 },
                { start: 300, density: 0.03486044046637611 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.540380453354596 },
                { start: 2500, end: 4000, density: 0.258685499487413 },
                { start: 4000, density: 0.20093404715799115 },
              ],
              percentiles: { p75: 3646 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3166,
        lcp: 3646,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1655331244060,
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
                  density: 0.957551256136298,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02570025989026856,
                },
                { start: "0.25", density: 0.016748483973433443 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6152352501867062 },
                { start: 200, end: 500, density: 0.3035100821508586 },
                { start: 500, density: 0.08125466766243511 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3584488351518727 },
                { start: 800, end: 1800, density: 0.4057800058979652 },
                { start: 1800, density: 0.23577115895016193 },
              ],
              percentiles: { p75: 1733 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6077968103957473 },
                { start: 1800, end: 3000, density: 0.20215593620791494 },
                { start: 3000, density: 0.19004725339633785 },
              ],
              percentiles: { p75: 2554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.94000875784557 },
                { start: 100, end: 300, density: 0.038388556415121886 },
                { start: 300, density: 0.021602685739308167 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6881846063969624 },
                { start: 2500, end: 4000, density: 0.1841682488681175 },
                { start: 4000, density: 0.12764714473492006 },
              ],
              percentiles: { p75: 2915 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2554,
        lcp: 2915,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331244819,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9805908203124999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.008178710937499998,
                },
                { start: "0.25", density: 0.011230468749999998 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5141256697515829 },
                { start: 200, end: 500, density: 0.39454456892352635 },
                { start: 500, density: 0.09132976132489073 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6879458794587944 },
                { start: 800, end: 1800, density: 0.2409594095940959 },
                { start: 1800, density: 0.07109471094710965 },
              ],
              percentiles: { p75: 908 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8135676539265086 },
                { start: 1800, end: 3000, density: 0.10999139732087991 },
                { start: 3000, density: 0.07644094875261129 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9614246980527483 },
                { start: 100, end: 300, density: 0.025264974118806998 },
                { start: 300, density: 0.013310327828444626 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8616472034419176 },
                { start: 2500, end: 4000, density: 0.08832206515058391 },
                { start: 4000, density: 0.05003073140749852 },
              ],
              percentiles: { p75: 1872 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 1872,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331245592,
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
                { start: 0, end: 100, density: 0.9586958695869586 },
                { start: 100, end: 300, density: 0.027202720272027196 },
                { start: 300, density: 0.01410141014101414 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9089817963592718 },
                { start: 2500, end: 4000, density: 0.06691338267653532 },
                { start: 4000, density: 0.024104820964192957 },
              ],
              percentiles: { p75: 1802 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8095000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.139 },
                { start: "0.25", density: 0.051499999999999956 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6248624862486252 },
                { start: 200, end: 500, density: 0.2818281828182819 },
                { start: 500, density: 0.0933093309330928 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7460746074607462 },
                { start: 800, end: 1800, density: 0.2212221222122213 },
                { start: 1800, density: 0.03270327032703256 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8893221355728853 },
                { start: 1800, end: 3000, density: 0.08208358328334334 },
                { start: 3000, density: 0.0285942811437713 },
              ],
              percentiles: { p75: 1328 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1802,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1655331246493,
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
                { start: 0, end: 200, density: 0.8245717660956882 },
                { start: 200, end: 500, density: 0.14825753101004138 },
                { start: 500, density: 0.02717070289427054 },
              ],
              percentiles: { p75: 163 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46875000000000017 },
                { start: 800, end: 1800, density: 0.3793604651162792 },
                { start: 1800, density: 0.15188953488372067 },
              ],
              percentiles: { p75: 1385 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6434193666483615 },
                { start: 1800, end: 3000, density: 0.24711696869851715 },
                { start: 3000, density: 0.10946366465312121 },
              ],
              percentiles: { p75: 2154 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959140789166472 },
                { start: 100, end: 300, density: 0.040859210833527906 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.758215085884989 },
                { start: 2500, end: 4000, density: 0.17475728155339806 },
                { start: 4000, density: 0.06702763256161302 },
              ],
              percentiles: { p75: 2460 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426613775694193,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04165164082221421,
                },
                { start: "0.25", density: 0.01568698160836639 },
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
        fcp: 2154,
        lcp: 2460,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655331247029,
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
                  density: 0.9261073892610738,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058594140585941396,
                },
                { start: "0.25", density: 0.015298470152984692 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6349730053989202 },
                { start: 200, end: 500, density: 0.28284343131373735 },
                { start: 500, density: 0.08218356328734236 },
              ],
              percentiles: { p75: 256 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7092581483703254 },
                { start: 800, end: 1800, density: 0.22235552889422094 },
                { start: 1800, density: 0.06838632273545373 },
              ],
              percentiles: { p75: 870 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8308999999999997 },
                { start: 1800, end: 3000, density: 0.11179999999999997 },
                { start: 3000, density: 0.057300000000000184 },
              ],
              percentiles: { p75: 1501 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642964296429644 },
                { start: 100, end: 300, density: 0.0171017101710171 },
                { start: 300, density: 0.018601860186018556 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8651500000000004 },
                { start: 2500, end: 4000, density: 0.09225000000000001 },
                { start: 4000, density: 0.042599999999999666 },
              ],
              percentiles: { p75: 1901 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1501,
        lcp: 1901,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655331247901,
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
                { start: 0, end: 800, density: 0.6349634963496349 },
                { start: 800, end: 1800, density: 0.2745274527452745 },
                { start: 1800, density: 0.09050905090509062 },
              ],
              percentiles: { p75: 1025 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7424999999999993 },
                { start: 1800, end: 3000, density: 0.15449999999999986 },
                { start: 3000, density: 0.10300000000000085 },
              ],
              percentiles: { p75: 1869 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9466946694669467 },
                { start: 100, end: 300, density: 0.03580358035803581 },
                { start: 300, density: 0.01750175017501756 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8001599520143949 },
                { start: 2500, end: 4000, density: 0.1257622713186043 },
                { start: 4000, density: 0.0740777766670007 },
              ],
              percentiles: { p75: 2270 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8405159484051595,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1166883311668833,
                },
                { start: "0.25", density: 0.04279572042795724 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5084000000000001 },
                { start: 200, end: 500, density: 0.33600000000000013 },
                { start: 500, density: 0.1555999999999998 },
              ],
              percentiles: { p75: 353 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1869,
        lcp: 2270,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1655331248464,
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
                  density: 0.8842115788421159,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06879312068793121,
                },
                { start: "0.25", density: 0.04699530046995301 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4457108578284345 },
                { start: 200, end: 500, density: 0.39042191561687684 },
                { start: 500, density: 0.16386722655468855 },
              ],
              percentiles: { p75: 388 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5588558855885587 },
                { start: 800, end: 1800, density: 0.3567356735673567 },
                { start: 1800, density: 0.08440844084408472 },
              ],
              percentiles: { p75: 1111 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7410517896420707 },
                { start: 1800, end: 3000, density: 0.1713657268546289 },
                { start: 3000, density: 0.08758248350330035 },
              ],
              percentiles: { p75: 1843 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9193919391939191 },
                { start: 100, end: 300, density: 0.05230523052305229 },
                { start: 300, density: 0.02830283028302844 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8107499999999997 },
                { start: 2500, end: 4000, density: 0.12535 },
                { start: 4000, density: 0.0639000000000002 },
              ],
              percentiles: { p75: 2217 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1843,
        lcp: 2217,
        cls: "0.02",
        fid: 16,
      },
      timestamp: 1655331249106,
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
                  density: 0.8552031283945254,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09863132739517706,
                },
                { start: "0.25", density: 0.046165544210297595 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6412196994625428 },
                { start: 200, end: 500, density: 0.27487111988592744 },
                { start: 500, density: 0.08390918065152987 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45732706807999135 },
                { start: 800, end: 1800, density: 0.40618511638072347 },
                { start: 1800, density: 0.13648781553928524 },
              ],
              percentiles: { p75: 1362 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6942112722119261 },
                { start: 1800, end: 3000, density: 0.18914204731276568 },
                { start: 3000, density: 0.11664668047530825 },
              ],
              percentiles: { p75: 2062 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608647450110864 },
                { start: 100, end: 300, density: 0.027272727272727275 },
                { start: 300, density: 0.01186252771618633 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7600087269553827 },
                { start: 2500, end: 4000, density: 0.14715828515326707 },
                { start: 4000, density: 0.09283298789135018 },
              ],
              percentiles: { p75: 2461 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2062,
        lcp: 2461,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655331249648,
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
                  density: 0.9612038796120388,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028697130286971302,
                },
                { start: "0.25", density: 0.010098990100989908 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6045604560456044 },
                { start: 200, end: 500, density: 0.3318331833183318 },
                { start: 500, density: 0.0636063606360639 },
              ],
              percentiles: { p75: 265 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7714914034386247 },
                { start: 800, end: 1800, density: 0.19392243102758902 },
                { start: 1800, density: 0.03458616553378626 },
              ],
              percentiles: { p75: 770 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8618276344731048 },
                { start: 1800, end: 3000, density: 0.09428114377124573 },
                { start: 3000, density: 0.04389122175564955 },
              ],
              percentiles: { p75: 1405 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9693999999999999 },
                { start: 100, end: 300, density: 0.022099999999999998 },
                { start: 300, density: 0.008500000000000013 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8935106489351065 },
                { start: 2500, end: 4000, density: 0.0742925707429257 },
                { start: 4000, density: 0.03219678032196775 },
              ],
              percentiles: { p75: 1781 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1405,
        lcp: 1781,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331250439,
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
                  density: 0.9492078285181734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02854147250698975,
                },
                { start: "0.25", density: 0.022250698974836884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4784683426443203 },
                { start: 200, end: 500, density: 0.38943202979515823 },
                { start: 500, density: 0.13209962756052138 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7731826654240446 },
                { start: 800, end: 1800, density: 0.1869757688723205 },
                { start: 1800, density: 0.039841565703634924 },
              ],
              percentiles: { p75: 775 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8495037945125512 },
                { start: 1800, end: 3000, density: 0.10437828371278458 },
                { start: 3000, density: 0.046117921774664096 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9366788969108768 },
                { start: 100, end: 300, density: 0.03467866019647295 },
                { start: 300, density: 0.028642442892650215 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8866940211019929 },
                { start: 2500, end: 4000, density: 0.07778429073856975 },
                { start: 4000, density: 0.035521688159437355 },
              ],
              percentiles: { p75: 1818 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1818,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655331250964,
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
                  density: 0.9319706164164803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04742893644203129,
                },
                { start: "0.25", density: 0.020600447141488353 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44458242781744817 },
                { start: 200, end: 500, density: 0.42797267929214544 },
                { start: 500, density: 0.12744489289040642 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7019996748496179 },
                { start: 800, end: 1800, density: 0.26434726060803115 },
                { start: 1800, density: 0.03365306454235083 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8657437218287185 },
                { start: 1800, end: 3000, density: 0.10511912427559561 },
                { start: 3000, density: 0.02913715389568595 },
              ],
              percentiles: { p75: 1452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9379167989838043 },
                { start: 100, end: 300, density: 0.03969514131470308 },
                { start: 300, density: 0.022388059701492602 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9036202735317782 },
                { start: 2500, end: 4000, density: 0.07417538213998391 },
                { start: 4000, density: 0.022204344328238035 },
              ],
              percentiles: { p75: 1849 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1452,
        lcp: 1849,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1655331251830,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626684338413961 },
                { start: 100, end: 300, density: 0.022973271482217807 },
                { start: 300, density: 0.014358294676386133 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9270300333704116 },
                { start: 2500, end: 4000, density: 0.05695216907675193 },
                { start: 4000, density: 0.01601779755283648 },
              ],
              percentiles: { p75: 1702 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9430682312038244,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04476314645806172,
                },
                { start: "0.25", density: 0.01216862233811386 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5297341181246195 },
                { start: 200, end: 500, density: 0.3182463974020702 },
                { start: 500, density: 0.1520194844733104 },
              ],
              percentiles: { p75: 335 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7259143621766279 },
                { start: 800, end: 1800, density: 0.23974130240856378 },
                { start: 1800, density: 0.03434433541480822 },
              ],
              percentiles: { p75: 853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8968218442256043 },
                { start: 1800, end: 3000, density: 0.07050134288272161 },
                { start: 3000, density: 0.03267681289167413 },
              ],
              percentiles: { p75: 1340 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1340,
        lcp: 1702,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655331252762,
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
                { start: 0, end: 2500, density: 0.5728 },
                { start: 2500, end: 4000, density: 0.21739999999999998 },
                { start: 4000, density: 0.2098 },
              ],
              percentiles: { p75: 3765 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7232000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1405 },
                { start: "0.25", density: 0.1362999999999999 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4414000000000004 },
                { start: 800, end: 1800, density: 0.33190000000000025 },
                { start: 1800, density: 0.22669999999999935 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5390078015603117 },
                { start: 1800, end: 3000, density: 0.1967393478695738 },
                { start: 3000, density: 0.26425285057011455 },
              ],
              percentiles: { p75: 3303 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3303, lcp: 3765, cls: "0.14" },
      timestamp: 1655331253564,
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
                { start: 0, end: 200, density: 0.5324327341743889 },
                { start: 200, end: 500, density: 0.3519035391314055 },
                { start: 500, density: 0.11566372669420576 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6106602325071288 },
                { start: 800, end: 1800, density: 0.33658697082693584 },
                { start: 1800, density: 0.05275279666593535 },
              ],
              percentiles: { p75: 1018 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8057212281864363 },
                { start: 1800, end: 3000, density: 0.13629335100508055 },
                { start: 3000, density: 0.057985420808482936 },
              ],
              percentiles: { p75: 1642 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467569091934573 },
                { start: 100, end: 300, density: 0.03158488437676255 },
                { start: 300, density: 0.02165820642978017 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8578691423519001 },
                { start: 2500, end: 4000, density: 0.09703801945181244 },
                { start: 4000, density: 0.045092838196287344 },
              ],
              percentiles: { p75: 1994 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8713482526733547,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1121155330173079,
                },
                { start: "0.25", density: 0.016536214309337438 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1642,
        lcp: 1994,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655331254517,
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
                { start: 0, end: 1800, density: 0.8244431753283835 },
                { start: 1800, end: 3000, density: 0.11639063392347225 },
                { start: 3000, density: 0.05916619074814417 },
              ],
              percentiles: { p75: 1527 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603473888698435 },
                { start: 100, end: 300, density: 0.019083533310478802 },
                { start: 300, density: 0.0205690778196777 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8653802237953873 },
                { start: 2500, end: 4000, density: 0.09260105046814343 },
                { start: 4000, density: 0.042018725736469274 },
              ],
              percentiles: { p75: 1896 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9623283785317144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023034154090548053,
                },
                { start: "0.25", density: 0.014637467377737415 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5959014506101777 },
                { start: 200, end: 500, density: 0.3149896384987338 },
                { start: 500, density: 0.08910891089108841 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6941015089163232 },
                { start: 800, end: 1800, density: 0.23182441700960196 },
                { start: 1800, density: 0.07407407407407492 },
              ],
              percentiles: { p75: 889 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1527,
        lcp: 1896,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331255553,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5508898220355912 },
                { start: 1800, end: 3000, density: 0.28074385122975326 },
                { start: 3000, density: 0.16836632673465543 },
              ],
              percentiles: { p75: 2574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9693030696930307 },
                { start: 100, end: 300, density: 0.024397560243975602 },
                { start: 300, density: 0.006299370062993701 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6611999999999992 },
                { start: 2500, end: 4000, density: 0.21309999999999982 },
                { start: 4000, density: 0.12570000000000092 },
              ],
              percentiles: { p75: 2941 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9003 },
                { start: "0.10", end: "0.25", density: 0.0506 },
                { start: "0.25", density: 0.049100000000000005 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6098000000000003 },
                { start: 200, end: 500, density: 0.3168000000000002 },
                { start: 500, density: 0.0733999999999994 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31980000000000014 },
                { start: 800, end: 1800, density: 0.5074000000000001 },
                { start: 1800, density: 0.17279999999999987 },
              ],
              percentiles: { p75: 1557 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2574,
        lcp: 2941,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1655331256517,
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
                  density: 0.9491050894910509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029297070292970698,
                },
                { start: "0.25", density: 0.02159784021597842 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.534106821364273 },
                { start: 200, end: 500, density: 0.34786957391478296 },
                { start: 500, density: 0.11802360472094406 },
              ],
              percentiles: { p75: 321 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7864999999999998 },
                { start: 800, end: 1800, density: 0.17679999999999993 },
                { start: 1800, density: 0.03670000000000028 },
              ],
              percentiles: { p75: 756 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8583000000000001 },
                { start: 1800, end: 3000, density: 0.0979 },
                { start: 3000, density: 0.04379999999999984 },
              ],
              percentiles: { p75: 1434 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9441944194419442 },
                { start: 100, end: 300, density: 0.0306030603060306 },
                { start: 300, density: 0.025202520252025226 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8885499999999993 },
                { start: 2500, end: 4000, density: 0.07644999999999993 },
                { start: 4000, density: 0.0350000000000007 },
              ],
              percentiles: { p75: 1802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1434,
        lcp: 1802,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331257289,
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
                { start: 0, end: 100, density: 0.9391838663935718 },
                { start: 100, end: 300, density: 0.036552702063967234 },
                { start: 300, density: 0.024263431542460998 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6999220576773184 },
                { start: 2500, end: 4000, density: 0.19298519095869052 },
                { start: 4000, density: 0.10709275136399093 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9468999386126459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026703499079189688,
                },
                { start: "0.25", density: 0.02639656230816452 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5641521598968401 },
                { start: 200, end: 500, density: 0.3075435203094774 },
                { start: 500, density: 0.12830431979368256 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3974298699263439 },
                { start: 800, end: 1800, density: 0.45102648487697866 },
                { start: 1800, density: 0.15154364519667748 },
              ],
              percentiles: { p75: 1425 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6138598407991265 },
                { start: 1800, end: 3000, density: 0.239581707507414 },
                { start: 3000, density: 0.1465584516934596 },
              ],
              percentiles: { p75: 2414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2414,
        lcp: 2754,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1655331257936,
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
                { start: 0, end: 2500, density: 0.9397500000000001 },
                { start: 2500, end: 4000, density: 0.05184999999999999 },
                { start: 4000, density: 0.008399999999999998 },
              ],
              percentiles: { p75: 1591 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9563999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0319 },
                { start: "0.25", density: 0.011700000000000004 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6824317568243174 },
                { start: 200, end: 500, density: 0.21667833216678328 },
                { start: 500, density: 0.10088991100889919 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7605 },
                { start: 800, end: 1800, density: 0.22870000000000001 },
                { start: 1800, density: 0.010800000000000002 },
              ],
              percentiles: { p75: 790 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9205920592059206 },
                { start: 1800, end: 3000, density: 0.06360636063606359 },
                { start: 3000, density: 0.015801580158015822 },
              ],
              percentiles: { p75: 1226 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9670934186837368 },
                { start: 100, end: 300, density: 0.023704740948189636 },
                { start: 300, density: 0.009201840368073616 },
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
        fcp: 1226,
        lcp: 1591,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1655331258931,
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
                { start: 0, end: 100, density: 0.9116299689670456 },
                { start: 100, end: 300, density: 0.047436086892271315 },
                { start: 300, density: 0.04093394414068302 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608500145053666 },
                { start: 2500, end: 4000, density: 0.26276472294749026 },
                { start: 4000, density: 0.17638526254714315 },
              ],
              percentiles: { p75: 3413 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.941629798772656,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03525046382189239,
                },
                { start: "0.25", density: 0.023119737405451736 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47231655101136877 },
                { start: 200, end: 500, density: 0.3500664402775727 },
                { start: 500, density: 0.17761700871105854 },
              ],
              percentiles: { p75: 377 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2710172189263513 },
                { start: 800, end: 1800, density: 0.3466936767472171 },
                { start: 1800, density: 0.3822891043264316 },
              ],
              percentiles: { p75: 2217 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4340252576571333 },
                { start: 1800, end: 3000, density: 0.29960807083756624 },
                { start: 3000, density: 0.26636667150530047 },
              ],
              percentiles: { p75: 3114 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3114,
        lcp: 3413,
        cls: "0.00",
        fid: 18,
      },
      timestamp: 1655331259717,
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
                { start: 0, end: 800, density: 0.8608534322820036 },
                { start: 800, end: 1800, density: 0.125417439703154 },
                { start: 1800, density: 0.013729128014842367 },
              ],
              percentiles: { p75: 659 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9244908097367115 },
                { start: 1800, end: 3000, density: 0.05911574764033782 },
                { start: 3000, density: 0.016393442622950758 },
              ],
              percentiles: { p75: 1185 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9118194220513458 },
                { start: 100, end: 300, density: 0.046632766960188525 },
                { start: 300, density: 0.04154781098846575 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9248451053283767 },
                { start: 2500, end: 4000, density: 0.05780669144981411 },
                { start: 4000, density: 0.017348203221809237 },
              ],
              percentiles: { p75: 1673 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9007127058245268,
                },
                { start: "0.10", end: "0.25", density: 0.06475792578029 },
                { start: "0.25", density: 0.0345293683951831 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40670961468335975 },
                { start: 200, end: 500, density: 0.3960131275069894 },
                { start: 500, density: 0.19727725780965089 },
              ],
              percentiles: { p75: 406 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1185,
        lcp: 1673,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655331261056,
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
                  density: 0.9323559670781892,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03420781893004115,
                },
                { start: "0.25", density: 0.03343621399176955 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5017459038409884 },
                { start: 200, end: 500, density: 0.40760139672307283 },
                { start: 500, density: 0.09065269943593879 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2915433131677179 },
                { start: 800, end: 1800, density: 0.4631226670099112 },
                { start: 1800, density: 0.24533401982237077 },
              ],
              percentiles: { p75: 1803 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47520768431983246 },
                { start: 1800, end: 3000, density: 0.3182762201453782 },
                { start: 3000, density: 0.2065160955347893 },
              ],
              percentiles: { p75: 2789 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632066604001611 },
                { start: 100, end: 300, density: 0.029542097488921712 },
                { start: 300, density: 0.007251242110917135 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6090909090909084 },
                { start: 2500, end: 4000, density: 0.245324675324675 },
                { start: 4000, density: 0.14558441558441673 },
              ],
              percentiles: { p75: 3117 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2789,
        lcp: 3117,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655331262094,
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
                  density: 0.9446680080482897,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031762000574877845,
                },
                { start: "0.25", density: 0.023569991376832473 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5924512298558101 },
                { start: 200, end: 500, density: 0.28512864009047223 },
                { start: 500, density: 0.12242013005371766 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8407143894293597 },
                { start: 800, end: 1800, density: 0.14447509801074482 },
                { start: 1800, density: 0.014810512559895421 },
              ],
              percentiles: { p75: 706 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9423328964613369 },
                { start: 1800, end: 3000, density: 0.04485219164118247 },
                { start: 3000, density: 0.012814911897480739 },
              ],
              percentiles: { p75: 1203 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9477611940298506 },
                { start: 100, end: 300, density: 0.032238805970149255 },
                { start: 300, density: 0.020000000000000087 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9503119106339765 },
                { start: 2500, end: 4000, density: 0.03953285942260262 },
                { start: 4000, density: 0.010155229943420841 },
              ],
              percentiles: { p75: 1523 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1203,
        lcp: 1523,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655331262957,
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
                  density: 0.9512227017130901,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017784752190401463,
                },
                { start: "0.25", density: 0.03099254609650845 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5505057316250842 },
                { start: 200, end: 500, density: 0.37923128792987176 },
                { start: 500, density: 0.07026298044504398 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4115359688917691 },
                { start: 800, end: 1800, density: 0.4759559300064806 },
                { start: 1800, density: 0.11250810110175032 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.565744400527009 },
                { start: 1800, end: 3000, density: 0.2733860342555995 },
                { start: 3000, density: 0.16086956521739146 },
              ],
              percentiles: { p75: 2460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642182014582771 },
                { start: 100, end: 300, density: 0.029030515798001612 },
                { start: 300, density: 0.00675128274372128 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6893120716921456 },
                { start: 2500, end: 4000, density: 0.20670795993674224 },
                { start: 4000, density: 0.10397996837111226 },
              ],
              percentiles: { p75: 2797 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2460,
        lcp: 2797,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331263931,
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
                { start: 0, end: 800, density: 0.8750875087508749 },
                { start: 800, end: 1800, density: 0.1118111811181118 },
                { start: 1800, density: 0.01310131013101314 },
              ],
              percentiles: { p75: 643 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9289857971594321 },
                { start: 1800, end: 3000, density: 0.05251050210042008 },
                { start: 3000, density: 0.0185037007401478 },
              ],
              percentiles: { p75: 1139 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9271999999999999 },
                { start: 100, end: 300, density: 0.0389 },
                { start: 300, density: 0.03390000000000005 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9246774032209663 },
                { start: 2500, end: 4000, density: 0.05581674502350706 },
                { start: 4000, density: 0.01950585175552665 },
              ],
              percentiles: { p75: 1662 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8886111388861114,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07919208079192082,
                },
                { start: "0.25", density: 0.0321967803219678 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4972005598880218 },
                { start: 200, end: 500, density: 0.3341331733653265 },
                { start: 500, density: 0.16866626674665175 },
              ],
              percentiles: { p75: 363 },
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
        lcp: 1662,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1655331265198,
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
                  density: 0.952050919377652,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03083451202263083,
                },
                { start: "0.25", density: 0.017114568599717127 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6005316916188612 },
                { start: 200, end: 500, density: 0.29201063383237724 },
                { start: 500, density: 0.10745767454876143 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6977926227127504 },
                { start: 800, end: 1800, density: 0.2712750508277665 },
                { start: 1800, density: 0.03093232645948296 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8922215843857636 },
                { start: 1800, end: 3000, density: 0.0848163030998852 },
                { start: 3000, density: 0.022962112514351134 },
              ],
              percentiles: { p75: 1316 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9413485446833405 },
                { start: 100, end: 300, density: 0.03261664472721954 },
                { start: 300, density: 0.02603481058943999 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9259259259259259 },
                { start: 2500, end: 4000, density: 0.05762905762905763 },
                { start: 4000, density: 0.016445016445016454 },
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
        fcp: 1316,
        lcp: 1664,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331265826,
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
                  density: 0.9672634813009853,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024261044602182435,
                },
                { start: "0.25", density: 0.008475474096832289 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.586330555848539 },
                { start: 200, end: 500, density: 0.34911929121400687 },
                { start: 500, density: 0.06455015293745421 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7666772386087326 },
                { start: 800, end: 1800, density: 0.19758959720900734 },
                { start: 1800, density: 0.03573316418226006 },
              ],
              percentiles: { p75: 777 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8586392974288428 },
                { start: 1800, end: 3000, density: 0.09628610729023375 },
                { start: 3000, density: 0.045074595280923384 },
              ],
              percentiles: { p75: 1416 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9679446219382322 },
                { start: 100, end: 300, density: 0.02353567625133121 },
                { start: 300, density: 0.00851970181043663 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8914031934017131 },
                { start: 2500, end: 4000, density: 0.07560537168235167 },
                { start: 4000, density: 0.03299143491593516 },
              ],
              percentiles: { p75: 1785 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1416,
        lcp: 1785,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331266767,
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
                  density: 0.9147402151522088,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07072556649118791,
                },
                { start: "0.25", density: 0.014534218356603339 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6598903608953858 },
                { start: 200, end: 500, density: 0.27615349474645945 },
                { start: 500, density: 0.06395614435815467 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6864475670653816 },
                { start: 800, end: 1800, density: 0.28126814539542444 },
                { start: 1800, density: 0.032284287539194045 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8922899884925203 },
                { start: 1800, end: 3000, density: 0.08388952819332565 },
                { start: 3000, density: 0.023820483314154088 },
              ],
              percentiles: { p75: 1356 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737701095826532 },
                { start: 100, end: 300, density: 0.017370016320820702 },
                { start: 300, density: 0.008859874096526001 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.929678530424799 },
                { start: 2500, end: 4000, density: 0.05355912743972444 },
                { start: 4000, density: 0.016762342135476588 },
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
        fcp: 1356,
        lcp: 1675,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655331268144,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586084905660377 },
                { start: 100, end: 300, density: 0.024646226415094345 },
                { start: 300, density: 0.016745283018867928 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8944103048924601 },
                { start: 2500, end: 4000, density: 0.07805483337272512 },
                { start: 4000, density: 0.02753486173481476 },
              ],
              percentiles: { p75: 1791 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9773664977012849,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012024048096192388,
                },
                { start: "0.25", density: 0.010609454202522682 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.615808607951214 },
                { start: 200, end: 500, density: 0.3059692740705994 },
                { start: 500, density: 0.07822211797818678 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6081129166172459 },
                { start: 800, end: 1800, density: 0.33471711540742494 },
                { start: 1800, density: 0.05716996797532916 },
              ],
              percentiles: { p75: 981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8579040852575489 },
                { start: 1800, end: 3000, density: 0.10029603315571343 },
                { start: 3000, density: 0.0417998815867377 },
              ],
              percentiles: { p75: 1469 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1469,
        lcp: 1791,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655331269282,
    },
  ],
};
