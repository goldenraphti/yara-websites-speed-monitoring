export const audit10 = {
  date: "2022-04-01",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "01/04/2022-legacy-audit",
  audits: [
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
                  density: 0.8637339055793988,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08208154506437763,
                },
                { start: "0.25", density: 0.054184549356223154 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4765009508285774 },
                { start: 1800, end: 3000, density: 0.3179842434121151 },
                { start: 3000, density: 0.20551480575930325 },
              ],
              percentiles: { p75: 2784 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657420249653234 },
                { start: 100, end: 300, density: 0.028016643550624054 },
                { start: 300, density: 0.006241331484049897 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6218487394957977 },
                { start: 2500, end: 4000, density: 0.2289238275955541 },
                { start: 4000, density: 0.14922743290864743 },
              ],
              percentiles: { p75: 3133 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2784,
        lcp: 3133,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1648816639843,
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
                { start: 0, end: 1800, density: 0.7931937172774864 },
                { start: 1800, end: 3000, density: 0.15645210963966724 },
                { start: 3000, density: 0.0503541730828459 },
              ],
              percentiles: { p75: 1684 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595054095826898 },
                { start: 100, end: 300, density: 0.03431221020092738 },
                { start: 300, density: 0.006182380216383317 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8444990780577772 },
                { start: 2500, end: 4000, density: 0.12369391518131566 },
                { start: 4000, density: 0.0318070067609096 },
              ],
              percentiles: { p75: 2157 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9029805352798053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07907542579075426,
                },
                { start: "0.25", density: 0.01794403892944038 },
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
        fcp: 1684,
        lcp: 2157,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1648816640081,
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
                  density: 0.9194007676117374,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05001857125170239,
                },
                { start: "0.25", density: 0.030580661136560622 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5056193806193832 },
                { start: 1800, end: 3000, density: 0.2938311688311703 },
                { start: 3000, density: 0.20054945054945278 },
              ],
              percentiles: { p75: 2755 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9559448666752559 },
                { start: 100, end: 300, density: 0.03490918459358501 },
                { start: 300, density: 0.00914594873116065 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285821081485243 },
                { start: 2500, end: 4000, density: 0.23785198106155261 },
                { start: 4000, density: 0.13356591078993554 },
              ],
              percentiles: { p75: 3090 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2755,
        lcp: 3090,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816640180,
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
                  density: 0.9511126484492106,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02052346362273724,
                },
                { start: "0.25", density: 0.028363887928052577 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3385671086299144 },
                { start: 1800, end: 3000, density: 0.3394975575715288 },
                { start: 3000, density: 0.3219353337985546 },
              ],
              percentiles: { p75: 3357 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668449197860963 },
                { start: 100, end: 300, density: 0.029590017825311943 },
                { start: 300, density: 0.0035650623885918006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45395348837208715 },
                { start: 2500, end: 4000, density: 0.3508139534883675 },
                { start: 4000, density: 0.19523255813953372 },
              ],
              percentiles: { p75: 3717 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3357,
        lcp: 3717,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816640282,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6135579729371226 },
                { start: 2500, end: 4000, density: 0.26532236667551246 },
                { start: 4000, density: 0.12111966038737201 },
              ],
              percentiles: { p75: 3118 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9384129490722464,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03816291617318069,
                },
                { start: "0.25", density: 0.02342413475457295 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5005967378331804 },
                { start: 1800, end: 3000, density: 0.2937276223312568 },
                { start: 3000, density: 0.2056756398355668 },
              ],
              percentiles: { p75: 2820 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9378476084538332 },
                { start: 100, end: 300, density: 0.04435483870967722 },
                { start: 300, density: 0.017797552836484928 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2820,
        lcp: 3118,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816640378,
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
                { start: 0, end: 1800, density: 0.6941050375133964 },
                { start: 1800, end: 3000, density: 0.22315112540192888 },
                { start: 3000, density: 0.0827438370846725 },
              ],
              percentiles: { p75: 1985 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965972039039831 },
                { start: 100, end: 300, density: 0.02954365602743339 },
                { start: 300, density: 0.004484304932735425 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7644841697178517 },
                { start: 2500, end: 4000, density: 0.166164118027137 },
                { start: 4000, density: 0.06935171225500708 },
              ],
              percentiles: { p75: 2429 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8830031282586024,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08133472367049006,
                },
                { start: "0.25", density: 0.035662148070907174 },
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
        fcp: 1985,
        lcp: 2429,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1648816640473,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9591040895910333 },
                { start: 100, end: 300, density: 0.026397360263973393 },
                { start: 300, density: 0.014498550144985314 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8572285542891476 },
                { start: 2500, end: 4000, density: 0.10657868426314802 },
                { start: 4000, density: 0.03619276144771086 },
              ],
              percentiles: { p75: 1967 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7965000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12980000000000003,
                },
                { start: "0.25", density: 0.07369999999999997 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8393678735747226 },
                { start: 1800, end: 3000, density: 0.12212442488497811 },
                { start: 3000, density: 0.03850770154030852 },
              ],
              percentiles: { p75: 1465 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1465,
        lcp: 1967,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648816640572,
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
                  density: 0.9786476868327406,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014346085409252673,
                },
                { start: "0.25", density: 0.0070062277580071166 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41120871789169333 },
                { start: 1800, end: 3000, density: 0.43333703991993755 },
                { start: 3000, density: 0.15545424218837023 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9148193991223129 },
                { start: 100, end: 300, density: 0.06121300776414985 },
                { start: 300, density: 0.023967593113536672 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49782487451199403 },
                { start: 2500, end: 4000, density: 0.3608477412158417 },
                { start: 4000, density: 0.14132738427217126 },
              ],
              percentiles: { p75: 3405 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2622,
        lcp: 3405,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816640624,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9053052756372258 },
                { start: 100, end: 300, density: 0.046532305868405455 },
                { start: 300, density: 0.04816241849436861 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8931292223659641 },
                { start: 2500, end: 4000, density: 0.08085381630012954 },
                { start: 4000, density: 0.026016961333908552 },
              ],
              percentiles: { p75: 1731 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8979766315189507,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06169848959817608,
                },
                { start: "0.25", density: 0.04032487888287259 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9027198158008364 },
                { start: 1800, end: 3000, density: 0.0745430997265795 },
                { start: 3000, density: 0.022737084472586096 },
              ],
              percentiles: { p75: 1286 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1286,
        lcp: 1731,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1648816640721,
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
                  density: 0.9222515391380827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05417766051011433,
                },
                { start: "0.25", density: 0.023570800351802985 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5194898509071278 },
                { start: 1800, end: 3000, density: 0.2714208730016149 },
                { start: 3000, density: 0.20908927609125125 },
              ],
              percentiles: { p75: 2841 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642468239564436 },
                { start: 100, end: 300, density: 0.020508166969147024 },
                { start: 300, density: 0.015245009074410195 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6175839885632565 },
                { start: 2500, end: 4000, density: 0.23731236597569574 },
                { start: 4000, density: 0.14510364546104354 },
              ],
              percentiles: { p75: 3141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2841,
        lcp: 3141,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816640814,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9716000000000011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021200000000000024,
                },
                { start: "0.25", density: 0.007199999999999996 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42857142857142877 },
                { start: 1800, end: 3000, density: 0.4182673069227693 },
                { start: 3000, density: 0.1531612645058029 },
              ],
              percentiles: { p75: 2608 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9200159968006478 },
                { start: 100, end: 300, density: 0.05738852229554137 },
                { start: 300, density: 0.02259548090381943 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5092518503700777 },
                { start: 2500, end: 4000, density: 0.34721944388878 },
                { start: 4000, density: 0.14352870574114904 },
              ],
              percentiles: { p75: 3399 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2608,
        lcp: 3399,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816640907,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788515406162449 },
                { start: 1800, end: 3000, density: 0.08243297318927559 },
                { start: 3000, density: 0.03871548619447793 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704881952781107 },
                { start: 100, end: 300, density: 0.01110444177671068 },
                { start: 300, density: 0.018407362945178134 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8772122787721216 },
                { start: 2500, end: 4000, density: 0.09389061093890595 },
                { start: 4000, density: 0.028897110288971194 },
              ],
              percentiles: { p75: 1962 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7523752375237529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16461646164616475,
                },
                { start: "0.25", density: 0.08300830083008315 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1341,
        lcp: 1962,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648816640950,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8911891189118913,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08010801080108013,
                },
                { start: "0.25", density: 0.028702870287028726 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5047504750475114 },
                { start: 1800, end: 3000, density: 0.28802880288029176 },
                { start: 3000, density: 0.20722072207221068 },
              ],
              percentiles: { p75: 2792 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962507498500299 },
                { start: 100, end: 300, density: 0.025994801039792015 },
                { start: 300, density: 0.01149770045990799 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6031206241248265 },
                { start: 2500, end: 4000, density: 0.2414482896579321 },
                { start: 4000, density: 0.15543108621724527 },
              ],
              percentiles: { p75: 3218 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2792,
        lcp: 3218,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648816640996,
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
                  density: 0.9156020131629892,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052522906181442786,
                },
                { start: "0.25", density: 0.031875080655568475 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.479264475743346 },
                { start: 1800, end: 3000, density: 0.35302556077203756 },
                { start: 3000, density: 0.16770996348461334 },
              ],
              percentiles: { p75: 2599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9248129997420715 },
                { start: 100, end: 300, density: 0.03224142378127428 },
                { start: 300, density: 0.04294557647665738 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5849941383352824 },
                { start: 2500, end: 4000, density: 0.29985671486257415 },
                { start: 4000, density: 0.1151491468021357 },
              ],
              percentiles: { p75: 3169 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2599,
        lcp: 3169,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816641036,
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
                { start: 0, end: 1800, density: 0.9173608066637441 },
                { start: 1800, end: 3000, density: 0.07124068391056557 },
                { start: 3000, density: 0.011398509425690493 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9225257501119569 },
                { start: 100, end: 300, density: 0.0696372592924317 },
                { start: 300, density: 0.007836990595611283 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9174131527201229 },
                { start: 2500, end: 4000, density: 0.07013327507100726 },
                { start: 4000, density: 0.012453572208870448 },
              ],
              percentiles: { p75: 1864 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.93212964977159 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06156188818794864,
                },
                { start: "0.25", density: 0.0063084620404611665 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1376,
        lcp: 1864,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1648816641123,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9628814407203599 },
                { start: 100, end: 300, density: 0.016608304152076037 },
                { start: 300, density: 0.020510255127563735 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8291329132913292 },
                { start: 2500, end: 4000, density: 0.1324632463246325 },
                { start: 4000, density: 0.038403840384038844 },
              ],
              percentiles: { p75: 2141 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9118999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07559999999999997,
                },
                { start: "0.25", density: 0.012499999999999987 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8140256102441028 },
                { start: 1800, end: 3000, density: 0.14635854341736784 },
                { start: 3000, density: 0.03961584633853608 },
              ],
              percentiles: { p75: 1625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1625,
        lcp: 2141,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648816641225,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481696266763311 },
                { start: 100, end: 300, density: 0.018484958318231225 },
                { start: 300, density: 0.033345415005436856 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.846750369276216 },
                { start: 2500, end: 4000, density: 0.11669128508124048 },
                { start: 4000, density: 0.036558345642540645 },
              ],
              percentiles: { p75: 2144 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9432585294654258,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0341178617040686,
                },
                { start: "0.25", density: 0.022623608830505376 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8275225973067679 },
                { start: 1800, end: 3000, density: 0.11898173768677342 },
                { start: 3000, density: 0.05349566500645618 },
              ],
              percentiles: { p75: 1611 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 2144,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1648816641273,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5246950609878017 },
                { start: 1800, end: 3000, density: 0.3272345530893817 },
                { start: 3000, density: 0.14807038592281752 },
              ],
              percentiles: { p75: 2517 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390121975604901 },
                { start: 100, end: 300, density: 0.027694461107778515 },
                { start: 300, density: 0.03329334133173377 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5985697139427836 },
                { start: 2500, end: 4000, density: 0.2850070014002776 },
                { start: 4000, density: 0.11642328465693029 },
              ],
              percentiles: { p75: 3129 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8199000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12000000000000006,
                },
                { start: "0.25", density: 0.06009999999999999 },
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
        fcp: 2517,
        lcp: 3129,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648816641386,
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
                { start: 0, end: 1800, density: 0.5309324566646716 },
                { start: 1800, end: 3000, density: 0.26598924088463705 },
                { start: 3000, density: 0.20307830245068798 },
              ],
              percentiles: { p75: 2748 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8903091557669383 },
                { start: 100, end: 300, density: 0.04741379310344796 },
                { start: 300, density: 0.06227705112960675 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6173274596182133 },
                { start: 2500, end: 4000, density: 0.2127753303964774 },
                { start: 4000, density: 0.16989720998531777 },
              ],
              percentiles: { p75: 3305 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9032025389497975,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0490478938257357,
                },
                { start: "0.25", density: 0.047749567224466195 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2748,
        lcp: 3305,
        cls: "0.00",
        fid: 18,
      },
      timestamp: 1648816641433,
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
                  density: 0.9188958451906651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055634604439385275,
                },
                { start: "0.25", density: 0.025469550369948742 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8100719424460501 },
                { start: 1800, end: 3000, density: 0.1456115107913682 },
                { start: 3000, density: 0.044316546762589955 },
              ],
              percentiles: { p75: 1591 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517849523538585 },
                { start: 100, end: 300, density: 0.03086331958469625 },
                { start: 300, density: 0.017351728061442077 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8419696535929008 },
                { start: 2500, end: 4000, density: 0.11895219009447475 },
                { start: 4000, density: 0.039078156312625366 },
              ],
              percentiles: { p75: 2080 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1591,
        lcp: 2080,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1648816641538,
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
                { start: 0, end: 100, density: 0.9017485428809263 },
                { start: 100, end: 300, density: 0.047960033305578346 },
                { start: 300, density: 0.0502914238134887 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48554135843981844 },
                { start: 2500, end: 4000, density: 0.2995965030262314 },
                { start: 4000, density: 0.21486213853396616 },
              ],
              percentiles: { p75: 3767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.887428101889893,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07313064913722266,
                },
                { start: "0.25", density: 0.03944124897288416 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37628086678985934 },
                { start: 1800, end: 3000, density: 0.3104317151016339 },
                { start: 3000, density: 0.31328741810852334 },
              ],
              percentiles: { p75: 3378 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3378,
        lcp: 3767,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1648816641643,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8168183181681827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11158884111588835,
                },
                { start: "0.25", density: 0.07159284071592839 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7511995201919359 },
                { start: 1800, end: 3000, density: 0.16423430627749175 },
                { start: 3000, density: 0.08456617353058954 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539953995399469 },
                { start: 100, end: 300, density: 0.028502850285028296 },
                { start: 300, density: 0.0175017501750175 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7971797179718008 },
                { start: 2500, end: 4000, density: 0.1364136413641371 },
                { start: 4000, density: 0.0664066406640675 },
              ],
              percentiles: { p75: 2278 },
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
        lcp: 2278,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648816641745,
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
                  density: 0.8847565451431366,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06080254465378027,
                },
                { start: "0.25", density: 0.05444091020308292 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5611324020274426 },
                { start: 1800, end: 3000, density: 0.24440598343429257 },
                { start: 3000, density: 0.19446161453826055 },
              ],
              percentiles: { p75: 2641 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9432176656151396 },
                { start: 100, end: 300, density: 0.03596214511041001 },
                { start: 300, density: 0.020820189274447638 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6629803533918158 },
                { start: 2500, end: 4000, density: 0.18960830347213525 },
                { start: 4000, density: 0.14741134313604315 },
              ],
              percentiles: { p75: 3059 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2641,
        lcp: 3059,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1648816641816,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6044395560444012 },
                { start: 1800, end: 3000, density: 0.18108189181082052 },
                { start: 3000, density: 0.2144785521447906 },
              ],
              percentiles: { p75: 2883 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6324132413241367 },
                { start: 2500, end: 4000, density: 0.20637063706370784 },
                { start: 4000, density: 0.16121612161216212 },
              ],
              percentiles: { p75: 3259 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9222000000000009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052100000000000056,
                },
                { start: "0.25", density: 0.025700000000000032 },
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
      extractedResults: { fcp: 2883, lcp: 3259, cls: "0.00" },
      timestamp: 1648816641910,
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
                  density: 0.9153972828324417,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05475504322766573,
                },
                { start: "0.25", density: 0.02984767393989295 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5776241357636699 },
                { start: 1800, end: 3000, density: 0.24177666038131113 },
                { start: 3000, density: 0.18059920385501826 },
              ],
              percentiles: { p75: 2449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400693412580495 },
                { start: 100, end: 300, density: 0.02947003467062906 },
                { start: 300, density: 0.030460624071322467 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6462214779150048 },
                { start: 2500, end: 4000, density: 0.19991626543855834 },
                { start: 4000, density: 0.15386225664642905 },
              ],
              percentiles: { p75: 3054 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2449,
        lcp: 3054,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1648816642017,
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
                { start: 0, end: 1800, density: 0.6318273769386377 },
                { start: 1800, end: 3000, density: 0.2235333782872555 },
                { start: 3000, density: 0.1446392447741077 },
              ],
              percentiles: { p75: 2327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964648295866573 },
                { start: 100, end: 300, density: 0.027737490935460567 },
                { start: 300, density: 0.007614213197969555 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6982178883658421 },
                { start: 2500, end: 4000, density: 0.18728984532616144 },
                { start: 4000, density: 0.11449226630800433 },
              ],
              percentiles: { p75: 2790 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9426962570387557,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0372639947002319,
                },
                { start: "0.25", density: 0.0200397482610136 },
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
        fcp: 2327,
        lcp: 2790,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816642120,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594081183763268 },
                { start: 100, end: 300, density: 0.022695460907818484 },
                { start: 300, density: 0.01789642071585688 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8642271545690923 },
                { start: 2500, end: 4000, density: 0.09318136372725515 },
                { start: 4000, density: 0.04259148170365969 },
              ],
              percentiles: { p75: 1874 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8727127287271266,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07689231076892304,
                },
                { start: "0.25", density: 0.050394960503949565 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8459462161351601 },
                { start: 1800, end: 3000, density: 0.1030690792762172 },
                { start: 3000, density: 0.05098470458862378 },
              ],
              percentiles: { p75: 1446 },
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
      timestamp: 1648816642216,
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
                  density: 0.8837153196622443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10072376357056702,
                },
                { start: "0.25", density: 0.015560916767189379 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7575354073356703 },
                { start: 1800, end: 3000, density: 0.17576564580559176 },
                { start: 3000, density: 0.06669894685873363 },
              ],
              percentiles: { p75: 1774 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572127139364224 },
                { start: 100, end: 300, density: 0.026894865525672152 },
                { start: 300, density: 0.01589242053789729 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7957848837209339 },
                { start: 2500, end: 4000, density: 0.14777131782945802 },
                { start: 4000, density: 0.05644379844961259 },
              ],
              percentiles: { p75: 2280 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1774,
        lcp: 2280,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816642261,
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
                { start: 0, end: 1800, density: 0.9137959452777303 },
                { start: 1800, end: 3000, density: 0.06889731333443201 },
                { start: 3000, density: 0.01730674138783589 },
              ],
              percentiles: { p75: 1299 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619952494061657 },
                { start: 100, end: 300, density: 0.018663047166609915 },
                { start: 300, density: 0.01934170342721399 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.922740765171518 },
                { start: 2500, end: 4000, density: 0.06406662269129386 },
                { start: 4000, density: 0.01319261213720347 },
              ],
              percentiles: { p75: 1698 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9123176661264193,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06531604538087528,
                },
                { start: "0.25", density: 0.02236628849270668 },
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
        fcp: 1299,
        lcp: 1698,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816642353,
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
                { start: 0, end: 100, density: 0.9802275694833055 },
                { start: 100, end: 300, density: 0.01977243051669465 },
                { start: 300 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7114348265409225 },
                { start: 2500, end: 4000, density: 0.20200404176490386 },
                { start: 4000, density: 0.08656113169417305 },
              ],
              percentiles: { p75: 2782 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9026711185308848,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07512520868113523,
                },
                { start: "0.25", density: 0.022203672787979963 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5836317135549874 },
                { start: 1800, end: 3000, density: 0.29275362318840586 },
                { start: 3000, density: 0.1236146632566071 },
              ],
              percentiles: { p75: 2512 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2512,
        lcp: 2782,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1648816642452,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.za" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6485989894350036 },
                { start: 2500, end: 4000, density: 0.19430408819476377 },
                { start: 4000, density: 0.1570969223702351 },
              ],
              percentiles: { p75: 3091 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9471932213648053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03586019064911483,
                },
                { start: "0.25", density: 0.01694658798607957 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5845521023766007 },
                { start: 1800, end: 3000, density: 0.23552711761121312 },
                { start: 3000, density: 0.1799207800121886 },
              ],
              percentiles: { p75: 2534 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973065545695158 },
                { start: 100, end: 300, density: 0.022419430172816446 },
                { start: 300, density: 0.004515024132025534 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2534,
        lcp: 3091,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816642552,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8756751350270046,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09941988397679526,
                },
                { start: "0.25", density: 0.024904980996199217 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.733166583291647 },
                { start: 1800, end: 3000, density: 0.17778889444722387 },
                { start: 3000, density: 0.08904452226112983 },
              ],
              percentiles: { p75: 1877 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9631000000000003 },
                { start: 100, end: 300, density: 0.020500000000000008 },
                { start: 300, density: 0.01640000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7894000000000022 },
                { start: 2500, end: 4000, density: 0.1407000000000004 },
                { start: 4000, density: 0.06989999999999974 },
              ],
              percentiles: { p75: 2310 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1877,
        lcp: 2310,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648816642687,
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
                { start: 0, end: 1800, density: 0.4275161588181069 },
                { start: 1800, end: 3000, density: 0.32502308402586094 },
                { start: 3000, density: 0.24746075715605362 },
              ],
              percentiles: { p75: 3026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517759562841522 },
                { start: 100, end: 300, density: 0.03346994535519123 },
                { start: 300, density: 0.014754098360655723 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5480541677622962 },
                { start: 2500, end: 4000, density: 0.27971338417039354 },
                { start: 4000, density: 0.17223244806731858 },
              ],
              percentiles: { p75: 3386 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.92029741716671 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.051395773545525686,
                },
                { start: "0.25", density: 0.028306809287764148 },
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
        fcp: 3026,
        lcp: 3386,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816642744,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8493102758896507 },
                { start: 2500, end: 4000, density: 0.10050979608156817 },
                { start: 4000, density: 0.05017992802878927 },
              ],
              percentiles: { p75: 1962 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9347000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.050300000000000025,
                },
                { start: "0.25", density: 0.015000000000000006 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8253650730146114 },
                { start: 1800, end: 3000, density: 0.11542308461692455 },
                { start: 3000, density: 0.05921184236847471 },
              ],
              percentiles: { p75: 1503 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620227863281995 },
                { start: 100, end: 300, density: 0.02248650809514283 },
                { start: 300, density: 0.015490705576653906 },
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
        fcp: 1503,
        lcp: 1962,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648816642849,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9222000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058700000000000016,
                },
                { start: "0.25", density: 0.019100000000000006 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8224467340202135 },
                { start: 1800, end: 3000, density: 0.13444033209963108 },
                { start: 3000, density: 0.043112933880163996 },
              ],
              percentiles: { p75: 1596 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9714942988597697 },
                { start: 100, end: 300, density: 0.01940388077615519 },
                { start: 300, density: 0.009101820364072838 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.856300000000004 },
                { start: 2500, end: 4000, density: 0.11220000000000052 },
                { start: 4000, density: 0.03150000000000026 },
              ],
              percentiles: { p75: 2058 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1596,
        lcp: 2058,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648816642901,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.841068213642728,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1138227645529105,
                },
                { start: "0.25", density: 0.04510902180436085 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5482548254825471 },
                { start: 1800, end: 3000, density: 0.28032803280327967 },
                { start: 3000, density: 0.1714171417141713 },
              ],
              percentiles: { p75: 2581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9740974097409723 },
                { start: 100, end: 300, density: 0.021402140214021363 },
                { start: 300, density: 0.00450045004500448 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6534846515348476 },
                { start: 2500, end: 4000, density: 0.20672932706729374 },
                { start: 4000, density: 0.13978602139786173 },
              ],
              percentiles: { p75: 3042 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2581,
        lcp: 3042,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1648816642952,
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
                  density: 0.9038162459624349,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05491087450651987,
                },
                { start: "0.25", density: 0.041272879531044325 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5844077599710796 },
                { start: 1800, end: 3000, density: 0.24376430895288534 },
                { start: 3000, density: 0.17182793107603628 },
              ],
              percentiles: { p75: 2489 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9550894509561977 },
                { start: 100, end: 300, density: 0.03133867982726705 },
                { start: 300, density: 0.013571869216533023 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6880125422093538 },
                { start: 2500, end: 4000, density: 0.17932947419199102 },
                { start: 4000, density: 0.1326579835986489 },
              ],
              percentiles: { p75: 2888 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2489,
        lcp: 2888,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816643006,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 2962 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3382 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2962, lcp: 3382, cls: "0.18" },
      timestamp: 1648816643115,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8718999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07129999999999996,
                },
                { start: "0.25", density: 0.056800000000000024 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.05768846230753801 },
                { start: 1800, end: 3000, density: 0.44771045790841446 },
                { start: 3000, density: 0.49460107978404033 },
              ],
              percentiles: { p75: 4861 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.20423872838148252 },
                { start: 2500, end: 4000, density: 0.4012796161151594 },
                { start: 4000, density: 0.39448165550334147 },
              ],
              percentiles: { p75: 5421 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4861, lcp: 5421, cls: "0.05" },
      timestamp: 1648816643174,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9396241503398586 },
                { start: 100, end: 300, density: 0.036485405837664714 },
                { start: 300, density: 0.02389044382247096 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7603739626037549 },
                { start: 2500, end: 4000, density: 0.1507349265073523 },
                { start: 4000, density: 0.08889111088891452 },
              ],
              percentiles: { p75: 2485 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8218356328734251,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1322735452909418,
                },
                { start: "0.25", density: 0.04589082183563279 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7078876337099037 },
                { start: 1800, end: 3000, density: 0.17334799560132375 },
                { start: 3000, density: 0.11876437068879742 },
              ],
              percentiles: { p75: 2016 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2016,
        lcp: 2485,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1648816643225,
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
                  density: 0.9365574622984919,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036661466458658344,
                },
                { start: "0.25", density: 0.026781071242849706 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5389670127480665 },
                { start: 1800, end: 3000, density: 0.28676567223025623 },
                { start: 3000, density: 0.17426731502169085 },
              ],
              percentiles: { p75: 2535 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347677127586691 },
                { start: 100, end: 300, density: 0.05344662189941078 },
                { start: 300, density: 0.011785665341921363 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6710265556876778 },
                { start: 2500, end: 4000, density: 0.18945699564011215 },
                { start: 4000, density: 0.13951644867221527 },
              ],
              percentiles: { p75: 3033 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2535,
        lcp: 3033,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816643281,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9396394340483801,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05454130534002741,
                },
                { start: "0.25", density: 0.005819260611592882 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8044250831136123 },
                { start: 1800, end: 3000, density: 0.1536168749283512 },
                { start: 3000, density: 0.04195804195804209 },
              ],
              percentiles: { p75: 1659 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583764516499939 },
                { start: 100, end: 300, density: 0.018052201908704147 },
                { start: 300, density: 0.023571346441301544 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8331239291833211 },
                { start: 2500, end: 4000, density: 0.12941176470588192 },
                { start: 4000, density: 0.03746430611079374 },
              ],
              percentiles: { p75: 2107 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1659,
        lcp: 2107,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816643389,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6635845661735322 },
                { start: 2500, end: 4000, density: 0.22965813674530244 },
                { start: 4000, density: 0.10675729708116795 },
              ],
              percentiles: { p75: 2943 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9061906190619063,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07170717071707171,
                },
                { start: "0.25", density: 0.02210221022102209 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5695000000000018 },
                { start: 1800, end: 3000, density: 0.26060000000000083 },
                { start: 3000, density: 0.16990000000000074 },
              ],
              percentiles: { p75: 2611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543999999999968 },
                { start: 100, end: 300, density: 0.0318999999999999 },
                { start: 300, density: 0.01369999999999996 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2611,
        lcp: 2943,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1648816643507,
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
                  density: 0.8599860821155185,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10675017397355603,
                },
                { start: "0.25", density: 0.03326374391092553 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8864781634938461 },
                { start: 1800, end: 3000, density: 0.0860862262038079 },
                { start: 3000, density: 0.0274356103023515 },
              ],
              percentiles: { p75: 1358 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9292346651660136 },
                { start: 100, end: 300, density: 0.03812605514912788 },
                { start: 300, density: 0.032639279684862126 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593947036570072 },
                { start: 2500, end: 4000, density: 0.11524450049040334 },
                { start: 4000, density: 0.025360795852599226 },
              ],
              percentiles: { p75: 2017 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1358,
        lcp: 2017,
        cls: "0.02",
        fid: 17,
      },
      timestamp: 1648816643566,
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
                { start: 0, end: 2500, density: 0.7494078947368317 },
                { start: 2500, end: 4000, density: 0.1549342105263137 },
                { start: 4000, density: 0.09565789473684148 },
              ],
              percentiles: { p75: 2542 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9084139012281148,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07002874314084129,
                },
                { start: "0.25", density: 0.02155735563104258 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6707943617441702 },
                { start: 1800, end: 3000, density: 0.19022526676327206 },
                { start: 3000, density: 0.13898037149255743 },
              ],
              percentiles: { p75: 2160 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9324644549762953 },
                { start: 100, end: 300, density: 0.043048973143759516 },
                { start: 300, density: 0.024486571879936567 },
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
        fcp: 2160,
        lcp: 2542,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816643696,
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
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 3064 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3392 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
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
      extractedResults: { fcp: 3064, lcp: 3392, cls: "0.17" },
      timestamp: 1648816643818,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7600760076007607,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17291729172917306,
                },
                { start: "0.25", density: 0.06700670067006696 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.707241448289658 },
                { start: 1800, end: 3000, density: 0.1794358871774355 },
                { start: 3000, density: 0.11332266453290696 },
              ],
              percentiles: { p75: 2072 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691938387677514 },
                { start: 100, end: 300, density: 0.01600320064012799 },
                { start: 300, density: 0.014802960592118391 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170434086817374 },
                { start: 2500, end: 4000, density: 0.16723344668933804 },
                { start: 4000, density: 0.1157231446289254 },
              ],
              percentiles: { p75: 2790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2072,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648816643943,
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
                  density: 0.9328903654485045,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.034817275747508286,
                },
                { start: "0.25", density: 0.03229235880398672 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6271982816485533 },
                { start: 1800, end: 3000, density: 0.24325412807088576 },
                { start: 3000, density: 0.12954759028057572 },
              ],
              percentiles: { p75: 2216 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611581920903965 },
                { start: 100, end: 300, density: 0.03163841807909608 },
                { start: 300, density: 0.007203389830508489 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7269318334003041 },
                { start: 2500, end: 4000, density: 0.16619793759207388 },
                { start: 4000, density: 0.10687022900763582 },
              ],
              percentiles: { p75: 2653 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2216,
        lcp: 2653,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816644001,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9114911491149109,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06340634063406336,
                },
                { start: "0.25", density: 0.025102510251025084 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6102169349195206 },
                { start: 1800, end: 3000, density: 0.2485254423672883 },
                { start: 3000, density: 0.14125762271318792 },
              ],
              percentiles: { p75: 2312 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9500000000000028 },
                { start: 100, end: 300, density: 0.03900000000000011 },
                { start: 300, density: 0.011000000000000012 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6939306069393107 },
                { start: 2500, end: 4000, density: 0.17678232176782446 },
                { start: 4000, density: 0.12928707129287317 },
              ],
              percentiles: { p75: 2898 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2312,
        lcp: 2898,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648816644129,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9038832868483192 },
                { start: 1800, end: 3000, density: 0.07080025745548194 },
                { start: 3000, density: 0.02531645569620257 },
              ],
              percentiles: { p75: 1264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636363636363634 },
                { start: 100, end: 300, density: 0.022272727272727263 },
                { start: 300, density: 0.014090909090909062 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9048428207306733 },
                { start: 2500, end: 4000, density: 0.07200509770603246 },
                { start: 4000, density: 0.023152081563296453 },
              ],
              percentiles: { p75: 1719 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9077436860780633,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06887914840325612,
                },
                { start: "0.25", density: 0.023377165518680867 },
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
        fcp: 1264,
        lcp: 1719,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816644196,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6647005898230529 },
                { start: 1800, end: 3000, density: 0.24632610216934922 },
                { start: 3000, density: 0.08897330800759788 },
              ],
              percentiles: { p75: 2115 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7407500000000012 },
                { start: 2500, end: 4000, density: 0.14635000000000026 },
                { start: 4000, density: 0.11290000000000011 },
              ],
              percentiles: { p75: 2689 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9126999999999992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06859999999999994,
                },
                { start: "0.25", density: 0.01869999999999998 },
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
      extractedResults: { fcp: 2115, lcp: 2689, cls: "0.01" },
      timestamp: 1648816644324,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9871000000000001 },
                { start: 100, end: 300, density: 0.011200000000000002 },
                { start: 300, density: 0.0017000000000000003 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.827800000000006 },
                { start: 2500, end: 4000, density: 0.11280000000000084 },
                { start: 4000, density: 0.05940000000000016 },
              ],
              percentiles: { p75: 2121 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9121087891210882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06229377062293773,
                },
                { start: "0.25", density: 0.025597440255974418 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7900209979002114 },
                { start: 1800, end: 3000, density: 0.16118388161183914 },
                { start: 3000, density: 0.048795120487951066 },
              ],
              percentiles: { p75: 1669 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1669, lcp: 2121, cls: "0.02", fid: 8 },
      timestamp: 1648816644400,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9279144171165797 },
                { start: 1800, end: 3000, density: 0.058688262347530704 },
                { start: 3000, density: 0.013397320535892949 },
              ],
              percentiles: { p75: 1238 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9716028397160263 },
                { start: 100, end: 300, density: 0.01429857014298567 },
                { start: 300, density: 0.014098590140985903 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9196080391960836 },
                { start: 2500, end: 4000, density: 0.06579342065793442 },
                { start: 4000, density: 0.014598540145985496 },
              ],
              percentiles: { p75: 1690 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8195180481951803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1423857614238576,
                },
                { start: "0.25", density: 0.03809619038096189 },
              ],
              percentiles: { p75: "0.06" },
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
        lcp: 1690,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648816644477,
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
                  density: 0.8377101417426651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10559279200087895,
                },
                { start: "0.25", density: 0.05669706625645526 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6518093556928487 },
                { start: 1800, end: 3000, density: 0.2177846425419234 },
                { start: 3000, density: 0.1304060017652237 },
              ],
              percentiles: { p75: 2230 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9580403972770861 },
                { start: 100, end: 300, density: 0.029684187032697134 },
                { start: 300, density: 0.012275415690213209 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7296014132715014 },
                { start: 2500, end: 4000, density: 0.17113834603069414 },
                { start: 4000, density: 0.09926024069780272 },
              ],
              percentiles: { p75: 2616 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2230,
        lcp: 2616,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1648816644553,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400693412580495 },
                { start: 100, end: 300, density: 0.02947003467062906 },
                { start: 300, density: 0.030460624071322467 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6462214779150048 },
                { start: 2500, end: 4000, density: 0.19991626543855834 },
                { start: 4000, density: 0.15386225664642905 },
              ],
              percentiles: { p75: 3054 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9153972828324417,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05475504322766573,
                },
                { start: "0.25", density: 0.02984767393989295 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5776241357636699 },
                { start: 1800, end: 3000, density: 0.24177666038131113 },
                { start: 3000, density: 0.18059920385501826 },
              ],
              percentiles: { p75: 2449 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2449,
        lcp: 3054,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1648816644686,
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
                { start: 0, end: 100, density: 0.9324177022018764 },
                { start: 100, end: 300, density: 0.03139306736429043 },
                { start: 300, density: 0.03618923043383484 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8777455449647716 },
                { start: 2500, end: 4000, density: 0.0984251968503934 },
                { start: 4000, density: 0.023829258184831937 },
              ],
              percentiles: { p75: 1947 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8982399352619872,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08112482298199479,
                },
                { start: "0.25", density: 0.02063524175601863 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8372044794690994 },
                { start: 1800, end: 3000, density: 0.12484446287847357 },
                { start: 3000, density: 0.03795105765242659 },
              ],
              percentiles: { p75: 1540 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1540,
        lcp: 1947,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1648816644830,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.663499999999996 },
                { start: 2500, end: 4000, density: 0.19139999999999882 },
                { start: 4000, density: 0.14509999999999948 },
              ],
              percentiles: { p75: 3094 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8324999999999992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1113999999999999,
                },
                { start: "0.25", density: 0.05609999999999994 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.611083324997496 },
                { start: 1800, end: 3000, density: 0.22356707012103505 },
                { start: 3000, density: 0.16534960488146366 },
              ],
              percentiles: { p75: 2434 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.921592159215918 },
                { start: 100, end: 300, density: 0.03480348034803467 },
                { start: 300, density: 0.04360436043604317 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2434,
        lcp: 3094,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648816644973,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8604207758054031 },
                { start: 2500, end: 4000, density: 0.0957922419460894 },
                { start: 4000, density: 0.043786982248521684 },
              ],
              percentiles: { p75: 1889 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8538371028892664,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08942345404628053,
                },
                { start: "0.25", density: 0.056739443064452916 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8295439610987035 },
                { start: 1800, end: 3000, density: 0.11499540018399322 },
                { start: 3000, density: 0.05546063871730858 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472292024864478 },
                { start: 100, end: 300, density: 0.029361195609046556 },
                { start: 300, density: 0.02340960190451011 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1518,
        lcp: 1889,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1648816645038,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6075999999999976 },
                { start: 1800, end: 3000, density: 0.231999999999999 },
                { start: 3000, density: 0.16040000000000146 },
              ],
              percentiles: { p75: 2389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602159136345544 },
                { start: 100, end: 300, density: 0.02718912435026013 },
                { start: 300, density: 0.012594962015194036 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.691545772886443 },
                { start: 2500, end: 4000, density: 0.1724862431215607 },
                { start: 4000, density: 0.13596798399199733 },
              ],
              percentiles: { p75: 2885 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8529999999999996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09829999999999996,
                },
                { start: "0.25", density: 0.04869999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2389,
        lcp: 2885,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1648816645189,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7826000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1647 },
                { start: "0.25", density: 0.052700000000000004 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8992000000000018 },
                { start: 1800, end: 3000, density: 0.07620000000000014 },
                { start: 3000, density: 0.024600000000000014 },
              ],
              percentiles: { p75: 1301 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9421884376875341 },
                { start: 100, end: 300, density: 0.030006001200239933 },
                { start: 300, density: 0.02780556111222233 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633000000000001 },
                { start: 2500, end: 4000, density: 0.11000000000000007 },
                { start: 4000, density: 0.026700000000000012 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1301,
        lcp: 1980,
        cls: "0.08",
        fid: 14,
      },
      timestamp: 1648816645257,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9361 },
                { start: 100, end: 300, density: 0.031400000000000004 },
                { start: 300, density: 0.03249999999999994 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9051905190519061 },
                { start: 2500, end: 4000, density: 0.06880688068806887 },
                { start: 4000, density: 0.026002600260026213 },
              ],
              percentiles: { p75: 1674 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8657 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09270000000000002,
                },
                { start: "0.25", density: 0.04159999999999999 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9160916091609173 },
                { start: 1800, end: 3000, density: 0.06240624062406247 },
                { start: 3000, density: 0.02150215021502163 },
              ],
              percentiles: { p75: 1192 },
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
        lcp: 1674,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1648816645323,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9817018298170184 },
                { start: 100, end: 300, density: 0.015398460153984602 },
                { start: 300, density: 0.0028997100289971 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6923076923076898 },
                { start: 2500, end: 4000, density: 0.16574972491747472 },
                { start: 4000, density: 0.14194258277483165 },
              ],
              percentiles: { p75: 2895 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8204000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11730000000000006,
                },
                { start: "0.25", density: 0.062300000000000015 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6680663867226584 },
                { start: 1800, end: 3000, density: 0.19446110777844525 },
                { start: 3000, density: 0.13747250549890142 },
              ],
              percentiles: { p75: 2257 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2257,
        lcp: 2895,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1648816645385,
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
                { start: 0, end: 100, density: 0.9515784476619945 },
                { start: 100, end: 300, density: 0.02777118442914776 },
                { start: 300, density: 0.020650367908853353 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7937067042385806 },
                { start: 2500, end: 4000, density: 0.15181401902078162 },
                { start: 4000, density: 0.054479276740636746 },
              ],
              percentiles: { p75: 2305 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8057402870143516,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17407537043518864,
                },
                { start: "0.25", density: 0.020184342550460855 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7437822618489054 },
                { start: 1800, end: 3000, density: 0.1909901454716117 },
                { start: 3000, density: 0.06522759267949446 },
              ],
              percentiles: { p75: 1821 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1821,
        lcp: 2305,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1648816645450,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9384061593840618,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03569643035696431,
                },
                { start: "0.25", density: 0.0258974102589741 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3639636036396398 },
                { start: 1800, end: 3000, density: 0.33136686331367204 },
                { start: 3000, density: 0.30466953304669875 },
              ],
              percentiles: { p75: 3280 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712028797120289 },
                { start: 100, end: 300, density: 0.0257974202579742 },
                { start: 300, density: 0.0029997000299970002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46984095228568534 },
                { start: 2500, end: 4000, density: 0.326197859357807 },
                { start: 4000, density: 0.20396118835650942 },
              ],
              percentiles: { p75: 3753 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3280,
        lcp: 3753,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816645580,
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
                  density: 0.9436345966958205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03692905733722058,
                },
                { start: "0.25", density: 0.0194363459669582 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7118831328259289 },
                { start: 1800, end: 3000, density: 0.19408298551436345 },
                { start: 3000, density: 0.09403388165971024 },
              ],
              percentiles: { p75: 1963 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9528735632183911 },
                { start: 100, end: 300, density: 0.026181353767560676 },
                { start: 300, density: 0.02094508301404858 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7871898300941264 },
                { start: 2500, end: 4000, density: 0.14215866031047655 },
                { start: 4000, density: 0.0706515095954048 },
              ],
              percentiles: { p75: 2325 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1963,
        lcp: 2325,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816645649,
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
                { start: 0, end: 100, density: 0.9624119028974173 },
                { start: 100, end: 300, density: 0.026363873662229226 },
                { start: 300, density: 0.011224223440355008 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7419742163801861 },
                { start: 2500, end: 4000, density: 0.17460819009100198 },
                { start: 4000, density: 0.08341759352881781 },
              ],
              percentiles: { p75: 2541 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7813048933500625,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18494353826850685,
                },
                { start: "0.25", density: 0.03375156838143032 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6974864216243599 },
                { start: 1800, end: 3000, density: 0.22369584438550183 },
                { start: 3000, density: 0.07881773399014881 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1980,
        lcp: 2541,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1648816645785,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9650034996500363 },
                { start: 100, end: 300, density: 0.027097290270972938 },
                { start: 300, density: 0.00789921007899211 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6390639063906434 },
                { start: 2500, end: 4000, density: 0.22612261226122754 },
                { start: 4000, density: 0.13481348134813662 },
              ],
              percentiles: { p75: 3085 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9052905290529056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06670667066706673,
                },
                { start: "0.25", density: 0.028002800280028016 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5399539953995444 },
                { start: 1800, end: 3000, density: 0.28022802280228254 },
                { start: 3000, density: 0.17981798179818348 },
              ],
              percentiles: { p75: 2625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2625,
        lcp: 3085,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1648816645922,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7357207162148645 },
                { start: 2500, end: 4000, density: 0.1754526357907371 },
                { start: 4000, density: 0.08882664799439821 },
              ],
              percentiles: { p75: 2642 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7361263873612636,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.193880611938806,
                },
                { start: "0.25", density: 0.06999300069992993 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6343097070878738 },
                { start: 1800, end: 3000, density: 0.26612016395081484 },
                { start: 3000, density: 0.09957012896131166 },
              ],
              percentiles: { p75: 2294 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9894010598940107 },
                { start: 100, end: 300, density: 0.010598940105989404 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2294,
        lcp: 2642,
        cls: "0.10",
        fid: 11,
      },
      timestamp: 1648816645994,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691938387677514 },
                { start: 100, end: 300, density: 0.01600320064012799 },
                { start: 300, density: 0.014802960592118391 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170434086817374 },
                { start: 2500, end: 4000, density: 0.16723344668933804 },
                { start: 4000, density: 0.1157231446289254 },
              ],
              percentiles: { p75: 2790 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7600760076007607,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17291729172917306,
                },
                { start: "0.25", density: 0.06700670067006696 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.707241448289658 },
                { start: 1800, end: 3000, density: 0.1794358871774355 },
                { start: 3000, density: 0.11332266453290696 },
              ],
              percentiles: { p75: 2072 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2072,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648816646063,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9661 },
                { start: 100, end: 300, density: 0.0275 },
                { start: 300, density: 0.006400000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5821164232846503 },
                { start: 2500, end: 4000, density: 0.2596519303860743 },
                { start: 4000, density: 0.15823164632926373 },
              ],
              percentiles: { p75: 3294 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8494849484948493,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08950895089508949,
                },
                { start: "0.25", density: 0.06100610061006096 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44155584441555784 },
                { start: 1800, end: 3000, density: 0.3565643435656429 },
                { start: 3000, density: 0.2018798120187992 },
              ],
              percentiles: { p75: 2802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2802,
        lcp: 3294,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1648816646131,
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
                  density: 0.9594795539033463,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02602230483271377,
                },
                { start: "0.25", density: 0.01449814126394053 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8025199600798457 },
                { start: 1800, end: 3000, density: 0.1296157684630747 },
                { start: 3000, density: 0.06786427145708632 },
              ],
              percentiles: { p75: 1586 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534273941815492 },
                { start: 100, end: 300, density: 0.02721937819952563 },
                { start: 300, density: 0.019353227618928718 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8389872786231068 },
                { start: 2500, end: 4000, density: 0.10576203542030543 },
                { start: 4000, density: 0.05525068595659859 },
              ],
              percentiles: { p75: 1996 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1586,
        lcp: 1996,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816646202,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
              ],
              percentiles: { p75: "0.18" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 2962 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3382 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2962, lcp: 3382, cls: "0.18" },
      timestamp: 1648816646336,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7953999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13169999999999996,
                },
                { start: "0.25", density: 0.07290000000000003 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7645470905818912 },
                { start: 1800, end: 3000, density: 0.14657068586282895 },
                { start: 3000, density: 0.0888822235552902 },
              ],
              percentiles: { p75: 1764 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977904419116176 },
                { start: 100, end: 300, density: 0.01839632073585281 },
                { start: 300, density: 0.0036992601479703996 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8190138027605597 },
                { start: 2500, end: 4000, density: 0.10857171434286955 },
                { start: 4000, density: 0.07241448289658073 },
              ],
              percentiles: { p75: 2154 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1764,
        lcp: 2154,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1648816646407,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619885965789765 },
                { start: 100, end: 300, density: 0.02180654196258884 },
                { start: 300, density: 0.01620486145843756 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593937575030077 },
                { start: 2500, end: 4000, density: 0.09508803521408639 },
                { start: 4000, density: 0.04551820728291344 },
              ],
              percentiles: { p75: 2058 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7905 },
                { start: "0.10", end: "0.25", density: 0.1617 },
                { start: "0.25", density: 0.04779999999999999 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8628137186281422 },
                { start: 1800, end: 3000, density: 0.09579042095790473 },
                { start: 3000, density: 0.04139586041395874 },
              ],
              percentiles: { p75: 1403 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1403,
        lcp: 2058,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1648816646477,
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
                { start: 0, end: 1800, density: 0.8217317487266675 },
                { start: 1800, end: 3000, density: 0.13563478588945685 },
                { start: 3000, density: 0.04263346538389018 },
              ],
              percentiles: { p75: 1591 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9364194088120521 },
                { start: 100, end: 300, density: 0.03513664249860588 },
                { start: 300, density: 0.028443948689347583 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8304387568555935 },
                { start: 2500, end: 4000, density: 0.12495429616088016 },
                { start: 4000, density: 0.04460694698354727 },
              ],
              percentiles: { p75: 2214 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9433590249148582,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040688295393439634,
                },
                { start: "0.25", density: 0.015952679691701006 },
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
        fcp: 1591,
        lcp: 2214,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1648816646545,
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
                  density: 0.844158878504673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10537383177570095,
                },
                { start: "0.25", density: 0.05046728971962615 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7468012677544387 },
                { start: 1800, end: 3000, density: 0.15823453456978673 },
                { start: 3000, density: 0.09496419767578503 },
              ],
              percentiles: { p75: 1825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748062015503882 },
                { start: 100, end: 300, density: 0.02228682170542637 },
                { start: 300, density: 0.002906976744186044 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8101889893180025 },
                { start: 2500, end: 4000, density: 0.1156238995187239 },
                { start: 4000, density: 0.07418711116328323 },
              ],
              percentiles: { p75: 2205 },
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
        lcp: 2205,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1648816646696,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9420499999999978 },
                { start: 2500, end: 4000, density: 0.04464999999999989 },
                { start: 4000, density: 0.01329999999999994 },
              ],
              percentiles: { p75: 1628 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9188999999999998,
                },
                { start: "0.10", end: "0.25", density: 0.0715 },
                { start: "0.25", density: 0.009599999999999994 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9468000000000008 },
                { start: 1800, end: 3000, density: 0.04550000000000005 },
                { start: 3000, density: 0.007700000000000009 },
              ],
              percentiles: { p75: 1122 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618038196180381 },
                { start: 100, end: 300, density: 0.032996700329966995 },
                { start: 300, density: 0.005199480051994799 },
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
        fcp: 1122,
        lcp: 1628,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1648816646854,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6789178917891779 },
                { start: 2500, end: 4000, density: 0.20247024702470226 },
                { start: 4000, density: 0.11861186118611872 },
              ],
              percentiles: { p75: 2939 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7486748674867483,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17301730173017293,
                },
                { start: "0.25", density: 0.0783078307830783 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6121999999999977 },
                { start: 1800, end: 3000, density: 0.23879999999999907 },
                { start: 3000, density: 0.1489999999999986 },
              ],
              percentiles: { p75: 2443 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9796979697969801 },
                { start: 100, end: 300, density: 0.011901190119011903 },
                { start: 300, density: 0.008400840084008413 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2443, lcp: 2939, cls: "0.10", fid: 9 },
      timestamp: 1648816646928,
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
                  density: 0.8372595880277677,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11710481392966872,
                },
                { start: "0.25", density: 0.045635598042562855 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45418098510881777 },
                { start: 1800, end: 3000, density: 0.25922107674684863 },
                { start: 3000, density: 0.28659793814433154 },
              ],
              percentiles: { p75: 3321 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9024563060935242 },
                { start: 100, end: 300, density: 0.06176192725555001 },
                { start: 300, density: 0.03578176665092105 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4778390171087298 },
                { start: 2500, end: 4000, density: 0.2557698932139122 },
                { start: 4000, density: 0.2663910896773417 },
              ],
              percentiles: { p75: 4234 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3321,
        lcp: 4234,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1648816647001,
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
                  density: 0.9438328746559906,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03477608206154611,
                },
                { start: "0.25", density: 0.021391043282461827 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6321087065928548 },
                { start: 1800, end: 3000, density: 0.27428283844992507 },
                { start: 3000, density: 0.093608454957222 },
              ],
              percentiles: { p75: 2179 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.755016302984703 },
                { start: 2500, end: 4000, density: 0.14403059944820723 },
                { start: 4000, density: 0.10095309756709298 },
              ],
              percentiles: { p75: 2648 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 2179, lcp: 2648, cls: "0.00" },
      timestamp: 1648816647146,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8120812081208112,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12351235123512337,
                },
                { start: "0.25", density: 0.06440644064406437 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6640664066406617 },
                { start: 1800, end: 3000, density: 0.20912091209120842 },
                { start: 3000, density: 0.12681268126812778 },
              ],
              percentiles: { p75: 2188 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604118764370659 },
                { start: 100, end: 300, density: 0.027991602519244135 },
                { start: 300, density: 0.011596521043686955 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7342265773422609 },
                { start: 2500, end: 4000, density: 0.16558344165583327 },
                { start: 4000, density: 0.1001899810019002 },
              ],
              percentiles: { p75: 2596 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2188,
        lcp: 2596,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648816647319,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.813118688131187,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15268473152684736,
                },
                { start: "0.25", density: 0.03419658034196581 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7407259274072628 },
                { start: 1800, end: 3000, density: 0.19158084191580935 },
                { start: 3000, density: 0.06769323067693327 },
              ],
              percentiles: { p75: 1826 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9706970697069728 },
                { start: 100, end: 300, density: 0.020502050205020547 },
                { start: 300, density: 0.008800880088008807 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7694230576942362 },
                { start: 2500, end: 4000, density: 0.15348465153484767 },
                { start: 4000, density: 0.07709229077092423 },
              ],
              percentiles: { p75: 2407 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1826,
        lcp: 2407,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648816647395,
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
                  density: 0.6684000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.1632 },
                { start: "0.25", density: 0.16839999999999986 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5910999999999998 },
                { start: 1800, end: 3000, density: 0.1669999999999999 },
                { start: 3000, density: 0.24190000000000098 },
              ],
              percentiles: { p75: 3064 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6285000000000006 },
                { start: 2500, end: 4000, density: 0.1894000000000001 },
                { start: 4000, density: 0.1821000000000013 },
              ],
              percentiles: { p75: 3392 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3064, lcp: 3392, cls: "0.17" },
      timestamp: 1648816647471,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7200151821862364 },
                { start: 1800, end: 3000, density: 0.183451417004049 },
                { start: 3000, density: 0.09653340080971842 },
              ],
              percentiles: { p75: 1924 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9443946188340748 },
                { start: 100, end: 300, density: 0.034593209481101644 },
                { start: 300, density: 0.021012171684817484 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.786266801927471 },
                { start: 2500, end: 4000, density: 0.14335531321329015 },
                { start: 4000, density: 0.07037788485924505 },
              ],
              percentiles: { p75: 2324 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.88258292344558 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.062555177197629,
                },
                { start: "0.25", density: 0.054861899356791595 },
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
        fcp: 1924,
        lcp: 2324,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1648816647623,
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
                { start: 0, end: 2500, density: 0.8554835224203173 },
                { start: 2500, end: 4000, density: 0.11102106969205887 },
                { start: 4000, density: 0.03349540788762846 },
              ],
              percentiles: { p75: 2096 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9499999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03284574468085106,
                },
                { start: "0.25", density: 0.017154255319148923 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7908750334493007 },
                { start: 1800, end: 3000, density: 0.157077869949159 },
                { start: 3000, density: 0.05204709660155242 },
              ],
              percentiles: { p75: 1697 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630463576158912 },
                { start: 100, end: 300, density: 0.025298013245033037 },
                { start: 300, density: 0.011655629139072868 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1697,
        lcp: 2096,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816647784,
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
                  density: 0.8718999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07129999999999996,
                },
                { start: "0.25", density: 0.056800000000000024 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.05768846230753801 },
                { start: 1800, end: 3000, density: 0.44771045790841446 },
                { start: 3000, density: 0.49460107978404033 },
              ],
              percentiles: { p75: 4832 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.20423872838148252 },
                { start: 2500, end: 4000, density: 0.4012796161151594 },
                { start: 4000, density: 0.39448165550334147 },
              ],
              percentiles: { p75: 5371 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4832, lcp: 5371, cls: "0.04" },
      timestamp: 1648816647942,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46735326467353433 },
                { start: 1800, end: 3000, density: 0.29297070292970806 },
                { start: 3000, density: 0.23967603239676324 },
              ],
              percentiles: { p75: 2960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308484061157244 },
                { start: 100, end: 300, density: 0.03327670630558628 },
                { start: 300, density: 0.03587488757869517 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5484451554844543 },
                { start: 2500, end: 4000, density: 0.27197280271972935 },
                { start: 4000, density: 0.17958204179582268 },
              ],
              percentiles: { p75: 3477 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7335000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17020000000000005,
                },
                { start: "0.25", density: 0.09630000000000005 },
              ],
              percentiles: { p75: "0.11" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2960,
        lcp: 3477,
        cls: "0.11",
        fid: 12,
      },
      timestamp: 1648816648116,
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
                  density: 0.9432585294654258,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0341178617040686,
                },
                { start: "0.25", density: 0.022623608830505376 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8275225973067679 },
                { start: 1800, end: 3000, density: 0.11898173768677342 },
                { start: 3000, density: 0.05349566500645618 },
              ],
              percentiles: { p75: 1611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481696266763311 },
                { start: 100, end: 300, density: 0.018484958318231225 },
                { start: 300, density: 0.033345415005436856 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.846750369276216 },
                { start: 2500, end: 4000, density: 0.11669128508124048 },
                { start: 4000, density: 0.036558345642540645 },
              ],
              percentiles: { p75: 2144 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 2144,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1648816648211,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.855300000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12410000000000014,
                },
                { start: "0.25", density: 0.02060000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8735126487351244 },
                { start: 1800, end: 3000, density: 0.09849015098490127 },
                { start: 3000, density: 0.027997200279971945 },
              ],
              percentiles: { p75: 1421 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802960592118428 },
                { start: 100, end: 300, density: 0.012902580516103228 },
                { start: 300, density: 0.006801360272054425 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.895031490552833 },
                { start: 2500, end: 4000, density: 0.07907627711686484 },
                { start: 4000, density: 0.025892232330300847 },
              ],
              percentiles: { p75: 1829 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1421,
        lcp: 1829,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1648816648386,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ci" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386560212907482 },
                { start: 100, end: 300, density: 0.047238855622088974 },
                { start: 300, density: 0.014105123087158977 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5700594844679582 },
                { start: 2500, end: 4000, density: 0.20389953734303207 },
                { start: 4000, density: 0.2260409781890393 },
              ],
              percentiles: { p75: 3854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9314678067107144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03471952325430757,
                },
                { start: "0.25", density: 0.03381267003497864 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4770847012475308 },
                { start: 1800, end: 3000, density: 0.2378200919238311 },
                { start: 3000, density: 0.2850952068286218 },
              ],
              percentiles: { p75: 3438 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3438,
        lcp: 3854,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816648474,
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
                  density: 0.8771973569380386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10110958733325033,
                },
                { start: "0.25", density: 0.02169305572871215 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8601678987595518 },
                { start: 1800, end: 3000, density: 0.11126425259992456 },
                { start: 3000, density: 0.0285678486405212 },
              ],
              percentiles: { p75: 1474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9745904811040894 },
                { start: 100, end: 300, density: 0.016638720495292157 },
                { start: 300, density: 0.008770798400619135 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8968800902142613 },
                { start: 2500, end: 4000, density: 0.07831098859792028 },
                { start: 4000, density: 0.024808921187821117 },
              ],
              percentiles: { p75: 1814 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1474,
        lcp: 1814,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1648816648654,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.750724927507249,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20787921207879204,
                },
                { start: "0.25", density: 0.04139586041395858 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7691230876912455 },
                { start: 1800, end: 3000, density: 0.17278272172783057 },
                { start: 3000, density: 0.05809419058094347 },
              ],
              percentiles: { p75: 1748 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.958691738347666 },
                { start: 100, end: 300, density: 0.02370474094818955 },
                { start: 300, density: 0.017603520704140674 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8071614322864564 },
                { start: 2500, end: 4000, density: 0.14272854570914179 },
                { start: 4000, density: 0.05011002200440162 },
              ],
              percentiles: { p75: 2252 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1748,
        lcp: 2252,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1648816648842,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8277827782778281,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12761276127612767,
                },
                { start: "0.25", density: 0.04460446044604462 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49164415090562935 },
                { start: 1800, end: 3000, density: 0.24727309116381235 },
                { start: 3000, density: 0.26108275793053615 },
              ],
              percentiles: { p75: 3166 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.915157578789392 },
                { start: 100, end: 300, density: 0.0537268634317157 },
                { start: 300, density: 0.03111555777888937 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5081499999999972 },
                { start: 2500, end: 4000, density: 0.24264999999999864 },
                { start: 4000, density: 0.2492000000000003 },
              ],
              percentiles: { p75: 4078 },
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
        lcp: 4078,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1648816648936,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7523752375237529,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16461646164616475,
                },
                { start: "0.25", density: 0.08300830083008315 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788515406162449 },
                { start: 1800, end: 3000, density: 0.08243297318927559 },
                { start: 3000, density: 0.03871548619447793 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9704881952781107 },
                { start: 100, end: 300, density: 0.01110444177671068 },
                { start: 300, density: 0.018407362945178134 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8772122787721216 },
                { start: 2500, end: 4000, density: 0.09389061093890595 },
                { start: 4000, density: 0.028897110288971194 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1341,
        lcp: 1962,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648816649050,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9222000000000009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052100000000000056,
                },
                { start: "0.25", density: 0.025700000000000032 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6044395560444012 },
                { start: 1800, end: 3000, density: 0.18108189181082052 },
                { start: 3000, density: 0.2144785521447906 },
              ],
              percentiles: { p75: 2703 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6324132413241367 },
                { start: 2500, end: 4000, density: 0.20637063706370784 },
                { start: 4000, density: 0.16121612161216212 },
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
      extractedResults: { fcp: 2703, lcp: 3166, cls: "0.00" },
      timestamp: 1648816649151,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9220844168833761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06341268253650725,
                },
                { start: "0.25", density: 0.014502900580116017 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8312831283128305 },
                { start: 1800, end: 3000, density: 0.1253125312531252 },
                { start: 3000, density: 0.043404340434043454 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718028197180283 },
                { start: 100, end: 300, density: 0.024197580241975804 },
                { start: 300, density: 0.003999600039996005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8514351435143537 },
                { start: 2500, end: 4000, density: 0.1148614861486152 },
                { start: 4000, density: 0.03370337033703378 },
              ],
              percentiles: { p75: 2108 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 2108,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1648816649238,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8107999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16409999999999988,
                },
                { start: "0.25", density: 0.025099999999999966 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8711742348469691 },
                { start: 1800, end: 3000, density: 0.10032006401280251 },
                { start: 3000, density: 0.02850570114022801 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9668966896689702 },
                { start: 100, end: 300, density: 0.016501650165016563 },
                { start: 300, density: 0.016601660166016677 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8919891989198896 },
                { start: 2500, end: 4000, density: 0.08570857085708544 },
                { start: 4000, density: 0.02230223022302226 },
              ],
              percentiles: { p75: 1844 },
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
        lcp: 1844,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1648816649324,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6806361272254405 },
                { start: 2500, end: 4000, density: 0.17693538707741424 },
                { start: 4000, density: 0.14242848569713976 },
              ],
              percentiles: { p75: 2972 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8303830383038312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10721072107210732,
                },
                { start: "0.25", density: 0.06240624062406247 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6014804441332421 },
                { start: 1800, end: 3000, density: 0.22406722016605066 },
                { start: 3000, density: 0.1744523357007121 },
              ],
              percentiles: { p75: 2465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522047795220484 },
                { start: 100, end: 300, density: 0.029997000299970027 },
                { start: 300, density: 0.017798220177982146 },
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
        fcp: 2465,
        lcp: 2972,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1648816649406,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9235923592359233,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0423042304230423,
                },
                { start: "0.25", density: 0.034103410341034125 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5273527352735243 },
                { start: 1800, end: 3000, density: 0.21912191219121785 },
                { start: 3000, density: 0.2535253525352528 },
              ],
              percentiles: { p75: 3177 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527047295270445 },
                { start: 100, end: 300, density: 0.035496450354964404 },
                { start: 300, density: 0.01179882011798818 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5848669733946938 },
                { start: 2500, end: 4000, density: 0.19848969793959306 },
                { start: 4000, density: 0.21664332866574368 },
              ],
              percentiles: { p75: 3795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3177,
        lcp: 3795,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1648816649492,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8663732746549316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10102020404080825,
                },
                { start: "0.25", density: 0.03260652130426088 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7298729872987325 },
                { start: 1800, end: 3000, density: 0.16681668166816746 },
                { start: 3000, density: 0.10331033103310404 },
              ],
              percentiles: { p75: 1914 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9782804524071683 },
                { start: 100, end: 300, density: 0.016815133620258264 },
                { start: 300, density: 0.00490441397257531 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7572529011604613 },
                { start: 2500, end: 4000, density: 0.14960984393757443 },
                { start: 4000, density: 0.09313725490196119 },
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
        fcp: 1914,
        lcp: 2469,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1648816649575,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9063906390639058,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06360636063606356,
                },
                { start: "0.25", density: 0.03000300030002997 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6692669266926813 },
                { start: 1800, end: 3000, density: 0.21702170217022096 },
                { start: 3000, density: 0.11371137113711628 },
              ],
              percentiles: { p75: 2104 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672999999999985 },
                { start: 100, end: 300, density: 0.023499999999999962 },
                { start: 300, density: 0.009200000000000007 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7269819054283639 },
                { start: 2500, end: 4000, density: 0.1631510546835932 },
                { start: 4000, density: 0.1098670398880315 },
              ],
              percentiles: { p75: 2672 },
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
        lcp: 2672,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1648816649661,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620924184836903 },
                { start: 100, end: 300, density: 0.024104820964192676 },
                { start: 300, density: 0.01380276055211041 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.793855698989293 },
                { start: 2500, end: 4000, density: 0.14620234163914747 },
                { start: 4000, density: 0.05994195937156004 },
              ],
              percentiles: { p75: 2285 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8935999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09169999999999999,
                },
                { start: "0.25", density: 0.014699999999999993 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7732185748598855 },
                { start: 1800, end: 3000, density: 0.16393114491593228 },
                { start: 3000, density: 0.0628502802241793 },
              ],
              percentiles: { p75: 1729 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1729,
        lcp: 2285,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1648816649746,
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
                { start: 0, end: 2500, density: 0.5592036553524766 },
                { start: 2500, end: 4000, density: 0.287271540469972 },
                { start: 4000, density: 0.1535248041775461 },
              ],
              percentiles: { p75: 3295 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9237586341717715,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.034797341326730104,
                },
                { start: "0.25", density: 0.04144402450149877 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37618796198521476 },
                { start: 1800, end: 3000, density: 0.3944033790918673 },
                { start: 3000, density: 0.22940865892291376 },
              ],
              percentiles: { p75: 2948 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9592332613390927 },
                { start: 100, end: 300, density: 0.03307235421166306 },
                { start: 300, density: 0.007694384449244065 },
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
        fcp: 2948,
        lcp: 3295,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1648816649831,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9808038392321535 },
                { start: 100, end: 300, density: 0.01219756048790242 },
                { start: 300, density: 0.006998600279944002 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9296140771845668 },
                { start: 2500, end: 4000, density: 0.0534893021395723 },
                { start: 4000, density: 0.016896620675864834 },
              ],
              percentiles: { p75: 1541 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7635236476352362,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18728127187281263,
                },
                { start: "0.25", density: 0.0491950804919508 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9326202139358233 },
                { start: 1800, end: 3000, density: 0.050184944516645236 },
                { start: 3000, density: 0.017194841547535835 },
              ],
              percentiles: { p75: 1091 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1091,
        lcp: 1541,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1648816650001,
    },
  ],
};
